# Renewal and Renegotiation Playbook

## Principle

Renewing a software contract is not an administrative formality. It is the only window you have to fix everything that doesn't work, capture value from your customer loyalty, and eliminate clauses you accepted at signature out of haste or ignorance. If you let renewal execute automatically, you are signing with eyes closed a second time.

## Renewal timeline

### T-180 days: Strategic evaluation

**Questions to answer:**
1. Is the software still needed? (are there features we no longer use?)
2. Is the software still the best option? (has the market changed?)
3. Are we satisfied with the vendor? (SLA, support, roadmap)
4. Have there been relevant incidents? (review incident registry)
5. Do we need more/fewer licenses? (review usage data)
6. Are there regulatory changes requiring new clauses?

**Decision:**
- **CONTINUE** → Proceed with renegotiation
- **EVALUATE ALTERNATIVES** → Execute vendor-assessment in parallel (maximum 2-3 alternatives)
- **INITIATE EXIT** → Activate migration plan (exit clause)

### T-120 days: Negotiation preparation

**Gather:**
- Usage history (metrics from ~~monitoring tool and ~~identity provider)
- Incident and SLA history (incident registry)
- Total cumulative spend with vendor
- Current market pricing (competitors, benchmarks)
- Current contract terms (especially: increment cap, minimums)
- Invoices from latest period (find in ~~finance tool)

**Prepare negotiation position:**

| Element | Your ideal position | Your red line | Their likely position |
|----------|------------------|---------------|---------------------|
| Price | -10% from current | +IPC maximum | +15-30% |
| Duration | 1 year (flexibility) | 2 years with break clause | 3 years (lock-in) |
| SLA | Improve per incidents | Maintain current | Reduce commitments |
| Users | Adjust to real usage | Maintain with flex ±10% | Increase |
| Exit | Improve portability | Maintain current | Tighten |
| DPA | Update to current regulations | Maintain | "We already comply" |

### T-90 days: Active negotiation

**Negotiation tactics:**

**If you want to renew (moderate bargaining power):**
- Present at least 1 evaluated alternative (even if you won't migrate)
- Negotiate with data: "Uptime was 99.87%, not 99.95% as contract states. We expect a credit."
- Ask for concrete improvements, not generic ones: "We need SSO included, not as add-on"
- Offer multi-year commitment ONLY in exchange for: fixed price, concrete improvements, increment cap

**If you are evaluating exit (strong bargaining power):**
- Do not reveal the decision until migration plan is ready
- Negotiate aggressively: vendor prefers discounted customer to lost customer
- Request extended transition period and migration assistance

**What you should NEVER do:**
- Reveal your maximum budget
- Accept the first offer
- Negotiate by email without phone/video call (lose 80% of leverage)
- Sign under pressure of "this offer expires Friday"
- Assume market price is vendor price

### T-30 days: Closure

**Before signing renewal:**
- [ ] Verify all negotiated points are in the document
- [ ] Pass renewed contract through skill `it-contract-review`
- [ ] Verify DPA is updated
- [ ] Verify subprocessor list is updated
- [ ] Confirm new SLAs in writing (not "we'll discuss it later")
- [ ] Archive previous contract as historical version

### T-0: Post-renewal

- [ ] Update contract registry with new terms
- [ ] Communicate relevant changes internally
- [ ] Schedule alerts for next renewal
- [ ] Document negotiation result (for future reference)
- [ ] If concessions were made: document what was given and why (to avoid repeating)

## Price benchmarking

### Reference sources

| Source | What to get | How |
|--------|------------|------|
| Vendor public pricing | List price | Vendor website |
| Competitor pricing | Market comparison | Websites, demos, quick RFI |
| Analysts (Gartner, Forrester) | IT spending benchmarks by sector | Reports (if you have access) |
| Network contacts | Real price others pay | Networking, IT communities |
| Own history | Evolution of price paid | ~~finance tool |

### Indicators you are overpaying

- Your unit price is > 20% of public price (after expected volume discount)
- Annual increase exceeds IPC + 5% without justification (new features, more service)
- You pay for modules you don't use (verify with usage data)
- You pay for more licenses than you actively use (verify with ~~identity provider)
- Vendor won't negotiate: sign you have no alternative (or they believe you don't)

## Documentation of negotiation

**Archive after each renewal:**
- Vendor's initial offer
- Client's counter-offer
- Intermediate offers (if multiple rounds)
- Final signed agreement
- Internal negotiation notes (what was given, what was gained, what is deferred)
- Benchmarks used as reference
- Alternative evaluation (if conducted)

This documentation is gold for your next renewal. Without it, you start every negotiation from zero. With it, you have 3-5 years of history the vendor knows you have.
