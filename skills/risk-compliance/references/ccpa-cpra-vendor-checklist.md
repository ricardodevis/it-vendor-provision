# CCPA/CPRA Vendor Compliance Checklist

## Context

The **California Consumer Privacy Act (CCPA)** and its amendments under the **California Privacy Rights Act (CPRA)** represent the most comprehensive US state privacy framework. The CPRA amendments, effective January 1, 2023, significantly expanded consumer rights, introduced new categories of protected data, and created the California Privacy Protection Agency (CPPA) as an enforcement body.

For IT vendors and service providers, CCPA/CPRA compliance is no longer optional if handling California residents' personal information. Unlike GDPR's extraterritorial reach, CCPA applies to ANY entity processing personal information of California residents, regardless of where the vendor is located. This makes California privacy laws critical for vendors globally.

### Applicability Thresholds

CCPA/CPRA obligations apply to for-profit entities that:
- Have annual gross revenues exceeding **$25 million**, OR
- Collect personal information from **100,000 or more California consumers or households**, OR
- Derive **50% or more of annual revenue** from selling or sharing consumers' personal information

> **Note**: Meeting ANY of these thresholds triggers compliance obligations. Many vendors below the revenue threshold still apply because they process data for 100K+ consumers.

---

## Service Provider vs. Contractor vs. Third Party

This distinction is **critical for vendor classification** and determines which regulations apply:

| Category | Definition | CCPA Obligations | Data Sharing Permitted | Liability |
|----------|-----------|------------------|----------------------|-----------|
| **Service Provider** | Processes PI on behalf of business; cannot use for own purposes except service delivery | Prohibited from selling/sharing PI; bound by SPA | Limited to contract fulfillment | High; business liable for vendor breaches |
| **Contractor** | Collects PI on behalf of business for specific services; operates under business directions | Subject to CCPA restrictions; must sign SPA | Only for stated purposes; subject to consumer rights | Shared liability model |
| **Third Party** | Receives PI from business; processes for own purposes or independent businesses | Own compliance obligations; not bound by SPA | Full freedom to use PI (if legally obtained) | Independent liability; not imputable to business |

**Service Provider Agreement (SPA) Required**: If your vendor is classified as a **Service Provider**, you MUST have a written contract that explicitly states:
- Vendor will not sell or share personal information
- Vendor will not retain, use, or disclose PI except as necessary to perform services
- Vendor compliance with CCPA/CPRA limitations

---

## Core Consumer Rights (Vendor Support Requirements)

Vendors processing personal information must be contractually obligated to support these consumer rights:

- [ ] **Right to Know**: Consumers can request what personal information you collect, the sources, business purposes, and categories of third parties with whom it's shared
- [ ] **Right to Delete**: Consumers can request deletion of personal information collected (with statutory exceptions for legal compliance, fraud prevention)
- [ ] **Right to Correct**: Consumers can request correction of inaccurate personal information (CPRA addition)
- [ ] **Right to Opt-Out of Sale/Sharing**: Consumers can direct vendors not to sell or share their PI (CPRA redefines "sharing" to include cross-context behavioral advertising)
- [ ] **Right to Limit Use of Sensitive Personal Information**: Vendors must honor restrictions on use of SPI to necessary business purposes and service delivery
- [ ] **Right to Non-Discrimination**: Vendors cannot discriminate against consumers exercising privacy rights; no penalizing refusal to share data

---

## Sensitive Personal Information (SPI)

CPRA introduced a new **Sensitive Personal Information** category with stricter handling requirements:

- [ ] **Definition**: Includes: (1) SSN/tax ID, (2) financial account numbers with passwords, (3) precise geolocation, (4) racial/ethnic origin, religious beliefs, union membership, (5) genetic data, (6) health/sex life information, (7) citizenship/immigration status
- [ ] **Consumer Right**: Consumers have the right to **limit use and disclosure** of SPI
- [ ] **Business Obligation**: Vendors must limit use of SPI to purposes necessary to perform services and reasonably expected by consumer
- [ ] **Vendor Handling**: Service Provider agreements must explicitly restrict SPI use and prohibit mixing with non-sensitive PI without consumer consent

---

## Service Provider Agreement (SPA) Requirements

California **Civil Code §1798.140(ag)** establishes minimum SPA requirements:

- [ ] Written contract with vendor explicitly stating CCPA restrictions
- [ ] Vendor certifies it understands restrictions and will comply
- [ ] Vendor shall not: (1) sell personal information, (2) retain/use/disclose PI except as necessary to perform services, (3) combine PI from different sources (unless consumer explicitly authorized)
- [ ] **Certification Language**: "The service provider certifies that it understands the restrictions set forth in this section and will comply with them."
- [ ] **Data Subject Rights Support**: SPA must describe vendor's responsibility to assist with consumer rights requests
- [ ] **Cross-border Transfer Terms**: If vendor transfers data internationally, SPA must address adequacy and safeguards
- [ ] **Termination/Deletion Clause**: SPA must require vendor to delete or return PI upon contract termination (or document basis for retention)

---

## Data Processing Agreement (DPA) Requirements

CPRA §1798.140(w) expanded DPA requirements beyond SPAs:

- [ ] **Scope**: Applies to all vendors processing PI under business direction
- [ ] **Essential Terms**:
  - Duration and nature of processing
  - Type of personal information processed
  - Categories of consumers
  - Obligations and rights of the business and vendor
  - Vendor's authority to use PI and subcontractors
  - Vendor's security and confidentiality obligations
  - Consumer rights support mechanisms
  - Audit/inspection rights
  - Return/deletion of PI at contract end
- [ ] **Security Requirements**: DPA must specify vendor's security responsibilities and compliance with Cal. Civ. Code §1798.150 (breach notification)
- [ ] **Breach Notification**: Vendor must notify business of breaches affecting PI "in the most expedient time possible and without unreasonable delay"

---

## Cross-Border Considerations

CCPA/CPRA applies to California residents' data regardless of vendor location:

- [ ] **Geographic Scope**: Vendor location is irrelevant; if processing CA residents' PI, CCPA applies
- [ ] **International Transfers**: Vendors in EU, APAC, or other regions must still comply when handling CA resident data
- [ ] **Data Residency**: DPA should clarify where PI is stored, processed, and whether transfers occur
- [ ] **Sub-processors**: If vendor uses subcontractors/sub-processors, business must have contractual visibility and control
- [ ] **Third-Country Restrictions**: Consider data localization requirements if vendor is in countries with data export restrictions

---

## US State Privacy Laws Landscape

CPRA catalyzed a patchwork of state privacy laws. Vendors must assess multi-state applicability:

| State | Law | Threshold | Effective | Key Differences |
|-------|-----|-----------|-----------|------------------|
| **California** | CPRA (as amended CCPA) | $25M revenue or 100K consumers | 1/1/2023 | Most comprehensive; SPI category; CPPA enforcement |
| **Virginia** | VCDPA | $100M revenue or 100K consumers | 1/1/2023 | Business-centric; weaker consumer rights |
| **Colorado** | CPA | $100M revenue or 100K consumers | 1/1/2023 | Similar to Virginia; good aggregation rules |
| **Connecticut** | CTDPA | $100M revenue or 100K consumers | 1/1/2025 | Aligns with Virginia/Colorado framework |
| **Utah** | UCPA | $100M revenue or 100K consumers | 1/1/2024 | Strongest consumer protections post-CPRA |
| **Montana** | MTDPA | $10M revenue or 50K consumers | 1/1/2024 | Smallest threshold; broadly applicable |
| **Delaware** | DPDPA | $100M revenue or 100K consumers | 1/1/2025 | Data subject rights; CCPA-aligned |
| **New Hampshire** | NHDPA | $100M revenue or 100K consumers | 1/1/2025 | Emerging; details pending |

**Multi-State Strategy**:
- [ ] Map your vendor's customer base by state
- [ ] Assess whether vendor triggers thresholds in each state
- [ ] Implement **uniform baseline compliance** (CCPA is strictest; compliance often cascades)
- [ ] Monitor new state laws (Texas, Illinois, and others have proposed bills)

---

## California Privacy Protection Agency (CPPA) Enforcement

Effective January 1, 2023, the **CPPA** became the primary state enforcement body:

- [ ] **Authority**: Investigates violations, issues administrative fines, brings civil actions
- [ ] **Scope**: Can enforce against businesses and service providers violating CCPA/CPRA
- [ ] **Notice Requirements**: CPPA can provide notice of violations; businesses have 30 days to cure (discretionary)
- [ ] **Private Right of Action**: Consumers can sue for data breaches affecting unencrypted/unredacted PI (statutory damages: $100–$750 per consumer per incident or actual damages, whichever is greater)
- [ ] **Vendor Liability**: Service providers may be liable if they: (1) cause vendor to violate CCPA, or (2) intentionally help vendor violate law

---

## Penalties & Enforcement

Non-compliance carries significant financial risk:

- [ ] **Unintentional Violations**: Up to **$2,500 per violation**
- [ ] **Intentional Violations**: Up to **$7,500 per violation**
- [ ] **Per-Consumer Damages** (Private Right of Action for Breaches): $100–$750 per consumer per incident (or greater actual damages)
- [ ] **Aggregate Liability**: Penalties accumulate per violation instance; large-scale breaches can trigger millions in liability
- [ ] **Attorney Fees**: Prevailing consumer/CPPA can recover attorney fees and costs
- [ ] **Cure Period**: CPPA may grant 30-day cure window for certain violations (discretionary)

---

## Vendor Compliance Checklist

### Data Collection & Processing

- [ ] Vendor has documented the categories of personal information collected from California consumers
- [ ] Vendor has identified the business purposes for collecting PI and documented in privacy notice
- [ ] Vendor has classified itself as Service Provider, Contractor, or Third Party (in writing)
- [ ] If Service Provider: Vendor operates only under business's direction and cannot use PI for own purposes (except service delivery)
- [ ] Vendor has identified Sensitive Personal Information (SPI) in scope and applied enhanced controls
- [ ] Vendor does NOT combine PI from multiple sources without explicit consumer consent
- [ ] Vendor has documented data retention schedules and deletion procedures (Cal. Civ. Code §1798.105)

### Service Provider Agreement (SPA)

- [ ] Written SPA exists between vendor and business (required per §1798.140(ag))
- [ ] SPA explicitly restricts vendor from selling or sharing PI
- [ ] SPA prohibits vendor from retaining/using PI except as necessary for service delivery
- [ ] SPA includes vendor's certification: "The service provider certifies that it understands the restrictions set forth in California Civil Code §1798.140(ag) and will comply with them."
- [ ] SPA specifies vendor's obligations regarding SPI (limited use to service necessity and consumer expectations)
- [ ] SPA addresses cross-border data transfers (if applicable) and security standards
- [ ] SPA includes termination/deletion clause: vendor shall delete or return PI upon contract end or document retention basis
- [ ] SPA assigns audit/inspection rights to business for compliance verification

### Data Processing Agreement (DPA)

- [ ] Comprehensive DPA exists covering all PI processing (required per §1798.140(w))
- [ ] DPA specifies: (1) duration/nature of processing, (2) types of PI, (3) consumer categories, (4) processing locations
- [ ] DPA includes vendor's security obligations and breach notification requirements
- [ ] DPA explicitly assigns responsibility for supporting consumer rights (access, deletion, correction, opt-out)
- [ ] DPA covers sub-processor/subcontractor management and vendor's obligation to ensure their compliance
- [ ] DPA requires vendor notification of breaches "in the most expedient time possible and without unreasonable delay"
- [ ] DPA includes data return/deletion requirements at contract termination

### Consumer Rights Support

- [ ] Vendor has implemented processes to respond to consumer rights requests (Know, Delete, Correct, Opt-Out, Limit SPI Use)
- [ ] Vendor's systems can identify and retrieve PI for a specific consumer upon business request
- [ ] Vendor can permanently delete consumer PI upon business request (within statutory timeframes)
- [ ] Vendor can correct inaccurate PI and document corrections
- [ ] Vendor can honor opt-out directives and prevent PI sale/sharing
- [ ] Vendor can restrict SPI use to contract-necessary purposes
- [ ] Vendor provides business with reasonable timeframes for fulfilling consumer requests (business must respond to consumer within 45 days)

### Security & Breach Response

- [ ] Vendor maintains security measures compliant with Cal. Civ. Code §1798.150 (Safeguards Rule)
- [ ] Vendor implements encryption or de-identification for PI in motion and at rest
- [ ] Vendor has incident response procedures and breach notification processes
- [ ] Vendor notifies business of breaches of unencrypted/unredacted PI "without unreasonable delay"
- [ ] Vendor has cyber liability insurance (if contractually required) with minimum coverage limits
- [ ] Vendor conducts regular security assessments (audits, penetration tests, vulnerability scans)

### Privacy Notice & Transparency

- [ ] Business privacy notice clearly identifies vendor's role and PI processing purposes
- [ ] Privacy notice discloses PI categories collected, data sources, and business purposes (per §1798.100)
- [ ] Privacy notice lists categories of third parties with whom PI is shared
- [ ] Privacy notice explains consumer rights and how to exercise them (Know, Delete, Correct, Opt-Out, Limit SPI)
- [ ] Privacy notice is clear, conspicuous, and presented in plain language
- [ ] Privacy notice is updated when vendor processing scope changes

### Opt-Out & Consent Management

- [ ] Vendor supports "Do Not Sell My Personal Information" requests and maintains opt-out registry
- [ ] Vendor supports "Do Not Share My Personal Information" requests (CPRA §1798.135)
- [ ] Vendor does NOT require user to create account to exercise opt-out rights
- [ ] Vendor respects Global Opt-Out (GPC) signals if processing consumer data in web context
- [ ] Vendor does NOT discriminate against consumers exercising privacy rights (no price discrimination, service degradation, etc.)
- [ ] Vendor communicates opt-out compliance to business within documented timeframe

### Compliance Monitoring & Documentation

- [ ] Vendor has appointed a **Data Protection Officer (DPO)** or designated privacy contact
- [ ] Vendor maintains a Data Processing Register documenting all PI processing activities
- [ ] Vendor documents vendor management, contracts, and sub-processor oversight
- [ ] Vendor conducts annual CCPA/CPRA compliance training for staff
- [ ] Vendor provides business with attestation of compliance (audit report, SOC 2, or vendor certification)
- [ ] Vendor notifies business of compliance changes (law changes, policy updates, security improvements)
- [ ] Vendor maintains records of consumer rights requests and business's responses for 3 years

### Multi-State Compliance

- [ ] Vendor has assessed CCPA applicability (does it process CA resident data?)
- [ ] Vendor has mapped customer base by state to identify other applicable privacy laws (VCDPA, CPA, CTDPA, UCPA, MTDPA, DPDPA, NHDPA)
- [ ] Vendor implements **baseline compliance** to highest standard (CCPA for CA; UCPA for Utah; MTDPA for Montana)
- [ ] Vendor monitors emerging state privacy laws and plans for adoption (Texas HB 4, Illinois, etc.)

---

## Red Flags: Vendor Non-Compliance Indicators

> **🚨 RED FLAG**: Vendor claims CCPA does not apply because it is not a "California business" or has no California office. **REALITY**: CCPA applies based on PI of California residents, not vendor location.

> **🚨 RED FLAG**: Vendor's DPA/SPA contains no restrictions on selling or sharing personal information. **REALITY**: Service Provider agreements MUST prohibit sale/sharing; this is non-negotiable.

> **🚨 RED FLAG**: Vendor cannot identify or retrieve a specific consumer's PI within reasonable timeframe. **REALITY**: Vendors must support consumer rights requests; inability to do so signals weak data governance.

> **🚨 RED FLAG**: Vendor claims encryption/de-identification covers CCPA compliance; no other security measures in place. **REALITY**: Encryption is necessary but not sufficient; comprehensive security controls required per §1798.150.

> **🚨 RED FLAG**: Vendor has no documented breach notification process or SPA does not require notification "without unreasonable delay." **REALITY**: Breach notification obligations are mandatory; absence is critical failure.

> **🚨 RED FLAG**: Vendor combines PI from multiple sources without documented consumer authorization. **REALITY**: Cal. Civ. Code §1798.140(ag) prohibits this; SPA must restrict cross-source combination.

> **🚨 RED FLAG**: Vendor has no Data Processing Agreement, only general Terms of Service. **REALITY**: CPRA §1798.140(w) requires comprehensive DPA; generic ToS is insufficient.

---

## Evidence & Documentation Requirements

To demonstrate vendor compliance, collect:

1. **Service Provider Agreement (SPA)** — Signed, dated, with §1798.140(ag) certification language
2. **Data Processing Agreement (DPA)** — Comprehensive terms per §1798.140(w) (duration, PI types, processing locations, security, breach notification)
3. **Privacy Notice** — Current, clear, disclosing PI collection, uses, third-party sharing, consumer rights
4. **Data Processing Register** — Vendor's documentation of PI categories, purposes, retention, subprocessors
5. **Audit/Compliance Certification** — SOC 2, ISO 27001, vendor attestation of CCPA compliance, or third-party assessment
6. **Breach Notification Policy** — Vendor's incident response and notification procedures (timeline, business contact)
7. **Sub-processor Agreement** — If vendor uses subcontractors, contracts cascading CCPA/CPRA restrictions
8. **Consumer Rights Support Documentation** — Examples of vendor's handling of access, deletion, correction, opt-out requests
9. **Training Records** — Vendor's staff privacy training materials and completion records
10. **Amendment/Update Log** — Documentation of DPA/SPA changes reflecting new CPRA amendments

---

**Last Updated**: February 2026
**Next Review**: As state privacy laws evolve; monitor CPPA guidance and new state privacy statutes
**Legal References**: Cal. Civ. Code §§1798.100–1798.199 (CCPA/CPRA); CPPA Regulations (if finalized)
