---
url: /reference/api/nodeCollections
slug: /reference/api/nodeCollections
title: "Node Collections | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64238.12047175
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Node Collections

Version: current [26.x]
On this page
# Node Collections
Use the Node Collections API to deny access to Dremio cluster nodes and retrieve the currently denied nodes for the Dremio instance.
The Node Collections API does not have a corresponding Node Collection object. The endpoints return a list of the currently denied nodes in the response.
You must be a member of the Dremio ADMIN role to send requests to the Node Collections API.
## Deny Nodes[​](/reference/api)
Deny access to the specified Dremio cluster nodes.
Method and URL

```
POST /api/v3/nodeCollections/blacklist  

```

The request body is a comma-separated list of the names for the nodes that you want to deny, including any currently denied nodes that should remain denied. Format the request body as an array of string, with each node name in double quotes. Use a comma to separate each node name in the list.
Any nodes omitted from the request body, including currently denied nodes, will be allowed.
### Example[​](/reference/api)
Request

```
curl -X POST 'https://{hostname}/api/v3/nodeCollections/blacklist' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '["localhost-1.c.dremio-1093.external",  "localhost-2.c.dremio-1093.external"]'  

```

Response

```
[  
  "localhost-1.c.dremio-1093.external",  
  "localhost-2.c.dremio-1093.external"  
]  

```

### Response Status Codes[​](/reference/api)
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  

## Retrieve Denied Nodes[​](/reference/api)
Invalidate the LDAP authorization for a specific user or group by ID.
Method and URL

```
GET /api/v3/nodeCollections/blacklist  

```

### Example[​](/reference/api)
Request

```
curl -X GET 'https://{hostname}/api/v3/nodeCollections/blacklist' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
[  
  "localhost-1.c.dremio-1093.external",  
  "localhost-2.c.dremio-1093.external"  
]  

```

### Response Status Codes[​](/reference/api)
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  

## Allow All Nodes[​](/reference/api)
Allow access to all Dremio cluster nodes.
Method and URL

```
POST /api/v3/nodeCollections/blacklist  

```

To allow all nodes, send an empty array in the request body.
### Example[​](/reference/api)
Request

```
curl -X POST 'https://{hostname}/api/v3/nodeCollections/blacklist' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '[]'  

```

Response

```
[]  

```

### Response Status Codes[​](/reference/api)
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  

Was this page helpful?
[Previous LDAP User Cache](/reference/api/ldap-authorization)[Next OAuth Token](/reference/api/oauth-token)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LDAP User Cache](/reference/api/ldap-authorization)[Next OAuth Token](/reference/api/oauth-token)
!
![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   

Allow All
###  Manage Consent Preferences
#### Functional Cookies
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
#### Performance Cookies
Performance Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
#### Targeting Cookies
Targeting Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
#### Strictly Necessary Cookies
Always Active
These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
Back Button
### Cookie List
Search Icon
Filter Icon
Clear
checkbox label label
Apply Cancel
Consent Leg.Interest
checkbox label label
checkbox label label
checkbox label label
Reject All Confirm My Choices
