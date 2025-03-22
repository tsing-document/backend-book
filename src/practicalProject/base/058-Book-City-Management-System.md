---
title: 058-书城管理系统
index: false
isOriginal: true
category: "实战项目"
tag: "毕设"
date: 2025-03-22
---
![](./058.png)
# 058-书城管理系统
# bookstore电商书城系统说明
## 目的
- 本系统适用于JavaWeb初学者。
## 使用技术
- 后台主要是springboot+mybatis+shiro+jsp(jsp已过时)...，前端界面主要使用bootstrap框架搭建，并使用了ueditor富文本编辑器、highcharts图表库
## 系统划分与功能
- 该系统分为前台展示和后台管理两大模块。
- 前台主要是为消费者服务。该子系统实现了注册，登录，以及从浏览、下单到支付的整个流程，支付使用的是支付宝的沙箱环境，属于模拟环境。需要注册沙箱账号才能付款。
- 后台主要是为商家服务，实现了权限，店铺，商品和订单等的管理，以及生成一些简单的报表信息。访问`/admin`进入后台
## 依赖环境
- jdk1.8,maven,mysql
- 注意事项
    - 在数据库中创建名为`bookstore`数据库,然后运行项目的`resource`目录下的sql脚本，记得在`application.properties`改数据库配置信息
    - 登录系统的账号和密码，请自行查看数据库下的`user`表 (管理员账号：admin 密码：123)
    - `application.properties`中的邮箱配置要改成自己，否则不能注册系统账号
    -  使用沙箱环境的支付宝才能扫码支付，`application.properties`中的my.ip要改成自己，有项目名还要加项目名，否则支付成功回调出错
## 运行项目
- 方法一：在ide(推荐idea)运行项目,配置好启动环境，运行main方法, 要去掉继承的类SpringBootServletInitializer和方法
- 方法二：在项目的根目录下执行maven命令  
  ``` mvn spring-boot:run```
- 方法三: 在ide或直接用maven打成的war包放到tomcat运行,此时如果访问需要加上项目名的话，支付宝回调地址需要加上项目名称  
  ```mvn package -Dmaven.test.skip=true```
- 方法四: 使用命令运行jar或war，因为也是一个传统JavaWeb项目,前后端不分离，打成jar会无法访问静态资源，所以只能打成war,把WEN-INF下面的东西也打包好)  
  ```java -jar xxx.war```
- 具体可以自行百度搜索`Spring Boot`项目的启动方式

#### 说明
如果想要看项目的完整版视频可以联系我。如果需要定制化的话可以根据功能进行修改。

#### 毕设研究方向和计划安排
不知道怎么进行选择毕设或者选择毕设之后无从下手。全程协助完整技术支持。让你在答辩的时候对技术游刃有余。这条只对想要自己写毕设的人。
