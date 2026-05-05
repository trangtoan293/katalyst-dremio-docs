---
url: /help-support/advanced-topics/gandiva
slug: /help-support/advanced-topics/gandiva
title: "Gandiva-based Execution | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64222.680347583
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Gandiva-based Execution

Version: current [26.x]
On this page
# Gandiva-based Execution
You can use Gandiva-based execution to accelerate SQL expression evaluation in Dremio. Gandiva is a runtime expression compiler for Apache Arrow, originally developed by Dremio and [Dremio blog post introducing Gandiva](https://www.dremio.com/blog/announcing-gandiva-initiative-for-apache-arrow/).
By compiling expressions to native code rather than interpreting them, Gandiva:
  * Applies SIMD (Single Instruction, Multiple Data) vectorization using the hardware instruction sets available on each node
  * Reduces branching overhead by processing null validity bitmaps separately from data values
  * Delivers significant performance improvements over Java JIT compilation for complex analytical expressions


Many Gandiva functions are pre-compiled into LLVM IR (intermediate representation) to minimize per-query compilation overhead.
## Supported Functions[​](/help-support/advanced-topics/gandiva/)
If you use a combination of supported and non-supported functions, the code generation uses both Java and Gandiva splits.  
| Function Type  | Supported Functions  |  
| --- | --- |  
| Operators  | Arithmetic: +, -, *, /  
Relational: &lt;, &gt;, &lt;=, &gt;=, ==  |  
| Boolean  | and, or, not, isnull, isnotnull, is_distinct_from, is_not_distinct_from, is true, is false, is not true, is not false, isfalse, istrue, isnottrue, isnotfalse, isnumeric  |  
| Conditional  | greatest, least, nvl  |  
| Math  | abs, acos, asin, atan, atan2, bround, cbrt, ceil, ceiling, cos, cosh, cot, degrees, exp, factorial, floor, log, log10, mod, pmod, pow, power, radians, random, round, sign, sin, sinh, sqrt, tan, tanh, truncate  |  
| Bitwise  | bitwise_and, bitwise_not, bitwise_or, bitwise_xor, xor  |  
| Date/Time  | date_add, date_diff, date_sub, date_trunc_[_millennium | century | decade | year | quarter | month | week | day | hour | minute | second_], datediff, day, dayofmonth, extract[_millennium | century | decade | quarter | month | week | dow | doy | day | hour | minute | second | epoch_], hour, last_day, minute, month, months_between, next_day, quarter, second, timestampadd[_year | quarter | month | week | day | hour | minute | second_], timestampdiff[_year | quarter | month | week | day | hour | minute | second_], to_date, to_time, weekofyear, year, yearweek  |  
| String  | ascii, btrim, char_length, character_length, chr, concat, concat_ws, elt, ends_with, ilike, initcap, instr, is_substr, lcase, left, length, levenshtein, like, locate, lower, lpad, ltrim, mask, mask_first_n, mask_last_n, mask_show_first_n, mask_show_last_n, octet_length, position, quote, regexp_extract, repeat, replace, reverse, right, rpad, rtrim, soundex, space, split_part, starts_with, strpos, substr, substring, substring_index, translate, ucase, upper  |  
| Hash  | crc32, hash, hash32, hash64, md5, sha, sha1, sha256, sha512  |  
| Encryption  | decrypt, encrypt  |  
| Conversion  | base64, binary, binary_string, bit_length, castbigint, castdate, castfloat4, castfloat8, casttime, castvarchar, convert_from, from_hex, hex, to_hex, unbase64, unhex  |  
Was this page helpful?
[Previous Dremio Preferences](/help-support/advanced-topics/dremio-preferences)[Next Hash Aggregation Spilling](/help-support/advanced-topics/hash-agg-spilling)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Dremio Preferences](/help-support/advanced-topics/dremio-preferences)[Next Hash Aggregation Spilling](/help-support/advanced-topics/hash-agg-spilling)
!
