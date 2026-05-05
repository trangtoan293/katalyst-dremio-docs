---
url: /admin/licensing/usage
slug: /admin/licensing/usage
title: "Dremio Usage on Kubernetes | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.607072
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Licensing](/admin/licensing)
  * Usage

Version: current [26.x]
On this page
# Dremio Usage on Kubernetes
Dremio on Kubernetes usage is measured in Dremio Consumption Units (DCUs), which are consumed only when Dremio engines are running. Understanding how DCUs are calculated helps you optimize costs and monitor your Dremio instance effectively.
## How Usage is Calculated[​](/admin/licensing/usage/)
The number of DCUs consumed by each engine depends on two factors:
  * How long the engine and its replicas have been running.
  * The size of the engine.


DCU consumption for an engine is calculated as:
`Total uptime / 60 * DCU consumption per hour`
Where:
  * `Total uptime` - The total time the engine was running, measured in 5-minute increments and rounded down to the nearest multiple of 5.
  * `DCU consumption per hour` - The DCU consumption rate per hour for the engine size. In Dremio Enterprise, 1 DCU corresponds to 1 vCPU-hour.


See the [Engine Sizes](/deploy-dremio/managing-engines-kubernetes) table to understand how DCU consumption changes with engine size.
## Example[​](/admin/licensing/usage/)
A cluster has two Dremio engines:
  * Engine A, which has 15 cores running on a single executor
  * Engine B, which has 120 cores running across 8 executors


Suppose that between 8 a.m. and 9 a.m. one day:
  * Engine A runs for 43 minutes, but the engine's uptime is rounded down to only 40 minutes.
The total usage for Engine A for this hour is `(floor(43)/60)*15 = (40/60)*15 = 10 DCUs`.
  * Engine B runs for 51 minutes
The total usage for Engine B for this hour is `(floor(51)/60)*120 = (50/60)*120 = 100 DCUs`.


In total, this cluster would be billed for 110 DCUs of usage for the period between 8-9 a.m.
Was this page helpful?
[Previous Licensing](/admin/licensing)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Licensing](/admin/licensing)
!
