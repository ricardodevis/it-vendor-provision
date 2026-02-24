---
name: audit-prep
description: >
  Prepares the evidence and documentation needed for an external
  audit (ISO 27001, SOC 2, HIPAA, NIS2, GDPR, FCA, UK ICO, internal audit)
  of the IT vendor management process. Compiles evidence,
  identifies gaps and generates the dossier for the auditor.
user_instructions: >
  Indicate the audit type (ISO 27001, SOC 2, HIPAA, NIS2, GDPR, FCA, UK ICO,
  internal audit, M&A due diligence) and, if possible, the scope or
  specific controls the auditor will review.
---

# Command: External Audit Preparation

## Instructions

When executing this command:

1. **Load required skills:**
   - `${CLAUDE_PLUGIN_ROOT}/skills/risk-compliance/SKILL.md` (regulatory requirements)
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-reporting/SKILL.md` (KPIs and risk register)
   - `${CLAUDE_PLUGIN_ROOT}/skills/contract-lifecycle/SKILL.md` (contract management)
   - `${CLAUDE_PLUGIN_ROOT}/skills/license-management/SKILL.md` (license compliance)

2. **Determine the audit framework** and applicable controls:

   **ISO 27001 (Annex A — vendor controls):**
   - A.5.19: Information security in relationships with vendors
   - A.5.20: Information security in agreements with vendors
   - A.5.21: Management of information security in the ICT supply chain
   - A.5.22: Monitoring, review and management of changes in vendor services
   - A.5.23: Information security in the use of cloud services

   **NIS2 (Art. 21.2.d — supply chain):**
   - Supply chain security policy
   - Evaluation of critical vendors
   - Security contractual requirements
   - Continuous monitoring
   - Supply chain incident management

   **GDPR (Art. 28 — processors):**
   - Signed and updated DPAs
   - Record of processing activities
   - Impact assessments (DPIA) performed
   - Sub-processor management
   - Data subject rights management
   - International transfers

   **Internal Audit / M&A Due Diligence:**
   - Complete vendor and contract inventory
   - Total spending and financial commitments
   - Identified risks and their status
   - License compliance (under/over-licensing)
   - Critical dependencies and contingency plans

   **SOC 2 Type II (Trust Services Criteria):**
   - CC1: Control Environment (tone at top, board oversight)
   - CC2: Communication and Information (internal/external communication)
   - CC3: Risk Assessment (risk identification, fraud risk)
   - CC4: Monitoring Activities (ongoing and separate evaluations)
   - CC5: Control Activities (logical access, change management)
   - CC6: Logical and Physical Access Controls (authentication, authorization)
   - CC7: System Operations (incident management, change management)
   - CC8: Change Management (infrastructure/software changes)
   - CC9: Risk Mitigation (vendor risk, business disruption)
   - A1: Availability (capacity planning, DR/BCP)
   - PI1: Processing Integrity (completeness, accuracy)
   - C1: Confidentiality (data classification, access restrictions)
   - P1-P8: Privacy (notice, choice, collection, use, disclosure, access, quality, monitoring)

   **HIPAA (Health Insurance Portability and Accountability Act):**
   - Administrative Safeguards (§164.308): risk analysis, workforce training, contingency plan, BAA verification
   - Physical Safeguards (§164.310): facility access, workstation security, device/media controls
   - Technical Safeguards (§164.312): access control, audit controls, integrity, transmission security
   - Breach Notification Rule (§164.400-414): notification timelines, content requirements
   - Business Associate Agreement verification

   **UK ICO Accountability Framework:**
   - Art. 5(2) UK GDPR: demonstrate compliance (accountability principle)
   - DPIA requirements and when mandatory
   - DPO expectations and appointment criteria
   - Records of processing activities
   - International transfers (IDTA, UK SCCs Addendum)
   - Children's code compliance (Age Appropriate Design Code)
   - ICO expectations on data sharing and transparency

   **FCA Outsourcing (SS2/21, SYSC 8):**
   - Materiality assessment of outsourcing arrangement
   - Pre-outsourcing risk assessment and due diligence
   - Written outsourcing agreement requirements
   - Business continuity and exit planning
   - Sub-outsourcing chain management
   - Audit and access rights (regulator and firm)
   - Concentration risk assessment
   - Operational resilience (PS21/3) impact tolerances
   - PRA coordination requirements (dual-regulated firms)

3. **Collect evidence** for each applicable control:

   | Evidence | Source | Control Covered |
   |----------|--------|-----------------|
   | Vendor management policy | document repository | ISO A.5.19, NIS2 21.2.d |
   | Vendor register with criticality classification | document repository | ISO A.5.19, NIS2 |
   | Vendor evaluations (scorecards) | document repository | ISO A.5.19, A.5.21 |
   | Signed contracts with security clauses | document repository | ISO A.5.20 |
   | Signed DPAs | document repository | GDPR Art. 28 |
   | Verified sub-processor list | document repository | GDPR Art. 28.2 |
   | Current vendor certifications (SOC 2, ISO) | Vendor register | ISO A.5.20, NIS2 |
   | SLAs and monitoring evidence | monitoring tool | ISO A.5.22 |
   | Vendor incident register | ticketing system | ISO A.5.22, NIS2 |
   | Records of periodic vendor reviews | document repository | ISO A.5.22 |
   | Vendor risk register | Risk register | ISO A.5.19, NIS2 |
   | DPIAs performed | document repository | GDPR Art. 35 |
   | Data subject rights management evidence | ticketing system | GDPR Art. 28.3.e |
   | License inventory and compliance | asset management tool | Internal Audit |
   | Business continuity/contingency plans for critical vendors | document repository | NIS2 21.2.c |
   | Vendor security awareness training records | Training records | NIS2 21.2.g |
   | SOC 2 Type II audit report (latest) | Vendor management system | SOC 2 CC1-CC9, A1, PI1, C1 |
   | SOC 2 attestation and scope statement | Vendor management system | SOC 2 trust services criteria |
   | Control environment documentation (policies, procedures) | document repository | SOC 2 CC1 |
   | Communication and disclosure records | document repository | SOC 2 CC2 |
   | Risk assessment and monitoring logs | Risk register | SOC 2 CC3, CC4 |
   | Access control and change management records | ticketing system | SOC 2 CC5, CC6, CC8 |
   | Incident management records | ticketing system | SOC 2 CC7 |
   | Business continuity and disaster recovery plans | document repository | SOC 2 A1 |
   | Data processing integrity evidence | system logs | SOC 2 PI1 |
   | Data classification and encryption records | document repository | SOC 2 C1 |
   | Privacy policies and data handling procedures | document repository | SOC 2 P1-P8 |
   | HIPAA Business Associate Agreements (signed) | contract management system | HIPAA §164.308, §164.312 |
   | Risk analysis documentation | document repository | HIPAA §164.308(a)(1)(ii) |
   | Workforce security and training records | Training records | HIPAA §164.308(a)(3) |
   | Access control implementation and logs | system access logs | HIPAA §164.312(a)(1) |
   | Audit controls and logging evidence | system logs | HIPAA §164.312(b) |
   | Integrity control evidence (checksums, hashing) | system logs | HIPAA §164.312(c)(1) |
   | Encryption and transmission security documentation | system documentation | HIPAA §164.312(e) |
   | Breach notification procedures and logs | ticketing system | HIPAA §164.400-414 |
   | Contingency planning documentation | document repository | HIPAA §164.308(a)(7) |
   | Physical access controls (facility, workstation) | facility records | HIPAA §164.310 |
   | Device and media controls documentation | asset management | HIPAA §164.310(d) |
   | UK GDPR accountability evidence (Article 5(2)) | document repository | UK ICO Framework |
   | Data Protection Impact Assessments (DPIA) | document repository | UK ICO DPIA requirements |
   | Data Protection Officer appointment and records | HR/Governance | UK ICO DPO requirements |
   | Records of processing activities (ROPA) | document repository | UK ICO accountability |
   | International transfer documentation (IDTA, SCCs) | contract management | UK ICO international transfers |
   | Age Appropriate Design Code compliance evidence | document repository | UK ICO Children's code |
   | Data sharing and transparency records | document repository | UK ICO expectations |
   | FCA outsourcing materiality assessment | Risk register | FCA SS2/21, SYSC 8 |
   | Pre-outsourcing due diligence documentation | document repository | FCA SS2/21 |
   | Outsourcing agreements with regulatory clauses | contract management | FCA SYSC 8.1 |
   | Business continuity and exit strategy documentation | document repository | FCA SS2/21 |
   | Sub-outsourcing chain management records | vendor management | FCA SS2/21 |
   | Audit and access rights documentation | contract management | FCA SYSC 8.1 |
   | Concentration risk assessment | Risk register | FCA SS2/21 |
   | Operational resilience impact tolerances | document repository | FCA PS21/3 |
   | PRA coordination records (if dual-regulated) | Governance records | FCA for dual-regulated firms |

4. **Verify completeness** — for each evidence:
   - ✅ Available and current
   - ⚠️ Available but outdated or incomplete
   - ❌ Not available (gap)

5. **Identify gaps and remediation plan:**
   - For each gap: what is missing, who should generate it, timeline before audit
   - Prioritize by control criticality (major finding vs. minor observation)

6. **Generate audit dossier** in Markdown with:

   **Section 1: Cover and Contents**
   - Audit type and regulatory framework
   - Scope: vendors included
   - Preparation date
   - Owner

   **Section 2: Maturity Summary**
   - Summary table: control, evidence, status (✅/⚠️/❌)
   - Percentage of controls covered
   - Critical gaps identified

   **Section 3: Evidence by Control**
   - For each applicable control:
     - Control description
     - Available evidence (with document reference)
     - Compliance status
     - Observations

   **Section 4: Vendor Register**
   - Table of vendors in scope with:
     - Name, service, criticality
     - Current contract (yes/no, date)
     - Signed DPA (yes/no, date)
     - Current certifications
     - Last evaluation/review
     - Active risks

   **Section 5: Gaps and Remediation Plan**
   - Table: gap, severity, action, owner, timeline
   - Recommendation: should audit be postponed if gaps are critical?

   **Section 6: Annexes**
   - List of evidence documents with location
   - Controls vs. evidence traceability matrix

7. **Recommendations for audit day:**
   - Have all evidence accessible (not dispersed across 15 systems)
   - Designate a single contact for the auditor
   - Prepare 2-minute oral executive summary
   - Anticipate auditor questions for each control
   - Don't improvise: if evidence isn't available, say so

8. **Save the dossier** as `audit-prep-[type]-YYYY-MM-DD.md`
