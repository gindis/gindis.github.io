define(function(require, exports, module) {

  /**
   * @author gindis
   * @version 0.0.1
   */

  'use strict';

  var $ = require('zepto');
  var Util = require('common/js/util');
  var Net = require('module/js/net');
  var Tips = require('module/js/tips');

  var net = new Net();

  var evtClick = 'click';
  if ($.os.ios || $.os.anroid) {
    evtClick = 'tap';
  }

  function Page() {
    this.Timer = null;
    this.t = null;
    this.init.apply(this, arguments);
  }

  Page.prototype = {
    init: function() {
      var self = this;
      self.bindEvent();
      Util.initDownload();
    },
    clearIpt: function() {
      $('.J_clearIpt').on(evtClick, function() {
        var $ipt = $(this).prev();
        $ipt.val('');
        $(this).hide();
      });
      var $ipt = $('input');
      $ipt.on('keydown', function() {
        var $that = $(this);
        if ($that.val().length > 0) {
          $that.next().show();
        } else {
          $that.next().hide();
        }
      });
      $ipt.on('keyup', function() {
        var $that = $(this);
        if ($that.val().length == 0) {
          $that.next().hide();
        } else {
          $that.next().show();
        }
      });
    },
    reg: function(data) {
      net.ajax('reg', {
        phone: data.phone,
        password: data.password,
        authCode: data.authCode
      }, function(res) {
        //console.log(res);
        location.href = 'download.html';
      });
    },
    getAuthCode: function(that, data) {
      var self = this;
      if ($('.J_phone').val() == '') {
        var el2 = new Tips({
          content: '手机号码不为空',
          stayTime: 2000,
          type: "info"
        })
        return;
      }
      if (that.hasClass('disabled')) return;
      // 获取code 
      that.addClass('disabled')
      that.html('<span>60</span>s后重新发送');
      self.t = 60;
      self.Timer = setInterval(function() {
        self.timer(that);
      }, 1000);
      net.ajax('getAuthCode', {
        phone: data.phone,
        type: data.type
      }, function(res) {
        console.log(res);

      }, function() {
        clearInterval(self.Timer);
        self.t = 0;
        that.removeClass('disabled');
        that.html('获取验证码');
        return false;
      });
    },
    third: function() {

    },
    // 加载数据
    loadData: function(conf) {
      var self = this;
      console.log(hello({
        name: 'world'
      }));
    },
    timer: function(el) {
      var self = this;
      if (self.t <= 1) {
        clearInterval(self.Timer);
        if (self.t == 1) {
          self.t = 0;
          el.removeClass('disabled');
          el.html('获取验证码');
        }
      } else {
        self.t--;
      }
      el.find('span').html(self.t);
    },
    // 事件绑定
    bindEvent: function() {
      var self = this;
      self.clearIpt();
      $('.J_getAuthCode').on(evtClick, function() {
        var that = $(this);
        var param = {
          phone: $('.J_phone').val(),
          type: that.attr('data-type')
        }
        self.getAuthCode(that, param);

      });

      $('.J_reg').on(evtClick, function() {
        var $Jphone = $('.J_phone').val();
        var $Jpwd = $('.J_pwd').val();
        var $Jcode = $('.J_code').val();
        if ($Jphone == '' || $Jpwd == '' || $Jcode =='') {
          var errMsg = '密码不为空';
          if ($Jcode == '') {
            errMsg = '验证码不为空';
          } 
          if ($Jphone == '') {
            errMsg = '手机号码不为空';
          }
          console.log('code' + $Jcode);
          console.log('Jphone' + $Jphone);
          console.log('Jpwd' + $Jpwd);
          var el2 = new Tips({
            content: errMsg,
            stayTime: 2000,
            type: "info"
          })
          return;
        }
        var param = {
          phone: $Jphone,
          password: $Jpwd,
          authCode: $Jcode
        }
        self.reg(param);
      });
    }
  };

  module.exports = Page;
});