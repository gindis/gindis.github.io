define(function(require, exports, module) {
  var $ = require('zepto');
  var host = 'http://appwap.juju.la';

  function extend(target, source) {
    if (!target) {
      return source;
    };
    var target = target || {};
    for (var i in source) {
      if (target[i] == undefined) {
        target[i] = source[i]
      };
    }
    return target;
  }

  function Net(params) {
    this.defaultParams = params || null;
  }

  Net.prototype.get = function(url, params, success, failure) {
    url = host + url;
    if (typeof params == 'function') {
      failure = success;
      success = params;
      params = null;
    }
    params = extend(params, this.defaultParams)
    $.ajax({
      type: 'GET',
      url: url,
      dataType: 'JSON',
      data: params,
      success: function(res) {
        var res;
        try{
          res = JSON.parse(res);
        }catch(e){
          return failure(null)
        }
        if (res.state == 0) {
          success && success(res.data);
        } else {
          failure && failure(res);
        }
      },
      error: function(xhr, type) {
        failure(null)
      }
    });
  }
  Net.prototype.post = function(url, data, success, failure) {
    $.ajax({
      url: host + url,
      data: data,
      type: 'POST',
      success: function (res) {
        var res;
        try{
          res = JSON.parse(res);
        }catch(e){
          return failure(null)
        }
        if (res.state == 0) {
          success && success(res.data);
        } else {
          failure && failure(res);
        }
      },
      error: function () {
        failure && failure(null)
      }
    })
  };

  module.exports = Net;
})
