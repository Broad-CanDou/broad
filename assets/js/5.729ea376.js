(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{276:function(t,e,n){},329:function(t,e,n){"use strict";n(276)},332:function(t,e,n){"use strict";n.r(e);function i(t){return t instanceof Date||(t=new Date(t)),`${t.getUTCFullYear()}-${s(t.getUTCMonth()+1)}-${s(t.getUTCDate())}`}function s(t){return t.toString().padStart(2,"0")}function a(t){return t.sort((t,e)=>{return n=t,o(e)-o(n);var n}),t}function o(t){let e=t.lastUpdated||t.frontmatter.date,n=new Date(e);return"Invalid Date"==n&&e&&(n=new Date(e.replace(/-/g,"/"))),n.getTime()}function r(t,e){let n=30;return 2===t?n=e%4==0?29:28:1!==t&&3!==t&&5!==t&&7!==t&&8!==t&&10!==t&&12!==t||(n=31),n}let l;var c={data:()=>({mdFileCount:0,createToNowDay:0,lastActiveDate:"",totalWords:0,indexView:!0}),computed:{$lastUpdatePosts(){return a(this.$filterPosts)}},mounted(){if(Object.keys(this.$themeConfig.blogInfo).length>0){const{blogCreate:n,mdFileCountType:s,totalWords:a,moutedEvent:o,eachFileWords:l,indexIteration:c,indexView:d}=this.$themeConfig.blogInfo;if(this.createToNowDay=(t=n,e||(e=t,t=new Date),t=i(t),e=i(e),parseInt(Math.abs(new Date(t)-new Date(e))/864e5)),this.mdFileCount="archives"!=s?s.length:this.$filterPosts.length,"archives"==a&&l){let t=0;l.forEach(e=>{if(e.wordsCount<1e3)t+=e.wordsCount;else{let n=e.wordsCount.slice(0,e.wordsCount.length-1);t+=1e3*n}}),this.totalWords=Math.round(t/100)/10+"k"}else"archives"==a?(this.totalWords=0,console.log("如果 totalWords 使用 archives，必须传入 eachFileWords，显然您并没有传入！")):this.totalWords=a;this.lastActiveDate=function(t,e){e||(e=t,t=new Date),t instanceof Date||(t=new Date(t)),e instanceof Date||(e=new Date(e));const n=parseInt(Math.abs(e-t)/1e3);return 0==n?"刚刚":n<60?n+" 秒":parseInt(n/60)<60?parseInt(n/60)+" 分":parseInt(n/3600)<24?parseInt(n/3600)+" 时":parseInt(n/86400)<r(t.getMonth,t.getFullYear)?parseInt(n/86400)+" 天":parseInt(n/(86400*r(t.getMonth,t.getFullYear)))<12?parseInt(n/(86400*r(t.getMonth,t.getFullYear)))+" 月":parseInt(n/(86400*r(t.getMonth,t.getFullYear)*12))+" 年"}(this.$lastUpdatePosts[0].lastUpdated),this.mountedWebInfo(o),this.indexView=null==d||d,this.indexView&&this.getIndexViewCouter(c)}var t,e;setInterval((function(){var t=864e5,e=new Date,n=e.getFullYear(),i=e.getMonth()+1,s=e.getDate(),a=e.getHours(),o=e.getMinutes(),r=e.getSeconds(),l=Date.UTC(2021,12,0,0,0,0),c=Date.UTC(n,i,s,a,o,r)-l,d=Math.floor(c/31536e6),u=Math.floor(c/t-365*d),f=Math.floor((c-(365*d+u)*t)/36e5),h=Math.floor((c-(365*d+u)*t-36e5*f)/6e4),v=Math.floor((c-(365*d+u)*t-36e5*f-6e4*h)/1e3);null!=document.getElementById("htmer_time")&&(document.getElementById("htmer_time").innerHTML=d+" 年 "+u+" 天 "+f+" 小时 "+h+" 分 "+v+" 秒 ")}),1e3)},methods:{mountedWebInfo(t=".tags-wrapper"){let e=setInterval(()=>{const n=document.querySelector(t),i=document.querySelector(".web-info");n&&i&&(this.isSiblilngNode(n,i)||(n.parentNode.insertBefore(i,n.nextSibling),clearInterval(e)))},200)},isSiblilngNode:(t,e)=>t.siblingNode==e,getIndexViewCouter(t=3e3){l?l.fetch():l=n(97);var e=0;setTimeout(()=>{let n=setInterval(()=>{const i=document.querySelector(".web-site-pv");i?((e+=t)>10*t&&(i.innerText="9999",clearInterval(n)),""==i.innerText?l.fetch():clearInterval(n)):clearInterval(n)},t)},t)}}},d=(n(329),n(3)),u=Object(d.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"web-info card-box"},[t._m(0),t._v(" "),e("div",{staticClass:"webinfo-item"},[e("div",{staticClass:"webinfo-item-title"},[t._v("文章数目：")]),t._v(" "),e("div",{staticClass:"webinfo-content"},[t._v(t._s(t.mdFileCount)+" 篇")])]),t._v(" "),e("div",{staticClass:"webinfo-item"},[e("div",{staticClass:"webinfo-item-title"},[t._v("本站总字数：")]),t._v(" "),e("div",{staticClass:"webinfo-content"},[t._v(t._s(t.totalWords)+" 字")])]),t._v(" "),t.indexView?e("div",{staticClass:"webinfo-item"},[e("div",{staticClass:"webinfo-item-title"},[t._v("本站被访问了：")]),t._v(" "),t._m(1)]):t._e(),t._v(" "),t._m(2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"webinfo-title"},[t("i",{staticClass:"iconfont icon-award",staticStyle:{"font-size":"0.875rem","font-weight":"900",width:"1.25em"}}),this._v(" "),t("span",[this._v("站点信息")])])},function(){var t=this._self._c;return t("div",{staticClass:"webinfo-content"},[t("span",{staticClass:"web-site-pv",attrs:{id:"busuanzi_value_site_pv"}},[t("i",{staticClass:"loading iconfont icon-loading",attrs:{title:"正在获取..."}})]),this._v("\n      次\n    ")])},function(){var t=this._self._c;return t("div",{staticClass:"webinfo-item"},[t("div",{staticClass:"webinfo-item-title"}),this._v(" "),t("span",{staticClass:"webinfo-content",attrs:{id:"htmer_time"}})])}],!1,null,"2e670fe1",null);e.default=u.exports}}]);