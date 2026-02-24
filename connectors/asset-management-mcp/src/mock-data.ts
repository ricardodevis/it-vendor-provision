/**
 * Mock dataset for IT Asset Management MCP Server.
 *
 * Contains realistic SaaS inventory data for demonstration purposes.
 * In production, this would be replaced by API calls to ServiceNow CMDB,
 * Flexera, Snow Software, Zylo, or similar ITAM platforms.
 */

// ── Types ──────────────────────────────────────────────────────────────

export interface SoftwareAsset {
  id: string;
  name: string;
  vendor: string;
  category: string;
  licenseType: "named_user" | "concurrent" | "host_based" | "site" | "consumption";
  licensesContracted: number;
  licensesAssigned: number;
  licensesInUse: number;
  unitCostPerYear: number;
  totalCostPerYear: number;
  currency: string;
  renewalDate: string;
  contractTerm: string;
  owner: string;
  status: "active" | "expiring_soon" | "expired" | "under_review";
  deploymentModel: "saas" | "on_premise" | "hybrid";
  criticality: "critical" | "high" | "medium" | "low";
  lastAuditDate: string;
  tags: string[];
  usageMetrics: {
    dailyActiveUsers: number;
    monthlyActiveUsers: number;
    avgSessionMinutes: number;
    lastLoginDate: string;
    dormantUsers: number;
    orphanedLicenses: number;
  };
}

export interface VendorInfo {
  name: string;
  products: string[];
  totalAnnualSpend: number;
  currency: string;
  contractCount: number;
  primaryContact: string;
  relationshipOwner: string;
  riskLevel: "low" | "medium" | "high" | "critical";
  certifications: string[];
  nextReviewDate: string;
  paymentTerms: string;
}

// ── Mock Data ──────────────────────────────────────────────────────────

export const SOFTWARE_INVENTORY: SoftwareAsset[] = [
  {
    id: "SW-001",
    name: "Microsoft 365 E5",
    vendor: "Microsoft",
    category: "Productivity Suite",
    licenseType: "named_user",
    licensesContracted: 1200,
    licensesAssigned: 1180,
    licensesInUse: 1095,
    unitCostPerYear: 432,
    totalCostPerYear: 518400,
    currency: "EUR",
    renewalDate: "2026-03-31",
    contractTerm: "36 months",
    owner: "IT Operations",
    status: "expiring_soon",
    deploymentModel: "saas",
    criticality: "critical",
    lastAuditDate: "2026-01-15",
    tags: ["productivity", "email", "collaboration", "security"],
    usageMetrics: {
      dailyActiveUsers: 987,
      monthlyActiveUsers: 1095,
      avgSessionMinutes: 342,
      lastLoginDate: "2026-02-23",
      dormantUsers: 85,
      orphanedLicenses: 20
    }
  },
  {
    id: "SW-002",
    name: "Microsoft 365 E3",
    vendor: "Microsoft",
    category: "Productivity Suite",
    licenseType: "named_user",
    licensesContracted: 300,
    licensesAssigned: 295,
    licensesInUse: 248,
    unitCostPerYear: 276,
    totalCostPerYear: 82800,
    currency: "EUR",
    renewalDate: "2026-03-31",
    contractTerm: "36 months",
    owner: "IT Operations",
    status: "expiring_soon",
    deploymentModel: "saas",
    criticality: "high",
    lastAuditDate: "2026-01-15",
    tags: ["productivity", "email"],
    usageMetrics: {
      dailyActiveUsers: 198,
      monthlyActiveUsers: 248,
      avgSessionMinutes: 185,
      lastLoginDate: "2026-02-23",
      dormantUsers: 47,
      orphanedLicenses: 5
    }
  },
  {
    id: "SW-003",
    name: "Salesforce Enterprise",
    vendor: "Salesforce",
    category: "CRM",
    licenseType: "named_user",
    licensesContracted: 450,
    licensesAssigned: 442,
    licensesInUse: 387,
    unitCostPerYear: 1980,
    totalCostPerYear: 891000,
    currency: "EUR",
    renewalDate: "2026-09-15",
    contractTerm: "36 months",
    owner: "Sales Operations",
    status: "active",
    deploymentModel: "saas",
    criticality: "critical",
    lastAuditDate: "2025-11-20",
    tags: ["crm", "sales", "pipeline"],
    usageMetrics: {
      dailyActiveUsers: 312,
      monthlyActiveUsers: 387,
      avgSessionMinutes: 156,
      lastLoginDate: "2026-02-23",
      dormantUsers: 55,
      orphanedLicenses: 8
    }
  },
  {
    id: "SW-004",
    name: "Salesforce Platform",
    vendor: "Salesforce",
    category: "CRM Platform",
    licenseType: "named_user",
    licensesContracted: 150,
    licensesAssigned: 148,
    licensesInUse: 62,
    unitCostPerYear: 900,
    totalCostPerYear: 135000,
    currency: "EUR",
    renewalDate: "2026-09-15",
    contractTerm: "36 months",
    owner: "Sales Operations",
    status: "under_review",
    deploymentModel: "saas",
    criticality: "medium",
    lastAuditDate: "2025-11-20",
    tags: ["crm", "platform", "custom-apps"],
    usageMetrics: {
      dailyActiveUsers: 28,
      monthlyActiveUsers: 62,
      avgSessionMinutes: 45,
      lastLoginDate: "2026-02-21",
      dormantUsers: 86,
      orphanedLicenses: 2
    }
  },
  {
    id: "SW-005",
    name: "ServiceNow ITSM Pro",
    vendor: "ServiceNow",
    category: "IT Service Management",
    licenseType: "named_user",
    licensesContracted: 80,
    licensesAssigned: 78,
    licensesInUse: 71,
    unitCostPerYear: 1200,
    totalCostPerYear: 96000,
    currency: "EUR",
    renewalDate: "2026-06-01",
    contractTerm: "24 months",
    owner: "IT Operations",
    status: "active",
    deploymentModel: "saas",
    criticality: "critical",
    lastAuditDate: "2025-12-10",
    tags: ["itsm", "ticketing", "cmdb", "workflows"],
    usageMetrics: {
      dailyActiveUsers: 65,
      monthlyActiveUsers: 71,
      avgSessionMinutes: 210,
      lastLoginDate: "2026-02-23",
      dormantUsers: 7,
      orphanedLicenses: 2
    }
  },
  {
    id: "SW-006",
    name: "Tableau Creator",
    vendor: "Tableau (Salesforce)",
    category: "Business Intelligence",
    licenseType: "named_user",
    licensesContracted: 50,
    licensesAssigned: 73,
    licensesInUse: 73,
    unitCostPerYear: 840,
    totalCostPerYear: 42000,
    currency: "EUR",
    renewalDate: "2026-07-31",
    contractTerm: "12 months",
    owner: "Analytics",
    status: "under_review",
    deploymentModel: "saas",
    criticality: "high",
    lastAuditDate: "2026-02-01",
    tags: ["analytics", "bi", "visualization", "compliance-risk"],
    usageMetrics: {
      dailyActiveUsers: 68,
      monthlyActiveUsers: 73,
      avgSessionMinutes: 124,
      lastLoginDate: "2026-02-23",
      dormantUsers: 0,
      orphanedLicenses: 0
    }
  },
  {
    id: "SW-007",
    name: "Tableau Viewer",
    vendor: "Tableau (Salesforce)",
    category: "Business Intelligence",
    licenseType: "named_user",
    licensesContracted: 200,
    licensesAssigned: 185,
    licensesInUse: 142,
    unitCostPerYear: 180,
    totalCostPerYear: 36000,
    currency: "EUR",
    renewalDate: "2026-07-31",
    contractTerm: "12 months",
    owner: "Analytics",
    status: "active",
    deploymentModel: "saas",
    criticality: "medium",
    lastAuditDate: "2026-02-01",
    tags: ["analytics", "bi", "visualization"],
    usageMetrics: {
      dailyActiveUsers: 89,
      monthlyActiveUsers: 142,
      avgSessionMinutes: 32,
      lastLoginDate: "2026-02-22",
      dormantUsers: 43,
      orphanedLicenses: 15
    }
  },
  {
    id: "SW-008",
    name: "Slack Business+",
    vendor: "Salesforce",
    category: "Communication",
    licenseType: "named_user",
    licensesContracted: 1500,
    licensesAssigned: 1480,
    licensesInUse: 1312,
    unitCostPerYear: 152,
    totalCostPerYear: 228000,
    currency: "EUR",
    renewalDate: "2026-09-15",
    contractTerm: "12 months",
    owner: "IT Operations",
    status: "active",
    deploymentModel: "saas",
    criticality: "high",
    lastAuditDate: "2025-12-15",
    tags: ["communication", "messaging", "collaboration"],
    usageMetrics: {
      dailyActiveUsers: 1105,
      monthlyActiveUsers: 1312,
      avgSessionMinutes: 267,
      lastLoginDate: "2026-02-23",
      dormantUsers: 168,
      orphanedLicenses: 20
    }
  },
  {
    id: "SW-009",
    name: "Jira Software Premium",
    vendor: "Atlassian",
    category: "Project Management",
    licenseType: "named_user",
    licensesContracted: 300,
    licensesAssigned: 290,
    licensesInUse: 234,
    unitCostPerYear: 168,
    totalCostPerYear: 50400,
    currency: "EUR",
    renewalDate: "2026-11-01",
    contractTerm: "12 months",
    owner: "Engineering",
    status: "active",
    deploymentModel: "saas",
    criticality: "high",
    lastAuditDate: "2025-10-30",
    tags: ["project-management", "agile", "engineering"],
    usageMetrics: {
      dailyActiveUsers: 178,
      monthlyActiveUsers: 234,
      avgSessionMinutes: 95,
      lastLoginDate: "2026-02-23",
      dormantUsers: 56,
      orphanedLicenses: 10
    }
  },
  {
    id: "SW-010",
    name: "Confluence Standard",
    vendor: "Atlassian",
    category: "Knowledge Management",
    licenseType: "named_user",
    licensesContracted: 300,
    licensesAssigned: 295,
    licensesInUse: 187,
    unitCostPerYear: 66,
    totalCostPerYear: 19800,
    currency: "EUR",
    renewalDate: "2026-11-01",
    contractTerm: "12 months",
    owner: "Engineering",
    status: "active",
    deploymentModel: "saas",
    criticality: "medium",
    lastAuditDate: "2025-10-30",
    tags: ["wiki", "documentation", "knowledge-base"],
    usageMetrics: {
      dailyActiveUsers: 98,
      monthlyActiveUsers: 187,
      avgSessionMinutes: 28,
      lastLoginDate: "2026-02-23",
      dormantUsers: 108,
      orphanedLicenses: 5
    }
  },
  {
    id: "SW-011",
    name: "Okta Workforce Identity",
    vendor: "Okta",
    category: "Identity & Access Management",
    licenseType: "named_user",
    licensesContracted: 1500,
    licensesAssigned: 1500,
    licensesInUse: 1487,
    unitCostPerYear: 72,
    totalCostPerYear: 108000,
    currency: "EUR",
    renewalDate: "2026-04-30",
    contractTerm: "24 months",
    owner: "Security",
    status: "active",
    deploymentModel: "saas",
    criticality: "critical",
    lastAuditDate: "2026-01-20",
    tags: ["identity", "sso", "mfa", "security"],
    usageMetrics: {
      dailyActiveUsers: 1465,
      monthlyActiveUsers: 1487,
      avgSessionMinutes: 5,
      lastLoginDate: "2026-02-23",
      dormantUsers: 13,
      orphanedLicenses: 0
    }
  },
  {
    id: "SW-012",
    name: "Datadog Pro",
    vendor: "Datadog",
    category: "Monitoring & Observability",
    licenseType: "host_based",
    licensesContracted: 120,
    licensesAssigned: 120,
    licensesInUse: 98,
    unitCostPerYear: 276,
    totalCostPerYear: 33120,
    currency: "EUR",
    renewalDate: "2026-08-01",
    contractTerm: "12 months",
    owner: "Platform Engineering",
    status: "active",
    deploymentModel: "saas",
    criticality: "high",
    lastAuditDate: "2025-12-05",
    tags: ["monitoring", "observability", "apm", "logs"],
    usageMetrics: {
      dailyActiveUsers: 42,
      monthlyActiveUsers: 67,
      avgSessionMinutes: 78,
      lastLoginDate: "2026-02-23",
      dormantUsers: 22,
      orphanedLicenses: 0
    }
  },
  {
    id: "SW-013",
    name: "Miro Business",
    vendor: "Miro",
    category: "Collaboration & Whiteboarding",
    licenseType: "named_user",
    licensesContracted: 200,
    licensesAssigned: 195,
    licensesInUse: 47,
    unitCostPerYear: 192,
    totalCostPerYear: 38400,
    currency: "EUR",
    renewalDate: "2026-05-15",
    contractTerm: "12 months",
    owner: "Product",
    status: "under_review",
    deploymentModel: "saas",
    criticality: "low",
    lastAuditDate: "2026-01-10",
    tags: ["collaboration", "whiteboard", "design"],
    usageMetrics: {
      dailyActiveUsers: 12,
      monthlyActiveUsers: 47,
      avgSessionMinutes: 45,
      lastLoginDate: "2026-02-20",
      dormantUsers: 148,
      orphanedLicenses: 5
    }
  },
  {
    id: "SW-014",
    name: "Notion (Shadow IT)",
    vendor: "Notion",
    category: "Knowledge Management",
    licenseType: "named_user",
    licensesContracted: 45,
    licensesAssigned: 45,
    licensesInUse: 45,
    unitCostPerYear: 96,
    totalCostPerYear: 4320,
    currency: "EUR",
    renewalDate: "2026-03-01",
    contractTerm: "Monthly",
    owner: "Unmanaged",
    status: "under_review",
    deploymentModel: "saas",
    criticality: "medium",
    lastAuditDate: "2026-02-15",
    tags: ["shadow-it", "wiki", "documentation", "pii-risk"],
    usageMetrics: {
      dailyActiveUsers: 38,
      monthlyActiveUsers: 45,
      avgSessionMinutes: 67,
      lastLoginDate: "2026-02-23",
      dormantUsers: 0,
      orphanedLicenses: 0
    }
  },
  {
    id: "SW-015",
    name: "Airtable (Shadow IT)",
    vendor: "Airtable",
    category: "Database & Workflow",
    licenseType: "named_user",
    licensesContracted: 30,
    licensesAssigned: 30,
    licensesInUse: 30,
    unitCostPerYear: 240,
    totalCostPerYear: 7200,
    currency: "EUR",
    renewalDate: "2026-03-01",
    contractTerm: "Monthly",
    owner: "Unmanaged",
    status: "under_review",
    deploymentModel: "saas",
    criticality: "medium",
    lastAuditDate: "2026-02-15",
    tags: ["shadow-it", "database", "workflow", "gdpr-risk"],
    usageMetrics: {
      dailyActiveUsers: 22,
      monthlyActiveUsers: 30,
      avgSessionMinutes: 42,
      lastLoginDate: "2026-02-22",
      dormantUsers: 0,
      orphanedLicenses: 0
    }
  }
];

// ── Vendor Summaries ───────────────────────────────────────────────────

export const VENDOR_SUMMARIES: VendorInfo[] = [
  {
    name: "Microsoft",
    products: ["Microsoft 365 E5", "Microsoft 365 E3"],
    totalAnnualSpend: 601200,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "enterprise-support@microsoft.com",
    relationshipOwner: "IT Operations",
    riskLevel: "low",
    certifications: ["SOC 2 Type II", "ISO 27001", "ISO 27017", "ISO 27018", "FedRAMP"],
    nextReviewDate: "2026-03-01",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Salesforce",
    products: ["Salesforce Enterprise", "Salesforce Platform", "Slack Business+"],
    totalAnnualSpend: 1254000,
    currency: "EUR",
    contractCount: 2,
    primaryContact: "account-team@salesforce.com",
    relationshipOwner: "Sales Operations",
    riskLevel: "medium",
    certifications: ["SOC 2 Type II", "ISO 27001", "SOC 1 Type II"],
    nextReviewDate: "2026-08-01",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Tableau (Salesforce)",
    products: ["Tableau Creator", "Tableau Viewer"],
    totalAnnualSpend: 78000,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "tableau-support@salesforce.com",
    relationshipOwner: "Analytics",
    riskLevel: "high",
    certifications: ["SOC 2 Type II", "ISO 27001"],
    nextReviewDate: "2026-06-15",
    paymentTerms: "Annual in advance"
  },
  {
    name: "ServiceNow",
    products: ["ServiceNow ITSM Pro"],
    totalAnnualSpend: 96000,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "support@servicenow.com",
    relationshipOwner: "IT Operations",
    riskLevel: "low",
    certifications: ["SOC 2 Type II", "ISO 27001", "ISO 27017", "ISO 27018", "ISAE 3402"],
    nextReviewDate: "2026-05-01",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Atlassian",
    products: ["Jira Software Premium", "Confluence Standard"],
    totalAnnualSpend: 70200,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "enterprise@atlassian.com",
    relationshipOwner: "Engineering",
    riskLevel: "low",
    certifications: ["SOC 2 Type II", "ISO 27001", "ISO 27018"],
    nextReviewDate: "2026-10-01",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Okta",
    products: ["Okta Workforce Identity"],
    totalAnnualSpend: 108000,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "support@okta.com",
    relationshipOwner: "Security",
    riskLevel: "low",
    certifications: ["SOC 2 Type II", "ISO 27001", "FedRAMP", "FIDO2"],
    nextReviewDate: "2026-03-30",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Datadog",
    products: ["Datadog Pro"],
    totalAnnualSpend: 33120,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "support@datadoghq.com",
    relationshipOwner: "Platform Engineering",
    riskLevel: "low",
    certifications: ["SOC 2 Type II", "ISO 27001"],
    nextReviewDate: "2026-07-01",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Miro",
    products: ["Miro Business"],
    totalAnnualSpend: 38400,
    currency: "EUR",
    contractCount: 1,
    primaryContact: "enterprise@miro.com",
    relationshipOwner: "Product",
    riskLevel: "medium",
    certifications: ["SOC 2 Type II", "ISO 27001"],
    nextReviewDate: "2026-04-15",
    paymentTerms: "Annual in advance"
  },
  {
    name: "Notion",
    products: ["Notion (Shadow IT)"],
    totalAnnualSpend: 4320,
    currency: "EUR",
    contractCount: 0,
    primaryContact: "N/A — Shadow IT",
    relationshipOwner: "Unmanaged",
    riskLevel: "high",
    certifications: ["SOC 2 Type II"],
    nextReviewDate: "Immediate — requires governance review",
    paymentTerms: "Monthly (team credit card)"
  },
  {
    name: "Airtable",
    products: ["Airtable (Shadow IT)"],
    totalAnnualSpend: 7200,
    currency: "EUR",
    contractCount: 0,
    primaryContact: "N/A — Shadow IT",
    relationshipOwner: "Unmanaged",
    riskLevel: "critical",
    certifications: ["SOC 2 Type II"],
    nextReviewDate: "Immediate — GDPR Art.9 data at risk",
    paymentTerms: "Monthly (team credit card)"
  }
];

// ── Helper Functions ───────────────────────────────────────────────────

export function getInventory(): SoftwareAsset[] {
  return SOFTWARE_INVENTORY;
}

export function getAssetById(id: string): SoftwareAsset | undefined {
  return SOFTWARE_INVENTORY.find(a => a.id === id);
}

export function getAssetByName(name: string): SoftwareAsset | undefined {
  const lower = name.toLowerCase();
  return SOFTWARE_INVENTORY.find(a => a.name.toLowerCase().includes(lower));
}

export function getVendorByName(name: string): VendorInfo | undefined {
  const lower = name.toLowerCase();
  return VENDOR_SUMMARIES.find(v => v.name.toLowerCase().includes(lower));
}

export function searchAssets(query: string): SoftwareAsset[] {
  const lower = query.toLowerCase();
  return SOFTWARE_INVENTORY.filter(a =>
    a.name.toLowerCase().includes(lower) ||
    a.vendor.toLowerCase().includes(lower) ||
    a.category.toLowerCase().includes(lower) ||
    a.tags.some(t => t.toLowerCase().includes(lower)) ||
    a.owner.toLowerCase().includes(lower)
  );
}

export function getAssetsByVendor(vendor: string): SoftwareAsset[] {
  const lower = vendor.toLowerCase();
  return SOFTWARE_INVENTORY.filter(a => a.vendor.toLowerCase().includes(lower));
}

export function getTotalSpend(): number {
  return SOFTWARE_INVENTORY.reduce((sum, a) => sum + a.totalCostPerYear, 0);
}

export function getTotalLicenses(): { contracted: number; assigned: number; inUse: number } {
  return SOFTWARE_INVENTORY.reduce(
    (acc, a) => ({
      contracted: acc.contracted + a.licensesContracted,
      assigned: acc.assigned + a.licensesAssigned,
      inUse: acc.inUse + a.licensesInUse
    }),
    { contracted: 0, assigned: 0, inUse: 0 }
  );
}
