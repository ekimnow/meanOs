var _0x30d6=["https://api.emailfake.com/api/","getElementsByTagName","value","addListener","tddata","https://emailfake.com/","https://emailfake.com/${newmsg.clickgo}","setBadgeText","div","emit","https://api.emailfake.com","onreadystatechange","reconnect","status","dont_watch","onChanged","watch_for_my_email","basic","https://api.emailfake.com/api/?pnc=${theUrl}","createElement","textnotification","cookies","readyState","${nuser}@${ndom}","This is Punycode domain watch ${watch_ch}","parse","log","html","toLowerCase","${channel16} -> ${newchn}","innerHTML","meanEmail","open","send","connect","close","getBadgeText","test","get","browserAction","split"];!function(e,x){!function(x){for(;--x;)e.push(e.shift())}(++x)}(_0x30d6,403);var _0x2452=function(e,x){return _0x30d6[e-=0]},textnotification=0;function httpGetAsync(e,x){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4==n[_0x2452("0x1d")]&&200==n[_0x2452("0x14")]){var e=JSON[_0x2452("0x20")](n.responseText);console.log(e)}},n[_0x2452("0x27")]("GET",e,!0),n.send(null)}function httpGetPun(e,x){var n=new XMLHttpRequest;n[_0x2452("0x12")]=function(){if(4==n.readyState&&200==n[_0x2452("0x14")]){var x=n.responseText;socket[_0x2452("0x10")](_0x2452("0x17"),x[_0x2452("0x23")]()),channel16=e}},n[_0x2452("0x27")]("GET",_0x2452("0x19"),!0),n[_0x2452("0x28")](null)}chrome[_0x2452("0x1c")][_0x2452("0x4")]({url:_0x2452("0xc"),name:"surl"},(function(e){e?(n=e[_0x2452("0x9")][_0x2452("0x6")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x2452("0x7"))}));var socket=io[_0x2452("0x0")](_0x2452("0x11"));socket.on("new_email",(function(e){chrome[_0x2452("0x5")][_0x2452("0x2")]({},(function(x){""==x?chrome[_0x2452("0x5")].setBadgeText({text:"1"}):x>=1&&(x++,chrome[_0x2452("0x5")][_0x2452("0xe")]({text:"${result}"}));var n=JSON[_0x2452("0x20")](e),t=document[_0x2452("0x1a")](_0x2452("0x22"));if(t[_0x2452("0x25")]=n[_0x2452("0xb")],1==textnotification){var o=new Notification(t[_0x2452("0x8")](_0x2452("0xf"))[0].innerHTML,{type:_0x2452("0x18"),title:_0x2452("0x26"),icon:"favicon.png",body:t[_0x2452("0x8")](_0x2452("0xf"))[1][_0x2452("0x25")]});o.onclick=function(){window[_0x2452("0x27")](_0x2452("0xd")),o[_0x2452("0x1")](),chrome[_0x2452("0x5")][_0x2452("0xe")]({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x2452("0x1c")].get({url:_0x2452("0xc"),name:"surl"},(function(e){if(e){n=e[_0x2452("0x9")].split("/",2),ndom=n[0],nuser=n[1];var x=_0x2452("0x1e");if(x!==channel16){console[_0x2452("0x21")]("connect_io"),console.log(_0x2452("0x24")),socket[_0x2452("0x10")](_0x2452("0x15"),channel16[_0x2452("0x23")]());var t=x;/[^\u0000-\u007f]/[_0x2452("0x3")](t)?(console[_0x2452("0x21")](_0x2452("0x1f")),httpGetPun(t)):(socket[_0x2452("0x10")](_0x2452("0x17"),t.toLowerCase()),channel16=x)}}})),chrome.cookies.get({url:_0x2452("0xc"),name:_0x2452("0x1b")},(function(e){e&&(textnotification=e.value)}))}chrome.cookies[_0x2452("0x16")][_0x2452("0xa")]((function(e){connectorr()})),socket.on(_0x2452("0x13"),(function(e){channel16="",connectorr()}));