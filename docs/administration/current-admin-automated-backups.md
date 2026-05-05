---
url: /admin/automated-backups
slug: /admin/automated-backups
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
To enable automated backups, use the `dremio.automated_backups.enabled` [support key](/help-support/support-settings/). By default, when `dremio.automated_backups.enabled` is enabled, Dremio creates a backup at midnight local time. To set your backup for a different time, set the `dremio.automated_backups.schedule` support key to the desired time in ISO format. For example, `13:45+02:00` or `14:12Z`.
Automated backups currently do not create backups for [Open Catalog](/data-sources/open-catalog)'s metadata storage backend. Follow the instructions on [Open Catalog backup and restore processes](/admin/open-catalog-backuprestore) to back up the metadata storage backend for Open Catalog.
Was this page helpful?
[Previous Service Telemetry](/admin/service-telemetry-kubernetes)[Next Managing Job Workloads](/admin/workloads)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Service Telemetry](/admin/service-telemetry-kubernetes)[Next Managing Job Workloads](/admin/workloads)
!!
