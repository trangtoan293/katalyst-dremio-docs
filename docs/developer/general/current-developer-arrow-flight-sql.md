---
url: /developer/arrow-flight-sql
title: "Develop Applications with Arrow Flight SQL | Dremio Documentation"
depth: 2
crawled_at: 64054.357258
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * Develop Applications with Arrow Flight SQL

Version: current [26.x]
On this page
# Develop Applications with Arrow Flight SQL
You can use Apache Arrow Flight SQL to develop client applications that interact with Dremio. Apache Arrow Flight SQL is an API developed by the Apache Arrow community for interacting with SQL databases. For more information about Apache Arrow Flight SQL, see the documentation for the 
Through Flight SQL, client applications can run queries, create prepared statements, and fetch metadata about the SQL dialect supported by datasource in Dremio, available types, defined tables, and more.
The requests for running queries are
  * CommandExecute
  * CommandStatementUpdate


The commands on prepared statements are:
  * ActionClosePreparedStatementRequest: Closes a prepared statement.
  * ActionCreatePreparedStatementRequest: Creates a prepared statement.
  * CommandPreparedStatementQuery: Runs a prepared statement.
  * CommandPreparedStatementUpdate: Runs a prepared statement that updates data.


The metadata requests that Dremio supports are:
  * CommandGetDbSchemas: Lists the schemas that are in a catalog.
  * CommandGetTables: Lists that tables that are in a catalog or schema.
  * CommandGetTableTypes: Lists the table types that are supported in a catalog or schema. The types are Table, View, and System Table.
  * CommandGetSqlInfo: Retrieves information about the datasource and the SQL dialect that it supports.


There are two clients already implemented and available in the Apache Arrow repository on GitHub for you to make use of:
## Using the Sample Client[​](/developer/arrow-flight-sql#using-the-sample-client "Direct link to Using the Sample Client")
You can download and try out the sample client from `flight-sql-client-example` directory.
Before running the sample client, ensure that you have met these prerequisites:
  * Ensure that you have an instance of Dremio 21.0 or later configured and running.
  * Ensure that you have a user account on that instance of Dremio.
  * Add the Samples data lake to that instance of Dremio by clicking the plus (+) icon in the **Data Lakes** section of the Datasets page.
  * Ensure that Java 8 or later (up to Java 15) is installed on the system on which you run the example commands.


### Command Syntax for the Sample Client[​](/developer/arrow-flight-sql#command-syntax-for-the-sample-client "Direct link to Command Syntax for the Sample Client")
Use this syntax when sending commands to the sample client:
Syntax for sending commands to sample client

```
Usage: java -jar flight-sql-sample-client-application.jar  -host localhost -port 32010 ...  
  
 -command,--command <arg>                 Method to run  
 -dsv,--disableServerVerification <arg>   Disable TLS server verification.  
                                          Defaults to false.  
 -host,--hostname <arg>                   Dremio co-ordinator hostname.  
                                          Defaults to "localhost".  
 -kstpass,--keyStorePassword <arg>        The jks keystore password.  
 -kstpath,--keyStorePath <arg>            Path to the jks keystore.  
 -pass,---password <arg>                  Dremio password.  
 -pat,--personalAccessToken <arg>         Personal Access Token  
 -port,--flightport <arg>                 Dremio flight server port.  
                                          Defaults to 32010.  
 -query,--query <arg>                     Query  
 -schema,--schema <arg>                   Schema  
 -sp,--sessionProperty <arg>              Key value pairs of  
                                          SessionProperty, example: -sp  
                                          schema='Samples."samples.dremio.  
                                          com"' -sp key=value  
 -table,--table <arg>                     Table  
 -tls,--tls <arg>                         Enable encrypted connection.  
                                          Defaults to false.  
 -user,---username <arg>                  Dremio username.  

```

### Examples[​](/developer/arrow-flight-sql#examples "Direct link to Examples")
The examples demonstrate what is returned for each of these requests:
  * CommandGetDbSchemas
  * CommandGetTables
  * CommandGetTableTypes
  * CommandExecute


#### Flight SQL Request: CommandGetDbSchemas[​](/developer/arrow-flight-sql#flight-sql-request-commandgetdbschemas "Direct link to Flight SQL Request: CommandGetDbSchemas")
This command submits a `CommandGetDbSchemas` request to list the schemas in a catalog.
##### Example Request[​](/developer/arrow-flight-sql#example-request "Direct link to Example Request")
Example GetDBSchemas request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetDbSchemas    

```

##### Example Output[​](/developer/arrow-flight-sql#example-output "Direct link to Example Output")
GetDBSchemas output

```
catalog_name	db_schema_name  
null	        $scratch  
null	        @myUserName  
null	        INFORMATION_SCHEMA  
null	        Samples  
null	        sys  

```

#### Flight SQL Request: CommandGetTables[​](/developer/arrow-flight-sql#flight-sql-request-commandgettables "Direct link to Flight SQL Request: CommandGetTables")
This command submits a `CommandGetTables` request to list the tables that are in a catalog or schema.
##### Example Request[​](/developer/arrow-flight-sql#example-request-1 "Direct link to Example Request")
Example GetTables request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetTables -schema INFORMATION_SCHEMA  

```

If you have a space in your schema, you can escape it like this:
Example GetTables request for spaces in schema names

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetTables -schema "Samples\ (1).samples.dremio.com"  

```

##### Example Output[​](/developer/arrow-flight-sql#example-output-1 "Direct link to Example Output")
GetTables output

```
catalog_name  db_schema_name	        table_name	table_type  
null	      INFORMATION_SCHEMA	CATALOGS	SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	COLUMNS         SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	SCHEMATA	SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	TABLES          SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	VIEWS           SYSTEM_TABLE  

```

#### Flight SQL Request: CommandGetTableTypes[​](/developer/arrow-flight-sql#flight-sql-request-commandgettabletypes "Direct link to Flight SQL Request: CommandGetTableTypes")
This command submits a `CommandTableTypes` request to list the table types supported.
##### Example Request[​](/developer/arrow-flight-sql#example-request-2 "Direct link to Example Request")
Example GetTableTypes request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetTableTypes   

```

##### Example Output[​](/developer/arrow-flight-sql#example-output-2 "Direct link to Example Output")
GetTableTypes output

```
table_type  
TABLE  
SYSTEM_TABLE  
VIEW  

```

#### Flight SQL Request: CommandExecute[​](/developer/arrow-flight-sql#flight-sql-request-commandexecute "Direct link to Flight SQL Request: CommandExecute")
This command submits a `CommandExecute` request to run a single SQL statement.
##### Example Request[​](/developer/arrow-flight-sql#example-request-3 "Direct link to Example Request")
Example Execute request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command Execute -query 'SELECT * FROM Samples."samples.<Dremio-user-name>.com"."NYC-taxi-trips" limit 10'  

```

##### Example Output[​](/developer/arrow-flight-sql#example-output-3 "Direct link to Example Output")
Execute output

```
pickup_datetime	passenger_count	trip_distance_mi fare_amount tip_amount total_amount  
2013-05-27T19:15              1             1.26         7.5        0.0          8.0  
2013-05-31T16:40              1             0.73         5.0        1.2          7.7  
2013-05-27T19:03              2             9.23        27.5        5.0        38.33  
2013-05-31T16:24              1             2.27        12.0        0.0         13.5  
2013-05-27T19:17              1             0.71         5.0        0.0          5.5  
2013-05-27T19:11              1             2.52        10.5       3.15        14.15  
2013-05-31T16:41              5             1.01         6.0        1.1          8.6  
2013-05-31T16:37              1             1.25         8.5        0.0         10.0  
2013-05-31T16:39              1             2.04        10.0        1.5         13.0  
2013-05-27T19:02              1            11.73        32.5       8.12        41.12  

```

## Code Samples[​](/developer/arrow-flight-sql#code-samples "Direct link to Code Samples")
### Creating a FlightSqlClient[​](/developer/arrow-flight-sql#creating-a-flightsqlclient "Direct link to Creating a FlightSqlClient")
Refer to `FlightClient`. Then, wrap your `FlightClient` in a `FlightSqlClient`:
Create FlightSqlClient

```
// Wraps a FlightClient in a FlightSqlClient  
FlightSqlClient flightSqlClient = new FlightSqlClient(flightClient);  
  
// Be sure to close the FlightSqlClient after using it  
flightSqlClient.close();  

```

### Retrieving a List of Database Schemas[​](/developer/arrow-flight-sql#retrieving-a-list-of-database-schemas "Direct link to Retrieving a List of Database Schemas")
This code issues a CommandGetSchemas metadata request:
Get database schemas

```
String catalog = null; // The catalog. (may be null)  
String dbSchemaFilterPattern = null; // The schema filter pattern. (may be null)  
FlightInfo flightInfo = flightSqlClient.getSchemas(catalog, dbSchemaFilterPattern);  

```

### Retrieving a List of Tables[​](/developer/arrow-flight-sql#retrieving-a-list-of-tables "Direct link to Retrieving a List of Tables")
This code issues a CommandGetTables metadata request:
Get tables

```
String catalog = null;  // The catalog. (may be null)  
String dbSchemaFilterPattern = "Samples\\ (1).samples.dremio.com";  // The schema filter pattern. (may be null)  
String tableFilterPattern = null;  // The table filter pattern. (may be null)  
List<String> tableTypes = null;  // The table types to include. (may be null)  
boolean includeSchema = false;  // True to include the schema upon return, false to not include the schema.  
FlightInfo flightInfo = flightSqlClient.getTables(catalog, dbSchemaFilterPattern, tableFilterPattern, tableTypes, includeSchema);  

```

### Retrieving a List of Table Types That a Database Supports[​](/developer/arrow-flight-sql#retrieving-a-list-of-table-types-that-a-database-supports "Direct link to Retrieving a List of Table Types That a Database Supports")
This code issues a CommandGetTableTypes metadata request:
Get table types that database supports

```
FlightInfo flightInfo = flightSqlClient.getTableTypes();  

```

### Running a Query[​](/developer/arrow-flight-sql#running-a-query "Direct link to Running a Query")
This code issues a CommandExecute request:
CommandExecute request code

```
FlightInfo flightInfo = flightSqlClient.execute("SELECT * FROM Samples.\"samples.myUserName.com\".\"NYC-taxi-trips\" limit 10");  

```

### Consuming Data Returned for a Query[​](/developer/arrow-flight-sql#consuming-data-returned-for-a-query "Direct link to Consuming Data Returned for a Query")
Consume returned data

```
FlightInfo flightInfo; // Use a FlightSqlClient method to get a FlightInfo  
  
// 1. Fetch each partition sequentially (though this can be done in parallel)  
for (FlightEndpoint endpoint : flightInfo.getEndpoints()) {  
  
  // 2. Get a stream of results as Arrow vectors  
  try (FlightStream stream = flightSqlClient.getStream(endpoint.getTicket())) {  
  
    // 3. Iterate through the stream until the end  
    while (stream.next()) {  
  
      // 4. Get a chunk of results (VectorSchemaRoot) and print it to the console  
      VectorSchemaRoot vectorSchemaRoot = stream.getRoot();  
      System.out.println(vectorSchemaRoot.contentToTSVString());  
    }  
  }  
}  

```

Was this page helpful?
[Previous Develop Applications with Arrow Flight](/developer/arrow-flight)[Next Develop Applications with Python](/developer/python)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Develop Applications with Arrow Flight](/developer/arrow-flight)[Next Develop Applications with Python](/developer/python)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Farrow-flight-sql%2F&_biz_t=1777950375149&_biz_i=Develop%20Applications%20with%20Arrow%20Flight%20SQL%20%7C%20Dremio%20Documentation&_biz_n=118&rnd=629108&cdn_o=a&_biz_z=1777950375149)
