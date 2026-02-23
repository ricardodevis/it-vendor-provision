# EU AI Act Vendor Checklist

## Context: EU AI Act (2024/1689)

The EU AI Regulation establishes a risk-based framework for AI systems. For software provisioning by IT vendors, what matters is: if the software incorporates AI, you have obligations as a deployer (professional user) depending on the system's risk classification.

## Roles in the EU AI Act

| Role | Who | Main Obligations |
|-----|----------|------------------------|
| **Provider** (AI system vendor) | Develops and markets the system | Compliance, technical documentation, registration, quality management |
| **Deployer** (who uses it) | Uses the system in professional activity | Human oversight, transparency, compliant use |
| **Importer** | Introduces system into EU from outside | Verify provider compliance |
| **Distributor** | Distributes without modification | Verify compliance |

**Your organization is a deployer** when it contracts software with AI components for professional use.

## Step 1: Does the Software Incorporate AI?

**Definition of AI system (art. 3.1):**
A machine-based system that, given human-defined objectives, generates outputs such as predictions, recommendations, decisions, or content that can influence physical or virtual environments.

**Indicators the software incorporates AI:**
- Generates text, images, code, or content (generative AI)
- Classifies or categorizes data automatically
- Predicts behaviors, risks, or outcomes
- Recommends actions based on patterns
- Processes natural language (NLP, chatbots, sentiment analysis)
- Recognizes images, voice, or biometric patterns
- Optimizes processes through machine learning

**If vendor says "it's not AI, it's machine learning" or "it's just an algorithm"**: Verify against the art. 3.1 definition. The regulation's definition is broad and includes ML, deep learning, and advanced statistical techniques.

## Step 2: Risk Classification

### Prohibited Practices (art. 5)
Systems that **cannot ever** be used:
- Subliminal manipulation causing harm
- Exploitation of vulnerabilities of specific groups
- Social scoring by public authorities
- Real-time biometric identification in public spaces (with exceptions)
- Emotion inference in work or education (except for security)
- Biometric categorization to infer race, sexual orientation, etc.
- Mass scraping of internet for facial recognition databases

**Verify**: The software does not incorporate any of these functionalities, not even as a secondary feature.

### High Risk (Annex III)

High-risk AI systems include those used in:

| Category | Examples in Business Context |
|-----------|--------------------------------|
| Biometrics | Identity verification, biometric access control |
| Critical infrastructure | Network management, industrial control systems |
| Education and training | Candidate assessment in e-learning, student scoring |
| Employment and HR | CV screening, performance evaluation, hiring decisions |
| Essential services | Credit scoring, insurance evaluation, public services |
| Law enforcement | Risk assessment, fraud detection (if involving decisions about people) |
| Migration and border control | Document verification |
| Justice and democracy | Case law analysis for judicial decisions |

**Practical criterion**: If the AI takes or assists decisions significantly affecting individuals (employment, credit, service access), it is likely high-risk.

### Limited Risk (art. 50 — Transparency Obligations)
- Chatbots: user must know they interact with AI
- AI-generated content: must be labeled as such
- Deepfakes: must be tagged
- Generative AI: content must be identifiable as AI-generated

### Minimal or No Risk
- Spam filters
- Product recommendations (not affecting rights)
- Internal process optimization (no impact on people)
- Productivity tools with AI (writing assistants, summaries, etc.)

## Step 3: Deployer Obligations by Risk Level

### For High-Risk Systems (art. 26)

| Obligation | What to Do | Vendor Evidence Needed |
|-----------|-----------|----------------------------------|
| Compliant use | Follow provider instructions | Use manual, technical documentation |
| Human oversight | Ensure trained personnel supervise | System design allowing human override |
| Input data | Ensure input data relevant and representative | Training data documentation and input requirements |
| Monitoring | Monitor system performance, report incidents | Logs, performance metrics, incident reporting channels |
| DPIA if personal data | Conduct data protection impact assessment | Sufficient technical documentation for DPIA |
| Inform employees/affected | Transparency about AI use in decisions | Documentation on what AI decides and how |
| EU database registration | If applicable (art. 49) | Provider must have registered the system |

### For Limited-Risk Systems

| Obligation | What to Do |
|-----------|-----------|
| Transparency | Inform users they interact with AI |
| Content labeling | Tag AI-generated content |
| Detection | Systems to detect AI-generated content |

### For Minimal Risk
- No specific Act obligations
- Recommended: best practices in transparency and AI ethics

## Checklist for the Vendor

### Documentation to Request

**Always (regardless of risk):**
- [ ] Vendor's statement on whether software incorporates AI
- [ ] If yes: description of AI components and function
- [ ] Vendor's risk classification (with justification)
- [ ] Vendor's responsible AI or AI ethics policy

**If High Risk:**
- [ ] EU Declaration of Conformity (art. 47)
- [ ] CE marking (art. 48)
- [ ] Technical documentation (art. 11): design, development, training data, performance
- [ ] Quality management system (art. 17)
- [ ] EU database registration (art. 49)
- [ ] Detailed instructions for use (art. 13)
- [ ] Performance metrics: accuracy, precision, recall, bias assessment
- [ ] Integrated human oversight mechanism
- [ ] Post-market monitoring plan

**If Generative AI (general-purpose model — art. 51-56):**
- [ ] Technical documentation of the model
- [ ] Copyright compliance policy
- [ ] Summary of training data
- [ ] If systemic risk: model evaluation, mitigation measures, incident reporting

### Vendor AI Governance
- [ ] Does vendor have ISO 42001 or equivalent AI governance framework?
- [ ] Does vendor have responsible AI officer (Chief AI Officer or equivalent)?
- [ ] Does vendor conduct bias and fairness assessments?
- [ ] Does vendor have AI-specific incident management process?
- [ ] Does vendor document design decisions and trade-offs?
- [ ] Does vendor publish transparency reports on AI use?

### Data and Privacy Specific to AI
- [ ] What client data does the AI system use?
- [ ] Does the system use client data to train or improve the model?
- [ ] If yes: is there opt-out? Is it opt-in or opt-out by default?
- [ ] Where is AI data processed? (may differ from general processing)
- [ ] Is data shared with third parties for AI processing?
- [ ] Does vendor use third-party models (OpenAI, Anthropic, etc.)? If yes: what data does it send them?

## Implementation Timeline

| Date | What Takes Effect |
|-------|-------------------|
| 2 February 2025 | Prohibited practices (art. 5) + AI literacy (art. 4) |
| 2 August 2025 | General-purpose models (art. 51-56) + Governance |
| 2 August 2026 | High-risk systems from Annex III + Rest of obligations |
| 2 August 2027 | High-risk systems from Annex I (regulated products) |

**Practical implication**: For software being contracted now, verify the vendor has a compliance plan for the implementation dates. Don't wait for the regulation to take effect to assess.

## Red Flags in AI Vendors

| Situation | Why It's a Problem |
|-----------|----------------------|
| "Our software is not AI, it's an advanced algorithm" | Possible regulatory evasion |
| No performance metrics provided | Cannot demonstrate system works as claimed |
| "Client data is not used for training" but DPA says otherwise | Contradiction to resolve |
| No human override mechanism | Impossible to meet oversight obligation |
| Cannot explain how the system makes decisions | Incompatible with transparency requirements |
| No AI Act compliance plan | Regulatory immaturity, compliance risk transferred to deployer |
| Model trained with questionable data sources (unauthorized scraping) | Copyright risk + reputational risk |
| No documented bias evaluation | If high-risk, it's mandatory (art. 10) |
