---
url: /client-applications/alteryx-designer
slug: /client-applications/alteryx-designer
title: "Alteryx Designer | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64025.910052416
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Alteryx Designer

Version: current [26.x]
On this page
# Alteryx Designer
You can use Alteryx Designer to quickly prepare, blend, conform, and analyze data from datasets in Dremio.
## Supported Versions​
Alteryx Designer 10.6+
## Prerequisites​
  * Ensure that your operating system is 64-bit Windows 10 or later.
  * Download, install, and configure the [Arrow Flight SQL ODBC driver](/client-applications/drivers/arrow-flight-sql-odbc-driver).
  * If you want to authenticate to Dremio by using a personal access token (PAT), rather than by using a password, generate a PAT. See [Personal Access Tokens](/security/authentication/personal-access-tokens) for the steps.


## Selecting Dremio as a Data Source​
  1. In Alteryx Designer, select **File** &gt; **New Workflow**.
  2. Drag the **Input Data** tool from the tool palette on to the workflow canvas.
  3. In the configuration properties for Input Data, click the arrow on the right side of the **Connect a File or Database** field.
  4. In the Data connections dialog, follow these steps:
a. Select **Recent** and click **Clear List** in the top-right corner if there are any entries on the page.
b. Select **Data Sources**.
c. Scroll down to the option **Generic connection**.
d. Click either **ODBC** or **OleDB**.
  5. If you clicked **ODBC** , follow these steps in the ODBC Connection dialog:
a. In the **Data Source Name** field, select the data source name for the Arrow Flight SQL ODBC driver.
b. Specify the username to use for the connection to Dremio.
c. Specify either a password or a personal access token to use with the username.
d. Click **OK**.
  6. If you clicked **OleDB** , follow these steps in the Data Link Properties dialog:
a. On the **Provider** tab, select **Microsoft OLE DB Provider for ODBC Drivers**.
b. Click **Next &gt;&gt;**.
c. For step 1 on the **Connection** tab, select **Use data source name** , and then select the data source name for the Arrow Flight SQL ODBC driver.
d. For step 2 on the **Connection** tab, specify the username to use for connections to Dremio, then specify either a password or a personal access token to use with the username.
e. (Optional) Click **Test Connection** to find out whether the info you specified on this tab is correct.
f. Click **OK**.


You can now browse and query datasets that are in Dremio.
If you are using an Arrow Flight SQL ODBC driver, it only supports a single connection, and to load multiple tables (or datasets), you should do it sequentially. Otherwise, if you try to do it in parallel, the driver raises an error.
Was this page helpful?
[Previous Connect Client Applications](/client-applications)[Next Apache Superset](/client-applications/superset)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Connect Client Applications](/client-applications)[Next Apache Superset](/client-applications/superset)
!
