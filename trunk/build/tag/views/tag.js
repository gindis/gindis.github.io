define("tag/views/tag",[],function(a,e,l){var n=l.exports=function(a){function e(a,e,l){var n=a.data,s=a.affix;e.data+='\n    <figure>\n      <img src="',o.line=6;var d=(t=s.match)!==l?null!=t?null!=(i=t.picture)?r=i.url:i:t:(t=n.match)!==l?null!=t?null!=(i=t.picture)?r=i.url:i:t:a.resolveLooseUp(["match","picture","url"]);e=e.writeEscaped(d),e.data+='">\n      <figcaption>\n        <p class="des nowrap-multi">',o.line=8;var c=(t=s.match)!==l?null!=t?i=t.description:t:(t=n.match)!==l?null!=t?i=t.description:t:a.resolveLooseUp(["match","description"]);e=e.writeEscaped(c),e.data+='</p>\n        <p class="info"><span class="name"><a class="link" data-typ="user" data-id="',o.line=9;var u=(t=s.match)!==l?null!=t?null!=(i=t.user)?r=i.id:i:t:(t=n.match)!==l?null!=t?null!=(i=t.user)?r=i.id:i:t:a.resolveLooseUp(["match","user","id"]);e=e.writeEscaped(u),e.data+='" href="./people.html?uid=';var p=(t=s.match)!==l?null!=t?null!=(i=t.user)?r=i.id:i:t:(t=n.match)!==l?null!=t?null!=(i=t.user)?r=i.id:i:t:a.resolveLooseUp(["match","user","id"]);e=e.writeEscaped(p),e.data+='">';var m=(t=s.match)!==l?null!=t?null!=(i=t.user)?r=i.name:i:t:(t=n.match)!==l?null!=t?null!=(i=t.user)?r=i.name:i:t:a.resolveLooseUp(["match","user","name"]);e=e.writeEscaped(m),e.data+='</a></span> <span data-id="';var h=(t=s.match)!==l?null!=t?i=t.id:t:(t=n.match)!==l?null!=t?i=t.id:t:a.resolveLooseUp(["match","id"]);e=e.writeEscaped(h),e.data+='" class="J_fav like">';var v=(t=s.match)!==l?null!=t?i=t.praiseCount:t:(t=n.match)!==l?null!=t?i=t.praiseCount:t:a.resolveLooseUp(["match","praiseCount"]);e=e.writeEscaped(v),e.data+='</span></p>\n      </figcaption>\n      <a class="link" data-type="dynamic" data-id="',o.line=11;var f=(t=s.match)!==l?null!=t?i=t.id:t:(t=n.match)!==l?null!=t?i=t.id:t:a.resolveLooseUp(["match","id"]);e=e.writeEscaped(f),e.data+='" href="./detail-goods.html?id=';var g=(t=s.match)!==l?null!=t?i=t.id:t:(t=n.match)!==l?null!=t?i=t.id:t:a.resolveLooseUp(["match","id"]);return e=e.writeEscaped(g),e.data+='"></a>\n    </figure>\n    ',e}function l(a,l,n){var i=a.data,r=a.affix;l.data+='\n<div id="wrap">\n  <div id="columns">\n    ',o.line=4,o.line=4;var d=(t=r.list)!==n?t:(t=i.list)!==n?t:a.resolveLooseUp(["list"]);return l=f.call(s,a,{params:[d],fn:e},l),l.data+="\n  </div>\n</div>\n",l}function n(a,e,l){a.data,a.affix;return e.data+="\n该标签下没有相关搭配～\n",e}var t,i,r,s=this,d=s.root,c=s.buffer,u=s.scope,o=(s.runtime,s.name,s.pos),p=u.data,m=u.affix,h=d.nativeCommands,v=d.utils,f=(v.callFn,v.callDataFn,v.callCommand,h.range,h["void"],h.foreach,h.forin,h.each),g=(h["with"],h["if"]);h.set,h.include,h.includeOnce,h.parse,h.extend,h.block,h.macro,h["debugger"];c.data+="",o.line=1;var w=(t=m.list)!==a?null!=t?i=t.length:t:(t=p.list)!==a?null!=t?i=t.length:t:u.resolveLooseUp(["list","length"]),L=w;return L=w>0,c=g.call(s,u,{params:[L],fn:l,inverse:n},c)};n.TPL_NAME=l.id||l.name});