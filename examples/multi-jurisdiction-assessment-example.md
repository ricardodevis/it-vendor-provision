# Multi-Jurisdiction Regulatory Risk Assessment Example

## Vendor Profile

| Field | Detail |
|-------|--------|
| Vendor | SecureVault Inc. |
| Headquarters | Wilmington, Delaware, USA |
| UK Subsidiary | SecureVault UK Ltd, London |
| Service | SaaS Document Management Platform with AI-powered classification |
| Client | FinanzCorp S.A. (Madrid, Spain) |
| Client Sector | Financial services (CNMV-regulated) |
| Data Subjects | EU employees (~2,000), UK employees (~500), US employees (~300) |
| Data Types | Personal data (employment records, email), financial documents, payment card data for billing |
| AI Component | ML-based document classification and semantic search |
| Data Residency | EU data in Frankfurt, UK data in London, US backups in Virginia |
| Sub-processors | AWS (US), Stripe (payment processing) |

## Step 1: Jurisdiction Screening

### Screening Questions & Results

| Question | Answer | Applicable Regulation |
|----------|--------|----------------------|
| Does vendor process personal data of EU residents? | Yes (2,000 EU employees) | **GDPR** |
| Does vendor process personal data of UK residents? | Yes (500 UK employees) | **UK GDPR / DPA 2018** |
| Does vendor process personal data of California residents? | Potentially via US employees | **CCPA/CPRA** |
| Is the client subject to DORA (financial sector)? | Yes (CNMV-regulated bank) | **DORA** |
| Does vendor use AI/ML on personal or sensitive data? | Yes (document classification) | **EU AI Act** |
| Does vendor process payment card data? | Yes (billing via Stripe) | **PCI DSS v4.0** |
| Is vendor subject to Spanish/EU security standards? | Yes (client in Spain) | **ENS (Spain)** |
| Is SOC 2 or similar audit required? | Recommended for financial services | **SOC 2 Type II** |

**Result:** 8 regulations apply simultaneously across this engagement.

---

## Step 2: Evidence Gathered

### Vendor Documentation Submission

| Regulation | Evidence | Status | Notes |
|-----------|----------|--------|-------|
| GDPR | DPA (signed), Article 28 terms, SCC clauses, Privacy Policy | SUBMITTED | SCCs dated 2010 (old version) |
| UK GDPR | UK DPA addendum, UK-specific terms | SUBMITTED | Missing IDTA clause |
| CCPA/CPRA | Service Provider Agreement, "no sale/sharing" declaration | SUBMITTED | Missing California resident handling procedures |
| DORA | ICT risk management policy, incident reporting procedures | PARTIAL | No DORA-specific incident timeline defined |
| EU AI Act | AI risk assessment, documentation on classifier model | PARTIAL | Risk level classification incomplete |
| PCI DSS | SAQ-D (Self-Assessment Questionnaire), annual penetration test report | SUBMITTED | Valid through 2027 |
| ENS (Spain) | Security compliance attestation | SUBMITTED | Meets Level 2 (Medium) requirements |
| SOC 2 Type II | Audit report (6-month period, 2025-2026) | SUBMITTED | Valid, covers controls broadly |

---

## Step 3: Gap Analysis

### Detailed Compliance Findings

#### GDPR (EU Data Protection)

**Finding 1: Outdated Standard Contractual Clauses (SCCs)**
- **Status:** NON-COMPLIANT
- **Issue:** DPA references SCCs from EC Decision 2010/87, but EDPB Opinion 1/2020 (Schrems II ruling) invalidated these for transfers outside EU/EEA
- **Impact:** EU→US data transfers technically lack legal basis
- **Evidence:** DPA document reviewed, dated 2022 but SCCs not updated
- **Remediation:** Upgrade to 2021/914 SCCs with Transfer Impact Assessment (TIA)
- **Effort:** Medium (legal review + documentation)

**Finding 2: Sub-processor Authorization**
- **Status:** COMPLIANT
- **Issue:** AWS and Stripe listed in DPA with proper Article 28(2) processor-of-processor clauses
- **Note:** Stripe is PCI-scoped (payment processing), proper risk segmentation applied

**Finding 3: Data Subject Rights Procedures**
- **Status:** COMPLIANT
- **Evidence:** Vendor has documented procedures for access, correction, erasure, portability requests with 30-day response SLA

---

#### UK GDPR & Data Protection Act 2018

**Finding 4: Missing UK-to-US Transfer Mechanism**
- **Status:** NON-COMPLIANT
- **Issue:** UK employees' data (500 persons) transferred to Virginia backups; no IDTA (International Data Transfer Agreement) executed
- **Impact:** Post-Brexit, UK GDPR requires ICO approval or equivalent mechanism
- **Evidence:** No IDTA documentation found; UK DPA addendum mentions "SCCs apply" but SCCs not valid post-Schrems II
- **Remediation:** Execute IDTA with ICO reference or move UK backups to UK data centers
- **Effort:** Medium-High (involves infrastructure change or ICO coordination)

**Finding 5: Right to Erasure - UK Shadow Records**
- **Status:** PARTIAL
- **Issue:** Vendor maintains "immutable logs" of deleted documents for audit purposes; not clearly compliant with "erasure" requirement
- **Impact:** May violate Section 17 DPA 2018 (right to erasure)
- **Remediation:** Implement technical controls to pseudonymize or segregate shadow records from primary data

---

#### CCPA/CPRA (California Consumer Privacy Rights)

**Finding 6: Service Provider Agreement - "No Sale" Clause**
- **Status:** PARTIAL
- **Issue:** SPA exists but missing explicit "vendor shall not use personal information for any purpose other than to perform the services specified" language
- **Impact:** If Stripe automatically deidentifies data, but vendor retains metadata, this could be interpreted as "selling"
- **Evidence:** SPA reviewed; "Restrictions" section vague on use limitations
- **Remediation:** Add explicit CCPA Section 1798.140(ad) compliant language ("no sale, sharing, or retention")
- **Effort:** Low (contract amendment)

**Finding 7: California Privacy Rights - Correction & Deletion**
- **Status:** COMPLIANT
- **Evidence:** Vendor policy includes 45-day response time for consumer correction/deletion requests

---

#### DORA (Digital Operational Resilience Act)

**Finding 8: ICT Incident Classification & Reporting Timeline**
- **Status:** NON-COMPLIANT
- **Issue:** Vendor has incident response procedures but no DORA-specific classification (significant vs. non-significant per DORA Article 18)
- **Impact:** If incident occurs, vendor may miss DORA's 72-hour notification requirement (vs. GDPR's 72-hour data breach notification)
- **Evidence:** Incident policy references GDPR timelines only; no DORA severity matrix
- **Remediation:** Create DORA-aligned incident classification matrix; define escalation to FinanzCorp within 24 hours for assessment
- **Effort:** Medium (policy update + process training)

**Finding 9: Third-Party Risk Management**
- **Status:** COMPLIANT
- **Evidence:** Vendor maintains inventory of critical sub-contractors (AWS, Stripe) with documented SLAs and audit schedules; aligns with DORA Article 15

---

#### EU AI Act (Artificial Intelligence Act)

**Finding 10: Document Classifier Risk Assessment**
- **Status:** NON-COMPLIANT
- **Issue:** ML classifier used for document categorization; EU AI Act Annex I lists document classification as "high-risk" if used to evaluate individuals (e.g., employee performance, creditworthiness). Vendor has not assessed whether this applies.
- **Impact:** If high-risk, requires conformity assessment, CE mark, EU database registration; vendor has none of these
- **Evidence:** Technical documentation mentions "unsupervised learning on document metadata" but no risk classification performed
- **Remediation:** Conduct formal risk assessment per AI Act Article 6; likely classify as high-risk if used for personnel decisions; implement conformity assessment
- **Effort:** High (technical + legal + compliance infrastructure)

**Finding 11: AI Training Data & Bias**
- **Status:** PARTIAL
- **Issue:** AI classifier trained on historical FinanzCorp documents; no documented bias testing or data governance
- **Impact:** Could violate AI Act Article 10 (data governance) and Article 13 (documentation)
- **Remediation:** Implement AI governance framework with bias testing, data lineage, human oversight for edge cases
- **Effort:** High (ML ops investment)

---

#### PCI DSS v4.0 (Payment Card Data Security)

**Finding 12: Payment Processing Architecture**
- **Status:** COMPLIANT
- **Issue:** None; vendor uses Stripe for payment collection; SecureVault only handles billing invoices (not card data in-scope)
- **Evidence:** SAQ-D (Self-Assessment Questionnaire for Service Providers) completed Dec 2024; all 12 requirements met
- **Assessment:** Annual penetration test Q1 2025 showed no critical findings; expires Q4 2025
- **Note:** Stripe maintains PCI DSS 3.1 Level 1 certification (verified in shared audit reports)

---

#### ENS (Esquema Nacional de Seguridad - Spain)

**Finding 13: Security Levels & Compliance**
- **Status:** COMPLIANT
- **Issue:** None; vendor infrastructure meets Level 2 (Medium) requirements for financial data processing
- **Evidence:** Security compliance attestation from Spanish consultant; covers encryption, access controls, logging
- **Note:** FinanzCorp is CNMV-regulated; ENS Level 2 is minimum baseline for financial institutions

---

#### SOC 2 Type II

**Finding 14: Trust Service Criteria**
- **Status:** COMPLIANT
- **Evidence:** SOC 2 Type II audit (6-month observation period Oct 2025 - Apr 2026) covers:
  - CC (security controls), A (availability), C (confidentiality), PI (privacy integrity)
  - No exceptions noted in auditor's report
- **Note:** SOC 2 provides evidence of operational effectiveness but is not a regulatory requirement; valuable for demonstrating control implementation across all frameworks

---

## Step 4: Risk Matrix

### Risk Scoring Summary

| Finding | Regulation | Risk Level | CVSS-Style Score | Criticality | Remediation Timeline |
|---------|-----------|-----------|------------------|-------------|---------------------|
| Outdated SCCs (Finding 1) | GDPR | CRITICAL | 8.2 (high data transfer risk) | Critical | 90 days |
| Missing IDTA (Finding 4) | UK GDPR | CRITICAL | 7.9 (legal basis violation) | Critical | 60 days |
| AI classifier risk (Finding 10) | EU AI Act | CRITICAL | 8.5 (high-risk AI uncertified) | Critical | 120 days |
| DORA incident reporting (Finding 8) | DORA | HIGH | 7.1 (compliance gap) | High | 45 days |
| Service Provider Agreement (Finding 6) | CCPA/CPRA | HIGH | 6.5 (ambiguous restrictions) | High | 30 days |
| AI training data governance (Finding 11) | EU AI Act | HIGH | 7.3 (lack of documentation) | High | 90 days |
| Shadow records erasure (Finding 5) | UK GDPR | MEDIUM | 5.8 (partial compliance) | Medium | 60 days |
| Sub-processor risk (Finding 9) | DORA | LOW | 3.2 (controls in place) | Low | Ongoing monitoring |
| Data subject rights (Finding 2) | GDPR | LOW | 2.1 (well-documented) | Low | N/A |
| PCI DSS compliance (Finding 12) | PCI DSS | LOW | 1.8 (certified compliant) | Low | N/A |
| ENS compliance (Finding 13) | ENS | LOW | 2.0 (attested) | Low | N/A |
| SOC 2 audit (Finding 14) | SOC 2 | LOW | 1.5 (effective controls) | Low | N/A |

### Risk Profile Summary

- **Critical Risks:** 3 (SCCs, IDTA, AI classifier) → Must remediate before production deployment
- **High Risks:** 3 (DORA, CCPA, AI governance) → Must remediate within 90 days
- **Medium Risks:** 1 (shadow records) → Should remediate within 60 days
- **Low Risks:** 5 → Covered by existing controls or ongoing monitoring
- **Overall Status:** MULTIPLE CRITICAL GAPS - Conditional approval only

---

## Step 5: Recommendation

### Decision: APPROVE WITH CONDITIONS (Timeline: 90 days)

**Rationale:**

SecureVault Inc. demonstrates operational maturity (SOC 2 certified, PCI DSS compliant) and reasonable control foundations. However, **three critical gaps prevent immediate production deployment** without legal and compliance remediation:

1. **GDPR Transfer Mechanism:** 2010 SCCs are legally invalid post-Schrems II; EU data transfers to US backups lack proper legal basis
2. **UK Data Protection:** 500 UK employees' data cannot be legally transferred to Virginia without IDTA or UK-resident backup
3. **AI Regulation:** Document classifier is uncertified high-risk AI under EU AI Act; no conformity assessment completed

**Conditions for Go-Live:**

SecureVault must complete the following before processing any regulated data:

| # | Condition | Regulation | Deadline | Go/No-Go Gate |
|---|-----------|-----------|----------|---------------|
| 1 | Upgrade DPA to 2021/914 SCCs with Transfer Impact Assessment (TIA) | GDPR | 90 days | GO - Required |
| 2 | Execute UK IDTA or migrate UK backups to UK data centers | UK GDPR/DPA 2018 | 60 days | GO - Required |
| 3 | Classify document classifier risk level; initiate conformity assessment for high-risk AI | EU AI Act | 120 days | GO - May be phased* |
| 4 | Define DORA incident classification matrix; train team on 24-hour escalation | DORA | 45 days | GO - Required |
| 5 | Update Service Provider Agreement to include explicit CCPA/CPRA "no sale" clause | CCPA/CPRA | 30 days | GO - Required |
| 6 | Implement pseudonymization controls for shadow/immutable logs | UK GDPR | 60 days | GO - Required |
| 7 | Establish AI training data governance and bias testing procedures | EU AI Act | 90 days | GO - Recommended |

**Phased Approach Option (for Condition 3):**

If conformity assessment delays deployment, use phased approach:
- **Phase 1:** Deploy with AI classifier *disabled* or *human-reviewed only* (not automated decision-making)
- **Phase 2:** Enable full AI capabilities after conformity assessment (~6 months)
- This reduces AI Act risk from "high-risk uncertified" to "minimal-risk in review"

---

## Step 6: Remediation Plan

### 90-Day Action Plan

| Priority | Gap ID | Title | Regulation | Action | Owner | Deadline | Status |
|----------|--------|-------|-----------|--------|-------|----------|--------|
| 1 | Finding 4 | Execute UK IDTA for UK→US Transfers | UK GDPR | Engage ICO-approved advisor; execute IDTA or migrate backups to UK | SecureVault Legal + Infrastructure | 60 days | NOT STARTED |
| 2 | Finding 1 | Update SCCs to 2021/914 with TIA | GDPR | Revise DPA; conduct Transfer Impact Assessment; update all contracts | SecureVault Legal + Data Protection Officer | 90 days | NOT STARTED |
| 3 | Finding 8 | Align Incident Reporting to DORA | DORA | Create DORA incident matrix; update IR playbook; train ops team | SecureVault IR Lead + FinanzCorp CISO | 45 days | NOT STARTED |
| 4 | Finding 6 | Add CCPA/CPRA Restrictions to SPA | CCPA/CPRA | Legal review; add explicit "no sale/sharing/retention" clauses | SecureVault Legal | 30 days | NOT STARTED |
| 5 | Finding 10 | AI Classifier Risk Assessment | EU AI Act | Hire external AI audit firm; assess against Annex I; document risk classification | SecureVault CTO + External Auditor | 120 days | IN PROGRESS |
| 6 | Finding 5 | Pseudonymize Shadow Records | UK GDPR | Design technical controls for immutable log pseudonymization; implement | SecureVault Engineering | 60 days | NOT STARTED |
| 7 | Finding 11 | Establish AI Governance Framework | EU AI Act | Document training data lineage; implement bias testing; design human review workflows | SecureVault Data Science + Compliance | 90 days | NOT STARTED |
| 8 | — | Obtain Executive Sign-Off | All | CRO and SecureVault CEO sign remediation commitment; provide timeline attestation to FinanzCorp | SecureVault Management | 15 days | NOT STARTED |

### Remediation Success Criteria

Each remediation must deliver:

- **Legal/Contractual:** Signed attestation from external counsel that terms meet regulatory standard
- **Technical:** Audit trail or penetration test evidence that controls function as designed
- **Operational:** Process documentation and team certification (training completion)
- **Governance:** Board-level approval or executive signature confirming commitment

---

## Step 7: Multi-Jurisdiction Scorecard

### Compliance Status by Regulation

| Regulation | Controls Assessed | Compliant | Partial | Non-Compliant | Overall % | Status | Priority |
|-----------|------------------|-----------|---------|----------------|-----------|--------|----------|
| **GDPR** | 8 | 7 | 0 | 1 (SCCs) | 87.5% | CONDITIONAL | CRITICAL |
| **UK GDPR / DPA 2018** | 6 | 4 | 1 (shadow records) | 1 (IDTA) | 66.7% | CONDITIONAL | CRITICAL |
| **CCPA/CPRA** | 4 | 3 | 1 (SPA) | 0 | 75% | CONDITIONAL | HIGH |
| **DORA** | 5 | 3 | 1 (incident reporting) | 1 (ICT risk matrix) | 60% | CONDITIONAL | CRITICAL |
| **EU AI Act** | 5 | 1 | 1 (data governance) | 3 (risk assessment, conformity, governance) | 20% | NON-COMPLIANT | CRITICAL |
| **PCI DSS v4.0** | 12 | 12 | 0 | 0 | 100% | COMPLIANT | LOW |
| **ENS (Spain)** | 7 | 7 | 0 | 0 | 100% | COMPLIANT | LOW |
| **SOC 2 Type II** | 20 | 20 | 0 | 0 | 100% | COMPLIANT | LOW |
| **OVERALL** | 67 | 57 | 4 | 6 | **85.1%** | **CONDITIONAL** | — |

---

## Step 8: Multi-Jurisdiction Complexity Analysis

### Overlapping Regulatory Requirements

| Data Element | GDPR | UK GDPR | CCPA | DORA | EU AI Act | PCI DSS | ENS | Impact |
|--------------|------|--------|------|------|-----------|---------|-----|--------|
| EU employee data | X | — | — | — | X (if AI) | — | X | 3 overlapping frameworks |
| UK employee data | — | X | — | — | — | — | — | 1 framework (but critical) |
| US employee data | — | — | X | — | — | — | — | 1 framework |
| Financial documents | X | X | — | X | X | — | X | 5 overlapping frameworks |
| Payment card data | — | — | — | — | — | X | — | 1 framework (PCI focused) |
| Document classifier (AI) | X | X | — | — | X | — | X | 4 overlapping frameworks |

### Cross-Regulatory Conflict Resolution

**Example 1: Data Retention Conflict**
- GDPR: "Keep data only as long as necessary" (purpose-specific)
- EU AI Act: "Retain training data for model auditability" (up to 7 years)
- **Resolution:** Retain data under AI Act requirements, but implement access controls and pseudonymization per GDPR

**Example 2: Incident Reporting Timing**
- GDPR: 72 hours to notify supervisory authority after becoming aware of breach
- DORA: 72 hours to notify financial authority, AND 24 hours internal escalation
- **Resolution:** Implement 24-hour internal triage (faster than GDPR 72h), formal notification within 48h, covers both

**Example 3: Transparency Obligations**
- GDPR Article 13: Privacy notice at point of collection
- EU AI Act Article 13: Disclosure that AI is used in decision-making
- **Resolution:** Combine disclosures; add AI risk level and human review process to privacy notice

---

## Step 9: Ongoing Monitoring Plan

### Quarterly Compliance Review Checklist

| Item | Frequency | Owner | Evidence |
|------|-----------|-------|----------|
| Vendor incident log review (DORA aligned) | Monthly | FinanzCorp CISO | Escalation records |
| Sub-processor risk assessment (AWS, Stripe) | Quarterly | SecureVault Chief Privacy Officer | Updated SLAs, certifications |
| AI classifier performance audit (bias, accuracy) | Quarterly | SecureVault Data Science | Model evaluation report |
| PCI DSS re-certification preparation | Semi-annually | SecureVault Security Engineer | SAQ status, penetration test schedule |
| SCCs & IDTA enforcement (TIA review) | Annually | SecureVault Legal | Data transfer logs, TIA refresh |
| SOC 2 Type II audit renewal planning | Annually (6 months before expiry) | SecureVault Operations | Audit plan, timeline |
| EU AI Act conformity assessment status | Semi-annually | SecureVault Compliance | Risk classification updates, CE mark progress |
| DORA incident reporting drills | Semi-annually | FinanzCorp + SecureVault IR teams | Drill report, response times |

---

## Appendix A: Regulatory Framework Summaries

### GDPR (EU General Data Protection Regulation)

- **Scope:** Personal data processing in EU or of EU residents
- **Key Controls:** DPA, SCCs, TIA, data subject rights, breach notification
- **Enforcement:** GDPR fines up to €20M or 4% annual revenue (whichever higher)
- **Vendor Status:** Article 28 Data Processor under DPA; legally responsible for sub-processors

### UK GDPR & Data Protection Act 2018

- **Scope:** Personal data processing in UK or of UK residents (post-Brexit equivalent to GDPR)
- **Key Controls:** UK-specific DPA addendum, IDTA for non-UK transfers, data subject rights
- **Enforcement:** GDPR-equivalent fines; ICO enforcement
- **Vendor Status:** Data Processor; UK IDTA required for US/non-adequacy transfers

### CCPA/CPRA (California Consumer Privacy Rights Act)

- **Scope:** Personal data of California residents (sale and sharing prohibited for service providers)
- **Key Controls:** Service Provider Agreement, "no sale" certification, deletion/access rights
- **Enforcement:** CCPA fines up to $7,500/violation; CPRA adds "rights to correct/delete/opt-out"
- **Vendor Status:** Restricted to service provider use only; no secondary benefits

### DORA (Digital Operational Resilience Act)

- **Scope:** ICT risk management for financial institutions and critical third parties
- **Key Controls:** Incident classification, 72h notification, sub-processor audits, ICT risk policy
- **Enforcement:** EU financial regulators (ECB, EBA, ESMA); fines up to €10M or 3% consolidated revenue
- **Vendor Status:** Critical third party for financial clients; subject to regulatory audits

### EU AI Act (Artificial Intelligence Act)

- **Scope:** High-risk AI systems affecting fundamental rights (Annex I); includes document classification for personnel decisions
- **Key Controls:** Risk assessment, conformity assessment, CE mark, EU AI database registration, bias testing
- **Enforcement:** EU national authorities; fines up to €30M or 6% global revenue
- **Vendor Status:** High-risk AI provider; responsible for pre-market conformity assessment

### PCI DSS v4.0 (Payment Card Industry Data Security Standard)

- **Scope:** Payment card data handling, storage, transmission
- **Key Controls:** Encryption, access controls, penetration testing, vulnerability management
- **Enforcement:** Payment networks (Visa, MasterCard, Amex); fines, acquiring bank audits
- **Vendor Status:** Service provider (SAQ-D); annual attestation required; third-party validation recommended

### ENS (Esquema Nacional de Seguridad - Spain)

- **Scope:** Information security baseline for Spanish public administrations and regulated entities
- **Key Controls:** Security levels (Basic/Medium/High); encryption, access, audit logging
- **Enforcement:** Spanish supervisory bodies; mandatory for public and regulated sectors
- **Vendor Status:** Must meet Level 2+ for financial sector clients in Spain

---

## Appendix B: Acronyms & References

| Acronym | Definition |
|---------|-----------|
| DPA | Data Processing Agreement |
| SCC | Standard Contractual Clauses |
| TIA | Transfer Impact Assessment |
| IDTA | International Data Transfer Agreement |
| CNMV | Comisión Nacional del Mercado de Valores (Spanish financial regulator) |
| CCPA | California Consumer Privacy Act |
| CPRA | California Privacy Rights Act |
| DORA | Digital Operational Resilience Act |
| AI Act | Artificial Intelligence Act (EU) |
| PCI DSS | Payment Card Industry Data Security Standard |
| ENS | Esquema Nacional de Seguridad (Spain) |
| GDPR | General Data Protection Regulation (EU) |
| UK GDPR | United Kingdom GDPR (post-Brexit) |
| DPA 2018 | Data Protection Act 2018 (UK) |
| SOC 2 | Service Organization Control 2 audit |
| SAQ-D | Self-Assessment Questionnaire - Service Provider |
| ICO | Information Commissioner's Office (UK) |
| EDPB | European Data Protection Board |
| CE mark | Conformity marking for EU high-risk AI |
| CVSS | Common Vulnerability Scoring System |
| IR | Incident Response |
| CRO | Chief Risk Officer |
| CISO | Chief Information Security Officer |

---

## Appendix C: Key Regulatory Decision Points

### Decision Tree: Is SecureVault AI Classifier High-Risk Under EU AI Act?

1. **Does the AI system make decisions about individuals?**
   - Sub-question: Is document classification used for personnel decisions (performance, hiring, firing)?
   - If YES → High-risk (Annex I, 4)
   - If NO → Continue to next question

2. **Does the AI system evaluate creditworthiness or financial status?**
   - Sub-question: Are financial documents analyzed to assess credit risk?
   - If YES → High-risk (Annex I, 5)
   - If NO → Continue

3. **Is the AI system used in law enforcement or justice?**
   - If YES → High-risk (Annex I, 1-3)
   - If NO → Likely not high-risk for document classification

**Tentative Classification for SecureVault:**
- Document classification for financial documents + potential performance review data = **HIGH-RISK AI**
- Requires: conformity assessment, documentation, EU database registration, human oversight, bias testing
- **Current Status:** Uncertified → NON-COMPLIANT until assessment complete

---

## Appendix D: Contract Language Examples

### GDPR-Compliant SCC Update Language (Template)

```
This Data Processing Agreement incorporates the Standard Contractual Clauses 
for Processor-to-Controller transfers adopted by EU Commission Decision 2021/914, 
as supplemented by the European Data Protection Board Opinion 1/2020 (Schrems II) 
and implementing a Transfer Impact Assessment per EDPB Guidelines 46/2020.

For transfers to the United States, the Vendor certifies that:
(a) Personal data is transferred only where necessary for service delivery
(b) Vendor has assessed whether US law enables adequate protection
(c) Vendor has implemented supplementary technical and organizational measures 
    (e.g., encryption, pseudonymization) where risks are identified
(d) Vendor will notify the Client immediately of any legal requests affecting 
    the personal data and will seek to challenge such requests
(e) Vendor will execute UK International Data Transfer Agreements (IDTA) for 
    UK personal data transfers per ICO guidance
```

### DORA Incident Reporting Language (Template)

```
Vendor shall classify ICT incidents as SIGNIFICANT or NON-SIGNIFICANT per DORA 
Article 18 and EBA Guidelines, considering:
- Availability, integrity, or confidentiality of systems
- Impact on Client's business-critical operations
- Number of affected data subjects or financial impact

For SIGNIFICANT incidents, Vendor shall:
1. Notify Client within 24 hours of becoming aware
2. Provide initial impact assessment
3. Provide Client information for regulatory notification within 72 hours
4. Maintain incident logs for 3 years per DORA Article 16

Client (as regulated entity) retains authority for regulatory notification.
```

---

## Summary

This example demonstrates how a single vendor engagement triggers **8 simultaneous regulatory frameworks**, each with distinct requirements, overlaps, and conflicts. The multi-jurisdiction assessment methodology (Screening → Evidence → Gap Analysis → Risk Matrix → Conditional Approval → Remediation Plan) allows organizations to:

1. **Identify overlapping regulations** before contracting
2. **Spot critical gaps early** (e.g., AI Act non-compliance)
3. **Prioritize remediation** by risk and timeline
4. **Enforce conditions** for phased deployment if necessary
5. **Monitor compliance** across all frameworks through unified scorecard

**Key Takeaway:** Multi-jurisdiction compliance is not a checklist—it requires jurisdictional mapping, conflict resolution, and ongoing alignment as regulations evolve.

