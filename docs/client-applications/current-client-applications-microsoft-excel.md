---
url: /client-applications/microsoft-excel
slug: /client-applications/microsoft-excel
title: "Microsoft Excel | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64032.7152895
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Microsoft Excel

Version: current [26.x]
On this page
# Microsoft Excel
## Supported Versions​
Microsoft Excel version 16.95 (25030928) for Mac introduces a change that causes Excel to crash when using the Arrow Flight SQL ODBC driver. The crash occurs immediately after authentication, before the query/source selection dialog appears. This issue only affects Excel 16.95 on macOS. Excel on Windows is not impacted. See Hiding the SQL Tables Listing for a fix.
Microsoft Excel in Microsoft 365
## Prerequisites​
  * Ensure that you are using Dremio v22.0 or later.
  * Ensure that your operating system is 64-bit Windows 10 or later.
  * Download, install, and configure the [Arrow Flight SQL ODBC driver](/client-applications/drivers/arrow-flight-sql-odbc-driver).
  * If you want to authenticate to Dremio by using a personal access token (PAT), rather than by using a password, generate a PAT. See [Personal Access Tokens](/security/authentication/personal-access-tokens) for the steps.


## Connecting to Dremio​
  1. In Excel, select **Data** from the menu bar.
  2. Click **Get Data**.
  3. Select **From Other Sources** &gt; **From ODBC**.
  4. In the From ODBC dialog, select the data source name that you specified when you configured the Arrow Flight SQL ODBC driver.
  5. Specify the username to use for the connection to Dremio.
  6. Specify either a password or a personal access token to use with the username
  7. In the Navigator dialog, select a dataset.
  8. Click **Load**.


## Hiding the SQL Tables Listing​
You can prevent Excel from crashing by enabling the `hideSQLTablesListing` flag to hide the list of available sources in the query/source selection dialog. This flag can be used for Mac computers with an Apple silicon or an Intel processor.
To set the configuration:
  1. Go to the **System DSN** tab of the ODBC Manager.
  2. Click **Configure**.
  3. Change the value of the `hideSQLTablesListing` keyword to `true`.
  4. Click **OK**.


## Using the Extended Flight SQL Buffer​
The Extended Flight SQL Buffer feature was designed for Apple Silicon processors, but the Arrow Flight SQL ODBC driver is not supported on Apple Silicon M1, M2, and M3 processors. This feature is no longer available.
Was this page helpful?
[Previous Looker](/client-applications/looker)[Next Microsoft Excel PowerPivot](/client-applications/microsoft-excel/microsoft-excel-powerpivot)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Looker](/client-applications/looker)[Next Microsoft Excel PowerPivot](/client-applications/microsoft-excel/microsoft-excel-powerpivot)
!
