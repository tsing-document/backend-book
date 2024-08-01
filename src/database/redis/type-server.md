---
title: 【第三篇章】八种数据类型和服务器操作命令
index: false
isOriginal: true
category: "数据库"
tag: "redis"
date: 2024-08-02
---

## 一、redis 基本操作
1、判断key是否存在
```bash
exists key_name
```

2、设置key的过期时间
```bash
expire key_name [过期的时间值]（number类型）
```

3、查看key的过期时间
```bash
ttl key_name
```

4、获取所有的key
```bash
keys *
```

## 二、五种常用数据类型

**String（字符串）String类型的值最大能存储512M**

字符串类型操作：
- 设置值：set key_name value
- 获取值：get key_name
- 追加字符串，如果当前的key不存在就会创建一个新的key: append key_name value
- 获取字符串长度：strlen key_name
- 截取字符串：getrange key_name [start index] [end index]
- 指定的字符串覆盖给定key所储存的字符串值，覆盖的位置从偏移量 offset(数字类型) 开始：setrange key_name offset value
- 为指定的key设置值及其过期时间，如果key已经存在，setex命令将会替换旧的值: setex key_name [expiration time] value
- 先获取值再设置值：getset key_name value

数字类型操作：
- number数字类型自增1：incr key_name
- number数字类型减1：decr key_name
- 增加指定的值：incrby key_name [具体的值]number类型
- 减少指定的值：decrby key_name key_name [具体的值]number类型

批量操作：
- 批量设置值：mset key_name1 value1 key_name2 value2 key_name3 value3
- 批量获取值：
  - 方式1: mget key_name1 key_name2 key_name3
  - 方式2：msetnx key_name1 key_name2 key_name3 //这个是原子性操作，要么全部成功，要么全部失败。
      
**List（集合）**

- 每个列表可以存储40多亿元素。
- 设置值：
  - 左边：lpush key_name value
  - 右边：rpush key_name value 
- 获取值：
  - 左边：
    - lrange key_name [start index] [end index]
    - lrange key_name 0 -1 获取所有的元素
- 移除数据：
  - 左边：lprop key_name
  - 右边：rprop key_name
- 根据参数count的值，移除列表中与参数value相等的元素:
  - lrem key_name [count] value
    - count > 0：从表头开始向表尾搜索，移除与value相等的元素，数量为count。
    - count < 0：从表尾开始向表头搜索，移除与value相等的元素，数量为count的绝对值。
    - count = 0: 移除表中所有与value相等的值。
- 根据索引获取元素：lindex key_name [index]
- 获取集合的长度：llen key_name
- 替换列表中指定下标的值，如果不存在就会报错：lset key_name [index] value
- 在列表的元素前或者后插入元素。当指定元素不存在于列表中时，不执行任何操作。当列表不存在时，被视为空列表，不执行任何操作。如果 key 不是列表类型，返回一个错误: linsert key_name [before] || [after] oldvalue newvalue


**Set（集合）**

- 设置值：sadd key_name value
- 获取值：smembers key_name
- 随机从集合中抽取数据：srandmember key_name
- 随机从集合中抽取指定个数的数据：srandmemer key_name [number]
- 移除元素：srem key_name value
- 用于移除集合中的指定key的一个或多个随机元素，移除后会返回移除的元素: spop key_name
- 判断值是否在集合中：sismember key_name value
- 获取集合中的元素的个数：scard key_name
- 集合之间操作：
  - 将值移动到另一个集合中：smove oldlist newlist value
  - 差集：sidff oldlist newlist
  - 交集：sinter oldlist newlist
  - 并集：sunion oldlist newlist

**Hash（哈希）**
- 每个Hash可以存储40多亿键值对。
- 设置值：
  - 方式1：hset key_name filed1 value
  - 方式2：hsetnx key_name filed1 value //如果不存在则可以设置
  - 方式3：hsetnx key_name filed1 value //如果存在不能设置
- 获取值：hget key_name filed1
- 获取所有值：hgetall key_name
- 删除集合中某一个字段的值：hdel key_name filed1
- 获取集合中的元素的个数：hlen key_name
- 判断key是否存在：hexists key_name
- 获取所有的filed: hkeys key_name
- 获取所有的值：hvals key_name
- 自增：hincrby key_name filed1 1
- 自减：decrby key_name filed1 1
- 批量操作：
  - 设置值：hmset key_name filed1 value1 filed2 value2
  - 获取值：hmget key_name filed1 filed2

**Zset(有序集合)**

- 每个集合可以存储40多亿元素。
- 设置值（number：排序的标识位，这个可以重复）：zadd key_name [number] value
- 设置多个值（number：排序的标识位，这个可以重复）: zadd key_name [number] value2 [number] value3
- 获取值：zrange key_name 0 -1
- 排序：zrangebysocre key_name -inf +inf
- 移除元素：zrem key_name value
- 获取集合中元素的数量：zcard key_name
- 获取指定区间的成员的数量：zcount key_name [start index] [end index]


## 三、三种特殊数据类型

**geospatial（地理位置）**
- 添加城市的位置：geoadd china:city 116.40 39.90 beijing
- 获取指定城市的经纬度：geopos china:city beijing chongqing
- 获取两人之间的距离：geodist china:city beijing shanghai km
- 获取指定半径范围之内的坐标：georadius china:city 110 30 1000 km
- 根据元素寻找元素：georeadiusbymember china:city beijing 1000 km

**hyperloglog（优点：占用内存小）**
- 设置值：PFadd key_name value1 value2 value3 value4 value5 value6
- 获取数量：PFCOUNT key_name
- 合并两个集合：PFMERGE 新集合 集合2 集合3

**Bitmap（位图）**
- 记录周一到周五的打卡：setbit sign 0 1 // 0是周几 1 是否打卡
- 查看某一天是否打卡：gitbit sign 3
- 统计打卡的天数：bitcout sign


## 四、服务器操作
| 命令 | 描述 |
| --- | --- |
|  bgrewriteaof | 异步执行一个AOF文件重写操作
|  bgsave  | 在后台异步保存当前数据库的数据到磁盘
|  client kill [ip port] [ID client-id] | 关闭客户端连接
|  client list | 获取连接到服务器的客户端列表|
|  client getname | 获取连接的名称|
|  client pause timeout | 在指定时间内终止运行来自客户端的命令 |
|  client setname connection-name | 设置当前连接的名称 |
|  cluster slots | 获取集群节点的映射数组 |
|  dbsize | 返回当前数据库key的数量 |
|  flushall | 删除所有数据库的所有的key |
|  flushdb | 删除当前数据库的所有的key |
|  lastsave | 返回最近一次redis成功将数据保存到磁盘上的时间 |
|  save | 同步保存数据到硬盘 |
|  select [numer] | 选择指定的数据库 |