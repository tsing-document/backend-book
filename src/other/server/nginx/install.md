---
title: 【第二篇章】安装 NGINX
index: false
isOriginal: true
category: "奇谈杂论"
tag: "nginx"
date: 2024-08-10
---

## 一、Windows环境安装

1、下载 Nginx
- 访问Nginx官网（[http://nginx.org/en/download.html](http://nginx.org/en/download.html)）下载稳定版本的 Nginx 压缩包，如 `nginx-1.xx.x.zip`。
- 下载后解压到指定的目录，例如 `D:\nginx`。

2、启动 Nginx
- 直接双击解压目录下的 `nginx.exe` 文件启动 Nginx。启动后，一个黑色的命令行窗口可能会一闪而过，这通常是正常的。
- 可以在任务管理器中查看Nginx进程是否已启动。

3、检查是否启动成功
- 打开浏览器，输入 `http://localhost/`，如果看到 Nginx 的欢迎页面，则表示 Nginx 已成功启动。

## 二、Linux环境安装

1、安装依赖

使用包管理器（如yum）安装Nginx所需的依赖包，包括gcc、pcre、pcre-devel、zlib、zlib-devel、openssl、openssl-devel等。
```bash
sudo yum install -y gcc pcre pcre-devel zlib zlib-devel openssl openssl-devel
```

2、安装 Nginx

通过Nginx的官方仓库或EPEL仓库安装Nginx。
```bash
sudo yum install -y nginx
```

3、启动 Nginx

- 使用systemctl（对于systemd系统）或service命令启动Nginx服务。
    ```bash
    sudo systemctl start nginx
    ```
- 或者
    ```bash
    sudo service nginx start
    ```

4、检查是否启动成功

通过浏览器访问 `http://服务器IP地址/`，如果看到 Nginx 的欢迎页面，则表示 Nginx 已成功启动。

## 三、docker-compose 安装 Nginx

1、编写 docker-compose 文件

```bash
version: '3'

services:
  nginx:
    image: nginx:latest
    container_name: my_nginx
    ports:
      - "80:80"       # 映射主机的 80 端口到容器的 80 端口
    volumes:
      - ./nginx.conf:/etc/nginx/nginx.conf   # 映射自定义配置文件
      - ./html:/usr/share/nginx/html         # 映射本地 HTML 文件夹
    restart: always
```

2、启动
```bash
docker-compose up -d # 后台启动
```