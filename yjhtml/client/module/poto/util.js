define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var tmpl = require('tmpl');
  var iscroll = require('iscroll');


  var net = require('module/poto/net');

  var DEBUG = 0;
  var ele = {
    'btnPop': $('#J_btnPop'),
    'dialog': $('#J_dialog'),
    'dialogMain': $('#J_dialog .modal-main'),
    'backdrop': $('.modal-backdrop'),
    'JinviteNum': $('#J_inviteNum'),
    'Jusers': $('#J_users')
  }

  var util = {
    'getUser': getUser,
    'checkPrize': checkPrize,
    'dialog': dialog,
    'showDialog': showDialog,
    'hideDialog': hideDialog,
    'initIpt': initIpt
  }

  function getEle(sel) {
    return document.querySelector(sel);
  }

  function getUser(ipt, query) {
    net('getUser', {
      'query': query
    }, function(res) {
      if (res.length == 0) {
        ele.Jusers.html('<li class="null"><div class="con">该用户还未关注你哟</div></li>');
        return;
      }
      ele.Jusers.html(tmpl("tmpl-dialog-user", res));
      new iscroll('#J_myfriScroll', {
        mouseWheel: true
      });
      ele.Jusers.find('.item').on('tap', function() {
        var that = $(this);
        var cuid = that.attr('data-uid');
        var cnickname = that.text();
        ipt.val(cnickname);
        ipt.attr('data-uid', cuid);
        $('#J_myfri').css('display', 'none');
      });
    })
  }

  function checkPrize(params) {
    net('checkPrize', params, function(res) {
      if (params.type === 'invite') {
        ele.JinviteNum.html(res.invitecounter);
        if (res.errortype==2) {
          showDialog('log', {
            'msg': '人家早就在里面等你辣～'
          });
        }else{
          showDialog('log', {
            'msg': '邀请成功'
          });
        }
        $('#J_inviteuser').val('');
      } else if (params.type === 'shits') {
        showDialog('log', {
          'msg': 'Biu出去啦！'
        });
      } else{
        hideDialog();
      }
      
    }, function(err) {

      if (params.type == 'invite') {
        if (err.state == 2) {
          showDialog('log', {
            'msg': '人家早就在里面等你辣～'
          });
        }else if (err.state == 1){
          showDialog('log', {
            'msg': '用户不存在，你确定是真爱？'
          });
        }
        return;
      }
      showDialog('log', {
        'msg': err
      });
    })
  }

  function dialog(type, focusBtn) {
    focusBtn.on('tap', function() {
      showDialog(type);
      $('.ipt').on('tap', function() {
        var that = $(this);
        that.focus();
      });
      $('#J_sbt').on('tap', function() {
        hideDialog();
      });
    });
  }

  function toggleDialog() {

  }

  function showDialog(type, data) {
    if (DEBUG) {
      console.log(data);
    }
    ele.dialogMain.html(tmpl("tmpl-dialog-" + type, data));
    // if(ele.dialog.css('display') !== 'none') {
    //   hideDialog();
    // }
    ele.dialog.css('display', 'block');
    var st = setTimeout(function() {
      ele.dialog.addClass('in');
      ele.backdrop.addClass('in');
      clearTimeout(st);
    }, 0);
    ele.backdrop.on('tap', function() {
      hideDialog();
    });
    var Jsbt = $('#J_sbt');
    if (Jsbt) {
      Jsbt.on('tap', function() {
        hideDialog();
      });
    }
    $('form').on('submit', function(){
      return false;
    });
    initIpt();
    if (type === 'log') {
      var ST = setTimeout(function() {
        hideDialog();
        clearTimeout(ST);
      }, 2000)
    }

    if (type === 'invite') {
      var ivt = $('#J_inviteuser2');
      ivt.on('keyup', function() {
        var that = $(this);
        var query = that.val();
        that.focus();
        $('#J_myfri').css('display', 'block');
        getUser(ivt, query);
      });
      $('#J_graph2').on('tap', function() {
        var nickname = ivt.val();
        if (nickname == '') {
          alert('矮油，请输入邀请好友。');
          return;
        }
        var params = {
          'type': 'invite',
          'nickname': nickname
        }
        checkPrize(params);
      })
    }

    if (type === 'shits') {
      $('#J_say').on('tap', function() {
        var saywords = $('#J_sayWorks').val();
        /*if (saywords == '') {
          alert('矮油， 吐吐槽哈。');
          return;
        }*/
        var params = {
          'type': 'shits',
          'content': saywords
        }
        checkPrize(params);
      });
    }

  }

  function initIpt() {
    var ipt = $('input, textarea');
    if (ipt) {
      ipt.on('tap', function() {
        var that = $(this);
        that.focus();
      });
    }
  }

  function hideDialog() {
    ele.dialog.removeClass('in');
    ele.backdrop.removeClass('in');
  }

  function runAni () {
    if (!ele.dialog.hasClass('in')) {
      ele.dialog.css('display', 'none');
      $('#J_myfri').css('display', 'none');
    }
  }
  //var Wst = null;
  if (getEle('#J_dialog').style.WebkitTransition !== undefined) {
    getEle('#J_dialog').addEventListener('webkitTransitionEnd', function() {
      runAni();
    }, false);
  }
  // else{
  //   clearTimeout(Wst);
  //   Wst = setTimeout('runAni()', 200);
  // }
  

  module.exports = exports = util;

})