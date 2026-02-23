# DORA Vendor Checklist
## Digital Operational Resilience Act (EU Financial Sector)

**Effective Date:** January 17, 2025
**Regulatory Framework:** Regulation (EU) 2022/2554
**Type:** OPTIONAL sectoral checklist for financial institutions

---

## Scope and Applicability

DORA applies to the following regulated entities and their ICT service providers:

- **Credit institutions** (banks)
- **Payment institutions** and electronic money institutions
- **Insurance undertakings** and reinsurance undertakings
- **Investment firms** (MiFID II scope)
- **Crypto-asset service providers** (CASP)
- **Central counterparties** (CCPs)
- **Trading venues** (exchanges, MTFs, OTFs)

**Critical Note:** If your organization is a financial entity, DORA compliance is **mandatory**. This checklist applies to all third-party ICT service providers supporting these entities.

---

## Key Articles for Vendor Management

### Art. 28: General Principles for ICT Third-Party Risk Management

**Requirement:** Financial institutions must ensure that ICT third-party risk is managed comprehensively and in a proportionate manner.

**Implementation checklist:**

- [ ] Vendor risk is identified, measured, monitored, and managed
- [ ] Risk assessment is documented and updated annually
- [ ] Risk governance framework covers all ICT third-party arrangements
- [ ] Escalation procedures exist for critical risks
- [ ] Board/management oversight of material third-party concentrations

### Art. 29: Preliminary Assessment of ICT Concentration Risk

**Requirement:** Before entering arrangements with ICT third parties, assess potential concentration risk.

**Assessment areas:**

- [ ] **Single-provider dependency:** Does this vendor provide critical functions you cannot easily substitute?
- [ ] **Substitutability analysis:** How many alternative vendors exist in the market?
- [ ] **Geographic concentration:** Where are the vendor's data centers and critical operations located?
- [ ] **Sector concentration:** How many other institutions use the same vendor?
- [ ] **Market interdependencies:** Could failure of this vendor trigger systemic risk?

### Art. 30: Key Contractual Provisions for ICT Third Parties

**Requirement:** All contracts with material ICT third parties must include these mandatory clauses.

#### Mandatory Contractual Elements Checklist:

**Service Definitions:**
- [ ] Clear service level descriptions and specifications
- [ ] Defined performance targets and SLAs
- [ ] Performance measurement mechanisms in place
- [ ] Escalation procedures for SLA breaches

**Audit and Access Rights:**
- [ ] Right to audit the vendor (on-site and remote)
- [ ] Right to inspect records and systems
- [ ] Audit rights extend to subcontractors
- [ ] Right to conduct penetration testing
- [ ] Right to request security assessments
- [ ] Supervisory authority audit access guaranteed
- [ ] No restrictions on external auditor access

**Data Location and Localization:**
- [ ] Data location(s) specified (EU, non-EU, or flexible)
- [ ] Consent required before data processing location changes
- [ ] Restrictions on sub-processing locations documented
- [ ] Data transfer mechanisms compliant with GDPR

**Incident Reporting:**
- [ ] Vendor reports significant ICT incidents within **24 hours**
- [ ] Definition of "significant" aligned with DORA Art. 19
- [ ] Incident impact assessment provided
- [ ] Containment and remediation timeline specified
- [ ] Root cause analysis timeline (typically 5-7 days)
- [ ] Detailed incident report delivered within 30 days

**Business Continuity and Resilience:**
- [ ] Recovery Time Objective (RTO) specified
- [ ] Recovery Point Objective (RPO) specified
- [ ] Redundancy and failover mechanisms documented
- [ ] Testing of continuity plans (at least annually)
- [ ] Availability SLA (e.g., 99.9% uptime)
- [ ] Vendor has tested alternatives for service restoration

**Exit Strategy:**
- [ ] Notice period for contract termination (minimum 90 days recommended)
- [ ] Data return/migration procedures documented
- [ ] Support during transition period specified
- [ ] Costs of exit clearly defined
- [ ] No punitive exit clauses for compliance breaches
- [ ] Timely data deletion post-termination confirmed

**Cooperation with Supervisory Authorities:**
- [ ] Vendor agrees to cooperate with your regulator (EBA, ECB, etc.)
- [ ] Vendor provides information requested by supervisors
- [ ] Regulatory on-site inspections permitted
- [ ] No legal barriers to regulatory access
- [ ] Confidentiality of regulatory information maintained

**Subcontracting:**
- [ ] Prior written approval required for subcontractors
- [ ] Subcontractor audit rights flow down
- [ ] Subcontractor compliance with DORA requirements confirmed
- [ ] Back-to-back obligations in subcontracts

### Art. 31: Register of Information on ICT Third-Party Arrangements

**Requirement:** Maintain and update a register of all material ICT third-party arrangements.

**Register Information Template:**

For each critical or important ICT third-party arrangement, document:

| Field | Details |
|-------|---------|
| **Vendor Name** | Legal entity name, registration number |
| **Service Description** | What ICT service is provided? |
| **Criticality** | Critical or Important (see Art. 32 criteria) |
| **Functions Supported** | Which business functions depend on this service? |
| **Data Categories** | What data types does vendor access/process? |
| **Data Volume** | Scale of data (transactions, customers, systems) |
| **Location(s)** | Primary and backup data center locations |
| **Contract Date** | Signature date and duration |
| **SLA Targets** | Availability, RTO, RPO, performance metrics |
| **Risk Rating** | High/Medium/Low based on Art. 29 assessment |
| **Audit Status** | Last audit date, findings, remediation status |
| **Incident History** | Any significant incidents in past 3 years |
| **Substitutability** | 1-5 scale (1=unique, 5=easily replaceable) |
| **Board Approval** | Date of approval if critical/important |

**Register Maintenance:**
- [ ] Register updated within 30 days of new arrangement
- [ ] Register reviewed annually
- [ ] Changes in vendor status/risk documented
- [ ] Register accessible to internal stakeholders
- [ ] Provided to supervisory authority upon request

### Art. 32: Designation of Critical/Important ICT Third-Party Functions

**Requirement:** Identify which outsourced functions are "critical" or "important" for your institution.

**Criteria for Designation:**

A function is **CRITICAL** if:
- [ ] Its disruption would prevent the institution from functioning (payment processing, core banking system)
- [ ] It supports mandatory regulatory reporting
- [ ] It enables the institution to comply with prudential requirements
- [ ] Loss would create significant impact to customers, counterparties, or financial stability
- [ ] Recovery time measured in hours or less

A function is **IMPORTANT** if:
- [ ] Its disruption would severely impact business operations
- [ ] It handles sensitive customer data or systems
- [ ] Recovery requires days but not weeks
- [ ] It's not covered by "critical" criteria but is significant to operations

**Designation Process:**
- [ ] Risk assessment completed for each outsourced function
- [ ] Criticality determination documented and approved
- [ ] Board/Senior Management approval obtained (critical functions)
- [ ] Register updated with designations
- [ ] Annual review of designations conducted

---

## DORA Oversight Framework for Critical ICT Third Parties

**When a vendor provides a CRITICAL function:**

- [ ] **Enhanced due diligence** performed before contracting
- [ ] **Ongoing monitoring** includes quarterly reviews minimum
- [ ] **Audit rights** actively exercised (at least annually)
- [ ] **Incident reporting** reviewed and escalated immediately
- [ ] **Contingency planning** tested annually with vendor
- [ ] **Board-level oversight** of vendor performance
- [ ] **Alternative provider** relationship maintained where possible
- [ ] **Regulatory reporting** to supervisory authority

---

## Incident Reporting and Notification

**Art. 19: Significance Threshold for ICT Incidents**

Report to regulator if incident causes:
- [ ] Unavailability of critical functions for >1 hour
- [ ] Data breaches affecting >100,000 customers or >1,000 customers with high-impact data
- [ ] Loss or corruption of data >10% of data volume
- [ ] Financial loss >€1M
- [ ] Significant reputational damage
- [ ] Third-party impact (payment system, other institutions)

**Vendor Reporting to Your Institution:**
- [ ] Within 24 hours of discovery (preliminary notification)
- [ ] Within 72 hours (impact assessment update)
- [ ] Within 5-7 days (root cause analysis)
- [ ] Within 30 days (comprehensive incident report)

---

## Relationship with NIS2 Directive

DORA is **lex specialis** (specialized law) for the financial sector. Relationship to NIS2:

- [ ] Financial institutions subject to DORA use DORA requirements
- [ ] NIS2 provides baseline framework for non-DORA covered entities
- [ ] DORA obligations are stricter and take precedence for financial entities
- [ ] Critical ICT third parties must meet DORA standards
- [ ] Incident reporting timelines: DORA takes precedence (24-hour rule)

---

## Assessment Frequency and Schedule

| Activity | Frequency | Responsibility |
|----------|-----------|-----------------|
| Register update | Within 30 days of changes | Vendor Manager |
| Risk reassessment | Annually | Risk Department |
| SLA review | Quarterly | Service Owner |
| Audit/inspection | Annually minimum (critical), bi-annually (important) | Internal Audit or External Auditor |
| Incident review | As incidents occur | Risk/Compliance |
| Board reporting | At least quarterly | Chief Risk Officer |
| Regulatory update | Upon request | Compliance |

---

## Key Takeaways for Vendor Management

1. **Early assessment:** Evaluate ICT concentration risk BEFORE signing contracts
2. **Contractual protection:** Ensure all mandatory Art. 30 clauses are present
3. **Documentation:** Maintain complete register per Art. 31
4. **Criticality mapping:** Clearly designate critical vs. important functions
5. **Ongoing oversight:** Monitor critical vendors with enhanced rigor
6. **Rapid response:** Ensure 24-hour incident reporting from vendors
7. **Exit readiness:** Maintain alternatives and documented exit procedures
8. **Regulatory cooperation:** Ensure vendors facilitate supervisory oversight

---

## Compliance Documentation Checklist

**Before contract signing:**
- [ ] Art. 29 concentration risk assessment completed
- [ ] Vendor selection approved by Risk/Compliance
- [ ] Art. 30 mandatory clauses incorporated in contract
- [ ] Exit strategy terms negotiated and documented

**After contract signing:**
- [ ] Art. 31 register entry created within 30 days
- [ ] Criticality/importance designation recorded
- [ ] Audit/inspection schedule established
- [ ] Incident reporting procedures communicated to vendor
- [ ] Board approval obtained (if critical function)

**Ongoing management:**
- [ ] Quarterly SLA review completed
- [ ] Annual risk reassessment documented
- [ ] Audit findings tracked and remediated
- [ ] Register maintained current
- [ ] Regulatory updates communicated to vendor

---

**Last Updated:** February 2026
**Next Review:** February 2027 (or upon regulatory updates)
