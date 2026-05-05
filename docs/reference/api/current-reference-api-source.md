---
url: /reference/api/source
title: "Source | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64243.624691333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Source

Version: current [26.x]
On this page
# Source
Use the Source API to clear the [AWS Lake Formation](/data-sources/lakehouse-catalogs/aws-glue-catalog#lake-formation-integration) permission cache for AWS Glue Data Catalog sources.
Dremio keeps a cache of permissions defined in AWS Lake Formation with a one-hour expiry time. When the cache for the queried table expires, Dremio requests permission information from AWS Lake Formation. After changing permissions on the AWS Lake Formation side, use the Source API to immediately invalidate Dremio's AWS Lake Formation permission cache.
The Source API is supported only for AWS Glue Data Catalog sources.
## Clear the Permission Cache[​](/reference/api/source#clear-the-permission-cache "Direct link to Clear the Permission Cache")
Clear the AWS Lake Formation permission cache for an AWS Glue Data Catalog source.
Method and URL

```
DELETE /api/v3/source/{source-name}/permission-cache  

```

### Parameters[​](/reference/api/source#parameters "Direct link to Parameters")
source-name Path String
The name of the AWS Glue Data Catalog source whose Lake Formation permission cache you want to clear.
Example: glueProd
### Example[​](/reference/api/source#example "Direct link to Example")
Request

```
curl -X DELETE 'https://{hostname}/api/v3/source/glueProd/permission-cache' \  
--header 'Authorization: Bearer <personal access token>' \  
--header 'Content-Type: application/json'  

```

Response

```
No response  

```

### Responses[​](/reference/api/source#responses "Direct link to Responses")
204 No Content   
  
400 Bad Request   
  
404 Not Found   
  
415 Unsupported Media Type   
  
500 Internal Server Error   
  

Was this page helpful?
[Previous Search](/reference/api/search)[Next SQL](/reference/api/sql)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Search](/reference/api/search)[Next SQL](/reference/api/sql)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fsource%2F&_biz_t=1777950564232&_biz_i=Source%20%7C%20Dremio%20Documentation&_biz_n=473&rnd=179573&cdn_o=a&_biz_z=1777950564233)
