---
name: vendor-exit
description: >
  Generates and manages the exit plan for an IT vendor: migration
  timeline, data export, communications, portability checklist,
  contingency plan and contractual closure.
user_instructions: >
  Indicate the vendor you want to exit, the reason (renewal
  rejected, non-compliance, rationalization, strategy change),
  and if an alternative vendor has already been identified.
---

# Command: Vendor Exit Execution

## Instructions

When executing this command:

1. **Load required skills:**
   - `${CLAUDE_PLUGIN_ROOT}/skills/contract-lifecycle/SKILL.md` (contract management, termination)
   - `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/references/exit-clauses.md` (exit clauses, portability)
   - `${CLAUDE_PLUGIN_ROOT}/skills/risk-compliance/SKILL.md` (regulatory obligations in exit)
   - `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/references/dpa-checklist.md` (DPA obligations in termination)

2. **Analyze the exit context:**
   - Review current contract → document repository
   - Identify: expiration date, notice required, penalties
   - Verify if penalty-free exit clauses apply
   - Evaluate if exit is by natural expiration or early termination
   - Identify dependencies: what systems/processes use this software?
   - Identify data: what data is in the vendor's system?

3. **Generate exit plan** with the following phases:

   **Phase 0: Decision and Preparation (T-120 to T-90 days)**
   - [ ] Confirm exit decision with management
   - [ ] Review contract: timelines, notice, penalties, portability
   - [ ] Evaluate alternative vendor (if not done, run /vendor-assess)
   - [ ] Estimate exit cost: penalty + migration + parallelism + internal
   - [ ] Designate exit project owner
   - [ ] Communicate internally (IT team, affected departments)

   **Phase 1: Notification and Negotiation (T-90 to T-60 days)**
   - [ ] Send formal non-renewal / early termination notice
   - [ ] Format: written, to contract contact, with read receipt
   - [ ] Content: contract reference, invoked clause, effective termination date
   - [ ] Negotiate transition period (minimum 90 days if not in contract)
   - [ ] Negotiate migration assistance (technical support, data export)
   - [ ] Formally request vendor's data export plan

   **Phase 2: Data Export and Migration (T-60 to T-30 days)**
   - [ ] Request complete data export in agreed format
   - [ ] Verify export includes: data, metadata, configurations, history, audit trail
   - [ ] Validate exported data integrity (count, checksums, sampling)
   - [ ] Import data into alternative system
   - [ ] Verify imported data is correct and complete
   - [ ] Migrate integrations: APIs, webhooks, SSO, connectors with other systems
   - [ ] Migrate configurations: workflows, automations, permissions, roles

   **Phase 3: Parallelism and Testing (T-30 to T-15 days)**
   - [ ] Run both systems in parallel
   - [ ] Verify new system covers all required functionality
   - [ ] Testing with key users from each department
   - [ ] Document any lost or degraded functionality
   - [ ] Plan B: if migration fails, can we extend the contract?

   **Phase 4: Cutover and Transition (T-15 to T-0)**
   - [ ] Communicate to all users the date and time of cutover
   - [ ] Provide new system usage guide (training, documentation)
   - [ ] Execute the cutover (disable access to old system)
   - [ ] Intensively monitor new system first 48 hours
   - [ ] Enhanced support for users during first week

   **Phase 5: Post-Exit Closure (T+0 to T+90 days)**
   - [ ] Request data deletion certification (GDPR art. 28.3.g)
   - [ ] Verify deletion method (secure erasure, cryptographic destruction)
   - [ ] Backup deletion timeline: ≤ 90 days post-cutover
   - [ ] Revoke vendor access to customer's internal systems
   - [ ] Close accounts, credentials, API keys associated with vendor
   - [ ] Verify no recurring payments remain active (card, direct debit)
   - [ ] Archive all contract and exit documentation
   - [ ] Update vendor register
   - [ ] Post-mortem: document exit lessons learned

4. **Generate communications:**

   **Formal notification to vendor** (draft):
   - Contract reference (number, date)
   - Invoked termination clause
   - Effective termination date
   - Transition plan request
   - Data export request
   - Exit project owner contact

   **Internal communication** (draft):
   - Which vendor/system is changing and why
   - Timeline of change
   - What users need to do (and when)
   - Who to contact for problems
   - Training dates (if applicable)

5. **Evaluate exit risks:**
   - What if data export fails or is incomplete?
   - What if new vendor isn't ready in time?
   - What if critical functionality is lost?
   - What if vendor doesn't cooperate in transition?
   - Contingency plan for each risk

6. **Generate report** in Markdown with:
   - Exit card (vendor, reason, timeline, estimated cost)
   - Complete exit plan with 5 phases (executable checklist)
   - Visual timeline (table with weeks and activities)
   - Communication drafts (vendor + internal)
   - Exit risk analysis with contingencies
   - Post-exit closure checklist (GDPR compliance)
   - Cost estimation: direct (penalty, migration) + indirect (productivity, parallelism)

7. **Save the report** as `vendor-exit-plan-[vendor]-YYYY-MM-DD.md`
