---
name: license-management
description: >
  Software license management and auditing. Activate when the user asks for
  "audit licenses", "software inventory", "optimize licenses", "license
  compliance", "license true-up", "SaaS license management", "license
  renewal", "software rationalization", "how many licenses do we have?",
  "are we overpaying for licenses?", "shadow IT", "unauthorized software",
  "cost optimization", "software spend control", "overspend audit",
  "SaaS waste", "unused subscriptions",
  or any variant of software license management, auditing, or control.
version: 0.1.0
---

# Software License Management

A guide for controlling, auditing, and optimizing software licenses in enterprise environments, from initial inventory through rationalization and compliance.

## Philosophy

License management is not an accounting exercise. It is an exercise in corporate governance. A company that doesn't know how many licenses it has doesn't know how much it spends on software. And a company that doesn't know how much it spends on software doesn't know how much it spends. In the SaaS era, where every department can contract tools with a corporate credit card, license mismanagement is not a theoretical risk: it's the default situation.

## License types

Consult `references/license-types.md` for details on each licensing model.

### Main models
- **Per user (named)**: License assigned to a specific user
- **Per user (concurrent)**: License for concurrent simultaneous users
- **Per device**: License tied to a device
- **Per core/CPU**: License based on processing capacity
- **Subscription (SaaS)**: Recurring payment for use
- **Perpetual + maintenance**: One-time purchase + annual maintenance
- **Consumption-based**: Pay for actual usage (API calls, storage, compute)
- **Freemium/Open source**: Free with limitations or without them, but with obligations

## License management framework

### 1. Inventory

**Objective**: Know exactly what software exists in the organization.

**Data sources:**
- ~~asset management tool (CMDB, ITAM)
- ~~identity provider (SSO, app directory)
- ~~finance tool (software invoices, corporate cards)
- Department declarations
- Network and endpoint scanning

**Data to capture for each software:**
- Software name and vendor
- Licensing model
- Number of licenses contracted
- Number of licenses assigned
- Number of licenses in actual use (last access < 30 days)
- Unit cost and total cost
- Renewal date
- Internal owner (department/responsible party)
- Classification: authorized / tolerated / unauthorized (shadow IT)

### 2. Usage analysis

**Key metrics:**
- **Adoption rate**: Licenses in use / Licenses assigned
- **Utilization rate**: Licenses assigned / Licenses contracted
- **Orphaned licenses**: Assigned to users who have left the company
- **Dormant licenses**: No access in the last 90 days
- **Functional duplication**: Multiple tools for the same function

**Alert thresholds:**
| Metric | Green | Yellow | Red |
|---------|-------|--------|------|
| Adoption rate | > 85% | 60-85% | < 60% |
| Utilization rate | > 90% | 70-90% | < 70% |
| Orphaned licenses | < 2% | 2-5% | > 5% |
| Dormant licenses | < 10% | 10-20% | > 20% |

### 3. Optimization

**Actions by priority:**

1. **Quick wins** (execute immediately):
   - Revoke orphaned licenses (terminated users)
   - Revoke dormant licenses (> 90 days without use, upon confirmation)
   - Downgrade from premium to standard plans if premium features are unused

2. **Rationalization** (plan for 30-60 days):
   - Consolidate duplicate tools (e.g., 3 project management tools → 1)
   - Renegotiate volumes with vendors
   - Migrate from per-user to concurrent if concurrency is low
   - Evaluate more cost-effective alternatives for underutilized software

3. **Transformation** (plan for 90-180 days):
   - Replace legacy software with modern SaaS
   - Centralize software procurement (eliminate shadow IT)
   - Implement approval process for new software
   - Deploy SAM (Software Asset Management) tool if not in place

### 4. Compliance

Consult `references/compliance-audit.md` for audit process details.

**Non-compliance risks:**
- Use of more licenses than contracted (under-licensing)
- Use of unauthorized software (shadow IT without security evaluation)
- Violation of license terms (e.g., using development license in production)
- Use of open source with restrictive licenses (GPL, AGPL) in proprietary software
- Lack of evidence for vendor audit (true-up)

**Preparation for true-up:**
- Maintain updated record of usage vs. contract
- Document license reassignments
- Archive evidence of uninstallations/revocations
- Know the vendor's counting metrics (may differ from yours)

## Internal audit process

### Phase 1: Collection (weeks 1-2)
- Export data from ~~asset management tool
- Export data from ~~identity provider (apps connected via SSO)
- Export software invoices from ~~finance tool
- Survey department owners about software used
- Scan endpoints if management tool is available

### Phase 2: Reconciliation (weeks 2-3)
- Cross-reference technical inventory with financial inventory
- Identify discrepancies: software paid but not installed, software installed but not paid
- Classify each software: authorized / tolerated / unauthorized
- Verify compliance with license terms

### Phase 3: Analysis and recommendations (weeks 3-4)
- Calculate usage metrics per software
- Identify savings potential (quick wins + rationalization)
- Assess compliance risk (under-licensing, shadow IT)
- Generate report with prioritized recommendations

### Phase 4: Execution (months 2-3)
- Execute quick wins
- Negotiate with vendors
- Implement license governance process
- Establish periodic review cycle (quarterly minimum)

## Output

Generate a license audit report in Markdown with:
1. Executive summary (total spending, identified savings, risks)
2. Complete inventory (table with all software, licenses, costs, usage)
3. Usage analysis (metrics, status indicator by software)
4. Compliance risks (under-licensing, shadow IT, open source)
5. Prioritized optimization plan (quick wins, rationalization, transformation)
6. Savings estimate (conservative, realistic, optimistic)
7. Next steps and timeline

## Related Skills

- **it-contract-review**: License terms originate in the contract — verify alignment
- **vendor-reporting**: License metrics feed into executive dashboard and KPI tracking
- **shadow-it-governance**: Shadow IT audit reveals unlicensed or unauthorized software
- **vendor-assessment**: License optimization may trigger re-evaluation of vendor alternatives
