---
url: /reference/api/catalog/lineage
title: "Lineage | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.543838458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Lineage

Version: current [26.x]
On this page
# Lineage Enterprise
Use the Catalog API to retrieve lineage information about datasets (tables and views). The lineage object includes information about the dataset's sources, parent objects, and child objects.
Lineage Object

```
{  
  "sources": [  
    {  
      "id": "21077e5d-fe6f-4a29-843f-58fa3acb17c2",  
      "path": [  
        "Samples"  
      ],  
      "tag": "Iz1v71CeTQY=",  
      "type": "CONTAINER",  
      "containerType": "SOURCE",  
      "createdAt": "2022-02-14T21:57:48.794Z"  
    }  
  ],  
  "parents": [  
    {  
      "id": "3419fa3a-b5b3-4438-b864-a27ec4e18752",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "zips.json"  
      ],  
      "tag": "MAntohVzwLw=",  
      "type": "DATASET",  
      "datasetType": "PROMOTED",  
      "createdAt": "2023-01-18T18:49:09.669Z"  
    }  
  ],  
  "children": [  
    {  
      "id": "170e211e-4235-4d8d-acb5-3d4dbfe99c75",  
      "path": [  
        "@dremio",  
        "NYC_zip"  
      ],  
      "tag": "OWKrfpEKzW4=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-25T02:11:46.344Z"  
    },  
    {  
      "id": "7f79c068-a3c3-4af7-8cd4-35896ef0a0e0",  
      "path": [  
        "@dremio",  
        "Chicago_zip"  
      ],  
      "tag": "gsaDW5h4GCs=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-25T00:09:12.461Z"  
    }  
  ]  
}  

```

## Lineage Attributes[​](/reference/api/catalog/lineage#lineage-attributes "Direct link to Lineage Attributes")
[sources](/reference/api/catalog/lineage#attributes-of-objects-in-the-sources-array) Array of Object
Information about the sources the dataset uses. Each object in the sources array represents one source.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "21077e5d-fe6f-4a29-843f-58fa3acb17c2","path": ["Samples"],"tag": "Iz1v71CeTQY=","type": "CONTAINER","containerType": "SOURCE","createdAt": "2023-02-14T21:57:48.794Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[parents](/reference/api/catalog/lineage#attributes-of-objects-in-the-parents-array) Array of Object
Information about the parent objects for the dataset. Each object in the parents array represents one parent object. If a view represents a join of two other datsets, the parents array includes the two joined datasets. The parents array is empty if the dataset does not have parent objects.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "3419fa3a-b5b3-4438-b864-a27ec4e18752","path": ["Samples","samples.dremio.com","zips.json"],"tag": "MAntohVzwLw=","type": "DATASET","datasetType": "PROMOTED","createdAt": "2023-01-18T18:49:09.669Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
[children](/reference/api/catalog/lineage#attributes-of-objects-in-the-children-array) Array of Object
Information about other catalog objects that reference the dataset. Each object in the children array represents one child object. The children array is empty if the dataset does not have child objects.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "170e211e-4235-4d8d-acb5-3d4dbfe99c75","path": ["@dremio","NYC_zip"],"tag": "OWKrfpEKzW4=","type": "DATASET","datasetType": "VIRTUAL","createdAt": "2023-01-25T02:11:46.344Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "7f79c068-a3c3-4af7-8cd4-35896ef0a0e0","path": ["@dremio","Chicago_zip"],"tag": "gsaDW5h4GCs=","type": "DATASET","datasetType": "VIRTUAL","createdAt": "2023-01-25T00:09:12.461Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of Objects in the `sources` Array[​](/reference/api/catalog/lineage#attributes-of-objects-in-the-sources-array "Direct link to attributes-of-objects-in-the-sources-array")
id String (UUID)
Unique identifier of the source associated with the dataset.
Example: 21077e5d-fe6f-4a29-843f-58fa3acb17c2
* * *
path Array of String
Path of the source within Dremio, expressed as an array.
Example: ["Samples"]
* * *
tag String
Unique identifier of the version of the source. Dremio changes the tag whenever the source changes.
Example: Iz1v71CeTQY=
* * *
type String
Type of source. For sources in lineage responses, the type is `CONTAINER`.
Example: CONTAINER
* * *
containerType String
Type of container for the source.
Enum: HOME, SOURCE
Example: SOURCE
* * *
createdAt String
Date and time that the source was created, in UTC format. Not included for sources with the containerType `HOME`.
Example: 2022-02-14T21:57:48.794Z
#### Attributes of Objects in the `parents` Array[​](/reference/api/catalog/lineage#attributes-of-objects-in-the-parents-array "Direct link to attributes-of-objects-in-the-parents-array")
id String (UUID)
Unique identifier of the parent object.
Example: 3419fa3a-b5b3-4438-b864-a27ec4e18752
* * *
path Array of String
Path of the parent object within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the parent object itself as the last item in the array.
Example: ["Samples","samples.dremio.com","zips.json"]
* * *
tag String
Unique identifier of the version of the parent object. Dremio changes the tag whenever the parent object changes.
Example: MAntohVzwLw=
* * *
type String
Type of parent object. For parent objects in lineage responses, the type is `DATASET`.
Example: DATASET
* * *
datasetType String
Dataset type for the parent object. If the parent object is a table, `PROMOTED`. If the parent object is a view, `VIRTUAL`.
Enum: PROMOTED, VIRTUAL
Example: PROMOTED
* * *
createdAt String
Date and time that the parent object was created, in UTC format.
Example: 2023-01-18T18:49:09.669Z
#### Attributes of Objects in the `children` Array[​](/reference/api/catalog/lineage#attributes-of-objects-in-the-children-array "Direct link to attributes-of-objects-in-the-children-array")
id String (UUID)
Unique identifier of the child object.
Example: 170e211e-4235-4d8d-acb5-3d4dbfe99c75
* * *
path Array of String
Path of the child object within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the child object itself as the last item in the array.
Example: ["@dremio","NYC_zip"]
* * *
tag String
Unique identifier of the version of the child object. Dremio changes the tag whenever the child object changes.
Example: OWKrfpEKzW4=
* * *
type String
Type of child object. For child objects in lineage responses, the type is `DATASET`.
Example: DATASET
* * *
datasetType String
Dataset type for the child object. For child objects in lineage responses, the datasetType is `VIRTUAL`.
Example: VIRTUAL
* * *
createdAt String
Date and time that the child object was created, in UTC format.
Example: 2023-01-25T02:11:46.344Z
## Retrieve Lineage Information About a Dataset[​](/reference/api/catalog/lineage#retrieve-lineage-information-about-a-dataset "Direct link to Retrieve Lineage Information About a Dataset")
Retrieve lineage information about the specified dataset.
Method and URL

```
GET /api/v3/catalog/{id}/graph  

```

### Parameters[​](/reference/api/catalog/lineage#parameters "Direct link to Parameters")
id Path String (UUID)
Unique identifier of the dataset whose lineage you want to retrieve.
Example: d69b25a3-31c8-4d55-a7cc-dfee2290779b
### Example[​](/reference/api/catalog/lineage#example "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/d69b25a3-31c8-4d55-a7cc-dfee2290779b/graph' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "sources": [  
    {  
      "id": "21077e5d-fe6f-4a29-843f-58fa3acb17c2",  
      "path": [  
        "Samples"  
      ],  
      "tag": "Iz1v71CeTQY=",  
      "type": "CONTAINER",  
      "containerType": "SOURCE",  
      "createdAt": "2022-02-14T21:57:48.794Z"  
    }  
  ],  
  "parents": [  
    {  
      "id": "3419fa3a-b5b3-4438-b864-a27ec4e18752",  
      "path": [  
        "Samples",  
        "samples.dremio.com",  
        "zips.json"  
      ],  
      "tag": "MAntohVzwLw=",  
      "type": "DATASET",  
      "datasetType": "PROMOTED",  
      "createdAt": "2023-01-18T18:49:09.669Z"  
    }  
  ],  
  "children": [  
    {  
      "id": "170e211e-4235-4d8d-acb5-3d4dbfe99c75",  
      "path": [  
        "@dremio",  
        "NYC_zip"  
      ],  
      "tag": "OWKrfpEKzW4=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-25T02:11:46.344Z"  
    },  
    {  
      "id": "7f79c068-a3c3-4af7-8cd4-35896ef0a0e0",  
      "path": [  
        "@dremio",  
        "Chicago_zip"  
      ],  
      "tag": "gsaDW5h4GCs=",  
      "type": "DATASET",  
      "datasetType": "VIRTUAL",  
      "createdAt": "2023-01-25T00:09:12.461Z"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog/lineage#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous View](/reference/api/catalog/view)[Next Tag](/reference/api/catalog/tag)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous View](/reference/api/catalog/view)[Next Tag](/reference/api/catalog/tag)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fcatalog%2Flineage%2F&_biz_t=1777950556231&_biz_i=Lineage%20%7C%20Dremio%20Documentation&_biz_n=453&rnd=401173&cdn_o=a&_biz_z=1777950556231)
