---
url: /reference/api/catalog
title: "Catalog | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64062.134462666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * Catalog

Version: current [26.x]
On this page
# Catalog
Use the Catalog API to retrieve and manage [sources](/reference/api/catalog/source) and [spaces](/reference/api/catalog/container-space) as well as the [folders](/reference/api/catalog/container-folder), [files](/reference/api/catalog/file), [tables](/reference/api/catalog/table), and [views](/reference/api/catalog/view) they contain. The Catalog API also includes endpoints for retrieving [lineage](/reference/api/catalog/lineage) information for datasets and for creating and managing [tags](/reference/api/catalog/tag), [wikis](/reference/api/catalog/wiki), [privileges](/reference/api/catalog/grants), and [grants](/reference/api/catalog/grants) on catalog objects.
Use the Catalog API endpoint described on this page to retrieve a list of the spaces and sources in your Dremio organization. The response contains the IDs required to make requests to other Catalog API endpoints to create, retrieve, update, and delete objects in your catalog.
Catalog Object

```
{  
  "data": [  
    {  
      "id": "a7b1bc39-bffa-4c30-a5eb-5bdaf5bd0959",  
      "path": [  
        "@dremio"  
      ],  
      "tag": "0QVA7wGyiY0=",  
      "type": "CONTAINER",  
      "containerType": "HOME",  
      "stats": {  
        "datasetCount": 18,  
        "datasetCountBounded": false  
      },  
      "permissions": [  
        "READ",  
        "WRITE",  
        "ALTER_REFLECTION",  
        "SELECT",  
        "ALTER",  
        "VIEW_REFLECTION",  
        "MODIFY",  
        "MANAGE_GRANTS",  
        "CREATE_TABLE",  
        "DROP",  
        "EXTERNAL_QUERY",  
        "INSERT",  
        "TRUNCATE",  
        "DELETE",  
        "UPDATE",  
        "EXECUTE",  
        "CREATE_SOURCE",  
        "ALL"  
      ]  
    },  
    {  
      "id": "ed1013cb-4fea-6552-8d43-015215a38bcc",  
      "path": [  
        "Testing"  
      ],  
      "tag": "PR1M7B1Rhjs=",  
      "type": "CONTAINER",  
      "containerType": "SPACE",  
      "stats": {  
        "datasetCount": 3,  
        "datasetCountBounded": false  
      },  
      "createdAt": "2023-02-14T19:28:40.840Z",  
      "permissions": [  
        "READ",  
        "WRITE",  
        "ALTER_REFLECTION",  
        "SELECT",  
        "ALTER",  
        "VIEW_REFLECTION",  
        "MODIFY",  
        "MANAGE_GRANTS",  
        "CREATE_TABLE",  
        "DROP",  
        "EXTERNAL_QUERY",  
        "INSERT",  
        "TRUNCATE",  
        "DELETE",  
        "UPDATE",  
        "EXECUTE",  
        "CREATE_SOURCE",  
        "ALL"  
      ]  
    },  
    {  
      "id": "6b714877-760e-115b-aefd-799430b3ceab",  
      "path": [  
        "Samples"  
      ],  
      "tag": "nEjWZGnrAO0=",  
      "type": "CONTAINER",  
      "containerType": "SOURCE",  
      "stats": {  
        "datasetCount": 10,  
        "datasetCountBounded": false  
      },  
      "createdAt": "2023-01-04T22:13:02.536Z",  
      "permissions": [  
        "READ",  
        "WRITE",  
        "ALTER_REFLECTION",  
        "SELECT",  
        "ALTER",  
        "VIEW_REFLECTION",  
        "MODIFY",  
        "MANAGE_GRANTS",  
        "CREATE_TABLE",  
        "DROP",  
        "EXTERNAL_QUERY",  
        "INSERT",  
        "TRUNCATE",  
        "DELETE",  
        "UPDATE",  
        "EXECUTE",  
        "CREATE_SOURCE",  
        "ALL"  
      ]  
    }  
  ]  
}  

```

## Catalog Attributes[​](/reference/api/catalog#catalog-attributes "Direct link to Catalog Attributes")
[data](/reference/api/catalog#attributes-of-objects-in-the-data-array) Array of Object
List of catalog objects in the Dremio organization.
#### Attributes of Objects in the `data` Array[​](/reference/api/catalog#attributes-of-objects-in-the-data-array "Direct link to attributes-of-objects-in-the-data-array")
id String (UUID)
Unique identifier of the catalog object.
Example: ed1013cb-4fea-6552-8d43-015215a38bcc
* * *
path Array of String
Path of the catalog object within Dremio, expressed as an array.
Example: ["Testing"]
* * *
tag String
Unique identifier of the version of the catalog object. Dremio changes the tag whenever the catalog object changes and uses the tag to ensure that PUT requests apply to the most recent version of the catalog object.
Example: PR1M7B1Rhjs=
* * *
type String
Type of the catalog object. For objects that can contain other catalog objects (the only objects this endpoint retrieves), the type is `CONTAINER`.
Example: CONTAINER
* * *
containerType String
For catalog objects with the type CONTAINER, the type of container.
Enum: SPACE, SOURCE, FOLDER, HOME
Example: SPACE
* * *
[stats](/reference/api/catalog#attributes-of-the-stats-object) Object
Information about the number of datasets in the catalog object and whether the dataset count is bounded. Appears in the response only if the request URL includes the [datasetCount](/reference/api/catalog#parameters) query parameter.
Example: {'{'})'{'{'})'{'}'})"datasetCount": 18,"datasetCountBounded": false{'{'})'{'}'}'{'}'}
* * *
createdAt String
Date and time that the catalog object was created, in UTC format.
Example: 2023-02-14T19:28:40.840Z
* * *
permissions Array of String
Enterprise-only. List of the privileges that you have on the catalog object. Only appears in the response if the request URL includes the `permissions` query parameter. For more information, read [Privileges](/security/rbac/privileges).
Example: ["READ,"WRITE","ALTER_REFLECTION","SELECT","ALTER","VIEW_REFLECTION","MODIFY","MANAGE_GRANTS","CREATE_TABLE","DROP","EXTERNAL_QUERY","INSERT","TRUNCATE","DELETE","UPDATE","EXECUTE","CREATE_SOURCE","ALL"]
##### Attributes of the `stats` Object[​](/reference/api/catalog#attributes-of-the-stats-object "Direct link to attributes-of-the-stats-object")
datasetCount Integer
Number of datasets the catalog object contains.
Example: 18
* * *
datasetCountBounded Boolean
If the dataset count is bounded, the value is `true`. Otherwise, the value is `false`.
Example: false
## Retrieve a Catalog[​](/reference/api/catalog#retrieve-a-catalog "Direct link to Retrieve a Catalog")
Retrieve the catalog for the current Dremio instance.
Method and URL

```
GET /api/v3/catalog  

```

### Parameters[​](/reference/api/catalog#parameters "Direct link to Parameters")
include Query String Optional
Include a non-default attribute in the response. The available values for the include query parameter are `permissions` (Enterprise-only) and `datasetCount`. Specify `permissions` to include each catalog object's permissions array in the response. Specify `datasetCount` to include the [stats object](/reference/api/catalog#attributes-of-the-stats-object) in the response. For more information, read [include and exclude Query Parameters](/reference/api#include-and-exclude-query-parameters).
Example: ?include=permissions
### Example[​](/reference/api/catalog#example "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/catalog' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "data": [  
    {  
      "id": "a7b1bc39-bffa-4c30-a5eb-5bdaf5bd0959",  
      "path": [  
        "@dremio"  
      ],  
      "tag": "0QVA7wGyiY0=",  
      "type": "CONTAINER",  
      "containerType": "HOME"  
    },  
    {  
      "id": "ed1013cb-4fea-6552-8d43-015215a38bcc",  
      "path": [  
        "Testing"  
      ],  
      "tag": "PR1M7B1Rhjs=",  
      "type": "CONTAINER",  
      "containerType": "SPACE",  
      "createdAt": "2023-02-14T19:28:40.840Z"  
    },  
    {  
      "id": "6b714877-760e-115b-aefd-799430b3ceab",  
      "path": [  
        "Samples"  
      ],  
      "tag": "nEjWZGnrAO0=",  
      "type": "CONTAINER",  
      "containerType": "SOURCE",  
      "createdAt": "2023-01-04T22:13:02.536Z"  
    }  
  ]  
}  

```

### Response Status Codes[​](/reference/api/catalog#response-status-codes "Direct link to Response Status Codes")
200 OK   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous API Reference](/reference/api)[Next Source](/reference/api/catalog/source)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous API Reference](/reference/api)[Next Source](/reference/api/catalog/source)
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
