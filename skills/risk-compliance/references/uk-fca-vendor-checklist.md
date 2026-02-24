# UK FCA Vendor Outsourcing Checklist

## Context

The Financial Conduct Authority (FCA) and Prudential Regulation Authority (PRA) regulate outsourcing of IT and business services for authorized firms operating in the UK. This checklist applies when:

- **FCA-regulated firms** (investment firms, insurance firms, payment institutions, e-money institutions, credit institutions) outsource critical or important business functions to third-party IT vendors
- **Dual-regulated firms** (banks, building societies, insurers) are subject to both FCA and PRA requirements, which align under **SS2/21** (Supervisory Statement on Outsourcing and Third Party Risk Management)
- **Operational Resilience** requirements (PS21/3) apply to all FCA/PRA-regulated firms; critical third-party vendors must be assessed for business continuity and impact tolerance alignment
- **Cloud outsourcing** and **sub-outsourcing** to foreign vendors trigger enhanced FCA oversight and notification requirements
- **Concentration risk** arises when multiple critical services are sourced from a single vendor; FCA expects risk mitigation

Key regulations: **SYSC 8** (Senior Management Arrangements, Systems and Controls), **SS2/21**, **PS21/3**.

---

## SS2/21: Supervisory Statement on Outsourcing & Third-Party Risk Management

### Pre-Outsourcing Assessment Requirements

Before entering into outsourcing arrangements, conduct documented assessments:

- [ ] **Necessity & Efficiency Assessment (SS2/21 para 2.7)**: Firm validates that outsourcing is operationally and economically justified; documents why outsourcing is preferable to in-house delivery
- [ ] **Critical/Important Function Classification (SS2/21 para 2.4)**: Firm explicitly classifies the service as **Critical** (impacts compliance with FCA conditions, financial performance, reputation) or **Important** (impacts regulatory obligations, risk management)
- [ ] **Vendor Financial Stability Review (SS2/21 para 2.8)**: Firm assesses vendor's financial health, viability, and capacity to deliver over contract term; reviews publicly available financial statements or credit ratings
- [ ] **Regulatory Status Verification (SS2/21 para 2.9)**: Firm confirms whether vendor is FCA/PRA-regulated, or if sub-outsourcing to another regulated entity; foreign vendors require enhanced due diligence
- [ ] **Competence & Expertise Validation (SS2/21 para 2.10)**: Vendor demonstrates technical expertise, relevant experience, and qualified personnel for the service category
- [ ] **Data Protection & Security Baseline (SS2/21 para 2.11, SYSC 8.1)**: Vendor complies with GDPR/UK Data Protection Act 2018; demonstrates appropriate technical and organizational security measures (per ISO 27001 or equivalent)
- [ ] **Concentration Risk Mapping (SS2/21 para 5.1)**: Firm maps all services procured from this vendor; if multiple critical/important functions, documents risk mitigation strategy

**Red flag:** Firm cannot document which functions are critical or important, or vendor has no relevant experience in the service domain.

---

## SYSC 8: Outsourcing Requirements (FCA/PRA Rules)

### Contractual Requirements

All outsourcing arrangements must include documented contractual terms covering:

- [ ] **SYSC 8.1.1R**: Outsourcing agreement is in writing and includes terms necessary to comply with FCA/PRA requirements
- [ ] **SYSC 8.1.2R – Compliance Obligation**: Vendor must comply with all applicable regulatory requirements; firm retains ultimate responsibility for compliance
- [ ] **SYSC 8.1.3R – Audit Rights (SS2/21 para 3.2)**: Firm has the right to audit vendor on-site, request audit reports, review internal controls, and verify compliance with contractual terms; vendor may not delegate this right without firm's prior written consent
- [ ] **SYSC 8.1.4R – Access Rights (SS2/21 para 3.3)**: Firm's regulators (FCA, PRA, Bank of England) have the right to access vendor premises, systems, records, and personnel for regulatory examination; vendor must cooperate and grant access without delay
- [ ] **SYSC 8.1.5R – Confidentiality (SS2/21 para 3.4)**: Vendor maintains confidentiality of firm's data and client information; vendor and subvendors commit to equivalent confidentiality obligations
- [ ] **SYSC 8.1.6R – Handling of Data**: Vendor processes personal and confidential data in accordance with contract; firm specifies data location, handling procedures, and retention rules
- [ ] **SYSC 8.1.7R – Termination & Exit Planning (SS2/21 para 3.6, 4.3)**: Contract includes exit arrangements permitting firm to terminate with reasonable notice (typically 3–6 months); vendor commits to returning/destroying all firm data and facilitating smooth transition or migration to alternative vendor

**Red flag:** Vendor refuses audit rights, blocks regulator access, or has no documented exit plan.

---

## Operational Resilience: Third-Party Impact Tolerance Alignment

### PS21/3 Requirements (Impact Tolerance & Business Continuity)

All FCA-regulated firms must establish "impact tolerance" for Important Business Services (IBS). Third-party vendors supporting IBS must align with impact tolerance:

- [ ] **IBS Definition (PS21/3 para 2.1–2.3)**: Firm identifies which services depend on the vendor; classifies as IBS if disruption would exceed firm's defined impact tolerance (e.g., hours/days of financial loss, client impact, regulatory breach)
- [ ] **Impact Tolerance Metrics (PS21/3 para 3.1)**: Firm specifies quantitative thresholds (e.g., service degradation >4 hours = breach); vendor understands these metrics and impact tolerance levels
- [ ] **Availability & RTO/RPO Alignment (SS2/21 para 4.1)**: Vendor's recovery time objective (RTO) and recovery point objective (RPO) are documented; vendor demonstrates that RTO/RPO do not breach firm's impact tolerance
- [ ] **Testing & Validation (PS21/3 para 4.2)**: Firm and vendor conduct at least annual disaster recovery and business continuity tests; results demonstrate vendor can recover within RTO/RPO
- [ ] **Concentration Risk – Single Points of Failure (PS21/3 para 5.1, SS2/21 para 5.1)**: If vendor is sole provider for critical service, firm has documented contingency or alternative (e.g., parallel vendor, in-house fallback); dual-vendor strategy reduces concentration risk
- [ ] **Notification Obligation (PS21/3 para 6.2)**: Vendor commits to notifying firm of service disruptions, outages, or significant incidents within 1 hour of detection; provides status updates every 30 minutes during incident

**Red flag:** Vendor cannot meet firm's RTO/RPO or refuses to commit to notification timelines.

---

### Business Continuity & Disaster Recovery (BC/DR)

- [ ] **BC/DR Plan Documentation (SS2/21 para 4.1)**: Vendor maintains a documented BC/DR plan covering equipment failure, facility loss, malicious acts, staff unavailability, or data loss
- [ ] **Geographic Redundancy (SS2/21 para 4.2)**: Vendor maintains geographically diverse data centers or processing sites; ensures failover location is sufficiently distant to avoid correlated failures
- [ ] **Backup Frequency (SS2/21 para 4.3)**: Vendor backs up data on a schedule that supports agreed RTO/RPO; documents backup testing and restoration procedures
- [ ] **Recovery Procedures (SS2/21 para 4.4)**: Vendor can demonstrate step-by-step recovery procedures; staff are trained and tested; third-party dependencies (e.g., cloud providers, ISPs) have equivalent BC/DR commitments
- [ ] **Testing Evidence (SS2/21 para 4.5)**: Vendor provides evidence of annual (or more frequent) BC/DR tests; results confirm recovery objectives are achievable

---

## Critical vs. Important Outsourcing: Enhanced Requirements

### Critical Outsourcing Arrangements (SS2/21 Section 2)

Services classified as **Critical** require heightened governance and oversight:

- [ ] **CRAR Notification (SS2/21 para 1.7)**: Firm notifies FCA/PRA of critical outsourcing arrangements; provides summary of service, vendor identity, jurisdiction, and key terms
- [ ] **Enhanced Due Diligence (SS2/21 para 2.10–2.12)**: Firm conducts in-depth assessment of vendor's financial stability, regulatory status, security practices, and capacity
- [ ] **Enhanced Monitoring (SS2/21 para 3.5)**: Firm maintains ongoing monitoring of vendor performance, compliance, and security posture; reviews key metrics (uptime, incident logs, vulnerability assessments) quarterly or more frequently
- [ ] **Senior Management Oversight (SYSC 8.1.8R)**: Firm's Senior Management Function (e.g., Chief Risk Officer, CTO) oversees critical outsourcing relationships; attends vendor steering committees or quarterly business reviews
- [ ] **Audit & Inspection Rights (SS2/21 para 3.2–3.3)**: Firm conducts on-site audits at least annually; FCA/PRA reserves right to conduct examinations or on-site inspections without notice

### Important Outsourcing Arrangements (SS2/21 Section 2)

Services classified as **Important** require documented contractual controls but less frequent on-site oversight:

- [ ] **Documentation & Governance (SS2/21 para 2.5–2.6)**: Firm documents the outsourcing arrangement; establishes governance procedures for performance monitoring and issue escalation
- [ ] **Annual Audit/Review (SS2/21 para 3.1)**: Firm conducts at least annual audit or compliance review; reviews audit reports from vendor's internal audit or external auditor (Big 4 or equivalent)
- [ ] **Regulatory Notification (SS2/21 para 1.7)**: Firm may notify FCA/PRA of important arrangements; not mandatory but recommended for material services

**Red flag:** Firm classifies a critical service as "important" to avoid regulatory oversight; vendor is unaware of classification and associated SLA/performance expectations.

---

## Sub-Outsourcing & Supply Chain Management

### Sub-Outsourcing Notification (SS2/21 para 2.2–2.3, SYSC 8.1.9R)

If vendor intends to sub-outsource part of the service to another third party:

- [ ] **Prior Written Consent (SYSC 8.1.9R)**: Vendor must obtain firm's prior written consent before sub-outsourcing; consent cannot be delegated to another party without firm's agreement
- [ ] **Sub-Vendor Due Diligence (SS2/21 para 2.10)**: Vendor conducts equivalent due diligence on sub-vendors; ensures sub-vendor meets the same security, regulatory, and competence standards as primary vendor
- [ ] **Sub-Vendor Visibility (SS2/21 para 3.7)**: Firm is provided visibility into sub-vendor identity, jurisdiction, and control measures; firm can request audit rights over sub-vendors
- [ ] **Contractual Chain (SS2/21 para 2.11)**: Sub-vendor's contract includes equivalent terms for data protection, confidentiality, audit rights, and regulatory access
- [ ] **Notification of Changes (SS2/21 para 3.8)**: Vendor notifies firm immediately of any changes to sub-vendors or outsourcing arrangements; firm approves material changes before implementation

**Red flag:** Vendor has made sub-outsourcing arrangements without firm consent or refuses to identify sub-vendors.

---

## FCA Regulatory Reporting & Register

### Register of Outsourcing Arrangements (SS2/21 para 1.4–1.7)

Firms must maintain a register of all outsourcing arrangements:

- [ ] **Register Maintenance**: Firm maintains a documented register (spreadsheet, database) of all critical and important outsourcing arrangements; includes vendor name, service description, jurisdiction, contract start/end date, SLAs
- [ ] **Regulatory Reporting**: Firm provides register summaries to FCA/PRA upon request; FCA may ask for details of specific outsourcing arrangements during regulatory visits
- [ ] **Documentation Retention**: Firm retains all outsourcing agreements, audits, and performance records for minimum 6 years (or per applicable data retention rules)
- [ ] **Change Log**: Firm maintains change log recording new arrangements, terminations, and material contract amendments

---

## Intragroup Outsourcing

Even if outsourcing is to a related company within the group, FCA requirements apply:

- [ ] **Equivalent Assessment (SS2/21 para 1.3)**: Firm applies equivalent due diligence, contractual controls, and monitoring to intragroup arrangements as to external vendors
- [ ] **Regulatory Access (SS2/21 para 3.3)**: Group entity must permit FCA/PRA access for regulatory examinations; parent company cannot block regulator access
- [ ] **Service Level Agreements (SS2/21 para 3.1)**: Even for internal arrangements, firm documents SLAs and performance metrics; monitors compliance
- [ ] **Independence**: Group company must not be so financially interconnected that its failure directly causes firm's failure; assess concentration risk at group level

---

## Concentration Risk Assessment

If a single vendor provides multiple critical or important services:

- [ ] **Risk Mapping (SS2/21 para 5.1)**: Firm lists all services provided by vendor; identifies correlated failure risk (e.g., single vendor operating all IT infrastructure, all software development, all cybersecurity monitoring)
- [ ] **Mitigation Strategy (SS2/21 para 5.2)**: Firm documents mitigation (e.g., geographic separation, redundant vendors for critical services, insurance, financial covenants)
- [ ] **Stress Testing (SS2/21 para 5.3)**: Firm includes vendor failure scenarios in stress tests; evaluates impact on firm resilience and regulatory compliance if vendor fails
- [ ] **Exit Plan (SS2/21 para 4.3)**: Firm documents plan to migrate away from vendor or transition services to alternative vendor; includes estimated timeline and costs

**Red flag:** Vendor provides 70%+ of IT infrastructure and firm has no backup vendor or migration plan.

---

## Cloud Outsourcing & Foreign Vendor Requirements

### FCA Final Guidance on Cloud & Third-Party IT Outsourcing (FG16/5 updated)

Cloud vendors and foreign IT service providers require enhanced governance:

- [ ] **Data Location & Jurisdiction (FG16/5 para 3.1)**: Vendor specifies where firm data is stored and processed (UK, EU, US, other); firm confirms acceptable jurisdiction and applicable data protection laws
- [ ] **Regulatory Oversight in Vendor Jurisdiction (FG16/5 para 3.2)**: Vendor must be subject to effective regulatory oversight in its home jurisdiction; FCA assesses whether home regulator provides equivalent protections (e.g., US federal banking regulators for US cloud providers)
- [ ] **Law Enforcement Access (FG16/5 para 3.3)**: Vendor discloses risk that law enforcement in vendor's jurisdiction may access firm data; vendor commits to notifying firm if disclosed (to extent legally permissible)
- [ ] **Encryption & Key Management (FG16/5 para 3.4)**: Vendor uses encryption for data at rest and in transit; firm controls encryption keys or retains ability to do so; vendor does not hold sole access to firm's encrypted data
- [ ] **Subprocessor Controls (FG16/5 para 3.5)**: Vendor identifies all subprocessors and their jurisdictions; firm can audit subprocessor security and data handling practices
- [ ] **Exit Strategy for Cloud Migration (FG16/5 para 4.1)**: Vendor can export firm data in standard formats (CSV, JSON, API exports) on termination; does not require expensive custom development to migrate away from vendor

**Red flag:** Cloud vendor refuses to disclose data location, blocks customer-controlled encryption, or has no documented data export capability.

---

## Data Protection & GDPR Compliance

### Data Processing Agreements (DPA)

- [ ] **DPA in Place (SYSC 8.1.1R, GDPR Art. 28)**: Vendor as data processor has executed a Data Processing Agreement (DPA) with firm as data controller
- [ ] **Standard Clauses**: DPA includes Standard Contractual Clauses (SCCs) if vendor is outside UK/EEA; covers adequacy decisions and data transfer mechanisms
- [ ] **Personnel Confidentiality (GDPR Art. 28.3.b)**: All vendor personnel with access to personal data commit to confidentiality (employment contracts, NDAs)
- [ ] **Sub-processor Notification (GDPR Art. 28.2, 28.4)**: Vendor notifies firm of any changes to sub-processors; firm can object to new sub-processors
- [ ] **Data Subject Rights (GDPR Art. 28.3.e)**: Vendor assists firm in responding to data subject requests (access, deletion, portability); vendor can produce data extracts for individual rights requests

---

## PRA Coordination & Dual-Regulated Firms

If firm is regulated by both FCA and PRA (e.g., bank):

- [ ] **SS2/21 Applies to Both (SS2/21 para 1.1)**: Requirements apply uniformly to PRA-regulated activities and FCA-regulated activities; single assessment framework
- [ ] **PRA-Specific Escalation (SYSC 3.1.17R)**: Critical outsourcing arrangements affecting prudential stability (capital management, liquidity risk, operational risk) require escalation to firm's Senior Management; PRA expects notification
- [ ] **Financial Stability Risks (SS2/21 para 2.8)**: For PRA-regulated firms, vendor financial viability is heightened concern; if vendor failure could affect firm's solvency, PRA expects enhanced monitoring

---

## Monitoring & Performance Management

### Ongoing Vendor Oversight

- [ ] **KPIs & SLA Tracking (SS2/21 para 3.1)**: Firm monitors vendor performance against agreed service level agreements; tracks key metrics (uptime, incident response time, security incidents, audit findings)
- [ ] **Quarterly Business Reviews (SS2/21 para 3.5)**: Firm meets with vendor management (at least quarterly for critical services) to review performance, incidents, and remediation actions
- [ ] **Annual Audit (SS2/21 para 3.2)**: Firm (or external auditor) conducts annual on-site audit or compliance review; documents audit findings and agreed remediation timelines
- [ ] **Incident Reporting (SS2/21 para 3.6)**: Vendor commits to reporting security incidents, outages, and breaches within defined timeframes (typically 24–48 hours); firm escalates material incidents to FCA/PRA if required
- [ ] **Regulatory Examination Readiness (SS2/21 para 3.3)**: Firm ensures vendor is prepared for FCA/PRA on-site examinations; vendor designates compliance contact and maintains audit evidence

**Red flag:** Vendor refuses on-site audits or has not been audited in >18 months.

---

## Penalties & FCA Enforcement

### FCA Authority & Remediation

- [ ] **Breach of SYSC 8 (FCA Handbook)**: FCA can impose unlimited fines for outsourcing rule violations; historically imposed fines of £5M–£20M+ for poor vendor governance
- [ ] **Remediation Orders**: FCA can require firm to implement enhanced controls, conduct vendor re-assessment, or terminate vendor arrangements if risks are unmitigated
- [ ] **Restricted Permissions**: FCA can restrict or remove firm's FCA permissions (e.g., suspend ability to manage client funds) if outsourcing governance is inadequate
- [ ] **Director Accountability**: Firm's Senior Management Functions (e.g., Chief Risk Officer, Chief Operating Officer) are personally accountable for outsourcing governance; FCA holds individuals accountable under Senior Managers Regime (SMR)

**Notable FCA Cases**:
- **Barclays Bank (2019)**: £26M fine for inadequate outsourcing oversight of cloud vendor
- **NatWest (2020)**: £264M fine for AML/KYC failures linked to outsourced transaction monitoring
- **UBS Switzerland AG (2023)**: Regulatory escalation over Credit Suisse outsourcing risks (led to crisis)

---

## Evidence Expectations

For each critical or important outsourcing arrangement, firm should maintain:

1. **Vendor Assessment Report** (pre-outsourcing): Due diligence findings, regulatory status, financial stability, security baseline
2. **Outsourcing Agreement**: Signed contract with all SYSC 8 / SS2/21 required terms
3. **Data Processing Agreement (DPA)**: Executed DPA with Standard Contractual Clauses if applicable
4. **Service Level Agreement (SLA)**: Documented RTO/RPO, uptime targets, performance metrics, incident notification timelines
5. **Annual Audit / Compliance Review**: On-site audit report or external audit (SOC 2 Type II, ISO 27001) covering controls relevant to firm's service
6. **BC/DR Test Results**: Evidence of annual disaster recovery test; recovery timelines confirmed
7. **Incident Log**: Vendor-provided log of security incidents, outages, and resolutions for past 12–24 months
8. **Regulatory Correspondence**: Any correspondence with FCA/PRA regarding vendor; letters, examination findings, remediation responses

---

## References

- **SS2/21: Supervisory Statement on Outsourcing and Third Party Risk Management**: https://www.fca.org.uk/publication/supervisory-statements/ss21-21.pdf
- **SYSC 8 (FCA Handbook)**: https://www.handbook.fca.org.uk/handbook/SYSC/8/
- **PS21/3: Operational Resilience (Important Business Services)**: https://www.bankofengland.co.uk/prudential-regulation/publication/2021/march/operational-resilience
- **FG16/5: Cloud Outsourcing Guidance**: https://www.fca.org.uk/publication/finalised-guidance/fg16-5.pdf
- **GDPR UK Data Protection Act 2018**: https://ico.org.uk/for-organisations/data-protection-act-2018/
- **FCA Handbook (SYSC, glossary)**: https://www.handbook.fca.org.uk/handbook/
- **PRA Handbook**: https://www.bankofengland.co.uk/prudential-regulation/
- **ICAEW / External Audit Standard**: Audit committees should ensure external auditors assess third-party risks
