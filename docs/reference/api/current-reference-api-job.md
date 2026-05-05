---
url: /reference/api/job
title: "Job | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65345.949491541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Job

Version: current [26.x]
On this page
# Job
Use the Job API to get information about a specific job and cancel a running job.
To retrieve results for a specific job, use the [Job Results](/reference/api/job) endpoint.
Job Object

```
{  
  "jobState": "COMPLETED",  
  "rowCount": 1003904,  
  "errorMessage": "",  
  "startedAt": "2022-12-13T18:34:14.069Z",  
  "endedAt": "2022-12-13T18:35:09.963Z",  
  "acceleration": {  
    "reflectionRelationships": [  
      {  
        "datasetId": "ef99ab32-aa47-4f4c-4d1c-d40f8035b846",  
        "reflectionId": "63fd1c83-5cde-4133-9e2d-60543550580a",  
        "relationship": "CONSIDERED"  
      },  
      {  
        "datasetId": "596c489c-7949-485b-92a9-c32a4cb51fa2",  
        "reflectionId": "65747723-2319-430p-8a36-3d40b26f45ae",  
        "relationship": "MATCHED"  
      }  
    ]  
  },  
  "queryType": "UI_RUN",  
  "queueName": "LARGE",  
  "queueId": "f6a5ef4f-ce5c-4be4-95b2-092c36721dc5",  
  "resourceSchedulingStartedAt": "2022-12-13T18:34:14.977Z",  
  "resourceSchedulingEndedAt": "2022-12-13T18:34:14.995Z",  
  "cancellationReason": ""  
}  

```

## Job Attributes[​](/reference/api/job#job-attributes "Direct link to Job Attributes")
jobState String
The job's status. Values `COMPLETED`, `CANCELED`, and `FAILED` are final; other values are considered in running state.
Enum: NOT_SUBMITTED, STARTING, RUNNING, COMPLETED, CANCELED, FAILED, CANCELLATION_REQUESTED, PLANNING, PENDING, METADATA_RETRIEVAL, QUEUED, ENGINE_START, EXECUTION_PLANNING, INVALID_STATE
Example: COMPLETED
* * *
rowCount Integer
For jobs with `COMPLETED` jobState, the number of rows the job returned. If jobState is not `COMPLETED`, rowCount value is `0`.
Example: 11
* * *
errorMessage String
For jobs with `FAILED` jobState, the error that caused the failure. For all other jobs, the errorMessage value is empty.
Example: Column 'user_id' not found in any table.
* * *
startedAt String
Date and time when the job started, in UTC format.
Example: 2022-12-09T20:16:15.694Z
* * *
endedAt String
Date and time when the job ended, in UTC format.
Example: 2022-12-09T20:16:19.939Z
* * *
[acceleration](/reference/api/job#attributes-of-the-acceleration-object) Object
For jobs with applicable Reflections, provides more information about the Reflections and their relationships to the job. For jobs that do not have applicable Reflections, the response does not include the acceleration object.
* * *
queryType String
Job type. If the job's queryType is not set, the value is `UNKNOWN`.
Enum: UI_RUN, UI_PREVIEW, UI_INTERNAL_PREVIEW, UI_INTERNAL_RUN, UI_EXPORT, ODBC, JDBC, REST, ACCELERATOR_CREATE, ACCELERATOR_DROP, UNKNOWN, PREPARE_INTERNAL, ACCELERATOR_EXPLAIN, UI_INITIAL_PREVIEW
Example: UI_RUN
* * *
queueName String
Name of the workload management (WLM) queue to which the job was routed.
Example: SMALL
* * *
queueId String
ID of the workload management (WLM) queue to which the job was routed.
Example: f6a5ef4f-ce5c-4be4-95b2-092c36721dc5
* * *
resourceSchedulingStartedAt String
Date and time when the Dremio engine started scheduling the job.
Example: 2022-12-09T20:16:16.141Z
* * *
resourceSchedulingEndedAt String
Date and time when Dremio engine scheduling ended for the job.
Example: 2022-12-09T20:16:16.162Z
* * *
cancellationReason String
For canceled jobs, the reason for the cancellation. For all other jobs, the cancellationReason value is empty.
Example: Query was cancelled due to low memory.
#### Attributes of the `acceleration` Object[​](/reference/api/job#attributes-of-the-acceleration-object "Direct link to attributes-of-the-acceleration-object")
[reflectionRelationships](/reference/api/job#attributes-of-objects-in-the-reflectionrelationships-array) Array of Object
Information about the dataset, Reflection, and type of relationship for each applicable Reflection.
#### Attributes of Objects in the `reflectionRelationships` Array[​](/reference/api/job#attributes-of-objects-in-the-reflectionrelationships-array "Direct link to attributes-of-objects-in-the-reflectionrelationships-array")
datasetId String (UUID)
Unique identifier of the dataset associated with the Reflection.
Example: 596c489c-7949-485b-92a9-c32a4cb51fa2
* * *
reflectionId String (UUID)
Unique identifier of the Reflection.
Example: 65747723-2319-430p-8a36-3d40b26f45ae
* * *
relationship String
Type of relationship between the Reflection and the job.
Enum: CONSIDERED, MATCHED, CHOSEN
Example: MATCHED
## Retrieve a Job[​](/reference/api/job#retrieve-a-job "Direct link to Retrieve a Job")
Retrieve the specified job.
Method and URL

```
GET /api/v3/job/{id}  

```

### Parameters[​](/reference/api/job#parameters "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the job to retrieve. Get the job ID from responses to [SQL API](/reference/api/sql) requests.
Example: 6j6c34cf-9drf-b07a-5ab7-abea69a66d00
### Example Request[​](/reference/api/job#example-request "Direct link to Example Request")

```
curl -X GET 'https://{hostname}/api/v3/job/6j6c34cf-9drf-b07a-5ab7-abea69a66d00' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Example Response for a COMPLETED Job

```
{  
  "jobState": "COMPLETED",  
  "rowCount": 1003904,  
  "errorMessage": "",  
  "startedAt": "2022-12-13T18:34:14.069Z",  
  "endedAt": "2022-12-13T18:35:09.963Z",  
  "acceleration": {  
    "reflectionRelationships": [  
      {  
        "datasetId": "ef99ab32-aa47-4f4c-4d1c-d40f8035b846",  
        "reflectionId": "63fd1c83-2319-5962-8a36-60543550580a",  
        "relationship": "CONSIDERED"  
      },  
      {  
        "datasetId": "596c489c-7949-485b-92a9-c32a4cb51fa2",  
        "reflectionId": "65747723-4133-9e2d-3k86-3d40b26f45ae",  
        "relationship": "MATCHED"  
      }  
    ]  
  },  
  "queryType": "UI_RUN",  
  "queueName": "LARGE",  
  "queueId": "f6a5ef4f-ce5c-4be4-95b2-092c36721dc5",  
  "resourceSchedulingStartedAt": "2022-12-13T18:34:14.977Z",  
  "resourceSchedulingEndedAt": "2022-12-13T18:34:14.995Z",  
  "cancellationReason": ""  
}  

```

Example Response for a CANCELED Job

```
{  
    "jobState": "CANCELED",  
    "rowCount": 0,  
    "errorMessage": "",  
    "startedAt": "2023-02-01T15:07:16.165Z",  
    "endedAt": "2023-02-01T15:07:18.691Z",  
    "queryType": "UI_RUN",  
    "queueName": "LARGE",  
    "queueId": "6ed7841e-e446-4536-8d47-361508e78c18",  
    "resourceSchedulingStartedAt": "2023-02-01T15:07:17.124Z",  
    "resourceSchedulingEndedAt": "2023-02-01T15:07:17.140Z",  
    "cancellationReason": "Query cancelled by user 'USERNAME'"  
}  

```

Example Response for a FAILED Job

```
{  
    "jobState": "FAILED",  
    "rowCount": 0,  
    "errorMessage": "ExecutionSetupException: One or more nodes lost connectivity during query.  Identified nodes were [automaster-2.c.dremio-1093.internal:0].",  
    "startedAt": "2023-02-01T16:36:35.897Z",  
    "endedAt": "2023-02-01T16:37:36.098Z",  
    "queryType": "UI_RUN",  
    "queueName": "LARGE",  
    "queueId": "3d04235f-3610-4dd3-95b6-6a29542eb600",  
    "resourceSchedulingStartedAt": "2023-02-01T16:36:37.389Z",  
    "resourceSchedulingEndedAt": "2023-02-01T16:36:37.437Z",  
    "cancellationReason": ""  
}  

```

Example Response for a RUNNING Job

```
{  
    "jobState": "RUNNING",  
    "rowCount": 2682474,  
    "errorMessage": "",  
    "startedAt": "2023-02-01T21:30:10.755Z",  
    "queryType": "ACCELERATOR_CREATE",  
    "queueName": "LARGE",  
    "queueId": "f64ff0a0-a925-4dc9-be60-e0703ce3aa24",  
    "resourceSchedulingStartedAt": "2023-02-01T21:30:11.743Z",  
    "resourceSchedulingEndedAt": "2023-02-01T21:30:11.798Z",  
    "cancellationReason": ""  
}  

```

### Response Status Codes[​](/reference/api/job#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
403 Forbidden   
  
404 Not Found   
  

## Cancel a Running Job[​](/reference/api/job#cancel-a-running-job "Direct link to Cancel a Running Job")
Cancel the specified running job.
Canceling a job does not delete the job object. You can still retrieve job objects for canceled jobs.
Method and URL

```
POST /api/v3/job/{id}/cancel  

```

### Parameters[​](/reference/api/job#parameters-1 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the job to cancel. Get the job ID from responses to [SQL API](/reference/api/sql) requests.
Example: 6j6c34cf-9drf-b07a-5ab7-abea69a66d00
Example request

```
curl -X POST 'https://{hostname}/api/v3/job/6j6c34cf-9drf-b07a-5ab7-abea69a66d00/cancel' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Example response

```
No response  

```

### Response Status Codes[​](/reference/api/job#response-status-codes-1 "Direct link to Response Status Codes")
204 No Content   
  
400 Bad Request   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous External Token Providers](/reference/api/external-token-providers)[Next Job Results](/reference/api/job)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous External Token Providers](/reference/api/external-token-providers)[Next Job Results](/reference/api/job)
