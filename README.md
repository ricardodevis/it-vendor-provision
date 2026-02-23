# IT Vendor Provision Plugin

Claude Cowork plugin for end-to-end IT vendor software provisioning management.

## What it does

Covers the complete lifecycle of software vendor relationships, from initial assessment through exit execution:

- **Vendor Assessment**: 6-dimensional scoring with segmentation, benchmarking, and technical acceptance criteria
- **Contract Review**: Block-by-block analysis with red flags, redline proposal, and DPA verification
- **Vendor Onboarding**: Security hardening, access provisioning, knowledge transfer, and first-90-days validation
- **License Management**: Inventory, usage audit, optimization, compliance, and SaaS spend governance (FinOps)
- **Shadow IT Governance**: Discovery, risk assessment, and remediation of unsanctioned software
- **Regulatory Risk**: GDPR, NIS2, AI Act, DORA, ENS, PCI DSS, ISO 20000/22301 compliance analysis with data classification alignment
- **Business Continuity**: Vendor dependency mapping, concentration risk, redundancy strategy, and continuity testing
- **Contract Lifecycle**: Renewals, amendments, incidents, communication templates, and performance meeting governance
- **Executive Reporting**: Portfolio dashboard, vendor KPIs, risk register, and board-level risk narrative
- **Periodic Re-evaluation**: Annual review with SLA history, incidents, satisfaction, and risk evolution
- **Audit Preparation**: Evidence dossier for ISO 27001, NIS2, GDPR, DORA, and due diligence
- **Exit Execution**: Migration plan, data export, communications, and contract closure

## Structure

```
it-vendor-provision/
├── .claude-plugin/
│   └── plugin.json
├── commands/
│   ├── vendor-assess.md        → /vendor-assess
│   ├── contract-review.md      → /contract-review
│   ├── rfp-generate.md         → /rfp-generate
│   ├── vendor-onboarding.md    → /vendor-onboarding
│   ├── license-audit.md        → /license-audit
│   ├── shadow-audit.md         → /shadow-audit
│   ├── vendor-review.md        → /vendor-review
│   ├── vendor-dashboard.md     → /vendor-dashboard
│   ├── vendor-incident.md      → /vendor-incident
│   ├── audit-prep.md           → /audit-prep
│   └── vendor-exit.md          → /vendor-exit
├── skills/
│   ├── vendor-assessment/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── certifications-guide.md
│   │       ├── evaluation-criteria.md
│   │       ├── vendor-segmentation.md
│   │       ├── vendor-benchmarking.md
│   │       └── technical-acceptance.md
│   ├── it-contract-review/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── sla-playbook.md
│   │       ├── dpa-checklist.md
│   │       └── exit-clauses.md
│   ├── vendor-onboarding/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── security-onboarding-checklist.md
│   │       └── knowledge-transfer-template.md
│   ├── license-management/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── license-types.md
│   │       ├── compliance-audit.md
│   │       └── saas-spend-governance.md
│   ├── shadow-it-governance/
│   │   └── SKILL.md
│   ├── risk-compliance/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── rgpd-vendor-checklist.md
│   │       ├── nis2-vendor-checklist.md
│   │       ├── ai-act-vendor-checklist.md
│   │       ├── dora-vendor-checklist.md
│   │       ├── ens-vendor-checklist.md
│   │       ├── pci-dss-vendor-checklist.md
│   │       ├── iso-service-management-checklist.md
│   │       ├── bc-vendor-dependencies.md
│   │       └── data-classification-vendor-matrix.md
│   ├── contract-lifecycle/
│   │   ├── SKILL.md
│   │   └── references/
│   │       ├── vendor-incident-protocol.md
│   │       ├── renewal-playbook.md
│   │       ├── vendor-communication-templates.md
│   │       └── vendor-performance-management.md
│   └── vendor-reporting/
│       ├── SKILL.md
│       └── references/
│           ├── risk-register-template.md
│           ├── kpi-framework.md
│           ├── audit-evidence-map.md
│           └── board-report-template.md
├── CONNECTORS.md
└── README.md
```

## Available commands

### Assessment and contracting
| Command | Description |
|---------|-------------|
| `/vendor-assess` | Evaluates an IT vendor with 6-dimensional scoring and segmentation |
| `/contract-review` | Reviews software contract with risk analysis and redline proposal |
| `/rfp-generate` | Generates structured RFP for software procurement |

### Onboarding and governance
| Command | Description |
|---------|-------------|
| `/vendor-onboarding` | Structured onboarding from contract signing through 90-day validation |
| `/shadow-audit` | Discovers and assesses unsanctioned SaaS and software usage |

### Continuous management
| Command | Description |
|---------|-------------|
| `/license-audit` | Audits software licenses: inventory, usage, savings, FinOps |
| `/vendor-review` | Periodic re-evaluation with SLA history and incidents |
| `/vendor-dashboard` | Executive portfolio report for leadership committee |
| `/vendor-incident` | Manages vendor incident with response protocol |

### Audit and exit
| Command | Description |
|---------|-------------|
| `/audit-prep` | Prepares evidence for external audit (ISO 27001, NIS2, GDPR, DORA) |
| `/vendor-exit` | Executes exit plan: migration, data, contract closure |

## Connectors

The plugin uses `~~connector` notation for tool-agnostic references. See `CONNECTORS.md` for full details.

### Core connectors
| Connector | Function | Examples |
|----------|---------|----------|
| `~~document repository` | Contract and documentation repository | iManage, SharePoint, Google Drive |
| `~~asset management tool` | Software and device inventory | ServiceNow CMDB, Snow, Flexera |
| `~~identity provider` | Access management and SSO | Okta, Entra ID, Google Workspace |
| `~~finance tool` | Software invoices and spend | SAP, NetSuite, Coupa |

### Monitoring and reporting connectors
| Connector | Function | Examples |
|----------|---------|----------|
| `~~monitoring tool` | Uptime, performance, alerts | Datadog, New Relic, Pingdom |
| `~~ticketing system` | Support, incidents, tracking | Jira, ServiceNow, Zendesk |
| `~~security scanner` | Third-party security posture | SecurityScorecard, BitSight |
| `~~grc platform` | Governance, risk, and compliance | Vanta, Drata, ServiceNow GRC |
| `~~bi tool` | Interactive dashboards | Power BI, Tableau, Looker |
| `~~clm tool` | Contract lifecycle management | SAP Ariba, Icertis, DocuSign CLM |
| `~~email` | Vendor communication | Gmail, Outlook |
| `~~calendar` | Renewal alerts and reviews | Google Calendar, Outlook Calendar |

## Client customization

1. **Connectors**: Replace `~~` with client tools (see `CONNECTORS.md`)
2. **Vendor segmentation**: Classify portfolio using `vendor-assessment/references/vendor-segmentation.md`
3. **Evaluation weights**: Adjust in `vendor-assessment/SKILL.md`
4. **Data classification**: Align with vendor capabilities in `risk-compliance/references/data-classification-vendor-matrix.md`
5. **Sector requirements**: Enable relevant checklists in `risk-compliance/references/` (DORA, PCI DSS, ENS, ISO 20000/22301)
6. **SLA thresholds**: Adjust in `it-contract-review/references/sla-playbook.md`
7. **KPIs and thresholds**: Adjust in `vendor-reporting/references/kpi-framework.md`
8. **License policy**: Adapt in `license-management/SKILL.md`
9. **Communication templates**: Customize in `contract-lifecycle/references/vendor-communication-templates.md`
10. **Incident protocol**: Adjust response times and escalation in `contract-lifecycle/references/vendor-incident-protocol.md`
11. **Audit evidence map**: Adapt in `vendor-reporting/references/audit-evidence-map.md`
12. **Board reporting**: Configure narrative focus in `vendor-reporting/references/board-report-template.md`

## Requirements

- Claude Cowork (desktop app for Mac or Windows)
- Optional: MCP connectors for client tools

## Author

Ricardo Devis / Bilbao.AI

## License

Apache-2.0
