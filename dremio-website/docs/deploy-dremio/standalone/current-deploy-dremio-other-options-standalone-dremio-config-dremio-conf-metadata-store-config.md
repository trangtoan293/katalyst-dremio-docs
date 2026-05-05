---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config
title: "Configuring Metadata Storage | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64209.934010833
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * [Services](/deploy-dremio/other-options/standalone/dremio-config)
  * Metadata Storage

Version: current [26.x]
On this page
# Configuring Metadata Storage
## Prerequisites[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config#prerequisites "Direct link to Prerequisites")
[Disk size requirements](/deploy-dremio/other-options/standalone/system-requirements#storage) for base and high availability configurations are on the System Requirements page.
## Default Location[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config#default-location "Direct link to Default Location")
The default location for metadata storage is the `${DREMIO_HOME}/data` directory.
  * For an RPM installation, the default metadata storage location is create for you at `/var/lib/dremio`, however, you can change this location by setting up a custom location.
  * For a Tarball installation, manually create the directory and add the location to the `dremio.conf` file. It is recommended that you use the default: `/data/dremio`


## Configuration[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config#configuration "Direct link to Configuration")
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
[Previous Services](/deploy-dremio/other-options/standalone/dremio-config)[Next Distributed Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Services](/deploy-dremio/other-options/standalone/dremio-config)[Next Distributed Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fother-options%2Fstandalone%2Fdremio-config%2Fdremio-conf%2Fmetadata-store-config%2F&_biz_t=1777950530336&_biz_i=Configuring%20Metadata%20Storage%20%7C%20Dremio%20Documentation&_biz_n=406&rnd=439071&cdn_o=a&_biz_z=1777950530337)
