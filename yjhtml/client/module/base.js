define(function(require, exports, module) {

  var UA = navigator["userAgent"]["toLowerCase"]();
  var clientWeibo = UA.match(/.*?(weibo\_\_([0-9.]+))\s*/);
  var clientWeixin = UA.match(/.*?(micromessenger\/([0-9.]+))\s*/);
  var isIOS = (/iphone|ipad|ipod/i).test(UA);
  var isAndroid = (/android/i).test(UA);
  var isIphone = (/iphone/i).test(UA);
  var isUC = (/ucbrowser/).test(UA);

  var base = {

  }

  base.market = {
    'ios': 'https://itunes.apple.com/cn/app/juju-er-ci-yuan-jiao-you-shen-qi/id914807615?l=zh&ls=1&mt=8',
    //'andorid': 'http://apkdownload.juju.la/juju_v1.4.0_share.apk',
    'android': 'http://juju.la/download',
    'qq': 'http://a.app.qq.com/o/simple.jsp?pkgname=la.juju.android',
    'juju': 'http://juju.la/download'
  }

  base.client = {
    'weibo': clientWeibo,
    'weixin': clientWeixin
  }

  module.exports = base;
})