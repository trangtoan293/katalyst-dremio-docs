---
url: /reference/sql/system-tables/results-cache
title: "SYS.RESULTS_CACHE | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64378.054982541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [System Tables](/reference/sql/system-tables)
  * SYS.RESULTS_CACHE

Version: current [26.x]
On this page
# SYS.RESULTS_CACHE
The `sys.results_cache` table shows the state of the results cache for a Dremio instance. Each row represents a cached query result entry.
Syntax

```
SELECT *  
FROM sys.results_cache  

```

## Example Output[​](/reference/sql/system-tables/results-cache#example-output "Direct link to Example Output")  
| cache_key  | job_id  | created_timestamp  | last_access_timestamp  | cache_location  | file_size_kb  | cache_status  | message  | user  |  
| --- | --- | --- | --- | --- | --- | --- | --- | --- |  
| a1b2c3d4-e5f6-7890-abcd-ef1234567890  | 1e011d6d-722e-7cc6-2b99-ec4c36b1d400  | 2024-03-15 10:23:45.123  | 2024-03-15 11:05:12.456  | /results/a1b2c3d4  | 128  | READY  | _empty text_  |   |  
| b2c3d4e5-f6a7-8901-bcde-f12345678901  | 2f122e7e-833f-8dd7-3caa-fd5d47c2e511  | 2024-03-15 09:10:00.000  | 2024-03-15 09:10:00.000  | /results/b2c3d4e5  | 512  | ERROR_RETRYABLE  | Unable to cache query result because query result exceeds limit. Current limit: 20MB  |   |  
## Columns[​](/reference/sql/system-tables/results-cache#columns "Direct link to Columns")  
| Column  | Data Type  | Description  |  
| --- | --- | --- |  
| cache_key  | varchar  | The unique identifier for the cached result.  |  
| job_id  | varchar  | The ID of the job that produced the cached result.  |  
| created_timestamp  | timestamp  | The date and time when the cache entry was created.  |  
| last_access_timestamp  | timestamp  | The date and time when the cache entry was last accessed.  |  
| cache_location  | varchar  | The storage location of the cached result.  |  
| file_size_kb  | bigint  | The size of the cached result in kilobytes.  |  
| cache_status  | varchar  | The current status of the cache entry. Enum:
  * `ERROR_NO_RETRY`: An unrecoverable error occurred when writing the cache entry. The system will not attempt to cache results for this query again.
  * `ERROR_RETRYABLE`: A recoverable error occurred when writing the cache entry. The system will attempt to cache results again if the same query is submitted.
  * `READY`: The cache entry is available.
  * `UNKNOWN`: The status cannot be determined.

 |  
| message  | varchar  | Additional status or error information for the cache entry.  |  
| user  | varchar  | The username of the user who ran the query that produced the cached result.  |  
Was this page helpful?
[Previous SYS.REFLECTIONS](/reference/sql/system-tables/reflections)[Next SYS.ROLES](/reference/sql/system-tables/roles)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous SYS.REFLECTIONS](/reference/sql/system-tables/reflections)[Next SYS.ROLES](/reference/sql/system-tables/roles)
