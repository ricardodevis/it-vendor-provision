# Detailed Evaluation Criteria

## Scoring Rubric (1-5)

### General Scale

| Score | Meaning | Criterion |
|-----------|-------------|----------|
| 1 | Unacceptable | Fails to meet minimum requirements. High risk. Rejection recommended. |
| 2 | Deficient | Partial compliance with significant gaps. Requires strong negotiation. |
| 3 | Acceptable | Meets basic requirements. Identified improvement areas but manageable. |
| 4 | Good | Solid compliance. Minor improvements possible. Positive recommendation. |
| 5 | Excellent | Exceeds standards. Category leader. |

### Technical Capability — Detailed Rubric

**5 — Excellent:**
- Modern, documented architecture with complete REST/GraphQL APIs
- SDKs in multiple languages, test sandbox
- Public roadmap with predictable release cadence
- Native integrations with major ecosystems
- Exhaustive and current technical documentation

**3 — Acceptable:**
- Functional architecture but with visible technical debt
- API available but with incomplete documentation
- Roadmap exists but not public
- Integrations possible via custom development
- Basic documentation

**1 — Unacceptable:**
- Monolithic architecture without APIs or legacy APIs (SOAP without REST)
- No SDK, no sandbox
- No visible roadmap or history of broken promises
- Integration only via manual export/import or FTP
- Nonexistent or outdated documentation

### Security — Detailed Rubric

**5 — Excellent:**
- Current SOC 2 Type II + ISO 27001 with full scope
- ISO 42001 if it incorporates AI
- Quarterly penetration testing with documented remediation
- Active bug bounty program
- AES-256/TLS 1.3 encryption, mandatory MFA, granular RBAC
- Tested DR with RTO < 4h and RPO < 1h

**3 — Acceptable:**
- SOC 2 Type I or ISO 27001 with partial scope
- Annual penetration testing
- Standard encryption, MFA available but not mandatory
- Documented DR but not regularly tested

**1 — Unacceptable:**
- No security certifications
- No documented penetration testing
- Partial encryption or obsolete protocols (TLS 1.0/1.1)
- No MFA
- No DR plan

### Regulatory Compliance — Detailed Rubric

**5 — Excellent:**
- Signed DPA compliant with GDPR art. 28, with SCCs integrated
- Data in EU or with judicially validated transfer mechanisms
- Evidence of NIS2 compliance point-by-point (art. 21)
- If AI: documented risk classification per AI Regulation
- DPO designation and processing activity registry published

**3 — Acceptable:**
- DPA available but requires clause negotiation
- Data outside EU with SCCs but without clear supplementary measures
- Partial NIS2 compliance or in progress
- If AI: no formal classification but with documented practices

**1 — Unacceptable:**
- No DPA or DPA that doesn't meet GDPR art. 28
- No international transfer mechanism
- No evidence of NIS2 compliance
- If AI: no AI governance documentation whatsoever

## Key Questions by Dimension

### To Ask the Vendor

**Technical:**
- What's your product architecture? Is it multi-tenant or single-tenant?
- Do you offer REST APIs? Documentation? Rate limits?
- What's your release cadence? Are there maintenance windows?
- What native integrations do you have with [client's ecosystem]?
- Can we run a PoC in sandbox?

**Security:**
- Can you share your latest SOC 2 Type II report?
- How often do you conduct penetration testing? Can you share the executive summary?
- How do you manage vulnerabilities? What's your SLA for patching critical CVEs?
- Do you support SSO via SAML 2.0/OIDC? MFA?
- What's your RPO/RTO?

**Compliance:**
- Where are data processed and stored?
- Do you have a GDPR art. 28 compliant DPA? Does it include SCCs?
- Do you use sub-processors? Which ones? What's our right of objection?
- How do you handle GDPR rights requests?
- If you incorporate AI: what models do you use? Training data? Risk classification?

**Economic:**
- What's your pricing model? Are there implementation costs?
- What's the migration cost if we decide to switch?
- How many times have you raised prices in the last 3 years?
- Is there a fixed-price clause during the contract term?

**Support:**
- What support levels do you offer? Response times by severity?
- Do you have support in English / in the client's time zone?
- What's your committed uptime? What are the penalties?
- Public status page? Incident history?

**Stability:**
- How many customers do you have? In which sectors?
- Are you profitable? When did you reach breakeven?
- Have there been ownership changes in the last 3 years?
- What's your continuity policy if you cease operations?

## Multi-vendor Comparison

When evaluating multiple vendors for the same need, generate a comparison table:

| Criterion | Vendor A | Vendor B | Vendor C |
|----------|-------------|-------------|-------------|
| Technical Capability | X/5 | X/5 | X/5 |
| Security | X/5 | X/5 | X/5 |
| Compliance | X/5 | X/5 | X/5 |
| Economics | X/5 | X/5 | X/5 |
| Support | X/5 | X/5 | X/5 |
| Stability | X/5 | X/5 | X/5 |
| **Weighted Score** | **X.X** | **X.X** | **X.X** |
| Critical Risks | ... | ... | ... |
| Recommendation | APPROVE / CONDITIONS / REJECT |

Always include qualitative analysis below the table. Numbers without context mean nothing.
