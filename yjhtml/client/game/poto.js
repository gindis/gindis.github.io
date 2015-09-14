define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var Flipsnap = require('flipsnap');

  // console.info('Poto Game Start!');

  window.poto = {};

  var ele = {
    'container': $('.container'),
    'scene': $('.scene'),
    'viewport': $('.viewport')
  }

  // 阻止事件冒泡
  function pvtEvt(e) {
    e.preventDefault();
  }

  // 设置width和height
  function initWin() {
    var w = window.innerWidth;
    ele.scene.width(w);
    ele.scene.height(window.innerHeight);
    ele.viewport.width(w * 3);
  }

  function resetWin() {

  }

  // 初始化幻灯
  function initSlide() {
    var $pointer = $('.pointer span');
    window.flipsnap = Flipsnap('.viewport', {
      distance: window.innerWidth,
      transitionDuration: 100
    });
    flipsnap.element.addEventListener('fstouchstart', function(ev) {
      $('#J_myfri').css('display', 'none');
    }, false);
    flipsnap.element.addEventListener('fspointmove', function() {
      $pointer.filter('.current').removeClass('current');
      $pointer.eq(flipsnap.currentPoint).addClass('current');
    }, false);
  }

  // 禁用Touch事件
  function pvtTouch() {
    document.body.addEventListener('touchstart', pvtEvt);
  }

  initWin(); // 初始化设置width和height
  //initSlide(); // 初始化幻灯
  //pvtTouch(); // 禁用Touch事件

  var wish = require('module/poto/wish');
  var invite = require('module/poto/invite');
  
  invite.init();

})