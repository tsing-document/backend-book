---
title: 【第六篇章】实际应用
index: false
isOriginal: true
category: "数据库"
tag: "redis"
date: 2024-08-02
---

## 一、概述

Redis 基础的数据类型有五种，分别是：String（字符串）、Hash（哈希）、List（列表）、Set（集合）、Zset（有序集合）。

## 二、实际的应用场景之String（字符串）

1、定义 

string 是 redis 最基本的类型，一个 key 对应一个 value。string 类型是二进制安全的。因为 string 底层的实现是简单动态字符串 sds，是可以修改字符串。

2、应用场景

单值缓存、对象缓存、分布式锁、常规计数（粉丝数量、评论数量）、分布式session共享、分布式全局序列号。

3、具体实现   
`单值缓存`
```
  set key value
  get key
```

`对象缓存`
```
  set user:1 value(json格式数据)
  mset user:1:name tsingli user:1:balance 1888
  mget user:1:name user:1:balance
```

`常规计数器`
```
  incr article:readcount:{文章id}
  get article:readcount:{文章id}
```

`分布式系统全局序列号`
```
  incrby orderid 1000  # redis批量生成序列号提升性能
```

`分布式锁`
```
  # 相关操作
  线程1： setnx product:1001 true # 返回1代表获取锁成功
  线程2： setnx product:1001 true # 返回0代表获取锁失败
  。。。执行业务操作
  del product:1001               # 执行完业务释放锁
  set product:1001 true ex 10 nx # 防止程序意外终止导致死锁
 
 # 案例
    setnx product:1001 true
         1.查询商品1001的库存
         2.减库存
         3.重新把减完剩余的库存更新回数据库
    del product:1001
```
setnx 如果插入的key一样不会对数据有任何操作，如果第二次对库存再进行减对的话就返回错误。

## 三、实际的应用场景之Hash（哈希） 

1、定义

Hash是一个键值对集合。他相当于java中的双重map。<key,<filed,value>>。  

2、应用场景

购物车

3、具体实现

`购物车`
```
  # 说明：
    # 用户id为1001，商品的编码是10088。
    # 用户id为key，商品id为field，商品数量为value。
    
  # 案例：
     # 添加商品：
        hset cart:1001 10088 1
     # 增加数量：
        hincrby cart:1001 10088 1
     # 商品总数：
        hlen cart:1001
     # 删除商品：
        hdel cart:1001 10088
     # 获取购物车所有商品：
        hgetall cart:1001
```

## 四、实际的应用场景之List（列表）  

1、定义

列表是简单的字符串列表，按照插入顺序排序，可以添加一个元素在列表的头部或者尾部。  

2、应用场景 

`Stack（栈）= LPUSH + LPOP -> FILO //先进后出`、`Queue（队列）= LPUSH + RPOP //先进先出`、`Blocking MQ（阻塞队列）= LPUSH + BRPOP //消息队列`、`微博`、`微信公众号消息流`。  

3、具体实现

`微博和微信公众号消息流：`
```
  # 李雷发微博，消息id为10018
      lpush msg:111111 10018
  # 韩梅梅车发微博，消息id为10086
      lpush msg:111111 10086
  # 查看最新微博消息
      lrange msg:11111 0 5 //0至5条微博消息。
```

## 五、实际的应用场景之Set（集合）

1、定义

Set 是 string 类型的无序集合。  

2、应用场景

微信抽奖小程序、`微信微博点赞、收藏、标签`、关注模型，就是可能认识的人的关系。  

3、具体实现

`微信抽奖`
```
  # 点击参与抽奖加入集合
      sadd key {userId}
  # 查看参与抽奖的所有用户
      smembers key
  # 抽取count名中奖者（1） // srandmember不会将元素从集合中删除
      srandmember key [count] //抽取两名中奖者 srandmember act:1008 2
  # 抽取count名中奖者（2） // SPOP会将元素从集合中删除
      spop key 2
```

`微信微博点赞、收藏、标签`
```
  # 点赞
    sadd like:{消息ID} {用户id}
  # 取消点赞
    srem like:{消息ID} {用户id}
  # 检查用户是否点过赞
    sismember like:{消息ID} {用户id}
  # 获取点赞的用户列表
    smembers like:{消息ID}
  # 获取点赞的用户树
    scard like:{消息ID}
```

## 六、实际的应用场景之Zset（有序集合）

1、定义

zset和set一样也是string类型元素的集合，且不允许重复的成员。不同的是每个元素都会关联一个dobule类型的分数，redis正是通过分数为集合成员进行从小到大的排序，zset的成员是唯一的但是分数可以重复。