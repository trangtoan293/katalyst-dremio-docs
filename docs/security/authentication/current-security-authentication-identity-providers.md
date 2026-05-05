---
url: /security/authentication/identity-providers
title: "Identity Providers | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.954649916
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * Identity Providers

Version: current [26.x]
On this page
# Identity Providers
Identity providers enable centralized authentication and user management for your Dremio environment. Integrating with an external identity system allows you to:
  * Centralize user management – Maintain user accounts in a single system
  * Enable single sign-on – Users authenticate once to access multiple applications
  * Enhance security – Leverage enterprise-grade authentication mechanisms
  * Simplify administration – Reduce the overhead of managing separate user accounts
  * Ensure compliance – Meet organizational security and audit requirements


## Dremio Identity Provider Types[​](/security/authentication/identity-providers#dremio-identity-provider-types "Direct link to Dremio Identity Provider Types")
### OpenID Connect (OIDC) Providers[​](/security/authentication/identity-providers#openid-connect-oidc-providers "Direct link to OpenID Connect \(OIDC\) Providers")
An OpenID Connect (OIDC) identity provider is a service that verifies a user's identity and manages their access to resources. OIDC providers use the OpenID Connect protocol to perform these functions. Enterprise OIDC providers can be configured as external token providers, which allows applications to access protected user data.
When to use OIDC:
  * Modern cloud-based identity systems
  * Environments requiring OAuth 2.0 integration
  * Organizations using federated identity management
  * Applications requiring token-based authentication


For more information, see the following:
  * [Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id)
  * [OpenID Providers with SCIM](/security/authentication/identity-providers/oidc)


### LDAP[​](/security/authentication/identity-providers#ldap "Direct link to LDAP")
Lightweight Directory Access Protocol (LDAP) refers to an external service that manages user data stored within an LDAP directory and provides that user data to Dremio.
When to use LDAP:
  * On-premises Active Directory environments
  * Legacy systems with existing LDAP infrastructure
  * Organizations requiring direct directory integration
  * Environments where OIDC is not available


For more information, see:
  * [LDAP](/security/authentication/identity-providers/ldap)


Was this page helpful?
[Previous Manage Users](/security/authentication/users)[Next LDAP](/security/authentication/identity-providers/ldap)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Manage Users](/security/authentication/users)[Next LDAP](/security/authentication/identity-providers/ldap)
