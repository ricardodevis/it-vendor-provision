# HIPAA Vendor Checklist

## Context: When HIPAA Applies to IT Vendors

The Health Insurance Portability and Accountability Act (HIPAA) applies to **Covered Entities** (healthcare providers, health plans, healthcare clearinghouses) and their **Business Associates (BAs)**. An IT vendor becomes a BA if it:

1. Accesses, uses, or discloses **Protected Health Information (PHI)**, AND
2. Performs functions on behalf of a Covered Entity (e.g., data storage, processing, security services)

### Common BA Relationships in IT Vendor Context

| Vendor Type | PHI Access | BA Status | Example |
|-------------|-----------|-----------|---------|
| EHR/EMR vendor | Yes (stores patient records) | Yes, BA | Epic, Cerner, Athena |
| Cloud hosting (patient data) | Yes (stores backups, archives) | Yes, BA | AWS, Azure, GCP (if storing PHI) |
| Email service (contains PHI) | Potentially (PHI in emails) | Likely BA | Exchange Online, Gmail Business if contains PHI |
| IT security consultant | Potentially (audit reports contain PHI) | Possibly BA | Penetration testing, security audit services |
| IT support/helpdesk | Potentially (access for troubleshooting) | Likely BA | Managed IT services with access to systems containing PHI |
| Analytics vendor | Yes (if processing patient-level data) | Yes, BA | Business intelligence, population health analytics |
| Billing/clearinghouse vendor | Yes (claims, patient billing) | Yes, BA | Revenue cycle, RCM vendors |
| Disaster recovery vendor | Yes (stores backups containing PHI) | Yes, BA | DR service, cloud backup |

**Red flag**: Vendor says "we don't process patient data, so HIPAA doesn't apply." If they touch systems containing PHI, they're a BA.

### HIPAA Regulatory Hierarchy

| Regulation | Scope | Requirements |
|-----------|-------|--------------|
| **Privacy Rule** (45 CFR Parts 160 & 164A) | Use and disclosure of PHI | How PHI can be used/disclosed; patient rights |
| **Security Rule** (45 CFR Parts 160 & 164C) | Safeguarding PHI | Administrative, Physical, Technical safeguards |
| **Breach Notification Rule** (45 CFR §§164.400–414) | Notification of breaches | Notification timeline, content, method |
| **HITECH Act amendments** (42 U.S.C. §1320d–9) | Enforcement and penalties | Expanded penalties, personal liability |

---

## Business Associate Agreement (BAA) — 45 CFR §164.504(e)

### Existence and Legal Requirement

- [ ] Written Business Associate Agreement exists
- [ ] BAA is signed by both Covered Entity and BA
- [ ] BAA is effective before BA accesses any PHI
- [ ] BAA is not merely a clause buried in main contract (though may be addendum)

**Red flag**: "We'll do BAA later" or "BAA is optional." It is mandatory before any PHI access.

### Required BAA Terms (45 CFR §164.504(e)(2))

**Permitted uses and disclosures:**
- [ ] BA permitted uses defined: only for purposes specified (typically services to Covered Entity)
- [ ] BA not permitted to use PHI for own purposes (e.g., marketing, quality improvement for BA's own benefit)
- [ ] Exception: BA may use PHI for healthcare operations, "provided the use is consistent with the contract"

**Confidentiality obligations:**
- [ ] Subcontractors and workforce members bound by written confidentiality or contracts
- [ ] All personnel with access to PHI must have written obligations

**Safeguards (§164.504(e)(2)(ii)(C)):**
- [ ] BA implements and maintains "reasonable and appropriate" physical, technical, administrative safeguards
- [ ] Safeguards at minimum meet Security Rule standards (45 CFR §164.308–312)

**Sub-BA management:**
- [ ] BA not permitted to use sub-BAs (sub-contractors) without prior written approval
- [ ] BA remains liable to Covered Entity for sub-BA's acts
- [ ] Sub-BA must have equivalent BAA with BA
- [ ] This creates a "BAA chain": Covered Entity → BA → Sub-BA → ...

**Data subject (patient) rights assistance:**
- [ ] BA assists Covered Entity in responding to patient access requests (§164.504(e)(2)(ii)(J))
- [ ] BA assists in amending PHI
- [ ] BA assists in accounting of disclosures

**Breach notification:**
- [ ] BA notifies Covered Entity of suspected or confirmed breach without unreasonable delay (60 days recommended)
- [ ] Notification includes: date of breach, date discovered, individuals affected, description
- [ ] BA cooperates in investigation

**Termination clause:**
- [ ] Upon termination/expiration: BA returns or destroys all PHI (Covered Entity choice)
- [ ] Destroyed PHI certified as destroyed
- [ ] BA not permitted to retain PHI after termination except as required by law

**Audit and compliance:**
- [ ] Covered Entity right to audit, inspect, and copy records/systems
- [ ] BA permitted to audit on Covered Entity's behalf only
- [ ] BA produces documentation supporting compliance

### Minimum Required BAA Language (HIPAA Model)

The BAA must explicitly state:
- [ ] "BA acknowledges that it is subject to the Privacy Rule and Security Rule"
- [ ] "BA agrees to comply with 45 CFR Parts 160 and 164"
- [ ] Permitted uses and disclosures defined specifically
- [ ] Breach notification obligations and timelines
- [ ] Data subject rights cooperation
- [ ] Termination and data destruction procedures

---

## Privacy Rule — 45 CFR Parts 160 & 164A

### Use and Disclosure of PHI

**Permitted uses:**
- [ ] Treatment (providing, coordinating, managing healthcare)
- [ ] Payment (billing, claims, remittance)
- [ ] Healthcare operations (auditing, quality improvement, accreditation, education)
- [ ] Uses required by law (court orders, subpoenas)
- [ ] Other uses with explicit patient authorization

**BA permitted uses (45 CFR §164.502(b)):**
- [ ] Uses necessary to perform functions on behalf of Covered Entity
- [ ] Uses for healthcare operations activities reasonably related to the Covered Entity's healthcare operations
- [ ] Uses to manage and operate the BA
- [ ] Uses required by law

**Red flag**: BA uses PHI for its own business purposes (e.g., analytics to improve BA's service to other clients, marketing, product development) without explicit patient consent.

### Minimum Necessary Standard (45 CFR §164.502(b)(1))

- [ ] BA discloses only the minimum PHI needed to accomplish the stated purpose
- [ ] BA requests only necessary information
- [ ] BA limits access to personnel needing PHI for stated purpose
- [ ] Vendor affirms commitment to minimum necessary principle

**Example**: A billing vendor needs patient name and account number but not the entire medical record.

### De-identification (45 CFR §164.502(b)(2))

If vendor uses de-identified data, HIPAA no longer applies to that data.

**Safe Harbor Method (45 CFR §164.514(b)(1)):**
- [ ] Remove 18 specific identifiers (names, addresses, dates, medical record numbers, etc.)
- [ ] No other information that could reasonably identify individual
- [ ] Results in Safe Harbor de-identification (mathematically assured non-identifiability)

**Expert Determination Method (45 CFR §164.514(b)(1)(i)):**
- [ ] Qualified statistician certifies:
  - Low probability of re-identification based on available data
  - No actual knowledge of re-identification risk
- [ ] Statistical methods documented
- [ ] May be more flexible than Safe Harbor

**Vendor de-identification plan:**
- [ ] If vendor de-identifies data, method documented (Safe Harbor or Expert Determination)
- [ ] Certification available (for Expert Determination)
- [ ] Remaining de-identified data no longer subject to HIPAA

---

## Security Rule — 45 CFR §164.308–312

### Applicability

The Security Rule applies to **Electronic PHI (ePHI)** in any form (digital, electronic systems, transmitted over network). The rule requires:

| Category | Requirement | CFR |
|----------|-------------|-----|
| **Administrative** | Policies, workforce security, information access management, training | §164.308 |
| **Physical** | Facility access controls, workstation security, device and media controls | §164.310 |
| **Technical** | Access control, encryption, audit controls, transmission security | §164.312 |

### Administrative Safeguards (45 CFR §164.308)

**Security Management Process:**
- [ ] Risk analysis: documented assessment of PHI risks
- [ ] Risk management: implementation of safeguards to reduce risks
- [ ] Incident response: plan to manage and mitigate breaches
- [ ] Compliance evaluation: periodic assessment of compliance

**Designated Security Officer:**
- [ ] Responsibility for implementing security safeguards clearly assigned
- [ ] Officer has appropriate access and authority

**Workforce Security:**
- [ ] Authorization: workforce members allowed access only per role
- [ ] Supervision: monitoring of workforce access and activities
- [ ] Personnel termination: procedures to disable access upon termination

**Information Access Management:**
- [ ] Access authorization to ePHI systems documented
- [ ] Role-based access control (RBAC) per job function
- [ ] Access review and modification procedures

**Security Awareness and Training:**
- [ ] Initial and periodic training on security policies
- [ ] Training covers password management, user responsibilities, reporting procedures
- [ ] Training for all workforce members, including contractors

**Security Incident Procedures:**
- [ ] Incident identification and reporting procedures
- [ ] Investigation and documentation
- [ ] Response and remediation steps documented

**Contingency Planning:**
- [ ] Data backup plan (regular, verified backups)
- [ ] Disaster recovery plan (restoration procedures, RPO/RTO defined)
- [ ] Emergency access procedures (access to systems during outages)
- [ ] Testing of backup and recovery (at least annually)

### Physical Safeguards (45 CFR §164.310)

**Facility Access Controls:**
- [ ] Visitor log or access card system
- [ ] Controlled access to areas with ePHI (locked rooms, restricted entry)
- [ ] Monitoring of physical access
- [ ] Procedures for removing access when employment ends

**Workstation Use and Workstation Security:**
- [ ] Workstations used for ePHI have physical security (locked, not visible to unauthorized)
- [ ] Workstation access requires authentication (login/password)
- [ ] Screen protectors or privacy filters (if needed)
- [ ] Automatic logoff after inactivity

**Device and Media Controls:**
- [ ] Inventory of devices with ePHI (computers, phones, USB drives)
- [ ] Disposal procedures: hard drives encrypted before disposal, proper destruction certificates
- [ ] Reuse procedures: data wiped before reuse or sale
- [ ] Movement tracking: audit trail of devices in/out of facility

### Technical Safeguards (45 CFR §164.312)

**Access Control:**
- [ ] Unique user identification: individual login (not shared accounts)
- [ ] Emergency access procedures: documented procedures for access during system outages
- [ ] Encryption and decryption: ePHI encrypted at rest and in transit
- [ ] Automatic logoff: systems log off inactive users

**Encryption and Decryption:**
- [ ] Data at rest: AES-256 or equivalent (at minimum 128-bit)
- [ ] Data in transit: TLS 1.2+ (TLS 1.3 preferred) for all network transmission
- [ ] Key management: keys securely generated, stored, rotated
- [ ] HIPAA does not mandate encryption, but it is a strong safeguard

**Audit Controls:**
- [ ] Access logs: detailed records of who accessed ePHI, when, what action
- [ ] Audit logs retained minimum 6 years
- [ ] Audit reviews: periodic analysis of logs for unauthorized access

**Integrity:**
- [ ] Mechanisms to ensure ePHI not improperly altered or destroyed
- [ ] Message authentication or checksum verification (if transmitted)
- [ ] Version control or audit trail (for amendments)

**Transmission Security:**
- [ ] Encryption in transit (TLS 1.2+)
- [ ] Virtual private network (VPN) if ePHI sent over unsecured networks
- [ ] Secure protocols (HTTPS, not HTTP)
- [ ] No transmission of unencrypted ePHI over public internet

---

## Breach Notification Rule — 45 CFR §164.400–414

### Definition of Breach (45 CFR §164.402)

A **breach** is an unauthorized acquisition, access, use, or disclosure of PHI that compromises the security or privacy of the PHI.

**Exception**: Breach does not include:
- [ ] Access by someone authorized, within scope of authorization
- [ ] Inadvertent access in good faith if not further used or disclosed
- [ ] Access by unauthorized person who cannot reasonably access the information (e.g., encrypted file)

**Red flag**: Vendor claims that loss of encrypted data is not a breach. It still is a breach; encryption is mitigation, not prevention.

### Notification Timelines (45 CFR §164.404)

**BA to Covered Entity:**
- [ ] BA discovers breach
- [ ] BA notifies Covered Entity **without unreasonable delay and in no case later than 60 calendar days** of discovery
- [ ] Notification includes: date of breach, date of discovery, nature/scope of PHI, likely impact, measures BA took/will take, mitigation recommendations

**Covered Entity to individuals:**
- [ ] Covered Entity notifies affected individuals **without unreasonable delay** (typically ≤ 30 days)
- [ ] Notice by first-class mail, email, or alternative (if individual consents)
- [ ] Notice must include: what happened, date of breach, date of discovery, what PHI was breached, what Covered Entity is doing, mitigation steps

**Covered Entity to HHS (Department of Health & Human Services):**
- [ ] Notification depends on scope:
  - Small breach (< 500): only to HHS Secretary
  - Large breach (≥ 500): to HHS + media notification + HHS posts on OCR breach portal
- [ ] Notification without unreasonable delay, no later than 60 calendar days of discovery

### Breach Notification Content (45 CFR §164.404(b))

- [ ] Identification of PHI breached (categories, rough numbers if not identifiable)
- [ ] Date of breach
- [ ] Date discovered
- [ ] Steps individuals should take to protect themselves
- [ ] Steps Covered Entity took and will take
- [ ] Covered Entity contact information
- [ ] What Covered Entity is doing to investigate, prevent, and mitigate

### Vendor's Breach Notification Obligation

**BA responsibilities:**
- [ ] Immediate internal notification (discovery, confirmation)
- [ ] Written notification to Covered Entity ≤ 60 days of discovery
- [ ] All details above included
- [ ] Cooperation in investigation
- [ ] Cooperation in notification to individuals and HHS
- [ ] Cooperation in forensics and breach report

**Red flag**: "We'll notify you if we're sure it's a breach." Notification must occur even if breach suspected but not yet confirmed.

---

## HITECH Act Amendments — 42 U.S.C. §1320d–9

### Enhanced Penalties

The HITECH Act (Health Information Technology for Economic and Clinical Health Act) increased HIPAA penalties and expanded liability.

| Violation Category | Per-Violation Penalty | Annual Maximum |
|------|--------|---------|
| Unknowing violations | $100–$50,000 | $1.5 million |
| Reasonable cause (not willful neglect) | $1,000–$100,000 | $1.5 million |
| Willful neglect (not timely corrected) | $10,000–$1,000,000 | $1.5 million |
| Willful neglect (corrected within 30 days) | $100,000–$1,000,000 | $1.5 million |

**Note**: HHS Office for Civil Rights (OCR) has discretion in penalty amounts based on factors such as:
- Nature and extent of violation
- Circumstances of violation
- Presence of safeguards
- Cooperation with OCR
- Financial resources

### Personal Liability

- [ ] Directors, officers, managers can face personal liability
- [ ] Criminal penalties: fines up to $250,000 and/or imprisonment up to 10 years (knowing PHI disclosure)
- [ ] Organizational liability does not shield individuals

---

## Sub-Contractor/Sub-BA Requirements

### Sub-BA Chain

If a BA uses sub-BAs (contractors, third parties), a contractual chain must exist:

```
Covered Entity (main customer)
         ↓ (with BAA)
      BA (vendor)
         ↓ (with BAA)
     Sub-BA (vendor's vendor)
         ↓ (with BAA)
   Sub-Sub-BA (if applicable)
```

**Verification checklist:**
- [ ] BA obtained written approval from Covered Entity before engaging sub-BA
- [ ] BA has signed BAA with each sub-BA (equivalent to BA's BAA)
- [ ] BA flows down same HIPAA obligations to sub-BA
- [ ] BA remains liable to Covered Entity for sub-BA's performance
- [ ] Covered Entity has right to audit or approve sub-BAs
- [ ] Sub-BA list available to Covered Entity

### Common Sub-BA Scenarios

| Main BA | Sub-BA | Example |
|---------|--------|---------|
| EHR vendor | Cloud hosting provider | EHR → AWS for backup storage |
| IT service provider | Disaster recovery vendor | Managed IT → Cloud backup provider |
| Telehealth platform | Video conferencing vendor | Telehealth app → Zoom for video (if PHI in video) |
| Analytics vendor | Report generation vendor | Population health → Business intelligence tool |

---

## Accountability and Documentation

### Records Retention (45 CFR §164.316(b))

- [ ] Policies and procedures documented and available
- [ ] Records of compliance maintained
- [ ] Records retained minimum **6 years**
- [ ] Records immediately accessible or retrievable within reasonable time
- [ ] Records available for HHS/OCR inspection

### Covered Entity's Right to Audit

- [ ] BA agrees to provide documentation and access to auditors
- [ ] Covered Entity may audit or have third-party audit
- [ ] Audit may include on-site inspection, system testing, record review
- [ ] BA provides cooperation and timely responses

---

## OCR Enforcement

### HHS Office for Civil Rights (OCR)

OCR enforces HIPAA through:
- Complaints (individuals, competitors, media reporting)
- Routine audits (risk-based; more aggressive toward large organizations)
- Investigations (breach notifications, audit findings)

### OCR Penalty Factors

OCR considers:
- Nature and extent of violation
- Corrective steps taken
- Good faith compliance efforts
- Financial resources of organization
- Cooperation with OCR

**Red flag**: Vendors with history of OCR enforcement actions, penalties, or settlements.

---

## Checklist by CFR Section

### BAA and Legal (45 CFR §164.504(e))

- [ ] Signed BAA exists (not pending, not electronic link)
- [ ] BAA defines permitted uses (treatment, payment, operations, or specific purpose)
- [ ] BAA includes breach notification clause (≤ 60 days)
- [ ] BAA includes termination clause (return/destroy PHI)
- [ ] BAA includes audit rights
- [ ] BAA includes subcontractor authorization requirement
- [ ] BAA includes confidentiality clause for workforce

### Privacy Rule (45 CFR §164.502–520)

- [ ] Minimum necessary standard documented
- [ ] De-identification method (if applicable): Safe Harbor or Expert Determination
- [ ] Uses limited to purpose stated in contract
- [ ] Disclosures only to Covered Entity or authorized recipients
- [ ] Access controls ensure only authorized personnel see PHI
- [ ] Patient access request procedures in place

### Security Rule — Administrative (45 CFR §164.308)

- [ ] Risk analysis performed and documented
- [ ] Risk management plan identifying safeguards
- [ ] Security officer designated
- [ ] Workforce security: authorization, supervision, termination procedures documented
- [ ] Access management: role-based access control documented
- [ ] Security awareness training: initial and periodic training documented
- [ ] Incident response plan documented
- [ ] Contingency planning: backup, disaster recovery, testing

### Security Rule — Physical (45 CFR §164.310)

- [ ] Facility access controls: visitor log, locked areas, monitoring
- [ ] Workstations secured: locks, authentication, screen privacy
- [ ] Device inventory maintained
- [ ] Device disposal procedures: wiping, destruction certification
- [ ] Workstation use policy documented

### Security Rule — Technical (45 CFR §164.312)

- [ ] Unique user identification: individual login, no shared accounts
- [ ] Emergency access procedures documented
- [ ] Encryption at rest: AES-256 minimum
- [ ] Encryption in transit: TLS 1.2+
- [ ] Key management: secure generation, storage, rotation
- [ ] Audit logging: detailed, retained 6+ years
- [ ] Audit log review procedures in place
- [ ] Integrity controls (message authentication, checksums)
- [ ] Secure transmission protocols (HTTPS, VPN)

### Breach Notification (45 CFR §164.400–414)

- [ ] Breach discovery process documented
- [ ] BA notification to Covered Entity ≤ 60 days
- [ ] Breach notification contents include all required elements
- [ ] Cooperation with investigation and forensics
- [ ] Cooperation in notification to individuals and HHS
- [ ] Breach log maintained (if required by organization)

### HITECH Amendments (42 U.S.C. §1320d–9)

- [ ] Awareness of enhanced penalties (up to $1.5M annually)
- [ ] Awareness of personal liability (directors, officers)
- [ ] Compliance culture (training, monitoring, incident response)

---

## Red Flags in Vendor Evaluation

🚩 **Legal/Contract red flags:**
- No BAA or BAA not signed before PHI access
- BAA is generic, not customized for vendor's actual uses
- Vendor reserves right to use PHI for own purposes (product improvement, analytics, marketing)
- No termination clause or unclear data destruction procedure
- Subcontractors not subject to BAA chain

🚩 **Security red flags:**
- No documented risk analysis or security policy
- No incident response plan or contact for breach notification
- Claims "HIPAA compliance" without SOC 2 Type II or security audit
- No encryption at rest or in transit
- Shared credentials or no multi-factor authentication
- No audit logging or logs not retained 6+ years
- Facility access uncontrolled (no visitor log, unlocked doors)
- Device inventory not maintained

🚩 **Privacy red flags:**
- Vendor cannot explain or enforce minimum necessary
- De-identification not verifiable or vendor claims data is de-identified without method documentation
- Vendor uses ePHI for own business purposes beyond providing services
- No documented privacy incident response

🚩 **Oversight and accountability red flags:**
- No cooperation with Covered Entity audits
- Records not accessible or retention period unclear
- No evidence of security training or awareness
- History of OCR enforcement actions or breach notifications

---

## Acceptable Evidence of HIPAA Compliance

| HIPAA Requirement | Vendor Evidence |
|------|----------|
| BAA | Signed, customized BAA (not generic template) with all required clauses |
| Risk Analysis | Risk assessment report (can be summarized for Covered Entity) |
| Security Policy | Information security policy document, signed by management |
| Incident Response | IR plan with notification timeline (≤ 60 days to Covered Entity) |
| Encryption | Technical documentation showing AES-256 at rest, TLS 1.2+ in transit |
| Access Control | RBAC policy, multi-factor authentication documentation, user provisioning/deprovisioning process |
| Audit Logging | Audit logging enabled, retention policy (minimum 6 years), sample logs |
| Backup and DR | Backup schedule + restoration testing documentation, disaster recovery plan with RPO/RTO |
| Training | Training materials and attendance records, periodic refresher schedule |
| Sub-BA Management | Sub-BA list with functions, evidence of sub-BA BAAs |
| Breach Notification | Template breach notification to Covered Entity ≤ 60 days, incident response evidence |
| SOC 2 Type II | SOC 2 Type II audit report scoped to ePHI safeguards (security, availability, confidentiality) |
| Certification | HIPAA certification letter from vendor (not required but shows commitment) |

---

## Practical Vendor Onboarding for HIPAA

**Before signing contract:**
1. Determine if vendor is a BA (accesses/uses PHI)
2. If BA: Request and negotiate BAA
3. Review BAA: ensure all mandatory clauses (45 CFR §164.504(e)(2))

**Before going live (PHI access):**
4. Verify BAA signed and effective-dated
5. Request security evidence: SOC 2 Type II, security policy, risk analysis summary
6. Verify breach notification clause: ≤ 60 days
7. Request sub-BA list and verify sub-BA BAAs

**After go-live:**
8. Provide privacy and security training
9. Conduct initial audit or security questionnaire
10. Establish breach notification procedure
11. Schedule periodic (annual) compliance review

---

## HIPAA vs. HITECH vs. State Laws

| Regulation | Scope | Penalties | Notes |
|----------|-------|----------|-------|
| HIPAA | Federal standard (minimum) | Up to $1.5M/year | Applies to all BAs |
| HITECH | Amendments to HIPAA | Enhanced (up to $1.5M/year) | Applies to BAs; personal liability |
| State breach notification laws | State-specific notification | Varies (sometimes stricter) | Some states (e.g., California CCPA/CPRA) impose stricter requirements |

**Practical**: Even if HIPAA vendor, check state laws where Covered Entity operates or patients reside. Some states require notification even if breach unlikely, or require notification of state attorney general.

---

## Timeline and Key Dates

| Date | Event | Impact on Vendors |
|------|-------|------------------|
| 1996 | HIPAA enacted | Original framework |
| 2005 | HIPAA Security Rule effective | Technical safeguards required |
| 2009 | HITECH Act effective | Enhanced enforcement, personal liability |
| 2013 | Omnibus Rule effective | Subcontractor liability, stricter penalties |
| Ongoing | OCR guidance and enforcement | Vendors must follow latest OCR interpretations |

---

## Final Compliance Summary for Vendor Teams

**For any HIPAA BA vendor, mandatory elements:**

1. **Signed BAA** with Covered Entity (not optional; effective before PHI access)
2. **Risk analysis** and documented safeguards
3. **Encryption** (at rest: AES-256, in transit: TLS 1.2+)
4. **Unique user identification** (no shared accounts)
5. **Audit logging** (retained 6+ years)
6. **Breach notification** (≤ 60 days to Covered Entity)
7. **Workforce training** (initial and periodic)
8. **Subcontractor BAA chain** (if sub-BAs used)
9. **Backup and disaster recovery** (tested annually)
10. **Access controls** (RBAC, MFA for admin)

**Failure on any of these exposes both Covered Entity and BA to OCR enforcement, penalties up to $1.5M/year, and personal liability.**
