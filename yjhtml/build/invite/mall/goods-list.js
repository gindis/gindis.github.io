define("invite/mall/goods-list",[],function(a,e,t){var r=t.exports=function(a){function e(a,e,t){a.data,a.affix;e.data+="\n  ",l.line=4;var r;r=L.call(c,a,{hash:[{key:["title"],value:"已兑完",depth:0},{key:["className"],value:"disable-item",depth:0}]},e);var o=r;return e=e.writeEscaped(o),e.data+="\n",e}function t(a,e,t){var r=a.data,o=a.affix;e.data+='\n    <a href="javascript:;" data-stock="',l.line=12;var c=(s=o.productstock)!==t?s:(s=r.productstock)!==t?s:a.resolveLooseUp(["productstock"]);e=e.writeEscaped(c),e.data+='" data-id="';var d=(s=o.productid)!==t?s:(s=r.productid)!==t?s:a.resolveLooseUp(["productid"]);e=e.writeEscaped(d),e.data+='" class="buy">';var i=(s=o.title)!==t?s:(s=r.title)!==t?s:a.resolveLooseUp(["title"]);return e=e.writeEscaped(i),e.data+="</a>\n  ",e}function r(a,e,t){var r=a.data,o=a.affix;e.data+='\n    <a href="javascript:;" data-stock="',l.line=14;var c=(s=o.productstock)!==t?s:(s=r.productstock)!==t?s:a.resolveLooseUp(["productstock"]);e=e.writeEscaped(c),e.data+='" data-id="';var d=(s=o.productid)!==t?s:(s=r.productid)!==t?s:a.resolveLooseUp(["productid"]);e=e.writeEscaped(d),e.data+='" class="buy disable">';var i=(s=o.title)!==t?s:(s=r.title)!==t?s:a.resolveLooseUp(["title"]);return e=e.writeEscaped(i),e.data+="</a>\n  ",e}function o(a,o,d){var i=a.data,p=a.affix;o.data+="\n",l.line=2;var n;n=L.call(c,a,{hash:[{key:["title"],value:"兑换",depth:0}]},o);var u=n;o=o.writeEscaped(u),o.data+="\n",l.line=3,l.line=3;var v=(s=p.productstock)!==d?s:(s=i.productstock)!==d?s:a.resolveLooseUp(["productstock"]),m=v;m=0===v,o=k.call(c,a,{params:[m],fn:e},o),o.data+='\n<div class="item ',l.line=6;var f=(s=p.className)!==d?s:(s=i.className)!==d?s:a.resolveLooseUp(["className"]);o=o.writeEscaped(f),o.data+='">\n  <img src="',l.line=7;var h=(s=p.productimg)!==d?s:(s=i.productimg)!==d?s:a.resolveLooseUp(["productimg"]);o=o.writeEscaped(h),o.data+='">\n  <h3>',l.line=8;var w=(s=p.productprice)!==d?s:(s=i.productprice)!==d?s:a.resolveLooseUp(["productprice"]);o=o.writeEscaped(w),o.data+='基分</h3>\n  <span class="name">',l.line=9;var U=(s=p.productname)!==d?s:(s=i.productname)!==d?s:a.resolveLooseUp(["productname"]);o=o.write(U),o.data+='</span>\n  <em class="store">剩余:',l.line=10;var E=(s=p.productstock)!==d?s:(s=i.productstock)!==d?s:a.resolveLooseUp(["productstock"]);o=o.writeEscaped(E),o.data+="</em>\n  ",l.line=11,l.line=11;var g=(s=p.productprice)!==d?s:(s=i.productprice)!==d?s:a.resolveLooseUp(["productprice"]),b=g,x=a.resolveLoose(["userScore"],1);return b=x>g,o=k.call(c,a,{params:[b],fn:t,inverse:r},o),o.data+="\n</div>\n",o}{var s,c=this,d=c.root,i=c.buffer,p=c.scope,l=(c.runtime,c.name,c.pos),n=p.data,u=p.affix,v=d.nativeCommands,m=d.utils,f=(m.callFn,m.callDataFn,m.callCommand,v.range,v["void"],v.foreach,v.forin,v.each),k=(v["with"],v["if"]),L=v.set;v.include,v.parse,v.extend,v.block,v.macro,v["debugger"]}i.data+="",l.line=1;var h=(s=u.productlist)!==a?s:(s=n.productlist)!==a?s:p.resolveLooseUp(["productlist"]);return i=f.call(c,p,{params:[h],fn:o},i)};r.TPL_NAME=t.id||t.name});