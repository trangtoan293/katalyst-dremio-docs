---
url: /admin/automated-backups
title: "Automated Backup | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64018.857168375
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * Automated Backup

Version: current [26.x]
# Automated Backup Enterprise
Backups are crucial to restoring Dremio's state in case of a critical failure, so we recommend creating regular backups to minimize loss from the restore point. Use Dremio's automated backups to create backups on a schedule and output the backups to a folder in distributed storage.
To enable automated backups, use the `dremio.automated_backups.enabled` [support key](/help-support/support-settings/#support-keys). By default, when `dremio.automated_backups.enabled` is enabled, Dremio creates a backup at midnight local time. To set your backup for a different time, set the `dremio.automated_backups.schedule` support key to the desired time in ISO format. For example, `13:45+02:00` or `14:12Z`.
Automated backups currently do not create backups for [Open Catalog](/data-sources/open-catalog)'s metadata storage backend. Follow the instructions on [Open Catalog backup and restore processes](/admin/open-catalog-backuprestore) to back up the metadata storage backend for Open Catalog.
Was this page helpful?
[Previous Service Telemetry](/admin/service-telemetry-kubernetes)[Next Managing Job Workloads](/admin/workloads)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Service Telemetry](/admin/service-telemetry-kubernetes)[Next Managing Job Workloads](/admin/workloads)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fadmin-dremio-kubernetes%2F&_biz_t=1777950339225&_biz_i=Administer%20Dremio%20on%20Kubernetes%20%7C%20Dremio%20Documentation&_biz_n=37&rnd=151230&cdn_o=a&_biz_z=1777950339237)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fautomated-backups%2F&_biz_t=1777950339237&_biz_i=Automated%20Backup%20%7C%20Dremio%20Documentation&_biz_n=38&rnd=497008&cdn_o=a&_biz_z=1777950339238)
