---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config
title: "Configuring ZooKeeper | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64209.159835916
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * [Services](/deploy-dremio/other-options/standalone/dremio-config)
  * ZooKeeper

Version: current [26.x]
On this page
# Configuring ZooKeeper
Dremio recommends ZooKeeper 3.6 or later. ZooKeeper 3.4 has reached end-of-life and is no longer supported.
To configure ZooKeeper, the `zookeeper` property with the hostname and port must be added to the `dremio.conf` file on all nodes in the Dremio cluster. This is particularly important when ZooKeeper is on an external node. The default port is 2181.  
| Deployment  | ZooKeeper property  |  
| --- | --- |  
| Single-Node cluster  | The ZooKeeper property is _**not**_ added to the `dremio.conf` file with a single node cluster.  |  
| Multi-node cluster  | The ZooKeeper property _**must**_ be added to the `dremio.conf` file on each coordinator and executor node in the Dremio cluster.  |  
There are _no_ spaces between the comma-separated list of ZooKeeper nodes. If there are extra spaces, you may receive an error message similar to the following: `Error: java.net.UnknownHostException: 11.22.33.142: Name or service not known`.
## Property Syntax[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config#property-syntax "Direct link to Property Syntax")
Syntax for ZooKeeper property

```
zookeeper: "<host1>:2181,<host2>:2181"  

```

The `zookeeper` host is the hostname (or IP address) where ZooKeeper is located.
  * If ZooKeeper is an embedded ZooKeeper on the main coordinator node, then the ZooKeeper hostname is the hostname of the main coordinator node.  
`zookeeper: "<main-coordinator-host1>:2181,<main-coordinator-host2>:2181"`
  * If ZooKeeper is on an external node, then the ZooKeeper hostname is the hostname of the node where it is located.  
`zookeeper: "<zookeeper-host1>:2181,<zookeeper-host2>:2181"`


## Embedded ZooKeeper Examples[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config#embedded-zookeeper-examples "Direct link to Embedded ZooKeeper Examples")
The following examples illustrate how to configure an embedded ZooKeeper according to different deployment variables.
  * If you have one coordinator node (mainA) with an embedded ZooKeeper and multiple executor nodes, then you specify that main coordinator node with the ZooKeeper property in the `dremio.conf` file on every node in the Dremio cluster.
One coordinator node with embedded ZooKeeper and multiple executor nodes

```
zookeeper: "mainA:2181"  

```

  * If you want to change the default port used by the embedded ZooKeeper, add the following property:
Property to change default port used by embedded ZooKeeper

```
services.coordinator.master.embedded-zookeeper.port: <port>  

```

The term `master` is a legacy label used in this property. We now refer to this as the main coordinator.


## External ZooKeeper Examples[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config#external-zookeeper-examples "Direct link to External ZooKeeper Examples")
To use your own external ZooKeeper cluster rather than Dremio's embedded ZooKeeper, modify the `zookeeper` property in the `dremio.conf` file. If no ZooKeeper path is specified, Dremio defaults to `/dremio`.
The `dremio.conf` file must be updated on every Dremio coordinator and executor node in the cluster.
The following example shows the default property and syntax:
Default property and syntax for external ZooKeeper

```
services.coordinator.master.embedded-zookeeper.enabled: false  
zookeeper: "<host1>:2181,<host2>:2181"  

```

The term `master` is a legacy label used in this property. We now refer to this as the main coordinator.
  * If you are configuring for HA, then you set the ZooKeeper property for every node that ZooKeeper is on.
For example, if zooA is the primary ZooKeeper node and zooB is the secondary ZooKeeper node, then your ZooKeeper setting is `zookeeper: "zooA:2181,zooB:2181"`.
  * If you are configuring multiple Dremio clusters to run using the same ZooKeeper quorum, then you set the property to point to a different root.
The following illustrate syntax and example ZooKeeper entries in `dremio.conf` (note that `/dremio` needs to be placed at the end of the config entry and is mandatory):
Example ZooKeeper Syntax 

```
zookeeper: "<host1>:2181,<host2>:2181,<host3>:2181/<path to dremio>/dremio"  

```

Example of a Valid ZooKeeper Entry 

```
zookeeper: "<host1>:2181,<host2>:2181,<host3>:2181/dremioprod/dremio"  

```

Example of Invalid ZooKeeper Entries 

```
zookeeper: "<host1>:2181,<host2>:2181,<host3>:2181/dremioprod"  
zookeeper: "<host1>:2181/dremioprod,<host2>:2181/dremioprod,<host3>:2181/dremioprod"  

```



### ZooKeeper 3.5 Support[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config#zookeeper-35-support "Direct link to ZooKeeper 3.5 Support")
If you use an external ZooKeeper 3.5 cluster, add the system property `-Dcurator-cache-bridge-force-tree-cache=true` to `dremio-env` as shown in the following example:
Example for ZooKeeper 3.5 clusters

```
export DREMIO_JAVA_SERVER_EXTRA_OPTS="-<otherProperties> -Dcurator-cache-bridge-force-tree-cache=true"  

```

Was this page helpful?
[Previous Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)[Next High Availability](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)[Next High Availability](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fother-options%2Fstandalone%2Fdremio-config%2Fdremio-conf%2Fzookeeper-config%2F&_biz_t=1777950532754&_biz_i=Configuring%20ZooKeeper%20%7C%20Dremio%20Documentation&_biz_n=411&rnd=247887&cdn_o=a&_biz_z=1777950532755)
![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   

Allow All
###  Manage Consent Preferences
#### Functional Cookies
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
#### Performance Cookies
Performance Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
#### Targeting Cookies
Targeting Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
#### Strictly Necessary Cookies
Always Active
These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
Back Button
### Cookie List
Search Icon
Filter Icon
Clear
checkbox label label
Apply Cancel
Consent Leg.Interest
checkbox label label
checkbox label label
checkbox label label
Reject All Confirm My Choices
