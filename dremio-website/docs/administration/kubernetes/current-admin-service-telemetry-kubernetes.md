---
url: /admin/service-telemetry-kubernetes
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
## Telemetry Data Collection[​](/admin/service-telemetry-kubernetes/#telemetry-data-collection "Direct link to Telemetry Data Collection")
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
## Telemetry Transmission Requirements[​](/admin/service-telemetry-kubernetes/#telemetry-transmission-requirements "Direct link to Telemetry Transmission Requirements")
Telemetry transmission to Dremio follows the [Dremio Subscription Agreement](https://www.dremio.com/legal/dremio-subscription-agreement/).
### Network Requirements for Telemetry Transmission[​](/admin/service-telemetry-kubernetes/#network-requirements-for-telemetry-transmission "Direct link to Network Requirements for Telemetry Transmission")
To ensure successful telemetry transmission, the following network configurations must be in place:
  * Your network must allow traffic egress to Dremio's endpoint `observability.dremio.com`.
  * Dremio's OpenTelemetry collectors use port 443 for secure data transmission via TLS.


### Setting Up a Proxy[​](/admin/service-telemetry-kubernetes/#setting-up-a-proxy "Direct link to Setting Up a Proxy")
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



## Troubleshooting or Support[​](/admin/service-telemetry-kubernetes/#troubleshooting-or-support "Direct link to Troubleshooting or Support")
For troubleshooting or support, please contact your account representative or Dremio Support.
## Related Topics[​](/admin/service-telemetry-kubernetes/#related-topics "Direct link to Related Topics")
  * [Licensing](/admin/licensing) - Learn more about Dremio's licensing and telemetry.
  * [Billing](/admin/licensing/usage) - Learn more about Dremio's billing and usage data.


Was this page helpful?
[Previous AWS Bedrock](/admin/model-providers/aws-bedrock)[Next Automated Backup](/admin/automated-backups)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous AWS Bedrock](/admin/model-providers/aws-bedrock)[Next Automated Backup](/admin/automated-backups)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fservice-telemetry-kubernetes%2F&_biz_t=1777950345259&_biz_i=Service%20Telemetry%20for%20Kubernetes%20Deployments%20%3CChip%3EEnterprise%3C%2FChip%3E%20%7C%20Dremio%20Documentation&_biz_n=45&rnd=135904&cdn_o=a&_biz_z=1777950345259)
