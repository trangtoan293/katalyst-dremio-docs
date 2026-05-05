---
url: /help-support/advanced-topics/dremio-preferences
slug: /help-support/advanced-topics/dremio-preferences
title: "Dremio Preferences | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64059.737472333
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Advanced Topics](/help-support/advanced-topics)
  * Dremio Preferences

Version: current [26.x]
On this page
# Dremio Preferences
Preferences let you customize the behavior of specific features in the Dremio console.
## Managing Preferences[​](/help-support/advanced-topics/dremio-preferences/)
To view the available preferences in the Dremio console:
  1. Click the Settings ! icon in the side navigation bar.
  2. Select **Preferences** in the settings sidebar.
This opens the Preferences page, showing the Dremio console settings that can be modified.
  3. Use the toggle button next to the setting to enable or disable for all users.
If any preferences are modified, users must refresh their browsers to see the change.


These preferences and their descriptions are listed in the table below.  
  
  
| Setting  | Default  | Enabled  | Disabled  | Details  |  
| --- | --- | --- | --- | --- |  
| AI features  | Disabled  | Enables [AI configurations](/admin/model-providers) and AI features such as the AI agent and AI functions.  | AI features are disabled in the product. [AI configurations](/admin/model-providers) are not accessible to users.  | See [Configure Model Providers](/admin/model-providers).  |  
| SQL Autocomplete  | Enabled  | Autocomplete provides suggestions for SQL keywords, catalog objects, and functions while you are constructing SQL statements. ! is visible in the SQL editor, although users can switch the button off within their own accounts.  | The button is hidden from the SQL editor and suggestions are not provided.  | See how this works in the SQL editor.  |  
| Copy or Download Results  | Enabled  |  ! and ! are visible above the results table, because users are allowed to copy or download the results in the SQL editor.  | The buttons are hidden and users cannot copy or download results in the SQL editor.  | See how this works in result set actions.  |  
| Rerun Query on Download  | Disabled  | When you download results, the query will be re-run and the results will be written out to the download file. Up to 1 million rows can be downloaded with this option enabled.  | When you download results, the results from the last run of the query will be written out to the download file.  | See how this works in result set actions.  |  
| Query Dataset on Click  | Enabled  | Clicking on a dataset opens the SQL Runner with a default `SELECT` statement on the dataset.  | Clicking on a dataset opens the Datasets page, showing a `SELECT` statement on the dataset or the dataset's definition that you can view or edit depending on your dataset privileges.  | See how this works in Querying a Dataset on Click.  |  
| Autonomous Reflections  | Disabled  | Dremio automatically creates and drops Reflections based on query patterns from the last 7 days to seamlessly accelerate performance.  | Dremio will provide recommendations to create and drop Reflections based on query patterns from the last 7 days to accelerate query performance.  | See how this works in the [Autonomous Reflections](/acceleration/autonomous-reflections).  |  
| Idle Session Timeout  | Disabled  | Users are automatically logged out after a specified period of inactivity or when the maximum session lifetime is reached (defaults to 30 hours), whichever occurs first. Administrators can configure the inactivity timeout duration in minutes or hours, with a default of 2 hours.  | User sessions remain active until the maximum session lifetime is reached (defaults to 30 hours) or manually logged out.  | See [Idle Session Timeout](/security/idle-session-timeout).  |  
Was this page helpful?
[Previous Creating and Querying Wide Tables](/help-support/advanced-topics/wide-tables)[Next Gandiva-based Execution](/help-support/advanced-topics/gandiva)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Creating and Querying Wide Tables](/help-support/advanced-topics/wide-tables)[Next Gandiva-based Execution](/help-support/advanced-topics/gandiva)
!
