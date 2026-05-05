---
url: /help-support/well-architected-framework
slug: /help-support/well-architected-framework
title: "Well-Architected Framework | Dremio Enterprise Documentation"
depth: 1
crawled_at: 64003.921158083
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * Well-Architected Framework

Version: current [26.x]
# Dremio's Well-Architected Framework
Dremio’s Well-Architected Framework can help anyone who is designing and/or operating solutions with Dremio. It provides insight from the lessons learned over time helping hundreds of customers be successful. The framework is composed of pillars that provide design principles and concrete best practices that are based on those principles. The best practices are generally applicable across on-premise and public cloud deployments.
The Well-Architected Framework is considered complementary to the Dremio Enterprise (Software) Shared Responsibility Model. Where the Shared Responsibility Model lays out Dremio's responsibilities and those of customers when it comes to maintaining and operating an optimal Dremio environment, the Well-Architected Framework provides customers with some of the details for how to carry out their responsibilities.
Dremio’s Well-Architected Framework follows five common pillars from cloud providers AWS, Microsoft, and Google, and includes a sixth pillar, the self-service semantic layer, that is specific to Dremio:
  1. [Security](/help-support/well-architected-framework/security)
  2. [Performance Efficiency](/help-support/well-architected-framework/performance)
  3. [Cost Optimization](/help-support/well-architected-framework/cost)
  4. [Reliability](/help-support/well-architected-framework/reliability)
  5. [Operational Excellence](/help-support/well-architected-framework/operations)
  6. [Self-Service Semantic Layer](/help-support/well-architected-framework/semantic)


Each pillar is a grouping of principles, best practices, and how-to articles around that specific pillar.
Dremio is deployed in production as a cluster. The [Dremio Architecture](/what-is-dremio/architecture) topic provides an overview of the major components of the cluster.
Grant access to Dremio with the Dremio console, Dremio API, Arrow Flight, or Dremio ODBC/JDBC drivers. For high availability, configure one or more coordinator nodes with the [main coordinator role](/what-is-dremio/architecture), though only one coordinator can actively assume the main coordinator role at any one time. Add one or more [scale-out coordinators](/what-is-dremio/architecture) to help with planning queries that come from JDBC and ODBC clients. You can also configure one or more executor nodes—the number of executor nodes to configure depends on your workload. Executor nodes are organized into logical engines to provide workload isolation. The [distributed storage](/what-is-dremio/architecture) is set up locally and configured on all Dremio nodes.
Was this page helpful?
[Previous Help and Support](/help-support)[Next Security](/help-support/well-architected-framework/security)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Help and Support](/help-support)[Next Security](/help-support/well-architected-framework/security)
