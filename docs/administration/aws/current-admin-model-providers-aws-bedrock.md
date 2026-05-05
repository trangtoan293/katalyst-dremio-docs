---
url: /admin/model-providers/aws-bedrock
title: "Configure AWS Bedrock as a Model Provider | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64188.293144291
---

  * [Dremio Enterprise Home](/)
  * [Administration](/admin)
  * [Configure Model Providers](/admin/model-providers)
  * AWS Bedrock

Version: current [26.x]
On this page
# Configure AWS Bedrock as a Model Provider
See the steps for adding an AWS Bedrock model provider and configuring authentication.
## Supported Authentication Methods[​](/admin/model-providers/aws-bedrock/#supported-authentication-methods "Direct link to Supported Authentication Methods")
You can authenticate to AWS Bedrock using access keys. Follow the steps in [Access Key Authentication](/admin/model-providers/aws-bedrock/#access-key-authentication) to configure.
## Prerequisites[​](/admin/model-providers/aws-bedrock/#prerequisites "Direct link to Prerequisites")
  * AWS account with Bedrock access
  * AWS Bedrock model ID must comply with 
  * For Anthropic models: Submit the model access form once per AWS account (see [Enable Anthropic Models](/admin/model-providers/aws-bedrock/#enable-anthropic-models))


## Access Key Authentication[​](/admin/model-providers/aws-bedrock/#access-key-authentication "Direct link to Access Key Authentication")
### Step 1: Create an Amazon Bedrock API Key[​](/admin/model-providers/aws-bedrock/#step-1-create-an-amazon-bedrock-api-key "Direct link to Step 1: Create an Amazon Bedrock API Key")
  1. In your AWS account, navigate to **AWS Bedrock Console** &gt; **API Keys**.
  2. Click **Create API Key**.


Creating this key automatically creates a user with `AmazonBedrockLimitedAccess` permission.
### Step 2: Generate an Access Key[​](/admin/model-providers/aws-bedrock/#step-2-generate-an-access-key "Direct link to Step 2: Generate an Access Key")
  1. In your AWS account, go to **IAM Console** &gt; **Users**.
  2. Select the created user (e.g., `BedrockAPIKey-xxxxx`).
  3. Navigate to the **Security credentials** tab.
  4. Click **Create access key**.
  5. Save the **Access Key ID** and **Secret Access Key**.


### Step 3: Configure in Dremio[​](/admin/model-providers/aws-bedrock/#step-3-configure-in-dremio "Direct link to Step 3: Configure in Dremio")
  1. In the Dremio console, click ![This is the Settings icon.](https://docs.dremio.com/images/green-settings-icon.png) in the side navigation bar to go to the Settings page.
  2. Select **Preferences** in the settings sidebar.
  3. Enable the **AI Features** flag.
  4. Click **Add model provider**.
  5. In the Add model provider dialog, select **Amazon Bedrock** as the model provider service.
  6. For **Name** , enter a name for the model provider.
  7. For **Region** , select your Bedrock region (e.g., `us-east-1`).
  8. For **Authentication Method** , select **Access Key**.
  9. For **Access Key ID** , enter your access key ID.
  10. For**Secret Access Key** , enter your secret access key.
  11. For **Default Model ID** , enter the model ID you want to use as the default.
  12. (Optional) For **Allowed Model IDs for AI Functions** , enter the model IDs you want to make available for AI functions.
  13. Click **Add**.


The AWS Bedrock model ID must be a valid model identifier that begins with a regional prefix (for example, `us.anthropic.claude-opus-4-1-20250805-v1:0`). For more information, see 
## Enable Anthropic Models[​](/admin/model-providers/aws-bedrock/#enable-anthropic-models "Direct link to Enable Anthropic Models")
To use Anthropic models (e.g., Claude Sonnet 4.5):
  1. In your AWS account, navigate to **AWS Bedrock Console** &gt; **Model catalog**.
  2. Select any Anthropic model (e.g., Claude Sonnet 4.5).
  3. Click **Open in Playground**.
  4. Complete the **Anthropic use case form** (one-time per AWS account).


## Rate Limits[​](/admin/model-providers/aws-bedrock/#rate-limits "Direct link to Rate Limits")
When using AWS Bedrock model providers, you may encounter rate limiting errors such as "429 Too Many Tokens (Rate Limit Exceeded)". This is particularly common with new AWS accounts that start with lower or fixed quotas.
If you experience rate limiting issues:
  1. Check your current quotas in the AWS Bedrock console.
  2. Request a quota increase from AWS Support by providing:
     * Quota name
     * Model ID
     * AWS region
     * Use case description
     * Projected token and request usage


For more information about AWS Bedrock quotas and limits, see the 
## Troubleshoot[​](/admin/model-providers/aws-bedrock/#troubleshoot "Direct link to Troubleshoot")
  * For access denied errors with access keys, verify you are using the correct access key, the user has `AmazonBedrockLimitedAccess` permission, you have signed the one-time accept terms for Claude (if using), and the region is correct for the selected model.
  * For model access denied errors, check the model availability in your selected region. For details, see [Anthropic use case form](/admin/model-providers/aws-bedrock/#enable-anthropic-models).


Was this page helpful?
[Previous Configure Model Providers](/admin/model-providers)[Next Service Telemetry](/admin/service-telemetry-kubernetes)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Configure Model Providers](/admin/model-providers)[Next Service Telemetry](/admin/service-telemetry-kubernetes)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fmodel-providers%2Faws-bedrock%2F&_biz_t=1777950509129&_biz_i=Configure%20AWS%20Bedrock%20as%20a%20Model%20Provider%20%7C%20Dremio%20Documentation&_biz_n=372&rnd=972564&cdn_o=a&_biz_z=1777950509129)
