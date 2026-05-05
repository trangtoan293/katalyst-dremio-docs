---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-env
slug: /deploy-dremio/other-options/standalone/dremio-config/dremio-env
title: "Dremio Environment Configuration | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64211.229314583
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * Dremio with Your Infrastructure
  * Cluster Configuration
  * Environment

Version: current [26.x]
On this page
# Dremio Environment Configuration
Dremio environment configuration is contained in the `dremio-env` file. This file uses HOCON syntax. Environment configuration includes memory, logs, and special character literals, as well as Java options. Dremio provides a template of `dremio-env` to assist in creating your configuration.
Template `dremio-env` configuration file

```
#  
# Copyright (C) 2017-2018 Dremio Corporation  
#  
# Licensed under the Apache License, Version 2.0 (the "License");  
# you may not use this file except in compliance with the License.  
# You may obtain a copy of the License at  
#  
#     http://www.apache.org/licenses/LICENSE-2.0  
#  
# Unless required by applicable law or agreed to in writing, software  
# distributed under the License is distributed on an "AS IS" BASIS,  
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
# See the License for the specific language governing permissions and  
# limitations under the License.  
#  
  
#  
# Dremio environment variables used by Dremio daemon  
#  
  
#  
# Directory where Dremio logs are written  
# Default to $DREMIO_HOME/log  
#  
#DREMIO_LOG_DIR=${DREMIO_HOME}/log  
  
#  
# Send logs to console and not to log files. The DREMIO_LOG_DIR is ignored if set.  
#  
#DREMIO_LOG_TO_CONSOLE=1  
  
#  
# Directory where Dremio pidfiles are written  
# Default to $DREMIO_HOME/run  
#  
#DREMIO_PID_DIR=${DREMIO_HOME}/run  
  
#  
# Max total memory size (in MB) for the Dremio process  
#  
# If not set, default to using max heap and max direct.  
#  
# If both max heap and max direct are set, this is not used  
# If one is set, the other is calculated as difference  
# of max memory and the one that is set.  
#  
#DREMIO_MAX_MEMORY_SIZE_MB=  
  
#  
# Max heap memory size (in MB) for the Dremio process  
#  
# Default to 4096 for server  
#  
#DREMIO_MAX_HEAP_MEMORY_SIZE_MB=4096  
  
#  
# Max direct memory size (in MB) for the Dremio process  
#  
# Default to 8192 for server  
#  
#DREMIO_MAX_DIRECT_MEMORY_SIZE_MB=8192  
  
#  
# Max permanent generation memory size (in MB) for the Dremio process  
# (Only used for Java 7)  
#  
# Default to 512 for server  
#  
#DREMIO_MAX_PERMGEN_MEMORY_SIZE_MB=512  
  
#  
# Garbage collection logging is enabled by default. Set the following  
# parameter to "no" to disable garbage collection logging.  
#  
#DREMIO_GC_LOGS_ENABLED="yes"  
  
#  
# Send GC logs to console and not to log files. The DREMIO_LOG_DIR is ignored if set.  
# Default is set to "no"  
#  
#DREMIO_GC_LOG_TO_CONSOLE="no"  
  
#  
# Specifies the Java garbage collector used by Dremio. By default,  
# Dremio uses G1 GC (-XX:+UseG1GC). Dremio also supports the  
# parallel garbage collector (-XX:+UseParallelGC).  
#  
#DREMIO_GC_OPTS="-XX:+UseG1GC"  
  
#  
# The scheduling priority for the server  
#  
# Default to 0  
#  
# DREMIO_NICENESS=0  
#  
  
#  
# Number of seconds after which the server is killed forcibly if it hasn't stopped  
#  
# Default to 120  
#  
#DREMIO_STOP_TIMEOUT=120  
  
# Extra Java options - shared between dremio and dremio-admin commands  
#  
#DREMIO_JAVA_EXTRA_OPTS=  
  
# Extra Java options - client only (dremio-admin command)  
#  
#DREMIO_JAVA_CLIENT_EXTRA_OPTS=  
  
# Extra Java options - server only (dremio command)  
#  
#DREMIO_JAVA_SERVER_EXTRA_OPTS=  

```

## Memory​
The `dremio-env` file is the configuration file for specifying memory, Java options, and log directories. When this configuration file is customized, it must be updated on all cluster nodes.
### Overall System Memory​
During installation, Dremio Enterprise automatically determines the amount of system memory available and allocates it between heap and direct memory, depending on the Dremio node type.
### Maximum Memory​
As you monitor the performance of your query workloads, you might want to adjust the amount of memory allocated on your nodes. If you see queries failing on an instance that's running out of memory, increasing the amount of memory that Dremio is able to consume may solve your problem.
Consult with Dremio Support before making adjustments. Dremio recommends configuring the maximum memory size, which allows Dremio to automatically determine the best allocation between HEAP and DIRECT memory depending on the node type. Based on your workloads, Dremio Support might advise you to adjust the maximum memory available using the `DREMIO_MAX_MEMORY_SIZE_MB` parameter, or to configure heap and direct memory directly instead of maximum memory.
To modify the default maximum memory, change the following property:
Maximum memory configuration 

```
DREMIO_MAX_MEMORY_SIZE_MB=16384  

```

### Heap and Direct Memory​
By default, `DREMIO_MAX_HEAP_MEMORY_SIZE_MB` and `DREMIO_MAX_DIRECT_MEMORY_SIZE_MB` are set as follows.
On coordinator nodes:
  * If `DREMIO_MAX_MEMORY_SIZE_MB` is ≥18 GB, Heap is 16 GB and Direct uses the remaining.
  * If `DREMIO_MAX_MEMORY_SIZE_MB` is &lt;18 GB, Direct is 2 GB and Heap uses the remaining.


On executor nodes:
  * If `DREMIO_MAX_MEMORY_SIZE_MB` is ≥32 GB, Heap is 8 GB and Direct uses the remaining.
  * If `DREMIO_MAX_MEMORY_SIZE_MB` is ≥6 GB, Heap is 4 GB and Direct uses the remaining.
  * Otherwise, Heap is 2 GB and Direct uses the remaining.


During a consultation, Dremio Support may advise you to adjust the maximum allowed size of the heap memory, the maximum allowed size of the direct memory, or both.
  * If you configure both heap and direct memory, then the `DREMIO_MAX_MEMORY_SIZE_MB` parameter is ignored.
  * If you configure only heap memory or direct memory, Dremio Enterprise automatically configures the other, according to the amount of leftover memory.


To change the maximum size of the heap or direct memory:
Maximum heap memory configuration 

```
DREMIO_MAX_HEAP_MEMORY_SIZE_MB=8192  

```

Maximum direct memory configuration 

```
DREMIO_MAX_DIRECT_MEMORY_SIZE_MB=16384  

```

For the `DREMIO_MAX_DIRECT_MEMORY_SIZE_MB` allocation, be sure to leave at least 1-2 GB of memory for the OS.
### Heap Monitor​
To prevent JVM failures due to a lack of heap memory, Dremio's heap monitor kills queries if the JVM's heap utilisation stays above the threshold of 85%, even after a full garbage collection. On an executor node, the heap monitor evaluates currently running queries and kills as many needed to release approximately 25% of the memory heap. If necessary, the heap monitor runs again to kill more queries. On a coordinator node, the heap monitor cancels all queries in the planning phase. The feature is enabled by default.
The [query profile](/admin/monitoring/jobs/viewing-query-profiles) for a query killed by a heap monitor on an executor node contains the following error:
Example Memory Limits Exceeded Message 

```
Query was cancelled because it exceeded the memory limits set by the administrator.  

```

The query profile for a query killed on a coordinator node contains the following error:
Example Out Of Memory Message

```
Query canceled - out of memory, check the query profile for details  

```

Dremio recommends trying the following suggestions, in order, if the heap monitor kills a query:
  1. Retry the query. If there are fewer queries in parallel during the second attempt, the query should succeed.
  2. Reduce query parallelism.
  3. Increase the heap memory.
  4. Increase the number of executor nodes.


## Logs and PID​
To customize where the Dremio logs and PID information are written:
  1. Create new Log and PID directories. For example: `/var/log/dremio` and `/var/run/dremio`.
  2. Uncomment the Log and PID variables in the template file and provide the new location. For example:
Log and PID Configuration

```
DREMIO_LOG_DIR=/var/log/dremio  
DREMIO_PID_DIR=/var/run/dremio  

```



## Non-ISO-8859-1 Literals​
Queries that contain non-ISO-8859-1 literals, such as the euro sign, '€', are supported. To configure Dremio to support UTF-8 or UTF-16 literals:
  1. Stop Dremio.
  2. Set the DREMIO_JAVA_SERVER_EXTRA_OPTS property
UTF-8 literals Configuration

```
DREMIO_JAVA_SERVER_EXTRA_OPTS='-Dsaffron.default.charset=UTF-8 -Dsaffron.default.nationalcharset=UTF-8 -Dsaffron.default.collation.name=UTF-8$en_US'  

```

UTF-16 literal Configuration

```
DREMIO_JAVA_SERVER_EXTRA_OPTS='-Dsaffron.default.charset=UTF-16 -Dsaffron.default.nationalcharset=UTF-16 -Dsaffron.default.collation.name=UTF-16$en_US'  

```

  3. Restart Dremio.


Was this page helpful?
Previous High AvailabilityNext System Requirements
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous High AvailabilityNext System Requirements
!
