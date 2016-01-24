define(function(require, exports, module) {

  /**
   * @author gindis
   * @version 0.0.1
   */

  'use strict';

  var $ = require('zepto');
  var Flipsnap = require('flipsnap');
  var Util = require('common/js/util');
  var Net = require('module/js/net');
  var Modal = require('module/js/modal');
  var About = require('module/views/about-render');
  var Slide = require('./views/slide-render');
  var Matchgood = require('./views/matchgoods-render');
  var Hotpost = require('./views/hotpost-render');
  var recPost = require('./views/recpost-render');
  var Post = require('./views/post-render');
  var Talent = require('./views/talent-render');
  var Similar = require('./views/similar-render');

  // 处理穿透事件冒泡
  var attachFastClick = require('module/js/fastclick');
  attachFastClick(document.body);

  var net = new Net();
  var req = new Object();
    req = Util.getRequest(false);

  if (!_GLOBAL_CONFIG_.id) {
    _GLOBAL_CONFIG_.id = req['id'];
  }


  var evtClick = 'click';
  if ($.os.android || $.os.ios)  {
    evtClick = 'tap';
  }

  function Page() {
    this.init.apply(this, arguments);
  }

  Page.prototype = {
    init: function() {
      var self = this;
      self.loadData();
      self.bindEvent();
    },
    slide: function() {
      if ($('.J_slide').length <= 0) return;
      var $items = $('.J_slide .item');
      if ($items.length <= 0) {
        $('.J_dots').remove();
        return;
      }
      var w = window.innerWidth;
      var $pointer = $('.J_dots span');
      if ($items.length <= 1) return;
      $items.width(w);
      $('.J_slide').width(w * $items.length);
      window.flipsnap = Flipsnap('.J_slide', {
        distance: window.innerWidth,
        transitionDuration: 100
      });
      flipsnap.element.addEventListener('fstouchstart', function(ev) {
        //$('#J_myfri').css('display', 'none');
      }, false);
      flipsnap.element.addEventListener('fspointmove', function() {
        $pointer.filter('.current').removeClass('current');
        $pointer.eq(flipsnap.currentPoint).addClass('current');
      }, false);
    },
    renderSlide: function(data) {
      $('.J_slideWrap').append(Slide(data));
    },
    goodsDetail: function() {
      var self = this;
      // 单品详情
      net.ajax('goodsDetail', {
        id: _GLOBAL_CONFIG_.id
      }, function(res) {
        //console.log(res);
        $(Slide(res)).appendTo('.J_slideWrap');
        self.slide();
        // 相似单品
        net.ajax('similarGoods', {
          //id: _GLOBAL_CONFIG_.id
          //brandId: res.brandId,
          categoryId: res.categoryId,
          colorId: res.colorId,
          deviceType: 'h5'
        }, function(res) {
          $(Similar(res)).appendTo('.J_similar');
        });
      });

      // 推荐帖子
      net.ajax('recPost', {
        id: _GLOBAL_CONFIG_.id
      }, function(res) {
        $(recPost(res)).appendTo('.J_recPost');
      });

      // 帖子榜
      net.ajax('postChart', {}, function(res) {
        $(Post(res)).appendTo('.J_post');
      });

      // 达人榜
      net.ajax('userHot', {}, function(res) {
        $(Talent(res)).appendTo('.J_talent');
      });
    },
    goReg: function() {
      new Modal({
        content: '需要注册才能执行该操作',
        button: [{
          title: '取消'
        },{
          title: '注册'
        }],
        callback: function(d, id) {
          if (id == 1) {
            location.href = './reg.html';
          }
        }
      });
    },
    goodsMacth: function() {
      // 搭配详情
      net.ajax('macthGoods', {
        id: _GLOBAL_CONFIG_.id
      }, function(res) {
        $(Matchgood(res.match)).appendTo('.J_content');
        // 他的热门帖子
        net.ajax('hotPost', {
          id: _GLOBAL_CONFIG_.id
        }, function(ress) {
          ress.username = res.match.user.name;
          $(Hotpost(ress)).appendTo('.J_hot');
          document.title = $('.name').text() + '发布的搭配';
          var $Jmark = $('.J_mark');
          if ($Jmark.length > 0) {
            $Jmark.on(evtClick, function(){
              var that = $(this);
              if (that.hasClass('on')) {
                that.children('.mark').fadeIn();
                that.removeClass('on');
              } else {
                that.addClass('on');
                that.children('.mark').fadeOut();
              }
              
            });
          }
        });
      });
    },
    // 加载数据
    loadData: function(conf) {
      var self = this;
      if (_GLOBAL_CONFIG_.pageId == 'goodsDetail') {
        self.goodsDetail();
      } else if (_GLOBAL_CONFIG_.pageId == 'goodsMacth') {
        self.goodsMacth();
      }
      $(About()).appendTo('.J_about');
      Util.initDownload();
    },
    // 事件绑定
    bindEvent: function() {
      var self = this;
      $('.J_reg').live(evtClick, function(){
        self.goReg();
      });
    }
  };

  module.exports = Page;
});