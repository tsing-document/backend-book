---
title: 【第三篇章】注释、数据类型、运算符
index: false
isOriginal: true
category: "JAVA"
tag: "Java基础"
date: 2024-08-04
---

## 一、注释

Java 中的注释有三种方式：单行注释、多行注释、文档注释。

1、单行注释语法
```java
  // 这是单行注释
```

2、多行注释
```java
    /*
    * 这是多行注释
    */
```

3、文档注释
```java
    /**
    * 这是文档注释
    */
```

## 二、数据类型

Java 中有 8 中基本数据类型，分别为：整型（byte 1个字节、short 2个字节、int 4个字节、long 8个字节）；浮点型（float 4个字节、double 8个字节）；布尔类型（boolean）；字符型（char 2个字节）。

1、类型转换之自动类型转换

![自动类型转换](./leixingzhuanhuan.png)

2、类型转换之强制类型转换

强制类型转换数据容易丢失精度。

3、案例
```java
//类型转换-自动类型转换
char a = 't';
int b = a;
System.out.println("char cover int=>" + b);

long c = b;
System.out.println("int cover long=>" + c);

float d = c;
System.out.println("long cover float=>" + d);

double e = d;
System.out.println("float cover double=>" + e);
```

## 三、运算符
Java 中运算符分为：算符运算符（`-` `+` `*` `/` `%` `--` `++`）；赋值运算符：（`=`）；比较运算符：（ `>` `>=` `<` `<=` `==` `!=`）；逻辑运算符：（`&&` `&` `||` `|` `!` `^`）；三目运算符：（(expression) ? 表达式1 : 表达式2）。

1、案例：
```java
    //算符运算符：
        int a = 7;
        int b = 2;

        //加法
        System.out.println(a + b);

        //减法
        System.out.println(a - b);

        //乘法
        System.out.println(a * b);

        //除法 这个是获取的整数
        System.out.println(a / b);

        //求余
        System.out.println(a % b);

        //-- 放在左边先进行运算再执行 -- 操作，放在右边先执行 -- 再进行运算
        System.out.println(a--);

        //++ 放在左边先进行运算再执行 ++ 操作，放在右边先执行 ++ 再进行运算
        System.out.println(a++);

        //输出结果：9
        //System.out.println(a++ + b);

        //输出结果：10
        //System.out.println(++a + b);

        //输出结果：5
        //System.out.println(a-- -b);

        //输出结果：4
        System.out.println(--a -b);
    //赋值运算符：
        String a = "测试";

    //比较运算符：
        int a = 5;
        int b = 10;

        //大于
        System.out.println(a > b);

        //大于等于
        System.out.println(a >= b);

        //小于
        System.out.println(a < b);

        //小于等于
        System.out.println(a <= b);

        //等于
        System.out.println(a == b);

        //不等于
        System.out.println(a != b);

        //对象比较的是地址
        Comparable c1 = new Comparable();
        Comparable c2 = new Comparable();
        System.out.println(c1 == c2);

        System.out.println(c1 != c2);
    //逻辑运算符：
        boolean a = true;
        boolean b = false;

        //与，前后两个操作数必须都是true才是true,否则返回false
        System.out.println(a && b); //false

        //不断路与，和与相同，只是表达式两边都要算出结果才会执行
        System.out.println(a & b);  //false

        //或，只要表达式两边有一个为 true 就返回true,否则返回false。
        System.out.println(a || b); //true

        //短路或，和或相同，只是表达式两边都要算出结果才会执行
        System.out.println(a | b);  //true

        //非，只需要一个操作数，如果操作数返回true,结果就会为false,反之就是true
        System.out.println(!a); //false
        System.out.println(!b); //true

        //异或，当两个操作数不同时才会返回true,当两个操作数相同则返回false
        System.out.println(true ^ true); //false
        System.out.println(true ^ false); //true
        System.out.println(false ^ true); //true
        System.out.println(false ^ false); //false
    //三目运算符:
        int a = 7;
        int b = 10;

        boolean c = a > b ? true : false;
        System.out.println(c); //false
```
