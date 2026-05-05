---
url: /help-support/well-architected-framework/operations/capacity-planning
title: "Capacity Planning and Scaling | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64230.089428875
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * [Operational Excellence](/help-support/well-architected-framework/operations)
  * Capacity Planning and Scaling

Version: current [26.x]
On this page
# Capacity Planning and Scaling
You can use this framework to plan capacity, monitor performance, and make scaling decisions for your Dremio Enterprise cluster as it grows. This framework covers proactive and reactive scaling to sustain query performance under increasing workloads and user concurrency. For protecting the cluster against memory exhaustion through Workload Management guardrails, see [Initial Workload Management Settings](/help-support/well-architected-framework/reliability/wlm-init).
## Principles[​](/help-support/well-architected-framework/operations/capacity-planning/#principles "Direct link to Principles")
  * **Workload Isolation:** Different workloads must not compete for the same resources.
  * **Standardization:** Scaling is supported by adding engines or changing to a different Dremio-prescribed engine size.
  * **Proactive Scaling:** Add capacity based on leading indicators, not reactive metrics.
  * **Reactive Controls:** Use lagging indicators to trigger corrective scaling actions.
  * **Operational Transparency:** Performance is monitored through specific query error thresholds and query stage SLAs, with defined corrective actions for each.


## Separate Workloads[​](/help-support/well-architected-framework/operations/capacity-planning/#separate-workloads "Direct link to Separate Workloads")
If metadata is separate between workloads, use separate Dremio clusters to isolate change management schedules and resource and upgrade decisions.
If data or metadata is shared across workloads, use separate engines aligned to workload type:  
| Workload Type  | Description  |  
| --- | --- |  
| Reflection refreshes  | Reflection planning and refreshes  |  
| Metadata refreshes  | Catalog and metadata operations  |  
| User queries  | Low-cost and high-cost user queries  |  
| ETL workloads  | CTAS and Iceberg data modification operations  |  
In multi-tenant environments such as multiple departments or geographies, use a low-cost and high-cost query engine per tenant to support chargeback models.
Using engines provides platform stability; if one engine goes down, it won’t affect others. You can start and stop engines on demand and size them differently based on workload patterns.
This architecture enforces isolation, prevents resource contention, and enables targeted scaling. For more information, see [Managing Engines in Kubernetes](/deploy-dremio/managing-engines-kubernetes).
## Scale Engines[​](/help-support/well-architected-framework/operations/capacity-planning/#scale-engines "Direct link to Scale Engines")
Dremio supports two scaling mechanisms:
  * **Horizontal scaling:** Add one or more engines to increase execution capacity. Each engine runs a Dremio-prescribed set of executors. This is the primary mechanism for handling growth in concurrent users, query volume, and new workloads.
  * **Vertical scaling:** Change an engine to a larger Dremio-prescribed size to increase the resources available to that engine. For the main coordinator, vertical scaling addresses bottlenecks in query planning and metadata operations.


Scaling outside of these mechanisms, such as by adding arbitrary executor nodes or resizing outside of prescribed sizes, is not supported. For supported engine sizes, see [Sizes](/deploy-dremio/managing-engines-kubernetes#sizes).
For recommended configurations, see [Server or Instance Hardware](/deploy-dremio/other-options/standalone/system-requirements#server-or-instance-hardware).
## Plan Capacity[​](/help-support/well-architected-framework/operations/capacity-planning/#plan-capacity "Direct link to Plan Capacity")
Capacity decisions are driven by two types of indicators. Leading indicators signal that demand is growing and allow you to scale proactively before performance degrades. Lagging indicators signal that the cluster is already under pressure and require corrective action.  
| Indicator  | Scenario  | Action  |  
| --- | --- | --- |  
| Leading  | New use cases or analytics workloads  | Deploy a minimum of two engines of the appropriate size. Dremio distributes queries evenly across engines using round-robin distribution.  |  
| Leading  | Concurrency or volume growth  | Deploy one or more additional engines of the appropriate size.  |  
| Leading  | Growth in query volume or complexity  | Provision 25% buffer capacity within each engine.  |  
| Lagging  | Query execution errors (for example, out-of-memory or resource errors)  | Deploy one or more additional engines of the appropriate size and rebalance workloads using Workload Management (WLM) rules.  |  
| Lagging  | SLA breaches on pending, planning, or execution planning stages  | Vertically scale the main coordinator.  |  
If WLM memory limits have not yet been configured, set these before adding engines. For guidance, see [Initial Workload Management Settings](/help-support/well-architected-framework/reliability/wlm-init).
## Monitor Scaling Triggers[​](/help-support/well-architected-framework/operations/capacity-planning/#monitor-scaling-triggers "Direct link to Monitor Scaling Triggers")
The following tables define recommended thresholds and corrective actions for query execution errors and query stage performance.
### Query Execution Errors[​](/help-support/well-architected-framework/operations/capacity-planning/#query-execution-errors "Direct link to Query Execution Errors")
Use `outcomeReason` in `queries.json` to identify resource-related query failures.  
| Error  | Recommended Threshold  | Action  |  
| --- | --- | --- |  
| `OUT_OF_MEMORY`  | 1% of queries running out of direct memory  | Add engine and move workload  |  
| `RESOURCE_ERROR`  | 1% of queries running out of heap memory  | Add engine and move workload  |  
| Execution Setup Exception  | 1% of queries exhibiting node disconnects  | Add engine and move workload  |  
| ChannelClosedException (fabric server)  | 1% of queries exhibiting node disconnects  | Add engine and move workload  |  
| `CONNECTION ERROR: Exceeded timeout`  | 1% of queries exhibiting node disconnects  | Add engine and move workload  |  
### Query Stage Performance SLAs[​](/help-support/well-architected-framework/operations/capacity-planning/#query-stage-performance-slas "Direct link to Query Stage Performance SLAs")
Use `queries.json` via an external monitoring tool or the query profile to monitor query stage durations. p90 (the 90th percentile) means that 90% of queries complete within the measured duration.  
| Stage  | Field in `queries.json`  | Recommended Threshold  | Action  |  
| --- | --- | --- | --- |  
| 0: Total Duration  | `finish - start`  | p90 — align with business need  | See stages 1–8  |  
| 1: Pending  | `pendingTime`  | p90 never above 2 seconds  | Vertically scale the main coordinator  |  
| 2: Metadata Retrieval  | `metadataRetrievalTime`  | p90 never above 5 seconds  | Switch to Iceberg table format if using raw Parquet  |  
| 3: Planning  | `planningTime`  | p90 never above 2 seconds  | Vertically scale the main coordinator  |  
| 4: Engine Start  | `engineStartTime`  | N/A  | N/A  |  
| 5: Queued  | `queuedTime`  | p90 never above 2 seconds  | Add engine and move workload  |  
| 6: Execution Planning  | `executionPlanningTime`  | p90 never above 2 seconds  | Vertically scale the main coordinator  |  
| 7: Starting  | `startingTime`  | p90 never above 2 seconds  | Add engine and move workload  |  
| 8: Running  | `runningTime`  | p90 — align with business need  | Add engine and move workload  |  
Was this page helpful?
[Previous Operational Excellence](/help-support/well-architected-framework/operations)[Next Self-Service Semantic Layer](/help-support/well-architected-framework/semantic)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Operational Excellence](/help-support/well-architected-framework/operations)[Next Self-Service Semantic Layer](/help-support/well-architected-framework/semantic)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fadmin-cli%2Fbackup%2F&_biz_t=1777950550545&_biz_i=Back%20up%20Dremio%20%7C%20Dremio%20Documentation&_biz_n=445&rnd=136122&cdn_o=a&_biz_z=1777950550546)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fwell-architected-framework%2Foperations%2Fcapacity-planning%2F&_biz_t=1777950550546&_biz_i=Capacity%20Planning%20and%20Scaling%20%7C%20Dremio%20Documentation&_biz_n=446&rnd=76992&cdn_o=a&_biz_z=1777950550547)
