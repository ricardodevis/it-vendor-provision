# Guide to Exit Clauses and Data Portability

## Why the exit clause is the most important clause in the contract

A software contract is signed thinking it will work. The exit clause is written thinking it will not work. And precisely because of that, most providers draft it poorly (for them: well). Lock-in is not a side effect of a bad contract; it is the business model.

## Essential elements of an exit clause

### 1. Notice and timelines

| Aspect | Provider's typical position | Negotiating position |
|---------|-------------------------------|---------------------|
| Notice for non-renewal | 90 days before expiration | 60 days maximum |
| Auto-renewal | Annual, silent | Mandatory notification 30 days before renewal |
| Post-exit transition period | Not addressed | Minimum 90 days of assistance |
| Post-exit data access | 30 days | 90 days with full functionality |

**Red flag**: Auto-renewal without prior notice to customer. Provider renews silently and when customer wants to exit, they already have another year of commitment.

### 2. Data portability

**Minimum requirements:**
- [ ] Export in open, structured, machine-readable format (JSON, CSV, XML, SQL dump)
- [ ] Complete export: data, metadata, configurations, audit history
- [ ] Documented and functional export API
- [ ] No additional cost for export (or predefined cost in contract)
- [ ] Export timeline defined (≤ 30 days from request)
- [ ] Data export integrity verification

**Red flag**: "Data will be exported in the provider's proprietary format." This is not portability, it is kidnapping with ransom.

**Red flag**: "Data export will be subject to professional services costs in effect at time of request." Undefined costs = hidden exit barrier.

### 3. Export formats by data type

| Data type | Minimum acceptable format | Ideal format |
|-------------|--------------------------|---------------|
| Structured data | CSV with headers | JSON/SQL dump with relationships |
| Documents | PDF | Native format + PDF |
| Email/messaging | MBOX or EML | MBOX + JSON metadata |
| Configurations | Written documentation | Automatic export (YAML/JSON) |
| Workflows/automations | Written documentation | Portable format (BPMN, JSON) |
| Audit/logs | CSV | CSV + JSON with ISO 8601 timestamps |
| Integrations | API documentation used | Export of integration configurations |

### 4. Migration assistance

**What to require:**
- [ ] Migration plan documented and available before signature
- [ ] Technical support during migration (not just "documentation")
- [ ] Parallelism: period where both systems coexist
- [ ] Assigned technical point of contact for migration
- [ ] SLA response time during migration (more demanding than normal)
- [ ] Data migration testing and validation before cutover

**What to negotiate:**
- Cost of assistance: included in contract or predefined rate
- Duration of parallelism: minimum 30 days, ideal 60-90
- Liability for data loss during migration

### 5. Post-exit data deletion

**Requirements (aligned with GDPR Art. 28.3.g):**
- [ ] Complete data deletion within ≤ 30 days post-migration
- [ ] Backup deletion within ≤ 90 days (backup cycles need time)
- [ ] Formal deletion certification signed by provider
- [ ] Specification of deletion method (secure erase, cryptographic destruction)
- [ ] Post-exit retention only if legal requirement, identified and limited

**Red flag**: "Data will be deleted per the provider's retention policy." This can mean your data remains live months or years after exit.

### 6. Intellectual property and derived data

**Verify:**
- [ ] Customer data ownership is customer's (sounds obvious, but not always)
- [ ] Derived data (analytics, models, indexes): who owns?
- [ ] Customized configurations: exportable?
- [ ] Integrations developed on platform: portable?
- [ ] AI training data: if provider has used customer data to improve its model, what rights does customer have?

**Red flag**: "Provider may use anonymized/aggregated customer data to improve its services." Without rigorous "anonymized" definition (per EDPB standards), this is a license to use your data indefinitely.

## Early termination penalties

### Typical models and what to negotiate

| Provider model | Risk | Negotiating position |
|---------------------|--------|---------------------|
| Pay 100% of remaining period | Total lock-in | Declining penalty (50% year 1, 25% year 2, 0% year 3) |
| Pay 50% of remaining period | Partial lock-in | Maximum cap of 3-6 months of fees |
| No penalty with X months notice | Acceptable | Verify X is reasonable (≤ 3 months) |
| Penalty + data loss | Unacceptable | Reject. Penalty and portability are independent |

### Penalty-free exit clauses (always negotiate)

Customer should be able to exit without penalty if:
- [ ] Provider repeatedly breaches SLAs (define: X breaches in Y months)
- [ ] Provider suffers a security breach affecting customer data
- [ ] Provider is acquired by entity creating conflict of interest
- [ ] Provider unilaterally changes service terms
- [ ] Provider stops meeting required certifications in contract
- [ ] Regulatory change making relationship unviable (new law, sanction, etc.)
- [ ] Provider enters insolvency or equivalent proceedings

## Source code escrow

**When to require it:**
- Software critical to operations (ERP, core CRM, infrastructure)
- Small provider or uncertain viability
- Significant customization on platform

**What to include in escrow:**
- Complete, compilable source code
- Technical documentation sufficient for maintenance
- Database schema and migration scripts
- Dependencies and environment configurations
- Periodic escrow updates (each major release)

**Release conditions:**
- Provider insolvency
- Cessation of activity or product discontinuation
- Material breach not remedied of contract
- Acquisition by entity discontinuing product

## Exit negotiation checklist

### Before signing
- [ ] Is there an explicit, detailed exit clause?
- [ ] Are export formats specified?
- [ ] Is export cost predefined or included?
- [ ] Is transition period guaranteed?
- [ ] Does data deletion have timeline and certification?
- [ ] Are early termination penalties reasonable?
- [ ] Are there penalty-free exit causes?
- [ ] Is escrow contemplated if software is critical?

### During the relationship
- [ ] Have export mechanisms been tested? (do annual test export)
- [ ] Is migration documentation current?
- [ ] Is escrow (if exists) updated with each release?

### When executing exit
- [ ] Formal notification within timeline
- [ ] Data export request with specified format
- [ ] Verification of exported data integrity
- [ ] Confirmation of migration completed
- [ ] Request for deletion certification
- [ ] Archive all exit documentation
