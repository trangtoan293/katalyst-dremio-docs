---
url: /data-sources/databases/opensearch
title: "Amazon OpenSearch Service | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.483413166
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Amazon OpenSearch Service

Version: current [26.x]
On this page
# Amazon OpenSearch Service
## Compatibility[​](/data-sources/databases/opensearch#compatibility "Direct link to Compatibility")
Dremio supports the following Amazon OpenSearch Service versions:
  * 5.x
  * 6.0
  * 6.2
  * 6.3
  * 7.0+


## Configuring Amazon OpenSearch Service as a Source[​](/data-sources/databases/opensearch#configuring-amazon-opensearch-service-as-a-source "Direct link to Configuring Amazon OpenSearch Service as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Amazon OpenSearch Service**.


### General[​](/data-sources/databases/opensearch#general "Direct link to General")
On the General tab, enter a name for the source, connection details, and authentication credentials. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection[​](/data-sources/databases/opensearch#connection "Direct link to Connection")  
| Name  | Description  |  
| --- | --- |  
| Host  | AWS OpenSearch Host name.  |  
| Port  | Port on which the AWS OpenSearch service is running (usually 443).  |  
#### Authentication[​](/data-sources/databases/opensearch#authentication "Direct link to Authentication")
Choose one of the following authentication methods:
  * **AWS Access Key** : Used for key-based authentication.
    * Under **AWS Access Key** , enter the 
    * Under **AWS Access Secret** , store the 
      * Dremio: Provide the secret in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the secret reference in the required format.
  * **EC2 Metadata** : Dremio uses the IAM policy from the EC2 instance.
  * **EKS Pod Identity** : Dremio uses the IAM policy associated with the coordinator's Kubernetes service account.
  * **AWS Profile** : Dremio sources profile credentials from the specified AWS profile. For information on how to set up a configuration or credentials file for AWS, see [AWS Custom Authentication](/data-sources/object/s3#aws-custom-authentication). Under AWS Profile (Optional), enter the AWS profile name. If this is left blank, then the default profile will be used. For more information about using profiles in a credentials or configuration file, see AWS's documentation on 
  * **No Authentication** : No credentials required.


Select the option to perform keyword searches when pushing down fields mapped as text and keyword if desired.
### Advanced Options[​](/data-sources/databases/opensearch#advanced-options "Direct link to Advanced Options")
On the Advanced Options tab, enter the options specific to the OpenSearch Service, encryption, and AWS.
#### OpenSearch options[​](/data-sources/databases/opensearch#opensearch-options "Direct link to OpenSearch options")
  * Show hidden indices that start with a dot (.).
  * Use Painless scripting with OpenSearch 5.0+ (Checked as a default).
  * Show _id columns.
  * Use index/doc fields when pushing down aggregates and filters on analyzed and normalized fields (may produce unexpected results).
  * Use scripts for query pushdown** (Checked as a default).
  * If the number of records returned from OpenSearch is less than the expected number, warn instead of failing the query.
  * **Read timeout (seconds)** (default: 60)
  * **Scroll timeout (seconds)** (default: 300)
  * **Scroll size** -- This setting must be less than or equal to your OpenSearch value for the `index.max_result-window` setting. (default: 4000)


#### Encryption[​](/data-sources/databases/opensearch#encryption "Direct link to Encryption")
Validation modes include:
  * Validate certificate and hostname (default)
  * Validate certificate only
  * Do not validate certificate or hostname


#### AWS[​](/data-sources/databases/opensearch#aws "Direct link to AWS")
  * **Overwrite reqion** -- If the box is checked, provide the region.


### Reflection Refresh[​](/data-sources/databases/opensearch#reflection-refresh "Direct link to Reflection Refresh")
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/databases/opensearch#metadata "Direct link to Metadata")
#### Dataset Handling[​](/data-sources/databases/opensearch#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/databases/opensearch#metadata-refresh "Direct link to Metadata Refresh")
  * **Dataset Discovery** -- Refresh interval for top-level source object names such as names of DBs and tables.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
  * **Dataset Details** -- The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed -- Dremio updates details for a dataset at query time. This mode minimized metadata queries on a source when not used, but might lead to longer planning times.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours


### Privileges[​](/data-sources/databases/opensearch#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an Amazon OpenSearch Service Source[​](/data-sources/databases/opensearch#updating-an-amazon-opensearch-service-source "Direct link to Updating an Amazon OpenSearch Service Source")
To update an Amazon OpenSearch Service source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Amazon OpenSearch Service as a Source](/data-sources/databases/opensearch#configuring-amazon-opensearch-service-as-a-source).
  4. Click **Save**.


## Deleting an Amazon OpenSearch Service Source[​](/data-sources/databases/opensearch#deleting-an-amazon-opensearch-service-source "Direct link to Deleting an Amazon OpenSearch Service Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Amazon OpenSearch Service source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous Databases](/data-sources/databases)[Next Amazon Redshift](/data-sources/databases/redshift)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Databases](/data-sources/databases)[Next Amazon Redshift](/data-sources/databases/redshift)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Fopensearch%2F&_biz_t=1777950360728&_biz_i=Amazon%20OpenSearch%20Service%20%7C%20Dremio%20Documentation&_biz_n=91&rnd=949861&cdn_o=a&_biz_z=1777950360729)
