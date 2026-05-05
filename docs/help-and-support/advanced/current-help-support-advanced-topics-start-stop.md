---
url: /help-support/advanced-topics/start-stop
slug: /help-support/advanced-topics/start-stop
title: "Start, Stop, and Status | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64223.084183583
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Start, Stop, and Status

Version: current [26.x]
On this page
# Start, Stop, and Status
This section describes how to startup and shutdown Dremio on YARN and non-YARN deployments for RPM and Tarball installations.
## Commands for all Deployments[​](/help-support/advanced-topics/start-stop/)
The following commands are used to start up, shut down, and view the status of the `dremio` service on the nodes in your Dremio cluster.
dremio service command usage

```
dremio [--config <conf-dir>] (start|start-fg||stop|status|restart|autorestart)  

```
  
| Command Type  | Tarball Command  | RPM Command  |  
| --- | --- | --- |  
| Help  | `<DREMIO-HOME>/bin/dremio`  | `service dremio`  |  
| Start  | `<DREMIO-HOME>/bin/dremio start`  | `service dremio start`  |  
| Stop  | `<DREMIO-HOME>/bin/dremio stop`  | `service dremio stop`  |  
| Status  | `<DREMIO-HOME>/bin/dremio status`  | `service dremio status`  |  
| Restart  | `<DREMIO-HOME>/bin/dremio restart`  | `service dremio restart`  |  
| Autorestart  | `<DREMIO-HOME>/bin/dremio autorestart`  | `service dremio autorestart`  |  
## YARN Deployments[​](/help-support/advanced-topics/start-stop/)
Use the following instructions to properly shut down or start up a Dremio cluster with a YARN deployment, The commands used for node startup, shutdown, and status is different depending on whether your installation used an RPM or Tarball package.
### Starting up with YARN Deployments[​](/help-support/advanced-topics/start-stop/)
To start up a Dremio cluster:
  1. Manually startup the coordinator node first. Use the appropriate startup command (startup command list below) as per your deployment.
  2. Manually startup the remaining coordinators one-at-a-time waiting for each one to successfully complete before moving on to the next one.
  3. Navigate to the **Admin - &gt; Provisioning** screen in the Dremio UI and click the **Start Cluster** button. This brings up all Dremio executors (running as Yarn containers) in the Hadoop cluster.


### Shutting down with YARN Deployments[​](/help-support/advanced-topics/start-stop/)
To shut down a Dremio cluster:
  1. Navigate to the **Admin - &gt; Provisioning** screen in the Dremio UI and click the **Stop Cluster** button. This brings down all Dremio executors (running as Yarn containers) in the Hadoop cluster.
  2. Manually shutdown all the coordinators (EXCEPT for the main coordinator, if it is a separate node) one-at-a-time waiting for each one to successfully complete before moving on to the next one.
  3. Manually shutdown the coordinator node last.


### Viewing Cluster Status with YARN Deployments[​](/help-support/advanced-topics/start-stop/)
To view the status of your Dremio cluster in the Dremio UI, navigate to the **Admin - &gt; Node Activity** screen.
## Non-YARN Deployments[​](/help-support/advanced-topics/start-stop/)
Use the following instructions to properly shut down or start up a Dremio cluster on non-YARN deployments, The commands used for node startup, shutdown, and status is different depending on whether your installation used an RPM or Tarball package.
### Starting up with non-YARN Deployments[​](/help-support/advanced-topics/start-stop/)
To start up a Dremio cluster:
  1. Manually startup the coordinator node first. Use the appropriate startup command as per your deployment.
  2. Manually startup the remaining coordinators one-at-a-time waiting for each one to successfully complete before moving on to the next one.
  3. Manually startup all the executors one-at-a-time waiting for each one to successfully complete before moving on to the next one.


### Shutting down with non-YARN Deployments[​](/help-support/advanced-topics/start-stop/)
To shut down a Dremio cluster:
  1. Manually shutdown all the executors one-at-a-time waiting for each one to successfully complete before moving on to the next one.  
Use the appropriate shutdown command as per your deployment.
  2. Manually shutdown all the coordinators (EXCEPT for the main coordinator, if it is a separate node) one-at-a-time waiting for each one to successfully complete before moving on to the next one.
  3. Manually shutdown the coordinator node last.


Was this page helpful?
[Previous S3 on Amazon EMR Configuration](/help-support/advanced-topics/hive-s3)[Next Upgrading with Custom Sources](/help-support/advanced-topics/custom-arp)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous S3 on Amazon EMR Configuration](/help-support/advanced-topics/hive-s3)[Next Upgrading with Custom Sources](/help-support/advanced-topics/custom-arp)
!
