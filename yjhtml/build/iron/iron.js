define("iron/iron",["zepto","module/scratch"],function(t,n,e){"use strict";function i(){this.scratch=null,this.one=!0,this._init.apply(this,arguments)}var o=t("zepto"),a="click",r=t("module/scratch");o.os.phone&&(a="tap"),i.prototype={_resetFont:function(){var t=window,n=t.innerWidth<=320?320:t.innerWidth,e=100*(n/320);document.documentElement.style.fontSize=e+"px"},initScratch:function(t){function n(n){e.one&&(e.one=!1,o.ajax({type:"POST",url:"/market/gangtiexia/drawlottery",data:{juid:curjujuid,jukey:jujukey},success:function(t){t=JSON.parse(t);var n=t.state,e="thanks@2x";e=1e4==n?"helmet@2x":"thanks@2x",o("#iron").attr("style","background-image: url("+ASSET+"img/iron/"+e+".png);background-size:contain;")}})),n>90&&1e4==t&&0==o(".smFrom").length&&(o("body").append('<div class="smFrom"><div class="ipt"><input type="tel" style="outline:none;" placeholder="输入您的手机号" class="tel" id="J_tel"/></div><div class="act"><button id="sbtTel"  style="outline:none;" class="sbt"></button></div></div>'),o("#sbtTel").on(a,function(){var t=o("#J_tel").val(),n=/^0?1[3|4|5|8][0-9]\d{8}$/;return""!=t&&n.test(t)?void o.ajax({type:"POST",url:"/market/gangtiexia/recordtelephone",data:{juid:curjujuid,jukey:jujukey,tel:t},success:function(t){t=JSON.parse(t),alert(t.message)}}):void alert("手机号不合法")}))}var e=this;if(!e.scratch){var i=o("#iron").width();e.scratch=new r("iron",ASSET+"img/iron/start@2x.png","image",i,i,n)}if(console.log(t),"undefined"!=typeof t){var s="op";e.scratch.init(ASSET+"img/iron/"+s+".png","image");var c=document.getElementById("freshBtn");c&&(c.onclick=function(){e.scratch.init(e.getRandomTicket(),"image")})}},lotterAjax:function(){var t=this;t.initScratch(!0)},pushContact:function(){},getRandomTicket:function(){var t=[ASSET+"img/iron/thanks@2x.png"];return console.log(Math.floor(Math.random()*t.length)),t[Math.floor(Math.random()*t.length)]},_init:function(){var t=this;setTimeout(function(){t._resetFont(),o(".wrap").show(),t.lotterAjax()},0)}},e.exports=new i});