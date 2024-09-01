---
title: 【第二篇章】docker-compose、windows、linux 安装
index: false
isOriginal: true
category: "数据库"
tag: "influxdb"
date: 2024-09-01
---

## 一、docker-compose

编写 `docker-compose.yml`

```bash
version: '3'
services:
  influxdb:
    image: influxdb:1.8
    container_name: influxdb
    restart: always
    ports:
      - "8086:8086"
    volumes:
      - ./influxdb_data:/var/lib/influxdb
    environment:
      - INFLUXDB_DB=mydb
      - INFLUXDB_ADMIN_USER=admin
      - INFLUXDB_ADMIN_PASSWORD=password
```

启动服务

```bash
docker-compose up # 前台启动服务


docker-compose up -d # 后台启动服务
```

验证服务，登录到容器中

```bash
docker exec -it influxdb influx -username admin -password password
```

登录成功之后可以执行下面的命令

```bash
root@DESKTOP-08FPME5:/home/tsing/docker-compse/influxdb# docker exec -it influxdb influx -username admin -password password
Connected to http://localhost:8086 version 1.8.10
InfluxDB shell version: 1.8.10
> show databases;
name: databases

name
----
mydb
```

## 二、windows 安装 

todo

## 三、linux 安装

todo