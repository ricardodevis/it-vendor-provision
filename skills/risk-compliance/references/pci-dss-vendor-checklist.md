# PCI DSS Vendor Checklist
## Payment Card Industry Data Security Standard (Payment Card Processing)

**Current Standard:** PCI DSS v4.0 (released March 2024)
**Mandatory Effective Date:** March 31, 2025
**Applicable to:** All vendors that store, process, or transmit cardholder data (CHD)
**Type:** OPTIONAL sectoral checklist for payment processing environments

---

## Scope and Applicability

PCI DSS compliance is required for any organization that handles payment card data. This includes:

### Entities Required to Comply:

- [ ] Merchants that accept payment cards (all levels)
- [ ] Service providers that process or store cardholder data
- [ ] Payment processors and gateways
- [ ] Card networks and acquirers
- [ ] Issuers and card associations
- [ ] Any vendor with access to card data or cardholder data environment (CDE)

### Vendor Scope Definition:

**A vendor is IN SCOPE if they:**
- [ ] Process or store cardholder data (PAN, expiry, CVV, etc.)
- [ ] Connect to systems handling cardholder data
- [ ] Handle authentication credentials for payment systems
- [ ] Have network access to your payment processing environment
- [ ] Store, process, or transmit magnetic stripe data or equivalents

**A vendor is OUT OF SCOPE if they:**
- [ ] Process only payment tokens (without access to tokenization keys)
- [ ] Have no network connectivity to cardholder data environment
- [ ] Handle only encrypted payment data with keys held by payment processor
- [ ] Explicitly excluded in your PCI DSS scoping documentation

---

## PCI DSS v4.0: 12 Core Requirements Overview

The PCI DSS framework comprises 12 core security requirements. Below is a summary of vendor-relevant controls within each requirement.

### Requirement 1: Firewall Configuration and Management

**Vendor Responsibility (if in CDE):**
- [ ] Firewall rules documented and reviewed annually
- [ ] Inbound/outbound traffic restricted to business needs only
- [ ] Deny-by-default policy implemented
- [ ] Rules prevent direct access between internal and external systems
- [ ] Firewall rules tested and documented quarterly

### Requirement 2: Do Not Use Vendor-Supplied Defaults

**Vendor Responsibility:**
- [ ] All default passwords changed on systems
- [ ] Default SNMP community strings changed
- [ ] Unnecessary services disabled
- [ ] Default access accounts removed or disabled
- [ ] Security parameters documented per system
- [ ] Annual documentation review and validation

### Requirements 3-4: Data Protection (Encryption)

#### Requirement 3: Protect Stored Cardholder Data

**Vendor Responsibility:**
- [ ] Primary Account Number (PAN) is the MINIMUM data retained
- [ ] Do NOT store without business justification: CVV, PIN, magnetic stripe data
- [ ] Stored cardholder data encrypted using strong cryptography
- [ ] Encryption keys managed securely (see Req. 3.6)
- [ ] Encryption algorithm: AES-256 minimum for stored data
- [ ] Hashing (if used) employs strong one-way algorithms (SHA-256+)
- [ ] Key management system prevents unauthorized key access
- [ ] Encryption status documented

**Evidence:**
- [ ] Inventory of stored cardholder data
- [ ] Data retention justification
- [ ] Encryption key management procedures
- [ ] Key rotation documentation (at least annually)

#### Requirement 4: Protect Cardholder Data in Transit

**Vendor Responsibility:**
- [ ] Cardholder data encrypted during transmission over public networks
- [ ] TLS 1.2 or higher (TLS 1.3 recommended for new implementations)
- [ ] Strong cipher suites only (no weak ciphers)
- [ ] No unencrypted transmission of cardholder data
- [ ] Wireless networks use WPA2 minimum (WPA3 preferred)
- [ ] Encryption endpoints: payment terminal to processor, internal system-to-system
- [ ] Certificate management procedures documented

**Evidence:**
- [ ] Network flow diagrams showing encryption points
- [ ] TLS configuration documentation
- [ ] SSL/TLS certificate details (issuer, validity, cipher strength)
- [ ] Wireless security configuration (if applicable)

### Requirements 5-6: Vulnerability Management

#### Requirement 5: Protect Systems Against Malware

**Vendor Responsibility:**
- [ ] Antivirus/anti-malware deployed on all systems
- [ ] Antivirus signatures automatically updated
- [ ] Real-time scanning enabled
- [ ] Regular antivirus scans scheduled (at least weekly)
- [ ] Alerts configured for detected threats
- [ ] Removal procedures documented
- [ ] Antivirus logs monitored and retained
- [ ] Antivirus effectiveness documented

**Evidence:**
- [ ] Antivirus deployment list
- [ ] Signature update schedule
- [ ] Scan logs (recent)
- [ ] Antivirus alert configuration

#### Requirement 6: Maintain Secure Systems and Applications

**Vendor Responsibility:**
- [ ] Security patches applied timely (critical within 30 days)
- [ ] Patch management procedures documented
- [ ] Systems and software kept current
- [ ] Security bulletins monitored
- [ ] Compensating controls for delays documented
- [ ] Secure development practices implemented (if developing payment software)
- [ ] Code reviews and testing before production
- [ ] Web application firewall (WAF) deployed (for web applications)
- [ ] Security regression testing
- [ ] Authentication tokens properly managed
- [ ] Security architecture reviewed annually

**Evidence:**
- [ ] Patch management policy and procedure
- [ ] Patch deployment logs (recent 3-6 months)
- [ ] System inventory with patch status
- [ ] Security development methodology documentation (if applicable)

### Requirements 7-8: Access Control

#### Requirement 7: Restrict Access to Cardholder Data

**Vendor Responsibility:**
- [ ] Access to cardholder data limited to business need-to-know
- [ ] Access control lists (ACLs) documented
- [ ] Default "deny all" policy implemented
- [ ] Access reviewed and approved before granting
- [ ] Quarterly access review and revocation of unnecessary access
- [ ] Role-based access control (RBAC) implemented
- [ ] Separation of duties enforced (no one person can perform critical functions)
- [ ] Compensating controls documented for technical limitations

**Evidence:**
- [ ] Access control policy documentation
- [ ] User access lists by role
- [ ] Recent access review approval (quarterly)
- [ ] Audit logs showing access changes

#### Requirement 8: Identify and Authenticate Access

**Vendor Responsibility:**
- [ ] All users have unique user ID (no shared accounts)
- [ ] Strong passwords: minimum 12 characters, complexity requirements
- [ ] Password history: cannot reuse last 4 passwords
- [ ] Password expiration: maximum 90 days
- [ ] Account lockout: 6 attempts then lock 30 minutes
- [ ] Multi-factor authentication (MFA) mandatory for:
  - [ ] Administrative access to cardholder data environment
  - [ ] Remote access to systems in CDE
  - [ ] Vendor support staff accessing cardholder data
- [ ] MFA methods: something you have + something you know (not SMS alone)
- [ ] Inactive sessions timeout after 15 minutes
- [ ] User identity verified before password reset
- [ ] Access termination procedures documented

**Evidence:**
- [ ] User account policy documentation
- [ ] Password policy configuration
- [ ] MFA implementation details
- [ ] User access termination procedures
- [ ] Recent user account reviews

### Requirement 9: Physical Access Restrictions

**Vendor Responsibility:**
- [ ] Physical barriers protecting systems (fences, doors, locks)
- [ ] Access badges or key cards required
- [ ] Access logs maintained (electronic or manual)
- [ ] Restricted areas clearly marked
- [ ] Visitor access controlled and logged
- [ ] Visitor escorts required in restricted areas
- [ ] Video surveillance (CCTV) in sensitive areas
- [ ] Physical media storage secured (locked, inventoried)
- [ ] Destruction procedures for physical media containing cardholder data
- [ ] Environmental protections (fire suppression, climate control)

**Evidence:**
- [ ] Facility diagram and access points
- [ ] Physical access policy
- [ ] Visitor log samples
- [ ] CCTV coverage documentation
- [ ] Media destruction procedures and logs

### Requirement 10: Track and Monitor Access to Network

**Vendor Responsibility:**
- [ ] System logs maintained for all systems in CDE
- [ ] Audit trails record and protect user identification, access date/time, access type
- [ ] Admin/privileged access events logged separately
- [ ] Unauthorized access attempts logged
- [ ] Logs protected against tampering (centralized, read-only)
- [ ] Log retention: minimum 1 year, 3 months online
- [ ] Log monitoring procedures in place
- [ ] Anomalies identified and investigated
- [ ] Log review documented
- [ ] Database changes logged (if databases used)

**Evidence:**
- [ ] Log retention policy
- [ ] Sample logs from critical systems
- [ ] Log monitoring procedure documentation
- [ ] Incident investigation examples
- [ ] Log protection mechanisms documentation

### Requirement 11: Regular Security Testing

**Vendor Responsibility:**
- [ ] Quarterly security scans for external systems
- [ ] Annual penetration testing (or PTS assessment)
- [ ] Annual internal vulnerability assessments
- [ ] Vulnerabilities documented, risk-ranked, remediated
- [ ] Compensating controls for difficult remediations documented
- [ ] Quarterly wireless vulnerability assessment (if wireless present)
- [ ] Security configuration reviews
- [ ] File integrity monitoring for critical files
- [ ] External scans show passing status (no "FAIL" vulnerabilities)

**Evidence:**
- [ ] Most recent vulnerability scan report (passing)
- [ ] Penetration test report (annual, dated)
- [ ] Vulnerability tracking and remediation logs
- [ ] Scan exemptions and compensating controls documented
- [ ] File integrity monitoring configuration

### Requirement 12: Information Security Policy

**Vendor Responsibility:**
- [ ] Information security policy documented and approved
- [ ] Policy addresses all 12 PCI DSS requirements
- [ ] Security awareness program established
- [ ] Annual security training for all staff
- [ ] Staff sign acknowledgment of policy
- [ ] Incident response procedures documented
- [ ] Acceptable use policy for systems and data
- [ ] Third-party vendor contracts include PCI DSS requirements
- [ ] Responsibility assignment clear (who owns each requirement)
- [ ] Policy reviewed and updated annually

**Evidence:**
- [ ] Information security policy document
- [ ] Staff training records and completion dates
- [ ] Policy acknowledgment signatures
- [ ] Incident response plan documentation
- [ ] Third-party vendor contracts (sample)

---

## Vendor Validation Levels

PCI DSS defines four levels based on transaction volume. Validation requirements scale with level.

### Vendor Validation Level Determination

| Level | Annual Visa Card Transactions | Validation Method |
|-------|-------------------------------|-------------------|
| **1** | >6 million | Report on Compliance (ROC) by qualified assessor |
| **2** | 1-6 million | Annual self-assessment questionnaire (SAQ) Type 1 |
| **3** | 20,000-1 million | SAQ Type 2 or 3 (depending on system architecture) |
| **4** | <20,000 | SAQ Type 4 (or network scan if processing remotely) |

**Vendor Compliance Checklist:**

For each vendor, determine:
- [ ] What is their transaction volume category?
- [ ] What is their validation level requirement?
- [ ] What validation method applies?
- [ ] Have they completed their validation?
- [ ] Is their validation current (within 12 months)?

### Attestation of Compliance (AOC)

All vendors must provide **Attestation of Compliance (AOC)** document:

- [ ] Vendor completes appropriate SAQ or receives ROC
- [ ] Qualified assessor signs (for ROC)
- [ ] Management signs attestation
- [ ] Attestation dated and valid for 12 months
- [ ] Copy provided to your organization
- [ ] Copy maintained in records

---

## What to Request From Vendors

### Initial Vendor Assessment

Request the following documentation from vendors in scope:

**Documentation Package:**

1. **Compliance Status**
   - [ ] What is your PCI DSS compliance level (1-4)?
   - [ ] Have you completed your annual validation (SAQ or ROC)?
   - [ ] Copy of your Attestation of Compliance (AOC)

2. **Security Assessment (SAQ/ROC)**
   - [ ] Completed SAQ (self-assessment questionnaire), OR
   - [ ] Report on Compliance (ROC) from qualified assessor
   - [ ] External Approved Scanning Vendor (ASV) scan report (shows PASS status)

3. **Security Details**
   - [ ] Current vulnerability scan results (external ASV scan, showing PASS)
   - [ ] Penetration test report (annual, most recent)
   - [ ] Security architecture diagram
   - [ ] Data flow diagram showing cardholder data

4. **Data Handling**
   - [ ] What cardholder data does vendor store/process? (PAN, CVV, expiry, etc.)
   - [ ] Where is data stored? (geographic location, cloud provider, on-premise)
   - [ ] How long is data retained?
   - [ ] Encryption method for stored data
   - [ ] Encryption method for data in transit
   - [ ] Key management procedures

5. **Operational Controls**
   - [ ] Security policy documentation
   - [ ] User access control procedures
   - [ ] Incident response procedures
   - [ ] Business continuity/disaster recovery plan
   - [ ] Staff training documentation (annual)

6. **Third-Party Management**
   - [ ] List of subvendors with access to cardholder data
   - [ ] Confirmation that subvendors are also PCI DSS compliant
   - [ ] Subvendor compliance documentation (SAQ/ROC/ASV scans)

### Ongoing Monitoring

**Quarterly/Annual Vendor Review:**

- [ ] Request updated AOC (expires 12 months after issue)
- [ ] Request latest ASV scan (should be quarterly minimum)
- [ ] Review SLA compliance
- [ ] Inquiry about any security incidents
- [ ] Any changes to systems, locations, or data handling
- [ ] Confirmation of annual security training completion

---

## Shared Responsibility Matrix

Both you and your vendors have responsibilities for PCI DSS compliance. Use this matrix to clarify division of responsibility.

### Example: Payment Processor + Your Organization

| Requirement | Processor | Your Organization |
|-------------|-----------|-------------------|
| Firewall | Processor | Your perimeter |
| Encryption of stored CHD | Processor (if stored) | N/A if tokenized |
| Encryption in transit | Processor | Your connections to processor |
| Vulnerability scans | Processor external | Your external scans |
| Penetration testing | Processor | Your network testing |
| Patch management | Processor systems | Your systems |
| User access control | Processor system access | Your staff access to systems |
| MFA | Processor admin access | Your admin/remote access |
| Physical security | Processor data center | Your office/facilities |
| Audit logs | Processor systems | Your systems + processor integration |
| Incident response | Processor leads | Your participation/notification |

**Key Principle:** Define clear responsibility boundaries in vendor contract.

---

## Service Provider Specific Requirements

**If vendor is a Service Provider (processes CHD on behalf of multiple entities):**

### Requirement 12.8 & 12.9: Service Provider Requirements

- [ ] Service provider maintains PCI DSS compliance documentation
- [ ] Service provider provides quarterly compliance status to customers
- [ ] Service provider maintains list of customer organizations
- [ ] Service provider has dedicated security personnel
- [ ] Service provider publishes security policy
- [ ] Service provider has incident response procedures
- [ ] Service provider provides security training to staff
- [ ] Service provider has acceptable use policy for customers
- [ ] Service provider maintains incident log
- [ ] Service provider shares audit/compliance results with customers

**What You Receive:**
- [ ] Service provider provides you a PCI DSS compliance status document
- [ ] Service provider certifies subvendors are also compliant
- [ ] Service provider notifies you of material security incidents within 30 days
- [ ] Service provider provides quarterly AOC validation

---

## Vendor Contract Requirements

### Required Contractual Clauses for PCI DSS Vendors

Ensure vendor contracts include:

**Security and Compliance:**
- [ ] Vendor maintains PCI DSS compliance per current standard
- [ ] Vendor provides annual Attestation of Compliance (AOC)
- [ ] Vendor completes external security scans quarterly
- [ ] Vendor completes annual penetration testing
- [ ] Vendor maintains all 12 PCI DSS security requirements

**Data Handling:**
- [ ] Vendor stores/processes only minimum cardholder data necessary
- [ ] Vendor implements encryption per PCI DSS standards
- [ ] Vendor retains data only as long as business-required
- [ ] Vendor securely destroys data upon contract termination
- [ ] Vendor does not use cardholder data for any purpose except contracted service

**Incidents and Breaches:**
- [ ] Vendor notifies you within 24 hours of suspected breach
- [ ] Vendor provides preliminary and final incident reports
- [ ] Vendor cooperates with breach investigation and forensics
- [ ] Vendor maintains incident insurance (if applicable)

**Audits and Inspections:**
- [ ] You have right to audit vendor PCI DSS compliance
- [ ] Vendor provides access to compliance documentation
- [ ] Vendor permits on-site security assessment
- [ ] Vendor cooperates with payment card brands' auditors
- [ ] Vendor provides quarterly vulnerability scan results

**Subcontractors:**
- [ ] Vendor obtains your approval before engaging subcontractors with CHD access
- [ ] Vendor maintains list of approved subcontractors
- [ ] Subcontractors are also PCI DSS compliant
- [ ] Vendor flows down PCI DSS requirements to subcontractors
- [ ] Vendor remains liable for subcontractor compliance

**Change Management:**
- [ ] Vendor notifies you of material system changes affecting data security
- [ ] Vendor updates you on security patches/updates
- [ ] Vendor seeks approval before migrating systems/data
- [ ] Vendor maintains change control procedures

**Termination:**
- [ ] Vendor securely returns or destroys all cardholder data within 30 days
- [ ] Vendor confirms data destruction in writing
- [ ] Vendor terminates subcontractor access
- [ ] Vendor removes you from their customer list

---

## Annual Compliance Verification Process

### Timeline

| Task | Frequency | Responsibility |
|------|-----------|-----------------|
| Request/review vendor AOC | Annually | Vendor Manager |
| Review ASV scan report | Quarterly | Security/Compliance |
| Request penetration test report | Annually | Vendor Manager |
| SLA and incident review | Quarterly | Service Owner |
| Contract compliance review | Annually | Procurement/Legal |
| Subcontractor validation | Annually | Vendor Manager |
| Assessment update (v4.0 compliance) | Annually | Compliance Officer |

### Compliance Checklist

**Vendor PCI DSS Compliance Verification:**

- [ ] AOC received and valid (dated within 12 months)
- [ ] AOC indicates compliance with all 12 requirements
- [ ] ASV scan report PASSES (no FAIL vulnerabilities)
- [ ] Penetration test report completed within past 12 months
- [ ] Vendor level (1-4) confirmed and matches transaction volume
- [ ] Validation method (SAQ/ROC) appropriate for level
- [ ] No unresolved security incidents in past year
- [ ] Subvendors identified and their compliance verified
- [ ] Contract includes all mandatory PCI DSS clauses
- [ ] Data handling practices align with PCI DSS requirements

---

## Transition to PCI DSS v4.0

### Key Changes in v4.0

- [ ] MFA now mandatory (not compensating control alternative)
- [ ] 12-character minimum passwords (increased from 8)
- [ ] Cryptographic key strength requirements updated
- [ ] Multi-cloud environment guidance added
- [ ] API security requirements clarified
- [ ] Vulnerability remediation timelines tightened
- [ ] Testing frequency and depth increased

### Vendor v4.0 Readiness

Request from vendors:
- [ ] Confirmation of v4.0 compliance status
- [ ] Timeline for v4.0 implementation (if not completed)
- [ ] Any changes to security controls in v4.0 transition
- [ ] Updated SOC 2 Type II reports reflecting v4.0 controls
- [ ] Confirmation of deadline compliance (March 31, 2025, mandatory)

---

## Documentation and Records

### Maintain Records for Each Vendor

- [ ] Current Attestation of Compliance (AOC)
- [ ] External Approved Scanning Vendor (ASV) scan reports (quarterly)
- [ ] Penetration testing reports (annual)
- [ ] Incident response procedures
- [ ] Approved subvendor list
- [ ] Data flow diagrams
- [ ] Vendor contract with security requirements
- [ ] Compliance assessment/reassessment documentation
- [ ] Communication logs regarding compliance matters
- [ ] Breach notification procedures and acknowledgment

### Regulatory Compliance Reporting

If required to report PCI DSS status (to card brands, acquiring banks, etc.):
- [ ] Document your vendor management process
- [ ] Maintain vendor compliance evidence
- [ ] Demonstrate ongoing monitoring
- [ ] Provide attestation of vendor compliance to regulators

---

## Key Takeaways for Vendor Management

1. **Define scope:** Determine which vendors handle cardholder data
2. **Request validation:** Get Attestation of Compliance (AOC) + validation reports
3. **Verify compliance:** Check ASV scans, penetration tests, and documentation
4. **Contractual protection:** Include all mandatory PCI DSS clauses
5. **Ongoing monitoring:** Quarterly review of scans, annual AOC verification
6. **v4.0 transition:** Confirm vendor compliance with v4.0 by March 31, 2025
7. **Subcontractor flow-down:** Ensure vendors' vendors are also compliant
8. **Incident response:** Establish 24-hour breach notification procedures

---

**Last Updated:** February 2026
**Standard Version:** PCI DSS v4.0 (v3.2.1 obsolete as of March 31, 2025)
**Next Review:** February 2027 or upon PCI DSS standard updates
