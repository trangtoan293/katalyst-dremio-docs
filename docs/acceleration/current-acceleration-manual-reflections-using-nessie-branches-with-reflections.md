---
url: /acceleration/manual-reflections/using-nessie-branches-with-reflections
slug: /acceleration/manual-reflections/using-nessie-branches-with-reflections
title: "Use Reflections in Nessie Source Branches | Dremio Enterprise Documentation"
depth: 2
crawled_at: 64019.026666083
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/acceleration/manual-reflections/using-nessie-branches-with-reflections)
  * [current [26.x]](/acceleration/manual-reflections/using-nessie-branches-with-reflections)
  * 25.x


[Start for Free](https://www.dremio.com/get-started/)
Search`⌘``K`
  * [Overview](/)
  * [Get Started with Dremio](/get-started)
  * [What is Dremio?](/what-is-dremio)
  * [Deploy Dremio](/deploy-dremio)
  * [Manage Sources](/data-sources)
  * [Load Data](/load-data)
  * [Build Data Products](/data-products)
  * [Connect Client Applications](/client-applications)
  * [Accelerate Queries](/acceleration)
    * [Autonomous Reflections](/acceleration/autonomous-reflections)
    * [Manually Manage Reflections](/acceleration/manual-reflections)
      * [View Whether Queries Used Reflections](/acceleration/manual-reflections/info-about-queries)
      * [Use Reflection Hints](/acceleration/manual-reflections/using-reflection-hints)
      * [Refresh Reflections](/acceleration/manual-reflections/refreshing-reflections)
      * [View Reflection Details](/acceleration/manual-reflections/viewing-info-about-reflections)
      * Use Reflections in Nessie Source Branches
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
  * [Reference](/reference)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Accelerate Queries](/acceleration)
  * [Manually Manage Reflections](/acceleration/manual-reflections)
  * Use Reflections in Nessie Source Branches

Version: current [26.x]
On this page
# Use Reflections in Nessie Source Branches
You can use the branching capabilities in a Nessie source as part of your Reflection management workflow. For example, you can create branches to experiment with different Reflection types and patterns, and see how each Reflection affects your workload. Once you’re happy, you can roll out these changes in your production branch to help end users accelerate their workloads.
  * When you create a branch, Reflections that are in the base branch are not copied into the new branch. In the new branch, you must create any Reflections that you want to work with, as well as set their refresh and expiration policies.
  * When you merge a branch, Reflections that are in that branch are not copied into the base branch. If you want to use the Reflections that were in your branch, you must recreate them in the base branch.
  * Reflections that are in one branch cannot be used to accelerate queries run against another branch. For example, suppose table T1 exists in the main branch and we create branch test. A Reflection is defined on the table T1 in test. However, no Reflection is defined on the table T1 in the main branch. A query runs against the table T1 in the main branch. Even if the Reflection in branch `test` could match and accelerate the query, the Reflection will not accelerate a query that is run in the context of branch `main`. A Reflection in a particular branch is used only to accelerate queries in that branch.


## Example of a Reflection in a Main Branch​
You can create Reflections in the default branch of a Nessie source to accelerate queries on tables and views in that branch.
In this example, table `T1` is created in the `main` branch of a catalog, and Reflection `R1` is created on that table. Data is inserted into the table, and the Reflection is subsequently refreshed (either according to a schedule or manually), so that it includes the inserted data.
! SELECT on table T1 in branch main using Reflection R1, if Reflection is a good match

```
USE BRANCH main;  
SELECT * FROM T1;  

```

## Example of a Reflection in a Branch Used for Development​
In this scenario, you create a branch so that you can manipulate tables outside of the default branch. No Reflections that are in the default branch are copied into the new branch. You must create any Reflections that you want to use in the new branch. If you merge your branch back into the default branch or into a different branch, none of the Reflections in it are copied into the branch merged into. Deleting your branch also deletes the Reflections that are in that branch.
In this example, table `T1` is created in the `main` branch, and Reflection `R1` is created on that table. Then, branch `B1` is created for testing changes to the structure of the table. When `B1` is created, table `T1` is copied over from the `main` branch, but `R1` is not.
In branch `B1`, table `T1` is altered by the addition of a column. Data is then inserted into the table. Reflection `R2` is defined on the table to accelerate subsequent queries on it.
In `main` branch in the meantime, data is inserted into the table and the Reflection is refreshed, so that it includes the new data. Queries on the table in the `main` branch continue to use the Reflection defined on it earlier, if the Reflection is a good match.
Eventually, the changes to the table `T1` in the branch `B1` are merged into the `main` branch. The Reflection `R2` in the branch `B1` is not merged into the `main` branch, too. However, in the `main` branch, a Reflection that is identical to `R2` is created. This new Reflection is `R3`. Queries on `T1` in the `main` branch can use `R3` or `R1`, depending on the data queried and the content of these Reflections.
! SELECT on table T1 in branch main using Reflection R1 or R3, depending on which Reflection matches best

```
USE BRANCH main;  
SELECT * FROM T1;  

```

SELECT on table T1 in branch B1 using Reflection R2, if the Reflection is a good match

```
USE BRANCH B1;  
SELECT * FROM T1;  

```

## Example of a Reflection in a Branch Used for Comparing Data​
In this scenario, you create a branch so that you can compare data from a point in time with the current data that is in the default branch. Deleting the comparison branch also deletes the Reflections that are in that branch.
In this example, table `T1` is created in the `main` branch, and Reflection `R1` is created on it. At that point, a new branch is created. Because `R1` is not copied into the new branch, Reflection `R2` is defined on the table. While inserts can continue taking place in the `main` branch, the new branch can be used for queries on the isolated data.
! SELECT on table T1 in branch main using Reflection R1, if the Reflection is a good match

```
USE BRANCH main;  
SELECT * FROM T1;  

```

SELECT on table T1 in branch B1 using Reflection R2, if the Reflection is a good match

```
USE BRANCH B1;  
SELECT * FROM T1;  

```

## Example of a Reflection with a Tag Used for Comparing Data​
In this scenario, you tag the commit of a table that occurs at a point in time, so that you can compare the data at this time with data that is in the table at a later time. To accelerate queries on the tagged version of the table, you set the query context to that tag, and then create a Reflection on that table. When you query the table, you set the context to the tag by using the `AT` clause, like this:
A SELECT statement setting its context

```
SELECT * FROM <table_name> AT TAG <tag_name>  

```

Even if the tagged Reflection is refreshed, the data in it does not change, because the data in the tagged version of the table never changes.
In this example, table `T1` is created in the `main` branch, and then Reflection `R1` is created from it. Data is inserted into the table. The commit for the insert is tagged with the tag `2023-02-22`. That tagged version of the table is frozen. Inserts can still be made to the table. However, the tagged version is never changed.
Then, after the SQL context is set to the tag, Reflection `R2` is defined on `T1` within that context. From this point, queries on the table will use `R2` only if they are issued within the context of the tag and if they match the Reflection.
! SELECT against tagged version of table T1 in branch main using Reflection R2, if the Reflection is a good match

```
USE BRANCH main;  
SELECT * FROM T1 AT TAG 2023-02-22;  

```

## Examples of Joining across Branches​
In this scenario, queries join tables or views that are in different branches. The context of a query determines which Reflections it uses.
In these examples, table `T1` is created in the `main` branch, and Reflection `R1` is defined on it. Then, branch `B1` is created. In this branch, table `T2` is created, and Reflection `R2` is defined on it. Reflection `R1` is not copied into branch `B1`.
!
### Example 1​
SELECT issued against the main branch and using Reflections R1 and R2

```
USE BRANCH main;  
SELECT * FROM T1 JOIN T2 AT BRANCH B1;  

```

This query is run in the context of the `main` branch. Reflection `R1` satisfies the `SELECT` from T1, because both `R1` and `T1` are in the `main` branch. Reflection `R2` satisfies the `SELECT` from `T2`, because the `AT` clause sets the context of `T2` as branch `B1`, the branch in which `T2` and `R2` are located.
### Example 2​
SELECT issued against the B1 branch and using the Reflections R1 and R2

```
USE BRANCH B1;  
SELECT * FROM T1 AT BRANCH main JOIN T2;  

```

This query is run in the context of the branch `B1`. Reflection `R1` satisfies the `SELECT` from `T1`, because both `R1` and `T1` are in the main branch. Reflection `R2` satisfies the `SELECT` from `T2`, because the `USE` command sets the context of `T2` as branch `B1`, the branch in which `T2` and `R2` are located.
### Example 3​
SELECT issued against the B1 branch and using the Reflection R2

```
USE BRANCH B1;  
SELECT * FROM T1 JOIN T2;  

```

This query is run in the context of the branch `B1`. The `SELECT` on `T1` is not satisfied by Reflection `R1` because that Reflection was not copied from the `main` branch. However, Reflection `R2` can satisfy the `SELECT` on `T2`.
## Related Links​
  * [Types of Reflections](/acceleration)
  * [Best Practices for Creating Raw and Aggregation Reflections](/help-support/well-architected-framework/performance)
  * [Manually Manage Reflections](/acceleration/manual-reflections)


Was this page helpful?
[Previous View Reflection Details](/acceleration/manual-reflections/viewing-info-about-reflections)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous View Reflection Details](/acceleration/manual-reflections/viewing-info-about-reflections)
  * Example of a Reflection in a Main Branch
  * Example of a Reflection in a Branch Used for Development
  * Example of a Reflection in a Branch Used for Comparing Data
  * Example of a Reflection with a Tag Used for Comparing Data
  * Examples of Joining across Branches
    * Example 1
    * Example 2
    * Example 3
  * Related Links


!
