---
url: /deploy-dremio/configuring-kubernetes
slug: /deploy-dremio/configuring-kubernetes
title: "Configuring Your Values to Deploy Dremio to Kubernetes | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64051.23750225
---

  * [Dremio Enterprise Home](/)
  * [Deploy Dremio](/deploy-dremio)
  * Configuring Your Values

Version: current [26.x]
On this page
# Configuring Your Values to Deploy Dremio to Kubernetes
`values.yaml`.
Dremio recommends configuring your deployment values in a separate `.yaml` file since it will allow simpler updates to the latest version of the Helm chart by copying the separate configuration file across Helm chart updates.
If you are using an **Enterprise Edition free trial** , you don't need to do all the configurations described on this page. Instead, follow the configuration steps described in [Get Started with the Enterprise Edition Free Trial](/get-started/kubernetes-trial).
## Configure Your Values​
To configure your deployment values, do the following:
  1. Get the `values-overrides.yaml` configuration file and save it locally. Click here to download the file.
The `values-overrides.yaml` configuration file

```
  
# A Dremio License is required  
dremio:  
  license: "<your-license-key>"  
  image:  
    repository: quay.io/dremio/dremio-enterprise  
  
  # Configuration file customization  
  # The configFiles and configBinaries options provide the ability to override or add configuration files  
  # included in the Dremio ConfigMap. Both use a map where keys correspond to the filenames   
  # and values are the file contents.  
  
  # configFiles: Use this to provide text-based configuration files that will be mounted in /opt/dremio/conf/  
  # Note: The dremio.conf file is controlled by multiple settings in this values file and  
  # should not be directly overridden here.  
  # Example:  
  #configFiles:  
  # vault_config.json: |  
  #   {  
  #     <your-vault-json-config>  
  #   }  
  
  # configBinaries: Use this to provide binary configuration files (encoded as base64)  
  # These files will also be mounted in /opt/dremio/conf/  
  # Example:  
  #configBinaries:  
  #  custom-truststore.jks: "base64EncodedBinaryContent"  
  
  # dremioConfExtraOptions: Use this to add settings in dremio.conf  
  # Example:  
  #dremioConfExtraOptions:  
  #  # Enable SSL for fabric services  
  #  "services.fabric.ssl.enabled": true  
  #  "services.fabric.ssl.auto-certificate.enabled": false  
  
  # Hive 2 and 3 configuration files - can be provided here too. See: /deploy-dremio/configuring-kubernetes/#hive  
  #hive2ConfigFiles:  
  #  
  #hive3ConfigFiles:  
  #  
  
# To pull images from Dremio's Quay, you must create an image pull secret. For more info, see:  
# https://kubernetes.io/docs/concepts/containers/images/#specifying-imagepullsecrets-on-a-pod  
# All of the images are pulled using this same secret.  
imagePullSecrets:  
  -  <your-pull-secret-name>  
  
# Dremio Coordinator  
coordinator:  
  web:  
    auth:  
      enabled: true  
      type: "internal" # Valid types are: internal, ldap, azuread, oauth, oauth+ldap  
      # if enabled is true and type ldap, azuread, oauth, or oauth+ldap  
      # Uncomment the entry below and provide the JSON configuration inline  
      # OR use --set-file coordinator.web.auth.ssoFile=/path/to/file for the SSO provider configuration file during Helm install  
      # for more information about the file format for your SSO provider  
      # see /get-started/cluster-deployments/customizing-configuration/dremio-conf/sso-config   
      # ssoFile: |  
      # {  
      # <your-sso-json-file-content>  
      # }  
    tls:  
      enabled: false  
      secret: "<your-tls-secret-name>"  
  client:  
    tls:  
      enabled: false  
      secret: "<your-tls-secret-name>"  
  flight:  
    tls:  
      enabled: false  
      secret: "<your-tls-secret-name>"  
  resources:  
    requests:  
      cpu: "32"  
      memory: "64Gi"  
    limits:  
      memory: "64Gi"  
  volumeSize: 512Gi   
  
# Where Dremio stores metadata, Reflections, uploaded files, and backups.  The distributed store is required for Dremio to be operational.  
# For more information, see /what-is-dremio/architecture/#distributed-storage  
distStorage:  
  # The supported distributed storage types are: aws, gcp, or azureStorage. For S3-compatible storage use aws.  
  type: <your-distributed-storage-type> # Add here your distributed storage template from http://docs.dremio.com/current/deploy-dremio/configuring-kubernetes/#configuring-the-distributed-storage  
  
# MongoDB is the backing store for the Open Catalog. Backups are enabled by default and will take place automatically. Dremio will write these backups to your distributed storage location. Not all authentication types are supported. See our distributed storage docs link above. Lack of support will be noted where applicable.  
mongodb:  
  backup:  
    enabled: true  
  
# Open Catalog  
catalog:  
  externalAccess:  
    enabled: true  
    tls:   
      enabled: false  
      secret: "<your-catalog-tls-secret-name>"  
  # This is where Iceberg tables created in your catalog will reside  
  storage:  
# The supported catalog storage types are: S3, azure and GCS. For S3-compatible storage use S3.  
    type: <your-catalog-storage-type>   
# Add here your catalog storage template from /deploy-dremio/configuring-kubernetes/#configuring-storage-for-the-open-catalog  
  
service:  
  type: LoadBalancer  
  

```

  2. Edit the `values-overrides.yaml` file to configure your values. See the following sections for details on each configuration option:
     * License
     * Pull Secret
     * Coordinator
     * Coordinator's Distributed Storage
     * Open Catalog
     * Advanced Values Configurations
In all code examples, `...` denotes additional values that have been omitted.
Group all values associated with a given parent key in the YAML under a single instance of that parent, for example:
Do

```
dremio:  
  key-one: <value-one>  
  key-two:  
    key-three: <value-two>  

```

Do not

```
dremio:  
  key-one: <value-one>  
  
dremio:    
  key-two:  
    key-three: <value-two>  

```

Please note the parent relationships at the top of each YAML snippet and subsequent values throughout this section. The hierarchy of keys and indentations in YAML must be respected.
  3. Save the `values-overrides.yaml` file.


Once done with the configuration, deploy Dremio to Kubernetes. See how in [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes).
### License​
Provide your license key. To obtain a license, see [Licensing](/admin/licensing).  
Add this configuration under the parent, as shown in the following example:
Configuration of the license key

```
dremio:  
  license: "<your-license-key>"  
  ...  

```

### Pull Secret​
Provide the secret used to pull the images from Quay.io as follows:
  1. Log in to **Account Settings** in the drop-down menu.
  2. Click **Generate Encrypted Password** , type your password, and click **Verify**.
  3. On the next dialog, select **Kubernetes Secret** , and follow steps 1 and 2 to download the secret and run the command to submit the secret to the cluster.
  4. Add the configuration under the parent, as shown in the following example:
Configuration of the secret to pull images from Quay.io

```
imagePullSecrets:  
  - <your-quayio-secret-name>  

```



### Coordinator​
#### Resource Configuration​
Configure the volume size, resources limits, and resources requests. To configure these values, see Recommended Resources Configuration.
Add this configuration under the parents, as shown in the following example:
Configuration of the coordinator's resources with example values

```
coordinator:  
  resources:  
    requests:  
      cpu: 15  
      memory: 30Gi  
  volumeSize: 100Gi  
  ...  

```

#### Identity Provider​
Optionally, you can configure authentication via an identity provider. Each type of identity provider requires an additional configuration file provided during Dremio's deployment.
Select the authentication `type`, and follow the corresponding link for instructions on how to create the associated configuration file:
  * `azuread` - See how to [configure Microsoft Entra ID with user and group lookup](/security/authentication/identity-providers/microsoft-entra-id).
  * `ldap` - See how to [configure Dremio for LDAP](/security/authentication/identity-providers/ldap).
  * `oauth` - See how to [configure Dremio for OpenID](/security/authentication/identity-providers/oidc).
  * `oauth+ldap` - See how to [configure Dremio for Hybrid OpenID+LDAP](/security/authentication/identity-providers/oidc).


Add this configuration under the parents, as shown in the following example:
Configuration of the coordinator's identity provider

```
coordinator:  
  web:  
    auth:  
      type: <your-auth-type>  
  ...  

```

The identity provider configuration file can be embedded in your `values-overrides.yaml`. To do this, use the `ssoFile` option and provide the JSON content constructed per the instructions linked above. Here is an example for Microsoft Entra ID:
Configuration of an embedded identity provider file with an example for Microsoft Entra ID

```
coordinator:  
  web:  
    auth:  
      enabled: true  
      type: "azuread"  
      ssoFile: |  
      {  
        "oAuthConfig": {  
          "clientId": "<your-client-id>",  
          "clientSecret": "<your-secret>",  
          "redirectUrl": "<your-redirect-url>",  
          "authorityUrl": "https://login.microsoftonline.com/<your-tenant-id>/v2.0",  
          "scope": "openid profile",  
          "jwtClaims": {  
            "userName": "<your-preferred-username>"  
          }  
        }  
      }  
  ...  

```

For examples for the other types, see [Identity Providers](/security/authentication/identity-providers)
This is not the only configuration file that can be embedded inside the `values-overrides.yaml` file. However, these are generally used for advanced configurations. For more information, see Additional Configuration.
#### Transport Level Security​
Optionally enable the desired level of Transport Level Security (TLS) by setting `enabled: true` for client, Arrow Flight, or web TLS. To provide the TLS secret, see Creating a TLS Secret.
Add this configuration under the parent, as shown in the following example:
Configuration of TLS for the coordinator

```
coordinator:  
  client:  
    tls:  
      enabled: false  
      secret: <your-tls-secret>  
  flight:  
    tls:  
      enabled: false  
      secret: <your-tls-secret>  
  web:  
    tls:  
      enabled: false  
      secret: <your-tls-secret>  
  ...  

```

If Web TLS is enabled, see Configuring Open Catalog when the Coordinator Web is Using TLS.
### Coordinator's Distributed Storage​
This is where Dremio stores metadata, Reflections, uploaded files, and backups. A distributed store is required for Dremio to be operational. The supported types are Amazon S3 or S3-compatible storage, Azure Storage, and Google Cloud Storage (GCS). For examples of configurations, see Configuring the Distributed Storage.
Add this configuration under the parent, as shown in the following example:
Configuration of the coordinator's distributed storage

```
distStorage:  
  type: "<your-dist-store-type>"  
  ...  

```

### Open Catalog​
The configuration for the Open Catalog has several options:
  * Configuring storage for the Open Catalog is mandatory since this is the location where Iceberg tables created in the catalog will be written. For configuring the storage, see Configuring Storage for the Open Catalog.
Add this configuration under the parent, as shown in the following example:
Configuration of storage for the Open Catalog

```
catalog:  
  storage:  
    location:  # single value or list of values  
    type: # S3, azure, or GCS   
  ...  

```

  * (Optional) MongoDB is the backing store for Open Catalog. Its backup is enabled by default. This backup is written to distributed storage. Open Catalog backup can be disabled by setting enabled to false. The configuration shown here performs an automatic Open Catalog backup every day at midnight, and keeps the last three backups.
Enablement of the Open Catalog Backing Store Backup

```
mongodb:  
  backup:  
    enabled: true  
    schedule: "0 0 * * *"  
    keep: 3  

```

  * (Optional) Configure external access if you want to connect to the Open Catalog with an engine other than Dremio that supports Iceberg REST. For example, Spark.
Add this configuration under the parent, as shown in the following example:
Configuration of external access for the Open Catalog

```
catalog:  
  externalAccess:  
    enabled: true  
  ...  

```

  * (Optional) Use Transport Level Security (TLS) for external access to require clients connecting to the Open Catalog from outside the namespace to use TLS. To configure it, see Configuring TLS for Open Catalog External Access.
Add this configuration under the parent, as shown in the following example:
Configuration of TLS for external access to the Open Catalog

```
catalog:  
  externalAccess:   
    enabled: true  
    tls:  
      enabled: true  
      secret: <your-catalog-tls-secret>  
  ...  

```

  * (Optional) If Dremio coordinator web access is using TLS, additional configuration is necessary. To configure it, see Configuring Open Catalog When the Coordinator Web is Using TLS.
Add this configuration under the parent, as shown in the following example:
Configuration of the Open Catalog when the coordinator web access is using TLS

```
catalog:  
  externalAccess:  
    enabled: true  
    authentication:  
      authServerHostname: <your-auth-server-host>  
  ...  

```



Save the `values-overrides.yaml` file.
Once done with the configuration, deploy Dremio to Kubernetes. See how in the topic [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes).
## Configuring Your Values - Advanced​
### OpenShift​
OpenShift has additional prerequisites that must be applied before installing Dremio. For more information, see [Deploy on Kubernetes - Prerequisites](/deploy-dremio/deploy-on-kubernetes).
To deploy successfully on OpenShift, you must deploy with two override files. The YAML file you've been using to this point (`values-overrides.yaml`), and an additional YAML file mentioned below (`openshift-overrides.yaml`) with security settings required by OpenShift per its default configuration. Both can be provided in a single Helm install command.
Get the `openshift-overrides.yaml` configuration file and save it locally. Click here to download the file.
### Dremio Platform Images​
The Dremio platform requires 18 images when running fully featured. All images are published by Dremio to our Quay and are listed below. If you want to use a private mirror of our repository, add the snippets below to `values-overrides.yaml` to repoint to your own.
Dremio Platform Images
If creating a private mirror, use the same repository names and tags from 

```
dremio:  
  image:  
    repository: quay.io/dremio/dremio-enterprise  
    tag: <the-image-tag-from-quayio>  

```


```
busyBox:  
  image:  
    repository: quay.io/dremio/busybox  
    tag: <the-image-tag-from-quayio>  

```


```
k8s:  
  image:  
    repository: quay.io/dremio/alpine/k8s  
    tag: <the-image-tag-from-quay-io>  

```


```
engine:  
  operator:  
    image:  
      repository: quay.io/dremio/dremio-engine-operator  
      tag: <the-image-tag-from-quay-io>  

```


```
zookeeper:  
  image:  
    repository: quay.io/dremio/zookeeper  
    tag: <the-image-tag-from-quay-io>  

```


```
opensearch:  
  image:  
    repository: quay.io/dremio/dremio-search-opensearch  
    tag: <the-image-tag-from-quay-io> # The tag version must be a valid OpenSearch version as listed here https://opensearch.org/docs/latest/version-history/  
  preInstallJob:  
    image:  
      repository: quay.io/dremio/dremio-search-init  
      tag: <the-image-tag-from-quay-io>  

```


```
opensearchOperator:  
  manager:  
    image:  
      repository: quay.io/dremio/dremio-opensearch-operator  
      tag: <the-image-tag-from-quay-io>  
  kubeRbacProxy:  
    image:  
      repository: quay.io/dremio/kubebuilder/kube-rbac-proxy  
      tag: <the-image-tag-from-quay-io>  

```


```
mongodbOperator:  
  image:  
    repository: quay.io/dremio/dremio-mongodb-operator  
    tag: <the-image-tag-from-quay-io>  

```


```
mongodb:  
  image:  
    repository: quay.io/dremio/percona/percona-server-mongodb  
    tag: <the-image-tag-from-quay-io>  

```


```
catalogservices:  
  image:  
    repository: quay.io/dremio/dremio-catalog-services-server  
    tag: <the-image-tag-from-quay-io>  

```


```
catalog:  
  image:  
    repository: quay.io/dremio/dremio-catalog-server  
    tag: <the-image-tag-from-quay-io>  
  externaAccess:  
    image:  
      repository: quay.io/dremio/dremio-catalog-server-external  
      tag: <the-image-tag-from-quay-io>  

```


```
nats:  
  container:  
    image:  
      repository: quay.io/dremio/nats  
      tag: <the-image-tag-from-quay-io>  
  reloader:  
    image:  
      repository: quay.io/dremio/natsio/nats-server-config-reloader  
      tag: <the-image-tag-from-quay-io>  
  natsBox:  
    container:  
      image:  
        repository: quay.io/dremio/natsio/nats-box  
        tag: <the-image-tag-from-quay-io>  

```


```
telemetry:  
  image:  
    repository: quay.io/dremio/otel/opentelemetry-collector-contrib  
    tag: <the-image-tag-from-quay-io>  

```

### Scale-out Coordinators​
Dremio can scale to support high-concurrency use cases through scaling coordinators. Multiple stateless coordinators rely on the primary coordinator to manage Dremio's state, enabling Dremio to support many more concurrent users. These scale-out coordinators are intended for high query throughput and are not applicable for standby or disaster recovery. While scale-out coordinators generally reduce the load on the primary coordinator, the primary coordinator's vCPU request should be increased for every two scale-outs added to avoid negatively impacting performance.
Perform this configuration in this section of the file, where count refers to the number of scale-outs. A count of 0 will provision only the primary coordinator:
Configuration of scale-out coordinators with an example value

```
coordinator:  
  count: 1  
  ...  

```

When using scale-out coordinators, the load balancer session affinity should be enhanced. See: Advanced Load Balancer Configuration.
### Configuring Kubernetes Pod Metadata (including Node Selector)​")
It's possible to add metadata both globally and to each of the StatefulSets (coordinators, classic engines, ZooKeeper, etc.), including configuring a node selector for pods to use specific node pools.
Define these values with caution and foreknowledge of expected entries because any misconfiguration may result in Kubernetes being unable to schedule your pods.
Use the following options to add metadata:
  * `labels:` - Configured using key-value pairs as shown in the following examples:
Configuration of a global label with a key-value example

```
labels:  
  foo: bar  

```

Configuration of a StatefulSet label for the Open Catalog with a key-value example

```
catalog:  
  labels:  
    foo: bar  
  ...  

```

For more information on labels, see the Kubernetes documentation on 
  * `annotations:` - Configured using key-value pairs as shown in the following examples.
Configuration of a global annotation with a key-value example

```
annotations:  
  foo: bar  

```

Configuration of a StatefulSet annotation for MongoDB with a key-value example

```
mongodb:  
  annotations:  
    foo: bar  
  ...  

```

For more information on annotations, see the Kubernetes documentation on 
  * `tolerations:` - Configured using a specific structure as shown in the following examples:
Configuration of a global toleration with example values

```
tolerations:  
- key: "key1"  
  operator: "Equal"  
  value: "value1"  
  effect: "NoSchedule"  

```

Configuration of a StatefulSet toleration for the Open Catalog with example values

```
catalog:  
  tolerations:  
  - key: "key1"  
    operator: "Equal"  
    value: "value1"  
    effect: "NoSchedule"  
  ...  

```

For more information on tolerations, see the Kubernetes documentation on 
  * `nodeSelector:` - Configured using a specific structure as shown in the following examples.
Configuration of a global node selector with an example value

```
nodeSelector:  
  nodetype: coordinator  

```

Configuration of a StatefulSet node selector for the coordinator with an example value

```
coordinator:  
  nodeSelector:  
    nodetype: coordinator  
  ...  

```



To understand the structure and values to use in the configurations, expand "Metadata Structure and Values" below:
Metadata Structure and Values
For global metadata:
Global metadata structure 

```
annotations: {}  
labels: {}  
tolerations: []  
nodeSelector: {}  

```

For StatefulSet metadata:
StatefulSet metadata structure for the coordinator

```
coordinator:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:   
    nodetype: coordinator      

```

StatefulSet metadata structure for the executors

```
executor:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: coordinator  

```

StatefulSet metadata structure for the Open Catalog

```
catalog:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: catalog  

```

StatefulSet metadata structure for the Open Catalog services

```
catalogservices:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: catalogservices  

```

StatefulSet metadata structure for MongoDB

```
mongodb:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: mongo  

```

StatefulSet metadata structure for OpenSearch

```
opensearch:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: operators  
  oidcProxy:  
    annotations: {}  
    labels: {}  
    tolerations: []  
    nodeSelector:  
      nodeType: utils  
  preInstallJob:  
    annotations: {}  
    labels: {}  
    tolerations: []  
    nodeSelector:  
      nodeType: jobs  

```

StatefulSet metadata structure for NATS

```
nats:  
  podTemplate:  
    merge:  
      spec:  
        annotations: {}  
        labels: {}  
        tolerations: []  
        nodeSelector:  
          nodetype: nats  

```

StatefulSet metadata structure for the MongoDB operator

```
mongodbOperator:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: operators  

```

StatefulSet metadata structure for the OpenSearch operator

```
opensearchOperator:  
  annotations: {}  
  labels: {}  
  tolerations: []  
  nodeSelector:  
    nodetype: operators  

```

### Configuring Pods Priority​
You can configure the priority of Dremio pods through priority classes. First, define the priority class, as shown in the following example:
Definition of a `high-priority` priority class

```
apiVersion: scheduling.k8s.io/v1  
kind: PriorityClass  
metadata:  
  name: high-priority  
value: 1000000  
globalDefault: false  
description: "This priority class should be used for coordinator pods only."  

```

Then, apply the priority class under the parents, as shown in the following example:
Configuration of the `high-priority` priority class for the coordinator

```
coordinator:  
  priorityClassName: high-priority  

```

To understand the structure and values to use in the configurations, expand "Priority Class Configuration Structure and Values" below:
Priority Class Configuration Structure and Values
Priority class configuration for the coordinator

```
coordinator:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for the Open Catalog

```
catalog:  
  priorityClassName: <your-priority-class-name>  
  externalAccess:  
    priorityClassName: <your-priority-class-name>  

```

Priority class configuration for the Open Catalog services

```
catalogservices:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for the engine

```
engine:  
  executor:  
    priorityClassName: <your-priority-class-name>  
  operator:  
    priorityClassName: <your-priority-class-name>  

```

Priority class configuration for OpenSearch

```
opensearch:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for the OpenSearch operator

```
opensearchOperator:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for MongoDB

```
mongodb:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for the MongoDB hooks

```
mongodbHooks:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for NATS

```
nats:  
  podTemplate:  
    merge:  
      spec:  
        priorityClassName: <your-priority-class-name>  
  natsBox:  
    podTemplate:  
      merge:  
        spec:  
          priorityClassName: <your-priority-class-name>  

```

Priority class configuration for ZooKeeper

```
zookeeper:  
  priorityClassName: <your-priority-class-name>  

```

Priority class configuration for telemetry

```
telemetry:  
  priorityClassName: <your-priority-class-name>  

```

To verify which priority class is applied to each pod, run the command below, and check the `PRIORITY_CLASS` column:
Run kubectl to list the pods and their priority class

```
kubectl get pods -o custom-columns="NAME:.metadata.name,PRIORITY_CLASS:.spec.priorityClassName" -n dremio  

```

### Configuring Extra Environment Variables​
Optionally, you can define extra environment variables to be passed to either coordinators or executors. This can be done by adding the configuration under the parents as shown in the following examples:
Configuration of extra environment variables for the coordinator

```
coordinator:  
  extraEnvs:  
    - name: <your-variable-name>  
      value: "<your-variable-value>"  
  ...  

```

Configuration of extra environment variables for the executors

```
executor:  
  extraEnvs:  
    - name: <your-variable-name>  
      value: "<your-variable-value>"  
  ...  

```

Environment variables defined as shown will be applied to Executors of both Classic Engines and [New Engines](/deploy-dremio/managing-engines-kubernetes).
### Advanced Load Balancer Configuration​
Dremio will create a public load balancer by default, and the Dremio Client service will provide an external IP to connect to Dremio. For more information, see [Connecting to the Dremio Console](/deploy-dremio/deploy-on-kubernetes).
  * **Private Cluster** - For private Kubernetes clusters (no public endpoint), set `internalLoadBalancer: true`. Add this configuration under the parent as shown in the following example:
Configuration of an internal load balancer

```
service:  
  type: LoadBalancer  
  internalLoadBalancer: true  
  ...  

```

  * **Static IP** - To define a static IP for your load balancer, set `loadBalancerIP: <your-static-IP>`. If unset, an available IP will be assigned upon creation of the load balancer. Add this configuration under the parent as shown in the following example:
Configuration of a static IP for the load balancer

```
service:  
  type: LoadBalancer  
  loadBalancerIP: <your-desired-ip>  
  ...  

```

This can be helpful if DNS is configured to expect Dremio to have a specific IP.
  * **Session Affinity** - If leveraging scale-out coordinators, set this to `ClientIP`, otherwise leave unset. Add this configuration under the parent as shown in the following example:
Configuration of session affinity for scale-out coordinators

```
service:  
  type: LoadBalancer  
  sessionAffinity: ClientIP  
  ...  

```



#### Additional Load Balancer Configuration for Amazon EKS in Auto Mode​
If deploying Dremio to Amazon EKS (Elastic Kubernetes Service) in Auto Mode, you need to add service annotations for the load balancer to start (for more information, see 
Configuration of service annotations for Amazon EKS in Auto Mode

```
service:  
  type: LoadBalancer  
  annotations:  
    service.beta.kubernetes.io/aws-load-balancer-scheme: internet-facing  
  ...  

```

### Advanced TLS Configuration for OpenSearch​
Dremio generates Transport Level Security (TLS) certificates by default for OpenSearch, and they are rotated monthly. However, if you want to have your own, you need to create two secrets containing the relevant certificates. The format of the secrets is different from the other TLS secrets shown on this page, and the `tls.crt`, `tls.key`, and `ca.crt` files must be in PEM format. Use the example below as a reference to create your secrets:
Run kubetcl to create two secrets for your own TLS certificates for OpenSearch

```
kubectl create secret generic opensearch-tls-certs \  
  --from-file=tls.crt --from-file=tls.key --from-file=ca.crt  
  
kubectl create secret generic opensearch-tls-certs-admin \  
  --from-file=tls.crt --from-file=tls.key --from-file=ca.crt  

```

Add the snippet below to the `values-overrides.yaml` file before deploying Dremio. Because OpenSearch requires TLS, if certificate generation is disabled, you must provide a certificate.
Configuration of TLS certificates for OpenSearch

```
opensearch:  
  tlsCertsSecretName: <opensearch-tls-certs>  
  disableTlsCertGeneration: true  
 ...  

```

### Advanced Configuration of Engines​
Dremio's default resource offset is `reserve-2-8`, where the first value represents 2 vCPUs and the second represents 8 GB of RAM. If you need to change this default for your created engines, add the following snippet to `values-overrides.yaml` and set the `defaultOffset` to one of the configurable offsets listed below, which are available out of the box:
  * `reserve-0-0`
  * `reserve-2-4`
  * `reserve-2-8`
  * `reserve-2-16`


The listed values are keys and thus must be provided in this exact format in the snippet below.
Configuration of the default resource offset for engines with an example value

```
engine:  
  options:  
    resourceAllocationOffsets:  
      defaultOffset: reserve-2-8  
  ...  

```

#### Extra Java Start Options​
Some specialized use cases require additional Java start options or modifications to the default configuration, such as the settings for HDFS keytabs or heap management. These options apply to all engines, and the following example shows how to add them:
Configuration of extra Java start options for engines

```
engine:  
  options:  
    javaOptions:  
    - name: "NumberOfGCLogFiles"  
      pattern: "-XX:NumberOfGCLogFiles=%s"  
      valueMatcher: "^[1-9][0-9]*$"  
      defaultValue: "5"  
      applyByDefault: true  
    - name: "GCLogFileSize"  
      pattern: "-XX:GCLogFileSize=%s"  
      valueMatcher: "^[1-9][0-9]*[kKmMgG]$"  
      defaultValue: "4000k"  
      applyByDefault: true  

```

### Configuration of Classic Engines​
  * You should only use classic engines if the new ones introduced in Dremio 26.0 are not appropriate for your use case. Classic and new engines are not intended to be used side by side.
  * Classic engines will not auto-start/auto-stop, which is only possible with the new engines.


The classic way of configuring engines is still supported, and you can add this snippet to `values-overrides.yaml` as part of the deployment. Note that this snippet is a configuration example, and you should adjust the values to your own case.
Configuration of classic engines with example values

```
executor:  
  resources:  
    requests:  
      cpu: "16"  
      memory: "120Gi"  
    limits:  
      memory: "120Gi"  
  engines: ["default"]  
  count: 3  
  volumeSize: 128Gi  
  cloudCache:  
    enabled: true  
    volumes:  
      - size: 128Gi  
  ...  

```

#### Engine Overrides​
Engine overrides are primarily used in conjunction with classic engines to modify the configuration of one or more named engines. By default, every engine inside the `engines` list under `executor` will be the same. The values set under `executor` act as the default for all engines. Thus, the engine overrides do not need to be exhaustive.
Configuration of overrides for an engine named 'small'

```
engineOverride:  
 small:  
   cpu: "8"  
   memory: "60Gi"  
   count: 2  
   cloudCache:  
     enabled: false  

```

Engine overrides can also be used with the new engines, but only to disable the Cloud Columnar Cache (C3) option. C3 is enabled by default on all new engines, but you can choose to disable it if needed.
### Telemetry​
[Telemetry](/admin/service-telemetry-kubernetes) egress is enabled by default. These metrics provide visibility into various components and services, ensuring optimal performance and reliability. To disable egress, add the following to your `values-override.yaml`:
Configuration to disable telemetry

```
telemetry:  
  enabled: false  
  ...  

```

### Logging​
By default, Dremio enables logging with a pre-defined volume size, which you can check in the `values.yaml` file by downloading Dremio's Helm chart. To override the default configuration, add the following to your `values-overrides.yaml`:
Configuration of logging

```
dremio:  
  log:  
    enabled: true  
    volume:  
      size: 10Gi  
      storageClass: ""  
  ...  

```

### Disabling Parts of the Deployment​
You can disable some components of the Dremio platform if their functionality does not pertain to your use case. Dremio's functionality will continue to work if any of these components described in this section are disabled.
#### Semantic Search​
To disable Semantic Search, add this configuration under the parent as shown in the following example:
Configuration to disable Semantic Search

```
opensearch:  
  enabled: false  
  replicas: 0  

```

### Configure a Custom Cluster DNS Domain​
If you are using a custom Kubernetes cluster DNS domain, you need to set the custom DNS for Dremio. By default, Dremio uses `cluster.local`. To override the default configuration, add the following to your `values-overrides.yaml`:
Configuration of custom DNS

```
cluster:  
  domain: custom.domain  

```

For the given DNS pattern, the example custom domain will result in the following: `[pod].[service].[namespace].svc.custom.domain`
## Additional Configuration​
Dremio has several configuration and binary files to define the behavior for enabling authentication via an identity provider, logging, connecting to Hive, etc. During the deployment, these files are combined and used to create a `values-override.yaml` configuration file.
To inspect Dremio's configuration files or perform a more complex operation not shown here, see Downloading Dremio's Helm Charts.
### Additional Config Files​
Use the `configFiles` option to add configuration files to your Dremio deployment. You can add multiple files, each of which is a key-value pair. The key is the file name, and the value is the file content. These can be TXT, XML, or JSON files. For example, here is how to embed the configuration for Hashicorp Vault, followed by a separate example file:
Configuration of additional configuration files with example JSONs

```
dremio:  
  configFiles:  
    vault_config.json: |  
      {  
        "vaultUrl": "https://your-vault.com",  
        "namespace": "optional/dremio/global/vault/namespace",  
        "auth": {  
          "kubernetes": {  
            "vaultRole": "dremio-vault-role",  
            "serviceAccountJwt": "file:///optional/custom/path/to/serviceAccount/jwt",  
            "loginMountPath": "optional/custom/kubernetes/login/path"  
          }  
        }  
      }  
    another_config.json: |  
      {  
        "key-in-this-file": "content-of-this-key"  
      }  
  ...  

```

### Additional Config Variables​
Use the `dremioConfExtraOptions` option to add new variables to your Dremio deployment. For example, here is how to enable Transport Layer Security (TLS) between executors and coordinators, leveraging auto-generated self-signed certificates.
Configuration of additional configuration variables with an example to enable TLS

```
dremio:  
  dremioConfExtraOptions:  
    "services.fabric.ssl.enabled": true  
    "services.fabric.ssl.auto-certificate.enabled": true  
  ...  

```

### Additional Java Truststore​
Use the `trustStore` option under `advancedConfigs` to provide the password and content of a Java truststore file. The content must be base64-encoded. To extract the encoded content, you can use `cat truststore.jks | base64`. Add this configuration under the parents as shown in the following example:
Configuration of an additional Java truststore with a truststore password

```
dremio:  
  advancedConfigs:  
    trustStore:  
      enabled: true  
      password: "<your-truststore-password>"  
      binaryData: "base64EncodedBinaryContent"  

```

### Additional Config Binary Files​
Use the `configBinaries` option to provide binary configuration files. Provided content must be base64-encoded. Add this configuration under the parents as shown in the following example:
Configuration of additional binary configuration files

```
dremio:    
  configBinaries:  
    custom-binary.conf: "base64EncodedBinaryContent"  
  ...  

```

### Hive​
Use the `hive2ConfigFiles` option to configure Hive 2. Add this configuration under the parents as shown in the following example:
Configuration of Hive 2 with an example for the `hive-site.xml` file

```
dremio:  
  hive2ConfigFiles:  
    hive-site.xml: |  
      <?xml version="1.0" encoding="UTF-8"?>  
      <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>  
      <configuration>  
        <property>  
          <n>hive.metastore.uris</n>  
          <value>thrift://hive-metastore:9083</value>  
        </property>  
      </configuration>  
  ...  

```

Use the `hive3ConfigFiles` option to configure Hive 3. Add this configuration under the parents as shown in the following example:
Configuration of Hive 3 with an example for the `hive-site.xml` file

```
dremio:  
  hive3ConfigFiles:  
    hive-site.xml: |  
      <?xml version="1.0" encoding="UTF-8"?>  
      <?xml-stylesheet type="text/xsl" href="configuration.xsl"?>  
      <configuration>  
        <property>  
          <n>hive.metastore.uris</n>  
          <value>thrift://hive3-metastore:9083</value>  
        </property>  
      </configuration>  
  ...  

```

### PostgreSQL​
Dremio offers an option to authenticate with PostgreSQL databases using Kerberos. This approach uses Java's JAAS framework to consume credentials from a Kerberos ticket cache. See [Kerberos Authentication for PostgreSQL](/data-sources/databases/postgres).
## References​
### Recommended Resources Configuration​
The table in this section contains the recommended values for resources requests and volume size to configure Dremio components. In the `values-overrides.yaml` file, set the following values:
Configuration of resources in Dremio components

```
  resources:  
    requests:  
      memory: # Refer to the Memory column in the tables below for recommended values  
      cpu: # Refer to the CPU column in the tables below for recommended values  
  volumeSize: # Refer to the Volume Size column in the tables below for recommended values  

```

Dremio recommends the following configuration values:
  * Production Configuration
  * Minimal Configuration


Dremio recommends the following configuration values to operate in a production environment:  
| Dremio Component  | Memory  | CPU  | Volume Size  | Pod Count  |  
| --- | --- | --- | --- | --- |  
| Coordinator  | 64Gi  | 32  | 512Gi  | 1  |  
| Catalog Server  | 8Gi  | 4  | -  | 1  |  
| Catalog Server (External)  | 8Gi  | 4  | -  | 1  |  
| Catalog Service Server  | 8Gi  | 4  | -  | 1  |  
| Engine Operator  | 1Gi  | 1  | -  | 1  |  
| OpenSearch  | 16Gi  | 2  | 100Gi  | 3  |  
| MongoDB  | 4Gi  | 8  | 512Gi1  | 3  |  
| NATS  | 1Gi  | 700m  | -  | 3  |  
| ZooKeeper  | 1Gi  | 500m  | -  | 3  |  
| Open Telemetry  | 1Gi  | 1  | -  | 1  |  
| M Engine  | 120Gi  | 16  | 521Gi  | 4  |  
1 You can use a smaller volume size if you do not heavily use Iceberg.
The following configuration will deploy a functional Dremio Platform, sized to fit onto a more modest cluster. It is appropriate for a single user to check out Dremio's various features, leveraging our sample data set. For any multi-user and performance-oriented evaluation, the Production Configuration should be used.  
| Dremio Component  | Memory  | CPU  | Volume Size  | Pod Count  |  
| --- | --- | --- | --- | --- |  
| Coordinator  | 8Gi  | 2  | 20Gi  | 1  |  
| Catalog Server  | 1Gi  | 1  | -  | 1  |  
| Catalog Server (External)  | 1Gi  | 1  | -  | 1  |  
| Catalog Service Server  | 1Gi  | 1  | -  | 1  |  
| Engine Operator  | 1Gi  | 1  | -  | 1  |  
| OpenSearch  | 3Gi  | 1500m  | 10Gi  | 3  |  
| MongoDB  | 1Gi  | 1  | 10Gi  | 3  |  
| NATS  | 1Gi  | 700m  | -  | 3  |  
| ZooKeeper  | 1Gi  | 500m  | -  | 1  |  
| Open Telemetry  | 1Gi  | 1  | -  | 1  |  
| XS Engine  | 8Gi  | 2  | 20Gi  | 1  |  
Expand the widget below for Dremio platform components resource YAML snippets:
Dremio Platform Resource Configuration YAML
Coordinator

```
coordinator:  
  resources:  
    requests:  
      cpu: "32"  
      memory: "64Gi"  
    limits:  
      memory: "64Gi"  
  volumeSize: "512Gi"  

```

Catalog Server

```
catalog:  
  requests:  
    cpu: "4"  
    memory: "8Gi"  
  limits:  
    cpu: "4"  
    memory: "8Gi"  

```

Catalog Service Server

```
catalogservices:  
  resources:  
    requests:  
      cpu: "4"  
      memory: "8Gi"  
    limits:  
      cpu: "4"  
      memory: "8Gi"  

```

OpenSearch

```
opensearch:  
  resources:  
    requests:  
      memory: "16Gi"  
      cpu: "2"  
    limits:  
      memory: "16Gi"  
      cpu: "2"  

```

MongoDB

```
mongodb:  
  resources:  
    requests:  
      cpu: "2"  
      memory: "2Gi"  
    limits:  
      cpu: "4"  
      memory: "2Gi"  
  storage:  
    resources:  
      requests:  
        storage: "512Gi"  

```

NATS

```
nats:  
  resources:  
    requests:  
      cpu: "500m"  
      memory: "1024Mi"  
    limits:  
      cpu: "750m"  
      memory: "1536Mi"  

```

ZooKeeper

```
zookeeper:  
  resources:  
    requests:  
      cpu: "500m"  
      memory: "1Gi"  
    limits:  
      memory: "1Gi"  
  volumeSize: "10Gi"  

```

Open Telemetry

```
telemetry:  
  resources:  
    requests:  
      cpu: "1"  
      memory: "1Gi"  
    limits:  
      cpu: "2"  
      memory: "2Gi"  

```

### Creating a TLS Secret​
If you have enabled Transport Layer Security (TLS) in your `values-overrides.yaml`, the corresponding secrets must be created before deploying Dremio. To create a secret, run the following command:
Run kubectl to create a TLS secret

```
kubectl create secret tls <your-tls-secret-name> --key privkey.pem --cert cert.pem  

```

For more information, see 
TLS for OpenSearch requires a secret of a different makeup. See Advanced TLS Configuration for OpenSearch.
### Configuring the Distributed Storage​
Dremio’s distributed store uses scalable and fault-tolerant storage, and it is configured as follows:
  1. In the `values-overrides.yaml` file, find the section with `distStorage:` and `type:`
Configuration of the distributed storage

```
distStorage:  
  type: "<your-dist-store-type>"  
  ...  

```

  2. In `type:`, configure your storage provider with one of the following values:
     * `"aws"` - For Amazon S3 or S3-compatible storage.
     * `"azureStorage"` - For Azure Storage.
     * `"gcp"` - For Google Cloud Storage (GCS) in Google Cloud Platform (GCP).
  3. Select the tab below for the storage provider you chose in step 2, and follow the example to configure your distributed storage:


Distributed storage is also used to store Open Catalog backups. You may be required to provide two authentication methods to enable storage of these backups.
  * Amazon S3 and S3-Compatible
  * Azure Storage
  * Google Cloud Storage


For Amazon S3 and S3-compatible, select the tab below for your type of authentication:
Only one authentication method should be uncommented in your YAML configuration. Do not mix multiple authentication methods (such as `metadata`, `accessKeySecret`, or `awsProfile`) in the same configuration. Using multiple authentication methods simultaneously will cause configuration errors and prevent Dremio from starting correctly.
  * Metadata
  * Access Key
  * AWS Profile
  * EKS Pod Identity


Dremio uses the Identity and Access Management (IAM) role to retrieve the credentials to authenticate. Metadata is only supported in Amazon Web Services Elastic Kubernetes Service (AWS EKS) and requires that the EKS worker node IAM role is configured with sufficient access rights.
Add the configuration under the parent as shown in the following example:
Metadata authentication for the distributed storage

```
distStorage:  
  type: "aws"  
  aws:  
    bucketName: "<your-bucket-name>"  
    path: "/"  
    authentication: "metadata"  
    region: "<your-bucket-region>"  
    #  
    # Extra Properties  
    # Use the extra properties block to provide additional parameters  
    # to configure the distributed storage in the generated core-site.xml file.  
    #  
    #extraProperties: |  
    #  <property>  
    #    <name>the-property-name</name>  
    #    <value>the-property-value</value>  
    #  </property>  

```

Where:
  * `bucketName` - The name of your S3 bucket for distributed storage.
  * `path` - The path relative to your bucket to create Dremio's directories.
  * `authentication` - Set as `"metadata"`.
  * `region` - The AWS region in which your bucket resides. Required even if using S3-compatible.
  * `extraProperties` - Additional parameters to configure the distributed storage in the generated `core-site.xml` file. Important for S3-compatible and customer-managed KMS encryption.


Dremio uses a configured Amazon Web Services (AWS) Access Key and Secret to authenticate.
Add the configuration under the parent as shown in the following example:
Access Key authentication for the distributed storage

```
distStorage:  
  type: "aws"  
  aws:  
    bucketName: "<your-bucket-name>"  
    path: "/"  
    authentication: "accessKeySecret"  
    region: "<your-bucket-region>"  
    #endpoint: "https://example.com"  
    #tls: true  
    credentials:  
      accessKey: "<your-access-key>"  
      secret: "<your-access-key-secret>"  
    #  
    # Extra Properties  
    # Use the extra properties block to provide additional parameters   
    # to configure the distributed storage in the generated core-site.xml file.  
    #  
    #extraProperties: |  
    #  <property>  
    #    <name>the-property-name</name>  
    #    <value>the-property-value</value>  
    #  </property>  

```

Where:
  * `bucketName` - The name of your S3 bucket for distributed storage.
  * `path` - The path relative to your bucket to create Dremio's directories.
  * `authentication` - Set as `"accessKeySecret"`.
  * `region` - The AWS region in which your bucket resides. Required even if using S3-compatible.
  * `endpoint` - The endpoint if you're using S3-compatible storage. Used for MongoDB backups. It must also be specified in extraProperties.
  * `tls` - Enable/disable TLS verification on S3-compatible storage. Used for MongoDB backups. It must also be specified in extraProperties.
  * `credentials` - The credentials configuration: 
    * `accessKey` - Your AWS access key ID.
    * `secret` - Your AWS access key secret.
  * `extraProperties` - Additional parameters to configure the distributed storage in the generated `core-site.xml` file. Important for S3-compatible and customer-managed KMS encryption.


Dremio uses the default Amazon Web Services (AWS) profile to retrieve the credentials to authenticate.
You need to add an AWS Access Key to store Open Catalog backups.
Add the configuration under the parent as shown in the following example:
AWS profile authentication for the distributed storage

```
distStorage:  
  type: "aws"  
  aws:  
    bucketName: "<your-bucket-name>"  
    path: "/"  
    authentication: "awsProfile"  
    region: "<your-bucket-region>"  
    #endpoint: "https://example.com"  
    #tls: true  
    credentials:  
      awsProfileName: "default"  
      #accessKey: "<your-access-key>" for Open Catalog Backup  
      #secret: "<your-access-key-secret>" for Open Catalog Backup  
    #  
    # Extra Properties  
    # Use the extra properties block to provide additional parameters to configure the distributed  
    # storage in the generated core-site.xml file.  
    #  
    #extraProperties: |  
    #  <property>  
    #    <name>the-property-name</name>  
    #    <value>the-property-value</value>  
    #  </property>  

```

Where:
  * `bucketName` - The name of your S3 bucket for distributed storage.
  * `path` - The path relative to your bucket to create Dremio's directories.
  * `authentication` - Set as `"awsProfile"`.
  * `region` - The AWS region your bucket resides in. Required even if using S3-compatible.
  * `endpoint` - The endpoint if you're using S3-compatible storage. Used for MongoDB backups. It must also be specified in extraProperties.
  * `tls` - Enable/disable TLS verification on S3-compatible storage. Used for MongoDB backups. It must also be specified in extraProperties.
  * `credentials` - The credentials configuration: 
    * `awsProfileName` - Set as `"default"`.
    * `accessKey` - AWS access key ID for Open Catalog backup storage.
    * `secret` - AWS access key secret for Open Catalog backup storage.
  * `extraProperties` - Additional parameters to configure the distributed storage in the generated `core-site.xml` file. Important for S3-compatible and customer-managed KMS encryption.


EKS Pod Identities allow for Kubernetes service accounts to be associated with an IAM role. Dremio, in turn, can use this IAM role to retrieve the credentials to authenticate. As both the coordinators and engines require access to distributed storage, both of their `ServiceAccounts` must be associated with an IAM role with sufficient access rights. By default, their `ServiceAccounts` are `dremio-coordinator`, `dremio-engine-executor` for [New Engines](/deploy-dremio/managing-engines-kubernetes), and (optional) `dremio-executor` for Classic Engines.
Add the configuration under the parent as shown in the following example:
AWS profile authentication for the distributed storage

```
distStorage:  
  type: "aws"  
  aws:  
    bucketName: "<your-bucket-name>"  
    path: "/"  
    authentication: "podIdentity"  
    region: "<your-bucket-region>"  
    #  
    # Extra Properties  
    # Use the extra properties block to provide additional parameters to configure the distributed  
    # storage in the generated core-site.xml file.  
    #  
    #extraProperties: |  
    #  <property>  
    #    <name>the-property-name</name>  
    #    <value>the-property-value</value>  
    #  </property>  

```

Where:
  * `bucketName` - The name of your S3 bucket for distributed storage.
  * `path` - The path relative to your bucket to create Dremio's directories.
  * `authentication` - Set as `"podIdentity"`.
  * `region` - The AWS reigon your bucket resides. Required even if using S3-Compatible.
  * `extraProperties` - Additional parameters to configure the distributed storage in the generated `core-site.xml` file. Important for S3-compatible and customer-managed KMS encryption.


**Extra Properties**
Example extra properties for S3-compatible storage and for providing a customer-managed KMS key for an encrypted bucket.
S3-Compatible extra properties

```
extraProperties: |  
  <property>  
    <name>fs.s3a.endpoint</name>  
    <value>0.0.0.0</value>  
  </property>  
  <property>  
    <name>fs.s3a.path.style.access</name>  
    <value>true</value>  
  </property>  
  <property>  
    <name>dremio.s3.compat</name>  
    <value>true</value>  
  </property>  
  <property>  
    <name>fs.s3a.connection.ssl.enabled</name>  
    <value>false</value>  
  </property>  

```

Customer-managed KMS extra properties

```
extraProperties: |  
  <property>  
      <name>fs.s3a.connection.ssl.enabled</name>  
      <value>true</value>  
  </property>  
  <property>  
      <name>fs.s3a.server-side-encryption-algorithm</name>  
      <value>SSE-KMS</value>  
  </property>  
  <property>  
      <name>fs.s3a.server-side-encryption.key</name>  
      <value>KEY_ARN</value>  
  </property>  

```

For Azure Storage, select the tab below for your type of authentication:
  * Access Key
  * Entra ID


Dremio uses the configured Azure Storage account access key to authenticate.
Add the configuration under the parent as shown in the following example:
Access Key authentication for the distributed storage

```
distStorage:  
  type: "azureStorage"  
  azureStorage:  
    accountName: "<your-account-name>"  
    authentication: "accessKey"  
    filesystem: "<your-blob-container>"  
    path: "/"  
    credentials:  
      accessKey: "<your-access-key>"  
    #  
    # Extra Properties  
    # Use the extra properties block to provide additional parameters to configure the distributed  
    # storage in the generated core-site.xml file.  
    #  
    #extraProperties: |  
    #  <property>  
    #    <name>the-property-name</name>  
    #    <value>the-property-value</value>  
    #  </property>  

```

Where:
  * `accountName` - The name of your storage account.
  * `authentication` - Set as `"accessKey"`.
  * `filesystem` - The name of your blob container to use within the storage account.
  * `path` - The path relative to the filesystem to create Dremio's directories.
  * `credentials` - The credentials configuration: 
    * `accessKey` - Your Azure Storage account access key.
  * `extraProperties` - Additional parameters to configure the distributed storage in the generated `core-site.xml` file.


Dremio uses the configured Azure client ID (application ID), Microsoft Entra ID token endpoint, and Azure client secret (application password) to authenticate.
You need to add an Azure Access Key to store Open Catalog backups.
Add the configuration under the parent as shown in the following example:
Entra ID authentication for the distributed storage

```
distStorage:  
  type: "azureStorage"  
  azureStorage:  
    accountName: "<your-account-name>"  
    authentication: "entraID"  
    filesystem: "<your-blob-container>"  
    path: "/"  
    credentials:  
      clientId: "<your-application-client-id>"  
      tokenEndpoint: "<your-token-endpoint>"  
      clientSecret: "<your-client-secret>"  
      #accessKey: "<your-access-key>" for Open Catalog Backup.  
    #  
    # Extra Properties  
    # Use the extra properties block to provide additional parameters to configure the distributed  
    # storage in the generated core-site.xml file.  
    #  
    #extraProperties: |  
    #  <property>  
    #    <name>the-property-name</name>  
    #    <value>the-property-value</value>  
    #  </property>  

```

Where:
  * `accountName` - The name of your storage account.
  * `authentication` - Set as `"entraID"`.
  * `filesystem` - The name of your blob container to use within the storage account.
  * `path` - The path relative to the filesystem to create Dremio's directories.
  * `credentials` - The credentials configuration: 
    * `clientId` - Your Azure client ID (application ID).
    * `tokenEndpoint` - Your Microsoft Entra ID token endpoint.
    * `clientSecret` - Your Azure client secret (application password).
    * `accessKey` - Your access key for Open Catalog Backup.
  * `extraProperties` - Additional parameters to configure the distributed storage in the generated `core-site.xml` file.


**Extra Properties**
Example extra properties to configure the Azure Storage data source to access data on the Azure Government Cloud platform.
Azure Government Cloud endpoint extra properties

```
extraProperties: |  
  <property>  
      <name>fs.azure.endpoint</name>  
      <description>The azure storage endpoint to use.</description>  
      <value>dfs.core.usgovcloudapi.net</value>  
  </property>  

```

For Google Cloud Storage (GCS) in Google Cloud Platform (GCP), select the tab below for your type of authentication:
  * Automatic
  * Service Account


Dremio uses Google Application Default Credentials to authenticate. This is platform-dependent and may not be available in all Kubernetes clusters.
You need to add a service account key to store Open Catalog backups.
Add the configuration under the parent as shown in the following example:

```
distStorage:  
  type: "gcp"  
  gcp:  
    bucketName: "<your-bucket-name>"  
    path: "/"  
    authentication: "auto"  
    #credentials: for Open Catalog backup.  
    # clientEmail: "<your-email-for-the-service-account>"  
    # privateKey: |-  
    #    -----BEGIN PRIVATE KEY-----\n <your-full-private-key-value> \n-----END PRIVATE KEY-----\n  

```

Where:
  * `bucketName` - The name of your GCS bucket for distributed storage.
  * `path` - The path relative to the bucket to create Dremio's directories.
  * `authentication` - Set as `"auto"`.
  * `credentials` - The credentials configuration, for Open Catalog backup: 
    * `clientEmail` - Your email for the service account that has access to the GCS bucket, for Open Catalog backup.
    * `privateKey` - Your full private key value, for Open Catalog backup.


Dremio uses a JSON key file generated from the GCP console to authenticate.
Add the configuration under the parent as shown in the following example:

```
distStorage:  
  type: "gcp"  
  gcp:  
    bucketName: "<your-bucket-name>"  
    path: "/"  
    authentication: "serviceAccountKeys"  
    credentials:  
      projectId: "<your-project-id>"  
      clientId: "<your-client-id>"  
      clientEmail: "<your-email-for-the-service-account>"  
      privateKeyId: "<your-private-key-id>"  
      privateKey: |-  
        -----BEGIN PRIVATE KEY-----\n <your-full-private-key-value> \n-----END PRIVATE KEY-----\n  

```

Where:
  * `bucketName` - The name of your GCS bucket for distributed storage.
  * `path` - The path relative to your bucket to create Dremio's directories.
  * `authentication` - Set as `"serviceAccountKeys"`.
  * `credentials` - The credentials configuration: 
    * `projectId` - Your GCP Project ID that the GCS bucket belongs to.
    * `clientId` - Your Client ID for the service account that has access to the GCS bucket.
    * `clientEmail` - Your email for the service account that has access to the GCS bucket.
    * `privateKeyId` - Your private key ID for the service account that has access to GCS bucket.
    * `privateKey` - Your full private key value.


When using a GCS bucket on Google Kubernetes Engine (GKE), we recommend enabling **Workload Identity** and configuring a Kubernetes service account for Dremio with an associated workload identity that has access to the GCS bucket.
### Configuring Storage for the Open Catalog​
To use the Open Catalog, configure the storage settings based on your storage provider (for example, Amazon S3, Azure Storage, or Google Cloud Storage). This configuration is required to enable support for vended credentials and to allow access to the table metadata necessary for Iceberg table operations.
  1. In the `values-overrides.yaml` file, find the section to configure your storage provider under the parents, as shown in the following example:
Configuration of the storage for the Open Catalog

```
catalog:  
  storage:  
    location:  # single value or list of values  
    type: # S3, azure, or GCS   
  ...  

```

The `catalog.storage.location` property can be specified as a single Uniform Resource Identifier (URI) or as a list of URIs. When using a single storage location, all catalog folders will store their data under the same base URI. This is the simplest configuration and is appropriate when all your Iceberg tables can reside in a single bucket or storage path.
`catalog.storage.location` as a single URI

```
catalog:  
  storage:  
    location: s3://<your-bucket>/<your-folder>  

```

When using multiple storage locations, you can assign different catalog folders to different storage URIs. This allows you to separate data across URIs for organizational, compliance, or performance reasons — such as storing production and development data in separate buckets, or isolating data by region or business unit. A folder's storage URI must be a child path of one of the base URIs defined in the `catalog.storage.location` parameter of the Helm chart.
`catalog.storage.location` as a list of URIs

```
catalog:  
  storage:  
    location:  
      - s3://<your-bucket>/<your-folder>  
      - s3://<your-additional-bucket>/<your-folder>  

```

When configuring a list of URIs, the catalog base URI must be the first element, and it is immutable. For an existing cluster that needs additional storage locations, update the `catalog.storage.location` parameter list in Helm to include the additional locations and run a Helm upgrade. See [Multiple Storage Locations](/data-sources/open-catalog) for additional information.
  2. To configure it, select the tab for your storage provider, and follow the steps:
     * Amazon S3
     * S3-compatible
     * Azure Storage
     * Google Cloud Storage
To use the Open Catalog with Amazon S3, do the following:
    1. Configure the access to the storage, as described in [Configure Storage Access](/data-sources/open-catalog). Creating a Kubernetes secret may be required.
    2. Configure the Open Catalog in the `values-overrides.yaml` file as follows:
Configuration of the storage for the Open Catalog in Amazon S3

```
catalog:  
  storage:  
    location: s3://<your-bucket>/<your-folder>  
    type: S3  
    s3:  
      region: <bucket_region>  
      roleArn: <dremio_catalog_iam_role> // The role that was configured in the previous step  
      userArn: <dremio_catalog_user_arn> // The IAM user that was created in the previous step  
      externalId: <dremio_catalog_external_id> // The external id that was created in the previous step  
      useAccessKeys: false // Set it to true if you intend to use accessKeys.  
  ...  

```

    3. If using EKS Pod Identities, ensure the catalog's Kubernetes `ServiceAccount`, which is `dremio-catalog-server` by default, is associated with the `userArn` which you also provided above.
To use the Open Catalog with S3-compatible storage, do the following:
    1. Configure the access to the storage, as described in [Configure Storage Access](/data-sources/open-catalog). Creating a Kubernetes secret is required.
    2. For this step, select the tab for whether the S3-compatible storage has STS support or not, and follow the instructions:
       * Has STS support
       * No STS support
The Open Catalog uses STS as a mechanism to perform credentials vending, so configure Open Catalog in the `values-overrides.yaml` file as follows:
roleArn must be provided even when using S3-compatible storage. A dummy value is provided in the template below.
Configuration of the storage for the Open Catalog in S3-compatible with STS support

```
catalog:  
  storage:  
    location: s3://<your-bucket/<your-folder>  
    type: S3  
    s3:  
      region: <your-bucket-region> // Optional, bucket region  
      roleArn: arn:aws:iam::000000000000:role/catalog-access-role // Mandatory, a dummy role, as shown here, must be provided  
      endpoint: <s3-compatible-server-url> // This is the S3 server url, for example, http://<minio-host>:<minio-port> for MinIO  
      stsEndpoint: <s3-compatible-sts-server-url> // This is the STS server url, for example http://<minio-host>:<minio-port> for MinIO  
      pathStyleAccess: true // Mandatory to be true  
      useAccessKeys: true // Mandatory to be true  
  ...  

```

Vended credentials will not work, and, in such cases, you must select `Use master storage credentials` and in the Dremio console, and provide explicit access keys for external engines where they are required.
Once the Kubernetes secrets for the access keys have been created, configure the Open Catalog in the `values-overrides.yaml` file as follows:
roleArn must be provided even when using S3-compatible storage. A dummy value is provided in the template below.
Configuration of the storage for the Open Catalog in S3-compatible with no STS support

```
catalog:  
  storage:  
    location: s3://<your-bucket/<your-folder>  
    type: S3  
    s3:  
      region: <your-bucket-region> // Optional, bucket region  
      roleArn: arn:aws:iam::000000000000:role/catalog-access-role // Mandatory, a dummy role, as shown here, must be provided  
      endpoint: <s3-compatible-server-url> // This is the S3 server url, for example to MinIO http://<minio-host>:<minio-port  
      pathStyleAccess: true // Mandatory to be true  
      skipSts: true // Mandatory to be true  
      useAccessKeys: true // Mandatory to be true  
  ...  

```

To use the Open Catalog with Azure Storage, do the following:
    1. Configure the access to the storage, as described in [Configure Storage Access](/data-sources/open-catalog).
    2. Configure the Open Catalog in the `values-overrides.yaml` file as follows:
Configuration of the storage for the Open Catalog in Azure Storage 

```
catalog:  
  storage:  
    location: abfss://<your-container-name>@<your-storage-account>.dfs.core.windows.net/<path>  
    type: azure  
    azure:  
      tenantId: <your-azure-directory-tenant-id>  
      multiTenantAppName: ~ // Optional: Used only if you register an app with multi-tenants.  
      useClientSecrets: true // Has to be true  
  ...  

```

To use the Open Catalog with Google Cloud Storage (GCS), do the following:
    1. Configure the access to the storage, as described in [Configure Storage Access](/data-sources/open-catalog).
    2. Configure the Open Catalog in the `values-overrides.yaml` file as follows:
Configuration of the storage for the Open Catalog in Google Cloud Storage

```
catalog:  
  ...  
  storage:  
    location: gs://<your-bucket>/<your-path>  
    type: GCS  
    gcs:  
      useCredentialsFile: True  

```



### Configuring TLS for Open Catalog External Access​
For clients connecting to the Open Catalog from outside the namespace, Transport Layer Security (TLS) can be enabled for Open Catalog external access as follows:
  1. Enable external access with TLS and provide the TLS secret. See the section Creating a TLS Secret.
  2. In the `values-overrides.yaml` file, find the Open Catalog configuration section:
Configuration section for the Open Catalog

```
catalog:  
  ...  

```

  3. Configure TLS for the Open Catalog as follows:
Configuration of TLS for external access to the Open Catalog

```
catalog:  
  externalAccess:  
    enabled: true  
    tls:  
      enabled: true  
      secret: <dremio-tls-secret-catalog></dremio-tls-secret-catalog>  
  ...  

```



### Configuring Open Catalog When the Coordinator Web is Using TLS​
When the Dremio coordinator uses Transport Layer Security (TLS)for Web access (i.e., when `coordinator.web.tls` is set to `true`), the Open Catalog external access must be configured appropriately, or client authentication will fail. For that, configure the Open Catalog as follows:
  1. In the `values-overrides.yaml` file, find the Open Catalog configuration section:
Configuration section for the Open Catalog

```
catalog:  
  ...  

```

  2. Configure the Open Catalog as follows:
Configuration of the Open Catalog when the coordinator web is using TLS

```
catalog:  
  externalAccess:  
    enabled: true  
    authentication:  
      authServerHostname: dremio-master-0.dremio-cluster-pod.{{ .Release.Namespace }}.svc.cluster.local  
  ...  

```

The `authServerHostname` must match the CN (or the SAN) field of the (master) coordinator Web TLS certificate.
In case it does not match the CN or SAN fields of the TLS certificate, as a last resort, it is possible to disable hostname verification (`disableHostnameVerification: true`):
Configuration of the Open Catalog with hostname verification disabled

```
catalog:  
  externalAccess:  
    enabled: true  
    authentication:  
      authServerHostname: dremio-master-0.dremio-cluster-pod.{{ .Release.Namespace }}.svc.cluster.local  
      disableHostnameVerification: true  
  ...  

```



## Downloading Dremio's Helm Charts​
You can download Dremio's Helm charts to implement advanced configurations beyond those outlined in this topic.
However, please proceed with caution. Modifications made without a clear understanding can lead to unexpected behavior and compromise the Dremio Support team's ability to provide effective assistance.
To ensure success, Dremio recommends engaging with the Professional Services team through your Account Executive or Customer Success Manager. Please note that such engagements may require additional time and could involve consulting fees.
To download Dremio’s Helm charts, use the following command:
Run helm pull to download Dremio’s Helm charts

```
helm pull oci://quay.io/dremio/dremio-helm --version <tag> --untar  

```

Where:
  * (Optional) `--version `tag`` - The Helm chart version to pull. For example, `--version 3.0.0`. If not specified, the latest version is pulled.


The command creates a new local directory called `dremio-helm` containing the Helm charts.
For more information on the command, see 
### Overriding Additional Values​
After completing the `helm pull`:
  1. Find the `values.yaml` file, open it, and check the configurations you want to override.
  2. Copy what you want to override from the `values.yaml` to `values-overrides.yaml` and configure the file with your values.
  3. Save the `values-overrides.yaml` file.


Once done with the configuration, deploy Dremio to Kubernetes via the OCI Repo. See how in [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes).
### Manual Modifications to Deployment Files​
For modifications in these files to take effect, you need to install Dremio using a local version of the Helm charts. Thus, the `helm install` command must reference a local folder, not the OCI repo like Quay. For more information and sample commands, see 
After completing the `helm pull`, you can edit the charts directly. This may be necessary to add deployment-specific modifications not catered for in the Additional Configuration section. These would typically require modifications to files in the `/config` directory. Any customizations to your Dremio environment are propagated to all the pods when installing or upgrading the deployment.
Was this page helpful?
[Previous Deploy on Kubernetes](/deploy-dremio/deploy-on-kubernetes)[Next Managing Engines](/deploy-dremio/managing-engines-kubernetes)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Deploy on Kubernetes](/deploy-dremio/deploy-on-kubernetes)[Next Managing Engines](/deploy-dremio/managing-engines-kubernetes)
!
