---
title: 【第七篇章】类
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-09-01
---

在Python中，类（Class）是一种用于定义对象（Object）的蓝图或模板。通过类，我们可以创建具有相同属性和方法的对象。Python的类提供了面向对象编程（OOP）的所有基本功能：封装、继承和多态。

## 一、定义类

在Python中，定义类使用`class`关键字后跟类名和一个冒号。类的主体（即类的属性和方法）通过缩进来定义。

```python
class MyClass:
    # 类的属性（通常定义在__init__方法中）
    def __init__(self, name, age):
        self.name = name  # 实例变量
        self.age = age

    # 类的方法
    def greet(self):
        print(f"Hello, my name is {self.name} and I am {self.age} years old.")
```

在这个例子中，`MyClass`是一个类名，`__init__`是一个特殊的方法，称为类的构造函数或初始化方法。当创建类的新实例时，`__init__`方法会自动被调用。`self`代表类的实例本身，通过它我们可以访问类的变量和方法。`name`和`age`是传递给`__init__`方法的参数，它们被赋值给实例变量`self.name`和`self.age`。

## 二、创建类的实例

要创建类的实例（即对象），我们使用类名后跟一对圆括号，并在括号内传递任何必要的参数给`__init__`方法。

```python
obj1 = MyClass("Alice", 30)
obj2 = MyClass("Bob", 25)
```

## 三、访问实例的属性和方法

通过点（`.`）操作符，我们可以访问对象的属性和方法。

```python
obj1.greet()  # 输出: Hello, my name is Alice and I am 30 years old.
print(obj2.name)  # 输出: Bob
obj2.age = 26  # 修改实例的age属性
print(obj2.age)  # 输出: 26
```

## 四、类的其他特殊方法

Python的类还有一些其他的特殊方法（也称为“魔术方法”或“双下方法”），它们在特定情况下自动被调用。例如：

- `__str__(self)`: 定义对象的字符串表示形式，当你尝试将对象转换为字符串（如使用`print()`函数）时会被调用。
- `__repr__(self)`: 定义对象的“官方”字符串表示形式，主要用于调试。
- `__add__(self, other)`: 定义对象加法的行为。

## 五、类的继承

Python支持继承，即允许我们定义一个类（子类）来继承另一个类（父类）的属性和方法。

```python
class Employee(MyClass):
    def __init__(self, name, age, employee_id):
        super().__init__(name, age)  # 调用父类的__init__方法
        self.employee_id = employee_id

    def display_info(self):
        print(f"Name: {self.name}, Age: {self.age}, Employee ID: {self.employee_id}")

emp = Employee("Charlie", 35, 12345)
emp.display_info()  # 输出: Name: Charlie, Age: 35, Employee ID: 12345
```

在这个例子中，`Employee`类继承了`MyClass`类，并添加了一个新的实例变量`employee_id`和一个新的方法`display_info()`。`super().__init__(name, age)`用于调用父类的`__init__`方法，以确保父类的初始化逻辑也被执行。