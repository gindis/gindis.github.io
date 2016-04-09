define("category/views/item",[],function(a,e,l){var n=l.exports=function(a){function e(a,e,l){a.data,a.affix;return e.data+="liked",e}function l(a,l,n){var i=a.data,t=a.affix;l.data+='\n    <figure>\n      <img src="',f.line=5;var s=(o=t.match)!==n?null!=o?null!=(d=o.picture)?c=d.url:d:o:(o=i.match)!==n?null!=o?null!=(d=o.picture)?c=d.url:d:o:a.resolveLooseUp(["match","picture","url"]);l=l.writeEscaped(s),l.data+='">\n      <figcaption>\n        <p class="des nowrap-multi">',f.line=7;var r=(o=t.match)!==n?null!=o?d=o.description:o:(o=i.match)!==n?null!=o?d=o.description:o:a.resolveLooseUp(["match","description"]);l=l.writeEscaped(r),l.data+='</p>\n        <p class="info"><span class="name"><a class="link" data-typ="user" data-id="',f.line=8;var p=(o=t.match)!==n?null!=o?null!=(d=o.user)?c=d.id:d:o:(o=i.match)!==n?null!=o?null!=(d=o.user)?c=d.id:d:o:a.resolveLooseUp(["match","user","id"]);l=l.writeEscaped(p),l.data+='" href="./people.html?uid=';var m=(o=t.match)!==n?null!=o?null!=(d=o.user)?c=d.id:d:o:(o=i.match)!==n?null!=o?null!=(d=o.user)?c=d.id:d:o:a.resolveLooseUp(["match","user","id"]);l=l.writeEscaped(m),l.data+='">';var v=(o=t.match)!==n?null!=o?null!=(d=o.user)?c=d.name:d:o:(o=i.match)!==n?null!=o?null!=(d=o.user)?c=d.name:d:o:a.resolveLooseUp(["match","user","name"]);l=l.writeEscaped(v),l.data+='</a></span> <span data-id="';var h=(o=t.match)!==n?null!=o?d=o.id:o:(o=i.match)!==n?null!=o?d=o.id:o:a.resolveLooseUp(["match","id"]);l=l.writeEscaped(h),l.data+='" class="J_fav like ';var g=(o=t.match)!==n?null!=o?d=o.isPraise:o:(o=i.match)!==n?null!=o?d=o.isPraise:o:a.resolveLooseUp(["match","isPraise"]);l=E.call(u,a,{params:[g],fn:e},l),l.data+='">';var L=(o=t.match)!==n?null!=o?d=o.praiseCount:o:(o=i.match)!==n?null!=o?d=o.praiseCount:o:a.resolveLooseUp(["match","praiseCount"]);l=l.writeEscaped(L),l.data+='</span></p>\n      </figcaption>\n      <a class="link" data-type="dynamic" data-id="',f.line=10;var U=(o=t.id)!==n?o:(o=i.id)!==n?o:a.resolveLooseUp(["id"]);l=l.writeEscaped(U),l.data+='" href="./detail-goods.html?id=';var w=(o=t.id)!==n?o:(o=i.id)!==n?o:a.resolveLooseUp(["id"]);return l=l.writeEscaped(w),l.data+='"></a>\n    </figure>\n  ',l}function n(a,e,n){var i=a.data,t=a.affix;e.data+="\n  ",f.line=3,f.line=3;var s=(o=t.dynamics)!==n?null!=o?d=o.list:o:(o=i.dynamics)!==n?null!=o?d=o.list:o:a.resolveLooseUp(["dynamics","list"]);return e=w.call(u,a,{params:[s],fn:l},e),e.data+="\n",e}function i(a,e,l){var i=a.data,t=a.affix;e.data+="\n",f.line=2,f.line=2;var s=(o=t.dynamics)!==l?null!=o?null!=(d=o.list)?c=d.length:d:o:(o=i.dynamics)!==l?null!=o?null!=(d=o.list)?c=d.length:d:o:a.resolveLooseUp(["dynamics","list","length"]),r=s;return r=s>0,e=E.call(u,a,{params:[r],fn:n},e),e.data+="\n",e}function t(a,e,l){var n=a.data,i=a.affix;e.data+='\n    <figure>\n      <img src="',f.line=20;var t=(o=i.picture)!==l?null!=o?d=o.url:o:(o=n.picture)!==l?null!=o?d=o.url:o:a.resolveLooseUp(["picture","url"]);e=e.writeEscaped(t),e.data+='">\n      <figcaption>\n        <p class="des nowrap-multi">',f.line=22;var s=(o=i.description)!==l?o:(o=n.description)!==l?o:a.resolveLooseUp(["description"]);e=e.writeEscaped(s),e.data+='</p>\n        <p class="price"><span>&yen;',f.line=23;var r=(o=i.price)!==l?o:(o=n.price)!==l?o:a.resolveLooseUp(["price"]);e=e.writeEscaped(r),e.data+='</span></p>\n      </figcaption>\n      <a class="link" data-type="product" data-id="',f.line=25;var c=(o=i.id)!==l?o:(o=n.id)!==l?o:a.resolveLooseUp(["id"]);e=e.writeEscaped(c),e.data+='" href="./detail-goods.html?id=';var u=(o=i.id)!==l?o:(o=n.id)!==l?o:a.resolveLooseUp(["id"]);return e=e.writeEscaped(u),e.data+='"></a>\n    </figure>\n    ',e}function s(a,e,l){var n=a.data,i=a.affix;e.data+="\n    ",f.line=18,f.line=18;var s=(o=i.products)!==l?null!=o?d=o.list:o:(o=n.products)!==l?null!=o?d=o.list:o:a.resolveLooseUp(["products","list"]);return e=w.call(u,a,{params:[s],fn:t},e),e.data+="\n  ",e}function r(a,e,l){var n=a.data,i=a.affix;e.data+="\n  ",f.line=17,f.line=17;var t=(o=i.products)!==l?null!=o?null!=(d=o.list)?c=d.length:d:o:(o=n.products)!==l?null!=o?null!=(d=o.list)?c=d.length:d:o:a.resolveLooseUp(["products","list","length"]),r=t;return r=t>0,e=E.call(u,a,{params:[r],fn:s},e),e.data+="\n",e}var o,d,c,u=this,p=u.root,m=u.buffer,v=u.scope,f=(u.runtime,u.name,u.pos),h=v.data,g=v.affix,L=p.nativeCommands,U=p.utils,w=(U.callFn,U.callDataFn,U.callCommand,L.range,L["void"],L.foreach,L.forin,L.each),E=(L["with"],L["if"]);L.set,L.include,L.includeOnce,L.parse,L.extend,L.block,L.macro,L["debugger"];m.data+="",f.line=1;var y=(o=g.choose)!==a?o:(o=h.choose)!==a?o:v.resolveLooseUp(["choose"]),x=y;x=0===y,m=E.call(u,v,{params:[x],fn:i},m),m.data+="\n\n",f.line=16,f.line=16;var k=(o=g.choose)!==a?o:(o=h.choose)!==a?o:v.resolveLooseUp(["choose"]),C=k;return C=1===k,m=E.call(u,v,{params:[C],fn:r},m),m.data+="\n",m};n.TPL_NAME=l.id||l.name});