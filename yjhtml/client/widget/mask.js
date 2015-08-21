define(function(require, exports, module) {
  var $ = require('zepto');

  var defaultOpt = {
    width: '100%',
    height: '100%',
    backgroundColor: '#000',
    opacity: '0.6',
    position: 'absolute',
    top: '0',
    left: '0',
    zIndex: '999'
  }

  function extend (target, source) {
    var target = target || {};
    for(var i in source ){
      if (target[i] == undefined) {
        target[i] = source[i]
      };
    }
    return target;
  }

  function Mask(config) {
    var self = this;
    self.rendered = false;
    self.config = extend(config, defaultOpt);
    self.mask = $('<div/>', {
      class: 'J_maskLayer'
    })
    self.mask.on('tap', function() {
      self.hide();
    })
  }

  Mask.prototype = {
    show: function() {
      var self = this;
      // console.log(self.rendered);
      if (!self.rendered) {
        self.rendered = true;
        self.config.height = $('body').height();
        self.mask.css(self.config)
        self.mask.appendTo('body')
      } else {
        self.mask.css('display', 'block');
      };
    },
    hide: function() {
      var self = this;
      if (self.rendered) {
        self.mask.trigger('hide')
        self.mask.hide()
      }
    },
    toggle: function() {
      var self = this;
      if (!!self.mask) {
        self.mask.toggle()
      };
    }
  }

  module.exports = Mask
;
})
