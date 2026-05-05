---
url: /data-sources/databases/sap-hana
slug: /data-sources/databases/sap-hana
title: "SAP HANA | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.541022833
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * SAP HANA

Version: current [26.x]
On this page
# SAP HANA Enterprise
Dremio supports connecting to SAP HANA directly via username and password. The connector was tested against 
## Requirements​
To connect to SAP HANA, you need:
  * SAP HANA 2.0
  * SAP username and password


## Dremio Configuration​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select the source.
The new source dialog box appears, which contains the following tabs:
     * **General** : Create a name for your database, specify the connection details, and set the authentication.
     * **Advanced Options** : (Optional) Set the advanced configuration options for your database.
     * **Reflection Refresh** : (Optional) Set a policy to control how often Reflections are refreshed and expired.
     * **Metadata** : (Optional) Specify dataset handling and metadata refresh.
     * **Privileges** : (Optional) Add privileges for users or roles.
Refer to the following sections for guidance on how to edit each tab.


### General​
To configure the source connection:
  1. For **Name** , enter the name to identify the database in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.


  1. For **Host** , enter the hostname or IP address for the SAP HANA source.
  2. For **Port** , enter the SAP HANA port number. The default port is `39017`.
  3. For **Database** , enter the service name of your database.


  1. For **Username** , enter the database username.
  2. For **Password** , choose an authentication method:
     * **No Authentication** : Dremio does not attempt to provide any authentication when connecting with the SQL pool.
     * **Master Credentials** : Dremio must provide a specified username and password in order to access the SQL pool.
       * For **Username** , enter the database username.
       * For **Password** , choose a method:
       * Dremio: Provide the database password in plain text. Dremio stores the password.
       * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for the Azure Key Vault secret that stores the Vertica password. The URI format is `https://`vault_name`.vault.azure.net/secrets/`secret_name`` (for example, `https://myvault.vault.azure.net/secrets/mysecret`).
To use Azure Key Vault as your application secret store, you must:
         * [Deploy Dremio on Azure](/get-started/cluster-deployments/deployment-models/azure-deployments).
         * Complete the [Requirements for Authenticating with Azure Key Vault](/data-sources/object/azure-storage).
It is not necessary to restart the Dremio coordinator when you rotate secrets stored in Azure Key Vault. Read [Requirements for Secrets Rotation](/data-sources/object/azure-storage) for more information.
       * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
       * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Choose the HashiCorp secrets engine you're using from the dropdown menu and enter the secret reference for the password in the correct format in the provided field.
Sources containing a large number of files or tables may take longer to be added. During this time, the source name is grayed out and shows a spinner icon, indicating the source is being added. Once complete, the source becomes accessible.


### Advanced Options​
Set the advanced configuration options for your database:
  * **Record fetch size** : Number of records to fetch at once. Set to `0` to have Dremio automatically decide. By default, this is set to `10`.
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to `8`.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to `60`.
  * **Query timeout (s)** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Enable external authorization plugin** : When enabled, authorizes an external plugin.
  * **Connection Properties** : Connection properties and values for the data source.


### Reflection Refresh​
Set the policy that controls how often Reflections are refreshed or expired, using the following options:
  * **Never refresh** : Select to prevent automatic Reflection refresh; otherwise, the default is to refresh automatically.
  * **Refresh every** : How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.
  * **Set refresh schedule** : Specify the daily or weekly schedule.
  * **Never expire** : Select to prevent Reflections from expiring; otherwise, the default is to expire automatically after the time limit specified in **Expire after**.
  * **Expire after** : The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.


### Metadata​
Set the following metadata options:
  * **Remove dataset definitions if underlying data is unavailable** : Checked by default. If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.
  * **Data Discovery** : Set the time interval for fetching top-level source object names such as databases and tables. You can choose to set the **Fetch every** frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.
  * **Dataset Details** : The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality. Use these parameters to fetch or expire the metadata:
    * **Fetch mode** : Fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.
    * **Fetch every** : Set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.
    * **Expire after** : Set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.


### Privileges​
To grant privileges to specific users or roles:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


See [Access Control](/security/rbac) for additional information about privileges.
## Predicate Pushdowns​
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`%`, `*`, `+`, `-`, `/`  
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
CBRT  
CEIL  
CEILING  
CHAR_LENGTH  
CHARACTER_LENGTH  
CONCAT  
COS  
COT  
DATE_ADD  
DATE_DIFF  
DATE_SUB  
DATE_TRUNC_CENTURY  
DATE_TRUNC_DAY  
DATE_TRUNC_DECADE  
DATE_TRUNC_HOUR  
DATE_TRUNC_MILLENIUM  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_SECOND  
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
LCASE  
LEFT  
LN  
LOCATE  
LOG  
LOG10  
LPAD  
LTRIM  
MAX  
MIN  
MOD  
MONTH  
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
TO_CHAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
YEAR  

## Data Source Management​
### Updating the Source​
To update the source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the dropdown.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name.
  4. Click **Save**.


### Deleting the Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the `ADMIN` role can delete the source.
To delete the source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and click ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) to the right.
  3. From the dropdown, select **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


  * Deleting a source causes all downstream views that depend on objects in the source to break.
  * Sources containing a large number of files or tables may take longer to be removed. During this time, the source name is grayed out and shows a spinner icon, indicating the source is being removed. Once complete, the source disappears.


## Querying the SAP HANA Source Directly​
Dremio users can run pass queries through Dremio to run on your database. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
Was this page helpful?
[Previous PostgreSQL](/data-sources/databases/postgres)[Next Snowflake](/data-sources/databases/snowflake)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous PostgreSQL](/data-sources/databases/postgres)[Next Snowflake](/data-sources/databases/snowflake)
!
