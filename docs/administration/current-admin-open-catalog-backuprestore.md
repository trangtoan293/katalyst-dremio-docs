---
url: /admin/open-catalog-backuprestore
slug: /admin/open-catalog-backuprestore
title: "Open Catalog Backup and Restore | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64025.819799041
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * Open Catalog Backup and Restore

Version: current [26.x]
On this page
# Open Catalog Backup and Restore Enterprise
Regular backups are essential for protecting Open Catalog metadata and ensuring business continuity. This section explains how to back up and restore the MongoDB cluster that stores Open Catalog's configuration, table metadata, and access control policies.
Ensure you have enabled [automated backup](/admin/automated-backups) for your Dremio cluster before backing up the Open Catalog.
## Automated Backups[​](/admin/open-catalog-backuprestore/)
Automated MongoDB backup is enabled in your `values-overrides.yaml`. The backups are automatically written to your distributed storage and must be taken while Dremio is operational. Not all object store authentication methods are supported by this feature. See [Configuring the Distributed Storage](/deploy-dremio/configuring-kubernetes) for details on supported configurations.
When enabled, a backup agent will be deployed into the cluster as a container of the first MongoDB pod `dremio-mongodb-rs0-0`. Inspect the agent logs with the command: `kubectl logs -f dremio-mongodb-rs0-0 -c backup-agent -n <your-namespace>`. Backups are written to the `catalog-backups` folder of Dremio's distributed storage. The backup names will follow a consistent pattern, for example, `cron-dremio-mongodb-20251112124000-87jl7`.
## Restore[​](/admin/open-catalog-backuprestore/)
### Prerequisites[​](/admin/open-catalog-backuprestore/)
  1. Ensure that Dremio is in **Admin Mode**. See [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) to understand how to switch to **Admin Mode**.
  2. Export your Kubernetes namespace as an environment variable. Replace the ``namespace`` placeholder with your value:

```
export NAMESPACE = <namespace>  

```

  3. Run the following command for a list of available backups for the restore:

```
kubectl get psmdb-backup -n $NAMESPACE  

```

  4. Run the following command for MongoDB cluster information. The `clustername` will be required to start the restore.

```
kubectl get psmdb -n $NAMESPACE  

```



### Restore From a Full Backup[​](/admin/open-catalog-backuprestore/)
Restore based on the name of the specific backup.
  1. Create a file named `restore.yaml`. Fill in the YAML based on the output from the prerequisites, namely: `<my-cluster-name>` and `<my-backup-name>`. Dremio recommends substituting `<my-restore-name>` with a name containing the date the restore was performed.

```
apiVersion: psmdb.dremio.com/v1  
kind: PerconaServerMongoDBRestore  
metadata:  
 name: <my-restore-name>  
spec:  
 clusterName: <my-cluster-name>  
 backupName: <my-backup-name>  

```

  2. Start the restore by applying the YAML created in the previous step:

```
kubectl apply -f restore.yaml -n $NAMESPACE  

```



Once completed, bring Dremio back online. See [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) to understand how to leave **Admin Mode**.
### Point-in-time Recovery[​](/admin/open-catalog-backuprestore/)
Restore to a particular point in time within a given backup. This allows for a more granular restore.
  1. Use this command to get a list of all restore times available within a backup.

```
kubectl get psmdb-backup <backup_name> -n $NAMESPACE -o jsonpath='{.status.latestRestorableTime}  

```

  2. Modify the `restore.yaml` specifying your chosen restore date and time in the following format `YYYY-MM-DD HH:MM:SS` from those available.

```
apiVersion: psmdb.dremio.com/v1  
kind: PerconaServerMongoDBRestore  
metadata:  
 name: <my-restore-name>  
spec:  
 clusterName: <my-cluster-name>  
 backupName: <my-backup-name>  
 pitr:  
   type: date  
   date: YYYY-MM-DD hh:mm:ss  

```

  3. Start the restore by applying the YAML created in the previous step:

```
kubectl apply -f restore.yaml -n $NAMESPACE  

```



Once completed, bring Dremio back online. See [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) to understand how to leave **Admin Mode**.
Was this page helpful?
[Previous Splunk](/admin/monitoring/exporting/splunk)[Next Developer Guide](/developer)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Splunk](/admin/monitoring/exporting/splunk)[Next Developer Guide](/developer)
!
