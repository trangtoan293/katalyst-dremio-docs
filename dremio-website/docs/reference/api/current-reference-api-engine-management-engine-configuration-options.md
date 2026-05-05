---
url: /reference/api/engine-management/engine-configuration-options
title: "Engine Configuration Options &lt;Chip&gt;Enterprise&lt;/Chip&gt; | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64790.017466875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [API Reference](/reference/api)
  * [Engine Management](/reference/api/engine-management)
  * Configuration Options

Version: current [26.x]
On this page
# Engine Configuration Options Enterprise
Use the Engine Management API to manage your engines in Dremio:
  * [**Engine Management**](/reference/api/engine-management) - Covers the objects and operations for managing engines.
  * **Engine Configuration** - Covers the objects and operations for engine configuration options.

Engine Configuration Options

```
{  
  "targetCpuCapacities": {  
    "capacities": [  
      {  
        "name": "16C",  
        "cpu": "16"  
      },  
      {  
        "name": "32C",  
        "cpu": "32"  
      }  
    ],  
    "defaultCapacity": "32C"  
  },  
  "sizes": [  
    {  
      "name": "2XSmall",  
      "pods": 1,  
      "memory": "64Gi",  
      "cpuScaleFactor": 0.5  
    },  
    {  
      "name": "XSmall",  
      "pods": 1,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "Small",  
      "pods": 2,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "Medium",  
      "pods": 4,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "Large",  
      "pods": 8,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "XLarge",  
      "pods": 16,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "2XLarge",  
      "pods": 32,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    }  
  ],  
  "resourceAllocationOffsets": {  
    "offsets": [  
      {  
        "name": "reserve-0-0",  
        "cpu": "0",  
        "memory": "0Gi",  
        "action": "Reserve"  
      },  
      {  
        "name": "reserve-2-4",  
        "cpu": "2",  
        "memory": "4Gi",  
        "action": "Reserve"  
      },  
      {  
        "name": "reserve-2-8",  
        "cpu": "2",  
        "memory": "8Gi",  
        "action": "Reserve"  
      },  
      {  
        "name": "reserve-2-16",  
        "cpu": "2",  
        "memory": "16Gi",  
        "action": "Reserve"  
      }  
    ],  
    "defaultOffset": "reserve-2-8"  
  },  
  "storage": {  
    "spillStorageSizes": [  
      {  
        "name": "100GB",  
        "storage": "100Gi"  
      },  
      {  
        "name": "250GB",  
        "storage": "250Gi"  
      },  
      {  
        "name": "500GB",  
        "storage": "500Gi"  
      }  
    ],  
    "defaultSpillStorageSize": "100GB",  
    "c3StorageSizes": [  
      {  
        "name": "100GB",  
        "storage": "100Gi"  
      },  
      {  
        "name": "250GB",  
        "storage": "250Gi"  
      },  
      {  
        "name": "500GB",  
        "storage": "500Gi"  
      }  
    ],  
    "defaultC3StorageSize": "100GB"  
  },  
  "idleTimeouts": {  
    "durations": [  
      "PT2H",  
      "PT1H30M",  
      "PT1H",  
      "PT30M",  
      "PT15M",  
      "PT10M",  
      "PT5M"  
    ],  
    "defaultDuration": "PT2H",  
    "maximumDuration": "PT12H"  
  }  
}  

```

## Engine Configuration Options Attributes[​](/reference/api/engine-management/engine-configuration-options#engine-configuration-options-attributes "Direct link to Engine Configuration Options Attributes")
[targetCpuCapacities](/reference/api/engine-management/engine-configuration-options#attributes-of-the-targetcpucapacities-object) Object
Information about the possible CPU capacities optios to configure engines and which is the default one.
Example: {'{'})'{'{'})'{'}'}) "capacities": [ {'{'})'{'{'})'{'}'}) "name": "16C", "cpu": "16" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "32C", "cpu": "32" {'{'})'{'}'}'{'}'} ], "defaultCapacity": "32C" {'{'})'{'}'}'{'}'}
* * *
[sizes](/reference/api/engine-management/engine-configuration-options#attributes-of-objects-in-the-sizes-array) Array of Objects
Information about the possible sizes to configure engines.
Example: [ {'{'})'{'{'})'{'}'}) "name": "2XSmall", "pods": 1, "memory": "64Gi", "cpuScaleFactor": 0.5 {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "XSmall","pods": 1, "memory": "128Gi", "cpuScaleFactor": 1.0 {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "Small", "pods": 2, "memory": "128Gi","cpuScaleFactor": 1.0 {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "Medium", "pods": 4, "memory": "128Gi", "cpuScaleFactor": 1.0 {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "Large", "pods": 8, "memory": "128Gi", "cpuScaleFactor": 1.0 {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "XLarge", "pods": 16, "memory": "128Gi", "cpuScaleFactor": 1.0 {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "2XLarge", "pods": 32, "memory": "128Gi", "cpuScaleFactor": 1.0 {'{'})'{'}'}'{'}'} ]
* * *
[resourceAllocationOffsets](/reference/api/engine-management/engine-configuration-options#attributes-of-the-resourceallocationoffsets-object) Object
Information about the possible pod resource allocation options to configure engines and which is the default one.
Example: {'{'})'{'{'})'{'}'}) "offsets": [ {'{'})'{'{'})'{'}'}) "name": "reserve-0-0", "cpu": "0", "memory": "0Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "reserve-2-4", "cpu": "2", "memory": "4Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "reserve-2-8", "cpu": "2", "memory": "8Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "reserve-2-16", "cpu": "2", "memory": "16Gi", "action": "Reserve" {'{'})'{'}'}'{'}'} ], "defaultOffset": "reserve-2-8" {'{'})'{'}'}'{'}'}
* * *
[storage](/reference/api/engine-management/engine-configuration-options#attributes-of-the-storage-object) Object
Information all pod storage options.
Example: {'{'})'{'{'})'{'}'}) "spillStorageSizes": [ {'{'})'{'{'})'{'}'}) "name": "100GB", "storage": "100Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "250GB", "storage": "250Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "500GB", "storage": "500Gi" {'{'})'{'}'}'{'}'} ], "defaultSpillStorageSize": "100GB", "c3StorageSizes": [ {'{'})'{'{'})'{'}'}) "name": "100GB", "storage": "100Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "250GB", "storage": "250Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "500GB", "storage": "500Gi" {'{'})'{'}'}'{'}'} ], "defaultC3StorageSize": "100GB" {'{'})'{'}'}'{'}'}
* * *
[idleTimeouts](/reference/api/engine-management/engine-configuration-options#attributes-of-the-idletimeouts-object) Object
Information all idle timeout options, which is the default one, and the maximum duration.
Example: {'{'})'{'{'})'{'}'}) "durations": [ "PT2H", "PT1H30M", "PT1H", "PT30M", "PT15M", "PT10M", "PT5M" ], "defaultDuration": "PT2H", "maximumDuration": "PT12H" {'{'})'{'}'}'{'}'}
#### Attributes of the `targetCpuCapacities` Object[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-targetcpucapacities-object "Direct link to attributes-of-the-targetcpucapacities-object")
[capacities](/reference/api/engine-management/engine-configuration-options#attributes-of-objects-in-the-capacities-array) Array of Objects
The possible CPU capacities to configure engines.
Example: [ {'{'})'{'{'})'{'}'}) "name": "16C", "cpu": "16" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "32C", "cpu": "32" {'{'})'{'}'}'{'}'} ]
* * *
defaultCapacity String
If not defined for the engine, this the default capacity for it.
Example: 32C
#### Attributes of Objects in the `capacities` Array[​](/reference/api/engine-management/engine-configuration-options#attributes-of-objects-in-the-capacities-array "Direct link to attributes-of-objects-in-the-capacities-array")
name String
The name of the cpu capacity.
Example: 32C
* * *
cpu String
The unadjusted cpu allocated to each executor pod of each replica of an engine. Expressed as a Kubernetes Quantity.
Example: 32
#### Attributes of Objects in the `sizes` Array[​](/reference/api/engine-management/engine-configuration-options#attributes-of-objects-in-the-sizes-array "Direct link to attributes-of-objects-in-the-sizes-array")
name String
The name of the engine size, to be used as the key.
Example: 2XSmall
* * *
pods Integer
The number of executor pods created for each replica of an engine of this size.
Example: 8
* * *
memory String
The memory allocated to each executor pod of each replica of an engine of this size. Expressed as a Kubernetes Quantity.
Example: 64Gi
* * *
cpuScaleFactor Float
The scaling applied to the chosen TargetCpuCapacity for this engine size. Used to declare sizes that have smaller CPU allocations than those provided by Kubernetes nodes. The value must be between 0.0 and 1.0. Defaults to 1.0.
Example: 1.0
#### Attributes of the `resourceAllocationOffsets` Object[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-resourceallocationoffsets-object "Direct link to attributes-of-the-resourceallocationoffsets-object")
[offsets](/reference/api/engine-management/engine-configuration-options#attributes-of-the-objects-in-the-offsets-array) Array of Objects
The possible resource allocation offset options to configure engines.
Example: {'{'})'{'{'})'{'}'}) "name": "reserve-0-0", "cpu": "0", "memory": "0Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "reserve-2-4", "cpu": "2", "memory": "4Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "reserve-2-8", "cpu": "2", "memory": "8Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "reserve-2-16", "cpu": "2", "memory": "16Gi", "action": "Reserve" {'{'})'{'}'}'{'}'}
* * *
defaultOffset String
The default offset used for engines where a specific value is not specified.
Example: reserve-2-8
#### Attributes of the Objects in the `offsets` Array[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-objects-in-the-offsets-array "Direct link to attributes-of-the-objects-in-the-offsets-array")
name String
The name of the resource allocation offset, to be used as key.
Example: reserve-2-8
* * *
cpu String
The CPU adjustment to be made to each executor pod of each replica of an engine with this capacity.  
Expressed as a Kubernetes Quantity.
Example: 0
* * *
memory String
The memory adjustment to be made to each executor pod of each replica of an engine with this capacity. Expressed as a Kubernetes Quantity.
Example: 8Gi
* * *
action String
The offset type, where 'Reserve' subtracts the offset and 'OverCommit' adds it to the pod allocations.
Example: Reserve
#### Attributes of the `storage` Object[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-storage-object "Direct link to attributes-of-the-storage-object")
[spillStorageSizes](/reference/api/engine-management/engine-configuration-options#attributes-of-the-objects-in-the-spillstoragesizes-array) Array of Objects
The set of all spill storage size options.
Example: [ {'{'})'{'{'})'{'}'}) "name": "100GB", "storage": "100Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "250GB", "storage": "250Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "500GB", "storage": "500Gi" {'{'})'{'}'}'{'}'} ]
* * *
defaultSpillStorageSize String
The default spill storage size to used for engines where a specific value is not specified.
Example: 100GB
* * *
[c3StorageSizes](/reference/api/engine-management/engine-configuration-options#attributes-of-the-objects-in-the-c3storagesizes-array) Array of Objects
The set of all C3 storage size options.
Example: [ {'{'})'{'{'})'{'}'}) "name": "100GB", "storage": "100Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "250GB", "storage": "250Gi" {'{'})'{'}'}'{'}'}, {'{'})'{'{'})'{'}'}) "name": "500GB", "storage": "500Gi" {'{'})'{'}'}'{'}'} ]
* * *
defaultC3StorageSize String
The default C3 storage size to used for engines where a specific value is not specified.
Example: 100GB
#### Attributes of the Objects in the `spillStorageSizes` Array[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-objects-in-the-spillstoragesizes-array "Direct link to attributes-of-the-objects-in-the-spillstoragesizes-array")
name String
The name of the storage size, to be used as the key.
Example: 100GB
* * *
storage String
The storage allocated to each executor pod of each replica of an engine.  
Expressed as a Kubernetes Quantity.
Example: 128Gi
#### Attributes of the Objects in the `c3StorageSizes` Array[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-objects-in-the-c3storagesizes-array "Direct link to attributes-of-the-objects-in-the-c3storagesizes-array")
name String
The name of the storage size, to be used as the key.
Example: 100GB
* * *
storage String
The storage allocated to each executor pod of each replica of an engine.  
Expressed as a Kubernetes Quantity.
Example: 128Gi
#### Attributes of the `idleTimeouts` Object[​](/reference/api/engine-management/engine-configuration-options#attributes-of-the-idletimeouts-object "Direct link to attributes-of-the-idletimeouts-object")
durations Array of String
The set of all idle timeout options.
Example: [ "PT2H", "PT1H30M", "PT1H", "PT30M", "PT15M", "PT10M", "PT5M" ]
* * *
defaultDuration String
The default idle timeout to used for engines where a specific value is not specified.
Example: PT1H
* * *
maximumDuration String
The maximum idle timeout that can be specified by the user.
Example: PT12H
## Retrieve the Configuration Options[​](/reference/api/engine-management/engine-configuration-options#retrieve-the-configuration-options "Direct link to Retrieve the Configuration Options")
Retrieve all engine configuration options.
Method and URL

```
GET /api/v3/engines/configuration/options  

```

### Example[​](/reference/api/engine-management/engine-configuration-options#example "Direct link to Example")
Request

```
curl -X POST 'https://{hostname}/api/v3/engines/configuration/options' \  
--header 'Authorization: Bearer <PersonalAccessToken>  

```

Response

```
{  
  "targetCpuCapacities": {  
    "capacities": [  
      {  
        "name": "16C",  
        "cpu": "16"  
      },  
      {  
        "name": "32C",  
        "cpu": "32"  
      }  
    ],  
    "defaultCapacity": "32C"  
  },  
  "sizes": [  
    {  
      "name": "2XSmall",  
      "pods": 1,  
      "memory": "64Gi",  
      "cpuScaleFactor": 0.5  
    },  
    {  
      "name": "XSmall",  
      "pods": 1,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "Small",  
      "pods": 2,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "Medium",  
      "pods": 4,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "Large",  
      "pods": 8,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "XLarge",  
      "pods": 16,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    },  
    {  
      "name": "2XLarge",  
      "pods": 32,  
      "memory": "128Gi",  
      "cpuScaleFactor": 1.0  
    }  
  ],  
  "resourceAllocationOffsets": {  
    "offsets": [  
      {  
        "name": "reserve-0-0",  
        "cpu": "0",  
        "memory": "0Gi",  
        "action": "Reserve"  
      },  
      {  
        "name": "reserve-2-4",  
        "cpu": "2",  
        "memory": "4Gi",  
        "action": "Reserve"  
      },  
      {  
        "name": "reserve-2-8",  
        "cpu": "2",  
        "memory": "8Gi",  
        "action": "Reserve"  
      },  
      {  
        "name": "reserve-2-16",  
        "cpu": "2",  
        "memory": "16Gi",  
        "action": "Reserve"  
      }  
    ],  
    "defaultOffset": "reserve-2-8"  
  },  
  "storage": {  
    "spillStorageSizes": [  
      {  
        "name": "100GB",  
        "storage": "100Gi"  
      },  
      {  
        "name": "250GB",  
        "storage": "250Gi"  
      },  
      {  
        "name": "500GB",  
        "storage": "500Gi"  
      }  
    ],  
    "defaultSpillStorageSize": "100GB",  
    "c3StorageSizes": [  
      {  
        "name": "100GB",  
        "storage": "100Gi"  
      },  
      {  
        "name": "250GB",  
        "storage": "250Gi"  
      },  
      {  
        "name": "500GB",  
        "storage": "500Gi"  
      }  
    ],  
    "defaultC3StorageSize": "100GB"  
  },  
  "idleTimeouts": {  
    "durations": [  
      "PT2H",  
      "PT1H30M",  
      "PT1H",  
      "PT30M",  
      "PT15M",  
      "PT10M",  
      "PT5M"  
    ],  
    "defaultDuration": "PT2H",  
    "maximumDuration": "PT12H"  
  }  
}  

```

### Response Status Codes[​](/reference/api/engine-management/engine-configuration-options#response-status-codes "Direct link to Response Status Codes")
201 Default configuration  
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

## Retrieve the Deployment Type[​](/reference/api/engine-management/engine-configuration-options#retrieve-the-deployment-type "Direct link to Retrieve the Deployment Type")
Retrieve the deployment type.
Method and URL

```
GET /api/v3/engines/configuration/deployment-type  

```

### Example[​](/reference/api/engine-management/engine-configuration-options#example-1 "Direct link to Example")
Request

```
curl -X GET 'https://{hostname}/api/v3/engines/configuration/deployment-type' \  
--header 'Authorization: Bearer <PersonalAccessToken>'  

```

Response

```
{  
    "type": "KUBERNETES"  
}  

```

### Response Status Codes[​](/reference/api/engine-management/engine-configuration-options#response-status-codes-1 "Direct link to Response Status Codes")
200 Supported cluster type   
  
400 Bad Request   
  
401 Unauthorized   
  
403 Forbidden   
  
404 Not Found   
  

Was this page helpful?
[Previous Engine Management](/reference/api/engine-management)[Next External Token Providers](/reference/api/external-token-providers)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Engine Management](/reference/api/engine-management)[Next External Token Providers](/reference/api/external-token-providers)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fapi%2Fengine-management%2Fengine-configuration-options%2F&_biz_t=1777951109398&_biz_i=Engine%20Configuration%20Options%20%3CChip%3EEnterprise%3C%2FChip%3E%20%7C%20Dremio%20Documentation&_biz_n=1540&rnd=455434&cdn_o=a&_biz_z=1777951109398)
