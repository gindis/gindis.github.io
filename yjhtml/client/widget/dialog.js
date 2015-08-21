define(function(require, exports, module) {
  var $ = require('zepto');

  var defaultOpt = {
    backgroundColor: '#fff',
    borderRadius: '15px',
    position: 'fixed',
    zIndex: '9999',
    width: '80%',
    minHeight: '100px',
    top: '-100%',
    left: '10%'
  }

  function Dialog() {
    // body...
  }

  Dialog.prototype = {
    render: function(html) {
      html = html || '';
      var self = this;
      self.dialog = $('<div/>')
      self.dialog.css(defaultOpt)
      self.dialog.html(html)
      self.dialog.appendTo('body')
      var h = self.dialog.height()
      var wh = $(window).height()
      var hh = (wh - h) / 2
      self.dialog.css('top', hh)
    },
    close: function() {
      this.dialog.remove()
    }
  }

  module.exports = Dialog;
})
