define("example/views/hello",[],function(a,e,n){var r=n.exports=function(a){function e(a,e,r){var t=a.data,o=a.affix;e.data+="\n  Hello, World! - ",l.line=2;var i=(n=o.name)!==r?n:(n=t.name)!==r?n:a.resolveLooseUp(["name"]);return e=e.writeEscaped(i),e.data+="\n",e}var n,r=this,t=r.root,o=r.buffer,i=r.scope,l=(r.runtime,r.name,r.pos),d=(i.data,i.affix,t.nativeCommands),c=t.utils,f=(c.callFn,c.callDataFn,c.callCommand,d.range,d["void"],d.foreach,d.forin,d.each,d["with"],d["if"]);d.set,d.include,d.parse,d.extend,d.block,d.macro,d["debugger"];return o.data+="",l.line=1,o=f.call(r,i,{params:[!0],fn:e},o),o.data+="\n",o};r.TPL_NAME=n.id||n.name});