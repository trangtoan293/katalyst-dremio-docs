---
url: /security/authentication/application-authentication/external-token
title: "External Token Providers | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64386.041243791
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * [Application Authentication](/security/authentication/application-authentication)
  * External Token Providers

Version: current [26.x]
On this page
# External Token Providers Enterprise
External token providers are OIDC identity providers that issue [Dremio token exchange](/reference/api/oauth-token#exchange-an-external-jwt) to obtain an OAuth access token used to create connections to Dremio.
![](https://docs.dremio.com/assets/images/token-flowchart-7badc94d022760d37f480ecb5fee43ec.png)
The OIDC external token provider does not need to be the same identity provider used by the Dremio console for SSO. The provider requires an application registration specifying the OAuth authorization flow to be used between the external token provider and the client to obtain the JWT that will be sent to Dremio.
This page outlines the steps for configuring an external token provider so Dremio can interpret and validate the JWTs issued by your provider.
## JSON Web Tokens (JWT)[​](/security/authentication/application-authentication/external-token#json-web-tokens-jwt "Direct link to JSON Web Tokens \(JWT\)")
A JSON web token (JWT) is an 
The 
Example: External JWT Claims from Microsoft Entra ID 

```
{  
  "aud": "0853fce0-c748-4c54-aa58-f5b9af279840",  
  "iss": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/v2.0",  
  "upn ": "gnarly@dremio.com"  
}  

```

## Defining an External Token Provider[​](/security/authentication/application-authentication/external-token#defining-an-external-token-provider "Direct link to Defining an External Token Provider")
Dremio requires the following values to configure an external token provider.
The examples below are specific to configuring Dremio when the external token provider is Microsoft Entra ID. Your identity provider will require additional configuration of a client application registration that depends on the OAuth authorization flow used between your client and your provider. To configure your application registration, consult your identity provider documentation.
### Audience[​](/security/authentication/application-authentication/external-token#audience "Direct link to Audience")
The audience value identifies the intended recipients of the external JWT. It can generally be an array of case-sensitive strings or URI values. The audience is contained in the `aud` claim in the external JWT.
When using Microsoft Entra ID, the audience can be the Application ID assigned to your app in the Microsoft Entra ID portal or the resource URI. In v2.0 tokens, this value is always the 
Example Audience Claim with Microsoft Entra ID Application ID

```
"aud": "0853fce0-c748-4c54-aa58-f5b9af279840"  

```

### User Claim Mapping[​](/security/authentication/application-authentication/external-token#user-claim-mapping "Direct link to User Claim Mapping")
The user claim mapping identifies the claim in the external JWT that contains the Dremio username.
When using Microsoft Entra ID authentication, Dremio usernames must align with the 
When a user is added to a Power BI workspace, the user's identity is also represented by the 
The JWT contains the UPN claim, named `upn`, and its value
Example: UPN Claim from Microsoft Entra ID

```
"upn": "gnarly@dremio.com"  

```

The `user claim mapping` field of the external token provider requires the name of the claim used in the JWT, which in this case is `upn`.
### Issuer URL[​](/security/authentication/application-authentication/external-token#issuer-url "Direct link to Issuer URL")
The issuer URL identifies the identity provider that issued the JWT. It is contained in the external JWT's `iss` claim. When using Microsoft Entra ID, 
Example Issuer Claim with Microsoft Entra ID

```
"iss": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/v2.0"  

```

### JWKS URL[​](/security/authentication/application-authentication/external-token#jwks-url "Direct link to JWKS URL")
The JWKS URL is an endpoint that hosts the `{issuer URL}/.well-known/openid-configuration`.
For Microsoft Entra ID, the `https://login.microsoftonline.com/{tenant_id}/discovery/v2.0/keys`.
Example: JWKS URL from Microsoft Entra ID

```
https://login.microsoftonline.com/58a43618-7933-4e0d-906e-1c1a2a867ad6/discovery/v2.0/keys  

```

## Managing External Token Providers[​](/security/authentication/application-authentication/external-token#managing-external-token-providers "Direct link to Managing External Token Providers")
The Dremio administrator or a user with the [CONFIGURE SECURITY](/security/rbac/privileges#system-privileges) privilege can view and manage external token providers in Dremio.
### Viewing External Token Providers[​](/security/authentication/application-authentication/external-token#viewing-external-token-providers "Direct link to Viewing External Token Providers")
To view external token providers:
  1. In the Dremio console, click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) on the left in the side navigation bar.
  2. In the Settings sidebar, click **External Token Providers**. The External Token Providers page lists the external token providers configured for Dremio.


### Adding an External Token Provider[​](/security/authentication/application-authentication/external-token#adding-an-external-token-provider "Direct link to Adding an External Token Provider")
To add an external token provider:
  1. In the Dremio console, click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the side navigation bar.
  2. In the Settings sidebar, click **External Token Providers**.
  3. Click **Add Provider** at the top-right corner of the External Token Providers page.
  4. In the **Add Provider** dialog, complete the configuration using the fields described in [Defining an External Token Provider](/security/authentication/application-authentication/external-token#defining-an-external-token-provider) above.
  5. Click **Add**.


When you add an external token provider, Dremio automatically enables it. To deactivate it, toggle the Enabled switch on the External Token Providers page.
Each external token provider must use a different combination of issuer and audience. If multiple external token providers share the same issuer and audience, authentication will fail regardless of whether the token providers are enabled.
### Editing an External Token Provider[​](/security/authentication/application-authentication/external-token#editing-an-external-token-provider "Direct link to Editing an External Token Provider")
To edit an external token provider:
  1. In the Dremio console, click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the side navigation bar.
  2. In the Settings sidebar, click **External Token Providers**.
  3. On the External Token Providers page, find the row for the external token provider you want to edit and click ![This is the Edit icon.](https://docs.dremio.com/images/icons/edit.png) at the right side of the row.
  4. In the **Edit Provider** dialog, click **Edit**. Update the values using the fields described in [Defining an External Token Provider](/security/authentication/application-authentication/external-token#defining-an-external-token-provider) above.


### Deleting an External Token Provider[​](/security/authentication/application-authentication/external-token#deleting-an-external-token-provider "Direct link to Deleting an External Token Provider")
To delete an external token provider:
  1. In the Dremio console, click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the side navigation bar.
  2. In the Settings sidebar, click **External Token Providers**.
  3. On the External Token Providers page, find the row for the external token provider you want to delete and click ![This is the Delete icon.](https://docs.dremio.com/images/icons/trash.png) at the right side of the row.
  4. In the **Delete External Provider** dialog, click **Delete**.


## Using the External Token Provider[​](/security/authentication/application-authentication/external-token#using-the-external-token-provider "Direct link to Using the External Token Provider")
### Retrieving an External JWT[​](/security/authentication/application-authentication/external-token#retrieving-an-external-jwt "Direct link to Retrieving an External JWT")
This sample application uses the 
  * `client_id` is the 
  * `app_redirect_url` or `https://myapp.com/auth/callback` or `http://localhost:3000/auth/callback`. The redirect URI is defined in the Microsoft Entra ID application registration for the client.
  * `dremio_scope_name` is the `dremio.all` in token exchange, regardless of the scope configured in the application registration.
  * `tenant_id` is your Microsoft Entra ID 

Example: Retrieving a Microsoft JWT

```
import msal  
  
client_id = "TODO"  
app_redirect_url = "TODO"  
dremio_scope_name = "TODO"    
tenant_id = "TODO"  
  
authority_url = "https://login.microsoftonline.com/" + tenant_id  
app = msal.PublicClientApplication(client_id, authority = authority_url)  
auth_code_flow = app.initiate_auth_code_flow(  
    scopes=[dremio_scope_name],  
    redirect_uri=app_redirect_url  
) # PKCE is included in the msal python library  
  
state = auth_code_flow['state']  
  
authorization_code = "TODO: retrieved from the browser"  
  
external_access_token = ""  
  
if authorization_code:  
    auth_result = app.acquire_token_by_auth_code_flow(  
        auth_code_flow=auth_code_flow,  
        auth_response={"code": authorization_code, "state": state}  
    )  
    if "access_token" in auth_result:  
        external_access_token = auth_result["access_token"]  
    else:  
        print("Error: no access token")  
    if "refresh_token" in auth_result:  
        refresh_token = auth_result["refresh_token"]  
    else:  
        print("Error: no refresh token")  
else:  
    print("Error: no auth code")  

```

### External JWT Exchange[​](/security/authentication/application-authentication/external-token#external-jwt-exchange "Direct link to External JWT Exchange")
The client must use the Dremio `/oauth/token` REST API to [exchange the JWT for an OAuth access token](/reference/api/oauth-token#exchange-an-external-jwt).
Was this page helpful?
[Previous Microsoft Power BI](/security/authentication/application-authentication/power-bi-aad-config)[Next Personal Access Tokens](/security/authentication/personal-access-tokens)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Power BI](/security/authentication/application-authentication/power-bi-aad-config)[Next Personal Access Tokens](/security/authentication/personal-access-tokens)
