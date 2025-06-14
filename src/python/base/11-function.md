---
title: 【第十一篇章】函数
index: false
isOriginal: true
category: "Python"
tag: "Python基础"
date: 2025-06-14
---

# 一、函数
```python
# 声明
def 函数名称():
    print('Hello World!')

# 调用
函数名称()
```

# 二、传递函数
```python
# 输入
def test_function(mes):
    print("你好！" + mes)

test_function("我的世界！")

# 输出
你好！我的世界！
```

# 三、返回
```python
# 输入
# 函数
def test_function(mes):
    print("你好！" + mes)
    return "你好！" + mes

result = test_function("我的世界！")

print("返回" + result)

# 输出
返回你好！我的世界！

```

# 四、调用模块
```python
# 新建 .py 文件
def owner_print(msg):
    print("我的模块"+ msg)
    
# 调用模块
import owner_print

owner_print.owner_print("模块")

```
