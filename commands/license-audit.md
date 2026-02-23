---
name: license-audit
description: >
  Audits the organization's software licenses: inventory,
  usage analysis, optimization, compliance and savings estimation.
user_instructions: >
  Provide available information about licenses: software
  inventory, invoices, usage data, contracts. The more
  information provided, the more accurate the audit will be.
---

# Command: License Audit

## Instructions

When executing this command:

1. **Load the skill** `license-management` by reading `${CLAUDE_PLUGIN_ROOT}/skills/license-management/SKILL.md`

2. **Gather license data:**
   - Analyze documentation provided by the user
   - If connected asset management tool, extract inventory
   - If connected finance tool, extract software invoices
   - If connected identity provider, extract apps and users

3. **For each identified software, determine:**
   - Licensing model (consult `${CLAUDE_PLUGIN_ROOT}/skills/license-management/references/license-types.md`)
   - Contracted vs. assigned vs. in-use licenses
   - Unit cost and total cost
   - Renewal date
   - Classification: authorized / tolerated / shadow IT

4. **Execute analysis:**
   - Calculate usage metrics (adoption, utilization, orphaned, dormant)
   - Identify quick wins for savings
   - Evaluate compliance risks (consult `${CLAUDE_PLUGIN_ROOT}/skills/license-management/references/compliance-audit.md`)
   - Detect functional duplication

5. **Generate report** in Markdown with:
   - Executive summary (total spending, estimated savings, risks)
   - Complete inventory (table)
   - Usage analysis with traffic lights
   - Compliance risks
   - Prioritized optimization plan
   - Savings estimation (conservative / realistic / optimistic)
   - Action calendar

6. **Save the report** in the user's folder
