define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var tmpl = require('tmpl');
  var iscroll = require('iscroll');

  var net = require('module/poto/net');
  var game = require('module/poto/game');
  var util = require('module/poto/util');

  var ele = {
    'btnPop': $('#J_btnPop'),
    'dialog': $('#J_dialog'),
    'dialogMain': $('#J_dialog .modal-main'),
    'backdrop': $('.modal-backdrop'),
    'JlotterNum': $('#J_lotterNum'),
    'JinviteNum': $('#J_inviteNum'),
    'JwishHead': $('#J_wishHead'),
    'JwishList': $('#J_wishList')
  }

  var MSG = {
    'success': '许愿成功',
    'update': '愿望更新了哟',
    'fail': '重新提交试试',
    'wish': '你已经许过愿望'
  }

  function getEle(sel) {
    return document.querySelector(sel);
  }

  function getLength(val) {
    var len = 0;
    for (var i = 0; i < val.length; i++) {
      var length = val.charCodeAt(i);
      if (length >= 0 && length <= 128) {
        len += 1;
      } else {
        len += 2;
      }
    }
    return len;
  }

  function dialog(type, focusBtn) {
    focusBtn.on('tap', function() {
      util.showDialog(type, {});
      $('.ipt').on('tap', function() {
        var that = $(this);
        that.focus();
      });
      $('#J_sbt').on('tap', function() {
        ele.dialog.removeClass('in');
        ele.backdrop.removeClass('in');
      });
      $('#mywish').on('keyup', function() {
        var that = $(this);
        var n = 30 - Math.round(getLength(that.val())/2);
        // if (n < 0) {
        //   return false;
        // } else {
        $('#J_fnum').html(n);
        //}

      });
      $('#sendwish').on('tap', function() {
        var size = $('#J_fnum').html();
        if (size<0) {
          alert('输入内容超出' + (~size+1) + '个字。');
          return;
        }
        
        var signature = ele.JwishList.find('.signature').eq(0);
        // if (signature.html() != '') {
        //   util.showDialog('log', {
        //     'msg': MSG.wish
        //   });
        //   return;
        // }

        var content = $('#mywish').val();
        if (content == '') {
          alert('说出你的二次元愿望。');
          return;
        }
        //console.log('content')
        net('doDream', {
          'content': content
        }, function(res) {
          var update = res.update;
          var msg = '';
          if (update == 0) {
            msg = MSG.success;
            signature.html(content);
          } else if (update == 1) {
            msg = MSG.update;
            signature.html(content);
          } else {
            msg = MSG.fail;
          }
          util.showDialog('log', {
            'msg': msg
          });
        })
      });
    });
  }

  function getDream(type) {
    net('getDream', {

    }, function(res) {
      //console.log(res);
      ele.JwishList.append(tmpl("tmpl-dialog-" + type, res));
      $('.load').remove();
      new iscroll('#J_wishScroll', {
        mouseWheel: true
      });
      $('#J_wishScroll .btn-inverse').on('tap', function() {
        var that = $(this);
        var parentsInner = that.parents('.inner');
        var uid = parentsInner.attr('data-uid');
        var dreamid = parentsInner.attr('data-id');
        //console.log(uid);
        net('favDream', {
          'dreamid': dreamid
        }, function(res) {
          var eleNum = ele.JwishHead.find('.num');
          var num = null
          if (res.isfav) {
            that.removeClass('btn-fav').addClass('btn-default');
            num = Number(eleNum.text()) - 1;
            num < 0 ? num = 0 : '';
            //eleNum.text(num);
          } else {
            that.removeClass('btn-default').addClass('btn-fav');
            num = Number(eleNum.text()) + 1;
            //eleNum.text(num);
          }
          //console.log(res);
        })
      });
    })
  }

  function wishList() {
    var type = 'mywish';
    net('myDream', {

    }, function(res) {
      //console.log(res);
      var data = [res];
      ele.JwishList.append(tmpl("tmpl-dialog-" + type, data));
      getDream(type);
    })
  }

  net('me', {

  }, function(res) {
    //console.log(res);
    ele.JlotterNum.html(res.prizecounter);
    ele.JinviteNum.html(res.invitecounter);

    // 
    window.poto.prizeNum = res.prizecounter;
    window.poto.inviteNum = res.invitecounter;
  })

  // net('getUser', {

  // }, function(res) {
  //   console.log(res);

  // })

  function init() {
    wishList();
    dialog('wish', ele.btnPop);
  }

  init();

})