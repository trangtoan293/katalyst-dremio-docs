---
url: /security/authentication/identity-providers/scim
slug: /security/authentication/identity-providers/scim
title: "SCIM | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64386.239227791
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * [Identity Providers](/security/authentication/identity-providers)
  * SCIM

Version: current [26.x]
On this page
# SCIM Enterprise
SCIM (System for Cross-domain Identity Management) is an open standard designed to simplify and automate the exchange of user identity information across different domains, particularly between identity providers, such as Microsoft Entra ID, and service providers like Dremio. It provides a standardized RESTful API with JSON payloads for managing user accounts, groups, and their attributes, making provisioning, deprovisioning, and synchronization more consistent and scalable. SCIM reduces the overhead of building custom integrations by enabling a standardized protocol for exchanging identity data across platforms.
SCIM automatically creates, updates, and deletes users in service providers through a process initiated by the identity provider. For example, when a new user is added or updated in the identity provider, the IDP sends a SCIM API request to the SCIM endpoint of the service provider. This design enables automatic and secure user management, but all users must be managed through the identity provider.
## SCIM Endpoint​
The SCIM endpoint is a RESTful web API exposed by a service provider, such as Dremio, that allows the identity provider to manage users and groups remotely. It serves as the entry point for provisioning operations, including creating, updating, deleting, and querying user or group objects. Dremio supports the SCIM URL-based endpoints.
SCIM Base URL Formats

```
http://{hostname}:9047/scim/v2  
https://{hostname}/scim/v2  

```

## Requirements​
The following configurations must be used from the OpenID provider:
  * **Version** SCIM 2.0
  * **Connector Authentication Method:** Header Auth


## Okta​
Okta is an [OpenID identity management system](/security/authentication/identity-providers/oidc) that can be integrated with Dremio via SCIM. After configuring it, administrators can select authorized users in Okta, who are automatically created in Dremio. Usernames must be set and managed from Okta.
You must have 
### Configuring Okta with SCIM​
The following sections outline the process of setting up Okta to communicate with Dremio with SCIM. This process is divided into sections that should be completed in chronological order:
  1. Add the SCIM App
    1. From the Okta interface, navigate to the Applications page.
    2. Click **Browse App Catalog** and search for `SCIM.`
    3. Select `SCIM 2.0 Test App (Header Auth)` and then click **Add** from the app's page.
    4. Enter an **Application label** and then click **Next**.
    5. From the Sign on Methods page, click the **Secure Web Authorization** radio button and then **Administrator sets username, user sets password**.
    6. Click **Done**.
  2. Start SCIM Configuration
    1. From the SCIM app screen, click on the _Provisioning_ tab.
    2. Select the _Integration_ tab and then click **Configure API Integration**.
    3. Click **Enable API Integration**.
    4. Enter the URL of your Dremio server (preferably HTTPS) in the **Base URL** field, following the SCIM Endpoint format.
  3. Generate and install a Personal Access Token
Use a [personal access token](/security/authentication/personal-access-tokens) (PAT) as the API token in your Okta SCIM app. PATs are valid for 30 days by default.
After you obtain a PAT, complete the following steps in Okta:
    1. In the **API Token** field, enter your PAT. Use the format `Bearer `PersonalAccessToken`` (include a space after `Bearer`)
    2. Click **Test API Credentials** to ensure Okta can access your instance of Dremio. A green message should appear at the top of the screen saying the API `was verified successfully!`
    3. Click **Save**.
  4. Complete the SCIM Configuration
    1. Navigate to the _Provisioning_ tab, and then the _To App_ sub-tab.
    2. Click the **Edit** button to the right of the Provisioning to App header.
    3. Select the **Enable** checkbox for **Create Users** , **Update User Attributes** , and **Deactivate Users**. Make any other selections as desired.
    4. Click **Save**.


At this point, SCIM is fully configured, which means users added from Okta will now be automatically created in Dremio.
### Assigning Users​
To assign or grant users access to Dremio, perform the following steps:
  1. From the Okta interface, navigate to the _Assignments_ tab.
  2. Click the **Assign** drop-down from the top-left corner of the screen and select **Assign to People**.
  3. Locate the desired users by scrolling or using the search bar.
  4. Click the **Assign** button next to the desired user.
  5. Scroll down and click **Save and Go Back**.


That user is now granted access to Dremio, and an account is automatically created in the application. They can log in to Dremio immediately, and administrators can view their account on the [Users screen](/security/authentication/users).
Dremio recommends [assigning privileges](/security/rbac/privileges) and [roles](/security/rbac/roles) to manage user access to objects in Dremio.
### Assigning Groups​
To assign or grant groups of users access to Dremio, perform the following steps:
  1. From the Okta interface, navigate to the _Assignments_ tab.
  2. Click the **Assign** drop-down at the top-left corner of the screen and select **Assign to Groups**.
  3. Click **Push Groups &gt; Push Groups** to push an Okta group to Dremio.


All users associated with the group will be synchronized in Dremio. The group will also synchronize with Dremio as a [role](/security/rbac/roles) with all group members assigned to the role.
Users associated with the group can log in to Dremio immediately, and administrators can view their accounts from the [Users screen](/security/authentication/users).
Dremio recommends [assigning privileges](/security/rbac/privileges) to manage role member access to objects in Dremio.
### Revoking Access to Dremio​
If you wish to revoke access to Dremio for specific users or groups, complete these steps.
  1. From the SCIM app, navigate to the _Assignments_ tab.
  2. Click the **Delete** (X) button on the far right of the desired user's row.


The deleted user(s) may no longer log in on Dremio, however, this does not delete their account from Dremio.
Was this page helpful?
[Previous OpenID](/security/authentication/identity-providers/oidc)[Next Application Authentication](/security/authentication/application-authentication)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous OpenID](/security/authentication/identity-providers/oidc)[Next Application Authentication](/security/authentication/application-authentication)
!
