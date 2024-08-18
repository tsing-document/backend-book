---
title: 【第一篇章】安装
index: false
isOriginal: true
category: "分布式技术"
tag: "nacos"
date: 2024-08-17
---

## 一、环境准备

想要快速的启动一个 `Nacos` 服务，需要先安装 [`docker`](https://www.docker.com/) 和 [`docker-compose`](https://docs.docker.com/compose/)  两个服务。

## 二、下载 nacos-docker 项目

```bash
git clone https://github.com/nacos-group/nacos-docker.git
```

```bash
cd nacos-docker
```

## 三、启动 nacos 服务

```bash
docker-compose -f example/standalone-derby.yaml up
```

## 四、访问 nacos 控制台

```bash
http://127.0.0.1:8848/nacos
```
- 用户名：nacos
- 密码：nacos