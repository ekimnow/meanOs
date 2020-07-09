!function(){var e={};function t(e){var t=e.socketId;WSC.peerSockMap[t]&&WSC.peerSockMap[t].onReadTCP(e)}WSC.peerSockMap=e,chrome.sockets.tcp.onReceive.addListener(t),chrome.sockets.tcp.onReceiveError.addListener(t);var s=chrome.sockets;function i(t){this.sockId=t,e[this.sockId]=this,this.readCallback=null,this.readUntilDelimiter=null,this.readBuffer=new WSC.Buffer,this.writeBuffer=new WSC.Buffer,this.writing=!1,this.pleaseReadBytes=null,this.remoteclosed=!1,this.closed=!1,this.connected=!0,this.halfclose=null,this.onclose=null,this.ondata=null,this.source=null,this._close_callbacks=[],this.onWriteBufferEmpty=null,chrome.sockets.tcp.setPaused(this.sockId,!1,this.onUnpaused.bind(this))}i.prototype={set_close_callback:function(e){this._close_callbacks=[e]},set_nodelay:function(){chrome.sockets.tcp.setNoDelay(this.sockId,!0,(function(){}))},removeHandler:function(){delete e[this.sockId]},addCloseCallback:function(e){this._close_callbacks.push(e)},peekstr:function(e){return WSC.ui82str(new Uint8Array(this.readBuffer.deque[0],0,e))},removeCloseCallback:function(e){},runCloseCallbacks:function(){for(var e=0;e<this._close_callbacks.length;e++)this._close_callbacks[e](this);this.onclose&&this.onclose()},onUnpaused:function(e){chrome.runtime.lastError&&this.close("set unpause fail")},readUntil:function(e,t){this.readUntilDelimiter=e,this.readCallback=t,this.checkBuffer()},readBytes:function(e,t){this.pleaseReadBytes=e,this.readCallback=t,this.checkBuffer()},tryWrite:function(e){if(!this.writing)if(this.closed)console.warn(this.sockId,"cant write, closed");else{this.writing=!0;var t=this.writeBuffer.consume_any_max(4096);s.tcp.send(this.sockId,t,this.onWrite.bind(this,e))}},write:function(e){this.writeBuffer.add(e),this.tryWrite()},onWrite:function(e,t){var s=chrome.runtime.lastError;s?this.close("writeerr"+s):t.bytesWritten<=0?this.close("writerr<0"):(this.writing=!1,this.writeBuffer.size()>0?this.closed||this.tryWrite(e):this.onWriteBufferEmpty&&this.onWriteBufferEmpty())},onReadTCP:function(e){var t=chrome.runtime.lastError;t?this.close("read tcp lasterr"+t):0==e.resultCode?(this.log("remote closed connection (halfduplex)"),this.remoteclosed=!0,this.halfclose&&this.halfclose(),this.request):e.resultCode<0?(this.log("remote killed connection",e.resultCode),this.error({message:"error code",errno:e.resultCode})):(this.readBuffer.add(e.data),this.onread&&this.onread(),this.checkBuffer())},log:function(e,t,s){WSC.VERBOSE&&console.log(this.sockId,e,t,s)},checkBuffer:function(){if(this.readUntilDelimiter){var e=this.readBuffer.flatten(),t=WSC.arrayBufferToString(e).indexOf(this.readUntilDelimiter);if(-1!=t){var s=this.readCallback,i=this.readBuffer.consume(t+this.readUntilDelimiter.length);this.readUntilDelimiter=null,this.readCallback=null,s(i)}}else if(null!==this.pleaseReadBytes&&this.readBuffer.size()>=this.pleaseReadBytes){var r=this.readBuffer.consume(this.pleaseReadBytes);s=this.readCallback;this.readCallback=null,this.pleaseReadBytes=null,s(r)}},close:function(t){this.closed||(this.connected=!1,this.closed=!0,this.runCloseCallbacks(),delete e[this.sockId],s.tcp.close(this.sockId,this.onClosed.bind(this,t)),this.cleanup())},onClosed:function(e,t){var s=chrome.runtime.lastError;s&&console.log("onClosed",e,s,t)},error:function(e){console.warn(this.sockId,"closed"),this.closed||this.close()},checkedCallback:function(e){var t=chrome.runtime.lastError;t&&console.warn("socket callback lastError",t,e)},tryClose:function(e){if(e||(e=this.checkedCallback),!this.closed)return console.warn("cant close, already closed"),void this.cleanup();console.log(this.sockId,"tryClose"),s.tcp.send(this.sockId,new ArrayBuffer,e)},cleanup:function(){this.writeBuffer=new WSC.Buffer}},WSC.IOStream=i}();