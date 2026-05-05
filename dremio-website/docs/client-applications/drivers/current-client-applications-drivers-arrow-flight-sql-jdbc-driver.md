---
url: /client-applications/drivers/arrow-flight-sql-jdbc-driver
title: "Arrow Flight SQL JDBC | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.313125666
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * [Drivers](/client-applications/drivers)
  * Arrow Flight SQL JDBC

Version: current [26.x]
On this page
# Arrow Flight SQL JDBC
The Arrow Flight SQL JDBC driver is an open-source driver that is based on the specifications for the Java Database Connectivity (JDBC) API. However, the Flight SQL JDBC driver uses Apache Arrow, so it is able to move large amounts of data faster, in part because it does not need to serialize and then deserialize data.
This driver solves a problem that is common to many BI tools that access databases through JDBC. These tools bundle a different JDBC driver for each type of database they support, because each of these databases has their own proprietary driver. Bundling multiple JDBC drivers for multiple databases can be difficult to maintain, and responding to support issues for multiple drivers can be costly. Now, provided that a database has an Apache Arrow Flight SQL endpoint enabled, the JDBC driver can connect to it.
This driver is developed and maintained by the Apache Arrow community. For full technical documentation, see Apache's [Arrow Flight SQL JDBC Release Notes](/release-notes/arrow-flight-sql-jdbc).
This driver is licensed under 
Query planning is done on the specified node. To distribute query planning for JDBC connections, configure [secondary coordinator nodes](/deploy-dremio/other-options/standalone/dremio-config#dremio-coordinators) for your deployment.
## Prerequisites[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#prerequisites "Direct link to Prerequisites")
  * Apache Arrow Flight SQL JDBC driver 19.0.0
  * Dremio 26.1 or later
  * One of the following operating systems: Windows, MacOS, or Linux
  * Supported Java versions: Java 11+
  * Supported JDK versions: 11, 17, and 21
  * Requires the following option to be present:
Java 11+ Requirement

```
--add-opens=java.base/java.nio=ALL-UNNAMED  

```



## Supported Authentication Methods[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#supported-authentication-methods "Direct link to Supported Authentication Methods")
  * Use the username and password of the Dremio account that you want to connect with.
  * Use a username and personal access token (PAT).
  * Use an OAuth Access Token


### Username and Password[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#username-and-password "Direct link to Username and Password")
Pass a username and password with the `user` and `password` properties.
### Personal Access Tokens Enterprise[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#personal-access-tokens-enterprise "Direct link to personal-access-tokens-enterprise")
Pass a username and personal access token (PAT) with the `user` and `password` properties. You must URL-encode PATs that you include in JDBC URLs. To encode a PAT locally on your system, you can follow the steps in [URL-encoding Values](/client-applications/drivers/arrow-flight-sql-jdbc-driver#url-encoding-values). See [Personal Access Tokens](/security/authentication/personal-access-tokens) for enabling and creating PATs.
Dremio recommends [authenticating with OAuth](/client-applications/drivers/arrow-flight-sql-jdbc-driver#authenticate-with-oauth) to improve security by reducing the risk of compromised passwords or personal access tokens.
### OAuth Access Tokens Enterprise[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#oauth-access-tokens-enterprise "Direct link to oauth-access-tokens-enterprise")
You can create a connection with a previously issued OAuth access token by configuring the following properties:
  * `token` property with the value of the OAuth access token.
  * `user` property with the empty string `""` to default to the username included in the access token. If the username is configured in the property value, it must match the username in the access token.

Example Arrow Flight SQL JDBC Connection Using OAuth Access Token

```
import jaydebeapi  
jdbc_arrow_flight_url = "jdbc:arrow-flight-sql://{}:{}".format("localhost", 32010)  
jdbc_arrow_flight_args = { "user": "", "token": dremio_access_token }  
jdbc_driver_location_example = "/Users/me/workspace/drivers/flight-sql-jdbc-driver-19.0.0.jar"  
jdbc_arrow_flight_conn = jaydebeapi.connect("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver",  
                                            jdbc_arrow_flight_url,  
                                            jdbc_arrow_flight_args,  
                                            jdbc_driver_location_example)  

```

You can obtain OAuth access tokens from Dremio by using client credentials, a local or LDAP username and password, a PAT, an external JWT, or user impersonation. For the API request details, see [OAuth Token](/reference/api/oauth-token).
## Authenticate with OAuth[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#authenticate-with-oauth "Direct link to Authenticate with OAuth")
You can configure the Arrow Flight SQL JDBC driver to request OAuth access tokens directly from Dremio when you open a connection. Pass the `oauth.*` values as JDBC connection properties instead of encoding them in the JDBC URL.
You can find runnable Java examples for client credentials, token exchange, and user impersonation in the `arrow-flight-client-examples` repository.
### Use Client Credentials[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#use-client-credentials "Direct link to Use Client Credentials")
Before you begin, create a [service user](/security/authentication/users#service-users) and generate an [OAuth client secret](/security/authentication/users#generate-an-oauth-client-secret). For the token request details, see [Obtain Tokens via Client ID and Client Secret](/reference/api/oauth-token#obtain-tokens-via-client-id-and-client-secret).
Authenticate with client credentials

```
import jaydebeapi  
jdbc_arrow_flight_url = "jdbc:arrow-flight-sql://<dremio-coordinator>:32010"  
jdbc_arrow_flight_args = {  
    "oauth.flow": "client_credentials",  
    "oauth.tokenUri": "https://{hostname}/oauth/token",  
    "oauth.clientId": "<service-user-client-id>",  
    "oauth.clientSecret": "<service-user-client-secret>",  
    "oauth.scope": "dremio.all"  
}  
jdbc_driver_location_example = "/Users/me/workspace/drivers/flight-sql-jdbc-driver-19.0.0.jar"  
jdbc_arrow_flight_conn = jaydebeapi.connect("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver",  
                                            jdbc_arrow_flight_url,  
                                            jdbc_arrow_flight_args,  
                                            jdbc_driver_location_example)  

```

### Use Token Exchange[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#use-token-exchange "Direct link to Use Token Exchange")
You can use token exchange when your application already has an external JWT or a PAT. Configure the common token exchange properties, then set the subject token values to match the credential you are exchanging.
  * For external JWT setup, see [External Token Providers](/security/authentication/application-authentication/external-token).
  * For PAT exchange details, see [Exchange a PAT](/reference/api/oauth-token#exchange-a-pat).

Authenticate with token exchange using an external JWT

```
import jaydebeapi  
jdbc_arrow_flight_url = "jdbc:arrow-flight-sql://<dremio-coordinator>:32010"  
jdbc_arrow_flight_args = {  
    "oauth.flow": "token_exchange",  
    "oauth.tokenUri": "https://{hostname}/oauth/token",  
    "oauth.exchange.subjectToken": "<external-jwt>",  
    "oauth.exchange.subjectTokenType": "urn:ietf:params:oauth:token-type:jwt",  
    "oauth.scope": "dremio.all"  
}  
jdbc_driver_location_example = "/Users/me/workspace/drivers/flight-sql-jdbc-driver-19.0.0.jar"  
jdbc_arrow_flight_conn = jaydebeapi.connect("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver",  
                                            jdbc_arrow_flight_url,  
                                            jdbc_arrow_flight_args,  
                                            jdbc_driver_location_example)  

```

Authenticate with token exchange using a PAT

```
import jaydebeapi  
jdbc_arrow_flight_url = "jdbc:arrow-flight-sql://<dremio-coordinator>:32010"  
jdbc_arrow_flight_args = {  
    "oauth.flow": "token_exchange",  
    "oauth.tokenUri": "https://{hostname}/oauth/token",  
    "oauth.exchange.subjectToken": "<personal-access-token>",  
    "oauth.exchange.subjectTokenType": "urn:ietf:params:oauth:token-type:dremio:personal-access-token",  
    "oauth.scope": "dremio.all"  
}  
jdbc_driver_location_example = "/Users/me/workspace/drivers/flight-sql-jdbc-driver-19.0.0.jar"  
jdbc_arrow_flight_conn = jaydebeapi.connect("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver",  
                                            jdbc_arrow_flight_url,  
                                            jdbc_arrow_flight_args,  
                                            jdbc_driver_location_example)  

```

### Use User Impersonation[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#use-user-impersonation "Direct link to Use User Impersonation")
You can use token exchange with inbound impersonation to obtain an OAuth access token for a target user. Before you begin, configure an [inbound impersonation policy](/security/rbac/inbound-impersonation) and make sure the proxy user has a PAT to use as the actor token. For the token request details, see [Exchange a PAT with User Impersonation](/reference/api/oauth-token#exchange-a-pat-with-user-impersonation).
Authenticate with user impersonation

```
import jaydebeapi  
jdbc_arrow_flight_url = "jdbc:arrow-flight-sql://<dremio-coordinator>:32010"  
jdbc_arrow_flight_args = {  
    "oauth.flow": "token_exchange",  
    "oauth.tokenUri": "https://{hostname}/oauth/token",  
    "oauth.exchange.subjectToken": "<target-username>",  
    "oauth.exchange.subjectTokenType": "urn:ietf:params:oauth:token-type:dremio:subject",  
    "oauth.exchange.actorToken": "<proxy-user-pat>",  
    "oauth.exchange.actorTokenType": "urn:ietf:params:oauth:token-type:dremio:personal-access-token",  
    "oauth.scope": "dremio.all"  
}  
jdbc_driver_location_example = "/Users/me/workspace/drivers/flight-sql-jdbc-driver-19.0.0.jar"  
jdbc_arrow_flight_conn = jaydebeapi.connect("org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver",  
                                            jdbc_arrow_flight_url,  
                                            jdbc_arrow_flight_args,  
                                            jdbc_driver_location_example)  

```

## OAuth Connection Properties[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#oauth-connection-properties "Direct link to OAuth Connection Properties")
You can use the following `oauth.*` properties with the Arrow Flight SQL JDBC driver when connecting to Dremio.  
| Property  | Required  | Description  |  
| --- | --- | --- |  
| `oauth.flow`  | Yes  | The OAuth grant type. Use `client_credentials` for service users or `token_exchange` for PAT, external JWT, and user impersonation flows.  |  
| `oauth.tokenUri`  | Yes  | The Dremio token endpoint. Use `https://{hostname}/oauth/token`.  |  
| `oauth.clientId`  | For `client_credentials`  | The service user's client ID.  |  
| `oauth.clientSecret`  | For `client_credentials`  | The service user's client secret.  |  
| `oauth.scope`  | Yes  | The requested scope. Dremio uses `dremio.all`.  |  
| `oauth.exchange.subjectToken`  | For `token_exchange`  | The credential to exchange. Use an external JWT, a PAT, or the target username for user impersonation.  |  
| `oauth.exchange.subjectTokenType`  | For `token_exchange`  | The type of subject token. Use `urn:ietf:params:oauth:token-type:jwt`, `urn:ietf:params:oauth:token-type:dremio:personal-access-token`, or `urn:ietf:params:oauth:token-type:dremio:subject` for user impersonation.  |  
| `oauth.exchange.actorToken`  | For user impersonation  | The proxy user's PAT used to request a token for the target user.  |  
| `oauth.exchange.actorTokenType`  | For user impersonation  | The actor token type. For Dremio user impersonation, use `urn:ietf:params:oauth:token-type:dremio:personal-access-token`.  |  
## Connecting to Databases[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#connecting-to-databases "Direct link to Connecting to Databases")
  * Use this template to create a direct connection to a database that has enabled an Apache Arrow Flight SQL endpoint:
Create direct connection to database

```
jdbc:arrow-flight-sql://<hostname-or-IP-address>:<port-number>/?useEncryption=false[&schema=<optional_schema>][&<properties>]  

```

    * ``optional_schema``: The name of the schema (datasource or space, including child paths, such as `myDatasource.folder1` and `mySpace.folder1.folder2`) to use by default when a schema is not specified in a query.
    * ``properties``: A list of JDBC properties. Values must be URI-encoded.
  * Use this template to create a direct connection to a Dremio coordinator node:
Create direct connection to Dremio coordinator node

```
jdbc:arrow-flight-sql://<Dremio_coordinator>:32010[/?schema=<optional_schema>][&<properties>]  

```

    * ``Dremio_coordinator``: The hostname or IP address of the coordinator node in your Dremio cluster.
    * ``optional_schema``: The name of the schema (datasource or space, including child paths, such as `myDatasource.folder1` and `mySpace.folder1.folder2`) to use by default when a schema is not specified in a query.
    * ``properties``: A list of JDBC properties. Values must be URL-encoded. See [URL-encoding Values](/client-applications/drivers/arrow-flight-sql-jdbc-driver#url-encoding-values) for suggested steps.


## Downloading the Driver[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#downloading-the-driver "Direct link to Downloading the Driver")
To download the driver, go to [Apache Arrow Flight SQL JDBC](https://www.dremio.com/drivers/jdbc/).
## Integrating the driver[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#integrating-the-driver "Direct link to Integrating the driver")
To integrate the driver into your development environment, add it to your classpath.
## Name of the Class[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#name-of-the-class "Direct link to Name of the Class")
The name of the class is `org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver`.
## JDBC Properties for Dremio Wire Encryption[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#jdbc-properties-for-dremio-wire-encryption "Direct link to JDBC Properties for Dremio Wire Encryption")
If you are setting up encrypted communication between your JDBC client applications and the Dremio server, use the SSL JDBC connection parameters and fully qualified hostname to configure the JDBC connection string and connect to Dremio.
This driver does not yet support disabling host verification.  
| Properties  | Value  | Required  | Description  |  
| --- | --- | --- | --- |  
| `useEncryption`  |  `true` or `false`  | [Optional]  | If `true`, SSL is enabled. If set to `false`, SSL is not enabled. The default is `true`. If you do not want to use encryption, you must set the value to `false`.  |  
| `disableCertificateVerification`  |  `true` or `false`  | [Optional]  | If `true`, Dremio does not verify the host certificate against the truststore. The default value is `false`.  |  
| `trustStoreType`  | string  | [Optional]  | Default: JKS The trustStore type. Allowed values are : `JKS`, `PKCS12`   
  
If the useSystemTrustStore option is set to true (on Windows only), the allowed values are: `Windows-MY`, `Windows-ROOT`   
Import the certificate into the **Trusted Root Certificate Authorities** and set `trustStoreType=Windows-ROOT`.   
Also import the certificate into **Trusted Root Certificate Authorities** or **Personal** and set `trustStoreType=Windows-MY`.  |  
| `trustStore`  | string  | [Optional]  | Path to the truststore.   
If not provided, the default Java truststore is used (usually `$JAVA_HOME/lib/security/cacerts`) and the trustStorePassword parameter is ignored.  |  
| `useSystemTrustStore`  |  `true` or `false`  | [Optional]  | By default, the value is `true`. Bypasses trustStoreType and automatically picks the correct Truststore based on the operating system: Keychain on MacOS, `trustStorePassword` property to pass the password of the truststore. Here is an example of a connection string for Linux:   
`jdbc:arrow-flight-sql://localhost:32010?trustStorePassword=Pc0_lL'Opjn$vSDcv:%Q0@@buc`  |  
| `trustStorePassword`  | string  | [Optional]  | Password to the truststore.  |  
## Optional Advanced JDBC Driver Properties[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#optional-advanced-jdbc-driver-properties "Direct link to Optional Advanced JDBC Driver Properties")  
| Parameter  | Value  | Description  |  
| --- | --- | --- |  
| `routing_queue`  | string  | Specifies the queue to use for processing queries while a connection is open. For more information, see [Connection Tagging and Direct Routing Configuration](/admin/workloads/workload-management/#connection-tagging-and-direct-routing-configuration).  |  
| `routing_tag`  | string  | When this parameter is set, the specified tag is associated with all queries executed within a session. Rules can check for the presence of a tag with the function `tag()`. For more information, see [Connection Tagging and Direct Routing Configuration](/admin/workloads/workload-management/#connection-tagging-and-direct-routing-configuration).  |  
## Parameterized Queries with Prepared Statements[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#parameterized-queries-with-prepared-statements "Direct link to Parameterized Queries with Prepared Statements")
Prepared statements allow you to dynamically pass parameters to SQL statements using placeholders, ensuring safer execution by separating the statement structure from the parameter values. With a prepared statement, set the (`?`) parameters at runtime using [set methods](/client-applications/drivers/arrow-flight-sql-jdbc-driver#supported-data-types-and-set-methods) to set different values in your `SELECT` statements and DML commands (`INSERT`, `UPDATE`, `DELETE`, `MERGE`).
To use parameterized queries with prepared statements, follow these steps:
  1. Use the `prepareStatement()` method to define a statement with parameters, which act as placeholders for dynamic values.
  2. Set the values by replacing each parameter with a value using the appropriate set methods.
  3. Ensure all parameters are set before running the statement, with indexing starting at 1. If parameters are not set before running the statement, JDBC throws an exception.
  4. Call `executeQuery()` to run a `SELECT` statement and retrieve results, or `executeUpdate()` to run a DML command and retrieve the count of modified records.

Java examples for SELECT statements and DML commands

```
PreparedStatement preparedStatement = connection.prepareStatement(  
  "SELECT * FROM employees WHERE department = ? AND salary > ?");  
preparedStatement.setString(1, "Engineering");  
preparedStatement.setDouble(2, 75000);  
ResultSet resultSet = preparedStatement.executeQuery();  
  
  
PreparedStatement preparedStatement = connection.prepareStatement(  
  "DELETE FROM employees WHERE department = ? AND salary > ?");  
preparedStatement.setString(1, "Engineering");  
preparedStatement.setDouble(2, 75000);  
int rowsUpdated = preparedStatement.executeUpdate();  
  
  

```

### Supported Data Types and Set Methods[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#supported-data-types-and-set-methods "Direct link to Supported Data Types and Set Methods")  
| **Column Data Type**  | **Supported Set Methods**  |  
| --- | --- |  
| Integer  |  `setInt()`, `setShort()`, `setNull()`  |  
| Numeric  |  `setInt()`, `setShort()`, `setLong()`, `setBigDecimal()`, `setNull()`  |  
| Decimal  |  `setShort()`, `setInt()`, `setLong()`, `setBigDecimal()`, `setNull()`  |  
| BigInt  |  `setShort()`, `setInt()`, `setLong()`, `setBigDecimal()`, `setNull()`  |  
| Double  |  `setDouble()`, `setFloat()`, `setNull()`  |  
| Float  |  `setFloat()`, `setNull()`  |  
| Char  |  `setString()`, `setNull()`  |  
| Varchar  |  `setString()`, `setNull()`  |  
| Boolean  |  `setBoolean()`, `setNull()`  |  
| Time  |  `setTime()`, `setNull()`  |  
| Timestamp  |  `setTimestamp()`, `setNull()`  |  
| Date  | `setNull()`  |  
| VarBinary  |  `setBytes()`, `setNull()`  |  
### Limitations[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#limitations "Direct link to Limitations")
The JDBC client does not support the `setDate()` method due to mismatched date encoding formats between the Arrow Flight JDBC client and Dremio.
## Managing Workloads[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#managing-workloads "Direct link to Managing Workloads")
Dremio administrators can use the Arrow Flight server endpoint to [manage query workloads](/admin/workloads/workload-management) by adding the following properties to connections created by Flight clients:  
| Flight Client Property  | Description  |  
| --- | --- |  
| `ROUTING_ENGINE`  | Name of the engine to use to process all queries issued during the current session.  |  
| `ROUTING_QUEUE`  | Name of the workload management queue. Used only during authentication.  |  
| `ROUTING_TAG`  | Tag name associated with all queries executed within a Flight session. Used only during authentication.  |  
| `SCHEMA`  | Default schema path to the dataset that the user wants to query.  |  
## URL-encoding Values[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#url-encoding-values "Direct link to URL-encoding Values")
To encode a personal access token (PAT) or property value locally on your system, you can follow these steps:
  1. In a browser window, right-click an empty area of the page and select **Inspect**.
  2. Click **Console**.
  3. Type `encodeURIComponent("<PAT-or-value>")`, where `<PAT-or-value>` is the personal access token that you obtained from Dremio or the value of a supported JDBC property. The URL-encoded PAT or value appears on the next line. You can highlight it and copy it to your clipboard.


## Differences between the Arrow Flight SQL JDBC Driver and the Legacy Dremio JDBC Driver[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#differences-between-the-arrow-flight-sql-jdbc-driver-and-the-legacy-dremio-jdbc-driver "Direct link to Differences between the Arrow Flight SQL JDBC Driver and the Legacy Dremio JDBC Driver")
The Arrow Flight SQL JDBC driver differs from the Dremio JDBC driver (legacy) in the following:
  * Requires Java 11+.
  * Supports `ResultSet.getBoolean()` on `varchar` columns in which boolean values are represented as these strings: "0", "1", "true", "false".
  * Supports null Calendar in calls to `ResultSet.getDate()`, `ResultSet.getTime()`, and `ResultSet.getTimestamp()`  
When a call to one of these methods has no `Calendar` parameter, or the `Calendar` parameter is `null`, the Flight JDBC driver uses the default timezone when it constructs the returned object.
  * Supports `ResultSet.getDate()`, `ResultSet.getTime()`, and `ResultSet.getTimestamp()` on `varchar` columns in which dates, times, or timestamps are represented as strings.
  * Supports varchar values that represents numeric values in calls to `ResultSet.getInteger()`, `ResultSet.getFloat()`, `ResultSet.getDouble()`, `ResultSet.getShort()`, `ResultSet.getLong()`, and `ResultSet.getBigDecimal()`  

  * Supports integer values in calls to `getFloat()`  
Integers returned gain one decimal place.
  * Supports the native SQL complex types `List`, `Map`, and `Struct`  
The Dremio JDBC driver (legacy) uses String representations of these types.
  * Supports using the Interval data type in SQL functions.
  * Removes support for calling `ResultSet.getBinaryStream()` on non-binary data types. Though such support exists in traditional JDBC drivers, it is not in the specification for the JDBC API.


Calling `DatabaseMetadata.getCatalog()` when connected to Dremio returns empty. Other `DatabaseMetadata` methods return null values in the `TABLE_CAT` column. This is expected behavior because Dremio does not have a catalog.
## Supported Conversions from Dremio Datatypes to JDBC Datatypes[​](/client-applications/drivers/arrow-flight-sql-jdbc-driver#supported-conversions-from-dremio-datatypes-to-jdbc-datatypes "Direct link to Supported Conversions from Dremio Datatypes to JDBC Datatypes")  
| **DREMIO TYPE**  | **JDBCARROW TYPE**  |  
| --- | --- |  
| BIGINT  | Int  |  
| BIT  | Bool  |  
| DATE  | Date  |  
| DECIMAL  | Decimal  |  
| DOUBLE  | FloatingPoint(DOUBLE)  |  
| FIXEDSIZEBINARY  | FixedSizeBinary  |  
| FLOAT  | FloatingPoint(SINGLE)  |  
| INT  | Int  |  
| INTERVAL_DAY_SECONDS  | Interval(DAY_TIME)  |  
| INTERVAL_YEAR_MONTHS  | Interval(YEAR_MONTH)  |  
| LIST  | List  |  
| MAP  | Map  |  
| NULL  | Null  |  
| OBJECT  | Not Supported  |  
| STRUCT  | Struct  |  
| TIME  | Time(MILLISECOND)  |  
| TIMESTAMP  | Timestamp(MILLISECOND)  |  
| VARBINARY  | Binary  |  
| VARCHAR  | Utf8  |  
Was this page helpful?
[Previous Drivers](/client-applications/drivers)[Next Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Drivers](/client-applications/drivers)[Next Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fbusiness-objects%2F&_biz_t=1777950347003&_biz_i=SAP%20Business%20Objects%20%7C%20Dremio%20Documentation&_biz_n=55&rnd=164535&cdn_o=a&_biz_z=1777950347024)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fdrivers%2Farrow-flight-sql-jdbc-driver%2F&_biz_t=1777950347024&_biz_i=Arrow%20Flight%20SQL%20JDBC%20%7C%20Dremio%20Documentation&_biz_n=56&rnd=457600&cdn_o=a&_biz_z=1777950347025)
