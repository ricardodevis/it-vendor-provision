---
title: "Vendor Risk Assessment - Multi-Jurisdiction Compliance Screening"
type: Compliance
priority: "P0"
triggers: ["GDPR", "UK GDPR", "HIPAA", "CCPA", "CPRA", "SOC 2", "NIST CSF", "FCA", "NIS2", "DORA", "EU AI Act", "ENS", "data protection", "compliance", "vendor risk", "third-party", "outsourcing", "PCI DSS", "ISO 27001"]
description: "Comprehensive multi-jurisdiction risk assessment framework for IT vendor provisioning, evaluating compliance requirements across EU (GDPR, NIS2, DORA, EU AI Act, ENS), UK (UK GDPR, DPA 2018, FCA SS2/21), US (HIPAA, CCPA/CPRA, NIST CSF), and global standards (PCI DSS, ISO 27001, SOC 2). Identifies applicable regulations based on jurisdiction, data types, and operational context."
---

## Purpose
To systematically assess IT vendor risk across multiple jurisdictions and regulatory frameworks before provisioning, ensuring compliance with applicable data protection, security, and operational resilience regulations.

## Applicable Regulations

This assessment covers compliance across multiple jurisdictions and regulatory domains:

### EU Regulations
- **GDPR** (General Data Protection Regulation) - Processing of personal data of EU residents
- **NIS2** (Directive on measures for a high common level of cybersecurity) - Essential and important entities
- **EU AI Act** - AI systems used within EU scope
- **DORA** (Digital Operational Resilience Act) - Financial sector ICT third parties
- **ENS** (Esquema Nacional de Seguridad, Spain) - National security standards for public administration

### UK Regulations
- **UK GDPR / Data Protection Act 2018** - Processing of personal data of UK residents
- **FCA SS2/21** (Financial Conduct Authority Supervisory Statement) - Material outsourcing in financial services

### US Regulations
- **HIPAA** (Health Insurance Portability and Accountability Act) - Protected Health Information
- **CCPA / CPRA** (California Consumer Privacy Act / California Privacy Rights Act) - Personal data of California consumers
- **NIST CSF / SP 800-171** - Critical infrastructure and federal government contracts
- **CMMC** (Cybersecurity Maturity Model Certification) - Department of Defense contractors

### Global Standards
- **PCI DSS v4.0** - Payment Card Data Security
- **ISO 27001 / 20000 / 22301** - Information security management systems
- **SOC 2** - Service Organization Control attestations

## Step 1: Identify Applicable Regulations

Use the jurisdiction and compliance screening table below to identify which regulations apply to your vendor context:

| Question | If "Yes" | Applicable Regulation | Jurisdiction |
|----------|---------|---------------------|--------------|
| Will the vendor process personal data of EU residents? | Evaluate data controller/processor relationship | GDPR | EU |
| Will the vendor process personal data of UK residents? | Evaluate UK data controller/processor relationship | UK GDPR / DPA 2018 | UK |
| Will the vendor process personal data of California consumers? | Evaluate service provider / contractor role | CCPA / CPRA | US (California) |
| Will the vendor process sensitive personal data (GDPR art. 9)? | Enhanced assessment required, DPIA mandatory | GDPR | EU |
| Will the vendor process Protected Health Information (PHI)? | Business Associate Agreement required | HIPAA | US |
| Will the vendor transfer data outside the EEA? | Verify transfer mechanism (SCCs, adequacy, DPF) | GDPR (Chapter V) | EU |
| Will the vendor transfer data outside the UK? | Verify UK transfer mechanism (IDTA, UK SCCs Addendum) | UK GDPR / DPA 2018 | UK |
| Is the client an essential or important entity (NIS2)? | The vendor is part of the supply chain | NIS2 | EU |
| Is the client in a UK FCA-regulated financial sector? | Vendor is material outsourcing | FCA SS2/21 | UK |
| Is the client in an EU-regulated financial sector? | Vendor is critical ICT third-party | DORA | EU |
| Is the software critical IT infrastructure? | Enhanced security assessment required | NIS2 + NIST CSF | EU / US |
| Does the software incorporate AI components? | Classify risk level per AI Act | EU AI Act | EU |
| Does the AI make or assist decisions about people? | Possible high risk | EU AI Act (Annex III) | EU |
| Does the vendor process payment card data? | PCI DSS assessment required | PCI DSS v4.0 | Global |
| Does the client have US federal government contracts? | NIST CSF / SP 800-171 / CMMC required | NIST CSF | US (Federal) |
| Does the vendor require SOC 2 attestation? | Review Type I/II report | SOC 2 | US / Global |
| Is the client subject to Spanish ENS? | Evaluate applicable ENS category | ENS | Spain |

**Important:** If multiple screening questions yield "Yes" answers, the vendor assessment must address **ALL applicable checklists**. Many vendors operate across multiple jurisdictions and may be subject to overlapping or complementary regulatory regimes. Document each applicable regulation and its jurisdiction context in your risk assessment.

## Step 2: Gather Evidence

Collect compliance documentation and conduct vendor interviews to assess alignment with applicable regulations. Organize evidence by jurisdiction and regulatory framework.

### EU Regulations: GDPR, NIS2, DORA, EU AI Act, ENS

**For GDPR & UK GDPR:**
- Data Processing Agreement (DPA) / Standard Contractual Clauses (SCCs)
- Data Protection Impact Assessment (DPIA) results
- Details of subprocessors and data flows
- Data retention and deletion procedures
- Security incident response procedures
- Proof of GDPR/UK GDPR compliance (certifications, audits)

**For NIS2:**
- Risk management procedures
- Incident notification timelines
- Supply chain risk management documentation
- Backup and recovery capabilities
- Cybersecurity training evidence

**For DORA (Financial Sector):**
- ICT risk management framework
- Third-party risk assessment reports
- Concentration risk measures
- Incident reporting procedures

**For EU AI Act:**
- AI system inventory and documentation
- Risk classification assessment
- Training data provenance
- Bias and fairness testing results
- Human review procedures

**For ENS (Spain):**
- Security categorization (Nivel Básico, Medio, Alto)
- Technical security controls documentation
- Organizational security policies

### UK Regulations: UK GDPR / DPA 2018, FCA SS2/21

**For UK GDPR / DPA 2018:**
- Data Protection Agreement with UK-specific SCCs Addendum
- Records of processing activities
- Data subject rights procedures
- UK Information Commissioner's Office (ICO) guidance compliance
- Transfer mechanism documentation (IDTA, UK SCCs)

**For FCA SS2/21 (Financial Services):**
- Outsourcing policy and procedures
- Vendor concentration risk assessment
- Business continuity and resilience testing
- Exit strategy and contingency plans
- Regulatory reporting procedures

### US Regulations: HIPAA, CCPA/CPRA, NIST CSF/SP 800-171, CMMC

**For HIPAA:**
- Business Associate Agreement (BAA) or covered entity relationship documentation
- HIPAA security compliance attestation
- Breach notification procedures
- Privacy and security policies
- Encryption and access control measures

**For CCPA/CPRA:**
- Data processing addendum covering California requirements
- Service provider certification
- Opt-out mechanism compliance
- Data minimization practices
- Consumer rights fulfillment procedures

**For NIST CSF / SP 800-171:**
- NIST CSF assessment or implementation roadmap
- SP 800-171 compliance documentation
- Cybersecurity governance framework
- Incident detection and response capabilities
- System security plans

**For CMMC (if applicable):**
- Current or planned CMMC certification level
- Assessment methodology and maturity evidence
- Cybersecurity practices documentation

### Global Standards: PCI DSS, ISO 27001, SOC 2

**For PCI DSS v4.0:**
- PCI compliance scope statement
- Attestation of Compliance (AoC) or PCI assessment report
- Segmentation and tokenization evidence (if applicable)
- Encryption and key management documentation

**For ISO 27001 / ISO 20000 / ISO 22301:**
- Current certification status and expiry date
- Audit reports and non-conformance records
- Scope of certification alignment with vendor services
- Continuous improvement evidence

**For SOC 2:**
- Type I or Type II attestation report (preferably Type II)
- Audit scope and controls tested
- Management letters and observations
- Service Organization's control objectives

## Step 3: Risk Scoring Matrix

Assign risk scores (1-5 scale) for each applicable regulation based on evidence quality and vendor capability:

| Risk Level | Governance | Infrastructure | Compliance |
|-----------|-----------|----------------|-----------|
| **1 - Minimal** | Comprehensive documented policies; trained staff; audit-verified | Redundant systems; encrypted data; intrusion detection | Current certifications (ISO, SOC 2, NIST); no gaps |
| **2 - Low** | Clear policies; regular training; internal audits | Layered security; data protection controls | Recent audit evidence; minor findings |
| **3 - Moderate** | Policies in development; training scheduled; external audit planned | Basic security controls; encryption for sensitive data | Partial compliance; remediation plan in progress |
| **4 - High** | Inadequate or undocumented policies; limited training | Single point of failure; limited encryption | Significant compliance gaps; no remediation timeline |
| **5 - Critical** | No policies; no evidence of security culture | Minimal security controls; unencrypted sensitive data | Non-compliant; no path to compliance |

Calculate the average risk score across all applicable regulations. A vendor with multiple high-risk scores across different jurisdictions may require additional due diligence, contractual mitigations, or alternative sourcing.

## Step 4: Risk Mitigation & Contractual Controls

For vendors scoring 3 (Moderate) or higher on any applicable regulation:

**Contractual Mitigations:**
- Enhanced Data Processing Agreement with jurisdiction-specific protections
- Audit rights and compliance verification provisions
- Incident notification and breach response timelines
- Termination and data return/deletion procedures
- Financial penalties for material compliance breaches
- Third-party audit requirements and timelines

**Operational Mitigations:**
- Quarterly compliance review meetings
- Real-time access to security dashboards or SIEM alerts
- Annual third-party penetration testing
- Mandatory security training for vendor personnel
- Incident simulation and response drills
- Insurance requirements (cyber liability, professional indemnity)

**Technical Mitigations:**
- Network segmentation and VPN access requirements
- Multi-factor authentication enforcement
- Encryption at rest and in transit
- Data minimization and purpose limitation
- Automated log retention and forensics
- Backup and disaster recovery testing

## Step 5: Final Vendor Approval Decision

**Approve Vendor If:**
- All applicable regulations are identified and mapped
- Risk scores are ≤ 2 across all regulations, OR
- Risk scores of 3-4 are offset by strong contractual mitigations and management controls
- Management has accepted residual risk in writing

**Conditional Approval:**
- Risk scores of 3-4 on critical regulations require management sign-off and documented remediation roadmap
- Compliance timeline must be specified with quarterly checkpoints
- Enhanced monitoring (monthly reporting) is mandatory

**Reject or Re-source:**
- Any risk score of 5 (Critical) on applicable high-priority regulations (GDPR, HIPAA, NIST CSF)
- Multiple concurrent high-risk scores (3 or higher) across different jurisdictions without viable mitigation
- Vendor unwilling to sign required Data Processing Agreements or SLAs
- No path to compliance within acceptable timeframe (typically 6-12 months)

## Continuous Monitoring

Establish ongoing vendor compliance monitoring:
- **Monthly:** Incident and security alert review
- **Quarterly:** Compliance attestation and risk re-scoring
- **Annual:** Third-party audit or certification renewal verification
- **Ongoing:** Regulatory change tracking and impact assessment

## Related Skills

- Vendor Data Processing Agreement Templates (GDPR, UK GDPR, CCPA, HIPAA)
- NIS2 Supply Chain Risk Assessment
- DORA Third-Party Risk Management
- EU AI Act Risk Classification
- HIPAA Business Associate Agreement (BAA) Framework
- NIST CSF Implementation Guide
- PCI DSS v4.0 Scoping and Compliance
- ISO 27001 Audit Checklists
- SOC 2 Type II Report Evaluation

## Output Checklist

Upon completing a vendor risk assessment:

- [ ] All applicable jurisdictions identified
- [ ] All applicable regulations mapped to vendor scope
- [ ] Evidence gathered for each regulation
- [ ] Risk scores assigned (1-5 for each regulatory domain)
- [ ] Contractual mitigations documented (if applicable)
- [ ] Management sign-off obtained
- [ ] Monitoring schedule established
- [ ] Vendor contact and escalation procedures defined
- [ ] Assessment review date scheduled (typically annual or upon significant regulatory change)

---

**Last Updated:** February 2026  
**Status:** Active  
**Review Cycle:** Annual or upon regulatory change
