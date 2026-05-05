---
url: /deploy-dremio/other-options/standalone/install/standalone-tarball
title: "Tarball Install and Upgrade | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64215.918775083
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
  * Tarball

Version: current [26.x]
On this page
# Tarball Install and Upgrade
This topic describes how to install and upgrade Dremio using a Tarball package.
## Installing Dremio[​](/deploy-dremio/other-options/standalone/install/standalone-tarball#installing-dremio "Direct link to Installing Dremio")
Perform these steps on each node of your Dremio cluster:
  1. Create a `dremio` group.
Create dremio group

```
sudo groupadd -r dremio  

```

  2. Create a `dremio` user.
Create dremio user

```
sudo useradd -r -g dremio -d /var/lib/dremio -s /sbin/nologin dremio  

```

  3. Create Dremio directories.
Create dremio directories

```
sudo mkdir /opt/dremio  
sudo mkdir /var/run/dremio && sudo chown dremio:dremio /var/run/dremio  
sudo mkdir /var/log/dremio && sudo chown dremio:dremio /var/log/dremio  
sudo mkdir /var/lib/dremio && sudo chown dremio:dremio /var/lib/dremio  

```

  4. Unpack Dremio into the `/opt/dremio` directory.
Unpack dremio 

```
sudo tar xvf dremio-enterprise-<VERSION>.tar.gz -C /opt/dremio --strip-components=1  

```

For Community Edition, the Tarball package file name is `dremio-community-`VERSION`.tar.gz`.
  5. Create a symbolic link for the configuration folder.
Create symbolic link for configuration folder

```
sudo ln -s /opt/dremio/conf /etc/dremio  

```

  6. (Optional) Set up your service configuration (SystemD setup).
    1. Copy the unit file for the `dremio` daemon from ``DREMIO_HOME`/share/dremio.service` to `/etc/systemd/system/dremio.service`.
Copy and move unit file for dremio daemon

```
sudo cp <DREMIO_HOME>/share/dremio.service /etc/systemd/system/dremio.service  

```

    2. Restart `systemd`.
Restart system daemon

```
sudo systemctl daemon-reload  

```

    3. (Optional) Enable `dremio` to start at boot.
Enable dremio to start at boot (optional)

```
sudo systemctl enable dremio  

```

  7. Configure Dremio. See [Dremio Configuration](/deploy-dremio/other-options/standalone/dremio-config) for more information.


### Sample Service Configuration[​](/deploy-dremio/other-options/standalone/install/standalone-tarball#sample-service-configuration "Direct link to Sample Service Configuration")
The following snippet shows the configuration in the ``DREMIO_HOME`/share/dremio.service` file:
Sample service configuration

```
#  
# Installation is assumed to be under /opt/dremio  
#  
[Unit]  
Description=Dremio Daemon Server  
Documentation=https://docs.dremio.com  
Wants=network-online.target  
After=network-online.target  
[Service]  
User=dremio  
Group=dremio  
RuntimeDirectory=dremio  
ExecStart=/opt/dremio/bin/dremio start-fg  
Restart=on-failure  
# Set maximum number of file descriptors Dremio can open.  
# Dremio requires a large number to work correctly.  
LimitNOFILE=65536  
[Install]  
WantedBy=multi-user.target  

```

## Upgrading Dremio[​](/deploy-dremio/other-options/standalone/install/standalone-tarball#upgrading-dremio "Direct link to Upgrading Dremio")
This topic provides upgrade instructions for Tarball-based installations.
Before you begin, do the following:
  * While Dremio is still running, [create a backup](/reference/admin-cli/backup) of your Dremio cluster.


To upgrade your Dremio installation:
  1. Ensure that your existing Dremio cluster is backed up. See the [Create a backup](/reference/admin-cli/backup) section.
  2. Shut down all Dremio provisioned nodes. For example:
Shutting down Dremio

```
<DREMIO-HOME>/bin/dremio stop  

```

     * See the [Shutting Down with YARN Deployments](/help-support/advanced-topics/start-stop/#shutting-down-with-yarn-deployments) section.
     * See the [Shutting Down with non-YARN Deployments](/help-support/advanced-topics/start-stop/#shutting-down-with-non-yarn-deployments) section.
     * See the shutdown commands in the topic about [Start, Stop, and Status](/help-support/advanced-topics/start-stop).
  3. On each Dremio node in your cluster, move your old Dremio installation to another location. For example:
Move Dremio installation

```
mv /opt/dremio /opt/dremio_bak  

```

  4. Download and install the new Dremio version.
     * For YARN deployments, install on each _coordinator_ node in your Dremio cluster.
     * For non-YARN deployments, install on all nodes in your Dremio cluster.
Perform the following steps on each Dremio node depending on your deployment (YARN vs non-YARN):
Be sure the create the new directories with the same path as the original installation. In particular, the `data` directory and associated data files must be in the same path as the original installation.
    1. Create a new Dremio directory. For example:
Create new **dremio** directory

```
sudo mkdir /opt/dremio  

```

    2. Unpack Dremio into the `/opt/dremio` directory. For example:
Unpack dremio into /opt/dremio

```
sudo tar xvf dremio-enterprise-<version>.tar.gz -C /opt/dremio --strip-components=1  

```

For Community Edition, the Tarball package file name is `dremio-community-`VERSION`.tar.gz`.
    3. Create a symbolic link for the configuration folder. For example:
Create symbolic link for configuration folder

```
sudo ln -s /opt/dremio/conf /etc/dremio  

```

  5. Copy the `/conf` directory and associated configuration files from your backup-copy location (from Step 3) to the new installation location. As a result, the default files from the fresh installation are overwritten. For example:
Copy and move /conf directory and files

```
cp /opt/dremio_bak/conf/* /opt/dremio/conf  

```

     * For YARN deployments, perform this step on each _coordinator_ node in your Dremio cluster.
     * For non-YARN deployments, perform this step on _all_ nodes in your Dremio cluster.
  6. On the _coordinator_ node, copy the `/data` directory and associated data files from your backup-copy location (from Step 3) to the new installation location. For example:
Copy and move /data directory and files on coordinator node

```
cp -r /opt/dremio_bak/data /opt/dremio/data  

```

The new `/data` directory and files must be in the same directory path as the original installation. A different directory path results in the loss of all Reflections because they are accessed by their full path. If your original data directory is in a location different from `/opt/dremio/data`, then this step can be skipped.
  7. On the _coordinator_ node, execute the upgrade script as the user running the Dremio Daemon service. For example, as "dremio":
Execute upgrade script on coordinator node

```
<DREMIO-HOME>/bin/dremio-admin upgrade  

```

  8. Start up all Dremio provisioned nodes in the Dremio cluster. For example:
Start Dremio provisioned nodes

```
<DREMIO-HOME>/bin/dremio start  

```

     * See the [Starting Up with YARN Deployments](/help-support/advanced-topics/start-stop/#starting-up-with-yarn-deployments) section.
     * See the [Starting Up with non-YARN Deployments](/help-support/advanced-topics/start-stop/#starting-up-with-non-yarn-deployments) section.
     * See the startup commands in the topic about [Start, Stop, and Status](/help-support/advanced-topics/start-stop).
  9. Backup your new Dremio cluster. See [Create a backup](/reference/admin-cli/backup) for more information.


Was this page helpful?
[Previous RPM](/deploy-dremio/other-options/standalone/install/standalone-rpm)[Next Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous RPM](/deploy-dremio/other-options/standalone/install/standalone-rpm)[Next Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
