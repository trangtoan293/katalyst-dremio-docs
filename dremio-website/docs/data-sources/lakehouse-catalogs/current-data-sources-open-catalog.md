---
url: /data-sources/open-catalog
title: "Open Catalog | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64048.38709575
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * Open Catalog

Version: current [26.x]
On this page
# Open Catalog Enterprise
Dremio's built-in lakehouse catalog is built on [automates data maintenance operations](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance) to maximize query performance. Key features include:
  * **Iceberg REST compatibility** : Read and write from the Open Catalog using any engine or framework compatible with the Iceberg REST API. For example, use Spark or Flink to ingest data into the catalog, and then use Dremio to curate and serve data products built on that data.
  * **Role-Based Access Control and Fine-Grained Access Control** : Secure data using [Role-Based Access Control (RBAC) privileges](/security/rbac/privileges) and create [row filters and column masks](/data-products/govern/row-column-policies-udf) to ensure users only access the data they need. For example, create a column mask to obfuscate credit card numbers or create a row filter on your employee details table that only returns rows with employees in your region.
  * **Automated table maintenance** : Open Catalog [automates Iceberg maintenance operations](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance) like compaction and vacuum, which maximizes query performance, minimizes storage costs, and eliminates the need to run manual data maintenance. Open Catalog also simplifies Iceberg table management and eliminates the risk of poor performance from suboptimal data layouts with support for Iceberg clustering keys.
  * **Enable data analysts** : Open Catalog is fully compatible with Dremio's built-in data product capabilities, including semantic search (use natural language to discover AI-ready data products), descriptions (use built-in descriptions and labels to understand how to use data products to answer business questions), and lineage (use lineage graphs to understand how data products are derived and transformed and assess the impact of changes on downstream datasets).


This page provides instructions for configuring the Open Catalog. If you would like to connect to Open Catalogs deployed in other Dremio instances, see [Open Catalog (External)](/data-sources/lakehouse-catalogs/open-catalog-external).
## Prerequisites[​](/data-sources/open-catalog#prerequisites "Direct link to Prerequisites")
Before you configure Open Catalog, make sure you do the following:
  * Configure access to your storage provider, as described in [Configure Storage Access](/data-sources/open-catalog#configure-storage-access).
  * Configure the settings of your storage provider in Dremio's Helm chart, as described in [Configuring Storage for the Open Catalog](/deploy-dremio/configuring-kubernetes#configuring-storage-for-the-open-catalog).


These configurations are required to enable support for vended credentials and to allow access to the table metadata necessary for Iceberg table operations.
## Configure the Open Catalog[​](/data-sources/open-catalog#configure-the-open-catalog "Direct link to Configure the Open Catalog")
To configure Open Catalog:
  * When creating the first Open Catalog, select **Add an Open Catalog**. Add a **Name** for the catalog. This name is immutable after the catalog has been created.
  * When configuring an existing Open Catalog, right-click on your catalog and select **Settings** from the dropdown.


### Storage[​](/data-sources/open-catalog#storage "Direct link to Storage")
  1. The **Default storage URI** field displays the default storage location you configured in [Dremio's Helm chart](/deploy-dremio/configuring-kubernetes).
  2. Use the **Storage access** field to configure your preferred authentication method. Open Catalog supports two types of credentials for authentication:
     * **Use credential vending (Recommended)** : When credential vending is enabled, the catalog issues temporary, scoped credentials to the query engine on demand, reducing the risk of unauthorized data access compared to long-lived master credentials.
     * **Use master storage credentials** : The credentials authenticate access to all storage URIs within this catalog. These credentials ensure all resources are accessible through a single authentication method. This should be used if STS is unavailable or the vended credentials mechanism is disabled. Select the object storage provider that hosts the location specified in the **Default storage URI** field:
     * **AWS** – Select **AWS** for Amazon S3 and S3-compatible storage. You can refer to the Dremio documentation for connecting to [Amazon S3](/data-sources/object/s3#configuring-amazon-s3-as-a-source), which is also applicable here. When selecting to assume an IAM role, ensure that the [role policy grants access](/data-sources/open-catalog#configure-storage-access) to the bucket or folder specified in the **Default storage URI** field.
     * **Azure** – Select **Azure** for Azure Blob Storage. You can refer to the Dremio documentation for connecting to [Azure Storage](/data-sources/object/azure-storage#configuring-azure-storage-as-a-source), which is also applicable here.
     * **Google Cloud Storage** – Select **Google** for Google Cloud Storage (GCS). You can refer to the Dremio documentation for connecting to [GCS](/data-sources/object/gcs#configuring-gcs-as-a-source), which is also applicable here.
  3. Enter any required storage connection properties in the **Connection Properties** field. Refer to the Advanced Options section for your storage provider (Amazon S3, Azure, or GCS) for available properties.


### Advanced Options[​](/data-sources/open-catalog#advanced-options "Direct link to Advanced Options")
To set advanced options:
  1. Under **Cache Options** , review the following table and edit the options to meet your needs.  
| Cache Option  | Description  |  
| --- | --- |  
| **Enable local caching when possible**  | Selected by default. Along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture#cloud-columnar-cache) for details.  |  
| **Max percent of total available cache space to use when possible**  | Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter a percentage in the value field or use the arrows to the far right to adjust the percentage.  |  
  2. Under **Table maintenance** , manage settings for [automated table maintenance operations](/developer/data-formats/apache-iceberg/table-maintenance-optimization/automated-maintenance):
     * **Enable auto optimization** : Compacts small files into larger files. Clusters data if Iceberg clustering keys are set on the table.
     * **Enable table cleanup** : Deletes expired snapshots and orphaned metadata files.


### Reflection Refresh[​](/data-sources/open-catalog#reflection-refresh "Direct link to Reflection Refresh")
You can set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed. See the following options:  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh. The default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days, or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Set refresh schedule**  | Specify the daily or weekly schedule.  |  
| **Never expire**  | Select to prevent Reflections from expiring. The default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days, or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata[​](/data-sources/open-catalog#metadata "Direct link to Metadata")
Specifying metadata options is handled with the following settings:
#### Dataset Handling[​](/data-sources/open-catalog#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if the underlying data is unavailable (default).
  * If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/open-catalog#metadata-refresh "Direct link to Metadata Refresh")
These are the optional **Metadata Refresh** parameters:
  * **Dataset Discovery** : The refresh interval for fetching top-level source object names, such as databases and tables. Set the time interval using this parameter.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch every**  | You can choose to set the frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.  |  
  * **Dataset Details** : The metadata that Dremio needs for query planning, such as information needed for fields, types, shards, statistics, and locality. These are the parameters to fetch the dataset information.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch mode**  | You can choose to fetch only from queried datasets. Dremio updates details for previously queried objects in a source. By default, this is set to **Only Queried Datasets**.  |  
| **Fetch every**  | You can choose to set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.  |  
| **Expire after**  | You can choose to set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.  |  


### Privileges[​](/data-sources/open-catalog#privileges "Direct link to Privileges")
You have the option to grant privileges to specific users or roles. See [Access Control](/security/rbac) for additional information about privileges.
To grant access to a user or role:
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Configure Storage Access[​](/data-sources/open-catalog#configure-storage-access "Direct link to Configure Storage Access")
To configure access to storage, select your storage provider below and follow the steps:
  * Amazon S3
  * S3-compatible
  * Azure Storage
  * Google Cloud Storage


### S3 and STS Access via IAM Role (Preferred)[​](/data-sources/open-catalog#s3-and-sts-access-via-iam-role-preferred "Direct link to S3 and STS Access via IAM Role \(Preferred\)")
  1. Create an Identity and Access Management (IAM) user or use an existing IAM user for Open Catalog.
  2. Create an IAM policy that grants access to your S3 location. For example:
Example of a policy

```
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Effect": "Allow",  
      "Action": [  
        "s3:PutObject",  
        "s3:GetObject",  
        "s3:GetObjectVersion",  
        "s3:DeleteObject",  
        "s3:DeleteObjectVersion"  
      ],  
      "Resource": "arn:aws:s3:::<my_bucket>/*"  
    },  
    {  
      "Effect": "Allow",  
      "Action": [  
        "s3:ListBucket",  
        "s3:GetBucketLocation"  
      ],  
      "Resource": "arn:aws:s3:::<my_bucket>",  
      "Condition": {  
        "StringLike": {  
          "s3:prefix": [  
            "*"  
          ]  
        }  
      }  
    }  
  ]  
}  

```

  3. Create an IAM role to grant privileges to the S3 location.
    1. In your AWS console, select **Create Role**.
    2. Enter an **externalId**. For example, `my_catalog_external_id`.
    3. Attach the policy created in the previous step and create the role.
  4. Create IAM user permissions to access the bucket via STS:
The `sts:AssumeRole` permission is required for Open Catalog to function with vended credentials, as it relies on the STS temporary token to perform these validations.
    1. Select the IAM role created in the previous step.
    2. Edit the trust policy and add the following:
Trust policy

```
{  
  "Version": "2012-10-17",  
  "Statement": [  
    {  
      "Sid": "",  
      "Effect": "Allow",  
      "Principal": {  
        "AWS": "<dremio_catalog_user_arn>"  
      },  
      "Action": "sts:AssumeRole",  
      "Condition": {  
        "StringEquals": {  
          "sts:ExternalId": "<dremio_catalog_external_id>"  
        }  
      }  
    }  
  ]  
}  

```

Replace the following values with the ones obtained in the previous steps:
       * ``dremio_catalog_user_arn`` - The IAM user that was created in the first step.
       * ``dremio_catalog_external_id`` - The external ID that was created in the third step.


### S3 and STS Access via Access Key[​](/data-sources/open-catalog#s3-and-sts-access-via-access-key "Direct link to S3 and STS Access via Access Key")
  1. In the Dremio console, select **Use master storage credentials** when adding Open Catalog.
  2. The access keys must have permissions to access the bucket and the STS server.
  3. Create a Kubernetes secret named `catalog-server-s3-storage-creds` to access the configured location. Here is an example for S3 using an access key and secret key:
Run kubectl to create the Kubernetes secret

```
export AWS_ACCESS_KEY_ID=<username>  
export AWS_SECRET_ACCESS_KEY=<password>  
kubectl create secret generic catalog-server-s3-storage-creds \  
--namespace $NAMESPACE \  
--from-literal awsAccessKeyId=$AWS_ACCESS_KEY_ID \  
--from-literal awsSecretAccessKey=$AWS_SECRET_ACCESS_KEY  

```



  1. The access keys must have permissions to access the bucket.
    1. To use [vended credentials](/data-sources/open-catalog#storage), the access key must also have access to an STS server.
    2. If you cannot leverage an STS server, when setting up the catalog for the first time in the Dremio console, you must select [master storage credentials](/data-sources/open-catalog#storage).
  2. Create a Kubernetes secret named `catalog-server-s3-storage-creds` to access the configured location. Here is an example for S3 using an access key and secret key:
Run kubectl to create the Kubernetes secret

```
export AWS_ACCESS_KEY_ID=<username>  
export AWS_SECRET_ACCESS_KEY=<password>  
kubectl create secret generic catalog-server-s3-storage-creds \  
--namespace $NAMESPACE \  
--from-literal awsAccessKeyId=$AWS_ACCESS_KEY_ID \  
--from-literal awsSecretAccessKey=$AWS_SECRET_ACCESS_KEY  

```

For S3-compatible storage providers (e.g., MinIO), the access keys should be the username and password.


  * Soft delete for blobs is not supported for Azure Storage accounts. Soft delete should be disabled to establish a successful connection.
  * Although not mandatory, Dremio recommends enabling **Hierarchical Namespace** when using Azure Data Lake Storage. For more information, see 


  1. Register an application and create secrets:
    1. Go to Azure Active Directory &gt; App Registrations.
    2. Register your app and take note of the **Client ID** and **Tenant ID**. For more information on these steps, refer to 
    3. Go to Certificates & Secrets &gt; New Client Secret.
    4. Create a secret and take note of the **Secret Value**.
    5. Create a Kubernetes secret named `catalog-server-azure-storage-creds` using the following command:
Run kubectl to create the Kubernetes secret

```
export AZURE_CLIENT_ID=<Azure App client id>  
export AZURE_CLIENT_SECRET=<App secret value>  
kubectl create secret generic catalog-server-azure-storage-creds \  
  --namespace $NAMESPACE \  
  --from-literal azureClientId=$AZURE_CLIENT_ID \  
  --from-literal azureClientSecret=$AZURE_CLIENT_SECRET  

```

  2. Create an Identity and Access Management (IAM) role in your Storage Account and set up the permission for your new application to access the storage account by following these steps:
    1. In the Azure console, go to your Storage Account and navigate to Access Control (IAM) &gt; Role assignments &gt; Add role assignment.
    2. Select the `Storage Blob Data Contributor` role and click **Next**.
    3. In the **Members** section, click **Select members** , search for your app registration from step 1, and click **Select**.
    4. Review and assign the roles.


  1. Go to your Google Cloud Platform (GCP), 
Permissions for the IAM role

```
storage.buckets.get  
storage.objects.create  
storage.objects.delete  
storage.objects.get  
storage.objects.list  

```

  2. Create the Kubernetes secret where Dremio is deployed using the following command:
Run kubectl to create the Kubernetes secret

```
kubectl create secret generic catalog-server-gcs-storage-creds --from-file=<filename>.json  

```



## Update an Open Catalog Source[​](/data-sources/open-catalog#update-an-open-catalog-source "Direct link to Update an Open Catalog Source")
To update an Open Catalog source:
  1. On the Datasets page, in the panel on the left, find the name of the Open Catalog source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the Source Settings dialog, edit the settings you wish to update. Dremio does not support updating the source name.
  4. Click **Save**. Once you have configured Open Catalog, the Catalog REST APIs are accessible via `http://{DREMIO_ADDRESS}:8181/api/catalog`, where `DREMIO_ADDRESS` is the IP address of your Dremio cluster.


## Multiple Storage Locations[​](/data-sources/open-catalog#multiple-storage-locations "Direct link to Multiple Storage Locations")
Open Catalog supports the simultaneous use of multiple storage locations for catalog objects. You can create folders in a single Open Catalog instance, each mapped to its own storage location. The path to each folder's storage **Uniform Resource Identifier (URI)** is configured during creation of the catalog folder. Each folder can:
  * Inherit its URI from its parent folder or the catalog itself.
  * Use a custom URI that points to another storage location.


The storage URI for any folder is the root path to the folder, starting with the last explicit URI in the path.
### Storage URI Example[​](/data-sources/open-catalog#storage-uri-example "Direct link to Storage URI Example")
The diagram below depicts an Open Catalog with two namespaces `NS1` and `NS2`, where their underlying folders, `NS3` and `NS5`, utilize custom storage URIs:
![](https://docs.dremio.com/images/open-catalog-storage-uris.png)
In this example:
  1. TBL1 is stored at ``Custom_URI_1`/NS3/TBL1`
  2. TBL2 is stored at ``Custom_URI_1`/NS3/TBL2`
  3. TBL3 is stored at ``Custom_URI_2`/NS5/NS6/TBL3`
  4. TBL4 is stored at ``Base_Storage_URI`/NS2/TBL4`


### Configure Storage[​](/data-sources/open-catalog#configure-storage "Direct link to Configure Storage")
A folder's storage URI must be a child path of one of the catalog-level storage URIs defined in the Helm chart. The `catalog.storage.location` parameter in the Helm chart should list only the common base URIs that will serve as roots for folder storage locations. See [Configuring Storage for the Open Catalog](/deploy-dremio/configuring-kubernetes#configuring-storage-for-the-open-catalog) for additional information.
### Configure Storage URIs[​](/data-sources/open-catalog#configure-storage-uris "Direct link to Configure Storage URIs")
  1. Select Open Catalog, then click **New Folder** in the top-right corner. Provide a name for the folder and its storage URI:
     * Select **Use inherited storage URI** to inherit the URI of the parent folder or top-level catalog, appended with this folder name.
     * Select **Use custom storage URI** to select a custom URI from the list contained in `catalog.storage.location`.
  2. Ensure that the storage credentials configured for the Open Catalog can access the object storage associated with each new folder.


Was this page helpful?
[Previous Manage Sources](/data-sources)[Next Connect to Open Catalog from Apache Spark](/data-sources/open-catalog/connecting-from-spark)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Manage Sources](/data-sources)[Next Connect to Open Catalog from Apache Spark](/data-sources/open-catalog/connecting-from-spark)
![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   

Allow All
###  Manage Consent Preferences
#### Functional Cookies
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
#### Performance Cookies
Performance Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
#### Targeting Cookies
Targeting Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
#### Strictly Necessary Cookies
Always Active
These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
Back Button
### Cookie List
Search Icon
Filter Icon
Clear
checkbox label label
Apply Cancel
Consent Leg.Interest
checkbox label label
checkbox label label
checkbox label label
Reject All Confirm My Choices
