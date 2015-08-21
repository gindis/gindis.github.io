define(function(require,exports,module){
  var $ = require('zepto');
  var ua=  navigator["userAgent"]["toLowerCase"]();
  var weiboAPP = ua.match(/.*?(weibo\_\_([0-9.]+))\s*/);
  var wxAPP = ua.match(/.*?(micromessenger\/([0-9.]+))\s*/);

  function Share() {
    var _share = {}
    var ELE = {
      'J_shareDialog': $('#J_shareDialog'),
      'shareBtn': $('#J_shareBtn'),
      'close': $('#J_close')
    }
    function toggleDialog () {
      var box = ELE.J_shareDialog;
      if (box.hasClass('slideDownRetourn')) {
        box.removeClass('slideDownRetourn').addClass('slideDown');
        box.css('display', 'none');
      }else {
        box.css('display', 'block');
        box.removeClass('slideDown').addClass('slideDownRetourn');
      }

    }
    _share.init = function () {
      ELE.shareBtn.on('tap', function(evt) {
        setTimeout(function(){
          toggleDialog();
        },100);
        return false;
      });
      ELE.J_shareDialog.on('tap', function(){
        return false;
      });
      $(document).on('tap', function(evt){
        if ($(evt.target).hasClass('mod-share')) {return}
        var box = ELE.J_shareDialog;
        box.removeClass('slideDownRetourn').addClass('slideDown');
      });
      ELE.close.on('tap', function(evt) {
        if ($(evt.target).hasClass('mod-share')) {return}
        var box = ELE.J_shareDialog;
        box.removeClass('slideDownRetourn').addClass('slideDown');
        setTimeout(function(){
          box.css('display', 'none');
        }, 400);
      });
    }

    return _share;
  }
  var share = Share();

  share.init();

})