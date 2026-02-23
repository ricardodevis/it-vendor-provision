# NIS2 Vendor Checklist

## Context: NIS2 and Supply Chain

The NIS2 Directive (2022/2555) requires essential and important entities to manage cybersecurity risks in their supply chain (art. 21.2.d). This means if your organization is in NIS2 scope, your critical IT vendors are de facto in scope too: not by direct obligation on them, but by your obligation to assess and control them.

## Is Your Organization in NIS2 Scope?

### Essential Entities (Annex I)
- Energy (electricity, gas, oil, hydrogen)
- Transport (air, rail, maritime, road)
- Banking and financial markets
- Health (hospitals, labs, pharma)
- Drinking and wastewater
- Digital infrastructure (DNS, TLD, cloud, data centers, CDN, IXP)
- Public administration
- Space

### Important Entities (Annex II)
- Postal services
- Waste management
- Manufacture of chemicals
- Food (production, processing, distribution)
- Manufacturing (medical devices, electronics, machinery, vehicles)
- Digital service providers (marketplaces, search engines, social media)
- Research

### Size Criterion
- **Medium**: ≥ 50 employees or ≥ 10M€ revenue
- **Large**: ≥ 250 employees or ≥ 50M€ revenue
- Micro and small may be outside scope except for critical infrastructure or essential digital services

## Art. 21 — Cybersecurity Risk Management Measures

NIS2 requires (art. 21.2) that in-scope entities implement measures including, at minimum:

| Measure (art. 21.2) | What to Verify in the Vendor |
|--------------------|------------------------------|
| a) Risk analysis and security policies | Does vendor have documented, current security policy? |
| b) Incident management | Does vendor have incident response plan with defined timelines? |
| c) Business continuity and crisis management | Does vendor have tested BCP/DRP? RPO/RTO defined? |
| d) Supply chain security | Does vendor manage security of their own vendors? |
| e) Security in acquisition, development, maintenance | Does vendor have secure SDLC? Vulnerability management? |
| f) Efficacy evaluation policies | Does vendor conduct periodic audits and pentests? |
| g) Basic cyberhygiene and training practices | Does vendor train staff in security? |
| h) Cryptography policies | Encryption at rest and in transit to standards? |
| i) Human resources security and access control | MFA, RBAC, hiring/off-boarding management? |
| j) Multi-factor or continuous authentication | MFA mandatory? SSO available? |

## Vendor-Specific Checklist

### Security Governance
- [ ] Information security policy approved by management
- [ ] Security officer (CISO or equivalent) identified
- [ ] Periodic policy review (at least annually)
- [ ] Mandatory security training for all staff
- [ ] Security awareness program

### Incident Management
- [ ] Documented incident response plan
- [ ] Incident response team (CSIRT/SOC) identified
- [ ] Client notification timeline: defined (recommended ≤ 24h for significant incidents)
- [ ] Incident severity classification
- [ ] Post-incident review and lessons learned documented
- [ ] Periodic incident simulations (at least annually)

**NIS2 requires notification to competent authority:**
- Early warning: ≤ 24h from detection
- Complete notification: ≤ 72h
- Final report: ≤ 1 month

Vendor must notify client with sufficient time for client to meet own timelines.

### Business Continuity
- [ ] Business Continuity Plan (BCP) documented and tested
- [ ] Disaster Recovery Plan (DRP) with RPO/RTO defined
- [ ] DR testing performed (at least annually)
- [ ] Redundant infrastructure (multi-AZ, multi-region if critical)
- [ ] Verified, restorable backups
- [ ] Proactive communication on availability incidents

### Vulnerability Management
- [ ] Periodic vulnerability scanning (at least monthly)
- [ ] Third-party penetration testing (at least annually)
- [ ] Defined patch cadence:
  - Critical: ≤ 48h
  - High: ≤ 7 days
  - Medium: ≤ 30 days
  - Low: next maintenance cycle
- [ ] CVE management: evaluation and client communication process
- [ ] Bug bounty program or responsible disclosure

### Access Control
- [ ] Multi-factor authentication (MFA) mandatory for administrative access
- [ ] SSO available for customers (SAML, OIDC)
- [ ] Granular role-based access control (RBAC)
- [ ] Least privilege principle implemented
- [ ] Periodic access review (at least quarterly)
- [ ] Automated user provisioning/deprovisioning (IdP integration)
- [ ] Access logging (who accessed what, when)

### Encryption
- [ ] Encryption at rest: AES-256 or equivalent
- [ ] Encryption in transit: TLS 1.2+ (1.3 preferred)
- [ ] Key management: HSM or equivalent
- [ ] Periodic key rotation
- [ ] BYOK (Bring Your Own Key) option for customers requiring it
- [ ] Backup encryption

### Vendor's Own Supply Chain
- [ ] Vendor assesses security of its own vendors
- [ ] List of critical sub-vendors available
- [ ] Security requirements contractually imposed on sub-vendors
- [ ] Monitoring of sub-vendor security
- [ ] Contingency plan if critical sub-vendor fails

## NIS2 Sanctions

| Entity Type | Maximum Sanction |
|----------------|----------------|
| Essential entity | Up to 10M€ or 2% global revenue (whichever is greater) |
| Important entity | Up to 7M€ or 1.4% global revenue (whichever is greater) |

Additionally: personal liability of board members (art. 20.1) for negligent supervision.

## National Transposition

NIS2 must be transposed into each Member State's national law. Deadline was October 2024, but many countries (including Spain) are still in process. Verify:
- [ ] Status of transposition in client's country
- [ ] Status of transposition in vendor's country
- [ ] Differences between directive and national transposition (may impose additional requirements)

**Practical note**: Regardless of transposition completion, prepare per the directive. National requirements will not be less stringent.

## Acceptable Evidence

| NIS2 Requirement | Vendor Evidence |
|----------------|------------------------|
| Security policy | Policy document signed by management |
| Incident management | IR plan + evidence of simulations |
| Business continuity | BCP/DRP + DR test results |
| Vulnerability management | Pentest report + patch policy |
| Access control | SSO/MFA configuration + access policy |
| Encryption | Technical documentation + verifiable configuration |
| Certifications | SOC 2 Type II, ISO 27001 (cover most requirements) |
| Training | Training records + awareness program |
