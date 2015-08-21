define(function(require, exports, module) {
  var $ = require('zepto');
  var tmpl = require('tmpl');
  var iscroll = require('iscroll');
  var net = require('module/poto/net');
  var util = require('module/poto/util');

  var ele = {
    'Jgraph': $('#J_graph'),
    'Jinviteuser': $('#J_inviteuser'),
    'JinviteNum': $('#J_inviteNum'),
    'Jusers': $('#J_users')
  }

  var invite = {
    'init': init
  }

  var MSG = {
    'success': '矮油，邀请成功！！',
    'fail': '矮油，邀请失败！！'
  }

  function inviteUser() {
    ele.Jinviteuser.on('tap', function() {
      $(this).focus();
      //$('#J_myfri').css('display', 'block');
    });

    ele.Jinviteuser.on('keypress', function() {
      var that = $(this);
      var query = that.val();
      that.focus();
      $('#J_myfri').css('display', 'block');
      util.getUser(ele.Jinviteuser, query);
    });
    ele.Jgraph.on('tap', function() {
      var nickname = ele.Jinviteuser.val();
      if (nickname == '') {
        alert('少侠，输个名字会很累吗');
        return false;
      }
      var params = {
        'type': 'invite',
        'nickname': $.trim(nickname)
      }
      util.checkPrize(params);
    });

    $(document).on('tap', function(){
      $('#J_myfri').css('display', 'none');
      return false;
    });
  }

  function init() {
    inviteUser();

  }

  module.exports = exports = invite;
})