define(function(require, exports, module) {

  'use strict';

  var $ = require('zepto');
  var Flipsnap = require('flipsnap');
  var evtClick = 'click';
  if ($.os.phone) {
    evtClick = 'tap';
  }

  function G() {
    this._init.apply(this, arguments)
  }

  G.prototype = {
    _slide: function() {
      if ($('#J_slide').length <= 0) return;
      var w = window.innerWidth;
      var $pointer = $('#J_pointer span');
      var $items = $('#J_slide .span-img-item');
      if ($items.length <= 1) return;
      $items.width(w);
      $('#J_slide').width(w * $items.length);
      window.flipsnap = Flipsnap('#J_slide', {
        distance: window.innerWidth,
        transitionDuration: 100
      });
      flipsnap.element.addEventListener('fstouchstart', function(ev) {
        //$('#J_myfri').css('display', 'none');
      }, false);
      flipsnap.element.addEventListener('fspointmove', function() {
        $pointer.filter('.current').removeClass('current');
        $pointer.eq(flipsnap.currentPoint).addClass('current');
      }, false);
    },
    _openFix: function () {
      var $Jfix = $('#J_fix');
      if ($Jfix.length <=0)return;
      var $JfixCon = $('#J_fixCon');
      $Jfix.on(evtClick, function () {
        var parent = $Jfix.parent();
        var $b = $(this).find('b');
        if (!parent.hasClass('open')) {
          $JfixCon.animate({
            height: '.83rem',
            opacity: 1
          }, 'ease-in-out', function(){

          });
          $b.attr('style', 'transform:rotate(-180deg)');
          parent.addClass('open');
        } else {
          $JfixCon.animate({
            height: 0,
            opacity: 0
          }, 'ease-in-out');
          $b.attr('style', '');
          parent.removeClass('open');
        }
      });
    },
    _init: function() {
      var self = this;
      self._slide();
      self._openFix();
    }
  };

  module.exports = new G();
});