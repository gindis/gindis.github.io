define("invite/home/number",[],function(e,a,i){var n=i.exports=function(e){function a(e,a,i){{var n=e.data;e.affix}a.data+="\n        <li>",v.line=18;var t=n;return a=a.writeEscaped(t),a.data+="捡起了你的肥皂，快去JUJU找他</li>\n      ",a}function i(e,i,n){var d=e.data,r=e.affix;i.data+='\n    <ul class="friend-dynamic" id="J_friendDynamic">\n      ',v.line=17,v.line=17;var s=(t=r.myinvitedlist)!==n?t:(t=d.myinvitedlist)!==n?t:e.resolveLooseUp(["myinvitedlist"]);return i=f.call(l,e,{params:[s],fn:a},i),i.data+="\n    </ul>\n  ",i}function n(e,a,n){var r=e.data,s=e.affix;a.data+='\n<div class="invite-number">\n  <div class="relate">\n    <div class="from-me"></div>\n    <div class="from-friend">基友</div>\n    <div class="number-detail">\n      <em>',v.line=7;var o=(t=s.invitecode)!==n?t:(t=r.invitecode)!==n?t:e.resolveLooseUp(["invitecode"]);a=a.writeEscaped(o),a.data+='</em>\n      <span>肥皂番号</span>\n      <i class="line"></i>\n      <i class="arrow"></i>\n    </div>\n  </div>\n  <p>长按复制链接，把肥皂番号告诉好基友</p>\n  <div class="copy-number-wrap"><a class="copy-number" href="http://appwap.juju.la/invite/share?uid=',v.line=14;var c=(t=s.invitecode)!==n?t:(t=r.invitecode)!==n?t:e.resolveLooseUp(["invitecode"]);a=a.writeEscaped(c),a.data+='" id="J_copyNumber" class="disable-link">appwap.juju.la/invite/share?uid=';var u=(t=s.invitecode)!==n?t:(t=r.invitecode)!==n?t:e.resolveLooseUp(["invitecode"]);a=a.writeEscaped(u),a.data+="</a></div>\n  ",v.line=15,v.line=15;var p=(t=s.myinvitedlist)!==n?null!=t?d=t.length:t:(t=r.myinvitedlist)!==n?null!=t?d=t.length:t:e.resolveLooseUp(["myinvitedlist","length"]),m=p;return m=p>0,a=y.call(l,e,{params:[m],fn:i},a),a.data+="\n</div>\n",a}{var t,d,l=this,r=l.root,s=l.buffer,o=l.scope,v=(l.runtime,l.name,l.pos),c=o.data,u=o.affix,p=r.nativeCommands,m=r.utils,f=(m.callFn,m.callDataFn,m.callCommand,p.range,p["void"],p.foreach,p.forin,p.each),h=p["with"],y=p["if"];p.set,p.include,p.parse,p.extend,p.block,p.macro,p["debugger"]}s.data+="",v.line=1;var b=(t=u.userdata)!==e?t:(t=c.userdata)!==e?t:o.resolveLooseUp(["userdata"]);return s=h.call(l,o,{params:[b],fn:n},s)};n.TPL_NAME=i.id||i.name});