---
title: 【第六篇章】泛型
index: false
isOriginal: true
category: "JAVA"
tag: "Java基础"
date: 2024-08-05
---

## 一、简介
Java泛型是J2 SE1.5中引入的一个新特性，其本质是参数化类型，也就是说所操作的数据类型被指定为一个参数（type parameter）这种参数类型可以用在类、接口和方法的创建中，分别称为泛型类、泛型接口、泛型方法。

## 二、泛型的优点

能够更好的限制类型，避免类型转换的错误。可以把运行时的异常提前到编译期。

## 三、泛型类的定义

泛型的本质就是类型参数化，定义的泛型参数就是类型，当然这个类型定义的时候还不知道具体是什么类型，只有在类创建对象或者调用方法的时候才知道。

## 四、泛型方法

泛型方法的泛型是加在返回值类型的前面。

## 五、泛型通配符

泛型通配符不是用在定义对象上，是用在方法的型参上。使用泛型通配符是因为集合没有协变。

## 六、语法
```java
    //泛型的格式
        <数据类型> 数据类型：只能是引用数据类型
    //使用格式
        数据类型<泛型的类型> 对象 = new 数据类型<泛型的类型>();
        //注意：只在等式右边加没有效果。相当于没有加。
```
## 七、案例
```java
    //泛型类
        //GeneiricType 泛型类
            package com.tsing.extend.demo7;
            /**
            * 
            * @author dongli
            *
            * @param <T> 型参
            * @param <E> 型参
            */
            public class GeneiricType<T> {

                    T t;
                    
                    public T getT() {
                        return t;
                    }
                    
                    public void setT(T t) {
                        this.t = t;
                    }
                    
            }
        //测试类
            package com.tsing.extend.demo7;

            public class Demo {
                
                public static void main(String[] args) {
                    GeneiricType<String> g = new GeneiricType<String>();
                    g.setT("test");
                    System.out.println(g.getT());
                }

            }
    //泛型接口
        //接口定义：
            package com.tsing.extend.demo7;

            public interface GeneiricInterface<T, E> {

                void method(T t);

            }
        
        //接口实现类1
            package com.tsing.extend.demo7;

            public class GeneiricInterfaceImpl<T, E> implements GeneiricInterface<T, E> {

                @Override
                public void method(T t) {
                    System.out.println(t);
                }

            }

        //接口实现类2
            package com.tsing.extend.demo7;

            public class GeneiricInterfaceImpl implements GeneiricInterface<String, String> {

                @Override
                public void method(String t) {
                    System.out.println(t);
                }

            }
    //范型方法：
        //GenericMethod
            package com.tsing.extend.demo7;

            public class GenericMethod {
                
                public <T, E> void method(T t) {
                    System.out.println(t);
                }
            }
        //测试类
            package com.tsing.extend.demo7;

            public class Demo {
                
                public static void main(String[] args) {
                    GenericMethod g = new GenericMethod();
                    g.method(1);
                }
            }

```
