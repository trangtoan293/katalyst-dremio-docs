---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config
slug: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config
title: "Configuring Distributed Storage | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64053.872989208
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * Dremio with Your Infrastructure
  * Cluster Configuration
  * Services
  * Distributed Storage

Version: current [26.x]
On this page
# Configuring Distributed Storage
The location of distributed storage is defined by the `paths.dist` property in `dremio.conf`. This property must be updated in `dremio.conf` on all nodes.
## Amazon S3​
Before configuring Amazon S3 as Dremio's distributed storage:
  * Perform a test by adding the same bucket as a Dremio source and verify the connection.
  * Ensure that the following minimum policy requirements for storing Reflections are provided:
Minimum privilege policy 

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        {  
            "Sid": "VisualEditor0",  
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
            "Sid": "VisualEditor1",  
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



### Configuring Dremio for Amazon S3​
Before configuring, create a storage root directory first to use for the `dremio.conf` and **core-site.xml** files. To configure S3 for distributed storage:
  1. Change the distributed property in the `dremio.conf` file.
Configuration of S3 bucket as the dist store

```
paths: {  
    ...  
    dist: "dremioS3:///<bucket_name>/<folder1>/<folder2>"  
}  

```

  2. Create a `core-site.xml` with credentails for Dremio to list, read, and write to the bucket.
Use an AWS Instance Profile to grant an EC2 instance permissions to access S3 without manually managing credentials.
`core-site.xml` with AWS Instance Profile

```
<?xml version="1.0"?>  
<configuration>  
   <property>  
      <name>fs.dremioS3.impl</name>  
      <description>The FileSystem implementation. Must be set to com.dremio.plugins.s3.store.S3FileSystem</description>  
      <value>com.dremio.plugins.s3.store.S3FileSystem</value>  
   </property>  
   <property>  
      <name>fs.s3a.aws.credentials.provider</name>  
      <description>The credential provider type.</description>  
      <value>com.amazonaws.auth.InstanceProfileCredentialsProvider</value>  
   </property>  
</configuration>  

```

Use an `~/.aws/credentials` file. This includes support for specifying a credentials_process to automatically retrieve temporary credentials.
`core-site.xml` with AWS named profile

```
<?xml version="1.0"?>  
<configuration>  
   <property>  
      <name>fs.dremioS3.impl</name>  
      <description>The FileSystem implementation. Must be set to com.dremio.plugins.s3.store.S3FileSystem</description>  
      <value>com.dremio.plugins.s3.store.S3FileSystem</value>  
   </property>  
   <property>  
      <name>com.dremio.awsProfile</name>  
      <description>AWS Profile to use.</description>  
      <value>profilename</value>  
   </property>  
   <property>  
      <name>fs.s3a.aws.credentials.provider</name>  
      <description>The credential provider type.</description>  
      <value>com.dremio.plugins.s3.store.AWSProfileCredentialsProviderV1</value>  
   </property>  
</configuration>  

```

Use an AWS access key and secret key that has access to the S3 bucket. The `fs.s3a.secret.key` property can be encrypted using the [`dremio-admin encrypt` CLI command](/reference/admin-cli/encryption). The encrypted value produced with the `encrypt` command must be prefixed with `dremio+` (for example, `dremio+secret:1.812WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4`).
`core-site.xml` with access key and secret key

```
<?xml version="1.0"?>  
<configuration>  
   <property>  
      <name>fs.dremioS3.impl</name>  
      <description>The FileSystem implementation. Must be set to com.dremio.plugins.s3.store.S3FileSystem</description>  
      <value>com.dremio.plugins.s3.store.S3FileSystem</value>  
   </property>  
   <property>  
      <name>fs.s3a.access.key</name>  
      <description>AWS access key ID.</description>  
      <value></value>  
   </property>  
   <property>  
      <name>fs.s3a.secret.key</name>  
      <description>AWS secret key.</description>  
      <value></value>  
   </property>  
   <property>  
      <name>fs.s3a.aws.credentials.provider</name>  
      <description>The credential provider type.</description>  
      <value>org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider</value>  
   </property>  
</configuration>  

```

  3. Copy `core-site.xml` to under Dremio's configuration directory (same as `dremio.conf`) on all nodes.


### Configuring KMS Encryption Enterprise ​
Before configuring AWS Key Management Store (KMS) as Dremio's distributed storage, create a storage root directory to use for the `dremio.conf` and `core-site.xml` files.
To configure Dremio to use KMS encryption for Amazon S3:
  1. Change the distributed property in the `dremio.conf` file.
Configuration for KMS 

```
paths: {  
    ...  
    dist: "dremioS3:///<bucket_name>/<folder1>/<folder2>"  
}  

```

  2. Modify `core-site.xml` to include the following property. To obtain the server-side encryption key from AWS, navigate to **KMS &gt; Customer managed keys &gt; Create key**.
`core-site.xml` for KMS

```
<?xml version="1.0"?>  
<configuration>  
    <property>  
        <name>fs.s3a.connection.ssl.enabled</name>  
        <value>true</value>  
    </property>  
    <property>  
        <name>fs.s3a.server-side-encryption-algorithm</name>  
        <value>SSE-KMS</value>  
    </property>  
    <property>  
        <name>fs.s3a.server-side-encryption.key</name>  
        <value>KEY_ARN</value>  
    </property>  
</configuration>  

```

  3. Copy `core-site.xml` to under Dremio's configuration directory (same as `dremio.conf`) on all nodes.


### Configuring Dremio for Minio​
Minio can be used as a distributed store for both unencrypted and SSL/TLS connections. Before configuring Minio as Dremio's distributed storage, create a storage root directory to use for the `dremio.conf` and `core-site.xml` files.
To configure Minio as a distributed store:
  1. Ensure that the provided root directory(bucket) is already created in Minio server.
  2. Change the distributed property in the `dremio.conf` file.
S3-compatible dist store

```
paths: {  
   ...  
   dist: "dremioS3:///<bucket_name>/<folder1>/<folder2>"  
}  

```

For example: `dist: "dremioS3:///dremio"`
  3. Create `core-site.xml` and include IAM credentials with list, read and write permissions. Copy the file to under Dremio's configuration directory (same as `dremio.conf`) on all nodes. The `fs.s3a.secret.key` property in the `core-site.xml` can be encrypted using the [`dremio-admin encrypt` CLI command](/reference/admin-cli/encryption). The encrypted value produced with the `encrypt` command must be prefixed with `dremio+` (for example, `dremio+secret:1.812WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4`).
`core-site.xml` using Minio access key and secret key 

```
<?xml version="1.0"?>  
<configuration>  
<property>  
    <name>fs.dremioS3.impl</name>  
    <description>The FileSystem implementation. Must be set to com.dremio.plugins.s3.store.S3FileSystem</description>  
    <value>com.dremio.plugins.s3.store.S3FileSystem</value>  
</property>  
<property>  
    <name>fs.s3a.access.key</name>  
    <description>Minio server access key ID.</description>  
    <value>ACCESS_KEY</value>  
</property>  
<property>  
    <name>fs.s3a.secret.key</name>  
    <description>Minio server secret key.</description>  
    <value>SECRET_KEY</value>  
</property>  
<property>  
    <name>fs.s3a.aws.credentials.provider</name>  
    <description>The credential provider type.</description>  
    <value>org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider</value>  
</property>  
<property>  
    <name>fs.s3a.endpoint</name>  
    <description>Endpoint can be either an IP or a hostname where Minio server is running. However, the endpoint value cannot contain the `http(s)://` prefix nor can it start with the string `s3`. For example, if the endpoint is `http://175.1.2.3:9000`, the value is `175.1.2.3:9000`.</description>  
    <value>ENDPOINT</value>  
</property>  
<property>  
    <name>fs.s3a.path.style.access</name>  
    <description>Value has to be set to true.</description>  
    <value>true</value>  
</property>  
<property>  
    <name>dremio.s3.compat</name>  
    <description>Value has to be set to true.</description>  
    <value>true</value>  
</property>  
<property>  
    <name>fs.s3a.connection.ssl.enabled</name>  
    <description>Value can either be true or false, set to true to use SSL with a secure Minio server.</description>  
    <value>SSL_ENABLED</value>  
</property>  
</configuration>  

```

  4. Copy the file to under Dremio's configuration directory (same as `dremio.conf`) on all nodes.


#### Troubleshooting​
The default directory is `/tmp/hadoop-dremio/s3a`, if you do not have enough space, you may encounter errors like `DiskErrorException: No space available in any of the local directories.` As an alternative option, in the `core-site.xml` file, add or change the `fs.s3a.buffer.dir` setting to a directory of your choice (any directory with ample space and write permissions for Dremio). This should resolve writing to the default `/tmp` directory. Until you restart the executors, you'll see that the directory is not used for buffering.
## Azure Storage​
The Azure Storage is the foundation for the ADLS Gen2 service. See [Azure Storage](/data-sources/object/azure-storage) for more information.
Soft delete for blobs is not supported for Azure Storage accounts. Soft delete should be disabled to establish a successful connection.
To set up configuration for distributed storage:
  1. Change the following property in the `dremio.conf` file.
Configuring Azure Storage as the dist store

```
paths: {  
    ...  
    dist: "dremioAzureStorage://:///<FILE_SYSTEM_NAME>/<ALTERNATIVE_STORAGE_ROOT_DIRECTORY>"  
}  

```

The ALTERNATIVE_STORAGE_ROOT_DIRECTORY is optional and is used as an alternative location for creating sub-directories. If the alternative directory is not specified, the sub-directories are created directly under the FILE_SYSTEM directory. You will first need to create the storage root directory to use for the `dremio.conf` and `core-site.xml` files.
  2. Create `core-site.xml` as shown below. The `dremio.azure.key` property can be encrypted using the [`dremio-admin encrypt` CLI command](/reference/admin-cli/encryption). The encrypted value produced with the `encrypt` command must be prefixed with `dremio+` (for example, `dremio+secret:1.812WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4`).
You can provide the URI of an Azure Key Vault secret as the value for the `dremio.azure.key` property. Add `dremio+azure-key-vault+` as a prefix to the secret URI (for example, `dremio+azure-key-vault+https://myvault.vault.azure.net/secrets/mysecret`). Dremio connects to Azure Key Vault to fetch the secret to use for the shared access key and does not store the fetched secret. To use Azure Key Vault, you must [Deploy Dremio on Azure](/deploy-dremio/deploy-on-kubernetes) and complete the [Requirements for Authenticating with Azure Key Vault](/data-sources/object/azure-storage).
`core-site.xml` for Azure Storage using access key 

```
<configuration>  
<property>  
    <name>fs.dremioAzureStorage.impl</name>  
    <description>FileSystem implementation. Must always be com.dremio.plugins.azure.AzureStorageFileSystem</description>  
    <value>com.dremio.plugins.azure.AzureStorageFileSystem</value>  
</property>  
<property>  
    <name>dremio.azure.account</name>  
    <description>The name of the storage account.</description>  
    <value>ACCOUNT_NAME</value>  
</property>  
<property>  
     <name>dremio.azure.key</name>  
     <description>The shared access key for the storage account.</description>  
     <value>Azure Key Vault secret URI with prefix (in 24.1+ and later versions) or ACCESS_KEY</value>  
</property>  
<property>  
    <name>dremio.azure.mode</name>  
    <description>The storage account type. Value: STORAGE_V2</description>  
    <value>STORAGE_V2</value>  
</property>  
<property>  
    <name>dremio.azure.secure</name>  
    <description>Boolean option to enable SSL connections. Default: True Value: True/False</description>  
    <value>True</value>  
</property>  
</configuration>  

```

  3. Copy the `core-site.xml` file to the Dremio's configuration directory location


### Configuring OAuth 2.0​
To enable distributed storage with OAuth 2.0, update the `core-site.xml` file. The `dremio.azure.clientSecret` property can be encrypted using the `dremio-admin encrypt` [CLI command](/reference/admin-cli/encryption). The encrypted value produced with the `encrypt` command must be prefixed with `dremio+` (for example, `dremio+secret:1.812WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4`).
You can provide the URI of an Azure Key Vault secret as the value for the `dremio.azure.clientSecret` property. Add `dremio+azure-key-vault+` as a prefix to the secret URI (for example, `dremio+azure-key-vault+https://myvault.vault.azure.net/secrets/mysecret`). Dremio connects to Azure Key Vault to fetch the secret to use for the shared access key and does not store the fetched secret. To use Azure Key Vault, you must deploy Dremio on [Azure AKS](/deploy-dremio/deploy-on-kubernetes) and complete the [Requirements for Authenticating with Azure Key Vault](/data-sources/object/azure-storage).
See the following sample information for reference:
`core-site.xml` for OAuth 2.0 

```
<?xml version="1.0"?>  
<configuration>  
    <property>  
        <name>fs.dremioAzureStorage.impl</name>  
        <description>FileSystem implementation. Must always be com.dremio.plugins.azure.AzureStorageFileSystem</description>  
        <value>com.dremio.plugins.azure.AzureStorageFileSystem</value>  
    </property>  
    <property>  
        <name>dremio.azure.account</name>  
        <description>The name of the storage account.</description>  
        <value>ACCOUNT_NAME</value>  
    </property>  
    <property>  
        <name>dremio.azure.mode</name>  
        <description>The storage account type. Value: STORAGE_V1 or STORAGE_V2</description>  
        <value>MODE</value>  
    </property>  
    <property>  
        <name>dremio.azure.secure</name>  
        <description>Boolean option to enable SSL connections. Default: True, Value: True/False</description>  
        <value>SECURE</value>  
    </property>  
    <property>  
        <name>dremio.azure.credentialsType</name>  
        <description>The credentials used for authentication. Value: ACCESS_KEY or AZURE_ACTIVE_DIRECTORY</description>  
        <value>CREDENTIALS_TYPE</value>  
    </property>  
    <property>  
        <name>dremio.azure.clientId</name>  
        <description>The Application (client) ID of the Azure application used to secure access to Azure Storage</description>  
        <value>CLIENT_ID</value>  
    </property>  
    <property>  
        <name>dremio.azure.tokenEndpoint</name>  
        <description>OAuth 2.0 token endpoint V1.0 for Microsoft Entra ID</description>  
        <value>TOKEN_ENDPOINT</value>  
    </property>  
    <property>  
        <name>dremio.azure.clientSecret</name>  
        <description>The Application (client) secret of the Azure application used to secure access to Azure Storage</description>  
        <value>Azure Key Vault secret URI with prefix (in 24.1+ and later versions) or CLIENT_SECRET</value>  
    </property>  
</configuration>  

```

### Configuring OAuth 2.0 with Azure Government Cloud​
To use OAuth 2.0 authentication with Azure Government cloud platform, add the following property to the `core-site.xml`:
`core-site.xml` Additional Parameter for OAuth 2.0 with Azure Government Cloud

```
    <property>  
        <name>fs.azure.endpoint</name>  
        <description>Azure Government Cloud Endpoint</description>  
        <value>GOVERNMENT_CLOUD_ENDPOINT</value>  
    </property>  

```

### Azure Government​
To configure the Azure Storage data source to access data on the Azure Government Cloud platform, add the `fs.azure.endpoint` property to the `core-site.xml` file along with the general Azure Storage properties and copy the `core-site.xml` file to the Dremio's configuration directory location on all nodes.
`core-site.xml` Additional Parameter for Azure Storage V2 on Azure Government Cloud 

```
<property>  
    <name>fs.azure.endpoint</name>  
    <description>The azure storage endpoint to use.</description>  
    <value>dfs.core.usgovcloudapi.net</value>  
</property>  

```

`core-site.xml` Additional Parameter for Azure Storage V1 on Azure Government Cloud 

```
<property>  
    <name>fs.azure.endpoint</name>  
    <description>The azure storage endpoint to use.</description>  
    <value>blob.core.usgovcloudapi.net</value>  
</property>  

```

This configuration is done in addition to the configuration done via the UI. See [Azure Storage](/data-sources/object/azure-storage) for more information.
## Google Cloud Storage​
Google Cloud Storage (GCS) is a globally distributed object storage service provided by Google Cloud Platform. See [Google Cloud Storage](/data-sources/object/gcs) for more information.
Before configuring GCS as Dremio's distributed storage, create a storage root directory to use for the `dremio.conf` and `core-site.xml` files.
To set up configuration for distributed storage:
  1. Change the distributed property in the `dremio.conf` file.
Configuration for GCS

```
paths: {  
  ...  
  dist: "dremiogcs:///<bucket_name>/<folder1>"  
}  

```

For example: `dist: "dremiogcs:///dremio/dremiodiststorage"`
  2. Create `core-site.xml` as shown below, and copy it to the Dremio's configuration directory location.
`core-site.xml` for GCS using application default credentials

```
<?xml version="1.0"?>  
<configuration>  
    <property>  
        <name>dremio.gcs.whitelisted.buckets</name>  
        <description>GCS bucket to use for distributed storage</description>  
        <value>BUCKET_NAME</value>  
    </property>  
    <property>  
        <name>fs.dremiogcs.impl</name>  
        <description>The FileSystem implementation. Must be set to com.dremio.plugins.gcs.GoogleBucketFileSystem</description>  
         <value>com.dremio.plugins.gcs.GoogleBucketFileSystem</value>  
    </property>  
    <property>  
        <name>dremio.gcs.use_keyfile</name>  
        <description>Do not use the key file</description>  
        <value>false</value>  
    </property>  
</configuration>  

```

Or, you can also use a client ID and secret for configuring the distributed storage in place of the instance or default credentials:
`core-site.xml` for GCS using client ID and secret

```
<?xml version="1.0"?>  
<configuration>  
    <property>  
        <name>dremio.gcs.whitelisted.buckets</name>  
        <description>GCS bucket to use for distributed storage</description>  
        <value>BUCKET_NAME</value>  
    </property>  
    <property>  
        <name>fs.dremiogcs.impl</name>  
        <description>The FileSystem implementation. Must be set to com.dremio.plugins.gcs.GoogleBucketFileSystem</description>  
        <value>com.dremio.plugins.gcs.GoogleBucketFileSystem</value>  
    </property>  
    <property>  
        <name>dremio.gcs.use_keyfile</name>  
        <description>Use the key file</description>  
        <value>true</value>  
    </property>  
    <property>  
        <name>dremio.gcs.projectId</name>  
        <description>GCP Project ID</description>  
        <value>GCP_PROJECT_ID</value>  
    </property>  
    <property>  
        <name>dremio.gcs.clientId</name>  
        <description>GCP Service Account Client ID</description>  
        <value>SERVICE_ACCOUNT_CLIENT_ID</value>  
    </property>  
    <property>  
        <name>dremio.gcs.clientEmail</name>  
        <description>GCP Service Account Client Email</description>  
        <value>SERVICE_ACCOUNT_EMAIL</value>  
    </property>  
    <property>  
        <name>dremio.gcs.privateKeyId</name>  
        <description>GCP Service Account Private Key ID</description>  
        <value>PRIVATE_KEY</value>  
    </property>  
    <property>  
        <name>dremio.gcs.privateKey</name>  
        <description>GCP Service Account Private Key</description>  
        <value>SECRET_KEY</value>  
    </property>  
</configuration>  

```



## HDFS​
Before configuring HDFS as Dremio's distributed storage, test adding the same cluster as a Dremio source and verify the connection.
The following are `dremio.conf` file changes:
Configuration for HDFS

```
paths: {  
   ...  
   dist: "hdfs://<NAMENODE_HOST>:8020/path"}  

```

When deploying on [Hadoop using YARN](/deploy-dremio/other-options/yarn-hadoop), Dremio automatically copies this option to all nodes, so this only needs to be configured manually on coordinator nodes.
### Name Node HA​
If Name Node HA is enabled, when specifying distributed storage (`paths.dist` in `dremio.conf`), path should be specific using `fs.defaultFS` value instead of the active name node. (e.g. ``value_for_fs_defaultFS``/path)
`fs.defaultFS` value can be found in `core-site.xml` (typically found under `/etc/hadoop/conf`).
As per [Hadoop using YARN deployment guide](/deploy-dremio/other-options/yarn-hadoop), ensure that you've copied `core-site.xml`, `hdfs-site.xml`, and `yarn-site.xml` (typically under `/etc/hadoop/conf`) files into Dremio's `conf` directory.
## NAS​
Network Attached Storage (NAS) is a device that serves files via a network using a protocol such as NFS. Dremio supports the NFS protocol with NAS.
To configure NAS as Dremio's distributed storage, add the distributed path to the `dremio.conf` file:
Configuration for NFS dist store 

```
paths: {  
   ...  
   dist: "file:///shared_mount_path"  
}  

```

## Relocating Distributed Storage and Metadata​
Dremio supports relocating the distributed storage and metadata of Parquet tables (internal Iceberg tables). If you utilize Parquet tables with unlimited splits, this feature enables you to reconfigure the distributed storage and metadata to move to a new location, eliminating the need to forget and repromote your tables.
Distributed storage relocation is supported only within the same source type. For example, you can move your distributed storage from one S3 bucket to another S3 bucket, but you cannot relocate from a NAS source to an S3 bucket.
Distributed storage relocation does not currently support Reflections.
Follow the steps below to relocate distributed storage and its metadata:
  1. Update `paths.dist` in `dremio.conf`:
    1. Locate your `dremio.conf` file and open it with a text editor.
    2. Find the `paths:` section in the file, which contains `local:` and `dist:` variables. The value after `dist:` represents your current distributed storage configuration.
    3. Change the value of `dist:` to the new location, making sure to note the original value you are replacing.
    4. Save the file, then repeat these instructions for all executor and coordinator nodes in your Dremio instance.
  2. Restart Dremio.
  3. Move your metadata contents to the new distributed storage:
    1. Identify the file path of the original distributed storage variable.
    2. Locate the `/metadata` subdirectory following your paths.dist value.
    3. Copy or move the `/metadata` directory (including all subdirectories) from the old distributed storage location to the new `paths.dist` directory. This process replaces the empty `/metadata` directory with your existing `metadata` content.
The steps for moving metadata will vary according to your distributed storage source type.
     * **Amazon S3:** Utilize the Move/Copy button within the AWS Console or CLI.
     * **Azure Storage:** There are many ways to relocate an Azure container. We recommend using `azcopy`.
     * **Google Cloud Storage:** There are many ways to relocate an files within GCS. We recommend using `gsutil`.
     * **HDFS:** Use your Hadoop / HDFS command line tools, ensuring the correct permissions for relocating files.
     * **NAS:** Use your computer's internal GUID or command line.


### Troubleshooting​
If your Dremio instance is in an invalid homestate after completing the steps above, try restarting Dremio again to pick up the path relocation changes.
Was this page helpful?
Previous Metadata StorageNext Cloud Cache
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous Metadata StorageNext Cloud Cache
!
