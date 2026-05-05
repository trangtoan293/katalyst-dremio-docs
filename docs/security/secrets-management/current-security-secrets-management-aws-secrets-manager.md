---
url: /security/secrets-management/aws-secrets-manager
title: "AWS Secrets Manager | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64080.918617833
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Secrets Management](/security/secrets-management)
  * AWS Secrets Manager

Version: current [26.x]
On this page
# AWS Secrets Manager Enterprise
Use Dremio's 
Dremio must be [deployed on AWS](/deploy-dremio/other-options/aws-edition) to use the AWS Secrets Manager integration for secrets management.
After you complete the [prerequisites](/security/secrets-management/aws-secrets-manager#prerequisites) and create the secret in the [AWS Secrets Manager console](/security/secrets-management/aws-secrets-manager#secrets-created-in-the-aws-secrets-manager-console) or [AWS command line interface (CLI) or API](/security/secrets-management/aws-secrets-manager#secrets-created-with-the-aws-cli-or-api), Dremio can use the secret reference you provide to retrieve the secret's value at runtime and authenticate to a data source or another service.
## Supported Data Sources[​](/security/secrets-management/aws-secrets-manager#supported-data-sources "Direct link to Supported Data Sources")
Dremio supports AWS Secrets Manager secrets for all data source types except Hadoop Distributed File System (HDFS), Hive 2.x and 3.x, and network-attached storage (NAS).
## Supported Configuration Files and Properties[​](/security/secrets-management/aws-secrets-manager#supported-configuration-files-and-properties "Direct link to Supported Configuration Files and Properties")
You can use an AWS Secrets Manager secret as the value for any of the configuration file properties listed in [Encrypt Credentials](/reference/admin-cli/encryption).
## Prerequisites[​](/security/secrets-management/aws-secrets-manager#prerequisites "Direct link to Prerequisites")
To authenticate with AWS Secrets Manager, Dremio uses the 
For Dremio to retrieve the values of secrets at runtime, you must grant the EC2 instance profile the ability to perform the following actions on the target secrets in AWS Secrets Manager:
  * `secretsmanager:GetSecretValue`
  * `secretsmanager:DescribeSecret`


Make sure to grant these permissions to Dremio’s EC2 instance profile **only** on the secrets that you intend for Dremio to read. Read the AWS Secrets Manager instructions for 
When Dremio is running within an Amazon EKS cluster, you must grant the `secretsmanager:GetSecretValue` and `secretsmanager:DescribeSecret` permissions to the EKS node group’s IAM role, **not** to a ServiceAccount-based IAM role or an IAM role that is associated with an EKS pod identity.
## Secrets Created in the AWS Secrets Manager Console[​](/security/secrets-management/aws-secrets-manager#secrets-created-in-the-aws-secrets-manager-console "Direct link to Secrets Created in the AWS Secrets Manager Console")
Dremio supports the following types of secrets created in the AWS Secrets Manager console:
  * Credentials for Amazon RDS databases.
  * Credentials for Amazon Redshift cluster.
  * Credentials for other databases.
  * Secrets like generic key/value pairs and raw secret string options.
    * For generic key/value pairs and raw secret string options, you must map the target secret to the `password` key (which is case-sensitive) **or** the secret’s value must be the plaintext secret. If the secret’s value is a JSON object, Dremio ignores values that are mapped to keys other than `password`. Even if the JSON object contains other key-value pairs, Dremio only reads the value mapped to the `password` key.
The following image shows a generic AWS Secrets Manager secret that correctly maps the `password` key to the target password value:
![AWS Secrets Manager secret that correctly maps the password key to the target password value](https://docs.dremio.com/images/aws-secrets-manager-map-target-password.png)
The following image shows a generic AWS Secrets Manager secret that correctly sets the secret's value to the plaintext password:
![AWS Secrets Manager secret that correctly sets the secret's value to the plaintext password](https://docs.dremio.com/images/aws-secrets-manager-set-to-plaintext-password.png)


## Secrets Created with the AWS CLI or API[​](/security/secrets-management/aws-secrets-manager#secrets-created-with-the-aws-cli-or-api "Direct link to Secrets Created with the AWS CLI or API")
Dremio supports AWS Secrets Manager secrets created with the AWS command line interface (CLI) or API. Secrets created with the AWS CLI must be secret strings specified using the `--secret-string` argument. The value of the secret must be either a JSON object in which the target secret value is mapped to the top-level `password` key (which is case-sensitive) **or** the plaintext secret value.
Dremio does not support using binary data for secret values.
If the secret value is a JSON object, Dremio ignores values that are mapped to any other keys besides `password`. Even if the JSON object contains other key-value pairs, Dremio only reads the value mapped to the `password` key.
Example secret in a JSON object

```
{  
  "password": "plaintext-password-value-here"  
}  

```

Example secret in a JSON object that contains other key-value pairs

```
{  
  "password": "plaintext-password-value-here",  
  "username": "my-dremio-user",  
  "host": "localhost"  
}  

```

Example plaintext secret

```
plaintext-password-value-here  

```

## Retrieving the Secret Reference from AWS Secrets Manager[​](/security/secrets-management/aws-secrets-manager#retrieving-the-secret-reference-from-aws-secrets-manager "Direct link to Retrieving the Secret Reference from AWS Secrets Manager")
The secret reference for an AWS Secrets Manager secret is the secret’s Amazon Resource Name (ARN). The ARN is available on the secret's details page in the AWS Secrets Manager console:
![Location of the ARN for an AWS Secrets Manager secret](https://docs.dremio.com/images/aws-secrets-manager-arn-location.png)
## Using the Secret Reference when Connecting to Data Sources[​](/security/secrets-management/aws-secrets-manager#using-the-secret-reference-when-connecting-to-data-sources "Direct link to Using the Secret Reference when Connecting to Data Sources")
When you configure a new data source or edit the settings for an existing data source, enter the ARN for the AWS Secrets Manager secret directly into the corresponding password or secret key field in the Dremio console. If you configure a data source using the Dremio API, provide the ARN as the value for the corresponding parameter in your request body.
## Using the Secret Reference in Dremio Configuration Files[​](/security/secrets-management/aws-secrets-manager#using-the-secret-reference-in-dremio-configuration-files "Direct link to Using the Secret Reference in Dremio Configuration Files")
In Dremio configuration files, use the ARN for the AWS Secrets Manager secret in place of a plaintext secret. You can use the secret's ARN as the value for any of the configuration file properties listed in [Encrypt Credentials](/reference/admin-cli/encryption).
You must add `dremio+` as a prefix to secret references before using them in core-site.xml files. For example:
`dremio+arn:aws:secretsmanager:us-west-2:01234567890:secret:mysql-test/dremio-user-adKre`
Was this page helpful?
[Previous Secrets Management](/security/secrets-management)[Next Azure Key Vault](/security/secrets-management/azure-key-vault)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Secrets Management](/security/secrets-management)[Next Azure Key Vault](/security/secrets-management/azure-key-vault)
