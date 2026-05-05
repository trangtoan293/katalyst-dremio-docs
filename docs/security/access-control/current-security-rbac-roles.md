---
url: /security/rbac/roles
slug: /security/rbac/roles
title: "Role Management | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64389.936409041
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Access Control](/security/rbac)
  * Role Management

Version: current [26.x]
On this page
# Role Management Enterprise
Roles are groups of privileges that can be applied to [users](/security/authentication/users) as needed. Instead of tracking and granting user access to individual objects in Dremio, you can define and apply roles based on the types of users in your organization that access Dremio. For example, many administrators label roles by company position, such as "Analyst." Any users who are members of a role gain all of the privileges granted to the role.
As the [Dremio Shared Responsibility Models](https://www.dremio.com/responsibility) outline, data is a shared responsibility between Dremio and you. The Shared Responsibility Models lay out Dremio's responsibilities for providing data acess and your responsibilities for data governance.
## Types of Roles​
### Internal​
By default, Dremio allows you to add and manage roles directly from the application, or locally, by an administrator.
### External​
External roles (also known as "groups") are those created and managed by an external authentication service like an [OpenID provider](/security/authentication/identity-providers/oidc). These groups and their associated users are not created manually in Dremio but rather added automatically when a group is synchronized with Dremio from an integrated credentials manager. Likewise, [external users](/security/authentication/users) are created by these services, and their credentials may not be changed from the Dremio interface as they are controlled by the credential manager.
Dremio communicates directly with the external system to fetch and validate groups and their users as needed. The group name stored in Dremio and shown from the Roles screen when editing a role will display the associated members as governed by the identity manager.
If a group's access to Dremio is revoked by a credential manager, this does not delete the role or its member accounts in Dremio. These must be removed manually.
#### Using SCIM​
[System for Cross-domain Identity Management (SCIM)](/security/authentication/identity-providers/scim) is used to integrate user and group provisioning from an [OpenID Connect (OIDC) provider](/security/authentication/identity-providers/oidc) with Dremio. When properly configured, your OIDC provider automatically sends a group and its associated members' credentials securely via SCIM to your Dremio server, automatically creating user accounts. These new users may then log in on Dremo according to the policies set by your credential manager.
Dremio currently supports the following functionality regarding SCIM:
  * Nested Roles (Groups)
  * User activation/deactivation
  * Synchronized passwords without external authentication configured


The following functionality is not supported:
  * Search filters beyond equal filter by username
  * Microsoft Entra ID
  * Etag


You cannot reset or change an external user's password from Dremio as this is managed by your organization's identity manager. If you delete an external user from Dremio, your OIDC provider will re-add their account the next time that user attempts to log in. To properly revoke access to Dremio, you must delete the user in your OIDC provider.
## Roles Screen​
The Roles screen may be found by navigating to **Settings &gt; Roles**.
From here, you can view and edit existing roles, which are listed in table format. The following actions may be performed:
  * To add a new role, click the **Create Role** button at the top-right corner of the screen. This launches the Create Role modal.
  * To edit an existing role, click on the role name or the **Edit** button (pencil) under the _Actions_ column on the desired row. This launches the Roles screen, where you can edit details and nested roles.
  * To delete a role, click the **Delete** icon (red circle) under the _Actions_ column for the desired row. Dremio will prompt you to confirm this action. Once confirmed, the role is deleted and cannot be retrieved.


### Create Roles​
From this modal, you may create a single role. Privileges for this role must be set from the desired object that the role is meant to interact with.
Dremio doesn't recommend using special characters in a role's name (e.g., `-`, `_`, etc.). The SQL Editor cannot parse such values when using the [GRANT or REVOKE commands](/reference/sql/commands/rbac) and will return an error.
  * **Name** - The name associated with the role, such as a position title or type.
  * **Description** - Details regarding the purpose or privileges associated. Use of this field is optional.


### Edit Roles​
From this screen, you can edit a role and add or change details like the role name, description, sub-roles, users, and more.
#### Details Tab​
  * **Name** - The name associated with the role, such as a position title or type.
  * **Description** - Details regarding the purpose or privileges associated. This field is optional.


Changes made here are not permanent until you click **Save**. So if you find you've made a mistake or wish to revert to the previous state, simply click **Cancel**.
#### Roles Tab​
Roles may be assigned to another role, creating a parent-child relationship of inheritance, also known as a nested role. When a nested role is added, the parent role (the one you're editing) grants all its privileges to the nested role.
From the **Roles** tab, you may view nested roles, which are listed in table format. The following actions may be performed:
  * To add a new nested role, navigate to the SQL editor and [use the GRANT ROLE TO ROLE command](/reference/sql/commands/roles).
  * To edit an existing nested role, navigate to the SQL editor and [use the GRANT privilege command](/reference/sql/commands/rbac).
  * To delete a nested role, navigate to the SQL editor and [use the DROP ROLE command](/reference/sql/commands/roles).


##### External Roles​
The Roles sidebar lists external roles only in these cases:
  * You configured SCIM to push groups in your external service to Dremio.
  * You configured an external identity provider, such as Microsoft Entra ID or LDAP, and explicitly [granted privileges](/security/rbac/privileges) on a Dremio object to the external groups in the external identity provider. (In this case, the role name you use when you grant privileges in Dremio must exactly match the name of the corresponding external group in the external identity provider. The group and its users are fetched and validated, and the external roles are then listed in the Roles sidebar.)


To verify that a Dremio role is properly classified as an external role, users who are members of the ADMIN role can run the following query in the SQL Runner:
SQL Query to Confirm Role Types

```
SELECT * from sys.roles;  

```

The query output includes the `role_type` column, which lists `EXTERNAL` for roles that correspond to external groups. In the `created_by` column:
  * `LOCAL` means that the role was created manually in Dremio.
  * `AUTO_SYNC` means that Dremio fetched the role from an external identity provider (Microsoft Entra ID or LDAP) because the role was granted privileges.
  * `SCIM` means the role was created by an external service that pushes groups to Dremio via SCIM.


#### Members Tab​
The Members tab lists the [users](/security/authentication/users) who belong to each role. For system and local roles, you can also add and remove role members. For external roles, you must add and remove members of the role's corresponding group in the external service, not in Dremio.
To add a member to a system or local role:
  1. Enter a user's full username in the search bar at the top of the screen.
  2. Click the **Add** button. The user will appear in the list below.
  3. Click **Save**.


To remove a member from a system or local role:
  1. Locate the member in the list.
  2. Click the **Delete** icon at the right side of the member's row in the list.
  3. Click **Save**. The user is removed as a member of the role and no longer possesses the privileges granted to the role. The user retains membership in any other roles they are members of.


Changes made to role membership are not permanent until you click **Save**. To revert to the role's existing membership without saving changes, click the **Cancel** button.
##### External Roles​
If an external role was created when Dremio fetched external groups from an external identity provider, the Members tab does not list the [external users](/security/authentication/users) who belong to it. This is the case even if external users are in fact members of the role both in Dremio and in the external group. The reason is that Dremio does not store memberships for roles that are based on groups in external identity providers. Instead, Dremio fetches these external role memberships as needed. The Members tab for an external role is empty even if the role does have members. However, Dremio still respects the memberships of these external roles.
If an external role was created with SCIM provisioning, the Members tab lists the external users who belong to it. With SCIM provisioning configured, updates to user attributes in the external service are propagated to the user account in Dremio.
For all external roles, membership is controlled in the external service. Dremio does not synchronize with external services when you make changes to external roles in Dremio. To add and remove members of an external role, you must add and remove members of the role's corresponding group in the external service. Making changes to the membership of an external role in Dremio can result in synchronization errors when Dremio re-fetches the role from the external service.
External users are listed in the [Users screen](/security/authentication/users). You can also use the [IS_MEMBER](/reference/sql/sql-functions) SQL function to look up the current user's membership in external roles.
Was this page helpful?
[Previous Privileges](/security/rbac/privileges)[Next Inbound Impersonation](/security/rbac/inbound-impersonation)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Privileges](/security/rbac/privileges)[Next Inbound Impersonation](/security/rbac/inbound-impersonation)
!
