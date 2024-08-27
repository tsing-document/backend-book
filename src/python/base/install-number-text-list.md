---
title: 【第二篇章】安装、数字、文本、列表
index: false
isOriginal: true
category: "Python"
tag: "Pyhon基础"
date: 2024-08-27
---

## 一、安装 Python

不同环境下安装Python的步骤和注意事项有所不同，以下是针对Windows、Linux和macOS三种常见操作系统环境的详细安装指南：

### 1、Windows环境

**下载 Python 安装程序**

访问 Python 官网（[www.python.org](http://www.python.org)），选择适合您操作系统的 Python 版本。对于 Windows 用户，通常选择 Windows 安装程序（.exe文件），注意选择32位或64位版本以匹配您的系统。

**运行安装程序**

- 双击下载的安装程序，开始安装过程。
- 勾选“为所有用户安装”选项（如果可用），以便所有用户都能访问 Python。
- 选择安装路径，通常建议安装在非系统盘（如D盘）以避免占用C盘空间。
- 勾选 “将Python添加到PATH” 选项，以便在命令行中直接运行 Python。

**安装完成并验证**

安装完成后，您可以通过在命令行中输入 `python --version` 或  `python3 --version`（取决于您的系统配置）来验证 Python 是否成功安装及其版本。

### 2、Linux环境

**检查系统是否已安装 Python**

大多数 Linux 发行版都预装了 Python。您可以通过在终端中输入 `python --version` 或 `python3 --version` 来检查已安装的 Python 版本。

**安装 Python（如果需要）**

如果系统未预装 Python，或者您需要安装特定版本的 Python，您可以使用包管理器（如apt-get、yum等）或直接从源代码编译安装。以 Ubuntu 为例，使用 apt-get 安装 Python3 的命令为 `sudo apt-get update && sudo apt-get install python3`。

**配置环境变量（如果需要）**

如果您从源代码编译安装了Python，或者需要特定版本的Python在命令行中直接可用，您可能需要配置环境变量。这通常涉及编辑`~/.bashrc`或`~/.bash_profile`文件，并添加指向Python安装目录的PATH。

### 3、macOS环境

**检查系统是否已安装Python**

macOS 系统通常预装了 Python 2.x 版本。您可以通过在终端中输入 `python --version` 来检查。然而，对于现代 Python 开发，建议使用 Python3。

**安装Python 3**
   
有两种主要方法可以在 macOS 上安装 Python3：使用官方安装程序或使用 Homebrew 包管理器。
- 官方安装程序：从Python官网下载适用于macOS的安装程序，并按照安装向导进行操作。
- Homebrew：如果已安装Homebrew，可以使用`brew install python3`命令来安装Python 3。

**验证安装**

安装完成后，您可以通过在终端中输入 `python3 --version` 来验证 Python3 是否成功安装及其版本。

## 二、注释

在 Python 中使用字符 `#` 来进行注释。

## 三、算术运算符 +、-、*、/、()、//、%、**、=

加法
```bash
>>> 2 + 2
4
```

减法
```bash
>>> 2 - 2
0
```

乘法
```bash
>>> 2 * 4
8
```

除法
```bash
>>> 8/3
2.6666666666666665
```

取整
```bash
>>> 8//3
2
```

取余
```bash
>>> 8%7
1
```

括号
```bash
>>> (1 + 2) * 3
9
```

乘方
```bash
>>> 5 ** 2
25
>>> 2 ** 7
128
```

赋值
```bash
>>> price = 10.4
>>> count = 3
>>> price * count
31.200000000000003
```

## 四、文本

- Python 中使用 `""` 符号包裹的内容解释成文本，比如：`"我是一名研发工程师"`。
- 拼接字符串使用 `+` 来拼接，举例：`"我是一名" + "工程师"`。
- 获取字符的长度使用 `len(字符内容)` 函数来获取，举例：`len("我是一名工程师")`。

## 五、列表

1、Python 中声明列表的语法
```bash
>>> arr = [1，2，3，4，5，6]
>>> arr
[1，2，3，4，5，6]
```

2、根据索引获取单个值或者获取区间值
```bash
# 声明
>>> arr = [1, 2, 3, 4, 5, 6]
# 输出
>>> arr
[1, 2, 3, 4, 5, 6]
# 获取下标为 0 的值
>>> arr[0]
1
# 获取下标为 4 的值
>>> arr[4]
5
# 获取做标从 3 - 6 的值
>>> arr[3:6]
[4, 5, 6]
```

3、追加内容使用 + 号方式
```bash
>>> arr + [11, 23]
[1, 2, 3, 4, 5, 6, 11, 23]
```

4、根据坐标替换值
```bash
# 查看现有列表中的值
>>> arr
[1, 2, 3, 4, 5, 6]
# 替换下标 4 的值为 22
>>> arr[4] = 22
# 查看列表中的内容
>>> arr
[1, 2, 3, 4, 22, 6]
```

5、使用 `append()` 方法追加内容
```bash
>>> arr
[1, 2, 3, 4, 22, 6]
>>> arr.append(777)
>>> arr
[1, 2, 3, 4, 22, 6, 777]
>>>
```