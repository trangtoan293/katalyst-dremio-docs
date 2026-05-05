---
url: /security/authentication/identity-providers/oidc
slug: /security/authentication/identity-providers/oidc
title: "OpenID | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64076.015570833
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * [Identity Providers](/security/authentication/identity-providers)
  * OpenID

Version: current [26.x]
On this page
# OpenID Identity Providers Enterprise
This topic describes the configuration of Dremio for Single Sign-On (SSO) using an OpenID Connect (OIDC) identity provider. OpenID-based SSO handles authentication only; it does not query or retrieve user group memberships from the identity provider. User and group information is provisioned via [SCIM](/security/authentication/identity-providers/scim).
## Requirements​
Your IDP may require Dremio's web URL to use HTTPS to configure SSO. Check with your IDP documentation.
## Configuring OpenID​
When registering an application in the OpenID provider of your choice, you will need to register one or two Dremio redirect URIs.
  * To configure SSO connections to Dremio, register a Dremio redirect URL:
    * Without a load balancer, register the URL: `https://<dremio-host>:9047/sso`, where `<dremio-host>` is the hostname or IP address of your Dremio coordinator node.
    * With a load balancer, configure SSO at the load balancer and use only the load balancer's URL as the redirect URI:
      * Load balancer with a default port (80 or 443): `https://<load-balancer-URL>/sso`
      * Load balancer with a non-default port: `https://<load-balancer-URL>:<load-balancer-port>/sso`
  * To configure SSO connections from Tableau, also include either of these redirect URIs:
    * If your Dremio cluster does not use encryption: `http://<dremio-host>:9047/oauth/callback`
    * If your Dremio cluster uses encryption: `https://<dremio-host>:9047/oauth/callback`


## Configuring Dremio for OpenID​
To configure Dremio to use an OpenID provider, perform the following steps:
  1. Create a new `oauth.json` file that contains the configuration for your OpenID provider. See the OpenID Properties below.
  2. Adding your configuration:
     * Kubernetes
     * Standalone
    1. Update the `coordinator.web.auth.type` configuration in your `values-overrides.yaml` with the value `oauth`. See the configuration of [Identity Providers](/deploy-dremio/configuring-kubernetes).
    2. Add the `oauth.json` file to your Dremio deployment. This can be done in one of two ways:
**Method 1 (Preferred)**
Add the content of your JSON file into your `values-override.yaml` via the `ssoFile` option. This method is detailed in the [Identity Provider](/deploy-dremio/configuring-kubernetes) section.
**Method 2**
Perform a `helm install` with the `--set-file coordinator.web.auth.ssoFile=<your-local-path>/oauth.json` option indicating the location of the `oauth.json` file from step 1. See [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes) for additional information.
    1. Edit the `dremio.conf` file, and add the following properties:
Example Dremio Services Configuration 

```
services: {  
    coordinator.enabled: true  
    coordinator.web.auth.type: "oauth"  
    coordinator.web.auth.config: "/path/to/oauth.json"   
}  

```

    2. Copy the modified `dremio.conf` and `oauth.json` files to every coordinator node in the Dremio cluster. The location of the `oauth.json` file is relative to the `/conf` directory. The path to the file can be absolute; the file can live anywhere in the system.


## OpenID Properties​
The `oauth.json` file contains the following properties about the OIDC provider.
Example Configuration for OIDC 

```
{   
    "clientId": "<clientId>",  
    "clientSecret": "<clientSecret>",  
    "redirectUrl": "http://dremioHost:9047/sso",  
    "authorityUrl": "<authorityUrl>",  
    "scope": "openid profile email",  
    "jwtClaims": {  
        "userName": "email"  
    },  
    "parameters": [  
        { "name": "access_type", "value": "offline" },  
        ...  
    ]  
}  

```

OpenID providers are defined using the following properties:  
| Property  | Description  |  
| --- | --- |  
| `authorityUrl`  | The location where Dremio can find the OpenID discovery document. For example, Google’s location is `https://accounts.google.com/.well-known/openid-configuration`, and the authorityUrl to use is `https://accounts.google.com`, the base location of the well-known directory.  |  
| `clientId`  | Provided by the OpenID provider.  |  
| `clientSecret`  | Provided by the OpenID provider. This secret can be encrypted using the `dremio-admin encrypt` [CLI command](/reference/admin-cli/encryption)  |  
| `jwtClaims`  | Maps fields from the JWT token to fields Dremio requires. The only field currently required is `userName`, which you should set to the JWT field containing the user’s username.  |  
| `parameters`  | Optional - any additional parameters the OpenID provider requires.  |  
| `redirectUrl`  | The URL where Dremio is hosted. The URL must match the redirect URL set in the OpenID Provider. If you use a load balancer, do not include `:9047` in the `redirectUrl`. Instead, configure SSO at the load balancer and use only the load balancer's URL. 
  * A load balancer with a default port (80 or 443): `https://<load-balancer-URL>/sso`
  * A load balancer with a non-default port: `https://<load-balancer-URL>:<load-balancer-port>/sso`

 |  
| `scope`  | A space-delimited list of scopes provided by the OpenID provider. `openid` scope is always required, other scopes can vary by provider.  |  
## Configuring Dremio for Hybrid OpenID+LDAP​
Dremio supports hybrid OIDC authentication with LDAP authorization (OIDC+LDAP), which allows you to authenticate users with an OIDC provider and fetch user information, groups, and group memberships from LDAP. First, Dremio authenticates users with OIDC. From the OIDC flow, Dremio extracts the username from the ID token. Then, Dremio searches for the username and its group membership in LDAP.
Users cannot log in to Dremio using their LDAP usernames and passwords. Username and password logins only work for local users. Follow these steps to configure OIDC+LDAP:
  1. Create a new `config.json` file that contains your configuration for your OpenID provider with LDAP. See the OAuth+LDAP Properies below.
  2. Adding your configuration:
     * Kubernetes
     * Standalone
    1. Update the `coordinator.web.auth.type` configuration in your `values-overrides.yaml` with the value `oauth+ldap`. See the configuration of [Identity Providers](/deploy-dremio/configuring-kubernetes) for additional information.
    2. Add the `config.json` file to your Dremio deployment. This can be done in one of two ways:
**Method 1 (Preferred)**
Add the content of your JSON file into your `values-override.yaml` via the `ssoFile` option. This method is detailed in the [Identity Provider](/deploy-dremio/configuring-kubernetes) section.
**Method 2**
Perform a `helm install` with the `--set-file coordinator.web.auth.ssoFile=<your-local-path>/config.json` option indicating the location of the `config.json`. See [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes) for additional information.
    1. Edit the `dremio.conf` file, and add the following properties:
Example Dremio Services Configuration 

```
services: {  
    coordinator.enabled: true  
    coordinator.web.auth.type: "oauth+ldap"  
    coordinator.web.auth.config: "/path/to/config.json"  
}  

```

    2. Copy the modified `dremio.conf` and `config.json` files to every coordinator node in the Dremio cluster. The location of the `config.json` file is relative to the `/conf` directory. The path to the file can be absolute; the file can live anywhere in the system.


## OAuth+LDAP Properties​
The `config.json` file for OAuth+LDAP is a combination of OAuth and LDAP configurations.
  * The properties in the `oAuthConfig` section are described above in OpenID Properties.
  * The properties in the `ldapConfig` section are described in [LDAP Properties](/security/authentication/identity-providers/ldap).

Example of Combined OAuth and LDAP Configuration 

```
{  
    "oAuthConfig": {  
        "clientId": "<clientId>",  
        "...": "other fields"  
    },  
    "ldapConfig": {  
        "connectionMode": "PLAIN"  
        "...": "other fields"  
    }  
}       

```

Upon successful OIDC authentication, the user's username is established as the value provided for the `userName` property in the `oAuthConfig` object in the `config.json` file. Dremio uses the user's username to query LDAP for the user's group membership information. In the DN-based approach to configuring OIDC+LDAP, Dremio replaces the placeholder `{0}` with the user's username. For example:
DN-Based Configuration Example

```
"userDNs": ["cn={0},dc=staticsecurity,dc=dremio,dc=com"],  
"userAttributes": {  
    "firstname": "givenName",  
    "lastname": "sn",  
    "email": "mail"  
}  

```

In the attribute-based approach, Dremio looks for the LDAP user whose `id` value matches the user's username. For example, if you use the following configuration, Dremio looks for the LDAP user whose `sAMAccountName` matches their username:
Attribute-Based Configuration Example

```
"userAttributes": {  
    "baseDNs": [  
        "OU=test,OU=ad,DC=drem,DC=io"  
    ],  
    "searchScope": "SUB_TREE",  
    "id": "sAMAccountName",  
    "firstname": "givenName",  
    "lastname": "sn",  
    "email": "mail"  
}  

```

If the OIDC authentication and LDAP search are successful, Dremio creates a user account with the specified username. If OIDC authentication is successful but the username does not exist in LDAP, the user will be unable to log in to Dremio.
The [LDAP `userFilter` property](/security/authentication/identity-providers/ldap) works with OIDC+LDAP. You can also use the OIDC application configuration in your identity provider to limit who can authenticate to Dremio.
Was this page helpful?
[Previous Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id)[Next SCIM](/security/authentication/identity-providers/scim)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id)[Next SCIM](/security/authentication/identity-providers/scim)
