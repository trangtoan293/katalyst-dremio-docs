---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config
title: "High Availability | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64209.774968458
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * [Services](/deploy-dremio/other-options/standalone/dremio-config)
  * High Availability

Version: current [26.x]
On this page
# High Availability
This topic describes how high availability (HA) works in Dremio standalone clusters.
Dremio clusters can be made highly available by configuring one active and multiple backup coordinator nodes (configured with the main coordinator role) as standbys.
  * The HA implementation supports automatic recovery. There's no guarantee of no visible user interruption or query failure.
  * The HA model is a hot/cold model, that is, one node acts as main and a secondary node is on standby until the current main disappears.
  * Coordination and election are done through ZooKeeper. When a main fails, its entry disappears from ZooKeeper when a session is closed or fails. At that point, one of the standby nodes is elected and becomes the new master.
  * The metadata store (KV store) is not distributed. It must be located on a shared volume visible to all main candidates.
  * A shared network drive is used to ensure that all nodes can access system metadata. The locking support on the network drive as well as on Dremio's metadata store ensures there is only one active Dremio coordinator process.


## How HA Failover Works[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#how-ha-failover-works "Direct link to How HA Failover Works")
When the active coordinator node fails:
  1. Dremio processes detect the failure, based on a set ZooKeeper timeout, and elect a new Dremio coordinator node. In the case of a failure, Dremio processes terminate themselves automatically.
  2. The new coordinator node, already on standby, completes the startup using the metadata on the network drive.
  3. The other cluster nodes then re-connect to the new coordinator node.


After HA failover is complete:
  * You need to restart queries that were being processed at the time of the failure. This is because the Dremio cluster can't execute new queries until the other cluster nodes are re-connected to the new coordinator node.
  * You need to manually restart the failed coordinator nodes (after ensuring that it is usable). In this case, when the coordinator node is restarted, it is brought back as a standby.


To see if a coordinator node is active, ping the node.
### Example: HA Failover[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#example-ha-failover "Direct link to Example: HA Failover")
Two (2) coordinator nodes (NodeA and NodeB) are configured (with main coordinator roles) and started.
  * NodeA starts and NodeB remains waiting on standby until the current main disappears.
  * _NodeB is passive and not available until NodeA goes down._
  * When NodeA goes down, NodeB completes the startup process and the other cluster nodes switch their main coordinator node interaction from NodeA to NodeB.


## Web Application HA & Load Balancing[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#web-application-ha--load-balancing "Direct link to Web Application HA & Load Balancing")
Dremio's web application can be made highly available by leveraging more than one coordinator node and a reverse proxy/load balancer.
All web clients connect to a single endpoint rather than directly connecting to an individual coordinator node. These connections are then distributed across available coordinator nodes.
## ODBC/JDBC HA & Load Balancing[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#odbcjdbc-ha--load-balancing "Direct link to ODBC/JDBC HA & Load Balancing")
Dremio recommends that ODBC and JDBC drivers connect to a [ZooKeeper quorum](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config) rather than a specific node in your deployment. Dremio then plans queries and routes them to an available coordinator node.
To distribute query planning for ODBC and JDBC connections, configure [secondary coordinator nodes](/deploy-dremio/other-options/standalone/dremio-config#configuring-basic-services) for your deployment.
## Configuring High Availability[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#configuring-high-availability "Direct link to Configuring High Availability")
To configure Dremio for high availability, ensure the prerequisites are met and then perform the following:
  1. Configure Dremio including Dremio services, external metadata storage, and external zookeeper quorum.
  2. Start up the Dremio coordinator nodes.
  3. Start up the Dremio executor nodes.


### Prerequisites[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#prerequisites "Direct link to Prerequisites")
  * Network drive (NFS) with locking support for Dremio's metadata store.
    * Ensure that the store is high-speed, low latency (for spilling operations purposes).
    * Ensure that all Dremio coordinator nodes have read/write access to the shared network drive.
    * Ensure that the guidelines of the shared network drive are followed for consistent synchronous writes.
  * External Zookeeper
  * (Optional) 


### Step 1: Configure Dremio[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#step-1-configure-dremio "Direct link to Step 1: Configure Dremio")
To configure Dremio, modify the `dremio.conf` file on all the coordinator and executor nodes in the Dremio cluster. The following must be configured:
  * Two (2) or more coordinator nodes with the main coordinator role.
  * One (1) or more nodes with the executor role (preferably 3 or more).
  * `paths.local` - external metadata store hosted on a netork drive (NFS) with locking support. This property must be set on all Dremio coordinator nodes.
  * `zookeeper` - One or more external Zookeeper quorum. This property must be set on all Dremio nodes.

Example Coordinator configuration for high availability 

```
paths: {  
   local: "/data/<custom_location>"  
}  
services: {  
   coordinator.enabled: true,  
   coordinator.master.enabled: true,  
   coordinator.master.embedded-zookeeper.enabled: false,  
   executor.enabled: false  
}  
  
zookeeper: "<host1>:2181,<host2>:2181"  

```

Example Executor dremio.conf for high availability

```
services: {  
  coordinator.enabled: false,  
  coordinator.master.enabled: false,  
  coordinator.master.embedded-zookeeper.enabled: false,  
  executor.enabled: true  
}  
zookeeper: "<host1>:2181,<host2>:2181"  

```

### Step 2: Start the Coordinator Nodes[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#step-2-start-the-coordinator-nodes "Direct link to Step 2: Start the Coordinator Nodes")
Start the first coordinator node, then the second coordinator node, and so on. See [Start, Stop, and Status](/help-support/advanced-topics/start-stop) for more information.
For example, if two (2) coordinator nodes (NodeA and NodeB) are configured where NodeA is started first and NodeB is started second, then the following occurs:
  * NodeA starts and is the active node.
  * NodeB starts but remains waiting on standby until the active coordinator node disappears.
  * _NodeB is passive and not available until NodeA goes down._
  * When NodeA goes down, NodeB completes the startup process and the other cluster nodes switch their coordinator node interaction from NodeA to NodeB.


### Step 3: Start the Executor Nodes[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#step-3-start-the-executor-nodes "Direct link to Step 3: Start the Executor Nodes")
To start the executor nodes, start Dremio on each executor node in any order. See [Start, Stop, and Status](/help-support/advanced-topics/start-stop) for more information.
### Web Application HA & Load Balancing[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#web-application-ha--load-balancing-1 "Direct link to Web Application HA & Load Balancing")
Dremio's web application can be made highly available by leveraging more than one coordinator node and a reverse proxy/load balancer.
All web clients connect to a the load balancer rather than directly connecting to an individual coordinator node. The load balancer distributes these connections to the current active main node.
In the following sample `nginx.conf` configuration, all Dremio coordinator nodes are added as `upstream` servers and are proxied through the `nginx` server.
nginx does not support HTTP/2 PING frames, which Dremio uses to maintain gRPC connections active. As a result, connections may time out during long-running or background queries.
To prevent these timeouts, configure nginx to proxy raw TCP traffic instead of using it as an HTTP/2 gateway.
For more details, see 
Example nginx Configuration 

```
user nginx;  
worker_processes 1;  
  
error_log /var/log/nginx/error.log warn;  
pid /var/run/nginx.pid;  
  
events {  
   worker_connections 1024;  
}  
  
http {  
   include /etc/nginx/mime.types;  
   default_type application/octet-stream;  
   log_format main '$remote_addr - $remote_user [$time_local] "$request" '  
   '$status $body_bytes_sent "$http_referer" '  
   '"$http_user_agent" "$http_x_forwarded_for"';  
  
   access_log /var/log/nginx/access.log main;  
  
   sendfile on;  
   #tcp_nopush on;  
  
   keepalive_timeout 65;  
  
   #gzip on;  
  
   include /etc/nginx/conf.d/*.conf;  
  
   upstream myapp1 {  
      server dremio_coordinator_1:9047;  
      server dremio_coordinator_2:9047;  
      server dremio_coordinator_3:9047;  
   }  
  
   server {  
      listen 80;  
  
      location / {  
         proxy_pass http://myapp1;  
      }  
   }  
}  

```

See the 
### Troubleshooting[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config#troubleshooting "Direct link to Troubleshooting")
If HA fails when the network is brought down on the running main node, there may be an issue with the mount. For data consistency, your NFS should be mounted as a hard mount. For example:  
Example NFS mount
`mount -t nfs -o rw,hard,sync,nointr,vers=4,proto=tcp `server`:`share` <mount path>`
Was this page helpful?
[Previous ZooKeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config)[Next Environment](/deploy-dremio/other-options/standalone/dremio-config/dremio-env)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous ZooKeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config)[Next Environment](/deploy-dremio/other-options/standalone/dremio-config/dremio-env)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fother-options%2Fstandalone%2Fdremio-config%2Fdremio-conf%2Fhigh-availability-config%2F&_biz_t=1777950529745&_biz_i=High%20Availability%20%7C%20Dremio%20Documentation&_biz_n=400&rnd=704197&cdn_o=a&_biz_z=1777950529745)
