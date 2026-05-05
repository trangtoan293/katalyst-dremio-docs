---
url: /reference/api/catalog/user-defined-function
title: "User-Defined Function | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.695834958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * User-Defined Function

Version: current [26.x]
On this page
# User-Defined Function
Use the Catalog API to retrieve information about user-defined functions (UDFs), as well as to create, update, and delete UDFs.
User-Defined Function Object

```
{  
  "entityType": "function",  
  "id": "1568aa06-4eac-48cf-bc30-2aa3053c2840",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "tag": "qBWpD7x6+Ws=",  
  "createdAt": "2024-08-01T20:20:38.547Z",  
  "lastModified": "2024-08-01T20:20:38.547Z",  
  "isScalar": false,  
  "functionArgList": "\"domain\" CHARACTER VARYING, \"orderdate\" DATE",  
  "functionBody": "SELECT \"name\", \"email\", \"order_date\" FROM \"customer_data\" WHERE LOWER(\"email\") LIKE '%' || LOWER(domain) AND \"order_date\" >= orderdate",  
  "returnType": "\"name\" CHARACTER VARYING, \"email\" CHARACTER VARYING, \"order_date\" DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "owner": {  
    "ownerId": "4740ab48-39c6-434c-9086-8f6e52e65349",  
    "ownerType": "USER"  
  }  
}  

```

## User-Defined Function Attributes[​](/reference/api/catalog/user-defined-function#user-defined-function-attributes "Direct link to User-Defined Function Attributes")
entityType String
Type of the catalog object. For user-defined functions, the entityType is `function`.
* * *
id String (UUID)
Unique identifier of the user-defined function.
Example: 1568aa06-4eac-48cf-bc30-2aa3053c2840
* * *
path Array of String
Path of the user-defined function within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the name of the function itself as the last item in the array.
Example: ["team_folder","test_subfolder","filter_domain_orderdates"]
* * *
tag String
Unique identifier of the version of the user-defined function. Dremio changes the tag whenever the function changes and uses the tag to ensure that PUT requests apply to the most recent version of the function.
Example: qBWpD7x6+Ws=
* * *
createdAt String
Date and time at which the user-defined function was created, in UTC format.
Example: 2024-08-01T20:20:38.547Z
* * *
lastModified String
Date and time at which the user-defined function was last modified, in UTC format.
Example: 2024-08-01T20:20:38.547Z
* * *
isScalar Boolean
If the user-defined function is a scalar function, `true`. If the user-defined function is a tabular function, `false`.
Example: false
* * *
functionArgList String
The user-defined function's arguments and their [data types](/reference/sql/data-types). If the function includes multiple arguments, the arguments are separated with a comma.
In response objects, the functionArgList value may contain aliases for data types, such as `CHARACTER VARYING` (an alias for `VARCHAR`).
Example: "domain" CHARACTER VARYING, "orderdate" DATE
* * *
functionBody String
The statement that the user-defined function executes.
Example: SELECT "name", "email", "order_date" FROM "customer_data" WHERE LOWER("email") LIKE '%' || LOWER(domain) AND "order_date" &gt;= orderdate
* * *
returnType String
The [data type](/reference/sql/data-types) of the result that the function returns (for scalar functions) or of each column that the function returns, separated by commas (for tabular functions).
Example: "name" CHARACTER VARYING, "email" CHARACTER VARYING, "order_date" DATE
* * *
[accessControlList](/reference/api/catalog/user-defined-function#attributes-of-the-accesscontrollist-object) Object
Enterprise only. Information about users and roles with access to the user-defined function and the specific privileges each user or role has. May include an array of users, an array of roles, or both, depending on the configured access and privileges. The accessControlList array is empty if function-specific access control privileges are not set.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the user-defined function. Only appears in the response if the request URL includes the `permissions` query parameter. For more information, read [User-Defined Function (UDF) Privileges](/security/rbac/privileges#user-defined-function-udf-privileges).
* * *
[owner](/reference/api/catalog/user-defined-function#attributes-of-the-owner-object) Object
Information about the user-defined function's owner.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"ownerId": "4740ab48-39c6-434c-9086-8f6e52e65349","ownerType": "USER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Attributes of the `accessControlList` Object[​](/reference/api/catalog/user-defined-function#attributes-of-the-accesscontrollist-object "Direct link to attributes-of-the-accesscontrollist-object")
[users](/reference/api/catalog/user-defined-function#attributes-of-objects-in-the-users-and-roles-arrays) Array of Object
Enterprise only. List of users with access to the user-defined function and the specific privileges each user has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5", "permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[roles](/reference/api/catalog/user-defined-function#attributes-of-objects-in-the-users-and-roles-arrays) Array of Object
Enterprise only. List of roles whose members have access to the user-defined function and the specific privileges each role has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889", "permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of the `owner` Object[​](/reference/api/catalog/user-defined-function#attributes-of-the-owner-object "Direct link to attributes-of-the-owner-object")
ownerId String (UUID)
Unique identifier of the user-defined function's owner.
Example: 4740ab48-39c6-434c-9086-8f6e52e65349
* * *
ownerType String
Type of owner of the user-defined function.
Enum: USER, ROLE
Example: USER
#### Attributes of Objects in the `users` and `roles` Arrays[​](/reference/api/catalog/user-defined-function#attributes-of-objects-in-the-users-and-roles-arrays "Direct link to attributes-of-objects-in-the-users-and-roles-arrays")
id String
Enterprise only. Unique identifier of the user or role with access to the user-defined function.
Example: 4740ab48-39c6-434c-9086-8f6e52e65349
* * *
permissions Array of String
Enterprise only. List of privileges the user or role has on the user-defined function. For more information, read [User-Defined Function (UDF) Privileges](/security/rbac/privileges#user-defined-function-udf-privileges).
Enum: ALTER, EXECUTE, MANAGE_GRANTS, OWNERSHIP
Example: ["ALTER","EXECUTE"]
## Create a User-Defined Function[​](/reference/api/catalog/user-defined-function#create-a-user-defined-function "Direct link to Create a User-Defined Function")
Create a new user-defined function.
Method and URL

```
POST /api/v3/catalog  

```

### Parameters[​](/reference/api/catalog/user-defined-function#parameters "Direct link to Parameters")
entityType Body String
Type of the catalog object. For user-defined functions, the entityType is `function`.
* * *
path Body Array of String
Path where you want to create the user-defined function within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the name of the function itself as the last item in the array.
Example: ["team_folder","test_subfolder","filter_domain_orderdates"]
* * *
isScalar Body Boolean
If the user-defined function is a scalar function, `true`. If the user-defined function is a tabular function, `false`.
Example: false
* * *
functionArgList Body String
The name of each argument in the user-defined function and the argument's [data type](/reference/sql/data-types). Separate the name and data type with a single space. If the function includes multiple arguments, separate the arguments with a comma.
In response objects, the functionArgList value may contain aliases for data types, such as `CHARACTER VARYING` (an alias for `VARCHAR`).
Example: domain VARCHAR, orderdate DATE
* * *
functionBody Body String
The statement that the user-defined function should execute.
Example: SELECT name, email, order_date FROM customer_data WHERE LOWER(email) LIKE '%' || LOWER(domain) AND order_date &gt;= orderdate
* * *
returnType Body String
The [data type](/reference/sql/data-types) of each column that the user-defined function should return.
Example: name VARCHAR, email VARCHAR, order_date DATE
* * *
[accessControlList](/reference/api/catalog/user-defined-function#parameters-of-the-accesscontrollist-object) Body Object Optional
Enterprise only. Object used to specify which users and roles should have access to the user-defined function and the specific privileges each user or role should have. May include an array of users, an array of roles, or both. Omit if you do not want to configure function-specific access control privileges.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object[​](/reference/api/catalog/user-defined-function#parameters-of-the-accesscontrollist-object "Direct link to parameters-of-the-accesscontrollist-object")
[users](/reference/api/catalog/user-defined-function#parameters-of-objects-in-the-users-and-roles-arrays) Body Array of Object Optional
Enterprise only. List of users who should have access to the user-defined function and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[roles](/reference/api/catalog/user-defined-function#parameters-of-objects-in-the-users-and-roles-arrays) Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the user-defined function and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays[​](/reference/api/catalog/user-defined-function#parameters-of-objects-in-the-users-and-roles-arrays "Direct link to parameters-of-objects-in-the-users-and-roles-arrays")
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the user-defined function.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the user-defined function. For more information, read [User-Defined Function (UDF) Privileges](/security/rbac/privileges#user-defined-function-udf-privileges).
Enum: ALTER, EXECUTE, MANAGE_GRANTS, OWNERSHIP
Example: ["ALTER","EXECUTE"]
### Example[​](/reference/api/catalog/user-defined-function#example "Direct link to Example")
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "function",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "isScalar": false,  
  "functionArgList": "domain VARCHAR, orderdate DATE",  
  "functionBody": "SELECT name, email, order_date FROM customer_data WHERE LOWER(email) LIKE '%' || LOWER(domain) AND order_date >= orderdate",  
  "returnType": "name VARCHAR, email VARCHAR, order_date DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
        "ALTER",  
        "EXECUTE"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
        "ALTER",  
        "EXECUTE"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "function",  
  "id": "1568aa06-4eac-48cf-bc30-2aa3053c2840",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "tag": "qBWpD7x6+Ws=",  
  "createdAt": "2024-08-01T20:20:38.547Z",  
  "lastModified": "2024-08-01T20:20:38.547Z",  
  "isScalar": false,  
  "functionArgList": "\"domain\" CHARACTER VARYING, \"orderdate\" DATE",  
  "functionBody": "SELECT \"name\", \"email\", \"order_date\" FROM \"customer_data\" WHERE LOWER(\"email\") LIKE '%' || LOWER(domain) AND \"order_date\" >= orderdate",  
  "returnType": "\"name\" CHARACTER VARYING, \"email\" CHARACTER VARYING, \"order_date\" DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "owner": {  
    "ownerId": "4740ab48-39c6-434c-9086-8f6e52e65349",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes[​](/reference/api/catalog/user-defined-function#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
409 Conflict   
  

## Retrieve a User-Defined Function by ID[​](/reference/api/catalog/user-defined-function#retrieve-a-user-defined-function-by-id "Direct link to Retrieve a User-Defined Function by ID")
Retrieve a user-defined function and information about its contents by specifying the function's ID.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/user-defined-function#parameters-1 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the user-defined function that you want to retrieve.
Example: 1568aa06-4eac-48cf-bc30-2aa3053c2840
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api#include-and-exclude-query-parameters).
Example: ?include=permissions
### Example[​](/reference/api/catalog/user-defined-function#example-1 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/1568aa06-4eac-48cf-bc30-2aa3053c2840' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "function",  
  "id": "1568aa06-4eac-48cf-bc30-2aa3053c2840",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "tag": "qBWpD7x6+Ws=",  
  "createdAt": "2024-08-01T20:20:38.547Z",  
  "lastModified": "2024-08-01T20:20:38.547Z",  
  "isScalar": false,  
  "functionArgList": "\"domain\" CHARACTER VARYING, \"orderdate\" DATE",  
  "functionBody": "SELECT \"name\", \"email\", \"order_date\" FROM \"customer_data\" WHERE LOWER(\"email\") LIKE '%' || LOWER(domain) AND \"order_date\" >= orderdate",  
  "returnType": "\"name\" CHARACTER VARYING, \"email\" CHARACTER VARYING, \"order_date\" DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "owner": {  
    "ownerId": "4740ab48-39c6-434c-9086-8f6e52e65349",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes[​](/reference/api/catalog/user-defined-function#response-status-codes-1 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve a User-Defined Function by Path[​](/reference/api/catalog/user-defined-function#retrieve-a-user-defined-function-by-path "Direct link to Retrieve a User-Defined Function by Path")
Retrieve a user-defined function and information about its contents by specifying the function's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters[​](/reference/api/catalog/user-defined-function#parameters-2 "Direct link to Parameters")
path Path String
Path of the user-defined function within Dremio. The path consists of the source or space, followed by any folder and subfolders, followed by the name of the function itself. Separate each level of the path with a forward slash.
Example: team_folder/test_subfolder/filter_domain_orderdates
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api#include-and-exclude-query-parameters).
Example: ?include=permissions
### Example[​](/reference/api/catalog/user-defined-function#example-2 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/team_folder/test_subfolder/filter_domain_orderdates' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "function",  
  "id": "1568aa06-4eac-48cf-bc30-2aa3053c2840",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "tag": "qBWpD7x6+Ws=",  
  "createdAt": "2024-08-01T20:20:38.547Z",  
  "lastModified": "2024-08-01T20:20:38.547Z",  
  "isScalar": false,  
  "functionArgList": "\"domain\" CHARACTER VARYING, \"orderdate\" DATE",  
  "functionBody": "SELECT \"name\", \"email\", \"order_date\" FROM \"customer_data\" WHERE LOWER(\"email\") LIKE '%' || LOWER(domain) AND \"order_date\" >= orderdate",  
  "returnType": "\"name\" CHARACTER VARYING, \"email\" CHARACTER VARYING, \"order_date\" DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "owner": {  
    "ownerId": "4740ab48-39c6-434c-9086-8f6e52e65349",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes[​](/reference/api/catalog/user-defined-function#response-status-codes-2 "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Update a User-Defined Function[​](/reference/api/catalog/user-defined-function#update-a-user-defined-function "Direct link to Update a User-Defined Function")
Update the specified user-defined function.
Method and URL

```
PUT /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/user-defined-function#parameters-3 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the user-defined function that you want to update.
Example: 1568aa06-4eac-48cf-bc30-2aa3053c2840
* * *
entityType Body String
Type of the catalog object. For user-defined functions, the entityType is `function`.
* * *
id Body String (UUID)
Unique identifier of the user-defined function that you want to update.
Example: 1568aa06-4eac-48cf-bc30-2aa3053c2840
* * *
path Body Array of String
Path of the user-defined function within Dremio, expressed as an array. The path consists of the source or user-defined function, followed by any folder and subfolders, followed by the name of the function itself as the last item in the array.
Example: ["team_folder","test_subfolder","filter_domain_orderdates"]
* * *
tag Body String
Unique identifier of the version of the user-defined function that you want to update. Dremio uses the tag to ensure that you are requesting to update the most recent version of the user-defined function.
Example: qBWpD7x6+Ws=
* * *
isScalar Body Boolean
If the user-defined function is a scalar function, `true`. If the user-defined function is a tabular function, `false`.
Example: false
* * *
functionArgList Body String
The name of each argument in the user-defined function and the argument's [data type](/reference/sql/data-types). Separate the name and data type with a single space. If the function includes multiple arguments, separate the arguments with a comma.
In response objects, the functionArgList value may contain aliases for data types, such as `CHARACTER VARYING` (an alias for `VARCHAR`).
Example: domain VARCHAR, orderdate DATE
* * *
functionBody Body String
The statement that the user-defined function should execute.
Example: SELECT name, email, phone_number, order_date FROM customer_data WHERE LOWER(email) LIKE '%' || LOWER(domain) AND order_date &gt;= orderdate
* * *
returnType Body String
The [data type](/reference/sql/data-types) of each column that the user-defined function should return.
Example: name VARCHAR, email VARCHAR, phone_number VARCHAR, order_date DATE
* * *
[accessControlList](/reference/api/catalog/user-defined-function#parameters-of-the-accesscontrollist-object-1) Body String Optional
Enterprise only. Object used to specify which users and roles should have access to the user-defined function and the specific privileges each user or role should have. If you omit the accessControlList object in a PUT request, Dremio removes all existing user and role access settings from the function. To keep existing user and role access settings while making other updates, duplicate the existing accessControlList array in the PUT request.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALTER","EXECUTE", "MANAGE_GRANTS"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object[​](/reference/api/catalog/user-defined-function#parameters-of-the-accesscontrollist-object-1 "Direct link to parameters-of-the-accesscontrollist-object-1")
[users](/reference/api/catalog/user-defined-function#parameters-of-objects-in-the-users-and-roles-arrays-1) Body Array of Object Optional
Enterprise only. List of users who should have access to the user-defined function and the specific privileges each user should have. If you omit the users object in a PUT request, Dremio removes all existing user access settings from the function. To keep existing user access settings while making other updates, duplicate the existing users array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5", "permissions": ["ALTER","EXECUTE", "MANAGE_GRANTS"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[roles](/reference/api/catalog/user-defined-function#parameters-of-objects-in-the-users-and-roles-arrays-1) Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the user-defined function and the specific privileges each role should have. If you omit the roles object in a PUT request, Dremio removes all existing role access settings from the function. To keep existing role access settings while making other updates, duplicate the existing roles array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889", "permissions": ["ALTER","EXECUTE"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays[​](/reference/api/catalog/user-defined-function#parameters-of-objects-in-the-users-and-roles-arrays-1 "Direct link to parameters-of-objects-in-the-users-and-roles-arrays-1")
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the user-defined function.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the user-defined function. For more information, read [User-Defined Function (UDF) Privileges](/security/rbac/privileges#user-defined-function-udf-privileges).
Enum: ALTER, EXECUTE, MANAGE_GRANTS, OWNERSHIP
Example: ["ALTER","EXECUTE", "MANAGE_GRANTS"]
### Example[​](/reference/api/catalog/user-defined-function#example-3 "Direct link to Example")
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/1568aa06-4eac-48cf-bc30-2aa3053c2840' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "function",  
  "id": "1568aa06-4eac-48cf-bc30-2aa3053c2840",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "tag": "qBWpD7x6+Ws=",  
  "isScalar": false,  
  "functionArgList": "domain VARCHAR, orderdate DATE",  
  "functionBody": "SELECT name, email, phone_number, order_date FROM customer_data WHERE LOWER(email) LIKE '%' || LOWER(domain) AND order_date >= orderdate",  
  "returnType": "name VARCHAR, email VARCHAR, phone_number VARCHAR, order_date DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER",  
          "EXECUTE",  
          "MANAGE_GRANTS"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
        "ALTER",  
        "EXECUTE"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "function",  
  "id": "1568aa06-4eac-48cf-bc30-2aa3053c2840",  
  "path": [  
    "team_folder",  
    "test_subfolder",  
    "filter_domain_orderdates"  
  ],  
  "tag": "4RuPbmWPoa9=",  
  "createdAt": "2024-08-01T20:20:38.547Z",  
  "lastModified": "2024-08-07T17:17:17.360Z",  
  "isScalar": false,  
  "functionArgList": "\"domain\" CHARACTER VARYING, \"orderdate\" DATE",  
  "functionBody": "SELECT \"name\", \"email\", \"phone_number\", \"order_date\" FROM \"customer_data\" WHERE LOWER(\"email\") LIKE '%' || LOWER(domain) AND \"order_date\" >= orderdate",  
  "returnType": "\"name\" CHARACTER VARYING, \"email\" CHARACTER VARYING, \"phone_number\" CHARACTER VARYING, \"order_date\" DATE",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER",  
          "EXECUTE",  
          "MANAGE_GRANTS"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "ALTER",  
          "EXECUTE"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "owner": {  
    "ownerId": "4740ab48-39c6-434c-9086-8f6e52e65349",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes[​](/reference/api/catalog/user-defined-function#response-status-codes-3 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Delete a User-Defined Function[​](/reference/api/catalog/user-defined-function#delete-a-user-defined-function "Direct link to Delete a User-Defined Function")
Delete the specified user-defined function.
Method and URL

```
DELETE /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/user-defined-function#parameters-4 "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the user-defined function that you want to delete.
Example: 1568aa06-4eac-48cf-bc30-2aa3053c2840
### Example[​](/reference/api/catalog/user-defined-function#example-4 "Direct link to Example")
Request

```
curl -X DELETE 'https://{hostname}/api/v3/catalog/1568aa06-4eac-48cf-bc30-2aa3053c2840' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'   

```

Response

```
No response  

```

### Response Status Codes[​](/reference/api/catalog/user-defined-function#response-status-codes-4 "Direct link to Response Status Codes")
204 No Content   
  

400 Bad Request   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

Was this page helpful?
[Previous Table](/reference/api/catalog/table)[Next View](/reference/api/catalog/view)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Table](/reference/api/catalog/table)[Next View](/reference/api/catalog/view)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fcatalog%2Fuser-defined-function%2F&_biz_t=1777950556465&_biz_i=User-Defined%20Function%20%7C%20Dremio%20Documentation&_biz_n=456&rnd=96755&cdn_o=a&_biz_z=1777950556465)
