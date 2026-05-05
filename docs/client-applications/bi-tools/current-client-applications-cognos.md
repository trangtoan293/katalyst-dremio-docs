---
url: /client-applications/cognos
slug: /client-applications/cognos
title: "IBM Cognos Analytics | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.169757375
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * IBM Cognos Analytics

Version: current [26.x]
On this page
# IBM Cognos Analytics
You can run SQL from 
## Supported Versions​
To find out which versions of Dremio are supported with IBM Cognos 11.2.x, see 
To find out which versions of Dremio are supported with IBM Cognos 12.0.x, see 
## Supported Authentication Methods​
You can use your Dremio username and password, a personal access token (PAT), or an access token from an identity provider that supports OpenID.
If you want to use a PAT, follow these steps before creating a connection to your Dremio cluster from Cognos:
  1. Ensure that your Dremio administrator has followed the steps in [Enabling the Use of PATs](/security/authentication/personal-access-tokens).
  2. [Create a PAT](/security/authentication/personal-access-tokens).


If you want to use an access token from an identity provider that supports OpenID, ensure that your Dremio administrator has followed the steps in [OpenID Authentication](/security/authentication/identity-providers/oidc).
## Creating a Connection​
  1. Launch Cognos Analytics.
  2. Navigate to **Manage** &gt; **Data Server Connections**.
  3. Click **Add Data Server** and select **Dremio** as the type of connection.
  4. In the **JDBC URL** field, specify the URL for the Dremio coordinator by using this template:
JDBC URL template

```
jdbc:dremio:direct=<DREMIO_COORDINATOR>:31010[;schema=<OPTIONAL_SCHEMA>]  

```

  5. Follow one of these steps to configure a method for authenticating to Dremio:
     * If you want to connect to Dremio by using a username and a password, specify the username and password.
     * If you want to connect to Dremio by using a personal access token (PAT), specify `$token` as the username and paste the PAT into the **Password** field.
     * If you want to connect to Dremio by using access tokens, select a Cognos namespace which has been configured to use OpenID Connect.
  6. Save the connection definition.
  7. Click **Test** to confirm that the connection succeeds.


Was this page helpful?
[Previous Domo](/client-applications/domo)[Next Looker](/client-applications/looker)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Domo](/client-applications/domo)[Next Looker](/client-applications/looker)
!
