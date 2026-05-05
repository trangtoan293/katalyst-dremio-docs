---
url: /reference/api/catalog/table
slug: /reference/api/catalog/table
title: "Table | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64237.582512291
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Table

Version: current [26.x]
On this page
# Table
Use the Catalog API to retrieve [tables](/what-is-dremio/key-concepts), format files and folders as tables, update and refresh tables, and revert tables to files and folders.
Table Object

```
{  
  "entityType": "dataset",  
  "id": "c9c11d32-0576-4200-5a5b-8c7229cb3d72",  
  "type": "PHYSICAL_DATASET",  
  "path": [  
    "Samples",  
    "samples.dremio.com",  
    "Dremio University",  
    "restaurant_reviews.parquet"  
  ],  
  "createdAt": "2024-01-13T19:52:01.894Z",  
  "tag": "cb2905bb-39c0-497f-ae74-4c310d534f25",  
  "accelerationRefreshPolicy": {  
    "activePolicyType": "SCHEDULE",  
    "refreshPeriodMs": 3600000,  
    "gracePeriodMs": 10800000,  
    "refreshSchedule": "0 0 8 * * ?",  
    "method": "FULL",  
    "neverExpire": false,  
    "neverRefresh": false,  
    "sourceRefreshOnDataChanges": false  
  },  
  "isMetadataExpired": false,  
  "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
  "format": {  
    "type": "Parquet",  
    "name": "restaurant_reviews.parquet",  
    "fullPath": [  
      "Samples",  
      "samples.dremio.com",  
      "Dremio University",  
      "restaurant_reviews.parquet"  
    ],  
    "ctime": 0,  
    "isFolder": false,  
    "location": "/samples.dremio.com/Dremio University/restaurant_reviews.parquet",  
    "ignoreOtherFileFormats": false,  
    "autoCorrectCorruptDates": true  
  },  
  "accessControlList": {  
    "users": [  
      {  
        "id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      },  
      {  
        "id": "30fca499-4abc-4469-7142-fc8dd29acac8",  
        "permissions": [  
          "SELECT",  
          "ALTER",  
          "MANAGE_GRANTS"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "76a9884b-aea5-46d5-a73a-000edf23f390",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
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
  "owner": {  
    "ownerId": "30fca499-4abc-4469-7142-fc8dd29acac8",  
    "ownerType": "USER"  
  },  
  "fields": [  
    {  
      "name": "_id",  
      "type": {  
        "name": "VARCHAR"  
      }  
    },  
    {  
      "name": "name",  
      "type": {  
        "name": "VARCHAR"  
      }  
    },  
    {  
      "name": "city",  
      "type": {  
        "name": "VARCHAR"  
      }  
    },  
    {  
      "name": "state",  
      "type": {  
        "name": "VARCHAR"  
      }  
    },  
    {  
      "name": "categories",  
      "type": {  
        "name": "LIST",  
        "subSchema": [  
          {  
            "type": {  
              "name": "VARCHAR"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "review_count",  
      "type": {  
        "name": "BIGINT"  
      }  
    },  
    {  
      "name": "stars",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "attributes",  
      "type": {  
        "name": "STRUCT",  
        "subSchema": [  
          {  
            "name": "Parking",  
            "type": {  
              "name": "STRUCT",  
              "subSchema": [  
                {  
                  "name": "garage",  
                  "type": {  
                    "name": "BOOLEAN"  
                  }  
                },  
                {  
                  "name": "street",  
                  "type": {  
                    "name": "BOOLEAN"  
                  }  
                },  
                {  
                  "name": "lot",  
                  "type": {  
                    "name": "BOOLEAN"  
                  }  
                },  
                {  
                  "name": "valet",  
                  "type": {  
                    "name": "BOOLEAN"  
                  }  
                }  
              ]  
            }  
          },  
          {  
            "name": "Accepts Credit Cards",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "Wheelchair Accessible",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "Price Range",  
            "type": {  
              "name": "BIGINT"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "date",  
      "type": {  
        "name": "VARCHAR"  
      }  
    }  
  ],  
  "approximateStatisticsAllowed": false  
}  

```

## Table Attributes​
entityType String
Type of the catalog object. For tables, the entityType is `dataset`.
Example: dataset
* * *
id String (UUID)
Unique identifier of the table.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
* * *
type String
Type of dataset. For tables, the type is `PHYSICAL_DATASET`.
Example: PHYSICAL_DATASET
* * *
path Array of String
Path of the table within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the table itself as the last item in the array.
Example: ["Samples","samples.dremio.com","Dremio University","restaurant_reviews.parquet"]
* * *
createdAt String
Date and time that the table was created, in UTC format.
Example: 2024-01-13T19:52:01.894Z
* * *
tag String (UUID)
Unique identifier of the version of the table. Dremio changes the tag whenever the table changes and uses the tag to ensure that PUT requests apply to the most recent version of the table.
Example: cb2905bb-39c0-497f-ae74-4c310d534f25
* * *
accelerationRefreshPolicy String
Attributes that define the acceleration refresh policy for the table.
* * *
isMetadataExpired Boolean
  * If true, the metadata of the table needs to be refreshed. To refresh it, run the ALTER TABLE command, using the clause REFRESH METADATA.
  * If false, the metadata can still be used for planning queries against the table.
  * If NULL, metadata has never yet been collected for the table.


* * *
lastMetadataRefreshAt String
Date and time that the table metadata was last refreshed. In UTC format. If NULL, the metadata has never yet been refreshed.
Example: 2024-01-31T09:50:01.012Z
* * *
format Object
Table format attributes.
* * *
accessControlList Object
Enterprise only. Information about users and roles with access to the table and the specific privileges each user or role has. May include an array of users, an array of roles, or both, depending on the configured access and privileges. The accessControlList array is empty if table-specific access control privileges are not set.
Example: {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the table. Only appears in the response if the request URL includes the `permissions` query parameter. For more information, read [Privileges](/security/rbac/privileges).
Example: ["READ","WRITE","ALTER_REFLECTION","SELECT","ALTER","VIEW_REFLECTION","MODIFY","MANAGE_GRANTS","CREATE_TABLE","DROP","EXTERNAL_QUERY","INSERT","TRUNCATE","DELETE","UPDATE","EXECUTE","CREATE_SOURCE","ALL"]
* * *
owner String
Information about the table's owner.
* * *
fields Object
Attributes that represent the table schema.
approximateStatisticsAllowed Boolean
If true, `COUNT DISTINCT` queries run on the table return approximate results. Otherwise, false.
Example: {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"ownerId": "30fca499-4abc-4469-7142-fc8dd29acac8","ownerType": "USER"{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Attributes of the `accelerationRefreshPolicy` Object​
activePolicyType String
Option to set the policy for refreshing Reflections that are defined on the source. For this option to take effect, `neverRefresh` must be set to `false`.
The possible values are:
  * `NEVER`: The Reflections are never refreshed.
  * `PERIOD`: Default. The Reflections are refreshed at the end of every period that is defined by refreshPeriodMs.
  * `SCHEDULE`: The Reflections are refreshed according to the schedule that is set by refreshSchedule.
  * `REFRESH_ON_DATA_CHANGES`: Reflections automatically refresh for underlying tables that are in Iceberg format when new snapshots are created after an update. If the Reflection refresh job finds no changes, then no data is updated. Reflections that are automatically updated based on Iceberg source table changes also update according to the source-level policy as the minimum refresh frequency.


* * *
refreshPeriodMs Integer
Refresh period for the data in all Reflections for the table, in milliseconds.
Example: 3600000
* * *
refreshSchedule String
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
Examples:
  * `0 0 0 * * ?` : Refreshes every day at midnight.
  * `0 45 15 * * 1,4,7` : Refreshes at 15:45 on Sunday, Wednesday, and Saturday.
  * `0 15 7 ? * 2-6` : Refreshes at 7:15 on Monday and Friday.


* * *
gracePeriodMs Integer
Maximum age allowed for Reflection data used to accelerate queries, in milliseconds.
Example: 10800000
* * *
method String
Approach used for refreshing the data in Reflections defined on tables that are not in the Apache Iceberg format. For more information, read [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections).
Enum: FULL, INCREMENTAL
Example: FULL
* * *
refreshField String
For the `INCREMENTAL` refresh method, the field to refresh for the table. Used only if method is `INCREMENTAL`. This parameter applies only to tables that are not in the Apache Iceberg format.
Example: business_id
* * *
neverExpire Boolean
If the Reflection never expires, the value is `true`. Otherwise, the value is `false`.
Example: false
* * *
neverRefresh Boolean
If the Reflection never refreshes, the value is `true`. Otherwise, the value is `false`.
Example: false
* * *
sourceRefreshOnDataChanges Boolean
If the table's source is configured so that Reflections on tables in Iceberg format in the source will refresh when new snapshots are created after an update, `true`. Otherwise, `false`.
#### Attributes of the `format` Object​
type String
Type of data in the table.
Enum: Delta, Excel, Iceberg, JSON, Parquet, Text, Unknown, XLS
Example: Parquet
* * *
name String
Table name. Dremio automatically duplicates the name of the origin file or folder to populate this value. The name of the origin file or folder cannot include the following special characters: `/`, `:`, `[`, or `]`.
Example: restaurant_reviews.parquet
* * *
fullPath Array of String
Path of the table within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the table itself as the last item in the array.
Example: ["Samples", "samples.dremio.com", "Dremio University", "restaurant_reviews.parquet"]
* * *
ctime Integer
Not used. Has the value `0`.
Example: 0
* * *
isFolder Boolean
If the value is `true`, the table was created from a folder. If the value is `false`, the table was created from a file.
Example: false
* * *
location String
Location, expressed as a string, where the table's metadata is stored within a Dremio source or space.
Example: /samples.dremio.com/Dremio University/restaurant_reviews.parquet
* * *
ignoreOtherFileFormats Boolean
If true, Dremio ignores all non-Parquet files in the related folder structure, and the promoted table works as if only Parquet files are in the folder structure. Otherwise, false. Included only for Parquet folders.
Example: false
* * *
metaStoreType String
Not used. Has the value `HDFS`.
Example: HDFS
* * *
parquetDataFormat Object
Information about data format for Parquet tables.
* * *
dataFormatTypeList Array of String
List of data format types in the table. Included only for Iceberg tables, and `PARQUET` is the only valid value.
Example: ["PARQUET"]
* * *
sheetName String
For tables created from files that contain multiple sheets, the name of the sheet used to create the table.
Example: location_1
* * *
extractHeader Boolean
For tables created from files, the value is `true` if Dremio extracted the table's column names from the first line of the file. Otherwise, the value is `false`.
Example: false
* * *
hasMergedCells Boolean
For tables created from files, the value is `true` if Dremio expanded merged cells in the file when creating the table. Otherwise, the value is `false`.
Example: true
* * *
fieldDelimiter String
Character used to indicate separate fields in the table. May be `,` for a comma (default), `\t` for a tab, `|` for a pipe, or a custom character.
* * *
quote String
Character used for quotation marks in the table. May be `\"` for a double quote (default), `'` for a single quote, or a custom character.
* * *
comment String
Character used to indicate comments in the table. May be `#` for a number sign (default) or a custom character.
* * *
escape String
Character used to indicate an escape in the table. May be `\"` for a double quote (default), ``` for a back quote, `\\` for a backward slash, or a custom character.
* * *
lineDelimiter String
Character used to indicate separate lines in the table. May be `\r\n` for a carriage return and a new line (default), `\n` for a new line, or a custom character.
* * *
skipFirstLine Boolean
If Dremio skipped the first line in the file or folder when creating the table, the value is `true`. Otherwise, the value is `false`.
Example: false
* * *
autoGenerateColumnNames Boolean
If Dremio used the existing columnn names in the file or folder for the table columns, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
trimHeader Boolean
If Dremio trimmed column names to a specific number of characters when creating the table, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
autoCorrectCorruptDates Boolean
If Dremio automatically corrects corrupted date fields in the table, the value is `true`. Otherwise, the value is `false`.
Example: true
#### Attributes of the `accessControlList` Object​
users Array of Object
Enterprise only. List of users with access to the table and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'}"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT", "ALTER"]{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'}"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT", "ALTER", "MANAGE_GRANTS"]{'{'}'{'}'}'{'}'}]
* * *
roles Array of Object
Enterprise only. List of roles whose members have access to the table and the specific privileges each role has.
Example: [{'{'}'{'{'}'{'}'}"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT", "ALTER"]{'{'}'{'}'}'{'}'}]
##### Attributes of Objects in the `users` and `roles` Arrays​
id String
Enterprise only. Unique identifier of the user or role with access to the table.
Example: c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3
* * *
permissions Array of String
Enterprise only. List of privileges the user or role has on the table. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT", "ALTER"]
#### Attributes of the `owner` Object​
ownerId String (UUID)
Unique identifier of the table's owner.
Example: 30fca499-4abc-4469-7142-fc8dd29acac8
* * *
ownerType String
Type of owner of the table.
Enum: USER, ROLE
Example: USER
#### Attributes of Objects in the `fields` Array​
name String
Name of the table field.
Example: review_count
* * *
type Object
Information about the table field.
##### Attributes of the `type` Object​
name String
Name of the table field's type.
Enum: STRUCT, LIST, UNION, INTEGER, BIGINT, FLOAT, DOUBLE, VARCHAR, VARBINARY, BOOLEAN, DECIMAL, TIME, DATE, TIMESTAMP, INTERVAL DAY TO SECOND, INTERVAL YEAR TO MONTH
Example: BIGINT
* * *
precision Integer
Total number of digits in the number. Included only for the `DECIMAL` type.
Example: 38
* * *
scale Integer
Number of digits to the right of the decimal point. Included only for the `DECIMAL` type.
Example: 0
* * *
subSchema Array of Object
List of objects that represent the field's composition. For example, a field composed of data about a restaurant might have a subSchema with an object for parking options, another for payment methods, and so on. subSchemas may be nested within other subSchemas. subSchema appears only for the `STRUCT`, `LIST`, and `UNION` types.
##### Attributes of Objects in the `subSchema` Array​
name String
Name for the subSchema object.
Example: Parking
* * *
type Object
Object that contains a `name` attribute that provides the field's type.
Example: {'{'}'{'{'}'{'}'}"name": "BOOLEAN"{'{'}'{'}'}'{'}'}
#### Attributes of the `parquetDataFormat` Object​
type String
Type of data in the table. Within the parquetDataFormat object, the only valid type is `Parquet`.
Example: Parquet
* * *
ctime Integer
Not used. Has the value `0`.
Example: 0
* * *
isFolder Boolean
If the value is `true`, the table was created from a folder. If the value is `false`, the table was created from a file.
Example: true
* * *
autoCorrectCorruptDates Boolean
If the value is `true`, Dremio automatically corrects corrupted date fields in the table. Otherwise, the value is `false`.
Example: true
## Format a File or Folder as a Table​
Format a file or folder as a table so that you can query the data in Dremio.
To format a folder, all files in the folder must be the same format.
Method and URL

```
POST /api/v3/catalog/{id}  

```

### Parameters​
id Path String
Unique identifier of the file or folder you want to format. The ID can be a UUID or a text path. If the ID is a text path, use URL encoding to replace special characters with their UTF-8-equivalent characters: `%3A` for a colon; `%2F` for a forward slash, and `%20` for a space. For example, if the ID value is `dremio:/Samples/samples.dremio.com/Dremio University`, the URI-encoded ID is `dremio%3A%2FSamples%2Fsamples.dremio.com%2FDremio%20University`.
Example: c590ed7f-7142-4e1f-ba7d-94173afdc9a3
* * *
entityType Body String
Type of the catalog object. To format a file or folder as a table, the entityType is `dataset`.
* * *
path Body Array of String
Path of the file or folder you want to format, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the file or folder itself as the last item in the array. Get the path from the file or folder's children object in the response to a [Folder](/reference/api/catalog/container-folder) request.
Example: ["Samples", "samples.dremio.com", "Dremio University", "restaurant_reviews.parquet"]
* * *
type Body String
Type of dataset. For tables, the type is `PHYSICAL_DATASET`.
* * *
accelerationRefreshPolicy Object
Attributes that define the acceleration refresh policy for the table.
* * *
format Body String
Parameters that describe how to format the file or folder.
* * *
accessControlList Body Object Optional
Enterprise only. Object used to specify which users and roles should have access to the table and the specific privileges each user or role should have. May include an array of users, an array of roles, or both.
Example: {'{'}'{'{'}'{'}'}"users": [{'{'}'{'{'}'{'}'}"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT", "ALTER"]{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'}"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT", "ALTER", "MANAGE_GRANTS"]{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'}"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT", "ALTER"]{'{'}'{'}'}'{'}'}]{'{'}'{'}'}'{'}'}
#### Parameters of the `accelerationRefreshPolicy` Object​
activePolicyType Body String
Policy to use for refreshing Reflections that are defined on the source. For this option to take effect, the neverRefresh parameter must be set to `false`.
The possible values are:
  * `NEVER`: The Reflections are never refreshed.
  * `PERIOD`: Default. The Reflections are refreshed at the end of every period that is defined by refreshPeriodMs.
  * `SCHEDULE`: The Reflections are refreshed according to the schedule that is set by refreshSchedule.
  * `REFRESH_ON_DATA_CHANGES`: Reflections automatically refresh for underlying tables that are in Iceberg format when new snapshots are created after an update. If the Reflection refresh job finds no changes, then no data is updated. Reflections that are automatically updated based on Iceberg source table changes also update according to the source-level policy as the minimum refresh frequency. Only available for tables in Iceberg format.


* * *
refreshPeriodMs Body Integer
Refresh period to use for the data in all Reflections for the table. In milliseconds. Optional if you set activePolicyType to `PERIOD`. The default setting is `3600000` milliseconds or one hour, which is also the minimum amount of time that is supported.
Example: 3600000
* * *
refreshSchedule Body String
A cron expression that sets the schedule, in UTC time, according to which the Reflections that are defined on the source should be refreshed. Optional if you set activePolicyType to `SCHEDULE`. The default refreshSchedule setting is to refresh every day at 8:00 a.m.  
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
gracePeriodMs Body Integer
Maximum age to allow for Reflection data used to accelerate queries. In milliseconds.
Example: 10800000
* * *
method Body String
Method to use for refreshing the data in Reflections. For tables that are in the Apache Iceberg format; Parquet datasets in filesystems; or Parquet datasets, Avro datasets, or non-transactional ORC datasets in AWS Glue, the value is `AUTO`. In this case, the method used depends on this algorithm:
  1. The initial refresh of a Reflection is always a full refresh.
  2. If the Reflection is created from a view that uses nested group-bys, joins, unions, or window functions, then a full refresh is performed.
  3. If the changes to the base table are only appends, then an incremental refresh based on table snapshots is performed.
  4. If the changes to the base table include non-append operations, then a partition-based incremental refresh is attempted.
  5. If the partitions of the base table and the partitions of the Reflection are not compatible, or if either the base table or the Reflection is not partitioned, then a full refresh is performed.


Read [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections) for more information.
Enum: AUTO, FULL, INCREMENTAL
Example: FULL
* * *
refreshField Body String
For the `INCREMENTAL` refresh method, the field to refresh for the table. Used only if the method is `INCREMENTAL`. This parameter applies only to tables that are not in the Apache Iceberg format.
Example: business_id
* * *
neverExpire Body Boolean
If the Reflection should never expire, `true`. Otherwise, `false`.
Example: false
* * *
neverRefresh Body Boolean
If the Reflection should never refresh, `true`. Otherwise, `false`.
Example: false
#### Parameters of the `format` Object​
type Body String
Type of data in the file or folder. All files in the folder must be the same format.
Enum: Delta, Excel, Iceberg, JSON, Parquet, Text, Unknown, XLS
* * *
ignoreOtherFileFormats Body Boolean Optional
If Dremio should ignore all non-Parquet files in the related folder structure so that the promoted table works as if only Parquet files are in the folder structure, set to `true`. Otherwise, set to `false` (default). Optional for Parquet folders.
Example: false
* * *
skipFirstLine Body Boolean Optional
If Dremio should skip the first line in the file or folder when creating the table, set to `true`. Otherwise, set to `false` (default). Optional for files or folders of the Excel and Text types.
Example: true
* * *
extractHeader Body Boolean Optional
If Dremio should extract the table's column names from the first line of the file, set to `true`. Otherwise, set to `false` (default). Optional for files or folders of the Excel and Text types.
Example: true
* * *
hasMergedCells Body Boolean Optional
If Dremio should expand merged cells in the file when creating the table, set to `true`. Otherwise, set to `false` (default). Optional for files or folders of the Excel type.
Example: true
* * *
sheetName Body String Optional
For tables created from Excel files that contain multiple sheets, the name of the sheet to use to create the table. Default is the first sheet in the file (for files that contain multiple sheets).
Example: location_1
* * *
fieldDelimiter Body String Optional
Character to use to indicate separate fields in the table. May be `,` for a comma (default), `\t` for a tab, `|` for a pipe, or a custom character. Optional for files or folders of the Text type.
* * *
quote Body String Optional
Character to use for quotes in the table. May be `"` for a double quote (default), `'` for a single quote, or a custom character. Optional for files or folders of the Text type.
* * *
comment Body String Optional
Character to use to indicate comments in the table. May be `#` for a number sign (default) or a custom character. Optional for files or folders of the Text type.
* * *
escape Body String Optional
Character used to indicate an escape in the table. May be `"` for a double quote (default), ``` for a back quote, `\` for a backward slash, or a custom character. Optional for files or folders of the Text type.
* * *
lineDelimiter Body String Optional
Character used to indicate separate lines in the table. May be `\r\n` for a carriage return and a new line (default), `\n` for a new line, or a custom character. Optional for files or folders of the Text type.
* * *
autoGenerateColumnNames Body Boolean Optional
If Dremio should use the existing columnn names in the file or folder for the table columns, set to `true` (default). Otherwise, set to `false`. Optional for files or folders of the Text type.
Example: true
* * *
trimHeader Body Boolean Optional
If Dremio should trim column names to a specific number of characters when creating the table, set to `true`. Otherwise, set to `false` (default). Optional for files or folders of the Text type.
Example: true
#### Parameters of the `accessControlList` Object​
users Body Array of Object Optional
Enterprise only. List of users who should have access to the table and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the table and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT", "ALTER"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays​
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the table.
Example: c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the table. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT", "ALTER"]
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/c9c11d32-0576-4200-5a5b-8c7229cb3d72' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "dataset",  
  "path": [  
    "Samples",  
    "Dremio University",  
    "restaurant_reviews.parquet"  
  ],  
  "type": "PHYSICAL_DATASET",  
  "format": {  
    "type": "Parquet"  
  },  
  "accessControlList": {  
    "users": [  
      {  
        "id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      },  
      {  
        "id": "30fca499-4abc-4469-7142-fc8dd29acac8",  
        "permissions": [  
          "SELECT",  
          "ALTER",  
          "MANAGE_GRANTS"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "76a9884b-aea5-46d5-a73a-000edf23f390",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
    "entityType": "dataset",  
    "id": "c9c11d32-0576-4200-5a5b-8c7229cb3d72",  
    "type": "PHYSICAL_DATASET",  
    "path": [  
      "Samples",  
      "samples.dremio.com",  
      "Dremio University",  
      "restaurant_reviews.parquet"  
    ],  
    "createdAt": "2024-01-13T19:52:01.894Z",  
    "tag": "cb2905bb-39c0-497f-ae74-4c310d534f25",  
    "accelerationRefreshPolicy": {  
      "activePolicyType": "PERIOD",  
      "refreshPeriodMs": 3600000,  
      "refreshSchedule": "0 56 18 * * *",  
      "gracePeriodMs": 259200000,  
      "method": "FULL",  
      "neverExpire": true,  
      "neverRefresh": false,  
      "sourceRefreshOnDataChanges": false  
    },  
    "isMetadataExpired": false,  
    "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
    "format": {  
      "type": "Parquet",  
      "name": "restaurant_reviews.parquet",  
      "fullPath": [  
        "Samples",  
        "samples.dremio.com",  
        "Dremio University",  
        "restaurant_reviews.parquet"  
      ],  
      "ctime": 0,  
      "isFolder": false,  
      "location": "/samples.dremio.com/Dremio University/restaurant_reviews.parquet",  
      "ignoreOtherFileFormats": "false",  
      "autoCorrectCorruptDates": true  
    },  
    "accessControlList": {  
      "users": [  
        {  
          "id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3",  
          "permissions": [  
            "SELECT",  
            "ALTER"  
          ]  
        },  
        {  
          "id": "30fca499-4abc-4469-7142-fc8dd29acac8",  
          "permissions": [  
            "SELECT",  
            "ALTER",  
            "MANAGE_GRANTS"  
          ]  
        }  
      ],  
      "roles": [  
        {  
          "id": "76a9884b-aea5-46d5-a73a-000edf23f390",  
          "permissions": [  
            "SELECT",  
            "ALTER"  
          ]  
        }  
      ]  
    },  
    "owner": {  
      "ownerId": "30fca499-4abc-4469-7142-fc8dd29acac8",  
      "ownerType": "USER"  
    },  
    "fields": [  
      {  
        "name": "_id",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "name",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "city",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "state",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "categories",  
        "type": {  
          "name": "LIST",  
          "subSchema": [  
            {  
              "type": {  
                "name": "VARCHAR"  
              }  
            }  
          ]  
        }  
      },  
      {  
        "name": "review_count",  
        "type": {  
          "name": "BIGINT"  
        }  
      },  
      {  
        "name": "stars",  
        "type": {  
          "name": "DOUBLE"  
        }  
      },  
      {  
        "name": "attributes",  
        "type": {  
          "name": "STRUCT",  
          "subSchema": [  
            {  
              "name": "Parking",  
              "type": {  
                "name": "STRUCT",  
                "subSchema": [  
                  {  
                    "name": "garage",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "street",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "lot",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "valet",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  }  
                ]  
              }  
            },  
            {  
              "name": "Accepts Credit Cards",  
              "type": {  
                "name": "BOOLEAN"  
              }  
            },  
            {  
              "name": "Wheelchair Accessible",  
              "type": {  
                "name": "BOOLEAN"  
              }  
            },  
            {  
              "name": "Price Range",  
              "type": {  
                "name": "BIGINT"  
              }  
            }  
          ]  
        }  
      },  
      {  
        "name": "date",  
        "type": {  
          "name": "VARCHAR"  
        }  
      }  
    ],  
    "approximateStatisticsAllowed": false  
  }  

```

Example Request for Excel format type

```
curl -X POST 'https://{hostname}/api/v3/catalog/dremio%3A%2FSamples%2Fsamples.dremio.com%2FDremio%20University%2Foracle-departments.xlsx' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "dataset",  
  "path": [  
      "Samples",  
      "samples.dremio.com",  
      "Dremio University",  
      "oracle-departments.xlsx"  
    ],  
  "type": "PHYSICAL_DATASET",  
  "format": {  
    "type": "Excel",  
    "extractHeader": true,  
    "hasMergedCells": true,  
    "sheetName": "Sheet1"  
    }  
}'  

```

Example Request for Text format type

```
curl -X POST 'https://{hostname}/api/v3/catalog/6ba3bd6e-fd27-4572-a535-77e1548283b3' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "dataset",  
  "path": [  
    "Samples",  
    "samples.dremio.com",  
    "Dremio University",  
    "airbnb_listings.csv"  
  ],  
  "type": "PHYSICAL_DATASET",  
  "format": {  
    "type": "Text",  
    "fieldDelimiter": ",",  
    "skipFirstLine": false,  
    "extractHeader": true,  
    "quote": "\"",  
    "comment": "#",  
    "escape": "\"",  
    "lineDelimiter": "\r\n",  
    "autoGenerateColumnNames": true,  
    "trimHeader": false  
  }  
}'  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve a Table by ID​
Retrieve a table by specifying the table's `id` value.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the table that you want to retrieve.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?include=permissions
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/c9c11d32-0576-4200-5a5b-8c7229cb3d72' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
    "entityType": "dataset",  
    "id": "c9c11d32-0576-4200-5a5b-8c7229cb3d72",  
    "type": "PHYSICAL_DATASET",  
    "path": [  
      "Samples",  
      "samples.dremio.com",  
      "Dremio University",  
      "restaurant_reviews.parquet"  
    ],  
    "createdAt": "2024-01-13T19:52:01.894Z",  
    "tag": "cb2905bb-39c0-497f-ae74-4c310d534f25",  
    "accelerationRefreshPolicy": {  
      "activePolicyType": "PERIOD",  
      "refreshPeriodMs": 3600000,  
      "refreshSchedule": "0 56 18 * * *",  
      "gracePeriodMs": 259200000,  
      "method": "FULL",  
      "neverExpire": true,  
      "neverRefresh": false,  
      "sourceRefreshOnDataChanges": false  
    },  
    "isMetadataExpired": false,  
    "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
    "format": {  
      "type": "Parquet",  
      "name": "restaurant_reviews.parquet",  
      "fullPath": [  
        "Samples",  
        "samples.dremio.com",  
        "Dremio University",  
        "restaurant_reviews.parquet"  
      ],  
      "ctime": 0,  
      "isFolder": false,  
      "location": "/samples.dremio.com/Dremio University/restaurant_reviews.parquet",  
      "ignoreOtherFileFormats": false,  
      "autoCorrectCorruptDates": true  
    },  
    "accessControlList": {  
      "users": [  
        {  
          "id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3",  
          "permissions": [  
            "SELECT",  
            "ALTER"  
          ]  
        },  
        {  
          "id": "30fca499-4abc-4469-7142-fc8dd29acac8",  
          "permissions": [  
            "SELECT",  
            "ALTER",  
            "MANAGE_GRANTS"  
          ]  
        }  
      ],  
      "roles": [  
        {  
          "id": "76a9884b-aea5-46d5-a73a-000edf23f390",  
          "permissions": [  
            "SELECT",  
            "ALTER"  
          ]  
        }  
      ]  
    },  
    "owner": {  
      "ownerId": "30fca499-4abc-4469-7142-fc8dd29acac8",  
      "ownerType": "USER"  
    },  
    "fields": [  
      {  
        "name": "_id",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "name",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "city",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "state",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "categories",  
        "type": {  
          "name": "LIST",  
          "subSchema": [  
            {  
              "type": {  
                "name": "VARCHAR"  
              }  
            }  
          ]  
        }  
      },  
      {  
        "name": "review_count",  
        "type": {  
          "name": "BIGINT"  
        }  
      },  
      {  
        "name": "stars",  
        "type": {  
          "name": "DOUBLE"  
        }  
      },  
      {  
        "name": "attributes",  
        "type": {  
          "name": "STRUCT",  
          "subSchema": [  
            {  
              "name": "Parking",  
              "type": {  
                "name": "STRUCT",  
                "subSchema": [  
                  {  
                    "name": "garage",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "street",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "lot",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "valet",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  }  
                ]  
              }  
            },  
            {  
              "name": "Accepts Credit Cards",  
              "type": {  
                "name": "BOOLEAN"  
              }  
            },  
            {  
              "name": "Wheelchair Accessible",  
              "type": {  
                "name": "BOOLEAN"  
              }  
            },  
            {  
              "name": "Price Range",  
              "type": {  
                "name": "BIGINT"  
              }  
            }  
          ]  
        }  
      },  
      {  
        "name": "date",  
        "type": {  
          "name": "VARCHAR"  
        }  
      }  
    ],  
    "approximateStatisticsAllowed": false  
  }  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve a Table by Path​
Retrieve a table by specifying the table's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters​
path Path String
Table's location within Dremio, using forward slashes as separators. For example, for the "NYC-taxi-trips" table in the "samples.dremio.com" folder within the source "Samples," the path is `Samples/samples.dremio.com/NYC-taxi-trips`. If the name of any component in the path includes special characters for URLs, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, "Dremio University" should be `Dremio%20University` in the URL path.
Example: Samples/samples.dremio.com/Dremio%20University/restaurant_reviews.parquet
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?include=permissions
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/Samples/samples.dremio.com/Dremio%20University/restaurant_reviews.parquet' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
    "entityType": "dataset",  
    "id": "c9c11d32-0576-4200-5a5b-8c7229cb3d72",  
    "type": "PHYSICAL_DATASET",  
    "path": [  
      "Samples",  
      "samples.dremio.com",  
      "Dremio University",  
      "restaurant_reviews.parquet"  
    ],  
    "createdAt": "2024-01-13T19:52:01.894Z",  
    "tag": "cb2905bb-39c0-497f-ae74-4c310d534f25",  
    "accelerationRefreshPolicy": {  
      "activePolicyType": "PERIOD",  
      "refreshPeriodMs": 3600000,  
      "refreshSchedule": "0 56 18 * * *",  
      "gracePeriodMs": 259200000,  
      "method": "FULL",  
      "neverExpire": true,  
      "neverRefresh": false,  
      "sourceRefreshOnDataChanges": false  
    },  
    "isMetadataExpired": false,  
    "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
    "format": {  
      "type": "Parquet",  
      "name": "restaurant_reviews.parquet",  
      "fullPath": [  
        "Samples",  
        "samples.dremio.com",  
        "Dremio University",  
        "restaurant_reviews.parquet"  
      ],  
      "ctime": 0,  
      "isFolder": false,  
      "location": "/samples.dremio.com/Dremio University/restaurant_reviews.parquet",  
      "ignoreOtherFileFormats": false,  
      "autoCorrectCorruptDates": true  
    },  
    "accessControlList": {  
      "users": [  
        {  
          "id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3",  
          "permissions": [  
            "SELECT",  
            "ALTER"  
          ]  
        },  
        {  
          "id": "30fca499-4abc-4469-7142-fc8dd29acac8",  
          "permissions": [  
            "SELECT",  
            "ALTER",  
            "MANAGE_GRANTS"  
          ]  
        }  
      ],  
      "roles": [  
        {  
          "id": "76a9884b-aea5-46d5-a73a-000edf23f390",  
          "permissions": [  
            "SELECT",  
            "ALTER"  
          ]  
        }  
      ]  
    },  
    "owner": {  
      "ownerId": "30fca499-4abc-4469-7142-fc8dd29acac8",  
      "ownerType": "USER"  
    },  
    "fields": [  
      {  
        "name": "_id",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "name",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "city",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "state",  
        "type": {  
          "name": "VARCHAR"  
        }  
      },  
      {  
        "name": "categories",  
        "type": {  
          "name": "LIST",  
          "subSchema": [  
            {  
              "type": {  
                "name": "VARCHAR"  
              }  
            }  
          ]  
        }  
      },  
      {  
        "name": "review_count",  
        "type": {  
          "name": "BIGINT"  
        }  
      },  
      {  
        "name": "stars",  
        "type": {  
          "name": "DOUBLE"  
        }  
      },  
      {  
        "name": "attributes",  
        "type": {  
          "name": "STRUCT",  
          "subSchema": [  
            {  
              "name": "Parking",  
              "type": {  
                "name": "STRUCT",  
                "subSchema": [  
                  {  
                    "name": "garage",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "street",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "lot",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  },  
                  {  
                    "name": "valet",  
                    "type": {  
                      "name": "BOOLEAN"  
                    }  
                  }  
                ]  
              }  
            },  
            {  
              "name": "Accepts Credit Cards",  
              "type": {  
                "name": "BOOLEAN"  
              }  
            },  
            {  
              "name": "Wheelchair Accessible",  
              "type": {  
                "name": "BOOLEAN"  
              }  
            },  
            {  
              "name": "Price Range",  
              "type": {  
                "name": "BIGINT"  
              }  
            }  
          ]  
        }  
      },  
      {  
        "name": "date",  
        "type": {  
          "name": "VARCHAR"  
        }  
      }  
    ],  
    "approximateStatisticsAllowed": false  
  }  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Update a Table​
Update the specified table in Dremio.
Method and URL

```
PUT /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the table that you want to update.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
* * *
entityType Body String
Type of the catalog object. For tables, the entityType is `dataset`.
* * *
id Body String (UUID)
Unique identifier of the table that you want to update.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
* * *
path Body Array of String
Path of the table that you want to update, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the table itself as the last item in the array. Get the path from the table's children object in the response to a [Folder](/reference/api/catalog/container-folder) request.
Example: ["Samples", "samples.dremio.com", "Dremio University", "restaurant_reviews.parquet"]
* * *
tag Body String (UUID) Optional
Unique identifier of the version of the table that you want to update. If you provide a tag in the request body, Dremio uses the tag to ensure that you are requesting to update the most recent version of the table. If you do not provide a tag, Dremio automatically updates the most recent version of the table.
Example: cb2905bb-39c0-497f-ae74-4c310d534f25
* * *
type Body String
Type of dataset. For tables, the type is `PHYSICAL_DATASET`.
Example:
* * *
accelerationRefreshPolicy Object
Attributes that define the acceleration refresh policy for the table.
* * *
format Body String
Parameters that describe the table's format.
* * *
accessControlList Body String Optional
Enterprise only. Object used to specify which users and roles should have access to the table and the specific privileges each user or role should have. May include an array of users, an array of roles, or both.
Example: {'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'})'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'{'}'{'}'}'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
#### Parameters of the `accelerationRefreshPolicy` Object​
activePolicyType Body String
Policy to use for refreshing Reflections that are defined on the source. For this option to take effect, the neverRefresh parameter must be set to `false`.
The possible values are:
  * `NEVER`: The Reflections are never refreshed.
  * `PERIOD`: Default. The Reflections are refreshed at the end of every period that is defined by refreshPeriodMs.
  * `SCHEDULE`: The Reflections are refreshed according to the schedule that is set by refreshSchedule.
  * `REFRESH_ON_DATA_CHANGES`: Reflections automatically refresh for underlying tables that are in Iceberg format when new snapshots are created after an update. If the Reflection refresh job finds no changes, then no data is updated. Reflections that are automatically updated based on Iceberg source table changes also update according to the source-level policy as the minimum refresh frequency. Only available for tables in Iceberg format.


* * *
refreshPeriodMs Body Integer
Refresh period to use for the data in all Reflections for the table. In milliseconds. Optional if you set activePolicyType to `PERIOD`. The default setting is `3600000` milliseconds or one hour, which is also the minimum amount of time that is supported.
Example: 3600000
* * *
refreshSchedule Body String
A cron expression that sets the schedule, in UTC time, according to which the Reflections that are defined on the source should be refreshed. Optional if you set activePolicyType to `SCHEDULE`. The default refreshSchedule setting is to refresh every day at 8:00 a.m.  
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
gracePeriodMs Body Integer
Maximum age to allow for Reflection data used to accelerate queries. In milliseconds.
Example: 10800000
* * *
method Body String
Method to use for refreshing the data in Reflections. For tables that are in the Apache Iceberg format; Parquet datasets in filesystems; or Parquet datasets, Avro datasets, or non-transactional ORC datasets in AWS Glue, the value is `AUTO`. In this case, the method used depends on this algorithm:
  1. The initial refresh of a Reflection is always a full refresh.
  2. If the Reflection is created from a view that uses nested group-bys, joins, unions, or window functions, then a full refresh is performed.
  3. If the changes to the base table are only appends, then an incremental refresh based on table snapshots is performed.
  4. If the changes to the base table include non-append operations, then a partition-based incremental refresh is attempted.
  5. If the partitions of the base table and the partitions of the Reflection are not compatible, or if either the base table or the Reflection is not partitioned, then a full refresh is performed.


Read [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections) for more information.
Enum: AUTO, FULL, INCREMENTAL
Example: FULL
* * *
refreshField Body String
For the `INCREMENTAL` refresh method, the field to refresh for the table. Used only if the method is `INCREMENTAL`. This parameter applies only to tables that are not in the Apache Iceberg format.
Example: business_id
* * *
neverExpire Body Boolean
If the Reflection should never expire, `true`. Otherwise, `false`.
Example: false
* * *
neverRefresh Body Boolean
If the Reflection should never refresh, `true`. Otherwise, `false`.
Example: false
#### Parameters of the `format` Object​
type Body String
Type of data in the table.
Enum: Delta, Excel, Iceberg, JSON, Parquet, Text, Unknown, XLS
* * *
skipFirstLine Body Boolean Optional
If Dremio should skip the first line in the table, set to `true`. Otherwise, set to `false` (default). Optional for Excel and Text types.
Example: true
* * *
extractHeader Body Boolean Optional
If Dremio should extract the table's column names from the first line of the file, set to `true`. Otherwise, set to `false` (default). Optional for tables created from files or folders of the Excel and Text types.
Example: true
* * *
hasMergedCells Body Boolean Optional
If Dremio should expand merged cells in the table, set to `true`. Otherwise, set to `false` (default). Optional for tables created from files or folders of the Excel type.
Example: true
* * *
fieldDelimiter Body String Optional
Character to use to indicate separate fields in the table. May be `,` for a comma (default), `\t` for a tab, `|` for a pipe, or a custom character. Optional for tables created from files or folders of the Text type.
* * *
quote Body String Optional
Character to use for quotes in the table. May be `\"` for a double quote (default), `'` for a single quote, or a custom character. Optional for tables created from files or folders of the Text type.
* * *
comment Body String Optional
Character to use to indicate comments for the table. May be `#` for a number sign (default) or a custom character. Optional for tables created from files or folders of the Text type.
* * *
escape Body String Optional
Character to use to indicate an escape for the table. May be `\"` for a double quote (default), ``` for a back quote, `\\` for a backward slash, or a custom character. Optional for tables created from files or folders of the Text type.
* * *
lineDelimiter Body String Optional
Character to use to indicate separate lines for the table. May be `\r\n` for a carriage return and a new line (default), `\n` for a new line, or a custom character. Optional for tables created from files or folders of the Text type.
Example:
* * *
autoGenerateColumnNames Body Boolean Optional
If Dremio should use the existing columnn names for the table columns, set to `true` (default). Otherwise, set to `false`. Optional for tables created from files or folders of the Text type.
Example: true
* * *
trimHeader Body Boolean Optional
If Dremio should trim column names to a specific number of characters when updating the table, set to `true`. Otherwise, set to `false` (default). Optional for tables created from files or folders of the Text type.
Example: true
#### Parameters of the `accessControlList` Object​
users Body Array of Object Optional
Enterprise only. List of users who should have access to the table and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'}"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"]{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'}"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'}'}'{'}'}]
* * *
roles Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the table and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'}"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays​
id Body String
Enterprise only. Unique identifier of the user or role that should have access to the table.
Example: c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3
* * *
permissions Body Array of String
Enterprise only. List of privileges the user or role should have on the table. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT", "ALTER"]
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/dba1e4fe-6351-44d2-a3e0-7aa20e782bf3' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "dataset",  
  "id": "dba1e4fe-6351-44d2-a3e0-7aa20e782bf3",  
  "path": [  
    "Samples",  
    "samples.dremio.com",  
    "Dremio University",  
    "airbnb_listings.csv"  
  ],  
  "type": "PHYSICAL_DATASET",  
  "format": {  
    "type": "Text",  
    "fieldDelimiter": ",",  
    "skipFirstLine": false,  
    "extractHeader": true,  
    "quote": "\"",  
    "comment": "#",  
    "escape": "\"",  
    "lineDelimiter": "\r\n",  
    "autoGenerateColumnNames": true,  
    "trimHeader": true  
  }  
}'  

```

Response

```
{  
    "entityType": "dataset",  
    "id": "dba1e4fe-6351-44d2-a3e0-7aa20e782bf3",  
    "type": "PHYSICAL_DATASET",  
    "path": [  
        "Samples",  
        "samples.dremio.com",  
        "Dremio University",  
        "airbnb_listings.csv"  
    ],  
    "createdAt": "2024-01-23T21:26:59.568Z",  
    "tag": "fc1707df-35a1-45c1-87d7-5f66fb11a729",  
    "format": {  
        "type": "Text",  
        "ctime": 0,  
        "isFolder": false,  
        "location": "/samples.dremio.com/Dremio University/airbnb_listings.csv",  
        "fieldDelimiter": ",",  
        "skipFirstLine": false,  
        "extractHeader": true,  
        "quote": "\"",  
        "comment": "#",  
        "escape": "\"",  
        "lineDelimiter": "\r\n",  
        "autoGenerateColumnNames": true,  
        "trimHeader": true  
    },  
    "accessControlList": {},  
    "owner": {  
        "ownerId": "c590ed7f-7142-4e1f-ba7d-94173afdc9a3",  
        "ownerType": "USER"  
    },  
    "fields": [  
        {  
            "name": "id",  
            "type": {  
                "name": "VARCHAR"  
            }  
        },  
        {  
            "name": "listing_url",  
            "type": {  
                "name": "VARCHAR"  
            }  
        },  
        {  
            "name": "scrape_id",  
            "type": {  
                "name": "VARCHAR"  
            }  
        },  
        {  
            "name": "last_scraped",  
            "type": {  
                "name": "VARCHAR"  
            }  
        },  
        {  
            "name": "name",  
            "type": {  
                "name": "VARCHAR"  
            }  
        },  
        {  
            "name": "summary",  
            "type": {  
                "name": "VARCHAR"  
            }  
        },  
        {  
            "name": "reviews_per_month",  
            "type": {  
                "name": "VARCHAR"  
            }  
        }  
    ],  
    "approximateStatisticsAllowed": false  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Refresh the Reflections on a Table​
Refresh the Reflections associated with the specified table.
Refreshing a table's Reflections does not refresh its metadata. Read [Refreshing Metadata](/help-support/advanced-topics/metadata-caching) to learn how to refresh table metadata. Read [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections) for more information about refreshing Reflections.
Method and URL

```
POST /api/v3/catalog/{id}/refresh  

```

### Parameters​
id Path String (UUID)
Unique identifier of the table that you want to refresh.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/c9c11d32-0576-4200-5a5b-8c7229cb3d72/refresh' \  
-H 'Authorization: Bearer <dremioAccessToken>' \  
-H 'Content-Type: application/json'  

```

Response

```
No response  

```

### Response Status Codes​
204 No Content   
  

400 Bad Request   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

## Revert a Table to a File or Folder​
Revert a table in a source to change the data in the table back to its original format, file or folder. For more information, read [Formatting Data to a Table](/developer/data-formats/table) and [Removing Formatting on Data](/developer/data-formats/table)
If a table is saved in your home space, the revert request will delete the table entirely. The revert endpoint only changes a table back to a file or folder if the table is saved in a source.
Method and URL

```
DELETE /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the table that you want to revert to a file or folder.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/catalog/c9c11d32-0576-4200-5a5b-8c7229cb3d72' \  
-H 'Authorization: Bearer <dremioAccessToken>' \  
-H 'Content-Type: application/json'  

```

Response

```
No response  

```

### Response Status Codes​
204 No Content   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous File](/reference/api/catalog/file)[Next User-Defined Function](/reference/api/catalog/user-defined-function)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous File](/reference/api/catalog/file)[Next User-Defined Function](/reference/api/catalog/user-defined-function)
!
