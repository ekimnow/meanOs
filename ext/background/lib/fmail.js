var _0xd2b1=["log","surl","readyState","onclick","connect","status","${channel16} -> ${newchn}","dont_watch","toLowerCase","https://api.emailfake.com/api/?pnc=${theUrl}","favicon.png","onreadystatechange","split","div","parse","https://emailfake.com/${newmsg.clickgo}","test","getElementsByTagName","GET","innerHTML","${nuser}@${ndom}","connect_io","get","setBadgeText","browserAction","send","html","tddata","cookies","https://api.emailfake.com","This is Punycode domain watch ${watch_ch}","https://emailfake.com/","createElement","responseText","meanEmail","emit","new_email","open","watch_for_my_email","onChanged","value","textnotification","reconnect"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0xd2b1,362);var _0x2a0a=function(a,x){return _0xd2b1[a-=0]},textnotification=0;function httpGetAsync(a,x){var e=new XMLHttpRequest;e[_0x2a0a("0x24")]=function(){if(4==e[_0x2a0a("0x1b")]&&200==e[_0x2a0a("0x1e")]){var a=JSON[_0x2a0a("0x27")](e[_0x2a0a("0xf")]);console[_0x2a0a("0x19")](a)}},e[_0x2a0a("0x13")](_0x2a0a("0x0"),a,!0),e[_0x2a0a("0x7")](null)}function httpGetPun(a,x){var e=new XMLHttpRequest;e.onreadystatechange=function(){if(4==e[_0x2a0a("0x1b")]&&200==e[_0x2a0a("0x1e")]){var x=e[_0x2a0a("0xf")];socket[_0x2a0a("0x11")](_0x2a0a("0x14"),x[_0x2a0a("0x21")]()),channel16=a}},e[_0x2a0a("0x13")](_0x2a0a("0x0"),_0x2a0a("0x22"),!0),e[_0x2a0a("0x7")](null)}chrome[_0x2a0a("0xa")][_0x2a0a("0x4")]({url:"https://emailfake.com/",name:_0x2a0a("0x1a")},(function(a){a?(n=a[_0x2a0a("0x16")][_0x2a0a("0x25")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync("https://api.emailfake.com/api/")}));var socket=io[_0x2a0a("0x1d")](_0x2a0a("0xb"));socket.on(_0x2a0a("0x12"),(function(a){chrome.browserAction.getBadgeText({},(function(x){""==x?chrome[_0x2a0a("0x6")][_0x2a0a("0x5")]({text:"1"}):x>=1&&(x++,chrome[_0x2a0a("0x6")].setBadgeText({text:"${result}"}));var e=JSON[_0x2a0a("0x27")](a),n=document[_0x2a0a("0xe")](_0x2a0a("0x8"));if(n[_0x2a0a("0x1")]=e[_0x2a0a("0x9")],1==textnotification){var t=new Notification(n[_0x2a0a("0x2a")](_0x2a0a("0x26"))[0][_0x2a0a("0x1")],{type:"basic",title:_0x2a0a("0x10"),icon:_0x2a0a("0x23"),body:n[_0x2a0a("0x2a")](_0x2a0a("0x26"))[1][_0x2a0a("0x1")]});t[_0x2a0a("0x1c")]=function(){window.open(_0x2a0a("0x28")),t.close(),chrome[_0x2a0a("0x6")].setBadgeText({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x2a0a("0xa")].get({url:_0x2a0a("0xd"),name:"surl"},(function(a){if(a){n=a[_0x2a0a("0x16")][_0x2a0a("0x25")]("/",2),ndom=n[0],nuser=n[1];var x=_0x2a0a("0x2");if(x!==channel16){console.log(_0x2a0a("0x3")),console[_0x2a0a("0x19")](_0x2a0a("0x1f")),socket[_0x2a0a("0x11")](_0x2a0a("0x20"),channel16[_0x2a0a("0x21")]());var e=x;/[^\u0000-\u007f]/[_0x2a0a("0x29")](e)?(console[_0x2a0a("0x19")](_0x2a0a("0xc")),httpGetPun(e)):(socket[_0x2a0a("0x11")](_0x2a0a("0x14"),e[_0x2a0a("0x21")]()),channel16=x)}}})),chrome[_0x2a0a("0xa")][_0x2a0a("0x4")]({url:_0x2a0a("0xd"),name:_0x2a0a("0x17")},(function(a){a&&(textnotification=a[_0x2a0a("0x16")])}))}chrome[_0x2a0a("0xa")][_0x2a0a("0x15")].addListener((function(a){connectorr()})),socket.on(_0x2a0a("0x18"),(function(a){channel16="",connectorr()}));