define("game/poto",["zepto","flipsnap","module/poto/wish","module/poto/invite"],function(n,e,i){"use strict";function t(){var n=window.innerWidth;p.scene.width(n),p.scene.height(window.innerHeight),p.viewport.width(3*n)}function o(){var n=r(".pointer span");window.flipsnap=s(".viewport",{distance:window.innerWidth,transitionDuration:100}),flipsnap.element.addEventListener("fstouchstart",function(n){r("#J_myfri").css("display","none")},!1),flipsnap.element.addEventListener("fspointmove",function(){n.filter(".current").removeClass("current"),n.eq(flipsnap.currentPoint).addClass("current")},!1)}var r=n("zepto"),s=n("flipsnap");window.poto={};var p={container:r(".container"),scene:r(".scene"),viewport:r(".viewport")};t(),o();var a=(n("module/poto/wish"),n("module/poto/invite"));a.init()});