---
url: /reference/admin-cli/encryption
title: "Encrypt Credentials | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64229.934324083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Encrypt Credentials

Version: current [26.x]
On this page
# Encrypt Credentials
To enable enhanced security for sensitive information, the `dremio-admin encrypt` CLI command lets you encrypt the values of certrain passwords or secrets in Dremio configuration files.
Run `dremio-admin encrypt` as the `dremio` service user, not as the root user. Running the command as the root user can cause permissions issues. If it is not possible to run the command as the `dremio` service user, change the owner and group of the `$DREMIO_HOME/data/security` folder and underlying files to the `dremio` service user.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
Dremio supports encrypted values for the following properties and applicable configuration files:  
| Configuration File  | Configuration Property  |  
| --- | --- |  
| ad.json  | bindPassword  |  
| azuread.json  | clientSecret  |  
| dremio.conf  | keyStorePassword  |  
| keyPassword |  
| trustStorePassword |  
| core-site.xml  | fs.s3a.secret.key  |  
| dfs.adls.oauth2.credential |  
| dremio.azure.key |  
| dremio.azure.clientSecret |  
| oauth.json  | clientSecret  |  
## Syntax[​](/reference/admin-cli/encryption#syntax "Direct link to Syntax")
Syntax for encrypt command

```
./dremio-admin encrypt <string_to_encrypt>  

```

## Example[​](/reference/admin-cli/encryption#example "Direct link to Example")
The following example shows the command for encrypting a user-supplied string, the encrypted output that is returned, and how to use the encrypted output as the value for a configuration property:
Encrypt

```
sudo su - dremio ./dremio-admin encrypt <yourSecret>  

```

Encrypted output

```
secret:1.90WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4knjHvoWHM9urj  

```

Encrypted output usage

```
bindPassword: "secret:1.90WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4knjHvoWHM9urj"  

```

## Steps to Encrypt a String[​](/reference/admin-cli/encryption#steps-to-encrypt-a-string "Direct link to Steps to Encrypt a String")
  1. On the main node, run the `dremio-admin encrypt` CLI command using the supplied string.
  2. Copy the entire output starting from `secret:`, and use this encrypted string for the value of the password or secret in the configuration file.
  3. Restart the main node.


Core-site.xml files are not owned by Dremio, so you must add a `dremio+` prefix to the secret before it is used in the core-site.xml file. For example, you would use `dremio+secret:1.90WZLVORD26pwyAg8qKtQqw9Te8Xom5mdkSMmR_U4knjHvoWHM9urj` as the encrypted string.
Was this page helpful?
[Previous Back up Dremio](/reference/admin-cli/backup)[Next Export and Import PATs](/reference/admin-cli/export-import-pat)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Back up Dremio](/reference/admin-cli/backup)[Next Export and Import PATs](/reference/admin-cli/export-import-pat)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fadmin-cli%2Fencryption%2F&_biz_t=1777950549851&_biz_i=Encrypt%20Credentials%20%7C%20Dremio%20Documentation&_biz_n=440&rnd=565499&cdn_o=a&_biz_z=1777950549851)
