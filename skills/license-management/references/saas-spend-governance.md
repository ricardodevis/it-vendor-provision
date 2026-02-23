# SaaS Spend Governance and FinOps Reference

## Philosophy

In the SaaS era, software spend is the new real estate cost—invisible, growing, and nobody owns it. Without deliberate governance, organizations hemorrhage capital on overlapping tools, unused licenses, and rogue subscriptions. SaaS Spend Governance establishes accountability, visibility, and control over this sprawling cost category.

## Spend Visibility Framework

Establish baseline visibility across these dimensions:

- **Total software spend**: Aggregate annual spend across all SaaS subscriptions, perpetual licenses, and cloud services
- **Spend by department**: Cost allocation to business units (Engineering, Sales, Marketing, Finance, etc.)
- **Spend by vendor**: Ranked list of largest vendors by annual contract value
- **Spend per user**: Cost per employee to identify overprovisioning
- **Spend growth rate YoY**: Percentage increase year-over-year to detect runaway costs

Track these metrics monthly to establish trends and flag anomalies.

## Cost Allocation Model

Choose an allocation strategy appropriate to your organization:

**Chargeback Model**: Departments pay for their software consumption directly. Most accurate cost signals but requires mature cost accounting infrastructure.

**Showback Model**: Departments see what they spend but IT absorbs the cost. Builds awareness without friction; departments see impact on their P&L without paying.

**Hybrid Model**: Shared tools (identity, security, infrastructure) are absorbed centrally; departmental tools are charged back.

### Allocation Rules Template

```
Tool: [SaaS Name]
Category: [Communication/Productivity/Analytics/Security/etc.]
Cost Structure: [Seat-based/Usage-based/Fixed/Tiered]
Annual Cost: $[X]

Allocation Rules:
- [Department Name]: [X%] based on [headcount/usage/project allocation]
- [Department Name]: [X%] based on [headcount/usage/project allocation]

Review Cadence: [Quarterly/Annually]
Allocation Owner: [Name/Team]
```

## True-Up Process

A true-up reconciles your estimated license count (what you paid for) with actual usage (what vendors claim you used).

### What Is a True-Up?

Vendors provision seats based on contract terms (named users, concurrent users, active users—definitions vary wildly). At renewal or audit, vendors count actual usage and bill for any overage. This reconciliation is the true-up.

### How Vendors Count (And Why You Disagree)

Vendors deliberately define "active user" broadly: anyone who logged in during the contract period qualifies, even dormant accounts. You count differently: people actually using the tool regularly. This gap creates true-up liability.

### True-Up Preparation Checklist

- [ ] **Export your user list** from the SaaS tool 30 days before renewal
- [ ] **Audit inactive accounts**: Identify users who haven't logged in 90+ days
- [ ] **Deactivate and remove orphaned accounts**: Former employees, projects completed
- [ ] **Document your count**: Screenshot user counts, export reports, timestamp everything
- [ ] **Request vendor usage report**: Ask for their version of active users, last login dates
- [ ] **Compare and analyze gaps**: Where does your count diverge? Why?
- [ ] **Prepare documentation**: Termination dates, project completion dates, business justification for deactivations
- [ ] **Engage procurement**: Involve your licensing contact early

### Dispute Process and Negotiation Leverage

1. Present your clean user list with audit trail
2. Challenge vendor's definition of "active user"—request itemized usage report
3. Reference contract language on user definitions and dispute procedures
4. Propose alternatives: prorated credits, contract term extension instead of overage payment
5. Escalate to vendor's account executive; financial impact creates urgency
6. Document all disputes for renewal negotiations (vendors remember)

## Spending Anomaly Detection

Monitor for unexpected cost increases and unauthorized purchases.

### What to Monitor

- **Sudden usage spikes**: Unexpected increase in seat usage, API calls, or data consumption
- **New subscriptions**: SaaS tools added without IT awareness or procurement approval
- **Price changes**: Vendors increase per-seat costs, restructure billing, or announce unexpected fees
- **Unused renewals**: Tools renewed automatically without usage verification
- **Duplicate tools**: Multiple vendors solving the same problem (e.g., three time tracking tools)

### Thresholds and Alert Rules

- Alert if monthly spend increases >15% month-over-month
- Alert if new annual contracts >$5,000 appear without procurement record
- Alert if renewal cost increases >10% without contract change
- Alert if tools have <5% user adoption after 90 days
- Quarterly review of all tools with zero active users

### Implementation

Integrate with finance tools and asset management systems to receive automated alerts. Establish escalation: first alert to procurement team, second alert to CFO.

## Renewal Cost Forecasting

Project next-year software spend to build accurate budgets and negotiate proactively.

### Renewal Forecasting Template

```
Tool: [SaaS Name]
Current Annual Cost: $[X]
Users/Licenses: [N]
Contract End Date: [Date]

Growth Assumptions:
- Headcount growth: [X%]
- Additional users needed: [N]
- Cost per unit growth: [X%]

Price Escalation Analysis:
- Current contract includes [X%] annual increase clause (if any)
- Vendor pricing history: [note any patterns]
- Market rate changes: [competitor pricing]

Renewal Cost Projection:
- Base cost (with headcount growth): $[X]
- Price escalation: $[X]
- Additional seat costs: $[X]
- Total projected cost: $[X]

Variance from current: $[X] ([Y%])

Negotiation Strategy:
- [ ] Multi-year commitment discount possible?
- [ ] Volume discount based on growth?
- [ ] Cap price escalation at [X%]?
```

Build this forecast 6+ months before renewal to allow time for tool evaluation and negotiation.

## Zombie Subscription Identification

Subscriptions billed long after their utility has expired drain budget silently.

### Zombie Detection Scenarios

- **Employee departure**: Team member is terminated; their tool subscriptions remain active and billed
- **Project completion**: Client project ends; project-specific tool subscriptions continue indefinitely
- **Tool consolidation**: Organization selects a primary tool; legacy competing tools remain on budget despite zero usage
- **Expired trials**: Trial licenses convert to paid tier automatically without confirmation

### Detection Methods

1. **Finance tool integration**: Cross-reference employee termination dates against SaaS billing records. Flag subscriptions for terminated employees.

2. **Identity provider integration**: Query identity provider for account status. Deactivated corporate accounts should trigger review of their associated SaaS subscriptions.

3. **Usage analysis**: Request 90-day inactivity reports from all SaaS vendors. Tools with zero active users are candidates for elimination.

4. **Contract calendar**: Maintain contract end dates. Flag coming renewals for business justification before auto-renewal.

Assign ownership of zombie remediation; make it someone's job to kill these subscriptions.

## SaaS Rationalization Matrix

Plot tools on a 2x2 matrix to visualize cost-benefit and make elimination decisions.

```
                  HIGH USAGE
                      |
    KEEP + INVEST     |     OPTIMIZE FOR COST
    High ROI tools    |     Popular but overpriced
    Growth opportunities|    Negotiate hard or replace
                      |
    __________________|___________________ COST
                      |
    ELIMINATE         |     EVALUATE
    Low usage, high cost     Low usage, low cost
    Zombie subscriptions     Experimental tools
    Quick decisions          Migration candidates
                      |
                      LOW USAGE
```

- **High Usage + Low Cost = KEEP and INVEST**: These are core tools; fund them properly
- **High Usage + High Cost = OPTIMIZE**: Negotiate aggressively; seek alternatives; bundle with other vendors
- **Low Usage + High Cost = ELIMINATE**: Act quickly; these are budget drains
- **Low Usage + Low Cost = EVALUATE**: Low risk; useful for teams with specialized needs but monitor for drift

## Budget Governance

Establish approval workflows and annual budgeting discipline.

### New SaaS Approval Workflow

Define who approves and at what thresholds:

```
Annual cost <$2,500: Department manager approval
Annual cost $2,500-$10,000: Director approval + IT security review
Annual cost $10,000+: VP approval + procurement + security + compliance review

Approval checklist:
- [ ] Business justification (what problem does it solve?)
- [ ] Alternative evaluation (why this tool over others?)
- [ ] Cost-benefit analysis (ROI, payback period)
- [ ] Security assessment (SOC2, DPA, data handling)
- [ ] Integration with existing stack (does it duplicate something?)
- [ ] User adoption plan (how will it be rolled out?)
```

### Annual Software Budget Process

1. **September**: Send budget guidance to departments with historical spend data
2. **October**: Departments submit SaaS needs and renewal estimates
3. **November**: Procurement consolidates requests; identify overlaps and opportunities
4. **December**: Executive team reviews; allocates budget; communicates priorities
5. **January**: Execute renewals and new purchases within approved budget

### Variance Reporting

Report monthly:
- Total actual spend vs. budget
- Variance by department
- Unplanned purchases (emergencies, approvals missed)
- Forecasted full-year spend vs. approved budget
- Top 10 cost drivers and their status

## Metrics: The SaaS Spending Scorecard

Track these KPIs monthly:

- **Software spend as % of revenue**: Healthy range is 5-8% for software companies; higher for SaaS-heavy verticals
- **Cost per employee**: Benchmark: $2,000-$3,000 annually; higher in tech, lower in operations-heavy roles
- **SaaS growth rate**: YoY percentage increase; flag if >20% (sign of loss of control)
- **Waste ratio**: (Unused licenses + zombie subscriptions) / total licenses × 100%; target <10%
- **Spend per department**: Identify outliers; build accountability
- **Renewal success rate**: Percentage of renewals negotiated for lower cost or extended term
- **Tool adoption rate**: Average % of provisioned seats actively used; <50% signals poor choices

## Reference Connectors

Connect to these data sources to automate spend governance:

- **Finance tool** (Coupa, Concur, Expensify): Extract SaaS charges from corporate card spend, identify new vendors, track P.O.s
- **Identity provider** (Okta, Azure AD, AWS IAM): Query user status, identify deactivated accounts, detect new SaaS integrations via SSO
- **Asset management tool** (Jamf, Intune, Qualys): Inventory software licenses across devices, match to employee records
- **Procurement system** (Jaggr, Blissfully): Centralized record of all SaaS contracts, renewal dates, vendors
