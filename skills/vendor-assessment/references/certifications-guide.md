# IT Vendor Certifications Guide

## Security Certifications

### SOC 2 Type II
- **What it evaluates**: Security controls, availability, processing integrity, confidentiality, and privacy
- **Difference from Type I**: Type I evaluates whether controls exist at a given moment. Type II evaluates whether they work over an extended period (6-12 months)
- **Why it matters**: It's the most demanding certification in terms of continuous operational evidence
- **Red flag if**: They only have Type I, the report is over 12 months old, or there are significant unmediated exceptions

### ISO 27001:2022
- **What it evaluates**: Information security management system (ISMS)
- **Scope**: Verify that the certification scope covers the product/service being evaluated (not just headquarters)
- **Renewal**: Every 3 years with annual follow-up audits
- **Red flag if**: The scope doesn't include the cloud service, or the certification is from an older version (2013)

### ISO 27701
- **What it evaluates**: Extension of ISO 27001 for privacy management (PIMS)
- **Relevance**: Demonstrates that the vendor has formal processes to meet GDPR
- **Status**: Relatively new, few vendors have it. It's a positive differentiator, not a knockout requirement

### ISO/IEC 42001:2023
- **What it evaluates**: Governance, risks, and controls specific to AI systems
- **Relevance**: Must evaluate if the software incorporates generative or predictive AI components
- **Status**: Very recent. Anthropic is one of the few AI vendors with this certification
- **Red flag if**: The vendor has AI in their product but has neither this certification nor a documented equivalent framework

### CSA STAR
- **What it evaluates**: Security specific to cloud services (based on CCM)
- **Levels**: Self-assessment (Level 1), third-party audit (Level 2), continuous monitoring (Level 3)
- **Relevance**: Complements SOC 2 and ISO 27001 for SaaS/IaaS/PaaS services

## Sector-specific Certifications

### Financial Sector
- **PCI DSS**: If the software processes payment card data
- **SOX compliance**: If the software affects financial reporting
- **DORA**: Digital Operational Resilience Act (EU) — mandatory for financial entities from January 2025

### Healthcare Sector
- **HIPAA**: If the software processes health data (primarily relevant in the US, but a maturity indicator)
- **ENS**: Esquema Nacional de Seguridad (Spain) — mandatory for public sector vendors

### Legal Sector
- **No specific certification**, but firms must verify that the vendor meets professional secrecy and enhanced confidentiality obligations

## How to Verify Certifications

1. **Request the current certificate** with issuance and expiration dates
2. **Verify the scope**: that it covers the specific product/service, not just "the company"
3. **Review exceptions**: in SOC 2 Type II, exceptions are normal but must be remediated
4. **Cross-check with the trust center**: most mature vendors publish their certifications on a security/trust page
5. **Request additional evidence** if there's no formal certification: completed security questionnaires (SIG, CAIQ), penetration testing results, internal policies

## Minimum Requirements Matrix by Criticality

| Software Criticality | Minimum Certifications |
|--------------------------|------------------------|
| Low (internal tool, no sensitive data) | Completed security questionnaire |
| Medium (internal data, not regulated) | ISO 27001 or SOC 2 Type I |
| High (personal data, regulated data) | SOC 2 Type II + ISO 27001 |
| Critical (core infrastructure, sensitive data) | SOC 2 Type II + ISO 27001 + sector-specific certification |
| AI incorporated | Above + ISO 42001 or documented equivalent framework |
