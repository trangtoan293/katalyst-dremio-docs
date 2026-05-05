---
url: /help-support/knowledge-base/ranger-ssl-kerberos
slug: /help-support/knowledge-base/ranger-ssl-kerberos
title: "Enabling Dremio Ranger SSL with Kerberos | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64228.2502875
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Knowledge Base](/help-support/knowledge-base)
  * Enabling Dremio Ranger SSL with Kerberos

Version: current [26.x]
On this page
# Enabling Dremio Ranger SSL with Kerberos
This topic covers how to use SSL when setting up a Hive data source using Ranger Authorization in Dremio.
## Requirements[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
To enable SSL with Ranger, you will need to create the following files using the Java keytool:
  1. `<keystore name>.jks` → (ranger-hive-keystore.jks)
  2. `<truststore name>.jks` → (ranger-hive-truststore.jks)
  3. `<credentials name>.jceks` → (cred.jceks)


See the following links for more information:
## Creating self-signed keys for testing purposes[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
This section describes several methods used to create self-signed keys.
### Creating the credentials file from scratch using hadoop tool chain[​](/help-support/knowledge-base/ranger-ssl-kerberos/)

```
hadoop credential create sslKeyStore -value <password> -provider localjceks://file/<path/to/cred>.jceks  
hadoop credential create sslTrustStore -value <password> -provider localjceks://file/<path/to/cred>.jceks  

```

### Creating the keystore using Java keytool[​](/help-support/knowledge-base/ranger-ssl-kerberos/)

```
keytool -genkey -keyalg RSA -alias rangeradmin -keystore </path/to/keystore>.jks -storepass <password> -keysize 2048 -validity <length in days>  

```

The Hortonworks documentation mentions that when the keytool asks for your first and last name you should use the FQDN of the site (i.e example.com). All other fields should be left blank (you provided the password as an input to the keytool).
### Creating the truststore using Java keytool[​](/help-support/knowledge-base/ranger-ssl-kerberos/)

```
keytool -export -alias rangeradmin -keystore </path/to/keystore>.jks -file <path/to/keystore>.cer  
keytool -import -file </path/to/keystore>.cer -alias rangeradmin -keystore </path/to/truststore>.jks -storepass <password>  

```

The Hortonworks documentation mentions that when the keytool asks for your first and last name you should use the FQDN of the site (i.e example.com). All other fields should be left blank (you provided the password as an input to the keytool).
## Enabling SSL in Ranger-Admin[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
Copy the generated files to a directory accessible by the ranger-admin and ensure the right permissions are set (ranger user should own them, chmod 400).
Useful links:
Leave ranger.service.https.attrib.clientAuth and ranger.service.https.attrib.client.auth set to false.
In summary, set the following keys to the **ranger-admin-site.xml** file and restart ranger-admin.:  
| key  | value  | notes  |  
| --- | --- | --- |  
| ranger.https.attrib.keystore.file  | `</path/to/keystore>.jks`  | You may need to add this key to the custom ranger-admin-site settings  |  
| ranger.service.https.attrib.keystore.keyalias  | rangeradmin  |   |  
| ranger.service.https.attrib.keystore.pass  | ``password``  |   |  
| ranger.service.https.attrib.ssl.enabled  | true  |   |  
| ranger.service.https.port  | 6182  |   |  
| ranger.externalurl  | `https://`url`:6182`  |   |  
| ranger.service.http.enabled  | false  |   |  
  * The default settings for ranger-usersync and ranger-tagsync should work. 
  * The ranger-tagsync setting can have some issues if tag-based-policy testing isn't being done then this service can just be disabled.


## Connecting to a Ranger host using SSL in Dremio[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
See 
  1. Copy the keystore, truststore, and credentials files to a location accessible by the Dremio user (i.e. the Dremio configuration directory) on all coordinator nodes
  2. Create policymgr-ssl.xml with appropriate paths to the keystore/truststore and credentials on all coordinator nodes
  3. Verify that the **ranger-hive-security.xml** file does not exist within the Dremio configuration path.
  4. Ensure all files have the appropriate permissions.
  5. In Dremio under the Hive data source Advanced Options tab, add the `ranger.plugin.hive.policy.rest.ssl.config.file` property with the `</path/to/policymgr.config>.xml` value


### Example policymgr-ssl.xml configuration (based on ranger-policymgr-ssl.xml):[​](/help-support/knowledge-base/ranger-ssl-kerberos/):")

```
  <configuration  xmlns:xi="http://www.w3.org/2001/XInclude">  
  
    <property>  
      <name>xasecure.policymgr.clientssl.keystore</name>  
      <value>[/path/to/keystore].jks</value>  
    </property>  
  
    <property>  
      <name>xasecure.policymgr.clientssl.keystore.credential.file</name>  
      <value>jceks://file/[path/to/credentials].jceks</value>  
    </property>  
  
    <property>  
      <name>xasecure.policymgr.clientssl.keystore.password</name>  
      <value>crypted</value>  
    </property>  
  
    <property>  
      <name>xasecure.policymgr.clientssl.truststore</name>  
      <value>[/path/to/truststore].jks</value>  
    </property>  
  
    <property>  
      <name>xasecure.policymgr.clientssl.truststore.credential.file</name>  
      <value>jceks://file/[path/to/credentials].jceks</value>  
    </property>  
  
    <property>  
      <name>xasecure.policymgr.clientssl.truststore.password</name>  
      <value>crypted</value>  
    </property>  
  
  </configuration>  

```

Replace all the [path/to/...] entries with the full path (ie [/path/to/keystore] → /etc/dremio/conf/keystore.jks).
### Configuring Dremio service principal for use in Kerberized Ranger[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
This section provides the steps necessary for configuring Kerberos for Dremio.
The only additional step necessary to interact with a Kerberized Ranger instance is to ensure the Dremio user (the user associated with the Dremio principal) is configured as an Admin within Ranger. This is done through the Ranger Admin UI by going to the User/Groups page and finding the Dremio user, editing it, and selecting the 'admin' role for that user.
## Troubleshooting[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
### Keystore or Password Error in a Kubernetes Deployment[​](/help-support/knowledge-base/ranger-ssl-kerberos/)
When you deploy the SSL keystore, truststore, and credentials files to a Kubernetes deployment of Dremio, the certificates are installed with the default file permissions `777` and the default filesystem owner and group `root:root`. As a result, the SSL configuration fails with the following error:
Keystore or Password Error

```
Caused by: java.io.IOException: Keystore was tampered with, or password was incorrect  

```

To resolve the problem, deploy the keystore, truststore, and credentials files to a permanent volume, set the file permissions to `400` (read-only by owner), and set the filesystem owner and group to `dremio:dremio`.
Was this page helpful?
[Previous Kerberos Setup and Troubleshooting](/help-support/knowledge-base/kerberos-trouble)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Kerberos Setup and Troubleshooting](/help-support/knowledge-base/kerberos-trouble)
