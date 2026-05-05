---
url: /release-notes/arrow-flight-sql-jdbc
slug: /release-notes/arrow-flight-sql-jdbc
title: "Arrow Flight SQL JDBC Release Notes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64074.473562416
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * Arrow Flight SQL JDBC Release Notes

Version: current [26.x]
On this page
# Arrow Flight SQL JDBC Release Notes
You can connect to Dremio through the Arrow Flight SQL JDBC driver. The driver is open-source and you are free to use it with Dremio's data lakehouse platform or any other data platform that has an Arrow Flight SQL endpoint. These release notes summarize Dremio-specific updates, compatibility notes, and limitations.
For more information about this driver, see [Arrow Flight SQL JDBC driver](/client-applications/drivers/arrow-flight-sql-jdbc-driver).
### Security​
Transport Layer Security (TLS) communication is enabled by default for Arrow Flight client applications. To configure encryption, see Arrow Flight Encryption. If you want to connect via unencrypted connections, you must explicitly disable `useEncryption` by setting it to `false` in the [connection properties](/client-applications/drivers/arrow-flight-sql-jdbc-driver) for the Arrow Flight SQL JDBC.
### Limitations​
  * Time offsets are not being reported in query results.
  * User impersonation is not yet supported.
  * Connecting to Zookeeper quorums is not supported.
  * Using TLS does not allow ignoring the hostname-only during validation. The `useEncryption` connection property supports encryption with full verification, encryption without verification, or being unencrypted.


## Arrow Flight SQL JDBC 19.0.0 (March 2026)​")
What's New
  * Added support for OAuth.
  * Added support for the `UUID` data type.
  * `PreparedStatement#execute` now returns the row count for DML/DDL statements.


Was this page helpful?
[Previous 25.x Release Notes](/release-notes/version-250-release)[Next Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous 25.x Release Notes](/release-notes/version-250-release)[Next Arrow Flight SQL ODBC Release Notes](/release-notes/arrow-flight-sql-odbc)
!
