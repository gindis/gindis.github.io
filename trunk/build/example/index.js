define("example/index",["zepto","./views/hello-render","module/js/modal","module/js/loading"],function(n,o,t){"use strict";function i(){this.init.apply(this,arguments)}var e=n("zepto"),l=n("./views/hello-render"),a=n("module/js/modal"),s=(n("module/js/loading"),"click");(e.os.iphone||e.os.andorid)&&(s="tap"),i.prototype={init:function(){var n=this;e("#J_opendialog").on(s,function(){n.tips("","需要注册才能执行该操作",[{title:"取消"},{title:"注册"}],function(n,o){})})},loadData:function(n){console.log(l({name:"world"}))},tips:function(n,o,t,i){var e=this;e.tipsModal=new a({title:n,content:o,button:t,callback:function(n,o){"function"==typeof i&&i(n,o)}})},bindEvent:function(){}},t.exports=i});