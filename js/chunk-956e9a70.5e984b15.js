(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-956e9a70"],{"04d3":function(t,n,a){"use strict";a.r(n);var i=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"tabbarcontent"},[a("div",{staticClass:"footBox"},[a("div",{staticClass:"language"}),a("div",{staticClass:"navFoot"},[t._m(0),t._l(t.tabBarArr,(function(n){return a("div",{key:n.id,ref:"btn",refInFor:!0,staticClass:"tab-item",class:{bigItem:n.id===t.id},on:{click:function(a){return t.switchTo(n)}}},[a("span",{class:{on:n.id===t.id}},[t._v(t._s(n.name))])])}))],2),a("div",{staticClass:"language"},[a("span",{on:{click:function(n){return t.language(1)}}},[t._v("中文")]),t._v("/\n      "),a("span",{on:{click:function(n){return t.language(2)}}},[t._v("English")])])]),a("transition",{attrs:{name:"fade-three",mode:"out-in"}},[t.show?a("router-view"):t._e()],1),a("div",{staticClass:"footer",attrs:{id:"foun"}},[a("div",{staticClass:"content"},[a("div",{staticClass:"left"},[a("ul",[a("li",[a("span",{staticClass:"one",class:t.lang?"":"ones"},[t._v(t._s(t.$t("home.合作单位")))]),a("span",[t._v(t._s(t.$t("navigate.基金会")))])])]),a("ul",[a("li",[a("span",{staticClass:"one",class:t.lang?"":"ones"},[t._v(t._s(t.$t("home.乐读中国")))]),a("span",[t._v(t._s(t.$t("home.逸仙资本")))])]),a("li",[a("span",{staticClass:"one",class:t.lang?"":"ones"}),t._v(t._s(t.$t("home.嘉尚基金")))]),a("li",[a("span",{staticClass:"one",class:t.lang?"":"ones"}),t._v(t._s(t.$t("home.天引资本")))]),a("li",[a("span",{staticClass:"one",class:t.lang?"":"ones"}),t._v(t._s(t.$t("home.天弘基金")))])])]),a("ul",[a("li",[t._v(t._s(t.$t("home.在线客服")))]),a("li",[t._v("010 - 4567 - 8987")]),a("li",[t._v(t._s(t.$t("home.周一至周日"))+" 9:00 - 22:00?")])])]),a("div",[t._v("@2020 ledu All Rights Reserved. (湘ICP备20088308号-1) ")])]),a("div",{staticClass:"topAnchor",on:{click:t.topAnchor}},[a("div",{class:t.tops?"but":""},[t._v(" TOP ")])])],1)},e=[function(){var t=this,n=t.$createElement,i=t._self._c||n;return i("div",{staticClass:"logo"},[i("img",{attrs:{src:a("aca7"),alt:""}})])}],s=(a("6c7b"),{methods:{diffusion:function(t,n,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"rgba(0, 0, 0, 0.1)",e=document.createElement("canvas"),s=t.offsetWidth,o=t.offsetHeight,l=n-t.getBoundingClientRect().x,c=a-t.getBoundingClientRect().y,d=0;e.width=s,e.height=o,Object.assign(e.style,{position:"absolute",top:0,opacity:1,transition:"0.5s opacity",left:0}),t.appendChild(e);var r=e.getContext("2d");r.fillStyle=i,function n(){r.clearRect(0,0,s,o),r.beginPath(),r.arc(l,c,d,0,2*Math.PI,!1),r.fill(),d+=s/20;var a=s===o?1.412*s:Math.sqrt(s*s+o*o);d<=a?window.requestAnimationFrame((function(){n()})):(e.style.opacity=0,setTimeout((function(){r.clearRect(0,0,s,o),t.removeChild(e)}),500))}()}}}),o={name:"tabbar",mixins:[s],data:function(){return{show:!0,lang:!1,id:0,files:"",tops:!1,tabBarArr:[{id:0,name:this.$t("navigate.首页"),idname:"home"},{id:1,name:this.$t("navigate.项目介绍"),idname:"intr"},{id:2,name:this.$t("navigate.使命愿景"),idname:"visi"},{id:3,name:this.$t("navigate.项目优势"),idname:"adva"},{id:4,name:this.$t("navigate.应用场景"),idname:"apps"},{id:5,name:this.$t("navigate.团队介绍"),idname:"team"},{id:6,name:this.$t("navigate.发展规划"),idname:"plan"},{id:7,name:this.$t("navigate.基金会"),idname:"foun"},{id:8,name:this.$t("navigate.白皮书")}]}},methods:{switchTo:function(t){if(this.id=t.id,t.id<8){var n=document.querySelector("#"+t.idname).offsetTop;window.scrollBy({top:n,left:0,behavior:"smooth"})}else if(8==t.id){var a="";a=this.lang?"pdf/LOD白皮书.pdf":"pdf/LOD Chain Project white paper.pdf",window.open(a)}},language:function(t){1==t?localStorage.setItem("lang","zh"):localStorage.setItem("lang","en"),window.location.reload()},topAnchor:function(){window.scrollTo({top:0,left:0,behavior:"smooth"})},windowScroll:function(){var t=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;this.tops=t>0}},mounted:function(){var t=localStorage.getItem("lang");this.lang="en"!=t,window.addEventListener("scroll",this.windowScroll)}},l=o,c=(a("ee01"),a("2877")),d=Object(c["a"])(l,i,e,!1,null,"9e21b872",null);n["default"]=d.exports},"36bd":function(t,n,a){"use strict";var i=a("4bf8"),e=a("77f1"),s=a("9def");t.exports=function(t){var n=i(this),a=s(n.length),o=arguments.length,l=e(o>1?arguments[1]:void 0,a),c=o>2?arguments[2]:void 0,d=void 0===c?a:e(c,a);while(d>l)n[l++]=t;return n}},6733:function(t,n,a){},"6c7b":function(t,n,a){var i=a("5ca1");i(i.P,"Array",{fill:a("36bd")}),a("9c6c")("fill")},aca7:function(t,n,a){t.exports=a.p+"img/logo.3bfab2cd.jpg"},ee01:function(t,n,a){"use strict";var i=a("6733"),e=a.n(i);e.a}}]);
//# sourceMappingURL=chunk-956e9a70.5e984b15.js.map