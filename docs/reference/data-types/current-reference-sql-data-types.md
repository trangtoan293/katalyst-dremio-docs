---
url: /reference/sql/data-types
slug: /reference/sql/data-types
title: "Data Types | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64004.738942875
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * Data Types

Version: current [26.x]
On this page
# Data Types
A data type is a classification of data that determines the type of value a variable possesses and the types of mathematical, relational, or logical operations that can be performed on it. Dremio supports the following SQL data types: numeric, string and binary, boolean, date and time, and semi-structured.
The following topics related to data types are covered:
  * [Data Type Mappings for External Sources](/reference/sql/data-types/mappings): Identifies how data types from external sources are mapped in Dremio.
  * [Time Zone Support](/reference/sql/data-types/time-zone-support): Covers how timestamp values are handled in Dremio.
  * [Coercions Support](/reference/sql/data-types/coercions): Details how data types are coerced when there is a mismatch between the source file and the table.


## Summary of Supported Data Types in Dremio​
Dremio supports the following SQL data types.
### Numeric Data Types​
#### DECIMAL​
A DECIMAL type has precision (p) and scale (s): DECIMAL(p,s). Precision is the total number of digits. Scale is the number of digits to the right of the decimal point. When you're working with DECIMAL types, you can choose to specify the precision and scale by using the format (p,s).
Both precision and scale must contain positive numbers. The maximum precision value is 38. The scale value must be equal to or smaller than the precision. The default precision value is 38, and the default scale value is 0.
When you perform arithmetic on DECIMAL types that have different precision and/or scale, the return value will have sufficient precision and scale to hold the result of the operation. The following are decimal limitations in Dremio:
  * Decimal numeric literals in SQL queries cannot be larger than the maximum BIGINT value, which is 9223372036854775807.
  * Queries that perform arithmetic operations on a column and literal may cause errors. For example, `SELECT CAST(12345 as DOUBLE) * CAST(A as DOUBLE)` fails. The workaround is to use a string value such as `SELECT CAST('12345' as DOUBLE) * CAST(A as DOUBLE)`.
  * Queries casting numeric literals to decimal should use specific precision. Precision of literal cannot be lowered. For example, `CAST(123.23 as DECIMAL(2,0))` returns the same number as the output since the given number cannot be represented using a precision of 2.
  * When there is an overflow with the decimal arithmetic output, the returned result will overflow.
  * **Example:** 987.65 is a DECIMAL(5, 2) value


#### INT​
  * A 4-byte signed integer. The supported range is from -2147483648 to 2147483647.
  * **Example:** 5135


#### BIGINT​
  * An 8-byte signed integer. The supported range is from -9223372036854775808 to 9223372036854775807.
  * **Example:** -749826542587


#### FLOAT​
  * A 4-byte single-precision floating point. A FLOAT provides six decimal digits of precision.
  * **Example:** 123.123456


#### DOUBLE​
  * 8-byte double-precision floating point. A DOUBLE provides 15 decimal digits of precision.
  * **Example:** 123.123456789012345


### String & Binary Data Types​
#### VARCHAR​
  * VARCHAR stands for variable-length character string. VARCHAR supports only UTF-8 encoded values. The maximum length is constrained by a 16 MB row limit.
  * **Example:** 18852367854


#### VARBINARY​
VARBINARY stands for variable-length binary string. The maximum length is constrained by a 16 MB row limit. The value must be entered as a string value.
VARBINARY Example

```
SELECT CAST ('help' as VARBINARY)  
-- aGVscA==  

```

### Boolean Data Type​
#### BOOLEAN​
  * The supported values for BOOLEAN include true, false, and null.
  * **Example:** TRUE, FALSE, and NULL


### Date & Time Data Types​
Dremio supports the following formatting elements:  
| Format Element  | Description  | Example Output  |  
| --- | --- | --- |  
| AD/BC  | Era indicator  | AD, BC  |  
| AM/PM  | Meridian indicator  | AM, PM  |  
| CC  | Century indicator (0-99)  | 19  |  
| WW  | Week of year (0-52)  | 4, 43  |  
| D  | Day of week (1-7)  | 6  |  
| DY  | Abbreviated day name of week  | Tue, Fri  |  
| DAY  | Full day name of week  | Tuesday, Friday  |  
| YYYY  | Four digits of year  | 1996  |  
| YY  | Last two digits of year  | 96  |  
| DDD  | Day of year (1-366)  | 5, 245  |  
| MM  | Month (1-12)  | 8  |  
| MON  | Abbreviated month name  | Mar, Oct  |  
| MONTH  | Full month name  | March, October  |  
| DD  | Day of month (1-31)  | 24  |  
| HH/HH12  | Hour of day (1-12)  | 4  |  
| HH24  | Hour of day (0-23)  | 21  |  
| MI  | Minutes (0-59)  | 22  |  
| SS  | Seconds (0-59)  | 54  |  
| FFF  | Milliseconds  | 121  |  
| TZD  | Timezone abbreviation  | UTC, PST  |  
| TZO  | Timezone offset  | +02:00, -0800  |  
#### DATE​
  * A date value that enables you to calculate and store consistent information about the date of the events and transactions.
When using a string literal for the date, yyyy-mm-dd is the only supported format. To use a different format, use the [TO_DATE()](/reference/sql/sql-functions) function.
  * **Example:** DATE ‘2000-01-01’


#### TIME​
  * Identifies the time of day, which enables you to calculate and store consistent information about the time of the events and transactions.
When using a string literal for the time, HH24:MI:SS.sss and HH24:MI:SS are the only supported formats. To use a different format, use the [TO_TIME()](/reference/sql/sql-functions) function.
  * **Examples:**
    * TIME ‘17:30:50.235’
    * TIME ‘17:30:50’


#### TIMESTAMP​
  * Represents an absolute point in time with millisecond precision without a time zone. Timestamps are truncated to the nearest millisecond. For more information, see [Time Zone Support](/reference/sql/data-types/time-zone-support).
  * **Examples:**
    * TIMESTAMP ‘2000-01-01 01:30:50’
    * TIMESTAMP ‘2000-01-01 17:30:50’
    * TIMESTAMP ‘2000-01-01 17:30:50.9’
    * TIMESTAMP ‘2000-01-01 17:30:50.12’
    * TIMESTAMP ‘2000-01-01 17:30:50.123’


#### INTERVAL​
  * Intervals are used to represent a measure of time. Dremio supports the two available types of intervals: year-month, which stores the year and month (YYYY-MM); and day-time (DD HH:MM:SS), which stores the days, hours, minutes, and seconds.
  * The following forms are supported:
    * DAY HOUR:MINUTE:SECOND:MILLISECOND - For example, INTERVAL '3' DAY
    * YEAR-MONTH - For example, INTERVAL '3' MONTH
    * YEAR-MONTH - For example, INTERVAL '1' YEAR
    * DAY - For example, INTERVAL '5' DAY
    * MINUTE - For example, INTERVAL '5' MINUTE
    * SECOND - For example, INTERVAL '5' SECOND
    * DAY TO HOUR - For example, INTERVAL '4 01' DAY TO HOUR
    * DAY TO MINUTE - For example, INTERVAL '4 01:01' DAY TO MINUTE
    * DAY TO SECOND - For example, INTERVAL '4 01:01:01' DAY TO SECOND
    * **Examples:**
      * INTERVAL ‘1 2:34:56.789’ DAY TO SECOND
      * INTERVAL ‘1-5’ YEAR TO MONTH


### Semi-structured Data Types​
#### STRUCT​
  * Used to represent collections of key-value pairs. Keys are non-empty, case-insensitive strings, and values can be of any type. The example shows the required format for a query where the key (city) must be enclosed in [ ] and the column (address) is a STRUCT data type.
Dremio does not have STRUCT literals, but you can get the same result using CONVERT_FROM and JSON strings. For example:

```
SELECT CONVERT_FROM('{"name":"Gnarly", "age":7, "car":null}', 'json')  
-- {"name":"Gnarly","age":7}  

```

  * **Example:** `SELECT address['city'] FROM customerTable`


#### LIST​
  * Used to represent a list of arbitrary size, where the index is a non-negative integer and values can be of any single type. The example shows the required format for a query where the index (100) must be enclosed in [ ] and the column (OrderHistoryTable) is a LIST data type.
Dremio has LIST literals using the ARRAY keyword. For example:

```
SELECT ARRAY[1, 2, 3];  
-- [1, 2, 3]  

```

  * **Example:** `SELECT customerOrders[100] FROM OrderHistoryTable`


#### MAP​
  * The MAP type is a collection of key-value pairs. MAP keys are case-insensitive strings. All values in a given map have the same type. For example, `map<string, int>` represents a mapping where the keys are strings and the values are integers. To retrieve the value of a MAP element, use `column['key']`
MAP Syntax

```
SELECT <column_name['<key_name>']> FROM <table_name>.  

```

For information about the SQL functions that are available for MAP expressions, see [Datatype](/reference/sql/sql-functions).
    * If you have queried tables with MAP data using an earlier release of Dremio, you must run `ALTER TABLE table_name FORGET METADATA` on those tables so that Dremio knows they have MAP rather than STRUCT. Otherwise, Dremio will give an error prompting you to reformat your dataset.
    * MAP does not support null values.
  * **Example:** `SELECT address['city'] FROM customerTable`


Was this page helpful?
[Previous SQL Reference](/reference/sql)[Next Mappings for External Sources](/reference/sql/data-types/mappings)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQL Reference](/reference/sql)[Next Mappings for External Sources](/reference/sql/data-types/mappings)
