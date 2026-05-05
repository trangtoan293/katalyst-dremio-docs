---
url: /developer/mcp-server
title: "Dremio MCP Server | Dremio Enterprise Documentation"
depth: 5
crawled_at: 65340.228607625
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * Dremio MCP Server

Version: current [26.x]
On this page
# Dremio MCP Server
The 
The Dremio MCP Server has three different modes:
  * `FOR_DATA_PATTERNS` – Use this mode to explore data, generate SQL queries from natural language, and create views in Dremio.
  * `FOR_SELF` – Use this mode to perform system introspection and analyze performance.
  * `FOR_PROMETHEUS` – Use this mode and connect to your Prometheus setup, if one exists, to enhance insights with Dremio-related metrics such as the total number of Reflections.


As the Dremio MCP Server is an open-source project, you can review the codebase and contribute enhancements for review. For more education on MCP Server concepts, please enroll in our [Dremio MCP Server course](https://university.dremio.com/course/dremio-mcp) on Dremio University.
## Prerequisites[​](/developer/mcp-server#prerequisites "Direct link to Prerequisites")
Before configuring the Dremio MCP Server, ensure you have satisfied all of the prerequisites:
  1. You have an MCP-supporting AI chat client on your computer. For example, 
  2. You have access to a Dremio deployment, either Dremio on Kubernetes or Dremio on Docker.
  3. You have installed the 
  4. You have identified your URI endpoint.
     * For Dremio on Kubernetes deployments, use `https://<coordinator‑host>:<9047 or custom port>`.
     * For Dremio on Docker deployments, use `http://localhost:9047/`.
  5. You have generated a personal access token (PAT). The Dremio MCP Server operates based on the permissions associated with the PAT.
     * If you are using Dremio on Kubernetes, follow the steps in [Creating a PAT](/security/authentication/personal-access-tokens#creating-a-pat).
     * If you are using Dremio on Docker, refer to the directions below.


### Generating Personal Access Token for Dremio on Docker with `python3`[​](/developer/mcp-server#generating-personal-access-token-for-dremio-on-docker-with-python3 "Direct link to generating-personal-access-token-for-dremio-on-docker-with-python3")
If you are using Dremio on Docker and are using `python3` in your terminal, follow the directions below to generate your PAT:
  1. Create and navigate to a new directory.
  2. Create a virtual environment:
Creating a virtual environment

```
python3 -m venv venv  

```

  3. Activate the virtual environment:
Activating the virtual environment

```
source ./venv/bin/activate  

```

  4. Install `dremio-simple-query`, which is the package that you will import into your script to reveal the PAT:
Installing dremio-simple-query

```
pip install dremio-simple-query  

```

  5. Create a file called `print_token.py` in the Dremio directory using your preferred editor or the command line.
  6. Enter the following Python code into the newly created `print_token.py` file and replace the username and password with the credentials for your Dremio on Docker deployment:
Python script to generate PAT

```
from dremio_simple_query.connect import get_token, DremioConnection  
  
## URL to Login Endpoint  
login_endpoint = "http://localhost:9047/apiv2/login"  
  
## Payload for Login  
payload = {  
    "userName": "username",  
    "password": "Password"  
}  
  
## Get token from API  
token = get_token(uri = login_endpoint, payload=payload)  
  
print(token)  

```

  7. In your terminal, run the `print_token.py` script from within the directory where you saved the file:
Running the PAT generation script

```
python3 print_token.py  

```

  8. Your PAT is displayed in your terminal. Copy and paste your PAT into a notepad/text file for the Configuring Dremio MCP Server section.


### Generating Personal Access Token for Dremio on Docker with `uv`[​](/developer/mcp-server#generating-personal-access-token-for-dremio-on-docker-with-uv "Direct link to generating-personal-access-token-for-dremio-on-docker-with-uv")
If you are using Dremio on Docker and are using `uv` in your terminal, follow the directions below to generate your PAT:
  1. Create and navigate to a new directory.
  2. Create a virtual environment:
Creating a virtual environment with `uv`

```
uv init -q  

```

  3. Install `dremio-simple-query`, which is the package that you will import into your script to reveal the PAT:
Installing dremio-simple-query with `uv`

```
uv add dremio-simple-query  

```

  4. Create a file called `print_token.py` in the Dremio directory using your preferred editor or the command line.
  5. Enter the following Python code into the newly created `print_token.py` file and replace the username and password with the credentials for your Dremio on Docker deployment:
Python script to generate PAT

```
from dremio_simple_query.connect import get_token, DremioConnection  
  
## URL to Login Endpoint  
login_endpoint = "http://localhost:9047/apiv2/login"  
  
## Payload for Login  
payload = {  
    "userName": "username",  
    "password": "Password"  
}  
  
## Get token from API  
token = get_token(uri = login_endpoint, payload=payload)  
  
print(token)  

```

  6. In your terminal, run the `print_token.py` script from within the directory where you saved the file:
Running the PAT generation script with `uv`

```
uv run print_token.py  

```

  7. Your PAT is displayed in your terminal. Copy and paste your PAT into a notepad/text file for the Configuring Dremio MCP Server section.


## Installing Dremio MCP Server[​](/developer/mcp-server#installing-dremio-mcp-server "Direct link to Installing Dremio MCP Server")
You can install the Dremio MCP Server by cloning the associated GitHub repository:
  1. Open your terminal.
  2. Navigate to your preferred directory.
  3. Clone the Dremio MCP Server project using the command below:
Cloning the Dremio MCP Server repository

```
git clone https://github.com/dremio/dremio-mcp  

```

  4. Navigate to the new `dremio-mcp` directory:
Navigating to the project directory

```
cd dremio-mcp  

```

  5. Validate a successful install by running the command below:
Validating installation

```
uv run dremio-mcp-server --help  

```

Your installation was successful if you see the following output:
Expected output for successful installation

```
Usage: dremio-mcp-server [OPTIONS] COMMAND [ARGS]...  
  
╭─ Options ────────────────────────────────────────────────────────────────────────╮  
│ --install-completion            Install completion for the current shell.        │  
│ --show-completion               Show completion for the current shell, to copy   │  
│                                 it or customize the installation.                │  
│ --help                -h        Show this message and exit.                      │  
╰──────────────────────────────────────────────────────────────────────────────────╯  
╭─ Commands ───────────────────────────────────────────────────────────────────────╮  
│ run      Run the DremioAI MCP server                                             │  
│ tools    Support for testing tools directly                                      │  
│ config   Configuration management                                                │  
╰──────────────────────────────────────────────────────────────────────────────────╯  

```



## Configuring Dremio MCP Server[​](/developer/mcp-server#configuring-dremio-mcp-server "Direct link to Configuring Dremio MCP Server")
You can configure the Dremio MCP Server by creating a `dremioai` config file to provide your URI endpoint and PAT token:
  * **URI endpoint** for the `GET` and `POST` commands submitted by the Dremio MCP Server.
  * **PAT** for authentication to Dremio. If you do not want the PAT to leak into your shell history file, we recommend you create a file with your PAT in it and pass it as an argument to the `dremioai` config provided below instead of using the plain text PAT value.


### Creating Configuration Files[​](/developer/mcp-server#creating-configuration-files "Direct link to Creating Configuration Files")
  1. Modify the command template below and replace placeholder text with your URI endpoint and PAT token or path to file with your PAT:
Creating the `dremioai` configuration

```
uv run dremio-mcp-server config create dremioai \  
--uri <dremio uri> \  
--pat <dremio pat>  

```

  2. Run the command in your terminal. Be sure to watch for spaces that you may have created by accident.
  3. Create the Claude configuration file:
Creating the Claude configuration

```
uv run dremio-mcp-server config create claude  

```

  4. Validate the creation of the Claude config file by running the following command:
Validating the Claude configuration

```
uv run dremio-mcp-server config list --type claude  

```

Your config file was created successfully if you see the following output:
Expected Claude configuration output

```
Default config file: '/Users/..../Library/Application Support/Claude/claude_desktop_config.json' (exists = True)  
{  
'globalShortcut': '',  
'mcpServers': {  
    'Dremio': {  
        'command': '/opt/homebrew/Cellar/uv/0.6.14/bin/uv',  
        'args': [  
            'run',  
            '--directory',  
            '...../dremio-mcp',  
            'dremio-mcp-server',  
            'run'  
        ]  
    }  
  }  
}  

```

  5. Validate the creation of the `dremioai` config file by running the following command:
Validating the `dremioai` configuration

```
uv run dremio-mcp-server config list --type dremioai  

```

Your config file was created successfully if you see the following output:
Expected `dremioai` configuration output

```
Default config file: /Users/..../.config/dremioai/config.yaml (exists = True)  
  dremio:  
    enable_experimental: false  
    pat: ....  
    uri: ....  
tools:  
  server_mode: FOR_DATA_PATTERNS  

```



## Resources and Tools[​](/developer/mcp-server#resources-and-tools "Direct link to Resources and Tools")
MCP Servers define resources and tools that the LLM powering the AI chat client or agent can choose to use.
Resources are data sources that LLMs can access and provide data without performing significant computation. You will see the Dremio MCP Server frequently use the following resources:
  * `GetUsefulSystemTableNames`: Retrieves a dictionary of system tables with descriptions.
  * `GetSchemaOfTable`: Retrieves schema information for a table.
  * `GetDescriptionOfTableOrSchema`: Retrieves descriptions and tags for a table or schema.
  * `GetTableOrViewLineage`: Retrieves lineage information for a table or view.


The LLM uses tools to instruct the MCP Server in Dremio to perform actions, including retrieving data. You will see the Dremio MCP Server frequently use the following tool:
  * `RunSqlQuery`: Run a SQL command and return the result in JSON format.


## Exploring Using Claude[​](/developer/mcp-server#exploring-using-claude "Direct link to Exploring Using Claude")
You can explore your Dremio data using Claude Desktop:
  1. Open Claude Desktop.
  2. Start a new chat.
  3. Ask the following question:
Example query to explore Dremio

```
what tables or views are available in Dremio?  

```

You will see Claude instruct the Dremio MCP Server using resources **GetUsefulSystemTableNames** and **GetSchemaOfTable** to explore Dremio. You can observe the JSON responses that the Dremio MCP Server returns. For example:
Example JSON response from Dremio MCP Server

```
{  
  "entityType": "dataset",  
  "id": "a0972414-3955-49b8-9c5a-a1dadbf285f0",  
  "type": "PHYSICAL_DATASET",  
  "path": ["INFORMATION_SCHEMA", "TABLES"],  
  "createdAt": "2025-06-11T14:23:44.678Z",  
  "tag": "9sugkzFYFX0=",  
  "approximateStatisticsAllowed": false,  
  "fields": [  
    {"name": "TABLE_CATALOG", "type": {"name": "VARCHAR"}},  
    {"name": "TABLE_SCHEMA", "type": {"name": "VARCHAR"}},  
    {"name": "TABLE_NAME", "type": {"name": "VARCHAR"}},  
    {"name": "TABLE_TYPE", "type": {"name": "VARCHAR"}}  
  ],  
  "isMetadataExpired": false,  
  "lastMetadataRefreshAt": "2025-06-11T14:23:44.940Z",  
  "tags": [],  
  "description": ""  
}  

```



## Querying Using Claude[​](/developer/mcp-server#querying-using-claude "Direct link to Querying Using Claude")
You can query your data using Claude by asking specific questions about the tables and views you discovered. Your existing Reflections will automatically work with the Dremio MCP server queries.
In your chat, ask Claude the following question:
Example query for sample data

```
for the first table or view you found, return some sample data and summarize the data perspective this table provides  

```

You will see Claude instruct the Dremio MCP Server using the **RunSQLQuery** tool to query data in Dremio, and similarly, you will see JSON responses from the Dremio MCP Server back to Claude. You can continue to ask Claude questions about your data and watch Claude continue to submit commands to Dremio via the Dremio MCP Server.
## Review Jobs[​](/developer/mcp-server#review-jobs "Direct link to Review Jobs")
All MCP server operations appear as regular jobs executed via REST in the Dremio console.
To identify MCP activity:
  1. Navigate to the Jobs page in the Dremio console.
  2. Filter by the username associated with your PAT.
  3. Filter by QUERY TYPE = External Tools.
  4. Filter by the time frame during which you engaged with the MCP Server.
  5. Jobs submitted by the MCP Server will show SQL that start with `dremioai:`.


## Dremio MCP Server Support[​](/developer/mcp-server#dremio-mcp-server-support "Direct link to Dremio MCP Server Support")
As the Dremio MCP Server is an open-source project, it is not covered by Dremio Support Policies. If you need assistance, please create an issue in the [Dremio Community Forums](https://community.dremio.com/).
Was this page helpful?
[Previous Formatting Data to a Table](/developer/data-formats/table)[Next Reference](/reference)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Formatting Data to a Table](/developer/data-formats/table)[Next Reference](/reference)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fadmin%2Fmonitoring%2Fjobs%2Fviewing-query-profiles%2F&_biz_t=1777951660657&_biz_i=Visual%20Profile%20%7C%20Dremio%20Documentation&_biz_n=2703&rnd=311999&cdn_o=a&_biz_z=1777951660714)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fapache-iceberg%2Frolling-back%2F&_biz_t=1777951660674&_biz_i=Dremio%20Documentation&_biz_n=2704&rnd=717975&cdn_o=a&_biz_z=1777951660714)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fdata-formats%2Fapache-iceberg%2Ftable-properties%2F&_biz_t=1777951660686&_biz_i=Supported%20Properties%20of%20Apache%20Iceberg%20Tables%20%7C%20Dremio%20Documentation&_biz_n=2705&rnd=966654&cdn_o=a&_biz_z=1777951660714)![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fmcp-server%2F&_biz_t=1777951660713&_biz_i=Dremio%20Documentation&_biz_n=2706&rnd=591524&cdn_o=a&_biz_z=1777951660714)
