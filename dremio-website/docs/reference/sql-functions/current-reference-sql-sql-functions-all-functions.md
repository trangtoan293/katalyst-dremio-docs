---
url: /reference/sql/sql-functions/ALL_FUNCTIONS
title: "All Functions | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.7203645
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * All Functions

Version: current [26.x]
# All Functions  
| Function Name  | Description  |  
| --- | --- |  
| [ABS](/reference/sql/sql-functions)  | Computes the absolute value of a numeric expression.  |  
| [ACOS](/reference/sql/sql-functions)  | Computes the arccosine (inverse cosine) of a value in radians.  |  
| [AES_DECRYPT](/reference/sql/sql-functions)  | Decrypts a string produced by AES encryption. **Deprecated.** Dremio recommends `DECRYPT` for improved security and support for modern cipher modes.  |  
| [AES_ENCRYPT](/reference/sql/sql-functions)  | Encrypts a string using AES encryption. **Deprecated.** Dremio recommends `ENCRYPT` for improved security and support for modern cipher modes. Ciphertext created with `AES_ENCRYPT` can be decrypted with `DECRYPT` in `AES-ECB` mode and does not need to be recreated with `ENCRYPT` unless a stronger cipher mode is required.  |  
| [AI_CLASSIFY](/reference/sql/sql-functions)  | Specialized form of `AI_GENERATE` for sentiment analysis and document categorization. Classification list provided to LLM as an array of `VARCHAR`, `INT`, `FLOAT` or `BOOLEAN` and the return is of the same type.  |  
| [AI_COMPLETE](/reference/sql/sql-functions)  | Specialized form of `AI_GENERATE` for creative text generation and summaries, returned as `VARCHAR`.  |  
| [AI_GENERATE](/reference/sql/sql-functions)  | Flexible general-purpose function for processing unstructured data, primarily used for complex data extraction requiring multiple fields from source files.  |  
| [APPROX_COUNT_DISTINCT](/reference/sql/sql-functions)  | Returns the approximate number of unique, non-null values in a column.  |  
| [APPROX_PERCENTILE](/reference/sql/sql-functions)  | Computes the approximate percentile of the given column and quantile.  |  
| [ARRAYS_OVERLAP](/reference/sql/sql-functions)  | Compares whether two arrays have at least one element in common. Returns true if the arrays have one or more elements in common; otherwise returns false.  |  
| [ARRAY_AGG](/reference/sql/sql-functions)  | Aggregates the provided expression into an array.  |  
| [ARRAY_APPEND](/reference/sql/sql-functions)  | Appends an element to the end of an array.  |  
| [ARRAY_AVG](/reference/sql/sql-functions)  | Returns the average of all non-null elements of a list.  |  
| [ARRAY_CAT](/reference/sql/sql-functions)  | Returns a concatenation of two arrays.  |  
| [ARRAY_COMPACT](/reference/sql/sql-functions)  | Returns the input array without null values.  |  
| [ARRAY_CONTAINS](/reference/sql/sql-functions)  | Returns whether a list contains a given value.  |  
| [ARRAY_DISTINCT](/reference/sql/sql-functions)  | Given an input array, returns an equivalent array that includes only distinct elements.  |  
| [ARRAY_FREQUENCY](/reference/sql/sql-functions)  | Returns a map of key-value pairs: keys are the unique elements in the input array and values specify how many times the keys appear in the input array.  |  
| [ARRAY_GENERATE_RANGE](/reference/sql/sql-functions)  | Returns an array of integers in the specified range.  |  
| [ARRAY_INSERT](/reference/sql/sql-functions)  | Returns an array that contains all of the elements from the input array as well as a new element inserted in the specified position.  |  
| [ARRAY_MAX](/reference/sql/sql-functions)  | Returns the maximum value of a list.  |  
| [ARRAY_MIN](/reference/sql/sql-functions)  | Returns the minimum value of a list.  |  
| [ARRAY_POSITION](/reference/sql/sql-functions)  | Returns the index of the first occurrence of an element in an array.  |  
| [ARRAY_PREPEND](/reference/sql/sql-functions)  | Prepends an element to the beginning of an array.  |  
| [ARRAY_REMOVE](/reference/sql/sql-functions)  | Removes all elements that equal a given value from a list.  |  
| [ARRAY_REMOVE_AT](/reference/sql/sql-functions)  | Returns the input array with the element at the specified position removed.  |  
| [ARRAY_SIZE](/reference/sql/sql-functions)  | Returns the size of the input array.  |  
| [ARRAY_SLICE](/reference/sql/sql-functions)  | Returns an array constructed from the specified subset of elements in the input array.  |  
| [ARRAY_SUM](/reference/sql/sql-functions)  | Returns the sum of all non-null elements of a list.  |  
| [ARRAY_TO_STRING](/reference/sql/sql-functions)  | Returns a string of the values from the input array, with the values separated by the specified delimiter string.  |  
| [ASCII](/reference/sql/sql-functions)  | Returns the ASCII code for the first character of a string. If the string is empty, 0 is returned.  |  
| [ASIN](/reference/sql/sql-functions)  | Computes the arcsine (inverse sine) of a value in radians.  |  
| [ATAN](/reference/sql/sql-functions)  | Computes the Arctangent (inverse Tangent) of a value.  |  
| [ATAN2](/reference/sql/sql-functions)  | Computes the Arctangent (inverse Tangent) of the ratio of its two arguments.  |  
| [AVG](/reference/sql/sql-functions)  | Computes the average of a set of values.  |  
| [BASE64](/reference/sql/sql-functions)  | Returns the Base64 encoding of a binary string.  |  
| [BIN](/reference/sql/sql-functions)  | Returns the binary representation of an expression.  |  
| [BINARY_STRING](/reference/sql/sql-functions)  | Converts the input expression to a binary value.  |  
| [BITWISE_AND](/reference/sql/sql-functions)  | Returns the bitwise AND of two operands.  |  
| [BITWISE_NOT](/reference/sql/sql-functions)  | Returns the bitwise NOT of the given operand.  |  
| [BITWISE_OR](/reference/sql/sql-functions)  | Returns the bitwise OR of two operands.  |  
| [BITWISE_XOR](/reference/sql/sql-functions)  | Returns the bitwise XOR of two operands.  |  
| [BIT_AND](/reference/sql/sql-functions)  | Returns the bitwise `AND` of non-NULL input values.  |  
| [BIT_LENGTH](/reference/sql/sql-functions)  | Returns the length of the bits of the input expression.  |  
| [BIT_OR](/reference/sql/sql-functions)  | Returns the bitwise `OR` of non-NULL input values.  |  
| [BOOL_AND](/reference/sql/sql-functions)  | Computes the boolean AND of two boolean expressions. Returns TRUE if both expressions evaluate to TRUE. Returns FALSE if one or both expression(s) evaluate(s) to FALSE.  |  
| [BOOL_OR](/reference/sql/sql-functions)  | Computes the boolean OR of two boolean expressions. Returns TRUE if one or both expressions evaluate to TRUE. Returns FALSE if both expressions evaluate to FALSE.  |  
| [BROUND](/reference/sql/sql-functions)  | Returns the rounded result of the numeric expression using `HALF_EVEN` rounding mode.  |  
| [BTRIM](/reference/sql/sql-functions)  | Trims leading and trailing characters from a string.  |  
| [CARDINALITY](/reference/sql/sql-functions)  | Returns the number of elements contained in the specified list or map.  |  
| [CASE](/reference/sql/sql-functions)  | Evaluates a list of conditions and returns the first resulting true expression. If a true expression is not found, will return the `ELSE` statement, if present, or else will return `NULL`.  |  
| [CAST](/reference/sql/sql-functions)  | Converts a value of one data type to another data type. This function behaves similarly to the TO_`data_type` (i.e. TO_TIMESTAMP) functions.  |  
| [CBRT](/reference/sql/sql-functions)  | Computes the cube root of a numeric expression.  |  
| [CEILING](/reference/sql/sql-functions)  | Returns the nearest equal or larger value of the input expression. Can also be called using CEIL().  |  
| [CHARACTER_LENGTH](/reference/sql/sql-functions)  | Returns the length of an input string.  |  
| [CHAR_LENGTH](/reference/sql/sql-functions)  | Returns the character length of the input string.  |  
| [CHR](/reference/sql/sql-functions)  | Converts a Unicode code point into the character that matches the input Unicode character. If an invalid code point is specified, an empty string is returned.  |  
| [COALESCE](/reference/sql/sql-functions)  | Evaluates the arguments in order and returns the value of the first expression that does not contain `NULL`.  |  
| [COL_LIKE](/reference/sql/sql-functions)  | Tests whether an expression column matches a pattern column. Comparisons are case-sensitive.  |  
| [CONCAT](/reference/sql/sql-functions)  | Concatenates two or more strings. `NULL` values are ignored.  |  
| [CONCAT_WS](/reference/sql/sql-functions)  | Concatenate with separator. Returns a string resulting from the joining of two or more string values in an end-to-end manner. Uses the first argument as the separator between each string.  |  
| [CONTAINS](/reference/sql/sql-functions)  | Returns documents matching the provided Lucene expression.  |  
| [CONVERT_FROM](/reference/sql/sql-functions)  | Converts a binary string from the given data type to a Dremio type.  |  
| [CONVERT_REPLACEUTF8](/reference/sql/sql-functions)  | Converts a binary string to a UTF-8 value and replaces all characters that cannot be converted to UTF-8 with the specified replacement character.  |  
| [CONVERT_TIMEZONE](/reference/sql/sql-functions)  | Convert timestamp to the specified timezone.  |  
| [CONVERT_TO](/reference/sql/sql-functions)  | Converts a value to a binary string of a supported data type.  |  
| [CORR](/reference/sql/sql-functions)  | Calculates the Pearson correlation coefficient of the values expression1 and expression2. The function name must be enclosed in double quotes ("CORR").  |  
| [COS](/reference/sql/sql-functions)  | Computes the cosine of a value in radians.  |  
| [COSH](/reference/sql/sql-functions)  | Computes the hyperbolic cosine of a value in radians.  |  
| [COT](/reference/sql/sql-functions)  | Computes the cotangent of a value in radians.  |  
| [COUNT](/reference/sql/sql-functions)  | Returns the total number of records for the specified expression.  |  
| [COVAR_POP](/reference/sql/sql-functions)  | Returns the population covariance for non-NULL pairs across all input values.  |  
| [COVAR_SAMP](/reference/sql/sql-functions)  | Returns the sample covariance for non-NULL pairs across all input values.  |  
| [CRC32](/reference/sql/sql-functions)  | Returns a cyclic redundancy check value of a binary string.  |  
| [CUME_DIST](/reference/sql/sql-functions)  | Returns the cumulative distribution of the current row with regard to other values within the same window partition.  |  
| [CURRENT_DATE](/reference/sql/sql-functions)  | Returns the current date of the system.  |  
| [CURRENT_DATE_UTC](/reference/sql/sql-functions)  | Returns the current date of the system based on the UTC timezone.  |  
| [CURRENT_SCHEMA](/reference/sql/sql-functions)  | Returns the path/schema in use by the current session. This function cannot be used in a Reflection.  |  
| [CURRENT_TIME](/reference/sql/sql-functions)  | Returns the current time for the system.  |  
| [CURRENT_TIMESTAMP](/reference/sql/sql-functions)  | Returns the current timestamp for the system in UTC time only.  |  
| [DATEDIFF](/reference/sql/sql-functions)  | Compares two dates or timestamps and returns the difference in days.  |  
| [DATETYPE](/reference/sql/sql-functions)  | Constructs DATE using the values provided for year, month, and day parameters.  |  
| [DATE_ADD](/reference/sql/sql-functions)  | Returns the sum of two expressions of time as another expression of time.  |  
| [DATE_DIFF](/reference/sql/sql-functions)  | Returns the difference between two expressions of time as another expression of time.  |  
| [DATE_PART](/reference/sql/sql-functions)  | Return subfields such as year or hour from date or timestamp values.  |  
| [DATE_SUB](/reference/sql/sql-functions)  | Returns the difference of two expressions of time as another expression of time.  |  
| [DATE_TRUNC](/reference/sql/sql-functions)  | Truncates the date or timestamp to the indicated precision.  |  
| [DAY](/reference/sql/sql-functions)  | Returns the day of month of the date or timestamp.  |  
| [DAYOFMONTH](/reference/sql/sql-functions)  | Returns the day of month of the date or timestamp.  |  
| [DAYOFWEEK](/reference/sql/sql-functions)  | Returns the day of the week (from 1 to 7) of the date or timestamp.  |  
| [DAYOFYEAR](/reference/sql/sql-functions)  | Returns the day of the year (from 1 to 366) of the date or timestamp.  |  
| [DECRYPT](/reference/sql/sql-functions)  | Decrypts data using AES decryption with various modes, including `AES-ECB`, `AES-CBC`, and `AES-GCM`. Supports `PKCS7` padding or no padding options. For `AES-GCM` mode, verifies the authentication tag.  |  
| [DEGREES](/reference/sql/sql-functions)  | Converts radians to degrees.  |  
| [DENSE_RANK](/reference/sql/sql-functions)  | Returns the rank of the current row within its partition and ordering. Rows that are equal will have the same rank.  |  
| [E](/reference/sql/sql-functions)  | Returns Euler's number, a constant approximately equal to 2.718281828459045.  |  
| [ENCODE](/reference/sql/sql-functions)  | Encodes the input expression using the specified charSet character encoding.  |  
| [ENCRYPT](/reference/sql/sql-functions)  | Encrypts data using AES encryption. Supported modes include `AES-ECB`, `AES-CBC`, and `AES-GCM`.  |  
| [ENDS_WITH](/reference/sql/sql-functions)  | Returns whether a string ends with another string. The comparison is case-sensitive.  |  
| [EXP](/reference/sql/sql-functions)  | Calculates Euler's number, e, raised to the power of the specified value.  |  
| [EXTRACT](/reference/sql/sql-functions)  | Extracts the specified time unit from the specified date, time, or timestamp.  |  
| [FACTORIAL](/reference/sql/sql-functions)  | Computes the factorial of the numeric expression. The input expression must be an integer from `0` to `20`.  |  
| [FIRST_VALUE](/reference/sql/sql-functions)  | Returns the first value within an ordered group of a result set.  |  
| [FLATTEN](/reference/sql/sql-functions)  | Explodes compound values into multiple rows. The FLATTEN function takes a `LIST` column and produces a lateral view (that is, an inline view that contains correlation referring to other tables that precede it in the FROM clause).  |  
| [FLOOR](/reference/sql/sql-functions)  | Returns the value from the specified expression rounded to the nearest equal or smaller integer.  |  
| [FROM_HEX](/reference/sql/sql-functions)  | Returns a binary value for the given hexadecimal string.  |  
| [GEO_BEYOND](/reference/sql/sql-functions)  | Returns whether or not the two points are beyond the distance specified in meters.  |  
| [GEO_DISTANCE](/reference/sql/sql-functions)  | Returns the distance between two points in meters.  |  
| [GEO_NEARBY](/reference/sql/sql-functions)  | Returns whether or not the two points are within the distance specified in meters.  |  
| [GREATEST](/reference/sql/sql-functions)  | Returns the largest value from a list of expressions.  |  
| [HASH](/reference/sql/sql-functions)  | Returns a hash value of the arguments. `HASH` does not return `NULL`, even for `NULL` inputs.  |  
| [HASH64](/reference/sql/sql-functions)  | Returns 64-bit hash of input value, with optional seed.  |  
| [HEX](/reference/sql/sql-functions)  | Returns the hexadecimal encoding of an expression.  |  
| [HOUR](/reference/sql/sql-functions)  | Extracts the hour number (from 0 to 23) for a given time or timestamp.  |  
| [ILIKE](/reference/sql/sql-functions)  | Tests whether an expression matches a pattern. The comparison is case-insensitive.  |  
| [IMAXDIR](/reference/sql/sql-functions)  | Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks highest in case-insensitive alphanumeric order.  |  
| [IMINDIR](/reference/sql/sql-functions)  | Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks lowest in case-insensitive alphanumeric order.  |  
| [INITCAP](/reference/sql/sql-functions)  | Returns the input string with the first letter of each word in uppercase and the subsequent letters in the word are in lowercase.  |  
| [INSTR](/reference/sql/sql-functions)  | Returns the position of the first occurrence of a string when it is contained in another string. If no such occurrence is found, a zero is returned. The comparison is case-sensitive.  |  
| [IS [NOT] DISTINCT FROM](/reference/sql/sql-functions)  | Compares two expressions to determine whether they have the same or different values. NULLs are considered as comparable values.  |  
| [ISDATE](/reference/sql/sql-functions)  | Returns `true` if the input expression can be cast to a date.  |  
| [IS [NOT] FALSE](/reference/sql/sql-functions)  | Tests whether the input expression is either false or not false. If true in either case, returns a value of `true`. Alias for the function `ISFALSE`/`ISNOTFALSE`.  |  
| [IS [NOT] NULL](/reference/sql/sql-functions)  | Determines if an expression is `NULL` or not `NULL`. Alias for the function `ISNULL`/`ISNOTNULL`.  |  
| [ISNUMERIC](/reference/sql/sql-functions)  | Determines whether an expression is a valid numeric type (DECIMAL, DOUBLE, INT, BIGINT, VARBINARY).  |  
| [IS [NOT] TRUE](/reference/sql/sql-functions)  | Tests whether the input expression is either true or not true. If true in either case, returns a value of `true`. Alias for the function `ISTRUE`/`ISNOTTRUE`.  |  
| [IS_BIGINT](/reference/sql/sql-functions)  | Returns TRUE if the input expression is an big integer value.  |  
| [IS_INT](/reference/sql/sql-functions)  | Returns TRUE if the input expression is an integer value.  |  
| [IS_MEMBER](/reference/sql/sql-functions)  | Returns whether the current user is a member of the specified role. When this function is used in a Reflection, it can be pulled out at the time of materialization and re-applied at query time.  |  
| [IS_SUBSTR](/reference/sql/sql-functions)  | Returns `true` if a string is contained within another string. The comparison is case-sensitive.  |  
| [IS_UTF8](/reference/sql/sql-functions)  | Returns whether an expression is valid UTF-8  |  
| [IS_VARCHAR](/reference/sql/sql-functions)  | Returns TRUE if the input expression is a varchar value.  |  
| [LAG](/reference/sql/sql-functions)  | Returns the row before the current one in a partition based on the `ORDER BY` clause without the need for a self-join. If there are no rows, this function returns `NULL`.  |  
| [LAST_DAY](/reference/sql/sql-functions)  | Returns the last day of the month for the specified date or timestamp.  |  
| [LAST_QUERY_ID](/reference/sql/sql-functions)  | Returns the ID for the most recently executed query in the current session. This function cannot be used in a Reflection.  |  
| [LAST_VALUE](/reference/sql/sql-functions)  | Returns the last value within an ordered group of a result set.  |  
| [LCASE](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to lowercase.  |  
| [LEAD](/reference/sql/sql-functions)  | Returns the row after the current one in the same result set without the need for a self-join. If there are no rows, this function returns `NULL`.  |  
| [LEAST](/reference/sql/sql-functions)  | Returns the smallest value from a list of expressions.  |  
| [LEFT](/reference/sql/sql-functions)  | Returns the left-most substring. The function name must be enclosed in double quotes ("LEFT").  |  
| [LENGTH](/reference/sql/sql-functions)  | Returns the length of an input string. If the character encoding isn't specified, it assumes to UTF8.  |  
| [LEVENSHTEIN](/reference/sql/sql-functions)  | Computes the Levenshtein distance between two input expressions.  |  
| [LIKE](/reference/sql/sql-functions)  | Tests whether an expression matches one or more patterns. Comparisons are case-sensitive.  |  
| [LISTAGG](/reference/sql/sql-functions)  | Concatenates a group of rows into a list of strings and places a separator between them.  |  
| [LIST_FILES](/reference/sql/sql-functions)  | Lists files recursively from a source directory, adhering to the `COPY INTO` security model. Returns structured information about each file for use with AI functions and data processing workflows.  |  
| [LN](/reference/sql/sql-functions)  | Returns the natural logarithm of the numeric expression.  |  
| [LOCALTIME](/reference/sql/sql-functions)  | Returns the current time for the system.  |  
| [LOCALTIMESTAMP](/reference/sql/sql-functions)  | Returns the current timestamp for the system.  |  
| [LOCATE](/reference/sql/sql-functions)  | Searches for the first occurrence of the first argument in the second argument and if found, returns the position of the first argument in the second argument. The first character in a string is position 1. Returns 0 if the substring isn't found in the expression.  |  
| [LOG](/reference/sql/sql-functions)  | Returns the logarithm of the numeric input expression. If no base is specified, the natural log (ln) will be calculated.  |  
| [LOG10](/reference/sql/sql-functions)  | Returns the log base 10 of the numeric input expression.  |  
| [LOWER](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to lowercase.  |  
| [LPAD](/reference/sql/sql-functions)  | Left pads a string with spaces or specified characters to reach the number of characters specified as a parameter.  |  
| [LSHIFT](/reference/sql/sql-functions)  | Shifts the bits of the numeric expression to the left.  |  
| [LTRIM](/reference/sql/sql-functions)  | Removes leading spaces or characters from a string.  |  
| [MAP_KEYS](/reference/sql/sql-functions)  | Returns all keys from a map expression.  |  
| [MAP_VALUES](/reference/sql/sql-functions)  | Returns all values from a map expression.  |  
| [MASK](/reference/sql/sql-functions)  | Returns a masked version of a string.  |  
| [MASK_FIRST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the first `num_chars` characters masked. By default, if you do not provide a mask value, the first four characters are masked.  |  
| [MASK_HASH](/reference/sql/sql-functions)  | Returns a consistent hash value based on the input string. This function returns `NULL` for non-string types.  |  
| [MASK_LAST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the last `num_chars` characters masked. By default, if you do not provide a mask value, the last four characters are masked.  |  
| [MASK_SHOW_FIRST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the first `num_chars` characters unmasked. By default, if you do not provide a value, the first four characters are shown.  |  
| [MASK_SHOW_LAST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the last `num_chars` characters unmasked. By default, if you do not provide a value, the last four characters are shown.  |  
| [MAX](/reference/sql/sql-functions)  | Returns the maximum value among the non-NULL input expressions.  |  
| [MAXDIR](/reference/sql/sql-functions)  | Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks highest in case-sensitive alphanumeric order.  |  
| [MD5](/reference/sql/sql-functions)  | Computes the MD5 hash value of a string.  |  
| [MEDIAN](/reference/sql/sql-functions)  | Computes the median of the specified column's values based on a continuous distribution.  |  
| [MIN](/reference/sql/sql-functions)  | Returns the minimum value among the non-NULL input expressions.  |  
| [MINDIR](/reference/sql/sql-functions)  | Returns the name of a subdirectory of a table in HDFS. The subdirectory has the name that ranks lowest in case-sensitive alphanumeric order.  |  
| [MINUTE](/reference/sql/sql-functions)  | Extracts the minute number (from 0 to 59) for a given time or timestamp.  |  
| [MOD](/reference/sql/sql-functions)  | Returns the remainder of the input expression divided by the second input expression.  |  
| [MONTH](/reference/sql/sql-functions)  | Extracts the month number (from 1 to 12) for a given date or timestamp.  |  
| [MONTHS_BETWEEN](/reference/sql/sql-functions)  | Returns the number of months between two date or timestamp values.  |  
| [NDV](/reference/sql/sql-functions)  | Returns an approximate distinct value number, similar to `COUNT(DISTINCT col)`. NDV can return results faster than using the combination of COUNT and DISTINCT while using a constant amount of memory, resulting in less memory usage for columns with high cardinality.  |  
| [NEXT_DAY](/reference/sql/sql-functions)  | Returns the date or timestamp of the first specified day of week that occurs after the input date.  |  
| [NORMALIZE_STRING](/reference/sql/sql-functions)  | Returns a normalized string in the specified unicode normalization form.  |  
| [NOW](/reference/sql/sql-functions)  | Returns the current timestamp (date and time) in UTC timezone.  |  
| [NTILE](/reference/sql/sql-functions)  | Equally splits the rows in each partition into ranked parts specified by the integer value and starting from 1. This function requires the `ORDER BY` clause.  |  
| [NULLIF](/reference/sql/sql-functions)  | Compares two expressions. If the values in each expression are equal, returns `NULL` and, if they are not equal, returns the value of the first expression.  |  
| [NVL](/reference/sql/sql-functions)  | Returns the value of the first expression, if it is not `NULL`. Otherwise, returns the value of the second expression.  |  
| [OCTET_LENGTH](/reference/sql/sql-functions)  | Returns the length of the string in bytes.  |  
| [OVERLAPS](/reference/sql/sql-functions)  | Returns whether two intervals overlap.  |  
| [PARSE_URL](/reference/sql/sql-functions)  | Returns the specified part of the URL or the value for the specified QUERY key.  |  
| [PERCENTILE_CONT](/reference/sql/sql-functions)  | Computes a percentile value based on a continuous distribution of the column input.  |  
| [PERCENTILE_DISC](/reference/sql/sql-functions)  | Computes a specific percentile for sorted values in a column.  |  
| [PERCENT_RANK](/reference/sql/sql-functions)  | Returns the relative rank of the current row in the partition based on the `ORDER BY` clause. The displayed percentage ranges from 0.0 to 1.0.  |  
| [PI](/reference/sql/sql-functions)  | Returns the value of pi, which is approximately 3.14592654.  |  
| [PMOD](/reference/sql/sql-functions)  | Returns the positive remainder after dividend / divisor. Returns an error if the divisor is 0.  |  
| [POSITION](/reference/sql/sql-functions)  | Returns the position of the first occurrence of a substring within another string  |  
| [POW, POWER](/reference/sql/sql-functions)  | Returns the result of raising the input value to the specified power.  |  
| [QUARTER](/reference/sql/sql-functions)  | Extracts the quarter number (from 1 to 4) for a given date or timestamp.  |  
| [QUERY_USER](/reference/sql/sql-functions)  | Returns the username of the user that is currently logged in to the system. This function cannot be used in a Reflection.  |  
| [QUOTE](/reference/sql/sql-functions)  | Returns a result that can be used as a properly escaped data value in a SQL statement.  |  
| [RADIANS](/reference/sql/sql-functions)  | Convert a value in degrees to radians.  |  
| [RANDOM](/reference/sql/sql-functions)  | Each call returns a random generated number between 0 and 1 for each row.  |  
| [RANK](/reference/sql/sql-functions)  | Returns the rank of the current row within its partition and placement order. Rows that are equal have the same rank. However, the count of tied rows is added to the next rank, instead of being incremented by one. The rank value starts at 1 and increases sequentially.  |  
| [REGEXP_COL_LIKE](/reference/sql/sql-functions)  | Returns whether a string matches a regular expression in a column.  |  
| [REGEXP_EXTRACT](/reference/sql/sql-functions)  | Extracts the first string in expression that matches the `REGEXP` expression and corresponds to the `REGEX` group index.  |  
| [REGEXP_LIKE](/reference/sql/sql-functions)  | Returns whether a string matches a regular expression.  |  
| [REGEXP_MATCHES](/reference/sql/sql-functions)  | Returns whether a string matches a regular expression.  |  
| [REGEXP_REPLACE](/reference/sql/sql-functions)  | Finds strings that match the given regular expression and replaces the strings with the given string.  |  
| [REGEXP_SPLIT](/reference/sql/sql-functions)  | Splits an input string by using a regular expression according to a keyword and an integer value.  |  
| [REPEAT](/reference/sql/sql-functions)  | Builds a string by repeating the input for the specified number of times  |  
| [REPEATSTR](/reference/sql/sql-functions)  | Repeats the given string n times.  |  
| [REPLACE](/reference/sql/sql-functions)  | Removes all occurrences of a specified substring and replaces them with another string.  |  
| [REVERSE](/reference/sql/sql-functions)  | Reverses the order of characters in a string.  |  
| [RIGHT](/reference/sql/sql-functions)  | Returns the right-most substring. The function name must be enclosed in double quotes ("RIGHT").  |  
| [ROUND](/reference/sql/sql-functions)  | Returns the rounded value for the inputted value. If no scale is specified, the closest whole number is returned.  |  
| [ROW_NUMBER](/reference/sql/sql-functions)  | Returns the row number for the current row based on the ORDER BY clause within each partition.  |  
| [RPAD](/reference/sql/sql-functions)  | Right pads a string with spaces or specified characters to reach the number of characters specified as a parameter.  |  
| [RSHIFT](/reference/sql/sql-functions)  | Shifts the bits of the numeric expression to the right.  |  
| [RTRIM](/reference/sql/sql-functions)  | Removes trailing spaces or characters from a string.  |  
| [SECOND](/reference/sql/sql-functions)  | Extracts the second number (from 0 to 59) for a given date or timestamp.  |  
| [SESSION_USER](/reference/sql/sql-functions)  | Returns the user that created the current session. This function cannot be used in a Reflection.  |  
| [SET_UNION](/reference/sql/sql-functions)  | Given two arrays, returns a single array that includes all of the elements in the given arrays, without duplicates.  |  
| [SHA, SHA1](/reference/sql/sql-functions)  | Computes the SHA-1 hash value of a string.  |  
| [SHA256](/reference/sql/sql-functions)  | Computes the 256-bit SHA-2 hash value of a string.  |  
| [SHA512](/reference/sql/sql-functions)  | Computes the 512-bit SHA-2 hash value of a string.  |  
| [SIGN](/reference/sql/sql-functions)  | Returns the sign of the input expression.  |  
| [SIMILAR_TO](/reference/sql/sql-functions)  | Tests whether the entire expression matches a pattern.  |  
| [SIN](/reference/sql/sql-functions)  | Computes the sine of a value.  |  
| [SINH](/reference/sql/sql-functions)  | Computes the hyperbolic sine of the input expression.  |  
| [SIZE](/reference/sql/sql-functions)  | Returns the number of entries in a map expression.  |  
| [SOUNDEX](/reference/sql/sql-functions)  | Returns a string that contains a phonetic representation of the input string.  |  
| [SPLIT_PART](/reference/sql/sql-functions)  | Splits a given string at a specified character and returns the requested part.  |  
| [SQRT](/reference/sql/sql-functions)  | Returns the square root of the non-negative numeric expression.  |  
| [STARTS_WITH](/reference/sql/sql-functions)  | Returns whether a string starts with another string. The comparison is case-sensitive.  |  
| [STDDEV](/reference/sql/sql-functions)  | Returns the standard deviation of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [STDDEV_POP](/reference/sql/sql-functions)  | Returns the population standard deviation (square root of variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [STDDEV_SAMP](/reference/sql/sql-functions)  | Returns the sample standard deviation (square root of sample variance) of non-NULL values in a column with a numeric data type. If all records inside a group are NULL, returns NULL.  |  
| [STRING_BINARY](/reference/sql/sql-functions)  | Returns a string that represents the provided bytes. Escapes non-printable characters as hex values.  |  
| [STRPOS](/reference/sql/sql-functions)  | Searches for the first occurence of the substring in the given expression and returns the position of where the substring begins. Searching binary values is also supported.  |  
| [ST_FROMGEOHASH](/reference/sql/sql-functions)  | Returns the latitude and longitude coordinates of the center of the given geohash.  |  
| [ST_GEOHASH](/reference/sql/sql-functions)  | Returns the corresponding geohash for the given latitude and longitude coordinates.  |  
| [SUBLIST](/reference/sql/sql-functions)  | Returns an array constructed from the specified subset of elements of the input array.  |  
| [SUBSTR](/reference/sql/sql-functions)  | Returns the portion of the string from the specified base expression starting at the specified characters. This function supports regular expressions.  |  
| [SUBSTRING](/reference/sql/sql-functions)  | Returns the portion of the string from the specified base expression starting at the specified characters.  |  
| [SUBSTRING_INDEX](/reference/sql/sql-functions)  | Returns a substring of an expression before the specified number of delimiter occurs.  |  
| [SUM](/reference/sql/sql-functions)  | Returns the sum of non-NULL input expressions.  |  
| [SYSTEM_USER](/reference/sql/sql-functions)  | Returns the name of the current user. This function cannot be used in a Reflection.  |  
| [TAN](/reference/sql/sql-functions)  | Computes the tangent of a value in radians.  |  
| [TANH](/reference/sql/sql-functions)  | Computes the hyperbolic tangent of the input expression.  |  
| [TIMESTAMPADD](/reference/sql/sql-functions)  | Add (or subtract) an interval of time from a date/timestamp value or column.  |  
| [TIMESTAMPDIFF](/reference/sql/sql-functions)  | Return the amount of time between two date or timestamp values  |  
| [TIMESTAMPTYPE](/reference/sql/sql-functions)  | Constructs a timestamp using the values provided for year, month, day, hour, minute, second, and millisecond parameters.  |  
| [TOASCII](/reference/sql/sql-functions)  | Converts a string that is encoded in the specified character set to UTF-8.  |  
| [TO_CHAR](/reference/sql/sql-functions)  | Converts the input expression to a character/string using the specified format.  |  
| [TO_DATE](/reference/sql/sql-functions)  | Converts the input expressions to the corresponding date.  |  
| [TO_HEX](/reference/sql/sql-functions)  | Returns a hexadecimal string for the given binary value.  |  
| [TO_NUMBER](/reference/sql/sql-functions)  | Converts a string into a number (double) in the specified format.  |  
| [TO_TIME](/reference/sql/sql-functions)  | Converts the input expressions to the corresponding time.  |  
| [TO_TIMESTAMP](/reference/sql/sql-functions)  | Converts the input expressions to the corresponding timestamp.  |  
| [TRANSACTION_TIMESTAMP](/reference/sql/sql-functions)  | Returns the timestamp in UTC of the current transaction. This function cannot be used in a Reflection.  |  
| [TRANSLATE](/reference/sql/sql-functions)  | Translates the base expression from the source characters/expression to the target characters/expression.  |  
| [TRIM](/reference/sql/sql-functions)  | Removes leading, trailing, or both spaces or characters from a string.  |  
| [TRUNCATE](/reference/sql/sql-functions)  | Truncates the input expression toward zero to the nearest integer or to the specified number of decimal places.  |  
| [TRY_CONVERT_FROM](/reference/sql/sql-functions)  | Attempts to convert a JSON string to a data type supported in Dremio.  |  
| [TYPEOF](/reference/sql/sql-functions)  | Reports the type (in string format) of the input expression.  |  
| [UCASE](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to uppercase.  |  
| [UNBASE64](/reference/sql/sql-functions)  | Decodes a Base64-encoded string.  |  
| [UNHEX](/reference/sql/sql-functions)  | Converts the hexadecimal number into the bytes represented by a number.  |  
| [UNIX_TIMESTAMP](/reference/sql/sql-functions)  | Returns the Unix epoch time representation of an ISO 8601 timestamp.  |  
| [UPPER](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to uppercase.  |  
| [USER](/reference/sql/sql-functions)  | Returns the user that is currently logged into the system. This function cannot be used in a Reflection.  |  
| [VAR_POP](/reference/sql/sql-functions)  | Returns the population variance of non-NULL records.  |  
| [VAR_SAMP](/reference/sql/sql-functions)  | Returns the sample variance of non-NULL records.  |  
| [WEEK](/reference/sql/sql-functions)  | Extracts the week number (from 0 to 53) for a given date or timestamp.  |  
| [WEEKOFYEAR](/reference/sql/sql-functions)  | Returns the week of year of the date or timestamp.  |  
| [XOR](/reference/sql/sql-functions)  | Returns the bitwise XOR of two integers.  |  
| [YEAR](/reference/sql/sql-functions)  | Extracts the year for a given date or timestamp.  |  
Was this page helpful?
[Previous SQL Functions](/reference/sql/sql-functions)[Next Aggregate](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SQL Functions](/reference/sql/sql-functions)[Next Aggregate](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2FALL_FUNCTIONS%2F&_biz_t=1777950389319&_biz_i=All%20Functions%20%7C%20Dremio%20Documentation&_biz_n=148&rnd=532123&cdn_o=a&_biz_z=1777950389320)
