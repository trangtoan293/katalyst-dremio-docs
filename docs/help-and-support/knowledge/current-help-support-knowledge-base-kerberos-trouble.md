---
url: /help-support/knowledge-base/kerberos-trouble
title: "Kerberos Setup and Troubleshooting | Dremio Enterprise Documentation"
depth: 3
crawled_at: 64228.335485041
---

  * [Dremio Enterprise Home](/)
  * [Help and Support](/help-support)
  * [Knowledge Base](/help-support/knowledge-base)
  * Kerberos Setup and Troubleshooting

Version: current [26.x]
On this page
# Kerberos Setup and Troubleshooting
This section provides a Knowledge Base article on Kerberos setup and troubleshooting.
## Dremio Configuration for a Kerberized Cluster[​](/help-support/knowledge-base/kerberos-trouble/#dremio-configuration-for-a-kerberized-cluster "Direct link to Dremio Configuration for a Kerberized Cluster")
When a customer runs a kerberized cluster (like CDH, HDP), the following configuration must be done on the Dremio-side. This configuration is required to add a Kerberized HDFS or Hive data source.
  1. Create a Kerberos principal for the Dremio service user. This is the user that runs Dremio on the Hadoop cluster.
  2. Generate a Keytab file for the Dremio Kerberos principal.
  3. Depending on the deployment, either symlink the **core-site.xml** file or add a local copy of the **core-site.xml** file under Dremio's configuration directory (same directory as `dremio.conf` file).
  4. Add the following properties to the **core-site.xml** file.
Properties to add to core-site.xml file

```
<property>  
    <name>hadoop.security.authentication</name>  
    <value>kerberos</value>  
</property>  
<property>  
  <name>hadoop.proxyuser.dremio.hosts</name>  
  <value>*</value>  
</property>  
<property>  
  <name>hadoop.proxyuser.dremio.groups</name>  
  <value>*</value>  
</property>  

```



&gt; Even if impersonation is turned off and the service user Dremio is running and present on all the Hadoop nodes, Kerberos by default turns on impersonation so proxy settings have to be defined.
## Issue #1[​](/help-support/knowledge-base/kerberos-trouble/#issue-1 "Direct link to Issue #1")
_**Caused by: org.ietf.jgss.GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)**_
_**Resolution:**_ The Keytab either has wrong permissions or ownership. Even the keytab has the right permission, check all directories above the file recursively and make sure the owner (usually Dremio service user) can read the file.
Issue #1

```
2018-04-04 22:47:33,574 [qtp527426932-247] ERROR o.a.thrift.transport.TSaslTransport - SASL negotiation failure  
javax.security.sasl.SaslException: GSS initiate failed  
	at com.sun.security.sasl.gsskerb.GssKrb5Client.evaluateChallenge(GssKrb5Client.java:211) ~[na:1.8.0_161]  
	at org.apache.thrift.transport.TSaslClientTransport.handleSaslStartMessage(TSaslClientTransport.java:94) [libthrift-0.9.2.jar:0.9.2]  
	at org.apache.thrift.transport.TSaslTransport.open(TSaslTransport.java:271) ~[libthrift-0.9.2.jar:0.9.2]  
	at org.apache.thrift.transport.TSaslClientTransport.open(TSaslClientTransport.java:37) [libthrift-0.9.2.jar:0.9.2]  
	at org.apache.hadoop.hive.thrift.client.TUGIAssumingTransport$1.run(TUGIAssumingTransport.java:52) [dremio-hive-exec-shaded-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at org.apache.hadoop.hive.thrift.client.TUGIAssumingTransport$1.run(TUGIAssumingTransport.java:49) [dremio-hive-exec-shaded-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at java.security.AccessController.doPrivileged(Native Method) [na:1.8.0_161]  
	at javax.security.auth.Subject.doAs(Subject.java:422) [na:1.8.0_161]  
	at org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1807) [hadoop-common-2.8.0.jar:na]  
	at org.apache.hadoop.hive.thrift.client.TUGIAssumingTransport.open(TUGIAssumingTransport.java:49) [dremio-hive-exec-shaded-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.open(HiveMetaStoreClient.java:420) [hive-metastore-1.2.1.jar:1.2.1]  
	at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.<init>(HiveMetaStoreClient.java:236) [hive-metastore-1.2.1.jar:1.2.1]  
	at org.apache.hadoop.hive.metastore.HiveMetaStoreClient.<init>(HiveMetaStoreClient.java:181) [hive-metastore-1.2.1.jar:1.2.1]  
	at com.dremio.exec.store.hive.HiveClient$1.run(HiveClient.java:140) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.HiveClient$1.run(HiveClient.java:137) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.HiveClient$9.run(HiveClient.java:306) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at java.security.AccessController.doPrivileged(Native Method) [na:1.8.0_161]  
	at javax.security.auth.Subject.doAs(Subject.java:422) [na:1.8.0_161]  
	at org.apache.hadoop.security.UserGroupInformation.doAs(UserGroupInformation.java:1807) [hadoop-common-2.8.0.jar:na]  
	at com.dremio.exec.store.hive.HiveClient.doAsCommand(HiveClient.java:303) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.HiveClient.connect(HiveClient.java:136) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.HiveClient.createClient(HiveClient.java:124) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.HiveStoragePlugin.<init>(HiveStoragePlugin.java:125) [dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method) [na:1.8.0_161]  
	at sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62) [na:1.8.0_161]  
	at sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45) [na:1.8.0_161]  
	at java.lang.reflect.Constructor.newInstance(Constructor.java:423) [na:1.8.0_161]  
	at com.dremio.exec.store.StoragePluginRegistryImpl.create(StoragePluginRegistryImpl.java:459) [dremio-sabot-kernel-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.StoragePluginRegistryImpl.createOrUpdate(StoragePluginRegistryImpl.java:271) [dremio-sabot-kernel-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.dac.service.source.SourceService.registerSourceWithRuntime(SourceService.java:125) [dremio-dac-backend-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.dac.service.source.SourceService.registerSourceWithRuntime(SourceService.java:117) [dremio-dac-backend-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.dac.resource.EnterprisePutSourceResource.putSource(EnterprisePutSourceResource.java:98) [dremio-extra-dac-enterprise-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_161]  
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_161]  
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_161]  
	at java.lang.reflect.Method.invoke(Method.java:498) ~[na:1.8.0_161]  
	at org.glassfish.jersey.server.model.internal.ResourceMethodInvocationHandlerFactory$1.invoke(ResourceMethodInvocationHandlerFactory.java:81) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.internal.AbstractJavaResourceMethodDispatcher$1.run(AbstractJavaResourceMethodDispatcher.java:144) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.internal.AbstractJavaResourceMethodDispatcher.invoke(AbstractJavaResourceMethodDispatcher.java:161) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.internal.JavaResourceMethodDispatcherProvider$TypeOutInvoker.doDispatch(JavaResourceMethodDispatcherProvider.java:205) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.internal.AbstractJavaResourceMethodDispatcher.dispatch(AbstractJavaResourceMethodDispatcher.java:99) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.ResourceMethodInvoker.invoke(ResourceMethodInvoker.java:389) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.ResourceMethodInvoker.apply(ResourceMethodInvoker.java:347) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.model.ResourceMethodInvoker.apply(ResourceMethodInvoker.java:102) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.ServerRuntime$2.run(ServerRuntime.java:326) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.internal.Errors$1.call(Errors.java:271) [jersey-common-2.25.1.jar:na]  
	at org.glassfish.jersey.internal.Errors$1.call(Errors.java:267) [jersey-common-2.25.1.jar:na]  
	at org.glassfish.jersey.internal.Errors.process(Errors.java:315) [jersey-common-2.25.1.jar:na]  
	at org.glassfish.jersey.internal.Errors.process(Errors.java:297) [jersey-common-2.25.1.jar:na]  
	at org.glassfish.jersey.internal.Errors.process(Errors.java:267) [jersey-common-2.25.1.jar:na]  
	at org.glassfish.jersey.process.internal.RequestScope.runInScope(RequestScope.java:317) [jersey-common-2.25.1.jar:na]  
	at org.glassfish.jersey.server.ServerRuntime.process(ServerRuntime.java:305) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.server.ApplicationHandler.handle(ApplicationHandler.java:1154) [jersey-server-2.25.1.jar:na]  
	at org.glassfish.jersey.servlet.WebComponent.serviceImpl(WebComponent.java:473) [jersey-container-servlet-core-2.25.1.jar:na]  
	at org.glassfish.jersey.servlet.WebComponent.service(WebComponent.java:427) [jersey-container-servlet-core-2.25.1.jar:na]  
	at org.glassfish.jersey.servlet.ServletContainer.service(ServletContainer.java:388) [jersey-container-servlet-core-2.25.1.jar:na]  
	at org.glassfish.jersey.servlet.ServletContainer.service(ServletContainer.java:341) [jersey-container-servlet-core-2.25.1.jar:na]  
	at org.glassfish.jersey.servlet.ServletContainer.service(ServletContainer.java:228) [jersey-container-servlet-core-2.25.1.jar:na]  
	at org.eclipse.jetty.servlet.ServletHolder.handle(ServletHolder.java:812) [jetty-servlet-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1669) [jetty-servlet-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.servlets.UserAgentFilter.doFilter(UserAgentFilter.java:83) [jetty-servlets-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.servlets.GzipFilter.doFilter(GzipFilter.java:301) [jetty-servlets-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.servlet.ServletHandler$CachedChain.doFilter(ServletHandler.java:1652) [jetty-servlet-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.servlet.ServletHandler.doHandle(ServletHandler.java:585) [jetty-servlet-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.handler.ContextHandler.doHandle(ContextHandler.java:1127) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.servlet.ServletHandler.doScope(ServletHandler.java:515) [jetty-servlet-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.handler.ContextHandler.doScope(ContextHandler.java:1061) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.handler.ScopedHandler.handle(ScopedHandler.java:141) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:97) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.handler.RequestLogHandler.handle(RequestLogHandler.java:95) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.handler.HandlerWrapper.handle(HandlerWrapper.java:97) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.Server.handle(Server.java:499) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.HttpChannel.handle(HttpChannel.java:311) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.server.HttpConnection.onFillable(HttpConnection.java:258) [jetty-server-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.io.AbstractConnection$2.run(AbstractConnection.java:544) [jetty-io-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.util.thread.QueuedThreadPool.runJob(QueuedThreadPool.java:635) [jetty-util-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at org.eclipse.jetty.util.thread.QueuedThreadPool$3.run(QueuedThreadPool.java:555) [jetty-util-9.2.22.v20170606.jar:9.2.22.v20170606]  
	at java.lang.Thread.run(Thread.java:748) [na:1.8.0_161]  
Caused by: org.ietf.jgss.GSSException: No valid credentials provided (Mechanism level: Failed to find any Kerberos tgt)  
	at sun.security.jgss.krb5.Krb5InitCredential.getInstance(Krb5InitCredential.java:147) ~[na:1.8.0_161]  
	at sun.security.jgss.krb5.Krb5MechFactory.getCredentialElement(Krb5MechFactory.java:122) ~[na:1.8.0_161]  
	at sun.security.jgss.krb5.Krb5MechFactory.getMechanismContext(Krb5MechFactory.java:187) ~[na:1.8.0_161]  
	at sun.security.jgss.GSSManagerImpl.getMechanismContext(GSSManagerImpl.java:224) ~[na:1.8.0_161]  
	at sun.security.jgss.GSSContextImpl.initSecContext(GSSContextImpl.java:212) ~[na:1.8.0_161]  
	at sun.security.jgss.GSSContextImpl.initSecContext(GSSContextImpl.java:179) ~[na:1.8.0_161]  
	at com.sun.security.sasl.gsskerb.GssKrb5Client.evaluateChallenge(GssKrb5Client.java:192) ~[na:1.8.0_161]  

```

## Issue #2[​](/help-support/knowledge-base/kerberos-trouble/#issue-2 "Direct link to Issue #2")
_**java.io.IOException: Can't get Master Kerberos principal for use as renewer**_
_**Resolution**_ : Symlink/Copy the following xml files from the Hadoop nodes to the Dremio configuration directory:  
core-site.xml, yarn-site.xml, hdfs-site.xml, mapred-site.xml.
Issue #2

```
Caused by: java.io.IOException: Can't get Master Kerberos principal for use as renewer  
	at 	(TokenCache.java:132) ~[hadoop-mapreduce-client-core-2.8.0.jar:na]  
	at org.apache.hadoop.mapreduce.security.TokenCache.obtainTokensForNamenodesInternal(TokenCache.java:100) ~[hadoop-mapreduce-client-core-2.8.0.jar:na]  
	at org.apache.hadoop.mapreduce.security.TokenCache.obtainTokensForNamenodes(TokenCache.java:80) ~[hadoop-mapreduce-client-core-2.8.0.jar:na]  
	at org.apache.hadoop.mapred.FileInputFormat.listStatus(FileInputFormat.java:213) ~[hadoop-mapreduce-client-core-2.8.0.jar:na]  
	at org.apache.hadoop.mapred.FileInputFormat.getSplits(FileInputFormat.java:322) ~[hadoop-mapreduce-client-core-2.8.0.jar:na]  
	at com.dremio.exec.store.hive.DatasetBuilder$HiveSplitsGenerator.runInner(DatasetBuilder.java:377) ~[dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.DatasetBuilder.buildSplits(DatasetBuilder.java:444) ~[dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.DatasetBuilder.buildIfNecessary(DatasetBuilder.java:285) ~[dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.hive.DatasetBuilder.getDataset(DatasetBuilder.java:204) ~[dremio-hive-plugin-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  
	at com.dremio.exec.store.SimpleSchema.getTableFromDataset(SimpleSchema.java:319) [dremio-sabot-kernel-1.4.6-201801281620070890-2771674.jar:1.4.6-201801281620070890-2771674]  

```

## Issue #3[​](/help-support/knowledge-base/kerberos-trouble/#issue-3 "Direct link to Issue #3")
_**(java.io.IOException) org.apache.hadoop.security.authentication.client.AuthenticationException: Authentication failed, status: 403, message: Forbidden org.apache.hadoop.crypto.key.kms.KMSClientProvider.createConnection():551**_
_**Resolution:**_ From the stack, it is evident that the in addition to the Kerberized HDFS cluster, it is also encrypted. To access an encrypted HDFS cluster proxy settings need to be entered into kms-site.xml
Settings for kms-site.xml file

```
<property>  
    <name>hadoop.kms.proxyuser.dremio.groups</name>  
    <value>*</value>  
</property>  
<property>  
    <name>hadoop.kms.proxyuser.dremio.hosts</name>  
    <value>*</value>  
</property>  

```

Issue #3

```
SYSTEM ERROR: AuthenticationException: Authentication failed, status: 403, message: Forbidden  
  
Fragment 0:0  
  
[Error Id: 37f62446-2324-4b06-8bab-58773d119962 on z9awsstiku1w115.celgene.com:-1]  
  
  (java.lang.RuntimeException) Failed to read parquet footer for file hdfs://nameservice1/user/hive/warehouse/.../fa461609e54c759e-28ff333100000000_1976891529_data.0.parq  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.getFooter():60  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1.run():125  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1.run():117  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():360  
    org.apache.hadoop.security.UserGroupInformation.doAs():1787  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1.apply():117  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1.apply():113  
    com.google.common.collect.Iterators$8.transform():799  
    com.google.common.collect.TransformedIterator.next():48  
    com.dremio.sabot.op.scan.ScanOperator.<init>():135  
    com.dremio.sabot.op.scan.ScanOperator.<init>():114  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.createNativeParquet():144  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.create():257  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.create():65  
    com.dremio.sabot.driver.OperatorCreatorRegistry.getProducerOperator():94  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator$4.run():89  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator$4.run():86  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():422  
    org.apache.hadoop.security.UserGroupInformation.doAs():1807  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator.getProducerOperator():86  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitSubScan():208  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitSubScan():115  
    com.dremio.exec.physical.base.AbstractSubScan.accept():43  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitLimit():109  
    com.dremio.exec.physical.config.Limit.accept():55  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitLimit():109  
    com.dremio.exec.physical.config.Limit.accept():55  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitWriter():69  
    com.dremio.exec.physical.base.AbstractWriter.accept():37  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitWriterCommiter():59  
    com.dremio.exec.physical.config.WriterCommitterPOP.accept():75  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitScreen():234  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitScreen():115  
    com.dremio.exec.physical.config.Screen.accept():43  
    com.dremio.sabot.driver.PipelineCreator.get():107  
    com.dremio.sabot.driver.PipelineCreator.get():101  
    com.dremio.sabot.exec.fragment.FragmentExecutor.setupExecution():320  
    com.dremio.sabot.exec.fragment.FragmentExecutor.run():227  
    com.dremio.sabot.exec.fragment.FragmentExecutor.access$800():83  
    com.dremio.sabot.exec.fragment.FragmentExecutor$AsyncTaskImpl.run():577  
    com.dremio.sabot.task.AsyncTaskWrapper.run():92  
    com.dremio.sabot.task.slicing.SlicingThread.run():71  
  Caused By (java.io.IOException) org.apache.hadoop.security.authentication.client.AuthenticationException: Authentication failed, status: 403, message: Forbidden  
    org.apache.hadoop.crypto.key.kms.KMSClientProvider.createConnection():551  
    org.apache.hadoop.crypto.key.kms.KMSClientProvider.decryptEncryptedKey():833  
    org.apache.hadoop.crypto.key.KeyProviderCryptoExtension.decryptEncryptedKey():388  
    org.apache.hadoop.hdfs.DFSClient.decryptEncryptedDataEncryptionKey():975  
    org.apache.hadoop.hdfs.DFSClient.createWrappedInputStream():1043  
    org.apache.hadoop.hdfs.DistributedFileSystem$4.doCall():326  
    org.apache.hadoop.hdfs.DistributedFileSystem$4.doCall():321  
    org.apache.hadoop.fs.FileSystemLinkResolver.resolve():81  
    org.apache.hadoop.hdfs.DistributedFileSystem.open():321  
    org.apache.hadoop.fs.FileSystem.open():786  
    com.dremio.exec.store.dfs.FileSystemWrapper.open():174  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.readFooter():99  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.readFooter():84  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.getFooter():58  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1.run():125  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1.run():117  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():360  
    org.apache.hadoop.security.UserGroupInformation.doAs():1787  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1.apply():117  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1.apply():113  
    com.google.common.collect.Iterators$8.transform():799  
    com.google.common.collect.TransformedIterator.next():48  
    com.dremio.sabot.op.scan.ScanOperator.<init>():135  
    com.dremio.sabot.op.scan.ScanOperator.<init>():114  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.createNativeParquet():144  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.create():257  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.create():65  
    com.dremio.sabot.driver.OperatorCreatorRegistry.getProducerOperator():94  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator$4.run():89  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator$4.run():86  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():422  
    org.apache.hadoop.security.UserGroupInformation.doAs():1807  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator.getProducerOperator():86  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitSubScan():208  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitSubScan():115  
    com.dremio.exec.physical.base.AbstractSubScan.accept():43  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitLimit():109  
    com.dremio.exec.physical.config.Limit.accept():55  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitLimit():109  
    com.dremio.exec.physical.config.Limit.accept():55  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitWriter():69  
    com.dremio.exec.physical.base.AbstractWriter.accept():37  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitWriterCommiter():59  
    com.dremio.exec.physical.config.WriterCommitterPOP.accept():75  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitScreen():234  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitScreen():115  
    com.dremio.exec.physical.config.Screen.accept():43  
    com.dremio.sabot.driver.PipelineCreator.get():107  
    com.dremio.sabot.driver.PipelineCreator.get():101  
    com.dremio.sabot.exec.fragment.FragmentExecutor.setupExecution():320  
    com.dremio.sabot.exec.fragment.FragmentExecutor.run():227  
    com.dremio.sabot.exec.fragment.FragmentExecutor.access$800():83  
    com.dremio.sabot.exec.fragment.FragmentExecutor$AsyncTaskImpl.run():577  
    com.dremio.sabot.task.AsyncTaskWrapper.run():92  
    com.dremio.sabot.task.slicing.SlicingThread.run():71  
  Caused By (org.apache.hadoop.security.authentication.client.AuthenticationException) Authentication failed, status: 403, message: Forbidden  
    org.apache.hadoop.security.authentication.client.AuthenticatedURL.extractToken():274  
    org.apache.hadoop.security.authentication.client.PseudoAuthenticator.authenticate():77  
    org.apache.hadoop.security.token.delegation.web.DelegationTokenAuthenticator.authenticate():132  
    org.apache.hadoop.security.authentication.client.KerberosAuthenticator.authenticate():214  
    org.apache.hadoop.security.token.delegation.web.DelegationTokenAuthenticator.authenticate():132  
    org.apache.hadoop.security.authentication.client.AuthenticatedURL.openConnection():215  
    org.apache.hadoop.security.token.delegation.web.DelegationTokenAuthenticatedURL.openConnection():322  
    org.apache.hadoop.crypto.key.kms.KMSClientProvider$1.run():542  
    org.apache.hadoop.crypto.key.kms.KMSClientProvider$1.run():537  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():422  
    org.apache.hadoop.security.UserGroupInformation.doAs():1807  
    org.apache.hadoop.crypto.key.kms.KMSClientProvider.createConnection():536  
    org.apache.hadoop.crypto.key.kms.KMSClientProvider.decryptEncryptedKey():833  
    org.apache.hadoop.crypto.key.KeyProviderCryptoExtension.decryptEncryptedKey():388  
    org.apache.hadoop.hdfs.DFSClient.decryptEncryptedDataEncryptionKey():975  
    org.apache.hadoop.hdfs.DFSClient.createWrappedInputStream():1043  
    org.apache.hadoop.hdfs.DistributedFileSystem$4.doCall():326  
    org.apache.hadoop.hdfs.DistributedFileSystem$4.doCall():321  
    org.apache.hadoop.fs.FileSystemLinkResolver.resolve():81  
    org.apache.hadoop.hdfs.DistributedFileSystem.open():321  
    org.apache.hadoop.fs.FileSystem.open():786  
    com.dremio.exec.store.dfs.FileSystemWrapper.open():174  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.readFooter():99  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.readFooter():84  
    com.dremio.exec.store.parquet.SingletonParquetFooterCache.getFooter():58  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1.run():125  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1.run():117  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():360  
    org.apache.hadoop.security.UserGroupInformation.doAs():1787  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1.apply():117  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1.apply():113  
    com.google.common.collect.Iterators$8.transform():799  
    com.google.common.collect.TransformedIterator.next():48  
    com.dremio.sabot.op.scan.ScanOperator.<init>():135  
    com.dremio.sabot.op.scan.ScanOperator.<init>():114  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.createNativeParquet():144  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.create():257  
    com.dremio.exec.store.hive.exec.HiveScanBatchCreator.create():65  
    com.dremio.sabot.driver.OperatorCreatorRegistry.getProducerOperator():94  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator$4.run():89  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator$4.run():86  
    java.security.AccessController.doPrivileged():-2  
    javax.security.auth.Subject.doAs():422  
    org.apache.hadoop.security.UserGroupInformation.doAs():1807  
    com.dremio.sabot.driver.UserDelegatingOperatorCreator.getProducerOperator():86  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitSubScan():208  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitSubScan():115  
    com.dremio.exec.physical.base.AbstractSubScan.accept():43  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitLimit():109  
    com.dremio.exec.physical.config.Limit.accept():55  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitLimit():109  
    com.dremio.exec.physical.config.Limit.accept():55  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitWriter():69  
    com.dremio.exec.physical.base.AbstractWriter.accept():37  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitWriterCommiter():59  
    com.dremio.exec.physical.config.WriterCommitterPOP.accept():75  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():247  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitOp():115  
    com.dremio.exec.physical.base.AbstractPhysicalVisitor.visitProject():84  
    com.dremio.exec.physical.config.Project.accept():53  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitScreen():234  
    com.dremio.sabot.driver.PipelineCreator$CreatorVisitor.visitScreen():115  
    com.dremio.exec.physical.config.Screen.accept():43  
    com.dremio.sabot.driver.PipelineCreator.get():107  
    com.dremio.sabot.driver.PipelineCreator.get():101  
    com.dremio.sabot.exec.fragment.FragmentExecutor.setupExecution():320  
    com.dremio.sabot.exec.fragment.FragmentExecutor.run():227  
    com.dremio.sabot.exec.fragment.FragmentExecutor.access$800():83  
    com.dremio.sabot.exec.fragment.FragmentExecutor$AsyncTaskImpl.run():577  
    com.dremio.sabot.task.AsyncTaskWrapper.run():92  
    com.dremio.sabot.task.slicing.SlicingThread.run():71  
  
  
Fragment 0:0  
  
com.dremio.exec.store.parquet.SingletonParquetFooterCache(SingletonParquetFooterCache.java:60)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1(HiveScanBatchCreator.java:125)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1$1(HiveScanBatchCreator.java:117)  
...(:0)  
org.apache.hadoop.security.UserGroupInformation(UserGroupInformation.java:1787)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1(HiveScanBatchCreator.java:117)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator$1(HiveScanBatchCreator.java:113)  
com.google.common.collect.Iterators$8(Iterators.java:799)  
com.google.common.collect.TransformedIterator(TransformedIterator.java:48)  
com.dremio.sabot.op.scan.ScanOperator(ScanOperator.java:135)  
com.dremio.sabot.op.scan.ScanOperator(ScanOperator.java:114)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator(HiveScanBatchCreator.java:144)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator(HiveScanBatchCreator.java:257)  
com.dremio.exec.store.hive.exec.HiveScanBatchCreator(HiveScanBatchCreator.java:65)  
com.dremio.sabot.driver.OperatorCreatorRegistry(OperatorCreatorRegistry.java:94)  
com.dremio.sabot.driver.UserDelegatingOperatorCreator$4(UserDelegatingOperatorCreator.java:89)  
com.dremio.sabot.driver.UserDelegatingOperatorCreator$4(UserDelegatingOperatorCreator.java:86)  
...(:0)  
org.apache.hadoop.security.UserGroupInformation(UserGroupInformation.java:1807)  
com.dremio.sabot.driver.UserDelegatingOperatorCreator(UserDelegatingOperatorCreator.java:86)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:208)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractSubScan(AbstractSubScan.java:43)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:109)  
com.dremio.exec.physical.config.Limit(Limit.java:55)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:109)  
com.dremio.exec.physical.config.Limit(Limit.java:55)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:84)  
com.dremio.exec.physical.config.Project(Project.java:53)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:84)  
com.dremio.exec.physical.config.Project(Project.java:53)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:69)  
com.dremio.exec.physical.base.AbstractWriter(AbstractWriter.java:37)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:59)  
com.dremio.exec.physical.config.WriterCommitterPOP(WriterCommitterPOP.java:75)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:247)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.base.AbstractPhysicalVisitor(AbstractPhysicalVisitor.java:84)  
com.dremio.exec.physical.config.Project(Project.java:53)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:234)  
com.dremio.sabot.driver.PipelineCreator$CreatorVisitor(PipelineCreator.java:115)  
com.dremio.exec.physical.config.Screen(Screen.java:43)  
com.dremio.sabot.driver.PipelineCreator(PipelineCreator.java:107)  
com.dremio.sabot.driver.PipelineCreator(PipelineCreator.java:101)  
com.dremio.sabot.exec.fragment.FragmentExecutor(FragmentExecutor.java:320)  
com.dremio.sabot.exec.fragment.FragmentExecutor(FragmentExecutor.java:227)  
com.dremio.sabot.exec.fragment.FragmentExecutor(FragmentExecutor.java:83)  
com.dremio.sabot.exec.fragment.FragmentExecutor$AsyncTaskImpl(FragmentExecutor.java:577)  
com.dremio.sabot.task.AsyncTaskWrapper(AsyncTaskWrapper.java:92)  
com.dremio.sabot.task.slicing.SlicingThread(SlicingThread.java:71)  

```

## Issue #4[​](/help-support/knowledge-base/kerberos-trouble/#issue-4 "Direct link to Issue #4")
_**(java.io.IOException) org.apache.hadoop.security.UserGroupInformation.loginUserFromKeytab: Login failure for**_
_**Resolution:**_ The KDC location is stored in the krb5.conf folder. Java, by default, looks for this file in the locations shown in the table below dependent upon the OS.  
| Operating System  | Default Location  |  
| --- | --- |  
| Windows  | c:\winnt\krb5.ini  |  
| Linux  | /etc/krb5.conf  |  
| Other UNIX-based  | /etc/krb5/krb5.conf  |  
If the krb5.conf file has been renamed or moved then it is required for us to add it to the DREMIO_JAVA_EXTRA_OPTS giving the location and name of the krb5.conf file. An example of this is:  
`DREMIO_JAVA_EXTRA_OPTS="-Djava.security.krb5.conf=/home/Test-krb5.conf"`
Issue #4

```
java.io.IOException: Login failure for dldev@IBCORE-DL-DEV.SWISSBANK.COM from keytab /home/dldev/security/dldev.keytab: javax.security.auth.login.LoginException: Cannot locate KDC  
	at org.apache.hadoop.security.UserGroupInformation.loginUserFromKeytab(UserGroupInformation.java:1062) ~[hadoop-common-2.8.3.jar:na]  
	at com.dremio.dac.daemon.DACDaemon.setupHadoopUserUsingKerberosKeytab(DACDaemon.java:223) ~[dremio-dac-backend-3.1.10-201904162146020182-adf690d.jar:3.1.10-201904162146020182-adf690d]  
	at com.dremio.dac.daemon.DACDaemon.<init>(DACDaemon.java:109) ~[dremio-dac-backend-3.1.10-201904162146020182-adf690d.jar:3.1.10-201904162146020182-adf690d]  
	at com.dremio.dac.daemon.DACDaemon.newDremioDaemon(DACDaemon.java:286) ~[dremio-dac-backend-3.1.10-201904162146020182-adf690d.jar:3.1.10-201904162146020182-adf690d]  
	at com.dremio.dac.daemon.DremioDaemon.main(DremioDaemon.java:101) ~[dremio-dac-daemon-3.1.10-201904162146020182-adf690d.jar:3.1.10-201904162146020182-adf690d]  
Caused by: javax.security.auth.login.LoginException: Cannot locate KDC  
	at com.sun.security.auth.module.Krb5LoginModule.attemptAuthentication(Krb5LoginModule.java:804) ~[na:1.8.0_31]  
	at com.sun.security.auth.module.Krb5LoginModule.login(Krb5LoginModule.java:617) ~[na:1.8.0_31]  
	at sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method) ~[na:1.8.0_31]  
	at sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62) ~[na:1.8.0_31]  
	at sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43) ~[na:1.8.0_31]  
	at java.lang.reflect.Method.invoke(Method.java:483) ~[na:1.8.0_31]  
	at javax.security.auth.login.LoginContext.invoke(LoginContext.java:755) ~[na:1.8.0_31]  
	at javax.security.auth.login.LoginContext.access$000(LoginContext.java:195) ~[na:1.8.0_31]  
	at javax.security.auth.login.LoginContext$4.run(LoginContext.java:682) ~[na:1.8.0_31]  
	at javax.security.auth.login.LoginContext$4.run(LoginContext.java:680) ~[na:1.8.0_31]  
	at java.security.AccessController.doPrivileged(Native Method) ~[na:1.8.0_31]  
	at javax.security.auth.login.LoginContext.invokePriv(LoginContext.java:680) ~[na:1.8.0_31]  
	at javax.security.auth.login.LoginContext.login(LoginContext.java:587) ~[na:1.8.0_31]  
	at org.apache.hadoop.security.UserGroupInformation.loginUserFromKeytab(UserGroupInformation.java:1053) ~[hadoop-common-2.8.3.jar:na]  
	... 4 common frames omitted  
Caused by: sun.security.krb5.KrbException: Cannot locate KDC  
	at sun.security.krb5.Config.getKDCList(Config.java:1061) ~[na:1.8.0_31]  
	at sun.security.krb5.KdcComm.send(KdcComm.java:218) ~[na:1.8.0_31]  
	at sun.security.krb5.KdcComm.send(KdcComm.java:200) ~[na:1.8.0_31]  
	at sun.security.krb5.KrbAsReqBuilder.send(KrbAsReqBuilder.java:316) ~[na:1.8.0_31]  
	at sun.security.krb5.KrbAsReqBuilder.action(KrbAsReqBuilder.java:361) ~[na:1.8.0_31]  
	at com.sun.security.auth.module.Krb5LoginModule.attemptAuthentication(Krb5LoginModule.java:776) ~[na:1.8.0_31]  
	... 17 common frames omitted  
Caused by: sun.security.krb5.KrbException: Generic error (description in e-text) (60) - Unable to locate KDC for realm IBCORE-DL-DEV.SWISSBANK.COM  
	at sun.security.krb5.Config.getKDCFromDNS(Config.java:1158) ~[na:1.8.0_31]  
	at sun.security.krb5.Config.getKDCList(Config.java:1034) ~[na:1.8.0_31]  
	... 22 common frames omitted  

```

## Issue #5[​](/help-support/knowledge-base/kerberos-trouble/#issue-5 "Direct link to Issue #5")
_**Connecting to a secured Hive cluster and an unsecured Hive cluster at the same time does not work**_
This might not be possible because of the security settings in core-site.xml. Details will be completed once tested.
Was this page helpful?
[Previous Kubernetes Troubleshooting](/help-support/knowledge-base/k8s-trouble)[Next Enabling Dremio Ranger SSL with Kerberos](/help-support/knowledge-base/ranger-ssl-kerberos)
[Dremio Editions](/editions)
[Dremio Cloud Classic](/dremio-cloud)
[Dremio University](https://university.dremio.com)
[Shared Responsibility Models](/responsibility)
[Dremio Community](https://community.dremio.com)
[Support Portal](https://support.dremio.com)
[Data Privacy](/data-privacy)[LLM? Read llms.txt](/llms.txt)
Copyright © 2026 Dremio, Inc.
[Previous Kubernetes Troubleshooting](/help-support/knowledge-base/k8s-trouble)[Next Enabling Dremio Ranger SSL with Kerberos](/help-support/knowledge-base/ranger-ssl-kerberos)
