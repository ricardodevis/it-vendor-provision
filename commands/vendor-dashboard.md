---
name: vendor-dashboard
description: >
  Generates an executive summary of the IT vendor portfolio:
  traffic lights by vendor, financial summary, renewal alerts,
  risk register and pending decisions for management committee.
user_instructions: >
  Indicate the report period (month, quarter or year) and desired
  level of detail (executive summary or complete report).
  Optionally, indicate specific vendors to highlight.
---

# Command: Vendor Executive Dashboard

## Instructions

When executing this command:

1. **Load required skills:**
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-reporting/SKILL.md` (dashboard structure)
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-reporting/references/kpi-framework.md` (KPIs and thresholds)
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-reporting/references/risk-register-template.md` (risk register)

2. **Gather data from available sources:**
   - Document repository: contract register, DPAs, evaluations
   - Finance tool: spending by vendor, invoices, budget
   - Monitoring tool: uptime, performance, incidents
   - Ticketing system: support tickets, response times
   - Identity provider: active users, assigned licenses
   - Security scanner: vulnerabilities, certification status
   - Calendar: upcoming renewals

3. **Generate the dashboard** according to requested type:

   **If executive summary (monthly):**
   - One-page dashboard: financial, operational, compliance
   - Vendors in alarm (🔴🟡)
   - Pending decisions

   **If quarterly report:**
   - Complete traffic light dashboard
   - Financial summary with variances
   - Quarter's news (new vendors, renewals, incidents)
   - Top 5 risks from register
   - Actions for the committee

   **If annual report:**
   - Portfolio overview
   - Annual KPI evolution
   - Process maturity evaluation
   - Captured savings vs. target
   - Improvement plan

4. **Where data is not available**, indicate `[PENDING DATA: required source]` for client completion.

5. **Save the report** in the user's folder with descriptive name:
   - `vendor-dashboard-YYYY-MM.md` (monthly)
   - `vendor-report-YYYY-QX.md` (quarterly)
   - `vendor-annual-report-YYYY.md` (annual)
