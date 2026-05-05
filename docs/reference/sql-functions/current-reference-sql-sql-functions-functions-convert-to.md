---
url: /reference/sql/sql-functions/functions/CONVERT_TO
title: "CONVERT_TO | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64302.711144375
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * CONVERT_TO

Version: current [26.x]
On this page
**Categories** : [Conversion](/reference/sql/sql-functions)
# CONVERT_TO
Converts a value to a binary string of a supported data type.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### CONVERT_TO(_expression_ value_to_convert, _data_type_ name_of_type) → VARBINARY[​](/reference/sql/sql-functions#convert_toexpression-value_to_convert-data_type-name_of_type--varbinary "Direct link to convert_toexpression-value_to_convert-data_type-name_of_type--varbinary")
  * expression: The value to convert to a binary string.
  * data_type: The data type to use for the conversion to a binary string.


**Examples**
CONVERT_TO example

```
SELECT CONVERT_TO('this value' ,'UTF8')  
-- dGhpcyB2YWx1ZQ==  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
You can convert values to binary strings of these data types:
  * BIGINT_BE
  * BIGINT_HADOOPV
  * BIGINT
  * BOOLEAN_BYTE
  * DATE_EPOCH_BE
  * DATE_EPOCH
  * DOUBLE_BE
  * DOUBLE
  * EXTENDEDJSON
  * FLOAT_BE
  * FLOAT
  * INT_BE
  * INT_HADOOPV
  * INT
  * JSON
  * SIMPLEJSON
  * TIME_EPOCH_BE
  * TIME_EPOCH
  * TIMESTAMP_EPOCH_BE
  * TIMESTAMP_EPOCH
  * UTF8


Was this page helpful?
[Previous CONVERT_TIMEZONE](/reference/sql/sql-functions)[Next CORR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_TIMEZONE](/reference/sql/sql-functions)[Next CORR](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FCONVERT_TO%2F&_biz_t=1777950621605&_biz_i=CONVERT_TO%20%7C%20Dremio%20Documentation&_biz_n=583&rnd=571215&cdn_o=a&_biz_z=1777950621606)
