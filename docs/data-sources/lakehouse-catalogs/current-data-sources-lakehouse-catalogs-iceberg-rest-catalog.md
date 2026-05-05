---
url: /data-sources/lakehouse-catalogs/iceberg-rest-catalog
slug: /data-sources/lakehouse-catalogs/iceberg-rest-catalog
title: "Iceberg REST Catalog | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64047.404129541
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * Iceberg REST Catalog

Version: current [26.x]
On this page
# Iceberg REST Catalog Enterprise
The Iceberg REST Catalog source allows you to connect to your Iceberg Metastores via the Iceberg REST API. This may require configuring specific Advanced Options to set up the correct authentication flows.
## Configuring an Iceberg REST Catalog Source​
To add an Iceberg REST Catalog source:
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Lakehouse Catalogs** , select **Iceberg REST Catalog Source**.
The New Iceberg REST Catalog Source dialog box appears, which contains the following tabs:
     * **General** : Create a name for your Iceberg REST Catalog source, specify the endpoint URI, and set the authentication Vended credentials (on by default).
     * **Advanced Options** : Use catalog properties and credentials to set up storage authentication and authorization.
     * **Reflection Refresh** : (Optional) Set a policy to control how often Reflections are refreshed and expired.
     * **Metadata** : (Optional) Specify dataset handling and metadata refresh.
     * **Privileges** : (Optional) Add privileges for users or roles.
Refer to the following sections for guidance on how to edit each tab.


### General​
To configure the source connection:
  1. For **Name** , enter a name for the source.
The name you enter must be unique in the organization. Also, consider a name that is easy for users to reference. This name cannot be edited once the source is created. The name cannot exceed 255 characters and must contain only the following characters: 0-9, A-Z, a-z, underscore(_), or hyphen (-)
  2. For **Endpoint URI** , specify the catalog service URI.
  3. By default, **Use vended credentials** is turned on. This allows Dremio to connect to the catalog and receive temporary credentials for the underlying storage location. When this setting is enabled, you don't need to add the storage authentication in **Advanced Options**.
If you experience errors using vended credentials, please turn the setting off and provide credentials via **Advanced Options** to establish a connection.
  4. (Optional) For **Allowed Namespaces** , add each namespace and check the option if you want to include their whole subtrees. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces.


### Advanced Options​
To set the advanced options:
  1. (Optional) For **Catalog Properties** and **Catalog Credentials** , you can manually provide the storage authentication if you choose to not use vended credentials.
Dremio supports Amazon S3 and Azure Storage as object storage services. For acceptable storage authentication configurations, see the following catalog properties and credentials for each service option.
**Amazon S3 Access Key**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `fs.s3a.aws.credentials.provider`  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  | Required field for a Iceberg REST Catalog source  |  
| credential  | `fs.s3a.access.key`  | ``your_access_key``  | AWS access key ID used by S3A file system. Omit for IAM role-based or provider-based authentication  |  
| credential  | `fs.s3a.secret.key`  | ``your_secret_key``  | AWS access key used by S3A file system. Omit for IAM role-based or provider-based authentication  |  
**Amazon S3 Assumed Role**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| property  | `fs.s3a.assumed.role.arn`  | `arn:aws:iam::*******:role/OrganizationAccountAccessRole`  | AWS ARN for the role to be assumed  |  
| property  | `fs.s3a.aws.credentials.provider`  | `com.dremio.plugins.s3.store.STSCredentialProviderV1`  | Required field for an Iceberg REST Catalog source  |  
| property  | `fs.s3a.assumed.role.credentials.provider `  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  | Use only if the credential provider is `AssumedRoleCredentialProvider`; lists credential providers to authenticate with the STS endpoint and retrieve short-lived role credentials  |  
**Azure Storage Shared Key**  
| Type  | Name  | Value  | Description  |  
| --- | --- | --- | --- |  
| credential  | `fs.azure.account.key`  | ``your_account_key``  | Storage account key  |  
  2. Under **Cache Options** , review the following table and edit the options to meet your needs.  
| Cache Options  | Description  |  
| --- | --- |  
| **Enable local caching when possible**  | Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture) for details.  |  
| **Max percent of total available cache space to use when possible**  | Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter in a percentage in the value field or use the arrows to the far right to adjust the percentage.  |  


### Reflection Refresh​
You can set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed. See the following options.  
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
You have the option to grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges.
To grant access to a user or role:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an Iceberg REST Catalog Source​
To update an Iceberg REST Catalog:
  1. On the Datasets page, under **Lakehouse Catalogs** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the Source Settings dialog, edit the settings you wish to update. Dremio does not support updating the source name.
  4. Click **Save**.


## Deleting an Iceberg REST Catalog Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Iceberg REST Catalog source:
  1. On the Datasets page, click **Sources** &gt; **Lakehouse Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Supported Configurations​
The list below contains supported configurations that have been tested with Dremio. The tables outline the parameters needed to connect to the various catalogs. These configurations can be adjusted into REST API calls using the `RESTCATALOG` source type and the `propertyList` and `secretPropertyList` property groups.
All the values below for URI, warehouse, and credentials are example values. These values will need to be changed based on your environment.
* * *
### Apache Polaris OSS Backed by S3​  
| UI Tab  | Field  | Value  |  
| --- | --- | --- |  
| General  | Endpoint URI  | `<http://localhost:8181/api/catalog>`  |  
| General  | Use vended credentials  | Unchecked  |  
| Advanced Options - Catalog Properties  | warehouse  | ``polaris_oss_catalog``  |  
| Advanced Options - Catalog Properties  | scope  | `PRINCIPAL_ROLE:ALL`  |  
| Advanced Options - Catalog Properties  | fs.s3a.aws.credentials.provider  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  |  
| Advanced Options - Catalog Credentials  | fs.s3a.access.key  | ``s3AccessKey``  |  
| Advanced Options - Catalog Credentials  | fs.s3a.secret.key  | ``s3SecretKey``  |  
| Advanced Options - Catalog Credentials  | credential  | `<client_id:client_secret>`  |  
* * *
### Nessie Catalog Backed by S3​  
| UI Tab  | Field  | Value  |  
| --- | --- | --- |  
| General  | Endpoint URI  | `<http://127.0.0.1:19120/iceberg/>`  |  
| General  | Use vended credentials  | Unchecked  |  
| Advanced Options - Catalog Properties  | warehouse  | `<s3://mybucket/restcatalog/>`  |  
| Advanced Options - Catalog Properties  | fs.s3a.aws.credentials.provider  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  |  
| Advanced Options - Catalog Credentials  | fs.s3a.access.key  | ``s3AccessKey``  |  
| Advanced Options - Catalog Credentials  | fs.s3a.secret.key  | ``s3SecretKey``  |  
* * *
### AWS Glue Iceberg REST Catalog​
Please replace `region` uses with a valid AWS region where you are working with the Glue Iceberg REST endpoint (for example, `us-west-2`). You will also need your `AWS account number` and the name of the `Table Bucket` being used.  
| UI Tab  | Field  | Value  |  
| --- | --- | --- |  
| General  | Endpoint URI  | `<https://glue.region.amazonaws.com/iceberg>`  |  
| General  | Use vended credentials  | Unchecked  |  
| Advanced Options - Catalog Properties  | warehouse  | `<accountnumber:s3tablescatalog/tablebucketname>`  |  
| Advanced Options - Catalog Properties  | rest.sigv4-enabled  | `true`  |  
| Advanced Options - Catalog Properties  | rest.signing-name  | `glue`  |  
| Advanced Options - Catalog Properties  | rest.signing-region  | ``region``  |  
| Advanced Options - Catalog Properties  | fs.s3a.aws.credentials.provider  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  |  
| Advanced Options - Catalog Properties  | dremio.bucket.discovery.enabled  | false  |  
| Advanced Options - Catalog Properties  | dremio.s3.region  | ``region``  |  
| Advanced Options - Catalog Properties  | fs.s3a.audit.enabled  | `false`  |  
| Advanced Options - Catalog Properties  | fs.s3a.create.file-status-check  | false  |  
| Advanced Options - Catalog Credentials  | rest.access-key-id  | ``s3AccessKey``  |  
| Advanced Options - Catalog Credentials  | rest.secret-access-key  | ``s3SecretKey``  |  
| Advanced Options - Catalog Credentials  | fs.s3a.access.key  | ``s3AccessKey``  |  
| Advanced Options - Catalog Credentials  | fs.s3a.secret.key  | ``s3SecretKey``  |  
* * *
### S3 Tables Iceberg REST Catalog​
Please replace `region` uses with a valid AWS region where you are working with the Glue Iceberg REST endpoint (for example, us-west-2). You will also need your `AWS account number` and the name of the `Table Bucket` being used.  
| UI Tab  | Field  | Value  |  
| --- | --- | --- |  
| General  | Endpoint URI  | `<https://s3tables.region.amazonaws.com/iceberg>`  |  
| General  | Use vended credentials  | Unchecked  |  
| Advanced Options - Catalog Properties  | warehouse  | `<arn:aws:s3tables:region:accountnumber:bucket/tablebucketname>`  |  
| Advanced Options - Catalog Properties  | rest.sigv4-enabled  | `true`  |  
| Advanced Options - Catalog Properties  | rest.signing-name  | `s3tables`  |  
| Advanced Options - Catalog Properties  | rest.signing-region  | ``region``  |  
| Advanced Options - Catalog Properties  | fs.s3a.aws.credentials.provider  | `org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider`  |  
| Advanced Options - Catalog Properties  | dremio.bucket.discovery.enabled  | false  |  
| Advanced Options - Catalog Properties  | dremio.s3.region  | ``region``  |  
| Advanced Options - Catalog Properties  | fs.s3a.audit.enabled  | `false`  |  
| Advanced Options - Catalog Properties  | fs.s3a.create.file-status-check  | `false`  |  
| Advanced Options - Catalog Properties  | fs.s3a.requester.pays.enabled  | `false`  |  
| Advanced Options - Catalog Credentials  | rest.access-key-id  | ``s3AccessKey``  |  
| Advanced Options - Catalog Credentials  | rest.secret-access-key  | ``s3SecretKey``  |  
| Advanced Options - Catalog Credentials  | fs.s3a.access.key  | ``s3AccessKey``  |  
| Advanced Options - Catalog Credentials  | fs.s3a.secret.key  | ``s3SecretKey``  |  
* * *
### Tableflow Catalog backed by AWS​
Note that namespaces for the Tableflow Catalog are the Kafka clusters within your environment.  
| UI Tab  | Field  | Value  |  
| --- | --- | --- |  
| General  | Endpoint URI  | `<https://tableflow.us-west-2.aws.confluent.cloud/iceberg/catalog/organizations/f140b886-a3e9-4e1d-ba9d-5b96b8bf4ea8/environments/env-7kn93o>`  |  
| General  | Allowed Namespaces  | ``kafkaClusterID``  |  
| General  | Allowed Namespaces include their whole subtrees  | Unchecked  |  
| General  | Use vended credentials  | Checked  |  
| Advanced Options - Catalog Credentials  | credential  | `<api_key:secret_key>`  |  
Was this page helpful?
[Previous Unity Catalog](/data-sources/lakehouse-catalogs/unity)[Next Hive](/data-sources/lakehouse-catalogs/hive)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Unity Catalog](/data-sources/lakehouse-catalogs/unity)[Next Hive](/data-sources/lakehouse-catalogs/hive)
!
