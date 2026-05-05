---
url: /get-started/kubernetes-trial
title: "Get Started with the Enterprise Edition Free Trial | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64056.667828291
---

  * [Dremio Enterprise Home](/)
  * [Get Started with Dremio](/get-started)
  * Enterprise Edition Free Trial

Version: current [26.x]
On this page
# Get Started with the Enterprise Edition Free Trial
This Get Started guide walks you through deploying Dremio on Kubernetes using a free trial of the Enterprise Edition, exploring the multiple features available in this edition.
## Prerequisites[​](/get-started/kubernetes-trial#prerequisites "Direct link to Prerequisites")
Before deploying Dremio on Kubernetes, ensure you have the following:
  * A hosted Kubernetes environment to deploy and manage the Dremio cluster.  
Each Dremio release is tested against 
  * Helm 3 installed on your local machine to run Helm commands. For installation instructions, refer to 
  * A local kubectl configured to access your Kubernetes cluster. For installation instructions, refer to 
  * Object Storage: Amazon S3 (including S3-compatible, e.g., MinIO), Azure Storage, or Google Cloud Storage (GCS).


## Step 1: Deploy Dremio[​](/get-started/kubernetes-trial#step-1-deploy-dremio "Direct link to Step 1: Deploy Dremio")
Let's start by deploying the Enterprise Edition on your hosted Kubernetes environment:
  1. If you haven't already, [sign up for the Enterprise Edition Free Trial](https://www.dremio.com/contact/).
  2. In the email you receive from Dremio, click a link to download the `values-overrides.yaml` file containing the deployment information and save the file locally.
  3. Open the `values-overrides.yaml` file in an editor to make the following configurations:
    1. For distributed storage, follow the instructions in [Configuring the Distributed Storage](/deploy-dremio/configuring-kubernetes#configuring-the-distributed-storage), and then return here.
    2. For object storage, follow the instructions in [Configuring Storage for the Open Catalog](/deploy-dremio/configuring-kubernetes#configuring-storage-for-the-open-catalog), and then return here.
    3. (Optional) For the coordinator, you can adjust its default values by following the instructions in [Recommended Resources Configuration](/deploy-dremio/configuring-kubernetes#recommended-resources-configuration), and then return here.
    4. Save the `values-overrides.yaml` file.
  4. Open a terminal window, and start the deployment by installing Dremio's Helm chart with the following command:
Run helm install

```
helm install <your-dremio-install-release> \  
  oci://quay.io/dremio/dremio-helm \  
  -f <your-local-path>/values-overrides.yaml  

```

Where:
     * `<your-dremio-install-release>` - The name that identifies your Dremio installation. For example, `dremio-1-0`.
     * `<your-local-path>` - The path to reach the `values-overrides.yaml` file.
  5. Monitor the deployment using the following command:
Run kubectl to monitor pods

```
kubectl get pods  

```



The deployment is complete when all pods are in the `Ready` state.
Now, access the Dremio console to interact with the platform in a user-friendly and visual way. It is a key component of the Dremio experience and is accessible through a web browser:
  1. Run the following command in Kubernetes to find the host for the Dremio console:
Run kubectl to find the Dremio console

```
kubectl get services dremio-client  

```

  2. Depending on the value in the `TYPE` column of the output, open the Dremio console in your browser with one of the following URLs:
     * https://EXTERNAL_IP:9047 - If the value in the `TYPE` column is `LoadBalancer`, use the value from the `EXTERNAL_IP` column of the output in the URL. For example, `https://8.8.8.8:9047`.
     * `TYPE` column is `NodePort`.
  3. Follow the instructions, and enter your details.


You should have the Dremio console ready in your browser.
![Dremio console landing page.](https://docs.dremio.com/images/get-started/free-trial-dremio-console-land.png)
To learn how to navigate the Dremio console, see [Quick Tour of the Dremio Console](/get-started/quick_tour).
## Step 2: Create an Engine[​](/get-started/kubernetes-trial#step-2-create-an-engine "Direct link to Step 2: Create an Engine")
Engines are responsible for query execution. Each engine comprises one or more executors that perform queries and Data Manipulation Language (DML) operations by running the query execution plan and transiting data between themselves to serve queries.
To create an engine, do the following:
  1. Click ![This is the icon that represents the Organization settings.](https://docs.dremio.com/images/icons/settings.png) in the side navigation bar to go to the Settings page.
  2. Select **Engines** from the settings sidebar, and then click **Add Engine** on the far right.
  3. In the New Engine dialog, enter a name for your engine. For example, `my-engine`.
  4. Click **Add**.


You will see a new line with your engine with the **Status** as `Starting`.  
Wait until the **Status** changes to `Running` for the engine to be available to serve your queries.
The engine you created is configured to automatically stop/start. This means that Dremio automatically stops the engine after 15 minutes of idle time to save resources. When a new query is issued, Dremio automatically starts the engine, but your query may take a bit longer to execute while the engine starts.
If you want to have the engine always running, edit the engine and uncheck the **Automatically start/stop** option.
## Step 3: Add the Sample Data[​](/get-started/kubernetes-trial#step-3-add-the-sample-data "Direct link to Step 3: Add the Sample Data")
Let's add the sample datasets that will be used in this Get Started guide, namely:
  * **NYC taxi trip data** – In Iceberg format, with more than 338 million records.
  * **NYC weather data** – In CSV format, with more than 4 thousand records.


### Add the Datasets[​](/get-started/kubernetes-trial#add-the-datasets "Direct link to Add the Datasets")
Add the datasets from a sample data source, as follows:
  1. In the Dremio console, click ![This is the icon that represents the Datasets page.](https://docs.dremio.com/images/icons/datasets-page.png) in the side navigation bar to go to the Datasets page.
  2. Click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png) right next to **Sources**.
  3. In the Add Source dialog, select `Sample Source` in the **Object Storage** section.


### Format the Datasets[​](/get-started/kubernetes-trial#format-the-datasets "Direct link to Format the Datasets")
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


## Step 4: Create a Data Product[​](/get-started/kubernetes-trial#step-4-create-a-data-product "Direct link to Step 4: Create a Data Product")
In this step, you will start creating a data product to explore the relationship between weather conditions and tipping behavior in taxi rides to answer the business question: "Do people tip more during taxi rides when it's raining?".
### Run the Query for the Data Product[​](/get-started/kubernetes-trial#run-the-query-for-the-data-product "Direct link to Run the Query for the Data Product")
To answer the business question, you will need the average tip amount per precipitation level. For that, combine the data in the `NYC-taxi-trips-iceberg` and `NYC-weather.csv` datasets on a common field: the date.
To do this, run the SQL query that joins the two datasets, and calculates the average tip amount per precipitation level:
  1. Click ![This is the icon that represents the SQL runner.](https://docs.dremio.com/images/cloud/sql-runner-icon.png) in the side navigation bar to go to the [SQL Runner](/get-started/quick_tour/#sql-runner).
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
![The result of the query to join the datasets with the average tip amount per precipitation level.](https://docs.dremio.com/images/get-started/free-trial-run-query.png)
### Create the View for the Data Product[​](/get-started/kubernetes-trial#create-the-view-for-the-data-product "Direct link to Create the View for the Data Product")
In Dremio, views are virtual tables based on the result set of a query. You can create views from data that resides in any data source, folder, table, or view that you have access to. You can also share views you've created with stakeholders in your organization.
Let's create a view for the data product from the query that you ran above:
  1. Click **Save as View** on the far right to create a view of your query that others can access.
  2. In the Save View As dialog, enter a name for your view. For example, `avg_tips_precipitation`.
  3. Click **Save**.


You can see the [lineage](/data-products/govern/lineage) of your datasets in a graph showing all the relationships with end-to-end visibility into how data is sourced and transformed, which helps you understand the data flow and dependencies between datasets.  
For your newly created view, see the lineage by selecting the **Lineage** tab at the top of the page:
![The lineage graph for the view showing how datasets are connected.](https://docs.dremio.com/images/get-started/free-trial-lineage.png)
## Step 5: Accelerate the Query with Reflections[​](/get-started/kubernetes-trial#step-5-accelerate-the-query-with-reflections "Direct link to Step 5: Accelerate the Query with Reflections")
In this step, you will use [Reflections](/acceleration) to accelerate queries, particularly when working with large datasets.
### Enable the Reflection[​](/get-started/kubernetes-trial#enable-the-reflection "Direct link to Enable the Reflection")
Let's enable a [Raw Reflection](/acceleration#types) to accelerate the query of your view:
  1. Select the **Reflections** tab at the top of the page, toggle the **Raw Reflections** switch to on, and click **Save**.
  2. On the far right, you will see an animated spinner icon close to **Footprint**. Wait until it turns into a green checkmark, which means that your query has been accelerated.


### Run the Accelerated Query[​](/get-started/kubernetes-trial#run-the-accelerated-query "Direct link to Run the Accelerated Query")
Let's now query the view and see the acceleration in action:
  1. Click ![This is the icon that represents the Datasets page.](https://docs.dremio.com/images/icons/datasets-page.png), click `avg_tips_precipitation`, and click **Run** to execute the query.
  2. Check the execution time. It's **a sub-second query**!
![The query with a highlight in the execution time after the acceleration.](https://docs.dremio.com/images/get-started/free-trial-reflections-after.png)
  3. Now, go to the Jobs tab, and confirm that the query was accelerated with a Reflection.
![The details of a query showing it was accelerated with a Reflection.](https://docs.dremio.com/images/get-started/free-trial-reflections-details.png)


You’ve just created a Raw Reflection and accelerated your query!
While creating a Reflection manually is a great way to understand how Dremio boosts performance, you don’t need to manage this complexity yourself in real-world environments if you use [Autonomous Reflections](/acceleration/autonomous-reflections) — available exclusively in the Enterprise Edition. Dremio will automatically create, select, and maintain the most efficient Reflections for you, saving time while ensuring consistently fast performance of your queries.
And that's it! You finished the Get Started guide for the Enterprise Edition free trial.
Explore the documentation to learn more about Dremio, start using your data, build your data products, connect your client applications, and much more.
Was this page helpful?
[Previous Get Started with Dremio](/get-started)[Next Community Edition on Docker](/get-started/docker)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Get Started with Dremio](/get-started)[Next Community Edition on Docker](/get-started/docker)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fget-started%2Fkubernetes-trial%2F&_biz_t=1777950378101&_biz_i=Get%20Started%20with%20the%20Enterprise%20Edition%20Free%20Trial%20%7C%20Dremio%20Documentation&_biz_n=126&rnd=16844&cdn_o=a&_biz_z=1777950378101)
