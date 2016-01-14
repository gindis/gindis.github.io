define("module/js/modal",["zepto","../views/modal-render"],function(t,e,o){"use strict";function n(){return!1}var i=t("zepto"),l=t("../views/modal-render"),s="click";(i.os.android||i.os.ios)&&(s="tap");var a={title:"",content:"",button:[{title:"确认"}],select:0,allowScroll:!1,callback:function(){}},h=function(t){this.option=i.extend(a,t);var e=l(this.option);this.element=i(e),this.element.appendTo("body"),this.button=this.element.find('[data-role="button"]'),this._bindEvent(),this.toggle()};h.prototype={_bindEvent:function(){var t=this;t.button.on(s,function(){var e=i(t.button).index(i(this));t.option.callback("button",e);var o=i.Event("modal:action");o.index=e,t.element.trigger(o),t.hide.apply(t)})},toggle:function(){this.element.hasClass("show")?this.hide():this.show()},show:function(){var t=this;t.option.callback("show"),t.element.trigger(i.Event("modal:show")),t.element.addClass("show"),this.option.allowScroll&&t.element.on("touchmove",n)},hide:function(){var t=this;t.option.callback("hide"),t.element.trigger(i.Event("modal:hide")),t.element.off("touchmove",n),t.element.removeClass("show"),t.element.remove(),t=null}},o.exports=h});