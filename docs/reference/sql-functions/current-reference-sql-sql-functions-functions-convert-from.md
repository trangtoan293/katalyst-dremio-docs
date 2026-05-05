---
url: /reference/sql/sql-functions/functions/CONVERT_FROM
title: "CONVERT_FROM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64301.9156385
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONVERT_FROM

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# CONVERT_FROM
Converts a binary string from the given data type to a Dremio type.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CONVERT_FROM(_binary_value_ value_to_convert, _data_type_ name_of_type) → varies[​](/reference/sql/sql-functions#convert_frombinary_value-value_to_convert-data_type-name_of_type--varies "Direct link to convert_frombinary_value-value_to_convert-data_type-name_of_type--varies")
  * binary_value: The binary string to convert to a Dremio data type.
  * data_type: The data type of the specified binary string.


**Examples**
Returns a LIST from the specified JSON.

```
SELECT CONVERT_FROM('["apple", "strawberry", "banana"]', 'json')  
-- ['apple', 'strawberry', 'banana']  

```

Returns a STRUCT from the specified JSON.

```
SELECT CONVERT_FROM('{"name":"Gnarly", "age":7, "car":null}', 'json')  
-- {"name":"Gnarly","age":7}  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
You can convert from binary values that are in these data formats:
  * BIGINT_BE
  * BIGINT_HADOOPV
  * BIGINT
  * BOOLEAN_BYTE
  * DATE_EPOCH_BE
  * DATE_EPOCH
  * DOUBLE_BE
  * DOUBLE
  * FLOAT_BE
  * FLOAT
  * INT_BE
  * INT_HADOOPV
  * INT
  * JSON
  * TIME_EPOCH_BE
  * TIME_EPOCH
  * TIMESTAMP_EPOCH_BE
  * TIMESTAMP_EPOCH
  * TIMESTAMP_IMPALA_LOCALTIMEZONE
  * TIMESTAMP_IMPALA
  * UTF8


Was this page helpful?
[Previous CONTAINS](/reference/sql/sql-functions)[Next CONVERT_REPLACEUTF8](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONTAINS](/reference/sql/sql-functions)[Next CONVERT_REPLACEUTF8](/reference/sql/sql-functions)
