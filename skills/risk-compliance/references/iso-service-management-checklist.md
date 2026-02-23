# ISO Service Management and Business Continuity Checklist
## ISO 20000-1 (IT Service Management) + ISO 22301 (Business Continuity Management)

**Standards:** ISO 20000-1:2018, ISO 22301:2019
**Applicable to:** Managed service providers, IT outsourcers, and vendors providing critical services
**Type:** OPTIONAL sectoral checklist for service delivery and continuity assurance

---

## Part 1: ISO 20000-1:2018 — IT Service Management

### Overview

ISO 20000-1 specifies requirements for establishing, implementing, maintaining, and continually improving an IT Service Management System (ITSMS). It is the international standard for IT service management (equivalent to ITIL best practices).

**When to require ISO 20000 certification:**
- [ ] Vendor provides managed IT services
- [ ] Vendor manages outsourced IT operations
- [ ] Vendor operates help desk/service desk
- [ ] Vendor provides cloud infrastructure services
- [ ] Vendor is classified as Tier 1 or Tier 2 (per vendor-segmentation.md)
- [ ] Service SLAs are critical to your operations

---

## ISO 20000-1 Core Service Management Areas

### Section 8.1: Business Relationship Management

**Vendor Responsibility - Relationship Management:**

- [ ] Service catalogue maintained and communicated
- [ ] Service Level Agreements (SLAs) documented
- [ ] Performance targets clearly defined
- [ ] Reporting procedures established
- [ ] Communication channels defined
- [ ] Regular review meetings scheduled (quarterly minimum)
- [ ] Escalation procedures documented
- [ ] Customer satisfaction surveys conducted
- [ ] Change management process communicated
- [ ] Service improvements discussed and tracked

**What to verify:**
- [ ] Service catalogue provided (listing all services, features, availability)
- [ ] SLA documentation with specific metrics and targets
- [ ] Communication plan with named contacts
- [ ] Service review schedule and past meeting minutes
- [ ] Escalation matrix provided

### Section 8.2: Service Portfolio

**Vendor Responsibility:**

- [ ] Service portfolio documented (service pipeline, current services, retired services)
- [ ] Service definitions clear and measurable
- [ ] Service dependencies documented
- [ ] Business outcomes aligned with services
- [ ] Resource requirements identified per service
- [ ] Service value proposition defined
- [ ] Service pricing/charging model clear
- [ ] Portfolio regularly reviewed and updated

**What to verify:**
- [ ] Complete service portfolio documentation
- [ ] Service definitions with features, scope, constraints
- [ ] Dependencies between services identified
- [ ] Service roadmap or evolution plan
- [ ] Documentation updated at least annually

### Section 8.3: Service Design and Transition

**Vendor Responsibility - Service Design:**

- [ ] New services designed with input from stakeholders
- [ ] Availability requirements analyzed and specified
- [ ] Capacity requirements planned
- [ ] Security requirements integrated (DORA, GDPR, relevant standards)
- [ ] Business continuity requirements addressed
- [ ] Disaster recovery designed
- [ ] Change impact assessed
- [ ] Service transition planned
- [ ] Knowledge transfer documented
- [ ] Testing and acceptance criteria defined
- [ ] Rollback procedures prepared

**What to verify:**
- [ ] Service design documentation for major services
- [ ] Availability and capacity planning documents
- [ ] Testing procedures and results
- [ ] Risk assessment for service changes
- [ ] Transition plan and acceptance criteria
- [ ] Documentation of lessons learned post-transition

### Section 8.4: Supplier Management

**Vendor Responsibility - Third-Party Management:**

If vendor uses subcontractors:
- [ ] Subcontractors evaluated and approved
- [ ] Contracts include service requirements and SLAs
- [ ] Subcontractor performance monitored
- [ ] Regular review of subcontractor compliance
- [ ] Escalation procedures for subcontractor issues
- [ ] Continuity plans include subcontractor contingencies
- [ ] Subcontractor changes require approval
- [ ] Subcontractor list maintained and current

**What to verify:**
- [ ] List of approved subcontractors provided
- [ ] Subcontractor contracts (samples) reviewed
- [ ] Performance metrics for subcontractors documented
- [ ] Contingency/alternative suppliers identified
- [ ] Subcontractor changes communicated timely

### Section 8.5: Service Delivery and Support

**Vendor Responsibility - Incident and Problem Management:**

#### Incident Management:
- [ ] Incident logging and categorization process
- [ ] Target response times by severity
- [ ] Target resolution times by severity
- [ ] Escalation procedures defined
- [ ] Workarounds documented where permanent fix pending
- [ ] Communication to affected customers during incident
- [ ] Post-incident review conducted
- [ ] Incident metrics tracked and reported
- [ ] Incident trend analysis performed

**Severity Definitions (example):**
- [ ] **Critical:** Service unavailable, affects all/most users, immediate response required
- [ ] **High:** Service degraded, affects multiple users, response within 1-4 hours
- [ ] **Medium:** Service issue, affects single or limited users, response within 8-24 hours
- [ ] **Low:** Minor issue, workaround available, response within 5 business days

**What to verify:**
- [ ] SLA targets for incident response/resolution
- [ ] Incident management procedures
- [ ] Recent incident logs (sample review)
- [ ] Post-incident review documentation
- [ ] Monthly/quarterly incident metrics and trends

#### Problem Management:
- [ ] Root cause analysis process
- [ ] Known errors documented
- [ ] Workarounds managed
- [ ] Permanent fixes tracked to implementation
- [ ] Problem trends identified
- [ ] Prevention of recurring incidents prioritized
- [ ] Problem metrics tracked

**What to verify:**
- [ ] Problem management procedure documentation
- [ ] Known errors database or list
- [ ] Root cause analysis examples
- [ ] Trend analysis documentation
- [ ] Permanent fix implementation tracking

#### Request Fulfillment:
- [ ] Service requests logged and tracked
- [ ] Request prioritization process
- [ ] Target fulfillment times by request type
- [ ] Quality assurance of fulfilled requests
- [ ] User satisfaction measured
- [ ] Request metrics reported

**What to verify:**
- [ ] Service request tracking system access
- [ ] Fulfillment time SLAs
- [ ] Quality review process
- [ ] Request metrics reporting

#### Change Management:
- [ ] Change requests formally submitted and reviewed
- [ ] Change impact assessment conducted
- [ ] Approval workflow defined (normal, expedited, emergency)
- [ ] Testing before production required
- [ ] Change schedule communicated
- [ ] Rollback procedures prepared
- [ ] Post-change review conducted
- [ ] Change metrics tracked
- [ ] Change advisory board or equivalent

**What to verify:**
- [ ] Change management process documentation
- [ ] Change request forms and procedure
- [ ] Recent change logs (sample)
- [ ] Change approver roles and responsibilities
- [ ] Change communication/notification templates
- [ ] Testing requirements and evidence
- [ ] Rollback plan examples

#### Release Management:
- [ ] Release policy documented
- [ ] Release contents clearly defined
- [ ] Release testing procedures
- [ ] Release notes prepared
- [ ] Backup before release taken
- [ ] Deployment procedure verified
- [ ] User communication provided
- [ ] Release metrics tracked

**What to verify:**
- [ ] Release management procedure
- [ ] Release calendar/schedule
- [ ] Recent release notes and contents
- [ ] Release testing checklist and results
- [ ] Deployment documentation
- [ ] Backup confirmation procedures

### Section 8.6: Control, Monitoring, Measurement, and Review

**Vendor Responsibility:**

- [ ] Service metrics defined and measured
- [ ] Key Performance Indicators (KPIs) tracked
- [ ] SLA compliance monitored continuously
- [ ] Performance reports provided regularly
- [ ] Trend analysis conducted
- [ ] Performance review meetings held
- [ ] Improvement initiatives identified and tracked
- [ ] Audit program established (internal audit annually recommended)
- [ ] Customer satisfaction surveys conducted
- [ ] Continual improvement process implemented

**What to verify:**
- [ ] Service metrics and KPI definitions
- [ ] Monthly/quarterly performance reports
- [ ] SLA compliance trending (12+ months)
- [ ] Performance dashboard or scorecard
- [ ] Review meeting agendas and minutes
- [ ] Improvement initiatives and status
- [ ] Internal audit plan and reports
- [ ] Customer satisfaction scores

---

## ISO 20000-1 Vendor Assessment Checklist

### Pre-Contracting Assessment

- [ ] Is ISO 20000-1 certification required? (depends on service criticality)
- [ ] Does vendor hold current ISO 20000-1 certificate?
  - [ ] If yes: Obtain copy of certificate, verify it's current
  - [ ] If no: Is alternative framework acceptable (e.g., ITIL aligned, SOC 2)?
- [ ] Request vendor's ITSMS documentation (policies, procedures)
- [ ] Assess vendor's service portfolio against your requirements
- [ ] Review available SLA options and targets
- [ ] Request references from current customers (similar size/complexity)

### Contracting Phase

- [ ] Include ISO 20000-1 requirements in contract (or reference alternative)
- [ ] Define specific SLAs for each service (not generic targets)
- [ ] Specify SLA credits/penalties for non-compliance
- [ ] Require monthly/quarterly performance reporting
- [ ] Include change management procedures
- [ ] Define escalation and communication protocols
- [ ] Specify incident/problem response time expectations
- [ ] Include audit rights (annual or biennial minimum)
- [ ] Require annual risk assessment of subcontractors

### Post-Contracting Monitoring

**Ongoing Vendor Management:**

- [ ] Receive and review monthly SLA reports
- [ ] Track SLA compliance quarterly (trending over time)
- [ ] Attend quarterly service review meetings
- [ ] Monitor incident trends (volume, severity, resolution time)
- [ ] Review change log monthly (validate testing, approvals)
- [ ] Escalate recurring issues to senior vendor management
- [ ] Annual vendor performance assessment
- [ ] Request annual internal audit results (if available)
- [ ] Verify subcontractor compliance annually
- [ ] Participate in annual service review and planning

---

## ISO 20000-1 Certification Verification

### How to Verify ISO 20000-1 Certification

1. **Certificate Check:**
   - [ ] Request copy of ISO 20000-1 certificate from vendor
   - [ ] Verify certificate is current (valid until stated expiry date)
   - [ ] Check certificate holder name matches vendor entity
   - [ ] Verify certifying body is accredited (SAI Global, BSI, TÜV, etc.)

2. **Scope Verification:**
   - [ ] Review certificate scope (what services/processes are certified?)
   - [ ] Confirm your required services are within certified scope
   - [ ] Note any exclusions or limitations

3. **Audit History:**
   - [ ] Request vendor's latest surveillance audit report
   - [ ] Review any non-conformances identified
   - [ ] Confirm non-conformances were remediated
   - [ ] Assess trend (improving, stable, or declining)

4. **ITSMS Documentation:**
   - [ ] Request vendor's ITSMS manual or executive summary
   - [ ] Verify it covers all your required service areas
   - [ ] Confirm policy and procedure alignment with ISO 20000-1

---

## Part 2: ISO 22301:2019 — Business Continuity Management

### Overview

ISO 22301 specifies requirements for establishing, implementing, maintaining, and continually improving a Business Continuity Management System (BCMS). It ensures an organization can survive disruptive incidents.

**When to require ISO 22301:**
- [ ] Vendor provides Tier 1 or Tier 2 critical services (per vendor-segmentation.md)
- [ ] Vendor operates data centers or critical infrastructure
- [ ] Service disruption would materially impact your business
- [ ] Service involves geographically distributed operations
- [ ] Service is subject to regulatory BCP requirements

---

## ISO 22301 Core Business Continuity Areas

### Section 8.1: Understanding the Organization and its Context

**Vendor Responsibility:**

- [ ] Internal and external business context analyzed
- [ ] Interested parties identified (customers, regulators, partners)
- [ ] Relevant compliance requirements identified (DORA, GDPR, etc.)
- [ ] Critical business processes identified
- [ ] Dependencies mapped (internal, external, supplier)
- [ ] Risk environment understood
- [ ] Scope of BCMS defined
- [ ] Documentation maintained

**What to verify:**
- [ ] Vendor understands impact to YOUR organization
- [ ] Your organization identified as important stakeholder
- [ ] Vendor's critical services to you documented
- [ ] Dependencies on external services identified
- [ ] Relevant compliance obligations understood

### Section 8.2: Business Impact Analysis and Risk Assessment

**Vendor Responsibility - BIA (Business Impact Analysis):**

#### For Services Provided to You:

- [ ] Maximum Tolerable Downtime (MTD) defined for your critical services
- [ ] Recovery Time Objective (RTO) established
- [ ] Recovery Point Objective (RPO) established
- [ ] Business impact quantified (financial loss, customer impact, regulatory impact)
- [ ] Dependencies identified (internal systems, external suppliers, utilities)
- [ ] Staff and resource requirements defined
- [ ] Information/data requirements identified
- [ ] Financial impact of downtime estimated
- [ ] BIA documented and reviewed annually

**What to verify:**
- [ ] BIA document provided (or summary for your services)
- [ ] RTO and RPO targets specified for your services
- [ ] Impact quantification methodology (financial models, scenario analysis)
- [ ] BIA updated at least annually
- [ ] BIA includes inputs from your organization

#### Recovery Priorities:
- [ ] Critical services prioritized for recovery (order of recovery)
- [ ] Recovery dependencies sequenced
- [ ] Recovery time targets realistic and achievable
- [ ] Parallel vs. sequential recovery determined

**What to verify:**
- [ ] Priority recovery list provided
- [ ] Recovery sequence documented
- [ ] Realistic timelines based on available resources

#### Risk Assessment:
- [ ] Threats identified (natural disasters, cyber, human error, third-party failure)
- [ ] Likelihood and impact estimated
- [ ] Key vulnerabilities identified
- [ ] Risk mitigation strategies defined
- [ ] Residual risks accepted and documented
- [ ] Risk assessment reviewed annually

**What to verify:**
- [ ] Risk register or assessment document
- [ ] Your organization's dependency treated as significant risk
- [ ] Mitigation strategies address high-impact risks
- [ ] Risk assessment current (within 12-24 months)

### Section 8.3: Business Continuity Strategies

**Vendor Responsibility:**

Continuity strategies for recovery:

- [ ] **Prevention/Mitigation:** Controls to prevent/reduce incident likelihood
  - [ ] Redundant systems and infrastructure
  - [ ] Diverse supplier relationships
  - [ ] Regular maintenance and updates
  - [ ] Security controls

- [ ] **Detection and Response:** Quick detection and containment
  - [ ] Monitoring systems (24/7)
  - [ ] Incident response procedures
  - [ ] Communication protocols
  - [ ] Crisis management structure

- [ ] **Recovery Strategies:** Options for recovery
  - [ ] Data backup and recovery procedures
  - [ ] Alternative processing sites (hot/warm/cold standby)
  - [ ] Alternative suppliers/vendors
  - [ ] Mutual aid agreements
  - [ ] Recovery service providers

- [ ] **Restoration:** Return to normal operations
  - [ ] Data validation and integrity checks
  - [ ] System testing procedures
  - [ ] Cutover procedures
  - [ ] Stakeholder notification

**What to verify:**
- [ ] Redundancy and diversity in infrastructure
- [ ] Backup location geographic separation (not in same risk zone)
- [ ] Data backup frequency and testing
- [ ] Alternative supplier or recovery service provider arrangements
- [ ] Recovery procedure documentation and testing results

### Section 8.4: Business Continuity Procedures

**Vendor Responsibility - BCP Documentation:**

**Continuity Plan Contents:**

- [ ] Purpose, scope, and objectives stated
- [ ] Critical business processes listed
- [ ] Recovery time/point objectives
- [ ] Organization structure and roles (incident commander, teams)
- [ ] Incident activation procedures (who decides to invoke BCP)
- [ ] Action lists by role/team
- [ ] Contact lists (internal staff, external services, customers, regulators)
- [ ] Escalation procedures
- [ ] Communication procedures (internal, external, media)
- [ ] Restoration procedures
- [ ] Finance and administration during incident
- [ ] Return to normal operations procedures
- [ ] Appendices (detailed procedures, templates, contact info)

**What to verify:**
- [ ] BCP document provided and current
- [ ] Plan is tested and validated
- [ ] Contact lists include YOUR organization's key contacts
- [ ] Communication procedures define how vendor notifies you
- [ ] Recovery procedures are detailed and realistic
- [ ] Plan updated annually or after significant changes

#### Continuity Plan Maintenance:
- [ ] Plan reviewed at least annually
- [ ] Plan updated when business changes
- [ ] Plan updated when systems/infrastructure changes
- [ ] Plan distributed to relevant personnel
- [ ] Plan accessible during emergency (hardcopy, secure online)
- [ ] Confidential sections protected appropriately

**What to verify:**
- [ ] Plan revision date recent (within 12-24 months)
- [ ] Plan version control evident
- [ ] Distribution list documented
- [ ] Emergency access procedures documented

### Section 8.5: Exercise and Testing Program

**Vendor Responsibility - BCP Testing:**

#### Testing Types:

1. **Desk-Top Exercises**
   - [ ] Participants review procedures without executing systems
   - [ ] Conducted annually minimum
   - [ ] Tests decision-making and communication
   - [ ] Less resource-intensive than full tests

2. **Simulations**
   - [ ] Portions of the BCP tested in live environment
   - [ ] Backup systems activated and tested
   - [ ] Data restoration tested
   - [ ] Conducted annually minimum for critical services

3. **Full Tests**
   - [ ] Complete end-to-end BCP execution
   - [ ] All critical systems recovered and validated
   - [ ] Full communication protocols executed
   - [ ] Conducted at least every 2 years for critical services
   - [ ] May be conducted annually for highest-risk scenarios

#### Test Documentation:
- [ ] Test plan prepared before exercise
- [ ] Objectives defined (what are we testing?)
- [ ] Success criteria specified
- [ ] Observers assigned to document issues
- [ ] Participants briefed
- [ ] Test executed as planned
- [ ] Results documented
- [ ] Issues logged and root-caused
- [ ] Improvements identified and implemented
- [ ] Lessons learned captured
- [ ] Follow-up actions tracked to completion

**What to verify:**
- [ ] BCP test schedule provided
- [ ] Recent test report(s) available (within 12-24 months)
- [ ] Test results show all critical systems successfully recovered
- [ ] RTO/RPO targets met in tests (or acceptable variances documented)
- [ ] Issues from previous tests remediated
- [ ] Improvement actions implemented
- [ ] Your organization involved in tests (or at least notified of results)

#### Testing for Your Services:

Request from vendor:
- [ ] When was your service last included in a BCP test?
- [ ] What were the results?
- [ ] Were RTO/RPO targets achieved?
- [ ] What issues were identified and remediated?
- [ ] When is the next scheduled test?
- [ ] Can your organization participate or observe?

---

## ISO 22301 Business Continuity Strategy Assessment

### Recovery Options Matrix

| Recovery Strategy | RTO | RPO | Cost | Availability | Best For |
|------------------|-----|-----|------|--------------|----------|
| **Hot Standby** | Minutes | Real-time | High | 99.99%+ | Critical, real-time systems |
| **Warm Standby** | Minutes-Hours | Recent backup | Medium-High | 99.9%+ | Important systems |
| **Cold Standby** | Hours-Days | Backup (hours old) | Low-Medium | 99%+ | Non-critical systems |
| **Backup/Recovery** | Days | Backup (days old) | Low | 95%+ | Non-critical systems |
| **Manual Recovery** | Week(s) | Manual restore | Minimal | <95% | Legacy systems only |

**Vendor Strategy for Your Services:**

- [ ] What recovery strategy is used for critical services? (Hot/warm/cold)
- [ ] Is strategy aligned with your RTO/RPO requirements?
- [ ] What is the geographic separation of backup location?
- [ ] Is backup location in same risk zone? (tornado alley, flood zone, etc.)
- [ ] What data backup frequency (hourly, daily, weekly)?
- [ ] Are backups tested for recoverability? (when, how often)

---

## ISO 22301 Vendor Assessment Checklist

### Pre-Contracting Assessment

- [ ] Is ISO 22301 certification required? (depends on service criticality)
- [ ] Does vendor hold current ISO 22301 certificate?
  - [ ] If yes: Obtain copy of certificate, verify current
  - [ ] If no: Is alternative BCP assurance acceptable?
- [ ] Request vendor's BCMS documentation (overview/summary)
- [ ] Request business continuity strategy for services to you
- [ ] Request RTO/RPO targets for critical services
- [ ] Request recent BCP test results
- [ ] Assess backup location geography vs. your location risk
- [ ] Review disaster recovery procedures

### Contracting Phase

- [ ] Include BCP requirements in contract
- [ ] Specify RTO/RPO targets for each critical service
- [ ] Define SLA credits for BCP non-compliance
- [ ] Include contractual testing obligations (annual minimum)
- [ ] Require 24-hour incident notification
- [ ] Specify communication procedures during recovery
- [ ] Define escalation to senior vendor management
- [ ] Include audit/inspection rights for BCP
- [ ] Require backup location disclosure and geography verification
- [ ] Specify your participation/notification in BCP tests

### Post-Contracting Monitoring

- [ ] Receive annual BCP test results
- [ ] Review test results for success criteria achievement
- [ ] Verify RTO/RPO targets met in tests
- [ ] Request details if targets not achieved
- [ ] Track remediation of test-identified issues
- [ ] Request updates if business/systems change
- [ ] Verify backup location remains appropriate
- [ ] Monitor compliance with contractual BCP obligations
- [ ] Request incident response records (time to detection, recovery)
- [ ] Annual BCP performance review meeting

---

## ISO 22301 Certification Verification

### How to Verify ISO 22301 Certification

1. **Certificate Check:**
   - [ ] Request copy of ISO 22301 certificate from vendor
   - [ ] Verify certificate is current (valid until stated expiry)
   - [ ] Check certificate holder name matches vendor entity
   - [ ] Verify certifying body is accredited

2. **Scope Verification:**
   - [ ] Review certificate scope (what business processes/services are covered?)
   - [ ] Confirm your services are within scope
   - [ ] Note any exclusions (e.g., certain data centers excluded)

3. **BCMS Documentation:**
   - [ ] Request vendor's BCMS policy and procedures overview
   - [ ] Verify it includes your organization as stakeholder
   - [ ] Confirm testing program is in place
   - [ ] Verify recovery objectives defined

4. **Test History:**
   - [ ] Request copies of recent BCP test reports
   - [ ] Verify tests cover services provided to you
   - [ ] Assess test results quality and completeness
   - [ ] Identify improvement actions and status

---

## Combined Assessment: ISO 20000 + ISO 22301 for Managed Service Providers

### When Both Standards Apply

A vendor providing **managed IT services for critical infrastructure** should have both:
- **ISO 20000-1:** For ongoing IT service quality, incident management, SLA management
- **ISO 22301:** For business continuity and disaster recovery assurance

### Combined Assessment Checklist

**Before contracting vendor for managed services:**

- [ ] ISO 20000-1 certification current? (or equivalent ITIL-aligned framework)
- [ ] ISO 22301 certification current? (or documented BCP meeting ISO 22301 requirements)
- [ ] Service portfolio meets your functional requirements
- [ ] SLA targets align with your business requirements
- [ ] RTO/RPO targets achievable and acceptable
- [ ] Backup/redundancy strategy acceptable
- [ ] Incident and problem management procedures documented
- [ ] Change management procedure understood
- [ ] Subcontractor management and compliance documented
- [ ] Test schedule includes your services
- [ ] Audit and inspection rights included in contract

**Ongoing management of managed service provider:**

- [ ] Monthly SLA compliance reporting received and reviewed
- [ ] Incident and problem metrics reviewed quarterly
- [ ] Annual BCP test results received and reviewed
- [ ] Annual vendor performance assessment conducted
- [ ] Subcontractor compliance verified annually
- [ ] Service review meetings held quarterly
- [ ] Escalation and communication procedures tested
- [ ] Annual improvement initiatives reviewed
- [ ] Certification renewal tracked (ISO 20000, ISO 22301)

---

## Documentation and Evidence Checklist

### What Vendors Should Provide

**For ISO 20000-1:**
- [ ] Current ISO 20000-1 certificate and scope
- [ ] Service catalogue
- [ ] Service Level Agreement (SLA) with metrics and targets
- [ ] Change management procedure
- [ ] Incident and problem management procedures
- [ ] Monthly SLA compliance reporting
- [ ] Quarterly service review meeting minutes
- [ ] Annual internal audit results
- [ ] Customer satisfaction survey results
- [ ] Performance improvement initiatives and status

**For ISO 22301:**
- [ ] Current ISO 22301 certificate and scope
- [ ] Business Impact Analysis (BIA) for services provided
- [ ] Business Continuity Plan (BCP)
- [ ] Recovery Time and Point Objectives (RTO/RPO)
- [ ] Backup and recovery procedures
- [ ] Backup location geographic details
- [ ] BCP test schedule and recent test results
- [ ] Lessons learned from tests and implemented improvements
- [ ] Risk register or assessment
- [ ] Incident response records (time to detection, notification, recovery)

**For Subcontractor Management:**
- [ ] List of approved subcontractors
- [ ] Subcontractor compliance documentation (ISO 20000, ISO 22301, or equivalents)
- [ ] Subcontractor performance metrics
- [ ] Contingency/alternative suppliers identified

### Records to Maintain on Your Side

- [ ] Current vendor certificates (copies)
- [ ] SLA documentation and baseline metrics
- [ ] Monthly SLA compliance tracking (12+ months)
- [ ] Quarterly service review meeting notes
- [ ] Incident and escalation logs
- [ ] Performance improvement tracking
- [ ] BCP test participation and results
- [ ] Subcontractor audit/compliance records
- [ ] Vendor risk assessment and rating
- [ ] Contract terms and compliance obligations
- [ ] Vendor communication logs

---

## Key Takeaways for Vendor Management

### ISO 20000-1 (Service Management)

1. **Certification or equivalent framework** ensures structured service management
2. **Service catalogue and SLAs** clearly define what you're getting
3. **Incident and problem management** ensures rapid issue resolution
4. **Change management procedures** reduce unplanned outages
5. **Performance reporting** provides visibility into actual service delivery
6. **Continuous improvement** ensures ongoing optimization

### ISO 22301 (Business Continuity)

1. **BCP documentation** ensures continuity procedures are prepared
2. **RTO/RPO targets** define acceptable outage/data loss thresholds
3. **Regular testing** validates that recovery procedures actually work
4. **Redundancy and backup** provide technical safeguards against failure
5. **Incident response** ensures rapid detection and communication
6. **Annual testing** identifies and remediate gaps before real disasters

### Combined Vendor Management

1. **Require both for Tier 1/2 services:** Service quality AND continuity assurance
2. **Monitor SLAs and tests:** Ongoing compliance verification
3. **Participate in tests:** Validate recovery impacts YOUR operations
4. **Track improvements:** Ensure vendor continuously improves
5. **Escalate failures:** Don't accept non-compliance without response
6. **Maintain alternatives:** Keep backup suppliers identified

---

## Assessment Frequency Schedule

| Activity | ISO 20000 | ISO 22301 | Frequency |
|----------|-----------|-----------|-----------|
| Certificate renewal verification | Yes | Yes | Upon renewal |
| SLA compliance review | Yes | N/A | Monthly/Quarterly |
| Performance dashboard review | Yes | N/A | Monthly |
| Service review meeting | Yes | Yes (annually) | Quarterly |
| Incident/problem metrics review | Yes | N/A | Quarterly |
| BCP test result review | N/A | Yes | Annually |
| Subcontractor compliance audit | Yes | Yes | Annually |
| Overall vendor assessment | Yes | Yes | Annually |
| Certification audit observation | Optional | Optional | Every 2-3 years |

---

**Last Updated:** February 2026
**Standards Referenced:** ISO 20000-1:2018, ISO 22301:2019
**Next Review:** February 2027 or upon standard updates
