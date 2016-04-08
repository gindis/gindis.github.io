define(function(require, exports, module) {

  'use strict';

  var Util = require('common/js/util');
  var Jsbridge = require('common/js/jsbridge');
  var Net = require('module/js/net');
  var Loading = require('module/js/loading');
  var Modal = require('module/js/modal');
  var net, req, loading, id, deviceType, accessToken, evtClick, pageSize, firstTime, choose, range, loadLock;

  range = 50;
  loadLock = false;

  var categoryTpl = require('./views/category-render');
  var itemTpl = require('./views/item-render');

  // 处理穿透事件冒泡
  var attachFastClick = require('module/js/fastclick');
  attachFastClick(document.body);

  // 加载页面
  loading = new Loading({
    content: '加载中...'
  });

  net = new Net();
  req = new Object();
  req = Util.getRequest(false);
  id = req['id'];
  deviceType = req['deviceType'];
  accessToken = req['accessToken'];
  choose = req['choose'];

  evtClick = 'click';
  if ($.os.android || $.os.ios) {
    evtClick = 'tap';
  }


  if (typeof _GLOBAL_CONFIG_ === 'undefined') {
    window._GLOBAL_CONFIG_ = {};
  }

  // console.log(id);
  if (id) {
    _GLOBAL_CONFIG_.id = id;
  }

  if (accessToken) {
    _GLOBAL_CONFIG_.accessToken = accessToken;
  }

  _GLOBAL_CONFIG_.PAGE = {
    startRow: 0,
    startTime: null,
    hasNextPage: true
  }

  function P() {
    this.init.apply(this, arguments);
  }

  P.prototype = {
    init: function() {
      var self = this;
      self._loadData();
      self._bindEvent();
    },
    // 加载数据
    _loadData: function(conf) {
      var self = this;
      choose = choose ? Number(choose) : 0;
      net.ajax('topicDetail', {
        id: _GLOBAL_CONFIG_.id,
        choose: choose,
        accessToken: _GLOBAL_CONFIG_.accessToken
      }, function(res) {
        var $body = $('body');
        var obj;
        res.choose = choose;
        $body.append(categoryTpl(res));
        loading.hide();

        if (choose == 0) {
          obj = res.dynamics;
        } else if (choose == 1) {
          obj = res.products;
        }

        _GLOBAL_CONFIG_.PAGE.startTime = obj.firstTime;
        _GLOBAL_CONFIG_.PAGE.hasNextPage = obj.hasNextPage;
        _GLOBAL_CONFIG_.PAGE.startRow += obj.pageSize;
      });
    },
    // 事件绑定
    _bindEvent: function() {
      var self = this;

      // 滚动翻页
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var totalHeight = parseFloat($(window).height()) + parseFloat(scrollTop);
        var docHeight = $(document).height();
        if (!loadLock && (docHeight - range) <= totalHeight && _GLOBAL_CONFIG_.PAGE.hasNextPage) {
          loadLock = true;
          net.ajax('topicDetail', {
            id: _GLOBAL_CONFIG_.id,
            choose: choose,
            accessToken: _GLOBAL_CONFIG_.accessToken,
            startRow: _GLOBAL_CONFIG_.PAGE.startRow,
            startTime: _GLOBAL_CONFIG_.PAGE.startTime
          }, function(res) {
            res.choose = choose;
            var hl = itemTpl(res);
            var obj;
            $('#columns').append(hl);

            if (choose == 0) {
              obj = res.dynamics;
            } else if (choose == 1) {
              obj = res.products;
            }

            _GLOBAL_CONFIG_.PAGE.startTime = obj.firstTime;
            _GLOBAL_CONFIG_.PAGE.hasNextPage = obj.hasNextPage;
            _GLOBAL_CONFIG_.PAGE.startRow += obj.pageSize;
            loadLock = false;
          })
        }
      });
    }
  };

  module.exports = P;
});