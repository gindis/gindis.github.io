define(function(require, exports, module) {

  'use strict';
  var $ = require('zepto');
  var tipsTpl = require('../views/tips-render');

  // 默认参数
  var defaults = {
    content: '',
    stayTime: 1000,
    type: 'info',
    callback: function() {}
  }

  // 构造函数
  var Tips = function(option) {
    var self = this;
    self.option = $.extend(defaults, option);
    var el = tipsTpl(self.option);
    this.element = $(el);
    this.element.appendTo('body');
    this.elementHeight = this.element.height();
    this.element.css({
      "-webkit-transform": "translateY(100%)"
    });
    setTimeout(function() {
      self.element.css({
        "-webkit-transition": "all .5s"
      });
      self.show();
    }, 20);

  }
  Tips.prototype = {
    show: function() {
      var self = this;
      // self.option.callback("show");
      self.element.trigger($.Event("tips:show"));
      this.element.css({
        "-webkit-transform": "translateY(0)"
      });
      if (self.option.stayTime > 0) {
        setTimeout(function() {
          self.hide();
        }, self.option.stayTime)
      }
    },
    hide: function() {
      var self = this;
      self.element.trigger($.Event("tips:hide"));
      this.element.css({
        "-webkit-transform": "translateY(100%)"
      });
      setTimeout(function() {
        self.element.remove();
      }, 500)
    }
  }

  module.exports = Tips;

});