---
url: /security/authentication/personal-access-tokens
slug: /security/authentication/personal-access-tokens
title: "Personal Access Tokens | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64076.117550125
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * Personal Access Tokens

Version: current [26.x]
On this page
# Personal Access Tokens Enterprise
Personal access tokens (PATs) are randomly-generated tokens associated with a user that are used in place of a password to log in to a service.
PATs provide an easy way for an individual user to connect to Dremio. You cannot create a PAT for another user and any user is limited to the PATs that they created. This means administrators cannot create PATs for distribution to other users.
Dremio PATs are typically used for logging in with REST APIs or ODBC/JBDC into the system when SSO or LDAP is implemented. Also, PATs can be used for logging in to the Dremio console and to reduce access permissions within a service.
Dremio recommends OAuth access tokens in [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver) and [ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver), and [REST](/reference/api) to improve security by reducing the risk of compromised passwords or personal access tokens.
## Using a PAT​
PATs may be used in several contexts:
  * Logging in to the Dremio console: use the PAT as a user password
  * Creating a connection with [Arrow Flight SQL JDBC](/client-applications/drivers/arrow-flight-sql-jdbc-driver) and [ODBC](/client-applications/drivers/arrow-flight-sql-odbc-driver)
  * Sending [Dremio REST requests](/reference/api)


Depending on the tool or service used, users may need to use $token as the username and then enter the PAT in the password field.
## Enabling the Use of PATs​
The Dremio administrator can enable or disable the use of PATs throughout the system with the `auth.personal-access-tokens.enabled` [support key](/help-support/support-settings/):
  1. Log in to Dremio as an admin.
  2. Click the **Settings** (gear) icon on the side navigation bar.
  3. Select **Support** from the settings sidebar.
  4. On the Support Settings page, complete one of the following:
    1. If the `auth.personal-access-tokens.enabled` key has not been added under Support Keys, enter the key name in the search box, then click **Show**. Toggle the slider to enable the setting, then click **Save**.
    2. If the `auth.personal-access-tokens.enabled` key has already been added, toggle the slider to enable the setting, then click **Save**.


## Viewing PAT Metadata​
A PAT is shown only once during creation. However, you can view the token ID, label, creation date, and expiration status for all PATs in your account.
To view the metadata for all the PATs you have created:
  1. Click the User icon (user initials) on the side navigation bar and select **Account Settings**.
  2. Select **Personal Access Tokens** from the settings sidebar.
The Personal Access Tokens page shows all the metadata for PATs, active and expired, for your account.
If the **Personal Access Tokens** settings are not visible, ensure the PATs Support Key is enabled and try refreshing the page in your browser.


## Creating a PAT​
A PAT's expiration or lifespan cannot be altered after it is created. PATs can still exist (depending on the Lifetime setting) in the system after a user is deleted. If a user is deleted from Dremio, SSO, or LDAP, ensure that all of their PATs are deleted using the [Personal Access Token API](/reference/api/personal-access-token).
To create a PAT:
  1. Click the User icon (user initials) on the side navigation bar and select **Account Settings**.
  2. Select **Personal Access Tokens** from the settings sidebar.
  3. On the Personal Access Tokens page, click the **Generate Token** button at the top-right corner of the screen.
  4. In the Generate Token dialog, for **Label** , add an identifier to describe what the PAT is for.
  5. For **Lifetime** , enter the number of days that you want the PAT to be valid before it expires. The default PAT lifetime is 30 days and the maximum lifetime is 180 days. To specify a different maximum lifetime, change the value of the `auth.personal-access-token.max_lifetime_days` [support key](/help-support/support-settings/). Changing the value of this support key does not affect existing tokens.
  6. Click **Generate**.
  7. Copy the generated PAT and save it to a secure location on your computer. Be sure you save the generated PAT because it cannot be accessed again after closing the Generate Token dialog.


## Deleting a PAT​
Each user can delete PATs in their own account.
PATs can still exist (depending on the Lifetime setting) in the system after a user is deleted. If a user is deleted from Dremio, SSO, or LDAP, ensure that all of their PATs are deleted using the [Personal Access Token API](/reference/api/personal-access-token).
To delete an existing PAT:
  1. Click the User icon (user initials) on the side navigation bar and select **Account Settings**.
  2. Select **Personal Access Tokens** from the settings sidebar.
  3. On the Personal Access Tokens page, click the Delete (trash) icon for the PAT that you want to delete.
  4. In the Delete Token dialog, click **Delete** to confirm. The PAT is deleted and cannot be retrieved.


## Deleting All PATs​
Any user can delete all PATs from their own account.
To delete all PATs for your account:
  1. Click the User icon (user initials) on the side navigation bar and select **Account Settings**.
  2. Select **Personal Access Tokens** from the settings sidebar.
  3. On the Personal Access Tokens page, click the **Delete All** button at the top-right corner of the screen.
  4. In the Delete All Tokens dialog, click **Delete** to confirm that you want to delete _all_ PATs in the list. After a PAT has been deleted, it cannot be retrieved.


See [Personal Access Token](/reference/api/personal-access-token) in the API reference for REST requests to manage personal access tokens.
Was this page helpful?
[Previous External Token Providers](/security/authentication/application-authentication/external-token)[Next Access Control](/security/rbac)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous External Token Providers](/security/authentication/application-authentication/external-token)[Next Access Control](/security/rbac)
