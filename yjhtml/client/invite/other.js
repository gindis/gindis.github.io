// 第三方的显示 
define(function(require, exports, module) {
  'use strict';
  var $ = require('zepto');
  var BODY = $('#J_container');
  var downappFn = require('./downapp');
  var scrollAnimate = require('./scroll');

  var net = require('widget/net');
  var Loader = new net({
    uid: 10000143
  })

  var xtplLastOrder = require('./home/last-order-render');
  var xtplGoods = require('./other/goods-render');
  var xtplGoodsList = require('./other/goods-list-render');
  var page = 1

  function getLastOrder() {
    Loader.get('/invite/lastorder', function(data) {
      var html = xtplLastOrder(data)
      BODY.append(html)
      new scrollAnimate('J_lastOrder');
      renderMall(page)
    })
  }
  getLastOrder();
  var pageLock = false;

  function renderMall(page, callback) {
    Loader.get('/invite/productlist', {
      page: page
    }, function(data) {
      if (data.hasnext == 0) {
        goodsLoadDisable()
      } else {
        loadComplete()
      };
      pageLock = false;
      if (callback) {
        return callback(data)
      };
      var mallHtml = xtplGoods(data)
      BODY.append(mallHtml)
      goodsLoadFn()
      downappFn()
    })
  }

  function goodsLoadFn() {
    var con = $('#J_goodsContainer')
    var btn = $('#J_goodsLoad');
    btn.on('tap', function() {
      if (pageLock) {
        return false;
      };
      pageLock = true;
      if (btn.hasClass('disable')) {
        return false;
      };
      loadingMore();
      page = page + 1;
      renderMall(page, function(data) {
        var listHtml = xtplGoodsList(data)
        console.log(listHtml);
        con.append(listHtml)
      });
    })
  }

  function goodsLoadDisable() {
    var btn = $('#J_goodsLoad');
    btn.addClass('disable')
    btn.html('没有更多了눈_눈')
  }

  function loadingMore() {
    var btn = $('#J_goodsLoad');
    btn.html('拼命加载中(˶‾᷄ ⁻̫ ‾᷅˵)')
  }

  function loadComplete() {
    var btn = $('#J_goodsLoad');
    btn.html('点击查看更多(๑╹ڡ╹)╭')
  }
})
