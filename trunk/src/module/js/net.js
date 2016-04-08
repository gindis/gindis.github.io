define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var Util = require('common/js/util');
  var Modal = require('module/js/modal');
  var req, deviceType, accessToken;

  var env = "online";
  req = new Object();
  req = Util.getRequest(false);
  accessToken = req['accessToken'];

  var interfaces = {
    // 单品
    'goodsDetail': 'product/getDetail.do', // 单品详情
    'similarGoods': 'product/findListProd.do',  // 相似单品
    'recPost': 'dynamic/findListByProdLike.do', // 推荐帖子
    'postChart': 'dynamic/common/findListByHot.do', //帖子排行榜
    'userHot': 'user/common/findListByHot.do', //达人排行榜单

    // 帖子
    'macthGoods': 'dynamic/getDetail.do', // 搭配详情
    'hotPost': 'dynamic/findListByOther.do', // 热门帖子

    // 个人中心
    'userInfo': 'user/common/getUser.do', // 获取他人个人信息
    'userDynamic': 'dynamic/common/findListByUser.do', // 获取用户发布动态列表
    'userRepost': 'dynamic/forword/common/findListByUser.do', // 获取用户转发动态列表
    'userFollowBrand': 'brand/common/findList.do', // 获取我关注的品牌列表

    // 专题
    'topicList': 'v1_5/subject/common/findList.do', // 获取专题列表
    'topicDetail': 'v1_7/subject/common/getDetail.do', // 获取专题详情
    'topicDynamicList': 'v1_5/subject/common/findDynamicList.do', //获取专题对应的搭配列表
    'topicProductList': 'v1_5/subject/common/findProductList.do', // 获取专题对应的单品列表

    // 杂志
    'magazineDetail': 'v1_7/magazine/common/getDetail.do', // 杂志详情
    'newListByTag': 'v1_7/match/common/findNewListByTag.do', // 热门标签
    'magazineItemList': 'v1_7/magazine/common/findMagazineItemList.do', // 杂志详情搭配、单品列表

    //
    'addFollow': 'v1_5/follow/addFollow.do', // 关注专题
    'delFollow': 'v1_5/follow/delFollow.do', // 取消关注专题
    'addAttention': 'user/addAttention.do', // 关注用户

    //
    'praise': 'dynamic/praise.do', // 动态点赞
    'cancelPraise': 'dynamic/cancelPraise.do', // 取消动态点赞

    //注册
    'getAuthCode': 'common/getAuthCode.do', // 获取验证码
    'reg': 'register.do', // 注册 (手机号注册)
    'log': 'login.do' // 登陆 (第三方账号注册)
  }

//   bc02f8a9e4c1487096d60e6cfc511de1 (测试数据，穿搭示范)
// bc02f8a9e4c1487096d60e6cfc511de2 (测试数据，搭配专题)
// bc02f8a9e4c1487096d60e6cfc511de3 (测试数据，单品合集)
  if (location.host.match('xiami.|gindis.')) {
    env = "daily";
  }

  var repUrl = {
    'daily': 'http://test.nothing.la/nothing/{{method}}',
    'online': '/nothing/{{method}}'
  };

  var url = repUrl[env];

  function net(opt) {
    if (typeof opt === 'object') {
      this.option = opt;
    } else {
      this.option = {
        type: 'GET',
        dataType: 'jsonp'
      }
    }
  }

  net.prototype = {
    ajax: function(method, params, success, failure) {
      method = interfaces[method];
      if (typeof params == 'function') {
        failure = success;
        success = params;
        params = null;
      }

      params = $.extend({
        'v': '1.0.0',
      }, params);

      var rurl = url.replace(/{{method}}/g, method);

      if (accessToken) {
        rurl = rurl + '?accessToken=' + accessToken;
      }

      $.ajax({
        type: 'POST',
        url: rurl,
        data: JSON.stringify(params),
        dataType: 'json',
        contentType: 'application/json',
        success: function(res) {
          //console.log(res);
          if (res.STATUS == '1') {
            if (!res.DATA) {
              res.DATA = res;
            }
            success && success(res.DATA);
          } else {
            new Modal({
              title: '提示',
              content: res.MESSAGE,
              button: [{
                title: '确定'
              }],
              callback: function(d, id) {
              }
            });
          }
        },
        error: function(xhr, type) {
          failure && failure(type)
        }
      });
    }
  }

  module.exports = net;

});