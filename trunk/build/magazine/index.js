define("magazine/index",["common/js/util","common/js/jsbridge","module/js/net","module/js/loading","module/js/modal","./views/magazine-render","./views/item-render","module/js/fastclick"],function(e,t,a){"use strict";function i(){this.init.apply(this,arguments)}var n,s,o,d,_,r,c,l,m,G=e("common/js/util"),u=e("common/js/jsbridge"),O=e("module/js/net"),L=e("module/js/loading"),A=e("module/js/modal");l=50,m=!1;var g=e("./views/magazine-render"),N=e("./views/item-render"),p=e("module/js/fastclick");p(document.body),o=new L({content:"加载中..."}),n=new O,s=new Object,s=G.getRequest(!1),d=s.id,_=s.deviceType,r=s.accessToken,c="click",($.os.android||$.os.ios)&&(c="tap"),"undefined"==typeof _GLOBAL_CONFIG_&&(window._GLOBAL_CONFIG_={}),d&&(_GLOBAL_CONFIG_.id=d),r&&(_GLOBAL_CONFIG_.accessToken=r),_GLOBAL_CONFIG_.PAGE={startRow:0,startTime:null,hasNextPage:!0},i.prototype={init:function(){var e=this;e._loadData(),e._bindEvent()},_loadData:function(e){n.ajax("magazineDetail",{magazineId:_GLOBAL_CONFIG_.id,accessToken:_GLOBAL_CONFIG_.accessToken},function(e){var t=$("body");t.append(g(e)),o.hide();var a=e.magazineItems;_GLOBAL_CONFIG_.PAGE.startTime=a.firstTime,_GLOBAL_CONFIG_.PAGE.hasNextPage=a.hasNextPage,_GLOBAL_CONFIG_.PAGE.startRow=a.pageSize})},_bindEvent:function(){var e=this;_&&$(".link").live("click",function(e){e.preventDefault();var t,a,i=$(this);t=i.attr("data-type"),a=i.attr("data-id"),"user"==t?u.user(a):"product"==t?u.product({id:a}):"dynamic"==t&&u.dynamic({id:a})}),$(".J_fav").live(c,function(t){t.preventDefault();var a=$(this),i={},s="praise";i.id=a.attr("data-id"),a.hasClass("liked")&&(s="cancelPraise"),_?n.ajax(s,i,function(e){a.hasClass("liked")?(a.removeClass("liked"),a.html(Number(a.text())-1)):(a.addClass("liked"),a.html(Number(a.text())+1))}):e.tipsReg()}),$(window).scroll(function(){var e=$(window).scrollTop(),t=parseFloat($(window).height())+parseFloat(e),a=$(document).height();!m&&t>=a-l&&_GLOBAL_CONFIG_.PAGE.hasNextPage&&(m=!0,n.ajax("magazineDetail",{magazineId:_GLOBAL_CONFIG_.id,accessToken:_GLOBAL_CONFIG_.accessToken,startRow:_GLOBAL_CONFIG_.PAGE.startRow,startTime:_GLOBAL_CONFIG_.PAGE.startTime},function(e){var t=N(e);$("#columns").append(t);var a=e.magazineItems;_GLOBAL_CONFIG_.PAGE.startTime=a.firstTime,_GLOBAL_CONFIG_.PAGE.hasNextPage=a.hasNextPage,_GLOBAL_CONFIG_.PAGE.startRow+=a.pageSize,m=!1}))})},tipsReg:function(){new A({content:"需要注册才能执行该操作",button:[{title:"取消"},{title:"注册"}],callback:function(e,t){1==t&&(location.href="./reg.html")}})}},a.exports=i});