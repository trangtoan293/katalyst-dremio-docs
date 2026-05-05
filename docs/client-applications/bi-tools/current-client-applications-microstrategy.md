---
url: /client-applications/microstrategy
slug: /client-applications/microstrategy
title: "Microstrategy Workstation | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64033.113623
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Microstrategy Workstation

Version: current [26.x]
On this page
# Microstrategy Workstation
## Supported Versions​
Microstrategy Workstation 2021 Update 9 and later.
## Supported Authentication Methods​
  * Use a Dremio username and password.
  * Use a Dremio username and a personal access token (PAT) that you obtained from Dremio.


## Prerequisites​
  * Download the [Arrow Flight SQL JDBC driver](https://www.dremio.com/drivers/jdbc/) and move the `.jar` file to one of these locations:
    * On Windows: `C:\Program Files (x86)\Common Files\MicroStrategy\JDBC`
    * On Linux: `/opt/mstr/MicroStrategy/install/JDBC`
  * If you want to authenticate your connection to Dremio by using a PAT, see [Creating a PAT](/security/authentication/personal-access-tokens) for the steps to obtain one.
  * In Microstrategy Workstation, select **Help** &gt; **Enable New Data Import Experience**.


## Creating an Environment-level Integration with Dremio​
You can create an integration with Dremio that can be used in more than one dossier.
  1. In Microstrategy Workstation, connect to the environment that you plan to use.
  2. Under **Administration** on the left side of the screen, click the + sign to the right of **Data Sources**.
  3. In the Data Source Types dialog, click **Dremio**.
  4. In the Add Data Source - Dremio dialog, follow these steps:
    1. In the **Name** field, specify a name for the integration.
    2. (Optional) In the **Description** field, describe the integration.
    3. In the **Database Version** field, ensure that **Dremio** is selected.
    4. In the **Default Database Connection** field, either select an existing connection to a Dremio cluster, or select **Add New Database Connection**.
  5. If you selected **Add New Database Connection** , follow these steps in the Create New Database Connection dialog:
    1. In the **Name** field, specify a name for the connection.
    2. In the **Basic** section, follow these steps:
      1. In the **Host Name** field, specify the IP address or hostname of the coordinator node of the Dremio cluster that you want to use this connection with.
      2. In the **Port Number** field, specify the port number to use. The default port number is 32010.
      3. In the **Authentication Mode** field, ensure that **Standard** is selected.
      4. In the **Default Database Login** field, either select an existing set of authentication credentials for the Dremio Cluster, or click **Add New Database Login** to add a new set.
      5. If you clicked **Add New Database Login** in the previous step, specify the name to associate with the credentials, and then follow either of these steps:
         * Specify the username and password of the Dremio account to use.
         * Specify the username of the Dremio account to use and a PAT, which you can paste into the **Password** field.
    3. (Optional) In the **Advanced** section, set additional properties for Microstrategy Workstation to use when connecting to Dremio. See [Optional Advanced JDBC Driver Properties](/client-applications/drivers/arrow-flight-sql-jdbc-driver) for a list of the properties that you can use.
    4. (Optional) In the **Security** section, toggle on the **Use TLS Encryption** switch if the Dremio cluster is configured to encrypt communication between it and JDBC clients. For more information, see the configuration of client TLS for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters.
    5. (Optional) In the **Properties** section, specify non-default values for various properties of the connection.
    6. Click **Save**.
  6. In the Add Data Source - Dremio dialog, follow these steps:
    1. (Optional) Click **Test** to find out whether Microstrategy Workstation can connect to the Dremio cluster by using the database connection. If the test fails, ensure that the connection is configured correctly.
    2. Click **Save**.


You can now select this database connection when you create dossiers.
Was this page helpful?
[Previous Microsoft Power BI](/client-applications/microsoft-power-bi)[Next Preset](/client-applications/preset)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Power BI](/client-applications/microsoft-power-bi)[Next Preset](/client-applications/preset)
!!
