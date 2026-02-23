---
name: contract-review
description: >
  Reviews an IT software contract block by block: scope, SLA,
  data protection, IP, pricing, duration/exit, liability
  and governance. Identifies red flags and generates redline proposal.
user_instructions: >
  Provide the contract to review (PDF, Word or text).
  Optionally indicate the customer's sector and the criticality
  of the software to adjust the review stringency.
---

# Command: IT Contract Review

## Instructions

When executing this command:

1. **Load the skill** `it-contract-review` by reading `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/SKILL.md`

2. **Analyze the contract** provided by the user:
   - Identify the 8 review blocks
   - For each block: classify as OK / NEGOTIATE / RISK / ABSENT
   - Identify red flags

3. **For the SLA block**, consult the detailed playbook in `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/references/sla-playbook.md`

4. **For the data protection block (DPA)**, use the checklist in `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/references/dpa-checklist.md`

5. **For the exit/portability block**, consult `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/references/exit-clauses.md`

6. **Generate report** in Markdown with:
   - Executive summary (3-5 lines)
   - Traffic light table (8 blocks with classification and observation)
   - Detailed analysis of each block
   - Top 5 risks with redline proposal
   - Missing clauses that should be included
   - Recommendation: SIGN / SIGN WITH CHANGES / DO NOT SIGN
   - Proposed alternative text for each problematic clause

7. **Save the report** in the user's folder
