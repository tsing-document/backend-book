---
title: 【第三篇章】客户端 API
index: false
isOriginal: true
category: "分布式技术"
tag: "zookeeper"
date: 2024-07-28
---

## 一、新增 create 命令    
格式：**create [-s] [-e] path data**  
说明：用于创建节点并赋值。
- `[-s] [-e]`：-s 和 -e 都是可选的，-s 代表顺序节点， -e 代表临时节点，注意其中 -s 和 -e 可以同时使用的，并且临时节点不能再创建子节点。
- `path`: 指定要创建节点的路径，比如 /test。
- `data`: 要在此节点存储的数据。

1、创建持久化节点并写入数据，当前会话结束之后，数据依然保存下来
```shell
  [zk: localhost:2181(CONNECTED) 9] create /tsing "890"
  Created /tsing
  
  ## 查看节点
  [zk: localhost:2181(CONNECTED) 10] ls /
  [tsing, zookeeper]
  
  ## 获取数据
  [zk: localhost:2181(CONNECTED) 11] get /tsing
  890
```

2、创建持久化有序节点，此时创建的节点名为指定节点名 + 自增序列号
```shell
  [zk: localhost:2181(CONNECTED) 13] create -s /a "aaaa"
  Created /a0000000022
  [zk: localhost:2181(CONNECTED) 14] create -s /a "aaaa"
  Created /a0000000023
  
  ## 查看节点
  [zk: localhost:2181(CONNECTED) 15] ls /
  [a0000000022, a0000000023, zookeeper]
  
  ## 查看节点数据
  [zk: localhost:2181(CONNECTED) 16] get /a0000000022
  aaaa
```

3、创建临时节点，临时节点会在会话过期后被删除：
```shell
  [zk: localhost:2181(CONNECTED) 17] create -e /tmp "tmp"
  Created /tmp
  [zk: localhost:2181(CONNECTED) 18] ls /
  [tmp, zookeeper]
  [zk: localhost:2181(CONNECTED) 19] get /tmp
  tmp
```

4、创建临时有序节点，临时有序节点会在会话过期后被删除【分布式锁】：
```shell
  [zk: localhost:2181(CONNECTED) 20] create -s -e /aa 'aaaa'
  Created /aa0000000025
  [zk: localhost:2181(CONNECTED) 21] create -s -e /bb 'bbbb'
  Created /bb0000000026
  
  ## 查看节点
  [zk: localhost:2181(CONNECTED) 22] ls /
  [aa0000000025, bb0000000026, zookeeper]
```


## 二、查看 ls 命令 
格式：**ls path**  
说明：用于查看某个路径下的目录列表。
- `path`: 代表目录。

```shell
  ## 查看根路径下的目录列表
  [zk: localhost:2181(CONNECTED) 23] ls /  
  [test0000000000, test0000000001, test0000000002, zookeeper]
  
  ## 查看test0000000000路径下的目录列表
  [zk: localhost:2181(CONNECTED) 26] ls /test0000000000
  []
  
  ## 查看当前目录下以及子节点
  [zk: localhost:2181(CONNECTED) 54] ls -s -w -R /
  /
  /tsing
  /zookeeper
  /zookeeper/config
  /zookeeper/quota

```

## 三、修改 set 命令
格式：
**set path data [version]**  
说明：用于查看某个路径下的目录列表。
- `path`: 代表节点路径。
- `data`: 需要存储的数据。
- `[version]`:可选项，版本号（可用做乐观锁）

1、普通修改数据
```shell
  ## 查看节点
  [zk: localhost:2181(CONNECTED) 2] ls /
  [tsing, zookeeper]
  
  ## 查看节点下的数据
  [zk: localhost:2181(CONNECTED) 3] get /tsing
  890
  
  ## 修改/tsing下的数据
  [zk: localhost:2181(CONNECTED) 4] set /tsing "11111"
  
  ## 查看修改后的数据
  [zk: localhost:2181(CONNECTED) 5] get /tsing
  11111
```

## 四、删除 delete 命令
格式：**delete path [version]**  
说明：删除节点。
- `path`: 节点路径。
- `[version]`: 和set用法一样。

1、普通删除数据：
```shell
    ## 查看节点
    [zk: localhost:2181(CONNECTED) 17] ls /
    [a0000000022, a0000000023, tsing, woniu0000000018, woniu0000000019, zookeeper]
    
    ## 删除节点
    [zk: localhost:2181(CONNECTED) 18] delete /woniu0000000019

    ## 查看删除后剩余的数据
    [zk: localhost:2181(CONNECTED) 19] ls /
    [a0000000022, a0000000023, tsing, woniu0000000018, zookeeper]
```

2、如果有子节点，直接使用 delete 删除会失败:
```shell
    deleteall path [-b batch size]
```

## 五、查看节点数据 get 命令
格式：**get [-s] [-w] path**  
说明: 获取节点数据。
- `path`: 代表路径。
```shell
  ## 查看节点列表
  [zk: localhost:2181(CONNECTED) 50] ls /
  [tsing, zookeeper]
  
  ## 查看节点数据
  [zk: localhost:2181(CONNECTED) 51] get /tsing
  12345
```

## 六、查看节点状态 stat 命令
格式：**stat path [watch]**  
说明: 获取节点数据。
- `path`: 代表路径。
- `[watch]`: 对节点进行事件监听。

```shell
  [zk: localhost:2181(CONNECTED) 56] stat /tsing
  cZxid = 0x36
  ctime = Tue Feb 02 15:06:37 GMT+08:00 2021
  mZxid = 0x36
  mtime = Tue Feb 02 15:06:37 GMT+08:00 2021
  pZxid = 0x36
  cversion = 0
  dataVersion = 0
  aclVersion = 0
  ephemeralOwner = 0x0
  dataLength = 5
  numChildren = 0
```

- 说明：

|  节点名称   |  描述   |
| --- | --- |
|  cZxid   | 创建znode更改的事务ID  |
|  mZxid   | 最后修改znode更改的事务ID |
|  pZxid   | 用于添加或删除子节点的znode更改的事务ID |
|  ctime   | 表示从1970-01-01T00:00:00Z开始以毫秒为单位的znode创建时间 |
|  mtime   | 表示从1970-01-01T00:00:00Z开始以毫秒为单位的znode最近修改时间 |
|  dataVersion  | 表示对该znode的数据所做的更改次数 |
|  cversion | 表示对此znode的子节点进行的更改次数 |
|  aclVersion | 对此znode的ACL进行更改的次数  |
|  ephemeralOwner | 如果znode是ephemeral类型节点，则这是znode所有者的 session ID。 如果znode不是ephemeral节点，则该字段设置为零 |
|  dataLength | 这是znode数据字段的长度 |
|  numChildren | 子节点的数量 |