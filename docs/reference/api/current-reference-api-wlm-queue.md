---
url: /reference/api/wlm/queue
title: "Queue | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64243.527858833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Workload Management](/reference/api/wlm)
  * Queue

Version: current [26.x]
On this page
# Queue Enterprise
Use the Workload Management (WLM) API to create, retrieve, update, and delete WLM queues.
Queue Object

```
{  
  "data": [  
    {  
      "id": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "tag": "BNGRmgfEnDg=",  
      "name": "High Cost Reflections",  
      "maxMemoryPerNodeBytes": 8589934592,  
      "maxQueryMemoryPerNodeBytes": 8589934592,  
      "cpuTier": "BACKGROUND",  
      "maxAllowedRunningJobs": 10,  
      "maxStartTimeoutMs": 300000,  
      "maxRunTimeoutMs": 300000,  
      "engineId": "DATA"  
    },  
    {  
      "id": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "tag": "HM2D9XElG3U=",  
      "name": "Low Cost Reflections",  
      "cpuTier": "BACKGROUND",  
      "maxAllowedRunningJobs": 10,  
      "maxStartTimeoutMs": 86400000  
    },  
    {  
      "id": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "tag": "p22KaFcaB7g=",  
      "name": "COPY & OPTIMIZATION Queue",  
      "maxMemoryPerNodeBytes": 4294967296,  
      "maxQueryMemoryPerNodeBytes": 4294967296,  
      "cpuTier": "MEDIUM",  
      "maxAllowedRunningJobs": 2,  
      "maxStartTimeoutMs": 300000,  
      "engineId": "YARN"  
    },  
    {  
      "id": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "tag": "//gNL3Ta2bY=",  
      "name": "Low Cost User Queries",  
      "cpuTier": "MEDIUM",  
      "maxAllowedRunningJobs": 100,  
      "maxStartTimeoutMs": 300000  
    },  
    {  
      "id": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "tag": "wa+vYmA73gU=",  
      "name": "High Cost User Queries",  
      "cpuTier": "MEDIUM",  
      "maxAllowedRunningJobs": 10,  
      "maxStartTimeoutMs": 300000  
    }  
  ]  
}  

```

## Queue Attributes[​](/reference/api/wlm/queue#queue-attributes "Direct link to Queue Attributes")
[data](/reference/api/wlm/queue#attributes-of-objects-in-the-data-array) Array of Object
List of queue objects in the Dremio instance.
#### Attributes of Objects in the `data` Array[​](/reference/api/wlm/queue#attributes-of-objects-in-the-data-array "Direct link to attributes-of-objects-in-the-data-array")
id String (UUID)
Unique identifier of the queue, in UTC format.
Example: 1990e713-3cd2-458c-89e1-68995c2c1047
* * *
tag String
Unique identifier of the version of the queue. Dremio changes the tag whenever the queue changes and uses the tag to ensure that PUT requests apply to the most recent version of the queue.
Example: BNGRmgfEnDg=
* * *
name String
User-provided name for the queue.
Example: High Cost Reflections
* * *
maxMemoryPerNodeBytes Integer
Total memory (in bytes) that all queries running in parallel in a given queue can use per executor node.
* * *
maxQueryMemoryPerNodeBytes Integer
Total memory (in bytes) that each query in a given queue can use per executor node.
Example: 8589934592
* * *
cpuTier String
Amount of CPU time that threads get compared to other threads.
Enum: BACKGROUND, LOW, MEDIUM, HIGH, CRITICAL
Example: BACKGROUND
* * *
maxAllowedRunningJobs Integer
Number of queries that are allowed to run in parallel.
Example: 10
* * *
maxStartTimeoutMs Integer
Maximum length of time that a query can wait in the queue before it is cancelled, in milliseconds.
Example: 300000
* * *
maxRunTimeoutMs Integer
Maximum length of time that a query can run before it is cancelled, in milliseconds.
Example: 300000
* * *
engineId String
Name of the execution engine to which the queue's queries are routed. If you do not specify an engineId, the queue's queries run on any engine that is available at the time of execution. The engineID attribute is omitted from the queue object if no engine is specified.
Example: DATA
## Create a Queue[​](/reference/api/wlm/queue#create-a-queue "Direct link to Create a Queue")
Create a WLM queue.
Method and URL

```
POST /api/v3/wlm/queue  

```

### Parameters[​](/reference/api/wlm/queue#parameters "Direct link to Parameters")
name Body String
User-provided name for the queue.
Example: High Cost Reflections
* * *
maxMemoryPerNodeBytes Body Integer Optional
Total memory (in bytes) that all queries running in parallel in a given queue can use per executor node.
Example: 8589934592
* * *
maxQueryMemoryPerNodeBytes Body Integer Optional
Total memory (in bytes) that each query in a given queue can use per executor node.
Example: 8589934592
* * *
cpuTier Body String Optional
Amount of CPU time that threads should get compared to other threads. Default is `MEDIUM`.
Enum: BACKGROUND, LOW, MEDIUM, HIGH, CRITICAL
Example: BACKGROUND
* * *
maxAllowedRunningJobs Body Integer Optional
Number of queries that are allowed to run in parallel.
Example: 10
* * *
maxStartTimeoutMs Body Integer Optional
Maximum length of time that a query can wait in the queue before it is cancelled, in milliseconds.
Example: 300000
* * *
maxRunTimeoutMs Body Integer Optional
Maximum length of time that a query can run before it is cancelled, in milliseconds.
Example: 300000
* * *
engineId Body String Optional
Name of the execution engine to which the queue's queries should be routed. If you do not specify an engineId, the queue's queries run on any engine that is available at the time of execution.
Example: DATA
### Example[​](/reference/api/wlm/queue#example "Direct link to Example")
Request

```
curl -X POST 'https://{hostname}/api/v3/wlm/queue' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "name": "High Cost Reflections",  
  "maxQueryMemoryPerNodeBytes": 8589934592,  
  "maxMemoryPerNodeBytes": 8589934592,  
  "cpuTier": "BACKGROUND",  
  "maxAllowedRunningJobs": 10,  
  "maxStartTimeoutMs": 300000,  
  "maxRunTimeoutMs": 300000,  
  "engineId": "DATA"  
}'  

```

Response

```
{  
  "id": "1990e713-3cd2-458c-89e1-68995c2c1047",  
  "tag": "BNGRmgfEnDg=",  
  "name": "High Cost Reflections",  
  "maxMemoryPerNodeBytes": 8589934592,  
  "maxQueryMemoryPerNodeBytes": 8589934592,  
  "cpuTier": "BACKGROUND",  
  "maxAllowedRunningJobs": 10,  
  "maxStartTimeoutMs": 300000,  
  "maxRunTimeoutMs": 300000,  
  "engineId": "DATA"  
}  

```

### Response Status Codes[​](/reference/api/wlm/queue#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
405 Method Not Allowed   
  
409 Conflict   
  

## Retrieve All Queues[​](/reference/api/wlm/queue#retrieve-all-queues "Direct link to Retrieve All Queues")
Retrieve all WLM queues.
Method and URL

```
GET /api/v3/wlm/queue  

```

### Example[​](/reference/api/wlm/queue#example-1 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/wlm/queue' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "id": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "tag": "BNGRmgfEnDg=",  
      "name": "High Cost Reflections",  
      "maxMemoryPerNodeBytes": 8589934592,  
      "maxQueryMemoryPerNodeBytes": 8589934592,  
      "cpuTier": "BACKGROUND",  
      "maxAllowedRunningJobs": 10,  
      "maxStartTimeoutMs": 300000,  
      "maxRunTimeoutMs": 300000,  
      "engineId": "DATA"  
    },  
    {  
      "id": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "tag": "HM2D9XElG3U=",  
      "name": "Low Cost Reflections",  
      "cpuTier": "BACKGROUND",  
      "maxAllowedRunningJobs": 10,  
      "maxStartTimeoutMs": 86400000  
    },  
    {  
      "id": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "tag": "p22KaFcaB7g=",  
      "name": "COPY & OPTIMIZATION Queue",  
      "maxMemoryPerNodeBytes": 4294967296,  
      "maxQueryMemoryPerNodeBytes": 4294967296,  
      "cpuTier": "MEDIUM",  
      "maxAllowedRunningJobs": 2,  
      "maxStartTimeoutMs": 300000,  
      "engineId": "YARN"  
    },  
    {  
      "id": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "tag": "//gNL3Ta2bY=",  
      "name": "Low Cost User Queries",  
      "cpuTier": "MEDIUM",  
      "maxAllowedRunningJobs": 100,  
      "maxStartTimeoutMs": 300000  
    },  
    {  
      "id": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "tag": "wa+vYmA73gU=",  
      "name": "High Cost User Queries",  
      "cpuTier": "MEDIUM",  
      "maxAllowedRunningJobs": 10,  
      "maxStartTimeoutMs": 300000  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/wlm/queue#response-status-codes-1 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve a Queue by ID[​](/reference/api/wlm/queue#retrieve-a-queue-by-id "Direct link to Retrieve a Queue by ID")
Retrieve a specific WLM queue by the queue's ID.
Method and URL

```
GET /api/v3/wlm/queue/{id}  

```

### Parameters[​](/reference/api/wlm/queue#parameters-1 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the queue you want to retrieve, in UTC format.
Example: 1990e713-3cd2-458c-89e1-68995c2c1047
### Example[​](/reference/api/wlm/queue#example-2 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/wlm/queue/1990e713-3cd2-458c-89e1-68995c2c1047' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "1990e713-3cd2-458c-89e1-68995c2c1047",  
  "tag": "BNGRmgfEnDg=",  
  "name": "High Cost Reflections",  
  "maxMemoryPerNodeBytes": 8589934592,  
  "maxQueryMemoryPerNodeBytes": 8589934592,  
  "cpuTier": "BACKGROUND",  
  "maxAllowedRunningJobs": 10,  
  "maxStartTimeoutMs": 300000,  
  "maxRunTimeoutMs": 300000,  
  "engineId": "DATA"  
}  

```

### Response Status Codes[​](/reference/api/wlm/queue#response-status-codes-2 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve a Queue by Name[​](/reference/api/wlm/queue#retrieve-a-queue-by-name "Direct link to Retrieve a Queue by Name")
Retrieve a specific WLM queue by the queue's name.
Method and URL

```
GET /api/v3/wlm/queue/by-name/{name}  

```

### Parameters[​](/reference/api/wlm/queue#parameters-2 "Direct link to Parameters")
name Path String
Name for the queue you want to retrieve. If the queue name includes special characters for a URL, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, "Dremio University" should be `Dremio%20University` in the URL path.
Example: High%20Cost%20Reflections
### Example[​](/reference/api/wlm/queue#example-3 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/wlm/queue/by-name/High%20Cost%20Reflections' \  
--header 'Authorization: Bearer <dremioAccessToken>'\  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "1990e713-3cd2-458c-89e1-68995c2c1047",  
  "tag": "BNGRmgfEnDg=",  
  "name": "High Cost Reflections",  
  "maxMemoryPerNodeBytes": 8589934592,  
  "maxQueryMemoryPerNodeBytes": 8589934592,  
  "cpuTier": "BACKGROUND",  
  "maxAllowedRunningJobs": 10,  
  "maxStartTimeoutMs": 300000,  
  "maxRunTimeoutMs": 300000,  
  "engineId": "DATA"  
}  

```

### Response Status Codes[​](/reference/api/wlm/queue#response-status-codes-3 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Update a Queue[​](/reference/api/wlm/queue#update-a-queue "Direct link to Update a Queue")
Update the specified WLM queue.
Method and URL

```
PUT /api/v3/wlm/queue/{id}  

```

### Parameters[​](/reference/api/wlm/queue#parameters-3 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the queue you want to update, in UTC format.
Example: 1990e713-3cd2-458c-89e1-68995c2c1047
* * *
tag Body String
Unique identifier of the version of the queue to update. Dremio uses the tag to ensure that you are updating the most recent version of the queue.
Example: BNGRmgfEnDg=
* * *
name Body String
User-provided name for the queue.
Example: High Cost Reflections
* * *
maxMemoryPerNodeBytes Body Integer Optional
Total memory (in bytes) that all queries running in parallel in a given queue can use per executor node. If you omit the maxMemoryPerNodeBytes parameter in a PUT request, Dremio removes the existing maxMemoryPerNodeBytes value from the queue. To keep the existing value while making other updates, include the existing maxMemoryPerNodeBytes parameter and value in the PUT request.
Example: 8589934592
* * *
maxQueryMemoryPerNodeBytes Body Integer Optional
Total memory (in bytes) that each query in a given queue can use per executor node. If you omit the maxQueryMemoryPerNodeBytes parameter in a PUT request, Dremio removes the existing maxQueryMemoryPerNodeBytes value from the queue. To keep the existing value while making other updates, include the existing maxQueryMemoryPerNodeBytes parameter and value in the PUT request.
Example: 8589934592
* * *
cpuTier Body String Optional
Amount of CPU time that threads should get compared to other threads. Default is `MEDIUM`. If you omit the cpuTier parameter in a PUT request, Dremio replaces it with the default value. To keep the existing setting while making other updates, include the existing cpuTier parameter and setting in the PUT request.
Enum: BACKGROUND, LOW, MEDIUM, HIGH, CRITICAL
Example: LOW
* * *
maxAllowedRunningJobs Body Integer Optional
Number of queries that are allowed to run in parallel. If you omit the maxAllowedRunningJobs parameter in a PUT request, Dremio removes the existing maxAllowedRunningJobs value from the queue. To keep the existing value while making other updates, include the existing maxAllowedRunningJobs parameter and value in the PUT request.
Example: 100
* * *
maxStartTimeoutMs Body Integer Optional
Maximum length of time that a query can wait in the queue before it is cancelled, in milliseconds. If you omit the maxStartTimeoutMs parameter in a PUT request, Dremio removes the existing maxStartTimeoutMs setting from the queue. To keep the existing setting while making other updates, include the existing maxStartTimeoutMs parameter and setting in the PUT request.
Example: 300000
* * *
maxRunTimeoutMs Body Integer Optional
Maximum length of time that a query is allowed to run before it is cancelled, in milliseconds. If you omit the maxRunTimeoutMs parameter in a PUT request, Dremio removes the existing maxRunTimeoutMs value from the queue. To keep the existing value while making other updates, include the existing maxRunTimeoutMs parameter and value in the PUT request.
Example: 300000
* * *
engineId Body String
Name of the execution engine to which the queue's queries should be routed. If you do not specify an engineId, the queue's queries run on any engine that is available at the time of execution.
Example: DATA
### Example[​](/reference/api/wlm/queue#example-4 "Direct link to Example")
Request

```
curl -X PUT 'https://{hostname}/api/v3/wlm/queue/1990e713-3cd2-458c-89e1-68995c2c1047' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tag": "BNGRmgfEnDg=",  
  "name": "High Cost Reflections",  
  "maxMemoryPerNodeBytes": 8589934592,  
  "maxQueryMemoryPerNodeBytes": 8589934592,  
  "cpuTier": "LOW",  
  "maxAllowedRunningJobs": 100,  
  "maxStartTimeoutMs": 300000,  
  "maxRunTimeoutMs": 300000,  
  "engineId": "DATA"  
}'  

```

Response

```
{  
  "id": "1990e713-3cd2-458c-89e1-68995c2c1047",  
  "tag": "xQh6KNyEjus=",  
  "name": "High Cost Reflections",  
  "maxMemoryPerNodeBytes": 8589934592,  
  "maxQueryMemoryPerNodeBytes": 8589934592,  
  "cpuTier": "LOW",  
  "maxAllowedRunningJobs": 100,  
  "maxStartTimeoutMs": 300000,  
  "maxRunTimeoutMs": 300000,  
  "engineId": "DATA"  
}  

```

### Response Status Codes[​](/reference/api/wlm/queue#response-status-codes-4 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  
500 Internal Server Error   
  

## Delete a Queue[​](/reference/api/wlm/queue#delete-a-queue "Direct link to Delete a Queue")
Delete the specified WLM queue.
Method and URL

```
DELETE /api/v3/wlm/queue/{id}  

```

### Parameters[​](/reference/api/wlm/queue#parameters-4 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the queue that you want to delete, in UTC format.
Example: 1990e713-3cd2-458c-89e1-68995c2c1047
### Example[​](/reference/api/wlm/queue#example-5 "Direct link to Example")
Request

```
curl -X DELETE 'https://{hostname}/api/v3/wlm/queue/1990e713-3cd2-458c-89e1-68995c2c1047' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
No response  

```

### Response Status Codes[​](/reference/api/wlm/queue#response-status-codes-5 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
405 Method Not Allowed   
  

Was this page helpful?
[Previous Workload Management](/reference/api/wlm)[Next Rule](/reference/api/wlm/rule)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Workload Management](/reference/api/wlm)[Next Rule](/reference/api/wlm/rule)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fwlm%2Fqueue%2F&_biz_t=1777950564191&_biz_i=Queue%20%7C%20Dremio%20Documentation&_biz_n=472&rnd=139246&cdn_o=a&_biz_z=1777950564191)
