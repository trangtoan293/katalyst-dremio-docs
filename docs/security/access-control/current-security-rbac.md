---
url: /security/rbac
slug: /security/rbac
title: "Access Control | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64079.979606125
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * Access Control

Version: current [26.x]
On this page
# Access Control Enterprise
Dremio allows for the implementation of granular-level privileges, which defines a user/role’s access privilege and available actions for specific objects, such as folders and datasets. This is called access management, and gives administrators the ability to restrict access to any object in Dremio.
  * [Privileges](/security/rbac/privileges) – Privileges enable users to perform explicit operations on objects in Dremio. Additionally, privileges may be set on individual datasets (tables or views) or whole schemas, allowing for a simplified configuration with larger catalogs.
  * [Row-access and column-masking policies](/data-products/govern/row-column-policies-udf) – Row-access and column-masking policies enable you to grant users access to particular rows or columns.


The following APIs are available for managing access control:
  * [Grants APIs](/reference/api/catalog/grants)
  * [Privileges API](/reference/api/catalog/grants)
  * [Roles API](/reference/api/roles)
  * [Users API](/reference/api/user)


A wide range of SQL commands are also available:
  * [Privileges SQL Commands](/reference/sql/commands/rbac)
  * [Roles SQL Commands](/reference/sql/commands/roles)
  * [Users SQL Commands](/reference/sql/commands/users)


## Object Hierarchy​
Each object resides within a container in a hierarchy of containers. The upper-most container exists as the system user, or administrator account. All other objects are contained within sources or spaces, organized into folders. The hierarchy of these objects is illustrated below.
!
## Inheritance​
The objects to which privileges are granted depend on the inheritance model. In other words, granting access to a parent object, such as a folder, also gives that user access to any existing and future datasets contained in that folder. For example, giving a user privileges to ALL DATASETS will only grant the user access to existing datasets, not the folders that contain the datasets. In comparison, granting privileges at the source level will extend that user's access to the source's existing and future folders/schema and datasets. The object to which a user's privileges are applied is also known as the scope, and follow a parent-child relationship.
By the rules of inheritance, user or group access may be granted as high or low in the object hierarchy as you wish for access to reach.
Permissions granted to an individual table or view mean that a user's access only extends to that dataset, not to the parent folder or other datasets created in the same folder. So if a user only needs access to a single dataset, administrators need only grant privileges to that object.
!
Consider the image above, which shows an example of object structure in Dremio. If a user is granted privileges to a single dataset, such as `TableA1`, then that is the one object they have access to. However, if a user is granted privileges at the folder level, such as `Folder1`, then that user's access extends to any existing and future child objects created, including `FolderA`, `TableA1`, `TableB1`, and so on.
If a user has privileges for a single table, they may create views based on that dataset, but with the user now having `ALTER` and `MANAGE GRANTS` privileges for any view. However, the user still retains the same privileges as before with the original dataset. For more information, read View Delegation.
## Scope​
Scope is a concept used to describe what objects a user or group has access to. Privileges are assigned by object, which ultimately determines what a grantee may perform set functions upon. For example, you may set a user's scope to `FolderA`, which will give the user access to all existing and future datasets contained in the folder, as well as the datasets' wikis. But they will not have access to any other folders or the source. The object a user is granted access to is dependent on the inheritance model, which means based on the object type, it may contain child objects. For example, if a user is granted privilege to a folder, the user's access also extends to all existing and future datasets contained in that folder.
For example, `user1` is granted the `SELECT` privilege to the folder `FolderC`. This object contains multiple datasets, which the user may now access. However, there exists a parent folder and another subfolder with its own datasets.
!
Because of the established scope, `user1` may not access `FolderD` because they were only granted access to `FolderC`'s objects.
### Current vs. Future Objects​
Based on the selected scope, you may restrict a user's access to future and existing datasets. For example, if you select a single table as the scope of a user's privilege, then that user may only perform that action to the existing dataset, as well as any future views they create using that table. However, they may not access any views created from a table by another user (see the example below). However, if the scope is instead set at the folder level, then the user may perform the granted privilege to all tables and views contained in that folder (see the example below).
## Ownership​
Object ownership is a security feature used to control access to an object. In Dremio, each object must have an owner, and may have only one owner. Ownership is automatically granted to the user who initially created the object. For example, when `user1` creates an S3 data source, Dremio automatically assigns ownership of the source to `user1`.
The privileges included in object ownership depend on your configuration.
  * By default, ownership includes all privileges for that object. The object owner can grant or revoke access privileges to the object and its child objects, modify an object's settings, and delete the object as desired. See Granting Privileges Using SQL Commands for more information.
  * Managed access spaces centralize the administration of access privileges in shared spaces to a limited set of users and roles, including the space owner. By limiting privilege grant authority, managed access spaces help ensure consistent and controlled access policies and reduce the risk of unauthorized access. See Managed Access Spaces.


The following behaviors and limitations apply to ownership:
  * Each object may only have one owner.
  * An object's creator is automatically granted ownership.
  * Object ownership may be assigned or modified to a new user or role with the [`GRANT OWNERSHIP`](/reference/sql/commands/rbac) command.
  * The object's access control settings may not work if the owner is deleted or removed. See View Delegation.
  * Object owners may be identified by querying the [`sys."tables"`](/reference/sql/system-tables/tables) table or [`sys.views`](/reference/sql/system-tables/views) table. If an object has no owner, the `owner_id` will display as `$unowned`.


### Managed Access Spaces​
Managed access spaces centralize the administration of access privileges to a limited set of users and roles, including:
  * Owner of the space
  * Dremio administrator
  * Users or roles explicitly granted the MANAGE GRANTS privilege on the object or any of its parents


When using managed access spaces, Dremio displays shared spaces with a lock icon ! on the Datasets and SQL Runner pages. Owners of folders, views, and functions in a locked space cannot grant or revoke privileges on those objects to other users or roles.  
| User or role  | Grants/revokes privileges in default spaces  | Grants/revokes privileges in managed access spaces  |  
| --- | --- | --- |  
| Dremio administrator  | Yes  | Yes  |  
| Owner of a shared space  | Yes  | Yes  |  
| Owner of a folder in a shared space  | Yes  | No  |  
| Owner of a view in a shared space  | Yes  | No  |  
| Owner of a function in a shared space  | Yes  | No  |  
| User or role with MANAGE GRANTS  | Yes  | Yes  |  
Managed access spaces do not impact:
  * Any user home space
  * Sources, including Nessie catalogs
  * Global objects, such as scripts and user-defined functions


Managed access spaces do not override a MANAGE GRANT privilege granted at system scope.
The Dremio administrator can activate managed access spaces by setting the `security.access-control.managed-access-spaces.enabled` [support key](/help-support/support-settings/) on the Support Settings page.
### View Delegation​
View delegation means that the data in tables with restricted access may be available to other Dremio users by creating views. View delegation is the critical capability of the Dremio semantic layer that allows users to run queries without accessing the underlying tables and views directly.
The fundamental principles of view delegation include the following:
  * The privileges of a view's owner determine whether the view can use dependent tables and views.
  * Additional user access to a view is controlled by privilege grants directly on the view, forming a privilege chain from the view to the underlying table.


A shared view selects from the underlying dataset using the view owner's permissions at the time of the view's last modification, even if the end user querying the view lacks privileges to modify the underlying table. This applies to each table on the data graph and chain of datasets.
View delegation is different from privilege assignment. View delegation is an implicit delegation of the SELECT privilege on underlying objects, which means that users who run queries on a view must have access privileges on the view but do not need privileges on underlying tables. Privilege assignment is an explicit delegation providing direct access to an object.
#### Example 1: View Delegation​
`user1` has the SELECT privilege on `table1` and creates `view1` to filter and transform data in `table1`. `user2` asks for access privileges to run queries on `view1` as well. `user2` may obtain the SELECT privilege for `view1` from the following authorized users:
  * By default, view owners such as `user1` can grant and revoke privileges to other users, as appropriate.
  * A limited set of users and roles, such as the space owner, can grant or revoke privileges in managed access spaces.
  * Dremio administrators or other users with the MANAGE GRANTS privilege can grant privileges to other users.


If access for `user2` is appropriate, the authorized user runs `GRANT SELECT ON VIEW view1 TO USER user2` to grant the SELECT privilege to `user2`. After `user2` obtains the SELECT privilege, they can run queries on `view1`, utilizing the privilege of `user1` as owner to `view1` to SELECT from `table1`.  
| Object  | `user1`  | `user2`  |  
| --- | --- | --- |  
| `view1`  | OWNERSHIP  | SELECT  |  
| `table1`  | SELECT  | None  |  
_Privileges by user in Example 1_
The following table describes the actions that each user may perform based on their privileges:  
| Task  | Works for `user1`  | Works for `user2`  |  
| --- | --- | --- |  
| Use `view1` in queries  | Yes, `user1` owns `view1` and has the SELECT privilege on `table1`.  | Yes, `user2` has the SELECT privilege on `view1` and the owner of `view1` has the SELECT privilege on `table1`.  |  
| Modify the query in `view1`  | Yes, `user1` is the owner of `view1`. Ownership includes the ALTER privilege to modify the view definition.  | No, `user2` is not the owner of `view1` and does not have the ALTER privilege.  |  
| Use `table1` in queries  | Yes, `user1` has the SELECT privilege on `table1`.  | No, `user2` has no privileges on `table1` and cannot see it in the Dremio user interface.  |  
_Tasks by user in Example 1_
#### Example 2: View Delegation with Revoked Access to the Original Table​
To continue the previous example, `user1` has SELECT access to `table1`, which gives `user1` access through `view1`. An administrator revokes the SELECT access of `user1` on `table1`.  
| Object  | `user1`  | `user2`  |  
| --- | --- | --- |  
| `view1`  | OWNERSHIP  | SELECT  |  
| `table1`  | None  | None  |  
_Privileges by user in Example 2_
The following table describes the actions that each user may perform based on their privileges:  
| Task  | Works for `user1`  | Works for `user2`  |  
| --- | --- | --- |  
| Use `view1` in queries  | No, `user1` no longer has SELECT on the underlying `table1`.  | No, `user2` no longer has a chain of permission through `user1` to `table1`.  |  
| Modify the query in `view1`  | No, `user1` is the owner of `view1` but any attempts to edit `view1` will fail unless the references to `table1` are removed since `user1` can no longer access `table1`.  | No, `user2` is not the owner of `view1` and does not possess the ALTER privilege.  |  
| Use `table1` in queries  | No, `user1` has no privileges on `table1`.  | No, `user2` has no privileges on `table1`.  |  
_Tasks by user in Example 2_
## Privileges​
Privileges refer to the defined levels of access or permissions that are assigned to roles or users within Dremio. Privileges determine the operations a user or role can perform on securable objects. Examples of privileges in Dremio include SELECT on a table or view, INSERT on a table, DELETE on a table, CREATE TABLE on a folder, and MANAGE GRANTS on any object.
The assignment of privileges to roles, or users, should be based on the principle of least privilege, where users or roles are given only the minimum privileges required to perform their tasks effectively.
Privileges can be managed using SQL, APIs, or the Dremio Console.
For more information, please refer to [Privileges](/security/rbac/privileges).
### Granting Privileges Using the Dremio Console​
You can share catalog objects with others in your organization by granting privileges on the objects to users and roles as follows:
  1. Locate the desired object.
  2. Click ![This is the icon that represents more actions.](https://docs.dremio.com/images/icons/settings.png) or ![This is the icon that represents more actions.](https://docs.dremio.com/images/icons/more.png) depending on the object.
  3. In the object settings dialog, select **Privileges** from the settings sidebar.


For some object types, the settings dialog automatically opens to display the privilege settings, and you do not need to select the Privileges tab.
  1. In the Privileges dialog, in the field under **Add User/Role** , enter the exact names of the users and roles to which you want to grant privileges.


Because all users are members of the PUBLIC role, you can use the PUBLIC role to grant privileges to all users.
  1. Click **Add to Privileges**.


For each entry in the **Add User/Role** field that matches a user or role in Dremio, a record appears in the USERS/ROLES table.
  1. In the USERS/ROLES table, toggle the checkbox for each privilege you want to grant for that user or role. For a description of the privilege, hover over the column name in the USERS/ROLES table. See the example below:


!
  1. (Optional) Repeat steps 4-6 if you want to add more users or roles and grant them privileges.
  2. When finished, click **Save**.


### Revoking Privileges Using the Dremio Console​
To revoke user and role privileges, complete the following steps:
  1. Locate the desired object.
  2. Click ![This is the icon that represents more actions.](https://docs.dremio.com/images/icons/settings.png) or ![This is the icon that represents more actions.](https://docs.dremio.com/images/icons/more.png) depending on the object.
  3. In the object settings dialog, select **Privileges** from the settings sidebar.
For some object types, the settings dialog automatically opens to display the privilege settings, and you do not need to select the Privileges tab.
  4. In the USERS/ROLES table, locate the desired user or role record. If the user or role is not listed, then they do not have specific privileges on the object.
     * To revoke some but not all privileges for the user or role, clear the checkboxes in the columns for the privileges you wish to revoke.
     * To revoke all privileges for a user or role, click ![This is the icon that represents more actions.](https://docs.dremio.com/images/ellipsis-icon.png) next to the user or role name and select **Remove**.
For a description of the privilege, hover over the column name in the USERS/ROLES table. See the example below:


!
  1. When finished, click **Save**.


If a user has a specific privilege on an object through their memberships in multiple roles and the privilege is revoked for one of the roles, the user retains the privilege until it is revoked on the same object for all roles to which the user belongs.
You can also grant or revoke privileges using [SQL commands](/reference/sql/commands/rbac) or [APIs](/reference/api/catalog/grants).
### Granting Privileges Using SQL Commands​
When granting privileges to users and roles with SQL commands, you may follow one of three methods: granting to a single dataset, granting to ALL DATASETS, and granting to a scope. Examples of these methods may be found under each section.
Each example includes an SQL command. For more information about command syntax, review the [Privileges (GRANT/REVOKE) SQL commands](/reference/sql/commands/rbac).
Because all users are members of the PUBLIC role, you can use the PUBLIC role to grant privileges to all users.
#### Granting to a Single Dataset​
When you have a user that needs access to only one table and no other objects, then you would simply assign them privileges for that dataset (see the example scenario outlined below).
You should use this method if you want to restrict a user's access to any other existing or future datasets.
If you're granting the user access to a table, then remember that they'll be able to create views based on that dataset, which that user can then grant access to other users.
##### Example: Single Dataset​
You have a user that you only want to give access to an individual table. You would need to navigate to the _Privileges_ screen from that dataset's settings and grant the user the `SELECT` privilege, or perform the following command from the SQL Editor:
Single dataset example

```
GRANT SELECT ON TABLE TableA1 TO USER user1  

```

The image below illustrates the objects `user1` now has access to.
!
This restricts `user1` so that they may only access the `TableA1` table, not any other datasets contained in the same folder. However, `user1` may still create views based on `TableA1`.
#### Granting to ALL DATASETS​
When you have a user that needs access to all existing datasets, then you would use the SQL syntax `ON ALL DATASETS` (see the example scenario outlined below). This gives the user access to all existing datasets. The user would not, however, automatically receive access to any future datasets created by other users.
You should use this method of privilege assignment if you want to restrict a user's access to parent objects, but still wish for them to have access to all existing datasets.
##### Example: All Datasets​
You have a specific user that needs access to all datasets in a specific folder, but they do not require privileges for the folders containing these tables. You would then execute the following command from the SQL Editor:
All datasets example

```
GRANT SELECT ON ALL DATASETS IN SYSTEM TO USER user1  

```

The image below illustrates the objects `user1` now has access to.
!
This command restricts the scope of `user1` to all datasets presently found in `source1`, such as `TableC1` and `TableD1`. Should additional datasets be created in the future, `user1` will not have access to them.
#### Granting to a Scope​
When you want to grant a user access to a parent object, such as a folder, this will also grant the user access to any datasets contained (see the example scenario outlined below).
You should use this method of privilege management if you wanted to grant a user access to all existing and future datasets contained under a parent object.
##### Example: Scope​
This method grants a user access to all existing and future datasets contained under a specified object. To accomplish this, you need to navigate to the _Privileges_ screen from that folder's settings and grant the user the `SELECT` privilege, or execute the following command from the SQL Editor:
Scope example

```
GRANT SELECT ON FOLDER Folder3 TO USER user1  

```

The image below illustrates the objects `user1` now has access to.
!
This grants `user1` the `SELECT` privilege on `Folder3`, which means they now have access to all existing and future datasets contained in that folder and its subfolders.
Was this page helpful?
[Previous Personal Access Tokens](/security/authentication/personal-access-tokens)[Next Privileges](/security/rbac/privileges)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Personal Access Tokens](/security/authentication/personal-access-tokens)[Next Privileges](/security/rbac/privileges)
!
