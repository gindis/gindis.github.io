define(function(require, exports, module) {
  var $ = require('zepto');

  var base = require('module/base');
  var explaFn = require('./explafn');
  var scrollAnimate = require('./scroll');
  var net = require('widget/net');

  var Loader = new net({
    uid: 10000143
  })

  var BODY = $('#J_container')

  var downapp = require('./downapp');

  var xtplBanner = require('./home/banner-render')
  var xtplStep = require('./home/step-render');
  var xtplMall = require('./home/mall-render');
  var xtplShare = require('./share/number-render');

  var stepHtml = xtplStep();
  var bannerHtml = xtplBanner()

  $(document).on('click', '.disable-link', function(event) {
    event.preventDefault();
    return false;
  })

  var search = location.search.substr(1)
  var params = serizlize(search)
  var uid = params.uid;

  function serizlize(str) {
    var arr = str.split('&');
    var result = {};
    for (var i = 0; i < arr.length; i++) {
      var k = arr[i];
      var ka = k.split('=');
      result[ka[0]] = ka[1]
    };
    return result;
  }

  function moveLoading(per) {
    per = per + '%'
      // document.querySelector('#J_pronum').innerHTML = per;
    document.querySelector('#J_proCur').style.width = per;
  }
  moveLoading(100)
  Loader.get('/invite/inviteusershareinfo', {
    uid: uid
  }, function(data) {
    setTimeout(function() {
      $('#J_loading').remove()
      var shareHtml = xtplShare(data)
      BODY.append(bannerHtml + shareHtml + stepHtml);
      explaFn()
      getLastOrder()
    }, 300);
  })

  function getLastOrder() {
    if (!base.client.weixin && !base.client.weibo) {
      // Download button
      var dbtn = $('#J_downloadApp');
      if (dbtn) {
        if ($.os.android) {
          dbtn.attr('href', base.market.andorid);
        } else {
          dbtn.attr('href', base.market.ios);
        }
      };
    }
    Loader.get('/invite/lastorder', function(data) {
      renderMall(data)
    })
  }

  function renderMall(lastorder) {
    Loader.get('/invite/productlist', function(data) {
      var mallHtml = xtplMall({
        productlist: data.productlist,
        lastorder: lastorder,
        moreUrl: 'shareproduct'
      })
      BODY.append(mallHtml)
      new scrollAnimate('J_lastOrder')
    })
  }

  downapp();
})
