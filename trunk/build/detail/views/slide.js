define("detail/views/slide",[],function(a,e,i){var n=i.exports=function(a){function e(a,e,i){var n=a.data,s=a.affix;e.data+='\n  <div class="item" style="display:block;background-image:url(',v.line=6;var t=(l=s.url)!==i?l:(l=n.url)!==i?l:a.resolveLooseUp(["url"]);e=e.writeEscaped(t),e.data+=')">\n    <div class="mask"></div>\n    <!-- <a class="alink" href="detail-goods.html?id=',v.line=8;var r=(l=s.id)!==i?l:(l=n.id)!==i?l:a.resolveLooseUp(["id"]);return e=e.writeEscaped(r),e.data+='"></a> -->\n  </div>\n  ',e}function i(a,e,i){a.data,a.affix;return e.data+='class="current"',e}function n(a,e,n){var s=a.data,t=a.affix;e.data+="\n  <span ",v.line=15;var d=(l=t.xindex)!==n?l:(l=s.xindex)!==n?l:a.resolveLooseUp(["xindex"]),o=d;return o=0===d,e=b.call(r,a,{params:[o],fn:i},e),e.data+="></span>\n  ",e}function s(a,i,s){var t=a.data,d=a.affix;i.data+='\n<div class="block-img banner ">\n<div class="span-img">\n  <div class="slide J_slide">\n  ',v.line=5,v.line=5;var o=(l=d.picList)!==s?l:(l=t.picList)!==s?l:a.resolveLooseUp(["picList"]);i=g.call(r,a,{params:[o],fn:e},i),i.data+='\n  </div>\n</div>\n<div class="dots J_dots">\n  ',v.line=14,v.line=14;var c=(l=d.picList)!==s?l:(l=t.picList)!==s?l:a.resolveLooseUp(["picList"]);return i=g.call(r,a,{params:[c],fn:n},i),i.data+="\n</div>\n</div>\n",i}var l,t,r=this,d=r.root,o=r.buffer,c=r.scope,v=(r.runtime,r.name,r.pos),p=c.data,m=c.affix,u=d.nativeCommands,f=d.utils,g=(f.callFn,f.callDataFn,f.callCommand,u.range,u["void"],u.foreach,u.forin,u.each),b=(u["with"],u["if"]);u.set,u.include,u.parse,u.extend,u.block,u.macro,u["debugger"];o.data+="",v.line=1;var L=(l=m.picList)!==a?null!=l?t=l.length:l:(l=p.picList)!==a?null!=l?t=l.length:l:c.resolveLooseUp(["picList","length"]),x=L;x=L>0,o=b.call(r,c,{params:[x],fn:s},o),o.data+='\n\n<div class="tags">\n  <ul class="taglist">\n    <li class="item tag J_reg"><b></b>',v.line=23;var N=(l=m.brandName)!==a?l:(l=p.brandName)!==a?l:c.resolveLooseUp(["brandName"]);o=o.writeEscaped(N),o.data+='</li>\n    <li class="item category J_reg"><b></b>',v.line=24;var h=(l=m.categoryName)!==a?l:(l=p.categoryName)!==a?l:c.resolveLooseUp(["categoryName"]);o=o.writeEscaped(h),o.data+='</li>\n    <li class="item color J_reg"><b></b>',v.line=25;var U=(l=m.colorName)!==a?l:(l=p.colorName)!==a?l:c.resolveLooseUp(["colorName"]);return o=o.writeEscaped(U),o.data+='</li>\n  </ul>\n</div>\n\n<div class="action border-b">\n  <button class="ui-btn-lg J_reg">购买</button>\n</div>',o};n.TPL_NAME=i.id||i.name});