define(function(require, exports, module) {

  'use strict';

  var UA = navigator["userAgent"]["toLowerCase"]();
  var clientWeibo = UA.match(/.*?(weibo\_\_([0-9.]+))\s*/); // weibo
  var clientWeixin = UA.match(/.*?(micromessenger\/([0-9.]+))\s*/); // weixin
  var isiOS = (/iphone|ipad|ipod/i).test(UA);
  var isAndroid = (/android/i).test(UA);
  var NOTHINGBridge = null;

  // iOS
  function connectWebViewJavascriptBridge(callback) {
    if (window.WebViewJavascriptBridge) {
      callback(WebViewJavascriptBridge)
    } else {
      document.addEventListener('WebViewJavascriptBridgeReady', function() {
        callback(WebViewJavascriptBridge)
      }, false)
    }
  }
  // 调用处理
  function callHandler(evt, data, callback) {
    if (!NOTHINGBridge) {
      connectWebViewJavascriptBridge(function(bridge) {
        bridge.init(function(message, responseCallback) {
          var data = {
            'Javascript Responds': 'Wee!'
          }
          responseCallback(data);
        })
        NOTHINGBridge = bridge;
        bridge.callHandler(evt, data, callback)
      })
    } else {
      NOTHINGBridge.callHandler(evt, data, callback)
    }
  }

  /**
   * 关闭webview
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function close(data, callback) {
    if (isAndroid) {
      window.android.close();
    } else if (isiOS){
      callHandler('close', data, callback);
    } else {

    }
  }

  /**
   * 后退到上一个网页
   * @param  {[type]}   data     [description]
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function back(data, callback) {
    if (isAndroid) {
      window.android.back();
    } else if (isiOS){
      callHandler('back', data, callback);
    } else {

    }
  }

  /**
   * 打开用户页面
   * @param  {string}   data     用户ID 04b508737e1111e5830f6476bab0cf04
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function user(data, callback) {
    if (isAndroid) {
      window.android.user(JSON.stringify(data));
    } else if (isiOS){
      callHandler('user', data, callback);
    } else {

    }
  }

  /**
   * 打开品牌页面
   * @param  {string}   data     商品ID 0f61b8be78b311e59199ecf4bbd6a89c
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function brand(data, callback) {
    if (isAndroid) {
      window.android.brand(JSON.stringify(data));
    } else if (isiOS){
      callHandler('brand', data, callback);
    } else {

    }
  }

  /**
   * 打开搭配页面
   * @param  {[type]}   data     ID： 22ddcfd1a94f49839174af5aab3b7194
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function dynamic(data, callback) {
    if (isAndroid) {
      window.android.dynamic(JSON.stringify(data));
    } else if (isiOS){
      callHandler('dynamic', data, callback);
    } else {

    }
  }

  /**
   * 打开单品页面
   * @param  {string}   data     id 691a70e7b7ee49648fd0559aa6c687ae
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function product(data, callback) {
    if (isAndroid) {
      window.android.product(JSON.stringify(data));
    } else if (isiOS){
      callHandler('product', data, callback);
    } else {

    }
  }


  /**
   * 分享到QQ
   * @param  {object}   data   {"title":title,"desc":desc,"imageSrc":imageSrc,"link":link}
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function shareToQQ(data, callback) {
    if (isAndroid) {
      window.android.shareToQQ(JSON.stringify(data));
    } else if (isiOS){
      callHandler('shareToQQ', data, callback);
    } else {

    }
  }

  /**
   * 手机短信
   * @param  {object}   data     {"text":text,"phone":phone}
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function shareToSms(data, callback) {
    if (isAndroid) {
      window.android.shareToSms(JSON.stringify(data));
    } else if (isiOS){
      callHandler('shareToSms', data, callback);
    } else {

    }
  }

  /**
   * 分享到微信
   * @param  {object}   data      {"title":"标题","desc":desc,"imageSrc":imageSrc,"link":link}
   * @param  {Function} callback [description]
   * @return {[type]}            [description]
   */
  function shareToWechat(data, callback) {
    if (isAndroid) {
      window.android.shareToWechat(JSON.stringify(data));
    } else if (isiOS){
      callHandler('shareToWechat', data, callback);
    } else {

    }
  }

  // return;

  var Nbridge = {
    'close': close,
    'user': user,
    'brand': brand,
    'dynamic': dynamic,
    'product': product,
    'shareToQQ': shareToQQ,
    'shareToSms': shareToSms,
    'shareToWechat': shareToWechat
  }

  module.exports = Nbridge;
})