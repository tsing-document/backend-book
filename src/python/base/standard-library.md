---
title: 【第八篇章】标准库
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-09-01
---

## 一、操作系统接口

os 模块

```python 
# 导入
import os

# 使用
os.getcwd()
```

## 二、文件通配符

`glob` 模块可以使用通配符搜索文件

```python
# 导入
import glob

# 使用
glob.glob("*.py")
```

## 三、命令行参数

sys 模块

```python
# 导入
import sys

# 使用
print(sys.argv)
```

## 四、字符串模糊匹配

re 模块

```python
import re
re.findall(r'\bf[a-z]*', 'which foot or hand fell fastest')

re.sub(r'(\b[a-z]+) \1', r'\1', 'cat in the the hat')
```

## 五、数学

- math
- random
- statistics

## 六、互联网访问

### 1、网络请求

```python
from urllib.request import urlopen
with urlopen('http://worldtimeapi.org/api/timezone/etc/UTC.txt') as response:
    for line in response:
        line = line.decode()             # Convert bytes to a str
        if line.startswith('datetime'):
            print(line.rstrip())         # Remove trailing newline
```

### 2、邮箱发送

```python
import smtplib
server = smtplib.SMTP('localhost')
server.sendmail('soothsayer@example.org', 'jcaesar@example.org',
"""To: jcaesar@example.org
From: soothsayer@example.org

Beware the Ides of March.
""")
server.quit()
```