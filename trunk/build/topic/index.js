define("topic/index",["./mods/a","./views/hello-render"],function(n,o,i){"use strict";function t(){this.init.apply(this,arguments)}var e=(n("./mods/a"),n("./views/hello-render"));t.prototype={init:function(){var n=this;n._loadData(),n._bindEvent()},_loadData:function(n){console.log("this is load data funcion");console.log(e({name:"world"}))},_bindEvent:function(){console.log("this is bind event function.")}},i.exports=t});