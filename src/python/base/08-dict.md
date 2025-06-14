---
title: 【第八篇章】字典
index: false
isOriginal: true
category: "Python"
tag: "Python基础"
date: 2025-06-13
---

## 一、字典

```python
person = {'name': '小王', 'age': 23, 'sex': '男'}
print(person['name'])
```

## 二、使用字典

Python 中字典是一些系列键值对。

```python
person = {'name': '小王', 'age': 23, 'sex': '男'}
print(person['name'])
```

## 三、添加字典
```python
# 输入
person = {'name': '小王', 'age': 23, 'sex': '男'}
person['id'] = "320321155201230213"
print(person)

# 输出
{'name': '小王', 'age': 23, 'sex': '男', 'id': '320321155201230213'}
```

## 四、修改字典
```python
# 输入
person = {'name': '小王', 'age': 23, 'sex': '男'}
person['age'] = 30
print(person)

# 输出
{'name': '小王', 'age': 30, 'sex': '男'}
```

## 五、删除字典
```python
# 输入
person = {'name': '小王', 'age': 23, 'sex': '男'}
del person['age']
print(person)

# 输出
{'name': '小王', 'sex': '男'}
```

## 六、遍历字典
```python
#输入
person = {'name': '小王', 'age': 23, 'sex': '男'}
for key, value in person.items():
    print("\nkey " + key)
    print("value " + str(value))

# 输出
key name
value 小王

key age
value 23

key sex
value 男
```
