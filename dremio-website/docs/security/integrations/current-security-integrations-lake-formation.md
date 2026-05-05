---
url: /security/integrations/lake-formation
title: "AWS Lake Formation | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64078.129441583
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Integrations](/security/integrations)
  * AWS Lake Formation

Version: current [26.x]
On this page
# Integrate with AWS Lake Formation Enterprise
Lake Formation provides access controls for datasets in the AWS Glue Data Catalog and is used to define security policies from a centralized location that may be shared across multiple tools. Dremio may be configured to refer to this service to verify access for a user to contained datasets.
## Requirements[​](/security/integrations/lake-formation#requirements "Direct link to Requirements")
  * [Dremio v19.0+](/release-notes/unsupported-releases/version-1900-release-notes)
  * Identity Provider service (e.g., Microsoft Entra ID, [LDAP](/security/authentication/identity-providers/ldap)) set up
    * (Recommended) 
  * [AWS Glue Data Catalog](/data-sources/lakehouse-catalogs/aws-glue-catalog) connected to Dremio
    * [User and Group ARN prefixes specified and enabled](/security/integrations/lake-formation#configuring-sources-for-lake-formation)


## Lake Formation Workflow[​](/security/integrations/lake-formation#lake-formation-workflow "Direct link to Lake Formation Workflow")
When Lake Formation is properly configured, Dremio adheres to the following workflow each time an end user attempts to access, edit, or query datasets with managed privileges:
  1. Dremio enforces [access control](/security/rbac). See [Configuring Sources for Lake Formation](/security/integrations/lake-formation#configuring-sources-for-lake-formation) below for access control recommendations.
  2. Dremio checks each table to determine if those stored in the AWS Glue source are configured to use Lake Formation for security.
     * If one or more datasets leverage Lake Formation, Dremio determines the user ARNs to use when checking against Lake Formation.
  3. Dremio queries Lake Formation to determine a user's access level to the datasets using the user/group ARNs.
     * If the user has access to the datasets specified within the query's scope, the query proceeds.
     * If the user lacks access, the query fails with a permission error.


## Configuring Sources for Lake Formation[​](/security/integrations/lake-formation#configuring-sources-for-lake-formation "Direct link to Configuring Sources for Lake Formation")
Lake Formation integration is dependent on the mapping of user/group names in Dremio to the IAM user/group ARNs used by AWS.
To configure an existing or new AWS Glue source, you must set the following options:
  1. From your existing source or upon creating an **AWS Glue Catalog** source, navigate to the Advanced Options tab.
  2. Enable **Enforce AWS Lake Formation access permissions on datasets**.
  3. Fill in the user and group prefix settings as instructed with the 
     * User prefix with SAML: `arn:aws:iam::`AWS_ACCOUNT_ID`:saml-provider/`PROVIDER_NAME_IN_AWS`:user/`
     * Group prefix with SAML: `arn:aws:iam::`AWS_ACCOUNT_ID`:saml-provider/`PROVIDER_NAME_IN_AWS`:group/`
Best Practice: On the Privileges tab, we recommend enabling the **Select** privilege for **All Users** to allow non-admin users to access the AWS Glue source from Dremio.
  4. Click **Save**.


## Lake Formation Cell-Level Security[​](/security/integrations/lake-formation#lake-formation-cell-level-security "Direct link to Lake Formation Cell-Level Security")
Dremio supports AWS Lake Formation `NULL` value.
To speed up query planning, Dremio uses the AWS Lake Formation permissions cache for each table. By default, the cache is enabled and reuses previously loaded permissions for up to 3600 seconds (1 hour).
Use [support keys](/help-support/support-settings/#support-keys) to disable the cache or customize the cache time-to-live (TTL):
  * `dremio.glue.lakeformation.cache.enable`: To disable permissions caching, set to `FALSE`.
  * `dremio.glue.lakeformation.cache.ttl`: To specify a TTL for the cache instead of the default 3600 seconds, set to the desired value in seconds.


After you change the value for either support key, you must restart the coordinator node in your Dremio cluster for the change to take effect.
Was this page helpful?
[Previous Integrations](/security/integrations)[Next Privacera](/security/integrations/privacera)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Integrations](/security/integrations)[Next Privacera](/security/integrations/privacera)
