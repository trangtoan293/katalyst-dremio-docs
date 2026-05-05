---
url: /reference/api/roles/privilege
title: "Role Privileges | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64791.295080666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Role](/reference/api/roles)
  * Role Privileges

Version: current [26.x]
On this page
# Role Privileges Enterprise
Use the Role API to retrieve information about the [privileges](/security/rbac/privileges) assigned to roles.
Role Privileges Object

```
{  
  "data": [  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "CREATE_TABLE"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "INSERT"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "DROP"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "mysql",  
      "type": "SOURCE",  
      "privilege": "EXTERNAL_QUERY"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples.\"samples.dremio.com\"",  
      "type": "FOLDER",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples.\"samples.dremio.com\".\"SF_incidents2016.json\"",  
      "type": "DATASET",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "testing",  
      "type": "SPACE",  
      "privilege": "SELECT"  
    }  
  ]  
}  

```

## Role Privileges Attributes[​](/reference/api/roles/privilege#role-privileges-attributes "Direct link to Role Privileges Attributes")
[data](/reference/api/roles/privilege#attributes-of-objects-in-the-data-array) Array of Object
Information about the privileges the specified role has for the entities in the current organization, up to a maximum of 100 privileges. Each object in the data array describes a privilege the role has for a specific entity.
#### Attributes of Objects in the `data` Array[​](/reference/api/roles/privilege#attributes-of-objects-in-the-data-array "Direct link to attributes-of-objects-in-the-data-array")
name String (UUID)
Name of the object to which the privilege applies. The name includes the objects's parent objects, if any.
Example: hive
* * *
type String
Type of the object to which the privilege applies.
Enum: SPACE, SOURCE, HOME, FOLDER, DATASET, FUNCTION
Example: SOURCE
* * *
privilege String
Name of the privilege that the role has for the object. Available privileges vary for different object types.
Example: SELECT
## Retrieve Role Privileges[​](/reference/api/roles/privilege#retrieve-role-privileges "Direct link to Retrieve Role Privileges")
Retrieve the specified role's privileges.
Method and URL

```
GET /api/v3/role/{id}/privilege  

```

### Parameters[​](/reference/api/roles/privilege#parameters "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the role whose privileges you want to retrieve.
Example: 3d83e7d7-98ee-4afa-ebdd-41c30eb92744
### Example[​](/reference/api/roles/privilege#example "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/role/3d83e7d7-98ee-4afa-ebdd-41c30eb92744/privilege' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "CREATE_TABLE"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "INSERT"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "DROP"  
    },  
    {  
      "name": "hive",  
      "type": "SOURCE",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "mysql",  
      "type": "SOURCE",  
      "privilege": "EXTERNAL_QUERY"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples.\"samples.dremio.com\"",  
      "type": "FOLDER",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples.\"samples.dremio.com\".\"SF_incidents2016.json\"",  
      "type": "DATASET",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "testing",  
      "type": "SPACE",  
      "privilege": "SELECT"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/roles/privilege#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

Was this page helpful?
[Previous Role](/reference/api/roles)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Role](/reference/api/roles)
