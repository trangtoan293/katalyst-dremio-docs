---
url: /load-data
slug: /load-data
title: "Load Data | Dremio Enterprise Documentation"
depth: 1
crawled_at: 1777970320.1621819
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](https://docs.dremio.com/)


[current [26.x]](https://docs.dremio.com/current/load-data/)
  * [current [26.x]](https://docs.dremio.com/current/load-data/)
  * [25.x](https://docs.dremio.com/25.x/)


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](https://docs.dremio.com/current/)
  * [Get Started with Dremio](https://docs.dremio.com/current/get-started/)
  * [What is Dremio?](https://docs.dremio.com/current/what-is-dremio/)
  * [Deploy Dremio](https://docs.dremio.com/current/deploy-dremio/)
  * [Manage Sources](https://docs.dremio.com/current/data-sources/)
  * [Load Data](https://docs.dremio.com/current/load-data/)
    * [Autoingest Data into Apache Iceberg](https://docs.dremio.com/current/load-data/autoingestion)
    * [Clustering](https://docs.dremio.com/current/load-data/clustering)
  * [Build Data Products](https://docs.dremio.com/current/data-products/)
  * [Connect Client Applications](https://docs.dremio.com/current/client-applications/)
  * [Accelerate Queries](https://docs.dremio.com/current/acceleration/)
  * [Security and Compliance](https://docs.dremio.com/current/security/)
  * [Administration](https://docs.dremio.com/current/admin/)
  * [Developer Guide](https://docs.dremio.com/current/developer/)
  * [Reference](https://docs.dremio.com/current/reference/)
  * [Help and Support](https://docs.dremio.com/current/help-support/)
  * [Release Notes](https://docs.dremio.com/current/release-notes/)


  * [Dremio Enterprise Home](https://docs.dremio.com/current)
  * Load Data

Version: current [26.x]
On this page
# Load Data
Dremio provides the following features to load data into Apache Iceberg tables:
  * [**Autoingest Data into Apache Iceberg**](https://docs.dremio.com/current/load-data/autoingestion/) - Use autoingest pipes to automatically ingest data into Iceberg tables.
  * [**Clustering**](https://docs.dremio.com/current/load-data/clustering/) - Cluster your Iceberg tables for a more intuitive data layout that enables both efficient reads and writes.


## Process Unstructured Data[​](https://docs.dremio.com/current/load-data/#process-unstructured-data "Direct link to Process Unstructured Data")
Dremio allows you to process and combine structured, semi-structured, and unstructured data. Examples of unstructured data include PDFs, images, and videos that are stored in object storage.
Dremio natively offers [AI functions](https://docs.dremio.com/current/reference/sql/sql-functions/AI/) to enable you to extract and process unstructured data:
  * [`AI_GENERATE`](https://docs.dremio.com/current/reference/sql/sql-functions/functions/AI_GENERATE/) – Process unstructured data, primarily for complex data extraction requiring multiple fields from source files.
  * [`AI_CLASSIFY`](https://docs.dremio.com/current/reference/sql/sql-functions/functions/AI_CLASSIFY/) – Categorize documents or analyze sentiment as `VARCHAR` values, using a provided classification list.
  * [`AI_COMPLETE`](https://docs.dremio.com/current/reference/sql/sql-functions/functions/AI_COMPLETE/) – Generate text or create summaries as `VARCHAR` values.


These functions are processed using Dremio's Query Engine and the AI model provider of your choice. For more information on how to configure your model provider, see [Configure Model Providers](https://docs.dremio.com/current/admin/model-providers/).
Was this page helpful?
[Previous Upload Files](https://docs.dremio.com/current/data-sources/file-upload)[Next Autoingest Data into Apache Iceberg](https://docs.dremio.com/current/load-data/autoingestion)
[Dremio Editions](https://docs.dremio.com/editions)
[Dremio Cloud Classic](https://docs.dremio.com/cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://docs.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://docs.dremio.com/data-privacy/)[LLM? Read llms.txt](https://docs.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Upload Files](https://docs.dremio.com/current/data-sources/file-upload)[Next Autoingest Data into Apache Iceberg](https://docs.dremio.com/current/load-data/autoingestion)
  * [Process Unstructured Data](https://docs.dremio.com/current/load-data/#process-unstructured-data)


!!!
![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   
[More information](https://cookiepedia.co.uk/giving-consent-to-cookies)
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
[![Powered by Onetrust](https://cdn.cookielaw.org/logos/static/powered_by_logo.svg)](https://www.onetrust.com/products/cookie-consent/)
