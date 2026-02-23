# Board-Level Vendor Risk Reporting

## Philosophy

Board-level vendor reporting answers a single question: Are we exposed? How much? What are we doing about it? Boards do not need KPI dashboards or operational metrics. They need clarity on strategic vendor risk, financial exposure, and board-level decisions required.

Board reports focus on materiality—what could affect revenue, operations, compliance, or shareholder value. Technical details and SLA compliance data belong in operational reports and appendices, not in the board narrative.

## Report Frequency

Board vendor reports are delivered semi-annually or annually. Monthly or quarterly operational updates belong in audit committee governance, not board-level discussions. Frequency can increase if material vendor events occur (security breach, acquisition, contract dispute, regulatory finding).

## Report Structure (Maximum 5 Pages + Appendix)

### 1. Executive Summary (1 Page)

- **Top 3 Vendor Risks**: Name the risk, business impact (quantified), mitigation owner, timeline to resolution
- **Vendor Portfolio Health Score**: Single traffic light (Red/Yellow/Green) or 1-5 scale with brief rationale
- **Key Decisions Required This Quarter**: What board approval or risk acceptance is required?
- **Material Changes from Last Report**: Acquisitions, security incidents, contract disputes, regulatory changes affecting vendor landscape

### 2. Vendor Portfolio Overview

- Total vendor count (include trend: up/down from prior year)
- Total vendor spend (by year: current, prior two years)
- Vendor spend distribution: top 10 vendors, concentration risk (% of budget in top 5, top 10)
- Vendor segmentation distribution: infrastructure, SaaS, professional services, managed services, etc.
- Geographic and regulatory footprint: where are critical vendors domiciled?
- Year-over-year change narrative: portfolio growth/contraction, spend per vendor (average, median)

### 3. Risk Narrative

Present top 5 vendor risks ranked by business impact (not severity of the risk factor itself, but impact to the organization if the risk materializes).

**For each risk, include:**

- **Risk Description**: What is the issue? (e.g., "Vendor X is a single-source provider of critical integration platform")
- **Business Impact**: Translate to revenue, operational, or compliance impact. Example: "Loss of Vendor X would disrupt order fulfillment for 15,000 daily transactions, representing $2.3M monthly revenue exposure."
- **Likelihood**: High/Medium/Low with brief rationale (e.g., "Vendor has history of acquisition targets; financial viability uncertain")
- **Current Mitigation**: What controls are in place? (e.g., "Multi-year contract with exit clause; backup vendor identified but not contracted")
- **Residual Risk**: After mitigation, is this acceptable? If not, why?
- **Owner**: Name the executive accountable for this risk
- **Timeline**: When will this risk be resolved or accepted?

**What Changed Since Last Report:** For each returning risk, state whether likelihood, impact, or mitigation has changed. Did we make progress or did the risk increase?

### 4. Compliance Status

- **Regulatory Compliance Summary**: Are vendors compliant with applicable regulations (GDPR, NIS2, AI Act, industry-specific)?
  - For each regulation, state: compliant, compliant-with-exceptions, non-compliant, unknown
  - Exceptions or non-compliance must have remediation plans with assigned owners and dates

- **Audit Findings**: Summary of vendor-related findings from recent audits (internal, external, regulatory)
  - Material findings that affect risk profile
  - Remediation status and timeline

- **Contractual Compliance Gaps**: Are vendor contracts missing required clauses (data protection, audit rights, exit rights)?
  - Quantify: how many vendor contracts are missing security requirements?
  - Remediation plan: which contracts will be updated by when?

### 5. Strategic Recommendations

- **Vendor Consolidation Opportunities**: Are we over-vendored in any category? Could consolidation reduce risk, cost, or operational overhead?
- **Contract Renewal Decisions Needed**: Which vendor contracts expire in the next 12 months? Renew, exit, or renegotiate?
- **Exit Recommendations**: Which vendors should we exit? Why? Timeline and operational impact?
- **Capability Gaps**: Are there vendor capabilities we need but lack in our current portfolio?

---

## Risk Narrative Template

Use this template for each risk in the board report:

```
RISK: [Risk Name]

Description:
[2-3 sentences explaining the risk. What is the situation?]

Business Impact:
[Quantified impact. Example: "If this vendor experiences a 24-hour outage,
we lose $500K in transaction processing revenue. Customer experience impact
affects retention of top 20 accounts."]

Likelihood: [High/Medium/Low]
[Brief rationale with supporting facts]

Current Mitigation:
- [Mitigation 1: e.g., "Backup vendor identified and tested quarterly"]
- [Mitigation 2: e.g., "Master service agreement includes 90-day exit window"]

Residual Risk: [Acceptable/Unacceptable]
[If unacceptable, explain why. What additional mitigation is needed?]

Owner: [Executive name and title]
Timeline: [When will this be resolved or reviewed again?]
```

---

## Value Realization Section

For every significant vendor contract, answer: Are we getting what we paid for?

This section compares vendor spend to business value delivered:

- **Contracted Value vs. Realized Value**: What did the contract promise? What are we actually using?
  - Example: "Licensed 500 user seats at $120/user/year ($60K annual). Usage audit shows 340 active users. Opportunity to right-size: $19.2K savings."

- **Adoption and Utilization**: Are departments using the vendor's platform as intended?
  - Underutilized vendors are renegotiation or exit candidates
  - Overutilized vendors may need contract expansion

- **Cost per Unit of Outcome**: Normalize vendor cost against measurable business outcomes
  - Example: "Vendor Y cost us $250K last year and processed 50M transactions. Cost per transaction: $0.005."

- **Strategic Value Beyond Cost**: Some vendors provide strategic value that isn't captured in cost metrics
  - Example: "Vendor Z is a market leader in AI-driven risk detection. Premium price justified by competitive differentiation."

---

## Scenario Analysis Template

For each high-impact vendor, develop a "what-if" scenario:

```
SCENARIO: Loss of Vendor [Name]

Operational Impact:
[What processes break? How many users/customers affected? What is the duration?]
Example: "Payment processing halts. 50,000 daily transactions disrupted.
Impact duration: 48 hours to failover; 2 weeks for full restoration."

Financial Impact:
[Revenue impact, cost of workarounds, cost of recovery]
Example: "$500K immediate revenue loss. $100K emergency contractor costs.
$50K expedited shipping for failover infrastructure."

Recovery Time:
[RTO and RPO from recovery plan. How realistic is this?]
Example: "RTO: 4 hours (tested in DR drill). RPO: 15 minutes (acceptable)."

Alternative Mitigation:
[If we lose this vendor, what's Plan B?]
Example: "Backup vendor contracted. Quarterly failover drill confirms
restoration capability. Cost: 15% premium."

Decision Required:
[Does the board want to accept this risk, invest in mitigation,
or divest from this vendor?]
```

---

## Board Decision Matrix

Clarify what decisions the board must make about vendor risk:

| Decision Required | Options | Financial Impact | Timeline |
|---|---|---|---|
| Approve exit from Vendor X | Exit now / Negotiate wind-down / Retain | $2.5M transition cost vs. $5M annual savings | Q2 2026 |
| Accept residual risk for Vendor Y | Mitigate further / Accept risk / Divest | $500K mitigation vs. accept $2M exposure | Decision by April board meeting |
| Approve contract renewal with Vendor Z | Renew at current terms / Renegotiate / Exit | $750K annual spend; 5% negotiation opportunity | Sign by contract renewal date |

---

## Visual Templates

**Traffic Light Summary**
Display vendor portfolio health as a single visual:
- Green: <3% vendor spend at risk, <5 critical single-points-of-failure
- Yellow: 3-7% vendor spend at risk, 5-10 critical single-points-of-failure
- Red: >7% vendor spend at risk, >10 critical single-points-of-failure, or material compliance gaps

**Risk Heat Map**
Matrix of top vendors (y-axis) vs. risk categories (x-axis: financial, security, compliance, operational, strategic).
Heat intensity indicates likelihood × impact.

**Spend Waterfall**
Current vendor spend (base) → new vendor onboarding (+) → vendor exits (-) → contract renegotiations (+/-) → projected spend.
Shows budget movement over 12-month planning horizon.

**Vendor Health Trends Over Time**
Line chart showing portfolio health score (Green/Yellow/Red or 1-5 scale) quarterly for past 2 years.
Highlight inflection points (new risks, resolved risks, material changes).

---

## What NOT to Include

Do not include raw SLA numbers, ticket count metrics, or technical performance data in the board narrative. These belong in operational reports.

- Individual vendor uptime percentages → include only if trending toward SLA breach
- IT support ticket volume → relevant only if affecting business
- Patch management compliance rates → relevant only if creating security risk
- Help desk satisfaction scores → operational metric, not board-level
- Detailed network topology or infrastructure diagrams → append if helpful for context

The board needs to understand materiality: Does this metric affect risk, revenue, compliance, or strategic positioning? If not, it's not board-level content.
