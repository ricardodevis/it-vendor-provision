---
name: Shadow IT Governance
description: Discover, assess, and govern unsanctioned SaaS tools and software used across the organization
triggers:
  - discover shadow IT
  - unsanctioned software
  - unauthorized SaaS
  - who's using what
  - software without approval
  - rogue apps
  - unapproved tools
  - what SaaS do we have
  - shadow IT governance
  - unsanctioned SaaS discovery
  - unauthorized cloud services
  - software catalog governance
  - app sprawl
---

# Shadow IT Governance Skill

## Philosophy

Shadow IT isn't a bug—it's a feature of organizations where IT can't keep up with business needs. Employees adopt tools that work for them without waiting for procurement approval. The goal isn't to kill shadow IT; it's to govern it.

A heavy-handed ban creates friction, damages relationships with business teams, and pushes usage further underground. Instead, establish clear approval processes, make it easy to request tools legally, and audit regularly. Convert shadow IT from a security liability into managed inventory.

## Definition

Shadow IT encompasses any software, SaaS tool, or cloud service used by employees without IT/security approval. This includes:

- SaaS applications accessed directly (Figma, Notion, Airtable, etc.)
- Cloud storage services (Dropbox, Box, iCloud, Google Drive outside corporate instance)
- Communication platforms (personal Slack workspaces, Discord servers, Telegram)
- Development tools (npm packages, GitHub repositories, container registries not approved)
- Browser extensions and plugins
- Mobile applications
- AI/ML tools (ChatGPT, Copilot accessed without corporate contract)
- Integrations and automations (IFTTT, Zapier, Make without IT oversight)

## Discovery Methods

Layer multiple discovery methods to build comprehensive shadow IT inventory. No single method catches everything.

### 1. Identity Provider SSO Logs

Query your identity provider (Okta, Azure AD, AWS IAM) for all applications authenticating via corporate SSO. These logs reveal:

- Applications employees access using their corporate identity
- Login frequency and last login date
- Geographic access patterns (flag suspicious locations)
- Multi-factor authentication bypass attempts

**Strength**: High confidence; authenticated access is real usage.
**Limitation**: Misses tools accessed with personal identity (Gmail, Microsoft account).

### 2. Finance Tool Expense Reports

Cross-reference corporate card spend and expense reports for recurring SaaS charges:

- Card statements: Look for vendor names you don't recognize; SaaS vendors have distinctive patterns (monthly/annual recurring charges, small amounts)
- Expense reports: Employees often tag SaaS purchases with vendor names; search for common SaaS payment processors (Stripe, PayPal, vendor name)
- P.O. approvals: Finance tools track approved purchases; pull these and match against IT-approved catalog

**Strength**: Captures paid tools; expense reports include business justification.
**Limitation**: Misses free tools; tools paid from departmental budgets may not flow through corporate card.

### 3. Network Traffic Analysis

Deploy network monitoring (firewall, proxy, CASB) to capture:

- HTTPS destinations accessed by corporate devices
- DNS requests to SaaS domains
- TLS certificate inspection to identify encrypted traffic endpoints

**Strength**: Comprehensive view of outbound connections; catches tools not using SSO.
**Limitation**: Privacy concerns; high false-positive rate (legitimate CDNs, analytics); decryption requires user acceptance.

### 4. Browser Extension Audits

Query endpoint management tools (MDM, Jamf, Intune) for installed browser extensions:

- Extensions installed across managed devices
- Extension permissions (file access, network, microphone)
- Installation frequency (indicates adoption)

**Strength**: Clear inventory of client-side tools.
**Limitation**: Misses extensions on personal devices; personal browsers often unmanaged.

### 5. Employee Survey/Amnesty Program

Launch a voluntary disclosure program:

- "We're cataloging all tools in use. No punishment for disclosing. We want to understand and support your workflow."
- Survey tools employees use: What problem does it solve? How many people? Frequency of use?
- Offer amnesty period for honest disclosure

**Strength**: Builds trust; discovers tools not detectable by technical methods; provides business justification context.
**Limitation**: Relies on honesty; doesn't scale to large organizations; underestimates actual usage.

### 6. CASB (Cloud Access Security Broker) Integration

Deploy a CASB (Netskope, Zscaler, McAfee) to monitor cloud application usage:

- User identity + cloud application + data volume flowing
- Risky activities (mass file download, sharing outside domain)
- Unsanctioned cloud storage, AI tools, collaboration platforms

**Strength**: Combines user identity + application usage + risk scoring.
**Limitation**: Requires network traffic inspection (privacy/performance considerations).

## Risk Assessment Framework

Not all shadow IT is equally risky. Assess each discovered tool systematically.

### Risk Assessment Checklist

For each shadow IT tool, evaluate:

**1. Data Sensitivity**: What data flows to this tool?
- Does it process customer data, financial data, intellectual property, or PII?
- Is the data encrypted in transit and at rest?
- What is the vendor's data residency policy?
- **Risk**: Data breach, regulatory violation, competitive exposure

**2. User Count and Scope**
- How many employees use it?
- Which departments? Business criticality?
- Does it integrate with other systems (pulling data from multiple sources)?
- **Risk**: Wider exposure = higher impact if compromised

**3. Compliance Implications**
- GDPR (if EU data involved): Does vendor have DPA? Where is data stored?
- NIS2 / NIS Directive: Is vendor subject to regulatory requirements?
- HIPAA (healthcare): Does tool meet HIPAA standards?
- SOC2 certification: Is vendor audited?
- **Risk**: Regulatory violation, fines, audit failure

**4. Security Posture**
- SOC2 Type II certification? (Most important: proves third-party security audit)
- Vulnerability disclosure program?
- Incident response process?
- Authentication method: Password-only vs. SSO vs. MFA mandatory?
- **Risk**: Account compromise, data breach, malware injection

**5. Business Criticality**
- Can the organization stop using it tomorrow, or is work blocked?
- Is there critical data or automation running through it?
- How much time investment to migrate to approved alternative?
- **Risk**: Service disruption if tool is shut down; switching costs

### Risk Scoring Model

Assign points to each tool:

```
Data Sensitivity:
  - No sensitive data: 0 points
  - PII or employee data: 3 points
  - Customer data: 7 points
  - Financial/IP data: 10 points

User Count:
  - <5 users: 0 points
  - 5-20 users: 2 points
  - 20-100 users: 5 points
  - >100 users: 10 points

Compliance Risk:
  - No regulatory implications: 0 points
  - Non-critical compliance (internal policy): 2 points
  - GDPR/HIPAA/SOC2 implications: 5 points
  - Unmet regulatory requirement: 10 points

Security Posture:
  - SOC2 Type II + MFA: 0 points
  - SOC2 Type II: 2 points
  - SOC2 Type I: 3 points
  - No certification: 5 points
  - Known vulnerabilities: 10 points

Business Criticality:
  - Easily replaceable: 0 points
  - Moderate switching cost: 2 points
  - High switching cost: 5 points
  - Mission-critical: 10 points

Total Score: Add points (0-50)
  0-10: Low risk
  11-25: Medium risk
  26-40: High risk
  41-50: Critical risk (urgent action required)
```

## Classification Outcomes

After assessment, classify each shadow IT tool into one of five outcomes:

### APPROVE

**Criteria**: Low-risk tool, valuable use case, no equivalent in approved catalog

**Actions**:
- Add to approved software catalog
- Create procurement process for purchasing/licensing
- Document approved use cases
- Notify users that tool is now officially sanctioned

**Example**: Team adopted Figma for design; better than alternatives in your environment; low security risk

### APPROVE WITH CONDITIONS

**Criteria**: Tool provides value but requires mitigation (legal, security, compliance)

**Conditions** may include:
- Execute Data Processing Agreement (DPA) with vendor
- Enable SSO integration (no standalone passwords)
- Require multi-factor authentication
- Encryption of data at rest and in transit
- Audit logging and regular compliance reviews
- Limited data scope (no PII without explicit approval)

**Actions**:
- Engage procurement/legal to execute DPA
- Configure SSO and MFA
- Communicate approved use scope to users
- Schedule annual security review

**Example**: Notion approved for project management, but DPA required before customer data can be stored

### REPLACE

**Criteria**: Equivalent or better approved tool exists; shadow IT tool adds no value

**Actions**:
- Identify replacement tool from approved catalog
- Build migration plan (data export, timeline, training)
- Assign migration owner
- Plan user communication and training
- Set sunset date for old tool (typically 30-90 days)

**Example**: Employees using personal Airtable bases; approved Smartsheet achieves same goals; consolidate onto Smartsheet

### BLOCK

**Criteria**: Unacceptable security, compliance, or business risk; cannot be mitigated

**Actions**:
- Classify as prohibited (update policy)
- Set clear sunset date (30-90 days)
- Communicate risk and deadline to users
- Provide replacement approved tool
- Implement technical controls (block at network or SSO layer) after sunset
- Escalate non-compliance to manager

**Example**: Employee using unencrypted file-sharing service with customer data; immediately prohibited

### DEFER

**Criteria**: Tool assessment incomplete; requires further investigation or vendor engagement

**Actions**:
- Schedule security questionnaire with vendor
- Request SOC2 report or complete security assessment
- Evaluate integration options
- Plan timeline for decision
- Communicate interim status to users (tool under review, not prohibited)

**Example**: New AI tool gaining adoption; vendor has no SOC2 yet; defer pending certification

## Remediation Process

Converting shadow IT discovery into governed inventory requires structured communication and execution.

### 1. Communication to Affected Users

**Timing**: Communicate decision within 2 weeks of assessment completion

**Message template**:
```
Subject: [Tool Name] - Official Status

We recently discovered [Tool Name] in use across [Department].
Thank you for building innovative solutions to your workflow challenges.

Status: [APPROVE/APPROVE WITH CONDITIONS/REPLACE/BLOCK]

[For APPROVE/CONDITIONS]:
We're officially supporting this tool. [Conditions apply: describe SSO requirement, DPA, etc.]
Contact [IT contact] to ensure your access is configured correctly.

[For REPLACE]:
We're consolidating to [Approved Tool], which provides equivalent capabilities with better integration.
Migration timeline: [dates]. Support details at [link].

[For BLOCK]:
Due to security/compliance requirements, [Tool Name] must be discontinued by [date].
We understand this impacts your workflow. [Replacement tool] provides equivalent functionality.
Support for migration: [contact].

Questions? Reach out to [IT contact].
```

### 2. Migration Plan (if replacing)

Create detailed migration steps:

```
Tool: [Legacy Shadow IT] → [Approved Replacement]
Timeline: [Start date] to [Sunset date]

Week 1-2: Kickoff & Assessment
- Data export: How much data? What format?
- User list: Who needs access to replacement?
- Training needs: Is new tool significantly different?

Week 3-6: Setup & Onboarding
- Provision accounts in approved tool
- Import/migrate data
- Configure integrations
- Pilot with 10-20 users; gather feedback

Week 7-10: Rollout
- Train all users
- Run shadow period (both tools active)
- Support escalation team
- Monitor adoption

Week 11-12: Sunset
- Final data export from legacy tool
- Disable access
- Archive data per retention policy

Owner: [Name]
Success metric: 100% of users migrated, zero failed imports
```

### 3. Approval Fast-Track (if approving)

For approved tools, accelerate to official status:

- Execute any required legal agreements (DPA, MSA)
- Configure SSO/MFA integration
- Add to approved software catalog
- Notify procurement (add to vendor management system)
- Schedule quarterly review (SLA, cost, adoption)

### 4. Policy Update

Update your approved software catalog and governance policy:

```
[Tool Name] - APPROVED

Status: Approved for [department/org-wide] use
Business justification: [What problem does it solve?]
Security: [SOC2 status, SSO, MFA, DPA in place]
Cost: [Per-seat, annual, budget owner]
Support: [IT contact, escalation path]
Data scope: [What data can be stored?]
Review date: [Annual review scheduled for X date]
```

## Prevention: Building Sustainable Shadow IT Governance

Discovery is tactical; prevention is strategic. Design systems that make legal tool approval easier than unauthorized adoption.

### 1. Approved Software Catalog

Maintain a discoverable catalog of approved tools by category:

```
COMMUNICATION
- Slack (primary, SSO enabled) - approved
- Microsoft Teams (primary, SSO enabled) - approved
- Discord (NOT approved, use Slack instead) - blocked
- Personal Telegram (NOT approved) - blocked

PROJECT MANAGEMENT
- Asana (primary, SSO enabled) - approved
- Monday.com (approved for [specific teams], SSO enabled) - approved with conditions
- Airtable (low-risk, spreadsheet alternative) - approved
- Smartsheet (primary, SSO enabled) - approved
- Notion (approved with DPA, no customer data) - approved with conditions

DESIGN
- Figma (primary, SSO enabled) - approved
- Adobe Creative Cloud (primary, SSO enabled) - approved
- Sketch (personal license OK, not enterprise) - approved

AUTOMATION
- Zapier (use Zapier free tier only, IT approval for paid) - approved with conditions
- Make (IT approval required) - requires approval

[Show status, SSO availability, cost, owner contact, prohibited alternatives]
```

Keep catalog in a searchable location (wiki, intranet). Update quarterly.

### 2. Self-Service Request Process

Make it easy for employees to request new tools. Easy approval path = less shadow IT.

**Request process**:

```
1. Employee submits request form:
   - Tool name and vendor
   - Business problem it solves
   - Estimated users
   - How long needed (trial vs. long-term)
   - Cost
   - Integration requirements

2. IT triage (2 business days):
   - Is equivalent tool already approved? If yes, redirect.
   - Risk level assessment (security, compliance, cost)

3. Quick-path (<$2,500/year, low risk):
   - IT security review only
   - Approval within 5 business days
   - Procurement and licensing

4. Standard path ($2,500-$10,000/year, medium risk):
   - Security review + legal review (if data involved)
   - Approval within 10 business days
   - Procurement and licensing

5. Executive path (>$10,000/year, high risk):
   - Full security + compliance + procurement review
   - Approval within 15 business days
   - CFO notification for budget impact

6. Fast-track emergency (tool needed for active project):
   - 30-day trial approval within 2 business days
   - Full evaluation by day 30
   - Continue or discontinue decision required by day 31
```

Target: Approval turnaround of 5-10 business days for standard requests. Speed kills shadow IT.

### 3. Periodic Amnesty Programs

Run annual amnesty programs to refresh shadow IT inventory.

**Amnesty process** (annual):

```
Month: October

Announcement:
"Shadow IT Amnesty Week: Oct 15-21
We're cataloging all tools in use. No consequences.
Complete this 2-minute survey and tell us:
- What tools do you use?
- What problems do they solve?
- How many on your team use them?
- Would you want official support?

All responses confidential. We use this to improve tool availability and workflow."

Survey link: [anonymous, not connected to employee ID]

IT processing:
- Consolidate results
- Deduplicate
- Flag high-adoption tools for formal assessment
- Follow up with top tool users for deeper conversation
```

Annual amnesty maintains relationship with business teams and prevents adoption drift.

### 4. Awareness Training

Train employees on tool approval, data security, and policy.

**Annual training module** (30 minutes):
- Why shadow IT governance matters: Risk stories (data breach, compliance violation)
- What's prohibited and why: Unencrypted file sharing, unvetted AI tools, vendor risk
- How to request approval: Show the easy process; turnaround time expectations
- Approved tools by role: Designers, engineers, managers, finance (customized by job function)
- Compliance obligations: What data can go where
- Reporting unsafe tools: Confidential escalation path

## Governance Policy Template

Codify shadow IT governance in policy.

```
POLICY: Approved Software and Shadow IT Governance

Scope: All employees, contractors, agents accessing company systems and data

Policy Statement:
All software used to process company data, access company systems, or store company information
must be approved by IT. Unapproved tools pose security, compliance, and business continuity risk.

Requirements:

1. Approved Tools Only
   - Use tools from the Approved Software Catalog (link)
   - Request new tools via the Software Request Portal (link)
   - Tool approval process: [reference approval workflow]

2. Prohibited Tools
   - Personal file-sharing services (Dropbox, iCloud, personal OneDrive)
   - Unencrypted communication platforms
   - Unvetted AI/ML tools (without SOC2 or enterprise agreement)
   - Free versions of vendor tools (e.g., free Airtable with company data)
   - [Add organization-specific prohibitions]

3. Data Classification Rules
   - Public data: Limited tool restrictions; use judgment
   - Internal data: Requires SOC2 certification; no free tier tools
   - Confidential data (customer, financial): Requires DPA + encryption + SSO
   - Restricted data (credit cards, credentials): Enterprise tools with audit logging only

4. Approval Timeline
   - <$2,500/year, low risk: 5 business days
   - $2,500-$10,000/year, medium risk: 10 business days
   - >$10,000/year, high risk: 15 business days
   - Emergency/trial: 2 business days (30-day limit)

5. Non-Compliance
   - First occurrence: Notification and education
   - Continued use: Escalation to manager
   - Severe risk (financial data on unapproved tool): Immediate access revocation
   - Termination for policy violation in egregious cases

6. Exception Process
   - Limited to <30 days
   - Requires VP+ approval
   - Documented business justification
   - Security review required
   - Not renewable without full approval process

Effective Date: [Date]
Review: Annually
Owner: Chief Information Officer
```

## Output: Shadow IT Inventory with Risk Scoring

Document the complete shadow IT discovery in a structured inventory.

### Shadow IT Inventory Template

```
Organization: [Company]
Discovery Date: [Date]
Data Sources Used: [Identity provider SSO logs, Finance tool, Network analysis, etc.]

DISCOVERED TOOLS (Sorted by Risk Score)

| Tool Name | Category | Users | Annual Cost | Risk Score | Data Type | Status | Action |
|-----------|----------|-------|------------|-----------|-----------|--------|--------|
| ChatGPT | AI/ML | 147 | $0 (free) | 32 (HIGH) | Customer Q&A | DEFER | Await SOC2; vendor engagement |
| Personal Dropbox | Storage | 34 | $2,040 | 28 (HIGH) | Designs, docs | BLOCK | Migrate to approved Box; sunset 30 days |
| Figma | Design | 89 | $8,900 | 8 (LOW) | Designs | APPROVE | Add to catalog; enable SSO |
| Slack (free tier) | Communication | 200 | $0 | 22 (MEDIUM) | General team chat | APPROVE | Upgrade to Slack standard (SSO); consolidate |
| Notion | Productivity | 56 | $0-$5,600 | 14 (MEDIUM) | Project plans, docs | APPROVE WITH CONDITIONS | Negotiate DPA; no customer data |

High-Risk Tools Requiring Immediate Action:
1. ChatGPT (32 pts): Employees sharing customer data without DPA; lack of SOC2 certification
2. Personal Dropbox (28 pts): Unencrypted file transfer; no DPA; data residency unknown
3. Slack free tier (22 pts): Data retention policies; compliance gaps vs. Slack standard

Medium-Risk Tools Requiring Mitigation:
1. Notion (14 pts): Lacks DPA; good for internal use but prohibit customer data
2. Airtable (9 pts): Approved for low-sensitivity data only; recommend Smartsheet for customer data

Low-Risk Tools Approved as-is:
1. Figma (8 pts): SOC2 Type II; strong design tool; widespread adoption
2. Google Drive (internal) (5 pts): Enterprise managed instance; SSO; encryption

REMEDIATION PLAN

Timeline:
- Week 1: Communicate decisions to all affected teams
- Week 2-3: Execute approval agreements (DPA for Notion)
- Week 4-8: Plan migration for Dropbox → Box
- Week 9-12: Execute migration; sunset Dropbox
- Ongoing: Monitor for new tools; quarterly amnesty program

Budget Impact:
- New approvals: $8,900 (Figma) + $X,XXX (Slack upgrades) = $X,XXX
- Replacements/consolidations: Dropbox elimination saves $2,040
- Net first-year impact: $X,XXX

Success Metrics:
- Dropbox migration: 100% of files migrated, zero user complaints
- Notion DPA: Executed within 30 days
- ChatGPT decision: Vendor SOC2 achieved or tool blocked within 90 days
- Catalog adoption: 80%+ of new tool requests routed to approved tools within 6 months

POLICY RECOMMENDATIONS

1. Formalize approved software catalog (currently informal wiki)
2. Implement software request portal (currently email-based)
3. Add shadow IT discovery to quarterly IT risk reviews
4. Mandate annual amnesty program (October)
5. Train all managers on approved tool set by [date]
```

## Reference Connectors

Integrate these data sources for automated discovery and ongoing monitoring:

- **Identity provider** (Okta, Azure AD, AWS IAM): SSO application logs, user authentication patterns
- **Finance tool** (Concur, Expensify, Coupa): Corporate card spend, SaaS vendor identification
- **Asset management tool** (Jamf, Intune, Qualys): Installed software inventory, browser extensions
- **CASB** (Netskope, Zscaler, McAfee): Cloud application usage, user identity + app + data flow
- **Security scanner** (Qualys, Nessus, Rapid7): Vulnerability scanning of approved tools, compliance assessment

## Related Skills

- **vendor-assessment**: Discovered shadow IT tools that merit approval go through formal assessment
- **license-management**: Shadow IT audit reveals licensing gaps and unauthorized subscriptions
- **risk-compliance**: Unsanctioned tools may violate GDPR, NIS2, or sector regulations
- **vendor-onboarding**: Approved shadow IT tools need proper onboarding
