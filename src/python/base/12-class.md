---
title: 【第十二篇章】类
index: false
isOriginal: true
category: "Python"
tag: "Python基础"
date: 2025-06-14
---

# 一、类
```python
# 新建狗的模块
class Dog():
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def sit(self):
        print(self.name.title() + " 现在坐下！")

    def roll_over(self):
        print(self.name.title() + " 打滚！")

# 引入并使用类
from animal.dog import Dog

dog = Dog('小黄', 6)
print(dog.age)

# 输出
6

```
