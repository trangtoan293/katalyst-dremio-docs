---
url: /reference/sql/system-tables/model-usage
title: "SYS.HISTORY.MODEL_USAGE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64372.732782
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.HISTORY.MODEL_USAGE

Version: current [26.x]
On this page
# SYS.HISTORY.MODEL_USAGE
The `sys.history.model_usage` table contains metadata for LLM model usage through Dremio.
Syntax

```
SELECT * FROM sys.history.model_usage  

```

## Example Output[​](/reference/sql/system-tables/model-usage#example-output "Direct link to Example Output")  
| id  | user_id  | model_provider_name  | model_name  | input_tokens  | output_tokens  | duration_ms  | interaction_id  | created_at  | num_model_calls  | interaction_type  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| 000286ac-3162-4dcd-8d28-59dfa71aeae5  | 408670d3-7d91-42ab-bd1e-908a5cd676e4  | Anthropic-Chat  | claude-sonnet-4-20250514  | 5193  | 68  | 2945  | cceec24c-a201-494d-87f6-34081cea8759  | 2025-08-01 04:48:55.061  | 1  | CHAT  |  
## Columns[​](/reference/sql/system-tables/model-usage#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| id  | varchar  | The UUID of the usage record.  |  
| user_id  | varchar  | The ID of the user who made the request.  |  
| model_provider_name  | varchar  | The display name of the model provider configuration used to submit the interaction.  |  
| model_name  | The name of the LLM model used during the interaction.  |   |  
| input_tokens  | float  | The number of input tokens consumed, excluding cached tokens.  |  
| cached_read_input_tokens  | float  | The number of cached read input tokens consumed.  |  
| cached_write_input_tokens  | float  | The number of cached write input tokens consumed.  |  
| output_tokens  | float  | The number of output tokens consumed.  |  
| duration_ms  | float  | The request execution time in milliseconds.  |  
| interaction_id  | varchar  | The ID of the interaction, such as a chat history session ID or job ID.  |  
| created_at  | timestamp  | The date and time when the usage record was created.  |  
| num_model_calls  | float  | The number of model calls made in the usage record.  |  
| interaction_type  | varchar  | The type of interaction. Enum: `CHAT`, `SQL`.  |  
Was this page helpful?
[Previous SYS.MEMBERSHIP](/reference/sql/system-tables/membership)[Next SYS.PIPE_SUMMARY](/reference/sql/system-tables)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.MEMBERSHIP](/reference/sql/system-tables/membership)[Next SYS.PIPE_SUMMARY](/reference/sql/system-tables)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsystem-tables%2Fmodel-usage%2F&_biz_t=1777950692559&_biz_i=SYS.HISTORY.MODEL_USAGE%20%7C%20Dremio%20Documentation&_biz_n=719&rnd=148434&cdn_o=a&_biz_z=1777950692560)
