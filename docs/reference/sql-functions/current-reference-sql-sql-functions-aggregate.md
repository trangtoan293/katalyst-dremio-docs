---
url: /reference/sql/sql-functions/AGGREGATE
slug: /reference/sql/sql-functions/AGGREGATE
title: "Aggregate | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.349391458
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * Aggregate

Version: current [26.x]
# Aggregate  
| Function Name  | Description  |  
| --- | --- |  
| [APPROX_COUNT_DISTINCT](/reference/sql/sql-functions)  | Returns the approximate number of unique, non-null values in a column.  |  
| [ARRAY_AGG](/reference/sql/sql-functions)  | Aggregates the provided expression into an array.  |  
| [ARRAY_AVG](/reference/sql/sql-functions)  | Returns the average of all non-null elements of a list.  |  
| [ARRAY_MAX](/reference/sql/sql-functions)  | Returns the maximum value of a list.  |  
| [ARRAY_MIN](/reference/sql/sql-functions)  | Returns the minimum value of a list.  |  
| [ARRAY_SUM](/reference/sql/sql-functions)  | Returns the sum of all non-null elements of a list.  |  
| [AVG](/reference/sql/sql-functions)  | Computes the average of a set of values.  |  
| [BIT_AND](/reference/sql/sql-functions)  | Returns the bitwise `AND` of non-NULL input values.  |  
| [BIT_OR](/reference/sql/sql-functions)  | Returns the bitwise `OR` of non-NULL input values.  |  
| [CORR](/reference/sql/sql-functions)  | Calculates the Pearson correlation coefficient of the values expression1 and expression2. The function name must be enclosed in double quotes ("CORR").  |  
| [COUNT](/reference/sql/sql-functions)  | Returns the total number of records for the specified expression.  |  
| [COVAR_POP](/reference/sql/sql-functions)  | Returns the population covariance for non-NULL pairs across all input values.  |  
| [COVAR_SAMP](/reference/sql/sql-functions)  | Returns the sample covariance for non-NULL pairs across all input values.  |  
| [LISTAGG](/reference/sql/sql-functions)  | Concatenates a group of rows into a list of strings and places a separator between them.  |  
| [MAX](/reference/sql/sql-functions)  | Returns the maximum value among the non-NULL input expressions.  |  
| [MEDIAN](/reference/sql/sql-functions)  | Computes the median of the specified column's values based on a continuous distribution.  |  
| [MIN](/reference/sql/sql-functions)  | Returns the minimum value among the non-NULL input expressions.  |  
| [NDV](/reference/sql/sql-functions)  | Returns an approximate distinct value number, similar to `COUNT(DISTINCT col)`. NDV can return results faster than using the combination of COUNT and DISTINCT while using a constant amount of memory, resulting in less memory usage for columns with high cardinality.  |  
| [STDDEV](/reference/sql/sql-functions)  | Returns the standard deviation of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [STDDEV_POP](/reference/sql/sql-functions)  | Returns the population standard deviation (square root of variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [STDDEV_SAMP](/reference/sql/sql-functions)  | Returns the sample standard deviation (square root of sample variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [SUM](/reference/sql/sql-functions)  | Returns the sum of non-NULL input expressions.  |  
| [VAR_POP](/reference/sql/sql-functions)  | Returns the population variance of non-NULL records.  |  
| [VAR_SAMP](/reference/sql/sql-functions)  | Returns the sample variance of non-NULL records.  |  
Was this page helpful?
[Previous All Functions](/reference/sql/sql-functions)[Next AI](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous All Functions](/reference/sql/sql-functions)[Next AI](/reference/sql/sql-functions)
!
