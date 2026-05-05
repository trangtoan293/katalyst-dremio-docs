---
url: /help-support/advanced-topics/wide-tables
title: "Creating and Querying Wide Tables | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64222.896232625
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Creating and Querying Wide Tables

Version: current [26.x]
On this page
# Creating and Querying Wide Tables
When you create wide tables in Dremio from data in connected data sources and then make them available for queries, keep in mind these limits and best practices.
## Limits[​](/help-support/advanced-topics/wide-tables/#limits "Direct link to Limits")
As of v23.0, Dremio has established two limits on the use of wide tables. These limits are for preventing queries from using too many resources in Dremio clusters. There are two limits:
  * The first is on the number of leaf columns that a table can include.
  * The second is on the number of leaf columns that a query can scan in a single table.


The term _leaf columns_ refers to all columns in a table and all leaf-level fields that are used in complex data types in the table.
### Maximum Number of Leaf Columns in a Table[​](/help-support/advanced-topics/wide-tables/#maximum-number-of-leaf-columns-in-a-table "Direct link to Maximum Number of Leaf Columns in a Table")
Tables in Dremio are allowed a maximum of 6,400 leaf columns. For example, if a table has 1,000 columns and the data type of one column is a STRUCT that has three fields, the count of leaf columns is 1,003.
In previous releases, this maximum was 800, though Dremio made that configurable with the support key `store.plugin.max_metadata_leaf_columns`. If you used this support key and have upgraded to v23.0, reset the key so that you can use the maximum of 6,400.
### Maximum Number of Leaf Columns Scanned Per Table in a Query[​](/help-support/advanced-topics/wide-tables/#maximum-number-of-leaf-columns-scanned-per-table-in-a-query "Direct link to Maximum Number of Leaf Columns Scanned Per Table in a Query")
The maximum number of leaf columns that a query is allowed to scan per table or per Reflection is 800. (In earlier releases, this limit did not exist.) If a query attempts to scan more than this limit, then you receive this error message:

```
At most, <limit> columns including leaf level fields of complex type are allowed to be scanned, but the query is scanning <number>. Please include the columns you want to be returned from the query and try again.  

```

If you are trying to use a `SELECT *` query to view all columns in a table, you can avoid scanning too many columns by using the `DESCRIBE TABLE` command, which returns the name and other details about all columns in the table.
This is my revision, which could not go into v23.0, but will go into the release after.

```
A query is allowed to scan at most <limit> columns, including leaf-level fields in complex data types. However, the query is scanning <number>. Reduce the number of columns scanned by the query and try to run it again.  

```

## Best Practices for Querying Wide Tables[​](/help-support/advanced-topics/wide-tables/#best-practices-for-querying-wide-tables "Direct link to Best Practices for Querying Wide Tables")
Dremio recommends these two best practices:
  * **Create views for querying subsets of the leaf columns in wide tables.**  
Users who run _ad hoc_ queries directly against wide tables might inadvertently create queries that need to scan more than 800 columns per table. To help users avoid failed queries, create views on subsets of the leaf columns in the wide table and give users access to those views.
  * **Create Reflections to satisfy queries on wide tables.**  
It is best to restrict the leaf columns included in Reflections to those that are most frequently queried. Doing so conserves the resources that are required for storing and refreshing Reflections.


Was this page helpful?
[Previous Connect to a Ranger host using SSL](/help-support/advanced-topics/hive-ranger-ssl)[Next Dremio Preferences](/help-support/advanced-topics/dremio-preferences)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Connect to a Ranger host using SSL](/help-support/advanced-topics/hive-ranger-ssl)[Next Dremio Preferences](/help-support/advanced-topics/dremio-preferences)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fadvanced-topics%2Fwide-tables%2F&_biz_t=1777950543765&_biz_i=Creating%20and%20Querying%20Wide%20Tables%20%7C%20Dremio%20Documentation&_biz_n=432&rnd=845357&cdn_o=a&_biz_z=1777950543765)
