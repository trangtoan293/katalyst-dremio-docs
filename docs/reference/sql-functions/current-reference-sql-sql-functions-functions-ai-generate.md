---
url: /reference/sql/sql-functions/functions/AI_GENERATE
slug: /reference/sql/sql-functions/functions/AI_GENERATE
title: "AI_GENERATE | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64069.81245975
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * AI_GENERATE

Version: current [26.x]
On this page
**Categories** : [AI](/reference/sql/sql-functions)
# AI_GENERATE
Flexible general-purpose function for processing unstructured data, primarily used for complex data extraction requiring multiple fields from source files.
## Syntax
### AI_GENERATE( [_model_name_ VARCHAR,] _prompt_ VARCHAR | (_prompt_ VARCHAR, _file_reference_) [WITH SCHEMA _data_type_] ) → ANY|ROW[​](/reference/sql/sql-functions)
  * model_name (optional): Model specification in format `modelProvider.modelName` (e.g., `gpt.4o`). `modelProvider` is the user-defined name for model provider configuration added in the preferences section. `modelName` is one of the models supported and provided by that provider. If not provided, uses the default model for the organization.
  * prompt: Natural language instruction for the LLM. Use `(prompt, file_reference)` to process files from `LIST_FILES`.
  * WITH SCHEMA data_type (optional): Output structure specification. When provided, supports any SQL type that is valid as JSON (`VARCHAR`, `INT`, `BOOLEAN`, `FLOAT`, `DOUBLE`) and a flat `LIST` of any of these types, plus flat `ROW` types with column names and data types for multiple columns.


**Examples**
AI_GENERATE example

```
WITH recipe_analysis AS (   
  SELECT file['path'] AS recipe_file,   
    AI_GENERATE( 'gpt.4o', ('Extract recipe details', file)   
      WITH SCHEMA ROW( recipe_name VARCHAR, cuisine_type VARCHAR)) AS recipe_info   
  FROM TABLE(LIST_FILES('@Cookbooks/cookbook_recipes'))   
    WHERE file['path'] LIKE '%.pdf' )   
  SELECT recipe_file, recipe_info['recipe_name'] AS recipe, recipe_info['cuisine_type'] AS cuisine   
  FROM recipe_analysis   
    ORDER BY recipe ASC;  
-- recipe_file           | recipe                | cuisine  
-- italian_recipes.pdf   | Spaghetti Carbonara   | Italian  
-- asian_cookbook.pdf    | Pad Thai              | Thai  
-- desserts_guide.pdf    | Tiramisu              | Italian  

```

## Usage Notes[​](/reference/sql/sql-functions)
• `AI_GENERATE` is the most flexible AI function, supporting both simple text generation and complex structured data extraction.  
  
• Use `(prompt, file_reference)` to process files from `LIST_FILES`.  
  
• When `WITH SCHEMA ROW` is provided, the output is explicitly structured according to that schema including column names and data types.  
  
• Without `WITH SCHEMA`, the output would be `ANY` type.  
  
• If no model is specified, uses the default model set for the organization.  
  
• Model specification format: `modelProvider.modelName` (e.g., `gpt.4o`).
Was this page helpful?
[Previous AI_COMPLETE](/reference/sql/sql-functions)[Next APPROX_COUNT_DISTINCT](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AI_COMPLETE](/reference/sql/sql-functions)[Next APPROX_COUNT_DISTINCT](/reference/sql/sql-functions)
!
