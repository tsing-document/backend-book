---
title: ☕ Java基础面试题总结(上)
index: false
isOriginal: true
category: "面试宝典"
tag: "java"
date: 2024-08-12
---
## 一、Java 中有几种基本数据类型？各占多少字节？

在 Java 中基本数据类型有 8 个，占用的字节分别是整型 byte（1个字节）、short（2个字节）、int（4个字节）、long（8个字节）；浮点型 float（4个字节）、double（8个字节）；布尔类型 boolean； 字符类型 char (2个字节)。

## 二、String 类能被继承吗？为什么？

String 类不能被继承。因为 String 类被 final 修饰。final 修饰变量变量就会变成常量；final 修饰方法方法就会不可重写；final 修饰类类就不能继承；

## 三、String、StringBuilder、StringBuffer 的区别？

String 是只读字符串，也就是说 String 引用的字符串内容是不能被改变的。

StringBuffer/StringBuilder 类表示字符串对象可以直接修改。

StringBuffer 是线程安全的效率慢。StringBuilder 是线程不安全的效率高。

## 四、在多线程情况下 SimpleDateFormat 是线程安全的吗？

在多线程情况下 DateFormat 的所有实现，包括 SimpleDateFormat 都不是线程安全的。如果不在线程安全的情况下使用，在解析或者格式化日期的时候，可能会会获得一个不正确的结果。最佳的时间的多线程的情况下使用的时间工具类是 `joda-time`。

## 五、equals 和 == 区别

`==` 比较的是变量（栈）内`equals` 和 `==` 在Java中的主要区别体现在以下几个方面：

### 1、本质区别

* **equals()**：是定义在`java.lang.Object`类中的一个方法，用于比较两个对象的内容是否相等。它是一个方法，因此可以通过重写（Override）来改变其默认行为。
* **==**：是一个操作符，用于比较两个对象或基本数据类型的值是否相等。对于对象，它比较的是两个对象在内存中的地址是否相同，即是否是同一个对象的引用；对于基本数据类型，它比较的是两个值是否相等。

### 2、比较内容

* **equals()**：默认情况下，`equals()`方法通过`==`来比较两个对象的引用是否相同（即是否是同一个对象）。但是，许多类（如`String`、`Integer`等）都重写了`equals()`方法，以提供基于内容而非引用的比较。
* **==**：对于对象，它总是比较引用；对于基本数据类型，它比较的是值。

### 3、灵活性

* **equals()**：由于`equals()`是一个方法，因此它可以通过重写来提供灵活的比较逻辑。例如，在自定义类中，可以根据类的属性来定义两个对象何时被视为相等。
* **==**：其比较逻辑是固定的，无法更改。

### 4、 性能

* **equals()**：由于可能需要执行复杂的比较逻辑（特别是在重写了`equals()`方法的类中），因此其性能可能低于`==`。
* **==**：仅仅比较引用或值，因此其性能通常优于`equals()`。

### 5、 使用场景

* **equals()**：当需要比较两个对象的内容是否相等时，应使用`equals()`方法。特别是当比较的是自定义对象或已经重写了`equals()`方法的类（如`String`、`Integer`等）的实例时。
* **==**：当需要比较两个对象是否是同一个对象（即它们的引用是否相同）时，应使用`==`操作符。此外，对于基本数据类型的比较，也应使用`==`。

### 示例

```java
String s1 = new String("hello");
String s2 = new String("hello");

System.out.println(s1 == s2); // false，因为s1和s2虽然内容相同，但它们是两个不同的对象
System.out.println(s1.equals(s2)); // true，因为String类重写了equals()方法，以比较内容

Integer i1 = 123;
Integer i2 = 123;

System.out.println(i1 == i2); // true，对于Integer这样的包装类，在-128到127之间的值会被缓存，因此i1和i2实际上是同一个对象
System.out.println(i1.equals(i2)); // true，即使不考虑缓存，equals()方法也会比较值
```

在这个示例中，`==`用于比较`String`对象时返回`false`，因为`s1`和`s2`虽然内容相同，但它们是两个不同的对象；而`equals()`方法返回`true`，因为`String`类重写了`equals()`方法以比较内容。对于`Integer`对象，由于Java对-128到127之间的值进行了缓存，因此`i1`和`i2`实际上是同一个对象，所以`==`和`equals()`都返回`true`。但即使不考虑缓存，`equals()`方法也会比较两个`Integer`对象的值是否相等。

## 六、final 有哪些用法？

- 被 final 修饰的类不能被继承
- 被 final 修饰的方法不能被重写
- 被 final 修饰的变量不能被修改值
- 被 final 修饰的方法 jvm会尝试内联 以提高运行效率
- 被 final 修饰的常量，在编译阶段会存入常量池中

## 七、java 反射的作用原理

1、定义

反射机制是在运行时，对于任意一个类，都能知道这个类的所有属性和方法；对于任意个对象，都能调用它的任意一个方法。在 java 中只要给定类的名字，就可以通过反射机制来获得类的所有信息。

2、反射的实现方式

- 使用类名的 `.class` 属性，例如 `String.class` 可以获取 `String` 类的 `Class` 对象。
- 使用对象的 `getClass()` 方法，例如 `"hello".getClass()` 可以获取字符串对象的 `Class` 对象。
- 使用 `Class.forName()` 方法，需要传入类的全限定名，例如 `Class.forName("java.lang.String")`。