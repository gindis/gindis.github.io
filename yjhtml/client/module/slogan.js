define(function(require,exports,module){

  var $ = require('zepto');

  /**
   * [attrDatas description]
   * @type {Object}
   */
  // var attrDatas = {
  //   'game': 20, // 游戏
  //   'exhibition': 15, // 展会
  //   'cos': 5, // COS
  //   'anime': 10, // 动漫
  //   'coterie': 5, // 同人
  //   'online': 15, // 网配
  //   'novel': 20 // 小说
  // }
  //
  //
  var attrTips = {
    'anime': [
      '你已经集齐七颗龙珠了',
      '勇敢的少年啊，酷爱去创造奇迹',
      '去吧~皮卡丘!',
      '我要成为海贼王的男人！'
    ],
    'animeCoterie': ['aya～我的屏幕怎么有点脏'],
    'animeCos': ['不要拿原图来骗我！！',
      '男神我要给你生猴子~',
      '啊啊啊毁我男（女）神！'],
    'game': [
      '啊啊啊毁我男（女）神！',
      '撸多了吧你'],
    'coterie': [
      'prprprprprprprpr',
      '啊我的24k钛合金狗眼！！！',
      '我被大触包围了！'
    ],
    'cosCoterie': [
      '真爱不分国界性别和次元！'
    ],
    'cos': [
      '内景外景夜景……计划又排到明年了啊',
      'XXX一生推！',
      '这么可爱一定是蓝孩纸',
      '圆满了，一！本！满！足！'
    ],
    'exhibition': [
      '主办良心嗷嗷嗷嗷',
      '每一次展会前都是修罗期',
      '排队抢本拍场照'
    ],
    'novel': [
      '掉坑，撸文，卖安利',
      '我追的文又坑了',
      '读者和作者不得不说的故事'
    ],
    'online':[
      '麻麻问我为什么跪着听歌',
      '我的耳朵怀孕了>/////<'
    ]
  }

  var attrDatas = window.attrData;
  var tips = '';

  /**
   * 获取最大值
   */
  function maxVal(data) {
    var attrVal = [];
    var attrKey = [];
    var maxkey = [];
    //var maxData = {};
    for(var key in data) {
      attrKey.push(key);
      attrVal.push(data[key]);
    }
    var max = attrVal[0];
    for(var i=1;i<attrVal.length;i++){
      if(max<attrVal[i]) max=attrVal[i];
    }
    for(var key in data) {
      if (data[key] === max) {
        //if (maxkey == '') {
          maxkey.push(key);
        //}
      }
    }
    //maxData[maxkey] = max;
    return maxkey;
  }

  // 最大值索引
  var maxKeys = maxVal(attrDatas);

  var maxKey = maxKeys[0];

  var secondKeys = getSecondKey();
  var secondKey = secondKeys[0];

  // if (maxKeys.length >= 2) {
  //   for (var i = maxKeys.length - 1; i >= 0; i--) {
  //     if (maxKeys[i] === 'anime' || maxKeys[i] === 'coterie' || maxKeys[i] === 'cos') {
  //       maxKey = maxKeys[0];
  //     }
  //   };
  //   maxKey = maxKeys[0];
  // }
  //console.log(maxKey);

  if (maxKey === 'game') { // 游戏
    //console.log('游戏');
    var TIP = attrTips['game'];
    tips = TIP[getRound(TIP.length)];


  } else if (maxKey === 'exhibition') {// 展会
    //console.log('展会');
    var TIP = attrTips['exhibition'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'online') { //声控
    //console.log('声控');
    var TIP = attrTips['online'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'novel') { // 小说
    //console.log('小说');
    var TIP = attrTips['novel'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'anime' && secondKey[0] === 'coterie') { // 动漫、同人
    //console.log('动漫、同人');
    var TIP = attrTips['animeCoterie'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'anime' && secondKey[0] === 'cos') { // 动漫、COS
    //console.log('动漫、COS');
    var TIP = attrTips['animeCos'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'coterie' && secondKey[0] === 'cos') { // 同人、COS
    //console.log('同人、COS');
    var TIP = attrTips['coterieCos'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'anime') { // 动漫
    //console.log('动漫');
    var TIP = attrTips['anime'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'coterie') { // 同人
    //console.log('同人');
    var TIP = attrTips['coterie'];
    tips = TIP[getRound(TIP.length)];

  } else if (maxKey === 'cos') { // COS
    //console.log('COS');
    var TIP = attrTips['cos'];
    tips = TIP[getRound(TIP.length)];

  } else {
    tips = '他太懒了，还没有属性...';
  }
  $('#J_signature').html(tips);

  function getSecondKey() {
    var newAttrDatas = attrDatas;
    delete newAttrDatas.maxKey;
    //第二大值索引
    var secondKey = maxVal(newAttrDatas);
    return secondKey;
  }

  function getRound(leg){
    return parseInt(Math.random()*leg);
  }

})
