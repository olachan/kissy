/*
Copyright 2012, KISSY UI Library v1.30dev
MIT Licensed
build time: May 24 18:37
*/
KISSY.add("editor/core/walker",function(k,m){function h(a,c){if(this._.end)return l;var b,d=this.range,f,g=this.guard,h=this.type,k=a?"_4e_previousSourceNode":"_4e_nextSourceNode";if(!this._.start&&(this._.start=1,d.trim(),d.collapsed))return this.end(),l;if(!a&&!this._.guardLTR){var m=d.endContainer[0],o=m.childNodes[d.endOffset];this._.guardLTR=function(a,b){return b&&(m==a||"body"==i.nodeName(a))?!1:a!=o}}if(a&&!this._.guardRTL){var n=d.startContainer[0],q=0<d.startOffset&&n.childNodes[d.startOffset-
1]||null;this._.guardRTL=function(a,b){return b&&(n==a||"body"==i.nodeName(a))?!1:a!=q}}var r=a?this._.guardRTL:this._.guardLTR;f=g?function(a,b){return r(a,b)===e?e:g(a,b)}:r;this.current?b=this.current[k](e,h,f):a?(b=d.endContainer,0<d.endOffset?(b=new p(b[0].childNodes[d.endOffset-1]),f(b)===e&&(b=l)):b=f(b,j)===e?l:b._4e_previousSourceNode(j,h,f,void 0)):(b=d.startContainer,b=new p(b[0].childNodes[d.startOffset]),b.length?f(b)===e&&(b=l):b=f(d.startContainer,j)===e?l:d.startContainer._4e_nextSourceNode(j,
h,f,void 0));for(;b&&!this._.end;){this.current=b;if(!this.evaluator||this.evaluator(b[0])!==e){if(!c)return b}else if(c&&this.evaluator)return e;b=b[k](e,h,f)}this.end();return this.current=l}function o(a){for(var c,b=l;c=h.call(this,a);)b=c;return b}function g(a){this.range=a;this._={}}var j=!0,e=!1,l=null,q=k.UA,i=k.DOM,n=m.XHTML_DTD,p=k.Node;k.augment(g,{end:function(){this._.end=1},next:function(){return h.call(this)},previous:function(){return h.call(this,j)},checkForward:function(){return h.call(this,
e,j)!==e},checkBackward:function(){return h.call(this,j,j)!==e},lastForward:function(){return o.call(this)},lastBackward:function(){return o.call(this,j)},reset:function(){delete this.current;this._={}},_iterator:h});g.blockBoundary=function(a){return function(c){return!(c.nodeType==i.ELEMENT_NODE&&i._4e_isBlockBoundary(c,a))}};g.bookmark=function(a,c){function b(a){return"span"==i.nodeName(a)&&i.attr(a,"_ke_bookmark")}return function(d){var f,e;f=d.nodeType==i.TEXT_NODE&&(e=d.parentNode)&&b(e);f=
a?f:f||b(d);return!!(c^f)}};g.whitespaces=function(a){return function(c){c=c.nodeType==i.TEXT_NODE&&!k.trim(c.nodeValue);return!!(a^c)}};g.invisible=function(a){var c=g.whitespaces();return function(b){b=c(b)||b.nodeType==i.ELEMENT_NODE&&!b.offsetHeight;return!!(a^b)}};var s=/^[\t\r\n ]*(?:&nbsp;|\xa0)$/,t=g.whitespaces(),u=g.bookmark(),v=function(a){var c=i.nodeName(a);return u(a)||t(a)||1==a.nodeType&&c in n.$inline&&!(c in n.$empty)};m.Utils.injectDom({_4e_getBogus:function(a){a=new p(a);do a=
a._4e_previousSourceNode();while(a&&v(a[0]));return a&&(!q.ie?"br"==a.nodeName():3==a[0].nodeType&&s.test(a.text()))?a[0]:!1}});return m.Walker=g},{requires:["./base","./utils","./dom"]});