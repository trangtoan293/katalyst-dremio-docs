---
url: /security/idle-session-timeout
title: "Idle Session Timeout | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64076.071549583
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * Idle Session Timeout

Version: current [26.x]
On this page
# Idle Session Timeout Enterprise
Idle Session Timeout automatically logs users out of the Dremio console after a configurable period of inactivity.
By default, this feature is disabled. However, all user sessions have a maximum lifetime defined by the `token.expiration.min` support key, which defaults to 30 hours (see [Support Settings](/help-support/support-settings/#support-keys)). When Idle Session Timeout is disabled, sessions remain active until this maximum lifetime is reached or the user manually logs out.
## Enable Idle Session Timeout[​](/security/idle-session-timeout#enable-idle-session-timeout "Direct link to Enable Idle Session Timeout")
  1. Click ![](https://docs.dremio.com/images/icons/project-settings.png) in the side navigation bar.
  2. Select **Preferences** from the settings sidebar.
  3. In the **Idle Session Timeout** setting, specify the timeout duration and select the unit (minutes or hours). The default timeout period is 2 hours.
  4. Toggle the **Idle Session Timeout** switch to enable the feature.


## What Counts as Activity[​](/security/idle-session-timeout#what-counts-as-activity "Direct link to What Counts as Activity")
Actions that involve direct user input — such as moving or clicking the mouse, scrolling the mouse wheel, typing on the keyboard, or unlocking the screen — reset the inactivity timer. Actions that occur outside the browser or without direct user input do not reset the timer. For example, opening a new browser tab, JavaScript activity without user input, and moving the mouse outside the browser window are not counted as activity.
## Multi-Tab Behavior[​](/security/idle-session-timeout#multi-tab-behavior "Direct link to Multi-Tab Behavior")
Idle Session Timeout is synchronized across all open Dremio console tabs that share the same session. If a user is active in any tab, the session stays alive across all tabs. If the user remains idle across all tabs, they are logged out when the timeout expires, and any tab prompts them to log in again on the next interaction.
## After Timeout[​](/security/idle-session-timeout#after-timeout "Direct link to After Timeout")
When a session times out, the user is not immediately redirected. Instead, the login page appears on the next user interaction, such as clicking, navigating, or making a data request. A timeout affects all open tabs, regardless of how many are open.
Running queries are unaffected by a timeout and continue to completion. Results remain available on the Jobs page. Unsaved SQL editor tab contents are also preserved — after logging back in, your SQL editor tabs and their contents are restored.
## Scope[​](/security/idle-session-timeout#scope "Direct link to Scope")
Idle Session Timeout applies only to interactive sessions in the Dremio console. It does not affect ODBC or JDBC connections, Arrow Flight sessions, REST API sessions, or scheduled jobs and Reflection refreshes.
If you use a BI front-end such as Tableau, session timeout for that tool must be configured within the BI product itself.
Was this page helpful?
[Previous Audit Logging](/security/auditing)[Next Compliance](/security/compliance)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Audit Logging](/security/auditing)[Next Compliance](/security/compliance)
