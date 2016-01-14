define(function(require, exports, module) {

  /**
   * @author <%= author.name %>
   * @version <%= version %>
   */

  'use strict';

  var $ = require('zepto');
  var Util = require('commons/js/util');

  function Page() {
    this.init.apply(this, arguments);
  }

  Page.prototype = {
    init: function () {
      Util.initDownload();
    },
    // 加载数据
    loadData: function (conf) {
      var self = this;
      console.log(hello({name: 'world'}));
    },
    // 时间绑定
    bindEvent: function () {
      var self = this;
    }
  };

  module.exports = Page;
});