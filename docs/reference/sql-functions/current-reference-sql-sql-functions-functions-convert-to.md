---
url: /reference/sql/sql-functions/functions/CONVERT_TO
slug: /reference/sql/sql-functions/functions/CONVERT_TO
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
## Syntax
### CONVERT_TO(_expression_ value_to_convert, _data_type_ name_of_type) → VARBINARY[​](/reference/sql/sql-functions)
  * expression: The value to convert to a binary string.
  * data_type: The data type to use for the conversion to a binary string.


**Examples**
CONVERT_TO example

```
SELECT CONVERT_TO('this value' ,'UTF8')  
-- dGhpcyB2YWx1ZQ==  

```

## Usage Notes[​](/reference/sql/sql-functions)
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous CONVERT_TIMEZONE](/reference/sql/sql-functions)[Next CORR](/reference/sql/sql-functions)
!
