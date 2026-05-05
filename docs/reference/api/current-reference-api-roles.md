---
url: /reference/api/roles
slug: /reference/api/roles
title: "Role | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64242.457433375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Role

Version: current [26.x]
On this page
# Role Enterprise
Use the Role API to manage [roles](/security/rbac/roles).
Role Object

```
{  
  "id": "957a8af5-9211-4bc5-9fe5-1a44ff30304d",  
  "name": "Temporary Testing",  
  "type": "INTERNAL",  
  "roles": [  
    {  
      "id": "6f87a9c5-d733-4935-8331-875a4a8e09d7",  
      "name": "qa_team1",  
      "type": "INTERNAL"  
    },  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248",  
      "name": "prod_testing",  
      "type": "INTERNAL"  
    }  
  ],  
  "memberCount": 3,  
  "description": "Role for testing the new feature"  
}  

```

## Role Attributes​
id String (UUID)
Unique identifier of the role.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
* * *
name String
User-provided name of the role.
Example: Temporary Testing
* * *
type String
Origin of the role.
  * `INTERNAL`: Role was created in the Dremio user interface (UI) or with the Role API.
  * `EXTERNAL`: Role was imported from an external service like Microsoft Entra ID, Lightweight Directory Access Protocol (LDAP), or a System for Cross-domain Identity Management (SCIM) provider.
  * `SYSTEM`: Role was predefined in Dremio.


Example: INTERNAL
* * *
roles Array of Object
Information about the roles to which the role belongs.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "6f87a9c5-d733-4935-8331-875a4a8e09d7","name": "SELECT and CREATE","type": "INTERNAL"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "f8426061-8413-46ec-a84d-1b481a97b248","name": "VIEW","type": "INTERNAL"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
memberCount Integer
Number of users and roles that are members of the role.
Example: 3
* * *
description String
User-provided description of the role.
Example: Role for testing the new feature
#### Attributes of Objects in the `roles` Array​
id String (UUID)
Unique identifier of the role.
Example: 6f87a9c5-d733-4935-8331-875a4a8e09d7
* * *
name String
Name of the role.
Example: SELECT and CREATE
* * *
type String
Origin of the role.
  * `INTERNAL`: Role was created in the Dremio user interface (UI) or with the Role API.
  * `EXTERNAL`: Role was imported from an external service like Microsoft Entra ID, Lightweight Directory Access Protocol (LDAP), or a System for Cross-domain Identity Management (SCIM) provider.
  * `SYSTEM`: Role was predefined in Dremio.


Example: INTERNAL
## List Roles​
Method and URL

```
GET /api/v3/role  

```

### Parameters​
filter Query Object Optional
Filter the role list:  
| Role Fields  | Functions  | Operators  |  
| --- | --- | --- |  
| 
  * `id`
  * `name`
  * `type`

 | 
  * `startsWith()`
  * `contains()`

 | 
  * '==' encoded as `%3D%3D` (equals)
  * '&&' encoded as `%26%26` (logical and)
  * '||' encoded as `%7C%7C` (logical or)

 |  
The filter parameter value must be URL-encoded. Examples:
  * `?filter=name%3D%3D%27admin%27` evaluates to "name=='admin'"
  * `?filter=name%3D%3D%27Analyst%27%26%26type%3D%3D%27INTERNAL%27` evaluates to "name=='Analyst'&&type=='INTERNAL'"
  * `?filter=name%2Econtains%28%27data%27%29%26%26type%3D%3D%27INTERNAL%27` evaluates to "name.contains('data')&&type=='INTERNAL'


For more information, see [filter Query Parameter](/reference/api).
### Example​
Request

```
curl -X GET "https://{hostname}/api/v3/role?filter=name%2Econtains%28%27data%27%29%26%26type%3D%3D%27INTERNAL%27"  \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'   

```

Response

```
{  
  "data": [  
    {  
      "id": "61fe3576-a8c2-4006-ae16-a414eb3cd29a",  
      "name": "DataAnalyst",  
      "type": "INTERNAL",  
      "roles": [],  
      "memberCount": 0,  
      "description": ""  
    }  
  ],  
  "totalResults": 1  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  

## Create a Role​
Method and URL

```
POST /api/v3/role  

```

### Parameters​
name Body String
Name for the role. The role name must be unique and cannot be updated after the role is created.
Example: Temporary Testing
* * *
roles Body Array of Object Optional
Information about the roles to which the role should be assigned.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "6f87a9c5-d733-4935-8331-875a4a8e09d7"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "f8426061-8413-46ec-a84d-1b481a97b248"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
description Body String Optional
Description for the role.
Example: Role for testing the new feature
#### Parameters of Objects in the `roles` Array​
id Body String (UUID)
Unique identifier of the role to which the role you create should be assigned.
Example: 6f87a9c5-d733-4935-8331-875a4a8e09d7
* * *
name Body String Optional
Name of the role to which the role you create should be assigned.
Example: qa_team1
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/role' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "name": "Temporary Testing",  
  "roles": [  
    {  
      "id": "6f87a9c5-d733-4935-8331-875a4a8e09d7"  
    },  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248"  
    }  
  ],  
  "description": "Role for testing the new feature"  
}'  

```

Response

```
{  
  "id": "957a8af5-9211-4bc5-9fe5-1a44ff30304d",  
  "name": "Temporary Testing",  
  "type": "INTERNAL",  
  "roles": [  
    {  
      "id": "6f87a9c5-d733-4935-8331-875a4a8e09d7",  
      "name": "qa_team1",  
      "type": "INTERNAL"  
    },  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248",  
      "name": "prod_testing",  
      "type": "INTERNAL"  
    }  
  ],  
  "memberCount": 0,  
  "description": "Role for testing the new feature"  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Retrieve a Role by ID​
Retrieve a specific role by the role's ID.
Method and URL

```
GET /api/v3/role/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the role you want to retrieve.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/role/957a8af5-9211-4bc5-9fe5-1a44ff30304d' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "957a8af5-9211-4bc5-9fe5-1a44ff30304d",  
  "name": "Temporary Testing",  
  "type": "INTERNAL",  
  "roles": [  
    {  
      "id": "6f87a9c5-d733-4935-8331-875a4a8e09d7",  
      "name": "qa_team1",  
      "type": "INTERNAL"  
    },  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248",  
      "name": "prod_testing",  
      "type": "INTERNAL"  
    }  
  ],  
  "memberCount": 3,  
  "description": "Role for testing the new feature"  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
500 Internal Server Error   
  

## Retrieve a Role by Name​
Use this command to import a role from your integrated identity provider (IdP) by specifying its name.
Method and URL

```
GET /api/v3/role/by-name/{name}  

```

### Parameters​
name Path String
Name of the role you want to retrieve. The role name is case-insensitive. If the role name includes special characters for a URL, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, "Dremio University" should be `Dremio%20University` in the URL path.
Example: Temporary%20Testing
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/role/by-name/Temporary%20Testing' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "957a8af5-9211-4bc5-9fe5-1a44ff30304d",  
  "name": "Temporary Testing",  
  "type": "INTERNAL",  
  "roles": [  
    {  
      "id": "6f87a9c5-d733-4935-8331-875a4a8e09d7",  
      "name": "qa_team1",  
      "type": "INTERNAL"  
    },  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248",  
      "name": "prod_testing",  
      "type": "INTERNAL"  
    }  
  ],  
  "memberCount": 3,  
  "description": "Role for testing the new feature"  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
500 Internal Server Error   
  

## Update a Role​
Update the specified role.
Method and URL

```
PUT /api/v3/role/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the role you want to update.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
* * *
id Body String (UUID)
Unique identifier of the role you want to update.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
* * *
name Body String
Name of the role.
Example: Temporary Testing
* * *
roles Body Array of Object Optional
Information about the roles to which the role should be assigned. If you omit an existing role in a PUT request, Dremio removes the role. To keep all existing roles while making other updates, include all existing roles in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "f8426061-8413-46ec-a84d-1b481a97b248"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
description Body String Optional
Description to use for the role. If you omit the description in a PUT request, Dremio removes the existing description. To keep the existing description while making other updates, include the description in the PUT request.
Example: Role for viewing the new feature
#### Parameters of Objects in the `roles` Array​
id Body String (UUID)
Unique identifier of the role to which the role you update should be assigned.
Example: f8426061-8413-46ec-a84d-1b481a97b248
* * *
name Body String Optional
Name of the role to which the role you update should be assigned.
Example: prod_testing
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/role/957a8af5-9211-4bc5-9fe5-1a44ff30304d' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "id": "957a8af5-9211-4bc5-9fe5-1a44ff30304d",  
  "name": "Temporary Testing",  
  "roles": [  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248"  
    }  
  ],  
  "description": "Role for viewing the new feature"  
}'  

```

Response

```
{  
  "id": "957a8af5-9211-4bc5-9fe5-1a44ff30304d",  
  "name": "Temporary Testing",  
  "type": "INTERNAL",  
  "roles": [  
    {  
      "id": "f8426061-8413-46ec-a84d-1b481a97b248",  
      "name": "prod_testing",  
      "type": "INTERNAL"  
    }  
  ],  
  "memberCount": 3,  
  "description": "Role for viewing the new feature"  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Add and Remove Role Members​
Add and remove members (roles and users) of the specified role.
Method and URL

```
PATCH /api/v3/role/{id}/member  

```

### Parameters​
id Path String (UUID)
Unique identifier of the role for which you want to add or remove members.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
* * *
op Body String
Action to take for the user or role.
Enum: add, remove
Example: add
* * *
id Body String (UUID)
Unique identifier of the user or role to add or remove.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
* * *
type Body String
Type of member you want to add or remove.
Enum: role, user
Example: role
The request body is an array of objects. Each object includes the three parameters for a single user or role that you want to add or remove:
### Example​
Request

```
curl -X PATCH 'https://{hostname}/api/v3/role/957a8af5-9211-4bc5-9fe5-1a44ff30304d/member' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '[  
  {  
    "op": "add",  
    "id": "f8426061-8413-46ec-a84d-1b481a97b248",  
    "type": "role"  
  },  
  {  
    "op": "add",  
    "id": "671cdeb8-1af9-45b6-98ee-8ca1e0543a38",  
    "type": "user"  
  },  
  {  
    "op": "remove",  
    "id": "6f87a9c5-d733-4935-8331-875a4a8e09d7",  
    "type": "role"  
  },  
  {  
    "op": "remove",  
    "id": "614a6938-7a69-4f7c-ab96-00b50addb1f9",  
    "type": "user"  
  }  
]'  

```

Response

```
No response  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Delete a Role​
Delete the specified role.
Method and URL

```
DELETE /api/v3/role/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the role that you want to delete.
It is not possible to delete a system role, like ADMIN or PUBLIC. Requests to delete a system role result in a `404 Not Found` response.
Example: 957a8af5-9211-4bc5-9fe5-1a44ff30304d
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/role/957a8af5-9211-4bc5-9fe5-1a44ff30304d' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
No response  

```

### Response Status Codes​
204 No Content   
  

401 Unauthorized   
  

404 Not Found   
  

405 Method Not Allowed   
  

Was this page helpful?
[Previous Reflection](/reference/api/reflections)[Next Role Privileges](/reference/api/roles/privilege)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reflection](/reference/api/reflections)[Next Role Privileges](/reference/api/roles/privilege)
!
