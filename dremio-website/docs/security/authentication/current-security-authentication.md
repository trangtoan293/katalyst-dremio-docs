---
url: /security/authentication
title: "Authentication | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.988640375
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * Authentication

Version: current [26.x]
On this page
# Authentication
Dremio supports several types of authentication for identity providers, client connections, and user types, including both regular users and service users.
## Authentication Methods by Application Type[​](/security/authentication#authentication-methods-by-application-type "Direct link to Authentication Methods by Application Type")  
| App Type   | [Enterprise OIDC Provider](/security/authentication/identity-providers#openid-connect-oidc-providers)  |  [LDAP](/security/authentication/identity-providers#ldap) or Dremio Local Provider  |  
| --- | --- | --- |  
| **Dremio Console**  | 
  * [Single Sign-On](/security/authentication#single-sign-on)
  * [Personal Access Token](/security/authentication#personal-access-token)

 | 
  * [Username and Password](/security/authentication#username-and-password)
  * [Personal Access Token](/security/authentication#personal-access-token)

 |  
| **User Clients & Applications**  | 
  * [Personal Access Token](/security/authentication#personal-access-token)
  * **OAuth-based authentication** : [External JWT Exchange](/security/authentication#external-jwt-exchange) or [External JWT](/security/authentication#external-jwt)

 | 
  * [Personal Access Token](/security/authentication#personal-access-token)
  * [Username and Password with JDBC/ODBC](/security/authentication#username-and-password)

 |  
| **M2M Applications**  | 
  * [Service Users with External Service Principals](/security/authentication#external-service-principal-authentication)

 | 
  * [OAuth Client Credentials](/security/authentication#oauth-client-credentials)
  * **Legacy Migration** : [PAT Exchange](/security/authentication#pat-exchange) or [Obtaining OAuth Tokens with Username and Password](/security/authentication#obtain-oauth-access-tokens-with-username-and-password)

 |  
## Dremio Console Authentication Methods[​](/security/authentication#dremio-console-authentication-methods "Direct link to Dremio Console Authentication Methods")
### Single Sign-On[​](/security/authentication#single-sign-on "Direct link to Single Sign-On")
The user is authenticated by the configured OIDC identity provider, including automatic authentication if the user is already signed in to the identity provider.
### Username and Password[​](/security/authentication#username-and-password "Direct link to Username and Password")
The user provides a username and password combination for authentication. See [User Management](/security/authentication/users) for information on adding and managing local and external users.
### Personal Access Token[​](/security/authentication#personal-access-token "Direct link to Personal Access Token")
A personal access token (PAT) is used in place of a user password. PATs provide a convenient way to create a client connection without exposing a user's password, but can pose a security risk if not properly managed. PATs can be configured with long lifetimes, and lost or compromised tokens may allow access to sensitive data until the token expires. Before use, the administrator must [activate PATs](/security/authentication/personal-access-tokens) for the Dremio cluster.
To use a PAT, the user must follow these steps:
  1. [Create a PAT](/security/authentication/personal-access-tokens#creating-a-pat) in the Dremio console. Users can create additional PATs using the Dremio console or the [PAT creation](/reference/api/personal-access-token) REST API.
  2. Use the PAT to connect with the Dremio console, [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver), [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), or [Dremio REST](/reference/api).


## User Applications Authentication Methods[​](/security/authentication#user-applications-authentication-methods "Direct link to User Applications Authentication Methods")
### External JWT[​](/security/authentication#external-jwt "Direct link to External JWT")
Client apps can request OAuth 2.0 JSON Web Tokens (JWTs) from external token providers, allowing users to authenticate through custom or third-party applications without exposing their credentials to the client application.
After obtaining an external JWT, the client app can create connections to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver) or [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver). However, Dremio recommends [external JWT token exchange](/security/authentication#external-jwt-exchange) because Dremio OAuth access tokens are smaller and verification is faster.
To use an external JWT, the administrator must configure Dremio to use the Enterprise OIDC provider as an [external token provider](/security/authentication/application-authentication/external-token).
After configuration, a client application performs the following steps:
  1. A user authenticates with the external token provider and the client [receives a JWT](/security/authentication/application-authentication/external-token#retrieving-an-external-jwt).
  2. Create a connection to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver) or [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver) and the external JWT.


### External JWT Exchange[​](/security/authentication#external-jwt-exchange "Direct link to External JWT Exchange")
Exchanging the external JWT for an OAuth access token enables additional connection choices after authenticating with the external token provider. A client application performs the following steps:
  1. A user authenticates with the external token provider and the client [receives a JWT](/security/authentication/application-authentication/external-token#retrieving-an-external-jwt).
  2. Use the `/oauth/token` [REST API](/reference/api/oauth-token) to [exchange the JWT for an OAuth access token](/reference/api/oauth-token).
  3. Create a connection to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver), [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), or [Dremio REST](/reference/api) and the OAuth access token.


## M2M Applications Authentication Methods[​](/security/authentication#m2m-applications-authentication-methods "Direct link to M2M Applications Authentication Methods")
### OAuth Client Credentials[​](/security/authentication#oauth-client-credentials "Direct link to OAuth Client Credentials")
Service users authenticate using the OAuth 2.0 client credentials flow, where a client ID and client secret are exchanged for access tokens. This is the primary authentication method for service users and provides:
  * **Automated authentication** without manual login processes
  * **Short-lived access tokens** that enhance security
  * **Centralized credential management** through the OAuth system
  * **Audit trails** for programmatic access


To use OAuth client credentials:
  1. Create a service user in the Dremio console under **Settings &gt; User Management &gt; Service Users**. Upon creation, Dremio generates a unique client ID and client secret.
  2. Use the `/oauth/token` [REST API](/reference/api/oauth-token) to exchange the client ID and client secret for an OAuth access token.
  3. Create a connection to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver), [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), or [Dremio REST](/reference/api) and the OAuth access token.


### External Service Principal Authentication[​](/security/authentication#external-service-principal-authentication "Direct link to External Service Principal Authentication")
You can configure Dremio [service users](/security/authentication/users#user-types) to authenticate using service principals from Microsoft Entra ID or another OIDC provider. This allows service users to authenticate using JWTs from external identity providers, which are then exchanged for Dremio OAuth access tokens.
This method is useful for organizations that want to:
  * Centralize service principal management in their identity provider
  * Use existing Microsoft Entra ID service principals for Dremio access
  * Maintain consistent authentication patterns across multiple systems


To use external service principal authentication:
  1. Create a [service user](/security/authentication/users#user-types) in the Dremio console and configure external credentials linking to your service principal in Microsoft Entra ID or another OIDC provider.
  2. The service user authenticates with the external identity provider and receives a JWT.
  3. Use the `/oauth/token` [REST API](/reference/api/oauth-token) to exchange the external JWT for an OAuth access token.
  4. Create a connection to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver), [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), or [Dremio REST](/reference/api) and the OAuth access token.


## Legacy Authentication Methods[​](/security/authentication#legacy-authentication-methods "Direct link to Legacy Authentication Methods")
### Obtain OAuth Access Tokens with Username and Password[​](/security/authentication#obtain-oauth-access-tokens-with-username-and-password "Direct link to Obtain OAuth Access Tokens with Username and Password")
Organizations transitioning to OAuth-based authentication can use a username and password from a traditional user account to obtain an OAuth access token. This method allows teams to implement OAuth-based authentication immediately while planning their migration to dedicated service users and any associated configuration of an external identity provider.
Users follow these steps to exchange a username and password:
  1. Use the `/oauth/token` [REST API](/reference/api/oauth-token#obtain-tokens-via-username-and-password) to obtain OAuth access tokens using a username and password.
  2. Create a connection to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver), [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), or [Dremio REST](/reference/api) and the OAuth access token.
  3. Use the optional [refresh token to create OAuth access tokens](/reference/api/oauth-token#exchange-a-refresh-token) to obtain fresh OAuth access tokens as they expire.


### PAT Exchange[​](/security/authentication#pat-exchange "Direct link to PAT Exchange")
PAT Exchange serves as a migration bridge for existing applications that currently use PATs but need to integrate with systems expecting OAuth access tokens. This method allows organizations to maintain existing PAT-based workflows while transitioning to proper service user authentication.
Users follow these steps to exchange a PAT:
  1. [Create a PAT](/security/authentication/personal-access-tokens#creating-a-pat) in the Dremio console or using the [REST API](/reference/api/personal-access-token) after creating the first token.
  2. Use the `/oauth/token` [REST API](/reference/api/oauth-token#exchange-a-pat) to exchange the PAT for an OAuth access token.
  3. Create a connection to Dremio using [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver), [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), or [Dremio REST](/reference/api) and the OAuth access token.


### Dremio Authentication Token[​](/security/authentication#dremio-authentication-token "Direct link to Dremio Authentication Token")
Dremio authentication tokens are generated from your Dremio username and password. This authentication method uses the prior generation `/apiv2/login` endpoint, now internal and subject to change without notice. See [Dremio Authentication Tokens](/reference/api/oauth-token) for additional information.
Was this page helpful?
[Previous Security and Compliance](/security)[Next Manage Users](/security/authentication/users)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Security and Compliance](/security)[Next Manage Users](/security/authentication/users)
