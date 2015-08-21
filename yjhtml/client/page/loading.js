define(function(require,exports,module){

  var $ = require('zepto');
  var preloader = require('module/preloader');

  var loader = preloader.create(function(type, val)
  {
    switch(type)
    {
      case 'error':
        break;
      case 'complete':
        //InitMain();
        seajs.use("page/exp");
        console.log('complete');
        break;
      case 'progress':
        var pct = Math.round(val * 100) + '%';
        document.querySelector('#J_proCur').style.width = pct;
        //pg.querySelector("p").innerText = pct;
        break;
    }
  });
  loader.addRange([
    ASSET + '/img/logo.png'
  ]);
  loader.load();

})