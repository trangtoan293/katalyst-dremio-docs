---
url: /release-notes/jdbc
slug: /release-notes/jdbc
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
## Legacy Dremio JDBC 17.0.0 (June 2021)​")
### Fixed Issues​
**_Connection.getCatalog() would always return`null`._**  
Connection.getCatalog() now returns the current catalog for the connection.
## Legacy Dremio JDBC 15.2.0 (March 2021)​")
### Updates​
Dremio uses the local timezone rather than UTC for datetime values.
## Legacy Dremio JDBC 15.0.0 (March 2021)​")
### Updates​
  * Provides a `useSystemTrustStore` property that bypasses `trustStoreType` and automatically selects the correct Truststore based on the operating system. See JDBC Parameters for Dremio Wire Encryption for more information.


  * Dremio no longer maps empty usernames to anonymous. Rather, Dremio treats empty usernames as empty.


## Legacy Dremio JDBC 14.0.0 (February 2021)​")
### Updates​
Provides a new class loader from a previously-loaded class when no class loader is available for a thread.
## Legacy Dremio JDBC 11.0.0 (November 2020)​")
### Updates​
Support for TLS SNI when connecting to a TLS-enabled Dremio deployment. Dremio implicitly sets the TLS SNI property to the hostname used in the connection string.
Was this page helpful?
[Previous Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)[Next Dependencies and Licenses](/release-notes/dependencies)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)[Next Dependencies and Licenses](/release-notes/dependencies)
!
