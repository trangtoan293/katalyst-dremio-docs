---
url: /reference/api/catalog/source
slug: /reference/api/catalog/source
title: "Source | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64067.941631958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Source

Version: current [26.x]
On this page
# Source
Use the Catalog API to retrieve information about [sources](/data-sources) and the child objects they contain, as well as to create, update, and delete sources.
Dremio supports a number of different source types. Each source type has the same parameters _except_ for the parameters within the `config` object. The available parameters in the `config` object are different for each source type. The examples on this page use an Amazon S3 source to demonstrate the available requests and responses for sources. Read [Source Configuration](/reference/api/catalog/source/container-source-config) for information about the available parameters in the `config` object for each supported source type.
Source Object

```
{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
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
  },  
  "id": "2b1be882-7012-4a99-8d6c-82e32e4562e4",  
  "tag": "T0/Zr1FOY3A=",  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "createdAt": "2023-02-17T14:32:20.640Z",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": false  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "accelerationActivePolicyType": "NEVER",  
  "accelerationRefreshSchedule": "",  
  "children": [  
    {  
      "id": "dremio:/AWS-S3_testgroup/archive.dremio.com",  
      "path": [  
        "AWS-S3_testgroup",  
        "archive.dremio.com"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_east-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_east-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_west-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_west-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    }  
  ],  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  },  
  "permissions": [  
    "READ",  
    "WRITE",  
    "ALTER_REFLECTION",  
    "SELECT",  
    "ALTER",  
    "VIEW_REFLECTION",  
    "MODIFY",  
    "MANAGE_GRANTS",  
    "CREATE_TABLE",  
    "DROP",  
    "EXTERNAL_QUERY",  
    "INSERT",  
    "TRUNCATE",  
    "DELETE",  
    "UPDATE",  
    "EXECUTE",  
    "CREATE_SOURCE",  
    "ALL"  
  ],  
  "checkTableAuthorizer": true,  
  "owner": {  
    "ownerId": "4fb93af3-acc2-4b10-ad4b-64dd7070d365",  
    "ownerType": "USER"  
  },  
  "accelerationRefreshOnDataChanges": false  
}  

```

## Source Attributes​
entityType String
Type of the catalog object. For sources, the entityType is `source`.
Example: source
* * *
config Object
Configuration settings for the source. The available parameters in the config object are different for different source types. For more information, read [Source Configuration](/reference/api/catalog/source/container-source-config).
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"accessKey": "EXAMPLE78HT89VS4YJEL","accessSecret": "$DREMIO_EXISTING_VALUE$","secure": true,"rootPath": "/","enableAsync": true,"compatibilityMode": false,"isCachingEnabled": true,"maxCacheSpacePct": 100,"requesterPays": false,"enableFileStatusCheck": true,"defaultCtasFormat": "ICEBERG","isPartitionInferenceEnabled": false,"credentialType": "ACCESS_KEY"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
id String (UUID)
Unique identifier of the source.
Example: 2b1be882-7012-4a99-8d6c-82e32e4562e4
* * *
tag String
Unique identifier of the version of the source. Dremio changes the tag whenever the source changes and uses the tag to ensure that PUT requests apply to the most recent version of the source.
Example: T0/Zr1FOY3A=
* * *
type String
Type of source.
Valid values: [`ADX`](/reference/api/catalog/source/container-source-config), [`AMAZONELASTIC`](/reference/api/catalog/source/container-source-config), [`AWSGLUE`](/reference/api/catalog/source/container-source-config), [`AZURE_STORAGE`](/reference/api/catalog/source/container-source-config), [`BIGQUERY`](/reference/api/catalog/source/container-source-config), [`DB2`](/reference/api/catalog/source/container-source-config), [`DREMIOTODREMIO`](/reference/api/catalog/source/container-source-config), [`DREMIO_CATALOG_EXTERNAL_V1`](/reference/api/catalog/source/container-source-config), [`ELASTIC`](/reference/api/catalog/source/container-source-config), [`GCS`](/reference/api/catalog/source/container-source-config), [`HDFS`](/reference/api/catalog/source/container-source-config), [`HIVE3`](/reference/api/catalog/source/container-source-config), [`HIVE`](/reference/api/catalog/source/container-source-config), [`MONGO`](/reference/api/catalog/source/container-source-config), [`MSSQL`](/reference/api/catalog/source/container-source-config), [`MYSQL`](/reference/api/catalog/source/container-source-config), [`NAS`](/reference/api/catalog/source/container-source-config), [`NESSIE`](/reference/api/catalog/source/container-source-config), [`ORACLE`](/reference/api/catalog/source/container-source-config), [`POSTGRES`](/reference/api/catalog/source/container-source-config), [`REDSHIFT`](/reference/api/catalog/source/container-source-config), [`RESTCATALOG`](/reference/api/catalog/source/container-source-config), [`S3`](/reference/api/catalog/source/container-source-config), [`SAPHANA`](/reference/api/catalog/source/container-source-config), [`SNOWFLAKEOPENCATALOG`](/reference/api/catalog/source/container-source-config), [`SNOWFLAKE`](/reference/api/catalog/source/container-source-config), [`SYNAPSE`](/reference/api/catalog/source/container-source-config), [`TERADATA`](/reference/api/catalog/source/container-source-config), [`UNITY`](/reference/api/catalog/source/container-source-config), [`VERTICA`](/reference/api/catalog/source/container-source-config).
The Iceberg [`RESTCATALOG`](/data-sources/lakehouse-catalogs/iceberg-rest-catalog) source type provides support for several catalogs including Apache Polaris OSS, Nessie with Iceberg REST, AWS Glue Iceberg REST, S3 Tables, Confluent Tableflow, and [Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake).
Example: S3
* * *
name String
Name of the source.
Example: AWS-S3_testgroup
* * *
createdAt String
Date and time that the source was created, in UTC format.
Example: 2023-02-17T14:32:20.640Z
* * *
metadataPolicy Object
Information about the metadata policy for the source.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"authTTLMs": 86400000,"namesRefreshMs": 3600000,"datasetRefreshAfterMs": 3600000,"datasetExpireAfterMs": 10800000,"datasetUpdateMode": "PREFETCH_QUERIED","deleteUnavailableDatasets": true,"autoPromoteDatasets": false{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
accelerationGracePeriodMs Integer
Maximum age allowed for Reflection data used to accelerate queries on datasets in the source, in milliseconds. Default is `0`. For more information, read [Setting the Expiration Policy for Reflections](/acceleration/manual-reflections).
Example: 10800000
* * *
accelerationRefreshPeriodMs Integer
Refresh period for the data in all Reflections on datasets in the source, in milliseconds. Default is `0`.
Example: 3600000
* * *
accelerationNeverExpire Boolean
Option to set an expiration for Reflections. Default setting is `false`. Set to `true` to prevent Reflections from expiring and to override the `accelerationGracePeriodMs` setting.
Example: false
* * *
accelerationNeverRefresh Boolean
Option to set a refresh for Reflections. Default setting is `false`. Set to `true` to prevent Reflections from refreshing and to override the `accelerationRefreshPeriodMs` setting.
* * *
accelerationActivePolicyType String
Option to set the policy for refreshing Reflections that are defined on the source. For this option to take effect, `accelerationNeverRefresh` must be set to `false`.
The possible values are:
  * `NEVER`: The Reflections are never refreshed.
  * `PERIOD`: The Reflections are refreshed at the end of every period that is defined by accelerationRefreshPeriodMs.
  * `SCHEDULE`: The Reflections are refreshed according to the schedule that is set by accelerationRefreshSchedule.


* * *
accelerationRefreshSchedule String
A cron expression that sets the schedule, in UTC time, according to which the Reflections that are defined on the source are refreshed.  
| Field  | Allowed Values  | Allowed Special Characters  |  
| --- | --- | --- |  
| Second  | 0  | N/A  |  
| Minute  | 0-59  | N/A  |  
| Hour  | 0-23  | N/A  |  
| Day of month  | N/A  | * ?  |  
| Month  | N/A  | * ?  |  
| Days of week  | 1-7 or SUN-SAT  | , - * ?  |  
| Special Character  | Description  |  
| --- | --- |  
| *  | Used to specify all values for a field. For `Day of month`, specifies every day of the month. For `Month`, specifies every month. For `Days of week`, specifies every day of the week.  |  
| ?  | Equivalent to *.  |  
| ,  | Used to specify two or more days in the `Days of week` field. For example, `MON,WED,FRI`.  |  
| -  | Used to specify ranges in the `Days of week` field. For example, `1-3` is equivalent to `Sunday, Monday, and Tuesday`.  |  
Examples: `0 0 0 * * ?` : Refreshes every day at midnight. `0 45 15 * * 1,4,7` : Refreshes at 15:45 on Sunday, Wednesday, and Saturday. `0 15 7 ? * 2-6` : Refreshes at 7:15 on Monday and Friday.
* * *
children Array of Object
Information about each catalog object in the source.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "dremio:/AWS-S3_testgroup/archive.dremio.com","path": ["AWS-S3_testgroup","archive.dremio.com"],"type": "CONTAINER","containerType": "FOLDER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "dremio:/AWS-S3_testgroup/logs_east-1","path": ["AWS-S3_testgroup","logs_east-1"],"type": "CONTAINER","containerType": "FOLDER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "dremio:/AWS-S3_testgroup/logs_west-1","path": ["AWS-S3_testgroup","logs_west-1"],"type": "CONTAINER","containerType": "FOLDER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
allowCrossSourceSelection Boolean
If the source is available for queries that can select from multiple sources, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
disableMetadataValidityCheck Boolean
To disable the check for expired metadata and require users to refresh manually, set to `true`. Otherwise, set to `false` (default).
The disableMetadataValidityCheck attribute is not supported by default. Contact Dremio Support to enable it.
Example: false
* * *
accessControlList Object
Enterprise only. Information about users and roles with access to the source and the specific privileges each user or role has. May include an array of users, an array of roles, or both, depending on the configured access and privileges. The accessControlList array is empty if source-specific access control privileges are not set.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65","permissions": ["VIEW_REFLECTION","SELECT" ]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c45ff4d8-e910-4f85-89db-9b8c29188a56","permissions": ["ALTER","CREATE_TABLE","DROP","INSERT","DELETE","UPDATE","TRUNCATE","VIEW_REFLECTION","ALTER_REFLECTION","MODIFY","MANAGE_GRANTS","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the source. Empty unless the request URL includes the `permissions` query parameter. For more information, read [Privileges](/security/rbac/privileges).
Example: ["READ","WRITE","ALTER_REFLECTION","SELECT","ALTER","VIEW_REFLECTION","MODIFY","MANAGE_GRANTS","CREATE_TABLE","DROP","EXTERNAL_QUERY","INSERT","TRUNCATE","DELETE","UPDATE","EXECUTE","CREATE_SOURCE","ALL"]
* * *
checkTableAuthorizer Boolean
Not used. Has the value `true`.
Example: true
* * *
owner Object
Information about the source's owner.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"ownerId": "4fb93af3-acc2-4b10-ad4b-64dd7070d365","ownerType": "USER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
accelerationRefreshOnDataChanges Boolean
If Reflections automatically refresh for underlying tables that are in Iceberg format when new snapshots are created after an update, `true`. Otherwise, `false`.
#### Attributes of the `config` Object​
The `config` object attributes vary for different source types. Read [Source Configuration](/reference/api/catalog/source/container-source-config) for information about the available parameters in the `config` object for each supported source type.
#### Attributes of the `metadataPolicy` Object​
authTTLMs Integer
Length of time to cache the privileges that the user has on the source, in milliseconds. For example, if authTTLMs is set to `28800000` (8 hours), Dremio checks the user's permission status once every 8 hours. Default is `86400000` (24 hours). Minimum is `60000` (1 minute).
Example: 86400000
* * *
namesRefreshMs Integer
How often the source is refreshed, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 3600000
* * *
datasetRefreshAfterMs Integer
How often the metadata in the source's datasets is refreshed, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 3600000
* * *
datasetExpireAfterMs Integer
Maximum age allowed for the metadata in the source's datasets, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 10800000
* * *
datasetUpdateMode String
Approach Dremio uses for updating the metadata when updating datasets in the source.
  * `PREFETCH`: (deprecated) Dremio updates details for all datasets in a source.
  * `PREFETCH_QUERIED`: Dremio updates details for previously queried objects in a source.


Example: PREFETCH_QUERIED
* * *
deleteUnavailableDatasets Boolean
If Dremio removes dataset definitions from the source when the underlying data is unavailable, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
autoPromoteDatasets Boolean
If Dremio automatically formats files into tables when a user issues a query, set to `true`. Otherwise, set to `false` (default). Available only for datalake sources, such as Amazon S3 and Hive.
Example: false
#### Attributes of Objects in the `children` Array​
id String
Unique identifier of the child catalog object. The ID can be a UUID like `1acab7b3-ee82-44c1-abcc-e86d56078d4d` or a text path like `dremio:/Samples/samples.dremio.com/zip_lookup.csv`.
Example: dremio:/AWS-S3_testgroup/archive.dremio.com
* * *
path Array of String
Path to the child catalog object within the source, expressed as an array. The path consists of the source, followed by the name of the folder, file, or dataset itself as the last item in the array.
Example: ["AWS-S3_testgroup","archive.dremio.com"]
* * *
type String
Type of the catalog object.
Enum: CONTAINER, FILE, DATASET
Example: CONTAINER
* * *
containerType String
For catalog objects with the type `CONTAINER`, the containerType is `FOLDER`.
Example: FOLDER
* * *
datasetType String
For catalog objects with the type `DATASET`, the type of dataset. If the dataset is from an external source such as PostgreSQL, the datasetType is `DIRECT`. For tables, the datasetType is `PROMOTED`. For views, the datasetType is `VIRTUAL`.
Enum: DIRECT, PROMOTED, VIRTUAL
Example: VIRTUAL
#### Attributes of the `accessControlList` Object​
users Array of Object
Enterprise only. List of users with access to the source and the specific privileges each user has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65","permissions": ["VIEW_REFLECTION","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Array of Object
Enterprise only. List of roles whose members have access to the source and the specific privileges each role has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c45ff4d8-e910-4f85-89db-9b8c29188a56","permissions": ["ALTER", "CREATE_TABLE", "DROP", "INSERT", "DELETE", "UPDATE", "TRUNCATE", "VIEW_REFLECTION", "ALTER_REFLECTION", "MODIFY", "MANAGE_GRANTS", "SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of the `owner` Object​
ownerId String (UUID)
Unique identifier of the source's owner.
Example: 4fb93af3-acc2-4b10-ad4b-64dd7070d365
* * *
ownerType String
Type of owner of the source.
Enum: USER, ROLE
Example: USER
#### Attributes of Objects in the `users` and `roles` Arrays​
id String (UUID)
Enterprise only. Unique identifier of the user or role with access to the source.
Example: ebe519ab-20e3-43ff-9b4c-b3ec590c7e65
* * *
permissions Array of String
Enterprise only. List of privileges the user or role has on the source. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALL, VIEW_REFLECTION, TRUNCATE, UPDATE, DELETE, DROP, MANAGE_GRANTS, EXTERNAL_QUERY, EXECUTE, ALTER, INSERT, MODIFY, SELECT, CREATE_SOURCE, WRITE, CREATE_TABLE, ALTER_REFLECTION, READ
Example: ["VIEW_REFLECTION","SELECT"]
## Create a Source​
Create a new source.
Method and URL

```
POST /api/v3/catalog  

```

### Parameters​
entityType Body String
Type of the catalog object to create. For sources, the entityType is `source`.
Example: source
* * *
config Body Object
Configuration settings for the source. The available parameters in the config object are different for different source types. For more information, read [Source Configuration](/reference/api/catalog/source/container-source-config).
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"accessKey": "EXAMPLE78HT89VS4YJEL","accessSecret": "EXAMPLEe3bcpKnAwgJ2WBpX8d9kEdhMz24guiR7L","secure": true,"rootPath": "/","enableAsync": true,"compatibilityMode": false,"isCachingEnabled": true,"maxCacheSpacePct": 100,"requesterPays": false,"enableFileStatusCheck": true,"defaultCtasFormat": "ICEBERG","isPartitionInferenceEnabled": false,"credentialType": "ACCESS_KEY"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
type Body String
Type of source to create.
Valid values: [`ADX`](/reference/api/catalog/source/container-source-config), [`AMAZONELASTIC`](/reference/api/catalog/source/container-source-config), [`AWSGLUE`](/reference/api/catalog/source/container-source-config), [`AZURE_STORAGE`](/reference/api/catalog/source/container-source-config), [`BIGQUERY`](/reference/api/catalog/source/container-source-config), [`DB2`](/reference/api/catalog/source/container-source-config), [`DREMIOTODREMIO`](/reference/api/catalog/source/container-source-config), [`DREMIO_CATALOG_EXTERNAL_V1`](/reference/api/catalog/source/container-source-config), [`ELASTIC`](/reference/api/catalog/source/container-source-config), [`GCS`](/reference/api/catalog/source/container-source-config), [`HDFS`](/reference/api/catalog/source/container-source-config), [`HIVE3`](/reference/api/catalog/source/container-source-config), [`HIVE`](/reference/api/catalog/source/container-source-config), [`MONGO`](/reference/api/catalog/source/container-source-config), [`MSSQL`](/reference/api/catalog/source/container-source-config), [`MYSQL`](/reference/api/catalog/source/container-source-config), [`NAS`](/reference/api/catalog/source/container-source-config), [`NESSIE`](/reference/api/catalog/source/container-source-config), [`ORACLE`](/reference/api/catalog/source/container-source-config), [`POSTGRES`](/reference/api/catalog/source/container-source-config), [`REDSHIFT`](/reference/api/catalog/source/container-source-config), [`RESTCATALOG`](/reference/api/catalog/source/container-source-config), [`S3`](/reference/api/catalog/source/container-source-config), [`SAPHANA`](/reference/api/catalog/source/container-source-config), [`SNOWFLAKEOPENCATALOG`](/reference/api/catalog/source/container-source-config), [`SNOWFLAKE`](/reference/api/catalog/source/container-source-config), [`SYNAPSE`](/reference/api/catalog/source/container-source-config), [`TERADATA`](/reference/api/catalog/source/container-source-config), [`UNITY`](/reference/api/catalog/source/container-source-config), [`VERTICA`](/reference/api/catalog/source/container-source-config).
The Iceberg [`RESTCATALOG`](/data-sources/lakehouse-catalogs/iceberg-rest-catalog) source type provides support for several catalogs including Apache Polaris OSS, Nessie with Iceberg REST, AWS Glue Iceberg REST, S3 Tables, Confluent Tableflow, and [Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake).
Example: S3
* * *
name Body String
Name for the source. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
Example: AWS-S3_testgroup
* * *
metadataPolicy Body Object Optional
Information about the metadata policy for the source.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"authTTLMs": 86400000,"namesRefreshMs": 3600000,"datasetRefreshAfterMs": 3600000,"datasetExpireAfterMs": 10800000,"datasetUpdateMode": "PREFETCH_QUERIED","deleteUnavailableDatasets": true,"autoPromoteDatasets": false{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
accelerationGracePeriodMs Body Integer Optional
Maximum age to allow for Reflection data used to accelerate queries on datasets in the source, in milliseconds. Default is `0`. For more information, read [Setting the Expiration Policy for Reflections](/acceleration/manual-reflections).
Example: 10800000
* * *
accelerationRefreshPeriodMs Body Integer Optional
Refresh period to use for the data in all Reflections on datasets in the source, in milliseconds. Optional if you set accelerationActivePolicyType to `PERIOD`. The default setting is `3600000` milliseconds or one hour.
Example: 3600000
* * *
accelerationNeverExpire Body Boolean Optional
Option to set an expiration for Reflections. Default setting is `false`. Set to `true` to prevent Reflections from expiring and to override the `accelerationGracePeriodMs` setting.
Example: false
* * *
accelerationNeverRefresh Body Boolean Optional
Option to set a refresh for Reflections. Default setting is `false`. Set to `true` to prevent Reflections from refreshing and to override the `accelerationRefreshPeriodMs` setting.
* * *
accelerationActivePolicyType String
Option to set the policy for refreshing Reflections that are defined on the source. For this option to take effect, `accelerationNeverRefresh` must be set to `false`.
The possible values are:
  * `NEVER`: The Reflections are never refreshed.
  * `PERIOD`: Default. The Reflections are refreshed at the end of every period that is defined by accelerationRefreshPeriodMs.
  * `SCHEDULE`: The Reflections are refreshed according to the schedule that is set by accelerationRefreshSchedule.


* * *
accelerationRefreshSchedule String
A cron expression that sets the schedule, in UTC time, according to which the Reflections that are defined on the source are refreshed. Optional if you set accelerationActivePolicyType to `SCHEDULE`. The default accelerationRefreshSchedule setting is to refresh every day at 8:00 a.m.  
| Field  | Allowed Values  | Allowed Special Characters  |  
| --- | --- | --- |  
| Second  | 0  | N/A  |  
| Minute  | 0-59  | N/A  |  
| Hour  | 0-23  | N/A  |  
| Day of month  | N/A  | * ?  |  
| Month  | N/A  | * ?  |  
| Days of week  | 1-7 or SUN-SAT  | , - * ?  |  
| Special Character  | Description  |  
| --- | --- |  
| *  | Used to specify all values for a field. For `Day of month`, specifies every day of the month. For `Month`, specifies every month. For `Days of week`, specifies every day of the week.  |  
| ?  | Equivalent to *.  |  
| ,  | Used to specify two or more days in the `Days of week` field. For example, `MON,WED,FRI`.  |  
| -  | Used to specify ranges in the `Days of week` field. For example, `1-3` is equivalent to `Sunday, Monday, and Tuesday`.  |  
Examples: `0 0 0 * * ?` : Refreshes every day at midnight. `0 45 15 * * 1,4,7` : Refreshes at 15:45 on Sunday, Wednesday, and Saturday. `0 15 7 ? * 2-6` : Refreshes at 7:15 on Monday and Friday.
* * *
allowCrossSourceSelection Body Boolean Optional
If the source should be available for queries that can select from multiple sources, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
disableMetadataValidityCheck Body Boolean Optional
To disable the check for expired metadata and require users to refresh manually, set to `true`. Otherwise, set to `false` (default).
The disableMetadataValidityCheck parameter is not supported by default. Contact Dremio Support to enable it.
Example: false
* * *
accelerationRefreshOnDataChanges Body Boolean
To refresh Reflections on underlying tables that are in Iceberg format in the source when new snapshots are created after an update, `true`. Otherwise, `false`. Reflections that are automatically updated based on Iceberg source table changes also update according to the source-level policy as the minimum refresh frequency. For this option to take effect, the source must support Iceberg table format, the accelerationNeverRefresh parameter must be set to `false`, and the accelerationActivePolicyType parameter must be set to either `PERIOD` or `SCHEDULE`.
* * *
accessControlList Body Object Optional
Enterprise only. Information about users and roles that should have access to the source and the specific privileges each user or role should have. May include an array of users, an array of roles, or both, depending on the configured access and privileges.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65","permissions": [ "VIEW_REFLECTION","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c45ff4d8-e910-4f85-89db-9b8c29188a56","permissions": ["ALTER","CREATE_TABLE","DROP","INSERT","DELETE","UPDATE","TRUNCATE","VIEW_REFLECTION","ALTER_REFLECTION","MODIFY","MANAGE_GRANTS","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `config` Object​
The `config` object's parameters vary for different source types. Read [Source Configuration](/reference/api/catalog/source/container-source-config) for information about the available parameters in the `config` object for each supported source type.
#### Parameters of the `metadataPolicy` Object​
authTTLMs Body Integer
Length of time to cache the privileges that the user has on the source, in milliseconds. For example, if authTTLMs is set to `28800000` (8 hours), Dremio checks the user's permission status once every 8 hours. Default is `86400000` (24 hours). Minimum is `60000` (1 minute).
Example: 86400000
* * *
namesRefreshMs Body Integer Optional
How often the source should be refreshed, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 3600000
* * *
datasetRefreshAfterMs Body Integer Optional
How often the metadata in the source's datasets should be refreshed, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 3600000
* * *
datasetExpireAfterMs Body Integer Optional
Maximum age to allow for the metadata in the source's datasets, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 10800000
* * *
datasetUpdateMode Body String Optional
Approach for Dremio to take for updating the metadata when updating datasets in the source.
  * `PREFETCH`: (deprecated) Dremio updates details for all datasets in a source.
  * `PREFETCH_QUERIED`: Dremio updates details for previously queried objects in a source.


Example: PREFETCH_QUERIED
* * *
deleteUnavailableDatasets Body Boolean Optional
If Dremio should remove dataset definitions from the source when the underlying data is unavailable, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
autoPromoteDatasets Body Boolean Optional
If Dremio should automatically format files into tables using default options when users issue queries, set to `true`. Otherwise, set to `false` (default). Available only for datalake sources, such as Amazon S3 and Hive.
Example: false
#### Parameters of the `accessControlList` Object​
users Body Array of Object Optional
Enterprise only. List of users who should have access to the source and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65", "permissions": ["VIEW_REFLECTION","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body Array of Object Optional
List of roles whose members should have access to the source and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c45ff4d8-e910-4f85-89db-9b8c29188a56", "permissions": ["ALTER","CREATE_TABLE","DROP","INSERT","DELETE","UPDATE","TRUNCATE","VIEW_REFLECTION","ALTER_REFLECTION","MODIFY","MANAGE_GRANTS","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Parameters of Objects in the `users` and `roles` Arrays​
id Body String (UUID) Optional
Unique identifier of the user or role who should have access to the source.
Example: ebe519ab-20e3-43ff-9b4c-b3ec590c7e65
* * *
permissions Body Array of String Optional
List of privileges the user or role should have on the source. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALL, VIEW_REFLECTION, TRUNCATE, UPDATE, DELETE, DROP, MANAGE_GRANTS, EXTERNAL_QUERY, EXECUTE, ALTER, INSERT, MODIFY, SELECT, CREATE_SOURCE, WRITE, CREATE_TABLE, ALTER_REFLECTION, READ
Example: ["VIEW_REFLECTION","SELECT"]
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "EXAMPLEe3bcpKnAwgJ2WBpX8d9kEdhMz24guiR7L",  
    "secure": true,  
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
  },  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": false  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
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
  },  
  "state": {  
    "status": "good",  
    "suggestedUserAction": "",  
    "messages": []  
  },  
  "id": "2b1be882-7012-4a99-8d6c-82e32e4562e4",  
  "tag": "T0/Zr1FOY3A=",  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "createdAt": "2023-02-17T14:32:20.640Z",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": false  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationActivePolicyType": "PERIOD",  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "children": [  
    {  
      "id": "dremio:/AWS-S3_testgroup/archive.dremio.com",  
      "path": [  
        "AWS-S3_testgroup",  
        "archive.dremio.com"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_east-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_east-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_west-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_west-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    }  
  ],  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "checkTableAuthorizer": true,  
  "owner": {  
    "ownerId": "4fb93af3-acc2-4b10-ad4b-64dd7070d365",  
    "ownerType": "USER"  
  },  
  "accelerationRefreshOnDataChanges": false  
}  

```

When you use the Catalog API to create a new source, the response includes a `state` object that describes the status of the source as shown in the example response above. The `state` object contains the following attributes:
status String
Status of the created source.
Enum: good, bad, warn
Example: good
* * *
suggestedUserAction String
Recommended action to take, if any, based on the status of the created source.
* * *
messages Array of String
Status message, if any, for the created source.
### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Retrieve a Source by ID​
Retrieve a source and information about its contents by specifying the source's ID.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the source that you want to retrieve.
Example: 2b1be882-7012-4a99-8d6c-82e32e4562e4
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?include=permissions
* * *
exclude Query String Optional
Exclude a default attribute from the response. The available value for the exclude query parameter is `children`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?exclude=children
* * *
maxChildren Query Integer Optional
Specify the maximum number of child objects to include in each page of results. Use in concert with the pageToken query parameter to split large sets of results into multiple pages. For more information, read [maxChildren Query Parameter](/reference/api).
**NOTE:** The maxChildren query parameter is not supported for filesystem sources.
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the maxChildren query parameter: the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the source has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api) for more information.
**NOTE:** Dremio ignores the pageToken query parameter for filesystem sources.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/2b1be882-7012-4a99-8d6c-82e32e4562e4' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
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
  },  
  "id": "2b1be882-7012-4a99-8d6c-82e32e4562e4",  
  "tag": "T0/Zr1FOY3A=",  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "createdAt": "2023-02-17T14:32:20.640Z",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": false  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationActivePolicyType": "PERIOD",  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "children": [  
    {  
      "id": "dremio:/AWS-S3_testgroup/archive.dremio.com",  
      "path": [  
        "AWS-S3_testgroup",  
        "archive.dremio.com"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_east-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_east-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_west-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_west-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    }  
  ],  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "checkTableAuthorizer": true,  
  "owner": {  
    "ownerId": "4fb93af3-acc2-4b10-ad4b-64dd7070d365",  
    "ownerType": "USER"  
  },  
  "accelerationRefreshOnDataChanges": false  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve a Source by Path​
Retrieve a source and information about its contents by specifying the source's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters​
path Path String
Name of the source that you want to retrieve. If the name of any component in the path includes special characters for URLs, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, "Dremio University" should be `Dremio%20University` in the URL path.
Example: AWS-S3_testgroup
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?include=permissions
* * *
exclude Query String Optional
Exclude a default attribute from the response. The available value for the exclude query parameter is `children`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?exclude=children
* * *
maxChildren Query Integer Optional
Specify the maximum number of child objects to include in each page of results. Use in concert with the pageToken query parameter to split large sets of results into multiple pages. For more information, read [maxChildren Query Parameter](/reference/api).
**NOTE:** The maxChildren query parameter is not supported for filesystem sources.
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the maxChildren query parameter: the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the source has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api) for more information.
**NOTE:** Dremio ignores the pageToken query parameter for filesystem sources.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/AWS-S3_testgroup' \  
--header 'Authorization: Bearer <<dremioAccessToken>)>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
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
  },  
  "id": "2b1be882-7012-4a99-8d6c-82e32e4562e4",  
  "tag": "T0/Zr1FOY3A=",  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "createdAt": "2023-02-17T14:32:20.640Z",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": false  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationActivePolicyType": "PERIOD",  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "children": [  
    {  
      "id": "dremio:/AWS-S3_testgroup/archive.dremio.com",  
      "path": [  
        "AWS-S3_testgroup",  
        "archive.dremio.com"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_east-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_east-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_west-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_west-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    }  
  ],  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "checkTableAuthorizer": true,  
  "owner": {  
    "ownerId": "4fb93af3-acc2-4b10-ad4b-64dd7070d365",  
    "ownerType": "USER"  
  },  
  "accelerationRefreshOnDataChanges": false  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Update a Source​
Update the specified source.
Method and URL

```
PUT /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the source to update.
Example: 2b1be882-7012-4a99-8d6c-82e32e4562e4
* * *
entityType Body String
Type of the catalog object to update. For sources, the entityType is `source`.
Example: source
* * *
config Body Object
Configuration settings for the source. The available parameters in the config object are different for different source types. For more information, read [Source Configuration](/reference/api/catalog/source/container-source-config).
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"accessKey": "EXAMPLE78HT89VS4YJEL","accessSecret": "EXAMPLEe3bcpKnAwgJ2WBpX8d9kEdhMz24guiR7L","secure": true,"rootPath": "/","enableAsync": true,"compatibilityMode": false,"isCachingEnabled": true,"maxCacheSpacePct": 100,"requesterPays": false,"enableFileStatusCheck": true,"defaultCtasFormat": "ICEBERG","isPartitionInferenceEnabled": false,"credentialType": "ACCESS_KEY"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
id Body String
Unique identifier of the source to update.
Example: 2b1be882-7012-4a99-8d6c-82e32e4562e4
* * *
tag Body String
Unique identifier of the version of the source that you want to update. Dremio uses the tag to ensure that you are requesting to update the most recent version of the source.
Example: T0/Zr1FOY3A=
* * *
type Body String
Type of the source.
Valid values: [`ADX`](/reference/api/catalog/source/container-source-config), [`AMAZONELASTIC`](/reference/api/catalog/source/container-source-config), [`AWSGLUE`](/reference/api/catalog/source/container-source-config), [`AZURE_STORAGE`](/reference/api/catalog/source/container-source-config), [`BIGQUERY`](/reference/api/catalog/source/container-source-config), [`DB2`](/reference/api/catalog/source/container-source-config), [`DREMIOTODREMIO`](/reference/api/catalog/source/container-source-config), [`DREMIO_CATALOG_EXTERNAL_V1`](/reference/api/catalog/source/container-source-config), [`ELASTIC`](/reference/api/catalog/source/container-source-config), [`GCS`](/reference/api/catalog/source/container-source-config), [`HDFS`](/reference/api/catalog/source/container-source-config), [`HIVE3`](/reference/api/catalog/source/container-source-config), [`HIVE`](/reference/api/catalog/source/container-source-config), [`MONGO`](/reference/api/catalog/source/container-source-config), [`MSSQL`](/reference/api/catalog/source/container-source-config), [`MYSQL`](/reference/api/catalog/source/container-source-config), [`NAS`](/reference/api/catalog/source/container-source-config), [`NESSIE`](/reference/api/catalog/source/container-source-config), [`ORACLE`](/reference/api/catalog/source/container-source-config), [`POSTGRES`](/reference/api/catalog/source/container-source-config), [`REDSHIFT`](/reference/api/catalog/source/container-source-config), [`RESTCATALOG`](/reference/api/catalog/source/container-source-config), [`S3`](/reference/api/catalog/source/container-source-config), [`SAPHANA`](/reference/api/catalog/source/container-source-config), [`SNOWFLAKEOPENCATALOG`](/reference/api/catalog/source/container-source-config), [`SNOWFLAKE`](/reference/api/catalog/source/container-source-config), [`SYNAPSE`](/reference/api/catalog/source/container-source-config), [`TERADATA`](/reference/api/catalog/source/container-source-config), [`UNITY`](/reference/api/catalog/source/container-source-config), [`VERTICA`](/reference/api/catalog/source/container-source-config).
The Iceberg [`RESTCATALOG`](/data-sources/lakehouse-catalogs/iceberg-rest-catalog) source type provides support for several catalogs including Apache Polaris OSS, Nessie with Iceberg REST, AWS Glue Iceberg REST, S3 Tables, Confluent Tableflow, and [Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake).
Example: S3
* * *
name Body String
Name of the source that you want to update.
Example: AWS-S3_testgroup
* * *
metadataPolicy Body Object Optional
Information about the metadata policy for the source.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"authTTLMs": 86400000,"namesRefreshMs": 3600000,"datasetRefreshAfterMs": 3600000,"datasetExpireAfterMs": 10800000,"datasetUpdateMode": "PREFETCH_QUERIED","deleteUnavailableDatasets": true,"autoPromoteDatasets": false{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
accelerationGracePeriodMs Body Integer Optional
Maximum age to allow for Reflection data used to accelerate queries on datasets in the source, in milliseconds. For more information, read [Setting the Expiration Policy for Reflections](/acceleration/manual-reflections).
Example: 10800000
* * *
accelerationRefreshPeriodMs Body Integer Optional
Refresh period to use for the data in all Reflections on datasets in the source, in milliseconds. Default is `0`.
Example: 3600000
* * *
accelerationNeverExpire Body Boolean Optional
Option to set an expiration for Reflections. Default setting is `false`. Set to `true` to prevent Reflections from expiring and to override the `accelerationGracePeriodMs` setting.
Example: false
* * *
accelerationNeverRefresh Body Boolean Optional
Option to set a refresh for Reflections. Default setting is `false`. Set to `true` to prevent Reflections from refreshing and to override the `accelerationRefreshPeriodMs` setting.
* * *
accelerationActivePolicyType String
Option to set the policy for refreshing Reflections that are defined on the source. For this option to take effect, `accelerationNeverRefresh` must be set to `false`.
The possible values are:
  * `NEVER`: The Reflections are never refreshed.
  * `PERIOD`: The Reflections are refreshed at the end of every period that is defined by accelerationRefreshPeriodMs.
  * `SCHEDULE`: The Reflections are refreshed according to the schedule that is set by accelerationRefreshSchedule.


* * *
accelerationRefreshSchedule String
A cron expression that sets the schedule, in UTC time, according to which the Reflections that are defined on the source are refreshed. Optional if you set accelerationActivePolicyType to `SCHEDULE`. The default accelerationRefreshSchedule setting is to refresh every day at 8:00 a.m.  
| Field  | Allowed Values  | Allowed Special Characters  |  
| --- | --- | --- |  
| Second  | 0  | N/A  |  
| Minute  | 0-59  | N/A  |  
| Hour  | 0-23  | N/A  |  
| Day of month  | N/A  | * ?  |  
| Month  | N/A  | * ?  |  
| Days of week  | 1-7 or SUN-SAT  | , - * ?  |  
| Special Character  | Description  |  
| --- | --- |  
| *  | Used to specify all values for a field. For `Day of month`, specifies every day of the month. For `Month`, specifies every month. For `Days of week`, specifies every day of the week.  |  
| ?  | Equivalent to *.  |  
| ,  | Used to specify two or more days in the `Days of week` field. For example, `MON,WED,FRI`.  |  
| -  | Used to specify ranges in the `Days of week` field. For example, `1-3` is equivalent to `Sunday, Monday, and Tuesday`.  |  
Examples:
  * `0 0 0 * * ?` : Refreshes every day at midnight.
  * `0 45 15 * * 1,4,7` : Refreshes at 15:45 on Sunday, Wednesday, and Saturday.
  * `0 15 7 ? * 2-6` : Refreshes at 7:15 on Monday and Friday.


* * *
allowCrossSourceSelection Body Boolean Optional
If the source should be available for queries that can select from multiple sources, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
disableMetadataValidityCheck Body Boolean Optional
To disable the check for expired metadata and require users to refresh manually, set to `true`. Otherwise, set to `false` (default).
The disableMetadataValidityCheck parameter is not supported by default. Contact Dremio Support to enable it.
Example: false
* * *
accelerationRefreshOnDataChanges Body Boolean
To refresh Reflections on underlying tables that are in Iceberg format in the source when new snapshots are created after an update, `true`. Otherwise, `false`. Reflections that are automatically updated based on Iceberg source table changes also update according to the source-level policy as the minimum refresh frequency. For this option to take effect, the source must support Iceberg table format, the accelerationNeverRefresh parameter must be set to `false`, and the accelerationActivePolicyType parameter must be set to either `PERIOD` or `SCHEDULE`.
* * *
accessControlList Body String Optional
Enterprise only. Information about users and roles that should have access to the source and the specific privileges each user or role should have. May include an array of users, an array of roles, or both, depending on the configured access and privileges. To keep existing accessControlList settings while making other updates, duplicate the existing accessControlList object in the PUT request.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65", "permissions": ["VIEW_REFLECTION","SELECT" ]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c45ff4d8-e910-4f85-89db-9b8c29188a56", "permissions": ["ALTER","CREATE_TABLE","DROP","INSERT","DELETE","UPDATE","TRUNCATE","VIEW_REFLECTION","ALTER_REFLECTION","MODIFY","MANAGE_GRANTS","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `config` Object​
The `config` object's parameters vary for different source types. Read [Source Configuration](/reference/api/catalog/source/container-source-config) for information about the available parameters in the `config` object for each supported source type.
#### Parameters of the `metadataPolicy` Object​
authTTLMs Body Integer Optional
Length of time to cache the privileges that the user has on the source, in milliseconds. For example, if authTTLMs is set to `28800000` (8 hours), Dremio checks the user's privilege status once every 8 hours. Default is `86400000` (24 hours). Minimum is `60000` (1 minute).
Example: 86400000
* * *
namesRefreshMs Body Integer Optional
How often to refresh the source, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 3600000
* * *
datasetRefreshAfterMs Body Integer Optional
How often to refresh the metadata in the source's datasets, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 3600000
* * *
datasetExpireAfterMs Body Integer Optional
Maximum age to allow for the metadata in the source's datasets, in milliseconds. Default is `3600000` (1 hour). Minimum is `60000` (1 minute).
Example: 10800000
* * *
datasetUpdateMode Body String Optional
Approach for Dremio to take for updating the metadata when updating datasets in the source.
  * `PREFETCH`: (deprecated) Dremio updates details for all datasets in a source.
  * `PREFETCH_QUERIED`: Dremio updates details for previously queried objects in a source.


Example: PREFETCH_QUERIED
* * *
deleteUnavailableDatasets Body Boolean Optional
If Dremio should remove dataset definitions from the source when the underlying data is unavailable, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
autoPromoteDatasets Body Boolean Optional
If Dremio should automatically format files into tables when a user issues a query, set to `true`. Otherwise, set to `false` (default). Available only for datalake sources, such as Amazon S3 and Hive.
Example: false
#### Parameters of the `accessControlList` Object​
users Body Array of Object Optional
Enterprise only. List of users who should have access to the source and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65","permissions": ["VIEW_REFLECTION","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the source and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c45ff4d8-e910-4f85-89db-9b8c29188a56","permissions": ["ALTER","CREATE_TABLE","DROP","INSERT","DELETE","UPDATE","TRUNCATE","VIEW_REFLECTION","ALTER_REFLECTION","MODIFY","MANAGE_GRANTS","SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Parameters of Objects in the `users` and `roles` Arrays​
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the source.
Example: ebe519ab-20e3-43ff-9b4c-b3ec590c7e65
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the source. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALL, VIEW_REFLECTION, TRUNCATE, UPDATE, DELETE, DROP, MANAGE_GRANTS, EXTERNAL_QUERY, EXECUTE, ALTER, INSERT, MODIFY, SELECT, CREATE_SOURCE, WRITE, CREATE_TABLE, ALTER_REFLECTION, READ
Example: ["VIEW_REFLECTION","SELECT"]
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/2b1be882-7012-4a99-8d6c-82e32e4562e4' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
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
  },  
  "id": "2b1be882-7012-4a99-8d6c-82e32e4562e4",  
  "tag": "T0/Zr1FOY3A=",  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": true  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationActivePolicyType": "PERIOD",  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accelerationRefreshOnDataChanges": true,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "ALTER",  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "source",  
  "config": {  
    "accessKey": "EXAMPLE78HT89VS4YJEL",  
    "accessSecret": "$DREMIO_EXISTING_VALUE$",  
    "secure": true,  
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
  },  
  "id": "2b1be882-7012-4a99-8d6c-82e32e4562e4",  
  "tag": "RfVMBBMWRvU=",  
  "type": "S3",  
  "name": "AWS-S3_testgroup",  
  "createdAt": "2023-02-17T14:32:20.640Z",  
  "metadataPolicy": {  
    "authTTLMs": 86400000,  
    "namesRefreshMs": 3600000,  
    "datasetRefreshAfterMs": 3600000,  
    "datasetExpireAfterMs": 10800000,  
    "datasetUpdateMode": "PREFETCH_QUERIED",  
    "deleteUnavailableDatasets": true,  
    "autoPromoteDatasets": true  
  },  
  "accelerationGracePeriodMs": 10800000,  
  "accelerationRefreshPeriodMs": 3600000,  
  "accelerationActivePolicyType": "PERIOD",  
  "accelerationNeverExpire": false,  
  "accelerationNeverRefresh": false,  
  "children": [  
    {  
      "id": "dremio:/AWS-S3_testgroup/archive.dremio.com",  
      "path": [  
        "AWS-S3_testgroup",  
        "archive.dremio.com"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_east-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_east-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "dremio:/AWS-S3_testgroup/logs_west-1",  
      "path": [  
        "AWS-S3_testgroup",  
        "logs_west-1"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    }  
  ],  
  "allowCrossSourceSelection": false,  
  "disableMetadataValidityCheck": false,  
  "accessControlList": {  
    "users": [  
      {  
        "id": "ebe519ab-20e3-43ff-9b4c-b3ec590c7e65",  
        "permissions": [  
          "ALTER",  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "c45ff4d8-e910-4f85-89db-9b8c29188a56",  
        "permissions": [  
          "ALTER",  
          "CREATE_TABLE",  
          "DROP",  
          "INSERT",  
          "DELETE",  
          "UPDATE",  
          "TRUNCATE",  
          "VIEW_REFLECTION",  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "MANAGE_GRANTS",  
          "SELECT"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "checkTableAuthorizer": true,  
  "owner": {  
    "ownerId": "4fb93af3-acc2-4b10-ad4b-64dd7070d365",  
    "ownerType": "USER"  
  },  
  "accelerationRefreshOnDataChanges": true  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Delete a Source​
Delete the specified source, including all of the source's contents.
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
Method and URL

```
DELETE /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the source that you want to delete.
Example: 2b1be882-7012-4a99-8d6c-82e32e4562e4
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/catalog/2b1be882-7012-4a99-8d6c-82e32e4562e4' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
No response  

```

### Response Status Codes​
204 No Content   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

Was this page helpful?
[Previous Catalog](/reference/api/catalog)[Next Source Configuration](/reference/api/catalog/source/container-source-config)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Catalog](/reference/api/catalog)[Next Source Configuration](/reference/api/catalog/source/container-source-config)
!
