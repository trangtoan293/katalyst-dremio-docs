---
url: /admin/service-telemetry-kubernetes
slug: /admin/service-telemetry-kubernetes
title: "Service Telemetry for Kubernetes Deployments &lt;Chip&gt;Enterprise&lt;/Chip&gt; | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64025.789497833
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * Service Telemetry

Version: current [26.x]
On this page
# Service Telemetry for Kubernetes Deployments Enterprise
As of Dremio 26.0, enterprise customers deploying Dremio clusters on Kubernetes will automatically transmit telemetry data back to Dremio's corporate endpoint. This telemetry provides valuable insights into system performance and health, and is also used in the calculations for usage-based [billing](/admin/licensing/usage). Telemetry can be disabled through configuration; however, this is not considered a best practice because telemetry helps Dremio ensure stability and timely support.
## Telemetry Data Collection[​](/admin/service-telemetry-kubernetes/)
Dremio's telemetry data collection is strictly limited to operational and performance metrics. These metrics provide visibility into various components and services, ensuring optimal performance and reliability. Importantly, no customer content (e.g., business data) or user-entered information is transmitted. If you would like to develop a deeper understanding of the metrics transmitted and their contents, you can set up your own internal monitoring of your Dremio cluster by following the steps in [Monitoring Dremio Nodes](/admin/monitoring/dremio-nodes).
The collected telemetry data is categorized as follows:  
| Category  | Description  |  
| --- | --- |  
| **Application Metrics**  | These metrics provide insights into the usage and performance of objects within a Dremio deployment, including:
  * Number of queries, Reflections, sources, and views.
  * Success and failure rates of queries.
  * Success and failure rates of Reflection and source refresh operations.

 |  
| **Java Metrics**  | These metrics capture internal Java Virtual Machine (JVM) performance indicators from containers running the Dremio application, such as:
  * Number of active threads.
  * Memory allocation and usage.
  * Garbage collection activity and pauses.

 |  
| **Service Metrics**  | These metrics measure the health of core components supporting Dremio's execution and coordination services, including:
  * KVstore performance.
  * Zookeeper availability and network health.

 |  
| **Kubernetes Metrics**  | These metrics provide insight into container and pod behavior for all containers in a Dremio deployment, including:
  * CPU, memory, and storage requests.
  * Container restarts and readiness.
  * StatefulSet desired and current pod count.

 |  
## Telemetry Transmission Requirements[​](/admin/service-telemetry-kubernetes/)
Telemetry transmission to Dremio follows the [Dremio Subscription Agreement](https://www.dremio.com/legal/dremio-subscription-agreement/).
### Network Requirements for Telemetry Transmission[​](/admin/service-telemetry-kubernetes/)
To ensure successful telemetry transmission, the following network configurations must be in place:
  * Your network must allow traffic egress to Dremio's endpoint `observability.dremio.com`.
  * Dremio's OpenTelemetry collectors use port 443 for secure data transmission via TLS.


### Setting Up a Proxy[​](/admin/service-telemetry-kubernetes/)
If traffic egresses to the endpoint and the port is restricted, a proxy can be configured to enable telemetry transmission:
  1. Edit your `.yaml` configuration file to deploy Dremio to Kubernetes. For more information, refer to [Configuring Your Values](/deploy-dremio/configuring-kubernetes).
  2. Add your proxy configuration values to the `.yaml` file using the following syntax:
     * HTTPS Proxy (Recommended)
     * HTTP Proxy

```
telemetry:  
  extraEnvs: []  
    - name: HTTPS_PROXY  
      value: https://proxy.example.com:443  

```


```
telemetry:  
  extraEnvs: []  
    - name: HTTP_PROXY  
      value: http://proxy.example.com:3128  

```



## Troubleshooting or Support[​](/admin/service-telemetry-kubernetes/)
For troubleshooting or support, please contact your account representative or Dremio Support.
## Related Topics[​](/admin/service-telemetry-kubernetes/)
  * [Licensing](/admin/licensing) - Learn more about Dremio's licensing and telemetry.
  * [Billing](/admin/licensing/usage) - Learn more about Dremio's billing and usage data.


Was this page helpful?
[Previous AWS Bedrock](/admin/model-providers/aws-bedrock)[Next Automated Backup](/admin/automated-backups)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AWS Bedrock](/admin/model-providers/aws-bedrock)[Next Automated Backup](/admin/automated-backups)
!
