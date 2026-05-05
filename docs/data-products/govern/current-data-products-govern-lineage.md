---
url: /data-products/govern/lineage
slug: /data-products/govern/lineage
title: "Lineage | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64039.620410958
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * [Govern Data](/data-products/govern)
  * Lineage

Version: current [26.x]
On this page
# Lineage
Lineage provides a graph of a dataset's relationships (its source, parent datasets, and child datasets) to illustrate how datasets are connected, where the data originates, while tracking its movement and transformations.
By default, the lineage graph focuses on the initially selected dataset and its relationships with other datasets, represented as nodes that display the dataset name and path. To view additional metadata, use the **Show/hide layers** options.
![This is a screenshot showing the Lineage tab and metadata layers.](https://docs.dremio.com/images/lineage-graph-newui.png)
If you wish to track lineage for a different dataset node, the lineage graph needs to be refocused. To refocus the lineage graph on a different dataset, click ! on the right of the dataset name, and then select **Focus on this dataset**.
![This is a screenshot showing the option to refocus the lineage graph on a different dataset.](https://docs.dremio.com/images/lineage-focus.png)
## Privileges Required for Lineage​
  * If you have the `SELECT` privilege on the parent datasets and the child datasets, you can see the parent datasets and data sources on the left. The child datasets appear on the right.
  * If you have only the `READ METADATA` privilege on the parent and child datasets, then you can only see limited metadata for these datasets.
  * If you do not have the `SELECT` or the `READ METADATA` privilege on the parent and child datasets, they are not visible.


## Lineage Refresh with Dataset Schema Changes​
For datasets in [Spaces](/what-is-dremio/key-concepts), the lineage graphs are automatically refreshed whenever the dataset schema updates are saved.
For datasets in Iceberg REST catalogs, the lineage graphs are stored in Dremio's metadata cache, which is automatically refreshed at fixed time intervals. For more information, see [Refreshing Metadata](/help-support/advanced-topics/metadata-caching). It is possible that the lineage graph might show an outdated schema for the dataset if the dataset schema has been recently updated and Dremio's metadata cache has not yet been refreshed.
Was this page helpful?
[Previous Row-Access and Column-Masking Policies](/data-products/govern/row-column-policies-udf)[Next Wikis and Tags](/data-products/govern/wikis-tags)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Row-Access and Column-Masking Policies](/data-products/govern/row-column-policies-udf)[Next Wikis and Tags](/data-products/govern/wikis-tags)
