define("tag/index",["common/js/util","common/js/jsbridge","module/js/net","module/js/loading","module/js/modal","./views/tag-render","./views/item-render","module/js/fastclick"],function(e,t,a){"use strict";function i(){this.init.apply(this,arguments)}var s,n,o,d,_,c,r,l,G,u=e("common/js/util"),m=e("common/js/jsbridge"),L=e("module/js/net"),O=e("module/js/loading"),A=e("module/js/modal");l=50,G=!1;var N=e("./views/tag-render"),g=e("./views/item-render"),p=e("module/js/fastclick");p(document.body),o=new O({content:"加载中..."}),s=new L,n=new Object,n=u.getRequest(!1),d=n.id,_=n.deviceType,c=n.accessToken,r="click",($.os.android||$.os.ios)&&(r="tap"),"undefined"==typeof _GLOBAL_CONFIG_&&(window._GLOBAL_CONFIG_={}),d&&(_GLOBAL_CONFIG_.id=d),c&&(_GLOBAL_CONFIG_.accessToken=c),_GLOBAL_CONFIG_.PAGE={startRow:0,startTime:null,hasNextPage:!0},i.prototype={init:function(){var e=this;e._loadData(),e._bindEvent()},_loadData:function(e){s.ajax("newListByTag",{tagId:_GLOBAL_CONFIG_.id,accessToken:_GLOBAL_CONFIG_.accessToken},function(e){var t=$("body");t.append(N(e)),o.hide(),_GLOBAL_CONFIG_.PAGE.startTime=e.firstTime,_GLOBAL_CONFIG_.PAGE.hasNextPage=e.hasNextPage,_GLOBAL_CONFIG_.PAGE.startRow+=e.pageSize})},_bindEvent:function(){var e=this;_&&$(".link").live("click",function(e){e.preventDefault();var t,a,i=$(this);t=i.attr("data-type"),a=i.attr("data-id"),"user"==t?m.user(a):"product"==t?m.product({id:a}):"dynamic"==t&&m.dynamic({id:a})}),$(".J_fav").live(r,function(t){t.preventDefault();var a=$(this),i={},n="praise";i.id=a.attr("data-id"),a.hasClass("liked")&&(n="cancelPraise"),_?s.ajax(n,i,function(e){a.hasClass("liked")?(a.removeClass("liked"),a.html(Number(a.text())-1)):(a.addClass("liked"),a.html(Number(a.text())+1))}):e.tipsReg()}),$(window).scroll(function(){var e=$(window).scrollTop(),t=parseFloat($(window).height())+parseFloat(e),a=$(document).height();!G&&t>=a-l&&_GLOBAL_CONFIG_.PAGE.hasNextPage&&(G=!0,s.ajax("newListByTag",{tagId:_GLOBAL_CONFIG_.id,accessToken:_GLOBAL_CONFIG_.accessToken,startRow:_GLOBAL_CONFIG_.PAGE.startRow,startTime:_GLOBAL_CONFIG_.PAGE.startTime},function(e){var t=g(e);$("#columns").append(t),_GLOBAL_CONFIG_.PAGE.startTime=e.firstTime,_GLOBAL_CONFIG_.PAGE.hasNextPage=e.hasNextPage,_GLOBAL_CONFIG_.PAGE.startRow+=e.pageSize,G=!1}))})},tipsReg:function(){new A({content:"需要注册才能执行该操作",button:[{title:"取消"},{title:"注册"}],callback:function(e,t){1==t&&(location.href="./reg.html")}})}},a.exports=i});