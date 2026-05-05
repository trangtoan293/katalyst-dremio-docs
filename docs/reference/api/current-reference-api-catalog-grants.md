---
url: /reference/api/catalog/grants
slug: /reference/api/catalog/grants
title: "Grants | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.630584
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Grants

Version: current [26.x]
On this page
# Grants Enterprise
Use the Catalog API to grant user and role privileges on specific catalog objects.
Grants Object

```
{  
  "id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda",  
  "availablePrivileges": [  
    "ALTER",  
    "DELETE",  
    "INSERT",  
    "MANAGE_GRANTS",  
    "SELECT",  
    "TRUNCATE",  
    "UPDATE"  
  ],  
  "grants": [  
    {  
      "privileges": [  
        "ALTER",  
        "SELECT",  
        "MANAGE_GRANTS"  
      ],  
      "granteeType": "USER",  
      "id": "27937a63-e7e5-4478-8d3c-4ad3f20d43c0",  
      "name": "jeansmith",  
      "firstName": "Jean",  
      "lastName": "Smith",  
      "email": "jean_smith@example.com"  
    },  
    {  
      "privileges": [  
        "ALTER",  
        "SELECT"  
      ],  
      "granteeType": "ROLE",  
      "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
      "name": "examplerole"  
    }  
  ]  
}  

```

## Grants Attributes​
id String
Unique identifier of the Dremio catalog object.
Example: 7f1c4660-cd7b-40d0-97d1-b8a6f431cbda
* * *
availablePrivileges Array of String
List of available privileges on the catalog object.
Example: ["ALTER","DELETE","INSERT","MANAGE_GRANTS","SELECT","TRUNCATE","UPDATE"]
* * *
grants Array of Object
Information about the privileges and grantees for the catalog object. If the grants array is empty, there are no explicit grants for the object.
An empty grants array does not mean no users have access to the object at all. For example, admin users implicitly have all privileges on all catalog objects, owners implicitly have all privileges on everything they own, and children objects inherit the grants for their parent objects.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"privileges": ["ALTER","SELECT","MANAGE_GRANTS"],"granteeType": "USER","id": "27937a63-e7e5-4478-8d3c-4ad3f20d43c0","name": "jeansmith","firstName": "Jean","lastName": "Smith","email": "
#### Attributes of Objects in the `grants` Array​
privileges String
List of privileges granted to the user or role. For more information, read [Privileges](/security/rbac/privileges).
Example: ["ALTER","SELECT","MANAGE_GRANTS"]
* * *
granteeType String
Type of grantee.
Enum: USER, ROLE
Example: USER
* * *
id String
Unique identifier of the user or role.
Example: 27937a63-e7e5-4478-8d3c-4ad3f20d43c0
* * *
name String
Name of the user or role.
Example: jeansmith
* * *
firstName String
For users, the user's first name. Not included for roles.
Example: Jean
* * *
lastName String
For users, the user's last name. Not included for roles.
Example: Smith
* * *
email String
For users, the user's email address. Not included for roles.
Example: 
## Create or Updating Privilege Grants on a Catalog Object​
Create or update the privileges granted to users and roles on the specified catalog object.
You must have the [MANAGE GRANTS privilege](/security/rbac/privileges) to create or update privilege grants on catalog objects.
Method and URL

```
PUT /api/v3/catalog/{id}/grants  

```

### Parameters​
id Path String (UUID)
Unique identifier of the Dremio catalog object.
Example: 7f1c4660-cd7b-40d0-97d1-b8a6f431cbda
* * *
grants Body Array of Object
Array of objects that specify which users and roles should have privileges on the catalog object, as well as each user's and role's specific privileges. May include objects for users, roles, or both.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"privileges": ["ALTER","SELECT","MANAGE_GRANTS"],"granteeType": "USER","id": "27937a63-e7e5-4478-8d3c-4ad3f20d43c0"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"privileges": ["SELECT","ALTER"],"granteeType": "ROLE","id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Parameters of Objects in the `grants` Array​
privileges Body Array of String
List of privileges to grant to the user or role. Use the Privileges endpoint to retrieve a list of available privileges on the catalog object type. For more information, read [Privileges](/security/rbac/privileges).
Example: ["ALTER","SELECT","MANAGE_GRANTS"]
* * *
granteeType Body String
Type of grantee.
Enum: USER, ROLE
Example: USER
* * *
id Body String
Unique identifier of the user or role.
Example: 27937a63-e7e5-4478-8d3c-4ad3f20d43c0
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/7f1c4660-cd7b-40d0-97d1-b8a6f431cbda/grants' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "grants": [  
    {  
      "privileges": [  
        "ALTER",  
        "SELECT",  
        "MANAGE_GRANTS"  
      ],  
      "granteeType": "USER",  
      "id": "27937a63-e7e5-4478-8d3c-4ad3f20d43c0"  
    },  
    {  
      "privileges": [  
        "SELECT",  
        "ALTER"  
      ],  
      "granteeType": "ROLE",  
      "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889"  
    }  
  ]  
}'  

```

Response

```
No response  

```

### Response Status Codes​
204 No Content   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

## Retrieve Privileges and Grantees on a Catalog Object​
Retrieve information about the privileges granted to users and roles on the specified catalog object.
Use this endpoint in place of the Catalog API Privileges endpoint, which is deprecated. We expect to remove the Privileges endpoint by July 2025.
You must have the [MANAGE GRANTS privilege](/security/rbac/privileges) to retrieve privilege grants on catalog objects.
Method and URL

```
GET /api/v3/catalog/{id}/grants  

```

### Parameters​
id Path String (UUID)
Unique identifier of the object whose privilege grants you want to retrieve.
Example: 7f1c4660-cd7b-40d0-97d1-b8a6f431cbda
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/7f1c4660-cd7b-40d0-97d1-b8a6f431cbda/grants' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda",  
  "availablePrivileges": [  
    "ALTER",  
    "DELETE",  
    "INSERT",  
    "MANAGE_GRANTS",  
    "SELECT",  
    "TRUNCATE",  
    "UPDATE"  
  ],  
  "grants": [  
    {  
      "privileges": [  
        "ALTER",  
        "SELECT",  
        "MANAGE_GRANTS"  
      ],  
      "granteeType": "USER",  
      "id": "27937a63-e7e5-4478-8d3c-4ad3f20d43c0",  
      "name": "jeansmith",  
      "firstName": "Jean",  
      "lastName": "Smith",  
      "email": "jean_smith@example.com"  
    },  
    {  
      "privileges": [  
        "ALTER",  
        "SELECT"  
      ],  
      "granteeType": "ROLE",  
      "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
      "name": "examplerole"  
    }  
  ]  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous Wiki](/reference/api/catalog/wiki)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Wiki](/reference/api/catalog/wiki)
!!
