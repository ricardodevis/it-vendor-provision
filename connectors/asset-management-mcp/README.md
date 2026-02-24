# Asset Management MCP Server

MCP server for IT Asset Management (CMDB/ITAM) integration. Provides software inventory, license usage, cost analysis, and vendor summaries for IT governance workflows.

This server is designed to work with the **IT Vendor Provision** plugin, supplying the data layer that commands like `license-audit`, `vendor-reporting`, `shadow-it-governance`, and `vendor-onboarding` need to operate.

## Demo Mode

The server ships with a realistic mock dataset of 15 SaaS products across 10 vendors (total spend EUR 2.29M/year). This allows you to test the full plugin workflow without connecting to a real ITAM platform.

In production, replace the mock data imports in `src/index.ts` with API calls to your ITAM platform (ServiceNow CMDB, Flexera, Snow Software, Zylo, Productiv, etc.).

## Tools

| Tool | Description |
|---|---|
| `list_software_inventory` | List all software assets with optional filters (status, criticality, vendor, owner, tag) |
| `get_software_usage` | Detailed usage metrics for a specific software asset (adoption, utilization, dormant accounts) |
| `get_license_costs` | Cost analysis with spend breakdown by product/vendor, renewal calendar, and waste analysis |
| `search_software` | Free-text search across name, vendor, category, tags, and owner |
| `get_vendor_summary` | Vendor relationship details including certifications, risk level, and review dates |

All tools support both `markdown` and `json` output formats.

## Setup

### Prerequisites

- Node.js >= 18
- npm

### Install & Build

```bash
cd connectors/asset-management-mcp
npm install
npm run build
```

### Run

```bash
# stdio mode (default — for local MCP clients)
npm start

# Development with auto-reload
npm run dev
```

### Configure in Cowork / Claude Code

Add to your MCP settings (`~/.claude/plugins/` or project `.claude/settings.json`):

```json
{
  "mcpServers": {
    "asset-management": {
      "command": "node",
      "args": ["/path/to/connectors/asset-management-mcp/dist/index.js"]
    }
  }
}
```

### Test with MCP Inspector

```bash
npx @modelcontextprotocol/inspector node dist/index.js
```

## Mock Data Overview

The embedded dataset includes:

| Product | Vendor | Licenses | Annual Cost | Key Issue |
|---|---|---|---|---|
| Microsoft 365 E5 | Microsoft | 1,200 | EUR 518,400 | 85 users should be E3 |
| Microsoft 365 E3 | Microsoft | 300 | EUR 82,800 | 47 dormant accounts |
| Salesforce Enterprise | Salesforce | 450 | EUR 891,000 | 55 low-usage users |
| Salesforce Platform | Salesforce | 150 | EUR 135,000 | 86 licenses unused |
| ServiceNow ITSM Pro | ServiceNow | 80 | EUR 96,000 | Healthy |
| Tableau Creator | Tableau | 50 (73 in use) | EUR 42,000 | **Over-licensed** |
| Tableau Viewer | Tableau | 200 | EUR 36,000 | 43 unused |
| Slack Business+ | Salesforce | 1,500 | EUR 228,000 | 168 low-activity |
| Jira Software Premium | Atlassian | 300 | EUR 50,400 | 56 never used |
| Confluence Standard | Atlassian | 300 | EUR 19,800 | Low adoption |
| Okta Workforce Identity | Okta | 1,500 | EUR 108,000 | Healthy |
| Datadog Pro | Datadog | 120 hosts | EUR 33,120 | 22 underutilized |
| Miro Business | Miro | 200 | EUR 38,400 | **148 unused** |
| Notion (Shadow IT) | Notion | ~45 | EUR 4,320 | No DPA, PII risk |
| Airtable (Shadow IT) | Airtable | ~30 | EUR 7,200 | GDPR Art.9 data |

## Extending for Production

To connect to a real ITAM platform:

1. Create a new file `src/api-client.ts` with your platform's API client
2. Implement the same interfaces (`SoftwareAsset`, `VendorInfo`) defined in `src/mock-data.ts`
3. Replace imports in `src/index.ts` to use the API client instead of mock data
4. Add authentication configuration (API key, OAuth, etc.) via environment variables
5. Update `package.json` with any additional dependencies (e.g., `axios` for HTTP calls)

## License

Part of the IT Vendor Provision plugin. See root LICENSE for details.
