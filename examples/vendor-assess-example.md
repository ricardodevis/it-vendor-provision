# Vendor Assessment: CloudSync Pro v4.2
## SaaS Document Management & Collaboration Platform

**Date:** 2026-02-20
**Requested by:** IT Governance Committee
**Vendor:** CloudSync Technologies Ltd. (Dublin, Ireland)
**Software:** CloudSync Pro v4.2 — Enterprise document management with real-time collaboration
**Criticality:** High (will replace current DMS for 1,200 users across 3 business units)

---

## Executive Summary

CloudSync Pro is a mature SaaS document management platform with strong technical capabilities and solid security posture (SOC 2 Type II, ISO 27001). However, the assessment identifies two critical conditions: (1) the vendor lacks ISO 42001 certification despite incorporating AI-powered document classification, which creates regulatory exposure under the EU AI Act, and (2) the proposed data processing agreement does not adequately address sub-processor notification. **Recommendation: APPROVE WITH CONDITIONS.**

---

## Scorecard

| Dimension | Weight | Score | Status | Key Finding |
|---|---|---|---|---|
| Technical Capability | 20% | 4/5 | :green_circle: | REST API well-documented, native SSO/SCIM, 14 pre-built integrations. Minor gap: no on-premise deployment option |
| Security & Certifications | 25% | 4/5 | :green_circle: | SOC 2 Type II (current), ISO 27001, annual pentests by NCC Group. AES-256 at rest, TLS 1.3 in transit. Gap: no ISO 42001 for AI features |
| Regulatory Compliance | 20% | 3/5 | :yellow_circle: | GDPR-compliant DPA available but sub-processor notification clause is 30 days (should be 14). AI classification feature has no algorithmic transparency documentation. No DORA-specific addendum |
| Economic & Contractual | 15% | 3/5 | :yellow_circle: | Pricing competitive at EUR 18/user/month (market benchmark EUR 15-22). Concern: 15% annual price escalation cap is above market (typical 5-8%). Exit clause requires 180 days notice |
| Support & Operations | 10% | 4/5 | :green_circle: | 24/7 L1 support, dedicated CSM for Enterprise tier, 99.95% SLA with financial credits. Knowledge base comprehensive. Minor: no Spanish-language support |
| Vendor Stability | 10% | 4/5 | :green_circle: | Series D funded (EUR 120M), 4,200 enterprise customers, 38% YoY revenue growth. Leadership team stable (average tenure 5+ years). Risk: no profitability yet (burn rate ~EUR 8M/quarter) |

**Weighted Score: 3.65 / 5.00**

---

## Detailed Analysis

### 1. Technical Capability (4/5)

**Strengths:**
- REST API with comprehensive documentation (OpenAPI 3.0 spec published), supporting full CRUD operations on documents, folders, metadata, and workflows
- Native SAML 2.0 / OIDC SSO integration with automated SCIM provisioning — tested successfully with our Okta instance during PoC
- 14 pre-built connectors (Microsoft 365, Google Workspace, Salesforce, ServiceNow, Slack, Teams, etc.)
- Real-time collaboration engine supporting 50+ concurrent editors per document
- Granular permission model (role-based + attribute-based) with inheritance

**Gaps:**
- No on-premise or hybrid deployment option — SaaS only. For our regulated business unit handling defense contracts, this may require additional architectural controls (customer-managed encryption keys are available as add-on at EUR 3/user/month)
- Mobile app rated 3.2/5 on App Store (users report sync issues on iOS). Vendor roadmap shows v5.0 mobile rewrite for Q3 2026
- Webhook event catalog covers only 60% of object types (no webhooks for permission changes or audit log events)

### 2. Security & Certifications (4/5)

**Certifications verified:**
- SOC 2 Type II — Report dated October 2025, covers Security, Availability, and Confidentiality trust service criteria. No exceptions noted
- ISO 27001:2022 — Certificate valid through March 2027, scope covers SaaS platform operations and customer data handling
- Annual penetration testing by NCC Group — Latest report (November 2025) shows 0 critical, 2 high (both remediated within 30 days), 7 medium findings

**Security architecture:**
- AES-256 encryption at rest (AWS KMS), TLS 1.3 in transit
- MFA enforced for all administrative access; customer SSO MFA delegated to IdP
- SOC-audited access controls with quarterly access reviews
- Incident response plan with 4-hour notification SLA for security events

**Critical gap: No ISO 42001 certification.** CloudSync Pro v4.2 includes AI-powered document classification and content recommendation features. Under the EU AI Act (Regulation 2024/1689), deployers of AI systems in workplace settings have transparency obligations. The vendor has no algorithmic impact assessment, no model card documentation, and no human oversight mechanism documented for the AI features. The vendor states ISO 42001 certification is "on the roadmap for H2 2026."

### 3. Regulatory Compliance (3/5)

**GDPR:**
- Standard DPA available, based on European Commission SCCs (2021/914)
- Data processing in EU (AWS eu-west-1, Dublin)
- Sub-processor list published, but notification period for changes is 30 days. Our policy requires 14 days minimum for objection window
- Data deletion upon contract termination: 30 days standard, certifiable deletion upon request

**NIS2:**
- Vendor claims alignment with NIS2 Art. 21 requirements but has not undergone formal NIS2 readiness assessment
- Supply chain security documentation is generic; lacks specific controls inventory per Art. 21(2)(d)

**AI Act:**
- AI features (document classification, content recommendation, smart search) have no risk classification documentation
- No algorithmic transparency information available for end users
- No human oversight mechanism documented — users cannot opt out of AI-assisted features at document level

### 4. Economic & Contractual (3/5)

**Pricing analysis:**

| Tier | Price/user/month | Our negotiated | Market benchmark |
|---|---|---|---|
| Enterprise (500-999 users) | EUR 22 | EUR 20 | EUR 18-24 |
| Enterprise (1000+ users) | EUR 18 | EUR 16.50 | EUR 15-22 |

- 3-year commitment required for best pricing (EUR 16.50/user/month for 1,200 users = EUR 237,600/year)
- Annual price escalation capped at 15% — significantly above market standard of 5-8%. **This must be renegotiated**
- Customer-managed encryption keys: additional EUR 3/user/month (EUR 43,200/year)
- Implementation services: EUR 45,000 one-time (data migration, SSO configuration, training)
- **Total 3-year cost: EUR 757,800 - EUR 887,400** (depending on CMK and escalation)

**Exit concerns:**
- 180-day advance notice for non-renewal (standard is 90 days)
- Data export in proprietary format only; PDF export available but loses metadata
- No contractual obligation for migration assistance

### 5. Support & Operations (4/5)

- 24/7 L1 support via chat and email; L2 escalation within 4 hours for P1 issues
- Dedicated Customer Success Manager included at Enterprise tier
- SLA: 99.95% monthly availability with tiered financial credits (5% for <99.95%, 10% for <99.9%, 25% for <99.5%)
- Comprehensive knowledge base (400+ articles) and video training library
- Quarterly business reviews included
- Gap: Support only in English and French. No Spanish-language support available

### 6. Vendor Stability (4/5)

- Founded 2018, headquartered Dublin with engineering in Dublin and Lisbon
- Series D (EUR 120M, led by Insight Partners, December 2024)
- 4,200 enterprise customers (notable: Deutsche Bank, Maersk, Repsol)
- 480 employees (38% engineering)
- Revenue: EUR 85M ARR (38% YoY growth)
- Not yet profitable — burn rate approximately EUR 8M/quarter. Current runway ~4 years at current burn
- Leadership team: CEO (co-founder, 8 years), CTO (co-founder, 8 years), CISO (ex-AWS, 3 years)

---

## Critical Risks

| # | Risk | Impact | Probability | Mitigation |
|---|---|---|---|---|
| 1 | AI features non-compliant with EU AI Act | High | Medium | Require vendor ISO 42001 roadmap commitment with contractual milestone; disable AI features until certification |
| 2 | 15% annual price escalation | High | High | Renegotiate cap to 5% or CPI-indexed; include most-favored-nation clause |
| 3 | No data portability in open format | High | Medium | Require contractual commitment to standard format export (JSON/XML with metadata) within 6 months |
| 4 | Vendor not yet profitable | Medium | Low | Include source code escrow clause; verify insurance coverage |
| 5 | No Spanish-language support | Low | High | Require Spanish support in contract SLA within 12 months or accept English-only |

---

## Recommendation

### APPROVE WITH CONDITIONS

CloudSync Pro is a technically strong platform with solid security credentials that meets the majority of our requirements. However, approval is conditional on:

1. **Mandatory before signing:** Renegotiate price escalation cap to maximum 5% or CPI-linked
2. **Mandatory before signing:** Amend DPA sub-processor notification from 30 to 14 days
3. **Mandatory before go-live:** Disable AI-powered classification features until vendor provides AI Act compliance documentation (algorithmic impact assessment + human oversight mechanism)
4. **Contractual commitment:** Vendor must achieve ISO 42001 certification by Q4 2026 or provide equivalent third-party AI audit
5. **Contractual commitment:** Data export in open format (JSON with full metadata) available within 6 months of contract start

### Next Steps

1. Share this assessment with Legal for contract negotiation guidance
2. Communicate conditions to CloudSync sales team
3. Request updated commercial proposal reflecting renegotiated terms
4. Schedule security architecture deep-dive with CloudSync CISO (focus: AI features, data isolation)
5. Prepare parallel evaluation of DocuVerse Enterprise as negotiation leverage
