# ACCOUNT REGISTRY
Governance-controlled identity registry (authoritative).

> This is a governance artifact. It MUST NOT be used as website content.

## Registry (machine-verifiable)

```yaml
registry_version: 1
status: ACTIVE

scope:
  org: trizel-ai-site
  repo: trizel-site
  branch: main

publishing_account:
  canonical_id: PUB-001
  platform: github
  handle: trizel-admin

permissions_model:
  least_privilege: true
  required_repo_permission: admin
  required_2fa: true

allowed_actions:
  - github_pages.enable
  - github_pages.configure_source(branch=main)
  - github_pages.set_visibility(public)

forbidden_actions:
  - dns.configure
  - custom_domain.set
  - governance.modify
  - account_registry.modify
  - branch_protection.modify

change_control:
  requires_governance_approval: true
  approval_reference_required: true
  audit_required: true

notes:
  - "Publishing actions are allowed ONLY via the publishing account listed above."
  - "Any activation must be verified against this registry before execution."
