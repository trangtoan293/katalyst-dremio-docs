---
url: /data-sources/databases/postgres
title: "PostgreSQL | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64040.611647416
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Databases](/data-sources/databases)
  * PostgreSQL

Version: current [26.x]
On this page
# PostgreSQL
## Configuring PostgreSQL as a Source[​](/data-sources/databases/postgres#configuring-postgresql-as-a-source "Direct link to Configuring PostgreSQL as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Databases** , select **PostgreSQL**.


### General[​](/data-sources/databases/postgres#general "Direct link to General")
Under **Name** , enter the name to identify the data source in Dremio. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### Connection[​](/data-sources/databases/postgres#connection "Direct link to Connection")  
| Name  | Description  |  
| --- | --- |  
| Host  | PostgreSQL host name.  |  
| Port  | PostgreSQL port number. Defaults to 5432.  |  
| Database  | Database name.  |  
| Encrypt connection  | Enables encrypted connections to PostgreSQL using SSL. Encryption validation mode can be modified under Advanced Options.  |  
#### Authentication[​](/data-sources/databases/postgres#authentication "Direct link to Authentication")
Select an authentication option:
  * **No Authentication**
  * **Master Credentials** (default):
    * Username: PostgreSQL username
    * Password: Select the password store from the dropdown menu:
      * Dremio: Provide the password in plain text. Dremio stores the password.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored password using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the password, which is available in the AWS web console or by using command-line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the password reference in the required format.
    * Secret Resource URL: Provide the username and secret resource URL for Dremio to use for the source.
  * Kerberos authentication is also available. See [Kerberos Authentication for PostgreSQL](/data-sources/databases/postgres#kerberos-authentication-for-postgresql).


### Advanced Options[​](/data-sources/databases/postgres#advanced-options "Direct link to Advanced Options")
  * **Record Fetch Size** : Number of records to fetch at once. Set to 0 (zero) to have Dremio automatically decide. By default, this is set to _10_.
  * **Maximum idle connections** : The total number of connections allowed to be idle at a given time. By default, this is set to _8_.
  * **Connection idle time (s)** : The amount of time (in seconds) allowed for a connection to remain idle before the connection is terminated. By default, this is set to _60_.
  * **Query timeout** : The amount of time (in seconds) allowed to wait for the results of a query. If this time expires, the connection being used is returned to an idle state.
  * **Enable legacy dialect**


#### Encryption[​](/data-sources/databases/postgres#encryption "Direct link to Encryption")
Validation modes include:
  * Validate certificate and hostname (default)
  * Validate certificate only
  * Do not validate certificate or hostname


### Reflection Refresh[​](/data-sources/databases/postgres#reflection-refresh "Direct link to Reflection Refresh")
  * Never refresh – Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire – Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/databases/postgres#metadata "Direct link to Metadata")
#### Dataset Handling[​](/data-sources/databases/postgres#dataset-handling "Direct link to Dataset Handling")
  * Remove dataset definitions if underlying data is unavailable (Default).  
If this box is _not_ checked and the underlying files under a folder are removed or the folder/source is not accessible, Dremio does not remove the dataset definitions. This option is useful in cases when files are temporarily deleted and put back in place with new sets of files.


#### Metadata Refresh[​](/data-sources/databases/postgres#metadata-refresh "Direct link to Metadata Refresh")
  * **Dataset Discovery** – Refresh interval for top-level source object names such as names of databases and tables.
    * Fetch every – Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
  * **Dataset Details** – The metadata that Dremio needs for query planning such as information needed for fields, types, shards, statistics, and locality.
    * Fetch mode – Specify either Only Queried Datasets, All Datasets, or As Needed. Default: Only Queried Datasets
      * Only Queried Datasets – Dremio updates details for previously queried objects in a source. This mode increases query performance because less work is needed at query time for these datasets.
      * All Datasets – Dremio updates details for all datasets in a source. This mode increases query performance because less work is needed at query time.
      * As Needed – Dremio updates details for a dataset at query time. This mode minimizes metadata queries on a source when not used but might lead to longer planning times.
    * Fetch every – Specify fetch time based on minutes, hours, days, or weeks. Default: 1 hour
    * Expire after – Specify expiration time based on minutes, hours, days, or weeks. Default: 3 hours


### Privileges[​](/data-sources/databases/postgres#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Update a PostgreSQL Source[​](/data-sources/databases/postgres#update-a-postgresql-source "Direct link to Update a PostgreSQL Source")
To update a PostgreSQL source:
  1. On the Datasets page, under **Databases** in the panel on the left, find the name of the source you want to update.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring PostgreSQL as a Source](/data-sources/databases/postgres#configuring-postgresql-as-a-source).
  4. Click **Save**.


## Delete a PostgreSQL Source[​](/data-sources/databases/postgres#delete-a-postgresql-source "Direct link to Delete a PostgreSQL Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete a PostgreSQL source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Databases** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source. Deleting a source causes all downstream views that depend on objects in the source to break.


## Predicate Pushdowns[​](/data-sources/databases/postgres#predicate-pushdowns "Direct link to Predicate Pushdowns")
Dremio delegates the execution of these expressions and functions to the database being queried, often dramatically improving query performance. It can also offload entire SQL queries that include one or more of these expressions and functions.
`*`, `+`, `-`, `/`, `%`  
`<`, `<=`, `<>`, `=`, `>`, `>=`, `!=`  
AND, NOT, OR, `||`  
ABS  
ACOS  
ADD_MONTHS  
ASIN  
ATAN  
ATAN2  
AVG  
CAST  
CBRT  
CEIL  
CEILING  
CHAR_LENGTH  
CHARACTER_LENGTH  
CONCAT  
COS  
COT  
COVAR_POP  
COVAR_SAMP  
DATE_ADD  
DATE_SUB  
DATE_TRUNC_CENTURY  
DATE_TRUNC_DAY  
DATE_TRUNC_DECADE  
DATE_TRUNC_HOUR  
DATE_TRUNC_MINUTE  
DATE_TRUNC_MONTH  
DATE_TRUNC_QUARTER  
DATE_TRUNC_SECOND  
DATE_TRUNC_WEEK  
DATE_TRUNC_YEAR  
DEGREES  
E  
EXP  
EXTRACT_CENTURY  
EXTRACT_DAY  
EXTRACT_DECADE  
EXTRACT_DOW  
EXTRACT_DOY  
EXTRACT_EPOCH  
EXTRACT_HOUR  
EXTRACT_MILLENNIUM  
EXTRACT_MINUTE  
EXTRACT_MONTH  
EXTRACT_QUARTER  
EXTRACT_SECOND  
EXTRACT_WEEK  
EXTRACT_YEAR  
FLOOR  
IS DISTINCT FROM  
IS NOT DISTINCT FROM  
IS NOT NULL  
IS NULL  
LAST_DAY  
LCASE  
LEFT  
LENGTH  
LIKE  
LN  
LOCATE  
LOG  
LOG10  
LOWER  
LPAD  
LTRIM  
MAX  
MEDIAN  
MIN  
MOD  
PERCENT_CONT  
PERCENT_DISC  
PI  
POSITION  
POW  
POWER  
RADIANS  
REGEXP_LIKE  
REPLACE  
REVERSE  
RIGHT  
ROUND  
RPAD  
RTRIM  
SIGN  
SIN  
SQRT  
STDDEV  
STDDEV_POP  
STDDEV_SAMP  
SUBSTR  
SUBSTRING  
SUM  
TAN  
TO_CHAR  
TO_DATE  
TRIM  
TRUNC  
TRUNCATE  
UCASE  
UPPER  
VAR_POP  
VAR_SAMP  

## Kerberos Authentication for PostgreSQL[​](/data-sources/databases/postgres#kerberos-authentication-for-postgresql "Direct link to Kerberos Authentication for PostgreSQL")
Dremio offers an option to authenticate with PostgreSQL databases using Kerberos. This approach uses Java's JAAS framework with `Krb5LoginModule` to consume credentials from a Kerberos ticket cache.
### Prerequisites[​](/data-sources/databases/postgres#prerequisites "Direct link to Prerequisites")
Before configuring Dremio, ensure the following prerequisites are met:
  * A Kerberos realm and Key Distribution Center (KDC) reachable from all Dremio coordinator and executor nodes
  * A `krb5.conf` file that maps your domains and hosts to the Kerberos realm and KDC. Your Kerberos administrator can provide this, or you can create one using the example in this guide.
  * A Kerberos ticket cache file for a service principal with access to the target PostgreSQL database, which your infrastructure team generates from a keytab and refreshes before ticket expiration. This file is typically handled by a sidecar container in Kubernetes deployments and by a cron job or systemd timer in VM deployments. Dremio reads from the ticket cache but does not refresh it.
  * JDK 11 or later


### Configuration Steps[​](/data-sources/databases/postgres#configuration-steps "Direct link to Configuration Steps")
  * Kubernetes
  * VMs


  1. Configure `krb5.conf`.
The `krb5.conf` file tells the JVM how to map hostnames to Kerberos realms and where to find KDCs.
Add the file content to your `values-overrides.yaml` using the [`configFiles`](/deploy-dremio/configuring-kubernetes#additional-configuration) option. The Helm chart will create a ConfigMap and mount it into the Dremio containers automatically.
`krb5.conf` configuration in `values-overrides.yaml`

```
dremio:  
  configFiles:  
    krb5.conf: |  
      [libdefaults]  
        default_realm = REALM.EXAMPLE.COM  
        dns_lookup_kdc = false  
        rdns = false  
        ticket_lifetime = 10h  
        renew_lifetime = 7d  
        udp_preference_limit = 1  
  
      [realms]  
        REALM.EXAMPLE.COM = {  
          kdc = kdc01.example.com  
          kdc = kdc02.example.com  
          admin_server = kdc01.example.com  
        }  
  
      [domain_realm]  
        .example.com = REALM.EXAMPLE.COM  
        example.com = REALM.EXAMPLE.COM  

```

**Configuration Guidelines**
     * `default_realm` must match your realm name (uppercase by convention).
     * List at least one reachable KDC under `[realms]`. Add multiple for high availability.
     * In `[domain_realm]`, map your DNS suffixes to the realm so hostname-to-realm resolution works correctly.
     * Set `dns_lookup_kdc=true` only if your DNS publishes SRV records for KDCs; otherwise, specify KDC hosts explicitly.
     * Set `udp_preference_limit = 1` to force TCP and avoid UDP fragmentation issues.
  2. Configure the ticket cache.
Your infrastructure team provides the Kerberos ticket cache and is responsible for refreshing it before tickets expire.
The ticket cache is typically mounted into the Dremio containers as a shared volume, refreshed by a sidecar container. Configuring the sidecar and shared volume requires customizing the Dremio Helm chart. See [Downloading Dremio's Helm Charts](/deploy-dremio/configuring-kubernetes#downloading-dremios-helm-charts) for information on customizing the chart.
Set the `KRB5CCNAME` environment variable in your `values-overrides.yaml` to point to the cache location:
`KRB5CCNAME` configuration `values-overrides.yaml`

```
coordinator:  
  extraEnvs:  
    - name: KRB5CCNAME  
      value: "FILE:/var/kerberos/krb5cache"  
  
executor:  
  extraEnvs:  
    - name: KRB5CCNAME  
      value: "FILE:/var/kerberos/krb5cache"  

```

Ensure the ticket cache is:
     * Available at a consistent path on all coordinator and executor nodes
     * Readable by the Dremio process
     * Refreshed before tickets expire
  3. Create the Java Authentication and Authorization Service (JAAS) file.
The JAAS configuration tells Java how to authenticate using the Kerberos ticket cache.
Add the file content to your `values-overrides.yaml` using the `configFiles` option:
JAAS configuration in `values-overrides.yaml`

```
dremio:  
  configFiles:  
    jaas.conf: |  
      pgjdbc {  
        com.sun.security.auth.module.Krb5LoginModule required  
          doNotPrompt=true  
          useTicketCache=true  
          renewTGT=true;  
      };  

```

**JAAS Options**
     * `doNotPrompt=true` – Prevents password prompts; fails if no credentials are available.
     * `useTicketCache=true` – Uses tickets from the cache specified by KRB5CCNAME.
     * `renewTGT=true` – Attempts to renew the TGT if possible.
     * `debug=true` – (Optional) Enables verbose JAAS logging for troubleshooting.
  4. Configure the JVM options for Dremio.
Dremio's JVM needs to know where to find the Kerberos and JAAS configuration files.
When using `configFiles` in your `values-overrides.yaml`, the files are mounted at `/opt/dremio/conf/`. Add the JVM options using `extraStartParams` in your `values-overrides.yaml`:
JVM option configurations in `values-overrides.yaml`

```
coordinator:  
  extraStartParams: >-  
    -Djava.security.krb5.conf=/opt/dremio/conf/krb5.conf  
    -Djava.security.auth.login.config=/opt/dremio/conf/jaas.conf  
    -Djavax.security.auth.useSubjectCredsOnly=false  

```

**JVM Options**
     * `-Djava.security.krb5.conf` – Path to the krb5.conf file.
     * `-Djava.security.auth.login.config` – Path to the jaas.conf file.
     * `-Djavax.security.auth.useSubjectCredsOnly=false` – Allows JGSS to use default credentials directly.
These JVM options must be configured on the coordinator node.
  5. Add the PostgreSQL source in Dremio.
When adding your PostgreSQL source in Dremio:
    1. Select **No Authentication** as the authentication method.
    2. Navigate to **Advanced Options**.
    3. Add the following connection properties:  
| Property  | Value  |  
| --- | --- |  
| `jaasApplicationName`  |  `pgjdbc` (must match the entry name in jaas.conf)  |  
| `kerberosServerName`  |  `postgres` (the Kerberos service name for PostgreSQL). This property is equivalent to libpq's `PGKRBSRVNAME` environment variable. It defaults to `postgres` if not specified but should match the service name configured in your PostgreSQL server's Kerberos setup.  |  
| `user`  | Your Kerberos principal (e.g., `service@REALM.EXAMPLE.COM`)  |  


  1. Configure `krb5.conf`.
The `krb5.conf` file tells the JVM how to map hostnames to Kerberos realms and where to find KDCs.
Example `krb5.conf`

```
[libdefaults]  
  default_realm = REALM.EXAMPLE.COM  
  dns_lookup_kdc = false  
  rdns = false  
  ticket_lifetime = 10h  
  renew_lifetime = 7d  
  udp_preference_limit = 1  
  
[realms]  
  REALM.EXAMPLE.COM = {  
    kdc = kdc01.example.com  
    kdc = kdc02.example.com  
    admin_server = kdc01.example.com  
  }  
  
[domain_realm]  
  .example.com = REALM.EXAMPLE.COM  
  example.com = REALM.EXAMPLE.COM  

```

Place this file on each coordinator node at a consistent path (e.g., `/etc/krb5.conf`).
You will reference this path in the JVM options in step 4.
**Configuration Guidelines**
     * `default_realm` must match your realm name (uppercase by convention).
     * List at least one reachable KDC under `[realms]`. Add multiple for high availability.
     * In `[domain_realm]`, map your DNS suffixes to the realm so hostname-to-realm resolution works correctly.
     * Set `dns_lookup_kdc=true` only if your DNS publishes Servcies (SRV) records for KDCs; otherwise, specify KDC hosts explicitly.
     * Set `udp_preference_limit = 1` to force TCP and avoid UDP fragmentation issues.
  2. Configure the ticket cache.
Your infrastructure team provides the Kerberos ticket cache and is responsible for refreshing it before tickets expire.
The ticket cache is typically written to a path on each coordinator and executor node, refreshed by a cron job or systemd timer.
Set the `KRB5CCNAME` environment variable in your shell environment or Dremio startup scripts:
`KRB5CCNAME` creation in startup scripts

```
export KRB5CCNAME="FILE:/var/kerberos/krb5cache"  

```

Ensure the ticket cache is:
     * Available at a consistent path on all coordinator and executor nodes
     * Readable by the Dremio process
     * Refreshed before tickets expire
  3. Create the Java Authentication and Authorization Service (JAAS) file.
The JAAS configuration tells Java how to authenticate using the Kerberos ticket cache.
Create a `jaas.conf` file on each coordinator at a consistent path (e.g., `/etc/jaas.conf`) with the following content:
Example `jaas.conf`

```
pgjdbc {  
  com.sun.security.auth.module.Krb5LoginModule required  
    doNotPrompt=true  
    useTicketCache=true  
    renewTGT=true;  
};  

```

**JAAS Options**
     * `doNotPrompt=true` – Prevents password prompts; fails if no credentials are available.
     * `useTicketCache=true` – Uses tickets from the cache specified by KRB5CCNAME.
     * `renewTGT=true` – Attempts to renew the Ticket-Granting Ticket (TGT) if possible.
     * `debug=true` – (Optional) Enables verbose JAAS logging for troubleshooting.
  4. Configure the JVM options for Dremio.
Dremio's JVM needs to know where to find the Kerberos and JAAS configuration files.
Add the following to `DREMIO_JAVA_SERVER_EXTRA_OPTS` in your Dremio configuration:
Example JVM option configuration in `DREMIO_JAVA_SERVER_EXTRA_OPTS`

```
DREMIO_JAVA_SERVER_EXTRA_OPTS='-Djava.security.krb5.conf=/etc/krb5.conf \  
  -Djava.security.auth.login.config=/etc/jaas.conf \  
  -Djavax.security.auth.useSubjectCredsOnly=false'  

```

Update the paths to match where you placed the configuration files.
**JVM Options**
     * `-Djava.security.krb5.conf` – Path to the krb5.conf file
     * `-Djava.security.auth.login.config` – Path to the jaas.conf file
     * `-Djavax.security.auth.useSubjectCredsOnly=false` – Allows Java Generic Security Services (JGSS) to use default credentials directly
These JVM options must be configured on coordinator nodes.
  5. Add the PostgreSQL source in Dremio.
When adding your PostgreSQL source in Dremio:
    1. Select **No Authentication** as the authentication method.
    2. Navigate to **Advanced Options**.
    3. Add the following connection properties:  
| Property  | Value  |  
| --- | --- |  
| `jaasApplicationName`  |  `pgjdbc` (must match the entry name in jaas.conf)  |  
| `kerberosServerName`  |  `postgres` (the Kerberos service name for PostgreSQL). This property is equivalent to libpq's `PGKRBSRVNAME` environment variable. It defaults to `postgres` if not specified but should match the service name configured in your PostgreSQL server's Kerberos setup.  |  
| `user`  | Your Kerberos principal (e.g., `service@REALM.EXAMPLE.COM`)  |  


### Troubleshooting[​](/data-sources/databases/postgres#troubleshooting "Direct link to Troubleshooting")
  * **Realm/KDC lookup errors** : Verify the `[realms]` and `[domain_realm]` sections in krb5.conf are correctly configured.
  * **"Server not found in Kerberos database" errors** : Ensure you are connecting to the PostgreSQL server using its correct Fully-Qualified Domain Name (FQDN) and that the FQDN maps to the expected realm in `[domain_realm]`.
  * **Enable debug logging** : Add `debug=true` to your jaas.conf entry for verbose JAAS output. You can also add `-Dsun.security.krb5.debug=true` to JVM options for Kerberos library debugging.
  * **Ticket cache not found or expired** : Verify the ticket cache is mounted correctly and that your infrastructure's refresh process is running. Check that the `KRB5CCNAME` environment variable points to the correct path.
  * **Permission errors** : Verify the Dremio process user can read the ticket cache, krb5.conf, and jaas.conf files.


## For More Information[​](/data-sources/databases/postgres#for-more-information "Direct link to For More Information")
  * See [PostgreSQL Data Types](/reference/sql/data-types/mappings/postgres) for information about mapping to Dremio data types.


Was this page helpful?
[Previous Oracle](/data-sources/databases/oracle)[Next SAP HANA](/data-sources/databases/sap-hana)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Oracle](/data-sources/databases/oracle)[Next SAP HANA](/data-sources/databases/sap-hana)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fdatabases%2Fpostgres%2F&_biz_t=1777950360352&_biz_i=PostgreSQL%20%7C%20Dremio%20Documentation&_biz_n=87&rnd=555807&cdn_o=a&_biz_z=1777950360352)
