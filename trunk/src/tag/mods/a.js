define(function(require, exports, module) {

  /**
   * @author <%= author.name %>
   * @version <%= version %>
   */

  'use strict';


  function Mod() {
    this.init.apply(this, arguments);
  }

  Mod.prototype = {
    init: function () {
      var self = this;
      self._loadData();
      self._bindEvent();
    },
    // 加载数据
    _loadData: function () {
      var self = this;
    },
    // 事件绑定
    _bindEvent: function () {
      var self = this;
    }
  };

  module.exports = Mod;
});