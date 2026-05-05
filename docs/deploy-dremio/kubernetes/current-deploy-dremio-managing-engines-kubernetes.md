---
url: /deploy-dremio/managing-engines-kubernetes
slug: /deploy-dremio/managing-engines-kubernetes
title: "Managing Engines in Kubernetes &lt;Chip&gt;Enterprise&lt;/Chip&gt; | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64053.1206785
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * Managing Engines

Version: current [26.x]
On this page
# Managing Engines in Kubernetes Enterprise
This feature is for Enterprise Edition only. For Community Edition, see [Configuration of Classic Engines](/deploy-dremio/configuring-kubernetes).
Dremio supports the ability to provision multiple separate execution engines in Kubernetes from a Dremio main coordinator node, and automatically start and stop based on workload requirements at runtime. This provides several benefits, including:
  * Creating a new engine doesn't require restarting Dremio, which enables administrators to achieve workload isolation efficiently.
  * When creating a new engine, you can use Kubernetes metadata to label engines to keep track of resources.
  * Right-size execution resources for each distinct workload, instead of implementing a one-size-fits-all model.
  * Easily experiment with different execution resource sizes at any scale.


To manage your engines, open the Engines page as follows:
  1. Open your Dremio console.
  2. Click ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) in the side navigation bar to open the Settings sidebar.
  3. Select **Engines**.

![Engines page under Project Settings listing all engines.](https://docs.dremio.com/images/settings/engine/settings-engines.png)
## Monitoring Engines​
You can monitor the status and properties of your engines on the Engines page.
![Engines page under Project Settings showing all the current engines and their statuses.](https://docs.dremio.com/images/settings/engine/settings-engines-monitoring.png)
Each engine has the following information available:
  * **Name** - The name of the engine, which you can click to see its details. See the section about Viewing Engine Details.
  * **Size** - The size configured for the engine.
  * **Status** - The engine status. For more information, see the section in this topic about Engine Statuses.
  * **Auto start/stop** - Whether the engine has auto start/stop enabled for autoscaling.
  * **Idle period** - The idle time to auto stop when the engine has **Auto start/stop** enabled.
  * **Queues** - Query queues routed to the engine.
  * **Labels** - Labels associated with the engine.


## Performing Actions on Engines​
While monitoring engines, you have actions you can perform on each engine through the icons displayed on the right-hand side when hovering over the engine row.
![Engines page showing the icons with the actions for each engine.](https://docs.dremio.com/images/settings/engine/settings-engines-actions.png)
### Stopping/Starting an Engine​
You can click ![The stop engine icon](https://docs.dremio.com/images/icons/engine-stop.png)/![The start engine icon](https://docs.dremio.com/images/icons/engine-start.png) to stop/start an engine manually at any time. Stopping an engine will cause running queries to fail while new queries will remain queued, which can also fail by timeout if the engine isn't started. To prevent query failures, reroute queries to another engine, and stop the engine only when no queries are running or queued for the engine.
You can enable **autoscaling on an engine** to make it stop automatically after an idle time without queries and start again automatically when new queries are issued, all without any human intervention.
Autoscaling is configured when you add an engine or edit an engine:
#### Stopping All Engines​
Some complex operations, like upgrading or uninstalling Dremio, require all engines to be stopped beforehand. You can stop engines manually one by one as described above, or automate the procedure using the [Engine Management API](/reference/api/engine-management) to stop all engines. Expand the sample below of a bash script executing the necessary endpoints to stop all engines.
Sample bash script to stop all engines

```
#!/bin/bash  
# Check if the bearer token is provided  
if [ -z "$1" ]; then  
echo "Error: Bearer token is required."  
exit 1  
fi  
BEARER_TOKEN=$1  
BASE_URL=${2:-https://localhost:9047}  
# Make an HTTP GET request to retrieve engine IDs  
RESPONSE=$(curl -k -s -H "Authorization: Bearer $BEARER_TOKEN" "$BASE_URL/api/v3/engines")  
# Check if the response contains the "id" field  
if ! echo "$RESPONSE" | grep -q '"id"'; then  
echo "Error: No 'id' field found in the response."  
exit 1  
fi  
# Extract IDs from the response  
IDS=$(echo "$RESPONSE" | jq -r '.data[] | .id')  
# Loop through each ID and make an HTTP PUT request  
for ID in $IDS; do  
RESPONSE=$(curl -k -s -o /dev/null -w "%{http_code}" -X PUT -H "Authorization: Bearer $BEARER_TOKEN" "$BASE_URL/api/v3/engines/$ID/stop")  
if [ "$RESPONSE" -eq 200 ]; then  
    echo "Successfully stopped engine with ID: $ID"  
else  
    echo "Failed to stop the engine with ID: $ID, HTTP status code: $RESPONSE"  
fi  
done  
echo "All engines processed."  

```

### Editing the Engine Settings​
You can click ![The edit engine icon](https://docs.dremio.com/images/icons/engine-edit.png) to edit the engine settings. After saving the new settings, the engine may restart, causing running queries to fail and new queries to be queued.
![Edit engine showing the general settings.](https://docs.dremio.com/images/settings/engine/settings-engine-edit.png)
The name of the engine must follow these rules:
  * Must start with a lowercase alphanumeric character (`[a-z0-9]`).
  * Must end with a lowercase alphanumeric character (`[a-z0-9]`).
  * Must contain only lowercase alphanumeric characters or a hyphen (`[\-a-z0-9]`).
  * Must be under 30 characters in length.
  * Must be unique and not previously used for any existing or deleted engines.


### Deleting an Engine​
You can click ![The delete engine icon](https://docs.dremio.com/images/icons/engine-delete.png) to delete an engine. Deleting an engine will cause running, queued, and new queries to fail. To prevent query failures, you can reroute queries to another engine, and only delete when no more queries are running or queued for the engine.
## Viewing Engine Details​
While monitoring engines, if you need to know more details about engines, click the engine's name to view all the information about it.
![Engine details page showing all the information about the engine.](https://docs.dremio.com/images/settings/engine/settings-engine-details.png)
On this page, you will also find a set of buttons at the top to delete the engine, stop/start the engine, and edit the engine settings.
## Sizes​
Dremio provides nine engine T-shirt sizes, each with two CPU options: 14 or 30. From XSmall and larger, the size setting determines the number of executors in an engine. The remaining 2XSmall size runs a single executor at half scale. For consumption-based billing, DCUs and CPUs have a one-to-one relationship; therefore, the total number of CPUs across an engine equals the DCUs. See the table below as a guide:  
| Engine Size  | Executors  | Memory per Executor  | DCUs - 14 CPU  | DCUs - 30 CPU  |  
| --- | --- | --- | --- | --- |  
| 2XSmall  | 1  | 56 GB  | 7  | 15  |  
| XSmall  | 1  | 120 GB  | 14  | 30  |  
| Small  | 2  | 120 GB  | 28  | 60  |  
| Medium  | 4  | 120 GB  | 56  | 120  |  
| Large  | 8  | 120 GB  | 112  | 240  |  
| XLarge  | 12  | 120 GB  | 168  | 360  |  
| 2XLarge  | 16  | 120 GB  | 224  | 480  |  
| 3XLarge  | 24  | 120 GB  | 336  | 720  |  
| 4XLarge  | 32  | 120 GB  | 448  | 960  |  
## Adding an Engine​
You can create more engines by clicking **Add Engine** at the top-right corner of the Engines page.
![The general settings to add a new engine.](https://docs.dremio.com/images/settings/engine/settings-new-engine.png)
In the New engine dialog, do the following:
  1. Fill out the **General** section:
    1. **Name** - Type the name of the engine. Use a meaningful name that helps you to identify the engine better. For example, `low-cost-query`.
The name of the engine must follow these rules:
       * Must start with a lowercase alphanumeric character (`[a-z0-9]`).
       * Must end with a lowercase alphanumeric character (`[a-z0-9]`).
       * Must contain only lowercase alphanumeric characters or a hyphen (`[\-a-z0-9]`).
       * Must be under 30 characters in length.
       * Must be unique and not previously used for any existing or deleted engines.
    2. **CPU** - Select the number of CPUs per executor pod.
    3. **Size** - Select the size of the engine.
    4. **Automatically start/stop** - If checked, the engine automatically stops after the specified idle time and automatically starts when new queries are issued to the engine. If not checked, the engine only stops and starts through manual intervention. By default, this setting is checked and the engine stops automatically after `15 min` of idle time. For more information, see the section Stopping/Starting an Engine.
    5. (Optional) Expand **Advanced Options** for further settings.
![The advanced options to add a new engine.](https://docs.dremio.com/images/settings/engine/settings-new-engine-advanced-options.png)
Fill out the advanced options as follows:
      1. **Cloud cache volume (c3)** - Specify the amount of local storage for caching data.
      2. **Spill volume** - Specify the disk size allocated for temporary storage when operations exceed memory limits.
  2. (Optional) Select **Kubernetes pod metadata** to define pod metadata for the engine, such as labels, annotations, node selectors, and tolerations. Define those values with care and foreknowledge of expected entries because any misconfiguration may result in Kubernetes being unable to start the executors that make up the engine.
![The metadata to add an engine.](https://docs.dremio.com/images/settings/engine/settings-new-engine-pod-metadata.png)
Fill out the pod's metadata with:
    1. **Labels** - Add labels as key/value pairs to identify and organize pods. Use them to group, filter, and select subsets of resources efficiently.
The engine label must follow these rules:
       * Must start with an alphanumeric character ([a-z0-9]).
       * Must end with an alphanumeric character ([a-z0-9]).
       * Must contain only lowercase alphanumeric characters, a hyphen, or a underscore ([-_a-z0-9]).
       * The maximum length is 63 characters.
    2. **Annotations** - Add annotations as key/value pairs to store non-identifying metadata, such as build information or pointers to logging services. Unlike labels, they're not used for selection or grouping.
The engine annotation must follow these rules:
       * Must be UTF-8 encoded and can include any valid UTF-8 character.
       * Can be in plain text, JSON, or any other UTF-8 compatible format.
       * The maximum size is 256KB.
       * The maximum size of all engine annotations is 1MB.
    3. **Node selectors** - Add node selectors as key/value pairs for node-specific constraints to schedule pods on nodes matching specified labels. Use this to target nodes with specific configurations or roles.
    4. **Tolerations** - Add tolerations to allow pods to be scheduled on nodes with matching taints, but they don’t restrict scheduling to only those nodes; the pod can still land on a node without the taint.
  3. Click **Add** to add the engine.


The newly added engine will be displayed in the listed engines.
![Engines page showing the current engines, which now includes the newly added engine.](https://docs.dremio.com/images/settings/engine/settings-new-engine-added.png)
## Engine Statuses​
The following table describes each engine status:  
| Status  | Icon  | Description  |  
| --- | --- | --- |  
| Starting  | ![The starting engine icon](https://docs.dremio.com/images/icons/engine-starting.png)  | The engine is starting. This is the initial state of an engine after being created. New queries are queued to be processed.  |  
| Running  | ![The running engine icon](https://docs.dremio.com/images/icons/engine-running.png)  | The engine is running. New queries are queued and processed.  |  
| Stopping  | ![The stopping engine icon](https://docs.dremio.com/images/icons/engine-stopping.png)  | The engine is stopping. Running queries will fail. New queries will remain queued, which can also fail by timeout if the engine isn't started.  |  
| Stopped  | ![The stopped engine icon](https://docs.dremio.com/images/icons/engine-stopped.png)  | The engine is stopped. New queries will remain queued, which can fail by timeout if the engine isn't started.  |  
| Recovering  | ![The recovering engine icon](https://docs.dremio.com/images/icons/engine-recovering.png)  | The engine is recovering. New queries will remain queued, which can fail by timeout if the engine doesn't recover.  |  
| Failed  | ![The failed engine icon](https://docs.dremio.com/images/icons/engine-failed.png)  | The engine failed. New queries will remain queued, which can fail by timeout if the engine doesn't start.  |  
## Related Topics​
  * [Engine Management API](/reference/api/engine-management) - The API to manage your engines using REST API calls.
  * [sys.engines](/reference/sql/system-tables/engines) - The system table to query for information about your engines.
  * [Audit Logs](/security/auditing) - Audit logs for your engines.


Was this page helpful?
[Previous Configuring Your Values](/deploy-dremio/configuring-kubernetes)[Next Other Options](/deploy-dremio/other-options)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Configuring Your Values](/deploy-dremio/configuring-kubernetes)[Next Other Options](/deploy-dremio/other-options)
!
