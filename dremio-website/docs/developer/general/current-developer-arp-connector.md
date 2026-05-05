---
url: /developer/arp-connector
title: "Add a Custom Source with ARP Framework | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64053.285358208
---

  * [Dremio Enterprise Home](/)
  * [Developer Guide](/developer)
  * Add a Custom Source with ARP Framework

Version: current [26.x]
On this page
# Add a Custom Source with ARP Framework
Advanced relational pushdown (ARP) connectors are mostly code-free and allow you to modify the queries that Dremio issues using a configuration file. Use Dremio’s ARP framework to create custom connectors for data sources that have a JDBC driver and accept SQL as a query language.
Dremio provides ARP connector configuration files for the following data sources:
## Prerequisites[​](/developer/arp-connector#prerequisites "Direct link to Prerequisites")
Creating an ARP connector requires the following three files. Examples for Salesforce, SQLite, and Sybase are available in the 
  * `<your-data-source>Conf.java`: The configuration file provides the details Dremio needs to display the data source correctly in the Dremio console and connect to the data source's JDBC driver. This file is also called the conf file.
  * `<your-data-source>-layout.json`: The layout file defines what fields appear on the configuration page for the data source in the Dremio console.
  * `<your-data-source>-arp.yaml`: The ARP file modifies the SQL queries that Dremio sends to the JDBC driver, specifies support for data types and functions, and allows you to rewrite data types and functions as needed to conform with the data source.


You also need the JDBC driver for the data source you want to connect.
To install your ARP connector after it is configured, you must install 
## Example: Create an ARP Connector for SQLite[​](/developer/arp-connector#example-create-an-arp-connector-for-sqlite "Direct link to Example: Create an ARP Connector for SQLite")
This page uses 
Before you begin, make sure that you have the 
### Update the Conf File[​](/developer/arp-connector#update-the-conf-file "Direct link to Update the Conf File")
  1. In your local directory for the ARP connector, navigate to `src/main/java/com/dremio/exec/store/jdbc/conf/` and open the SqliteConf.java file in a text editor.
  2. Update the following lines as shown below to add details about the connector name, layout file name, AbstractArpConf class, ARP file name, and JDBC driver class:
Connector name and layout file name

```
@SourceType(value = "SQLITE", label = "SQLite", uiConfig = "sqlite-layout.json", externalQuerySupported = true)  

```

Extend the AbstractArpConf class to support the SQLite source

```
public class SqliteConf extends AbstractArpConf&lt;SqliteConf> {  

```

ARP file name

```
private static final String ARP_FILENAME = "arp/implementation/sqlite-arp.yaml";  

```

JDBC driver class

```
private static final String DRIVER = "org.sqlite.JDBC";  

```

The JDBC driver class is different for each data source. Read the documentation for your data source to find the correct JDBC driver class.
  3. Update the following lines as shown below to enable the connection parameters to include for the data source in the Dremio console:
Connection parameters for data source

```
@NotBlank  
  @Tag(1)  
  @DisplayMetadata(label = "Database")  
  public String database;  
@Tag(2)  
  @DisplayMetadata(label = "Record fetch size")  
  @NotMetadataImpacting  
  public int fetchSize = 200;  

```

SQLite only requires the `Database` and `Record fetch size` parameters, which will be displayed in the connection dialog for the SQLite data source in the Dremio console.
By default, each connection parameter is considered metadata-impacting, which means that changing the parameter's value could result in different metadata and affect how Dremio displays information. For example, service account username is metadata-impacting because different users may have different privileges that allow them to view different objects in Dremio. In this case, `Database` and `Record fetch size` are not metadata-impacting. The `@NotMetadataImpacting` tag tells Dremio that the parameter is not considered metadata-impacting.
  4. Update the following lines as shown below to configure the database URL:
Update variable names in toJdbcConnectionString class

```
@VisibleForTesting  
  public String toJdbcConnectionString() {  
  // If database field is empty in Add Data Source dialog in Dremio console,  
  // show a Missing Database error and throw a NullPointerException().  
    final String database = checkNotNull(this.database, "Missing database.");  
    // Make a JDBC connection string from database.  
    return String.format("jdbc:sqlite:%s", databasename);  

```

Read the documentation for your data source to find the correct structure for its database URL and the name of its driver.
The driver manager identifies the data source driver for the database connection based on the driver name. The connector loads the driver into memory and registers it as an available driver for Dremio. Then, a connection string is built that allows Dremio to connect to the SQLite database using the driver. For SQLite, the name of the driver is `org.sqlite.JDBC` and the connection string format is `jdbc:sqlite:databasename`. The `databasename` is the name of a previously created SQLite database. If there are no databases named `databasename`, SQLite creates a new database with that name.
  5. Save the `SqliteConf.java` file and close it.


### Configure the ARP File[​](/developer/arp-connector#configure-the-arp-file "Direct link to Configure the ARP File")
A complete representation of the ARP file for an SQLite connector is available in the 
The content of the ARP file varies depending on the data source. Read the documentation for your data source for source-specific information. Read [ARP File Structure](/developer/arp-connector#arp-file-structure) for information about the contents of ARP files.
  1. In your local directory for the ARP connector, navigate to `src/main/resources/arp/implementation` and open the `sqlite-arp.yaml` file in a text editor.
  2. Add the data source name, API name, and ARP file version in the metadata mapping:
Add data source name, API name, and ARP file version

```
metadata:  
  name: SQLITE  
  apiname: sqlite  
  spec_version: '1'  

```

  3. Add general syntax information in the syntax mapping:
Add general syntax information;

```
syntax:  
  identifier_quote: '"'  
  identifier_length_limit: 128  
  map_boolean_to_bit_expr: false  
  supports_catalogs: false  
  supports_schemas: false  

```

  4. Configure the `data_types` mapping to specify the supported data types, the names of the data types as they appear in the JDBC driver, and how the driver's data types map to Dremio data types. For more information, read the [data_types Mapping](/developer/arp-connector#data_types-mapping) section below. Refer to the `data_types` mapping for an SQLite data source.
  5. Configure the `relational_algebra` mapping to specify supported aggregate functions and operations and related rewrites for SQL queries. For more information, read the [relational_algebra Mapping](/developer/arp-connector#relational_algebra-mapping) section below. Refer to the `relational_algebra` mapping for an SQLite data source.
  6. Configure the `expressions` mapping to specify supported general operations and related rewrites for SQL queries. For more information, read the [expressions Mapping](/developer/arp-connector#expressions-mapping) section below. Refer to the `expressions` mapping for an SQLite data source.
  7. Save the `sqlite-arp.yaml` file and close it.


### Build the SQLite Connector[​](/developer/arp-connector#build-the-sqlite-connector "Direct link to Build the SQLite Connector")
  1. Ensure that your local directory for the ARP connector contains the following files:
     * `Pom.xml`
     * `Readme.md`
     * `src/main/resources/arp/implementation/sqlite-arp.yaml`
     * `src/main/java/com/dremio/exec/store/jdbc/conf/SqliteConf.java`
  2. Navigate to your local directory for the ARP connector on the command line and run the following 
Install the SQLite connector

```
mvn clean install  

```

  3. To confirm that the installation is complete, look for the following confirmation message:
Installation confirmation message

```
Build Success  

```

  4. Confirm that your local directory for the ARP connector contains a `target` subdirectory.


If there are any errors in the build, Maven displays an error message that includes the exact location of the error. Refer to [Troubleshooting](/developer/arp-connector#maven-build-failures) to resolve the issue. When finished, save any updated files and repeat the steps in this section.
### Add the SQLite Data Source in Dremio[​](/developer/arp-connector#add-the-sqlite-data-source-in-dremio "Direct link to Add the SQLite Data Source in Dremio")
  1. Make sure that Dremio is not running.
  2. In your local directory for the ARP connector, open the `target` subdirectory and copy the `**.jar` file. Paste the `**.jar` file in the `/$DREMIO_HOME/jars` directory.
  3. Move the JDBC driver to the `/$DREMIO_HOME/jars/3rdparty` directory.
  4. Start Dremio and log in to the Dremio console.
  5. In the Datasets panel in the Dremio console, next to Sources, click ![The Add Source icon.](https://docs.dremio.com/images/icons/plus.png) .
  6. In the Add Data Source dialog, select **SQLite**.
  7. Enter the connection and authentication parameters for the data source.
  8. Click **Save**.
  9. Confirm that your SQLite source and contents are listed in the Datasets panel under **Sources**.


## Conf Files[​](/developer/arp-connector#conf-files "Direct link to Conf Files")
Conf files provide the details Dremio needs to display the data source correctly in the Dremio console and connect to the data source's JDBC driver.
You need a conf file for every data source, but the required contents of the conf file depend on the data source you're adding. A typical conf file might include sections that specify the hostname and port, JDBC URL, username, and password for the data source. The 
Each conf file has a corresponding layout file that defines what fields appear on the configuration page for the data source in the Dremio console. The layout file name is the value for the `uiConfig` key in the `@SourceType` section in the conf file. For example, the `@SourceType` section in the SQLite conf file lists the layout file name `sqlite-layout.json`:
SQLite layout file name sqlite-layout.json

```
@SourceType(value = "SQLITE", label = "SQLite", uiConfig = "sqlite-layout.json", externalQuerySupported = true)  

```

In this example, the file 
## ARP File Structure[​](/developer/arp-connector#arp-file-structure "Direct link to ARP File Structure")
ARP files contain the following mappings:
  * [metadata](/developer/arp-connector#metadata-mapping): High-level metadata about the ARP connector.
  * [syntax](/developer/arp-connector#syntax-mapping): General syntax preferences, such as the quote character to use for identifiers.
  * [data_types](/developer/arp-connector#data_types-mapping): Data types that the ARP connector supports and mapping details for data type names.
  * [relational_algebra](/developer/arp-connector#relational_algebra-mapping): Supported aggregate functions and operations and related rewrites for SQL queries.
  * [expressions](/developer/arp-connector#expressions-mapping): Supported general operations and related rewrites for SQL queries.


The ARP file must contain all of these mappings, although some nodes within the mappings are optional.
If a user's SQL query uses an operation or function that is not specified in the mappings in the ARP file, Dremio handles the operation itself. If a supported operation must be stacked on an unsupported operation, Dremio does not push the operation down to the SQL query.
For example, suppose a user runs the SQL query `SELECT MAX(age) from CUSTOMER` on a table in your source.
  * If the ARP file includes `MAX` as a supported function, Dremio sends the equivalent of `MAX(age)` to the source database, and the database returns only one value to Dremio. The query runs quickly and efficiently.
  * If the ARP file does not include `MAX` as a supported function, Dremio retrieves every value of `age` in the table. Then, from that data, Dremio calculates the `MAX(age)` value itself. The query takes more time and resources to complete and is slower as a result.


### metadata Mapping[​](/developer/arp-connector#metadata-mapping "Direct link to metadata Mapping")
Example metadata mapping

```
metadata:  
  name: SQLITE  
  apiname: sqlite  
  spec_version: '1'  

```

The metadata mapping in the ARP file includes the following nodes:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| name  | string  | yes  | Name of the ARP source to display in the Dremio console . The `name` must match the value of the `@SourceType` annotation in the code.  
  
Example: `name: My Connector`  |  
| apiname  | string  | yes  | Unique, abbreviated name for the ARP source. The `apiname` is not displayed in the Dremio console.  
  
Example: `apiname: mydb`  |  
| spec_version  | string  | yes  | User-selected name that identifies the version of the ARP file. The `spec_version` can contain numbers, letters, and symbols.  
  
Example: `spec_version: '1.0.final'`  |  
### syntax Mapping[​](/developer/arp-connector#syntax-mapping "Direct link to syntax Mapping")
Example syntax mapping

```
syntax:  
  identifier_quote: SQLITE  
  identifier_length_limit: 128  
  map_boolean_to_bit_expr: false  
  supports_catalogs: false  
  supports_schemas: false  
  inject_numeric_cast_project: false  
  inject_approx_numeric_cast_project: false  

```

The syntax mapping in the ARP file includes the following nodes:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| identifier_quote  | string  | yes  | Identifier to use for quotes. If `[`, Dremio uses the `]` character as the end quote.  
  
Enum: `"`, `'`, `[`  
  
Example: `identifier_quote: '"'`  |  
| identifier_length_limit  | integer  | no  | Maximum length of a database object name, such as the name of a table. If no value is provided, Dremio does not apply a limit (default). If a value is provided, it must be at least `1`.  
  
Example: `identifier_length_limit: 128`  |  
| map_boolean_to_bit_expr  | Boolean  | no  | If `true`, Dremio maps true/false literals to 1/0. Otherwise, `false` (default).  |  
| supports_catalogs  | Boolean  | no  | If `true` (default), overrides automatic detection of catalog support in the data source. Otherwise, `false`.  |  
| supports_schemas  | Boolean  | no  | If `true` (default), overrides automatic detection of schema support in the data source. Otherwise, `false`.  |  
| inject_numeric_cast_project  | Boolean  | no  | If `true`, Dremio adds an explicit cast for all decimal columns within a projection. Use `max_precision`, `max_scale`, and `required_cast_args` in the [`data_types` mapping](/developer/arp-connector#data_types-mapping) to specify the arguments needed for the cast. Otherwise, `false` (default).  |  
| inject_approx_numeric_cast_project  | Boolean  | no  | If `true`, Dremio adds an explicit cast for all approximate numeric columns within a projection. Otherwise, `false` (default).  |  
### data_types Mapping[​](/developer/arp-connector#data_types-mapping "Direct link to data_types Mapping")
Example data_types mapping

```
data_types:  
    mappings:  
      - source:  
          name: BIGINT  
        dremio:  
          name: bigint  

```

The `data_types` mapping includes the mappings sequence, where you can manually map Dremio data types to the data types that your source's JDBC driver uses. In the example above, the JDBC driver data type is specified in `data_types.mappings.source.name`, and the Dremio data type is specified in `data_types.mappings.dremio.name`.
Dremio supports the following data types for `data_types.mappings.dremio.name`:  
| Data Type  |  `data_types.mappings.source.name` Equivalent  | Description  |  
| --- | --- | --- |  
| bigint  | ROWID, BIGINT  | Eight-byte signed integer.  |  
| Boolean  | BIT, BOOLEAN  | Logical operator.  |  
| date  | DATE  | Date in YYYY-MM-DD format.  |  
| decimal  | DECIMAL  | Exact fractional value.  |  
| double  | REAL, DOUBLE, FLOAT (NUMERIC, DECIMAL)  | Eight-byte floating point.  |  
| float  | FLOAT  | Imprecise fractional value.  |  
| integer  | TINYINT, SMALLINT, INTEGER  | Four-byte signed integer.  |  
| interval_day_second  | INTERVAL  | Interval data type from day to second in `DD HH:MM:SS` format. For example, to specify 1 day, 2 hours, 34 minutes, 56 seconds: `1 2:34:56`.  |  
| interval_year_month  | INTERVAL  | Interval data type from year to month in `YY-MM` format. For example, to specify 12 years, 3 months: `12-3`.  |  
| time  | TIME  | Time of day in `HH:MM:SS` format.  |  
| timestamp  | TIMESTAMP  | Date and time in `YYYY-MM-DD HH-MM-SS` format.  |  
| varbinary  | BINARY, VARBINARY, LONGVARBINARY, BLOB  | Variable-length binary string.  |  
| varchar  | CHAR, VARCHAR, LONGVARCHAR, NCHAR, NVARCHAR, NLONGVARCHAR, NULL, OTHER, JAVA_OBJECT, DISTINCT, STRUCT, ARRAY, CLOB, REF, DATALINK, NCLOB, SQLXML  | Variable-length character string.  |  
Dremio supports the following optional nodes for `data_types.mappings.dremio`:  
| Node Name  | Type  | Description  |  
| --- | --- | --- |  
| default_cast_spec  | Boolean  | For `data_types.mappings` that map multiple JDBC driver data types to a single Dremio data type, include and set to `true` to specify which data type is preferred when going from Dremio to JDBC. Default is false.  |  
| required_cast_args  | string  | Use to specify the cast argument to use if `inject_numeric_cast_project: true` in the [syntax mapping](/developer/arp-connector#syntax-mapping).  
  
Enum: `none` (default), `precision`, `scale`, `precision_scale`  |  
| max_precision  | integer  | Maximum number of digits in a number.  |  
| max_scale  | integer  | Maximum number of digits to the right of the decimal point in a number.  |  
You can map multiple JDBC driver data types to a single Dremio data type. The following example maps the JDBC data types LONG and BIGINT to the Dremio data type bigint. Because `default_cast_spec: true` is set for BIGINT, bigint will be mapped to BIGINT rather than LONG when going from Dremio to JDBC.
Example data_types.mappings with multiple JDBC data types

```
data_types:  
  mappings:  
    - source:  
        name: LONG  
      dremio:  
        name: bigint  
    - source:  
        name: BIGINT  
      dremio:  
        name: bigint  
        default_cast_spec: true  

```

The example below shows how to use `required_cast_args`:
Example data_types.mappings mapping with cast arguments

```
data_types:  
  mappings:  
    - source:  
        name: DECIMAL  
        max_precision: 38  
        max_scale: 28  
      required_cast_args: precision_scale  
      dremio:  
        name: decimal  

```

### relational_algebra Mapping[​](/developer/arp-connector#relational_algebra-mapping "Direct link to relational_algebra Mapping")
Example relational_algebra mapping

```
relational_algebra:  
  aggregation:  
    enable: true  
    group_by_type_exclusions:  
      - interval_day_second  
      - interval_year_month  
      - varbinary  
    distinct: true  
    count_functions:  
      count_star:  
        enable: true  
      count:  
        enable: true  
      count_distinct:  
        enable: true  
    functions:  
      - names:  
          - avg  
        signatures:  
          - args:  
              - double  
            return: double  
          - args:  
              - integer  
            return: double  
      - names:  
          - max  
          - min  
        signatures:  
          - args:  
              - integer  
            return: integer  
          - args:  
              - double  
            return: double  
          - args:  
              - varchar  
            return: varchar  
      - names:  
          - sum  
        signatures:  
          - args:  
              - double  
            return: double  
          - args:  
              - integer  
            return: bigint  
  except:  
    enable: false  
  project:  
    enable: true  
  join:  
    enable: true  
    cross:  
      enable: true  
    inner:  
      enable: true  
      inequality: true  
    left:  
      enable: true  
      inequality: true  
    right:  
      enable: false  
      inequality: false  
    full:  
      enable: false  
      inequality: false  
  sort:  
    enable: true  
    order_by:  
      enable: true  
      default_nulls_ordering: high  
    fetch_offset:  
      offset_fetch:  
        enable: true  
        format: 'LIMIT {1} OFFSET {0}'  
      offset_only:  
        enable: false  
      fetch_only:  
        enable: true  
        format: 'LIMIT {0}'  
  union:  
    enable: false  
  union_all:  
    enable: false  
  values:  
    enable: false  
    method: values  

```

The relational_algebra mapping in the ARP file includes the following nodes:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| aggregation  | mapping  | yes  | 
  * Specify the aggregate functions that the data source supports and their signatures.
  * Specify rewrites to modify the SQL for aggregate functions as needed for the data source.

 |  
| except  | mapping  | yes  | Specify whether the data source supports the EXCEPT clause: include `enable: true` if supported or `enable: false` if not supported.  |  
| project  | mapping  | yes  | Specify whether the data source supports the PROJECT operator: include `enable: true` if supported or `enable: false` if not supported.  |  
| join  | mapping  | yes  | Specify whether the data source supports the JOIN clause, including specific types. Read [join Mapping](/developer/arp-connector#join-mapping) for details.  |  
| sort  | mapping  | yes  | Specify whether the data source supports the SORT operator, including specific types. Read [sort Mapping](/developer/arp-connector#sort-mapping) for details.  |  
| union  | mapping  | yes  | Specify whether the data source supports the UNION operator: include `enable: true` if supported or `enable: false` if not supported.  |  
| union_all  | mapping  | yes  | Specify whether the data source supports the UNION_ALL operator: include `enable: true` if supported or `enable: false` if not supported.  |  
| values  | mapping  | yes  | 
  * Specify whether the data source supports the VALUES command: include `enable: true` if supported or `enable: false` if not supported.
  * Specify how to construct the dummy table: include `method: values` to allow a pushdown of the VALUES clause in SQL or `method: dummy_table` to use a dummy table instead of pushing down the VALUES clause.

 |  
#### aggregation Mapping[​](/developer/arp-connector#aggregation-mapping "Direct link to aggregation Mapping")
The following nodes are supported for the aggregation mapping:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| enable  | Boolean  | yes  | If true, the source supports aggregate functions. Otherwise, false.  |  
| group_by_type_exclusions  | sequence  | yes  | Dremio data types that the source does not support for queries that include a GROUP BY statement.  
  
Enum: bigint, boolean, date, decimal, double, float, integer, interval_day_second, interval_year_month, time, timestamp, varbinary, varchar  |  
| distinct  | Boolean  | yes  | If true, the source supports DISTINCT queries. Otherwise, false.  |  
| count_functions  | mapping  | yes  | Information about the count functions that the source supports. Within `count_functions`, you may list sub-mappings for `count_star`, `count`, `count_multi`, `count_distinct`, and `count_distinct_multi`. For each sub-mapping, indicate whether the function is supported (`enable: true`) or not supported (`enable: false`). You can also include the `variable_rewrite` mapping to specify how to translate the function definition if the data source does not support the function. Within the `variable_rewrite` mapping, `separator_sequence` specifies the string sequence to separate each operand, and `rewrite_format` specifies the rewritten function that the data source supports.  |  
| functions  | sequence  | yes  | Information about the aggregate functions that the source supports. Read [functions Sequence](/developer/arp-connector#functions-sequence) for details.  |  
Read [aggregate functions](/reference/sql/sql-functions) to learn which aggregate functions Dremio supports.
##### functions Sequence[​](/developer/arp-connector#functions-sequence "Direct link to functions Sequence")
The example below shows a functions sequence for avg, max, and min functions:
Example functions sequence

```
functions:  
  - names:  
      - avg  
    signatures:  
      - args:  
          - double  
        return: double  
  - names:  
      - max  
      - min  
    signatures:  
      - args:  
          - integer  
        return: integer  

```

The following nodes are supported for the functions sequence. If you do not specify a names or signatures node in the functions sequence, Dremio does not push down the unspecified function to the data source.  
| Node Name  | Type  | Description  |  
| --- | --- | --- |  
| names  | array  | Names of the functions that the data source supports.  |  
| signatures  | sequence  | Definitions for the data types that the data source supports as inputs and outputs for the functions listed in `aggregation.functions.names`. Use the `args` array to specify input data type and the `return` node to specify output data type.   
  
Enum: bigint, boolean, date, decimal, double, float, integer, interval_day_second, interval_year_month, time, timestamp, varbinary, varchar  |  
#### join Mapping[​](/developer/arp-connector#join-mapping "Direct link to join Mapping")
Example join mapping

```
join:  
  enable: true  
  cross:  
    enable: true  
  inner:  
    enable: true  
    inequality: true  
  left:  
    enable: true  
    inequality: true  
  right:  
    enable: false  
    inequality: false  
  full:  
    enable: false  
    inequality: false  

```

The following nodes are supported for the join mapping:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| enable  | Boolean  | yes  | If true, the data source supports JOIN clauses. Otherwise, false.  |  
| cross  | mapping  | yes  | Include `enable: true` if the data source supports CROSS JOIN clauses or `enable: false` if the data source does not support CROSS JOIN clauses.  |  
| inner  | mapping  | yes  | 
  * Include `enable: true` if the data source supports INNER JOIN clauses or `enable: false` if the data source does not support INNER JOIN clauses.
  * Include `inequality: true` if the data source supports inequality constraints for INNER JOIN clauses or `inequality: false` if the data source does not support inequality constraints for INNER JOIN clauses.

 |  
| left  | mapping  | yes  | 
  * Include `enable: true` if the data source supports LEFT JOIN clauses or `enable: false` if the data source does not support LEFT JOIN clauses.
  * Include `inequality: true` if the data source supports inequality constraints for LEFT JOIN clauses or `inequality: false` if the data source does not support inequality constraints for LEFT JOIN clauses.

 |  
| right  | mapping  | yes  | 
  * Include `enable: true` if the data source supports RIGHT JOIN clauses or `enable: false` if the data source does not support RIGHT JOIN clauses.
  * Include `inequality: true` if the data source supports inequality constraints for RIGHT JOIN clauses or `inequality: false` if the data source does not support inequality constraints for RIGHT JOIN clauses.

 |  
| full  | mapping  | yes  | 
  * Include `enable: true` if the data source supports FULL JOIN clauses or `enable: false` if the data source does not support FULL JOIN clauses.
  * Include `inequality: true` if the data source supports inequality constraints for FULL JOIN clauses or `inequality: false` if the data source does not support inequality constraints for FULL JOIN clauses.

 |  
#### sort Mapping[​](/developer/arp-connector#sort-mapping "Direct link to sort Mapping")
Example sort mapping

```
sort:  
  enable: true  
  order_by:  
    enable: true  
    default_nulls_ordering: high  
  fetch_offset:  
    offset_fetch:  
      enable: true  
      format: 'LIMIT {1} OFFSET {0}'  
    offset_only:  
      enable: false  
    fetch_only:  
      enable: true  
      format: 'LIMIT {0}'  

```

The following nodes are supported for the sort mapping:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| enable  | Boolean  | yes  | If true, the data source supports the SORT operator. Otherwise, false.  |  
| order_by  | mapping  | yes  | 
  * Include `enable: true` if the data source supports the ORDER BY clause or `enable: false` if the data source does not support the ORDER BY clause. If set to `enable: true`, you must also include default_nulls_ordering in the order_by mapping.
  * Specify the order in which nulls appear.
    * `default_nulls_ordering: first`: Nulls always appear first, regardless of direction.
    * `default_nulls_ordering: high`: Nulls appear first when descending.
    * `default_nulls_ordering: last`: Nulls always appear last, regardless of direction.
    * `default_nulls_ordering: low`: Nulls appear last when descending.

 |  
| fetch_offset  | mapping  | yes  | The `fetch_offset` mapping includes three further mapping options:
  * offset_fetch:
    * Include `enable: true` if the data source supports the OFFSET FETCH clause or `enable: false` if the data source does not support the OFFSET FETCH clause.
    * format: Specify the format to use for OFFSET FETCH clauses.
  * offset_only: Include `enable: true` if the data source supports only the OFFSET clause or `enable: false` if the data source does not support only the OFFSET clause.
  * fetch_only:
    * Include `enable: true` if the data source supports only the FETCH clause or `enable: false` if the data source does not support only the FETCH clause.
    * format: Specify the format to use for FETCH clauses.

 |  
### expressions Mapping[​](/developer/arp-connector#expressions-mapping "Direct link to expressions Mapping")
Example expressions mapping

```
expressions:  
  subqueries:  
    correlated: true  
    scalar: true  
    in_clause: true  
  supports_case: true  
  supports_over: false  
  operators:  
    - names:  
        - =  
        - '!='  
        - <>  
        - '>'  
        - '>='  
        - <  
        - <=  
      signatures:  
        - args:  
            - double  
            - double  
          return: boolean  
        - args:  
            - double  
            - integer  
          return: boolean  
        - args:  
            - double  
            - varchar  
          return: boolean  
        - args:  
            - integer  
            - double  
          return: boolean  
        - args:  
            - integer  
            - integer  
          return: boolean  
        - args:  
            - integer  
            - varchar  
          return: boolean  
        - args:  
            - varchar  
            - varchar  
          return: boolean  
    - names:  
        - not  
      signatures:  
        - args:  
            - boolean  
          return: boolean  
    - names:  
        - sign  
      signatures:  
        - args:  
            - double  
          return: double  
        - args:  
            - integer  
          return: integer  
          rewrite: 'SIGN({0})'  
  variable_length_operators:  
    - names:  
        - and  
      variable_signatures:  
        - return: boolean  
          arg_type: boolean  
    - names:  
        - or  
      variable_signatures:  
        - return: boolean  
          arg_type: boolean  
  datetime_formats:  
    era:  
      enable: true  
      format: AD  
    meridian:  
      enable: true  
      format: AM  
    century:  
      enable: true  
      format: CC  
  numeric_formats:  
        digit:  
          enable: true  
          format: '9'  
        zero_digit:  
          enable: true  
          format: '0'  

```

The expressions mapping in the ARP file includes the following nodes:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| subqueries  | mapping  | yes  | Specify the types of subqueries the data source supports:
  * correlated: If true, the data source supports pushing down correlated subqueries. Otherwise, false.
  * scalar: If true, the data source supports pushing down scalar subqueries. Otherwise, false.
  * in_clause: If true, the data source supports pushing down subqueries that use the IN clause. Otherwise, false.

 |  
| supports_case  | Boolean  | yes  | If true, the data source supports pushing down queries that include the CASE expression. Otherwise, false.  |  
| supports_over  | Boolean  | yes  | If true, the data source supports pushing down queries that include the OVER clause. Otherwise, false.  |  
| operators  | sequence  | yes  | Specify the scalar functions that the data source supports, the signatures of the supported functions, and rewrites to modify the SQL for scalar functions as needed for the data source. Read [operators Sequence](/developer/arp-connector#operators-sequence) for details.  |  
| variable_length_operators  | sequence  | yes  | Specify the operators that may have a variable number of arguments that the data source supports, the signatures of the supported operator, and rewrites to modify the SQL for the operators as needed for the data source. Read [variable_length_operators Sequence](/developer/arp-connector#variable_length_operators-sequence) for details.  |  
| datetime_formats  | mapping  | yes  | Specify the format mappings that Dremio should use when converting a string type to a date/time format. Read [datetime_formats Mapping](/developer/arp-connector#datetime_formats-mapping) for details.  |  
| numeric_formats  | mapping  | yes  | Specify the format mappings that Dremio should use when converting a string type to a numeric format. Read [numeric_formats Mapping](/developer/arp-connector#numeric_formats-mapping) for details.  |  
#### operators Sequence[​](/developer/arp-connector#operators-sequence "Direct link to operators Sequence")
Example operators sequence

```
operators:  
  - names:  
      - '='  
      - '!='  
      - '<>'  
      - '>'  
      - '>='  
      - '<'  
      - '<='  
    signatures:  
      - args:  
          - double  
          - double  
        return: boolean  
      - args:  
          - double  
          - integer  
        return: boolean  
      - args:  
          - double  
          - varchar  
        return: boolean  
      - args:  
          - integer  
          - double  
        return: boolean  
      - args:  
          - integer  
          - integer  
        return: boolean  
      - args:  
          - integer  
          - varchar  
        return: boolean  
      - args:  
          - varchar  
          - varchar  
        return: boolean  
  - names:  
      - not  
    signatures:  
      - args:  
          - boolean  
        return: boolean  
  - names:  
      - sign  
    signatures:  
      - args:  
          - double  
        return: double  
      - args:  
          - integer  
        return: integer  
        rewrite: 'SIGN({0})'  
  - names:  
      - cast  
    signatures:  
      - args:  
          - varchar  
        return: integer  
        rewrite: 'CAST(TRUNC(CAST({0} AS DECIMAL), 0) AS INTEGER)'  
      - args:  
          - varchar  
        return: bigint  
        rewrite: 'CAST(TRUNC(CAST({0} AS DECIMAL), 0) AS BIGINT)'  

```

The following nodes are supported for the operators sequence:  
| Node Name  | Type  | Description  |  
| --- | --- | --- |  
| names  | array  | Names of the operators that the data source supports. If you include a names array, you must also include a corresponding signatures sequence.  |  
| signatures  | sequence  | Definitions for the data types that the data source supports as inputs and outputs for the operators listed in expressions.operators.names. Use the `args` array to specify input data type, the `return` node to specify output data type, and the `rewrite` node to specify the rewritten function that the data source supports.  |  
Refer to [SQL Function Categories](/reference/sql/sql-functions) for supported functions for ARP files, listed by category.
The following list includes examples of supported operators for ARP files:
  * Not equal: `!=`  

  * Modulo: `%`  

  * Multiply: `*`  

  * Add: `+`  

  * Divide: `/`  

  * Less than: `<`  

  * Less than or equal to: `<=`  

  * Not equal: `<>`  

  * Equal: `=`  

  * Concatenate: `||`  



#### variable_length_operators Sequence[​](/developer/arp-connector#variable_length_operators-sequence "Direct link to variable_length_operators Sequence")
Example variable_length_operators sequence

```
variable_length_operators:  
  - names:  
      - and  
    variable_signatures:  
      - return: boolean  
        arg_type: boolean  
  - names:  
      - or  
    variable_signatures:  
      - return: boolean  
        arg_type: boolean  

```

The following nodes are supported for the variable_length_operators sequence:  
| Node Name  | Type  | Description  |  
| --- | --- | --- |  
| names  | array  | Names of the operators that may have a variable number of arguments that the data source supports. If you include a names array, you must also include a corresponding variable_signatures sequence.  |  
| variable_signatures  | sequence  | Definitions for the data types that the data source supports as inputs and outputs for the operators listed in expressions.variable_length_operators.names. Use the `arg_type` array to specify input data type and the `return` node to specify output data type.  |  
#### datetime_formats Mapping[​](/developer/arp-connector#datetime_formats-mapping "Direct link to datetime_formats Mapping")
The datetime_formats mapping specifies the format mappings that Dremio should use when converting a string type to a date/time format. The example below shows the mappings for the `era`, `meridian`, and `century` date/time formats:
datetime_formats example

```
datetime_formats:  
  era:  
    enable: true  
    format: AD  
  meridian:  
    enable: true  
    format: AM  
  century:  
    enable: true  
    format: CC  

```

The following nodes are supported for each format listed in the datetime_formats mapping:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| enable  | Boolean  | yes  | If true, the data source supports the format. Otherwise, false.  |  
| format  | string  | yes  | The string formatting to use to parse.  |  
The following date/time formats are supported:  
| Format  | Example  |  
| --- | --- |  
| day_of_year  | `format: DDD`  |  
| day_of_month  | `format: DD`  |  
| day_name  | `format: DAY`  |  
| day_name_abbreviated  | `format: DY`  |  
| year_4  | `format: YYYY`  |  
| year_2  | `format: YY`  |  
| era  |  `format: AD`  
  
`format: BC`  |  
| century  | `format: CC`  |  
| week_of_year  | `format: WW`  |  
| month_name  | `format: MONTH`  |  
| month_name_abbreviated  | `format: MON`  |  
| month  | `format: MM`  |  
| hour_24  | `format: HH24`  |  
| hour_12  |  `format: HH12`  
  
`format: HH`  |  
| minute  | `format: MI`  |  
| second  | `format: SS`  |  
| meridian  |  `format: AM`  
  
`format: PM`  |  
| millisecond  | `format: FFF`  |  
| timezone_abbreviation  | `format: TZD`  |  
| timezone_offset  | `format: TZO`  |  
| day_of_week  | `format: D`  |  
#### numeric_formats Mapping[​](/developer/arp-connector#numeric_formats-mapping "Direct link to numeric_formats Mapping")
The `numeric_formats` mapping specifies the format mappings that Dremio should use when converting a string type to a numeric format. The example below shows the mappings for the `digit` and `zero_digit` date/time formats:
numeric_formats example

```
numeric_formats:  
  digit:  
    enable: true  
    format: '9'  
  zero_digit:  
    enable: true  
    format: '0'  

```

The following nodes are supported for each format listed in the `numeric_formats` mapping:  
| Node Name  | Type  | Required  | Description  |  
| --- | --- | --- | --- |  
| enable  | Boolean  | yes  | If true, the data source supports the format. Otherwise, false.  |  
| format  | string  | yes  | How the format is represented in the source system. For example, in Oracle, a number is represented as `9`. Other systems may use different formatting string, such as `#`. For all formats except `quote_character`, if you set `enable: false`, do not include `format`. The quote_character format is required: you must specify a format string for quote_character.  |  
The following numeric formats are supported:  
| Format  | Example  |  
| --- | --- |  
| digit  | `format: 9`  |  
| zero_digit  | `format: 0`  |  
| decimal  | `format: '.'`  |  
| group_separator  | `format: ','`  |  
| exponent_separator  | `format: ','`  |  
| quote_character  | `format: '"'`  |  
| digit  | `format: 9`  |  
| digit  | `format: 9`  |  
## Troubleshooting[​](/developer/arp-connector#troubleshooting "Direct link to Troubleshooting")
This section describes some common issues that you might encounter when creating an ARP connector.
### Maven Build Failures[​](/developer/arp-connector#maven-build-failures "Direct link to Maven Build Failures")
When you run the `mvn clean install` command, you might see a `BUILD FAILURE` error. This means that something is incorrect in your &lt;your-data-source&gt;Conf.java file. The error message should include the error's location (file name, line number, and character number) or the error and a description of the problem.
To resolve common errors in the &lt;your-data-source&gt;Conf.java file:
  * Confirm that the value for `private static final String DRIVER = ` is the correct JDBC class for the data source.
  * Confirm that the `@DisplayMetadata` variable names are uniform throughout the entire file.
  * Check the documentation for the source and confirm that the JDBC string is correct.


Read the documentation for 
### Pushdown Failures[​](/developer/arp-connector#pushdown-failures "Direct link to Pushdown Failures")
To debug pushdowns for queries, open the `logback.xml` file, which is located in the `dremio/conf` directory for your Dremio cluster, and add the following lines anywhere within the `configuration` block:
Lines to add to logback.xml

```
<logger name="com.dremio.exec.store.jdbc">  
  <level value="${dremio.log.level:-trace}"/>  
</logger>  

```

After you add the debug lines to `logback.xml` and run queries, Dremio logs pushdown errors in the `server.log` file as follows:
Example pushdown error

```
- 2019-07-11 18:56:24,001 [22d879a7-ce3d-f2ca-f380-005a88865700/0:foreman-planning] DEBUG c.d.e.store.jdbc.dialect.arp.ArpYaml - Operator / not supported. Aborting pushdown.  

```

To troubleshoot aborted pushdowns, open the `<your-data-source>.arp.yaml` file and check it against the documentation for your data source to make sure that the supported SQL functions are listed correctly in the `<your-data-source>.arp.yaml` file.
Was this page helpful?
[Previous Developer Guide](/developer)[Next Develop Applications with Arrow Flight](/developer/arrow-flight)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Developer Guide](/developer)[Next Develop Applications with Arrow Flight](/developer/arrow-flight)
![](https://cdn.bizible.com/ipv?_biz_r=&_biz_h=800054037&_biz_u=6cd305d62a4c402de07902b3246ffbbc&_biz_l=https%3A%2F%2Fdocs.dremio.com%2Fcurrent%2Fdeveloper%2Farp-connector%2F&_biz_t=1777950373464&_biz_i=Add%20a%20Custom%20Source%20with%20ARP%20Framework%20%7C%20Dremio%20Documentation&_biz_n=112&rnd=826104&cdn_o=a&_biz_z=1777950373465)
