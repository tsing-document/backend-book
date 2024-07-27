---
title: 【第二篇章】安装
index: false
isOriginal: true
category: "分布式技术"
tag: "zookeeper"
date: 2024-07-27
---

## 一、linux 安装

**1、基础环境**

在 Linux 种安装 zookeeper 需要安装 jdk。具体的安装 jdk 方式就不再进行描述，根据你的 Linux 系统的不同安装的方式也会不同。

**2、下载 zookeeper 安装包**

通过此地址可以下载对应的安装包 `https://zookeeper.apache.org/releases.html`。

**3、解压 zookeeper 压缩包**

```bash
tar -zxvf 压缩包的名称
```

**4、新建 zoo.cfg 文件**

启动 zookeeper 需要有一个配置文件 `zoo.cfg`, 在解压好的目录中有一个 `conf` 目录，这个目录中有一个 `zoo_sample.cfg` 文件，这个文件就是官网给的一个模板，我们根据这个模板创建一个新的文件名为 `zoo.cfg` 的文件即可。

```bash
cp zoo_sample.cfg zoo.cfg
```

**5、启动服务**

```bash
sh apache-zookeeper-3.6.2-bin/bin/zkServer.sh start 
```

## 二、windows 安装

**1、基础环境**

在 windows 种安装 zookeeper 需要安装 jdk。具体的安装 jdk 方式就不再进行描述，网上有很多教程。

**2、下载 zookeeper 安装包**

通过此地址可以下载对应的安装包 `https://zookeeper.apache.org/releases.html`。

**3、解压 zookeeper 压缩包**

**4、新建 zoo.cfg 文件**

启动 zookeeper 需要有一个配置文件 `zoo.cfg`, 在解压好的目录中有一个 `conf` 目录，这个目录中有一个 `zoo_sample.cfg` 文件，这个文件就是官网给的一个模板，我们根据这个模板创建一个新的文件名为 `zoo.cfg` 的文件即可。

**5、启动服务**

点击 `zkServer.bat` 文件即可。

## 三、docker-compose 安装

**1、基础环境**

需要安装 `docker` 和 `docker-compose`，这些就不在本文章中进行过多描述。如果有需要可以找我其他的专栏。

**2、编写 docker-compose**

```bash
version: '3'
services:
  zookeeper:
    image: zookeeper:3.7.0  # 使用Zookeeper的官方镜像，版本为3.7.0
    container_name: zookeeper
    ports:
      - "2181:2181"  # 将容器的2181端口映射到宿主机的2181端口
    environment:
      ZOO_MY_ID: 1  # 设置节点的ID，对于单节点集群，这个值通常是1
      ZOO_SERVERS: server.1=0.0.0.0:2888:3888  # 设置集群中服务器的地址和端口
    volumes:
      - ./data:/data  # 将宿主机的data目录挂载到容器的/data目录
      - ./datalog:/datalog  # 将宿主机的datalog目录挂载到容器的/datalog目录（如果配置文件中指定了dataLogDir）
        #- ./conf:/conf  # 如果需要自定义配置文件，可以挂载到/conf目录
```

**3、启动**

```bash
docker-compose up # 前台启动

docker-compose up -d # 后台启动
```
