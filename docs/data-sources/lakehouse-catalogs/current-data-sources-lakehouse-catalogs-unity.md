---
url: /data-sources/lakehouse-catalogs/unity
title: "Unity Catalog | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.160568541
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Unity Catalog

Version: current [26.x]
On this page
# Unity Catalog Enterprise
Unity Catalog provides a metastore for Delta tables within the Databricks ecosystem, and Dremio supports these Delta Lake Universal Format (UniForm) tables in Unity Catalog as a Dremio data source.
## UniForm Iceberg[​](/data-sources/lakehouse-catalogs/unity#uniform-iceberg "Direct link to UniForm Iceberg")
UniForm is an Iceberg metadata layer that provides a read-only interoperability layer for Iceberg clients. To query Delta tables, you must use UniForm to read Delta tables with Iceberg clients. For guidance, see 
For the limitations of UniForm tables, see 
## Configuring Unity Catalog as a Source[​](/data-sources/lakehouse-catalogs/unity#configuring-unity-catalog-as-a-source "Direct link to Configuring Unity Catalog as a Source")
To add a Unity Catalog source:
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Lakehouse Catalogs** , select **Unity Catalog**.


### General[​](/data-sources/lakehouse-catalogs/unity#general "Direct link to General")
To configure the source connection:
  * **Name** : Enter a name for the source. The name you enter must be unique in the organization. Also, consider a name that is easy for users to reference. This name cannot be edited once the source is created. The name cannot exceed 255 characters and must contain only the following characters: 0-9, A-Z, a-z, underscore(_), or hyphen (-)
  * **Endpoint URI** : Specify the catalog service URI. For more information on how to find your Unity Catalog URI, see 
  * **Unity Catalog** , enter the catalog name.


#### Authentication[​](/data-sources/lakehouse-catalogs/unity#authentication "Direct link to Authentication")
Select an authentication option:
  * **Databricks Personal Access Token (PAT)** : Depending on your deployment, choose from the following options to create a PAT:
    * AWS-based Unity deployment: See 
    * Azure Databricks-based Unity deployment: See 
Select a method to store the PAT:
    * Dremio: Provide the PAT in plain text. Dremio stores the PAT.
    * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored PAT using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
    * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the PAT, which is available in the AWS web console or using command line tools.
    * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the PAT reference in the required format.
  * **Microsoft Entra ID** : To register a Microsoft Entra ID application and obtain the required IDs and client secret, see 
    * **Application ID** : Enter the application (client) ID
    * **OAuth 2.0 Token Endpoint** : The OAuth 2.0 token endpoint that the application uses to get an access token
    * **Application Secret** :
      * Dremio: Provide the application secret in plain text. Dremio stores the application secret.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored application secret securely using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the application secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine using from the dropdown and enter the secret reference for the application secret in the required format.
    * By default, **Use vended credentials** is turned on. This allows Dremio to connect to the catalog and receive temporary credentials for the underlying storage location. When this option is enabled, you don't need to add the storage authentication in **Advanced Options**.


#### Allowed Namespaces[​](/data-sources/lakehouse-catalogs/unity#allowed-namespaces "Direct link to Allowed Namespaces")
For **Allowed Namespaces** , optionally add each namespace and check the option if you want to include their whole subtrees. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces.
### Advanced Options[​](/data-sources/lakehouse-catalogs/unity#advanced-options "Direct link to Advanced Options")
To set the advanced options:
  * (Optional) For **Catalog Properties** and **Catalog Credentials** , you must manually provide the storage authentication if you choose to not use vended credentials.
Dremio supports Amazon S3, Azure Storage, and Google Cloud Storage (GCS) as object storage services. For acceptable storage authentication configurations, see the following catalog properties and credentials for each service option.
**Amazon S3 Access Key**  
| Type  |  **Name**  
Value  | Description  |  
| --- | --- | --- |  
| property  |  **`fs.s3a.aws.credentials.provider`**  
`org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  | Required field for a Unity Catalog source  |  
| credential  |  **`fs.s3a.access.key`**  
``your_access_key``  | AWS access key ID used by S3A file system. Omit for IAM role-based or provider-based authentication  |  
| credential  |  **`fs.s3a.secret.key`**  
``your_secret_key``  | AWS access key used by S3A file system. Omit for IAM role-based or provider-based authentication  |  
**Amazon S3 Assumed Role**  
| Type  |  **Name**  
Value  | Description  |  
| --- | --- | --- |  
| property  |  **`fs.s3a.assumed.role.arn`**  
`arn:aws:iam::*******:role/OrganizationAccountAccessRole`  | AWS ARN for the role to be assumed  |  
| property  |  **`fs.s3a.aws.credentials.provider`**  
`com.dremio.plugins.s3.store.STSCredentialProviderV1`  | Required field for a Unity Catalog source  |  
| property  |  **`fs.s3a.assumed.role.credentials.provider`**  
`org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  | Use only if the credential provider is `AssumedRoleCredentialProvider`; lists credential providers to authenticate with the STS endpoint and retrieve short-lived role credentials  |  
**Azure Storage Shared Key**  
| Type  |  **Name**  
Value  | Description  |  
| --- | --- | --- |  
| credential  |  **`fs.azure.account.key`**  
``your_account_key``  | Storage account key  |  
**Google Cloud Storage (GCS) Using KeyFile** `  
| Type  |  **Name**  
Value  | Description  |  
| --- | --- | --- |  
| property  |  **`fs.AbstractFileSystem.gs.impl`**  
`com.google.cloud.hadoop.fs.gcs.GoogleHadoopFS`  | Required field for a Unity Catalog source  |  
| property  |  **`fs.gs.auth.service.account.enable`**  
`true`  | Required field for a Unity Catalog source  |  
| property  |  **`fs.gs.impl`**  
`com.google.cloud.hadoop.fs.gcs.GoogleHadoopFileSystem`  | Required field for a Unity Catalog source  |  
| property  |  **`fs.gs.bucket`**  
``your_bucket``  | Bucket where your data is stored for Unity Catalog in GCS  |  
| property  |  **`fs.gs.project.id`**  
``your_project_ID``  | Project ID from GCS  |  
| property  |  **`fs.gs.auth.service.account.email`**  
``your_client_email``  | Client email from GCS  |  
| property  |  **`fs.gs.auth.service.account.private.key.id`**  
``your_private_key_id``  | Private key ID from GCS  |  
| property  |  **`dremio.gcs.use_keyfile`**  
`true`  | Required field for a Unity Catalog source  |  
| credential  |  **`fs.gs.auth.service.account.private.key`**  
``your_private_key``  | Private key from GCS  |  
  * Under **Cache Options** , review the following table and edit the options to meet your needs.  
| Cache Options  | Description  |  
| --- | --- |  
| **Enable local caching when possible**  | Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.  |  
| **Max percent of total available cache space to use when possible**  | Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter in a percentage in the value field or use the arrows to the far right to adjust the percentage.  |  


### Reflection Refresh[​](/data-sources/lakehouse-catalogs/unity#reflection-refresh "Direct link to Reflection Refresh")
You can set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed. See the following options.  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh, default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Set refresh schedule**  | Specify the daily or weekly schedule.  |  
| **Never expire**  | Select to prevent Reflections from expiring, default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata[​](/data-sources/lakehouse-catalogs/unity#metadata "Direct link to Metadata")
Specifying metadata options is handled with the following settings.
#### Dataset Handling[​](/data-sources/lakehouse-catalogs/unity#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/lakehouse-catalogs/unity#metadata-refresh "Direct link to Metadata Refresh")
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


### Privileges[​](/data-sources/lakehouse-catalogs/unity#privileges "Direct link to Privileges")
You have the option to grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges.
To grant access to a user or role:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Unity Catalog Source[​](/data-sources/lakehouse-catalogs/unity#updating-a-unity-catalog-source "Direct link to Updating a Unity Catalog Source")
To update a Unity Catalog source:
  1. On the Datasets page, under **Lakehouse Catalogs** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name, and then click the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top-right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Unity Catalog as a Source](/data-sources/lakehouse-catalogs/unity#configuring-unity-catalog-as-a-source).
  4. Click **Save**.


## Deleting a Unity Catalog Source[​](/data-sources/lakehouse-catalogs/unity#deleting-a-unity-catalog-source "Direct link to Deleting a Unity Catalog Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Unity Catalog source:
  1. On the Datasets page, click **Sources** > **Lakehouse Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open)[Next Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open)[Next Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Funity%2F&_biz_t=1777950367121&_biz_i=Unity%20Catalog%20%7C%20Dremio%20Documentation&_biz_n=99&rnd=257145&cdn_o=a&_biz_z=1777950367122)
