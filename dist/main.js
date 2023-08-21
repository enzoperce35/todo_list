(()=>{var __webpack_modules__={424:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(917),s=n(566),u=n(465),p=n(791),d=a()(o());d.i(c.Z),d.i(s.Z),d.i(u.Z),d.i(p.Z),d.push([e.id,".content {\n  display: grid;\n  grid-template-rows: 10vh 90vh;\n}\n",""]);const l=d},917:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,"/* http://meyerweb.com/eric/tools/css/reset/\n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n",""]);const c=a},566:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".mainUl-cont, .sideUl-cont {\n  background-color: cornflowerblue;\n  display: grid;\n  grid-template-rows: 1fr 4fr 1fr;\n  box-sizing: border-box;\n}\n\n.createBtn {\n  height: fit-content;\n  width: fit-content;\n  margin-top: auto;\n  padding: .5vh;\n  font-size: 1.5vh;\n}\n\nform {\n  background-color: olivedrab;\n  height: 88vh;\n  width: 40vw;\n  position: absolute;\n  top: 11.5vh;\n  right: 10%;\n}\n",""]);const c=a},791:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(692),s=n(458),u=a()(o());u.i(c.Z),u.i(s.Z),u.push([e.id,".main {\n  display: grid;\n  grid-template-columns: 30vw 70vw;\n}\n",""]);const p=u},692:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".main-content {\n  background-color: crimson;\n  display: grid;\n  grid-template-rows: repeat(2, 1fr);\n}\n\n.mainUl-cont {\n  height: calc(90vh/2);\n  padding: 4vh;\n}\n\n.main-header {\n  font-size: 3vh;\n}\n\n.todo-list, .project-list {\n  display: grid;\n  font-size: 2.5vh;\n  grid-template-rows: repeat(auto-fit, 1fr);\n  grid-gap: 4vh;\n  overflow: hidden;\n  max-height: 22.2vh;\n}\n\n\n",""]);const c=a},458:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".side-content {\n  display: grid;\n  grid-template-rows: repeat(3, 1fr);\n}\n\n.side-content > * {\n  height: calc(90vh/3);\n  border: 1px solid black;\n  box-sizing: border-box;\n}\n\n.sideUl-cont {\n  height: 100%;\n  padding: 2vh;\n\n}\n\n.side-header {\n  font-size: 2vh;\n}\n\n.project-list {\n  font-size: 2vh;\n  grid-gap: 3vh;\n}\n\n#add-project {\n  padding: .3vh;\n  font-size: 1vh;\n}\n",""]);const c=a},465:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(81),o=n.n(r),i=n(645),a=n.n(i)()(o());a.push([e.id,".nav {\n  background-color: aliceblue;\n}\n",""]);const c=a},645:e=>{"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",r=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),r&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),r&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<e.length;u++){var p=[].concat(e[u]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),n&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=n):p[2]=n),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),t.push(p))}},t}},81:e=>{"use strict";e.exports=function(e){return e[1]}},798:function(e,t,n){e=n.nmd(e),function(n,r){"use strict";var o={};n.PubSub?(o=n.PubSub,console.warn("PubSub already loaded, using existing version")):(n.PubSub=o,function(e){var t={},n=-1,r="*";function o(e,t,n){try{e(t,n)}catch(e){setTimeout(function(e){return function(){throw e}}(e),0)}}function i(e,t,n){e(t,n)}function a(e,n,r,a){var c,s=t[n],u=a?i:o;if(Object.prototype.hasOwnProperty.call(t,n))for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&u(s[c],e,r)}function c(e){var n=String(e);return Boolean(Object.prototype.hasOwnProperty.call(t,n)&&function(e){var t;for(t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!0;return!1}(t[n]))}function s(e,t,n,o){var i=function(e,t,n){return function(){var o=String(e),i=o.lastIndexOf(".");for(a(e,e,t,n);-1!==i;)i=(o=o.substr(0,i)).lastIndexOf("."),a(e,o,t,n);a(e,r,t,n)}}(e="symbol"==typeof e?e.toString():e,t,o);return!!function(e){for(var t=String(e),n=c(t)||c(r),o=t.lastIndexOf(".");!n&&-1!==o;)o=(t=t.substr(0,o)).lastIndexOf("."),n=c(t);return n}(e)&&(!0===n?i():setTimeout(i,0),!0)}e.publish=function(t,n){return s(t,n,!1,e.immediateExceptions)},e.publishSync=function(t,n){return s(t,n,!0,e.immediateExceptions)},e.subscribe=function(e,r){if("function"!=typeof r)return!1;e="symbol"==typeof e?e.toString():e,Object.prototype.hasOwnProperty.call(t,e)||(t[e]={});var o="uid_"+String(++n);return t[e][o]=r,o},e.subscribeAll=function(t){return e.subscribe(r,t)},e.subscribeOnce=function(t,n){var r=e.subscribe(t,(function(){e.unsubscribe(r),n.apply(this,arguments)}));return e},e.clearAllSubscriptions=function(){t={}},e.clearSubscriptions=function(e){var n;for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e)&&delete t[n]},e.countSubscriptions=function(e){var n,r,o=0;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e)){for(r in t[n])o++;break}return o},e.getSubscriptions=function(e){var n,r=[];for(n in t)Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e)&&r.push(n);return r},e.unsubscribe=function(n){var r,o,i,a="string"==typeof n&&(Object.prototype.hasOwnProperty.call(t,n)||function(e){var n;for(n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&0===n.indexOf(e))return!0;return!1}(n)),c=!a&&"string"==typeof n,s="function"==typeof n,u=!1;if(!a){for(r in t)if(Object.prototype.hasOwnProperty.call(t,r)){if(o=t[r],c&&o[n]){delete o[n],u=n;break}if(s)for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&o[i]===n&&(delete o[i],u=!0)}return u}e.clearSubscriptions(n)}}(o)),void 0!==e&&e.exports&&(t=e.exports=o),t.PubSub=o,e.exports=t=o}("object"==typeof window&&window||this)},379:e=>{"use strict";var t=[];function n(e){for(var n=-1,r=0;r<t.length;r++)if(t[r].identifier===e){n=r;break}return n}function r(e,r){for(var i={},a=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],p=i[u]||0,d="".concat(u," ").concat(p);i[u]=p+1;var l=n(d),_={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==l)t[l].references++,t[l].updater(_);else{var f=o(_,r);r.byIndex=c,t.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var c=n(i[a]);t[c].references--}for(var s=r(e,o),u=0;u<i.length;u++){var p=n(i[u]);0===t[p].references&&(t[p].updater(),t.splice(p,1))}i=s}}},569:e=>{"use strict";var t={};e.exports=function(e,n){var r=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:e=>{"use strict";e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,n)=>{"use strict";e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},795:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleTagTransform(r,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{"use strict";e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},416:(e,t,n)=>{"use strict";function r(e){return e.slice(0,1).toUpperCase()+e.slice(1).toLowerCase()}n.d(t,{M:()=>r})},192:(e,t,n)=>{"use strict";function r(e,t="",n=""){const r=document.createElement(`${e}`);return""!=n&&(r.id=`${n}`),""!=t&&(r.className=`${t}`),r}function o(e){e.hidden=!0}function i(e){e.hidden=!1}function a(e,t=""){const n=r("p",`${e}-header`);return n.innerText=t,n}function c(e){const t=r("button","createBtn","");return t.innerText="Add",t.onclick=function(){PubSub.publish("createBtnClicked",e)},t}n.d(t,{C2:()=>a,K4:()=>i,UT:()=>o,ax:()=>c,y2:()=>r})},830:(e,t,n)=>{"use strict";n.d(t,{Uq:()=>i,XO:()=>c,Xe:()=>s,fh:()=>u,o7:()=>a});var r=n(416),o=n(192);function i(e){const t=(0,o.y2)("p");t.innerHTML="New "+(0,r.M)(e);const n=(0,o.y2)("div");return n.append(t),n}function a(e,t,n){let r=(0,o.y2)("input","",`${t}-${n}`);return r.type=e,r.name=n,r}function c(e,t){let n=(0,o.y2)("label");return n.innerText=t.toUpperCase(),n.setAttribute("for",`${e}-${t}`),n}function s(e,t,n){const r=(0,o.y2)("div"),i=c(t,n),s=a(e,t,n);return r.append(i,s),r}function u(e,t){const n=document.getElementsByTagName("form");for(let e=0;e<n.length;e++){const r=n[e];r.id==`${t}-form`?(0,o.K4)(r):(0,o.UT)(r)}}},251:(e,t,n)=>{"use strict";n.d(t,{_:()=>a});var r=n(416),o=n(192),i=n(830);const a={titleize:r.M,newEl:o.y2,hideEl:o.UT,showEl:o.K4,listHeader:o.C2,createButton:o.ax,formHeader:i.Uq,userInput:i.o7,inputLabel:i.XO,inputField:i.Xe,showForm:i.fh}},313:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{c:()=>form});var _helpers_helper__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(251);const form=obj=>{let formObj=(()=>{const e=_helpers_helper__WEBPACK_IMPORTED_MODULE_0__._.newEl("form","",`${obj}-form`);return _helpers_helper__WEBPACK_IMPORTED_MODULE_0__._.hideEl(e),e})();const header=_helpers_helper__WEBPACK_IMPORTED_MODULE_0__._.formHeader(obj),title=_helpers_helper__WEBPACK_IMPORTED_MODULE_0__._.inputField("text",obj,"title"),description=_helpers_helper__WEBPACK_IMPORTED_MODULE_0__._.inputField("text",obj,"description"),submit=_helpers_helper__WEBPACK_IMPORTED_MODULE_0__._.userInput("submit",obj,"Submit");function addFields(...args){return args.forEach((arg=>formObj.append(eval(arg)))),formObj.prepend(header),formObj.append(submit),formObj}return formObj.onsubmit=e=>{e.preventDefault(),PubSub.publish("formSubmitted",{formData:formObj,formObj:obj})},{formObj,addFields}}}},__webpack_module_cache__={};function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var n=__webpack_module_cache__[e]={id:e,loaded:!1,exports:{}};return __webpack_modules__[e].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},__webpack_require__.d=(e,t)=>{for(var n in t)__webpack_require__.o(t,n)&&!__webpack_require__.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),__webpack_require__.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),__webpack_require__.nc=void 0;var __webpack_exports__={};(()=>{"use strict";__webpack_require__(798);class e{constructor(e,t){this.type="todo",this.title=e,this.description=t}get title(){return this._title}set title(e){return this._title=e}get description(){return this._description}set description(e){return this._description=e}}class t{constructor(e,t){this.type="project",this.title=e,this.description=t}get title(){return this._title}set title(e){return this._title=e}get description(){return this._description}set description(e){return this._description=e}}const n=(()=>{function n(){for(var e=[],t=Object.keys(localStorage),n=t.length;n--;)e.push(localStorage.getItem(t[n]));return e}return PubSub.subscribe("formSubmitted",(function(n,r){const o=Object.fromEntries(new FormData(r.formData).entries()),i=r.formObj;var a;a=(()=>{let n=Object.values(o);return"todo"==i?new e(...n):"project"==i?new t(...n):void 0})(),localStorage.setItem(a.title,JSON.stringify(a)),location.reload()})),console.log(n()),{allStorage:n}})();var r=__webpack_require__(192);const o=(0,r.y2)("div","nav"),i=(0,r.y2)("div","aside-top");var a=__webpack_require__(251);const c=e=>{let t=(0,r.y2)("ul",`${e}-list`);const o=n.allStorage().filter((t=>JSON.parse(t).type==e));return(()=>{for(let e=0;e<o.length;e++){const n=JSON.parse(o[e]),i=(0,r.y2)("li");i.innerHTML=`${n._title}: ${n._description}`,t.append(i)}})(),t},s=a._.listHeader("project","PROJECTS"),u=c("project"),p=a._.createButton("project"),d=(()=>{const e=a._.newEl("div","sideUl-cont");return e.append(s,u,p),e})(),l=a._.newEl("div","aside-middle");l.appendChild(d);const _=(0,r.y2)("div","aside-bottom"),f=(0,r.y2)("div","side-content");f.append(i,l,_);const b=a._.listHeader("main","TODO"),h=c("todo"),m=a._.createButton("todo"),v=(()=>{const e=a._.newEl("div","mainUl-cont");return e.style="border-bottom: 1px solid black",e.append(b,h,m),e})(),y=a._.newEl("div","mainUl-cont"),g=(0,r.y2)("div","main-content");g.append(v,y);var w=__webpack_require__(313),O=__webpack_require__(830);const k=(0,w.c)("todo").addFields("title","description"),j=(0,w.c)("project").addFields("title","description");PubSub.subscribe("createBtnClicked",O.fh);const x=(0,r.y2)("div","main");x.append(f,g,j,k);const q=(0,r.y2)("div","content");q.append(o,x);var E=__webpack_require__(379),P=__webpack_require__.n(E),S=__webpack_require__(795),T=__webpack_require__.n(S),M=__webpack_require__(569),C=__webpack_require__.n(M),U=__webpack_require__(565),I=__webpack_require__.n(U),D=__webpack_require__(216),Z=__webpack_require__.n(D),A=__webpack_require__(589),B=__webpack_require__.n(A),L=__webpack_require__(424),$={};$.styleTagTransform=B(),$.setAttributes=I(),$.insert=C().bind(null,"head"),$.domAPI=T(),$.insertStyleElement=Z(),P()(L.Z,$),L.Z&&L.Z.locals&&L.Z.locals,document.body.appendChild(q)})()})();