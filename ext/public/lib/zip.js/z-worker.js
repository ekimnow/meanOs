var _0x10cc=["data","message","flush","type","newTask","crc","importScripts","length","buffer","crcType","crcInput","codecClass","apply","input","stack","NOOP","prototype","scripts","get","now","performance","crcOutput","codec","table","output","append","z-worker.js should be run only once","bind","progress","zWorkerInitialized"];!function(c,x){!function(x){for(;--x;)c.push(c.shift())}(++x)}(_0x10cc,476);var _0x58cc=function(c,x){return _0x10cc[c-=0]};!function(c){"use strict";if(c[_0x58cc("0x3")])throw new Error(_0x58cc("0x0"));c[_0x58cc("0x3")]=!0,addEventListener(_0x58cc("0x5"),(function(c){var t,e,r=c[_0x58cc("0x4")],n=r.type,s=r.sn,o=x[n];if(o)try{o(r)}catch(c){t={type:n,sn:s,error:(e=c,{message:e[_0x58cc("0x5")],stack:e[_0x58cc("0x12")]})},postMessage(t)}}));var x={importScripts:function(c){c[_0x58cc("0x15")]&&c[_0x58cc("0x15")][_0x58cc("0xb")]>0&&importScripts[_0x58cc("0x10")](void 0,c[_0x58cc("0x15")]);postMessage({type:_0x58cc("0xa")})},newTask:e,append:n,flush:n},t={};function e(x){var e=c[x[_0x58cc("0xf")]],r=x.sn;if(t[r])throw Error("duplicated sn");t[r]={codec:new e(x.options),crcInput:x[_0x58cc("0xd")]===_0x58cc("0x11"),crcOutput:x[_0x58cc("0xd")]===_0x58cc("0x1c"),crc:new s},postMessage({type:_0x58cc("0x8"),sn:r})}var r=c.performance?c[_0x58cc("0x18")].now[_0x58cc("0x1")](c[_0x58cc("0x18")]):Date[_0x58cc("0x17")];function n(c){var x=c.sn,n=c[_0x58cc("0x7")],s=c[_0x58cc("0x4")],o=t[x];!o&&c.codecClass&&(e(c),o=t[x]);var _,p=n===_0x58cc("0x1d"),a=r();if(p)try{_=o.codec.append(s,(function(c){postMessage({type:_0x58cc("0x2"),sn:x,loaded:c})}))}catch(c){throw delete t[x],c}else delete t[x],_=o[_0x58cc("0x1a")].flush();var i=r()-a;a=r(),s&&o[_0x58cc("0xe")]&&o[_0x58cc("0x9")][_0x58cc("0x1d")](s),_&&o[_0x58cc("0x19")]&&o[_0x58cc("0x9")][_0x58cc("0x1d")](_);var u=r()-a,f={type:n,sn:x,codecTime:i,crcTime:u},d=[];_&&(f[_0x58cc("0x4")]=_,d.push(_[_0x58cc("0xc")])),p||!o.crcInput&&!o[_0x58cc("0x19")]||(f[_0x58cc("0x9")]=o[_0x58cc("0x9")][_0x58cc("0x16")]());try{postMessage(f,d)}catch(c){postMessage(f)}}function s(){this[_0x58cc("0x9")]=-1}function o(){}s[_0x58cc("0x14")][_0x58cc("0x1d")]=function(c){for(var x=0|this[_0x58cc("0x9")],t=this.table,e=0,r=0|c.length;e<r;e++)x=x>>>8^t[255&(x^c[e])];this[_0x58cc("0x9")]=x},s[_0x58cc("0x14")].get=function(){return~this[_0x58cc("0x9")]},s[_0x58cc("0x14")][_0x58cc("0x1b")]=function(){var c,x,t,e=[];for(c=0;c<256;c++){for(t=c,x=0;x<8;x++)1&t?t=t>>>1^3988292384:t>>>=1;e[c]=t}return e}(),c[_0x58cc("0x13")]=o,o.prototype[_0x58cc("0x1d")]=function(c,x){return c},o.prototype[_0x58cc("0x6")]=function(){}}(this);