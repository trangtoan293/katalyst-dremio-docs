---
url: /data-sources/lakehouse-catalogs/onelake
title: "Microsoft OneLake | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.204034916
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Microsoft OneLake

Version: current [26.x]
On this page
# Microsoft OneLake Enterprise
Dremio creates connections to Microsoft OneLake using its Iceberg REST Catalog connector.
## Configure a Microsoft OneLake Source[​](/data-sources/lakehouse-catalogs/onelake#configure-a-microsoft-onelake-source "Direct link to Configure a Microsoft OneLake Source")
To add a Microsoft OneLake source connection:
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Source dialog, under **Lakehouse Catalogs** , select **Iceberg REST Catalog Source**.


### General[​](/data-sources/lakehouse-catalogs/onelake#general "Direct link to General")
To configure the source connection:
  1. For **Name** , enter a name for the source. The name you enter must be unique in the organization. Also, consider a name that is easy for users to reference. This name cannot be edited once the source is created. The name cannot exceed 255 characters and must contain only the following characters: 0-9, A-Z, a-z, underscore (_), or hyphen (-).
  2. For **Endpoint URI** , specify the catalog service URI as `https://onelake.table.fabric.microsoft.com/iceberg`.
  3. Clear **Use vended credentials**.
  4. (Optional) For **Allowed Namespaces** , add each namespace and check the option if you want to include their entire subtrees. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces.


### Advanced Options[​](/data-sources/lakehouse-catalogs/onelake#advanced-options "Direct link to Advanced Options")
Replace the placeholders inside `<...>` with your respective values. For example, a warehouse value could be `icy/icelake.Lakehouse`. The `fs.*` properties are used to establish connections to the storage underlying your catalog in OneLake.
  1. Add the following **Catalog Properties** with their associated values.
     * `rest.auth.type`: `oauth2`
     * `oauth2-server-uri`: `https://login.microsoftonline.com/`tenant_id`/oauth2/v2.0/token`
     * `scope`: `https://storage.azure.com/.default`
     * `warehouse`: ``catalog``
     * `fs.azure.endpoint`: `dfs.fabric.microsoft.com`
     * `fs.azure.account.auth.type`: `OAuth`
     * `fs.azure.account.oauth2.client.endpoint`: `https://login.microsoftonline.com/`tenant_id`/oauth2/v2.0/token`
     * `fs.azure.account.oauth2.client.id`: ``oauth_client_id``
  2. Add the following **Catalog Credentials** with their associated values:
     * `fs.azure.account.oauth2.client.secret`: ``oauth_client_secret``
     * `credential`: `<oauth_client_id:oauth_client_secret>`
  3. Under **Cache Options** , review the following table and edit the options to meet your needs.
     * **Enable local caching when possible** – Selected by default. Along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.
     * **Max percent of total available cache space to use when possible** – Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter a percentage in the value field or use the arrows to the far right to adjust the percentage.


### Reflection Refresh[​](/data-sources/lakehouse-catalogs/onelake#reflection-refresh "Direct link to Reflection Refresh")
You can set the policy that controls how often reflections are scheduled to be refreshed automatically, as well as the time limit after which reflections expire and are removed. See the following options:  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic reflection refresh. The default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh reflections, specified in hours, days, or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Set refresh schedule**  | Specify the daily or weekly schedule.  |  
| **Never expire**  | Select to prevent reflections from expiring. The default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which reflections expire and are removed from Dremio, specified in hours, days, or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata[​](/data-sources/lakehouse-catalogs/onelake#metadata "Direct link to Metadata")
Metadata options are configured using the following settings.
#### Dataset Handling[​](/data-sources/lakehouse-catalogs/onelake#dataset-handling "Direct link to Dataset Handling")
  * **Remove dataset definitions if underlying data is unavailable** (default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/lakehouse-catalogs/onelake#metadata-refresh "Direct link to Metadata Refresh")
These are the optional **Metadata Refresh** parameters:
  * **Dataset Discovery** : The refresh interval for fetching top-level source object names such as databases and tables. Set the time interval using this parameter.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch every**  | You can set the frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.  |  
  * **Dataset Details** : The metadata that Dremio needs for query planning, such as information needed for fields, types, shards, statistics, and locality. These are the parameters to fetch the dataset information.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch mode**  | You can fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.  |  
| **Fetch every**  | You can set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.  |  
| **Expire after**  | You can set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.  |  


### Privileges[​](/data-sources/lakehouse-catalogs/onelake#privileges "Direct link to Privileges")
You have the option to grant privileges to specific users or roles. See [Access Control](/security/rbac) for additional information about privileges.
To grant access to a user or role:
  1. For **Privileges** , enter the user name or role name to which you want to grant access and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Update a Microsoft OneLake Source[​](/data-sources/lakehouse-catalogs/onelake#update-a-microsoft-onelake-source "Direct link to Update a Microsoft OneLake Source")
To update a Microsoft OneLake source connection:
  1. On the Datasets page, under **Lakehouse Catalogs** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the Source Settings dialog, edit the settings you want to update. Dremio does not support updating the source name.
  4. Click **Save**.


## Delete a Microsoft OneLake Source[​](/data-sources/lakehouse-catalogs/onelake#delete-a-microsoft-onelake-source "Direct link to Delete a Microsoft OneLake Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Microsoft OneLake source:
  1. On the Datasets page, click **Sources** &gt; **Lakehouse Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog)[Next Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog)[Next Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Fonelake%2F&_biz_t=1777950367390&_biz_i=Microsoft%20OneLake%20%7C%20Dremio%20Documentation&_biz_n=100&rnd=746548&cdn_o=a&_biz_z=1777950367391)
