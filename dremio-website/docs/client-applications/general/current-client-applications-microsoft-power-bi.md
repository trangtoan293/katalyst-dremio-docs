---
url: /client-applications/microsoft-power-bi
title: "Microsoft Power BI | Dremio Enterprise Documentation"
depth: 1
crawled_at: 63999.564915458
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Microsoft Power BI

Version: current [26.x]
On this page
# Microsoft Power BI
Connect 
You can connect Power BI to Dremio in one of the following ways:
  * Configure a reusable connection to use in Power BI Desktop, Power BI Gateway, or Power BI Service. Power BI Service can connect to Dremio through DirectQuery or through Power BI Gateway.
  * [Connect to a specific dataset](/client-applications/microsoft-power-bi#create-a-live-connection-to-a-dataset-from-dremio) by downloading the `.pbids` file from Dremio and opening it in Power BI Desktop.


## Supported Authentication Methods[​](/client-applications/microsoft-power-bi#supported-authentication-methods "Direct link to Supported Authentication Methods")
From Power BI, you can authenticate to Dremio with one of the following methods:
  * **Username and password** : Use your Dremio credentials.
  * **Personal access token (PAT)** : For details, see [Personal Access Tokens](/security/authentication/personal-access-tokens).
  * **Single sign-on (SSO) through OAuth 2.0** : For steps on how to configure SSO, see [Enable SSO to Dremio from Power BI](/client-applications/microsoft-power-bi#enable-sso-to-dremio-from-power-bi).


## Connect to Dremio from Power BI[​](/client-applications/microsoft-power-bi#connect-to-dremio-from-power-bi "Direct link to Connect to Dremio from Power BI")
The Power BI connector for Dremio now supports connectivity through the open-source [Enable Connectivity with ADBC](/client-applications/microsoft-power-bi#enable-connectivity-with-adbc).
Existing connections will continue to work, but we recommend using the embedded ADBC Flight SQL driver for all new reports and migrating existing reports to ADBC to benefit from improved performance and supportability.
To connect to Dremio from Power BI Desktop:
  1. Click **Get data** , search for `Dremio`, select **Dremio Software** , and click **Connect**.
  2. In the Dremio Software dialog, follow these steps:
a. Use the Flight SQL ADBC driver and in the **Server** field specify your Dremio hostname with the `adbc://` prefix. Example: `adbc://acme-company.dremio.com`
b. (Optional) Complete the other fields in the dialog as you normally would.
c. Under **Data Connectivity mode** , select either **Import** or **DirectQuery**. Click **OK**.
d. For **Authentication Method** , select **Basic** or **Key**.
     * **Basic** : Enter your Dremio username and password.
     * **Key** : Paste in the personal access token you obtained from Dremio. For details, see [Personal Access Tokens](/security/authentication/personal-access-tokens).
  3. Click **Connect**.


Creating Dataflows through Power BI Service is also supported. To create a dataflow, click **New** &gt; **Dataflow**. For the data source connection, follow the steps above.
### Create a Live Connection to a Dataset from Dremio[​](/client-applications/microsoft-power-bi#create-a-live-connection-to-a-dataset-from-dremio "Direct link to Create a Live Connection to a Dataset from Dremio")
You can generate a Microsoft Power BI Data Source (`.pbids`) file that represents a live connection to a dataset that is in Dremio. No actual data is stored in this file, and you can think of it as a shortcut to a Power BI Desktop session with a preconfigured view of your data.
The `.pbids` file download option must be enabled for users to have access to this feature. To enable this feature, see [Enable the `.pbids` file download](/client-applications/microsoft-power-bi#enable-the-pbids-file-download-in-the-dremio-console).
To create a live connection to a dataset:
  1. In Dremio, navigate to the dataset.
  2. Click the ellipsis (**...**) next to the dataset name.
  3. Select **Download .pbids file**.
  4. Open the downloaded file in Power BI Desktop.
  5. Authenticate using your preferred method.


## Power BI Gateway[​](/client-applications/microsoft-power-bi#power-bi-gateway "Direct link to Power BI Gateway")
To enable Power BI users to connect to Dremio via Power BI Gateway:
  1. Install and configure 
  2. In the Power BI Gateway configuration, add Dremio as a data source using the same connection details as above.


## Advanced Configuration[​](/client-applications/microsoft-power-bi#advanced-configuration "Direct link to Advanced Configuration")
### Enable Connectivity with ADBC[​](/client-applications/microsoft-power-bi#enable-connectivity-with-adbc "Direct link to Enable Connectivity with ADBC")
Dremio supports connectivity through Arrow Database Connectivity (ADBC). To enable this for Power BI Service, see the following options.
#### Enable the ADBC Option for a New Connection[​](/client-applications/microsoft-power-bi#enable-the-adbc-option-for-a-new-connection "Direct link to Enable the ADBC Option for a New Connection")
  1. In Power BI Desktop, click **Get data**.
  2. In the Get Data dialog, locate and select **Dremio Software** , and click **Connect**.
  3. In the Dremio Software dialog, in the **Server** field, specify your hostname with the `adbc://` prefix. Example: `adbc://acme-company.dremio.com`
  4. (Optional) Complete the other fields in the dialog as you normally would.
  5. Click **OK**.
  6. Authenticate using your preferred method, and click **Connect**.


#### Enable the ADBC Option for an Existing Connection[​](/client-applications/microsoft-power-bi#enable-the-adbc-option-for-an-existing-connection "Direct link to Enable the ADBC Option for an Existing Connection")
  1. In Power BI Desktop, go to **Data source settings** , select your source, and click **Change source**.
  2. In the Dremio Software dialog, update the **Server** field by adding the `adbc://` prefix before the hostname. Example: `adbc://acme-company.dremio.com`. If you're unable to edit the source this way, click **Transform data** , then click **Advanced Editor** in the **Home** tab. In the dialog that appears, update the hostname/server with the `adbc://` prefix, and click **Done**.
  3. Click **OK**.
  4. Reauthenticate using your preferred method, and click **Connect**.


### Enable the `.pbids` File Download in the Dremio Console[​](/client-applications/microsoft-power-bi#enable-the-pbids-file-download-in-the-dremio-console "Direct link to enable-the-pbids-file-download-in-the-dremio-console")
To enable the `.pbids` file download feature:
  1. In Dremio, go to **Admin** &gt; **Settings**.
  2. In the **Support** section, enable **Allow downloading of .pbids files**.
  3. Click **Save**.


### Enable SSO to Dremio from Power BI[​](/client-applications/microsoft-power-bi#enable-sso-to-dremio-from-power-bi "Direct link to Enable SSO to Dremio from Power BI")
SSO is supported only for datasets that use DirectQuery.
SSO only works for reports created using the Dremio Cloud connector in Power BI Desktop. Reports created with the Dremio Enterprise (Software) connector cannot use SSO by simply changing credentials, they must be converted first.
To convert existing reports from the Dremio Enterprise (Software) connector to the Dremio Cloud connector, you'll need to modify the connection in Power BI's Advanced Editor to change the function from `Dremio.Databases` to `DremioCloud.DatabasesByServerV370`.
Prerequisites: Configure Dremio for Microsoft Entra ID
Before enabling SSO for Power BI reports, Dremio must be configured to use Microsoft Entra ID (Azure AD) as an identity provider.
**Required configuration:**
  * Set `services.coordinator.web.auth.type` to the Microsoft Entra ID / OIDC provider type configured for your deployment (for example, `azuread`)
  * Provide the required OIDC or Azure AD configuration file (`azuread.json` or equivalent)
  * Deploy configuration files to all coordinator nodes
  * Restart Dremio cluster after applying changes


For complete setup steps, see [Configure Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id).
All authentication setup must be done through configuration files before enabling SSO in Power BI.
The following steps configure the Power BI side of SSO. These steps assume your Dremio deployment is already configured to authenticate users via Microsoft Entra ID.
To enable SSO for Power BI reports:
#### Enable SSO for a DirectQuery Report[​](/client-applications/microsoft-power-bi#enable-sso-for-a-directquery-report "Direct link to Enable SSO for a DirectQuery Report")
To enable SSO for a report that uses DirectQuery:
  1. In Power BI Service, open the workspace to which you published the report.
  2. Find the dataset that is associated with the report, click the three dots next to its name, and select **Settings**.
  3. In the settings for the dataset, expand **Data source credentials**.
  4. Click **Edit credentials**.
  5. For **Authentication method** , select **OAuth2**.
  6. In the **Privacy level setting for this data source** field, ensure that **Private** is selected.
  7. Select the check box **Report viewers can only access this data source with their own Power BI identities using DirectQuery**.
  8. Click **Sign in**.


#### Enable SSO for Reports with Power BI Gateway[​](/client-applications/microsoft-power-bi#enable-sso-for-reports-with-power-bi-gateway "Direct link to Enable SSO for Reports with Power BI Gateway")
To enable SSO when you are using Power BI Gateway:
  1. In Power BI Service, open the workspace to which you published the report.
  2. Find the dataset that is associated with the report, click the three dots next to its name, and select **Settings**.
  3. In the settings for the dataset, expand **Gateway connection**.
  4. Recreate your data source by following these steps:
    1. Select the **Maps to** field.
    2. Select **Manually add to gateway**.
    3. For **Data Source Name** , enter a name for the data source.
    4. For **Data Source Type** , select **Dremio Software**.
    5. For **Server** , enter your Dremio hostname with the `adbc://` prefix. Example: `adbc://acme-company.dremio.com`
    6. For **Authentication Method** , select **OAuth2**.
    7. Click **Add**.
  5. In the **Data source credentials** section, click **Edit credentials**.
  6. For **Authentication method** , select **OAuth2**.
  7. In the **Privacy level setting for this data source** field, ensure that **Private** is selected.
  8. Select the check box **Report viewers can only access this data source with their own Power BI identities using DirectQuery**.
  9. Click **Sign in**.


SSO requires the OAuth2 authentication method. Basic authentication and personal access tokens do not support SSO when used through Power BI Gateway.
## Arrow Database Connectivity (ADBC) Limitations[​](/client-applications/microsoft-power-bi#arrow-database-connectivity-adbc-limitations "Direct link to Arrow Database Connectivity \(ADBC\) Limitations")
  * ADBC is not enabled by default. It must be enabled by the owner of the report.
  * NativeQuery is not supported.
  * Creating relationships is not supported.
  * Metadata calls are not cached.
  * Power BI Desktop occasionally caches errors that might affect future connection attempts until the cache is cleared.
  * Complex data types such as `MAP` and `INTERVAL` are not supported.
  * When using DirectQuery, chaining functions is supported, but some complex scenarios may not work as expected. Complex optional parameters for functions are not supported.


## Troubleshoot Power BI[​](/client-applications/microsoft-power-bi#troubleshoot-power-bi "Direct link to Troubleshoot Power BI")
### Cached Data Issues[​](/client-applications/microsoft-power-bi#cached-data-issues "Direct link to Cached Data Issues")
If you have previously installed older versions of Power BI Desktop, cached data may interfere with the newer versions of the Flight SQL drivers resulting in connection errors.
#### Problem[​](/client-applications/microsoft-power-bi#problem "Direct link to Problem")
For example, when using Flight SQL ADBC, cached connection data in Power BI could cause the following errors:
  * `ADBC: IOError [] [FlightSQL] [FlightSQL] unresolved address (Unavailable; GetObjects(GetDBSchemas))`
  * `ADBC: IOError [] [FlightSQL] [FlightSQL] connection error: desc = "transport: authentication handshake failed: credentials: cannot check peer: missing selected ALPN property. If you upgraded from a grpc-go version earlier than 1.67, your TLS connections may have stopped working due to ALPN enforcement. For more details, see: https://github.com/grpc/grpc-go/issues/434" (Unavailable; GetObjects(GetDBSchemas))"`


#### Solution[​](/client-applications/microsoft-power-bi#solution "Direct link to Solution")
Clear the Power BI Desktop cache and any cached data source permissions involving Dremio connections by following these steps:
  1. In Power BI Desktop, go to **File** &gt; **Options and Settings** &gt; **Data Source Settings**.
  2. Select **Global Permissions**.
  3. Clear all cached connections by clicking **Clear All Permissions** , or select specific Dremio data sources and click **Clear Permissions**.


After completing these steps, try reconnecting to Dremio using the instructions above.
### Large Result Sets[​](/client-applications/microsoft-power-bi#large-result-sets "Direct link to Large Result Sets")
#### Problem[​](/client-applications/microsoft-power-bi#problem-1 "Direct link to Problem")
When fetching data from Dremio with ADBC you may see the following error:
  * `Unexpected error: [FlightSQL] grpc: received message larger than max (43747370 vs. 16777216) (ResourceExhausted; DoGet: endpoint 0: [])`


#### Solution[​](/client-applications/microsoft-power-bi#solution-1 "Direct link to Solution")
By default, the ADBC driver accepts only messages up to 16 MiB in size. This can be fixed by updating the Power BI M expression to customize the connection as follows:

```
let  
    Source = DremioCloud.DatabasesByServerV370("your-server-here", [  
        MaxMessageSize = 67108864  // 64 MiB  
    ])  
in  
    Source  

```

Replace `your-server-here` with your actual Dremio server address. The `MaxMessageSize` parameter sets the maximum message size in bytes (67108864 = 64 MiB).
Was this page helpful?
[Previous Microsoft Excel PowerPivot](/client-applications/microsoft-excel/microsoft-excel-powerpivot)[Next Microstrategy Workstation](/client-applications/microstrategy)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Excel PowerPivot](/client-applications/microsoft-excel/microsoft-excel-powerpivot)[Next Microstrategy Workstation](/client-applications/microstrategy)
