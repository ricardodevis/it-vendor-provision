# Vendor Segmentation and Dependency Mapping

## Why Segmentation Matters

Treating all vendors equally is a procurement sin that wastes resources on commodity vendors while under-managing strategic relationships. A single strategic vendor failure cascades across operations. A commodity vendor price spike gets absorbed. Segmentation ensures your management intensity—and budget—flows to vendors that matter.

## The Four-Category Segmentation Model

### Strategic Vendors
**Profile:** High business impact + high switching cost

**Examples:** ERP systems, CRM platforms, core banking infrastructure, compliance-critical data repositories

**Why they're strategic:** Revenue dependency, business process criticality, years of integration investment, data lock-in, contractual commitments

**Management approach:**
- Dedicated relationship manager from your side
- Quarterly business reviews with executive sponsor participation
- Formal multi-year roadmap alignment sessions
- Co-innovation planning and beta testing participation
- Regular (at least annually) contract review and renewal planning
- Proactive capacity planning and upgrade roadmaps
- SLA penalties with teeth and remediation escalation paths

**Budget allocation:** 40-50% of vendor management effort

### Tactical Vendors
**Profile:** High business impact + low switching cost

**Examples:** Specialized analytics platforms, marketing automation, niche integration tools, vertical-specific software

**Why they're tactical:** Business-critical functionality, but viable alternatives exist and data portability is reasonable

**Management approach:**
- Semi-annual performance reviews with functional stakeholders
- Performance-focused metrics (not relationship-focused)
- Competitive benchmarking exercises annually
- Clear trigger points for replacement evaluation
- Standard SLAs with escalation procedures
- Active monitoring of competitive landscape

**Budget allocation:** 30-35% of vendor management effort

### Commodity Vendors
**Profile:** Low business impact + low switching cost

**Examples:** Office suite SaaS, travel booking platforms, HR administrative tools, collaboration apps, standard software licenses

**Why they're commodity:** Interchangeable providers, low switching cost, easy data export, mature markets with many alternatives

**Management approach:**
- Annual renewal and cost optimization review
- Minimal day-to-day relationship management
- Procurement-driven (not IT-driven) relationship
- Focus on license optimization and usage consolidation
- Standardized SLAs, take-it-or-leave-it terms
- Bulk negotiation for discounts, not customization

**Budget allocation:** 10-15% of vendor management effort

### Bottleneck Vendors
**Profile:** Low business impact + high switching cost

**Examples:** Legacy niche systems, proprietary data formats with no export, single-purpose tools with integrated data

**Why they're bottlenecks:** Technical debt, poor market alternatives, migration complexity exceeds business value

**Management approach:**
- Active exit planning with parallel path development
- Semi-annual reviews with explicit dependency reduction focus
- Aggressive data extraction and format conversion projects
- Freeze on new customizations or integrations
- SLAs focused on stability, not growth
- Budget allocated to reduce, not expand, dependency

**Budget allocation:** 5-10% of vendor management effort, but with high capital allocation to exit projects

---

## Segmentation Criteria Matrix

Classify vendors using this two-axis framework:

### Business Impact Scoring (High vs. Low)
- **Revenue dependency:** Direct revenue correlation? Revenue percentage at risk?
- **User count:** What percentage of organization uses this daily?
- **Data sensitivity:** Contains regulated data, customer PII, or competitive intelligence?
- **Process criticality:** Process cannot operate without this vendor? Manual workaround costs?
- **Compliance requirement:** Regulatory mandate to use this specific solution?

**Score 3-5 = High Impact | Score 1-2 = Low Impact**

### Switching Cost Scoring (High vs. Low)
- **Data portability:** How easily can you extract data in standard formats?
- **Integration depth:** Single API endpoint (low) vs. 10+ integrated systems (high)?
- **Contractual lock-in:** Remaining contract term, early termination fees, capacity commitments?
- **Market alternatives:** How many viable alternatives exist with similar functionality?
- **Migration complexity:** Estimated migration effort in months and FTE allocation?
- **Customization sunk cost:** Custom configurations, developments, or integrations requiring rework?

**Score 3-5 = High Switching Cost | Score 1-2 = Low Switching Cost**

---

## Dependency Mapping Template

For each strategic and bottleneck vendor, complete this mapping:

**Vendor Name:** [Name]

**Primary Business Processes Supported:**
1. [Process name]
2. [Process name]
3. [Process name]

**Data Flows:**
- Inbound from vendor: [data types, frequency, volume]
- Outbound to vendor: [data types, frequency, volume]
- Vendor data stored internally: [data types, retention period]

**Users Affected:**
- Direct: [departments, count]
- Indirect: [downstream processes, count]

**Upstream Systems (feed data to this vendor):**
- [System name]
- [System name]

**Downstream Systems (consume data from this vendor):**
- [System name]
- [System name]

**Single Points of Failure:**
- If vendor goes down: [impact on processes, SLA impact, revenue impact]
- If vendor loses your data: [recovery time estimate, backup recovery method]
- If vendor discontinues product: [remediation timeline, alternative cost]

**Alternative Vendor Identified:**
- Primary alternative: [name, switching cost estimate, capability gaps]
- Secondary alternative: [name, switching cost estimate, capability gaps]
- Build vs. buy evaluated: Yes / No

---

## Review Frequency by Segment

| Segment | Standard Frequency | Exception Triggers | Documentation |
|---------|-------------------|-------------------|-----------------|
| Strategic | Quarterly (business) + monthly ops | Post-incident, major change, breach | Minutes, action items, roadmap alignment |
| Tactical | Semi-annual | SLA breach, competitive threat, price change | Performance dashboard, action items |
| Commodity | Annual | License abuse, price spike | Cost analysis, contract terms |
| Bottleneck | Semi-annual + exit planning review | Dependency increase, market disruption | Exit plan progress, alternatives analysis |

---

## Budget Allocation Framework by Segment

Align your procurement and IT management headcount to business risk:

- **Strategic (40-50%):** Senior procurement, relationship managers, technical architects, legal review cycles
- **Tactical (30-35%):** Mid-level procurement, functional specialists, performance monitoring
- **Commodity (10-15%):** Junior procurement, license management, basic SLA tracking
- **Bottleneck (5-10%):** Exit project management, migration architects, technical debt reduction

---

## Vendor Portfolio Visualization

Plot your vendors on a 2×2 matrix to visualize your portfolio:

```
                High
              Impact
                 │
     STRATEGIC   │   TACTICAL
    (Protect)   │  (Monitor)
    ┌───────────┼───────────┐
    │           │           │
    │    ERP    │  Analytics│
    │   Core DB │  Automtn. │
    │   CRM     │           │
    │           │           │
  ──┼───────────┼───────────┼──  Low ← Switching Cost → High
    │           │           │
    │  Commodity│ BOTTLENECK│
    │(Optimize) │ (Exit)    │
    │  Travel   │ Legacy    │
    │  Suite    │ Systems   │
    │           │           │
                │
              Low
            Impact
```

---

## Migration to the Framework: Implementation Checklist

### Step 1: Inventory Current Vendors (Week 1)
- [ ] List all active vendors (contracts, SaaS subscriptions, maintenance agreements)
- [ ] Document business owner and primary contact for each
- [ ] Gather contract dates, renewal dates, current spend

### Step 2: Impact Assessment (Week 2)
- [ ] For each vendor, score business impact (1-5 scale)
- [ ] Interview department heads about criticality
- [ ] Document dependent systems and processes
- [ ] Identify data stored or transferred

### Step 3: Switching Cost Assessment (Week 2-3)
- [ ] Evaluate data portability (attempt sample export if possible)
- [ ] Document integration touchpoints (count distinct systems)
- [ ] Review contracts for lock-in clauses and termination costs
- [ ] Research market alternatives and switching effort

### Step 4: Segmentation Placement (Week 3)
- [ ] Plot each vendor on impact vs. switching cost matrix
- [ ] Validate segment placement with business stakeholders
- [ ] Document rationale for boundary cases (vendors near quadrant lines)
- [ ] Get stakeholder sign-off on segmentation

### Step 5: Management Model Rollout (Week 4)
- [ ] Establish review cadence for each segment
- [ ] Assign relationship owners by vendor
- [ ] Schedule inaugural reviews
- [ ] Create vendor management calendar and documentation process

### Quick Assessment Checklist for New Vendors
Before adding a vendor, assess:
- [ ] Will this vendor be used by more than 10% of organization? (YES = high impact)
- [ ] Is replacement possible within 6 months? (NO = high switching cost)
- [ ] Can we export our data in standard format within 48 hours? (NO = lock-in)
- [ ] Are there at least 3 viable alternatives in market? (NO = high switching cost)
- [ ] Is this replacing an existing vendor or new capability? (NEW = likely tactical or commodity)

**Result:** If 3+ "no" answers = strategic or bottleneck candidate → escalate to vendor management review before procurement.

---

## Governance Rules

1. **No vendor moves to Strategic without executive approval.** The relationship intensity and budget allocation of strategic vendors demands leadership alignment.

2. **Bottleneck vendors get exit projects.** Do not maintain bottleneck status longer than 2 years. Allocate exit budget every cycle.

3. **Segment boundaries shift.** Quarterly, review vendors near segment boundaries. Market disruption, integration changes, and switching cost reduction happen constantly.

4. **Vendor portfolio balance matters.** If strategic vendors exceed 60% of external spend, diversify. If commodity vendors consume 30%+ of management effort, automate or consolidate.

5. **New vendor default = Commodity or Tactical.** Strategic classification requires explicit business case and multi-year plan. Bottleneck classification requires documented exit strategy.
