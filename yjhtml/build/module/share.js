define("module/share",["zepto"],function(s,e,o){function a(){function s(){var s=o.J_shareDialog;s.hasClass("slideDownRetourn")?(s.removeClass("slideDownRetourn").addClass("slideDown"),s.css("display","none")):(s.css("display","block"),s.removeClass("slideDown").addClass("slideDownRetourn"))}var e={},o={J_shareDialog:n("#J_shareDialog"),shareBtn:n("#J_shareBtn"),close:n("#J_close")};return e.init=function(){o.shareBtn.on("tap",function(e){return setTimeout(function(){s()},100),!1}),o.J_shareDialog.on("tap",function(){return!1}),n(document).on("tap",function(s){if(!n(s.target).hasClass("mod-share")){var e=o.J_shareDialog;e.removeClass("slideDownRetourn").addClass("slideDown")}}),o.close.on("tap",function(s){if(!n(s.target).hasClass("mod-share")){var e=o.J_shareDialog;e.removeClass("slideDownRetourn").addClass("slideDown"),setTimeout(function(){e.css("display","none")},400)}})},e}var n=s("zepto"),t=navigator.userAgent.toLowerCase(),i=(t.match(/.*?(weibo\_\_([0-9.]+))\s*/),t.match(/.*?(micromessenger\/([0-9.]+))\s*/),a());i.init()});