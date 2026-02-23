---
name: vendor-review
description: >
  Periodic re-evaluation of an IT vendor incorporating SLA history,
  incidents, internal satisfaction, compliance evolution
  and financial performance. Generates comparative report vs. previous
  evaluation with continuity recommendation.
user_instructions: >
  Indicate the vendor name to re-evaluate. Provide or indicate
  where to find: SLA history, incidents from the period, user
  feedback, and the previous evaluation (if it exists).
---

# Command: Periodic Vendor Re-Evaluation

## Instructions

When executing this command:

1. **Load required skills:**
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-assessment/SKILL.md` (base evaluation framework)
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-reporting/references/kpi-framework.md` (KPIs and thresholds)
   - `${CLAUDE_PLUGIN_ROOT}/skills/contract-lifecycle/SKILL.md` (continuous management context)

2. **Gather vendor history:**
   - Previous evaluation (previous scorecard) → document repository
   - SLA history from the period → monitoring tool
   - Recorded incidents → ticketing system, incident register
   - Support tickets and response times → ticketing system
   - Accumulated spending and variation → finance tool
   - License utilization → identity provider
   - Certification status → vendor website, security scanner
   - Regulatory changes since last evaluation → risk-compliance skill
   - Internal satisfaction (if survey exists) or request assessment from user

3. **Execute re-evaluation across 6 dimensions** (see `${CLAUDE_PLUGIN_ROOT}/skills/vendor-assessment/references/evaluation-criteria.md`):
   - For each dimension: score 1-5 with period evidence
   - Compare with previous score: ↑ improvement, → stable, ↓ decline
   - Identify trends (not just snapshot)

4. **Additional analysis (not in initial evaluation):**

   **a) SLA Compliance:**
   - Actual uptime vs. contracted (monthly and cumulative)
   - P1/P2 incidents: quantity, MTTR, recurring root cause
   - Earned vs. claimed credits/penalties

   **b) Risk Evolution:**
   - Risks identified in previous evaluation: mitigated, stable, worsened?
   - New risks detected in the period
   - Regulatory changes affecting the relationship
   - Certification status (current, about to expire, expired)

   **c) Financial Value:**
   - Total period cost vs. budget
   - Cost per active user: evolution
   - License utilization rate: evolution
   - Is the vendor still competitive? (quick benchmark)

   **d) Relationship and Support:**
   - Support quality: response times, resolution, escalations
   - Vendor proactivity: communicates changes, roadmap, incidents?
   - Account management: is there a competent and accessible contact?

5. **Generate re-evaluation report** in Markdown with:
   - Executive summary (1 paragraph: general status, trend, recommendation)
   - Comparative scorecard (table: dimension, previous score, current score, trend)
   - Analysis by dimension with evidence
   - SLA compliance from period (monthly table)
   - Period incident register
   - Risk evolution (closed, new, modified)
   - Financial analysis (spending, utilization, benchmark)
   - Recommendation: CONTINUE / CONTINUE WITH IMPROVEMENT PLAN / INITIATE EXIT
   - If "improvement plan": concrete actions with timelines and owners
   - If "initiate exit": justification and reference to /vendor-exit command
   - Next re-evaluation scheduled

6. **Save the report** as `vendor-review-[vendor]-YYYY-QX.md`
