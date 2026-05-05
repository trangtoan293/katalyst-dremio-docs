---
url: /reference/api/user/privilege
title: "User Privileges | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65347.6812005
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [User](/reference/api/user)
  * User Privileges

Version: current [26.x]
On this page
# User Privileges Enterprise
Use the User API to retrieve [privilege](/security/rbac/privileges) information for Dremio users.
User Privileges Object

```
{  
  "data": [  
    {  
      "name": "\"@dremio\".\"1c0accd3-e8c0-1d55-23a2-0ff6529f6c00\"",  
      "type": "PDS",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"@dremio\".\"1c0accd3-e8c0-1d55-23a2-0ff6529f6c00\"",  
      "type": "PDS",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "\"@dremio\".Business",  
      "type": "FOLDER",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"@dremio\".Business",  
      "type": "FOLDER",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "INSERT"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "DROP"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "CREATE_TABLE"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "MANAGE_GRANTS"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "MODIFY"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "ALTER_REFLECTION"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "VIEW_REFLECTION"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"testing\".\"NYC-taxi-trips\"",  
      "type": "VDS",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "\"testing\".\"NYC-taxi-trips\"",  
      "type": "VDS",  
      "privilege": "MANAGE_GRANTS"  
    },  
    {  
      "name": "\"testing\".\"NYC-taxi-trips\"",  
      "type": "VDS",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "MANAGE_GRANTS"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "DELETE"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "MODIFY"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "VIEW"  
    }  
  ]  
}  

```

## User Privileges Attributes[​](/reference/api/user/privilege#user-privileges-attributes "Direct link to User Privileges Attributes")
[data](/reference/api/user/privilege#attributes-of-objects-in-the-data-array) Array of Object
Information about the privileges the specified user has for the catalog objects in the current organization, up to a maximum of 100 privileges. Each object in the data array describes a privilege on a specific catalog object.
#### Attributes of Objects in the `data` Array[​](/reference/api/user/privilege#attributes-of-objects-in-the-data-array "Direct link to attributes-of-objects-in-the-data-array")
name String (UUID)
Name of the object to which the privilege applies. The name includes the entity's parent space or folder, if any.
Example: "@dremio"."1c0accd3-e8c0-1d55-23a2-0ff6529f6c00"
* * *
type String
Type of the object to which the privilege applies.
Enum: SPACE, SOURCE, HOME, FOLDER, PDS, VDS, FUNCTION
Example: PDS
* * *
privilege String
Name of the privilege that the user has for the object. Available privileges vary for different object types.
Example: ALTER
## Retrieve User Privileges[​](/reference/api/user/privilege#retrieve-user-privileges "Direct link to Retrieve User Privileges")
Retrieve the specified user's privileges.
Method and URL

```
GET /api/v3/user/{id}/privilege  

```

### Parameters[​](/reference/api/user/privilege#parameters "Direct link to Parameters")
id Path String
Unique identifier of the user whose privileges you want to retrieve.
Example: b9dbebc7-bc3b-4d56-9154-31762ab65a43
### Example[​](/reference/api/user/privilege#example "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/user/b9dbebc7-bc3b-4d56-9154-31762ab65a43/privilege' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "name": "\"@dremio\".\"1c0accd3-e8c0-1d55-23a2-0ff6529f6c00\"",  
      "type": "PDS",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"@dremio\".\"1c0accd3-e8c0-1d55-23a2-0ff6529f6c00\"",  
      "type": "PDS",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "\"@dremio\".Business",  
      "type": "FOLDER",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"@dremio\".Business",  
      "type": "FOLDER",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "INSERT"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "DROP"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "CREATE_TABLE"  
    },  
    {  
      "name": "Samples",  
      "type": "SOURCE",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "MANAGE_GRANTS"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "MODIFY"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "ALTER_REFLECTION"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "VIEW_REFLECTION"  
    },  
    {  
      "name": "\"testing\"",  
      "type": "SPACE",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "\"testing\".\"NYC-taxi-trips\"",  
      "type": "VDS",  
      "privilege": "SELECT"  
    },  
    {  
      "name": "\"testing\".\"NYC-taxi-trips\"",  
      "type": "VDS",  
      "privilege": "MANAGE_GRANTS"  
    },  
    {  
      "name": "\"testing\".\"NYC-taxi-trips\"",  
      "type": "VDS",  
      "privilege": "ALTER"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "MANAGE_GRANTS"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "DELETE"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "MODIFY"  
    },  
    {  
      "name": "taxi",  
      "type": "SCRIPT",  
      "privilege": "VIEW"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/user/privilege#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

Was this page helpful?
[Previous Credentials](/reference/api/user/credentials)[Next Workload Management](/reference/api/wlm)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Credentials](/reference/api/user/credentials)[Next Workload Management](/reference/api/wlm)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fuser%2Fprivilege%2F&_biz_t=1777951667949&_biz_i=User%20Privileges%20%7C%20Dremio%20Documentation&_biz_n=2721&rnd=71501&cdn_o=a&_biz_z=1777951667950)
