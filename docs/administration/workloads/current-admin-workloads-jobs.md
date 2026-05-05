---
url: /admin/workloads/jobs
title: "Job History &amp; Job Details | Dremio Documentation"
depth: 4
crawled_at: 64771.915222916
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Managing Job Workloads](/admin/workloads)
  * Job History & Job Details

Version: current [26.x]
On this page
# Job History & Job Details
Navigating to the Job History page allows you to view all previously-run and ongoing queries as they are completed by Dremio. The table on the left lists jobs in chronological order, with columns providing minimal details about the job itself. Clicking on an individual row will expand that job on the right-hand side of the screen via the Job Details pane. This section of the screen provides a detailed breakdown of the query and its results.
### Interacting with Jobs[​](/admin/workloads/jobs/#interacting-with-jobs "Direct link to Interacting with Jobs")
The term "job" is used to describe an individual query run using Dremio. Thus this page displays a list of all previously-run jobs for [the previous XX days](/help-support/limits/#execution). The ordering of these jobs may be manipulated by column data in ascending or descending order.
  * To change columns to sort jobs in ascending or descending order, click on the desired column name at the top of the Query Visualizer table. This will change the table's sorting from ascending to descending, or vice versa.
  * To display or hide individual columns on the Query Visualizer, click on the **Columns** button at the top-right corner of the screen next to the search bar. Then select the checkbox to the left of each column name you wish to see or remove. Changes are immediately made to the Visualizer with each selection.
  * To change the order of individual columns, click on the **Columns** button. Then select the desired arrow to the right of the column name to change its order. The arrow pointing up will move the column further to the left on the Visualizer screen. Selecting the arrow pointing down will move the column to the right.
  * To view specific details regarding an individual column for a job, hover your mouse over the desired row and column. This will immediately trigger a hover screen with brief details regarding that job, such as the SQL query used, a list of the datasets queried, or a breakdown of the query's execution process.
  * To launch the Job Details screen for an individual query, click on the desired job row from the Query Visualizer table.


### Query Plan Visualizer[​](/admin/workloads/jobs/#query-plan-visualizer "Direct link to Query Plan Visualizer")
The Query Plan Visualizer offers a graphical representation of the SQL execution tree, effectively enabling users to see all resources used for an individual query, including nodes, Reflections, and individual datasets. Those nodes deemed most expensive, meaning time-intensive, will appear more colorful, whereas the less-used resources will appear dimmed.
To access this resource:
  1. From the Jobs screen, select the desired completed job. This launches the Job Details page.
  2. Click the **SQL** tab at the top of the screen.
  3. Scroll down to the _Dataset Graph_ section. This is where the query plan's visual representation is located.


## Additional Information[​](/admin/workloads/jobs/#additional-information "Direct link to Additional Information")
  * See [Workload Management](/admin/workloads/workload-management) for more information about Query Queues.


Was this page helpful?
[Previous Queue Control](/admin/workloads/job-queues)[Next Queue Routing](/admin/workloads/queue-routing)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Queue Control](/admin/workloads/job-queues)[Next Queue Routing](/admin/workloads/queue-routing)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fadvanced-topics%2Fcustom-arp%2F&_biz_t=1777951092959&_biz_i=Upgrading%20with%20Custom%20Sources%20%7C%20Dremio%20Documentation&_biz_n=1508&rnd=436515&cdn_o=a&_biz_z=1777951092975)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fworkloads%2Fjobs%2F&_biz_t=1777951092975&_biz_i=Job%20History%20%26%20Job%20Details%20%7C%20Dremio%20Documentation&_biz_n=1509&rnd=626636&cdn_o=a&_biz_z=1777951092975)
