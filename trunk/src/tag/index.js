define(function(require, exports, module) {

  'use strict';

  var Util = require('common/js/util');
  var Jsbridge = require('common/js/jsbridge');
  var Net = require('module/js/net');
  var Loading = require('module/js/loading');
  var Modal = require('module/js/modal');
  var net, req, loading, id, deviceType, accessToken, evtClick, pageSize, firstTime, range, loadLock;

  range = 50;
  loadLock = false;

  var tagTpl = require('./views/tag-render');
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
    init: function () {
      var self = this;
      self._loadData();
      self._bindEvent();
    },
    // 加载数据
    _loadData: function (conf) {
      var self = this;
      net.ajax('newListByTag', {
        tagId: _GLOBAL_CONFIG_.id,
        accessToken: _GLOBAL_CONFIG_.accessToken
      }, function(res) {
        var $body = $('body');
        $body.append(tagTpl(res));
        loading.hide();

        _GLOBAL_CONFIG_.PAGE.startTime = res.firstTime;
        _GLOBAL_CONFIG_.PAGE.hasNextPage = res.hasNextPage;
        _GLOBAL_CONFIG_.PAGE.startRow += res.pageSize;
      });
    },
    // 事件绑定
    _bindEvent: function () {
      var self = this;
      if (deviceType) {
        $('.link').live('click', function(evt) {
          evt.preventDefault();
          var that = $(this);
          var type, sid;
          type = that.attr('data-type');
          sid = that.attr('data-id');
          if (type == 'user') {
            Jsbridge.user(sid);
          } else if (type == 'product') {
            Jsbridge.product({
              id: sid
            });
          } else if (type == 'dynamic') {
            Jsbridge.dynamic({
              id: sid
            });
          }
        })
      }

      $('.J_fav').live(evtClick, function(evt) {
        evt.preventDefault();
        var that = $(this);
        var reqData = {};
        var apiName = 'praise';
        reqData.id = that.attr('data-id');
        if (that.hasClass('liked')) {
          apiName = 'cancelPraise';
        }
        if (deviceType) {
          net.ajax(apiName, reqData, function(res) {
            if (that.hasClass('liked')) {
              that.removeClass('liked');
              that.html(Number(that.text()) - 1);
            } else {
              that.addClass('liked');
              that.html(Number(that.text()) + 1);
            }
          });
        } else {
          self.tipsReg();
        }
      });

      // 滚动翻页
      $(window).scroll(function() {
        var scrollTop = $(window).scrollTop();
        var totalHeight = parseFloat($(window).height()) + parseFloat(scrollTop);
        var docHeight = $(document).height();
        if (!loadLock && (docHeight - range) <= totalHeight && _GLOBAL_CONFIG_.PAGE.hasNextPage) {
          loadLock = true;
          net.ajax('newListByTag', {
            tagId: _GLOBAL_CONFIG_.id,
            accessToken: _GLOBAL_CONFIG_.accessToken,
            startRow: _GLOBAL_CONFIG_.PAGE.startRow,
            startTime: _GLOBAL_CONFIG_.PAGE.startTime
          }, function(res) {
            var hl = itemTpl(res);
            $('#columns').append(hl);

            _GLOBAL_CONFIG_.PAGE.startTime = res.firstTime;
            _GLOBAL_CONFIG_.PAGE.hasNextPage = res.hasNextPage;
            _GLOBAL_CONFIG_.PAGE.startRow += res.pageSize;
            loadLock = false;
          })
        }
      });

    },
    tipsReg: function() {
      new Modal({
        content: '需要注册才能执行该操作',
        button: [{
          title: '取消'
        }, {
          title: '注册'
        }],
        callback: function(d, id) {
          if (id == 1) {
            location.href = './reg.html';
          }
        }
      });
    }
  };

  module.exports = P;
});