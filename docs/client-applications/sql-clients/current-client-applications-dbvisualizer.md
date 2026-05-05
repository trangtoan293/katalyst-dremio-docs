---
url: /client-applications/dbvisualizer
slug: /client-applications/dbvisualizer
title: "DbVisualizer | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64025.944842625
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * DbVisualizer

Version: current [26.x]
On this page
# DbVisualizer
## Supported Versions​
You can use any version of DbVisualizer, as long as you use Dremio 21 or later.
## Supported Authentication Methods​
You can use your Dremio username and password, or you can use a personal access token (PAT) that you obtained from Dremio.
## Prerequisites​
  * Download the [Arrow Flight SQL JDBC driver](https://www.dremio.com/drivers/jdbc/).
  * If you want to authenticate your connection to Dremio by using a personal access token, see [Creating a PAT](/security/authentication/personal-access-tokens) for the steps to obtain one.


## Connecting to Dremio​
  1. Add the Arrow Flight SQL JDBC driver to DbVisualizer's Driver Manager. You need to do this only once, and can skip this step if DbVisualizer already lists this driver in its Driver Manager dialog:
a. Select **Tools** &gt; **Driver Manager**.
b. Above the **Driver Name** list of the **Driver Manager** dialog, click the plus (+) symbol.
c. In the **Name** field, name the driver.
d. Under **Driver artifacts and jar files** , click the plus icon, browse to the `.jar` file that you downloaded, select it, and click **Open**. DbVisualizer loads the `.jar` file.
e. If you are not using TLS encryption for connections to Dremio, turn off encryption:
    1. Click **Properties** next to **Driver Settings**.
    2. Click the plus icon to add a new property.
    3. Name the parameter `useEncryption` and set the value to `false`.
    4. Click **Apply**.
f. Close the **Driver Manager** dialog.
  2. Create a connection to Dremio:
a. In the menubar, select **Database** &gt; **Create Database Connection**.
b. Double-click **Custom** at the bottom of the **Driver Name** list.
c. Name the connection.
d. In the **Settings Format** field, select **Database URL**.
e. Click in the **Driver Type** field and then double-click the name that you gave to the Arrow Flight SQL JDBC driver.
f. In the **Database URL** field, specify a URL in this format, where `host` is the hostname of your coordinator node: `jdbc:arrow-flight-sql://{host}:32010`
g. In the **Database Userid** and **Database Password** fields, specify your authentication credentials:
     * To use a personal access token that you obtained from Dremio:
       1. In the **Database Userid** field, specify the username for which the PAT was generated.
       2. In the **Database Password** field, paste your personal access token.
     * To use your Dremio username and password:
       1. In the **Database Userid** field, specify your username.
       2. In the **Database Password** field, your password.
h. If you are not using TLS encryptions for connections to Dremio, click the **Properties** tab and ensure that the property `useEncryption` is listed and that the value is `false`. Then, click the **Connection** tab.
f. Click **Finish**.


DbVisualizer creates the connection and opens it.
Was this page helpful?
[Previous DBeaver](/client-applications/dbeaver)[Next Domo](/client-applications/domo)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DBeaver](/client-applications/dbeaver)[Next Domo](/client-applications/domo)
!!
