define(function(require, exports, module) {

  'use strict';
  
  var $ = require('zepto');

  // 默认模板
  var _loadingTpl = function(data) {
    return '<div class="ui-dialog ui-dialog-notice show">' +
      '<div class="ui-dialog-cnt">' +
      '<i class="ui-loading-bright"></i>' +
      '<p>' + data.content + '</p>' +
      '</div>' +
      '</div>';
  }

  // 默认参数
  var defaults = {
    content: '加载中...'
  }

  // 构造函数
  var Loading = function(option) {
    var self = this;
    var element = _loadingTpl(option);

    this.element = $(element);
    this.element.appendTo('body');
    this.option = $.extend(defaults, option);
    this.show();
  }
  Loading.prototype = {
    show: function() {
      var e = $.Event('loading:show');
      this.element.trigger(e);
      this.element.show();
    },
    hide: function() {
      var e = $.Event('loading:hide');
      this.element.trigger(e);
      this.element.remove();
    }
  }

  module.exports = Loading;

});