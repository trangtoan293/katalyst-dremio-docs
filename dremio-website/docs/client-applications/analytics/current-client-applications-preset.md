---
url: /client-applications/preset
title: "Preset | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64033.030474791
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Preset

Version: current [26.x]
On this page
# Preset
You can use 
## Supported Authentication Methods[​](/client-applications/preset#supported-authentication-methods "Direct link to Supported Authentication Methods")
  * Use the username and password of an account in your Dremio cluster.
  * Use the username of an account in your Dremio cluster and a personal access token (PAT) created in Dremio. To create a PAT, follow the steps in [Creating a PAT](/security/authentication/personal-access-tokens#creating-a-pat). After you obtain a PAT, it is recommended that you URL-encode it. To encode it locally on your system, you can follow these steps:
    1. In a browser window, right-click an empty area of the page and select **Inspect** or **Inspect Element** , depending on your browser.
    2. In the top bar of the inspection pane, click **Console**.
    3. Type `encodeURIComponent("`PAT`")`, where ``PAT`` is the personal access token. The URL-encoded PAT appears in red on the next line. You can highlight it and copy it to your clipboard.


## Creating a Connection[​](/client-applications/preset#creating-a-connection "Direct link to Creating a Connection")
  1. Click **Settings** in the top-right corner, and select **Database Connections** under **Data**.
  2. Click the **+Database** button in the top-right corner.
  3. Select **Other** from the **Supported Databases** field of the Connect a Database dialog.
  4. In the **Display Name** field, specify any name you prefer.
  5. In the **Connect a Database** dialog, follow these steps:
    1. Select **Other** from the **Supported Databases** field.
    2. In the **Display Name** field, name the new connection.
    3. If you want to authenticate by using a username and password, specify in the **SQLAlchemy URI** field a URI that is in this format:
Format of URIs with username and password authentication

```
dremio://<username>:<password>@<host>:<port>[/option=value[;...]]  

```

       * ``username``: The username of the Dremio account to use.
       * ``password``: The password of the Dremio account to use.
       * ``host``: The hostname or IP address of the coordinator node of the Dremio cluster.
       * ``port``: The port to connect to on the coordinator node. Unless explicitly changed on the node, the port is 31010.
       * `[/option=value[;...]]`: One or more optional properties, separated by semicolons. See [SSL Connection Properties](/client-applications/preset#ssl-connection-properties) and [Advanced Properties](/client-applications/preset#advanced-properties).
Example URI with username and password authentication

```
dremio://myUserID:myPassword@myHost:31010/ssl=true;schema=Samples;routing_tag=thisTag  

```

    4. If you want to authenticate by using a personal access token, specify in the **SQLAlchemy URI** field a URI that is in this format:
Format of URIs with PAT authentication

```
dremio://<username>:<PAT>@<host>:<port>[/option=value[;...]]  

```

       * ``username``: The username of the Dremio account to use.
       * ``PAT``: The personal access token to use.
       * ``host``: The hostname or IP address of the coordinator node of the Dremio cluster.
       * ``port``: The port to connect to on the coordinator node. Unless explicitly changed on the node, the port is 31010.
       * `[/option=value[;...]]`: One or more optional properties, separated by semicolons. See [SSL Connection Properties](/client-applications/preset#ssl-connection-properties) and [Advanced Properties](/client-applications/preset#advanced-properties).
Example URI with PAT authentication

```
dremio://myUserID:myPAT@myHost:31010/ssl=true;schema=Samples;routing_tag=thisTag  

```

    5. Test the connection. If the test fails, check the syntax and values in the connection URI.
    6. Click **Connect**.


## SSL Connection Properties[​](/client-applications/preset#ssl-connection-properties "Direct link to SSL Connection Properties")
Use the following properties to configure SSL encryption and verification methods:  
| Name  | Type  | Description  | Default Value  |  
| --- | --- | --- | --- |  
| UseEncryption  | integer  | Forces the client to use an SSL-encrypted connection to communicate with Dremio. Accepted values: `true`, the client communicates with Dremio by using SSL encryption; `false`, the client does not communicate with Dremio by using SSL encryption.  | true  |  
| disableCertificateVerification  | integer  | Specifies whether to verify the host certificate against the trust store. Accepted values: `false`, verifies the certificate against the trust store; `true`, does not verify the certificate against the trust store.  | false  |  
| trustedCerts  | string  | The full path of the .pem file containing certificates trusted by a CA, for the purpose of verifying the server. If this option is not set, defaults to using the trusted CA certificates .pem file.The TLS connection fails if you do not specify a value when UseEncryption is true and disableCertificateVerification is false.  | N/A  |  
## Advanced Properties[​](/client-applications/preset#advanced-properties "Direct link to Advanced Properties")  
| Name  | Type  | Description  | Default Value  |  
| --- | --- | --- | --- |  
| routing_queue  | string  | Specifies the queue to route queries to during a session. Direct Routing is used to specify the exact queue and execution cluster to run queries on for a given session. With Direct Routing, workload-management (WLM) rules are not considered; instead, queries are routed directly to the specified queue. For more information, see [Workload Management](/admin/workloads/workload-management).  | N/A  |  
| routing_tag  | string  | When this property is set, the specified tag is associated with all queries executed within a session. Rules can check for the presence of a tag with the function "tag()". For more information, see [Workload Management](/admin/workloads/workload-management).  | N/A  |  
Was this page helpful?
[Previous Microstrategy Workstation](/client-applications/microstrategy)[Next SAP Business Objects](/client-applications/business-objects)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microstrategy Workstation](/client-applications/microstrategy)[Next SAP Business Objects](/client-applications/business-objects)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fpreset%2F&_biz_t=1777950352732&_biz_i=Preset%20%7C%20Dremio%20Documentation&_biz_n=68&rnd=282087&cdn_o=a&_biz_z=1777950352732)
