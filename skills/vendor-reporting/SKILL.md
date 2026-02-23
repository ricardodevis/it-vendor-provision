---
name: vendor-reporting
description: >
  Executive reporting and vendor IT dashboard for executive board. Portfolio
  dashboard, risk register, vendor KPIs, renewal alerts and periodic reporting
  for steering committee. Activate when user requests "vendor dashboard",
  "executive vendor report", "IT dashboard", "reporting for executive board",
  "vendor KPIs", "vendor risk register", "how are our vendors doing?",
  "summary for steering committee", "quarterly IT report", "software portfolio
  status", "how much do we spend on software?", "renewal alerts", "vendor performance report",
  "CIO dashboard", "vendor portfolio summary", "risk committee report", or any variant
  of executive-level reporting on IT vendor relationships.
version: 0.1.0
---

# Executive Reporting for IT Vendors

Guide to generating dashboards, executive reports and risk registers for IT vendor portfolio, directed at the steering committee (CTO, CIO, CAIO, CFO, CEO).

## Philosophy

The steering committee does not need to know details of each contract. They need to know three things: how much we spend, what risks we have, and what decisions need to be made. Everything else is noise. This skill generates reporting that answers those three questions with data, not opinions.

## Reporting types

### 1. Executive dashboard (overview)
- **Audience**: CTO, CIO, CFO, CEO
- **Frequency**: Monthly or on demand
- **Format**: Markdown with traffic light tables

### 2. Quarterly vendor report
- **Audience**: Steering committee
- **Frequency**: Quarterly
- **Format**: Detailed Markdown or presentation

### 3. Risk alert
- **Audience**: CTO/CISO + relevant parties
- **Frequency**: Ad-hoc (when risk is detected)
- **Format**: Brief, direct Markdown

### 4. Annual vendor governance report
- **Audience**: Board / Audit committee
- **Frequency**: Annual
- **Format**: Formal document

## Executive dashboard

### Structure

**Section 1: Financial summary**

| Metric | Value | Change vs. previous period |
|---------|-------|-------------------------------|
| Total software spend (ARR) | €___ | +/- __% |
| Number of active vendors | ___ | +/- ___ |
| Average spend per vendor | €___ | +/- __% |
| Top 5 vendors by spend | (table) | |
| Spend by department | (table) | |
| Savings captured in period | €___ | vs. target: __% |

**Data sources**: ~~finance tool, contract registry in ~~document repository

**Section 2: Vendor traffic light**

For each vendor with High or Medium criticality:

| Vendor | Criticality | SLA | Security | Compliance | Satisfaction | Overall status |
|-----------|-----------|-----|-----------|------------|-------------|--------------|
| Vendor A | High | 🟢 | 🟢 | 🟢 | 🟡 | 🟢 |
| Vendor B | High | 🟡 | 🟢 | 🟢 | 🟢 | 🟡 |
| Vendor C | Medium | 🔴 | 🟡 | 🟢 | 🔴 | 🔴 |

**Traffic light criteria:**

| Color | SLA | Security | Compliance | Satisfaction |
|-------|-----|-----------|------------|-------------|
| 🟢 | ≥ 99.5% uptime, 0 P1 | Current certifications, 0 breaches | All checks OK | > 4/5 |
| 🟡 | 99.0-99.5% or 1 P2 | Cert nearing expiry | Minor gaps identified | 3-4/5 |
| 🔴 | < 99.0% or 1+ P1 | Cert expired or breach | Critical gaps | < 3/5 |

**Data sources**: ~~monitoring tool (SLA), ~~security scanner (security), skill risk-compliance (compliance), internal surveys (satisfaction)

**Section 3: Alerts and pending actions**

| Alert | Vendor | Deadline | Action required | Owner |
|--------|-----------|-------------|-----------------|-------------|
| Renewal upcoming | Vendor A | 2026-06-30 | Prepare renegotiation | IT Manager |
| Cert expires | Vendor B | 2026-04-15 | Request cert renewal | Security |
| Q1 SLA missed | Vendor C | - | Escalate to vendor | CTO |
| DPA outdated | Vendor D | - | Request update | Legal |

**Data sources**: contract registry (~~document repository), calendar alerts (~~calendar)

**Section 4: Decisions for steering committee**

List of decisions requiring committee approval:
- Renewals > €X (threshold defined by client)
- New vendor contracts
- Vendor exits
- Incidents requiring executive action
- Significant regulatory changes

### 2. Vendor risk register

See `references/risk-register-template.md` for complete template.

**Register structure:**

| ID | Vendor | Risk | Probability | Impact | Level | Mitigation | Status | Owner |
|----|-----------|--------|-------------|---------|-------|-----------|--------|-------|
| R-001 | Vendor A | Technology lock-in | High | High | Critical | Exit plan prepared | Monitored | CTO |
| R-002 | Vendor B | Data transfer to US | Medium | High | High | DPF + SCCs verified | Accepted | DPO |
| R-003 | Vendor C | No SOC 2 | High | Medium | High | Required at next renewal | In remediation | CISO |

**Update**: Minimum quarterly, immediately on incident or relevant change.

### 3. Vendor KPIs

See `references/kpi-framework.md` for complete framework.

**KPIs by dimension:**

| Dimension | KPI | Formula | Target | Source |
|-----------|-----|---------|--------|--------|
| **Availability** | Effective uptime | Operating minutes / Total minutes × 100 | ≥ 99.5% | ~~monitoring tool |
| **Availability** | P1 incidents | Count of P1 in period | 0 | ~~ticketing system |
| **Support** | P1 mean response time | Average first response time on P1 | ≤ 1h | ~~ticketing system |
| **Support** | On-time resolution rate | Tickets resolved in SLA / Total tickets × 100 | ≥ 90% | ~~ticketing system |
| **Economic** | Cost per active user | Total spend / Active users | Decreasing | ~~finance tool + ~~identity provider |
| **Economic** | Spend variance vs. budget | (Actual - Budget) / Budget × 100 | ≤ +5% | ~~finance tool |
| **Compliance** | Current certifications | Current certs / Required certs × 100 | 100% | Vendor registry |
| **Compliance** | DPA updated | Yes/No | Yes | ~~document repository |
| **Satisfaction** | Vendor NPS | Survey key users | ≥ 7/10 | Quarterly survey |
| **Licenses** | Utilization rate | Licenses in use / Licenses contracted × 100 | ≥ 85% | ~~identity provider |

### 4. Quarterly report for steering committee

**Structure:**

1. **Executive summary** (half page)
   - Quarter's total spend vs. prior vs. budget
   - Relevant incidents (P1 and P2 only)
   - Decisions taken and results
   - Pending decisions for this committee

2. **Vendor traffic lights dashboard** (1 page)
   - Traffic light table for critical vendors
   - Trend vs. prior quarter (↑ ↓ →)

3. **Quarter's news** (1-2 pages)
   - New vendors added (with evaluation result)
   - Contracts renewed (terms vs. prior)
   - Incidents managed (type, resolution, impact)
   - Relevant regulatory changes

4. **Risks** (1 page)
   - Top 5 risks from risk register
   - Newly identified risks
   - Closed or mitigated risks

5. **Economic** (1 page)
   - Spend by software category
   - Savings captured (license optimization, renegotiations)
   - Next quarter's spend forecast
   - Upcoming renewals with economic impact

6. **Actions** (half page)
   - Pending actions from prior committee and status
   - New actions proposed for approval

### 5. Annual governance report

**Structure:**
1. Vendor portfolio overview (number of vendors, spend, criticality)
2. Annual evolution: spend, vendors, incidents, compliance
3. Vendor management process maturity assessment
4. Risk summary managed and evolution
5. Regulatory compliance: GDPR, NIS2, AI Regulation
6. Total savings captured vs. target
7. Improvement plan for next year
8. Indicators compared with sector benchmarks (if available)

## Output

Generate requested report in Markdown with:
- Real data extracted from available connectors
- Where data unavailable, indicate "[DATA: source required]" for client completion
- Readable traffic lights and tables without additional tools
- Executive language: direct, no unnecessary jargon, decision-oriented
- Maximum 5 pages for quarterly reports, 10 for annual

## Related Skills

- **contract-lifecycle**: Reporting draws from lifecycle events (incidents, renewals, amendments)
- **license-management**: License usage metrics and spend data feed into dashboards
- **risk-compliance**: Compliance status and risk register contribute to executive reporting
- **vendor-assessment**: Assessment scores provide baseline for vendor tracking over time
