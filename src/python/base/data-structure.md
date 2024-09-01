---
title: 【第五篇章】数据类型
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-09-01
---

## 一、列表详解

- `list.append(x)` 在列表末尾添加一个元素。
- `list.extend(iterable)` 用可迭代对象的元素扩展列表。
- `list.insert(i,x)` 在指定位置插入元素，第一个参数是插入元素的索引，第二个是值。
- `list.remove(x)` 从列表中删除第一个值为 `x` 的元素。
- `list.pop([i])` 移除列表中给定位置的条目，并返回该条目。如果未指定索引号，则 `a.pop()` 将移除并返回列表中的最后一个条目。
- `list.clear()` 删除列表中所有元素。
- `list.index(x[, start[, end]])` 返回列表中第一个值为 x 的元素的零基索引。
- `list.count(x)` 返回列表中元素 x 出现的次数。
- `list.sort(*, key=None, reverse=False)` 排序列表中的元素。
- `list.reverse()` 反转列表中的元素。
- `list.copy()` 返回列表的浅拷贝。

### 1、用列表实现堆栈

`堆栈`的特点是后进先出。要向栈顶添加一个元素，需要使用 `append()`。要从栈顶提取一个条目，需要使用 `pop()`。

### 2、用列表实现队列

`队列`的特点是先进先出。实现队列最好使用 `collections.deque` 可以快速从两端添加或者删除元素。

### 3、列表推导式

Python 中的列表推导式（List Comprehension）是一种简洁的构建列表的方法。它允许你从一个已存在的列表或其他可迭代对象快速生成一个新的列表，同时可以通过循环和条件表达式来过滤和转换元素。列表推导式比使用循环语句（如 `for` 循环）更加简洁易读。

#### 基本语法

列表推导式的基本语法如下：

```python
[expression for item in iterable]
```

或者，带有条件的：

```python
[expression for item in iterable if condition]
```

#### 简单的列表推导式

假设我们有一个数字列表，我们想要创建一个新列表，其中包含原列表中每个数字的平方。

```python
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print(squared)  # 输出: [1, 4, 9, 16, 25]
```

#### 带条件的列表推导式

如果我们只想包含原列表中大于 3 的数字的平方。

```python
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers if x > 3]
print(squared)  # 输出: [16, 25]
```

#### 嵌套列表推导式

列表推导式也可以嵌套使用，比如，我们有一个列表的列表（二维列表），我们想要将其转换成一个一维列表。

```python
matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]
flattened = [x for row in matrix for x in row]
print(flattened)  # 输出: [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

#### 使用列表推导式进行字符串操作

列表推导式不仅限于数字列表，也可以用于字符串和其他可迭代对象。比如，我们可以从一个字符串中生成一个包含所有字符的列表。

```python
s = "hello"
chars = [char for char in s]
print(chars)  # 输出: ['h', 'e', 'l', 'l', 'o']
```

或者，我们可以筛选出字符串中所有的元音字母。

```python
s = "hello world"
vowels = [char for char in s if char.lower() in 'aeiou']
print(vowels)  # 输出: ['e', 'o', 'o', 'o']
```

列表推导式是 Python 中一个非常强大且常用的特性，它可以帮助你以更简洁、更 Pythonic 的方式编写代码。

### 4、嵌套的列表推导式

列表推导式不仅限于数字列表，也可以用于字符串和其他可迭代对象。比如，我们可以从一个字符串中生成一个包含所有字符的列表。

```python
s = "hello"  
chars = [char for char in s]  
print(chars)  # 输出: ['h', 'e', 'l', 'l', 'o']
```

或者，我们可以筛选出字符串中所有的元音字母。

```python
s = "hello world"  
vowels = [char for char in s if char.lower() in 'aeiou']  
print(vowels)  # 输出: ['e', 'o', 'o', 'o']
```

## 二、del语句

可以按照索引而不是值从列表中移除条目 `del` 语句。del 语句可以从列表中移除元素和清空整个列表。

```python
>>> a = [-1, 1, 66.25, 333, 333, 1234.5]
>>> del a[0]
>>> a
[1, 66.25, 333, 333, 1234.5]
>>> del a[2:4]
>>> a
[1, 66.25, 1234.5]
>>> del a[:]
>>> a
[]
```

del 也可以用来删除整个标量

```python
>>> del a
```

## 三、元组和序列

在Python中，元组（Tuple）和序列（Sequence）是两个相关的概念，但它们并不是完全相同的。让我们分别来解释它们：

#### 序列（Sequence）

- **序列**是一个广泛的概念，它包括了Python中所有有序的元素集合，如列表、元组和字符串。

序列是 Python 中最基本的数据结构之一，它用于存储有序的元素集合。序列中的每个元素都可以通过索引（位置）来访问，并且序列中的元素可以具有不同的类型。Python中有多种内置的序列类型，但最常见的有列表（List）、元组（Tuple）和字符串（String）。

序列类型支持的操作包括：

- 索引（通过索引访问元素）
- 切片（通过切片访问元素的子集）
- 加（连接两个序列）
- 乘（重复序列中的元素）
- 成员资格检查（检查某个元素是否在序列中）
- 长度（计算序列中元素的数量）
- 最小值（找出序列中的最小元素）
- 最大值（找出序列中的最大元素）

#### 元组（Tuple）

- **元组**是序列的一种具体实现，它是一种不可变的序列类型，用于存储数据的集合，其中的数据在创建后不能被更改。

元组是 Python 中的一种序列类型，但它与列表（List）的主要区别在于元组是不可变的。这意味着一旦你创建了一个元组，你就不能更改它的内容（即你不能添加、删除或更改元组中的元素）。这使得元组成为存储数据项，而不想被更改时的一个很好的选择。

元组是通过圆括号`()`来定义的，其中的元素由逗号分隔。例如：

```python
my_tuple = (1, 2, 3, 'a', 'b', 'c')
```

元组也支持序列类型的大多数操作，但由于其不可变性，它不支持那些会改变序列内容的操作，如添加、删除或更改元素。

## 四、集合

Python中的集合（Set）是一个无序的、不包含重复元素的数据结构。集合主要用于数学上的集合运算，如并集、交集、差集和对称差集等。在Python中，集合使用大括号`{}`来表示，但需要注意的是，空集合必须使用`set()`来创建，因为`{}`会被Python解释器视为空字典。

集合的主要特点包括：

1. **无序性**：集合中的元素没有特定的顺序，即你不能通过索引来访问集合中的元素。
2. **唯一性**：集合中的元素是唯一的，即集合中不会出现重复的元素。
3. **可变性**：虽然集合本身是可变的（你可以向集合中添加或删除元素），但其元素必须是不可变的（例如，整数、浮点数、字符串等），或者是其他不可变类型（如元组）的集合。

### 1、创建集合

```python
# 使用大括号创建集合，但注意不能包含重复元素
my_set = {1, 2, 3, 4, 5}

# 使用set()函数创建集合
another_set = set([1, 2, 2, 3, 4, 5])  # 注意，重复的2只会被存储一次

# 创建空集合
empty_set = set()  # 而不是 {}，因为{}会被解释为空字典
```

### 2、集合操作

- **并集**：使用`|`操作符或`union()`方法。
- **交集**：使用`&`操作符或`intersection()`方法。
- **差集**：使用`-`操作符或`difference()`方法（第一个集合中有而第二个集合中没有的元素）。
- **对称差集**：使用`^`操作符或`symmetric_difference()`方法（存在于一个集合中但不同时存在于两个集合中的元素）。

```python
# 集合操作示例
set1 = {1, 2, 3, 4}
set2 = {3, 4, 5, 6}

# 并集
union_set = set1 | set2  # {1, 2, 3, 4, 5, 6}
# 或者
union_set_method = set1.union(set2)  # {1, 2, 3, 4, 5, 6}

# 交集
intersection_set = set1 & set2  # {3, 4}
# 或者
intersection_set_method = set1.intersection(set2)  # {3, 4}

# 差集
difference_set = set1 - set2  # {1, 2}
# 或者
difference_set_method = set1.difference(set2)  # {1, 2}

# 对称差集
symmetric_difference_set = set1 ^ set2  # {1, 2, 5, 6}
# 或者
symmetric_difference_set_method = set1.symmetric_difference(set2)  # {1, 2, 5, 6}
```

### 3、集合的其他常用方法

- `add(element)`：向集合中添加一个元素。
- `remove(element)`：从集合中移除一个元素。如果元素不存在，则抛出`KeyError`。
- `discard(element)`：从集合中移除一个元素。如果元素不存在，则不执行任何操作（不会抛出异常）。
- `clear()`：移除集合中的所有元素。
- `pop()`：随机移除集合中的一个元素并返回它。如果集合为空，则抛出`KeyError`。
- `isdisjoint(other)`：如果集合与另一个集合没有交集，则返回`True`。
- `issubset(other)`/`<=`：判断集合是否是另一个集合的子集。
- `issuperset(other)`/`>=`：判断集合是否是另一个集合的超集。
- `update(*others)`：使用其他集合的元素来更新集合，即添加其他集合中不存在的元素到当前集合中。

## 五、字典

Python 中的字典（Dictionary）是一种可变容器模型，且可存储任意类型对象。字典的每个元素都是一个键值对（key-value pair），键（key）必须是唯一的，而值（value）则不必。字典的键通常是不可变的（如字符串、数字或元组），而值则可以是任何数据类型。

字典使用大括号 `{}` 来定义，键和值之间用冒号 `:` 分隔，键值对之间用逗号 `,` 分隔。

### 1、创建字典

```python
# 使用大括号直接创建字典
my_dict = {'name': 'John', 'age': 30, 'city': 'New York'}

# 使用 dict() 函数创建字典
another_dict = dict(name='Doe', age=25, city='Los Angeles')

# 注意：dict() 函数从 Python 3.7 开始支持关键字参数作为键值对，但这不是官方推荐的使用方式
# 更常见的用法是使用关键字参数来创建一个由两个序列（通常是列表或元组）组成的字典
# 第一个序列包含键，第二个序列包含值
keys = ['name', 'age', 'city']
values = ['Jane', 28, 'Chicago']
dict_from_seq = dict(zip(keys, values))
```

### 2、访问字典中的值

```python
# 通过键访问值
print(my_dict['name'])  # 输出: John

# 使用 get() 方法访问值，如果键不存在，可以返回一个默认值（默认为 None）
print(my_dict.get('gender', 'Unknown'))  # 输出: Unknown
```

### 3、修改字典

```python
# 修改现有键的值
my_dict['age'] = 31

# 添加新的键值对
my_dict['job'] = 'Engineer'
```

### 4、删除字典中的元素

```python
# 使用 del 语句删除键值对
del my_dict['job']

# 使用 pop() 方法删除键值对，并返回该键对应的值
age = my_dict.pop('age')
print(age)  # 输出: 31

# 使用 popitem() 方法移除并返回一个（键，值）对，这个对是随机选择的
# 在Python 3.7+中，popitem() 移除并返回字典中最后加入（即最右侧）的键值对
item = my_dict.popitem()
print(item)  # 输出类似于 ('city', 'New York')

# 使用 clear() 方法清空字典
my_dict.clear()
```

### 5、字典的其他操作

- `keys()`：返回字典中所有键的视图。
- `values()`：返回字典中所有值的视图。
- `items()`：返回字典中所有（键，值）对的视图。
- `len()`：返回字典中键值对的数量。
- `in` 和 `not in`：检查键是否存在于字典中。

```python
# 使用 keys(), values(), items()
print(my_dict.keys())  # 返回一个视图对象，可以遍历字典中的所有键
print(my_dict.values())  # 返回一个视图对象，可以遍历字典中的所有值
print(my_dict.items())  # 返回一个视图对象，可以遍历字典中的所有（键，值）对

# 检查键是否存在
print('name' in my_dict)  # 输出: True（如果 my_dict 包含键 'name'）
print('gender' in my_dict)  # 输出: False（如果 my_dict 不包含键 'gender'）
```

字典是 Python 中非常强大且常用的数据结构，它支持快速的键值对查找和更新操作。

## 六、循环的技巧

当对字典执行循环时，可以使用 `items()` 方法同时提取键及其对应的值。

```python
>>> knights = {'name': '小李', 'age': '23'}
>>> for k, v in knights.items():
...     print(k, v)
...
name 小李
age 23
```

在序列中循环时，用 `enumerate()` 函数可以同时取出位置索引和对应的值：

```python
>>> for i, v in enumerate(['小李', '小王', '小张']):
...     print(i, v)
...
0 小李
1 小王
2 小张
```

同时循环两个或者多个序列时，用 `zip()` 函数可以将其内的元素一一匹配大白话就是说同一索引位置的数据能同时获取到。

```python
>>> questions = ['名字', '年龄', '工作']
>>> answers = ['小李', '39', '工程师']
>>> for q, a in zip(questions, answers):
...     print('问题是: {0}, 结果是：{1}'.format(q, a))
...
问题是: 名字, 结果是：小李
问题是: 年龄, 结果是：39
问题是: 工作, 结果是：工程师
```