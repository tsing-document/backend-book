---
title: 【第一篇章】 C++ 初识
index: false
isOriginal: true
category: "c++"
tag: "c++"
date: 2025-02-08
---

## 一、进门首先说 say hello

编写 `helloworld.cpp` 的文件，具体内容如下：
```c++
#include <iostream>
using namespace std;
int main()
{
    cout << "Hello, world!" << endl;
    return 0;
}
```

编译文件
````bash
g++ helloworld.cpp -o helloworld
````

运行文件
````bash
./helloworld
````

在控制台上可以看到输出结果
````bash
Hello, world!
````

## 二、注释

`//` 单行注释

`/*...*/` 多行注释

## 三、基本数据类型

- 布尔类型：bool
- 字符型：char
- 整型：int
- 浮点型：float
- 无类型：void
- 宽字符型：wchat_t

## 四、类型修饰符

- 有符号类型（默认）：signed int x = -10;
- 无符号类型：unsigned int y =  10;
- 短整型：short int z = 100;
- 长整型：long int a = 100000;
- 常量，值不可更改：const int b = 5;
- 变量可能被意外修改，禁止编译器优化： volatile int c = 10;
- 类成员可以在 const 对象中修改：mutable int counter;

## 五、派生数据类型

- 数组：相同类型元素的集合：`int arr[5] = {1, 2, 3, 4, 5};`
- 指针：存储变量内存地址的类型：`int* ptr = &x;`
- 引用：变量的别名：`int& ref = x;`
- 函数：函数类型，表示函数的签名： `int func(int a, int b);`
- 结构体：用户定义的数据类型，可以包含多个不同类型的成员：`struct Point { int x; int y};`
- 类：用户定义的数据类型，支持封装、继承、多态：`class MyClass {...};`
- 联合体：多个成员共享一块内存：`union Data { int i; int f}`
- 枚举：用户自定义的整数常量集合： `enum Color { RED, GREEN, BLUE}`

## 六、类型别名

- 为现有类型定义别名：typedef ：` typedef int MyInt `
- 为现有类型定义别名：using: ` using MyInt = int `

## 七、标准库类型

- 字符串类型：std::string：`std:string s = "Hello";`
- 动态数组：std::vector: `std::vector<int> v = {1, 2, 3};`
- 固定大小数组：std::array: `std::array<int, 3>  a  = {1, 2, 3};`
- 存储两个值的容器：std::pair: `std::pair<int, float> p(1, 2.0);`
- 键值对容器：std:map: `std::map<int, std::string> m;`
- 唯一值集合：`std::set<int> s = {1, 2, 3};`
