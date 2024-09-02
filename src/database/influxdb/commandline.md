---
title: 【第四篇章】命令行操作
index: false
isOriginal: true
category: "数据库"
tag: "influxdb"
date: 2024-09-02
---

在 `influxDB` 中，数据库操作、表操作、数据操作和用户管理构成了数据库管理的核心部分。以下是对这些模块的详细讲解：

## 一、数据库操作

### 1、显示所有数据库

* **命令**：`SHOW DATABASES`
* **说明**：此命令会列出 `influxDB` 中当前存在的所有数据库。

### 2、创建数据库

* **命令**：`CREATE DATABASE <database_name>`
* **示例**：`CREATE DATABASE mydb`
* **说明**：使用此命令创建一个新的数据库，`<database_name>`应替换为你想要创建的数据库名。

### 3、删除数据库

* **命令**：`DROP DATABASE <database_name>`
* **示例**：`DROP DATABASE mydb`
* **说明**：此命令会删除指定的数据库及其包含的所有数据。

### 4、使用数据库

* **命令**：`USE <database_name>`
* **示例**：`USE mydb`
* **说明**：选择并切换到指定的数据库，以便后续的数据操作都在该数据库中进行。

## 二、表操作

### 1、influxDB 中的“表”概念

`influxDB` 中没有传统意义上的 “表” 概念，取而代之的是 “MEASUREMENTS”。`MEASUREMENTS` 的功能与传统数据库中的表相似，因此可以将其视为 `influxDB` 中的表。

### 2、显示所有MEASUREMENTS（表）

* **命令**：`SHOW MEASUREMENTS`
* **说明**：此命令会列出当前数据库中所有的MEASUREMENTS（即表）。

### 3、创建MEASUREMENTS（表）

* **说明**：在 influxDB 中，MEASUREMENTS 是通过插入数据来隐式创建的。当你首次向一个不存在的 MEASUREMENTS 插入数据时，该 MEASUREMENTS 就会被创建。
* **示例**：`INSERT mymeasurement,host=serverA,region=us-west value=0.64`
* **注意**：此命令同时插入了数据并创建了名为 `mymeasurement` 的 MEASUREMENTS。

### 4、删除MEASUREMENTS（表）

* **命令**：`DROP MEASUREMENT <measurement_name>`
* **示例**：`DROP MEASUREMENT mymeasurement`
* **说明**：此命令会删除指定的MEASUREMENTS及其包含的所有数据。

## 三、数据操作

### 1、插入数据

* **命令格式**：`INSERT INTO <measurement_name> <tag_set> <field_set> [UNIX_nano_timestamp]`
* **示例**：`INSERT INTO mymeasurement,host=serverA,region=us-west value=0.64`
* **说明**：向指定的MEASUREMENTS中插入一条数据点。其中，`<tag_set>`是标签集，`<field_set>`是字段集，`[UNIX_nano_timestamp]`是可选的时间戳（默认为当前时间）。

### 2、查询数据

* **基本查询**：使用`SELECT`语句从MEASUREMENTS中查询数据。
* **示例**：`SELECT "value" FROM "mymeasurement" WHERE "host" = 'serverA'`
* **复杂查询**：包括聚合函数（如`SUM()`, `MEAN()`, `COUNT()`等）、`GROUP BY`子句、时间范围过滤等。

## 四、用户管理

### 1、显示用户

* **命令**：`SHOW USERS`
* **说明**：列出当前InfluxDB实例中的所有用户。

### 2、创建用户

* **命令**：`CREATE USER <username> WITH PASSWORD '<password>'`
* **示例**：`CREATE USER admin WITH PASSWORD 'password123'`
* **说明**：创建一个新用户，并设置其密码。

### 3、创建管理员用户

* **命令**：`CREATE USER <username> WITH PASSWORD '<password>' WITH ALL PRIVILEGES`
* **示例**：`CREATE USER admin WITH PASSWORD 'password123' WITH ALL PRIVILEGES`
* **说明**：创建一个具有所有权限的管理员用户。

### 4、删除用户

* **命令**：`DROP USER <username>`
* **示例**：`DROP USER admin`
* **说明**：删除指定的用户。

### 总结

以上是对InfluxDB中数据库操作、表操作、数据操作和用户管理四个模块的详细讲解。需要注意的是，InfluxDB 2.x版本在查询语言、API等方面与1.x版本有所不同，因此在实际操作中应参考相应版本的官方文档。