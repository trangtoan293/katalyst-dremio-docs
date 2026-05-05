---
url: /data-sources/databases/redshift
title: "Amazon Redshift | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.509645041
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Amazon Redshift

Version: current [26.x]
On this page
# Amazon Redshift
## Configuring Amazon Redshift as a Source[​](/data-sources/databases/redshift#configuring-amazon-redshift-as-a-source "Direct link to Configuring Amazon Redshift as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Amazon Redshift**.


### General[​](/data-sources/databases/redshift#general "Direct link to General")
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection[​](/data-sources/databases/redshift#connection "Direct link to Connection")
Enter the **JDBC Connection String**. The connection URL can be found in the AWS console.
#### Authentication[​](/data-sources/databases/redshift#authentication "Direct link to Authentication")
Select an authentication option:
  * **No Authentication**
  * **Master Credentials (default):**
    * Username: Redshift username
    * Password: Select the password store from the dropdown menu:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``.
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or by using command-line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the correct format.
  * **Secret Resource URL:** Provide the username and secret resource URL to use for authentication.
    * EKS Pod Identity: Dremio uses the IAM policy associated with the coordinator's Kubernetes service account.
  * **AWS Profile:** Dremio sources profile credentials from the specified AWS profile. For information on how to set up a configuration or credentials file for AWS, see [AWS Custom Authentication](/data-sources/object/s3#aws-custom-authentication).
    * AWS Profile (Optional): The AWS profile name. If this is left blank, the default profile will be used. For more information about using profiles in a credentials or configuration file, see the AWS documentation on 
    * DbUser (Optional): The name of the Redshift DbUser to use for authentication. If this is left blank, the default username for your AWS IAM role will be used (generally, this is the same as your AWS username).


### Advanced Options[​](/data-sources/databases/redshift#advanced-options "Direct link to Advanced Options")
  * **Record fetch size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. Default: 10
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to 8.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to 60.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.


### Reflection Refresh[​](/data-sources/databases/redshift#reflection-refresh "Direct link to Reflection Refresh")
Set the policy that controls how often Reflections are refreshed or expired, using the following options:
  * **Never refresh** : Select to prevent automatic Reflection refresh; otherwise, the default is to refresh automatically.
  * **Refresh every** : How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.
  * **Set refresh schedule** : Specify the daily or weekly schedule.
  * **Never expire** : Select to prevent Reflections from expiring; otherwise, the default is to expire automatically after the time limit specified in **Expire after**.
  * **Expire after** : The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.


### Metadata[​](/data-sources/databases/redshift#metadata "Direct link to Metadata")
Set the following metadata options:
  * **Remove dataset definitions if underlying data is unavailable** : Checked by default. If this box is _not_ checked and the underlying folder/source is not accessible, Dremio does not remove the dataset definitions.
  * **Data Discovery** : Set the time interval for fetching top-level source object names such as databases and tables. You can choose to set the **Fetch every** frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.
  * **Dataset Details** : The metadata that Dremio needs for query planning, such as information needed for fields, types, shards, statistics, and locality. Use these parameters to fetch or expire the metadata:
    * **Fetch mode** : Fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.
    * **Fetch every** : Set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.
    * **Expire after** : Set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.


### Privileges[​](/data-sources/databases/redshift#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the username or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Edit an Amazon Redshift Source[​](/data-sources/databases/redshift#edit-an-amazon-redshift-source "Direct link to Edit an Amazon Redshift Source")
To update an Amazon Redshift source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the Source Settings dialog, you cannot edit the name. Editing other parameters is optional.
  4. Click **Save**.


## Delete an Amazon Redshift Source[​](/data-sources/databases/redshift#delete-an-amazon-redshift-source "Direct link to Delete an Amazon Redshift Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Amazon Redshift source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


## Predicate Pushdowns[​](/data-sources/databases/redshift#predicate-pushdowns "Direct link to Predicate Pushdowns")
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`*`, `+`, `-`, `/`  
`<`, `<=`, `<>`, `=`, `>`, `>=`, `!=`  
`AND`, `NOT`, `OR`, `||`  
`ABS`  
`ACOS`  
`ADD_MONTHS`  
`ASIN`  
`ATAN`  
`ATAN2`  
`AVG`  
`CAST`  
`CBRT`  
`CEIL`  
`CEILING`  
`CHAR_LENGTH`  
`CHARACTER_LENGTH`  
`CONCAT`  
`COS`  
`COT`  
`DATE_ADD`  
`DATE_SUB`  
`DATE_TRUNC_CENTURY`  
`DATE_TRUNC_DAY`  
`DATE_TRUNC_DECADE`  
`DATE_TRUNC_HOUR`  
`DATE_TRUNC_MINUTE`  
`DATE_TRUNC_MONTH`  
`DATE_TRUNC_QUARTER`  
`DATE_TRUNC_SECOND`  
`DATE_TRUNC_WEEK`  
`DATE_TRUNC_YEAR`  
`DEGREES`  
`E`  
`EXP`  
`EXTRACT_CENTURY`  
`EXTRACT_DAY`  
`EXTRACT_DECADE`  
`EXTRACT_DOW`  
`EXTRACT_DOY`  
`EXTRACT_EPOCH`  
`EXTRACT_HOUR`  
`EXTRACT_MILLENNIUM`  
`EXTRACT_MINUTE`  
`EXTRACT_MONTH`  
`EXTRACT_QUARTER`  
`EXTRACT_SECOND`  
`EXTRACT_WEEK`  
`EXTRACT_YEAR`  
`FLOOR`  
`IS DISTINCT FROM`  
`IS NOT DISTINCT FROM`  
`IS NOT NULL`  
`IS NULL`  
`LAST_DAY`  
`LCASE`  
`LEFT`  
`LENGTH`  
`LIKE`  
`LN`  
`LOCATE`  
`LOG`  
`LOG10`  
`LOWER`  
`LPAD`  
`LTRIM`  
`MAX`  
`MEDIAN`  
`MIN`  
`MOD`  
`PERCENT_CONT`  
`PERCENT_DISC`  
`PI`  
`POSITION`  
`POW`  
`POWER`  
`RADIANS`  
`REPLACE`  
`REVERSE`  
`RIGHT`  
`ROUND`  
`RPAD`  
`RTRIM`  
`SIGN`  
`SIN`  
`SQRT`  
`STDDEV`  
`STDDEV_POP`  
`STDDEV_SAMP`  
`SUBSTR`  
`SUBSTRING`  
`SUM`  
`TAN`  
`TIMESTAMPADD_DAY`  
`TIMESTAMPADD_HOUR`  
`TIMESTAMPADD_MINUTE`  
`TIMESTAMPADD_MONTH`  
`TIMESTAMPADD_QUARTER`  
`TIMESTAMPADD_SECOND`  
`TIMESTAMPADD_WEEK`  
`TIMESTAMPADD_YEAR`  
`TIMESTAMPDIFF_DAY`  
`TIMESTAMPDIFF_HOUR`  
`TIMESTAMPDIFF_MINUTE`  
`TIMESTAMPDIFF_MONTH`  
`TIMESTAMPDIFF_QUARTER`  
`TIMESTAMPDIFF_SECOND`  
`TIMESTAMPDIFF_WEEK`  
`TIMESTAMPDIFF_YEAR`  
`TO_CHAR`  
`TO_DATE`  
`TRIM`  
`TRUNC`  
`TRUNCATE`  
`UCASE`  
`UPPER`  
`VAR_POP`  
`VAR_SAMP`  

## For More Information[​](/data-sources/databases/redshift#for-more-information "Direct link to For More Information")
  * See [Redshift Data Types](/reference/sql/data-types/mappings/amazon-redshift) for information about mapping to Dremio data types.


Was this page helpful?
[Previous Amazon OpenSearch Service](/data-sources/databases/opensearch)[Next Apache Druid](/data-sources/databases/apache-druid)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Amazon OpenSearch Service](/data-sources/databases/opensearch)[Next Apache Druid](/data-sources/databases/apache-druid)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Fmongo%2F&_biz_t=1777950360611&_biz_i=MongoDB%20%7C%20Dremio%20Documentation&_biz_n=88&rnd=32482&cdn_o=a&_biz_z=1777950360614)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Fredshift%2F&_biz_t=1777950360614&_biz_i=Amazon%20Redshift%20%7C%20Dremio%20Documentation&_biz_n=89&rnd=896359&cdn_o=a&_biz_z=1777950360615)
