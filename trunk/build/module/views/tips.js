define("module/views/tips",[],function(e,t,i){var a=i.exports=function(e){var t,i=this,a=i.root,n=i.buffer,o=i.scope,s=(i.runtime,i.name,i.pos,o.data),r=o.affix,c=a.nativeCommands,p=a.utils;p.callFn,p.callDataFn,p.callCommand,c.range,c["void"],c.foreach,c.forin,c.each,c["with"],c["if"],c.set,c.include,c.includeOnce,c.parse,c.extend,c.block,c.macro,c["debugger"];n.data+='<div class="ui-poptips ui-poptips-';var d=(t=r.type)!==e?t:(t=s.type)!==e?t:o.resolveLooseUp(["type"]);n=n.write(d),n.data+='"><div class="ui-poptips-cnt"><i></i>';var l=(t=r.content)!==e?t:(t=s.content)!==e?t:o.resolveLooseUp(["content"]);return n=n.write(l),n.data+="</div></div>",n};a.TPL_NAME=i.id||i.name});