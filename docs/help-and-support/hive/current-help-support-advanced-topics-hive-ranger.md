---
url: /help-support/advanced-topics/hive-ranger
slug: /help-support/advanced-topics/hive-ranger
title: "Ranger-Based Authorization | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64222.996775666
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Ranger-Based Authorization

Version: current [26.x]
On this page
# Ranger-Based Authorization Enterprise
Ranger-based authorization is a Hive authorization client that checks the Apache Ranger (Ranger) policy permissions and then allows/disallows access as defined by the Ranger policy.
Dremio only supports one data governance policy manager at a time, so you can use either Dremio or Ranger as a policy manager but not both at the same time.
When adding a new Hive source, you have the following options for Hive authorization clients:
  * Storage-Based with User Impersonation
  * SQL-Based
  * Ranger-Based


## Enabling Ranger-Based Authorization[​](/help-support/advanced-topics/hive-ranger/)
To enable Ranger policy support:
  1. Add a new Hive Source.
  2. Select the `Ranger Based` authorization button.
  3. Provide the following information:
     * Ranger Service Name - This field corresponds to the security profile in Ranger. Example: `hivedev`
     * Ranger Host URL - This field is the path to the actual Ranger server. Example: `http://yourhostname.com:6080`


## Ranger Security Framework[​](/help-support/advanced-topics/hive-ranger/)
Ranger offers a centralized security framework to manage row-access and column-masking policies over Hadoop and related components such as Apache Hive.
Using the Ranger administration console, you can:
  * Manage policies around accessing a resource (file, folder, database, table, etc) for a particular set of users and/or groups and enforce the policies within Hadoop.
  * Enable audit tracking and policy analytics for deeper control of the environment.
  * Manage data access by providing the ability to delegate administration of certain data to other group owners, with an aim of decentralizing data ownership.


## Ranger Configuration Policies[​](/help-support/advanced-topics/hive-ranger/)
The Ranger policies are configured in the Ranger Console for the selected databases.  
The Ranger Admin creates policies to set permissions at the user/group level on the selected table(s). Access to the tables can be allowed or disallowed as defined in the Ranger policy for the given user/group.
Reflections access: In order for Reflections to be created successfully, you must ensure that the Dremio service user (the user running the Dremio process on the host) has access to all relevant databases and tables. This is done by defining Ranger policies that establishes access permission for the Dremio service user on the selected databases and tables.
## Ranger Auditing[​](/help-support/advanced-topics/hive-ranger/)
Auditing is enabled through Ranger. When auditing is enabled, Dremio-related access requests show up in the audit log as `ranger-acl-dremio` in the Access Enforcer column.
To enable additional Ranger audit properties, add the properties via one of the following methods:
  * Select `Advanced Options` and add the properties.
  * Copy the Ranger configuration file into the `<dremio-root>/plugins/connectors/\<hive-plugin-id>`. on all coordinator nodes. (See [Hive Configuration](/data-sources/lakehouse-catalogs/hive) for more details).


Example: **`<dremio-root>/plugins/connectors/hive3-ee.d/ranger-hive-audit.xml`**
## Using Kerberos with Ranger[​](/help-support/advanced-topics/hive-ranger/)
If you are using Kerberos with Ranger, ensure that the Dremio user (the user associated with the Dremio service principal) is configured to interact (as an Admin) with a Kerberized Ranger instance.
Dremio service user can be configuration via the Ranger UI through one of the following methods:
  * Ranger User/Groups
  * Ranger Service Manager


### Configure via Ranger User/Groups[​](/help-support/advanced-topics/hive-ranger/)
If the Dremio service user is given Admin privileges via the Ranger User/Groups, you are not required to configure via the Ranger Service Manager.
  1. In the Ranger Admin UI, navigate to the User/Groups page.
  2. Find and edit the Dremio user.
  3. Select the Admin role for the Dremio user.


### Configure via Ranger Service Manager[​](/help-support/advanced-topics/hive-ranger/)
If the Dremio service user is configured via the Ranger Service Manager, you are not required to give Admin privileges via the Ranger User/Groups.
  1. In the Ranger Admin UI, navigate to **Access Manager &gt; Service Manager &gt; Edit Service**.
  2. In the Service configuration section, add the Dremio service user to the `policy.download.auth.users` property. For example:

  
| Configuration Name  | Configuration Value  |  
| --- | --- |  
| policy.download.auth.users  | hive,dremio  |  
In this example configuraton, the `hive` configuration value is for the Hive service user. This setting may not be applicable for your environment; it is not a requirement for Dremio.
## Enabling Row-Level Filtering and Column-Masking Policies[​](/help-support/advanced-topics/hive-ranger/)
For organizations configured to use Apache Ranger and Hive sources, support automatically exists in Dremio to handle security policies set from Ranger.
The following filtering/masking options are supported:
  * Row Filtering
    * Valid `WHERE` clauses on the table
  * Column-Masking
    * Redact - Replaces all alphabetic characters with x and all numeric characters with n.
    * Partial mask: show last 4 - Displays only the last four characters of the full column value's.
    * Partial mask: show first 4 - Displays only the first four characters of the full column value's.
    * Hash - Replaces all characters with a hash of the entire cell's value.
    * Nullify - Replaces all characters in the cell with a NULL value.
    * Unmasked (retain original value) - No masking is applied to the cell.
    * Date: show only year - Displays the year portion of a date string, defaulting the month and day to 01/01.
    * Custom - Specifies a custom masked value or expression. Custom masking may use any valid 


For additional information, see [Row-Level Filtering & Column-Masking](/security/integrations/row-column-policies-ranger).
## Troubleshooting[​](/help-support/advanced-topics/hive-ranger/)
#### Access denied[​](/help-support/advanced-topics/hive-ranger/)
If access is denied when attempting to query a Hive data source under the following circumstances:
  * Ranger-based authorization is configured
  * Dremio logs a "FileNotFoundException */xasecure-audit.xml (No such file or directory)" error.


This behavior is triggered within the Ranger plugin libraries when hdfs-site.xml or hive-site.xml are present in the Hive plugin's configuration path (eg a sub-directory under `<dremio-root>/plugins/connectors/\<**hive-plugin-id**>`. See [Hive Configuration](/data-sources/lakehouse-catalogs/hive) for more details).
To fix this environment issue, rename the **ranger-hive-audit.xml** configuration file generated by the Ranger Hive plugin installer to **xasecure-audit.xml** and copy it to the Dremio configuration path on all coordinator nodes.
#### PolicyRefesher Error[​](/help-support/advanced-topics/hive-ranger/)
If Dremio is deployed in a Kerberized environment and the Hive data source is unable to retrieve it's policies from Ranger, it is possible that the user running Dremio isn't configured to pull policies from the Ranger Admin host. If the Dremio service user doesn't have the permissions to download the desired service's policies, you may receive a `failed to refresh policies` error message in the Dremio logs.
To resolved this issue, ensure that the Dremio service user is present in the list of users that have the permission to pull down a specific policy:
  1. On the Ranger Admin UI, edit the Hive service used by Dremio.
  2. In the **Add New Configurations** section, ensure `policy.download.auth.users` contains the Dremio service user.


## Limitations[​](/help-support/advanced-topics/hive-ranger/)
  * **Ranger Row Filtering & Column-Masking:** Dremio’s support for Ranger is specific to policies that define table-level access. Ranger policies that include row filtering or column-level masking are not supported in **Dremio 19.x and earlier**. Row-filtering and column-level masking are supported in Dremio 20.0.x and later.
  * Tag-based policies in Ranger-based authorization for Hive data sources are not supported in **Dremio 24.0.x and earlier**. Tag-based policies are only supported in Dremio 24.1.x and later. For more information, see 
  * If you only have column or row-access permissions for a table, then you cannot view the table in Dremio (access is denied).
  * Dremio integrates Apache Ranger version 1.2.
  * The Ranger plug-in supports only one audit server (this is a limitation with how Ranger handles auditing).
  * Ranger properties defined in any of the standard **ranger-hive-yyyy.xml** configuration files are stored in the **dremio-root/conf** directory. Example: **conf/ranger-hive-audit.xml**
Ranger properties that do not have the **ranger.plugin.hive** prefix will overwrite one another.
  * If users and groups are defined in LDAP or Microsoft Entra ID, then the Dremio Coordinator host operating system (OS) must be configured to perform user lookup through the identity provider. This is a requirement of the Ranger plug-in, which defers the lookup to the host OS where the plug-in resides (in this case, the same host that the Dremio Coordinator is using to handle the query). If the host is incorrectly configured, then Ranger cannot lookup the correct user and group information.


Was this page helpful?
[Previous Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries)[Next Refreshing Metadata](/help-support/advanced-topics/metadata-caching)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Querying Relational-Database Sources Directly](/help-support/advanced-topics/external-queries)[Next Refreshing Metadata](/help-support/advanced-topics/metadata-caching)
!
