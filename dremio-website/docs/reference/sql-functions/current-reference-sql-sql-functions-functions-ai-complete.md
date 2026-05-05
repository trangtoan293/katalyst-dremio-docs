---
url: /reference/sql/sql-functions/functions/AI_COMPLETE
title: "AI_COMPLETE | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64068.6266545
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * AI_COMPLETE

Version: current [26.x]
On this page
**Categories** : [AI](/reference/sql/sql-functions)
# AI_COMPLETE
Specialized form of `AI_GENERATE` for creative text generation and summaries, returned as `VARCHAR`.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### AI_COMPLETE( [_model_name_ VARCHAR,] _prompt_ VARCHAR ) → VARCHAR[​](/reference/sql/sql-functions#ai_complete-model_name-varchar-prompt-varchar---varchar "Direct link to ai_complete-model_name-varchar-prompt-varchar---varchar")
  * model_name (optional): Model specification in format `modelProvider.modelName` (e.g., `gpt.4o`). `modelProvider` is the user-defined name for model provider configuration added in the preferences section. `modelName` is one of the models supported and provided by that provider. If not provided, uses the default model for the organization.
  * prompt: Completion instruction for the LLM. Natural language text describing what you want the model to generate.


**Examples**
AI_COMPLETE example

```
SELECT dish_name,   
  AI_COMPLETE( 'Write an appetizing menu description for this dish: ' || dish_name ||   
    '. Main ingredients: ' || main_ingredients ||   
    '. Cooking style: ' || cuisine_type ) AS menu_description   
  FROM restaurant_dishes;  
-- dish_name        | menu_description  
-- Grilled Salmon   | Perfectly grilled Atlantic salmon with a delicate herb crust, served with seasonal vegetables and lemon butter sauce  
-- Beef Tacos       | Authentic street-style tacos featuring tender slow-cooked beef, fresh cilantro, and house-made salsa verde  
-- Chocolate Mousse | Rich and velvety French chocolate mousse topped with fresh berries and a hint of vanilla  

```

## Usage Notes[​](/reference/sql/sql-functions#usage-notes "Direct link to Usage Notes")
• Optimized for creative text generation and summaries that return a single text response.  
  
• Always returns `VARCHAR` data type.  
  
• If no model is specified, uses the default model set for the organization.  
  
• Model specification format: `modelProvider.modelName` (e.g., `gpt.4o`).
Was this page helpful?
[Previous AI_CLASSIFY](/reference/sql/sql-functions)[Next AI_GENERATE](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AI_CLASSIFY](/reference/sql/sql-functions)[Next AI_GENERATE](/reference/sql/sql-functions)
![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   

Allow All
###  Manage Consent Preferences
#### Functional Cookies
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
#### Performance Cookies
Performance Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
#### Targeting Cookies
Targeting Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
#### Strictly Necessary Cookies
Always Active
These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
Back Button
### Cookie List
Search Icon
Filter Icon
Clear
checkbox label label
Apply Cancel
Consent Leg.Interest
checkbox label label
checkbox label label
checkbox label label
Reject All Confirm My Choices
