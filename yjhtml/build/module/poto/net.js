define("module/poto/net",["zepto"],function(e,a,t){function o(e,a,t,o){e=d[e],"function"==typeof a&&(o=t,t=a,a=null);var p=config.uid;a=r.extend({v:"1.1",app_key:"",uid:p,sid:config.sid},a),r.ajax({type:"POST",url:i.replace(/{{method}}/g,e),dataType:"JSON",data:a,success:function(e){var a=JSON.parse(e);0==a.state?t&&t(a.data):o&&o(a)},error:function(e,a){}})}var r=e("zepto"),p="online",d={me:"me",getUser:"getuser",prize:"prize",checkPrize:"checkprize",favDream:"favdream",myDream:"mydream",doDream:"dodream",getDream:"getdream"},n={local:"/{{method}}",daily:"http://appwap.juju.la/yj/{{method}}",online:"http://appwap.juju.la/yj/{{method}}"},i=n[p];t.exports=a=o});