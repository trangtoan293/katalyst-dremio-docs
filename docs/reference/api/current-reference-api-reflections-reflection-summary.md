---
slug: /reference/api/reflections/reflection-summary
title: "Reflection Summary | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64067.810770125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Reflection](/reference/api/reflections)
  * Reflection Summary

Version: current [26.x]
On this page
# Reflection Summary Enterprise
Use the Reflection API to retrieve a Reflection summary that includes the raw and aggregation Reflections for the Dremio instance.
Reflection summary objects are different from Reflection objects. Reflection summaries do not include certain attributes that define the Reflection, like the display, dimension, measure, sort, and partition attributes. Reflection summaries do include several attributes that do not appear in Reflection objects, like datasetType, datasetPath, and counts and links for considered, matched, and chosen jobs.
Reflection Summary Object

```
{  
  "data": [  
    {  
      "createdAt": "2022-07-05T19:19:40.244Z",  
      "updatedAt": "2023-01-13T19:46:01.313Z",  
      "id": "27077c03-ae49-454c-a7bb-a9a8b5eca224",  
      "reflectionType": "AGGREGATION",  
      "name": "NYC_taxi_agg",  
      "currentSizeBytes": 9272,  
      "outputRecords": 51,  
      "totalSizeBytes": 9272,  
      "datasetId": "fa7c487f-9550-474e-8a41-4826564c6b09",  
      "datasetType": "VIRTUAL_DATASET",  
      "datasetPath": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "MANUAL",  
        "availabilityStatus": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "FULL",  
        "failureCount": 0,  
        "lastDataFetchAt": "2023-01-13T19:05:03.532Z",  
        "expiresAt": "3022-05-16T19:46:02.342Z",  
        "lastRefreshDurationMillis": 46387  
      },  
      "consideredCount": 202,  
      "matchedCount": 45,  
      "chosenCount": 5,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    },  
    {  
      "createdAt": "2023-01-26T23:27:04.281Z",  
      "updatedAt": "2023-01-26T23:27:04.281Z",  
      "id": "0e3d765a-2291-4a04-81eb-2daf5477cc7d",  
      "reflectionType": "RAW",  
      "name": "Raw Reflection",  
      "currentSizeBytes": 0,  
      "outputRecords": -1,  
      "totalSizeBytes": 0,  
      "datasetId": "acdad4be-7049-47e4-b616-b471c5b3c60c",  
      "datasetType": "PHYSICAL_DATASET",  
      "datasetPath": [  
        "@dremio",  
        "test"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "GIVEN_UP",  
        "availabilityStatus": "NONE",  
        "combinedStatus": "FAILED",  
        "refreshMethod": "NONE",  
        "failureCount": 3,  
        "lastFailureMessage": "The Default engine is not online.",  
        "lastDataFetchAt": null,  
        "expiresAt": null,  
        "lastRefreshDurationMillis": -1  
      },  
      "consideredCount": 0,  
      "matchedCount": 0,  
      "chosenCount": 0,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%22d7cc7745fad2-be18-40a4-1922-a567d3e0%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%22d7cc7745fad2-be18-40a4-1922-a567d3e0%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%22d7cc7745fad2-be18-40a4-1922-a567d3e0%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    },  
    {  
      "createdAt": "2023-01-13T19:50:19.030Z",  
      "updatedAt": "2023-01-13T19:50:19.030Z",  
      "id": "8eec62d7-3419-4cf3-997d-0a153d81ed8a",  
      "reflectionType": "AGGREGATION",  
      "name": "dataset991_agg991",  
      "currentSizeBytes": 9273,  
      "outputRecords": 51,  
      "totalSizeBytes": 9273,  
      "datasetId": "a461bf97-8464-43ed-bd86-a8fb90d920e3",  
      "datasetType": "VIRTUAL_DATASET",  
      "datasetPath": [  
        "temp",  
        "dataset991"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "MANUAL",  
        "availabilityStatus": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "FULL",  
        "failureCount": 0,  
        "lastDataFetchAt": "2023-01-13T19:46:02.342Z",  
        "expiresAt": "3022-05-16T19:46:02.342Z",  
        "lastRefreshDurationMillis": 11697  
      },  
      "consideredCount": 60,  
      "matchedCount": 9,  
      "chosenCount": 0,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%22a8de18d351a0-d799-3fc4-9143-7d26cee8%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%22a8de18d351a0-d799-3fc4-9143-7d26cee8%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%22a8de18d351a0-d799-3fc4-9143-7d26cee8%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    },  
    {  
      "createdAt": "2023-01-13T19:50:17.714Z",  
      "updatedAt": "2023-01-13T19:50:17.714Z",  
      "id": "167428eb-7936-4ea2-a1fb-23b1ac6e9454",  
      "reflectionType": "RAW",  
      "name": "dataset991_raw991",  
      "currentSizeBytes": 818790,  
      "outputRecords": 29467,  
      "totalSizeBytes": 818790,  
      "datasetId": "a461bf97-8464-43ed-bd86-a8fb90d920e3",  
      "datasetType": "VIRTUAL_DATASET",  
      "datasetPath": [  
        "temp",  
        "dataset991"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "MANUAL",  
        "availabilityStatus": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "FULL",  
        "failureCount": 0,  
        "lastDataFetchAt": "2023-01-13T19:46:02.747Z",  
        "expiresAt": "3022-05-16T19:46:02.747Z",  
        "lastRefreshDurationMillis": 16666  
      },  
      "consideredCount": 54,  
      "matchedCount": 37,  
      "chosenCount": 0,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%224549e6ca1b32-bf1a-2ae4-6397-be824761%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%224549e6ca1b32-bf1a-2ae4-6397-be824761%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%224549e6ca1b32-bf1a-2ae4-6397-be824761%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    }  
  ],  
  "nextPageToken": "CiQxNjc0MjhlYi03OTM2LTRlYTItYTFmYi0yM2IxYWM2ZTk0NTQSAA==",  
  "isCanAlterReflections": true  
}  

```

## Reflection Summary Attributes[​](/reference/api/reflections/reflection-summary)
[data](/reference/api/reflections/reflection-summary) Array of Object
List of Reflection-summary objects for each Reflection in the Dremio instance.
* * *
nextPageToken String
Opaque string to pass for the `pageToken` query parameter in the next request to retrieve the next set of results. If nextPageToken is not included in the response, all available resources have been returned.
Example: CiQxNjc0MjhlYi03OTM2LTRlYTItYTFmYi0yM2IxYWM2ZTk0NTQSAA==
* * *
isCanAlterReflections Boolean
If the current user has project-level privileges to alter Reflections, the value is `true`. Otherwise, the value is `false`.
Example: true
#### Attributes of Objects in the `data` Array[​](/reference/api/reflections/reflection-summary)
createdAt String
Date and time that the Reflection was created, in UTC format.
Example: 2022-07-05T19:19:40.244Z
* * *
updatedAt String
Date and time that the Reflection was last updated, in UTC format.
Example: 2023-01-13T19:46:01.313Z
* * *
id String (UUID)
Unique identifier of the Reflection.
Example: 27077c03-ae49-454c-a7bb-a9a8b5eca224
* * *
reflectionType String
Reflection type. For more information, read [Types of Reflections](/acceleration).
Enum: RAW, AGGREGATION
Example: AGGREGATION
* * *
name String
User-provided name for the Reflection. For Reflections created in the Dremio UI, if the user did not provide a name, the default values are `Raw Reflection` and `Aggregation Reflection` (automatically assigned based on the Reflection type).
Example: NYC_taxi_agg
* * *
currentSizeBytes Integer
Data size of the latest Reflection job (if one exists), in bytes.
Example: 9272
* * *
outputRecords Integer
Number of records returned for the latest Reflection.
Example: 51
* * *
totalSizeBytes Integer
Data size of all Reflection jobs that have not been pruned (if any exist), in bytes.
Example: 9272
* * *
datasetId String
Unique identifier of the anchor dataset that is associated with the Reflection.
Example: fa7c487f-9550-474e-8a41-4826564c6b09
* * *
datasetType String
Type for the anchor dataset that is associated with the Reflection. If the anchor dataset is a table, the type is `PHYSICAL_DATASET`. If the anchor dataset is a view, the type is `VIRTUAL_DATASET`.
Enum: PHYSICAL_DATASET, VIRTUAL_DATASET
Example: VIRTUAL_DATASET
* * *
datasetPath String
Path to the anchor dataset that is associated with the Reflection within Dremio, expressed in an array. The path consists of the source or space, followed by any folder and subfolders, followed by the name of the dataset itself as the last item in the array.
Example: ["Samples","samples.dremio.com","NYC Taxi Trips"]
* * *
[status](/reference/api/reflections/reflection-summary) Object
Information about the status of the Reflection.
Example: {'{'})'{'{'})'{'}'})\n "configStatus": "OK",\n "refreshStatus": "MANUAL",\n "availabilityStatus": "AVAILABLE",\n "combinedStatus": "CAN_ACCELERATE",\n "refreshMethod": "FULL",\n "failureCount": 0,\n "lastDataFetchAt": "2023-01-13T19:05:03.532Z",\n "expiresAt": "3022-05-16T19:46:02.342Z",\n "lastRefreshDurationMillis": 46387\n {'{'})'{'}'}'{'}'}
* * *
consideredCount Integer
Number of jobs that considered the Reflection during planning.
Example: 202
* * *
matchedCount Integer
Number of jobs that matched the Reflection during planning.
Example: 45
* * *
chosenCount Integer
Number of jobs accelerated by the Reflection.
Example: 5
* * *
consideredJobsLink String
Link to list of considered jobs for the Reflection.
Example: /jobs?filters=%7B%22cor%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D
* * *
matchedJobsLink String
Link to list of matched jobs for the Reflection.
Example: /jobs?filters=%7B%22mar%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D
* * *
chosenJobsLink String
Link to list of chosen jobs for the Reflection.
Example: /jobs?filters=%7B%22chr%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D
* * *
isArrowCachingEnabled Boolean
If Dremio converts data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, the value is `true`. Otherwise, the value is `false`.
Example: false
* * *
isCanView Boolean
If you can view Reflections on all datasets of a source, system, space, or folder, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
isCanAlter Boolean
If you can create, edit, and view Reflections on all datasets of a source, system, space, or folder, the value is `true`. Otherwise, the value is `false`.
Example: true
* * *
isEnabled Boolean
If the Reflection is available for accelerating queries, the value is `true`. Otherwise, the value is `false`.
Example: true
#### Attributes of the `status` Object[​](/reference/api/reflections/reflection-summary)
configStatus String
Status of the Reflection configuration. If the value is `OK`, the Reflection configuration is free of errors. If the value is `INVALID`, the Reflection configuration contains one or more errors.
Enum: OK, INVALID
Example: OK
* * *
refreshStatus String
Status of the Reflection refresh.
  * `GIVEN_UP`: Dremio attempted to refresh the Reflection multiple times, but each attempt has failed and Dremio will not make further attempts.
  * `MANUAL`: Refresh period is set to 0, so you must use the Dremio UI to manually refresh the Reflection.
  * `RUNNING`: Dremio is currently refreshing the Reflection.
  * `SCHEDULED`: The Reflection refreshes according to a schedule.
  * `ON_DATA_CHANGES`: All of the Reflection’s underlying tables are in Iceberg format, and the Reflection refreshes automatically if new snapshots are created after an update to the underlying tables.


Enum: GIVEN_UP, MANUAL, RUNNING, SCHEDULED, ON_DATA_CHANGES
Example: MANUAL
* * *
availabilityStatus String
Status of the Reflection's availability for accelerating queries.
Enum: NONE, EXPIRED, AVAILABLE
Example: AVAILABLE
* * *
combinedStatus String
Status of the Reflection based on a combination of config, refresh, and availability.
  * `CAN_ACCELERATE`: The Reflection is fully functional.
  * `CAN_ACCELERATE_WITH_FAILURES`: The most recent refresh failed to obtain a status, but Dremio still has a valid materialization.
  * `CANNOT_ACCELERATE_INITIALIZING`: The Reflection is currently being loaded into the materialization cache. During this time, the Reflection is unable to accelerate queries.
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
The method used for the most recent refresh of the Reflection. For new Reflections, the value is `NONE` until planned. For more information, read [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections).
Enum: NONE, FULL, INCREMENTAL
Example: FULL
* * *
failureCount Integer
Number of times that an attempt to refresh the Reflection failed.
Example: 0
* * *
lastFailureMessage String
The error message from the last failed Reflection refresh. If the refresh of a Reflection never fails or succeeds after a failure, this attribute does not appear.
Example: "The Default engine is not online."
* * *
lastDataFetchAt String
Date and time that the Reflection data was last refreshed, in UTC format. If the Reflection is running, failing, or disabled, the lastDataFetchAt value is `1969-12-31T23:59:59.999Z`.
Example: 2023-01-13T19:05:03.532Z
* * *
expiresAt String
Date and time that the Reflection expires, in UTC format. If the Reflection is running, failing, or disabled, the expiresAt value is `1969-12-31T23:59:59.999Z`.
Example: 3022-05-16T19:46:02.342Z
* * *
lastRefreshDurationMillis Integer
Duration of the most recent refresh for the Reflection. In milliseconds.
Example: 46387
## Retrieve a Reflection Summary[​](/reference/api/reflections/reflection-summary)
Retrieve a summary of the raw and aggregation Reflections in the Dremio instance.
Method and URL

```
GET /api/v3/reflection-summary  

```

### Parameters[​](/reference/api/reflections/reflection-summary)
pageToken Query String Optional
Token for retrieving the next page of Reflection summary results. If the Dremio instance has more Reflection summary results than the maximum per page (default 50), the response includes a nextPageToken after the data array. Use the nextPageToken value in your request URL as the pageToken value. Do not change any other query parameters included in the request URL when you use pageToken. For more information, read [pageToken Query Parameter](/reference/api).
* * *
maxResults Query Integer Optional
Maximum number of Reflection summaries to return in the response. Maximum valid value is `100`. Default is `50`. For more information, read [maxResults Query Parameter](/reference/api).
* * *
filter Query Object Optional
Filters for Reflection name, dataset name, availability status, and refresh status. Value is a URL-encoded string that represents a JSON object. The JSON object specifies the attributes to filter on and the values to match for each attribute. Available filter attributes:
  * reflectionType: `RAW`, `AGGREGATION` (array of string)
  * refreshStatus: `GIVEN_UP`, `MANUAL`, `RUNNING`, `SCHEDULED`, `ON_DATA_CHANGES` (array of string)
  * availabilityStatus: `NONE`, `EXPIRED`, `AVAILABLE` (array of string)
  * configStatus: `OK`, `INVALID` (array of string)
  * enabledFlag: `true`, `false` (Boolean)
  * reflectionNameOrDatasetPath: full or partial Reflection name or dataset path; case insensitive (string)
  * reflectionIds: IDs of Reflections to retrieve (array of string); must be used alone, with no other filters or query parameters


For more information, read [filter Query Parameter](/reference/api).
* * *
orderBy Query String Optional
Organize the response in ascending (default) or descending order by reflectionName, datasetName, or reflectionType. To specify descending order, precede the orderBy value with a `-` character. For more information, read [orderBy Query Parameter](/reference/api).
Example Request Without Query Parameters

```
curl -X GET 'https://{hostname}/api/v3/reflection-summary'  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header "Content-Type: application/json"  

```

### Example Response[​](/reference/api/reflections/reflection-summary)

```
{  
  "data": [  
    {  
      "createdAt": "2023-01-13T19:46:01.313Z",  
      "updatedAt": "2023-01-13T19:46:01.313Z",  
      "id": "27077c03-ae49-454c-a7bb-a9a8b5eca224",  
      "reflectionType": "AGGREGATION",  
      "name": "NYC_taxi_agg",  
      "currentSizeBytes": 9272,  
      "outputRecords": 51,  
      "totalSizeBytes": 9272,  
      "datasetId": "fa7c487f-9550-474e-8a41-4826564c6b09",  
      "datasetType": "VIRTUAL_DATASET",  
      "datasetPath": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "MANUAL",  
        "availabilityStatus": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "FULL",  
        "failureCount": 0,  
        "lastDataFetchAt": "2023-01-13T19:46:02.342Z",  
        "expiresAt": "3022-05-16T19:46:02.342Z",  
        "lastRefreshDurationMillis": 46387  
      },  
      "consideredCount": 202,  
      "matchedCount": 45,  
      "chosenCount": 5,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%22422ace5b8a9a-bb7a-c454-94ea-30c77072%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    },  
    {  
      "createdAt": "2023-01-26T23:27:04.281Z",  
      "updatedAt": "2023-01-26T23:27:04.281Z",  
      "id": "0e3d765a-2291-4a04-81eb-2daf5477cc7d",  
      "reflectionType": "RAW",  
      "name": "Raw Reflection",  
      "currentSizeBytes": 0,  
      "outputRecords": -1,  
      "totalSizeBytes": 0,  
      "datasetId": "acdad4be-7049-47e4-b616-b471c5b3c60c",  
      "datasetType": "PHYSICAL_DATASET",  
      "datasetPath": [  
        "@dremio",  
        "test"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "GIVEN_UP",  
        "availabilityStatus": "NONE",  
        "combinedStatus": "FAILED",  
        "refreshMethod": "NONE",  
        "failureCount": 3,  
        "lastDataFetchAt": null,  
        "expiresAt": null,  
        "lastRefreshDurationMillis": -1  
      },  
      "consideredCount": 0,  
      "matchedCount": 0,  
      "chosenCount": 0,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%22d7cc7745fad2-be18-40a4-1922-a567d3e0%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%22d7cc7745fad2-be18-40a4-1922-a567d3e0%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%22d7cc7745fad2-be18-40a4-1922-a567d3e0%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    },  
    {  
      "createdAt": "2023-01-13T19:50:19.030Z",  
      "updatedAt": "2023-01-13T19:50:19.030Z",  
      "id": "8eec62d7-3419-4cf3-997d-0a153d81ed8a",  
      "reflectionType": "AGGREGATION",  
      "name": "dataset991_agg991",  
      "currentSizeBytes": 9273,  
      "outputRecords": 51,  
      "totalSizeBytes": 9273,  
      "datasetId": "a461bf97-8464-43ed-bd86-a8fb90d920e3",  
      "datasetType": "VIRTUAL_DATASET",  
      "datasetPath": [  
        "temp",  
        "dataset991"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "MANUAL",  
        "availabilityStatus": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "FULL",  
        "failureCount": 0,  
        "lastDataFetchAt": "2023-01-13T19:46:02.342Z",  
        "expiresAt": "3022-05-16T19:46:02.342Z",  
        "lastRefreshDurationMillis": 11697  
      },  
      "consideredCount": 60,  
      "matchedCount": 9,  
      "chosenCount": 0,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%22a8de18d351a0-d799-3fc4-9143-7d26cee8%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%22a8de18d351a0-d799-3fc4-9143-7d26cee8%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%22a8de18d351a0-d799-3fc4-9143-7d26cee8%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    },  
    {  
      "createdAt": "2023-01-13T19:50:17.714Z",  
      "updatedAt": "2023-01-13T19:50:17.714Z",  
      "id": "167428eb-7936-4ea2-a1fb-23b1ac6e9454",  
      "reflectionType": "RAW",  
      "name": "dataset991_raw991",  
      "currentSizeBytes": 818790,  
      "outputRecords": 29467,  
      "totalSizeBytes": 818790,  
      "datasetId": "a461bf97-8464-43ed-bd86-a8fb90d920e3",  
      "datasetType": "VIRTUAL_DATASET",  
      "datasetPath": [  
        "temp",  
        "dataset991"  
      ],  
      "status": {  
        "configStatus": "OK",  
        "refreshStatus": "MANUAL",  
        "availabilityStatus": "AVAILABLE",  
        "combinedStatus": "CAN_ACCELERATE",  
        "refreshMethod": "FULL",  
        "failureCount": 0,  
        "lastDataFetchAt": "2023-01-13T19:46:02.747Z",  
        "expiresAt": "3022-05-16T19:46:02.747Z",  
        "lastRefreshDurationMillis": 16666  
      },  
      "consideredCount": 54,  
      "matchedCount": 37,  
      "chosenCount": 0,  
      "consideredJobsLink": "/jobs?filters=%7B%22cor%22%3A%5B%224549e6ca1b32-bf1a-2ae4-6397-be824761%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "matchedJobsLink": "/jobs?filters=%7B%22mar%22%3A%5B%224549e6ca1b32-bf1a-2ae4-6397-be824761%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "chosenJobsLink": "/jobs?filters=%7B%22chr%22%3A%5B%224549e6ca1b32-bf1a-2ae4-6397-be824761%22%5D%2C%22qt%22%3A%5B%22UI%22%2C%22EXTERNAL%22%2C%22ACCELERATION%22%5D%7D",  
      "isArrowCachingEnabled": false,  
      "isCanView": true,  
      "isCanAlter": true,  
      "isEnabled": true  
    }  
  ],  
  "nextPageToken": "CiQxNjc0MjhlYi03OTM2LTRlYTItYTFmYi0yM2IxYWM2ZTk0NTQSAA==",  
  "isCanAlterReflections": true  
}  

```

This endpoint supports [query parameters](/reference/api/reflections/reflection-summary) that you can add to the request URL to include only specific types of Reflections in the Reflection summary, specify the maximum number of results to return, and sort the response to list Reflections in ascending or descending order.
For example, to order the Reflections within the summary in ascending order by reflectionName, add `?orderBy=reflectionName` to the request URL. For descending order, add a `-` character before the attribute name: `?orderBy=-reflectionName`.
In the same request, you can add the `filter` query parameter to retrieve only the raw Reflections that are refreshed manually or by schedule, are enabled, and apply to datasets with `samples.dremio.com` in their paths. The JSON object for such a filter would look like this:
Example JSON Object for Filter

```
{  
  "reflectionType": ["RAW"],  
  "refreshStatus": ["MANUAL","SCHEDULED"],  
  "enabledFlag": true,  
  "reflectionNameOrDatasetPath": "samples.dremio.com"  
}  

```

However, to use the JSON object in the request URL, you must convert it to URL-encoded JSON, which looks like this:
Example JSON Object in URL-Encoded JSON

```
%7B%0A%20%20%22reflectionType%22%3A%20%5B%22RAW%22%5D%2C%0A%20%20%22refreshStatus%22%3A%20%5B%22MANUAL%22%2C%22SCHEDULED%22%5D%2C%0A%20%20%22enabledFlag%22%3A%20true%2C%0A%20%20%22reflectionNameOrDatasetPath%22%3A%20%22samples.dremio.com%22%0A%7D  

```

Here is an example request URL that includes both the `orderBy` and `filter` query parameters:
Example Request with orderBy and filter Query Parameters

```
curl -X GET 'https://{hostname}/api/v3/reflection-summary?orderBy=reflectionName&filter=%7B%0A%20%20%22reflectionType%22%3A%20%5B%22RAW%22%5D%2C%0A%20%20%22refreshStatus%22%3A%20%5B%22MANUAL%22%2C%22SCHEDULED%22%5D%2C%0A%20%20%22enabledFlag%22%3A%20true%2C%0A%20%20%22reflectionNameOrDatasetPath%22%3A%20%22samples.dremio.com%22%0A%7D' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

For this request, the Reflection summary in the response will include only raw Reflections that are refreshed manually or by schedule, are enabled, and apply to datasets with `samples.dremio.com` in their paths, and the Reflections will be listed in ascending order by reflectionName.
### Response Status Codes[​](/reference/api/reflections/reflection-summary)
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

Was this page helpful?
[Previous Recommendations](/reference/api/reflections/reflection-recommendations)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Recommendations](/reference/api/reflections/reflection-recommendations)
!
