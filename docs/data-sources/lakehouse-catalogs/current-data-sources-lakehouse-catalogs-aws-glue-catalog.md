---
url: /data-sources/lakehouse-catalogs/aws-glue-catalog
title: "AWS Glue Data Catalog | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64046.805892541
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
  * AWS Glue Data Catalog

Version: current [26.x]
On this page
# AWS Glue Data Catalog
Dremio supports Amazon S3 datasets cataloged in 
  * Apache Iceberg
  * Delimited text files (CSV/TSV)
  * Delta Lake (Dremio supports reading Native Delta Lake tables in AWS Glue. Delta Lake symlink tables must be crawled and native Delta Lake tables created from them. See 
  * ORC
  * Parquet


AWS Glue data sources added to projects default to using the Apache Iceberg table format. When upgrading, AWS Glue data sources added to projects before Dremio 22 are modified to use the Apache Iceberg table format as the default format.
## AWS Glue Credentials[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#aws-glue-credentials "Direct link to AWS Glue Credentials")
Dremio administrators need credentials to access files in Amazon S3 and list databases and tables in the AWS Glue Catalog. Dremio recommends using the provided sample 
Dremio reads the table metadata from AWS Glue and directly scans the data on S3 using its high-performance, massively parallel processing (MPP) engine. For this reason, you need to give permissions to connect to Glue as well as the permissions to read the data on S3 for those tables.
## AWS IAM Policy for Accessing Amazon S3 and AWS Glue[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#aws-iam-policy-for-accessing-amazon-s3-and-aws-glue "Direct link to AWS IAM Policy for Accessing Amazon S3 and AWS Glue")
Dremio recommends using the following AWS managed policy:
IAM policy for accessing Amazon S3 and AWS Glue

```
{  
    "Version": "2012-10-17",  
    "Statement": [  
        # Allow Dremio to run the listed AWS Glue API operations.  
        {  
            "Effect": "Allow",  
            "Action": [  
                "glue:GetDatabase",  
                "glue:GetDatabases",  
                "glue:GetPartition",  
                "glue:GetPartitions",  
                "glue:GetTable",  
                "glue:GetTableVersions",  
                "glue:GetTables",  
                "glue:GetConnection",  
                "glue:GetConnections",  
                "glue:GetDevEndpoint",  
                "glue:GetDevEndpoints",  
                "glue:GetUserDefinedFunction",  
                "glue:GetUserDefinedFunctions",  
                "glue:BatchGetPartition"  
            ],  
            "Resource": [  
                "*"  
            ]  
        },  
        # Allow Dremio to read and write files in a bucket.  
        {  
            "Effect": "Allow",  
            "Action": [  
                "s3:GetObject",  
                "s3:PutObject"  
            ],  
            "Resource": [  
                "arn:aws:s3:::aws-glue-*/*",  
                "arn:aws:s3:::*/*aws-glue-*/*"  
            ]  
        },  
        # Allow Dremio to access the Amazon S3 buckets or folders with names containing either the 'aws-glue-' or 'crawler-public' prefixes.  
        {  
            "Effect": "Allow",  
            "Action": [  
                "s3:GetObject"  
            ],  
            "Resource": [  
                "arn:aws:s3:::crawler-public*",  
                "arn:aws:s3:::aws-glue-*"  
            ]  
        },  
        # Allow Dremio to create or delete tags in the AWS Glue catalog.  
        {  
            "Effect": "Allow",  
            "Action": [  
                "ec2:CreateTags",  
                "ec2:DeleteTags"  
            ],  
            "Condition": {  
                "ForAllValues:StringEquals": {  
                    "aws:TagKeys": [  
                        "aws-glue-service-resource"  
                    ]  
                }  
            },  
            "Resource": [  
                "arn:aws:ec2:*:*:network-interface/*",  
                "arn:aws:ec2:*:*:security-group/*",  
                "arn:aws:ec2:*:*:instance/*"  
            ]  
        }  
    ]  
}  

```

## Configuring AWS Glue Data Catalog as a Source[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#configuring-aws-glue-data-catalog-as-a-source "Direct link to Configuring AWS Glue Data Catalog as a Source")
  1. On the Datasets page, to the right of **Sources** in the left panel, click ![This is the Add Source icon.](https://docs.dremio.com/images/icons/plus.png).
  2. In the Add Data Source dialog, under **Lakehouse Catalogs** , select **AWS Glue Data Catalog**.


### General[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#general "Direct link to General")
Users with proper [privileges](/security/rbac) can configure access to AWS Glue Catalog with one of the three authentication methods.
#### Name[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#name "Direct link to Name")
Specify a name for the data source. You cannot change the name after the source is created. The name cannot include the following special characters: `/`, `:`, `[`, or `]`.
#### AWS Region Selection[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#aws-region-selection "Direct link to AWS Region Selection")
Specify a region from which you want to see the tables from AWS Glue. Only tables from this region will be shown after the connection is made.
#### Authentication[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#authentication "Direct link to Authentication")
Choose one of the following authentication methods:
  * AWS Access Key: All or allowed (if specified) buckets associated with this access key or IAM role to assume, if provided, will be available.
    * Under **AWS Access Key** , enter the 
    * Under **AWS Access Secret** , provide the 
      * Dremio: Provide the access secret in plain text. Dremio stores the access secret.
      * [Azure Key Vault](/security/secrets-management/azure-key-vault): Provide the URI for your stored secret using the format `https://`vault_name`.vault.azure.net/secrets/`secret_name``
      * [AWS Secrets Manager](/security/secrets-management/aws-secrets-manager): Provide the Amazon Resource Name (ARN) for the AWS Secrets Manager secret that holds the access secret, which is available in the AWS web console or using command line tools.
      * [HashiCorp Vault](/security/secrets-management/hashicorp-vault): Select your HashiCorp secrets engine from the dropdown and enter the access secret reference in the correct format.
    * Under **IAM Role to Assume** , enter the 
  * EC2 Metadata: All or allowed (if specified) buckets associated with the specified IAM role attached to EC2 or IAM role to assume, if provided, will be available.
    * Under **IAM Role to Assume** , enter the 
  * EKS Pod Identity: Dremio can access all S3 buckets linked to the IAM role associated with the Kubernetes service account or the assumed IAM role. If you specify certain buckets, only those will be available.
    * Under **IAM Role to Assume** , enter the 
  * AWS Profile: Dremio sources profile credentials from the specified AWS profile. For information on how to set up a configuration or credentials file for AWS, see [AWS Custom Authentication](/data-sources/object/s3#aws-custom-authentication).
    * AWS profile (optional): The AWS profile name. If this is left blank, then the default profile will be used. For more information about using profiles in a credentials or configuration file, see AWS's documentation on 


The **Encrypt connection** option is enabled by default to encrypt the connection to AWS Glue. Clear the checkbox to disable encryption.
#### Allowed Databases[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#allowed-databases "Direct link to Allowed Databases")
The allowed databases configuration is a post-connection filter on the databases visible from AWS Glue. When selective access to the databases within AWS Glue is required, the allowed databases filter will limit access within Dremio to only the needed databases per source connection, thus improving data security and source metadata refresh performance.
When the allowed database filter is empty, all databases from the AWS Glue source are visible in Dremio. When a database is added or removed from the filter, Dremio performs an asynchronous update to expose new databases and remove databases not included in the filter. Each entry in the allowed database filter must be a valid database name; misspelled or nonexistent databases are ignored.
### Advanced Options[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#advanced-options "Direct link to Advanced Options")
All configurations are optional.
#### Connection Properties[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#connection-properties "Direct link to Connection Properties")
A list of additional connection properties that can be specified to use with the connection.
##### Locations in which Iceberg Tables are Created[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#locations-in-which-iceberg-tables-are-created "Direct link to Locations in which Iceberg Tables are Created")
Where the CREATE TABLE command creates an Iceberg table depends on the type of data source being used. For AWS Glue Data Sources, the root directory is assumed by default to be `/user/hive/warehouse`. If you want to create tables in a different location, you must specify the S3 address of an Amazon S3 bucket in which to create them:
  1. On the Advanced Options page of the Edit Source dialog, add this connection property: `hive.metastore.warehouse.dir`.
  2. Set the value to the S3 address of an S3 bucket.


The schema path and table name are appended to the root location to determine the default physical location for a new Iceberg table.
#### Lake Formation Integration[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#lake-formation-integration "Direct link to Lake Formation Integration")
Lake Formation provides access controls and allows administrators to define security policies. Enabling this functionality and additional details on the configuration options below are described in more detail on the [Integrating with Lake Formation](/security/integrations/lake-formation) page.
  * **Enforce AWS Lake Formation access permissions on datasets.** Dremio checks any datasets included in the AWS Glue source for the required permissions to perform queries.
  * **Prefix to map Dremio users to AWS ARNs.** Leave blank to default to the end user's username, or enter a REGEX expression.
  * **Prefix to map Dremio groups to AWS ARNs.** Leave blank to default to the end user's group, or enter a REGEX expression.


### Reflection Refresh[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#reflection-refresh "Direct link to Reflection Refresh")
Specify how frequently Dremio refreshes Data Reflections based on the AWS Glue data source in the `Reflection Refresh` tab. Dremio refreshes every hour and expires after three hours by default.
  * Never refresh -- Specifies how often to refresh based on hours, days, weeks, or never.
  * Never expire -- Specifies how often to expire based on hours, days, weeks, or never.


### Metadata[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#metadata "Direct link to Metadata")
Specify how and how frequently Dremio refreshes metadata on the `Metadata` tab. By default, Dremio fetches top-level objects and dataset details every hour. Dremio retrieves details only for queried datasets by default to improve query performance.
### Privileges[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#privileges "Direct link to Privileges")
On the Privileges tab, you can grant privileges to specific users or roles. See [Access Controls](/security/rbac) for additional information about privileges. All privileges are optional.
  1. For **Privileges** , enter the user name or role name that you want to grant access to and click the **Add to Privileges** button. The added user or role is displayed in the **USERS/ROLES** table.
  2. For the users or roles in the **USERS/ROLES** table, toggle the checkmark for each privilege you want to grant on the Dremio source that is being created.
  3. Click **Save** after setting the configuration.


## Updating an AWS Glue Data Catalog Source[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#updating-an-aws-glue-data-catalog-source "Direct link to Updating an AWS Glue Data Catalog Source")
To update an AWS Glue Data Catalog source:
  1. On the Datasets page, under **Lakehouse Catalogs** in the panel on the left, find the name of the source you want to edit.
  2. Right-click the source name and select **Settings** from the list of actions. Alternatively, click the source name and then the ![The Settings icon](https://docs.dremio.com/images/settings-icon.png) at the top right corner of the page.
  3. In the **Source Settings** dialog, edit the settings you wish to update. Dremio does not support updating the source name. For information about the settings options, see [Configuring AWS Glue Data Catalog as a Source](/data-sources/lakehouse-catalogs/aws-glue-catalog#configuring-aws-glue-data-catalog-as-a-source).
  4. Click **Save**.


## Deleting an AWS Glue Data Catalog Source[​](/data-sources/lakehouse-catalogs/aws-glue-catalog#deleting-an-aws-glue-data-catalog-source "Direct link to Deleting an AWS Glue Data Catalog Source")
If the source is in a bad state (for example, Dremio cannot authenticate to the source or the source is otherwise unavailable), only users who belong to the ADMIN role can delete the source.
To delete an AWS Glue Data Catalog source, perform these steps:
  1. On the Datasets page, click **Sources** &gt; **Lakehouse Catalogs** in the panel on the left.
  2. In the list of data sources, hover over the name of the source you want to remove and right-click.
  3. From the list of actions, click **Delete**.
  4. In the Delete Source dialog, click **Delete** to confirm that you want to remove the source.


Deleting a source causes all downstream views that depend on objects in the source to break.
Was this page helpful?
[Previous Open Catalog (External)](/data-sources/lakehouse-catalogs/open-catalog-external)[Next Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Open Catalog (External)](/data-sources/lakehouse-catalogs/open-catalog-external)[Next Microsoft OneLake](/data-sources/lakehouse-catalogs/onelake)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Flakehouse-catalogs%2Faws-glue-catalog%2F&_biz_t=1777950366520&_biz_i=AWS%20Glue%20Data%20Catalog%20%7C%20Dremio%20Documentation&_biz_n=94&rnd=586464&cdn_o=a&_biz_z=1777950366520)
