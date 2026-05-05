---
url: /security/authentication/identity-providers/microsoft-entra-id
title: "Microsoft Entra ID | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.880020791
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * [Identity Providers](/security/authentication/identity-providers)
  * Microsoft Entra ID

Version: current [26.x]
On this page
# Microsoft Entra ID Enterprise
This topic describes the configuration of Dremio for Single Sign-On (SSO) with user and group lookup using Microsoft Entra ID. To use Microsoft Entra ID as an OpenID provider with user and group information using SCIM, see the configuration of [OpenID providers](/security/authentication/identity-providers/oidc).
## Requirements[​](/security/authentication/identity-providers/microsoft-entra-id#requirements "Direct link to Requirements")
To use Microsoft Entra ID, Dremio's web server must have encryption enabled. See the configuration of web server encryption for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes#transport-level-security) or [Dremio standalone clusters](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#web-server-encryption) for more information.
## Configuring Microsoft Entra ID[​](/security/authentication/identity-providers/microsoft-entra-id#configuring-microsoft-entra-id "Direct link to Configuring Microsoft Entra ID")
To set up Microsoft Entra ID:
  1. In Microsoft Entra ID, navigate to the **App registrations** section and create a new `App registration` for the Microsoft Entra ID instance with your name and the account type.
  2. Click on **New Registration**.
  3. Complete the **Register an application** form by adding name, supported account types, and redirect URI of type **Web** , which is `https://<dremio-host>:9047/sso`, where `<dremio-host>` is the hostname or IP address of your Dremio coordinator node.
If you use a load balancer, do not include `:9047` in the redirect URI. Instead, configure SSO at the load balancer and use only the load balancer's URL as the redirect URI:
     * Load balancer with a default port (80 or 443): `https://<load-balancer-URL>/sso`
     * Load balancer with a non-default port: `https://<load-balancer-URL>:<load-balancer-port>/sso`
If you are configuring SSO for connections from Tableau, also include either of these redirect URIs:
     * If your Dremio cluster does not use encryption: `http://<dremio-host>:9047/oauth/callback`
     * If your Dremio cluster uses encryption: `https://<dremio-host>:9047/oauth/callback`
  4. Click **Save** to save the new registration.
  5. Click the app name to navigate to the app details screen.
  6. Navigate to the **Certificates & secrets** section, click on **New client secret** ,
  7. Provide a client secret description and expiration, and click **Add**. Copy and store the secret safely, as it won't be visible after leaving the page.
  8. In the left navigation menu, click **API permissions**.
  9. Click **Add a permission** , and then click **Microsoft Graph**.
  10. Select **Application permissions**.
Do not click **Delegated permissions**. The user signed in may not have the necessary permissions to make the API calls that Dremio requires to fetch external user/group membership.
  11. Under **Select permissions** , search for `User.Read.All` and select the checkbox for the result.
  12. Search again for `GroupMember.Read.All` and select the checkbox for the result.
  13. Click **Add permissions**.
The administrator must grant their consent in Microsoft Entra ID for you to add the `User.Read.All` and `GroupMember.Read.All` permissions. If the **Status** column displays a warning of not granted permissions and the **Grant admin consent for `tenant_domain_name`** button is grayed out, contact the administrator. The administrator must log in to the Microsoft Entra ID account and take the following steps:
    1. Navigate to the **App registrations** section and click the name of the app you registered.
    2. In the left navigation menu, click **API permissions**.
    3. Click **Grant admin consent for `tenant_domain_name`**.
  14. Click **Add a permission** , and then click **Microsoft Graph**.
  15. Select **Delegated permissions**. Under the catalog of OpenID permissions, select `openid` and `profile`, which are the minimum required permissions to configure SSO. These permissions should match the scope you configure in the `azuread.json` file when you [configure Dremio](/security/authentication/identity-providers/microsoft-entra-id#configuring-dremio-for-microsoft-entra-id) for Microsoft Entra ID.
  16. Click **Add permissions**. The `openid` and `profile` permissions do not require the administrator's consent.
  17. If you are enabling SSO for a [Power BI Desktop connection](/client-applications/microsoft-power-bi#enable-sso-to-dremio-from-power-bi), grant Dremio access to your Microsoft Entra ID tenant, if access to it was not already granted.
This step is not required if you are using the Dremio Cloud connector from the October 2022 update of 
    1. Paste this URL into a web browser, where `<tenant-ID>` is the tenant ID:

```
https://login.microsoftonline.com/<tenant-ID>/v2.0/adminconsent?client_id=429333a8-1521-4502-9101-6d4f2c1de644&scope=User.Read&redirect_uri=http://localhost/myapp/permissions  

```

    2. Follow the prompts from Microsoft by signing in with an account you use to sign into Dremio.
    3. In the prompt titled **Need admin approval** , click "Have an admin account? Sign in with that account" and sign in with an admin account for your Microsoft Entra ID tenant. Alternatively, ensure you use the latest version of Dremio's Power BI connector, which does not require administrator approval.


## Configuring Dremio for Microsoft Entra ID[​](/security/authentication/identity-providers/microsoft-entra-id#configuring-dremio-for-microsoft-entra-id "Direct link to Configuring Dremio for Microsoft Entra ID")
To configure Dremio for single sign-on with Microsoft Entra ID, perform the following steps:
  1. Create a new `azuread.json` file that contains your configuration for Microsoft Entra ID. See the [Microsoft Entra ID Properties](/security/authentication/identity-providers/microsoft-entra-id#microsoft-entra-id-properties) below for more information.
  2. Adding your configuration:
     * Kubernetes
     * Standalone
    1. Update the `coordinator.web.auth.type` configuration in your `values-overrides.yaml` with the value `azuread`. See the configuration of [Identity Providers](/deploy-dremio/configuring-kubernetes#identity-provider).
    2. Add the `azuread.json` file to your Dremio deployment. This can be done in one of two ways:
**Method 1 (Preferred)**
Add the content of your JSON file into your `values-override.yaml` via the `ssoFile` option. This method is detailed in the [Identity Provider](/deploy-dremio/configuring-kubernetes#identity-provider) section.
**Method 2**
Perform a `helm install` with the `--set-file coordinator.web.auth.ssoFile=<your-local-path>/azuread.json` option indicating the location of the `azuread.json` file from step 1. See [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes#step-1-deploy-dremio) for additional information.
    1. Edit the `dremio.conf` file, and add the following properties:
Example Dremio Services Configuration 

```
services: {   
    coordinator.enabled: true  
    coordinator.web.auth.type: "azuread",  
    coordinator.web.auth.config: "/path/to/azuread.json"  
}  

```

    2. Copy the modified `dremio.conf` and `azuread.json` files to every coordinator node in the Dremio cluster. The location of the `azuread.json` file is relative to the `/conf` directory. The path to the file can be absolute; the file can live anywhere in the system.
When using [scale-out coordinators](/what-is-dremio/architecture#scale-out-coordinators), you must ensure that both the `dremio.conf` configuration and the `azuread.json` file are present on every coordinator node. Scale-out coordinators require the authentication configuration even when `coordinator.web.enabled: false` is set.


## Microsoft Entra ID Properties[​](/security/authentication/identity-providers/microsoft-entra-id#microsoft-entra-id-properties "Direct link to Microsoft Entra ID Properties")
The `azuread.json` file is a JSON-formatted config file that defines how Dremio connects to and communicates with your Microsoft Entra ID.
Example Configuration for Microsoft Entra ID 

```
{  
    "oAuthConfig": {  
        "clientId": "<clientId>",  
        "clientSecret": "<clientSecret>",  
        "redirectUrl": "https://<dremio.host>:9047/sso",  
        "authorityUrl": "https://login.microsoftonline.com/<directory.id>/v2.0",  
        "scope": "openid profile",  
        "jwtClaims": {  
            "userName": "preferred_username"  
        }  
    }  
}  

```

The `azuread.json` file contains the following properties:  
| Property  | Description  |  
| --- | --- |  
| `authorityUrl`  | The base URL of Microsoft Entra ID. The `directory.id` in this URL appears on your application's **Overview** screen, also called the tenant ID.  |  
| `clientId`  | Appears on the **Overview** screen of your application. This property is also called the application ID. A `clientId` applies to the context where you acquire a token using one of the OAuth flows that Microsoft Entra ID supports. The application ID is the same for a single application object corresponding to an application.  |  
| `clientSecret`  | The secret created in the [Configuring Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id#configuring-microsoft-entra-id) section. This secret can be encrypted using the [`dremio-admin encrypt`](/reference/admin-cli/encryption) CLI command or as a [managed identity in an Azure Key vault](/security/authentication/identity-providers/microsoft-entra-id#azure-managed-identities).  |  
| `jwtClaims`  | Maps fields from the JWT token to fields Dremio requires. The only field currently required is `userName`, which you should set to the JWT field containing the user’s username.  |  
| `redirectUrl`  | The redirect URI created in the [Configuring Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id#configuring-microsoft-entra-id) section. If you use a load balancer, do not include `:9047` in the redirect URI. Instead, configure SSO at the load balancer and use only the load balancer's URL. 
  * A load balancer with a default port (80 or 443): `https://<load-balancer-URL>/sso`
  * A load balancer with a non-default port: `https://<load-balancer-URL>:<load-balancer-port>/sso`

 |  
| `scope`  | A space-delimited list of scopes `openid` scope is always required; other scopes can vary by provider.  |  
## Azure Managed Identities[​](/security/authentication/identity-providers/microsoft-entra-id#azure-managed-identities "Direct link to Azure Managed Identities")
Dremio supports using Azure's Managed Storage Identities feature to retrieve the secret inside Azure. This feature can be used to avoid storing the secret in plain text.
To set up Azure's Managed Storage Identities:
  1. Enable system-assigned managed identities for the virtual machine instance.
  2. Create an Azure Key Vault and create a new secret. The Azure Key Vault asks for a name and the value (which will be the secret generated for the application).
  3. Go to the **Access policies** section for the Key Vault and add the managed identity for the virtual machine. Ensure you grant `Get` permissions for `Secrets` to the managed identity for the virtual machine.
  4. Change the `azuread.json` value for `clientSecret` to the following URI:
Example Client Secret Configuration 

```
"clientSecret": "azure-vault+https://{keyvault.name}.vault.azure.net/#{secret.name}",  

```

This URI tells Dremio to access the Key Vault located at `https://{keyvault.name}.vault.azure.net` and load the secret named `{secret.name}`. The `keyvault` value is on the **Overview** page under **DNS Name**.


Was this page helpful?
[Previous LDAP](/security/authentication/identity-providers/ldap)[Next OpenID](/security/authentication/identity-providers/oidc)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LDAP](/security/authentication/identity-providers/ldap)[Next OpenID](/security/authentication/identity-providers/oidc)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fsecurity%2Fauthentication%2Fidentity-providers%2Fmicrosoft-entra-id%2F&_biz_t=1777950395527&_biz_i=Microsoft%20Entra%20ID%20%7C%20Dremio%20Documentation&_biz_n=158&rnd=832253&cdn_o=a&_biz_z=1777950395527)
