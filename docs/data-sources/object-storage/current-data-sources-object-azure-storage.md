---
url: /data-sources/object/azure-storage
title: "Azure Storage | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64000.245432375
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Object Storage](/data-sources/object)
  * Azure Storage

Version: current [26.x]
On this page
# Azure Storage
The Dremio Azure Storage Connector includes support for the following Azure Storage services:
**Azure Blob Storage**
Azure Blob storage is Microsoft's object storage solution for the cloud. Blob storage is optimized for storing massive amounts of unstructured data, such as text or binary data.
**Azure Data Lake Storage Gen2**
Azure Data Lake Storage Gen2 is a set of capabilities dedicated to big data analytics, built on top of Azure Blob storage. Features, such as file system semantics, directory, and file-level security and scale, are combined with the low-cost, tiered storage, and high availability/disaster recovery capabilities of Azure Blob storage.
Soft delete for blobs is not supported for Azure Storage accounts. Soft delete should be disabled to establish a successful connection.
## Configuring Azure Storage as a Source[​](/data-sources/object/azure-storage#configuring-azure-storage-as-a-source "Direct link to Configuring Azure Storage as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Object Storage** , select **Azure Storage**.


### General[​](/data-sources/object/azure-storage#general "Direct link to General")
Under **Name** , enter the name to use for the Azure Storage source. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection[​](/data-sources/object/azure-storage#connection "Direct link to Connection")
  * **Account Name** : Name of the Azure Storage account.
  * **Encrypt connection** : Select to encrypt network traffic over SSL.
  * **Storage Connection Protocol (Driver)** : Select the Azure Storage driver connection protocol you would like to use. The options are WASBS (Legacy) and ABFSS (Recommended). ABFSS is the default based on Azure best practices.


#### Authentication[​](/data-sources/object/azure-storage#authentication "Direct link to Authentication")
Azure Storage authentication options include the following:
  * **Shared access key** : Select the secret store method from the dropdown menu:
    * Dremio: Provide the shared access key in plain text. Dremio stores the key.
    * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
    * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the Azure Storage shared access key, which is available in the AWS web console or using command line tools.
    * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the shared access key secret reference in the required format.
  * **Microsoft Entra ID** :
    * **Application ID** : Specify the Application (Client) ID in Microsoft Entra ID.
    * **OAuth 2.0 Token Endpoint** : Specify the OAuth 2.0 token endpoint for your Azure application.
    * **Application Secret Store** : Select the secret store for the Application Secret from the dropdown menu:
      * Dremio: Provide the Application Secret in plain text. Dremio stores the key.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the Application Secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the application secret reference in the required format.


### Advanced Options[​](/data-sources/object/azure-storage#advanced-options "Direct link to Advanced Options")
  * **Enable partition column inference** : Select if Dremio should use [partition column inference](/developer/data-formats/table#partition-column-inference) to handle partition columns.
  * **Root Path** : Root path for the source. The default is `/`.
  * **Advanced Properties** : Add connection properties, specifying their names and values.
  * **Blob Containers & Filesystem Allowlist** Add the names of containers to include in the source. This setting disables automatic container and filesystem discovery. Dremio limits the available containers and filesystems to those you add to the allowlist.


#### Cache Options[​](/data-sources/object/azure-storage#cache-options "Direct link to Cache Options")
  * **Enable local caching when possible** : Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.
  * **Max percent of total available cache space to use when possible** : Maximum amount of cache space, as a percentage, that a source can use on any single executor node when local caching is enabled The default value is `100`.


### Reflection Refresh[​](/data-sources/object/azure-storage#reflection-refresh "Direct link to Reflection Refresh")
The Reflection refresh options control how often Dremio refreshes Reflections automatically and the time limit after which Reflections expire and are removed.
#### Refresh Policy[​](/data-sources/object/azure-storage#refresh-policy "Direct link to Refresh Policy")
  * **Never refresh** : Select to prevent the automatic refresh of Reflections. The default is to allow automatic refreshes.
  * **Refresh every** : If using automatic refresh, how often to refresh Reflections, specified in minutes, hours, days, or weeks. The default is 1 hour. Ignored if you select _Never refresh_.
  * **Never expire** : Select to prevent the expiration of Reflections. The default is expiration after the specified time limit.
  * **Expire after** : Time limit after which Reflections expire and are removed from Dremio, specified in minutes, hours, days, or weeks. The default is 3 hours. Ignored if you select _Never expire_.


### Metadata[​](/data-sources/object/azure-storage#metadata "Direct link to Metadata")
Metadata settings include options for dataset handling and metadata refresh.
#### Dataset Handling[​](/data-sources/object/azure-storage#dataset-handling "Direct link to Dataset Handling")
  * **Remove dataset definitions if underlying data is unavailable** : Select to automatically remove datasets if their underlying files and folders are removed from Azure Storage or if the folder or source is not accessible. This option is selected by default. If _not_ selected, Dremio does not remove dataset definitions even if their underlying files and folders are removed from Azure Storage, which is useful when files are temporarily deleted and replaced with a new set of files.
  * **Automatically format files into tables when users issue queries** : Select to automatically promote folders to tables using the default options when a user runs a query on the folder data for the first time. This option is not selected by default. For Azure Storage sources that contain CSV files, especially CSV files with non-default formatting, consider leaving this option unselected.


#### Metadata Refresh[​](/data-sources/object/azure-storage#metadata-refresh "Direct link to Metadata Refresh")
Metadata Refresh settings allow you to configure the refresh interval for gathering detailed information about promoted tables, including fields, data types, shards, statistics, and locality. Dremio uses this information during query planning and optimization.
  * **Fetch mode** : The default is **Only Queried Datasets** , which only updates details only for previously queried objects in a source. This option increases query performance because the datasets require less work at query time. Other options are deprecated.
  * **Fetch every** : How often to refresh dataset details, specified in minutes, hours, days, or weeks. The default is 1 hour.
  * **Expire after** : Time limit after which dataset details expire, specified in minutes, hours, days, or weeks. The default is 3 hours.


### Privileges[​](/data-sources/object/azure-storage#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an Azure Storage Source[​](/data-sources/object/azure-storage#updating-an-azure-storage-source "Direct link to Updating an Azure Storage Source")
To update an Azure Storage source:
  1. On the Datasets page, under **Object Storage** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Azure Storage as a Source](/data-sources/object/azure-storage#configuring-azure-storage-as-a-source).
  4. Click **Save**.


## Deleting an Azure Storage Source[​](/data-sources/object/azure-storage#deleting-an-azure-storage-source "Direct link to Deleting an Azure Storage Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Azure Storage source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Object Storage** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Distributed Storage[​](/data-sources/object/azure-storage#distributed-storage "Direct link to Distributed Storage")
Dremio requires object storage to be configured as [distributed storage](/what-is-dremio/architecture#distributed-storage). See the configuration of distributed storage for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes#configuring-the-distributed-storage) or [Dremio standalone clusters](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config#azure-storage) for more information.
## Azure Government[​](/data-sources/object/azure-storage#azure-government "Direct link to Azure Government")
To configure Azure Storage for the Azure Government platform, add one of the following properties to the **Advanced Options** tab under **Advanced Properties** :
  * **Storage V1** : Add the following property and value if the Azure Storage source is of Account Kind Storage V1
Property and value for Storage V1

```
fs.azure.endpoint = blob.core.usgovcloudapi.net  

```

  * **Storage V2** : Add the following property and value if the Azure Storage source is of Account Kind Storage V2
Property and value for Storage V2

```
fs.azure.endpoint = dfs.core.usgovcloudapi.net  

```



## Troubleshooting[​](/data-sources/object/azure-storage#troubleshooting "Direct link to Troubleshooting")
If you see 0 byte files being created with your Iceberg tables in your Azure Storage account, these files do not impact Dremio’s functionality and can be ignored if you cannot update your storage container. If you can update your container, see **Hierarchical Namespace** to prevent the creation of these files.
## For More Information[​](/data-sources/object/azure-storage#for-more-information "Direct link to For More Information")
Was this page helpful?
[Previous Amazon S3](/data-sources/object/s3)[Next Google Cloud Storage (GCS)](/data-sources/object/gcs)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Amazon S3](/data-sources/object/s3)[Next Google Cloud Storage (GCS)](/data-sources/object/gcs)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fobject%2Fazure-storage%2F&_biz_t=1777950320379&_biz_i=Azure%20Storage%20%7C%20Dremio%20Documentation&_biz_n=2&rnd=634655&cdn_o=a&_biz_z=1777950320379)
