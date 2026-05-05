---
slug: /reference/api/reflections
title: "Reflection | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64243.054173916
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Reflection

Version: current [26.x]
On this page
# Reflection
Use the Reflection API to retrieve a list of raw, aggregation, and external Reflections, retrieve individual Reflections, and create, update, and delete Reflections.
A Reflection is an optimized materialization of source data or a query, similar to a materialized view, that is derived from an existing table or view. The query optimizer can accelerate queries by using one or more Reflections to partially or entirely satisfy the queries rather than running queries against the raw data in the data source that underlies the table or view.
Reflection Object (Raw Reflection)

```
{  
  "id": "7a380a24-3b63-436c-9ea0-63cb534cc404",  
  "type": "RAW",  
  "reflectionMode": "Manual",  
  "name": "Raw Reflection",  
  "tag": "ureIY76RT7Y=",  
  "createdAt": "2023-01-30T14:11:43.826Z",  
  "updatedAt": "2023-01-30T14:11:43.826Z",  
  "datasetId": "tk973df7-ddf7-4d1e-fa9e-bccf28ae253f",  
  "datasetName": "Sample.\"NYC-taxi-trips\"",  
  "datasetType": "VIRTUAL_DATASET",  
  "recordCount": 980,  
  "currentSizeBytes": 4393709246,  
  "totalSizeBytes": 4393709246,  
  "enabled": true,  
  "arrowCachingEnabled": false,  
  "consideredCount": 307,  
  "matchedCount": 253,  
  "acceleratedCount": 221,  
  "status": {  
    "config": "OK",  
    "refresh": "SCHEDULED",  
    "availability": "AVAILABLE",  
    "combinedStatus": "CAN_ACCELERATE",  
    "refreshMethod": "INCREMENTAL",  
    "failureCount": 0,  
    "lastDataFetch": "2023-01-30T14:11:51.801Z",  
    "expiresAt": "2023-01-30T17:11:51.801Z",  
    "lastRefreshDurationMillis": 3241,  
    "lastRefreshFinished": "2025-11-02T17:11:53.227Z"  
  },  
  "displayFields": [  
    {  
      "name": "pickup_datetime"  
    },  
    {  
      "name": "passenger_count"  
    },  
    {  
      "name": "trip_distance_mi"  
    },  
    {  
      "name": "fare_amount"  
    },  
    {  
      "name": "tip_amount"  
    },  
    {  
      "name": "total_amount"  
    }  
],  
  "distributionFields": [  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "partitionFields": [  
    {  
      "name": "passenger_count"  
    }  
],  
  "sortFields": [  
    {  
      "name": "pickup_datetime"  
    }  
],  
  "partitionDistributionStrategy": "CONSOLIDATED",  
  "canView": true,  
  "canAlter": true,  
  "entityType": "reflection"  
}  

```

Reflection Object (Aggregation Reflection)

```
{  
  "id": "95dda9dd-2371-467f-b68d-fc4c5ea57a8b",  
  "type": "AGGREGATION",  
  "reflectionMode": "Autonomous",  
  "name": "Aggregation Reflection",  
  "tag": "ZpzGgxw2l04=",  
  "createdAt": "2022-07-05T19:19:40.244Z",  
  "updatedAt": "2023-01-10T17:12:40.244Z",  
  "datasetId": "df99ab32-c2d4-4d1c-9e91-2c8be861bb8a",  
  "datasetName": "Demo.\"NYC-taxi-trips\"",  
  "datasetType": "VIRTUAL_DATASET",  
  "recordCount": 1030,  
  "currentSizeBytes": 18639885,  
  "totalSizeBytes": 142639924,  
  "enabled": true,  
  "arrowCachingEnabled": false,  
  "consideredCount": 63,  
  "matchedCount": 41,  
  "acceleratedCount": 41,  
  "status": {  
    "config": "OK",  
    "refresh": "SCHEDULED",  
    "availability": "AVAILABLE",  
    "combinedStatus": "CAN_ACCELERATE",  
    "refreshMethod": "INCREMENTAL",  
    "failureCount": 0,  
    "lastDataFetch": "2023-01-10T17:12:40.244Z",  
    "expiresAt": "3022-07-05T19:19:40.244Z",  
    "lastRefreshDurationMillis": 3183,  
    "lastRefreshFinished": "2025-11-12T19:52:13.144Z"  
  },  
  "dimensionFields": [  
    {  
      "name": "pickup_date"  
    },  
    {  
      "name": "pickup_datetime",  
      "granularity": "DATE"  
    },  
    {  
      "name": "dropoff_date"  
    },  
    {  
      "name": "dropoff_datetime",  
      "granularity": "DATE"  
    },  
    {  
      "name": "passenger_count"  
    },  
    {  
      "name": "total_amount"  
    },  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "measureFields": [  
    {  
      "name": "passenger_count",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "trip_distance_mi",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "fare_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "surcharge",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "tip_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "total_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    }  
],  
  "distributionFields": [  
    {  
      "name": "trip_distance_mi"  
    },  
    {  
      "name": "total_amount"  
    }  
],  
  "partitionFields": [  
    {  
      "name": "dropoff_date"  
    },  
    {  
      "name": "passenger_count"  
    }  
],  
  "sortFields": [  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "partitionDistributionStrategy": "CONSOLIDATED",  
  "canView": true,  
  "canAlter": true,  
  "entityType": "reflection"  
}  

```

Reflection Object (External Reflection)

```
    {  
      "id": "ab5b43ef-8ca6-41e1-8fa7-b2596d87061e",  
      "type": "EXTERNAL",  
      "name": "External Reflection",  
      "tag": "n408DmtclCo=",  
      "datasetId": "3a10100d-475d-4cbf-a7b2-d42e52aa1ffa",  
      "datasetName": "Demo.listings",  
      "datasetType": "VIRTUAL_DATASET",  
      "enabled": true,  
      "reflectionMode": "Manual",  
      "status": {  
        "combinedStatus": "CAN_ACCELERATE"  
      },  
      "canView": true,  
      "canAlter": true,  
      "externalReflection": "postgres.public.listings",  
      "entityType": "reflection"  
    }  

```

## Reflection Attributes[​](/reference/api/reflections#reflection-attributes "Direct link to Reflection Attributes")
id String (UUID)
Unique identifier of the Reflection.
Example: 95dda9dd-2371-467f-b68d-fc4c5ea57a8b
* * *
type String
Reflection type. For more information, read [Types of Reflections](/acceleration#types).
Enum: RAW, AGGREGATION
Example: AGGREGATION
* * *
reflectionMode String
How the Reflection was created. Reflections can be [manually created](/acceleration/manual-reflections) or [Autonomous](/acceleration/autonomous-reflections)
example: "Manual", "Autonomous"
* * *
name String
User-provided name for the Reflection. For Reflections created in the Dremio UI, if the user did not provide a name, the default values are `Raw Reflection` and `Aggregation Reflection` (automatically assigned based on the Reflection type).
Example: Aggregation Reflection
* * *
tag String
Unique identifier of the Reflection instance. Dremio changes the tag whenever the Reflection changes and uses the tag to ensure that PUT requests apply to the most recent version of the Reflection.
Example: ZpzGgxw2l04=
* * *
createdAt String
Date and time that the Reflection was created, in UTC format.
Example: 2022-07-05T19:19:40.244Z
* * *
updatedAt String
Date and time that the Reflection was last updated, in UTC format.
Example: 2023-01-10T17:12:40.244Z
* * *
datasetId String (UUID)
Unique identifier of the anchor dataset that is associated with the Reflection.
Example: df99ab32-c2d4-4d1c-9e91-2c8be861bb8a
* * *
datasetName String
The path and name of the dataset that the Reflection is on.
Example: `Demo."NYC-taxi-trips"`
* * *
datasetType String
The type of dataset that the Reflection has been created on.
Enum: `INVALID_DATASET_TYPE`, `VIRTUAL_DATASET`, `PHYSICAL_DATASET`, `PHYSICAL_DATASET_SOURCE_FILE`, `PHYSICAL_DATASET_SOURCE_FOLDER`, `PHYSICAL_DATASET_HOME_FILE`, `PHYSICAL_DATASET_HOME_FOLDER`
Example: `VIRTUAL_DATASET`
* * *
recordCount Integer
Number of records returned for the latest Reflection. For new Reflections, the recordCount value is `0`.
Example: `12670`
* * *
currentSizeBytes Integer
Data size of the latest Reflection job (if one exists), in bytes.
Example: 18639885
* * *
totalSizeBytes Integer
Data size of all Reflection jobs that have not been pruned (if any exist), in bytes.
Example: 142639924
* * *
enabled Boolean
If the Reflection is available for accelerating queries, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
arrowCachingEnabled Boolean
If Dremio converts data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, the value is `true`. Otherwise, the value is `false`.
Example: false
* * *
consideredCount Integer
Number of jobs that considered the Reflection during planning. For new Reflections, the consideredCount value is `0`.
Example: `520`
* * *
matchedCount Integer
Number of jobs that matched the Reflection during planning. For new Reflections, the matchedCount value is `0`.
Example: `386`
* * *
acceleratedCount Integer
Number of jobs accelerated by the Reflection. For new Reflections, the acceleratedCount value is `0`.
Example: `352`
* * *
[status](/reference/api/reflections#attributes-of-the-status-object) Object
Information about the status of the Reflection.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"config": "OK","refresh": "SCHEDULED","availability": "AVAILABLE","combinedStatus": "CAN_ACCELERATE","refreshMethod": "INCREMENTAL", ""failureCount": 0,"lastDataFetch": "2023-01-10T17:12:40.244Z","expiresAt": "3022-07-05T19:19:40.244Z","lastRefreshDurationMillis": 3183,"lastRefreshFinished": "2025-11-09T17:12:03.027Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
[displayFields](/reference/api/reflections#attributes-of-objects-in-the-displayfields-array) Array of Object
Information about the fields displayed from the anchor dataset. Each displayFields object contains one attribute: name. Valid only for raw Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[dimensionFields](/reference/api/reflections#attributes-of-objects-in-the-dimensionfields-array) Array of Object
Information about the dimension fields from the anchor dataset used in the Reflection. Dimension fields are the fields you expect to group by when analyzing data. Each dimensionFields object contains two attributes: name and granularity. Valid only for aggregation Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_date","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dropoff_date","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dropoff_datetime","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[measureFields](/reference/api/reflections#attributes-of-objects-in-the-measurefields-array) Array of Object
Information about the measure fields from the anchor dataset used in the Reflection. Measure fields are the fields you expect to use for calculations when analyzing the data. Each measureFields object contains two attributes: name and measureTypeList. Valid only for aggregation Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "surcharge","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[distributionFields](/reference/api/reflections#attributes-of-objects-in-the-distributionfields-array) Array of Object
Information about the distribution fields from the anchor dataset used in the Reflection. Distribution fields allow data from multiple datasets to be co-located and co-partitioned across nodes to minimize data movement during join operations. Each distributionFields object contains one attribute: name.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[partitionFields](/reference/api/reflections#attributes-of-objects-in-the-partitionfields-array) Array of Object
Information about the fields from the anchor dataset used to partition data in the Reflection. Each field name is listed as an individual object. For more information, read [Horizontally Partition Reflections that Have Many Rows](/help-support/well-architected-framework/performance/#horizontally-partition-reflections-that-have-many-rows).
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dropoff_date"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[sortFields](/reference/api/reflections#attributes-of-objects-in-the-sortfields-array) Array of Object
Information about the fields from the anchor dataset used for sorting in the Reflection. Each sortFields object contains one attribute: name. For more information, read [Sort Reflections on High-Cardinality Fields](/help-support/well-architected-framework/performance/#sort-reflections-on-high-cardinality-fields).
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
partitionDistributionStrategy String
Method used to optimize data compression when executing Reflections. `CONSOLIDATED` means Dremio minimizes the number of files produced. The query threads pool the data and ensure that the fewest number of files are written to the Reflection store. Optimizing for a smaller number of files generally improves read performance because users can perform fewer searches for a given query. `STRIPED` means Dremio minimizes the time required to refresh the Reflection. Each final-stage query thread opens its own writers to write the data, which can result in many small files if each query thread contains a small amount of data.
Enum: CONSOLIDATED, STRIPED
Example: CONSOLIDATED
* * *
canView Boolean
If you can view Reflections on all datasets of a source, system, space, or folder, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
canAlter Boolean
If you can create, edit, and view Reflections on all datasets of a source, system, space, or folder, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
entityType String
Type of the object. For Reflection objects, the entityType is `reflection`.
Example: reflection
* * *
externalReflection String
Full path to the target dataset. The field will be populated if the Reflection is an external Reflection.
Example: `postgres.public.listings`
#### Attributes of the `status` Object[​](/reference/api/reflections#attributes-of-the-status-object "Direct link to attributes-of-the-status-object")
config String
Status of the Reflection configuration. If the value is `OK`, the Reflection configuration is free of errors. If the value is `INVALID`, the Reflection configuration contains one or more errors.
Enum: OK, INVALID
Example: OK
* * *
refresh String
Status of the Reflection refresh.
  * `GIVEN_UP`: Dremio attempted to refresh the Reflection multiple times, but each attempt has failed and Dremio will not make further attempts.
  * `MANUAL`: Refresh period is set to 0, so you must use the Dremio UI to manually refresh the Reflection.
  * `RUNNING`: Dremio is currently refreshing the Reflection.
  * `SCHEDULED`: The Reflection refreshes according to a schedule.


Enum: GIVEN_UP, MANUAL, RUNNING, SCHEDULED
Example: SCHEDULED
* * *
availability String
Status of the Reflection's availability for accelerating queries.
Enum: NONE, EXPIRED, AVAILABLE
Example: AVAILABLE
* * *
combinedStatus String
Status of the Reflection based on a combination of config, refresh, and availability.
  * `CAN_ACCELERATE`: The Reflection is fully functional.
  * `CAN_ACCELERATE_WITH_FAILURES`: The most recent refresh failed to obtain a status, but Dremio still has a valid materialization.
  * `CANNOT_ACCELERATE_MANUAL`: The Reflection is unable to accelerate any queries, and the `Never Refresh` option is selected for the refresh policy.
  * `CANNOT_ACCELERATE_SCHEDULED`: The Reflection is currently unable to accelerate any queries, but it has been scheduled for a refresh at a future time.
  * `DISABLED`: The Reflection has been manually disabled.
  * `EXPIRED`: The Reflection has expired and cannot be used.
  * `FAILED`: The attempt to refresh the Reflection has failed, typically three times in a row. The Reflection is still usable.
  * `INVALID`: The Reflection is invalid because the underlying dataset has changed.
  * `REFRESHING`: The Reflection is currently being refreshed.


Example: CAN_ACCELERATE
* * *
refreshMethod String
The method used for the most recent refresh of the Reflection. For new Reflections, the refreshMethod value is `NONE`. For more information, see [Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections).
Enum: `NONE`, `FULL`, `INCREMENTAL`
Example: `INCREMENTAL`
* * *
failureCount Integer
Number of times that an attempt to refresh the Reflection failed.
Example: 0
* * *
lastDataFetch String
Date and time that the Reflection data was last refreshed, in UTC format. If the Reflection is running, failing, or disabled, the lastDataFetch value is `1969-12-31T23:59:59.999Z`.
Example: 2023-01-10T17:12:40.244Z
* * *
expiresAt String
Date and time that the Reflection expires, in UTC format. If the Reflection is running, failing, or disabled, the lastDataFetch value is `1969-12-31T23:59:59.999Z`.
Example: 3022-07-05T19:19:40.244Z
* * *
lastRefreshDurationMillis Integer
Duration of the most recent refresh for the Reflection, in milliseconds. For new Reflections, the lastRefreshDurationMillis value is `-1`.
Example: `3080`
* * *
lastRefreshFinished String
Date and time that the last Reflection refresh job attempt finished, in UTC format. For new Reflections, the lastRefreshFinished value is `1969-12-31T23:59:59.999Z`.
Example: `2025-10-05T12:39:45.034Z`
#### Attributes of Objects in the `displayFields` Array[​](/reference/api/reflections#attributes-of-objects-in-the-displayfields-array "Direct link to attributes-of-objects-in-the-displayfields-array")
name String
Name of the field from the anchor dataset that is displayed in the raw Reflection.
Example: passenger_count
#### Attributes of Objects in the `dimensionFields` Array[​](/reference/api/reflections#attributes-of-objects-in-the-dimensionfields-array "Direct link to attributes-of-objects-in-the-dimensionfields-array")
name String
Name of the field from the anchor dataset that is configured as a dimension for the Reflection.
Example: pickup_date
* * *
granularity String
Grouping used for the dimension field. When timestamp and date fields are configured as dimensions, Dremio can automatically extract and use the day-level date value (`DATE`) or use the field's original value (`NORMAL`).
Enum: DATE, NORMAL
Example: DATE
#### Attributes of Objects in the `measureFields` Array[​](/reference/api/reflections#attributes-of-objects-in-the-measurefields-array "Direct link to attributes-of-objects-in-the-measurefields-array")
name String
Name of the field from the anchor dataset that is configured as a measure for the Reflection.
Example: passenger_count
* * *
measureTypeList Array of String
Types of calculations for which Dremio uses the specified measure field.
Enum: APPROX_COUNT_DISTINCT, MIN, MAX, UNKNOWN, SUM, COUNT
Example: ["SUM","COUNT"]
#### Attributes of Objects in the `distributionFields` Array[​](/reference/api/reflections#attributes-of-objects-in-the-distributionfields-array "Direct link to attributes-of-objects-in-the-distributionfields-array")
name String
Name of the field from the anchor dataset that is used for co-locating and co-partitioning data from multiple datasets across nodes.
Example: trip_distance_mi
#### Attributes of Objects in the `partitionFields` Array[​](/reference/api/reflections#attributes-of-objects-in-the-partitionfields-array "Direct link to attributes-of-objects-in-the-partitionfields-array")
name String
Name of the field from the anchor dataset on which the rows in the Reflection are to be partitioned. If a column is listed as a partition column, it cannot also be listed as a sort column for the same Reflection. In aggregation Reflections, each column specified as a partition column or used in transform must also be listed as a dimension column. In raw Reflections, each column specified as a partition column or used in transform must also be listed as a display column.
Example: trip_distance_mi
* * *
transform Object
The type of partition transform that is applied. The value is an enum. The types are:
**IDENTITY** : Creates one partition per value. This is the default transform. If no transform is specified for a field named by the `name` property, an IDENTITY transform is performed.
IDENTITY Example

```
{  
  "name": "passenger_count",  
  "transform": {  
    "type": "IDENTITY"  
  }  
}  

```

**YEAR** : Partitions by year. The field must use the TIMESTAMP or DATE data type.
YEAR Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "YEAR"  
  }  
}  

```

**MONTH** : Partitions by month. The field must use the TIMESTAMP or DATE data type.
MONTH Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "MONTH"  
  }  
}  

```

**DAY** : Partitions on the equivalent of dateint. The field must use the TIMESTAMP or DATE data type.
DAY Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "DAY"  
  }  
}  

```

**HOUR** : Partitions on the equivalent of dateint and hour. The field must use the TIMESTAMP data type.
HOUR Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "HOUR"  
  }  
}  

```

**BUCKET** : Partitions data into the number of partitions specified by an integer. For example, if the integer value N is specified, the data is partitioned into N, or (0 to (N-1)), partitions. The partition in which an individual row is stored is determined by hashing the field value and then calculating ``hash_value` mod N`. If the result is 0, the row is placed in partition 0; if the result is 1, the row is placed in partition 1; and so on.
This value must be followed by a `bucketTransform` object. This object takes one property: `bucketCount`. This property takes an integer value.
BUCKET Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "BUCKET",  
    "bucketTransform": {  
      "bucketCount": 1000  
    }  
  }  
}  

```

**TRUNCATE** : If the specified field uses the string data type, truncates strings to a maximum of the number of characters specified by an integer. For example, suppose the specified transform is `truncate(1, stateUS)`. A value of `CA` is truncated to `C`, and the row is placed in partition C. A value of `CO` is also truncated to `C`, and the row is also placed in partition C.
If the specified field uses the integer or long data type, truncates field values in the following way: For any `truncate(L, col)`, truncates the field value to the biggest multiple of L that is smaller than the field value. For example, suppose the specified transform is `truncate(10, intField)`. A value of 1 is truncated to 0 and the row is placed in the partition 0. A value of 247 is truncated to 240 and the row is placed in partition 240. If the transform is `truncate(3, intField)`, a value of 13 is truncated to 12 and the row is placed in partition 12. A value of 255 is not truncated, because it is divisble by 3, and the row is placed in partition 255. This value must be followed by a `truncateTransform` object.
This object takes one property: `truncateLength`. This property takes an integer value.
The truncate transform does not change field values. It uses field values to calculate the correct partitions in which to place rows.
TRUNCATE Example

```
{  
  "name": "pickup_hour",  
  "transform": {  
    "type": "TRUNCATE",  
    "truncateTransform": {  
      "truncateLength": 3  
    }  
  }  
}  

```

#### Attributes of Objects in the `sortFields` Array[​](/reference/api/reflections#attributes-of-objects-in-the-sortfields-array "Direct link to attributes-of-objects-in-the-sortfields-array")
name String
Name of the field from the anchor dataset that is used for sorting in the Reflection.
Example: dropoff_date
## Create a Reflection[​](/reference/api/reflections#create-a-reflection "Direct link to Create a Reflection")
Create a new raw or aggregation Reflection.
Method and URL

```
POST /api/v3/reflection  

```

### Parameters[​](/reference/api/reflections#parameters "Direct link to Parameters")
type Body String
Reflection type. For more information, read [Types of Reflections](/acceleration#types).
Enum: RAW, AGGREGATION
Example: AGGREGATION
* * *
name Body String
Name to use for the Reflection.
Example: New Aggregation Reflection
* * *
datasetId Body String (UUID)
Unique identifier of the anchor dataset to associate with the Reflection.
Example: df99ab32-c2d4-4d1c-9e91-2c8be861bb8a
* * *
enabled Body Boolean
If the Reflection should be available for accelerating queries, set to `true`. Otherwise, set to `false`.
Example: true
* * *
arrowCachingEnabled Body Boolean Optional
If Dremio should convert data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, set to `true`. Otherwise, set to `false` (default).
Example: false
* * *
[displayFields](/reference/api/reflections#parameters-of-objects-in-the-displayfields-array) Body Array of Object Optional
Information about the fields to display from the anchor dataset. The displayfields array must list every field in the anchor dataset or the Reflection fails. Each displayFields object contains one attribute: name. Valid only for raw Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[dimensionFields](/reference/api/reflections#parameters-of-objects-in-the-dimensionfields-array) Body Array of Object Optional
Information about the dimension fields from the anchor dataset to use in the Reflection. Dimension fields are the fields you expect to group by when analyzing data. Each dimensionFields object contains two attributes: name and granularity. Valid only for aggregation Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[measureFields](/reference/api/reflections#parameters-of-objects-in-the-measurefields-array) Body Array of Object Optional
Information about the measure fields from the anchor dataset to use in the Reflection. Measure fields are the fields you expect to use for calculations when analyzing the data. Each measureFields object contains two attributes: name and measureTypeList. Valid only for aggregation Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[distributionFields](/reference/api/reflections#parameters-of-objects-in-the-distributionfields-array) Body Array of Object Optional
Information about the distribution fields from the anchor dataset to use for co-locating and co-partitioning data from multiple datasets across nodes. Each distributionFields object contains one attribute: name.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[partitionFields](/reference/api/reflections#parameters-of-objects-in-the-partitionfields-array) Body Array of Object Optional
Information about the fields from the anchor dataset to use to partition data in the Reflection. Each field name is listed as an individual object. For more information, read [Horizontally Partition Reflections that Have Many Rows](/help-support/well-architected-framework/performance/#horizontally-partition-reflections-that-have-many-rows).
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[sortFields](/reference/api/reflections#parameters-of-objects-in-the-sortfields-array) Body Array of Object Optional
Information about the fields from the anchor dataset to use for sorting in the Reflection. Each sortFields object contains one attribute: name. For more information, read [Sort Reflections on High-Cardinality Fields](/help-support/well-architected-framework/performance/#sort-reflections-on-high-cardinality-fields).
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
partitionDistributionStrategy Body String Optional
Method to use to optimize data compression when executing Reflections. If set to `CONSOLIDATED` (default), Dremio minimizes the number of files produced. If set to `STRIPED`, Dremio minimizes the time required to refresh the Reflection.
Enum: CONSOLIDATED, STRIPED
Example: CONSOLIDATED
* * *
canView Body Boolean Optional
To view Reflections on all datasets of a source, system, space, or folder, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
canAlter Body Boolean Optional
To create, edit, and view Reflections on all datasets of a source, system, space, or folder, set to `true` (default). Otherwise, set to `false`.
Example: true
* * *
entityType Body String Optional
Type of the object. For Reflection objects, the entityType is `reflection`.
Example: reflection
#### Parameters of Objects in the `displayFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-displayfields-array "Direct link to parameters-of-objects-in-the-displayfields-array")
name Body String
Name of the field to display from the anchor dataset.
Example: "name": "pickup_datetime"
#### Parameters of Objects in the `dimensionFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-dimensionfields-array "Direct link to parameters-of-objects-in-the-dimensionfields-array")
name Body String
Name of the field from the anchor dataset to configure as a dimension for the Reflection.
Example: "name": "pickup_datetime"
* * *
granularity Body String
Grouping to use for the dimension field. If Dremio should automatically extract the day-level date value and use it as the grouping value in the Reflection, `DATE`. If Dremio should use the original value for grouping, `NORMAL`.
Enum: DATE, NORMAL
Example: "granularity": "DATE"
#### Parameters of Objects in the `measureFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-measurefields-array "Direct link to parameters-of-objects-in-the-measurefields-array")
name Body String
Name of the field from the anchor dataset that you expect to use in calculations. Fields of types `LIST`, `MAP`, and `UNION` are not valid measureFields.
Example: "name": "passenger_count"
* * *
measureTypeList Body Array of String
Name of the field from the anchor dataset to use for co-locating and co-partitioning data from multiple datasets across nodes. In aggregation Reflections, every field listed as a distribution field must also be listed as a dimension field.
Enum: APPROX_COUNT_DISTINCT, MIN, MAX, UNKNOWN, SUM, COUNT
Example: ["SUM", "COUNT"]
#### Parameters of Objects in the `distributionFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-distributionfields-array "Direct link to parameters-of-objects-in-the-distributionfields-array")
name Body String
Name of the field from the anchor dataset to use for co-locating and co-partitioning data from multiple datasets across nodes. In aggregation Reflections, every field listed as a distribution field must also be listed as a dimension field.
Example: "name": "trip_distance_mi"
#### Parameters of Objects in the `partitionFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-partitionfields-array "Direct link to parameters-of-objects-in-the-partitionfields-array")
name Body String
Name of the field from the anchor dataset on which you want to be able to partition rows. If you are creating an aggregation Reflection, every field listed as a partition field must also be listed as a dimension field. If you list a field as a partition field, you cannot list the same field as a sort field in the same Reflection.
Example: "name": "pickup_datetime"
* * *
transform Object
The type of partition transform that is applied. The value is an enum. The types are:
**IDENTITY** : Creates one partition per value. This is the default transform. If no transform is specified for a field named by the `name` property, an IDENTITY transform is performed.
IDENTITY Example

```
{  
  "name": "passenger_count",  
  "transform": {  
    "type": "IDENTITY"  
  }  
}  

```

**YEAR** : Partitions by year. The field must use the TIMESTAMP or DATE data type.
YEAR Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "YEAR"  
  }  
}  

```

**MONTH** : Partitions by month. The field must use the TIMESTAMP or DATE data type.
MONTH Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "MONTH"  
  }  
}  

```

**DAY** : Partitions on the equivalent of dateint. The field must use the TIMESTAMP or DATE data type.
DAY Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "DAY"  
  }  
}  

```

**HOUR** : Partitions on the equivalent of dateint and hour. The field must use the TIMESTAMP data type.
HOUR Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "HOUR"  
  }  
}  

```

**BUCKET** : Partitions data into the number of partitions specified by an integer. For example, if the integer value N is specified, the data is partitioned into N, or (0 to (N-1)), partitions. The partition in which an individual row is stored is determined by hashing the field value and then calculating ``hash_value` mod N`. If the result is 0, the row is placed in partition 0; if the result is 1, the row is placed in partition 1; and so on.
This value must be followed by a `bucketTransform` object. This object takes one property: `bucketCount`. This property takes an integer value.
BUCKET Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "BUCKET",  
    "bucketTransform": {  
      "bucketCount": 1000  
    }  
  }  
}  

```

**TRUNCATE** : If the specified field uses the string data type, truncates strings to a maximum of the number of characters specified by an integer. For example, suppose the specified transform is `truncate(1, stateUS)`. A value of `CA` is truncated to `C`, and the row is placed in partition C. A value of `CO` is also truncated to `C`, and the row is also placed in partition C.
If the specified field uses the integer or long data type, truncates field values in the following way: For any `truncate(L, col)`, truncates the field value to the biggest multiple of L that is smaller than the field value. For example, suppose the specified transform is `truncate(10, intField)`. A value of 1 is truncated to 0 and the row is placed in the partition 0. A value of 247 is truncated to 240 and the row is placed in partition 240. If the transform is `truncate(3, intField)`, a value of 13 is truncated to 12 and the row is placed in partition 12. A value of 255 is not truncated, because it is divisble by 3, and the row is placed in partition 255. This value must be followed by a `truncateTransform` object.
This object takes one property: `truncateLength`. This property takes an integer value.
The truncate transform does not change field values. It uses field values to calculate the correct partitions in which to place rows.
TRUNCATE Example

```
{  
  "name": "pickup_hour",  
  "transform": {  
    "type": "TRUNCATE",  
    "truncateTransform": {  
      "truncateLength": 3  
    }  
  }  
}  

```

#### Parameters of Objects in the `sortFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-sortfields-array "Direct link to parameters-of-objects-in-the-sortfields-array")
name Body String
Name of the field from the anchor dataset to use for sorting in the Reflection. Every field listed as a sort field must also be listed as a dimension field. If you list a field as a sort field, you cannot list the same field as a partition field in the same Reflection.
Example: "name": "trip_distance_mi"
### Example[​](/reference/api/reflections#example "Direct link to Example")
Request

```
curl -X POST 'https://{hostname}/api/v3/reflection/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "type": "AGGREGATION",  
  "name": "New Aggregation Reflection",  
  "datasetId": "gc870df7-ddf7-4d1e-bb9e-beef28ae773f",  
  "enabled": true,  
  "arrowCachingEnabled": false,  
  "dimensionFields": [  
    {  
      "name": "pickup_datetime",  
      "granularity": "DATE"  
    },  
    {  
      "name": "passenger_count"  
    },  
    {  
      "name": "total_amount"  
    },  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "measureFields": [  
    {  
      "name": "passenger_count",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "trip_distance_mi",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "fare_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "tip_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "total_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    }  
],  
  "distributionFields": [  
    {  
      "name": "trip_distance_mi"  
    },  
    {  
      "name": "total_amount"  
    }  
],  
  "partitionFields": [  
    {  
      "name": "pickup_datetime"  
    },  
    {  
      "name": "passenger_count"  
    }  
],  
  "sortFields": [  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "entityType": "reflection"  
}'  

```

Response

```
{  
    "id": "836eae91-306e-487b-a687-31c999653a86",  
    "type": "AGGREGATION",  
    "reflectionMode": "Manual",  
    "name": "New Aggregation Reflection",  
    "tag": "sEHieiuinqE=",  
    "createdAt": "2023-01-30T14:30:24.311Z",  
    "updatedAt": "2023-01-30T14:30:24.311Z",  
    "datasetId": "gc870df7-ddf7-4d1e-bb9e-beef28ae773f",  
    "datasetName": "Demo.\"NYC-taxi-trips\"",  
    "datasetType": "VIRTUAL_DATASET",  
    "recordCount": 0,  
    "currentSizeBytes": 0,  
    "totalSizeBytes": 0,  
    "enabled": true,  
    "arrowCachingEnabled": false,  
    "consideredCount": 0,  
    "matchedCount": 0,  
    "acceleratedCount": 0,  
    "status": {  
        "config": "OK",  
        "refresh": "SCHEDULED",  
        "availability": "NONE",  
        "combinedStatus": "CANNOT_ACCELERATE_SCHEDULED",  
        "refreshMethod": "NONE",  
        "failureCount": 0,  
        "lastDataFetch": "1969-12-31T23:59:59.999Z",  
        "expiresAt": "1969-12-31T23:59:59.999Z",  
        "lastRefreshDurationMillis": -1,  
        "lastRefreshFinished": "1969-12-31T23:59:59.999Z"  
    },  
    "dimensionFields": [  
        {  
            "name": "pickup_datetime",  
            "granularity": "DATE"  
        },  
        {  
            "name": "passenger_count"  
        },  
        {  
            "name": "total_amount"  
        },  
        {  
            "name": "trip_distance_mi"  
        }  
  ],  
    "measureFields": [  
        {  
            "name": "passenger_count",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "trip_distance_mi",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "fare_amount",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "tip_amount",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "total_amount",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        }  
  ],  
    "distributionFields": [  
        {  
            "name": "trip_distance_mi"  
        },  
        {  
            "name": "total_amount"  
        }  
  ],  
    "partitionFields": [  
        {  
            "name": "pickup_datetime"  
        },  
        {  
            "name": "passenger_count"  
        }  
  ],  
    "sortFields": [  
        {  
            "name": "trip_distance_mi"  
        }  
  ],  
    "partitionDistributionStrategy": "CONSOLIDATED",  
    "canView": true,  
    "canAlter": true,  
    "entityType": "reflection"  
}  

```

### Response Status Codes[​](/reference/api/reflections#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

## Retrieve All Reflections Enterprise[​](/reference/api/reflections#retrieve-all-reflections-enterprise "Direct link to retrieve-all-reflections-enterprise")
Retrieve a list of Reflection objects that includes all raw, aggregation, and external Reflections in the Dremio instance.
Method and URL

```
GET /api/v3/reflection  

```

### Example[​](/reference/api/reflections#example-1 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/reflection/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

In the response for a request to retrieve all raw, aggregation, and external Reflections, the Reflection objects are wrapped with a data array. Each object in the data array represents one Reflection.
Response

```
{  
  "data": [  
    {  
      "id": "95dda9dd-2371-467f-b68d-fc4c5ea57a8b",  
      "type": "AGGREGATION",  
      "name": "Aggregation Reflection",  
      "tag": "ZpzGgxw2l04=",  
      "createdAt": "2022-07-05T19:19:40.244Z",  
      "updatedAt": "2023-01-10T17:12:40.244Z",  
      "datasetId": "df99ab32-c2d4-4d1c-9e91-2c8be861bb8a",  
      "datasetName": "Demo.\"NYC-taxi-trips\"",  
      "datasetType": "VIRTUAL_DATASET",  
      "recordCount": 1030,  
      "currentSizeBytes": 18639885,  
      "totalSizeBytes": 142639924,  
      "enabled": true,  
      "arrowCachingEnabled": false,  
      "consideredCount": 63,  
      "matchedCount": 41,  
      "acceleratedCount": 41,  
      "status": {  
        "config": "OK",  
        "refresh": "SCHEDULED",  
        "availability": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 0,  
        "lastDataFetch": "2023-01-10T17:12:40.244Z",  
        "expiresAt": "3022-07-05T19:19:40.244Z",  
        "lastRefreshDurationMillis": 3183,  
        "lastRefreshFinished": "2025-11-38T17:12:03.027Z"  
      },  
      "dimensionFields": [  
        {  
          "name": "pickup_date"  
        },  
        {  
          "name": "pickup_datetime",  
          "granularity": "DATE"  
        },  
        {  
          "name": "dropoff_date"  
        },  
        {  
          "name": "dropoff_datetime",  
          "granularity": "DATE"  
        },  
        {  
          "name": "passenger_count"  
        },  
        {  
          "name": "total_amount"  
        },  
        {  
          "name": "trip_distance_mi"  
        }  
    ],  
      "measureFields": [  
        {  
          "name": "passenger_count",  
          "measureTypeList": [  
            "SUM",  
            "COUNT"  
        ]  
        },  
        {  
          "name": "trip_distance_mi",  
          "measureTypeList": [  
            "SUM",  
            "COUNT"  
        ]  
        },  
        {  
          "name": "fare_amount",  
          "measureTypeList": [  
            "SUM",  
            "COUNT"  
        ]  
        },  
        {  
          "name": "surcharge",  
          "measureTypeList": [  
            "SUM",  
            "COUNT"  
        ]  
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "SUM",  
            "COUNT"  
        ]  
        },  
        {  
          "name": "total_amount",  
          "measureTypeList": [  
            "SUM",  
            "COUNT"  
        ]  
        }  
    ],  
      "distributionFields": [  
        {  
          "name": "trip_distance_mi"  
        },  
        {  
          "name": "total_amount"  
        }  
    ],  
      "partitionFields": [  
        {  
          "name": "dropoff_date"  
        },  
        {  
          "name": "passenger_count"  
        }  
    ],  
      "sortFields": [  
        {  
          "name": "trip_distance_mi"  
        }  
    ],  
      "partitionDistributionStrategy": "CONSOLIDATED",  
      "canView": true,  
      "canAlter": true,  
      "entityType": "reflection"  
    },  
    {  
      "id": "14f22052-cbb3-4d5d-8bbc-6154cca98e49",  
      "type": "RAW",  
      "name": "listings",  
      "tag": "XAy4ccVFXO4=",  
      "createdAt": "2022-07-12T16:45:35.249Z",  
      "updatedAt": "2022-07-12T16:45:35.249Z",  
      "datasetId": "7707981c-cb33-42bc-a048-d27a8915f468",  
      "datasetName": "Samples.\"property-listings\"",  
      "datasetType": "VIRTUAL_DATASET",  
      "recordCount": 0,  
      "currentSizeBytes": 0,  
      "totalSizeBytes": 0,  
      "enabled": true,  
      "arrowCachingEnabled": true,  
      "consideredCount": 0,  
      "matchedCount": 0,  
      "acceleratedCount": 0,  
      "status": {  
        "config": "OK",  
        "refresh": "MANUAL",  
        "availability": "NONE",  
        "combinedStatus": "CANNOT_ACCELERATE_MANUAL",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 0,  
        "lastDataFetch": "1969-12-31T23:59:59.999Z",  
        "expiresAt": "1969-12-31T23:59:59.999Z",  
        "lastRefreshDurationMillis": -1,  
        "lastRefreshFinished": "1969-12-31T23:59:59.999Z"  
      },  
      "displayFields": [  
        {  
          "name": "id"  
        }  
    ],  
      "partitionDistributionStrategy": "CONSOLIDATED",  
      "canView": true,  
      "canAlter": true,  
      "entityType": "reflection"  
    },  
    {  
      "id": "6c209200-b522-4f81-bbe0-d10668c7752c",  
      "type": "AGGREGATION",  
      "name": "Aggregation Reflection",  
      "tag": "SQeEAG3d6DA=",  
      "createdAt": "2021-09-29T15:47:44.806Z",  
      "updatedAt": "2021-09-29T15:47:44.806Z",  
      "datasetId": "746f867a-c27c-4711-bb8c-99546a4c25e0",  
      "datasetName": "Demo.\"NYC-taxi-trips\"",  
      "datasetType": "VIRTUAL_DATASET",  
      "recordCount": 0,  
      "currentSizeBytes": 0,  
      "totalSizeBytes": 1675978,  
      "enabled": true,  
      "arrowCachingEnabled": false,  
      "consideredCount": 0,  
      "matchedCount": 0,  
      "acceleratedCount": 0,  
      "status": {  
        "config": "OK",  
        "refresh": "GIVEN_UP",  
        "availability": "NONE",  
        "combinedStatus": "FAILED",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 3,  
        "lastDataFetch": "1969-12-31T23:59:59.999Z",  
        "expiresAt": "1969-12-31T23:59:59.999Z",  
        "lastRefreshDurationMillis": -1,  
        "lastRefreshFinished": "1969-12-31T23:59:59.999Z"  
      },  
      "dimensionFields": [  
        {  
          "name": "passenger_count"  
        },  
        {  
          "name": "pickup_datetime",  
          "granularity": "DATE"  
        }  
    ],  
      "measureFields": [  
        {  
          "name": "trip_distance_mi",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "total_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "fare_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        }  
    ],  
      "partitionDistributionStrategy": "CONSOLIDATED",  
      "canView": true,  
      "canAlter": true,  
      "entityType": "reflection"  
    },  
    {  
      "id": "c5c5b282-ffea-4a34-835f-cc591584412b",  
      "type": "AGGREGATION",  
      "name": "Test reflection",  
      "tag": "lMxFcc2qjgE=",  
      "createdAt": "2021-10-11T18:44:27.064Z",  
      "updatedAt": "2021-10-11T18:44:27.064Z",  
      "datasetId": "316531b8-3c56-42f2-b05f-81f228ef3162",  
      "datasetName": "Demo.\"NYC-taxi-trips\"",  
      "datasetType": "VIRTUAL_DATASET",  
      "recordCount": 0,  
      "currentSizeBytes": 0,  
      "totalSizeBytes": 0,  
      "enabled": true,  
      "arrowCachingEnabled": false,  
      "consideredCount": 0,  
      "matchedCount": 0,  
      "acceleratedCount": 0,  
      "status": {  
        "config": "OK",  
        "refresh": "MANUAL",  
        "availability": "NONE",  
        "combinedStatus": "CANNOT_ACCELERATE_MANUAL",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 0,  
        "lastDataFetch": "1969-12-31T23:59:59.999Z",  
        "expiresAt": "1969-12-31T23:59:59.999Z",  
        "lastRefreshDurationMillis": -1,  
        "lastRefreshFinished": "1969-12-31T23:59:59.999Z"  
      },  
      "dimensionFields": [  
        {  
          "name": "passenger_count"  
        }  
    ],  
      "measureFields": [  
        {  
          "name": "trip_distance_mi",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "total_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "fare_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        }  
    ],  
      "partitionDistributionStrategy": "CONSOLIDATED",  
      "canView": true,  
      "canAlter": true,  
      "entityType": "reflection"  
    },  
    {  
      "id": "ab5b43ef-8ca6-41e1-8fa7-b2596d87061e",  
      "type": "EXTERNAL",  
      "name": "External Reflection",  
      "tag": "n408DmtclCo=",  
      "datasetId": "3a10100d-475d-4cbf-a7b2-d42e52aa1ffa",  
      "datasetName": "Demo.listings",  
      "datasetType": "VIRTUAL_DATASET",  
      "enabled": true,  
      "reflectionMode": "Manual",  
      "status": {  
        "combinedStatus": "CAN_ACCELERATE"  
      },  
      "canView": true,  
      "canAlter": true,  
      "externalReflection": "postgres.public.listings",  
      "entityType": "reflection"  
    }  
],  
  "canAlterReflections": true  
}  

```

### Response Status Codes[​](/reference/api/reflections#response-status-codes-1 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve a Reflection[​](/reference/api/reflections#retrieve-a-reflection "Direct link to Retrieve a Reflection")
Retrieve the specified Reflection. This can be a raw, aggregation, or external Reflection.
Method and URL

```
GET /api/v3/reflection/{id}  

```

### Parameters[​](/reference/api/reflections#parameters-1 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the Reflection that you want to retrieve.
Example: 95dda9dd-2371-467f-b68d-fc4c5ea57a8b
### Example[​](/reference/api/reflections#example-2 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/reflection/95dda9dd-2371-467f-b68d-fc4c5ea57a8b'  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "95dda9dd-2371-467f-b68d-fc4c5ea57a8b",  
  "type": "AGGREGATION",  
  "name": "Aggregation Reflection",  
  "tag": "ZpzGgxw2l04=",  
  "createdAt": "2022-07-05T19:19:40.244Z",  
  "updatedAt": "2023-01-10T17:12:40.244Z",  
  "datasetId": "df99ab32-c2d4-4d1c-9e91-2c8be861bb8a",  
  "datasetName": "Demo.\"NYC-taxi-trips\"",  
  "datasetType": "VIRTUAL_DATASET",  
  "recordCount": 1030,  
  "currentSizeBytes": 18639885,  
  "totalSizeBytes": 142639924,  
  "enabled": true,  
  "arrowCachingEnabled": false,  
  "consideredCount": 63,  
  "matchedCount": 41,  
  "acceleratedCount": 41,  
  "status": {  
    "config": "OK",  
    "refresh": "SCHEDULED",  
    "availability": "AVAILABLE",  
    "combinedStatus": "CAN_ACCELERATE",  
    "refreshMethod": "INCREMENTAL",  
    "failureCount": 0,  
    "lastDataFetch": "2023-01-10T17:12:40.244Z",  
    "expiresAt": "3022-07-05T19:19:40.244Z",  
    "lastRefreshDurationMillis": 3183,  
    "lastRefreshFinished": "2025-11-38T17:12:03.027Z"  
  },  
  "dimensionFields": [  
    {  
      "name": "pickup_date"  
    },  
    {  
      "name": "pickup_datetime",  
      "granularity": "DATE"  
    },  
    {  
      "name": "dropoff_date"  
    },  
    {  
      "name": "dropoff_datetime",  
      "granularity": "DATE"  
    },  
    {  
      "name": "passenger_count"  
    },  
    {  
      "name": "total_amount"  
    },  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "measureFields": [  
    {  
      "name": "passenger_count",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "trip_distance_mi",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "fare_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "surcharge",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "tip_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "total_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    }  
],  
  "distributionFields": [  
    {  
      "name": "trip_distance_mi"  
    },  
    {  
      "name": "total_amount"  
    }  
],  
  "partitionFields": [  
    {  
      "name": "dropoff_date"  
    },  
    {  
      "name": "passenger_count"  
    }  
],  
  "sortFields": [  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "partitionDistributionStrategy": "CONSOLIDATED",  
  "canView": true,  
  "canAlter": true,  
  "entityType": "reflection"  
}  

```

### Response Status Codes[​](/reference/api/reflections#response-status-codes-2 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve All Reflections for a Dataset[​](/reference/api/reflections#retrieve-all-reflections-for-a-dataset "Direct link to Retrieve All Reflections for a Dataset")
Retrieve all raw and aggregation Reflections for the specified dataset.
Method and URL

```
GET /api/v3/dataset/{datasetId}/reflection  

```

### Parameters[​](/reference/api/reflections#parameters-2 "Direct link to Parameters")
datasetId Path String (UUID)
Unique identifier of the dataset whose Reflections you want to retrieve.
Example: 3cbab7b3-ee82-44c1-abcc-e86d56078d4d
### Example[​](/reference/api/reflections#example-3 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/dataset/3cbab7b3-ee82-44c1-abcc-e86d56078d4d/reflection'  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

In the response for a request to retrieve all Reflections for a dataset, the Reflection objects are wrapped with a data array. Each object in the data array represents one Reflection.
Response

```
{  
  "data": [  
    {  
      "id": "23f75eb1-045f-447f-b3fa-374377877569",  
      "type": "RAW",  
      "name": "Raw Reflection",  
      "tag": "K9J2SHE0c+Q=",  
      "createdAt": "2023-02-03T16:38:27.770Z",  
      "updatedAt": "2023-02-03T16:38:27.770Z",  
      "datasetId": "3cbab7b3-ee82-44c1-abcc-e86d56078d4d",  
      "datasetName": "Demo.\"NYC-taxi-trips\"",  
      "datasetType": "VIRTUAL_DATASET",  
      "recordCount": 1041,  
      "currentSizeBytes": 0,  
      "totalSizeBytes": 0,  
      "enabled": true,  
      "arrowCachingEnabled": false,  
      "consideredCount": 109,  
      "matchedCount": 41,  
      "acceleratedCount": 39,  
      "status": {  
        "config": "OK",  
        "refresh": "MANUAL",  
        "availability": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 0,  
        "lastDataFetch": "2023-02-03T16:38:27.780Z",  
        "expiresAt": "3022-06-06T16:38:27.780Z",  
        "lastRefreshDurationMillis": 22414,  
        "lastRefreshFinished": "2023-11-38T17:12:03.027Z"  
      },  
      "displayFields": [  
        {  
          "name": "pickup_datetime"  
        },  
        {  
          "name": "passenger_count"  
        },  
        {  
          "name": "trip_distance_mi"  
        },  
        {  
          "name": "fare_amount"  
        },  
        {  
          "name": "tip_amount"  
        },  
        {  
          "name": "total_amount"  
        }  
    ],  
      "partitionDistributionStrategy": "CONSOLIDATED",  
      "canView": true,  
      "canAlter": true,  
      "entityType": "reflection"  
    },  
    {  
      "id": "3cbab7b3-ee82-44c1-abcc-e86d56078d4d",  
      "type": "AGGREGATION",  
      "name": "Aggregation Reflection",  
      "tag": "Mc4hDFk5JR8=",  
      "createdAt": "2023-02-03T16:39:40.556Z",  
      "updatedAt": "2023-02-03T16:39:40.556Z",  
      "datasetId": "1acab7b3-ee82-44c1-abcc-e86d56078d4d",  
      "datasetName": "Demo.\"NYC-taxi-trips\"",  
      "datasetType": "VIRTUAL_DATASET",  
      "recordCount": 241,  
      "currentSizeBytes": 0,  
      "totalSizeBytes": 0,  
      "enabled": true,  
      "arrowCachingEnabled": false,  
      "consideredCount": 88,  
      "matchedCount": 70,  
      "acceleratedCount": 62,  
      "status": {  
        "config": "OK",  
        "refresh": "MANUAL",  
        "availability": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 0,  
        "lastDataFetch": "2023-02-03T16:39:40.568Z",  
        "expiresAt": "3022-06-06T16:39:40.568Z",  
        "lastRefreshDurationMillis": 12414,  
        "lastRefreshFinished": "2023-11-38T17:12:53.227Z"  
      },  
      "dimensionFields": [  
        {  
          "name": "passenger_count"  
        },  
        {  
          "name": "pickup_datetime",  
          "granularity": "DATE"  
        }  
    ],  
      "measureFields": [  
        {  
          "name": "trip_distance_mi",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "total_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        },  
        {  
          "name": "fare_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
        ]  
        }  
    ],  
      "partitionDistributionStrategy": "CONSOLIDATED",  
      "canView": true,  
      "canAlter": true,  
      "entityType": "reflection"  
    }  
],  
  "canAlterReflections": true  
}  

```

### Response Status Codes[​](/reference/api/reflections#response-status-codes-3 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

## Refresh a Reflection[​](/reference/api/reflections#refresh-a-reflection "Direct link to Refresh a Reflection")
Refresh the specified Reflection. This can be a raw or aggregation Reflection. For information about the refresh action performed, see [Triggering Refreshes by Using the Reflection API, the Catalog API, or an SQL Command](/acceleration/manual-reflections/refreshing-reflections#triggering-refreshes-by-using-the-reflection-api-the-catalog-api-or-an-sql-command).
Method and URL

```
POST /api/v3/reflection/{id}/refresh  

```

### Parameters[​](/reference/api/reflections#parameters-3 "Direct link to Parameters")
id Path String (UUID)
Unique identifier for the Reflection that you want to base the refresh action on.
Example: 836eae91-306e-487b-a687-31c999653a86
### Response Status Codes[​](/reference/api/reflections#response-status-codes-4 "Direct link to Response Status Codes")
200 OK   
  
400 Not supported   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

## Update a Reflection[​](/reference/api/reflections#update-a-reflection "Direct link to Update a Reflection")
Update the specified Reflection. This can be a raw or aggregation Reflection.
Method and URL

```
PUT /api/v3/reflection/{id}  

```

### Parameters[​](/reference/api/reflections#parameters-4 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the Reflection that you want to update.
Example: 836eae91-306e-487b-a687-31c999653a86
* * *
type Body String
Reflection type. For more information, read [Types of Reflections](/acceleration#types).
Enum: RAW, AGGREGATION
Example: AGGREGATION
* * *
name Body String
Name to use for the Reflection.
Example: New Aggregation Reflection
* * *
tag Body String
Unique identifier of the most recent version of the Reflection. Dremio uses the tag to ensure that you are updating the most recent version of the Reflection.
Example: ZpzGgxw2l04=
* * *
datasetId Body String (UUID)
Unique identifier of the anchor dataset associated with the Reflection.
Example: gc870df7-ddf7-4d1e-bb9e-beef28ae773f
* * *
enabled Body Boolean
If the Reflection should be available for accelerating queries, set to `true`. Otherwise, set to `false`.
Example: false
* * *
arrowCachingEnabled Body Boolean Optional
If Dremio should convert data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, set to `true`. Otherwise, set to `false` (default).
Example: true
* * *
[displayFields](/reference/api/reflections#parameters-of-objects-in-the-displayfields-array-1) Body Array of Object
Information about the fields to display from the anchor dataset. The displayfields array must list every field in the anchor dataset or the Reflection fails. Each displayFields object contains one attribute: name. Valid only for raw Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[dimensionFields](/reference/api/reflections#parameters-of-objects-in-the-dimensionfields-array-1) Body Array of Object
Information about the dimension fields from the anchor dataset to use in the Reflection. Dimension fields are the fields you expect to group by when analyzing data. Each dimensionFields object contains two attributes: name and granularity. Valid only for aggregation Reflections. If you omit the dimensionFields object in a PUT request, Dremio removes all existing dimension fields from the Reflection. To keep existing dimension fields while making other updates, duplicate the existing dimensionFields array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[measureFields](/reference/api/reflections#parameters-of-objects-in-the-measurefields-array-1) Body Array of Object
Information about the measure fields from the anchor dataset to use in the Reflection. Measure fields are the fields you expect to use for calculations when analyzing the data. Each measureFields object contains two attributes: name and measureTypeList. Valid only for aggregation Reflections. If you omit the measureFields object in a PUT request, Dremio removes all existing measure fields from the Reflection. To keep existing measure fields while making other updates, duplicate the existing measureFields array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","measureTypeList": ["SUM", "COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[distributionFields](/reference/api/reflections#parameters-of-objects-in-the-distributionfields-array-1) Body Array of Object Optional
Information about the distribution fields from the anchor dataset to use for co-locating and co-partitioning data from multiple datasets across nodes. Each distributionFields object contains one attribute: name.  
If you omit the distributionFields object in a PUT request, Dremio removes all existing distribution fields from the Reflection. To keep existing distribution fields while making other updates, duplicate the existing distributionFields array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[partitionFields](/reference/api/reflections#parameters-of-objects-in-the-partitionfields-array-1) Body Array of Object Optional
Information about the fields from the anchor dataset to use to partition data in the Reflection. Each field name is listed as an individual object. If you omit the partitionFields object in a PUT request, Dremio removes all existing partition fields from the Reflection. To keep existing partition fields while making other updates, duplicate the existing partitionFields array in the PUT request. For more information, read [Horizontally Partition Reflections that Have Many Rows](/help-support/well-architected-framework/performance/#horizontally-partition-reflections-that-have-many-rows).
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[sortFields](/reference/api/reflections#parameters-of-objects-in-the-sortfields-array-1) Body Array of Object
Information about the fields from the anchor dataset to use for sorting in the Reflection. Each sortFields object contains one attribute: name. If you omit the sortFields object in a PUT request, Dremio removes all existing sort fields from the Reflection. To keep existing sort fields while making other updates, duplicate the existing sortFields array in the PUT request. For more information, read [Sort Reflections on High-Cardinality Fields](/help-support/well-architected-framework/performance/#sort-reflections-on-high-cardinality-fields).
Example: "name": "trip_distance_mi"
* * *
partitionDistributionStrategy Body String Optional
Method to use to optimize data compression when executing Reflections. If set to `CONSOLIDATED` (default), Dremio minimizes the number of files produced. If set to `STRIPED`, Dremio minimizes the time required to refresh the Reflection.
Enum: CONSOLIDATED, STRIPED
Example: CONSOLIDATED
#### Parameters of Objects in the `displayFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-displayfields-array-1 "Direct link to parameters-of-objects-in-the-displayfields-array-1")
name Body String
Name of the field to display from the anchor dataset.
Example: "name": "pickup_datetime"
#### Parameters of Objects in the `dimensionFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-dimensionfields-array-1 "Direct link to parameters-of-objects-in-the-dimensionfields-array-1")
name Body String
Name of the field from the anchor dataset to configure as a dimension for the Reflection.
Example: "name": "pickup_datetime"
* * *
granularity Body String
Grouping to use for the dimension field. If Dremio should automatically extract the day-level date value and use it as the grouping value in the Reflection, `DATE`. If Dremio should use the original value for grouping, `NORMAL`.
Enum: DATE, NORMAL
Example: "granularity": "DATE"
#### Parameters of Objects in the `measureFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-measurefields-array-1 "Direct link to parameters-of-objects-in-the-measurefields-array-1")
name Body String
Name of the field from the anchor dataset that you expect to use in calculations. Fields of types `LIST`, `MAP`, and `UNION` are not valid measureFields.
Example: "name": "passenger_count"
* * *
measureTypeList Body Array of String
Name of the field from the anchor dataset to use for co-locating and co-partitioning data from multiple datasets across nodes. Every field listed as a distribution field must also be listed as a dimension field.
Enum: APPROX_COUNT_DISTINCT, MIN, MAX, UNKNOWN, SUM, COUNT
Example: ["SUM", "COUNT"]
#### Parameters of Objects in the `distributionFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-distributionfields-array-1 "Direct link to parameters-of-objects-in-the-distributionfields-array-1")
name Body String
Name of the field from the anchor dataset to use for co-locating and co-partitioning data from multiple datasets across nodes. In aggregation Reflections, every field listed as a distribution field must also be listed as a dimension field.
Example: "name": "pickup_datetime"
#### Parameters of Objects in the `partitionFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-partitionfields-array-1 "Direct link to parameters-of-objects-in-the-partitionfields-array-1")
name Body String
Name of the field from the anchor dataset on which the rows in the Reflection are to be partitioned. If a column is listed as a partition column, it cannot also be listed as a sort column for the same Reflection. In aggregation Reflections, each column specified as a partition column or used in transform must also be listed as a dimension column. In raw Reflections, each column specified as a partition column or used in transform must also be listed as a display column.
Example: "name": "dropoff_date"
* * *
transform Object
The type of partition transform that is applied. The value is an enum. The types are:
**IDENTITY** : Creates one partition per value. This is the default transform. If no transform is specified for a field named by the `name` property, an IDENTITY transform is performed.
IDENTITY Example

```
{  
  "name": "passenger_count",  
  "transform": {  
    "type": "IDENTITY"  
  }  
}  

```

**YEAR** : Partitions by year. The field must use the TIMESTAMP or DATE data type.
YEAR Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "YEAR"  
  }  
}  

```

**MONTH** : Partitions by month. The field must use the TIMESTAMP or DATE data type.
MONTH Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "MONTH"  
  }  
}  

```

**DAY** : Partitions on the equivalent of dateint. The field must use the TIMESTAMP or DATE data type.
DAY Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "DAY"  
  }  
}  

```

**HOUR** : Partitions on the equivalent of dateint and hour. The field must use the TIMESTAMP data type.
HOUR Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "HOUR"  
  }  
}  

```

**BUCKET** : Partitions data into the number of partitions specified by an integer. For example, if the integer value N is specified, the data is partitioned into N, or (0 to (N-1)), partitions. The partition in which an individual row is stored is determined by hashing the field value and then calculating ``hash_value` mod N`. If the result is 0, the row is placed in partition 0; if the result is 1, the row is placed in partition 1; and so on.
This value must be followed by a `bucketTransform` object. This object takes one property: `bucketCount`. This property takes an integer value.
BUCKET Example

```
{  
  "name": "pickup_datetime",  
  "transform": {  
    "type": "BUCKET",  
    "bucketTransform": {  
      "bucketCount": 1000  
    }  
  }  
}  

```

**TRUNCATE** : If the specified field uses the string data type, truncates strings to a maximum of the number of characters specified by an integer. For example, suppose the specified transform is `truncate(1, stateUS)`. A value of `CA` is truncated to `C`, and the row is placed in partition C. A value of `CO` is also truncated to `C`, and the row is also placed in partition C.
If the specified field uses the integer or long data type, truncates field values in the following way: For any `truncate(L, col)`, truncates the field value to the biggest multiple of L that is smaller than the field value. For example, suppose the specified transform is `truncate(10, intField)`. A value of 1 is truncated to 0 and the row is placed in the partition 0. A value of 247 is truncated to 240 and the row is placed in partition 240. If the transform is `truncate(3, intField)`, a value of 13 is truncated to 12 and the row is placed in partition 12. A value of 255 is not truncated, because it is divisble by 3, and the row is placed in partition 255. This value must be followed by a `truncateTransform` object.
This object takes one property: `truncateLength`. This property takes an integer value.
The truncate transform does not change field values. It uses field values to calculate the correct partitions in which to place rows.
TRUNCATE Example

```
{  
  "name": "pickup_hour",  
  "transform": {  
    "type": "TRUNCATE",  
    "truncateTransform": {  
      "truncateLength": 3  
    }  
  }  
}  

```

#### Parameters of Objects in the `sortFields` Array[​](/reference/api/reflections#parameters-of-objects-in-the-sortfields-array-1 "Direct link to parameters-of-objects-in-the-sortfields-array-1")
name Body String
Name of the field from the anchor dataset to use for sorting in the Reflection. Every field listed as a sort field must also be listed as a dimension field. If you list a field as a sort field, you cannot list the same field as a partition field in the same Reflection.
Example: "name": "pickup_datetime"
### Example[​](/reference/api/reflections#example-4 "Direct link to Example")
Request

```
curl -X PUT 'https://{hostname}/api/v3/reflection/836eae91-306e-487b-a687-31c999653a86' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "id": "836eae91-306e-487b-a687-31c999653a86",  
  "type": "AGGREGATION",  
  "name": "New Aggregation Reflection",  
  "tag": "sEHieiuinqE=",  
  "datasetId": "gc870df7-ddf7-4d1e-bb9e-beef28ae773f",  
  "enabled": false,  
  "arrowCachingEnabled": true,  
  "dimensionFields": [  
    {  
      "name": "pickup_datetime",  
      "granularity": "DATE"  
    },  
    {  
      "name": "passenger_count"  
    },  
    {  
      "name": "total_amount"  
    },  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "measureFields": [  
    {  
      "name": "passenger_count",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "trip_distance_mi",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "fare_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "tip_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    },  
    {  
      "name": "total_amount",  
      "measureTypeList": [  
        "SUM",  
        "COUNT"  
    ]  
    }  
],  
  "distributionFields": [  
    {  
      "name": "trip_distance_mi"  
    },  
    {  
      "name": "total_amount"  
    }  
],  
  "partitionFields": [  
    {  
      "name": "pickup_datetime"  
    },  
    {  
      "name": "passenger_count"  
    }  
],  
  "sortFields": [  
    {  
      "name": "trip_distance_mi"  
    }  
],  
  "entityType": "reflection"  
}'  

```

Response

```
{  
    "id": "836eae91-306e-487b-a687-31c999653a86",  
    "type": "AGGREGATION",  
    "name": "New Aggregation Reflection",  
    "tag": "nRPbilwodqC=",  
    "createdAt": "2023-01-30T14:35:19.192Z",  
    "updatedAt": "2023-01-30T14:35:19.192Z",  
    "datasetId": "gc870df7-ddf7-4d1e-bb9e-beef28ae773f",  
    "datasetName": "Demo.\"NYC-taxi-trips\"",  
    "datasetType": "VIRTUAL_DATASET",  
    "recordCount": 990,  
    "currentSizeBytes": 0,  
    "totalSizeBytes": 0,  
    "enabled": false,  
    "arrowCachingEnabled": true,  
    "consideredCount": 30,  
    "matchedCount": 22,  
    "acceleratedCount": 18,  
    "status": {  
        "config": "OK",  
        "refresh": "SCHEDULED",  
        "availability": "NONE",  
        "combinedStatus": "DISABLED",  
        "refreshMethod": "INCREMENTAL",  
        "failureCount": 0,  
        "lastDataFetch": "1969-12-31T23:59:59.999Z",  
        "expiresAt": "1969-12-31T23:59:59.999Z",  
        "lastRefreshDurationMillis": 21625,  
        "lastRefreshFinished": "2023-02-05T14:53:34.347Z"  
    },  
    "dimensionFields": [  
        {  
            "name": "pickup_datetime",  
            "granularity": "DATE"  
        },  
        {  
            "name": "passenger_count"  
        },  
        {  
            "name": "total_amount"  
        },  
        {  
            "name": "trip_distance_mi"  
        }  
  ],  
    "measureFields": [  
        {  
            "name": "passenger_count",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "trip_distance_mi",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "fare_amount",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "tip_amount",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        },  
        {  
            "name": "total_amount",  
            "measureTypeList": [  
                "SUM",  
                "COUNT"  
          ]  
        }  
  ],  
    "distributionFields": [  
        {  
            "name": "trip_distance_mi"  
        },  
        {  
            "name": "total_amount"  
        }  
  ],  
    "partitionFields": [  
        {  
            "name": "pickup_datetime"  
        },  
        {  
            "name": "passenger_count"  
        }  
  ],  
    "sortFields": [  
        {  
            "name": "trip_distance_mi"  
        }  
  ],  
    "partitionDistributionStrategy": "CONSOLIDATED",  
    "canView": true,  
    "canAlter": true,  
    "entityType": "reflection"  
}  

```

### Response Status Codes[​](/reference/api/reflections#response-status-codes-5 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
409 Conflict   
  
500 Internal Server Error   
  

## Delete a Reflection[​](/reference/api/reflections#delete-a-reflection "Direct link to Delete a Reflection")
Delete the specified Reflection. This can be a raw or aggregation Reflection.
Method and URL

```
DELETE /api/v3/reflection/{id}  

```

### Parameters[​](/reference/api/reflections#parameters-5 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the Reflection that you want to delete.
Example: 95dda9dd-2371-467f-b68d-fc4c5ea57a8b
### Example[​](/reference/api/reflections#example-5 "Direct link to Example")
Request

```
curl -X DELETE 'https://{hostname}/api/v3/reflection/95dda9dd-2371-467f-b68d-fc4c5ea57a8b'  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type:application/json'  

```

Response

```
No response  

```

### Response Status Codes[​](/reference/api/reflections#response-status-codes-6 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

Was this page helpful?
[Previous Personal Access Token](/reference/api/personal-access-token)[Next Recommendations](/reference/api/reflections/reflection-recommendations)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Personal Access Token](/reference/api/personal-access-token)[Next Recommendations](/reference/api/reflections/reflection-recommendations)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Freflections%2F&_biz_t=1777950561846&_biz_i=Reflection%20%7C%20Dremio%20Documentation&_biz_n=465&rnd=123900&cdn_o=a&_biz_z=1777950561847)
