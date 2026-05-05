---
url: /developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance
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


## Enabling Automatic Optimization and Table Cleanup[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance#enabling-automatic-optimization-and-table-cleanup "Direct link to Enabling Automatic Optimization and Table Cleanup")
### Automatic Optimization[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance#automatic-optimization "Direct link to Automatic Optimization")
To enable automated optimization for the Open Catalog:
  1. In the Sources section in the bottom-left corner of the Datasets page, right-click on your Open Catalog source and click **Settings**.
  2. In the Source Settings dialog, select **Advanced Options**.
  3. Toggle **Enable auto optimization**.
  4. Click **Save**.


### Automatic Table Cleanup[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance#automatic-table-cleanup "Direct link to Automatic Table Cleanup")
To enable an automated vacuum for the Open Catalog:
  1. In the Sources section in the bottom-left corner of the Datasets page, right-click on your Open Catalog source and click **Settings**.
  2. In the Source Settings dialog, select **Advanced Options**.
  3. Toggle **Enable table clean up**.
  4. Click **Save**.


### Table-Level Configuration[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance#table-level-configuration "Direct link to Table-Level Configuration")
To enable/disable automatic optimization and cleanup at the table level within the Open Catalog:
  1. Locate the desired table in the Open Catalog.
  2. Right-click on the table name and click ![This is the icon that represents more actions.](https://docs.dremio.com/images/icons/settings.png) to open the table settings.
  3. In the Table Settings dialog, select **Table Maintenance** from the settings sidebar.
  4. Toggle the relevant settings—**Enable automatic table maintenance** and/or **Enable table cleanup**.


## Customization[​](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance#customization "Direct link to Customization")
The following support keys are used to configure frequency and behavior for automatic maintenance operations:
  * `dremio.optimization.auto.optimize.period.hours` - controls how often automatic optimization should run. Defaults to 3 hours.
  * `dremio.optimization.auto.vacuum.period.hours` - controls how often table cleanup should run. Defaults to 24 hours.
  * `dremio.optimization.auto.maintenance.rate_limit.batch_size` - controls the maximim number of concurrent maintenance queries. Defaults to 10.


Was this page helpful?
[Previous Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)[Next Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Table Maintenance and Optimization](/developer/data-formats/apache-iceberg/table-maintenance-optimization)[Next Table Cleanup with Vacuum](/developer/data-formats/apache-iceberg/table-maintenance-optimization/table-cleanup-vacuum)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fapache-iceberg%2Ftable-maintenance-optimization%2Fautomated-maintenance%2F&_biz_t=1777950536368&_biz_i=Automated%20Maintenance%20with%20the%20Open%20Catalog%20%7C%20Dremio%20Documentation&_biz_n=413&rnd=986279&cdn_o=a&_biz_z=1777950536369)
