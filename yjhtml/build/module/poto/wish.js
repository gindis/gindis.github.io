define("module/poto/wish",["zepto","tmpl","iscroll","module/poto/net","module/poto/game","module/poto/util"],function(t,o,i){"use strict";function n(t){for(var o=0,i=0;i<t.length;i++){var n=t.charCodeAt(i);o+=n>=0&&128>=n?1:2}return o}function e(t,o){o.on("tap",function(){p.showDialog(t,{}),r(".ipt").on("tap",function(){var t=r(this);t.focus()}),r("#J_sbt").on("tap",function(){c.dialog.removeClass("in"),c.backdrop.removeClass("in")}),r("#mywish").on("keyup",function(){var t=r(this),o=30-Math.round(n(t.val())/2);r("#J_fnum").html(o)}),r("#sendwish").on("tap",function(){var t=r("#J_fnum").html();if(0>t)return void alert("输入内容超出"+(~t+1)+"个字。");var o=c.JwishList.find(".signature").eq(0),i=r("#mywish").val();return""==i?void alert("说出你的二次元愿望。"):void m("doDream",{content:i},function(t){var n=t.update,e="";0==n?(e=f.success,o.html(i)):1==n?(e=f.update,o.html(i)):e=f.fail,p.showDialog("log",{msg:e})})})})}function a(t){m("getDream",{},function(o){c.JwishList.append(s("tmpl-dialog-"+t,o)),r(".load").remove(),new d("#J_wishScroll",{mouseWheel:!0}),r("#J_wishScroll .btn-inverse").on("tap",function(){var t=r(this),o=t.parents(".inner"),i=(o.attr("data-uid"),o.attr("data-id"));m("favDream",{dreamid:i},function(o){var i=c.JwishHead.find(".num"),n=null;o.isfav?(t.removeClass("btn-fav").addClass("btn-default"),n=Number(i.text())-1,0>n?n=0:""):(t.removeClass("btn-default").addClass("btn-fav"),n=Number(i.text())+1)})})})}function l(){var t="mywish";m("myDream",{},function(o){var i=[o];c.JwishList.append(s("tmpl-dialog-"+t,i)),a(t)})}function u(){l(),e("wish",c.btnPop)}var r=t("zepto"),s=t("tmpl"),d=t("iscroll"),m=t("module/poto/net"),p=(t("module/poto/game"),t("module/poto/util")),c={btnPop:r("#J_btnPop"),dialog:r("#J_dialog"),dialogMain:r("#J_dialog .modal-main"),backdrop:r(".modal-backdrop"),JlotterNum:r("#J_lotterNum"),JinviteNum:r("#J_inviteNum"),JwishHead:r("#J_wishHead"),JwishList:r("#J_wishList")},f={success:"许愿成功",update:"愿望更新了哟",fail:"重新提交试试",wish:"你已经许过愿望"};m("me",{},function(t){c.JlotterNum.html(t.prizecounter),c.JinviteNum.html(t.invitecounter),window.poto.prizeNum=t.prizecounter,window.poto.inviteNum=t.invitecounter}),u()});