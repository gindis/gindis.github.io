define("invite/downapp",["zepto","module/base"],function(o,n,e){var i=o("zepto"),t=o("module/base");e.exports=function(){if(i(".promotion-bar").length>0&&i(".container").css("paddingBottom","50px"),"undefined"!=typeof jujuClient&&"juju"!=jujuClient&&window.innerWidth<765&&i(".promotion-bar").css("display","block"),!t.client.weixin&&!t.client.weibo){var o=i(".promotion-bar .btn");o&&(i.os.android?o.attr("href",t.market.andorid):o.attr("href",t.market.ios))}}});