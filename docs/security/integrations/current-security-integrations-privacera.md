---
url: /security/integrations/privacera
slug: /security/integrations/privacera
title: "Privacera | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64078.155555125
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Integrations](/security/integrations)
  * Privacera

Version: current [26.x]
On this page
# Integrate with Privacera Enterprise
Dremio and Privacera have partnered to provide an integration that allows organizations to implement fine-grained access controls on their open data lakehouse. The integration provides the following capabilities:
  * **Privacera Policy Sync:** Data governance and access control policies in Privacera are translated into SQL and pushed to Dremio using Dremio’s native RBAC and fine-grained access control, ensuring that data remains secure and compliant with the centrally-defined policies in Privacera. You can learn more about how this works in Privacera's 
  * **Dremio Auditing and Query Tracking:** Audit details related to user-executed queries in Dremio can be accessed through the Jobs page in the Dremio console. Job lists and job details provide insights into user-executed queries. See [Viewing Jobs](/admin/monitoring/jobs) for more information.
  * **Support for all Data Sources:** The Privacera integration supports all Dremio data sources. See [Connect to Your Data](/data-sources) for a full list of sources.


When using the Privacera plugin for Dremio, no additional or external tools should be used for the policy synchronization between Privacera and Dremio.
## Prerequisites​
Ensure that you meet the following prerequisites before you begin the integration:
  * An on-premise or SaaS Privacera Manager host that is running Privacera services
  * A deployment of Dremio Enterprise Edition 24.1 or later -- Community Edition and Dremio Cloud _are not_ supported at this time


## Installation​
Refer to the 
After installing the Privacera plugin, ensure that the **Enable external authorization plugin** option is selected under **Settings &gt; Advanced Options** on all sources that should utilize the integration with Privacera. After updating any source configurations, restart Dremio.
Was this page helpful?
[Previous AWS Lake Formation](/security/integrations/lake-formation)[Next Apache Ranger](/security/integrations/row-column-policies-ranger)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AWS Lake Formation](/security/integrations/lake-formation)[Next Apache Ranger](/security/integrations/row-column-policies-ranger)
