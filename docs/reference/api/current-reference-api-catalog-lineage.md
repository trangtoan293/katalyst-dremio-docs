---
url: /reference/api/catalog/lineage
slug: /reference/api/catalog/lineage
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

## Lineage Attributes​
sources Array of Object
Information about the sources the dataset uses. Each object in the sources array represents one source.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "21077e5d-fe6f-4a29-843f-58fa3acb17c2","path": ["Samples"],"tag": "Iz1v71CeTQY=","type": "CONTAINER","containerType": "SOURCE","createdAt": "2023-02-14T21:57:48.794Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
parents Array of Object
Information about the parent objects for the dataset. Each object in the parents array represents one parent object. If a view represents a join of two other datsets, the parents array includes the two joined datasets. The parents array is empty if the dataset does not have parent objects.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "3419fa3a-b5b3-4438-b864-a27ec4e18752","path": ["Samples","samples.dremio.com","zips.json"],"tag": "MAntohVzwLw=","type": "DATASET","datasetType": "PROMOTED","createdAt": "2023-01-18T18:49:09.669Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
* * *
children Array of Object
Information about other catalog objects that reference the dataset. Each object in the children array represents one child object. The children array is empty if the dataset does not have child objects.
Example: [{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "170e211e-4235-4d8d-acb5-3d4dbfe99c75","path": ["@dremio","NYC_zip"],"tag": "OWKrfpEKzW4=","type": "DATASET","datasetType": "VIRTUAL","createdAt": "2023-01-25T02:11:46.344Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'},{'{'}'{'{'}'{'}'})'{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'})"id": "7f79c068-a3c3-4af7-8cd4-35896ef0a0e0","path": ["@dremio","Chicago_zip"],"tag": "gsaDW5h4GCs=","type": "DATASET","datasetType": "VIRTUAL","createdAt": "2023-01-25T00:09:12.461Z"{'{'}'{'{'}'{'}'})'{'{'}'{'}'}'{'}'}'{'{'}'{'}'}'{'}'}]
#### Attributes of Objects in the `sources` Array​
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
#### Attributes of Objects in the `parents` Array​
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
#### Attributes of Objects in the `children` Array​
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
## Retrieve Lineage Information About a Dataset​
Retrieve lineage information about the specified dataset.
Method and URL

```
GET /api/v3/catalog/{id}/graph  

```

### Parameters​
id Path String (UUID)
Unique identifier of the dataset whose lineage you want to retrieve.
Example: d69b25a3-31c8-4d55-a7cc-dfee2290779b
### Example​
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

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous View](/reference/api/catalog/view)[Next Tag](/reference/api/catalog/tag)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous View](/reference/api/catalog/view)[Next Tag](/reference/api/catalog/tag)
!
