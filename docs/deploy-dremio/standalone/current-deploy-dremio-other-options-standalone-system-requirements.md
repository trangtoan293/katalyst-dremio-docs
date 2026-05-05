---
url: /deploy-dremio/other-options/standalone/system-requirements
slug: /deploy-dremio/other-options/standalone/system-requirements
title: "System Requirements | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64215.945943041
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * Dremio with Your Infrastructure
  * System Requirements

Version: current [26.x]
On this page
# System Requirements
This topic covers system requirements for standalone clusters including general requirements for Hadoop on YARN deployments.
As the [Dremio Shared Responsibility Models](https://www.dremio.com/responsibility) outline, network connectivity is a shared responsibility between Dremio and you. The Shared Responsibility Models lay out Dremio's responsibilities for providing specifications and your responsibilities for provisioning and configuring resources.
## Hadoop Distributions​
Dremio supports the following Hadoop distributions:
  * Apache Hadoop 2.7.2+ and 3+
  * Hortonworks HDP 2.6.5 to HDP 3.0.x
  * Cloudera CDH 5 and 6
  * Cloudera Data Platform 7.1+


## Operating Systems​
Dremio supports the following distributions and versions of Linux:
  * RHEL 6.7+, 7.3+, and 8.3+ (RPM and tarball)
  * CentOS 6.7+ and 7.3+ (RPM and tarball)
  * SLES 12 SP2+ (tarball)
  * Ubuntu 14.04+ (tarball)
  * Debian 7+ (tarball)


## Java Development Kit​
Dremio requires Java Development Kit (JDK). Dremio supports all major OpenJDK distributions (versions 11, 17, and 21), including those from Adoptium (Eclipse Temurin), Fedora, Red Hat, and Oracle. Non-OpenJDK Java distributions are not supported.
For Dremio 26.1, only Java 17+ is supported.
The glibc (GNU C Library) implementation of libc is required for OpenJDK. Alpine Linux may use musl, which requires glibc to be installed.
Dremio utilizes the Java compiler (`javac`) for runtime code generation. You can check to see if your operating system has Java installed (and which version) with this command:
Check Java version

```
java -version  

```

## Browsers​
The Dremio UI works best with the following browsers:
  * Google Chrome 54+
  * Apple Safari 11+
  * Mozilla Firefox 50+
  * Microsoft Edge 14+


## Server or Instance Hardware​
  * **Coordinators**
For [coordinators](/what-is-dremio/architecture), Dremio recommends a machine with 32 CPUs and 64 GB of memory. The high CPU count is important for high-throughput workloads.
The smallest supported production size is 8 CPUs and 16 GB of memory. Not all production workloads are created equal, and this configuration may not be suitable for yours. Please follow the guidance of the Dremio Support team.
  * **Executors**
For [executors](/what-is-dremio/architecture), Dremio recommends either:
    * 16 CPUs and 128 GB of memory. This is the standard configuration.
    * 32 CPUs and 128 GB of memory. This configuration is geared for high-throughput workloads.
The smallest supported production size must have 64 GB of memory. Not all production workloads are created equal, and this configuration may not be suitable for yours. Please follow the guidance of the Dremio Support team.
  * **ZooKeeper**
1 CPU and 1 GB of memory are required.


During onboarding, we help you determine the number of nodes, coordinators, and executors. After the initial setup, you are responsible for reviewing resources for your coordinators, engines, and executors to ensure they continue to meet your query workload needs. For best practices, see [Pillar 2 - Performance Efficiency](/help-support/well-architected-framework/performance) of Dremio's Well-Architected Framework.
## Network​
There should be a **low-latency** , **high-bandwidth** network connection between Dremio and the data sources.
The following ports must be open:  
| Purpose  | Port  | From  | To  |  
| --- | --- | --- | --- |  
| UI (HTTPS)  | 9047  | Corporate network (end users)  | Coordinators  |  
| Arrow Flight  | 32010  | Corporate network (end users)  | Coordinators  |  
| ODBC/JDBC clients (e.g., Tableau, Power BI)  | 31010  | Corporate network (end users)  | Coordinators  |  
| ZooKeeper (internal)  | 2181  | Other Dremio nodes (coordinators and executors)  | Coordinators  |  
| Inter-node communication  | 45678  | Other Dremio nodes  | All Dremio nodes  |  
| Conduit  | ephemeral  | Coordinators and Executors  | Coordinators and Executors  |  
| Data source reads  | Varies  | All Dremio nodes  | Data source nodes  |  
### Configuring the Conduit Port​
Dremio uses an ephemeral network port allocated by the operating system for inter-node communication between coordinators and executors. To assign a static port number to the conduit port, configure `services.conduit.port` in the Dremio configuration file.
If you assign a static port number and run Dremio with a non-root user, the port number must be greater than 1024.
If TLS is enabled on your deployment, Dremio applies the same configuration to communications using the conduit port. To use a different configuration or to enable TLS for only the new conduit port, specify all values for `services.conduit.ssl` in `dremio.conf`.
### Web Sockets​
Dremio uses Web Sockets. If you encounter the following error message: _"Your Internet connection may be offline, or WebSockets to Dremio are being blocked."_ , ensure that your environment allows WebSocket communication.
### Performance​
A 10 GbE network is recommended when connecting to large data sources that hold terabytes or petabytes of data.
In particular, for maximum performance, it is recommended to use a 10 GbE network between coordinators and executors, executors and executors, and executors and data sources.
## Storage​
### Metadata Storage​
#### Base Requirements​
The metadata location must be local high-speed, low latency storage for spilling operations purposes. Dremio requires a minimum volume size of 512 GB for the KV metadata store.
The administrator should monitor the volume for available space and usage. The KV store is cleaned with the `dremio-admin` clean command.
The Dremio metadata store services two workload types:  
| Workload  | Performance Consideration  |  
| --- | --- |  
| User queries and Reflection refresh  | Performance is affected by the number of concurrent queries  |  
| Metadata refresh  | Performance is affected by the number of tables and the frequency of refresh.  |  
The performance requirement for user queries and Reflection refresh scales linearly with the number of concurrent queries per second.  
| Queries/Sec  | Required Baseline Throughput  |  
| --- | --- |  
| 50  | 60 MB/s  |  
| 100  | 120 MB/s  |  
| 200  | 240 MB/s  |  
The performance requirement for metadata refresh scales linearly with the number of datasets and the average number of columns and splits per dataset. However, the performance requirement scales inversely with the refresh interval.  
| Number of Datasets  | Average Columns, Splits per Dataset  | Required Baseline Throughput  |  
| --- | --- | --- |  
| 1000  | 20 columns and 1000 splits per dataset, refresh interval: 30 min  | 1 MB/s  |  
| 2000  | 20 columns and 1000 splits per dataset, refresh interval: 30 min  | 2 MB/s  |  
| 2000  | 20 columns and 1000 splits per dataset, refresh interval: 10 min  | 3 MB/s  |  
#### High Availability​
Dremio requires that deployments configured for high availability use high speed, low latency network-attached NFS storage with locking support for the metadata store.
  * Dremio recommends a minimum cumulative read/write throughput for NAS of 30 MB/s.
  * The requirements of your query workload and metadata refresh policies may require greater throughput, see above.
  * Dremio supports both `4` and `3` for the NFS `vers` parameter.
  * Dremio does not support NFS 2.
  * All Dremio coordinator nodes must have read/write access.


### Distributed Store​
Dremio recommends the following space allocations for data lake distributed storage such as HDFS and NFS where volume size is included in the configuration.  
| Type  | Purpose  | Minimum Size  |  
| --- | --- | --- |  
| [Reflections](/acceleration/manual-reflections)  | Store Reflection materializations  | Start with 10% of data size  |  
| [Unlimited split metadata](/help-support/advanced-topics/metadata-caching)  | Metadata storage for unlimited split parquet-based datasets  | Scales with number of tables and refresh snapshots; start with 150GB and monitor size  |  
|  [Uploads](/data-sources/file-upload) & downloads  | User-uploaded datasets and downloaded data  | Start with 500GB  |  
| Job results  | Reuse query results  | Scales with number of jobs and length of retention; start with 150GB and monitor size  |  
### Additional Storage​
  * Dremio recommend a query spill volume of 128 GB per node or 2 * executor RAM, whichever is larger. The Dremio administrator should watch for "out of spill space" messages.
  * Dremio recommends a cloud cache volume of at least 100 GB of available space. Cleaning this space is not required as its an LRU cache. Use SSD/NVMe disks for best performance.


## Privileges​
To install Dremio, the following access privileges are required:
  * `ssh` and `scp` access
  * `root` or `sudo` privileges


## Additional Configuration​
  * For Unix/Linux operating systems, increase your open file limit for users (this impacts the Dremio processes) to **65536**.
  * Dremio Enterprise automatically determines the memory available on the system and allocates it between heap and direct memory based on the Dremio node type. If you believe that you need to adjust these levels, consult Dremio Support. Depending on your workloads, Dremio Support may advise you to adjust the maximum memory available or to configure heap and direct memory explicitly. For more information, see Memory.
  * To verify the memory assigned to the nodes (heap and direct), run the following query: `SELECT * FROM sys.memory`


Was this page helpful?
Previous Environment[Next AWS Edition (Deprecated)](/deploy-dremio/other-options/aws-edition)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
Previous Environment[Next AWS Edition (Deprecated)](/deploy-dremio/other-options/aws-edition)
