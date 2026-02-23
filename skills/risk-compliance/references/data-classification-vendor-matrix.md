# Data Classification and Vendor Alignment Matrix

## Philosophy

Not all vendors are created equal. A vendor with SOC 2 Type I certification can handle internal business data but absolutely cannot receive personal health records. Data classification establishes rules: which vendors can access which data categories, based on the sensitivity of the data and the security capabilities the vendor has demonstrated.

Without data classification, you risk exposing highly sensitive information to vendors that lack the security controls to protect it. You also waste resources by over-protecting low-sensitivity data, preventing efficient vendor partnerships.

The principle is simple: the security requirements for a vendor must be proportionate to the sensitivity of the data they access. Higher classification = higher security requirements.

---

## Data Classification Scheme

Establish a four-level data classification system. Assign every dataset your organization maintains to one of these levels:

### PUBLIC

Data with no confidentiality or security requirements. Disclosure poses no business risk.

**Examples:**
- Marketing materials, brochures, case studies
- Public website content, blog posts, SEO-targeted pages
- Press releases, investor fact sheets, publicly filed documents
- Product datasheets, service-level agreements (non-customized)
- Published organizational policies (hiring, diversity, sustainability)
- Anonymized, aggregated metrics (industry benchmarks, anonymized survey results)

**Characteristics:**
- No business impact if disclosed to competitors or the public
- No regulatory restriction on sharing
- Vendor can be a public figure or unknown entity
- No encryption or special handling required

### INTERNAL

Data intended for internal use only. Disclosure to external parties (competitors, public) would provide competitive advantage or cause operational disruption, but poses no legal or compliance risk.

**Examples:**
- Internal communications (employee emails, Slack, collaboration documents)
- Strategic plans, roadmaps, business initiatives not yet public
- Project plans, timelines, schedules (not client-facing)
- Internal process documentation, procedures, training materials
- Organizational charts, employee directories with phone/email
- Budget allocations, financial forecasts (not audited financials)
- Non-sensitive vendor contracts (terms not requiring confidentiality)
- IT infrastructure documentation, system architecture diagrams
- Performance metrics, internal dashboards, operational reports

**Characteristics:**
- Moderate business impact if disclosed (competitive disadvantage, operational disruption)
- No legal or regulatory restriction preventing vendor access
- Vendor must be contractually bound to confidentiality (NDA required)
- Basic security controls acceptable (role-based access, TLS encryption in transit)

### CONFIDENTIAL

Sensitive business data or personal information. Disclosure poses legal, compliance, financial, or reputational risk.

**Examples:**
- Customer personally identifiable information (name, address, phone, email, IP address)
- Customer financial transactions (purchase history, payment methods, account balances)
- Customer behavioral data (browsing history, preference data, interaction logs)
- Employee personal data (name, address, phone, emergency contacts, direct reports)
- Employee compensation data, performance reviews, disciplinary records
- Customer contract terms, pricing, license agreements
- Intellectual property (source code, algorithms, design documents, patents)
- Financial data (actual revenue, margins, cost structures, M&A plans, funding rounds)
- Trade secrets, competitive intelligence, supplier relationships
- Health and safety records (workplace incidents, safety inspections)

**Characteristics:**
- Significant financial, legal, or reputational impact if disclosed
- Regulatory compliance requirements apply (GDPR, CCPA, GLBA, HIPAA depending on data type)
- Vendor must have demonstrable security certifications (SOC 2 Type II minimum)
- Data protection agreement (DPA) mandatory
- Encryption at rest and in transit required
- Vendor must support audit rights and compliance verification
- Multi-factor authentication and role-based access control required

### RESTRICTED

Highly sensitive data subject to legal hold or maximum regulatory protection. Disclosure is prohibited or would create severe legal/financial consequences.

**Examples:**
- Health information subject to HIPAA (protected health information, PHI)
- Payment card data subject to PCI DSS (primary account numbers, authentication codes)
- Biometric data (fingerprints, facial recognition data, iris scans)
- Legal privileged communications (attorney-client privileged emails, legal strategy)
- Passwords, authentication credentials, encryption keys
- Audit logs and forensic data from security investigations
- Data subject to regulatory hold (litigation, regulatory investigation)
- Financial information subject to regulatory filing requirements (10-K, prospectus)
- Classified or export-controlled data

**Characteristics:**
- Catastrophic financial, legal, or reputational impact if disclosed
- Strict regulatory requirements and legal hold obligations apply
- Vendor must have highest-level certifications (SOC 2 Type II + industry-specific)
- Explicit DPA with data processing restrictions required
- Encryption mandatory (at rest and in transit)
- Vendor must support dedicated tenancy (isolated infrastructure, no data co-mingling)
- Vendor must provide detailed audit trails and data lineage reports
- Data residency and sovereignty controls may be required
- Consider on-premises or private cloud alternatives

---

## Vendor Capability Requirements by Data Classification

This matrix defines the minimum vendor security requirements for each data classification level. Do not send data to a vendor that lacks these capabilities.

| **Data Level** | **Minimum Vendor Security** | **Required Certifications** | **DPA Required** | **Additional Controls** |
|---|---|---|---|---|
| **PUBLIC** | Basic security hygiene (no public credentials, no known breaches) | None | No | None |
| **INTERNAL** | ISO 27001 or equivalent security framework | ISO 27001 recommended | Yes if vendor accesses personal data (employee directory, etc.) | Access logging; confidentiality clause in MSA |
| **CONFIDENTIAL** | SOC 2 Type II + ISO 27001 | SOC 2 Type II mandatory; ISO 27001 required | Yes (mandatory) | Encryption at rest; MFA for all users; RBAC by department/function; quarterly access reviews; vendor audit rights |
| **RESTRICTED** | SOC 2 Type II + ISO 27001 + sector-specific certification | SOC 2 Type II + sector-specific (HIPAA BAA, PCI DSS Level 1, etc.) | Yes, with enhanced DPA | Full encryption; dedicated tenancy; data loss prevention (DLP) tools; comprehensive audit trail; data residency controls; annual third-party assessment |

### Certification Definitions

**ISO 27001**
Industry-standard information security management system certification. Demonstrates vendor has implemented systematic controls for information security. Required for any vendor handling business-critical or sensitive data.

Verification: Request copy of latest ISO 27001 certificate. Check expiration date (typically valid for 3 years). Confirm scope includes the specific services you're using.

**SOC 2 Type II**
Service Organization Control (SOC 2) report by independent auditor covering security, availability, processing integrity, confidentiality, and privacy. Type II means controls were tested over a minimum 6-month period (demonstrates sustained compliance, not point-in-time).

Verification: Request SOC 2 Type II report directly from vendor (not published; vendors provide under NDA). Confirm report date is within 12 months. Review scope to ensure it covers the specific service you're using.

**SOC 2 Type I**
Point-in-time assessment of control design (does the vendor have controls?) but not operating effectiveness (are they actually working?). Less rigorous than Type II. Acceptable for lower-risk data but not for CONFIDENTIAL or RESTRICTED data.

**Sector-Specific Certifications**
- **HIPAA BAA (Business Associate Agreement)**: Required for any vendor handling Protected Health Information (PHI). Vendor must be HIPAA-compliant and sign a Business Associate Agreement.
- **PCI DSS Level 1**: Required for vendors storing, processing, or transmitting payment card data. Vendor must maintain annual PCI compliance audit and penetration testing.
- **SOC 2 Report with Confidentiality Attestation**: Some vendors publish SOC 2 reports with explicit attestation on data confidentiality controls. Preferred for handling customer or employee data.
- **GDPR Readiness**: EU data processing. Vendor must demonstrate compliance with GDPR requirements (data subject rights, data processing documentation, subprocessor controls).
- **NIS2 Compliance**: For vendors handling critical infrastructure components (energy, telecommunications, healthcare). Vendor must meet European Network and Information Systems Directive requirements.
- **AI Act Compliance (emerging)**: For AI/ML vendors, compliance with EU AI Act risk classification and guardrails.

---

## Data Flow Assessment Template

For each vendor, document which data classifications flow to them and under what circumstances:

```
VENDOR: [Name]

Data Flows to This Vendor:

1. Data Classification: [PUBLIC / INTERNAL / CONFIDENTIAL / RESTRICTED]
   Data Type: [e.g., customer email addresses, sales transactions, employee names]
   Volume: [e.g., 2.5M customer records, updated daily]
   Purpose: [e.g., marketing email platform, customer analytics, HR administration]
   Flow Frequency: [Continuous / Daily / Weekly / On-demand / One-time]
   Channel: [API / Manual upload / Secure file transfer / Real-time sync]
   Retention: [How long does vendor store the data? When is it deleted?]

2. Data Classification: [PUBLIC / INTERNAL / CONFIDENTIAL / RESTRICTED]
   Data Type: [...]
   [repeat for each data flow]

Vendor Capabilities Review:
  ✓ Has vendor provided:
    [ ] ISO 27001 certificate (current, scope covers our use case)
    [ ] SOC 2 Type II report (within 12 months, scope includes relevant services)
    [ ] Sector-specific certification if required (HIPAA BAA, PCI DSS, etc.)
    [ ] Data Processing Agreement (DPA) executed
    [ ] Encryption at rest (for CONFIDENTIAL/RESTRICTED)
    [ ] Encryption in transit (TLS 1.2+)
    [ ] Multi-factor authentication (for CONFIDENTIAL/RESTRICTED)

Assessment:
  ✓ All required certifications in place: [YES / NO]
  ✓ All data flows appropriate for vendor capability level: [YES / NO]
  ✓ DPA executed and adequate: [YES / NO]
  ✓ Controls documented and auditable: [YES / NO]

Issues / Gaps:
  [ ] Vendor lacks ISO 27001 but handles INTERNAL data → Require ISO 27001 or reduce data flow
  [ ] Vendor lacks SOC 2 Type II but handles CONFIDENTIAL data → Do not send; migrate to compliant vendor
  [ ] Vendor has not signed DPA → Negotiate and execute DPA before data transfer
  [ ] Encryption at rest not confirmed → Verify encryption status before data transfer

Owner: [Person responsible for this vendor relationship]
Review Date: [When was this last verified?]
```

---

## Prohibited Data Flows

The following data must NEVER be sent to ANY vendor, regardless of vendor certifications:

| **Data Type** | **Why Prohibited** | **Safe Alternative** |
|---|---|---|
| **Master credentials** (master passwords, root admin credentials) | If vendor is breached, attacker gains complete system access | Vendors should authenticate as limited-scope service accounts; rotate credentials if vendor access is needed |
| **Encryption keys** (AES keys, RSA private keys, master keys) | If vendor has encryption keys, they can decrypt your data; defeating the purpose of encryption | Keep encryption keys in your infrastructure (KMS or HSM). Vendor receives encrypted data only. |
| **Session tokens / API keys** (JWT tokens, OAuth tokens, AWS access keys) | If vendor has your auth tokens, they can impersonate users or access systems as you | Issue vendor-specific, limited-scope API keys. Rotate regularly. Revoke immediately when vendor relationship ends. |
| **Unredacted audit logs** (security logs, access logs, system logs) | Logs often contain sensitive data (IP addresses, user names, credentials accidentally logged) | Sanitize logs before sending to vendor. Remove credentials, personal data, session tokens. |
| **Backups of sensitive data without encryption** | Backups are attack targets. Unencrypted backups can be restored and exploited | Encrypt backups before sending to vendor. Vendor stores encrypted backup only; you retain encryption key. |
| **Full source code** (to non-development vendors) | Proprietary algorithms, business logic, infrastructure design exposed | Share only code components necessary for vendor to do their job. Use code obfuscation or compilation if IP protection critical. |
| **Customer lists with segmentation data** (without anonymization) | Reveals your highest-value customers and business strategy to vendor | Share anonymized or aggregated customer cohort data. Do not share individual customer names, revenue, contact info, segmentation. |

---

## Data Minimization Checklist

Before sending data to any vendor, ask:

- [ ] **Do we actually need to send this data?** Could the vendor accomplish their function with less sensitive data (anonymized, aggregated, or pseudonymized)?
  - Example: Analytics vendor needs user behavior trends, not individual user IDs and names. Send aggregated cohorts instead.

- [ ] **Can we anonymize or pseudonymize?** Remove or replace identifiers so individuals cannot be re-identified.
  - Example: Send employee count by department, not employee names and titles.

- [ ] **Can we redact sensitive fields?** Keep data in the dataset but mask sensitive values.
  - Example: For customer transaction analysis, send transaction amounts but redact customer names.

- [ ] **Can we subset the data?** Send only records necessary for the vendor's function, not entire database.
  - Example: Email service vendor needs only active email subscribers, not full customer database including inactive accounts.

- [ ] **Can we delay the data flow?** Defer sensitive data transfer until it's actually needed, reducing exposure window.
  - Example: Share log analysis with vendor quarterly (batched) rather than real-time streaming.

- [ ] **Have we set a data retention limit?** When does the vendor delete data?
  - Example: Vendor retains data for 90 days after service ends, then permanently deletes. Do not allow indefinite retention.

**Data Minimization Example**

Scenario: Marketing automation vendor needs to send email campaigns to customers.

Unnecessary data: Full customer database (names, emails, addresses, purchase history, preferences, custom fields, phone numbers, company info)

Minimized data: Email addresses and first names only. Preferences and segment tags (stored in your marketing automation account, not in the vendor's system)

Result: If vendor is breached, attacker gets emails and first names, not comprehensive customer profiles. Reduces your exposure.

---

## Vendor Promotion / Demotion

Vendor security capabilities can improve or degrade over time. Adjust allowed data flows accordingly.

### Vendor Promotion (Upgrade)

**Scenario:** Your current internal-data-only vendor achieves SOC 2 Type II certification.

**Action:**
1. Request SOC 2 Type II report and review
2. Evaluate whether your CONFIDENTIAL data classifications need this vendor
3. If yes, execute DPA and initiate data transfer of CONFIDENTIAL datasets
4. Update data flow documentation to reflect new authorization

**Example:**
```
Previous: Handles INTERNAL data only
Certificate Achieved: SOC 2 Type II (received Jan 2026)
New Authorization: May now receive CONFIDENTIAL data (customer PII, transaction history)
Data Transfer Plan: Migrate customer email database (2M records) by March 2026
Owner: Data Governance team
```

### Vendor Demotion (Downgrade)

**Scenario:** Your vendor experienced a security incident. SOC 2 report shows control failures during incident period. Capabilities degraded.

**Action:**
1. Assess: What controls failed? Is this vendor still trustworthy?
2. Decision: Demote to lower data classification or exit vendor relationship
3. If demoting: Restrict vendor to lower-sensitivity data. Retrieve and delete sensitive data.
4. Communicate: Notify vendor of demotion and data restrictions
5. Update documentation: Reflect reduced authorization

**Example:**
```
Previous: SOC 2 Type II, authorized for CONFIDENTIAL data
Incident: Ransomware attack (Jan 2026). Investigation shows inadequate access controls.
Demotion: Restricted to INTERNAL data only pending remediation
Action Plan: Do not send customer PII to this vendor until SOC 2 is re-assessed
Timeline: Re-evaluation 6 months post-incident
Owner: Information Security team
```

---

## Integration with GDPR and Data Protection Regulations

Data classification is not separate from data protection law. They reinforce each other.

### GDPR Articles Aligned with Data Classification

**Article 5: Principles Relating to Processing (Data Minimization)**

GDPR requires that personal data be processed lawfully and transparently, and in a manner that is fair to the data subject.

- Data minimization principle: Collect and process only the personal data necessary for stated purpose
- **Alignment:** CONFIDENTIAL and RESTRICTED classifications enforce data minimization by restricting which vendors can access personal data and requiring explicit purpose limitation

**Article 25: Data Protection by Design and by Default**

Organizations must implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including encryption, access controls, and the ability to ensure ongoing confidentiality, integrity, availability.

- **Alignment:** Data classification requirements (SOC 2 Type II, encryption, MFA, audit trails) directly implement GDPR Article 25 obligations

**Article 32: Security of Processing**

Organizations must ensure appropriate security of personal data, taking account of the state of the art, costs of implementation, nature and scope of processing, and risks presented.

- **Alignment:** Requiring SOC 2 Type II for CONFIDENTIAL data and SOC 2 Type II + sector certs for RESTRICTED data demonstrates appropriate security measures proportionate to data sensitivity and risk

**Article 28: Processor Requirements**

Any vendor processing personal data on your behalf must be a Data Processor, must have a DPA in place, and must be contractually bound to security and confidentiality obligations.

- **Alignment:** Data classification matrix requires DPA for INTERNAL (if personal data included) and CONFIDENTIAL/RESTRICTED, implementing Article 28 obligations

### Implementation: Data Classification in GDPR Context

1. **Identify Personal Data**
   - Which of your datasets contain personal data (name, email, IP address, customer ID, etc.)?
   - Classify that data as CONFIDENTIAL minimum (never PUBLIC or INTERNAL if personal data included)

2. **Map Data Flows**
   - For each personal data flow to a vendor, confirm vendor is a Data Processor
   - Ensure DPA is executed
   - Verify vendor certifications meet classification requirements

3. **Document Purpose Limitation**
   - For each vendor processing personal data, document the specific purpose (e.g., "email marketing," "customer analytics")
   - Vendor is contractually prohibited from using data for any other purpose
   - Data retention period specified (vendor deletes data after X days/months)

4. **Implement Data Subject Rights**
   - Ensure vendor can support your fulfillment of GDPR Articles 15–22 (data subject access requests, deletions, portability, objections)
   - Vendor must be able to retrieve or delete data on your request within defined timeframes

5. **Conduct Impact Assessment (DPIA)**
   - For high-risk personal data processing (GDPR Articles 35–36), conduct Data Protection Impact Assessment
   - Document the assessment and mitigations for each vendor involved

---

## Annual Review Process

Data classification and vendor alignment must be reviewed at least annually to ensure continued compliance and security posture.

### Annual Review Checklist

**Quarterly Check (Lightweight)**
- [ ] Verify no new unauthorized data flows to vendors
- [ ] Monitor vendor security news (breaches, policy changes, executive changes)
- [ ] Confirm vendor certifications have not expired

**Annual Review (Comprehensive)**
- [ ] For each vendor, confirm:
  - [ ] Data flow classification is still accurate (no data creep to higher sensitivity levels)
  - [ ] Vendor certifications current (ISO 27001, SOC 2 still valid)
  - [ ] Data retention policy still enforced (vendor deletes data per contract)
  - [ ] DPA still adequate (regulatory changes, new data types covered)
  - [ ] Access controls still appropriate (MFA, RBAC, encryption in place)

- [ ] Assess vendor security incidents or regulatory findings in past year
  - [ ] Any breaches, fines, regulatory action? Reassess capability
  - [ ] Any control weaknesses? Plan remediation or demotion

- [ ] Evaluate new vendors or data flows
  - [ ] Has organization adopted new vendors or services?
  - [ ] New data classifications?
  - [ ] Certifications and controls in place before data transfer?

- [ ] Update data classification scheme
  - [ ] New data types created? Assign appropriate classification
  - [ ] Regulatory changes (AI Act, GDPR amendments)? Update classifications
  - [ ] Industry standards changed? Update required vendor certifications

- [ ] Documentation
  - [ ] Data flow assessments current and signed off by data owner
  - [ ] Vendor capability assessments documented
  - [ ] Data minimization review completed (are we still sending only necessary data?)

### Annual Review Documentation

Produce an annual Data Governance report:
```
DATA GOVERNANCE REVIEW [YEAR]

Summary:
  Total vendors reviewed: ___
  Data flows verified: ___
  Compliance gaps identified: ___
  Remediation plans issued: ___

Vendors by Data Classification Authorized:
  PUBLIC: ___ vendors
  INTERNAL: ___ vendors
  CONFIDENTIAL: ___ vendors (SOC 2 Type II required)
  RESTRICTED: ___ vendors (SOC 2 Type II + sector cert required)

Issues Identified:
  Critical (resolve within 30 days):
    - Vendor X lacks SOC 2 Type II but handles CONFIDENTIAL data
      Action: Migrate data or terminate relationship
    - Vendor Y DPA expired. No valid agreement in place
      Action: Execute new DPA or cease data transfer

  High (resolve within 90 days):
    - Vendor Z has not confirmed encryption at rest
      Action: Obtain certification or reduce data classification

  Medium (resolve within 180 days):
    - Access review overdue for Vendor A
      Action: Conduct quarterly access review

Certification Status:
  Vendors with current ISO 27001: ___/___
  Vendors with current SOC 2 Type II: ___/___
  Vendors with valid DPAs: ___/___

Regulatory Changes:
  [ ] GDPR amendments or guidance changes
  [ ] NIS2 compliance requirements (affected vendors: ___)
  [ ] AI Act compliance requirements (affected vendors: ___)
  [ ] Sector-specific regulations (affected vendors: ___)

Approved by: __________ (Chief Information Security Officer)
Date: __________
```

---

## Summary

Data classification is the foundation of secure vendor management. Establish clear data sensitivity levels, map vendors to appropriate security requirements, document data flows, and review annually. Ensure no sensitive data flows to a vendor without corresponding security certifications and controls. When vendor capabilities improve or degrade, adjust data flows accordingly. Integrate with GDPR and other regulatory requirements to ensure your vendor security posture meets legal obligations.
