---
url: /data-sources/databases/azure-synapse-analytics
slug: /data-sources/databases/azure-synapse-analytics
title: "Microsoft Azure Synapse Analytics | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64039.850472708
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Microsoft Azure Synapse Analytics

Version: current [26.x]
On this page
# Microsoft Azure Synapse Analytics
Dremio supports integrations with organizations using Azure Synapse Analytics dedicated SQL pools via the external source.
## Requirements​
  * [Dremio v19.3+](/release-notes/unsupported-releases/version-1900-release-notes)


## Configuring Synapse Analytics as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Microsoft Azure Synapse Analytics**.


### General​
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection​
Describe the Synapse Analytics SQL Server workspace used in this connection.
  * Under **Host** , enter the URL for your dedicated SQL pool, which typically ends in `.sql.azuresynapse.net`.
  * Under **Port (optional)** , enter the port required to access the data source.
  * Under **Database** , enter the database's name. Only this database is accessed by Dremio.


#### Authentication​
Select an authentication option:
  * **No Authentication** : Dremio does not attempt to provide any authentication when connecting with the SQL pool.
  * **Master Credentials** : Dremio must provide a specified username and password in order to access the SQL pool.
    * Username: Enter the Microsoft Azure Synapse Analytics username.
    * Password: Select the password store from the dropdown menu:
      * Dremio: Provide the Microsoft Azure Synapse Analytics password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the Microsoft SQL Server password, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.
  * **Microsoft Entra ID** : To register a Microsoft Entra ID application and obtain the required IDs and client secret, see 
    * **Tenant ID** : Unique identifier of your Microsoft Entra ID tenant.
    * **Application ID** : Enter the application (client) ID
    * **Application Secret** : Select the application secret store from the dropdown menu:
      * Dremio: Provide the application secret in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the application secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the secret reference in the required format.
  * **Azure Managed Identity** : Passwordless authentication using Azure's managed identity service, eliminating credential management overhead.
    1. Create a 
    2. Attach the managed identity to your Dremio AKS cluster's 
    3. Configure the Dremio source:
       * When using a user-assigned managed identity, add the **Client ID** to the Dremio source configuration.
       * When using a system-assigned managed identity, leave the **Client ID** blank.


Select the **Encrypt connection** option to encrypt the connection to Microsoft Azure Synapse Analytics. Clear the checkbox to disable encryption.
### Advanced Options​
The following settings control more advanced functionalities in Dremio.
  * **Advanced Options**
    * **Show only the initial database used for connecting -** This restricts Dremio's access only to a default database as specified on the **General** table.
    * **Record fetch size -** Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. The default value is `10`.
    * **Maximum idle connections -** The maximum number of idle connections to keep.
    * **Connection idle time (s) -** Idle time, in seconds, before a connection is considered for closure.
    * **Query timeout (s) -** The timeout, in seconds, for query execution before it is canceled. Set to `0` for no timeout.
  * **Encryption**
    * **Verify server certificate -** Forces Dremio to verify the server's certificate using the distinguished name.
    * **SSL/TLS server certificate distinguished name -** Specifies the location for the certificate server, which must be set to `*.sql.azuresynapse.net`.
  * **Connection Properties**
    * **Name -** The unique name for any custom properties.
    * **Value -** The value associated with the custom property.


### Reflection Refresh​
This tab controls the frequency of Reflection refreshes or the timespan for expiration for any queries performed using this data source.
  * **Never refresh -** Prevents any query Reflections associated with this source from refreshing.
  * **Refresh every -** Sets the time interval by which Reflections for this source are refreshed. This may be set to hours, days, and weeks.
  * **Never expire -** Prevents any query Reflections associated with this source from expiring.
  * **Expire after -** Sets the time after a Reflection is created that it then expires and can no longer be used for queries. This may be set to hours, days, and weeks.


### Metadata​
This tab offers settings that control how dataset details are fetched and refreshed.
  * **Dataset Handling**
    * **Remove dataset definitions if underlying data is unavailable -** If this box is not checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.
  * **Metadata Refresh**
    * **Dataset Discovery**
      * **Fetch every -** Specifies the time interval by which Dremio fetches object names. This can be set by minutes, hours, days, and weeks.
    * **Dataset Details**
      * **Fetch mode -** Restricts when metadata is retrieved.
      * **Fetch every -** Specifies the time interval by which metadata is fetched. This can be set by minutes, hours, days, and weeks.
      * **Expire after -** Specifies the timespan for when dataset details expire after a dataset is queried. This can be set by minutes, hours, days, and weeks.


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Microsoft Azure Synapse Analytics Source​
To update a Microsoft Azure Synapse Analytics source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Synapse Analytics as a Source.
  4. Click **Save**.


## Deleting a Microsoft Azure Synapse Analytics Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Microsoft Azure Synapse Analytics source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
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

## Running Queries Directly on Azure Synapse Analytics Through Dremio​
Dremio users can pass queries through Dremio to run on Azure Synapse Analytics. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
Was this page helpful?
[Previous Microsoft Azure Data Explorer](/data-sources/databases/azure-data-explorer)[Next Microsoft SQL Server](/data-sources/databases/sql-server)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft Azure Data Explorer](/data-sources/databases/azure-data-explorer)[Next Microsoft SQL Server](/data-sources/databases/sql-server)
!
