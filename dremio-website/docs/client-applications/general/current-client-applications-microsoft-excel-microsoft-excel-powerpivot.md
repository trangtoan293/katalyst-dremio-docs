---
url: /client-applications/microsoft-excel/microsoft-excel-powerpivot
title: "Microsoft Excel PowerPivot | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64032.570035083
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * [Microsoft Excel](/client-applications/microsoft-excel)
  * Microsoft Excel PowerPivot

Version: current [26.x]
On this page
# Microsoft Excel PowerPivot
## Prerequisites[​](/client-applications/microsoft-excel/microsoft-excel-powerpivot#prerequisites "Direct link to Prerequisites")
  * Ensure that you are using Dremio v22.0 or later.
  * Ensure that your operating system is 64-bit Windows 10 or later.
  * Download, install, and configure the [Arrow Flight SQL ODBC driver](/client-applications/drivers/arrow-flight-sql-odbc-driver).
  * If you want to authenticate to Dremio by using a personal access token (PAT), rather than by using a password, generate a PAT. See [Personal Access Tokens](/security/authentication/personal-access-tokens) for the steps.


## Updating the DSN Configuration[​](/client-applications/microsoft-excel/microsoft-excel-powerpivot#updating-the-dsn-configuration "Direct link to Updating the DSN Configuration")
  1. Launch ODBC Data Sources on your Windows system.
  2. Select the **System DSN** tab.
  3. Select the DSN entry that you created when you configured the Arrow Flight SQL ODBC driver.
  4. Click **Configure**.
  5. In the **Advanced Properties** section, add the following key/value pair:  

     * **Key:** quoting
     * **Value:** BRACKET


## Connecting to Dremio[​](/client-applications/microsoft-excel/microsoft-excel-powerpivot#connecting-to-dremio "Direct link to Connecting to Dremio")
  1. Open Excel.
  2. Click the **Power Pivot** tab and then click **Manage**.
  3. Select **From Other Sources**.
  4. In the Table Import Wizard, select **Others (OLEDB/ODBC)**.
  5. Click **Next**.
  6. Click **Build**.
  7. In the Data Link Properties dialog, follow these steps:
a. On the **Provider** tab, select **Microsoft OLE DB Provider for ODBC Drivers**.
b. Click **Next &gt;&gt;**.
c. For step 1 on the **Connection** tab, select **Use data source name** , and then select the data source name for the Arrow Flight SQL ODBC driver.
d. For step 2 on the **Connection** tab, specify the username to use for connections to Dremio, then specify either a password or a personal access token to use with the username.
e. (Optional) Click **Test Connection** to find out whether the info you specified on this tab is correct.
f. Click **OK**.
  8. (Optional) Click **Test Connection** to find out whether you can connect to Dremio.
  9. Click **Next**.
  10. Ensure that the option **Select from a list of tables and views to choose the data to import**.
  11. Click **Next**.
  12. Select the tables and views that you want to import data from.
  13. Click **Finish**.


Was this page helpful?
[Previous Microsoft Excel](/client-applications/microsoft-excel)[Next Microsoft Power BI](/client-applications/microsoft-power-bi)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Excel](/client-applications/microsoft-excel)[Next Microsoft Power BI](/client-applications/microsoft-power-bi)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fmicrosoft-excel%2Fmicrosoft-excel-powerpivot%2F&_biz_t=1777950351602&_biz_i=Microsoft%20Excel%20PowerPivot%20%7C%20Dremio%20Documentation&_biz_n=60&rnd=382578&cdn_o=a&_biz_z=1777950351602)
