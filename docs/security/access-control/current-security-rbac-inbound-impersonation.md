---
url: /security/rbac/inbound-impersonation
title: "Inbound Impersonation | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64389.555805208
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Access Control](/security/rbac)
  * Inbound Impersonation

Version: current [26.x]
On this page
# Inbound Impersonation Enterprise
Inbound impersonation allows users to run queries from clients like DBeaver and Tableau on objects in Dremio data sources under their own Dremio usernames. When you configure inbound impersonation, a proxy user that represents the client can authenticate to the data source through the target user's connection. When the proxy user runs queries, Dremio evaluates the target user's privileges against the required privileges. If the target user has the correct privileges for the queries from the proxy user, Dremio runs the queries as the proxy user.
Dremio supports inbound impersonation for Java Database Connectivity (JDBC) connections for Hadoop Distributed File System (HDFS) and Hive sources as well as for Dremio-to-Dremio sources.
For HDFS and Hive sources, before you define an inbound impersonation policy, you must configure impersonation for the [HDFS](/data-sources/object/hdfs#impersonation) or [Hive](/data-sources/lakehouse-catalogs/hive#impersonation) source. You must also enable impersonation in the General and Advanced Options when you configure the connection to your [HDFS](/data-sources/object/hdfs#general) or [Hive](/data-sources/lakehouse-catalogs/hive#general-options) source in Dremio.
For Dremio-to-Dremio sources, you must enable impersonation in the Advanced Options when you configure the connection to your [Dremio](/data-sources/databases/dremio#advanced-options) source.
## Prerequisite[​](/security/rbac/inbound-impersonation#prerequisite "Direct link to Prerequisite")
Ensure that you have a Dremio-version-4.0-or-later cluster installed and accessible.
## Policy Definition Methods[​](/security/rbac/inbound-impersonation#policy-definition-methods "Direct link to Policy Definition Methods")
To configure inbound impersonation, a member of the ADMIN role in Dremio must define an inbound impersonation policy that authorizes proxy users to submit queries on behalf of target users.
Defining an inbound impersonation policy requires setting the value of the `exec.impersonation.inbound_policies` support key to a specification that lists the proxy and target users and groups for the policy. You can set the policy by [SQL query](/security/rbac/inbound-impersonation#set-policy-by-sql-query) or by [manually adding the support key](/security/rbac/inbound-impersonation#manually-set-policy-with-a-support-key).
In the specification, `proxy_principals` are the users and groups that represent the client application. The `proxy_principals` can submit Dremio queries on behalf of the `target_principals`, which are the users and groups that are impersonated. A single specification can name users, groups, or a combination of users and groups as `proxy_principals` and `target_principals`.
Proxy and target principals can be [internal](/security/authentication/users#local-users) or [external](/security/authentication/users#user-types) users or [external](/security/rbac/roles#external) groups. Dremio does not support using [internal](/security/rbac/roles#internal) roles as proxy or target principals.
### Set Policy by SQL Query[​](/security/rbac/inbound-impersonation#set-policy-by-sql-query "Direct link to Set Policy by SQL Query")
Use the following syntax and template to set the `exec.impersonation.inbound_policies` support key value by SQL query:
Syntax and Specification Template for SQL Query

```
ALTER SYSTEM SET "exec.impersonation.inbound_policies"='[  
  {  
    proxy_principals:{  
      users:["<proxy_user_1>",  
             "<proxy_user_2>"]  
    },  
    target_principals:{  
      users:["<target_user_1>",  
             "<target_user_1>"]  
    }  
  },  
  {  
    proxy_principals:{  
      groups:["<proxy_group_1>",  
              "<proxy_group_2>"]  
    },  
    target_principals:{  
      groups:["<target_group_1>"]  
    }  
  },  
  {  
    proxy_principals:{  
      users:["<proxy_user_2>",  
             "<proxy_user_3>"]  
    },  
    target_principals:{  
      groups:["<target_group_3>"]  
    }  
  }  
]'  

```

### Manually Set Policy with a Support Key[​](/security/rbac/inbound-impersonation#manually-set-policy-with-a-support-key "Direct link to Manually Set Policy with a Support Key")
To set the `exec.impersonation.inbound_policies` support key by manually adding it in the Dremio console:
  1. Click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the left navigation bar.
  2. Click **Support** in the sidebar.
  3. Under **Support Keys** , in the field on the right side of the page, enter `exec.impersonation.inbound_policies` and click **Show**.
  4. In the field under the `exec.impersonation.inbound_policies` support key, replace the empty array value with the policy specification:
Specification Template for Impersonation Policy

```
[  
  {  
    proxy_principals:{  
      users:["<proxy_user_1>",  
             "<proxy_user_2>"]  
    },  
    target_principals:{  
      users:["<target_user_1>",  
             "<target_user_2>"]  
    }  
  },  
  {  
    proxy_principals:{  
      groups:["<proxy_group_1>",  
              "<proxy_group_2>"]  
    },  
    target_principals:{  
      groups:["<target_group_1>"]  
    }  
  },  
  {  
    proxy_principals:{  
      users:["<proxy_user_2>",  
             "<proxy_user_3>"]  
    },  
    target_principals:{  
      groups:["<target_group_3>"]  
    }  
  }  
]  

```

  5. Click **Save**.


## Example Configuration[​](/security/rbac/inbound-impersonation#example-configuration "Direct link to Example Configuration")
In this scenario:
  * The LDAP service includes a group named `ldapGroup` with members `a.alice` and `b.bob`.
  * The LDAP service includes a user named `tpcds_service` that represents DBeaver. The `tpcds_service` user does not belong to any groups.
  * In Dremio, the `ldapGroup` has SELECT and ALTER privileges on the Hive source.
  * Inbound impersonation is enabled for the Hive source in Dremio.
  * In this scenario, `ldapGroup` is the target principal and `tpcds_service` is the proxy principal.


To tell Dremio to allow the `tpcds_service` user to impersonate members of the `ldapGroup`, set the `exec.impersonation.inbound_policies` support key in Dremio to the following value:
Example Inbound Impersonation Policy

```
[  
  {  
    proxy_principals:{  
      users:["tpcds_service"]  
    },  
    target_principals:{  
      groups:["ldapGroup"]  
    }  
  }  
]  

```

After the Dremio support key is set, Dremio allows `tpcds_service` to impersonate any member of the `ldapGroup`.
Permissions on a data source are always evaluated and enforced according to the impersonated user's identity and permissions. For example, while `tpcds_service` is impersonating `ldapGroup`, the permissions for `tpcds_service` on the data source are ignored and the permissions for `ldapGroup` permissions are applied.
If `tpcds_service` should impersonate only a specific member of `ldapGroup`, such as `a.alice`, pass in the member as a user property in DBeaver to make sure that Dremio knows which member of the `ldapGroup` to impersonate:
  1. In DBeaver, define a new user connection with the `tpcds_service` LDAP username and password.
  2. In the new user connection's **User Properties** , create a new driver property and assign it the username you wish to impersonate. In this example, the username is `a.alice`.


The user `a.alice` can now log in to DBeaver and run Dremio queries against the Hive source as `a.alice`.
## Confirming an Inbound Impersonation Policy[​](/security/rbac/inbound-impersonation#confirming-an-inbound-impersonation-policy "Direct link to Confirming an Inbound Impersonation Policy")
Use this SQL command to confirm whether an inbound impersonation policy is set:
SQL Query for Confirming an Inbound Impersonation Policy

```
SELECT name, string_val  
FROM   sys.options  
WHERE  name = 'exec.impersonation.inbound_policies'  

```

## Deleting an Inbound Impersonation Policy[​](/security/rbac/inbound-impersonation#deleting-an-inbound-impersonation-policy "Direct link to Deleting an Inbound Impersonation Policy")
To delete the inbound impersonation policy by SQL query, run the following query in the SQL Runner:
SQL Query for Deleting an Inbound Impersonation Policy

```
ALTER SYSTEM RESET "exec.impersonation.inbound_policies"  

```

To delete the inbound impersonation policy by manually resetting the `exec.impersonation.inbound_policies` support key in the Dremio console:
  1. Click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the left navigation bar.
  2. Click **Support** in the sidebar.
  3. Under **Support Keys** , at the list on the left side of the page, find the `exec.impersonation.inbound_policies` support key.
  4. Click **Reset**.


Was this page helpful?
[Previous Role Management](/security/rbac/roles)[Next Integrations](/security/integrations)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Role Management](/security/rbac/roles)[Next Integrations](/security/integrations)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fsecurity%2Frbac%2Finbound-impersonation%2F&_biz_t=1777950711107&_biz_i=Inbound%20Impersonation%20%7C%20Dremio%20Documentation&_biz_n=757&rnd=825419&cdn_o=a&_biz_z=1777950711107)
