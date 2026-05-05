---
url: /data-sources/databases/mongo
slug: /data-sources/databases/mongo
title: "MongoDB | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.45036925
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * MongoDB

Version: current [26.x]
On this page
# MongoDB
## Requirements​
To connect to MongoDB, you need:
  * MongoDB (Dremio supports MongoDB 6.0+)
  * Access to execute the 


## Limitation​
DX-29932
Queries that un-nest nested fields are not allowed as they would cause incorrect schemas. This may be easily circumvented by pushing filters into the subquery or by simply not referencing the alias.
## Configuring MongoDB as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **MongoDB**.


### General​
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection​  
| Name  | Description  |  
| --- | --- |  
| Hosts  | A list of Mongo hosts. If MongoDB is sharded, enter the mongos hosts. Otherwise, enter the mongod host.  |  
| Port  | A list of Mongo port numbers. Defaults to 27017.  |  
  * **Connection Scheme** -- Select how to connect to the source.
  * **Encrypt connection** -- Forces an encrypted connection over SSL.
  * **Read from secondaries only** -- Disables reading from primaries. Might degrade performance.


#### Authentication​
  * No Authentication
  * Master Credentials (default):
    * Username: MongoDB username
    * Password: Select the password store from the dropdown menu:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.
    * Authentication database: Provide the name of the database that Dremio should authenticate against.


### Advanced Options​
! !
  * **Subpartition Size** -- Number of records to be read by query fragments. This option can be used to increase query parallelism.
  * **Sample Size** -- Number of records to be read when sampling to determine the schema for a collection. If zero the sample size is unlimited.
  * **Sample Method** -- The method (First or Last) by which records should be read when sampling a collection to determine the schema.
  * **Auth Timeout (millis)** -- Authentication timeout in milliseconds.
  * **Field names are case insensitive** -- When enabled, Dremio reads all known variations of a field name when determining the schema, ignoring any value set for Sample Size. All field name variations are then used when pushing an operation down to Mongo.
  * **Connection Properties** -- A list of additional MongoDB connection parameters.


### Reflection Refresh​
! !
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata​
 !
#### Dataset Handling​
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh​
  * **Dataset Discovery** -- Refresh interval for top-level source object names such as names of DBs and tables.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
  * **Dataset Details** -- The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode -- Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets -- Dremio updates details for previously queried objects in a source.  
This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets -- Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed -- Dremio updates details for a dataset at query time. This mode minimized metadata queries on a source when not used, but might lead to longer planning times.
    * Fetch every -- Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after -- Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a MongoDB Source​
To update a MongoDB source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring MongoDB as a Source.
  4. Click **Save**.


## Deleting a MongoDB Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a MongoDB source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns​
Dremio offloads these operations to MongoDB:
ABS  
ADD  
AND  
CASE  
CEIL  
CONCAT  
DAY_OF_MONTH  
DIVIDE  
EQUAL  
EXP  
FLOOR  
GREATER  
GREATER_OR_EQUAL  
HOUR  
LESS  
LESS_OR_EQUAL  
LN  
LOG  
LOG10  
MAX  
MIN  
MINUTE  
MOD  
MONTH  
MULTIPLY  
NOT  
NOT_EQUAL  
OR  
POW  
REGEX  
SECOND  
SQRT  
SUBSTR  
SUBTRACT  
TO_LOWER  
TO_UPPER  
TRUNC  
YEAR  

## For More Information​
  * See [MongoDB Data Types](/reference/sql/data-types/mappings/mongo) for information about mapping to Dremio data types.


Was this page helpful?
[Previous Microsoft SQL Server](/data-sources/databases/sql-server)[Next MySQL](/data-sources/databases/mysql)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Microsoft SQL Server](/data-sources/databases/sql-server)[Next MySQL](/data-sources/databases/mysql)
!
