---
url: /reference/sql/commands/roles
slug: /reference/sql/commands/roles
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
  * CREATE ROLE
  * GRANT ROLE TO USER
  * REVOKE ROLE FROM USER
  * GRANT ROLE TO ROLE
  * REVOKE ROLE FROM ROLE
  * DROP ROLE
  * System Table


## CREATE ROLE​
The following SQL command may be used to create new role in Dremio.
### Syntax​
CREATE ROLE syntax

```
CREATE ROLE <role_name>  

```

Here is an example of the SQL command:
CREATE ROLE example

```
CREATE ROLE role1  

```

### Required Parameters​
####  ``role_name``​
Indicates the name being associated with the new role.
## GRANT ROLE TO USER​
The following SQL command may be used to assign an existing role to a Dremio user.
### Syntax​
GRANT ROLE TO USER syntax

```
GRANT ROLE <role_name> TO USER <username>  

```

Here is an example of the SQL command:
GRANT ROLE TO USER example

```
GRANT ROLE role1 TO USER user1  

```

### Required Parameters​
####  ``role_name``​
Indicates the name of the role being assigned to a user.
####  ``username``​
Indicates the username associated with the user account being granted the role.
## REVOKE ROLE FROM USER​
The following SQL command may be used to remove an existing role from a specified user.
### Syntax​
REVOKE ROLE FROM USER syntax

```
REVOKE ROLE <role_name> FROM USER <username>  

```

Here is an example of the SQL command:
REVOKE ROLE FROM USER example

```
REVOKE ROLE role1 FROM USER user1  

```

### Required Parameters​
####  ``role_name``​
Indicates the name of the role to be revoked.
####  ``username``​
Indicates the username associated with the user account from which the role will be revoked.
## GRANT ROLE TO ROLE​
The following SQL command may be used to assign an existing role to another role. This is also known as a nested role.
### Syntax​
GRANT ROLE TO ROLE syntax

```
GRANT ROLE <sub_role> TO ROLE <parent_role>  

```

Here is an example of the SQL command:
GRANT ROLE TO ROLE example

```
GRANT ROLE subrole TO ROLE role1  

```

### Required Parameters​
####  ``sub_role``​
Indicates the name of the role that will be nested.
####  ``parent_role``​
Indicates the name of the role that will be used as the parent to the nested role.
## REVOKE ROLE FROM ROLE​
The following SQL command may be used to remove a nested role from the specified parent role.
### Syntax​
REVOKE ROLE FROM ROLE syntax

```
REVOKE ROLE <sub_role> FROM ROLE <parent_role>  

```

Here is an example of the SQL command:
REVOKE ROLE FROM ROLE example

```
REVOKE ROLE subrole FROM ROLE role1  

```

### Required Parameters​
####  ``sub_role``​
Indicates the name of the role that will be removed from the parent role.
####  ``parent_role``​
Indicates the name of the parent that the nested role is currently assigned to.
## DROP ROLE​
The following SQL command may be used to delete roles from Dremio.
### Syntax​
DROP ROLE syntax

```
DROP ROLE <role_name>  

```

Here is an example of the SQL command:
DROP ROLE example

```
DROP ROLE role1  

```

### Required Parameters​
####  ``role_name``​
Indicates the role being deleted.
## System Table​
Administrators may view a list of all existing roles, the users and roles they've been assigned to from the `sys.roles` system table. This is accessed from the SQL Editor and is viewable only by administrators in Dremio.
To view users, enter the following command:
View users

```
SELECT * FROM sys.roles  

```

Was this page helpful?
[Previous Reflections](/reference/sql/commands/acceleration)[Next Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reflections](/reference/sql/commands/acceleration)[Next Row-Access & Column-Masking](/reference/sql/commands/row-column-policies)
!!
