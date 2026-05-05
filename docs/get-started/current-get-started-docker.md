---
url: /get-started/docker
slug: /get-started/docker
title: "Get Started with the Community Edition on Docker | Dremio Documentation"
depth: 2
crawled_at: 64055.557261166
---

  * [Dremio Enterprise Home](/)
  * [Get Started with Dremio](/get-started)
  * Community Edition on Docker

Version: current [26.x]
On this page
# Get Started with the Community Edition on Docker
This Docker-based Get Started guide offers a simple and fast way to spin up Dremio locally with the Community Edition and explore the capabilities available in this edition.
This Docker deployment is indicated for testing and evaluation purposes and is not recommended for production usage. To try out a complete version of Dremio with enterprise-grade features, go to [Get Started with the Enterprise Edition Free Trial](/get-started/kubernetes-trial).
## Prerequisites​
Before you start, download and install 
## Step 1: Deploy Dremio​
Let's deploy the Dremio Community Edition on Docker:
  1. Open your Docker Desktop.
  2. Click **&gt; _Terminal** on the bottom-right of the screen, and run the following command:
Run Docker command

```
docker run \  
    -p 9047:9047 -p 31010:31010 -p 45678:45678 -p 32010:32010 \  
    -e DREMIO_JAVA_SERVER_EXTRA_OPTS=-Dpaths.dist=file:///opt/dremio/data/dist \  
    dremio/dremio-oss  

```



After a couple of minutes, the containers should be up and running, and Dremio is deployed.
Now, access the Dremio console, where you interact with the platform in a user-friendly and visual way. It is a key component of the Dremio experience and is accessible through a web browser:
  1. In your browser, navigate to 
  2. You will be asked to enter your details and click **Next**.


You should have the Dremio console ready in your browser.
![Dremio console landing page.](https://docs.dremio.com/images/get-started/docker-dremio-console-land.png)
To learn how to navigate the Dremio console, see Quick Tour of the Dremio Console.
## Step 2: Add the Sample Data​
Let's add the sample datasets that will be used in this Get Started guide, namely:
  * **NYC taxi trip data** – In Iceberg format, with more than 338 million records.
  * **NYC weather data** – In CSV format, with more than 4 thousand records.


### Add the Datasets​
Add the datasets from a sample data source, as follows:
  1. In the Dremio console, click ![This is the icon that represents the Datasets page.](https://docs.dremio.com/images/icons/datasets-page.png) in the side navigation bar to go to the Datasets page.
  2. Click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png) right next to **Sources**.
  3. In the Add Source dialog, select `Sample Source` in the **Object Storage** section.


### Format the Datasets​
Now that the data source has been added, let's format the needed datasets as tables so that we can query them:
  1. Under **Object Storage** , click the newly added `Samples` source, and then `samples.dremio.com` to see its details.
  2. Hover over the `NYC-taxi-trips-iceberg` folder, and click ![This is the icon that represents the format folder action.](https://docs.dremio.com/images/cloud/format-data.png) on the far right.
  3. In the Folder Settings dialog, check the **Format** , verify that `Iceberg` is detected, and click **Save**.
  4. Click ![This is the icon that represents the Datasets page.](https://docs.dremio.com/images/icons/datasets-page.png) in the side navigation bar, click the `Samples` source, and then `samples.dremio.com` to see its details.
  5. Hover over the `NYC-weather.csv` file, and click ![This is the icon that represents the format file action.](https://docs.dremio.com/images/icons/format-file.png) on the far right.
  6. In the Table Settings dialog, do the following:
    1. For **Line Delimiter** , select `LF - Unix/Linux`.
    2. Under **Options** , check **Extract Column Names**.
    3. Click **Save**.


The sample data is now added, formatted, and ready to be queried.  
You can validate it by clicking ![This is the icon that represents the Datasets page.](https://docs.dremio.com/images/icons/datasets-page.png) in the side navigation bar, then the `Samples` source, and then `samples.dremio.com` to see its details:
  * The icon for `NYC-taxi-trips-iceberg` is ![This is the icon that represents a formatted folder on the Datasets page.](https://docs.dremio.com/images/tableIcon-folder.png), which means the folder is formatted as a table.
  * The icon for `NYC-weather.csv` is ![This is the icon that represents the a formatted file on the Datasets page.](https://docs.dremio.com/images/tableicon-file.png), which means the file is formatted as a table.


## Step 3: Create a Data Product​
In this step, you will start creating a data product to explore the relationship between weather conditions and tipping behavior in taxi rides to answer the business question: "Do people tip more during taxi rides when it's raining?".
### Run the Query for the Data Product​
To answer the business question, you will need the average tip amount per precipitation level. For that, combine the data in the `NYC-taxi-trips-iceberg` and `NYC-weather.csv` datasets on a common field: the date.
To do this, run the SQL query that joins the two datasets, and calculates the average tip amount per precipitation level:
  1. Click ![This is the icon that represents the SQL runner.](https://docs.dremio.com/images/cloud/sql-runner-icon.png) in the side navigation bar to go to the SQL Runner.
  2. Copy the SQL below, paste it in the SQL Runner, and click **Run**.
SQL to join datasets

```
SELECT AVG(tip_amount) as avg_tip_amount, prcp  
FROM   Samples."samples.dremio.com"."NYC-weather.csv"  
JOIN   Samples."samples.dremio.com"."NYC-taxi-trips-iceberg"  
ON     (TO_CHAR(CAST(pickup_datetime AS DATE), 'YYYY-MM-DD')) = SUBSTRING(CAST("date" AS CHAR) FROM 0 FOR 10)  
GROUP BY prcp;  

```



You will get the query results, as shown in the image below.
![The result of the query to join the datasets with the average tip amount per precipitation level.](https://docs.dremio.com/images/get-started/docker-run-query.png)
### Create the View for the Data Product​
In Dremio, views are virtual tables based on the result set of a query. You can create views from data that resides in any data source, folder, table, or view that you have access to. You can also share views you've created with stakeholders in your organization.
Let's create a view for the data product from the query that you ran above:
  1. Click **Save as View** on the far right to create a view of your query that others can access.
  2. On the Save View As dialog, enter a name for your view. For example, `avg_tips_precipitation`.
  3. Click **Save**.


Your view is created and ready to be used.
## Step 4: Accelerate the Query with Reflections​
In this step, you will use [Reflections](/acceleration) to accelerate queries, particularly when working with large datasets.
### Enable the Reflection​
Let's enable a [Raw Reflection](/acceleration) to accelerate the query of your view:
  1. Select the **Reflections** tab at the top of the page, toggle the **Raw Reflections** switch to on, and click **Save**.
  2. On the far right, you will see an animated spinner icon close to **Footprint**. Wait until it turns into a green checkmark, which means that your query has been accelerated.


### Run the Accelerated Query​
Let's now query the view and see the acceleration in action:
  1. Click ![This is the icon that represents the Datasets page.](https://docs.dremio.com/images/icons/datasets-page.png), click `avg_tips_precipitation`, and click **Run** to execute the query.
  2. Check the execution time. It's **a sub-second query**!
![The query with a highlight in the execution time after the acceleration.](https://docs.dremio.com/images/get-started/docker-reflections-after.png)
  3. Now, go to the Jobs tab, and confirm that the query was accelerated with a Reflection.
![The details of a query showing it was accelerated with a Reflection.](https://docs.dremio.com/images/get-started/docker-reflections-details.png)


You’ve just created a Raw Reflection and accelerated your query!
While creating a Reflection manually is a great way to understand how Dremio boosts performance, you don’t need to manage this complexity yourself in real-world environments if you use [Autonomous Reflections](/acceleration/autonomous-reflections) — available exclusively in the Enterprise Edition. Dremio will automatically create, select, and maintain the most efficient Reflections for you, saving time while ensuring consistently fast performance of your queries.
And that's it! You finished the Get Started guide for the Community Edition on Docker.
For a more complete and full-featured experience with Dremio, [sign up for the Enterprise Edition free trial](https://www.dremio.com/get-started/?utm_source=dremio-docs&utm_medium=referral) on the Dremio website, and follow the steps in [Get Started with the Enterprise Edition Free Trial](/get-started/kubernetes-trial).
Was this page helpful?
[Previous Enterprise Edition Free Trial](/get-started/kubernetes-trial)Next Quick Tour of the Console
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Enterprise Edition Free Trial](/get-started/kubernetes-trial)Next Quick Tour of the Console
