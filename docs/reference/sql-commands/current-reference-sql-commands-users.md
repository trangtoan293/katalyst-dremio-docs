---
url: /reference/sql/commands/users
slug: /reference/sql/commands/users
title: "Users | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64257.184924875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * Users

Version: current [26.x]
On this page
# User Enterprise
[User management](/security/authentication/users) may be performed via the SQL manager. This allows you to perform basic functions on a user-by-user basis, such as creating users, changing their password, changing the user type, and removing a user. To assign a user to a role, use either the associated [Roles screen](/security/rbac/roles) or the [CREATE ROLE SQL command](/reference/sql/commands/roles)
  * CREATE USER
  * ALTER USER
  * DROP USER


## CREATE USER​
The following SQL command may be used to create new local user accounts in Dremio.
### Syntax​
Syntax

```
CREATE USER <username>  

```

Here is an example of the SQL command:
Example

```
CREATE USER user1  

```

### Required Parameters​
####  ``username``​
Indicates the username being associated with the new user account. This is the value a new user will enter at the Dremio login screen.
## ALTER USER​
The following SQL command may be used to set new passwords or change [a user type](/security/authentication/users) from local to external. This command may only be performed on local users for both scenarios described previously.
### Syntax​
Syntax

```
ALTER USER <username> SET PASSWORD '<password>'  
ALTER USER <username> UNSET PASSWORD  

```

#### Example 1: Setting a Password​
Here is an example of the SQL command when setting a password for a local user:
Set a password

```
ALTER USER user1 SET PASSWORD 'password123'  

```

#### Example 2: Changing a Local User to External​
Here is an example of the SQL command when changing a local user to an external user:
Change local user to external user

```
ALTER USER user1 UNSET PASSWORD  

```

### Required Parameters​
####  ``username``​
Indicates the username associated with the account being changed.
####  ``password``​
Indicates the password associated with the affected user account. The user must now use this password when attempting to log in on Dremio.
### Error Messages​
If you're trying to set a password for an external user via the `ALTER USER` command, Dremio will return with an error message. Password changes may not be done for external users with Dremio.
When changing a local user to an external user with the ALTER USER SQL command, Dremio will immediately check with any integrated services to verify whether the username currently exists. If it doesn't, then Dremio will return with an appropriate error message. The username must exist in the external service to allow for this alteration.
## DROP USER​
The following SQL command may be used to delete user accounts from Dremio.
### Syntax​
DROP USER syntax

```
DROP USER <username>  

```

Here is an example of the SQL command:
DROP USER example

```
DROP USER user1  

```

### Required Parameters​
####  ``username``​
Indicates the username associated with the account being deleted.
### Deleting External Users​
When deleting an external user from Dremio, this does not prevent them from accessing Dremio again. The next time that user logs in on Dremio using their external credential manager, a new account is created for them in Dremio automatically.
## System Table​
Administrators may view a list of all existing users, the privileges they've been granted, and their user type from the `sys.users` system table. This is accessed from the SQL Editor and is viewable only by administrators in Dremio.
To view users, enter the following command:
View users

```
SELECT * FROM sys.users  

```

Was this page helpful?
[Previous USE](/reference/sql/commands/use)[Next WITH](/reference/sql/commands/with)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous USE](/reference/sql/commands/use)[Next WITH](/reference/sql/commands/with)
!
