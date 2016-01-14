define(function(require, exports, module) {

  /**
   * @author gindis.wx
   * @version 0.0.1
   */

  'use strict';

  var $ = require('zepto');
  var Util = require('commons/js/util');
  var Modal = require('common/js/modal');
  var Loading = require('common/js/Loading');

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
        self.tips('', '通过以下方式纠正号码', [{
          title: '取消'
        }, {
          title: '确认'
        }], function(d, id) {
          if (id == 1) {
            
          }
        });
      });
      Util.initDownload();
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
    // 事件绑定
    bindEvent: function() {
      var self = this;
    }
  };

  module.exports = Page;
});