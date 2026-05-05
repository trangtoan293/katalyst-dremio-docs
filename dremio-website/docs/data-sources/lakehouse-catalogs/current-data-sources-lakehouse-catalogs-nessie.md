---
url: /data-sources/lakehouse-catalogs/nessie
title: "Nessie | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.598965958
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Nessie

Version: current [26.x]
On this page
# Nessie
  * Adding or changing data on a versioned branch, testing that branch for quality, and merging the changes to general user availability, all within the same data lake and without impacting production data.
  * Creating specialized versions of data for specific use cases.
  * Atomically updating many tables, with many changes, thus eliminating data inconsistencies and aberrations in the middle of a change sequence.


## Concepts[​](/data-sources/lakehouse-catalogs/nessie#concepts "Direct link to Concepts")
### Architecture[​](/data-sources/lakehouse-catalogs/nessie#architecture "Direct link to Architecture")
The Nessie service is a lightweight Java-based REST API server. Nessie uses configurable authentication and a configurable backend datastore (which currently supports multiple database types). This architecture allows Nessie to run in one or more Docker instances according to capacity requirements. The 
![Nessie diagram showing how Dremio communicates with a standalone Nessie server.](https://docs.dremio.com/images/Nessie-diagram2.png)
### Objects in Nessie[​](/data-sources/lakehouse-catalogs/nessie#objects-in-nessie "Direct link to Objects in Nessie")
When working with a Nessie source, you work in or with the following objects:
  * Branch: A named reference and a movable pointer to a commit.
  * Folders: Used to help you organize your tables in a Nessie source.
  * Tables: Contains the data from your source, formatted as rows and columns. A table can be modified by query engines that connect to your Nessie source.
  * Views: A virtual table, created by running SQL statements or functions on a table or another view.


You can create and store Apache Iceberg tables and views in the Nessie catalog. No other file or source types can be stored in the Nessie catalog.
### Git-like Data Management[​](/data-sources/lakehouse-catalogs/nessie#git-like-data-management "Direct link to Git-like Data Management")
Nessie is a native 
  * **Commit:** A transaction affecting one or more tables or views. It may take place over a short or long period of time. Examples include:
    * Updating a table using Dremio (`INSERT`, `UPDATE`, `DELETE`, `MERGE`, `TRUNCATE`) or another engine such as Spark
    * Updating a view or the definition of a view
    * Updating the schema of a table via SQL (`ALTER TABLE`) or Spark
  * **Branch:** A movable pointer to a commit. Every time you commit, the branch pointer moves forward automatically. Branches can be merged via a commit.
  * **Tag:** A named commit. You can tag a commit with a specific name so that users can refer to it without specifying a commit hash.


These capabilities enable a variety of use cases such as:
  * **Multi-statement transactions:** With branches, data is updated in isolation and changes are merged atomically. The updates can be performed through a single engine (for example, SQL DML statements in Dremio) or through multiple engines (for example, ingest data in Spark and delete a record in Dremio), and may span any period of time and any number of users.
  * **Experimentation:** Experimenting on the live lakehouse risks exposing incorrect or inconsistent data to other users. Instead, you can easily create a sandbox branch and experiment there. Because the data is not duplicated, there is no cost to creating a sandbox. And when you are done, the branch can be either deleted or your changes can be merged into the main branch.
  * **Reproducibility:** The ability to retrain machine learning models and BI dashboards based on historical data is important for reproducible research and regulation. Nessie enables any engine to access previous versions of the lakehouse by referencing a specific commit, tag (a named commit), or timestamp.
  * **Governance:** Nessie provides a user interface familiar to users of GitHub and GitLab that makes it easy to see every commit in every branch, so that you don’t have to wonder who updated or deleted a table, or where a table originated.


The following illustration shows an example of a new branch that is forked from the main branch, then merged back atomically after multiple commits:
![Example of Git branching.](https://docs.dremio.com/images/concept-git-branching-nessie-sm.png)
## Prerequisites[​](/data-sources/lakehouse-catalogs/nessie#prerequisites "Direct link to Prerequisites")
Dremio supports Nessie version 0.59.0 and later. If you have not yet set up a Nessie server and connected it with your dataset, you can choose to either set up a server in a 
When using Nessie as a source, Dremio can connect to Amazon S3 buckets, Azure Storage, Google Cloud Storage (GCS), or S3-compatible storage providers like MinIO and Dell ECS. Read [Storage](/data-sources/lakehouse-catalogs/nessie#storage) for details about the required credentials for connecting to each storage provider.
## Configuring Nessie as a Source[​](/data-sources/lakehouse-catalogs/nessie#configuring-nessie-as-a-source "Direct link to Configuring Nessie as a Source")
To add a Nessie source to your project:
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Nessie Catalogs** , select **Nessie**.
The New Nessie Source dialog box appears, which contains the following sections:
     * **General:** Create a name for your Nessie source, specify the endpoint URL, and set the authentication type. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
     * **Storage:** Set the storage option by setting up the authentication type and the connection properties.
     * **Advanced Options:** (Optional) Use the default settings or, optionally, configure access preferences and cache options.
     * **Privileges:** (Optional) Add privileges for users or roles.
Refer to the following for guidance on how to edit each section.


### General[​](/data-sources/lakehouse-catalogs/nessie#general "Direct link to General")
This tab provides options for configuring connections to a Nessie source.
  1. In the **Name** field, enter a name.


The name you enter must be unique in the organization. Also, consider a name that is easy for users to reference. This name cannot be edited once the source is created. The name cannot exceed 255 characters and must contain only the following characters: 0-9, A-Z, a-z, underscore(_), or hyphen (-).
  1. In the **Nessie endpoint URL** field, specify the IP address and port that you have set up for your Nessie server (e.g., `https://localhost:19120/api/v2`). For more information, see 
  2. Under **Nessie authentication type** , select either **None** or **Bearer** :
     * **None:** The Nessie server does not require authentication.
     * **Bearer:** Set authentication using an OpenID bearer token. For more information about setting up this type of authentication, see 
       * Dremio: Provide the bearer token in plain text. Dremio stores the password.
       * [Azure Key Vault](/security/secrets-management/azure-key-vault): Store the bearer token securely using URI format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
       * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the bearer token, which is available in the AWS web console or using command line tools.
       * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Choose the HashiCorp secrets engine you're using from the dropdown menu and enter the secret reference for the bearer token in the correct format in the provided field.


### Storage[​](/data-sources/lakehouse-catalogs/nessie#storage "Direct link to Storage")
Nessie sources can use Amazon S3 buckets (AWS), Azure Storage (Azure), Google Cloud Storage (Google), or S3-compatible storage providers like MinIO and Dell ECS as storage.
  * AWS
  * Azure
  * Google


To connect an Amazon S3 bucket or a S3-compatible storage provider to the Nessie source, select the **AWS** storage provider option.
#### S3 Storage[​](/data-sources/lakehouse-catalogs/nessie#s3-storage "Direct link to S3 Storage")
In the field under **AWS root path** , provide the root path of the S3 bucket to use. We recommend that you have either a dedicated S3 bucket or a dedicated folder in which to store Nessie objects.
#### Authentication[​](/data-sources/lakehouse-catalogs/nessie#authentication "Direct link to Authentication")
Under **Authentication method** , choose the method you want to use to authenticate to Amazon S3.
  * **AWS Access Key** : 
    * In the field under **AWS access key** , provide the access key for the Amazon S3 account.
    * Under **AWS access secret** , use the dropdown menu to choose a method for providing the access secret for the Amazon S3 account: 
      * Dremio: Provide the access secret in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored access secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the access secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the access secret reference in the required format.
    * In the field under **IAM role to assume** , provide the ARN of the IAM role.
  * **EC2 Metadata** : In the field under **IAM role to assume** , provide the ARN of an IAM role with privileges on the S3 bucket. This role could be attached to the EC2 instance or to an IAM role to assume for connecting to the S3 bucket. In either case, the role must provide privileges to use the S3 bucket.
  * **AWS Profile** : In the field under **AWS profile (optional)** , provide the AWS Profile name. If you leave the field blank, Dremio uses the default AWS Profile.
  * **No Authentication** : Select this option if no credentials are required because you are connecting the Nessie source to a public Amazon S3 bucket.


If you are connecting to S3-compatible storage like MinIO or Dell ECS, choose **AWS access key** for authentication and provide the access key and secret.
#### Other: Connection Properties[​](/data-sources/lakehouse-catalogs/nessie#other-connection-properties "Direct link to Other: Connection Properties")
Provide the custom key-value pairs for the connection relevant to the source.
(Optional) If you are connecting to S3 storage, complete the following:
  1. Click **Add Property**.
  2. For **Name** , provide a connection property.
  3. For **Value** , provide the corresponding value for the connection property.


If you are connecting to S3-compatible storage like MinIO or Dell ECS, complete the following:
  1. Add `fs.s3a.path.style.access` and set the value to `true` This setting ensures that the request path is created correctly when using IP addresses or hostnames as the endpoint.
  2. Add `fs.s3a.endpoint` property and its corresponding server endpoint value (IP address). The endpoint value cannot contain the `http(s)://` prefix nor can it start with the string `s3`. For example, if the endpoint is `http://123.1.2.3:9000`, the value is `123.1.2.3:9000`
  3. Add `dremio.s3.compat` and set the value to `true`.


#### Other: Encrypt connection[​](/data-sources/lakehouse-catalogs/nessie#other-encrypt-connection "Direct link to Other: Encrypt connection")
Optional: To secure the connections between the Amazon S3 bucket and Dremio, select the **Encrypt connection** checkbox.
To save the configuration, click **Save**. To configure additional settings, proceed to [Advanced Options](/data-sources/lakehouse-catalogs/nessie#advanced-options).
To connect Azure Storage to the Nessie source, select the **Azure** storage provider option.
#### Azure Storage[​](/data-sources/lakehouse-catalogs/nessie#azure-storage "Direct link to Azure Storage")
  * In the field under **Storage Account Name** , provide the name of the Azure Storage account to use.
  * In the field under **Azure root path** , provide the path in your Azure Storage account to the write location that Dremio should use for Iceberg metadata and data. The root path includes the name of the Azure Storage container, followed by the names of any folders (for example, `/containername/optional/folder/path`).


#### Azure Authentication[​](/data-sources/lakehouse-catalogs/nessie#azure-authentication "Direct link to Azure Authentication")
Under **Authentication method** , choose whether you want to authenticate to Azure Storage with a shared access key or Microsoft Entra ID.
  * **Shared access key** : Use the dropdown menu to choose a method for providing the shared access key for the Azure Storage account: 
    * Dremio: Provide the access key in plain text. Dremio stores the password.
    * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored access key using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
    * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the access key, which is available in the AWS web console or using command line tools.
    * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the access key reference in the required format.
  * **Microsoft Entra ID** : 
    * In the field under **Application ID** , provide the ID for the application (client) in Azure.
    * Under **Client secret** , use the dropdown menu to choose a method for providing the client secret for the Azure Storage account: 
      * Dremio: Provide the client secret in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored client secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the client secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the client secret reference in the required format.
    * In the field under **OAuth 2.0 token endpoint** , provide the OAuth 2.0 token endpoint (v1.0), including the tenant ID, that the application uses to get an access token or a refresh token.


#### Other: Connection Properties (Optional)[​](/data-sources/lakehouse-catalogs/nessie#other-connection-properties-optional "Direct link to Other: Connection Properties \(Optional\)")
Provide the custom key-value pairs for the connection relevant to the source.
  1. Click **Add Property**.
  2. For **Name** , provide a connection property.
  3. For **Value** , provide the corresponding value for the connection property.


#### Other: Encrypt connection[​](/data-sources/lakehouse-catalogs/nessie#other-encrypt-connection-1 "Direct link to Other: Encrypt connection")
Optional: To secure the connections between Azure Storage and Dremio, select the **Encrypt connection** checkbox.
To save the configuration, click **Save**. To configure additional settings, proceed to [Advanced Options](/data-sources/lakehouse-catalogs/nessie#advanced-options).
To connect Google Cloud Storage (GCS) to the Nessie source, select the **Google** storage provider option.
#### GCS Storage[​](/data-sources/lakehouse-catalogs/nessie#gcs-storage "Direct link to GCS Storage")
  * In the field under **Google Project ID** , provide the ID for your GCS project. You can find the ID in the **Project info** pane at the top-left of your screen on the GCS Home page.
  * In the field under **Google root path** , provide the path for the GCS source that Dremio should use for Iceberg metadata and data.


#### GCS Authentication[​](/data-sources/lakehouse-catalogs/nessie#gcs-authentication "Direct link to GCS Authentication")
Under **Authentication method** , choose whether you want to authenticate to GCS with a service account key or by automatic/service account.
  * **Service Account Keys** : 
    * In the field under **Client Email** , provide the email address associated with the GCS service account.
    * In the field under **Client ID** , provide the client ID for your GCS key pair.
    * In the field under **Private Key ID** , provide the key ID for your GCS key pair.
    * Under **Private Key** , use the dropdown menu to choose a method for providing the private key for your GCS key pair: 
      * Dremio: Provide the private key in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored private key using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the private key, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the private key secret reference in the required format.
  * **Automatic/Service Account** : If you are running Dremio on a Google Compute instance, Dremio uses the active service account for your instance and does not require any additional information to integrate with your data.


#### Other: Connection Properties (Optional)[​](/data-sources/lakehouse-catalogs/nessie#other-connection-properties-optional-1 "Direct link to Other: Connection Properties \(Optional\)")
Provide the custom key-value pairs for the connection relevant to the source.
  1. Click **Add Property**.
  2. For **Name** , provide a connection property.
  3. For **Value** , provide the corresponding value for the connection property.


#### Other: Encrypt connection[​](/data-sources/lakehouse-catalogs/nessie#other-encrypt-connection-2 "Direct link to Other: Encrypt connection")
Optional: To secure the connections between GCS and Dremio, select the **Encrypt connection** checkbox.
To save the configuration, click **Save**. To configure additional settings, proceed to [Advanced Options](/data-sources/lakehouse-catalogs/nessie#advanced-options).
### Advanced Options[​](/data-sources/lakehouse-catalogs/nessie#advanced-options "Direct link to Advanced Options")
Click **Advanced Options** in the left menu sidebar.
Under Cache Options, review the following table and edit the options to meet your needs.  
| Cache Options  | Description  |  
| --- | --- |  
| **Enable local caching when possible**  | Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.  |  
| **Max percent of total available cache space to use when possible**  | Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter in a percentage in the value field or use the arrows to the far right to adjust the percentage.  |  
### Reflection Refresh[​](/data-sources/lakehouse-catalogs/nessie#reflection-refresh "Direct link to Reflection Refresh")
The **Reflection Refresh** section allows you to set a schedule for refreshing all of the Reflections that are defined on tables in the catalog. You can override this schedule on individual tables in different branches. This section also lets you specify how long all Reflections in the catalog exist until they expire. Again, you can override this setting on individual tables in different branches.
To learn more, see [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections) and [Setting the Expiration Policy for Reflections](/acceleration/manual-reflections).
### Privileges[​](/data-sources/lakehouse-catalogs/nessie#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


At this point, a connection with the Nessie server is attempted. If a connection cannot be made, report the issue to the Project Nessie community's 
## Retrieving a Table Definition[​](/data-sources/lakehouse-catalogs/nessie#retrieving-a-table-definition "Direct link to Retrieving a Table Definition")
You can retrieve the table definition for Nessie tables if you have the `SELECT` privilege on the table. Because tables cannot be modified, you can't make edits to the table definition but you can retrieve the definition to understand where the table was derived from and to use it as a template for creating new views.
To see a table definition on the Datasets page, choose any one of these options:
  * Hover over the table name and click ![](https://docs.dremio.com/images/icons/go-to-table.png) in the top right corner of the metadata card.
  * Hover over the line containing the table and click ![](https://docs.dremio.com/images/icons/go-to-table.png) on the right.
  * Hover over the line containing the dataset, click ![](https://docs.dremio.com/images/icons/more.png) on the right, and select **Go to Table**.


The table definition opens in the SQL editor.
If you want to use this table definition to create a view, see [Create View](/reference/sql/commands/create-view).
If you have the `SELECT` privilege on a Nessie table, you can run `SHOW CREATE TABLE `table_name`` in the SQL editor to see the table definition. See [SHOW CREATE TABLE](/reference/sql/commands/show-create-table).
## Updating a Nessie Source[​](/data-sources/lakehouse-catalogs/nessie#updating-a-nessie-source "Direct link to Updating a Nessie Source")
To update a Nessie source:
  1. On the Datasets page, under **Nessie Catalogs** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Nessie as a Source](/data-sources/lakehouse-catalogs/nessie#configuring-nessie-as-a-source).
  4. Click **Save**.


## Deleting a Nessie Source[​](/data-sources/lakehouse-catalogs/nessie#deleting-a-nessie-source "Direct link to Deleting a Nessie Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Nessie source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Nessie Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Limitations[​](/data-sources/lakehouse-catalogs/nessie#limitations "Direct link to Limitations")
  * Changes to tables and views that are in Nessie sources are not logged. Nessie sources do not have audit logs. 
DX-64988
  * The [Catalog API](/reference/api/catalog) is unable to retrieve or manage Nessie sources. 
DX-64994
  * Dremio does not support moving, copying, or renaming tables and views in Nessie sources or removing the format from tables in Nessie sources.


Was this page helpful?
[Previous Hive](/data-sources/lakehouse-catalogs/hive)[Next Object Storage](/data-sources/object)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Hive](/data-sources/lakehouse-catalogs/hive)[Next Object Storage](/data-sources/object)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Fnessie%2F&_biz_t=1777950368027&_biz_i=Nessie%20%7C%20Dremio%20Documentation&_biz_n=103&rnd=593303&cdn_o=a&_biz_z=1777950368027)
