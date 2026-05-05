---
url: /data-products
slug: /data-products
title: "Build Data Products | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64000.010072041
---

  * [Dremio Enterprise Home](/)
  * Build Data Products

Version: current [26.x]
On this page
# Build Data Products
A data product is a self-contained data asset that has been prepared, can be trusted, and has an SLA. It is meant to optimize for reuse, consistency, and sharing of data. Organizations have data products that are domain-specific and data products that are common at the organization level.
In Dremio, there are two levels of data products:
  1. Data products that are created by curating and transforming one or more source tables into a view.
  2. Data products that are created at the business or application layer and are used in reports, dashboards, and other applications.


Here are two examples of data products:
  * Sam is a data analyst in the sales team, and he is asked to create a data product that provides a unified data asset that segments customers into different groups based on behavior, spending, and demographics. He creates a data product with a curated and transformed view of customer data from multiple source tables (e.g., customer demographics, purchase history, and engagement activity). The data in the data product is cleansed, transformed, enriched, certified, and structured for easy consumption by marketing and sales teams.
  * Alice is an analyst in the finance team, and she needs to create an executive financial dashboard at the business or application layer for her company’s E-staff team. She creates a data product that powers a visualization report for financial performance metrics for her company, including revenue, expenses, and profitability over time. The data product integrates multiple data sources from various domains, including transactional and financial data, and presents the information in a format that is easily consumable by executives for decision-making.


## Data Product Lifecyle​
Data products are created and managed through a lifecycle similar to the software development lifecycle. The data product lifecycle encompasses the end-to-end process of developing, deploying, and maintaining data products, ensuring they provide ongoing value to users. The image below depicts the phases of the lifecycle, which teams iterate through.
![This image illustrates the data products lifecycle.](https://docs.dremio.com/images/data-products-lifecycle.png)
### Discover​
To make data products reusable, they must be easily discoverable and explorable. Cross-functional or organization level data products must be accessible across various team to drive consistency. Users need to be able to quickly understand how to interpret the data in a data product and determine if it is relevant to the business problem at hand. For this to happen, data products must be published with adequate metadata such as domain, descriptions and definitions, tags, and usage information. To learn more about data discovery, see [Discover Data](/data-products/discover).
### Develop​
Data products can be developed using SQL in Dremio's SQL Runner. You can just as easily use your IDE of choice for development. To learn more about developing data products, see [Develop Data Products](/data-products/develop).
### Deploy​
To learn more about deploying your semantic layer with dbt, see [Deploy with dbt](/data-products/deploy-with-dbt).
### Govern​
Effective data governance ensures secure, compliant, and transparent management of data by ensuring documentation and traceability, enforcing fine-grained access policies, and tracking dataset lineage to enhance data quality, minimize risks, and optimize value. To learn more about governance, see [Govern Data](/data-products/govern).
### Serve​
Data products can be served in multiple forms. For example, data products are served in the Dremio console for adhoc analysis or they can be incorporated into a dashboard or report. This phase of the lifecycle is focused on delivering insights and data output to users ensuring accessibility and usability. For more information on the client applications that support connectivity to Dremio, see [Connecting Client Applications to Dremio](/client-applications).
### Observe​
To fully empower users to manage their data products, they must be able to monitor them continuously to assess usage and performance over time. Observability enables data product owners to make iterative improvements based on their users' needs.
## Additional Resources​
Find out more about data products by enrolling in the [Data Product Fundamentals course in Dremio University](https://university.dremio.com/course/data-product-fundamentals).
Was this page helpful?
[Previous Clustering](/load-data/clustering)[Next Discover Data](/data-products/discover)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Clustering](/load-data/clustering)[Next Discover Data](/data-products/discover)
