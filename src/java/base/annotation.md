---
title: 【第八篇章】注解
index: false
isOriginal: true
category: "JAVA"
tag: "Java基础"
date: 2024-08-06
---

## 一、简介
1、从JDK5开始，Java增加对元数据的支持，也就是注解，注解与注释是有一定区别的，可以把注解理解为代码里的特殊标记，这些标记可以在编译，类加载，运行时被读取，并执行相应的处理。通过注解开发人员可以在不改变原有代码和逻辑的情况下在源代码中嵌入补充信息。

2、提供一种为程序元素设置元数据的方法。  

3、注解不能直接干扰程序代码运行，无论增加或者删除注解，代码都能正常运行。 

## 二、注解的核心

1、Annotation

所有 annotation 类型都要扩展的公共接口。注意，手动扩展该公共接口的接口不定义 annotation 类型。还要注意此接口本身不定义 annotation 类型。

```java
package java.lang.annotation;

public interface Annotation {

    boolean equals(Object obj);
 
    int hashCode();
    
    String toString();

    Class<? extends Annotation> annotationType();
    
}
```

2、@Target

设置注解的使用范围。

```java
package java.lang.annotation;

public enum ElementType {
    //使用范围的可选值
    TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR,
    LOCAL_VARIABLE, ANNOTATION_TYPE, PACKAGE,
    TYPE_PARAMETER, TYPE_USE
}
```
| 名称 | 作用 |
| --- | --- |
| TYPE | 接口、类、枚举、注解 |
| FIELD | 字段、枚举的常量 |
| METHOD | 方法 |
| PARAMETER | 方法参数 |
| CONSTRUCTOR | 构造函数 |
| LOCAL_VARIABLE | 局部变量 |
| ANNOTATION_TYPE |  注解 |
| PACKAGE | 所属包 |
| TYPE_PARAMETER |     |
| TYPE_USE |     |


3、@Retention

设置生命周期。

```java
package java.lang.annotation;

public enum RetentionPolicy {
    //设置声明周期的可选值
    SOURCE, CLASS, RUNTIME
}
```
| 名称 | 作用 |
| --- | --- |
| SOURCE | 注解仅存在于源码中，在class字节码文件中不包含。 |
| CLASS | 默认的保留策略，注解会在class字节码文件中存在，但运行时无法获得。 |
| RUNTIME | 注解会在class字节码文件中存在，在运行时可以通过反射获取到。 |

## 三、内置注解

1、@Override之方法重写

检测方法是否是重写方法。如果父类中或者引用的接口中没有该方法，在编译时期就会报错。
```java
package java.lang;

import java.lang.annotation.*;

@Target(ElementType.METHOD)
@Retention(RetentionPolicy.SOURCE)
public @interface Override {
}
```
**案例**
```java
// WoNiu 类
package com.tsing.annotation;
public class WoNiu {
    private String name = "蜗牛";
    public String sayHello() {
        return "我的名字是" + this.name;
    }
}

// SuperWoNiu 类
package com.tsing.annotation;
public class SuperWoNiu extends WoNiu{
    private String name = "极速蜗牛";
    @Override
    public String sayHello() {
        System.out.println(super.sayHello());
        return "我是" +  this.name;
    }
}

// 测试类
package com.tsing.annotation;
public class TestOverride {
    public static void main(String[] args) {
        SuperWoNiu sw = new SuperWoNiu();
        System.out.println(sw.sayHello());
    }
}

//输出结果
我的名字是蜗牛
我是极速蜗牛
```

2、@Deprecated之是否过时  

表示该类或者该方法已经不建议使用，可以选择其他更好的方法使用。

```java

package java.lang;

import java.lang.annotation.*;
import static java.lang.annotation.ElementType.*;

@Documented
@Retention(RetentionPolicy.RUNTIME)
@Target(value={CONSTRUCTOR, FIELD, LOCAL_VARIABLE, METHOD, PACKAGE, PARAMETER, TYPE})
public @interface Deprecated {
}
```

**案例**
```java
// WoNiu 类
package com.tsing.annotation.deprecated;

public class WoNiu {
    private String name = "蜗牛";
    @Deprecated
    public void sayHello() {
        System.out.println(this.name + "已经过时了！！！！");
    }
}

// 测试类
package com.tsing.annotation.deprecated;
public class DemoDeprecated {
    public static void main(String[] args) {
        WoNiu woNiu = new WoNiu();
        woNiu.sayHello();
    }
}

//运行结果
蜗牛已经过时了！！！！
```

3、@SuppressWarnings之异常压制

取消显示指定的编译器警告。

```java
package java.lang;

import java.lang.annotation.*;
import static java.lang.annotation.ElementType.*;

@Target({TYPE, FIELD, METHOD, PARAMETER, CONSTRUCTOR, LOCAL_VARIABLE})
@Retention(RetentionPolicy.SOURCE)
public @interface SuppressWarnings {
    String[] value();
}
```

**案例**
```java
package com.tsing.annotation.suppressWarnings;

import java.util.ArrayList;
import java.util.List;

public class WoNiu {

    private String name = "蜗牛";

    //这种方式声明集合，add方法不会出现异常警告。
    public static List<String> list1 = new ArrayList<String>();
    
    //这种方式声明集合，add方法会出现异常警告。
    public static List cache = new ArrayList();

    // 添加上这边注解，就可以将异常警告信息压制。
    @SuppressWarnings(value = "unchecked")
    public void add(String data) {
        boolean add = cache.add(data);
    }

}
```

## 四、自定义注解

**定义注解类**
```java
package com.tsing.annotation.cases;
import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface WoNiu {
    String desc();
    int length();
}
```

**通过反射获取设置的值**
```java
package com.tsing.annotation.cases;

import org.junit.Test;

import java.lang.reflect.Field;

public class DemoAnnotation {
    //使用自定义注解
    @WoNiu(desc = "用户名", length = 12)
    private String username;
    
    @Test
    public void testWoNiu() {

        Class demoAnnotationClass = DemoAnnotation.class;

        //获取所有字段
        for (Field f : demoAnnotationClass.getDeclaredFields()) {
            //判断这个字段是否有注解
            if(f.isAnnotationPresent(WoNiu.class)) {
                WoNiu woNiu = f.getAnnotation(WoNiu.class);
                System.out.println("字段:[" + f.getName() + "], 描述:[" + woNiu.desc() + "], 长度:[" + woNiu.length() +"]");
            }
        }
    }
}
```

## 五、注解的使用场景
解决对象中校验问题，将复杂的校验判断存到对象中
```java
package com.tsing.annotation.cases.controlflow.annotation;

import java.lang.annotation.ElementType;
import java.lang.annotation.Retention;
import java.lang.annotation.RetentionPolicy;
import java.lang.annotation.Target;

@Target(ElementType.FIELD)
@Retention(RetentionPolicy.RUNTIME)
public @interface Length {
    int min();
    int max();
    String msg();
}

package com.tsing.annotation.cases.controlflow.annotation;

import java.lang.reflect.Field;

public class Bean {

    public static String validate(Object obj) throws IllegalAccessException {
        /**
         * 通过反射获取object中有哪些字段
         * 本文获取的 id、name、sex、bool几个字段
         */

        Field[] fields = obj.getClass().getDeclaredFields();

        // for 循环校验每个字段上那个字段有注解
        for (Field field : fields) {
            // 判断那个字段上有@Length注解
            if(field.isAnnotationPresent(Length.class)) {
                // 通过反射获取该字段上length注解的详细信息
                Length length = field.getAnnotation(Length.class);
                // 设置可以访问私有变量
                field.setAccessible(true);

                // 获取实际的值
                int value = (int) field.get(obj);
                System.out.println(value);
                // 将实际的值和注解上标识的值比较
                    // 10  < 11  && 4000 > 11
                if(!(value > length.min() && value < length.max())){
                    return length.msg();
                }
            }
        }

        return null;
    }
}

package com.tsing.annotation.cases.controlflow;

import com.tsing.annotation.cases.controlflow.annotation.Length;

public class WoNiu {

    @Length(min = 10, max = 4000, msg = "id 是10 -- 4000")
    private  Integer id;

    private  String name;

    private  String sex;

    private  Boolean bool;

    public WoNiu() {
    }

    public WoNiu(Integer id, String name, String sex, Boolean bool) {
        this.id = id;
        this.name = name;
        this.sex = sex;
        this.bool = bool;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSex() {
        return sex;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public Boolean getBool() {
        return bool;
    }

    public void setBool(Boolean bool) {
        this.bool = bool;
    }

    @Override
    public String toString() {
        return "WoNiu{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", sex='" + sex + '\'' +
                ", bool=" + bool +
                '}';
    }
}

package com.tsing.annotation.cases.controlflow;
import com.tsing.annotation.cases.controlflow.annotation.Bean;
public class Demo {
    public static void main(String[] args) throws IllegalAccessException {
        WoNiu woNiu = new WoNiu();
        woNiu.setId(9);
        woNiu.setBool(false);
        woNiu.setSex("男");
        String validate = Bean.validate(woNiu);
        System.out.println(validate);
        System.out.println(woNiu.toString());
    }
}
```