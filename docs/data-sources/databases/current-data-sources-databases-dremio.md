---
url: /data-sources/databases/dremio
slug: /data-sources/databases/dremio
title: "Dremio Cluster | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.288859875
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * Dremio Cluster

Version: current [26.x]
On this page
# Connecting to Another Dremio Enterprise Cluster
You can add a Dremio Enterprise cluster as a data source. Such a cluster is referred to as a _data-source cluster_. The Dremio cluster that you add it to is referred to as a _querying cluster_.
Only Dremio Enterprise can serve as a data-source cluster. Using Dremio Cloud as a data-source cluster is not supported.
A data-source cluster gives a querying cluster access to one or more data sources, such as Amazon S3, Hive, and Postgres, that are connected to the data-source cluster. Dremio treats the connected Dremio cluster as any other supported data source. The data sources that are connected to the data-source cluster are represented as schemas. From a querying cluster, you can drill down into the schemas to see source datasets. You can then promote source datasets to tables, create Reflections and views on those tables, and views on the views, and so on.
## Example​
In this diagram, there are two Dremio Enterprise clusters: **Dremio_1** and **Dremio_2**. Suppose that you wanted to access **DataSource_2** from **Dremio_1**. To do so, you would add **Dremio_2** as a data source to **Dremio_1**. In fact, you could add any number of Dremio Enterprise clusters as data sources.
![Connecting one Dremio Enterprise cluster to another](https://docs.dremio.com/images/D-to-D-intro.png)
In the UI for **Dremio_1** , **Dremio_2** is listed under **Sources** &gt; **Databases**. If you were to select **Dremio_2** there, you would see the folder **DataSource_2**. Double-clicking that folder would show a list of the folders or schemas in that data source.
An administrator can promote a table on a data source connected through a data-source cluster, just as it is possible to do on data source that is directly connected to a querying cluster. For example, an administrator promotes table `DataSource_1.Table_1` from `DataSource_1.Source_1` on the data source directly connected to **Dremio_1** , and also promotes table `Dremio_2.DataSource_2.Table_2` from `DataSource_2.Source_2` via the data-source cluster.
![Connecting to a data source directly and through a Dremio Enterprise cluster](https://docs.dremio.com/images/D-to-D-mix.png)
The administrator can then use the tables as any other table, by querying them, creating views on them, and creating Reflections on them.
If **Dremio_1** were connected to two Dremio clusters, the administrator could promote tables on both. Then, business users could run queries and view reports that federated data across the two data-source clusters.
![Queries can federate data that is in two or more clusters.](https://docs.dremio.com/images/D-to-D-federation-2.png)
And while business users run queries through the querying-cluster, other business users can continue running queries directly through a data-source cluster.
![Business users can still query data-source clusters directly.](https://docs.dremio.com/images/D-to-D-federation-3.png)
  * Ensure that the Dremio instance that you connect to does not itself connect to your original Dremio instance. For example, if **Dremio_1** connects to **Dremio_2** as a data source, ensure that **Dremio_2** does not connect to **Dremio_1** as a data source.

![Avoid recursive loops.](https://docs.dremio.com/images/D-to-D-mix-recursion.png)
  * Querying across more than one region or more than one cloud vendor might increase query latency. Querying across cloud vendors also might result in egress charges from cloud vendors. For example, in this diagram **DataSource_1** is using one cloud vendor, while **DataSource_2** is using a different cloud vendor. Queries from **Dremio_1** across **Dremio_2** and **Dremio_3** against those two data sources might incur egress charges from the cloud vendors.

![Federating data across cloud vendors can incur egress charges.](https://docs.dremio.com/images/D-to-D-federation-4.png)
Dremio recommends full TLS wire encryption on querying clusters and data-source clusters. For more information, see the configuration of TLS for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters.
## User Impersonation​
When you connect a querying cluster to a data-source cluster, you provide the username and password of an account on the data-source cluster. By default, queries that run from the querying cluster against the data-source cluster run under the username of that account.
You can instead allow users running queries from the querying cluster to run them under their own usernames on the data-source cluster. For example, User 1 on the querying cluster Dremio 1 can run queries as User 1 on the data-source cluster. User 1 must have an account on the data-source cluster, and that account must use the same username. User impersonation (also known as _inbound impersonation_) must be set up on the data-source cluster. The policy for user impersonation would look like this:
Example policy

```
ALTER SYSTEM SET "exec.impersonation.inbound_policies"='[  
   {  
      "proxy_principals":{  
         "users":[  
            "User 1"  
         ]  
      },  
      "target_principals":{  
         "users":[  
            "User 1"  
         ]  
      }  
   }  
]'  

```

See [Inbound Impersonation](/security/rbac/inbound-impersonation) for more information.
## Limitation​
You cannot query columns that use complex data types, such as LIST, STRUCT, and MAP. Columns of complex data types do not appear in result sets.
## Prerequisites​
  * You must have a username and password for the account on a data-source cluster to use for connections from the querying cluster.
  * The querying cluster and data-source clusters must all be at version 23.1 or later.


## Configuring Another Dremio Enterprise Cluster as a Source​
If the cluster that you are connecting to has a self-signed certificate, ensure that the cluster that you are connecting from has a copy of that certificate in its truststore.
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **Dremio**.


### General Options​
  1. In the **Name** field, specify the name by which you want the data-source cluster to appear in the **Databases** section. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
  2. Under **Connection** , specify how you want to connect to the data-source cluster.
     * **Direct** : Connect directly to a coordinator node of the cluster.
     * **ZooKeeper** : Connect to an external ZooKeeper instance that is coordinating the nodes of the cluster.
  3. In the **Host** and Port **field** , specify the hostname or IP address, and the port number, of the coordinator node or ZooKeeper instance.
  4. If the data-source cluster is configured to use TLS for connections to it, select the **Use SSL** option.
  5. Under **Authentication** , specify the username for the querying cluster to use when connecting to the data-source cluster. Then, choose a method for storing the password for the querying cluster from the dropdown menu:
     * Dremio: Provide the password in plain text. Dremio stores the password.
     * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
     * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or using command line tools.
     * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the secret reference in the required format.


### Advanced Options​
On the Advanced Options page, you can set values for these non-required options:  
| Option  | Description  |  
| --- | --- |  
| **Maximum Idle Connections**  | The total number of connections allowed to be idle at a given time. The default maximum idle connections is 8.  |  
| **Connection Idle Time**  | The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. The default connection idle time is 60 seconds.  |  
| **Query Timeout**  | The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.  |  
| **User Impersonation**  | Allows users to run queries on the data-source cluster under their own user IDs, not the user ID for the account used to authenticate with the data-source cluster. Inbound impersonation must be configured on the data-source cluster. See [Inbound Impersonation](/security/rbac/inbound-impersonation).  |  
### Reflection Refresh Options​
On the Reflection Refresh page, set the policy that controls how often Reflections are scheduled to be refreshed automatically, as well as the time limit after which Reflections expire and are removed.  
| Option  | Description  |  
| --- | --- |  
| **Never refresh**  | Select to prevent automatic Reflection refresh, default is to automatically refresh.  |  
| **Refresh every**  | How often to refresh Reflections, specified in hours, days or weeks. This option is ignored if **Never refresh** is selected.  |  
| **Never expire**  | Select to prevent Reflections from expiring, default is to automatically expire after the time limit below.  |  
| **Expire after**  | The time limit after which Reflections expire and are removed from Dremio, specified in hours, days or weeks. This option is ignored if **Never expire** is selected.  |  
### Metadata Options​
On the Metadata page, you can configure settings to refresh metadata and handle datasets.
#### Dataset Handling​
These are the optional **Dataset Handling** parameters.  
| Parameter  | Description  |  
| --- | --- |  
| **Remove dataset definitions if underlying data is unavailable**  | By default, Dremio removes dataset definitions if underlying data is unavailable. Useful when files are temporarily deleted and added back in the same location with new sets of files.  |  
#### Metadata Refresh​
These are the optional **Metadata Refresh** parameters:
  * **Dataset Discovery** : The refresh interval for fetching top-level source object names such as databases and tables. Set the time interval using this parameter.  
| Parameter  | Description  |  
| --- | --- |  
| (Optional) **Fetch every**  | You can choose to set the frequency to fetch object names in minutes, hours, days, or weeks. The default frequency to fetch object names is 1 hour.  |  
  * **Dataset Details** : The metadata that Dremio needs for query planning such as information required for fields, types, shards, statistics, and locality. These are the parameters to fetch the dataset information.  
| Parameter  | Description  |  
| --- | --- |  
| **Fetch mode**  | You can choose to fetch only from queried datasets that are set by default. Dremio updates details for previously queried objects in a source. Fetching from all datasets is deprecated.  |  
| **Fetch every**  | You can choose to set the frequency to fetch dataset details in minutes, hours, days, or weeks. The default frequency to fetch dataset details is 1 hour.  |  
| **Expire after**  | You can choose to set the expiry time of dataset details in minutes, hours, days, or weeks. The default expiry time of dataset details is 3 hours.  |  


### Privileges​
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges.
All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating a Dremio Source​
To update a Dremio source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see Configuring Another Dremio Enterprise Cluster as a Source.
  4. Click **Save**.


## Deleting a Dremio Source​
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a Dremio source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
## Predicate Pushdowns​
Querying clusters offload these operations to data-source clusters. Data-source clusters either process these operations or offload them to their connected data sources.
`&&`, `||`, `!`, `AND`, `OR`  
`+`, `-`, `/`, `*`, `%`  
`<=`, `<`, `>`, `>=`, `=`, `<>`, `!=`  
ABS  
ADD_MONTHS  
AVG  
BETWEEN  
CASE  
CAST  
CEIL  
CEILING  
CHARACTER_LENGTH  
CHAR_LENGTH  
COALESCE  
CONCAT  
CONTAINS  
COUNT  
COUNT_DISTINCT  
COUNT_DISTINCT_MULTI  
COUNT_FUNCTIONS  
COUNT_MULTI  
COUNT_STAR  
CURRENT_DATE  
CURRENT_TIMESTAMP  
DATE_ADD  
DATE_DIFF  
DATE_SUB  
DATE_TRUNC  
DATE_TRUNC_DAY  
DATE_TRUNC_HOUR  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
DATE_TRUNC_WEEK  
DATE_TRUNC_YEAR  
DAYOFMONTH  
DAYOFWEEK  
DAYOFYEAR  
EXTRACT  
FLATTEN  
FLOOR  
ILIKE  
IN  
IS DISTINCT FROM  
IS NOT DISTINCT FROM  
IS NOT NULL  
IS NULL  
LAST_DAY  
LCASE  
LEFT  
LENGTH  
LIKE  
LOCATE  
LOWER  
LPAD  
LTRIM  
MAX  
MEDIAN  
MIN  
MOD  
NEXT_DAY  
NOT  
NVL  
PERCENTILE_CONT  
PERCENTILE_DISC  
PERCENT_RANK  
POSITION  
REGEXP_LIKE  
REPLACE  
REVERSE  
RIGHT  
ROUND  
RPAD  
RTRIM  
SIGN  
SQRT  
STDDEV  
STDDEV_POP  
STDDEV_SAMP  
SUBSTR  
SUBSTRING  
SUM  
TO_CHAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
VAR_POP  
VAR_SAMP  

## Related Information​
[ZooKeeper](/what-is-dremio/architecture)
Was this page helpful?
[Previous Apache Druid](/data-sources/databases/apache-druid)[Next Elasticsearch](/data-sources/databases/elasticsearch)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Apache Druid](/data-sources/databases/apache-druid)[Next Elasticsearch](/data-sources/databases/elasticsearch)
!
