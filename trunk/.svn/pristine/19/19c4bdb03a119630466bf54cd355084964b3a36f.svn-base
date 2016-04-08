define(function(require, exports, module) {

  /**
   * @author gindis.wx
   * @version 
   */

  'use strict';
  var Util = require('common/js/util');
  var Jsbridge = require('common/js/jsbridge');
  var Net = require('module/js/net');
  var Loading = require('module/js/loading');
  var Modal = require('module/js/modal');
  var net, req, loading, id, deviceType, accessToken, evtClick, pageSize, firstTime;

  var topicdetail = require('./views/topicdetail-render');
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
      self.getTopicDetail();
    },
    // 获取专题详情
    getTopicDetail: function() {
      var self = this;
      // 相似单品
      net.ajax('topicDetail', {
        id: _GLOBAL_CONFIG_.id,
        accessToken: accessToken
      }, function(res) {
        //console.log(res);
        var $body = $('body');
        if (deviceType) {
          res.deviceType = deviceType;
        }
        if (accessToken) {
          res.accessToken = accessToken;
        }
        res.randomstr = +new Date();
        $body.append(topicdetail(res, {
          commands: {
            encodeURI: function(scopes, option) {
              var title;
              title = option.params[0];
              return encodeURIComponent(title);
            }
          }
        }));
        // if (res.type == 1)  { // 穿搭示范
        //   $body.appendTo(topicdetail(res));
        // } else if (res.type == 2) { // 搭配专题
        //   $body.appendTo(topicdetail(res));
        // } else if (res.type == 3) { // 单品合集
        //   $body.appendTo(topicdetail(res));
        // }
        //
        // document.title = res.title;
        $('.follow').on(evtClick, function() {
          var that = $(this);
          var type = that.attr('data-type');
          var sid = that.attr('data-id');
          var reqData = {};
          if (accessToken) {
            var apiName = '';
            if (type === 'topic') {
              apiName = 'addFollow';
              if (that.hasClass('isFollow')) {
                apiName = 'delFollow';
              }
              reqData.type = 1;
            } else if (type === 'user') {
              apiName = 'addAttention';
              reqData.byUserId = sid;
            }
            reqData.businessId = sid;
            reqData.accessToken = accessToken;
            net.ajax(apiName, reqData, function(res) {
              var tmsg = '';
              if (type === 'topic') {
                if (that.hasClass('isFollow')) {
                  tmsg = '取消关注成功';
                  that.removeClass('isFollow');
                  that.html('关注');
                } else {
                  tmsg = '关注成功';
                  that.addClass('isFollow');
                  that.html('已关注');
                }
              } else {
                tmsg = res.MESSAGE;
                new Modal({
                  content: tmsg,
                  button: [{
                    title: '确认'
                  }],
                  callback: function(d, id) {}
                });
              }
            });
          } else {
            self.tipsReg();
          }
        });

        $('.J_actBtn').on(evtClick, function(evt) {
          if (deviceType) {

          } else {
            self.tipsReg();
          }
        });

        var $Jmore = $('.J_more');
        pageSize = $Jmore.attr('data-pagesize');
        firstTime = $Jmore.attr('data-firsttime');

        $Jmore.on(evtClick, function(evt) {
          var that = $(this);
          var type = that.attr('data-type');
          var startId = that.attr('data-startid');
          var reqData = {};
          var apiName = 'topicDynamicList';
          var wrap;
          if (that.hasClass('disabled')) {
            return;
          }
          that.html('<span class="btn-more">加载中...</span>');
          that.addClass('disabled');
          if (type == 'dynamic') {
            apiName = 'topicDynamicList';
            wrap = '.matchs-inner';
          } else if (type == 'product') {
            apiName = 'topicProductList';
            wrap = '.post';
          } else if (type == 'counsel') {
            apiName = 'topicDynamicList';
            wrap = '.mcounsel';
          }

          reqData.id = _GLOBAL_CONFIG_.id;
          reqData.startRow = Number(pageSize);
          reqData.startId = Number(startId);
          if (firstTime && firstTime != '') {
            reqData.firstTime = firstTime;
          }
          net.ajax(apiName, reqData, function(res) {
            res.type = type;
            var hl = itemTpl(res);
            $(wrap).append(hl);
            if (res.pageSize) {
              pageSize = reqData.startRow + res.pageSize;
            }
            if (res.firstTime) {
              firstTime = res.firstTime;
            }
            if (res.hasNextPage) {
              that.removeClass('disabled');
              that.html('<span class="btn-more">加载更多</span>');
            } else {
              that.html('<span class="btn-more disabled">没有更多</span>');
            }

          });
        });

        loading.hide();
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
    },
    // 绑定
    _bindEvent: function() {
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
        if (that.hasClass('faved')) {
          apiName = 'cancelPraise';
        }
        if (deviceType) {
          //self.tipsReg();
          net.ajax(apiName, reqData, function(res) {
            if (that.hasClass('faved')) {
              that.removeClass('faved');
              that.html(Number(that.text()) - 1);
            } else {
              that.addClass('faved');
              that.html(Number(that.text()) + 1);
            }
          });
        } else {
          self.tipsReg();
        }
      });
    }
  };

  module.exports = P;
});