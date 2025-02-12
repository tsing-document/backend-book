---
title: 【第五篇章】 函数
index: false
isOriginal: true
category: "c++"
tag: "c++"
date: 2025-02-12
---

## 一、函数
函数是一组一起执行一个任务的语句，每个 c++ 程序至少有一个函数，即主函数 `main()`，所有简单的程序都可以定义其他额外的函数。
函数声明告诉编译器函数的名称、返回类型、参数。函数定义提供了函数的实际主体。

## 二、声明函数
```bash
return_type function_name( paramter list) {
  body of the function
}
```

## 三、调用函数
```bash
#include <iostream>
using namespace std;
 
// 函数声明
int max(int num1, int num2);
 
int main ()
{
   // 局部变量声明
   int a = 100;
   int b = 200;
   int ret;
 
   // 调用函数来获取最大值
   ret = max(a, b);
 
   cout << "Max value is : " << ret << endl;
 
   return 0;
}
 
// 函数返回两个数中较大的那个数
int max(int num1, int num2) 
{
   // 局部变量声明
   int result;
 
   if (num1 > num2)
      result = num1;
   else
      result = num2;
 
   return result; 
}
```

## 四、函数参数
如果函数要实用参数，则必须声明接收参数值的变量。这些变量称为函数的形式参数。形式参数就像函数内的其他局部变量，在进入函数时被创建，退出函数时被销毁。当调用函数时，有三种向函数传递参数的方式：
- `传值调用：` 该方法把参数的实际值赋值给函数的形式参数，在这种情况下，修改函数内形式参数对实际参数没有影响。
- `指针调用：` 该方法把参数的地址赋值给形式参数，在函数内，该地址用于访问调用中要用到的实际参数。这意味着，修改形式参数会影响实际参数。
- `引用调用：` 该方法把参数的引用赋值给形式参数。在函数内，该引用用于访问调用中要用到的实际参数。这意味着，修改形式参数会影响实际参数。

## 五、多参数默认值
```bash
#include <iostream>
using namespace std;
 
int sum(int a, int b=20)
{
  int result;
 
  result = a + b;
  
  return (result);
}
 
int main ()
{
   // 局部变量声明
   int a = 100;
   int b = 200;
   int result;
 
   // 调用函数来添加值
   result = sum(a, b);
   cout << "Total value is :" << result << endl;
 
   // 再次调用函数
   result = sum(a);
   cout << "Total value is :" << result << endl;
 
   return 0;
}
```

## 六、Lambda 函数和表达式
?
