---
name: contract-lifecycle
description: >
  IT vendor contract lifecycle management: renewals, amendments, versioning,
  expiration alerts, vendor incident management and regulatory change tracking.
  Activate when the user requests "renew contract", "amendment", "contract modification",
  "contract expiration", "renewal calendar", "vendor had a breach", "vendor incident",
  "SLA downtime", "contract non-compliance", "regulatory change affecting vendors",
  "contract history", "contract versioning", "contract management", "vendor relationship management",
  "contract expiry", "vendor governance", "contract administration", or any variant
  of ongoing administration of IT vendor contracts.
version: 0.1.0
---

# Contract Lifecycle Management

Guide for ongoing administration of IT vendor contracts, from signature through termination, including renewals, modifications, incidents, and regulatory adaptation.

## Philosophy

A signed contract is not a managed contract. Most companies sign software contracts, file them away, and rediscover them when something breaks or when renewal arrives with a 40% price hike. Contract management is not an administrative act: it is a governance function that protects your enterprise from unnecessary costs, hidden risks, and uncontrolled dependencies.

## IT contract lifecycle

### Phases

```
NEGOTIATION → SIGNATURE → OPERATION → PERIODIC REVIEW → RENEWAL/EXIT
                              ↑                                |
                              |_____ AMENDMENT / INCIDENT _____|
```

### 1. Contract registration and onboarding

**Upon contract signature, record:**

| Field | Description | Example |
|-------|------------|---------|
| Contract ID | Unique identifier | VENDOR-2026-001 |
| Vendor | Full legal name | Acme Software S.L. |
| Software/service | What is being contracted | CRM Cloud Enterprise |
| Contract type | SaaS, perpetual license, services | Subscription SaaS |
| Signature date | Effective date | 2026-03-01 |
| Start date | Service commencement | 2026-04-01 |
| Expiration date | Period end | 2027-03-31 |
| Auto-renewal | Yes/No, with how much notice | Yes, 60 days prior |
| Notice deadline | Deadline to decide | 2027-01-30 |
| Annual value | Recurring cost | 48,000€/year |
| Internal owner | Who manages the relationship | CTO / IT Manager |
| Contract location | Where it is filed | ~~document repository |
| DPA signed | Yes/No | Yes, attached to contract |
| SLA agreed | Summary of key SLAs | 99.9% uptime, 4h P1 |
| Criticality | High/Medium/Low | High |
| Initial assessment | Result of vendor-assessment | APPROVED |

**Archive in ~~document repository:**
- Signed contract (PDF)
- Signed DPA
- Appendices (SLA, subprocessor list, etc.)
- Original commercial proposal (for renegotiation reference)
- Initial assessment scorecard

### 2. Operation and continuous monitoring

**Monthly review (automated where possible):**
- [ ] Verify SLA compliance (data from ~~monitoring tool)
- [ ] Review month's tickets/incidents (data from ~~ticketing system)
- [ ] Verify uptime reported by vendor vs. measured internally
- [ ] Document any relevant issues

**Quarterly review (with vendor):**
- [ ] Review meeting with vendor's account manager
- [ ] Review cumulative SLA metrics
- [ ] Review product roadmap (any changes affecting us?)
- [ ] Review subprocessor list (any changes?)
- [ ] Assess internal satisfaction (quick survey with key users)
- [ ] Document in meeting minutes and file in ~~document repository

**Semi-annual review (compliance):**
- [ ] Verify vendor certification validity (SOC 2, ISO 27001)
- [ ] Review regulatory changes affecting the relationship
- [ ] Update vendor risk register
- [ ] Verify updated subprocessor list

### 3. Renewal management

**Alert calendar:**

| Timing | Action | Owner |
|--------|--------|-------|
| -180 days | Initiate renewal vs. exit evaluation | Internal owner |
| -120 days | If exit: activate migration plan | IT + Legal |
| -90 days | If renewal: prepare renegotiation position | Procurement + Legal |
| -60 days | Negotiate renewal terms | Procurement |
| -30 days | Sign renewal or confirm exit | Executive board |
| Day 0 | Renewal effective or contract ends | Admin |

**Renewal checklist:**
- [ ] Does the software still meet requirements? (evaluate with users)
- [ ] Have there been serious incidents during the period?
- [ ] Does the vendor consistently meet SLAs?
- [ ] Are there better alternatives on the market? (quick evaluation)
- [ ] Is the proposed price increase reasonable? (verify contract cap)
- [ ] Are there regulatory changes requiring new clauses?
- [ ] Does the DPA need updating?
- [ ] Are exit terms still acceptable?

**Renegotiation strategy:**

| Lever | How to use it |
|-------|-------------|
| Competition | Have at least 1 alternative evaluated (even superficially) |
| Volume | If usage has grown, negotiate better unit pricing |
| Commitment | Offer multi-year in exchange for better price and increment cap |
| Bundling | If you use multiple vendor products, negotiate package deal |
| Timing | Negotiate at end of vendor's quarter/fiscal year |
| Documented dissatisfaction | If there have been incidents, use them as leverage |
| Accumulated penalties | If vendor owes credits for SLA failures, claim them |

### 4. Amendment management

**When an amendment is necessary:**
- Change in service scope (more modules, more users, more storage)
- Change in economic conditions (discount, pricing model change)
- Change in SLAs
- Change in subprocessor list (if specific consent is required)
- Regulatory change requiring new clauses
- Change in vendor ownership (M&A)

**Amendment process:**

1. Document the need for change and its justification
2. Verify the contract allows the proposed amendment type
3. Draft amendment referencing the original contract
4. Legal review (use skill `it-contract-review` for new clauses)
5. Negotiate with vendor
6. Sign
7. File with original contract in ~~document repository
8. Update contract registry with new terms

**Versioning:**
- Each amendment increments version: v1.0 (original), v1.1 (amendment 1), v1.2 (amendment 2)
- Maintain version control table in contract registry
- Never delete earlier versions; archive everything

### 5. Vendor incident management

See `references/vendor-incident-protocol.md` for detailed protocol.

**Incident types:**

| Type | Severity | Example |
|------|-----------|---------|
| Security breach | Critical | Vendor suffers data breach affecting customer data |
| Serious SLA breach | High | Downtime > 24h or data loss |
| Minor SLA breach | Medium | Quarterly uptime < target but no critical impact |
| Unilateral terms change | High | Vendor modifies ToS or raises price outside contract |
| Loss of certification | High | Vendor loses SOC 2 or ISO 27001 |
| Acquisition/control change | Medium-High | Vendor acquired by competitor or fund |
| Insolvency | Critical | Vendor enters bankruptcy/liquidation |
| Regulatory non-compliance | High | Vendor breaches GDPR, NIS2 or AI Regulation |

### 6. Regulatory change tracking

**Sources to monitor:**
- AEPD (Spain): new guidelines, resolutions, relevant sanctions
- EDPB (Europe): guidelines, opinions, recommendations
- ENISA (NIS2): reports, technical guides
- AI Office (AI Regulation): codes of practice, implementation guides
- Sector regulators: CNMC, Bank of Spain, CNMV (by sector)

**Process for regulatory change:**
1. Identify the change and its impact on vendor relationships
2. Evaluate which contracts are affected
3. Determine if amendment or renegotiation is necessary
4. Prioritize by criticality and application date
5. Communicate with vendor and negotiate adaptation
6. Update compliance checklists in the plugin

### 7. Contract termination

**Exit checklist** (supplements `it-contract-review/references/exit-clauses.md`):

- [ ] Formal notice within contractual timeframe
- [ ] Activate migration plan (defined previously)
- [ ] Request data export in agreed format
- [ ] Verify exported data integrity
- [ ] Confirm migration complete to new system
- [ ] Request data deletion certification (GDPR art. 28.3.g)
- [ ] Close vendor access to internal systems
- [ ] Archive all contract documentation (including exit minutes)
- [ ] Update vendor registry
- [ ] Post-mortem: document lessons learned

## Output

Generate the requested document in Markdown per context:
- **Contract registry**: Complete contract record with all fields
- **Renewal report**: Renewal vs. exit analysis with recommendation
- **Amendment**: Amendment document referencing original contract
- **Incident report**: Response protocol with actions and timelines
- **Expiration alert**: Summary of contracts nearing expiration with pending actions

## Related Skills

- **it-contract-review**: New contracts and amendments require formal review
- **vendor-reporting**: Lifecycle events (renewals, incidents, amendments) feed into reporting
- **risk-compliance**: Regulatory changes may require contract amendments
- **vendor-onboarding**: Contract signing triggers onboarding process
- **license-management**: Renewal negotiations should incorporate license usage data
