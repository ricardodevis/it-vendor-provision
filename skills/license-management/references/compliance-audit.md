# License Compliance Audit

## Why you'll be audited (and when)

Software vendors have contractual right to audit your license usage. It's not a theoretical possibility: it's an event that happens, especially with large vendors (Microsoft, Oracle, SAP, Adobe, IBM). Audits typically occur in three contexts: contract renewal (vendor seeks leverage to negotiate), merger or acquisition (buyer's due diligence), or detection of under-licensing (vendor suspects you use more than you pay for).

## Preparation for vendor audit

### Before the audit arrives

**Keep updated at all times:**
- [ ] Software inventory with licenses contracted vs. installed vs. in use
- [ ] Record of license reassignments with date and justification
- [ ] Evidence of uninstallations (logs, tickets, screenshots)
- [ ] Copy of all active license agreements (including amendments and renewals)
- [ ] Record of environments: production, staging, development, testing, DR
- [ ] Software acceptable use policy communicated to employees

### When audit notification arrives

**Step 1: Don't panic, don't provide access immediately**
- Review the contract: what exactly is the vendor's audit right?
- Verify: who can audit? (vendor themselves or independent third party?)
- Verify: what scope? (only their software or entire environment?)
- Verify: what notice period? (typically 30 days)
- Verify: who pays for the audit? (normally vendor, unless significant non-compliance is found)

**Step 2: Conduct your own internal audit first**
- Run your own inventory BEFORE giving the external auditor access
- Identify discrepancies and proactively correct them if possible
- Document any situation that might appear non-compliant but has justification

**Step 3: Manage the audit**
- Designate a single point of contact (don't let the auditor talk to anyone)
- Provide only contractually required information (no more)
- Document everything provided to the auditor
- Don't sign or accept anything without legal review

**Step 4: Negotiate the result**
- Auditors tend to maximize findings (their incentive aligns with vendor)
- Challenge counting metrics if they differ from yours
- Negotiate remediation: compliance forward (regularize) vs. back-billing (retroactive payment)
- Use the finding as leverage to renegotiate the overall contract

## Internal license audit

### Recommended quarterly process

**Week 1: Data collection**

| Source | Data to extract | Typical tool |
|--------|----------------|-------------------|
| ~~asset management tool | Software installed, versions, devices | CMDB/ITAM |
| ~~identity provider | Users with access to SaaS apps | SSO dashboard |
| ~~finance tool | Software invoices, active subscriptions | AP/Procurement |
| Contracts | Licenses contracted, terms, dates | ~~document repository |
| Endpoints | Software installed on devices | MDM/EDR |

**Week 2: Reconciliation**

Cross-reference sources to identify:

| Discrepancy | Risk | Action |
|-------------|--------|--------|
| Licenses paid but not assigned | Waste | Reassign or cancel at next renewal |
| Licenses assigned but unused (> 90 days) | Waste | Confirm with user, revoke if not needed |
| Software installed without license | Non-compliance | Regularize or uninstall |
| Unauthorized software (shadow IT) | Security + compliance | Evaluate, authorize, or remove |
| Terminated users with active licenses | Waste + security | Revoke immediately |
| Use in uncovered environments (e.g., dev license used in prod) | Non-compliance | Regularize |

**Week 3: Analysis and reporting**

Generate dashboard with:
- Total software spending (MRR/ARR)
- Spending by department
- Utilization rate per software
- Top 10 software by cost
- Top 10 software by underutilization
- Identified savings potential
- Active compliance risks
- Change compared to previous quarter

**Week 4: Corrective actions**

- Execute quick wins (revoke orphaned, dormant licenses)
- Escalate rationalization decisions
- Update inventory with changes
- Plan actions for next quarter

## Legal risks from non-compliance

### Consequences by non-compliance type

| Type | Typical consequence | Severity |
|------|--------------------| ---------|
| Under-licensing (more usage than licenses) | Regularization + possible retroactive penalty | High |
| Use outside terms (e.g., dev→prod) | Regularization + renegotiation | Medium-High |
| Pirated software | Legal (criminal in many jurisdictions) | Critical |
| Open source: GPL/AGPL non-compliance | Obligation to release source code | High |
| Shadow IT: unauthorized software | Security breach, GDPR non-compliance | High |
| Unauthorized license transfer | License revocation | Medium |

### Special scenario: mergers and acquisitions

In M&A, software licenses are a liability to evaluate:
- Licenses are not always transferable (verify change of control clause)
- Resulting entity may need re-licensing
- Vendor may use the event as opportunity to renegotiate (upward)
- Oracle, in particular, is known for auditing after M&A announcement

**Recommendation**: Include a software license inventory in the due diligence for any M&A.

## SAM (Software Asset Management) tools

### Required capabilities

| Capability | Basic | Advanced |
|-----------|--------|----------|
| Automatic software inventory | ✓ | ✓ |
| License vs. usage reconciliation | ✓ | ✓ |
| Over/underuse alerts | ✓ | ✓ |
| Contract management | | ✓ |
| Automatic license optimization | | ✓ |
| Procurement integration | | ✓ |
| Vendor audit reporting | | ✓ |
| SaaS management (shadow IT discovery) | | ✓ |

### Relevant vendors

No specific vendor recommendation is given (this skill is vendor-agnostic), but the tool categories to evaluate are:
- **Full ITAM/SAM**: Enterprise IT asset management tools
- **SaaS Management**: Tools specialized in SaaS discovery and management
- **License optimization**: Tools specialized for specific vendors (e.g., Oracle or Microsoft license optimization)

The choice depends on organization size, software complexity, and budget. For organizations < 500 employees, a well-maintained spreadsheet can suffice as a starting point.

## Annual license management calendar

| Month | Activity |
|-----|-----------|
| January | Annual review: complete inventory, year budget |
| February | Q1 renewal preparation |
| March | Q1 internal audit |
| April-May | Q2 renewals, renegotiations |
| June | Q2 internal audit, mid-year review |
| July-August | Next year budget preparation |
| September | Q3 internal audit, rationalization |
| October-November | Q4 renewals, next year planning |
| December | Q4 internal audit, year-end close, annual report |
