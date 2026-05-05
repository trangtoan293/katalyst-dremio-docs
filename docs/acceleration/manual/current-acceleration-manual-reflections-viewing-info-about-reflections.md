---
url: /acceleration/manual-reflections/viewing-info-about-reflections
title: "View Reflection Details | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.186642166
---

  * [Dremio Enterprise Home](/)
  * [Accelerate Queries](/acceleration)
  * [Manually Manage Reflections](/acceleration/manual-reflections)
  * View Reflection Details

Version: current [26.x]
On this page
# View Reflection Details
The Reflections page lists all of the raw and aggregation Reflections that are in a Dremio cluster.
To view this page, follow these steps:
  1. Click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the left navbar.
  2. Select **Reflections** in the left sidebar.


For any particular Reflection, the Reflections page presents information that answers these questions:  
| Question  | Column with the answer  |  
| --- | --- |  
| What is the status of this Reflection?  | [Name](/acceleration/manual-reflections/viewing-info-about-reflections#name)  |  
| Is this a raw or aggregation Reflection?  | [Type](/acceleration/manual-reflections/viewing-info-about-reflections#type)  |  
| Which table or view is this Reflection defined on?  | [Dataset](/acceleration/manual-reflections/viewing-info-about-reflections#dataset)  |  
| How valuable is this Reflection?  | [Reflection Score](/acceleration/manual-reflections/viewing-info-about-reflections#reflection-score)  |  
| How Reflection was created and managed?  | [Mode](/acceleration/manual-reflections/viewing-info-about-reflections#mode)  |  
| How can I see a list of the jobs that created and refreshed this Reflection?  | [Refresh Job History](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-job-history)  |  
| How many times has the query planner chosen this Reflection?  | [Acceleration Count](/acceleration/manual-reflections/viewing-info-about-reflections#acceleration-count)  |  
| How many times has the query planner considered using this Reflection?  | [Considered Count](/acceleration/manual-reflections/viewing-info-about-reflections#considered-count)  |  
| How many times did the query planner match a query to this Reflection?  | [Matched Count](/acceleration/manual-reflections/viewing-info-about-reflections#matched-count)  |  
| How do I find out how effective this Reflection is?  | [Acceleration Count](/acceleration/manual-reflections/viewing-info-about-reflections#acceleration-count)  |  
| When was this Reflection last refreshed?  | [Last Refresh From Table](/acceleration/manual-reflections/viewing-info-about-reflections#last-refresh-from-table)  |  
| Is this Reflection being refreshed now?  | [Refresh Status](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-status)  |  
| What type of refreshes are used for this Reflection?  | [Refresh Method](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-method)  |  
| Are refreshes scheduled for this Reflection, or do they need to be triggered manually?  | [Refresh Status](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-status)  |  
| How much time did the most recent refresh of this Reflection take?  | [Last Refresh Duration](/acceleration/manual-reflections/viewing-info-about-reflections#last-refresh-duration)  |  
| How many records are in this Reflection?  | [Record Count](/acceleration/manual-reflections/viewing-info-about-reflections#record-count)  |  
| How much storage is this Reflection taking up?  | [Current Footprint](/acceleration/manual-reflections/viewing-info-about-reflections#current-footprint)  |  
| When does this Reflection expire?  | [Available Until](/acceleration/manual-reflections/viewing-info-about-reflections#available-until)  |  
## Columns[​](/acceleration/manual-reflections/viewing-info-about-reflections#columns "Direct link to Columns")
### Acceleration Count[​](/acceleration/manual-reflections/viewing-info-about-reflections#acceleration-count "Direct link to Acceleration Count")
Shows the number of times within the last 30 days that the query planner considered using a Reflection defined on a dataset referenced by a query, determined the Reflection could be used to satisfy the query, and chose to use the Reflection to satisfy the query.
If this count is low relative to the numbers in the **Considered Count** and **Matched Count** , the Reflection is not effective in reducing the execution times of queries on the dataset.
### Available Until[​](/acceleration/manual-reflections/viewing-info-about-reflections#available-until "Direct link to Available Until")
Shows the date and time when this Reflection expires, based on the refresh policy of the queried dataset.
If a Reflection is set to expire soon and you want to continue using it, you can take either of these actions:
  * Change the expiration setting on the table which the Reflection is either directly or indirectly defined on. A Reflection is indirectly defined on a table when it is defined on a view that is derived from that table. When you change the setting by using this method, the change goes into effect after the next refresh.
  * Change the expiration setting on the data source where the table is located.


For the steps, see [Setting the Expiration Policy for Reflections](/acceleration/manual-reflections#setting-the-expiration-policy-for-reflections).
### Mode[​](/acceleration/manual-reflections/viewing-info-about-reflections#mode "Direct link to Mode")
Shows how Reflection was created and managed.
  * **autonomous** : Created and managed by Dremio
  * **manual** : Created and managed by user


### Considered Count[​](/acceleration/manual-reflections/viewing-info-about-reflections#considered-count "Direct link to Considered Count")
Shows the number of queries, within the last 30 days, that referenced the dataset that a Reflection is defined on. Whenever a query references a dataset on which a Reflection is defined, the query planner considers whether to use the Reflection to help satisfy the query.
If the query planner determines that the Reflection can do that (that the Reflection matches the query), the query planner compares the Reflection to any others that might also be defined on the same dataset.
If the query planner does not determine this, it ignores the Reflection.
Reflections with high considered counts and no match counts are contributing to high logical planning times. Consider deleting them.
Reflections with a considered count of 0 should be removed. They are merely taking up storage and, during refreshes, resources on compute engines.
### Current Footprint[​](/acceleration/manual-reflections/viewing-info-about-reflections#current-footprint "Direct link to Current Footprint")
Shows the current size, in kilobytes, of a Reflection.
### Dataset[​](/acceleration/manual-reflections/viewing-info-about-reflections#dataset "Direct link to Dataset")
Shows the name of the table or view that a Reflection is defined on.
### Last Refresh Duration[​](/acceleration/manual-reflections/viewing-info-about-reflections#last-refresh-duration "Direct link to Last Refresh Duration")
Shows the length of time required for the most recent refresh of a Reflection.
### Last Refresh From Table[​](/acceleration/manual-reflections/viewing-info-about-reflections#last-refresh-from-table "Direct link to Last Refresh From Table")
Shows the date and time that the Reflection data was last refreshed. If the refresh is running, failing, or disabled, the value is `12/31/1969 23:59:59`.
### Matched Count[​](/acceleration/manual-reflections/viewing-info-about-reflections#matched-count "Direct link to Matched Count")
Shows the number of times, within the last 30 days, that the query planner both considered a Reflection for satisfying a query and determined that the Reflection would in fact satisfy the query. However, the query planner might have decided to use a different Reflection that also matched the query. For example, a different query plan that did not include the Reflection might have had a lower cost.
This number does not show how many times the query planner used the Reflection to satisfy the query. For that number, see [Acceleration Count](/acceleration/manual-reflections/viewing-info-about-reflections#acceleration-count).
If the matched count is high and the accelerating count is low, the query planner is more often deciding to use a different Reflection that also matches a query. In this case, consider deleting the Reflection.
### Name[​](/acceleration/manual-reflections/viewing-info-about-reflections#name "Direct link to Name")
Shows the name of the Reflection and its status. The tooltip on the icon represents a combination of the status of the Reflection (which you can filter on through the values in the **Acceleration Status** field above the list) and the value in the **Refresh Status** column.
### Record Count[​](/acceleration/manual-reflections/viewing-info-about-reflections#record-count "Direct link to Record Count")
Shows the number of records in the Reflection.
### Reflection Score[​](/acceleration/manual-reflections/viewing-info-about-reflections#reflection-score "Direct link to Reflection Score")
Shows the score for a Reflection on a scale of 0 (worst) to 100 (best). The score indicates the value that the Reflection provides to your workloads based on the jobs that have been executed in the last 7 days. Reflection scores are calculated once each day. Factors considered in the score include the number of jobs accelerated by the Reflection and the expected improvement in query run times due to the Reflection.
To help you interpret the scores, the scores have the following labels:
  * **Good** : The score is more than 75.
  * **Fair** : The score is 25 to 75.
  * **Poor** : The score is less than 25.
  * **New** : The score is blank because the Reflection was created within the past 24 hours.


If a Reflection's score is listed as **-** , the score needs to be recalculated due to an error or an upgraded instance.
### Refresh Job History[​](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-job-history "Direct link to Refresh Job History")
Opens a list of all of the jobs that created and refreshed a Reflection.
### Refresh Method[​](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-method "Direct link to Refresh Method")
Shows which type of refresh was last used for a Reflection.
  * **Full** : All of the data in the Reflection was replaced. The new data is based on the current data in the underlying dataset.
  * **Incremental** :
    * For Reflections defined on Apache Iceberg tables: Either snapshot-based incremental refresh was used (if the changes were appends only) or partition-based incremental refresh was used (if the changes included DML operations).
    * For Reflections defined on Delta Lake tables: This value does not appear. Only full refreshes are supported for these Reflections.
    * For Reflections defined on all other tables: Data added to the underlying dataset since the last refresh of the Reflection was appended to the existing data in the Reflection.
  * **None** : Incremental refreshes were selected in the settings for the table. However, Dremio has not confirmed that it is possible to refresh the Reflection incrementally. Applies only to Reflections that are not defined on Iceberg or Delta Lake tables.


For more information, see [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections).
### Refresh Status[​](/acceleration/manual-reflections/viewing-info-about-reflections#refresh-status "Direct link to Refresh Status")
Shows one of these values:
  * **Manual** : Refreshes are not run on a schedule, but must be triggered manually. See [Manually Triggering a Refresh](/acceleration/manual-reflections/refreshing-reflections#manually-triggering-a-refresh).
  * **Pending** : If the Reflection depends on other Reflections, the refresh will begin after the refreshes of the other Reflections are finished.
  * **Running** : The Reflection is currently being refreshed.
  * **Scheduled** : Refreshes run on a schedule, but a refresh is not currently running.
  * **Auto** : All of the Reflection’s underlying tables are in Iceberg format, and the Reflection automatically refreshes when new snapshots are created after an update to an underlying table, but a refresh is not currently running.
  * **Failed** : Multiple attempts to refresh a Reflection have failed. You must disable and enable the Reflection to rebuild it and continue using it. Reflections in this state will not be considered to accelerate queries.


For more information, see [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections).
### Total Footprint[​](/acceleration/manual-reflections/viewing-info-about-reflections#total-footprint "Direct link to Total Footprint")
Shows the current size, in kilobytes, of all of the existing materializations of the Reflection. More than one materialization of a Reflection can exist at the same time, so that refreshes do not interrupt running queries that are being satisfied by the Reflection.
### Type[​](/acceleration/manual-reflections/viewing-info-about-reflections#type "Direct link to Type")
Shows whether the Reflection is a raw or aggregation Reflection.
Was this page helpful?
[Previous Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections)[Next Use Reflections in Nessie Source Branches](/acceleration/manual-reflections/using-nessie-branches-with-reflections)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections)[Next Use Reflections in Nessie Source Branches](/acceleration/manual-reflections/using-nessie-branches-with-reflections)
