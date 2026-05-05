---
url: /reference/sql/commands/row-column-policies
title: "Row-Access &amp; Column-Masking | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64805.820654583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * Row-Access & Column-Masking

Version: current [26.x]
On this page
# Row-Access & Column-Masking
[Row-access and column-masking policies](/data-products/govern/row-column-policies-udf) may be applied to tables, views, and individual columns by a user with the ADMIN role based on the criteria set by [user-defined functions (UDFs)](/reference/sql/commands/functions). Row access entails the exclusion or inclusion of specific records from query results, whereas column-level masking hides sensitive information without altering the original data.
## Setting a Masking Policy[​](/reference/sql/commands/row-column-policies#setting-a-masking-policy "Direct link to Setting a Masking Policy")
Syntax

```
ALTER { TABLE | VIEW } [ IF EXISTS ] <table_or_view_name>  
    MODIFY COLUMN <column_name>  
    SET MASKING POLICY <function_name> ( <column_name> [, ... ] );  

```

### Parameters[​](/reference/sql/commands/row-column-policies#parameters "Direct link to Parameters")
[ IF EXISTS ] String Optional
If included in a query, this clause prevents exceptions from being thrown, should the specified object not exist.
* * *
`table_or_view_name` String
The name of the table or view on which you want to set a masking policy.
* * *
`column_name` String
The column on which to either set a masking policy. The UDF serving as the masking policy must accept and return the same data type as the column it is masking.
* * *
`function_name` String
The function to be used for masking data. If a function with the given name does not exist, then the affected view will not be reachable until the policy is dropped or a UDF created.
* * *
`column_name` String
The column names to which this column-masking policy will apply. Multiple columns may be specified if they are separated by commas.
### Example[​](/reference/sql/commands/row-column-policies#example "Direct link to Example")
Set a column-masking policy to multiple columns

```
ALTER TABLE e.employees  
    MODIFY COLUMN ssn_col  
    SET MASKING POLICY protect_ssn (ssn_col, region);  

```

## Unset a Masking Policy[​](/reference/sql/commands/row-column-policies#unset-a-masking-policy "Direct link to Unset a Masking Policy")
Syntax

```
ALTER { TABLE | VIEW } [ IF EXISTS ] <table_or_view_name>  
   MODIFY COLUMN <column_name>  
   UNSET MASKING POLICY <function_name>;  

```

### Parameters[​](/reference/sql/commands/row-column-policies#parameters-1 "Direct link to Parameters")
[ IF EXISTS ] String Optional
If included in a query, this clause prevents exceptions from being thrown, should the specified object not exist.
* * *
`table_or_view_name` String
The table or view to modify the column data for. This must match the name for the associated object type (e.g., TABLE or VIEW).
* * *
`column_name` String
The column from which to unset the masking policy.
* * *
`function_name` String
The function being used for the masking policy to unset. If a function with this name does not exist, then the system will display an error message.
### Example[​](/reference/sql/commands/row-column-policies#example-1 "Direct link to Example")
Unset a column-masking policy

```
ALTER TABLE e.employees  
    MODIFY COLUMN ssn_col  
    UNSET MASKING POLICY protect_ssn;  

```

## Adding a Row-Access Policy[​](/reference/sql/commands/row-column-policies#adding-a-row-access-policy "Direct link to Adding a Row-Access Policy")
### Creating a New Table/View[​](/reference/sql/commands/row-column-policies#creating-a-new-tableview "Direct link to Creating a New Table/View")
Syntax

```
CREATE [ OR REPLACE ] { TABLE | VIEW }  
    [ IF NOT EXISTS ] <table_or_view_name>  
        ( <column_name> <data_type>  
        [ ROW ACCESS POLICY <function_name>  
            ( <column_name> [, ... ] )  
        ]);  

```

### Parameters[​](/reference/sql/commands/row-column-policies#parameters-2 "Direct link to Parameters")
[ OR REPLACE ] String Optional
If specified, any table or view with the same name will be replaced. This is primarily used to create new tables/views with security policies applied for restricted access. You cannot specify this parameter with the IF NOT EXISTS qualifier.
* * *
[ IF NOT EXISTS ] String Optional When specified, this creates a table or view only if one does not exist. The creation of the object succeeds (without any errors) only if the specified entity does not already exist in the system. You cannot specify this parameter with OR REPLACE.
* * *
`table_or_view_name` String
The name of the table or view. Names within a project must be unique, cannot conflict with system-defined objects, and are case-insensitive.
* * *
`column_name` String
The unique name of the column. Multiple columns may be specified, provided they include their data type and column-name/data-type pairs are separated by commas.
* * *
`data_type` String
The data type associated with the column and its underlying data.
* * *
`function_name` String
The name of the UDF you wish to associate with this policy. Function names within a project must be unique and are case-insensitive.
* * *
`column_name` String
The column names to which this row-access policy will apply. Multiple columns may be specified if they are separated by commas.
### Example[​](/reference/sql/commands/row-column-policies#example-2 "Direct link to Example")
Set a row-access policy to a column

```
CREATE TABLE e.employees  
    (ssn_col VARCHAR,region VARCHAR,state_col VARCHAR)  
    ROW ACCESS POLICY state_policy (state_col));  

```

### Using an Existing Table/View[​](/reference/sql/commands/row-column-policies#using-an-existing-tableview "Direct link to Using an Existing Table/View")
Syntax

```
ALTER { TABLE | VIEW } [ IF EXISTS ] <table_or_view_name>  
    ADD ROW ACCESS POLICY <function_name> ( <column_name> [, ... ] );  

```

### Parameters[​](/reference/sql/commands/row-column-policies#parameters-3 "Direct link to Parameters")
[ IF EXISTS ] String Optional
If included in a query, this clause prevents exceptions from being thrown should the specified object not exist.
* * *
`table_or_view_name` String
The table or view to modify the column data for. This must match the name for the associated object type (e.g., TABLE or VIEW).
* * *
`function_name` String The function to use with this security policy. If a function with this name does not exist, then the affected table/view will not be reachable until the policy is dropped or a UDF created.
* * *
`column_name` String
The columns on which to apply the row-access policy to. Multiple column names may be specified if they are separated by commas.
### Example[​](/reference/sql/commands/row-column-policies#example-3 "Direct link to Example")
Set a row-access policy to a column

```
ALTER TABLE e.employees  
    ADD ROW ACCESS POLICY state_policy ( state_col );  

```

## Dropping a Row-Access Policy[​](/reference/sql/commands/row-column-policies#dropping-a-row-access-policy "Direct link to Dropping a Row-Access Policy")
Syntax

```
ALTER { TABLE | VIEW } [ IF EXISTS ] <table_or_view_name>  
   DROP ROW ACCESS POLICY <function_name> ( <column_name> [, ... ] );  

```

### Parameters[​](/reference/sql/commands/row-column-policies#parameters-4 "Direct link to Parameters")
[ IF EXISTS ] String Optional
If included in a query, this clause prevents exceptions from being thrown should the specified object not exist.
* * *
`table_or_view_name` String
The table or view to modify the column data for. This must match the name for the associated object type (e.g., TABLE or VIEW).
* * *
`function_name` String
The function being used with this security policy. If a function with this name does not exist, then the system will display an error message.
* * *
`column_name` String
The columns on which the row-access policy applies. Multiple column names may be specified if they are separated by commas.
### Example[​](/reference/sql/commands/row-column-policies#example-4 "Direct link to Example")
Unset a row-access policy

```
ALTER TABLE employees  
    DROP ROW ACCESS POLICY protect_ssn (ssn_col, region);  

```

Was this page helpful?
[Previous Roles](/reference/sql/commands/roles)[Next SHOW CREATE TABLE](/reference/sql/commands/show-create-table)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Roles](/reference/sql/commands/roles)[Next SHOW CREATE TABLE](/reference/sql/commands/show-create-table)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fcommands%2Frow-column-policies%2F&_biz_t=1777951125758&_biz_i=Row-Access%20%26%20Column-Masking%20%7C%20Dremio%20Documentation&_biz_n=1580&rnd=45393&cdn_o=a&_biz_z=1777951125758)
