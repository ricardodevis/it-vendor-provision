---
name: vendor-incident
description: >
  Manages an IT vendor incident (security breach, SLA failure,
  contractual breach, change of control) with response protocol,
  notifications, escalation and documentation.
user_instructions: >
  Describe the incident: which vendor, what happened, when
  it was detected, and what data or services are affected. Claude
  will activate the corresponding response protocol.
---

# Command: Vendor Incident Management

## Instructions

When executing this command:

1. **Load required skills:**
   - `${CLAUDE_PLUGIN_ROOT}/skills/contract-lifecycle/SKILL.md` (continuous management context)
   - `${CLAUDE_PLUGIN_ROOT}/skills/contract-lifecycle/references/vendor-incident-protocol.md` (detailed protocol)
   - `${CLAUDE_PLUGIN_ROOT}/skills/risk-compliance/SKILL.md` (to evaluate regulatory implications)

2. **Classify the incident:**
   - Type: Security / Availability / Compliance / Contractual / Corporate
   - Severity: P1 (Critical) / P2 (High) / P3 (Medium) / P4 (Low)
   - Regulation involved: GDPR / NIS2 / AI Act / Contractual

3. **Activate the corresponding protocol** by type and severity:

   **If security breach (P1):**
   - Generate immediate response checklist (hour 0-1)
   - Evaluate notification obligations (GDPR art. 33/34, NIS2 art. 23)
   - Generate draft internal communication (for management and teams)
   - Generate notification template to authority (if applicable)
   - Calculate regulatory and contractual timelines

   **If SLA breach:**
   - Calculate credit/penalty per contract
   - Generate formal notification to vendor
   - Evaluate if exit clause without penalty is triggered
   - Update vendor SLA history

   **If unilateral change of terms or change of control:**
   - Analyze impact of change (contractual review)
   - Evaluate options: accept, negotiate, exit
   - Generate action plan with timelines

4. **Generate incident report** in Markdown with:
   - Incident card (type, severity, vendor, dates)
   - Chronology of facts
   - Assessed impact (operational, financial, regulatory)
   - Activated regulatory obligations and timelines
   - Taken and pending actions (checklist)
   - Communications: who to notify, drafts
   - Contractual impact evaluation (credits, penalties, exit)
   - Next steps with owners and timelines

5. **Update the risk register** with the new incident.

6. **Save the report** in the user's folder as `vendor-incident-[vendor]-YYYY-MM-DD.md`
