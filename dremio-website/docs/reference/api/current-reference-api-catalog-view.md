---
url: /reference/api/catalog/view
title: "View | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64238.027321208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * View

Version: current [26.x]
On this page
# View
Use the Catalog API to retrieve, create, update, and delete [views](/what-is-dremio/key-concepts#tables-and-views).
View Object

```
{  
  "entityType": "dataset",  
  "id": "ef99ab32-89ca-4d1c-9e91-2c8be861bb8a",  
  "type": "VIRTUAL_DATASET",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-short-distance"  
  ],  
  "createdAt": "2022-11-17T18:31:23.236Z",  
  "isMetadataExpired": false,   
  "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",   
  "tag": "f90d1526-e64b-47b1-9ab0-d25df5247cab",  
  "sql": "SELECT * FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
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
      "name": "pickup_datetime",  
      "type": {  
        "name": "TIMESTAMP"  
      }  
    },  
    {  
      "name": "passenger_count",  
      "type": {  
        "name": "BIGINT"  
      }  
    },  
    {  
      "name": "passenger_payment_method",  
      "type": {  
        "name": "STRUCT",  
        "subSchema": [  
          {  
            "name": "cash",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "credit-debit",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "payment-app",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "other",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "trip_distance_mi",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "fare_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "tip_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "total_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    }  
  ]  
}  

```

## View Attributes[​](/reference/api/catalog/view#view-attributes "Direct link to View Attributes")
entityType String
Type of the catalog object. For views, the entityType is `dataset`.
Example: dataset
* * *
id String (UUID)
Unique identifier of the view.
Example: ef99ab32-89ca-4d1c-9e91-2c8be861bb8a
* * *
type String
Type of dataset. For views, the type is `VIRTUAL_DATASET`.
Example: VIRTUAL_DATASET
* * *
path Array of String
Path of the view within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the view itself as the last item in the array.
Example: ["Business", "Transportation", "NYC-taxi-trips-short-distance"]
* * *
createdAt String
Date and time that the view was created, in UTC format.
Example: 2022-11-17T18:31:23.236Z
* * *
isMetadataExpired Boolean
  * If true, the metadata of the tables that the view is defined on needs to be refreshed. To refresh it, run the ALTER VIEW command, using the clause REFRESH METADATA.
  * If false, the metadata can still be used for planning queries against the view.
  * If NULL, metadata has never yet been collected for the tables that the view is defined on.


* * *
lastMetadataRefreshAt String
Date and time that the metadata of the tables that the view is defined on was last refreshed. In UTC format.
Example: 2024-01-31T09:50:01.012Z
* * *
tag String (UUID)
Unique identifier of the version of the view. Dremio changes the tag whenever the view changes and uses the tag to ensure that PUT requests apply to the most recent version of the view.
Example: f90d1526-e64b-47b1-9ab0-d25df5247cab
* * *
sql String
SQL query used to create the view.
Example: SELECT * FROM "NYC-taxi-trips" WHERE trip_distance_mi &lt;= 2.0 ORDER BY trip_distance_mi ASC
* * *
sqlContext Array of String
Context for the SQL query used to create the view.
Example: ["Samples", "samples.dremio.com"]
* * *
[accessControlList](/reference/api/catalog/view#attributes-of-the-accesscontrollist-object) Object
Enterprise only. Information about users and roles with access to the view and the specific privileges each user or role has. May include an array of users, an array of roles, or both, depending on the configured access and privileges. The accessControlList array is empty if view-specific access control privileges are not set.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"] {'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"] {'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the view. Only appears in the response if the request URL includes the `permissions` query parameter. For more information, read [Privileges](/security/rbac/privileges).
Example: ["READ","WRITE","ALTER_REFLECTION","SELECT","ALTER","VIEW_REFLECTION","MODIFY","MANAGE_GRANTS","CREATE_TABLE","DROP","EXTERNAL_QUERY","INSERT","TRUNCATE","DELETE","UPDATE","EXECUTE","CREATE_SOURCE","ALL"]
* * *
[owner](/reference/api/catalog/view#attributes-of-the-owner-object) String
Information about the view's owner.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"ownerId": "30fca499-4abc-4469-7142-fc8dd29acac8","ownerType": "USER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
[fields](/reference/api/catalog/view#attributes-of-objects-in-the-fields-array) Array of Object
Attributes that represent the dataset schema.
#### Attributes of the `accessControlList` Object[​](/reference/api/catalog/view#attributes-of-the-accesscontrollist-object "Direct link to attributes-of-the-accesscontrollist-object")
[users](/reference/api/catalog/view#attributes-of-objects-in-the-users-and-roles-arrays) Array of Object
Enterprise only. List of users with access to the view and the specific privileges each user has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT", "ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT", "ALTER", "MANAGE_GRANTS"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[roles](/reference/api/catalog/view#attributes-of-objects-in-the-users-and-roles-arrays) Array of Object
Enterprise only. List of roles whose members have access to the view and the specific privileges each role has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Attributes of Objects in the `users` and `roles` Arrays[​](/reference/api/catalog/view#attributes-of-objects-in-the-users-and-roles-arrays "Direct link to attributes-of-objects-in-the-users-and-roles-arrays")
id String
Enterprise only. Unique identifier of the user or role with access to the view.
Example: c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3
* * *
permissions Array of String
Enterprise only. List of privileges the user or role has on the view. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT","ALTER"]
#### Attributes of the `owner` Object[​](/reference/api/catalog/view#attributes-of-the-owner-object "Direct link to attributes-of-the-owner-object")
ownerId String (UUID)
Unique identifier of the view's owner.
Example: 30fca499-4abc-4469-7142-fc8dd29acac8
* * *
ownerType String
Type of owner of the view.
Enum: USER, ROLE
Example: USER
#### Attributes of Objects in the `fields` Array[​](/reference/api/catalog/view#attributes-of-objects-in-the-fields-array "Direct link to attributes-of-objects-in-the-fields-array")
name String
Name of the view field.
Example: pickup_datetime
* * *
[type](/reference/api/catalog/view#attributes-of-the-type-object) Object
Information about the view field.
#### Attributes of the `type` Object[​](/reference/api/catalog/view#attributes-of-the-type-object "Direct link to attributes-of-the-type-object")
name String
Name of the view field's type.
Enum: STRUCT, LIST, UNION, INTEGER, BIGINT, FLOAT, DOUBLE, VARCHAR, VARBINARY, BOOLEAN, DECIMAL, TIME, DATE, TIMESTAMP, INTERVAL DAY TO SECOND, INTERVAL YEAR TO MONTH
Example: TIMESTAMP
* * *
precision Integer
Total number of digits in the number. Included only for the `DECIMAL` type.
Example: 38
* * *
scale Integer
Number of digits to the right of the decimal point. Included only for the `DECIMAL` type.
Example: 2
* * *
[subSchema](/reference/api/catalog/view#attributes-of-objects-in-the-subschema-array) Array of Object
List of objects that represent the field's composition. For example, a field composed of data about a restaurant might have a subSchema with an object for parking options, another for payment methods, and so on. subSchemas may be nested within other subSchemas. subSchema is listed only for the `STRUCT`, `LIST`, and `UNION` types.
#### Attributes of Objects in the `subSchema` Array[​](/reference/api/catalog/view#attributes-of-objects-in-the-subschema-array "Direct link to attributes-of-objects-in-the-subschema-array")
name String
Name for the subSchema object.
Example: cash
* * *
type Object
Object that contains a `name` attribute that provides the field's type.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"name": "BOOLEAN"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
## Create a View[​](/reference/api/catalog/view#create-a-view "Direct link to Create a View")
Create a view from a table in Dremio.
Method and URL

```
POST /api/v3/catalog  

```

### Parameters[​](/reference/api/catalog/view#parameters "Direct link to Parameters")
entityType Body String
Type of the catalog object. For views, the entityType is `dataset`.
* * *
type Body String
Type of dataset. For views, the type is `VIRTUAL_DATASET`.
* * *
path Body Array of String
Path of the location where you want to save the view within Dremio, expressed as an array. The path consists of the space, followed by any folder and subfolders, followed by a name for the view itself as the last item in the array. The name of the view cannot include the following special characters: `/`, `:`, `[`, or `]`. Views can only be created in spaces.
Example: ["Business", "Transportation", "NYC-taxi-trips-short-distance"]
* * *
sql Body String
SQL query to use to create the view.
Example: SELECT * FROM "NYC-taxi-trips" WHERE trip_distance_mi &lt;= 2.0 ORDER BY trip_distance_mi ASC
* * *
sqlContext Body Array of String
Context for the SQL query to use to create the view.
Example: ["Samples", "samples.dremio.com"]
* * *
[accessControlList](/reference/api/catalog/view#parameters-of-the-accesscontrollist-object) Body Object Optional
Enterprise only. Object used to specify which users and roles should have access to the view and the specific privileges each user or role should have. May include an array of users, an array of roles, or both.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3", "permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8", "permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390", "permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object[​](/reference/api/catalog/view#parameters-of-the-accesscontrollist-object "Direct link to parameters-of-the-accesscontrollist-object")
[users](/reference/api/catalog/view#parameters-of-objects-in-the-users-and-roles-arrays) [Body] Array of Object Optional
Enterprise only. List of users who should have access to the view and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[roles](/reference/api/catalog/view#parameters-of-objects-in-the-users-and-roles-arrays) Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the view and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays[​](/reference/api/catalog/view#parameters-of-objects-in-the-users-and-roles-arrays "Direct link to parameters-of-objects-in-the-users-and-roles-arrays")
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the view.
Example: c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the view. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT", "ALTER"]
### Example[​](/reference/api/catalog/view#example "Direct link to Example")
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "dataset",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-short-distance"  
  ],  
  "type": "VIRTUAL_DATASET",  
  "sql": "SELECT * FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
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
  "id": "ef99ab32-89ca-4d1c-9e91-2c8be861bb8a",  
  "type": "VIRTUAL_DATASET",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-short-distance"  
  ],  
  "createdAt": "2022-11-17T18:31:23.236Z",  
  "isMetadataExpired": false,   
  "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
  "tag": "f90d1526-e64b-47b1-9ab0-d25df5247cab",  
  "sql": "SELECT * FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
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
      "name": "pickup_datetime",  
      "type": {  
        "name": "TIMESTAMP"  
      }  
    },  
    {  
      "name": "passenger_count",  
      "type": {  
        "name": "BIGINT"  
      }  
    },  
    {  
      "name": "passenger_payment_method",  
      "type": {  
        "name": "STRUCT",  
        "subSchema": [  
          {  
            "name": "cash",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "credit-debit",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "payment-app",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "other",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "trip_distance_mi",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "fare_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "tip_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "total_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/view#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve a View by ID[​](/reference/api/catalog/view#retrieve-a-view-by-id "Direct link to Retrieve a View by ID")
Retrieve a view by specifying the view's `id` value.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/view#parameters-1 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the view that you want to retrieve.
Example: ef99ab32-89ca-4d1c-9e91-2c8be861bb8a
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api#include-and-exclude-query-parameters).
Example: ?include=permissions
### Example[​](/reference/api/catalog/view#example-1 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/ef99ab32-89ca-4d1c-9e91-2c8be861bb8a' \  
--header 'Authorization: Bearer <<dremioAccessToken>)>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "dataset",  
  "id": "ef99ab32-89ca-4d1c-9e91-2c8be861bb8a",  
  "type": "VIRTUAL_DATASET",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-short-distance"  
  ],  
  "createdAt": "2022-11-17T18:31:23.236Z",  
  "isMetadataExpired": false,   
  "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
  "tag": "f90d1526-e64b-47b1-9ab0-d25df5247cab",  
  "sql": "SELECT * FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
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
      "name": "pickup_datetime",  
      "type": {  
        "name": "TIMESTAMP"  
      }  
    },  
    {  
      "name": "passenger_count",  
      "type": {  
        "name": "BIGINT"  
      }  
    },  
    {  
      "name": "passenger_payment_method",  
      "type": {  
        "name": "STRUCT",  
        "subSchema": [  
          {  
            "name": "cash",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "credit-debit",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "payment-app",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "other",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "trip_distance_mi",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "fare_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "tip_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "total_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/view#response-status-codes-1 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve a View by Path[​](/reference/api/catalog/view#retrieve-a-view-by-path "Direct link to Retrieve a View by Path")
Retrieve a view by specifying the view's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters[​](/reference/api/catalog/view#parameters-2 "Direct link to Parameters")
path Path String
View's location within Dremio, using forward slashes as separators. For example, for the "NYC-taxi-trips" view in the "samples.dremio.com" folder within the space "Transportation," the path is `Transportation/samples.dremio.com/NYC-taxi-trips`. If the name of any component in the path includes special characters for URLs, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, "Dremio University" should be `Dremio%20University` in the URL path.
Example: Business/Transportation/NYC-taxi-trips-short-distance
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api#include-and-exclude-query-parameters).
Example: ?include=permissions
### Example[​](/reference/api/catalog/view#example-2 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/Business/Transportation/NYC-taxi-trips-short-distance' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "dataset",  
  "id": "ef99ab32-89ca-4d1c-9e91-2c8be861bb8a",  
  "type": "VIRTUAL_DATASET",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-short-distance"  
  ],  
  "createdAt": "2022-11-17T18:31:23.236Z",  
  "isMetadataExpired": false,   
  "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
  "tag": "f90d1526-e64b-47b1-9ab0-d25df5247cab",  
  "sql": "SELECT * FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi ASC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
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
      "name": "pickup_datetime",  
      "type": {  
        "name": "TIMESTAMP"  
      }  
    },  
    {  
      "name": "passenger_count",  
      "type": {  
        "name": "BIGINT"  
      }  
    },  
    {  
      "name": "passenger_payment_method",  
      "type": {  
        "name": "STRUCT",  
        "subSchema": [  
          {  
            "name": "cash",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "credit-debit",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "payment-app",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "other",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "trip_distance_mi",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "fare_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "tip_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "total_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/view#response-status-codes-2 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Update a View[​](/reference/api/catalog/view#update-a-view "Direct link to Update a View")
Update a view in Dremio.
Method and URL

```
PUT /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/view#parameters-3 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the view that you want to update.
Example: ef99ab32-89ca-4d1c-9e91-2c8be861bb8a
* * *
entityType Body String
Type of the catalog object. For views, the entityType is `dataset`.
* * *
type Body String
Type of dataset. For views, type is `VIRTUAL_DATASET`.
* * *
path Body Array of String
Path of the location where you want to save the updated view within Dremio, expressed as an array. The path consists of the space, followed by any folder and subfolders, followed by the name for the view itself as the last item in the array. Views can only be saved in spaces.
Example: ["Business", "Transportation", "NYC-taxi-trips-short-distance"]
* * *
tag Body String (UUID) Optional
Unique identifier of the version of the view that you want to update. If you provide a tag in the request body, Dremio uses the tag to ensure that you are requesting to update the most recent version of the view. If you do not provide a tag, Dremio automatically updates the most recent version of the view.
Example: f90d1526-e64b-47b1-9ab0-d25df5247cab
* * *
sql Body String
SQL query to use to update the view.
Example: SELECT * FROM "NYC-taxi-trips" WHERE trip_distance_mi &lt;= 2.0 ORDER BY trip_distance_mi DESC
* * *
sqlContext Body Array of String
Context for the SQL query to use for the updated view.
Example: ["Samples", "samples.dremio.com"]
* * *
[accessControlList](/reference/api/catalog/view#parameters-of-the-accesscontrollist-object) Body Object Optional
Enterprise only. Object used to specify which users and roles should have access to the view and the specific privileges each user or role should have. May include an array of users, an array of roles, or both.
#### Parameters of the `accessControlList` Object[​](/reference/api/catalog/view#parameters-of-the-accesscontrollist-object-1 "Direct link to parameters-of-the-accesscontrollist-object-1")
[users](/reference/api/catalog/view#parameters-of-objects-in-the-users-and-roles-arrays) Body Array of Object Optional
Enterprise only. List of users who should have access to the view and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "30fca499-4abc-4469-7142-fc8dd29acac8","permissions": ["SELECT","ALTER","MANAGE_GRANTS"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[roles](/reference/api/catalog/view#parameters-of-objects-in-the-users-and-roles-arrays) Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the view and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "76a9884b-aea5-46d5-a73a-000edf23f390","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays[​](/reference/api/catalog/view#parameters-of-objects-in-the-users-and-roles-arrays-1 "Direct link to parameters-of-objects-in-the-users-and-roles-arrays-1")
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the view.
Example: c590ed7f-b2b4-4e1f-ba7d-94173afdc9a3
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the view. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT", "ALTER"]
### Example[​](/reference/api/catalog/view#example-3 "Direct link to Example")
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/ef99ab32-89ca-4d1c-9e91-2c8be861bb8a' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "dataset",  
  "id": "ef99ab32-89ca-4d1c-9e91-2c8be861bb8a",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-short-distance"  
  ],  
  "type": "VIRTUAL_DATASET",  
  "tag": "f90d1526-e64b-47b1-9ab0-d25df5247cab",  
  "sql": "SELECT trip_distance_mi, fare_amount, tip_amount FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi DESC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ]  
}'  

```

Response

```
{  
  "entityType": "dataset",  
  "id": "ef99ab32-89ca-4d1c-9e91-2c8be861bb8a",  
  "type": "VIRTUAL_DATASET",  
  "path": [  
    "Business",  
    "Transportation",  
    "NYC-taxi-trips-by-distance"  
  ],  
  "createdAt": "2023-01-20T15:26:39.780Z",  
  "isMetadataExpired": false,   
  "lastMetadataRefreshAt": "2024-01-31T09:50:01.012Z",  
  "tag": "7cab1a42-8835-4d31-827b-fedee1ad38d1",  
  "sql": "SELECT trip_distance_mi, fare_amount, tip_amount FROM \"NYC-taxi-trips\" WHERE trip_distance_mi <= 2.0 ORDER BY trip_distance_mi DESC",  
  "sqlContext": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
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
      "name": "pickup_datetime",  
      "type": {  
        "name": "TIMESTAMP"  
      }  
    },  
    {  
      "name": "passenger_count",  
      "type": {  
        "name": "BIGINT"  
      }  
    },  
    {  
      "name": "passenger_payment_method",  
      "type": {  
        "name": "STRUCT",  
        "subSchema": [  
          {  
            "name": "cash",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "credit-debit",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "payment-app",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          },  
          {  
            "name": "other",  
            "type": {  
              "name": "BOOLEAN"  
            }  
          }  
        ]  
      }  
    },  
    {  
      "name": "trip_distance_mi",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "fare_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "tip_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    },  
    {  
      "name": "total_amount",  
      "type": {  
        "name": "DOUBLE"  
      }  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/view#response-status-codes-3 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
500 Internal Server Error   
  

## Refresh the Reflections on a View[​](/reference/api/catalog/view#refresh-the-reflections-on-a-view "Direct link to Refresh the Reflections on a View")
Refresh the Reflections associated with the specified view.
Read [Refreshing Reflections](/acceleration/manual-reflections/refreshing-reflections) to learn how refreshing works.
Method and URL

```
POST /api/v3/catalog/{id}/refresh  

```

### Parameters[​](/reference/api/catalog/view#parameters-4 "Direct link to Parameters")
id Path String (UUID)
Unique identifier for the view you want to refresh.
Example: c9c11d32-0576-4200-5a5b-8c7229cb3d72
### Example[​](/reference/api/catalog/view#example-4 "Direct link to Example")
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

### Response Status Codes[​](/reference/api/catalog/view#response-status-codes-4 "Direct link to Response Status Codes")
204 No Content   
  

400 Bad Request   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

## Delete a View[​](/reference/api/catalog/view#delete-a-view "Direct link to Delete a View")
Delete the specified view.
Method and URL

```
DELETE /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/view#parameters-5 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the view that you want to delete.
Example: ef99ab32-89ca-4d1c-9e91-2c8be861bb8a
### Example[​](/reference/api/catalog/view#example-5 "Direct link to Example")
Request

```
curl -X DELETE 'https://{hostname}/api/v3/catalog/ef99ab32-89ca-4d1c-9e91-2c8be861bb8a' \  
-H 'Authorization: Bearer <dremioAccessToken>' \  
-H 'Content-Type: application/json'   

```

Response

```
No response  

```

### Response Status Codes[​](/reference/api/catalog/view#response-status-codes-5 "Direct link to Response Status Codes")
204 No Content   
  

400 Bad Request   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

Was this page helpful?
[Previous User-Defined Function](/reference/api/catalog/user-defined-function)[Next Lineage](/reference/api/catalog/lineage)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous User-Defined Function](/reference/api/catalog/user-defined-function)[Next Lineage](/reference/api/catalog/lineage)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fcatalog%2Fview%2F&_biz_t=1777950557582&_biz_i=View%20%7C%20Dremio%20Documentation&_biz_n=459&rnd=753162&cdn_o=a&_biz_z=1777950557582)
