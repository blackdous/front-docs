"use strict";(self.webpackChunkfrontdocs=self.webpackChunkfrontdocs||[]).push([[361],{617:(s,n,a)=>{a.r(n),a.d(n,{data:()=>t});const t={key:"v-1f427990",path:"/baselang/css-bem.html",title:"CSS-BEM规范",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"介绍",slug:"介绍",children:[{level:3,title:"块（block）",slug:"块-block",children:[]},{level:3,title:"元素（element）",slug:"元素-element",children:[]},{level:3,title:"修饰符（modifier）",slug:"修饰符-modifier",children:[]}]},{level:2,title:"预编译器书写规范",slug:"预编译器书写规范",children:[]},{level:2,title:"书写原则",slug:"书写原则",children:[]},{level:2,title:"BEM 解决问题",slug:"bem-解决问题",children:[]},{level:2,title:"性能",slug:"性能",children:[]},{level:2,title:"scss functional",slug:"scss-functional",children:[]}],filePathRelative:"baselang/css-bem.md",git:{updatedTime:162997515e4,contributors:[{name:"velen.zhang",email:"896662364@qq.com",commits:1}]}}},3221:(s,n,a)=>{a.r(n),a.d(n,{default:()=>d});var t=a(6252);const e=(0,t._)("h1",{id:"css-bem规范",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#css-bem规范","aria-hidden":"true"},"#"),(0,t.Uk)(" CSS-BEM规范")],-1),p=(0,t._)("h2",{id:"介绍",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#介绍","aria-hidden":"true"},"#"),(0,t.Uk)(" 介绍")],-1),l=(0,t.Uk)("使用 "),c={href:"http://bem.info/",target:"_blank",rel:"noopener noreferrer"},o=(0,t.Uk)("BEM"),u=(0,t.Uk)(" 命名规范，理论上讲，每行 "),i=(0,t._)("code",null,"css",-1),r=(0,t.Uk)(" 代码都只有一个选择器。"),k=(0,t.uE)('<p>BEM代表 <strong>“块（block）,元素（element）,修饰符（modifier）”</strong>,我们常用这三个实体开发组件。</p><p>在选择器中，由以下三种符号来表示扩展的关系：</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>-   中划线 ：仅作为连字符使用，表示某个块或者某个子元素的多单词之间的连接记号。\n__  双下划线：双下划线用来连接块和块的子元素\n_   单下划线：单下划线用来描述一个块或者块的子元素的一种状态\n\ntype-block__element_modifier\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="块-block" tabindex="-1"><a class="header-anchor" href="#块-block" aria-hidden="true">#</a> 块（block）</h3><p>一个块是设计或布局的一部分，它有具体且唯一地意义 ，要么是语义上的要么是视觉上的。</p><p>在大多数情况下，任何独立的页面元素（或复杂或简单）都可以被视作一个块。它的HTML容器会有一个唯一的CSS类名，也就是这个块的名字。</p><p>针对块的CSS类名会加一些前缀（ <code>ui-</code>），这些前缀在CSS中有类似 <a href="">命名空间</a> 的作用。</p><p>一个块的正式（实际上是半正式的）定义有下面三个基本原则：</p><ol><li>CSS中只能使用类名（不能是ID）</li><li>每一个块名应该有一个命名空间（前缀）</li><li>每一条CSS规则必须属于一个块</li></ol><p>例如：一个自定义列表 <code>.list</code> 是一个块，通常自定义列表是算在 <code>mod</code> 类别的，在这种情况下，一个 <code>list</code> 列表的block写法应该为:</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code>.list\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><h3 id="元素-element" tabindex="-1"><a class="header-anchor" href="#元素-element" aria-hidden="true">#</a> 元素（element）</h3><p>块中的子元素是块的子元素，并且子元素的子元素在 <code>bem</code> 里也被认为是块的直接子元素。<strong>一个块中元素的类名必须用父级块的名称作为前缀。</strong></p><p>如上面的例子，<code>li.item</code> 是列表的一个子元素，</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.list</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list .item</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n\n<span class="token selector">.list</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list__item</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="修饰符-modifier" tabindex="-1"><a class="header-anchor" href="#修饰符-modifier" aria-hidden="true">#</a> 修饰符（modifier）</h3><p>一个“修饰符”可以理解为一个块的特定状态，标识着它持有一个特定的属性。</p><p>用一个例子来解释最好不过了。一个表示按钮的块默认有三个大小：小，中，大。为了避免创建三个不同的块，最好是在块上加修饰符。这个修饰符应该有个名字（比如：<code>size</code> ）和值（ <code>small</code>，<code>normal</code> 或者 <code>big</code> ）。</p><p>如上面的例子中，表示一个选中的列表，和一个激活的列表项</p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.list</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list.select</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list .item</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list .item.active</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token selector">.list</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list_select</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list__item</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.list__item_active</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><h2 id="预编译器书写规范" tabindex="-1"><a class="header-anchor" href="#预编译器书写规范" aria-hidden="true">#</a> 预编译器书写规范</h2><p>例如：<code>less</code>。使用<code>.less</code>后缀的文件来存储变量、混合代码以及最终合并压缩。</p><table><thead><tr><th>子less</th><th>注解</th></tr></thead><tbody><tr><td><code>lib-base.less</code></td><td>预定义的变量，例如颜色、字号、字体</td></tr><tr><td><code>lib-mixins.less</code></td><td>用于混合的代码，例如渐变、半透明的混合</td></tr><tr><td><code>lib-reset.less</code></td><td>初始化</td></tr><tr><td><code>lib-ui.less</code></td><td>颗粒化ui功能</td></tr><tr><td><code>xxx.less</code></td><td>模块样式</td></tr></tbody></table><p><code>.less</code> 文件的引用顺序会对最终编译的样式的作用域和优先级产生影响，请尽量按照由底层到自定义的顺序来引用。</p><h2 id="书写原则" tabindex="-1"><a class="header-anchor" href="#书写原则" aria-hidden="true">#</a> 书写原则</h2><ul><li>原则上不会出现<code>2层以上</code>选择器嵌套</li><li>两层选择器嵌套出现在<code>.mod-xxx__item_current</code>子元素的情况</li><li>用命名来解耦，所有类名都为一层，增加效率和复用性</li></ul><p><strong>常规写法：</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.xxx</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__item</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__item_current</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">// 嵌套写法\n.xxx__item_current .mod-xxx__link</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p><strong>推荐：</strong></p><div class="language-css ext-css line-numbers-mode"><pre class="language-css"><code><span class="token selector">.xxx</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__item</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__item_hightlight</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__product-name</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__link</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token selector">.xxx__ming-zi-ke-yi-hen-chang</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n\n<span class="token selector">// 嵌套写法\n.xxx__item_current</span><span class="token punctuation">{</span>\n    <span class="token selector">.xxx__link</span><span class="token punctuation">{</span><span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>对应的HTML结构如下：</p><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__item<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>第一项\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__product-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__ming-zi-ke-yi-hen-chang<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>看类名<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__item xxx__item_current<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>第二项 且 当前选择项\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__product-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__item-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__item xxx__item_hightlight<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>第三项 且 特殊高亮\n         <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__product-name<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是名称<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>#<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>xxx__item-link<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>我是link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="bem-解决问题" tabindex="-1"><a class="header-anchor" href="#bem-解决问题" aria-hidden="true">#</a> BEM 解决问题</h2><p>组件之间的完全解耦，不会造成命名空间的污染，如：<code>.mod-xxx ul li</code> 的写法带来的潜在的嵌套风险。</p><h2 id="性能" tabindex="-1"><a class="header-anchor" href="#性能" aria-hidden="true">#</a> 性能</h2><p>BEM 命名会使得 Class 类名变长，但经过 gzip 压缩后这个带宽开销可以忽略不计</p><h2 id="scss-functional" tabindex="-1"><a class="header-anchor" href="#scss-functional" aria-hidden="true">#</a> scss functional</h2><p>scss组织生成bem的function</p>',38),d={render:function(s,n){const a=(0,t.up)("OutboundLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[e,p,(0,t._)("p",null,[l,(0,t._)("a",c,[o,(0,t.Wm)(a)]),u,i,r]),k],64)}}}}]);