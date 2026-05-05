---
url: /reference/sql/sql-functions/functions/IS_MEMBER
title: "IS_MEMBER | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64321.574073333
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * IS_MEMBER

Version: current [26.x]
On this page
**Categories** : [Boolean](/reference/sql/sql-functions)
# IS_MEMBER
Returns whether the current user is a member of the specified role. When this function is used in a Reflection, it can be pulled out at the time of materialization and re-applied at query time.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### IS_MEMBER(_expression_ varchar) → boolean[​](/reference/sql/sql-functions#is_memberexpression-varchar--boolean "Direct link to is_memberexpression-varchar--boolean")
  * expression: String expression identfying a role in Dremio.


**Examples**
IS_MEMBER example

```
SELECT IS_MEMBER ('public')  
-- True  

```

IS_MEMBER example

```
SELECT IS_MEMBER ('non-role')  
-- False  

```

Was this page helpful?
[Previous IS_INT](/reference/sql/sql-functions)[Next IS_SUBSTR](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IS_INT](/reference/sql/sql-functions)[Next IS_SUBSTR](/reference/sql/sql-functions)
