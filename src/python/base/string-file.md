---
title: 【第六篇章】字符操作和读取文件
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-09-01
---

## 一、字符操作

使用 `f` 或者 `F` 关键字格式化字符串。

```python
>>> year = 2016
>>> year = 2024
>>> event = '年'
>>> f'今年是 {year} {event}'
'今年是 2024 年'
```

使用 `str.format()` 方法格式化字符串。

```python
>>> name = '小李'
>>> age = 20
>>> '我的名字是: {} 年龄是：{}'.format(name, age)
'我的名字是: 小李 年龄是：20'
```

```python
>>> '我的名字是: {name} 年龄是：{age}'.format(name='小王', age=56)
'我的名字是: 小王 年龄是：56'
```

## 二、读取文件

在Python中，读取文件是一项非常基础且常用的操作。Python提供了多种方式来读取文件内容，最常用的方法是使用内置的`open()`函数配合文件读取方法（如`read()`, `readline()`, `readlines()`等）。下面是一些基本的读取文件示例：

### 1、使用 `read()` 方法

`read()` 方法会读取文件的全部内容，并将其作为一个字符串返回。如果文件很大，这可能会消耗大量内存。

```python
# 打开文件
with open('example.txt', 'r', encoding='utf-8') as file:
    # 读取文件全部内容
    content = file.read()
    # 打印内容
    print(content)
```

这里，`with`语句用于打开文件，并确保文件在使用后正确关闭。`'r'`模式表示以只读方式打开文件，`encoding='utf-8'`指定了文件的编码方式，这对于处理非英文文本尤为重要。

### 2、使用 `readline()` 方法

`readline()` 方法会读取文件的一行内容，并返回一个字符串。如果到达文件末尾，则返回空字符串。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    while True:
        line = file.readline()
        if not line:
            break
        print(line, end='')  # 打印行，end='' 避免打印额外的换行符
```

### 3、使用 `readlines()` 方法

`readlines()` 方法会读取文件的所有行，并将它们作为一个字符串列表返回。每个字符串代表文件中的一行，包括末尾的换行符（如果有的话）。

```python
with open('example.txt', 'r', encoding='utf-8') as file:
    lines = file.readlines()
    for line in lines:
        print(line, end='')  # 打印每行，end='' 避免打印额外的换行符
```

## 三、JSON操作

在Python中，JSON（JavaScript Object Notation）是一种轻量级的数据交换格式，易于人阅读和编写，同时也易于机器解析和生成。Python提供了内置的`json`模块，使得我们可以很方便地将Python中的结构化数据（如字典、列表等）转换为JSON格式的字符串，以及将JSON格式的字符串解析回Python中的结构化数据。

### 1、将Python结构化数据保存为JSON

要将Python中的结构化数据（如字典）保存为JSON格式，你可以使用`json.dumps()`方法。这个方法会将Python对象编码成JSON格式的字符串。如果你想要将JSON数据写入文件，可以使用`json.dump()`方法，它会直接将数据写入文件对象，而不是先转换成字符串。

#### 示例：使用`json.dumps()`

```python
import json

data = {
    'name': 'John Doe',
    'age': 30,
    'is_employee': True,
    'skills': ['Python', 'JSON', 'Web Development']
}

# 将Python对象编码为JSON格式的字符串
json_str = json.dumps(data, indent=4)

print(json_str)
```

`indent=4`参数用于美化输出，使得JSON字符串具有更好的可读性。

#### 示例：使用`json.dump()`

```python
import json

data = {
    'name': 'John Doe',
    'age': 30,
    'is_employee': True,
    'skills': ['Python', 'JSON', 'Web Development']
}

# 直接将Python对象写入文件
with open('data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, indent=4, ensure_ascii=False)

# 注意：使用ensure_ascii=False可以确保非ASCII字符（如中文）被正确处理
```

### 2、读取JSON文件

如果你想要从JSON文件中读取数据，并将其转换回Python中的结构化数据（如字典），可以使用`json.load()`方法。

#### 示例：读取JSON文件

```python
import json

# 从文件读取JSON数据，并转换为Python对象
with open('data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

print(data)
print(type(data))  # 输出：<class 'dict'>
```

通过以上示例，你可以看到Python中的`json`模块是如何方便地处理JSON数据的。无论是将Python结构化数据转换为JSON字符串，还是将JSON字符串解析回Python对象，都只需要几行代码即可完成。