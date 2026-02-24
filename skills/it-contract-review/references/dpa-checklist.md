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

---

## UK International Data Transfer Addendum

### UK GDPR / DPA 2018 Specifics
- [ ] UK-specific DPA exists (not just EU GDPR DPA assumed to cover UK)
- [ ] DPA references UK GDPR (retained EU law) not just EU GDPR
- [ ] ICO registered as supervisory authority (not just EU DPA)
- [ ] UK representative appointed if processor outside UK (Art. 27 UK GDPR)

### International Data Transfer Agreement (IDTA)
- [ ] IDTA executed for UK→non-adequate country transfers
- [ ] OR: EU SCCs + UK Addendum (International Data Transfer Addendum to EU SCCs) used
- [ ] Transfer Risk Assessment (TRA) completed per ICO methodology
- [ ] Supplementary measures documented if TRA identifies risks

### UK Adequacy Bridge (EU→UK)
- [ ] For EU controllers sending data to UK processors: UK adequacy decision (28 June 2021) still in force
- [ ] Adequacy decision expiry date monitored (originally June 2025, extended — verify current status)
- [ ] Contingency plan if adequacy lapses (fallback to SCCs or IDTA)

### UK-Specific Requirements
- [ ] Age Appropriate Design Code compliance if processing children's data
- [ ] ICO Accountability Framework alignment
- [ ] UK Data Protection Fee paid by processor (if applicable)

**Conditional logic**: If the vendor processes personal data of UK residents AND the vendor is outside the UK, BOTH the UK DPA specifics AND the IDTA sections apply. If vendor is UK-based processing EU data, the EU GDPR DPA (main checklist above) applies plus verify UK adequacy bridge.

---

## US Data Processing Addendum

### CCPA/CPRA Service Provider Agreement
- [ ] Vendor classified correctly: Service Provider, Contractor, or Third Party
- [ ] Written contract includes CCPA-required clauses (§1798.100(d)):
  - Business purpose for processing specified
  - Prohibition on selling/sharing personal information
  - Prohibition on retaining, using, or disclosing PI outside the business relationship
  - Obligation to comply with CCPA and provide same level of privacy protection
  - Right for business to take reasonable steps to ensure compliance
  - Notification obligation if vendor can no longer meet CCPA obligations
  - Right for business to stop and remediate unauthorized use
- [ ] Vendor certifies understanding of CCPA restrictions
- [ ] Sub-contractor flow-down: same restrictions imposed on sub-service providers
- [ ] Annual assessment or audit mechanism for compliance verification

### HIPAA Business Associate Agreement (BAA)
- [ ] BAA executed per 45 CFR §164.504(e)
- [ ] BAA specifies permitted uses and disclosures of PHI
- [ ] BAA includes required provisions:
  - Not use or disclose PHI other than as permitted
  - Use appropriate safeguards (administrative, physical, technical)
  - Report breaches of unsecured PHI to covered entity
  - Ensure sub-contractors agree to same restrictions
  - Make PHI available for individual access requests
  - Make PHI available for amendment
  - Make information available for accounting of disclosures
  - Make internal practices available to HHS for compliance determination
  - Return or destroy PHI at termination
- [ ] Breach notification timeline: without unreasonable delay, no later than 60 days
- [ ] De-identification standards specified (Safe Harbor or Expert Determination)
- [ ] Minimum necessary standard applied to disclosures

### US State Privacy Laws (Multi-State)
- [ ] Identify which state laws apply based on data subjects' residency:
  - California (CCPA/CPRA)
  - Virginia (VCDPA)
  - Colorado (CPA)
  - Connecticut (CTDPA)
  - Utah (UCPA)
  - Other states with enacted privacy laws
- [ ] Contract includes "most protective standard" clause for multi-state compliance
- [ ] Opt-out mechanisms for sale/sharing/targeted advertising supported
- [ ] Data Protection Assessment support if required by applicable state law

---

## Multi-Jurisdiction Transfer Matrix

| Transfer Route | Mechanism Required | Verify |
|---------------|-------------------|--------|
| EU → EU/EEA | No additional mechanism | DPA per Art. 28 GDPR |
| EU → UK | UK adequacy decision (verify current status) | Monitor expiry, have SCCs fallback |
| EU → US | Data Privacy Framework (DPF) OR SCCs + TIA | Vendor on DPF list? If not, SCCs + supplementary measures |
| EU → Other adequate country | Adequacy decision | Verify decision still in force |
| EU → Non-adequate country | SCCs (2021/914) + TIA + supplementary measures | EDPB Rec. 01/2020 |
| UK → UK | No additional mechanism | DPA per UK GDPR |
| UK → EU/EEA | UK adequacy for EU (mutual) | DPA per UK GDPR |
| UK → US | UK Extension to DPF OR IDTA OR EU SCCs + UK Addendum | Vendor on UK Extension DPF list? |
| UK → Other | IDTA OR EU SCCs + UK Addendum + TRA | ICO TRA methodology |
| US → US | No federal DPA law (sector-specific) | BAA if HIPAA; SPA if CCPA; state-specific |
| US → EU | Standard DPA per GDPR applies | Plus transfer mechanism back if round-trip |
| US → UK | Standard DPA per UK GDPR applies | Plus IDTA if needed |

---

## Red Flags: Multi-Jurisdiction

| Problematic Pattern | Why It's a Problem | Recommended Position |
|--------------------|--------------------|---------------------|
| Single DPA claiming to cover "all jurisdictions" | Different laws have different requirements; one-size-fits-all misses specifics | Modular DPA with jurisdiction-specific addenda |
| US vendor claiming "GDPR compliant" without DPF or SCCs | Compliance claim without legal transfer mechanism | Require DPF certification OR executed SCCs |
| "Data stored in EU" but support accessed from US/India | Storage location ≠ processing location; remote access is a transfer | Map ALL access points, not just storage |
| BAA and DPA as separate unlinked documents | Inconsistencies between HIPAA and GDPR obligations | Single integrated data protection agreement |
| "We follow SOC 2 therefore we're GDPR compliant" | SOC 2 is a controls framework, not a legal compliance mechanism | SOC 2 as evidence, not substitute for DPA |
