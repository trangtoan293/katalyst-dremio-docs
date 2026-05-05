---
url: /client-applications/thoughtspot
title: "ThoughtSpot | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64032.981252458
---

  * [Dremio Enterprise Home](/)
  * [Connect Client Applications](/client-applications)
  * ThoughtSpot

Version: current [26.x]
On this page
# ThoughtSpot
You can use 
## Supported Versions[​](/client-applications/thoughtspot#supported-versions "Direct link to Supported Versions")
Dremio supports ThoughtSpot cloud 8.3 and ThoughtSpot software 7.2.1.
## Supported Authentication Methods[​](/client-applications/thoughtspot#supported-authentication-methods "Direct link to Supported Authentication Methods")
You can use your Dremio username and password.
## Creating a Connection[​](/client-applications/thoughtspot#creating-a-connection "Direct link to Creating a Connection")
While you're using the connection, the data fields that you create, modify, and delete in Dremio are reflected as table columns in ThoughtSpot. To account for new or outdated fields, you will need to go back into the data connection to check or uncheck the columns that you want added or removed on the Select Tables page.
  1. Log into ThoughtSpot.
  2. Go to **Data** &gt; **Connections** &gt; **Add Connection**.
  3. On the Choose Your Data Warehouse page, specify your data connection details:
a. In the **Name your connection** field, enter a name.
b. (Optional) In the **Describe your connection** field, enter a brief description.
c. For the **Choose your data warehouse** field, select **Dremio**.
  4. Click **Continue**.
  5. On the Dremio Connection Details page, specify your account credentials:
a. To provide your Dremio username and password for authentication, select **Use Service Account**.
b. In the **Host** field, enter the IP address for one of the coordinator nodes in your cluster.
c. In the **Port** field, enter 31010.
d. In the **User** field, enter your username.
e. In the **Password** field, enter your password.
  6. Click **Continue**.
  7. On the Select Tables page, you can see all the data tables and views from Dremio. To select tables and columns from that list, select a table and check the boxes next to the columns for that table.
  8. Click **Create Connection**.
  9. In the **Create Connection** dialog, click **Confirm**.


Was this page helpful?
[Previous Tableau](/client-applications/tableau)[Next Drivers](/client-applications/drivers)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Tableau](/client-applications/tableau)[Next Drivers](/client-applications/drivers)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fclient-applications%2Fthoughtspot%2F&_biz_t=1777950352662&_biz_i=ThoughtSpot%20%7C%20Dremio%20Documentation&_biz_n=66&rnd=122446&cdn_o=a&_biz_z=1777950352663)
