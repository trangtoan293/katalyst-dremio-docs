---
url: /reference/api/catalog/wiki
slug: /reference/api/catalog/wiki
title: "Wiki | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64237.104454041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * Wiki

Version: current [26.x]
On this page
# Wiki
Use the Catalog API to create, update, and retrieve the [wiki](/data-products/govern/wikis-tags) for a source, space, or dataset.
Wiki Object

```
{  
  "text": "# Testspace Wiki\nThis is an example wiki for a catalog object in Dremio. Here is some text in **bold**. Here is some text in *italics*.\n\nHere is an example excerpt with quotation formatting:\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\n## Heading Level 2\n\nHere is a bulleted list:\n* An item in a bulleted list\n* A second item in a bulleted list\n* A third item in a bulleted list\n\n\n### Heading Level 3\n\nHere is a numbered list:\n1. An item in a numbered list\n1. A second item in a numbered list\n1. A third item in a numbered list\n\n\nHere is a sentence that includes an [external link to https://dremio.com](https://dremio.com).\n\nHere is an image:\n\n!\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
  "version": 4  
}  

```

## Wiki Attributes​
text String
Text displayed in the wiki, formatted with 
* * *
version Integer
Number for the most recent version of the wiki, starting with `0`. Dremio increments the value by 1 each time the wiki changes and uses the version value to ensure that updates apply to the most recent version of the wiki.
Example: 4
## Create a Wiki​
Create a wiki for the specified source, space, or dataset.
Method and URL

```
POST /api/v3/catalog/{object-id}/collaboration/wiki  

```

### Parameters​
object-id Path String (UUID)
Unique identifier of the source, space, or dataset for which you want to add the wiki.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
* * *
text Body String
Text to display in the wiki. Use `\\n` for new lines and blank lines. Each wiki may have a maximum of 100,000 characters.
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/wiki' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "text": "# Testspace Wiki\nThis is an example wiki for a catalog object in Dremio. Here is some text in **bold**. Here is some text in *italics*.\n\nHere is an example excerpt with quotation formatting:\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\n## Heading Level 2\n\nHere is a bulleted list:\n* An item in a bulleted list\n* A second item in a bulleted list\n* A third item in a bulleted list\n\n\n### Heading Level 3\n\nHere is a numbered list:\n1. An item in a numbered list\n1. A second item in a numbered list\n1. A third item in a numbered list\n\n\nHere is a sentence that includes an [external link to https://dremio.com](https://dremio.com).\n\nHere is an image:\n\n!\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  
}'  

```

Response

```
{  
  "text": "# Testspace Wiki\nThis is an example wiki for a catalog object in Dremio. Here is some text in **bold**. Here is some text in *italics*.\n\nHere is an example excerpt with quotation formatting:\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\n## Heading Level 2\n\nHere is a bulleted list:\n* An item in a bulleted list\n* A second item in a bulleted list\n* A third item in a bulleted list\n\n\n### Heading Level 3\n\nHere is a numbered list:\n1. An item in a numbered list\n1. A second item in a numbered list\n1. A third item in a numbered list\n\n\nHere is a sentence that includes an [external link to https://dremio.com](https://dremio.com).\n\nHere is an image:\n\n!\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
  "version": 0  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve a Wiki​
Retrieve the wiki for the specified source, space, or dataset.
Method and URL

```
GET /api/v3/catalog/{object-id}/collaboration/wiki  

```

### Parameters​
object-id Path String (UUID)
Unique identifier of the source, space, or dataset whose wiki you want to retrieve.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/wiki' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "text": "# Testspace Wiki\nThis is an example wiki for a catalog object in Dremio. Here is some text in **bold**. Here is some text in *italics*.\n\nHere is an example excerpt with quotation formatting:\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\n## Heading Level 2\n\nHere is a bulleted list:\n* An item in a bulleted list\n* A second item in a bulleted list\n* A third item in a bulleted list\n\n\n### Heading Level 3\n\nHere is a numbered list:\n1. An item in a numbered list\n1. A second item in a numbered list\n1. A third item in a numbered list\n\n\nHere is a sentence that includes an [external link to https://dremio.com](https://dremio.com).\n\nHere is an image:\n\n!\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
  "version": 0  
}  

```

### Response Status Codes​
200 OK   
  

400 Bad Request   
  

401 Unauthorized   
  

403 Forbidden   
  

404 Not Found   
  

## Update a Wiki​
Update the wiki for the specified source, space, or dataset.
Method and URL

```
POST /api/v3/catalog/{object-id}/collaboration/wiki  

```

### Parameters​
object-id Path String (UUID)
Unique identifier of the source, space, or dataset whose wiki you want to update.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
* * *
text Body String
Text to display in the wiki, formatted with 
* * *
version Body Integer
Number listed as the version value for the most recent existing wiki. Dremio uses the version value to ensure that you are updating the most recent version of the wiki.
Example: 0
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/wiki' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "text": "# New Title Wiki\nThis is an example wiki for a catalog object in Dremio. Here is some text in **bold**. Here is some text in *italics*.\n\nHere is an example excerpt with quotation formatting:\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\n## Heading Level 2\n\nHere is an update to the bulleted list:\n* An item in a bulleted list\n* A second item in a bulleted list\n* A third item in a bulleted list\n\n\n### Heading Level 3\n\nHere is a numbered list:\n1. An item in a numbered list\n1. A second item in a numbered list\n1. A third item in a numbered list\n\n\nHere is a sentence that includes an [external link to https://dremio.com](https://dremio.com).\n\nHere is an image:\n\n!\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
  "version": 0  
}'  

```

Response

```
{  
  "text": "# New Title Wiki\nThis is an example wiki for a catalog object in Dremio. Here is some text in **bold**. Here is some text in *italics*.\n\nHere is an example excerpt with quotation formatting:\n\n> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n\n\n## Heading Level 2\n\nHere is an update to the bulleted list:\n* An item in a bulleted list\n* A second item in a bulleted list\n* A third item in a bulleted list\n\n\n### Heading Level 3\n\nHere is a numbered list:\n1. An item in a numbered list\n1. A second item in a numbered list\n1. A third item in a numbered list\n\n\nHere is a sentence that includes an [external link to https://dremio.com](https://dremio.com).\n\nHere is an image:\n\n!\n\nUt enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",  
  "version": 1  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Delete a Wiki​
Delete the wiki for the specified source, space, or dataset.
Deleting the wiki entails sending an empty string to replace the existing wiki with no wiki. The wiki object will still exist, but it will contain an empty `text` value and no wiki will appear for the source, space, or dataset in the Dremio UI.
Method and URL

```
POST /api/v3/catalog/{object-id}/collaboration/wiki  

```

### Parameters​
object-id Path String (UUID)
Unique identifier of the source, space, or dataset whose wiki you want to delete.
Example: 1bcab7b3-ee82-44c1-abcc-e86d56078d4d
* * *
text Body String
Empty string to represent deletion of the wiki.
Example: ""
* * *
version Body Integer
Number listed as the version value for the most recent existing wiki. Dremio uses the version value to ensure that you are deleting the most recent version of the wiki.
Example: 1
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/catalog/1bcab7b3-ee82-44c1-abcc-e86d56078d4d/collaboration/wiki' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "text": "",  
  "version": 1  
}'  

```

Response

```
{  
  "text": "",  
  "version": 2  
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
[Previous Tag](/reference/api/catalog/tag)[Next Grants](/reference/api/catalog/grants)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Tag](/reference/api/catalog/tag)[Next Grants](/reference/api/catalog/grants)
!
