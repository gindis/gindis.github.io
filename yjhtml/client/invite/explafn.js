define(function(require, exports, module) {
  var $ = require('zepto')
  var Mask = require('widget/mask');
  var Dialog = require('widget/dialog');

  function explaFn() {
    var explaHtml = '<div class="J_explaTip"><ol>\
      <li>1、每成功邀请一位用户可获得一个基分;</li>\
      <li>2、一台手机注册只计算一次基分;</li>\
      <li>3、基分可兑换实物奖品，由JUJU官方在每周四发送，周四前兑换的奖品本周发货，周四后兑换的奖品下周发货;</li>\
      <li>4、每期活动截止前选取肥皂排名前10的用户，给予特别大奖，会有JUJU小助手联系;</li>\
      <li>5、邀请用户未满10人的用户不会进入排行;</li>\
    </ol>\
    <p>最终解释权由 @巨聚网络 所有</p></div>';
    var explaBtn = $('#J_inviteExpla')
    var explaDialog = new Dialog()
    var pinkMask = new Mask()
    pinkMask.mask.on('hide', function() {
      explaDialog.close()
    })
    explaBtn.on('tap', function() {
      pinkMask.show()
      explaDialog.render(explaHtml)
    })
  }

  module.exports = explaFn;
})
