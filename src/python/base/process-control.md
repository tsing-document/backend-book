---
title: 【第三篇章】流程控制
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-08-31
---

## 一、if 语句
```bash
number = 5  
if number > 10:  
    print("大于10")  
elif number == 10:  
    print("等于10")  
else:  
    print("小于10")
```

## 二、for 语句
```bash
words = ['cat', 'window', 'defenestrate']
for w in words:
    print(w, len(w))
```

## 三、 break、continue、else 

在 Python 中，`break`、`continue` 和循环的 `else` 子句是控制流的重要部分，特别是在循环结构中。它们允许你根据条件提前退出循环、跳过循环的剩余部分，或在循环正常结束（即不是通过`break`退出）时执行特定的代码块。

1、break 语句

`break` 语句用于立即退出循环体，不管循环条件是否仍然为真。`break` 通常用于在找到所需的值或满足某个条件时退出循环。

```python
for i in range(1, 10):
    if i == 5:
        break  # 当 i 等于 5 时，退出循环
    print(i)
# 输出: 1 2 3 4
```

2、continue 语句

`continue` 语句用于跳过当前循环的剩余部分，并继续下一次循环迭代。`continue` 通常用于忽略某些不满足条件的迭代。

```python
for i in range(1, 10):
    if i % 2 == 0:
        continue  # 当 i 是偶数时，跳过打印
    print(i)
# 输出: 1 3 5 7 9
```

3、循环的 else 子句

循环（`for` 和 `while`）可以有一个可选的 `else` 子句，它在循环正常结束时（即不是通过 `break` 语句退出的）执行。如果循环被 `break` 语句终止，则不会执行 `else` 子句中的代码。

```python
for i in range(1, 10):
    if i == 5:
        break  # 当 i 等于 5 时，退出循环，不执行 else 子句
    print(i)
else:
    print("循环正常结束")
# 输出: 1 2 3 4
# 因为循环被 break 语句中断，所以不会打印 "循环正常结束"

# 另一个例子
for i in range(1, 10):
    print(i)
else:
    print("循环正常结束")
# 输出: 1 2 3 4 5 6 7 8 9
# 接着是 "循环正常结束"，因为循环是自然结束的
```

### 总结

- `break` 用于完全退出循环。
- `continue` 用于跳过当前循环迭代中剩余的代码，并继续下一次迭代。
- 循环的 `else` 子句在循环正常结束时执行，即循环不是因为 `break` 语句而终止的。

## 四、pass 语句

Python 中的 `pass` 关键字是不做任何事情的。

## 五、match 语句

`match` 语句接受一个表达式并把它的值与一个或多个 `case` 块给出的一系列模式进行比较。这表面上像 `C`、`Java` 或 `JavaScript`（以及许多其他程序设计语言）中的 `switch` 语句，但其实它更像 `Rust` 或 `Haskell` 中的模式匹配。只有第一个匹配的模式会被执行，并且它还可以提取值的组成部分（序列的元素或对象的属性）赋给变量。