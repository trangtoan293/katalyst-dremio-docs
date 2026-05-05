---
url: /client-applications/business-objects
slug: /client-applications/business-objects
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
## Prerequisites​
Dremio Business Objects integration requires:
  * SAP Business Objects 4.0+
  * Download, install, and configure the [Arrow Flight SQL ODBC driver](/client-applications/drivers/arrow-flight-sql-odbc-driver).


## Connecting to a Dremio cluster using Information Design Tool​
  1. Open Information Design Tool and a new project.
  2. Create a new Relational Connection using the Generic ODBC3 datasource driver.
  3. Select the Arrow Flight SQL ODBC DSN and test the connection.


Dremio schemas and tables are now available.
## Using Dremio datasets in Web Intelligence Reports​
  1. In Information Design Tool, publish the Dremio connection to a repository.
  2. Create a new Data Foundation.
  3. Create a new Business Layer.
  4. Publish the universe to a repository.
  5. Open a web browser, go to Web Intelligence tool and select the published universe.
  6. Configure the query.


Your Dremio dataset is ready to be used in Web Intelligence.
Was this page helpful?
[Previous Preset](/client-applications/preset)[Next Tableau](/client-applications/tableau)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Preset](/client-applications/preset)[Next Tableau](/client-applications/tableau)
!
