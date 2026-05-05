---
url: /reference/admin-cli/reset-password
title: "Reset Password | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64236.172420833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Reset Password

Version: current [26.x]
On this page
# Reset Password
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/#using-the-dremio-admin-cli-on-kubernetes) before putting anything learned on this page into practice on such a deployment.
## Requirements[​](/reference/admin-cli/reset-password#requirements "Direct link to Requirements")
  * Shut down all cluster nodes completely before running the command.
  * This command is run on the main node.
  * The first character in the password must not be a special character. You can use a special character for any character in the password _except_ the first character.


## Syntax[​](/reference/admin-cli/reset-password#syntax "Direct link to Syntax")
Reset password command

```
<DREMIO_HOME>/bin/dremio-admin set-password \  
-u <ACCOUNT_USER> \  
-p <NEW_PASSWORD>  

```

## Options[​](/reference/admin-cli/reset-password#options "Direct link to Options")
To obtain a list of options on the command line:
List reset password command options

```
./dremio-admin set-password -h  

```

Restore options:
Reset password command options output

```
  -h, --help  
    show usage  
  -p, --password  
    password  
  -u, --username  
    username of user  

```

If the `--password` option is specified without a value, the utility prompts for one interactively.
## Example[​](/reference/admin-cli/reset-password#example "Direct link to Example")
This following example resets the password for `user123`.
Reset password example

```
./dremio-admin set-password -u user123 -p dremio123  

```

## Steps to Reset a Password[​](/reference/admin-cli/reset-password#steps-to-reset-a-password "Direct link to Steps to Reset a Password")
  1. Make sure all cluster nodes are shut down.
  2. On the main node, run the following command:
Reset password

```
<DREMIO_HOME>/bin/dremio-admin set-password -u <ACCOUNT_USER> -p <NEW_PASSWORD>  

```

You can use special characters for any character in the password _except_ the first character. If you use a special character for the first character in the password, the password will fail.
  3. Look for the confirmation message:
Confirmation message

```
...  
Password changed  

```



Was this page helpful?
[Previous Repair ACLS](/reference/admin-cli/repair-acls)[Next Restore Dremio](/reference/admin-cli/restore)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Repair ACLS](/reference/admin-cli/repair-acls)[Next Restore Dremio](/reference/admin-cli/restore)
