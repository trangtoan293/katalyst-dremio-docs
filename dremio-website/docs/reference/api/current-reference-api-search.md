---
url: /reference/api/search
title: "Search | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64791.072682666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Search

Version: current [26.x]
On this page
# Search
Use the Search API to query Dremio entities such as tables, jobs, views, scripts, and Reflections. The API also provides observability into the search infrastructure's health.
Search Object

```
{  
  "sessionId": "210be060-b680-43ab-8333-f519847802dd",  
  "nextPageToken": "eyJwYWdlVG9rZW4iOiI1MCIsInF1ZXJ5Ijoiam9iIiwiZmlsdGVyIjoiIn0",  
  "results": [  
    {  
      "catalogObject": {  
        "path": ["Prod", "Sales", "Orders"],  
        "branch": "main",  
        "type": "TABLE",  
        "labels": ["finance", "monthly"],  
        "wiki": "Contains monthly sales data",  
        "owner": {  
          "id": "user-1",  
          "type": "USER",  
          "username": "data_admin"  
        },  
        "createdAt": "2023-01-01T10:00:00Z",  
        "modifiedAt": "2024-01-01T10:00:00Z",  
        "columns": ["order_id", "amount", "order_date"]  
      }  
    }  
  ]  
}  

```

## Search Attributes[​](/reference/api/search#search-attributes "Direct link to Search Attributes")
sessionId String
Session identifier to correlate API calls during feedback collection.
Example: "210be060-b680-43ab-8333-f519847802dd"
* * *
nextPageToken String
Token of the next page of results to fetch in a paginated response.
Example: "eyJwYWdlVG9rZW4iOiI1MCIsInF1ZXJ5Ijoiam9iIiwiZmlsdGVyIjoiIn0"
* * *
results Array of Object
Array of search results. Each result object can contain a [catalogObject](/reference/api/search#catalogobject-object), [jobObject](/reference/api/search#jobobject-object), [scriptObject](/reference/api/search#scriptobject-object), or [reflectionObject](/reference/api/search#reflectionobject-object).
* * *
## Perform a Search[​](/reference/api/search#perform-a-search "Direct link to Perform a Search")
Search for indexed entities such as tables, views, Reflections, jobs, functions, scripts, and folders.
Method and URL

```
POST /api/v3/search  

```

### Parameters[​](/reference/api/search#parameters "Direct link to Parameters")
query Body String
Search string.
Example: "views with date columns"
* * *
filter Body String
Optional Common Expression Language (CEL) filter expression to refine the search.
Example: category in ["TABLE"]
* * *
pageToken Body String Optional
Token used to retrieve the next page of results.
Example: "eyJwYWdlVG9rZW4iOiI1MCIsInF1ZXJ5Ijoiam9iIiwiZmlsdGVyIjoiIn0"
* * *
maxResults Body Integer Optional
Maximum number of results to return per page.
Example: 10
### Example[​](/reference/api/search#example "Direct link to Example")
Request

```
curl -X POST 'https://{hostname}/api/v3/search' \  
  --header 'Content-Type: application/json' \  
  --header 'Authorization: Bearer <PersonalAccessToken> \  
  --data-raw {  
      "query": "revenue",  
      "filter": "category in [\"JOB\"]",  
      "pageToken": "",  
      "maxResults": 20  
    }'  

```

Response

```
{  
  "sessionId": "6e90f536-d4bd-4ab5-b01e-f81aa4f3002d",  
  "results": [  
    {  
      "category": "job",  
      "jobObject": {  
        "id": "1802c3f8-05cc-a9fa-417b-0539c5d17700",  
        "queriedDatasets": [],  
        "sql": " \"SELECT * FROM test\"",  
        "jobType": "UI_PREVIEW",  
        "user": {  
          "id": "788a3438-db1b-483d-a75f-11b6a5d36f31",  
          "type": "USER",  
          "username": "dremio"  
        },  
        "startTime": "2025-04-14T16:47:03.981Z",  
        "finishTime": "2025-04-14T16:47:03.991Z",  
        "jobState": "COMPLETED",  
        "error": ""  
      }  
    },  
    {  
      "category": "job",  
      "jobObject": {  
        "id": "1802c419-06fb-be51-9cc2-e158ebaeea00",  
        "queriedDatasets": [],  
        "sql": "grant all on engine \"test\" to user \"olivier\"",  
        "jobType": "UI_PREVIEW",  
        "user": {  
          "id": "788a3438-db1b-483d-a75f-11b6a5d36f31",  
          "type": "USER",  
          "username": "dremio"  
        },  
        "startTime": "2025-04-14T16:46:30.717Z",  
        "finishTime": "2025-04-14T16:46:30.730Z",  
        "jobState": "FAILED",  
        "error": "GRANT on ENGINE is not supported in this edition."  
      }  
    }]  
}  

```

### Response Status Codes[​](/reference/api/search#response-status-codes "Direct link to Response Status Codes")
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
500 Internal Server Error  
  

* * *
## Retrieve Search Infrastructure Status[​](/reference/api/search#retrieve-search-infrastructure-status "Direct link to Retrieve Search Infrastructure Status")
Method and URL

```
GET /api/v3/search/status  

```

Retrieves the current state of the search system, including OpenSearch health and indexing status.
### Example Response[​](/reference/api/search#example-response "Direct link to Example Response")

```
{  
  "initializationStatus": {  
    "runningTask": "PLAN_WORKFLOW",  
    "workFlowJson": "...",  
    "upgradeWorkflowState": "Running"  
  },  
  "openSearchState": {  
    "healthStatus": "Yellow",  
    "indices": [  
      {  
        "name": "search-index.1743971124632",  
        "docsCount": 4490,  
        "size": "70.6mb",  
        "health": "green"  
      }  
    ],  
    "aliases": [  
      {  
        "alias": "search-index-alias",  
        "index": "search-index.1743971124632",  
        "writeIndex": false  
      }  
    ]  
  }  
}  

```

### Response Status Codes[​](/reference/api/search#response-status-codes-1 "Direct link to Response Status Codes")
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
500 Internal Server Error  
  

* * *
## Remove All Search Documents[​](/reference/api/search#remove-all-search-documents "Direct link to Remove All Search Documents")
Method and URL

```
POST /api/v3/search/recovery/removeDocuments  

```

Triggers removal of all indexed documents and artifacts. OpenSearch cluster reinitialization is triggered asynchronously.
&gt; _Caution:_ Use only if index corruption or inconsistency is diagnosed.
### Response Status Codes[​](/reference/api/search#response-status-codes-2 "Direct link to Response Status Codes")
200 OK  
  
401 Unauthorized  
  
500 Internal Server Error  
  

### Example Response[​](/reference/api/search#example-response-1 "Direct link to Example Response")

```
{  
  "message": "Document removal request has been initiated. You can check the status by calling the /search/status API."  
}  

```

* * *
## Object Schemas[​](/reference/api/search#object-schemas "Direct link to Object Schemas")
### searchResultObject Object[​](/reference/api/search#searchresultobject-object "Direct link to searchresultobject-object")
Search result object. One of the following fields will be populated based on the result type.
category String
The type of the result object.
Enum: FOLDER, SPACE, TABLE, VIEW, REFLECTION, UDF, SCRIPT, JOB, SOURCE
* * *
catalogObject Object Optional
If the result is a catalog object, this field contains the SearchCatalogObject.
Example: {'{'})'{'{'})'{'}'}) "path": [ "testGlue", "folder", "table" ], "type": "TABLE", "labels": [], "createdAt": "2024-09-11T17:59:19.162Z", "modifiedAt": "2024-09-11T17:59:19.164Z", "columns": [], "owner": {'{'})'{'{'})'{'}'}) "id": "ca63ab73-8ee1-467b-811c-224b8f47b9e0", "type": "USER", "username": "
* * *
jobObject Object Optional
If the result is a job, this field contains the SearchJobObject.
Example: {'{'})'{'{'})'{'}'}) "id": "3f6c6332-18bf-487c-b73e-157e91628aaa", "queriedDatasets": [], "sql": "REFRESH DATASET "source"."test-database"."test-table"", "jobType": "METADATA_REFRESH", "user": {'{'})'{'{'})'{'}'}) "id": "2", "type": "USER", "username": "internal" {'{'})'{'}'}'{'}'}, "startTime": "2025-04-14T15:26:14.825Z", "finishTime": "2025-04-14T15:26:39.421Z", "jobState": "COMPLETED"{'{'})'{'}'}'{'}'}
* * *
reflectionObject Object Optional
If the result is a Reflection, this field contains the SearchReflectionObject.
Example: {'{'})'{'{'})'{'}'}) "id": "31ac58b6-0f2f-4d95-b44b-0f80846a3bd3", "name": "Raw Reflection", "datasetType": "table", "datasetPath": [ "Samples", "samples.dremio.com", "NYC-taxi-trips-iceberg" ], "createdAt": "2025-04-15T17:28:16.281Z", "modifiedAt": "2025-04-15T17:28:16.281Z", "datasetBranch": "" {'{'})'{'}'}'{'}'}
* * *
scriptObject Object Optional
If the result is a script, this field contains the SearchScriptObject.
Example: {'{'})'{'{'})'{'}'}) "id": "1b53bf6c-dd9b-4f16-90e2-23b3c4cfd04f", "name": "test", "owner": {'{'})'{'{'})'{'}'}) "id": "67f66278-d464-4b7f-b564-e3d58a85bbaf", "type": "USER", "username": "internal" {'{'})'{'}'}'{'}'}, "content": "SELECT * FROM\nSamples."samples.dremio.com"."NYC-taxi-trips-iceberg" w\n\n", "createdAt": "2025-04-14T20:48:29.470Z", "modifiedAt": "2025-04-15T08:14:45.724Z" {'{'})'{'}'}'{'}'}
* * *
### catalogObject Object[​](/reference/api/search#catalogobject-object "Direct link to catalogobject-object")
Attributes for folders, tables, functions, and views.
path Array of String
Namespace path to the object.
Example: ["Samples","samples.dremio.com"]
* * *
branch String Optional
Versioned branch name.
Example: "main"
* * *
type String
Enum: FOLDER, SPACE, TABLE, FUNCTION, VIEW.
* * *
labels Array of String Optional
User-defined labels.
Example: ["eng","test"]
* * *
wiki String Optional
Markdown-formatted documentation or notes.
Example:

```
### Orders Table  
  
This table contains **monthly sales data** by region.  

```

* * *
owner Object
User or role object.
Example: {'{'})'{'{'})'{'}'}) "id": "788a3438-db1b-483d-a75f-11b6a5d36f31", "type": "USER", "username": "dremio" {'{'})'{'}'}'{'}'}
* * *
createdAt DateTime
Creation timestamp (RFC 3339).
Example: "2025-04-14T16:47:03.981Z"
* * *
modifiedAt DateTime
Last modification timestamp (RFC 3339).
Example: "2025-04-14T16:47:03.981Z"
* * *
columns Array of String Optional
Column names.
Example: ["a", "b"]
* * *
functionSql String Optional
SQL definition for functions.
Example: For function created with:

```
-- Example function  
CREATE FUNCTION total(a INT, b INT) RETURNS INT RETURN a + b  

```

The functionSql is:

```
SELECT a + b  

```

* * *
### jobObject Object[​](/reference/api/search#jobobject-object "Direct link to jobobject-object")
Attributes for jobs.
id String
Unique identifier for the job.
Example: "1802c3f8-05cc-a9fa-417b-0539c5d17700"
* * *
queriedDatasets Array of Object
Datasets queried in the job.
Example: [ {'{'})'{'{'})'{'}'}) "datasetType": "TABLE", "datasetPath": [ "Samples", "samples.dremio.com", "NYC-taxi-trips-iceberg" ] {'{'})'{'}'}'{'}'}]
* * *
sql String
Executed SQL statement.
Example: "SELECT * FROM Samples."samples.dremio.com"."NYC-taxi-trips-iceberg" LIMIT 5"
* * *
jobType String
Type of job: UI_RUN, JDBC, METADATA_REFRESH, etc.
Example: "UI_RUN"
* * *
user Object
User or role who ran the job.
Example: {'{'})'{'{'})'{'}'}) "id": "788a3438-db1b-483d-a75f-11b6a5d36f31", "type": "USER", "username": "dremio" {'{'})'{'}'}'{'}'}
* * *
startTime DateTime
Job start timestamp.
Example: "2025-04-14T16:47:03.981Z"
* * *
finishTime DateTime
Job completion timestamp.
Example: "2025-04-14T16:47:03.981Z"
* * *
jobState String
Job status: COMPLETED, FAILED, CANCELED.
Example: "COMPLETED"
* * *
error String Optional
Error message if the job failed.
Example: "Object 'Samples.samples.dremio.com.NYC-taxi-trips' not found. Please check that it exists in the selected context."
* * *
### scriptObject Object[​](/reference/api/search#scriptobject-object "Direct link to scriptobject-object")
Attributes for SQL scripts.
id String
Script identifier.
Example: "396eac66-f5d5-4f46-9c51-9d26dd3fc612"
* * *
name String
Name of the script.
Example: "test"
* * *
owner Object
User or role object.
Example: {'{'})'{'{'})'{'}'}) "id": "788a3438-db1b-483d-a75f-11b6a5d36f31", "type": "USER", "username": "dremio" {'{'})'{'}'}'{'}'}
* * *
content String
SQL content.
Example:

```
SELECT *  
FROM Samples."samples.dremio.com"."NYC-taxi-trips.csv"  
LIMIT 1  

```

* * *
createdAt DateTime
Creation timestamp.
Example: "2025-04-14T16:47:03.981Z"
* * *
modifiedAt DateTime
Last modified timestamp.
Example: "2025-04-14T16:47:03.981Z"
* * *
### reflectionObject Object[​](/reference/api/search#reflectionobject-object "Direct link to reflectionobject-object")
Attributes for Reflections.
id String
Reflection ID.
Example: "8711a739-3cc5-4830-8f71-8ea5525291d0"
* * *
name String
Name of the Reflection.
Example: "Raw Reflection"
* * *
datasetType String
Enum: TABLE, VIEW.
Example: "TABLE"
* * *
datasetPath Array of String
Path to the dataset.
Example: ["Samples", "samples.dremio.com", "NYC-taxi-trips-iceberg"]
* * *
datasetBranch String
Dataset branch.
Example: "main"
* * *
createdAt DateTime
Creation timestamp.
Example: "2025-04-14T16:47:03.981Z"
* * *
modifiedAt DateTime
Last modified time.
* * *
### UserOrRole Object[​](/reference/api/search#userorrole-object "Direct link to userorrole-object")
Used in owner or user fields.
id String
Unique ID of the user or role.
* * *
type String
Enum: USER, ROLE.
* * *
username String Conditional
Present for USER.
Example: "data_admin"
* * *
roleName String Conditional
Present for ROLE.
Example: "ADMIN"
Was this page helpful?
[Previous Scripts](/reference/api/scripts)[Next Source](/reference/api/source)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Scripts](/reference/api/scripts)[Next Source](/reference/api/source)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fsearch%2F&_biz_t=1777951110877&_biz_i=Search%20%7C%20Dremio%20Documentation&_biz_n=1546&rnd=233847&cdn_o=a&_biz_z=1777951110878)
