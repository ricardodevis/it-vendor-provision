#!/usr/bin/env node
/**
 * Asset Management MCP Server
 *
 * Provides IT asset management data (software inventory, license usage,
 * costs, vendor summaries) for IT governance workflows. Designed to work
 * with the IT Vendor Provision plugin commands: license-audit,
 * vendor-reporting, shadow-it-governance, and vendor-onboarding.
 *
 * Uses embedded mock data for demonstration. In production, replace
 * mock-data imports with API calls to ServiceNow CMDB, Flexera,
 * Snow Software, Zylo, or equivalent ITAM platform.
 */

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import {
  getInventory,
  getAssetById,
  searchAssets,
  getAssetsByVendor,
  getVendorByName,
  getTotalSpend,
  getTotalLicenses,
  VENDOR_SUMMARIES,
  type SoftwareAsset,
  type VendorInfo
} from "./mock-data.js";

// ── Constants ──────────────────────────────────────────────────────────

const CHARACTER_LIMIT = 25000;

// ── Formatting Helpers ─────────────────────────────────────────────────

function formatCurrency(amount: number, currency: string = "EUR"): string {
  return `${currency} ${amount.toLocaleString("en-US")}`;
}

function calculateAdoption(asset: SoftwareAsset): number {
  if (asset.licensesContracted === 0) return 0;
  return Math.round((asset.licensesInUse / asset.licensesContracted) * 1000) / 10;
}

function calculateUtilization(asset: SoftwareAsset): number {
  if (asset.licensesAssigned === 0) return 0;
  return Math.round((asset.licensesInUse / asset.licensesAssigned) * 1000) / 10;
}

function adoptionStatus(rate: number): string {
  if (rate >= 85) return "healthy";
  if (rate >= 60) return "moderate";
  return "low";
}

function formatAssetSummary(asset: SoftwareAsset): Record<string, unknown> {
  const adoption = calculateAdoption(asset);
  const utilization = calculateUtilization(asset);
  return {
    id: asset.id,
    name: asset.name,
    vendor: asset.vendor,
    category: asset.category,
    licenseType: asset.licenseType,
    licenses: {
      contracted: asset.licensesContracted,
      assigned: asset.licensesAssigned,
      inUse: asset.licensesInUse,
      adoptionRate: `${adoption}%`,
      adoptionStatus: adoptionStatus(adoption),
      utilizationRate: `${utilization}%`,
      dormantUsers: asset.usageMetrics.dormantUsers,
      orphanedLicenses: asset.usageMetrics.orphanedLicenses
    },
    cost: {
      unitPerYear: formatCurrency(asset.unitCostPerYear, asset.currency),
      totalPerYear: formatCurrency(asset.totalCostPerYear, asset.currency),
      wastedPerYear: formatCurrency(
        (asset.licensesContracted - asset.licensesInUse) * asset.unitCostPerYear,
        asset.currency
      )
    },
    renewalDate: asset.renewalDate,
    contractTerm: asset.contractTerm,
    owner: asset.owner,
    status: asset.status,
    criticality: asset.criticality,
    deploymentModel: asset.deploymentModel,
    tags: asset.tags
  };
}

function formatAssetMarkdown(asset: SoftwareAsset): string {
  const adoption = calculateAdoption(asset);
  const utilization = calculateUtilization(asset);
  const wasted = (asset.licensesContracted - asset.licensesInUse) * asset.unitCostPerYear;

  const lines: string[] = [
    `## ${asset.name} (${asset.id})`,
    "",
    `| Field | Value |`,
    `|---|---|`,
    `| **Vendor** | ${asset.vendor} |`,
    `| **Category** | ${asset.category} |`,
    `| **License type** | ${asset.licenseType} |`,
    `| **Contracted** | ${asset.licensesContracted} |`,
    `| **Assigned** | ${asset.licensesAssigned} |`,
    `| **In use** | ${asset.licensesInUse} |`,
    `| **Adoption rate** | ${adoption}% (${adoptionStatus(adoption)}) |`,
    `| **Utilization rate** | ${utilization}% |`,
    `| **Dormant users** | ${asset.usageMetrics.dormantUsers} |`,
    `| **Orphaned licenses** | ${asset.usageMetrics.orphanedLicenses} |`,
    `| **Unit cost/year** | ${formatCurrency(asset.unitCostPerYear, asset.currency)} |`,
    `| **Total cost/year** | ${formatCurrency(asset.totalCostPerYear, asset.currency)} |`,
    `| **Estimated waste/year** | ${formatCurrency(wasted, asset.currency)} |`,
    `| **Renewal date** | ${asset.renewalDate} |`,
    `| **Contract term** | ${asset.contractTerm} |`,
    `| **Owner** | ${asset.owner} |`,
    `| **Status** | ${asset.status} |`,
    `| **Criticality** | ${asset.criticality} |`,
    `| **Tags** | ${asset.tags.join(", ")} |`,
    ""
  ];
  return lines.join("\n");
}

function formatVendorMarkdown(vendor: VendorInfo): string {
  const lines: string[] = [
    `## ${vendor.name}`,
    "",
    `| Field | Value |`,
    `|---|---|`,
    `| **Products** | ${vendor.products.join(", ")} |`,
    `| **Annual spend** | ${formatCurrency(vendor.totalAnnualSpend, vendor.currency)} |`,
    `| **Contracts** | ${vendor.contractCount} |`,
    `| **Risk level** | ${vendor.riskLevel} |`,
    `| **Certifications** | ${vendor.certifications.join(", ")} |`,
    `| **Relationship owner** | ${vendor.relationshipOwner} |`,
    `| **Next review** | ${vendor.nextReviewDate} |`,
    `| **Payment terms** | ${vendor.paymentTerms} |`,
    ""
  ];
  return lines.join("\n");
}

// ── Server ─────────────────────────────────────────────────────────────

const server = new McpServer({
  name: "asset-management-mcp-server",
  version: "1.0.0"
});

// ── Tool 1: list_software_inventory ────────────────────────────────────

const ListInventorySchema = z.object({
  status: z.enum(["active", "expiring_soon", "expired", "under_review"])
    .optional()
    .describe("Filter by asset status"),
  criticality: z.enum(["critical", "high", "medium", "low"])
    .optional()
    .describe("Filter by criticality level"),
  vendor: z.string()
    .optional()
    .describe("Filter by vendor name (partial match)"),
  owner: z.string()
    .optional()
    .describe("Filter by business owner (partial match)"),
  tag: z.string()
    .optional()
    .describe("Filter by tag (e.g., 'shadow-it', 'compliance-risk')"),
  format: z.enum(["markdown", "json"])
    .default("markdown")
    .describe("Output format: 'markdown' for human-readable or 'json' for structured data")
}).strict();

type ListInventoryInput = z.infer<typeof ListInventorySchema>;

server.registerTool(
  "list_software_inventory",
  {
    title: "List Software Inventory",
    description: `List all software assets in the IT asset management system with optional filters.

Returns the complete software inventory with license counts, costs, usage metrics, renewal dates, and compliance status. Use filters to narrow results by status, criticality, vendor, owner, or tag.

Args:
  - status (optional): Filter by status — "active", "expiring_soon", "expired", "under_review"
  - criticality (optional): Filter by criticality — "critical", "high", "medium", "low"
  - vendor (optional): Filter by vendor name (partial match, case-insensitive)
  - owner (optional): Filter by business owner (partial match, case-insensitive)
  - tag (optional): Filter by tag (e.g., "shadow-it", "compliance-risk", "pii-risk")
  - format (optional): "markdown" (default) or "json"

Returns:
  Summary statistics (total assets, spend, licenses) followed by per-asset details including license utilization, cost, renewal date, and compliance flags.

Examples:
  - List all assets: no parameters needed
  - Find shadow IT: tag="shadow-it"
  - Expiring contracts: status="expiring_soon"
  - Critical systems only: criticality="critical"
  - Salesforce ecosystem: vendor="salesforce"`,
    inputSchema: ListInventorySchema,
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async (params: ListInventoryInput) => {
    let assets = getInventory();

    if (params.status) {
      assets = assets.filter(a => a.status === params.status);
    }
    if (params.criticality) {
      assets = assets.filter(a => a.criticality === params.criticality);
    }
    if (params.vendor) {
      const v = params.vendor.toLowerCase();
      assets = assets.filter(a => a.vendor.toLowerCase().includes(v));
    }
    if (params.owner) {
      const o = params.owner.toLowerCase();
      assets = assets.filter(a => a.owner.toLowerCase().includes(o));
    }
    if (params.tag) {
      const t = params.tag.toLowerCase();
      assets = assets.filter(a => a.tags.some(tag => tag.toLowerCase().includes(t)));
    }

    const totalSpend = assets.reduce((s, a) => s + a.totalCostPerYear, 0);
    const totalContracted = assets.reduce((s, a) => s + a.licensesContracted, 0);
    const totalInUse = assets.reduce((s, a) => s + a.licensesInUse, 0);

    const output = {
      summary: {
        totalAssets: assets.length,
        totalAnnualSpend: totalSpend,
        totalAnnualSpendFormatted: formatCurrency(totalSpend),
        totalLicensesContracted: totalContracted,
        totalLicensesInUse: totalInUse,
        overallAdoptionRate: totalContracted > 0
          ? `${Math.round((totalInUse / totalContracted) * 1000) / 10}%`
          : "N/A",
        filtersApplied: {
          ...(params.status ? { status: params.status } : {}),
          ...(params.criticality ? { criticality: params.criticality } : {}),
          ...(params.vendor ? { vendor: params.vendor } : {}),
          ...(params.owner ? { owner: params.owner } : {}),
          ...(params.tag ? { tag: params.tag } : {})
        }
      },
      assets: assets.map(formatAssetSummary)
    };

    let textContent: string;
    if (params.format === "json") {
      textContent = JSON.stringify(output, null, 2);
    } else {
      const lines: string[] = [
        `# Software Inventory`,
        "",
        `**Assets found:** ${assets.length} | **Annual spend:** ${formatCurrency(totalSpend)} | **Licenses contracted:** ${totalContracted} | **In use:** ${totalInUse} (${output.summary.overallAdoptionRate})`,
        ""
      ];
      for (const asset of assets) {
        lines.push(formatAssetMarkdown(asset));
      }
      textContent = lines.join("\n");
    }

    if (textContent.length > CHARACTER_LIMIT) {
      textContent = textContent.substring(0, CHARACTER_LIMIT) +
        `\n\n... [Truncated — ${assets.length} assets total. Use filters to narrow results.]`;
    }

    return {
      content: [{ type: "text" as const, text: textContent }],
      structuredContent: output
    };
  }
);

// ── Tool 2: get_software_usage ─────────────────────────────────────────

const GetUsageSchema = z.object({
  software_id: z.string()
    .optional()
    .describe("Software asset ID (e.g., 'SW-001'). Provide either ID or name."),
  software_name: z.string()
    .optional()
    .describe("Software name (partial match, e.g., 'Salesforce'). Provide either ID or name."),
  format: z.enum(["markdown", "json"])
    .default("markdown")
    .describe("Output format")
}).strict();

type GetUsageInput = z.infer<typeof GetUsageSchema>;

server.registerTool(
  "get_software_usage",
  {
    title: "Get Software Usage Details",
    description: `Get detailed usage metrics for a specific software asset.

Returns comprehensive usage data including daily/monthly active users, session duration, dormant accounts, orphaned licenses, adoption rate, and utilization rate. Essential for license audit and optimization analysis.

Args:
  - software_id (optional): Asset ID like "SW-001". Provide either ID or name.
  - software_name (optional): Software name (partial match). Provide either ID or name.
  - format (optional): "markdown" (default) or "json"

Returns:
  Detailed usage metrics for the specified software, including adoption and utilization rates, dormant/orphaned license counts, and estimated waste.

Examples:
  - By ID: software_id="SW-006" (Tableau Creator)
  - By name: software_name="Miro" (finds Miro Business)
  - By partial name: software_name="365 E5" (finds Microsoft 365 E5)`,
    inputSchema: GetUsageSchema,
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async (params: GetUsageInput) => {
    if (!params.software_id && !params.software_name) {
      return {
        content: [{
          type: "text" as const,
          text: "Error: Please provide either software_id or software_name to look up usage data."
        }]
      };
    }

    let asset: ReturnType<typeof getAssetById>;
    if (params.software_id) {
      asset = getAssetById(params.software_id);
    } else if (params.software_name) {
      const lower = params.software_name.toLowerCase();
      asset = getInventory().find(a => a.name.toLowerCase().includes(lower));
    }

    if (!asset) {
      return {
        content: [{
          type: "text" as const,
          text: `Error: Software not found. Use list_software_inventory to see available assets.`
        }]
      };
    }

    const adoption = calculateAdoption(asset);
    const utilization = calculateUtilization(asset);
    const wasteLicenses = asset.licensesContracted - asset.licensesInUse;
    const wasteCost = wasteLicenses * asset.unitCostPerYear;

    const output = {
      id: asset.id,
      name: asset.name,
      vendor: asset.vendor,
      licenses: {
        contracted: asset.licensesContracted,
        assigned: asset.licensesAssigned,
        inUse: asset.licensesInUse,
        overAssigned: asset.licensesAssigned > asset.licensesContracted,
        overAssignedBy: Math.max(0, asset.licensesAssigned - asset.licensesContracted)
      },
      rates: {
        adoption: `${adoption}%`,
        adoptionStatus: adoptionStatus(adoption),
        utilization: `${utilization}%`
      },
      usage: {
        dailyActiveUsers: asset.usageMetrics.dailyActiveUsers,
        monthlyActiveUsers: asset.usageMetrics.monthlyActiveUsers,
        avgSessionMinutes: asset.usageMetrics.avgSessionMinutes,
        lastLoginDate: asset.usageMetrics.lastLoginDate,
        dormantUsers: asset.usageMetrics.dormantUsers,
        orphanedLicenses: asset.usageMetrics.orphanedLicenses
      },
      waste: {
        unusedLicenses: wasteLicenses,
        estimatedAnnualWaste: formatCurrency(wasteCost, asset.currency),
        reclaimableUsers: asset.usageMetrics.dormantUsers + asset.usageMetrics.orphanedLicenses
      },
      complianceFlags: {
        overLicensed: asset.licensesAssigned > asset.licensesContracted,
        shadowIT: asset.tags.includes("shadow-it"),
        piiRisk: asset.tags.includes("pii-risk"),
        gdprRisk: asset.tags.includes("gdpr-risk"),
        complianceRisk: asset.tags.includes("compliance-risk")
      }
    };

    let textContent: string;
    if (params.format === "json") {
      textContent = JSON.stringify(output, null, 2);
    } else {
      textContent = [
        `# Usage Report: ${asset.name}`,
        "",
        `**Vendor:** ${asset.vendor} | **Owner:** ${asset.owner} | **Status:** ${asset.status}`,
        "",
        `### License Metrics`,
        `| Metric | Value |`,
        `|---|---|`,
        `| Contracted | ${asset.licensesContracted} |`,
        `| Assigned | ${asset.licensesAssigned}${output.licenses.overAssigned ? ` (**OVER by ${output.licenses.overAssignedBy}**)` : ""} |`,
        `| In use | ${asset.licensesInUse} |`,
        `| Adoption rate | ${adoption}% (${adoptionStatus(adoption)}) |`,
        `| Utilization rate | ${utilization}% |`,
        "",
        `### Usage Activity`,
        `| Metric | Value |`,
        `|---|---|`,
        `| Daily active users | ${asset.usageMetrics.dailyActiveUsers} |`,
        `| Monthly active users | ${asset.usageMetrics.monthlyActiveUsers} |`,
        `| Avg session (min) | ${asset.usageMetrics.avgSessionMinutes} |`,
        `| Last login | ${asset.usageMetrics.lastLoginDate} |`,
        `| Dormant users | ${asset.usageMetrics.dormantUsers} |`,
        `| Orphaned licenses | ${asset.usageMetrics.orphanedLicenses} |`,
        "",
        `### Optimization Opportunity`,
        `| Metric | Value |`,
        `|---|---|`,
        `| Unused licenses | ${wasteLicenses} |`,
        `| Estimated annual waste | ${formatCurrency(wasteCost, asset.currency)} |`,
        `| Reclaimable accounts | ${output.waste.reclaimableUsers} |`,
        "",
        ...(Object.values(output.complianceFlags).some(Boolean) ? [
          `### Compliance Flags`,
          ...Object.entries(output.complianceFlags)
            .filter(([, v]) => v)
            .map(([k]) => `- **${k.replace(/([A-Z])/g, " $1").trim()}**`),
          ""
        ] : [])
      ].join("\n");
    }

    return {
      content: [{ type: "text" as const, text: textContent }],
      structuredContent: output
    };
  }
);

// ── Tool 3: get_license_costs ──────────────────────────────────────────

const GetCostsSchema = z.object({
  vendor: z.string()
    .optional()
    .describe("Filter by vendor name (partial match)"),
  include_waste_analysis: z.boolean()
    .default(true)
    .describe("Include waste analysis with estimated savings"),
  format: z.enum(["markdown", "json"])
    .default("markdown")
    .describe("Output format")
}).strict();

type GetCostsInput = z.infer<typeof GetCostsSchema>;

server.registerTool(
  "get_license_costs",
  {
    title: "Get License Costs & Spend Analysis",
    description: `Get comprehensive cost analysis for software licenses including spend breakdown, waste analysis, and savings opportunities.

Returns total spend, per-product costs, renewal calendar, and (optionally) waste analysis showing estimated savings from license optimization.

Args:
  - vendor (optional): Filter costs by vendor name (partial match)
  - include_waste_analysis (optional): Include waste/savings analysis (default: true)
  - format (optional): "markdown" (default) or "json"

Returns:
  Cost breakdown by product and vendor, renewal calendar, and estimated annual savings from reclaiming unused licenses.

Examples:
  - Full cost analysis: no parameters
  - Microsoft costs only: vendor="Microsoft"
  - Cost data without waste analysis: include_waste_analysis=false`,
    inputSchema: GetCostsSchema,
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async (params: GetCostsInput) => {
    let assets = getInventory();
    if (params.vendor) {
      const v = params.vendor.toLowerCase();
      assets = assets.filter(a => a.vendor.toLowerCase().includes(v));
    }

    const totalSpend = assets.reduce((s, a) => s + a.totalCostPerYear, 0);

    const costByVendor: Record<string, number> = {};
    for (const a of assets) {
      costByVendor[a.vendor] = (costByVendor[a.vendor] ?? 0) + a.totalCostPerYear;
    }

    const renewalCalendar = assets
      .map(a => ({ name: a.name, vendor: a.vendor, renewalDate: a.renewalDate, annualCost: a.totalCostPerYear }))
      .sort((a, b) => a.renewalDate.localeCompare(b.renewalDate));

    let wasteAnalysis: Record<string, unknown> | undefined;
    if (params.include_waste_analysis) {
      const wasteItems = assets
        .map(a => {
          const unused = a.licensesContracted - a.licensesInUse;
          const waste = unused * a.unitCostPerYear;
          return {
            name: a.name,
            unusedLicenses: unused,
            annualWaste: waste,
            annualWasteFormatted: formatCurrency(waste, a.currency),
            reclaimableAccounts: a.usageMetrics.dormantUsers + a.usageMetrics.orphanedLicenses
          };
        })
        .filter(w => w.annualWaste > 0)
        .sort((a, b) => b.annualWaste - a.annualWaste);

      const totalWaste = wasteItems.reduce((s, w) => s + w.annualWaste, 0);

      wasteAnalysis = {
        totalEstimatedWaste: totalWaste,
        totalEstimatedWasteFormatted: formatCurrency(totalWaste),
        wastePercentage: `${Math.round((totalWaste / totalSpend) * 1000) / 10}%`,
        items: wasteItems
      };
    }

    const output = {
      summary: {
        totalAnnualSpend: totalSpend,
        totalAnnualSpendFormatted: formatCurrency(totalSpend),
        productCount: assets.length,
        vendorCount: Object.keys(costByVendor).length,
        ...(params.vendor ? { filteredByVendor: params.vendor } : {})
      },
      costByProduct: assets.map(a => ({
        id: a.id,
        name: a.name,
        vendor: a.vendor,
        unitCostPerYear: a.unitCostPerYear,
        totalCostPerYear: a.totalCostPerYear,
        licensesContracted: a.licensesContracted,
        percentOfTotal: `${Math.round((a.totalCostPerYear / totalSpend) * 1000) / 10}%`
      })),
      costByVendor: Object.entries(costByVendor)
        .map(([vendor, spend]) => ({
          vendor,
          annualSpend: spend,
          annualSpendFormatted: formatCurrency(spend),
          percentOfTotal: `${Math.round((spend / totalSpend) * 1000) / 10}%`
        }))
        .sort((a, b) => b.annualSpend - a.annualSpend),
      renewalCalendar,
      ...(wasteAnalysis ? { wasteAnalysis } : {})
    };

    let textContent: string;
    if (params.format === "json") {
      textContent = JSON.stringify(output, null, 2);
    } else {
      const lines: string[] = [
        `# License Cost Analysis`,
        "",
        `**Total annual spend:** ${formatCurrency(totalSpend)} | **Products:** ${assets.length} | **Vendors:** ${Object.keys(costByVendor).length}`,
        "",
        `## Spend by Product`,
        "",
        `| Product | Vendor | Licenses | Unit Cost/yr | Total/yr | % of Total |`,
        `|---|---|---|---|---|---|`,
        ...assets.map(a =>
          `| ${a.name} | ${a.vendor} | ${a.licensesContracted} | ${formatCurrency(a.unitCostPerYear, a.currency)} | ${formatCurrency(a.totalCostPerYear, a.currency)} | ${Math.round((a.totalCostPerYear / totalSpend) * 1000) / 10}% |`
        ),
        "",
        `## Spend by Vendor`,
        "",
        `| Vendor | Annual Spend | % of Total |`,
        `|---|---|---|`,
        ...Object.entries(costByVendor)
          .sort(([, a], [, b]) => b - a)
          .map(([vendor, spend]) =>
            `| ${vendor} | ${formatCurrency(spend)} | ${Math.round((spend / totalSpend) * 1000) / 10}% |`
          ),
        "",
        `## Renewal Calendar`,
        "",
        `| Date | Product | Vendor | Annual Cost |`,
        `|---|---|---|---|`,
        ...renewalCalendar.map(r =>
          `| ${r.renewalDate} | ${r.name} | ${r.vendor} | ${formatCurrency(r.annualCost)} |`
        )
      ];

      if (wasteAnalysis) {
        const wa = wasteAnalysis as {
          totalEstimatedWasteFormatted: string;
          wastePercentage: string;
          items: Array<{ name: string; unusedLicenses: number; annualWasteFormatted: string; reclaimableAccounts: number }>;
        };
        lines.push(
          "",
          `## Waste Analysis`,
          "",
          `**Total estimated waste:** ${wa.totalEstimatedWasteFormatted} (${wa.wastePercentage} of total spend)`,
          "",
          `| Product | Unused Licenses | Annual Waste | Reclaimable Accounts |`,
          `|---|---|---|---|`,
          ...wa.items.map((w) =>
            `| ${w.name} | ${w.unusedLicenses} | ${w.annualWasteFormatted} | ${w.reclaimableAccounts} |`
          )
        );
      }

      textContent = lines.join("\n");
    }

    if (textContent.length > CHARACTER_LIMIT) {
      textContent = textContent.substring(0, CHARACTER_LIMIT) +
        "\n\n... [Truncated. Use vendor filter to narrow results.]";
    }

    return {
      content: [{ type: "text" as const, text: textContent }],
      structuredContent: output
    };
  }
);

// ── Tool 4: search_software ────────────────────────────────────────────

const SearchSoftwareSchema = z.object({
  query: z.string()
    .min(1, "Query is required")
    .max(200, "Query too long")
    .describe("Search term — matches against name, vendor, category, tags, and owner"),
  format: z.enum(["markdown", "json"])
    .default("markdown")
    .describe("Output format")
}).strict();

type SearchSoftwareInput = z.infer<typeof SearchSoftwareSchema>;

server.registerTool(
  "search_software",
  {
    title: "Search Software Assets",
    description: `Search across all software assets by name, vendor, category, tags, or owner.

Performs a broad text search across multiple fields. Use this when you don't know the exact product name or want to find assets matching a general criterion.

Args:
  - query (string): Search term (matches name, vendor, category, tags, owner)
  - format (optional): "markdown" (default) or "json"

Returns:
  List of matching software assets with key metrics.

Examples:
  - Find shadow IT: query="shadow-it"
  - Find analytics tools: query="analytics"
  - Find security-related: query="security"
  - Find by owner: query="Engineering"
  - Find by vendor: query="Atlassian"`,
    inputSchema: SearchSoftwareSchema,
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async (params: SearchSoftwareInput) => {
    const results = searchAssets(params.query);

    if (results.length === 0) {
      return {
        content: [{
          type: "text" as const,
          text: `No software assets found matching "${params.query}". Try broader terms or use list_software_inventory to see all assets.`
        }]
      };
    }

    const output = {
      query: params.query,
      resultCount: results.length,
      results: results.map(formatAssetSummary)
    };

    let textContent: string;
    if (params.format === "json") {
      textContent = JSON.stringify(output, null, 2);
    } else {
      const lines: string[] = [
        `# Search Results: "${params.query}"`,
        "",
        `**${results.length} asset(s) found**`,
        ""
      ];
      for (const asset of results) {
        lines.push(formatAssetMarkdown(asset));
      }
      textContent = lines.join("\n");
    }

    return {
      content: [{ type: "text" as const, text: textContent }],
      structuredContent: output
    };
  }
);

// ── Tool 5: get_vendor_summary ─────────────────────────────────────────

const GetVendorSchema = z.object({
  vendor_name: z.string()
    .optional()
    .describe("Vendor name to look up (partial match). Omit to list all vendors."),
  format: z.enum(["markdown", "json"])
    .default("markdown")
    .describe("Output format")
}).strict();

type GetVendorInput = z.infer<typeof GetVendorSchema>;

server.registerTool(
  "get_vendor_summary",
  {
    title: "Get Vendor Summary",
    description: `Get vendor relationship summary including products, spend, risk level, certifications, and review dates.

If vendor_name is provided, returns detailed information for that vendor. If omitted, returns a summary of all vendors.

Args:
  - vendor_name (optional): Vendor name (partial match). Omit to list all vendors.
  - format (optional): "markdown" (default) or "json"

Returns:
  Vendor details: products, annual spend, contract count, risk level, certifications, relationship owner, next review date.

Examples:
  - All vendors: no parameters
  - Specific vendor: vendor_name="Salesforce"
  - Partial match: vendor_name="Micro" (finds Microsoft)`,
    inputSchema: GetVendorSchema,
    annotations: {
      readOnlyHint: true,
      destructiveHint: false,
      idempotentHint: true,
      openWorldHint: false
    }
  },
  async (params: GetVendorInput) => {
    if (params.vendor_name) {
      const vendor = getVendorByName(params.vendor_name);
      if (!vendor) {
        return {
          content: [{
            type: "text" as const,
            text: `Error: Vendor "${params.vendor_name}" not found. Available vendors: ${VENDOR_SUMMARIES.map(v => v.name).join(", ")}`
          }]
        };
      }

      const assets = getAssetsByVendor(vendor.name);
      const output = {
        vendor,
        products: assets.map(formatAssetSummary)
      };

      let textContent: string;
      if (params.format === "json") {
        textContent = JSON.stringify(output, null, 2);
      } else {
        textContent = [
          formatVendorMarkdown(vendor),
          `### Products`,
          "",
          ...assets.map(a => formatAssetMarkdown(a))
        ].join("\n");
      }

      return {
        content: [{ type: "text" as const, text: textContent }],
        structuredContent: output
      };
    }

    // All vendors
    const totalSpend = VENDOR_SUMMARIES.reduce((s, v) => s + v.totalAnnualSpend, 0);
    const output = {
      summary: {
        vendorCount: VENDOR_SUMMARIES.length,
        totalAnnualSpend: totalSpend,
        totalAnnualSpendFormatted: formatCurrency(totalSpend)
      },
      vendors: VENDOR_SUMMARIES.map(v => ({
        name: v.name,
        products: v.products,
        annualSpend: v.totalAnnualSpend,
        annualSpendFormatted: formatCurrency(v.totalAnnualSpend, v.currency),
        riskLevel: v.riskLevel,
        certifications: v.certifications,
        nextReview: v.nextReviewDate,
        relationshipOwner: v.relationshipOwner
      }))
    };

    let textContent: string;
    if (params.format === "json") {
      textContent = JSON.stringify(output, null, 2);
    } else {
      textContent = [
        `# Vendor Summary`,
        "",
        `**Vendors:** ${VENDOR_SUMMARIES.length} | **Total annual spend:** ${formatCurrency(totalSpend)}`,
        "",
        `| Vendor | Products | Annual Spend | Risk | Certifications | Next Review |`,
        `|---|---|---|---|---|---|`,
        ...VENDOR_SUMMARIES.map(v =>
          `| ${v.name} | ${v.products.length} | ${formatCurrency(v.totalAnnualSpend, v.currency)} | ${v.riskLevel} | ${v.certifications.slice(0, 2).join(", ")}${v.certifications.length > 2 ? " +" + (v.certifications.length - 2) : ""} | ${v.nextReviewDate} |`
        ),
        "",
        ...VENDOR_SUMMARIES.map(v => formatVendorMarkdown(v))
      ].join("\n");
    }

    if (textContent.length > CHARACTER_LIMIT) {
      textContent = textContent.substring(0, CHARACTER_LIMIT) +
        "\n\n... [Truncated. Use vendor_name to get details for a specific vendor.]";
    }

    return {
      content: [{ type: "text" as const, text: textContent }],
      structuredContent: output
    };
  }
);

// ── Main ───────────────────────────────────────────────────────────────

async function main(): Promise<void> {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error("Asset Management MCP Server running via stdio");
}

main().catch(error => {
  console.error("Server error:", error);
  process.exit(1);
});
