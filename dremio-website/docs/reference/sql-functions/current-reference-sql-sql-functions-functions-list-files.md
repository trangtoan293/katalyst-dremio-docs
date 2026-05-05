---
url: /reference/sql/sql-functions/functions/LIST_FILES
title: "LIST_FILES | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64325.471418833
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [SQL Reference](/reference/sql)
  * [SQL Functions](/reference/sql/sql-functions)
  * functions
  * LIST_FILES

Version: current [26.x]
On this page
**Categories** : [AI](/reference/sql/sql-functions), [Directory](/reference/sql/sql-functions)
# LIST_FILES
Lists files recursively from a source directory, adhering to the `COPY INTO` security model. Returns structured information about each file for use with AI functions and data processing workflows.
## Syntax[​](/reference/sql/sql-functions#syntax "Direct link to Syntax")
### LIST_FILES( _source_path_ VARCHAR ) → TABLE[​](/reference/sql/sql-functions#list_files-source_path-varchar---table "Direct link to list_files-source_path-varchar---table")
  * source_path: Path to the source directory to list files from. Must follow the format `'@source_name/path/to/directory'`. Adheres to `COPY INTO` security model.


**Examples**
LIST_FILES basic usage

```
SELECT source, path, size, last_modified_time   
  FROM TABLE(LIST_FILES('@my_source/documents/reports'));  
-- source      | path           | size  | last_modified_time  
-- my_source   | report_q1.pdf  | 2048  | 1695123456789  
-- my_source   | report_q2.pdf  | 3072  | 1695234567890  
-- my_source   | summary.txt    | 512   | 1695345678901  

```

LIST_FILES with filtering

```
SELECT path, size / 1024 / 1024 AS size_mb   
  FROM TABLE(LIST_FILES('@data_lake/customer_files'))   
    WHERE path LIKE '%.pdf' AND size > 1000000;  
-- path              | size_mb  
-- contracts/big.pdf | 2.5  
-- reports/annual.pdf| 1.8  
-- manuals/guide.pdf | 3.2  

```

LIST_FILES with AI_GENERATE

```
SELECT file['path'] AS recipe_file,   
  AI_GENERATE('gpt.4o', ROW('Extract recipe details', file)   
    WITH SCHEMA ROW(recipe_name VARCHAR, cuisine_type VARCHAR))   
    AS recipe_info FROM TABLE(LIST_FILES('@cookbooks/cookbook_recipes'))   
    WHERE file['path'] LIKE '%.pdf';  
-- recipe_file        | recipe_info  
-- italian_recipes.pdf| {'recipe_name': 'Spaghetti Carbonara', 'cuisine_type': 'Italian'}  
-- asian_cookbook.pdf | {'recipe_name': 'Pad Thai', 'cuisine_type': 'Thai'}  
-- desserts_guide.pdf | {'recipe_name': 'Tiramisu', 'cuisine_type': 'Italian'}  

```

Was this page helpful?
[Previous LISTAGG](/reference/sql/sql-functions)[Next LN](/reference/sql/sql-functions)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous LISTAGG](/reference/sql/sql-functions)[Next LN](/reference/sql/sql-functions)
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
