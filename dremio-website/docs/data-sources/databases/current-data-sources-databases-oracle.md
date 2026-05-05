---
url: /data-sources/databases/oracle
title: "Oracle | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.429098291
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Oracle

Version: current [26.x]
On this page
# Oracle
This topic describes Oracle data source considerations and Dremio configuration.
## User Impersonation[​](/data-sources/databases/oracle#user-impersonation "Direct link to User Impersonation")
The Oracle database username provided in the source configuration is the default username that is used for running queries. When queries are run against Oracle in Dremio, users use the privileges associated with the Oracle database username and run queries under that username.
You can change this default in Dremio by enabling user impersonation in the [Advanced Options](/data-sources/databases/oracle#advanced-options), which allows users to run queries under their own usernames and restricts their access. For example, `user_1` can run queries as `user_1` rather than `oracle_svc`. Before enabling user impersonation, some setup is required in Oracle to allow one user to impersonate another user, because the username of the user in Dremio must be the same as their username in Oracle and the user must be able to connect through the Oracle database username.
Reflections are not supported on data sources with user impersonation enabled to ensure that all security and governance policies defined in the underlying data source are enforced. Reflections created prior to enabling user impersonation must be manually dropped, as they will fail to refresh once impersonation is active.
To set up user impersonation, follow these steps:
  1. Ensure the user's username in Oracle matches their username in Dremio. If the usernames do not match, modify one of the usernames or create a new user account with a matching username.
  2. Run a ALTER USER command in Oracle to allow the user to connect through the Oracle database username:

Example of altering the user in Oracle

```
ALTER USER testuser1 GRANT CONNECT THROUGH proxyuser;  

```

In this example, the user can log in as `testuser1` in Dremio and in Oracle, and they can connect through the `proxyuser`. The `proxyuser` is the Oracle database username provided in the source configuration.
  1. Log in as an admin to Dremio.
  2. Follow the steps for [Configuring Oracle as a Source](/data-sources/databases/oracle#configuring-oracle-as-a-source) using the Oracle database username and enable **User Impersonation** in the **Advanced Options**.
  3. Grant [source privileges](/security/rbac/privileges#source-privileges) to the user.


Now that you have enabled user impersonation, a user logging in to Dremio with their username can access the Oracle source and its datasets according to their privileges. The user also runs queries against Oracle under their username.
## Connection Information[​](/data-sources/databases/oracle#connection-information "Direct link to Connection Information")
The following connection information is needed prior to adding Oracle as a data source.
  * Hostname or IP
  * Port
  * Site Identifier (SID) of the Oracle server


Ensure that your Dremio cluster has access to the appropriate port for your Oracle source. By default this is port 1521.
### Initial Connection[​](/data-sources/databases/oracle#initial-connection "Direct link to Initial Connection")
Depending on the number of tables in your Oracle source, the final step of adding it to Dremio can take anywhere from a few seconds to a few minutes as the source's metadata is processed. However, this is a one-time cost and further queries to the source will not incur additional metadata reads.
## Configuring Oracle as a Source[​](/data-sources/databases/oracle#configuring-oracle-as-a-source "Direct link to Configuring Oracle as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Oracle**.


### General[​](/data-sources/databases/oracle#general "Direct link to General")
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Host[​](/data-sources/databases/oracle#host "Direct link to Host")  
| Name  | Description  |  
| --- | --- |  
| Host  | Oracle host name.  |  
| Port  | Oracle port number. Defaults to 1521.  |  
| Service Name  | Service Name of your database.  |  
| Encrypt connection  | Enables secure connections.  |  
#### Authentication[​](/data-sources/databases/oracle#authentication "Direct link to Authentication")
Select an authentication option:
  * No Authentication
  * Master Credentials (default):
    * Username: Oracle username
    * Password: Select the password store from the dropdown menu:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.
  * Secret Resource Url: Provide the username and secret resource URL for Dremio to use for the source.
  * Kerberos


### Advanced Options[​](/data-sources/databases/oracle#advanced-options "Direct link to Advanced Options")
![](https://docs.dremio.com/assets/images/oracle-adv-options-e952f2b5e51d2c3b81500386987b577c.png) !
  * **Use timezone as connection region** : If checked, uses timezone to set connection region.
  * **Include synonyms** : If checked, includes synonyms as datasets.
  * **Map Oracle DATE columns to TIMESTAMP** : If selected, the DATE column will display values in timestamp format.
  * **Record fetch size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. Default: 10
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to _8_.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to _60_.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Enable legacy dialect**
  * **Encryption** : Provide the **SSL/TLS server certificate distinguished name** , otherwise, leave blank to disable the DN match.


### Reflection Refresh[​](/data-sources/databases/oracle#reflection-refresh "Direct link to Reflection Refresh")
![](https://docs.dremio.com/assets/images/hdfs-refresh-policy-9ae71114907887b859a9d01425390739.png) !
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/databases/oracle#metadata "Direct link to Metadata")
![](https://docs.dremio.com/assets/images/mongodb-metadataA-4215ce9cc791254ae9684171d87714d6.png) !
#### Dataset Handling[​](/data-sources/databases/oracle#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/databases/oracle#metadata-refresh "Direct link to Metadata Refresh")
  * **Dataset Discovery** : Refresh interval for top-level source object names such as names of DBs and tables.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
  * **Dataset Details** : The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed -- Dremio updates details for a dataset at query time. This mode minimized metadata queries on a source when not used, but might lead to longer planning times.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours


### Privileges[​](/data-sources/databases/oracle#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Oracle TLS Configuration[​](/data-sources/databases/oracle#oracle-tls-configuration "Direct link to Oracle TLS Configuration")
To use TLS to connect to an Oracle source, do the following:
  1. Select the option **Connect using SSL/TLS** during initial configuration.
  2. If you want to ensure that the server you’re connecting to exactly matches a particular certificate string, add the Server Certificate Distinguished Name under **SSL/TLS** in **Advanced Options**.
  3. Add the Certificate Authority certificate to Dremio's trust store. To add the CA certificate that is used to sign the Oracle certificate into Dremio's trust store:
    1. Import the CA certificate and convert the certificate into DER format (required by Java keytool). For example, using OpenSSL tool:  
`$ openssl x509 -outform der -in oracle-ca.pem -out oracle-ca.der`
    2. Add the certificate to a new or existing truststore.  
`$ keytool -import -alias oracle-ca -keystore dremio-truststore.jks -file oracle-ca.der`
    3. Modify the `DREMIO_JAVA_SERVER_EXTRA_OPTS` section of the `dremio-env` configuration file to use the trust store by adding the following:  
`Djavax.net.ssl.trustStore=<path/to>/dremio-truststore.jks` `Djavax.net.ssl.trustStoreType=JKS`  
`Djavax.net.ssl.trustStorePassword=`password``


## Updating an Oracle Source[​](/data-sources/databases/oracle#updating-an-oracle-source "Direct link to Updating an Oracle Source")
To update an Oracle source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring Oracle as a Source](/data-sources/databases/oracle#configuring-oracle-as-a-source).
  4. Click **Save**.


## Deleting an Oracle Source[​](/data-sources/databases/oracle#deleting-an-oracle-source "Direct link to Deleting an Oracle Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Oracle source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns[​](/data-sources/databases/oracle#predicate-pushdowns "Direct link to Predicate Pushdowns")
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
COSH  
COT  
COVAR_POP  
COVAR_SAMP  
DATE_ADD  
DATE_SUB  
DATE_TRUNC_DAY  
DATE_TRUNC_HOUR  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
DATE_TRUNC_WEEK  
DATE_TRUNC_YEAR  
DEGREES  
E  
EXP  
EXTRACT_CENTURY  
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
PERCENT_CONT  
PERCENT_DISC  
PI  
POSITION  
POW  
POWER  
RADIANS  
REGEXP_LIKE  
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
TO_CHAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
VAR_POP  
VAR_SAMP  

Since Oracle has no Boolean type, project operations that contain SQL expressions which evaluate to true or false (e.g. `SELECT username, friends > 0`), and filter operations that include boolean literals in a filter (e.g. `WHERE currentAccount = true`) cannot be executed as pushdowns.
## Running Queries Directly on Oracle Through Dremio[​](/data-sources/databases/oracle#running-queries-directly-on-oracle-through-dremio "Direct link to Running Queries Directly on Oracle Through Dremio")
Dremio users can run pass queries through Dremio to run on Oracle. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
## For More Information[​](/data-sources/databases/oracle#for-more-information "Direct link to For More Information")
  * See [Oracle Data Types](/reference/sql/data-types/mappings/oracle) for information about mapping to Dremio data types.


Was this page helpful?
[Previous MySQL](/data-sources/databases/mysql)[Next PostgreSQL](/data-sources/databases/postgres)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous MySQL](/data-sources/databases/mysql)[Next PostgreSQL](/data-sources/databases/postgres)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Foracle%2F&_biz_t=1777950361141&_biz_i=Oracle%20%7C%20Dremio%20Documentation&_biz_n=92&rnd=299561&cdn_o=a&_biz_z=1777950361141)
