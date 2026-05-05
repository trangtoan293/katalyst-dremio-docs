---
url: /help-support/support-settings
title: "Support Settings | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.020742916
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * Support Settings

Version: current [26.x]
On this page
# Support Settings
Dremio Support provides settings that can be used for diagnostic purposes. These settings are enabled (or disabled) via the Dremio UI: **Settings** &gt; **Support**.
## Support Access[​](/help-support/support-settings/#support-access "Direct link to Support Access")
Support access provides multiple capabilities for communication with Dremio support depending on your role (user or administrator).
![Activate Download query support bundle.](https://docs.dremio.com/images/settings-support-query.png)
## Client Tools[​](/help-support/support-settings/#client-tools "Direct link to Client Tools")
Use the `Client Tools` pane to configure which client application buttons appear on the toolbar for a Dremio project when users view data in a dataset. Users can launch data in a client application by clicking the corresponding toolbar button.
Users must have Power BI Desktop October 2019 installed to launch the client directly from Dremio by clicking the toolbar button.
To enable a client application, toggle `Enabled` for the application.
## Internal Support Email[​](/help-support/support-settings/#internal-support-email "Direct link to Internal Support Email")
The Internal Support Email setting is used to configure an email address for users to contact for assistance with queries or other questions. When configured an "Email Help" button is added to the Help section on the Jobs page which end users can use for assistance. The email sent also includes a link to the query's profile that assistance is being requested for.
## Query Support Bundle[​](/help-support/support-settings/#query-support-bundle "Direct link to Query Support Bundle")
For YARN-based deployments, see [YARN-based Dremio deployments](/deploy-dremio/other-options/yarn-hadoop). A Dremio administrator must first enable the feature by toggling `Download Query Support Bundle` on the `Support Access` page. Dremio users can download the support bundle for any job to which they have access.
Any Dremio user with support access and permission to view a job can download a query support bundle by clicking the `Download Query Support Bundle` button on the Job Details page.
A Dremio administrator must first enable the feature by toggling `Download query support bundle` on the `Support Access` page.
The support bundle includes all logs on the executor node in the following format:
Support bundle for all logs on executor node

```
<executor hostname>_application_<container id>_<log type>.log.gz  

```

The bundle includes the following files:
  * `server.log.gz`
  * `server.gc.gz`
  * `queries.json.gz` - Above two files from the coordinator node that planned the query for the day that Dremio ran the query
  * `server.out.gz`- From the coordinator node that planned the query
  * `system_info.json.gz` - WLM rules and queues, and support settings
  * `query_profile.zip` - Full query profile for the query


Important: Hadoop-based deployments using self-signed certificates must either import their certificate into the truststore or disable certificate validation.
**To disable certificate validation:**  

  1. Add `provisioning.yarn.nodemanager.certificate-validation.enabled: false` to `dremio.conf` file in the coordinator node.
  2. Restart Dremio.


## Support Keys[​](/help-support/support-settings/#support-keys "Direct link to Support Keys")
Support keys are used to configure advanced settings in Dremio and control diagnostic data gathered.
Support keys should only be used when advised by Dremio support. Using support keys not documented or provided directly to you by Dremio is not recommended, as their use may lead to unexpected behavior.
To enable a key:
  1. Click the gear in Dremio's left navigation bar.
  2. Select **Support**.
  3. In the field on the right side of the **Support Keys** section, specify the name of the support key that you want to list and click **Show**.
  4. Depending on the key, either toggle the key on or specify a value for it.
  5. Click **Save** to save the changes.

  
| Support Key  | Description  |  
| --- | --- |  
| auth.personal-access-tokens.enabled  | Enables the use of [personal access tokens](/security/authentication/personal-access-tokens#enabling-the-use-of-pats).  |  
| auth.personal-access-token.max_lifetime_days  | Specifies the expiration period (in days) for new personal access tokens. The default value is 180 days. Values greater than 36525 cause tokens to expire immediately. Changes to this value do not affect existing tokens.  |  
| dremio.glue.lakeformation.cache.enable  | Enables or disables the [permissions cache](/reference/api/source#clear-the-permission-cache) for AWS Lake Formation.  |  
| dremio.glue.lakeformation.cache.ttl  | Specifies the time-to-live (in seconds) for the permissions cache for AWS Lake Formation.  |  
| export.bi.hostname  | You can use this support key to change the default hostname of the SQL endpoint for generating PBIDS/TDS files in corresponding Microsoft Power BI/Tableau.  |  
| export.tableau.extra-native-connection-properties  | Allows you to set the JDBC connection string when exporting a `.tds` file when SSL is enabled.  |  
| plugins.jdbc.db2.enabled  | Provides support for using IBM Db2 databases as data sources.  |  
| store.plugin.show_metadata_validity_checkbox  | Disable inline metadata retrieval when it is set to `true`.  |  
| token.expiration.min  | Specifies the lifetime of user session tokens for the Dremio UI, in minutes. When a user's session token expires, the user must log in to the Dremio UI again. The default value is `1,800`.  |  
Was this page helpful?
[Previous Keyboard Shortcuts](/help-support/keyboard-shortcuts)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Keyboard Shortcuts](/help-support/keyboard-shortcuts)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fsupport-settings%2F&_biz_t=1777950380944&_biz_i=Support%20Settings%20%7C%20Dremio%20Documentation&_biz_n=134&rnd=906215&cdn_o=a&_biz_z=1777950380944)
