# IT Vendor Risk Register Template

## Register structure

The risk register is a living document that must be updated at minimum quarterly and immediately on any incident or relevant change.

## Fields per risk

| Field | Description | Example |
|-------|------------|---------|
| **ID** | Unique identifier (R-XXX) | R-001 |
| **Identification date** | When identified | 2026-01-15 |
| **Vendor** | Vendor name | Acme SaaS |
| **Software/service** | What service is affected | CRM Cloud |
| **Risk category** | Type of risk (see taxonomy below) | Security |
| **Description** | Concrete description of risk | Vendor stores data in US without evidence of DPF |
| **Probability** | Low / Medium / High | Medium |
| **Impact** | Low / Medium / High / Critical | High |
| **Risk level** | Result of probability × impact matrix | High |
| **Affected regulation** | GDPR, NIS2, AI Act, contractual | GDPR Chapter V |
| **Mitigation** | Current or planned mitigation measure | Request DPF evidence from vendor |
| **Status** | Identified / In mitigation / Accepted / Monitored / Closed | In mitigation |
| **Owner** | Responsible for managing this risk | DPO |
| **Review date** | Next scheduled review | 2026-04-01 |
| **Closure date** | If closed, when | - |
| **Notes** | Additional information | Vendor promised response by 2026-02-28 |

## Risk taxonomy

### Security risks
- **SEG-01**: Vendor data breach
- **SEG-02**: Unpatched vulnerabilities
- **SEG-03**: Unauthorized access to customer data
- **SEG-04**: Insufficient encryption (at rest or in transit)
- **SEG-05**: No MFA for administrative access
- **SEG-06**: No periodic penetration testing
- **SEG-07**: Uncontrolled subprocessor chain

### Compliance risks
- **COM-01**: Non-existent or outdated DPA
- **COM-02**: International transfer without legal basis
- **COM-03**: Loss of certification (SOC 2, ISO 27001)
- **COM-04**: NIS2 non-compliance (incident management, continuity)
- **COM-05**: AI system not classified per AI Regulation
- **COM-06**: Unauthorized subprocessors
- **COM-07**: Missing DPO where required

### Operational risks
- **OPE-01**: Insufficient SLA for service criticality
- **OPE-02**: Repeated SLA non-compliance
- **OPE-03**: Insufficient support (response time, quality)
- **OPE-04**: No vendor continuity/DR plan
- **OPE-05**: Dependency on key person at vendor
- **OPE-06**: Vendor roadmap diverges from customer needs

### Economic risks
- **ECO-01**: Technology lock-in (prohibitive migration cost)
- **ECO-02**: Uncontrolled price increases (no cap)
- **ECO-03**: Unpredictable pricing model (consumption-based without cap)
- **ECO-04**: Over-licensing (paying for unused seats)
- **ECO-05**: Excessive early exit penalty
- **ECO-06**: Hidden costs (implementation, migration, premium support)

### Vendor risks
- **PRO-01**: Vendor financial viability (unfunded startup, losing money)
- **PRO-02**: Acquisition/control change
- **PRO-03**: Product discontinuation
- **PRO-04**: Excessive concentration (too much spend on one vendor)
- **PRO-05**: Conflict of interest (vendor works with direct competitor)
- **PRO-06**: Risky jurisdiction (surveillance laws, instability)

## Risk matrix

```
                    IMPACT
              Low  Medium  High  Critical
P   High    | Med | High  | Crít | Crít  |
R   Medium  | Low | Med   | High | Crít  |
O   Low     | Low | Low   | Med  | High  |
B
```

### Impact criteria

| Level | Financial | Operational | Regulatory | Reputational |
|-------|-----------|-----------|-------------|-------------|
| **Critical** | > 500K€ | Business halt > 24h | GDPR/NIS2 sanction probable | National/sector press |
| **High** | 100-500K€ | Serious degradation > 8h | Authority investigation | Customers aware |
| **Medium** | 10-100K€ | Minor degradation < 8h | Documented non-compliance | Internal impact |
| **Low** | < 10K€ | No operational impact | Correctable minor deviation | No impact |

*Note: Financial thresholds should be adjusted to client size.*

### Probability criteria

| Level | Expected frequency | Indicators |
|-------|-------------------|------------|
| **High** | Likely within 12 months | Incident history, immature vendor, regulated sector |
| **Medium** | Possible within 12-24 months | Some risk indicators but partial mitigations |
| **Low** | Unlikely within 24 months | No indicators, mature vendor, strong mitigations |

## Risk register management process

### Risk creation
1. Anyone can identify a risk (audit, incident, regulatory change, periodic review)
2. Document with all template fields
3. Assign owner
4. Evaluate probability × impact
5. Define mitigation and timeline

### Quarterly review
1. Review all open risks
2. Update probability and impact if changed
3. Verify mitigation status
4. Identify new risks
5. Close risks mitigated or no longer applicable
6. Escalate critical risks to steering committee

### Risk closure
A risk is closed when:
- Mitigation has been implemented and verified
- Risk no longer exists (vendor changed, regulation doesn't apply)
- Risk has been formally accepted by executive board (document decision)

**Never close a risk just because "nothing has happened."**

## Risk register reporting

### For steering committee (quarterly)

**Executive summary of register:**
- Total open risks by level (critical, high, medium, low)
- Evolution vs. prior quarter
- Top 5 risks by level
- New risks this quarter
- Closed risks this quarter
- Actions requiring committee approval

### For IT team (monthly)

**Operational detail:**
- Complete risk list with mitigation status
- Pending actions with owner and deadline
- Metrics: average mitigation time, % of risks on schedule
