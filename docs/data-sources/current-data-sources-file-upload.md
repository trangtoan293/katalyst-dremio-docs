---
url: /data-sources/file-upload
slug: /data-sources/file-upload
title: "Upload Files | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64046.442575875
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * Upload Files

Version: current [26.x]
On this page
# Upload Files
You can upload files to your home space for experimentation. Excel, JSON, Parquet, and CSV files are supported for upload. Once it is uploaded, you can query the file just like a table by specifying the path, "@[home-space-name].[file-name]".
## Upload File to Your Home Space​
  1. In the Dremio console, navigate to your home space by clicking on the home icon and your username.
  2. Click ![This is the Add icon to upload a file or add a folder.](https://docs.dremio.com/images/icons/add.png) in the upper right side and select **Upload File**.
  3. Select the file and click **Next**. If the file is large, it may take a few moments to upload, depending on your connection speed.
  4. (Optional) During the upload process, configure the file settings. For example, configure how the file is delimited.
  5. Click **Save**.


Once the file has been uploaded, it is displayed in your home space as a table. You can query it by running `SELECT * FROM "@username"."table_name"`.
## Limits​
  * Uploaded files are copies of your local file. Updates to your local file are not automatically reflected in Dremio.
  * Bulk upload of multiple files is not supported.
  * Files uploaded to your home space cannot be shared with other users. To share it with others, upload the file into a shared source or use [COPY INTO](/reference/sql/commands/apache-iceberg-tables/copy-into-table) to create an Iceberg table in your Open Catalog.


Was this page helpful?
[Previous Vertica](/data-sources/databases/vertica)[Next Load Data](/load-data)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Vertica](/data-sources/databases/vertica)[Next Load Data](/load-data)
