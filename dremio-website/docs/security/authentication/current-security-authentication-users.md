---
url: /security/authentication/users
title: "Manage Users | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64386.284139208
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * Manage Users

Version: current [26.x]
On this page
# Manage Users
Manage user access to your Dremio environment through internal authentication or external identity providers. This page covers user types, account management, and administrative tasks.
## User Types[​](/security/authentication/users#user-types "Direct link to User Types")
Dremio supports several user types with different authentication and management workflows:  
| Feature  | Local Users  | LDAP/AD Users  | SSO Users  | Service Users  |  
| --- | --- | --- | --- | --- |  
| **Purpose**  | Human access  | Human access  | Human access  | Programmatic/API access  |  
| **Authentication**  | Password in Dremio  | LDAP/AD directory  | IdP (SAML/OIDC)  | OAuth secret or external JWT  |  
| **Credential Management**  | Within Dremio  | LDAP/AD admin  | Through your IdP  | Dremio and optionally external IdP  |  
| **Provisioning**  | Manual creation  | LDAP sync  | Manual creation or SCIM  | Manual creation  |  
| **Password Reset**  | Self-service or admin  | Through LDAP/AD  | Through IdP  | N/A  |  
### Local Users[​](/security/authentication/users#local-users "Direct link to Local Users")
Local users authenticate with passwords managed directly in Dremio. These users must be invited manually. Use local users when you need standalone accounts for contractors, external partners, or testing and development environments.
### LDAP/AD Users[​](/security/authentication/users#ldapad-users "Direct link to LDAP/AD Users")
Lightweight Directory Access Protocol (LDAP) or Active Directory (AD) users authenticate against your organization's directory server. User accounts are synchronized from your LDAP or AD. Use LDAP/AD authentication when you have existing directory infrastructure for centralized user management.
### SSO Users[​](/security/authentication/users#sso-users "Direct link to SSO Users")
SSO users authenticate through your organization's [Enterprise OpenID Connect (OIDC) Provider](/security/authentication/identity-providers#openid-connect-oidc-providers), such as [Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id) or Okta. These users can be created manually or provisioned automatically via System for Cross-domain Identity Management (SCIM).
#### What is SCIM?[​](/security/authentication/users#what-is-scim "Direct link to What is SCIM?")
[SCIM](/security/authentication/identity-providers/scim) is an open standard protocol that automates user provisioning between your identity provider and Dremio. Instead of manually creating and managing users in multiple systems, SCIM keeps everything synchronized automatically. When you add, update, or remove a user in your IdP, those changes propagate to Dremio without manual intervention.
#### SCIM Provisioning Benefits[​](/security/authentication/users#scim-provisioning-benefits "Direct link to SCIM Provisioning Benefits")
When SCIM is configured, Dremio stays synchronized with your IdP. Deleting a user in your IdP automatically reflects in Dremio. Additional benefits of SCIM integration include:
  * Automatic user creation and deactivation
  * Synchronized user attributes
  * Centralized access management


#### Using SCIM[​](/security/authentication/users#using-scim "Direct link to Using SCIM")
Dremio supports the following SCIM functionality:
  * Nested Roles (Groups) - Group memberships from your identity provider automatically translate to corresponding roles in Dremio.
  * User Lifecycle Management - Your identity provider can automatically activate, deactivate, create, and delete user accounts in Dremio.
You cannot reset or change an external user's password from Dremio, as this is governed by your organization's identity manager. If you delete an external user from Dremio, your OIDC provider will re-add their account the next time that user attempts to log in. To properly revoke access to Dremio, you must delete the user in your OIDC provider.
  * Password Synchronization - When external authentication is not configured, user passwords sync directly from your identity provider.


The following SCIM features are not currently supported:
  * Advanced Search Filters - Dremio only supports exact username matching.
  * Entity Tags (ETags) - SCIM responses do not include ETags.


### Service Users[​](/security/authentication/users#service-users "Direct link to Service Users")
Service users are non-human accounts for programmatic API access. They authenticate using either OAuth client secrets generated in Dremio or external JWT tokens from your identity provider. Use service users for applications, scripts, and automated workflows that need to interact with Dremio APIs.
## Administrative Tasks[​](/security/authentication/users#administrative-tasks "Direct link to Administrative Tasks")
The following tasks require administrator privileges or the [CREATE USER](/security/rbac/privileges#system-privileges) privilege.
### View All Users[​](/security/authentication/users#view-all-users "Direct link to View All Users")
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Users** tab.


The table displays all local and SSO users with access to your Dremio cluster.
### Add a User[​](/security/authentication/users#add-a-user "Direct link to Add a User")
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Users** tab.
  3. Click **Add User**.
  4. Provide a **Username** , which will be used when logging into Dremio.
     * Usernames should be 3-254 characters, start with a letter or digit, and contain only letters, digits, underscores, hyphens, periods, and at signs. See [Username Recommendations](/security/authentication/users#username-recommendations) for full details.
     * The username cannot be changed after completing the initial configuration.
  5. Select the **User Type** as Local or External.
  6. For local users, provide:
     * **First Name** - The first name of the user.
     * **Last Name** - The last name of the user.
     * **Email** - The email address of the user.
     * **Password** - Local user passwords can contain special characters for any character _except_ the first character. If you use a special character for the first character in the password, the password will fail.
For external users, provide:
     * **First Name** - The first name of the user.
     * **Last Name** - The last name of the user.
     * **Email** - The email address of the user.
  7. Click **Save**.


### Edit a User[​](/security/authentication/users#edit-a-user "Direct link to Edit a User")
You can modify a user's name and [role assignments](/security/rbac/roles).
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Users** tab.
  3. Click the desired user and modify any mutable user information.
  4. Click **Granted Roles**.
  5. To grant additional roles, click **Grant Roles**. Revoke existing roles by clicking **Revoke** next to the role.


### Add a Service User[​](/security/authentication/users#add-a-service-user "Direct link to Add a Service User")
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Service users** tab.
  3. Click **Add Service User**.
  4. From the New Service User configuration page, provide a **Username** and description for the service user.
     * Usernames should be 3-254 characters, start with a letter or digit, and contain only letters, digits, underscores, hyphens, periods, and at signs. See [Username Recommendations](/security/authentication/users#username-recommendations) for full details.
     * The username cannot be changed after completing the initial configuration.


### Edit a Service User[​](/security/authentication/users#edit-a-service-user "Direct link to Edit a Service User")
By editing a service user, you can grant roles and credentials.
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Service users** tab.
  3. Click the desired service user. The description can be modified.
  4. Select **Granted Roles** to add the service user to system or custom roles.


### Generate an OAuth Client Secret[​](/security/authentication/users#generate-an-oauth-client-secret "Direct link to Generate an OAuth Client Secret")
To authenticate a service user for API access, generate an OAuth client secret that applications will use to obtain access tokens from Dremio.
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Service users** tab.
  3. Click the desired service user.
  4. Select **Credentials** and click **Add** to select **Generate OAuth Secret**.
  5. Provide a **Label** for the secret and a **Lifetime** between 90 and 180 days, then select **Configure**.
  6. Copy the **OAuth Client Secret** and store it in a secure location. It will not be available again.


### Configure an External Credential[​](/security/authentication/users#configure-an-external-credential "Direct link to Configure an External Credential")
External credentials allow service users to authenticate using JWT tokens issued by your organization's identity provider.
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Service users** tab.
  3. Click the desired service user.
  4. Select **Credentials** and click **Add** to select **Configure an External Credential**.
  5. Provide a **Label** for the credential.
  6. Provide the target **Audience** , which identifies the intended recipient for a JWT from the identity provider. See [Audience](/security/authentication/application-authentication/external-token#audience) for details.
  7. Complete the **User Claim** to identify the claim mapping in the external JWT for the service principal in the identity provider. The `sub` and `oid` claims typically provide the service principal's unique identifier. See [User Claim Mapping](/security/authentication/application-authentication/external-token#user-claim-mapping) for details.
  8. Provide the **External ID**. For Microsoft Entra ID service principals, this should be the service principal's Object ID.
  9. Provide the **Issuer URL** , which is the OAuth provider that issues JWT tokens for the associated service account. This is contained in the external JWT's `iss` claim and identifies the identity provider. See [Issuer URL](/security/authentication/application-authentication/external-token#issuer-url) for details.
  10. Record the **JWKS URL** (optional). If not provided, Dremio retrieves the JWKS URL from `{issuer_URL}/.well-known/openid-configuration`. See [JWKS URL](/security/authentication/application-authentication/external-token#jwks-url) for details.
  11. Click **Configure** to create the external credential.


### Remove a User[​](/security/authentication/users#remove-a-user "Direct link to Remove a User")
  1. Click ![Settings](https://docs.dremio.com/images/icons/settings.png) on the side navigation bar and choose **User Management**.
  2. Select the **Users** or **Service users** tab.
  3. Click the user's name.
  4. Click ![Remove icon](https://docs.dremio.com/images/icons/trash.png) to remove.
  5. Confirm the deletion.


## Username Recommendations[​](/security/authentication/users#username-recommendations "Direct link to Username Recommendations")
Usernames should follow these recommendations to ensure compatibility across Dremio features and external integrations:
  * Start with a letter (`a-z`, `A-Z`) or digit (`0-9`)
  * Contain only letters (`a-z`, `A-Z`), digits (`0-9`), and special characters (underscore `_`, hyphen `-`, period `.`, at sign `@`)
  * End with a letter or digit (not a special character)
  * Length: 3-254 characters (254 aligns with RFC 5321, the maximum length of a valid email address)
  * Case-insensitive for uniqueness (stored as lowercase)
  * Cannot contain consecutive special characters (no `..`, `--`, `__`, `@@`, or any other consecutive special characters)


These recommendations ensure compatibility across REST APIs, command-line tools, and identity provider integrations. The minimum length of 3 characters ensures compatibility with logging, auditing, and display systems.
### Examples[​](/security/authentication/users#examples "Direct link to Examples")
Valid examples:
  * `jsmith`
  * `jane.doe`
  * `admin-user-01`
  * `maria_garcia`
  * `jane.doe@company.com`


Invalid examples:
  * `.jsmith` (starts with a special character)
  * `jane..doe@company.com` (consecutive periods)
  * `user@` (ends with a special character)


### IdP Integrations[​](/security/authentication/users#idp-integrations "Direct link to IdP Integrations")
Dremio's username recommendations are designed for compatibility with common identity providers and protocols, including SCIM, LDAP, and OIDC.
Organizations using legacy Active Directory (AD) authentication with `sAMAccountName` (the pre-Windows 2000 logon format) should note that AD limits this attribute to 20 characters. This is an AD constraint, not a Dremio limitation. Modern integrations using the User Principal Name (UPN) format are not subject to this restriction.
Was this page helpful?
[Previous Authentication](/security/authentication)[Next Identity Providers](/security/authentication/identity-providers)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Authentication](/security/authentication)[Next Identity Providers](/security/authentication/identity-providers)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fsecurity%2Fcompliance%2F&_biz_t=1777950707387&_biz_i=Compliance%20%7C%20Dremio%20Documentation&_biz_n=754&rnd=821224&cdn_o=a&_biz_z=1777950707411)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fsecurity%2Fauthentication%2Fusers%2F&_biz_t=1777950707411&_biz_i=Manage%20Users%20%7C%20Dremio%20Documentation&_biz_n=755&rnd=96278&cdn_o=a&_biz_z=1777950707411)
