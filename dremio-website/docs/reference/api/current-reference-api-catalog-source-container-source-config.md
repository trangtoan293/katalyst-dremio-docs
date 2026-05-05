---
url: /reference/api/catalog/source/container-source-config
title: "Source Configuration | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64238.4176145
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * [Source](/reference/api/catalog/source)
  * Source Configuration

Version: current [26.x]
On this page
# Source Configuration
Dremio supports a variety of source types, and the available parameters of the `config` object differ among the source types. This page provides examples of the `config` object for each supported source type and descriptions of the `config` object's parameters that are available for each source type.
The source object contains the same parameters for all source types _except_ for the parameters of the `config` object. Read the [Source](/reference/api/catalog/source) page for information about the parameters all source types have in common.
## Amazon OpenSearch Service[​](/reference/api/catalog/source/container-source-config#amazon-opensearch-service "Direct link to Amazon OpenSearch Service")
  * Dremio source type: `AMAZONELASTIC`
  * See [Amazon OpenSearch Service](/data-sources/databases/opensearch) for additional information.

Amazon OpenSearch Service Source config Object

```
{  
  "config": {  
    "scriptsEnabled": true,  
    "showHiddenIndices": false,  
    "showIdColumn": false,  
    "readTimeoutMillis": 60000,  
    "scrollTimeoutMillis": 300000,  
    "usePainless": true,  
    "scrollSize": 4000,  
    "allowPushdownOnNormalizedOrAnalyzedFields": false,  
    "pushdownWithKeyword": false,  
    "warnOnRowCountMismatch": false,  
    "encryptionValidationMode": "CERTIFICATE_AND_HOSTNAME_VALIDATION",  
    "forceDoublePrecision": false,  
    "hostname": "search-test.us-west-2.es.amazonaws.com",  
    "port": 443,  
    "authenticationType": "ACCESS_KEY",  
    "accessKey": "AKIAQ3XZRGQRKEXAMPLE",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "overwriteRegion": true,  
    "regionName": "US_WEST_1"  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters "Direct link to Parameters")
scriptsEnabled Body Boolean Optional
If Dremio should use script pushdowns, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
showHiddenIndices Body Boolean Optional
To show hidden indices, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
showIdColumn Body Boolean Optional
To show the OpenSearch ID column, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
readTimeoutMillis Body Integer Optional
Time to wait to read data from the source, in milliseconds. Default is `60000`.
Example: 60000
* * *
scrollTimeoutMillis Body Integer Optional
Time to wait for each scroll request, in milliseconds. Default is `300000`.
Example: 300000
* * *
usePainless Body Boolean Optional
To use the Painless scripting language when connecting to Amazon OpenSearch Service, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
scrollSize Body Integer Optional
Scroll size for Dremio's Amazon OpenSearch Service requests. Default is `4000`.
Example: 4000
* * *
allowPushdownOnNormalizedOrAnalyzedFields Body Boolean Optional
To enable pushdown filters and aggregations on analyzed text fields and normalized keyword fields, set to `true`. Otherwise, set to `false` (default). May produce unexpected results when enabled.
Example: false
* * *
pushdownWithKeyword Body Boolean Optional
If Dremio should perform keyword searches when pushing down fields mapped as text and keyword, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
warnOnRowCountMismatch Body Boolean Optional
If Dremio should warn the user when a query returns fewer Amazon OpenSearch Service records than expected instead of failing the query, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
encryptionValidationMode Body String Optional
Method to use to validate data encryption for the source.
Enum: CERTIFICATE_AND_HOSTNAME_VALIDATION, CERTIFICATE_ONLY_VALIDATION, NO_VALIDATION
Example: CERTIFICATE_AND_HOSTNAME_VALIDATION
* * *
forceDoublePrecision Body Boolean Optional
To force precision for double values, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
hostname Body String
Name of the host to use to connect to the Amazon OpenSearch Service source.
Example: search-test.us-west-2.es.amazonaws.com
* * *
port Body String
Port to use with the specified hostname to connect to the Amazon OpenSearch Service source. Default is `443`.
Example: 443
* * *
authenticationType Body String
Type of authentication for Dremio to use to connect to the source.
Enum: NONE, EC2_METADATA, ACCESS_KEY, AWS_PROFILE, POD_IDENTITY
Example: ACCESS_KEY
* * *
accessKey Body String
AWS access key. Required for credentialType `ACCESS_KEY`.
Example: AKIAQ3XZRGQRKEXAMPLE
* * *
accessSecret Body String
The AWS access secret in plaintext or as the reference for the AWS access secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for credentialType `ACCESS_KEY`. To keep the access secret secure, Dremio returns the accessSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext accessSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_access_secret``. Plaintext accessSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_access_secret``.
* * *
overwriteRegion Body Boolean Optional
To override the default region for your AWS account with the region you specify with the `regionName` parameter, set to `true`. Otherwise, set to `false` (default).
Example: true
* * *
regionName Body String Optional
Name of the AWS region to use to overwrite the default region for your AWS account. Required if `overwriteRegion` is set to `true`.
Example: US_WEST_1
## Amazon Redshift[​](/reference/api/catalog/source/container-source-config#amazon-redshift "Direct link to Amazon Redshift")
  * Dremio source type: `REDSHIFT`
  * See [Amazon Redshift](/data-sources/databases/redshift) for additional information.

Amazon Redshift Source config Object

```
{  
  "config": {  
    "connectionString": "jdbc:redshift://testing-redshift-cluster.r57mkjay4utq.us-west-2.redshift.amazonaws.com:5439/support",  
    "username": "redshift-owner",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MASTER",  
    "propertyList": [  
      {  
        "name": "ApplicationName",  
        "value": "testingDashboard"  
      }  
    ],  
    "fetchSize": 200,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-1 "Direct link to Parameters")
connectionString Body String
JDBC connection string for the Redshift database.
Example: jdbc:redshift://testing-redshift-cluster.r57mkjay4utq.us-west-2.redshift.amazonaws.com:5439/support
* * *
username Body String
Username for authentication with master credentials or a secret resource URL.
Example: redshift-owner
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
secretResourceUrl Body String
For secret-based authentication, the Amazon Resource Name (ARN) for the secret. To keep the secret secure, Dremio returns the secretResourceUrl value as `$DREMIO_EXISTING_VALUE$` in API responses.
Example: arn:aws:secretsmanager:us-west-2:123456789012:secret:my-rds-secret-VNenFy
* * *
awsProfile Body String
The AWS profile name. If this is left blank, the default profile will be used.
Example: profileName
* * *
dbUser Body String
The name of the Amazon Redshift DbUser that will be used for authentication. If this is left blank, the default user name for your AWS IAM role will be used.
Example: userName
* * *
authenticationType Body String
Type of authentication for Dremio to use to connect to the source.
  * `ANONYMOUS`: No authentication is needed.
  * `MASTER`: Use credentials from a master database user or use a secret resource URL.
  * `AWS_PROFILE`: Use an AWS profile.
  * `POD_IDENTITY`: Use an EKS pod identity.


Example: MASTER
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "ApplicationName","value": "testingDashboard"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples "Direct link to Authentication Examples")
No authentication required

```
{  
  "authenticationType": "ANONYMOUS"  
}  

```

Master credentials

```
{  
  "authenticationType": "MASTER",  
  "username": "myUsername",  
  "password": "myPassword"  
}  

```

Secret resource URL

```
{  
  "authenticationType": "MASTER",  
  "username": "myUsername",  
  "secretResourceUrl": "arn:aws:secretsmanager:us-west-2:123456789012:secret:my-rds-secret-VNenFy"  
}  

```

AWS Profile

```
{  
  "authenticationType": "AWS_PROFILE",  
  "awsProfile": "profileName",  
  "dbUser": "userName"  
}  

```

EKS Pod Identity

```
{  
  "authenticationType": "POD_IDENTITY"  
}  

```

## Amazon S3[​](/reference/api/catalog/source/container-source-config#amazon-s3 "Direct link to Amazon S3")
  * Dremio source type: `S3`
  * See [Amazon S3](/data-sources/object/s3) for additional information.

Amazon S3 Source config Object

```
{  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
    "externalBucketList": [  
      "external_bucket_1",  
      "external_bucket_2"  
    ],  
    "propertyList": [  
      {  
        "name": "fs.s3a.proxy.host",  
        "value": "proxyHost.example.com"  
      }  
    ],  
    "rootPath": "/",  
    "enableAsync": true,  
    "compatibilityMode": false,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "whitelistedBuckets": [  
      "archive.dremio.com",  
      "logs_east-1",  
      "logs_west-1"  
    ],  
    "requesterPays": false,  
    "enableFileStatusCheck": true,  
    "defaultCtasFormat": "ICEBERG",  
    "isPartitionInferenceEnabled": false,  
    "credentialType": "ACCESS_KEY"  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-2 "Direct link to Parameters")
accessKey Body String
AWS access key. Required for credentialType `ACCESS_KEY`.
Example: EXAMPLE78HT89VS4YJEL
* * *
accessSecret Body String
The AWS access secret in plaintext or as the reference for the AWS access secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for credentialType `ACCESS_KEY`. To keep the access secret secure, Dremio returns the accessSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext accessSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_access_secret``. Plaintext accessSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_access_secret``.
* * *
assumedRoleARN Body String Optional
Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role to assume. Optional for credentialType `ACCESS_KEY`, `EC2_METADATA` and `POD_IDENTITY`. Not applicable for credentialType `AWS_PROFILE` and `NONE`.
Example: arn:aws:iam::594632595346:role/OrganizationAccountAccessRole
* * *
awsProfile Body String
AWS profile name. If you do not provide a profile name, Dremio uses the default profile.
Example: example-profile
* * *
secure Body Boolean Optional
To enable a secure connection with SSL encryption between the Amazon S3 bucket and Dremio, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
externalBucketList Body Array of String Optional
List of external buckets that are not included with the specified AWS account credentials.
Example: ["external_bucket_1","external_bucket_2"]
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.proxy.host","value": "proxyHost.example.com"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
rootPath Body String Optional
Root path of the Amazon S3 bucket. Default is `/`.
Example: /
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
compatibilityMode Body Boolean Optional
To enable the use of Amazon S3-compatible storage, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
whitelistedBuckets Body Array of String Optional
List of approved S3 buckets to include in the source. Buckets entered must be valid. Misspelled or non-existent buckets will not appear in the resulting source. Omit to include all buckets that are available in the source. If you omit the whitelistedBuckets array in a PUT request, Dremio updates the source to include all available buckets. To keep existing approved buckets while making other updates, duplicate the existing whitelistedBuckets array in the PUT request.
Example: ["archive.dremio.com","logs_east-1","logs_west-1"]
* * *
requesterPays Body Boolean Optional
If the requester (instead of the bucket owner) pays the cost of the S3 request and the data downloaded from the Amazon S3 bucket, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
enableFileStatusCheck Body Boolean Optional
To allow Dremio to check whether a file exists in the Amazon S3 bucket before handling errors gracefully, set to `true` (default). Otherwise, set to `false`. If no files are missing from the Amazon S3 bucket or a file's access permissions have not changed, set to `false` to reduce communication with the Amazon S3 bucket.
Example: true
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
isPartitionInferenceEnabled Body Boolean Optional
To enable partition column inference, set to `true`. Otherwise, set to `false` (default). For more information, see [Partition Column Inference](/developer/data-formats/table#partition-column-inference).
Example: false
* * *
credentialType Body String Optional
Type of credential for Dremio to use to connect to the source.
Enum: NONE, EC2_METADATA, ACCESS_KEY, AWS_PROFILE, POD_IDENTITY
Example: ACCESS_KEY
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-1 "Direct link to Authentication Examples")
EC2 Metadata

```
{  
  "credentialType": "EC2_METADATA"  
}  

```

EC2 Metadata with optional assumed IAM role

```
{  
  "credentialType": "EC2_METADATA",  
  "assumedRoleARN": "arn:aws:iam::123456789012:root"  
}  

```

Data source credentials (access key)

```
{  
  "credentialType": "ACCESS_KEY",  
  "assumedRoleARN": "arn:aws:iam::123456789012:root",  
  "accessKey": "AKIAIOSFODNN7EXAMPLE",  
  "accessSecret": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"  
}  

```

EKS Pod Identity

```
{  
  "credentialType": "POD_IDENTITY"  
}  

```

EKS Pod Identity with optional assumed IAM role

```
{  
  "credentialType": "POD_IDENTITY",  
  "assumedRoleARN": "arn:aws:iam::123456789012:root"  
}  

```

## AWS Glue Data Catalog[​](/reference/api/catalog/source/container-source-config#aws-glue-data-catalog "Direct link to AWS Glue Data Catalog")
  * Dremio source type: `AWSGLUE`
  * See [AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog) for additional information.

AWS Glue Data Catalog Source config Object

```
{  
  "config": {  
    "regionNameSelection": "US_EAST_1",  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
    "enableAsync": true,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "assumedRoleARN": "arn:aws:iam::594632595346:role/OrganizationAccountAccessRole",  
    "lakeFormationEnableAccessPermissions": false,  
    "defaultCtasFormat": "ICEBERG",  
    "propertyList": [  
      {  
        "name": "hive.metastore.warehouse.dir",  
        "value": "s3a://example.com/buckets/glue_location"  
      }  
    ],  
    "credentialType": "ACCESS_KEY",  
    "allowedDatabases": ["sales","finance"]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-3 "Direct link to Parameters")
regionNameSelection Body String
AWS region where the AWS Glue Data Catalog is located.
Valid Values: AF_SOUTH_1, AP_EAST_1, AP_NORTHEAST_1, AP_NORTHEAST_2, AP_NORTHEAST_3, AP_SOUTHEAST_1, AP_SOUTHEAST_2, AP_SOUTHEAST_3, AP_SOUTHEAST_4, AP_SOUTH_1, AP_SOUTH_2, CA_CENTRAL_1, CN_NORTHWEST_1, CN_NORTH_1, EU_CENTRAL_1, EU_CENTRAL_2, EU_NORTH_1, EU_SOUTH_1, EU_SOUTH_2, EU_WEST_1, EU_WEST_2, EU_WEST_3, IL_CENTRAL_1, ME_CENTRAL_1, ME_SOUTH_1, SA_EAST_1, US_EAST_1, US_EAST_2, US_GOV_EAST_1, US_GOV_WEST_1, US_WEST_1, US_WEST_2
Example: US_EAST_1
* * *
accessKey Body String
AWS access key.
Example: EXAMPLE78HT89VS4YJEL
* * *
accessSecret Body String
The AWS access secret in plaintext or as the reference for the AWS access secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for credentialType `ACCESS_KEY`. To keep the access secret secure, Dremio returns the accessSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext accessSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_access_secret``. Plaintext accessSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_access_secret``.
* * *
awsProfile Body String
AWS profile name. If you do not provide a profile name, Dremio uses the default profile.
Example: example-profile
* * *
secure Body Boolean Optional
To enable a secure connection with SSL encryption between the AWS Glue Data Catalog and Dremio, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
assumedRoleARN Body String Optional
Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role to assume. Optional for credentialType `ACCESS_KEY`, `EC2_METADATA` and `POD_IDENTITY`. Not applicable for credentialType `AWS_PROFILE` and `NONE`.
Example: arn:aws:iam::594632595346:role/OrganizationAccountAccessRole
* * *
lakeFormationEnableAccessPermissions Body Boolean
To enforce Lake Formation access permissions on datasets so that Dremio confirms whether users have the required permissions to perform queries, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "hive.metastore.warehouse.dir","value": "s3a://example.com/buckets/glue_location"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
credentialType Body String Optional
Type of credential for Dremio to use to connect to the source.
Enum: NONE, EC2_METADATA, ACCESS_KEY, AWS_PROFILE, POD_IDENTITY
Example: ACCESS_KEY
* * *
allowedDatabases Body Array of String
A list of the databases that users of Dremio are allowed to access. Present the names in a comma-separated list. Databases entered must be valid. Misspelled or non-existent databases will not appear in the resulting source.
If one or more databases are added or removed from the list, the change takes effect immediately.
Example: ["sales","finance"]
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-2 "Direct link to Authentication Examples")
EC2 Metadata

```
{  
  "credentialType": "EC2_METADATA"  
}  

```

EC2 Metadata with optional assumed IAM role

```
{  
  "credentialType": "EC2_METADATA",  
  "assumedRoleARN": "arn:aws:iam::123456789012:root"  
}  

```

Data source credentials (access key)

```
{  
  "credentialType": "ACCESS_KEY",  
  "assumedRoleARN": "arn:aws:iam::123456789012:root",  
  "accessKey": "AKIAIOSFODNN7EXAMPLE",  
  "accessSecret": "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY"  
}  

```

EKS Pod Identity

```
{  
  "credentialType": "POD_IDENTITY"  
}  

```

EKS Pod Identity with optional assumed IAM role

```
{  
  "credentialType": "POD_IDENTITY",  
  "assumedRoleARN": "arn:aws:iam::123456789012:root"  
}  

```

## Azure Storage[​](/reference/api/catalog/source/container-source-config#azure-storage "Direct link to Azure Storage")
  * Dremio source type: `AZURE_STORAGE`
  * See [Azure Storage](/data-sources/object/azure-storage) for additional information.

Azure Storage Source config Object

```
{  
  "config": {  
    "accountKind": "STORAGE_V2",  
    "accountName": "azurestoragev2accountname",  
    "accessKey": "$DREMIO_EXISTING_VALUE$",  
    "rootPath": "/",  
    "enableSSL": true,  
    "enableAsync": true,  
    "credentialsType": "ACCESS_KEY",  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "defaultCtasFormat": "ICEBERG",  
    "propertyList": [  
      {  
        "name": "dremio.azure.mode",  
        "value": "STORAGE_V2"  
      }  
    ],  
    "isPartitionInferenceEnabled": false  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-4 "Direct link to Parameters")
accountKind Body String
Type of Azure Storage account.
Enum: STORAGE_V1, STORAGE_V2
Example: STORAGE_V2
* * *
accountName Body String
Name of the Azure Storage account.
Example: azurestoragev2accountname
* * *
accessKey Body String
The Azure access key in plaintext or as the reference for the Azure access key in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for credentialsType `ACCESS_KEY`. To keep the Azure access key secure, Dremio returns the accessKey value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext accessKey values must be prefixed with `data:,` — for example, `data:,`plaintext_access_key``. Plaintext accessKey values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_access_key``.
* * *
clientId Body String
If using the `AZURE_ACTIVE_DIRECTORY` credentialsType, the client ID of the registered app in Azure.
Example: ba72f3e5-edc6-4aec-ad0a-c1147e81dc8d
* * *
tokenEndpoint Body String
If using the `AZURE_ACTIVE_DIRECTORY` credentialsType, the OAuth 2.0 token endpoint for the registered app in Azure.
Example: 
* * *
clientSecret Body String
The Azure client secret in plaintext or as the reference for the Azure client secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Include only for credentialsType `AZURE_ACTIVE_DIRECTORY`. To keep the Azure client secret secure, Dremio returns the clientSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext clientSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_client_secret``. Plaintext clientSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_client_secret``.
* * *
rootPath Body String Optional
Root path of the Azure Storage source. Default is `/`.
Example: /
* * *
enableSSL Body Boolean Optional
To enable a secure connection with SSL encryption between the Azure Storage source and Dremio, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
credentialsType Body String Optional
Type of credential for Dremio to use to connect to the source.
Enum: ACCESS_KEY, AZURE_ACTIVE_DIRECTORY
Example: ACCESS_KEY
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dremio.azure.mode","value": "STORAGE_V2"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
isPartitionInferenceEnabled Body Boolean Optional
To enable partition column inference, set to `true`. Otherwise, set to `false` (default). For more information, see [Partition Column Inference](/developer/data-formats/table#partition-column-inference).
Example: false
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-3 "Direct link to Authentication Examples")
Microsoft Entra ID

```
{  
  "credentialsType": "AZURE_ACTIVE_DIRECTORY",  
  "clientId": "ba72f3e5-edc6-4aec-ad0a-c1147e81dc8d",  
  "tokenEndpoint": "https://login.microsoftonline.com/2dfe8f9a-c80b-40c9-81de-7713ca393904/oauth2/token",  
  "clientSecret": "pbt+a]xWAk2E*2.WmjU0wtfiLEXAMPLE"  
}  

```

## Open Catalog (External)[​](/reference/api/catalog/source/container-source-config#open-catalog-external "Direct link to Open Catalog \(External\)")
  * Dremio source type: `DREMIO_CATALOG_EXTERNAL_V1`
  * See [Open Catalog (External)](/data-sources/lakehouse-catalogs/open-catalog-external) for additional information.

Open Catalog (External) Source config Object

```
{  
  "name": "external",  
  "config": {  
    "dremioCatalogEndpoint": "http://123.45.6.123:8181/api/catalog",  
    "oAuthTokenEndpoint": "http://123.45.6.123:9047/oauth/token",  
    "personalAccessToken": "ExampleToken",  
    "impersonation": true,  
    "storageAccessCredential": "CREDENTIAL_VENDING",  
    "propertyList": [],  
    "secure": true,  
    "enableAsync": true,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100  
  },  
  "accessControlList": {  
    "userControls": [],  
    "roleControls": []  
  },  
  "type": "DREMIO_CATALOG_EXTERNAL_V1"  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-5 "Direct link to Parameters")
dremioCatalogEndpoint Body String
The endpoint for the Open Catalog on another Dremio installation.
Example: 
* * *
oAuthTokenEndpoint Body String
OAuth token endpoint for the Open Catalog on another Dremio installation.
Example: 
* * *
personalAccessToken Body String
Personal access token used to authenticate to the external Open Catalog.
Example: 31010
* * *
impersonation Body Boolean Optional
To allow users to run queries on the source cluster under their own user IDs rather than the user ID for the account used to authenticate, set to `true` (default). Otherwise, set to `false`. If set to `true`, the source cluster must be configured to allow inbound impersonation. For more information, see [Inbound Impersonation](/security/rbac/inbound-impersonation).
Example: true
* * *
storageAccessCredential Body String
Defines how to connect to the underlying storage. By default, Dremio leverages `CREDENTIAL_VENDING`. The alternative option is `MASTER_STORAGE_CREDENTIAL`, which leverages storage credentials in the source to connect to cloud storage providers.
* * *
secure Body Boolean Optional
To enable a secure connection with SSL encryption between the Open Catalog and Dremio, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To disable local caching, set to `false`. The default is `true`.
Example: false
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
## Dremio-to-Dremio[​](/reference/api/catalog/source/container-source-config#dremio-to-dremio "Direct link to Dremio-to-Dremio")
  * Dremio source type: `DREMIOTODREMIO`
  * See [Connecting to Another Dremio Cluster](/data-sources/databases/dremio) for additional information.

Dremio-to-Dremio Connector Source config Object

```
{  
  "config": {  
    "hostType": "DIRECT",  
    "hostname": "35.219.202.153",  
    "port": "31010",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "useSsl": false,  
    "userImpersonation": false,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "propertyList": [  
      {  
        "name": "disableCertificateVerification",  
        "value": "false"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-6 "Direct link to Parameters")
hostType Body String
Connection method to use. To connect directly to a coordinator node of the cluster, use `DIRECT`. To connect to an external ZooKeeper instance that coordinates the nodes of the cluster, use `ZOOKEEPER`.
Enum: DIRECT, ZOOKEEPER
Example: DIRECT
* * *
hostname Body String
Hostname of the coordinator node or ZooKeeper instance.
Example: 35.219.202.153
* * *
port Body String
Port number of the coordinator node or ZooKeeper instance. Default is `31010`.
Example: 31010
* * *
username Body String
Username for authentication.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
useSsl Body Boolean Optional
If the source cluster is configured to use TLS for connections, set to `true`. Otherwise, set to `false`.
Example: false
* * *
userImpersonation Body Boolean Optional
To allow users to run queries on the source cluster under their own user IDs rather than the user ID for the account used to authenticate, set to `true`. Otherwise, set to `false` (default). If set to `true`, the source cluster must be configured to allow inbound impersonation. For more information, see [Inbound Impersonation](/security/rbac/inbound-impersonation).
Example: false
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "disableCertificateVerification","value": "false"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
## Elasticsearch[​](/reference/api/catalog/source/container-source-config#elasticsearch "Direct link to Elasticsearch")
  * Dremio source type: `ELASTIC`
  * See [Elasticsearch](/data-sources/databases/elasticsearch) for additional information.

Elasticsearch Source config Object

```
{  
  "config": {  
    "scriptsEnabled": true,  
    "showHiddenIndices": false,  
    "showIdColumn": false,  
    "readTimeoutMillis": 60000,  
    "scrollTimeoutMillis": 300000,  
    "usePainless": true,  
    "scrollSize": 4000,  
    "allowPushdownOnNormalizedOrAnalyzedFields": false,  
    "warnOnRowCountMismatch": false,  
    "encryptionValidationMode": "CERTIFICATE_AND_HOSTNAME_VALIDATION",  
    "forceDoublePrecision": false,  
    "hostList": [  
      {  
        "hostname": "172.25.0.208",  
        "port": 9200  
      }  
    ],  
    "authenticationType": "ANONYMOUS",  
    "sslEnabled": false,  
    "useWhitelist": false  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-7 "Direct link to Parameters")
scriptsEnabled Body Boolean Optional
If Dremio should use script pushdowns, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
showHiddenIndices Body Boolean Optional
To show hidden indices, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
showIdColumn Body Boolean Optional
To show the Elasticsearch ID column, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
readTimeoutMillis Body Integer Optional
Time to wait to read data from the source, in milliseconds. Default is `60000`.
Example: 60000
* * *
scrollTimeoutMillis Body Integer Optional
Time to wait for each scroll request, in milliseconds. Default is `300000`.
Example: 300000
* * *
usePainless Body Boolean Optional
To use the Painless scripting language when connecting to Elasticsearch 5.0+, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
scrollSize Body Integer Optional
Scroll size for Dremio's Elasticsearch requests. Default is `4000`. The scrollSize value must be less than or equal to the setting for index.max_result_window in Elasticsearch.
Example: 4000
* * *
allowPushdownOnNormalizedOrAnalyzedFields Body Boolean Optional
To enable pushdown filters and aggregations on analyzed text fields and normalized keyword fields, set to `true`. Otherwise, set to `false` (default). May produce unexpected results when enabled.
Example: false
* * *
warnOnRowCountMismatch Body Boolean Optional
If Dremio should warn the user when a query returns fewer Elasticsearch records than expected instead of failing the query, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
encryptionValidationMode Body String Optional
Method to use to validate data encryption for the source.
Enum: CERTIFICATE_AND_HOSTNAME_VALIDATION, CERTIFICATE_ONLY_VALIDATION, NO_VALIDATION
Example: CERTIFICATE_AND_HOSTNAME_VALIDATION
* * *
forceDoublePrecision Body Boolean Optional
To force precision for double values, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
[hostList](/reference/api/catalog/source/container-source-config#parameters-of-objects-in-the-hostlist-array) Body Array of Object
Information about Elasticsearch hosts. Each object in the hostList includes the hostname and the corresponding port for the host.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"hostname": "172.25.0.208","port": 9200{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
authenticationType Body String
Type of authentication for Dremio to use to connect to the source.
Enum: ANONYMOUS, MASTER
Example: ANONYMOUS
* * *
username Body String
Username for authenticating with master credentials. Required for authenticationType `MASTER`.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authenticationType `MASTER`. To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
sslEnabled Body Boolean Optional
To enable a secure connection with SSL encryption between Elasticsearch and Dremio, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
useWhitelist Body Boolean Optional
To query only the hosts specified in the hostList, set to `true`. Otherwise, set to `false` (default).
Example: false
#### Parameters of Objects in the `hostList` Array[​](/reference/api/catalog/source/container-source-config#parameters-of-objects-in-the-hostlist-array "Direct link to parameters-of-objects-in-the-hostlist-array")
hostname Body String Optional
Name of the host to use to connect to the Elasticsearch source.
Example: 172.25.0.208
* * *
port Body Integer Optional
Port to use with the specified hostname to connect to the Elasticsearch source. Default is `9200`.
Example: 9200
## Google BigQuery[​](/reference/api/catalog/source/container-source-config#google-bigquery "Direct link to Google BigQuery")
  * Dremio source type: `BIGQUERY`
  * See [Google BigQuery](/data-sources/databases/google-bigquery) for additional information.

Google BigQuery Source config Object

```
{  
  "config": {  
    "hostname": "https://www.googleapis.com/bigquery/v2",  
    "port": "443",  
    "projectId": "your_project_id",  
    "authMode": "SERVICE_ACCOUNT_KEYS",  
    "clientEmail": "service-account@your_project.iam.gserviceaccount.com",  
    "privateKey": "-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----",  
    "fetchSize": 1000,  
    "maxIdleConns": 10,  
    "idleTimeSec": 300,  
    "queryTimeoutSec": 600,  
    "propertyList": []  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-8 "Direct link to Parameters")
hostname Body String
Google BigQuery hostname. Expected value is `https://www.googleapis.com/bigquery/v2`.
* * *
port Body String
Google BigQuery port number. Expected value is `443`.
* * *
projectId Body String
Google Cloud project ID.
Example: Project_unique_id
* * *
authMode Body String
Authentication mode for the Google BigQuery connector. Expected value is `SERVICE_ACCOUNT_KEYS`.
Example: SERVICE_ACCOUNT_KEYS
* * *
clientEmail Body String
Google service account email address.
Example: 
* * *
privateKey Body String Optional
Service account key associated with the supplied service account. The REST API expects the JSON object within the service account key JSON file.
Example:

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

* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "deferPrepares","value": "true"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
## Google Cloud Storage[​](/reference/api/catalog/source/container-source-config#google-cloud-storage "Direct link to Google Cloud Storage")
  * Dremio source type: `GCS`
  * See [Google Cloud Storage](/data-sources/object/gcs) for additional information.

Google Cloud Storage Source config Object

```
{  
  "config": {  
    "projectId": "dremio-4321",  
    "authMode": "AUTO",  
    "rootPath": "/",  
    "asyncEnabled": true,  
    "cachingEnable": true,  
    "cachePercent": 70,  
    "privateKeyId": "",  
    "clientEmail": "",  
    "clientId": "",  
    "defaultCtasFormat": "ICEBERG",  
    "propertyList": [  
      {  
        "name": "dremio.gcs.clientEmail",  
        "value": "exampleuser@dremio-project.iam.gserviceaccount.com"  
      }  
    ],  
    "isPartitionInferenceEnabled": false  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-9 "Direct link to Parameters")
projectId Body String
Project ID for the Google Cloud Storage project.
Example: dremio-4321
* * *
authMode Body String
Type of authentication for Dremio to use to connect to the source.
Enum: AUTO, SERVICE_ACCOUNT_KEYS
Example: AUTO
* * *
rootPath Body String Optional
Root path of the Google Cloud Storage source. Default is `/`.
Example: /
* * *
asyncEnabled Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
cachingEnable Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
cachePercent Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when cachingEnable is set to `true`. Default is `70`. Minimum is `1`. Maximum is `100`.
Example: 70
* * *
privateKeyId Body String
Service account key ID for the Google Cloud Storage service account. Required for authMode `SERVICE_ACCOUNT_KEYS`.
Example: f302b86d0247be19393bb66ea142887fc9621360
* * *
privateKey Body String
The service account key in plaintext or as the reference for the service account key in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authMode `SERVICE_ACCOUNT_KEYS`. To keep the service account key secure, Dremio returns the privateKey value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext privateKey values must be prefixed with `data:,` — for example, `data:,`plaintext_service_account_key``. Plaintext privateKey values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_service_account_key``.
* * *
clientEmail Body String
Email address associated with the Google Cloud Storage service account. Required only if authenticating with the Service Account Keys method.
Example: 
* * *
clientId Body String
Client ID for the key pair. Required only if authenticating with the Service Account Keys method.
Example: 243769857672272684657
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dremio.gcs.clientEmail","value": "
* * *
isPartitionInferenceEnabled Body Boolean Optional
To enable partition column inference, set to `true`. Otherwise, set to `false` (default). For more information, see [Partition Column Inference](/developer/data-formats/table#partition-column-inference).
Example: false
## Hadoop Distributed File System (HDFS)[​](/reference/api/catalog/source/container-source-config#hadoop-distributed-file-system-hdfs "Direct link to Hadoop Distributed File System \(HDFS\)")
  * Dremio source type: `HDFS`
  * See [HDFS](/data-sources/object/hdfs) for additional information.

HDFS Source config Object

```
{  
  "config": {  
    "hostname": "172.23.0.208",  
    "port": 8020,  
    "enableImpersonation": false,  
    "rootPath": "/",  
    "shortCircuitFlag": "SYSTEM",  
    "enableAsync": true,  
    "isCachingEnabled": false,  
    "maxCacheSpacePct": 100,  
    "defaultCtasFormat": "ICEBERG",  
    "isPartitionInferenceEnabled": false,  
    "impersonationUserDelegationMode": "AS_IS",  
    "propertyList": [  
      {  
        "name": "dfs.client.socket-timeout",  
        "value": "120000"  
      }  
    ],  
    "vdsAccessDelegationEnabled": true  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-10 "Direct link to Parameters")
hostname Body String
HDFS NameNode hostname to use to connect to the HDFS source.
Example: 172.23.0.208
* * *
port Body Integer
HDFS NameNode port to use to connect to the HDFS source. Default is `8020`.
Example: 8020
* * *
enableImpersonation Body Boolean Optional
To enable user-specific file access permissions by turning on impersonation in HDFS sources, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
rootPath Body String Optional
Root path of the HDFS source. Default is `/`.
Example: /
* * *
shortCircuitFlag Body String Optional
Implementation status for short-circuit local reads. Default is `SYSTEM`.
Enum: ENABLED, DISABLED, SYSTEM
Example: SYSTEM
* * *
shortCircuitSocketPath Body String Optional
Socket path to use if shortCircuitFlag is enabled.
Example: /var/lib/hadoop-hdfs/dn-socket
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
isPartitionInferenceEnabled Body Boolean Optional
To enable partition column inference, set to `true`. Otherwise, set to `false` (default). For more information, see [Partition Column Inference](/developer/data-formats/table#partition-column-inference).
Example: false
* * *
impersonationUserDelegationMode Body String Optional
Capitalization method to use for impersonation usernames. Default is `AS_IS`.
Enum: AS_IS, LOWERCASE, UPPERCASE
Example: AS_IS
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dfs.client.socket-timeout","value": "120000"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
vdsAccessDelegationEnabled Body Boolean Optional
To use the view owner as the impersonated username when enableImpersonation is enabled, set to `true` (default). To use the user who submits the query as the impersonated username, set to `false`.
Example: true
## Hive 2[​](/reference/api/catalog/source/container-source-config#hive-2 "Direct link to Hive 2")
  * Dremio source type: `HIVE`
  * See [Hive](/data-sources/lakehouse-catalogs/hive) for additional information.

Hive 2 Source config Object

```
{  
  "config": {  
    "hostname": "172.23.0.208",  
    "port": 9083,  
    "enableSasl": false,  
    "propertyList": [  
      {  
        "name": "hive.server2.enable.doAs",  
        "value": "false"  
      }  
    ],  
    "secretPropertyList": [  
      {  
        "name": "fs.s3a.secret.key",  
        "value": "70SPup32UsIZaA6c2n6bf3rQONTD6Zn6OqvcUhBy"  
      }  
    ],  
    "enableAsync": true,  
    "isCachingEnabledForS3AndAzureStorage": true,  
    "isCachingEnabledForHDFS": true,  
    "maxCacheSpacePct": 100,  
    "defaultCtasFormat": "ICEBERG",  
    "authType": "STORAGE",  
    "rangerServiceName": "",  
    "rangerHostURL": "",  
    "impersonationUserDelegationMode": "AS_IS",  
    "vdsAccessDelegationEnabled": true  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-11 "Direct link to Parameters")
hostname Body String
IP address for the Hive metastore host.
Example: 172.23.0.208
* * *
port Body Integer
Port to use with the specified hostname to connect to the Hive source. Default is `9083`.
Example: 9083
* * *
enableSasl Body Boolean Optional
To enable Simple Authentication and Security Layer (SASL), set to `true` (default). Otherwise, set to `false`.
Example: false
* * *
kerberosPrincipal Body String Optional
Name of the Kerberos principal identity for SASL. Required only if enableSasl is `true`.
Example: primary/instance@REALM
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "hive.server2.enable.doAs","value": "false"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
secretPropertyList Body Array of Object Optional
Additional connection properties for the source. The values are kept masked in the Credentials section of the Advanced Options page of the Source Settings dialog in the Dremio UI. Each object includes the name of the property and the corresponding value to use and to keep secret.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.secret.key","value": "70SPup32UsIZaA6c2n6bf3rQONTD6Zn6OqvcUhBy"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabledForS3AndAzureStorage Body Boolean Optional
To enable local caching for Amazon S3 and Azure Storage, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabledForHDFS Body Boolean Optional
To enable local caching for Hadoop Distributed File System (HDFS), set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
authType Body String Optional
Type of authentication for Dremio to use to connect to the source. Default is `STORAGE`.
Enum: STORAGE, SQL, RANGER
Example: STORAGE
* * *
rangerServiceName Body String Optional
The Ranger service name, if you are using Ranger-based authentication.
Example: hivedev
* * *
rangerHostURL Body String Optional
The Ranger host URL, if you are using Ranger-based authentication.
Example: 
* * *
impersonationUserDelegationMode Body String Optional
Capitalization method to use for impersonation usernames. Default is `AS_IS`.
Enum: AS_IS, LOWERCASE, UPPERCASE
Example: AS_IS
* * *
vdsAccessDelegationEnabled Body Boolean Optional
To use the view owner as the impersonated username when enableImpersonation is enabled, set to `true` (default). To use the user who submits the query as the impersonated username, set to `false`.
Example: true
## Hive 3[​](/reference/api/catalog/source/container-source-config#hive-3 "Direct link to Hive 3")
  * Dremio source type: `HIVE3`
  * See [Hive](/data-sources/lakehouse-catalogs/hive) for additional information.

Hive 3 Source config Object

```
{  
  "config": {  
    "hostname": "172.23.0.177",  
    "port": 9084,  
    "enableSasl": false,  
    "propertyList": [  
      {  
        "name": "fs.s3a.aws.credentials.provider",  
        "value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"  
      }  
    ],  
    "secretPropertyList": [  
      {  
        "name": "fs.s3a.secret.key",  
        "value": "70SPup32UsIZaA6c2n6bf3rQONTD6Zn6OqvcUhBy"  
      }  
    ],  
    "enableAsync": true,  
    "isCachingEnabledForS3AndAzureStorage": true,  
    "isCachingEnabledForHDFS": false,  
    "maxCacheSpacePct": 100,  
    "defaultCtasFormat": "ICEBERG",  
    "authType": "STORAGE",  
    "rangerServiceName": "",  
    "rangerHostURL": "",  
    "impersonationUserDelegationMode": "AS_IS",  
    "vdsAccessDelegationEnabled": true  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-12 "Direct link to Parameters")
hostname Body String
IP address for the Hive metastore host.
Example: 172.23.0.177
* * *
port Body Integer
Port to use with the specified hostname to connect to the Hive source. Default is `9083`.
Example: 9084
* * *
enableSasl Body Boolean Optional
To enable Simple Authentication and Security Layer (SASL), set to `true` (default). Otherwise, set to `false`.
Example: false
* * *
kerberosPrincipal Body String Optional
Name of the Kerberos principal identity for SASL. Required only if enableSasl is `true`.
Example: primary/instance@REALM
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.aws.credentials.provider","value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
secretPropertyList Body Array of Object Optional
Additional connection properties for the source. The values are kept masked in the Credentials section of the Advanced Options page of the Source Settings dialog in the Dremio UI. Each object includes the name of the property and the corresponding value to use and to keep secret.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.secret.key","value": "70SPup32UsIZaA6c2n6bf3rQONTD6Zn6OqvcUhBy"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabledForS3AndAzureStorage Body Boolean Optional
To enable local caching for Amazon S3 and Azure Storage, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabledForHDFS Body Boolean Optional
To enable local caching for Hadoop Distributed File System (HDFS), set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
authType Body String Optional
Type of authentication for Dremio to use to connect to the source. Default is `STORAGE`.
Enum: STORAGE, SQL, RANGER
Example: STORAGE
* * *
rangerServiceName Body String Optional
The Ranger service name, if you are using Ranger-based authentication.
Example: hivedev
* * *
rangerHostURL Body String Optional
The Ranger host URL, if you are using Ranger-based authentication.
Example: 
* * *
impersonationUserDelegationMode Body String Optional
Capitalization method to use for impersonation usernames. Default is `AS_IS`.
Enum: AS_IS, LOWERCASE, UPPERCASE
Example: AS_IS
* * *
vdsAccessDelegationEnabled Body Boolean Optional
To use the view owner as the impersonated username when enableImpersonation is enabled, set to `true` (default). To use the user who submits the query as the impersonated username, set to `false`.
Example: true
## IBM Db2[​](/reference/api/catalog/source/container-source-config#ibm-db2 "Direct link to IBM Db2")
  * Dremio source type: `DB2`
  * See [IBM Db2](/data-sources/databases/ibm-db2) for additional information.

IBM Db2 Source config Object

```
{  
  "config": {  
    "database": "tpch",  
    "hostname": "172.25.1.245",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "port": "50000",  
    "fetchSize": 200,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "propertyList": [  
      {  
        "name": "deferPrepares",  
        "value": "true"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-13 "Direct link to Parameters")
database Body String
IBM Db2 database for Dremio to use.
Example: tpch
* * *
hostname Body String
IBM Db2 hostname.
Example: 172.25.1.245
* * *
username Body String
Username for authentication.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
port Body String
IBM Db2 port number. Default is `50000`.
Example: 50000
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "deferPrepares","value": "true"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
## Iceberg REST Catalog[​](/reference/api/catalog/source/container-source-config#iceberg-rest-catalog "Direct link to Iceberg REST Catalog")
  * Dremio source type: `RESTCATALOG`
  * See [Iceberg REST Catalog](/data-sources/lakehouse-catalogs/iceberg-rest-catalog) for additional information on all supported catalogs from this connector, including Apache Polaris OSS, Nessie with Iceberg REST, AWS Glue Iceberg REST, S3 Tables, Confluent Tableflow, and [Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake).

Iceberg REST Catalog Source config Object

```
{  
  "config": {  
    "propertyList": [  
      {  
        "name": "warehouse",  
        "value": "polaris_oss_catalog"  
      },  
      {  
        "name": "scope",  
        "value": "PRINCIPAL_ROLE:ALL"  
      },  
      {  
        "name": "fs.s3a.aws.credentials.provider",  
        "value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"  
      }  
    ],  
    "secretPropertyList": [  
      {  
        "name": "fs.s3a.access.key",  
        "value": "$DREMIO_EXISTING_VALUE$"  
      },  
      {  
        "name": "fs.s3a.secret.key",  
        "value": "$DREMIO_EXISTING_VALUE$"  
      },  
      {  
        "name": "credential",  
        "value": "client_id:client_secret"  
      }  
    ],  
    "enableAsync": true,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "restEndpointUri": "http://localhost:8181/api/catalog",  
    "allowedNamespaces": [  
      "sales",  
      "finance"  
    ],  
    "isUsingVendedCredentials": false,  
    "isRecursiveAllowedNamespaces": true  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-14 "Direct link to Parameters")
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property. For a complete list of the catalog properties required for storage authentication, see [Advanced Options](/data-sources/lakehouse-catalogs/iceberg-rest-catalog#advanced-options) on the Iceberg REST Catalog page.
The parameters needed will vary by the catalog to which you are connecting. The example above captures how to connect to a Polaris catalog using S3 storage and credentials. Examples of supported configurations can be found at [Supported Configurations](/data-sources/lakehouse-catalogs/iceberg-rest-catalog#supported-configurations).
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.aws.credentials.provider","value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
secretPropertyList Body Array of Object Optional
Additional connection properties for the source. The values are kept masked in the Credentials section of the Advanced Options page of the Source Settings dialog in the Dremio console. Each object includes the name of the property and the corresponding value to use and to keep secret. To keep the secret secure, Dremio returns the secretPropertyList value as `$DREMIO_EXISTING_VALUE$` in API responses. For a complete list of the catalog credentials required for storage authentication, see [Advanced Options](/data-sources/lakehouse-catalogs/iceberg-rest-catalog#advanced-options) on the Iceberg REST Catalog page.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.access.key","value": "$DREMIO_EXISTING_VALUE$"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
restEndpointUri Body String
URI for the catalog service that Dremio should connect to.
Example: 
* * *
isUsingVendedCredentials Body Boolean
If set to `true`, you do not need to provide credentials via the `secretPropertyList` object in your request, as the catalog will return temporary credentials for the underlying storage location. If set to `false`, credentials must be provided for the underlying storage location of the catalog to which you are connecting.
Example: true
* * *
allowedNamespaces Body Array of String Optional
A list of the namespaces that Dremio users are allowed to access. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces. Present the names in a comma-separated list.
Example: ["sales","finance"]
* * *
isRecursiveAllowedNamespaces Body Boolean Optional
If allowedNamespaces include their whole subtrees, set to `true` (default). Otherwise, set to `false`.
Example: true
## Microsoft Azure Data Explorer[​](/reference/api/catalog/source/container-source-config#microsoft-azure-data-explorer "Direct link to Microsoft Azure Data Explorer")
  * Dremio source type: `ADX`
  * See [Azure Data Explorer](/data-sources/databases/azure-data-explorer) for additional information.

Microsoft Azure Data Explorer Source config Object

```
{  
  "config": {  
    "clusterUri": "https://prod.eastus.kusto.windows.net",  
    "tenantId": "6e334262-b0c6-4c36-9faf-380e97e42964",  
    "appId": "c3e4554f-514a-4912-8b75-93800f0d6c71",  
    "appSecret": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MICROSOFT_ENTRA_ID",  
    "databaseName": "datatypes",  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-15 "Direct link to Parameters")
clusterUri Body String
URI for the Microsoft Entra ID tenant used by Dremio.
Example: 
* * *
tenantId Body String (UUID)
Unique identifier of the Microsoft Entra ID tenant. Required for authenticationType `MICROSOFT_ENTRA_ID`.
Example: 6e334262-b0c6-4c36-9faf-380e97e42964
* * *
appId Body String (UUID)
Unique identifier of the Microsoft Entra ID application used when Dremio connects. Required for authenticationType `MICROSOFT_ENTRA_ID`.
Example: c3e4554f-514a-4912-8b75-93800f0d6c71
* * *
appSecret Body String
The application secret in plaintext or as the reference for the application secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the application secret secure, Dremio returns the appSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for authenticationType `MICROSOFT_ENTRA_ID`.
Plaintext appSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_application_secret``. Plaintext appSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_application_secret``.
Example: AbC123dEf456GhI789JkLm0
* * *
clientId Body String
The client ID of the user-assigned managed identity to use for authentication. The Azure client ID is a 36-character hexadecimal string that includes 32 characters with hyphens.
Required for authenticationType `AZURE_MANAGED_IDENTITY`. For a system-assigned managed identity, omit this field.
Example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
* * *
authenticationType Body String
Type of authentication to allow Dremio to connect to Azure Data Explorer.
  * `MICROSOFT_ENTRA_ID`: Authenticate through a Microsoft Entra ID application. Requires the `tenantId`, `appId`, and `appSecret` fields.
  * `AZURE_MANAGED_IDENTITY`: Use Azure managed identity for authentication. For user-assigned managed identities, include the client ID in the `clientId` field. For system-assigned managed identities, omit the `clientId` field.


Example: MICROSOFT_ENTRA_ID
* * *
databaseName Body String
Default Azure Data Explorer database for Dremio to use.
Example: datatypes
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-4 "Direct link to Authentication Examples")
Microsoft Entra ID Application

```
{  
  "authenticationType": "MICROSOFT_ENTRA_ID",  
  "appId": "c3e4554f-514a-4912-8b75-93800f0d6c71",  
  "appSecret": "AbC123dEf456GhI789JkLm0",  
  "tenantId": "6e334262-b0c6-4c36-9faf-380e97e42964"  
}  

```

Azure Managed Identity

```
{  
  "authenticationType": "AZURE_MANAGED_IDENTITY",  
  "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"  
}  

```

## Microsoft Azure Synapse Analytics[​](/reference/api/catalog/source/container-source-config#microsoft-azure-synapse-analytics "Direct link to Microsoft Azure Synapse Analytics")
  * Dremio source type: `SYNAPSE`
  * See [Microsoft Azure Synapse Analytics](/data-sources/databases/azure-synapse-analytics) for additional information.

Microsoft Azure Synapse Analytics Source config Object

```
{  
  "config": {  
    "hostname": "synapsedata.sql.azuresynapse.net",  
    "port": "1433",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MASTER",  
    "fetchSize": 200,  
    "useSsl": false,  
    "enableServerVerification": true,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "database": "dedicatedpool",  
    "propertyList": [  
      {  
        "name": "applicationIntent",  
        "value": "ReadWrite"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-16 "Direct link to Parameters")
hostname Body String
Microsoft Azure Synapse Analytics hostname.
Example: synapsedata.sql.azuresynapse.net
* * *
port Body String Optional
Microsoft Azure Synapse Analytics port number. Default is `1433`.
Example: 1433
* * *
username Body String
Username for authentication. Required for authenticationType `MASTER`.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for authenticationType `MASTER`.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
clientId Body String
The client ID of the user-assigned managed identity to use for authentication. The Azure client ID is a 36-character hexadecimal string that includes 32 characters with hyphens.
Required for authenticationType `AZURE_MANAGED_IDENTITY`. For a system-assigned managed identity, omit this field.
Example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
* * *
authenticationType Body String
Type of authentication to use to allow Dremio to connect to the Microsoft Azure Synapse Analytics source.
  * `ANONYMOUS`: No authentication is needed.
  * `MASTER`: Use credentials from a master database user. Requires the `username` and `password` fields.
  * `AZURE_MANAGED_IDENTITY`: Use Azure managed identity for authentication. For user-assigned managed identities, include the client ID in the `clientId` field. For system-assigned managed identities, omit the `clientId` field.
  * `MICROSOFT_ENTRA_ID`: You must also include the `appId`, `appSecret`, and `tenantId` parameters in your request.


Example: MASTER
* * *
appId Body String (UUID)
Unique identifier of the Microsoft Entra ID application used when Dremio connects. Required for authenticationType `MICROSOFT_ENTRA_ID`.
Example: c3e4554f-514a-4912-8b75-93800f0d6c71
* * *
appSecret Body String
The application secret in plaintext or as the reference for the application secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the application secret secure, Dremio returns the appSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for authenticationType `MICROSOFT_ENTRA_ID`.
Plaintext appSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_application_secret``. Plaintext appSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_application_secret``.
Example: AbC123dEf456GhI789JkLm0
* * *
tenantId Body String (UUID)
Unique identifier of the Microsoft Entra ID tenant. Required for authenticationType `MICROSOFT_ENTRA_ID`.
Example: 6e334262-b0c6-4c36-9faf-380e97e42964
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
useSsl Body Boolean Optional
If the Microsoft Azure Synapse Analytics source is configured to use TLS for connections, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
enableServerVerification Body Boolean Optional
To verify the certificate for the Microsoft Azure Synapse Analytics source when connecting, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
database Body String Optional
Default Microsoft Azure Synapse Analytics database for Dremio to use.
Example: dedicatedpool
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "applicationIntent","value": "ReadWrite"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-5 "Direct link to Authentication Examples")
No authentication required

```
{  
  "authenticationType": "ANONYMOUS"  
}  

```

Master credentials

```
{  
  "authenticationType": "MASTER",  
  "username": "myUsername",  
  "password": "myPassword"  
}  

```

Azure Managed Identity

```
{  
  "authenticationType": "AZURE_MANAGED_IDENTITY",  
  "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"  
}  

```

## Microsoft SQL Server[​](/reference/api/catalog/source/container-source-config#microsoft-sql-server "Direct link to Microsoft SQL Server")
  * Dremio source type: `MSSQL`
  * See [Microsoft SQL Server](/data-sources/databases/sql-server) for additional information.

Microsoft SQL Server Source config Object

```
{  
  "config": {  
    "hostname": "172.25.0.10",  
    "port": "1433",  
    "username": "tpch",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MASTER",  
    "fetchSize": 200,  
    "useSsl": false,  
    "enableServerVerification": true,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "showOnlyConnectionDatabase": false,  
    "propertyList": [  
      {  
        "name": "applicationIntent",  
        "value": "ReadWrite"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-17 "Direct link to Parameters")
hostname Body String
Microsoft SQL Server hostname.
Example: 172.25.0.10
* * *
port Body String
Microsoft SQL Server port number. Default is `1433`.
Example: 1433
* * *
username Body String
Username for authentication. Required for authenticationType `MASTER`.
Example: tpch
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for authenticationType `MASTER`.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
clientId Body String
The client ID of the user-assigned managed identity to use for authentication. The Azure client ID is a 36-character hexadecimal string that includes 32 characters with hyphens.
Required for authenticationType `AZURE_MANAGED_IDENTITY`. For a system-assigned managed identity, omit this field.
Example: a1b2c3d4-e5f6-7890-abcd-ef1234567890
* * *
authenticationType Body String
Type of authentication to allow Dremio to connect to the Microsoft SQL Server source.
  * `ANONYMOUS`: No authentication is needed.
  * `MASTER`: Use credentials from a master database user. Requires the `username` and `password` fields.
  * `AZURE_MANAGED_IDENTITY`: Use Azure managed identity for authentication. For user-assigned managed identities, include the client ID in the `clientId` field. For system-assigned managed identities, omit the `clientId` field.
  * `MICROSOFT_ENTRA_ID`: You must also include the `appId`, `appSecret`, and `tenantId` parameters in your request.


Example: MASTER
* * *
appId Body String (UUID)
Unique identifier of the Microsoft Entra ID application used when Dremio connects. Required for authenticationType `MICROSOFT_ENTRA_ID`.
Example: c3e4554f-514a-4912-8b75-93800f0d6c71
* * *
appSecret Body String
The application secret in plaintext or as the reference for the application secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the application secret secure, Dremio returns the appSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for authenticationType `MICROSOFT_ENTRA_ID`.
Plaintext appSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_application_secret``. Plaintext appSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_application_secret``.
Example: AbC123dEf456GhI789JkLm0
* * *
tenantId Body String (UUID)
Unique identifier of the Microsoft Entra ID tenant. Required for authenticationType `MICROSOFT_ENTRA_ID`.
Example: 6e334262-b0c6-4c36-9faf-380e97e42964
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
useSsl Body Boolean Optional
If the Microsoft SQL Server source is configured to use TLS for connections, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
enableServerVerification Body Boolean Optional
To verify the certificate for the Microsoft SQL Server source when connecting, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
showOnlyConnectionDatabase Body Boolean Optional
To hide all databases that the credentialed user can access except the specified connection database, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "applicationIntent","value": "ReadWrite"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-6 "Direct link to Authentication Examples")
No authentication required

```
{  
  "authenticationType": "ANONYMOUS"  
}  

```

Master credentials

```
{  
  "authenticationType": "MASTER",  
  "username": "myUsername",  
  "password": "myPassword"  
}  

```

Azure Managed Identity

```
{  
  "authenticationType": "AZURE_MANAGED_IDENTITY",  
  "clientId": "a1b2c3d4-e5f6-7890-abcd-ef1234567890"  
}  

```

## MongoDB[​](/reference/api/catalog/source/container-source-config#mongodb "Direct link to MongoDB")
  * Dremio source type: `MONGO`
  * See [MongoDB](/data-sources/databases/mongo) for additional information.

MongoDB Source config Object

```
{  
  "config": {  
    "hostList": [  
      {  
        "hostname": "172.23.0.208",  
        "port": 27017  
      }  
    ],  
    "useSsl": false,  
    "authenticationType": "ANONYMOUS",  
    "authDatabase": "admin",  
    "authenticationTimeoutMillis": 2000,  
    "secondaryReadsOnly": false,  
    "subpartitionSize": 0,  
    "sampleSize": 4095,  
    "sampleMethod": "FIRST",  
    "propertyList": [  
      {  
        "name": "maxPoolSize",  
        "value": "100"  
      }  
    ],  
    "useCaseInsensitiveFieldNames": false  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-18 "Direct link to Parameters")
[hostList](/reference/api/catalog/source/container-source-config#parameters-of-objects-in-the-hostlist-array-1) Body Array of Object
Information about MongoDB hosts. Each object in the hostList includes the hostname and the corresponding port for the host.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"hostname": "172.23.0.208","port": 27017{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
useSsl Body Boolean Optional
To force a secure connection with SSL encryption between MongoDB and Dremio, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
authenticationType Body String
Type of authentication for Dremio to use to connect to the source.
Enum: ANONYMOUS, MASTER
Example: ANONYMOUS
* * *
username Body String
Username for authentication. Required for authenticationType `MASTER`.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authenticationType `MASTER`. To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
authDatabase Body String
Name of the MongoDB database to authenticate against.
Example: admin
* * *
authenticationTimeoutMillis Body Integer Optional
Time to wait for authentication requests, in milliseconds. Default is 2000.
Example: 2000
* * *
secondaryReadsOnly Body Boolean Optional
To disable reading from primaries, set to `true`. Otherwise, set to `false` (default). Enabling secondaryReadsOnly may degrade performance.
Example: false
* * *
subpartitionSize Body String Optional
Number of records to read by query fragments. Use subpartitionSize to increase query parallelism. Default is `0`.
Example: 0
* * *
sampleSize Body Integer Optional
Number of records to read when sampling to determine the schema for a collection. Default is `4095`. If the value is `0`, the sample size is unlimited.
Example: 4095
* * *
sampleMethod Body String Optional
Method by which records should be read when sampling a collection to determine the schema. Default is `FIRST`.
Enum: FIRST, LAST
Example: FIRST
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "maxPoolSize","value": "100"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
useCaseInsensitiveFieldNames Body Boolean Optional
To treat field names as case-insensitive, set to `true`. Otherwise, set to `false` (default). If set to `true`, Dremio records all known variations of a field name when learning the schema and uses them when pushing an operation down to MongoDB.
Example: false
#### Parameters of Objects in the `hostList` Array[​](/reference/api/catalog/source/container-source-config#parameters-of-objects-in-the-hostlist-array-1 "Direct link to parameters-of-objects-in-the-hostlist-array-1")
hostname Body String
Name of the host to use to connect to the MongoDB source. If MongoDB is sharded, use the mongos host. Otherwise, use the mongod host.
Example: 172.23.0.208
* * *
port Body Integer
Port to use with the specified hostname to connect to the MongoDB source. Default is `27017`.
Example: 27017
## MySQL[​](/reference/api/catalog/source/container-source-config#mysql "Direct link to MySQL")
  * Dremio source type: `MYSQL`
  * See [MySQL](/data-sources/databases/mysql) for additional information.

MySQL Source config Object

```
{  
  "config": {  
    "hostname": "rdbms-linux-20231031.c.company-4321.internal",  
    "port": "3306",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MASTER",  
    "fetchSize": 200,  
    "netWriteTimeout": 60,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "propertyList": [  
      {  
        "name": "DataSource",  
        "value": "sales2021"  
      }  
    ],  
    "queryTimeoutSec": 0  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-19 "Direct link to Parameters")
hostname Body String
Name of the host to use to connect to the mySQL source.
Example: rdbms-linux-20221031.c.dremio-4321.internal
* * *
port Body Integer
Port to use with the specified hostname to connect to the mySQL source. Default is `3306`.
Example: 3306
* * *
username Body String
Username for authentication. Required for authenticationType `MASTER`.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authenticationType `MASTER`. To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
authenticationType Body String
Type of authentication for Dremio to use to connect to the source.
Enum: ANONYMOUS, MASTER
Example: MASTER
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
netWriteTimeout Body Integer Optional
Length of time, in seconds, before an idle connection is eligible to be closed. Default is `60`.
Example: 60
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "DataSource","value": "sales2021"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
#### Parameters of Objects in the `propertyList` Array[​](/reference/api/catalog/source/container-source-config#parameters-of-objects-in-the-propertylist-array "Direct link to parameters-of-objects-in-the-propertylist-array")
name Body String Optional
Name of the connection property.
Example: DataSource
* * *
value Body String Optional
Value for the connection property.
Example: sales2021
## Nessie[​](/reference/api/catalog/source/container-source-config#nessie "Direct link to Nessie")
  * Dremio source type: `NESSIE`
  * See [Nessie](/data-sources/lakehouse-catalogs/nessie) for additional information.

Nessie Source config Object

```
{  
  "config": {  
    "nessieEndpoint": "http://172.25.0.138:19120/api/v2",  
    "nessieAuthType": "BEARER",  
    "nessieAccessToken": "$DREMIO_EXISTING_VALUE$",  
    "asyncEnabled": true,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "credentialType": "ACCESS_KEY",  
    "awsAccessKey": "AKIAQ3XZRGQRKEXAMPLE",  
    "awsAccessSecret": "$DREMIO_EXISTING_VALUE$",  
    "awsRootPath": "/tmp.dremio.com/myFolder",  
    "propertyList": [  
      {  
        "name": "fs.s3a.proxy.host",  
        "value": "proxyHost.example.com"  
      }  
    ],  
    "secure": true  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-20 "Direct link to Parameters")
nessieEndpoint Body String
IP address and port that you have set up for your Nessie server.
Example: 
* * *
nessieAuthType Body String Optional
Type of Nessie authentication for Dremio to use to connect to the source. If set to `NONE`, Nessie authentication is not enforced on the Nessie server and other Dremio users can view the source without authenticating. If set to `BEARER`, Nessie authentication is enforced with an OpenID bearer token (default).
Enum: NONE, BEARER
Example: BEARER
* * *
nessieAccessToken Body String Optional
The bearer access token in plaintext or as the reference for the bearer access token in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for nessieAuthType `BEARER`. To keep the bearer access token secure, Dremio returns the nessieAccessToken value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext nessieAccessToken values must be prefixed with `data:,` — for example, `data:,`plaintext_nessie_access_token``. Plaintext nessieAccessToken values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_nessie_access_token``.
* * *
asyncEnabled Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
storageType Body String
The storage provider that you are using for your Nessie source.
Enum: AWS, AZURE, GCS
Example: AWS
* * *
awsRootPath Body String Optional
The Amazon S3 path prefix that Dremio should use as the write location for new Iceberg metadata and data. The root path includes the name of the Amazon S3 bucket, followed by the names of any folders. Required if you are using Amazon S3 as the storage provider for your Nessie source.
Example: /tmp.dremio.com/myFolder
* * *
credentialType Body String Optional
Type of credential for Dremio to use to connect to AWS for storage of metadata and data files for tables and views. Required if you are using Amazon S3 as the storage provider for your Nessie source.
Enum: NONE, EC2_METADATA, ACCESS_KEY, AWS_PROFILE
Example: ACCESS_KEY
* * *
awsAccessKey Body String Optional
AWS access key. Required if you are using credentialType `ACCESS_KEY` and Amazon S3 as the storage provider for your Nessie source.
Example: AKIAQ3XZRGQRKEXAMPLE
* * *
awsAccessSecret Body String Optional
The AWS access secret in plaintext or as the reference for the AWS access secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for credentialType `ACCESS_KEY`. To keep the access secret secure, Dremio returns the awsAccessSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext awsAccessSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_access_secret``. Plaintext awsAccessSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_access_secret``.
* * *
assumedRoleARN Body String Optional
Amazon Resource Name (ARN) for the AWS Identity and Access Management (IAM) role to assume. Optional for credentialType `ACCESS_KEY` and `EC2_METADATA`. Not applicable for credentialType `AWS_PROFILE ` and `NONE`.
Example: arn:aws:iam::594632595346:role/OrganizationAccountAccessRole
* * *
awsProfile Body String Optional
The AWS profile name. Applies only if you are using the credentialType `AWS_PROFILE` and Amazon S3 as the storage provider for your Nessie source. If you do not provide a profile name, Dremio uses the default profile.
Example: example-profile
* * *
azureStorageAccount Body String Optional
The name of the Azure Storage account to use. Required if you are using Azure Storage as the storage provider for your Nessie source.
Example: prodstorage12
* * *
azureRootPath Body String Optional
The path in your Azure Storage account that Dremio should use as the write location for new Iceberg metadata and data. The root path includes the name of the Azure Storage container, followed by the names of any folders. Required if you are using Azure Storage as the storage provider for your Nessie source.
Example: /containername/folder1/folder2
* * *
azureAuthenticationType Body String Optional
The method you want to use to authenticate to Azure Storage: access key (`ACCESS_KEY`) or Microsoft Entra ID (`AZURE_ACTIVE_DIRECTORY`). If you choose `ACCESS_KEY`, you must also include the `azureAccessKey` parameter in your request. If you choose `AZURE_ACTIVE_DIRECTORY`, you must also include the `azureApplicationId`, `azureClientSecret`, and `azureOAuthTokenEndpoint` parameters in your request. Required if you are using Azure Storage as the storage provider for your Nessie source.
Enum: ACCESS_KEY, AZURE_ACTIVE_DIRECTORY
Example: ACCESS_KEY
* * *
azureAccessKey Body String Optional
The shared access key for the Azure Storage account. Required if you are using the azureAuthenticationType `ACCESS_KEY` and Azure Storage as the storage provider for your Nessie source.
Example: abc123DEF456ghi789JKL012mno345PQR678stu901vwx234yzA567bcd890EFG123hij45EXAMPLE=
* * *
azureApplicationId Body String Optional
The ID for the application (client) in Azure. Required if you are using the azureAuthenticationType `AZURE_ACTIVE_DIRECTORY` and Azure Storage as the storage provider for your Nessie source.
Example: 0d416550-e530-45ce-8367-e4aa4EXAMPLE
* * *
azureClientSecret Body String Optional
The Azure client secret in plaintext or as the reference for the Azure client secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required if you are using the azureAuthenticationType `AZURE_ACTIVE_DIRECTORY` and Azure Storage as the storage provider for your Nessie source. To keep the client secret secure, Dremio returns the azureClientSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext azureClientSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_client_secret``. Plaintext azureClientSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_client_secret``.
* * *
azureOAuthTokenEndpoint Body String Optional
The OAuth 2.0 token endpoint (v1.0), including the tenant ID, that the application uses to get an access token or a refresh token. Required if you are using the azureAuthenticationType `AZURE_ACTIVE_DIRECTORY` and Azure Storage as the storage provider for your Nessie source.
Example: 
* * *
googleProjectId Body String Optional
The ID for your Google Cloud Storage (GCS) project. You can find the ID in the **Project info** pane at the top-left of your screen on the GCS Home page. Required if you are using GCS as the storage provider for your Nessie source.
Example: project-id-1234
* * *
googleRootPath Body String Optional
The Google Cloud Storage (GCS) path prefix that Dremio should use as the write location for new Iceberg metadata and data. The root path includes the name of the GCS bucket, followed by the names of any folders. Required if you are using GCS as the storage provider for your Nessie source.
Example: gcs-data/prod/nessie_gcs
* * *
googleAuthenticationType Body String Optional
The method you want to use to authenticate to Google Cloud Storage (GCS): service account key (`SERVICE_ACCOUNT_KEYS`) or automatic/service account (`AUTO`). If you choose `SERVICE_ACCOUNT_KEYS`, you must also include the `googleClientEmail`, `googleClientId`, and `googlePrivateKey` parameters in your request. If you choose `AUTO`, and you are running Dremio on a Google Compute instance, Dremio uses the active service account for your instance and does not require any additional information to integrate with your data. Required if you are using GCS as the storage provider for your Nessie source.
Enum: AUTO, SERVICE_ACCOUNT_KEYS
Example: AUTO
* * *
googleClientEmail Body String Optional
The email address associated with the Google Cloud Storage (GCS) service account. Required if you are using googleAuthenticationType `SERVICE_ACCOUNT_KEY` and GCS as the storage provider for your Nessie source.
Example: 
* * *
googleClientId Body String Optional
The client ID for your Google Cloud Storage (GCS) key pair. Required if you are using googleAuthenticationType `SERVICE_ACCOUNT_KEY` and GCS as the storage provider for your Nessie source.
Example: GA1.1.24470803.3400000000
* * *
googlePrivateKeyId Body String Optional
The key ID for your Google Cloud Storage key pair.
Example: ab7jqegoaz6ar4xplnf9vnxtoia86z0rnexample
* * *
googlePrivateKey Body String Optional
The key for your Google Cloud Storage (GCS) key pair in plaintext or as the reference for the Azure client secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required if you are using googleAuthenticationType `SERVICE_ACCOUNT_KEY` and GCS as the storage provider for your Nessie source. To keep the key secure, Dremio returns the googlePrivateKey value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext googlePrivateKey values must be prefixed with `data:,` — for example, `data:,`plaintext_private_key``. Plaintext googlePrivateKey values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_private_key``.
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.proxy.host","value": "proxyHost.example.com"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
secure Body Boolean Optional
If set to enable a secure connection with SSL encryption between the Amazon S3 bucket and Dremio, the value is `true` (default). Otherwise, the value is `false`.
Example: true
## Network-attached Storage (NAS)[​](/reference/api/catalog/source/container-source-config#network-attached-storage-nas "Direct link to Network-attached Storage \(NAS\)")
  * Dremio source type: `NAS`
  * See [NAS](/data-sources/object/nas) for additional information.

NAS Source config Object

```
{  
  "config": {  
    "path": "/home/dremio/",  
    "defaultCtasFormat": "ICEBERG",  
    "isPartitionInferenceEnabled": false  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-21 "Direct link to Parameters")
path Body String
Path on the filesystem to use as the root for the source. The path must be accessible on all nodes.
Example: /home/dremio/
* * *
defaultCtasFormat Body String Optional
Default format for the tables you create in Dremio. Default is `ICEBERG`.
Enum: ICEBERG, PARQUET
Example: ICEBERG
* * *
isPartitionInferenceEnabled Body Boolean Optional
To enable partition column inference, set to `true`. Otherwise, set to `false` (default). For more information, read [Partition Column Inference](/developer/data-formats/table#partition-column-inference).
Example: false
## Oracle[​](/reference/api/catalog/source/container-source-config#oracle "Direct link to Oracle")
  * Dremio source type: `ORACLE`
  * See [Oracle](/data-sources/databases/oracle) for additional information.

Oracle Source config Object

```
{  
  "config": {  
    "hostname": "172.25.0.10",  
    "port": "1521",  
    "instance": "xe",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MASTER",  
    "fetchSize": 200,  
    "useSsl": false,  
    "useTimezoneAsRegion": true,  
    "includeSynonyms": false,  
    "useLdap": false,  
    "nativeEncryption": "ACCEPTED",  
    "useKerberos": false,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "mapDateToTimestamp": true,  
    "queryTimeoutSec": 0,  
    "propertyList": [  
      {  
        "name": "connect_timeout",  
        "value": "0"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-22 "Direct link to Parameters")
hostname Body String
Oracle hostname.
Example: 172.25.0.10
* * *
port Body String
Oracle port number. Default is `1521`.
Example: 1521
* * *
instance Body String
Name of the Oracle database.
Example: xe
* * *
username Body String
Username for authentication. Required for authenticationType `MASTER`.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authenticationType `MASTER`. To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
secretResourceUrl Body String
For secret-based authentication, the Amazon Resource Name (ARN) for the secret. To keep the secret secure, Dremio returns the secretResourceUrl value as `$DREMIO_EXISTING_VALUE$` in API responses.
Example: arn:aws:secretsmanager:us-west-2:123456789012:secret:my-rds-secret-VNenFy
* * *
authenticationType Body String
Type of authentication to use to allow Dremio to connect to the Oracle source.
  * `ANONYMOUS`: No authentication is needed.
  * `MASTER`: Use credentials from a master database user or a secret resource URL.
  * `KERBEROS`: Authenticate with Kerberos.


Example: MASTER
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
useSsl Body Boolean Optional
If the Oracle source is configured to use TLS for connections, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
useTimezoneAsRegion Body Boolean Optional
To use the timezone to set the connection region, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
includeSynonyms Body Boolean Optional
To include Oracle synonyms as datasets in the source, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
nativeEncryption Body String Optional
If using Oracle native encryption for the connection, the encryption setting to use. Default is `ACCEPTED`.
Enum: REJECTED, ACCEPTED, REQUESTED, REQUIRED
Example: ACCEPTED
* * *
useKerberos Body Boolean Optional
To use Kerberos for authentication, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
mapDateToTimestamp Body Boolean Optional
If the DATE column should display values in timestamp format, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "connect_timeout","value": "0"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-7 "Direct link to Authentication Examples")
No authentication required

```
{  
  "authenticationType": "ANONYMOUS"  
}  

```

Master credentials

```
{  
  "authenticationType": "MASTER",  
  "username": "myUsername",  
  "password": "myPassword"  
}  

```

Secret resource URL

```
{  
  "authenticationType": "MASTER",  
  "username": "myUsername",  
  "secretResourceUrl": "arn:aws:secretsmanager:us-west-2:123456789012:secret:my-rds-secret-VNenFy"  
}  

```

Using Kerberos

```
{  
  "credentialType": "KERBEROS",  
  "username": null,  
  "password": null,  
  "useKerberos": true  
}  

```

## PostgreSQL[​](/reference/api/catalog/source/container-source-config#postgresql "Direct link to PostgreSQL")
  * Dremio source type: `POSTGRES`
  * See [PostgreSQL](/data-sources/databases/postgres) for additional information.

PostgreSQL Source config Object

```
{  
  "config": {  
    "hostname": "172.25.0.10",  
    "port": "5432",  
    "databaseName": "postgres",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "authenticationType": "MASTER",  
    "fetchSize": 200,  
    "useSsl": false,  
    "encryptionValidationMode": "CERTIFICATE_AND_HOSTNAME_VALIDATION",  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "propertyList": [  
      {  
        "name": "connect_timeout",  
        "value": "10"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-23 "Direct link to Parameters")
hostname Body String
PostgreSQL hostname.
Example: 172.25.0.10
* * *
port Body String
PostgreSQL port number. Default is `5432`.
Example: 5432
* * *
databaseName Body String
Default PostgreSQL database for Dremio to use.
Example: postgres
* * *
username Body String
Username for authentication. Required for authenticationType `MASTER`.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authenticationType `MASTER`. To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
secretResourceUrl Body String
For secret-based authentication, the Amazon Resource Name (ARN) for the secret. To keep the secret secure, Dremio returns the secretResourceUrl value as `$DREMIO_EXISTING_VALUE$` in API responses.
Example: arn:aws:secretsmanager:us-west-2:123456789012:secret:my-rds-secret-VNenFy
* * *
authenticationType Body String
Type of authentication to use to allow Dremio to connect to the PostgreSQL source.
  * `ANONYMOUS`: No authentication is needed.
  * `MASTER`: Use credentials from a master database user or a secret resource URL.


Example: MASTER
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
useSsl Body Boolean Optional
If the PostgreSQL source is configured to use TLS for connections, set to `true`. Otherwise, set to `false`.
Example: false
* * *
encryptionValidationMode Body String Optional
Method to use to validate data encryption for the source. The available settings map to PostgreSQL sslmode terminology as follows:
  * `CERTIFICATE_AND_HOSTNAME_VALIDATION`: verify-full
  * `CERTIFICATE_ONLY_VALIDATION`: verify-ca
  * `NO_VALIDATION`: require


Example: CERTIFICATE_AND_HOSTNAME_VALIDATION
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "connect_timeout","value": "10&application_name=myapp"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-8 "Direct link to Authentication Examples")
No authentication required

```
{  
"authenticationType": "ANONYMOUS"  
}  

```

Master credentials

```
{  
"authenticationType": "MASTER",  
"username": "myUsername",  
"password": "myPassword"  
}  

```

## SAP HANA[​](/reference/api/catalog/source/container-source-config#sap-hana "Direct link to SAP HANA")
  * Dremio source type: `SAPHANA`
  * See [Configuring SAP HANA as a Source](/data-sources/databases/sap-hana) for additional information.

SAP HANA Source config Object

```
"config": {  
  "hostname": "sap://hanaserver1.company.com",  
  "port": "39017",  
  "schema": "marketing",  
  "username": "myUsername",  
  "password": "myPassword",  
  "maxIdleConns": 8,  
  "idleTimeSec": 60,  
  "queryTimeoutSec": 0,  
  "fetchSize": 2000,  
  "propertyList": []  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-24 "Direct link to Parameters")
hostname Body String
The SAP HANA hostname. This can be a fully qualified domain name or an IP address.
Example: sap://hanaserver1.company.com
* * *
port Body String
The SAP HANA port number. The commonly used default port number for SAP HANA is `39017`.
Example: 39017
* * *
schema Body String Optional
Specifies the schema the connector will use.
Example: marketing
* * *
username Body String
Username for authentication.
Example: myUsername
* * *
password Body String
The SAP HANA password.
Example: myPassword
* * *
fetchSize Body Integer
The number of records to fetch per request. Set to `0` to enable Dremio to automatically set the size.
Example: 2000
* * *
maxIdleConns Body Integer
Sets the maximum number of idle connections that you want to keep.
Example: 8
* * *
idleTimeSec Body Integer
Sets the idle time, in seconds, before a connection is evaluated for closure.
Example: 60
* * *
queryTimeoutSec Body Integer
Sets the timeout, in seconds, for a query execution before it is canceled. If you do not want a timeout, enter `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in propertyList includes the name of the property and the corresponding value to use for the property. For SAP HANA, see the list of supported 
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "connectTimeout","value": "0"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
## Snowflake[​](/reference/api/catalog/source/container-source-config#snowflake "Direct link to Snowflake")
  * Dremio source type: `SNOWFLAKE`
  * See [Snowflake](/data-sources/databases/snowflake) for additional information.

Snowflake Source config Object

```
{  
  "config": {  
    "hostname": "https://locator_id.snowflakecomputing.com",  
    "port": "443",  
    "database": "sample_data",  
    "warehouse": "compute_wh",  
    "username": "dremio",  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "fetchSize": 2000,  
    "authMode": "KEY_PAIR",  
    "privateKey": "data:,fa2dlf8MaczJj+szv5KSCvQzs5MGhNtiMggV5qcw8vkgRshfZw76FKBPrZu4=ap35Eg",  
    "propertyList": [  
      {  
        "name": "loginTimeout",  
        "value": "60"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-25 "Direct link to Parameters")
hostname Body String
The Snowflake host name.
Example: 
* * *
port Body String
The Snowflake port number. The commonly used default port number for Snowflake is `443`.
Example: 443
* * *
database Body String Optional
Default Snowflake database for Dremio to use.
Example: sample_data
* * *
warehouse Body String Optional
Snowflake virtual warehouse to use to provide resources for executing DML statements and queries.
Example: compute_wh
* * *
username Body String
Username for the Snowflake account.
Example: dremio
* * *
password Body String
Password for the Snowflake account. Required if authMode is `LOGIN_PASSWORD`.
You can provide the password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
fetchSize Body Integer Optional
The number of records to fetch per request. Set to `0` to enable Dremio to automatically set the size. Default is `2000`.
Example: 2000
* * *
authMode Body String Optional
Type of authentication for Dremio to use to connect to the source. If you do not specify an authMode, the default is `LOGIN_PASSWORD`.
Enum: LOGIN_PASSWORD, KEY_PAIR
Example: KEY_PAIR
* * *
privateKey Body String
The `KEY_PAIR`. To keep the privateKey secure, Dremio returns the privateKey value as `$DREMIO_EXISTING_VALUE$` in API responses.
You can provide the privateKey in plaintext or as the reference for the privateKey in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault).
Plaintext privateKey values must be prefixed with `data:,` — for example, `data:,`plaintext_privateKey``. Plaintext privateKey values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_privateKey``.
Example: data:,fa2dlf8MaczJj+szv5KSCvQzs5MGhNtiMggV5qcw8vkgRshfZw76FKBPrZu4=ap35Eg
* * *
privateKeyPassphrase Body String Optional
The passphrase for an encrypted private key. Required if authMode is `KEY_PAIR` and the privateKey value is an encrypted private key.
You can provide the privateKeyPassphrase in plaintext or as the reference for the privateKeyPassphrase in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault).
Plaintext privateKeyPassphrase values must be prefixed with `data:,` — for example, `data:,`plaintext_privateKeyPassphrase``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_privateKeyPassphrase``.
Example: data:,!3RoX$=w72G=e%G64p#ozm
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "loginTimeout","value": "60"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-9 "Direct link to Authentication Examples")
Login-password authentication

```
{  
  "authMode": "LOGIN_PASSWORD",  
  "username": "dremio",  
  "password": "myPassword"  
}  

```

Key-pair authentication

```
{  
  "authMode": "KEY_PAIR",  
  "username": "dremio",  
  "privateKey": "AsB86vDRA&Ew5+jSCwn3F2LqMcmu82DcN9ByfcDzcP2GE2oJivFAS53M9s4B=hnu5Eg",  
  "privateKeyPassphrase": "!jV#X=%k7cG=e%G64p#ozm"  
}  

```

## Snowflake Open Catalog[​](/reference/api/catalog/source/container-source-config#snowflake-open-catalog "Direct link to Snowflake Open Catalog")
  * Dremio source type: `SNOWFLAKEOPENCATALOG`
  * See [Snowflake Open Catalog](/data-sources/lakehouse-catalogs/snowflake-open) for additional information.

Snowflake Open Catalog Source config Object 

```
{  
  "config": {  
    "propertyList": [  
      {  
        "name": "fs.s3a.aws.credentials.provider",  
        "value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"  
      }  
    ],  
    "secretPropertyList": [  
      {  
        "name": "fs.s3a.access.key",  
        "value": "$DREMIO_EXISTING_VALUE$"  
      },  
      {  
        "name": "fs.s3a.secret.key",  
        "value": "$DREMIO_EXISTING_VALUE$"  
      }  
    ],  
    "enableAsync": true,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "restEndpointUri": "https://phy87032.snowflakecomputing.com/polaris/api/catalog",  
    "allowedNamespaces": [  
            "sales",  
            "finance"  
        ],  
    "isUsingVendedCredentials": false,  
    "isRecursiveAllowedNamespaces": true,  
    "snowflakeOpenCatalogWarehouse": "snowflake-open-catalog",  
    "snowflakeOpenCatalogClientId": "ImN1IMc4SvYjkB63X3aj0P8w7H86",  
    "snowflakeOpenCatalogClientSecret": "$DREMIO_EXISTING_VALUE$",  
    "snowflakeOpenCatalogScope": "PRINCIPAL_ROLE:ALL"  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-26 "Direct link to Parameters")
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property. For a complete list of the catalog properties required for storage authentication, see [Advanced Options](/data-sources/lakehouse-catalogs/snowflake-open#advanced-options) on the Snowflake Open Catalog page.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.aws.credentials.provider","value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
secretPropertyList Body Array of Object Optional
Additional connection properties for the source. The values are kept masked in the Credentials section of the Advanced Options page of the Source Settings dialog in the Dremio console. Each object includes the name of the property and the corresponding value to use and to keep secret. To keep the secret secure, Dremio returns the secretPropertyList value as `$DREMIO_EXISTING_VALUE$` in API responses. For a complete list of the catalog credentials required for storage authentication, see [Advanced Options](/data-sources/lakehouse-catalogs/snowflake-open#advanced-options) on the Snowflake Open Catalog page.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.access.key","value": "$DREMIO_EXISTING_VALUE$"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
restEndpointUri Body String
URI for the catalog service that Dremio should connect to.
Example: 
* * *
isUsingVendedCredentials Body Boolean
If set to `true`, you do not need to provide credentials via `secretPropertyList` object in your request, as the catalog will return temporary credentials for the underlying storage location. If set to `false`, credentials must be provided for the underlying storage location of the catalog to which you are connecting.
Example: true
* * *
allowedNamespaces Body Array of String Optional
A list of the namespaces that users of Dremio are allowed to access. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces. Present the names in a comma-separated list.
Example: ["sales","finance”]
* * *
isRecursiveAllowedNamespaces Body Boolean Optional
If allowedNamespaces include their whole subtrees, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
snowflakeOpenCatalogWarehouse Body String
The Snowflake Open Catalog name.
Example: snowflake-open-catalog
* * *
snowflakeOpenCatalogClientId Body String
The client ID created during the 
Example: ImN1IMc4SvYjkB63X3aj0P8w7H86
* * *
snowflakeOpenCatalogClientSecret Body String
The client secret in plaintext or as the reference for the client secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the client secret secure, Dremio returns the snowflakeOpenCatalogClientSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext snowflakeOpenCatalogClientSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_client_secret``. Plaintext snowflakeOpenCatalogClientSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_client_secret``.
* * *
snowflakeOpenCatalogScope Body String Optional
The OAuth 2.0 scope limit specifying the principal role that is allowed access to the Snowflake Open Catalog.
Example: PRINCIPAL_ROLE:ALL
## Teradata[​](/reference/api/catalog/source/container-source-config#teradata "Direct link to Teradata")
  * Dremio source type: `TERADATA`
  * See [Teradata](/data-sources/databases/teradata) for additional information.

Teradata Source config Object

```
{  
  "config": {  
    "hostname": "teradata.drem.io",  
    "port": "1025",  
    "database": "dremio_source",  
    "username": "dremio",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "fetchSize": 200,  
    "showOnlyConnectionDatabase": false,  
    "useSsl": false,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "propertyList": [  
      {  
        "name": "maxPoolSize",  
        "value": "10"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-27 "Direct link to Parameters")
hostname Body String
Teradata hostname.
Example: teradata.drem.io
* * *
port Body String
Teradata port number. Default is `5432`.
Example: 1025
* * *
database Body String Optional
Service name of the Teradata database.
Example: dremio_source
* * *
username Body String
Username for authentication.
Example: dremio
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
showOnlyConnectionDatabase Body Boolean Optional
To hide all databases that the credentialed user can access except the specified connection database, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
useSsl Body Boolean Optional
If the Teradata source is configured to use TLS for connections, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "maxPoolSize","value": "10"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
## Unity Catalog[​](/reference/api/catalog/source/container-source-config#unity-catalog "Direct link to Unity Catalog")
  * Dremio source type: `UNITY`
  * See [Unity Catalog](/data-sources/lakehouse-catalogs/unity) for additional information.

Unity Catalog config Object

```
{  
  "config": {  
    "propertyList": [  
      {  
        "name": "fs.s3a.aws.credentials.provider",  
        "value": "org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"  
      }  
    ],  
    "secretPropertyList": [  
      {  
        "name": "fs.s3a.access.key",  
        "value": "$DREMIO_EXISTING_VALUE$"  
      },  
      {  
        "name": "fs.s3a.secret.key",  
        "value": "$DREMIO_EXISTING_VALUE$"  
      }  
    ],  
  
    "enableAsync": true,  
    "isCachingEnabled": true,  
    "maxCacheSpacePct": 100,  
    "restEndpointUri": "https://dbc-3i6c5lto-k3v3.cloud.databricks.com/api/2.1/unity-catalog/iceberg",  
    "allowedNamespaces": [  
           "sales",  
           "finance"  
       ],  
    "isUsingVendedCredentials": false,  
    "isRecursiveAllowedNamespaces": true,  
    "authenticationType": "PERSONAL_ACCESS_TOKEN",  
    "unityAuthToken": "$DREMIO_EXISTING_VALUE$",  
    "unityCatalog": "unity_catalog",  
    "authenticationType": "MASTER"  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-28 "Direct link to Parameters")
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property. For a complete list of the catalog properties required for storage authentication, see [Advanced Options](/data-sources/lakehouse-catalogs/unity#advanced-options) on the Unity Catalog page.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.s3a.aws.credentials.provider","org.apache.hadoop.fs.s3a.SimpleAWSCredentialsProvider"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
secretPropertyList Body Array of Object Optional
Additional connection properties for the source. The values are kept masked in the Credentials section of the Advanced Options page of the Source Settings dialog in the Dremio console. Each object includes the name of the property and the corresponding value to use and to keep secret. To keep the secret secure, Dremio returns the secretPropertyList value as `$DREMIO_EXISTING_VALUE$` in API responses. For a complete list of the catalog credentials required for storage authentication, see [Advanced Options](/data-sources/lakehouse-catalogs/unity#advanced-options) on the Unity Catalog page.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fs.azure.account.key","value": "70SPup32UsIZaA6c2n6bf3rQONTD6Zn6OqvcUhBy"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
enableAsync Body Boolean Optional
To enable asynchronous access for the source and allow cloud caching to support simultaneous actions such as adding and editing, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
isCachingEnabled Body Boolean Optional
To enable local caching, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
maxCacheSpacePct Body Integer Optional
Maximum percentage of the total available cache space to use on any single executor node. Used only when isCachingEnabled is set to `true`. Minimum is `1`. Maximum is `100` (default).
Example: 100
* * *
restEndpointUri Body String
URI for the catalog service that Dremio should connect to.
Example: 
* * *
isUsingVendedCredentials Body Boolean
If set to `true`, you do not need to provide credentials via `secretPropertyList` object in your request, as the catalog will return temporary credentials for the underlying storage location. If set to `false`, credentials must be provided for the underlying storage location of the catalog to which you are connecting.
Example: true
* * *
allowedNamespaces Body Array of String Optional
A list of the namespaces that users of Dremio are allowed to access. Tables are organized into namespaces, which can be at the top level or nested within one another. Namespace names cannot contain periods or spaces. Present the names in a comma-separated list.
Example: ["sales","finance”]
* * *
isRecursiveAllowedNamespaces Body Boolean Optional
If allowedNamespaces include their whole subtrees, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
azureApplicationId Body String Optional
The ID for the application (client) in Azure.
Required for the authenticationType `MICROSOFT_ENTRA_ID`.
Example: 0d416550-e530-45ce-8367-e4aa4xxxxxxx
* * *
azureClientSecret Body String Optional
The Azure client secret in plaintext or as the reference for the Azure client secret in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the client secret secure, Dremio returns the azureClientSecret value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for the authenticationType `MICROSOFT_ENTRA_ID`.
Plaintext azureClientSecret values must be prefixed with `data:,` — for example, `data:,`plaintext_client_secret``. Plaintext azureClientSecret values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_client_secret``.
Example: AbC123dEf456GhI789JkLm0
* * *
azureOAuthTokenEndpoint Body String Optional
The OAuth 2.0 token endpoint (v1.0), including the tenant ID, that the application uses to get an access token or a refresh token.
Required for the authenticationType `MICROSOFT_ENTRA_ID`.
Example: 
* * *
unityAuthToken Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Required for the authenticationType `PERSONAL_ACCESS_TOKEN`.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
Example: dapi123abc456def789ghi012jkl345mno678pqr901stu
* * *
authenticationType Body String
Type of authentication to allow Dremio to connect to the Microsoft SQL Server source.
  * `PERSONAL_ACCESS_TOKEN` (Default): Use a personal access token from a privileged user or service account on Unity Catalog. Requires the `unityAuthToken` field.
  * `MICROSOFT_ENTRA_ID`: You must also include the `azureApplicationId`, `azureClientSecret`, and `azureOAuthTokenEndpoint` parameters in your request.


* * *
unityCatalog Body String
Name of the Unity Catalog.
Example: unity_catalog
### Authentication Examples[​](/reference/api/catalog/source/container-source-config#authentication-examples-10 "Direct link to Authentication Examples")
Master credentials 

```
{  
  "authenticationType": "PERSONAL_ACCESS_TOKEN",  
  "unityAuthToken": "dapi123abc456def789ghi012jkl345mno678pqr901stu",  
}  

```

Microsoft Entra ID Application 

```
{  
  "authenticationType": "MICROSOFT_ENTRA_ID",  
  "azureApplicationId": "0d416550-e530-45ce-8367-e4aa4xxxxxxx",  
  "azureClientSecret": "AbC123dEf456GhI789JkLm0",  
  "azureOAuthTokenEndpoint": "https://login.microsoft.com/abc3e59a-7f07-4b2b-b894-b16d0EXAMPLE/oauth2/v2.0/token"  
}  

```

## Vertica[​](/reference/api/catalog/source/container-source-config#vertica "Direct link to Vertica")
  * Dremio source type: `VERTICA`
  * See [Vertica](/data-sources/databases/vertica) for additional information.

Vertica Source config Object

```
{  
  "config": {  
    "database": "vertica",  
    "hostname": "172.25.0.10",  
    "username": "exampleuser",  
    "password": "$DREMIO_EXISTING_VALUE$",  
    "port": "5433",  
    "fetchSize": 200,  
    "maxIdleConns": 8,  
    "idleTimeSec": 60,  
    "queryTimeoutSec": 0,  
    "propertyList": [  
      {  
        "name": "LoginTimeout",  
        "value": "30"  
      }  
    ]  
  }  
}  

```

### Parameters[​](/reference/api/catalog/source/container-source-config#parameters-29 "Direct link to Parameters")
database Body String
Default Vertica database for Dremio to use.
Example: vertica
* * *
hostname Body String
Vertica hostname.
Example: 172.25.0.10
* * *
username Body String
Username for authentication.
Example: exampleuser
* * *
password Body String
The password in plaintext or as the reference for the password in [Azure Key Vault](/security/secrets-management/azure-key-vault), [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager), or [HashiCorp Vault](/security/secrets-management/hashicorp-vault). Required for authenticationType `MASTER`. To keep the password secure, Dremio returns the password value as `$DREMIO_EXISTING_VALUE$` in API responses.
Plaintext password values must be prefixed with `data:,` — for example, `data:,`plaintext_password``. Plaintext password values that contain a colon (`:`) must be encoded in base64 format and prefixed with `data:;base64,` — for example, `data:;base64,`base64_encoded_password``.
* * *
port Body String
Vertica port number. Default is `5433`.
Example: 5433
* * *
fetchSize Body Integer Optional
Number of records to fetch at one time. Default is `200`. If set to `0`, Dremio automatically decides how many records to fetch.
Example: 200
* * *
maxIdleConns Body Integer Optional
Maximum number of connections that can be idle at any given time. Default is `8`.
Example: 8
* * *
idleTimeSec Body Integer Optional
Maximum time that a connection can remain idle before Dremio terminates it, in seconds. Default is `60`.
Example: 60
* * *
queryTimeoutSec Body Integer Optional
Maximum time to allow for query execution, in seconds. When the query timeout expires, the connection returns to an idle state. Default is `0`.
Example: 0
* * *
propertyList Body Array of Object Optional
Connection properties for the source. Each object in the propertyList includes the name of the property and the corresponding value to use for the property.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "LoginTimeout","value": "30&application_name=myapp"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
Was this page helpful?
[Previous Source](/reference/api/catalog/source)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Source](/reference/api/catalog/source)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fcatalog%2Fsource%2Fcontainer-source-config%2F&_biz_t=1777950558250&_biz_i=Source%20Configuration%20%7C%20Dremio%20Documentation&_biz_n=462&rnd=523327&cdn_o=a&_biz_z=1777950558250)
