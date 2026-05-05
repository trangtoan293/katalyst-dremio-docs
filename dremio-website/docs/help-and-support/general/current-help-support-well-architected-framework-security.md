---
url: /help-support/well-architected-framework/security
title: "Security | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64061.251452833
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Well-Architected Framework](/help-support/well-architected-framework)
  * Security

Version: current [26.x]
On this page
# Pillar 1 - Security
Dremio's security pillar is essential to ensuring that your data is secured properly when using Dremio to query your data lakehouse. The security components are especially important to architect and design your data platform. After your workloads are in production, you should review your security components on a regular basis to ensure compliance and eliminate threats.
## Principles[​](/help-support/well-architected-framework/security/#principles "Direct link to Principles")
### Leverage Industry-standard Identity Providers and Authorization Systems[​](/help-support/well-architected-framework/security/#leverage-industry-standard-identity-providers-and-authorization-systems "Direct link to Leverage Industry-standard Identity Providers and Authorization Systems")
Dremio integrates with several leading Identity Providers and data authorization systems. For robust enterprise integration with corporate policies, it is essential to leverage those 3rd-party systems. We recommend systems that utilize multi-factor authentication methods and are connected to single sign-on (SSO) platforms.
### Design for Least Privilege Access to Objects[​](/help-support/well-architected-framework/security/#design-for-least-privilege-access-to-objects "Direct link to Design for Least Privilege Access to Objects")
When providing self-service access to your data lakehouse via Dremio’s semantic layer, access should only be granted to the data that is required for the role accessing the data.
## Best Practices[​](/help-support/well-architected-framework/security/#best-practices "Direct link to Best Practices")
### Protect Access Credentials[​](/help-support/well-architected-framework/security/#protect-access-credentials "Direct link to Protect Access Credentials")
Where possible, leverage OpenID Connect (OIDC) identity providers such as Microsoft Entra ID and Okta, in conjunction with SCIM where applicable, to ensure that you never need to share passwords with Dremio. SSO is recommended where possible.
When LDAP integration is required, ensure you leverage the protocol with trusted, CA-signed certificates for secure communications with the LDAP provider.
### Leverage Role Based Access Controls[​](/help-support/well-architected-framework/security/#leverage-role-based-access-controls "Direct link to Leverage Role Based Access Controls")
Access to each space, folder, view, and table can be managed and regulated using roles. Roles are used to organize privileges at scale rather than managing privileges for each individual user. You can create roles to manage privileges for users with different job functions in your organization, such as “Analyst” and “Security_Admin” roles. Users who are members of a role gain all of the privileges granted to the role. Roles can also be nested (e.g., the users in the "UK" role can automatically be members of the "EMEA" role).
Access control protects the integrity of your data and simplifies the data architecture available to users based on their roles and responsibilities within your organization. Effective controls allow users to access data that is central to their work without regard for the complexities of where and how the data is physically stored and organized.
### Identify and Categorize Accounts[​](/help-support/well-architected-framework/security/#identify-and-categorize-accounts "Direct link to Identify and Categorize Accounts")
After logging in, view the users who are currently added to your instance of Dremio. If you are new to Dremio and preparing to add user accounts, make a list of all users that will need access to Dremio. From this list of users, you’ll now want to identify who should have administrative or restricted access. Regular users typically require the least privilege, whereas administrators should have heightened levels of access.
For each user or group that will be added to Dremio, you’ll want to create a list of privileges to assign, as well as identify what data objects they should be able to access. When mapping out object access, consider the implications of [Dremio’s inheritance model](/security/rbac#inheritance) and how to [restrict scope](/security/rbac#scope).
### Create a Test Account[​](/help-support/well-architected-framework/security/#create-a-test-account "Direct link to Create a Test Account")
When implementing access control for the first time, we advise organizations to create a test account. With this user account, you may test the impacts of various privileges as well as see how a user might interact with your data based on the objects assigned to them. This is an excellent way to gain insight into the new privileges available in Dremio and the potential ways by which they might be abused by users.
This is a necessary and often-overlooked step in the process of implementing access controls. Administrators need a thorough understanding of how data might be accessed or altered based on the privileges assigned to a user.
Upon creating a test account, apply privileges one at a time and at different object levels to see how a user’s activities might be restricted or enabled.
### Create Emergency Access Accounts[​](/help-support/well-architected-framework/security/#create-emergency-access-accounts "Direct link to Create Emergency Access Accounts")
It is possible for an administrator to either be unavailable or otherwise unable to access their Dremio account. If a user finds themselves suddenly unable to complete a task or needing additional access to perform important temporary actions, an administrator must be available.
Emergency access accounts are user accounts with highly privileged access, but aren’t assigned to specific individuals. These accounts are therefore limited in purpose to those scenarios when a regular administrator is not immediately available and either an emergency or high-priority event occurs and a user or group needs augmented access.
Give the login credentials for an emergency account to a trusted individual so that they can make any necessary changes to user access levels. Once the activities have been performed, access to the account may be revoked by simply changing the account password.
### Implement Least Privilege[​](/help-support/well-architected-framework/security/#implement-least-privilege "Direct link to Implement Least Privilege")
The principle of least privilege indicates that only the minimum necessary privileges should be assigned to a subject that requests access to an object. Granting privileges beyond their scope of necessary privileges allows the user to potentially alter or acquire data in unwanted ways. There is always the risk that privileges associated with access will be abused. This practice follows the "need to know" rule, where if the subject does not need access to an object to perform a task, it should not have the right to access that object.
When determining privileges to assign to a user or group, only the bare minimum access required to complete their tasks should be granted. If the grantee does not need an access right, they shouldn’t be given that right. For example, if a user needs to be able to see data on a specific object, but not alter it, then they should only be given VIEW access.
Occasionally, a user or group may require that their access be augmented in some way with additional privileges. These extra rights should be relinquished immediately upon completion of the task.
### Communicate Access to Users[​](/help-support/well-architected-framework/security/#communicate-access-to-users "Direct link to Communicate Access to Users")
An important step in the process of implementing access control to users or groups is communication. If users don’t know what they can or can’t do and with what objects, this may cause some confusion.
We recommend communicating with each user or group the specific privileges they’ve been granted and with what objects they can perform these functions. This way, if a user identifies missing privileges or object access, they can more effectively communicate this need to an administrator.
### Complete Regular Access Audits[​](/help-support/well-architected-framework/security/#complete-regular-access-audits "Direct link to Complete Regular Access Audits")
At regular intervals, between one to six months, we recommend performing access audits. This entails reviewing the existing permissions granted to your users and groups and determining if additional access needs to be given or if existing privileges should be revoked.
Take into account the various incidents that may have occurred since you first implemented access control, or held a previous audit. Has a specific user or group regularly had "accidents" like deleting tables? Based on such incidents, consider whether the privileges that enable such problems to occur should be revoked.
On the other hand, consider incidents where additional access has regularly been requested on a temporary basis. Maybe this privilege could be assigned to the user permanently, as this would save you the time of repeatedly granting and revoking privileges.
Regular access audits can help in fixing recurring issues or helping users perform their duties. We do not recommend implementing privileges and then never revisiting your access controls again. Like an organism, the needs of your users are constantly changing and need to be regularly revisited and assessed.
Was this page helpful?
[Previous Well-Architected Framework](/help-support/well-architected-framework)[Next Performance Efficiency](/help-support/well-architected-framework/performance)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Well-Architected Framework](/help-support/well-architected-framework)[Next Performance Efficiency](/help-support/well-architected-framework/performance)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fwell-architected-framework%2Fperformance%2F&_biz_t=1777950382078&_biz_i=Performance%20Efficiency%20%7C%20Dremio%20Documentation&_biz_n=138&rnd=500077&cdn_o=a&_biz_z=1777950382093)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fhelp-support%2Fwell-architected-framework%2Fsecurity%2F&_biz_t=1777950382092&_biz_i=Security%20%7C%20Dremio%20Documentation&_biz_n=139&rnd=132653&cdn_o=a&_biz_z=1777950382093)
