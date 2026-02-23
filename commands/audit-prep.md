---
name: audit-prep
description: >
  Prepares the evidence and documentation needed for an external
  audit (ISO 27001, SOC 2, NIS2, GDPR, internal audit) of the
  IT vendor management process. Compiles evidence,
  identifies gaps and generates the dossier for the auditor.
user_instructions: >
  Indicate the audit type (ISO 27001, NIS2, GDPR, internal
  audit, M&A due diligence) and, if possible, the scope or
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
