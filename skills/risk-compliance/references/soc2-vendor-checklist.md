# SOC 2 Vendor Assessment Checklist

## Context

**SOC 2** (Service Organization Control) is an auditing framework developed by the American Institute of Certified Public Accountants (AICPA) to assess the controls and governance of service organizations handling customer data. Unlike security certifications like ISO 27001 (which is prescriptive), SOC 2 is **principle-based**—it evaluates whether a service organization has designed and implemented controls to meet stated criteria.

For IT vendors, SOC 2 is the gold standard for demonstrating security and operational maturity. A SOC 2 Type II report provides third-party audit evidence of control design and operational effectiveness over a period (typically 6–12 months), reducing customer due diligence burden and building trust.

### Why SOC 2 Matters for Vendors

- **Customer Due Diligence**: Enterprises require SOC 2 reports before contracting with vendors
- **Competitive Advantage**: SOC 2 certification differentiates vendors in competitive markets
- **Risk Mitigation**: Demonstrates operational controls to manage security, availability, confidentiality, and privacy risks
- **Regulatory Alignment**: SOC 2 controls often satisfy requirements in HIPAA, GDPR, CCPA, and other privacy regimes
- **Insurance & Compliance**: Cyber liability insurance may require SOC 2; some regulations reference SOC 2 compliance

---

## SOC 2 Type I vs. Type II: Critical Distinction

| Aspect | Type I | Type II |
|--------|--------|---------|
| **Scope** | Controls **design** at a point in time (typically current date) | Controls **operational effectiveness** over a period (6–12 months) |
| **Audit Period** | Snapshot; no ongoing testing | Extended period (minimum 6 months for effectiveness; often 12 months for maturity) |
| **Evidence** | Design documentation, policies, procedures, configuration snapshots | Design documentation + 6–12 months of operational evidence (logs, test results, incident records) |
| **Assurance Level** | Low to moderate; "controls exist but may not be operating effectively" | High; controls are both designed and proven effective through testing |
| **Audience Acceptance** | Limited; many enterprises reject Type I for vendor contracts | Industry standard; enterprises accept Type II as proof of control maturity |
| **Cost** | Lower; simpler audit scope | Higher; longer audit period and more testing required |
| **Timeline** | Can complete quickly (weeks to months) | 6–12 months (if starting from scratch) |
| **Industry View** | Rarely sufficient for enterprise contracts | Required; non-negotiable for vendors serving large enterprises |
| **Example Report Date** | "As of December 31, 2025" | "For the period January 1, 2025 to June 30, 2025" |

**Key Insight**: A **Type I report is outdated upon issuance**. Customers cannot verify current control effectiveness using a point-in-time snapshot. Most enterprise procurement demands Type II.

---

## Five Trust Services Categories (TSCs)

SOC 2 evaluates controls across five Trust Services Categories. Vendors should understand which apply to their service:

### 1. **Security (CC - Common Criteria)**
Controls to protect data from unauthorized access, modification, or disclosure.

**Key Areas**:
- Access controls (authentication, authorization, least privilege)
- Encryption (data in transit, at rest)
- Logging and monitoring
- Incident response and breach management
- Vulnerability management and patch management
- Network segmentation and perimeter security
- Physical security (if data centers are managed)

**Vendor Applicability**: Nearly universal; every SaaS vendor should have Security controls.

### 2. **Availability (A)**
Controls to ensure systems are available and perform as intended.

**Key Areas**:
- Uptime/Service Level Agreements (SLAs)
- Disaster recovery and business continuity
- Redundancy and failover mechanisms
- Capacity planning and load balancing
- Incident response for outages
- Performance monitoring

**Vendor Applicability**: Critical for SaaS platforms, infrastructure, and backend services; less relevant for software vendors (less customer dependency on vendor's infrastructure).

### 3. **Processing Integrity (PI)**
Controls to ensure data is processed completely, accurately, timely, and authorized.

**Key Areas**:
- Data input validation
- Processing logic accuracy
- Error detection and correction
- Transaction logging and audit trails
- System monitoring for processing errors
- Authorization controls for data processing
- Prevention of unauthorized transactions

**Vendor Applicability**: Relevant for vendors processing customer transactions, financial data, or critical business records.

### 4. **Confidentiality (C)**
Controls to ensure data classified as confidential is protected from unauthorized disclosure.

**Key Areas**:
- Encryption and data masking
- Access controls for sensitive data
- Vendor confidentiality agreements
- Data classification schemes
- Handling of restricted data
- Secure disposal of confidential information

**Vendor Applicability**: Important for vendors handling customer proprietary data, competitive information, or regulated data.

### 5. **Privacy (P)**
Controls to ensure customer data is collected, used, retained, disclosed, and disposed of according to privacy laws and customer expectations.

**Key Areas**:
- Privacy policy compliance
- Consumer rights support (access, deletion, correction, opt-out)
- Data retention and deletion schedules
- Third-party data sharing agreements
- Cross-border data transfer safeguards
- Privacy impact assessments
- Data breach notification procedures
- Compliance with GDPR, CCPA, HIPAA, and other privacy laws

**Vendor Applicability**: Essential for vendors processing personal data; increasingly required by privacy regulations.

---

## How to Read a SOC 2 Report: Structure & Components

SOC 2 reports follow a standardized structure. Understanding each section is critical for evaluating vendor controls:

### 1. **Management's Assertion**
The service organization's statement describing:
- The scope of services covered
- The control environment and system objectives
- The applicable TSCs
- Management's assertion that controls are "suitably designed" (Type I) or "operating effectively" (Type II)
- Complementary User Entity Controls (CUECs)—controls **outside the vendor's scope** that customers must implement

**What to Look For**:
- [ ] Scope matches vendor's actual service offerings
- [ ] Explicitly identifies which TSCs are covered (Security, Availability, etc.)
- [ ] Clearly lists CUECs and states customer responsibilities
- [ ] No disclaimers narrowing scope (e.g., "excludes data centers managed by third party")

### 2. **Service Auditor's Opinion**
The independent auditor's conclusion on whether management's assertion is fair.

**Possible Opinions**:
- **Unqualified**: "Controls are suitably designed and operating effectively as stated." (Clean opinion—what you want)
- **Qualified**: "Controls are generally effective BUT with exceptions/deviations noted." (Red flag—exceptions listed in report)
- **Adverse**: "Controls are NOT suitably designed or operating effectively." (Fail—vendor should not be trusted)
- **Disclaimer**: Auditor unable to audit certain areas. (Red flag—restricted scope)

**What to Look For**:
- [ ] Unqualified opinion is the baseline expectation
- [ ] Qualified opinion requires careful review of exceptions (are they material?)
- [ ] Any adverse or disclaimer opinions are deal-breakers

### 3. **Description of System (DoS)**
The auditor's detailed description of the service organization's system, environment, and controls.

**Covers**:
- Service offerings and system boundaries
- Infrastructure, platforms, and technology stack
- Personnel roles and responsibilities
- Security architecture (firewalls, encryption, segmentation, etc.)
- Data handling processes
- Incident response and disaster recovery procedures
- Governance and oversight structures
- Third-party relationships (subprocessors, hosting providers, etc.)

**What to Look For**:
- [ ] Clear description of your specific service (not generic)
- [ ] Matches vendor's marketing claims and documentation
- [ ] Identifies all major infrastructure and third-party dependencies
- [ ] Explains how sensitive data flows through the system
- [ ] Documents change control and configuration management processes

### 4. **Suitability of Design (Type I) or Operating Effectiveness (Type II)**
For each TSC, the auditor explains whether controls are suitably designed and/or operating effectively.

**Type I Example Language**:
> "In our view, the controls described in the system description are suitably designed to achieve the objectives related to the Security TSC."

**Type II Example Language**:
> "In our opinion, the controls described in the system description were suitably designed and operated effectively to achieve the objectives related to the Security TSC during the period of January 1, 2025 to June 30, 2025."

**What to Look For**:
- [ ] Type II reports explicitly state "operated effectively" (not just "designed")
- [ ] Audit period is at least 6 months (longer is better)
- [ ] All stated TSCs have affirmative conclusions
- [ ] Any caveats or limitations are noted

### 5. **Tests of Controls**
The auditor's detailed testing to verify control design and effectiveness.

**Organized by TSC**, each test includes:
- **Control Objective**: The goal the control addresses
- **Related Criteria**: The specific AICPA Trust Services Criteria
- **Control Description**: How the control works
- **Tests Performed**: What the auditor tested (e.g., "reviewed 12 months of access logs," "verified encryption certificates," "confirmed disaster recovery drill")
- **Results**: Whether controls operated as intended

**Example**:
> **CC6.1 Logical Access Control**:
> - **Control**: Vendor has implemented role-based access control (RBAC) restricting system access to authorized users
> - **Test**: Auditor reviewed access control lists for 50 random user accounts and verified each user's access matches their role
> - **Result**: 49 of 50 users had appropriate access; 1 user retained access after role termination (resolved during audit period)

**What to Look For**:
- [ ] Tests are specific and verifiable (not vague)
- [ ] Sample sizes are reasonable (not "tested 1 of 100 accounts")
- [ ] Results show consistent adherence or document exceptions
- [ ] Exceptions are minor and remediated quickly
- [ ] Test frequency aligns with risk (critical controls tested monthly or more)

### 6. **Deviations/Exceptions**
The auditor documents any instances where controls were not operating as designed.

**Examples**:
- "1 user account retained elevated access 3 days post-termination due to delayed access removal process"
- "2 of 20 tested security patches were not applied within the documented 30-day window"
- "Disaster recovery drill conducted only once during the 12-month period; procedure requires semi-annual testing"

**What to Look For**:
- [ ] Number of exceptions is low relative to population (e.g., 1 exception in 100 items = 1% exception rate; acceptable)
- [ ] Exceptions are documented, root-caused, and remediated
- [ ] No systemic/pervasive exceptions (e.g., "encryption certificate expired on 50 servers")
- [ ] Vendor's remediation is timely and effective
- [ ] Exceptions do not indicate deliberate non-compliance

### 7. **Complementary User Entity Controls (CUECs)**
Controls that are **outside the vendor's responsibility** and must be implemented by customer organizations.

**Examples**:
- "Customer is responsible for secure password management and multi-factor authentication"
- "Customer must implement network access controls to restrict vendor access to necessary systems"
- "Customer is responsible for data backup and retention outside the vendor's platform"

**What to Look For**:
- [ ] CUECs are clearly listed and non-negotiable
- [ ] CUECs do not abdicate vendor responsibility for core security functions
- [ ] Your organization has capacity to implement CUECs
- [ ] CUECs align with your security policies

---

## Red Flags: Critical SOC 2 Warnings

> **🚨 RED FLAG**: Vendor provides a SOC 2 Type I report, not Type II. **REALITY**: Type I is a point-in-time snapshot; controls may have never been tested for effectiveness. Type II (6–12 months) is the minimum acceptable standard for enterprise use.

> **🚨 RED FLAG**: SOC 2 report is older than 12 months. **REALITY**: Controls decay over time; outdated reports do not reflect current state. Demand a recent (within 3 months) or current audit in progress.

> **🚨 RED FLAG**: Report contains a **qualified opinion** or multiple exceptions in critical controls. **REALITY**: Qualified opinions indicate control failures; review exceptions carefully. Systemic failures in Security or Privacy controls are disqualifying.

> **🚨 RED FLAG**: Audit scope is **narrowly defined** and excludes critical services (e.g., "SOC 2 covers online platform only; customer data warehouse is not included"). **REALITY**: Narrow scope limits assurance value. Ensure scope covers all vendor services you depend on.

> **🚨 RED FLAG**: Report does not mention **encryption, access controls, or logging**. **REALITY**: These are foundational controls; absence indicates weak security posture.

> **🚨 RED FLAG**: **Bridge letter** is absent, but report is >3 months old. **REALITY**: Bridge letters document controls post-audit; absence means no assurance for recent period.

> **🚨 RED FLAG**: Report shows **no disaster recovery or business continuity testing**. **REALITY**: Vendor cannot claim availability controls without periodic DR/BC testing.

> **🚨 RED FLAG**: **Privacy (P) TSC is not included** in scope, but vendor processes customer personal data. **REALITY**: Privacy controls are critical for GDPR, CCPA, HIPAA compliance. Non-inclusion is major gap.

> **🚨 RED FLAG**: Vendor uses multiple third-party subprocessors but SOC 2 scope does **not address subprocessor controls**. **REALITY**: Vendor's controls are only as strong as its subprocessors. Demand visibility into subprocessor SOC 2 reports or signed Data Processing Agreements.

> **🚨 RED FLAG**: Report documentation is **vague or generic** (e.g., "We have good security practices"); lacks specific control details. **REALITY**: Genuine SOC 2 reports are detailed and specific. Vague language indicates shallow audit or generic template.

---

## Bridge Letters: Extending SOC 2 Assurance

A **bridge letter** is auditor correspondence extending SOC 2 assurance for the period after the formal audit report period.

**Why They Matter**:
- Formal SOC 2 Type II audits take 6–12 months to complete
- Report issuance lags the audit end date (typically 2–4 months for processing/editing)
- By the time a SOC 2 report is received, the audit period is already 3–6 months old
- Bridge letters allow auditors to attest to controls for recent months without a full re-audit

**Bridge Letter Contents**:
- Statement that controls continued to operate effectively through the bridge period
- Limited testing (typically sampling of recent logs, incidents, policy updates)
- Note that bridge period is not a full audit engagement
- No opinion on TSCs (unlike full SOC 2 report); instead, affirmative statement that "controls continued to operate as designed"

**What to Look For**:
- [ ] Bridge letter is dated within 3 months of today
- [ ] Covers the period from SOC 2 report end date to current time
- [ ] Signed by the same auditor/firm as SOC 2 report
- [ ] Confirms that no material changes to control environment occurred
- [ ] Notes any significant incidents, patches, or infrastructure changes during bridge period

---

## SOC 2+ and Expanded Scope Reports

Some vendors pursue **SOC 2+** reports that extend beyond AICPA's five TSCs to include industry-specific criteria:

| Extension | Criteria | Applicability |
|-----------|----------|----------------|
| **SOC 2 + HIPAA** | HIPAA Security Rule controls; PHI handling and encryption | Vendors serving healthcare providers; managing patient data |
| **SOC 2 + PCI-DSS** | Payment Card Industry Data Security Standard | Vendors processing credit card data, payment processors |
| **SOC 2 + CSA CCM** | Cloud Security Alliance Cloud Controls Matrix | Cloud service vendors; infrastructure-as-a-service |
| **SOC 2 + GDPR** | EU data protection controls; data subject rights | Vendors processing EU resident data |
| **SOC 2 + ISO 27001** | Information security management (ISMS) standards | Vendors seeking comprehensive security certification |

**When to Demand Expanded Scope**:
- [ ] Vendor processes regulated data (PHI, PCI, financial records)
- [ ] Vendor handles EU or CA resident data (GDPR, CCPA compliance)
- [ ] Vendor is a cloud infrastructure provider
- [ ] Industry or customer contracts mandate specific regulatory compliance

---

## SOC 3 (Public Summary) vs. SOC 2 (Restricted)

**SOC 2** reports are **restricted distribution**. Vendor must explicitly approve distribution to third parties. Customers typically sign an NDA before accessing reports.

**SOC 3** is a **publicly available summary** of SOC 2 findings. It includes:
- The service auditor's opinion (unqualified, qualified, etc.)
- High-level summary of control environment
- Key strengths and exceptions
- Trust Services Principles addressed

**Key Differences**:
- SOC 3 is marketing-appropriate; can be published on vendor website or shared without restrictions
- SOC 2 is sensitive; contains detailed system descriptions, control descriptions, test results, and exceptions—requires confidentiality
- SOC 3 provides limited assurance (summary only); SOC 2 is comprehensive

**What to Look For**:
- [ ] Vendor publishes SOC 3 on website if available (shows transparency)
- [ ] Vendor willingly provides SOC 2 report under NDA (reluctance is red flag)
- [ ] SOC 3 summary aligns with SOC 2 detailed findings

---

## Complementary Subservice Organization Controls (CSOCs)

Many vendors rely on third-party subprocessors (hosting providers, CDNs, payment processors, etc.). **Complementary Subservice Organization Controls (CSOCs)** acknowledge that the vendor's controls are complementary to subprocessor controls.

**Example**:
> "The vendor encrypts customer data in transit. Full assurance of encryption effectiveness depends on the hosting provider's network security controls (covered under the hosting provider's SOC 2 report)."

**What to Look For**:
- [ ] Report identifies all critical subprocessors
- [ ] CSOCs are documented for each material subprocessor
- [ ] Vendor has visibility into subprocessor SOC 2 reports (or equivalent)
- [ ] Subprocessor controls are consistent with vendor's stated security posture
- [ ] Vendor's contracts with subprocessors cascade security and compliance obligations

**Red Flag**:
- Vendor claims strong security controls but relies on subprocessor with no SOC 2 (or worse, no security certification)

---

## What SOC 2 Does NOT Cover

Understanding SOC 2's **limitations** is critical for comprehensive vendor risk assessment:

| What SOC 2 Does NOT Assess | Why This Matters |
|---------------------------|------------------|
| **Business Logic Accuracy** | SOC 2 verifies controls operate; not whether calculations/algorithms are correct. Faulty math passes SOC 2. |
| **Data Accuracy** | Controls ensure data is processed completely; not that source data is accurate. Garbage in, garbage out. |
| **Regulatory Compliance** | SOC 2 does not audit compliance with laws (GDPR, HIPAA, etc.); only that controls address privacy principles. |
| **Product Functionality** | SOC 2 does not assess whether features work as described; only operational controls. |
| **Customer Support Quality** | No evaluation of support responsiveness, SLAs, or issue resolution. |
| **Pricing & Billing Accuracy** | SOC 2 does not verify billing calculations or rate accuracy. |
| **Contractual Obligations** | SOC 2 does not audit vendor adherence to custom service level agreements. |
| **Third-Party Integrations** | Vendor's integrations with customer systems are outside SOC 2 scope. |
| **Vendor Reputation or Solvency** | SOC 2 does not assess financial stability or market reputation. |

**Implication**: SOC 2 is a necessary but insufficient control. Vendors should also provide:
- Product security assessments (penetration tests, code reviews)
- Regulatory compliance certifications (HIPAA BAA, GDPR DPA)
- Custom security questionnaires and reference customers
- SLA guarantees and uptime documentation

---

## Vendor SOC 2 Compliance Checklist

### Audit Planning & Scope

- [ ] Vendor has engaged an **AICPA-qualified SOC 2 auditor** (Big 4 firm or specialized audit firm)
- [ ] Vendor has defined **TSC scope** (minimum: Security + Privacy; recommended: add Availability for SaaS)
- [ ] Audit scope covers **all critical systems and data flows** (no narrow scope exclusions)
- [ ] Vendor targets **Type II audit** (minimum 6-month period; 12 months preferred for maturity)
- [ ] Audit timeline aligns with business needs (6–12 months for completion)

### Control Design & Documentation

- [ ] Vendor has **documented all control objectives and related controls** per AICPA Trust Services Criteria
- [ ] Controls cover **Common Criteria (CC)** framework:
  - CC1–CC3: Governance, risk management, risk mitigation strategy
  - CC4–CC6: Logical and physical access controls, encryption, logging
  - CC7–CC9: System monitoring, change management, incident management
- [ ] Vendor has mapped controls to **Privacy Criteria (P1–P8)** if processing personal data
- [ ] Vendor has documented **data flows, system architecture, and infrastructure** in detail
- [ ] Control documentation is **current and maintained** throughout audit period
- [ ] Vendor has identified **Complementary User Entity Controls (CUECs)** and communicated to customers

### Security Controls (Common Criteria)

- [ ] **Access Controls**: RBAC, least privilege, multi-factor authentication, access reviews quarterly
- [ ] **Encryption**: Data in transit (TLS 1.2+), at rest (AES-256 or equivalent), encryption key management
- [ ] **Logging & Monitoring**: Comprehensive audit logs, SIEM or log aggregation, real-time alerting, log retention (1 year minimum)
- [ ] **Patch Management**: Vulnerability scanning, patch testing, deployment within defined window (30–90 days for critical)
- [ ] **Network Security**: Firewalls, intrusion detection/prevention, network segmentation, DDoS mitigation
- [ ] **Malware Protection**: Antivirus/endpoint detection and response (EDR), regular scanning
- [ ] **Incident Response**: Documented procedures, 24/7 on-call team, root cause analysis, remediation tracking
- [ ] **Vulnerability Management**: Regular penetration testing (annual), bug bounty program, remediation SLAs

### Availability Controls (if in scope)

- [ ] **SLAs & Uptime Guarantees**: Documented targets (e.g., 99.9% availability), monitored continuously
- [ ] **Disaster Recovery (DR)**: Written procedures, tested regularly (minimum semi-annually), RTO/RPO defined
- [ ] **Business Continuity (BC)**: Plan for extended outages, communication procedures, alternate processing capability
- [ ] **Redundancy & Failover**: Multi-region replication, automatic failover, load balancing
- [ ] **Capacity Planning**: Forecasting, scalability testing, performance monitoring
- [ ] **Incident Management**: Documented response procedures, post-incident reviews, metrics tracking (MTTR, MTBF)

### Privacy Controls (if in scope or vendor processes PI)

- [ ] **Privacy Policy**: Current, clear, transparent, aligned with GDPR, CCPA, HIPAA (as applicable)
- [ ] **Data Classification**: Scheme for categorizing PI, SPI, confidential data; documented in system description
- [ ] **Consumer Rights Support**: Processes for access requests, deletion requests, correction requests, opt-out (GDPR, CCPA)
- [ ] **Data Retention & Deletion**: Documented schedules, automated deletion, secure disposal (wiping/shredding)
- [ ] **Third-Party Agreements**: Data Processing Agreements (DPAs) with customers; Service Provider Agreements (SPAs) with subprocessors
- [ ] **Cross-Border Transfers**: Safeguards for data transfers (Standard Contractual Clauses, adequacy decisions, Binding Corporate Rules)
- [ ] **Breach Notification**: Documented procedures, testing, customer notification within required timeframes
- [ ] **Privacy Impact Assessments (PIAs)**: Conducted for new processing activities; documented risks and mitigations

### Organizational Governance

- [ ] **Security Committee**: Meets regularly, includes executive leadership, reviews incidents and metrics
- [ ] **Data Protection Officer (DPO) or Privacy Lead**: Appointed, responsible for privacy compliance and audits
- [ ] **Chief Information Security Officer (CISO)**: Responsible for security strategy, controls, incident response
- [ ] **Risk Assessment**: Formal risk register, threats evaluated, controls implemented to mitigate
- [ ] **Security Training**: Annual training for all staff; specialized training for security, privacy, and incident response teams
- [ ] **Background Checks**: Conducted for all employees with access to systems/data
- [ ] **Segregation of Duties**: Critical functions separated to prevent conflicts of interest

### Subprocessor Management

- [ ] **Subprocessor Inventory**: List of all third-party subprocessors (hosting, CDN, payment processor, etc.)
- [ ] **SOC 2 Verification**: Each material subprocessor has current SOC 2 report or equivalent audit/certification
- [ ] **Data Processing Agreements**: SPAs cascade security and compliance obligations to subprocessors
- [ ] **Complementary Controls Documentation**: CSOCs identified and documented for subprocessor controls
- [ ] **Change Management**: Vendor notifies customers of new subprocessors; customer has objection rights
- [ ] **Subprocessor Incident Response**: Vendor has processes to respond to subprocessor breaches/outages

### Audit Execution & Testing

- [ ] **Test Plan**: Detailed plan for each control, sample sizes defined, testing frequency specified
- [ ] **Control Effectiveness Testing**: Auditor tests controls continuously throughout audit period (not just year-end)
- [ ] **Sampling Strategy**: Random sampling of logs, user accounts, patches, etc.; sample sizes are statistically meaningful
- [ ] **Exception Tracking**: Controls operate with <5% exception rate (industry standard); exceptions are documented and remediated
- [ ] **Incident Testing**: Vendor responds to simulated incidents; response procedures are effective
- [ ] **Disaster Recovery Testing**: DR/BC procedures tested during audit period (documented results)

### Reporting & Follow-Up

- [ ] **Unqualified Opinion**: Auditor issues unqualified opinion (clean report); no material exceptions
- [ ] **Management Letter**: Auditor's comments on control improvements; vendor addresses recommendations
- [ ] **Bridge Letter**: Current bridge letter extends assurance to recent months (within 3 months of today)
- [ ] **Exception Remediation**: Any exceptions in audit are documented, root-caused, and remediated with evidence
- [ ] **Annual Updates**: Vendor updates SOC 2 or obtains new audit every 12 months (Type II reports become outdated)
- [ ] **Customer Communication**: Vendor shares SOC 2 report summary and key findings with customers

### Continuous Improvement

- [ ] **Control Metrics**: Vendor tracks control operating metrics (patch lag, access review timeliness, incident response time, etc.)
- [ ] **Incident Trending**: Vendor analyzes incident patterns and adjusts controls accordingly
- [ ] **Policy Updates**: Security and privacy policies updated annually and upon regulatory changes
- [ ] **Technology Refresh**: Legacy systems decommissioned; new infrastructure assessed for control effectiveness
- [ ] **Feedback Loop**: Customer security questionnaires and audit findings inform control improvements
- [ ] **Compliance Roadmap**: Vendor plans for emerging regulatory requirements (GDPR, CCPA, state privacy laws, etc.)

---

## Evidence & Documentation Requirements

To evaluate a vendor's SOC 2 status, collect:

1. **SOC 2 Type II Report** — Current (within 12 months); includes auditor opinion, system description, control tests, exceptions
2. **Bridge Letter** — If SOC 2 period ended >3 months ago; attests to continued control effectiveness
3. **SOC 3 Summary** — If publicly available; optional but shows transparency
4. **Management Assertion** — Vendor's formal statement that controls are suitably designed and operating effectively
5. **Subprocessor SOC 2 Reports** — Each material subprocessor's report (hosting, CDN, payment processor, etc.)
6. **Data Processing Agreements (DPAs)** — Contracts cascading CCPA, GDPR, HIPAA compliance to subprocessors
7. **Privacy Policy** — Current, aligned with GDPR, CCPA, HIPAA
8. **Incident Response Documentation** — Examples of incident response procedures, post-incident reviews
9. **Disaster Recovery Test Results** — Evidence of annual or semi-annual DR/BC testing
10. **Security Training Records** — Documentation of staff training; curriculum includes OWASP, secure coding, privacy principles

---

## SOC 2 Limitations: What to Pair With Other Assessments

SOC 2 should be **complemented** by:

- **Penetration Testing**: Independent security firm conducts external/internal pen tests (annual)
- **Code Review & SAST**: Static application security testing (SAST) tools and peer code reviews during development
- **Vulnerability Scanning**: Continuous scanning of infrastructure; vulnerabilities triaged and patched
- **Regulatory Compliance Audit**: Third-party audit of GDPR/CCPA/HIPAA compliance (beyond SOC 2 scope)
- **Security Questionnaire**: CAIQ or custom security questions answered comprehensively
- **Customer References**: Speak with existing enterprise customers about vendor's security posture and support
- **Financial Stability Check**: Vendor's financial health; ability to continue operations and support customers
- **Contractual Guarantees**: SLAs, liability caps, data deletion timelines, breach notification SLAs

---

**Last Updated**: February 2026
**Review Frequency**: Every 12 months as vendor SOC 2 audits expire
**Next Steps**: Request vendor's current SOC 2 report; review auditor opinion, exceptions, and bridge letter
