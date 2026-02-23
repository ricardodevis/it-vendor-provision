# IT Vendor Incident Management Protocol

## Core principle

When a vendor has an incident, you have an incident. The difference is the vendor manages theirs and you manage the consequences of yours. This protocol covers the second part.

## Incident classification

### By severity

| Level | Criterion | Example | Internal response time |
|-------|----------|---------|---------------------------|
| **P1 — Critical** | Total service loss or confirmed data breach | Data breach with personal data, total downtime > 4h | Immediate (< 1h) |
| **P2 — High** | Severe service degradation or breach risk | Performance < 50%, unpatched exploitable vulnerability | < 4h |
| **P3 — Medium** | Minor degradation or SLA breach | Monthly uptime not met, slow support | < 24h |
| **P4 — Low** | Minor issue with no operational impact | Cosmetic bug, incorrect documentation | Next periodic meeting |

### By type

| Type | Subtype | Regulation involved |
|------|---------|---------------------|
| **Security** | Data breach, ransomware, unauthorized access | GDPR (art. 33/34), NIS2 (art. 23) |
| **Availability** | Downtime, degradation, data loss | Contract (SLA) |
| **Compliance** | Loss of certification, regulatory breach | GDPR, NIS2, AI Regulation |
| **Contractual** | Unilateral terms change, price increase | Contract |
| **Corporate** | M&A, insolvency, leadership change | Contract (change of control) |

## Response protocol by type

### Security incident / Data breach

**Hour 0-1: Containment and initial assessment**
- [ ] Confirm incident with vendor (do not assume, verify)
- [ ] Request from vendor: incident nature, data affected, detection date, containment measures
- [ ] Assess whether customer personal data is affected
- [ ] Notify internal DPO
- [ ] Notify CISO / security lead
- [ ] Activate internal incident response team
- [ ] Log everything in incident log (timestamp each action)

**Hour 1-24: Investigation and notifications**
- [ ] Obtain from vendor: preliminary incident report
- [ ] Determine: is there obligation to notify AEPD? (GDPR art. 33: "probability of risk to rights and freedoms")
- [ ] If yes: prepare notification to regulatory authority (deadline: 72h from when YOU know)
- [ ] Determine: is there obligation to notify individuals? (GDPR art. 34: "high risk")
- [ ] If NIS2 entity: determine if "significant incident" (art. 23) → early alert ≤ 24h to CSIRT/competent authority
- [ ] Verify vendor has contained the incident
- [ ] Assess whether to temporarily disconnect integration with vendor

**Day 1-7: Active management**
- [ ] Obtain vendor's detailed report: root cause, scope, corrective measures
- [ ] If NIS2: complete notification ≤ 72h to CSIRT
- [ ] Assess business impact: what processes are affected?
- [ ] Communicate internally: executive board, affected departments
- [ ] Document decisions made and their justification
- [ ] Evaluate vendor contractual liability

**Day 7-30: Remediation and closure**
- [ ] Verify vendor's corrective measures are effective
- [ ] If NIS2: final report ≤ 1 month to CSIRT
- [ ] Request from vendor: post-mortem report with root cause analysis
- [ ] Assess whether incident justifies: contractual penalty, renegotiation, or exit
- [ ] Update vendor risk register
- [ ] Document lessons learned
- [ ] Update response plan if necessary
- [ ] Archive all incident documentation

### SLA non-compliance

**Detection:**
- Automated monitoring (~~monitoring tool) detects degradation
- Or: vendor report, or complaint from internal users

**Response:**
1. Document non-compliance with evidence (timestamps, metrics)
2. Verify against SLA exclusions (maintenance windows, force majeure)
3. Calculate credit/penalty per contract
4. Formally notify vendor (in writing, to account manager AND contract contact)
5. Request root cause analysis and remediation plan
6. Record in vendor SLA history

**Escalation:**
- First breach: formal notice + credit
- Second breach in 6 months: escalation meeting with vendor management
- Third breach in 12 months: formal exit evaluation + renegotiation
- Breach triggering no-penalty exit clause: evaluate exit

### Unilateral terms change

**Detection:**
- Vendor notification (email, ToS update on website)
- Or: discovery during renewal, audit, or functionality change

**Response:**
1. Verify exactly which terms have changed (diff of contract/ToS)
2. Assess whether contract allows unilateral change (many SaaS reserve this in general ToS)
3. Assess impact: does it affect price, functionality, security, data, SLA?
4. If material change not contractually permitted: formal breach notice
5. If change triggers no-penalty exit clause: evaluate exit
6. If change is acceptable with conditions: negotiate amendment
7. Document everything and update contract registry

### Acquisition / Control change

**Detection:**
- Vendor communication or market news

**Response:**
1. Verify whether contract has change of control clause
2. Assess new owner: conflict of interest? viability? strategy?
3. Verify acquiring entity assumes contractual obligations
4. If change of control exit clause exists: evaluate exercising it
5. If DPA needs updating (new controller/processor): request
6. Communicate situation and plan internally
7. Monitor next 6-12 months: team changes, roadmap, support

### Vendor insolvency

**Immediate response:**
1. Verify legal situation: voluntary bankruptcy? liquidation? restructuring?
2. Activate contingency plan (should exist for critical vendors)
3. Export data immediately (do not wait for systems to shut down)
4. Verify whether source code escrow exists and request release if applicable
5. Identify alternative vendor and activate emergency migration
6. Communicate to executive board with action plan
7. Document everything for potential claim in bankruptcy

## Incident registry

Maintain centralized registry (in ~~document repository or ~~ticketing system) with:

| Field | Description |
|-------|------------|
| Incident ID | Unique identifier |
| Detection date | When it was detected |
| Vendor notification date | When vendor informed us |
| Vendor | Vendor name |
| Type | Security / Availability / Compliance / Contractual / Corporate |
| Severity | P1 / P2 / P3 / P4 |
| Description | What happened |
| Data affected | If applicable: data types, volume, individuals |
| Notifications sent | AEPD, CSIRT, individuals, executive board |
| Actions taken | Vendor actions and internal actions |
| Root cause | Identified root cause |
| Status | Open / Under investigation / Remediated / Closed |
| Contractual impact | Credits claimed, penalties, amendment, exit |
| Lessons learned | What to change for next time |

## Internal communication during incidents

### Templates by audience

**For Executive board (CEO/CTO/CISO):**
- What happened (1 paragraph)
- Business impact (data, operations, regulatory)
- What we are doing (ongoing actions)
- Decisions needed (if any)
- Next update (when)

**For affected teams:**
- What service is affected
- What they can/cannot do meanwhile
- Temporary alternative (if exists)
- When we expect resolution
- Who to contact if problems

**For legal/compliance registry:**
- Chronological facts with timestamps
- Evidence collected
- Notifications sent with receipts
- Analysis of regulatory obligations
- Actions taken and their justification
