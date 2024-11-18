---
title: 【第四篇章】提供器
index: false
isOriginal: true
category: "nestJs"
tag: "nestJs基础"
date: 2024-09-16
---
csdn发布日期：2024-09-18

## 一、提供器介绍

你把这个提供器当作 Java 中的 `service` 层处理核心业务逻辑的即可。

## 二、通过 CLI 生成 service 层代码

```shell
nest g service [name] ## 使用这个命令即可
```

## 三、查看生成的文件

```shell
## demo.service.ts

import { Injectable } from '@nestjs/common';

@Injectable()
export class DemoService {}
```

`@Injectable()` 装饰器的作用是将元数据声明 `DemoService` 可由 NestJs Ioc 容器被管理。

## 四、对比Java中的实体类是怎么样的？

```shell
export interface Cat {
  name: string;
  age: number;
  breed: string;
}
```