define(function(require, exports, module) {

  /**
   * @author gindis.wx
   * @version 0.0.1
   */

  'use strict';

  function Mod() {
    this.init.apply(this, arguments);
  }

  Mod.prototype = {
    // 初始化
    init: function () {

    },
    // 加载数据
    loadData: function (conf) {
      var self = this;
    },
    // 时间绑定
    bindEvent: function () {
      var self = this;
    }
  };

  module.exports = Mod;
});