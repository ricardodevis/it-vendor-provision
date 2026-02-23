# SLA Playbook for IT Software

## Standard metrics and thresholds

### Availability (Uptime)

| SLA Level | Downtime/year | Downtime/month | Suitable for |
|-----------|-------------|-------------|---------------|
| 99.0% | 87.6h | 7.3h | Non-critical internal tools |
| 99.5% | 43.8h | 3.65h | General productivity software |
| 99.9% | 8.76h | 43.8min | Important business applications |
| 99.95% | 4.38h | 21.9min | Mission-critical systems |
| 99.99% | 52.6min | 4.38min | Core infrastructure, payments, trading |

**Watch out for**: The difference between 99.5% and 99.9% looks small but it's 5x more downtime. Negotiating decimals matters.

### Support response times

| Severity | Definition | Target response time | Target resolution time |
|-----------|-----------|--------------------------|---------------------------|
| S1 - Critical | Service down, no workaround | 15-30 min | 4h |
| S2 - High | Main functionality degraded | 1-2h | 8h business hours |
| S3 - Medium | Secondary functionality affected, workaround exists | 4-8h | 3 business days |
| S4 - Low | Inquiry, minor improvement, cosmetic | 24h business hours | Next release or agreed |

### RPO/RTO (for cloud services)

| Criticality | Target RTO | Target RPO |
|-----------|-------------|-------------|
| Low | 24h | 24h |
| Medium | 8h | 4h |
| High | 4h | 1h |
| Critical | 1h | 15min |

## Penalties: what to negotiate

### Service credit model (minimum standard)

| Breach | Credit |
|---------------|---------|
| < 99.9% but ≥ 99.5% | 10% of monthly fee |
| < 99.5% but ≥ 99.0% | 25% of monthly fee |
| < 99.0% | 50% of monthly fee |
| < 95.0% | Right of termination without penalty |

**Negotiating positions:**
- Credits applied automatically, not on request
- Credits cumulative (not capped at 100% of the month)
- Right of termination if SLA is breached in 3 consecutive months
- Financial SLAs: real penalties, not just credits (if the contract justifies it)

### SLA exclusions: what to accept and what not to

**Acceptable to exclude:**
- Scheduled maintenance with notice ≥ 72h and outside customer business hours
- Genuine force majeure (natural disasters, acts of war)
- Failures of the customer's infrastructure

**Do not accept as exclusion:**
- "Service updates" (updates are the provider's responsibility)
- Generic "third-party failures" (provider chooses its subcontractors)
- Partial degradation ("service works but slow" is a breach)
- "Emergency" maintenance without defining emergency

## Measurement and reporting

### What to require:
- Real-time availability dashboard (status page)
- Monthly SLA compliance report
- Access to incident history
- Transparent measurement methodology (measurement points, intervals)
- Monthly credit reconciliation

### Measurement points:
- External monitoring (not just provider's internal)
- Measurement from the point closest to the end user
- Measurement intervals ≤ 5 minutes
- Clear definition of "available" vs. "degraded" vs. "down"

## Incident communication

### What to negotiate:
- Initial notification: ≤ 30 min for S1, ≤ 1h for S2
- Periodic updates during incident (every 30 min S1, every hour S2)
- Root Cause Analysis (RCA) in writing within ≤ 5 business days for S1/S2
- Remediation plan with commitments and dates
- Post-mortem shared with customer
