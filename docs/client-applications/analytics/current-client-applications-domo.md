---
url: /client-applications/domo
slug: /client-applications/domo
title: "Domo | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.267858625
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Domo

Version: current [26.x]
On this page
# Domo
## Supported Authentication Methods​
  * Use the username and password of an account in your Dremio cluster.
  * Use a username and a personal access token (PAT). To create one, see [Creating a PAT](/security/authentication/personal-access-tokens).


## Creating a Cloud Integration with Dremio Enterprise​
  1. Click the **Data** tab to open the Datasets page.
  2. Click the **Federated** tab to open the **Amplify existing cloud warehouses** dialog.
  3. Next to **Native integration** , click **Dremio**.
  4. In the **Cloud integrations** dialog, click **Add new integration**.
  5. In step 1 of the **Connect a Dremio cloud integration** wizard, follow these sub-steps:
    1. In the **Integration name** field, specify a unique name for the integration.
    2. (Optional) In the **Integration description** field, briefly describe the integration.
    3. Select **Dremio Software** as the connection type.
  6. Click **Next**.
  7. In step 2 of the wizard, follow these sub-steps:
    1. In the **Dremio connection URL** field, specify the following connection URL:
Connection URL

```
jdbc:arrow-flight-sql://<hostname>:32010  

```

To disable encryption, append `?useEncryption=false`. Encryption is enabled by default. See the configuration of client TLS for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters for more information.
    2. In the **Username** field, specify the username of the Dremio account that you want to use for authenticating to Dremio.
    3. In the **Password** field, specify either the password for the Dremio account or a PAT.
  8. Click **Next**.
  9. Select the tables that you want to use with Domo through this integration.
  10. Click **Create Datasets**.


Datasets are created from the tables, though no data is moved or copied. Datasets in Domo are connections to data in data sources.
Was this page helpful?
[Previous DbVisualizer](/client-applications/dbvisualizer)[Next IBM Cognos Analytics](/client-applications/cognos)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DbVisualizer](/client-applications/dbvisualizer)[Next IBM Cognos Analytics](/client-applications/cognos)
!
