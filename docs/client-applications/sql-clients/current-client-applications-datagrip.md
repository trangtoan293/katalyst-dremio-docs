---
url: /client-applications/datagrip
slug: /client-applications/datagrip
title: "DataGrip | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.1346585
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * DataGrip

Version: current [26.x]
On this page
# DataGrip
You can run SQL from 
## Supported Versions​
Dremio connectivity is supported from DataGrip running on Windows, macOS, or Linux. It is recommended that you use the latest available version of DataGrip.
## Supported Authentication Methods​
You can authenticate your connection to Dremio using your Dremio username and password.
## Prerequisites​
Download the [Arrow Flight SQL JDBC driver](https://www.dremio.com/drivers/jdbc/).
## Connecting to Dremio​
Follow the steps below to connect to Dremio:
  1. Create a project in DataGrip (see 
  2. Open the Database Explorer, click the **+** icon, then click **Driver and Data Source**.
![Add Driver and Data Source](https://docs.dremio.com/assets/images/dg-driver-source-0b823e7e7af753e19313c89b47140f8d.png)
  3. Select the **Drivers** tab, then click **+** to add a new driver.
  4. Fill in the following details for the new driver:
     * **Name:** Provide a name to identify the driver in DataGrip (e.g., Arrow Flight SQL 10).
     * **Driver Files:** Click **+** , click **Custom JARs…** , then select the Arrow Flight SQL driver (_flight-sql-jdbc-driver-10.0.0.jar_) from the location where you downloaded it.
     * **Class:** org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver
![Driver Details](https://docs.dremio.com/assets/images/dg-driver-source2-5efa292a301626acfeaa8e13d81e8396.png)
  5. At the bottom of the Data Sources and Drivers panel, click **Create Data Source**.
  6. Ensure that the driver you just created is selected under **Project Data Sources**.
  7. For Authentication, select **User & Password**, and provide the Dremio username and password to send for authentication.
  8. For URL, follow the guidance under [Connecting to Databases](/client-applications/drivers/arrow-flight-sql-jdbc-driver).
The following is an example URL for a local Dremio installation that does not use an encrypted flight port:
Example Flight SQL URL

```
jdbc:arrow-flight-sql://localhost:32010?useEncryption=false  

```

  9. Click **Test Connection** to confirm a valid connection to Dremio.
![Test Connection](https://docs.dremio.com/assets/images/dg-driver-source3-5be4a9ef9beb1668d0d4d361bd617d1b.png)
  10. Click **OK** to save driver and data source.
  11. Run a simple query to see how results are displayed in DataGrip.
![Run a Query](https://docs.dremio.com/assets/images/dg-driver-source4-1477039a90516d3ca920b129d560e68f.png)
When querying tables and views in Dremio, ensure you are using the fully qualified path. For example, `SELECT * FROM Samples."samples.dremio.com"."NYC-taxi-trips"`.


Was this page helpful?
[Previous Apache Superset](/client-applications/superset)[Next DBeaver](/client-applications/dbeaver)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Apache Superset](/client-applications/superset)[Next DBeaver](/client-applications/dbeaver)
!
