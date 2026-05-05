---
url: /reference/api/sql
slug: /reference/api/sql
title: "SQL | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64791.369063125
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * SQL

Version: current [26.x]
On this page
# SQL
Use the SQL API to submit SQL queries. The response contains the ID for the job associated with the SQL query. Use the job ID in [Job API](/reference/api/job) requests to get more information about the job, including results.
## Submit an SQL Query​
Submit an SQL query and retrieve the associated job ID for use in [Job API](/reference/api/job) requests.
Method and URL

```
POST /api/v3/sql  

```

### Parameters​
sql Body String
SQL query to run.
Double-quotation marks within a SQL statement need to be escaped.
Example: SELECT * FROM Samples."samples.dremio.com"."SF weather 2018-2019.csv"
* * *
context Body Array of String Optional
Path to the container where the query should run within Dremio, expressed as an array. The path consists of the source or space, followed by the folder and subfolders.
Example: ["Samples","samples.dremio.com"]
* * *
references Body Object Optional
References to the specific versions (branches, tags, and commits) in Nessie sources where you want to run the SQL query. If references are not specified for a Nessie source, the SQL query runs on the default branch.
Example: {'{'})'{'{'})'{'}'})"nessieSource1": {'{'})'{'{'})'{'}'})"type": "BRANCH","value": "testing"{'{'})'{'}'}'{'}'},"nessieSource2": {'{'})'{'{'})'{'}'})"type": "TAG","value": "Test commit"{'{'})'{'}'}'{'}'},"nessieSource3": {'{'})'{'{'})'{'}'})"type": "COMMIT","value": "7a5edb57e035f52beccfab632cea070514eb8b773f616aaeaf668e2f0be8f10d"{'{'})'{'}'}'{'}'}{'{'})'{'}'}'{'}'}
#### Parameters of the `references` Object​
&lt;Nessie source&gt; Body String Optional
The name of the Nessie source where you want to run the SQL query.
Example: nessieSource1
##### Parameters of the `<Nessie source>` Object​
type Body String Optional
The type of Nessie source object where you want to run the SQL query.
Enum: BRANCH, TAG, COMMIT
Example: BRANCH
* * *
value Body String Optional
The branch or tag name or commit hash in the Nessie source on which you want to run the SQL query.
Example: testing
Example Request Using Only the SQL Parameter

```
curl -X POST 'https://{hostname}/api/v3/sql' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "sql": "SELECT * FROM Samples.\"samples.dremio.com\".\"SF weather 2018-2019.csv\""  
}'  

```

Example Request Using Optional Parameters

```
curl -X POST 'https://{hostname}/api/v3/sql' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "sql": "SELECT * FROM \"SF weather 2018-2019.csv\"",  
  "context": [  
    "Samples",  
    "samples.dremio.com"  
  ],  
  "references": {  
    "nessieSource1": {  
      "type": "BRANCH",  
      "value": "testing"  
    },  
    "nessieSource2": {  
      "type": "TAG",  
      "value": "Test commit"  
    },  
    "nessieSource3": {  
      "type": "COMMIT",  
      "value": "7a5edb57e035f52beccfab632cea070514eb8b773f616aaeaf668e2f0be8f10d"  
    }  
  }  
}'  

```

### Example Response​

```
{  
  "id": "2f067496-7cf0-a70e-0222-34d53a5dc800"  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
404 Not Found   
  

Was this page helpful?
[Previous Source](/reference/api/source)[Next User](/reference/api/user)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Source](/reference/api/source)[Next User](/reference/api/user)
!
