---
url: /client-applications/tableau
title: "Tableau | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64000.0737645
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Tableau

Version: current [26.x]
On this page
# Tableau
Connect 
You can connect your Tableau application to Dremio in one of two ways:
  * Configure a reusable connection in Tableau Desktop, Tableau Server, or Tableau Cloud.
  * [Connect to a specific dataset](/client-applications/tableau#creating-a-live-connection-to-a-dataset-from-dremio) by downloading the `.tds` file from Dremio and opening it in Tableau Desktop.


## Supported Tableau Versions[​](/client-applications/tableau#supported-tableau-versions "Direct link to Supported Tableau Versions")  
| Product  | Supported Versions  |  
| --- | --- |  
| [Tableau Desktop](/client-applications/tableau#tableau-desktop)  | 2022.1 and later  |  
| [Tableau Server](/client-applications/tableau#tableau-server)  | 2022.1 and later  |  
| [Tableau Cloud](/client-applications/tableau#tableau-cloud)  | Latest version deployed by Tableau  |  
## Supported Authentication Methods[​](/client-applications/tableau#supported-authentication-methods "Direct link to Supported Authentication Methods")
From Tableau, you can authenticate to Dremio with a username and password, or with a [personal access token (PAT)](/security/authentication/personal-access-tokens#creating-a-pat) that can be obtained from the Dremio console.
You can also configure single sign-on (SSO) through OAuth 2.0. For steps on how to configure SSO, see [Enabling SSO to Dremio from Tableau](/client-applications/tableau#enabling-sso-to-dremio-from-tableau-enterprise).
## Tableau Desktop[​](/client-applications/tableau#tableau-desktop "Direct link to Tableau Desktop")
Tableau Desktop includes a native connector that you can use to connect to Dremio.
### Prerequisites for Using the Dremio JDBC Driver (Legacy)[​](/client-applications/tableau#prerequisites-for-using-the-dremio-jdbc-driver-legacy "Direct link to Prerequisites for Using the Dremio JDBC Driver \(Legacy\)")
To connect to Dremio, you'll also need to install the Dremio JDBC driver. Download the Dremio JDBC driver and copy it to Tableau Desktop's `Drivers` folder.
Download driver for macOS by running this command in a Terminal window

```
curl -L https://download.dremio.com/jdbc-driver/dremio-jdbc-driver-LATEST.jar -o ~/Library/Tableau/Drivers/dremio-jdbc-driver-LATEST.jar  

```

Download driver for Windows by running this command in a PowerShell window

```
Invoke-WebRequest -Uri "https://download.dremio.com/jdbc-driver/dremio-jdbc-driver-LATEST.jar" -OutFile "C:\Program Files\Tableau\Drivers\dremio-jdbc-driver-LATEST.jar"  

```

### Prerequisites for Using the Arrow Flight SQL JDBC Driver[​](/client-applications/tableau#prerequisites-for-using-the-arrow-flight-sql-jdbc-driver "Direct link to Prerequisites for Using the Arrow Flight SQL JDBC Driver")
The Tableau Desktop 2025.1+ connector for Dremio supports Arrow Flight SQL JDBC in place of the Dremio JDBC driver (Legacy). To change the driver, download the Arrow Flight SQL JDBC driver, copy it to Tableau Desktop's `Drivers` folder, and select the **Use Arrow Flight SQL Driver (preview)** option in the **Advanced** tab of the connection dialog.
Download driver for macOS by running this command in a Terminal window

```
curl -L https://repo1.maven.org/maven2/org/apache/arrow/flight-sql-jdbc-driver/19.0.0/flight-sql-jdbc-driver-19.0.0.jar -o ~/Library/Tableau/Drivers/flight-sql-jdbc-driver-19.0.0.jar  

```

Download driver for Windows by running this command in a PowerShell window

```
Invoke-WebRequest -Uri "https://repo1.maven.org/maven2/org/apache/arrow/flight-sql-jdbc-driver/19.0.0/flight-sql-jdbc-driver-19.0.0.jar" -OutFile "C:\Program Files\Tableau\Drivers\flight-sql-jdbc-driver-19.0.0.jar"  

```

### Steps for Connecting[​](/client-applications/tableau#steps-for-connecting "Direct link to Steps for Connecting")
To create a Dremio source in Tableau Desktop:
  1. Open Tableau Desktop. Under the **To a Server** section in the **Connect** panel, click **More**.
  2. Select **Dremio**. The **Dremio** connection dialog opens.
  3. In the connection dialog, for the **Product** field, select **Dremio Software**.
  4. For the **Server** field, specify the hostname or IP address of your Dremio coordinator node.
  5. In the **Port** field, specify the port, if it differs from the default port, which is `31010`. If you are using the Arrow Flight SQL JDBC driver, the default port is `32010`.
  6. In the **Authentication** field, select **Username and Password** or **OAuth 2.0**.
     * If you selected **Username and Password** , in the **Username** and **Password** fields, specify your Dremio credentials. If you have a personal access token, specify your username and then paste the token into the **Password** field.
     * If you selected **OAuth 2.0** , specify one of these URLs in the **Dremio Authorization Server** field, replacing `<dremio-host>` with the hostname or IP address for your Dremio coordinator node:
       * If your Dremio cluster does not use SSL: `http://<dremio-host>:9047`
       * If your Dremio cluster does use SSL: `https://<dremio-host>:9047`
  7. (Optional) If your Dremio cluster is configured for secure connections, select the **Require SSL** option.
  8. (Optional for Tableau 2025.1+) If you are using the Arrow Flight SQL JDBC driver, in the **Advanced** tab, select the **Use Arrow Flight SQL Driver (preview)** option. Ensure that you have the Arrow Flight SQL JDBC driver [downloaded](/client-applications/tableau#prerequisites-for-using-the-arrow-flight-sql-jdbc-driver). Ensure you are using the correct port (default port is `32010`).
  9. (Optional) In the **Advanced** tab, specify the **Engine** , **Queue** , and **Tag**. For information about how these values are used, see [Workload Management](/admin/workloads/workload-management).
  10. Click **Sign In**.


### Creating a Live Connection to a Dataset from Dremio[​](/client-applications/tableau#creating-a-live-connection-to-a-dataset-from-dremio "Direct link to Creating a Live Connection to a Dataset from Dremio")
You can generate a Tableau Datasource (`.tds`) file that represents a live connection to a dataset that is in Dremio. No actual data is stored in this file, and you can think of it as a shortcut to a Tableau session with a preconfigured view of your data.
  * The `.tds` file download option must be enabled for users to have access to this feature. To enable this feature, see [Enabling the .tds file download](/client-applications/tableau#enabling-the-tds-file-download-in-the-dremio-console).


To download a `.tds` file:
  1. On the Datasets page in Dremio, find the dataset you want to work with and open the Details panel for the dataset.
  2. Click the button that displays the Tableau logo. Dremio downloads a `.tds` file to your system.
  3. Open the `.tds` file.
  4. Authenticate using your username and password. To authenticate using SSO, follow these steps:
    1. Sign into your identity provider. You are taken to the sign-in screen only the first time that you log into Dremio during a session in Tableau.
    2. Click **Accept** in the Authorize App dialog. This dialog appears only the first time that you authenticate from Tableau through your identity provider.


## Tableau Server[​](/client-applications/tableau#tableau-server "Direct link to Tableau Server")
Tableau Server includes a native connector that you can use to connect to Dremio.
### Prerequisites for Using the Dremio JDBC Driver (Legacy)[​](/client-applications/tableau#prerequisites-for-using-the-dremio-jdbc-driver-legacy-1 "Direct link to Prerequisites for Using the Dremio JDBC Driver \(Legacy\)")
To connect to Dremio, you'll need to install the Dremio JDBC driver. Download the Dremio JDBC driver and copy it to the `Drivers` folder.
Download driver for Windows by running this command in a PowerShell window

```
 Invoke-WebRequest -Uri "https://download.dremio.com/jdbc-driver/dremio-jdbc-driver-LATEST.jar" -OutFile "C:\Program Files\Tableau\Drivers\dremio-jdbc-driver-LATEST.jar"  

```

Download driver for Linux by running this command in a command-line window

```
curl -L https://download.dremio.com/jdbc-driver/dremio-jdbc-driver-LATEST.jar -o /opt/tableau/tableau_driver/jdbc/dremio-jdbc-driver-LATEST.jar  

```

### Prerequisites for Using the Arrow Flight SQL JDBC Driver[​](/client-applications/tableau#prerequisites-for-using-the-arrow-flight-sql-jdbc-driver-1 "Direct link to Prerequisites for Using the Arrow Flight SQL JDBC Driver")
The Tableau Server 2025.1+ connector for Dremio supports Arrow Flight SQL JDBC in place of the Dremio JDBC driver (Legacy). To change the driver, download the Arrow Flight SQL JDBC driver, copy it to the `Drivers` folder, and select the **Use Arrow Flight SQL Driver (preview)** option in the **Advanced** tab of the connection dialog.
Download driver for Windows by running this command in a PowerShell window

```
Invoke-WebRequest -Uri "https://repo1.maven.org/maven2/org/apache/arrow/flight-sql-jdbc-driver/19.0.0/flight-sql-jdbc-driver-19.0.0.jar" -OutFile "C:\Program Files\Tableau\Drivers\flight-sql-jdbc-driver-19.0.0.jar"  

```

Download driver for Linux by running this command in a command-line window

```
curl -L https://repo1.maven.org/maven2/org/apache/arrow/flight-sql-jdbc-driver/19.0.0/flight-sql-jdbc-driver-19.0.0.jar -o /opt/tableau/tableau_driver/jdbc/flight-sql-jdbc-driver-19.0.0.jar  

```

### Steps for Connecting[​](/client-applications/tableau#steps-for-connecting-1 "Direct link to Steps for Connecting")
To create a Dremio source in Tableau Server:
  1. In a web browser, navigate to your Tableau Server site.
  2. In your workbook, click **Add a Data Source**. Alternatively, you can 
  3. In the **Connect to Data** dialog, select **Dremio** under the **Connectors** tab.
  4. In the connection dialog, for the **Product** field, select **Dremio Software**.
  5. For the **Server** field, specify the hostname or IP address of your Dremio coordinator node.
  6. For **Port** , enter the port if it differs from the default `31010` port.
  7. In the **Authentication** field, select **Username and Password** or **OAuth 2.0**.
     * If you selected **Username and Password** , in the **Username** and **Password** fields, specify your Dremio credentials. If you have a personal access token, specify your username and then paste the token into the **Password** field.
     * If you selected **OAuth 2.0** , specify one of these URLs in the **Dremio Authorization Server** field, replacing `<dremio-host>` with the hostname or IP address for your Dremio coordinator node:
       * If your Dremio cluster does not use SSL: `http://<dremio-host>:9047`
       * If your Dremio cluster does use SSL: `https://<dremio-host>:9047`
  8. (Optional) If your Dremio cluster is configured for secure connections, select the **Require SSL** option.
  9. (Optional for Tableau 2025.1+) If you are using the Arrow Flight SQL JDBC driver, in the **Advanced** tab, select the **Use Arrow Flight SQL Driver (preview)** option. Ensure that you have the Arrow Flight SQL JDBC driver [downloaded](/client-applications/tableau#prerequisites-for-using-the-arrow-flight-sql-jdbc-driver-1).
  10. (Optional) In the **Advanced** tab, you can specify the **Engine** , **Queue** , and **Tag**.
  11. Click **Sign In**.


## Tableau Cloud[​](/client-applications/tableau#tableau-cloud "Direct link to Tableau Cloud")
Tableau Cloud includes a native connector that you can use to connect to Dremio.
The Tableau Cloud 2025.1 connector for Dremio has an option to use the [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver) driver in place of the Dremio JDBC driver to power the connection to Dremio. In the **Advanced** tab, select the **Use Arrow Flight SQL Driver (preview)** option.
### Steps for Connecting[​](/client-applications/tableau#steps-for-connecting-2 "Direct link to Steps for Connecting")
To create a Dremio source in Tableau Cloud:
  1. In a web browser, navigate to your Tableau Cloud site.
  2. Click **New** &gt; **Published Data Source** to create a reusable data source or **Data** &gt; **Add a Data Source** from within a workbook. Alternatively, you can 
  3. In the **Connect to Data** dialog, select **Dremio** under the **Connectors** tab.
  4. In the connection dialog, for the **Product** field, select **Dremio Software**.
  5. For the **Server** field, specify the hostname or IP address of your Dremio coordinator node.
  6. In the **Port** field, enter the port if it differs from the default `31010` port.
  7. In the **Authentication** field, select **Username and Password** or **OAuth 2.0**.
     * If you selected **Username and Password** , in the **Username** and **Password** fields, specify your Dremio credentials. If you have a personal access token, specify your username and then paste the token into the **Password** field.
     * If you selected **OAuth 2.0** , specify one of these URLs in the **Dremio Authorization Server** field, replacing `<dremio-host>` with the hostname or IP address for your Dremio coordinator node:
       * If your Dremio cluster does not use SSL: `http://<dremio-host>:9047`
       * If your Dremio cluster does use SSL: `https://<dremio-host>:9047`
  8. (Optional for Tableau 2025.1+) If you are using the Arrow Flight SQL JDBC driver, in the **Advanced** tab, select the **Use Arrow Flight SQL Driver (preview)** option.
  9. (Optional) If your Dremio cluster is configured for secure connections, select the **Require SSL** option.
  10. (Optional) In the **Advanced** tab, you can specify the **Engine** , **Queue** , and **Tag**.
  11. Click **Sign In**.
  12. If you're authenticating using SSO (OAuth 2.0), follow these steps:
    1. Sign into your identity provider. You are taken to the sign-in screen only the first time that you log into Dremio during a session in Tableau Cloud.
    2. Click **Accept** in the Authorize App dialog. This dialog appears only the first time that you authenticate from Tableau Cloud through your identity provider.


## Advanced Configuration[​](/client-applications/tableau#advanced-configuration "Direct link to Advanced Configuration")
### Enabling the `.tds` File Download in the Dremio console[​](/client-applications/tableau#enabling-the-tds-file-download-in-the-dremio-console "Direct link to enabling-the-tds-file-download-in-the-dremio-console")
`ADMIN` privileges are required to make updates to this setting.
To enable users to download `.tds` files for datasets in Dremio, follow these steps:
  1. Click the Settings icon in the left sidebar of a project.
  2. Select **Project Settings**.
  3. Select **BI Applications**.
  4. Select the **Tableau** tab.
  5. Toggle the **Enable Tableau Desktop** setting on.


After the organization administrator completes these steps, refresh your browser window.
### Enabling SSO to Dremio from Tableau Enterprise[​](/client-applications/tableau#enabling-sso-to-dremio-from-tableau-enterprise "Direct link to enabling-sso-to-dremio-from-tableau-enterprise")
SSO using OAuth 2.0 is supported by Tableau Desktop 2022.3 or later, Tableau Server, and Tableau Cloud.
Users of Tableau Desktop will use SSO authentication whether connecting directly to Dremio or connecting through a `.tds` file downloaded from Dremio. If you want to use SSO to authenticate when connecting to Dremio through a `.tds` file, ensure that SSO is enabled and configured for your Dremio cluster before the file is downloaded.
To enable SSO to Dremio from Tableau, ensure that your Dremio cluster has SSO configured with [Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id) or an [OIDC identity provider](/security/authentication/identity-providers/oidc) and follow these steps:
  1. For Tableau Server only, [follow the configuration steps](/client-applications/tableau#configuring-sso-for-tableau-server).
  2. Follow the steps to [enable SSO to Dremio from Tableau](/client-applications/tableau#configuring-dremio).


#### Configuring SSO for Tableau Server[​](/client-applications/tableau#configuring-sso-for-tableau-server "Direct link to Configuring SSO for Tableau Server")
To configure SSO using 
  1. Run the following command in the Tableau Services Manager (TSM) command line. Set a value for the `<tableau-server-domain-name-or-ip>`parameter, which is the domain name or IP of your Tableau Server deployment:
Configure OAuth for Tableau Server

```
tsm configuration set -k oauth.config.clients -v "[{\"oauth.config.id\":\"dremio\", \"oauth.config.client_id\":\"https\:\/\/connectors.dremio.app\/tableau\", \"oauth.config.client_secret\":\"test-client-secret\", \"oauth.config.redirect_uri\":\"https://<tableau-server-domain-name-or-ip>/auth/add_oauth_token\"}]" --force-keys  

```

  2. To apply the changes to Tableau Server, run the command `tsm pending-changes apply`.


#### Configuring Dremio[​](/client-applications/tableau#configuring-dremio "Direct link to Configuring Dremio")
To enable SSO authentication to Dremio from Tableau:
  1. In the Dremio console, click the Settings icon and select the BI Applications page.
  2. On the BI Applications page, click **Tableau**.
  3. Ensure that **Enable single sign-on for Tableau** is toggled on.
  4. **For Tableau Server only:** In the **Redirect URIs** field, paste in the redirect URI for your Tableau Server. If you have set up more than one Tableau Server, you can add multiple URIs, separating them with commas. Each URI uses this format, where `<tableau-server>` is the hostname or IP address of Tableau Server:
Redirect URI for Tableau Server

```
https://<tableau-server>/auth/add_oauth_token  

```



#### Configuring an Identity Provider[​](/client-applications/tableau#configuring-an-identity-provider "Direct link to Configuring an Identity Provider")
Register an additional redirect URI: `https://<dremio-host>:xxxx/oauth/callback` or `http://<dremio-host>:xxxx/oauth/callback` in the SSO application configured in your identity provider. See the configuration instructions for [Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id#configuring-microsoft-entra-id) or [OpenID Identity Providers](/security/authentication/identity-providers/oidc#configuring-openid) for additional information.
### Customizing the Connection String[​](/client-applications/tableau#customizing-the-connection-string "Direct link to Customizing the Connection String")
To add JDBC parameters to the JDBC URL that Tableau generates for connections to Dremio using the parameters from the connection dialog, see 
### Manually Installing the Dremio Connector[​](/client-applications/tableau#manually-installing-the-dremio-connector "Direct link to Manually Installing the Dremio Connector")
If you are previewing a feature that hasn't been released or you have been provided a `.taco` file with a fix that hasn't been released, you can manually install this version of the Dremio connector for temporary use.
To manually install the connector:
  1. Download the [`dremio.taco` file](https://download.dremio.com/tableau-connector/).
  2. Move the `dremio.taco` file:
Copy dremio.taco file on macOS

```
cp <download-location>/dremio.taco ~/Library/Tableau/Connectors/  

```

Copy dremio.taco file on Windows

```
copy C:\<download-location>\dremio.taco "C:\Program Files\Tableau\Connectors"  

```

Move dremio.taco file for Linux (Tableau Server only)

```
mv <download-location>/dremio.taco /opt/tableau/connectors/dremio.taco  

```

  3. (Optional) If a new version of the Dremio JDBC driver is required, download it and copy it to Tableau Desktop's `Drivers` folder by running the following command:
Download driver for macOS

```
curl https://download.dremio.com/jdbc-driver/dremio-jdbc-driver-LATEST.jar -o -l ~/Library/Tableau/Drivers/dremio-jdbc-driver-LATEST.jar  

```

Download driver for Windows

```
Invoke-WebRequest -Uri "https://download.dremio.com/jdbc-driver/dremio-jdbc-driver-LATEST.jar" -OutFile "C:\Program Files\Tableau\Drivers\dremio-jdbc-driver-LATEST.jar"  

```

For Linux, download the driver from the [download site](https://download.dremio.com/jdbc-driver/?_ga=2.148321079.1016122501.1667783452-235854462.1630284576&_gac=1.263316990.1664550761.CjwKCAjwp9qZBhBkEiwAsYFsb0x4InlcRP7Rv4XsjamZQHhJILHJWOtBOu30xZC1QwvEXF8cPFs1HhoCB-kQAvD_BwE) and move it by using this command: Download driver for Linux (Tableau Server only)

```
mv <download-location>/dremio-jdbc-driver-LATEST.jar /opt/tableau/tableau_driver/jdbc/dremio-jdbc-driver-LATEST.jar  

```

  4. Now you can connect to Dremio from [Tableau Desktop](/client-applications/tableau#steps-for-connecting) or [Tableau Server](/client-applications/tableau#steps-for-connecting-1).


### Exporting a Dremio Dataset with SSL Placeholder[​](/client-applications/tableau#exporting-a-dremio-dataset-with-ssl-placeholder "Direct link to Exporting a Dremio Dataset with SSL Placeholder")
If you have SSL enabled on Dremio, and you want to export a `.tds` file to use in a Tableau application for quickly connecting to a dataset, you can do so by add the support key `export.tableau.extra-native-connection-properties` and set the value to `SSL=true`. This property allows you to set the JDBC connection string when exporting a `.tds` file. The default is an empty string. This is the only property currently supported for `export.tableau.extra-native-connection-properties`, and `true` is the only supported value.
To know how to set the `export.tableau.extra-native-connection-properties` support key, see [Support Keys](/help-support/support-settings/#support-keys).
#### Changing the Hostname[​](/client-applications/tableau#changing-the-hostname "Direct link to Changing the Hostname")
You can use the `export.bi.hostname` support key to change the default hostname of the SQL endpoint for generating TDS files.
To know how to set the `export.bi.hostname` support key, see [Support Keys](/help-support/support-settings/#support-keys).
#### Example: SSL setting[​](/client-applications/tableau#example-ssl-setting "Direct link to Example: SSL setting")
In the following example, SSL is enabled in the **dremio.conf** file. See [Using Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#client-encryption) for more information.
Example SSL settings for generating a self-signed certificate with JDBC Dremio config

```
services.coordinator.client-endpoint.ssl.enabled: true  
services.coordinator.client-endpoint.ssl.auto-certificate.enabled: true  

```

#### Example: export.tableau.extra-native-connection-properties value[​](/client-applications/tableau#example-exporttableauextra-native-connection-properties-value "Direct link to Example: export.tableau.extra-native-connection-properties value")
Example SSL property value

```
SSL=true  

```

## Limitations[​](/client-applications/tableau#limitations "Direct link to Limitations")
  * When using Tableau with Dremio, avoid using periods in space or dataset names. Due to differences in hierarchy support, periods in paths are treated as separators, resulting in errors when navigating or selecting spaces or datasets with periods in their names.


Was this page helpful?
[Previous SAP Business Objects](/client-applications/business-objects)[Next ThoughtSpot](/client-applications/thoughtspot)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SAP Business Objects](/client-applications/business-objects)[Next ThoughtSpot](/client-applications/thoughtspot)
