---
url: /help-support/advanced-topics/runtime-filtering
title: "Runtime Filtering | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64060.676203375
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Runtime Filtering

Version: current [26.x]
# Runtime Filtering
Runtime filtering applies only to Parquet and Iceberg datasets.
Runtime filtering improves query performance by reducing the number of records that need to be processed during a join. This is achieved by creating a filter from the join keys and applying it dynamically to the scanned (probed) side of the join. Runtime filters can be applied to both partition and non-partition columns. They are most effective when the set of join key values have a low cardinality compared to the number of records in the probed table.
# Runtime Filtering Example
Suppose you have a large fact table named `sales` that records all the sales from an E-commerce site and is partitioned on the `order_date` column. You also have a smaller unpartitioned dimension table named `customers` that includes a `signup_date` column. The `sales` table has hundreds of millions of records, whereas `customers` has tens of millions.
The following example demonstrates how to join the `sales` and `customers` tables on the partitioned and non-partitioned columns.
Fact and dimension tables joined on partitioned and non-partitioned columns

```
SELECT  
   s.*  
FROM  
   sales s  
JOIN  
   customers c  
   ON (s.customer_id = c.customer_id AND s.order_data = c.signup_date)  
WHERE c.signup_date ≥ DATE ‘2023-12-01’  

```

This query will have effective runtime filtering because it only considers customers who have signed up since December 2023, so the set of join key values in the filter will be relatively small. Also, the query only concerns orders made on the same day a customer signed up, so entire `order_date` partitions in `sales` will be filtered out.
Was this page helpful?
[Previous Refreshing Metadata](/help-support/advanced-topics/metadata-caching)[Next S3 on Amazon EMR Configuration](/help-support/advanced-topics/hive-s3)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Refreshing Metadata](/help-support/advanced-topics/metadata-caching)[Next S3 on Amazon EMR Configuration](/help-support/advanced-topics/hive-s3)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fadvanced-topics%2Fruntime-filtering%2F&_biz_t=1777950380498&_biz_i=Runtime%20Filtering%20%7C%20Dremio%20Documentation&_biz_n=130&rnd=515695&cdn_o=a&_biz_z=1777950380499)
