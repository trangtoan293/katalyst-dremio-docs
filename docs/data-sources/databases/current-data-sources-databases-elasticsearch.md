---
url: /data-sources/databases/elasticsearch
slug: /data-sources/databases/elasticsearch
title: "Elasticsearch | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.389527458
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Elasticsearch

Version: current [26.x]
On this page
# Elasticsearch
This topic describes how to configure Elasticsearch as a source in Dremio.
If your organization upgrades to Elasticsearch v7.0+, you will need to remove and re-add it as a source in Dremio.
### Compatibility​
Supported Versions:
  * Elasticsearch versions 7.x, 8.x, and 9.x (8.x and 9.x in version 7 compatibility mode)
  * Pushdown Scripting Support: Painless


### Metadata Concepts​
In order to plan and execute queries, Dremio captures and stores Elastic metadata in Dremio’s internal metadata database to efficiently plan and execute queries. This captured metadata is broken into two broad categories:
  * **Dataset Discovery** : Names of available Indices, Mappings and Aliases. This information is required to expose databases and tables in the Dremio UI and BI tool connections.
  * **Dataset Details** : Complete information including definition of mapping, sampled schema and shard locations. This information is required to complete a query against a particular table.


Dremio will interact with the `/_cluster/state/metadata` api to understand the nature of the objects inside your Elasticsearch install. From this API endpoint, Dremio can learn metadata about each of these object type. By default, Dataset Discovery has an hourly refresh interval. Additionally, Dataset Details has an hourly refresh interval for Elastic tables that have been queried at least once.
### Accessing Objects​
The Dremio Elastic Connector is designed to provide a consistent and understandable view of Elastic Indices and Mappings, through the use of a two level hierarchy. In Dremio, these two levels can be thought of as database and table. Elastic Indices and Aliases are exposed as databases and each mapping within those index or alias is exposed as a table.
Dremio also supports exposing data inside Elastic aliases. In Dremio, aliases and indices are not visually distinguished and a user can easily interact with either entity. Additionally, Dremio understands filtered aliases and will correctly apply those filters as part of its operations.
Dremio also allows users access to Elastic’s capability to expose synthetic tables through wildcards and comma separated lists. A user can use wildcards in both the name of the database (index) or the name of the table (mapping). This is done by modifying the from clause in a standard SQL query. Once that query is executed, if Elastic recognizes the name, those entities will show up in the product as additional datasets available for query and access (and will be maintained and secured like any other table). If you want to have Dremio forget about those entities, an administrator can use `ALTER TABLE `TABLE` FORGET METADATA` to remove those synthetic entities.
Access objects examples

```
SELECT * from elastic."feb*"."big"  
SELECT * from elastic."feb,march"."big"  
SELECT * from elastic."feb"."big,small"  

```

### Execution Metadata​
When Dremio executes queries against Elastic, it usually parallelizes the query to interact with each shard in your Elastic cluster to move data as quickly as possible back to Dremio. Dremio does this by probing the `/`indexOrAlias`/_search_shards` API.
### List Promotion Rules​
Elastic does not distinguish between scalar and list of scalars but Dremio does. In order to ensure the best possible user experience, Dremio uses the schema analysis phases outlined above to expose the final user schema. To simplify things, once Dremio detects at least one field with a list of scalars, it exposes all records for that field as a list of scalars. This allows users to avoid having to deal with union types. An example:
  * Elastic mapping is defined as field ‘A’ and type integer.
  * Records 1-4 exist and each have a single integer for field ‘A’.
  * Dremio samples the schema and exposes field ‘A’ as a scalar.
  * Record five is inserted into the index
  * Dremio now exposes field 'A' as an `int[]` for all records 1-5.


Dremio does this promotion both at initial sampling time and during execution. If during execution Dremio discovers a value for a field that is of scalar type is actually a list type, Dremio will learn this schema and re-execute the query.
### Special Handling for Geoshape​
Geoshape is a special type in the Elastic ecosystem. This is because has a different schema depending on which type is exposed. Despite this, they are all represented at the type system level as a single type. In this situation, Dremio exposes the Geoshape type and specifically its potential coordinates fields as a group of union fields supporting from 1 to 4-dimensional double arrays to reflect the various types of Elastic geoshapes.
### Mapping Consistency and Schema Learning​
In some cases, it is possible that Dremio will query an index and find a schema change that was previously unknown to Dremio (different type for field or new field). In both cases, Dremio will do a two step verification process to correctly learn the new schema. Dremio maintains a mapping checksum for all identified schemas. When it encounters an unexpected change, it will first verify that the canonical schema from Elastic is consistent with Dremio’s previously known mapping. If it is, Dremio will follow its standard promotion rules. If it is not, Dremio will halt execution and request the user to use the `ALTER TABLE `TABLE` REFRESH METADATA`  
operation to have Dremio immediately reread the updated Elastic mapping information. Note, this is an optional step as the mapping will also be updated on the schedule defined for automated metadata updates.
### Discovery of New Fields​
As part of the Dataset Details refresh, Dremio will automatically reload all Elastic mappings to learn about any new fields. Each time this happens, Dremio will resample and update its understanding of schema.
### Mapping Merging​
If you compose a query that includes multiple mappings, Dremio will do its best to merge those mappings. Mappings are merged on a field by field basis. Mappings can be merged if at least one of the following is true:
  1. Fields with overlapping positions are the same type (`mapping1.a::int` and `mapping2.a::int`)
  2. Fields are in non-overlapping positions (`mapping1.a::int` versus `mapping2.b::float`)


When Dremio merges a mapping, it does so linearly, inheriting the initial field order based on the first index queried.
### Elastic Pushdowns​
Dremio supports multiple types of pushdowns for different Elastic version and configuration combinations including:
  * Predicate (e.g. x &lt; 5) pushdowns using Elastic queries
  * Lucene search queries using the `CONTAINS` syntax (starting from 5.3.x)
  * Optional source field/inclusion exclusion (disabled for performance reasons but can be enabled if Dremio has a slow connection to Elastic nodes).
  * Group by pushdowns for grouping by strings, dates, times, timestamps, integer, longs, doubles, floats, booleans using the Elastic Term Aggregation capabilities
  * Aggregate Measure pushdown including `COUNT`, `COUNT(DISTINCT)`, `SUM`, `AVG`, `STDDEV`, `VAR` using Elastic aggregation framework.
  * Support for converting many arbitrary expressions and ~50 common functions through the use of Groovy (ES2) or Painless (ES5+) scripts for use in both filter and aggregate expressions.


### Expression and Function Pushdowns​
Dremio supports pushing down the following expressions and functions:  
| Type  | Expression/Function  |  
| --- | --- |  
| Comparison  | Equals  |  
| Comparison  | Not equals  |  
| Comparison  | Greater than  |  
| Comparison  | Greater or equal to  |  
| Comparison  | Less than  |  
| Comparison  | Less or equal to  |  
| Comparison  | LIKE  |  
| Comparison  | ILIKE  |  
| Boolean  | NOT  |  
| Boolean  | OR  |  
| Boolean  | AND  |  
| NULL Check  | IS NULL  |  
| NULL Check  | IS NOT NULL  |  
| Flow  | CASE  |  
| Type Conversion  | CAST  |  
| String  |  CHAR LENGTH  |  
| String  |  UPPER  |  
| String  |  LOWER  |  
| String  |  TRIM  |  
| String  |  CONCAT  |  
| Numeric  |  Add  |  
| Numeric  |  Subtract  |  
| Numeric  |  Multiply  |  
| Numeric  |  Divide  |  
| Numeric  |  POWER  |  
| Numeric  |  MOD  |  
| Numeric  |  ABS  |  
| Numeric  |  EXP  |  
| Numeric  |  FLOOR  |  
| Numeric  |  CEIL  |  
| Numeric  |  LOG  |  
| Numeric  |  LOG10  |  
| Numeric  |  SQRT  |  
| Numeric  |  SIGN  |  
| Numeric  |  COT  |  
| Numeric  |  ACOS  |  
| Numeric  |  ASIN  |  
| Numeric  |  ATAN  |  
| Numeric  |  DEGREES  |  
| Numeric  |  RADIANS  |  
| Numeric  |  SIN  |  
| Numeric  |  COS  |  
| Numeric  |  TAN  |  
### How Dremio Decides What To Pushdown​
Dremio works hard to pushdown as many operations as possible to Elastic to try to provide the highest performance experience. Dremio is also focused on maintaining a consistent SQL experience for users who may not understand Elastic or its APIs. As such, Dremio is very focused on providing a correct SQL experience. This includes respecting null semantics through the use of missing aggregation, expression evaluation consistency, correct aggregation semantics on analyzed fields, etc. Dremio also works well with Groovy and Painless to pushdown many more types of operations. It will work without scripts enabled but it is strongly recommended to enable scripts.
Given the nature of Elastic’s API, Dremio utilizes the following pieces of functionality to provide a SQL experience: Bucket Aggregations, Pipeline Aggregations, Filter Aggregations and searches using Elastic Query DSL.
### Script Construction​
Dremio builds custom Groovy (ES2) or Painless (ES5) scripts to interact with Elastic. Because of the many small differences in these languages (type handling, dynamic dispatch, type coercion, function signatures, primitive handling, etc), these scripts are different for each version of Elasticsearch. These scripts utilize Elastic’s doc values columnar capability where possible but also rely on `_source` fields for certain operations (e.g. aggregations on analyzed fields for example). As Dremio analyzes a user’s SQL expression, it decomposes the expression into a script that can be understood by Elastic’s scripting capability.
There are many situations where Dremio uses an expression that might at first be unexpected. These are because of the nature of some of Elastic apis. Some examples behaviors that Dremio does to ensure correct results:
  * Dremio uses _source fields for accessing IP addresses when aggregating or filtering in ES2 because the type has changed between ES2 and ES5
  * Dremio doesn’t push down multi-index complex expressions (`table1.a[2].b[3].c[4]`) using `doc` values because doc values can only reference leaf fields and leaf arrays
  * Dremio doesn’t do any array dereferencing using `_source` fields because they are not canonicalized to the Elastic mapping. This means that nested arrays `[1,[2,3]]` haven’t been flattened to the Elastic canonical representation `[1,2,3]`. This is done as otherwise scripts would produce wrong result.
  * Dremio won’t use a doc field reference for a field that has it implicitly disabled (`string/text`) or explicitly disabled (`doc_values: false`).
  * Dremio won’t use `doc` fields for GeoShapes. This is because Dremio doesn’t expose a first class shape objects and the fields exposed in Dremio (lists of arrays of doubles) are not directly related to Elastic’s internal representation or query capabilities.
  * Dremio won’t pushdown operations against nested fields. This is because nested fields are stored out of line of the core document (not in the original document’s doc values) and have semantics inconsistent with traditional SQL aggregation. (Dremio is exploring future work to expose this through enhancements to the language.) Note that Dremio also doesn’t use `_source` field scripts to interact with nested documents because they are exposed as arrays of values and suffer from the canonicalization issue described above.


### Debugging and Logging​
If you want to better understand how Dremio is interacting with your Elastic cluster, you can enable Dremio Elastic logging on each Dremio node. This will record each response and request to the Elastic cluster, including a portion of each message body.
You can do this by adding the following configuration to your `conf/logback.xml` file on all nodes:
Configuration for conf/logback.xml file

```
  <appender name="elasticoutput" class="ch.qos.logback.core.rolling.RollingFileAppender">  
    <file>${dremio.log.path}/elastic.log</file>  
    <rollingPolicy class="ch.qos.logback.core.rolling.TimeBasedRollingPolicy">  
      <fileNamePattern>${dremio.log.path}/archive/elastic.%d{yyyy-MM-dd}.log.gz  
      </fileNamePattern>  
      <maxHistory>30</maxHistory>  
    </rollingPolicy>  
    <encoder>  
      <pattern>%date{ISO8601} [%thread] %-5level %logger{36} - %msg%n  
      </pattern>  
    </encoder>  
  </appender>  
  <logger name="elastic.requests" additivity="false">  
    <level value="info"/>  
    <appender-ref ref="elasticoutput"/>  
  </logger>  

```

### Working with Elasticsearch and x-pack​
If your Elasticsearch source uses Shield, then your Elasticsearch user account must have the 'monitor' privilege at the cluster level (an admin user has this by default). In addition, for each index you want to query upon, your user account need to have the 'read' and 'view_index_metadata' privilleges as well. Both privilleges are included in 'all'.
The following is an example to set up a role 'dremio' with necessary privilleges to access 'test_schema_1' index:
Grant privileges to 'dremio' role

```
POST /_xpack/security/role/dremio  
  
{  
  "cluster": [ "monitor" ],  
  "indices": [  
    {  
      "names": [ "test_schema_1" ],  
      "privileges": [ "read", "view_index_metadata" ]  
    }  
  ]  
}  

```

### Working with Elasticsearch and Shield​
If your Elasticsearch source uses Shield, then your Elasticsearch user account must have the 'monitor' privilege at the cluster level (an admin user has this by default). If your account lacks the 'monitor' privilege, and you don't have access to an admin user, you can create a new account with 'monitor' by following these steps:
  * Log in to a search node, go the Elasticsearch install's home directory, and open the file ./config/shield located inside.
  * Append this text, which gives monitor privileges to an Elasticsearch index called `books` for any user with the `dremio_user` role:
Text to append to ./config/shield file

```
dremio_user:  
cluster:  
- cluster:monitor/nodes/info  
- cluster:monitor/state  
- cluster:monitor/health  
indices:  
'books' :  
- read  
- indices:monitor/stats  
- indices:admin/get  
- indices:admin/mappings/get  
- indices:admin/shards/search_shards  

```

  * Run this command, adding a new user to Shield that has the 'dremio_user' role:
Add new user to Shield

```
./bin/shield/esusers useradd <username> -r dremio_user  

```

  * Copy the Shield config file you edited to every other node in the Elasticsearch cluster:
Copy Shield config file to other nodes

```
scp -r ./config/shield root@<other-es-node>:<elastic-install-dir>/config  

```



## Configuring Elasticsearch as a Source​
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Elasticsearch**.


### General​
**Name**
Specify the name you want to use for the Elasticsearch data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
**Connection**
  * Host: Provide the name of the host to use to connect to the Elasticsearch data source.
  * Port: Provide the port to use with the specified hostname to connect to the Elasticsearch data source (default is `9200`).
  * Encrypt connection: Select or deselect the checkbox to specify whether Dremio should encrypt the connection to the Elasticsearch data source.
  * Managed Elasticsearch service: Select the checkbox if you are connecting to a managed Elasticsearch instance or Dremio only has access to the specified host.


**Authentication**
  * No Authentication
  * Master Credentials (default):
    * Username: Elasticsearch username
    * Password: Select the password store from the dropdown menu:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.


### Advanced Options​
Select or deselect the checkboxes to configure settings for the following options:
  * Show hidden indices that start with a dot (.)
  * Use Painless scripting with Elasticsearch 5.0+ (experimental)
  * Show _id columns
  * Use index/doc fields when pushing down aggregates and filters on analyzed and normalized fields (may produce unexpected results)
  * Perform keyword searches when pushing down fields mapped as text and keyword
  * Use scripts for query pushdown
  * If the number of records returned from Elasticsearch is less than the expected number, warn instead of failing the query
  * Force Double Precision


Specify the desired settings for the following options:
  * Read timeout (seconds)
  * Scroll timeout (seconds)
  * Scroll size: Setting must be less than or equal to your Elasticsearch setting for `index.max_result_window`, which typically defaults to 10,000.


Under **Encryption** , choose a Validation Mode option:
  * Validate certificate and hostname
  * Validate certificate only
  * Do not validate certificate or hostname


### Reflection Refresh​
  * **Refresh Settings** : Select whether to never refresh Reflections; refresh at an interval based on hours, days, or weeks; or refresh at the specified schedule.
  * **Expire Settings** : Select whether Reflections should never expire or expire at an interval based on hours, days, or weeks.


### Metadata​
Under **Dataset Handling** , select or deselect the checkbox to specify whether Dremio should remove dataset definitions if underlying data is unavailable.
Under **Metadata Refresh** :
  * Dataset Discovery: Specify the refresh interval to use for the names of top-level source objects such as tables.
  * Dataset Details: Specify refresh and expiration intervals for the metadata Dremio needs for query planning, such as information on fields, types, shards, statistics and locality.


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an Elasticsearch Source​
To update an Elasticsearch source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Elasticsearch as a Source.
  4. Click **Save**.


## Deleting an Elasticsearch Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an Elasticsearch source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## For More Information​
  * See [Elasticsearch Data Types](/reference/sql/data-types/mappings/elasticsearch) for information about mapping to Dremio data types.


Was this page helpful?
[Previous Dremio Cluster](/data-sources/databases/dremio)[Next Google BigQuery](/data-sources/databases/google-bigquery)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Dremio Cluster](/data-sources/databases/dremio)[Next Google BigQuery](/data-sources/databases/google-bigquery)
!
