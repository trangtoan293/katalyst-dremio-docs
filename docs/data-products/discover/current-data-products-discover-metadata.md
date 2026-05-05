---
url: /data-products/discover/metadata
slug: /data-products/discover/metadata
title: "View Metadata of a Dataset | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64033.175918833
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * [Discover Data](/data-products/discover)
  * View Metadata of a Dataset

Version: current [26.x]
# View Metadata of a Dataset
Wherever a dataset is referenced in Dremio, you can view a metadata card with details about the dataset.
To view the metadata, hover over a dataset to see a metadata card appear with details about the dataset. The components of the metadata card are described below.
![This screenshot is displaying the metadata card.](https://docs.dremio.com/images/software-metadata-card.png)  
| Location  | Description  |  
| --- | --- |  
| 1  | Icon represents the dataset format as a table ! or a view !.  |  
| 2  | Card title displays the dataset name.  |  
| 3  |  ! will appear if the dataset has a Reflection.  |  
| 4  | Click ! to query the dataset.  |  
| 5  | Click either ! to edit or ! to view the dataset. The option that you see depends on your dataset privileges.  |  
| 6  | The path where the dataset is located.  |  
| 7  | Displays any labels that have been applied to the dataset.  |  
| 8  |  **Jobs** : The number of jobs run on the dataset in the last 30 days, which links to the Jobs page.  |  
| 9  |  **Descendants** : The number of views that are created from the dataset.  |  
| 10  | The date and time when the dataset was created.  |  
| 11  | The user who owns the dataset.  |  
| 12  | The date and time when the dataset was last updated.  |  
| 13  | Launch a BI tool to analyze your data.  |  
| 14  |  **Details Panel** : Click this link to open the panel on the right side of the browser window. In the [Details Panel](/data-products/govern/wikis-tags), you can add or remove labels on the dataset and add or modify wiki content.  |  
| 15  |  **Lineage** : Click this link to open the data lineage in a new tab. [Lineage](/data-products/govern/lineage) records how data got into the specific location and the intermediate steps and transformations that took place in its transit.  |  
| 16  |  **Columns** : The number of columns in the dataset, including the name and data type of each column. Columns with partitions (if any) use a separate partition icon.  |  
When viewing a metadata card in the SQL Runner's data panel, the **Columns** section at the bottom of the card is not displayed because columns can be displayed by expanding the dataset.
Was this page helpful?
[Previous Searching for Dremio Objects](/data-products/discover/semantic-search)[Next Star Objects](/data-products/discover/bookmarks)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Searching for Dremio Objects](/data-products/discover/semantic-search)[Next Star Objects](/data-products/discover/bookmarks)
!
