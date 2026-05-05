---
url: /client-applications/cognos
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
## Supported Versions[​](/client-applications/cognos#supported-versions "Direct link to Supported Versions")
To find out which versions of Dremio are supported with IBM Cognos 11.2.x, see 
To find out which versions of Dremio are supported with IBM Cognos 12.0.x, see 
## Supported Authentication Methods[​](/client-applications/cognos#supported-authentication-methods "Direct link to Supported Authentication Methods")
You can use your Dremio username and password, a personal access token (PAT), or an access token from an identity provider that supports OpenID.
If you want to use a PAT, follow these steps before creating a connection to your Dremio cluster from Cognos:
  1. Ensure that your Dremio administrator has followed the steps in [Enabling the Use of PATs](/security/authentication/personal-access-tokens#enabling-the-use-of-pats).
  2. [Create a PAT](/security/authentication/personal-access-tokens#creating-a-pat).


If you want to use an access token from an identity provider that supports OpenID, ensure that your Dremio administrator has followed the steps in [OpenID Authentication](/security/authentication/identity-providers/oidc).
## Creating a Connection[​](/client-applications/cognos#creating-a-connection "Direct link to Creating a Connection")
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
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Domo](/client-applications/domo)[Next Looker](/client-applications/looker)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fcognos%2F&_biz_t=1777950346479&_biz_i=IBM%20Cognos%20Analytics%20%7C%20Dremio%20Documentation&_biz_n=54&rnd=951251&cdn_o=a&_biz_z=1777950346480)
