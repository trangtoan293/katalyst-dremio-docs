---
url: /reference/sql/commands/functions
slug: /reference/sql/commands/functions
title: "User-Defined Functions | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64254.513197833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Commands](/reference/sql/commands)
  * User-Defined Functions

Version: current [26.x]
On this page
# User-Defined Functions
A user-defined function (UDF) is a callable routine that accepts input parameters, executes the function body, and returns a single scalar value. UDFs are used with Dremio in the context of [assigning row-level filtering and column-masking policies](/data-products/govern/row-column-policies-udf).
UDFs are supported in Dremio 22.0.0+.
A UDF can serve as a policy on multiple objects, which means you can change the behavior in one place and have the change reflected in multiple places. You may likewise replace or drop a UDF that is being used as a policy, but if you drop the UDF without replacement, the table or view will become unreadable until you remove the policy or create a new UDF for the policy.
To run a UDF, the user must have the [EXECUTE privilege](/security/rbac/privileges) on that function.
## Showing a Function​
Syntax

```
SHOW FUNCTIONS [ LIKE { pattern } ]  

```

### Parameters​
pattern Optional
A `LIKE` pattern that is used to filter the results of the statement. The leading and trailing blanks are trimmed in the input pattern before processing. The pattern match is case-insensitive.
### Examples​
Show all existing functions

```
SHOW FUNCTIONS;  

```

Show an existing function with the exact name `protect_ssn`

```
SHOW FUNCTIONS LIKE 'protect_ssn';  

```

Show all existing functions with names that start with `protect_`

```
SHOW FUNCTIONS LIKE 'protect_%';  

```

## Creating a Function​
Syntax

```
CREATE [ OR REPLACE ] FUNCTION [ IF NOT EXISTS ]  
    function_name ( [ function_parameter [, ...] ] )  
    RETURNS { data_type }  
    RETURN { query }  

```

### Parameters​
[ OR REPLACE ] String Optional
If specified, the function with the same name is replaced. You cannot specify this parameter with `IF NOT EXISTS`.
* * *
[ IF NOT EXISTS ] String Optional
If specified, creates the function only when it does not exist. The creation of the function succeeds (no error results) if the specified function already exists in the system. You cannot specify this parameter with `OR REPLACE`. This is mainly useful to avoid trying to create the same function twice.
* * *
`function_name` String
The name of the function. Function names within a project must be unique (no overloading), cannot conflict with system-defined functions, and are case-insensitive.
* * *
`function_parameter` String
Specifies a parameter of the function:
  * `parameter_name` - The parameter name must be unique within the function signature.
  * `data_type` - Any Dremio SQL data type, including primitive and complex types.


* * *
RETURNS `data_type` String
The return data type of a scalar function.
* * *
RETURNS TABLE ( `column_spec` [, ...] ) String
The signature of the result of a tabular function:
  * `column_name` - The column name must be unique within the result signature.
  * `data_type` - Any Dremio SQL data type, including primitive and complex types. A tabular UDF can be accessed only in the `FROM` clause of a query.


* * *
RETURN {'{'})'{'{'})'{'}'}) expression | query {'{'})'{'}'}'{'}'} String
The body of the function. For a scalar function, it can either be a query or an expression. For a tabular function, it may only be a query. The expression may not contain the following:
  * DML statements such as `INSERT`, `UPDATE`, or `DELETE`.
  * DDL statements such as `CREATE` and `DROP`.


### Examples​
Create a function with no parameters

```
CREATE FUNCTION hello() RETURNS VARCHAR RETURN SELECT 'Hello World!';  

```

Create a function that takes parameters

```
CREATE FUNCTION multiply (x INT, y INT) RETURNS INT RETURN SELECT x * y;  

```

### Naming Best Practices​
When creating a function:
  * Choose a name that best describes the function.
  * Avoid using [reserved keywords](/reference/sql/reserved-keywords).
  * Avoid using spaces and special characters.


## Describing a Function​
Syntax

```
{ DESC | DESCRIBE } FUNCTION function_name;  

```

### Parameters​
`function_name` String
The name of an existing user-defined function. This commands returns the following:
  * `Name` - The name of the function.
  * `Input` - The parameters of the function with one tuple per line: parameter_name data_type
  * `Returns` - The return type of the function. For a scalar function, `show data_type`. For a tabular function, `show TABLE ( column_spec [, ...] )`
  * `Owner` - The current owner of the function.
  * `Created At` - The timestamp of when the function was created.
  * `Modified At` - The timestamp of when the function was last modified.
  * `Body` - The body of the function, namely, expression or query from the `CREATE FUNCTION … RETURN` clause.


### Example​
Display the metadata associated with an existing function

```
DESCRIBE FUNCTION protect_ssn;  

```

## Dropping a Function​
Only the owner of a UDF may drop it.
Syntax

```
DROP FUNCTION [ IF EXISTS ] function_name  

```

### Parameters​
[ IF EXISTS ] String Optional
If specified, prevents an exception when the function does not exist.
* * *
`function_name` String
The name of an existing user-defined function.
### Example​
Remove an existing function with the exact name `redact_ssn`

```
DROP FUNCTION redact_ssn;  

```

Remove an existing function with the exact name `redact_ssn` and prevent an exception from being thrown if it doesn't exist

```
DROP FUNCTION IF EXISTS redact_ssn;  

```

Was this page helpful?
[Previous Tables](/reference/sql/commands/tables)[Next RESET QUEUE](/reference/sql/commands/reset-queue)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Tables](/reference/sql/commands/tables)[Next RESET QUEUE](/reference/sql/commands/reset-queue)
