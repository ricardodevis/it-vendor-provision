---
name: rfp-generate
description: >
  Generates a structured RFP (Request for Proposal) for
  IT software procurement, including technical requirements,
  security, compliance, SLA, pricing and evaluation criteria.
user_instructions: >
  Describe the software you need to procure: functionality,
  sector, number of users, data it will process, required
  integrations and any specific requirements.
---

# Command: Generate RFP

## Instructions

When executing this command:

1. **Load base knowledge** from all plugin skills:
   - `${CLAUDE_PLUGIN_ROOT}/skills/vendor-assessment/SKILL.md` (evaluation criteria)
   - `${CLAUDE_PLUGIN_ROOT}/skills/it-contract-review/SKILL.md` (contractual requirements)
   - `${CLAUDE_PLUGIN_ROOT}/skills/risk-compliance/SKILL.md` (regulatory requirements)

2. **Gather information from the user:**
   - Functional description of needed software
   - Organization's sector (for sectoral requirements)
   - Number of users and usage profile
   - Types of data it will process (personal, sensitive, regulated)
   - Required integrations with existing systems
   - Estimated budget (if available)
   - Desired implementation timeline
   - Data location requirements

3. **Generate RFP** in Markdown with the following sections:

   **A. General Information**
   - RFP objective
   - Organization description (placeholder for client completion)
   - Process timeline (publication, questions, answers, evaluation, award)
   - Instructions for submitting proposal

   **B. Functional Requirements**
   - Mandatory features (must-have)
   - Desirable features (nice-to-have)
   - Required integrations
   - UX/accessibility requirements

   **C. Technical Requirements**
   - Architecture (cloud, on-prem, hybrid)
   - APIs and extensibility
   - Performance and scalability
   - Compatibility with existing stack

   **D. Security and Compliance Requirements**
   - Minimum required certifications (by criticality)
   - GDPR requirements: DPA, data location, sub-processors
   - NIS2 requirements (if applicable): incident management, continuity, vulnerabilities
   - AI Act requirements (if applicable): classification, transparency, monitoring
   - Specific sectoral requirements

   **E. Service Requirements**
   - Availability SLA
   - Support: levels, hours, response times
   - Implementation and migration
   - Training

   **F. Commercial Requirements**
   - Required pricing model
   - Cost structure (mandatory breakdown)
   - Exit and portability conditions
   - Contract duration and renewal

   **G. Evaluation Criteria**
   - Table with dimensions, weight and criteria (based on vendor-assessment framework)
   - Evaluation process: phases and timeline
   - Vendor response format

   **H. Annexes**
   - Security questionnaire (based on plugin checklists)
   - Compliance questionnaire (GDPR, NIS2, AI as applicable)
   - Pricing response template

4. **Adapt stringency** to sector and software criticality:
   - Low criticality software → essential requirements
   - High criticality software → complete + sectoral requirements
   - Software with AI → add specific AI Act section

5. **Save the RFP** in the user's folder
