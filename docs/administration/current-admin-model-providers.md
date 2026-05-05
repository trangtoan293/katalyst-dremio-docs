---
url: /admin/model-providers
slug: /admin/model-providers
title: "Configure Model Providers &lt;Chip&gt;Enterprise&lt;/Chip&gt; | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64025.574837833
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * Configure Model Providers

Version: current [26.x]
On this page
# Configure Model Providers Enterprise
You configure model providers for your organization's AI features when deploying Dremio. After you configure at least one model provider, you must set a default model provider and can optionally set an allowlist of available models. Dremio uses this default provider for all Dremio's AI Agent interactions, whereas the allowlist models can be used by anyone writing AI functions. By default, CALL MODEL is granted to all users for all new model providers, so if the default changes, users can continue to use the AI Agent without interruption.
## Supported Model Providers[​](/admin/model-providers/)
Dremio supports configuration of the following model providers and models. Dremio recommends using enterprise-grade reasoning models for the best performance and experience.  
| Service  | Models  | Connection Method(s)  |  
| --- | --- | --- |  
| **OpenAI**  | 
  * gpt-5
  * gpt-5-mini
  * gpt-5-nano
  * gpt-4.1
  * gpt-4o
  * gpt-4-turbo
  * gpt-4.1-mini
  * o3-mini
  * o4-mini
  * o3

 | Organization ID + API Key  |  
| **Anthropic**  | 
  * claude-sonnet-4-5
  * claude-opus-4-1
  * claude-opus-4
  * claude-sonnet-4

 | API Key  |  
| **Google Gemini**  | 
  * gemini-2.5-pro 

 | API Key  |  
| **Amazon Bedrock**  | 
  * claude-opus-4-1
  * claude-opus-4
  * claude-sonnet-4-5
  * claude-sonnet-4

 | Region + Access Key ID + Secret Access Key  |  
| **Azure OpenAI**  | 
  * claude-opus-4-1
  * claude-sonnet-4-5
  * gpt-5
  * gpt-5-mini
  * gpt-5-nano
  * gpt-4.1
  * o4-mini
  * o3

 | Resource Name + Directory ID + Application ID + Client Secret Value  |  
Dremio does not validate the model associated with an AWS Bedrock model ID or Azure OpenAI deployment name upon model provider creation. Using an unsupported model can lead to runtime errors or a higher rate of inaccurate responses.
## Add Model Provider[​](/admin/model-providers/)
To add a model provider, the **AI features** preference must be enabled in [Preferences](/help-support/advanced-topics/dremio-preferences).
For steps on adding an AWS Bedrock model provider, see [Configure AWS Bedrock as a Model Provider](/admin/model-providers/aws-bedrock).
For all other model providers, follow these steps to add a model provider in the Dremio console:
  1. Click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the side navigation bar to go to the Settings page.
  2. Select **AI configurations** in the settings sidebar.
  3. Click **Add model provider**.


## Default Model Provider[​](/admin/model-providers/)
To delete the model provider, you must assign a new default unless you are deleting the last available model provider. To update the default model provider to a new one, you must have MODIFY privilege on both the current default and the new proposed default model provider.
Was this page helpful?
[Previous Usage](/admin/licensing/usage)[Next AWS Bedrock](/admin/model-providers/aws-bedrock)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Usage](/admin/licensing/usage)[Next AWS Bedrock](/admin/model-providers/aws-bedrock)
