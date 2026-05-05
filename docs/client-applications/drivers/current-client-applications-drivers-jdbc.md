---
url: /client-applications/drivers/jdbc
slug: /client-applications/drivers/jdbc
title: "Dremio JDBC Driver (Legacy) | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64032.177308958
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * [Drivers](/client-applications/drivers)
  * Dremio JDBC Driver (Legacy)

Version: current [26.x]
On this page
# Dremio JDBC Driver (Legacy)
The [Arrow Flight SQL JDBC driver](/client-applications/drivers/arrow-flight-sql-jdbc-driver) is recommended for use for connectivity to Dremio. If you are using a client application that bundles or is certified with the Dremio JDBC (Legacy) driver, you can continue to use this driver. The Dremio JDBC (Legacy) driver will be not enhanced or fixed going forward.
The legacy [Dremio JDBC driver](https://download.dremio.com/jdbc-driver/?_ga=2.109401093.1016122501.1667783452-235854462.1630284576&_gac=1.258688760.1664550761.CjwKCAjwp9qZBhBkEiwAsYFsb0x4InlcRP7Rv4XsjamZQHhJILHJWOtBOu30xZC1QwvEXF8cPFs1HhoCB-kQAvD_BwE) is included as a part of Dremio installations under ``DREMIO_HOME`/jars/jdbc-driver/`. The main JAR Class is `com.dremio.jdbc.Driver`. You can also download the JDBC driver from [here](https://download.dremio.com/jdbc-driver/). This driver is licensed under 
## Prerequisites​
  * As of Dremio JDBC driver 25.0+, supported Java versions: Java 11+
  * Supported JDK versions: 11, 17, and 21
  * Requires the following option to be present:
Java 11+ Requirement

```
--add-opens=java.base/java.nio=ALL-UNNAMED  

```



## Supported Authentication Methods​
### Username and Password​
Use the username and password of the Dremio account that you want to connect with.
### Personal Access Tokens Enterprise​
Use a username and personal access token (PAT). To generate a PAT, see [Creating a PAT](/security/authentication/personal-access-tokens).
Dremio recommends OAuth access tokens to improve security by reducing the risk of compromised passwords or personal access tokens.
### OAuth Access Tokens Enterprise​
To create a connection with an OAuth access token, configure the following properties:
  * `token_type` with a value of `access_token`
  * `password` with the value of the access token
  * `user` with an empty string `""` to default to the username included in the access token. If the username is configured in the property value, it must match the username in the access token.

Example Legacy JDBC Connection Using Dremio Access Token

```
import jaydebeapi  
jdbc_url = "jdbc:dremio:direct={}:{}".format("localhost", 31010)  
jdbc_args = {"user": "", "password": dremio_access_token, "token_type": "access_token"}  
jdbc_driver_location_example = "/Users/me/workspace/drivers/dremio-jdbc-driver-25.3.0-SNAPSHOT.jar"  
jdbc_conn = jaydebeapi.connect("com.dremio.jdbc.Driver",  
                               jdbc_url,    
                               jdbc_args,  
                               jdbc_driver_location_example)  

```

Users can create OAuth access tokens using a local or LDAP username and password, a PAT, or an external JWT. Dremio provides [sample code](/reference/api/oauth-token) for each of these cases.
### External JWT​
To use an external JWT directly from an [external token provider](/security/authentication/application-authentication/external-token), configure the following properties:
  * `token_type` with a value of `jwt`
  * `password` with the value of the external JWT
  * `user` with the empty string `""` to default to the username included in the external JWT. If the username is configured in the property value, it must match the username in the external JWT.


Dremio provides [sample code](/security/authentication/application-authentication/external-token) for requesting an external JWT from Microsoft Entra ID.
Dremio recommends OAuth access tokens obtained through token exchange over an external JWT. The Dremio OAuth access token is typically smaller than an external JWT and verification is faster.
## Setup​
You can set up the JDBC driver in the following manner:
  * Connect directly to the Dremio server
  * Connect to the Dremio server via Zookeeper


**Tip:** To distribute query planning for JDBC connections, configure secondary coordinator nodes for your deployment.
#### Connecting directly to Dremio​
The following configuration establishes a direct connection to a Dremio coordinator node. Planning is done on the specified node.
Connect directly to Dremio coordinator node

```
jdbc:dremio:direct=<DREMIO_COORDINATOR>:31010[;schema=<OPTIONAL_SCHEMA>]  

```

#### Connecting to ZooKeeper​
The following configuration establishes a distributed connection to Dremio coordinator nodes through a Zookeeper quorum. Planning is distributed across the available coordinator nodes.
Connect to Dremio coordinator node with ZooKeeper

```
jdbc:dremio:zk=<ZOOKEEPER_QUORUM>:2181[;schema=<OPTIONAL_SCHEMA>]  

```

**Multiple Dremio Clusters in the same ZooKeeper Quorum**
Cluster A

```
jdbc:dremio:zk=<ZOOKEEPER_QUORUM>:2181/path/to/ClusterA  

```

Cluster B

```
jdbc:dremio:zk=<ZOOKEEPER_QUORUM>:2181/path/to/ClusterB  

```

## Parameterized Queries with Prepared Statements​
Dremio supports using parameters in prepared statements for `SELECT` statements and DML commands (`INSERT`, `UPDATE`, `DELETE`, `MERGE`).
The parameter marker is `?` in prepared statements. To execute a prepared statement, you must set the parameter marker with one of the supported set methods.
The example below uses the Date type parameter and the `setDate` set method. For set methods, the first argument is the index of the parameter marker in the SQL query, starting from 1. The second argument is the value for the parameter marker. After you set the parameter, you can execute the prepared statement by calling the `executeQuery()` method on the prepared statement.
Example prepared statement with parameters

```
public class HelloWorld {  
  public static void main(String[] args) {  
    try (PreparedStatement stmt = getConnection().prepareStatement("SELECT * FROM (values (DATE '2024-02-20'), (null)) AS a(id) WHERE id=?")) {  
      Date date = Date.valueOf(LocalDate.of(2024, 02, 20));  
      stmt.setDate(1, date);  
      try (ResultSet rs = stmt.executeQuery()) {  
        assertThat(rs.getMetaData().getColumnCount()).isEqualTo(1);  
        assertThat(rs.next()).isTrue();  
        assertThat(rs.getDate(1)).isEqualTo(date);  
        assertThat(rs.next()).isFalse();  
      }  
    }  
  }  
}  

```

The example below demonstrates how to reuse the same prepared statement by defining a different set method and parameter value.
Example prepared statement with different set method and parameters

```
public class HelloWorld {  
  public static void main(String[] args) {  
    try (PreparedStatement stmt = getConnection().prepareStatement("SELECT * FROM (values (DATE '2024-02-20'), (null)) AS a(id) WHERE id=?")) {  
      Date date = Date.valueOf(LocalDate.of(2024, 02, 20));  
      stmt.setDate(1, date);  
      try (ResultSet rs = stmt.executeQuery()) {  
        assertThat(rs.getMetaData().getColumnCount()).isEqualTo(1);  
        assertThat(rs.next()).isTrue();  
        assertThat(rs.getDate(1)).isEqualTo(date);  
        assertThat(rs.next()).isFalse();  
      }  
      stmt.setDate(1, Date.valueOf(LocalDate.of(2025, 02, 20)));  
      try (ResultSet rs = stmt.executeQuery()) {  
        assertThat(rs.next()).isFalse();  
      }  
    }  
  }  
}  

```

The following example shows how to use more than one parameter in a prepared statement.
Example prepared statement with two parameters

```
public class HelloWorld {  
  public static void main(String[] args) {  
    try (PreparedStatement stmt = getConnection().prepareStatement("SELECT * FROM (values (1), (2), (null)) AS a(id) WHERE id = ? OR id < ?")) {  
      stmt.setInt(1, 1);  
      stmt.setInt(2, 3);  
      try (ResultSet rs = stmt.executeQuery()) {  
        assertThat(rs.getMetaData().getColumnCount()).isEqualTo(1);  
        assertThat(rs.next()).isTrue();  
        assertThat(rs.getInt(1)).isEqualTo(1);  
        assertThat(rs.next()).isFalse();  
      }  
    }  
  }  
}  

```

### Set Methods for Prepared Statements with Parameters​
To execute a prepared statement, you must set the parameter marker with one of the supported set methods listed in the table below.  
| Column Data Type  | Supported Set Methods  |  
| --- | --- |  
| Integer  | setInt(), setShort(), setNull()  |  
| Numeric  | setInt(), setShort(), setLong(), setBigDecimal(), setNull()  |  
| Decimal  | setShort(), setInt(), setLong(), setBigDecimal(), setNull()  |  
| BigInt  | setShort(), setInt(), setLong(), setBigDecimal(), setNull()  |  
| Double  | setDouble(), setFloat(), setNull()  |  
| Float  | setFloat(), setNull()  |  
| Char  | setString(), setNull()  |  
| Varchar  | setString(), setNull()  |  
| Boolean  | setBoolean(), setNull()  |  
| Time  | setTime(), setNull()  |  
| TimeStamp  | setTimestamp(), setNull()  |  
| Date  | setDate(), setNull()  |  
| VarBinary  | setNull(), setBytes()  |  
## JDBC Parameters for Dremio Wire Encryption​
If you are setting up encrypted communication between your JDBC client applications and the Dremio server, use the SSL JDBC connection parameters and a fully qualified host name to configure the JDBC connection string and connect to Dremio:  
| Parameter  | Value  | Required  | Description  |  
| --- | --- | --- | --- |  
| ssl  | true/false  | [Optional]  | If true, SSL is enabled. If not set or set to false, SSL is not enabled.  |  
| trustStoreType  | string  | [Optional]  | Default: JKS The trustStore type. Allowed values are : JKS PKCS12   
  
If the useSystemTrustStore option is set to true (on Windows only), the allowed values are: Windows-MY Windows-ROOT   
Import the certificate into the **Trusted Root Certificate Authorities** and set `trustStoreType=Windows-ROOT`.   
Also import the certificate into **Trusted Root Certificate Authorities** or **Personal** and set `trustStoreType=Windows-MY`.  |  
| trustStore  | string  | [Optional]  | Path to the truststore.   
If not provided, the default Java truststore is used (usually $JAVA_HOME/lib/security/cacerts) and the trustStorePassword parameter is ignored.  |  
| useSystemTrustStore  | true/false  | [Optional]  | By default, the value is `true`. Bypasses trustStoreType and automatically picks the correct Truststore based on the operating system: Keychain on MacOS,   |  
| trustStorePassword  | string  | [Optional]  | Password to the truststore.  |  
| disableHostVerification  | true/false  | [Optional]  | If true, Dremio does not verify that the host in the certificate is the host we are connecting to. False by default.   
  
(Hostname verification follows the specification in RFC2818)  |  
| disableCertificateVerification  | true/false  | [Optional]  | If true, Dremio does not verify the host certificate against the truststore. False by default.  |  
## Optional Advanced JDBC Driver Properties​  
| Parameter  | Value  | Description  |  
| --- | --- | --- |  
| impersonation_target  | string  | When inbound impersonation is configured, `impersonation_target` is used for authorization, so it must have permission to the queried datasets, and `impersonation_target` appears as the identity that submitted the queries. The username used to establish the connection must be mapped to `impersonation_target` in the impersonation policy for the Dremio service, otherwise, the connection fails with an authorization error. In the policy, the user used to establish the connection is the `proxy_principle` and `impersonation_target` is its `target_principle`. For more information on configuring policies, see [Inbound Impersonation](/security/rbac/inbound-impersonation).  |  
| routing_queue  | string  | Specifies the queue to use for processing queries while a connection is open. For more information, see [Query Tagging & Direct Routing Configuration](/admin/workloads/workload-management/).  |  
| routing_tag  | string  | Sets a tag for rule processing. The specified tag is associated with all queries executed while a connection is open. Rules can check for the presence of a tag with the function `tag()`. For more information, see [Query Tagging & Direct Routing Configuration](/admin/workloads/workload-management/).  |  
| token_type  | string  | The type of the token in the `password` field. Valid values are `jwt` for [external tokens](/security/authentication/application-authentication/external-token), `access_token` for OAuth access token, or `personal_access_token` for [personal access tokens](/security/authentication/personal-access-tokens). If you are using your Dremio password, omit the `token_type` property.  |  
## SOCKS Proxy Connection Parameters​
If you want to connect to Dremio Cloud through a SOCKS proxy, use these connection parameters:  
| Parameter  | Type  | Description  | Default Value  | Required?  |  
| --- | --- | --- | --- | --- |  
| socksProxyHost  | string  | The IP address or hostname of the SOCKS proxy.  | N/A  | Yes  |  
| socksProxyPort  | integer  | The port to use on the SOCKS proxy.  | 1080  | No  |  
| socksProxyUsername  | string  | The username to use for connections.  | N/A  | No  |  
| socksProxyPassword  | string  | The password to use for connections.  | N/A  | Only if a username is specified.  |  
Was this page helpful?
[Previous Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver)
!%20%7C%20Dremio%20Documentation&_biz_n=59&rnd=764945&cdn_o=a&_biz_z=1777950351085)
