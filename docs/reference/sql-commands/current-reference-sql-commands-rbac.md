---
url: /reference/sql/commands/rbac
title: "Privileges | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64255.584338416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * Privileges

Version: current [26.x]
On this page
# GRANT/REVOKE Enterprise
The `GRANT` and `REVOKE` commands enable administrators to determine not only who receives what privilege, but also the scope or objects these privileges apply to.
Administrators may reference the `sys.privileges` and `sys.membership` system tables to see all current privilege assignments for both [users](/security/authentication/users) and [roles](/security/rbac/roles).
## Syntax[​](/reference/sql/commands/rbac#syntax "Direct link to Syntax")
GRANT and REVOKE syntax

```
GRANT { <objectPrivilege>[, ...] | ALL } ON <object> TO <grantee>  
REVOKE { <objectPrivilege>[, ...] | ALL } ON <object> FROM <grantee>  

```

objectPrivilege

```
-- On SYSTEM  
{ ALL | ALTER | ALTER Reflection | CALL MODEL | CONFIGURE SECURITY | CREATE MODEL PROVIDER | CREATE ROLE | CREATE SPACE | CREATE SOURCE | CREATE TABLE | CREATE USER | DELETE | DROP | EXECUTE | EXPORT DIAGNOSTICS | EXTERNAL QUERY | INSERT | MANAGE GRANTS | MODIFY | SELECT | TRUNCATE | UPDATE | UPLOAD FILE | VIEW JOB HISTORY | VIEW Reflection }  
  
-- On Sources  
{ ALTER | ALTER Reflection | CREATE TABLE | DELETE | DROP | EXTERNAL QUERY | INSERT | MANAGE GRANTS | MODIFY | OWNERSHIP | READ METADATA | SELECT | TRUNCATE | UPDATE | VIEW Reflection }  
  
-- On Spaces  
{ ALTER | ALTER Reflection | DELETE | INSERT | MANAGE GRANTS | MODIFY | OWNERSHIP | READ METADATA | SELECT | TRUNCATE | UPDATE | VIEW Reflection }  
  
-- On Folders  
{ ALTER | ALTER Reflection | CREATE TABLE | DELETE | DROP | MANAGE GRANTS | OWNERSHIP | READ METADATA | SELECT | TRUNCATE | UPDATE | VIEW Reflection }  
  
-- On Scripts  
{ VIEW | MODIFY | DELETE | MANAGE GRANTS }  
  
-- On Tables  
{ ALTER | MANAGE GRANTS | READ METADATA | SELECT | TRUNCATE | UPDATE }  
  
-- On User-Defined Functions  
{ ALTER | EXECUTE | MANAGE GRANTS | OWNERSHIP }  
  
-- On Views  
{ ALTER | DELETE | INSERT | MANAGE GRANTS | OWNERSHIP | READ METADATA | SELECT | TRUNCATE | UPDATE }  
  
-- On Users  
{ ALTER | OWNERSHIP }  
  
-- On Roles  
{ ALTER | OWNERSHIP }  

```

object

```
-- For a specific object  
<object_type> <object_name>  
  
-- For all datasets within an object  
ALL DATASETS IN { SPACE | SOURCE | FOLDER | SCHEMA } <object_name>  
  
-- Within the scope of a project or system  
{ <project_name> | SYSTEM }  

```

  * Anywhere in this documentation that a value is enclosed in &lt; and &gt;, should be treated as an indicator of where a custom value should be provided. The value you enter should not be enclosed in &lt; or &gt;.
  * When granting or revoking multiple privileges for a user or group, separate each privilege by a single comma.


## Parameters[​](/reference/sql/commands/rbac#parameters "Direct link to Parameters")
`objectPrivilege` String
The privilege(s) to be granted to or revoked from the user. A comma-separated list of privileges can be specified. For more information, read [Privileges](/security/rbac/privileges).
* * *
`object_type` String
The name of the type of object on which the specified privilege is being granted or revoked, such as `ROLE`, `USER`, `TABLE`, `VIEW`, `FOLDER` or `SCHEMA`, `SOURCE`, and `SPACE`.
* * *
`object_name` String
The name of the object on which the privilege is being granted or revoked. Object names need to be qualified with the path if they are nested.
* * *
ALL DATASETS IN `object_name` String
Used to grant privileges for all datasets in a space, source, folder, or schema. The `OWNERSHIP` privilege is not valid for `ALL DATASETS` commands. Instead, you must grant ownership individually for each table, view, or folder.
* * *
`grantee` String
The user type or username to whom the privilege is being granted or revoked, such as `USER `username``, `ROLE `role_name``, or `PROJECT `project_name``. Do not use symbols like `-` in a user or role name, as the SQL editor cannot parse these values.
* * *
{'{'})'{'{'})'{'}'}) `project_name` | SYSTEM {'{'})'{'}'}'{'}'} String
Whereas all other objects require that you specify the object type followed by the object’s identifier, `SYSTEM` and projects do not. Depending on the scope, all you need is the name of the project or simply `SYSTEM`. For more information, read [Privileges](/security/rbac/privileges).
Revoking a privilege will only remove privileges from the object specified, so pay close attention to the scope of existing privileges. If you revoke privileges for a user at a low-level object, but they hold the privilege with a higher-level object, then they still retain the privilege for anything contained within the parent object. For example, `user1` has the `SELECT` privilege at the source level and an administrator revokes that `SELECT` privilege on a folder. This does not prevent `user1` from performing `SELECT` actions on any dataset contained in the source. Therefore, make sure to revoke the privilege at the object level that the user has privileges for.
## Granting the ROLE ADMIN Privilege[​](/reference/sql/commands/rbac#granting-the-role-admin-privilege "Direct link to Granting the ROLE ADMIN Privilege")
You may grant an internal or external groups administrative-level access to a cluster using the `GRANT ROLE ADMIN` command. This effectively treats all users with that role as full system admins in Dremio.
This access control requires different structure than what is provided in the [Syntax section](/reference/sql/commands/rbac#syntax). Instead, use this format, replacing ``groupName`` with an existing Dremio role name:
Syntax for GRANT ROLE ADMIN privilege

```
GRANT ROLE ADMIN TO ROLE <groupName>  

```

## Viewing Privileges[​](/reference/sql/commands/rbac#viewing-privileges "Direct link to Viewing Privileges")
Administrators may view a list of all existing privileges, the users they’re assigned to, and the objects associated from the `sys.privileges` system table. This is accessed from the SQL Editor and is viewable only by administrators in Dremio.
To view privileges, enter the following command:
View privileges

```
SELECT * FROM sys.privileges  

```

## Examples[​](/reference/sql/commands/rbac#examples "Direct link to Examples")
Grant a SELECT privilege on an individual view

```
GRANT SELECT ON VIEW view1 TO USER user1  

```

Grant a SELECT privilege on all datasets in a folder

```
GRANT SELECT ON ALL DATASETS IN FOLDER Regions TO ROLE analyst  

```

Grant a SELECT privilege in the SYSTEM scope

```
GRANT SELECT ON SYSTEM TO USER user1  

```

Grant an OWNERSHIP privilege on a view

```
GRANT OWNERSHIP ON VIEW "Midwest".Regions TO ROLE analyst  

```

Grant an OWNERSHIP privilege on a role

```
GRANT OWNERSHIP ON ROLE data_engineer TO USER user1  

```

Grant VIEW JOB HISTORY privilege to a user

```
GRANT VIEW JOB HISTORY ON SYSTEM TO USER "user@dremio.com"  

```

Grant the CONFIGURE SECURITY privilege to a user

```
GRANT CONFIGURE SECURITY ON SYSTEM TO USER user1  

```

Grant the CALL MODEL privilege to a role

```
GRANT CALL MODEL ON SYSTEM TO ROLE data_analysts  

```

Granting multiple privileges on a dataset

```
GRANT SELECT,ALTER ON VIEW view1 TO USER user1  

```

Revoke a SELECT privilege on a dataset

```
REVOKE SELECT ON DATASET Dataset1 FROM USER user1  

```

Grant a SELECT privilege on a system table

```
GRANT SELECT ON TABLE sys.jobs TO USER user1  

```

Revoke a SELECT privilege on a system table

```
REVOKE SELECT ON TABLE sys.views FROM USER user1  

```

Was this page helpful?
[Previous DROP VIEW](/reference/sql/commands/drop-view)[Next Reflections](/reference/sql/commands/acceleration)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DROP VIEW](/reference/sql/commands/drop-view)[Next Reflections](/reference/sql/commands/acceleration)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Frbac%2F&_biz_t=1777950575612&_biz_i=Privileges%20%7C%20Dremio%20Documentation&_biz_n=499&rnd=692091&cdn_o=a&_biz_z=1777950575612)
