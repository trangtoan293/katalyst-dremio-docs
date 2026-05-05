---
url: /reference/admin-cli/metadata-cleanup
slug: /reference/admin-cli/metadata-cleanup
title: "Clean Metadata | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64230.8096655
---

Skip to main content
[![Dremio Documentation Home Page](https://docs.dremio.com/images/Dremio-wordmark-light.svg) **Documentation**](/)


[current [26.x]](/reference/admin-cli/metadata-cleanup)
  * [current [26.x]](/reference/admin-cli/metadata-cleanup)
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
  * [Security and Compliance](/security)
  * [Administration](/admin)
  * [Developer Guide](/developer)
  * [Reference](/reference)
    * [Admin CLI](/reference/admin-cli)
      * [Back up Dremio](/reference/admin-cli/backup)
      * [Encrypt Credentials](/reference/admin-cli/encryption)
      * [Export and Import PATs](/reference/admin-cli/export-import-pat)
      * [Export Profiles](/reference/admin-cli/export-profiles)
      * Clean Metadata
      * [Perform Nessie Maintenance](/reference/admin-cli/nessie-maintenance)
      * [Remove Duplicate Roles](/reference/admin-cli/remove-roles)
      * [Repair ACLS](/reference/admin-cli/repair-acls)
      * [Reset Password](/reference/admin-cli/reset-password)
      * [Restore Dremio](/reference/admin-cli/restore)
      * [Upgrade KV Store](/reference/admin-cli)
    * [API Reference](/reference/api)
    * [SQL Reference](/reference/sql)
    * [Security Bulletins](/reference/bulletins)
  * [Help and Support](/help-support)
  * [Release Notes](/release-notes)


  * [Dremio Enterprise Home](/)
  * [Reference](/reference)
  * [Admin CLI](/reference/admin-cli)
  * Clean Metadata

Version: current [26.x]
On this page
# Clean Metadata
This topic provides usage information for the `dremio-admin clean` CLI command.
Be sure you read [Using the Dremio Admin CLI on Kubernetes](/admin/admin-dremio-kubernetes/) before putting anything learned on this page into practice on such a deployment.
## Requirements​
  * Only run this command if instructed by Dremio Support.
  * Perform a backup before running the command (see [Backup](/reference/admin-cli/backup) for more information).
  * Shut down all cluster nodes completely before running the command.


## Syntax​
Clean command syntax

```
dremio-admin clean <options>  

```

You must specify at least one option. If you do not specify any options, the command opens the metadata store, but does not perform any operations. In this case, it just returns the message `No operation requested.`
## Options​
Clean command options

```
    -c, --compact  
      compact kvstore  
      Default: false  
    -o, --delete-orphans  
      delete orphans records in kvstore (e.g., old splits)  
      Default: false  
    -h, --help  
      show usage  
    -j, --max-job-days  
      delete jobs, profiles, and temporary dataset versions older than provided number of days  
      Default: 2147483647  
    -i, --reindex-data  
      reindex data  
      Default: false  
    -p, --delete-orphan-profiles  
      remove orphaned jobs  
      Default: false  
    -d, --delete-orphan-datasetversions  
      delete dataset versions older than the provided number of days  
      Default: 2147483647  

```

If you do not specify any options, the output of the `dremio-admin clean` command is a report of metadata store statistics.
## Examples​
This section provides examples for using the `dremio-admin clean` command.
### Compact Metadata​
Compacts metadata store entries.
Compact metadata store entries

```
dremio-admin clean -c  
dremio-admin clean --compact  

```

### Delete Orphaned Entries​
Deletes orphaned metadata store entries.
Delete orphaned metadata store entries

```
dremio-admin clean -o  
dremio-admin clean --delete-orphans  

```

### Delete Jobs​
Deletes jobs, profiles, and temporary dataset versions older than the specified threshold days. If no threshold is specified, items older than the default number of days (2147483647) will be deleted. Using the default threshold will effectively not delete anything. It is recommended that you use a reasonable value (e.g., 7, 14, 30, etc.).
Delete jobs

```
dremio-admin clean -j=7  
dremio-admin clean --max-job-days=7  

```

### Re-index Data​
Re-index data.
Re-index data

```
dremio-admin clean -i  
dremio-admin clean --reindex-data  

```

### Delete Orphaned Profiles​
Delete orphaned Dremio job profiles.
Delete orphaned job profiles

```
dremio-admin clean -p  
dremio-admin clean --delete-orphan-profiles  

```

### Delete Orphaned Dataset Versions​
This command is available in Dremio 19.6.3+, 19.8.0+, 20.4.0+, 21.2.0+, and 22.0.0+.
Deletes dataset versions that Dremio is not using that are older than the specified threshold days. If no threshold is specified, dataset versions older than the default number of days (2147483647) will be deleted. Using the default threshold will effectively not delete anything. It is recommended that you use a reasonable value (e.g., 7, 14, 30, etc.).
Delete orphaned dataset versions

```
dremio-admin clean -d=7  
dremio-admin clean --delete-orphan-datasetversions=7  

```

### Multiple Options​
Running individual clean commands with a single option per command makes it easier to inspect the impact of each action. However, you can run the clean command with more than one option at a time.
For example, the following command compacts metadata, deletes jobs older than 7 days, and deletes orphaned dataset versions older than 7 days:
Use multiple options

```
dremio-admin clean -c -j=7 -d=7  
dremio-admin clean --compact --max-job-days=7 --delete-orphan-datasetversions=7  

```

### Report Metadata Statistics​
If you do not specify any options, the output of the `clean` command is statistics about the metadata store. The statistics include estimated key count, estimated total in-memory size, and total file size for different categories of objects in the store. Running the `clean` command without options is a read operation and will **not** clean metadata.
Report metadata store statistics

```
dremio-admin clean  

```

Was this page helpful?
[Previous Export Profiles](/reference/admin-cli/export-profiles)[Next Perform Nessie Maintenance](/reference/admin-cli/nessie-maintenance)
[Dremio Editions](https://www.dremio.com/editions)
[Dremio Cloud Classic](https://www.dremio.com/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](https://www.dremio.com/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](https://www.dremio.com/data-privacy)[LLM? Read llms.txt](https://www.dremio.com/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Export Profiles](/reference/admin-cli/export-profiles)[Next Perform Nessie Maintenance](/reference/admin-cli/nessie-maintenance)
  * Requirements
  * Syntax
  * Options
  * Examples
    * Compact Metadata
    * Delete Orphaned Entries
    * Delete Jobs
    * Re-index Data
    * Delete Orphaned Profiles
    * Delete Orphaned Dataset Versions
    * Multiple Options
    * Report Metadata Statistics


![Company Logo](https://cdn.cookielaw.org/logos/static/ot_company_logo.png)
## Privacy Preference Center
When you visit any website, it may store or retrieve information on your browser, mostly in the form of cookies. This information might be about you, your preferences or your device and is mostly used to make the site work as you expect it to. The information does not usually directly identify you, but it can give you a more personalized web experience. Because we respect your right to privacy, you can choose not to allow some types of cookies. Click on the different category headings to find out more and change our default settings. However, blocking some types of cookies may impact your experience of the site and the services we are able to offer.   

Allow All
###  Manage Consent Preferences
#### Functional Cookies
Functional Cookies
These cookies enable the website to provide enhanced functionality and personalisation. They may be set by us or by third party providers whose services we have added to our pages. If you do not allow these cookies then some or all of these services may not function properly.
#### Performance Cookies
Performance Cookies
These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site. All information these cookies collect is aggregated and therefore anonymous. If you do not allow these cookies we will not know when you have visited our site, and will not be able to monitor its performance.
#### Targeting Cookies
Targeting Cookies
These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites. They do not store directly personal information, but are based on uniquely identifying your browser and internet device. If you do not allow these cookies, you will experience less targeted advertising.
#### Strictly Necessary Cookies
Always Active
These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms. You can set your browser to block or alert you about these cookies, but some parts of the site will not then work. These cookies do not store any personally identifiable information.
Back Button
### Cookie List
Search Icon
Filter Icon
Clear
checkbox label label
Apply Cancel
Consent Leg.Interest
checkbox label label
checkbox label label
checkbox label label
Reject All Confirm My Choices
