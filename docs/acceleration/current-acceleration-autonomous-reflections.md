---
url: /acceleration/autonomous-reflections
slug: /acceleration/autonomous-reflections
title: "Autonomous Reflections | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64018.884059791
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/acceleration/autonomous-reflections)
  * [current [26.x]](/acceleration/autonomous-reflections)
  * 25.x


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](/)
  * [Get Started with Dremio](/get-started)
  * [What is Dremio?](/what-is-dremio)
  * [Deploy Dremio](/deploy-dremio)
  * [Manage Sources](/data-sources)
  * [Load Data](/load-data)
  * [Build Data Products](/data-products)
  * [Connect Client Applications](/client-applications)
  * [Accelerate Queries](/acceleration)
    * Autonomous Reflections
    * [Manually Manage Reflections](/acceleration/manual-reflections)
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
  * [Reference](/reference)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Accelerate Queries](/acceleration)
  * Autonomous Reflections

Version: current [26.x]
On this page
# Autonomous Reflections Enterprise
Dremio automatically creates and drops [Reflections](/acceleration) based on query patterns to optimize performance for queries on Iceberg tables, Parquet tables, and views based on them. These Reflections refresh in real time when Iceberg tables change or when Parquet table metadata is updated, turning Reflection management into an automated process.
Autonomous Reflections refresh automatically when source data changes on:
  * **Iceberg tables** : when the table is modified through Dremio or other engines. Dremio polls tables every 10 seconds.
  * **Parquet datasets** : when metadata is updated in Dremio.


## Enable Autonomous Reflections​
To enable Autonomous Reflections, follow these steps:
  1. Navigate to **Settings**.
  2. Go to the **Preferences** tab.
  3. Toggle the **Autonomous Reflections** switch to enable the feature.


Once enabled, Dremio will automatically create and manage Reflections based on query workload analysis from the last seven days.
## Set the Refresh Engine and Routing Rule for Autonomous Reflections​
Dremio recommends configuring a dedicated refresh engine with at least two nodes to isolate refresh jobs associated with Autonomous Reflections. This isolation ensures that resource-intensive refresh jobs do not impact user workloads, preserving both query performance and refresh efficiency.
When you enable Autonomous Reflections in Dremio or Kubernetes deployments, you will be prompted to specify a refresh engine, and Dremio automatically creates routing rules to direct refresh jobs to the selected engine. For other deployments, you must manually create an engine or queue, depending on the deployment type, and define a routing rule `(query_type() = 'Autonomous Reflections')` at the top of the list to ensure refresh jobs for Autonomous Reflections are prioritized.
To replace the current refresh engine or queue for Autonomous Reflections, move the existing routing rule `(query_type() = 'Autonomous Reflections')` from the current engine to a new engine and, at the top of the list to set the highest priority. This ensures that refresh jobs are properly redirected to the newly designated engine.
If the assigned refresh engine reaches its capacity, Dremio Autonomous Reflections will pause. Users are then notified through the Dremio console, prompting them to scale up the refresh engine if necessary.
## Behavior​
Dremio creates up to 100 Reflections, with a maximum of 10 per day. The actual number of Reflections depends on query patterns, as well as the configuration and utilization of the Dremio engine assigned to execute Reflection refreshes.
When Dremio determines that a Reflection has a low score, it is not immediately dropped. Instead:
  * The Reflection is disabled for 7 days before it is dropped.
  * Admins can then view disabled Reflections through the Autonomous Reflection History Log.


For [Aggregation Reflections](/acceleration), Dremio creates system-managed views that cannot be modified or referenced by other views. Admin users can drop these views, but doing also deletes the associated Reflection.
If you disable the Autonomous Reflections feature, existing Reflections will continue to function normally, but Dremio will not add new Reflections or drop ineffective ones.
## Limits​
  * Autonomous Reflections are only used when fully synchronized with their source data to ensure up-to-date query results.
  * Autonomous Reflections cannot be modified and can only be dropped by Admins. When a Reflection is manually dropped, Dremio will not recreate it for the next 90 days.


## View History Log for Autonomous Reflections​
To view the history of changes to Autonomous Reflections in the last 30 days, follow these steps:
  1. Navigate to **Settings**.
  2. Select **Reflections** and click **History Log**.


Was this page helpful?
[Previous Accelerate Queries](/acceleration)[Next Manually Manage Reflections](/acceleration/manual-reflections)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Accelerate Queries](/acceleration)[Next Manually Manage Reflections](/acceleration/manual-reflections)
  * Enable Autonomous Reflections
  * Set the Refresh Engine and Routing Rule for Autonomous Reflections
  * Behavior
  * Limits
  * View History Log for Autonomous Reflections


!
