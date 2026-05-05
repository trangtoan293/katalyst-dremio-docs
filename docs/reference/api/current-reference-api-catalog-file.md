---
url: /reference/api/catalog/file
slug: /reference/api/catalog/file
title: "File | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.511828375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Catalog](/reference/api/catalog)
  * File

Version: current [26.x]
On this page
# File
Use the Catalog API to retrieve information about [formatting data to a table](/developer/data-formats/table).
File Object

```
{  
  "entityType": "file",  
  "id": "dremio:/Samples/samples.dremio.com/SF weather 2018-2019.csv",  
  "path": [  
    "Samples",  
    "samples.dremio.com",  
    "SF weather 2018-2019.csv"  
  ]  
}  

```

## File Attributes​
entityType String
Type of the catalog object. For files, the entityType is `file`.
Example: file
* * *
id String
Unique identifier of the file. For files, the ID is the text path of the file within Dremio.
Example: dremio:/Samples/samples.dremio.com/SF weather 2018-2019.csv
* * *
path Array of String
Path of the file within Dremio, expressed as an array. The path consists of the source or space, followed by any folder and subfolders, followed by the target file itself as the last item in the array.
Example: ["Samples","samples.dremio.com","SF weather 2018-2019.csv"]
## Retrieve a File by Path​
Retrieve information about a file by specifying its path.
Method and URL

```
GET /api/v3/catalog/by-path/{path}  

```

### Parameters​
path Path String
Path of the file that you want to retrieve, with a forward slash to separate each level of nesting. If the name of any component in the path includes special characters for URLs, such as spaces, use URL encoding to replace the special characters with their UTF-8-equivalent characters. For example, replace colons with `%3A` and replace spaces with `%20`.
Example: Samples/samples.dremio.com/SF%20weather%202018-2019.csv
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog/by-path/Samples/samples.dremio.com/SF%20weather%2018-2019.csv' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "entityType": "file",  
  "id": "dremio:/Samples/samples.dremio.com/SF weather 2018-2019.csv",  
  "path": [  
    "Samples",  
    "samples.dremio.com",  
    "SF weather 2018-2019.csv"  
  ]  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
405 Method Not Allowed   
  
500 Internal Server Error   
  

Was this page helpful?
[Previous Folder](/reference/api/catalog/container-folder)[Next Table](/reference/api/catalog/table)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Folder](/reference/api/catalog/container-folder)[Next Table](/reference/api/catalog/table)
!
