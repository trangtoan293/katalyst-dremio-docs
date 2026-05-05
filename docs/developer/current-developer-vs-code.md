---
url: /developer/vs-code
slug: /developer/vs-code
title: "Visual Studio Code | Dremio Documentation"
depth: 2
crawled_at: 64054.311364958
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * Visual Studio Code

Version: current [26.x]
On this page
# Visual Studio Code
The Dremio Visual Studio (VS) Code extension transforms VS Code into an AI-ready workspace, enabling you to discover, explore, and analyze enterprise data with natural language and SQL side by side, directly in your IDE.
# What You Can Do
The VS Code extension for Dremio allows you to:
  * Connect to one or more Dremio Enterprise clusters from within VS Code.
  * Browse & discover with context – Explore governed objects in your catalog, complete with metadata and semantic context.
  * Query with intelligence – Write and run SQL with autocomplete, formatting, and syntax highlighting — or let AI agents generate SQL for you.
  * Explore and get insights using natural language – Use the built-in Microsoft Copilot integration to ask questions in plain English, moving from questions to insights faster, without leaving your development environment.


## Prerequisites​
Before you begin, ensure you have:
  * Access to a Dremio Enterprise 25.0+ cluster.
  * Personal access token (PAT) for connectivity to your cluster. For instructions, see [Creating a PAT](/security/authentication/personal-access-tokens).
  * Visual Studio Code installed with access to the Extensions tab in the tool.


## Install VS Code Extension for Dremio​
To install the extension:
  1. Launch VS Code and click the Extensions button on the left navigation toolbar.
  2. Search for and click the **Dremio** extension.
  3. On the Dremio extension page, click **Install**. Once the installation is complete, you're ready to start querying Dremio from VS Code.


## Connect to Dremio from VS Code​
To create a connection from VS Code:
  1. From the extension for Dremio, click the + button that appears when you hover over the **Connections** heading on the left panel.
  2. For **Select your Dremio deployment** , select **Dremio Software**.
  3. Enter the Dremio host name, including the port. For example, `https://acme-dremio:9047`. Press **Enter**.
  4. Click **Personal Access Token** and enter the PAT that you have previously generated and press Enter.
  5. The connection to your Dremio Enterprise cluster will appear on the left under **Connections**.
  6. To browse your data, click `dremio` under your connection.


## Use the Copilot Integration​
With Copilot in VS Code set to Agent mode, you can interact with your data through plain-language queries powered by Dremio’s semantic layer. For example, try asking:
  * "What curated views are available for financial analysis?"
  * "Summarize sales trends over the last 90 days by product category."
  * "Write SQL to compare revenue growth in North America vs. Europe." Behind the scenes, Copilot taps into Dremio’s AI-enabled semantic layer and autonomous optimization to ensure queries run with sub-second performance — whether executed by humans or AI agents.


Was this page helpful?
[Previous Develop Applications with Python](/developer/python)[Next File and Table Formats](/developer/data-formats)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Develop Applications with Python](/developer/python)[Next File and Table Formats](/developer/data-formats)
!!
