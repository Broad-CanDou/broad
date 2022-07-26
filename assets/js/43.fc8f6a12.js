(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{366:function(s,a,t){"use strict";t.r(a);var n=t(3),e=Object(n.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"shell变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#shell变量"}},[s._v("#")]),s._v(" Shell变量")]),s._v(" "),a("h2",{attrs:{id:"_1-定义变量因遵循以下规则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义变量因遵循以下规则"}},[s._v("#")]),s._v(" 1. 定义变量因遵循以下规则")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  1. 变量名和等号之间不能有空格\n  2. 命名只能使用英文字母，数字和下划线，首个字符不能以数字，标点符号开头\n  3. 中间不能有空格，可以使用下划线\n  4. 不能使用标点符号\n  5. 不能使用bash里的关键字\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br")])]),a("h3",{attrs:{id:"举例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#正确的定义变量名")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("test1")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#错误的定义变量名")]),s._v("\n?test"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("2test")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("h2",{attrs:{id:"_2-变量的类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-变量的类型"}},[s._v("#")]),s._v(" 2. 变量的类型")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  1. 🚀局部变量🚀 在脚本或命令中定义，仅在当前shell实例中有效，其他shell启动的程序不能访问局部变量。\n  2. 🚀环境变量🚀 所有的程序，包括shell启动的程序，都能访问环境变量，有些程序需要环境变量来保证其正常运行。必要的时候shell脚本也可以定义环境变量。\n  3. 🚀shell变量（特殊变量）🚀 shell变量是由shell程序设置的特殊变量。shell变量中有一部分是环境变量，有一部分是局部变量，这些变量保证了shell的正常运行\n  4. 🚀全局变量🚀 就是指变量在当前的整个 Shell 进程中都有效。每个 Shell 进程都有自己的作用域，彼此之间互不影响。在 Shell 中定义的变量，默认就是全局变量\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h3",{attrs:{id:"举例-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例-2"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("ol",[a("li",[a("font",{attrs:{color:"orange"}},[s._v("局部变量:")]),s._v(" 知道其他语言的小伙伴们都知道局部变量 那只能在定义方法的内部/定义函数的内部进行使用，那如果我们在方法/函数的外部使用是无法使用的。\n但是对于Shell 就很奇怪 我们在函数中定义变量在外部也可以使用的：如下")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-name function"}},[s._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("a")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("test")]),s._v("\n   "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$a")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("p",[s._v("我们在函数test中定义a变量，但是在外部echo输出还是可以输出的:如下")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bash tests.sh")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("p",[s._v("所以证明即使 a 变量在函数test中，但是他的作用域就是全局，那怎么样才能变为局部呢？？\n🚀 方法: 想要成为局部变量 只需要在加上 "),a("font",{attrs:{color:"orange"}},[s._v(" local")]),s._v(" 关键字。比如：local a=99;")],1),s._v(" "),a("hr"),s._v(" "),a("ol",{attrs:{start:"2"}},[a("li",[a("font",{attrs:{color:"orange"}},[s._v("全局变量:")]),s._v(" "),a("font",{attrs:{color:"red"}},[s._v(" 全局变量的作用域是当前shell进程(会话),而不是当前shell脚本文件")]),s._v("使用source命令（也称为点命令) 例如 source tests.sh这样在一个shell进程(会话)中全局变量在多个文件中是有效的。")],1)]),s._v(" "),a("hr"),s._v(" "),a("ol",{attrs:{start:"3"}},[a("li",[a("font",{attrs:{color:"orange"}},[s._v("环境变量: ")]),s._v("  上述讲到全局变量是在当前的shell进程中起作用，但是对于其他shell进程/子进程是无效的。那么这样我们就需要环境变量。环境变量创建时所处的shell进程是父进程，在父进程中创建一个进程称这个心进程为子进程。那么对于环境变量 可以通过父进程传给子进程，同样传给孙进程也阔以。\n🚀那是如何创建子进程？如何创建环境变量呢？不要着急 往下看！")],1)]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#使用export 命令设置环境变量")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#直接bash 创建子进程")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# a=99 #定义一个变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# export a #将a变为环境变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo $a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# bash #创建子进程")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# echo $a")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("99")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@VM-16-17-centos test"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("hr"),s._v(" "),a("ol",{attrs:{start:"4"}},[a("li",[a("font",{attrs:{color:"orange"}},[s._v("特殊变量: ")]),s._v(" "),a("ol",[a("li",[a("strong",[s._v("$n")]),s._v(": 传给脚本或者函数的参数 n代表一个数字列如:")])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$1")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$2")]),s._v(","),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$3")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".等最多到10。"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$0")]),s._v("的是当前文件名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ol",{attrs:{start:"2"}},[a("li",[a("strong",[s._v("$")]),s._v("*: 传递给脚本或函数的所有参数。")]),s._v(" "),a("li",[a("strong",[s._v("$@")]),s._v(": 传递给脚本或函数的所有参数。")]),s._v(" "),a("li",[a("strong",[s._v("$?")]),s._v(": 上个命令的退出状态，或函数的返回值。上个命令执行成功返回 0 不成功返回随机的一个值。\n"),a("font",{attrs:{color:"red"}},[s._v("注意:")]),s._v(' 第二个和第三个的区别在于不被双引号包含时，都以1,2,3的形式输出所有参数，被双引号包含时，"*" 会将所有的参数作为一个整体；"@" 会将各个参数分开，以换行形式输出所有参数。')],1)])],1)]),s._v(" "),a("h2",{attrs:{id:"_3-使用变量名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-使用变量名"}},[s._v("#")]),s._v(" 3. 使用变量名")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("  变量名的使用有两种简单的方式:\n  1. echo $test    #加上$符号后面跟变量名\n  2. echo ${test}  #加上${}里面跟变量名\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("🚀 "),a("font",{attrs:{color:"red"}},[s._v(" 说明: 第二种方式，其实加不加都行。但是呢在有些地方需要加上使解释器识别变量。")])],1),s._v(" "),a("h3",{attrs:{id:"举例-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#举例-3"}},[s._v("#")]),s._v(" 举例")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[s._v("param")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("in")]),s._v(" A B C\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("do")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"输出 '),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${param}")]),s._v('CanShu"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("done")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("🚀 "),a("font",{attrs:{color:"red"}},[s._v(" 说明: 当我们这种输出参数的时候，就要加上${} 花括号。不然 输出的结果就会不对会出现空")])],1),s._v(" "),a("h2",{attrs:{id:"_4-只读变量-readonly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-只读变量-readonly"}},[s._v("#")]),s._v(" 4.只读变量——readonly")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#定义变量")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("param")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("我就是卷！要你管！\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("readonly")]),s._v(" param\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("param")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("我不卷了！我被人说了\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("p",[s._v("🚀 "),a("font",{attrs:{color:"red"}},[s._v(" 说明: 如果使一个变量变为只读（readonly）,再次修改bash xxx.sh执行的时候就会报错：xxx.sh: line 7: param: readonly variable")])],1),s._v(" "),a("h2",{attrs:{id:"_5-删除变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-删除变量"}},[s._v("#")]),s._v(" 5.删除变量")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token shebang important"}},[s._v("#!/bin/bash")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("param")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("删除变量\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("unset")]),s._v(" param\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[s._v("🚀 "),a("font",{attrs:{color:"red"}},[s._v(" 说明: 使用unset可以删除变量，但不可以删除")]),a("font",{attrs:{color:"black"}},[s._v("只读变量")])],1)])}),[],!1,null,null,null);a.default=e.exports}}]);