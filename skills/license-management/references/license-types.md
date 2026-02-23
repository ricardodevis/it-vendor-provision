# Guide to Software Licensing Models

## Licensing models: comparison

### 1. Per User (Named User)

**How it works**: Each license is assigned to a specific user, identified by name or email. Only that user can use the software.

**Advantages**:
- Predictable: cost = number of users × unit price
- Easy to audit: user list = license list
- Includes full access for each user

**Risks**:
- Pay for users who don't actively use the software
- Cost scales linearly with the organization
- License reassignment: verify that the contract permits it without additional cost

**What to negotiate**:
- Right to reassign licenses without cost (with minimum period, e.g., 30 days)
- Volume discounts with clear tiers
- "Read-only" or "viewer" licenses at reduced cost
- Annual true-up instead of monthly (avoids spikes from temporary users)

**Common trap**: "Each person who accesses the system needs a license, including administrators, auditors, and reporting users." This artificially inflates the count.

### 2. Per User (Concurrent / Floating)

**How it works**: Contract for a maximum number of simultaneous users. Any user can access, but the system limits concurrency.

**Advantages**:
- More efficient if not all users access simultaneously
- Potentially lower cost than named user
- Ideal for shifts or sporadic use

**Risks**:
- Lockouts if concurrency is insufficient
- Difficult to dimension initially
- Concurrency measurement: peak or average?

**What to negotiate**:
- Measurement method: peak within 5-minute window, not instantaneous
- Burst allowance: permit temporary excess without penalty (e.g., 10% over contracted)
- Alerts as you approach the limit
- Automatic scaling with predefined pricing

### 3. Per Device

**How it works**: License is tied to a specific device (server, workstation, mobile).

**Advantages**:
- Independent of the number of users
- Useful for shared devices (kiosks, rooms)

**Risks**:
- Re-licensing when hardware changes
- Virtualized environments: does each VM count as a device?
- BYOD: does the employee's personal device consume a license?

**What to negotiate**:
- Transferability between devices without cost
- Clear definition of "device" in virtualized environments
- Policy for BYOD and temporary devices

### 4. Per Core / Per CPU

**How it works**: License is based on the processing capacity of the server where the software runs.

**Advantages**:
- Scales with infrastructure, not with users
- Appropriate for infrastructure software (databases, middleware)

**Risks**:
- Cost skyrockets with virtualization and cloud
- Definition of "core": physical or virtual? Does hyperthreading count?
- Cloud migration: potentially required re-licensing

**What to negotiate**:
- Precise definition of "core" (physical, not virtual)
- Portability across infrastructure (on-prem → cloud → multi-cloud)
- Core cap for development/testing environments
- Per-cluster licensing, not per-node

**Special case — Oracle**: Oracle's licensing model (processor-based with core factor) is notoriously complex. If the vendor is Oracle or uses a similar model, seek specialized advice before signing.

### 5. Subscription (SaaS)

**How it works**: Recurring payment (monthly or annual) for access to software as a service. The vendor manages infrastructure.

**Advantages**:
- No upfront investment (CapEx → OpEx)
- Updates included
- Rapid scalability

**Risks**:
- Lock-in: vendor dependency for access to your data
- Price increase at renewal
- Loss of access if not renewed (it's not "yours")
- Subscription accumulation (SaaS sprawl)

**What to negotiate**:
- Price increase cap at renewal (e.g., max CPI + 3%)
- Multi-year commitment with discount and price protection
- Exit clause with data portability (see contract review skill)
- Downgrade without penalty (reduce users or plan)
- Annual billing with quarterly payments (improves cash flow)

**Common trap**: Attractive year 1 price, 30-50% increase at renewal. Negotiate renewal price BEFORE signing.

### 6. Perpetual + Maintenance

**How it works**: One-time license purchase + annual maintenance payment (typically 18-22% of license cost) that includes updates and support.

**Advantages**:
- License is "yours" (subject to terms)
- Long-term cost potentially lower than SaaS
- Works without internet connection

**Risks**:
- High upfront investment
- Maintenance is "voluntary" but discontinuing it means losing updates and support
- Unsupported versions: security risk
- Vendor may discontinue the version and force migration to SaaS

**What to negotiate**:
- Fixed maintenance percentage (not "subject to annual review")
- Right to resume maintenance without penalty if interrupted
- Support commitment for the version for a minimum period (5 years)
- New version upgrade included in maintenance

### 7. Consumption-Based (Pay-as-you-go)

**How it works**: Payment based on actual usage: API calls, storage, compute hours, transactions, processed records.

**Advantages**:
- Payment proportional to actual usage
- Ideal for variable or seasonal loads
- No minimum volume commitment (sometimes)

**Risks**:
- Unpredictable cost: a usage spike generates an unexpected bill
- Difficult to budget
- "Meter fatigue": fatigue from trying to optimize consumption
- Vendor controls consumption measurement metrics

**What to negotiate**:
- Alerts and spending caps (hard limit, not just notification)
- Committed use discounts: minimum consumption commitment for discount
- Measurement granularity (per second, per minute, per hour)
- Right to audit consumption metrics
- Credits for service downtime

**Common trap**: "Pay only for what you use" sounds good until usage spikes from a production error and the bill is 10x expected. Always negotiate a cap.

### 8. Open Source

**How it works**: Software with source code available under a license that defines rights to use, modify, and distribute.

**Not free in the business sense**: The software is free, but support, integration, security, and compliance have cost.

**License types relevant to enterprises:**

| License | Type | Risk for proprietary software |
|----------|------|--------------------------------|
| MIT, BSD, Apache 2.0 | Permissive | Low: permits commercial use with attribution |
| LGPL | Weak copyleft | Medium: permits linking but not modification without release |
| GPL v2/v3 | Strong copyleft | High: any derived software must be GPL |
| AGPL | Network copyleft | Very high: use as service (SaaS) triggers obligation to release |
| SSPL | Source-available | Very high: use as service requires releasing entire infrastructure |

**What to verify before adopting open source:**
- [ ] License compatible with intended use (commercial, SaaS, distribution)
- [ ] Active community and regular maintenance
- [ ] Security policy: CVE management, patch timeline
- [ ] Commercial support availability (e.g., Red Hat for Linux, Elastic for Elasticsearch)
- [ ] Assessment of transitive dependencies (the library you use may depend on one with a restrictive license)

## Decision matrix: which model to choose?

| Scenario | Recommended model | Alternative |
|-----------|-------------------|-------------|
| All employees use software daily | Per user (named) | Subscription SaaS |
| Sporadic or shift-based use | Per user (concurrent) | Consumption-based |
| Infrastructure software (DB, middleware) | Per core | Subscription SaaS |
| Variable or seasonal load | Consumption-based | SaaS with flexibility |
| Limited budget, long term | Perpetual + maintenance | Open source + commercial support |
| Startup or small team | SaaS monthly | Freemium/Open source |
| Data sovereignty requirement | Perpetual on-prem | Private cloud SaaS |

## Cost metrics: beyond license price

To correctly compare vendors, calculate the **TCO (Total Cost of Ownership)** over 3-5 years:

| Cost component | Included in price | To negotiate/verify |
|---------------------|----------------------|---------------------|
| Base license | Yes | Volume discounts |
| Implementation | Sometimes | Fixed cost vs. T&M |
| Data migration | Rarely | Include in contract |
| Training | Sometimes | Number of sessions, format |
| Customization | No | PS rates, certified partner |
| Integrations | No | Included APIs, connectors |
| Premium support | No | Difference between tiers |
| Additional storage | Partially | Limits and overage cost |
| Renewal | N/A | Price increase cap |
| Exit / migration | No | See exit clause |
