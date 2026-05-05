---
url: /data-products/govern/row-column-policies-udf
title: "Row-Access and Column-Masking Policies | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64200.030501958
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * [Govern Data](/data-products/govern)
  * Row-Access and Column-Masking Policies

Version: current [26.x]
On this page
# Row-Access and Column-Masking Policies Enterprise
Row-access and column-masking policies may be applied to tables, views, and columns via [user-defined functions (UDFs)](/reference/sql/commands/functions).
This allows you to filter sensitive data based upon the rules and conditions you need to maintain compliance or adhere to regulatory requirements, while also removing the need to produce a secondary set of data with protected information manually removed.
Dremio only supports one data governance policy manager at a time, so you can use either Dremio or Ranger as a policy manager but not both at the same time.
When adding a new Hive source, you have the following options for Hive authorization clients:
  * Storage-Based with User Impersonation
  * SQL-Based
  * Ranger-Based


## Requirements[​](/data-products/govern/row-column-policies-udf#requirements "Direct link to Requirements")
The following [source types](/data-sources) are supported:
  * **Object Storage** - S3, Azure Storage, GCS, HDFS
  * **Metastores** - AWS Glue, Hive Metastore
  * **Databases** - Oracle, SQL Server, etc.


Row-access and column-masking policies are not supported for [Nessie Catalogs](/data-sources/lakehouse-catalogs/nessie).
The following restrictions apply:
  * Only users with the ADMIN role may create UDFs


  * A function may only have one owner (the user that created the UDF, by default), which may be transferred using the [GRANT OWNERSHIP command](/security/rbac/privileges)
  * You must be the owner of a UDF (either directly or through one of your roles) in order to apply it to a dataset as a row-access or column-masking policy.
  * Use of the `is_member` function shown in the examples below is not currently available to organizations using SSO role authentication.


## Column-Masking[​](/data-products/govern/row-column-policies-udf#column-masking "Direct link to Column-Masking")
Column-masking is a way to mask—or scramble—private data at the column-level dynamically prior to query execution. For example, the owner of a table or view may apply a policy to a column to only display the year of a date or the last four digits of a credit card.
Column-masking policies may be any UDF with a scalar return type that is identical to the data type of the column on which it is applied. However, only one column-masking policy may be applied to each column.
In the following [example of a user-defined function](/data-products/govern/row-column-policies-udf#examples-of-udfs), only users within in the Accounting department in the state of California (CA) may see an entry's social security number (ssn) if the record lists an income above $10,000, otherwise the SSN value is masked with XXX-XX-.
Column-masking

```
CREATE FUNCTION protect_ssn (ssn VARCHAR(11))  
    RETURNS VARCHAR(11)  
        RETURN SELECT CASE WHEN query_user()='jdoe@dremio.com' OR is_member('Accounting') THEN ssn  
            ELSE CONCAT('XXX-XX-', SUBSTR(ssn,8,4))  
        END;  

```

## Row-Access[​](/data-products/govern/row-column-policies-udf#row-access "Direct link to Row-Access")
Row-access policies are a way to control which records in a table or view are returned for specific users and roles. For example, the owner of a table or view may apply a policy that filters out customers from a specific country unless the user running the query has a specific role.
Row-access

```
CREATE FUNCTION country_filter (country VARCHAR)  
    RETURNS BOOLEAN  
        RETURN SELECT query_user()='jdoe@dremio.com' OR (is_member('Accounting') AND country='CA');  

```

Row-access policies may be any boolean UDF applied to the table or view. The return value of the UDF is treated logically in a query as an AND operator included in a WHERE clause. The return type of the UDF must be BOOLEAN, otherwise Dremio will give an error at execution time.
## User-Defined Functions[​](/data-products/govern/row-column-policies-udf#user-defined-functions "Direct link to User-Defined Functions")
A [user-defined function (UDF)](/reference/sql/commands/functions) is a callable routine that accepts input parameters, executes the function body, and returns a single value or a set of rows.
The UDFs which serve as the basis for filtering and masking policies must be defined independently of your sources. Not only does this allow organizations to use a single policy for multiple tables and views, but this also restricts user access to policies and prevents unauthorized tampering. Modifying a single UDF automatically updates the policy in the context of any tables or views using that access or mask policy.
The following process describes how policies are enforced with Dremio:
  1. A user with the ADMIN role creates a UDF to serve as a security policy.
  2. The administrator then sets the security policy to one or more tables, views, and/or columns.
  3. Dremio enforces the policy at runtime when an end-user performs a query.


You can create and attach security policies with [SQL commands](/reference/sql/commands/functions). Policies are applied prior to execution during the query planning phase. At this point, Dremio checks first the table/view for a row-access policy and then each column accessed for a column-masking policy. If any policies are found, they are automatically applied to the policy's scope using the associated UDF in the query plan.
### Query Substitutions[​](/data-products/govern/row-column-policies-udf#query-substitutions "Direct link to Query Substitutions")
Row-access and column-masking function act as an "implicit view," replacing a table/view reference in an SQL statement prior to processing the query. This implicit view is created through an examination of each policy applied to a table, view, or column.
For example, SELECT access to table_1. However, the column-masking policy protect_ssn is set for the column_1 column with a UDF to replace all but the last four digits of a social security number with X for anyone that is not a member of the Accounting department, or this user. When they run a query in Dremio that includes this column-masking policy, the following occurs:
  1. During the SQL Planning phase, Dremio identifies which tables, views, and columns are being accessed (table_1) and whether security policies must be enforced.
  2. The engine searches for any security policies set to the associated objects, such as protect_ssn (see [Examples of UDFs below](/data-products/govern/row-column-policies-udf#examples-of-udfs)).
  3. When the protect_ssn policy is found for the object affected by the query, the query planner immediately modifies the execution path to incorporate the masking function.
  4. Query execution proceeds as normal with the associated UDF included within the execution path.


## Listing Existing UDFs[​](/data-products/govern/row-column-policies-udf#listing-existing-udfs "Direct link to Listing Existing UDFs")
To view all existing UDFs created in Dremio, use the [SHOW FUNCTIONS](/reference/sql/commands/functions#showing-a-function) SQL command.
## Listing Existing Policies[​](/data-products/govern/row-column-policies-udf#listing-existing-policies "Direct link to Listing Existing Policies")
To view row-access and column-masking policies, use a [SELECT statement](/reference/sql/commands) with the target table/view, system table, and policies specified.
List existing policies

```
SELECT view_name, masking_policies, row_access_policies FROM sys.views;  
SELECT table_name, masking_policies, row_access_policies FROM sys."tables";  

```

To view all column-masking policies set for a given table, use the [DESCRIBE TABLE command](/reference/sql/commands/tables#describe-table).
## Setting a Policy[​](/data-products/govern/row-column-policies-udf#setting-a-policy "Direct link to Setting a Policy")
To create a row-access or column-masking policy, you must perform the following steps using the associated SQL commands:
  1. Create a new UDF or replace an existing one using the [CREATE [OR REPLACE] FUNCTION](/reference/sql/commands/functions#creating-a-function) command.
Create or replace UDF

```
CREATE FUNCTION country_filter (country VARCHAR)  
RETURNS BOOLEAN  
RETURN SELECT query_user()='jdoe@dremio.com' OR (is_member('Accounting') AND country='CA');  
  
CREATE FUNCTION id_filter (id INT)  
RETURNS BOOLEAN  
RETURN SELECT id = 1;  

```

  2. Create a policy to apply the function using either [ADD ROW ACCESS POLICY](/reference/sql/commands/row-column-policies#adding-a-row-access-policy) for row-level access or [SET MASKING POLICY](/reference/sql/commands/row-column-policies#setting-a-masking-policy) for column-masking. These may be used with the CREATE TABLE, CREATE VIEW, ALTER TABLE, and ALTER VIEW commands.
Create policy to apply function

```
-- Add row-access policy  
ALTER TABLE e.employee  
ADD ROW ACCESS POLICY country_filter(country);  
  
-- Add column-masking policy  
ALTER VIEW e.employee_view  
MODIFY COLUMN ssn_col  
SET MASKING POLICY protect_ssn (ssn_col, region);  
  
-- Create table with row policy  
CREATE TABLE e.employee(  
id INTEGER,  
ssn VARCHAR(11),  
country VARCHAR,  
ROW ACCESS POLICY country_filter(country)  
);  
  
-- Create table with masking policy  
CREATE VIEW e.employee_view(  
ssn_col VARCHAR MASKING POLICY protect_ssn (ssn_col, region),  
region VARCHAR,  
state_col VARCHAR)  
);  

```



Both row-access and column-masking UDFs may be applied in a single security policy, or set individually.
## Dropping a Policy[​](/data-products/govern/row-column-policies-udf#dropping-a-policy "Direct link to Dropping a Policy")
To remove a security policy from a table, view, or row, use the [UNSET MASKING POLICY](/reference/sql/commands/row-column-policies#unset-a-masking-policy) or [DROP ROW ACCESS POLICY](/reference/sql/commands/row-column-policies#dropping-a-row-access-policy) syntax with ALTER TABLE/VIEW.
Drop policy

```
ALTER TABLE w.employee DROP ROW ACCESS POLICY country_filter(country);  
ALTER VIEW e.employees_view MODIFY COLUMN ssn_col UNSET MASKING POLICY protect_ssn;  

```

## Examples of UDFs[​](/data-products/govern/row-column-policies-udf#examples-of-udfs "Direct link to Examples of UDFs")
The following are examples of user-defined functions that you may create with Dremio.
### Column-Masking[​](/data-products/govern/row-column-policies-udf#column-masking-1 "Direct link to Column-Masking")
#### Redacting SSN[​](/data-products/govern/row-column-policies-udf#redacting-ssn "Direct link to Redacting SSN")
Redact SSN

```
CREATE FUNCTION  
    protect_ssn (val VARCHAR)  
    RETURNS VARCHAR  
    RETURN  
        SELECT  
            CASE  
                WHEN query_user() IN ('jdoe@dremio.com','janders@dremio.com')  
                    OR is_member('Accounting') THEN val  
                ELSE CONCAT('XXX-XX-',SUBSTR(val,8,4))  
            END;  

```

#### Using Masking & Access Policies[​](/data-products/govern/row-column-policies-udf#using-masking--access-policies "Direct link to Using Masking & Access Policies")
Use masking and access policies

```
CREATE FUNCTION lower_country(country VARCHAR)  
    RETURNS VARCHAR  
    RETURN SELECT lower(country);  
  
CREATE FUNCTION country_filter (country VARCHAR)  
    RETURNS BOOLEAN  
    RETURN SELECT query_user()='dremio'  
                      OR (is_member('Accounting')  
                              AND country='CA');  
  
CREATE FUNCTION protect_ssn (ssn VARCHAR(11))  
    RETURNS VARCHAR(11)  
    RETURN SELECT CASE WHEN query_user()='dremio' OR is_member('Accounting') THEN ssn  
            ELSE CONCAT('XXX-XX-', SUBSTR(ssn,8,4))  
        END;  
  
CREATE FUNCTION salary_range (salary FLOAT, id INTEGER)  
    RETURNS BOOLEAN  
        RETURN SELECT CASE WHEN id > 1 AND salary > 10000 THEN true  
            ELSE false  
        END;  

```

#### Using STRUCT[​](/data-products/govern/row-column-policies-udf#using-struct "Direct link to Using STRUCT")
Use STRUCT

```
--  
CREATE TABLE struct_demo (emp_info struct <name : VARCHAR>);  
INSERT INTO nas.struct_demo VALUES(SELECT convert_from('{"name":"a"}', 'json'));  
CREATE FUNCTION hello(nameCol struct<name:VARCHAR>) RETURNS struct<name:VARCHAR> RETURN SELECT nameCol;  
ALTER TABLE nas.struct_demo MODIFY COLUMN emp_info SET MASKING POLICY "@dremio".hello(emp_info);  

```

#### Using List[​](/data-products/govern/row-column-policies-udf#using-list "Direct link to Using List")
Use list

```
CREATE FUNCTION hello_country(countryList LIST<VARCHAR>) RETURNS VARCHAR RETURN SELECT 'Hello World';  
ALTER TABLE "test.json" MODIFY COLUMN country SET MASKING POLICY "@dremio".hello_country(country);  

```

### Row-Access[​](/data-products/govern/row-column-policies-udf#row-access-1 "Direct link to Row-Access")
#### Using Simple Filter Expressions[​](/data-products/govern/row-column-policies-udf#using-simple-filter-expressions "Direct link to Using Simple Filter Expressions")
Use simple filter expressions

```
CREATE FUNCTION country_filter (country VARCHAR)  
    RETURNS BOOLEAN  
        RETURN SELECT state='CA';  

```

#### Matching Users[​](/data-products/govern/row-column-policies-udf#matching-users "Direct link to Matching Users")
Match users

```
CREATE FUNCTION query_1(my_value varchar)  
    RETURNS BOOLEAN  
        RETURN SELECT CASE  
            WHEN current_user = 'jdoe@dremio.com' THEN true  
            ELSE false  
        END;  

```

#### Table-Driven Policy Using a Subquery[​](/data-products/govern/row-column-policies-udf#table-driven-policy-using-a-subquery "Direct link to Table-Driven Policy Using a Subquery")
Use a subquery as a table-driven policy

```
DROP TABLE $<catalog-name>.salesmanagerregions;  
CREATE TABLE $<catalog-name>.salesmanagerregions (  
    sales_manager varchar,  
    sales_region varchar  
);  
  
INSERT INTO $<catalog-name>.salesmanagerregions  
VALUES ('john.smith@example.com', 'WW'),  
('jane.doe@example.com', 'NA'),  
('viktor.jones@example.com', 'EU');  
  
CREATE TABLE  $<catalog-name>.revenue (  
    company varchar,  
    region varchar,  
    revenue decimal(18,2)  
);  
  
INSERT INTO $<catalog-name>.revenue  
VALUES ('Acme', 'EU', 2.5),  
('Acme', 'NA', 1.5);  
  
CREATE OR REPLACE FUNCTION security.sales_policy (sales_region_in varchar) RETURNS BOOLEAN  
  RETURN SELECT is_member('sales_executive_role')  
    OR EXISTS (  
        SELECT 1 FROM $<catalog-name>.salesmanagerregions  
            WHERE user() = sales_manager  
            AND sales_region = sales_region_in  
        );  
  
ALTER TABLE $<catalog-name>.revenue  
ADD ROW ACCESS POLICY security.sales_policy(region);  
  
SELECT * FROM $<catalog-name>.revenue;  
-- company, region, revenue  
-- Acme, NA, 1.50  

```

## Using Reflections on Datasets with Policies[​](/data-products/govern/row-column-policies-udf#using-reflections-on-datasets-with-policies "Direct link to Using Reflections on Datasets with Policies")
Dremio supports Reflection creation on views and tables with row-access and column-masking policies defined on any of the underlying anchor datasets. See the following examples.
Example of a view with a row-access policy and a raw Reflection

```
-- Create nested views  
CREATE OR REPLACE VIEW myView AS  
  SELECT city, state, pop FROM Samples."samples.dremio.com"."zips.json"  
  WHERE pop > 10000;  
CREATE OR REPLACE VIEW myView2 AS  
  SELECT city, state FROM myView  
  WHERE STARTS_WITH(city, 'A');  
  
-- Create a raw Reflection on the inner view  
ALTER TABLE myView  
  CREATE RAW REFLECTION myReflection  
  USING DISPLAY(city, state);  
  
-- Query the view after the Reflection is created  
SELECT * FROM myView2;  
  
-- Create a UDF  
CREATE OR REPLACE FUNCTION isMA(state VARCHAR)  
  RETURNS BOOLEAN  
  RETURN SELECT CASE WHEN IS_MEMBER('hr') THEN state='MA'  
      ELSE NULL  
    END;  
  
-- Add a row-access policy and query the view  
ALTER TABLE myView  
  ADD ROW ACCESS POLICY isMA("state");  
SELECT * FROM myView2;  

```

After running the last query, the Reflection is used to accelerate the query as shown in the results below:
![](https://docs.dremio.com/assets/images/rcac_reflection_accelerated-31f0960f65be2a237384c0bd0956681f.png)
The `Query1` results show that the row-access policy has been applied successfully:
![](https://docs.dremio.com/assets/images/rcac_reflection_policy-e386c1d9134a00081efd62fe472e3edb.png)
The `Query2` results do not appear to those who are not members of HR:
![](https://docs.dremio.com/assets/images/rcac_reflection_accelerated_nonmember-28eade94013c96a7ec2ba42c29b2b67d.png)
The `Query2` results appear to those who are members of HR:
![](https://docs.dremio.com/assets/images/rcac_reflection_accelerated_member-9c4fd2be39fe181162620c678e99766c.png)
Example of a table with a row-access policy and an aggregation Reflection

```
ALTER TABLE NAS.rcac.employee  
  ADD ROW ACCESS POLICY is_recent_employee(hire_date);  
ALTER TABLE NAS.rcac.employee  
  CREATE AGGREGATE REFLECTION ar_tvrf_1 USING DIMENSIONS(hire_date);  
SELECT MIN(SALARY) FROM NAS.rcac.employee  
  GROUP BY hire_date;  

```

### Limitations[​](/data-products/govern/row-column-policies-udf#limitations "Direct link to Limitations")
See the following limitations where datasets with row-access and/or column-masking policies cannot support Reflections:
  * [Policies with Multiple Arguments](/data-products/govern/row-column-policies-udf#policies-with-multiple-arguments)
  * [Aggregates on Masked Columns](/data-products/govern/row-column-policies-udf#aggregates-on-masked-columns)
  * [SET Operations](/data-products/govern/row-column-policies-udf#set-operations)
  * [NULL Generating JOINs](/data-products/govern/row-column-policies-udf#null-generating-joins)
  * [Trimming Projects](/data-products/govern/row-column-policies-udf#trimming-projects)


#### Policies with Multiple Arguments[​](/data-products/govern/row-column-policies-udf#policies-with-multiple-arguments "Direct link to Policies with Multiple Arguments")
If a policy on an anchor dataset contains multiple columns, the Reflection created on the view containing the policy fails. See the following example:
Example of the limitation

```
-- Create tables  
CREATE TABLE employees (  
 id INT,  
 hire_date DATE,  
 ssn VARCHAR(11),  
 name VARCHAR,  
 country VARCHAR,  
 salary FLOAT,  
 job_id INT);  
CREATE TABLE jobs (  
 id INT,  
 title VARCHAR,  
 is_good BOOLEAN);  
  
-- Create a view  
CREATE VIEW job_salary_in_the_usa AS  
 SELECT job_id, salary  
 FROM employees  
 WHERE country = 'USA';  
  
-- Create a UDF  
CREATE OR REPLACE FUNCTION hide_salary_on_bad_job(salary FLOAT, job_id_in INT)  
  RETURNS BOOLEAN  
  RETURN SELECT CASE WHEN IS_MEMBER('public') AND (  
     SELECT is_good FROM jobs j WHERE job_id_in = j.id)  
      THEN NULL  
    ELSE salary  
    END;  
  
-- Add a column-masking policy  
ALTER TABLE employees  
 MODIFY COLUMN salary  
 SET MASKING POLICY hide_salary_on_bad_job(salary, job_id);  
  
-- Create a raw Reflection on the view  
ALTER DATASET job_salary_in_the_usa  
 CREATE RAW REFLECTION job_salary_drr USING DISPLAY(job_id, salary);  

```

In the above example, the `job_salary_drr` Reflection fails to materialize due to the multi-argument policy on `test.tables.employees::salary`.
#### Aggregates on Masked Columns[​](/data-products/govern/row-column-policies-udf#aggregates-on-masked-columns "Direct link to Aggregates on Masked Columns")
You cannot create a raw Reflection on the view if there is a policy defined on the masked column.
Example of the limitation

```
CREATE OR REPLACE VIEW myView AS  
  SELECT MIN(salary)  
  FROM employees  

```

In the above example, there is a policy defined on `salary`, so you cannot create a Reflection on this view.
#### NULL Generating JOINs[​](/data-products/govern/row-column-policies-udf#null-generating-joins "Direct link to NULL Generating JOINs")
You can only apply the policy if it's on the “join side” of the join, such as:
  * Left side of LEFT JOIN
  * Right side of RIGHT JOIN
  * Either side of INNER JOIN
  * Neither side of FULL OUTER JOIN


If the policy is not on the "join side", the join generates NULL values for all the entries that didn’t match the join condition.
Example of the limitation

```
CREATE OR REPLACE VIEW myView AS  
  SELECT emp.department_id, dept.department_name, emp.name  
  FROM employees as emp  
   RIGHT JOIN department as dept  
   ON emp.department_id = dept.department_id  

```

In the above example, there is a policy defined on the `employees` table, which is on the left side of the RIGHT JOIN, so you cannot create a Reflection on this view.
#### SET Operations[​](/data-products/govern/row-column-policies-udf#set-operations "Direct link to SET Operations")
The policy must be defined on all UNION datasets and on the same field.
Example of the limitation

```
CREATE OR REPLACE VIEW myView AS  
  SELECT * FROM a  
  UNION SELECT * FROM employees  
  UNION SELECT * FROM c  

```

In the above example, there is a policy defined on the `employees` table, so you cannot create a Reflection on this view.
#### Trimming Projects[​](/data-products/govern/row-column-policies-udf#trimming-projects "Direct link to Trimming Projects")
In order to create a Reflection on a view, the view should reference all the fields that are part of the row-access and column-masking policies.
Example of the limitation

```
-- Create a UDF  
CREATE OR REPLACE FUNCTION isMA(state VARCHAR)  
  RETURNS BOOLEAN  
  RETURN SELECT CASE WHEN IS_MEMBER('public') THEN state='MA'  
      ELSE NULL  
    END;  
  
-- Create views  
CREATE OR REPLACE VIEW myView1 AS  
  SELECT city, state, pop FROM Samples."samples.dremio.com"."zips.json"  
  WHERE pop > 10000;  
  
-- Add a row-access policy  
ALTER TABLE myView1  
  ADD ROW ACCESS POLICY isMA("state");  
  
-- Create views  
CREATE OR REPLACE VIEW myView2 AS  
  SELECT * FROM myView1;  
CREATE OR REPLACE VIEW myView3 AS  
  SELECT city, pop FROM myView1;  

```

In the above example, you can create a Reflection on `myView2` but not on `myView3` since it trims the `state` column from the view which has a policy defined on it.
Was this page helpful?
[Previous Govern Data](/data-products/govern)[Next Lineage](/data-products/govern/lineage)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Govern Data](/data-products/govern)[Next Lineage](/data-products/govern/lineage)
