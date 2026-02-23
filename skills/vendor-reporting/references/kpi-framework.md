# IT Vendor KPI Framework

## Principle

Vendor KPIs are not a measurement exercise. They are a governance instrument. A KPI no one reviews is a KPI that does not exist. A KPI without an alarm threshold is data, not an indicator. And an indicator without associated action is decoration on a dashboard.

## KPIs by dimension

### 1. Availability and performance

| KPI | Formula | Target | Alarm | Source |
|-----|---------|--------|--------|--------|
| Monthly uptime | (Total min. - Downtime min.) / Total min. × 100 | ≥ 99.5% | < 99.0% | ~~monitoring tool |
| Accumulated downtime (quarter) | Σ downtime minutes in quarter | ≤ 4h | > 8h | ~~monitoring tool |
| P1 incidents (month) | Count of P1 incidents | 0 | ≥ 1 | ~~ticketing system |
| P2 incidents (month) | Count of P2 incidents | ≤ 1 | ≥ 3 | ~~ticketing system |
| Mean time to recovery (MTTR) | Average P1 resolution time | ≤ 4h | > 8h | ~~ticketing system |
| Perceived performance | Internal survey: "Does system respond adequately?" | ≥ 4/5 | < 3/5 | Survey |

**How to measure uptime:**
- Measure from client side, do not rely on vendor status page
- Use ~~monitoring tool with checks every 1-5 minutes
- Exclude only maintenance windows communicated ≥ 48h in advance
- DO NOT exclude: emergency maintenance, partial degradations, timeouts

### 2. Support

| KPI | Formula | Target | Alarm | Source |
|-----|---------|--------|--------|--------|
| P1 first response time | Average time to first human response on P1 | ≤ 1h | > 2h | ~~ticketing system |
| P2 first response time | Average first response on P2 | ≤ 4h | > 8h | ~~ticketing system |
| On-time resolution rate | Tickets resolved in SLA / Total tickets × 100 | ≥ 90% | < 80% | ~~ticketing system |
| Reopen rate | Reopened tickets / Closed tickets × 100 | ≤ 5% | > 10% | ~~ticketing system |
| Support satisfaction | Post-ticket CSAT score | ≥ 4/5 | < 3/5 | ~~ticketing system |
| Escalations to customer | Number of vendor escalations to customer for resolution | Decreasing | Increasing | ~~ticketing system |

**What does NOT count as "first response":**
- An autoresponder ("We received your ticket")
- A chatbot
- "We are investigating" with no useful information
- An internal ticket reassignment

### 3. Economic

| KPI | Formula | Target | Alarm | Source |
|-----|---------|--------|--------|--------|
| Total spend (ARR) | Sum of all annual payments to vendor | ≤ Budget | > Budget + 5% | ~~finance tool |
| Cost per active user | Total spend / Users who accessed in last 30 days | Decreasing | Increasing > 10% | ~~finance tool + ~~identity provider |
| License utilization rate | Active licenses / Contracted licenses × 100 | ≥ 85% | < 70% | ~~identity provider |
| Spend variance vs. budget | (Actual - Budget) / Budget × 100 | ≤ +5% | > +10% | ~~finance tool |
| Captured savings | Σ actual savings vs. non-negotiated price | Increasing | - | Negotiation log |
| Incident cost | Internal hours spent managing vendor incidents × cost/hour | Decreasing | Increasing | Incident log |

### 4. Compliance and security

| KPI | Formula | Target | Alarm | Source |
|-----|---------|--------|--------|--------|
| Current certifications | Current certs / Required certs × 100 | 100% | < 100% | Vendor registry |
| Updated DPAs | Current and complete DPAs / Total vendors with personal data × 100 | 100% | < 100% | ~~document repository |
| Verified subprocessors | Vendors with subprocessor list reviewed in last year / Total × 100 | 100% | < 80% | Vendor registry |
| Open critical vulnerabilities | Count of critical CVEs unpatched > 48h | 0 | ≥ 1 | ~~security scanner |
| Security breaches | Number of breaches notified by vendor in period | 0 | ≥ 1 | Incident log |
| Current risk assessment | Vendors assessed < 12 months ago / Total vendors × 100 | 100% | < 80% | Risk register |

### 5. Contractual and lifecycle

| KPI | Formula | Target | Alarm | Source |
|-----|---------|--------|--------|--------|
| Contracts renewing < 90 days | Count | All with plan defined | Any without plan | Contract registry |
| Auto-renewals not reviewed | Contracts that renewed without explicit review | 0 | ≥ 1 | Contract registry |
| Contracts without exit clause | Number of contracts lacking adequate exit clause | 0 | ≥ 1 | ~~document repository |
| Average contract age | Years since original signature | Informational | > 5 years without renegotiation | Contract registry |
| Spend concentration | % of total spend in top 3 vendors | Informational | > 60% in 1 vendor | ~~finance tool |

### 6. Internal satisfaction

| KPI | Formula | Target | Alarm | Source |
|-----|---------|--------|--------|--------|
| Vendor NPS | Quarterly internal survey (0-10) | ≥ 7 | < 5 | Survey |
| Features covered | Required features covered / Total required × 100 | ≥ 80% | < 60% | Internal evaluation |
| Vendor change requests | Number of user requests to switch tools | Decreasing | Increasing | ~~ticketing system |

## Consolidated dashboard

### Monthly view (1 page)

```
╔════════════════════════════════════════════════════════════╗
║  VENDOR IT DASHBOARD — [MONTH] [YEAR]                   ║
╠════════════════════════════════════════════════════════════╣
║                                                           ║
║  FINANCIAL          OPERATIONAL          COMPLIANCE       ║
║  Spend: €___K       Uptime: ___%         Certs: ___%    ║
║  vs Budget: +/-__%  P1s: ___             DPAs: ___%    ║
║  Utilization: ___%  MTTR: ___h           Risks: ___    ║
║                                                           ║
║  VENDORS IN ALARM:                                        ║
║  🔴 [Vendor]: [brief reason]                            ║
║  🟡 [Vendor]: [brief reason]                            ║
║                                                           ║
║  PENDING DECISIONS:                                       ║
║  • [Decision 1] — Deadline: [date]                      ║
║  • [Decision 2] — Deadline: [date]                      ║
║                                                           ║
╚════════════════════════════════════════════════════════════╝
```

### Trends (quarterly)

For each key KPI, show trend from last 4 quarters:
- ↑ Improving
- → Stable
- ↓ Worsening

## Measurement frequency

| KPI | Measurement | Reporting |
|-----|----------|-----------|
| Uptime, performance | Continuous (~~monitoring tool) | Monthly |
| Support (tickets, times) | Continuous (~~ticketing system) | Monthly |
| Spend, utilization | Monthly (~~finance tool, ~~identity provider) | Quarterly |
| Compliance, certifications | Quarterly (manual + registries) | Quarterly |
| Satisfaction | Quarterly (survey) | Quarterly |
| Risks | Continuous (risk register) | Quarterly + ad-hoc |
| Contractual | Monthly (calendar alerts) | Quarterly + alerts |

## Automation

**Level 1 (minimum viable):**
- Spreadsheet with data updated manually each month
- Quarterly report template in Markdown

**Level 2 (recommended):**
- Data automatically extracted from ~~monitoring tool, ~~ticketing system, ~~finance tool
- Dashboard generated by Claude with `/vendor-dashboard`
- Automatic alerts by email/~~ticketing system when KPI triggers alarm

**Level 3 (advanced):**
- ~~bi tool with interactive dashboard connected to all sources
- ~~grc platform with integrated risk register
- Automatic alerts with escalation workflow
