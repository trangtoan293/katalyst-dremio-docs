---
url: /security/authentication/identity-providers/ldap
title: "LDAP | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64385.902133916
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Authentication](/security/authentication)
  * [Identity Providers](/security/authentication/identity-providers)
  * LDAP

Version: current [26.x]
On this page
# LDAP Enterprise
## Configuring Dremio for LDAP[​](/security/authentication/identity-providers/ldap#configuring-dremio-for-ldap "Direct link to Configuring Dremio for LDAP")
To configure Dremio for LDAP, perform the following steps:
  1. Create a new `ad.json` file that contains your LDAP server configuration. See the [LDAP Properties](/security/authentication/identity-providers/ldap#ldap-properties) below for more information.
  2. Adding your configuration:
     * Kubernetes
     * Standalone
    1. Update the `coordinator.web.auth.type` configuration in your `values-overrides.yaml` with the value `ldap`. See the configuration of [Identity Providers](/deploy-dremio/configuring-kubernetes#identity-provider).
    2. Optionally, to configure Dremio to use TLS when connecting to LDAP, perform the following steps:
      1. Configure the LDAP `connectionMode` in `ad.json` for the required level of TLS functionality. See [LDAP Connection Mode](/security/authentication/identity-providers/ldap#ldap-connection-mode).
      2. To configure a truststore for the validation of TLS LDAP certificates, add the following to `values-override.yaml`
New configuration for TLS to LDAP

```
dremio:  
  advancedConfigs:  
    trustStore:  
      enabled: true  
      password: "changeit"  

```

    3. Add the `ad.json` file to your Dremio deployment. This can be done in one of two ways:
**Method 1 (Preferred)**
       * Add the content of your JSON file into your `values-override.yaml` via the `ssoFile` option. This method is detailed in the [Identity Provider](/deploy-dremio/configuring-kubernetes#identity-provider) section.
       * If TLS with a custom truststore is required, use the `configBinaries` option in your `values-overrides.yaml` and pass in the content of your `.jks` truststore file. For more details, see [Additional Config Binary Files](/deploy-dremio/configuring-kubernetes#additional-config-binary-files).
**Method 2**
       * Perform a `helm install` with the `--set-file coordinator.web.auth.ssoFile=<your-local-path>/ad.json` option indicating the location of the `ad.json`. See [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes#step-1-deploy-dremio) for additional information.
       * Use `--set-file dremio.configBinaries.trustStore=<path/to/truststore/jks/file/on/local/machine>` to pass in a local truststore file, if TLS is required.
    1. Edit the `dremio.conf` file, and add the following properties:
Example Dremio Service Configuration 

```
services: {  
    coordinator.enabled: true,  
    coordinator.web.auth.type: "ldap",  
    coordinator.web.auth.config: "ad.json"  
}  

```

    2. Optionally, to configure Dremio to use TLS when connecting to LDAP, perform the following steps:
      1. Configure the LDAP `connectionMode` in `ad.json` for the required level of TLS functionality. See [LDAP Connection Mode](/security/authentication/identity-providers/ldap#ldap-connection-mode).
      2. To configure a truststore for the validation of LDAP TLS certificates, update `dremio.conf` with `javax.net.ssl` settings for the trustStore and trustStorePassword.
Example Truststore Configuration 

```
javax.net.ssl {  
    trustStore: "<path/to/truststore/jks/file>",  
    trustStorePassword: "trustStorePassword"  
}  

```

    3. Copy the modified `dremio.conf` and `ad.json` files to every coordinator node in the Dremio cluster. The location of the `ad.json` file is relative to the `/conf` directory. The path to the file can be absolute; the file can live anywhere in the system.
When using [scale-out coordinators](/what-is-dremio/architecture#scale-out-coordinators), you must ensure that both the `dremio.conf` configuration and the `ad.json` file are present on every coordinator node. Scale-out coordinators require the authentication configuration even when `coordinator.web.enabled: false` is set.


## LDAP Properties[​](/security/authentication/identity-providers/ldap#ldap-properties "Direct link to LDAP Properties")
The `ad.json` file is a JSON-formatted config file that defines how Dremio connects to and communicates with your LDAP/AD server, including how it finds users, groups, and handles secure authentication.
Example Configuration for LDAP using Group List 

```
{  
    "connectionMode": "PLAIN",  
    "servers": [  
        {  
            "hostname": "ldap.example.com",    
            "port": 389  
        }  
    ],  
    "names": {  
        "bindDN": "CN=admin,DC=drem,DC=io",  
        "bindMethod": "UNAUTHENTICATED",  
        "bindPassword": "admin",  
        "baseDN": "dc=drem,dc=io",  
        "userFilter": "&(objectClass=posixAccount)",  
        "userAttributes": {  
            "baseDNs": [  
                "OU=Users,OU=ldaptest,DC=drem,DC=io",  
            ],  
            "id": "uid",  
            "firstname": "givenName",  
            "lastname": "sn",  
            "email": "mail"  
        },  
        "userGroupRelationship": "GROUP_ENTRY_LISTS_USERS",  
        "groupEntryListsUsers": {  
            "userEntryUserIdAttribute": "uid",  
            "groupEntryUserIdAttribute": "memberUid"  
        },  
        "groupDNs": ["cn={0},OU=test,OU=ldaptest,DC=drem,DC=io",  
                     "cn={0},OU=dev,OU=ldaptest,DC=drem,DC=io"],  
        "groupFilter": "|(objectClass=posixGroup)(objectClass=sub)",  
        "autoAdminFirstUser": false  
    }  
}  

```

### LDAP Connection Mode[​](/security/authentication/identity-providers/ldap#ldap-connection-mode "Direct link to LDAP Connection Mode")
The `connectionMode` property configures how Dremio establishes connections to the LDAP/Active Directory servers. The two main secure options — ANY_SSL and TRUSTED_SSL — both use SSL/TLS but differ in how SSL certificates are validated. The modes are:
  * `PLAIN`: The connection between Dremio and the LDAP server is unencrypted. Dremio connects over port 389 by default, the standard LDAP port for unencrypted communication. This mode is appropriate for internal networks and isolated or trusted environments.
  * `ANY_SSL`: Encrypts the connection using SSL/TLS. This mode does not validate the LDAP server's SSL certificate, so it is useful for testing or internal environments where strict certificate checks are not required.
  * `TRUSTED_SSL`: This mode encrypts the connection using SSL/TLS and validates the LDAP server’s SSL certificate against the Java truststore. This mode requires additional configuration in `dremio.conf` with the location of the trust store and its password.


### LDAP Server Configuration[​](/security/authentication/identity-providers/ldap#ldap-server-configuration "Direct link to LDAP Server Configuration")
The `servers` section of an `ad.json` file defines the LDAP servers that Dremio can use for authentication and directory lookups. Each server accepts the following properties:
  * `hostname`: The Fully Qualified Domain Name or IP address of the LDAP server.
  * `port`: The port where the LDAP server accepts connections. Port 389 is the default LDAP when the `connectionMode` is `PLAIN`; port 636 is the default port when using SSL/TLS.


### LDAP User and Groups[​](/security/authentication/identity-providers/ldap#ldap-user-and-groups "Direct link to LDAP User and Groups")
The `names` section maps LDAP attributes to Dremio’s internal user and group fields. LDAP `names` are defined using the following properties:  
| Property  | Required  | Description  |  
| --- | --- | --- |  
| `autoAdminFirstUser`  | No  | The first valid LDAP user to log in to Dremio is given the Admin role by default. This behavior, defined by `autoAdminFirstUser: true`, is included in the `ad.json` file. Alternatively, you can specify a list of users and/or groups to be given the Admin role during initial login; it is used for bootstrapping only. See [Admin Users](/security/authentication/identity-providers/ldap#admin-users) for additional configuration information.  |  
| `baseDN`  | Yes  | A base distinguished name is the search's root path. If `userAttributes.baseDNs` or `groupAttributes.baseDNs` are specified, they override `baseDN` for search purposes.  |  
| `bindDN`  | No  | A bind distinguished name is a client's username to authenticate (bind) to the LDAP directory server. This property is not required when using a `bindMethod` of `ANONYMOUS`. In particular, `CN=admin,DC=drem,DC=io` must not be used.  |  
| `bindMethod`  | No  | The authentication method: 
  * `ANONYMOUS`: Connect anonymously to the LDAP server. When authenticating to Dremio, empty passwords for users are not allowed. 
  * `SIMPLE_BIND`: Default. Connect and authenticate to the LDAP server using `bindDN` and `bindPassword`. 
  * `UNAUTHENTICATED`: Connect to the LDAP server using an unauthenticated bind. `bindDN` is required. 

 |  
| `bindPassword`  | No  | Password credential for the user who connects from the Dremio LDAP client to the LDAP server. `bindPassword` can be encrypted using the `dremio-admin encrypt` CLI command. This property must not be present if you are using `ANONYMOUS` or `UNAUTHENTICATED` for `bindMethod` mode. See [Bind Password Options](/security/authentication/identity-providers/ldap#bind-password-options) for additional configuration information.  |  
| `email`  | No  | Attribute for the email address.  |  
| `firstname`  | No  | Attribute for the first name.  |  
| `groupAttributes`  | No  | A mapping of LDAP group attributes to Dremio group attributes. The `baseDN`, `searchScope`, and `id` properties are used.  |  
| `groupDNs`  | No  | A group distinguished name refers to the full path of a specific group object used for organizing users.  |  
| `groupFilter`  | Yes  | LDAP filter for groups.  |  
| `groupMembership`  | No  | Value returned by the Dremio `memberOf()` function. This attribute specifies the groups containing a user or a group.  |  
| `groupRecursive`  | No  | Attribute of a user or a group that lists transitive group membership.  |  
| `id`  | No  | If used with the `userAttributes` property, `id` is the attribute for the login name, defaulting to `sAMAccountName`. If used with the `groupAttributes` property, `id` is the attribute for the group name, defaulting to `CN`.  |  
| `lastname`  | No  | Attribute for the last name.  |  
| `searchScope`  | No  | Scope of user searches: 
  * `BASE`: Match the exact entry. 
  * `ONE`: Searches immediate children below the specified `baseDN`. 
  * `SUB_TREE`: Default. Searches subtrees below the specified `baseDN`. 

 |  
| `userAttributes`  | No  | A mapping of LDAP user attributes to Dremio user attributes. This property should include `firstname`, `lastname`, and `email`.  |  
| `userDNs`  | No  | A user distinguished name is the unique path that identifies a specific user object.  |  
| `userFilter`  | Yes  | LDAP filter for validating users. Only users who fit the specific criteria are allowed to authenticate.  |  
| `userGroupRelationship`  | No  | Determines whether you are implementing lists based on users or groups. 
  * `GROUP_ENTRY_LISTS_USERS`: Specifies whether the group entry in LDAP lists the users that belong to it. 
  * `USER_ENTRY_LISTS_GROUPS`: Default. Specifies whether the user entry in LDAP lists the groups to which the user belongs. The group attribute in LDAP is configured by the `groupMembership` property. 

 |  
#### Defining Users[​](/security/authentication/identity-providers/ldap#defining-users "Direct link to Defining Users")
##### Using User Distinguished Names[​](/security/authentication/identity-providers/ldap#using-user-distinguished-names "Direct link to Using User Distinguished Names")
This approach specifies a list of templates for `userDN`. The placeholder `{0}` is replaced with the username entered by the user, and that Distinguished Name (DN) is used during LDAP bind. In the specified order, Dremio attempts to bind to the provided `userDN`. In the DN-based approach, the `baseDN`, `searchScope`, and `id` properties cannot be specified under `userAttributes`.
userDNs example

```
"userDNs": ["cn={0},dc=staticsecurity,dc=dremio,dc=com"],  
    "userAttributes": {  
    "firstname": "givenName",  
    "lastname": "sn",  
    "email": "mail"  
}  

```

##### Using User Attributes[​](/security/authentication/identity-providers/ldap#using-user-attributes "Direct link to Using User Attributes")
In this approach, you map LDAP user attributes to Dremio user attributes. The `userDN` field must not be specified in the attribute-based approach. Do not change the value of `id` in the `ad.conf` file after you start Dremio. Changing the value can result in the loss of user privileges.
userAttributes example

```
"userAttributes": {  
    "baseDNs": [  
        "OU=test,OU=ad,DC=drem,DC=io"  
    ],  
    "searchScope": "SUB_TREE",  
    "id": "sAMAccountName",  
    "firstname": "givenName",  
    "lastname": "sn",  
    "email": "mail"  
}  

```

##### Using userFilter[​](/security/authentication/identity-providers/ldap#using-userfilter "Direct link to Using userFilter")
The following example uses the `userFilter` property to limit access to engineering group members.
userFilter example

```
"userFilter": "&(objectClass=user)(memberOf=cn=engineering,OU=Groups,OU=ad,DC=drem,DC=io)",  

```

#### Defining Groups[​](/security/authentication/identity-providers/ldap#defining-groups "Direct link to Defining Groups")
##### Using Group Distinguished Names[​](/security/authentication/identity-providers/ldap#using-group-distinguished-names "Direct link to Using Group Distinguished Names")
This approach specifies a list of templates for group Distinguished Names (DNs). The placeholder `{0}` is replaced with the group name entered by the user. Dremio attempts to search for the given `groupDNs` in the specified order. The `groupAttributes` property must not be specified in the DN-based approach.
Example using Group Distinguised Names 

```
"groupDNs": ["cn={0},OU=engg,OU=test,OU=ad,DC=drem,DC=io"]  

```

##### Using Group Attributes[​](/security/authentication/identity-providers/ldap#using-group-attributes "Direct link to Using Group Attributes")
In this method, use the `groupAttributes` property to specify a list of `baseDNs` and group name IDs. These properties map LDAP group attributes to Dremio group attributes. The `baseDNs`, `searchScope`, and `id` properties are required. The `groupDNs` field must not be specified in the attribute-based approach.
groupAttributes example

```
"groupAttributes": {  
    "baseDNs": ["dc=roles,dc=dremio,dc=com"],  
    "searchScope": "SUB_TREE",  
    "id": "CN"  
}  

```

#### Defining User-Group Relationships[​](/security/authentication/identity-providers/ldap#defining-user-group-relationships "Direct link to Defining User-Group Relationships")
The relationship between users and groups can be defined with one of the following methods:
  * Group memberships
  * Group lists


##### Group Membership Method[​](/security/authentication/identity-providers/ldap#group-membership-method "Direct link to Group Membership Method")
The group membership method implements user entries in LDAP that list the groups to which the user belongs. The user entries in LDAP are configured to list their group membership via the internal field `memberOf`.
For example,
  * Dan is part of the **BI** group
  * The BI group is part of the engineering group,
  * `groupMembership` property will contain only the BI group, but the `groupRecursive` property will contain the engineering group.

Example settings for groupMembership and groupRecursive properties

```
"groupMembership": "memberOf",  
"groupRecursive": "transitive-memberOf",  

```

To establish this user-group relationship:
  * Specify `groupMembership` property.
  * Specify (if applicable) the `groupRecursive` property.


If you include the `groupRecursive` key, ensure the value is the correct property for recursive lookups for your LDAP implementation. If you do not specify the proper property, Dremio skips recursive lookup and finds only the group membership. If you omit the `groupRecursive` key-value pair from your configuration, Dremio defaults to recursive lookup.
You can also specify the `"userGroupRelationship": "USER_ENTRY_LISTS_GROUPS"` property-value. However, this property is optional since it is the default.
Example Group Membership Configuration 

```
{  
    "connectionMode": "PLAIN",  
    "servers": [  
        {  
            "hostname": "<LDAP_HOST>",  
            "port": 389  
        }  
    ],  
    "names": {  
        "bindDN": "CN=Admin,OU=Users,OU=ad,DC=drem,DC=io",  
        "bindPassword": "password",  
        "baseDN": "dc=dremio,dc=io",  
        "userFilter": "&(objectClass=user)(|(memberOf=CN=QA,OU=temps,OU=test,OU=ad,DC=drem,DC=io)(memberOf=CN=qa,OU=engg,OU=test,OU=ad,DC=drem,DC=io))",  
        "userAttributes": {  
            "baseDNs": [  
                "OU=test,OU=ad,DC=drem,DC=io"  
            ],  
            "searchScope": "SUB_TREE",  
            "id": "sAMAccountName",  
            "firstname": "givenName",  
            "lastname": "sn",  
            "email": "mail"  
        },  
        "groupMembership": "memberOf",  
        "groupRecursive": "transitive-memberOf",  
        "groupDNs": ["cn={0},OU=engg,OU=test,OU=ad,DC=drem,DC=io"],  
        "groupFilter": "(objectClass=group)",  
        "autoAdminFirstUser": true  
    }  
}  

```

##### Group List Method[​](/security/authentication/identity-providers/ldap#group-list-method "Direct link to Group List Method")
The group list method implements user-group relationships where the group entry lists the users that belong to that group.
For example,
  * `uid` is the ID attribute used for the user entry, and `memberUid` is the ID attribute used for the group entry.
  * Dan's ID is 1234, represented by the attribute `uid` in Dan's LDAP records.
  * Dan is part of the **BI** group
  * The LDAP entry for group **BI** lists `memberUid = 1234`, indicating that Dan is a valid group member.

Example Group List 

```
"userGroupRelationship": "GROUP_ENTRY_LISTS_USERS",  
"groupEntryListsUsers": {  
    "userEntryUserIdAttribute": "uid",  
    "groupEntryUserIdAttribute": "memberUid"  
}  

```

To establish user-group relationships in `ad.json` using the group list method:
  * Set `userGroupRelationship` to `GROUP_ENTRY_LISTS_USERS`.
  * Specify the `groupEntryListsUsers` property and its sub-properties, `userEntryUserIdAttribute` and `groupEntryUserIdAttribute`.

Example Group List Configuration

```
{  
    "connectionMode": "PLAIN",  
    "servers": [  
        {  
            "hostname": "host_ip",  
            "port": 389  
        }  
    ],  
    "names": {  
        "bindDN": "CN=admin,DC=drem,DC=io",  
        "bindMethod": "UNAUTHENTICATED",  
        "bindPassword": "admin",  
        "baseDN": "dc=drem,dc=io",  
        "userFilter": "&(objectClass=posixAccount)",  
        "userAttributes": {  
            "baseDNs": [  
                "OU=Users,OU=ldaptest,DC=drem,DC=io",  
            ],  
            "id": "uid",  
            "firstname": "givenName",  
            "lastname": "sn",  
            "email": "mail"  
        },  
        "userGroupRelationship": "GROUP_ENTRY_LISTS_USERS",  
        "groupEntryListsUsers": {  
            "userEntryUserIdAttribute": "uid",  
            "groupEntryUserIdAttribute": "memberUid"  
        },  
        "groupDNs": ["cn={0},OU=test,OU=ldaptest,DC=drem,DC=io",  
                     "cn={0},OU=dev,OU=ldaptest,DC=drem,DC=io"],  
        "groupFilter": "|(objectClass=posixGroup)(objectClass=sub)",  
        "autoAdminFirstUser": false  
    }  
}  

```

### Bind Password Options[​](/security/authentication/identity-providers/ldap#bind-password-options "Direct link to Bind Password Options")
Dremio offers several options for managing the bind password.
#### Encryption[​](/security/authentication/identity-providers/ldap#encryption "Direct link to Encryption")
For customers with stringent security standards and requirements, password encryption provides a secure method for communicating key information with the LDAP service. Encryption is accomplished using the CLI command [`dremio-admin encrypt`](/reference/admin-cli/encryption).
To encrypt the bind password, follow these steps:
  1. Run `dremio-admin encrypt` as the `dremio` service user.
LDAP secret Encryption 

```
sudo su - dremio bin/dremio-admin encrypt <yourSecret>  

```

If running the command as the `dremio` user is impossible, change the owner and group of the `$DREMIO_HOME/data/security` folder and underlying files to the `dremio` service user.
Dremio outputs:
Example LDAP Encryption Output

```
secret:1.FxLevnDdoHx58x7VZmBpNExUiM76_u7XAXo1SJ8mCJxzeC1SirK2Jm5aBRR-h2_r8iypOAcRYSzH4uyP33Vg6Fh94bV6evuQ.wENZ7fgdJBw92wy4DiPhpJRzNP07wBaVpspv8KygjMfYV2en3YPFZw==  

```

  2. Copy the entire output to `bindPassword` in `ad.json`.
  3. Copy the modified `ad.json` file to every coordinator node in the Dremio cluster.


#### Other Bind Password Options[​](/security/authentication/identity-providers/ldap#other-bind-password-options "Direct link to Other Bind Password Options")
Other options are available for `bindPassword`:
  * `env`: the `bindPassword` is set to `env:ldap` with the environment variable set by the command `export ldap `secret`` where ``secret`` is the output.
  * `file`: the `bindPassword` is set to `file:///tmp/test.file` where the file specified contains the output secret.
  * `data`: The secret is in base64 format. The bindPassword is then set to `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ==`.


Options `env` and `file` apply to the local node. If you use a multi-coordinator configuration, you must do this for each coordinator node. However, this method contains the raw secret in the `env` scheme and file. Only `secret` uses an encrypted secret.
### Admin Users[​](/security/authentication/identity-providers/ldap#admin-users "Direct link to Admin Users")
To specify users/groups as administrators up-front, during initial login:
  1. In the `ad.json` file, set `autoAdminFirstUser` to false.
Example property for defining Admin users

```
"autoAdminFirstUser": false  

```

  2. Create a file called `bootstrap-admin-users.json` that contains `users` and `groups` arrays to specify the names of the users and groups that should belong to the `ADMIN` role. Use the Common Name (CN) for each user and group you list in the arrays.
Example settings for users and groups properties

```
{  
    users: ["joe", "bob"],  
    groups: ["marketers", "sales wizards"]  
}  

```

When you set `autoAdminFirstUser` to `false`, then you **must** specify users/groups in a `bootstrap-admin-users.json` file. Otherwise, an administrator won't be specified. The users/groups specified in the `bootstrap-admin-users.json` file are used only during initial login and when `autoAdminFirstUser` is set to `false`. To add other users or groups to the `Admin` role **after the initial login** , use the Dremio console.
  3. Add the configuration to your deployment:
     * Kubernetes
     * Standalone
This can be done in one of two ways:
**Method 1 (Preferred)**
Add the configuration of your `bootstrap-admin-users.json` file to your `values-override.yaml` via the `configFiles` option. This approach is detailed in [Additional Config Files](/deploy-dremio/configuring-kubernetes#additional-config-files).
**Method 2**
Perform a `helm install` with the `--set-file "dremio.configFiles.bootstrap-admin-users\.json"=/your/local/path/here` option, indicating the location of the `bootstrap-admin-users.json` file. For additional information, see step 1 in [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes#step-1-deploy-dremio).
    1. Place `bootstrap-admin-users.json` under the Dremio configuration directory.
    2. Start Dremio


Was this page helpful?
[Previous Identity Providers](/security/authentication/identity-providers)[Next Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Identity Providers](/security/authentication/identity-providers)[Next Microsoft Entra ID](/security/authentication/identity-providers/microsoft-entra-id)
