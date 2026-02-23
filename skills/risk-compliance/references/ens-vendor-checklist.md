# ENS Vendor Checklist
## Esquema Nacional de Seguridad (Spanish Public Sector Security Framework)

**Regulatory Basis:** RD 311/2022, modified by RD 102/2024
**Applicable to:** Spanish public administration and their IT service providers
**Scope:** EU-funded projects and initiatives involving Spanish public entities
**Type:** OPTIONAL sectoral checklist for Spanish government agencies

---

## Overview of ENS Framework

The National Security Scheme (Esquema Nacional de Seguridad) establishes mandatory security requirements for Spanish public administrations and their IT service providers.

**Key principle:** Information security is an integral part of public service quality.

---

## System Categorization and Vendor Requirements

ENS classifies systems into three security categories. Vendor requirements scale with system category.

### BASIC Category

**Definition:** Systems with low impact if compromised. Loss of confidentiality, integrity, or availability would have minimal impact.

**Vendor Security Requirements:**
- [ ] Basic password policies (minimum 8 characters, complexity)
- [ ] User access control and authentication mechanisms
- [ ] Security awareness training for all staff
- [ ] Basic antivirus/malware protection
- [ ] Document backup procedures
- [ ] Incident reporting capability
- [ ] Vendor signs security agreement/contract
- [ ] Basic physical security (locked server rooms)

**Evidence Required:**
- [ ] Written security policies
- [ ] Training certificates for personnel
- [ ] Backup test results
- [ ] Antivirus deployment confirmation

### MEDIUM Category

**Definition:** Systems with moderate impact if compromised. Loss of service or data would significantly affect operations or impact multiple users.

**Vendor Security Requirements:**
- [ ] **Access Control:** Role-based access control (RBAC) implemented
- [ ] **Authentication:** Multi-factor authentication for administrative access
- [ ] **Encryption:** Encryption of sensitive data in transit (TLS 1.2+)
- [ ] **Audit Trails:** Comprehensive logging of all administrative actions
- [ ] **Incident Management:** Formal incident response procedures and documentation
- [ ] **Security Policy:** Written, documented security policy aligned with ENS
- [ ] **Patch Management:** Regular security patching schedule
- [ ] **Change Management:** Formal change control procedures
- [ ] **Vulnerability Assessment:** Annual security assessment or scan
- [ ] **Data Classification:** System to classify and protect data by sensitivity
- [ ] **Business Continuity:** Documented backup and recovery procedures
- [ ] **Awareness Training:** Annual security training for all staff
- [ ] **Vendor Subcontracting:** Approval process for subcontractors; flow-down of requirements

**Evidence Required:**
- [ ] Current security audit report or assessment (within 12 months)
- [ ] Incident management procedures documentation
- [ ] User access logs (sample audit trail)
- [ ] Change management records (sample)
- [ ] Backup verification documentation
- [ ] ENS compliance statement or certificate

### HIGH Category

**Definition:** Systems with high impact if compromised. Compromise would severely disrupt essential government services or affect large populations.

**Vendor Security Requirements (includes all MEDIUM requirements plus):**
- [ ] **Advanced Monitoring:** 24/7 security monitoring and alert capability
- [ ] **Intrusion Detection:** IDS/IPS systems deployed and actively monitored
- [ ] **Encryption:** End-to-end encryption of all sensitive data
- [ ] **Key Management:** Formal cryptographic key management procedures
- [ ] **Penetration Testing:** Annual or biennial penetration testing by external firm
- [ ] **Security Scanning:** Quarterly vulnerability scans and remediation
- [ ] **DLP (Data Loss Prevention):** Systems to detect and prevent data exfiltration
- [ ] **Advanced Authentication:** Multi-factor authentication mandatory
- [ ] **Network Segmentation:** Critical systems isolated on separate network segments
- [ ] **BCP/DR:** Tested Business Continuity and Disaster Recovery plan
- [ ] **RTO/RPO:** Defined and tested Recovery Time/Point Objectives
- [ ] **Redundancy:** Geographic redundancy and failover mechanisms
- [ ] **Data Classification Enforcement:** Technical controls enforcing data sensitivity classification
- [ ] **Security Architecture Review:** Independent security architecture review completed
- [ ] **Threat Intelligence:** Integration with threat intelligence feeds
- [ ] **Compliance Audit:** Annual independent SOC 2 Type II or equivalent audit
- [ ] **Personnel Security:** Background checks for all staff with system access
- [ ] **Supply Chain Security:** Assessment of vendor's vendors (subcontractor security)

**Evidence Required:**
- [ ] SOC 2 Type II report or equivalent (within 12 months)
- [ ] Penetration test report (recent, from accredited firm)
- [ ] Quarterly vulnerability scan results
- [ ] Tested BCP/DR procedures and test results
- [ ] High security assessment report
- [ ] Network security architecture documentation
- [ ] Security monitoring logs and incident response examples

---

## Key Security Dimensions (Art. 43)

All vendors must address these five security dimensions appropriate to their category:

### 1. Availability
- [ ] System uptime SLA defined (e.g., 99.9%)
- [ ] Redundancy measures documented
- [ ] Backup and recovery procedures tested
- [ ] Disaster recovery plan in place
- [ ] Incident response time targets specified

### 2. Authenticity
- [ ] User authentication mechanisms implemented
- [ ] Digital signatures where applicable
- [ ] Non-repudiation controls in place
- [ ] Access credentials management procedures

### 3. Integrity
- [ ] Data integrity controls implemented
- [ ] Tamper detection mechanisms
- [ ] Checksum/hash verification procedures
- [ ] Audit trails maintained

### 4. Confidentiality
- [ ] Data encryption (at rest and in transit)
- [ ] Access control to sensitive data
- [ ] Classified information handling procedures
- [ ] Confidentiality agreements with personnel

### 5. Traceability (Audit Trail)
- [ ] Comprehensive logging of all access
- [ ] Administrator action logs maintained
- [ ] Log integrity protected (tamper-evident)
- [ ] Logs retained per legal requirements (typically 12 months minimum)
- [ ] Log analysis procedures in place

---

## ENS Compliance Verification

### How to Assess Vendor ENS Compliance

**For BASIC and MEDIUM categories:**
- [ ] Request vendor's ENS compliance statement
- [ ] Review security documentation (policies, procedures)
- [ ] Conduct on-site security assessment (optional but recommended)
- [ ] Verify compliance with CCN-STIC guidelines

**For HIGH category:**
- [ ] Require vendor to provide ENS certification or equivalent
- [ ] Request independent audit report (SOC 2 Type II or equivalent)
- [ ] Conduct comprehensive security assessment
- [ ] Technical security review by qualified assessor
- [ ] Continuous monitoring agreement in place

### CCN-STIC Guidelines Compliance

The Cybersecurity Centre of the Spanish National Authority (CCN) publishes technical guidelines. Key relevant guidelines:

- [ ] **CCN-STIC 823:** Cloud Services Security (if cloud-based)
- [ ] **CCN-STIC 400:** Linux Server Security Baseline
- [ ] **CCN-STIC 000:** Information Security Governance
- [ ] **CCN-STIC 819:** Mobile Device Management (if applicable)
- [ ] **CCN-STIC 805:** Secure Software Development

Vendor compliance checklist:
- [ ] Vendor acknowledges applicable CCN-STIC guidelines
- [ ] Vendor's security architecture aligns with guidelines
- [ ] Evidence provided for guideline compliance
- [ ] Regular updates to align with new guideline versions

---

## Cloud Service Requirements

If vendor provides cloud services, additional requirements apply:

### LISTA Certification (CCN Qualified Cloud Services)

**What is LISTA?**
The LISTA is the official catalogue of cloud services approved by the Spanish government (CCN). Only LISTA-certified cloud services may be used for:
- [ ] Public administration systems
- [ ] Processing Spanish public data
- [ ] EU-funded projects involving Spanish entities

**Vendor Cloud Checklist:**
- [ ] Cloud service on LISTA catalogue? **YES / NO**
- [ ] LISTA certification current (not expired)?
- [ ] Data residency within EU (typically Spain)?
- [ ] Service level agreements meet public sector requirements?
- [ ] Data sovereignty guaranteed (Spain/EU only)?
- [ ] Audit rights include CCN inspectors?
- [ ] Service location and backup location documented?

**If NOT on LISTA:**
- [ ] Can equivalently strict security assessment justify exception?
- [ ] Is formal exception approved by IT governance body?
- [ ] Is timeline in place for LISTA certification or alternative?

### Cloud-Specific Security Checklist

- [ ] Vendor assumes responsibility for cloud infrastructure security
- [ ] Multi-tenancy isolation verified and tested
- [ ] Encryption keys managed by your organization (not vendor)
- [ ] Data encryption in transit (TLS 1.2+) mandatory
- [ ] Data encryption at rest using strong algorithms
- [ ] Separation of duty between vendor's infrastructure and your data
- [ ] No cross-tenant data access possible
- [ ] Documented data location (physical jurisdiction)
- [ ] Exit procedures for data recovery specified
- [ ] Subprocessor approval process in place
- [ ] Regular security testing (penetration, vulnerability scans)

---

## Vendor Certification Verification Process

### Step 1: Initial Vendor Screening
- [ ] Request vendor's ENS compliance status/certification
- [ ] If certified, verify current certification validity
- [ ] Obtain copy of certification or audit report

### Step 2: Review Security Documentation
- [ ] Security policies and procedures (sample review)
- [ ] Incident response plan
- [ ] Business continuity/disaster recovery plan
- [ ] Personnel security requirements
- [ ] Subcontractor management procedures

### Step 3: Technical Assessment
- [ ] Review system architecture documentation
- [ ] Verify encryption standards (TLS 1.2+, strong algorithms)
- [ ] Confirm access control mechanisms
- [ ] Review audit logging capabilities
- [ ] Assess monitoring and detection capabilities

### Step 4: On-Site Inspection (for MEDIUM/HIGH)
- [ ] Physical security inspection
- [ ] System access controls verification
- [ ] Backup and recovery capability review
- [ ] Incident response procedure walkthrough
- [ ] Personnel interviews regarding security procedures

### Step 5: Audit and Ongoing Verification
- [ ] Annual or biennial audit/assessment scheduled
- [ ] Quarterly or annual SLA review
- [ ] Incident logs reviewed
- [ ] Vulnerability assessment results reviewed
- [ ] Compliance status updated in vendor register

---

## Interplay with GDPR and NIS2

### Relationship to GDPR
- [ ] GDPR applies to all personal data processing
- [ ] ENS security requirements complement GDPR technical safeguards
- [ ] Data Protection Impact Assessment (DPIA) required for high-risk processing
- [ ] Data Processing Agreements must include ENS compliance references
- [ ] Breach notification timelines (72-hour GDPR, 24-hour incident reporting to administration)

### Relationship to NIS2 Directive
- [ ] NIS2 applies to critical infrastructure operators
- [ ] Spanish administrations classified as "important entities" under NIS2
- [ ] ENS requirements align with NIS2 Article 21 (security measures)
- [ ] Incident reporting: AEPD (GDPR), CCNE (NIS2), Administration (ENS)
- [ ] Overlapping vendor requirements: ENS is more specific for public sector

---

## Documentation and Evidence Checklist

### Pre-Contracting
- [ ] System category determined (BASIC/MEDIUM/HIGH)
- [ ] Vendor ENS compliance requirements defined
- [ ] Security assessment plan created
- [ ] Vendor capability assessment completed
- [ ] LISTA certification verified (if cloud)

### Contracting
- [ ] Security requirements documented in contract
- [ ] SLAs include availability, RTO, RPO targets
- [ ] Audit and inspection rights included
- [ ] Incident reporting obligations specified
- [ ] Compliance certification/evidence requirements defined
- [ ] Subcontracting approval process documented

### Post-Contracting
- [ ] Vendor security assessment/audit completed
- [ ] Baseline compliance status documented
- [ ] Audit schedule established
- [ ] Compliance monitoring procedure implemented
- [ ] Incident reporting procedures communicated
- [ ] Annual review scheduled

### Ongoing Management
- [ ] Quarterly SLA compliance review
- [ ] Annual security assessment/audit
- [ ] Incident logs maintained
- [ ] Certification validity tracked
- [ ] Changes in vendor security posture documented
- [ ] Updates to compliance requirements communicated

---

## Summary: Vendor Requirements by Category

| Requirement | BASIC | MEDIUM | HIGH |
|------------|-------|--------|------|
| Written Security Policy | Partial | Yes | Yes |
| Authentication (MFA) | No | Recommended | Mandatory |
| Encryption (data in transit) | No | Yes | Yes |
| Encryption (data at rest) | No | Recommended | Yes |
| Audit Trails | Basic | Comprehensive | Comprehensive |
| Incident Management | Basic | Formal | Formal + Advanced |
| Vulnerability Assessment | No | Annual | Quarterly |
| Penetration Testing | No | No | Annual/Biennial |
| Independent Audit | No | Optional | SOC 2 Type II/Equivalent |
| 24/7 Monitoring | No | No | Yes |
| BCP/DR Testing | Basic | Yes | Yes + Verified |
| Security Training | Basic | Annual | Annual + Advanced |
| Data Classification | No | Yes | Technical Enforcement |
| LISTA Certification (if cloud) | N/A | Preferred | Mandatory |

---

## Key Takeaways

1. **Categorize first:** Determine system category before assessing vendors
2. **Match requirements:** Vendor security requirements scale with system category
3. **Verify compliance:** Request evidence of security policies and compliance
4. **LISTA for cloud:** Cloud services must be on LISTA or equivalent
5. **Audit regularly:** Annual assessments for MEDIUM, continuous monitoring for HIGH
6. **Document everything:** Maintain compliance evidence and assessment records
7. **Align with GDPR/NIS2:** Ensure vendor meets overlapping regulatory obligations
8. **Subcontractor flow-down:** Ensure vendors' vendors meet same requirements

---

**Last Updated:** February 2026
**Reference Documents:** RD 311/2022, RD 102/2024, CCN Security Guidelines
**Next Review:** February 2027
