---
url: /reference/sql/information-schema/views
slug: /reference/sql/information-schema/views
title: "INFORMATION_SCHEMA.VIEWS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64264.325131416
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Information Schema](/reference/sql/information-schema)
  * INFORMATION_SCHEMA.VIEWS

Version: current [26.x]
On this page
# INFORMATION_SCHEMA.VIEWS
The INFORMATION_SCHEMA.VIEWS view contains metadata for views in a project.
Syntax

```
SELECT *  
FROM INFORMATION_SCHEMA.VIEWS  

```

## Example Output​  
| TABLE_CATALOG  | TABLE_SCHEMA  | TABLE_NAME  | VIEW_DEFINITION  |  
| --- | --- | --- | --- |  
| DREMIO  | Others  | 4-weeks-recipes  | SELECT * FROM "4week_recipes.json" WHERE cuisine = 'greek'  |  
| DREMIO  | Others  | Employee-Salary  | SELECT * FROM "employees.parquet" WHERE salary &gt; 15000  |  
| DREMIO  | Others  | Payment  | SELECT * FROM "payment_lookup.csv" WHERE payment_lookup = 'Cash'  |  
| DREMIO  | Others  | restaurant-reviews  | SELECT * FROM "restaurant_reviews.parquet" WHERE city = 'Carnegie'  |  
| DREMIO  | Others  | Sales-Records  | SELECT * FROM "100_Sales_Records_inconsistency.csv" WHERE 'Item Type' = 'Baby Food'  |  
| DREMIO  | Others  | SFIncidents  | SELECT * FROM "SF_incidents2016.json" WHERE DayOfWeek = 'Friday'  |  
| DREMIO  | TaxiTrip  | NYCTaxiFare  | SELECT * FROM "NYC-taxi-trips" WHERE fare_amount &gt; 20  |  
| DREMIO  | Weather  | NYCtaxifare  | SELECT * FROM "NYC-taxi-trips" WHERE fare_amount &gt; 20  |  
| DREMIO  | Weather  | SFWeatherElevation  | SELECT "TO_NUMBER"("ELEVATION", '##.##') AS "ELEVATION" FROM "Samples"."samples.dremio.com"."SF weather 2018-2019.csv"  |  
| DREMIO  | Weather  | zips  | SELECT * FROM "Weather"."SFWeatherElevation"  |  
## Fields​  
| Field  | Data Type  | Description  |  
| --- | --- | --- |  
| TABLE_CATALOG  | varchar  | The name of the catalog, which is always DREMIO.  |  
| TABLE_SCHEMA  | varchar  | The path (source, space, folders) to the view.  |  
| TABLE_NAME  | varchar  | The name of the view.  |  
| VIEW_DEFINITION  | varchar  | The original SQL query (underlying DDL statement) used to define the view.  |  
Was this page helpful?
[Previous INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous INFORMATION_SCHEMA."TABLES"](/reference/sql/information-schema/tables)
!
