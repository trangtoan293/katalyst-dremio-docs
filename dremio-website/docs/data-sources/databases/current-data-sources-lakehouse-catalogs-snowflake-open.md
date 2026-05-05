---
url: /data-sources/lakehouse-catalogs/snowflake-open
title: "Snowflake Open Catalog | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.302019958
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Snowflake Open Catalog

Version: current [26.x]
On this page
# Snowflake Open Catalog Enterprise
Dremio supports Snowflake Open Catalog as an Iceberg catalog source. With this source connector, you can connect and read from internal and external Snowflake Open Catalogs and write to internal Snowflake Open Catalogs.
## Prerequisites[​](/data-sources/lakehouse-catalogs/snowflake-open#prerequisites "Direct link to Prerequisites")
You will need the **Endpoint URI** (catalog service URI), **Client ID** , and **Client Secret** from the Snowflake setup. For a walkthrough of the Snowflake setup, refer to 
## Configuring Snowflake Open Catalog as a Source[​](/data-sources/lakehouse-catalogs/snowflake-open#configuring-snowflake-open-catalog-as-a-source "Direct link to Configuring Snowflake Open Catalog as a Source")
To add a Snowflake Open Catalog source:
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Lakehouse Catalogs** , select **Snowflake Open Catalog**.
The New Snowflake Open Catalog dialog box appears, which contains the following tabs:
     * **General** : Create a name for your Snowflake Open Catalog source, specify the endpoint URI and Snowflake Open Catalog, and set the authentication.
     * **Advanced Options** : Use catalog properties and credentials to set up storage authentication and authorization.
     * **Reflection Refresh** : (Optional) Set a policy to control how often Reflections are refreshed and expired.
     * **Metadata** : (Optional) Specify dataset handling and metadata refresh.
     * **Privileges** : (Optional) Add privileges for users or roles.
Refer to the following sections for guidance on how to edit each tab.


### General[​](/data-sources/lakehouse-catalogs/snowflake-open#general "Direct link to General")
To configure the source connection:
  1. For **Name** , enter a name for the source.
The name you enter must be unique in the organization. Also, consider a name that is easy for users to reference. This name cannot be edited once the source is created. The name cannot exceed 255 characters and must contain only the following characters: 0-9, A-Z, a-z, underscore(_), or hyphen (-)
  2. Enter the name of the Snowflake Open Catalog.
  3. For **Endpoint URI** , specify the catalog service URI.
  4. In the Authentication section, use the **Client ID** and **Client Secret** created during the 
  5. By default, `Use vended credentials` is on. This allows Dremio to connect to the catalog and receive temporary credentials to the underlying storage location. If this is enabled, there is no need to add the storage authentication in Advanced Options.
  6. (Optional) For **Allowed Namespaces** , add each namespace and check the option if you want to include their whole subtrees. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces.


### Advanced Options[​](/data-sources/lakehouse-catalogs/snowflake-open#advanced-options "Direct link to Advanced Options")
To set the advanced options:
  1. (Optional) For **Catalog Properties** and **Catalog Credentials** , you can manually provide the storage authentication if you choose to not use vended credentials.
Dremio supports Amazon S3, Azure Storage, and Google Cloud Storage (GCS) as object storage services. For acceptable storage authentication configurations, see the following catalog properties and credentials for each service option.
**Amazon S3 Access Key**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `fs.s3a.aws.credentials.provider`  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  | Required value for a Snowflake Open Catalog source  |  
| credential  | `fs.s3a.access.key`  | ``your_access_key``  | AWS access key ID used by S3A file system  |  
| credential  | `fs.s3a.secret.key`  | ``your_secret_key``  | AWS secret key used by S3A file system  |  
**Amazon S3 Assumed Role**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `fs.s3a.assumed.role.arn`  | `arn:aws:iam::*******:role/OrganizationAccountAccessRole`  | AWS ARN for the role to be assumed  |  
| property  | `fs.s3a.aws.credentials.provider`  | `com.dremio.plugins.s3.store.STSCredentialProviderV1`  | Required value for a Snowflake Open Catalog source  |  
| property  | `fs.s3a.assumed.role.credentials.provider`  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  | Use only if the credential provider is `AssumedRoleCredentialProvider`; lists credential providers to authenticate with the STS endpoint and retrieve short-lived role credentials  |  
| credential  | `fs.s3a.access.key`  | ``your_access_key``  | AWS access key ID used by S3A file system  |  
| credential  | `fs.s3a.secret.key`  | ``your_secret_key``  | AWS secret key used by S3A file system  |  
**Azure Storage with Microsoft Entra ID**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `fs.azure.account.auth.type`  | OAuth  |   |  
| property  | `fs.azure.account.oauth2.client.id`  | ``your_client_ID``  | Client ID from App Registration within Azure Portal  |  
| property  | `fs.azure.account.oauth2.client.endpoint`  | `https://login.microsoftonline.com/<ENTRA ID>/oauth2/token`  | Microsoft Entra ID from Azure Portal  |  
| credential  | `fs.azure.account.oauth2.client.secret`  | ``your_client_secret``  | Client secret from App Registration within Azure Portal  |  
**Azure Storage Shared Key**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| credential  | `fs.azure.account.key`  | ``your_account_key``  | Storage account key  |  
**Google Cloud Storage (GCS) Using Default Credentials**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `dremio.gcs.use_keyfile`  | false  | Required value for a Snowflake Open Catalog source  |  
**Google Cloud Storage (GCS) Using KeyFile**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `dremio.gcs.clientId`  | ``your_client_ID``  | Client ID from GCS  |  
| property  | `dremio.gcs.projectId`  | ``your_project_ID``  | Project ID from GCS  |  
| property  | `dremio.gcs.clientEmail`  | ``your_client_email``  | Client email from GCS  |  
| property  | `dremio.gcs.privateKeyId`  | ``your_private_key_ID``  | Private key ID from GCS  |  
| property  | `dremio.gcs.use_keyfile`  | true  | Required value for a Snowflake Open Catalog source  |  
| credential  | `dremio.gcs.privateKey`  | ``your_private_key``  | Private key from GCS  |  
  2. Under **Cache Options** , review the following table and edit the options to meet your needs.  
| Cache Options  | Description  |  
| --- | --- |  
| **Enable local caching when possible**  | Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.  |  
| **Max percent of total available cache space to use when possible**  | Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter in a percentage in the value field or use the arrows to the far right to adjust the percentage.  |  


### Reflection Refresh[​](/data-sources/lakehouse-catalogs/snowflake-open#reflection-refresh "Direct link to Reflection Refresh")
You can set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed. See the following options.  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh, default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Set refresh schedule**  | Specify the daily or weekly schedule.  |  
| **Never expire**  | Select to prevent Reflections from expiring, default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata[​](/data-sources/lakehouse-catalogs/snowflake-open#metadata "Direct link to Metadata")
Specifying metadata options is handled with the following settings.
#### Dataset Handling[​](/data-sources/lakehouse-catalogs/snowflake-open#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/lakehouse-catalogs/snowflake-open#metadata-refresh "Direct link to Metadata Refresh")
These are the optional **Metadata Refresh** parameters:
  * **Dataset Discovery** : The refresh interval for fetching top-level source object names such as databases and tables. Set the time interval using this parameter.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch every**  | You can choose to set the frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.  |  
  * **Dataset Details** : The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality. These are the parameters to fetch the dataset information.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch mode**  | You can choose to fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.  |  
| **Fetch every**  | You can choose to set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.  |  
| **Expire after**  | You can choose to set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.  |  


### Privileges[​](/data-sources/lakehouse-catalogs/snowflake-open#privileges "Direct link to Privileges")
You have the option to grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges.
To grant access to a user or role:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Snowflake Open Catalog Source[​](/data-sources/lakehouse-catalogs/snowflake-open#updating-a-snowflake-open-catalog-source "Direct link to Updating a Snowflake Open Catalog Source")
To update a Snowflake Open Catalog source:
  1. On the Datasets page, under **Lakehouse Catalogs** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Snowflake Open Catalog as a Source](/data-sources/lakehouse-catalogs/snowflake-open#configuring-snowflake-open-catalog-as-a-source).
  4. Click **Save**.


## Deleting a Snowflake Open Catalog Source[​](/data-sources/lakehouse-catalogs/snowflake-open#deleting-a-snowflake-open-catalog-source "Direct link to Deleting a Snowflake Open Catalog Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Snowflake Open Catalog source:
  1. On the Datasets page, click **Sources** &gt; **Lakehouse Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Additional Resources[​](/data-sources/lakehouse-catalogs/snowflake-open#additional-resources "Direct link to Additional Resources")
Learn more about Polaris by enrolling in the [Apache Polaris course in Dremio University](https://university.dremio.com/course/apache-polaris).
Was this page helpful?
[Previous Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake)[Next Unity Catalog](/data-sources/lakehouse-catalogs/unity)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake)[Next Unity Catalog](/data-sources/lakehouse-catalogs/unity)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Fsnowflake-open%2F&_biz_t=1777950368028&_biz_i=Snowflake%20Open%20Catalog%20%7C%20Dremio%20Documentation&_biz_n=103&rnd=108728&cdn_o=a&_biz_z=1777950368028)
