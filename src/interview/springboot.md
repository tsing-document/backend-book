---
title: SpringBoot 🍉
index: false
isOriginal: true
category: "面试宝典"
tag: "springboot"
date: 2024-08-11
---

## 一、Spring Boot 有哪些优点？

- 没有单独的 Web 服务器需要，这意味着不需要启动 Tomcat、Jboss 等其他的服务器
- 减少之前的各种配置基本上算是 0 配置启动项目
- 避免大量的 Maven 导入和各种版本冲突

## 二、什么是 JavaConfig?

Spring JavaConfig 是 Spring 社区的产品，它提供了配置 Spring Ioc 容器的纯 Java 方法。因此它有助于避免使用 XML 配置，使用 JavaConfig 的优点在于：

- 面向对象的配置：由于配置被定义为 JavaConfig 中的类，因此用户可以充分利用 Java 中面向对象功能。一个配置类可以继承另一个，从写它的 @Bean 方法等。

- 减少或消除 XML 配置：基于依赖注入原则的外化配置的好处已经被证明，但是，许多开发人员不希望在 XML 和 Java 之间来回切换。JavaConfig 为开发人员提供了一种纯 java 方法来配置与 XML 配置概念相似的 Spring 容器。从技术的角度来讲，只使用 JavaConfig 配置类来配置容器是可行的，但实际上很多人认为将 JavaConfig 和 XML 混合匹配时理想的。

- 类型安全和重构友好：JavaConfig 提供了一种类型安全的方法来配置 Spring 容器。由于 Java 5.0 对泛型的支持，现在可以按类型而不是按名称检索 bean，不需要任何强制转换或基于字符串查找。