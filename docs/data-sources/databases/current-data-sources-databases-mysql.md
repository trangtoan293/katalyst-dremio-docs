---
url: /data-sources/databases/mysql
slug: /data-sources/databases/mysql
title: "MySQL | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.163898875
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * MySQL

Version: current [26.x]
On this page
# MySQL
**Supported Versions**
  * MySQL versions that are 5.5.3 or higher


## Configuring MySQL as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **MySQL**.


### General​
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Host​  
| Name  | Description  |  
| --- | --- |  
| Host  | MySQL host name.  |  
| Port  | MySQL port number. Defaults to 3306.  |  
#### Authentication​
  * No Authentication
  * Master Credentials (default):
    * Username: MySQL user name
    * Password secret store:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Store the password securely using URI format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Choose the HashiCorp secrets engine you're using from the dropdown menu and enter the secret reference for the password in the correct format in the provided field.


### Advanced Options​
! !
  * **Net write timeout (in seconds)** : Seconds to wait for data from the server before aborting the connection. Default: 60
  * **Record fetch size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. Default: 10
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to _8_.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to _60_.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Connection Properties** : Connection properties and values for the data source. If you enable `require_secure_transport` in MySQL, you must add the connection properties `useSSL` and trustServerCertificate and set both to the value `true` to prevent errors.


### Reflection Refresh​
! !
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata​
! !
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


## Updating a MySQL Source​
To update a MySQL source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring MySQL as a Source.
  4. Click **Save**.


## Deleting a MySQL Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a MySQL source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns​
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`*`, `+`, `-`, `/`, `%`  
`<`, `<=`, `<>`, `=`, `>`, `>=`, `!=`  
AND, NOT, NOT LIKE, OR, `||`  
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
CURRENT_DATE  
CURRENT_TIME  
CURRENT_TIMESTAMP  
DATE_ADD  
DATE_SUB  
DATE_TRUNC_DAY  
DATE_TRUNC_DECADE  
DATE_TRUNC_HOUR  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_SECOND  
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
STDDEV  
STDDEV_POP  
STDDEV_SAMP  
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
VAR_POP  
VAR_SAMP
## Running Queries Directly on MySQL Through Dremio​
Dremio users can run pass queries through Dremio to run on MySQL. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
## For More Information​
  * See [MySQL Data Types](/reference/sql/data-types/mappings/mysql) for information about mapping to Dremio data types.


Was this page helpful?
Previous MongoDB[Next Oracle](/data-sources/databases/oracle)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous MongoDB[Next Oracle](/data-sources/databases/oracle)
!
