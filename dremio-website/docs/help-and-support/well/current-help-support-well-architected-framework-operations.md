---
url: /help-support/well-architected-framework/operations
title: "Operational Excellence | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.326159666
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * Operational Excellence

Version: current [26.x]
On this page
# Pillar 5 - Operational Excellence
Following a regular schedule of maintenance tasks is key to keeping your Dremio cluster operating at peak performance and efficiency. This pillar provides details about the tasks that should be periodically completed to maintain an operationally healthy Dremio cluster.
## Principles[​](/help-support/well-architected-framework/operations/#principles "Direct link to Principles")
### Regularly Evaluate Cluster Resources[​](/help-support/well-architected-framework/operations/#regularly-evaluate-cluster-resources "Direct link to Regularly Evaluate Cluster Resources")
As workloads expand and grow in your Dremio cluster, it is important to evaluate the usage of your cluster resources.
### Regularly Evaluate Query Performance[​](/help-support/well-architected-framework/operations/#regularly-evaluate-query-performance "Direct link to Regularly Evaluate Query Performance")
Regular query performance reviews will keep the highest cost queries from consuming too many of your cluster resources.
### Automate Promotion of Catalog Objects from Lower Environments[​](/help-support/well-architected-framework/operations/#automate-promotion-of-catalog-objects-from-lower-environments "Direct link to Automate Promotion of Catalog Objects from Lower Environments")
Promotion of objects from lower environments should be automated with Dremio’s REST APIs.
### Regularly Monitor Dremio Live Metrics[​](/help-support/well-architected-framework/operations/#regularly-monitor-dremio-live-metrics "Direct link to Regularly Monitor Dremio Live Metrics")
In order to ensure smooth operations of Dremio, it is valuable to collect metrics and take action when appropriate.
## Best Practices[​](/help-support/well-architected-framework/operations/#best-practices "Direct link to Best Practices")
### Clean Up Spill Directories[​](/help-support/well-architected-framework/operations/#clean-up-spill-directories "Direct link to Clean Up Spill Directories")
Spill directories are used to store intermediate data when memory is exceeded during query execution. Over time, these can consume significant disk space and impact performance or even lead to failures if disks become full.
**Spill Directory Format:** Spill directories follow the naming convention: `operatorname-query_id.majorfragment.threadNumber.minorFragment`.
Example: `esort-202aff8c-63c3-7c07-c6a7-6831baa98000.1.0`
To manually clean up spill directories:
  1. Search for the query ID in the directory name.
  2. Verify the query status—check whether the query is still running, or if it was cancelled or killed.
  3. If the query is cancelled or killed, delete the corresponding spill directory and its files.


Regularly auditing and cleaning up these directories helps preserve disk space, reduce I/O overhead, and ensure the overall health and reliability of your Dremio cluster.
### Optimize Workload Management Rules[​](/help-support/well-architected-framework/operations/#optimize-workload-management-rules "Direct link to Optimize Workload Management Rules")
Since the workloads and volumes of queries change over time, Workload Management queue-routing rule settings for query-cost thresholds should be re-evaluated and adjusted to rebalance the proportion of queries that flow to each of the cost-based queues.
You can use statistical quantile analysis on the query history data to determine what the query cost threshold should be between the low-cost and high-cost user query queues in a two-queue setup, or what the threshold should be between the low-cost and medium-cost user query queues and the medium-cost and high-cost user query queues in a three-queue setup.
Ideally, in a two-queue setup, you want to see approximately an 80%/20% split of queries hitting the low/high cost user query queues. In a three-queue setup, you want to see approximately a 75%/15%/10% split of queries hitting the low/medium/high cost user query queues.
### Optimize Query Performance[​](/help-support/well-architected-framework/operations/#optimize-query-performance "Direct link to Optimize Query Performance")
When developing the semantic layer, it is best to create the views in each of the three layers according to best practices without the use of Reflections, then test querying the application layer views to establish baseline performance.
For queries that appear to be running sub-optimally, we recommend first analyzing the query profile to determine if there are any bottlenecks that can be removed to improve performance. Secondly, if performance issues persist, you can use Reflections where they will have most benefit. A well-architected semantic layer will allow Reflections to be placed at strategic locations (e.g., in the business layer, where a view is constructed from joining several other views together) so that the fewest number of Reflections can benefit the largest volume of queries.
### Configure Persistent Logging in Kubernetes Environments[​](/help-support/well-architected-framework/operations/#configure-persistent-logging-in-kubernetes-environments "Direct link to Configure Persistent Logging in Kubernetes Environments")
Default logging in Kubernetes goes to STDOUT, which have limited availability time in Kubernetes due to their ephemeral nature. Instead, to help capture logging for longer periods, we recommend persisting logs permanently on disk. This can be done simply with only minor edits to the Dremio Helm charts.
### Monitor Dremio via JMX metrics[​](/help-support/well-architected-framework/operations/#monitor-dremio-via-jmx-metrics "Direct link to Monitor Dremio via JMX metrics")
To maximize your investment in Dremio and to proactively identify and resolve issues related to Dremio before they have a broader impact on workload, it’s important to set up a good monitoring solution. The solution should ensure overall cluster health and performance.
Dremio exposes a large set of cluster and infrastructure metrics via its JMX interface that can be utilized in a monitoring solution. Additional Dremio metrics can be collected via API and JDBC/ODBC.
It is important to align the monitoring solution with existing monitoring infrastructure available in your organization. This might mean leveraging open-source tools such as Prometheus or Grafana, or some commercially available tools such as AppDynamics or Datadog.
See [Monitoring Dremio](/admin/monitoring/dremio-nodes) to understand more about options for monitoring a Dremio installation.
### Monitor Dremio via sys.jobs_recent and Monitor Page[​](/help-support/well-architected-framework/operations/#monitor-dremio-via-sysjobs_recent-and-monitor-page "Direct link to Monitor Dremio via sys.jobs_recent and Monitor Page")
Periodically view the Monitor page of Dremio. The [Catalog Usage](/admin/monitoring/#catalog-usage-enterprise) tab on the Monitor page provides detailed visualizations and metrics that allow you to track the performance of user queries in the cluster, usage patterns, resource consumption, and user impact. The Monitor page shows the volume of queries processed by hour or day and can help you identify bottlenecks.
Was this page helpful?
[Previous Reliability](/help-support/well-architected-framework/reliability)[Next Capacity Planning and Scaling](/help-support/well-architected-framework/operations/capacity-planning)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reliability](/help-support/well-architected-framework/reliability)[Next Capacity Planning and Scaling](/help-support/well-architected-framework/operations/capacity-planning)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fwell-architected-framework%2Foperations%2F&_biz_t=1777950381862&_biz_i=Operational%20Excellence%20%7C%20Dremio%20Documentation&_biz_n=137&rnd=100695&cdn_o=a&_biz_z=1777950381863)
