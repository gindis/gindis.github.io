define(function(require,exports,module){
  
  'use strict';

  var $ = require('zepto');
  var d3 = require('d3');
  var pieChart = require('module/chart');
  var slogan = require('module/slogan');
  var base = require('module/base');

  if ($.os.phone || $.os.tablet) {
    var share = require('../module/share');
  } else {
    var ELE = {
      'shareBtn': $('#J_shareBtn'),
      'sina': $('#J_sina')
    }
    ELE.shareBtn.attr('href', ELE.sina.attr('href'));
  }

  var WIN = window;

  var colorsData = {
    'game': '#229aef', // 游戏
    'exhibition': '#adb941', // 展会
    'cos': '#cf424d', // 声控
    'anime': '#6bc562', // 动漫
    'coterie': '#9541b7', // 同人
    'online': '#00bdb4', // 网配
    'novel': '#d56b48', // 小说
    'rim': '#7362d6', // 周边
    'daily': '#a4a4a4' // 日常
  }

  /**
   * attrData为属性所占百分比集合
   * colors为属性颜色值集合
   * 游戏:#229aef, 展会:#adb941, COS:#cf424d, 动漫:#6bc562, 同人:#9541b7, 网配:#00bdb4, 小说:#d56b48, 周边:#7362d6, 日常: #a4a4a4
   */
  if (!WIN.attrData) {
    var attrData = [10, 10, 20, 10, 15, 10, 5, 5, 15];
    var colors = ['#229aef','#adb941','#cf424d','#6bc562','#9541b7','#00bdb4', '#d56b48', '#7362d6', '#a4a4a4'];
  } else {
    var attrData = [];
    var colors = [];
    for (var key in WIN.attrData) {
      attrData.push(WIN.attrData[key]);
      colors.push(colorsData[key]);
    }
  }

  var chartWidth = null;
  /**
   * 初始化图表
   *
   * @param  {string} sel               选择器
   * @param  {number} boxSize           区域大小
   * @param  {array}  colors            区域颜色
   * @param  {number} r1                外圆半径
   * @param  {number} r2                内圆半径
   * @param  {number} numberOfDataPoint 等分
   * @param  {array} data               各等分百分比
   */
  function _initChart(sel, boxSize, colors, r1, r2, numberOfDataPoint, data) {
    //if (data == '') {return false;}
    var chart = pieChart();
    data = d3.range(numberOfDataPoint).map(function(i) {
      return {
        id: i,
        value: data[i]
      };
    });
    chart
    .width(boxSize)
    .height(boxSize)
    .colors(colors)
    .radius(r1)
    .innerRadius(r2)
    .data(data);
    chart.render(sel);
  }

  function chartResponse () {
    if ($(window).width() > 768) {
      if (chartWidth === 270) return;
      $('#J_attrChart').html('');
      chartWidth = 270;
      _initChart('#J_attrChart', 270, colors, 135, 60, attrData.length, attrData);
    } else {
      if (chartWidth === 180) return;
      $('#J_attrChart').html('');
      chartWidth = 180;
      _initChart('#J_attrChart', 180, colors, 90, 40, attrData.length, attrData);
    }
  }

  if (attrData != '') {
    chartResponse();

    WIN.onresize = function () {
      chartResponse();
    }
  }



  //客户端
  if (jujuClient != 'juju' && window.innerWidth < 765) {
    $('.uattr h2').css('display', 'block');
    $('.promotion-bar').css('display', 'block');
  }
  if (jujuClient != 'juju' || !$.os.phone) {
    $('.head,.share').css('display','block');
  }

  // Download button
  var dbtn = $('.promotion-bar .btn');
  if (!base.client.weixin && !base.client.weibo) {
    if ($.os.android) {
      dbtn.attr('href', base.market.andorid);
    }else{
      dbtn.attr('href', base.market.ios);
    }
  } else {
    dbtn.attr('href', base.market.juju);
  }

  var dbtn1 = $('.channel .btn').eq(0);
  var dbtn2 = $('.channel .btn').eq(1);
  dbtn1.attr('href', base.market.ios);
  dbtn2.attr('href', base.market.andorid);

})