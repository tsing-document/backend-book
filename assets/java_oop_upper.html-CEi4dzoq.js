import{_ as i}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,o as a,a as e}from"./app-DI7FlYPu.js";const n={},l=e(`<h2 id="一、重写和重载" tabindex="-1"><a class="header-anchor" href="#一、重写和重载"><span>一、重写和重载</span></a></h2><p>在Java中，重写（Override）和重载（Overload）是面向对象编程中两个非常重要的概念，它们都与方法的定义和调用有关，但两者有着本质的区别。</p><p>1、重写（Override）</p><p>重写是子类对父类中继承来的方法进行重新定义（也就是方法签名相同，但方法体不同）。当子类需要修改从父类继承来的方法的行为时，就会使用到重写。重写的目的是允许子类提供特定于自己的实现。</p><p><strong>重写的规则</strong>：</p><ol><li><strong>方法名、参数列表必须相同</strong>：这是为了保持多态性，即父类类型的引用可以指向子类对象，并调用实际子类对象的方法。</li><li><strong>返回类型</strong>：对于非静态方法，返回类型可以是父类方法的返回类型的子类型（Java 5及以后版本支持协变返回类型）。对于静态方法，返回类型必须相同。</li><li><strong>访问修饰符</strong>：子类方法的访问级别不能低于父类方法的访问级别（但可以有更高的访问级别）。</li><li><strong>异常</strong>：子类方法抛出的异常应该是父类方法抛出异常的子类或没有异常（Java 7及以后版本支持更灵活的异常处理规则）。</li></ol><p><strong>示例</strong>：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Animal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;This animal eats food.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Dog</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> extends</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Animal</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    @</span><span style="--shiki-light:#A626A4;--shiki-dark:#E5C07B;">Override</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> eat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">()</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Dog eats dog food.&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>Dog</code>类重写了<code>Animal</code>类的<code>eat</code>方法。</p><p>2、重载（Overload）</p><p>重载是在同一个类中，允许存在多个同名的方法，只要它们的参数列表不同即可。参数列表不同意味着参数的数量、类型或顺序至少有一项不同。重载的主要目的是提供灵活的方法调用，允许根据传递的参数类型或数量来调用不同的方法实现。</p><p><strong>重载的规则</strong>：</p><ol><li><strong>方法名必须相同</strong>。</li><li><strong>参数列表必须不同</strong>（参数的数量、类型或顺序不同）。</li><li>方法的返回类型、访问修饰符以及抛出的异常类型与重载无关。</li></ol><p><strong>示例</strong>：</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> MathUtils</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 方法1</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 方法2，重载</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    double</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">double</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">    // 方法3，重载（参数数量不同）</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    int</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> add</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">int</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        return</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>MathUtils</code>类有三个名为<code>add</code>的方法，但它们的参数列表不同，因此它们是重载关系。</p><h3 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h3><ul><li><strong>重写</strong>是子类对父类方法的重新定义，用于提供特定于子类的实现。</li><li><strong>重载</strong>是在同一个类中允许存在多个同名但参数列表不同的方法，用于提供灵活的方法调用。</li><li>重写是面向对象多态性的体现，而重载是编译时多态性的体现。</li></ul><h2 id="二、equals-和-hashcode" tabindex="-1"><a class="header-anchor" href="#二、equals-和-hashcode"><span>二、equals 和 hashcode</span></a></h2><p>1、简述 <code>hashCode()</code> 和 <code>equals(Object obj)</code> 的作用及其关系</p><p><code>hashCode()</code> 方法用于获取对象的哈希码，即一个整数。这个哈希码在基于哈希的集合（如HashSet、HashMap等）中用于确定对象的存储位置。</p><p><code>equals(Object obj)</code> 方法用于比较两个对象是否相等。默认情况下，它比较的是对象的引用地址；但在自定义类中，通常会重写该方法以比较对象的内容。</p><p>这两个方法之间的关系是：如果两个对象通过 <code>equals(Object obj)</code> 方法比较是相等的，那么调用这两个对象中任一对象的 <code>hashCode()</code> 方法必须产生相同的整数结果。这是Java集合框架正常工作的基本要求。</p><p>2、为什么要在自定义类中同时重写 <code>hashCode()</code> 和 <code>equals(Object obj)</code> 方法？</p><p>如果只重写 <code>equals(Object obj)</code> 方法而不重写 <code>hashCode()</code> 方法，那么在基于哈希的集合中，即使两个对象通过 <code>equals(Object obj)</code> 方法比较是相等的，但由于它们的哈希码不同，这些集合也可能无法正确地处理它们（如无法正确去重）。</p><p>因此，为了保证自定义对象在Java集合框架中的正确性，当重写 <code>equals(Object obj)</code> 方法时，通常也需要重写 <code>hashCode()</code> 方法，以确保 <code>equals(Object obj)</code> 相等的对象具有相同的哈希码。</p><p>3、请解释为什么<code>hashCode()</code>方法可能产生哈希碰撞，以及这是否会影响<code>equals(Object obj)</code>方法的正确性？</p><p>哈希碰撞是指不同的对象产生相同的哈希码。由于哈希码是一个整数，而整数的范围是有限的，而对象的数量可以是无限的，因此哈希碰撞是不可避免的。</p><p>哈希碰撞本身不会影响 <code>equals(Object obj)</code> 方法的正确性。<code>equals(Object obj)</code> 方法用于比较对象的内容是否相等，而哈希码只是用于在集合中快速定位对象的一种机制。即使两个对象产生了哈希碰撞，只要它们的 <code>equals(Object obj)</code> 方法比较不相等，它们就不会被视为集合中的相同元素。</p><p>然而，哈希碰撞可能会影响基于哈希的集合的性能，因为它可能增加在集合中查找元素的时间复杂度。</p><p>4、在重写 <code>hashCode()</code> 方法时，有哪些注意事项？</p><p>在重写<code>hashCode()</code>方法时，应该确保在同一个Java应用程序执行期间，只要对象的equals比较中所用的信息没有被修改，那么对该对象多次调用hashCode方法必须始终如一地返回同一个整数。</p><p>如果两个对象通过 <code>equals(Object obj)</code> 方法比较是相等的，那么这两个对象的 <code>hashCode()</code> 方法必须产生相同的整数结果。</p><p>不要求如果两个对象通过 <code>equals(Object obj)</code> 方法比较是不相等的，那么调用这两个对象中任一对象的 <code>hashCode()</code> 方法必须产生不同的整数结果。但是，为不相等的对象产生不同整数结果可能会提高哈希表的性能。</p><h2 id="三、抽象类和接口有什么区别" tabindex="-1"><a class="header-anchor" href="#三、抽象类和接口有什么区别"><span>三、抽象类和接口有什么区别？</span></a></h2><p>抽象类和接口都不能够实例化，但是可以定义抽象和接口类型的引用。一个类如果继承了某个抽象类或者实现某个接口都需要对其中的抽象方法进行实现，否则该类仍然需要被声明为抽象类。</p><p>接口比抽象类更加抽象，因为抽象类中可以定义构造器，可以有抽象方法和具体方法，而接口中不能定义构造器而且其中的方法全部是抽象方法。</p><h2 id="四、抽象类是什么-它和接口有啥区别" tabindex="-1"><a class="header-anchor" href="#四、抽象类是什么-它和接口有啥区别"><span>四、抽象类是什么？它和接口有啥区别？</span></a></h2><p>接口用于规范，抽象类用于共性。声明方法的存在而不去实现它的类叫做抽象类。接口时抽象类的变体。在接口中，所有的方法都是抽象的。</p><h2 id="五、讲讲类的实例化顺序-比如父类静态数据-构造函数-字段-子类静态数据-构造函数-字段-当new的时候-他们的执行顺序" tabindex="-1"><a class="header-anchor" href="#五、讲讲类的实例化顺序-比如父类静态数据-构造函数-字段-子类静态数据-构造函数-字段-当new的时候-他们的执行顺序"><span>五、讲讲类的实例化顺序，比如父类静态数据，构造函数，字段，子类静态数据，构造函数，字段，当new的时候，他们的执行顺序</span></a></h2><p>在Java中，当使用<code>new</code>关键字创建一个类的实例时，会遵循一个特定的顺序来初始化对象。这个顺序涉及到父类和子类的静态数据、构造函数以及字段（成员变量）的初始化。下面是这个顺序的详细解释：</p><p>1、<strong>静态块和静态变量（父类到子类）</strong>：</p><ul><li>首先，会初始化父类中定义的静态变量和静态初始化块（如果有的话），按照它们在代码中出现的顺序进行。</li><li>然后，会初始化子类中定义的静态变量和静态初始化块（如果有的话），也是按照它们在代码中出现的顺序进行。</li><li>需要注意的是，静态初始化只会在类被加载到JVM时发生一次，与创建类的实例数量无关。</li></ul><p>2、<strong>实例变量（父类到子类）</strong>：</p><ul><li>在创建类的实例时，会首先为父类中的实例变量分配内存并默认初始化（例如，数值类型变量初始化为0，对象引用初始化为null）。</li><li>然后，会执行父类的非静态初始化块（如果有的话）。</li><li>接着，会执行父类的构造函数，此时父类的实例变量可以被显式初始化。</li><li>同样的过程会发生在子类上，但会在父类初始化之后进行。子类中的实例变量会被分配内存并默认初始化，然后执行子类的非静态初始化块（如果有的话），最后执行子类的构造函数。</li></ul><p>3、<strong>构造函数（父类到子类）</strong>：</p><ul><li>在创建对象时，构造函数的调用是遵循从父类到子类的顺序的。这意味着在子类的构造函数中，可以通过<code>super()</code>（显式或隐式）调用父类的构造函数，并且这个调用必须是子类构造函数中的第一条语句（除了注释和变量声明）。</li><li>如果子类没有显式调用父类的构造函数，则会自动调用父类的无参构造函数（如果父类没有定义无参构造函数且子类没有显式调用其他构造函数，则会导致编译错误）。</li></ul><p>综上所述，当使用<code>new</code>关键字创建类的实例时，执行顺序大致如下：</p><p>1、父类静态变量和静态初始化块（按出现顺序）。 2、子类静态变量和静态初始化块（按出现顺序）。 3、父类实例变量默认初始化。 4、父类非静态初始化块（如果有的话）。 5、父类构造函数。 6、子类实例变量默认初始化。 7、子类非静态初始化块（如果有的话）。 8、子类构造函数。</p><p>这个顺序确保了父类在子类之前被完全初始化，从而保证了继承体系中的正确性和稳定性。</p><h2 id="六、java-创建对象有几种方式" tabindex="-1"><a class="header-anchor" href="#六、java-创建对象有几种方式"><span>六、Java 创建对象有几种方式？</span></a></h2><ul><li>new 创建新对象</li><li>通过反射机制创建对象</li><li>采用 clone 创建对象</li><li>通过序列化机制</li></ul>`,52),t=[l];function h(p,d){return a(),s("div",null,t)}const o=i(n,[["render",h],["__file","java_oop_upper.html.vue"]]),c=JSON.parse('{"path":"/interview/javabase/java_oop_upper.html","title":"☕ Java面向对象面试题总结(上)","lang":"zh-CN","frontmatter":{"title":"☕ Java面向对象面试题总结(上)","index":false,"isOriginal":true,"category":"面试宝典","tag":"java","date":"2024-08-15T00:00:00.000Z","description":"一、重写和重载 在Java中，重写（Override）和重载（Overload）是面向对象编程中两个非常重要的概念，它们都与方法的定义和调用有关，但两者有着本质的区别。 1、重写（Override） 重写是子类对父类中继承来的方法进行重新定义（也就是方法签名相同，但方法体不同）。当子类需要修改从父类继承来的方法的行为时，就会使用到重写。重写的目的是允许...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/backend-book/interview/javabase/java_oop_upper.html"}],["meta",{"property":"og:site_name","content":"极速蜗牛"}],["meta",{"property":"og:title","content":"☕ Java面向对象面试题总结(上)"}],["meta",{"property":"og:description","content":"一、重写和重载 在Java中，重写（Override）和重载（Overload）是面向对象编程中两个非常重要的概念，它们都与方法的定义和调用有关，但两者有着本质的区别。 1、重写（Override） 重写是子类对父类中继承来的方法进行重新定义（也就是方法签名相同，但方法体不同）。当子类需要修改从父类继承来的方法的行为时，就会使用到重写。重写的目的是允许..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-15T16:40:21.000Z"}],["meta",{"property":"article:author","content":"青衣"}],["meta",{"property":"article:tag","content":"java"}],["meta",{"property":"article:published_time","content":"2024-08-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-15T16:40:21.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"☕ Java面向对象面试题总结(上)\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-08-15T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-15T16:40:21.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"青衣\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"一、重写和重载","slug":"一、重写和重载","link":"#一、重写和重载","children":[{"level":3,"title":"总结","slug":"总结","link":"#总结","children":[]}]},{"level":2,"title":"二、equals 和 hashcode","slug":"二、equals-和-hashcode","link":"#二、equals-和-hashcode","children":[]},{"level":2,"title":"三、抽象类和接口有什么区别？","slug":"三、抽象类和接口有什么区别","link":"#三、抽象类和接口有什么区别","children":[]},{"level":2,"title":"四、抽象类是什么？它和接口有啥区别？","slug":"四、抽象类是什么-它和接口有啥区别","link":"#四、抽象类是什么-它和接口有啥区别","children":[]},{"level":2,"title":"五、讲讲类的实例化顺序，比如父类静态数据，构造函数，字段，子类静态数据，构造函数，字段，当new的时候，他们的执行顺序","slug":"五、讲讲类的实例化顺序-比如父类静态数据-构造函数-字段-子类静态数据-构造函数-字段-当new的时候-他们的执行顺序","link":"#五、讲讲类的实例化顺序-比如父类静态数据-构造函数-字段-子类静态数据-构造函数-字段-当new的时候-他们的执行顺序","children":[]},{"level":2,"title":"六、Java 创建对象有几种方式？","slug":"六、java-创建对象有几种方式","link":"#六、java-创建对象有几种方式","children":[]}],"git":{"createdTime":1723449753000,"updatedTime":1723740021000,"contributors":[{"name":"Tsing","email":"ld320321@163.com","commits":1}]},"readingTime":{"minutes":8.77,"words":2631},"filePathRelative":"interview/javabase/java_oop_upper.md","localizedDate":"2024年8月15日","excerpt":"<h2>一、重写和重载</h2>\\n<p>在Java中，重写（Override）和重载（Overload）是面向对象编程中两个非常重要的概念，它们都与方法的定义和调用有关，但两者有着本质的区别。</p>\\n<p>1、重写（Override）</p>\\n<p>重写是子类对父类中继承来的方法进行重新定义（也就是方法签名相同，但方法体不同）。当子类需要修改从父类继承来的方法的行为时，就会使用到重写。重写的目的是允许子类提供特定于自己的实现。</p>\\n<p><strong>重写的规则</strong>：</p>\\n<ol>\\n<li><strong>方法名、参数列表必须相同</strong>：这是为了保持多态性，即父类类型的引用可以指向子类对象，并调用实际子类对象的方法。</li>\\n<li><strong>返回类型</strong>：对于非静态方法，返回类型可以是父类方法的返回类型的子类型（Java 5及以后版本支持协变返回类型）。对于静态方法，返回类型必须相同。</li>\\n<li><strong>访问修饰符</strong>：子类方法的访问级别不能低于父类方法的访问级别（但可以有更高的访问级别）。</li>\\n<li><strong>异常</strong>：子类方法抛出的异常应该是父类方法抛出异常的子类或没有异常（Java 7及以后版本支持更灵活的异常处理规则）。</li>\\n</ol>","autoDesc":true}');export{o as comp,c as data};