---
url: /reference/sql/system-tables
title: "System Tables | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64073.609376625
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * System Tables

Version: current [26.x]
# System Tables
System tables make up Dremio's system-created catalog to store metadata for the objects in your Dremio organization. Each system table is specific to the associated Dremio object and its attributes, unlike [Information Schemas](/reference/sql/information-schema), which are based on the ANSI standards. System tables are read-only (cannot be modified or dropped by users).
Dremio administrators can delegate access to most of the system tables. The exceptions are `sys.copy_errors_history`, `sys.copy_file_history`, and `sys.pipe_summary`. Only users assigned the `ADMIN` role can query these tables.
For system tables that support delegated access, Dremio administrators can grant or revoke access to the system table to other users and roles using [GRANT and REVOKE](/reference/sql/commands/rbac) commands.
In Dremio 20+, the `sys.dependencies` table has been renamed to `sys.reflection_dependencies`.  
| Tables  | Description  |  
| --- | --- |  
| [sys.copy_errors_history](/reference/sql/system-tables/copy-errors-history)  | Information about COPY INTO operations that were run with `ON_ERROR` set to `continue` and that rejected at least one record in a CSV or JSON file.  |  
| [sys.copy_file_history](/reference/sql/system-tables/copy-file-history)  | The history of every file loaded by an autoingest pipeline.  |  
| [sys.history.autonomous_reflections](/reference/sql/system-tables/autonomous-reflections-historical)  | The historical metadata for Autonomous Reflections.  |  
| [sys.jobs](/reference/sql/system-tables/jobs)  | The metadata for jobs currently running in the Dremio instance.  |  
| [sys.jobs_recent](/reference/sql/system-tables)  | The metadata for jobs that ran in the Dremio instance during the previous thirty days.  |  
| [sys.materializations](/reference/sql/system-tables/materializations)  | Monitoring history for Reflection materialization jobs in the Dremio instance.  |  
| [sys.membership](/reference/sql/system-tables/membership)  | The metadata for role membership in the Dremio instance.  |  
| [sys.history.model_usage](/reference/sql/system-tables/model-usage)  | The LLM model usage triggered by AI Features in Dremio.  |  
| [sys.pipe_summary](/reference/sql/system-tables)  | The historical metadata for autoingest pipes.  |  
| [sys.privileges](/reference/sql/system-tables/privileges)  | The metadata for privileges for objects in the Dremio instance.  |  
| [sys.pipes](/reference/sql/system-tables/pipes)  | The metadata for autoingest pipes.  |  
| [sys.reflection_dependencies](/reference/sql/system-tables/reflection-dependencies)  | The runtime graph for Reflection dependencies in the Dremio instance.  |  
| [sys.reflections](/reference/sql/system-tables/reflections)  | The metadata for Reflections in the Dremio instance.  |  
| [sys.results_cache](/reference/sql/system-tables/results-cache)  | The metadata for cached query results in the Dremio instance.  |  
| [sys.roles](/reference/sql/system-tables/roles)  | The metadata for roles in the Dremio instance.  |  
| [sys."tables"](/reference/sql/system-tables/tables)  | The metadata for tables in the Dremio instance.  |  
| [sys.timezone_names](/reference/sql/system-tables/timezone-names)  | The complete list of timezones and associated information.  |  
| [sys.user_defined_functions](/reference/sql/system-tables/user-defined-functions)  | The metadata for the user defined functions (UDFs) installed in the Dremio instance.  |  
| [sys.users](/reference/sql/system-tables/users)  | The metadata for users in the Dremio instance.  |  
| [sys.version](/reference/sql/system-tables/version)  | The metadata for the version of Dremio Enterprise that is deployed.  |  
| [sys.views](/reference/sql/system-tables/views)  | The metadata for views in the Dremio instance.  |  
Was this page helpful?
[Previous Reserved Words](/reference/sql/reserved-keywords)[Next SYS.HISTORY.AUTONOMOUS_REFLECTIONS](/reference/sql/system-tables/autonomous-reflections-historical)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Reserved Words](/reference/sql/reserved-keywords)[Next SYS.HISTORY.AUTONOMOUS_REFLECTIONS](/reference/sql/system-tables/autonomous-reflections-historical)
