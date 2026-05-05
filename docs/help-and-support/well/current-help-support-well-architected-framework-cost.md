---
url: /help-support/well-architected-framework/cost
slug: /help-support/well-architected-framework/cost
title: "Cost Optimization | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.278962166
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * Cost Optimization

Version: current [26.x]
On this page
# Pillar 3 - Cost Optimization
While getting the best performance possible with Dremio is important, it is also important to optimize your costs associated with managing the Dremio platform.
## Principles[​](/help-support/well-architected-framework/cost/)
### Minimize Running Executor Nodes[​](/help-support/well-architected-framework/cost/)
While Dremio can scale to many hundreds of nodes, any given cluster should only have as many nodes as it needs to satisfy the current load and meet Service Level Objectives.
### Eliminate Unnecessary Data Processing[​](/help-support/well-architected-framework/cost/)
Unnecessarily building Reflections and metadata can detract from the overall performance of your system, and it will contribute to the load and, therefore, the cost of operating the system.
## Best Practices[​](/help-support/well-architected-framework/cost/)
### Size Engines to Minimum Nodes Required[​](/help-support/well-architected-framework/cost/)
To avoid unnecessary cost, consider setting up a script, external to Dremio, that can reduce the number of active nodes in your engines down to the bare minimum (certainly one but maybe even zero) during times when you know the cluster will be getting minimal or no use, such as overnight weekdays or weekends. An equivalent script can be used to scale the number of executors in your engines back to operational capacity a short time prior to the cluster being put to normal daily use.
### Remove Unused Reflections[​](/help-support/well-architected-framework/cost/)
Analysis of Dremio’s query history, joined with data present in system tables like `sys.reflections`, `sys.project.reflections`, and `sys.materializations` can provide details about how often each Reflection in Dremio is being leveraged. For Reflections that are not being leveraged, further analysis can determine if any of them are still being refreshed, how many times they have been refreshed in the reporting period, and how many hours of cluster execution time they have been consuming.
Identifying and removing unused Reflections is good practice because it can reduce clutter in the Reflection configuration. More importantly, it can free up hours of cluster execution cycles that can be used for more critical workloads.
### Optimize Metadata Refresh Frequency[​](/help-support/well-architected-framework/cost/)
See **[Optimize Metadata Refresh Frequency](/help-support/well-architected-framework/cost/optimize-refresh)** to understand metadata in Dremio, why it is important, and best practices for setting and adjusting the frequency of metadata refresh for datasets.
Was this page helpful?
[Previous Performance Efficiency](/help-support/well-architected-framework/performance)[Next Optimize Metadata Refresh Frequency](/help-support/well-architected-framework/cost/optimize-refresh)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Performance Efficiency](/help-support/well-architected-framework/performance)[Next Optimize Metadata Refresh Frequency](/help-support/well-architected-framework/cost/optimize-refresh)
