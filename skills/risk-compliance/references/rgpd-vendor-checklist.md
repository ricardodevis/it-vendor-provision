# GDPR Vendor Checklist

## Determination of the Relationship

### Data Controller, Data Processor, or Joint Controller?

| Scenario | Vendor Role | Article |
|-----------|------------------|----------|
| Vendor processes data according to client instructions | Data Processor (art. 28) | Art. 28 |
| Vendor determines purposes of processing | Independent Data Controller | Art. 4.7 |
| Client and vendor jointly determine purposes | Joint Controllers | Art. 26 |
| Vendor uses client data to improve its own service | Data Controller for that purpose + potential conflict | Art. 4.7 + 28.10 |

**Red flag**: A vendor claiming to be a "processor" but in the fine print reserving the right to use data for "service improvement", "analytics", or "AI training". This makes them a data controller for those purposes, without data subject consent.

## Checklist by Article

### Art. 28 — Data Processor Contract (DPA)

**Existence and form:**
- [ ] Signed DPA exists (not just reference to website policy)
- [ ] DPA is an addendum to main contract (not a modifiable link)
- [ ] DPA clearly identifies: data controller, data processor, data, purposes, duration
- [ ] DPA includes data categories and data subject categories

**Mandatory content (art. 28.3):**
- [ ] Processes only per documented instructions from data controller (28.3.a)
- [ ] Personnel bound by confidentiality (28.3.b)
- [ ] Technical and organizational security measures per art. 32 (28.3.c)
- [ ] Sub-processor regime with prior authorization (28.3.d)
- [ ] Assistance with data subject rights — access, rectification, erasure, restriction, portability, objection (28.3.e)
- [ ] Cooperation on security, breaches, DPIAs (28.3.f)
- [ ] Deletion or return upon termination (28.3.g)
- [ ] Audit rights and information (28.3.h)

### Art. 32 — Security of Processing

**Verifiable technical measures:**
- [ ] Encryption at rest (AES-256 or equivalent)
- [ ] Encryption in transit (TLS 1.2+ minimum, 1.3 preferred)
- [ ] Pseudonymization where applicable
- [ ] Ability to restore availability after incident
- [ ] Periodic evaluation process for measure effectiveness

**Acceptable evidence:**
- SOC 2 Type II (covers most art. 32 controls)
- ISO 27001 with scope including the service
- Recent penetration test report (< 12 months)
- Completed security questionnaire (SIG, CAIQ)

### Art. 33/34 — Breach Notification

- [ ] Timeline for notifying data controller: defined (recommended ≤ 48h)
- [ ] Breach notification contents specified (nature, data, measures, DPO)
- [ ] Cooperation in investigation
- [ ] Assistance with notification to regulator (art. 33) and data subjects (art. 34) if required

**Red flag**: "The processor will notify breaches without undue delay." Without a concrete timeline, "without undue delay" can mean days or weeks.

### Art. 35 — Impact Assessment (DPIA)

**When is it necessary?**
- [ ] Large-scale processing of special categories (art. 9)
- [ ] Systematic evaluation of individuals (profiling, scoring)
- [ ] Systematic large-scale monitoring
- [ ] Use of new technologies (AI, biometrics, massive IoT)
- [ ] Processing appearing on the regulator's list (varies by country)

**If necessary, the vendor must:**
- [ ] Cooperate by providing sufficient technical information
- [ ] Facilitate risk assessment of the processing
- [ ] Assist with prior consultation to regulator if required (art. 36)

### Chapter V — International Transfers

**Data location:**
- [ ] Where is data stored? (specific country/region)
- [ ] Where is data processed? (may differ from storage location)
- [ ] Are there replicas, backups, or DR in other jurisdictions?
- [ ] Does technical support access from outside the EEA?

**If data transfers outside the EEA:**

| Mechanism | Validity | Verify |
|-----------|---------|-----------|
| Adequacy decision | Valid while in force | Updated Commission list |
| Data Privacy Framework (US) | Valid (T-553/23 Latombe) | Vendor is on DPF list |
| SCCs (2021/914) | Valid with supplementary measures | Current SCCs, not 2010 version |
| BCRs | Valid for multinational groups | Control authority approval |
| Derogations (art. 49) | Exceptional use | Not valid as habitual basis |

**Supplementary measures (EDPB Rec. 01/2020):**
- [ ] Transfer Impact Assessment (TIA) completed
- [ ] End-to-end encryption where vendor cannot access keys
- [ ] Pseudonymization before transfer
- [ ] Transparency regarding government access requests

### Data Subject Rights (Access, Rectification, Erasure, Restriction, Portability, Objection)

The vendor (data processor) must assist the data controller in:
- [ ] Access (art. 15): export data subject's data
- [ ] Rectification (art. 16): correct inaccurate data
- [ ] Erasure (art. 17): delete data ("right to be forgotten")
- [ ] Restriction (art. 18): limit processing
- [ ] Portability (art. 20): deliver data in structured format
- [ ] Objection (art. 21): cease processing
- [ ] Protection from automated decision-making (art. 22): if applicable

**Verify:**
- Does the vendor have technical mechanism to execute each right?
- What is the vendor's response timeline? (must enable data controller to comply within 1 month)
- Is there additional cost for handling rights requests?

## Sub-Processors

### Detailed Verification

- [ ] List of sub-processors published and accessible
- [ ] Location of each sub-processor (country)
- [ ] Specific function of each sub-processor
- [ ] Authorization mechanism: general or specific?
- [ ] If general authorization: change notification procedure
- [ ] Timeline for notifying of new sub-processor (≥ 30 days)
- [ ] Data controller right to object
- [ ] Consequence of objection: contract termination without penalty?
- [ ] Vendor's contractual obligation to impose same obligations on sub-processor
- [ ] Vendor liability for sub-processor acts to data controller

### Typical Sub-Processors to Monitor

| Type | Example | Risk |
|------|---------|--------|
| Cloud hosting | AWS, Azure, GCP | International transfer if region outside EEA |
| CDN | Cloudflare, Akamai | Temporary processing in indeterminate jurisdiction |
| Email/notifications | SendGrid, Twilio | Access to personal data (email, phone) |
| Analytics | Mixpanel, Amplitude | Personal data? Real anonymization? |
| Technical support | Zendesk, Intercom | Support staff access to client data |
| AI/ML | OpenAI, Anthropic | Is data used for training? Where processed? |
| Backup/DR | Secondary cloud provider | Backup location |

## Record of Processing Activities (art. 30)

The vendor (as data processor) must maintain a record including:
- [ ] Name and contact details of processor and controller
- [ ] Categories of processing activities per data controller
- [ ] International transfers and legal mechanism
- [ ] General description of security measures (art. 32)

**Request evidence**: Ask vendor to show their record of activities. If they don't have one, it signals data protection immaturity.

## Data Protection Officer (DPO)

- [ ] Does vendor have designated DPO?
- [ ] Is DPO internal or external?
- [ ] Is DPO contact information accessible?
- [ ] Is DPO communicated to the regulator?

**Note**: Not all processors must have a DPO (art. 37), but absence in a vendor processing data at scale is a red flag.
