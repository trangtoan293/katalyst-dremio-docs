---
url: /help-support/knowledge-base/g1-garbage-collection
title: "Implementing Garbage-First (G1) Garbage Collection | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64223.044681125
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Knowledge Base](/help-support/knowledge-base)
  * Implementing Garbage-First (G1) Garbage Collection

Version: current [26.x]
On this page
# Implementing Garbage-First (G1) Garbage Collection
This topic describes how to implement Garbage-First (G1) garbage collection. G1 is a server-style garbage collector for multi-processor machines with large memories.
## Scenario: Dremio executors are _not_ deployed on Yarn[​](/help-support/knowledge-base/g1-garbage-collection/#scenario-dremio-executors-are-not-deployed-on-yarn "Direct link to scenario-dremio-executors-are-not-deployed-on-yarn")
To implement G1 garbage collection and heap dump flags when Dremio executors are _not_ on Yarn,  
add the following property to the `dremio-env` file on all Dremio coordinator and executor nodes.
Property to add to the `dremio-env` file

```
DREMIO_JAVA_SERVER_EXTRA_OPTS="-XX:+UseG1GC -XX:G1HeapRegionSize=32M -XX:MaxGCPauseMillis=500 -XX:InitiatingHeapOccupancyPercent=25"  

```

By default, the GC logs and heap dumps are stored under the Dremio log folder. The following is an example:

```
501  3479     1   0 Mon01PM ttys001   36:38.94 /usr/bin/java   
-Djava.util.logging.config.class=org.slf4j.bridge.SLF4JBridgeHandler   
-Djava.library.path=/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/lib   
-XX:+PrintGCDetails   
-XX:+PrintGCDateStamps -Xloggc:/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/log/server.gc   
-Ddremio.log.path=/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/log   
-Xmx4096m   
-XX:MaxDirectMemorySize=8192m   
-XX:+HeapDumpOnOutOfMemoryError   
-XX:HeapDumpPath=/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/log   
-Dio.netty.maxDirectMemory=0   
-DMAPR_IMPALA_RA_THROTTLE   
-DMAPR_MAX_RA_STREAMS=400   
-XX:+UseG1GC   
-XX:G1HeapRegionSize=32M   
-XX:MaxGCPauseMillis=500   
-XX:InitiatingHeapOccupancyPercent=25   
-cp /Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/conf:/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/jars/*:/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/jars/ext/*:/Users/dremio/Downloads/dremio-enterprise-3.2.0-201905102005330382-0598733/jars/3rdparty/* com.dremio.dac.daemon.DremioDaemon  

```

## Scenario: Dremio executors _are_ deployed on Yarn[​](/help-support/knowledge-base/g1-garbage-collection/#scenario-dremio-executors-are-deployed-on-yarn "Direct link to scenario-dremio-executors-are-deployed-on-yarn")
To implement G1 garbage collection and heap dump flags when Dremio executors _are_ deployed on Yarn,  
add the following properties to the data source via the **Dremio UI &gt; Advanced Options &gt; Connection Properties**.  
| Property Type  | Name  | Value  |  
| --- | --- | --- |  
| JAVA  | provisioning.yarn.heapsize  | 8192  |  
| SYSTEM  | -Xloggc:/&lt;path-to-gc-logs&gt;/gc.log-`date +'%Y%m%d%H%M'`  |   |  
| SYSTEM  | -XX:+UseG1GC  |   |  
| SYSTEM  | -XX:+HeapDumpOnOutOfMemoryError  |   |  
| SYSTEM  | -XX:HeapDumpPath  | `path`  |  
| SYSTEM  | -XX:+PrintGCDetails  |   |  
| SYSTEM  | -XX:+PrintGCTimeStamps  |   |  
| SYSTEM  | -XX:+PrintGCDateStamps  |   |  
| SYSTEM  | -XX:ErrorFile  | `path`/hs_err_pid%p.log  |  
| SYSTEM  | -XX:G1HeapRegionSize  | 32M  |  
| SYSTEM  | -XX:MaxGCPauseMillis  | 500  |  
| SYSTEM  | -XX:InitiatingHeapOccupancyPercent  | 25  |  
&gt;   
&gt;  For Kubernetes-based deployments, garbage collection is done via the Helm charts.
Was this page helpful?
[Previous Apache Log4j Vulnerability: Dremio Is Not Affected](/help-support/knowledge-base/apache-log4j-vulnerability)[Next Kubernetes Troubleshooting](/help-support/knowledge-base/k8s-trouble)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Apache Log4j Vulnerability: Dremio Is Not Affected](/help-support/knowledge-base/apache-log4j-vulnerability)[Next Kubernetes Troubleshooting](/help-support/knowledge-base/k8s-trouble)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fkeyboard-shortcuts%2F&_biz_t=1777950544504&_biz_i=Keyboard%20Shortcuts%20%7C%20Dremio%20Documentation&_biz_n=437&rnd=893002&cdn_o=a&_biz_z=1777950544513)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fknowledge-base%2Fg1-garbage-collection%2F&_biz_t=1777950544513&_biz_i=Implementing%20Garbage-First%20\(G1\)%20Garbage%20Collection%20%7C%20Dremio%20Documentation&_biz_n=438&rnd=651035&cdn_o=a&_biz_z=1777950544513)
