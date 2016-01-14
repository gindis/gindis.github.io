define(function(require, exports, module) {

  /**
   * @author gindis
   * @version 0.0.1
   */

  'use strict';

  var $ = require('zepto');
  var Util = require('common/js/util');
  var Net = require('module/js/net');
  var Modal = require('module/js/modal');
  var a = require('./mods/a');
  var userInfo = require('./views/userinfo-render');
  var Dynamic = require('./views/dynamic-render');
  var Follow = require('./views/follow-render');

  var attachFastClick = require('module/js/fastclick');
  attachFastClick(document.body); // 处理穿透事件冒泡

  var net = new Net();
  var req = new Object();
    req = Util.getRequest(false);

  if (!_GLOBAL_CONFIG_.uid) {
    _GLOBAL_CONFIG_.uid = req['uid'];
  }

  var evtClick = 'click';
  if ($.os.android || $.os.ios)  {
    evtClick = 'tap';
  }

  function Page() {
    this.init.apply(this, arguments);
  }

  Page.prototype = {
    init: function () {
      var self = this;
      self.loadData();
      self.bindEvent();
    },
    // 加载数据
    loadData: function (conf) {
      var self = this;
      self.getUseinfo();
      self.userDynamic();
      self.userRepost();
      self.userFollowBrand();

      Util.initDownload();
    },
    // 发布
    userDynamic: function () {
      net.ajax('userDynamic', {
        id: _GLOBAL_CONFIG_.uid
      }, function(res) {
        //console.log(res);
        res.ptype = 'userDynamic';
        $(Dynamic(res)).appendTo('.J_tabBody_1');
      });
    },
    // 转发
    userRepost: function () {
      net.ajax('userRepost', {
        id: _GLOBAL_CONFIG_.uid
      }, function(res) {
        //console.log(res);
        res.ptype = 'userRepost';
        $(Dynamic(res)).appendTo('.J_tabBody_2');
      });
    },
    // 关注品牌
    userFollowBrand: function () {
      net.ajax('userFollowBrand', {
        id: _GLOBAL_CONFIG_.uid
      }, function(res) {
        //console.log(res);
        $(Follow(res)).appendTo('.J_tabBody_3');
      });
    },
    // 用户信息
    getUseinfo: function () {
      var self = this;
      // 相似单品
      net.ajax('userInfo', {
        id: _GLOBAL_CONFIG_.uid
      }, function(res) {
        //console.log(res);
        $(userInfo(res)).appendTo('.J_userinfo');
        document.title = $('.name').text() + '的个人主页';
        self.selCheck();
      });
    },
    goReg: function() {
      new Modal({
        content: '需要注册才能执行该操作',
        button: [{
          title: '取消'
        },{
          title: '注册'
        }],
        callback: function(d, id) {
          if (id == 1) {
            location.href = './reg.html';
          }
        }
      });
    },
    selCheck: function () {
      var url = location.href;
      var tabNav = $('.tab-nav .item');
      console.log(url.match('people-follow'));
      if (url.match('people-follow')) {
        tabNav.removeClass('current');
        tabNav.eq(2).addClass('current');
      } else if (url.match('people-repost')) {
        tabNav.removeClass('current');
        tabNav.eq(1).addClass('current');
      }
    },
    // 事件绑定
    bindEvent: function () {
      var self = this;
      $('.J_reg').live(evtClick, function(){
        self.goReg();
      });
      var Jtabnav = $('.J_tabNav .item');
      Jtabnav.on(evtClick, function(){
        var that = $(this);
        var tbody = $('.tab-body');
        var index = that.index();
        Jtabnav.removeClass('current');
        tbody.css('display', 'none');
        that.addClass('current');
        tbody.eq(index).css('display', 'block');
      });
    }
  };

  module.exports = Page;
});