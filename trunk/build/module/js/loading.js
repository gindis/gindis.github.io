define("module/js/loading",["zepto"],function(e,t,i){"use strict";var n=e("zepto"),o=function(e){return'<div class="dialog dialog-notice show"><div class="dialog-cnt"><i class="loading-bright"></i><p>'+e.content+"</p></div></div>"},s={content:"加载中..."},d=function(e){var t=o(e);this.element=n(t),this.element.appendTo("body"),this.option=n.extend(s,e),this.show()};d.prototype={show:function(){var e=n.Event("loading:show");this.element.trigger(e),this.element.show()},hide:function(){var e=n.Event("loading:hide");this.element.trigger(e),this.element.remove()}},i.exports=d});