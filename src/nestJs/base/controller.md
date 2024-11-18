---
title: 【第三篇章】控制器
index: false
isOriginal: true
category: "nestJs"
tag: "nestJs基础"
date: 2024-09-16
---

csdn发布日期：2024-09-17

如果你对 Java 了解你可以把控制器当作和 `Controller` 层一样就行，用来接受请求和返回请求。

## 一、使用 cli 创建控制器

```shell
nest g controller [name] 命令即可
```

## 二、解释生成的代码

```shell
import { Controller } from '@nestjs/common';

@Controller('demo')
export class DemoController {}
```

`@Controller('')` 注解代表把这个文件标志为 `控制层`，`demo` 是把请求路径的一个分组。相当于 Java 中类上面标志 `@RequestMapping("demo")` 一样的效果。

## 三、解释方法

```shell
import { Controller, Get } from '@nestjs/common';

@Controller('demo')
export class DemoController {

    @Get("findAll")
    findAll(): string {
      return 'say demo';
    }

}
```

通过上面这个代码我们发现多了 `findAll()` 方法，`@Get("findAll")` 说的是本方法的请求方式是 get，请求路径是 `demo/findAll`。why? 你发现了什么？完整的请求路径是要将类上的请求路径和方法上的请求路径拼接到一起的。

## 四、nest 提供的其他方法装饰器

`@Get()`、`@Post()`、`@Put()`、`@Delete()`、`@Patch()`、`@Options()` 和 `@Head()`。此外，`@All()` 定义了一个端点来处理所有这些。我们先记住有这些装饰器，后面会在使用的过程中一个个讲解。

## 五、app.module.ts 中引入自定义控制器

当我们编写好控制器之后，需要将控制器注册在 `app.modules.ts` 文件中。

```shell
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DemoController } from './demo/demo.controller';

@Module({
  imports: [],
  controllers: [AppController, DemoController],
  providers: [AppService],
})
export class AppModule {}
```