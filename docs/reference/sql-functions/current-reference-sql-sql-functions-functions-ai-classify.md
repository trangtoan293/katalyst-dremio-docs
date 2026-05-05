---
url: /reference/sql/sql-functions/functions/AI_CLASSIFY
title: "AI_CLASSIFY | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.560014541
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * AI_CLASSIFY

Version: current [26.x]
On this page
**Categories** : [AI](/reference/sql/sql-functions)
# AI_CLASSIFY
Specialized form of `AI_GENERATE` for sentiment analysis and document categorization. Classification list provided to LLM as an array of `VARCHAR`, `INT`, `FLOAT` or `BOOLEAN` and the return is of the same type.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### AI_CLASSIFY( [_model_name_ VARCHAR,] _prompt_ VARCHAR | (_prompt_ VARCHAR, _file_reference_), _categories_ ARRAY&lt;VARCHAR|INT|FLOAT|BOOLEAN&gt; ) → VARCHAR|INT|FLOAT|BOOLEAN[​](/reference/sql/sql-functions#ai_classify-model_name-varchar-prompt-varchar--prompt-varchar-file_reference-categories-arrayvarcharintfloatboolean---varcharintfloatboolean "Direct link to ai_classify-model_name-varchar-prompt-varchar--prompt-varchar-file_reference-categories-arrayvarcharintfloatboolean---varcharintfloatboolean")
  * model_name (optional): Model specification in format `'modelProvider.modelName'` (e.g., `'gpt.4o'`). `modelProvider` is the user-defined name for model provider configuration added in the preferences section. `modelName` is one of the models supported and provided by that provider. If not provided, uses the default model for the organization.
  * prompt: Classification instructions for the LLM. Use `(prompt, file_reference)` to process files from `LIST_FILES`.
  * categories: Array of possible classifications. The LLM will choose one of these values as the result.


**Examples**
AI_CLASSIFY example

```
SELECT recipe_name,   
  AI_CLASSIFY( 'Determine the difficulty level based on these ingredients and steps',   
    ingredients || ' - Steps: ' || cooking_instructions,   
    ARRAY['Beginner', 'Easy', 'Intermediate', 'Advanced', 'Expert']) AS difficulty_level, prep_time, number_of_ingredients   
  FROM recipe_database;  
-- recipe_name            | difficulty_level  | prep_time | number_of_ingredients   
-- Chocolate Chip Cookies | Easy              | 15        | 8  
-- Beef Wellington        | Expert            | 180       | 12  
-- Caesar Salad           | Beginner          | 10        | 6  

```

AI_CLASSIFY example

```
SELECT file['path'] as image,   
  AI_CLASSIFY( 'gpt.4o',  
    ('Determine the type of food in the pictures', file),  
    ARRAY['Savory', 'Sweet', 'Tart', 'Unknown']) AS food_type   
  FROM TABLE(LIST_FILES('@image_source/path/to/images'));  
-- image                       | food_type  
-- desserts/chocolate_cake.jpg | Sweet  
-- appetizers/bruschetta.jpg   | Savory  
-- fruits/lemon_tart.jpg       | Tart  

```

AI_CLASSIFY example

```
SELECT file['path'] as image,   
  AI_CLASSIFY( ('Determine the type of food in the pictures', file),  
    ARRAY['Savory', 'Sweet', 'Tart', 'Unknown']) AS food_type   
  FROM TABLE(LIST_FILES('@image_source/path/to/images'));  
-- image                       | food_type  
-- desserts/chocolate_cake.jpg | Sweet  
-- appetizers/bruschetta.jpg   | Savory  
-- fruits/lemon_tart.jpg       | Tart  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
• Use `(prompt VARCHAR, file_reference)` to process files from `LIST_FILES`.  
  
• Optimized for sentiment analysis and document categorization tasks.  
  
• Returns the same data type as the provided categories array (`VARCHAR`, `INT`, `FLOAT`, or `BOOLEAN`).  
  
• Categories can be of type `VARCHAR`, `INT`, `FLOAT`, or `BOOLEAN`.  
  
• If no model is specified, uses the default model set for the organization.  
  
• Model specification format: `'modelProvider.modelName'` (e.g., `'gpt.4o'`).
Was this page helpful?
[Previous AES_ENCRYPT](/reference/sql/sql-functions)[Next AI_COMPLETE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AES_ENCRYPT](/reference/sql/sql-functions)[Next AI_COMPLETE](/reference/sql/sql-functions)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Freference%2Fsql%2Fsql-functions%2Ffunctions%2FAI_CLASSIFY%2F&_biz_t=1777950389388&_biz_i=AI_CLASSIFY%20%7C%20Dremio%20Documentation&_biz_n=150&rnd=143494&cdn_o=a&_biz_z=1777950389388)
