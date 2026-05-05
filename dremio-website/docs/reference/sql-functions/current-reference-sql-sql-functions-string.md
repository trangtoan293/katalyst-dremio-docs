---
url: /reference/sql/sql-functions/STRING
title: "String | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64272.009010333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * String

Version: current [26.x]
# String  
| Function Name  | Description  |  
| --- | --- |  
| [ASCII](/reference/sql/sql-functions)  | Returns the ASCII code for the first character of a string. If the string is empty, 0 is returned.  |  
| [BASE64](/reference/sql/sql-functions)  | Returns the Base64 encoding of a binary string.  |  
| [BTRIM](/reference/sql/sql-functions)  | Trims leading and trailing characters from a string.  |  
| [CHARACTER_LENGTH](/reference/sql/sql-functions)  | Returns the length of an input string.  |  
| [CHAR_LENGTH](/reference/sql/sql-functions)  | Returns the character length of the input string.  |  
| [CHR](/reference/sql/sql-functions)  | Converts a Unicode code point into the character that matches the input Unicode character. If an invalid code point is specified, an empty string is returned.  |  
| [COL_LIKE](/reference/sql/sql-functions)  | Tests whether an expression column matches a pattern column. Comparisons are case-sensitive.  |  
| [CONCAT](/reference/sql/sql-functions)  | Concatenates two or more strings. `NULL` values are ignored.  |  
| [CONCAT_WS](/reference/sql/sql-functions)  | Concatenate with separator. Returns a string resulting from the joining of two or more string values in an end-to-end manner. Uses the first argument as the separator between each string.  |  
| [CONTAINS](/reference/sql/sql-functions)  | Returns documents matching the provided Lucene expression.  |  
| [CRC32](/reference/sql/sql-functions)  | Returns a cyclic redundancy check value of a binary string.  |  
| [ENDS_WITH](/reference/sql/sql-functions)  | Returns whether a string ends with another string. The comparison is case-sensitive.  |  
| [FROM_HEX](/reference/sql/sql-functions)  | Returns a binary value for the given hexadecimal string.  |  
| [HEX](/reference/sql/sql-functions)  | Returns the hexadecimal encoding of an expression.  |  
| [ILIKE](/reference/sql/sql-functions)  | Tests whether an expression matches a pattern. The comparison is case-insensitive.  |  
| [INITCAP](/reference/sql/sql-functions)  | Returns the input string with the first letter of each word in uppercase and the subsequent letters in the word are in lowercase.  |  
| [INSTR](/reference/sql/sql-functions)  | Returns the position of the first occurrence of a string when it is contained in another string. If no such occurrence is found, a zero is returned. The comparison is case-sensitive.  |  
| [IS_UTF8](/reference/sql/sql-functions)  | Returns whether an expression is valid UTF-8  |  
| [LCASE](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to lowercase.  |  
| [LEFT](/reference/sql/sql-functions)  | Returns the left-most substring. The function name must be enclosed in double quotes ("LEFT").  |  
| [LENGTH](/reference/sql/sql-functions)  | Returns the length of an input string. If the character encoding isn't specified, it assumes to UTF8.  |  
| [LEVENSHTEIN](/reference/sql/sql-functions)  | Computes the Levenshtein distance between two input expressions.  |  
| [LIKE](/reference/sql/sql-functions)  | Tests whether an expression matches one or more patterns. Comparisons are case-sensitive.  |  
| [LOCATE](/reference/sql/sql-functions)  | Searches for the first occurrence of the first argument in the second argument and if found, returns the position of the first argument in the second argument. The first character in a string is position 1. Returns 0 if the substring isn't found in the expression.  |  
| [LOWER](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to lowercase.  |  
| [LPAD](/reference/sql/sql-functions)  | Left pads a string with spaces or specified characters to reach the number of characters specified as a parameter.  |  
| [LTRIM](/reference/sql/sql-functions)  | Removes leading spaces or characters from a string.  |  
| [MASK](/reference/sql/sql-functions)  | Returns a masked version of a string.  |  
| [MASK_FIRST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the first `num_chars` characters masked. By default, if you do not provide a mask value, the first four characters are masked.  |  
| [MASK_HASH](/reference/sql/sql-functions)  | Returns a consistent hash value based on the input string. This function returns `NULL` for non-string types.  |  
| [MASK_LAST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the last `num_chars` characters masked. By default, if you do not provide a mask value, the last four characters are masked.  |  
| [MASK_SHOW_FIRST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the first `num_chars` characters unmasked. By default, if you do not provide a value, the first four characters are shown.  |  
| [MASK_SHOW_LAST_N](/reference/sql/sql-functions)  | Returns a masked version of a string with the last `num_chars` characters unmasked. By default, if you do not provide a value, the last four characters are shown.  |  
| [NORMALIZE_STRING](/reference/sql/sql-functions)  | Returns a normalized string in the specified unicode normalization form.  |  
| [OCTET_LENGTH](/reference/sql/sql-functions)  | Returns the length of the string in bytes.  |  
| [PARSE_URL](/reference/sql/sql-functions)  | Returns the specified part of the URL or the value for the specified QUERY key.  |  
| [POSITION](/reference/sql/sql-functions)  | Returns the position of the first occurrence of a substring within another string  |  
| [QUOTE](/reference/sql/sql-functions)  | Returns a result that can be used as a properly escaped data value in a SQL statement.  |  
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
| [RPAD](/reference/sql/sql-functions)  | Right pads a string with spaces or specified characters to reach the number of characters specified as a parameter.  |  
| [RTRIM](/reference/sql/sql-functions)  | Removes trailing spaces or characters from a string.  |  
| [SIMILAR_TO](/reference/sql/sql-functions)  | Tests whether the entire expression matches a pattern.  |  
| [SOUNDEX](/reference/sql/sql-functions)  | Returns a string that contains a phonetic representation of the input string.  |  
| [SPLIT_PART](/reference/sql/sql-functions)  | Splits a given string at a specified character and returns the requested part.  |  
| [STARTS_WITH](/reference/sql/sql-functions)  | Returns whether a string starts with another string. The comparison is case-sensitive.  |  
| [STRPOS](/reference/sql/sql-functions)  | Searches for the first occurence of the substring in the given expression and returns the position of where the substring begins. Searching binary values is also supported.  |  
| [ST_FROMGEOHASH](/reference/sql/sql-functions)  | Returns the latitude and longitude coordinates of the center of the given geohash.  |  
| [ST_GEOHASH](/reference/sql/sql-functions)  | Returns the corresponding geohash for the given latitude and longitude coordinates.  |  
| [SUBSTR](/reference/sql/sql-functions)  | Returns the portion of the string from the specified base expression starting at the specified characters. This function supports regular expressions.  |  
| [SUBSTRING](/reference/sql/sql-functions)  | Returns the portion of the string from the specified base expression starting at the specified characters.  |  
| [SUBSTRING_INDEX](/reference/sql/sql-functions)  | Returns a substring of an expression before the specified number of delimiter occurs.  |  
| [TOASCII](/reference/sql/sql-functions)  | Converts a string that is encoded in the specified character set to UTF-8.  |  
| [TO_HEX](/reference/sql/sql-functions)  | Returns a hexadecimal string for the given binary value.  |  
| [TRANSLATE](/reference/sql/sql-functions)  | Translates the base expression from the source characters/expression to the target characters/expression.  |  
| [TRIM](/reference/sql/sql-functions)  | Removes leading, trailing, or both spaces or characters from a string.  |  
| [UCASE](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to uppercase.  |  
| [UNBASE64](/reference/sql/sql-functions)  | Decodes a Base64-encoded string.  |  
| [UNHEX](/reference/sql/sql-functions)  | Converts the hexadecimal number into the bytes represented by a number.  |  
| [UPPER](/reference/sql/sql-functions)  | Returns the input expression with all the characters converted to uppercase.  |  
Was this page helpful?
[Previous Semi-Structured Data](/reference/sql/sql-functions)[Next System](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Semi-Structured Data](/reference/sql/sql-functions)[Next System](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2FSTRING%2F&_biz_t=1777950591638&_biz_i=String%20%7C%20Dremio%20Documentation&_biz_n=535&rnd=735750&cdn_o=a&_biz_z=1777950591638)
