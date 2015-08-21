define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var tmpl = require('tmpl');

  var net = require('module/poto/net');
  var util = require('module/poto/util');

  var ele = {
    'JbtnStart': $('#J_btnStart'),
    'Jimg': $('#J_img'),
    'Jegg': $('#J_egg'),
    'JlotterNum': $('#J_lotterNum')
  }

  var MSG = {
    'woo': '英雄，没邀请机会了，隔壁扭蛋机一副什么都有的样子，抽他试试ԅ(≖‿≖ԅ)',
    'notice': '矮油，抽奖机会用完了。'
  }

  var prizeData = null;

  // 获取节点
  function getEle(select) {
    return document.querySelector(select);
  }

  ele.JbtnStart.on('tap', function() {
    if (poto.prizeNum === '0') {
      util.showDialog('log', {
        'msg': MSG.notice
      });
      return false;
    }
    net('prize', {

    }, function(res) {
      ele.Jimg.addClass('swing animated');
      prizeData = res; // 中奖类别
      //console.log(prizeData);
      
    }, function(err) {
      console.log(err);
    })
  });

  function lotto() {
    ele.Jimg.removeClass('swing animated');
    ele.Jegg.removeClass('bounceInDown animated');
    if (prizeData == null) {
      return;
    }
    var prizeType = prizeData.type; // 中奖类别
    if (prizeType === 'shits') { // 吐槽
      util.showDialog('shits', prizeData);
    } else if (prizeType === 'user') { // 推荐用户
      util.showDialog('recommend', prizeData);
    } else if (prizeType === 'wishwall') { // 许愿墙
      util.showDialog('wish', prizeData);
    } else if (prizeType === 'invite') { // 邀请好友
      util.showDialog('invite', prizeData);
    } else if (prizeType === 'gift') { // 中奖
      util.showDialog('gift', prizeData.prize);
    } else { // 没中奖
      util.showDialog('refuel', prizeData);
    }

    ele.JlotterNum.html(prizeData.prizecounter); // 剩余抽奖机会
  }

  function lottoImg () {
    if (prizeData === null) {
      return
    }
    ele.Jegg.attr('class', 'egg egg-default bounceInDown animated egg-' + prizeData.type);
  }
  if (getEle('#J_img').style.WebkitTransition !== undefined) {
    //getEle('#J_img').addEventListener("webkitTransitionEnd", function(){
    getEle('#J_img').addEventListener("webkitAnimationEnd", function() {
      lottoImg();
    }, true);

    // 监听动画结束
    getEle('#J_egg').addEventListener("webkitAnimationEnd", function() {
      lotto();
    }, true);
  }

  util.initIpt();

})