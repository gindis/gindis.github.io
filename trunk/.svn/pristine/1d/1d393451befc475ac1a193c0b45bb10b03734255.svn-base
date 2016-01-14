define(function(require, exports, module) {

  /**
   * @author gindis.wx
   * @version 
   */

  'use strict';

  var a = require('./mods/a');
  var hello = require('./views/hello-render');

  function P() {
    this.init.apply(this, arguments);
  }

  P.prototype = {
    init: function () {
      var self = this;
      self._loadData();
      self._bindEvent();
    },
    // 加载数据
    _loadData: function (conf) {
      console.log('this is load data funcion');
      var self = this;
      console.log(hello({name: 'world'}));
    },
    // 时间绑定
    _bindEvent: function () {
      console.log('this is bind event function.');
      var self = this;
    }
  };

  module.exports = P;
});