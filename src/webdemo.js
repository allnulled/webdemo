var scrollIntoView=function(){var e="complete",t="canceled";function n(e,t,n){e.self===e?e.scrollTo(t,n):(e.scrollLeft=t,e.scrollTop=n)}function i(t){var l=t._scrollSettings;if(l){var r=function(e,t,n){var i,l,r,o,a,s,f,c=e.getBoundingClientRect(),u=n&&null!=n.left?n.left:.5,d=n&&null!=n.top?n.top:.5,g=n&&null!=n.leftOffset?n.leftOffset:0,m=n&&null!=n.topOffset?n.topOffset:0,h=u,p=d;if(t.self===t)s=Math.min(c.width,t.innerWidth),f=Math.min(c.height,t.innerHeight),l=c.left+t.pageXOffset-t.innerWidth*h+s*h,r=c.top+t.pageYOffset-t.innerHeight*p+f*p,r-=m,o=(l-=g)-t.pageXOffset,a=r-t.pageYOffset;else{s=c.width,f=c.height,i=t.getBoundingClientRect();var v=c.left-(i.left-t.scrollLeft),w=c.top-(i.top-t.scrollTop);l=v+s*h-t.clientWidth*h,r=w+f*p-t.clientHeight*p,l=Math.max(Math.min(l,t.scrollWidth-t.clientWidth),0),r=Math.max(Math.min(r,t.scrollHeight-t.clientHeight),0),r-=m,o=(l-=g)-t.scrollLeft,a=r-t.scrollTop}return{x:l,y:r,differenceX:o,differenceY:a}}(l.target,t,l.align),o=Date.now()-l.startTime,a=Math.min(1/l.time*o,1);if(o>l.time&&l.endIterations>3)return n(t,r.x,r.y),t._scrollSettings=null,l.end(e);l.endIterations++;var s=1-l.ease(a);if(n(t,r.x-r.differenceX*s,r.y-r.differenceY*s),o>=l.time)return i(t);!function(e){if("requestAnimationFrame"in window)return window.requestAnimationFrame(e);setTimeout(e,16)}(i.bind(null,t))}}function l(e,n,l,r){var o,a=!n._scrollSettings,s=n._scrollSettings,f=Date.now();function c(e){n._scrollSettings=null,n.parentElement&&n.parentElement._scrollSettings&&n.parentElement._scrollSettings.end(e),r(e),n.removeEventListener("touchstart",o,{passive:!0})}s&&s.end(t),n._scrollSettings={startTime:s?s.startTime:Date.now(),endIterations:0,target:e,time:l.time+(s?f-s.startTime:0),ease:l.ease,align:l.align,end:c},o=c.bind(null,t),n.addEventListener("touchstart",o,{passive:!0}),a&&i(n)}function r(e){return"pageXOffset"in e||(e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth)&&"hidden"!==getComputedStyle(e).overflow}function o(){return!0}return function(e,t,n){if(e){"function"==typeof t&&(n=t,t=null),t||(t={}),t.time=isNaN(t.time)?1e3:t.time,t.ease=t.ease||function(e){return 1-Math.pow(1-e,e/2)};for(var i=e.parentElement,a=0,s=t.validTarget||o,f=t.isScrollable;i;){if(s(i,a)&&(f?f(i,r):r(i))&&(a++,l(e,i,t,c)),!(i=i.parentElement))return;"BODY"===i.tagName&&(i=(i=i.ownerDocument).defaultView||i.ownerWindow)}}function c(e){--a||n&&n(e)}}}();
!function(a,b,c){var d=b.define,e=function(e){var t,n=e.split("."),r=b;for(t=0;t<n.length&&r;t++)r=r[n[t]];return r},j=b.define&&b.define.modules||b._define&&b._define.modules||{},k=b.define=function(t,n,r){var o;"function"==typeof n&&(r=n,n=[]);var i,s,u=[];for(i=0;i<n.length;i++)u.push(a[n[i]]?e(a[n[i]]):j[n[i]]||e(n[i]));"require"===(s=n)[0]&&"exports"===s[1]&&"module"===s[2]||!n.length&&r.length?(o={exports:{}},u[0]=function(t){return a[t]?e(a[t]):j[t]},u[1]=o.exports,u[2]=o):u[0]||"exports"!==n[0]?u[0]||"module"!==n[0]||(u[0]={id:t}):(o={exports:{}},u[0]=o.exports,"module"===n[1]&&(u[1]=o)),b.define=d;var c=r?r.apply(null,u):void 0;b.define=k,c=o&&o.exports?o.exports:c,j[t]=c;var l=a[t];l&&!e(l)&&(function(e){if(!e||!e.__esModule)return!1;var t={__esModule:!0,default:!0};for(var n in e)if(!t[n])return!1;return!0}(c)&&(c=c.default),function(e,t){var n,r,o,i=e.split("."),s=b;for(n=0;n<i.length-1;n++)(o=s[r=i[n]])||(o=s[r]={}),s=o;s[r=i[i.length-1]]=t}(l,c))};b.define.orig=d,b.define.modules=j,b.define.amd=!0,k("@loader",[],function(){var J=function(){};return{get:function(){return{prepareGlobal:J,retrieveGlobal:J}},global:b,__exec:function(K){!function(__$source__,__$global__){eval("(function() { "+__$source__+" \n }).call(__$global__);")}(K.source,b)}}})}({},"object"==typeof self&&self.Object==Object?self:window),define("syn/synthetic",function(e,t,n){var r,o,i,s,u=window.syn?window.syn:{},a=function(e,t){var n;for(n in t)e[n]=t[n];return e},c={msie:!(!window.attachEvent||window.opera)||navigator.userAgent.indexOf("Trident/")>-1,opera:!!window.opera,webkit:navigator.userAgent.indexOf("AppleWebKit/")>-1,safari:navigator.userAgent.indexOf("AppleWebKit/")>-1&&-1===navigator.userAgent.indexOf("Chrome/"),gecko:navigator.userAgent.indexOf("Gecko")>-1,mobilesafari:!!navigator.userAgent.match(/Apple.*Mobile.*Safari/),rhino:navigator.userAgent.match(/Rhino/)&&!0},l=function(e,t,n){var r=n.ownerDocument.createEventObject();return a(r,t)},p={},d=1,y="_synthetic"+(new Date).getTime(),h=/keypress|keyup|keydown/,f=/load|unload|abort|error|select|change|submit|reset|focus|blur|resize|scroll/,k=function(e,t,n,r){return new k.init(e,t,n,r)};k.config=u,k.__tryFocus=function(e){try{e.focus()}catch(e){}},r=function(e,t,n){return e.addEventListener?e.addEventListener(t,n,!1):e.attachEvent("on"+t,n)},o=function(e,t,n){return e.addEventListener?e.removeEventListener(t,n,!1):e.detachEvent("on"+t,n)},i=k.config.schedule||function(e,t){setTimeout(e,t)},a(k,{init:function(e,t,n,r){var o=k.args(n,t,r),i=this;this.queue=[],this.element=o.element,"function"==typeof this[e]?this[e](o.element,o.options,function(e,t){o.callback&&o.callback.apply(i,arguments),i.done.apply(i,arguments)}):(this.result=k.trigger(o.element,e,o.options),o.callback&&o.callback.call(this,o.element,this.result))},jquery:function(e,t){return window.FuncUnit&&window.FuncUnit.jQuery?window.FuncUnit.jQuery:e&&k.helpers.getWindow(e).jQuery||window.jQuery},args:function(){for(var e={},t=0;t<arguments.length;t++)"function"==typeof arguments[t]?e.callback=arguments[t]:arguments[t]&&arguments[t].jquery?e.element=arguments[t][0]:arguments[t]&&arguments[t].nodeName?e.element=arguments[t]:e.options&&"string"==typeof arguments[t]?e.element=document.getElementById(arguments[t]):arguments[t]&&(e.options=arguments[t]);return e},click:function(e,t,n){k("click!",e,t,n)},defaults:{focus:function(){if(!k.support.focusChanges){var e=this,t=e.nodeName.toLowerCase();k.data(e,"syntheticvalue",e.value),"input"!==t&&"textarea"!==t||r(e,"blur",function t(){k.data(e,"syntheticvalue")!==e.value&&k.trigger(e,"change",{}),o(e,"blur",t)})}},submit:function(){k.onParents(this,function(e){if("form"===e.nodeName.toLowerCase())return e.submit(),!1})}},changeOnBlur:function(e,t,n){r(e,"blur",function r(){n!==e[t]&&k.trigger(e,"change",{}),o(e,"blur",r)})},closest:function(e,t){for(;e&&e.nodeName.toLowerCase()!==t.toLowerCase();)e=e.parentNode;return e},data:function(e,t,n){if(e[y]||(e[y]=d++),p[e[y]]||(p[e[y]]={}),p[e[y]],!n)return p[e[y]][t];p[e[y]][t]=n},onParents:function(e,t){for(var n;e&&!1!==n;)n=t(e),e=e.parentNode;return e},focusable:/^(a|area|frame|iframe|label|input|select|textarea|button|html|object)$/i,isFocusable:function(e){var t;return e.getAttributeNode&&(t=e.getAttributeNode("tabIndex")),this.focusable.test(e.nodeName)||t&&t.specified&&k.isVisible(e)},isVisible:function(e){return e.offsetWidth&&e.offsetHeight||e.clientWidth&&e.clientHeight},tabIndex:function(e){var t=e.getAttributeNode("tabIndex");return t&&t.specified&&(parseInt(e.getAttribute("tabIndex"))||0)},bind:r,unbind:o,schedule:i,browser:c,helpers:{createEventObject:l,createBasicStandardEvent:function(e,t,n){var r;try{r=n.createEvent("Events")}catch(e){r=n.createEvent("UIEvents")}finally{r.initEvent(e,!0,!0),a(r,t)}return r},inArray:function(e,t){for(var n=0;n<t.length;n++)if(t[n]===e)return n;return-1},getWindow:function(e){if(e.ownerDocument)return e.ownerDocument.defaultView||e.ownerDocument.parentWindow},extend:a,scrollOffset:function(e,t){var n=e.document.documentElement,r=e.document.body;if(!t)return{left:(n&&n.scrollLeft||r&&r.scrollLeft||0)+(n.clientLeft||0),top:(n&&n.scrollTop||r&&r.scrollTop||0)+(n.clientTop||0)};window.scrollTo(t.left,t.top)},scrollDimensions:function(e){var t=e.document.documentElement,n=e.document.body,r=t.clientWidth,o=t.clientHeight,i="CSS1Compat"===e.document.compatMode;return{height:i&&o||n.clientHeight||o,width:i&&r||n.clientWidth||r}},addOffset:function(e,t){var n,r=k.jquery(t);"object"==typeof e&&void 0===e.clientX&&void 0===e.clientY&&void 0===e.pageX&&void 0===e.pageY&&r&&(n=(t=r(t)).offset(),e.pageX=n.left+t.width()/2,e.pageY=n.top+t.height()/2)}},key:{ctrlKey:null,altKey:null,shiftKey:null,metaKey:null},dispatch:function(e,t,n,i){if(t.dispatchEvent&&e){var s=e.preventDefault,u=i?-1:0;return i&&r(t,n,function e(t){t.preventDefault(),o(this,n,e)}),e.preventDefault=function(){u++,++u>0&&s.apply(this,[])},t.dispatchEvent(e),u<=0}try{window.event=e}catch(e){}return t.sourceIndex<=0||t.fireEvent&&t.fireEvent("on"+n,e)},create:{page:{event:function(e,t,n){var r,o=k.helpers.getWindow(n).document||document;if(o.createEvent)return(r=o.createEvent("Events")).initEvent(e,!0,!0),r;try{r=l(0,t,n)}catch(e){}return r}},focus:{event:function(e,t,n){return k.onParents(n,function(e){if(k.isFocusable(e)){if("html"!==e.nodeName.toLowerCase())k.__tryFocus(e),s=e;else if(s){var t=k.helpers.getWindow(n).document;if(t!==window.document)return!1;t.activeElement?(t.activeElement.blur(),s=null):(s.blur(),s=null)}return!1}}),!0}}},support:{clickChanges:!1,clickSubmits:!1,keypressSubmits:!1,mouseupSubmits:!1,radioClickChanges:!1,focusChanges:!1,linkHrefJS:!1,keyCharacters:!1,backspaceWorks:!1,mouseDownUpClicks:!1,tabKeyTabs:!1,keypressOnAnchorClicks:!1,optionClickBubbles:!1,pointerEvents:!1,touchEvents:!1,ready:0},trigger:function(e,t,n){n||(n={});var r,o,i,s=k.create,u=s[t]&&s[t].setup,a=h.test(t)?"key":f.test(t)?"page":"mouse",c=s[t]||{},l=s[a],p=e;return 2===k.support.ready&&u&&u(t,n,e),i=n._autoPrevent,delete n._autoPrevent,c.event?o=c.event(t,n,e):(n=l.options?l.options(t,n,e):n,!k.support.changeBubbles&&/option/i.test(e.nodeName)&&(p=e.parentNode),r=l.event(t,n,p),o=k.dispatch(r,p,t,i)),o&&2===k.support.ready&&k.defaults[t]&&k.defaults[t].call(e,n,i),o},eventSupported:function(e){var t=document.createElement("div"),n=(e="on"+e)in t;return n||(t.setAttribute(e,"return;"),n="function"==typeof t[e]),t=null,n}}),a(k.init.prototype,{then:function(e,t,n,r){k.autoDelay&&this.delay();var o=k.args(n,t,r),i=this;return this.queue.unshift(function(t,n){if("function"!=typeof this[e])return this.result=k.trigger(o.element,e,o.options),o.callback&&o.callback.call(this,o.element,this.result),this;this.element=o.element||t,this[e](this.element,o.options,function(e,t){o.callback&&o.callback.apply(i,arguments),i.done.apply(i,arguments)})}),this},delay:function(e,t){"function"==typeof e&&(t=e,e=null),e=e||600;var n=this;return this.queue.unshift(function(){i(function(){t&&t.apply(n,[]),n.done.apply(n,arguments)},e)}),this},done:function(e,t){t&&(this.element=t),this.queue.length&&this.queue.pop().call(this,this.element,e)},_click:function(e,t,n,r){k.helpers.addOffset(t,e),k.support.pointerEvents&&k.trigger(e,"pointerdown",t),k.support.touchEvents&&k.trigger(e,"touchstart",t),k.trigger(e,"mousedown",t),i(function(){k.support.pointerEvents&&k.trigger(e,"pointerup",t),k.support.touchEvents&&k.trigger(e,"touchend",t),k.trigger(e,"mouseup",t),!k.support.mouseDownUpClicks||r?(k.trigger(e,"click",t),n(!0)):(k.create.click.setup("click",t,e),k.defaults.click.call(e),i(function(){n(!0)},1))},1)},_rightClick:function(e,t,n){k.helpers.addOffset(t,e);var r=a(a({},k.mouse.browser.right.mouseup),t);k.support.pointerEvents&&k.trigger(e,"pointerdown",r),k.trigger(e,"mousedown",r),i(function(){k.support.pointerEvents&&k.trigger(e,"pointerup",r),k.trigger(e,"mouseup",r),k.mouse.browser.right.contextmenu&&k.trigger(e,"contextmenu",a(a({},k.mouse.browser.right.contextmenu),t)),n(!0)},1)},_dblclick:function(e,t,n){k.helpers.addOffset(t,e);var r=this;this._click(e,t,function(){i(function(){r._click(e,t,function(){k.trigger(e,"dblclick",t),n(!0)},!0)},2)})}});for(var g=["click","dblclick","move","drag","key","type","rightClick"],m=function(e){k[e]=function(t,n,r){return k("_"+e,t,n,r)},k.init.prototype[e]=function(t,n,r){return this.then("_"+e,t,n,r)}},v=0;v<g.length;v++)m(g[v]);n.exports=k}),define("syn/mouse",["require","exports","module","syn/synthetic"],function(require,exports,module){var syn=require("syn/synthetic"),h=syn.helpers,getWin=h.getWindow;syn.mouse={},h.extend(syn.defaults,{mousedown:function(e){syn.trigger(this,"focus",{})},click:function(){var element=this,href,type,createChange,radioChanged,nodeName,scope;try{href=element.href,type=element.type,createChange=syn.data(element,"createChange"),radioChanged=syn.data(element,"radioChanged"),scope=getWin(element),nodeName=element.nodeName.toLowerCase()}catch(e){return}if(!syn.support.linkHrefJS&&/^\s*javascript:/.test(href)){var code=href.replace(/^\s*javascript:/,"");"//"!==code&&-1===code.indexOf("void(0)")&&(window.selenium?eval("with(selenium.browserbot.getCurrentWindow()){"+code+"}"):eval("with(scope){"+code+"}"))}if(!syn.support.clickSubmits&&("input"===nodeName||"button"===nodeName)&&"submit"===type){var form=syn.closest(element,"form");form&&syn.trigger(form,"submit",{})}"a"===nodeName&&element.href&&!/^\s*javascript:/.test(href)&&(scope.location.href=href),"input"===nodeName&&"checkbox"===type&&(syn.support.clickChanges||syn.trigger(element,"change",{})),"input"===nodeName&&"radio"===type&&radioChanged&&!syn.support.radioClickChanges&&syn.trigger(element,"change",{}),"option"===nodeName&&createChange&&(syn.trigger(element.parentNode,"change",{}),syn.data(element,"createChange",!1))}}),h.extend(syn.create,{mouse:{options:function(e,t,n){var r=document.documentElement,o=document.body,i=[t.pageX||0,t.pageY||0],s=syn.mouse.browser&&syn.mouse.browser.left[e],u=syn.mouse.browser&&syn.mouse.browser.right[e];return h.extend({bubbles:!0,cancelable:!0,view:window,detail:1,screenX:1,screenY:1,clientX:t.clientX||i[0]-(r&&r.scrollLeft||o&&o.scrollLeft||0)-(r.clientLeft||0),clientY:t.clientY||i[1]-(r&&r.scrollTop||o&&o.scrollTop||0)-(r.clientTop||0),ctrlKey:!!syn.key.ctrlKey,altKey:!!syn.key.altKey,shiftKey:!!syn.key.shiftKey,metaKey:!!syn.key.metaKey,button:s&&null!==s.button?s.button:u&&u.button||("contextmenu"===e?2:0),relatedTarget:document.documentElement},t)},event:function(e,t,n){var r,o=getWin(n).document||document;if(o.createEvent){try{(r=o.createEvent("MouseEvents")).initMouseEvent(e,t.bubbles,t.cancelable,t.view,t.detail,t.screenX,t.screenY,t.clientX,t.clientY,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.button,t.relatedTarget)}catch(n){r=h.createBasicStandardEvent(e,t,o)}return r.synthetic=!0,r}try{r=h.createEventObject(e,t,n)}catch(e){}return r}},click:{setup:function(e,t,n){var r=n.nodeName.toLowerCase();if(!syn.support.clickChecks&&!syn.support.changeChecks&&"input"===r&&("checkbox"===(e=n.type.toLowerCase())&&(n.checked=!n.checked),"radio"===e&&!n.checked)){try{syn.data(n,"radioChanged",!0)}catch(e){}n.checked=!0}if("a"===r&&n.href&&!/^\s*javascript:/.test(n.href)&&syn.data(n,"href",n.href),/option/i.test(n.nodeName)){for(var o=n.parentNode.firstChild,i=-1;o&&(1!==o.nodeType||(i++,o!==n));)o=o.nextSibling;i!==n.parentNode.selectedIndex&&(n.parentNode.selectedIndex=i,syn.data(n,"createChange",!0))}}},mousedown:{setup:function(e,t,n){var r=n.nodeName.toLowerCase();!syn.browser.safari||"select"!==r&&"option"!==r||(t._autoPrevent=!0)}}})}),define("syn/mouse.support",["require","exports","module","syn/synthetic","syn/mouse"],function(e,t,n){var r=e("syn/synthetic");e("syn/mouse"),function e(){if(!document.body)return r.schedule(e,1);window.__synthTest=function(){r.support.linkHrefJS=!0};var t,n,o,i,s=document.createElement("div");s.innerHTML="<form id='outer'><input name='checkbox' type='checkbox'/><input name='radio' type='radio' /><input type='submit' name='submitter'/><input type='input' name='inputter'/><input name='one'><input name='two'/><a href='javascript:__synthTest()' id='synlink'></a><select><option></option></select></form>",document.documentElement.appendChild(s),t=(o=s.firstChild).childNodes[0],n=o.childNodes[2],i=o.getElementsByTagName("select")[0],r.trigger(o.childNodes[6],"click",{}),t.checked=!1,t.onchange=function(){r.support.clickChanges=!0},r.trigger(t,"click",{}),r.support.clickChecks=t.checked,t.checked=!1,r.trigger(t,"change",{}),r.support.changeChecks=t.checked,o.onsubmit=function(e){return e.preventDefault&&e.preventDefault(),r.support.clickSubmits=!0,!1},r.trigger(n,"click",{}),o.childNodes[1].onchange=function(){r.support.radioClickChanges=!0},r.trigger(o.childNodes[1],"click",{}),r.bind(s,"click",function e(){r.support.optionClickBubbles=!0,r.unbind(s,"click",e)}),r.trigger(i.firstChild,"click",{}),r.support.changeBubbles=r.eventSupported("change"),s.onclick=function(){r.support.mouseDownUpClicks=!0},r.trigger(s,"mousedown",{}),r.trigger(s,"mouseup",{}),document.documentElement.removeChild(s),r.support.pointerEvents=r.eventSupported("pointerdown"),r.support.touchEvents=r.eventSupported("touchstart"),r.support.ready++}()}),define("syn/browsers",["require","exports","module","syn/synthetic","syn/mouse"],function(e,t,n){var r=e("syn/synthetic");e("syn/mouse"),r.key.browsers={webkit:{prevent:{keyup:[],keydown:["char","keypress"],keypress:["char"]},character:{keydown:[0,"key"],keypress:["char","char"],keyup:[0,"key"]},specialChars:{keydown:[0,"char"],keyup:[0,"char"]},navigation:{keydown:[0,"key"],keyup:[0,"key"]},special:{keydown:[0,"key"],keyup:[0,"key"]},tab:{keydown:[0,"char"],keyup:[0,"char"]},"pause-break":{keydown:[0,"key"],keyup:[0,"key"]},caps:{keydown:[0,"key"],keyup:[0,"key"]},escape:{keydown:[0,"key"],keyup:[0,"key"]},"num-lock":{keydown:[0,"key"],keyup:[0,"key"]},"scroll-lock":{keydown:[0,"key"],keyup:[0,"key"]},print:{keyup:[0,"key"]},function:{keydown:[0,"key"],keyup:[0,"key"]},"\r":{keydown:[0,"key"],keypress:["char","key"],keyup:[0,"key"]}},gecko:{prevent:{keyup:[],keydown:["char"],keypress:["char"]},character:{keydown:[0,"key"],keypress:["char",0],keyup:[0,"key"]},specialChars:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},navigation:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},special:{keydown:[0,"key"],keyup:[0,"key"]},"\t":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},"pause-break":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},caps:{keydown:[0,"key"],keyup:[0,"key"]},escape:{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]},"num-lock":{keydown:[0,"key"],keyup:[0,"key"]},"scroll-lock":{keydown:[0,"key"],keyup:[0,"key"]},print:{keyup:[0,"key"]},function:{keydown:[0,"key"],keyup:[0,"key"]},"\r":{keydown:[0,"key"],keypress:[0,"key"],keyup:[0,"key"]}},msie:{prevent:{keyup:[],keydown:["char","keypress"],keypress:["char"]},character:{keydown:[null,"key"],keypress:[null,"char"],keyup:[null,"key"]},specialChars:{keydown:[null,"char"],keyup:[null,"char"]},navigation:{keydown:[null,"key"],keyup:[null,"key"]},special:{keydown:[null,"key"],keyup:[null,"key"]},tab:{keydown:[null,"char"],keyup:[null,"char"]},"pause-break":{keydown:[null,"key"],keyup:[null,"key"]},caps:{keydown:[null,"key"],keyup:[null,"key"]},escape:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},"num-lock":{keydown:[null,"key"],keyup:[null,"key"]},"scroll-lock":{keydown:[null,"key"],keyup:[null,"key"]},print:{keyup:[null,"key"]},function:{keydown:[null,"key"],keyup:[null,"key"]},"\r":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]}},opera:{prevent:{keyup:[],keydown:[],keypress:["char"]},character:{keydown:[null,"key"],keypress:[null,"char"],keyup:[null,"key"]},specialChars:{keydown:[null,"char"],keypress:[null,"char"],keyup:[null,"char"]},navigation:{keydown:[null,"key"],keypress:[null,"key"]},special:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},tab:{keydown:[null,"char"],keypress:[null,"char"],keyup:[null,"char"]},"pause-break":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},caps:{keydown:[null,"key"],keyup:[null,"key"]},escape:{keydown:[null,"key"],keypress:[null,"key"]},"num-lock":{keyup:[null,"key"],keydown:[null,"key"],keypress:[null,"key"]},"scroll-lock":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},print:{},function:{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]},"\r":{keydown:[null,"key"],keypress:[null,"key"],keyup:[null,"key"]}}},r.mouse.browsers={webkit:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},opera:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},msie:{right:{mousedown:{button:2},mouseup:{button:2},contextmenu:{button:0}},left:{mousedown:{button:1},mouseup:{button:1},click:{button:0}}},chrome:{right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}},left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}}},gecko:{left:{mousedown:{button:0,which:1},mouseup:{button:0,which:1},click:{button:0,which:1}},right:{mousedown:{button:2,which:3},mouseup:{button:2,which:3},contextmenu:{button:2,which:3}}}},r.key.browser=function(){if(r.key.browsers[window.navigator.userAgent])return r.key.browsers[window.navigator.userAgent];for(var e in r.browser)if(r.browser[e]&&r.key.browsers[e])return r.key.browsers[e];return r.key.browsers.gecko}(),r.mouse.browser=function(){if(r.mouse.browsers[window.navigator.userAgent])return r.mouse.browsers[window.navigator.userAgent];for(var e in r.browser)if(r.browser[e]&&r.mouse.browsers[e])return r.mouse.browsers[e];return r.mouse.browsers.gecko}()}),define("syn/typeable",["require","exports","module","syn/synthetic"],function(e,t,n){var r=e("syn/synthetic"),o=[],i=[].indexOf||function(e){for(var t=0,n=this.length;t<n;t++)if(t in this&&this[t]===e)return t;return-1};r.typeable=function(e){-1===i.call(o,e)&&o.push(e)},r.typeable.test=function(e){for(var t=0,n=o.length;t<n;t++)if(o[t](e))return!0;return!1};var s=r.typeable,u=/input|textarea/i;s(function(e){return u.test(e.nodeName)}),s(function(e){return-1!==i.call(["","true"],e.getAttribute("contenteditable"))})}),define("syn/key",["require","exports","module","syn/synthetic","syn/typeable","syn/browsers"],function(e,t,n){var r=e("syn/synthetic");e("syn/typeable"),e("syn/browsers");var o=r.helpers,i=/input|textarea/i,s=function(e){var t;try{t=void 0!==e.selectionStart&&null!==e.selectionStart}catch(e){t=!1}return t},u=function(e){var t,n,r;if(s(e))return document.activeElement&&document.activeElement!==e&&e.selectionStart===e.selectionEnd&&0===e.selectionStart?{start:e.value.length,end:e.value.length}:{start:e.selectionStart,end:e.selectionEnd};try{if("input"===e.nodeName.toLowerCase())return t=o.getWindow(e).document.selection.createRange(),(n=e.createTextRange()).setEndPoint("EndToStart",t),{start:r=n.text.length,end:r+t.text.length};n=(t=o.getWindow(e).document.selection.createRange()).duplicate();var u=t.duplicate(),a=t.duplicate();u.collapse(),a.collapse(!1),u.moveStart("character",-1),a.moveStart("character",-1),n.moveToElementText(e),n.setEndPoint("EndToEnd",t),r=n.text.length-t.text.length;var c=n.text.length;return 0!==r&&""===u.text&&(r+=2),0!==c&&""===a.text&&(c+=2),{start:r,end:c}}catch(t){var l=i.test(e.nodeName)?"value":"textContent";return{start:e[l].length,end:e[l].length}}},a=null!=document.createElement("span").textContent?"textContent":"innerText",c=function(e){return i.test(e.nodeName)?e.value:e[a]},l=function(e,t){i.test(e.nodeName)?e.value=t:e[a]=t};o.extend(r,{keycodes:{"\b":8,"\t":9,"\r":13,shift:16,ctrl:17,alt:18,meta:91,"pause-break":19,caps:20,escape:27,"num-lock":144,"scroll-lock":145,print:44,"page-up":33,"page-down":34,end:35,home:36,left:37,up:38,right:39,down:40,insert:45,delete:46," ":32,0:48,1:49,2:50,3:51,4:52,5:53,6:54,7:55,8:56,9:57,a:65,b:66,c:67,d:68,e:69,f:70,g:71,h:72,i:73,j:74,k:75,l:76,m:77,n:78,o:79,p:80,q:81,r:82,s:83,t:84,u:85,v:86,w:87,x:88,y:89,z:90,num0:96,num1:97,num2:98,num3:99,num4:100,num5:101,num6:102,num7:103,num8:104,num9:105,"*":106,"+":107,subtract:109,decimal:110,divide:111,";":186,"=":187,",":188,dash:189,"-":189,period:190,".":190,"forward-slash":191,"/":191,"`":192,"[":219,"\\":220,"]":221,"'":222,"left window key":91,"right window key":92,"select key":93,f1:112,f2:113,f3:114,f4:115,f5:116,f6:117,f7:118,f8:119,f9:120,f10:121,f11:122,f12:123},selectText:function(e,t,n){if(s(e))n?(e.selectionStart=t,e.selectionEnd=n):(r.__tryFocus(e),e.setSelectionRange(t,t));else if(e.createTextRange){var o=e.createTextRange();o.moveStart("character",t),n=n||t,o.moveEnd("character",n-e.value.length),o.select()}},getText:function(e){if(r.typeable.test(e)){var t=u(e);return e.value.substring(t.start,t.end)}var n=r.helpers.getWindow(e);return n.getSelection?n.getSelection().toString():n.document.getSelection?n.document.getSelection().toString():n.document.selection.createRange().text},getSelection:u}),o.extend(r.key,{data:function(e){if(r.key.browser[e])return r.key.browser[e];for(var t in r.key.kinds)if(o.inArray(e,r.key.kinds[t])>-1)return r.key.browser[t];return r.key.browser.character},isSpecial:function(e){for(var t=r.key.kinds.special,n=0;n<t.length;n++)if(r.keycodes[t[n]]===e)return t[n]},options:function(e,t){var n=r.key.data(e);if(!n[t])return null;var o=n[t][0],i=n[t][1],s={};return s.keyCode="key"===i?r.keycodes[e]:"char"===i?e.charCodeAt(0):i,"char"===o?s.charCode=e.charCodeAt(0):null!==o&&(s.charCode=o),s.keyCode?s.which=s.keyCode:s.which=s.charCode,s},kinds:{special:["shift","ctrl","alt","meta","caps"],specialChars:["\b"],navigation:["page-up","page-down","end","home","left","up","right","down","insert","delete"],function:["f1","f2","f3","f4","f5","f6","f7","f8","f9","f10","f11","f12"]},getDefault:function(e){if(r.key.defaults[e])return r.key.defaults[e];for(var t in r.key.kinds)if(o.inArray(e,r.key.kinds[t])>-1&&r.key.defaults[t])return r.key.defaults[t];return r.key.defaults.character},defaults:{character:function(e,t,n,o,i){if(/num\d+/.test(n)&&(n=n.match(/\d+/)[0]),o||!r.support.keyCharacters&&r.typeable.test(this)){var s=c(this),u=s.substr(0,i.start),a=s.substr(i.end),p=n;l(this,u+p+a);var d="\n"===p&&r.support.textareaCarriage?2:p.length;r.selectText(this,u.length+d)}},c:function(e,t,n,o,i){r.key.ctrlKey?r.key.clipboard=r.getText(this):r.key.defaults.character.apply(this,arguments)},v:function(e,t,n,o,i){r.key.ctrlKey?r.key.defaults.character.call(this,e,t,r.key.clipboard,!0,i):r.key.defaults.character.apply(this,arguments)},a:function(e,t,n,o,i){r.key.ctrlKey?r.selectText(this,0,c(this).length):r.key.defaults.character.apply(this,arguments)},home:function(){r.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight)return e.scrollTop=0,!1})},end:function(){r.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight)return e.scrollTop=e.scrollHeight,!1})},"page-down":function(){r.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight){var t=e.clientHeight;return e.scrollTop+=t,!1}})},"page-up":function(){r.onParents(this,function(e){if(e.scrollHeight!==e.clientHeight){var t=e.clientHeight;return e.scrollTop-=t,!1}})},"\b":function(e,t,n,o,i){if(!r.support.backspaceWorks&&r.typeable.test(this)){var s=c(this),u=s.substr(0,i.start),a=s.substr(i.end);i.start===i.end&&i.start>0?(l(this,u.substring(0,u.length-1)+a),r.selectText(this,i.start-1)):(l(this,u+a),r.selectText(this,i.start))}},delete:function(e,t,n,o,i){if(!r.support.backspaceWorks&&r.typeable.test(this)){var s=c(this),u=s.substr(0,i.start),a=s.substr(i.end);i.start===i.end&&i.start<=c(this).length-1?l(this,u+a.substring(1)):l(this,u+a),r.selectText(this,i.start)}},"\r":function(e,t,n,o,i){var s=this.nodeName.toLowerCase();if("input"===s&&r.trigger(this,"change",{}),!r.support.keypressSubmits&&"input"===s){var u=r.closest(this,"form");u&&r.trigger(u,"submit",{})}r.support.keyCharacters||"textarea"!==s||r.key.defaults.character.call(this,e,t,"\n",void 0,i),r.support.keypressOnAnchorClicks||"a"!==s||r.trigger(this,"click",{})},"\t":function(e,t){for(var n=function(e){for(var t=o.getWindow(e).document,n=[],i=t.getElementsByTagName("*"),s=i.length,u=0;u<s;u++)r.isFocusable(i[u])&&i[u]!==t.documentElement&&n.push(i[u]);return n}(this),i=null,s=0,u=[];s<n.length;s++)u.push([n[s],s]);u.sort(function(e,t){var n=e[0],o=t[0],i=r.tabIndex(n)||0,s=r.tabIndex(o)||0;return i===s?e[1]-t[1]:0===i?1:0===s?-1:i-s});var a=u.length;for(s=0;s<a;s++)if(this===u[s][0]){var c=s;i=r.key.shiftKey?--c>=0&&u[c][0]||u[a-1][0]:++c<a&&u[c][0]||u[0][0]}return i?r.__tryFocus(i):i=void 0,i},left:function(e,t,n,o,i){r.typeable.test(this)&&(r.key.shiftKey?r.selectText(this,0===i.start?0:i.start-1,i.end):r.selectText(this,0===i.start?0:i.start-1))},right:function(e,t,n,o,i){r.typeable.test(this)&&(r.key.shiftKey?r.selectText(this,i.start,i.end+1>c(this).length?c(this).length:i.end+1):r.selectText(this,i.end+1>c(this).length?c(this).length:i.end+1))},up:function(){/select/i.test(this.nodeName)&&(this.selectedIndex=this.selectedIndex?this.selectedIndex-1:0)},down:function(){/select/i.test(this.nodeName)&&(r.changeOnBlur(this,"selectedIndex",this.selectedIndex),this.selectedIndex=this.selectedIndex+1)},shift:function(){return null},ctrl:function(){return null},alt:function(){return null},meta:function(){return null}}}),o.extend(r.create,{keydown:{setup:function(e,t,n){-1!==o.inArray(t,r.key.kinds.special)&&(r.key[t+"Key"]=n)}},keypress:{setup:function(e,t,n){r.support.keyCharacters&&!r.support.keysOnNotFocused&&r.__tryFocus(n)}},keyup:{setup:function(e,t,n){-1!==o.inArray(t,r.key.kinds.special)&&(r.key[t+"Key"]=null)}},key:{options:function(e,t,n){return t="object"!=typeof t?{character:t}:t,(t=o.extend({},t)).character&&(o.extend(t,r.key.options(t.character,e)),delete t.character),t=o.extend({ctrlKey:!!r.key.ctrlKey,altKey:!!r.key.altKey,shiftKey:!!r.key.shiftKey,metaKey:!!r.key.metaKey},t)},event:function(e,t,n){var r,i=o.getWindow(n).document||document;if(i.createEvent){try{(r=i.createEvent("KeyEvents")).initKeyEvent(e,!0,!0,window,t.ctrlKey,t.altKey,t.shiftKey,t.metaKey,t.keyCode,t.charCode)}catch(n){r=o.createBasicStandardEvent(e,t,i)}return r.synthetic=!0,r}try{r=o.createEventObject.apply(this,arguments),o.extend(r,t)}catch(e){}return r}}});var p={enter:"\r",backspace:"\b",tab:"\t",space:" "};o.extend(r.init.prototype,{_key:function(e,t,n){if(/-up$/.test(t)&&-1!==o.inArray(t.replace("-up",""),r.key.kinds.special))return r.trigger(e,"keyup",t.replace("-up","")),n(!0,e);var i,s=o.getWindow(e).document.activeElement,a=r.typeable.test(e)&&u(e),c=p[t]||t,l=r.trigger(e,"keydown",c),d=r.key.getDefault,y=r.key.browser.prevent,h=r.key.options(c,"keypress");return l?h?(s!==o.getWindow(e).document.activeElement&&(e=o.getWindow(e).document.activeElement),(l=r.trigger(e,"keypress",h))&&(i=d(c).call(e,h,o.getWindow(e),c,void 0,a))):i=d(c).call(e,h,o.getWindow(e),c,void 0,a):h&&-1===o.inArray("keypress",y.keydown)&&(s!==o.getWindow(e).document.activeElement&&(e=o.getWindow(e).document.activeElement),r.trigger(e,"keypress",h)),i&&i.nodeName&&(e=i),null!==i?r.schedule(function(){r.support.oninput&&r.trigger(e,"input",r.key.options(c,"input")),r.trigger(e,"keyup",r.key.options(c,"keyup")),n(l,e)},1):n(l,e),e},_type:function(e,t,n){var r=(t+"").match(/(\[[^\]]+\])|([^\[])/g),o=this,i=function(t,s){var u=r.shift();u?(s=s||e,u.length>1&&(u=u.substr(1,u.length-2)),o._key(s,u,i)):n(t,s)};i()}})}),define("syn/key.support",["require","exports","module","syn/synthetic","syn/key"],function(e,t,n){var r=e("syn/synthetic");e("syn/key"),r.config.support?r.helpers.extend(r.support,r.config.support):function e(){if(!document.body)return r.schedule(e,1);var t,n,o,i,s,u,a=document.createElement("div");u=document.documentElement,a.innerHTML="<form id='outer'><input name='checkbox' type='checkbox'/><input name='radio' type='radio' /><input type='submit' name='submitter'/><input type='input' name='inputter'/><input name='one'><input name='two'/><a href='#abc'></a><textarea>1\n2</textarea></form>",u.insertBefore(a,u.firstElementChild||u.children[0]),(t=a.firstChild).childNodes[0],t.childNodes[2],n=t.getElementsByTagName("a")[0],o=t.getElementsByTagName("textarea")[0],i=t.childNodes[3],s=t.childNodes[4],t.onsubmit=function(e){return e.preventDefault&&e.preventDefault(),r.support.keypressSubmits=!0,e.returnValue=!1,!1},r.__tryFocus(i),r.trigger(i,"keypress","\r"),r.trigger(i,"keypress","a"),r.support.keyCharacters="a"===i.value,i.value="a",r.trigger(i,"keypress","\b"),r.support.backspaceWorks=""===i.value,i.onchange=function(){r.support.focusChanges=!0},r.__tryFocus(i),r.trigger(i,"keypress","a"),r.__tryFocus(t.childNodes[5]),r.trigger(i,"keypress","b"),r.support.keysOnNotFocused="ab"===i.value,r.bind(n,"click",function(e){return e.preventDefault&&e.preventDefault(),r.support.keypressOnAnchorClicks=!0,e.returnValue=!1,!1}),r.trigger(n,"keypress","\r"),r.support.textareaCarriage=4===o.value.length,r.support.oninput="oninput"in s,u.removeChild(a),r.support.ready++}()}),define("syn/drag",["require","exports","module","syn/synthetic"],function(e,t,n){var r=e("syn/synthetic"),o=function(e,t){var n=e.clientX,o=e.clientY;if(null==e)return null;if(r.support.elementFromPage){var i=r.helpers.scrollOffset(t);n+=i.left,o+=i.top}return t.document.elementFromPoint(Math.round(n),Math.round(o))},i={focusWindow:null,dragAndDrop:function(e,t,n,r,o){this.currentDataTransferItem=null,this.focusWindow=e,this._mouseOver(t),this._mouseEnter(t),this._mouseMove(t),this._mouseDown(t),this._dragStart(t),this._drag(t),this._dragEnter(t),this._dragOver(t),i.startMove(t,n,r,function(){i._dragLeave(t),i._dragEnd(t),i._mouseOut(t),i._mouseLeave(t),i._drop(n),i._dragEnd(n),i._mouseOver(n),i._mouseEnter(n),i._mouseMove(n),i._mouseOut(n),i._mouseLeave(n),o(),i.cleanup()})},_dragStart:function(e,t){this.createAndDispatchEvent(e,"dragstart",t)},_drag:function(e,t){this.createAndDispatchEvent(e,"drag",t)},_dragEnter:function(e,t){this.createAndDispatchEvent(e,"dragenter",t)},_dragOver:function(e,t){this.createAndDispatchEvent(e,"dragover",t)},_dragLeave:function(e,t){this.createAndDispatchEvent(e,"dragleave",t)},_drop:function(e,t){this.createAndDispatchEvent(e,"drop",t)},_dragEnd:function(e,t){this.createAndDispatchEvent(e,"dragend",t)},_mouseDown:function(e,t){this.createAndDispatchEvent(e,"mousedown",t)},_mouseMove:function(e,t){this.createAndDispatchEvent(e,"mousemove",t)},_mouseEnter:function(e,t){this.createAndDispatchEvent(e,"mouseenter",t)},_mouseOver:function(e,t){this.createAndDispatchEvent(e,"mouseover",t)},_mouseOut:function(e,t){this.createAndDispatchEvent(e,"mouseout",t)},_mouseLeave:function(e,t){this.createAndDispatchEvent(e,"mouseleave",t)},createAndDispatchEvent:function(e,t,n){if(e){var i=o(e,this.focusWindow);r.trigger(i,t,n)}},getDataTransferObject:function(){return this.currentDataTransferItem?this.currentDataTransferItem:this.currentDataTransferItem=this.createDataTransferObject()},cleanup:function(){this.currentDataTransferItem=null,this.focusWindow=null},createDataTransferObject:function(){return{dropEffect:"none",effectAllowed:"uninitialized",files:[],items:[],types:[],data:[],setData:function(e,t){var n={};n.dataFlavor=e,n.val=t,this.data.push(n)},getData:function(e){for(var t=0;t<this.data.length;t++){var n=this.data[t];if(n.dataFlavor===e)return n.val}}}},startMove:function(e,t,n,o){var s,u=new Date,a=t.clientX-e.clientX,c=t.clientY-e.clientY,l=this.focusWindow,p=e,d=l.document.createElement("div"),y=0;s=function s(){var h=new Date,f=r.helpers.scrollOffset(l),k=(0===y?0:h-u)/n,g={clientX:a*k+e.clientX,clientY:c*k+e.clientY};y++,k<1?(r.helpers.extend(d.style,{left:g.clientX+f.left+2+"px",top:g.clientY+f.top+2+"px"}),p=i.mouseMove(g,p),r.schedule(s,15)):(p=i.mouseMove(t,p),l.document.body.removeChild(d),o())},r.helpers.extend(d.style,{height:"5px",width:"5px",backgroundColor:"red",position:"absolute",zIndex:19999,fontSize:"1px"}),l.document.body.appendChild(d),s()},mouseMove:function(e,t){var n=o(e,this.focusWindow),i=o(t,this.focusWindow),s=r.helpers.extend({},e);return n!==i&&(s.relatedTarget=n,this._dragLeave(t,s),s.relatedTarget=i,this._dragEnter(e,s)),this._dragOver(e,s),e}};function s(e,t,n){var o=r.create.mouse.event(e,t,n);return o.dataTransfer=i.getDataTransferObject(),r.dispatch(o,n,e,!1)}r.create.dragstart={event:s},r.create.dragenter={event:s},r.create.dragover={event:s},r.create.dragleave={event:s},r.create.drag={event:s},r.create.drop={event:s},r.create.dragend={event:s},function e(){if(document.body){var t=document.createElement("div");if(document.body.appendChild(t),r.helpers.extend(t.style,{width:"100px",height:"10000px",backgroundColor:"blue",position:"absolute",top:"10px",left:"0px",zIndex:19999}),document.body.scrollTop=11,document.elementFromPoint)document.elementFromPoint(3,1)===t?r.support.elementFromClient=!0:r.support.elementFromPage=!0,document.body.removeChild(t),document.body.scrollTop=0}else r.schedule(e,1)}();var u=function(e,t,n){var i=o(e,t);if(n!==i&&i&&n){var s=r.helpers.extend({},e);s.relatedTarget=i,r.support.pointerEvents&&r.trigger(n,"pointerout",s),r.trigger(n,"mouseout",s),s.relatedTarget=n,r.support.pointerEvents&&r.trigger(i,"pointerover",s),r.trigger(i,"mouseover",s)}return r.support.pointerEvents&&r.trigger(i||t,"pointermove",e),r.support.touchEvents&&r.trigger(i||t,"touchmove",e),r.trigger(i||t,"mousemove",e),i},a=function(e,t,n){var i=o(t,n);return r.trigger(i||n,e,t),i},c=function(e,t,n,i,s){var a,c=new Date,l=n.clientX-t.clientX,p=n.clientY-t.clientY,d=o(t,e),y=e.document.createElement("div"),h=0;a=function o(){var a=new Date,f=r.helpers.scrollOffset(e),k=(0===h?0:a-c)/i,g={clientX:l*k+t.clientX,clientY:p*k+t.clientY};h++,k<1?(r.helpers.extend(y.style,{left:g.clientX+f.left+2+"px",top:g.clientY+f.top+2+"px"}),d=u(g,e,d),r.schedule(o,15)):(d=u(n,e,d),e.document.body.removeChild(y),s())},r.helpers.extend(y.style,{height:"5px",width:"5px",backgroundColor:"red",position:"absolute",zIndex:19999,fontSize:"1px"}),e.document.body.appendChild(y),a()},l=function(e){var t=r.jquery()(e),n=t.offset();return{pageX:n.left+t.outerWidth()/2,pageY:n.top+t.outerHeight()/2}},p=function(e,t,n){var o,i=/(\d+)[x ](\d+)/,s=/(\d+)X(\d+)/,u=/([+-]\d+)[xX ]([+-]\d+)/;if("string"==typeof e&&u.test(e)&&n){var a=l(n);o=e.match(u),e={pageX:a.pageX+parseInt(o[1]),pageY:a.pageY+parseInt(o[2])}}if("string"==typeof e&&i.test(e)&&(o=e.match(i),e={pageX:parseInt(o[1]),pageY:parseInt(o[2])}),"string"==typeof e&&s.test(e)&&(o=e.match(s),e={clientX:parseInt(o[1]),clientY:parseInt(o[2])}),"string"==typeof e&&(e=r.jquery()(e,t.document)[0]),e.nodeName&&(e=l(e)),null!=e.pageX){var c=r.helpers.scrollOffset(t);e={clientX:e.pageX-c.left,clientY:e.pageY-c.top}}return e},d=function(e,t,n){if(e.clientY<0){var o=r.helpers.scrollOffset(n),i=o.top+e.clientY-100,s=i-o.top;i>0||(i=0,s=-o.top),e.clientY=e.clientY-s,t.clientY=t.clientY-s,r.helpers.scrollOffset(n,{top:i,left:o.left})}};r.helpers.extend(r.init.prototype,{_move:function(e,t,n){var o=r.helpers.getWindow(e),i=p(t.from||e,o,e),s=p(t.to||t,o,e);!1!==t.adjust&&d(i,s,o),c(o,i,s,t.duration||500,n)},_drag:function(e,t,n){var o,s,u,l,y,h=r.helpers.getWindow(e),f=p(t.from||e,h,e),k=p(t.to||t,h,e);!1!==t.adjust&&d(f,k,h),e.draggable?i.dragAndDrop(h,f,k,t.duration||500,n):(o=h,s=f,u=k,l=t.duration||500,y=n,r.support.pointerEvents&&(a("pointerover",s,o),a("pointerenter",s,o)),a("mouseover",s,o),a("mouseenter",s,o),r.support.pointerEvents&&a("pointermove",s,o),a("mousemove",s,o),r.support.pointerEvents&&a("pointerdown",s,o),r.support.touchEvents&&a("touchstart",s,o),a("mousedown",s,o),c(o,s,u,l,function(){r.support.pointerEvents&&a("pointerup",u,o),r.support.touchEvents&&a("touchend",u,o),a("mouseup",u,o),r.support.pointerEvents&&a("pointerleave",u,o),a("mouseleave",u,o),y()}))}})}),define("syn",["require","exports","module","syn/synthetic","syn/mouse.support","syn/browsers","syn/key.support","syn/drag"],function(e,t,n){var r=e("syn/synthetic");e("syn/mouse.support"),e("syn/browsers"),e("syn/key.support"),e("syn/drag"),window.syn=r,n.exports=r}),function(e){e._define=e.define,e.define=e.define.orig}("object"==typeof self&&self.Object==Object?self:window);

/**
 * ## 3. API Reference
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 * 
 */


/*
 *
 */
var utils = {
  getCentralPosition: function(element) {
    function isWindow( obj ) {
        return obj != null && obj === obj.window;
    };
    function getWindow( elem ) {
        return isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
    };
    function offset( elem ) {
        var docElem, win,
            box = { top: 0, left: 0 },
            doc = elem && elem.ownerDocument;
        docElem = doc.documentElement;
        if ( typeof elem.getBoundingClientRect !== typeof undefined ) {
            box = elem.getBoundingClientRect();
        }
        win = getWindow( doc );
        return {
            top: box.top + win.pageYOffset - docElem.clientTop,
            left: box.left + win.pageXOffset - docElem.clientLeft
        };
    };
    var point = offset(element);
    point.top += element.offsetHeight / 2;
    point.left += element.offsetWidth / 2;
    return point;
  },
  typeText: function(element, text, cb, demo) {
		syn.type(element, text, cb);
  },
  getTransitionString: function(milliseconds) {
  	return "top {time}s linear, left {time}s linear".replace(/\{time\}/g, parseInt(milliseconds)/1000);
  }
};

//////////////////////////////////

/**
 * ### WebDemo
 * ----
 * @type `{Class}`
 * @parameter `{String} title` Title of the new demo.
 * @returns `{WebDemo}` A new instance of WebDemo class.
 * @description This class generates a new WebDemo. With this objects, we can automate browser tasks.
 * 
 */
function WebDemo(title = "{No title provided}") {
	
	var demo = this;

  /**
   * ----
   * ### webDemo._
   * @type `{Object}`
   * @description Object that holds the internal stuff of the WebDemo instance.
   */
  demo._ = {};
  
  /**
   * ----
   * ### webDemo._.title
   * @type `{String} title`
   * @description Name of the current webDemo.
   */
  demo._.title = title;

  /**
   * ----
   * ### webDemo._.subject
   * @type `{HTMLElement}`
   * @description Element that has the current focus of the webDemo. This means that the actions registered will have this element as target.
   */
  demo._.subject = undefined;

  /**
   * ----
   * ### webDemo._.logger
   * @type `{Object:DOMLogger}` 
   * @url https://www.npmjs.com/package/domlogger
   * @url https://github.com/allnulled/domlogger
   * @description This object can log messages that one can see in the same page (without the need of opening the console).
   */
  demo._.logger = new DOMLogger().show();
  demo._.logger.registerMessageType

  /*
   * ----
   * ### webDemo.cursorSpeed
   * @type `{Function}` 
   * @parameter `{Number} speed` Milliseconds for each transition of the cursor
   * @description This object can log messages that one can see in the same page (without the need of opening the console).
   *
   *
   *
   */
  demo.cursorSpeed = function(speed) {
  	(function(speed) {
	    demo._.tasks.push(["cursorSpeed", function(done) {
	    	demo._.speed = speed;
	      demo._.cursor.style.transition = utils.getTransitionString(speed);
	      done();
	    }]);
	  })(speed);
    return demo;
  };

  /**
   * ----
   * ### webDemo._.tasks
   * @type `{Array}`
   * @description Holds all the tasks that have been registered for this webDemo.
   */
  demo._.tasks = [];

  /**
   * ----
   * ### webDemo._.cursor
   * @type `{HTMLElement}`
   * @description Image of a cursor, that will move over the screen, simulating the click and drag'n'drop events.
   */
  demo._.cursor = document.createElement("img");
  demo._.cursor.src = "https://preview.ibb.co/k8FCeS/Cursor_Arrow_PNG_Picture.png";
  demo._.cursor.style.width = "12px";
  demo._.cursor.style.zIndex = "2147483648";
  demo._.cursor.style.position = "absolute";
  demo._.cursor.style.top = "0px";
  demo._.cursor.style.left = "0px";
  demo._.cursor.style.transition = utils.getTransitionString(700);
  document.body.appendChild(demo._.cursor);

	///////////////////////////////

	/**
   * ----
   * ### webDemo.start()
   * @type `{Function}`
   * @parameter `{Function} onFinish` Optional. Callback for when the demo is over.
   * @returns `{WebDemo}`
   * @description Starts the demo.
   */
  demo.start = function(onFinish=undefined) {
    // @TODO: do all the functions, one by one, synchronously.
    // @TODO: if possible, debug all of them by console, or via UI.
    var next = function() {
      if(demo._.tasks.length === 0) {
      	if(typeof onFinish === "function") {
      		onFinish.call(demo, demo);
      	}
      	return;
      }
      var currTask = demo._.tasks.shift();
      var op = currTask[0];
      demo._.logger.webDemoOperation(op);
      currTask[1].call(demo, next);
    };
    next();
    return demo;
  };

  ///////////////////////////////

  /**
   * ----
   * ### webDemo.inform(message, mode="log")
   * @type `{Function}`
   * @parameter `{String} message` Message to be shown.
   * @parameter `{String} mode` Method to be used for the logging (relative to DOMLogger).
   * @returns `{WebDemo}`  
   * @description Logs a message by the DOMLogger instance.
   */
  demo.inform = function(message, mode="log") {
    demo._.tasks.push(["inform", function(done) {
      // @TODO: message in a beautiful dialog
      // @TODO: timeOpt as timeout to close the dialog
      demo._.webDemoInform[mode](message);
      done();
    }]);
    return demo;
  };

  ///////////////////////////////
  
  /**
   * ----
   * ### webDemo.mouse(elementReference)
   * @type `{Function}`
   * @parameter `{HTMLElement} elementReference` Element in which to put the mouse over.
   * @returns `{WebDemo}` Returns the same webDemo instance.
   * @description Moves the mouse to put it over the center of an `{HTMLElement}`.
   */
  demo.mouse = function(elementReference, subSelector=undefined) {
    demo._.tasks.push(["mouse", function(done) {
      // @TODO: add mouse motion functionality
      // STEP 1: set the subject
      var subject = undefined;
      // Case 1: HTMLElement
      if(elementReference instanceof HTMLElement) {
        subject = elementReference;
      }
      // Case 2: {String:CSS-Selector}
      else if(typeof elementReference === "string") {
        var matches = document.querySelectorAll(elementReference);
        if(typeof subSelector === "undefined") {

        } else if(typeof subSelector === "function") {
        	subject = subSelector(subject);
        } else if((typeof subSelector === "string") || (typeof subSelector === "number")) {
        	subject = subject[subSelector];
        }
        if(matches.length === 1) {
          subject = matches[0];
        } else if(matches.length === 0) {
          throw {
            name: "MouseParamSelectionNotFound",
            message: "{WebDemo}.mouse($1): $1 is a {string} css selector, but it was not found (" + elementReference + ")"
          };
        } else if(matches.length > 1) {
          throw {
            name: "MouseParamSelectionNotUnique",
            message: "{WebDemo}.mouse($1): $1 is a {string} css selector, but it matches multiple elements (" + elementReference + ")"
          };
        }
      }
      if(!(subject instanceof HTMLElement)) {
        throw {
          name: "InvalidMouseParam",
          message: "{WebDemo}.mouse($1): $1 must be an HTMLElement, a existing CSS Selector."
        };
      }
      demo._.subject = subject;
      // STEP 2: scroll until the element is visible
      scrollIntoView(demo._.subject);
      // STEP 3: move the mouse to the subject while triggering the synthetic events
      var point = utils.getCentralPosition(demo._.subject);
      demo._.cursor.style.left = point.left + "px";
      demo._.cursor.style.top = point.top + "px";
      setTimeout(done, demo._.speed);
    }]);
    return demo;
  };

	///////////////////////////////
  
  /**
   * ----
	 * ### WebDemo.click()
	 * @type `{Function}`
	 * @parameter `{String} text` Text to type.
	 * @parameter `{Number} speedOpt` Useless for now.
	 * @returns `{WebDemo}` Returns the same webDemo instance.
   *
   */
  demo.click = function() {
    demo._.tasks.push(["click", function(done) {
      // @TODO: clicks the subject or the element specified
      syn.click(demo._.subject, {}, done);
    }]);
    return demo;
  };

	///////////////////////////////
  
  /**
   * ----
	 * ### WebDemo.type(test, speedOption)
	 * @type `{Function}`
	 * @parameter `{String} text` Text to type.
	 * @parameter `{Number} speedOpt` Useless for now.
	 * @returns `{WebDemo}` Returns the same webDemo instance.
	 * 
	 */
  demo.type = function(text, speedOpt) {
    demo._.tasks.push(["type", function(done) {
      // @TODO: type the text provided into the subject
      utils.typeText(demo._.subject, text, done, demo);
    }]);
    return demo;
  };
  
  /**
   * ----
   * ### webDemo.then(asyncFn)
   * @type `{Function}`
   * @parameter `{AsyncFunction}` Asynchronous function (it 
   * means that its first parameter is the call to the next 
   * asynchronous operation) that gets executed when the running
   * thread dispatches it, and that is finished when the first 
   * parameter that this function receives, is called.
   * @returns `{webDemo}` Returns the same webDemo instance.
   * @description Registers a new task which executes the 
   * asynchronous function that is passed as first parameter.
   */
  demo.then = function(asyncFn) {
    demo._.tasks.push(["then", asyncFn.bind(demo)]);
  };

  return demo;
};

///////////////////////////////

///////////////////////////////
