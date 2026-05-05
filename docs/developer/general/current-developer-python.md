---
url: /developer/python
title: "Develop Applications with Python | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64054.557717208
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * Develop Applications with Python

Version: current [26.x]
On this page
# Develop Applications with Python
You can develop client applications in Python that use that use [Arrow Flight](/developer/arrow-flight) and connect to Dremio's Arrow Flight server endpoint. For help getting started, try out the sample application.
## Sample Python Arrow Flight Client Application[​](/developer/python#sample-python-arrow-flight-client-application "Direct link to Sample Python Arrow Flight Client Application")
This lightweight sample Python client application connects to the Dremio Arrow Flight server endpoint. You can use token-based or regular user credentials (username/password) for authentication. Any datasets in Dremio that are accessible by the provided Dremio user can be queried. You can change settings in a `.yaml` configuration file before running the client.
The Sample Python Client Application

```
"""  
  Copyright (C) 2017-2021 Dremio Corporation  
  
  Licensed under the Apache License, Version 2.0 (the "License");  
  you may not use this file except in compliance with the License.  
  You may obtain a copy of the License at  
  
      http://www.apache.org/licenses/LICENSE-2.0  
  
  Unless required by applicable law or agreed to in writing, software  
  distributed under the License is distributed on an "AS IS" BASIS,  
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  
  See the License for the specific language governing permissions and  
  limitations under the License.  
"""  
from dremio.arguments.parse import get_config  
from dremio.flight.endpoint import DremioFlightEndpoint  
  
if __name__ == "__main__":  
    # Parse the config file.  
    args = get_config()  
  
    # Instantiate DremioFlightEndpoint object  
    dremio_flight_endpoint = DremioFlightEndpoint(args)  
  
    # Connect to Dremio Arrow Flight server endpoint.  
    flight_client = dremio_flight_endpoint.connect()  
  
    # Execute query  
    dataframe = dremio_flight_endpoint.execute_query(flight_client)  
  
    # Print out the data  
    print(dataframe)  

```

### Steps[​](/developer/python#steps "Direct link to Steps")
  1. Install 
  2. Download the 
  3. Install the `.whl` file: Command for installing the file

```
python3 -m pip install <path to .whl file>  

```

  4. Create a local folder to store the client file and config file.
  5. Create a file named `example.py` in the folder that you created.
  6. Copy the contents of `arrow-flight-client-examples/python/example.py` (available `example.py`.
  7. Create a file named `config.yaml` in the folder that you created.
  8. Copy the contents of `arrow-flight-client-examples/python/config_template.yaml` (available `config.yaml`.
  9. Uncomment the options in `config.yaml`, as needed, appending arguments after their keys (i.e., `username: my_username`). You can either delete the options that are not being used or leave them commented.
Example config file for connecting to a local instance of Dremio

```
username: my_username  
password: my_password  
query: SELECT 1  

```

Example config file for connecting to a Dremio cluster

```
hostname: my_coordinator_node  
port: 32010  
username: my_username  
password: my_password  
query: SELECT 1  

```

  10. Run the Python Arrow Flight Client by navigating to the folder that you created in the previous step and running this command: Command for running the client

```
python3 example.py [-config CONFIG_REL_PATH | --config-path CONFIG_REL_PATH]  

```

     * `[-config CONFIG_REL_PATH | --config-path CONFIG_REL_PATH]`: Use either of these options to set the relative path to the config file. The default is "./config.yaml".


### Config File Options[​](/developer/python#config-file-options "Direct link to Config File Options")
Default content of the config file

```
hostname:   
port:   
username:   
password:   
token:   
query:   
tls:   
disable_certificate_verification:   
path_to_certs:   
session_properties:  
engine:   

```
  
| Name  | Type  | Required?  | Default  | Description  |  
| --- | --- | --- | --- | --- |  
| `hostname`  | string  | No  | `localhost`  | The hostname or IP address of the coordinator node.  |  
| `port`  | integer  | No  | 32010  | Dremio's Arrow Flight server port. Can be other than `32010`, if changed on the coordinator node.  |  
| `username`  | string  | Yes  | N/A  | Username of the Dremio account to use for authenticating.  |  
| `password`  | string  | Yes, if no token is provided.  | N/A  | Password of the Dremio account to use for authenticating.  |  
| `token`  | string  | Yes, if no password is provided.  | N/A  | Either a Personal Access Token or an OAuth2 Token.  |  
| `query`  | string  | Yes  | N/A  | The SQL query to test.  |  
| `tls`  | boolean  | No  | false  | Enables encryption on a connection.  |  
| `disable_certificate_verification`  | boolean  | No  | false  | Disables TLS server verification.  |  
| `path_to_certs`  | string  | No  | System Certificates  | Path to trusted certificates for encrypted connections.  |  
| `session_properties`  | list of strings  | No  | N/A  | Key value pairs of `session_properties`. Example: 
```
session_properties:  
  - schema='Samples."samples.dremio.com"'
```
For a list of the available properties, see [Workload Management](/developer/arrow-flight#managing-workloads).  |  
Was this page helpful?
[Previous Develop Applications with Arrow Flight SQL](/developer/arrow-flight-sql)[Next Visual Studio Code](/developer/vs-code)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Develop Applications with Arrow Flight SQL](/developer/arrow-flight-sql)[Next Visual Studio Code](/developer/vs-code)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Fpython%2F&_biz_t=1777950375181&_biz_i=Dremio%20Documentation&_biz_n=120&rnd=645524&cdn_o=a&_biz_z=1777950375182)
