var _0x4936=["parse","toLowerCase","meanEmail","open","setBadgeText","get","readyState","test","https://emailfake.com/","div","value","basic","status","addListener","close","html","createElement","log","${result}","split","cookies","reconnect","responseText","https://api.emailfake.com/api/","emit","${nuser}@${ndom}","innerHTML","https://api.emailfake.com","getElementsByTagName","tddata","new_email","onclick","https://api.emailfake.com/api/?pnc=${theUrl}","watch_for_my_email","favicon.png","textnotification","${channel16} -> ${newchn}","dont_watch","connect","browserAction","onreadystatechange","This is Punycode domain watch ${watch_ch}","send"];!function(x,e){!function(e){for(;--e;)x.push(x.shift())}(++e)}(_0x4936,135);var _0x30b0=function(x,e){return _0x4936[x-=0]},textnotification=0;function httpGetAsync(x,e){var t=new XMLHttpRequest;t[_0x30b0("0x22")]=function(){if(4==t[_0x30b0("0x0")]&&200==t[_0x30b0("0x6")]){var x=JSON[_0x30b0("0x25")](t[_0x30b0("0x10")]);console.log(x)}},t[_0x30b0("0x28")]("GET",x,!0),t[_0x30b0("0x24")](null)}function httpGetPun(x,e){var t=new XMLHttpRequest;t.onreadystatechange=function(){if(4==t.readyState&&200==t[_0x30b0("0x6")]){var e=t[_0x30b0("0x10")];socket[_0x30b0("0x12")]("watch_for_my_email",e[_0x30b0("0x26")]()),channel16=x}},t[_0x30b0("0x28")]("GET",_0x30b0("0x1a"),!0),t[_0x30b0("0x24")](null)}chrome[_0x30b0("0xe")][_0x30b0("0x2a")]({url:_0x30b0("0x2"),name:"surl"},(function(x){x?(n=x.value[_0x30b0("0xd")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync(_0x30b0("0x11"))}));var socket=io[_0x30b0("0x20")](_0x30b0("0x15"));socket.on(_0x30b0("0x18"),(function(x){chrome[_0x30b0("0x21")].getBadgeText({},(function(e){""==e?chrome[_0x30b0("0x21")].setBadgeText({text:"1"}):e>=1&&(e++,chrome.browserAction[_0x30b0("0x29")]({text:_0x30b0("0xc")}));var t=JSON[_0x30b0("0x25")](x),n=document[_0x30b0("0xa")](_0x30b0("0x9"));if(n[_0x30b0("0x14")]=t[_0x30b0("0x17")],1==textnotification){var o=new Notification(n[_0x30b0("0x16")](_0x30b0("0x3"))[0][_0x30b0("0x14")],{type:_0x30b0("0x5"),title:_0x30b0("0x27"),icon:_0x30b0("0x1c"),body:n[_0x30b0("0x16")](_0x30b0("0x3"))[1][_0x30b0("0x14")]});o[_0x30b0("0x19")]=function(){window[_0x30b0("0x28")]("https://emailfake.com/${newmsg.clickgo}"),o[_0x30b0("0x8")](),chrome[_0x30b0("0x21")][_0x30b0("0x29")]({text:""})}}}))}));var channel16="";function connectorr(){chrome.cookies.get({url:"https://emailfake.com/",name:"surl"},(function(x){if(x){n=x[_0x30b0("0x4")][_0x30b0("0xd")]("/",2),ndom=n[0],nuser=n[1];var e=_0x30b0("0x13");if(e!==channel16){console[_0x30b0("0xb")]("connect_io"),console[_0x30b0("0xb")](_0x30b0("0x1e")),socket[_0x30b0("0x12")](_0x30b0("0x1f"),channel16[_0x30b0("0x26")]());var t=e;/[^\u0000-\u007f]/[_0x30b0("0x1")](t)?(console[_0x30b0("0xb")](_0x30b0("0x23")),httpGetPun(t)):(socket.emit(_0x30b0("0x1b"),t[_0x30b0("0x26")]()),channel16=e)}}})),chrome[_0x30b0("0xe")].get({url:"https://emailfake.com/",name:_0x30b0("0x1d")},(function(x){x&&(textnotification=x.value)}))}chrome[_0x30b0("0xe")].onChanged[_0x30b0("0x7")]((function(x){connectorr()})),socket.on(_0x30b0("0xf"),(function(x){channel16="",connectorr()}));