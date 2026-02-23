# DPA Checklist (Data Processing Addendum)

## Article-by-article verification (Art. 28 GDPR)

### Art. 28.1 — Processor selection
- [ ] Processor offers "sufficient guarantees" of technical and organizational measures
- [ ] Evidence: certifications (SOC 2, ISO 27001), audits, track record

### Art. 28.3 — Mandatory DPA content

| Requirement | Article | What to verify | Status |
|-----------|----------|---------------|--------|
| Documented instructions | 28.3.a | Processor only processes per written controller instructions | |
| Confidentiality | 28.3.b | Personnel subject to confidentiality obligation (contractual or legal) | |
| Security measures | 28.3.c | Technical and organizational measures per Art. 32 | |
| Sub-processors | 28.3.d | Prior authorization (general or specific) for subcontracting | |
| Data subject rights assistance | 28.3.e | Assistance to controller to fulfill data subject rights | |
| Art. 32-36 assistance | 28.3.f | Cooperation for security, breach notification, DPIAs | |
| Deletion/return | 28.3.g | Upon termination, deletion or return of data and copies | |
| Audit | 28.3.h | Information necessary to demonstrate compliance + allow audits | |

### Sub-processors (detail)

**What to verify:**
- [ ] Updated list of sub-processors and accessible
- [ ] Notification procedure for new sub-processors
- [ ] Right of objection for the controller (reasonable timeline, ≥ 30 days)
- [ ] Consequence of objection: right to terminate without penalty?
- [ ] Obligation to impose same DPA obligations on sub-processor
- [ ] Processor liability for sub-processor acts

**Red flag**: "Processor may use sub-processors upon notification to controller, and controller's silence shall not imply objection." This is general authorization without real right of objection.

### Art. 32 — Security measures

**Minimum technical measures to verify:**
- [ ] Encryption at rest (AES-256 or equivalent)
- [ ] Encryption in transit (TLS 1.2+ mandatory, 1.3 preferred)
- [ ] Multi-factor authentication (MFA)
- [ ] Role-based access control (RBAC)
- [ ] Data segregation between customers (secure multi-tenancy)
- [ ] Access logging
- [ ] Vulnerability management (patching, penetration testing)
- [ ] Backup and recovery (RPO/RTO defined)

**Minimum organizational measures:**
- [ ] Documented security policy
- [ ] Data protection training for personnel
- [ ] Security incident management
- [ ] Periodic risk assessments
- [ ] Physical access control to infrastructure

### Breach notification

**What to negotiate:**
- Notification timeline to controller: ≤ 48h (GDPR requires controller to notify authority in 72h, needs margin)
- Minimum notification content: nature of breach, data affected, measures taken, DPO contact
- Cooperation in investigation
- Assistance in notifying data subjects if needed

### International transfers

**Verify:**
- [ ] Data location: EU/EEA exclusively? With replicas in other jurisdictions?
- [ ] Transfer mechanism if outside EU:
  - SCCs (Standard Contractual Clauses) from Decision 2021/914
  - Data Privacy Framework (if US, validated by T-553/23 Latombe v. Commission)
  - Adequacy decision for destination country
- [ ] Supplementary measures (EDPB) if SCCs insufficient due to destination country legislation
- [ ] Transparency on government access requests

### End of processing

**Verify:**
- [ ] Data deletion timeline after contract termination (≤ 30 days)
- [ ] Data export format (open format, structured, machine-readable)
- [ ] Deletion certification
- [ ] Grace period for export before deletion
- [ ] Backup deletion: timeline and procedure

## Common red flags

| Problematic clause | Why it's a problem | Negotiating position |
|----------------------|----------------------|---------------------|
| DPA as modifiable web link | Provider can unilaterally change terms | DPA signed as contract annex |
| "Anonymized/aggregated data not subject to DPA" | "Anonymized" definition ambiguous; may include pseudonymization | Define "anonymized" per AEPD/EDPB standard (irreversibility) |
| General sub-processor authorization without objection | No real control over who processes your data | Right of objection with termination without penalty |
| Breach notification "without undue delay" | Too vague, could mean days or weeks | Concrete timeline: ≤ 48 hours |
| Deletion "within reasonable timeframe" | "Reasonable" is subjective | Concrete timeline: ≤ 30 days + certification |
| Audit "subject to availability and reasonable cost" | Can be practical barrier | Annual audit included, with SOC 2 report access as alternative |
