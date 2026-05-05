---
url: /admin/workloads/job-queues
slug: /admin/workloads/job-queues
title: "Queue Control | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64194.981380291
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Managing Job Workloads](/admin/workloads)
  * Queue Control

Version: current [26.x]
On this page
# Queue Control
This feature is for Community Edition only. For Enterprise Edition, see [Workload Management](/admin/workloads/workload-management).
## Job Classes[​](/admin/workloads/job-queues/)
Dremio has 3 static job classes for CPU slicing. Here they are in descending priority order:
  * **Near-realtime** - This class includes all UI preview jobs. This is to ensure a responsive user experience for all operations in Dremio's UI.
  * **Interactive** - This class is for all user jobs including ones submitted over ODBC and JDBC as well as full runs in the UI.
  * **Background** - This class includes all Reflection creation and maintenance jobs. These jobs have the lowest priority to ensure higher performance for user-submitted jobs.


## Query Queue Control[​](/admin/workloads/job-queues/)
Dremio supports placing user jobs into two static job queues (Large and Small) based on a configurable query cost threshold.
Maximum concurrent queries and queue timeout can be set for each queue under `Admin > Cluster > Queue Control > Query Queue Control`. We recommend configuring concurrency of the large query queue to be lower than that of the small query queue. This ensures that at any given time, only a few large jobs are running and allow for multiple smaller queries to complete.
Queue timeout is configurable with a default of five (5) minutes.
## Reflection Queue Control[​](/admin/workloads/job-queues/)
Dremio supports placing Reflection jobs into two static job queues (Large and Small) under `Admin > Cluster > Queue Control > Reflection Queue Control`.
This ensures that at any given time, only a minimum if large Reflection jobs are running and allow for multiple smaller queries to complete.
Reflection queue timeout is configurable with a default of one (1) day.
## Query Memory Control[​](/admin/workloads/job-queues/)
Maximum memory per query can also be configured per job type under `Admin > Cluster > Queue Control > Query Memory Control`:
## Query Threshold[​](/admin/workloads/job-queues/)
The query threshold is established by analyzing the overall cost for a variety of workloads and setting the threshold based on expected workloads, SLAs, and available cluster resources. The default threshold is 30,000,000 and is a large query threshold or plan cost.
The query threshold can be configured under `Admin > Cluster > Queue Control > Query Thresholds`:
The query cost for a specific job can be found under `Jobs > Profile > Resource Allocation > Query Cost`:
The overall query cost used for placing jobs in small vs. large queues is computed by **summing up`rowcount` value for all operators (each line)** in the physical plan for a given job.
Was this page helpful?
[Previous Managing Job Workloads](/admin/workloads)[Next Job History & Job Details](/admin/workloads/jobs)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Managing Job Workloads](/admin/workloads)[Next Job History & Job Details](/admin/workloads/jobs)
!
