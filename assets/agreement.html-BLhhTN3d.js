import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,o as a,a as l}from"./app-wy3h4oa_.js";const i={},n=l('<p>InfluxDB 行协议是 InfluxDB 数据库独创的一种数据格式，它由纯文本构成，只要数据符合这种格式，就能使用 InfluxDB 的 HTTP API 将数据写入数据库。该协议与CSV相似，在 InfluxDB 行协议中，一条数据和另一条数据之间使用换行符分隔，所以一行就是一条数据。在时序数据库领域，一条数据由以下四种元素构成：</p><h2 id="一、测量名称-measurement" tabindex="-1"><a class="header-anchor" href="#一、测量名称-measurement"><span>一、测量名称（Measurement）</span></a></h2><p>必需元素，测量的名称。可以将其当作普通关系型数据的表，但实际上并非如此。在 InfluxDB 行协议中，测量名称不可省略，且大小写敏感，不可以用下划线_打头。</p><h2 id="二、标签集-tag-set" tabindex="-1"><a class="header-anchor" href="#二、标签集-tag-set"><span>二、标签集（Tag Set）</span></a></h2><p>可选元素，键值关系使用=表示，多个键值对之间使用英文逗号分隔。标签的键和值都区分大小写，且键不能以下划线_开头。标签应该用在一些值的范围有限（可枚举）、不太会变动的属性上，比如传感器的类型和ID等。在 InfluxDB 中，一个 Tag 相当于一个索引，给数据点加上 Tag 有利于将来对数据进行检索。但如果索引太多了，就会减慢数据的插入速度。</p><h2 id="三、字段集-field-set" tabindex="-1"><a class="header-anchor" href="#三、字段集-field-set"><span>三、字段集（Field Set）</span></a></h2><p>必需元素，一个数据点上所有的字段键值对，键是字段名，值是数据点的值。一个数据点至少要有一个字段。字段集的键是大小写敏感的。字段集的值可以是浮点数、整数、无符号整数、字符串或布尔值。</p><h2 id="四、时间戳-timestamp" tabindex="-1"><a class="header-anchor" href="#四、时间戳-timestamp"><span>四、时间戳（Timestamp）</span></a></h2><p>可选元素，但通常建议包含，用于标识数据点的时间。如果数据点中不包含时间戳，InfluxDB 会使用本地服务器的时间作为时间戳。时间戳支持多种时间精度，写入数据的时候需要用参数指定时间精度，支持从小时到纳秒的6种时间精度。</p><h3 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h3><p>以下是一个典型的 InfluxDB 行协议数据点示例：</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>myMeasurement,tag1=value1,tag2=value2 field1=1.0,field2=&quot;string&quot;,field3=true 1648432611249500</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>在这个示例中：</p><ul><li><code>myMeasurement</code> 是测量名称。</li><li><code>tag1=value1,tag2=value2</code> 是标签集，包含两个标签。</li><li><code>field1=1.0,field2=&quot;string&quot;,field3=true</code> 是字段集，包含三个字段，字段类型分别为浮点数、字符串和布尔值。</li><li><code>1648432611249500</code> 是时间戳，表示数据点的时间。</li></ul><h3 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项"><span>注意事项</span></a></h3><ul><li>空格在 InfluxDB 行协议中起到分隔作用，第一个未转义的空格将测量名称&amp;标签集与字段集分开，第二个未转义空格将字段集和时间戳分开。</li><li>字段集的值需要明确指定数据类型，否则 InfluxDB 会根据值的格式进行推断。</li><li>时间戳默认是纳秒级时间戳，但可以通过参数指定其他时间精度。</li></ul><p>InfluxDB 行协议是 InfluxDB 数据写入的基础，了解其格式和规则对于高效地使用 InfluxDB 至关重要。</p>',17),r=[n];function s(d,o){return a(),t("div",null,r)}const u=e(i,[["render",s],["__file","agreement.html.vue"]]),m=JSON.parse('{"path":"/database/influxdb/agreement.html","title":"【第三篇章】行协议","lang":"zh-CN","frontmatter":{"title":"【第三篇章】行协议","index":false,"isOriginal":true,"category":"数据库","tag":"influxdb","date":"2024-09-01T00:00:00.000Z","description":"InfluxDB 行协议是 InfluxDB 数据库独创的一种数据格式，它由纯文本构成，只要数据符合这种格式，就能使用 InfluxDB 的 HTTP API 将数据写入数据库。该协议与CSV相似，在 InfluxDB 行协议中，一条数据和另一条数据之间使用换行符分隔，所以一行就是一条数据。在时序数据库领域，一条数据由以下四种元素构成： 一、测量名称（...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/backend-book/database/influxdb/agreement.html"}],["meta",{"property":"og:site_name","content":"极速蜗牛"}],["meta",{"property":"og:title","content":"【第三篇章】行协议"}],["meta",{"property":"og:description","content":"InfluxDB 行协议是 InfluxDB 数据库独创的一种数据格式，它由纯文本构成，只要数据符合这种格式，就能使用 InfluxDB 的 HTTP API 将数据写入数据库。该协议与CSV相似，在 InfluxDB 行协议中，一条数据和另一条数据之间使用换行符分隔，所以一行就是一条数据。在时序数据库领域，一条数据由以下四种元素构成： 一、测量名称（..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-01T01:09:09.000Z"}],["meta",{"property":"article:author","content":"青衣"}],["meta",{"property":"article:tag","content":"influxdb"}],["meta",{"property":"article:published_time","content":"2024-09-01T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-01T01:09:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【第三篇章】行协议\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-09-01T00:00:00.000Z\\",\\"dateModified\\":\\"2024-09-01T01:09:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"青衣\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、测量名称（Measurement）","slug":"一、测量名称-measurement","link":"#一、测量名称-measurement","children":[]},{"level":2,"title":"二、标签集（Tag Set）","slug":"二、标签集-tag-set","link":"#二、标签集-tag-set","children":[]},{"level":2,"title":"三、字段集（Field Set）","slug":"三、字段集-field-set","link":"#三、字段集-field-set","children":[]},{"level":2,"title":"四、时间戳（Timestamp）","slug":"四、时间戳-timestamp","link":"#四、时间戳-timestamp","children":[{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]}],"git":{"createdTime":1725152949000,"updatedTime":1725152949000,"contributors":[{"name":"Tsing","email":"ld320321@163.com","commits":1}]},"readingTime":{"minutes":2.61,"words":784},"filePathRelative":"database/influxdb/agreement.md","localizedDate":"2024年9月1日","excerpt":"<p>InfluxDB 行协议是 InfluxDB 数据库独创的一种数据格式，它由纯文本构成，只要数据符合这种格式，就能使用 InfluxDB 的 HTTP API 将数据写入数据库。该协议与CSV相似，在 InfluxDB 行协议中，一条数据和另一条数据之间使用换行符分隔，所以一行就是一条数据。在时序数据库领域，一条数据由以下四种元素构成：</p>\\n<h2>一、测量名称（Measurement）</h2>\\n<p>必需元素，测量的名称。可以将其当作普通关系型数据的表，但实际上并非如此。在 InfluxDB 行协议中，测量名称不可省略，且大小写敏感，不可以用下划线_打头。</p>\\n<h2>二、标签集（Tag Set）</h2>","autoDesc":true}');export{u as comp,m as data};