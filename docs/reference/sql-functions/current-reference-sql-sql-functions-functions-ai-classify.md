---
url: /reference/sql/sql-functions/functions/AI_CLASSIFY
slug: /reference/sql/sql-functions/functions/AI_CLASSIFY
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
## Syntax
### AI_CLASSIFY( [_model_name_ VARCHAR,] _prompt_ VARCHAR | (_prompt_ VARCHAR, _file_reference_), _categories_ ARRAY&lt;VARCHAR|INT|FLOAT|BOOLEAN&gt; ) → VARCHAR|INT|FLOAT|BOOLEAN[​](/reference/sql/sql-functions)
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

## Usage Notes[​](/reference/sql/sql-functions)
• Use `(prompt VARCHAR, file_reference)` to process files from `LIST_FILES`.  
  
• Optimized for sentiment analysis and document categorization tasks.  
  
• Returns the same data type as the provided categories array (`VARCHAR`, `INT`, `FLOAT`, or `BOOLEAN`).  
  
• Categories can be of type `VARCHAR`, `INT`, `FLOAT`, or `BOOLEAN`.  
  
• If no model is specified, uses the default model set for the organization.  
  
• Model specification format: `'modelProvider.modelName'` (e.g., `'gpt.4o'`).
Was this page helpful?
[Previous AES_ENCRYPT](/reference/sql/sql-functions)[Next AI_COMPLETE](/reference/sql/sql-functions)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AES_ENCRYPT](/reference/sql/sql-functions)[Next AI_COMPLETE](/reference/sql/sql-functions)
!
