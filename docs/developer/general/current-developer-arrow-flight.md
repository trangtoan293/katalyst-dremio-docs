---
url: /developer/arrow-flight
title: "Develop Applications with Arrow Flight | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64054.758742791
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * Develop Applications with Arrow Flight

Version: current [26.x]
On this page
# Develop Applications with Arrow Flight
Apache Arrow Flight is a general-purpose, client-server framework for simplifying high-performance transportation of large datasets over network interfaces. Arrow Flight is a component of Apache Arrow, an open-source software development platform for building high-performance applications that process and transport large data sets. A critical component of Apache Arrow is its in-memory columnar format, a standardized, language-agnostic specification for representing structured, table-like datasets in memory.
You can use an Arrow Flight server endpoint for Arrow Flight connections. The endpoint is enabled by default on port `32010`. Arrow Flight enables high speed data transfer compared to ODBC/JDBC connections by utilizing the Apache Arrow format to avoid serializing and deserializing data.
Non-HTTP protocols are not supported.
## Supported Versions of Apache Arrow[​](/developer/arrow-flight#supported-versions-of-apache-arrow "Direct link to Supported Versions of Apache Arrow")
Client applications that use Arrow Flight in Apache Arrow version 3.0.0 or later are supported.
## Supported Authentication Methods[​](/developer/arrow-flight#supported-authentication-methods "Direct link to Supported Authentication Methods")
Basic username/password authentication and authentication through personal access tokens (PATs) are supported. Set the value of `services.flight.auth.mode` in the `dremio.conf` file to specify which method your Flight clients use:
To use a username and a password, or to use a PAT, set the value to `arrow.flight.auth2`.
If this value is changed, Dremio must be restarted.
To learn how to enable Dremio's support of PATs and how to create a PAT, see [Personal Access Tokens](/security/authentication/personal-access-tokens).
## Configuration Setting for Dremio 21.0.0+[​](/developer/arrow-flight#configuration-setting-for-dremio-2100 "Direct link to Configuration Setting for Dremio 21.0.0+")
Starting in version 21.0.0 of Dremio, there is a configuration setting that affects the content of client requests and server responses:
`services.flight.use_session_service`
  * If this setting is present in `dremio.conf` and set to `true`:
When a Flight client sends in its first request, the response includes a Set-Cookie header for the session ID. The Flight client is expected to send Cookie headers that include the session ID in each subsequent request in a session.
The default is present and `true` in version 21.0.0 and later.
  * If this setting is not present in `dremio.conf`, or is set to `false`:
Interactions between Flight clients and Dremio continue to work as they did in releases prior to 21.0.0.


If this value is changed, or if the setting is added or removed from `dremio.conf`, Dremio must be restarted.
## Flight Sessions[​](/developer/arrow-flight#flight-sessions "Direct link to Flight Sessions")
A Flight session lasts a duration of 120 minutes, during which a Flight client interacts with Dremio. You can change the duration by setting `usersessions.ttl.seconds` in `dremio.conf`. If this value is changed, Dremio must be restarted.
A Flight client initiates a new session by passing a `getFlightInfo()` request that does not include a Cookie header that specifies a session ID that was obtained from Dremio. All requests that pass the same session ID are considered to be in the same session.
The interaction between a Fight client and Dremio differs slightly according to the authentication method that the client uses.
### Flight Sessions Authenticated by Usernames and Passwords[​](/developer/arrow-flight#flight-sessions-authenticated-by-usernames-and-passwords "Direct link to Flight Sessions Authenticated by Usernames and Passwords")
![](https://docs.dremio.com/images/arrow-flight-username-password.png)
  1. The Flight client sends an authentication request to Dremio.
  2. An authentication token is sent in response.
  3. The Flight client sends a getFlightInfo() request that includes the query to run and the URI for the endpoint. The request does not include a Cookie header with a session ID.
  4. A response is sent that includes FlightInfo, a Set-Cookie header with a new session ID, and a Set-Cookie header with the ID of the default project in the organization.
FlightInfo responses from Dremio include the single endpoint for the control plane being used and the ticket for that endpoint. There is only one endpoint listed in FlightInfo responses.
  5. The client sends a getStream() request that includes the ticket, a Cookie header for the session ID, and a Cookie header for the ID of the default project.
  6. The query results are returned in one flight.
  7. The Flight client sends another getFlightInfo() request using the same session ID and bearer token. If this second request did not include the session ID that was sent in response to the first request, then a new session ID would be sent and a new session would begin.


### Flight Sessions Authenticated by Personal Access Tokens (PATs)[​](/developer/arrow-flight#flight-sessions-authenticated-by-personal-access-tokens-pats "Direct link to Flight Sessions Authenticated by Personal Access Tokens \(PATs\)")
![](https://docs.dremio.com/images/arrow-flight-PATs.png)
  1. The Flight client, having obtained a PAT from Dremio, sends a getFlightInfo() request that includes the query to run, the URI for the endpoint, and the bearer token (PAT). The request does not include a Cookie header with a session ID.
A single bearer token can be used for requests until it expires.
  2. If authentication of the Flight client by using the bearer token is successful, a response is sent that includes FlightInfo, a Set-Cookie header with a new session ID, the bearer token, and a Set-Cookie header with the ID of the default project in the organization.
FlightInfo responses from Dremio include the single endpoint for the control plane being used and the ticket for that endpoint. There is only one endpoint listed in FlightInfo responses.
  3. The client sends a getStream() request that includes the ticket, a Cookie header for the session ID, the bearer token, and a Cookie header for the ID of the default project.
  4. The query results are returned in one flight.
  5. The Flight client sends another getFlightInfo() request using the same session ID and bearer token. If this second request did not include the session ID that Dremio sent in response to the first request, then Dremio would send a new session ID and a new session would begin.


## Sample Arrow Flight Client Applications[​](/developer/arrow-flight#sample-arrow-flight-client-applications "Direct link to Sample Arrow Flight Client Applications")
There are sample Flight client applications in Python and Java at 
## Managing Workloads[​](/developer/arrow-flight#managing-workloads "Direct link to Managing Workloads")
Dremio administrators can use the Arrow Flight server endpoint to [manage query workloads](/admin/workloads/workload-management) by adding the following properties to Flight clients:  
| Flight Client Property  | Description  |  
| --- | --- |  
| `ROUTING_TAG`  | Tag name associated with all queries executed within a Flight session. Used only during authentication.  |  
| `ROUTING_QUEUE`  | Name of the workload management [queue](/admin/workloads/workload-management/#queues). Used only during authentication.  |  
| `SCHEMA`  | Default schema path to the dataset that the user wants to query.  |  
Was this page helpful?
[Previous Add a Custom Source with ARP Framework](/developer/arp-connector)[Next Develop Applications with Arrow Flight SQL](/developer/arrow-flight-sql)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Add a Custom Source with ARP Framework](/developer/arp-connector)[Next Develop Applications with Arrow Flight SQL](/developer/arrow-flight-sql)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Farrow-flight%2F&_biz_t=1777950374591&_biz_i=Develop%20Applications%20with%20Arrow%20Flight%20%7C%20Dremio%20Documentation&_biz_n=117&rnd=238291&cdn_o=a&_biz_z=1777950374591)
