<template>
  <div class="web-info card-box">
    <div class="webinfo-title">
      <i
        class="iconfont icon-award"
        style="font-size: 0.875rem; font-weight: 900; width: 1.25em"
      ></i>
      <span>站点信息</span>
    </div>
    <div class="webinfo-item">
      <div class="webinfo-item-title">文章数目：</div>
      <div class="webinfo-content">{{ mdFileCount }} 篇</div>
    </div>

    <div class="webinfo-item">
      <div class="webinfo-item-title">本站总字数：</div>
      <div class="webinfo-content">{{ totalWords }} 字</div>
    </div>

  
    <div v-if="indexView" class="webinfo-item">
      <div class="webinfo-item-title">本站被访问了：</div>
      <div class="webinfo-content">
        <span id="busuanzi_value_site_pv" class="web-site-pv"
          ><i title="正在获取..." class="loading iconfont icon-loading"></i>
        </span>
        次
      </div>
    </div>

    <!-- 运行 -->
    <div class="webinfo-item">
      <div class="webinfo-item-title"></div>
      <span class="webinfo-content" id="htmer_time">
       
      </span>
    </div>
  </div>
</template>

<script>
import { dayDiff, timeDiff, lastUpdatePosts } from "../webSiteInfo/utils";
let busuanzi; // 统计量
export default {
  data() {
    return {
 
      mdFileCount: 0, // markdown 文档总数
      createToNowDay: 0, // 博客创建时间距今多少天
      lastActiveDate: "", // 最后活动时间
      totalWords: 0, // 本站总字数
      indexView: true, // 开启访问量和排名统计
    };
  },
  computed: {
    $lastUpdatePosts() {
      return lastUpdatePosts(this.$filterPosts);
    },
  },
  mounted() {
  
    if (Object.keys(this.$themeConfig.blogInfo).length > 0) {
      const {
        blogCreate,
        mdFileCountType,
        totalWords,
        moutedEvent,
        eachFileWords,
        indexIteration,
        indexView,
      } = this.$themeConfig.blogInfo;
      this.createToNowDay = dayDiff(blogCreate);
      if (mdFileCountType != "archives") {
        this.mdFileCount = mdFileCountType.length;
      } else {
        this.mdFileCount = this.$filterPosts.length;
      }
      if (totalWords == "archives" && eachFileWords) {
        let archivesWords = 0;
        eachFileWords.forEach((itemFile) => {
          if (itemFile.wordsCount < 1000) {
            archivesWords += itemFile.wordsCount;
          } else {
            let wordsCount = itemFile.wordsCount.slice(
              0,
              itemFile.wordsCount.length - 1
            );
            archivesWords += wordsCount * 1000;
          }
        });
        this.totalWords = Math.round(archivesWords / 100) / 10 + "k";
      } else if (totalWords == "archives") {
        this.totalWords = 0;
        console.log(
          "如果 totalWords 使用 archives，必须传入 eachFileWords，显然您并没有传入！"
        );
      } else {
        this.totalWords = totalWords;
      }
      // 最后一次活动时间
      this.lastActiveDate = timeDiff(this.$lastUpdatePosts[0].lastUpdated);
      this.mountedWebInfo(moutedEvent);
      // 获取访问量和排名
      this.indexView = indexView == undefined ? true : indexView;
      if (this.indexView) {
        this.getIndexViewCouter(indexIteration);
      }
    }


            function setTime() {
               var seconds = 1000;
              var minutes = seconds * 60;
              var hours = minutes * 60;
              var days = hours * 24;
              var years = days * 365;
              var today = new Date();
              var todayYear = today.getFullYear();
              var todayMonth = today.getMonth() + 1;
              var todayDate = today.getDate();
              var todayHour = today.getHours();
              var todayMinute = today.getMinutes();
              var todaySecond = today.getSeconds();
              var t1 = Date.UTC(2021, 12, 0, 0, 0, 0); //北京时间2021-06-11
              var t2 = Date.UTC(todayYear, todayMonth, todayDate, todayHour, todayMinute, todaySecond);
              var diff = t2 - t1;
              var diffYears = Math.floor(diff / years);
              var diffDays = Math.floor((diff / days) - diffYears * 365);
              var diffHours = Math.floor((diff - (diffYears * 365 + diffDays) * days) / hours);
              var diffMinutes = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours) / minutes);
              var diffSeconds = Math.floor((diff - (diffYears * 365 + diffDays) * days - diffHours * hours - diffMinutes * minutes) / seconds);
              if(document.getElementById("htmer_time")!=null)
                          document.getElementById("htmer_time").innerHTML =  diffYears + " 年 " + diffDays + " 天 " + diffHours + " 小时 " + diffMinutes + " 分 " + diffSeconds + " 秒 ";
                      }
                      //即时刷新
                      setInterval(setTime, 1000);
  },


  methods: {
    /**
     * 挂载站点信息模块
     */
    mountedWebInfo(moutedEvent = ".tags-wrapper") {
      let interval = setInterval(() => {
        const tagsWrapper = document.querySelector(moutedEvent);
        const webInfo = document.querySelector(".web-info");
        if (tagsWrapper && webInfo) {
          if (!this.isSiblilngNode(tagsWrapper, webInfo)) {
            tagsWrapper.parentNode.insertBefore(
              webInfo,
              tagsWrapper.nextSibling
            );
            clearInterval(interval);
          }
        }
      }, 200);
    },
    /**
     * 挂载在兄弟元素后面，说明当前组件是 siblingNode 变量
     */
    isSiblilngNode(element, siblingNode) {
      if (element.siblingNode == siblingNode) {
        return true;
      } else {
        return false;
      }
    },
    /**
     * 首页的统计量
     */
    getIndexViewCouter(iterationTime = 3000) {
      if (busuanzi) {
        busuanzi.fetch();
      } else {
        busuanzi = require("busuanzi.pure.js");
      }
      var i = 0;
      var defaultCouter = "9999";
      // 如果 require 没有获取成功，则手动获取
      // 但是容易产生访问量叠加，如果只需要第一次获取数据（可能获取失败），可注释掉，此内容是第一次获取失败后，重新获取访问量，可能导致访问量再次 + 1
      // 取决于访问人的网络，以及 setTimeout 的时间（需求调节）
      setTimeout(() => {
        let interval = setInterval(() => {
          const indexUv = document.querySelector(".web-site-pv");
          if (indexUv) {
            i += iterationTime;
            if (i > iterationTime * 10) {
              indexUv.innerText = defaultCouter;
              clearInterval(interval); // 10 秒后无法获取，则取消获取
            }
            if (indexUv.innerText == "") {
              // 手动获取访问量
              busuanzi.fetch();
            } else {
              clearInterval(interval);
            }
          } else {
            clearInterval(interval);
          }
        }, iterationTime);
      }, iterationTime);
    },
  },
};
</script>

<style scoped>
.web-info {
  font-size: 0.875rem;
  padding: 0.95rem;
}
.webinfo-title {
  text-align: center;
  color: #888;
  font-weight: bold;
  padding: 0 0 10px 0;
}
.webinfo-item {
  padding: 8px 0 0;
  margin: 0;
}
.webinfo-item-title {
  display: inline-block;
}
.webinfo-content {
  display: inline-block;
  float: right;
}
@keyframes turn {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading {
  display: inline-block;
  animation: turn 1s linear infinite;
  -webkit-animation: turn 1s linear infinite;
}
</style>
