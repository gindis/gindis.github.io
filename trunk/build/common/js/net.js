define("common/js/net",["zepto","common/js/util","xsdk/core","xsdk/user","component/js/dialog"],function(e,o,t){"use strict";function i(e){"object"==typeof e?this.option=e:this.option={type:"GET",dataType:"jsonp"}}var n=e("zepto"),a=e("common/js/util"),c=e("xsdk/core"),f=e("xsdk/user"),s=new a,p=location.host,l=s.getRequest(!1),d=(l.access_token,e("component/js/dialog")),u={sub:"unicom/sub"};"work.xiami.com"==p||"h5.xiami.com"==p||"im.local.xiami.com"==p?c.init({appkey:"09bef203bfa02bfbe3f1cfd7073cb0f3"}):c.init({appkey:"09bef203bfa02bfbe3f1cfd7073cb0f3"});navigator.userAgent.match(/\sAliApp\(([^\/]+)\/([\d\.]+)\)/);i.prototype={ajax:function(e,o,t,i){e=u[e],"function"==typeof o&&(i=t,t=o,o=null);var a="263b63d85992a30cc6030aff03c9dfd0";s.getCookie("app_key")&&(a=s.getCookie("app_key")),o=n.extend({v:"5.0",app_key:"0974582dcf25dcc87b23584e03f76dfa",purview_api_key:a},o),c.load(e,o,function(e,o){var i="刷新页面",a="数据不存在";if(e){var c=e.state;a=e.message?e.message:"数据不存在",12001==c&&(a="你未登录。",i="前往登录》")}if(null!=o)t&&t(o);else{new d({title:"提示",content:a,button:[{title:i}],callback:function(e,o){var t=n(".ui-dialog-notice");if(t&&t.remove(),0==o){if(12001==c)return void f.login(location.href);location.reload()}}})}})}},t.exports=i});