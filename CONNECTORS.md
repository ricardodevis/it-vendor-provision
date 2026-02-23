# Connectors for IT Vendor Provision

This plugin uses the `~~connector-name` notation for tool-agnostic references to external tools. This enables the plugin to work with different technology stacks depending on the client.

## Core connectors

### ~~document repository
**Function**: Document repository where contracts, commercial proposals, DPAs, and vendor documentation are stored.
**Tool examples**: iManage Work, SharePoint, Google Drive, Dropbox Business, Box, Notion
**Used in**: vendor-assessment (received documentation), it-contract-review (contracts for review), risk-compliance (vendor evidence), contract-lifecycle (contract archive, amendments, minutes), vendor-reporting (contract registry, DPAs), vendor-onboarding (policies, runbooks, knowledge base)

### ~~asset management tool
**Function**: IT asset management tool (ITAM/CMDB) containing installed software inventory, devices, and configurations.
**Tool examples**: ServiceNow CMDB, Snipe-IT, Lansweeper, Snow Software, Flexera
**Used in**: license-management (installed software inventory), vendor-reporting (inventory data for dashboard), shadow-it-governance (endpoint software discovery), vendor-onboarding (license reconciliation)

### ~~identity provider
**Function**: Identity and SSO provider managing user access to applications.
**Tool examples**: Okta, Azure AD (Entra ID), Google Workspace, JumpCloud, OneLogin
**Used in**: license-management (authorized apps, users with access), vendor-reporting (active users, utilization rate), shadow-it-governance (SSO logs for app discovery), vendor-onboarding (SSO configuration, user provisioning)

### ~~finance tool
**Function**: Financial or procurement tool where invoices, subscriptions, and software vendor payments are recorded.
**Tool examples**: SAP, Oracle Financials, NetSuite, Coupa, Bravo, procurement spreadsheets
**Used in**: license-management (software invoices, spend by vendor, SaaS spend governance), vendor-reporting (total spend, variance vs. budget, cost per user), contract-lifecycle (price benchmarking for renewals), shadow-it-governance (expense report analysis for unauthorized subscriptions)

## Monitoring and reporting connectors

### ~~monitoring tool
**Function**: Tool for monitoring availability and performance of SaaS services and applications.
**Examples**: Datadog, New Relic, Pingdom, UptimeRobot, StatusCake, Grafana Cloud
**Used in**: vendor-reporting (uptime, performance, MTTR), contract-lifecycle (SLA verification), vendor-onboarding (performance baseline establishment)

### ~~ticketing system
**Function**: Ticketing system for support, incident tracking, assessments, and compliance actions.
**Examples**: Jira, Linear, Asana, Monday.com, ServiceNow, Zendesk
**Used in**: vendor-reporting (support tickets, response times, resolution rate), contract-lifecycle (incident registry, action tracking), vendor-onboarding (issue logging, integration testing tracking)

### ~~security scanner
**Function**: Security analysis and third-party vulnerability management tool.
**Examples**: SecurityScorecard, BitSight, UpGuard, Qualys, Rapid7
**Used in**: vendor-reporting (vulnerabilities, certification status), risk-compliance (continuous monitoring of vendor security posture), shadow-it-governance (risk scoring of discovered tools), vendor-onboarding (security validation)

### ~~grc platform
**Function**: Governance, Risk, and Compliance (GRC) platform for centralized risk and control management.
**Examples**: ServiceNow GRC, Archer (RSA), OneTrust, Vanta, Drata, Tugboat Logic
**Used in**: vendor-reporting (integrated risk register, compliance evidence), risk-compliance (assessment and evidence management, audit preparation)

### ~~bi tool
**Function**: Business Intelligence tool for interactive dashboards and automated reporting.
**Examples**: Power BI, Tableau, Looker, Metabase, Google Data Studio
**Used in**: vendor-reporting (interactive dashboards, automated reporting, historical trends, board-level visualizations)

### ~~email
**Function**: Corporate email for vendor communication.
**Examples**: Gmail, Outlook, Exchange
**Used in**: contract-lifecycle (formal vendor notifications, documentation requests, communication templates), vendor-incident (incident communications), vendor-onboarding (welcome communications)

### ~~calendar
**Function**: Corporate calendar for scheduling reviews, renewals, and alerts.
**Examples**: Google Calendar, Outlook Calendar
**Used in**: contract-lifecycle (renewal alerts, periodic review scheduling, notice deadlines), vendor-onboarding (milestone scheduling, training sessions, go-live dates)

### ~~clm tool
**Function**: Contract Lifecycle Management platform for centralized contract tracking, workflow automation, and obligation management.
**Examples**: SAP Ariba, Icertis, DocuSign CLM, Agiloft, Ironclad
**Used in**: contract-lifecycle (contract registry, amendment tracking, renewal workflows, obligation monitoring), it-contract-review (clause library, template management), vendor-reporting (contract data aggregation)

## How to customize

To adapt this plugin for a specific client's tools:

1. Search for all occurrences of `~~` in plugin files
2. Replace with the specific reference to the client's tool
3. If the client has an MCP server for the tool, adjust instructions to use specific tools

### Customization example

**Before (generic):**
```
- If ~~document repository is connected, search for vendor's internal documentation
```

**After (for client with iManage):**
```
- If iManage is connected, search vendor documentation using imanage_search with query "[vendor name]" in Legal/Vendors workspace
```
