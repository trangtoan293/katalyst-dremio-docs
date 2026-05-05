---
url: /deploy-dremio/other-options/standalone/install/standalone-rpm
title: "RPM Install and Upgrade | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64216.160410375
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
  * RPM

Version: current [26.x]
On this page
# RPM Install and Upgrade
This topic describes how to install and upgrade Dremio using an RPM package.
## Prerequisites[​](/deploy-dremio/other-options/standalone/install/standalone-rpm#prerequisites "Direct link to Prerequisites")
Download and install the [required Java version](/deploy-dremio/other-options/standalone/system-requirements#java-development-kit).
## Installing Dremio[​](/deploy-dremio/other-options/standalone/install/standalone-rpm#installing-dremio "Direct link to Installing Dremio")
Perform these steps on each node of your Dremio cluster:
  1. Download and install Dremio via RPM.
Download and install Dremio

```
sudo yum install dremio-<VERSION>.rpm  

```

  2. (Optional) Enable `dremio` to start at boot.
Enable dremio start at boot (optional)

```
sudo chkconfig --level 3456 dremio on  

```



### Default Configuration[​](/deploy-dremio/other-options/standalone/install/standalone-rpm#default-configuration "Direct link to Default Configuration")
The following configurations are created by default when you install Dremio using the RPM package.  
| Software/File  | Location  |  
| --- | --- |  
| Software location  | `/opt/dremio`  |  
|  `dremio.conf` configuration file  | `/etc/dremio/dremio.conf`  |  
|  `dremio-env` environment configuration file  | `/etc/dremio/dremio-env`  |  
| Local path (for data location)  | `/var/lib/dremio`  |  
| Log directory  | `/var/log/dremio`  |  
| PID files directory  | `/var/run/dremio`  |  
### Changing the Dremio User and Group[​](/deploy-dremio/other-options/standalone/install/standalone-rpm#changing-the-dremio-user-and-group "Direct link to Changing the Dremio User and Group")
The generic installation steps assume a user called `dremio`.
To run the Dremio daemon service under a different username (for example, `testuser`), apply the following changes before configuring.
  1. Update the `DREMIO_USER` in the **/etc/sysconfig/dremio** file to `testuser`.
  2. Apply the following permissions:
Permissions to apply

```
sudo chown -R testuser:testuser /var/log/dremio  
sudo chown -R testuser:testuser /var/lib/dremio  
sudo chown -R testuser:testuser /var/run/dremio  

```



## Upgrading Dremio[​](/deploy-dremio/other-options/standalone/install/standalone-rpm#upgrading-dremio "Direct link to Upgrading Dremio")
This topic provides upgrade instructions for RPM-based installations. These instructions assume you are using the default RPM installation paths for configuration, data and logging.
Before you begin, while Dremio is still running, [create a backup](/reference/admin-cli/backup) of your Dremio cluster.
To upgrade your Dremio installation:
  1. Ensure that your existing Dremio cluster is backed up.
  2. Shut down all Dremio provisioned nodes. For example: `service dremio stop`
     * See the [Shutting Down with YARN Deployments](/help-support/advanced-topics/start-stop/#shutting-down-with-yarn-deployments) section.
     * See the [Shutting Down with non-YARN Deployments](/help-support/advanced-topics/start-stop/#shutting-down-with-non-yarn-deployments) section.
     * See the shutdown commands in the topic about [Start, Stop, and Status](/help-support/advanced-topics/start-stop).
  3. On each Dremio node in your cluster, copy your old Dremio installation to another location on the node. For example:
Copy and Move Old Dremio Installation

```
cp -rL /var/lib/dremio /var/lib/dremio_bak  
cp -rL /opt/dremio /opt/dremio_bak  

```

  4. Download and install the new Dremio version. For example:
Download and Install Dremio

```
sudo yum install dremio-<version>.rpm  

```

     * For YARN deployments, install on each _coordinator_ node in your Dremio cluster.
     * For non-YARN deployments, install on _all_ nodes in your Dremio cluster.
  5. Copy the `/conf` directory and associated configuration files from your backup-copy location (from Step# 3) to the new installation location. As a result, the default files from the fresh install are overwritten. For example:
Restore Configuration Directory 

```
cp /opt/dremio_bak/conf/* /opt/dremio/conf  

```

     * For YARN deployments, perform this step on each _coordinator_ node in your Dremio cluster.
     * For non-YARN deployments, perform this step on _all_ nodes in your Dremio cluster.
  6. On the coordinator node, copy the metastore files from your backup-copy location (from Step #3) to the new installation location. For example:
Restore Metastore Files 

```
cp -r /var/lib/dremio_bak/* /var/lib/dremio  

```

  7. On the coordinator node, execute the upgrade script as the user running the Dremio Daemon service. For example, as "dremio":
Execute Upgrade Script

```
dremio-<version>/bin/dremio-admin upgrade  

```

  8. Start up all Dremio provisioned nodes in the Dremio cluster. For example: `service dremio start`.
     * See the [Starting Up with YARN Deployments](/help-support/advanced-topics/start-stop/#starting-up-with-yarn-deployments) section.
     * See the [Starting Up with non-YARN Deployments](/help-support/advanced-topics/start-stop/#starting-up-with-non-yarn-deployments) section.
     * See the startup commands in the topic about [Start, Stop, and Status](/help-support/advanced-topics/start-stop) section.
  9. Backup your new Dremio cluster. See [Create a backup](/reference/admin-cli/backup) for more information.


Was this page helpful?
[Previous Installing and Upgrading](/deploy-dremio/other-options/standalone/install)[Next Tarball](/deploy-dremio/other-options/standalone/install/standalone-tarball)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Installing and Upgrading](/deploy-dremio/other-options/standalone/install)[Next Tarball](/deploy-dremio/other-options/standalone/install/standalone-tarball)
