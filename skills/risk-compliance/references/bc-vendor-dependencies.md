# Business Continuity Planning for Vendor Dependencies

## Regulatory Imperative

NIS2 Article 21.2.c explicitly requires essential and important entities to maintain business continuity plans that address supply chain vulnerabilities. Auditors will assess your documentation of vendor dependencies and contingency strategies as a mandatory control. Absence of formalized vendor dependency mapping and continuity planning constitutes a material audit finding.

## Vendor Dependency Mapping

Establish a comprehensive inventory documenting the relationship between each vendor and your business operations. This is the foundational deliverable for continuity planning.

### Mapping Template

For each vendor, document:

- **Vendor Name and Service**: Clear identification of what service or product is delivered
- **Business Processes Supported**: List all critical processes dependent on this vendor (e.g., payroll processing, email delivery, identity management, customer data storage)
- **Data Classification**: Highest classification of data processed by this vendor (public, internal, confidential, personal data subject to GDPR)
- **User Population Affected**: Number and category of internal users and external parties dependent on this vendor
- **Integration Points**: System-to-system connections, API dependencies, data flows, authentication dependencies
- **RPO (Recovery Point Objective)**: Maximum acceptable data loss in hours/days if vendor fails
- **RTO (Recovery Time Objective)**: Maximum acceptable downtime in hours/days before business impact becomes critical
- **Alternative Vendors Available**: Documented alternatives with estimated migration time and effort
- **Contractual Exit Terms**: Notice period required, data portability terms, wind-down support

Store this mapping in a centralized inventory (spreadsheet or asset management system) with quarterly reviews to maintain accuracy as vendors and dependencies change.

## Criticality Classification Framework

Assign each vendor-dependency relationship to a criticality tier based on business impact of vendor failure.

### Tier 1: Business-Critical (Immediate Stop)

Vendor failure directly halts revenue-generating processes or violates regulatory obligations within hours.

**Characteristics:**
- Core business function ceases immediately upon vendor failure
- No operational workaround exists
- RTO measured in hours (typically ≤4 hours)
- Examples: Payment processing provider, core application hosting, identity provider for employee access, primary email service

### Tier 2: High-Impact (Significant Degradation)

Vendor failure causes substantial operational degradation but organization can continue core functions through documented workarounds for short periods.

**Characteristics:**
- Key processes significantly impaired but not stopped
- Manual workarounds exist for limited duration (hours to days)
- RTO measured in 4-24 hours
- Examples: Customer relationship management platform, HR management system, financial reporting tools, backup storage service

### Tier 3: Medium-Impact (Inconvenience)

Vendor failure causes process inefficiency or reduced capability but does not prevent business continuity.

**Characteristics:**
- Non-critical processes affected
- Workarounds or alternative tools available immediately
- RTO measured in days (1-7 days)
- Examples: Project management tool, internal analytics platform, training delivery system, collaboration tools with alternatives

### Tier 4: Low-Impact (Minimal Effect)

Vendor failure has negligible business impact.

**Characteristics:**
- Non-essential tools or services
- Immediate alternatives exist or downtime is acceptable for extended periods
- RTO measured in weeks
- Examples: Internal wiki/knowledge base, non-critical monitoring tools, professional development subscriptions

## Concentration Risk Analysis

Beyond individual vendor criticality, assess systemic risk from vendor concentration across multiple dimensions.

### Single-Vendor Dependency Risk

Identify processes supported by only one vendor with no documented alternative.

**Control Actions:**
- For Tier 1 dependencies: Implement dual-vendor architecture or active redundancy
- For Tier 2 dependencies: Negotiate backup arrangements or maintain warm standby capability
- Document and accept single-vendor risk only with explicit sign-off from business owner and risk committee

### Geographic Concentration Risk

Assess vendor infrastructure location and resilience to regional disruptions.

**Analysis Points:**
- Where is the vendor's primary data center location?
- Are backups geographically dispersed or co-located with primary systems?
- Is vendor subject to geopolitical sanctions or regional instability?
- Does vendor support multi-region failover for Tier 1 services?

### Technology Stack Concentration Risk

Identify shared dependencies in underlying technology platforms.

**Examples of Concentration:**
- Multiple vendors all relying on AWS/Azure for infrastructure (single cloud provider dependency)
- Multiple vendors using same database technology vulnerable to correlated failures
- Multiple vendors with single points of failure in authentication/API gateway
- Supply chain where multiple vendors depend on same third-party component

### Contractual Concentration Risk

Identify synchronized contract renewal dates and correlated termination risks.

**Concentration Scenarios:**
- Multiple Tier 1 vendors with renewals in same month creating simultaneous renegotiation pressure
- Multiple vendors with termination clauses triggered by same triggering event
- Vendor group contracts where single breach affects multiple service lines

**Mitigation:**
- Stagger contract renewal dates where commercially feasible
- Negotiate independent termination rights for each service line
- Identify which contracts have coordinated escalation or termination triggers

## Redundancy Strategy by Tier

Design redundancy approaches proportionate to criticality tier.

### Tier 1: Active-Active or Warm Standby

**Active-Active Architecture** (Preferred for highest availability)
- Two or more vendors simultaneously active providing identical service
- Load balanced between providers
- Vendor failure results in automatic rerouting with no service interruption
- Applicable when: Cost-justified by criticality and vendor failure frequency
- Example: Dual payment processing providers with active load balancing

**Warm Standby** (When active-active not feasible)
- Primary vendor handles full load
- Secondary vendor maintains synchronized data and configuration
- Failover from primary to secondary via manual or automated procedures
- Maximum failover time: 4 hours for Tier 1
- Requires regular failover testing (monthly minimum)
- Example: Backup identity provider tested monthly for failover readiness

**Implementation Requirements:**
- Data synchronization ensures no data loss on failover
- Failover procedures documented and tested
- Staff trained on failover activation and timing
- Communication plan established for failover execution
- Cost justified and included in vendor selection criteria

### Tier 2: Documented Alternative with Migration Plan

**Alternative Vendor Arrangement:**
- Identify specific alternative vendor capable of delivering same service
- Document feature/performance gaps versus primary vendor
- Establish service agreement confirming alternative vendor can accept rapid onboarding
- Migration plan estimates effort and timeline (typically 2-5 days)
- Maintain sufficient configuration documentation to enable rapid implementation

**Implementation Requirements:**
- Alternative vendor identified in writing before Tier 2 classification approved
- Alternative vendor has sufficient capacity to absorb your workload
- Configuration and migration procedure documented
- Tabletop exercise conducted annually to validate feasibility
- Alternative vendor relationship maintained through periodic contact

### Tier 3: Identified Alternatives

**Market Research Documentation:**
- Identify 2+ vendors capable of delivering equivalent service
- Document competitive landscape and relative positioning
- Maintain current feature comparison matrix
- Document approximate migration effort and timeline

**Maintenance:**
- Update quarterly as vendors change offerings
- No formal arrangement required with alternatives
- Enables rapid vendor selection if primary vendor fails

### Tier 4: No Formal Redundancy Required

Accept single-vendor dependency. Document acceptance and establish monitoring for vendor financial health indicators (funding announcements, acquisition discussions, regulatory actions).

## Continuity Testing

Formalize testing to validate that continuity plans are executable and staff understand responsibilities.

### Testing Schedule by Tier

**Tier 1 Vendors:**
- **Failover Test**: Quarterly minimum. Execute actual failover to secondary vendor/system, validate data integrity, confirm no data loss, document results
- **Tabletop Exercise**: Annual. Discuss failure scenario, walk through procedures, identify gaps, update playbooks
- **Communication Drill**: Annual. Simulate vendor failure notification and test internal escalation and communication procedures

**Tier 2 Vendors:**
- **Tabletop Exercise**: Annual. Review migration plan, confirm alternative vendor contact information, validate estimated timeline accuracy
- **Documentation Review**: Biennial. Verify migration documentation is current and executable

**Tier 3 and 4:**
- **Market Research Review**: Annual. Update competitive landscape and alternative vendors documentation

### Testing Documentation

For each test exercise, document:
- Test date and participants
- Scenario description
- Procedures tested
- Issues identified
- Remediation actions taken
- Timeline for procedure updates

## Vendor Failure Scenarios

Plan for realistic vendor failure modes.

### Insolvency

**Indicators:**
- Vendor announces layoffs or office closures
- Unpaid invoices to their suppliers (leaked publicly)
- Delayed payment of vendor invoices
- Credit rating downgrade
- Bankruptcy announcement

**Impact:**
- Service discontinuation on short notice
- Potential data unavailability during insolvency proceedings
- Support staff reductions during wind-down
- Likelihood of data being used by trustee to satisfy creditors

**Mitigation:**
- Monitor vendor financial health (Crunchbase, Bloomberg, SEC filings, news)
- For Tier 1/2 vendors: Quarterly financial health review
- Maintain active redundancy or standby arrangements
- Ensure data portability terms allow rapid extraction

### Acquisition or Discontinuation

**Indicators:**
- Acquisition announcement with acquirer's competing product
- Public statement that vendor product is being sunset
- Roadmap announcements indicating feature discontinuation

**Impact:**
- Service may be discontinued post-acquisition
- Integration with acquirer's competing product may be forced
- Support and feature development may stop
- Pricing may increase substantially

**Mitigation:**
- Monitor M&A activity in vendor landscape
- Establish contractual change-of-control notification requirements (see vendor-communication-templates.md)
- Build acquisition/discontinuation clauses into renewal negotiations
- Maintain documented alternatives at all times for Tier 1/2

### Security Breach Rendering Unusable

**Indicators:**
- Vendor discloses data breach affecting your data
- Vendor service taken offline for forensic investigation
- Regulatory action against vendor for security failures

**Impact:**
- Loss of trust in vendor's security posture
- Potential regulatory obligation to discontinue use
- Data compromise requiring breach notification
- Possible legal action against vendor

**Mitigation:**
- Regular vendor security assessments (annual for Tier 1/2)
- Contractual right to terminate immediately upon material security incident
- Data encryption where vendor is not trusted with plaintext
- Incident response plan including vendor security incident procedures

### Regulatory Ban

**Indicators:**
- Regulatory action against vendor (sanctions, compliance violations)
- Industry regulator prohibition on using vendor's services
- Government ban on vendor technology

**Impact:**
- Immediate service cessation becomes mandatory
- No legal alternative but to switch vendors
- Potential regulatory fine if organization continues using banned vendor

**Mitigation:**
- For Tier 1/2 vendors: Quarterly regulatory monitoring
- Active redundancy for any vendor subject to geopolitical risk
- Contractual termination rights triggered by regulatory action

### Prolonged Outage Beyond SLA

**Indicators:**
- Service unavailable for extended period beyond SLA RTO commitment
- Vendor unable to provide recovery estimate

**Impact:**
- RTO violated, business impact cascades
- SLA credits insufficient to cover damage
- Potential contractual termination right triggered

**Mitigation:**
- Negotiate adequate SLA compensation terms (escalating credits)
- Define termination right for RTO breach beyond specified period
- Maintain warm standby or alternative for Tier 1 vendors
- Test failover procedures monthly for Tier 1

## Recovery Playbook Template

Develop per-vendor recovery playbooks to enable rapid coordinated response to vendor failure.

### Playbook Structure

**Vendor Name and Service:** [Vendor], [Service Description]

**Criticality Tier:** [Tier 1-4]

**Failure Detection**
- Monitoring alert that indicates vendor failure: [Alert name/condition]
- Time to detect failure: [Minutes]
- Responsible party for monitoring: [Role]
- Escalation trigger point: [Time from alert]

**Initial Notification and Escalation**
- Immediate notification recipients: [List roles and contact methods]
- Escalation contact if primary unresponsive: [Backup contact information]
- Executive notification trigger: [Specific condition]
- External stakeholder notification (customers, regulators): [Who, when, how]

**Failover/Alternative Activation (if applicable)**
- Failover activation point: [Time or condition trigger]
- Failover activation responsible party: [Role]
- Failover procedure: [Step-by-step failover checklist]
- Data synchronization verification: [Steps to confirm data integrity post-failover]
- Service validation: [Tests to confirm service availability post-failover]
- Estimated failover duration: [Time in minutes/hours]

**Alternative Vendor Activation (if no failover available)**
- Alternative vendor name: [Vendor name]
- Alternative vendor primary contact: [Name, phone, email]
- Activation timeline: [Hours]
- Data export from failed vendor: [Procedure and responsible party]
- Configuration for alternative vendor: [Key configuration steps]
- Testing and validation: [Steps to confirm alternative vendor operational]

**Communication Plan**
- Internal stakeholder notification: [Template and timeline]
- Customer notification: [Template and timeline if applicable]
- Vendor communication (failed vendor): [When and how to contact]
- Regulatory notification: [If required, timeline and process]
- Executive communication: [Frequency and escalation points during recovery]

**Data Recovery**
- Backup location and recovery contact: [Details]
- RPO validation: [Process to confirm data loss within acceptable limits]
- Data integrity verification: [Specific checks required]
- Estimated data recovery timeline: [Hours]

**Root Cause and Lessons Learned**
- Responsible party for post-incident review: [Role]
- Timeline for root cause analysis: [Days post-incident]
- Lessons learned documentation: [Process and timeline]
- Playbook update trigger: [When to update this playbook based on incident]

**Post-Recovery Validation**
- Checklist of normal operations validation: [Key processes to verify]
- User acceptance testing: [Specific test cases]
- Performance baseline verification: [Metrics to confirm service quality restored]
- Timeline to return to normal operations: [Days]

## Alignment with Vendor Exit and Contractual Controls

This business continuity planning is the operational counterpart to contractual exit provisions and formal exit procedures.

**Related Controls:**
- Refer to `exit-clauses.md` for contractual termination rights by vendor and trigger conditions
- Refer to `vendor-exit.md` for step-by-step exit execution procedures
- Continuity playbooks should reference specific SLA breach termination clauses in exit-clauses.md
- Alternative vendor arrangements should be validated before marking vendor as Tier 2 eligible

**Integration Points:**
- Quarterly vendor health reviews feeding continuity readiness assessments
- Failover tests serving as validation that exit-clauses termination rights are exercisable
- Exit procedures updated based on lessons learned from continuity tests
- Acquisition/discontinuation clauses in renewal negotiations informed by concentration risk analysis

## Annual Continuity Assessment

Conduct annual comprehensive review of vendor dependency continuity posture.

**Assessment Scope:**
- Update vendor dependency inventory for new vendors and changed dependencies
- Revalidate criticality tier assignments based on business changes
- Review concentration risk across all dimensions quarterly
- Test failover procedures for all Tier 1 vendors
- Conduct tabletop exercises for all Tier 1 and 2 vendors
- Review and update recovery playbooks

**Output:**
- Updated vendor dependency inventory with test results
- Board-level summary of continuity readiness and identified gaps
- Remediation plan for any identified deficiencies
- Resource plan for implementing redundancy for Tier 1 high-risk vendors
