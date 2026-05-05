---
url: /reference/api/oauth-token
slug: /reference/api/oauth-token
title: "OAuth Token | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64067.746339041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * OAuth Token

Version: current [26.x]
On this page
# OAuth Token Enterprise
Clients use the `/oauth/token` endpoint to request OAuth access tokens for creating connections to Dremio.
The Dremio OAuth authorization server is located at `{hostname}/oauth/token`. After a valid request, Dremio returns an OAuth access token in a JSON object, along with the token lifetime and other metadata.
OAuth Token Object

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",    
  "scope": "dremio.all offline_access",  
  "refresh_token": "ism9f1nf68lre2salj0tq0btor"  
}  

```

## Object Attributes​
access_token String
The returned access token. A client application passes this token when connecting with Dremio.
Example: `eyJz93a...k4laUWw`
* * *
expires_in Integer
The access token lifetime in seconds. The default lifetime is 3600 seconds (1 hour).
Example: `3599`
* * *
token_type String
`Bearer` for all access tokens.
* * *
issued_token_type String
`urn:ietf:params:oauth:token-type:access_token` for access tokens.
* * *
scope String
A space-separated list of 
Example: `dremio.all offline_access`
* * *
refresh_token String Optional
An optional OAuth `scope` includes `offline_access`.
Example: `ism9f1nf68lre2salj0tq0btor`
## Obtain Tokens via Client ID and Client Secret​
The Client ID and Client Secret are used to obtain a short-lived access token that provides secure, time-limited access to resources.
See [User Management](/security/authentication/users) to create service users for machine-to-machine applications.
Method and URL

```
POST /{hostname}/oauth/token  

```

### Parameters​
client_id Body String
The unique identifier for your [service user](/security/authentication/users), assigned by Dremio.
Example: `d3821306-1f75-4233-9c42-1a295f219850`
* * *
client_secret Body String
The confidential credential that proves your application's identity. This secret must be kept secure and should never be exposed in client-side code or version control.
Example: `gkuzJELlTySLGY7lJYRdt6EVW1YAJf7BLKROnH81mUDBq7rmVhT6OZU0G+kf5g==`
* * *
grant_type Body String
Valid value is `client_credentials`.
* * *
scope Body String
Defines the level of access being requested. The scope must be set to `dremio.all`, which grants full access to Dremio resources.
### Example​
  * cURL
  * Python


Request with Client Credentials

```
#!/bin/bash  
  
# Get OAuth token  
curl -s -X POST "https://$DREMIO_HOST:9047/oauth/token" \  
  -H "Content-Type: application/x-www-form-urlencoded" \  
  --data-urlencode "grant_type=client_credentials" \  
  --data-urlencode "client_id=$CLIENT_ID" \  
  --data-urlencode "client_secret=$CLIENT_SECRET" \  
  --data-urlencode "scope=dremio.all"   

```

Response

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",  
  "scope": "dremio.all offline_access",  
  "refresh_token": "ism9f1nf68lre2salj0tq0btor"  
}                                             

```

Request with Client Credentials

```
import requests  
import json  
  
class DremioClient:  
    def __init__(self, config_file='config.json'):  
        self.config = self._load_config(config_file)  
        self.client_id = self.config['client_id']  
        self.client_secret = self.config['client_secret']  
        self.dremio_host = self.config['dremio_host']  
  
    def _load_config(self, config_file):  
        try:  
            with open(config_file, 'r') as f:  
                return json.load(f)  
        except FileNotFoundError:  
            raise FileNotFoundError(f"Config file '{config_file}' not found")  
        except json.JSONDecodeError:  
            raise ValueError(f"Invalid JSON in config file '{config_file}'")  
  
    def get_token(self):  
        token_url = f"https://{self.dremio_host}:9047/oauth/token"  
        data = {  
            'grant_type': 'client_credentials',  
            'client_id': self.client_id,  
            'client_secret': self.client_secret,  
            'scope': 'dremio.all'  
        }  
  
        response = requests.post(token_url, data=data)  
        response.raise_for_status()  
        return response.json()['access_token']  
  
# Usage  
client = DremioClient('dremio-config.json')  
token = client.get_token()  

```

The lifetime of this token is one hour.
### Response Status Codes​
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
403 Forbidden  
  

## Obtain Tokens via Username and Password​
For users authenticated locally or with an enterprise LDAP server, Dremio can provide OAuth access tokens using your username and password.
Method and URL

```
POST /{hostname}/oauth/token  

```

### Parameters​
username Body String
The username that will be embedded in the token.
Example: `dremio_user`
* * *
password Body String
The user's password.
Example: `dremio123`
* * *
grant_type Body String
The type of authentication method. For this method, the grant_type is `password`.
* * *
scope Body String
Must contain `dremio.all`. If the scope also contains `offline_access`, Dremio will return a refresh token with the access token.
Example: `dremio.all offline_access`
### Example​
  * cURL
  * Python


Request Using User Credentials

```
curl -X POST 'https://{hostname}/oauth/token' \  
--header 'Content-Type: application/x-www-form-urlencoded' \  
--data-urlencode 'username=dremio' \  
--data-urlencode 'password=dremio123' \  
--data-urlencode 'grant_type=password' \  
--data-urlencode 'scope=dremio.all offline_access'  

```

Response

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",  
  "scope": "dremio.all offline_access",  
  "refresh_token": "ism9f1nf68lre2salj0tq0btor"  
}  

```

Request Using User Credentials

```
import requests  
  
form_data = {  
    "username": "dremio_user",  
    "password": "dremio123",  
    "grant_type": "password",  
    "scope": "dremio.all offline_access"  
}  
  
request_header = {"Content-Type": "application/x-www-form-urlencoded"}  
  
token_exchange_response = requests.post(  
    "https://{hostname}/oauth/token", headers=request_header, data=form_data)  
  
if token_exchange_response.status_code == 200:  
    token_exchange_response_json = token_exchange_response.json()  
    dremio_access_token = token_exchange_response_json["access_token"]  
    dremio_access_token_expires_in_sec = token_exchange_response_json["expires_in"]  
    dremio_refresh_token = token_exchange_response_json["refresh_token"]  
else:  
    print("Error: " + str(token_exchange_response.status_code))  

```

The lifetime of this token is one hour.
### Response Status Codes​
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
403 Forbidden  
  
500 Internal Server Error  
  

## Exchange a Refresh Token​
If a refresh token was requested with the OAuth access token using the `offline_access` scope, the refresh token can be exchanged for fresh access tokens until the refresh token expires. Each refresh token has a lifetime of 30 days.
Method and URL

```
POST /{hostname}/oauth/token  

```

### Parameters​
grant_type Body String
The type of token being exchanged. For a token refresh, the grant_type is `refresh_token`.
* * *
client_id Body String
The username from the original token request.
Example: `dremio_user`
* * *
refresh_token Body String
The refresh token returned with the original token request.
Example: `ism9f1nf68lre2salj0tq0btor`
### Example​
  * cURL
  * Python


Request Using a Refresh Token

```
curl -X POST 'https://{hostname}/oauth/token' \  
--header 'Content-Type: application/x-www-form-urlencoded' \  
--data-urlencode 'grant_type=refresh_token' \  
--data-urlencode 'client_id=dremio' \  
--data-urlencode 'refresh_token=ism9f1nf68lre2salj0tq0btor'  

```

Response

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",  
  "scope": "dremio.all offline_access"  
}  

```

Request Using a Refresh Token

```
import requests  
  
form_data = {  
    "grant_type": "refresh_token",  
    "client_id": "dremio",  
    "refresh_token": "ism9f1nf68lre2salj0tq0btor"  
}  
  
request_header = {"Content-Type": "application/x-www-form-urlencoded"}  
  
token_exchange_response = requests.post(  
    "https://{hostname}/oauth/token", headers=request_header, data=form_data)  
  
if token_exchange_response.status_code == 200:  
    token_exchange_response_json = token_exchange_response.json()  
    dremio_access_token = token_exchange_response_json["access_token"]  
    dremio_access_token_expires_in_sec = token_exchange_response_json["expires_in"]  
else:  
    print("Error: " + str(token_exchange_response.status_code))  

```

The lifetime of this token is one hour.
### Response Status Codes​
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
403 Forbidden  
  
500 Internal Server Error  
  

## Exchange an External JWT​
Clients who authenticate with an OIDC external token provider can exchange their JWT for an OAuth access token that can be used to create connections to Dremio.
Method and URL

```
POST /{hostname}/oauth/token  

```

### Parameters​
subject_token Body String
The external JWT obtained from an OIDC provider like Microsoft Entra ID.
Example: `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...DYynR2lK6xB8xrAprgPA`
* * *
subject_token_type Body String
The type of subject token used. For an external JWT, the subject_token_type is `urn:ietf:params:oauth:token-type:jwt`.
* * *
grant_type Body String
The type being granted. For a token exchange, the grant_type is `urn:ietf:params:oauth:grant-type:token-exchange`.
* * *
scope Body String
The scope of the request. For a token exchange, the scope is `dremio.all`.
### Example​
  * cURL
  * Python


Request Using an External JWT

```
curl -X POST 'https://{hostname}/oauth/token' \  
--header 'Content-Type: application/x-www-form-urlencoded' \  
--data-urlencode 'subject_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...DYynR2lK6xB8xrAprgPA' \  
--data-urlencode 'subject_token_type=urn:ietf:params:oauth:token-type:jwt' \  
--data-urlencode 'grant_type=urn:ietf:params:oauth:grant-type:token-exchange' \  
--data-urlencode 'scope=dremio.all'  

```

Response

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",  
  "scope": "dremio.all"  
}  

```

Request Using an External JWT

```
import requests  
  
form_data = {  
    "subject_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUz...DYynR2lK6xB8xrAprgPA",  
    "subject_token_type": "urn:ietf:params:oauth:token-type:jwt",  
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange",  
    "scope": "dremio.all"  
}  
  
request_header = {"Content-Type": "application/x-www-form-urlencoded"}  
  
token_exchange_response = requests.post(  
    "https://{hostname}/oauth/token", headers=request_header, data=form_data)  
  
if token_exchange_response.status_code == 200:  
    token_exchange_response_json = token_exchange_response.json()  
    dremio_access_token = token_exchange_response_json["access_token"]  
    dremio_access_token_expires_in = token_exchange_response_json["expires_in"]  
else:  
    print("Error: " + str(token_exchange_response.status_code))  

```

The lifetime of this token is the time remaining on the external JWT, up to one hour.
### Response Status Codes​
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
403 Forbidden  
  
500 Internal Server Error  
  

## Exchange a PAT​
Exchanging a [personal access token (PAT)](/security/authentication/personal-access-tokens) for an OAuth access token provides the security benefit of a shorter token lifetime while allowing a client application to access protected resources with a more controlled access mechanism. OAuth access tokens also perform better due to faster validation time than PATs.
Method and URL

```
POST /{hostname}/oauth/token  

```

### Parameters​
subject_token Body String
The personal access token to be exchanged.
Example: `wPTsz2YrTVWQ7fw436Ec...911rJzUm6Xs1XrvU+w==`
* * *
subject_token_type Body String
The type of subject token used. For a PAT, the subject_token_type is `urn:ietf:params:oauth:token-type:dremio:personal-access-token`.
* * *
grant_type Body String
The type being granted. For a token exchange, the grant_type is `urn:ietf:params:oauth:grant-type:token-exchange`.
* * *
scope Body String
The scope of the request. For a token exchange, the scope is `dremio.all`.
### Example​
  * cURL
  * Python


Request Using a PAT

```
curl -X POST 'https://{hostname}/oauth/token' \  
--header 'Content-Type: application/x-www-form-urlencoded' \  
--data-urlencode 'subject_token=wPTsz2YrTVWQ7fw436Ec7Vs16TAWeRyojniYNXED1THt911rJzUm6Xs1XrvU+w==' \  
--data-urlencode 'subject_token_type=urn:ietf:params:oauth:token-type:dremio:personal-access-token' \  
--data-urlencode 'grant_type=urn:ietf:params:oauth:grant-type:token-exchange' \  
--data-urlencode 'scope=dremio.all'  

```

Response

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",  
  "scope": "dremio.all"  
}  

```

Request Using a PAT

```
import requests  
  
form_data = {  
    "subject_token": "wPTsz2YrTVWQ7fw436Ec...911rJzUm6Xs1XrvU+w==",  
    "subject_token_type": "urn:ietf:params:oauth:token-type:dremio:personal-access-token",  
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange",  
    "scope": "dremio.all"  
}  
  
request_header = {"Content-Type": "application/x-www-form-urlencoded"}  
  
token_exchange_response = requests.post(  
    "https://{hostname}/oauth/token", headers=request_header, data=form_data)  
  
if token_exchange_response.status_code == 200:  
    token_exchange_response_json = token_exchange_response.json()  
    dremio_access_token = token_exchange_response_json["access_token"]  
    dremio_access_token_expires_in_sec = token_exchange_response_json["expires_in"]  
else:  
    print("Error: " + str(token_exchange_response.status_code))  

```

The lifetime of this token is the remaining lifetime of the PAT used in the exchange, up to one hour.
### Response Status Codes​
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
403 Forbidden  
  
500 Internal Server Error  
  

## Exchange a PAT with User Impersonation​
Dremio's [inbound user impersonation](/security/rbac/inbound-impersonation) feature allows a privileged user, called a proxy user, to run queries on Dremio as a second target user using the target user's privileges. The privileged user obtains the necessary privileges to impersonate a second target user from an inbound impersonation policy created by the Dremio administrator. Once the inbound impersonation policy is in place, the proxy user runs queries as the target user as allowed by the target user's privileges.
Inbound Impersonation Policy

```
ALTER SYSTEM SET "exec.impersonation.inbound_policies"='[  
  {  
    proxy_principals:{  
      users:["mark"]  
    },  
    target_principals:{  
      users:["sharedaccessuser"]  
    }  
  }  
]'  

```

Method and URL

```
POST /{hostname}/oauth/token  

```

### Parameters​
subject_token Body String
The target principal's username.
Example: `sharedaccessuser`
* * *
subject_token_type Body String
The type of subject token used. For a target principal, the subject_token_type is `urn:ietf:params:oauth:token-type:dremio:subject`.
* * *
actor_token Body String
The proxy principal's personal access token.
Example: `S0ilZcxyQCeH6m8hoNeCdVYwc...BjsxFsJfvCVhHsQ==`
* * *
actor_token_type Body String
The type of actor token. For a PAT, the actor_token_type is `urn:ietf:params:oauth:token-type:dremio:personal-access-token`.
* * *
grant_type Body String
The type being granted. For a token exchange, the grant_type is `urn:ietf:params:oauth:grant-type:token-exchange`.
* * *
scope Body String
The scope of the request. For a token exchange, the scope is `dremio.all`.
### Example​
  * cURL
  * Python


Request Using a PAT with Impersonation

```
curl -X POST 'http://localhost:9047/oauth/token' \  
--header 'Content-Type: application/x-www-form-urlencoded' \  
--header 'Accept: application/json' \  
--data-urlencode 'subject_token=sharedaccessuser' \  
--data-urlencode 'subject_token_type=urn:ietf:params:oauth:token-type:dremio:subject' \  
--data-urlencode 'actor_token=wPTsz2YrTVWQ7fw436Ec7Vs16TAWeRyojniYNXED1THt911rJzUm6Xs1XrvU+w==' \  
--data-urlencode 'actor_token_type=urn:ietf:params:oauth:token-type:dremio:personal-access-token' \  
--data-urlencode 'grant_type=urn:ietf:params:oauth:grant-type:token-exchange' \  
--data-urlencode 'scope=dremio.all'  

```

Response

```
{  
  "access_token": "eyJz93a...k4laUWw",  
  "expires_in": 3599,  
  "token_type": "Bearer",  
  "issued_token_type": "urn:ietf:params:oauth:token-type:access_token",  
  "scope": "dremio.all"  
}  

```

Request Using a PAT with Impersonation

```
import requests  
  
form_data = {  
    "subject_token": "sharedaccessuser",  
    "subject_token_type": "urn:ietf:params:oauth:token-type:dremio:subject",  
    "actor_token": "wPTsz2YrTVWQ7fw436Ec7Vs16TAWeRyojniYNXED1THt911rJzUm6Xs1XrvU+w==",  
    "actor_token_type": "urn:ietf:params:oauth:token-type:dremio:personal-access-token",  
    "grant_type": "urn:ietf:params:oauth:grant-type:token-exchange",  
    "scope": "dremio.all"  
}  
  
request_header = {"Content-Type": "application/x-www-form-urlencoded"}  
  
token_exchange_response = requests.post(  
    "https://{hostname}/oauth/token", headers=request_header, data=form_data)  
  
if token_exchange_response.status_code == 200:  
    token_exchange_response_json = token_exchange_response.json()  
    dremio_access_token = token_exchange_response_json["access_token"]  
    dremio_access_token_expires_in_sec = token_exchange_response_json["expires_in"]  
else:  
    print("Error: " + str(token_exchange_response.status_code))  

```

The lifetime of this token is the remaining lifetime of the PAT used in the exchange, up to one hour.
### Response Status Codes​
200 OK  
  
400 Bad Request  
  
401 Unauthorized  
  
403 Forbidden  
  
500 Internal Server Error  
  

Was this page helpful?
[Previous Node Collections](/reference/api)[Next Personal Access Token](/reference/api/personal-access-token)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Node Collections](/reference/api)[Next Personal Access Token](/reference/api/personal-access-token)
!
