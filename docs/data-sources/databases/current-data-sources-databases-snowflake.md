---
url: /data-sources/databases/snowflake
slug: /data-sources/databases/snowflake
title: "Snowflake | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64042.239443833
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Snowflake

Version: current [26.x]
On this page
# Snowflake
## Prerequisite​
  * Ensure that your Dremio cluster is at version 23.1 or later.


## User Impersonation​
Dremio supports OAuth with impersonation for Snowflake. This allows Dremio users to authenticate via external OAuth and map to Snowflake roles securely. For reference, see 
Reflections are not supported on data sources with user impersonation enabled to ensure that all security and governance policies defined in the underlying data source are enforced. Reflections created prior to enabling user impersonation must be manually dropped, as they will fail to refresh once impersonation is active.
Before configuring a Snowflake source with user impersonation, perform the following steps:
  1. Run the following curl commands to obtain the Dremio OAuth parameters (issuer and public key):
To get the issuer:

```
curl --location 'https://<dremio_url>/api/v3/external-oauth/discovery/jwt-issuer' \  
--header 'Authorization: Bearer <Token>' \  
--header 'Content-Type: application/json' \  
--data ''  

```

To get the public key:

```
curl --location 'https://<dremio_url>/api/v3/external-oauth/discovery/jwks' \  
--header 'Authorization: Bearer <Token>' \  
--header 'Content-Type: application/json' \  
--data ''  

```

The above JWKS response needs to be converted to PEM format, which Snowflake accepts. We recommend using this open-source tool: 
Example conversion:

```
python rsa-jwks-to-pem.py key_jwks.json  

```

  2. Create a `EXTERNAL_OAUTH_ISSUER` to the issuer obtained from Dremio, `EXTERNAL_OAUTH_RSA_PUBLIC_KEY` to the PEM-formatted key from the script, and `EXTERNAL_OAUTH_AUDIENCE_LIST` to any additional audience values for token validation beyond your Snowflake account URL.
Create Security Integration 

```
CREATE OR REPLACE SECURITY INTEGRATION snowflake_imp  
TYPE = EXTERNAL_OAUTH  
ENABLED = TRUE  
EXTERNAL_OAUTH_TYPE = CUSTOM  
EXTERNAL_OAUTH_ISSUER = '<issuer-from-dremio>'  
EXTERNAL_OAUTH_AUDIENCE_LIST = ('<audience-values>')  
EXTERNAL_OAUTH_ALLOWED_ROLES_LIST = ('REGRESSION', 'ACCOUNTADMIN', 'PUBLIC')  
EXTERNAL_OAUTH_RSA_PUBLIC_KEY = '<PEM-formatted-key>'  
EXTERNAL_OAUTH_TOKEN_USER_MAPPING_CLAIM = 'sub'  
EXTERNAL_OAUTH_SNOWFLAKE_USER_MAPPING_ATTRIBUTE = 'login_name';  

```

To configure Snowflake source in any mode (which allows users to assume any role they have access to in Snowflake), enable `EXTERNAL_OAUTH_ANY_ROLE_MODE` for Snowflake security integration: Alter Security Integration 

```
ALTER SECURITY INTEGRATION snowflake_imp SET EXTERNAL_OAUTH_ANY_ROLE_MODE = 'ENABLE';  

```



## Configuring Snowflake as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Snowflake**.


### General​
  1. In the **Name** field, specify the name by which you want the Snowflake source to appear in the **Databases** section. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
  2. Under **Connection** , follow these steps:
The optional connection parameters are case-sensitive. For example, if the name of a warehouse uses upper case only (e.g., WAREHOUSE1), specify it the same way in the **Warehouse** field.
    1. In the **Host** field, specify the hostname of the Snowflake source in this format: `LOCATOR_ID.snowflakecomputing.com`.
    2. (Optional) In the **Database** field, specify the default database to use.
    3. (Optional) In the **Role** field, specify the default access-control role to use.
    4. (Optional) In the **Schema** field, specify the default schema to use.
    5. (Optional) In the **Warehouse** field, specify the warehouse that will provide resources for executing DML statements and queries.
  3. Under **Authentication** , select either Login-password authentication, Key-pair authentication or OAuth with impersonation:
     * Login-password authentication: In the **Username** field, specify the Snowflake username. Under **Password** , in the dropdown menu, choose a method for providing the Snowflake password. If you choose Dremio, provide the Snowflake password in plain text in the provided field. Dremio stores the password. You may also choose to use one of the supported secrets managers to provide the Snowflake password:
       * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for the Azure Key Vault secret that stores the Snowflake password. The URI format is `https://`vault_name`.vault.azure.net/secrets/`secret_name`` (for example, `https://myvault.vault.azure.net/secrets/mysecret`).
To use Azure Key Vault as your application secret store, you must:  
- Deploy Dremio on [Azure AKS](/deploy-dremio/deploy-on-kubernetes).  
- Complete the [Requirements for Authenticating with Azure Key Vault](/data-sources/object/azure-storage).
It is not necessary to restart the Dremio coordinator when you rotate secrets stored in Azure Key Vault. Read [Requirements for Secrets Rotation](/data-sources/object/azure-storage) for more information.
       * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the Snowflake password, which is available in the AWS web console or using command line tools.
       * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Choose the HashiCorp secrets engine you're using from the dropdown menu and enter the secret reference for the Snowflake password in the correct format in the provided field.
     * Key-pair authentication (see **Username** field, specify the Snowflake username. Under **Private Key** and **Private key passphrase** , in the dropdown menus, choose a method for providing the Snowflake private key and private key passphrase, respectively. If you choose Dremio, provide the Snowflake private key and private key passphrase in plain text in the provided fields. Dremio stores the private key and private key passphrase. You may also choose to use one of the supported secrets managers to provide the Snowflake private key and private key passphrase:
       * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for the Azure Key Vault secret that stores the Snowflake private key and private key passphrase. The URI format is `https://`vault_name`.vault.azure.net/secrets/`secret_name`` (for example, `https://myvault.vault.azure.net/secrets/mysecret`).
To use Azure Key Vault as your application secret store, you must:  
- Deploy Dremio on [Azure AKS](/deploy-dremio/deploy-on-kubernetes).  
- Complete the [Requirements for Authenticating with Azure Key Vault](/data-sources/object/azure-storage).
It is not necessary to restart the Dremio coordinator when you rotate secrets stored in Azure Key Vault. Read [Requirements for Secrets Rotation](/data-sources/object/azure-storage) for more information.
       * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the Snowflake private key and private key passphrase, which is available in the AWS web console or using command line tools.
       * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Choose the HashiCorp secrets engine you're using from the dropdown menu and enter the secret reference for the Snowflake private key and private key passphrase in the correct format in the provided field.
     * **OAuth with impersonation** : This allows Dremio users to authenticate via external OAuth and map to Snowflake roles securely. If you have not already, complete the steps in [User Impersonation](#user-impersonation] for configuring a Snowflake source with user impersonation.
       * Choose one of the two user impersonation role modes:
         1. Any role: Allows users to assume any role they have access to in Snowflake.
         2. User-defined role: Restricts users to specific predefined roles. The username configured in the Dremio source must be present in the `EXTERNAL_OAUTH_ALLOWED_ROLES_LIST` specified in Step 2 under User Impersonation.
       * Set the JWT `audience` parameter to match Snowflake’s `EXTERNAL_OAUTH_AUDIENCE_LIST`. This ensures proper token validation and role mapping between Dremio and Snowflake.


### Advanced Options​
On the Advanced Options page, you can set values for these non-required options:  
| Option  | Description  |  
| --- | --- |  
| **Maximum Idle Connections**  | The total number of connections allowed to be idle at a given time. The default maximum idle connections is 8.  |  
| **Connection Idle Time**  | The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. The default connection idle time is 60 seconds.  |  
| **Query Timeout**  | The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.  |  
| **Record Fetch Size**  | The maximum number of records to allow a single query to fetch. This setting prevents queries from using too many resources.  |  
### Reflection Refresh​
On the Reflection Refresh page, set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed.   
  
  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh, default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Never expire**  | Select to prevent Reflections from expiring, default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata​
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


## Updating a Snowflake Source​
To update a Snowflake source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Snowflake as a Source.
  4. Click **Save**.


## Deleting a Snowflake Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Snowflake source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Upgrading from Dremio Hub's Community Snowflake Plugin​
Removing a Snowflake source will drop all tables in the source. If you have any Reflections configured on tables or table-level ACLs (customized privileges) in your Snowflake sources, copy the details of those items before you remove any sources. After upgrading and re-adding your sources, you will need to recreate those Reflections and ACLs.  
  
Views are not affected by removing and re-adding Snowflake sources, provided the sources are re-added with the same names.
The community Snowflake plugin from Dremio Hub is not compatible with Dremio version 23.0 and later. You should use Dremio version 23.1 or later if you have Snowflake sources because it comes with an official Snowflake plugin.
If you are upgrading an older version of Dremio to version 23.1 or later, you must do the following:
  1. Note the details of any Reflections and ACLs configured on tables in Snowflake sources.
  2. Remove your Snowflake sources from Dremio.
  3. Remove the community Snowflake plugin and the existing Snowflake JDBC driver.
  4. Upgrade Dremio to version 23.1 or later.
  5. Add your Snowflake sources to Dremio with the same names.
  6. Recreate any table-level Reflections and ACLs on your Snowflake sources.


## Predicate Pushdowns​
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`||`, AND, OR  
`+`, `-`, `/`, `*`  
`<=`, `<`, `>`, `>=`, `=`, `<>`, `!=`  
ABS  
ADD_MONTHS  
AVG  
BETWEEN  
CASE  
CAST  
CEIL  
CEILING  
CHARACTER_LENGTH  
CHAR_LENGTH  
COALESCE  
CONCAT  
COUNT  
COUNT_DISTINCT  
COUNT_DISTINCT_MULTI  
COUNT_FUNCTIONS  
COUNT_MULTI  
COUNT_STAR  
DATE_ADD  
DATE_SUB  
DATE_TRUNC  
DATE_TRUNC_DAY  
DATE_TRUNC_HOUR  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
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
MEDIAN  
MIN  
MOD  
NOT  
PERCENT_CONT  
PERCENT_DISC  
PERCENT_RANK  
POSITION  
REGEXP_LIKE  
REPLACE  
REVERSE  
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

## Running Queries Directly on Snowflake Through Dremio​
Dremio users can run pass queries through Dremio to run on Snowflake. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
Was this page helpful?
[Previous SAP HANA](/data-sources/databases/sap-hana)[Next Teradata](/data-sources/databases/teradata)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SAP HANA](/data-sources/databases/sap-hana)[Next Teradata](/data-sources/databases/teradata)
