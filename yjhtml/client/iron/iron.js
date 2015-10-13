define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var evtClick = 'click';
  var Scratch = require('module/scratch');
  if ($.os.phone) {
    evtClick = 'tap';
  }

  function I() {
    this.scratch = null;
    this.one = true;
    this._init.apply(this, arguments)
  }

  I.prototype = {
    _resetFont: function() {
      var a = window,
        b = a.innerWidth <= 320 ? 320 : a.innerWidth,
        c = 100 * (b / 320);
      document.documentElement.style.fontSize = c + "px";
    },
    initScratch: function(code) { // 初始化刮奖
      var that = this;
      if (!that.scratch) {
        var w = $('#iron').width();
        that.scratch = new Scratch('iron', ASSET + 'img/iron/start@2x.png', 'image', w, w, drawPercent);

      }
      console.log(code);
      if (typeof code != 'undefined') {
        var def = 'op';
        that.scratch.init(ASSET + 'img/iron/' + def + '.png', 'image');
        //console.log('>>>________' + 'iron');
        function drawPercent(percent) {
          if (that.one) {
            that.one = false;
            $.ajax({
              type: 'POST',
              url: '/market/gangtiexia/drawlottery',
              data: {
                juid: curjujuid,
                jukey: jujukey
              },
              success: function(r) {
                r = JSON.parse(r);
                var code = r.state;
                // console.log(r);
                // console.log('>>>state:' + r.state + imgName);
                var imgName = 'thanks@2x';
                if (code == 10000) { // 中奖了
                  imgName = 'helmet@2x';
                } else if (code == 10001) { // 未中奖
                  imgName = 'thanks@2x';
                } else if (code == 10002) { // 今天已经抽过奖了
                  imgName = 'thanks@2x';
                } else if (code == 10003) { // 抽奖失败
                  imgName = 'thanks@2x';
                } else if (code == 10004) { // 活动已经结束
                  imgName = 'thanks@2x';
                } else {
                  imgName = 'thanks@2x';
                }
                $('#iron').attr('style', 'background-image: url(' + ASSET + 'img/iron/' + imgName + '.png);background-size:contain;');
              }
            })
          }
          if (percent > 90 && code == 10000) {
            //scratch.init(that.getRandomTicket(), 'image');
            if ($('.smFrom').length == 0) {
              $('body').append('<div class="smFrom"><div class="ipt"><input type="tel" style="outline:none;" placeholder="输入您的手机号" class="tel" id="J_tel"/></div><div class="act"><button id="sbtTel"  style="outline:none;" class="sbt"></button></div></div>');
              $('#sbtTel').on(evtClick, function() {
                var tel = $('#J_tel').val();
                var reg = /^0?1[3|4|5|8][0-9]\d{8}$/;
                if (tel == '' || !(reg.test(tel))) {
                  alert('手机号不合法');
                  return;
                }
                $.ajax({
                  type: 'POST',
                  url: '/market/gangtiexia/recordtelephone',
                  data: {
                    juid: curjujuid,
                    jukey: jujukey,
                    tel: tel
                  },
                  success: function(r) {
                    r = JSON.parse(r);
                    alert(r.message);
                  }
                })
              })
            }
          }
        }

        var freshBtn = document.getElementById('freshBtn');
        if (freshBtn) {
          freshBtn.onclick = function() {
            that.scratch.init(that.getRandomTicket(), 'image');
          }
        }
      }
    },
    lotterAjax: function() {
      var that = this;
      // $.ajax({
      //   type: 'POST',
      //   url: '/market/gangtiexia/drawlottery',
      //   data: {
      //     juid: curjujuid,
      //     jukey: jujukey
      //   },
      //   success: function(r) {
      //     r = JSON.parse(r)
      //console.log(r);
      //console.log('>>>state:' + r.state + imgName);
      that.initScratch(true);
      //   }
      // })
    },
    pushContact: function() {

    },
    getRandomTicket: function() { // 随机出奖
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
        that.lotterAjax();

        //}, 20)

      }, 0)
    }
  };

  module.exports = new I();
});