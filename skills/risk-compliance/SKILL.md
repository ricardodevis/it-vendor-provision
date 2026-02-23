---
name: risk-compliance
description: >
  Regulatory risk analysis of IT vendors with respect to GDPR, NIS2, and EU AI Act.
  Activate when the user requests "vendor risk analysis", "GDPR compliance of a vendor",
  "NIS2 assessment of vendor", "software regulatory risk", "does this software comply with GDPR?",
  "are we bound by NIS2?", "vendor AI risk classification", "international transfer analysis",
  "vendor impact assessment", "regulatory risk assessment", "compliance gap analysis",
  "vendor compliance check", "third-party risk assessment", "regulatory vendor evaluation",
  "data protection assessment", or any variant of IT vendor regulatory assessment.
  Also activate for "EU AI Act", "AI Act", "high-risk AI system", "art. 28 GDPR", "data processor", or "NIS2 supply chain".
version: 0.1.0
---

# Regulatory Risk Analysis of IT Vendors

A guide for evaluating regulatory compliance of software vendors against the three key European regulations: GDPR, NIS2, and EU AI Act.

## Philosophy

Regulatory compliance of an IT vendor is not the vendor's problem: it is your problem. If your data processor breaches GDPR, the fine is yours (as data controller). If your infrastructure provider fails NIS2, the penalty is yours (as essential or important entity). If your high-risk AI software breaches the AI Act, responsibility lies with whoever deploys it. Delegating technology does not delegate responsibility.

## The Three Key Regulations

### 1. GDPR (General Data Protection Regulation)
- **Applicability**: Whenever the vendor processes personal data on behalf of the client
- **Key article**: Art. 28 (data processor)
- **Detailed reference**: `references/rgpd-vendor-checklist.md`

### 2. NIS2 (Directive on Cybersecurity of Network and Information Systems)
- **Applicability**: If the client is an essential or important entity under NIS2, its critical vendors fall in scope
- **Key article**: Art. 21 (cybersecurity risk management measures, including supply chain)
- **Detailed reference**: `references/nis2-vendor-checklist.md`

### 3. EU AI Act (2024/1689)
- **Applicability**: If the software incorporates AI components (generative, predictive, classificatory)
- **Key article**: Art. 26 (obligations of deployers of high-risk AI systems)
- **Detailed reference**: `references/ai-act-vendor-checklist.md`

## Regulatory Risk Analysis Process

### Step 1: Determine Applicability

**Screening questions:**

| Question | If "Yes" | Applicable Regulation |
|----------|---------|---------------------|
| Will the vendor process personal data? | Evaluate data controller/processor relationship | GDPR |
| Will the vendor process sensitive personal data (art. 9)? | Enhanced assessment required | GDPR (DPIA mandatory) |
| Will the vendor transfer data outside the EEA? | Verify transfer mechanism | GDPR (Chapter V) |
| Is the client an essential or important entity (NIS2)? | The vendor is part of the supply chain | NIS2 |
| Is the software critical IT infrastructure? | Enhanced security assessment required | NIS2 |
| Does the software incorporate AI? | Classify risk level | EU AI Act |
| Does the AI make or assist decisions about people? | Possible high risk | EU AI Act (Annex III) |

### Step 2: Gather Evidence

**For each applicable regulation, request from the vendor:**

**GDPR:**
- Data Processing Addendum (DPA) that can be signed
- Record of processing activities (art. 30)
- Updated list of sub-processors
- Security certifications (SOC 2, ISO 27001)
- Data location and international transfer mechanism
- Data Protection Officer contact

**NIS2:**
- Information security policy
- Incident management plan with notification timelines
- Business continuity and disaster recovery plan
- Recent penetration testing results (within past year)
- Vulnerability management (patch cadence, CVE policy)
- Supply chain management (their own sub-vendors)

**EU AI Act:**
- AI system risk classification
- Technical documentation of the system (if high-risk)
- Training data: source, representativeness, bias assessment
- Performance metrics and accuracy
- Human oversight mechanism
- Transparency: does the user know they are interacting with AI?
- ISO 42001 or equivalent AI governance framework

### Step 3: Assess Gaps

For each regulation, classify each requirement as:

| Status | Meaning | Action |
|--------|---------|--------|
| ✅ COMPLIANT | Sufficient evidence of compliance | Document and archive |
| ⚠️ PARTIAL | Incomplete or insufficient compliance | Negotiate improvement, define timeline |
| ❌ NON-COMPLIANT | Absence of compliance or evidence | Assess if deal-breaker |
| ❓ NO DATA | Vendor has not provided information | Request, escalate if no response |

### Step 4: Risk Scoring

**Risk matrix:**

| | Low Impact | Medium Impact | High Impact | Critical Impact |
|---|---|---|---|---|
| **High Probability** | Medium | High | Critical | Critical |
| **Medium Probability** | Low | Medium | High | Critical |
| **Low Probability** | Low | Low | Medium | High |

**Impact factors:**
- Volume of personal data affected
- Data sensitivity (special categories art. 9)
- Number of individuals affected
- Service criticality for operations
- Potential fine exposure

**Probability factors:**
- Vendor's incident history
- Maturity of security controls
- Jurisdiction (surveillance law of the country)
- Complexity of sub-vendor chain
- Staff turnover and technical expertise

### Step 5: Recommendation

| Overall Result | Recommendation |
|-----------------|---------------|
| All critical requirements met | APPROVE — document and monitor |
| Non-critical gaps identified | APPROVE WITH CONDITIONS — define remediation plan with timelines |
| Critical subsumable gaps | DEFER — do not contract until remediation verified |
| Critical non-subsumable gaps | REJECT — seek alternative |

## Continuous Monitoring

Initial assessment is insufficient. Establish a monitoring cycle:

| Frequency | Activity |
|-----------|-----------|
| Continuous | Monitor vendor security incidents (news, CVEs) |
| Quarterly | Review security SLA compliance |
| Semi-annual | Verify sub-processor list update |
| Annual | Full re-assessment of all 3 regulations |
| Ad-hoc | Upon regulatory change, security breach, or service change |

## Output

Generate regulatory risk report in Markdown with:
1. Executive summary (applicable regulations, overall result, top risks)
2. Applicability table (which regulations apply and why)
3. Detailed analysis by regulation (requirement by requirement, with status)
4. Risk matrix (heat map with identified gaps)
5. Recommendation: APPROVE / APPROVE WITH CONDITIONS / DEFER / REJECT
6. Remediation plan (if applicable) with timelines and owners
7. Continuous monitoring plan

## Related Skills

- **vendor-assessment**: Compliance analysis is part of the initial vendor evaluation
- **it-contract-review**: DPA checklist and regulatory requirements inform contract negotiation
- **contract-lifecycle**: Regulatory changes trigger contract amendment reviews
- **vendor-reporting**: Compliance status feeds into executive risk reporting
