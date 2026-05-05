---
url: /what-is-dremio/key-concepts
title: "Key Concepts | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64081.260741083
---

  * [Dremio Enterprise Home](/)
  * [What is Dremio?](/what-is-dremio)
  * Key Concepts

Version: current [26.x]
On this page
# Key Concepts
This page contains definitions for key Dremio concepts.
## Tables and Views[​](/what-is-dremio/key-concepts#tables-and-views "Direct link to Tables and Views")
A table contains the data from your source, formatted as rows and columns. Tables can be created in your catalog or they can be [formatted from a folder or file](/developer/data-formats/table#formatting-a-file-or-folder-as-a-table) in a source. Tables created from a folder of files display as a folder ![](https://docs.dremio.com/images/tableIcon-folder.png), whereas tables created from a single file are represented by a grid ![](https://docs.dremio.com/images/tableicon-file.png).
You can create view, which are derived from tables or other views. Views are defined by the steps necessary for their creation, including transformations, filters, joins, and other modifications. Views are logical representations of data so they use very little memory and always reflect the current state of the parent tables or views they are derived from. A view is represented by ![](https://docs.dremio.com/images/icons/VirtualDataset.svg).
![](https://docs.dremio.com/assets/images/layer-cake-diagram-6ab3f9e595ebb788c7c5f62fd2da7610.png)
Let's imagine a dataset is represented as a `sales` table. We can open this dataset within Dremio, and save it as a view called `salesRaw`. Later on we can derive another view called `salesNY` from `salesRaw` by excluding all data that doesn't originate from the state of New York. `salesRaw` and `salesNY` can each be queried and will return different results, but they are both based on the same underlying table.
## Reflections[​](/what-is-dremio/key-concepts#reflections "Direct link to Reflections")
A Reflection (either autonomous or manual) in Dremio is a precomputed, optimized copy of source data or query results that accelerates query performance by allowing the system to avoid scanning original data. When processing a query, Dremio automatically identifies any relevant Reflections, evaluates whether they can satisfy the query requirements, and compares Reflection-based approaches against direct table access to select the lowest-cost execution plan. The query optimizer then transparently rewrites queries to use Reflections when beneficial, typically resulting in less expensive execution plans without requiring users to reference Reflections directly.
For more information, see [Reflections](/acceleration#reflections).
## Spaces and Folders[​](/what-is-dremio/key-concepts#spaces-and-folders "Direct link to Spaces and Folders")
A space is a top-level folder that is used to group views by common themes such as a project, purpose, department, or geographic region.
![](https://docs.dremio.com/images/cloud/spaces-business.png)
Spaces can be further organized by creating a hierarchy of folders. Folders can contain other folders, and they are represented by ![](https://docs.dremio.com/images/icons/Folder.svg).
To reference a view that is in a folder or subfolder, use the dot-separated path to the location of view. For example, in the `sales.transactions.north_america.sales_new_york` path, _sales_ is the name of the space, _transactions_ and _north_america_ are folders within the space, and _sales_new_york_ is the view name.
### Home Space[​](/what-is-dremio/key-concepts#home-space "Direct link to Home Space")
Each user has a home space that can be used to upload local files or experimentation. A user's home space and the contents of it are private to the user by default. To view your home space, click ![This is the icon that represents the home space.](https://docs.dremio.com/images/cloud/homespace-icon.png) and your username in the **Data** panel.
Was this page helpful?
[Previous What is Dremio?](/what-is-dremio)[Next Architecture](/what-is-dremio/architecture)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous What is Dremio?](/what-is-dremio)[Next Architecture](/what-is-dremio/architecture)
