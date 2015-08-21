define(function(require, exports, module) {
  function scrollAnimate(name) {
    this.ul = $('#' + name)
    this.scrollFn()
  }
  scrollAnimate.prototype.scrollFn = function() {
    var self = this;
    var ul = self.ul;
    setTimeout(function() {
      var lis = ul.find('li')
      if (lis.length < 2) {
        return;
      };
      var f = lis.eq(0);
      var fcopy = f.clone();
      var h = f.height();
      f.animate({
        marginTop: '-26px'
      }, 500, 'ease-out', function() {
        fcopy.appendTo(self.ul);
        f.remove();
        self.scrollFn();
      })
    }, 3000);
  };
  module.exports = scrollAnimate;
})
