---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config
title: "Configuring Wire Encryption | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64054.796811375
---

[Skip to main content](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#__docusaurus_skipToContent_fallback)
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)
[](/dremio-cloud)
[](/)
[current [26.x]](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)
  * [current [26.x]](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)
  * [25.x](/25.x)


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](/)
  * [Get Started with Dremio](/get-started)
  * [What is Dremio?](/what-is-dremio)
  * [Deploy Dremio](/deploy-dremio)
    * [Kubernetes Environments](/deploy-dremio/kubernetes-environments)
    * [Deploy on Kubernetes](/deploy-dremio/deploy-on-kubernetes)
    * [Configuring Your Values](/deploy-dremio/configuring-kubernetes)
    * [Managing Engines](/deploy-dremio/managing-engines-kubernetes)
    * [Other Options](/deploy-dremio/other-options)
      * [Dremio with Hadoop](/deploy-dremio/other-options/yarn-hadoop)
      * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
        * [Installing and Upgrading](/deploy-dremio/other-options/standalone/install)
        * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
          * [Services](/deploy-dremio/other-options/standalone/dremio-config)
            * [Metadata Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config)
            * [Distributed Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config)
            * [Cloud Cache](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config)
            * [Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)
            * [ZooKeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config)
            * [High Availability](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config)
          * [Environment](/deploy-dremio/other-options/standalone/dremio-config/dremio-env)
        * [System Requirements](/deploy-dremio/other-options/standalone/system-requirements)
      * [AWS Edition (Deprecated)](/deploy-dremio/other-options/aws-edition)
  * [Manage Sources](/data-sources)
  * [Load Data](/load-data)
  * [Build Data Products](/data-products)
  * [Connect Client Applications](/client-applications)
  * [Accelerate Queries](/acceleration)
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
  * [Reference](/reference)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * [Services](/deploy-dremio/other-options/standalone/dremio-config)
  * Wire Encryption

Version: current [26.x]
On this page
# Configuring Wire Encryption
Wire encryption provides confidentiality and privacy over a public network. Dremio uses Transport Layer Security (TLS) to establish encrypted communication channels. Wire encryption is configured in `dremio.conf`.
Dremio supports the following TLS wire encryption methods:
  * Full Wire Encryption - Enables _**all**_ TLS communication.
  * Web Server Encryption - Enables HTTPS on the Dremio's web server.
  * Client Encryption - Encryption for Arrow Flight, Arrow Flight SQL JDBC and ODBC clients
  * Intracluster Encryption - Enables TLS communication between nodes in a Dremio cluster.


All Dremio clusters must have the following configured:
  * One or more coordinator nodes with the main coordinator role. See [High Availability in Cluster Deloyments](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config) for a multiple coordinator node environment.
  * One or more executor nodes.


In a cluster environment (not a single node install), a node can only have a single role: as either a main coordinator or an executor. In addition, a coordinator-only role is not supported. A coordinator node refers to a node with the main coordinator role enabled.
## Prerequisite[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#prerequisite "Direct link to Prerequisite")
Prior to configuring your Dremio environment for wire encryption, the file permissions on the keystore, truststore, and `dremio.conf` files must be set as follows:
  * keystore permission: **0440**
  * truststore permission: **0444**
  * `dremio.conf` file permission: **0444**


## Full Wire Encryption Enterprise[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#full-wire-encryption-enterprise "Direct link to full-wire-encryption-enterprise")
To configure Dremio to use encryption for all web server, client-server, and intracluster communication using the same keystore and truststore, set the following properties in `dremio.conf` on _**all**_ of your Dremio coordinator and executor nodes.
Full wire encryption configuration

```
javax.net.ssl.keyStoreType: "type" # optional; default: JKS  
javax.net.ssl.keyStore: "path/to/keystore/jks/file"  
javax.net.ssl.keyStorePassword: "keystorePassword"  
javax.net.ssl.keyPassword: "key password"  
javax.net.ssl.trustStoreType: "type" # optional; default: JKS  
javax.net.ssl.trustStore: "path/to/truststore/jks/file"  
javax.net.ssl.trustStorePassword: "trustStorePassword"  
  
services.coordinator.client-endpoint.ssl.enabled: true  
services.coordinator.client-endpoint.ssl.auto-certificate.enabled: false  
services.coordinator.web.ssl.enabled: true  
services.coordinator.web.ssl.auto-certificate.enabled: false  
services.fabric.ssl.enabled: true  
services.fabric.ssl.auto-certificate.enabled: false  

```

## Web Server Encryption[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#web-server-encryption "Direct link to Web Server Encryption")
Web servers can be configured to use HTTPS with a self-signed or CA-issued certificates.
### Self-signed certificates[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#self-signed-certificates "Direct link to Self-signed certificates")
To configure Dremio to use self-signed certificates for Dremio web server encryption, add the following parameters to `dremio.conf` on all of your coordinator nodes.
Self-signed certificate properties 

```
services.coordinator.web.ssl.enabled: true  
services.coordinator.web.ssl.auto-certificate.enabled: true  

```

Self-signed certificates are not recommended in production, and most browsers will provide a warning.
### Custom Stores[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#custom-stores "Direct link to Custom Stores")
Custom `keystore` and `trustStore` configrations in `dremio.conf` must be present on all Dremio coordinators.
Web server encryption configuration

```
services.coordinator.web.ssl.enabled: true  
services.coordinator.web.ssl.auto-certificate.enabled: false  
  
services.coordinator.web.ssl.keyStore: "path/to/keystore/jks/file",  
services.coordinator.web.ssl.keyStorePassword: "keystorePassword",  
services.coordinator.web.ssl.trustStore: "path/to/trustStore", (Optional)  
services.coordinator.web.ssl.trustStorePassword: "trustStorePassword" (Optional)  

```

In Dremio 24+, the following properties in `dremio.conf` can be encrypted using the `dremio-admin encrypt` [CLI command](/reference/admin-cli/encryption):
  * keyStorePassword
  * trustStorePassword


## Client Encryption[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#client-encryption "Direct link to Client Encryption")
### Arrow Flight and Arrow Flight SQL JDBC and ODBC Enterprise[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#arrow-flight-and-arrow-flight-sql-jdbc-and-odbc-enterprise "Direct link to arrow-flight-and-arrow-flight-sql-jdbc-and-odbc-enterprise")
To enable encryption between Arrow Flight client appliations and the Dremio cluster, add these properties to the `dremio.conf` file on all of your coordinator nodes:
Arrow Flight client encryption configuration

```
services.flight.ssl.enabled: true  
services.flight.ssl.auto-certificate.enabled: false  
services.flight.ssl.keyStoreType: "jks"  
services.flight.ssl.keyStore: "/path/to/serverKeyStore.jks"  
services.flight.ssl.keyStorePassword: "<password for your keystore>"  
services.flight.ssl.keyPassword: "<password for your key>"  
services.flight.ssl.trustStoreType: "jks"  
services.flight.ssl.trustStore: "/path/to/serverTrustStore.jks"  
services.flight.ssl.trustStorePassword: "<password for your truststore>"  

```

### Legacy JDBC Clients Enterprise[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#legacy-jdbc-clients-enterprise "Direct link to legacy-jdbc-clients-enterprise")
Transport Layer Security (TLS) communication is supported for encrypting communication between legacy JDBC client applications and a Dremio cluster.
To configure Dremio to use TLS for client-server encryption:
  1. Set the keyStore and trustStore properties in the `dremio.conf` file on _**all**_ of your Dremio coordinator nodes.
  2. Download, install, and configure a driver for your [client application](/client-applications), ensuring that you configure parameters required for wire encyption. See [Drivers](/client-applications/drivers) for specific driver information.


To enable encryption in Dremio, add the following keyStore and trustStore properties to the `dremio.conf` file on all of your Dremio coordinator nodes:
Properties for enabling encryption

```
services.coordinator.client-endpoint.ssl.enabled: true  
services.coordinator.client-endpoint.ssl.auto-certificate.enabled: false  
services.coordinator.client-endpoint.ssl.keyStoreType: "type" # optional; default: JKS  
services.coordinator.client-endpoint.ssl.keyStore: "path/to/keystore/jks/file"  
services.coordinator.client-endpoint.ssl.keyStorePassword: "file password"  
services.coordinator.client-endpoint.ssl.keyPassword: "key password"  
services.coordinator.client-endpoint.ssl.trustStoreType: "type" # optional; default: JKS  
services.coordinator.client-endpoint.ssl.trustStore: "path/to/truststore/jks/file"  
services.coordinator.client-endpoint.ssl.trustStorePassword: "file password"  

```

## Intracluster Encryption Enterprise[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#intracluster-encryption-enterprise "Direct link to intracluster-encryption-enterprise")
Transport Layer Security (TLS) communication is supported for encrypting communication between Dremio nodes in the cluster.
### Self-Signed Certificates[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#self-signed-certificates-1 "Direct link to Self-Signed Certificates")
To configure Dremio to use self-signed certificates for intracluster encryption, add the following parameters to `dremio.conf` on all of your coordinator and executor nodes.
Self-signed certificates for intracluster encryption

```
services.fabric.ssl.enabled: true  
services.fabric.ssl.auto-certificate.enabled: true  

```

Using a self-signed certificate in production is not recommended for security reasons.
### Custom keystores and truststores[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#custom-keystores-and-truststores "Direct link to Custom keystores and truststores")
To configure Dremio to use TLS for intracluster encryption, set the keyStore and trustStore properties in the `dremio.conf` file on all of your Dremio coordinator and executor nodes.
Intracluster encryption configuration

```
services.fabric.ssl.enabled: true  
services.fabric.ssl.auto-certificate.enabled: false  
services.fabric.ssl.keyStoreType: "type" # optional; default: JKS  
services.fabric.ssl.keyStore: "path/to/keystore/jks/file"  
services.fabric.ssl.keyStorePassword: "file password"  
services.fabric.ssl.keyPassword: "key password"  
services.fabric.ssl.trustStoreType: "type" # optional; default: JKS  
services.fabric.ssl.trustStore: "path/to/truststore/jks/file"  
services.fabric.ssl.trustStorePassword: "file password"  

```

## Password Encryption[​](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#password-encryption "Direct link to Password Encryption")
The following properties in `dremio.conf` can be encrypted.
  * keyStorePassword
  * keyPassword
  * trustStorePassword


See the `dremio-admin encrypt` [Admin CLI](/reference/admin-cli/encryption) command for further information.
Was this page helpful?
[Previous Cloud Cache](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config)[Next ZooKeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Cloud Cache](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config)[Next ZooKeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config)
  * [Prerequisite](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#prerequisite)
  * [Full Wire Encryption Enterprise](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#full-wire-encryption-enterprise)
  * [Web Server Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#web-server-encryption)
    * [Self-signed certificates](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#self-signed-certificates)
    * [Custom Stores](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#custom-stores)
  * [Client Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#client-encryption)
    * [Arrow Flight and Arrow Flight SQL JDBC and ODBC Enterprise](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#arrow-flight-and-arrow-flight-sql-jdbc-and-odbc-enterprise)
    * [Legacy JDBC Clients Enterprise](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#legacy-jdbc-clients-enterprise)
  * [Intracluster Encryption Enterprise](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#intracluster-encryption-enterprise)
    * [Self-Signed Certificates](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#self-signed-certificates-1)
    * [Custom keystores and truststores](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#custom-keystores-and-truststores)
  * [Password Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config#password-encryption)


![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fother-options%2Fstandalone%2Fdremio-config%2Fdremio-conf%2Fwire-encryption-config%2F&_biz_t=1777950374368&_biz_i=Configuring%20Wire%20Encryption%20%7C%20Dremio%20Documentation&_biz_n=116&rnd=179205&cdn_o=a&_biz_z=1777950374368)
