---
url: /deploy-dremio/other-options/standalone/dremio-config/dremio-conf
title: "Dremio Services Configuration | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64054.726329208
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * [Other Options](/deploy-dremio/other-options)
  * [Dremio with Your Infrastructure](/deploy-dremio/other-options/standalone)
  * [Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)
  * Services

Version: current [26.x]
On this page
# Dremio Services Configuration
The `dremio.conf` file is used to configure Dremio services. By default, `dremio.conf` is located under the `/etc/dremio/` directory, however, if the file is absent from the configuration directory, Dremio uses a default configuration and starts up. The `dremio.conf` file uses the HOCON syntax. Drmeio provides a template of `dremio.conf` to assist in creating your configuration.
Template `dremio.conf` configuration file

```
paths: {  
  
  # the local path for dremio to store data.  
  local: ${DREMIO_HOME}"/data"  
  
  # the distributed path Dremio data including job results, downloads, uploads, etc  
  dist: "pdfs://"${paths.local}"/pdfs"  
  
  # location for catalog database (if main node)  
  db: ${paths.local}/db,  
  
  spilling: [${paths.local}/spill]  
  
  # storage area for the accelerator cache.  
  accelerator: ${paths.dist}/accelerator  
  
  # staging area for json and csv ui downloads  
  downloads: ${paths.dist}/downloads  
  
  # stores uploaded data associated with user home directories  
  uploads: ${paths.dist}/uploads  
  
  # stores data associated with the job results cache.  
  results: ${paths.dist}/results  
  
  # shared scratch space for creation of tables.  
  scratch: ${paths.dist}/scratch  
  
}  
  
services: {  
  coordinator: {  
    enabled: true,  
  
    # Auto-upgrade Dremio at startup if needed  
    auto-upgrade: false,  
  
    master: {  
      enabled: true,  
      # configure an embedded ZooKeeper server on the same node as master  
      embedded-zookeeper: {  
        enabled: true,  
        port: 2181,  
        path: ${paths.local}/zk  
      }  
    },  
  
    web: {  
      enabled: true,  
      port: 9047,  
      ssl: {  
        # If SSL for communication path between browsers (or REST clients) and Dremio should be enabled.  
        enabled: false,  
  
        # Allow for auto-generated certificates if keyStore option is not set  
        # Auto-generated self-signed certificates are considered insecure, and this  
        # option should be set to false in production environment  
        auto-certificate.enabled: true  
  
        # KeyStore and TrustStore settings default to Java keystore and truststore JVM arguments.  
        # If needed to be overridden, then change the below properties  
  
        # KeyStore type  
        keyStoreType: ${javax.net.ssl.keyStoreType},  
  
        # Path to KeyStore file  
        keyStore: ${javax.net.ssl.keyStore},  
  
        # Password to access the keystore file  
        keyStorePassword: ${javax.net.ssl.keyStorePassword},  
  
        # Password to access the key  
        keyPassword: ${javax.net.ssl.keyPassword},  
  
        # TrustStore type  
        trustStoreType: ${javax.net.ssl.trustStoreType},  
  
        # Path to TrustStore file  
        trustStore: ${javax.net.ssl.trustStore},  
  
        # Password to access the truststore file  
        trustStorePassword: ${javax.net.ssl.trustStorePassword}  
      },  
      auth: {  
        type: "internal", # Possible values are "internal", "ldap" (includes Microsoft Entra ID)  
        # LDAP config file for configuration when auth type is "ldap"  
        ldap_config: "ldap.json" # file name provided should be in the classpath.  
      }  
      tokens: {  
        cache: {  
          # number of tokens to store locally on this coordinator node  
          # (set to 0, if all requests should be made directly to the database of tokens)  
          size: 100  
          # time (in minutes) after which the token needs to be obtained from the token store  
          expiration_minutes: 5  
        }  
      }  
    },  
  
    client-endpoint: {  
      port: 31010  
    },  
  
    scheduler: {  
      threads: 24  
    },  
  
    command-pool: {  
      enabled: true  
      size: 0 # 0 defaults to the machine's number of cores  
    }  
  },  
  
  executor: {  
    enabled: true  
  },  
  
  flight: {  
      enabled: true,  
      port: 32010,  
      # Authentication mode for the Arrow FlightServer endpoint.  
      # There are two modes:  
      #       - legacy.arrow.flight.auth  
      #       - arrow.flight.auth2  
      # legacy.arrow.flight.auth is backwards compatible and will be deprecated in the future.  
      # arrow.flight.auth2 is the new and preferred Arrow Flight authentication method.  
      auth.mode: "arrow.flight.auth2"  
   }  
  
  fabric: {  
    port: 45678,  
  
    memory: {  
      reservation: 100M  
    }  
  },  
  
  conduit: {  
    # If set to 0, a port is automatically allocated (typically in ephemeral range). Otherwise, the configured value  
    # is used.  
    port: 0  
  
    ssl: {  
      # If SSL for communication path between Dremio instances should be enabled.  
      enabled: ${services.fabric.ssl.enabled},  
  
      # Allow for auto-generated certificates if keyStore option is not set  
      # Auto-generated self-signed certificates are considered insecure, and this  
      # option should be set to false in production environment  
      auto-certificate.enabled: ${services.fabric.ssl.auto-certificate.enabled},  
  
      # KeyStore and TrustStore settings default to Java keystore and truststore JVM arguments.  
      # If needed to be overridden, then change the below properties  
  
      # KeyStore type  
      keyStoreType: ${services.fabric.ssl.keyStoreType},  
  
      # Path to KeyStore file  
      keyStore: ${services.fabric.ssl.keyStore},  
  
      # Password to access the keystore file  
      keyStorePassword: ${services.fabric.ssl.keyStorePassword},  
  
      # Password to access the key  
      keyPassword: ${services.fabric.ssl.keyPassword},  
  
      # TrustStore type  
      trustStoreType: ${services.fabric.ssl.trustStoreType},  
  
      # Path to TrustStore file  
      trustStore: ${services.fabric.ssl.trustStore},  
  
      # Password to access the truststore file  
      trustStorePassword: ${services.fabric.ssl.trustStorePassword}  
    }  
  }  
  
  # Set up kerberos credentials in server (applicable for both coordinator and executor)  
  kerberos: {  
    principal: "",  
    keytab.file.path: ""  
  }  
  
  web-admin: {  
    enabled: true,  
    # Port, bound to loopback interface, on which the daemon responds to liveness HTTP requests (0 == auto-allocated)  
    port: 0  
  }  
}  
  
provisioning: {  
  yarn: {  
    jvmoptions: "",  
    # list of jars to be added to the main container classpath  
    classpath: []  
    app {  
      # list of jars to be added to the Dremio application classpath  
      classpath: []  
      # list of jars to be added to the Dremio application classpath (at the front)  
      classpath-prefix: []  
    }  
    watchdog: {  
      # how long to wait for server reply before considering it failed  
      poll.timeout: 1000ms  
      # interval between two server polls  
      poll.interval: 10000ms  
      # how many consecutive failed attempts before killing server  
      missed.polls.before.kill: 6  
      # maximum attempts at killing server  
      max.kill.attempts: 10  
      # how long before reattempting killing server  
      kill.reattempt.interval: 1000ms  
    }  
  }  
}  
  
# the zookeeper quorum for the cluster  
zookeeper: "localhost:"${services.coordinator.master.embedded-zookeeper.port}  
zk.client.session.timeout: 90000  
  
# These system properties are listed here to allow substitution of system property values for DAC Web SSL properties  
# listed in services.web.ssl section. Currently we consider only the system properties listed in this file for  
# substitution.  
javax.net.ssl {  
  keyStoreType: "",  
  keyStore: "",  
  keyStorePassword: "",  
  keyPassword: "",  
  trustStoreType: "",  
  trustStore:"",  
  trustStorePassword: ""  
}  
  
registration.publish-host: ""  

```

## Configuring Basic Services[​](/deploy-dremio/other-options/standalone/dremio-config#configuring-basic-services "Direct link to Configuring Basic Services")
The Dremio `services` property determines whether the node is enabled with the main coordinator, secondary coordinator, or executor role. Each node in the Dremio cluster must be configure accordingly.
### Dremio Coordinators[​](/deploy-dremio/other-options/standalone/dremio-config#dremio-coordinators "Direct link to Dremio Coordinators")
To configure a coordinator node with the main coordinator role, use the following Dremio services configuration.
Coordinator configuration 

```
services: {  
  coordinator.enabled: true,  
  coordinator.master.enabled: true,  
  executor.enabled: false  
}  

```

Configure multiple secondary coordinator nodes to improve concurrency and distribute query planning for ODBC and JDBC client requests to your deployment. To distribute queries across your deployment, Dremio recommends that you also [configure ZooKeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config).
Secondary coordinator nodes run ODBC and JDBC queries only from clients that connect to the secondary coordinator either directly or with a load balancer.
Run metadata commands only on the main coordinator, not on secondary coordinators, unless you are working with Iceberg tables or [unlimited splits](/help-support/advanced-topics/metadata-caching) are enabled on the cluster.
To enable this feature for YARN-based and standalone deployments, add the following Dremio services configuration to the `dremio.conf` file on each secondary coordinator node in your cluster and restart your deployment:
Secondary coordinator configuration

```
services: {  
    coordinator.enabled: true,  
    coordinator.master.enabled: false,  
    coordinator.web.enabled: false,  
    executor.enabled: false  
}  

```

When using authentication providers (LDAP, Microsoft Entra ID, OAuth), you must copy both the authentication configuration file (e.g., `ad.json`, `azuread.json`, `oauth.json`) and add the authentication settings to `dremio.conf` on every secondary coordinator. A common mistake is copying the authentication file but forgetting to add the `coordinator.web.auth.type` and `coordinator.web.auth.config` properties to the `dremio.conf` file.
Dremio recommends a maximum of five secondary coordinator nodes for a deployment. Dremio deployments on Azure ARM do not support secondary coordinator nodes.
### Executors[​](/deploy-dremio/other-options/standalone/dremio-config#executors "Direct link to Executors")
To configure an executor node, use the following Dremio services configuration.
Executor configuration

```
services: {  
  coordinator.enabled: false,  
  coordinator.master.enabled: false,  
  executor.enabled: true  
}  

```

## Additional Configuration[​](/deploy-dremio/other-options/standalone/dremio-config#additional-configuration "Direct link to Additional Configuration")
Dremio provides configuration to customize the behavior of services attributes.  
| Feature  | Description  | Example  |  
| --- | --- | --- |  
| [ Metadata Store ](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config)  | Manages and optimizes metadata to enable fast query performance and efficient data access. Dremio track datasets, table schemas, indexes, and query execution details through its metadata store.   | 
```
paths: {  
  local: ${DREMIO_HOME}"/data"   
}   

```
 |  
| [ Distributed Store ](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/dist-store-config)  |  Responsible for storing metadata, query profiles, and shared resources across the cluster.   | 
```
paths: {  
  dist: "dremioS3:///<bucket_name>/"   
}   

```
 |  
| [ Cloud Cache ](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/cloud-cache-config)  |  A caching layer that improves query performance by storing frequently accessed data on executors, thus minimizing the need to repeatedly fetch data from remote object storage like cloud buckets.   | 
```
services: {  
  executor.cache: {  
    path.db: "/your/path",   
    path.fs: "/your/path"  
  }  
}   

```
 |  
| [ Wire Encryption](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/wire-encryption-config)  |  Configures Transport Layer Security (TLS) between Dremio nodes and with clients in several optional configurations to fit your security requirements.   | 
```
services: {  
  coordinator.web.ssl: {  
    enabled: true  
    auto-certificate.enabled: true  
  }  
}  

```
 |  
| [ Apache Zookeeper](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/zookeeper-config)  |  ZooKeeper provides coordination and service discovery in distributed deployments, especially in multi-coordinator, multi-executor setups.   | 
```
zookeeper: "masterA:2181"  

```
 |  
| [ High Availability ](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/high-availability-config)  |  Dremio achieves high availability in a standalone environment by configuring one active and multiple backup coordinator nodes as standbys.   | 
```
services: {  
  coordinator: {  
    enabled: true,   
    master.enabled: true  
  }  
}  

```
 |  
Was this page helpful?
[Previous Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)[Next Metadata Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Cluster Configuration](/deploy-dremio/other-options/standalone/dremio-config)[Next Metadata Storage](/deploy-dremio/other-options/standalone/dremio-config/dremio-conf/metadata-store-config)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeploy-dremio%2Fother-options%2Fstandalone%2Fdremio-config%2Fdremio-conf%2F&_biz_t=1777950374331&_biz_i=Dremio%20Services%20Configuration%20%7C%20Dremio%20Documentation&_biz_n=115&rnd=135593&cdn_o=a&_biz_z=1777950374332)
