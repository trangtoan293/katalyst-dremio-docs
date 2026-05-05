---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config
title: "Configuring Cloud Cache | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64053.669227666
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * [Services](/deploy-dremio/other-options/standalone/dremio-config)
  * Cloud Cache

Version: current [26.x]
On this page
# Configuring Cloud Cache
Dremio Cloud Cache parameters are defined in `dremio.conf`.
## Supported Data Sources[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config#supported-data-sources "Direct link to Supported Data Sources")
Dremio supports cloud-caching for Parquet files on the following data sources:
  * Amazon S3
  * Azure Storage (ADLS Gen 2) - v2 only
  * Google Cloud Storage
  * HDFS
  * Hive on S3, Azure Storage, GCS, and HDFS


## Enable Caching[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config#enable-caching "Direct link to Enable Caching")
Enable cloud-caching for supported data sources either when adding a new data source to your deployment or later by editing the data source.
To enable cloud-caching:
  1. On the Datasets page, select a supported data source in the **Data Lakes** list.
  2. In the top-right corner of the page, click the gear icon.
  3. In the **Edit Source** dialog, follow these steps:
    1. Select **Advanced Options** , and then select **Enable local caching when possible**.
    2. (Optional) In the **Max percent of total available cache space to use when possible** field, specify the maximum percentage of cache space that can be used by a data source on any single executor node. The default is 100% of the total disk space available on the mount point provided for caching.
    3. Click **Save**.


## Configuring the Cache Path and Directory[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config#configuring-the-cache-path-and-directory "Direct link to Configuring the Cache Path and Directory")
The following can be specified:
  * `executor.cache.path.db` (optional) Database directory path - This is the path for the database directory to use for storing cached data. If you do not specify a database path, `paths.local` directory path is used.
  * `executor.cache.path.fs` (optional) File system path - This is the file system cache directory. If you do not specify a file system path, the `paths.local` path is used.


Cache is lost if the directory location is changed or the executor is restarted.
Dremio recommends a cloud cache directory size of at least 100 GB. See [Additition Storage](/deploy-dremio/other-options/standalone/system-requirements#additional-storage) for more information.
## Example[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config#example "Direct link to Example")
In the following `dremio.conf` example, a database path and four (4) file system paths are specified.
If these paths were not specified, the cache manager uses the local path `/mnt/resource/dremio/data`. Dremio uses 70 percent of the total available disk space for the specified database and file system mount paths.
Example Code Cache configuration 

```
paths: {  
    # the local path for dremio to store data.  
    local: "/mnt/resource/dremio/data"  
  
    # the distributed path Dremio data including job results, downloads, uploads, etc  
    #dist: "file://"${paths.local}"/pdfs"  
}  
  
services: {  
    coordinator.enabled: false,  
    coordinator.master.enabled: false,  
    executor.enabled: true,  
    executor.cache.path.db : "/mnt/cachemanagerdisk/db",  
    executor.cache.path.fs : [ "/mnt/cachemanagerdisk/dir1","/mnt/cachemanagerdisk/dir2","/mnt/cachemanagerdisk/dir3","/mnt/cachemanagerdisk/dir4"]  
}  
  
zookeeper: "lak-azure-perf:"${services.coordinator.master.embedded-zookeeper.port}  

```

## Setting Up Caching for Reflection Data[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config#setting-up-caching-for-reflection-data "Direct link to Setting Up Caching for Reflection Data")
You can improve the performance of queries that use Reflections by enabling caching of Reflection data.
If you are using a cloud storage provider, such as AWS, Google Cloud Platform, or Microsoft Azure, as a distributed store, caching is enabled by default.
If you are using HDFS as a distributed store, uncomment `dist.caching.enabled` in the `debug` section of `dremio.conf`, and set it to `true`. Then, restart the cluster.
## Best Practices[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config#best-practices "Direct link to Best Practices")
The following describes best practices for cloud-caching:
  * Use SSD/NVMe disks for best performance.
  * Provide disks with sufficient space to benefit from caching. Note that the cache will evict unused data when required.
  * To add capacity to the cache, add additional disks to the `executor.cache.path.fs` property in the `dremio.conf` file. Note that removing a disk is not supported.
  * When removing local caching on executor nodes, you need to:
    1. Remove the Cloud Cache options on the data source.
    2. Delete the Cache Manager database and file system folders.


Was this page helpful?
[Previous Distributed Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config)[Next Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Distributed Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config)[Next Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)
