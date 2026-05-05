---
url: /security/secrets-management/hashicorp-vault
title: "HashiCorp Vault | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64081.309331875
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Secrets Management](/security/secrets-management)
  * HashiCorp Vault

Version: current [26.x]
On this page
# HashiCorp Vault Enterprise
Dremio supports HashiCorp Vault's 
After you [configure Dremio to connect to Vault](/security/secrets-management/hashicorp-vault#configuring-dremio-to-connect-to-a-vault), you can reference a secret stored in Vault instead of using a plaintext password to configure data source connections and list secrets in Dremio configuration files. When Dremio needs a referenced Vault secret to authenticate to a data source or another service, Dremio uses Vault’s REST API to:
  * Authenticate with Vault to obtain a Vault API access token.
  * Get the value of the referenced secret from Vault. The reference gives Dremio the information required to make an API request to retrieve the secret. The value of the secret is only held in memory.


You can retrieve secrets from Vault's key-value 
## Supported Data Sources[​](/security/secrets-management/hashicorp-vault#supported-data-sources "Direct link to Supported Data Sources")
The following table lists the Vault engines that Dremio supports for each data source.  
| Data Source  | Supported Vault Engines  |  
| --- | --- |  
| Amazon OpenSearch Service  | kv1 and kv2  |  
| Amazon Redshift  | kv1, kv2, and database  |  
| Amazon S3  | kv1 and kv2  |  
| Apache Druid  | kv1 and kv2  |  
| AWS Glue Data Catalog  | kv1 and kv2  |  
| Azure Storage  | kv1 and kv2  |  
| Dremio-to-Dremio Connector  | kv1 and kv2  |  
| Elasticsearch  | kv1, kv2, and database  |  
| Google Cloud Storage  | kv1 and kv2  |  
| IBM Db2  | kv1, kv2, and database  |  
| Microsoft Azure Data Explorer  | kv1 and kv2  |  
| Microsoft Azure Synapse Analytics  | kv1 and kv2  |  
| Microsoft SQL Server  | kv1, kv2, and database  |  
| MongoDB  | kv1, kv2, and database  |  
| MySQL  | kv1, kv2, and database  |  
| Nessie  | kv1 and kv2  |  
| Oracle  | kv1, kv2, and database  |  
| PostgreSQL  | kv1, kv2, and database  |  
| Snowflake  | kv1, kv2, and database  |  
| Teradata  | kv1 and kv2  |  
Dremio does not support the Vault integration for Hadoop Distributed File System (HDFS), Hive 2.x and 3.x, or network-attached storage (NAS) data sources.
## Configuration Files and Properties[​](/security/secrets-management/hashicorp-vault#configuration-files-and-properties "Direct link to Configuration Files and Properties")
You can use the URI for a Vault secret as the value for any of the configuration file properties listed in [Encrypt Credentials](/reference/admin-cli/encryption). Dremio supports Vault's kv1, kv2, and database secrets engines for secrets referenced in configuration files.
## Prerequisites[​](/security/secrets-management/hashicorp-vault#prerequisites "Direct link to Prerequisites")
Ensure that you have completed the following prerequisites **in Vault** before you begin the integration:
  * The Kubernetes authentication method does not require multi-factor authentication (MFA).
  * API access tokens have a time-to-live (TTL) of at least 5 minutes.
Dremio does not recommend configuring tokens with an unlimited TTL. You may configure tokens to have a limited number of uses. However, the lower the number of uses is, the more often Dremio must re-authenticate with Vault. As a result, setting the number of uses to less than 10 may degrade system performance, especially at system startup.
  * The minimum credential rotation period for any Vault secret is set to 5 minutes.
  * A role for Dremio to use for authentication is configured in Vault. The role must have the following access control policies:
    * The default Vault policy to allow Dremio to validate the status of its Vault API access token.
    * Read access to all Vault secrets that you want Dremio to retrieve.


## Configuring Dremio to Connect to a Vault[​](/security/secrets-management/hashicorp-vault#configuring-dremio-to-connect-to-a-vault "Direct link to Configuring Dremio to Connect to a Vault")
You must configure Dremio to connect to a Vault. For that, follow these steps:
  1. Create a new JSON file for your Vault configuration. See [Vault Properties](/security/secrets-management/hashicorp-vault#vault-properties) below.
  2. Add your configuration:
     * Kubernetes
     * Standalone
    1. Add the JSON configuration to your Dremio deployment. This can be done in one of two ways:
**Method 1 (Preferred)**
Add the configuration in your Vault configuration file to your `values-override.yaml` via the `configFiles` option. This approach is detailed in [Additional Config Files](/deploy-dremio/configuring-kubernetes#additional-config-files).
**Method 2**
Perform a `helm install` with the `--set-file "dremio.configFiles.<base-fileName>\.`filetype`"=/your/local/path/here` option indicating the location of the vault configuration file. For additional information, see step 1 in [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes#step-1-deploy-dremio).
Example `set-file` option 

```
--set-file "dremio.configFiles.vault-config\.json"=/my/local/path/myfile.json  

```

    2. Add the `services.credentials.hashicorp.vault.config` property to your configuration using the `dremioConfExtraOptions` variable, and set its value to the name of the vault configuration file. This step is detailed in [Additional Config Variables](/deploy-dremio/configuring-kubernetes#additional-config-variables).
Example Vault configuration property 

```
dremio:  
  dremioConfExtraOptions:  
    "services.credentials.hashicorp.vault.config": "\"file:///opt/dremio/conf/vault-config.json\""  

```

    1. In the `dremio.conf` file, add the `services.credentials.hashicorp.vault.config` property and set the value to a file URI that specifies the filesystem location of your Vault JSON configuration file. For example, if your Vault JSON file is located at `/opt/dremio/conf/hashicorp-vault.json`, the file URI is `file:///opt/dremio/conf/hashicorp-vault.json`.
    2. Copy the modified `dremio.conf` and vault configuration files to every coordinator and executor node in the Dremio cluster.
    3. Restart Dremio to propagate the configuration changes.
  3. (Optional) With Dremio running, enable the `services.credentials.exec.remote_lookup.enabled` [support key](/help-support/support-settings/#support-keys) to ensure that only the main coordinator retrieves secrets from the configured Vault.
By default, both coordinator and executor pods make API requests to the configured Vault. This requires that the Kubernetes ServiceAccounts for both coordinator and executor pods can authenticate with Vault and retrieve the same secrets. If you enable the `services.credentials.exec.remote_lookup.enabled` support key, executor pods ask the main coordinator to resolve credentials for them, and the main coordinator performs the API request to Vault on behalf of the executor. With this configuration, only the main coordinator’s Kubernetes ServiceAccount needs access to Vault.


## Vault Properties[​](/security/secrets-management/hashicorp-vault#vault-properties "Direct link to Vault Properties")
Vault properties are configured in a JSON file, which tells Dremio how to communicate and authenticate with the Vault server.
Example HashiCorp Vault configuration

```
{  
    "vaultUrl": "https://my-vault.com",  
    "namespace": "optional/dremio/global/vault/namespace",  
    "auth": {  
        "kubernetes": {  
            "vaultRole": "dremio-vault-role",  
            "serviceAccountJwt": "file:///optional/custom/path/to/serviceAccount/jwt",  
            "loginMountPath": "optional/custom/kubernetes/login/path"  
        }  
    }  
}  

```

The file contains the following properties:  
| Property  | Description  |  
| --- | --- |  
| `auth.kubernetes.loginMountPath`  | (Optional) The path at which the target Kubernetes authentication method was enabled. If you do not specify a `loginMountPath` value, Dremio sends login requests to the Vault server at `/v1/auth/kubernetes`, all requests use Vault's v1 API, and all authentication methods are mounted under the `auth` prefix. For more information, read   |  
| `auth.kubernetes.serviceAccountJwt`  | (Optional) The URI that specifies the filesystem location of the Kubernetes ServiceAccount JSON Web Token (JWT) that Dremio should use to authenticate with Vault. If you do not specify a `serviceAccountJwt` value, Dremio uses the default filesystem location for Kubernetes ServiceAccount JWTs: `/var/run/secrets/kubernetes.io/serviceaccount/token`.  |  
| `auth.kubernetes.vaultRole`  | The Vault role that Dremio should use for authentication. You must create the role in Vault before you configure Dremio to integrate with Vault. Once Dremio authenticates with Vault, Dremio possesses all of the access control policies associated with this role.  |  
| `namespace`  | (Optional) The global `X-Vault-Namespace` HTTP header, so   |  
| `vaultUrl`  | The URL for Dremio to connect to your Vault server. Dremio sends all API requests to authenticate with Vault and retrieve Vault secrets to this URL. The `vaultUrl` value must use a secure protocol (https) to ensure that all secrets retrieved from Vault are properly encrypted during transmission. Dremio will not connect to Vault if the `vaultUrl` value is insecure.  |  
## Retrieving the Secret Reference from Vault[​](/security/secrets-management/hashicorp-vault#retrieving-the-secret-reference-from-vault "Direct link to Retrieving the Secret Reference from Vault")
To create a secret reference, you need to get some information about the secret from Vault. The required information varies depending on the secrets engine you use, and may include the **secret engine mount path** , **secret path** , **target key** , and **role name**. The secret reference is assembled from these components.
The correct format for a secret reference differs depending on the secrets engine you use and whether you will use the secret reference in the Dremio console or in a configuration file or API request. Read [Formatting kv1 and kv2 Secret References](/security/secrets-management/hashicorp-vault#formatting-kv1-and-kv2-secret-references) and [Formatting database Secret References](/security/secrets-management/hashicorp-vault#formatting-database-secret-references) for details and examples.
### Secret Engine Mount Path (kv1, kv2, and database)[​](/security/secrets-management/hashicorp-vault#secret-engine-mount-path-kv1-kv2-and-database "Direct link to Secret Engine Mount Path \(kv1, kv2, and database\)")
The secret engine mount path is required for kv1, kv2, and database secrets references.
In Vault, the secret engine mount path is available on the **Configuration** page for the secret, as shown in the image below:
![Location of the secret engine mount path in Vault](https://docs.dremio.com/images/hashicorp-vault-secret-engine-mount-path-location.png)
### Secret Path (kv1 and kv2)[​](/security/secrets-management/hashicorp-vault#secret-path-kv1-and-kv2 "Direct link to Secret Path \(kv1 and kv2\)")
The secret path is the path to the secret from the mount path of the secret engine. The secret path is required for kv1 and kv2 secrets references.
In Vault, the secret path is listed on the details page for the secret, as shown in the image below:
![Location of a secret's path in Vault](https://docs.dremio.com/images/hashicorp-vault-secret-path-location.png)
### Target Key (kv1 and kv2)[​](/security/secrets-management/hashicorp-vault#target-key-kv1-and-kv2 "Direct link to Target Key \(kv1 and kv2\)")
The target key is the name used for the secret in Vault. The target key is required for kv1 and kv2 secrets references.
If the target key is not nested in a JSON object, you can retrieve it from the details page for the secret in Vault. In the example below, the JSON keys `name` and `password` are listed on the details page, and the target key is `password`:
![Location of a secret's target key in Vault](https://docs.dremio.com/images/hashicorp-vault-json-pointer-location.png)
When a target key is nested within another JSON object, use the key's `password`, is nested within the `credentials` object. In this case, the JSON pointer `credentials/password` is the target key:
![Location of a secret's nested target key in Vault](https://docs.dremio.com/images/hashicorp-vault-json-pointer-nested-location.png)
### Role Name (database)[​](/security/secrets-management/hashicorp-vault#role-name-database "Direct link to Role Name \(database\)")
The role name is required for database secrets references.
The role name for a database secret is listed on the details page for the target static role:
![Details page location of a database secret's role name in Vault](https://docs.dremio.com/images/vault_database_role_name_details.png)
You can also find the role name in the Roles tab for the target database secrets engine:
![Roles tab location of a database secret's role name in Vault](https://docs.dremio.com/images/vault_database_role_name_tab.png)
## Formatting kv1 and kv2 Secret References[​](/security/secrets-management/hashicorp-vault#formatting-kv1-and-kv2-secret-references "Direct link to Formatting kv1 and kv2 Secret References")
For secret references that you will use to connect to data sources in the Dremio console, the format for secret references is slightly different between kv1 and kv2 secrets:
  * For the **kv1** secrets engine, the format is ``secret_engine_mount_path`/`secret_path`#`target_key``.
  * For the **kv2** secrets engine, the format is ``secret_engine_mount_path`/data/`secret_path`#`target_key``.


For secret references that you will use in Dremio configuration files and API requests, add the following prefix to the secret reference you would use for the Dremio console:
  * **kv1** secrets engine: `hashicorp-vault+kv-v1:///`
  * **kv2** secrets engine: `hashicorp-vault+kv-v2:///`


### Example for a Secret with No Namespace[​](/security/secrets-management/hashicorp-vault#example-for-a-secret-with-no-namespace "Direct link to Example for a Secret with No Namespace")
In this example:
  * The secret engine mount path is `my-vault`.
  * The secret path is `mysql/dremio-user`.
  * The target key, `password`, is listed in the following JSON object in the details page for the secret:

```
{  
  "password": "myPasswordValue",  
  "name": "mySecret"  
}  

```


Example kv1 secret reference for the Dremio console

```
my-vault/mysql/dremio-user#password  

```

Example kv1 secret reference for a configuration file or API request

```
hashicorp-vault+kv-v1:///my-vault/mysql/dremio-user#password  

```

Example kv2 secret reference for the Dremio console

```
my-vault/data/mysql/dremio-user#password  

```

Example kv2 secret reference for a configuration file or API request

```
hashicorp-vault+kv-v2:///my-vault/data/mysql/dremio-user#password  

```

Dremio does not own core-site.xml configuration files, so you must add `dremio+` as a prefix to secret references before using them in core-site.xml files:
  * kv1 secrets engine: `dremio+hashicorp-vault+kv-v1:///my-vault/mysql/dremio-user#password`
  * kv2 secrets engine: `dremio+hashicorp-vault+kv-v2:///my-vault/data/mysql/dremio-user#password`


### Example for a Secret with a Nested Target Key and No Namespace[​](/security/secrets-management/hashicorp-vault#example-for-a-secret-with-a-nested-target-key-and-no-namespace "Direct link to Example for a Secret with a Nested Target Key and No Namespace")
In this example:
  * The secret engine mount path is `my-vault`.
  * The secret path is `mysql/dremio-user`.
  * The JSON pointer to use as the target key is `credentials/password`, as shown in the following JSON object in the details page for the secret:

```
{  
  "credentials": {  
    "password": "myPasswordValue"  
  },  
  "name": "mySecret"  
}  

```


Example nested kv1 secret reference for the Dremio console

```
my-vault/mysql/dremio-user#credentials/password  

```

Example nested kv1 secret reference for a configuration file or API request

```
hashicorp-vault+kv-v1:///my-vault/mysql/dremio-user#credentials/password  

```

Example nested kv2 secret reference for the Dremio console

```
my-vault/data/mysql/dremio-user#credentials/password  

```

Example nested kv2 secret reference for a configuration file or API request

```
hashicorp-vault+kv-v2:///my-vault/data/mysql/dremio-user#credentials/password  

```

Dremio does not own core-site.xml configuration files, so you must add `dremio+` as a prefix to secret references before using them in core-site.xml files:
  * kv1 secrets engine: `dremio+hashicorp-vault+kv-v1:///my-vault/mysql/dremio-user#credentials/password`
  * kv2 secrets engine: `dremio+hashicorp-vault+kv-v2:///my-vault/data/mysql/dremio-user#credentials/password`


### Example for a Secret within a Namespace[​](/security/secrets-management/hashicorp-vault#example-for-a-secret-within-a-namespace "Direct link to Example for a Secret within a Namespace")
In this example:
  * The namespace is `my-department`.
  * The secret engine mount path is `my-vault`.
  * The secret path is `mysql/dremio-user`.
  * The target key, `password`, is listed in the following JSON object in the details page for the secret:

```
{  
  "password": "myPasswordValue",  
  "name": "mySecret"  
}  

```


Example namespaced kv1 secret reference for the Dremio console

```
my-department/my-vault/mysql/dremio-user#password  

```

Example namespaced kv1 secret reference for a configuration file or API request

```
hashicorp-vault+kv-v1:///my-department/my-vault/mysql/dremio-user#password  

```

Example namespaced kv2 secret reference for the Dremio console

```
my-department/my-vault/data/mysql/dremio-user#password  

```

Example namespaced kv2 secret reference for a configuration file or API request

```
hashicorp-vault+kv-v2:///my-department/my-vault/data/mysql/dremio-user#password  

```

Dremio does not own core-site.xml configuration files, so you must add `dremio+` as a prefix to secret references before using them in core-site.xml files:
  * kv1 secrets engine: `dremio+hashicorp-vault+kv-v1:///my-department/my-vault/mysql/dremio-user#password`
  * kv2 secrets engine: `dremio+hashicorp-vault+kv-v2:///my-department/my-vault/data/mysql/dremio-user#password`


Global namespaces are not included in secret references. To continue the example, if `my-department` is the global namespace, the secret references are the same as those for [secrets with no namespace](/security/secrets-management/hashicorp-vault#example-for-a-secret-with-no-namespace).
If your secret is in a sub-namespace of the global namespace, such as `my-department/my-team` you **do** need to include the sub-namespace `my-team` in the secret reference:
`my-team/my-vault/data/mysql/dremio-user#password`
## Formatting database Secret References[​](/security/secrets-management/hashicorp-vault#formatting-database-secret-references "Direct link to Formatting database Secret References")
For the database secrets engine, for secret references that you will use to connect to data sources, the format is ``secret_engine_mount_path`/static-creds/`database_role_name``.
For secret references that you will use in Dremio configuration files and API requests, add the prefix `hashicorp-vault+database+static:///` to the secret reference you would use for the Dremio console.
### Example for a database Secret[​](/security/secrets-management/hashicorp-vault#example-for-a-database-secret "Direct link to Example for a database Secret")
In this example:
  * The secret engine mount path is `engineering/team-one/database`.
  * The secret path is `my-static-role`.

Example database secret reference for the Dremio console

```
engineering/team-one/database/static-creds/my-static-role  

```

Example database secret reference for a configuration file or API request

```
hashicorp-vault+database+static:///engineering/team-one/database/static-creds/my-static-role  

```

Dremio does not own core-site.xml configuration files, so you must add `dremio+` as a prefix to secret references before using them in a core-site.xml file: `dremio+hashicorp-vault+database+static:///engineering/team-one/database/static-creds/my-static-role`.
Was this page helpful?
[Previous Azure Key Vault](/security/secrets-management/azure-key-vault)[Next Audit Logging](/security/auditing)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Azure Key Vault](/security/secrets-management/azure-key-vault)[Next Audit Logging](/security/auditing)
