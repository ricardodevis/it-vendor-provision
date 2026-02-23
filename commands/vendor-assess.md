---
name: vendor-assess
description: >
  Evaluates an IT software vendor with scoring across 6 dimensions:
  technical capability, security, compliance, financial viability,
  support, and stability. Generates scorecard with recommendation.
user_instructions: >
  Provide the vendor name and software to evaluate.
  Optionally provide vendor documentation
  (commercial proposal, contract, trust center, etc.)
---

# Command: Evaluate IT Vendor

## Instructions

When executing this command:

1. **Load the skill** `vendor-assessment` by reading `${CLAUDE_PLUGIN_ROOT}/skills/vendor-assessment/SKILL.md`

2. **Gather vendor information:**
   - If the user provides documentation, analyze it
   - Search web: trust center, security page, pricing, technical documentation
   - Search certifications: SOC 2, ISO 27001, ISO 42001
   - If connected document repository, search for vendor documentation

3. **Execute the evaluation framework:**
   - Phase 1: Quick screening (disqualifying criteria)
   - If passes screening → Phase 2: Detailed evaluation across 6 dimensions
   - Phase 3: Generate scorecard with scores and recommendation

4. **For certifications**, consult `${CLAUDE_PLUGIN_ROOT}/skills/vendor-assessment/references/certifications-guide.md`

5. **For detailed criteria**, consult `${CLAUDE_PLUGIN_ROOT}/skills/vendor-assessment/references/evaluation-criteria.md`

6. **Generate report** in Markdown with:
   - Executive summary
   - Scorecard (table with dimensions, score 1-5, traffic light)
   - Analysis by dimension
   - Critical risks
   - Recommendation: APPROVE / APPROVE WITH CONDITIONS / REJECT
   - Next steps

7. **Save the report** in the user's folder with descriptive name
