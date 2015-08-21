define(function(require, exports, module) {
  var $ = require('zepto');

  var env = 'online';

  var interfaces = {
    'me': 'me', //用户信息
    'getUser': 'getuser', //获取用户
    'prize': 'prize',//抽奖接口
    'checkPrize': 'checkprize', //确认抽奖
    'favDream': 'favdream', //赞 愿望
    'myDream': 'mydream', //我的愿望
    'doDream': 'dodream', //说出愿望
    'getDream': 'getdream' //获取愿望
  }

  var remoteUrl = {
    'local': '/{{method}}',
    'daily': 'http://appwap.juju.la/yj/{{method}}',
    'online': 'http://appwap.juju.la/yj/{{method}}'
  };

  // 接口环境切换
  var url = remoteUrl[env];

  function net(method, params, success, failure) {
    method = interfaces[method];
    if (typeof params == 'function') {
      failure = success;
      success = params;
      params = null;
    }
    var uuid = config.uid;
    // if (method == 'favdream') {
    //   uuid = params.uid;
    // }
    params = $.extend({
      'v': '1.1',
      'app_key': '',
      'uid': uuid,
      'sid': config.sid
    }, params);
    //console.log(params.uid);
    $.ajax({
      type: 'POST',
      url: url.replace(/{{method}}/g, method),
      dataType: 'JSON',
      data: params,
      success: function(re) {
        var res = JSON.parse(re);
        if (res.state == 0) {
          success && success(res.data);
        } else {
          failure && failure(res);
        }
      },
      error: function(xhr, type) {

      }
    });
  }

  module.exports = exports = net;

})