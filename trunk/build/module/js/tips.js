define("module/js/tips",["zepto","../views/tips-render"],function(e,t,i){"use strict";var n=e("zepto"),s=e("../views/tips-render"),o={content:"",stayTime:1e3,type:"info",callback:function(){}},r=function(e){var t=this;t.option=n.extend(o,e);var i=s(t.option);this.element=n(i),this.element.appendTo("body"),this.elementHeight=this.element.height(),this.element.css({"-webkit-transform":"translateY(100%)"}),setTimeout(function(){t.element.css({"-webkit-transition":"all .5s"}),t.show()},20)};r.prototype={show:function(){var e=this;e.element.trigger(n.Event("tips:show")),this.element.css({"-webkit-transform":"translateY(0)"}),e.option.stayTime>0&&setTimeout(function(){e.hide()},e.option.stayTime)},hide:function(){var e=this;e.element.trigger(n.Event("tips:hide")),this.element.css({"-webkit-transform":"translateY(100%)"}),setTimeout(function(){e.element.remove()},500)}},i.exports=r});