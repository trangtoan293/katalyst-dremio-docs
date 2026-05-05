---
url: /reference/api/catalog/container-folder
slug: /reference/api/catalog/container-folder
title: "Folder | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64065.006494416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Folder

Version: current [26.x]
On this page
# Folder
Use the Catalog API to retrieve information about [folders](/what-is-dremio/key-concepts) and the child objects they contain, as well as to create, update, and delete folders.
Folder Object

```
{  
  "entityType": "folder",  
  "id": "d4c2a8ba-a972-4db4-8deb-67e1ade684d1",  
  "path": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
  "tag": "pRmJ0BQ9SFw=",  
  "children": [  
    {  
      "id": "dremio:/Samples/samples.dremio.com/zip_lookup.csv",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "zip_lookup.csv"  
      ],  
      "type": "FILE"  
    },  
    {  
      "id": "dremio:/Samples/samples.dremio.com/NYC-taxi-trips-iceberg",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips-iceberg"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "1acab7b3-ee82-44c1-abcc-e86d56078d4d",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips"  
      ],  
      "type": "DATASET",  
      "datasetType": "PROMOTED"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "SELECT"  
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

## Folder Attributes​
entityType String
Type of the catalog object. For folders, the entityType is `folder`.
Example: folder
* * *
id String
Unique identifier of the folder. The ID can be a UUID like `1acab7b3-ee82-44c1-abcc-e86d56078d4d` or a text path like `dremio:/Samples/samples.dremio.com/zip_lookup.csv`.
Example: d4c2a8ba-a972-4db4-8deb-67e1ade684d1
* * *
path Array of String
Path of the folder within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the target folder itself as the last item in the array.
Example: ["Samples","samples.dremio.com"]
* * *
tag String
Unique identifier of the version of the folder. Dremio changes the tag whenever the folder changes and uses the tag to ensure that PUT requests apply to the most recent version of the folder.
Example: pRmJ0BQ9SFw=
* * *
children Array of Object
Information about each catalog object in the folder.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "dremio:/Samples/samples.dremio.com/zip_lookup.csv","path": ["Samples","samples.dremio.com","zip_lookup.csv"],"type": "FILE"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "dremio:/Samples/samples.dremio.com/NYC-taxi-trips-iceberg","path": ["Samples","samples.dremio.com","NYC-taxi-trips-iceberg"],"type": "CONTAINER","containerType": "FOLDER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "1acab7b3-ee82-44c1-abcc-e86d56078d4d","path": ["Samples","samples.dremio.com","NYC-taxi-trips"],"type": "DATASET","datasetType": "PROMOTED"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
accessControlList Object
Enterprise-only. Information about users and roles with access to the folder and the specific privileges each user or role has. May include an array of users, an array of roles, or both, depending on the configured access and privileges. The accessControlList array is empty if folder-specific access control privileges are not set.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the folder. Only appears in the response if the request URL includes the `permissions` query parameter. For more information, read [Privileges](/security/rbac/privileges).
Example: ["READ","WRITE","ALTER_REFLECTION","SELECT","ALTER","VIEW_REFLECTION","MODIFY","MANAGE_GRANTS","CREATE_TABLE","DROP","EXTERNAL_QUERY","INSERT","TRUNCATE","DELETE","UPDATE","EXECUTE","CREATE_SOURCE","ALL"]
* * *
owner Object
Information about the folder's owner.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"ownerId": "d01585a2-b267-4d56-9154-31762ab65a43","ownerType": "USER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Attributes of Objects in the `children` Array​
id String
Unique identifier of the catalog object. The ID can be a UUID like `1acab7b3-ee82-44c1-abcc-e86d56078d4d` or a text path like `dremio:/Samples/samples.dremio.com/zip_lookup.csv`.
Example: dremio:/Samples/samples.dremio.com/zip_lookup.csv
* * *
path Array of String
Path of the catalog object within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the catalog object itself as the last item in the array.
Example: ["Samples","samples.dremio.com","zip_lookup.csv"]
* * *
type String
Type of the catalog object. If the object is saved within a space (including the home space), valid types are `CONTAINER` and `DATASET`. If the object is saved within a source, valid types are `CONTAINER`, `FILE`, and `DATASET`.
Example: CONTAINER
* * *
containerType String
For catalog objects with the type `CONTAINER`, the containerType is `FOLDER`.
Example: FOLDER
* * *
datasetType String
For catalog objects with the type `DATASET`, the type of dataset. For tables, the datasetType is `PROMOTED`. For views, the datasetType is `VIRTUAL`.
Enum: PROMOTED, VIRTUAL
Example: VIRTUAL
* * *
createdAt String
Date and time that the catalog object was created, in UTC format. The createdAt attribute is included only for `DATASET` catalog objects that are saved in folders within spaces, not within sources.
Example: 2023-01-30T17:54:25.547Z
#### Attributes of the `accessControlList` Object​
users String
Enterprise-only. List of users with access to the folder and the specific privileges each user has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles String
Enterprise-only. List of roles whose members have access to the folder and the specific privileges each role has.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of the `owner` Object​
ownerId String (UUID)
Unique identifier of the folder's owner.
Example: d01585a2-b267-4d56-9154-31762ab65a43
* * *
ownerType String
Type of owner of the folder.
Enum: USER, ROLE
Example: USER
#### Attributes of Objects in the `users` and `roles` Arrays​
id String (UUID)
Enterprise-only. Unique identifier of the user or role with access to the folder.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Array of String
Enterprise-only. List of privileges the user or role has on the folder. For more information, read [Privileges](/security/rbac/privileges).
Example: ["SELECT","ALTER"]
## Create a Folder​
Create a new folder within a space.
The Catalog API cannot create new folders within sources.
Method and URL

```
POST /api/v3/catalog  

```

### Parameters​
entityType Body String
Type of the catalog object. For folders, the entityType is `folder`.
Example: folder
* * *
path Body Array of String
Path of the location where the folder should be created within Dremio, expressed as an array. The path consists of the space, followed by any folder and subfolders, followed by a name for the target folder itself as the last item in the array. The name of the folder cannot include the following special characters: `/`, `:`, `[`, or `]`.
Example: ["Example-Space","First-Folder","New-Folder"]
* * *
accessControlList Body Object Optional
Enterprise-only. Object used to specify which users and roles should have access to the folder and the specific privileges each user or role should have. May include an array of users, an array of roles, or both. Omit if you do not want to configure folder-specific access control privileges.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object​
users Body String Optional
Enterprise-only. List of users who should have access to the folder and the specific privileges each user should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["SELECT","ALTER"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body String Optional
Enterprise-only. List of roles whose members should have access to the folder and the specific privileges each role should have.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Parameters of Objects in the `users` and `roles` Arrays​
id Body String (UUID) Optional
Enterprise-only. Unique identifier of the user or role who should have access to the folder.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Body Array of String Optional
Enterprise-only. List of privileges the user or role should have on the folder. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALTER_REFLECTION, SELECT, ALTER, VIEW_REFLECTION, MANAGE_GRANTS, ALL
Example: ["SELECT","ALTER"]
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "folder",  
  "path": [  
    "Example-Space",  
    "First-Folder",  
    "New-Folder"  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "SELECT"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "folder",  
  "id": "598697c2-8be0-4050-9731-53563977a17d",  
  "path": [  
    "Example-Space",  
    "First-Folder",  
    "New-Folder"  
  ],  
  "tag": "R7COubQq8KE=",  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "SELECT"  
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
  

## Retrieve a Folder by ID​
Retrieve a folder and information about its contents by specifying the folder's ID.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters​
id Path String
Unique identifier of the folder that you want to retrieve. If the ID is a text path, use URL encoding to replace any special characters with their UTF-8-equivalent characters, such as `%3A` for a colon; `%2F` for a forward slash; and `%20` for a space. For example, if the ID value is `dremio:/Samples/samples.dremio.com/Dremio University`, the URI-encoded ID is `dremio%3A%2FSamples%2Fsamples.dremio.com%2FDremio%20University`.
Example: d4c2a8ba-a972-4db4-8deb-67e1ade684d1
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
**NOTE:** The maxChildren query parameter is not supported for folders in filesystem sources.
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the maxChildren query parameter: the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the folder has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api) for more information.
**NOTE:** Dremio ignores the pageToken query parameter for folders in filesystem sources.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/d4c2a8ba-a972-4db4-8deb-67e1ade684d1' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "folder",  
  "id": "d4c2a8ba-a972-4db4-8deb-67e1ade684d1",  
  "path": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
  "tag": "pRmJ0BQ9SFw=",  
  "children": [  
    {  
      "id": "dremio:/Samples/samples.dremio.com/zip_lookup.csv",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "zip_lookup.csv"  
      ],  
      "type": "FILE"  
    },  
    {  
      "id": "dremio:/Samples/samples.dremio.com/NYC-taxi-trips-iceberg",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips-iceberg"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "1acab7b3-ee82-44c1-abcc-e86d56078d4d",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips"  
      ],  
      "type": "DATASET",  
      "datasetType": "PROMOTED"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "SELECT"  
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
  

## Retrieve a Folder by Path​
Retrieve a folder and information about its contents by specifying the folder's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters​
path Path String
Path of the folder that you want to retrieve, with a forward slash to separate each level of nesting. If the name of any component in the path includes special characters for URLs, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, "Dremio University" should be `Dremio%20University` in the URL path.
Example: Samples/samples.dremio.com
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
**NOTE:** The maxChildren query parameter is not supported for filesystem sources.
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the maxChildren query parameter: the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the folder has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api) for more information.
**NOTE:** Dremio ignores the pageToken query parameter for folders in filesystem sources.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/Samples/samples.dremio.com' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "folder",  
  "id": "d4c2a8ba-a972-4db4-8deb-67e1ade684d1",  
  "path": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
  "tag": "pRmJ0BQ9SFw=",  
  "children": [  
    {  
      "id": "dremio:/Samples/samples.dremio.com/zip_lookup.csv",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "zip_lookup.csv"  
      ],  
      "type": "FILE"  
    },  
    {  
      "id": "dremio:/Samples/samples.dremio.com/NYC-taxi-trips-iceberg",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips-iceberg"  
      ],  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "1acab7b3-ee82-44c1-abcc-e86d56078d4d",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "NYC-taxi-trips"  
      ],  
      "type": "DATASET",  
      "datasetType": "PROMOTED"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "SELECT",  
          "ALTER"  
        ]  
      }  
    ],  
    "roles": [  
      {  
        "id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889",  
        "permissions": [  
          "SELECT"  
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
  

## Update a Folder​
Update the specified folder.
Method and URL

```
PUT /api/v3/catalog/{id}  

```

### Parameters​
id Path String
Unique identifier of the folder to update. The ID can be a UUID like `1acab7b3-ee82-44c1-abcc-e86d56078d4d` or a text path like `dremio:/Samples/samples.dremio.com/zip_lookup.csv`.
Example: 598697c2-8be0-4050-9731-53563977a17d
* * *
entityType Body String
Type of the catalog object. For folders, the entityType is `folder`.
Example: folder
* * *
id Body String
Unique identifier of the folder to update. The ID can be a UUID like `1acab7b3-ee82-44c1-abcc-e86d56078d4d` or a text path like `dremio:/Samples/samples.dremio.com/zip_lookup.csv`.
Example: 598697c2-8be0-4050-9731-53563977a17d
* * *
path Body Array of String
Path of the location where the folder is saved within Dremio, expressed as an array. The path consists of the space, followed by any folder and subfolders, followed by the target folder itself as the last item in the array.
Example: ["Example-Space","First-Folder","New-Folder"]
* * *
tag Body String
Unique identifier of the version of the folder that you want to update. Dremio uses the tag to ensure that you are requesting to update the most recent version of the folder.
Example: R7COubQq8KE=
* * *
accessControlList Body Object Optional
Enterprise-only. Object used to specify which users and roles should have access to the folder and the specific privileges each user or role should have. If you omit the accessControlList object in a PUT request, Dremio removes all existing user and role access settings from the folder. To keep existing user and role access settings while making other updates, duplicate the existing accessControlList array in the PUT request.
Example: {'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"users": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALL"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}],"roles": [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}
#### Parameters of the `accessControlList` Object​
users Body String Optional
Enterprise-only. List of users who should have access to the folder and the specific privileges each user should have. If you omit the users object in a PUT request, Dremio removes all existing user access settings from the folder. To keep existing user access settings while making other updates, duplicate the existing users array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "737a038f-c6cd-4fd3-a77a-59f692727ba5","permissions": ["ALL"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
roles Body String Optional
Enterprise-only. List of roles whose members should have access to the folder and the specific privileges each role should have. If you omit the roles object in a PUT request, Dremio removes all existing role access settings from the folder. To keep existing role access settings while making other updates, duplicate the existing roles array in the PUT request.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "0f2d94e0-bb5e-4c03-8c6f-62d379d10889","permissions": ["SELECT"]{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Parameters of Objects in the `users` and `roles` Arrays​
id Body String (UUID) Optional
Enterprise-only. Unique identifier of the user or role who should have access to the folder.
Example: 737a038f-c6cd-4fd3-a77a-59f692727ba5
* * *
permissions Body Array of String Optional
Enterprise-only. List of privileges the user or role should have on the folder. For more information, read [Privileges](/security/rbac/privileges).
Enum: ALTER_REFLECTION, SELECT, ALTER, VIEW_REFLECTION, MANAGE_GRANTS, ALL
Example: ["ALL"]
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/catalog/5442c00a-ada1-48c6-82fc-bb804b2e04e0' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "entityType": "folder",  
  "id": "598697c2-8be0-4050-9731-53563977a17d",  
  "path": [  
    "Example-Space",  
    "First-Folder",  
    "New-Folder"  
  ],  
  "tag": "R7COubQq8KE=",  
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
          "SELECT"  
        ]  
      }  
    ]  
  }  
}'  

```

Response

```
{  
  "entityType": "folder",  
  "id": "598697c2-8be0-4050-9731-53563977a17d",  
  "path": [  
    "Example-Space",  
    "First-Folder",  
    "New-Folder"  
  ],  
  "tag": "vnRnYLLpCFU=",  
  "children": [  
    {  
      "id": "d60f9258-e55a-4fc3-97b3-58c6720a70fc",  
      "path": [  
        "Example-Space",  
        "First-Folder",  
        "New-Folder",  
        "NYC-trips-weather"  
      ],  
      "tag": "IHXU7Oxs80c=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "acba8595-bfcf-4126-887c-d2a19b5afb1d",  
      "path": [  
        "Example-Space",  
        "First-Folder",  
        "New-Folder",  
        "short-distance-trips"  
      ],  
      "tag": "KYs/Qyw1ok8=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-09T19:09:58.789Z"  
    }  
  ],  
  "accessControlList": {  
    "users": [  
      {  
        "id": "737a038f-c6cd-4fd3-a77a-59f692727ba5",  
        "permissions": [  
          "ALTER_REFLECTION",  
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
          "SELECT"  
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
  

## Delete a Folder​
Delete the specified folder, including all of the folder's contents.
In Open Catalog, only empty folders can be deleted. Before deleting a parent folder, you must manually delete all child folders and their contents.
Method and URL

```
DELETE /api/v3/catalog/{id}  

```

### Parameters​
id Path String
Unique identifier of the folder that you want to delete. The ID can be a UUID like `1acab7b3-ee82-44c1-abcc-e86d56078d4d` or a text path like `dremio:/Samples/samples.dremio.com/zip_lookup.csv`.
Example: 598697c2-8be0-4050-9731-53563977a17d
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/catalog/598697c2-8be0-4050-9731-53563977a17d' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'   

```

Response

```
No response  

```

### Response Status Codes​
204 No Content   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous Space](/reference/api/catalog/container-space)[Next File](/reference/api/catalog/file)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Space](/reference/api/catalog/container-space)[Next File](/reference/api/catalog/file)
!
