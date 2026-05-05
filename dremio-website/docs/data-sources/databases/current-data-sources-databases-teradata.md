---
url: /data-sources/databases/teradata
title: "Teradata | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64046.426353041
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Teradata

Version: current [26.x]
On this page
# Teradata Enterprise
This topic describes Teradata data source setup and Dremio configuration.
## User Impersonation[​](/data-sources/databases/teradata#user-impersonation "Direct link to User Impersonation")
The Teradata database username provided in the source configuration is the default username that is used for running queries. When queries are run against Teradata in Dremio, users use the privileges associated with the Teradata database username and run queries under that username.
You can change this default in Dremio by enabling user impersonation in the [Advanced Options](/data-sources/databases/teradata#advanced-options), which allows users to run queries under their own usernames and restricts their access. For example, `user_1` can run queries as `user_1` rather than `Teradata_svc`. Before enabling user impersonation, some setup is required in Teradata to allow one user to impersonate another user, because the username of the user in Dremio must be the same as their username in Teradata and the user must be able to connect through the Teradata database username.
To set up user impersonation, follow these steps:
  1. Ensure the user's username in Teradata matches their username in Dremio. If the usernames do not match, modify one of the usernames or create a new user account with a matching username.
  2. Run a GRANT CONNECT THROUGH command in Teradata to allow the user to connect through the Teradata database username:

Example of granting the CONNECT THROUGH privilege in Teradata

```
GRANT CONNECT THROUGH proxyuser TO PERMANENT testuser1 WITHOUT ROLE;  

```

In this example, the user can log in as `testuser1` in Dremio and in Teradata, and they can connect through the `proxyuser`. The `proxyuser` is the Teradata database username provided in the source configuration.
  1. Log in as an admin to Dremio.
  2. Follow the steps for [Configuring Teradata as a Source](/data-sources/databases/teradata#configuring-teradata-as-a-source) using the Teradata database username and enable **User Impersonation** in the **Advanced Options**.
  3. Grant [source privileges](/security/rbac/privileges#source-privileges) to the user.


Now that you have enabled user impersonation, a user logging in to Dremio with their username can access the Teradata source and its datasets according to their privileges. The user also runs queries against Teradata under their username.
## Teradata Setup[​](/data-sources/databases/teradata#teradata-setup "Direct link to Teradata Setup")
Dremio provides the Teradata connector with Dremio Enterprise Edition. You must install the proprietary Teradata JDBC driver in order to connect to a Teradata source.
To setup Teradata as a data source:
  1. Download the Teradata JDBC jars: **tdgssconfig.jar** and **TeraJDBC.jar**. The Teradata JDBC driver version 16.20+ does not need the **tdgssconfig.jar** file.
  2. Move the jar files into the **/opt/dremio/jars/3rdparty** directory on every Dremio node.
  3. Restart Dremio coordinators and executors to pick up the newly-installed JDBC driver.


  1. Download **/opt/dremio/jars** directory.


## Configuring Teradata as a Source[​](/data-sources/databases/teradata#configuring-teradata-as-a-source "Direct link to Configuring Teradata as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Teradata**.


### General[​](/data-sources/databases/teradata#general "Direct link to General")
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection[​](/data-sources/databases/teradata#connection "Direct link to Connection")  
| Name  | Description  |  
| --- | --- |  
| Host  | Teradata host name.  |  
| Port  | Teradata port number. Defaults to 1025.  |  
| Service Name  | Service Name of your database.  |  
#### Authentication[​](/data-sources/databases/teradata#authentication "Direct link to Authentication")
Select an authentication option:
  * Username: Teradata username
  * Password: Select the password store from the dropdown menu:
    * Dremio: Provide the password in plain text. Dremio stores the password.
    * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
    * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
    * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.


Select the **Encrypt connection** option to encrypt the connection to Teradata. Clear the checkbox to disable encryption.
### Advanced Options[​](/data-sources/databases/teradata#advanced-options "Direct link to Advanced Options")
Specify advanced options with the following settings.
  * **Show only the initial database used for connecting.**
  * **Record fetch size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. Default: 10
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to _8_.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to _60_.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **User Impersonation** : Allows users to run queries using their credentials rather than the username provided in the source credentials. Some setup is required in Teradata to allow one user to impersonate another user. See [User Impersonation](/data-sources/databases/teradata#user-impersonation).


### Reflection Refresh[​](/data-sources/databases/teradata#reflection-refresh "Direct link to Reflection Refresh")
Specify refresh policy options with the following settings.
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/databases/teradata#metadata "Direct link to Metadata")
Specify metadata options with the following settings.
#### Dataset Handling[​](/data-sources/databases/teradata#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/databases/teradata#metadata-refresh "Direct link to Metadata Refresh")
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


### Privileges[​](/data-sources/databases/teradata#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges.
All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Teradata Source[​](/data-sources/databases/teradata#updating-a-teradata-source "Direct link to Updating a Teradata Source")
To update a Teradata source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Teradata as a Source](/data-sources/databases/teradata#configuring-teradata-as-a-source).
  4. Click **Save**.


## Deleting a Teradata Source[​](/data-sources/databases/teradata#deleting-a-teradata-source "Direct link to Deleting a Teradata Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Teradata source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns[​](/data-sources/databases/teradata#predicate-pushdowns "Direct link to Predicate Pushdowns")
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`<`, `<=`, `<>`, `=`, `>=`, `>`, `!=`  
`*`, `+`, `-`, `/`  
AND, NOT, OR, `||`  
ABS  
ACOS  
ADD_MONTHS  
ASIN  
ATAN  
ATAN2  
AVG  
CAST  
CEIL  
CEILING  
CHAR_LENGTH  
CHARACTER_LENGTH  
CONCAT  
COS  
COSH  
COT  
COVAR_POP  
COVAR_SAMP  
DATE_ADD  
DATE_SUB  
DATE_TRUNC_DAY  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
DATE_TRUNC_WEEK  
DATE_TRUNC_YEAR  
DEGREES  
E  
EXP  
EXTRACT_DAY  
EXTRACT_DOW  
EXTRACT_DOY  
EXTRACT_HOUR  
EXTRACT_MINUTE  
EXTRACT_MONTH  
EXTRACT_QUARTER  
EXTRACT_SECOND  
EXTRACT_WEEK  
EXTRACT_YEAR  
FLOOR  
IS DISTINCT FROM  
IS NOT DISTINCT FROM  
IS NOT NULL  
IS NULL  
LAST_DAY  
LCASE  
LEFT  
LENGTH  
LIKE  
LN  
LOCATE  
LOG  
LOG10  
LOWER  
LPAD  
LTRIM  
MAX  
MIN  
MOD  
PI  
POSITION  
POW  
POWER  
RADIANS  
REPLACE  
REVERSE  
RIGHT  
ROUND  
RPAD  
RTRIM  
SIGN  
SIN  
SINH  
SQRT  
STDDEV  
STDDEV_POP  
STDDEV_SAMP  
SUBSTR  
SUBSTRING  
SUM  
TAN  
TANH  
TIMESTAMPADD_DAY  
TIMESTAMPADD_HOUR  
TIMESTAMPADD_MINUTE  
TIMESTAMPADD_MONTH  
TIMESTAMPADD_SECOND  
TIMESTAMPADD_YEAR  
TIMESTAMPDIFF_YEAR  
TO_CHAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
VAR_POP  
VAR_SAMP  

## Running Queries Directly on Teradata Through Dremio[​](/data-sources/databases/teradata#running-queries-directly-on-teradata-through-dremio "Direct link to Running Queries Directly on Teradata Through Dremio")
Dremio users can run pass queries through Dremio to run on Teradata. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
Was this page helpful?
[Previous Snowflake](/data-sources/databases/snowflake)[Next Vertica](/data-sources/databases/vertica)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Snowflake](/data-sources/databases/snowflake)[Next Vertica](/data-sources/databases/vertica)
