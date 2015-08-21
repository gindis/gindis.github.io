define(function(require, exports, module) {
  var $ = require('zepto');
  var base = require('module/base');

  module.exports = function() {
    if ($('.promotion-bar').length > 0) {
      $('.container').css('paddingBottom', '50px')
    };
    //客户端
    if (typeof(jujuClient) !== 'undefined' && jujuClient != 'juju' && window.innerWidth < 765) {
      $('.promotion-bar').css('display', 'block');
    }

    if (!base.client.weixin && !base.client.weibo) {
      // Download button
      var dbtn = $('.promotion-bar .btn');
      if (dbtn) {
        if ($.os.android) {
          dbtn.attr('href', base.market.andorid);
        } else {
          dbtn.attr('href', base.market.ios);
        }
      };
    }

    // var dbtn1 = $('.channel .btn').eq(0);
    // var dbtn2 = $('.channel .btn').eq(1);
    // dbtn1 && dbtn1.attr('href', base.market.ios);
    // dbtn2 && dbtn2.attr('href', base.market.andorid);
  };
})
