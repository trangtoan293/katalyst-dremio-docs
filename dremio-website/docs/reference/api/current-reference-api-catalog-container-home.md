---
url: /reference/api/catalog/container-home
title: "Home | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.484544708
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Home

Version: current [26.x]
On this page
# Home
Use the Catalog API to retrieve information about the [home space](/what-is-dremio/key-concepts#home-space) and the child objects it contains.
Home Object

```
{  
  "entityType": "home",  
  "id": "87049e43-8564-4ee7-8bb6-5bdaf5bd0959",  
  "name": "@user@dremio.com",  
  "tag": "8S9cTZ5IsWo=",  
  "children": [  
    {  
      "id": "1e16c0e5-c890-4f87-b1a6-ac9325aafa2c",  
      "path": [  
        "@user@dremio.com",  
        "Business"  
      ],  
      "tag": "KgFBPW3+Cyc=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "a59815d0-3c21-41ad-b9bc-2ba105251fa6",  
      "path": [  
        "@user@dremio.com",  
        "meeting_rooms_lookup"  
      ],  
      "tag": "OaQT64frevc=",  
      "type": "DATASET",  
      "datasetType": "PROMOTED",  
      "createdAt": "1970-01-01T00:00:00.000Z"  
    },  
    {  
      "id": "37401663-8666-4e00-bc03-668abb43ccd7",  
      "path": [  
        "@user@dremio.com",  
        "NYC-trips-quarterly"  
      ],  
      "tag": "+H5TpLYoosY=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-07T21:26:14.385Z"  
    }  
  ]  
}  

```

## Home Attributes[​](/reference/api/catalog/container-home#home-attributes "Direct link to Home Attributes")
entityType String
Type of the catalog object. For the home space, the entityType is `home`.
Example: home
* * *
id String (UUID)
Unique identifier of the home space.
Example: 87049e43-8564-4ee7-8bb6-5bdaf5bd0959
* * *
name String
Name of the home space. Automatically generated based on the username.
Example: @
* * *
tag String
Unique identifier of the version of the home space. Dremio uses tags to ensure that PUT requests apply to the most recent version of the resource being updated. However, home spaces cannot be changed, so the tag is listed in the home space object but not used.
Example: 8S9cTZ5IsWo=
* * *
[children](/reference/api/catalog/container-home#attributes-of-objects-in-the-children-array) Array of Object
Information about each catalog object in the home space.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id":"1e16c0e5-c890-4f87-b1a6-ac9325aafa2c","path": ["@dremio","Business"],"tag":"KgFBPW3+Cyc=","type":"CONTAINER","containerType":"FOLDER"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id":"a59815d0-3c21-41ad-b9bc-2ba105251fa6","path": ["@dremio","meeting_rooms_lookup"],"tag":"OaQT64frevc=","type":"DATASET","datasetType":"PROMOTED","createdAt":"1970-01-01T00:00:00.000Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id":"37401663-8666-4e00-bc03-668abb43ccd7","path": ["@dremio","NYC-trips-quarterly"],"tag":"+H5TpLYoosY=","type":"DATASET","datasetType":"VIRTUAL","createdAt":"2023-02-07T21:26:14.385Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of Objects in the `children` Array[​](/reference/api/catalog/container-home#attributes-of-objects-in-the-children-array "Direct link to attributes-of-objects-in-the-children-array")
id String (UUID)
Unique identifier of the catalog object.
Example: 1e16c0e5-c890-4f87-b1a6-ac9325aafa2c
* * *
path Array of String
Path of the catalog object within Dremio, expressed as an array. The path consists of the home space, followed by any folder and subfolders, followed by the catalog object itself as the last item in the array.
Example: ["@
* * *
tag String
Unique identifier of the version of the catalog object. Dremio changes the tag whenever the catalog object changes and uses the tag to ensure that PUT requests apply to the most recent version of the object.
Example: KgFBPW3+Cyc=
* * *
type String
Type of the catalog object.
Enum: CONTAINER, DATASET
Example: CONTAINER
* * *
containerType String
For catalog entities with the type `CONTAINER`, the type of container.
Enum: FOLDER, FUNCTION
Example: FOLDER
* * *
datasetType String
For catalog entities with the type `DATASET`, the type of dataset. For tables, the datasetType is `PROMOTED`. For views, the datasetType is `VIRTUAL`.
Enum: PROMOTED, VIRTUAL
Example: PROMOTED
* * *
createdAt String
For catalog entities with the type `DATASET`, date and time that the catalog object was created, in UTC format.
Example: 2023-02-07T21:26:14.385Z
## Retrieve the Home Space by ID[​](/reference/api/catalog/container-home#retrieve-the-home-space-by-id "Direct link to Retrieve the Home Space by ID")
Retrieve information about the home space and its contents by specifying the home space's ID.
Method and URL

```
GET /api/v3/catalog/{id}  

```

### Parameters[​](/reference/api/catalog/container-home#parameters "Direct link to Parameters")
id Body String (UUID)
Unique identifier of the home space that you want to retrieve.
Example: 87049e43-8564-4ee7-8bb6-5bdaf5bd0959
* * *
maxChildren Query Integer Optional
Specify the maximum number of child objects to include in each page of results. Use in concert with the [pageToken query parameter](/reference/api/catalog/container-home#pagetokenqueryparam) to split large sets of results into multiple pages. For more information, read [maxChildren Query Parameter](/reference/api#maxchildren-query-parameter).
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the [maxChildren query parameter](/reference/api/catalog/container-home#maxchildrenqueryparam): the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the home space has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api#user-specified-maximum) for more information.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example[​](/reference/api/catalog/container-home#example "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/63505c60-bc86-42aa-a622-24e5f22ce50b' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "home",  
  "id": "87049e43-8564-4ee7-8bb6-5bdaf5bd0959",  
  "name": "@user@dremio.com",  
  "tag": "8S9cTZ5IsWo=",  
  "children": [  
    {  
      "id": "1e16c0e5-c890-4f87-b1a6-ac9325aafa2c",  
      "path": [  
        "@user@dremio.com",  
        "Business"  
      ],  
      "tag": "KgFBPW3+Cyc=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "a59815d0-3c21-41ad-b9bc-2ba105251fa6",  
      "path": [  
        "@user@dremio.com",  
        "meeting_rooms_lookup"  
      ],  
      "tag": "OaQT64frevc=",  
      "type": "DATASET",  
      "datasetType": "PROMOTED",  
      "createdAt": "1970-01-01T00:00:00.000Z"  
    },  
    {  
      "id": "37401663-8666-4e00-bc03-668abb43ccd7",  
      "path": [  
        "@user@dremio.com",  
        "NYC-trips-quarterly"  
      ],  
      "tag": "+H5TpLYoosY=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-07T21:26:14.385Z"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/container-home#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve the Home Space by Path[​](/reference/api/catalog/container-home#retrieve-the-home-space-by-path "Direct link to Retrieve the Home Space by Path")
Retrieve information about the home space and its contents by specifying the home space's path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters[​](/reference/api/catalog/container-home#parameters-1 "Direct link to Parameters")
path Path String
Path of the home space whose information you want to retrieve. The home space path is the username, preceded with the `@` symbol.
Example: @
* * *
maxChildren Query Integer Optional
Specify the maximum number of child objects to include in each page of results. Use in concert with the [pageToken query parameter](/reference/api/catalog/container-home#pagetokenqueryparam1) to split large sets of results into multiple pages. For more information, read [maxChildren Query Parameter](/reference/api#maxchildren-query-parameter).
Example: ?maxChildren=25
* * *
pageToken Query String Optional
Specify the token for retrieving the next page of results. Must be used in concert with the [maxChildren query parameter](/reference/api/catalog/container-home#maxchildrenqueryparam1): the first request URL includes maxChildren set to the maximum number of child objects to include in each page of results. If the home space has more child objects than the specified maxChildren value, the response includes a nextPageToken attribute. Add the pageToken query parameter with the nextPageToken value to the request URL to retrieve the next page of results. Do not remove or change the maxChildren query parameter when you add pageToken to the request URL. Read [pageToken Query Parameter: User-Specified Maximum](/reference/api#user-specified-maximum) for more information.
Example: ?pageToken=cHAAFLceQCKsTVpwaEVisqgjDntZJUCuTqVNghPdkyBDUNoJvwrEXAMPLE
### Example[​](/reference/api/catalog/container-home#example-1 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/@user@dremio.com' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "home",  
  "id": "87049e43-8564-4ee7-8bb6-5bdaf5bd0959",  
  "name": "@user@dremio.com",  
  "tag": "8S9cTZ5IsWo=",  
  "children": [  
    {  
      "id": "1e16c0e5-c890-4f87-b1a6-ac9325aafa2c",  
      "path": [  
        "@user@dremio.com",  
        "Business"  
      ],  
      "tag": "KgFBPW3+Cyc=",  
      "type": "CONTAINER",  
      "containerType": "FOLDER"  
    },  
    {  
      "id": "a59815d0-3c21-41ad-b9bc-2ba105251fa6",  
      "path": [  
        "@user@dremio.com",  
        "meeting_rooms_lookup"  
      ],  
      "tag": "OaQT64frevc=",  
      "type": "DATASET",  
      "datasetType": "PROMOTED",  
      "createdAt": "1970-01-01T00:00:00.000Z"  
    },  
    {  
      "id": "37401663-8666-4e00-bc03-668abb43ccd7",  
      "path": [  
        "@user@dremio.com",  
        "NYC-trips-quarterly"  
      ],  
      "tag": "+H5TpLYoosY=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-02-07T21:26:14.385Z"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/container-home#response-status-codes-1 "Direct link to Response Status Codes")
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous Source](/reference/api/catalog/source)[Next Space](/reference/api/catalog/container-space)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Source](/reference/api/catalog/source)[Next Space](/reference/api/catalog/container-space)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fcatalog%2Fcontainer-home%2F&_biz_t=1777950556179&_biz_i=Home%20%7C%20Dremio%20Documentation&_biz_n=451&rnd=859592&cdn_o=a&_biz_z=1777950556180)
