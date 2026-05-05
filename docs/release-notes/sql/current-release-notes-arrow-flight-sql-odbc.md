---
url: /release-notes/arrow-flight-sql-odbc
slug: /release-notes/arrow-flight-sql-odbc
title: "Arrow Flight SQL ODBC Release Notes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.930241458
---

  * [Dremio Enterprise Home](/)
  * [Release Notes](/release-notes)
  * Arrow Flight SQL ODBC Release Notes

Version: current [26.x]
On this page
# Arrow Flight SQL ODBC Release Notes
You can connect to Dremio through the Arrow Flight SQL ODBC driver. For more information, see [Arrow Flight SQL ODBC driver](/client-applications/drivers/arrow-flight-sql-odbc-driver).
This page contains the changes for the Arrow Flight SQL ODBC releases.
## Arrow Flight SQL ODBC 0.9.7 (August 2025)​")
Improvements & Fixes
  * Fixed an issue on macOS where the error was sometimes not displayed in Microsoft Excel. 
DX-90575
  * Fixed an issue with an inconsistent searchable attribute returned by the `SQLColAttribute` function. 
DX-102851
  * Fixed an issue where Microsoft Excel was not showing small decimals correctly. 
DX-104574


## Arrow Flight SQL ODBC 0.9.6 (June 2025)​")
Improvements & Fixes
  * Resolved an issue where the Arrow Flight SQL ODBC driver failed to connect to TLS-secured Flight endpoints.
  * Fixed an issue where calling metadata functions like `SQLPrimaryKeysW` or `SQLForeignKeysW` caused an error. The driver now handles these calls more gracefully.


## Arrow Flight SQL ODBC 0.9.5 (May 2025)​")
What's New
  * A new driver configuration flag is available for macOS (Intel and Apple Silicon): `hideSQLTablesListing`. The flag will be disabled by default, but if set to `true`, it will hide the list of available sources in Microsoft Excel's Query Dialog, therefore circumventing the crash in version 16.95 of Excel. This flag should only be used for macOS / Microsoft Excel workloads. 
DX-101630


## Arrow Flight SQL ODBC 0.9.4 (April 2025)​")
What's New
  * The Arrow Flight SQL ODBC driver now supports Apple Silicon. [Download the driver](https://download.dremio.com/arrow-flight-sql-odbc-driver/arrow-flight-sql-odbc-LATEST-armv8.dmg).
  * Upgraded to Arrow Flight 


Improvements & Fixes
  * Fixed date handling for pre-1970 dates in Microsoft tools.
  * Fixed segmentation fault in the Arrow Flight SQL ODBC Driver.


Was this page helpful?
[Previous Arrow Flight SQL JDBC Release Notes](/release-notes/arrow-flight-sql-jdbc)[Next Legacy Dremio JDBC Release Notes](/release-notes/jdbc)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Arrow Flight SQL JDBC Release Notes](/release-notes/arrow-flight-sql-jdbc)[Next Legacy Dremio JDBC Release Notes](/release-notes/jdbc)
