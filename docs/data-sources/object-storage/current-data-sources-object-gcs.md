---
url: /data-sources/object/gcs
slug: /data-sources/object/gcs
title: "Google Cloud Storage (GCS) | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.266039625
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Object Storage](/data-sources/object)
  * Google Cloud Storage (GCS)

Version: current [26.x]
On this page
# Google Cloud Storage (GCS)
Dremio allows for integration with environments using the Google Cloud Storage (GCS) web service for storing data. Configuration of this source allows for direct access to GCS data through the Dremio interface.
## Configuring GCS as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Object Storage** , select **Google Cloud Storage**.


### General​
The following options are available from the _General_ tab:
**Name** : Provide a name to identify the GCS data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
**Google Project Id** : The specific ID for your GCS project. This can be found in the **Project info** pane at the top-left of your screen when at the Home page.
**Authentication**
Choose the authentication method:
  * Service Account Keys
    * Client Email: Provide the email address associated with the GCS service account.
    * Client ID: Provide the client ID for your key pair. The value is found by following the steps to create a service account key.
    * Private Key ID: Provide the key ID for your key pair. The value is found by following the steps to create a service account key.
    * Private Key: Choose a method for providing the private key for your key pair. The value is found by following the steps to create a service account key.
      * Dremio: Provide the private key in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored private key using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the private key, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the private key secret reference in the required format.
  * Automatic/Service Account: If you are currently running Dremio on a Google Compute instance, Dremio uses the active service account for your GCS data source and does not require any additional information to integrate with your data.


#### Creating Service Account Keys​
In order to use Dremio to access your Google Cloud Storage source, you need to first identify the service account. This is done by creating public/private key pairs. When creating service account keys, the public portion is stored on Google Cloud, while the private portion is made available to you for entry on Dremio.
The steps below outline the most simple method of creating a service account key.
  1. From the Google Cloud Console, navigate to the Service Accounts page.
  2. Select the desired project.
  3. Click on the email address of the service account that you'll be creating a key for.
  4. Click on the _Keys_ tab.
  5. Click the **Add Key** drop-down menu and then select **Create new key**.
  6. Select **JSON** as the **Key Type** and then click **Create**.


Your browser then downloads a service account key file. It should look similar to the example below:
Example service account key file

```
{  
  "type": "service_account",  
  "project_id": "project-id",  
  "private_key_id": "key-id",  
  "private_key": "-----BEGIN PRIVATE KEY-----\nprivate-key\n-----END PRIVATE KEY-----\n",  
  "client_email": "service-account-email",  
  "client_id": "client-id",  
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",  
  "token_uri": "https://accounts.google.com/o/oauth2/token",  
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",  
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-email"  
}  

```

Copy and paste each value from this file to the corresponding fields on the Dremio interface.
For additional methods of creating a key (e.g., `gcloud` tool, REST APIs, etc.), 
### Advanced Options​
The following settings control more advanced functionalities in Dremio.  
| Field  | Description  |  
| --- | --- |  
| Root Path  | The root path for the GCS source.  |  
| Properties  | Additional connection properties, consisting of the property and its specified value.  |  
| Whitelisted buckets  | A list of buckets to whitelist, or allow access to.  |  
| Cache Options  |   |  
| Enable local caching when possible  | Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture) for details.  |  
| Max percent of total available cache space to use when possible  | Sets the allowable amount of local caching, based on percentage. Only the percent specified of the cached files will be stored locally. By default, this is set to 100.  |  
### Reflection Refresh​
This tab controls the frequency of Reflection refreshes or the timespan for expiration for any queries performed using this data source.  
| Field  | Description  |  
| --- | --- |  
| Never refresh  | Prevents any query Reflections associated with this source from refreshing.  |  
| Refresh every  | Sets the time interval by which Reflections for this source are refreshed. This may be set to hours, days, and weeks.  |  
| Never expire  | Prevents any query Reflections associated with this source from expiring.  |  
| Expire after  | Sets the time after a Reflection is created that it then expires and can no longer be used for queries. This may be set to hours, days, and weeks.  |  
### Metadata​
This tab offers settings that control how dataset details are fetched and refreshed.  
| Field  | Description  |  
| --- | --- |  
| Dataset Handling  |   |  
| Remove dataset definitions if underlying data is unavailable  | If this box is not checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.  |  
| Automatically format files into tables when users issue queries  | If this box is checked and a query runs against the un-promoted table/folder, Dremio automatically promotes using default options. If you have CSV files, especially with non-default options, it might be useful to not check this box.  |  
| Metadata Refresh  |   |  
| Dataset Discovery  | Specifies the refresh interval for top-level source object names, such as database and table names. This is a lightweight operation.  
Fetch every. Specifies the time interval by which Dremio fetches object names. This can be set by minutes, hours, days, and weeks.  |  
| Dataset Details  | Specifies the metadata that Dremio needs for query planning, such as information regarding fields, types, shards, statistics, and locality.  
  
Fetch mode. Restricts when metadata is retrieved.  
Only Queried Datasets. Dremio updates metadata details for previously-queried objects in a source. This mode increases query performance as it requires less work to be done at query time for these datasets.  
All Datasets (deprecated). Dremio updates the details for all datasets in a source. This mode increases query performance as less work is needed to be done at the time of query.  
Fetch every. Specifies the time interval by which metadata is fetched. This can be set by minutes, hours, days, and weeks.  
Expire after. Specifies the timespan for when dataset details expire after a dataset is queried. This can be set by minutes, hours, days, and weeks.  |  
### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a GCS Source​
To update a GCS source:
  1. On the Datasets page, under **Object Storage** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring GCS as a Source.
  4. Click **Save**.


## Deleting a GCS Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a GCS source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Object Storage** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous Azure Storage](/data-sources/object/azure-storage)[Next HDFS](/data-sources/object/hdfs)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Azure Storage](/data-sources/object/azure-storage)[Next HDFS](/data-sources/object/hdfs)
!%20%7C%20Dremio%20Documentation&_biz_n=102&rnd=530049&cdn_o=a&_biz_z=1777950367729)
