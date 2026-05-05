---
url: /data-sources/lakehouse-catalogs/open-catalog-external
title: "Open Catalog (External) | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.232172083
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Open Catalog (External)

Version: current [26.x]
On this page
# Open Catalog (External) Enterprise
The Open Catalog (External) source enables you to connect to Open Catalogs deployed in other Dremio instances. Connectivity to the external Open Catalog is achieved using the Iceberg REST API. Once connectivity is established, users can read from and write to external catalogs. Additionally, user impersonation and vended credentials are enabled by default, providing a consistent governance and security experience across your Dremio deployments.
Key use cases for connecting to external Open Catalogs include:
  * **Cross-cluster data federation** : Query and join data from multiple Dremio deployments as if they were local tables, enabling unified analytics across geographically distributed or organizationally separate clusters.
  * **Data mesh architecture** : Connect domain-specific Dremio clusters (e.g., finance, marketing, operations) while maintaining data ownership boundaries, allowing controlled cross-domain data access and collaboration.
  * **Hybrid cloud analytics** : Access data from on-premises Dremio clusters while running analytics workloads in cloud-based clusters, or vice versa, supporting gradual cloud migration strategies.
  * **Environment promotion workflows** : Connect production analytics clusters to development/staging Dremio instances to validate queries, test data products, or promote curated datasets across environments.
  * **Multi-tenant analytics** : Enable secure data sharing between different business units or customers, each with their own Dremio cluster, while maintaining isolation and access controls.


When connecting to an external Open Catalog:
  * **Query processing** : All local queries run on local engines only. The local Dremio directly reads and writes data from the external catalog's object store but does not delegate processing to the external Dremio cluster. The external Dremio can process queries on its own engines.
  * **User authentication** : With impersonation enabled, the local Dremio passes the current user's identity to the external Dremio for privilege checks. User accounts must exist on both clusters with matching identities. Using a shared identity provider (such as LDAP or OIDC) across both clusters simplifies this requirement.
  * **Network requirements** : The local Dremio needs direct network access to both the external Dremio catalog and the external catalog's object store (such as S3 or ADLS) to read and write data.


## Configure the External Dremio[​](/data-sources/lakehouse-catalogs/open-catalog-external#configure-the-external-dremio "Direct link to Configure the External Dremio")
  1. Log in to the external Dremio as the administrator.
  2. Create a service account that will be used to accept Open Catalog connections.
  3. Create an [Inbound Impersonation policy](/security/rbac/inbound-impersonation) that allows the service user to impersonate the users or groups who will be issuing queries. When creating the impersonation policy, the service account is configured as the `proxy_principal`, and the users or groups submitting data requests are the `target_principals`. The `target_principal` users and groups must match on the local and external Dremio clusters.
Example Inbound Impersonation Policy

```
ALTER SYSTEM SET "exec.impersonation.inbound_policies"='[  
   {  
      proxy_principals:{  
         users:["service-account"]  
      },  
      target_principals:{  
         groups:["external-catalog-users"]  
      }  
   }  
]'  

```

  4. Grant the service account the `USAGE` privilege on each folder and `SELECT` on the catalog:
     * `GRANT USAGE ON CATALOG <external-catalog> TO USER <service-account>`
     * `GRANT USAGE` on each folder in the catalog `TO USER <service-account>`
     * `GRANT SELECT ON CATALOG <external-catalog> TO USER <service-account>`
  5. Grant catalog or dataset permissions to the `target_principal` users or groups. The privileges of the `target_principals` will determine whether a data request from that user is granted.
  6. Log in to the external Dremio as the new service account and generate a [personal access token (PAT)](/security/authentication/personal-access-tokens). This PAT will be used to create connections to the external Dremio.


## Configure the Local Dremio[​](/data-sources/lakehouse-catalogs/open-catalog-external#configure-the-local-dremio "Direct link to Configure the Local Dremio")
On the Datasets page, to the right of **Sources** in the left panel, click ![Add Source icon](https://docs.dremio.com/images/icons/plus.png).
In the Add Data Source dialog, under **Lakehouse Catalogs** , select **Open Catalog (External)**.
### General[​](/data-sources/lakehouse-catalogs/open-catalog-external#general "Direct link to General")
To configure the source connection:
  1. **Name** : Enter a name for the source. The name you enter must be unique in the organization. Also, consider a name that is easy for users to reference. This name cannot be edited once the source is created. The name cannot exceed 255 characters and must contain only the following characters: `0-9`, `A-Z`, `a-z`, underscore `_`, or hyphen `-`.
  2. **Open Catalog Endpoint URL** : Specify the Open Catalog endpoint URL of the target Open Catalog. An example is `http://dremio.example.com:8181/api/catalog`.
  3. **OAuth Token Endpoint** : Specify the OAuth token endpoint of the target Dremio. An example for this endpoint is `http://dremio.example.com:9047/oauth/token`.
  4. **PAT Token** : Specify the PAT created in the target cluster for the `service-account`. This PAT is used to authenticate to the cluster.
  5. **Allow Impersonation** : Enabled by default. This setting directs Dremio to execute queries as the user that submits them, utilizing the inbound impersonation policy created on the external Dremio. If user impersonation is disabled, the source credentials will be used to access the catalog.


### Storage[​](/data-sources/lakehouse-catalogs/open-catalog-external#storage "Direct link to Storage")
  1. Use the **Storage access** field to configure your preferred authentication method. Open Catalog (External) supports two types of credentials for authentication:
     * **Use credential vending (Recommended)** : Credential vending is a security mechanism where the catalog service issues temporary, scoped access credentials to the query engine for accessing table storage. The engine is "vended" a temporary credential just in time for the query.
     * **Use master storage credentials** : Enter the credentials for accessing all storage URIs within this catalog. If the Iceberg tables' data resides in storage locations other than those listed, Dremio will not be able to access the data.
       * **AWS** – Select **AWS** for Amazon S3 and S3-compatible storage. You can refer to the Dremio documentation for connecting to [Amazon S3](/data-sources/object/s3#configuring-amazon-s3-as-a-source), which is also applicable here. When selecting to assume an IAM role, ensure that the [role policy grants access](/data-sources/open-catalog#configure-storage-access) to the bucket or folder specified by the external catalog.
       * **Azure** – Select **Azure** for Azure Blob Storage. You can refer to the Dremio documentation for connecting to [Azure Storage](/data-sources/object/azure-storage#configuring-azure-storage-as-a-source), which is also applicable here.
       * **Google Cloud Storage** – Select **Google** for Google Cloud Storage (GCS). You can refer to the Dremio documentation for connecting to [GCS](/data-sources/object/gcs#configuring-gcs-as-a-source), which is also applicable here.
  2. The **Connection Properties** are the same as the Advanced Options connection properties from the selected object storage provider above. Refer to the documentation links for your chosen provider (S3, Azure, or GCS) for details on available connection properties and their configuration.


### Advanced Options[​](/data-sources/lakehouse-catalogs/open-catalog-external#advanced-options "Direct link to Advanced Options")
#### Cache Options[​](/data-sources/lakehouse-catalogs/open-catalog-external#cache-options "Direct link to Cache Options")
  * **Enable local caching when possible** : Selected by default. Along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.
  * **Max percent of total available cache space to use when possible** : Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter a percentage in the value field or use the arrows to the far right to adjust the percentage.


### Reflection Refresh[​](/data-sources/lakehouse-catalogs/open-catalog-external#reflection-refresh "Direct link to Reflection Refresh")
You can set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed. See the following options.
#### Refresh Settings[​](/data-sources/lakehouse-catalogs/open-catalog-external#refresh-settings "Direct link to Refresh Settings")
  * **Never refresh** : Select to prevent automatic reflection refresh. The default is to refresh automatically.
  * **Refresh every** : How often to refresh reflections, specified in hours, days, or weeks. This option is ignored if **Never refresh** is selected.
  * **Set refresh schedule** : Specify the daily or weekly schedule.


#### Expire Settings[​](/data-sources/lakehouse-catalogs/open-catalog-external#expire-settings "Direct link to Expire Settings")
  * **Never expire** : Select to prevent reflections from expiring. The default is to expire automatically after the time limit below.
  * **Expire after** : The time limit after which reflections expire and are removed from Dremio, specified in hours, days, or weeks. This option is ignored if **Never expire** is selected.


### Metadata[​](/data-sources/lakehouse-catalogs/open-catalog-external#metadata "Direct link to Metadata")
Specifying metadata options is handled with the following settings.
#### Dataset Handling[​](/data-sources/lakehouse-catalogs/open-catalog-external#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if the underlying data is unavailable (default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and then replaced with new sets of files.


#### Metadata Refresh[​](/data-sources/lakehouse-catalogs/open-catalog-external#metadata-refresh "Direct link to Metadata Refresh")
These are the optional **Metadata Refresh** parameters:
  * **Dataset Discovery** :
    * **Fetch every** : The refresh interval for fetching top-level source object names, such as databases and tables. Set the time interval using this parameter. You can choose to set the frequency for fetching object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.
  * **Dataset Details** : The metadata that Dremio needs for query planning, such as information needed for fields, types, shards, statistics, and locality. These are the parameters to fetch the dataset information:
    * **Fetch mode** : You can choose to fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.
    * **Fetch every** : You can choose to set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.
    * **Expire after** : You can choose to set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.


### Privileges[​](/data-sources/lakehouse-catalogs/open-catalog-external#privileges "Direct link to Privileges")
You have the option to grant privileges to specific users or roles. See [Access Control](/security/rbac) for additional information about privileges.
To grant access to a user or role:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an Open Catalog (External)[​](/data-sources/lakehouse-catalogs/open-catalog-external#updating-an-open-catalog-external "Direct link to Updating an Open Catalog \(External\)")
To update an Open Catalog (External) source:
  1. On the Datasets page, under **Sources** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name.
  4. Click **Save**.


## Deleting an Open Catalog (External) Source[​](/data-sources/lakehouse-catalogs/open-catalog-external#deleting-an-open-catalog-external-source "Direct link to Deleting an Open Catalog \(External\) Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Open Catalog (External) source:
  1. On the Datasets page, click **Sources** &gt; **Lakehouse Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Was this page helpful?
[Previous Lakehouse Catalogs](/data-sources/lakehouse-catalogs)[Next AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Lakehouse Catalogs](/data-sources/lakehouse-catalogs)[Next AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Fopen-catalog-external%2F&_biz_t=1777950366803&_biz_i=Open%20Catalog%20\(External\)%20%7C%20Dremio%20Documentation&_biz_n=97&rnd=304117&cdn_o=a&_biz_z=1777950366804)
