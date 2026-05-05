---
url: /data-products/ai-agent
title: "Explore Using AI Agent | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64033.225739333
---

  * [Dremio Enterprise Home](/)
  * [Build Data Products](/data-products)
  * Explore Using AI Agent

Version: current [26.x]
On this page
# Explore Using Dremio's AI Agent
Understanding your data quickly using Dremio's AI Agent, an interface built into the Dremio console that allows users to converse with their data using natural language.
The AI Agent accesses data and entities that the logged in user has privileges on to address the prompt.
The AI Agent is currently optimized for the following tasks:
  * **Discover and Explore** : Learn about the data that is available to you to answer your business question.
  * **Analyze** : Ask questions using business terms using natural language and get insights instantly. The AI Agent goes beyond basic analysis to detect patterns in the data and return actionable insights.
  * **Visualize** : Quickly visualize the patterns and trends in your data within the Dremio console.
  * **Explain and Optimize SQL** : Ask the agent to review SQL queries, identify bottlenecks, and suggest optimizations. For more information on this, see [**Explain SQL**](/get-started/quick_tour/#explain-sql).
  * **Analyze and Improve Job Performance** : Ask the agent to review past jobs, identify performance issues, and suggest ways to improve them. For more information on this, see [**Explain Job**](/admin/monitoring/jobs/#explain-job).


As Dremio's AI Agent reasons through your questions and requirements, you're able to see the actions it is taking directly in the interface so you can review, audit, and understand how the response is generated.
Generative AI can make mistakes; therefore, you should verify all output.
## Use Dremio's AI Agent[​](/data-products/ai-agent#use-dremios-ai-agent "Direct link to Use Dremio's AI Agent")
To use Dremio's AI Agent, you can access it by:
  1. Typing a question into the chat on the homepage in the Dremio console.
  2. Use the shortcut keys ⌘+Shift+G on a Mac or Ctrl+Shift+G on Windows to open the agent.


To use the AI Agent, you need to be granted CALL MODEL on the default model provider.
## Discover and Explore[​](/data-products/ai-agent#discover-and-explore "Direct link to Discover and Explore")
Dremio's AI Agent will help you discover available data and provide a detailed breakdown of schema, as well as offer guidance on what tables and views you may want to use. The AI Agent will use wikis and labels as well as perform sampling or other simple analysis on the datasets to determine relevance and interesting patterns. The more detailed the question, the better the insight that the AI Agent can provide.  
| Okay Prompt  | Great Prompt  |  
| --- | --- |  
| What tables can I use?  | Which tables or views have customer location data?  |  
| How can I analyze time series data?  | Which tables or views can I use to do a time series analysis on customer activity?  |  
| What is the `customer_activity` table?  | How is the `customer_activity` table structured, and what other tables does it relate to?  |  
## Analyze[​](/data-products/ai-agent#analyze "Direct link to Analyze")
Dremio's AI Agent will write and execute SQL on your behalf based on your natural language input and the information available from the semantic layer. From within the chat, you can further audit the SQL by expanding the tool calls in the chat window.  
| Okay Prompt  | Great Prompt  |  
| --- | --- |  
| I want to see analysis of customer activity  | I want to see an analysis of customer purchase activity by region, by customer type for each month of the year.  |  
| Which customers are the most valuable?  | Which customers have spent the most with us over the lifetime of the relationship?  |  
## Visualize[​](/data-products/ai-agent#visualize "Direct link to Visualize")
Dremio's AI Agent will visualize insights on your behalf based on your natural language input. The details you provide, including the chart type, axis requirements, grouping, or trendlines, will be considered by the LLM. The visualization will be accompanied by insights that serve as a narrative for the chart that the AI Agent generated. Once a visualization has been created, you can toggle between the visualization and a grid representation of the data that is used to back the visualization. Dremio's AI Agent will also create diagrams using Mermaid.js when prompted or when deemed necessary by the agent in response to a prompt.
The AI Agent can return the following types of visualizations: Bar, Line, Area, Scatter, Pie, Heatmap  
| Okay Prompt  | Great Prompt  |  
| --- | --- |  
| Visualize the data  | Visualize the data as a bar chart with month on the x asis and sum of purchase value as the y axis  |  
| Create a visual trendline showing me the activity  | Create a visualization with a trendline showing customer activity by month?  |  
Was this page helpful?
[Previous Star Objects](/data-products/discover/bookmarks)[Next Develop Data Products](/data-products/develop)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Star Objects](/data-products/discover/bookmarks)[Next Develop Data Products](/data-products/develop)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdata-products%2Fai-agent%2F&_biz_t=1777950353000&_biz_i=Explore%20Using%20AI%20Agent%20%7C%20Dremio%20Documentation&_biz_n=69&rnd=375996&cdn_o=a&_biz_z=1777950353000)
