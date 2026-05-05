---
url: /reference/sql/sql-functions/functions/LISTAGG
slug: /reference/sql/sql-functions/functions/LISTAGG
title: "LISTAGG | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64324.577482625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LISTAGG

Version: current [26.x]
On this page
**Categories** : [Aggregate](/reference/sql/sql-functions)
# LISTAGG
Concatenates a group of rows into a list of strings and places a separator between them.
## Syntax
### LISTAGG ( [ALL | DISTINCT] measure_expr [, 'delimiter'] ) [WITHIN GROUP ( ORDER BY measure_expr [ASC | DESC] )][​](/reference/sql/sql-functions) \[WITHIN GROUP \( ORDER BY measure_expr \[ASC | DESC\] \)\]")
  * ALL (optional): Keeps duplicate values in the return list. This is the default behavior.
  * DISTINCT (optional): Removes duplicate values from the return list.
  * measure_expr: A string column or value.
  * delimiter (optional): Designates a string literal to separate the measure column values. If a delimiter is not specified, will default to `NULL`.
  * [WITHIN GROUP ( ORDER BY measure_expr [ASC | DESC] )] (optional): Determines the order in which the concatenated values are returned. Using one of the optional keywords - `ASC` or `DESC` - returns the values in ascending or descending order, respectively. The default order is ascending.


**Examples**
LISTAGG example

```
SELECT LISTAGG(city, '; ')  
FROM "Samples"."samples.dremio.com"."zips.json"  
-- AGAWAM; CUSHMAN; BARRE; BELCHERTOWN; BLANDFORD; BRIMFIELD; CHESTER; CHESTERFIELD; CHICOPEE; CHICOPEE  

```

LISTAGG example

```
SELECT LISTAGG(city, ', ')   
WITHIN GROUP (ORDER BY city DESC) "city_list"   
FROM Samples."samples.dremio.com"."zips.json"  
-- city_list  
-- ZWOLLE; ZWINGLE; ZURICH; ZUNI; ZUNI; ZUMBROTA; ZORTMAN; ZOLFO SPRINGS; ZOE; ZOARVILLE; ZIRCONIA; ZIO  

```

LISTAGG example

```
SELECT state,  
LISTAGG(DISTINCT city, '| ')  
WITHIN GROUP (ORDER BY city) "city_list"  
FROM Samples."samples.dremio.com"."zips.json"  
GROUP BY state  
ORDER BY state DESC  
-- state, city_list  
-- WY, 82057| ACME| AFTON| ALADDIN| ALBIN| ALCOVA| ARAPAHOE| ARMINTO| ARVADA| AUBURN| BAGGS| BAIROIL| BANNE  
-- WV, 24939| 25242| 25536| ABRAHAM| ADRIAN| ADVENT| ALBRIGHT| ALEXANDER| ALGOMA| ALKOL| ALUM BRIDGE| ALUM  
-- WI, ABBOTSFORD| ABRAMS| ADAMS| ADELL| ALBANY| ALGOMA| ALLENTON| ALLOUEZ| ALMA| ALMA CENTER| ALMENA| ALMO  

```

## Usage Notes[​](/reference/sql/sql-functions)
If the return list is greater than 32768 bytes, then Dremio truncates it.
Was this page helpful?
[Previous LIKE](/reference/sql/sql-functions)[Next LIST_FILES](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LIKE](/reference/sql/sql-functions)[Next LIST_FILES](/reference/sql/sql-functions)
!
