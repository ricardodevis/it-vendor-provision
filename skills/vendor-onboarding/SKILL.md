---
name: vendor-onboarding
description: >
  Structured operational onboarding for IT vendors from contract signing through first-90-days validation.
  Activate when the user asks to "onboard a vendor", "set up vendor access", "plan vendor go-live",
  "vendor onboarding checklist", "prepare for vendor deployment", "vendor integration planning",
  "post-contract vendor setup", "team readiness for vendor", "vendor provisioning", "vendor enablement",
  "vendor setup", "new vendor integration", "post-contract activation", "vendor go-live", "vendor kickoff",
  or any variant describing the operational phase AFTER contract signature and BEFORE productive team usage.
version: 1.0.0
---

# IT Vendor Operational Onboarding

A comprehensive guide for managing the critical operational phase between contract signature and full team productivity with the vendor. This is where vendor relationships succeed or fail—a signed contract means nothing if your team cannot use the tool effectively within 30 days.

## Philosophy

Vendor onboarding is an engineering discipline, not an administrative task. The gap between "contract signed" and "team productively using the vendor" determines whether your investment delivers value or becomes a costly distraction. A well-executed onboarding plan prevents security incidents, reduces support tickets, accelerates user adoption, and establishes healthy vendor relationships. Poor onboarding burns goodwill, creates security exposure, and spawns workarounds that persist for years.

The onboarding phase has seven interdependent workstreams: security preparation, access provisioning, knowledge transfer, technical integration, training delivery, go-live execution, and post-launch validation. Each must complete within synchronized milestones.

## Onboarding framework: 7 workstreams

### 1. Pre-go-live Security Hardening

**Objective:** Verify the vendor's security posture is operational in your environment BEFORE team access.

**Checklist (reference detailed checklist in `references/security-onboarding-checklist.md`):**

- **Identity & Access**: SSO/SAML integration tested, MFA enforced, RBAC mapping verified, service accounts inventoried
- **Network**: IP whitelisting configured, VPN requirements verified, firewall rules deployed, DNS validated
- **Data**: Data classification alignment confirmed, DLP rules active, encryption verified, backup validation complete
- **Monitoring**: Log forwarding configured, SIEM integration active, alerts baseline-lined, anomaly detection armed
- **Compliance**: DPA execution verified, data residency confirmed, subprocessor notification activated, audit rights activated
- **Incident readiness**: Vendor security contact confirmed, incident response integration planned, tabletop exercise scheduled

**Timeline:** Complete before go-live. Most items require 2-4 weeks with vendor coordination.

**Owner:** Security architect + IT operations + vendor platform team

**Validation:** Security sign-off required before access provisioning begins.

---

### 2. Access Provisioning and User Identity Management

**Objective:** Establish RBAC structure and user provisioning workflows so team members gain access on go-live day with correct permissions.

**Steps:**

1. **RBAC mapping**: Translate organizational structure into vendor roles. Example structure:
   - Admin role: Full platform access, configuration, user management, vendor liaison
   - Department manager role: Manage users in department, view reports, configure templates
   - End user role: Use core features, create/read records, no configuration
   - Power user role: Advanced features, custom workflows, limited administration

2. **Service account provisioning**: Create and inventory service accounts for:
   - System-to-system integrations (API automations)
   - Scheduled jobs and batch processes
   - Reporting and data extraction tools
   - Emergency admin access (with MFA and logging)

3. **User provisioning workflow**: Decide on process:
   - **Manual on-premises**: HR submits request → IT creates account → access provisioning
   - **Directory sync**: ~~identity provider integration with real-time sync
   - **JIT provisioning**: First login creates account automatically via SAML
   - **Deprovisioning automation**: Off-boarding triggers automatic account disablement

4. **License assignment**: Align license type (user vs. consumption-based) with roles. Verify procurement has purchased correct licenses before provisioning.

5. **Admin account creation**: Establish 2+ independent admin accounts (different individuals, different ~~identity provider sources). Require MFA. Maintain audit log access.

6. **Test access**: Provisioning QA should verify:
   - Users can authenticate via configured SSO method
   - Assigned roles grant correct feature access
   - Data filters work (if role-based data access is enforced)
   - Admin accounts have full access
   - Deprovisioning removes access cleanly

**Timeline:** 2-3 weeks. Starts after SSO integration is complete.

**Owner:** IT identity & access team + vendor onboarding contact

**Validation:** Successful test access for sample users in each role.

---

### 3. Knowledge Transfer from Vendor

**Objective:** Document how to operate, maintain, troubleshoot, and escalate issues with the vendor system. Use template in `references/knowledge-transfer-template.md`.

**Key deliverables:**

- **System architecture overview**: Diagrams of deployment model, integrations, data flows, dependencies
- **Admin guide**: Key configuration areas, maintenance windows, common troubleshooting procedures
- **Integration documentation**: APIs used by other systems, authentication methods, rate limits, error handling
- **Support model**: How to raise tickets, severity definitions, escalation paths, named vendor contacts
- **Internal runbook**: Day-to-day operations, periodic tasks (password rotations, license reconciliation), monitoring checks
- **Training materials inventory**: What vendor provides (videos, docs, webinars) vs. what you must create (internal guides, processes)
- **Handover sign-off checklist**: Confirms knowledge transfer is complete before team users access the system

**Timeline:** Runs parallel to security and access work. Completes 1 week before go-live.

**Owner:** IT operations + vendor solutions engineer

**Validation:** Internal team member (not the vendor) can execute basic admin tasks using the runbook.

---

### 4. Technical Integration and Data Migration

**Objective:** Validate that the vendor system integrates cleanly with existing infrastructure and that any required data migrations are complete and verified.

**Steps:**

1. **API connectivity**: Test integrations between vendor system and dependent tools:
   - ~~document repository for document management workflows
   - ~~ticketing system for incident syncing
   - ~~identity provider for user provisioning
   - Custom systems via REST/GraphQL APIs
   - File transfer mechanisms (SFTP, cloud storage)

2. **Authentication validation**: Confirm SSO works from actual client devices and networks. Test:
   - SAML assertion passing
   - MFA challenges working
   - Session timeouts and re-authentication flows
   - Mobile/app authentication if applicable

3. **Data migration verification** (if applicable):
   - Completion: All historical data migrated
   - Accuracy: Spot-check data samples for corruption, loss, truncation
   - Mappings: All field mappings correct (vendors often mis-map field types)
   - Reconciliation: Counts match between source and vendor system
   - Performance: Queries and reports execute within acceptable time

4. **Integration testing with dependent systems**:
   - Document upload workflows to ~~document repository work end-to-end
   - Incident creation from ticketing system appears correctly in vendor system
   - Notification integrations (email, Slack, etc.) deliver correctly
   - Any custom scripts or APIs handle error conditions gracefully

5. **Performance baseline**: Establish metrics:
   - Page load times under normal load
   - API response times for common operations
   - Database query performance for reporting
   - System capacity limits (concurrent users, storage, transaction volume)

**Timeline:** 3-4 weeks. Runs parallel to knowledge transfer.

**Owner:** IT infrastructure team + vendor technical team

**Validation:** All integrations pass testing. Data migration reconciliation complete. Performance baseline documented.

---

### 5. Training Plan Delivery

**Objective:** Build capability so team members understand how to use the vendor system and when to escalate.

**Components:**

1. **Admin training** (internal IT team):
   - System configuration walkthrough
   - User provisioning and license management
   - Backup and disaster recovery procedures
   - Monitoring and alerting setup
   - When/how to contact vendor support
   - Vendor-provided training + internal runbook walkthrough

2. **End-user training** (department teams):
   - Functionality overview (live demo or recorded session)
   - Common workflows step-by-step
   - How to find help (internal wiki, support articles, escalation)
   - Data entry standards and quality expectations
   - Performance expectations and limitations

3. **Power user identification and training**:
   - Identify 1-2 power users per department (engaged, tech-savvy, trusted by peers)
   - Provide deeper training: advanced features, customization, reporting
   - Empower them to answer peer questions and reduce L1 support load
   - Schedule monthly office hours for Q&A

4. **Self-service resource setup**:
   - Internal wiki/knowledge base with FAQ, screenshots, video walkthroughs
   - Link to vendor documentation and learning portal
   - Email alias for internal support questions
   - Calendar for optional training refreshers

**Timeline:** 2 weeks. Delivered in final week before go-live and 1 week after launch.

**Owner:** IT training + department managers

**Validation:** Attendance tracking. Post-training surveys. Readiness assessment.

---

### 6. Go-live Execution

**Objective:** Transition from pilot/test to live production use in a controlled manner.

**Pre-go-live checklist:**

- [ ] Security sign-off complete
- [ ] All users have verified access in PROD environment
- [ ] All integrations tested and working
- [ ] Data migration complete and reconciled
- [ ] Admin team trained and confident
- [ ] Training materials deployed and accessible
- [ ] Support structure in place (email, escalation contacts, ~~ticketing system integration)
- [ ] Rollback plan documented and rehearsed
- [ ] Stakeholder communication sent (go-live announcement, support contacts, known limitations)
- [ ] Vendor on-call commitment confirmed for go-live day + 48 hours
- [ ] IT help desk briefed on common issues and escalation path

**Go-live day activities:**

1. **Stakeholder announcement**: Email/meeting confirming system is live, support channels, expected performance
2. **Monitoring**: Real-time monitoring for errors, login failures, performance degradation
3. **Incident command**: Dedicated channel (Slack/teams) for L1 → L2 escalation during first 8 hours
4. **Vendor liaison**: Vendor on-call engineer available for architecture/integration issues
5. **User support**: Help desk ready for "how do I..." questions; power users engaged for peer support

**Rollback criteria:**
- Data corruption or loss detected
- Integrations failing at scale (e.g., sync with identity provider breaks)
- Authentication unavailable
- Performance unacceptable (>30 sec page loads, timeouts)

**Rollback procedure**: Pre-arranged with vendor and documented. Should be testable before go-live.

**Timeline:** 1 day. Preceded by 2 weeks of final validation and training.

**Owner:** Project manager + IT operations + vendor onboarding team

---

### 7. First 90 Days: Adoption and Validation

**Objective:** Confirm the system is delivering value, team adoption is healthy, and issues are being resolved.

**Validation tracking (use structured onboarding tracker—see output section):**

- **SLA baseline establishment**: Document actual support response times, ticket resolution times, system availability over first 30 days. Compare to contractual SLAs.
- **Initial performance metrics**: Track usage (daily active users, feature adoption, transaction volume). Identify unused features indicating training gaps.
- **User adoption tracking**: Weekly metrics on % users who have logged in, departments with full adoption vs. partial adoption
- **Issue log**: All incidents logged in ~~ticketing system with category (training gap, feature request, bug, integration issue, configuration)
- **First quarterly review preparation**: Schedule vendor business review at day 60-75 to review:
  - Adoption metrics and any at-risk departments
  - Performance against SLAs
  - Upcoming feature needs or integrations
  - Vendor roadmap alignment with organizational plans

**Escalation for non-adoption:**
- If a department shows <50% adoption by day 45 → targeted retraining or change management
- If tickets are high volume (>20/day) → escalate to vendor; may indicate product fit issue or training gap

**Timeline:** Days 1-90.

**Owner:** IT operations + department sponsors + vendor success manager

---

## Output Format: Structured Onboarding Tracker

Generate a Markdown document with phases, milestones, owners, and status. Template:

```markdown
# Vendor Onboarding Plan: [VENDOR NAME]

**Vendor software:** [Service type]
**Criticality level:** [Critical/High/Medium/Low]
**Contract signed:** [Date]
**Target go-live:** [Date]
**Project manager:** [Name]

---

## Timeline Overview

| Phase | Duration | Owner | Status |
|-------|----------|-------|--------|
| Security Hardening | 2-4 weeks | Security + Ops | ⏳ Pending |
| Access Provisioning | 2-3 weeks | IAM team | ⏳ Pending |
| Knowledge Transfer | 3-4 weeks | Ops + Vendor | ⏳ Pending |
| Technical Integration | 3-4 weeks | Infrastructure | ⏳ Pending |
| Training Delivery | 2 weeks | HR/Training | ⏳ Pending |
| Go-live Execution | 1 day | PM + Ops + Vendor | ⏳ Pending |
| Post-launch Validation | 90 days | Ops + Sponsors | ⏳ Pending |

---

## Detailed Milestones

### Phase 1: Security Hardening (Weeks 1-4)

**Milestone 1.1:** Security kickoff meeting with vendor
- Date: [TBD]
- Deliverable: Security requirements document, timeline agreed
- Owner: Security architect + Vendor CSO
- Status: ⏳

**Milestone 1.2:** SSO/SAML integration complete and tested
- Date: [TBD]
- Deliverable: SSO working from test environment
- Owner: IAM + Vendor platform
- Status: ⏳

**Milestone 1.3:** MFA enforcement configured
- Date: [TBD]
- Deliverable: Vendor system rejects non-MFA logins
- Owner: Vendor + IT security
- Status: ⏳

**Milestone 1.4:** Data classification alignment confirmed
- Date: [TBD]
- Deliverable: Written confirmation of which data classes can reside in vendor system
- Owner: Security architect + Data steward
- Status: ⏳

**Milestone 1.5:** Security sign-off
- Date: [TBD]
- Deliverable: Security approval to proceed to access provisioning
- Owner: CISO
- Status: ⏳

---

### Phase 2: Access Provisioning (Weeks 2-5)

**Milestone 2.1:** RBAC structure designed
- Date: [TBD]
- Deliverable: Role mapping document; approvals from department heads
- Owner: IAM + department managers
- Status: ⏳

**Milestone 2.2:** Service accounts created and inventoried
- Date: [TBD]
- Deliverable: Service account inventory; API keys secured in vault
- Owner: IT operations
- Status: ⏳

**Milestone 2.3:** Test users provisioned and access verified
- Date: [TBD]
- Deliverable: Sample users in each role can authenticate and access correctly
- Owner: IAM + Vendor
- Status: ⏳

**Milestone 2.4:** Production user provisioning complete
- Date: [TBD]
- Deliverable: All team members have vendor accounts with correct roles
- Owner: IAM + HR
- Status: ⏳

---

### Phase 3: Knowledge Transfer (Weeks 2-5)

**Milestone 3.1:** Vendor solution engineer assigned
- Date: [TBD]
- Deliverable: Named contact; knowledge transfer schedule
- Owner: Vendor account manager
- Status: ⏳

**Milestone 3.2:** System architecture documentation received
- Date: [TBD]
- Deliverable: Architecture diagrams; data flow documentation
- Owner: Vendor
- Status: ⏳

**Milestone 3.3:** Admin guide and runbook drafted internally
- Date: [TBD]
- Deliverable: Internal procedures document; walk-through tested
- Owner: IT operations + Vendor
- Status: ⏳

**Milestone 3.4:** Integration documentation received and reviewed
- Date: [TBD]
- Deliverable: API docs, authentication methods, rate limits
- Owner: Vendor + IT architect
- Status: ⏳

**Milestone 3.5:** Support model documented
- Date: [TBD]
- Deliverable: Ticket escalation paths, vendor contact names, response SLAs
- Owner: Vendor + IT operations
- Status: ⏳

**Milestone 3.6:** Knowledge transfer sign-off
- Date: [TBD]
- Deliverable: Internal team can execute basic operations from runbook
- Owner: Operations manager
- Status: ⏳

---

### Phase 4: Technical Integration (Weeks 2-5)

**Milestone 4.1:** Integration requirements finalized
- Date: [TBD]
- Deliverable: List of systems requiring integration; API endpoints identified
- Owner: IT architect + Vendor
- Status: ⏳

**Milestone 4.2:** Data migration plan approved (if applicable)
- Date: [TBD]
- Deliverable: Migration script/process; rollback plan; reconciliation steps
- Owner: Data team + Vendor
- Status: ⏳

**Milestone 4.3:** Authentication integration tested
- Date: [TBD]
- Deliverable: SSO working from production network; MFA functioning
- Owner: IT infrastructure + Vendor
- Status: ⏳

**Milestone 4.4:** System integrations tested
- Date: [TBD]
- Deliverable: All integrations (document repo, ticketing, etc.) working end-to-end
- Owner: IT operations + Systems team
- Status: ⏳

**Milestone 4.5:** Performance baseline documented
- Date: [TBD]
- Deliverable: Performance test results; capacity limits documented
- Owner: IT infrastructure
- Status: ⏳

**Milestone 4.6:** Technical sign-off
- Date: [TBD]
- Deliverable: IT infrastructure confirms system ready for production
- Owner: Infrastructure manager
- Status: ⏳

---

### Phase 5: Training Delivery (Weeks 4-5)

**Milestone 5.1:** Admin training delivered
- Date: [TBD]
- Deliverable: IT team trained and certified; internal runbook reviewed
- Owner: Vendor + IT training
- Status: ⏳

**Milestone 5.2:** Power users identified and trained
- Date: [TBD]
- Deliverable: 1-2 power users per department; office hours scheduled
- Owner: Department managers + IT
- Status: ⏳

**Milestone 5.3:** End-user training delivered (recorded + live sessions)
- Date: [TBD]
- Deliverable: Attendance tracked; post-training survey completed
- Owner: IT training + Department managers
- Status: ⏳

**Milestone 5.4:** Self-service resources deployed
- Date: [TBD]
- Deliverable: Wiki, FAQ, video library, support email configured
- Owner: IT operations
- Status: ⏳

---

### Phase 6: Go-live (Week 6)

**Milestone 6.1:** Final go-live readiness review
- Date: [TBD]
- Deliverable: All milestones completed; stakeholder sign-off
- Owner: Project manager
- Status: ⏳

**Milestone 6.2:** Stakeholder communication sent
- Date: [TBD]
- Deliverable: Go-live announcement; support contacts published
- Owner: Project manager + Communications
- Status: ⏳

**Milestone 6.3:** Go-live day
- Date: [TBD]
- Deliverable: System live; users accessing; support team monitoring
- Owner: Ops + PM + Vendor
- Status: ⏳

**Milestone 6.4:** Initial issues resolved
- Date: [TBD + 48 hours]
- Deliverable: Hotline tickets closed; system stable
- Owner: IT operations
- Status: ⏳

---

### Phase 7: Post-launch Validation (Days 1-90)

**Milestone 7.1:** Day-7 adoption check
- Date: [TBD]
- Deliverable: % users activated; issue log reviewed
- Owner: Operations manager
- Status: ⏳

**Milestone 7.2:** Day-30 performance review
- Date: [TBD]
- Deliverable: Adoption metrics; support volume; SLA comparison
- Owner: Operations + Vendor success manager
- Status: ⏳

**Milestone 7.3:** Day-45 adoption escalation (if needed)
- Date: [TBD]
- Deliverable: Re-training for low-adoption departments; change management plan
- Owner: Department managers + IT
- Status: ⏳

**Milestone 7.4:** Day-60 business review prep
- Date: [TBD]
- Deliverable: Metrics compiled; agenda with vendor circulated
- Owner: Operations manager
- Status: ⏳

**Milestone 7.5:** Day-75 first quarterly business review
- Date: [TBD]
- Deliverable: Vendor review completed; roadmap alignment discussed
- Owner: Operations + Department sponsors + Vendor
- Status: ⏳

**Milestone 7.6:** Day-90 handoff to operations
- Date: [TBD]
- Deliverable: Onboarding complete; vendor moved to BAU support model
- Owner: Operations manager
- Status: ⏳

---

## Success Criteria

- [ ] All security sign-offs obtained before go-live
- [ ] 100% of team members with production access by go-live day
- [ ] All integrations tested and working
- [ ] >90% of trained users logging in within first 7 days
- [ ] <10 critical issues in first 30 days
- [ ] System availability >99.5% in first 90 days
- [ ] Adoption reaching >80% by day 60
- [ ] Vendor SLAs matched or exceeded in first month

---

## Risks and Mitigation

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|-----------|
| SSO integration delay | Medium | High | Vendor tech team embedded by week 1; escalate to Vendor CTO if not resolved by week 2 |
| Incomplete data migration | Medium | High | Migration test run in parallel with live data; rollback plan ready |
| Poor user adoption | Medium | Medium | Power users engaged; office hours scheduled; managers held accountable for adoption % |
| Support overload | Low | High | Help desk staffing surge planned; vendor support escalation pathways clear |

---

## Communication Plan

- **Weekly:** Project status email to stakeholders (PM + IT leadership)
- **Bi-weekly:** Department head check-in (adoption, issues, concerns)
- **Day 0:** Go-live announcement to all users
- **Day 7, 30, 60, 90:** Adoption and performance metrics shared

---

## Appendices

- Appendix A: Security Onboarding Checklist (see `references/security-onboarding-checklist.md`)
- Appendix B: Knowledge Transfer Template (see `references/knowledge-transfer-template.md`)
- Appendix C: RBAC Role Mapping
- Appendix D: Integration Inventory
- Appendix E: Training Attendance Log
- Appendix F: Issue Log (populate from ~~ticketing system)
```

---

## Before Executing Vendor Onboarding

1. Review the complete framework above
2. Consult `references/security-onboarding-checklist.md` for detailed security controls
3. Consult `references/knowledge-transfer-template.md` for structured knowledge transfer
4. Adjust timeline based on vendor complexity and your organizational readiness
5. Identify project manager and owners for each workstream before starting
6. Schedule initial kickoff meeting with vendor onboarding team

## Execution Tips

- **Start security work immediately after contract signature**—don't wait for "formal" onboarding kickoff
- **Parallelize**—access provisioning, knowledge transfer, and technical integration should run in parallel, not sequence
- **Build in 1-2 week buffer before target go-live**—invariably integrations take longer than estimated
- **Engage power users early**—they become force multipliers for adoption and problem diagnosis
- **Vendor accountability**—hold vendor to milestones; slow vendors signal poor future support
- **Document everything**—even trivial configuration decisions become critical context when troubleshooting 6 months later

## Related Skills

- **vendor-assessment**: Onboarding begins after successful vendor assessment and approval
- **it-contract-review**: Contract terms (SLAs, DPA, access requirements) define onboarding parameters
- **risk-compliance**: Security and compliance requirements shape the onboarding checklist
- **contract-lifecycle**: Onboarding completion marks the start of active contract lifecycle management
