!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=5)}([function(e,t){var a=[{name:"Director of Frond-And",description:"Director of Frond-And",img:"../img/coffee-3.png"},{name:"Director of Back-End",description:"Director of Back-End",img:"../img/coffee-3.png"},{name:"Our Designers",description:"Our Designers",img:"../img/coffee-3.png"},{name:"Contact centre",description:"Contact centre",img:"../img/coffee-3.png"}],n=document.getElementById("container_AboutUs");function r(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,n=document.createElement(e);return n.innerHTML=t||"",n.className=a||"",n}for(i=0;i<a.length;i++){var l=r("div","","about_us_description"),s=r("div",a[i].name,"blocks_about_us_description"),o=r("div","","blocks_about_us");s.appendChild(l),o.appendChild(s),n.appendChild(o)}},function(e,t,a){var n=a(2);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};a(3)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,a){},function(e,t,a){var n,r,l={},i=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),s=function(e){var t={};return function(e,a){if("function"==typeof e)return e();if(void 0===t[e]){var n=function(e,t){return t?t.querySelector(e):document.querySelector(e)}.call(this,e,a);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),o=null,c=0,d=[],u=a(4);function f(e,t){for(var a=0;a<e.length;a++){var n=e[a],r=l[n.id];if(r){r.refs++;for(var i=0;i<r.parts.length;i++)r.parts[i](n.parts[i]);for(;i<n.parts.length;i++)r.parts.push(g(n.parts[i],t))}else{var s=[];for(i=0;i<n.parts.length;i++)s.push(g(n.parts[i],t));l[n.id]={id:n.id,refs:1,parts:s}}}}function b(e,t){for(var a=[],n={},r=0;r<e.length;r++){var l=e[r],i=t.base?l[0]+t.base:l[0],s={css:l[1],media:l[2],sourceMap:l[3]};n[i]?n[i].parts.push(s):a.push(n[i]={id:i,parts:[s]})}return a}function p(e,t){var a=s(e.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=d[d.length-1];if("top"===e.insertAt)n?n.nextSibling?a.insertBefore(t,n.nextSibling):a.appendChild(t):a.insertBefore(t,a.firstChild),d.push(t);else if("bottom"===e.insertAt)a.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=s(e.insertAt.before,a);a.insertBefore(t,r)}}function v(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=d.indexOf(e);t>=0&&d.splice(t,1)}function m(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return a.nc}();n&&(e.attrs.nonce=n)}return h(t,e.attrs),p(e,t),t}function h(e,t){Object.keys(t).forEach(function(a){e.setAttribute(a,t[a])})}function g(e,t){var a,n,r,l;if(t.transform&&e.css){if(!(l="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=l}if(t.singleton){var i=c++;a=o||(o=m(t)),n=_.bind(null,a,i,!1),r=_.bind(null,a,i,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(a=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",h(t,e.attrs),p(e,t),t}(t),n=function(e,t,a){var n=a.css,r=a.sourceMap,l=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||l)&&(n=u(n));r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var i=new Blob([n],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(i),s&&URL.revokeObjectURL(s)}.bind(null,a,t),r=function(){v(a),a.href&&URL.revokeObjectURL(a.href)}):(a=m(t),n=function(e,t){var a=t.css,n=t.media;n&&e.setAttribute("media",n);if(e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}.bind(null,a),r=function(){v(a)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=i()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var a=b(e,t);return f(a,t),function(e){for(var n=[],r=0;r<a.length;r++){var i=a[r];(s=l[i.id]).refs--,n.push(s)}e&&f(b(e,t),t);for(r=0;r<n.length;r++){var s;if(0===(s=n[r]).refs){for(var o=0;o<s.parts.length;o++)s.parts[o]();delete l[s.id]}}}};var y,L=(y=[],function(e,t){return y[e]=t,y.filter(Boolean).join("\n")});function _(e,t,a,n){var r=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=L(t,r);else{var l=document.createTextNode(r),i=e.childNodes;i[t]&&e.removeChild(i[t]),i.length?e.insertBefore(l,i[t]):e.appendChild(l)}}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var a=t.protocol+"//"+t.host,n=a+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,t){var r,l=t.trim().replace(/^"(.*)"$/,function(e,t){return t}).replace(/^'(.*)'$/,function(e,t){return t});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?e:(r=0===l.indexOf("//")?l:0===l.indexOf("/")?a+l:n+l.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,t,a){"use strict";a.r(t);a(0);function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=[{title:"bla-bla",descr:"bla-bla-bla-bla",data:"1"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"2"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"3"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"4"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"},{title:"bla-bla",descr:"bla-bla-bla-bla",data:"5"}],l=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,l;return t=e,(a=[{key:"getSlide",value:function(){return r}}])&&n(t.prototype,a),l&&n(t,l),e}();function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var s=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,(a=[{key:"removeCl",value:function(e){for(var t=0;t<e.length;t++)e[t].classList.remove("slide_l"),e[t].classList.remove("slide_r"),e[t].classList.remove("centre_slide"),e[t].classList.remove("slide_ll"),e[t].classList.remove("slide_rr")}}])&&i(t.prototype,a),n&&i(t,n),e}();function o(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var c=new s,d=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,a,n;return t=e,(a=[{key:"change",value:function(e,t,a){var n=this;t.map(function(t){t.addEventListener("click",function(t){e>=2&&e<a.length-2&&(c.removeCl(a),n.createClasses(a,e)),1==e&&(c.removeCl(a),n.createLeftPosition(a,e)),0==e&&(c.removeCl(a),n.createLeftLeftPosition(a,e)),a.length>5&&e==a.length-1&&(c.removeCl(a),n.createLastLeftPosition(a,e)),a.length>5&&e==a.length-2&&(c.removeCl(a),n.createPreLastLeftPosition(a,e))})})}},{key:"createClasses",value:function(e,t){e[t-1].classList.add("slide_l"),e[t-2].classList.add("slide_ll"),e[t].classList.add("centre_slide"),e[t+1].classList.add("slide_r"),e[t+2].classList.add("slide_rr")}},{key:"createLeftPosition",value:function(e,t){e[t-1].classList.add("slide_l"),e[t+1].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[t+2].classList.add("slide_rr"),e[e.length-1].classList.add("slide_ll")}},{key:"createLeftLeftPosition",value:function(e,t){e[e.length-1].classList.add("slide_l"),e[t+1].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[t+2].classList.add("slide_rr"),e[e.length-2].classList.add("slide_ll")}},{key:"createLastLeftPosition",value:function(e,t){e[t-1].classList.add("slide_l"),e[0].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[1].classList.add("slide_rr"),e[t-2].classList.add("slide_ll")}},{key:"createPreLastLeftPosition",value:function(e,t){e[t-1].classList.add("slide_l"),e[t+1].classList.add("slide_r"),e[t].classList.add("centre_slide"),e[0].classList.add("slide_rr"),e[t-2].classList.add("slide_ll")}}])&&o(t.prototype,a),n&&o(t,n),e}(),u=new l;u=u.getSlide();var f=new class{createNewElement(e,t=null,a=null,n){let r=document.createElement(e);return r.className=t||"",r.innerHTML=a||"",n&&n.map(e=>r.setAttribute(e.name,e.value)),r}},b=(new s,new d),p=Math.ceil(u.length/2);console.log(p);for(var v=document.getElementById("main_container_our_works"),m=0;m<u.length;m++){var h=f.createNewElement("div","sliderItem",m,[{name:"id",value:m}]);v.appendChild(h)}var g=document.getElementsByClassName("sliderItem");g=Array.from(g);for(var y=0;y<u.length;y++)g[y].classList.add("sl"+y);b.createClasses(g,p,u);var L=document.getElementsByClassName("arrows");(L=Array.from(L)).map(function(e){e.addEventListener("click",function(t){"arrowL"==e.id&&(p-=1,console.log("current "+p),-1==p&&(p=g.length-1),b.change(p,L,g)),"arrowR"==e.id&&(p+=1,console.log("current "+p),p>g.length-1&&(p=0),b.change(p,L,g))})});a(1)}]);