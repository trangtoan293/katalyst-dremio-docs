---
slug: /reference/api/reflections/reflection-recommendations
title: "Recommendations | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64242.620746416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Reflection](/reference/api/reflections)
  * Recommendations

Version: current [26.x]
On this page
# Recommendations
Use the Recommendations API to get job-based recommendations and get and create usage-based Reflections that can accelerate your queries.
Getting **job-based recommendations** requires making the following two API requests:
  1. [Submit the job IDs of jobs that have run SQL queries](/reference/api/reflections/reflection-recommendations). These are job IDs of the queries for which you want to retrieve recommendations in further requests. This request returns the job ID to use in the second request.
  2. [Retrieve job-based recommendations for Reflections](/reference/api/reflections/reflection-recommendations) that can accelerate your queries. Use the job ID that was returned in your first request to make the request for recommendations.


Creating Reflections from **usage-based recommendations** requires making the following two API requests:
  1. [Retrieve usage-based recommendations](/reference/api/reflections/reflection-recommendations) for Reflections. This request returns the parameters to use in the body of the second request.
  2. [Create Reflections from usage-based recommendations](/reference/api/reflections/reflection-recommendations) that can accelerate your queries from the usage-based recommendations. Use the recommendation ID and Reflection request body that were returned in your first request to create the Reflections.


The [`POST /api/v3/reflection/recommendations` endpoint](/reference/api/reflections/reflection-recommendations) is deprecated. In its place, use the job-based and usage-based endpoints described on this page to retrieve and refresh Reflection recommendations.
Recommendation Object (Raw Reflection)

```
{  
  "data": [  
    {  
      "viewRequestBody": {  
        "entityType": "dataset",  
        "type": "VIRTUAL_DATASET",  
        "path": [  
          "azure_3",  
          "table_2"  
        ],  
        "sql": "--Default Raw Reflection"  
      },  
      "viewRequestEndpoint": "POST {hostname}/api/v3/catalog",  
      "reflectionRequestBody": {  
        "type": "RAW",  
        "name": "raw_47f54460-543f-430f-a9e5-ca71d246265e",  
        "datasetId": "45b9d98b-b0dc-4dd2-a271-d971ae998c0c",  
        "enabled": true,  
        "arrowCachingEnabled": false,  
        "dimensionFields": [],  
        "measureFields": [],  
        "displayFields": [  
          {  
            "name": "passenger_count"  
          },  
          {  
            "name": "EXPR$1"  
          }  
        ],  
        "entityType": "reflection"  
      },  
      "reflectionRequestEndpoint": "POST {hostname}/api/v3/reflection",  
      "jobIds": [  
        "13ffb629-9f0e-4265-97df-99bf0d425813"  
      ],  
      "jobCount": 1,  
      "recommendationId": "9be8a451-4190-4618-a72e-9932f790c744",  
      "reflectionScore": 50.67,  
      "avgImprovementFactor": 10.43,  
      "avgImprovementMs": 7196  
    }  
  ],  
  "canAlterReflections": true  
}  

```

Recommendation Object (Aggregation Reflection)

```
{  
  "data": [  
    {  
      "viewRequestBody": {  
        "entityType": "dataset",  
        "type": "VIRTUAL_DATASET",  
        "path": [  
          "recommended_view",  
          "view_1"  
        ],  
        "sql": "SELECT * FROM Samples.samples.dremio.com.\"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC"  
      },  
      "viewRequestEndpoint": "POST {hostname}/api/v3/catalog",  
      "reflectionRequestBody": {  
        "type": "AGGREGATION",  
        "name": "agg_0e0c4ab9-def7-48da-81f1-ca8c1da11ed4",  
        "datasetId": "2df93b5a-eb46-4687-8460-b61e471d20ef",  
        "enabled": true,  
        "arrowCachingEnabled": false,  
        "dimensionFields": [  
          {  
            "name": "passenger_count",  
            "granularity": "DATE"  
          }  
        ],  
        "measureFields": [  
          {  
            "name": "fare_amount",  
            "measureTypeList": [  
              "SUM",  
              "COUNT"  
            ]  
          }  
        ],  
        "displayFields": [],  
        "entityType": "reflection"  
      },  
      "reflectionRequestEndpoint": "POST {hostname}/api/v3/reflection",  
      "jobIds": [  
        "1ded81f8-4d06-4d09-8163-9e2517027d8d"  
      ],  
      "jobCount": 1,  
      "recommendationId": "1855d2dd-4106-4359-a97a-e08a916096e6",  
      "reflectionScore": 60.12,  
      "avgImprovementFactor": 8.39,  
      "avgImprovementMs": 5400  
    }  
  ],  
  "canAlterReflections": true  
}  

```

## Recommendation Attributes[​](/reference/api/reflections/reflection-recommendations)
[data](/reference/api/reflections/reflection-recommendations) Array of Object
List of recommended Reflection objects for the submitted job IDs.
* * *
canAlterReflections Boolean
If the columns in the recommended Reflection can be edited, added, and removed, `true`. Otherwise, `false`.
Example: true
#### Attributes of Objects in the `data` Array[​](/reference/api/reflections/reflection-recommendations)
[viewRequestBody](/reference/api/reflections/reflection-recommendations) Object
The fields to include in a request to the [Catalog API](/reference/api/catalog/view) to create the view on which to define the recommended Reflection.
* * *
viewRequestEndpoint String
The endpoint to use when submitting a request to the [Catalog API](/reference/api/catalog/view) to create the view on which to define the recommended Reflection.
* * *
[reflectionRequestBody](/reference/api/reflections/reflection-recommendations) Object
The fields to include in a request to the [Reflection API](/reference/api/reflections) to create the recommended Reflection.
* * *
reflectionRequestEndpoint String
The endpoint to use when submitting the request to the [Reflection API](/reference/api/reflections) to create the recommended Reflection.
* * *
jobIds Array of String
The job IDs of the queries for which the Reflection recommendations are given.
Example: ["13ffb629-9f0e-4265-97df-99bf0d425813"]
* * *
jobCount Array of String
The number of jobs for which Reflection recommendations are given.
Example: 1
* * *
recommendationId Array of String
The ID of the recommended Reflection.
Example: ["9be8a451-4190-4618-a72e-9932f790c744"]
* * *
reflectionScore Double
Score for the recommended Reflection's quality, on a scale of 0 (worst) to 100 (best). The reflectionScore value considers the recommended Reflection's anticipated quality compared to existing Reflections and other recommended Reflections, as well as the likely improvement in query run times if the recommended Reflection is implemented.
Example: 50.67
* * *
avgImprovementFactor Double
The likely average multiplicative rate of improvement for each query if you implement the recommended Reflection. For example, if the avgImprovementFactor value is 2.34, implementing the recommended Reflection is likely to speed up each query by 2.34 times, on average.
Example: 10.43
* * *
avgImprovementMs Double
The likely average improvement, in milliseconds, for each query if you implement the recommended Reflection. For example, if the avgImprovementMs value is 5400, implementing the recommended Reflection is likely to save an average of 5400 milliseconds for each query that uses the Reflection.
Example: 7196
#### Attributes of the `viewRequestBody` Object[​](/reference/api/reflections/reflection-recommendations)
entityType String
Type of catalog entity. For views, the entityType is `dataset`.
* * *
type String
Type of dataset. For views, the type is `VIRTUAL_DATASET`.
* * *
path Array of String
Path to the location where the view should be created within Dremio, expressed in an array. The path lists each level of hierarchy in order, from outer to inner: Arctic source or catalog first, then folder and subfolders, then a name for the view itself as the last item in the array. Views can only be created in Arctic sources and the project's Arctic catalog.
Example: ["azure_3","table_2"]
* * *
sql String
For aggregation Reflections, the SQL query to use to create the view. For default raw Reflections, the sql value `--Default Raw Reflection`; creating a view is unnecessary because raw recommendations are given only for existing views.
#### Attributes of the `reflectionRequestBody` Object[​](/reference/api/reflections/reflection-recommendations)
type String
Reflection type. For details, read [Types of Reflections](/acceleration).
Enum: RAW, AGGREGATION
Example: AGGREGATION
* * *
name String
User-provided name for the Reflection. For Reflections created in the Dremio console, if the user did not provide a name, the default values are `Raw Reflection` and `Aggregation Reflection` (automatically assigned based on the Reflection type).
Example: raw_47f54460-543f-430f-a9e5-ca71d246265e
* * *
datasetId String
Unique identifier for the anchor dataset to associate with the Reflection.
Example: 45b9d98b-b0dc-4dd2-a271-d971ae998c0c
* * *
enabled Boolean
If the Reflection is available for accelerating queries, `true`. Otherwise, `false`.
Example: true
* * *
arrowCachingEnabled Boolean
If Dremio converts data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, `true`. Otherwise, `false`.
Example: false
* * *
dimensionFields Array of Object
Information about the dimension fields from the anchor dataset used in the Reflection. Dimension fields are the fields you expect to group by when analyzing data. Valid only for aggregation Reflections. For raw Reflections or if the anchor dataset does not include any dimension fields, the dimensionFields value is an empty array. For aggregation Reflections, if the anchor dataset includes dimension fields, each object in the dimensionFields array contains two attributes: name and granularity.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_date","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "pickup_datetime","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dropoff_date","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dropoff_datetime","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","granularity": "DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
measureFields Array of Object
Information about the measure fields from the anchor dataset used in the Reflection. Measure fields are the fields you expect to use for calculations when analyzing the data. Valid only for aggregation Reflections. For raw Reflections or if the anchor dataset does not include any measure fields, the measureFields value is an empty array. For aggregation Reflections, if the anchor dataset includes measure fields, each object in the measureFields array contains two attributes: name and measureTypeList.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count","measureTypeList": ["SUM,"COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "trip_distance_mi","measureTypeList": ["SUM","COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "fare_amount","measureTypeList": ["SUM","COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "surcharge","measureTypeList": ["SUM","COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "tip_amount","measureTypeList": ["SUM","COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "total_amount","measureTypeList": ["SUM","COUNT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
displayFields Array of Object
Information about the fields displayed from the anchor dataset. Valid only for raw Reflections. For aggregation Reflections or if the anchor dataset does not include any display fields, the value is an empty array. For raw Reflections, if the anchor dataset includes display fields, each object in the displayFields array contains one attribute: name.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "EXPR$1"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
entityType String
Type of entity. For Reflection objects, the entityType is `reflection`.
## Submit Job IDs[​](/reference/api/reflections/reflection-recommendations)
Submit the job IDs of queries for which you want to request Reflection recommendations.
The response includes objects that contain an id attribute and value for each job ID you submit. Use these id values to [retrieve recommendations for Reflections](/reference/api/reflections/reflection-recommendations) to accelerate the queries.
Method and URL

```
POST /api/v3/reflection/recommendations/job-based/  

```

### Parameters[​](/reference/api/reflections/reflection-recommendations)
jobIds Body Array of String
The job IDs of the queries for which you want to request Reflection recommendations. To get the job IDs, use the [SQL API](/reference/api/sql) or find them on the [Jobs page](/admin/monitoring/jobs) in the Dremio console. Use a comma-separated list to submit multiple job IDs.
Example: ["a7efcd50-791a-48e8-bb05-391b4411e66b"]
### Example[​](/reference/api/reflections/reflection-recommendations)
Request

```
curl -X POST 'https://{hostname}/api/v3/reflection/recommendations/job-based/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
    "jobIds": ["a7efcd50-791a-48e8-bb05-391b4411e66b","c2485882-e6b7-4aa8-af5b-a825d2870589"]  
}'  

```

Response

```
{  
  "id": "13ffb629-9f0e-4265-97df-99bf0d425813"  
}  

```

### Response Status Codes[​](/reference/api/reflections/reflection-recommendations)
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

## Retrieve Job-Based Recommendations[​](/reference/api/reflections/reflection-recommendations)
Retrieve job-based recommended Reflections to accelerate the queries whose [job IDs you submitted](/reference/api/reflections/reflection-recommendations).
  * For default raw Reflections, each recommendation comprises the path to the view on which to define the Reflection and the parameters to use in a request to create the Reflection.
  * For aggregation Reflections, each recommendation comprises the parameters to use in a request to create a view on which to define the recommended Reflection and the parameters to use in a request to create the Reflection.


After you retrieve the recommended Reflections for your queries, use the [Catalog API](/reference/api/catalog/view) to create the recommended views. Then, use the [Reflection API](/reference/api/reflections) to create the desired Reflections.
Before submitting Catalog API requests to create the recommended views for aggregation Reflections, create a folder named `recommended_view`. In your Catalog API requests, the `path` parameter must include the full path to the `recommended_view` folder. If you prefer to use a different folder name, replace `recommended_view` with your folder name in the `path` parameter when making the Catalog API request.
Method and URL

```
GET /api/v3/reflection/recommendations/job-based/{id}/results/  

```

### Parameters[​](/reference/api/reflections/reflection-recommendations)
id Path String
The id value returned in the response to your request to [submit the job ID or IDs](/reference/api/reflections/reflection-recommendations) of the queries for which you want to retrieve recommended Reflections.
Example: 13ffb629-9f0e-4265-97df-99bf0d425813
### Example[​](/reference/api/reflections/reflection-recommendations)
Request

```
curl -X GET 'https://{hostname}/api/v3/reflection/recommendations/job-based/13ffb629-9f0e-4265-97df-99bf0d425813/results/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "viewRequestBody": {  
        "entityType": "dataset",  
        "type": "VIRTUAL_DATASET",  
        "path": [  
          "azure_3",  
          "table_2"  
        ],  
        "sql": "--Default Raw Reflection"  
      },  
      "viewRequestEndpoint": "{hostname}/api/v3/catalog",  
      "reflectionRequestBody": {  
        "type": "RAW",  
        "name": "raw_47f54460-543f-430f-a9e5-ca71d246265e",  
        "datasetId": "45b9d98b-b0dc-4dd2-a271-d971ae998c0c",  
        "enabled": true,  
        "arrowCachingEnabled": false,  
        "dimensionFields": [],  
        "measureFields": [],  
        "displayFields": [  
          {  
            "name": "passenger_count"  
          },  
          {  
            "name": "EXPR$1"  
          }  
        ],  
        "entityType": "reflection"  
      },  
      "reflectionRequestEndpoint": "POST {hostname}/api/v3/reflection",  
      "jobIds": [  
        "13ffb629-9f0e-4265-97df-99bf0d425813"  
      ],  
      "jobCount": 1,  
      "recommendationId": "9be8a451-4190-4618-a72e-9932f790c744",  
      "reflectionScore": 50.67,  
      "avgImprovementFactor": 10.43,  
      "avgImprovementMs": 7196  
    }  
  ],  
  "canAlterReflections": true  
}  

```

### Response Status Codes[​](/reference/api/reflections/reflection-recommendations)
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

## Retrieve Usage-Based Recommendations[​](/reference/api/reflections/reflection-recommendations)
Retrieve usage-based Reflection recommendations. The response includes the `reflectionRequestBody` and `recommendationId` attributes to use as body parameters in your request to [create usage-based Reflections](/reference/api/reflections/reflection-recommendations).
Method and URL

```
GET /api/v3/reflection/recommendations/usage-based/  

```

### Example[​](/reference/api/reflections/reflection-recommendations)
Request

```
curl -X GET 'https://{hostname}/api/v3/reflection/recommendations/usage-based/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "viewRequestBody": {  
        "entityType": "dataset",  
        "type": "VIRTUAL_DATASET",  
        "path": [  
          "prodFolder",  
          "cost_based"  
        ],  
        "sql": "--Default Raw Reflection"  
      },  
      "viewRequestEndpoint": "POST {hostname}/api/v3/catalog",  
      "reflectionRequestBody": {  
        "type": "RAW",  
        "name": "AutoRef_cost_based_raw",  
        "datasetId": "61d689a2-cd04-4d5d-84a7-021bdc15bff6",  
        "enabled": true,  
        "arrowCachingEnabled": false,  
        "dimensionFields": [],  
        "measureFields": [],  
        "displayFields": [  
          {  
            "name": "passenger_count"  
          },  
          {  
            "name": "pickup_datetime"  
          },  
          {  
            "name": "EXPR$2"  
          }  
        ],  
        "entityType": "reflection"  
      },  
      "reflectionRequestEndpoint": "POST {hostname}/api/v3/reflection",  
      "jobIds": [  
        "1975ec43-349a-9310-2e40-acbd8d025c00",  
        "1975ac7c-6541-86db-ae43-dcef2ffee300",  
        "1974b533-8c88-946b-92ce-ee5ab7791500"  
      ],  
      "jobCount": 3,  
      "recommendationId": "prodFolder.cost_based",  
      "reflectionScore": 36.928031592652964,  
      "avgImprovementFactor": 10.00000020692081,  
      "avgImprovementMs": 7393.800016999235  
    }  
  ],  
  "canAlterReflections": true  
}  

```

### Response Status Codes[​](/reference/api/reflections/reflection-recommendations)
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
500 Internal Server Error   
  

## Create Reflections from Usage-Based Recommendations[​](/reference/api/reflections/reflection-recommendations)
Create Reflections to accelerate queries using the [usage-based recommendations](/reference/api/reflections/reflection-recommendations) that you retrieved.
You must [retrieve usage-based recommendations](/reference/api/reflections/reflection-recommendations) to get the parameters you need for this request.
Method and URL

```
POST /api/v3/reflection/recommendations/usage-based/  

```

### Parameters[​](/reference/api/reflections/reflection-recommendations)
[reflection](/reference/api/reflections/reflection-recommendations) Body Object
Information about the usage-based Reflection to create. The Reflection object includes the contents of the reflectionRequestBody included in the response for requests to [retrieve usage-based recommendations](/reference/api/reflections/reflection-recommendations).
**NOTE** : If desired, you may change the name of the Reflection by changing the value for the Reflection.name parameter in the body of your request. Dremio ignores any changes to the values of other parameters in the Reflection object.
* * *
recommendationId Body String
Identifier for the usage-based recommendation you want to use to create Reflections. The recommendationId is included in the response for requests to [retrieve usage-based recommendations](/reference/api/reflections/reflection-recommendations).
Example: prodFolder.cost_based
* * *
#### Parameters of the `reflection` Object[​](/reference/api/reflections/reflection-recommendations)
type Body String
Reflection [type](/acceleration). Value must be `RAW`.
* * *
name Body String
User-provided name for the Reflection.
**NOTE** : If desired, you may change the name of the Reflection by changing the value for the name parameter in the body of your request.
Example: AutoRef_cost_based_raw
* * *
datasetId Body String
Unique identifier for the anchor dataset to associate with the Reflection.
Example: 61d689a2-cd04-4d5d-84a7-021bdc15bff6
* * *
enabled Body Boolean
If the Reflection is available for accelerating queries, `true`. Otherwise, `false`.
Example: true
* * *
arrowCachingEnabled Body Boolean
If Dremio converts data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, `true`. Otherwise, `false`.
Example: false
* * *
dimensionFields Body Array of Object
Information about the dimension fields from the anchor dataset used in the Reflection. For raw Reflections, the dimensionFields value is an empty array.
Example: []
* * *
measureFields Body Array of Object
Information about the measure fields from the anchor dataset used in the Reflection. For raw Reflections, the measureFields value is an empty array.
Example: []
* * *
displayFields Body Array of Object
Information about the fields displayed from the anchor dataset. Valid only for raw Reflections. If the anchor dataset includes display fields, each object in the displayFields array contains one attribute: name.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "EXPR$1"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
entityType Body String
Type of entity. For Reflection objects, the entityType is `reflection`.
### Example[​](/reference/api/reflections/reflection-recommendations)
Request

```
curl -X POST 'https://{hostname}/api/v3/reflection/recommendations/usage-based/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "reflection": {  
    "type": "RAW",  
    "name": "AutoRef_cost_based_raw",  
    "datasetId": "61d689a2-cd04-4d5d-84a7-021bdc15bff6",  
    "enabled": true,  
    "arrowCachingEnabled": false,  
    "dimensionFields": [],  
    "measureFields": [],  
    "displayFields": [  
      {  
        "name": "passenger_count"  
      },  
      {  
        "name": "pickup_datetime"  
      },  
      {  
        "name": "EXPR$2"  
      }  
    ],  
    "entityType": "reflection"  
  },  
  "recommendationId": "prodFolder.cost_based"  
}  

```

Response

```
{  
  "id": "c929b8d2-82bf-4175-9476-010ba17c4f7f",  
  "type": "RAW",  
  "name": "AutoRef_cost_based_raw",  
  "tag": "4p/COEkSud7=",  
  "createdAt": "2024-06-28T19:30:30.977Z",  
  "updatedAt": "2024-06-28T19:30:30.977Z",  
  "datasetId": "61d689a2-cd04-4d5d-84a7-021bdc15bff6",  
  "currentSizeBytes": 0,  
  "totalSizeBytes": 0,  
  "enabled": true,  
  "arrowCachingEnabled": false,  
  "status": {  
    "config": "OK",  
    "refresh": "SCHEDULED",  
    "availability": "NONE",  
    "combinedStatus": "CANNOT_ACCELERATE_SCHEDULED",  
    "failureCount": 0,  
    "lastDataFetch": "1969-12-31T23:59:59.999Z",  
    "expiresAt": "1969-12-31T23:59:59.999Z"  
  },  
  "displayFields": [  
    {  
      "name": "passenger_count"  
    },  
    {  
      "name": "pickup_datetime"  
    },  
    {  
      "name": "EXPR$2"  
    }  
  ],  
  "partitionDistributionStrategy": "CONSOLIDATED",  
  "canView": true,  
  "canAlter": true,  
  "entityType": "reflection"  
}  

```

### Response Status Codes[​](/reference/api/reflections/reflection-recommendations)
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
500 Internal Server Error   
  

## Refresh Usage-Based Recommendations[​](/reference/api/reflections/reflection-recommendations)
Process collected data about view usage, clear existing usage-based recommendations, and generate new usage-based recommendations.
Use the usage-based endpoints to [retrieve](/reference/api/reflections/reflection-recommendations) and [create](/reference/api/reflections/reflection-recommendations) Reflections based on the refreshed recommendations this endpoint creates.
Method and URL

```
POST /api/v3/reflection/recommendations/usage-based/refresh/  

```

### Example Request[​](/reference/api/reflections/reflection-recommendations)

```
curl -X POST 'https://{hostname}/api/v3/reflection/recommendations/usage-based/refresh/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

This endpoint returns an empty response body with a `202 Accepted` response status code. Dremio updates the recommendations asynchronously, so it may take several minutes before you can [retrieve](/reference/api/reflections/reflection-recommendations) the updated recommendations.
### Response Status Codes[​](/reference/api/reflections/reflection-recommendations)
202 Accepted   
  

400 Bad Request   
  

401 Unauthorized   
  

500 Internal Server Error   
  

## Delete Usage-Based Recommendations[​](/reference/api/reflections/reflection-recommendations)
Delete all collected usage data and all current Reflection recommendations.
We recommend deleting recommendations only when troubleshooting.
Method and URL

```
DELETE /api/v3/reflection/recommendations/usage-based/  

```

### Example Request[​](/reference/api/reflections/reflection-recommendations)

```
curl -X DELETE 'https://{hostname}/api/v3/reflection/recommendations/usage-based/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

This endpoint returns an empty response body with a `202 Accepted` response status code. Dremio deletes the recommendations asynchronously, so it may take several minutes for the deletion to complete.
### Response Status Codes[​](/reference/api/reflections/reflection-recommendations)
202 Accepted   
  

400 Bad Request   
  

401 Unauthorized   
  

500 Internal Server Error   
  

## Retrieve Recommendations (Deprecated)[​](/reference/api/reflections/reflection-recommendations)")
The [`POST /api/v3/reflection/recommendations` endpoint](/reference/api/reflections/reflection-recommendations) described in this section is deprecated. In its place, use the [job-based and usage-based](/reference/api/reflections/reflection-recommendations) endpoints to retrieve and refresh Reflection recommendations.
Use the Recommendations API to submit job IDs of jobs that ran SQL queries, and receive recommendations for aggregation Reflections that can accelerate those queries.
For more information, see [Sending Requests to the Recommendations API](/reference/api/reflections/reflection-recommendations).
Recommendation Object

```
{  
    "data": [  
        {  
        "viewRequestBody": {  
            "entityType": "dataset",  
            "path": [  
                "recommended_view",  
                "Dataset_be919a56-f18b-421b-9612-711a1cc51b69"  
            ],  
            "type": "VIRTUAL_DATASET",  
            "sql": "SELECT * FROM Samples.samples.dremio.com.\"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC",  
        }  
        "viewRequestEndpoint": "POST {hostname}/api/v3/catalog",  
        "reflectionRequestBody": {  
            "type": "AGGREGATION",  
            "name": "agg_250e70d1-5e2a-4938-a1a1-95f664085099",  
            "datasetId": "be919a56-f18b-421b-9612-711a1cc51b69",   
            "enabled": true,  
            "dimensionFields": [  
                {  
                    "name": "passenger_count",  
                    "granularity": "DATE"  
                }  
            ],  
            "measureFields": [  
                {  
                    "name": "fare_amount",  
                    "measureTypeList": [  
                        "SUM",  
                        "COUNT"  
                    ]  
                }  
            ],  
            "entityType": "reflection"  
        }  
        "reflectionRequestEndpoint": "POST {hostname}/api/v3/reflection",  
        "jobIds": ["6j6c34cf-9drf-b07a-5ab7-abea69a66d00"]  
        }  
    ],  
    "canAlterReflections": true    
}  

```

#### Recommendation Attributes (Deprecated)[​](/reference/api/reflections/reflection-recommendations)")
viewRequestBody Array of Object
The fields that you can include in a request to the Catalog API for creating the view on which to define the recommended aggregation Reflection.
For descriptions of these fields, see [View](/reference/api/catalog/view).
* * *
viewRequestEndpoint String
The endpoint to use when submitting the request to the Catalog API to create the view on which to define the Reflection.
* * *
reflectionRequestBody Array of Object
The fields that you can include in a request to the Reflection API for creating the recommended aggregation Reflection.
For descriptions of these fields, see [Reflection](/reference/api/reflections).
* * *
reflectionRequestEndpoint String
The endpoint to use when submitting the request to the Reflection API to create the aggregation Reflection.
* * *
jobIds Array of String
The IDs of the jobs that ran the queries for which the recommendation is given.
* * *
canAlterReflections String
Indicates whether the columns in the Reflection can be edited, and whether columns can be added or removed.
#### Request Recommendations (Deprecated)[​](/reference/api/reflections/reflection-recommendations)")
This endpoint is deprecated. In its place, use the [job-based and usage-based](/reference/api/reflections/reflection-recommendations) endpoints to retrieve and refresh Reflection recommendations.
Request recommended aggregation Reflections to accelerate the queries associated with the provided job ID or IDs.
Method and URL

```
POST /api/v3/reflection/recommendations  

```

##### Parameters (Deprecated)[​](/reference/api/reflections/reflection-recommendations)")
jobIds Body Array of String
A list of the job IDs of jobs that have run the SQL commands that you want to receive one or more recommended Reflections for.
### Example Request[​](/reference/api/reflections/reflection-recommendations)

```
curl -X POST 'https://{hostname}/api/v3/reflection/recommendations' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data   
'{  
  "jobIds": [  
    "1a515250-7572-0f9b-f5e5-89f505b55200",   
    "1a515292-583c-e407-79ef-9f9b494fa600"  
  ]  
}'  

```

Was this page helpful?
[Previous Reflection](/reference/api/reflections)[Next Reflection Summary](/reference/api/reflections/reflection-summary)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reflection](/reference/api/reflections)[Next Reflection Summary](/reference/api/reflections/reflection-summary)
!
