---
title: 【第五篇章】列表
index: false
isOriginal: true
category: "Python"
tag: "Python基础"
date: 2025-06-13
---

## 一、列表
列表由一系列特定顺序排列的元素组成。你可以创建包含字母表中所有字母、数字0-9或所有家庭成员姓名的列表；也可以将任何东西加入列表中，其中的元素之间可以没有任何关系。在 python 中使用 `[]` 表示列表。

## 二、使用列表

```python
# 输入
names = ['xiaoming','xiaoli', 'xialiu']
print(names)

# 输出
['xiaoming', 'xiaoli', 'xialiu']
```

## 三、访问列表元素
```python
# 输入
print(names[0])

# 输出
xiaoming
```

## 四、列表增删改
```python

# 增，在列表尾部添加元素
names.append('小泽')

# 增，在指定索引位置增加元素
names.insert(5, "奥特曼")

# 删除，根据索引删除元素
del names[2]

# 删除，pop()

# 删除，根据值删除元素
names.remove('小泽')

# 修改
names[0] = "蜡笔小新"
```

## 五、列表排序
使用 `sort()` 永久排序、使用 `sorted()` 临时排序、使用 `reverse()` 反转列表。`len(数组名称)` 可以查看列表元素个数。

## 六、循环列表
```python
# 输入
names = ['xiaoming','xiaoli', 'xialiu']
for name in names:
    print(name)

# 输出
xiaoming
xiaoli
xialiu
```
