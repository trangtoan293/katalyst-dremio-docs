---
url: /data-products/discover/semantic-search
slug: /data-products/discover/semantic-search
title: "Searching for Dremio Objects | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64039.077634458
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * [Discover Data](/data-products/discover)
  * Searching for Dremio Objects

Version: current [26.x]
# Searching for Dremio Objects Enterprise Preview
You can quickly and easily find objects in your Dremio project with the AI-enabled semantic search. Semantic search returns results of the following types:
  * Sources
  * Spaces & Folders
  * Tables in Dremio catalogs, Dremio spaces, and/or in external sources registered in Dremio
  * Views in external sources registered in Dremio catalogs and Dremio spaces
  * User defined functions (UDFs)
  * Reflections
  * Scripts
  * Jobs


Semantic search takes object names and metadata such as wikis and labels into account to return results that are relevant to your search criteria.
Search for objects:
  1. Navigate to your Dremio project.
  2. Click into the search bar on the top right of the page and enter search criteria. You can also use command + K or ctrl + K to activate the search bar. Your recent searches are listed under Recents
  3. Press the return or enter key to execute the search.
  4. Select a search result to view details. For a table or view, you can click the icon to query the table or view in the SQL Runner.


# Limit search to a specific object type
You can search for items by type (such as sources, folders, tables, views, UDFs, Reflections, scripts, or jobs) by clicking the object type button on the Search results page. By default, `All` is selected so if you enter search criteria in the search bar and click enter without selecting an object type button, the system searches for all objects of all types.
You can also use Advanced Search to filter results down to get recently updated objects or objects created by a specific owner.
# Considerations and Limitations
  * This capability is only supported on Kubernetes deployments. OpenSearch 2.19.2 is deployed as part of Dremio to power this capability.
  * Semantic search has been optimized for search terms in English.
  * New objects can take up to a few hours after they are created to appear in search results. Existing object that are dropped may take a few hours to disappear from search results after they are dropped.


Was this page helpful?
[Previous Discover Data](/data-products/discover)[Next View Metadata of a Dataset](/data-products/discover/metadata)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Discover Data](/data-products/discover)[Next View Metadata of a Dataset](/data-products/discover/metadata)
