---
url: /client-applications/dbeaver
title: "DBeaver | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64026.057923
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * DBeaver

Version: current [26.x]
On this page
# DBeaver
You can run SQL from 
## Supported Authentication Methods[​](/client-applications/dbeaver#supported-authentication-methods "Direct link to Supported Authentication Methods")
You can use your Dremio username and password, or you can use a personal access token (PAT) that you obtained from Dremio.
## Prerequisites[​](/client-applications/dbeaver#prerequisites "Direct link to Prerequisites")
  * Download the [Arrow Flight SQL JDBC driver](https://www.dremio.com/drivers/jdbc/).
  * If you want to authenticate your connection to Dremio by using a personal access token, see [Creating a PAT](/security/authentication/personal-access-tokens#creating-a-pat) for the steps to obtain one.


## Connecting to Dremio[​](/client-applications/dbeaver#connecting-to-dremio "Direct link to Connecting to Dremio")
  1. In DBeaver, add the JDBC driver as a new driver. You need to do this only once, and can skip this step if DBeaver already lists this driver in its Driver Manager dialog:
a. In the menubar, select **Database** &gt; **Driver Manager**.
b. In the Driver Manager dialog, click **New**.
c. In the Settings section, follow these steps:
    1. In the **Name** field, specify a name for the driver, such as "Arrow Flight SQL JDBC".
    2. In the **Driver Type** field, ensure that **Generic** is the selected driver type.
    3. In the **Class Name** field, specify `org.apache.arrow.driver.jdbc.ArrowFlightJdbcDriver`.
    4. In the **URL Template** field, specify `jdbc:arrow-flight-sql://{host}:{port}`.
    5. In the **Default Port** field, specify `32010`.
d. In the Libraries section, click **Add File** and select the `.jar` file for the Arrow Flight SQL JDBC.
e. Click **OK**.
  2. Create a connection to Dremio that uses the driver:
a. Select **Database** &gt; **New Connection from JDBC URL**.
b. In the Create New Connection from JDBC URL dialog, type `jdbc:arrow-flight-sql://`hostname`:32010`, where ``hostname`` is the hostname of your coordinator node. DBeaver lists the driver in the **Drivers** field.
c. Select the driver and click **Next**.
d. In the Connect to a Database dialog, provide your authentication credentials by following either of these sets of steps:
     * To use a personal access token that you obtained from Dremio:
       1. In the **Username** field, specify the username for which the PAT was generated.
       2. In the **Password** field, paste your personal access token.
     * To use your Dremio username and password:
       1. In the **Username** field, specify your username.
       2. In the **Password** field, your password.
e. If connections to Dremio Enterprise will not be encrypted, add the `useEncryption` property as a driver property, and set the value to `false`. The default for this property is `true`.
f. (Optional) Click **Test Connection**. If the connection works, the **Connection Test** dialog opens and indicates that DBeaver is able to connect to Dremio. The connection is not held open. Click **OK**.
g. Click **Finish**.


Was this page helpful?
[Previous DataGrip](/client-applications/datagrip)[Next DbVisualizer](/client-applications/dbvisualizer)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous DataGrip](/client-applications/datagrip)[Next DbVisualizer](/client-applications/dbvisualizer)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fworkloads%2Fworkload-management%2F&_biz_t=1777950345634&_biz_i=Workload%20Management%20%7C%20Dremio%20Documentation&_biz_n=49&rnd=116515&cdn_o=a&_biz_z=1777950345687)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fdbeaver%2F&_biz_t=1777950345687&_biz_i=DBeaver%20%7C%20Dremio%20Documentation&_biz_n=50&rnd=472794&cdn_o=a&_biz_z=1777950345687)
