---
title: YSLOW（一款实用的网站性能检测工具）
index: false
isOriginal: true
category: "奇谈杂论"
tag: "网站性能检测工具"
date: 2024-08-21
---

YSlow 是 Yahoo 发布的一款基于FireFox的插件，这个插件可以分析网站的页面，并告诉你为了提高网站性能，如何基于某些规则而进行优化。

YSLOW有什么作用？ 

1、YSlow可以对网站的页面进行分析，并告诉你为了提高网站性能，如何基于某些规则而进行优化。
2、YSlow可以分析任何网站，并为每一个规则产生一个整体报告，如果页面可以进行优化，则YSlow会列出具体的修改意见。

YSLOW 提出的最佳实践和规则：雅虎卓越绩效团队已经确定了34个影响网页性能的规则。YSlow的网页分析是基于这34个可测试的规则中的23个。点击下面的每个表现规则查看详细信息。

- [1.最小化HTTP请求](https://developer.yahoo.com/performance/rules.html#num_http)
- [2.使用内容交付网络](https://developer.yahoo.com/performance/rules.html#cdn)
- [3.避免空的src或href](https://developer.yahoo.com/performance/rules.html#emptysrc)
- [4.添加一个Expires或一个Cache-Control Header](https://developer.yahoo.com/performance/rules.html#expires)
- [5.Gzip组件](https://developer.yahoo.com/performance/rules.html#css_top)
- [6.把StyleSheets放在最前面](https://developer.yahoo.com/performance/rules.html#css_top)
- [7.把脚本放在底部](https://developer.yahoo.com/performance/rules.html#js_bottom)
- [8.避免使用CSS表达式](https://developer.yahoo.com/performance/rules.html#css_expressions)
- [9.使JavaScript和CSS外部](https://developer.yahoo.com/performance/rules.html#external)
- [10.减少DNS查找](https://developer.yahoo.com/performance/rules.html#dns_lookups)
- [11.缩小JavaScript和CSS](https://developer.yahoo.com/performance/rules.html#minify)
- [12.避免重定向](https://developer.yahoo.com/performance/rules.html#redirects)
- [13.删除重复的脚本](https://developer.yahoo.com/performance/rules.html#js_dupes)
- [14.配置ETags](https://developer.yahoo.com/performance/rules.html#etags)
- [15.使AJAX缓存](https://developer.yahoo.com/performance/rules.html#cacheajax)
- [16.使用GET进行AJAX请求](https://developer.yahoo.com/performance/rules.html#ajax_get)
- [17.减少DOM元素的数量](https://developer.yahoo.com/performance/rules.html#min_dom)
- [18.没有404s](https://developer.yahoo.com/performance/rules.html#no404)
- [19.减小Cookie大小](https://developer.yahoo.com/performance/rules.html#cookie_size)
- [20.为组件使用不使用Cookie的域](https://developer.yahoo.com/performance/rules.html#cookie_free)
- [21.避免过滤器](https://developer.yahoo.com/performance/rules.html#no_filters)
- [22.不要在HTML中缩放图像](https://developer.yahoo.com/performance/rules.html#no_scale)
- [23.使favicon.ico小和缓存](https://developer.yahoo.com/performance/rules.html#favicon)