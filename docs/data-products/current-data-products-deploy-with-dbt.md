---
url: /data-products/deploy-with-dbt
slug: /data-products/deploy-with-dbt
title: "Deploy with dbt | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64033.341005833
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * Deploy with dbt

Version: current [26.x]
On this page
# Deploy with dbt
dbt enables analytics engineers to develop and manage semantic layers within dbt projects and deploy them to Dremio.
You can use Dremio's dbt connector `dbt-dremio` to transform data that is in data sources that are connected to a Dremio project.
## Prerequisites​
  * Download the `dbt-dremio` package from 
  * Ensure that Python 3.9.x or later is installed.
  * If you want to use TLS to secure the connection between dbt and Dremio Enterprise, configure full wire encryption in your Dremio cluster. For more information, see the configuration of TLS for [Dremio on Kubernetes](/deploy-dremio/configuring-kubernetes) or Dremio standalone clusters.


## Installing​
Install this package from PyPi by running this command:
Install dbt-dremio package

```
pip install dbt-dremio  

```

`dbt-dremio` works with dbt-core versions 1.8 and 1.9. Earlier versions of dbt-core are out of support from dbt.
## Initializing a dbt Project​
  1. Run the command `dbt init `project_name``.
  2. Select `dremio` as the database to use.
  3. Select one of these options to generate a profile for your project:
     * `software_with_username_password` for working with a Dremio Enterprise cluster and authenticating to the cluster with a username and a password
     * `software_with_pat` for working with a Dremio Enterprise cluster and authenticating to the cluster with a personal access token


Next, configure the profile for your dbt project.
## Profiles​
When you initialize a dbt project, you create one of these three profiles. You must configure it before trying to connect to Dremio.
  * Profile for Dremio Enterprise with Username/Password Authentication
  * Profile for Dremio Enterprise with Authentication Through a Personal Access Token


For descriptions of the configurations in these profiles, see Configurations.
### Dremio Enterprise Profile with Username & Password​
Example Profile

```
[project name]:  
  outputs:  
    dev:  
      password: b9JtkIgI3uup9gGxxK  
      port: 9047  
      software_host: 192.0.2.0  
      object_storage_source: Samples  
      object_storage_path: "samples.dremio.com"."Dremio University"  
      dremio_space: Space1  
      dremio_space_folder: Folder1.Folder2  
      threads: 1  
      type: dremio  
      use_ssl: true  
      user: userName  
  target: dev  

```

### Dremio Enterprise Profile with Personal Access Token​
Example Profile

```
[project name]:  
  outputs:  
    dev:  
      pat: A1BCDrE2FwgH3IJkLM4NoPqrsT5uV6WXyza7I8bcDEFgJ9hIj0Kl1MNOPq2Rstu  
      port: 9047  
      software_host: 192.0.2.0  
      object_storage_source: Samples  
      object_storage_path: "samples.dremio.com"."Dremio University"  
      dremio_space: Space1  
      dremio_space_folder: Folder1.Folder2  
      threads: 1  
      type: dremio  
      use_ssl: true  
      user: userName  
  target: dev  

```

## Configurations​  
| Configuration  | Required?  | Default Value  | Description  |  
| --- | --- | --- | --- |  
| `password`  | Yes, if you are not using the pat configuration.  | None  | The password of the account to use when logging into the Dremio cluster.  |  
| `pat`  | Yes, if you are not using the user and password configurations.  | None  | The personal access token to use for authenticating to Dremio. See [Personal Access Tokens](/security/authentication/personal-access-tokens) for instructions about obtaining a token. The use of a personal access token takes precedence if values for the three configurations user, password and pat are specified.  |  
| `port`  | Yes  | `9047`  | Port for Dremio Enterprise cluster API endpoints.  |  
| `software_host`  | Yes  | None  | The hostname or IP address of the coordinator node of the Dremio cluster.  |  
| `enterprise_catalog_namespace`  | No  | None  | The name of the catalog in which to create tables, materialized views, tests, and other objects, and views. The dbt aliases are `datalake` (for objects) and `database` (for views).  
This name corresponds to the name of a catalog in the **Open Catalogs** section of the Datasets page in Dremio.  |  
| `enterprise_catalog_folder`  | No  | None  | The path in the catalog in which to create objects / views. The dbt aliases are `root_path` (for objects) and `schema` (for views). Nested folders in the path are separated with periods.  
This value corresponds to the path in this location in the Datasets page in Dremio.  |  
| `object_storage_source`  | No  | $scratch  | The name of the filesystem in which to create tables, materialized views, tests, and other objects. The dbt alias is `datalake`.  
This name corresponds to the name of a source in the **Object Storage** section of the Datasets page in Dremio: !  |  
| `object_storage_path`  | No  | `no_schema`  | The path in the filesystem in which to create objects. The default is the root level of the filesystem. The dbt alias is `root_path`. Nested folders in the path are separated with periods.  
This value corresponds to the path in this location in the Datasets page in Dremio: !['samples.dremio.com'.'Dremio University'](https://docs.dremio.com/images/dbt-SamplesPath.png)  |  
| `dremio_space`  | No  | `@`username``  | The value of the Dremio space in which to create views. The dbt alias is `database`.  
This value corresponds to the name in this location in the **Spaces** section of the Datasets page in Dremio: ![Spaces1](https://docs.dremio.com/images/dbt-Spaces.png)  |  
| `dremio_space_folder`  | No  | `no_schema`  | The folder in the Dremio space in which to create views. The default is the top level in the space. The dbt alias is `schema`. Nested folders are separated with periods.  
This value corresponds to the path in this location in the Datasets page in Dremio: !  |  
| `threads`  | Yes  | 1  | The number of threads the dbt project runs on.  |  
| `type`  | Yes  | dremio  | Auto-populated when creating a Dremio project. Do not change this value.  |  
| `use_ssl`  | Yes  | `true`  | Acceptable values are `true` and `false`. If the value is set to true, ensure that full wire encryption is configured in your Dremio cluster. See Prerequisites.  |  
| `verify_ssl`  | No  | `true`  | Acceptable values are `true` and `false`. Set to `false` if using a self-signed certificate or if the root certificate authority (CA) is not included in Python’s CA certificates.  |  
| `user`  | Yes  | None  | The username of the account to use when logging into the Dremio cluster.  |  
## Known Issues​
## Additional Resources​
Learn more about DataOps by enrolling in the [DataOps with Apache Iceberg course in Dremio University](https://university.dremio.com/course/dataops-with-apache-iceberg).
Was this page helpful?
[Previous Develop Data Products](/data-products/develop)[Next Govern Data](/data-products/govern)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Develop Data Products](/data-products/develop)[Next Govern Data](/data-products/govern)
!
