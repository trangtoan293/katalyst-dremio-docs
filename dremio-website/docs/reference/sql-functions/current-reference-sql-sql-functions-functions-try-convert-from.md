---
url: /reference/sql/sql-functions/functions/TRY_CONVERT_FROM
title: "TRY_CONVERT_FROM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64365.797510333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * TRY_CONVERT_FROM

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# TRY_CONVERT_FROM
Attempts to convert a JSON string to a data type supported in Dremio.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### TRY_CONVERT_FROM(_value_to_convert_ STRING AS _data_type_ name_of_type) → ANY[​](/reference/sql/sql-functions#try_convert_fromvalue_to_convert-string-as-data_type-name_of_type--any "Direct link to try_convert_fromvalue_to_convert-string-as-data_type-name_of_type--any")
  * value_to_convert: Either a STRING literal containing a JSON string or a `VARCHAR` column containing a JSON object.
  * data_type: A `ROW` or `ARRAY` data type specification to use for the conversion. Supports conversion to complex types only.


**Examples**
Returns an `ARRAY` from the JSON

```
SELECT TRY_CONVERT_FROM('["apple", "strawberry", "banana"]' AS VARCHAR ARRAY)  
-- ["apple", "strawberry", "banana"]  

```

Returns a `ROW` from the JSON

```
SELECT TRY_CONVERT_FROM('{"name":"Gnarly", "age":7, "car":null}' AS ROW(name VARCHAR, age INT))  
-- {"name":"Gnarly","age":7}  

```

Returns `null` because the JSON cannot be converted

```
SELECT TRY_CONVERT_FROM('["apple", "strawberry", "banana"]' AS ROW(name VARCHAR, age INT))  
-- null  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
These coercion rules apply for nested fields in the target `ROW` or `ARRAY` data type specification. If the JSON string cannot be converted to the desired output type based on these rules, `null` is returned.
### Supported Field-Level Coercions  
| Target Field Type  | Valid JSON Values  |  
| --- | --- |  
|  `INT`, `BIGINT`  | JSON whole number or JSON string containing a whole number. A decimal point will disallow the coercion, even if there are only zeros after the decimal. Examples: `1`, `“1”`  |  
|  `FLOAT`, `DOUBLE`, `DECIMAL`  | JSON number or JSON string containing a number. Examples: `1`, `1.1`, `“1.1”`  |  
| `BOOLEAN`  | JSON `true` or `false` value or JSON string containing “true” or “false”.  |  
| `VARCHAR`  | Any JSON boolean, number, or string value. JSON objects or lists cannot be converted to `VARCHAR`.  |  
|  `DATE`, `TIME`, `TIMESTAMP`  | Valid values must match these formats:
  * DATE: yyyy-MM-dd
  * TIME: HH:mm:ss.SSS
  * TIMESTAMP: yyyy-MM-dd HH:mm:ss.SSS

Due to the format restrictions, we recommend to leave date/time values as `VARCHAR` and convert the result of `TRY_CONVERT_FROM` to the target type using `TO_DATE`, `TO_TIME`, or `TO_TIMESTAMP` functions.  |  
| `ROW`  | Any JSON object value. Fields not present in both the target type and the JSON object will be ignored. An empty struct value `{}` will be returned when there are no common fields between the JSON object and the target type.  |  
| `ARRAY`  | Any JSON list value. JSON lists with mixed primitive type values are supported. JSON lists containing mixed primitive and complex types are not supported and cannot be converted.  |  
Was this page helpful?
[Previous TRUNCATE](/reference/sql/sql-functions)[Next TYPEOF](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous TRUNCATE](/reference/sql/sql-functions)[Next TYPEOF](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FTRY_CONVERT_FROM%2F&_biz_t=1777950685967&_biz_i=TRY_CONVERT_FROM%20%7C%20Dremio%20Documentation&_biz_n=710&rnd=503668&cdn_o=a&_biz_z=1777950685968)
