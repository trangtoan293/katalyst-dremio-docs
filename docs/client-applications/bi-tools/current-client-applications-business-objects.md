---
url: /client-applications/business-objects
title: "SAP Business Objects | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.213791125
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * SAP Business Objects

Version: current [26.x]
On this page
# SAP Business Objects
## Prerequisites[​](/client-applications/business-objects#prerequisites "Direct link to Prerequisites")
Dremio Business Objects integration requires:
  * SAP Business Objects 4.0+
  * Download, install, and configure the [Arrow Flight SQL ODBC driver](/client-applications/drivers/arrow-flight-sql-odbc-driver).


## Connecting to a Dremio cluster using Information Design Tool[​](/client-applications/business-objects#connecting-to-a-dremio-cluster-using-information-design-tool "Direct link to Connecting to a Dremio cluster using Information Design Tool")
  1. Open Information Design Tool and a new project.
  2. Create a new Relational Connection using the Generic ODBC3 datasource driver.
  3. Select the Arrow Flight SQL ODBC DSN and test the connection.


Dremio schemas and tables are now available.
## Using Dremio datasets in Web Intelligence Reports[​](/client-applications/business-objects#using-dremio-datasets-in-web-intelligence-reports "Direct link to Using Dremio datasets in Web Intelligence Reports")
  1. In Information Design Tool, publish the Dremio connection to a repository.
  2. Create a new Data Foundation.
  3. Create a new Business Layer.
  4. Publish the universe to a repository.
  5. Open a web browser, go to Web Intelligence tool and select the published universe.
  6. Configure the query.


Your Dremio dataset is ready to be used in Web Intelligence.
Was this page helpful?
[Previous Preset](/client-applications/preset)[Next Tableau](/client-applications/tableau)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Preset](/client-applications/preset)[Next Tableau](/client-applications/tableau)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fbusiness-objects%2F&_biz_t=1777950345562&_biz_i=SAP%20Business%20Objects%20%7C%20Dremio%20Documentation&_biz_n=48&rnd=66037&cdn_o=a&_biz_z=1777950345563)
