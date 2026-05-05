---
url: /data-sources/databases/vertica
slug: /data-sources/databases/vertica
title: "Vertica | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64046.252292541
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Vertica

Version: current [26.x]
On this page
# Vertica
## Prerequisites​
Ensure that you have the following details before configuring Vertica as a source:
  * Database name
  * Hostname or IP address
  * Port


## Configuring Vertica as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Vertica**.


### General​
For **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection​  
| Name  | Description  |  
| --- | --- |  
| Host  | Vertica host name.  |  
| Port  | Vertica port number. Defaults to 5433.  |  
| Database  | Service name of your database.  |  
#### Authentication​
Select an authentication option:
  * Username: Vertica username
  * Password: Select the password store from the dropdown menu:
    * Dremio: Provide the password in plain text. Dremio stores the password.
    * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
    * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
    * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.


### Advanced Options​
Specify advanced options with the following settings.
  * **Record fetch size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. By default, this is set to **10**.
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to **8**.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to **60**.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Connection Properties** : Connection properties and values for the data source.


### Reflection Refresh​
You can set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed.   
  
  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh, default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Set refresh schedule**  | Specify the daily or weekly schedule.  |  
| **Never expire**  | Select to prevent Reflections from expiring, default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata​
Specifying metadata options is handled with the following settings.
#### Dataset Handling​
  * Remove dataset definitions if underlying data is unavailable (Default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh​
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


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Vertica Source​
To update a Vertica source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Vertica as a Source.
  4. Click **Save**.


## Deleting a Vertica Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Vertica source, perform these steps:
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
BTRIM  
CAST  
CBRT  
CEIL  
CEILING  
CHAR_LENGTH  
CHARACTER_LENGTH  
CONCAT  
COS  
COT  
DATE_ADD  
DATE_PART  
DATE_SUB  
DATE_TRUNC_CENTURY  
DATE_TRUNC_DAY  
DATE_TRUNC_DECADE  
DATE_TRUNC_HOUR  
DATE_TRUNC_MICROSECOND  
DATE_TRUNC_MILLISECOND  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
DATE_TRUNC_SECOND  
DATE_TRUNC_WEEK  
DATE_TRUNC_YEAR  
DEGREES  
E  
EXP  
EXTRACT_CENTURY  
EXTRACT_DAY  
EXTRACT_DECADE  
EXTRACT_DOW  
EXTRACT_DOY  
EXTRACT_EPOCH  
EXTRACT_HOUR  
EXTRACT_MILLENNIUM  
EXTRACT_MINUTE  
EXTRACT_MONTH  
EXTRACT_QUARTER  
EXTRACT_SECOND  
EXTRACT_WEEK  
EXTRACT_YEAR  
FLOOR  
ILIKE  
IS DISTINCT FROM  
IS NOT DISTINCT FROM  
IS NOT NULL  
IS NULL  
ISNULL  
LAST_DAY  
LCASE  
LEFT  
LENGTH  
LIKE  
LN  
LOCALTIME  
LOCALTIMESTAMP  
LOCATE  
LOG  
LOG10  
LOWER  
LPAD  
LTRIM  
MAX  
MIN  
MOD  
NOW  
NULLIF  
PI  
POSITION  
POW  
POWER  
RADIANS  
RANDOM  
REGEXP_REPLACE  
REPLACE  
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
STRPOS  
SUBSTR  
SUBSTRING  
SUM  
TAN  
TIMESTAMPADD  
TIMESTAMPDIFF  
TO_CHAR  
TO_DATE  
TO_NUMBER  
TO_TIMESTAMP  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
VAR_POP  
VAR_SAMP  
VARIANCE  

Was this page helpful?
[Previous Teradata](/data-sources/databases/teradata)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Teradata](/data-sources/databases/teradata)
