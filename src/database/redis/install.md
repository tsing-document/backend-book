---
title: 【第二篇章】安装
index: false
isOriginal: true
category: "数据库"
tag: "redis"
date: 2024-08-02
---

## 一、 Linux 安装

官网地址
```java
    https://redis.io/
```

下载
```java    
    wget https://download.redis.io/releases/redis-6.0.10.tar.gz          
```

安装
```java
    cd redis-6.0.10
    make      
    cd src
    make install PREFIX=/usr/local/redis
```

注意: make 编译失败,可能因为没有 gcc 服务

查看 gcc 是否安装
```java
    rep -qa|grep gcc          
```

安装 gcc
```java
    yum -y install gcc  
    yum -y install gcc-c++  
```

将配置文件移动到安装目录
```java
    mv redis.conf /usr/local/redis/etc    
```

启动服务
```java
    /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis.conf
```

默认情况下,redis 不是后台启动,设置后台启动
```java
    vim redis.conf
    将daemonize的值改为yes
```

redis 开机自启
```java
    vim /etc/rc.local
    加入
    /usr/local/redis/bin/redis-server /usr/local/redis/etc/redis-conf
```

设置权限登录
```java
    1、注释掉redis安装目录下的redis.conf文件中的如下数据：bind 127.0.0.1，注释#bind 127.0.0.1   或者修改bind 0.0.0.0。
    2、修改保护模式为非：默认为protected-mode yes ,修改后为protected-mode no。
    3、设置redis连接密码：找到 requirepass foobared,在下面添加 requirepass 123456。
```

带密码的命令行登录
```java
    带密码的启动方式
        ./redis-cli -h 127.0.0.1 -p 6379 -a 123456
            -h 是主机IP地址
            -p 是端口号
            -a 是密码
```

## 二、windows 安装

下载对应的 zip 安装包。./redis-servcer.exe ./redis.window.conf 启动即可。

## 三、docker-compose 安装

编写 docker-compose 文件
```bash
version: '3'
services:
  redis:
    image: redis:latest
    ports:
      - "6379:6379"
    volumes:
      - ./data:/data
    command: redis-server --appendonly yes
```

启动服务
```bash
docker-compose up # 前台启动

docker-compose up -d # 后台启动
```