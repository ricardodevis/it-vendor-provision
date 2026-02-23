# Technical Acceptance Criteria for Vendor Software

## Core Philosophy

A vendor demo is a sales pitch. Technical acceptance is proof. Never deploy production software without it. Demonstrations show what vendors *want* you to see in ideal conditions. Acceptance testing proves what happens in your environment, at scale, under stress, with your data, and when things go wrong.

The difference between a demo that looks great and a deployment that burns down your operations is a rigorous technical acceptance process.

---

## Proof of Concept (POC) Process

### Scope Definition
Before starting a POC, define exactly what you're testing. Unbounded POCs become perpetual pilots.

**Document:**
- **Primary functionality:** Which core features are we validating? (Be specific: "user provisioning in bulk < 1000 users per day" not "user management")
- **Integration scope:** Which of your systems does this vendor integrate with? APIs? Database connections? File transfers?
- **Performance testing:** What is our realistic production load? Concurrent users? Daily transaction volume?
- **Security validation:** Which compliance frameworks apply? (PCI, HIPAA, SOC2, etc.)
- **Data handling:** Will we test with production data (with anonymization), synthetic data, or vendor sample data? (Real data > synthetic > sample)

**Out of scope (document explicitly):**
- Customizations beyond core product capability
- Load testing beyond documented vendor capacity
- Vendor team time beyond [X hours]
- Data migration tooling beyond initial load

### Success Criteria
Define acceptance criteria in advance, with vendor agreement. Criteria must be:
- **Measurable:** Not "works well" but "API response < 500ms at 100 concurrent users"
- **Binary:** Criteria are met or not met. No "mostly works"
- **Vendor-signed:** Both parties agree before testing starts
- **Realistic:** Based on your actual requirements, not theoretical perfection

**Example criteria for SaaS analytics platform:**
- API authentication via OAuth works with our existing identity provider
- Data ingestion API accepts 1000+ events/second without dropping messages
- Dashboard load time < 3 seconds for standard reports with 6 months of data
- User role-based access control restricts views to assigned data sets (verify User A cannot see User B's data)
- Scheduled export to SFTP works daily without manual intervention
- Bulk user import processes 5000+ users with < 5% error rate
- Vendor penetration test results < 30 days old, no critical vulnerabilities

### Timeline Expectations
POC duration varies by complexity:
- **SaaS, cloud-hosted, minimal integration:** 2-4 weeks
- **SaaS with 3+ system integrations:** 4-6 weeks
- **On-premises installation:** 4-8 weeks
- **Custom integration or complex data migration:** 8-12 weeks

**Timeline includes:** Vendor environment setup, your team testing, issue remediation, retesting.

Timelines longer than 12 weeks indicate either misaligned scope or fundamental product-market mismatch. Escalate.

### Resource Allocation
Define before starting:

**Your organization:**
- Primary technical contact: [name, % allocation]
- Business owner/stakeholder: [name, availability for feedback]
- Data analyst (if data integration): [name, % allocation]
- Security reviewer (if regulated environment): [name, availability]
- Infrastructure/ops (if on-prem): [name, availability]

**Vendor:**
- Assigned solutions architect
- Support engineer (24-hour response SLA during POC)
- Product engineer (for custom integration work, if needed)
- Maximum hourly commitment: [X hours/week]

**Environments needed:**
- Vendor-hosted POC instance (isolated from production)
- Your internal test environment (for integration testing)
- Network access plan (IP whitelisting, VPN, proxy, etc.)

### Test Data Strategy
Test data quality determines POC credibility.

- **Preferred:** Representative anonymized production data (volume, structure, edge cases match reality)
- **Acceptable:** Synthetic data that mimics your data model (same field types, sizes, distributions)
- **Avoid:** Vendor sample data (too clean, lacks real-world edge cases)

**Data sensitivity:** If using real data:
- Vendor signs data processing addendum before data transfer
- Data limited to POC environment only
- Clear data destruction timeline
- Separate test data instance from vendor demo instance

### Exit Criteria: When to Stop the POC Early
Define red flags that trigger immediate POC termination:

| Red Flag | Severity | Action |
|----------|----------|--------|
| Vendor cannot meet single mandatory acceptance criteria | P0 | Terminate POC immediately |
| Recurring data loss or corruption in test environment | P0 | Terminate immediately, investigate, escalate to executive sponsor |
| Unresolved critical security vulnerability in vendor code | P0 | Terminate immediately, legal review, executive escalation |
| Vendor unilaterally changes project scope or reduces team allocation | P1 | Escalate to vendor executive, define terms to continue |
| POC timeline exceeded by 50%+ without clear remediation path | P1 | Escalate, reset timeline or terminate |
| Integration effort 3x+ initial estimate | P1 | Reassess business case, continue or terminate |
| Required vendor customization cost exceeds licensed software cost | P1 | Reassess product-market fit, likely terminate |
| Vendor refuses to sign standard Data Processing Addendum | P1 | Legal review, likely terminate for regulated data |
| Vendor cannot support your required data volume or throughput | P1 | Terminate if non-negotiable, escalate if negotiable |

**Decision authority:** Your POC sponsor (not the daily technical lead) decides to continue or stop.

---

## Integration Testing Checklist

### API Connectivity
- [ ] Successful authentication using your identity provider (OAuth, SAML, API key, mTLS)
- [ ] Test endpoints respond within documented latency (typically < 500ms)
- [ ] Rate limits documented and acceptable (can we hit them at production load?)
- [ ] Error responses include actionable error codes and messages
- [ ] Timeout behavior documented (how long before retry? Backoff strategy?)
- [ ] Pagination works for large result sets (test with 10k+ records)
- [ ] API versioning strategy understood (backward compatibility, deprecation timeline)

### Data Mapping and Field Verification
- [ ] Your core data entities map to vendor data model (1:1, 1:many, or workaround?)
- [ ] Every required field in your system maps to vendor fields
- [ ] Field length limits documented (will your 500-char description fit?)
- [ ] Required vs. optional fields match your business rules
- [ ] Field type compatibility verified (integer, date, boolean behavior)
- [ ] Special characters handled correctly (emoji, diacritics, unicode)
- [ ] Date/time handling verified (timezone conversion, daylight saving time)
- [ ] Currency and numeric formatting match expectations

### Bidirectional Sync (if applicable)
- [ ] Data flows from your system to vendor: create, update, delete all tested
- [ ] Data flows from vendor back to you: changes reflected in your system
- [ ] Sync timing documented and acceptable (real-time, hourly, daily?)
- [ ] Conflict resolution strategy defined (if both sides change record, who wins?)
- [ ] Deleted records handled correctly (hard delete, soft delete, archive?)
- [ ] Webhook/event notifications reliable and deliverable

### Error Handling and Resilience
- [ ] API downtime does not cause data loss (queue mechanism or transaction logging)
- [ ] Retry logic tested (exponential backoff, max retries, timeout)
- [ ] Partial failures handled (batch insert of 100 records, 5 fail—handled cleanly?)
- [ ] Connection pooling prevents resource exhaustion under load
- [ ] Network interruption recovery tested (kill connection, verify automatic reconnect)
- [ ] Vendor circuit breaker prevents cascading failures
- [ ] Error notification and alerting integrated with your monitoring

### Performance Under Load
- [ ] Test with production data volume: actual rows in your database
- [ ] Concurrent user count: simulate [X] simultaneous API calls
- [ ] Throughput acceptable: ingest [X] records/second, query [X] records/second
- [ ] Database query performance: vendor query execution < [Y] milliseconds
- [ ] Memory footprint and CPU utilization within acceptable bounds
- [ ] Degradation pattern understood: what happens at 150% expected load?
- [ ] Load test results documented (peak throughput, latency at various loads, resource utilization)

### Edge Case Handling
- [ ] Special characters in data (ampersands, quotes, line breaks): no corruption
- [ ] Large file uploads (if applicable): maximum file size tested, rejection handled
- [ ] Maximum field length (1000 char description): rejection or truncation behavior
- [ ] Timezone handling: UTC conversion, daylight saving time transitions
- [ ] Multi-language text: non-Latin scripts, right-to-left languages
- [ ] Null/empty values: correct distinction between null and empty string
- [ ] Leading/trailing whitespace: intentional trimming or preservation?
- [ ] Date edge cases: leap years, month boundaries, year transitions

---

## Performance Acceptance Criteria by System Type

### Web Application
| Metric | Acceptance Criterion |
|--------|----------------------|
| Page load time (full render) | < 3 seconds, 95th percentile |
| API response time | < 500ms, 95th percentile |
| Concurrent user capacity | Minimum [X] simultaneous users |
| Error rate | < 0.1% on normal operation |
| Database query time | < 100ms for standard queries |
| Memory per user | < [X] MB per session |
| CPU utilization at peak load | < 80% utilization |

### Data Processing (Batch or ETL)
| Metric | Acceptance Criterion |
|--------|----------------------|
| Processing time for [X] records | < [Y] minutes |
| Throughput | Minimum [Z] records/second |
| Error rate | < [X]% (define acceptable threshold) |
| Recovery from failure | Resume at last checkpoint, no re-processing |
| Disk space requirement | Temporary storage < [X] GB |
| Memory requirement | Peak memory < [X] GB |
| Log output | Sufficient detail for troubleshooting, no PII |

### Real-Time (Event Streaming, Messaging)
| Metric | Acceptance Criterion |
|--------|----------------------|
| Latency | Message delivery < [X] milliseconds |
| Message delivery guarantee | At-least-once / exactly-once (specify) |
| Message ordering | Preserved or explicitly documented as unordered |
| Backpressure handling | Publisher aware when subscriber is slow |
| Message loss on failure | Zero loss within [X] recovery period |
| Scaling behavior | Linear throughput increase with resources |
| Consumer lag monitoring | Dashboard or API for lag visibility |

---

## Security Validation Checklist

### Penetration Testing and Vulnerability Assessment
- [ ] Vendor penetration test results available and current (< 30 days)
- [ ] Results reviewed by your security team
- [ ] No critical or high-severity findings in report
- [ ] Medium-severity findings have documented mitigations
- [ ] Vulnerability scanner results (OWASP Top 10) available
- [ ] Vendor's vulnerability disclosure process documented
- [ ] Vendor commits to patch critical vulnerabilities within SLA (e.g., 24 hours)

### Authentication Flow Validation
- [ ] Single sign-on (SSO) integration tested with your identity provider
- [ ] User provisioning from your directory works (create, update, disable)
- [ ] User deprovisioning removes access (test immediate removal)
- [ ] Multi-factor authentication enforced (if required by policy)
- [ ] Password expiration and complexity policies inherited from your directory
- [ ] Session timeout matches your security policy (e.g., 30 min inactive)
- [ ] Token refresh mechanism works (long-running operations don't break)

### Data Encryption Verification
- [ ] Data in transit: TLS 1.2+ enforced, certificate validation passed
- [ ] Data at rest: encryption algorithm and key management verified
- [ ] Encryption key management: vendor controls keys? You control keys? HSM?
- [ ] Encryption coverage: does it include backups, audit logs, temporary files?
- [ ] Key rotation: process, frequency, vendor responsibility or yours?
- [ ] Test encrypted connections: disable weak ciphers, verify rejection

### Access Control Testing
- [ ] User A cannot view User B's data (multi-tenancy isolation verified)
- [ ] Role-based access control (RBAC) works as designed
- [ ] Administrative access restricted to administrators only
- [ ] Audit logging captures who accessed what data and when
- [ ] Sensitive data masking in logs and error messages (no PII leakage)
- [ ] API access control: authentication required for all endpoints
- [ ] API rate limiting prevents abuse (brute force attacks fail quickly)

### Additional Security Controls
- [ ] Compliance certifications documented (SOC 2 Type II, ISO 27001, etc.)
- [ ] Data residency and sovereignty requirements met (where is data stored?)
- [ ] Disaster recovery plan reviewed (recovery time objective, recovery point objective)
- [ ] Incident response process documented (vendor commits to notification timeline)
- [ ] Business continuity: vendor redundancy and failover architecture
- [ ] Backup and restore process tested (can data be recovered?)
- [ ] Data retention and deletion: policies match your requirements

---

## Compatibility Matrix Template

Document your system versions against vendor supported versions.

| System | Current Version | Vendor Supports? | Notes |
|--------|-----------------|------------------|-------|
| Kubernetes | 1.28.1 | Yes, 1.24+ | Acceptable |
| PostgreSQL | 14.9 | Yes, 12+ | Plan upgrade to 15 Q3 2024 |
| Java Runtime | 17 LTS | Yes, 11+ | Use LTS for stability |
| Python | 3.11 | Yes, 3.9+ | Acceptable |
| OpenAPI | v3.0.3 | Yes, v3.0+ | Acceptable |
| TLS | 1.2, 1.3 | Yes, 1.2+ | 1.3 preferred |
| Redis | 7.0 | Yes, 6.0+ | Plan upgrade to 7.x |
| Browser support | Chrome 120, Firefox 121 | Yes, Chrome 90+, FF 88+ | Legacy IE unsupported (acceptable) |

**Governance rule:** If vendor doesn't support your current version, establish upgrade timeline before POC completion. "We'll upgrade later" is POC failure.

---

## User Acceptance Testing (UAT)

UAT is not the same as technical acceptance. Technical acceptance proves the product works. UAT proves it meets business requirements.

### UAT Participants
- **Representative users:** Actual people who will use the system daily, not executives
- **Business owner:** Validates that product meets business requirements
- **Power users:** Represent edge cases and advanced workflows
- **Administrators:** Validate configuration, user management, reporting

### Realistic Test Scenarios
- **Normal flow:** Happy path—user creates record, modifies it, exports it
- **Error scenarios:** What happens when user enters invalid data? Network drops mid-upload?
- **Volume testing:** Can a user create 100+ records in a session without performance degradation?
- **Integration scenarios:** Cross-system workflows (user creates record here, it appears in downstream system, triggering email)
- **Role-based scenarios:** Different users with different permissions perform expected operations

### Feedback Collection
- Use standardized feedback form (not free-form comments)
- Specific questions: "Does the user interface match your workflow?" (not "Do you like it?")
- Severity rating: Is this a blocker, significant issue, or minor improvement?
- Evidence required: Not "it's slow" but "searching 10k records takes 12 seconds"

### Go/No-Go Decision Criteria
UAT results in one of three outcomes:

1. **GO:** All users confirm product meets requirements. Known limitations are documented and accepted by business.
2. **GO WITH CONDITIONS:** Minor issues identified but not blockers. Vendor commits to fixes in post-production timeline. Continue to production with risk acceptance signed by business owner.
3. **NO-GO:** Critical user-facing issues identified. Product does not meet core business requirements. Return to vendor for remediation or terminate.

**Decision authority:** Business owner, not IT. If IT thinks it's good but users don't, it's a no-go.

---

## Sign-Off Template

**System:** [Vendor name and product]
**POC Duration:** [Start date] to [End date]
**Acceptance Owner:** [Name, title]
**Stakeholders:** [Names and titles of decision-makers]

### Criteria Assessment

| Criteria Category | Criteria | Required | Met? | Notes |
|-------------------|----------|----------|------|-------|
| Functional | [Specific functionality] | Yes | Yes | Tested in integration environment |
| Performance | API response < 500ms | Yes | Yes | 95th percentile confirmed |
| Security | Pen test current, no criticals | Yes | Yes | Last test [date], all findings addressed |
| Integration | OAuth with Active Directory | Yes | Yes | Tested with production directory |
| UAT | Users confirm workflow match | Yes | Yes | 100% of UAT participants approved |
| Scalability | [X] concurrent users | Yes | Yes | Load test confirms capacity |
| Data Migration | [X] records imported correctly | Yes | No | 5% error rate, discussing remediation |
| Compliance | HIPAA requirements met | Yes | Yes | Vendor signed BAA |
| Contract | Pricing, terms acceptable | Yes | Yes | Legal review complete |

### Conditions or Exceptions
- Data migration error rate: Vendor to address in post-production optimization phase (Week 2)
- Historical data: Will not be migrated in initial load; manual review required post-go-live
- Reporting dashboard: Feature roadmap item; not available at launch

### Recommendation

**[ ] APPROVED FOR PRODUCTION DEPLOYMENT**
Vendor system meets all critical acceptance criteria. Known limitations do not block business value realization.

**[ ] APPROVED WITH CONDITIONS**
Conditional approval pending remediation of [list]. Risks documented and accepted by stakeholders.

**[ ] REJECTED**
System does not meet critical acceptance criteria. Recommend [vendor remediation / alternative solution / cancel project].

### Stakeholder Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Technical Acceptance Lead | [Name] | [Sig] | [Date] |
| Business Owner | [Name] | [Sig] | [Date] |
| CISO / Security Lead | [Name] | [Sig] | [Date] |
| Infrastructure Lead | [Name] | [Sig] | [Date] |
| Procurement Lead | [Name] | [Sig] | [Date] |

**Final Approval Authority:** [Name, title]

**Approved:** [Signature] [Date]

---

## Post-POC: What Happens Next

Once signed off:

1. **Production environment setup:** Move from POC environment to production-hardened setup (replication, backup, monitoring)
2. **Go-live planning:** Data migration schedule, cutover plan, rollback procedures
3. **Vendor transition to operations:** POC support team transitions to production support model
4. **SLA activation:** Formal support agreement begins (not during POC)
5. **Monitoring and alerting:** Production incidents escalate through vendor support, not through POC channels
6. **Post-implementation review:** 30 days post-go-live, assess actual performance against acceptance criteria
