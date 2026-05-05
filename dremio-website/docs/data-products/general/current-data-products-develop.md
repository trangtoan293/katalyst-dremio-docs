---
url: /data-products/develop
title: "Develop Data Products | Dremio Enterprise Documentation"
depth: 1
crawled_at: 63999.598503375
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * Develop Data Products

Version: current [26.x]
On this page
# Develop Data Products
You can curate and transform your data to create a data product by
  * Writing SQL in the SQL Runner
  * Using the low-code tranformation flows in the SQL Runner to help generate SQL


## Write SQL in the SQL Runner[​](/data-products/develop#write-sql-in-the-sql-runner "Direct link to Write SQL in the SQL Runner")
You can use the SQL Runner to transform your data and create data products in Dremio.
  * For a quick tour of the SQL Runner and the supported capabilities, see [Quick Tour of the SQL Runner](/get-started/quick_tour/#sql-runner).
  * See the [SQL Reference](/reference/sql) for functions and commands that you can use to transform and work with your data.
  * You can also create data products using an IDE of your choice. Use [Arrow Flight JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver) to establish a connection to Dremio from and IDE to do your development.


### Create a View[​](/data-products/develop#create-a-view "Direct link to Create a View")
You can create a view from an existing table or view by transforming the data as required and performing the following steps:
  1. Compose the query in the SQL Runner and click **Run** to validate the query. After running the query, click the arrow next to **Save Script As** in the top right of the SQL editor, and select **Save View as...** from the drop-down menu.
  2. Name the new view and select where the view will be located. If the location is not updated, the view will get saved to your home space. Once the view is saved, you will be navigated to the Dataset page.


### Retrieve a View Definition[​](/data-products/develop#retrieve-a-view-definition "Direct link to Retrieve a View Definition")
If you have the `SELECT` privilege for a view, you can see the underlying definition in the SQL editor but cannot edit the view directly. To see a view definition, on the Datasets page, hover over the line containing the view and click ![](https://docs.dremio.com/images/icons/go-to-table.png) on the right.
If you have the required privileges, you can run `SHOW CREATE VIEW `view_name`` in the SQL editor to see the view definition. See [SHOW CREATE VIEW](/reference/sql/commands/show-create-view).
### Edit a View[​](/data-products/develop#edit-a-view "Direct link to Edit a View")
If you have the privileges required to edit a view, you can see and edit the definition of the view.
To edit a view, perform the following steps:
  1. On the Datasets page, hover over the line containing the view and click ![](https://docs.dremio.com/images/icons/edit.png) on the right. The view definition will open.
  2. Edit the view definition as needed and click **Run** to validate the query.
  3. Click **Save View** in the top right corner of the SQL editor. This will overwrite the current definition of the view with the new definition.


### Delete a View[​](/data-products/develop#delete-a-view "Direct link to Delete a View")
Perform the following steps to delete a view:
  1. On the Datasets page, go to the folder or space where your view is located.
  2. Hover over the line containing the view that you want to delete, click the ellipses (...) icon. From the list of actions, click **Delete**. Confirm that you want to delete the view.


If you are deleting a table or view with children, you get a warning. Removing a table or view with children leaves you with disconnected views that you can no longer query.
## Use Low-Code to Transform Data in the SQL Runner[​](/data-products/develop#use-low-code-to-transform-data-in-the-sql-runner "Direct link to Use Low-Code to Transform Data in the SQL Runner")
To begin a data transformation, via one of the following methods:
  * Highlighting a portion or all of a field's value
  * Using the dropdown menu for the transformation. The dropdown is to the right of the field's name.


### Use Highlighting[​](/data-products/develop#use-highlighting "Direct link to Use Highlighting")
The highlighting method is often the most intuitive method.  
It provides enough context for Dremio to make some best guesses about how to execute the transformation that you have in mind.
For instance, you could highlight a portion of a field that contains customer names to quickly perform an extract that creates a new field with only last names.
**Suggestion Cards**  
For transformations that are initiated by highlighting part or all of a field value, Dremio uses a heuristic to determine a set of "suggestion cards" that represent its best guesses as to your intended result.
You can click on one of these suggestion cards to inspect a preview of the new dataset and confirm that it matches your expectations. If no suggestion card is a perfect match, you can "flip" the card (by clicking the pencil icon in the upper right corner) to tweak the card's parameters before applying the transformation.
The highlight method is great for beginning an extract. However, in cases where other capabilities are required, the dropdown menu may be more useful.
### Use Dropdown Menus[​](/data-products/develop#use-dropdown-menus "Direct link to Use Dropdown Menus")
The dropdown menu provides a more complete list of transformations that are applicable to the data type.
### Fix Inconsistent Data with a Join[​](/data-products/develop#fix-inconsistent-data-with-a-join "Direct link to Fix Inconsistent Data with a Join")
In situations where the entries in a field are inconsistent (for example, different spellings or abbreviations for the same name), the following technique can be used to increase the quality of the dataset:
  1. Identify the field with the problematic data. It may be useful to run this command in the SQL Editor:
Identify a field

```
SELECT DISTINCT myProblemFieldName FROM myDatasource.myTable  

```

  2. Download the results as CSV using the Download button.
  3. Open the file in a text editor or Excel and create lookup values for the distinct values from your table in a second column. For example, standardizing variations in color names to a single canonical name.
  4. Upload this file to your Home space on Dremio
  5. Open this new dataset and hit the Join button located on the left above the field names
  6. Select Custom Join and then the name of the inconsistent dataset you would like to fix, followed by Next
  7. Drag over the name of the left column from your uploaded dataset, and match it with the name of the field you would like to correct in the inconsistent dataset
  8. Apply the Join then drop the old field, renaming the new one to take its place
  9. Save the corrected dataset


### Clean Text[​](/data-products/develop#clean-text "Direct link to Clean Text")
For text data, excess whitespace and changing capitalization schemes are two common data cleanliness issues. Dremio provides two transformations for dealing with these possible inconsistencies: **Trim Whitespace** and **Convert Case**.
### Handle Invalid, Empty and NULL Values[​](/data-products/develop#handle-invalid-empty-and-null-values "Direct link to Handle Invalid, Empty and NULL Values")
Empty or NULL text values are best eliminated by using Exclude. You can initiate this transformation by:
  1. Highlight a value from the field that contains empty or NULL values, and
  2. Select Exclude from the dropdown that appears. This renders a list of the values in this field, and the frequency at which they occur.
  3. Check the boxes next to the empty and/or NULL values you which to exclude from the dataset and click Apply.


### Work with Date Types[​](/data-products/develop#work-with-date-types "Direct link to Work with Date Types")
You can convert a text type field that contains date information into a proper date type field. This allows you to do more sophisticated analyses in external tools such as spotting by trends by month, year, or quarter.
You can begin this conversion by selecting 'Date & Time' from the type menu located to the left of the text field's name. In the subsequent dialog, select whether the output should be a time, date, date and time. It also gives a few default options for the format as well as a 'Custom' field for indicating a custom format. See [Data & Time Data Types](/reference/sql/data-types#date--time-data-types) for more information on the conversions you can do.
Was this page helpful?
[Previous Explore Using AI Agent](/data-products/ai-agent)[Next Deploy with dbt](/data-products/deploy-with-dbt)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Explore Using AI Agent](/data-products/ai-agent)[Next Deploy with dbt](/data-products/deploy-with-dbt)
