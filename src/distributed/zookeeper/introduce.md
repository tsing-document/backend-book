---
title: 【第一篇章】介绍
index: false
isOriginal: true
category: "分布式技术"
tag: "zookeeper"
date: 2024-07-27
---

## 一、简介
在过去，每个应用程序都是运行在一台计算机上的单程序单CPU。今天，情况变了。在大数据和云计算领域，应用程序是由运行在不断变化的计算机上的许多独立程序组成的。程序员不能够专注编写业务代码，反而要花费大量的时间维护各个服务之间的关系。为了解决程序员能够专注于业务代码的实现，zookeeper相关的应用`应世而生`。  

它支持分布式系统的调度任务，协调任务是涉及多个进程的任务。这样的任务是可以为了合作是为了规范争论。合作意味着各个进程需要共同努力，而主进程采取行动使其他进程能够正常运行。例如：在典型的主从架构中，主通知从进行工作。因此，主人可以分配任务给园丁。但是，我们确实希望有一个主进程，但是每个子进程又能称为主进程，因此，多个进程需要实现互斥。

一个典型的分布式数据一致性的解决方案，分布式应用程序可以基于它实现诸如数据发布/订阅、负载均衡、命名服务、分布式协调/通知、集群管理、Master 选举、分布式锁和分布式队列等功能。

## 二、数据结构
zookeeper 提供的名称空间非常类似于标准文件系统，key-value 的形式存储。名称 key 由 `/` 分割的一系列路径元素，zookeeper 名称空间中的每个节点都是一个路径标识。

## 三、CAP 理论
CAP理论是分布式系统设计中的一个重要理论，它指出了在分布式系统中，一致性（Consistency）、可用性（Availability）和分区容错性（Partition Tolerance）这三个因素无法同时完全满足。CAP理论最早由Eric Brewer在2000年的ACM研讨会上提出，并在2003年由MIT的Seth Gilbert和Nancy Lynch正式证明。

::: tabs

@tab:active 一致性（Consistency）

在分布式环境中，一致性是指多个副本之间是否能够保持一致的特性，等同于所有节点访问同一 份最新的数据副本。在一致性的需求下，当一个系统在数据一致的状态下执行更新操作后，应该保证系统数据依然处于一致的状态。 

@tab 可用性（Availability）

每次请求能获取到正确的响应，但是不保证获取的数据为最新数据。

@tab 分区容错性（Partition tolerance）

分布式系统在遇到任何网络分区故障的时候，依然要能够保证提供满足一致性和 可用性的服务，除非整个网络环境都发生了故障。

:::

> [!warning]
> 一个分布式系统中最多只能满足两点：`分区容错性（Partition tolerance）`是必须的。
> zookeeper是满足了CP。
> SpringCloud中的eruka实现了AP。

## 四、BASE 理论
`BASE理论` 是分布式系统设计中的一个重要理论框架，它强调在分布式系统中通过权衡一致性、可用性和实时性来构建高性能、高可用性和高灵活性的系统。`BASE理论`由 eBay 的架构师Dan Pritchett在2008年提出，是对CAP理论的一种扩展和补充。BASE理论的核心思想包括基本可用（Basically Available）、软状态（Soft State）和最终一致性（Eventually Consistent）三个方面。

::: tabs

@tab:active 基本可用（Basically Available）

1、`响应时间上损失`：正常情况下的搜索引擎0.5秒后就返回给用户结果，而基本可用的搜索引擎可以在2秒作用返回结果。  
2、`功能损失`：在正常情况下，用户可以顺利完成每一笔订单。但是到了大促销期间，为了保证购物系统的稳定性，可以将其他服务引导到降级页面。

@tab 软状态（Soft State）
1、硬状态是指所有节点的数据副本的数据必须完全一致。 
2、软状态是允许系统在多个不同节点的数据副本可以存在数据延时。   

@tab 最终一致性（Eventually Consistent）
1、因果一致性（Causal consistency）   
2、读己之所写（Read your writes）   
3、会话一致性（Session consistency）  
4、单调读一致性（Monotonic read consistency）  
5、单调写一致性（Monotonic write consistency） 

:::