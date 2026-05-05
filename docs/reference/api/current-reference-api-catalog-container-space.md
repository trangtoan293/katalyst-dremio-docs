---
url: /reference/api/catalog/container-space
slug: /reference/api/catalog/container-space
title: "Space | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64065.703149208
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Space

Version: current [26.x]
On this page
# Space
Use the Catalog API to retrieve information about [spaces](/what-is-dremio/key-concepts) and the child objects they contain, as well as to create, update, and delete spaces.
Space Object

```
{  
  "entityType": "space",  
  "id": "5442c00a-ada1-48c6-82fc-bb804b2e04e0",  
  "name": "Example-Space",  
  "tag": "zzOQfjY9lU0=",  
  "createdAt": "2023-01-12T18:44:43.237Z",  
  "children": [  
    {  
      "id": "8da037a1-8e50-422b-9a2b-cafb03f57c71",  
      "path": [  
        "Example-Space",  
        "testfolder"  
      ],  
      "tag": "0McuCL4MzBU=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "f32dfe85-32e2-4c31-b2b4-bfd62ab3f473",  
      "path": [  
        "Example-Space",  
        "travel_testing"  
      ],  
      "tag": "i4mnlSmHqVM=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-30T17:54:25.547Z"  
    },  
    {  
      "id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda",  
      "path": [  
        "Example-Space",  
        "zips"  
      ],  
      "tag": "ITlp8+qyIMQ=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-08T16:24:25.084Z"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
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
    "ownerId": "d01585a2-b267-4d56-9154-31762ab65a43",  
    "ownerType": "USER"  
  }  
}  

```

## Space Attributes​
entityType String
Type of the catalog object. For spaces, the entityType is `space`.
Example: space
* * *
id String (UUID)
Unique identifier of the space.
Example: 5442c00a-ada1-48c6-82fc-bb804b2e04e0
* * *
name String
Name of the space.
Example: Example-Space
* * *
tag String
Unique identifier of the version of the space. Dremio changes the tag whenever the space changes and uses the tag to ensure that PUT requests apply to the most recent version of the space.
Example: zzOQfjY9lU0=
* * *
createdAt String
Date and time that the space was created, in UTC format.
Example: 2023-01-12T18:44:43.237Z
* * *
children Array of Object
Information about each catalog object in the space.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "8da037a1-8e50-422b-9a2b-cafb03f57c71","path": ["Example-Space","testfolder"],"tag": "0McuCL4MzBU=","type": "CONTAINER","containerType": "FOLDER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "f32dfe85-32e2-4c31-b2b4-bfd62ab3f473","path": ["Example-Space","travel_testing"],"tag": "i4mnlSmHqVM=","type": "DATASET","datasetType": "VIRTUAL","createdAt": "2023-01-30T17:54:25.547Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda","path": ["Example-Space","zips"],"tag": "ITlp8+qyIMQ=","type": "DATASET","datasetType": "VIRTUAL","createdAt": "2023-02-08T16:24:25.084Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
accessControlList Object
Enterprise only. Information about users and roles with access to the space and the specific privileges each user or role has. May include an array of users, an array of roles, or both, depending on the configured access and privileges. The accessControlList array is empty if space-specific access control privileges are not set.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the space. Only appears in the response if the request URL includes the `permissions` query parameter. For more information, read [Privileges](/security/rbac/privileges).
Example: ["READ","WRITE","ALTER_REFLECTION","SELECT","ALTER","VIEW_REFLECTION","MODIFY","MANAGE_GRANTS","CREATE_TABLE","DROP","EXTERNAL_QUERY","INSERT","TRUNCATE","DELETE","UPDATE","EXECUTE","CREATE_SOURCE","ALL"]
* * *
owner Object
Information about the space's owner.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"ownerId": "d01585a2-b267-4d56-9154-31762ab65a43","ownerType": "USER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Attributes of Objects in the `children` Array​
id String (UUID)
Unique identifier of the catalog object.
Example: 8da037a1-8e50-422b-9a2b-cafb03f57c71
* * *
path Array of String
Path of the catalog object within Dremio, expressed as an array. The path consists of the space, followed by any folder and subfolders, followed by the catalog object itself as the last item in the array.
Example: ["Example-Space","testfolder"]
* * *
tag String
Unique identifier of the version of the catalog object. Dremio changes the tag whenever the catalog object changes and uses the tag to ensure that PUT requests apply to the most recent version of the object.
Example: 0McuCL4MzBU=
* * *
type String
Type of the catalog object.
Enum: CONTAINER, DATASET, FILE
Example: CONTAINER
* * *
containerType String
For catalog entities with the type `CONTAINER`, the type of container.
Enum: FOLDER, FUNCTION
Example: FOLDER
* * *
datasetType String
For catalog objects in a space with the type `DATASET`, the datasetType is `VIRTUAL` (spaces cannot contain tables, only views).
Example: VIRTUAL
* * *
createdAt String
For catalog objects in a space with the type `DATASET`, date and time that the catalog object was created, in UTC format.
Example: 2023-01-30T17:54:25.547Z
#### Attributes of the `accessControlList` Object​
users Array of Object
Enterprise only. List of users with access to the space and the specific privileges each user has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5", "permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Array of Object
Enterprise only. List of roles whose members have access to the space and the specific privileges each role has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889", "permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of the `owner` Object​
ownerId String (UUID)
Unique identifier of the space's owner.
Example: d01585a2-b267-4d56-9154-31762ab65a43
* * *
ownerType String
Type of owner of the space.
Enum: USER, ROLE
Example: USER
##### Attributes of Objects in the `users` and `roles` Arrays​
id String (UUID)
Enterprise only. Unique identifier of the user or role with access to the space.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Array of String
Enterprise only. List of privileges the user or role has on the space. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALL, VIEW_REFLECTION, TRUNCATE, UPDATE, DELETE, DROP, MANAGE_GRANTS, EXTERNAL_QUERY, EXECUTE, ALTER, INSERT, MODIFY, SELECT, CREATE_SOURCE, WRITE, CREATE_TABLE, ALTER_REFLECTION, READ
Example: ["MODIFY"]
## Create a Space​
Create a new space.
Method and URL

```
POST /api/v3/catalog  

```

### Parameters​
entityType Body String
Type of the catalog object. For spaces, the entityType is `space`.
Example: space
* * *
name Body String
Name of the space. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
Example: Example-Space
* * *
accessControlList Body Object Optional
Enterprise only. Object used to specify which users and roles should have access to the space and the specific privileges each user or role should have. May include an array of users, an array of roles, or both. Omit if you do not want to configure space-specific access control privileges.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object​
users Body Array of Object Optional
Enterprise only. List of users who should have access to the space and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the space and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
##### Parameters of Objects in the `users` and `roles` Arrays​
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the space.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the space. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALL, VIEW_REFLECTION, TRUNCATE, UPDATE, DELETE, DROP, MANAGE_GRANTS, EXTERNAL_QUERY, EXECUTE, ALTER, INSERT, MODIFY, SELECT, CREATE_SOURCE, WRITE, CREATE_TABLE, ALTER_REFLECTION, READ
Example: ["MODIFY"]
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "space",  
  "name": "Example-Space",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "space",  
  "id": "5442c00a-ada1-48c6-82fc-bb804b2e04e0",  
  "name": "Example-Space",  
  "tag": "zzOQfjY9lU0=",  
  "createdAt": "2023-01-12T18:44:43.237Z",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ]  
  },  
  "permissions": [],  
  "owner": {  
    "ownerId": "d01585a2-b267-4d56-9154-31762ab65a43",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Retrieve a Space by ID​
Retrieve a space and information about its contents by specifying the space's ID.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the space that you want to retrieve.
Example: 5442c00a-ada1-48c6-82fc-bb804b2e04e0
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?include=permissions
* * *
exclude Query String Optional
Exclude a default attribute from the response. The available value for the exclude query parameter is `children`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?exclude=children
* * *
maxChildren Query Integer Optional
Specify the maximum number of child objects to include in each page of results. Use in concert with the pageToken query parameter to split large sets of results into multiple pages. For more information, read [maxChildren Query Parameter](/reference/api).
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the maxChildren query parameter: the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the space has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api) for more information.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/5442c00a-ada1-48c6-82fc-bb804b2e04e0' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "space",  
  "id": "5442c00a-ada1-48c6-82fc-bb804b2e04e0",  
  "name": "Example-Space",  
  "tag": "zzOQfjY9lU0=",  
  "createdAt": "2023-01-12T18:44:43.237Z",  
  "children": [  
    {  
      "id": "8da037a1-8e50-422b-9a2b-cafb03f57c71",  
      "path": [  
        "Example-Space",  
        "testfolder"  
      ],  
      "tag": "0McuCL4MzBU=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "f32dfe85-32e2-4c31-b2b4-bfd62ab3f473",  
      "path": [  
        "Example-Space",  
        "travel_testing"  
      ],  
      "tag": "i4mnlSmHqVM=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-30T17:54:25.547Z"  
    },  
    {  
      "id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda",  
      "path": [  
        "Example-Space",  
        "zips"  
      ],  
      "tag": "ITlp8+qyIMQ=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-08T16:24:25.084Z"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ]  
  },  
  "owner": {  
    "ownerId": "d01585a2-b267-4d56-9154-31762ab65a43",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
204 No Content   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve a Space by Path​
Retrieve a space and information about its contents by specifying the space's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters​
path Path String
Path of the space that you want to retrieve. The path is the name of the space.
Example: Example-Space
* * *
include Query String Optional
Include a non-default attribute in the response. The available value for the include query parameter is `permissions`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?include=permissions
* * *
exclude Query String Optional
Exclude a default attribute from the response. The available value for the exclude query parameter is `children`. For more information, read [include and exclude Query Parameters](/reference/api).
Example: ?exclude=children
* * *
maxChildren Query Integer Optional
Specify the maximum number of child objects to include in each page of results. Use in concert with the pageToken query parameter to split large sets of results into multiple pages. For more information, read [maxChildren Query Parameter](/reference/api).
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the maxChildren query parameter: the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the space has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api) for more information.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/Example-Space' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "space",  
  "id": "5442c00a-ada1-48c6-82fc-bb804b2e04e0",  
  "name": "Example-Space",  
  "tag": "zzOQfjY9lU0=",  
  "createdAt": "2023-01-12T18:44:43.237Z",  
  "children": [  
    {  
      "id": "8da037a1-8e50-422b-9a2b-cafb03f57c71",  
      "path": [  
        "Example-Space",  
        "testfolder"  
      ],  
      "tag": "0McuCL4MzBU=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "f32dfe85-32e2-4c31-b2b4-bfd62ab3f473",  
      "path": [  
        "Example-Space",  
        "travel_testing"  
      ],  
      "tag": "i4mnlSmHqVM=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-30T17:54:25.547Z"  
    },  
    {  
      "id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda",  
      "path": [  
        "Example-Space",  
        "zips"  
      ],  
      "tag": "ITlp8+qyIMQ=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-08T16:24:25.084Z"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ]  
  },  
  "owner": {  
    "ownerId": "d01585a2-b267-4d56-9154-31762ab65a43",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
204 No Content   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Update a Space​
Update the specified space.
Method and URL

```
PUT /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the space that you want to update.
Example: 5442c00a-ada1-48c6-82fc-bb804b2e04e0
* * *
entityType Body String
Type of the catalog object. For spaces, the entityType is `space`.
Example: space
* * *
id Body String (UUID)
Unique identifier of the space to update.
Example: 5442c00a-ada1-48c6-82fc-bb804b2e04e0
* * *
name Body String
Name of the space to update.
Example: Example-Space
* * *
tag Body String
Unique identifier of the version of the space that you want to update. Dremio uses the tag to ensure that you are requesting to update the most recent version of the space.
Example: zzOQfjY9lU0=
* * *
accessControlList Body String Optional
Enterprise only. Object used to specify which users and roles should have access to the space and the specific privileges each user or role should have. If you omit the accessControlList object in a PUT request, Dremio removes all existing user and role access settings from the space. To keep existing user and role access settings while making other updates, duplicate the existing accessControlList array in the PUT request.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALL"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object​
users Body Array of Object Optional
Enterprise only. List of users who should have access to the space and the specific privileges each user should have. If you omit the users object in a PUT request, Dremio removes all existing user access settings from the space. To keep existing user access settings while making other updates, duplicate the existing users array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5", "permissions": ["ALL"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body Array of Object Optional
Enterprise only. List of roles whose members should have access to the space and the specific privileges each role should have. If you omit the roles object in a PUT request, Dremio removes all existing role access settings from the space. To keep existing role access settings while making other updates, duplicate the existing roles array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889", "permissions": ["MODIFY"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Parameters of Objects in the `users` and `roles` Arrays​
id Body String Optional
Enterprise only. Unique identifier of the user or role who should have access to the space.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Body Array of String Optional
Enterprise only. List of privileges the user or role should have on the space. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALL, VIEW_REFLECTION, TRUNCATE, UPDATE, DELETE, DROP, MANAGE_GRANTS, EXTERNAL_QUERY, EXECUTE, ALTER, INSERT, MODIFY, SELECT, CREATE_SOURCE, WRITE, CREATE_TABLE, ALTER_REFLECTION, READ
Example: ["ALL"]
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/5442c00a-ada1-48c6-82fc-bb804b2e04e0' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "space",  
  "id": "5442c00a-ada1-48c6-82fc-bb804b2e04e0",  
  "name": "Example-Space",  
  "tag": "zzOQfjY9lU0=",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALL"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "space",  
  "id": "5442c00a-ada1-48c6-82fc-bb804b2e04e0",  
  "name": "Example-Space",  
  "tag": "PwZ6e/axHUY=",  
  "createdAt": "2023-01-12T18:44:43.237Z",  
  "children": [  
    {  
      "id": "8da037a1-8e50-422b-9a2b-cafb03f57c71",  
      "path": [  
        "Example-Space",  
        "testfolder"  
      ],  
      "tag": "0McuCL4MzBU=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "f32dfe85-32e2-4c31-b2b4-bfd62ab3f473",  
      "path": [  
        "Example-Space",  
        "travel_testing"  
      ],  
      "tag": "i4mnlSmHqVM=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-30T17:54:25.547Z"  
    },  
    {  
      "id": "7f1c4660-cd7b-40d0-97d1-b8a6f431cbda",  
      "path": [  
        "Example-Space",  
        "zips"  
      ],  
      "tag": "ITlp8+qyIMQ=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-08T16:24:25.084Z"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER_REFLECTION",  
          "MODIFY",  
          "ALTER",  
          "MANAGE_GRANTS",  
          "VIEW_REFLECTION",  
          "SELECT"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "MODIFY"  
        ]  
      }  
    ]  
  },  
  "owner": {  
    "ownerId": "d01585a2-b267-4d56-9154-31762ab65a43",  
    "ownerType": "USER"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Delete a Space​
Delete the specified space, including all of the space's contents.
Method and URL

```
DELETE /api/v3/catalog/{id}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the space that you want to delete.
Example: 5442c00a-ada1-48c6-82fc-bb804b2e04e0
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/catalog/5442c00a-ada1-48c6-82fc-bb804b2e04e0' \  
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
  

403 Forbidden   
  

404 Not Found   
  

Was this page helpful?
[Previous Home](/reference/api/catalog/container-home)[Next Folder](/reference/api/catalog/container-folder)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Home](/reference/api/catalog/container-home)[Next Folder](/reference/api/catalog/container-folder)
!
