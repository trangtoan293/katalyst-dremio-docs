---
url: /reference/sql/sql-functions/WINDOW
title: "Window | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64272.103592666
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * Window

Version: current [26.x]
On this page
# Window  
| Function Name  | Description  |  
| --- | --- |  
| [AVG](/reference/sql/sql-functions)  | Computes the average of a set of values.  |  
| [COUNT](/reference/sql/sql-functions)  | Returns the total number of records for the specified expression.  |  
| [COVAR_POP](/reference/sql/sql-functions)  | Returns the population covariance for non-NULL pairs across all input values.  |  
| [COVAR_SAMP](/reference/sql/sql-functions)  | Returns the sample covariance for non-NULL pairs across all input values.  |  
| [CUME_DIST](/reference/sql/sql-functions)  | Returns the cumulative distribution of the current row with regard to other values within the same window partition.  |  
| [DENSE_RANK](/reference/sql/sql-functions)  | Returns the rank of the current row within its partition and ordering. Rows that are equal will have the same rank.  |  
| [FIRST_VALUE](/reference/sql/sql-functions)  | Returns the first value within an ordered group of a result set.  |  
| [LAG](/reference/sql/sql-functions)  | Returns the row before the current one in a partition based on the `ORDER BY` clause without the need for a self-join. If there are no rows, this function returns `NULL`.  |  
| [LAST_VALUE](/reference/sql/sql-functions)  | Returns the last value within an ordered group of a result set.  |  
| [LEAD](/reference/sql/sql-functions)  | Returns the row after the current one in the same result set without the need for a self-join. If there are no rows, this function returns `NULL`.  |  
| [MAX](/reference/sql/sql-functions)  | Returns the maximum value among the non-NULL input expressions.  |  
| [MIN](/reference/sql/sql-functions)  | Returns the minimum value among the non-NULL input expressions.  |  
| [NDV](/reference/sql/sql-functions)  | Returns an approximate distinct value number, similar to `COUNT(DISTINCT col)`. NDV can return results faster than using the combination of COUNT and DISTINCT while using a constant amount of memory, resulting in less memory usage for columns with high cardinality.  |  
| [NTILE](/reference/sql/sql-functions)  | Equally splits the rows in each partition into ranked parts specified by the integer value and starting from 1. This function requires the `ORDER BY` clause.  |  
| [PERCENT_RANK](/reference/sql/sql-functions)  | Returns the relative rank of the current row in the partition based on the `ORDER BY` clause. The displayed percentage ranges from 0.0 to 1.0.  |  
| [RANK](/reference/sql/sql-functions)  | Returns the rank of the current row within its partition and placement order. Rows that are equal have the same rank. However, the count of tied rows is added to the next rank, instead of being incremented by one. The rank value starts at 1 and increases sequentially.  |  
| [ROW_NUMBER](/reference/sql/sql-functions)  | Returns the row number for the current row based on the ORDER BY clause within each partition.  |  
| [STDDEV_POP](/reference/sql/sql-functions)  | Returns the population standard deviation (square root of variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [STDDEV_SAMP](/reference/sql/sql-functions)  | Returns the sample standard deviation (square root of sample variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [SUM](/reference/sql/sql-functions)  | Returns the sum of non-NULL input expressions.  |  
| [VAR_POP](/reference/sql/sql-functions)  | Returns the population variance of non-NULL records.  |  
| [VAR_SAMP](/reference/sql/sql-functions)  | Returns the sample variance of non-NULL records.  |  
## Window Functions[​](/reference/sql/sql-functions#window-functions "Direct link to Window Functions")
A window function performs a calculation across a set of table rows that has some relationship to the current row. This is comparable to how an aggregate function can run a calculation. The difference is that a window function does not group rows into a single output row. With a window function, the rows retain their separate identities.
For more information about window functions, see 
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
Window function queries use the `OVER()` clause directly following the window function name and argument. The `OVER()` clause may use the following optional arguments:
  * `PARTITION BY`: A subclause that groups rows into partitions. You can specify a single expression or a comma-separated list of expressions, such as `PARTITION BY column1, column3, column4`.
  * `ORDER BY`: A subclause that specifies the order of the rows within each partition of the result set. Required if using a cumulative or sliding window frame.
  * `cumulativeFrame` or `slidingFrame`: A window frame subclause that allows the function to perform a calculation across a set of rows that has some relationship to the current row. The query does not group rows into a single output row; instead, the rows retain their separate identities. Window frames may be cumulative or sliding.

Window function syntax

```
window_function (expression) OVER (  
   [ PARTITION BY expressionlist ]  
   [ ORDER BY fieldlist ]  
   [ cumulativeFrame | slidingFrame ] )   

```

Cumulative frame syntax

```
  { ROWS | RANGE } BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW  
| { ROWS | RANGE } BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING  

```

Sliding frame syntax

```
  ROWS BETWEEN $N { PRECEDING | FOLLOWING } AND $N { PRECEDING | FOLLOWING }  
| ROWS BETWEEN UNBOUNDED PRECEDING AND $N { PRECEDING | FOLLOWING }  
| ROWS BETWEEN $N { PRECEDING | FOLLOWING } AND UNBOUNDED FOLLOWING  

```

## Examples[​](/reference/sql/sql-functions#examples "Direct link to Examples")
The following examples use the sample table `transactions` and the `SUM` function to demonstrate window function queries with no frame, a cumulative frame, and a sliding frame. Refer to each [window function's page](/reference/sql/sql-functions) for function-specific examples.
**Sample Table`transactions`**  
| product_id  | branch  | amount  |  
| --- | --- | --- |  
| Product1  | A  | 30.0  |  
| Product1  | B  | 3.0  |  
| Product3  | B  | 45.0  |  
| Product2  | A  | 24.0  |  
| Product2  | B  | 10.0  |  
| Product3  | A  | 2.0  |  
Window function example with no frame

```
SELECT   
   product_id,   
   branch,   
   amount,   
   SUM(amount) OVER (PARTITION BY branch ORDER BY amount DESC) AS total_branch_amount  
FROM transactions  
-- product_id, branch, amount, total_branch_amount  
-- Product1, A, 30.0, 30.0  
-- Product2, A, 24.0, 54.0  
-- Product3, A, 2.0, 56.0  
-- Product3, B, 45.0, 45.0  
-- Product2, B, 10.0, 55.0  
-- Product1, B, 3.0, 58.0  

```

Window function example with cumulative frame

```
SELECT   
   product_id,   
   branch,   
   amount,   
   SUM(amount) OVER (PARTITION BY branch ORDER BY amount DESC RANGE BETWEEN CURRENT ROW AND UNBOUNDED FOLLOWING) AS total_branch_amount  
FROM transactions  
-- product_id, branch, amount, total_branch_amount  
-- Product1, A, 30.0, 56.0  
-- Product2, A, 24.0, 26.0  
-- Product3, A, 2.0, 2.0  
-- Product3, B, 45.0, 58.0  
-- Product2, B, 10.0, 13.0  
-- Product1, B, 3.0, 3.0  

```

Window function example with sliding frame

```
SELECT   
   product_id,   
   branch,   
   amount,   
   SUM(amount) OVER (PARTITION BY branch ORDER BY amount DESC ROWS BETWEEN 1 PRECEDING AND 2 FOLLOWING) AS total_branch_amount  
FROM transactions  
-- product_id, branch, amount, total_branch_amount  
-- Product1, A, 30.0, 56.0  
-- Product2, A, 24.0, 56.0  
-- Product3, A, 2.0, 26.0  
-- Product3, B, 45.0, 58.0  
-- Product2, B, 10.0, 58.0  
-- Product1, B, 3.0, 13.0  

```

Was this page helpful?
[Previous System](/reference/sql/sql-functions)[Next ABS](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous System](/reference/sql/sql-functions)[Next ABS](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2FWINDOW%2F&_biz_t=1777950591803&_biz_i=Window%20%7C%20Dremio%20Documentation&_biz_n=537&rnd=222495&cdn_o=a&_biz_z=1777950591804)
