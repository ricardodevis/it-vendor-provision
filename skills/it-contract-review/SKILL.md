---
name: it-contract-review
description: >
  IT software provisioning contract review against configurable playbook.
  Activate when the user asks "review a software contract", "analyze an SLA",
  "review a vendor IT conditions", "check exit clauses",
  "review this vendor's DPA", "what does the contract say about penalties?",
  "review software license", "analyze terms of service", "evaluate SaaS contract",
  "check lock-in in this contract", "can I exit this contract?",
  "what risks does this contract have?", "SaaS terms of service", "vendor agreement review",
  "software contract negotiation", "contract risk assessment",
  or any review of agreements with software providers,
  cloud services, SaaS, PaaS, IaaS, licenses, maintenance or IT support.
version: 0.1.0
---

# IT Provisioning Contract Review

Guide for reviewing software and IT service contracts, identifying deviations from the playbook, contractual risks, and clauses requiring negotiation.

## Operating principle

A contract with an IT provider is not a legal formality: it is the only document that protects you when things go wrong. And with software providers, things always eventually go wrong in some way — a service outage, a price hike, an acquisition, a unilateral change in terms, a security incident. The quality of contract review determines whether at that moment you have a remedy or you have a problem.

## Review structure: 8 blocks

Review each contract against these 8 blocks. For each block, classify clauses as:
- **OK**: Compliant with the playbook
- **NEGOTIATE**: Manageable deviation, requires adjustment
- **RISK**: Significant deviation, high risk if not corrected
- **MISSING**: Clause that should exist and does not (often worse than a bad one)

### Block 1: Object and scope
- Precise definition of contracted software/service
- Included functionalities vs. optional modules
- Authorized users: definition, limits, consequences of excess
- Included environments (production, staging, development, DR)
- Explicit exclusions

**Red flag**: Vague definitions like "the provider will provide access to the platform". Without specifying which platform, which version, which functionalities.

### Block 2: SLA and availability
Consult `references/sla-playbook.md` for standard metrics and thresholds.
- Committed uptime (99.5% vs 99.9% vs 99.95% — the difference is enormous)
- Definition of "availability" (does it include degradation? scheduled maintenance?)
- Maintenance windows and prior notification
- Penalties for non-compliance (service credits, financial penalties)
- Measurement and reporting procedure
- SLA exclusions (force majeure, maintenance, "customer acts")

**Red flag**: SLA without penalties, or with credit-type penalties that never exceed monthly cost. An SLA without teeth is not an SLA — it is a statement of intent.

### Block 3: Data protection and DPA
Consult `references/dpa-checklist.md` for article-by-article verification.
- Existence of DPA compliant with Art. 28 GDPR
- Roles: controller vs. processor
- Data location and international transfers
- Sub-processors: list, notification procedure, right of objection
- Technical and organizational measures (Art. 32)
- Security breach management: notification timelines
- Audit rights
- Deletion/return of data at termination

**Red flag**: DPA incorporated "by reference" to a web link that the provider can unilaterally modify. Request a DPA signed as an annex to the contract.

### Block 4: Intellectual property and data
- Ownership of customer data: must be unequivocally the customer's
- Ownership of configurations and customizations
- Derived data / analytics: who owns it?
- Use of data to train AI models (if applicable)
- Software license: type, scope, restrictions
- Rights over integrations developed by the customer

**Red flag**: Clauses that grant the provider a license to use customer data "to improve the service" without defining what "improve" includes. In the age of AI, this clause can mean model training.

### Block 5: Pricing and economic conditions
- Clear and predictable pricing model
- Price review mechanism (frequency, cap, index)
- Additional costs: implementation, migration, training, premium support, storage
- Billing and payment conditions
- Consequences of non-payment
- Volume or commitment discounts

**Red flag**: Clause stating "the provider may modify prices with 30 days' notice". Without a cap, without maximum frequency, without right of termination without penalty.

### Block 6: Duration, renewal and exit
Consult `references/exit-clauses.md` for exit strategy.
- Initial term and renewals (automatic vs. express)
- Notice period for non-renewal
- Causes of early termination (both parties)
- Exit clause: migration assistance, data delivery format, timeline
- Penalties for early termination
- Transition period: duration, conditions, support

**Red flag**: Annual auto-renewal with 90-day notice and 100% penalty on remaining fees if you terminate early. That is pure lock-in.

### Block 7: Liability and warranties
- Liability limitation (cap): how much? 12 months of fees?
- Exclusions from the limitation (IP, confidentiality, personal data)
- Service warranties (beyond SLA)
- Indemnification for third-party IP infringement
- Provider insurance
- Force majeure: definition and consequences

**Red flag**: Liability cap on provider side of "fees paid in the last 3 months" for a 5-year contract. Brutal asymmetry.

### Block 8: Governance and dispute resolution
- Oversight committee: composition, frequency, escalation
- Change management procedure
- Applicable law and jurisdiction
- Dispute resolution mechanism (mediation, arbitration, litigation)
- Contract language and precedence

## Review process

1. **Read the entire contract** — do not skip to the "interesting" clauses
2. **Classify each block** (OK / NEGOTIATE / RISK / MISSING)
3. **Identify the 3-5 most critical risks** with estimated impact
4. **Draft redline proposal** for clauses to negotiate
5. **Generate report** with executive summary and findings table

## Output

Generate structured report with:
1. Executive summary (5 lines maximum)
2. Classification table by block (visual traffic light)
3. Detailed analysis of each block with specific clause cited
4. Top 5 risks with impact and probability
5. Redline proposal (suggested wording for clauses to negotiate)
6. Recommendation: SIGN / SIGN WITH CHANGES / DO NOT SIGN

## Related Skills

- **vendor-assessment**: Review scorecard before contract review — assessment findings inform negotiation priorities
- **risk-compliance**: DPA and compliance analysis complements contract review
- **license-management**: License terms in the contract should align with actual usage patterns
- **contract-lifecycle**: After contract is signed, transition to lifecycle management
