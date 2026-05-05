---
url: /reference/admin-cli/export-import-pat
slug: /reference/admin-cli/export-import-pat
title: "Export and Import PATs | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64229.607557583
---

  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Export and Import PATs

Version: current [26.x]
On this page
# Export and Import Personal Access Tokens (PATs) Enterprise
Administrators who have access to hosts in a Dremio cluster can migrate personal access tokens (PATs) from one cluster to another using the `dremio-admin export-pats` and `dremio-admin import-pats` commands.
Dremio does not maintain PATs in plaintext. Instead, Dremio uses a secure hashing algorithm to maintain the signatures of secrets. For this reason, the exported data is sensitive but not secret. Administrators may choose to encrypt the exported data using a passphrase. Administrators are responsible for securely transmitting the PAT file to the new cluster (for example, using SSH) and safe disposal of the PAT file and any copies after use.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) before putting anything learned on this page into practice on such a deployment.
## Requirements​
Both the cluster from which you export the PATs and the cluster to which you import the PATs must have the same list of users. That is, usernames for all users must be the same in both clusters. To ensure that the usernames are identical, configure the same authentication mechanism for both clusters, including the list of local users.
## Export Syntax​
Export syntax

```
<dremio_home>/bin/dremio-admin export-pats  

```

Get a list of export options

```
./dremio-admin export-pats -h  

```

Export options command output

```
    -h, --help  
      show usage  
    -p, --path  
      path to export file  
    -s, --secure  
      if set, you will be prompted to enter a secret phrase  
      Default: false  

```

## Import Syntax​
Import syntax

```
<dremio_home>/bin/dremio-admin import-pats  

```

Get a list of import options

```
./dremio-admin import-pats -h  

```

Import options command output

```
    -h, --help  
      show usage  
    -p, --path  
      path to import file  
    -s, --secure  
      if set, you will be prompted to enter a secret phrase  
      Default: false  
    -i, --ignore-failures  
      ignores failures  
      Default: false  

```

## Migrate PATs​
  1. Log in to the main coordinator on the old cluster (the cluster from which you want to export the PATs).
  2. [Shut down](/help-support/advanced-topics/start-stop/) all nodes. The cluster must be offline to export PATs.
  3. Export the cluster's PATs to a file:
Export cluster PATs

```
<dremio_home>/bin/dremio-admin export-pats --path <path_to_PAT_file>  

```

If desired, use the `--secure` argument. You will be prompted to enter a secret phrase to encrypt the file contents:
Export cluster PATs with --secure argument

```
<dremio_home>/bin/dremio-admin export-pats --path <path_to_PAT_file> --secure  

```

  4. To confirm that the export is complete, look for the following confirmation message:
Export confirmation message

```
Exported PATs: PATExportStats{exportedPATCount=3, userDoesNotExistCount=0, tokenExpiredCount=0}  

```

  5. Securely transmit the PAT file from the main coordinator in the old cluster to the main coordinator in the new cluster (the cluster to which you want to import the PATs).
  6. Log in to the main coordinator on the new cluster.
  7. [Shut down](/help-support/advanced-topics/start-stop/) all nodes. The cluster must be offline to import PATs.
  8. Import the PATs from the PAT file:
Import cluster PATs

```
<dremio_home>/bin/dremio-admin import-pats --path <path_to_PAT_file>  

```

If you used the `--secure` argument when exporting the PATs, use it with the import command. You will be prompted to provide the secret phrase to decrypt the file contents:
Import cluster PATs with --secure argument

```
<dremio_home>/bin/dremio-admin import-pats --path <path_to_PAT_file> --secure  

```

  9. To confirm that the import is complete, look for the following confirmation message:
Import confirmation message

```
Stats: PATImportStats{importedPATCount=3, userDoesNotExistCount=0, tokenAlreadyExistsCount=0, tokenExpiredCount=0, exception=null}  

```

If there are any failures, such as PATs that already exist or expire between when the PATs were exported and when they are imported, the entire import fails:
Import failure message

```
Failed to import PATs.  
Stats: PATImportStats{importedPATCount=0, userDoesNotExistCount=0, tokenAlreadyExistsCount=3, tokenExpiredCount=0, exception=com.dremio.common.DeferredException@25930382}  
java.lang.RuntimeException: One or more failures occurred while importing PATs  
   Suppressed: java.lang.IllegalArgumentException: Token with TID 554087b9-2f86-4d51-911b-8e4a80afad4f already exists  
   Suppressed: java.lang.IllegalArgumentException: Token with TID c42a7548-3bd7-4b0a-a9a1-3749f5d570ce already exists  
   Suppressed: java.lang.IllegalArgumentException: Token with TID 11c16d5c-bf4f-4057-a085-9296187b3231 already exists  

```

To ignore failures, use the `--ignore-failures` argument:
Import cluster PATs with ignore-failures argument

```
<dremio_home>/bin/dremio-admin import-pats --path <path_to_PAT_file> --ignore-failures  

```



Was this page helpful?
[Previous Encrypt Credentials](/reference/admin-cli/encryption)[Next Export Profiles](/reference/admin-cli/export-profiles)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Encrypt Credentials](/reference/admin-cli/encryption)[Next Export Profiles](/reference/admin-cli/export-profiles)
!
