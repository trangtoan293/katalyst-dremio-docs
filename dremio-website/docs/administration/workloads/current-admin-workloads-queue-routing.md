---
url: /admin/workloads/queue-routing
title: "Queue Routing | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64195.446178458
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Managing Job Workloads](/admin/workloads)
  * Queue Routing

Version: current [26.x]
On this page
# Queue Routing
You can route refresh jobs for all Reflections on a dataset (either a table or a view), all Reflections in a folder, or all Reflections in a space, to a specific queue.
Datasets do not inherit this setting. For example, if for Table 1 you set the queue to Queue 1, refresh jobs for Reflections on views that are created on Table 1 do not run in Queue 1 by default.
For the SQL syntax, see [Reflections](/reference/sql/commands/acceleration) in the SQL reference.
## Example[​](/admin/workloads/queue-routing/#example "Direct link to Example")
Suppose that you had the following tables, views, and Reflections, as shown in the first diagram:
  * Table 1 has a Reflection on it.
  * Views 1 and 2 are derived from Table 1.
  * View 1 has two Reflections.
  * Views 3 and 4 are derived from View 2.
  * Views 3 and 4 have one Reflection each.


![](https://docs.dremio.com/assets/images/reflection-refresh-jobs-base-88275a42f8e4bb718684aebd62f58ad2.png)
You run these SQL commands to route the Reflection-refresh jobs for Table 1, View 1, and View 3 to Queue 1. You let Dremio decide which of the two default queues for Reflection-refresh jobs (Low-Cost Reflections and High-Cost Reflections) to use for View 4:
![](https://docs.dremio.com/assets/images/reflection-refresh-jobs-queue-bcd7fada3cd7e6eb399690055ad65928.png)
Example

```
ALTER DATASET "Table 1" ROUTE Reflections TO QUEUE "Queue 1"  
ALTER DATASET "View 1" ROUTE Reflections TO QUEUE "Queue 1"  
ALTER DATASET "View 3" ROUTE Reflections TO QUEUE "Queue 1"  

```

View 1 and View 3 do not inherit the setting from Table 1. If you want to run refresh jobs for the Reflections on those views in Queue 1, you must run the SQL command on those views and specify Queue 1.
According to the schedule defined on the Reflection Refresh page of the settings for Table 1, the data in Table 1 is refreshed:
![](https://docs.dremio.com/assets/images/reflection-refresh-jobs-refresh-table-71125fddab61243d6b89082486beb228.png)
After the refresh of the data in Table 1 is complete, Dremio runs the Reflection-refresh jobs for the Reflections. The jobs for the Reflections for Table 1, View 1, and View 3 run in Queue 1. The job for the Reflection on View 4 runs in the default queue that Dremio selected:
![](https://docs.dremio.com/assets/images/reflection-refresh-jobs-1ad7a1f89654a7ec33f667db0d861fd2.png)
Was this page helpful?
[Previous Job History & Job Details](/admin/workloads/jobs)[Next Workload Management](/admin/workloads/workload-management)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Job History & Job Details](/admin/workloads/jobs)[Next Workload Management](/admin/workloads/workload-management)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fdrivers%2F&_biz_t=1777950515111&_biz_i=Drivers%20%7C%20Dremio%20Documentation&_biz_n=379&rnd=7987&cdn_o=a&_biz_z=1777950515129)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fworkloads%2Fqueue-routing%2F&_biz_t=1777950515128&_biz_i=Queue%20Routing%20%7C%20Dremio%20Documentation&_biz_n=380&rnd=391234&cdn_o=a&_biz_z=1777950515129)
