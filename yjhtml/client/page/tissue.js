define(function(require, exports, module) {

  'use strict';

  function P() {
    this.init.apply(this, []);
  }

  P.prototype = {
    init: function() {
      var self = this;
      self.download();
    },
    download: function() {
      var dbtn = $('.promotion-bar .btn');
      if (!base.client.weixin && !base.client.weibo) {
        if ($.os.android) {
          dbtn.attr('href', base.market.andorid);
        } else {
          dbtn.attr('href', base.market.ios);
        }
      } else {
        dbtn.attr('href', base.market.juju);
      }

      var dbtn1 = $('.channel .btn').eq(0);
      var dbtn2 = $('.channel .btn').eq(1);
      dbtn1.attr('href', base.market.ios);
      dbtn2.attr('href', base.market.andorid);
    }
  };

  module.exports = P;
});