define("page/topic",["zepto","module/base","module/share"],function(e,t,r){"use strict";var a=e("zepto"),o=e("module/base"),n="click";if(a.os.phone||a.os.tablet){{e("module/share")}n="tap"}else{var i={shareBtn:a("#J_shareBtn"),sina:a("#J_sina")};i.shareBtn.attr("href",i.sina.attr("href"))}var s=a(".promotion-bar .btn");o.client.weixin||o.client.weibo?s.attr("href",o.market.juju):a.os.android?s.attr("href",o.market.andorid):s.attr("href",o.market.ios);var h=a(".channel .btn").eq(0),m=a(".channel .btn").eq(1);h.attr("href",o.market.ios),m.attr("href",o.market.andorid),a("#J_more")&&a("#J_more").on(n,function(){a("#J_body").removeClass("open"),a(this).remove()})});