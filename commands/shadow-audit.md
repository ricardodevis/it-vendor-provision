---
name: shadow-audit
description: Discover and assess unsanctioned SaaS and software usage across the organization
triggers:
  - shadow-audit
---

# Shadow IT Audit Command

## User Instructions

Execute a comprehensive shadow IT discovery and risk assessment. Optionally provide:

- **Department focus**: Limit discovery to a specific department or business unit (optional)
- **Known shadow IT tools**: Tools to investigate or verify (optional, e.g., "Notion, Figma, ChatGPT")
- **Available data sources**: Which discovery methods are available to you (optional, e.g., "SSO logs, expense reports, network data")

Example invocation:
```
shadow-audit department=Engineering known-tools="Notion,Figma,ChatGPT" data-sources="SSO logs, expense reports"
```

## Execution Steps

### Step 1: Skill Reference

Read the Shadow IT Governance skill for context and methodologies:

```
${CLAUDE_PLUGIN_ROOT}/skills/shadow-it-governance/SKILL.md
```

This provides the complete framework for discovery methods, risk assessment, classification outcomes, and remediation processes.

### Step 2: Discovery Initialization

Confirm user parameters:

```
Department Focus: [user-provided or organization-wide]
Known Tools to Investigate: [user-provided list or empty]
Available Data Sources: [user-provided or request what's available]
```

If data sources are not specified, ask the user which of these are accessible:

- Identity provider SSO logs (Okta, Azure AD, AWS IAM)
- Finance tool expense reports and corporate card spend (Concur, Coupa, etc.)
- Network traffic analysis or CASB data (firewall logs, DNS, Zscaler, Netskope)
- Endpoint management device inventory (Jamf, Intune, Qualys)
- Employee survey responses or previous discovery data

### Step 3: Shadow IT Discovery

For each available data source, perform discovery:

#### 3A: Identity Provider SSO Logs (if available)

Query the identity provider for:
- All third-party applications integrated with corporate SSO
- Login frequency per application (last 90 days)
- User counts per application
- Last login date (identify inactive tools)

**Output**: List of applications with user count and last login date.

Prompt user: "Can you provide SSO logs or query results showing applications users have authenticated to? Format: [App Name] | [User Count] | [Last Login Date]"

#### 3B: Finance Tool Expense Reports (if available)

Analyze corporate card and expense report data for:
- Recurring SaaS charges (monthly/annual vendor subscriptions)
- One-time purchases of software licenses
- Vendor names and payment amounts
- Department that made the purchase

**Output**: List of SaaS vendors by spend, department, and frequency.

Prompt user: "Provide corporate card or expense report data showing SaaS vendors. Format: [Vendor] | [Department] | [Annual Cost] | [Frequency]"

#### 3C: Network Traffic Analysis (if available)

Analyze firewall/CASB logs for:
- HTTPS destinations accessed by employees (aggregate, privacy-preserving)
- Known SaaS domains (identify vendor)
- User count accessing each destination
- Data volume (if available)

**Output**: List of external SaaS destinations with user counts.

Prompt user: "Provide network/CASB analysis results showing SaaS domains accessed. Format: [Domain/Vendor] | [User Count] | [Data Volume if available]"

#### 3D: Endpoint Device Inventory (if available)

Query device management system for:
- Installed applications across managed devices
- Browser extensions installed
- Installation frequency (how many devices)
- Application version information

**Output**: List of installed applications and extensions with installation frequency.

Prompt user: "Provide device inventory results showing installed applications/extensions. Format: [App/Extension] | [Device Count] | [Installation Frequency]"

#### 3E: Known Tools Investigation (if provided)

For each tool in user's known-tools list:
- Research vendor: SOC2 certification, security posture, pricing
- Estimate adoption: Search for evidence in available data sources
- Flag: This tool requires full assessment in Step 5

**Output**: Initial risk flags and research summary for each known tool.

### Step 4: Consolidate and Deduplicate

Merge discovery results from all sources into unified shadow IT inventory:

```
| Tool Name | Source(s) | User Count | Estimate | Annual Cost | Known Risk Factors |
|-----------|-----------|-----------|----------|-------------|-------------------|
| Figma | SSO logs, Device inv. | 89 users | High adoption | $8,900 | None identified |
| ChatGPT | SSO logs, Employee known | 147 users | High adoption | Free tier | No DPA, unknown data handling |
| Personal Dropbox | Finance tool, Network | 34 users | Medium adoption | $2,040 | Unencrypted, no DPA |
| Notion | SSO logs, Employee known | 56 users | Medium adoption | Variable | No DPA, GDPR implications |
```

Sort by: User count (descending) to identify highest-impact tools first.

### Step 5: Risk Assessment

For each discovered tool, apply the risk assessment framework from the skill:

**For each tool, assess**:

1. **Data Sensitivity**: What data types flow to this tool?
   - No sensitive data: 0 points
   - PII or employee data: 3 points
   - Customer data: 7 points
   - Financial/IP data: 10 points

2. **User Count and Scope**:
   - <5 users: 0 points
   - 5-20 users: 2 points
   - 20-100 users: 5 points
   - >100 users: 10 points

3. **Compliance Risk**:
   - No regulatory implications: 0 points
   - Non-critical compliance: 2 points
   - GDPR/HIPAA/SOC2 implications: 5 points
   - Unmet regulatory requirement: 10 points

4. **Security Posture**:
   - SOC2 Type II + MFA: 0 points
   - SOC2 Type II: 2 points
   - SOC2 Type I: 3 points
   - No certification: 5 points
   - Known vulnerabilities: 10 points

5. **Business Criticality**:
   - Easily replaceable: 0 points
   - Moderate switching cost: 2 points
   - High switching cost: 5 points
   - Mission-critical: 10 points

**Calculate Total Risk Score** (0-50 points):
- 0-10: Low risk → APPROVE pathway
- 11-25: Medium risk → APPROVE WITH CONDITIONS pathway
- 26-40: High risk → REPLACE or BLOCK pathway
- 41-50: Critical risk → BLOCK immediately

**Output**: Risk assessment matrix with scores.

### Step 6: Classification

For each tool, assign classification outcome:

- **APPROVE**: Low-risk tool with business value and no equivalent approved alternative
- **APPROVE WITH CONDITIONS**: Tool approved pending legal (DPA), security (SSO, MFA), or compliance (data scope) mitigations
- **REPLACE**: Equivalent or superior approved tool exists; shadow IT tool should be migrated
- **BLOCK**: Unacceptable security or compliance risk; immediate discontinuation required
- **DEFER**: Assessment incomplete; requires vendor engagement or additional data; under review

**Classification checklist for each tool**:
- [ ] Risk score calculated
- [ ] Data types flowing through tool identified
- [ ] Vendor security posture researched (SOC2, certifications)
- [ ] Compliance implications assessed (GDPR, HIPAA, regulatory)
- [ ] Equivalent approved tool evaluated (if any exist)
- [ ] Business justification understood (why do users use it?)
- [ ] Final classification assigned with rationale

**Output**: Classified tool inventory with rationale for each classification.

### Step 7: Remediation Planning

For each tool classified as APPROVE WITH CONDITIONS, REPLACE, or BLOCK:

**For APPROVE WITH CONDITIONS**:
- [ ] Legal requirements: DPA needed? Vendor willing? Timeline?
- [ ] Technical requirements: SSO integration possible? MFA mandatory?
- [ ] Data scope limitation: What data types permitted?
- [ ] Annual review required: Yes
- Owner assigned: [Name/team]

**For REPLACE**:
- [ ] Approved alternative identified: [Tool name]
- [ ] Migration complexity: [Data volume, user count, integrations]
- [ ] Migration timeline: [weeks needed]
- [ ] User communication plan: [Approach and key messages]
- [ ] Success metrics: [What indicates successful migration?]
- Owner assigned: [Name/team]

**For BLOCK**:
- [ ] Risk justification documented: [Specific threat]
- [ ] Sunset date set: [30-90 days from notification]
- [ ] Replacement approved tool identified: [Tool name or category]
- [ ] User communication plan: [Risk explanation, deadline, support]
- [ ] Technical controls post-sunset: [Network block, SSO removal, etc.]
- Owner assigned: [Name/team]

**Output**: Remediation plan with owners, timelines, and success metrics.

### Step 8: Inventory Report Generation

Create comprehensive shadow IT inventory document:

```
SHADOW IT DISCOVERY REPORT

Organization: [Company/Department]
Discovery Date: [Date]
Scope: [Organization-wide or department]
Data Sources Used: [SSO logs, Finance tool, Network analysis, Device inventory]
High-Risk Tools Requiring Action: [Count]
Medium-Risk Tools Requiring Mitigation: [Count]
Low-Risk Tools Approved as-is: [Count]

EXECUTIVE SUMMARY

Total Tools Discovered: [N]
Total Users Affected: [N]
Estimated Annual Shadow IT Spend: $[X]
Critical Risk Items: [N] (require immediate action)
High Risk Items: [N] (require mitigation)

Top 10 Shadow IT Tools by Risk Score:

| Rank | Tool | Risk Score | Risk Level | Classification | Action |
|------|------|-----------|----------|----------------|--------|
| 1 | ChatGPT | 32 | HIGH | DEFER | Engage vendor; await SOC2 |
| 2 | Personal Dropbox | 28 | HIGH | BLOCK | Migrate to Box; 30-day sunset |
| 3 | Notion | 14 | MEDIUM | APPROVE + CONDITIONS | Execute DPA; no customer data |
[... continue for top 10]

FULL TOOL INVENTORY

[Detailed table with all tools, scores, classification, and rationale]

REMEDIATION PLAN

Immediate Actions (Week 1):
- Communicate decisions to affected teams
- Set expectations for remediation timeline
- Assign ownership for each tool's remediation

Short-term (Weeks 2-8):
- Execute legal agreements (DPA) for approved tools
- Plan migrations for replacement tools
- Prepare technical configuration (SSO, MFA)

Medium-term (Weeks 9-12):
- Execute migrations
- Sunset prohibited tools
- Monitor user adoption of replacements

Long-term (Ongoing):
- Quarterly reviews of approved tools
- Annual amnesty program to refresh inventory
- Continuous monitoring of new tools

SUCCESS METRICS

By end of remediation (12 weeks):
- 100% of BLOCK tools deactivated
- 100% of REPLACE tools migrated
- 100% of APPROVE + CONDITIONS tools have legal/security mitigations in place
- 80%+ of approved tools adopted via self-service request portal
- Shadow IT spend reduced from $[X] to $[Y]

RECOMMENDATIONS FOR FUTURE PREVENTION

1. Implement approved software catalog (discoverable, by role)
2. Launch self-service software request portal (5-10 day approval)
3. Establish annual amnesty program (October)
4. Conduct quarterly shadow IT monitoring (review new tools)
5. Train managers on approved tools by [date]
6. Update governance policy to codify approval process
```

### Step 9: Stakeholder Communication

Prepare stakeholder-specific communications:

**For CFO/Finance**:
- Shadow IT spend: Total and department breakdown
- Cost savings opportunities: Tools to consolidate or eliminate
- Budget impact of approvals: New licensing costs vs. current state

**For IT/Security Leadership**:
- High-risk tools requiring immediate attention
- Legal and compliance obligations (DPA, SOC2)
- Recommended policy updates and approval workflow

**For Department Managers**:
- Tools used in their department
- Classification and action required
- Timeline and support for transitions

**For Affected Users**:
- Status of tools you use (approved, under review, being phased out)
- What this means for your workflow
- Timeline and support for transitions
- How to request new tools in the future

### Step 10: Delivery

Provide user with:

1. **Shadow IT Inventory Report** (PDF or markdown)
   - Executive summary
   - Full tool inventory with risk scores
   - Classification and remediation plan
   - Success metrics and timeline

2. **Stakeholder Communication Pack** (email templates)
   - CFO summary
   - IT security brief
   - Department manager notices
   - User impact notifications

3. **Implementation Checklist** (spreadsheet)
   - 90-day execution plan
   - Owner assignments
   - Milestone dates
   - Success criteria

4. **Policy Recommendation** (draft)
   - Updated approved software catalog structure
   - Self-service request process workflow
   - Governance policy language (if requested)

## Output Format

Deliver results in the following structure:

```
SHADOW IT AUDIT REPORT
[Date]

1. DISCOVERY SUMMARY
   - Data sources analyzed
   - Tools discovered
   - User impact

2. RISK ASSESSMENT RESULTS
   - Risk score distribution
   - Tools by risk level
   - Critical/high-risk tools highlighted

3. CLASSIFICATION OUTCOMES
   - APPROVE: [Count] tools
   - APPROVE + CONDITIONS: [Count] tools
   - REPLACE: [Count] tools
   - BLOCK: [Count] tools
   - DEFER: [Count] tools

4. REMEDIATION PLAN
   - 90-day execution timeline
   - Owner assignments
   - Success metrics

5. POLICY RECOMMENDATIONS
   - Approved software catalog
   - Self-service request process
   - Governance policy updates

6. APPENDICES
   - Full tool inventory (sortable table)
   - Risk assessment scoring details
   - Stakeholder communication templates
   - Implementation checklist
```

## Success Criteria

Shadow audit is complete when:

- [ ] All discovered tools assessed for risk
- [ ] Classification assigned to each tool
- [ ] Remediation plan created for high-risk items
- [ ] Stakeholder communications drafted
- [ ] Implementation timeline established
- [ ] Ownership assigned for each remediation item
- [ ] Report delivered to IT leadership
