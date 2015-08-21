// 商城购买逻辑
define(function(require, exports, module) {
  var $ = require('zepto');
  var Mask = require('widget/mask');
  var Dialog = require('widget/dialog');
  var attachFastClick = require('widget/fastclick');
  attachFastClick(document.body); // 处理穿透事件冒泡

  var scrollAnimate = require('./scroll');
  var BODY = $('#J_container')

  var xtplUser = require('./home/user-render');
  var xtplLastOrder = require('./home/last-order-render');
  var xtplGoods = require('./mall/goods-render');
  var xtplGoodsList = require('./mall/goods-list-render');

  var page = 1;

  var Net = require('widget/net');
  var Loader = new Net({
    uid: 10000143
  })

  var userScore = 0;
  var userId = 0;

  Loader.get('/invite/inviteuserinfo', function(data) {
    userScore = parseInt(data.userdata.score)
    userId = data.userdata.uid;
    var html = xtplUser(data);
    BODY.html(html);
    getLastOrder()
  })

  function getLastOrder() {
    Loader.get('/invite/lastorder', function(data) {
      var html = xtplLastOrder(data)
      BODY.append(html)
      new scrollAnimate('J_lastOrder')
      renderMall(page)
    })
  }

  var pageLock = false; // 翻页锁 避免多次触发 tap 事件

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
      data.userScore = userScore;
      if (callback) {
        return callback(data)
      };
      var mallHtml = xtplGoods(data)
      BODY.append(mallHtml)
      if (page == 1) {
        goodsLoadFn()
      };
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
      loadingMore()
      page = page + 1;
      renderMall(page, function(data) {
        var listHtml = xtplGoodsList(data)
        con.append(listHtml)
      });
    })
  }

  var goodMask = new Mask();
  var goodDialog = new Dialog();
  goodMask.mask.on('hide', function() {
    goodDialog.close();
  })

  var goodHtml = '<div class="J_goodForm">\
    <form id="J_orderForm">\
      <input type="hidden" value="{{pid}}" name="pid" />\
      <input type="text" class="col2" id="J_consignee" name="consignee" tabindex="1" placeholder="收货人姓名" />\
      <input type="number" class="col2" id="J_tel" name="tel" tabindex="2" placeholder="手机号码" />\
      <input type="text" class="col1 col-extar" id="J_user_province" name="user_province" tabindex="3" placeholder="省" />\
      <input type="text" class="col1" id="J_user_city" name="user_city" tabindex="4" placeholder="市" />\
      <textarea class="col2" id="J_address" name="address" tabindex="5" placeholder="详细地址"></textarea>\
      <div class="btns">\
        <input class="dialog-close" type="button" value="取消" />\
        <input type="submit" value="确定兑换" />\
      </div>\
      <p>仔细填写自己的收获信息哟</p>\
    </form>\
  </div>';

  function bindSubmit() {
    $('#J_orderForm').find('input').on('input', function(event) {
      var that = $(event.target);
      if (that.hasClass('error-tip')) {
        that.removeClass('error-tip')
      };
    })
    $('#J_orderForm').find('textarea').on('input', function(event) {
      var that = $(event.target);
      if (that.hasClass('error-tip')) {
        that.removeClass('error-tip')
      };
    })
    $('#J_orderForm').submit(function(event) {
      var target = $(event.target);
      var valueArray = target.serializeArray();
      var flag = false,
        inputValue;
      for (var i = 0; i < valueArray.length; i++) {
        inputValue = valueArray[i];
        if (inputValue.value == '') {
          flag = true;
          break;
        };
      };
      if (flag) {
        showError(inputValue)
        return false;
      };
      var postSerialize = target.serialize()
      var postObj = serizlize(postSerialize);
      postObj.address = postObj.user_province + '省' + postObj.user_city + '市' + postObj.address;
      delete postObj.user_province;
      delete postObj.user_city;
      postObj.uid = userId;
      Loader.post('/invite/createorder', postObj, function(data) {
        var data = parseInt(data)
        goodMask.hide();
        if (data > 0) {
          alert('兑换成功~请耐心等待我们给你发货，详情咨询JUJU小助手')
          location.reload()
        } else {
          alert('哎呀喝~好像哪里出错了的感觉，再试一次吧눈_눈');
        };
      }, function() {
        alert('哎呀喝~好像哪里出错了的感觉，再试一次吧눈_눈');
      })
      return false;
    })
  }

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

  function showError(obj) {
    var tipElem = $('#J_' + obj.name);
    tipElem.addClass('error-tip')
  }

  // 不可购买的提示
  var disableMask = new Mask()
  var disableDialog = new Dialog()
  disableMask.mask.on('hide', function() {
    disableDialog.close()
  })
  var disableTipHtml = '<div class="disable-buy-tip">\
      <p>基分还差一点啊需要扔更多肥皂呢</p>\
      <p>邀请JI友来JUJU吧</p>\
      <a href="javascript:;" class="dialog-close">Fighting! </a>\
    </div>';

  function showDisableBuy() {
    disableMask.show()
    disableDialog.render(disableTipHtml)
  }

  $(document).on('tap', '.buy', function(event) {
    var that = $(event.target)
    var pid = that.attr('data-id')
    var stock = that.attr('data-stock')
    if (stock == 0) {
      return false;
    };
    if (that.hasClass('disable')) {
      showDisableBuy()
      return false;
    };
    goodMask.show()
    goodHtml = goodHtml.replace('{{pid}}', pid)
    goodDialog.render(goodHtml)
    bindSubmit()
  });
  $(document).on('tap', '.dialog-close', function(event) {
    goodMask.hide();
    disableMask.hide();
  });
})
