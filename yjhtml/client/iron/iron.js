define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var evtClick = 'click';
  var Scratch = require('module/scratch');
  if ($.os.phone) {
    evtClick = 'tap';
  }

  function I() {
    this._init.apply(this, arguments)
  }

  I.prototype = {
    _resetFont: function () {
      var a = window,
        b = a.innerWidth <= 320 ? 320 : a.innerWidth,
        c = 100 * (b / 320);
      document.documentElement.style.fontSize = c + "px";
    },
    initScratch: function() { // 初始化刮奖
      var that = this;
      var w = $('#iron').width();
      var scratch = new Scratch('iron', ASSET + 'img/iron/start@2x.png', 'image', w, w, drawPercent);
      scratch.init(ASSET + 'img/iron/thanks@2x.png', 'image');

      function drawPercent(percent) {
        if (percent == 100) {
          //scratch.init(that.getRandomTicket(), 'image');
        }
      }
      var freshBtn = document.getElementById('freshBtn');
      if (freshBtn) {
        freshBtn.onclick = function() {
          scratch.init(that.getRandomTicket(), 'image');
        }
      }
    },
    getRandomTicket: function () { // 随机出奖
      var ticketImg = [ASSET + 'img/iron/thanks@2x.png'];
      //, ASSET + 'img/iron/helmet@2x.png'
      console.log(Math.floor(Math.random() * ticketImg.length));
      return ticketImg[Math.floor(Math.random() * ticketImg.length)]
    },
    _init: function() {
      var that = this;
      // window.onresize = function () {
      //   $('#iron').html('');
      //   that._resetFont();
      //   that.initScratch();
      // }
      setTimeout(function() {
        that._resetFont();
        //setTimeout(function(){
          $('.wrap').show();
          that.initScratch();
          
        //}, 20)
        
      }, 0)
    }
  };

  module.exports = new I();
});