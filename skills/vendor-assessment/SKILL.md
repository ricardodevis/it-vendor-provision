---
name: vendor-assessment
description: >
  Structured evaluation of IT software vendors. Activate when the user asks to
  "evaluate a vendor", "analyze an IT vendor", "compare software vendors",
  "vendor due diligence", "is this vendor reliable?", "vendor assessment",
  "vendor scorecard", "vendor approval", "vendor shortlist",
  "vendor risk assessment", "third-party security evaluation", "SaaS platform evaluation",
  "software vendor risk", "vendor qualification", "vendor shortlisting",
  or any variant of vendor evaluation, comparison, or selection.
  Also activate when mentioned "what guarantees does this vendor offer?",
  "vendor certifications", "evaluate the security of this software",
  "can we trust this vendor?", or "vendor risk scoring".
version: 0.1.0
---

# IT Vendor Evaluation

A guide for conducting structured evaluations of software vendors, from initial scoring through final approval or rejection recommendation.

## Philosophy

Evaluating an IT vendor isn't an exercise in checking boxes. It's an operational, regulatory, and strategic risk analysis that determines whether your organization is going to depend on a third party for a critical function. Treating vendor approval as a paperwork formality is the surest way to end up trapped in a contract with a vendor that can't—or won't—deliver.

## Evaluation framework: 6 dimensions

Score the vendor across these 6 dimensions, rating each from 1 to 5:

### 1. Technical Capability
- Software architecture (monolithic vs. microservices, cloud-native, on-prem, hybrid)
- Technology stack and visible technical debt
- Available APIs, technical documentation, SDKs
- Product roadmap and release cadence
- Integrability with the client's ecosystem

### 2. Security and Certifications
See `references/certifications-guide.md` for details on each certification.
- Current certifications (SOC 2 Type II, ISO 27001, ISO 42001, ISO 27701)
- Recent penetration testing and vulnerability management
- Encryption policy (at rest, in transit)
- Access management and authentication (SSO, MFA, RBAC)
- Business continuity and disaster recovery plan

### 3. Regulatory Compliance
- GDPR: DPA existence, data location, international transfers
- NIS2: applicability and evidence of compliance (art. 21)
- AI Regulation (2024/1689): if software incorporates AI, risk classification
- Sector-specific regulation (financial, healthcare, legal)

### 4. Economic and Contractual Viability
- Pricing model (per user, consumption-based, flat fee, enterprise)
- Hidden costs: implementation, migration, training, premium support
- Lock-in clauses and data portability
- Exit clauses: notice period, migration assistance, data delivery
- History of unilateral price changes

### 5. Support and Operations
- Support levels (L1/L2/L3), response times, coverage hours
- Availability SLA and penalties
- Incident management and proactive communication
- User documentation and training resources
- Community and partner ecosystem

### 6. Vendor Stability
- Financial situation (revenue, profitability, funding, runway)
- Market share and competitive positioning
- Customer concentration (risk if loses major customer)
- Acquisition and ownership change history
- Geopolitical risk (jurisdiction, sanctions, local regulation)

## Evaluation process

### Phase 1: Quick screening
Verify minimum elimination criteria before investing time in detailed evaluation:
- Does it have a GDPR art. 28 compliant DPA?
- Does it have at least SOC 2 Type II or ISO 27001?
- Does it offer SSO/MFA?
- Does it have an exit clause with data delivery?
- Is it financially stable (not runway < 12 months without profitability)?

If it fails 2 or more elimination criteria, recommend rejection or prior negotiation.

### Phase 2: Detailed evaluation
Score the 6 dimensions. Gather information from:
- ~~document repository (contracts, proposals, received documentation)
- Vendor website, public documentation, trust center
- Certification databases
- Analyst reports (if available)

### Phase 3: Scorecard and recommendation
Generate scorecard with:
- Score per dimension (1-5)
- Weighted global score
- Identified critical risks
- Conditions for approval (if applicable)
- Comparison if multiple vendors are being evaluated

## Default weighting (customizable)

| Dimension | Weight |
|-----------|--------|
| Technical Capability | 20% |
| Security and Certifications | 25% |
| Regulatory Compliance | 20% |
| Economic Viability | 15% |
| Support and Operations | 10% |
| Vendor Stability | 10% |

Adjust weighting based on sector and software criticality. For software processing sensitive personal data, increase security and compliance. For mission-critical software, increase support and stability.

## Output

Generate a structured Markdown report with:
1. Executive summary (3-5 lines)
2. Visual scorecard (table with dimensions, scores, status indicators)
3. Detailed analysis per dimension
4. Critical risks and proposed mitigations
5. Recommendation: APPROVE / APPROVE WITH CONDITIONS / REJECT
6. Next steps

## Related Skills

- **risk-compliance**: After assessment, run regulatory compliance analysis for shortlisted vendors
- **it-contract-review**: Assessment feeds into contract negotiation — use scorecard findings as leverage
- **vendor-onboarding**: Once vendor is approved, initiate structured onboarding
- **shadow-it-governance**: Shadow IT discoveries may trigger vendor assessment for unsanctioned tools
