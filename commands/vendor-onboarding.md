---
name: vendor-onboarding
description: >
  Generate and track a structured vendor onboarding plan from contract signing
  through first-90-days validation. Covers security hardening, access provisioning,
  knowledge transfer, technical integration, training delivery, go-live execution,
  and post-launch validation across 7 interdependent workstreams.
user_instructions: >
  Provide vendor name, software/service type (SaaS, on-premises, hybrid),
  criticality level (Critical/High/Medium/Low), target go-live date,
  and any specific integration requirements or constraints.
  Optionally provide: contract document, vendor's product documentation,
  organizational security policies, existing technology stack details.
---

# Command: Vendor Operational Onboarding Plan

## Instructions

When executing this command:

### 1. Load the skill

Read `${CLAUDE_PLUGIN_ROOT}/skills/vendor-onboarding/SKILL.md` to understand the complete onboarding framework and 7 workstreams.

### 2. Gather vendor and organizational information

From user input:
- Vendor name and product/service name
- Vendor software type: SaaS / on-premises / hybrid deployment
- Criticality level to organization: Critical / High / Medium / Low
- Target go-live date
- Specific integration requirements (which systems must it integrate with?)
- Any constraints (budget, timeline, existing vendor relationships)

If user provides documentation:
- Store and analyze vendor product documentation (architecture, APIs, security)
- Review contract for SLAs, support terms, security requirements
- Review organizational security policies that apply to this vendor

If connected to ~~document repository:
- Search for any existing vendor assessment or contract
- Search for relevant organizational policies (data classification, security standards)

### 3. Assess onboarding complexity

Determine complexity level (2-4 weeks, 3-5 weeks, or 4-6 weeks) based on:
- **Technical integration complexity:** Simple (zero integrations) → Moderate (1-3 systems) → Complex (4+ systems, custom APIs)
- **Security requirements:** Baseline (IP whitelist, SSO) → Enhanced (MFA, DLP, incident response planning) → Maximum (compliance requirements, audit rights, encryption key management)
- **Organizational readiness:** Mature (clear processes, dedicated resources) → Intermediate (some processes, shared resources) → Green-field (build from scratch)
- **Team complexity:** Small team (< 50 users) → Medium (50-500) → Large (500+), with dependency on department complexity

### 4. Develop the 7-workstream onboarding plan

Generate structured plan covering:

1. **Pre-go-live Security Hardening** (reference `${CLAUDE_PLUGIN_ROOT}/skills/vendor-onboarding/references/security-onboarding-checklist.md`)
   - Identify required security controls based on criticality level and data classification
   - Determine SSO/SAML timeline and complexity
   - Identify IP whitelisting, VPN, and network requirements
   - Assess vendor's security certifications (SOC 2? ISO 27001?)
   - Plan DPA execution and compliance verification

2. **Access Provisioning and User Identity**
   - Design RBAC structure based on organizational hierarchy
   - Identify service accounts needed for integrations
   - Plan user provisioning workflow (manual, directory sync, JIT)
   - Estimate licensing needs and reconciliation process

3. **Knowledge Transfer** (reference `${CLAUDE_PLUGIN_ROOT}/skills/vendor-onboarding/references/knowledge-transfer-template.md`)
   - Request system architecture documentation from vendor
   - Plan internal runbook creation (operations team responsibility)
   - Identify knowledge transfer content: admin guide, APIs, support model
   - Assess training material gaps (vendor provides X; organization must create Y)

4. **Technical Integration and Data Migration**
   - Identify all systems requiring integration with vendor platform
   - Plan authentication/API connectivity testing
   - If data migration required: plan extraction, mapping, testing, reconciliation
   - Establish performance baseline and capacity limits

5. **Training Plan Delivery**
   - Define admin training (2-4 hours)
   - Define power user training (2-3 hours)
   - Define end-user training (1-2 sessions, 30 min each)
   - Plan self-service resource creation (wiki, FAQ, video links)

6. **Go-live Execution**
   - Develop pre-go-live readiness checklist
   - Plan communication to stakeholders (announcement of go-live)
   - Plan day-of monitoring and support (incident command structure)
   - Document rollback criteria and procedure

7. **First 90 Days Validation**
   - Plan SLA baseline establishment (measure real vendor performance)
   - Plan adoption tracking (% users activated by department)
   - Plan issue logging and categorization
   - Plan quarterly business review (day 60-75)

### 5. Create detailed onboarding tracker

Generate a Markdown document (see SKILL.md output format section) with:
- Timeline overview table (phases, duration, owner, status)
- Detailed milestones for each of the 7 workstreams
- Milestone dependencies (what must complete before the next phase)
- Owners assigned for each major milestone
- Success criteria for each phase
- Risk register with mitigation strategies
- Communication plan (weekly updates, department check-ins, stakeholder announcements)

### 6. Reference detailed checklists and templates

Link to or provide:
- **Security Onboarding Checklist** (from `${CLAUDE_PLUGIN_ROOT}/skills/vendor-onboarding/references/security-onboarding-checklist.md`)
  - Identity & Access section (SSO, MFA, RBAC, service accounts)
  - Network section (IP whitelisting, VPN, firewall)
  - Data section (classification, DLP, encryption, backup)
  - Monitoring section (log forwarding, SIEM, alerting, anomaly detection)
  - Compliance section (DPA, data residency, audit rights)
  - Incident readiness section

- **Knowledge Transfer Template** (from `${CLAUDE_PLUGIN_ROOT}/skills/vendor-onboarding/references/knowledge-transfer-template.md`)
  - System architecture documentation requirements
  - Administration guide template
  - Integration and API documentation needs
  - Support model documentation
  - Internal runbook template
  - Training materials inventory
  - Handover sign-off checklist

### 7. Customize for vendor type and criticality

**For SaaS vendors:**
- Emphasize API integration, SSO configuration, data residency verification
- Include vendor change management notification process

**For on-premises vendors:**
- Emphasize infrastructure requirements, deployment complexity, patching procedures
- Include infrastructure readiness assessment (CPU, memory, storage, networking)

**For Critical systems:**
- Extend security onboarding timeline by 1-2 weeks
- Require tabletop exercise for incident response
- Mandate formal acceptance testing before go-live

**For High compliance requirement systems (Finance, Healthcare, Legal):**
- Add DPA review timeline
- Add audit rights verification
- Plan for subprocessor notification process
- Document compliance-specific monitoring requirements

### 8. Identify timeline adjustments

Adjust estimated 4-6 week onboarding based on:
- **Accelerated (2-3 weeks):** Low criticality, zero integrations, minimal security requirements, existing vendor relationship
- **Normal (4-5 weeks):** Medium criticality, 1-2 integrations, standard security controls, new vendor
- **Extended (6-8 weeks):** Critical system, 3+ integrations, enhanced security/compliance, complex organizational structure

Document rationale for any accelerated timeline and identify trade-offs/risks.

### 9. Generate output document

Create a comprehensive Markdown plan document with:

**Structure:**
1. Executive summary (1 page): Vendor name, criticality, timeline, key dependencies, critical path items
2. Timeline overview (visual Gantt-style table)
3. Detailed milestones and deliverables (all 7 workstreams)
4. Success criteria
5. Risk register and mitigation
6. Communication plan
7. Appendices:
   - Security Onboarding Checklist (full checklist from references)
   - Knowledge Transfer Template summary (key sections from references)
   - RBAC role mapping template
   - Integration inventory template
   - Issue log template

**Format:** Markdown with clear headers, tables, checklists, and sections that can be copied into ~~ticketing system or shared with project stakeholders.

### 10. Save and share the plan

- Save the plan in user's workspace with descriptive filename: `[Vendor-Name]-Onboarding-Plan-[Date].md`
- If connected to ~~document repository: Create new document version for tracking
- If connected to ~~ticketing system: Create epic/parent ticket with milestones as child tickets
- If connected to ~~calendar: Suggest key milestone dates for calendar invites
- Share the plan with project manager, IT leadership, and vendor account manager

### 11. Next steps guidance

Provide recommendations:
- Who should be the project manager? (Typically IT operations lead or procurement manager)
- Who owns each workstream? (Security → security architect, Access → IAM team, etc.)
- How to handle vendor coordination? (Single point of contact? Weekly sync calls?)
- Risk mitigation: If timeline is aggressive, what's acceptable to defer post-go-live?
- Success metrics: How will we measure onboarding success? (SLA compliance? Adoption rate? Issue count?)

---

## Example Execution Flow

```
USER: "I need to onboard Jira Cloud for our development team.
We have 150 engineers, go-live target is April 15, and we need to integrate
with Azure AD for SSO and Slack for notifications."

CLAUDE:
1. Load vendor-onboarding SKILL.md
2. Assess:
   - Vendor: Jira Cloud (SaaS)
   - Criticality: High (team productivity depends on it)
   - Complexity: Moderate (SSO integration, Slack integration, 150 users)
   - Timeline: 4-5 weeks (targeting April 15 → start March 15)

3. Develop plan:
   - Week 1: SSO/SAML setup, security hardening, DPA verification
   - Week 2: User provisioning (directory sync from Azure AD)
   - Week 3: Slack integration testing, data migration from Jira Server (if applicable)
   - Week 4: Admin & power user training, end-user training, runbook creation
   - Week 5: Go-live (April 15), first-week monitoring
   - Weeks 6-14: 90-day validation, adoption tracking, quarterly review

4. Generate tracker with:
   - 6 phases, 24 milestones
   - RBAC roles: Admin, Project lead, Developer
   - Integration: Azure AD + Slack
   - Owners: IT Identity (SSO), IT Operations (Jira admin), Engineering Manager (power users)
   - Risks: SSO complexity, team adoption resistance, custom Jira configuration needs

5. Create full plan document
6. Save as "Jira-Cloud-Onboarding-Plan-2026-02-23.md"
7. Recommend: Project manager = IT ops lead, weekly vendor syncs,
   April 1 target for training to allow 2-week buffer before go-live
```

---

## Notes for Execution

- **Parallel workstreams:** Security, access provisioning, knowledge transfer, and technical integration should run in parallel (weeks 1-4). Do not delay one waiting for another.

- **Vendor coordination:** Establish weekly 1-hour sync call with vendor solution engineer/CSM during onboarding. Clear blockers early.

- **Buffer time:** Build 1-2 week buffer before target go-live. Invariably integrations take longer than estimated, and training gaps emerge.

- **Documentation:** Create all procedures in organization's wiki/knowledge base as you go. Post-go-live documentation is often deprioritized.

- **Power user leverage:** Identify and train power users (end-user advocates) early. They multiply your training effectiveness and reduce support load.

- **Success is adoption:** Onboarding is successful when >80% of team is actively using the system within 60 days AND support volume is decreasing, not increasing.
