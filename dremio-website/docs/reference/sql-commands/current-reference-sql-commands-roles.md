---
url: /reference/sql/commands/roles
title: "Roles | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64256.814185958
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * Roles

Version: current [26.x]
On this page
# Role Enterprise
[Role management](/security/rbac/roles) may be performed via the SQL manager. This allows you to perform basic functions on a role-by-role basis, such as creating and removing roles as well as creating and removing [users](/reference/sql/commands/users). To grant or revoke privileges to a role, use the [GRANT command](/reference/sql/commands/rbac).
  * [CREATE ROLE](/reference/sql/commands/roles#create-role)
  * [GRANT ROLE TO USER](/reference/sql/commands/roles#grant-role-to-user)
  * [REVOKE ROLE FROM USER](/reference/sql/commands/roles#revoke-role-from-user)
  * [GRANT ROLE TO ROLE](/reference/sql/commands/roles#grant-role-to-role)
  * [REVOKE ROLE FROM ROLE](/reference/sql/commands/roles#revoke-role-from-role)
  * [DROP ROLE](/reference/sql/commands/roles#drop-role)
  * [System Table](/reference/sql/commands/roles#system-table)


## CREATE ROLE[​](/reference/sql/commands/roles#create-role "Direct link to CREATE ROLE")
The following SQL command may be used to create new role in Dremio.
### Syntax[​](/reference/sql/commands/roles#syntax "Direct link to Syntax")
CREATE ROLE syntax

```
CREATE ROLE <role_name>  

```

Here is an example of the SQL command:
CREATE ROLE example

```
CREATE ROLE role1  

```

### Required Parameters[​](/reference/sql/commands/roles#required-parameters "Direct link to Required Parameters")
####  ``role_name``[​](/reference/sql/commands/roles#role_name "Direct link to role_name")
Indicates the name being associated with the new role.
## GRANT ROLE TO USER[​](/reference/sql/commands/roles#grant-role-to-user "Direct link to GRANT ROLE TO USER")
The following SQL command may be used to assign an existing role to a Dremio user.
### Syntax[​](/reference/sql/commands/roles#syntax-1 "Direct link to Syntax")
GRANT ROLE TO USER syntax

```
GRANT ROLE <role_name> TO USER <username>  

```

Here is an example of the SQL command:
GRANT ROLE TO USER example

```
GRANT ROLE role1 TO USER user1  

```

### Required Parameters[​](/reference/sql/commands/roles#required-parameters-1 "Direct link to Required Parameters")
####  ``role_name``[​](/reference/sql/commands/roles#role_name-1 "Direct link to role_name-1")
Indicates the name of the role being assigned to a user.
####  ``username``[​](/reference/sql/commands/roles#username "Direct link to username")
Indicates the username associated with the user account being granted the role.
## REVOKE ROLE FROM USER[​](/reference/sql/commands/roles#revoke-role-from-user "Direct link to REVOKE ROLE FROM USER")
The following SQL command may be used to remove an existing role from a specified user.
### Syntax[​](/reference/sql/commands/roles#syntax-2 "Direct link to Syntax")
REVOKE ROLE FROM USER syntax

```
REVOKE ROLE <role_name> FROM USER <username>  

```

Here is an example of the SQL command:
REVOKE ROLE FROM USER example

```
REVOKE ROLE role1 FROM USER user1  

```

### Required Parameters[​](/reference/sql/commands/roles#required-parameters-2 "Direct link to Required Parameters")
####  ``role_name``[​](/reference/sql/commands/roles#role_name-2 "Direct link to role_name-2")
Indicates the name of the role to be revoked.
####  ``username``[​](/reference/sql/commands/roles#username-1 "Direct link to username-1")
Indicates the username associated with the user account from which the role will be revoked.
## GRANT ROLE TO ROLE[​](/reference/sql/commands/roles#grant-role-to-role "Direct link to GRANT ROLE TO ROLE")
The following SQL command may be used to assign an existing role to another role. This is also known as a nested role.
### Syntax[​](/reference/sql/commands/roles#syntax-3 "Direct link to Syntax")
GRANT ROLE TO ROLE syntax

```
GRANT ROLE <sub_role> TO ROLE <parent_role>  

```

Here is an example of the SQL command:
GRANT ROLE TO ROLE example

```
GRANT ROLE subrole TO ROLE role1  

```

### Required Parameters[​](/reference/sql/commands/roles#required-parameters-3 "Direct link to Required Parameters")
####  ``sub_role``[​](/reference/sql/commands/roles#sub_role "Direct link to sub_role")
Indicates the name of the role that will be nested.
####  ``parent_role``[​](/reference/sql/commands/roles#parent_role "Direct link to parent_role")
Indicates the name of the role that will be used as the parent to the nested role.
## REVOKE ROLE FROM ROLE[​](/reference/sql/commands/roles#revoke-role-from-role "Direct link to REVOKE ROLE FROM ROLE")
The following SQL command may be used to remove a nested role from the specified parent role.
### Syntax[​](/reference/sql/commands/roles#syntax-4 "Direct link to Syntax")
REVOKE ROLE FROM ROLE syntax

```
REVOKE ROLE <sub_role> FROM ROLE <parent_role>  

```

Here is an example of the SQL command:
REVOKE ROLE FROM ROLE example

```
REVOKE ROLE subrole FROM ROLE role1  

```

### Required Parameters[​](/reference/sql/commands/roles#required-parameters-4 "Direct link to Required Parameters")
####  ``sub_role``[​](/reference/sql/commands/roles#sub_role-1 "Direct link to sub_role-1")
Indicates the name of the role that will be removed from the parent role.
####  ``parent_role``[​](/reference/sql/commands/roles#parent_role-1 "Direct link to parent_role-1")
Indicates the name of the parent that the nested role is currently assigned to.
## DROP ROLE[​](/reference/sql/commands/roles#drop-role "Direct link to DROP ROLE")
The following SQL command may be used to delete roles from Dremio.
### Syntax[​](/reference/sql/commands/roles#syntax-5 "Direct link to Syntax")
DROP ROLE syntax

```
DROP ROLE <role_name>  

```

Here is an example of the SQL command:
DROP ROLE example

```
DROP ROLE role1  

```

### Required Parameters[​](/reference/sql/commands/roles#required-parameters-5 "Direct link to Required Parameters")
####  ``role_name``[​](/reference/sql/commands/roles#role_name-3 "Direct link to role_name-3")
Indicates the role being deleted.
## System Table[​](/reference/sql/commands/roles#system-table "Direct link to System Table")
Administrators may view a list of all existing roles, the users and roles they've been assigned to from the `sys.roles` system table. This is accessed from the SQL Editor and is viewable only by administrators in Dremio.
To view users, enter the following command:
View users

```
SELECT * FROM sys.roles  

```

Was this page helpful?
[Previous Reflections](/reference/sql/commands/acceleration)[Next Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reflections](/reference/sql/commands/acceleration)[Next Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Freset-tag%2F&_biz_t=1777950576776&_biz_i=RESET%20TAG%20%7C%20Dremio%20Documentation&_biz_n=502&rnd=571676&cdn_o=a&_biz_z=1777950576791)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Froles%2F&_biz_t=1777950576790&_biz_i=Roles%20%7C%20Dremio%20Documentation&_biz_n=503&rnd=332567&cdn_o=a&_biz_z=1777950576791)
