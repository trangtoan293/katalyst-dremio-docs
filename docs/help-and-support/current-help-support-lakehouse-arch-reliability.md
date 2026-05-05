---
url: /help-support/lakehouse-arch/reliability
slug: /help-support/lakehouse-arch/reliability
title: "Reliability | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65339.845733041
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * Reliability

Version: current [26.x]
On this page
# Pillar 4 - Reliability
The reliability pillar focuses on ensuring your system remains operational and can be quickly and efficiently restored in the event of unexpected downtime.
## Principles[​](/help-support/well-architected-framework/reliability/)
### Set Workload Management Queue settings[​](/help-support/well-architected-framework/reliability/)
Dremio’s Workload Management queues protect the system from being overloaded by queries that would exceed current available resources.
### Ensure that Regular Backups Can Be Restored[​](/help-support/well-architected-framework/reliability/)
Backups play a central role in system reliability and it is essential that they are run and tested regularly.
### Monitor and Measure Platform Activity[​](/help-support/well-architected-framework/reliability/)
In order to know that your system is reliable, you will need to regularly monitor and measure its activity.
## Best Practices[​](/help-support/well-architected-framework/reliability/)
### Initialize Workload Management Settings[​](/help-support/well-architected-framework/reliability/)
It is important to set up queue and query memory limits and set sensible concurrency limits in Dremio's Workload Management configuration to prevent rogue queries from bringing down engines unnecessarily. It is better to have Dremio identify and cancel a single query that exceeds memory limits than to let that query run and cause out-of-memory issues on an executor, which will then cause all queries being handled by that executor to fail.
Regarding per-node queue memory limits, it is important following the initial installation to ensure every queue has a [guardrail limit](/admin/workloads/workload-management/) set. Simply setting the value on every queue to 90-95% of the engine's average node memory will significantly reduce the potential for lost communication with Zookeeper. Having this guardrail in place can prevent executors from crashing if they encounter memory intensive queries.
See **[Initial Workload Management Settings](/help-support/well-architected-framework/reliability/wlm-init)** to understand more about configuring Workload Management settings in a new Dremio installation.
### Back Up Dremio[​](/help-support/well-architected-framework/reliability/)
Dremio stores important metadata in a metastore that is local to the main coordinator node, referred to as the KV Store. For customers with Iceberg metadata enabled, Dremio stores additional metadata for all parquet and iceberg datasets in the distributed storage area of the data lake.
KV store [backups](/reference/admin-cli/backup) should be taken at a frequency that satisfies any Recovery Point Objectives (RPOs) for the organization. If there is no RPO defined, a daily overnight backup is recommended. Dremio metadata related to all objects in the semantic layer (e.g., data sources, tables, views, Reflections, wikis, tags, scripts etc.), profiles for executed jobs, and user-uploaded files will be backed up.
The KV Store backup does not include the contents of the distributed store, acceleration cache, downloaded files and query results, nor does it include any configuration files from the `dremio_home`/conf folder, any keytab files or certificate stores, logs from the `dremio_home`/logs folder or any installed community connectors.
Of the items noted above, Dremio recommends you back up the contents of the /conf folder and any files that do not form part of the standard install, such as the keytab files, certificates, and community connector jar files. These should be backed up separately at the same frequency as your KV store backups. These files are as critical to restoring a Dremio cluster as the data in the KV Store, since the /conf folder contains useful configuration information, the keytab files and certificates contain the keys for facilitating secure communications with client tools and intra-cluster nodes, and the community connectors facilitate connections to community-supported data sources.
Logs can be backed up for historical reference, but they are not critical resources for cluster restoration.
In the event of a catastrophic failure, and with no available backup, you might need to reinstall your entire Dremio cluster and manually recreate the entire semantic layer without any reference to the objects that were in the environment previously.
### Test Restoring Dremio from a Backup[​](/help-support/well-architected-framework/reliability/)
Test the KV store backups to ensure that you can reliably restore into a new Dremio environment. You can only restore a KV store backup into an environment that is the same version of Dremio as the one from which the backup was originally taken. Be careful to note the version of your Dremio production environment and also note what the new version is if you upgrade it.
Since you cannot back up and restore the “acceleration” folder in the distributed storage, all Reflections will need to be refreshed after the metadata and all other backed-up files (contents of the /conf folder, keytabs, certificates, and community connector jars) have been restored.
Failure to test restoring from a backup can, at worst, result in losing any recent and valid backup. In this case, it's possible you could lose your entire Dremio cluster in the event of a catastrophic failure.
### Monitor Dremio Cluster Health[​](/help-support/well-architected-framework/reliability/)
Dremio exposes system metrics via its JMX interface, which allows for near real-time monitoring of heap and direct memory consumption, garbage collection frequencies, lightweight thread usage, active, completed, and failed jobs, jobs waiting in queues, and more.
You can connect third-party monitoring tools to Dremio to capture and monitor these metrics. These third-party tools can often be configured to access Dremio’s REST API endpoints to issue periodic queries to Dremio to obtain further system information for display on monitoring dashboards.
If critical or warning thresholds are met for these various JMX and SQL metrics, the tools can send alerts to operations personnel who can investigate if there are issues building in the Dremio cluster.
Monitoring the system allows you to identify and fix potential issues before they happen.
Was this page helpful?
[Previous Cost Optimization](/help-support/well-architected-framework/cost)[Next Initial Workload Management Settings](/help-support/well-architected-framework/reliability/wlm-init)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Cost Optimization](/help-support/well-architected-framework/cost)[Next Initial Workload Management Settings](/help-support/well-architected-framework/reliability/wlm-init)
!!
