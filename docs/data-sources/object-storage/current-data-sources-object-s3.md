---
url: /data-sources/object/s3
slug: /data-sources/object/s3
title: "Amazon S3 | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64000.598085458
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Object Storage](/data-sources/object)
  * Amazon S3

Version: current [26.x]
On this page
# Amazon S3
This topic provides information for configuring the Amazon S3 data source.
## Working with files stored in S3​
You can query files and folders stored in your S3 buckets. Dremio supports a number of different file formats. See [Formatting Data to a Table](/developer/data-formats/table) for more information.
Amazon S3 data sources added to projects default to using the Apache Parquet table format. Follow these steps to ensure that the default table format for new tables is Apache Iceberg:
  1. In Dremio, click the Amazon S3 data source.
  2. Click the gear icon in the top-right corner above the list of the data source's contents.
  3. On the Advanced Options page of the Edit Source dialog, select **ICEBERG** under **Default CTAS Format**.
  4. Click **Save**.


Amazon S3 data sources added to projects before Dremio 22 continue to use the Parquet table format for tables. For the SQL commands that you can use to create and query tables in such data sources, see [Tables](/reference/sql/commands/tables).
## Amazon Configuration​
Amazon configuration involves:
  * Providing AWS credentials
  * Providing IAM Policy requirements


### Amazon S3 Credentials​
To list your AWS account's S3 buckets as a source, you must provide your AWS credentials in the form of your access and secret keys. You can find instructions for creating these keys in 
AWS credentials are not necessary if you are accessing only public S3 buckets.
### Sample IAM Policy for Accessing S3​
The following sample IAM Policy shows the minimum policy requirements that allow Dremio to read and query S3.
Sample IAM policy for accessing Amazon S3

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Sid": "Stmt1554422960000",  
            "Effect": "Allow",  
            "Action": [  
                "s3:GetBucketLocation",  
                "s3:ListAllMyBuckets"  
            ],  
            "Resource": [  
                "arn:aws:s3:::*"  
            ]  
        },  
        {  
            "Sid": "Stmt1554423012000",  
            "Effect": "Allow",  
            "Action": [  
                "s3:ListBucket"  
            ],  
            "Resource": [  
                "arn:aws:s3:::BUCKET-NAME"  
            ]  
        },  
        {  
            "Sid": "Stmt1554423050000",  
            "Effect": "Allow",  
            "Action": [  
                "s3:GetObject"  
            ],  
            "Resource": [  
                "arn:aws:s3:::BUCKET-NAME/*"  
            ]  
        }  
    ]  
}  

```

### Sample IAM Policy for Writing to S3​
The following sample IAM Policy shows the minimum policy requirements that allows Dremio to write to S3.  
For example, to store Reflections on S3.
Sample IAM policy for writing to Amazon S3

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Effect": "Allow",  
            "Action": [  
                "s3:PutObject",  
                "s3:GetObject",  
                "s3:ListBucket",  
                "s3:DeleteObject"  
            ],  
            "Resource": [  
                "arn:aws:s3:::BUCKET-NAME",  
                "arn:aws:s3:::BUCKET-NAME/*"  
            ]  
        },  
        {  
            "Effect": "Allow",  
            "Action": [  
                "s3:ListAllMyBuckets",  
                "s3:GetBucketLocation"  
            ],  
            "Resource": "*"  
        }  
    ]  
}  

```

## Configuring Amazon S3 as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Object Storage** , select **Amazon S3**.


### General​
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Authentication​
Choose one of the following authentication methods:
  * AWS Access Key: All or allowed (if specified) buckets associated with this access key or IAM role to assume, if provided, will be available. See Advanced Options for whitelisted information.
    * Under **AWS Access Key** , enter the 
    * Under **AWS Access Secret** , provide the 
      * Dremio: Provide the access secret in plain text. Dremio stores the access secret.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored access set using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the access secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the access secret reference in the required format.
    * Under **IAM Role to Assume** , enter the 
  * EC2 Metadata: All or whitelisted (if specified) buckets associated with the IAM role attached to EC2 or IAM role to assume (if specified) will be available. See Advanced Options for whitelisted information.
    * Under **IAM Role to Assume** , enter the 
  * EKS Pod Identity: Dremio can access all S3 buckets linked to the IAM role associated with the Kubernetes service account or the assumed IAM role. If you specify certain buckets, only those will be available.
    * Under **IAM Role to Assume** , enter the 
  * AWS Profile: Dremio sources profile credentials from the specified AWS profile. For information on how to set up a configuration or credentials file for AWS, see AWS Custom Authentication.
    * Profile Name (Optional): The AWS profile name. If this is left blank, then the default profile will be used. For more information about using profiles in a credentials or configuration file, see AWS's documentation on 
  * No Authentication: Only the buckets provided under **Public Buckets** will be available.


The **Encrypt connection** option is enabled by default to encrypt the connection to S3. Clear the checkbox to disable encryption.
#### AWS Custom Authentication​
[AWS Glue](/data-sources/lakehouse-catalogs/aws-glue-catalog), S3, and [Amazon OpenSearch](/data-sources/databases/opensearch) sources allow Dremio to use your AWS profile to authenticate users accessing your AWS-hosted data.
This authentication is performed by selecting the **AWS Profile** option for a source. Dremio will use credentials from the selected profile in the credentials file to authenticate with the source. Multiple methods are available for authentication, such as an external process. However, such processes must be created and validated for security by the users themselves.
We recommend using supported and secure methods via the AWS SDK and AWS application to minimize the potential for security risks.
Users with methods of generating or retrieving credentials that may not be supported by the AWS SDK can still use the tool by using additional configurations to alter the SDK, such as using the `credential_process` setting in the `credentials` file. Again, additional options are available for authenticating users via AWS. For more details regarding the storage of configuration settings and credentials maintained by AWS SDK, read AWS's 
Further information regarding this setting is found at AWS's documentation for 
#### Public Buckets​
Add any external buckets that are not included with the provided AWS account credentials.
### Advanced Options​
Click **Advanced Options** in the left menu sidebar. All advanced options are optional.
Review each option provided in the following table to set up the advanced options to meet your needs.  
| Advanced Option  | Description  |  
| --- | --- |  
| **Enable compatibility mode**  | Enables the use of S3-compatible storage such as MinIO.  |  
| **Apply requester-pays to S3 requests**  | The requester (instead of the bucket owner) pays the cost of the S3 request and the data downloaded from the S3 bucket.  |  
| **Enable file status check**  | Activated by default, uncheck the box to deactivate. Enables Dremio to check if a file exists in the S3 bucket before proceeding to handle errors gracefully. Disable this option when there are no files missing from the S3 bucket or when the file’s access permissions have not changed. Disabling this option reduces the amount of communication to the S3 bucket.  |  
| **Enable partition column inference**  | Enable this option to change how Dremio handles partition columns (see [Partition Column Inference](/developer/data-formats/table) for more information.)  |  
| **Root Path**  | The root path for the Amazon S3 bucket. The default root path is /.  |  
| **Server side encryption key ARN**  | Add the ARN key created in   |  
| **Default CTAS Format**  | Choose the default format for tables you create in Dremio, either Parquet or Iceberg.  |  
| **Connection Properties**  | Provide the custom key value pairs for the connection relevant to the source. 
  1. Click **Add Property**.
  2. For Name, enter a connection property.
  3. For Value, enter the corresponding connection property value.

 |  
| **Allowlisted buckets**  | Add an approved S3 bucket in the text field. You can add multiple S3 buckets this way. When using this option to add specific S3 buckets, you will only be able to see those buckets and not all the buckets that may be available in the source. Buckets entered must be valid. Misspelled or non-existent buckets will not appear in the resulting source.  |  
To configure your S3 source to use server-side encryption based on a provided key (SSE-C) or KMS (SSE-KMS), set the following connection properties:
  * SSE-C
    * `fs.s3a.server-side-encryption-algorithm` set to `SSE-C`
    * `fs.s3a.server-side-encryption.key` set to the key used on the objects in S3
  * SSE-KMS
    * `fs.s3a.server-side-encryption-algorithm` set to `SSE-KMS`
    * `fs.s3a.server-side-encryption.key` set to the ARN used on the objects in S3


#### Cache Options​
Under Cache Options, review the following table and edit the options to meet your needs.  
| Cache Options  | Description  |  
| --- | --- |  
| **Enable local caching when possible**  | Selected by default, along with asynchronous access for cloud caching, local caching can improve query performance. See [Cloud Columnar Cache](/what-is-dremio/architecture) for details.  |  
| **Max percent of total available cache space to use when possible**  | Specifies the disk quota, as a percentage, that a source can use on any single executor node only when local caching is enabled. The default is 100 percent of the total disk space available on the mount point provided for caching. You can either manually enter in a percentage in the value field or use the arrows to the far right to adjust the percentage.  |  
#### Locations in which Iceberg Tables are Created​
Where the CREATE TABLE command creates a table depends on the type of data source being used. For Amazon S3 sources, the root physical location is the main root directory for the filesystem. From this location, the path and table name are appended to determine the physical location for a new table.
If your S3 datasets include large Parquet files with 100 or more columns, then you must edit the number of maximum connections to S3 that each processing unit of Dremio is allowed to spawn. To change the maximum connections:
  1. Under Connection Properties, click **Add Property**.
  2. For Name, enter `fs.s3a.connection.maximum`.
  3. For Value, enter a custom value greater than the default 100.


![Advanced Options](https://docs.dremio.com/assets/images/s3-adv-options-c0deb8a7e0e0819b2f8a381d2a2e3409.png) !
#### Connecting through a proxy server​
Optionally, you can configure your S3 source to connect through a proxy. You can achieve this by adding the following `Properties` in the settings for your S3 source:  
| Property Name  | Description  |  
| --- | --- |  
| fs.s3a.proxy.host  | Proxy host.  |  
| fs.s3a.proxy.port  | Proxy port number.  |  
| fs.s3a.proxy.username  | Username for authenticated connections, optional.  |  
| fs.s3a.proxy.password  | Password for authenticated connections, optional.  |  
#### Connecting to a bucket in AWS GovCloud​
To connect to a bucket in AWS GovCloud, set the correct GovCloud endpoint for your S3 source. You can achieve this by adding the following `Properties` in the settings:  
| Property Name  | Description  |  
| --- | --- |  
| fs.s3a.endpoint  | The GovCloud endpoint (e.g., `s3-us-gov-west-1.amazonaws.com`).  |  
#### Connecting to a bucket via AWS PrivateLink​
To connect to a bucket using an AWS PrivateLink URL, set the correct server endpoint for your S3 source. You can achieve this by adding the following `Properties` in the settings:  
| Property Name  | Description  |  
| --- | --- |  
| fs.s3a.endpoint.region  | VPC region name (e.g., `us-east-1`).  |  
| fs.s3a.endpoint  | PrivateLink DNS name (e.g., `bucket.vpce-xxx-xx.s3.us-east-1.vpce.amazonaws.com`).  |  
The `fs.s3a.endpoint.region` setting ensures that the PrivateLink is created in the desired region, and it allows access only to buckets in the specified region.  
  
The `fs.s3a.endpoint` value cannot contain the `http(s)://` prefix.
### Reflection Refresh​
! !
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata​
! !
#### Dataset Handling​
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.
  * Automatically format files into tables when users issue queries. If this box is checked and a query runs against the un-promoted table/folder, Dremio automatically promotes using default options. If you have CSV files, especially with non-default options, it might be useful to _not_ check this box.


#### Metadata Refresh​
  * **Dataset Discovery** -- Refresh interval for top-level source object names such as names of DBs and tables.
Dataset Discovery is available for [Google Cloud Storage (GCS)](/data-sources/object/gcs) and databases. For Amazon S3, Dremio lists folders and files in real time unless they have been converted to tables.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
  * **Dataset Details** -- The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed -- Dremio updates details for a dataset at query time. This mode minimized metadata queries on a source when not used, but might lead to longer planning times.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an Amazon S3 Source​
To update an Amazon S3 source:
  1. On the Datasets page, under **Object Storage** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Amazon S3 as a Source.
  4. Click **Save**.


## Deleting an Amazon S3 Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Amazon S3 source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Object Storage** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Configuring S3-Compatible Storage​
You can use S3-compatible storage, such as MinIO or IBM Cloud Object Storage, as a Dremio data source as long as the storage is completely S3-compatible. We recommend confirming S3 compatibility with the storage provider before you start the configuration steps.
To configure S3-compatible storage as a data source in the Dremio console:
  1. Under **Advanced Options** , check **Enable compatibility mode**.
  2. Under **Advanced Options &gt; Connection Properties**, add `fs.s3a.path.style.access` and set the value to `true`.  
Note: This setting ensure that the request path is created correctly when using IP addresses or hostnames as the endpoint.
  3. Under **Advanced Options &gt; Connection Properties**, add the `fs.s3a.endpoint` property and its corresponding server endpoint value (IP address).  
Limitation: The endpoint value cannot contain the `http(s)://` prefix nor can it start with the string `s3`. For example, if the endpoint is `http://123.1.2.3:9000`, the value is `123.1.2.3:9000`.
  4. For IBM Cloud Object Storage and other S3-compatible storage where required, you must add the following property to the `core-site.xml` file to whitelist the bucket:
Whitelist the S3-compatible bucket

```
<property>  
    <name>dremio.s3.whitelisted.buckets</name>  
    <value>your-S3-compatible-bucket-name</value>  
</property>  

```



As an example for a specific S3-compatible storage product, the following steps describe how to configure your S3 source for MinIO with an encrypted connection in the Dremio console:
  1. Use OpenSSL to generate a self signed certificate. See 
  2. Start up Minio server with `./minio server [data folder] --certs-dir [certs directory]`.
  3. Install Dremio.
  4. In your client environment where Dremio is located, install the certificate into **&lt; JAVA_HOME&gt;/jre/lib/security** with the following command:
Install certificate

```
<JAVA_HOME>/keytool -import -v -trustcacerts -alias alias -file cert-file -keystore cacerts -keypass changeit -storepass changeit  

```

Replace `alias` with the alias name you want and replace `cert-file` with the absolute path of the certificate file used to startup Minio server.
  5. Start up Dremio.
  6. In the Dremio console, add and configure an Amazon S3 data source with the Minio plug-in.
    1. Under the **General** tab, specify the **AWS Access Key** and **AWS Access Secret** provided by your Minio server.
    2. Under the **General** tab, check **Encrypt Connection**.
    3. Under **Advanced Options** , check **Enable compatibility mode**.
    4. Under **Advanced Options &gt; Connection Properties**, add `fs.s3a.path.style.access` and set the value to `true`.  
Note: This setting ensure that the request path is created correctly when using IP addresses or hostnames as the endpoint.
    5. Under **Advanced Options &gt; Connection Properties**, add the `fs.s3a.endpoint` property and its corresponding server endpoint value (IP address).  
Limitation: The endpoint value cannot contain the `http(s)://` prefix nor can it start with the string `s3`. For example, if the endpoint is `http://123.1.2.3:9000`, the value is `123.1.2.3:9000`.


## Distributed Storage​
Dremio requires object storage to be configured as [distributed storage](/what-is-dremio/architecture). See the configuration of distributed storage for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information.
## Configuring Minio as a Distributed Store​
Minio can be be used as a distributed store. Note that Minio works as a distributed store for both SSL and unencrypted connections. See the configuration of S3-compatible distributed storage for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information.
## Configuring Cloud Cache​
See Configuring Cloud Cache for more information.
## Configuring KMS Encryption for Distributed Store​
AWS Key Managment Service (KMS) is available for S3 distributed store. See the configuration of distributed storage for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information.
## For More Information​
See the following Minio documentation for more information:
Was this page helpful?
[Previous Object Storage](/data-sources/object)[Next Azure Storage](/data-sources/object/azure-storage)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Object Storage](/data-sources/object)[Next Azure Storage](/data-sources/object/azure-storage)
!
