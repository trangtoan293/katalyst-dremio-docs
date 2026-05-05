---
url: /developer/arrow-flight-sql
slug: /developer/arrow-flight-sql
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
## Using the Sample Client​
You can download and try out the sample client from `flight-sql-client-example` directory.
Before running the sample client, ensure that you have met these prerequisites:
  * Ensure that you have an instance of Dremio 21.0 or later configured and running.
  * Ensure that you have a user account on that instance of Dremio.
  * Add the Samples data lake to that instance of Dremio by clicking the plus (+) icon in the **Data Lakes** section of the Datasets page.
  * Ensure that Java 8 or later (up to Java 15) is installed on the system on which you run the example commands.


### Command Syntax for the Sample Client​
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

### Examples​
The examples demonstrate what is returned for each of these requests:
  * CommandGetDbSchemas
  * CommandGetTables
  * CommandGetTableTypes
  * CommandExecute


#### Flight SQL Request: CommandGetDbSchemas​
This command submits a `CommandGetDbSchemas` request to list the schemas in a catalog.
##### Example Request​
Example GetDBSchemas request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetDbSchemas    

```

##### Example Output​
GetDBSchemas output

```
catalog_name	db_schema_name  
null	        $scratch  
null	        @myUserName  
null	        INFORMATION_SCHEMA  
null	        Samples  
null	        sys  

```

#### Flight SQL Request: CommandGetTables​
This command submits a `CommandGetTables` request to list the tables that are in a catalog or schema.
##### Example Request​
Example GetTables request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetTables -schema INFORMATION_SCHEMA  

```

If you have a space in your schema, you can escape it like this:
Example GetTables request for spaces in schema names

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetTables -schema "Samples\ (1).samples.dremio.com"  

```

##### Example Output​
GetTables output

```
catalog_name  db_schema_name	        table_name	table_type  
null	      INFORMATION_SCHEMA	CATALOGS	SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	COLUMNS         SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	SCHEMATA	SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	TABLES          SYSTEM_TABLE  
null	      INFORMATION_SCHEMA	VIEWS           SYSTEM_TABLE  

```

#### Flight SQL Request: CommandGetTableTypes​
This command submits a `CommandTableTypes` request to list the table types supported.
##### Example Request​
Example GetTableTypes request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command GetTableTypes   

```

##### Example Output​
GetTableTypes output

```
table_type  
TABLE  
SYSTEM_TABLE  
VIEW  

```

#### Flight SQL Request: CommandExecute​
This command submits a `CommandExecute` request to run a single SQL statement.
##### Example Request​
Example Execute request

```
java -jar flight-sql-sample-client-application.jar  -host <Dremio-coordinator-node> -port 32010 --username <Dremio-user-name> --password <Dremio-password> -command Execute -query 'SELECT * FROM Samples."samples.<Dremio-user-name>.com"."NYC-taxi-trips" limit 10'  

```

##### Example Output​
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

## Code Samples​
### Creating a FlightSqlClient​
Refer to `FlightClient`. Then, wrap your `FlightClient` in a `FlightSqlClient`:
Create FlightSqlClient

```
// Wraps a FlightClient in a FlightSqlClient  
FlightSqlClient flightSqlClient = new FlightSqlClient(flightClient);  
  
// Be sure to close the FlightSqlClient after using it  
flightSqlClient.close();  

```

### Retrieving a List of Database Schemas​
This code issues a CommandGetSchemas metadata request:
Get database schemas

```
String catalog = null; // The catalog. (may be null)  
String dbSchemaFilterPattern = null; // The schema filter pattern. (may be null)  
FlightInfo flightInfo = flightSqlClient.getSchemas(catalog, dbSchemaFilterPattern);  

```

### Retrieving a List of Tables​
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

### Retrieving a List of Table Types That a Database Supports​
This code issues a CommandGetTableTypes metadata request:
Get table types that database supports

```
FlightInfo flightInfo = flightSqlClient.getTableTypes();  

```

### Running a Query​
This code issues a CommandExecute request:
CommandExecute request code

```
FlightInfo flightInfo = flightSqlClient.execute("SELECT * FROM Samples.\"samples.myUserName.com\".\"NYC-taxi-trips\" limit 10");  

```

### Consuming Data Returned for a Query​
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
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Develop Applications with Arrow Flight](/developer/arrow-flight)[Next Develop Applications with Python](/developer/python)
!
