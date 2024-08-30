---
title: 【第四篇章】函数
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-08-31
---

## 一、语法

```python
def 函数名(参数列表):  
    """  
    函数文档字符串  
    """  
    # 函数体  
    return 返回值  # 可选
```

## 二、空参不带返回值的函数

```python
# 定义函数
>>> def functionName():
...     print("空参不带返回值的函数")
...
# 调用函数
>>> functionName()
空参不带返回值的函数
```

## 三、带参数不带返回值的函数

```python
# 定义函数
>>> def functionName(name):
...     print(name + "带参数不带返回值的函数")
...
# 调用函数
>>> functionName("我是一个")
我是一个带参数不带返回值的函数
```

## 四、带参数带返回值的函数

```python
# 定义函数
>>> def functionName(name):
...     return name + "带参数带返回值的函数"
...
>>> print(functionName("我是"))
我是带参数带返回值的函数
```

## 五、默认值参数

```python
def greet(name, greeting="Hello"):  
    print(f"{greeting}, {name}!")  
  
greet("Bob")  # 输出：Hello, Bob!  
greet("Eve", "Hi")  # 输出：Hi, Eve!
```

## 六、关键字参数基础用法

在Python中，关键字参数（Keyword Arguments）允许你通过参数名来指定函数中的参数值。这种方式提高了代码的可读性，并且允许函数定义中的参数顺序与函数调用时的参数顺序不同。当你调用一个函数时，你可以通过参数名=值的形式来传递参数，这种形式的参数就是关键字参数。

**关键字参数的基本用法**

假设我们有一个函数定义如下：

```python
def greet(greeting, name):
    print(f"{greeting}, {name}!")
```

在调用这个函数时，我们通常需要按照函数定义中参数的顺序来传递值：

```python
greet("Hello", "Alice")
```

但是，如果我们使用关键字参数，就可以不按顺序传递参数：

```python
greet(name="Alice", greeting="Hello")
```

或者只传递部分参数，其余使用默认值（如果函数定义中指定了默认值的话）：

```python
# 假设greet函数修改了，为greeting提供了默认值
def greet(greeting="Hello", name="World"):
    print(f"{greeting}, {name}!")

# 只传递了name参数
greet(name="Alice")
```

**关键字参数与位置参数的混合使用**

在调用函数时，你可以混合使用位置参数和关键字参数，但是所有的位置参数必须在关键字参数之前：

```python
greet("Hi", name="Alice")  # 正确
# greet(name="Alice", "Hi")  # 错误，因为位置参数不能在关键字参数之后
```

**可变数量的关键字参数**

Python允许你定义一个函数，它可以接受任意数量的关键字参数。这通过使用`**`前缀来实现，后面通常跟一个变量名（如`**kwargs`），这个变量会接收一个字典，字典的键是参数名，值是对应的参数值。

```python
def func(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")

func(a=1, b=2, c=3)
# 输出：
# a: 1
# b: 2
# c: 3
```

这种方式在你不确定函数会接收多少个关键字参数时非常有用，或者当你想让你的函数更加灵活，能够接受任何数量的关键字参数时。
