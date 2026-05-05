---
url: /client-applications
slug: /client-applications
title: "Connect Client Applications to Dremio | Dremio Enterprise Documentation"
depth: 1
crawled_at: 63999.535962833
---

  * [Dremio Enterprise Home](/)
  * Connect Client Applications

Version: current [26.x]
On this page
# Connect Client Applications to Dremio
You can connect to Dremio from several popular applications to query and visualize the data in Dremio. The applications and the compatible driver are listed in the table below.  
| Client Application  | Required Driver  | Legacy Driver (Unsupported)  |  
| --- | --- | --- |  
| [Alteryx Designer](/client-applications/alteryx-designer)  | Arrow Flight SQL ODBC  | Legacy ODBC  |  
| [Apache Superset](/client-applications/superset)  | N/A  | N/A  |  
| [DataGrip](/client-applications/datagrip)  | Arrow Flight SQL JDBC  | Dremio JDBC (Legacy)  |  
| [DBeaver](/client-applications/dbeaver)  | Arrow Flight SQL JDBC  | Dremio JDBC (Legacy)  |  
| [DbVisualizer](/client-applications/dbvisualizer)  | Arrow Flight SQL JDBC  | Dremio JDBC (Legacy)  |  
| [Domo](/client-applications/domo)  | Arrow Flight SQL JDBC  | Dremio JDBC (Legacy)  |  
| [IBM Cognos Analytics](/client-applications/cognos)  | Bundled Dremio JDBC (Legacy)  | Bundled Dremio JDBC (Legacy)  |  
| [Looker](/client-applications/looker)  | Bundled Dremio JDBC (Legacy)  | Bundled Dremio JDBC (Legacy)  |  
| [Microsoft Excel](/client-applications/microsoft-excel)  | Arrow Flight SQL ODBC  | Legacy ODBC  |  
| [Microsoft Excel PowerPivot](/client-applications/microsoft-excel/microsoft-excel-powerpivot)  | Arrow Flight SQL ODBC  | Legacy ODBC  |  
| [Microsoft Power BI](/client-applications/microsoft-power-bi)  | ADBC Flight SQL  | Legacy ODBC  |  
| [Microstrategy Workstation](/client-applications/microstrategy)  | Arrow Flight SQL JDBC  | Dremio JDBC (Legacy)  |  
| [Preset](/client-applications/preset)  | N/A  | N/A  |  
| [SAP Business Objects](/client-applications/business-objects)  | Arrow Flight SQL ODBC  | Legacy ODBC  |  
| [Tableau](/client-applications/tableau)  | Arrow Flight SQL JDBC  | Dremio JDBC (Legacy)  |  
| [Thoughtspot](/client-applications/thoughtspot)  | Bundled Dremio JDBC (Legacy)  | Bundled Dremio JDBC (Legacy)  |  
## Supported Drivers​
  * [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver)
  * [Arrow Flight SQL ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver)


## Developing Custom Applications​
To create a connection to Dremio and run queries, you can use [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver). You can also use [PyArrow](/developer/python).
## Client Encryption​
Transport Layer Security (TLS) communication is supported for encrypting communication between legacy JDBC client applications and Dremio servers. See the configuration of client TLS for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information.
Transport Layer Security (TLS) communication is enabled by default for Arrow Flight client applications. See the configuration of Arrow Flight encryption for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information. If you want to connect via unencrypted connections, you must explicitly disable `useEncryption` by setting it to `false` in the [connection parameters](/client-applications/drivers/arrow-flight-sql-odbc-driver) for the Arrow Flight SQL ODBC driver.
Was this page helpful?
[Previous Wikis and Tags](/data-products/govern/wikis-tags)[Next Alteryx Designer](/client-applications/alteryx-designer)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Wikis and Tags](/data-products/govern/wikis-tags)[Next Alteryx Designer](/client-applications/alteryx-designer)
