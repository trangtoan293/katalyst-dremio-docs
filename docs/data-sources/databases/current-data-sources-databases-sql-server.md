---
url: /data-sources/databases/sql-server
slug: /data-sources/databases/sql-server
title: "Microsoft SQL Server | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64045.778284166
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Microsoft SQL Server

Version: current [26.x]
On this page
# Microsoft SQL Server
This topic provides Microsoft SQL Server data source setup and configuration information.
## Supported Versions​
Dremio supports Microsoft SQL Server 2012 and later.
Ensure that your Dremio cluster has access to the appropriate port for your Microsoft SQL Server source. By default, this is port 1433.
## Initial Connection​
Depending on the number of tables in your SQL Server source, the final step of adding it to Dremio can take anywhere from a few seconds to a few minutes as the source's metadata is processed. However, this is a one-time cost and further queries to the source will not incur additional metadata reads.
## User Impersonation​
The Microsoft SQL Server username provided in the source configuration is the default username that is used for running queries. When queries are run against Microsoft SQL Server in Dremio, users use the privileges associated with the Microsoft SQL Server username and run queries under that username.
You can change this default in Dremio by enabling user impersonation in the Advanced Options, which allows users to run queries under their own usernames and restricts their access. For example, `user_1` can run queries as `user_1` rather than `sqlsvr_svc`. Before enabling user impersonation, some setup is required in Microsoft SQL Server to allow one user to impersonate another user because the username of the user in Dremio must be the same as their username in Microsoft SQL Server and the user must be able to connect through the Microsoft SQL Server username.
Reflections are not supported on data sources with user impersonation enabled to ensure that all security and governance policies defined in the underlying data source are enforced. Reflections created prior to enabling user impersonation must be manually dropped, as they will fail to refresh once impersonation is active.
To set up user impersonation, follow these steps:
  1. Ensure the user's username in Microsoft SQL Server matches their username in Dremio. If the usernames do not match, modify one of the usernames or create a new user account with a matching username.
  2. Run a GRANT IMPERSONATE command in Microsoft SQL Server to allow the user to connect through their Microsoft SQL Server username:

Example of granting impersonate privilege in Microsoft SQL Server

```
GRANT IMPERSONATE ON USER::testuser1 TO proxyuser;  

```

In this example, the user can log in as `testuser1` in Dremio and in Microsoft SQL Server, and they can connect through the `proxyuser`. The `proxyuser` is the Microsoft SQL Server username provided in the source configuration.
  1. Log in to Dremio as a member of the ADMIN role.
  2. Follow the steps for Configuring Microsoft SQL Server as a Source using the Microsoft SQL Server username `proxyuser` and enable **User Impersonation** in the **Advanced Options**.
  3. Grant [source privileges](/security/rbac/privileges) to the user.


Now that you have enabled user impersonation, a user who logs in to Dremio with their username can access the Microsoft SQL Server source and its datasets according to their privileges. The user can also run queries against Microsoft SQL Server under their username.
## Configuring Microsoft SQL Server as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Microsoft SQL Server**.


### General​
#### Name​
Enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection​
Describe the SQL Server instance used in this connection.
  * **Host** : The SQL Server host name or IP address.
  * **Port** (Optional): The SQL Server port number. If you do not specify a port number, the SQL Server instance is queried to retrieve the port that the named instance is listening on.
  * **Database** (Optional): The database instance name


#### Authentication​
Select an authentication option:
  * **No Authentication** : Connects without credentials. Only use when the SQL Server allows anonymous connections or when network-level security controls access.
  * **Master Credentials** (default):
    * **Username** : Enter the Microsoft SQL Server username
    * **Secret Store** : Select the password secret store from the dropdown menu:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the secret reference in the required format.
  * **Microsoft Entra ID** : To register a Microsoft Entra ID application and obtain the required IDs and client secret, see 
    * **Tenant ID** : Enter the unique identifier of your Microsoft Entra ID tenant.
    * **Application ID** : Enter the application (client) ID
    * **Application Secret** : Select the application secret store from the dropdown menu:
      * Dremio: Provide the application secret in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the application secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the secret reference in the required format.
  * **Azure Managed Identity** (Azure-hosted SQL Server): Passwordless authentication using Azure's managed identity service, eliminating credential management overhead.
    1. Create a 
    2. Attach the managed identity to your Dremio AKS cluster's 
    3. Configure the Dremio source:
       * When using a user-assigned managed identity, add the **Client ID** to the Dremio source configuration.
       * When using a system-assigned managed identity, leave the **Client ID** blank.


Select the **Encrypt connection** option to encrypt the connection to Microsoft SQL Server. Clear the checkbox to disable encryption.
### Advanced Options​
  * **Show only the initial database used for connecting** : If selected, hides the other DBs that the credential has access to.
  * **Record fetch size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. Default: 10
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to _8_.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to _60_.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Enable legacy dialect**


### Reflection Refresh​
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata​
#### Dataset Handling​
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh​
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


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Microsoft SQL Server Source​
To update a Microsoft SQL Server source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Microsoft SQL Server as a Source.
  4. Click **Save**.


## Deleting a Microsoft SQL Server Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Microsoft SQL Server source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns​
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`*`, `+`, `-`, `/`, `%`  
`<`, `<=`, `<>`, `=`, `>`, `>=`, `!=`  
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
COT  
DATE_ADD  
DATE_SUB  
DATE_TRUNC_DAY  
DATE_TRUNC_HOUR  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
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
MEDIAN  
MIN  
MOD  
MONTH  
PERCENT_CONT  
PERCENT_DISC  
PI  
POSITION  
POW  
POWER  
RADIANS  
RAND  
REPLACE  
REVERSE  
RIGHT  
ROUND  
RPAD  
RTRIM  
SIGN  
SIN  
SQRT  
SUBSTR  
SUBSTRING  
SUM  
TAN  
TIMESTAMPADD_DAY  
TIMESTAMPADD_HOUR  
TIMESTAMPADD_MINUTE  
TIMESTAMPADD_MONTH  
TIMESTAMPADD_QUARTER  
TIMESTAMPADD_SECOND  
TIMESTAMPADD_YEAR  
TIMESTAMPDIFF_DAY  
TIMESTAMPDIFF_HOUR  
TIMESTAMPDIFF_MINUTE  
TIMESTAMPDIFF_MONTH  
TIMESTAMPDIFF_QUARTER  
TIMESTAMPDIFF_SECOND  
TIMESTAMPDIFF_WEEK  
TIMESTAMPDIFF_YEAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
YEAR  

Since Microsoft SQL Server has no Boolean type, project operations that contain SQL expressions which evaluate to true or false (e.g., `SELECT username, friends > 0`), and filter operations that include Boolean literals in a filter (e.g., `WHERE currentAccount = true`) cannot be executed as pushdowns.
## Running Queries Directly on SQL Server Through Dremio​
Dremio users can pass queries through Dremio to run on SQL Server. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
## For More Information​
  * See [Microsoft SQL Server Data Types](/reference/sql/data-types/mappings/microsoft-sql-server) for information about mapping to Dremio data types.


Was this page helpful?
[Previous Microsoft Azure Synapse Analytics](/data-sources/databases/azure-synapse-analytics)Next MongoDB
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Azure Synapse Analytics](/data-sources/databases/azure-synapse-analytics)Next MongoDB
