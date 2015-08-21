define(function(require, exports, modself.ule) {
  'use strict';
  //基分商城
  var $ = require('zepto');
  var scrollAnimate = require('./scroll');
  var xtplHome = require('./home/index-render');
  var xtplMall = require('./home/mall-render');
  var xtplRank = require('./home/rank-render');
  var xtplItem = require('./home/rankitem-render');

  var explaFn = require('./explafn');

  var Net = require('widget/net');
  var Loader = new Net({
    uid: 10000143
  })

  var BODY = $('#J_container');
  var page = 1;

  function moveLoading(per) {
    per = per + '%'
      // document.querySelector('#J_pronum').innerHTML = per;
    document.querySelector('#J_proCur').style.width = per;
  }

  $(document).on('click', '.disable-link', function (event) {
    event.preventDefault();
    return false;
  })

  moveLoading(50)
  Loader.get('/invite/inviteuserinfo', function(data) {
    moveLoading(100)
    setTimeout(function() {
      $('#J_loading').remove()
      var html = xtplHome(data);
      BODY.append(html);
      explaFn()
      getLastOrder()
        // 好友动态滚动
      new scrollAnimate('J_friendDynamic');
    }, 300);
  })

  function getLastOrder() {
    Loader.get('/invite/lastorder', function(data) {
      renderMall(data)
    })
  }

  function renderMall(lastorder) {
    Loader.get('/invite/productlist', function(data) {
      var mallHtml = xtplMall({
        productlist: data.productlist,
        lastorder: lastorder,
        moreUrl: 'product'
      })
      BODY.append(mallHtml)
      new scrollAnimate('J_lastOrder');
      runderRank(1)
    }, function() {
      var errorTipHtml = xtplMall({
        errorTip: '<p class="load-error-tip">加载不出来?<br/>点击更多商品查看!</p>'
      });
      BODY.append(errorTipHtml)
      runderRank(1)
    })
  }

  var pageLock = false; // 翻页锁 避免多次触发 tap 事件

  function runderRank(page, callback) {
    var rankHtml;
    Loader.get('/invite/ranklist', {
      page: page
    }, function(data) {
      if (data.hasnext == 0) {
        disableLoadMore()
      }else{
        loadComplete()
      };
      pageLock = false;
      if (callback) {
        rankHtml = xtplItem(data)
        return callback(rankHtml)
      };
      rankHtml = xtplRank(data)
      BODY.append(rankHtml)
      if (page == 1) {
        loadMoreFn()
      };
    }, function() {
      pageLock = true;
      rankHtml = xtplRank({
        errorTip: '<tr class="load-error-tr"><td colspan="3"><p class="load-error-tip">嗝~</p></td></tr>'
      })
      BODY.append(rankHtml)
    })
  }

  function disableLoadMore() {
    var btn = $('#J_rankLoad');
    btn.html('没有更多了눈_눈')
    btn.addClass('disable')
  }

  function loadingMore() {
    var btn = $('#J_rankLoad');
    btn.html('拼命加载中(˶‾᷄ ⁻̫ ‾᷅˵)')
  }

  function loadComplete() {
    var btn = $('#J_rankLoad');
    btn.html('点击查看更多(๑╹ڡ╹)╭')
  }

  function loadMoreFn() {
    var rankBody = $('#J_rankBody')
    var btn = $('#J_rankLoad');
    btn.on('tap', function() {
      if (pageLock) {
        return false;
      };
      pageLock = true;
      if (btn.hasClass('disable')) {
        return false;
      };
      loadingMore()
      page = page + 1;
      runderRank(page, function(html) {
        rankBody.append(html)
      })
    })
  }
})
