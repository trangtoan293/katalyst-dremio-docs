---
url: /data-sources/lakehouse-catalogs
slug: /data-sources/lakehouse-catalogs
title: "Lakehouse Catalogs | Dremio Enterprise Documentation"
description: "Connect Dremio to popular lakehouse catalogs including Apache Iceberg, Hive, Nessie, AWS Glue, Unity Catalog, and more."
depth: 2
crawled_at: 64203.04833675
---

  * [Dremio Enterprise Home](/)
  * [Data Sources](/data-sources)
  * Lakehouse Catalogs

Version: current [26.x]

# Lakehouse Catalogs

Connect Dremio to your lakehouse catalogs for high-performance analytics directly on your data lake. Dremio supports a wide range of open table formats and catalog systems.

## Supported Catalogs

<div className="row">
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Open Catalog</h3>
      </div>
      <div className="card__body">
        <p>Dremio's native open catalog for Apache Iceberg tables with built-in governance and versioning.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/open-catalog-external">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>AWS Glue Data Catalog</h3>
      </div>
      <div className="card__body">
        <p>Integrate with AWS Glue for seamless access to tables stored in Amazon S3 and other AWS services.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/aws-glue-catalog">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Apache Hive Metastore</h3>
      </div>
      <div className="card__body">
        <p>Connect to existing Hive metastores to query tables in Hadoop-compatible file systems.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/hive">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Project Nessie</h3>
      </div>
      <div className="card__body">
        <p>Git-like data catalog with branching and versioning for Apache Iceberg tables.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/nessie">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Unity Catalog</h3>
      </div>
      <div className="card__body">
        <p>Databricks Unity Catalog integration for unified data governance across platforms.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/unity">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Iceberg REST Catalog</h3>
      </div>
      <div className="card__body">
        <p>Generic REST catalog implementation for Apache Iceberg tables.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/iceberg-rest-catalog">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Microsoft OneLake</h3>
      </div>
      <div className="card__body">
        <p>Connect to Microsoft Fabric OneLake for analytics on Fabric data.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/onelake">Learn More</a>
      </div>
    </div>
  </div>
  
  <div className="col col--6 margin-bottom--lg">
    <div className="card">
      <div className="card__header">
        <h3>Snowflake Open Catalog</h3>
      </div>
      <div className="card__body">
        <p>Query Snowflake-managed Iceberg tables through Dremio.</p>
      </div>
      <div className="card__footer">
        <a className="button button--secondary button--block" href="/data-sources/lakehouse-catalogs/snowflake-open">Learn More</a>
      </div>
    </div>
  </div>
</div>

## Key Features

- **Apache Iceberg Native**: Built-in support for Iceberg tables with time travel, partitioning, and hidden partitioning
- **Schema Evolution**: Handle evolving schemas without breaking existing queries
- **Performance**: Leverage Dremio's reflections and C3 (Cloud Columnar Cache) for accelerated queries
- **Governance**: Integrate with external catalog security and access controls
- **Multi-Engine**: Share tables across different query engines using open table formats

## Getting Started

1. Choose your catalog from the options above
2. Follow the connection guide to configure your data source
3. Start querying your lakehouse data with SQL

## Related Topics

- [Data Sources Overview](/data-sources)
- Object Storage
- [Databases](/data-sources/databases)
- [Open Catalog Setup](/data-sources/open-catalog)


Was this page helpful?
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
