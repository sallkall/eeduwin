webpackJsonp([13],{"+V9T":function(t,s){},Hxhe:function(t,s,i){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=i("G/qF"),e=i("iNaQ"),n=i("l/JR"),r=i("jvWE"),c={name:"enhancement",data:function(){return{activeTabIdx:0,competitionList:[],voluteerList:[],pastList:[],swiperOptions:{spaceBetween:20,slidesPerView:3.2,mousewheel:!0,mousewheelControl:!0,roundLengths:!0,scrollbar:{el:".swiper-scrollbar",draggable:!0}}}},created:function(){this.initData()},methods:{selectTab:function(t){this.activeTabIdx=t},initData:function(){var t=this;Object(n.a)({url:"activity/home",params:{}}).then(function(s){if(200==s.code){var i=s.competitions?s.competitions:[],a=s.activities?s.activities:[],e=s.hisActivitys?s.hisActivitys:[];i=t.formatActivityData(i),a=t.formatActivityData(a),e=t.formatActivityData(e),t.competitionList=i,t.voluteerList=a,t.pastList=e}})},toEnhaDetail:function(t){this.$router.push({path:"/enhaDetail",query:{ano:t}})},formatActivityData:function(t){return t=t.map(function(t){var s=Object(r.c)(t.submitEndTs);return t.submitEndTsCn=s.dateCn,t.submitEndTsEn=s.dateEn,t})}},computed:{list:function(){return this.activeTabIdx?this.voluteerList:this.competitionList},tabList:function(){return[this.$t("enha.ourCompetitions"),this.$t("enha.ourVolunteers")]},zh:function(){return"zh"==this.$i18n.locale}},components:{CommonHeader:a.a,CommonFooter:e.a}},o={render:function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"app_container clearfix"},[i("div",{staticClass:"enha_top"},[i("CommonHeader"),t._v(" "),i("div",{staticClass:"enha_top_wrap"},[i("p",{staticClass:"page_title"},[t._v(t._s(t.$t("enha.enhaOpportunities")))]),t._v(" "),i("p",{staticClass:"page_desc"},[t._v(t._s(t.$t("enha.enhaOpportunitiesDesc")))]),t._v(" "),i("ul",{staticClass:"page_sub clearfix"},[i("li",{staticClass:"page_sub_li"},[i("p",[t._v(t._s(t.$t("enha.eEduWinCompetitions")))]),t._v(" "),i("span",[t._v(t._s(t.$t("enha.eEduWinCompetitionsDesc")))])]),t._v(" "),i("li",{staticClass:"page_sub_li"},[i("p",[t._v(t._s(t.$t("enha.eEduWinVolunteers")))]),t._v(" "),i("span",[t._v(t._s(t.$t("enha.eEduWinVolunteersDesc")))])])])])],1),t._v(" "),i("div",{staticClass:"tabs clearfix"},t._l(t.tabList,function(s,a){return i("span",{staticClass:"tab",class:t.activeTabIdx===a?"active":"",on:{click:function(s){return t.selectTab(a)}}},[t._v(t._s(s))])}),0),t._v(" "),i("div",{staticClass:"current_wrap clearfix"},[i("p",{staticClass:"current_wrap_title"},[t._v(t._s(t.activeTabIdx?t.$t("enha.currentVolunteers"):t.$t("enha.currentCompetitions")))]),t._v(" "),i("ul",{staticClass:"current_list clearfix"},[i("li",{staticClass:"current_li current_li_header"},[i("span",{staticClass:"left"},[t._v(t._s(t.$t("enha.list")))])]),t._v(" "),t._l(t.list,function(s){return i("li",{staticClass:"current_li",on:{click:function(i){return t.toEnhaDetail(s.activityNo)}}},[i("span",{staticClass:"left"},[t._v(t._s(t.zh?s.activityNmZh:s.activityNmEn))])])})],2)]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.pastList.length,expression:"pastList.length"}],staticClass:"past_wrap clearfix"},[i("p",{staticClass:"past_title"},[t._v(t._s(t.$t("enha.past")))]),t._v(" "),i("swiper",{ref:"mySwiper",staticClass:"past_list",attrs:{options:t.swiperOptions}},[t._l(t.pastList,function(s,a){return i("swiper-slide",{key:a,staticClass:"past_li"},[i("img",{attrs:{src:s.activityLogo},on:{click:function(i){return t.toEnhaDetail(s.activityNo)}}}),t._v(" "),i("p",[t._v(t._s(t.zh?s.activityNmZh:s.activityNmEn))]),t._v(" "),i("span",[t._v(t._s(t.zh?s.submitEndTsCn:s.submitEndTsEn))])])}),t._v(" "),i("div",{staticClass:"swiper-scrollbar",attrs:{slot:"scrollbar"},slot:"scrollbar"})],2)],1),t._v(" "),i("CommonFooter")],1)},staticRenderFns:[]};var l=i("VU/8")(c,o,!1,function(t){i("+V9T")},"data-v-7ee2a69e",null);s.default=l.exports}});