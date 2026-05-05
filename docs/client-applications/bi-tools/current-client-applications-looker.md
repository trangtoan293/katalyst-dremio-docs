---
url: /client-applications/looker
slug: /client-applications/looker
title: "Looker | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64032.744444916
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * Looker

Version: current [26.x]
On this page
# Looker
You can use 
## Supported Authentication Methods​
There are two methods of authenticating that you can choose from when you connect from Looker to Dremio:
  * Use a username and password for your Dremio cluster.
  * Use a personal access token (PAT) obtained from Dremio. To create a PAT, follow the steps in [Creating a PAT](/security/authentication/personal-access-tokens).


## Creating a Connection​
  1. Log into Looker.
  2. In the menu bar at the top of the page, select **Admin** , and then select **Connections** under **Database**.
  3. Click the **Add Connection** button in the top-right corner of the page to open the Connection Settings page for creating a connection.
  4. Specify a name for the connection.
  5. In the **Dialect** field, select **Dremio 11+**.
  6. In the **Remote Host :Port** fields, specify the hostname or IP address of your Dremio cluster, as well as the port to connect to. By default, the port number is 31010.
  7. In the **Database** field, specify any value. Though Looker requires a value in this field, Dremio does not use the value.
  8. In the **Username** and **Password** fields, specify your authentication credentials:
     * If you want to authenticate by using a Dremio username and a password, specify them in the **Username** and **Password** fields.
     * If you want to authenticate by using a personal access token, specify these values:
       * In the **Username** field, specify your Dremio username.
       * In the **Password** field, paste the personal access token.
  9. If your Dremio cluster is configured to use TLS, ensure that the **SSL** check box is selected.
  10. Click **Test These Settings** at the bottom of the page to check that the information that you specified is all valid.
  11. Click **Add Connection** if the test of the connection is successful.


The new connection is listed on the Connections page.
Was this page helpful?
[Previous IBM Cognos Analytics](/client-applications/cognos)[Next Microsoft Excel](/client-applications/microsoft-excel)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous IBM Cognos Analytics](/client-applications/cognos)[Next Microsoft Excel](/client-applications/microsoft-excel)
!
