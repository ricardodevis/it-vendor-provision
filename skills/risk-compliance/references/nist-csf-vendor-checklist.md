# NIST Cybersecurity Framework 2.0 Vendor Checklist

## Context

The NIST Cybersecurity Framework (CSF) 2.0 applies to your vendor assessment in the following scenarios:

- **US Federal Contractors & Defense Supply Chain**: Organizations subject to DFARS (Defense Federal Acquisition Regulation Supplement) clauses must ensure vendors meet NIST SP 800-171 Rev 2/3 for handling Controlled Unclassified Information (CUI)
- **Executive Branch Agencies**: Federal agencies require contractors and cloud service providers to follow NIST guidelines
- **CMMC 2.0 Certification**: Defense industrial base vendors must achieve CMMC Level 1–3 depending on CUI exposure
- **FedRAMP Baseline Compliance**: Cloud vendors serving federal agencies must align with NIST SP 800-53 (Low/Moderate/High baselines)
- **Voluntary Adoption**: Organizations in critical infrastructure, healthcare, finance, or high-risk sectors increasingly adopt NIST CSF to demonstrate security maturity

NIST CSF 2.0 (released February 2024) organizes governance and cybersecurity activities into six functions. This checklist focuses on vendor-facing categories and outcomes.

## NIST CSF 2.0 Functions & Vendor Assessment

### GOVERN: Organizational Context & Risk Management

Vendors must demonstrate governance structures aligned with their risk exposure.

- [ ] **GV.RO-01**: Vendor maintains documented policies for cybersecurity roles, responsibilities, and accountability (reference: NIST CSF 2.0 GOVERN > GV.RO)
- [ ] **GV.RM-01**: Vendor conducts annual cybersecurity risk assessments and shares summary findings or risk tolerance statements
- [ ] **GV.RM-02**: Vendor's incident response and business continuity plans address critical services provided to your organization
- [ ] **GV.SC-01**: Vendor contractually commits to supply chain security vetting of its subvendors and critical dependencies
- [ ] **GV.SC-02**: Vendor maintains awareness of threats specific to your industry and their supply chain (third-party advisories, threat intelligence)

**Red flag:** Vendor cannot name its cybersecurity governance owner or refuses to share any risk assessment results.

---

### IDENTIFY: Asset & Risk Discovery

Vendors must know what they protect and understand dependencies that affect your environment.

- [ ] **ID.AM-01**: Vendor maintains an asset inventory (hardware, software, cloud services, data repositories) and maps critical assets that support your services
- [ ] **ID.AM-02**: Vendor identifies and documents external dependencies (subvendors, cloud providers, API integrations) that are in the chain for your service delivery
- [ ] **ID.AM-03**: Vendor classifies data in scope for your engagement (PII, financial data, trade secrets, CUI if applicable) and documents its location and retention periods
- [ ] **ID.RA-01**: Vendor conducts threat and vulnerability assessments covering systems that host or process your data
- [ ] **ID.RA-02**: If handling CUI or controlled data, vendor explicitly confirms alignment with data classification and sensitivity levels per your contract

**Red flag:** Vendor cannot describe how your data flows through their systems or where it is stored.

---

### PROTECT: Access, Encryption & Data Safeguards

Vendors must implement controls commensurate with the sensitivity of data in scope.

- [ ] **PR.AC-01**: Vendor enforces least-privilege access controls (role-based, attribute-based) and reviews user entitlements quarterly
- [ ] **PR.AC-02**: Vendor uses multi-factor authentication (MFA) for administrative and remote access; enforces MFA for your tenant/account (if applicable)
- [ ] **PR.AC-03**: Vendor implements endpoint detection and response (EDR) or equivalent host-based monitoring for systems in scope
- [ ] **PR.AC-04**: If handling CUI or regulated data, vendor enforces encryption at rest (AES-256 minimum) and in transit (TLS 1.2+)
- [ ] **PR.DS-01**: Vendor maintains data backup/recovery capabilities; documents recovery time objective (RTO) and recovery point objective (RPO)
- [ ] **PR.DS-02**: Vendor has a data handling policy covering retention, deletion, and media sanitization; provides evidence of destruction upon contract termination
- [ ] **PR.MA-01**: Vendor performs security patching for OS, applications, and firmware on a documented schedule; provides patch status upon request
- [ ] **PR.PT-01**: Vendor has removable media controls and prevents unauthorized downloads/uploads; logs data transfer events

**Red flag:** Vendor uses unencrypted data transmission or refuses to enable MFA for your account.

---

### DETECT: Monitoring & Threat Detection

Vendors must monitor for and respond to suspicious activity within your service.

- [ ] **DE.AE-01**: Vendor monitors system and application logs, detects anomalies, and investigates security events
- [ ] **DE.AE-02**: Vendor maintains a real-time alerting capability for high-severity events and notifies you within contractually defined timeframes (e.g., 4–24 hours)
- [ ] **DE.CM-01**: Vendor scans applications and systems for vulnerabilities; uses CVSS scores to prioritize remediation
- [ ] **DE.CM-02**: Vendor monitors network traffic for intrusions or data exfiltration attempts (IDS/IPS or equivalent)
- [ ] **DE.DP-01**: Vendor can demonstrate detection and response procedures through tabletop exercises or incident logs

**Red flag:** Vendor has no security monitoring or logs or refuses to share detection capabilities.

---

### RESPOND: Incident Response

Vendors must handle security incidents affecting your organization with transparency and speed.

- [ ] **RS.RP-01**: Vendor has a documented incident response plan covering notification, investigation, containment, and communication
- [ ] **RS.CO-01**: Vendor commits to notifying you of security incidents within 72 hours (or per regulatory requirement) and provides preliminary incident classification
- [ ] **RS.CO-02**: Vendor provides regular incident updates and a post-incident report including root cause, remediation, and preventive measures
- [ ] **RS.AN-01**: Vendor conducts forensic analysis for confirmed breaches; retains logs and evidence for investigation cooperation
- [ ] **RS.MI-01**: Vendor has an incident containment strategy and can demonstrate communications protocols for coordinating remediation with your team

**Red flag:** Vendor refuses to commit to incident notification timelines or has no formal incident response plan.

---

### RECOVER: Resilience & Continuity

Vendors must restore operations and ensure your business continuity after disruption.

- [ ] **RC.RP-01**: Vendor has a documented recovery plan with RTO and RPO targets aligned to your business requirements
- [ ] **RC.IM-01**: Vendor tests backup and recovery procedures at least annually; provides test results and evidence of successful restoration
- [ ] **RC.CO-01**: Vendor maintains geographic or logical redundancy for critical services; documents failover procedures and estimated failover time
- [ ] **RC.CO-02**: Vendor has business continuity and disaster recovery (BC/DR) procedures covering extended outages, personnel loss, or facility damage
- [ ] **RC.RP-02**: Vendor coordinates recovery efforts with your team and provides status updates during incident response/recovery phases

**Red flag:** Vendor cannot demonstrate recent BC/DR testing or has single points of failure in service delivery.

---

## NIST SP 800-171 Rev 2/3: CUI Protection (Defense Contractors)

If your organization or the vendor handles **Controlled Unclassified Information (CUI)**, NIST SP 800-171 Rev 2/3 mandatory controls apply:

- [ ] **AC-2**: Vendor implements account management procedures (creation, enabled/disabled, privileges) with documented approval workflows
- [ ] **AC-4**: Vendor enforces information flow controls and prevents unauthorized data movement between systems
- [ ] **AT-1**: Vendor provides security awareness training for personnel with access to CUI; annual refresher documented
- [ ] **AU-2, AU-12**: Vendor logs security-relevant events (access, privilege use, configuration changes); maintains audit logs for 3+ years
- [ ] **CA-2**: Vendor conducts security assessments by qualified assessors and remediates findings; provides assessment reports upon request
- [ ] **CM-3**: Vendor implements change management procedures for CUI systems; restricts unauthorized modifications
- [ ] **CP-1, CP-7**: Vendor maintains alternate processing sites and backup recovery capacity for CUI systems
- [ ] **IA-2**: Vendor enforces MFA for privileged accounts; uses FIPS 140-2 validated cryptography for authentication
- [ ] **SC-7**: Vendor implements boundary protection (firewalls, intrusion detection, egress filtering) around CUI systems
- [ ] **SI-4**: Vendor monitors systems for intrusions; responds to suspicious activity within 24 hours of detection

**Evidence Expectations**: NIST SP 800-171 Assessment Report (can be summarized; full report not required if vendor is CMMC certified), recent audit findings, patching logs, MFA configurations.

---

## CMMC 2.0: Cybersecurity Maturity Model Certification

If your organization requires vendor CMMC certification, verify the vendor's certification level:

| **CMMC Level** | **Applicability** | **Key Vendor Requirements** |
|---|---|---|
| **Level 1 (Basic)** | Non-CUI or low-risk CUI | 17 foundational practices; EDR, basic access controls, logging |
| **Level 2 (Advanced)** | CUI handling required for most defense contracts | 110+ practices; formalized security processes, incident response, vulnerability management, supply chain risk management |
| **Level 3 (Expert)** | High-sensitivity CUI, critical defense contractors | 171+ practices; advanced threat detection, advanced incident response, advanced supply chain risk management |

- [ ] Vendor provides current CMMC 2.0 Certificate (valid for 3 years; includes Level, scope, authorizer name)
- [ ] Certificate scope clearly identifies your services or data category (e.g., "CUI-level systems," "IT services")
- [ ] Vendor's assessed organization matches or exceeds the scope of services provided to you
- [ ] CMMC assessment is from an authorized C3PAO (Certification and Accreditation Professional Organization)

**Red flag:** CMMC certificate is expired, scope does not align with services, or vendor claims Level 2 but cannot produce assessment evidence.

---

## FedRAMP Baseline Compliance (Cloud Vendors)

If the vendor is a cloud service provider (CSP) serving federal agencies, verify FedRAMP Authorization status:

- [ ] Vendor holds **FedRAMP Provisional Authorization** (P-ATO) or **Authority to Operate** (ATO) for baseline level (Low/Moderate/High)
- [ ] Authorization covers the specific service or data classification relevant to your use case
- [ ] Vendor publishes Security Assessment Report (SAR) and System Security Plan (SSP) summary (may be redacted for proprietary content)
- [ ] Vendor demonstrates continuous monitoring; provides quarterly assessment updates
- [ ] Vendor maintains FIPS 140-2 validated encryption and provides compliance artifacts (e.g., SOC 2 Type II reports, FedRAMP audit results)

**Evidence Expectations**: FedRAMP P-ATO/ATO letter, Cloud Security Alliance CAIQ responses, SAR/SSP executive summaries, SOC 2 Type II report.

---

## StateRAMP for State & Local Government

If your organization is a state or local government agency:

- [ ] Vendor demonstrates compliance with **StateRAMP** (state-specific cloud security requirements) if handling state/local data
- [ ] Vendor's StateRAMP authorization matches your state's requirements; if unavailable, vendor commits to equivalent state-level security assessments
- [ ] Vendor provides state-specific data residency and handling guarantees (some states mandate data location within state borders)

---

## Executive Order 14028: Zero Trust & SBOM Requirements

Organizations serving federal agencies must address Executive Order 14028 directives:

- [ ] **Software Bill of Materials (SBOM)**: Vendor provides or commits to providing SBOM (CycloneDX or SPDX format) for custom applications; includes all third-party dependencies, versions, and known vulnerabilities
- [ ] **Zero Trust Principles**: Vendor architecture aligns with zero trust (assume breach, verify every access, encrypted communications, continuous monitoring); documents zero trust implementation or roadmap
- [ ] **Encryption Standards**: Vendor uses FIPS-approved cryptography (AES-256, SHA-256+) for data at rest and TLS 1.2+ for data in transit
- [ ] **Supply Chain Risk Management**: Vendor has a SCRM program covering subvendor assessment, software provenance, and dependency management

---

## References

- **NIST Cybersecurity Framework 2.0** (February 2024): https://nvlpubs.nist.gov/nistpubs/CSF/NIST.CSF.2.0.pdf
- **NIST SP 800-171 Rev 2**: https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171r2.pdf
- **NIST SP 800-171 Rev 3** (draft/current): https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-171B.pdf
- **NIST SP 800-53 Rev 5** (controls, FedRAMP baselines): https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-53r5.pdf
- **CMMC 2.0 Requirements**: https://www.acq.osd.mil/cmmc/
- **FedRAMP**: https://www.fedramp.gov/
- **Executive Order 14028**: https://www.whitehouse.gov/briefing-room/presidential-actions/2021/05/12/executive-order-on-improving-the-nations-cybersecurity/
- **Executive Order 14110** (AI/SBOM): https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/
