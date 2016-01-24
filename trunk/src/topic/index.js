define(function(require, exports, module) {

  /**
   * @author gindis.wx
   * @version 
   */

  'use strict';
  var Util = require('common/js/util');
  var Net = require('module/js/net');
  var Loading = require('module/js/loading');
  var net, req, loading, id;

  var topicdetail = require('./views/topicdetail-render');
  
  // 处理穿透事件冒泡
  // var attachFastClick = require('module/js/fastclick');
  // attachFastClick(document.body);
  
  // 加载页面
  loading = new Loading({
    content: '加载中...'
  });

  net = new Net();
  req = new Object();
  req = Util.getRequest(false);
  id = req['id'];

  if (typeof _GLOBAL_CONFIG_ === 'undefined') {
    window._GLOBAL_CONFIG_ = {};
  }
  console.log(id);
  if (id) {
    _GLOBAL_CONFIG_.id = id;
  }

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
      var self = this;
      self.getTopicDetail();
    },
    // 获取专题详情
    getTopicDetail: function () {
      var self = this;
      // 相似单品
      net.ajax('topicDetail', {
        id: _GLOBAL_CONFIG_.id
      }, function(res) {
        //console.log(res);
        var $body = $('body');
        $body.append(topicdetail(res));
        // if (res.type == 1)  { // 穿搭示范
        //   $body.appendTo(topicdetail(res));
        // } else if (res.type == 2) { // 搭配专题
        //   $body.appendTo(topicdetail(res));
        // } else if (res.type == 3) { // 单品合集
        //   $body.appendTo(topicdetail(res));
        // }

        loading.hide();
      });
    },
    // 绑定
    _bindEvent: function () {
      var self = this;
    }
  };

  module.exports = P;
});