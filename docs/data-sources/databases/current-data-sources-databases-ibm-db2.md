---
url: /data-sources/databases/ibm-db2
slug: /data-sources/databases/ibm-db2
title: "IBM Db2 | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.195747666
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * IBM Db2

Version: current [26.x]
On this page
# IBM Db2
You can add Db2 databases as sources to Dremio.
See [IBM Db2 Data Types](/reference/sql/data-types/mappings/db2) for information about mapping to Dremio data types.
## Limitations​
Only IBM Db2 for Linux, UNIX, and Windows is supported.
## Configuring IBM Db2 as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **IBM Db2**.


### General Options​
  1. In the **Name** field, specify the name by which you want the Db2 source to appear in the **Databases** section. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
  2. Under **Connection** , follow these steps:
    1. In the **Host** field, specify the hostname or IP address of the database to connect to.
    2. In the **Port** field, specify the port to use when connecting. The default is 50000.
    3. In the **Database** field, specify the name of the database.
  3. Under **Authentication** , specify the Db2 username. Then, choose a method for providing the Db2 password from the dropdown menu:
     * Dremio: Provide the password in plain text. Dremio stores the password.
     * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
     * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
     * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.


### Advanced Options​
On the Advanced Options page, you can set values for these non-required options:  
| Option  | Description  |  
| --- | --- |  
| **Maximum Idle Connections**  | The total number of connections allowed to be idle at a given time. The default maximum idle connections is 8.  |  
| **Connection Idle Time**  | The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. The default connection idle time is 60 seconds.  |  
| **Query Timeout**  | The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.  |  
### Reflection Refresh Options​
On the Reflection Refresh page, set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed.   
  
  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh, default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Never expire**  | Select to prevent Reflections from expiring, default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata Options​
On the Metadata page, you can configure settings to refresh metadata and handle datasets.
#### Dataset Handling​
These are the optional **Dataset Handling** parameters.  
| Parameter  | Description  |  
| --- | --- |  
| **Remove dataset definitions if underlying data is unavailable**  | By default, Dremio removes dataset definitions if underlying data is unavailable. Useful when files are temporarily deleted and added back in the same location with new sets of files.  |  
#### Metadata Refresh​
These are the optional **Metadata Refresh** parameters:
  * **Dataset Discovery** : The refresh interval for fetching top-level source object names such as databases and tables. Set the time interval using this parameter.  
| Parameter  | Description  |  
| --- | --- |  
| (Optional) **Fetch every**  | You can choose to set the frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.  |  
  * **Dataset Details** : The metadata that Dremio needs for query planning such as information required for fields, types, shards, statistics, and locality. These are the parameters to fetch the dataset information.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch mode**  | You can choose to fetch only from queried datasets that are set by default. Dremio updates details for previously queried objects in a source. Fetching from all datasets is deprecated.  |  
| **Fetch every**  | You can choose to set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.  |  
| **Expire after**  | You can choose to set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.  |  


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an IBM Db2 Source​
To update an IBM Db2 source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring IBM Db2 as a Source.
  4. Click **Save**.


## Deleting an IBM Db2 Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an IBM Db2 source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns​
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`||`, `AND`, `OR`  
`=`, `+`, `-`, `/`, `*`  
`<=`, `<`, `>`, `>=`, `=`, `<>`, `!=`  
ABS  
ADD_MONTHS  
AVG  
BETWEEN  
CASE  
CAST  
CEIL  
CEILING  
CHAR_LENGTH  
CHARACTER_LENGTH  
COALESCE  
CONCAT  
DATE_ADD  
DATE_DIFF  
DATE_TRUNC  
DATE_TRUNC_CENTURY  
DATE_TRUNC_DAY  
DATE_TRUNC_DECADE  
DATE_TRUNC_HOUR  
DATE_TRUNC_MICROSECOND  
DATE_TRUNC_MILLENIUM  
DATE_TRUNC_MILLISECOND  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
DATE_TRUNC_SECOND  
DATE_TRUNC_WEEK  
DATE_TRUNC_YEAR  
DAYOFMONTH  
DAYOFWEEK  
DAYOFYEAR  
EXTRACT  
FLOOR  
ILIKE  
IN  
IS DISTINCT FROM  
IS NOT DISTINCT FROM  
IS NOT NULL  
IS NULL  
LAST_DAY  
LEFT  
LENGTH  
LIKE  
LOCATE  
LOWER  
LPAD  
LTRIM  
MAX  
MIN  
MOD  
NOT  
OR  
PERCENT_RANK  
POSITION  
REPLACE  
RIGHT  
ROUND  
RPAD  
RTRIM  
SIGN  
SQRT  
STDDEV  
STDDEV_POP  
STDDEV_SAMP  
SUBSTR  
SUBSTRING  
SUM  
TO_CHAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UPPER  

## Running Queries Directly on IBM Db2 Through Dremio​
Dremio users can run pass queries through Dremio to run on IBM Db2. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
Was this page helpful?
[Previous Google BigQuery](/data-sources/databases/google-bigquery)[Next Microsoft Azure Data Explorer](/data-sources/databases/azure-data-explorer)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Google BigQuery](/data-sources/databases/google-bigquery)[Next Microsoft Azure Data Explorer](/data-sources/databases/azure-data-explorer)
!
