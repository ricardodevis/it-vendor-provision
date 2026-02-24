# License Audit Report
## Meridian Financial Group — SaaS Portfolio Assessment

**Date:** 2026-02-15
**Scope:** All SaaS and on-premise software subscriptions
**Period analyzed:** January 2025 — January 2026
**Data sources:** Finance tool (SAP), Identity Provider (Okta), Asset management (ServiceNow CMDB), User survey

---

## Executive Summary

Meridian Financial Group spends **EUR 2,847,600/year** on 14 software products across 6 vendors. The audit identifies **EUR 412,000 in annual savings opportunities** (14.5% of total spend) through license optimization, consolidation of duplicate tools, and renegotiation of underutilized subscriptions. Three compliance risks require immediate attention: (1) 23 unlicensed Tableau users (true-up liability estimated at EUR 34,500), (2) two shadow IT tools processing customer PII without DPA, and (3) expired Microsoft EA requiring urgent renewal negotiation.

| Metric | Value |
|---|---|
| Total annual software spend | EUR 2,847,600 |
| Number of products | 14 |
| Number of vendors | 6 |
| Total licenses contracted | 4,850 |
| Total licenses in active use | 3,612 (74.5%) |
| Estimated annual savings | EUR 412,000 (14.5%) |
| Compliance risks identified | 3 (1 critical, 2 high) |

---

## Complete Inventory

| Software | Vendor | License Type | Contracted | Assigned | In Use | Unit Cost/yr | Total Cost/yr | Renewal | Owner |
|---|---|---|---|---|---|---|---|---|---|
| Microsoft 365 E5 | Microsoft | Named user | 1,200 | 1,180 | 1,095 | EUR 432 | EUR 518,400 | 2026-03-31 | IT Ops |
| Microsoft 365 E3 | Microsoft | Named user | 300 | 295 | 248 | EUR 276 | EUR 82,800 | 2026-03-31 | IT Ops |
| Salesforce Enterprise | Salesforce | Named user | 450 | 442 | 387 | EUR 1,980 | EUR 891,000 | 2026-09-15 | Sales Ops |
| Salesforce Platform | Salesforce | Named user | 150 | 148 | 62 | EUR 900 | EUR 135,000 | 2026-09-15 | Sales Ops |
| ServiceNow ITSM Pro | ServiceNow | Named user | 80 | 78 | 71 | EUR 1,200 | EUR 96,000 | 2026-06-01 | IT Ops |
| Tableau Creator | Tableau | Named user | 50 | 73 | 73 | EUR 840 | EUR 42,000 | 2026-07-31 | Analytics |
| Tableau Viewer | Tableau | Named user | 200 | 185 | 142 | EUR 180 | EUR 36,000 | 2026-07-31 | Analytics |
| Slack Business+ | Salesforce | Named user | 1,500 | 1,480 | 1,312 | EUR 152 | EUR 228,000 | 2026-09-15 | IT Ops |
| Jira Software Premium | Atlassian | Named user | 300 | 290 | 234 | EUR 168 | EUR 50,400 | 2026-11-01 | Engineering |
| Confluence Standard | Atlassian | Named user | 300 | 295 | 187 | EUR 66 | EUR 19,800 | 2026-11-01 | Engineering |
| Okta Workforce Identity | Okta | Named user | 1,500 | 1,500 | 1,487 | EUR 72 | EUR 108,000 | 2026-04-30 | Security |
| Datadog Pro | Datadog | Host-based | 120 hosts | 120 | 98 | EUR 276/host | EUR 33,120 | 2026-08-01 | Platform |
| Miro Business | Miro | Named user | 200 | 195 | 47 | EUR 192 | EUR 38,400 | 2026-05-15 | Product |
| **Shadow IT: Notion** | Notion | Team plan | ~45 | ~45 | ~45 | EUR 96 | ~EUR 4,320 | Monthly | Unmanaged |
| **Shadow IT: Airtable** | Airtable | Team plan | ~30 | ~30 | ~30 | EUR 240 | ~EUR 7,200 | Monthly | Unmanaged |

**Total contracted licenses:** 6,425 | **Total in use:** 5,518 | **Total annual spend:** EUR 2,290,440 (managed) + ~EUR 11,520 (shadow IT)

*Note: Microsoft EA (M365 E5 + E3) totals EUR 601,200/year. Salesforce ecosystem (Enterprise + Platform + Slack) totals EUR 1,254,000/year.*

---

## Usage Analysis

### Overall Metrics

| Metric | Value | Threshold | Status |
|---|---|---|---|
| **Overall adoption rate** | 74.5% | Green >85%, Yellow 60-85%, Red <60% | :yellow_circle: Yellow |
| **Overall utilization** | 85.8% | Green >90%, Yellow 70-90%, Red <70% | :yellow_circle: Yellow |
| **Orphaned licenses** | 3.8% | Green <2%, Yellow 2-5%, Red >5% | :yellow_circle: Yellow |
| **Dormant licenses (>90 days)** | 14.2% | Green <10%, Yellow 10-20%, Red >20% | :yellow_circle: Yellow |

### Per-Product Analysis

| Software | Adoption | Status | Utilization | Status | Orphaned | Dormant | Key Issue |
|---|---|---|---|---|---|---|---|
| Microsoft 365 E5 | 91.3% | :green_circle: | 92.8% | :green_circle: | 1.7% | 7.1% | 85 users on E5 only use email — should be E3 |
| Microsoft 365 E3 | 82.7% | :yellow_circle: | 84.1% | :yellow_circle: | 1.7% | 15.9% | 47 dormant accounts (ex-contractors) |
| Salesforce Enterprise | 86.0% | :green_circle: | 87.6% | :yellow_circle: | 1.8% | 12.4% | 55 users log in <2x/month |
| Salesforce Platform | 41.3% | :red_circle: | 41.9% | :red_circle: | 1.4% | 58.1% | 86 licenses unused — purchased for abandoned project |
| ServiceNow ITSM | 88.8% | :green_circle: | 91.0% | :green_circle: | 2.6% | 9.0% | Healthy usage |
| Tableau Creator | **146.0%** | :red_circle: | 100% | :green_circle: | 0% | 0% | **23 unlicensed users — compliance risk** |
| Tableau Viewer | 71.0% | :yellow_circle: | 76.8% | :yellow_circle: | 8.1% | 23.2% | 43 viewers never accessed dashboards |
| Slack Business+ | 87.5% | :green_circle: | 88.6% | :yellow_circle: | 1.4% | 11.4% | 168 users post <1 message/week |
| Jira Software | 78.0% | :yellow_circle: | 80.7% | :yellow_circle: | 3.4% | 19.3% | 56 accounts never created a ticket |
| Confluence | 62.3% | :yellow_circle: | 63.4% | :red_circle: | 1.7% | 36.6% | Low adoption — teams use Google Docs instead |
| Okta | 99.1% | :green_circle: | 99.1% | :green_circle: | 0.9% | 0.9% | Critical identity infrastructure — healthy |
| Datadog | 81.7% | :yellow_circle: | 81.7% | :yellow_circle: | 0% | 18.3% | 22 hosts monitored but underutilized |
| Miro | 23.5% | :red_circle: | 24.1% | :red_circle: | 2.6% | 75.9% | **148 of 200 licenses effectively unused** |

---

## Compliance Risks

### CRITICAL: Tableau Creator Over-Licensing

**Risk:** 23 users are actively using Tableau Creator without valid licenses (73 active users vs. 50 contracted). This constitutes software piracy under the EULA and exposes the organization to a true-up claim.

**Estimated liability:** 23 users x EUR 840/year x 1.5 (true-up penalty multiplier) = **EUR 34,500** plus potential back-billing for period of unauthorized use.

**Immediate action:** Purchase 25 additional Creator licenses before vendor audit (anticipated Q2 2026 based on renewal cycle). Alternatively, evaluate converting 15 light users to Viewer licenses.

### HIGH: Shadow IT Tools Processing PII

**Notion (45 users):** Product team uses Notion for customer journey mapping and stores customer feedback containing PII (names, email addresses, complaint details). No DPA in place. Data hosted in US without SCCs.

**Airtable (30 users):** Marketing team uses Airtable for event management with attendee data including dietary requirements (special category data under GDPR Art. 9). No DPA, no data processing record in ROPA.

**Immediate action:** Require DPAs from both vendors within 30 days or migrate data to approved platforms. Add both to the vendor register with risk assessment.

### HIGH: Microsoft EA Renewal Imminent

**Risk:** Microsoft Enterprise Agreement expires 2026-03-31 (39 days from this report). Current EA pricing was negotiated in 2023 and is approximately 12% below current list prices. Without proactive renegotiation, auto-renewal at list prices would increase annual cost by approximately EUR 72,000.

**Immediate action:** Engage Microsoft account team immediately. Leverage identified E5-to-E3 downgrade opportunity (85 users) as negotiation chip. Target: maintain or reduce current per-user pricing.

---

## Prioritized Optimization Plan

### Quick Wins (0-30 days) — Estimated savings: EUR 147,600/year

| Action | Product | Impact | Savings/year |
|---|---|---|---|
| Downgrade 85 E5 users to E3 (email-only users) | Microsoft 365 | Reduce 85 E5 licenses | EUR 13,260 |
| Reclaim 47 dormant E3 accounts | Microsoft 365 | Reduce 47 E3 licenses | EUR 12,972 |
| Cancel 86 unused Salesforce Platform licenses | Salesforce | Cancel at renewal | EUR 77,400 |
| Cancel 148 unused Miro licenses | Miro | Reduce to 52 licenses | EUR 28,416 |
| Reclaim 43 unused Tableau Viewer licenses | Tableau | Reduce to 157 licenses | EUR 7,740 |
| Reclaim 22 underutilized Datadog hosts | Datadog | Reduce to 98 hosts | EUR 6,072 |
| Terminate Notion shadow IT (migrate to Confluence) | Notion | Cancel subscription | EUR 4,320 |

*Note: Salesforce Platform savings realize at September 2026 renewal.*

### Rationalization (30-60 days) — Estimated savings: EUR 164,400/year

| Action | Description | Savings/year |
|---|---|---|
| Consolidate Confluence + Notion into single wiki | Migrate Notion users to Confluence; invest in Confluence adoption program | EUR 4,320 (Notion) + improved Confluence ROI |
| Renegotiate Microsoft EA before expiration | Use E5 downgrades as leverage; target 5% reduction on E3 pricing | EUR 30,060 (estimated) |
| Renegotiate Salesforce at renewal | Bundle Enterprise + Slack; leverage Platform cancellation; target 8% volume discount | EUR 89,520 (estimated) |
| Right-size Jira/Confluence licenses | Reduce from 300 to 250 based on actual usage | EUR 11,700 |
| Regularize Airtable as approved tool or migrate | If approved: negotiate enterprise agreement. If not: migrate to Jira/Confluence | EUR 7,200 (if migrated) |
| Address Tableau compliance gap | Purchase 25 Creator + convert 15 to Viewer | -EUR 18,300 (additional cost) |

### Transformation (90-180 days) — Estimated savings: EUR 100,000/year

| Action | Description | Savings/year |
|---|---|---|
| Implement automated license reclamation | Configure Okta to flag accounts with no login >60 days; auto-deprovision at 90 days | EUR 35,000 (estimated across all products) |
| Deploy SaaS management platform | Implement Zylo or Productiv for continuous license monitoring and optimization | -EUR 25,000 (tool cost) + EUR 65,000 (ongoing optimization) |
| Negotiate multi-year enterprise agreements | Salesforce + Atlassian 3-year commitments with volume discounts | EUR 25,000 (estimated incremental) |

---

## Savings Estimation

| Scenario | Annual savings | % of spend | 3-year savings |
|---|---|---|---|
| **Conservative** (quick wins only) | EUR 147,600 | 5.2% | EUR 442,800 |
| **Realistic** (quick wins + rationalization) | EUR 312,000 | 11.0% | EUR 936,000 |
| **Optimistic** (all three phases) | EUR 412,000 | 14.5% | EUR 1,236,000 |

*Net of additional costs (Tableau regularization EUR 18,300/year, SaaS management tool EUR 25,000/year).*

---

## Action Calendar

| Week | Action | Owner | Priority |
|---|---|---|---|
| W1 (immediate) | Purchase 25 Tableau Creator licenses | Analytics / Procurement | Critical |
| W1 | Initiate Microsoft EA renegotiation | IT Ops / Procurement | Critical |
| W1 | Request DPAs from Notion and Airtable | Legal / DPO | High |
| W2 | Begin Miro license reclamation (notify users) | Product / IT Ops | Medium |
| W2 | Reclaim 47 dormant M365 E3 accounts | IT Ops | Medium |
| W3 | Identify 85 E5 users for E3 downgrade (validate with managers) | IT Ops / HR | Medium |
| W4 | Negotiate Salesforce Platform cancellation at renewal | Procurement | Medium |
| W4 | Present optimization plan to steering committee | IT Governance | Medium |
| W6-8 | Execute Confluence adoption program (replace Notion) | Product / IT Ops | Medium |
| W8 | Deploy automated license reclamation rules in Okta | Security / IT Ops | Medium |
| W10-12 | Evaluate and select SaaS management platform | IT Ops / Procurement | Low |
| W16-20 | Negotiate Salesforce and Atlassian renewals | Procurement | Medium |
| Ongoing | Monthly license utilization review | IT Governance | Medium |
