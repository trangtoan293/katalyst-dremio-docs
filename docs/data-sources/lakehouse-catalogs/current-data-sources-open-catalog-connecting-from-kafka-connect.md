---
url: /data-sources/open-catalog/connecting-from-kafka-connect
title: "Connect to Open Catalog from Apache Kafka Connect | Dremio Documentation"
depth: 4
crawled_at: 64772.573362083
---

  * [Dremio Enterprise Home](/)
  * [Manage Sources](/data-sources)
  * [Open Catalog](/data-sources/open-catalog)
  * Connect to Open Catalog from Apache Kafka Connect

Version: current [26.x]
On this page
# Connect to Open Catalog from Apache Kafka Connect
You can use the 
## Prerequisites[​](/data-sources/open-catalog/connecting-from-kafka-connect#prerequisites "Direct link to Prerequisites")
  * Java 17 or later for the Kafka Connect runtime.
  * Docker and Docker Compose installed and running.
  * The 
  * The `authmgr-oauth2-standalone` JAR from 


You must use the `authmgr-oauth2-standalone` JAR variant (not `authmgr-oauth2-runtime`) because this variant does not relocate Iceberg packages, which is required for compatibility with the Iceberg Kafka Sink Connector.
## Setting Up Kafka and Kafka Connect[​](/data-sources/open-catalog/connecting-from-kafka-connect#setting-up-kafka-and-kafka-connect "Direct link to Setting Up Kafka and Kafka Connect")
Kafka Connect runs as a separate process that connects to a Kafka broker. The following steps use Docker Compose to run both a Kafka broker and a Kafka Connect worker.
### Step 1: Create the Project Directory[​](/data-sources/open-catalog/connecting-from-kafka-connect#step-1-create-the-project-directory "Direct link to Step 1: Create the Project Directory")
Create the project directory

```
mkdir -p kafka-iceberg  
cd kafka-iceberg  

```

### Step 2: Create the Dockerfile for Kafka Connect[​](/data-sources/open-catalog/connecting-from-kafka-connect#step-2-create-the-dockerfile-for-kafka-connect "Direct link to Step 2: Create the Dockerfile for Kafka Connect")
Create a `Dockerfile` that extends the Confluent Kafka Connect image with the Iceberg Sink Connector and the Dremio Auth Manager JAR:
Kafka Connect Dockerfile

```
FROM confluentinc/cp-kafka-connect:8.0.0  
  
# Install the Iceberg Sink Connector  
RUN confluent-hub install --no-prompt iceberg/iceberg-kafka-connect:1.9.2  
  
# Download the Dremio Auth Manager standalone JAR  
ADD --chown=appuser:appuser --chmod=644 \  
  https://github.com/dremio/iceberg-auth-manager/releases/download/authmgr-1.0.0/authmgr-oauth2-standalone-1.0.0.jar \  
  /usr/share/confluent-hub-components/iceberg-iceberg-kafka-connect/lib/authmgr-oauth2-standalone-1.0.0.jar  

```

### Step 3: Create the Docker Compose File[​](/data-sources/open-catalog/connecting-from-kafka-connect#step-3-create-the-docker-compose-file "Direct link to Step 3: Create the Docker Compose File")
Create a `docker-compose.yml` file that runs both a Kafka broker and the Kafka Connect worker:
Kafka Connect docker-compose.yml

```
services:  
  kafka:  
    image: confluentinc/cp-kafka:8.0.0  
    ports:  
      - "9092:9092"  
    environment:  
      CLUSTER_ID: "kafka-iceberg-cluster"  
      KAFKA_PROCESS_ROLES: "broker,controller"  
      KAFKA_NODE_ID: "1"  
      KAFKA_CONTROLLER_QUORUM_VOTERS: "1@kafka:29093"  
      KAFKA_LISTENERS: "PLAINTEXT://0.0.0.0:9093,CONTROLLER://0.0.0.0:29093,EXTERNAL://0.0.0.0:9092"  
      KAFKA_ADVERTISED_LISTENERS: "PLAINTEXT://kafka:9093,EXTERNAL://localhost:9092"  
      KAFKA_LISTENER_SECURITY_PROTOCOL_MAP: "PLAINTEXT:PLAINTEXT,CONTROLLER:PLAINTEXT,EXTERNAL:PLAINTEXT"  
      KAFKA_INTER_BROKER_LISTENER_NAME: "PLAINTEXT"  
      KAFKA_CONTROLLER_LISTENER_NAMES: "CONTROLLER"  
      KAFKA_OFFSETS_TOPIC_REPLICATION_FACTOR: 1  
    healthcheck:  
      test: ["CMD-SHELL", "kafka-broker-api-versions --bootstrap-server localhost:9093"]  
      interval: 10s  
      timeout: 5s  
      retries: 5  
  
  connect:  
    build: .  
    ports:  
      - "8083:8083"  
    depends_on:  
      kafka:  
        condition: service_healthy  
    environment:  
      CONNECT_BOOTSTRAP_SERVERS: "kafka:9093"  
      CONNECT_REST_ADVERTISED_HOST_NAME: "connect"  
      CONNECT_REST_PORT: "8083"  
      CONNECT_GROUP_ID: "iceberg-connect"  
      CONNECT_CONFIG_STORAGE_TOPIC: "iceberg-connect-config"  
      CONNECT_CONFIG_STORAGE_REPLICATION_FACTOR: 1  
      CONNECT_OFFSET_STORAGE_TOPIC: "iceberg-connect-offsets"  
      CONNECT_OFFSET_STORAGE_REPLICATION_FACTOR: 1  
      CONNECT_STATUS_STORAGE_TOPIC: "iceberg-connect-status"  
      CONNECT_STATUS_STORAGE_REPLICATION_FACTOR: 1  
      CONNECT_KEY_CONVERTER: "org.apache.kafka.connect.json.JsonConverter"  
      CONNECT_KEY_CONVERTER_SCHEMAS_ENABLE: "false"  
      CONNECT_VALUE_CONVERTER: "org.apache.kafka.connect.json.JsonConverter"  
      CONNECT_VALUE_CONVERTER_SCHEMAS_ENABLE: "false"  
      CONNECT_PLUGIN_PATH: "/usr/share/confluent-hub-components"  
    healthcheck:  
      test: ["CMD-SHELL", "curl -sf http://localhost:8083/ || exit 1"]  
      interval: 10s  
      timeout: 5s  
      retries: 10  
      start_period: 60s  

```

### Step 4: Build and Start the Cluster[​](/data-sources/open-catalog/connecting-from-kafka-connect#step-4-build-and-start-the-cluster "Direct link to Step 4: Build and Start the Cluster")
Build and start the Kafka cluster

```
docker compose build  
docker compose up -d  

```

Wait for Kafka Connect to be ready by checking its REST API:
Verify Kafka Connect is ready

```
curl -s http://localhost:8083/ | jq .  

```

## Deploying a Connector[​](/data-sources/open-catalog/connecting-from-kafka-connect#deploying-a-connector "Direct link to Deploying a Connector")
Connectors are deployed by submitting a JSON configuration file to the Kafka Connect REST API. The sections below provide example configurations for PAT and identity provider (IdP) authentication. To deploy a connector:
  1. Save the desired configuration to a file, for example `connector-config.json`.
  2. Replace the placeholder values in the file with your actual values.
  3. Submit the configuration to the Kafka Connect REST API:

Deploy the connector

```
curl -X POST http://localhost:8083/connectors \  
  -H "Content-Type: application/json" \  
  -d @connector-config.json  

```

  1. Verify the connector status:

Verify connector status

```
curl -s http://localhost:8083/connectors/iceberg-sink/status | jq .  

```

## Authenticating with Dremio Using Dremio PAT[​](/data-sources/open-catalog/connecting-from-kafka-connect#authenticating-with-dremio-using-dremio-pat "Direct link to Authenticating with Dremio Using Dremio PAT")
Below is an example connector configuration that writes data from a Kafka topic to an Iceberg table in Open Catalog, using a personal access token (PAT) for authentication:
Kafka Connector configuration with PAT authentication

```
{  
  "name": "iceberg-sink",  
  "config": {  
    "connector.class": "org.apache.iceberg.connect.IcebergSinkConnector",  
    "tasks.max": "2",  
    "topics": "<your_topic>",  
    "iceberg.tables": "<namespace>.<table>",  
    "iceberg.catalog.type": "rest",  
    "iceberg.catalog.uri": "http://$DREMIO_ADDRESS:8181/api/catalog",  
    "iceberg.catalog.warehouse": "default",  
    "iceberg.catalog.header.X-Iceberg-Access-Delegation": "vended-credentials",  
    "iceberg.catalog.rest.auth.type": "com.dremio.iceberg.authmgr.oauth2.OAuth2Manager",  
    "iceberg.catalog.rest.auth.oauth2.token-endpoint": "http://<dremio_address>:9047/oauth/token",  
    "iceberg.catalog.rest.auth.oauth2.grant-type": "urn:ietf:params:oauth:grant-type:token-exchange",  
    "iceberg.catalog.rest.auth.oauth2.client-id": "dremio",  
    "iceberg.catalog.rest.auth.oauth2.client-auth": "none",  
    "iceberg.catalog.rest.auth.oauth2.scope": "dremio.all",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token": "<personal_access_token>",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token-type": "urn:ietf:params:oauth:token-type:dremio:personal-access-token"  
  }  
}  

```

Replace:
  * ``your_topic`` with the Kafka topic to consume.
  * ``namespace`.`table`` with the target Iceberg table in Open Catalog.
  * ``dremio_address`` with the hostname of your Dremio instance.
  * ``personal_access_token`` with your Dremio PAT.


## Authenticating with Dremio Using OAuth2 (External Identity Provider)[​](/data-sources/open-catalog/connecting-from-kafka-connect#authenticating-with-dremio-using-oauth2-external-identity-provider "Direct link to Authenticating with Dremio Using OAuth2 \(External Identity Provider\)")
Below is an example connector configuration that uses an external IdP for user authentication. The Dremio Auth Manager obtains a JSON Web Token (JWT) from the IdP using the `client_credentials` grant type, then exchanges it for a Dremio OAuth access token.
Kafka Connector configuration with IdP authentication

```
{  
  "name": "iceberg-sink",  
  "config": {  
    "connector.class": "org.apache.iceberg.connect.IcebergSinkConnector",  
    "tasks.max": "2",  
    "topics": "<your_topic>",  
    "iceberg.tables": "<namespace>.<table>",  
    "iceberg.catalog.type": "rest",  
    "iceberg.catalog.uri": "http://$DREMIO_ADDRESS:8181/api/catalog",  
    "iceberg.catalog.warehouse": "default",  
    "iceberg.catalog.header.X-Iceberg-Access-Delegation": "vended-credentials",  
    "iceberg.catalog.rest.auth.type": "com.dremio.iceberg.authmgr.oauth2.OAuth2Manager",  
    "iceberg.catalog.rest.auth.oauth2.issuer-url": "http://<dremio_address>:9047/oauth/token",  
    "iceberg.catalog.rest.auth.oauth2.grant-type": "urn:ietf:params:oauth:grant-type:token-exchange",  
    "iceberg.catalog.rest.auth.oauth2.scope": "dremio.all",  
    "iceberg.catalog.rest.auth.oauth2.client-id": "dremio",  
    "iceberg.catalog.rest.auth.oauth2.client-auth": "none",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token.issuer-url": "http://<idp_address>:8080/realms/iceberg",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token.grant-type": "client_credentials",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token.scope": "<scope>",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token.client-id": "<client_id>",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token.client-secret": "<client_secret>",  
    "iceberg.catalog.rest.auth.oauth2.token-exchange.subject-token-type": "urn:ietf:params:oauth:token-type:jwt"  
  }  
}  

```

Replace:
  * ``your_topic`` with the Kafka topic to consume.
  * ``namespace`.`table`` with the target Iceberg table in Open Catalog.
  * ``dremio_address`` with the hostname of your Dremio instance.
  * ``idp_address`` with the hostname of your IdP (Keycloak in this example).
  * ``client_id`` and ``client_secret`` with the credentials issued by your IdP.
  * ``scope`` with the scope to request from the IdP.


  * Since Kafka Connect runs as a background service, it's not possible to use OAuth2 grant types that require interactive user logins.
  * The main OAuth2 settings (`issuer-url`, `grant-type`, `scope`, `client-id`) point to the Dremio token endpoint and configure the token exchange flow.
  * The `token-exchange.subject-token.*` settings configure how the Dremio Auth Manager obtains the subject token from the external IdP.


Was this page helpful?
[Previous Connect to Open Catalog from Apache Spark](/data-sources/open-catalog/connecting-from-spark)[Next Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Connect to Open Catalog from Apache Spark](/data-sources/open-catalog/connecting-from-spark)[Next Lakehouse Catalogs](/data-sources/lakehouse-catalogs)
