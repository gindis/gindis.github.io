define("module/flexible",[],function(e,t,i){"use strict";function n(){m.rem=l.getBoundingClientRect().width/16,l.style.fontSize=m.rem+"px"}var a,m=window,r=m.navigator.appVersion.match(/iphone/gi)?m.devicePixelRatio:1,d=1/r,l=document.documentElement,o=document.createElement("meta");if(m.dpr=r,m.addEventListener("resize",function(){clearTimeout(a),a=setTimeout(n,300)},!1),l.setAttribute("data-dpr",r),o.setAttribute("name","viewport"),o.setAttribute("content","initial-scale="+d+", maximum-scale="+d+", minimum-scale="+d+", user-scalable=no"),l.firstElementChild)l.firstElementChild.appendChild(o);else{var c=document.createElement("div");c.appendChild(o),document.write(c.innerHTML)}i.exports=n});