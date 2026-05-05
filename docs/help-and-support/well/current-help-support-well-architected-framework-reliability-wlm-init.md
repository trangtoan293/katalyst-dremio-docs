---
url: /help-support/well-architected-framework/reliability/wlm-init
slug: /help-support/well-architected-framework/reliability/wlm-init
title: "Initial Workload Management Settings | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64229.57335575
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * [Reliability](/help-support/well-architected-framework/reliability)
  * Initial Workload Management Settings

Version: current [26.x]
On this page
# Initial Workload Management Settings
When Dremio is first installed, there are no guardrails put in place out of the box to restrict how much memory any one queue or any one query in a queue can consume out of the total amount of memory available. This leaves Dremio open to potential out-of-memory issues if a user issues a large query which requires more memory than is available on the Dremio executors. In addition, the default queue concurrencies are a little high and could lead to memory exhaustion if many smaller queries (or up to 10 large ones) also end up needing to collectively consume more memory than is available on the Dremio Executors.
This document provides recommendations for how to set up workload management queue and query memory limits and queue concurrency limits immediately after Dremio is installed to ensure Dremio will remain operational under memory pressure. The document covers the situations where Dremio is configured with and without engines.
This document assumes Dremio has been installed and is running.
## Configure Workload Management for a New installations[​](/help-support/well-architected-framework/reliability/wlm-init/)
The following sections provide recommendations for how to set up some initial queue and query memory limits based upon whether Dremio is or isn’t configured to use multiple engines.
### No Engines or Single Engine Configuration[​](/help-support/well-architected-framework/reliability/wlm-init/)
For Dremio installations where no engines or just a single engine is configured and therefore all queries get routed to the same set of executors, it is important to set up queue and query memory limits and set sensible concurrency limits to prevent rogue queries from bringing down Executors unnecessarily. It is a lot better to have Dremio identify and cancel a single query because it recognizes it exceeds the set memory limits than it is to let that query run and cause out-of-memory issues on an Executor which will then cause all queries being handled by that executor to fail.
The default queue settings for an out-of-the-box Dremio install are shown below, notice how no limits are set:
!
One important value to make note of is the _Average node memory_ , which in this example is 16384 (or 16 GB), this value tells us the maximum amount of direct memory that is available on any one Executor. The value in this example is low. Consider that Dremio recommends 64 GB or 128 GB node sizes for Executors, which after giving memory to the OS Kernel and heap memory would typically leave 52 GB or 112-116 GB of direct memory per executor.
Regarding Queue Memory Limit per Node settings, the most important thing we can do when the initial installation is complete is ensure every queue has a limit set. Even if you set the value on every queue to 90-95% of the Average node memory this will significantly reduce the potential for the nodes to “lose communication” with Zookeeper and will prevent the executors from crashing if they encounter memory intensive queries because a small memory will always be there to keep the communication with zookeeper.
As a rule of thumb, the grand total queue memory limit per node summed across the Low and High cost user queries queues should not exceed 120% of the _Average node memory_ value. The reason we allow this to exceed 100% is that it is fairly unlikely that both queues will experience maximum usage of memory at exactly the same time, therefore we allow some degree of overlap.
The low- and high-cost Reflections queue memory limit should be set to at most the same values as the queue memory limit for the low- and high-cost user queries. Reflections typically run far less frequently than other query types and often they are triggered to run outside of normal working hours, therefore again we allow the sum of these values to exceed the Average node memory value.
However, if you find after making changed to conform to the rule of thumb above that you have too many queries failing due to not enough memory being available to a particular queue, then it is safe to increase the amount of memory allocated to the queue where queries are failing, however never go beyond 95% of the average node memory on any one queue.
In terms of job memory limits, for high-cost user queries we want to give Dremio the opportunity to execute the biggest queries, therefore we will let the biggest job consume up to approximately 50-70% of the total memory available, depending on the Average node memory setting. Low cost user queries typically consume far less memory and at most we would set a job memory limit of 50% of the queue memory limit or 5 GB for one of these jobs, whichever is lower.
For UI Previews Dremio recommends both the queue and job memory limit be set to the maximum memory allocated to a job in the high cost user queries queue, it is highly unlikely that these memory limits will ever get reached, but this provides guardrails in case they do.
Regarding concurrency limits, Dremio recommends the following initial concurrency settings, regardless of what the memory settings are:  
| Queue Name  | Max Concurrency Limit  |  
| --- | --- |  
| High Cost Reflections  | 1  |  
| High Cost User Queries  | 5  |  
| Low Cost Reflections  | 25  |  
| Low Cost User Queries  | 25  |  
| UI Previews  | 50  |  
The following table summarizes the rules discussed above:
**Table 1: Rules for Zero Engines or Single Engine**  
| Queue Name  | Max Concurrency Limit  | Queue Memory Limit per Node  | Job Memory Limit per Node  |  
| --- | --- | --- | --- |  
| High Cost Reflections  | 2  | 0.75 x Average Node Memory  | 0.5 x Average Node Memory  |  
| High Cost User Queries  | 3  | 0.75 x Average Node Memory  | 0.5 x Average Node Memory  |  
| Low Cost Reflections  | 5  | 0.4375 x Average Node Memory  | 0.1875 x Average Node Memory  |  
| Low Cost User Queries  | 20  | 0.4375 x Average Node Memory  | 0.1875 x Average Node Memory  |  
| UI Previews  | 100  | 0.5 x Average Node Memory  | 0.5 x Average Node Memory  |  
* 0.1875 x Average Node Memory or 5 GB, which-ever is lower
The following sections provide examples of sensible memory settings based on various different Average node memory values.
#### Average Node Memory = 16384 (16 GB)[​](/help-support/well-architected-framework/reliability/wlm-init/)")  
| Queue Name  | Max Concurrency Limit  | Queue Memory Limit per Node  | Job Memory Limit per Node  |  
| --- | --- | --- | --- |  
| High Cost Reflections  | 2  | 12 GB  | 8 GB  |  
| High Cost User Queries  | 3  | 12 GB  | 8 GB  |  
| Low Cost Reflections  | 5  | 7 GB  | 3 GB  |  
| Low Cost User Queries  | 20  | 7 GB  | 3 GB  |  
| UI Previews  | 100  | 8 GB  | 8 GB  |  
#### Average Node Memory = 32768 (32 GB)[​](/help-support/well-architected-framework/reliability/wlm-init/)")  
| Queue Name  | Max Concurrency Limit  | Queue Memory Limit per Node  | Job Memory Limit per Node  |  
| --- | --- | --- | --- |  
| High Cost Reflections  | 2  | 24 GB  | 16 GB  |  
| High Cost User Queries  | 3  | 24 GB  | 16 GB  |  
| Low Cost Reflections  | 5  | 14 GB  | 5 GB  |  
| Low Cost User Queries  | 20  | 14 GB  | 5 GB  |  
| UI Previews  | 100  | 16 GB  | 16 GB  |  
#### Average Node Memory = 53248 (52 GB)[​](/help-support/well-architected-framework/reliability/wlm-init/)")  
| Queue Name  | Max Concurrency Limit  | Queue Memory Limit per Node  | Job Memory Limit per Node  |  
| --- | --- | --- | --- |  
| High Cost Reflections  | 2  | 40 GB  | 25 GB  |  
| High Cost User Queries  | 3  | 40 GB  | 25 GB  |  
| Low Cost Reflections  | 5  | 20 GB  | 5 GB  |  
| Low Cost User Queries  | 20  | 20 GB  | 5 GB  |  
| UI Previews  | 100  | 25 GB  | 25 GB  |  
#### Average Node Memory = 114688 (112 GB)[​](/help-support/well-architected-framework/reliability/wlm-init/)")  
| Queue Name  | Max Concurrency Limit  | Queue Memory Limit per Node  | Job Memory Limit per Node  |  
| --- | --- | --- | --- |  
| High Cost Reflections  | 2  | 84 GB  | 56 GB  |  
| High Cost User Queries  | 3  | 84 GB  | 56 GB  |  
| Low Cost Reflections  | 5  | 50 GB  | 5 GB  |  
| Low Cost User Queries  | 20  | 50 GB  | 5 GB  |  
| UI Previews  | 100  | 56 GB  | 56 GB  |  
### Multi-Engine Configuration (Kubernetes)[​](/help-support/well-architected-framework/reliability/wlm-init/)")
For Dremio installations on Kubernetes where multiple engines are configured, we have to understand 1) how many nodes are in the engine and 2) whether Reflections will be serviced by a dedicated engine or whether the Reflection refreshes will be serviced by all nodes across all engines. In the example below we assume Reflections **are NOT serviced** by a dedicated engine.
We also assume that there is a 1-to-1 mapping between a query queue and an engine.
The reason for the **-5 GB** in these calculations is to ensure that when Reflections run there is always a portion of each node in the engine that won’t get utilized by the queries that run on that engine, which ensures there will always be some free memory available on each node to service Reflections.
**Table 2: Rules for Multiple Engines**  
| Queue Name  | Max Concurrency Limit  | Queue Memory Limit per Node  | Job Memory Limit per Node  |  
| --- | --- | --- | --- |  
| High Cost Reflections  | 2  | Average Node Memory / 2  | Average Node Memory / 4  |  
| High Cost User Queries  | 3  | (Average Node Memory - 5 GB)/2  | (Average Node Memory - 5 GB) / 4  |  
| Low Cost Reflections  | 5  | Average Node Memory / 3  | 0.1875 x Average Node Memory  |  
| Low Cost User Queries  | 20  | (Average Node Memory - 5 GB) / 3  | 0.1875 x Average Node Memory  |  
| UI Previews  | 100  | (Average Node Memory - 5 GB) / 2  | (Average Node Memory - 5 GB) / 2  |  
* 0.1875 x Average Node Memory or 5 GB, whichever is lower
** Average Direct memory needs to be computed per engine
For cases where a dedicated engine has been provisioned for Reflections, **Table 1** should be followed.
## Configuring Queues Programmatically[​](/help-support/well-architected-framework/reliability/wlm-init/)
A newly installed Dremio cluster comes with five queues with default configurations. Dremio provides APIs to update memory configuration of queues. An approach to programmatically configure queues, based on cluster size, is provided below.
  * Dremio needs the auth token to make any API call. Auth token can be obtained using the API `/apiv2/login POST` method. More details can be found here: [Dremio Login](/reference/api)
  * Next, you should calculate the average direct memory by engine by querying Dremio system tables `sys.nodes` and `sys.memory`. You can submit the query via [API](/reference/api/sql) or JDBC.
  * Using the average direct memory, the following parameters can be computed for each queue:
    * Max Concurrency Limit
    * Queue Memory Limit per node
    * Job Memory Limit per node (based on your implementation, use Tables 1 & 2 above to compute these values from average direct memory)
  * For each queue, Dremio generates a unique Queue ID. Get the current queue configuration using `GET /api/v3/wlm/queue`. Additional details can be found in [Dremio All Queues](/reference/api/wlm/queue)
  * For each queue, update Dremio with the modified queue configuration using the API `PUT /api/v3/wlm/queue/{id}`. Additional details can be found in [Update Queue](/reference/api/wlm/queue).


Was this page helpful?
[Previous Reliability](/help-support/well-architected-framework/reliability)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reliability](/help-support/well-architected-framework/reliability)
