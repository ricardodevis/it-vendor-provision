# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.5.0] - 2026-02-24

### Added

- **Worked examples** — Three complete, realistic output samples demonstrating what each core command produces:
  - `examples/vendor-assess-example.md` — CloudSync Pro v4.2 evaluation (SaaS DMS, Dublin). 6-dimension scorecard, weighted score 3.65/5.00, recommendation APPROVE WITH CONDITIONS. Demonstrates AI Act gap, price escalation risk, sub-processor notification issue
  - `examples/contract-review-example.md` — DataVault Enterprise MSA (data analytics, EUR 184K/yr, DORA applicable). 8-block traffic light analysis (1 OK, 4 NEGOTIATE, 3 RISK), 5 redline proposals with exact contract language, 5 missing clauses. Recommendation SIGN WITH CHANGES
  - `examples/license-audit-example.md` — Meridian Financial Group SaaS portfolio (14 products, 6 vendors, EUR 2.85M/yr). Complete inventory, usage analysis with traffic lights, 3 compliance risks (Tableau over-licensing, shadow IT PII, Microsoft EA renewal), 3-phase optimization plan with EUR 412K savings (14.5%)

- **Asset Management MCP Server** — First real MCP connector implementation replacing the `~~asset management tool` placeholder:
  - `connectors/asset-management-mcp/` — TypeScript MCP server (MCP SDK) with 5 tools:
    - `list_software_inventory` — Full inventory with filters (status, criticality, vendor, owner, tag)
    - `get_software_usage` — Detailed usage metrics per asset (adoption, utilization, dormant, orphaned)
    - `get_license_costs` — Spend analysis with vendor breakdown, renewal calendar, waste analysis
    - `search_software` — Free-text search across name, vendor, category, tags, owner
    - `get_vendor_summary` — Vendor relationship data (certifications, risk, contracts, review dates)
  - Embedded mock dataset: 15 SaaS products, 10 vendors, EUR 2.29M/yr — realistic data matching the license audit example
  - Both markdown and JSON output formats
  - README with setup, configuration, and production extension guide

### Changed

- README.md updated with examples section and MCP connector documentation
- Plugin structure tree updated to include `examples/` and `connectors/`

## [0.4.0] - 2026-02-23

### Added

- **Vendor Onboarding skill** — Structured operational onboarding from contract signing through first-90-days validation: security hardening, access provisioning, knowledge transfer, technical integration, training plan, go-live execution
  - `security-onboarding-checklist.md` reference — Identity & access, network, data, monitoring, compliance, and incident readiness checklists
  - `knowledge-transfer-template.md` reference — 7-part template: architecture, admin guide, integrations, support model, internal runbook, training materials, handover sign-off
  - `/vendor-onboarding` command

- **Shadow IT Governance skill** — Discovery, risk assessment, and remediation of unsanctioned SaaS and software
  - `/shadow-audit` command

- **Business continuity planning** — Vendor dependency mapping, concentration risk analysis, redundancy strategy, and continuity testing
  - `bc-vendor-dependencies.md` reference in risk-compliance

- **Vendor communication templates** — Formal templates for SLA breach notification, escalation, data requests (GDPR Art. 28), incident notification, quarterly review agenda
  - `vendor-communication-templates.md` reference in contract-lifecycle

- **SaaS spend governance / FinOps** — True-up process, cost allocation, spending forecasting, anomaly detection
  - `saas-spend-governance.md` reference in license-management

- **Vendor segmentation framework** — Strategic/Tactical/Commodity/Bottleneck classification with dependency mapping
  - `vendor-segmentation.md` reference in vendor-assessment

- **Technical acceptance criteria** — POC process, integration testing checklist, performance criteria, UAT, security validation
  - `technical-acceptance.md` reference in vendor-assessment

- **Vendor benchmarking** — Pricing, feature, and SLA benchmarking guidance with market data sources
  - `vendor-benchmarking.md` reference in vendor-assessment

- **Performance meeting structure** — QBR agenda template, escalation decision matrix, underperformance remediation plan, vendor scorecard
  - `vendor-performance-management.md` reference in contract-lifecycle

- **Board-level reporting** — Risk narrative, value realization, scenario analysis for executive board
  - `board-report-template.md` reference in vendor-reporting

- **Data classification vendor matrix** — Alignment of data sensitivity levels with vendor security capabilities
  - `data-classification-vendor-matrix.md` reference in risk-compliance

- **Sectoral compliance checklists** (optional, enable per client):
  - `dora-vendor-checklist.md` — DORA (Digital Operational Resilience Act) for financial sector
  - `ens-vendor-checklist.md` — ENS (Esquema Nacional de Seguridad) for Spanish public sector
  - `pci-dss-vendor-checklist.md` — PCI DSS v4.0 for payment card processing
  - `iso-service-management-checklist.md` — ISO 20000 (IT Service Management) + ISO 22301 (Business Continuity)

- **`~~clm tool` connector** — Contract Lifecycle Management platforms (SAP Ariba, Icertis, DocuSign CLM)

- **Cross-references** — "Related Skills" section in all 8 SKILL.md files mapping inter-skill dependencies

- **Expanded trigger phrases** — Enhanced YAML frontmatter descriptions in all skills for better natural language activation

### Changed

- Plugin description expanded to cover all new capabilities
- Keywords extended to 33 (added: gdpr, dora, pci-dss, vendor-onboarding, shadow-it, finops, saas-governance, business-continuity, data-classification, vendor-segmentation, iso-20000, iso-22301, benchmarking, board-reporting)
- CONNECTORS.md updated with 12 connectors (was 11), expanded "Used in" sections
- README.md restructured with 5 command groups (was 3), 12 customization points (was 8)

## [0.3.0] - 2026-02-23

### Added

- `/vendor-review` command — Periodic re-evaluation with historical SLA, incident, and satisfaction data
- `/audit-prep` command — External audit evidence dossier (ISO 27001, NIS2, GDPR, due diligence)
- `/vendor-exit` command — 5-phase exit execution plan with migration, data export, and communications
- `audit-evidence-map.md` reference — Traceability matrix: control → evidence → source for ISO 27001, NIS2, GDPR

## [0.2.0] - 2026-02-23

### Added

- **Contract Lifecycle skill** — Renewals, amendments, incidents, versioning, regulatory change tracking
  - `vendor-incident-protocol.md` reference — Severity classification (P1-P4), type classification, response protocols
  - `renewal-playbook.md` reference — T-180 → T-0 timeline, negotiation tactics, benchmarking
- **Vendor Reporting skill** — Executive dashboards, KPIs, risk register, traffic light system
  - `risk-register-template.md` reference — 15-field risk record, taxonomy (SEG/COM/OPE/ECO/PRO), probability×impact matrix
  - `kpi-framework.md` reference — 6 dimensions (32 KPIs), formulas, targets, alarm thresholds
- `/vendor-dashboard` command
- `/vendor-incident` command
- 7 new monitoring and reporting connectors: ~~monitoring tool, ~~ticketing system, ~~security scanner, ~~grc platform, ~~bi tool, ~~email, ~~calendar

## [0.1.0] - 2026-02-23

### Added

- Initial release
- **Vendor Assessment skill** — 6-dimension evaluation with weighted scorecard
  - `certifications-guide.md` reference
  - `evaluation-criteria.md` reference
- **IT Contract Review skill** — 8-block contract analysis
  - `sla-playbook.md` reference
  - `dpa-checklist.md` reference
  - `exit-clauses.md` reference
- **License Management skill** — Inventory, usage analysis, optimization, compliance
  - `license-types.md` reference
  - `compliance-audit.md` reference
- **Risk Compliance skill** — GDPR, NIS2, AI Act analysis
  - `rgpd-vendor-checklist.md` reference
  - `nis2-vendor-checklist.md` reference
  - `ai-act-vendor-checklist.md` reference
- `/vendor-assess`, `/contract-review`, `/license-audit`, `/rfp-generate` commands
- 4 core connectors: ~~document repository, ~~asset management tool, ~~identity provider, ~~finance tool
- CONNECTORS.md documentation
- README.md
