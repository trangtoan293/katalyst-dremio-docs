---
url: /reference/sql/system-tables/user-defined-functions
title: "SYS.USER_DEFINED_FUNCTIONS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64377.979726041
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.USER_DEFINED_FUNCTIONS

Version: current [26.x]
On this page
# SYS.USER_DEFINED_FUNCTIONS
The `sys.user_defined_functions` table contains metadata for user defined functions (UDFs) that have been installed in the Dremio instance.
In timestamp fields, the date `1970-01-01 00:00:00.000` indicates that the field has never been used or set. This is equivalent to NULL or N/A and is not a bug.
Syntax

```
SELECT *  
FROM sys.user_defined_functions  

```

## Example Output[​](/reference/sql/system-tables/user-defined-functions#example-output "Direct link to Example Output")  
| argList  | name  | sql  | returnType  | createdAt  | modifiedAt  |  
| --- | --- | --- | --- | --- | --- |  
| [FunctionArg{'{'})'{'{'})'{'}'})name=salary, rawDataType=&lt;ByteString@55362274 size=116&gt;{'{'})'{'}'}'{'}'}]  | "@dremio".get_salary  | SELECT CASE WHEN QUERY_USER() = 'noone' THEN "salary" ELSE 0 END  | ReturnType{'{'})'{'{'})'{'}'})rawDataType=&lt;ByteString@1b0f0d85 size=116&gt;{'{'})'{'}'}'{'}'}  | 2022-06-05 21:35:21.405  | 1970-01-01 00:00:00.000  |  
| [FunctionArg{'{'})'{'{'})'{'}'})name=id, rawDataType=&lt;ByteString@ad3e1e8 size=120&gt;{'{'})'{'}'}'{'}'}]  | "@dremio".id_filter  | SELECT QUERY_USER() = 'dremio' AND "id" % 2 = 0  | ReturnType{'{'})'{'{'})'{'}'})rawDataType=&lt;ByteString@6953a612 size=108&gt;{'{'})'{'}'}'{'}'}  | 2022-06-13 18:43:27.020  | 1970-01-01 00:00:00.000  |  
| null  | "@dremio".hello  | SELECT 'Hello World!'  | ReturnType{'{'})'{'{'})'{'}'})rawDataType=&lt;ByteString@2baec0f6 size=108&gt;{'{'})'{'}'}'{'}'}  | 2022-06-17 15:08:57.059  | 2022-07-01 17:04:09.032  |  
| null  | cy.hello  | SELECT 'Hello World!'  | ReturnType{'{'})'{'{'})'{'}'})rawDataType=&lt;ByteString@5fb990a7 size=108&gt;{'{'})'{'}'}'{'}'}  | 2022-06-17 15:09:49.505  | 1970-01-01 00:00:00.000  |  
## Columns[​](/reference/sql/system-tables/user-defined-functions#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| argList  | varchar  | The ordered list of arguments for this UDF. The value will be `null` if there are no arguments.  |  
| name  | varchar  | The name of the function.  |  
| sql  | varchar  | The SQL that defines the UDF.  |  
| returnType  | varchar  | The return type of the UDF.  |  
| createdAt  | timestamp  | The timestamp for when the UDF was created.  |  
| modifiedAt  | timestamp  | The timestamp for when the UDF was last modified.  |  
Was this page helpful?
[Previous SYS.TIMEZONE_NAMES](/reference/sql/system-tables/timezone-names)[Next SYS.USERS](/reference/sql/system-tables/users)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.TIMEZONE_NAMES](/reference/sql/system-tables/timezone-names)[Next SYS.USERS](/reference/sql/system-tables/users)
