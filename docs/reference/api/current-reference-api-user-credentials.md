---
url: /reference/api/user/credentials
slug: /reference/api/user/credentials
title: "Credentials | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64791.925832375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [User](/reference/api/user)
  * Credentials

Version: current [26.x]
On this page
# Credentials Enterprise
Use the Credentials API to manage the credentials of Dremio [service users](/security/authentication/users). Dremio offers two forms of service user credentials:
  * [Client Credentials](/reference/api/oauth-token) – A Client ID and Client Secret assigned by Dremio.
  * [External Credentials](/reference/api/oauth-token) – The definition of external JSON Web Tokens (JWTs) from an integrated enterprise identity provider.


  * Client Credentials
  * External Credentials


Client Credential Object

```
{  
  "id": "88ec35b1-672c-4087-9e21-5b6d8bff4044",  
  "name": "testing-credential",  
  "clientSecretConfig": {  
    "clientId": "61d00e34-a938-4b80-9a98-063fc723bd6d",  
    "clientSecret": "wSWwbLG...6akQ",  
    "expiresAt": "2026-01-06T16:03:39.527Z",  
    "createdAt": "2025-10-08T16:03:39.527Z"  
  },  
  "credentialType": "CLIENT_SECRET"  
}  

```

External Credential Object

```
{  
  "id": "3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e",  
  "name": "new-external-credential",  
  "externalJwtCredentialConfig": {  
    "issuer": "https://sts.windows.net/3e334762-b0c6-4c36-9faf-93800f0d6c71/",  
    "allowedAudiences": [  
      "api://b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
    ],  
    "identifierClaim": "oid",  
    "identifierClaimValue": "ad5be351-6397-439e-ad83-2f19e0777ecf",  
    "tokenExchangeAudience": "//oauth.dremio.app/clients/61d00e34-a938-4b80-9a98-063fc723bd6d/credentials/3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e",  
    "jwksUri": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/discovery/keys?appid=b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
  },  
  "credentialType": "EXTERNAL_JWT"  
}  

```

## Attributes​
id String (UUID)
Unique identifier of the credential.
* * *
name String
Name of the credential. This name is not required to be unique.
* * *
credentialType String
Type of the credential. Valid values are `CLIENT_SECRET` and `EXTERNAL_JWT`.
* * *
clientSecretConfig Object
The configuration attributes of the client secret.
* * *
externalJwtCredentialConfig Object
The configuration attributes of the external JWT when the service user is authenticated by an external identity provider.
#### Attributes of the `clientSecretConfig` Object​
clientId String (UUID)
The client ID assigned to the service user of this credential. The client ID is assigned at the time of service user creation and is immutable.
* * *
clientSecret String
The client secret of this credential. The client secret is included in the return object from a create operation and is never displayed again.
* * *
expiresAt String
Timestamp of the expiration of the credential. The lifetime of the credential is configured in the creation request.
* * *
createdAt String
Timestamp of the creation of the credential.
#### Attributes of the `externalJwtCredentialConfig` Object​
issuer String
A URI that describes who issued the token. For tokens from Microsoft Entra ID, the issuer will be a Microsoft endpoint.
Example: `https://sts.windows.net/<tenant-id>`
* * *
allowedAudiences Array of String
List of URIs describing the intended audience for the token. For tokens from Microsoft Entra ID, this field is the Application ID URI. The default format is `api://<client-id>`.
* * *
identifierClaim String
A mapping that describes the field in the token containing the service user identity. For tokens from Microsoft Entra ID, the appropriate fields are `sub` or `oid`. See 
Example: `oid`
* * *
identifierClaimValue String
The user identifier from the external identity provider.
* * *
tokenExchangeAudience String
A URI that identifies the target resource for token exchange and where the exchanged token is intended to be used. The URI includes the client ID of the service user and the credential ID.
* * *
jwksUri String
The URI from which to retrieve the JWKS, used to validate the signature of the token. If none is provided, Dremio will default to using ``issuer_URL`/.well-known/openid-configuration`. For tokens from Microsoft Entra ID, the JWKS URI is not found under the issuer, so it must be provided. The default location URI is `https://login.microsoftonline.com/<tenant-id>/discovery/keys`.
Example: `https://login.microsoftonline.com/<tenant-id>/discovery/keys`
## List All Credentials​
Method and URL

```
GET /api/v3/user/{id}/oauth/credentials  

```

### Parameters​
id Path String (UUID)
Unique identifier of the service user.
### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/user/5263eb65-5fba-406b-9539-8627240adb8e/oauth/credentials' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "id": "88ec35b1-672c-4087-9e21-5b6d8bff4044",  
  "name": "testing-credential",  
  "clientSecretConfig": {  
    "clientId": "61d00e34-a938-4b80-9a98-063fc723bd6d",  
    "expiresAt": "2026-01-06T16:03:39.527Z",  
    "createdAt": "2025-10-08T16:03:39.527Z"  
  },  
  "credentialType": "CLIENT_SECRET"  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
404 Not Found   
  
500 Internal Server Error   
  

## Create a Client Credential​
Method and URL

```
POST /api/v3/user/{id}/oauth/credentials  

```

### Parameters​
id Path String (UUID)
Unique identifier of the service user.
* * *
credentialType Body String
The type of credential to create. Must be `CLIENT_SECRET` for a client credential.
* * *
name Body String
The name of the credential.
Example: `new-credential`
* * *
clientSecretConfig Body Object
Configuration of the client secret to be created. Contains the credential lifetime, specified as quantity (an integer with a maximum value of 180) and units (must be `DAYS`).
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/user/5263eb65-5fba-406b-9539-8627240adb8e/oauth/credentials' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "credentialType": "CLIENT_SECRET",  
  "name": "new-credential",  
  "clientSecretConfig": {  
    "expiresIn": {  
      "quantity": 90,  
      "units": "DAYS"  
    }  
  }  
}'  

```

Response

```
{  
  "id": "c125b06c-b187-439b-8f71-df8cc4784835",  
  "name": "new-credential",  
  "clientSecretConfig": {  
    "clientId": "61d00e34-a938-4b80-9a98-063fc723bd6d",  
    "clientSecret": "wSWwbLG...6akQ",  
    "expiresAt": "2026-01-13T07:47:11.490Z",  
    "createdAt": "2025-10-15T07:47:11.490Z"  
  },  
  "credentialType": "CLIENT_SECRET"  
}  

```

### Response Status Codes​
201 Created   
  

400 Bad Request   
  

401 Unauthorized   
  

404 Not Found   
  

500 Internal Server Error   
  

## Create an External Credential​
Method and URL

```
POST /api/v3/user/{id}/oauth/credentials  

```

### Parameters​
id Path String (UUID)
Unique identifier of the service user.
* * *
credentialType Body String
The type of credential to create. Must be `EXTERNAL_JWT` for an external credential.
* * *
name Body String
The name of the credential.
Example: `new-external-credential`
* * *
externalJwtCredentialConfig Body Object
The configuration of the external JWT.
#### Parameters of the `externalJwtCredentialConfig` Object​
issuer String
A URI that describes who issued the token. For tokens from Microsoft Entra ID, the issuer will be a Microsoft endpoint.
Example: `https://sts.windows.net/<tenant-id>`
* * *
allowedAudiences Array of String
List of URIs describing the intended audience for the token. For tokens from Microsoft Entra ID, this field is the Application ID URI. The default format is `api://<client-id>`.
* * *
identifierClaim String
A mapping that describes the field in the token containing the service user identity. For tokens from Microsoft Entra ID, the appropriate fields are `sub` or `oid`. See 
Example: `oid`
* * *
identifierClaimValue String
The user identifier from the external identity provider.
* * *
jwksUri String
The URI from which to retrieve the JWKS, used to validate the signature of the token. If none is provided, Dremio will default to using ``issuer_URL`/.well-known/openid-configuration`. For tokens from Microsoft Entra ID, the JWKS URI is not found under the issuer, so it must be provided. The default location URI is `https://login.microsoftonline.com/<tenant-id>/discovery/keys`.
Example: `https://login.microsoftonline.com/<tenant-id>/discovery/keys`
### Example​
Request

```
curl -X POST 'https://{hostname}/api/v3/user/5263eb65-5fba-406b-9539-8627240adb8e/oauth/credentials' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "credentialType": "EXTERNAL_JWT",  
  "name": "new-external-credential",  
  "externalJwtCredentialConfig": {  
    "issuer": "https://sts.windows.net/3e334762-b0c6-4c36-9faf-93800f0d6c71/",  
    "allowedAudiences": [  
      "api://b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
    ],  
    "identifierClaim": "oid",  
    "identifierClaimValue": "ad5be351-6397-439e-ad83-2f19e0777ecf",  
    "jwksUri": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/discovery/keys?appid=b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
  }  
}'  

```

Response

```
{  
  "id": "3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e",  
  "name": "new-external-credential",  
  "externalJwtCredentialConfig": {  
    "issuer": "https://sts.windows.net/3e334762-b0c6-4c36-9faf-93800f0d6c71/",  
    "allowedAudiences": [  
      "api://b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
    ],  
    "identifierClaim": "oid",  
    "identifierClaimValue": "ad5be351-6397-439e-ad83-2f19e0777ecf",  
    "tokenExchangeAudience": "//oauth.dremio.app/clients/61d00e34-a938-4b80-9a98-063fc723bd6d/credentials/3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e",  
    "jwksUri": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/discovery/keys?appid=b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
  },  
  "credentialType": "EXTERNAL_JWT"  
}  

```

### Response Status Codes​
201 Created   
  

400 Bad Request   
  

401 Unauthorized   
  

404 Not Found   
  

500 Internal Server Error   
  

## Update an External Credential​
Method and URL

```
PUT /api/v3/user/{id}/oauth/credentials/{credentialId}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the service user.
* * *
credentialId Path String (UUID)
Unique identifier of the credential.
* * *
credentialType Body String
The type of credential to update. Must be `EXTERNAL_JWT` for an external credential.
* * *
name Body String
The name of the credential. The name may be updated in this operation.
Example: `updated-external-credential`
* * *
externalJwtCredentialConfig Body Object
The configuration of the external JWT. Any field can be updated by this operation.
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/user/5263eb65-5fba-406b-9539-8627240adb8e/oauth/credentials/3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "credentialType": "EXTERNAL_JWT",  
  "name": "updated-external-credential",  
  "externalJwtCredentialConfig": {  
    "issuer": "https://sts.windows.net/3e334762-b0c6-4c36-9faf-93800f0d6c71/",  
    "allowedAudiences": [  
      "api://b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
    ],  
    "identifierClaim": "oid",  
    "identifierClaimValue": "ad5be351-6397-439e-ad83-2f19e0777ecf",  
    "jwksUri": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/discovery/keys?appid=b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
  }  
}'  

```

Response

```
{  
  "id": "3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e",  
  "name": "updated-external-credential",  
  "externalJwtCredentialConfig": {  
    "issuer": "https://sts.windows.net/3e334762-b0c6-4c36-9faf-93800f0d6c71/",  
    "allowedAudiences": [  
      "api://b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
    ],  
    "identifierClaim": "oid",  
    "identifierClaimValue": "ad5be351-6397-439e-ad83-2f19e0777ecf",  
    "tokenExchangeAudience": "//oauth.dremio.app/clients/61d00e34-a938-4b80-9a98-063fc723bd6d/credentials/3c3a13dd-d0b7-4dd8-b76c-4633e1f8635e",  
    "jwksUri": "https://login.microsoftonline.com/3e334762-b0c6-4c36-9faf-93800f0d6c71/discovery/keys?appid=b0f6e5d4-6e6b-40d9-a9c2-33bb78ceb880"  
  },  
  "credentialType": "EXTERNAL_JWT"  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
404 Not Found   
  
500 Internal Server Error   
  

## Delete a Credential​
Method and URL

```
DELETE /api/v3/user/{id}/oauth/credentials/{credentialId}  

```

### Parameters​
id Path String (UUID)
Unique identifier of the service user.
* * *
credentialId Path String (UUID)
Unique identifier of the credential. This endpoint accepts both client credentials and external credentials.
### Example​
Request

```
curl -X DELETE 'https://{hostname}/api/v3/user/5263eb65-5fba-406b-9539-8627240adb8e/oauth/credentials/c125b06c-b187-439b-8f71-df8cc4784835' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

A successful request returns an empty response with the HTTP `204 No Content` status.
### Response Status Codes​
204 No Content   
  

400 Bad Request   
  

403 Forbidden   
  

500 Internal Server Error   
  

Was this page helpful?
[Previous User](/reference/api/user)[Next User Privileges](/reference/api/user/privilege)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous User](/reference/api/user)[Next User Privileges](/reference/api/user/privilege)
!
