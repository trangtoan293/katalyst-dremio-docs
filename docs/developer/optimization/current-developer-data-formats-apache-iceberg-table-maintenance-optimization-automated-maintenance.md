---
url: /developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance
slug: /developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance
title: "Automated Maintenance with the Open Catalog | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.135696875
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * [File and Table Formats](/developer/data-formats)
  * [Apache Iceberg](/developer/data-formats/apache-iceberg)
  * [Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)
  * Automated Maintenance with the Open Catalog

Version: current [26.x]
On this page
# Automated Maintenance with the Open Catalog
The Open Catalog automates maintenance tasks for data within the catalog to optimize query performance and minimize storage costs. Open Catalog currently supports automation for the following Iceberg maintenance tasks:
  * [**Table optimization**](/developer/data-formats/apache-iceberg/table-maintenance-optimization/optimizing), which compacts small files into larger files.
  * [**Table cleanup**](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum), which deletes expired snapshots and orphaned metadata files.


## Enabling Automatic Optimization and Table Cleanup​
### Automatic Optimization​
To enable automated optimization for the Open Catalog:
  1. In the Sources section in the bottom-left corner of the Datasets page, right-click on your Open Catalog source and click **Settings**.
  2. In the Source Settings dialog, select **Advanced Options**.
  3. Toggle **Enable auto optimization**.
  4. Click **Save**.


### Automatic Table Cleanup​
To enable an automated vacuum for the Open Catalog:
  1. In the Sources section in the bottom-left corner of the Datasets page, right-click on your Open Catalog source and click **Settings**.
  2. In the Source Settings dialog, select **Advanced Options**.
  3. Toggle **Enable table clean up**.
  4. Click **Save**.


### Table-Level Configuration​
To enable/disable automatic optimization and cleanup at the table level within the Open Catalog:
  1. Locate the desired table in the Open Catalog.
  2. Right-click on the table name and click ![This is the icon that represents more actions.](https://docs.dremio.com/images/icons/settings.png) to open the table settings.
  3. In the Table Settings dialog, select **Table Maintenance** from the settings sidebar.
  4. Toggle the relevant settings—**Enable automatic table maintenance** and/or **Enable table cleanup**.


## Customization​
The following support keys are used to configure frequency and behavior for automatic maintenance operations:
  * `dremio.optimization.auto.optimize.period.hours` - controls how often automatic optimization should run. Defaults to 3 hours.
  * `dremio.optimization.auto.vacuum.period.hours` - controls how often table cleanup should run. Defaults to 24 hours.
  * `dremio.optimization.auto.maintenance.rate_limit.batch_size` - controls the maximim number of concurrent maintenance queries. Defaults to 10.


Was this page helpful?
[Previous Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)[Next Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)[Next Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum)
!
