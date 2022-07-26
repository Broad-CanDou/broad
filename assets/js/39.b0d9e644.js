(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{362:function(a,t,s){"use strict";s.r(t);var n=s(3),e=Object(n.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h2",{attrs:{id:"arraylist集合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist集合"}},[a._v("#")]),a._v(" ArrayList集合")]),a._v(" "),t("h3",{attrs:{id:"arraylist简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist简单介绍"}},[a._v("#")]),a._v(" ArrayList简单介绍")]),a._v(" "),t("p",[a._v("集合框架的体系\n两大集合Collection，Map接口，那么对于Collection接口来说下面还有两个子接口List，Set。对于ArrayList集合又是List接口的实现类。这关于一个继承的关系，简单了解一下，可别弄混了😝")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("ArrayList的优点\nArrayList底层是数组实现，同时在内存中也是连续的（空间），并记下索引为0的内存地址。\n一旦我们知道了内存地址就可以快速找到元素，时间复杂度就是O(1)；"),t("br"),a._v("\n众所周知数组用一些名为索引的数字来标识每项数据在数组中的位置，那大家也知道索引从0开始，我们可以根据数组中的索引快速的访问元素。这就是ArrayList集合查找元素快的优点。")])]),a._v(" "),t("li",[t("p",[a._v("ArrayList的缺点\n上面我们说过ArrayList底层是数组实现，同时在内存中也是连续的（空间）增加删除操作：")])])]),a._v(" "),t("ol",[t("li",[a._v("我们想把一个值添加到数组中，那这样后面的元素就要一个个移动腾出位置，造成时间上的浪费。当然如果要插入最后位置，那只要一部操作即可还是比较快的。")]),a._v(" "),t("li",[a._v("如果我们要删除某一个元素的话，同样的操作，当你删除后，后面的要自动补位。其时间上也会造成浪费。")]),a._v(" "),t("li",[a._v("如此可知，ArrayList的缺点，当删除增加元素时效率比较低，当然当咱们增加的时候还牵扯到了扩容，雪上加霜导致更慢。")])]),a._v(" "),t("h3",{attrs:{id:"arraylist底层"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#arraylist底层"}},[a._v("#")]),a._v(" ArrayList底层")]),a._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[a._v("总结")]),a._v(" "),t("p",[a._v("ArrayList中维护一个Object类型的数组Object [] elementData (源码可看到)")]),a._v(" "),t("p",[a._v("当我们去创建ArrayList对象的时候，不指定大小的话，使用的是默认的构造器（无参构造），那初始的elementData容量为0，第1次去添加。扩容10，再往后添加，则扩容1.5倍。")]),a._v(" "),t("p",[a._v("当我们使用的是有参构造器去指定初始大小，如果需要扩容，则扩容1.5倍。")])]),a._v(" "),t("h3",{attrs:{id:"源码解析"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#源码解析"}},[a._v("#")]),a._v(" 源码解析")]),a._v(" "),t("ul",[t("li",[a._v("Add方法源码")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("boolean")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("add")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("E")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ensureCapacityInternal")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("size "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// Increments modCount!!")]),a._v("\n        elementData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("size"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("p",[a._v("debug进入add方法后包含扩容，赋值的操作\nensureCapacityInternal(size+1)这个方法就是先确定是否要扩容，里面做了很多工作。\nelementData[size+1] =e; 为数组赋值。")]),a._v(" "),t("ol",[t("li",[a._v("ensureCapacityInternal源码")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("calculateCapacity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Object")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" elementData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("==")]),a._v(" DEFAULTCAPACITY_EMPTY_ELEMENTDATA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Math")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("DEFAULT_CAPACITY"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br")])]),t("p",[a._v("if(elementData==DEFAULTCAPACITY_EMPTY_ELEMENTDATA) 判断elementData是否是空数组，如果是的话进入判断执行 Math.max(); 获取一个最大值，上图中Math.max()方法中第一个参数是10，第二个是1，那必然将minCapacity最小容量赋值10；\n"),t("strong",[a._v("ensureExplicitCapacity（minCapacity）")]),a._v(":扩容操作")]),a._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[a._v("ensureExplicitCapacity源码")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("ensureExplicitCapacity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        modCount"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("++")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// overflow-conscious code")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("minCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" elementData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br")])]),t("p",[a._v("modCount++： 记录集合修改的次数。")]),a._v(" "),t("p",[a._v("if(minCapacity-elementData.length>0)：如果需要的最小容量减去本身数组的容量大于0，那就说明本身数组达不到我给定的最小容量值，那就需要进入判断执行grow方法 进行扩容。")]),a._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[a._v("grow源码")])]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("private")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grow")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// overflow-conscious code")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" oldCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" elementData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("int")]),a._v(" newCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" oldCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("+")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("oldCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">>")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" minCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            newCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("newCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),a._v(" MAX_ARRAY_SIZE "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n            newCapacity "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("hugeCapacity")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("minCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("// minCapacity is usually close to size, so this is a win:")]),a._v("\n        elementData "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Arrays")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("copyOf")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("elementData"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" newCapacity"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br"),t("span",{staticClass:"line-number"},[a._v("9")]),t("br"),t("span",{staticClass:"line-number"},[a._v("10")]),t("br"),t("span",{staticClass:"line-number"},[a._v("11")]),t("br")])]),t("p",[a._v("int oldCapacity = elementData.length：赋值操作\nint newCapacity = oldCapacity + (oldCapacity >> 1); 真正扩容的核心步骤，oldCapacity >> 1右位移1。说明扩大1.5倍\n注意: 前两步 咱咱们第一次进行add操作，那么elementData.length 是0 ，那到第二步右位移扩大1.5倍，0+0/2=0。到最后还是0。\nif(newCapacity-minCapacity<0)：那这一步在咱们第一次进来时，就会出现 0-10的情况小于0 进入判断，将10 赋值给newCapacity。也就是第一add 扩容10 的情况。\nelementDataArrays.copyOf(elementData,newCapacity); 使用copyOf进行copyOf，将旧数组内容，拷贝到新的数组。")]),a._v(" "),t("h2",{attrs:{id:"总结"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[a._v("#")]),a._v(" 总结")]),a._v(" "),t("p",[a._v("上述描述就是 第一段 结论中的第二条，无参构造器的时候，第一次扩容10 的流程，那当有参指定大小的时候，走的过程是一样的，大家可以下去自己尝试一下！\n当我们去增加的时候，在grow方法中执行copyOf的方法，进行拷贝，那就很明白为啥说增加效率慢了吧，而且它的扩容方法，每次都会执行先不说扩不扩容代码每次都要走一遍，这就很恶心了~~~~")])])}),[],!1,null,null,null);t.default=e.exports}}]);