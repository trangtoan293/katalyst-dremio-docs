---
url: /reference/api/wlm/rule
slug: /reference/api/wlm/rule
title: "Rule | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64243.99249625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Workload Management](/reference/api/wlm)
  * Rule

Version: current [26.x]
On this page
# Rule Enterprise
Use the Workload Management (WLM) API to create, retrieve, update, and delete WLM rules.
The rule object includes a rules array (also called the ruleset). Each object in the rules array represents an individual rule. Dremio processes rules in the order they are listed within the rules array: the highest-priority rule is listed first, and the lowest-priority rule is listed last.
Rule Object

```
{  
  "tag": "VmqwaZ90VY4=",  
  "rules": [  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}  

```

## Rule Attributes​
tag String
Unique identifier of the version of the rule. Dremio changes the tag whenever a rule changes and uses the tag to ensure that PUT requests apply to the most recent version of the rules.
Example: VmqwaZ90VY4=
* * *
rules Array of Object
List of rule objects in the Dremio instance.
* * *
defaultRule Object
Information about the default rule for queries. Dremio applies the default rule to queries that do not meet the conditions for any other rule.
Example: {'{'})'{'{'})'{'}'})"name": "All Other Queries","action": "REJECT","id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"{'{'})'{'}'}'{'}'}
#### Attributes of Objects in the `rules` Array​
name String
User-provided name for the rule.
Example: High Cost Reflections
* * *
conditions String
Conditions that queries must match to be placed in the queue.
Example: query_type() = 'Reflections' AND query_cost() &gt;= 30000000
* * *
acceptId String (UUID)
Unique identifier of the queue in which the rule places queries.
Example: 1990e713-3cd2-458c-89e1-68995c2c1047
* * *
acceptName Integer
User-provided name for the queue in which the rule places queries.
Example: High Cost Reflections
* * *
rejectMessage Integer
For rules whose action is `REJECT`, a user-provided message for queries that do not match the rule conditions.
Example: Rejected because query does not meet the rule conditions
* * *
action Integer
Action the rule takes for queries that match the rule conditions.
Enum: PLACE, REJECT
Example: PLACE
* * *
id String (UUID)
Unique identifier of the rule, in UTC format.
Example: fa1ec87d-923b-414c-9064-e079f39f5c49
#### Attributes of the `defaultRule` Object​
name String
User-provided name for the default rule.
Example: All Other Queries
* * *
acceptId String (UUID)
For default rules whose action is `PLACE`, the unique identifier of the queue in which the default rule places queries.
Example: a254d63e-9b0e-41be-af4a-1acc5bfe2332
* * *
acceptName Integer
For default rules whose action is `PLACE`, the user-provided name for the queue in which the rule places queries.
Example: Low Cost User Queries
* * *
rejectMessage Integer
For default rules whose action is `REJECT`, a user-provided message for queries that do not match any rule conditions.
Example: Rejected because query does not meet any rule conditions
* * *
action String
Action the default rule takes for queries that do not match the conditions for any other rule.
Enum: PLACE, REJECT
Example: REJECT
* * *
id String (UUID)
Unique identifier of the default rule.
Example: 8df37560-68c5-45a6-8e1f-4ee2e8438f81
## Create or Update a Rule​
Create or update a WLM rule.
In the WLM API, you interact with the ruleset in the rules array rather than individual rules themselves. To add or update an individual rule, you must include the entire rules array in the request body. It is not necessary to specify the ID for the rule you want to delete in the request URL.
Method and URL

```
PUT /api/v3/wlm/rule  

```

### Parameters​
tag Body String
Unique identifier of the rules instance. Dremio uses the tag to ensure that PUT requests apply to the most recent version of the rules. Omit if you are creating rules for the organization for the first time.
Example: VmqwaZ90VY4=
* * *
rules Body Array of Object
List of rule objects in the Dremio instance. To add or update an individual rule, you must include the entire rules array in the request body.
Example:
* * *
defaultRule Body Object
Information about the default rule for queries. Dremio applies the default rule to queries that do not meet the conditions for any other rule. To add or update an individual rule, you must include the defaultRule object in the request body.
Example: {'{'})'{'{'})'{'}'})"name": "All Other Queries","action": "REJECT","id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"{'{'})'{'}'}'{'}'}
#### Parameters of Objects in the `rules` Array​
name Body String
User-provided name for the rule.
Example: DevOps and Engineering
* * *
conditions Body String
Conditions that queries must match to be placed in the queue.
Example: is_member('DevOps') OR is_member('Engineering')
* * *
acceptId Body String (UUID)
For rules whose action is `PLACE`, the unique identifier of the queue in which the rule should place queries.
Example: b9g7r35c-bda9-e4fb-bagf-9ceaceb9f7c1
* * *
acceptName Body Integer Optional
For rules whose action is `PLACE`, the user-provided name for the queue in which the rule should place queries.
Example: High Cost Reflections
* * *
rejectMessage Body Integer
For rules whose action is `REJECT`, a user-provided message for queries that do not match the rule conditions.
Example: Rejected because query does not meet the rule conditions
* * *
action Body Integer Optional
Action the rule should take for queries that match the rule conditions. Default is `PLACE`.
Enum: PLACE, REJECT
Example: PLACE
#### Parameters of the `defaultRule` Object​
name Body String
User-provided name for the default rule.
Example: All Other Queries
* * *
acceptId Body String (UUID)
For default rules whose action is `PLACE`, the unique identifier of the queue in which the default rule places queries.
Example: a254d63e-9b0e-41be-af4a-1acc5bfe2332
* * *
acceptName Body Integer
For default rules whose action is `PLACE`, the user-provided name for the queue in which the rule places queries.
Example: Low Cost User Queries
* * *
rejectMessage Body Integer
For default rules whose action is `REJECT`, a user-provided message for queries that do not match any rule conditions.
Example: Rejected because query does not meet any rule conditions
* * *
action Body String
Action the default rule should take for queries that do not match the conditions for any other rule.
Enum: PLACE, REJECT
Example: REJECT
* * *
id Body String (UUID)
Unique identifier of the default rule.
Example: 8df37560-68c5-45a6-8e1f-4ee2e8438f81
This example request demonstrates how to add a `DevOps and Engineering` rule to the ruleset:
Example Request to Add a Rule

```
curl -X PUT 'https://{hostname}/api/v3/wlm/rule' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tag": "VmqwaZ90VY4=",  
  "rules": [  
    {  
      "name": "DevOps and Engineering",  
      "conditions": "is_member('DevOps') OR is_member('Engineering')",  
      "acceptId": "b9g7r35c-bda9-e4fb-bagf-9ceaceb9f7c1",  
      "acceptName": "DevOps and Eng Testing",  
      "action": "PLACE"  
    },  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}'  

```

### Example Response​

```
{  
  "tag": "3uzixTFD134=",  
  "rules": [  
    {  
      "name": "DevOps and Engineering",  
      "conditions": "is_member('DevOps') OR is_member('Engineering')",  
      "acceptId": "b9g7r35c-bda9-e4fb-bagf-9ceaceb9f7c1",  
      "acceptName": "DevOps and Eng Testing",  
      "action": "PLACE",  
      "id": "e4983ad5-cd4b-4b4a-9410-b5c37021ce34"  
    },  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}  

```

To change the order in which Dremio processes rules, send a PUT request that lists the rules in the desired order within the rules array, with the highest-priority rule listed first, and the lowest-priority rule listed last.
This example request reorders the rules so that the `COPY & OPTIMIZATION Rule` will be the highest-priority rule:
Example Request to Reorder Rules

```
curl -X PUT 'https://{hostname}/api/v3/wlm/rule' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tag": "VmqwaZ90VY4=",  
  "rules": [  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}'  

```

### Example Response​

```
{  
  "tag": "3uzixTFD134=",  
  "rules": [  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  
409 Conflict   
  

## Retrieve All Rules​
Retrieve all WLM rules.
Method and URL

```
GET /api/v3/wlm/rule  

```

### Example​
Request

```
curl -X GET 'https://{hostname}/api/v3/wlm/rule' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json'  

```

Response

```
{  
  "tag": "3uzixTFD134=",  
  "rules": [  
    {  
      "name": "DevOps and Engineering",  
      "conditions": "is_member('DevOps') OR is_member('Engineering')",  
      "acceptId": "b9g7r35c-bda9-e4fb-bagf-9ceaceb9f7c1",  
      "acceptName": "DevOps and Eng Testing",  
      "action": "PLACE",  
      "id": "e4983ad5-cd4b-4b4a-9410-b5c37021ce34"  
    },  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
409 Conflict   
  
500 Internal Server Error   
  

## Delete a Rule​
Delete a WLM rule from the ruleset.
In the WLM API, you interact with the ruleset in the rules array rather than individual rules themselves. To delete a rule, send a PUT request that omits the rule from the rules array. It is not necessary to specify the ID for the rule you want to delete in the request URL.
The default rule can be updated but cannot be deleted.
Method and URL

```
PUT /api/v3/wlm/rule/  

```

This example request demonstrates how to remove the `DevOps and Engineering` rule added in the Create or Update a Rule example:
### Example​
Request

```
curl -X PUT 'https://{hostname}/api/v3/wlm/rule' \  
--header 'Authorization: Bearer <dremioAccessToken>' \  
--header 'Content-Type: application/json' \  
--data-raw '{  
  "tag": "3uzixTFD134=",  
  "rules": [  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}'  

```

Response

```
{  
  "tag": "VmqwaZ90VY4=",  
  "rules": [  
    {  
      "name": "High Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() >= 30000000",  
      "acceptId": "1990e713-3cd2-458c-89e1-68995c2c1047",  
      "acceptName": "High Cost Reflections",  
      "action": "PLACE",  
      "id": "fa1ec87d-923b-414c-9064-e079f39f5c49"  
    },  
    {  
      "name": "Low Cost Reflections",  
      "conditions": "query_type() = 'Reflections' AND query_cost() < 30000000",  
      "acceptId": "0dbc50a0-034d-40f6-92f7-ff11eda0c760",  
      "acceptName": "Low Cost Reflections",  
      "action": "PLACE",  
      "id": "dcf15b80-403c-4eba-b600-41ea9319e103"  
    },  
    {  
      "name": "COPY & OPTIMIZATION Rule",  
      "conditions": "query_label() in ('COPY','OPTIMIZATION')",  
      "acceptId": "450ea2a5-9a64-4679-99cb-7b01bf6bba27",  
      "acceptName": "COPY & OPTIMIZATION Queue",  
      "action": "PLACE",  
      "id": "a7f27aea-1e23-4699-8846-51e731c219e9"  
    },  
    {  
      "name": "High Cost User Queries",  
      "conditions": "query_cost() >= 30000000",  
      "acceptId": "c2917cce-b566-4c6a-be63-2e28488a6928",  
      "acceptName": "High Cost User Queries",  
      "action": "PLACE",  
      "id": "880d84a2-548d-4040-b6ba-a5371e87aecf"  
    },  
    {  
      "name": "Low Cost User Queries",  
      "conditions": "query_cost() < 30000000",  
      "acceptId": "a254d63e-9b0e-41be-af4a-1acc5bfe2332",  
      "acceptName": "Low Cost User Queries",  
      "action": "PLACE",  
      "id": "c0fa6e0b-e479-497b-846a-ad543009a309"  
    }  
  ],  
  "defaultRule": {  
    "name": "All Other Queries",  
    "action": "REJECT",  
    "id": "8df37560-68c5-45a6-8e1f-4ee2e8438f81"  
  }  
}  

```

### Response Status Codes​
200 OK   
  
401 Unauthorized   
  
404 Not Found   
  
409 Conflict   
  
500 Internal Server Error   
  

Was this page helpful?
[Previous Queue](/reference/api/wlm/queue)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Queue](/reference/api/wlm/queue)
!
