define("topic/views/topicdetail",[],function(a,e,l){var n=l.exports=function(a){function e(a,e,l){a.data,a.affix;return e.data+="m8",e}function l(a,e,l){var n=a.data,r=a.affix;e.data+='\n    <div class="cover">\n      <img src="',G.line=21;var s=(F=r.match)!==l?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:(F=n.match)!==l?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:a.resolveLooseUp(["match","user","cover","url"]);return e=e.writeEscaped(s),e.data+='" alt="">\n    </div>\n    ',e}function n(a,e,l){var n=a.data,r=a.affix;e.data+='\n        <li>\n          <div style="background-image: url(',G.line=30;var s=(F=r.picture)!==l?null!=F?A=F.url:F:(F=n.picture)!==l?null!=F?A=F.url:F:a.resolveLooseUp(["picture","url"]);e=e.writeEscaped(s),e.data+=');" class="cover"></div>\n          <div class="name nowrap">',G.line=31;var t=(F=r.name)!==l?F:(F=n.name)!==l?F:a.resolveLooseUp(["name"]);e=e.writeEscaped(t),e.data+='</div>\n          <div class="price">&yen; ',G.line=32;var i=(F=r.price)!==l?F:(F=n.price)!==l?F:a.resolveLooseUp(["price"]);e=e.writeEscaped(i),e.data+='</div>\n          <a class="link" href="./detail-goods.html?id=',G.line=33;var u=(F=r.id)!==l?F:(F=n.id)!==l?F:a.resolveLooseUp(["id"]);return e=e.writeEscaped(u),e.data+='"></a>\n        </li>\n        ',e}function r(a,e,l){var r=a.data,s=a.affix;e.data+='\n    <div class="goods">\n      <ul class="list">\n        ',G.line=28,G.line=28;var t=(F=s.match)!==l?null!=F?A=F.prodList:F:(F=r.match)!==l?null!=F?A=F.prodList:F:a.resolveLooseUp(["match","prodList"]);return e=Q.call(_,a,{params:[t],fn:n},e),e.data+="\n      </ul>\n    </div>\n    ",e}function s(a,n,s){var t=a.data,i=a.affix;n.data+='\n  <div class="post ',G.line=10;var u=(F=i.xindex)!==s?F:(F=t.xindex)!==s?F:a.resolveLooseUp(["xindex"]),o=u,d=(F=i.dynamics)!==s?null!=F?null!=(A=F.list)?D=A.length:A:F:(F=t.dynamics)!==s?null!=F?null!=(A=F.list)?D=A.length:A:F:a.resolveLooseUp(["dynamics","list","length"]),c=d;c=d-1,o=u!==c,n=R.call(_,a,{params:[o],fn:e},n),n.data+='">\n    <div class="head">\n      <div class="avatar"><a href="./people.html?uid=',G.line=12;var v=(F=i.match)!==s?null!=F?null!=(A=F.user)?D=A.id:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?D=A.id:A:F:a.resolveLooseUp(["match","user","id"]);n=n.writeEscaped(v),n.data+='"><img src="';var p=(F=i.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.head)?P=D.url:D:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.head)?P=D.url:D:A:F:a.resolveLooseUp(["match","user","head","url"]);n=n.writeEscaped(p),n.data+='" alt=""></a></div>\n      <div class="information">\n        <div class="name">',G.line=14;var m=(F=i.match)!==s?null!=F?null!=(A=F.user)?D=A.name:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?D=A.name:A:F:a.resolveLooseUp(["match","user","name"]);n=n.writeEscaped(m),n.data+='</div>\n        <div class="attr">',G.line=15;var f=(F=i.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.area)?P=D.name:D:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.area)?P=D.name:D:A:F:a.resolveLooseUp(["match","user","area","name"]);n=n.writeEscaped(f),n.data+="/";var h=(F=i.match)!==s?null!=F?null!=(A=F.user)?D=A.height:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?D=A.height:A:F:a.resolveLooseUp(["match","user","height"]);n=n.writeEscaped(h),n.data+="CM/";var L=(F=i.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.hair)?P=D.name:D:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.hair)?P=D.name:D:A:F:a.resolveLooseUp(["match","user","hair","name"]);n=n.writeEscaped(L),n.data+='</div>\n        <a class="follow" href="javascript:;"></a>\n      </div>\n    </div>\n    ',G.line=19,G.line=19;var U=(F=i.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:(F=t.match)!==s?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:a.resolveLooseUp(["match","user","cover","url"]),w=U;w=""!==U,n=R.call(_,a,{params:[w],fn:l},n),n.data+='\n    <div class="description">',G.line=24;var y=(F=i.match)!==s?null!=F?A=F.description:F:(F=t.match)!==s?null!=F?A=F.description:F:a.resolveLooseUp(["match","description"]);n=n.writeEscaped(y),n.data+="</div>\n    ",G.line=25,G.line=25;var g=(F=i.match)!==s?null!=F?null!=(A=F.prodList)?D=A.length:A:F:(F=t.match)!==s?null!=F?null!=(A=F.prodList)?D=A.length:A:F:a.resolveLooseUp(["match","prodList","length"]),E=g;return E=g>0,n=R.call(_,a,{params:[E],fn:r},n),n.data+="\n  </div><!--/.post-->\n  ",n}function t(a,e,l){var n=a.data,r=a.affix;e.data+="\n  ",G.line=9,G.line=9;var t=(F=r.dynamics)!==l?null!=F?A=F.list:F:(F=n.dynamics)!==l?null!=F?A=F.list:F:a.resolveLooseUp(["dynamics","list"]);return e=Q.call(_,a,{params:[t],fn:s},e),e.data+="\n  ",e}function i(a,e,l){var n=a.data,r=a.affix;G.line=41;var s=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),t=s;t=2===s;var i=t;if(i){var u=(F=r.dynamics)!==l?F:(F=n.dynamics)!==l?F:a.resolveLooseUp(["dynamics"]);i=u}var o=i;if(o){var d=(F=r.dynamics)!==l?null!=F?null!=(A=F.list)?D=A.length:A:F:(F=n.dynamics)!==l?null!=F?null!=(A=F.list)?D=A.length:A:F:a.resolveLooseUp(["dynamics","list","length"]),c=d;c=d>0,o=c}return o}function u(a,e,l){var n=a.data,r=a.affix;e.data+='<img src="';var s=(F=r.macth)!==l?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:(F=n.macth)!==l?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:a.resolveLooseUp(["macth","user","cover","url"]);return e=e.writeEscaped(s),e.data+='" alt="">',e}function o(a,e,l){var n=a.data,r=a.affix;e.data+='\n        <div class="item">\n          <div class="item-head">\n            <div class="avatar">',G.line=48;var s=(F=r.macth)!==l?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:(F=n.macth)!==l?null!=F?null!=(A=F.user)?null!=(D=A.cover)?P=D.url:D:A:F:a.resolveLooseUp(["macth","user","cover","url"]);e=R.call(_,a,{params:[s],fn:u},e),e.data+='</div>\n            <div class="information">\n              <div class="name">',G.line=50;var t=(F=r.match)!==l?null!=F?null!=(A=F.user)?D=A.name:A:F:(F=n.match)!==l?null!=F?null!=(A=F.user)?D=A.name:A:F:a.resolveLooseUp(["match","user","name"]);e=e.writeEscaped(t),e.data+='</div>\n              <div class="attr">',G.line=51;var i=(F=r.match)!==l?null!=F?null!=(A=F.user)?null!=(D=A.area)?P=D.name:D:A:F:(F=n.match)!==l?null!=F?null!=(A=F.user)?null!=(D=A.area)?P=D.name:D:A:F:a.resolveLooseUp(["match","user","area","name"]);e=e.writeEscaped(i),e.data+="/";var o=(F=r.match)!==l?null!=F?null!=(A=F.user)?D=A.height:A:F:(F=n.match)!==l?null!=F?null!=(A=F.user)?D=A.height:A:F:a.resolveLooseUp(["match","user","height"]);e=e.writeEscaped(o),e.data+='CM</div>\n            </div>\n          </div>\n          <div style="background-image: url(',G.line=54;var d=(F=r.match)!==l?null!=F?null!=(A=F.picture)?D=A.url:A:F:(F=n.match)!==l?null!=F?null!=(A=F.picture)?D=A.url:A:F:a.resolveLooseUp(["match","picture","url"]);e=e.writeEscaped(d),e.data+=');" class="cover"><span class="fav">';var c=(F=r.match)!==l?null!=F?A=F.praiseCount:F:(F=n.match)!==l?null!=F?A=F.praiseCount:F:a.resolveLooseUp(["match","praiseCount"]);e=e.writeEscaped(c),e.data+='</span><a class="link" href="./detail-goods.html?id=';var v=(F=r.macth)!==l?null!=F?A=F.id:F:(F=n.macth)!==l?null!=F?A=F.id:F:a.resolveLooseUp(["macth","id"]);return e=e.writeEscaped(v),e.data+='"></a></div>\n        </div>\n        ',e}function d(a,e,l){var n=a.data,r=a.affix;e.data+='\n  <div class="post">\n    <div class="matchs">\n      <div class="matchs-inner">\n        ',G.line=45,G.line=45;var s=(F=r.dynamics)!==l?null!=F?A=F.list:F:(F=n.dynamics)!==l?null!=F?A=F.list:F:a.resolveLooseUp(["dynamics","list"]);return e=Q.call(_,a,{params:[s],fn:o},e),e.data+="\n      </div>\n    </div>\n  </div>\n  ",e}function c(a,e,l){var n=a.data,r=a.affix;G.line=60;var s=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),t=s;return t=3===s}function v(a,e,l){var n=a.data,r=a.affix;e.data+='\n        <img width="100%" src="',G.line=69;var s=(F=r.picture)!==l?null!=F?A=F.url:F:(F=n.picture)!==l?null!=F?A=F.url:F:a.resolveLooseUp(["picture","url"]);e=e.writeEscaped(s),e.data+='" alt="';var t=(F=r.name)!==l?F:(F=n.name)!==l?F:a.resolveLooseUp(["name"]);return e=e.writeEscaped(t),e.data+='">\n        ',e}function p(a,e,l){var n=a.data,r=a.affix;e.data+='<img width="100%" src="';var s=(F=r.picture)!==l?null!=F?A=F.url:F:(F=n.picture)!==l?null!=F?A=F.url:F:a.resolveLooseUp(["picture","url"]);e=e.writeEscaped(s),e.data+='" alt="';var t=(F=r.name)!==l?F:(F=n.name)!==l?F:a.resolveLooseUp(["name"]);return e=e.writeEscaped(t),e.data+='">',e}function m(a,e,l){var n=a.data,r=a.affix;e.data+='\n    <div class="sku ui-border-b">\n      <div class="sku-head">',G.line=66;var s=(F=r.name)!==l?F:(F=n.name)!==l?F:a.resolveLooseUp(["name"]);e=e.writeEscaped(s),e.data+='</div>\n      <div class="body">\n        ',G.line=68,G.line=68;var t=(F=r.picture)!==l?null!=F?A=F.url:F:(F=n.picture)!==l?null!=F?A=F.url:F:a.resolveLooseUp(["picture","url"]);e=R.call(_,a,{params:[t],fn:v},e),e.data+="\n        <p>",G.line=71;var i=(F=r.description)!==l?F:(F=n.description)!==l?F:a.resolveLooseUp(["description"]);e=e.writeEscaped(i),e.data+='</p>\n      </div>\n      <div class="like-item">\n        <div class="cover">',G.line=74;var u=(F=r.picture)!==l?null!=F?A=F.url:F:(F=n.picture)!==l?null!=F?A=F.url:F:a.resolveLooseUp(["picture","url"]);e=R.call(_,a,{params:[u],fn:p},e),e.data+='</div>\n        <div class="information">\n          <div class="name nowrap">',G.line=76;var o=(F=r.name)!==l?F:(F=n.name)!==l?F:a.resolveLooseUp(["name"]);e=e.writeEscaped(o),e.data+='</div>\n          <div class="price">&yen; ',G.line=77;var d=(F=r.price)!==l?F:(F=n.price)!==l?F:a.resolveLooseUp(["price"]);e=e.writeEscaped(d),e.data+='</div>\n          <button class="ui-btn btn-buy">购买</button>\n        </div>\n        <a class="link" href="./detail-goods.html?id=',G.line=80;var c=(F=r.id)!==l?F:(F=n.id)!==l?F:a.resolveLooseUp(["id"]);return e=e.writeEscaped(c),e.data+='"></a>\n      </div>\n    </div><!--/.sku-->\n    ',e}function f(a,e,l){var n=a.data,r=a.affix;e.data+="\n    ",G.line=64,G.line=64;var s=(F=r.products)!==l?null!=F?A=F.list:F:(F=n.products)!==l?null!=F?A=F.list:F:a.resolveLooseUp(["products","list"]);return e=Q.call(_,a,{params:[s],fn:m},e),e.data+="\n    ",e}function h(a,e,l){var n=a.data,r=a.affix;e.data+='\n  <div class="post">\n    <div class="description ui-border-b">',G.line=62;var s=(F=r.content)!==l?F:(F=n.content)!==l?F:a.resolveLooseUp(["content"]);e=e.writeEscaped(s),e.data+="</div>\n    ",G.line=63,G.line=63;var t=(F=r.products)!==l?F:(F=n.products)!==l?F:a.resolveLooseUp(["products"]),i=t;if(i){var u=(F=r.products)!==l?null!=F?null!=(A=F.list)?D=A.length:A:F:(F=n.products)!==l?null!=F?null!=(A=F.list)?D=A.length:A:F:a.resolveLooseUp(["products","list","length"]),o=u;o=u>0,i=o}return e=R.call(_,a,{params:[i],fn:f},e),e.data+="\n  </div>\n  ",e}function L(a,e,l){var n=a.data,r=a.affix;e.data+='<img src="';var s=(F=r.user)!==l?null!=F?null!=(A=F.cover)?D=A.url:A:F:(F=n.user)!==l?null!=F?null!=(A=F.cover)?D=A.url:A:F:a.resolveLooseUp(["user","cover","url"]);return e=e.writeEscaped(s),e.data+='" alt="">',e}function U(a,e,l){a.data,a.affix;return e.data+="t1",e}function w(a,e,l){a.data,a.affix;return e.data+="t2",e}function y(a,e,l){var n=a.data,r=a.affix,s=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),t=s;return t=2===s}function g(a,e,l){a.data,a.affix;return e.data+="t1",e}function E(a,e,l){a.data,a.affix;return e.data+="穿搭示范",e}function x(a,e,l){a.data,a.affix;return e.data+="单品合集",e}function b(a,e,l){var n=a.data,r=a.affix,s=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),t=s;return t=2===s}function k(a,e,l){a.data,a.affix;return e.data+="搭配专题",e}function N(a,e,l){a.data,a.affix;return e.data+="topic-counsel",e}function j(a,e,l){a.data,a.affix;return e.data+="topic-products",e}function C(a,e,l){var n=a.data,r=a.affix,s=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),t=s;return t=2===s}function T(a,e,l){a.data,a.affix;return e.data+="topic-match",e}function I(a,e,l){var n=a.data,r=a.affix;e.data+='\n    <div style="background-image: url(',G.line=107;var s=(F=r.picture)!==l?null!=F?A=F.url:F:(F=n.picture)!==l?null!=F?A=F.url:F:a.resolveLooseUp(["picture","url"]);e=e.writeEscaped(s),e.data+=');" class="topic-item">\n      <div class="title ',G.line=108;var t=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),i=t;i=1===t,e=R.call(_,a,{params:[i],fn:U,inverse:w,elseIfs:[{test:y,fn:g}]},e),e.data+='">';var u=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),o=u;o=1===u,e=R.call(_,a,{params:[o],fn:E,inverse:x,elseIfs:[{test:b,fn:k}]},e),e.data+='</div>\n      <div class="body">\n        <p>',G.line=110;var d=(F=r.title)!==l?F:(F=n.title)!==l?F:a.resolveLooseUp(["title"]);e=e.writeEscaped(d),e.data+='</p>\n        <p class="bwt">',G.line=111;var c=(F=r.subTitle)!==l?F:(F=n.subTitle)!==l?F:a.resolveLooseUp(["subTitle"]);e=e.writeEscaped(c),e.data+='</p>\n      </div>\n      <a class="link" href="./',G.line=113;var v=(F=r.type)!==l?F:(F=n.type)!==l?F:a.resolveLooseUp(["type"]),p=v;p=1===v,e=R.call(_,a,{params:[p],fn:N,inverse:j,elseIfs:[{test:C,fn:T}]},e),e.data+=".html?id=";var m=(F=r.id)!==l?F:(F=n.id)!==l?F:a.resolveLooseUp(["id"]);return e=e.writeEscaped(m),e.data+='"></a>\n    </div>\n    ',e}function M(a,e,l){var n=a.data,r=a.affix;e.data+='\n  <div class="separator-wrap">\n  <div class="separator">\n    <div class="line ui-border-b"></div>\n    <div class="n">推荐专题</div>\n  </div><!--/.separator-->\n  </div>\n  <div class="topics-wrap">\n  <div class="topics">\n    ',G.line=106,G.line=106;var s=(F=r.subjects)!==l?F:(F=n.subjects)!==l?F:a.resolveLooseUp(["subjects"]);return e=Q.call(_,a,{params:[s],fn:I},e),e.data+='\n  </div>\n  <div class="more">\n    没有更多\n  </div>\n  ',e}var F,A,D,P,_=this,q=_.root,z=_.buffer,B=_.scope,G=(_.runtime,_.name,_.pos),H=B.data,J=B.affix,K=q.nativeCommands,O=q.utils,Q=(O.callFn,O.callDataFn,O.callCommand,K.range,K["void"],K.foreach,K.forin,K.each),R=(K["with"],K["if"]);K.set,K.include,K.parse,K.extend,K.block,K.macro,K["debugger"];z.data+='<header style="background-image: url(';var S=(F=J.picture)!==a?null!=F?A=F.url:F:(F=H.picture)!==a?null!=F?A=F.url:F:B.resolveLooseUp(["picture","url"]);z=z.writeEscaped(S),z.data+=');" class="header">\n  <h2 class="title">',G.line=2;var V=(F=J.title)!==a?F:(F=H.title)!==a?F:B.resolveLooseUp(["title"]);z=z.writeEscaped(V),z.data+='</h2>\n  <p class="partition">—</p>\n  <p class="say">',G.line=4;var W=(F=J.subTitle)!==a?F:(F=H.subTitle)!==a?F:B.resolveLooseUp(["subTitle"]);z=z.writeEscaped(W),z.data+='</p>\n  <p class="clothes"><span class="icon">',G.line=5;var X=(F=J.matchNum)!==a?F:(F=H.matchNum)!==a?F:B.resolveLooseUp(["matchNum"]);z=z.writeEscaped(X),z.data+='</span></p>\n</header>\n<section class="container">\n  ',G.line=8,G.line=8;var Y=(F=J.type)!==a?F:(F=H.type)!==a?F:B.resolveLooseUp(["type"]),Z=Y;Z=1===Y;var $=Z;if($){var aa=(F=J.dynamics)!==a?F:(F=H.dynamics)!==a?F:B.resolveLooseUp(["dynamics"]);$=aa}var ea=$;if(ea){var la=(F=J.dynamics)!==a?null!=F?null!=(A=F.list)?D=A.length:A:F:(F=H.dynamics)!==a?null!=F?null!=(A=F.list)?D=A.length:A:F:B.resolveLooseUp(["dynamics","list","length"]),na=la;na=la>0,ea=na}z=R.call(_,B,{params:[ea],fn:t,elseIfs:[{test:i,fn:d},{test:c,fn:h}]},z),z.data+='\n  <div class="separator-wrap">\n  <div class="separator">\n    <div class="line ui-border-b"></div>\n    <div class="n"><span class="pageview">',G.line=90;var ra=(F=J.viewNum)!==a?F:(F=H.viewNum)!==a?F:B.resolveLooseUp(["viewNum"]);z=z.writeEscaped(ra),z.data+='</span><span class="follows">';var sa=(F=J.followNum)!==a?F:(F=H.followNum)!==a?F:B.resolveLooseUp(["followNum"]);z=z.writeEscaped(sa),z.data+='</span></div>\n  </div><!--/.separator-->\n  </div>\n  <div class="author">\n    <div class="title">专题作者</div>\n    <div class="avatar"><a href="./people.html?uid=',G.line=95;var ta=(F=J.user)!==a?null!=F?A=F.id:F:(F=H.user)!==a?null!=F?A=F.id:F:B.resolveLooseUp(["user","id"]);z=z.writeEscaped(ta),z.data+='">';var ia=(F=J.user)!==a?null!=F?null!=(A=F.cover)?D=A.url:A:F:(F=H.user)!==a?null!=F?null!=(A=F.cover)?D=A.url:A:F:B.resolveLooseUp(["user","cover","url"]);z=R.call(_,B,{params:[ia],fn:L},z),z.data+="</a></div>\n  </div>\n  ",G.line=97,G.line=97;var ua=(F=J.subjects)!==a?null!=F?A=F.length:F:(F=H.subjects)!==a?null!=F?A=F.length:F:B.resolveLooseUp(["subjects","length"]),oa=ua;return oa=ua>0,z=R.call(_,B,{params:[oa],fn:M},z),z.data+="\n  </div>\n</section>",z};n.TPL_NAME=l.id||l.name});