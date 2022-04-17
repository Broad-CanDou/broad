import { resolve } from 'path'
import { defineConfig4CustomTheme } from 'vuepress/config'
import { VdoingThemeConfig } from 'vuepress-theme-vdoing/types'
import dayjs from 'dayjs'
import htmlModules from './config/htmlModules' // 自定义插入的html块
import { readFileList, readTotalFileWords, readEachFileWords } from './webSiteInfo/readFile';


export default defineConfig4CustomTheme<VdoingThemeConfig>({
  theme: 'vdoing', // 使用npm包主题

  locales: {
    '/': {
      lang: 'zh-CN',
      title: "Broad",
      description: '在工作中收集知识，做此纪录',
    }
  },
  
  // 主题配置
  themeConfig: {
    // 文章内容块的背景风格，默认无. 1 方格 | 2 横线 | 3 竖线 | 4 左斜线 | 5 右斜线 | 6 点状
    contentBgStyle: 4, 

    // 导航配置
    nav: [
      { text: '首页', link: '/' },
      {
        text: 'java',
        link: '/java/',
        items: [
          {
            text: '学习笔记',
            items: [
              {text: '中间件',link: '/note/RabbitMq/'}
            ]
          }
        ],
      },
      {text: '前端',link: '/ui/'},
      {
        text: '杂文',
        link: '/technology/',
        items: [
          {text: 'Shell',link: '/note/Shell/'},
          {text: 'Linux',link: '/note/Linux/'}
        ]
      },
      { text: '关于', link: '/about/' },
      {
        text: '收藏',
        link: '/pages/beb6c0bd8a66cea6/',
      },
      {
        text: '索引',
        link: '/archives/',
        items: [
          { text: '分类', link: '/categories/' },
          { text: '标签', link: '/tags/' },
          { text: '归档', link: '/archives/' },
        ],
      },
    ],
    sidebarDepth: 2, // 侧边栏显示深度，默认1，最大2（显示到h3标题）
    logo: '/img/logo3.png', // 导航栏logo
    repo: 'Broad-CanDou/broad', // 导航栏右侧生成Github链接
    searchMaxSuggestions: 10, // 搜索结果显示最大数
    lastUpdated: '上次更新', // 开启更新时间，并配置前缀文字   string | boolean (取值为git提交时间)
    docsDir: 'docs', // 编辑的文件夹
    editLinks: true, // 启用编辑
    editLinkText: '编辑',
    

    // 侧边栏 
    sidebar: 'structuring',

    // 文章默认的作者信息
    author: {
      name: 'WangBuZheng', // 必需
      link: 'https://github.com/Broad-CanDou', // 可选的
    },

    // 博主信息
    blogger: {
      avatar: '/otherImg/peolo.jpg',
      name: 'Wang Bu Zheng',
      slogan: '开发农名工',
    },

    // 社交图标 
    social: {
      icons: [
        {
          iconClass: 'icon-weixin',
          title: '微信',
          link: 'wbz1833844',
        },
        {
          iconClass: 'icon-github',
          title: 'GitHub',
          link: 'https://github.com/Broad-CanDou',
        },
        {
          iconClass: 'icon-gitee',
          title: 'Gitee',
          link: 'https://gitee.com/wbzBroad',
        },
      ],
    },

    // 页脚信息
    footer: {
      createYear: 202102, // 博客创建年份
      copyrightInfo:
        'Broad-Bean | <a href="https://beian.miit.gov.cn/" target="_blank">豫ICP备2022009421号-1</a>', // 博客版权信息，支持a标签或换行标签</br>
    },

    // 自定义hmtl(广告)模块
    htmlModules,
          // 站点配置（首页 & 文章页）
    blogInfo: {
      blogCreate: '2021-10-19', // 博客创建时间
      indexView: true,  // 开启首页的访问量和排名统计，默认 true（开启）
      pageView: true,  // 开启文章页的浏览量统计，默认 true（开启）
      readingTime: true,  // 开启文章页的预计阅读时间，条件：开启 eachFileWords，默认 true（开启）。可在 eachFileWords 的 readEachFileWords 的第二个和第三个参数自定义，默认 1 分钟 300 中文、160 英文
      eachFileWords: readEachFileWords([''], 300, 160),  // 开启每个文章页的字数。readEachFileWords(['xx']) 关闭 xx 目录（可多个，可不传参数）下的文章页字数和阅读时长，后面两个参数分别是 1 分钟里能阅读的中文字数和英文字数。无默认值。readEachFileWords() 方法默认排除了 article 为 false 的文章
      mdFileCountType: 'archives',  // 开启文档数。1. archives 获取归档的文档数（默认）。2. 数组 readFileList(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文档数。提示：readFileList() 获取 docs 下所有的 md 文档（除了 `.vuepress` 和 `@pages` 目录下的文档）
      totalWords: 'archives',  // 开启本站文档总字数。1. archives 获取归档的文档数（使用 archives 条件：传入 eachFileWords，否则报错）。2. readTotalFileWords(['xx']) 排除 xx 目录（可多个，可不传参数），获取其他目录的文章字数。无默认值
      moutedEvent: '.tags-wrapper',   // 首页的站点模块挂载在某个元素后面（支持多种选择器），指的是挂载在哪个兄弟元素的后面，默认是热门标签 '.tags-wrapper' 下面，提示：'.categories-wrapper' 会挂载在文章分类下面。'.blogger-wrapper' 会挂载在博客头像模块下面
      // 下面两个选项：第一次获取访问量失败后的迭代时间
      indexIteration: 2500,   // 如果首页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      pageIteration: 2500,    // 如果文章页获取访问量失败，则每隔多少时间后获取一次访问量，直到获取成功或获取 10 次后。默认 3 秒。注意：设置时间太低，可能导致访问量 + 2、+ 3 ......
      // 说明：成功获取一次访问量，访问量 + 1，所以第一次获取失败后，设置的每个隔段重新获取时间，将会影响访问量的次数。如 100 可能每次获取访问量 + 3
    },
  },


  head: [
    ['link', { rel: 'icon', href: '/img/logo3.png' }], 
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['link', { rel: 'stylesheet', href: 'https://at.alicdn.com/t/font_3077305_pt8umhrn4k9.css' }]
  ],

  // 插件配置
  plugins: {
    // 导入本地插件（供学习参考）
    [resolve(__dirname, './plugins/love-me')]: { // 鼠标点击爱心特效
      color: '#11a8cd', // 爱心颜色，默认随机色
      excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
    },

    // 代码块复制按钮
    'one-click-copy': {
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], 
      copyMessage: '复制成功', 
      duration: 1000, 
      showInMobile: false, 
    },

    // DEMO演示模块, API: https://github.com/xiguaxigua/vuepress-plugin-demo-block
    'demo-block': {
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },

    // 放大图片
    'vuepress-plugin-zooming': {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // not排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },

  

    // "上次更新"的时间格式
    '@vuepress/last-updated': {
      transformer: (timestamp, lang) => {
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
    // 进度条显示
    'reading-progress':{},
   },

  markdown: {
    lineNumbers: true
  },


})
