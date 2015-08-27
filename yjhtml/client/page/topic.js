define(function(require,exports,module){
  
  'use strict';

  var $ = require('zepto');
  var base = require('module/base');
  var evtClick = 'click';

  if ($.os.phone || $.os.tablet) {
    var share = require('module/share');
    evtClick = 'tap';
  } else {
    var ELE = {
      'shareBtn': $('#J_shareBtn'),
      'sina': $('#J_sina')
    }
    ELE.shareBtn.attr('href', ELE.sina.attr('href'));
  }

  // Download button
  var dbtn = $('.promotion-bar .btn');
  if (!base.client.weixin && !base.client.weibo) {
    if ($.os.android) {
      dbtn.attr('href', base.market.andorid);
    }else{
      dbtn.attr('href', base.market.ios);
    }
  } else {
    dbtn.attr('href', base.market.juju);
  }

  var dbtn1 = $('.channel .btn').eq(0);
  var dbtn2 = $('.channel .btn').eq(1);
  dbtn1.attr('href', base.market.ios);
  dbtn2.attr('href', base.market.andorid);

  if ($('#J_more')) {
    $('#J_more').on(evtClick, function(){
      $('#J_body').removeClass('open');
      $(this).remove();
    });
  }
})