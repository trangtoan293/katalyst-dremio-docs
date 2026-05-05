---
url: /reference/api/catalog/tag
slug: /reference/api/catalog/tag
title: "Tag | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64237.820539791
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Tag

Version: current [26.x]
On this page
# Tag
Use the Catalog API to create, update, and retrieve [tags](/data-products/govern/wikis-tags).
Tag Object

```
{  
  "tags": [  
    "NYC",  
    "taxi",  
    "2023"  
  ],  
  "version": "VJ3ijXH4m6k="  
}  

```

## Tag Attributes​
tags Array of String
List of tags that apply to the dataset.
Example: ["NYC","taxi","2023"]
* * *
version String
Unique identifier of the set of tags. Dremio changes the version whenever any of the tags change and uses the version value to ensure that updates apply to the most recent version of the set of tags.
Example: VJ3ijXH4m6k=
## Create Tags​
Create one or more tags for the specified dataset.
Method and URL

```
POST /api/v3/catalog/{dataset-id}/collaboration/tag  

```

### Parameters​
dataset-id Path String (UUID)
Unique identifier of the dataset for which you want to add tags.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
* * *
tags Body Array of String
List of tags to apply to the dataset. Tags are case-insensitive. Each tag can be listed only once for each dataset. Each tag can have a maximum of 128 characters. Tags cannot include the following special characters: `/`, `:`, `[`, or `]`.
Example: ["NYC","taxi","2023"]
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/tag' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tags": ["NYC", "taxi", "2023"]  
}'  

```

Response

```
{  
  "tags": [  
    "NYC",  
    "taxi",  
    "2023"  
  ],  
  "version": "VM3ijXH4m6k="  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve Tags​
Retrieve the tags applied to the specified dataset.
Method and URL

```
GET /api/v3/catalog/{dataset-id}/collaboration/tag  

```

### Parameters​
dataset-id Path String (UUID)
Unique identifier of the dataset whose tags you want to retrieve.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/tag' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "tags": [  
    "NYC",  
    "taxi",  
    "2023"  
  ],  
  "version": "VM3ijXH4m6k="  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Update Tags​
Update the tags for the specified dataset.
Method and URL

```
POST /api/v3/catalog/{dataset-id}/collaboration/tag  

```

### Parameters​
dataset-id Path String (UUID)
Unique identifier of the dataset whose tags you want to update.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
* * *
tags Body Array of String
List of tags to apply to the dataset. If you want to keep any of the existing tags, include them in the tags array. Tags are case-insensitive and must be distinct (in other words, list each tag only once for each dataset). Each tag may have a maximum of 128 characters. Tags cannot include the following special characters: `/`, `:`, `[`, or `]`.
Example: ["NYC","taxi","2023","archived"]
* * *
version Body String
Unique identifier of the most recent set of tags. Dremio uses the version value to ensure that you are updating the most recent version of the tags.
Example: VM3ijXH4m6k=
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/tag' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tags": ["NYC", "taxi", "2023", "archived"],  
  "version": "VM3ijXH4m6k="  
}'  

```

Response

```
{  
  "tags": [  
    "NYC",  
    "taxi",  
    "2023",  
    "archived"  
  ],  
  "version": "yiZSE++9wiU="  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Delete Tags​
Delete the tags for the specified dataset.
Deleting tags means sending an empty array to replace the existing tags with no tags. The tag object will still exist, but it will contain an empty `tags` array and no tags will appear for the dataset in the Dremio UI.
Method and URL

```
POST /api/v3/catalog/{dataset-id}/collaboration/tag  

```

### Parameters​
dataset-id Path String (UUID)
Unique identifier of the dataset whose tags you want to remove.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
* * *
tags Body Array of String
Empty array to represent deletion of all tags for the dataset.
Example: []
* * *
version Body String
Unique identifier of the most recent set of tags. Dremio uses the version value to ensure that you are deleting tags from the most recent version.
Example: yiZSE++9wiU=
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/tag' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tags": [],  
  "version": "yiZSE++9wiU="  
}'  

```

Response

```
{  
  "tags": [],  
  "version": "wuTAKuRcVas="  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

Was this page helpful?
[Previous Lineage](/reference/api/catalog/lineage)[Next Wiki](/reference/api/catalog/wiki)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Lineage](/reference/api/catalog/lineage)[Next Wiki](/reference/api/catalog/wiki)
!
