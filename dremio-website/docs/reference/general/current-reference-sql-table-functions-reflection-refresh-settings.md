---
url: /reference/sql/table-functions/reflection-refresh-settings
title: "SYS.REFLECTION_REFRESH_SETTINGS | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64379.207780083
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [Table Functions](/reference/sql/table-functions)
  * SYS.REFLECTION_REFRESH_SETTINGS

Version: current [26.x]
On this page
# SYS.REFLECTION_REFRESH_SETTINGS
Returns the refresh settings for a Reflection, including settings inherited from the datasets that the Reflection depends on.
Syntax

```
SELECT * FROM TABLE(sys.reflection_refresh_settings('<reflection_id>'))  

```

## Parameter[​](/reference/sql/table-functions/reflection-refresh-settings#parameter "Direct link to Parameter")
`reflection_id` String
The ID of the Reflection. If you need to find a Reflection ID, see [Obtaining Reflection IDs](/acceleration/manual-reflections/using-reflection-hints#obtaining-reflection-ids).
## Example[​](/reference/sql/table-functions/reflection-refresh-settings#example "Direct link to Example")
Return the settings for a Reflection that depends on multiple datasets

```
SELECT * FROM TABLE(sys.reflection_refresh_settings('64p1a2eb-2811-3efb-805d-00c428f21079'));  

```

Example of the query result  
| table_type  | table_path  | table_version_context  | overrides_source  | refresh_method  | refresh_policy  | refresh_period_seconds  | refresh_schedule  | never_expire  | expire_after_seconds  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| DATASET  | prod.data.users  | _empty text_  | false  | FULL  | PERIOD  | 21600  | _empty text_  | false  | 10800  |  
| DATASET  | prod.data.views  | {'{'})'{'{'})'{'}'})"type":"BRANCH","value":"main"{'{'})'{'}'}'{'}'}  | true  | AUTO  | LIVE_REFRESH  | -1  | _empty text_  | true  | -1  |  
| DATASET  | prod.data.stats  | _empty text_  | true  | AUTO  | SCHEDULE  | -1  | 0 0 8 * * *  | true  | _empty text_  |  
## Columns[​](/reference/sql/table-functions/reflection-refresh-settings#columns "Direct link to Columns")
Irrelevant columns are assigned sentinel values: -1 for numbers and an empty string for text.  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| table_type  | varchar  | Defines the type of table. Enum: `DATASET` or `EXTERNAL_QUERY`  |  
| table_path  | varchar  | Identifies the path to the dataset or external query source that the Reflection depends on.  |  
| table_version_context  | varchar  | Specifies the versioning context for datasets, stored in JSON format.  |  
| overrides_source  | boolean  | Indicates whether settings are inherited from the source (`true`) or set on the table (`false`).  |  
| refresh_method  | varchar  | Shows the method used for the most recent refresh of the Reflection. Enum: `FULL`, `INCREMENTAL`, `AUTO`  |  
| refresh_policy  | varchar  | Identifies the type of refresh policy. Enum: `PERIOD`, `SCHEDULE`, `LIVE_REFRESH`, `NEVER_REFRESH`  |  
| refresh_period_seconds  | double  | Specifies the time in seconds (truncated from milliseconds) between refreshes.  |  
| refresh_schedule  | varchar  | Provides the cron expression (UTC) that defines the refresh schedule for the Reflection.  |  
| never_expire  | boolean  | Indicates whether the Reflection never expires (`true`) or uses the expiration setting (`false`).  |  
| expire_after_seconds  | double  | Defines the expiration time in seconds (truncated from milliseconds), after which the system removes the Reflection.  |  
Was this page helpful?
[Previous SYS.REFLECTION_LINEAGE](/reference/sql/table-functions/reflection-lineage)[Next Information Schema](/reference/sql/information-schema)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.REFLECTION_LINEAGE](/reference/sql/table-functions/reflection-lineage)[Next Information Schema](/reference/sql/information-schema)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Ftable-functions%2Freflection-refresh-settings%2F&_biz_t=1777950699664&_biz_i=SYS.REFLECTION_REFRESH_SETTINGS%20%7C%20Dremio%20Documentation&_biz_n=736&rnd=405833&cdn_o=a&_biz_z=1777950699665)
