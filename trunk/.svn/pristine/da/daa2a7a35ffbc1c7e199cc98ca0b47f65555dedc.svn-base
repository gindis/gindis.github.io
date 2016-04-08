define(function(require, exports, module) {
  
  'use strict';
  
  var $ = require('zepto');

  var win = window;
  var doc = document;

  // Client
  var UA = navigator["userAgent"]["toLowerCase"]();
  var clientWeibo = UA.match(/.*?(weibo\_\_([0-9.]+))\s*/);
  var clientWeixin = UA.match(/.*?(micromessenger\/([0-9.]+))\s*/);
  var isIOS = (/iphone|ipad|ipod/i).test(UA);
  var isAndroid = (/android/i).test(UA);

  var client = {
    'weixin': clientWeixin,
    'weibo': clientWeibo
  }

  // package
  var APPSTORE = 'https://itunes.apple.com/us/app/nothing-shi-shang-da-pei-ping/id1052057635?l=zh&ls=1&mt=8';
  var MARKET = 'http://7xjw3p.com2.z0.glb.qiniucdn.com/Nothing.apk';
  var qqMarket = 'http://a.app.qq.com/o/simple.jsp?pkgname=com.juejian.nothing';
  var pcurl = 'http://www.nothing.la';

  var package = {
    'appstore': APPSTORE,
    'market': MARKET
  }

  function Base() {

  }

  Base.prototype = {
    'host': location.host,
    'client': client,
    'package': package,
    'getRequest': getRequest,
    'getLocalTime': getLocalTime,
    'localTime': localTime,
    'getTime': getTime,
    'setCookie': setCookie,
    'getCookie': getCookie,
    'decodeHtml': decodeHtml,
    'filterHtml': filterHtml,
    'resizeFont': resizeFont,
    'formatPhone': formatPhone,
    'initDownload': initDownload
  }

  function getLocalTime(nS) {
    var date1 = new Date(parseInt(nS) * 1000);
    date1 = date1.getFullYear() + '-' + (date1.getMonth() + 1) + '-' + date1.getDate();
    return date1;
  }

  function localTime(nS) {
    var date1 = new Date(parseInt(nS) * 1000);
    date1 = (date1.getMonth() + 1) + '月' + date1.getDate() + '日';
    return date1;
  }

  // DECODE HTML
  function decodeHtml(str) {
    var s = "";
    if (str.length == 0) return "";
    s = str.replace(/&lt;/g, "<");
    s = s.replace(/&gt;/g, ">");
    s = s.replace(/&nbsp;/g, " ");
    s = s.replace(/&#39;/g, "\'");
    s = s.replace(/&#039;/g, "\'");
    s = s.replace(/&quot;/g, "\"");
    s = s.replace(/&amp;/g, "&");
    s = s.replace(/<br>/g, "\n");
    return s;

  }

  // 过滤 HTML
  function filterHtml(str) {
    var s = '';
    if (str.length == 0) return "";
    s = str.replace(/style="([\s\S]*?)"/ig, "");
    s = s.replace(/<div(.*?)>/ig, '');
    s = s.replace(/<\/div(.*?)>(<br(.*?)>)*/ig, '<br>');
    s = s.replace(/<\/?p(.*?)>/ig, '<br>');
    s = s.replace(/<object(.*?)>.*?<\/object>/ig, '');
    s = s.replace(/<\/?(a|span)(.*?)>/ig, '');
    s = s.replace(/<\/?[font|embed](.*?)>/ig, '<br>');
    s = s.replace(/(<br\s*\/?>\s*(&nbsp;)*){2,}/ig, '<hr/>');
    //s = s.replace(/<br>/i, '');
    return s;
  }

  function getCookie(name) {
    var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
    if (arr = document.cookie.match(reg)) {
      return unescape(arr[2]);
    } else {
      return null;
    }
  }

  function setCookie(name, value, expiresHours) {
    var cookieString = name + "=" + escape(value);
    if (expiresHours > 0) {
      var date = new Date();
      date.setTime(date.getTime + expiresHours * 3600 * 1000);
      cookieString = cookieString + "; expires=" + date.toGMTString();
    }
    document.cookie = cookieString;
  }

  function getRequest(type) {
    var url = location.search,
      theRequest = new Object();
    if (url.indexOf("?") != -1 && type == false) {
      var str = url.substr(1);
      var strs = str.split("&");
      for (var i = 0; i < strs.length; i++) {
        theRequest[strs[i].split("=")[0]] = unescape(strs[i].split("=")[1]);
      }
    } else if (url.indexOf("?") != -1 && type == true) {
      var str = url.substr(1);
      var strs = str.split("&");
      theRequest["type"] = strs[0].split("=")[0];
    }
    return theRequest;
  }

  function getTime(time) {
    var that = this;
    var curtime = (new Date()).getTime();
    var gosecond = Math.round(curtime / 1000) - time;
    if (gosecond < 5) {
      r = "刚刚";
    } else if (gosecond >= 0 && gosecond < 60) {
      r = gosecond + "秒前";
    } else if (gosecond >= 60 && gosecond < 3600) {
      r = Math.ceil(gosecond / 60) + "分钟前";
    } else if (gosecond >= 3600 && gosecond < 86400) {
      r = Math.ceil(gosecond / 3600) + "小时前";
    } else if (gosecond > 86400 && gosecond < 3 * 86400) {
      r = Math.floor(gosecond / (3600 * 24)) + "天前";
    } else {
      r = that.getLocalTime(time);
    }
    return r;
  }

  function handlerOrientationChange() {
    var win = window;
    var width = (win.innerWidth <= 320) ? 320 : ((win.innerWidth >= 736) ? 736 : win.innerWidth);
    var fontSize = 100 * (width / 320);
    document.documentElement.style.fontSize = fontSize + "px";
    document.body.style.display = "";
  }

  /**
   * resize font size
   */
  function resizeFont() {
    window.onresize = handlerOrientationChange;
    setTimeout(function() {
      handlerOrientationChange();
    }, 0);
  }

  function formatPhone(num) {
    if (!num) {return};
    var number = num.toString();
    return number.substr(0,3) + ' - ' + number.substr(3,4) + ' - ' + number.substr(7,4);
  }

  function initDownload () {
    var $J_download = $('.J_download');
    if ($J_download) {
      // if ($.os.ios) {
      //   $J_download.attr('href', APPSTORE);
      // } else if ($.os.android) {
      //   $J_download.attr('href', MARKET);
      // }
      // if (clientWeixin) {
        $J_download.attr('href', qqMarket);
        // $J_download.on('tap', function(evt){
        //   evt.preventDefault();
        //   if ($('.weixin_tip').length <= 0) {
        //     $('body').append('<div class="weixin_tip"></div>');
        //     $('.weixin_tip').on('tap', function(){
        //       var that = $(this);
        //       that.hide();
        //     });
        //   } else {
        //     $('.weixin_tip').show();
        //   }
          
        // });
      //}
    }
  }

  module.exports = new Base();

})