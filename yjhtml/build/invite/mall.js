define("invite/mall",["zepto","widget/mask","widget/dialog","widget/fastclick","./scroll","./home/user-render","./home/last-order-render","./mall/goods-render","./mall/goods-list-render","widget/net"],function(e,t,r){function a(){k.get("/invite/lastorder",function(e){var t=b(e);_.append(t),new h("J_lastOrder"),n(x)})}function n(e,t){k.get("/invite/productlist",{page:e},function(r){if(0==r.hasnext?i():d(),L=!1,r.userScore=F,t)return t(r);var a=w(r);_.append(a),1==e&&s()})}function i(){var e=v("#J_goodsLoad");e.addClass("disable"),e.html("没有更多了눈_눈")}function o(){var e=v("#J_goodsLoad");e.html("拼命加载中(˶‾᷄ ⁻̫ ‾᷅˵)")}function d(){var e=v("#J_goodsLoad");e.html("点击查看更多(๑╹ڡ╹)╭")}function s(){var e=v("#J_goodsContainer"),t=v("#J_goodsLoad");t.on("tap",function(){return L?!1:(L=!0,t.hasClass("disable")?!1:(o(),x+=1,void n(x,function(t){var r=y(t);e.append(r)})))})}function l(){v("#J_orderForm").find("input").on("input",function(e){var t=v(e.target);t.hasClass("error-tip")&&t.removeClass("error-tip")}),v("#J_orderForm").find("textarea").on("input",function(e){var t=v(e.target);t.hasClass("error-tip")&&t.removeClass("error-tip")}),v("#J_orderForm").submit(function(e){for(var t,r=v(e.target),a=r.serializeArray(),n=!1,i=0;i<a.length;i++)if(t=a[i],""==t.value){n=!0;break}if(n)return u(t),!1;var o=r.serialize(),d=c(o);return d.address=d.user_province+"省"+d.user_city+"市"+d.address,delete d.user_province,delete d.user_city,d.uid=z,k.post("/invite/createorder",d,function(e){var e=parseInt(e);U.hide(),e>0?(alert("兑换成功~请耐心等待我们给你发货，详情咨询JUJU小助手"),location.reload()):alert("哎呀喝~好像哪里出错了的感觉，再试一次吧눈_눈")},function(){alert("哎呀喝~好像哪里出错了的感觉，再试一次吧눈_눈")}),!1})}function c(e){for(var t=e.split("&"),r={},a=0;a<t.length;a++){var n=t[a],i=n.split("=");r[i[0]]=i[1]}return r}function u(e){var t=v("#J_"+e.name);t.addClass("error-tip")}function p(){A.show(),O.render(S)}var v=e("zepto"),f=e("widget/mask"),m=e("widget/dialog"),g=e("widget/fastclick");g(document.body);var h=e("./scroll"),_=v("#J_container"),J=e("./home/user-render"),b=e("./home/last-order-render"),w=e("./mall/goods-render"),y=e("./mall/goods-list-render"),x=1,C=e("widget/net"),k=new C({uid:10000143}),F=0,z=0;k.get("/invite/inviteuserinfo",function(e){F=parseInt(e.userdata.score),z=e.userdata.uid;var t=J(e);_.html(t),a()});var L=!1,U=new f,I=new m;U.mask.on("hide",function(){I.close()});var j='<div class="J_goodForm">    <form id="J_orderForm">      <input type="hidden" value="{{pid}}" name="pid" />      <input type="text" class="col2" id="J_consignee" name="consignee" tabindex="1" placeholder="收货人姓名" />      <input type="number" class="col2" id="J_tel" name="tel" tabindex="2" placeholder="手机号码" />      <input type="text" class="col1 col-extar" id="J_user_province" name="user_province" tabindex="3" placeholder="省" />      <input type="text" class="col1" id="J_user_city" name="user_city" tabindex="4" placeholder="市" />      <textarea class="col2" id="J_address" name="address" tabindex="5" placeholder="详细地址"></textarea>      <div class="btns">        <input class="dialog-close" type="button" value="取消" />        <input type="submit" value="确定兑换" />      </div>      <p>仔细填写自己的收获信息哟</p>    </form>  </div>',A=new f,O=new m;A.mask.on("hide",function(){O.close()});var S='<div class="disable-buy-tip">      <p>基分还差一点啊需要扔更多肥皂呢</p>      <p>邀请JI友来JUJU吧</p>      <a href="javascript:;" class="dialog-close">Fighting! </a>    </div>';v(document).on("tap",".buy",function(e){var t=v(e.target),r=t.attr("data-id"),a=t.attr("data-stock");return 0==a?!1:t.hasClass("disable")?(p(),!1):(U.show(),j=j.replace("{{pid}}",r),I.render(j),void l())}),v(document).on("tap",".dialog-close",function(e){U.hide(),A.hide()})});