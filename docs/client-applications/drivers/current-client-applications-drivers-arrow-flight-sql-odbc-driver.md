---
url: /client-applications/drivers/arrow-flight-sql-odbc-driver
slug: /client-applications/drivers/arrow-flight-sql-odbc-driver
title: "Arrow Flight SQL ODBC | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.929916958
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * [Drivers](/client-applications/drivers)
  * Arrow Flight SQL ODBC

Version: current [26.x]
On this page
# Arrow Flight SQL ODBC
Starting with Dremio v22.0, you can use the Arrow Flight SQL ODBC driver to connect to Dremio from ODBC client applications. This driver is licensed under 
## Supported Operating Systems​
You can use the driver on systems that run the following 64-bit operating systems:
  * Linux: RedHat/CentOS
  * Windows 10 and later
  * macOS (Intel processors only)


The Arrow Flight SQL ODBC driver is not supported on Apple Silicon M1, M2, and M3 processors. While previous workarounds using Rosetta may have been available, they are no longer reliable and may not work with current versions. For Apple Silicon Mac computers, consider using alternative connection methods such as the [Arrow Flight SQL JDBC driver](/client-applications/drivers/arrow-flight-sql-jdbc-driver).
## Authentication Methods​
Dremio supports several authentication methods for client connections.
### Username and Password​
Pass a username and password with the **UID** and **PWD** properties.
### Personal Access Tokens Enterprise​
Pass a username and personal access token (PAT) with the **UID** and **PWD** properties, respectively. See [Personal Access Tokens](/security/authentication/personal-access-tokens) for enabling and creating PATs.
Dremio recommends OAuth access tokens to improve security by reducing the risk of compromised passwords or personal access tokens.
### OAuth Access Tokens Enterprise​
To create a connection with an OAuth access token, configure the **TOKEN** property with the value of the OAuth access token.
Example Arrow Flight SQL ODBC Connection using OAuth Access Tokens

```
import pyodbc  
  
with pyodbc.connect(  
        # Default location on Linux  
        Driver='/opt/arrow-flight-sql-odbc-driver/lib64/libarrow-odbc.so.0.9.1.168',  
        HOST='my.odbc.host',  
        PORT=32010,  
        useEncryption='true',  
        TOKEN=dremio_access_token,  
        autocommit=True,  
    ) as conn:  
        with conn.cursor() as cursor:  
            cursor.execute('select * from test_table')  
            results = cursor.fetchall()  

```

Users can create OAuth access tokens using a local or LDAP username and password, a PAT, or an external JWT. Dremio provides [sample code](/reference/api/oauth-token) for each of these cases.
## Downloading and Installing​
  * Windows
  * Linux
  * macOS


### Downloading and Installing on Windows​
The Arrow Flight SQL ODBC driver is not available for 32-bit Windows versions.
If you plan to use Microsoft Power BI Desktop April 2022 or later to connect to Dremio, you do not need to use this driver. Power BI Desktop April 2022 and later includes a connector that you can use to connect to Dremio. See [Connecting from Microsoft Power BI](/client-applications/microsoft-power-bi).
To download and install the Arrow Flight SQL ODBC driver:
  1. Download the Windows 64-bit version of the driver from the [ODBC driver download page](https://www.dremio.com/drivers/odbc/).
  2. Run the installer.
  3. (Optional) In the **User Account Control** page, click **Yes**. This page appears only if there is user account control configured on your Windows machine.
  4. In the **Welcome to Dremio** page, click **Next**.
  5. Click **Install**.
  6. In the **Installation Complete** page, click **Next**.
  7. In the **Completing Arrow Flight SQL ODBC Driver Setup Wizard** page, click **Finish**.


Next, configure the driver.
### Downloading and Installing on Linux​
To download and install the Arrow Flight SQL ODBC driver:
  1. Download the Linux version of the driver from the [ODBC driver download page](https://www.dremio.com/drivers/odbc/).
  2. Run the following command to install the driver and automatically create the data source name (DSN) `Arrow Flight SQL ODBC DSN`:
Install driver and create data source name (DSN)

```
sudo yum localinstall <dremio-odbc-rpm-path>  

```



Next, configure the driver.
### Downloading and Installing on macOS​
To download and install the Arrow Flight SQL ODBC driver:
This driver only supports Intel-based Macs. It is not compatible with Apple Silicon M1, M2, and M3 processors.
  1. Download the macOS version of the driver from the [ODBC driver download page](https://www.dremio.com/drivers/odbc/).
  2. Go to the download location and double-click the downloaded `.dmg` file.
  3. Double-click the `.pkg` file.
  4. In the **Welcome to the ODBC Driver for Arrow Flight SQL Installer** page, click **Continue**.
  5. In the **Standard Install on "Macintosh HD"** page, Click **Install**. Optionally, if you want to change the install location, click **Change Install Location** and navigate to the new location.
  6. In the **Installer is trying to install new software** dialog, specify your macOS password. Then, click **Install Software**.
  7. After the installation is complete, click **Close**.


Next, configure the driver.
## Configuring​
### Configuring on Windows​
To configure the System DSN:
Do not follow these steps if you are using Microsoft Power BI Desktop to connect to Dremio. For the steps for configuring Power BI, see [Connecting from Microsoft Power BI](/client-applications/microsoft-power-bi).
If you want to use a personal access token (PAT), rather than a password, for authenticating to Dremio, generate a PAT. See [Personal Access Tokens](/security/authentication/personal-access-tokens) for the steps.
  1. Go to **Start Menu** &gt; **Window Administrative Tools**. Click **ODBC Data Sources (64-bit)**.
  2. In the **ODBC Data Source Administrator (64-bit)** dialog, click **System DSN**.
  3. Select **Arrow Flight SQL ODBC DSN** and click **Configure**.
  4. In the **HOST** field, specify the hostname of the server or its IP address.
  5. In the **PORT** field, specify the port to use for connections from Arrow Flight SQL ODBC client applications, which is 32010 by default.
  6. Specify client information in the appropriate fields for your authentication type:  
| Field  | Username and Password  | Personal Access Token  | OAuth Access Token  |  
| --- | --- | --- | --- |  
| **UID**  | Username  | Username  | Do not specify  |  
| **PWD**  | Password  | Personal access token  | Do not specify  |  
| **TOKEN**  | Do not specify  | Do not specify  | OAuth access token  |  
  7. In the **UseEncryption** field, specify one of these values:
     * `true`, if Dremio is configured for encrypted communication with your Arrow Flight SQL ODBC client applications.
     * `false`, if Dremio is not configured for encrypted communication with your Arrow Flight SQL ODBC client applications. Dremio is unencrypted by default.


For additional parameters, see Connection Parameters.
If you ever need to enable tracing for troubleshooting problems with the driver, click the **Tracing** tab in the **ODBC Data Source Administrator (64-bit)** dialog, set the log-file path, and then click **Start Tracing Now**.
### Configuring on Linux​
  * Before configuring, ensure that unixODBC is installed.
  * If you want to base your configuration on examples, copy the content of the `odbc.ini` and `odbcinst.ini` files in the `/opt/arrow-flight-sql-odbc-driver/conf` directory and paste the content into your system `/etc/odbc.ini` and `/etc/odbcinst.ini` files.


To configure the properties in the odbc.ini file:
  1. In the **HOST** field, specify the hostname of the server or its IP address.
  2. In the **PORT** field, specify the port to use for connections from Arrow Flight SQL ODBC client applications, which is 32010 by default.
  3. Specify client information in the appropriate fields for your authentication type:  
| Field  | Username and Password  | Personal Access Token  | OAuth Access Token  |  
| --- | --- | --- | --- |  
| **UID**  | Username  | Username  | Do not specify  |  
| **PWD**  | Password  | Personal access token  | Do not specify  |  
| **TOKEN**  | Do not specify  | Do not specify  | OAuth access token  |  
  4. In the **UseEncryption** field, specify one of these values:
     * `true`, if Dremio is configured for encrypted communication with your Arrow Flight SQL ODBC client applications.
     * `false`, if Dremio is not configured for encrypted communication with your Arrow Flight SQL ODBC client applications. Dremio is unencrypted by default.


For additional parameters, see Connection Parameters.
To find out unixODBC has created your `odbc.ini` and `odbcinst.ini` files, run this command:

```
odbcinst -j  

```

If you ever need to enable tracing for troubleshooting problems with the driver, see the help for unixODBC.
### Configuring on macOS​
Before configuring, ensure that 
  1. Launch ODBC Manager.
  2. On the System DSN page, select **Arrow Flight SQL ODBC DSN** and click **Configure**.
  3. (Optional) Change the DSN.
  4. In the **Host** field, specify the hostname of the server or its IP address.
  5. In the **Port** field, specify the port to use for connections from Arrow Flight SQL ODBC client applications, which is 32010 by default.
  6. Specify client information in the appropriate fields for your authentication type:  
| Field  | Username and Password  | Personal Access Token  | OAuth Access Token  |  
| --- | --- | --- | --- |  
| **UID**  | Username  | Username  | Do not specify  |  
| **PWD**  | Password  | Personal access token  | Do not specify  |  
| **TOKEN**  | Do not specify  | Do not specify  | OAuth access token  |  
  7. In the **UseEncryption** field, specify one of these values:
     * `true`, if Dremio is configured for encrypted communication with your Arrow Flight SQL ODBC client applications.
     * `false`, if Dremio is not configured for encrypted communication with your Arrow Flight SQL ODBC client applications. Dremio is unencrypted by default.


For additional parameters, see Connection Parameters.
If you ever need to enable tracing for troubleshooting problems with the driver, see the help for your driver manager.
## Connection Parameters​
### Primary Connection Parameters​
Use these parameters to configure basic connection details such as what data source to connect with.
The Arrow Flight SQL ODBC driver does not support password-protected `.pem` / `.crt` files or multiple `.crt` certificates in a single `.pem` / `.crt` file.  
| Name  | Type  | Description  | Default Value  |  
| --- | --- | --- | --- |  
| Host  | string  | Sets the IP address or hostname for the Dremio server. If you specify an IP address and you set the TLS connection parameter `useEncryption` to `true`, ensure that the `/etc/hosts/` file includes an entry to map the IP address to the host.  | None  |  
| Port  | integer  | Sets the TCP port number that Dremio uses to listen to connections from Arrow Flight SQL ODBC clients.  | 32010  |  
| Schema  | string  | Provides the name of the database schema to use by default when a schema is not specified in a query. However, this does not prevent queries from being issued for otsher schemas. Such queries must explicitly include the schema.  | None  |  
Specify client information in the appropriate fields for your authentication type:  
| Field  | Username and Password  | Personal Access Token  | OAuth Access Token  |  
| --- | --- | --- | --- |  
| **UID**  | Username  | Username  | Do not specify  |  
| **PWD**  | Password  | Personal access token  | Do not specify  |  
| **TOKEN**  | Do not specify  | Do not specify  | OAuth access token  |  
### TLS Connection Parameters​
Use the following parameters to configure TLS encryption and verification methods for regular connections.  
| Name  | Type  | Description  | Default Value  |  
| --- | --- | --- | --- |  
| useEncryption  | integer  | Configures the client to use a TLS-encrypted connection to communicate with the Dremio server. Accepted values: 
  * `true`, the client communicates with the Dremio server only using TLS encryption. This is the default value. Therefore, communication between the client application and your Dremio server must be encrypted if you do not override this default value. See the configuration of Arrow Flight TLS for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information. 
  * `false`, TLS encryption is disabled with the client. If you specify this value, ensure that the encryption of communication between the client application and your Dremio server is not configured. 

 | true  |  
| disableCertificateVerification  | integer  | Specifies whether the driver should verify the host certificate against the trust store. Accepted values: 
  * `false`, the driver verifies the certificate against the trust store.
  * `true`, the driver does not verify the certificate against the trust store. 

 | false  |  
| useSystemTrustStore  | integer  | Controls whether to use a CA certificate from the system's trust store, or from a specified `.pem` file. Accepted values: 
  * `true`, the driver verifies the connection using a certificate in the system trust store.
  * `false`, the driver verifies the connection using the `.pem` file specified by the `trustedCerts` parameter. 

 |  `true` on Windows and macOS, `false` on Linux (which does not have a system truststore)  |  
| trustedCerts  | string  | The full path of the `.pem` file containing certificates trusted by a CA, for the purpose of verifying the server. If this option is not set, the driver defaults to using the trusted CA certificates `.pem` file installed by the driver. The exact file path varies according to the operating system on which the driver is installed. The path for the Windows driver differs from the path set for the macOS driver. The TLS connection fails if you do not specify a value when `useEncryption` is `true` and `disableCertificateVerification` is `false`.  | N/A  |  
| hideSQLTablesListing  | boolean  | Prevents Microsoft Excel 16.95+ from crashing by hiding the list of available sources in Microsoft Excel’s Query Dialog. Set to `true` to enable. Only for Intel-based Mac computers.  | `false`  |  
### Advanced Parameters​  
| Name  | Type  | Description  | Default Value  |  
| --- | --- | --- | --- |  
| quoting  | string  | Specifies which type of character to use to delimit values in queries. The value can be BACK_TICK, BRACKET, or DOUBLE_QUOTE.  | DOUBLE_QUOTE  |  
| routing_queue  | string  | Specifies the queue to route queries to during a session. Direct Routing is used to specify the exact queue and execution cluster to run queries on for a given ODBC session. With Direct Routing, workload-management (WLM) rules are not considered; instead, queries are routed directly to the specified queue. For more information, see [Workload Management](/admin/workloads/workload-management).  | N/A  |  
| routing_tag  | string  | When this parameter is set, the specified tag is associated with all queries executed within a session. Rules can check for the presence of a tag with the function "tag()". For more information, see [Workload Management](/admin/workloads/workload-management).  | N/A  |  
| stringColumnLength  | string  | The maximum length of data in columns of the STRING datatype and of complex datatypes. The range is 1 to 2147483647.  | 1024.  |  
## Logging​
You can inspect and extract client-side driver logs through the macOS logging infrastructure, because every macOS installation comes with an embedded Console application that allows you to filter by log types. This feature is only available for Intel-based Mac computers, and the log activity of the ODBC driver mostly consists of ODBC API calls.
To start logging:
  1. Open the Console application.
  2. In the search box, select **Excel** in the **PROCESS** dropdown, and **odbc** in the **ANY** dropdown.
![Filter by Excel and ODBC for logs in the Console application.](https://docs.dremio.com/images/odbc-driver-log-excel-filter.png)
  3. Click **Start**.


## Supported Conversions from Dremio Datatypes to ODBC Datatypes​  
| Dremio Data Types  | SQL_C_BINARY  | SQL_C_BIT  | SQL_C_CHAR  | SQL_C_WCHAR  | SQL_C_STINYINT  | SQL_C_UTINYINT  | SQL_C_SSHORT  | SQL_C_USHORT  | SQL_C_SLONG  | SQL_C_ULONG  | SQL_C_SBIGINT  | SQL_C_UBIGINT  | SQL_C_FLOAT  | SQL_C_DOUBLE  | SQL_C_NUMERIC  | SQL_C_DATE  | SQL_C_TIME  | SQL_C_TIMESTAMP  | SQL_C_GUID  | SQL_C_INTERVAL_*  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| BOOLEAN  | N  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | N  | Invalid  | Invalid  | Invalid  | Invalid  | N  |  
| VARBINARY  | Y  | Invalid  | N  | N  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  |  
| DATE  | N  | Invalid  | Y  | Y  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Y  | Invalid  | Y  | Invalid  | Invalid  |  
| FLOAT  | N  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | N  | Invalid  | Invalid  | Invalid  | Invalid  | N  |  
| DECIMAL  | N  | N  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Invalid  | Invalid  | Invalid  | Invalid  | N  |  
| DOUBLE  | N  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | N  | Invalid  | Invalid  | Invalid  | Invalid  | N  |  
| INTERVAL (day to seconds)  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | Invalid  | Invalid  | Invalid  | N  |  
| INTERVAL (years to months)  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | N  | Invalid  | Invalid  | Invalid  | N  |  
| INT  | N  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | N  | Invalid  | Invalid  | Invalid  | Invalid  | N  |  
| BIGINT  | N  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | N  | Invalid  | Invalid  | Invalid  | Invalid  | N  |  
| TIME  | N  | N  | Y  | Y  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Y  | Y  | Invalid  | Invalid  |  
| TIMESTAMP  | N  | N  | Y  | Y  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Y  | Y  | Invalid  | Invalid  |  
| VARCHAR  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | Y  | N  | Invalid  |  
| STRUCT  | N  | N  | Y  | Y  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  |  
| LIST  | N  | Invalid  | Y  | Y  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  | Invalid  |  
## Limitations​
Parameterized queries are not supported.
Was this page helpful?
[Previous Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver)[Next Dremio JDBC Driver (Legacy)](/client-applications/drivers/jdbc)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver)[Next Dremio JDBC Driver (Legacy)](/client-applications/drivers/jdbc)
![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   

Allow All
###  Manage Consent Preferences
#### Functional Cookies
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
#### Performance Cookies
Performance Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
#### Targeting Cookies
Targeting Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
#### Strictly Necessary Cookies
Always Active
These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
Back Button
### Cookie List
Search Icon
Filter Icon
Clear
checkbox label label
Apply Cancel
Consent Leg.Interest
checkbox label label
checkbox label label
checkbox label label
Reject All Confirm My Choices
