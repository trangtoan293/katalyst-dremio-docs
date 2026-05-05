---
url: /reference/api/ldap-authorization
slug: /reference/api/ldap-authorization
title: "LDAP User Cache | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64790.757895833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * LDAP User Cache

Version: current [26.x]
On this page
# LDAP User Cache
Use the LDAP User Cache API to invalidate the authorization for all users and groups or a single user or group in the LDAP user cache.
You must be a member of the Dremio ADMIN role to send requests to the LDAP User Cache API.
## Invalidate LDAP Authorization for All Users and Groups​
Invalidate all users' and groups' LDAP authorizations.
Method and URL

```
DELETE /api/v3/cache/authorization  

```

### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/cache/authorization' \  
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
  
404 Not Found   
  

## Invalidate LDAP Authorization for a Single User or Group by ID​
Invalidate LDAP authorization for a single user or group by specifying the ID for the user or group.
If you do not provide the ID of a user or group in the request URL, Dremio invalidates the LDAP authorization for all users and groups in the cache.
Method and URL

```
DELETE /api/v3/cache/authorization/{id}  

```

### Parameters​
name Path String (UUID)
Unique identifier of the Dremio user or group whose LDAP authorization you want to invalidate.
Example: 2k8bdk96-b267-4d56-9154-e48v5884h5i8
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/cache/authorization/2k8bdk96-b267-4d56-9154-e48v5884h5i8' \  
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
  
404 Not Found   
  

## Invalidate LDAP Authorization for a Single User or Group by Name​
Invalidate LDAP authorization for a single user or group by specifying the name for the user or group.
If you do not provide the name of a user or group in the request URL, Dremio invalidates the LDAP authorization for all users and groups in the cache.
Method and URL

```
DELETE /api/v3/cache/authorization/{name}  

```

### Parameters​
name Path String
Name for the Dremio user or group whose LDAP authorization you want to invalidate.
Example: exampleuser1
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/cache/authorization/exampleuser1' \  
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
  
404 Not Found   
  

Was this page helpful?
[Previous Job](/reference/api/job)[Next Node Collections](/reference/api)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Job](/reference/api/job)[Next Node Collections](/reference/api)
!
