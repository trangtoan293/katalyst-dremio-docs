---
url: /data-sources/databases/google-bigquery
title: "Google BigQuery | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.320204958
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Google BigQuery

Version: current [26.x]
On this page
# Google BigQuery Enterprise
Dremio supports connecting to Google BigQuery as an external source. The connector uses Google service account keys for authentication. To learn more about creating and managing service account keys, see 
## Requirements[​](/data-sources/databases/google-bigquery#requirements "Direct link to Requirements")
To connect to Google BigQuery, you need:
  * Google BigQuery
  * Source configuration for authentication


## User Impersonation[​](/data-sources/databases/google-bigquery#user-impersonation "Direct link to User Impersonation")
Dremio supports authentication using Google Workforce Identity Pool impersonation, which allows external identities to securely access BigQuery datasets without requiring a dedicated Google service account for each user.
Reflections are not supported on data sources with user impersonation enabled to ensure that all security and governance policies defined in the underlying data source are enforced. Reflections created prior to enabling user impersonation must be manually dropped, as they will fail to refresh once impersonation is active.
### Prerequisites[​](/data-sources/databases/google-bigquery#prerequisites "Direct link to Prerequisites")
Before configuring a Bigquery source with user impersonation, ensure you have:
  * Access to a Google Cloud Organization
  * An Organization Admin role (`roles/iam.organizationAdmin`) or Workforce Pool Admin role (`roles/iam.workforcePoolAdmin`) within that organization


### Configure Google Workforce Identity Pool[​](/data-sources/databases/google-bigquery#configure-google-workforce-identity-pool "Direct link to Configure Google Workforce Identity Pool")
In the following steps, you will configure Google Cloud to recognize and verify assertions (signed JWTs) sent from Dremio. Google uses Dremio’s public key to validate the digital signatures of these assertions. Creating a Workforce Identity Pool establishes trust between Google Cloud and Dremio for OAuth-based authentication.
To allow federated identities from your Workforce Identity Pool to execute BigQuery jobs, you must assign the BigQuery Job User role (`roles/bigquery.jobUser`) at the project level. This allows federated users to submit and manage their own query and load jobs within the project.
To set up your Google Workforce Identity Pool:
  1. Run the following command to create a Workforce Identity Pool, replacing `<your-organization-id>` with your Google Cloud Organization ID:
Create a Workforce Identity Pool

```
gcloud iam workforce-pools create my-org-workforce-pool \  
     --organization=organizations/<your-organization-id> \  
     --display-name="My Organization Workforce Pool" \  
     --description="Workforce Identity Pool for my organization"   

```

Note the value of `my-org-workforce-pool` as this will be your `your-workforce-pool-id`.
  2. Obtain Dremio’s public JWKS and Dremio’s issuer from the BigQuery source configuration in Dremio. Retrieve these values by performing one of the following:
a. Click the Workforce Identity Federation button in the Dremio console.
b. Run these API calls:
    1. Retrieve Dremio’s public JWKS by sending a GET request:
Retrieve Dremio’s public JWKS

```
/v3/external-oauth/discovery/jwks  

```

Save the response as `public_jwk_set.json`. This file contains Dremio’s public key set, which Google will use to verify signed JWTs.
    2. Retrieve Dremio’s issuer by sending a GET request:
Retrieve Dremio’s issuer

```
/v3/external-oauth/discovery/jwt-issuer  

```

Note the issuer value returned. You’ll need it when configuring Google Cloud to establish the trust relationship.
  3. Run following bash command, replacing ``Dremio_issuer_value`` with the value obtained in the previous step:
Create a Workforce identity provider

```
gcloud iam workforce-pools providers create-oidc my-workforce-provider \  
      --workforce-pool=my-org-workforce-pool \  
      --display-name='My Dremio Provider' \  
      --description='Dremio Provider for BQ impersonation' \  
      --issuer-uri='<Dremio_issuer_value>' \  
      --client-id='dremio-bq-client-id' \  
      --web-sso-response-type="id-token" \  
      --web-sso-assertion-claims-behavior="only-id-token-claims" \  
      --attribute-mapping="google.subject=assertion.sub" \  
      --jwk-json-path=./public_jwk_set.json \  
      --detailed-audit-logging \  
      --location=global \  
      --organization=organizations/`<your-organization-id>`  

```
  
| Parameter  | Description  |  
| --- | --- |  
| `my-workforce-provider`  | The ID you assign to your Workforce identity provider. Note this value for future reference as `<your-workforce-provider-id>`.  |  
| `workforce-pool=my-org-workforce-pool`  | Specifies the Workforce Identity Pool this provider belong to.  |  
| `display-name='My Dremio Provider'`  | A human-readable name for the provider, as it appears in the Google Cloud Console.  |  
| `description='Dremio Provider for BQ impersonation'`  | A short description of the provider’s purpose, for example, used for Dremio ↔ BigQuery impersonation.  |  
| `issuer-uri='https://internal-issuer.dremio.com'`  | The issuer (iss) claim expected in the JWT signed by Dremio. This should uniquely identify your Dremio instance or the asserting entity. It doesn’t need to be publicly resolvable, but it must be consistent.  |  
| `client-id='dremio-bq-client-id'`  | The aud (audience) claim that Google expects in the JWT. For this workflow, this typically represent the Dremio client or the Google resource.  |  
| `web-sso-response-type="id-token"`  | Specifies the OIDC response type for SSO flows. "id-token" means the Dremio returns an ID token directly.  |  
| `web-sso-assertion-claims-behavior="only-id-token-claims"`  | Controls which claims are included in the assertion. "only-id-token-claims" limits it to claims present in the ID token.  |  
| `attribute-mapping="google.subject=assertion.sub"`  | Maps the sub (subject) claim from Dremio’s JWT to the google.subject attribute (required).  |  
| `jwk-json-path=./public_jwk_set.json`  | Path to Dremio’s public JWK file. Google uses this to verify Dremio’s JWT signatures.  |  
| `detailed-audit-logging`  | Enables detailed logging in Cloud Logging — recommended for troubleshooting.  |  
| `location=global`  | Sets the Workforce Identity Pool resource location (typically global).  |  
| `organization=organizations/<your-organization-id>`  | Specifies your Google Cloud Organization ID.  |  
  4. Run the following command to grant IAM policy binding for BigQuery job execution, replacing `<project-id>` with the Google Cloud project where your BigQuery data resides:
Grant IAM policy binding for BigQuery job execution

```
gcloud projects add-iam-policy-binding <project-id> \  
     --role="roles/bigquery.jobUser" \  
     --member='principalSet://iam.googleapis.com/locations/global/workforcePools/my-org-workforce-pool/*'  

```

If you are using Google Groups mapping, replace `<your-gcp-access-group>` with the mapped group name (for example, "BigQueryUsers"):
Grant IAM policy binding for BigQuery job execution with Google groups mapping

```
gcloud projects add-iam-policy-binding <project-id> \  
      --role="roles/bigquery.jobUser" \  
      --member="principalSet://iam.googleapis.com/locations/global/workforcePools/my-org-workforce-pool/group/your-gcp-access-group"  

```



## Dremio Configuration[​](/data-sources/databases/google-bigquery#dremio-configuration "Direct link to Dremio Configuration")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select the source.
The new source dialog box appears, which contains the following tabs:
     * **General** : Create a name for your database, specify the connection details, and set the authentication.
     * **Advanced Options** : (Optional) Set the advanced configuration options for your database.
     * **Reflection Refresh** : (Optional) Set a policy to control how often Reflections are refreshed and expired.
     * **Metadata** : (Optional) Specify dataset handling and metadata refresh.
     * **Privileges** : (Optional) Add privileges for users or roles.
Refer to the following sections for guidance on how to edit each tab.


### General[​](/data-sources/databases/google-bigquery#general "Direct link to General")
To configure the source connection:
  1. For **Name** , enter the name to identify the database in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.


  1. For **Host** , enter the hostname or IP address for the Google BigQuery source.
  2. For **Port** , enter the Google BigQuery port number. The default port is `443`.
  3. For **Project ID** , specify the Google Cloud Project ID that contains your BigQuery datasets (for example, `<your-bigquery-project-id>`).
  4. For **Authentication** , choose between **Service Account** or **Workforce Identity Federation**.
a. If you choose **Service Account** , complete the following:
    1. For **Client Email** , enter the client email.
    2. For **Service Account Key** , choose an authentication method:
       * **Dremio** : Provide the database password in plain text. Dremio stores the password.
       * **Azure Key Vault** : Provide the URI for the Azure Key Vault secret that stores the Vertica password. The URI format is `https://`vault_name`.vault.azure.net/secrets/`secret_name`` (for example, 
To use Azure Key Vault as your application secret store, you must: Deploy Dremio on Azure. Complete the Requirements for Authenticating with Azure Key Vault. It is not necessary to restart the Dremio coordinator when you rotate secrets stored in Azure Key Vault. Read Requirements for Secrets Rotation for more information.
       * **AWS Secrets Manager** : Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS console or command line tools.
       * **HashiCorp Vault** : Choose the HashiCorp secrets engine you're using from the dropdown menu and enter the secret reference for the password in the correct format in the provided field.
b. If you choose **Workforce Identity Federation** , complete the following:
    1. For **Default User** , enter the default user identifier that Dremio will use to fetch metadata and execute reflection jobs. This user must have sufficient privileges to perform these operations. Example: 
    2. For **Audience** , enter the client identifier used by Dremio during authentication (e.g., `value: dremio-bq-client-id`). This must exactly match the `--client-id` from Step 2 of prerequisites setup.
    3. For **Client ID** , enter the client identifier used by Dremio during authentication (e.g., `value: dremio-bq-client-id`). This must exactly match the `--client-id` from Step 2 of the prerequisites setup. In this configuration, the client ID and audience values are the same.


Sources containing a large number of files or tables may take longer to be added. During this time, the source name is grayed out and shows a spinner icon, indicating the source is being added. Once complete, the source becomes accessible.
### Advanced Options[​](/data-sources/databases/google-bigquery#advanced-options "Direct link to Advanced Options")
Set the advanced configuration options for your database:
  * **Record fetch size** : Number of records to fetch at once. Set to `0` to have Dremio automatically decide. By default, this is set to `10`.
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to `8`.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to `60`.
  * **Query timeout (s)** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Enable external authorization plugin** : When enabled, authorizes an external plugin.
  * **Connection Properties** : Connection properties and values for the data source.


### Reflection Refresh[​](/data-sources/databases/google-bigquery#reflection-refresh "Direct link to Reflection Refresh")
Set the policy that controls how often Reflections are refreshed or expired, using the following options:
  * **Never refresh** : Select to prevent automatic Reflection refresh; otherwise, the default is to refresh automatically.
  * **Refresh every** : How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.
  * **Set refresh schedule** : Specify the daily or weekly schedule.
  * **Never expire** : Select to prevent Reflections from expiring; otherwise, the default is to expire automatically after the time limit specified in **Expire after**.
  * **Expire after** : The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.


### Metadata[​](/data-sources/databases/google-bigquery#metadata "Direct link to Metadata")
Set the following metadata options:
  * **Remove dataset definitions if underlying data is unavailable** : Checked by default. If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.
  * **Data Discovery** : Set the time interval for fetching top-level source object names such as databases and tables. You can choose to set the **Fetch every** frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.
  * **Dataset Details** : The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality. Use these parameters to fetch or expire the metadata:
    * **Fetch mode** : Fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.
    * **Fetch every** : Set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.
    * **Expire after** : Set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.


### Privileges[​](/data-sources/databases/google-bigquery#privileges "Direct link to Privileges")
To grant privileges to specific users or roles:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


See [Access Control](/security/rbac) for additional information about privileges.
## Predicate Pushdowns[​](/data-sources/databases/google-bigquery#predicate-pushdowns "Direct link to Predicate Pushdowns")
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`*`, `+`, `-`, `/`, `%`  
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
`CEIL`  
`CEILING`  
`CHAR_LENGTH`  
`CHARACTER_LENGTH`  
`CONCAT`  
`COS`  
`COT`  
`DATE_ADD`  
`DATE_SUB`  
`DATE_TRUNC_DAY`  
`DATE_TRUNC_HOUR`  
`DATE_TRUNC_MINUTE`  
`DATE_TRUNC_MONTH`  
`DATE_TRUNC_YEAR`  
`DEGREES`  
`E`  
`EXP`  
`EXTRACT_DAY`  
`EXTRACT_DOW`  
`EXTRACT_DOY`  
`EXTRACT_HOUR`  
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
`MONTH`  
`PERCENT_CONT`  
`PERCENT_DISC`  
`PI`  
`POSITION`  
`POW`  
`POWER`  
`RADIANS`  
`RAND`  
`REPLACE`  
`REVERSE`  
`RIGHT`  
`ROUND`  
`RPAD`  
`RTRIM`  
`SIGN`  
`SIN`  
`SQRT`  
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
`TIMESTAMPADD_YEAR`  
`TIMESTAMPDIFF_DAY`  
`TIMESTAMPDIFF_HOUR`  
`TIMESTAMPDIFF_MINUTE`  
`TIMESTAMPDIFF_MONTH`  
`TIMESTAMPDIFF_QUARTER`  
`TIMESTAMPDIFF_SECOND`  
`TIMESTAMPDIFF_WEEK`  
`TIMESTAMPDIFF_YEAR`  
`TO_DATE`  
`TRIM`  
`TRUNC`  
`TRUNCATE`  
`UCASE`  
`UPPER`  
`YEAR`  

## Data Source Management[​](/data-sources/databases/google-bigquery#data-source-management "Direct link to Data Source Management")
### Updating the Source[​](/data-sources/databases/google-bigquery#updating-the-source "Direct link to Updating the Source")
To update the source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the dropdown.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name.
  4. Click **Save**.


### Deleting the Source[​](/data-sources/databases/google-bigquery#deleting-the-source "Direct link to Deleting the Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the `ADMIN` role can delete the source.
To delete the source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and click ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) to the right.
  3. From the dropdown, select **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


  * Deleting a source causes all downstream views that depend on objects in the source to break.
  * Sources containing a large number of files or tables may take longer to be removed. During this time, the source name is grayed out and shows a spinner icon, indicating the source is being removed. Once complete, the source disappears.


## Querying the Google BigQuery Source Directly[​](/data-sources/databases/google-bigquery#querying-the-google-bigquery-source-directly "Direct link to Querying the Google BigQuery Source Directly")
Dremio users can run pass queries through Dremio to run on your database. Doing so can sometimes decrease query execution times. For more information, see [Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries).
Was this page helpful?
[Previous Elasticsearch](/data-sources/databases/elasticsearch)[Next IBM Db2](/data-sources/databases/ibm-db2)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Elasticsearch](/data-sources/databases/elasticsearch)[Next IBM Db2](/data-sources/databases/ibm-db2)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Fdremio%2F&_biz_t=1777950359817&_biz_i=Dremio%20Cluster%20%7C%20Dremio%20Documentation&_biz_n=84&rnd=579102&cdn_o=a&_biz_z=1777950359888)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Fgoogle-bigquery%2F&_biz_t=1777950359888&_biz_i=Google%20BigQuery%20%7C%20Dremio%20Documentation&_biz_n=85&rnd=262062&cdn_o=a&_biz_z=1777950359888)
