---
url: /admin/monitoring/jobs/view-profiles
slug: /admin/monitoring/jobs/view-profiles
title: "Viewing Profiles | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65340.125062291
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Monitoring](/admin/monitoring)
  * [Viewing Jobs](/admin/monitoring/jobs)
  * Viewing Profiles

Version: current [26.x]
On this page
# Viewing a Raw Profile
A raw profile is a UI-generated profile that is a subset of the data that you can download and provides a summary of metrics collected for each executed query that can be used to monitor and analyze query performance.
To navigate to a raw profile:
  1. Click ![This is the icon that represents the Jobs page.](https://docs.dremio.com/images/cloud/jobs-page-icon.png) in the side navigation bar to open the Jobs page.
  2. On the Jobs page, click a job that you would like to see the raw profile for.
  3. At the top of the next page, click the Raw Profile tab to open a raw profile of the job in a separate dialog. The associated raw profile pop-up shows a variety of information for review.


## Views[​](/admin/monitoring/jobs/view-profiles/)
Within the Raw Profile dialog, you can analyze the [Job Metrics](/admin/monitoring/jobs/view-profiles/) based on the following views:  
| View  | Description  |  
| --- | --- |  
| Query  | Shows the selected query statement and job metrics. See if your SQL query is what you were expecting and the query is run against the source data.  |  
| Visualized Plan  | Shows a visualized diagram and job metrics. This view is useful in understanding the flow of the query and for analyzing out of memory issues and incorrect results. The detailed visualized pan diagram is always read from the bottom up.  |  
| Planning  | Shows planning metrics, query output schema, non default options, and job metrics. This view shows how query planning is executed, because it provides statistics about the actual cost of the query operations in terms of memory, input/output, and CPU processing. You can use this view to identify which operations consumed the majority of the resources during a query and to address the cost-intensive operations. In particular, the following information is useful: 
  * Non Default Options – See if non-default parameters are being used.
  * Metadata Cache Hits and Misses with times
  * Final Physical Transformation – Look for pushdown queries for RDBMS, MongoDB, or Elasticsearch, filter pushdowns or partition pruning for parquet, and view usage of stripes for ORC.
  * Compare the estimated row count versus the actual scan, join, or aggregate result. 
  * Row Count – See if row count (versus rows) is used. Row count can cause an expensive broadcast.
  * Build – See if build (versus probe) is used. Build loads data into memory.

 |  
| Acceleration  | Shows Reflection outcome, canonicalized user query alternatives, Reflection details, and job metrics.
  * Multiple substitutions – See if the substitutions are excessive. 
  * System activity – See if `sys.reflections`, `sys.materializations`, and `sys.refreshes` are excessive.
  * Comparisons – Compare cumulative cost (found in Best Cost Replacement Plan) against Logical Planning, which is in the Planning view.

This view is useful for determining whether exceptions or matches are occurring. The following considerations determines the acceleration process: 
  * Considered, Matched, Chosen – The query is accelerated.
  * Considered, Matched, Not Chosen – The query is not accelerated because either a costing issue or an exception during substitution occurred.
  * Considered, Not Matched, Not Chosen – The query is not accelerated because the Reflection does not have the data to accelerate. 

 |  
| Error  | (If applicable) Shows information about an error. The Failure Node is always the coordinator node and the server name inside the error message is the actual affected node.  |  
## Job Metrics[​](/admin/monitoring/jobs/view-profiles/)
Each view displays the following metrics:
  * **[Job Summary](/admin/monitoring/jobs/view-profiles/)**
  * **[State Durations](/admin/monitoring/jobs/view-profiles/)**
  * **[Threads](/admin/monitoring/jobs/view-profiles/)**
  * **[Resource Allocation](/admin/monitoring/jobs/view-profiles/)**
  * **[Nodes](/admin/monitoring/jobs/view-profiles/)**
  * **[Operators](/admin/monitoring/jobs/view-profiles/)**


### Job Summary[​](/admin/monitoring/jobs/view-profiles/)
The job summary information includes:
  * Job State
  * Coordinator Name
  * Thread Count
  * Command Pool Wait Time
  * Total Query Time


### State Durations[​](/admin/monitoring/jobs/view-profiles/)
The length of time (in milliseconds) for each of the job states:
  * Pending
  * Metadata Retrieval
  * Planning
  * Engine Start
  * Queued
  * Execution Planning
  * Starting
  * Running


For descriptions of the job states, see [Job States and Statuses](/admin/monitoring/jobs/).
### Threads[​](/admin/monitoring/jobs/view-profiles/)
The Threads section provides an overview table and a major fragment block for each major fragment. Each row in the Overview table provides the number of minor fragment that Dremio parallelized from each major fragment, as well as aggregate time and memory metrics for the minor fragments.
In particular, the following metrics are useful:
  * Setup Time – Time opening and closing of files.
  * Waiting – Time waiting on CPU.
  * Blocked on Downstream – Represents completed work whereas the next phase is not ready to accept work.
  * Blocked on Upstream – Represents the phase before it is ready to give work though the current phase is not ready.
  * Phase Metrics – Displays memory used per node (Phases can run in parallel).


Major fragment blocks correspond to a row in the Overview table. You can expand the blocks to see metrics for all of the minor fragment that were parallelized from each major fragment, including the host on which each minor fragment ran. Each row in the major fragment table presents the fragment state, time metrics, memory metrics, and aggregate input metrics of each minor fragment.
### Resource Allocation[​](/admin/monitoring/jobs/view-profiles/)
The Resource Allocation section shows the following details for managed resources and workloads:
  * Queue Name
  * Queue ID
  * Rule Name
  * Rule Content
  * Rule Action
  * Query Cost
  * Query Type


### Nodes[​](/admin/monitoring/jobs/view-profiles/)
The Nodes section includes host name, resource waiting time, and peak memory.
### Operators[​](/admin/monitoring/jobs/view-profiles/)
The Operators section shows aggregate metrics for each operator within a major fragment that performed relational operations during query execution.
**Operator Overview Table**
The following table lists descriptions for each column in the Operator Overview table:  
| Column Name  | Description  |  
| --- | --- |  
| Operator ID  | The coordinates of an operator that performed an operation during a particular phase of the query. For example, 02-xx-03 where 02 is the major fragment ID, xx corresponds to a minor fragment ID, and 03 is the Operator ID.  |  
| Type  | The operator type. Operators can be of type project, filter, hash join, single sender, or unordered receiver.  |  
| Min Setup Time, Avg Setup Time, Max Setup Time  | In general, the time spent opening and closing files. Specifically, the minimum, average, and maximum amount of time spent by the operator to set up before performing the operation.  |  
| Min Process Time, Avg Process Time, Max Process Time  | The shortest amount of time the operator spent processing a record, the average time the operator spent in processing each record, and the maximum time that the operator spent in processing a record.  |  
| Wait (min, avg, max)  | In general, the time spent waiting on Disk I/O. These fields represent the minimum, average, and maximum times spent by operators waiting on disk I/O.  |  
| Avg Peak Memory  | Represents the average of the peak direct memory allocated across minor fragment. Relates to the memory needed by operators to perform their operations, such as hash join or sort.  |  
| Max Peak Memory  | Represents the maximum of the peak direct memory allocated across minor fragment. Relates to the memory needed by operators to perform their operations, such as hash join or sort.  |  
**Operator Block**
The Operator Block shows time and memory metrics for each operator type within a major fragment. Operator types include:
  * SCREEN
  * PROJECT
  * WRITER_COMMITTER
  * ARROW_WRITER


The following table provides descriptions for each column presented in the operator block:  
| Column Name  | Description  |  
| --- | --- |  
| Thread  | The coordinate ID of the minor fragment on which the operator ran. For example, 04-03-01 where 04 is the major fragment ID, 03 is the minor fragment ID, and 01 is the Operator ID.  |  
| Setup Time  | The amount of time spent by the operator to set up before performing its operation. This includes run-time code generation and opening a file.  |  
| Process Time  | The amount of time spent by the operator to perform its operation.  |  
| Wait Time  | The cumulative amount of time spent by an operator waiting for external resources. such as waiting to send records, waiting to receive records, waiting to write to disk, and waiting to read from disk.  |  
| Max Batches  | The maximum number of record batches consumed from a single input stream.  |  
| Max Records  | The maximum number of records consumed from a single input stream.  |  
| Peak Memory  | Represents the peak direct memory allocated. Relates to the memory needed by the operators to perform their operations, such as hash join and sort.  |  
When viewing operation details, the following are observable:
  * The degree of parallelism and number of minor fragments.
  * The setup, process, and wait time per minor fragments.


Was this page helpful?
[Previous Visual Profile](/admin/monitoring/jobs/viewing-query-profiles)[Next Uploading Profile Data](/admin/monitoring/jobs/view-profiles/uploading-profile-data)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Visual Profile](/admin/monitoring/jobs/viewing-query-profiles)[Next Uploading Profile Data](/admin/monitoring/jobs/view-profiles/uploading-profile-data)
!!
