# Audit Evidence Map for Vendor Management

## Traceability matrix: control → evidence → source

This matrix allows you to quickly prepare evidence required for any audit on vendor management process.

## ISO 27001:2022 — Vendor controls

### A.5.19 — Information security in vendor relationships

| Control requirement | Required evidence | Source | Expected format |
|----------------------|--------------------|---------|-----------------|
| Information security policy for vendors | Board-approved policy document | ~~document repository | Signed PDF |
| Vendor selection criteria | Evaluation framework (vendor-assessment) | ~~document repository | Scorecard |
| Vendor criticality classification | Vendor registry with criticality field | ~~document repository | Table/registry |
| Vendor risk assessment | Updated risk register | Risk register | Table with scoring |
| New vendor approval process | Documented procedure + execution evidence | ~~document repository | Procedure + scorecards |

### A.5.20 — Security in vendor agreements

| Requirement | Evidence | Source | Format |
|-----------|-----------|--------|---------|
| Security requirements in contracts | Security clauses in standard contracts | ~~document repository | Signed contract |
| Confidentiality agreements | Signed NDAs | ~~document repository | Signed PDF |
| DPA per GDPR art. 28 | Signed and current DPAs | ~~document repository | Signed PDF |
| Security SLAs defined | SLA appendix in contracts | ~~document repository | Signed contract |
| Audit rights | Audit clause in contracts | ~~document repository | Signed contract |
| Incident management contractual | Breach notification clause | ~~document repository | Signed contract |
| Required certifications | Contract requirements + current certs | ~~document repository + vendor website | Certificates |

### A.5.21 — ICT supply chain

| Requirement | Evidence | Source | Format |
|-----------|-----------|--------|---------|
| Supply chain assessment | Subprocessor verification by vendor | ~~document repository | Verified list |
| Security requirements propagated | Evidence vendor imposes requirements on subs | Vendor DPA | Contractual clause |
| Supply chain monitoring | Process for reviewing subprocessor changes | Notification log | Emails/minutes |

### A.5.22 — Vendor monitoring and review

| Requirement | Evidence | Source | Format |
|-----------|-----------|--------|---------|
| Performance monitoring | Periodic SLA reports | ~~monitoring tool | Dashboard/report |
| Periodic reviews | Quarterly/annual review minutes | ~~document repository | Signed minutes |
| Service change management | Vendor-communicated changes log | ~~ticketing system | Tickets/emails |
| Periodic re-assessment | Re-evaluation scorecards (vendor-review) | ~~document repository | Report |
| Incident management | Incident registry with resolution | ~~ticketing system | Registry |
| Certification audit | Annual certification verification | Vendor registry | Table |

### A.5.23 — Cloud services

| Requirement | Evidence | Source | Format |
|-----------|-----------|--------|---------|
| Cloud-specific evaluation | Assessment with cloud dimension (SOC 2, CSA STAR) | ~~document repository | Scorecard |
| Data location | Documentation of regions/jurisdictions | DPA + technical doc | Document |
| Encryption and key management | Evidence of encryption at rest and in transit | Vendor technical doc | Document |
| Cloud exit plan | Portability clause + exit plan | ~~document repository | Documented plan |

## NIS2 — Supply chain (Art. 21.2.d)

| Requirement | Evidence | Source |
|-----------|-----------|--------|
| Supply chain security policy | Policy document | ~~document repository |
| Critical vendor inventory | Criticality-classified list | ~~document repository |
| Vendor security assessment | Scorecards with security dimension | ~~document repository |
| Contractual security requirements | Contracts with security clauses | ~~document repository |
| Continuous monitoring | Monitoring reports, dashboards | ~~monitoring tool, ~~security scanner |
| Vendor incident management | Documented protocol + registry | ~~document repository + ~~ticketing system |
| Vendor failure contingency plan | BCP including critical vendors | ~~document repository |
| Vendor vulnerability management | CVE/patching tracking process | ~~security scanner |

## GDPR — Processors (Art. 28)

| Requirement | Evidence | Source |
|-----------|-----------|--------|
| Signed DPA per processor | Signed DPAs | ~~document repository |
| Documented processor instructions | Clause 28.3.a in DPA | DPA |
| Processing activity registry | Updated RAT (art. 30) | ~~document repository |
| Authorized subprocessor list | Lists per vendor, verified | ~~document repository |
| Subprocessor notification mechanism | Documented process + evidence | Emails/vendor portal |
| Security measures verified (art. 32) | SOC 2, ISO 27001, penetration testing | ~~document repository |
| DPIA conducted (if sensitive data) | DPIA document | ~~document repository |
| International transfers documented | TIA + legal mechanism (SCCs, DPF) | ~~document repository |
| Data subject rights management | Documented process + response SLA | ~~document repository |
| Breach notification | Contractual clause + breach registry | DPA + incident log |
| Post-exit data deletion certification | Deletion certificates archived | ~~document repository |

## Pre-audit checklist (day D-7)

### Documentation
- [ ] All identified documents are accessible in ~~document repository
- [ ] Documents are current (< 12 months or within validity)
- [ ] Evidence index/inventory exists with location of each document
- [ ] Documents are organized by control (not scattered)

### Operational registries
- [ ] SLA dashboards accessible with data from audit period
- [ ] Incident registry complete and closed (no unjustified open incidents)
- [ ] Risk register current (last review < 3 months)
- [ ] Periodic review minutes signed and filed

### People
- [ ] Single point of contact designated for auditor
- [ ] Backup contact identified
- [ ] Area owners can answer questions in their domain
- [ ] No improvisation: if unknown, "we verify and send it to you"

### Known gaps
- [ ] List of identified gaps with remediation plan
- [ ] For each gap: honest explanation + correction timeline
- [ ] Better to present gap proactively than for auditor to discover it
