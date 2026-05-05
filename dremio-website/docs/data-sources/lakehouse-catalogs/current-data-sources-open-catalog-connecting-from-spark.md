---
url: /data-sources/open-catalog/connecting-from-spark
title: "Connect to Open Catalog from Apache Spark | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64210.071394666
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Open Catalog](/data-sources/open-catalog)
  * Connect to Open Catalog from Apache Spark

Version: current [26.x]
On this page
# Connect to Open Catalog from Apache Spark
You can use any Iceberg REST-compatible engine to read and write to Open Catalog. This page describes how to use Spark to connect to Open Catalog.
When using Spark, you can choose the following methods to authenticate with Dremio:
  1. Dremio [Personal Access Token (PAT)](/security/authentication/personal-access-tokens)
  2. OAuth2 with an external identity provider (IdP)


You also need additional client-side work to enable Spark to properly authenticate with Dremio. These settings are discussed in the respective sections below.
## Prerequisites[​](/data-sources/open-catalog/connecting-from-spark#prerequisites "Direct link to Prerequisites")
  * [Enable Dremio Personal Access Tokens (PATs)](/security/authentication/personal-access-tokens#enabling-the-use-of-pats).
  * Configure Spark to use Iceberg 1.9+. If you can’t upgrade to 1.9, refer to the instructions on [authenticating with Iceberg versions older than 1.9](/data-sources/open-catalog/connecting-from-spark#using-dremio-pat-for-authentication-with-iceberg-versions-older-than-19).
  * Add the required libraries to the `spark-sql` command using the `--packages` option:
    * Iceberg Spark runtime, e.g. `iceberg-spark-runtime-4.0_2.13-1.10.1.jar` (from 
    * Iceberg AWS S3 bundle, e.g. `iceberg-aws-bundle-1.10.1.jar` (from `iceberg-gcp-bundle` for Google Cloud Storage or `iceberg-azure-bundle` for Azure Blob Storage.
    * The Dremio Auth Manager for Apache Iceberg library, e.g. `authmgr-oauth2-runtime-1.0.0.jar` (from [Introducing Dremio Auth Manager for Apache Iceberg](https://www.dremio.com/blog/introducing-dremio-auth-manager-for-apache-iceberg/).


Example:
Add required libraries to spark-sql

```
spark-sql --packages org.apache.iceberg:iceberg-spark-runtime-4.0_2.13:1.10.1,org.apache.iceberg:iceberg-aws-bundle:1.10.1,com.dremio.iceberg.authmgr:authmgr-oauth2-runtime:1.0.0  

```

If you intend to use vended credentials, make sure to pass the following config to the `spark-sql` command. The `X-Iceberg-Access-Delegation` header instructs the catalog to provide temporary, scoped storage credentials so that Spark can access the underlying data files directly.
Enable vended credentials

```
spark-sql ... --conf spark.sql.catalog.polaris.header.X-Iceberg-Access-Delegation=vended-credentials  

```

**Note:** Ensure that the warehouse is set to `default`, as this is the warehouse used by Open Catalog.
## Authenticating with Dremio Using Dremio PAT[​](/data-sources/open-catalog/connecting-from-spark#authenticating-with-dremio-using-dremio-pat "Direct link to Authenticating with Dremio Using Dremio PAT")
Use this method if you want to use Spark with Dremio [internal users](/security/authentication/users#local-users). This method follows a two-step process:
### Step 1: Create a Dremio PAT[​](/data-sources/open-catalog/connecting-from-spark#step-1-create-a-dremio-pat "Direct link to Step 1: Create a Dremio PAT")
Select a user that will be used to authenticate Spark jobs and [create a Dremio PAT](/security/authentication/personal-access-tokens#creating-a-pat) for that user. Then, use the section below to configure Spark to use PAT.
### Step 2: Configure Spark to Use a Personal Access Token to Access Open Catalog[​](/data-sources/open-catalog/connecting-from-spark#step-2-configure-spark-to-use-a-personal-access-token-to-access-open-catalog "Direct link to Step 2: Configure Spark to Use a Personal Access Token to Access Open Catalog")
Below is an example Spark configuration that would allow Spark to connect to Open Catalog with Iceberg REST, using a Personal Access Token (PAT) for authentication:
Spark with PAT authentication

```
export DREMIO_PAT=...  
export DREMIO_ADDRESS=...  
  
spark-sql \  
    --packages org.apache.iceberg:iceberg-spark-runtime-4.0_2.13:1.10.1,org.apache.iceberg:iceberg-aws-bundle:1.10.1,com.dremio.iceberg.authmgr:authmgr-oauth2-runtime:1.0.0 \  
    --conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \  
    --conf spark.sql.catalog.polaris=org.apache.iceberg.spark.SparkCatalog \  
    --conf spark.sql.catalog.polaris.cache-enabled=false \  
    --conf spark.sql.catalog.polaris.type=rest \  
    --conf spark.sql.catalog.polaris.warehouse=default \  
    --conf spark.sql.catalog.polaris.uri=http://$DREMIO_ADDRESS:8181/api/catalog \  
    --conf spark.sql.catalog.polaris.header.X-Iceberg-Access-Delegation=vended-credentials \  
    --conf spark.sql.catalog.polaris.rest.auth.type=com.dremio.iceberg.authmgr.oauth2.OAuth2Manager \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-endpoint=http://$DREMIO_ADDRESS:9047/oauth/token \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.grant-type=urn:ietf:params:oauth:grant-type:token-exchange \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.client-id=dremio \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.client-auth=none \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.scope=dremio.all \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token="$DREMIO_PAT" \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token-type=urn:ietf:params:oauth:token-type:dremio:personal-access-token  

```

“dremio” as a Client ID is not used for actual authentication. It can be any string. `DREMIO_PAT` represents the Dremio Personal Access Token (PAT).
## Authenticating with Dremio Using OAuth2 (External Identity Provider)[​](/data-sources/open-catalog/connecting-from-spark#authenticating-with-dremio-using-oauth2-external-identity-provider "Direct link to Authenticating with Dremio Using OAuth2 \(External Identity Provider\)")
Use this method if you want to use Spark with users defined in an external identity provider, e.g., Keycloak.
### Step 1: Configure Dremio to Use OAuth2 to Authenticate Spark[​](/data-sources/open-catalog/connecting-from-spark#step-1-configure-dremio-to-use-oauth2-to-authenticate-spark "Direct link to Step 1: Configure Dremio to Use OAuth2 to Authenticate Spark")
First, [establish trust](/security/authentication/application-authentication/external-token) between Dremio and your identity provider. Go to **Settings** &gt; **External Token Providers** , then add a new provider as shown below.
![](https://docs.dremio.com/images/dremio-catalog-keycloak-example.png)
  * The audience must match the `aud` claim in the external JWT.
  * The value to set for “User Claim Mapping” depends on the IdP. It should point to the token claim that contains the value of the username that Dremio should use to map external users to internal users.
  * “Issuer URL” should point to the root URL of the IdP that will be used to authenticate Spark clients.
  * "JWKS URL" should point to the URL of the IdP's JWKS endpoint. If not provided, Dremio will retrieve it from `{issuerUrl}/.well-known/openid-configuration`.


### Step 2: Configure Spark to Use OAuth2[​](/data-sources/open-catalog/connecting-from-spark#step-2-configure-spark-to-use-oauth2 "Direct link to Step 2: Configure Spark to Use OAuth2")
Below is an example of how you can use Spark to connect to Open Catalog, using an external IdP for user authentication. A summary of the process is below:
  1. Spark obtains a user-specific JSON Web Token (JWT) from an OAuth2 server (usually the IdP).
  2. Spark connects to Dremio and exchanges the JWT for a Dremio OAuth access token.
  3. Spark connects to Open Catalog using the Dremio OAuth access token.

Spark with OAuth2 authentication

```
export KEYCLOAK_ADDRESS=...  
export DREMIO_ADDRESS=...  
export CLIENT_SECRET=...  
  
spark-sql \  
    --packages org.apache.iceberg:iceberg-spark-runtime-4.0_2.13:1.10.1,org.apache.iceberg:iceberg-aws-bundle:1.10.1,com.dremio.iceberg.authmgr:authmgr-oauth2-runtime:1.0.0 \  
    --conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \  
    --conf spark.sql.catalog.polaris=org.apache.iceberg.spark.SparkCatalog \  
    --conf spark.sql.catalog.polaris.cache-enabled=false \  
    --conf spark.sql.catalog.polaris.type=rest \  
    --conf spark.sql.catalog.polaris.warehouse=default \  
    --conf spark.sql.catalog.polaris.uri=http://$DREMIO_ADDRESS:8181/api/catalog \  
    --conf spark.sql.catalog.polaris.header.X-Iceberg-Access-Delegation=vended-credentials \  
    --conf spark.sql.catalog.polaris.rest.auth.type=com.dremio.iceberg.authmgr.oauth2.OAuth2Manager \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.issuer-url=http://$DREMIO_ADDRESS:9047/oauth/token \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.grant-type=urn:ietf:params:oauth:grant-type:token-exchange \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.scope=dremio.all \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.client-id=dremio \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.client-auth=none \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token.issuer-url=http://$KEYCLOAK_ADDRESS:8080/realms/iceberg \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token.grant-type=urn:ietf:params:oauth:grant-type:device_code \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token.scope=catalog \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token.client-id=dremio \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token.client-secret=$CLIENT_SECRET \  
    --conf spark.sql.catalog.polaris.rest.auth.oauth2.token-exchange.subject-token-type=urn:ietf:params:oauth:token-type:jwt  

```

  * The main OAuth2 settings (`issuer-url`, `grant-type`, `scope`, `client-id`) point to the Dremio token endpoint and configure the token exchange flow.
  * The `token-exchange.subject-token.*` settings configure how the Dremio Auth Manager for Apache Iceberg obtains the subject token from the external IdP (Keycloak in this example).
  * The `dremio` client ID in `token-exchange.subject-token.client-id` must match a configured client in Keycloak.
  * The `catalog` scope in `token-exchange.subject-token.scope` must match a configured scope in Keycloak.


## Using Dremio PAT for Authentication with Iceberg Versions Older Than 1.9[​](/data-sources/open-catalog/connecting-from-spark#using-dremio-pat-for-authentication-with-iceberg-versions-older-than-19 "Direct link to Using Dremio PAT for Authentication with Iceberg Versions Older Than 1.9")
If you are using a version of Iceberg older than 1.9, a custom step is required to run the OAuth2 token exchange flow against Dremio in order to obtain an access token, since versions of Iceberg below 1.9 do not include the `curl` for simplicity:
Obtain an access token via token exchange

```
export DREMIO_PAT=...  
export DREMIO_ADDRESS=...  
  
curl -X POST https://$DREMIO_ADDRESS:9047/oauth/token -d "grant_type=urn:ietf:params:oauth:grant-type:token-exchange&scope=dremio.all&subject_token_type=urn:ietf:params:oauth:token-type:dremio:personal-access-token" --data-urlencode "subject_token=$DREMIO_PAT"  

```

Extract the access token from the output of the token exchange flow. The below examples assume the token is stored in the `$DREMIO_TOKEN` variable.
  * The token exchange output will also provide a token expiry period.
  * It is also possible to obtain the access token via a custom IdP, but this is more challenging technically. Please contact Dremio for more information if this use case is required.


### Configure Spark to Use an OAuth Token[​](/data-sources/open-catalog/connecting-from-spark#configure-spark-to-use-an-oauth-token "Direct link to Configure Spark to Use an OAuth Token")
Below is an example Spark configuration that would allow Spark to connect to Open Catalog with the Iceberg REST API, using an OAuth token for authentication:
Spark with OAuth token (Iceberg pre-1.9)

```
export DREMIO_TOKEN=...  
export DREMIO_ADDRESS=...  
  
spark-sql \  
    --packages org.apache.iceberg:iceberg-spark-runtime-3.5_2.12:1.8.1 \  
    --conf spark.sql.extensions=org.apache.iceberg.spark.extensions.IcebergSparkSessionExtensions \  
    --conf spark.sql.catalog.polaris=org.apache.iceberg.spark.SparkCatalog \  
    --conf spark.sql.catalog.polaris.cache-enabled=false \  
    --conf spark.sql.catalog.polaris.type=rest \  
    --conf spark.sql.catalog.polaris.warehouse=default \  
    --conf spark.sql.catalog.polaris.uri=http://$DREMIO_ADDRESS:8181/api/catalog \  
    --conf spark.sql.catalog.polaris.token="$DREMIO_TOKEN"  

```

Was this page helpful?
[Previous Open Catalog](/data-sources/open-catalog)[Next Connect to Open Catalog from Apache Kafka Connect](/data-sources/open-catalog/connecting-from-kafka-connect)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Open Catalog](/data-sources/open-catalog)[Next Connect to Open Catalog from Apache Kafka Connect](/data-sources/open-catalog/connecting-from-kafka-connect)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-sources%2Fopen-catalog%2Fconnecting-from-spark%2F&_biz_t=1777950530115&_biz_i=Connect%20to%20Open%20Catalog%20from%20Apache%20Spark%20%7C%20Dremio%20Documentation&_biz_n=403&rnd=634632&cdn_o=a&_biz_z=1777950530116)
