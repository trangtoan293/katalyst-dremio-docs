---
url: /reference/api/datasets
title: "Dataset | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64238.095656541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Dataset

Version: current [26.x]
On this page
# Dataset
The Dataset API is supported in Dremio 25.0.5+.
Use the Dataset API to retrieve Dremio's Reflection recommendations for your datasets.
Dataset Object (All Reflections)

```
{  
  "data": [  
    {  
      "type": "RAW",  
      "enabled": true,  
      "arrowCachingEnabled": false,  
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
      "partitionFields": [  
        {  
          "name": "dropoff_date"  
        },  
        {  
          "name": "passenger_count"  
        }  
      ],  
      "entityType": "reflection"  
    },  
    {  
      "type": "AGGREGATION",  
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
          "name": "total_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
          ]  
        },  
        {  
          "name": "trip_distance_mi",  
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
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
          ]  
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
      "entityType": "reflection"  
    }  
  ]  
}  

```

## Dataset Attributes[​](/reference/api/datasets#dataset-attributes "Direct link to Dataset Attributes")
[data](/reference/api/datasets#attributes-of-objects-in-the-data-array) Array of Object
List of recommended Reflection objects for the specified dataset ID.
#### Attributes of objects in the `data` Array[​](/reference/api/datasets#attributes-of-objects-in-the-data-array "Direct link to attributes-of-objects-in-the-data-array")
type String
Reflection type. For details, read [Types of Reflections](/acceleration#types).
Enum: RAW, AGGREGATION
Example: RAW
* * *
enabled Boolean
If the Reflection is available for accelerating queries, `true`. Otherwise, `false`.
Example: true
* * *
arrowCachingEnabled Boolean
If Dremio converts data from the Reflection's Parquet files to Apache Arrow format when copying that data to executor nodes, `true`. Otherwise, `false`.
Example: false
* * *
displayFields Array of Object
Information about the fields displayed from the anchor dataset. Each object in the displayFields array contains one attribute: name. Included only for raw Reflections. Not included for aggregation Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"pickup_datetime"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"trip_distance_mi"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"fare_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"tip_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"total_amount"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
dimensionFields Array of Object
Information about the dimension fields from the anchor dataset used in the Reflection. Dimension fields are the fields you expect to group by when analyzing data. Each object in the dimensionFields array contains two attributes: name and granularity. Included only for aggregation Reflections. If the anchor dataset does not include any dimension fields, the dimensionFields value is an empty array. Not included for raw Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"passenger_count","granularity":"DATE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
measureFields Array of Object
Information about the measure fields from the anchor dataset used in the Reflection. Measure fields are the fields you expect to use for calculations when analyzing the data. Each object in the measureFields array contains two attributes: name and measureTypeList. Included only for aggregation Reflections. If the anchor dataset does not include any measure fields, the measureFields value is an empty array. Not included for raw Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"total_amount","measureTypeList":["COUNT","SUM"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"trip_distance_mi","measureTypeList":["COUNT","SUM"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"fare_amount","measureTypeList":["COUNT","SUM"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name":"tip_amount","measureTypeList":["COUNT","SUM"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
partitionFields Array of Object
Information about the fields from the anchor dataset used to partition data in the Reflection. Each object in the partitionFields array contains one attribute: name. Included only for aggregation Reflections. If the anchor dataset does not include any partition fields, the partitionFields value is an empty array. Not included for raw Reflections.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "dropoff_date"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "passenger_count"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
entityType String
Type of entity. For objects in dataset responses, the entityType is `reflection`.
## Create and Retrieving Reflection Recommendations for a Dataset[​](/reference/api/datasets#create-and-retrieving-reflection-recommendations-for-a-dataset "Direct link to Create and Retrieving Reflection Recommendations for a Dataset")
Create Reflection recommendations for the specified dataset. The response contains the Reflection recommendations.
Method and URL

```
POST /api/v3/dataset/{id}/reflection/recommendation/{type}/  

```

### Parameters[​](/reference/api/datasets#parameters "Direct link to Parameters")
id Path String (UUID)
The id of the dataset for which you want to create and retrieve recommended Reflections.
Example: 88e5fbdf-4b56-4286-9b8b-bb48e1f350eb
* * *
type Path String
The type of Reflection recommendations you want to create and retrieve.
  * ALL: Create and retrieve both raw and aggregation Reflection recommendations.
  * RAW: Create and retrieve only raw Reflection recommendations.
  * AGG: Create and retrieve only aggregation Reflection recommendations.


**NOTE** : The type is not case-sensitive. For example, `AGG`, `agg`, and `aGg` are valid type values for aggregation Reflection recommendations.
Example: ALL
Example Request (All Reflections)

```
curl -X POST 'https://{hostname}/api/v3/dataset/88e5fbdf-4b56-4286-9b8b-bb48e1f350eb/reflection/recommendation/ALL/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Example Response (All Reflections)

```
{  
  "data": [  
    {  
      "type": "RAW",  
      "enabled": true,  
      "arrowCachingEnabled": false,  
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
      "partitionFields": [  
        {  
          "name": "dropoff_date"  
        },  
        {  
          "name": "passenger_count"  
        }  
      ],  
      "entityType": "reflection"  
    },  
    {  
      "type": "AGGREGATION",  
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
          "name": "total_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
          ]  
        },  
        {  
          "name": "trip_distance_mi",  
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
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
          ]  
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
      "entityType": "reflection"  
    }  
  ]  
}  

```

Example Request (Raw Reflections)

```
curl -X POST 'https://{hostname}/api/v3/dataset/88e5fbdf-4b56-4286-9b8b-bb48e1f350eb/reflection/recommendation/RAW/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Example Response (Raw Reflections)

```
{  
  "data": [  
    {  
      "type": "RAW",  
      "enabled": true,  
      "arrowCachingEnabled": false,  
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
      "partitionFields": [  
        {  
          "name": "dropoff_date"  
        },  
        {  
          "name": "passenger_count"  
        }  
      ],  
      "entityType": "reflection"  
    }  
  ]  
}  

```

Example Request (Aggregation Reflections)

```
curl -X POST 'https://{hostname}/api/v3/dataset/88e5fbdf-4b56-4286-9b8b-bb48e1f350eb/reflection/recommendation/AGG/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Example Response (Aggregation Reflections)

```
{  
  "data": [  
    {  
      "type": "AGGREGATION",  
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
          "name": "total_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
          ]  
        },  
        {  
          "name": "trip_distance_mi",  
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
        },  
        {  
          "name": "tip_amount",  
          "measureTypeList": [  
            "COUNT",  
            "SUM"  
          ]  
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
      "entityType": "reflection"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/datasets#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

Was this page helpful?
[Previous Catalog](/reference/api/catalog)[Next Engine Management](/reference/api/engine-management)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Catalog](/reference/api/catalog)[Next Engine Management](/reference/api/engine-management)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fdatasets%2F&_biz_t=1777950558934&_biz_i=Dataset%20%7C%20Dremio%20Documentation&_biz_n=463&rnd=292473&cdn_o=a&_biz_z=1777950558935)
