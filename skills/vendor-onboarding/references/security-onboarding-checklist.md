# Security Onboarding Checklist for IT Vendors

This checklist covers the security controls that must be operational BEFORE team access to the vendor system. Each item must be completed and verified by the designated owner. This is not optional—it is the prerequisite for moving from onboarding to access provisioning.

---

## Section A: Identity & Access

### A1. SSO/SAML Integration

- [ ] **Vendor supports SAML 2.0 or OIDC** (not proprietary SSO)
  - Verify in ~~document repository or trust center documentation
  - If not supported, escalate to vendor for timeline
- [ ] **Identity provider integration configured**
  - SP metadata exchanged with ~~identity provider
  - SAML assertion mapping configured (claims for email, groups, department)
  - Sign-in/sign-out flow tested from test environment
- [ ] **SSO tested from production network**
  - User authenticates via ~~identity provider and lands in vendor system
  - Session lifetime matches organizational policy (typically 8-12 hours)
  - MFA challenge received if required
- [ ] **SAML assertion encryption enabled**
  - Certificates validated; rotation policy documented
- [ ] **Logout workflow verified**
  - Logging out of vendor system clears session
  - SLO (Single Logout) implemented if users will access multiple federated systems
- [ ] **Test account provisioning**
  - Create test user in ~~identity provider → verify it appears in vendor system (JIT) or manually provision

**Owner:** IAM team + Vendor platform engineer
**Timeline:** Weeks 1-2
**Risk if incomplete:** Users cannot access system; hard cutover required; support overload

---

### A2. Multi-Factor Authentication (MFA) Enforcement

- [ ] **Vendor supports hardware tokens, TOTP (Authenticator apps), or SMS**
  - Preference order: Hardware tokens > TOTP apps > SMS
  - Verify support for your organizational standard
- [ ] **MFA enabled on all non-service accounts**
  - Policy enforced: No access without MFA
  - Exceptions logged (e.g., emergency admin, legacy integrations)
- [ ] **MFA tested from production network**
  - User logs in via SSO → MFA challenge appears
  - Challenge succeeds with TOTP app / hardware token
  - Recovery codes stored securely (password manager or physical vault)
- [ ] **MFA recovery process documented**
  - How do users recover account if TOTP device lost?
  - Admin override procedure for locked-out users
  - Vendor support cannot reset MFA without user verification
- [ ] **Service accounts exempt from MFA** (documented exception)
  - Or, if vendor supports it, MFA via API key rotation instead
- [ ] **Conditional MFA policies configured**
  - MFA required for: Admin accounts, sensitive operations, off-network access
  - MFA optional for: On-network access from known devices (if vendor supports)

**Owner:** IAM team + IT security
**Timeline:** Week 1-2
**Risk if incomplete:** Account takeover; insider threat mitigation ineffective

---

### A3. Role-Based Access Control (RBAC) Mapping

- [ ] **Vendor RBAC model understood**
  - Review vendor documentation: what roles exist? What permissions does each role grant?
  - Are roles customizable or fixed?
  - Can fine-grained permissions be assigned (per-record, per-field) or only role-based?
- [ ] **Organizational role mapping designed**
  - Map IT org structure → vendor roles
  - Example mapping documented in spreadsheet or access control matrix
  - Approvals obtained from each department head
- [ ] **Principle of least privilege applied**
  - No user gets more permissions than required for their job
  - Default to read-only; request additional permissions in writing
  - Quarterly access reviews scheduled
- [ ] **Admin role segregation**
  - Admin = full system access (configuration, user management, data access)
  - Separate admins for different functions if possible (security admin vs. operations admin)
  - All admin actions logged and auditable
- [ ] **Test RBAC enforcement**
  - User in "viewer" role cannot edit data
  - User in "department admin" role cannot see other departments' data
  - User in "power user" role can only modify certain fields

**Owner:** IAM team + Department heads
**Timeline:** Week 2-3
**Risk if incomplete:** Data exposure; unauthorized modifications; compliance violation

---

### A4. Service Account Inventory and Lifecycle

- [ ] **Service accounts identified and documented**
  - List all service accounts needed:
    - System-to-system integrations (API automations)
    - Scheduled jobs and batch processes
    - Reporting and data extraction
    - Emergency admin access
  - For each account: purpose, owner, last rotated, next rotation date
- [ ] **Service accounts created with minimal permissions**
  - Each service account gets only permissions required for its specific function
  - Service accounts cannot perform human functions (create records, modify, delete—only query/sync)
- [ ] **Service account credentials stored securely**
  - API keys / passwords stored in vault (HashiCorp, Azure Key Vault, etc.)
  - No credentials in code, config files, or email
  - Access to vault restricted to operations team
- [ ] **Service account access logging enabled**
  - All service account authentications logged
  - Vendor system captures IP, timestamp, action taken
  - Logs forwarded to SIEM for monitoring
- [ ] **API key rotation policy implemented**
  - Keys rotated every 90 days (or per vendor security policy)
  - Rotation procedure documented and tested
  - Old keys disabled (not deleted) before new key activation
- [ ] **Emergency admin service account secured**
  - Separate account for break-glass emergency access
  - Credentials stored in off-network vault (physical safe, encrypted USB)
  - Requires change control ticket and manager approval to activate
  - Single-use or time-limited token preferred

**Owner:** IT operations + Vendor platform team
**Timeline:** Week 2-3
**Risk if incomplete:** Compromised integrations; credentials exposed; audit trail lost

---

## Section B: Network and Infrastructure

### B1. IP Whitelisting and Network Access

- [ ] **Vendor supports IP whitelisting**
  - Check documentation; if not supported, request feature or accept this risk
- [ ] **IP ranges identified and documented**
  - Office network IP ranges
  - VPN IP ranges (if users access vendor from home)
  - Data center IP ranges (for integrations and batch processes)
  - Mobile IP ranges (if applicable—often "allow all" or geofencing instead)
- [ ] **Whitelist configured in vendor system**
  - All necessary IPs added
  - Test access from each IP range
  - Test access blocked from non-whitelisted IP
- [ ] **Firewall rules deployed on organization side**
  - Outbound: Permit TCP 443 to vendor's domain/IP
  - Inbound: If vendor needs to call back, permit from vendor's IP ranges
  - Rules logged and monitored for violations
- [ ] **DNS configuration verified**
  - Vendor domain resolves correctly from your network
  - No split DNS or redirection interfering with connectivity
  - DNS queries logged (if DLP rules include DNS)

**Owner:** IT infrastructure + Network operations
**Timeline:** Week 1-2
**Risk if incomplete:** Access fails; troubleshooting difficult; attackers not blocked

---

### B2. VPN and Remote Access Requirements

- [ ] **Vendor access via VPN required or optional?**
  - Some vendors require VPN for sensitive operations
  - Document policy: "Users must access from office or authorized VPN"
- [ ] **VPN client deployment confirmed**
  - VPN client installed on all endpoint devices
  - VPN configuration includes vendor system domain in tunnel
  - Connectivity tested
- [ ] **VPN MFA enabled**
  - MFA required for VPN connection
  - Users have tokens or TOTP app configured
- [ ] **Split tunneling policy set**
  - If allowed: Only vendor traffic through VPN, other traffic direct (faster)
  - If not allowed: All traffic through VPN (stricter, slower)
  - Policy communicated to users

**Owner:** IT infrastructure + Endpoint management
**Timeline:** Week 1-2
**Risk if incomplete:** Unauthorized remote access; data exfiltration via uncontrolled networks

---

## Section C: Data Classification and DLP

### C1. Data Classification Alignment

- [ ] **Organization's data classification schema reviewed with vendor**
  - Classification levels: Public, Internal, Confidential, Restricted
  - Vendor confirms which data classes it can securely store
  - Example: "We support Confidential data; Restricted requires encryption keys managed by you"
- [ ] **Written confirmation from vendor security officer**
  - Vendor acknowledges your data classification scheme
  - Vendor confirms controls in place for each class
  - Signed by vendor CSO or legal
- [ ] **Data handling procedures documented**
  - Employees understand which data can go into vendor system
  - Employees know to redact sensitive data before uploading
  - Escalation process if someone uploads restricted data by accident

**Owner:** Data steward + Information security + Vendor CSO
**Timeline:** Week 1-2
**Risk if incomplete:** Restricted data exposure; regulatory violation; breach

---

### C2. Data Loss Prevention (DLP) Rules

- [ ] **DLP rules configured to monitor vendor system**
  - Rules monitor: Export actions, email forwarding, printing, copy/paste
  - Example rule: Block export of >100 records containing credit card patterns
- [ ] **Data exfiltration vectors identified and blocked**
  - API exports to unapproved destinations: Blocked
  - Email forwarding of sensitive data: Blocked (or logged)
  - Screen captures: Blocked or monitored
  - USB exports: Blocked
- [ ] **Exceptions and allow-lists configured**
  - Authorized users can export data for backup, reporting, compliance (if required)
  - Exceptions logged and auditable
- [ ] **DLP testing completed**
  - Attempt to export sensitive data → blocked or alerted
  - Logs capture the attempt, user, timestamp, data

**Owner:** IT security + Data steward
**Timeline:** Week 2-3
**Risk if incomplete:** Sensitive data exfiltration; insider threat undetected

---

### C3. Encryption Verification

- [ ] **Data at rest encryption verified**
  - Vendor uses AES-256 or equivalent
  - Encryption is transparent (users don't manage keys)
  - Backup data is encrypted
- [ ] **Data in transit encryption verified**
  - TLS 1.2 or higher (preferably 1.3)
  - Certificate is valid and matches domain
  - Testing: SSL labs or vendor security report confirms A+ rating
- [ ] **Encryption keys managed appropriately**
  - If vendor-managed: Vendor confirms no unauthorized access to keys
  - If customer-managed: Organization maintains key control; vendor cannot decrypt data
- [ ] **Key rotation policy documented**
  - How often are encryption keys rotated?
  - Is rotation automatic or manual?
  - Can old data be decrypted after rotation?

**Owner:** IT security + Vendor
**Timeline:** Week 1-2
**Risk if incomplete:** Data breach; decryption by attacker; compliance violation

---

### C4. Backup and Recovery Validation

- [ ] **Backup schedule confirmed with vendor**
  - Frequency: Daily? Hourly?
  - Retention period: 30 days? 1 year?
  - Backup location: Same data center? Different region?
- [ ] **Recovery time objective (RTO) and recovery point objective (RPO) defined**
  - RTO: How quickly can data be recovered if deleted? (e.g., 4 hours)
  - RPO: How much data loss is acceptable? (e.g., 1 hour of transactions)
  - Vendor confirms it can meet these objectives
- [ ] **Backup testing scheduled**
  - Vendor will demonstrate recovery procedure
  - Test recovery of sample data in test environment
  - Document time taken and any data issues
- [ ] **Backup encryption verified**
  - Backups are encrypted at rest
  - Encryption uses different keys than production (if possible)
- [ ] **Backup audit log**
  - All backup/recovery operations logged
  - Logs forwarded to SIEM

**Owner:** IT operations + Vendor
**Timeline:** Week 2-3
**Risk if incomplete:** Data loss undetectable; recovery fails; business continuity compromised

---

## Section D: Monitoring, Logging, and Alerting

### D1. Log Forwarding Setup

- [ ] **Vendor supports log export**
  - Check: Syslog? CEF? JSON? Cloud storage (S3, Azure Blob)?
  - Vendor provides log schema and field definitions
- [ ] **Logs sent to organization's SIEM or log aggregation platform**
  - Syslog sent to Splunk / ELK / Datadog / etc.
  - Connection tested
  - Sample logs received and parsed correctly
- [ ] **Log retention policy aligned**
  - Organization requires 90-day retention? Vendor sends 90 days minimum
  - Compliance requires 7 years? Arrange for archival (can compress after 90 days)
- [ ] **Sensitive data in logs identified and redacted**
  - Example: Password change logs should not contain old password
  - DLP rules or vendor configuration redacts PII before sending to SIEM
- [ ] **Log integrity verified**
  - Logs cannot be tampered with after transmission
  - SIEM confirms logs are immutable or log hashing is enabled

**Owner:** IT security + SIEM team + Vendor
**Timeline:** Week 2-3
**Risk if incomplete:** Incident investigation impossible; audit trail missing; compliance breach

---

### D2. SIEM Integration and Alert Configuration

- [ ] **Critical events identified for alerting**
  - Successful login by admin account
  - Failed login attempts (5+ in 10 minutes)
  - Privilege escalation
  - Mass data export
  - Configuration changes to RBAC or security settings
  - API key rotation or creation
  - User deprovisioning
- [ ] **Alerts configured in SIEM**
  - Each critical event triggers an alert
  - Alerts sent to on-call security engineer
  - Escalation: If unacknowledged in 30 min, escalate to security manager
- [ ] **Alert testing completed**
  - Trigger a test alert → verify engineer receives notification
  - Response procedure: Acknowledge alert, investigate in logs
- [ ] **False positive tuning**
  - Monitor alert queue for noise
  - Adjust thresholds to reduce false positives (without missing real incidents)

**Owner:** IT security + SIEM team
**Timeline:** Week 2-3
**Risk if incomplete:** Security incidents undetected; attacker not identified; breach response delayed

---

### D3. Anomaly Detection Baseline

- [ ] **Normal usage patterns established**
  - Collect logs for 1-2 weeks of normal operations
  - Baseline: typical login patterns, data access, API usage
- [ ] **Anomaly detection rules configured**
  - Unusual login time/location (e.g., access from unexpected country)
  - Unusual data access volume (e.g., user downloads 10x normal monthly data)
  - Unusual API query patterns
  - Multiple failed authentications followed by success
- [ ] **Anomaly alerts sent to SOC or security team**
  - Low-risk anomalies logged for review
  - High-risk anomalies trigger immediate alert

**Owner:** IT security + SIEM team
**Timeline:** Week 3-4
**Risk if incomplete:** Insider threat and account compromise undetected; breach unnoticed for weeks

---

## Section E: Compliance and Contractual

### E1. Data Processing Agreement (DPA) Execution

- [ ] **Vendor DPA reviewed by legal team**
  - DPA includes GDPR article 28 processor obligations
  - Article 32 security obligations are specific (not generic "reasonable measures")
  - Data subject rights (access, deletion, portability) are vendor obligations
- [ ] **DPA signed and executed**
  - Both parties have signed
  - Effective date is before data is transferred to vendor
  - PDF stored in ~~document repository with version control
- [ ] **Standard Contractual Clauses (SCCs) included (if data transfers internationally)**
  - If vendor processes EU data and stores outside EU: SCCs required post-Schrems II
  - Vendor confirms SCCs are in place and valid
  - Supplementary measures documented (if required by local legal advice)

**Owner:** Legal + IT security
**Timeline:** Week 1-2
**Risk if incomplete:** Data transfer illegal; GDPR violation; fines up to 4% of revenue

---

### E2. Data Residency and Sovereignty

- [ ] **Vendor data center location(s) documented**
  - Where is data stored? (Region, country)
  - Is data replicated to other regions?
- [ ] **Data residency requirements confirmed**
  - Example: "EU data must remain in EU" → Verify vendor stores in EU only
  - Example: "Financial data must be in Canada" → Verify vendor Canada data center exists
- [ ] **Subprocessors identified**
  - Vendor uses third-party cloud providers? (AWS, Azure, GCP)
  - Subprocessor locations documented
  - Subprocessor DPA or SCCs in place
- [ ] **Data residency compliance verified**
  - Written confirmation from vendor CSO
  - Vendor commits to notify organization if they change data centers
  - If vendor moves data to non-compliant jurisdiction: Organization has 30-day termination right

**Owner:** Legal + Data steward + Vendor
**Timeline:** Week 1-2
**Risk if incomplete:** Regulatory breach; data sovereignty violation; jurisdiction disputes

---

### E3. Subprocessor Notification and Audit Rights

- [ ] **Subprocessor list obtained from vendor**
  - Current subprocessors listed with names and locations
  - Vendor commits to notify 30 days before adding new subprocessors
  - Organization has right to object to new subprocessors
- [ ] **Subprocessor audit rights in contract**
  - Organization or its auditors can audit subprocessor security controls
  - Vendor facilitates audit (provides evidence, grants access if needed)
- [ ] **Subprocessor DPA or equivalent terms verified**
  - Each subprocessor has DPA with vendor (or is same legal entity)
  - Subprocessor cannot further subcontract without approval

**Owner:** Legal + IT security
**Timeline:** Week 1-2
**Risk if incomplete:** Unauthorized data sharing; compliance risk transferred to vendor without oversight

---

### E4. Audit Rights and Compliance Evidence

- [ ] **Audit rights confirmed in contract**
  - Organization can audit vendor or request security assessment
  - Frequency: Annual? On-demand?
  - Vendor provides SOC 2 Type II or ISO 27001 audit reports
- [ ] **Compliance evidence collected before go-live**
  - SOC 2 Type II report (or equivalent) provided
  - Report is recent (within 12 months)
  - Report covers areas relevant to organization (authentication, access controls, encryption)
- [ ] **Audit evidence stored and reviewed**
  - SOC 2 report stored in ~~document repository
  - Key findings reviewed by security team
  - Any gaps identified → vendor provides remediation plan
- [ ] **Annual audit review scheduled**
  - Calendar reminder to request updated audit report
  - Trend analysis: Is vendor improving or degrading?

**Owner:** IT security + Compliance
**Timeline:** Week 1-2
**Risk if incomplete:** No visibility into vendor security posture; undetected control gaps; audit failure

---

## Section F: Incident Response Integration

### F1. Vendor Security Contact

- [ ] **Security contact identified and documented**
  - Name, title, email, phone
  - Time zone
  - Escalation contact (if primary is unavailable)
- [ ] **Incident contact stored in accessible location**
  - Printed and posted in NOC / operations team area
  - Stored in emergency contact database
  - Shared with help desk, IT management, CISO
- [ ] **Contact validity tested**
  - Send test email → verify response
  - Or schedule brief call to confirm they're the right contact
- [ ] **Response time SLA confirmed**
  - Vendor will respond to security incident report within: __ hours
  - For critical incidents: __ hours
  - Include escalation: If no response in SLA, escalate to CSO

**Owner:** IT security + Vendor
**Timeline:** Week 1-2
**Risk if incomplete:** Incident response delayed; attacker not notified; remediation slow

---

### F2. Incident Response Integration Planning

- [ ] **Incident playbook includes vendor procedures**
  - If breach detected: How does organization notify vendor?
  - Does vendor have incident response team? (name, contact)
  - Does vendor do forensics or does organization manage it?
  - Who pays for forensics and incident response?
- [ ] **Coordination procedures defined**
  - Joint incident bridge call: Who calls? Frequency? Attendees?
  - Communication protocol: Which channel (phone, email, Slack)?
  - Status updates: How often? To whom?
- [ ] **Forensic access procedures documented**
  - If needed, can organization's forensic team access vendor logs/systems?
  - What's the process? (ticket? Legal agreement?)
  - Does vendor charge for forensic investigation?

**Owner:** IT security + Vendor CSO
**Timeline:** Week 2-3
**Risk if incomplete:** Incident response chaotic; vendor uncooperative; evidence lost

---

### F3. Tabletop Exercise (Optional but Recommended)

- [ ] **Tabletop exercise scheduled**
  - Scenario: "Attacker gains admin access to vendor system and begins exfiltrating data"
  - Participants: IT security, operations, CISO, Vendor incident response team
  - Duration: 2 hours
- [ ] **Exercise procedure reviewed beforehand**
  - Vendor provides incident response procedures
  - Organization provides incident response procedures
  - Procedures are compatible (no conflicts or gaps)
- [ ] **Findings documented and remediation plan created**
  - Where did procedures break down?
  - What equipment or contacts were missing?
  - Remediation completed before go-live if possible

**Owner:** IT security + Vendor
**Timeline:** Week 3-4
**Risk if incomplete:** Untested procedures fail during real incident; chaos and slow response

---

## Sign-Off and Gate

Once all items above are checked, the security onboarding is **COMPLETE**.

**Final approval:**

- [ ] Security architect: Approved for access provisioning
  - Signature: ____________________
  - Date: ____________________
  - Notes:

If any items remain unchecked and are not mitigated by documented exception, **delay access provisioning**. The cost of re-securing a compromised system is far higher than the cost of delaying go-live by 1-2 weeks.

---

## Ongoing Security Maintenance (Post-Go-Live)

These items must continue throughout the vendor relationship:

- **Monthly:** SIEM alerts reviewed for anomalies; SLA compliance checked
- **Quarterly:** Audit log review; access review (RBAC still correct?); API key rotation
- **Annually:** Vendor security assessment updated (request new SOC 2 report); incident response playbook refreshed
- **Upon incident:** Vendor security contact engaged; forensic investigation coordinated

---

## Appendix: Common Vendor Response Times

If vendor cannot meet these minimums, escalate to contract negotiation:

| Severity | Typical Response Time | Typical Resolution Time |
|----------|----------------------|------------------------|
| Critical (system down, breach) | 1 hour | 4-8 hours |
| High (data inaccessible) | 4 hours | 24 hours |
| Medium (feature broken) | 8 hours | 3 days |
| Low (cosmetic issue) | 24 hours | 2 weeks |

---

## Appendix: References to Other Skills and Checklists

- See `risk-compliance` skill for GDPR, NIS2, AI Act compliance verification
- See `it-contract-review` skill for DPA and exit clause review
- See `contract-lifecycle` skill for vendor incident response and renewal procedures
