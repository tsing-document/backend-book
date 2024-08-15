---
title: 🍾mysql常见面试题总结(中)
index: false
isOriginal: true
category: "面试宝典"
tag: "mysql"
date: 2024-08-15
---

## 一、SQL 优化有哪些？

- 1、Where 子句中：where 表之间的连接必须写在其他 Where条件之前，那些可
以过滤掉最大数量记录的条件必须写在Where子句的末尾.HAVING最后。
- 2、用 EXISTS 替代 IN、用 NOT EXISTS 替代 NOT IN。
- 3、避免在索引列上使用计算。
- 4、避免在索引列上使用IS NULL和 IS NOT NULL。
- 5、对查询进行优化，应尽量避免全表扫描，首先应考虑在 where 及 orderby 涉
及的列上建立索引。
- 6、应尽量避免在 where 子句中对字段进行 null 值判断，否则将导致引擎放弃
使用索引而进行全表扫描。
- 7、应尽量避免在 where 子句中对字段进行表达式操作，这将导致引擎放弃使用
索引而进行全表扫描。