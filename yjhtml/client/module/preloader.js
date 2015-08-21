define(function(require, exports, module) {
  'use strict';

  var preloader = function(a) {
    if ("function" != typeof a)
      throw new Error("Invalid callback");
    this.cb = a, this.images = []
  };

  preloader.prototype.add = function(a) {
    this.images.push(a)
  };
  preloader.prototype.addRange = function(a) {
    "object" == typeof a && a.length && (this.images = this.images.concat(a))
  };
  preloader.prototype.load = function() {
    for (var a = this.images.length, b = 0, c = this.cb, d = function() {
        b++, c("progress", b / a), b >= a && c("complete")
      }, e = 0; e < this.images.length; e++) {
      var f = new Image;
      f.onload = function() {
        this.onload = null, d()
      }, f.onerror = function() {
        this.onerror = null, c("error", this.src), d()
      }, f.src = this.images[e]
    }
  };
  var Preloader = {
    create: function(b) {
      return new preloader(b)
    }
  }

  module.exports = exports = Preloader;
})