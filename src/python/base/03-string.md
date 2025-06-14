---
title: 【第三篇章】字符串
index: false
isOriginal: true
category: "Python"
tag: "Python基础"
date: 2025-06-13
---

## 一、字符串

字符串就是一系列字符。在 Python 中，用引号括起来来的都是字符串，其中的引号可以是单引号，也可以是双引号。

## 二、修改字符串的大小写

- 所有单词的首字母大写。
```python
# 输入
name = "xiao fei"
print(name.title())

# 输出
Xiao Fei
```

- 所有单词大写或者小写，拼接字符串使用 +
```python
# 输入
upper_mes = "Upper Mes"
print("全部大写：" + upper_mes.upper())
print("全部小写：" + upper_mes.lower())

# 输出
全部大写：UPPER MES
全部小写：upper mes
```
