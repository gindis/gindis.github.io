define(function(require, exports, module) {

  /**
   * @author gindis.wx
   * @version 0.0.1
   */

  'use strict';

  var $ = require('zepto');
  var hello = require('./views/hello-render');
  var Modal = require('module/js/modal');
  var Loading = require('module/js/loading');

  var evtClick = 'click';
  if ($.os.iphone || $.os.andorid) {
    evtClick = 'tap';
  }

  function Page() {
    this.init.apply(this, arguments);
  }

  Page.prototype = {
    // 初始化
    init: function() {
      var self = this;
      $('#J_opendialog').on(evtClick, function() {
        self.tips('', '需要注册才能执行该操作', [{
          title: '取消'
        }, {
          title: '注册'
        }], function(d, id) {
          if (id == 1) {
            
          }
        });
      });
      
    },
    // 加载数据
    loadData: function(conf) {
      var self = this;
      console.log(hello({
        name: 'world'
      }));
    },
    tips: function(title, msg, btdata, _call) {
      var self = this;
      self.tipsModal = new Modal({
        title: title,
        content: msg,
        button: btdata,
        callback: function(d, id) {
          if (typeof _call == 'function') {
            _call(d, id);
          }
        }
      });
      return;
    },
    // 时间绑定
    bindEvent: function() {
      var self = this;
    }
  };

  module.exports = Page;
});