define(function(require, exports, module) {

  'use strict';
  
  var $ = require('zepto');
  var modalTpl = require('../views/modal-render');

  var evtClick = 'click';
  if ($.os.android || $.os.ios)  {
    evtClick = 'tap';
  }
  // 默认参数
  var defaults = {
    title: '',
    content: '',
    button: [{
      'title': '确认'
    }],
    select: 0,
    allowScroll: false,
    callback: function() {

    }
  }

  // 防止冒泡
  function _stopScroll() {
    return false;
  }

  // 构造函数
  var Modal = function(option) {
    this.option = $.extend(defaults, option);
    var el = modalTpl(this.option);
    this.element = $(el);
    this.element.appendTo('body');
    this.button = this.element.find('[data-role="button"]');
    this._bindEvent();
    this.toggle();
  }

  Modal.prototype = {
    _bindEvent: function() {
      var self = this;
      self.button.on(evtClick, function() {
        var index = $(self.button).index($(this));
        self.option.callback('button', index);
        var e = $.Event('modal:action');
        e.index = index;
        self.element.trigger(e);
        self.hide.apply(self);
      });
    },
    toggle: function() {
      if (this.element.hasClass('show')) {
        this.hide();
      } else {
        this.show();
      }
    },
    show: function() {
      var self = this;
      self.option.callback('show');
      self.element.trigger($.Event('modal:show'));
      self.element.addClass('show');
      this.option.allowScroll && self.element.on('touchmove', _stopScroll);
    },
    hide: function() {
      var self = this;
      self.option.callback('hide');
      self.element.trigger($.Event('modal:hide'));
      self.element.off('touchmove', _stopScroll);
      self.element.removeClass('show');
      self.element.remove();
      self = null;
    }
  }

  module.exports = Modal;

});