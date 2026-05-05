---
url: /security/auditing
title: "Audit Logging | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64075.913362333
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * Audit Logging

Version: current [26.x]
On this page
# Audit Logging Enterprise
For organizations subject to compliance and regulation where auditing is regularly required, Dremio offers full audit logging, wherein all user activities performed within Dremio are tracked and traceable via the `audit.json` file. Each time a user performs an action within Dremio, such as logging in or creating a view, the audit log captures the user's ID and username, objects affected, action performed, event type, SQL statements used, and more.
Audit logging is enabled by default and is available only to users with administrative rights at the System level.
## Audit Log Location[​](/security/auditing#audit-log-location "Direct link to Audit Log Location")
The log-file location may be configured via the `dremio.log.path` property in the [`dremio-env` file](/deploy-dremio/other-options/standalone/dremio-config/dremio-env). You can specify their location, size, and rotation schedule.
## Tracked Events and Actions[​](/security/auditing#tracked-events-and-actions "Direct link to Tracked Events and Actions")
Dremio supports audit logging for the following objects (event types) and actions:  
| Event Type  | Actions  |  
| --- | --- |  
| AI_AGENT  | REQUEST, RESPONSE  |  
| AUTHENTICATION  | LOGIN  |  
| ENGINE  | CREATE_STARTED, UPDATE_STARTED, DELETE_STARTED  |  
| ENGINE_CONFIG  | CREATE, UPDATE, DELETE, START, STOP, SCALE_UP, SCALE_DOWN  |  
| ENGINE_SCALING  | SCALE_UP_STARTED, SCALE_DOWN_STARTED  |  
| FOLDER  | CREATE, UPDATE, DELETE  |  
| LABEL  | CREATE, UPDATE, DELETE  |  
| MODEL_PROVIDER_CONFIG  | CREATE, UPDATE, DELETE, SET_DEFAULT  |  
| PERSONAL_ACCESS_TOKEN  | CREATE, DELETE  |  
| PHYSICAL_DATASET  | CREATE, UPDATE, DELETE  |  
| PRIVILEGE  | UPDATE, DELETE  |  
| QUEUE  | CREATE, UPDATE, DELETE  |  
| REFLECTION  | CREATE, UPDATE, DELETE  |  
| ROLE  | CREATE, UPDATE, DELETE  |  
| SOURCE  | CREATE, UPDATE, DELETE  |  
| SPACE  | CREATE, UPDATE, DELETE  |  
| SUPPORT_SETTING  | RESET, SET  |  
| UDF  | CREATE, UPDATE, DELETE  |  
| USER_ACCOUNT  | CREATE, UPDATE, DELETE  |  
| VIRTUAL_DATASET  | CREATE, RENAME, UPDATE, DELETE  |  
| WIKI  | CREATE, EDIT, DELETE  |  
## Audit Log Format[​](/security/auditing#audit-log-format "Direct link to Audit Log Format")
Audit logs include the following information in JSON format:  
| Key  | Value  |  
| --- | --- |  
| `timestamp`  | The date and time when the event was recorded.  |  
| `userId`  | The ID value associated with the user's account.   
The following values are placeholders that represent internal system users, which Dremio uses to log events before the user authenticates: `1` and `678cc92c-01ed-4db3-9a28-d1f871042d9f`.  |  
| `userName`  | The username associated with the user account (which is typically used to log in).  |  
| `status`  | The status of the action, which is typically used to indicate whether the event was approved or allowed.  |  
| `eventType`  | The object or scope of the interaction that occurred.  |  
| `action`  | The actual activity performed within the specified scope.   
This varies based on the `eventType`, but most often would be `CREATE`, `DELETE`, and `UPDATE`.  |  
| `details`  | The data altered or created.   
This varies based on the `eventType`.  |  
### Audit Log Examples[​](/security/auditing#audit-log-examples "Direct link to Audit Log Examples")
The following examples show the types of audit records that Dremio captures and the information included in an audit entry for each event type.
  * AUTHENTICATION
  * ENGINE
  * REFLECTION
  * VIRTUAL_DATASET


User `dremio` logged in on the Dremio application.
The audit log would have the following information:
Authentication log

```
{  
  "timestamp": "2021-11-23 16:30:53,400",  
  "userContext": {  
    "userId": "1",  
    "userName": "$dremio$"  
  },  
  "status": "OK",  
  "eventType": "AUTHENTICATION",  
  "action": "LOGIN",  
  "details": {  
    "userName": "dremio",  
    "userId": "",  
    "source": "FLIGHT"  
  }  
}  

```

User `dremio` created an engine called `preview`.
The audit log would have the following information:
Engine log

```
{  
  "timestamp": "2025-04-07 13:25:41,193",  
  "userContext": {  
    "userId": "b8c3f553-93ca-4b6b-95dc-4d6c03cdb58f",  
    "userName": "dremio"  
  },  
  "status": "OK",  
  "eventType": "ENGINE",  
  "action": "CREATE_STARTED",  
  "details": {  
    "engineId": "541bf413-b66d-4fc0-8e33-e103efdf6bdc",  
    "engineName": "preview",  
    "engineSize": "2XSmall",  
    "resourceAllocationOffset": "reserve-2-8",  
    "targetCpuCapacity": "16C"  
    "autoStopDelaySecs": 3600,  
  }  
}  

```

User `dremio` created a Reflection called `Raw Reflection (1)` in the Dremio console.
The audit log would have the following information:
Reflection log

```
{  
  "timestamp": "2021-11-22 10:06:38,432",  
  "userContext": {  
    "userId": "6ab04602-410b-4031-87ae-2d3d5f7dc",  
    "userName": "dremio"  
  },  
  "status": "OK",  
  "eventType": "REFLECTION",  
  "action": "CREATE",  
  "details": {  
    "reflectionId": "a5251b05-4873-4a9d-a008-303eeeeed",  
    "name": "Raw Reflection (1)",  
    "dataset": "7e3d4a8a-b92d-41ab-96dc-6a76a6248",  
    "type": "RAW",  
    "sortColumns": [  
      {  
        "name": "fare_amount"  
      }  
    ],  
    "partitionColumns": [  
      {  
        "name": "passenger_count"  
      }  
    ],  
    "distributionColumns": [],  
    "dimensions": [],  
    "measures": [],  
    "displayColumns": [  
      {  
        "name": "passenger_count"  
      },  
      {  
        "name": "pickup_datetime"  
      },  
      {  
        "name": "trip_distance_mi"  
      },  
      {  
        "name": "fare_amount"  
      },  
      {  
        "name": "tip_amount"  
      },  
      {  
        "name": "total_amount"  
      }  
    ],  
    "partitiondistributionstrategy": "CONSOLIDATED",  
    "arrowCachingEnabled": false,  
    "targetDataset": ""  
  }  
}  

```

User `dremio` issued a SQL command to `CREATE` a view in Dremio's SQL editor.
The audit log would have the following information:
View (virtual dataset) log

```
{  
  "timestamp": "2021-11-17 14:31:43,594",  
  "userContext": {  
    "userId": "4a3ea2fa-a3f6-4adb-8852-041a28cac",  
    "userName": "dremio"  
  },  
  "status": "OK",  
  "eventType": "VIRTUAL_DATASET",  
  "action": "CREATE",  
  "details": {  
    "id": "da08848d-d80d-4414-aaf4-40ce866ea",  
    "name": "a_employees",  
    "tag": "gwN/p7E5E1Q=",  
    "path": "myView.a_employees",  
    "sql": "SELECT \"firstname\", \"zipcode\"\nFROM \"local-msql\".\"dremio_db1\".\"Employees\"\nWHERE \"zipcode\" LIKE 'a%'",  
    "sqlContext": "myView",  
    "fields": [  
      {  
        "name": "firstname",  
        "dataType": "TEXT"  
      },  
      {  
        "name": "zipcode",  
        "dataType": "TEXT"  
      }  
    ],  
    "oldName": "",  
    "oldPath": ""  
  }  
}  

```

Was this page helpful?
[Previous HashiCorp Vault](/security/secrets-management/hashicorp-vault)[Next Idle Session Timeout](/security/idle-session-timeout)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous HashiCorp Vault](/security/secrets-management/hashicorp-vault)[Next Idle Session Timeout](/security/idle-session-timeout)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fsecurity%2Fauditing%2F&_biz_t=1777950395396&_biz_i=Audit%20Logging%20%7C%20Dremio%20Enterprise%20Documentation&_biz_n=157&rnd=116045&cdn_o=a&_biz_z=1777950395396)
