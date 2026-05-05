---
url: /release-notes/jdbc
title: "Legacy Dremio JDBC Release Notes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.838737666
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * Legacy Dremio JDBC Release Notes

Version: current [26.x]
On this page
# Legacy Dremio JDBC Release Notes
This page contains the changes for the Legacy Dremio JDBC driver releases. For more information about the Dremio JDBC driver, see the [JDBC page](/client-applications/drivers/jdbc).
It is recommended to use the [Arrow Flight SQL JDBC driver](/client-applications/drivers/arrow-flight-sql-jdbc-driver). The legacy Dremio JDBC driver will not be updated or fixed moving forward.
A new version of [the Dremio JDBC driver](https://www.dremio.com/drivers/jdbc/) is made available with every release of Dremio Enterprise. However, this doesn't mean changes or new features were introduced in a driver release. Only when actual changes are made to a driver will release notes be published.
## Legacy Dremio JDBC 17.0.0 (June 2021)[​](/release-notes/jdbc#legacy-dremio-jdbc-1700-june-2021 "Direct link to Legacy Dremio JDBC 17.0.0 \(June 2021\)")
### Fixed Issues[​](/release-notes/jdbc#fixed-issues "Direct link to Fixed Issues")
**_Connection.getCatalog() would always return`null`._**  
Connection.getCatalog() now returns the current catalog for the connection.
## Legacy Dremio JDBC 15.2.0 (March 2021)[​](/release-notes/jdbc#legacy-dremio-jdbc-1520-march-2021 "Direct link to Legacy Dremio JDBC 15.2.0 \(March 2021\)")
### Updates[​](/release-notes/jdbc#updates "Direct link to Updates")
Dremio uses the local timezone rather than UTC for datetime values.
## Legacy Dremio JDBC 15.0.0 (March 2021)[​](/release-notes/jdbc#legacy-dremio-jdbc-1500-march-2021 "Direct link to Legacy Dremio JDBC 15.0.0 \(March 2021\)")
### Updates[​](/release-notes/jdbc#updates-1 "Direct link to Updates")
  * Provides a `useSystemTrustStore` property that bypasses `trustStoreType` and automatically selects the correct Truststore based on the operating system. See [JDBC Parameters for Dremio Wire Encryption](/25.x/sonar/client-applications/drivers/jdbc#jdbc-parameters-for-dremio-wire-encryption) for more information.


  * Dremio no longer maps empty usernames to anonymous. Rather, Dremio treats empty usernames as empty.


## Legacy Dremio JDBC 14.0.0 (February 2021)[​](/release-notes/jdbc#legacy-dremio-jdbc-1400-february-2021 "Direct link to Legacy Dremio JDBC 14.0.0 \(February 2021\)")
### Updates[​](/release-notes/jdbc#updates-2 "Direct link to Updates")
Provides a new class loader from a previously-loaded class when no class loader is available for a thread.
## Legacy Dremio JDBC 11.0.0 (November 2020)[​](/release-notes/jdbc#legacy-dremio-jdbc-1100-november-2020 "Direct link to Legacy Dremio JDBC 11.0.0 \(November 2020\)")
### Updates[​](/release-notes/jdbc#updates-3 "Direct link to Updates")
Support for TLS SNI when connecting to a TLS-enabled Dremio deployment. Dremio implicitly sets the TLS SNI property to the hostname used in the connection string.
Was this page helpful?
[Previous Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)[Next Dependencies and Licenses](/release-notes/dependencies)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)[Next Dependencies and Licenses](/release-notes/dependencies)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Frelease-notes%2Fjdbc%2F&_biz_t=1777950395367&_biz_i=Legacy%20Dremio%20JDBC%20Release%20Notes%20%7C%20Dremio%20Documentation&_biz_n=156&rnd=193978&cdn_o=a&_biz_z=1777950395367)
