define("game/start",["zepto","module/preloader"],function(e,o,t){"use strict";var g=e("zepto"),n=e("module/preloader"),p=n.create(function(e,o){switch(e){case"error":break;case"complete":setTimeout(function(){seajs.use("game/"+config.gameName,function(){g("#J_loading").remove()})},420);break;case"progress":var t=Math.round(100*o)+"%";document.querySelector("#J_pronum").innerHTML=t,document.querySelector("#J_proCur").style.width=t}});p.addRange([ASSET+"/img/logo.png",ASSET+"/img/attr_icon.png",ASSET+"/img/attr_tit.png",ASSET+"/img/poto/bg.png",ASSET+"/img/poto/btn-star.png",ASSET+"/img/poto/egg.png",ASSET+"/img/poto/envelope-body.png",ASSET+"/img/poto/envelope-header.png",ASSET+"/img/poto/gamestart.png",ASSET+"/img/poto/invite-box.png",ASSET+"/img/poto/prize.png",ASSET+"/img/poto/leg.png",ASSET+"/img/poto/recommend-bg.png",ASSET+"/img/poto/fail.png"]),p.load()});