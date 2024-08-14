---
title: 🌿面试总结(上)
index: false
isOriginal: true
category: "面试宝典"
tag: "spring"
date: 2024-08-11
---
## 一、什么是 Spring 框架？

Spring 框架是一个为 Java 应用程序的开发提供了综合、广泛的基础性支持的 Java 平台。
Spring 帮助开发者解决基础性的问题，使开发者专注编写业务代码。

## 二、Spring Freamework 有哪些功能？
- IOC: 控制反转
- AOP: 面向切面可以将应用业务逻辑和系统服务分离，以实现高内聚。
- 容器：Spring 负责创建和管理对象的声明周期和配置。
- MVC: 对 web 应用提供了高度可配置性，其他框架集成也十分方便。
- 事务管理：提供了用于事务管理的通用抽象层。Spring 的事务支持也可用于容器较少的环境。
- JDBC异常：Spring 的 JDBC 抽象层提供了一个异常层次结构，简化了错误处理策略。

## 三、什么是 Spring Ioc 容器？

Spring 框架的核心是 Spring 容器。容器创建对象，将它们装配在一起，配置它们并管理它们的完整生命周期。Spring 容器使用依赖注入来管理组成应用程序的组件。容器通过读取提供的配置元数据来接收对象实例化，配置和组装的指令。

## 四、依赖注入的方式有哪几种？

- 构造函数注入
- setter 注入
- 接口注入

## 五、IOC 的好处和实现机制

它将最小化应用程序中的代码量；它以最小的影响和最少的侵入机制促进松耦合；它支持即时实例化和延迟加载服务。

Spring 中 IOC 的实现原理就是工程模式加反射机制。

## 六、@Compoent、@Controller、@Repository、@Service 有何区别？

- @Compoent：这个注解是将类标记为 bean。它是任何 Spring 管理组件的通用构造型。Spring 的组件扫描机制现在可以将其拾取并将拉入应用程序环境中。

- @Controller：这将一个类标记为 Spring Web MVC 控制器。标有它的 Bean 会自动导入到 IOC 容器中。

- @Service：此注解是组件注解的特化。它不会对 `@Compoent` 注解提供任何其他行为。你可以在服务层类中使用它，而不是 `@Compoent`，因为它以更好的方式指名了意图。

- @Repository：这个注解是具有类似用途何和功能的 `@Compoent` 注解的特化。它为 DAO 提供了额外的好处。它即将 DAO 导入 IOC 容器，并使未检查的异常有资格转换为 Spring DataAccessException。

## 七、@Autowired 注解有什么用？

它可以准确的控制应该在何处以及如何进行自动装配。此注解用于在 setter 方法，构造函数，具有任意名称或多个参数的属性或者方法上自动装配 bean。默认情况下，它是类型驱动的注入。

## 八、spring 支持的事务管理类型

- 程序化事务管理：在此过程中，在变成的帮助下管理事务，它为程序员提供了极大的灵活性。但是维护起来非常困难。

- 声明式事务管理：在此，事务管理和业务代码分离。仅使用注解或基于 XML 的配置来管理事务。


## 九、BeanFactory 和 ApplicationContext 有什么区别?

BeanFactory 和 ApplicationContext 是 Spring 框架中的两个核心接口，它们都可以作为 Spring 的容器，但存在多方面的区别。以下是对两者区别的详细分析：

### 1、概念与功能
**BeanFactory**：
- 是 Spring 框架中最底层的接口，是 IOC（控制反转）的核心。
- 提供了 Bean 的创建、配置、初始化和销毁等基本操作。
- 功能包括 Bean 的定义、加载、实例化、依赖注入和生命周期的管理。
- 主要面向 Spring 框架本身，是 Spring 的基础设施。

**ApplicationContext**：
- 继承自 BeanFactory 接口，除了包含 BeanFactory 的所有功能外，还提供了更多扩展功能。
- 支持国际化、资源文件访问（如URL和文件）、事件传播等。
- 面向使用 Spring框架 的开发者，提供了更完整的框架功能。
- 被推荐为Java EE应用的首选容器。

### 2、加载机制

**BeanFactory**：
- 采用延时加载（Lazy Loading）机制，即在容器启动时不会注入 Bean，而是在需要使用Bean 的时候，才会对该 Bean 进行加载和实例化。
- 如果 Bean 的某个属性没有注入，BeanFactory 加载时不会抛出异常，直至第一次调用`getBean()` 方法时才会抛出异常。

**ApplicationContext**：
- 在容器启动时，一次性创建并初始化所有的 Bean，因此运行时的速度相对 BeanFactory 较快。
- 在容器启动时就可以发现 Spring 配置文件中存在的问题，有利于检测依赖属性是否注入。
- 由于一次性加载所有 Bean，可能会导致内存占用较多，尤其是在 Bean 数量较多时，会影响程序的启动速度。

### 3、创建与注册方式

**BeanFactory**：
- 通常以编程的方式创建，如使用 `XmlBeanFactory` 或 `DefaultListableBeanFactory` 等实现类。
- 需要手动注册 BeanPostProcessor 和 BeanFactoryPostProcessor 等。

**ApplicationContext**：
- 以声明的方式创建，如使用 `ClassPathXmlApplicationContext`、 `FileSystemXmlApplicationContext` 等实现类。
- 自动注册 BeanPostProcessor 和 BeanFactoryPostProcessor 等，简化了配置过程。

## 十、Spring Bean 的声明周期
Spring Bean的生命周期是指从Bean的创建、初始化到销毁的整个过程，这个过程由Spring IoC容器（Inversion of Control，控制反转容器）控制。Spring Bean的生命周期可以大致分为几个主要阶段，每个阶段都包含特定的操作和回调点，允许开发者在Bean的生命周期中的不同点插入自定义逻辑。以下是对Spring Bean生命周期的详细解释：

### 1、Bean元信息配置阶段

* **定义Bean信息**：通过XML配置文件、注解（如`@Component`、`@Service`等）、Java代码（使用`@Bean`注解）或properties文件等方式定义Bean的信息。
* **解析Bean信息**：Spring容器启动时，会解析这些配置信息，将其转换为内部的`BeanDefinition`对象。`BeanDefinition`包含了Bean的元数据信息，如类名、作用域、依赖关系等。

### 2、Bean注册阶段

* **注册Bean到容器**：解析后的`BeanDefinition`对象会被注册到Spring IoC容器中，容器会维护一个Bean定义的注册表，用于后续的Bean实例化和依赖注入。

### 3、Bean实例化阶段

* **实例化前阶段**：在Bean实例化之前，可能会进行一些前置处理，如检查Bean的依赖项是否已准备好。
* **实例化阶段**：根据`BeanDefinition`中的信息，使用反射机制创建Bean的实例。对于单例Bean，Spring容器会缓存这个实例，以便后续请求时直接返回。

### 4、属性赋值阶段

* **实例化后阶段**：Bean实例化完成后，但属性还未赋值之前，可能会进行一些额外的处理。
* **属性赋值前阶段**：设置Bean的属性值之前，可能需要进行一些准备工作。
* **属性赋值阶段**：Spring根据`BeanDefinition`中的依赖信息，通过依赖注入的方式为Bean的属性赋值。这包括通过构造函数注入、Setter方法注入等方式。

### 5、初始化阶段

* **Aware接口回调阶段**：如果Bean实现了特定的Aware接口（如`BeanNameAware`、`BeanFactoryAware`、`ApplicationContextAware`等），Spring容器会回调这些接口的相应方法，将容器相关的信息注入到Bean中。
* **初始化前阶段**：在Bean正式初始化之前，可能会执行一些前置处理逻辑。
* **初始化阶段**：
  - 如果Bean实现了`InitializingBean`接口，会调用其`afterPropertiesSet()`方法。
  - 如果在Bean配置中指定了`init-method`，则会调用该方法。
* **初始化后阶段**：Bean初始化完成后，可能会执行一些后置处理逻辑。

### 6、使用阶段

* **Bean的使用**：初始化完成后，Bean就可以被应用程序使用了。Spring容器负责维护Bean的实例，并根据需要将其注入到其他Bean中。

### 7、销毁阶段

* **销毁前阶段**：在Bean销毁之前，可能会执行一些清理工作。
* **销毁阶段**：
  - 如果Bean实现了`DisposableBean`接口，会调用其`destroy()`方法。
  - 如果在Bean配置中指定了`destroy-method`，则会调用该方法。
  - 对于单例Bean，Spring容器关闭时会自动调用这些销毁方法。

### 总结

Spring Bean的生命周期是一个从定义到销毁的完整过程，其中包含了多个阶段和回调点。通过在这些回调点插入自定义逻辑，开发者可以对Bean的生命周期进行精细控制，以满足复杂的应用需求。
