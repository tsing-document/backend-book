import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,o as a,a as l}from"./app-VxliyPRl.js";const n={},e=l(`<h2 id="一、新增-create-命令" tabindex="-1"><a class="header-anchor" href="#一、新增-create-命令"><span>一、新增 create 命令</span></a></h2><p>格式：<strong>create [-s] [-e] path data</strong><br> 说明：用于创建节点并赋值。</p><ul><li><code>[-s] [-e]</code>：-s 和 -e 都是可选的，-s 代表顺序节点， -e 代表临时节点，注意其中 -s 和 -e 可以同时使用的，并且临时节点不能再创建子节点。</li><li><code>path</code>: 指定要创建节点的路径，比如 /test。</li><li><code>data</code>: 要在此节点存储的数据。</li></ul><p>1、创建持久化节点并写入数据，当前会话结束之后，数据依然保存下来</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 9] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;890&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 10] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [tsing, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 获取数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 11] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  890</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、创建持久化有序节点，此时创建的节点名为指定节点名 + 自增序列号</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 13] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;aaaa&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /a0000000022</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 14] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /a</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;aaaa&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /a0000000023</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 15] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [a0000000022, a0000000023, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 16] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /a0000000022</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  aaaa</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3、创建临时节点，临时节点会在会话过期后被删除：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 17] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;tmp&quot;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 18] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [tmp, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 19] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tmp</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  tmp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>4、创建临时有序节点，临时有序节点会在会话过期后被删除【分布式锁】：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 20] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /aa</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;aaaa&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /aa0000000025</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 21] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">create</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -e</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bb</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &#39;bbbb&#39;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  Created</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /bb0000000026</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 22] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [aa0000000025, bb0000000026, zookeeper]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="二、查看-ls-命令" tabindex="-1"><a class="header-anchor" href="#二、查看-ls-命令"><span>二、查看 ls 命令</span></a></h2><p>格式：<strong>ls path</strong><br> 说明：用于查看某个路径下的目录列表。</p><ul><li><code>path</code>: 代表目录。</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看根路径下的目录列表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 23] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [test0000000000, test0000000001, test0000000002, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看test0000000000路径下的目录列表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 26] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /test0000000000</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  []</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看当前目录下以及子节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 54] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -s</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -w</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -R</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  /</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  /tsing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  /zookeeper</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  /zookeeper/config</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  /zookeeper/quota</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="三、修改-set-命令" tabindex="-1"><a class="header-anchor" href="#三、修改-set-命令"><span>三、修改 set 命令</span></a></h2><p>格式： <strong>set path data [version]</strong><br> 说明：用于查看某个路径下的目录列表。</p><ul><li><code>path</code>: 代表节点路径。</li><li><code>data</code>: 需要存储的数据。</li><li><code>[version]</code>:可选项，版本号（可用做乐观锁）</li></ul><p>1、普通修改数据</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 2] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [tsing, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点下的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 3] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  890</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 修改/tsing下的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 4] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">set</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;11111&quot;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看修改后的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 5] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  11111</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="四、删除-delete-命令" tabindex="-1"><a class="header-anchor" href="#四、删除-delete-命令"><span>四、删除 delete 命令</span></a></h2><p>格式：<strong>delete path [version]</strong><br> 说明：删除节点。</p><ul><li><code>path</code>: 节点路径。</li><li><code>[version]</code>: 和set用法一样。</li></ul><p>1、普通删除数据：</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ## 查看节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 17] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [a0000000022, a0000000023, tsing, woniu0000000018, woniu0000000019, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ## 删除节点</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 18] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">delete</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /woniu0000000019</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    ## 查看删除后剩余的数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 19] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    [a0000000022, a0000000023, tsing, woniu0000000018, zookeeper]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、如果有子节点，直接使用 delete 删除会失败:</p><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">    deleteall</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> [-b </span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">batch</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> size]</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="五、查看节点数据-get-命令" tabindex="-1"><a class="header-anchor" href="#五、查看节点数据-get-命令"><span>五、查看节点数据 get 命令</span></a></h2><p>格式：<strong>get [-s] [-w] path</strong><br> 说明: 获取节点数据。</p><ul><li><code>path</code>: 代表路径。</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点列表</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 50] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ls</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [tsing, zookeeper]</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  </span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">  ## 查看节点数据</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 51] </span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">get</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  12345</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="六、查看节点状态-stat-命令" tabindex="-1"><a class="header-anchor" href="#六、查看节点状态-stat-命令"><span>六、查看节点状态 stat 命令</span></a></h2><p>格式：<strong>stat path [watch]</strong><br> 说明: 获取节点数据。</p><ul><li><code>path</code>: 代表路径。</li><li><code>[watch]</code>: 对节点进行事件监听。</li></ul><div class="language-shell line-numbers-mode" data-highlighter="shiki" data-ext="shell" data-title="shell" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  [zk: localhost:2181(</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">CONNECTED</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) 56] </span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;">stat</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> /tsing</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  cZxid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0x36</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  ctime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Tue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Feb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 02</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 15:06:37</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GMT+08:00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2021</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  mZxid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0x36</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  mtime</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Tue</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> Feb</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 02</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 15:06:37</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> GMT+08:00</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2021</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  pZxid</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0x36</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  cversion</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  dataVersion</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  aclVersion</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  ephemeralOwner</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0x0</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  dataLength</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">  numChildren</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>说明：</li></ul><table><thead><tr><th>节点名称</th><th>描述</th></tr></thead><tbody><tr><td>cZxid</td><td>创建znode更改的事务ID</td></tr><tr><td>mZxid</td><td>最后修改znode更改的事务ID</td></tr><tr><td>pZxid</td><td>用于添加或删除子节点的znode更改的事务ID</td></tr><tr><td>ctime</td><td>表示从1970-01-01T00:00:00Z开始以毫秒为单位的znode创建时间</td></tr><tr><td>mtime</td><td>表示从1970-01-01T00:00:00Z开始以毫秒为单位的znode最近修改时间</td></tr><tr><td>dataVersion</td><td>表示对该znode的数据所做的更改次数</td></tr><tr><td>cversion</td><td>表示对此znode的子节点进行的更改次数</td></tr><tr><td>aclVersion</td><td>对此znode的ACL进行更改的次数</td></tr><tr><td>ephemeralOwner</td><td>如果znode是ephemeral类型节点，则这是znode所有者的 session ID。 如果znode不是ephemeral节点，则该字段设置为零</td></tr><tr><td>dataLength</td><td>这是znode数据字段的长度</td></tr><tr><td>numChildren</td><td>子节点的数量</td></tr></tbody></table>`,37),t=[e];function h(k,p){return a(),i("div",null,t)}const c=s(n,[["render",h],["__file","client-api.html.vue"]]),g=JSON.parse('{"path":"/distributed/zookeeper/client-api.html","title":"【第三篇章】客户端 API","lang":"zh-CN","frontmatter":{"title":"【第三篇章】客户端 API","index":false,"isOriginal":true,"category":"分布式技术","tag":"zookeeper","date":"2024-07-28T00:00:00.000Z","description":"一、新增 create 命令 格式：create [-s] [-e] path data 说明：用于创建节点并赋值。 [-s] [-e]：-s 和 -e 都是可选的，-s 代表顺序节点， -e 代表临时节点，注意其中 -s 和 -e 可以同时使用的，并且临时节点不能再创建子节点。 path: 指定要创建节点的路径，比如 /test。 data: 要在此...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/backend-book/distributed/zookeeper/client-api.html"}],["meta",{"property":"og:site_name","content":"极速蜗牛"}],["meta",{"property":"og:title","content":"【第三篇章】客户端 API"}],["meta",{"property":"og:description","content":"一、新增 create 命令 格式：create [-s] [-e] path data 说明：用于创建节点并赋值。 [-s] [-e]：-s 和 -e 都是可选的，-s 代表顺序节点， -e 代表临时节点，注意其中 -s 和 -e 可以同时使用的，并且临时节点不能再创建子节点。 path: 指定要创建节点的路径，比如 /test。 data: 要在此..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-28T14:14:48.000Z"}],["meta",{"property":"article:author","content":"青衣"}],["meta",{"property":"article:tag","content":"zookeeper"}],["meta",{"property":"article:published_time","content":"2024-07-28T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-28T14:14:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"【第三篇章】客户端 API\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-28T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-28T14:14:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"青衣\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、新增 create 命令","slug":"一、新增-create-命令","link":"#一、新增-create-命令","children":[]},{"level":2,"title":"二、查看 ls 命令","slug":"二、查看-ls-命令","link":"#二、查看-ls-命令","children":[]},{"level":2,"title":"三、修改 set 命令","slug":"三、修改-set-命令","link":"#三、修改-set-命令","children":[]},{"level":2,"title":"四、删除 delete 命令","slug":"四、删除-delete-命令","link":"#四、删除-delete-命令","children":[]},{"level":2,"title":"五、查看节点数据 get 命令","slug":"五、查看节点数据-get-命令","link":"#五、查看节点数据-get-命令","children":[]},{"level":2,"title":"六、查看节点状态 stat 命令","slug":"六、查看节点状态-stat-命令","link":"#六、查看节点状态-stat-命令","children":[]}],"git":{"createdTime":1722140742000,"updatedTime":1722176088000,"contributors":[{"name":"Tsing","email":"ld320321@163.com","commits":2}]},"readingTime":{"minutes":3.55,"words":1064},"filePathRelative":"distributed/zookeeper/client-api.md","localizedDate":"2024年7月28日","excerpt":"<h2>一、新增 create 命令</h2>\\n<p>格式：<strong>create [-s] [-e] path data</strong><br>\\n说明：用于创建节点并赋值。</p>\\n<ul>\\n<li><code>[-s] [-e]</code>：-s 和 -e 都是可选的，-s 代表顺序节点， -e 代表临时节点，注意其中 -s 和 -e 可以同时使用的，并且临时节点不能再创建子节点。</li>\\n<li><code>path</code>: 指定要创建节点的路径，比如 /test。</li>\\n<li><code>data</code>: 要在此节点存储的数据。</li>\\n</ul>\\n","autoDesc":true}');export{c as comp,g as data};