import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as a,o as t,a as o}from"./app--yi9xFFx.js";const c={},d=o('<h2 id="一、equals-和-hashcode" tabindex="-1"><a class="header-anchor" href="#一、equals-和-hashcode"><span>一、equals 和 hashcode</span></a></h2><p>1、简述 <code>hashCode()</code> 和 <code>equals(Object obj)</code> 的作用及其关系</p><p><code>hashCode()</code> 方法用于获取对象的哈希码，即一个整数。这个哈希码在基于哈希的集合（如HashSet、HashMap等）中用于确定对象的存储位置。</p><p><code>equals(Object obj)</code> 方法用于比较两个对象是否相等。默认情况下，它比较的是对象的引用地址；但在自定义类中，通常会重写该方法以比较对象的内容。</p><p>这两个方法之间的关系是：如果两个对象通过 <code>equals(Object obj)</code> 方法比较是相等的，那么调用这两个对象中任一对象的 <code>hashCode()</code> 方法必须产生相同的整数结果。这是Java集合框架正常工作的基本要求。</p><p>2、为什么要在自定义类中同时重写 <code>hashCode()</code> 和 <code>equals(Object obj)</code> 方法？</p><p>如果只重写 <code>equals(Object obj)</code> 方法而不重写 <code>hashCode()</code> 方法，那么在基于哈希的集合中，即使两个对象通过 <code>equals(Object obj)</code> 方法比较是相等的，但由于它们的哈希码不同，这些集合也可能无法正确地处理它们（如无法正确去重）。</p><p>因此，为了保证自定义对象在Java集合框架中的正确性，当重写 <code>equals(Object obj)</code> 方法时，通常也需要重写 <code>hashCode()</code> 方法，以确保 <code>equals(Object obj)</code> 相等的对象具有相同的哈希码。</p><p>3、请解释为什么<code>hashCode()</code>方法可能产生哈希碰撞，以及这是否会影响<code>equals(Object obj)</code>方法的正确性？</p><p>哈希碰撞是指不同的对象产生相同的哈希码。由于哈希码是一个整数，而整数的范围是有限的，而对象的数量可以是无限的，因此哈希碰撞是不可避免的。</p><p>哈希碰撞本身不会影响<code>equals(Object obj)</code>方法的正确性。<code>equals(Object obj)</code>方法用于比较对象的内容是否相等，而哈希码只是用于在集合中快速定位对象的一种机制。即使两个对象产生了哈希碰撞，只要它们的<code>equals(Object obj)</code>方法比较不相等，它们就不会被视为集合中的相同元素。</p><p>然而，哈希碰撞可能会影响基于哈希的集合的性能，因为它可能增加在集合中查找元素的时间复杂度。</p><p>4、在重写<code>hashCode()</code>方法时，有哪些注意事项？</p><p>在重写<code>hashCode()</code>方法时，应该确保在同一个Java应用程序执行期间，只要对象的equals比较中所用的信息没有被修改，那么对该对象多次调用hashCode方法必须始终如一地返回同一个整数。</p><p>如果两个对象通过<code>equals(Object obj)</code>方法比较是相等的，那么这两个对象的<code>hashCode()</code>方法必须产生相同的整数结果。</p><p>不要求如果两个对象通过<code>equals(Object obj)</code>方法比较是不相等的，那么调用这两个对象中任一对象的<code>hashCode()</code>方法必须产生不同的整数结果。但是，为不相等的对象产生不同整数结果可能会提高哈希表的性能。</p><h2 id="二、string、stringbuilder、stringbuffer-的区别" tabindex="-1"><a class="header-anchor" href="#二、string、stringbuilder、stringbuffer-的区别"><span>二、String、StringBuilder、StringBuffer 的区别？</span></a></h2><p>String 是只读字符串，也就是说 String 引用的字符串内容是不能被改变的。</p><p>StringBuffer/StringBuilder 类表示字符串对象可以直接修改。</p><h2 id="三、抽象类和接口有什么区别" tabindex="-1"><a class="header-anchor" href="#三、抽象类和接口有什么区别"><span>三、抽象类和接口有什么区别？</span></a></h2><p>抽象类和接口都不能够实例化，但是可以定义抽象和接口类型的引用。一个类如果继承了某个抽象类或者实现某个接口都需要对其中的抽象方法进行实现，否则该类仍然需要被声明为抽象类。</p><p>接口比抽象类更加抽象，因为抽象类中可以定义构造器，可以有抽象方法和具体方法，而接口中不能定义构造器而且其中的方法全部是抽象方法。</p><h2 id="四、在多线程情况下-simpledateformat-是线程安全的吗" tabindex="-1"><a class="header-anchor" href="#四、在多线程情况下-simpledateformat-是线程安全的吗"><span>四、在多线程情况下 SimpleDateFormat 是线程安全的吗？</span></a></h2><p>在多线程情况下 DateFormat 的所有实现，包括 SimpleDateFormat 都不是线程安全的。如果不在线程安全的情况下使用，在解析或者格式化日期的时候，可能会会获得一个不正确的结果。最佳的时间的多线程的情况下使用的时间工具类是 <code>joda-time</code>。</p><h2 id="五、抽象类是什么-它和接口有啥区别" tabindex="-1"><a class="header-anchor" href="#五、抽象类是什么-它和接口有啥区别"><span>五、抽象类是什么？它和接口有啥区别？</span></a></h2><p>接口用于规范，抽象类用于共性。声明方法的存在而不去实现它的类叫做抽象类。接口时抽象类的变体。在接口中，所有的方法都是抽象的。</p>',26),s=[d];function r(i,h){return t(),a("div",null,s)}const n=e(c,[["render",r],["__file","java_base.html.vue"]]),u=JSON.parse('{"path":"/interview/java_base.html","title":"Java 基础","lang":"zh-CN","frontmatter":{"title":"Java 基础","index":false,"isOriginal":true,"category":"面试宝典","tag":"java","date":"2024-08-12T00:00:00.000Z","description":"一、equals 和 hashcode 1、简述 hashCode() 和 equals(Object obj) 的作用及其关系 hashCode() 方法用于获取对象的哈希码，即一个整数。这个哈希码在基于哈希的集合（如HashSet、HashMap等）中用于确定对象的存储位置。 equals(Object obj) 方法用于比较两个对象是否相等。默认...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/backend-book/interview/java_base.html"}],["meta",{"property":"og:site_name","content":"极速蜗牛"}],["meta",{"property":"og:title","content":"Java 基础"}],["meta",{"property":"og:description","content":"一、equals 和 hashcode 1、简述 hashCode() 和 equals(Object obj) 的作用及其关系 hashCode() 方法用于获取对象的哈希码，即一个整数。这个哈希码在基于哈希的集合（如HashSet、HashMap等）中用于确定对象的存储位置。 equals(Object obj) 方法用于比较两个对象是否相等。默认..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-12T08:02:33.000Z"}],["meta",{"property":"article:author","content":"青衣"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2024-08-12T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-12T08:02:33.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java 基础\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-12T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-12T08:02:33.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"青衣\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、equals 和 hashcode","slug":"一、equals-和-hashcode","link":"#一、equals-和-hashcode","children":[]},{"level":2,"title":"二、String、StringBuilder、StringBuffer 的区别？","slug":"二、string、stringbuilder、stringbuffer-的区别","link":"#二、string、stringbuilder、stringbuffer-的区别","children":[]},{"level":2,"title":"三、抽象类和接口有什么区别？","slug":"三、抽象类和接口有什么区别","link":"#三、抽象类和接口有什么区别","children":[]},{"level":2,"title":"四、在多线程情况下 SimpleDateFormat 是线程安全的吗？","slug":"四、在多线程情况下-simpledateformat-是线程安全的吗","link":"#四、在多线程情况下-simpledateformat-是线程安全的吗","children":[]},{"level":2,"title":"五、抽象类是什么？它和接口有啥区别？","slug":"五、抽象类是什么-它和接口有啥区别","link":"#五、抽象类是什么-它和接口有啥区别","children":[]}],"git":{"createdTime":1723449753000,"updatedTime":1723449753000,"contributors":[{"name":"Tsing","email":"ld320321@163.com","commits":1}]},"readingTime":{"minutes":4.02,"words":1207},"filePathRelative":"interview/java_base.md","localizedDate":"2024年8月12日","excerpt":"<h2>一、equals 和 hashcode</h2>\\n<p>1、简述 <code>hashCode()</code> 和 <code>equals(Object obj)</code> 的作用及其关系</p>\\n<p><code>hashCode()</code> 方法用于获取对象的哈希码，即一个整数。这个哈希码在基于哈希的集合（如HashSet、HashMap等）中用于确定对象的存储位置。</p>\\n<p><code>equals(Object obj)</code> 方法用于比较两个对象是否相等。默认情况下，它比较的是对象的引用地址；但在自定义类中，通常会重写该方法以比较对象的内容。</p>","autoDesc":true}');export{n as comp,u as data};