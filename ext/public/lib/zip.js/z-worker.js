var _0x8ea6=["prototype","bind","stack","message","now","data","crcOutput","z-worker.js should be run only once","performance","append","crc","get","crcInput","importScripts","scripts","crcType","length","codec","codecClass","zWorkerInitialized","apply","input","duplicated sn","progress","flush","type","buffer","table"];!function(x,t){!function(t){for(;--t;)x.push(x.shift())}(++t)}(_0x8ea6,342);var _0x20d9=function(x,t){return _0x8ea6[x-=0]};!function(x){"use strict";if(x[_0x20d9("0xd")])throw new Error(_0x20d9("0x1"));x.zWorkerInitialized=!0,addEventListener(_0x20d9("0x19"),(function(x){var e,d,r=x[_0x20d9("0x1b")],n=r[_0x20d9("0x13")],c=r.sn,s=t[n];if(s)try{s(r)}catch(x){e={type:n,sn:c,error:(d=x,{message:d[_0x20d9("0x19")],stack:d[_0x20d9("0x18")]})},postMessage(e)}}));var t={importScripts:function(x){x[_0x20d9("0x8")]&&x[_0x20d9("0x8")][_0x20d9("0xa")]>0&&importScripts[_0x20d9("0xe")](void 0,x[_0x20d9("0x8")]);postMessage({type:_0x20d9("0x7")})},newTask:d,append:n,flush:n},e={};function d(t){var d=x[t[_0x20d9("0xc")]],r=t.sn;if(e[r])throw Error(_0x20d9("0x10"));e[r]={codec:new d(t.options),crcInput:t[_0x20d9("0x9")]===_0x20d9("0xf"),crcOutput:"output"===t[_0x20d9("0x9")],crc:new c},postMessage({type:"newTask",sn:r})}var r=x[_0x20d9("0x2")]?x[_0x20d9("0x2")][_0x20d9("0x1a")][_0x20d9("0x17")](x.performance):Date[_0x20d9("0x1a")];function n(x){var t=x.sn,n=x.type,c=x[_0x20d9("0x1b")],s=e[t];!s&&x[_0x20d9("0xc")]&&(d(x),s=e[t]);var _,o=n===_0x20d9("0x3"),a=r();if(o)try{_=s[_0x20d9("0xb")][_0x20d9("0x3")](c,(function(x){postMessage({type:_0x20d9("0x11"),sn:t,loaded:x})}))}catch(x){throw delete e[t],x}else delete e[t],_=s[_0x20d9("0xb")][_0x20d9("0x12")]();var i=r()-a;a=r(),c&&s[_0x20d9("0x6")]&&s[_0x20d9("0x4")].append(c),_&&s[_0x20d9("0x0")]&&s[_0x20d9("0x4")][_0x20d9("0x3")](_);var p=r()-a,u={type:n,sn:t,codecTime:i,crcTime:p},f=[];_&&(u[_0x20d9("0x1b")]=_,f.push(_[_0x20d9("0x14")])),o||!s[_0x20d9("0x6")]&&!s.crcOutput||(u[_0x20d9("0x4")]=s[_0x20d9("0x4")][_0x20d9("0x5")]());try{postMessage(u,f)}catch(x){postMessage(u)}}function c(){this[_0x20d9("0x4")]=-1}function s(){}c[_0x20d9("0x16")][_0x20d9("0x3")]=function(x){for(var t=0|this[_0x20d9("0x4")],e=this[_0x20d9("0x15")],d=0,r=0|x.length;d<r;d++)t=t>>>8^e[255&(t^x[d])];this[_0x20d9("0x4")]=t},c[_0x20d9("0x16")][_0x20d9("0x5")]=function(){return~this.crc},c[_0x20d9("0x16")][_0x20d9("0x15")]=function(){var x,t,e,d=[];for(x=0;x<256;x++){for(e=x,t=0;t<8;t++)1&e?e=e>>>1^3988292384:e>>>=1;d[x]=e}return d}(),x.NOOP=s,s[_0x20d9("0x16")][_0x20d9("0x3")]=function(x,t){return x},s[_0x20d9("0x16")].flush=function(){}}(this);