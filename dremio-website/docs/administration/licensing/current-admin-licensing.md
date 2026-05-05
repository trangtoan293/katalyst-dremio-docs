---
url: /admin/licensing
title: "Licensing | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64024.6425035
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * Licensing

Version: current [26.x]
On this page
# Licensing
As of Dremio 26.0, a new licensing model has been introduced, affecting Dremio deployments on Kubernetes. Understanding these requirements is crucial for ensuring a smooth deployment and uninterrupted operation.
## License Key Requirement[​](/admin/licensing/#license-key-requirement "Direct link to License Key Requirement")
A valid license key is mandatory for deploying a Dremio cluster on Kubernetes. Without it, the cluster will fail to start. This requirement applies to both new installations and upgrades. A single license key covers all environments, including development, testing, and production.
Additionally, Dremio's telemetry functionality relies on a valid license key. Without one, telemetry data will not be accurately reported, potentially affecting system monitoring and analytics. For more information about telemetry, see [Service Telemetry for Kubernetes Deployments](/admin/service-telemetry-kubernetes).
Do you know you can obtain a **free trial license key** for Dremio? Learn more about it in [Get Started with the Enterprise Edition Free Trial](/get-started/kubernetes-trial).
## Obtain a License Key[​](/admin/licensing/#obtain-a-license-key "Direct link to Obtain a License Key")
Acquiring a license key for Dremio 26.0+ is a fully automated process where customers generate their own license keys through the [Dremio Support Portal](https://support.dremio.com/hc/en-us), without needing to contact Dremio Support or Sales. The process is self-service:
  1. Go to the [Dremio Support Portal](https://support.dremio.com/hc/en-us) and click `Submit a request`. Create a support ticket and, in the **Subject** field, be sure to include "License Request". This helps us identify and route your request quickly.
  2. After the support ticket is created, you’ll receive an automated response message asking you to confirm whether you are requesting a new or replacement license specifically for deploying Dremio 26.0+ on Kubernetes. Reply to confirm. This step is important to ensure your ticket is routed correctly.


Once you confirm your request, you’ll automatically receive the appropriate license file required to deploy your Dremio cluster. No further action is needed unless Dremio Support or Sales follows up with additional questions.
![](https://docs.dremio.com/images/licensing-support-portal.jpeg)
When you download your license file, it should look like this:
![](https://docs.dremio.com/images/licensing-license-file.png)
## Use Your License Key for Kubernetes Deployment[​](/admin/licensing/#use-your-license-key-for-kubernetes-deployment "Direct link to Use Your License Key for Kubernetes Deployment")
To ensure your Dremio cluster starts up correctly, follow these steps to apply your license key:
  1. Open the license file you have obtained in the support ticket (see the section above on [Obtain a License Key](/admin/licensing/#obtain-a-license-key)), and copy the license key string.
  2. Go to your Kubernetes deployment configuration file and paste the license key string to the `license:` property enclosed in double quotation marks (`" "`). For more information about the configuration file, see [Configuring Your Values](/deploy-dremio/configuring-kubernetes).
![](https://docs.dremio.com/images/licensing-configured-license.png)


With the license key set in your configuration file, you can proceed to [Deploying Dremio to Kubernetes](/deploy-dremio/deploy-on-kubernetes).
## Verify Your License[​](/admin/licensing/#verify-your-license "Direct link to Verify Your License")
During startup, Dremio will validate the license key using its internal mechanisms (connectivity to the Internet is not required). If the key is missing, incorrect, expired, or invalid, the cluster will not start, and an error message will be logged to indicate the issue. If the license is valid, the cluster will start as expected.
## Troubleshooting Tips[​](/admin/licensing/#troubleshooting-tips "Direct link to Troubleshooting Tips")
If you encounter any verification issues, do the following:
  * Double-check that the license key was copied correctly (no extra spaces or line breaks) and is enclosed in double-quotation marks (`" "`).
  * Review the Dremio logs for license-related error messages.
  * Reach out via your support ticket for further assistance.


Was this page helpful?
[Previous Upgrade Dremio](/admin/admin-dremio-kubernetes/upgrade)[Next Usage](/admin/licensing/usage)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Upgrade Dremio](/admin/admin-dremio-kubernetes/upgrade)[Next Usage](/admin/licensing/usage)
