define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');

  var preloader = require('module/preloader');
  
  // 实例化 preloader
  var loader = preloader.create(function(type, val) {
    switch (type) {
      case 'error': // 加载错误
        break;
      case 'complete': // 加载完成操作
        setTimeout(function() {
          seajs.use("game/" + config.gameName, function() {
            $('#J_loading').remove();
          });
        }, 420);
        break;
      case 'progress': // 加载进度
        var pct = Math.round(val * 100) + '%';
        document.querySelector('#J_pronum').innerHTML = pct;
        document.querySelector('#J_proCur').style.width = pct;
        break;
    }
  });

  // 预加载图片
  loader.addRange([
    ASSET + '/img/logo.png',
    ASSET + '/img/attr_icon.png',
    ASSET + '/img/attr_tit.png',
    ASSET + '/img/poto/bg.png',
    ASSET + '/img/poto/btn-star.png',
    ASSET + '/img/poto/egg.png',
    ASSET + '/img/poto/envelope-body.png',
    ASSET + '/img/poto/envelope-header.png',
    ASSET + '/img/poto/gamestart.png',
    ASSET + '/img/poto/invite-box.png',
    ASSET + '/img/poto/prize.png',
    ASSET + '/img/poto/leg.png',
    ASSET + '/img/poto/recommend-bg.png',
    ASSET + '/img/poto/fail.png'
  ]);

  // 加载图片
  loader.load();

})