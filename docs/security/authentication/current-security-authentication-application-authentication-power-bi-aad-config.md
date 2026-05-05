---
url: /security/authentication/application-authentication/power-bi-aad-config
slug: /security/authentication/application-authentication/power-bi-aad-config
title: "Microsoft Power BI | Dremio Enterprise Documentation"
depth: 4
crawled_at: 64929.111916041
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * [Application Authentication](/security/authentication/application-authentication)
  * Microsoft Power BI

Version: current [26.x]
On this page
# Microsoft Power BI
This topic describes configuring authorization of Power BI to Dremio with Microsoft Entra ID. With this authorization option, Dremio is able to handle secure user authorization with an identity provider using 
### Requirements​
  * [Microsoft Power BI Desktop (December 2021+)](/client-applications/microsoft-power-bi), which includes Dremio as a Certified Connector


### Configuring Microsoft Entra ID for Power BI​
  1. From Dremio, click the **Settings** (gear) icon at the bottom-left corner of the screen. Click **Settings** from the menu.
  2. Click **BI Applications &gt; Authorization** from the left sidebar.
  3. Select **Enable single sign on for Power BI**.
  4. In the **Microsoft Entra Tenant ID** field, enter the tenant ID of your Microsoft Entra ID account. Instructions for finding your tenant ID 
  5. In the **User Claim Mapping** or **User Claim Mapping (Legacy)** field, specify the key of the user claim that Dremio Cloud must look up to find the username of the user attempting to log in through an external token provider.
Only JSON Web Tokens (JWTs) are supported. The user claim in a JWT uniquely identifies the user.
The **User Claim Mapping** field is for use with Power BI November 2022 or later. When you use one of these versions of Power BI with Microsoft Entra ID, the user claim is `upn`, which is a `upn`, specify that user claim in the **User Claim Mapping** field.
The **User Claim Mapping (Legacy)** field is for use with Power BI October 2022 or earlier. When you use one of these versions of Power BI with Microsoft Entra ID, the user claim is `preferred_username`, which is a `preferred_username`, specify that user claim in the **User Claim Mapping** field.
  6. Click **Save**.


#### Disabling Microsoft Entra ID for Power BI​
Perform the following steps to disable the Microsoft Entra ID configuration for Power BI:
  1. From Dremio, click the **Settings** (gear) icon at the bottom-left corner of the screen. Click **Settings** from the menu.
  2. Click **BI Applications &gt; Authorization** from the left sidebar.
  3. Deselect **Enable single sign on for Power BI** to disable the single sign-on service if it is checked.
  4. Click **Save**.


Was this page helpful?
[Previous Application Authentication](/security/authentication/application-authentication)[Next External Token Providers](/security/authentication/application-authentication/external-token)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Application Authentication](/security/authentication/application-authentication)[Next External Token Providers](/security/authentication/application-authentication/external-token)
!!
