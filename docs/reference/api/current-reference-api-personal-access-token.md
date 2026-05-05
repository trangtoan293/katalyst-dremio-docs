---
url: /reference/api/personal-access-token
slug: /reference/api/personal-access-token
title: "Personal Access Token | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64067.589246958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Personal Access Token

Version: current [26.x]
On this page
# Personal Access Token Enterprise
Use the API to create and retrieve personal access tokens (PATs) for the current Dremio user and delete PATs for any Dremio user.
You must [enable the use of PATs](/security/authentication/personal-access-tokens) prior to using these requests.
Personal Access Token Object

```
{  
  "tid": "98ec8f42-7764-4d9d-af5a-693f1f1cc444",  
  "uid": "b9dbebc7-bc3b-4d56-9154-31762ab65a43",  
  "label": "Tableau",  
  "createdAt": "2023-02-19T15:41:15.323Z",  
  "expiresAt": "2023-03-21T15:41:15.323Z"  
}  

```

## Attributes​
tid String (UUID)
Unique identifier of the PAT.
Example: 98ec8f42-7764-4d9d-af5a-693f1f1cc444
* * *
uid String (UUID)
Unique identifier of the user.
Example: b9dbebc7-bc3b-4d56-9154-31762ab65a43
* * *
label String
User-provided name of the PAT.
Example: Tableau
* * *
createdAt String
Date and time that the PAT was created, in UTC format.
Example: 2023-02-19T15:41:15.323Z
* * *
expiresAt String
Date and time that the PAT will expire, in UTC format.
Example: 2023-03-21T15:41:15.323Z
## Listing All PATs for One User​
List all PATs for the specified user. Users can retrieve only their own PAT metadata. The `ADMIN` role is required to retrieve PAT metadata owned by other users.
Method and URL

```
GET /api/v3/user/{user-id}/token  

```

### Parameters​
id Path String (UUID)
Dremio identifier of the named user.
Example: b9dbebc7-bc3b-4d56-9154-31762ab65a43
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/user/b9dbebc7-bc3b-4d56-9154-31762ab65a43/token' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "tid": "98ec8f42-7764-4d9d-af5a-693f1f1cc444",  
      "uid": "b9dbebc7-bc3b-4d56-9154-31762ab65a43",  
      "label": "Tableau",  
      "createdAt": "2023-02-19T15:41:15.323Z",  
      "expiresAt": "2023-03-21T15:41:15.323Z"  
    },  
    {  
      "tid": "3b76a1e4-6539-46de-8f06-b7c41c71b61e",  
      "uid": "b9dbebc7-bc3b-4d56-9154-31762ab65a43",  
      "label": "Test Nessie Source",  
      "createdAt": "2023-03-02T19:39:52.159Z",  
      "expiresAt": "2023-04-01T19:39:52.159Z"  
    },  
    {  
      "tid": "9376ef58-7b4c-2419-b1cb-a4ce4c53dfa7",  
      "uid": "b9dbebc7-bc3b-4d56-9154-31762ab65a43",  
      "label": "Feature Testing",  
      "createdAt": "2023-03-07T14:47:08.211Z",  
      "expiresAt": "2023-09-03T14:47:08.211Z"  
    }  
  ]  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Create a PAT​
Create a personal access token. Users can create only their own PATs and only use the PATs they create. Administrators cannot create PATs for other users or distribute PATs to other users.
Method and URL

```
POST /api/v3/user/{user-id}/token  

```

### Parameters​
user-id Path String (UUID)
Your Dremio user identifier.
Example: b9dbebc7-bc3b-4d56-9154-31762ab65a43
* * *
label Body String
User-provided label for the resulting PAT.
Example: Feature Testing
* * *
millisecondsToExpire Body String
The number of milliseconds until the PAT expires. The value `15552000000` is 180 days.
Example: 15552000000
Example Request to Create a PAT 

```
curl -X POST 'https://{hostname}/api/v3/user/b9dbebc7-bc3b-4d56-9154-31762ab65a43/token' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "label": "Feature Testing",  
  "millisecondsToExpire": 15552000000  
}'  

```

Example Response

```
EXAMPLETOKEN7TjB3mfPS6AZQ5aPcXPmJS2ofXpLL86dmpDXRbKKi52BQdthnk==  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Deleting a Single PAT​
Delete a single PAT for the specified user. Users can delete only their own PATs. The `ADMIN` role is required to delete PATs owned by other users.
Method and URL

```
DELETE /api/v3/user/{user-id}/token/{token-id}  

```

### Parameters​
user-id Path String (UUID)
Unique identifier of the user whose PAT will be deleted.
Example: b9dbebc7-bc3b-4d56-9154-31762ab65a43
* * *
token-id Path String (UUID)
Unique identifier of the PAT you want to delete.
Example: 98ec8f42-7764-4d9d-af5a-693f1f1cc444
### Example Request​

```
curl -X DELETE 'https://{hostname}/api/v3/user/b9dbebc7-bc3b-4d56-9154-31762ab65a43/token/98ec8f42-7764-4d9d-af5a-693f1f1cc444' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Dremio does not provide a response to this command.
### Response Status Codes​
204 No Content   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Delete All PATs for One User​
Delete all PATs for the specified user. Users can delete only their own PATs. The `ADMIN` role is required to delete PATs owned by other users.
Method and URL

```
DELETE /api/v3/user/{user-id}/token  

```

### Parameters​
user-id Path String (UUID)
Unique identifier of the user whose PATs will be deleted.
Example: b9dbebc7-bc3b-4d56-9154-31762ab65a43
### Example Request​

```
curl -X DELETE \  
'https://{hostname}/api/v3/user/b9dbebc7-bc3b-4d56-9154-31762ab65a43/token' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Dremio does not provide a response to this command.
### Response Status Codes​
204 No Content   
  
401 Unauthorized   
  
404 Not Found   
  
405 Method Not Allowed   
  

## Delete All PATs​
Delete all PATs in the system for all users, including users with the `ADMIN` role. The user invoking the command must be in the `ADMIN` role.
This command deletes all PATs for all users in the system. This action cannot be undone.
Method and URL

```
DELETE /api/v3/token  

```

### Example Request​

```
curl -X DELETE 'https://{hostname}/api/v3/token' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

### Response Status Codes​
204 No Content   
  
401 Unauthorized   
  
404 Not Found   
  

Was this page helpful?
[Previous OAuth Token](/reference/api/oauth-token)[Next Reflection](/reference/api/reflections)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OAuth Token](/reference/api/oauth-token)[Next Reflection](/reference/api/reflections)
!
