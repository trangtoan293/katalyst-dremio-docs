---
url: /security/secrets-management/azure-key-vault
slug: /security/secrets-management/azure-key-vault
title: "Azure Key Vault | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64081.109753333
---

  * [Dremio Enterprise Home](/)
  * [Security and Compliance](/security)
  * [Secrets Management](/security/secrets-management)
  * Azure Key Vault

Version: current [26.x]
On this page
# Azure Key Vault Enterprise
Use Dremio's 
Dremio must be deployed on [Azure AKS](/deploy-dremio/deploy-on-kubernetes) to use the Azure Key Vault integration for secrets management.
After you complete the prerequisites, you can create secrets in Azure Key Vault and use them in Dremio. Dremio uses the secret references you provide to retrieve secret values at runtime and authenticate to data sources and other services.
## Supported Data Sources​
Dremio supports Azure Key Vault secrets for all data source types except Hadoop Distributed File System (HDFS), Hive 2.x and 3.x, and network-attached storage (NAS).
## Supported Configuration Files and Properties​
You can use an Azure Key Vault secret as the value for any of the configuration file properties listed in [Encrypt Credentials](/reference/admin-cli/encryption).
## Prerequisites​
Dremio uses Azure 
! **Example:** The Client ID of the managed identity is shown on the right as `d91a5b36-189d-4137-bf1f-7c0a36ef11b0`. 
To enable Dremio to connect to Azure Key Vault using your managed identity, complete the following steps:
  * AKS
  * Azure VMs


When deploying Dremio on a Kubernetes cluster in the **Azure Kubernetes Service (AKS):**
  1. Assign the managed identity to the AKS cluster's 
  2. Provide access to Azure Key Vault using 
  3. [Configure an environment variable](/deploy-dremio/configuring-kubernetes) for your Azure managed identity Client ID. Add the `AZURE_MANAGED_IDENTITY_CLIENT_ID` environment variable to your `values-overrides.yaml` for the `coordinator` and `executor` with the value of your Azure managed identity Client ID.
Example configuration of Azure maanged identity 

```
coordinator:  
   extraEnvs:  
      - name: AZURE_MANAGED_IDENTITY_CLIENT_ID  
        value: d91a5b36-189d-4137-bf1f-7c0a36ef11b0  
  
executor:  
   extraEnvs:  
      - name: AZURE_MANAGED_IDENTITY_CLIENT_ID  
        value: d91a5b36-189d-4137-bf1f-7c0a36ef11b0  

```

  4. Deploy new Dremio containers using your updated Helm chart.


When deploying Dremio on **Azure virtual machines (VMs)** :
  1. Assign the managed identity to 
  2. Provide access to Azure Key Vault using 
  3. Edit the Dremio dremio-env file on the coordinator and each executor to add the `AZURE_MANAGED_IDENTITY_CLIENT_ID` environment variable with the Client ID of your managed identity. Export this variable definition from `dremio-env`.
Example updates in dremio-env

```
export AZURE_MANAGED_IDENTITY_CLIENT_ID="d91a5b36-189d-4137-bf1f-7c0a36ef11b0"  

```

  4. Restart Dremio to use your updated `dremio-env`.


## Retrieving the Secret Reference from Azure Key Vault​
The secret reference for an Azure Key Vault secret is the secret identifier URL, without the secret version number. The secret identifier is available on the secret's details page in the Azure Key Vault console.
! **Example:** The Azure Key Vault secret value for use in Dremio is `https://sourcecreds.vault.azure.net/secrets/azurestorage`. 
## Using A Secret Reference​
### Connecting to Data Sources​
When you configure a new data source or edit the settings for an existing data source, enter the partial secret identifier URL for the Azure Key Vault secret directly into the corresponding password or secret key field in the Dremio console. If you configure a data source using the Dremio API, provide the partial secret identifier as the value for the corresponding parameter in your request body.
### Dremio Configuration Files​
In Dremio configuration files, use the partial secret identifier URL for the Azure Key Vault secret in place of a plaintext secret. You can use the partial secret identifier URL as the value for any of the configuration file properties listed in [Encrypt Credentials](/reference/admin-cli/encryption).
You must add `dremio+` as a prefix to secret references before using them in core-site.xml files. For example:
Example secret for `core-site.xml`

```
dremio+https://sourcecreds.vault.azure.net/secrets/azurestorage  

```

### Secrets Rotation​
For seamless rotation of secrets stored in Azure Key Vault, the rotation must be done with two secrets. After the Azure Key Vault secret value is updated, both secrets must remain valid for the minimum holdover period:
  * Plain secrets: 5 minutes
  * Microsoft Entra ID client secrets: 90 minutes


You may invalidate the old secret when the holdover period expires. It is not necessary to restart the Dremio coordinator when you rotate secrets stored in Azure Key Vault.
Was this page helpful?
[Previous AWS Secrets Manager](/security/secrets-management/aws-secrets-manager)[Next HashiCorp Vault](/security/secrets-management/hashicorp-vault)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AWS Secrets Manager](/security/secrets-management/aws-secrets-manager)[Next HashiCorp Vault](/security/secrets-management/hashicorp-vault)
