# UK GDPR + Data Protection Act 2018 Vendor Checklist

## Context: UK Data Protection Regime Post-Brexit

The UK retained the EU GDPR into domestic law as the **UK GDPR** (effective 1 January 2020 under the Data Protection (Withdrawal) Act 2018). The **Data Protection Act 2018 (DPA 2018)** provides supplementary provisions specific to the UK. Key points:

### Key Divergences from EU GDPR

| Area | EU GDPR | UK GDPR | UK DPA 2018 |
|------|---------|---------|------------|
| Age of digital consent | 16 (default) | 13 (default) | DPA 2018 Sched. 1, para 2 |
| Lawful basis (nationality data) | Personal data | May be limited (immigration exemption) | Sched. 2, para 2 (nationality, legal status) |
| Journalists' exemption | Art. 85 | Art. 85(UK) | DPA 2018 Sched. 2, part 2 |
| DPO requirement | Mandatory for public authorities, data-intensive | Not mandatory for all; context-dependent | DPA 2018 Sched. 1, para 5 |
| ICO enforcement | EDPB coordination | ICO sole authority (no EDPB) | DPA 2018 Part 6 |
| Maximum penalties | Up to €20M or 4% turnover | Up to £17.5M or 4% turnover | DPA 2018 s.155 |

### International Data Transfers Post-Brexit

Post-Brexit, UK organizations cannot rely on GDPR adequacy for UK organisations receiving data from the EU (adequacy was mutual within GDPR). Use:

| Mechanism | Status | Requirements |
|-----------|--------|--------------|
| **UK Extension to EU SCCs (Addendum)** | Valid | UK addendum to EU SCCs (2021/914), executed by both parties |
| **International Data Transfer Agreement (IDTA)** | Valid (UK alternative) | UK-specific transfer mechanism under UK GDPR Part 2, Ch. 5 |
| **UK Adequacy Bridge** | Temporary (extended to 2026) | Temporary recognition of EU adequacy decision; monitor for updates |
| **Adequacy (incoming)** | Limited | Several countries adequate for UK: Switzerland, Canada, Japan, others verified by ICO |

**Red flag**: Vendor claims EU SCCs alone are sufficient for transfers from EU to UK. The UK addendum or IDTA is required.

### ICO Authority and Accountability

The Information Commissioner's Office (ICO) is the UK independent regulator. Key expectations:

- **Accountability framework** (DPA 2018 Sched. 1, para 1): Organizations must demonstrate compliance, not just assert it.
- **Data Protection Impact Assessment (DPIA)** equivalent to Art. 35 GDPR.
- **Record of Processing Activities** (Art. 30 GDPR) mandatory for all processors.
- **Breach notification** to ICO within 72 hours (Art. 33 GDPR) and data subjects without undue delay.

## Checklist by UK GDPR Article and DPA 2018 Section

### Art. 5 — Lawfulness, Fairness, Transparency

**Vendor obligations:**
- [ ] Processing only per written instructions from data controller
- [ ] Data controller has documented lawful basis (not vendor's responsibility, but vendor should not contradict it)
- [ ] Privacy notice accessible to data subjects (vendor may assist in providing)
- [ ] Purpose limitation: no repurposing data for vendor's own benefit

**DPA 2018 exemptions to verify:**
- [ ] Immigration exemption does not apply (data is not immigration-related nationality/legal status) OR exemption is properly documented
- [ ] Journalism exemption does not apply (DPA 2018 Sched. 2, part 2) OR exemption is justified

---

### Art. 6 — Lawful Basis for Processing

**Verify vendor's awareness:**
- [ ] Vendor understands data controller's lawful basis (consent, contract, legal obligation, vital interest, public task, legitimate interest)
- [ ] Processing in data controller's instructions aligns with stated lawful basis
- [ ] Vendor does not independently apply alternative lawful basis to same data

---

### Art. 13/14 — Transparency and Privacy Information

**Vendor's role:**
- [ ] Vendor provides data controller with technical information to populate privacy notices
- [ ] Vendor assists in communicating special category processing (Art. 9) if applicable
- [ ] Children's data (under 13): vendor aware of enhanced transparency obligations

**Children's Code (Age Appropriate Design Code)** — ICO guidance:
- [ ] Service is not directed at children, OR
- [ ] If directed at children: age assurance mechanism implemented, consent from parental consent mechanism, data minimization for children
- [ ] Accessibility reviewed per Age Appropriate Design Code

---

### Art. 28 — Data Processor Contract (UK GDPR equivalent)

**Contract requirement:**
- [ ] Signed Data Processing Agreement (DPA) exists
- [ ] DPA is addendum to main contract (not a website link)
- [ ] DPA clearly identifies data controller, data processor, and subject matter

**Mandatory DPA content (Art. 28.3 UK GDPR):**
- [ ] Processes only per documented instructions from data controller (28.3.a)
- [ ] Personnel confidentiality-bound (28.3.b)
- [ ] Technical and organizational security measures (Art. 32) in place (28.3.c)
- [ ] Sub-processor regime with written authorization (28.3.d)
- [ ] Cooperation on data subject rights (access, rectification, erasure, restriction, portability, objection) (28.3.e)
- [ ] Assistance with security measures, breach notification, and investigation (28.3.f)
- [ ] Deletion or secure return of data upon termination (28.3.g)
- [ ] Audit and information rights (28.3.h)

---

### Art. 32 — Security of Processing

**Technical safeguards:**
- [ ] Encryption at rest: AES-256 or equivalent
- [ ] Encryption in transit: TLS 1.2+ (TLS 1.3 preferred)
- [ ] Pseudonymization where feasible
- [ ] Availability and ability to restore after incidents

**Organizational safeguards:**
- [ ] Information security policy documented
- [ ] Personnel security: screening, confidentiality clauses, training
- [ ] Access control: MFA for administrative access, RBAC, least privilege
- [ ] Audit logging: who accessed what, when
- [ ] Periodic evaluation of measure effectiveness

**Acceptable evidence:**
- SOC 2 Type II report (covers most Art. 32 controls)
- ISO 27001 certification scoped to the service
- Completed security questionnaire (e.g., CAIQ, Secure by Design assessment by ICO)
- Penetration test report (< 12 months old)

---

### Art. 33 — Breach Notification

**Vendor's notification obligations:**
- [ ] Notifies data controller without undue delay, ideally ≤ 48 hours
- [ ] Includes nature, scope, categories, likely consequences, measures taken/proposed
- [ ] Cooperates fully in data controller's notification to ICO

**Red flag**: "Without undue delay" without a concrete SLA. Clarify: What is the maximum hours?

---

### Art. 34 — Data Subject Notification

**Vendor's assistance:**
- [ ] Cooperates in notifying data subjects if required (high risk cases)
- [ ] Provides data controller with necessary contact information
- [ ] If breach affects many subjects, advises on alternative notification (e.g., website, media)

---

### Art. 35 — Data Protection Impact Assessment (DPIA)

**Vendor's duty to cooperate:**
- [ ] Provides technical, organizational, and processing details to data controller for DPIA
- [ ] Identifies risks and mitigation measures
- [ ] Cooperates with prior consultation to ICO if high-risk processing

**When DPIA is necessary:**
- Large-scale processing of special categories (Art. 9)
- Systematic monitoring or evaluation (profiling, scoring)
- Use of new technologies (AI, biometrics, large-scale IoT)
- Data on ICO's published list

---

### Art. 37 — Data Protection Officer (DPO)

**Vendor's DPO status:**
- [ ] Does vendor have a designated DPO?
- [ ] Is DPO contact information accessible and published?
- [ ] Is DPO independent (not managing other IT functions)?

**Note**: Not all vendors are required to have a DPO, but large-scale or data-intensive vendors should designate one.

---

### Chapter V (UK GDPR) — International Transfers

**Data location and transfer mechanisms:**

**Where is data stored and processed?**
- [ ] All data stored in UK, OR
- [ ] Data stored in country with UK adequacy decision (EU, Switzerland, Canada, Japan, etc.), OR
- [ ] Data transfers use UK Extension to EU SCCs (Addendum), OR
- [ ] Data transfers use IDTA (International Data Transfer Agreement)

**If transferring from EU to UK:**
- [ ] EU exporter and UK importer have executed UK Addendum to SCCs, OR
- [ ] IDTA is in place
- [ ] Monitor: Adequacy Bridge extension (currently valid, extended to 2026; monitor for changes)

**Supplementary measures for higher-risk transfers:**
- [ ] Transfer Impact Assessment (TIA) completed
- [ ] End-to-end encryption (vendor cannot access keys)
- [ ] Pseudonymization before transfer
- [ ] Transparency regarding government access requests (UK government legal powers)

**Red flag**: "Data stays in EU" when vendor subsidiary is in UK or vendor transfers to UK processors without proper mechanisms.

---

### DPA 2018 — Schedule 1: General Conditions

**Accountability and Demonstration:**
- [ ] Organization maintains records showing compliance (Art. 5.2 principle of accountability)
- [ ] Records available to ICO upon request

**Lawful Basis and Exemptions:**
- [ ] Immigration exemption properly applied (if applicable): only for immigration/national security context
- [ ] Journalism exemption properly applied (if applicable): DPA 2018 Sched. 2, part 2
- [ ] Public task exemption clearly defined (if claimed)

---

### DPA 2018 — Schedule 2: Data Subject Rights and Exemptions

**Data Subject Rights:**
- [ ] Vendor can facilitate or execute: access (S3), rectification, erasure, restriction, portability, objection
- [ ] Right to object to automated decision-making (if applicable)
- [ ] Right to court remedy if breached

**Journalism Exemption (Sched. 2, Part 2):**
- [ ] If data processing is for journalism purposes, exemption may apply
- [ ] Exemption must be proportionate to public interest in journalism
- [ ] Verify data controller claims journalism exemption legitimately

---

### DPA 2018 — Part 6: Enforcement and Penalties

**ICO Powers:**
- [ ] Awareness of ICO's right to conduct audits and investigations
- [ ] Awareness of ICO's powers to issue Enforcement Notices and Penalty Notices

**Maximum Penalties (DPA 2018 s.155):**
- Up to £17.5 million or 4% of annual global turnover (whichever is greater) for serious infringements
- Up to £8.75 million or 2% turnover for other infringements

**Personal Liability:**
- Senior managers (DPA 2018 s.173): criminal liability for failures if proven knowingly or recklessly

---

## Sub-Processors and Supply Chain

- [ ] List of sub-processors published and accessible
- [ ] Location and function of each sub-processor clearly identified
- [ ] Sub-processors are subject to equivalent UK GDPR and DPA 2018 obligations
- [ ] Vendor liable to data controller for sub-processor's acts
- [ ] Data controller has right to object to sub-processor changes (≥ 30 days notice)
- [ ] Contract termination without penalty if data controller objects

---

## Record of Processing Activities (Art. 30)

Vendor (as data processor) must maintain and provide:
- [ ] Name and contact of processor and controller
- [ ] Categories of processing per controller
- [ ] Countries where processing occurs or data is transferred
- [ ] General description of security measures (Art. 32)
- [ ] Deletion/return procedures

---

## Incident Response and Investigations

- [ ] Incident response plan documented and tested annually
- [ ] Timeline for breaches: notification to data controller ≤ 48h, ICO notification ≤ 72h
- [ ] Investigation cooperation: vendor provides forensic data, access logs, witness statements
- [ ] Communication plan: who in vendor team communicates with data controller
- [ ] Post-incident review and lessons learned documented

---

## Transfer Mechanisms Summary Table

| Mechanism | UK To/From | Status | Validity | Action Required |
|-----------|-----------|--------|---------|-----------------|
| UK adequacy decision (EU, CH, CA, JP, etc.) | To these countries | Valid | Ongoing (monitor) | List with vendor |
| EU SCCs + UK Addendum | UK ↔ EU transfers | Valid | Indefinite | Execute addendum with EU partner |
| IDTA | UK → Third countries | Valid | Indefinite | Parties sign IDTA |
| Adequacy Bridge (EU) | UK ← EU | Temporary | Extended to 2026 | Monitor for non-renewal |
| Standard Contractual Clauses alone (pre-Brexit) | N/A | **Invalid** | N/A | Replace with Addendum or IDTA |

---

## Red Flags and Concerns

🚩 **Contract red flags:**
- DPA is a website link rather than a signed addendum
- DPA lacks specific instruction mechanism or audit rights
- Vendor reserves right to use data for "service improvement" or "analytics" independently
- Sub-processor list not published or opaque

🚩 **Transfer mechanism red flags:**
- Vendor claims "EU adequacy works for UK" post-Brexit
- International transfers lack documented transfer mechanism (SCCs addendum or IDTA)
- Vendor stores data in non-adequate countries without transfer agreements
- No supplementary measures for high-risk transfers (e.g., no encryption vendor cannot access)

🚩 **Security and incident red flags:**
- No SLA for breach notification; claims "without undue delay" without timeline
- No incident response plan or testing
- No documentation of security measures
- No personnel security or confidentiality obligations
- Access logs not retained or not auditable

🚩 **Governance red flags:**
- No information security policy
- No evidence of training or awareness
- No DPO or security officer identified (in large vendors)
- No audit rights or inspection clauses

---

## Acceptable Evidence of Compliance

| UK GDPR/DPA 2018 Requirement | Vendor Evidence |
|-----|----------|
| Data Processing Agreement (Art. 28) | Signed DPA addendum, countersigned by both parties |
| Security Measures (Art. 32) | SOC 2 Type II, ISO 27001, penetration test report, SIG CAIQ |
| Breach Notification (Art. 33) | Incident response plan + example breach notification (redacted) |
| Audit Rights (Art. 28.3.h) | DPA explicitly grants audit and inspection rights |
| Sub-processor Management | Published sub-processor list with locations and functions |
| Transfer Mechanisms (Ch. V) | Executed EU SCC Addendum or IDTA for international transfers |
| Data Subject Rights Assistance (Art. 28.3.e) | Technical documentation of data export, deletion, rectification workflows |
| Personnel Confidentiality (Art. 28.3.b) | Vendor provides redacted confidentiality agreement or training certificate |
| Deletion/Return (Art. 28.3.g) | Data destruction certificate or return confirmation for test data |
| Record of Activities (Art. 30) | Vendor's record of activities matching contract scope |
| Incident Response (Art. 33) | IR plan document + evidence of annual testing |
| Children's Code (if applicable) | Age verification documentation or consent mechanism |
| DPO (if applicable) | DPO contact information and independence statement |

---

## Timeline of UK Data Protection Evolution

| Date | Event | Impact |
|------|-------|--------|
| 1 Jan 2020 | UK GDPR and DPA 2018 effective | GDPR retained into UK law post-Brexit |
| 19 Feb 2020 | UK Adequacy Bridge (EU adequacy) effective | Temporary mutual recognition, extended multiple times |
| 2021 | EU SCCs (2021/914) finalized | UK Addendum published shortly after |
| 2024 Q4 | Adequacy Bridge extended (date varies) | Monitor ICO guidance for latest extensions |
| Ongoing | ICO issuances and guidance | Check ICO website for latest decisions |

---

## Practical Verification Checklist

**Before vendor onboarding, obtain:**

1. **Signed DPA** with all mandatory Art. 28.3 clauses
2. **Security evidence**: SOC 2 Type II or equivalent (not just trust badges)
3. **Sub-processor list**: published, with locations and functions
4. **Transfer mechanism documentation**: signed SCCs addendum or IDTA (if international transfers)
5. **Incident response plan**: documented timeline (≤ 48h to controller, ≤ 72h to ICO)
6. **Personnel confidentiality**: sample or certificate of confidentiality agreements
7. **Data subject rights**: vendor confirmation of technical mechanisms (export, delete, etc.)
8. **Record of activities**: vendor's record (Art. 30) matching your contract

**Ongoing monitoring:**
- [ ] Annual audit rights exercise (request evidence)
- [ ] Monitor sub-processor changes (≥ 30 days before change)
- [ ] Verify continued compliance with transfer mechanisms
- [ ] Check for ICO enforcement actions against vendor
- [ ] Review any security incidents or patches affecting vendor
