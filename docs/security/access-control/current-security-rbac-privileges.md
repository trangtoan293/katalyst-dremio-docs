---
url: /security/rbac/privileges
title: "Privileges | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64080.588387833
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Access Control](/security/rbac)
  * Privileges

Version: current [26.x]
On this page
# Privileges Enterprise
The following sections describe the supported privileges for each type of securable object.
Privileges that are inheritable also implicitly apply to child objects through [inheritance](/security/rbac#inheritance).
  * For the system, child objects include engines, model providers, identity providers, sources and spaces (including their folders, tables, and views), scripts, users, and roles.
  * For the [catalog](/data-sources/open-catalog), child objects include folders, tables, and views.
  * For sources and spaces, child objects include the folders, tables, and views the source or space contains.
  * For folders, child objects include the tables and views the folder contains, as well as any nested folders and their contents.


## System Privileges[​](/security/rbac/privileges#system-privileges "Direct link to System Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | 
  * Edit the wikis of all sources, spaces, folders, tables, and views.
  * Edit the definitions and settings of all tables and views.
  * Promote and demote all tables.
  * Create and delete views.
  * Add and remove folders.
  * Issue `ALTER SOURCE `source_name` REFRESH STATUS` commands.
  * Issue commands to manage metadata (including `REFRESH` and `FORGET`) for all tables.

 |  
| ALTER REFLECTION  | Create, edit, and view Reflections on all tables, including viewing all table Reflection and admin Reflection pages, using the API endpoints for listing all Reflections and individual Reflections, and viewing the job history for Reflections.  |  
| CALL MODEL  | Use the AI models available for the model provider.  |  
| CONFIGURE SECURITY  | Configure security-related features: set up social logins and identity providers for authentication; enable single sign-on (SSO) for BI applications like Tableau and Power BI; configure Dremio to honor tokens issued by external identity providers; and create custom OAuth applications.  |  
| CREATE MODEL PROVIDER  | Create model providers.  |  
| CREATE ROLE  | Create roles. Each role's creator is its default owner.  |  
| CREATE SPACE  | Create space. Each space's creator is its default owner.  |  
| CREATE SOURCE  | Create sources. Each source's creator is its default owner.  |  
| CREATE TABLE  | Create tables. Each table's creator is its default owner.  |  
| CREATE USER  | Create users. Each user's creator is its default owner.  |  
| DELETE  | Execute the delete operation on all Apache Iceberg tables.  |  
| DROP  | Remove sources, spaces, folders, tables, and views.  |  
| EXECUTE  | 
  * Run user-defined functions (UDFs).
  * Query and edit tables and views that are subject to row-access or column-masking policies (also requires SELECT or ALTER).

 |  
| EXPORT DIAGNOSTICS  |  [Download the cluster logs](/admin/monitoring/#retrieving-logs-from-the-dremio-console-enterprise) using the Dremio console.  |  
| EXTERNAL QUERY  | Run [external queries](/reference/sql/commands#querying-relational-database-sources-with-external-queries) on the sources in the system.
  * This privilege is only supported for Amazon Redshift, Microsoft SQL Server, MySQL, and PostgreSQL sources and Dremio Hub connectors that use advanced relational pushdown (ARP).

 |  
| INSERT  | Execute the insert operation on all Apache Iceberg tables.  |  
| MANAGE GRANTS  | Grant or revoke privileges on all objects.  |  
| MODIFY  | Access and modify settings on all objects.  |  
| SELECT  | 
  * View data from all sources, spaces, folders, and tables.
  * View the schema definition of all tables in all sources, spaces, and folders.
  * View the wikis of all sources, spaces, and folders.
  * View the wikis and labels of all tables.
  * View the graphs of all tables.
  * Promote tables.

 |  
| TRUNCATE  | Execute the truncate operation on all Apache Iceberg tables.  |  
| UPDATE  | Execute the update operation on all Apache Iceberg tables.  |  
| UPLOAD FILE  | Upload a file to any source, space, or folder.  |  
| VIEW JOB HISTORY  | View the job history for all objects.  |  
| VIEW REFLECTION  | View table metadata and Reflections on all tables and views in the system, including the Reflections tab on the Edit Dataset page for the table or view, the Reflections sidebar in the system settings, Reflection API endpoints for listing individual Reflections and all Reflections, and job history for Reflections.  |  
## Open Catalog Privileges[​](/security/rbac/privileges#open-catalog-privileges "Direct link to Open Catalog Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | Add, delete, or modify table or view definitions, columns, or settings of all datasets in scope, including editing the wiki. For tables, this includes managing metadata, such as Metadata Refresh and Forget.  |  
| ALTER REFLECTION  | Create, edit, and view Reflections on tables and views in the Open Catalog. Includes all interfaces including Reflection pages, admin Reflection pages, REST API endpoints (both individual Reflections and list all Reflections), and job history for Reflections.  |  
| CREATE TABLE  | Create tables in an Open Catalog.  |  
| MANAGE GRANTS  | Grant and revoke privileges on an Open Catalog.  |  
| MODIFY  | Edit the Open Catalog's settings.  |  
| SELECT  | Run `SELECT` queries on the tables and views and read their schema definitions, lineages, wikis, and labels.  |  
| USAGE  | Users must have the USAGE privilege on the Open Catalog to view, query, or alter any objects it contains. Even if a user only requires privileges on a single table, they must also have the USAGE privilege on the Open Catalog that contains the table. In addition to USAGE on the catalog, additional privileges are required for operations on the catalog's child folders and datasets.  |  
| WRITE  | Run `INSERT`, `UPDATE`, `DELETE`, `TRUNCATE`, `ALTER`, `ALTER REFLECTION`, `REFRESH METADATA`, and `FORGET METADATA` queries on the tables and views in an Open Catalog as well as edit their wikis and labels.  |  
| VIEW REFLECTION  | View Reflections on the tables or views in the Open Catalog. Includes all interfaces including the Reflection pages, admin Reflection pages, REST API endpoints (both individual Reflections and list all Reflections), and job history for Reflections.  |  
## Source Privileges[​](/security/rbac/privileges#source-privileges "Direct link to Source Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | 
  * Edit the source's wiki and the wikis of all folders and tables in the source.
  * Edit the definitions and settings of all tables in the source.
  * Promote and demote tables in the source and the source's child folders.
  * Issue `ALTER SOURCE `source_name` REFRESH STATUS` commands on the source.
  * Issue commands to manage metadata (including `REFRESH` and `FORGET`) for tables in the source.

 |  
| ALTER REFLECTION  | Create, edit, and view Reflections on all tables in the source. Includes table Reflection pages, admin Reflection pages, API endpoints for listing all Reflections and individual Reflections, and job history for Reflections.  |  
| CREATE TABLE  | Create tables using `CREATE TABLE` and `CREATE TABLE AS SELECT` (CTAS) in the source.
  * This privilege is only supported for sources that support mutability.

 |  
| DELETE  | Execute the delete operation on all Apache Iceberg tables in the source.  |  
| DROP  | Remove the source.  |  
| EXTERNAL QUERY  | Run [external queries](/reference/sql/commands#querying-relational-database-sources-with-external-queries) on the source.
  * This privilege is only supported for Amazon Redshift, Microsoft SQL Server, MySQL, and PostgreSQL sources and Dremio Hub connectors that use advanced relational pushdown (ARP).

 |  
| INSERT  | Execute the insert operation on all Apache Iceberg tables.  |  
| MANAGE GRANTS  | Grant and revoke privileges on the source and the objects it contains.  |  
| MODIFY  | Access and modify source settings.  |  
| OWNERSHIP  | Allows all actions on the source and all objects it contains.
  * Only one user or role (not both) can hold this privilege on the source at a time.
  * The owner and any user or role member with the MANAGE GRANTS privilege can transfer ownership using the `GRANT OWNERSHIP` command.

 |  
| READ METADATA  | View the following metadata for the source:
  * The node
  * The name and path
  * The number of columns, column names, and types of the objects in the source
  * The number of jobs run (shows only the jobs you have privileges to view)

 |  
| SELECT  | 
  * View data from all folders and tables in the source.
  * View the schema definition of all tables in the source.
  * View the wikis of all folders in the source.
  * View the wikis and labels of all tables in the source.
  * View the graphs of all tables in the source.
  * Promote tables in the source.

 |  
| TRUNCATE  | Execute the truncate operation on all Apache Iceberg tables.  |  
| UPDATE  | Execute the update operation on all Apache Iceberg tables.  |  
| VIEW REFLECTION  | View Reflections on all tables in the source. Includes table Reflection pages, admin Reflection pages, API endpoints for listing all Reflections and individual Reflections, and job history for Reflections.  |  
## Space Privileges[​](/security/rbac/privileges#space-privileges "Direct link to Space Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | 
  * Edit the space's wiki and the wikis of all folders and tables in the space.
  * Edit the definitions and settings of all tables in the space.
  * Promote and demote tables in the space and the space's child folders.
  * Issue commands to manage metadata (including `REFRESH` and `FORGET`) for tables in the space.

 |  
| ALTER REFLECTION  | Create, edit, and view Reflections on all tables in the space. Includes table Reflection pages, admin Reflection pages, API endpoints for listing all Reflections and individual Reflections, and job history for Reflections.  |  
| DELETE  | Execute the delete operation on all Apache Iceberg tables in the space.  |  
| INSERT  | Execute the insert operation on all Apache Iceberg tables in the space.  |  
| MANAGE GRANTS  | Grant and revoke privileges on the space and its child objects.  |  
| MODIFY  | Access and modify space settings.  |  
| OWNERSHIP  | Ownership includes all privileges on the space and the objects it contains. 
  * Only one user or role (not both) can hold this privilege on the space. 
  * The owner and any user or role member with the MANAGE GRANTS privilege can transfer ownership using the `GRANT OWNERSHIP` command.

 |  
| READ METADATA  | View the following metadata for the space:
  * The node
  * The name and path
  * The number of columns, column names, and types of the objects in the space
  * The number of jobs run (shows only the jobs you have privileges to view)

 |  
| SELECT  | 
  * View data from all folders and tables in the space.
  * View the schema definition of all tables in the space.
  * View the wikis of all folders in the space.
  * View the wiki and labels of all tables in the space.
  * View the graph of all tables in the space.
  * Promote tables in the space.

 |  
| TRUNCATE  | Execute the truncate operation on all Apache Iceberg tables in the space.  |  
| UPDATE  | Execute the update operation on all Apache Iceberg tables in the space.  |  
| VIEW REFLECTION  | View Reflections on all tables in the space. Includes table Reflection pages, admin Reflection pages, API endpoints for listing all Reflections and individual Reflections, and job history for Reflections.  |  
## Folder Privileges[​](/security/rbac/privileges#folder-privileges "Direct link to Folder Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | 
  * Edit the folder's wiki and the wikis of all subfolders, tables, and views it contains.
  * Edit the definitions and settings of all tables in the folder.
  * Promote and demote tables in the folder and any subfolders.
  * Create and delete tables and views in the folder.
  * Create and delete subfolders in the folder.
  * Issue commands to manage metadata (including `REFRESH` and `FORGET`) for tables in the folder.

 |  
| ALTER REFLECTION  | Create, edit, and view Reflections on all tables in the folder. Includes table Reflection pages, admin Reflection pages, API endpoints for listing all Reflections and individual Reflections, and job history for Reflections.  |  
| CREATE TABLE  | Create tables using `CREATE TABLE` and `CREATE TABLE AS SELECT` (CTAS) in the folder.
  * This privilege is only supported for sources that support mutability.

 |  
| DELETE  | Execute the delete operation on all Apache Iceberg tables in the folder.  |  
| DROP  | Remove the folder.  |  
| MANAGE GRANTS  | Grant and revoke privileges on the folder and its child objects, including the ability to transfer ownership using the `GRANT OWNERSHIP` command.  |  
| OWNERSHIP  | The privileges provided by ownership depend on your configuration. 
  * By default, ownership includes all actions on the folder and the objects it contains.
  * In [managed access spaces](/security/rbac#managed-access-spaces), the owner of a folder cannot grant and revoke privileges. 

Only one user or role (not both) can hold this privilege on the folder at a time.  |  
| READ METADATA  | View the following metadata for the folder:
  * The node
  * The name and path
  * The number of columns, column names, and types of the objects in the folder
  * The number of jobs run (shows only the jobs you have privileges to view)

 |  
| SELECT  | 
  * View data from the folder and the objects it contains.
  * View the schema definition of all tables in the folder.
  * View the wikis of the folders and any subfolders it contains.
  * View the wikis and labels of all tables in the folder.
  * View the graph of all tables in the folder.
  * Promote tables in the folder.

 |  
| TRUNCATE  | Execute the truncate operation on all Apache Iceberg tables.  |  
| UPDATE  | Execute the update operation on all Apache Iceberg tables.  |  
| VIEW REFLECTION  | View Reflections on all tables and views in the folder. Includes Reflection pages, admin Reflection pages, API endpoints for listing all Reflections and individual Reflections, and job history for Reflections.  |  
## Script Privileges[​](/security/rbac/privileges#script-privileges "Direct link to Script Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| DELETE  | Delete the script.  |  
| MANAGE GRANTS  | Grant and revoke privileges on the script.  |  
| MODIFY  | Modify the script.  |  
| VIEW  | View the script.  |  
## Table Privileges[​](/security/rbac/privileges#table-privileges "Direct link to Table Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | Edit the table's wiki, definitions, and settings and issue commands to manage metadata (including `REFRESH` and `FORGET`) for the table.  |  
| DELETE  | Execute the delete operation (Apache Iceberg tables only).  |  
| INSERT  | Execute the insert operation (Apache Iceberg tables only).  |  
| MANAGE GRANTS  | Grant and revoke privileges on the table.  |  
| OWNERSHIP  | Allows all actions on the table.
  * Only one user or role (not both) can hold this privilege on the table at a time.
  * The owner and any user or role member with the MANAGE GRANTS privilege can transfer ownership using the `GRANT OWNERSHIP` command.

 |  
| READ METADATA  | View the following metadata for the table:
  * The node
  * The name and path
  * The number of columns and column names in the table
  * The number of jobs run (shows only the jobs you have privileges to view)

 |  
| SELECT  | 
  * View data from the table.
  * View the schema definition of the table.
  * View the table's wiki and labels.
  * View the graph of all tables in the folder.

 |  
| TRUNCATE  | Execute the truncate operation (Apache Iceberg tables only).  |  
| UPDATE  | Execute the update operation (Apache Iceberg tables only).  |  
## User-Defined Function (UDF) Privileges[​](/security/rbac/privileges#user-defined-function-udf-privileges "Direct link to User-Defined Function \(UDF\) Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | Edit the function's wiki, definitions, and settings and issue commands to manage metadata (including `REFRESH` and `FORGET`).  |  
| EXECUTE  | 
  * Ability to run the UDF.
  * Query and edit tables and views that are subject to row-access or column-masking policies (also requires SELECT or ALTER).
  * Create row-access and column-masking policies for tables and views.

 |  
| MANAGE GRANTS  | Grant and revoke privileges on the UDF.  |  
| OWNERSHIP  | The privileges provided by ownership depend on your configuration. 
  * By default, ownership includes all actions on the UDF.
  * In [managed access spaces](/security/rbac#managed-access-spaces), the owner of a UDF cannot grant and revoke privileges on the UDF. 

Only one user or role (not both) can hold this privilege on the UDF at a time.  |  
## View Privileges[​](/security/rbac/privileges#view-privileges "Direct link to View Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | 
  * Edit the view's wiki.
  * Edit the view's definitions and settings.

 |  
| DELETE  | Execute the delete operation (views created from Apache Iceberg tables only).  |  
| INSERT  | Execute the insert operation (views created from Apache Iceberg tables only).  |  
| MANAGE GRANTS  | Grant and revoke privileges on the view, including the ability to transfer ownership using the `GRANT OWNERSHIP` command.  |  
| OWNERSHIP  | The privileges provided by ownership depend on your configuration. 
  * By default, ownership includes all actions on the view.
  * In [managed access spaces](/security/rbac#managed-access-spaces), the owner of a view cannot grant and revoke privileges on the view. 

Only one user or role (not both) can hold this privilege on the view at a time.  |  
| READ METADATA  | View the following metadata for the view:
  * The node
  * The name and path
  * The number of columns and column names in the view
  * The number of jobs run (shows only the jobs you have privileges to view)

 |  
| SELECT  | 
  * View data from the view.
  * View the schema definition of the view.
  * View the wiki of the view.
  * View the view's graph.

 |  
| TRUNCATE  | Execute the truncate operation (views created from Apache Iceberg tables only).  |  
| UPDATE  | Execute the update operation (views created from Apache Iceberg tables only).  |  
## Model Provider Privileges[​](/security/rbac/privileges#model-provider-privileges "Direct link to Model Provider Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| CALL MODEL  | Use the AI models available.  |  
| MANAGE GRANTS  | Grant and revoke privileges on the model provider.  |  
| MODIFY  | Access and edit the model provider settings.  |  
| OWNERSHIP  | Take all actions on the model provider, including deleting it and transferring ownership using the `GRANT OWNERSHIP` SQL command. 
  * Only one user or role (not both) can hold this privilege on the model provider at a time.

 |  
## User Privileges[​](/security/rbac/privileges#user-privileges "Direct link to User Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| ALTER  | Set a new password for the user and change the user's [type](/security/authentication/users#local-users) from local (internal) to external.
  * The ALTER privilege is supported only for local (internal) users.

 |  
| OWNERSHIP  | Take all actions on the user, including setting a new password, changing the user type from local (internal) to external, granting and revoking user privileges, and transferring ownership using the `GRANT OWNERSHIP` SQL command.
  * Only one user or role (not both) can hold this privilege on the user at a time.

 |  
## Role Privileges[​](/security/rbac/privileges#role-privileges "Direct link to Role Privileges")  
| PRIVILEGE  | DESCRIPTION  |  
| --- | --- |  
| OWNERSHIP  | Take all actions on the role, including adding and removing role members, granting and revoking role privileges, and transferring ownership using the `GRANT OWNERSHIP` SQL command.
  * Only one user or role (not both) can hold this privilege on the role at a time.

 |  
## ALL Privilege[​](/security/rbac/privileges#all-privilege "Direct link to ALL Privilege")
The ALL privilege is available on all objects in Dremio. Granting the ALL privilege on an object grants the user or role all possible privileges, except OWNERSHIP, on the object.
The ALL privilege grants a static set of privileges that includes only the privileges that exist when you run the grant command. ALL privilege grants are not automatically updated to include new privileges that become available later.
Revoking the ALL privilege on a parent object does not change any privileges that are directly assigned on child objects. For example, if you grant the SELECT privilege on Table 1 in Folder A to User 1 and then grant the ALL privilege on Folder A to User 1, User 1 inherits all privileges on Table 1. If you later revoke the ALL privilege on Folder A for User 1, User 1 retains the SELECT privilege on Table 1.
Was this page helpful?
[Previous Access Control](/security/rbac)[Next Role Management](/security/rbac/roles)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Access Control](/security/rbac)[Next Role Management](/security/rbac/roles)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fsecurity%2Frbac%2Fprivileges%2F&_biz_t=1777950400972&_biz_i=Privileges%20%7C%20Dremio%20Documentation&_biz_n=162&rnd=918831&cdn_o=a&_biz_z=1777950400972)
