---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config
slug: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config
title: "Configuring Metadata Storage | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64209.934010833
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * Dremio with Your Infrastructure
  * Cluster Configuration
  * Services
  * Metadata Storage

Version: current [26.x]
On this page
# Configuring Metadata Storage
## Prerequisites​
Disk size requirements for base and high availability configurations are on the System Requirements page.
## Default Location​
The default location for metadata storage is the `${DREMIO_HOME}/data` directory.
  * For an RPM installation, the default metadata storage location is create for you at `/var/lib/dremio`, however, you can change this location by setting up a custom location.
  * For a Tarball installation, manually create the directory and add the location to the `dremio.conf` file. It is recommended that you use the default: `/data/dremio`


## Configuration​
To customize metadata storage configuration, modify the `paths.local` property. To setup a custom metadata storage location:
  1. Create your custom directory if it doesn't exist, for example: /data/customDremio
Creating metadata store directory 

```
sudo mkdir /data/customDremio && sudo chown dremio:dremio /data/customDremio  

```

  2. Add the new location to the `dremio.conf` file in the `local` field under `paths`. This is done in the `dremio.conf` file on the coordinator nodes(s) only.
Metadata location

```
paths: {  
  local: "/data/customDremio"  
}  

```



Was this page helpful?
Previous ServicesNext Distributed Storage
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous ServicesNext Distributed Storage
!
