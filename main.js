/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@simonwep/pickr/dist/pickr.min.js":
/*!********************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/pickr.min.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*! Pickr 1.7.2 MIT | https://github.com/Simonwep/pickr */
!function(t,e){ true?module.exports=e():undefined}(window,(function(){return function(t){var e={};function o(n){if(e[n])return e[n].exports;var i=e[n]={i:n,l:!1,exports:{}};return t[n].call(i.exports,i,i.exports,o),i.l=!0,i.exports}return o.m=t,o.c=e,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="",o(o.s=1)}([function(t){t.exports=JSON.parse('{"a":"1.7.2"}')},function(t,e,o){"use strict";o.r(e);var n={};function i(t,e,o,n,i={}){e instanceof HTMLCollection||e instanceof NodeList?e=Array.from(e):Array.isArray(e)||(e=[e]),Array.isArray(o)||(o=[o]);for(const r of e)for(const e of o)r[t](e,n,{capture:!1,...i});return Array.prototype.slice.call(arguments,1)}o.r(n),o.d(n,"on",(function(){return r})),o.d(n,"off",(function(){return s})),o.d(n,"createElementFromString",(function(){return a})),o.d(n,"createFromTemplate",(function(){return c})),o.d(n,"eventPath",(function(){return l})),o.d(n,"resolveElement",(function(){return p})),o.d(n,"adjustableInputNumbers",(function(){return u}));const r=i.bind(null,"addEventListener"),s=i.bind(null,"removeEventListener");function a(t){const e=document.createElement("div");return e.innerHTML=t.trim(),e.firstElementChild}function c(t){const e=(t,e)=>{const o=t.getAttribute(e);return t.removeAttribute(e),o},o=(t,n={})=>{const i=e(t,":obj"),r=e(t,":ref"),s=i?n[i]={}:n;r&&(n[r]=t);for(const n of Array.from(t.children)){const t=e(n,":arr"),i=o(n,t?{}:s);t&&(s[t]||(s[t]=[])).push(Object.keys(i).length?i:n)}return n};return o(a(t))}function l(t){let e=t.path||t.composedPath&&t.composedPath();if(e)return e;let o=t.target.parentElement;for(e=[t.target,o];o=o.parentElement;)e.push(o);return e.push(document,window),e}function p(t){return t instanceof Element?t:"string"==typeof t?t.split(/>>/g).reduce((t,e,o,n)=>(t=t.querySelector(e),o<n.length-1?t.shadowRoot:t),document):null}function u(t,e=(t=>t)){function o(o){const n=[.001,.01,.1][Number(o.shiftKey||2*o.ctrlKey)]*(o.deltaY<0?1:-1);let i=0,r=t.selectionStart;t.value=t.value.replace(/[\d.]+/g,(t,o)=>o<=r&&o+t.length>=r?(r=o,e(Number(t),n,i)):(i++,t)),t.focus(),t.setSelectionRange(r,r),o.preventDefault(),t.dispatchEvent(new Event("input"))}r(t,"focus",()=>r(window,"wheel",o,{passive:!1})),r(t,"blur",()=>s(window,"wheel",o))}var h=o(0);const{min:d,max:f,floor:m,round:v}=Math;function b(t,e,o){e/=100,o/=100;const n=m(t=t/360*6),i=t-n,r=o*(1-e),s=o*(1-i*e),a=o*(1-(1-i)*e),c=n%6;return[255*[o,s,r,r,a,o][c],255*[a,o,o,s,r,r][c],255*[r,r,a,o,o,s][c]]}function g(t,e,o){const n=(2-(e/=100))*(o/=100)/2;return 0!==n&&(e=1===n?0:n<.5?e*o/(2*n):e*o/(2-2*n)),[t,100*e,100*n]}function y(t,e,o){const n=d(t/=255,e/=255,o/=255),i=f(t,e,o),r=i-n;let s,a;if(0===r)s=a=0;else{a=r/i;const n=((i-t)/6+r/2)/r,c=((i-e)/6+r/2)/r,l=((i-o)/6+r/2)/r;t===i?s=l-c:e===i?s=1/3+n-l:o===i&&(s=2/3+c-n),s<0?s+=1:s>1&&(s-=1)}return[360*s,100*a,100*i]}function _(t,e,o,n){return e/=100,o/=100,[...y(255*(1-d(1,(t/=100)*(1-(n/=100))+n)),255*(1-d(1,e*(1-n)+n)),255*(1-d(1,o*(1-n)+n)))]}function w(t,e,o){e/=100;const n=2*(e*=(o/=100)<.5?o:1-o)/(o+e)*100,i=100*(o+e);return[t,isNaN(n)?0:n,i]}function A(t){return y(...t.match(/.{2}/g).map(t=>parseInt(t,16)))}function C(t){t=t.match(/^[a-zA-Z]+$/)?function(t){if("black"===t.toLowerCase())return"#000";const e=document.createElement("canvas").getContext("2d");return e.fillStyle=t,"#000"===e.fillStyle?null:e.fillStyle}(t):t;const e={cmyk:/^cmyk[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)/i,rgba:/^((rgba)|rgb)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsla:/^((hsla)|hsl)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hsva:/^((hsva)|hsv)[\D]+([\d.]+)[\D]+([\d.]+)[\D]+([\d.]+)[\D]*?([\d.]+|$)/i,hexa:/^#?(([\dA-Fa-f]{3,4})|([\dA-Fa-f]{6})|([\dA-Fa-f]{8}))$/i},o=t=>t.map(t=>/^(|\d+)\.\d+|\d+$/.test(t)?Number(t):void 0);let n;t:for(const i in e){if(!(n=e[i].exec(t)))continue;const r=t=>!!n[2]==("number"==typeof t);switch(i){case"cmyk":{const[,t,e,r,s]=o(n);if(t>100||e>100||r>100||s>100)break t;return{values:_(t,e,r,s),type:i}}case"rgba":{const[,,,t,e,s,a]=o(n);if(t>255||e>255||s>255||a<0||a>1||!r(a))break t;return{values:[...y(t,e,s),a],a:a,type:i}}case"hexa":{let[,t]=n;4!==t.length&&3!==t.length||(t=t.split("").map(t=>t+t).join(""));const e=t.substring(0,6);let o=t.substring(6);return o=o?parseInt(o,16)/255:void 0,{values:[...A(e),o],a:o,type:i}}case"hsla":{const[,,,t,e,s,a]=o(n);if(t>360||e>100||s>100||a<0||a>1||!r(a))break t;return{values:[...w(t,e,s),a],a:a,type:i}}case"hsva":{const[,,,t,e,s,a]=o(n);if(t>360||e>100||s>100||a<0||a>1||!r(a))break t;return{values:[t,e,s,a],a:a,type:i}}}}return{values:null,type:null}}function k(t=0,e=0,o=0,n=1){const i=(t,e)=>(o=-1)=>e(~o?t.map(t=>Number(t.toFixed(o))):t),r={h:t,s:e,v:o,a:n,toHSVA(){const t=[r.h,r.s,r.v,r.a];return t.toString=i(t,t=>"hsva(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toHSLA(){const t=[...g(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"hsla(".concat(t[0],", ").concat(t[1],"%, ").concat(t[2],"%, ").concat(r.a,")")),t},toRGBA(){const t=[...b(r.h,r.s,r.v),r.a];return t.toString=i(t,t=>"rgba(".concat(t[0],", ").concat(t[1],", ").concat(t[2],", ").concat(r.a,")")),t},toCMYK(){const t=function(t,e,o){const n=b(t,e,o),i=n[0]/255,r=n[1]/255,s=n[2]/255,a=d(1-i,1-r,1-s);return[100*(1===a?0:(1-i-a)/(1-a)),100*(1===a?0:(1-r-a)/(1-a)),100*(1===a?0:(1-s-a)/(1-a)),100*a]}(r.h,r.s,r.v);return t.toString=i(t,t=>"cmyk(".concat(t[0],"%, ").concat(t[1],"%, ").concat(t[2],"%, ").concat(t[3],"%)")),t},toHEXA(){const t=function(t,e,o){return b(t,e,o).map(t=>v(t).toString(16).padStart(2,"0"))}(r.h,r.s,r.v),e=r.a>=1?"":Number((255*r.a).toFixed(0)).toString(16).toUpperCase().padStart(2,"0");return e&&t.push(e),t.toString=()=>"#".concat(t.join("").toUpperCase()),t},clone:()=>k(r.h,r.s,r.v,r.a)};return r}const S=t=>Math.max(Math.min(t,1),0);function O(t){const e={options:Object.assign({lock:null,onchange:()=>0,onstop:()=>0},t),_keyboard(t){const{options:o}=e,{type:n,key:i}=t;if(document.activeElement===o.wrapper){const{lock:o}=e.options,r="ArrowUp"===i,s="ArrowRight"===i,a="ArrowDown"===i,c="ArrowLeft"===i;if("keydown"===n&&(r||s||a||c)){let n=0,i=0;"v"===o?n=r||s?1:-1:"h"===o?n=r||s?-1:1:(i=r?-1:a?1:0,n=c?-1:s?1:0),e.update(S(e.cache.x+.01*n),S(e.cache.y+.01*i)),t.preventDefault()}else i.startsWith("Arrow")&&(e.options.onstop(),t.preventDefault())}},_tapstart(t){r(document,["mouseup","touchend","touchcancel"],e._tapstop),r(document,["mousemove","touchmove"],e._tapmove),t.cancelable&&t.preventDefault(),e._tapmove(t)},_tapmove(t){const{options:o,cache:n}=e,{lock:i,element:r,wrapper:s}=o,a=s.getBoundingClientRect();let c=0,l=0;if(t){const e=t&&t.touches&&t.touches[0];c=t?(e||t).clientX:0,l=t?(e||t).clientY:0,c<a.left?c=a.left:c>a.left+a.width&&(c=a.left+a.width),l<a.top?l=a.top:l>a.top+a.height&&(l=a.top+a.height),c-=a.left,l-=a.top}else n&&(c=n.x*a.width,l=n.y*a.height);"h"!==i&&(r.style.left="calc(".concat(c/a.width*100,"% - ").concat(r.offsetWidth/2,"px)")),"v"!==i&&(r.style.top="calc(".concat(l/a.height*100,"% - ").concat(r.offsetHeight/2,"px)")),e.cache={x:c/a.width,y:l/a.height};const p=S(c/a.width),u=S(l/a.height);switch(i){case"v":return o.onchange(p);case"h":return o.onchange(u);default:return o.onchange(p,u)}},_tapstop(){e.options.onstop(),s(document,["mouseup","touchend","touchcancel"],e._tapstop),s(document,["mousemove","touchmove"],e._tapmove)},trigger(){e._tapmove()},update(t=0,o=0){const{left:n,top:i,width:r,height:s}=e.options.wrapper.getBoundingClientRect();"h"===e.options.lock&&(o=t),e._tapmove({clientX:n+r*t,clientY:i+s*o})},destroy(){const{options:t,_tapstart:o,_keyboard:n}=e;s(document,["keydown","keyup"],n),s([t.wrapper,t.element],"mousedown",o),s([t.wrapper,t.element],"touchstart",o,{passive:!1})}},{options:o,_tapstart:n,_keyboard:i}=e;return r([o.wrapper,o.element],"mousedown",n),r([o.wrapper,o.element],"touchstart",n,{passive:!1}),r(document,["keydown","keyup"],i),e}function E(t={}){t=Object.assign({onchange:()=>0,className:"",elements:[]},t);const e=r(t.elements,"click",e=>{t.elements.forEach(o=>o.classList[e.target===o?"add":"remove"](t.className)),t.onchange(e)});return{destroy:()=>s(...e)}}
/*! NanoPop 1.3.0 MIT | https://github.com/Simonwep/nanopop */
let x=(()=>{class t{constructor(e,o,{positionFlipOrder:n=t.defaultPositionFlipOrder,variantFlipOrder:i=t.defaultVariantFlipOrder,container:r=document.documentElement.getBoundingClientRect(),forceApplyOnFailure:s=!1,margin:a=8,position:c="bottom-start"}={}){this.o={positionFlipOrder:n,variantFlipOrder:i,reference:e,popper:o,position:c,container:r,forceApplyOnFailure:s,margin:a}}update(t=this.o,e=!1){const{container:o,reference:n,popper:i,margin:r,position:s,forceApplyOnFailure:a,variantFlipOrder:c,positionFlipOrder:l}=this.o={...this.o,...t};i.style.left="0",i.style.top="0";const p=n.getBoundingClientRect(),u=i.getBoundingClientRect(),h={t:p.top-u.height-r,b:p.bottom+r,r:p.right+r,l:p.left-u.width-r},d={vm:-u.width/2+(p.left+p.width/2),vs:p.left,ve:p.left+p.width-u.width,hs:p.bottom-p.height,he:p.bottom-u.height,hm:p.bottom-p.height/2-u.height/2},[f,m="middle"]=s.split("-"),v=l[f],b=c[m],{top:g,left:y,bottom:_,right:w}=o;for(const t of v){const o="t"===t||"b"===t,n=h[t],[r,s]=o?["top","left"]:["left","top"],[a,c]=o?[u.height,u.width]:[u.width,u.height],[l,p]=o?[_,w]:[w,_],[f,m]=o?[g,y]:[y,g];if(e||!(n<f||n+a>l))for(const a of b){const l=d[(o?"v":"h")+a];if(e||!(l<m||l+c>p))return i.style[s]=l-u[s]+"px",i.style[r]=n-u[r]+"px",t+a}}return a?this.update(void 0,!0):null}}return t.version="1.3.0",t.defaultVariantFlipOrder={start:"sme",middle:"mse",end:"ems"},t.defaultPositionFlipOrder={top:"tbrl",right:"rltb",bottom:"btrl",left:"lrbt"},t})();function L(t,e,o){return e in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class B{constructor(t){L(this,"_initializingActive",!0),L(this,"_recalc",!0),L(this,"_nanopop",null),L(this,"_root",null),L(this,"_color",k()),L(this,"_lastColor",k()),L(this,"_swatchColors",[]),L(this,"_eventListener",{init:[],save:[],hide:[],show:[],clear:[],change:[],changestop:[],cancel:[],swatchselect:[]}),this.options=t=Object.assign({...B.DEFAULT_OPTIONS},t);const{swatches:e,components:o,theme:n,sliders:i,lockOpacity:r,padding:s}=t;["nano","monolith"].includes(n)&&!i&&(t.sliders="h"),o.interaction||(o.interaction={});const{preview:a,opacity:c,hue:l,palette:p}=o;o.opacity=!r&&c,o.palette=p||a||c||l,this._preBuild(),this._buildComponents(),this._bindEvents(),this._finalBuild(),e&&e.length&&e.forEach(t=>this.addSwatch(t));const{button:u,app:h}=this._root;this._nanopop=new x(u,h,{margin:s}),u.setAttribute("role","button"),u.setAttribute("aria-label",this._t("btn:toggle"));const d=this;requestAnimationFrame((function e(){if(!h.offsetWidth)return requestAnimationFrame(e);d.setColor(t.default),d._rePositioningPicker(),t.defaultRepresentation&&(d._representation=t.defaultRepresentation,d.setColorRepresentation(d._representation)),t.showAlways&&d.show(),d._initializingActive=!1,d._emit("init")}))}_preBuild(){const{options:t}=this;for(const e of["el","container"])t[e]=p(t[e]);this._root=(t=>{const{components:e,useAsButton:o,inline:n,appClass:i,theme:r,lockOpacity:s}=t.options,a=t=>t?"":'style="display:none" hidden',l=e=>t._t(e),p=c('\n      <div :ref="root" class="pickr">\n\n        '.concat(o?"":'<button type="button" :ref="button" class="pcr-button"></button>','\n\n        <div :ref="app" class="pcr-app ').concat(i||"",'" data-theme="').concat(r,'" ').concat(n?'style="position: unset"':"",' aria-label="').concat(l("ui:dialog"),'" role="window">\n          <div class="pcr-selection" ').concat(a(e.palette),'>\n            <div :obj="preview" class="pcr-color-preview" ').concat(a(e.preview),'>\n              <button type="button" :ref="lastColor" class="pcr-last-color" aria-label="').concat(l("btn:last-color"),'"></button>\n              <div :ref="currentColor" class="pcr-current-color"></div>\n            </div>\n\n            <div :obj="palette" class="pcr-color-palette">\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="palette" class="pcr-palette" tabindex="0" aria-label="').concat(l("aria:palette"),'" role="listbox"></div>\n            </div>\n\n            <div :obj="hue" class="pcr-color-chooser" ').concat(a(e.hue),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-hue pcr-slider" tabindex="0" aria-label="').concat(l("aria:hue"),'" role="slider"></div>\n            </div>\n\n            <div :obj="opacity" class="pcr-color-opacity" ').concat(a(e.opacity),'>\n              <div :ref="picker" class="pcr-picker"></div>\n              <div :ref="slider" class="pcr-opacity pcr-slider" tabindex="0" aria-label="').concat(l("aria:opacity"),'" role="slider"></div>\n            </div>\n          </div>\n\n          <div class="pcr-swatches ').concat(e.palette?"":"pcr-last",'" :ref="swatches"></div>\n\n          <div :obj="interaction" class="pcr-interaction" ').concat(a(Object.keys(e.interaction).length),'>\n            <input :ref="result" class="pcr-result" type="text" spellcheck="false" ').concat(a(e.interaction.input),' aria-label="').concat(l("aria:input"),'">\n\n            <input :arr="options" class="pcr-type" data-type="HEXA" value="').concat(s?"HEX":"HEXA",'" type="button" ').concat(a(e.interaction.hex),'>\n            <input :arr="options" class="pcr-type" data-type="RGBA" value="').concat(s?"RGB":"RGBA",'" type="button" ').concat(a(e.interaction.rgba),'>\n            <input :arr="options" class="pcr-type" data-type="HSLA" value="').concat(s?"HSL":"HSLA",'" type="button" ').concat(a(e.interaction.hsla),'>\n            <input :arr="options" class="pcr-type" data-type="HSVA" value="').concat(s?"HSV":"HSVA",'" type="button" ').concat(a(e.interaction.hsva),'>\n            <input :arr="options" class="pcr-type" data-type="CMYK" value="CMYK" type="button" ').concat(a(e.interaction.cmyk),'>\n\n            <input :ref="save" class="pcr-save" value="').concat(l("btn:save"),'" type="button" ').concat(a(e.interaction.save),' aria-label="').concat(l("aria:btn:save"),'">\n            <input :ref="cancel" class="pcr-cancel" value="').concat(l("btn:cancel"),'" type="button" ').concat(a(e.interaction.cancel),' aria-label="').concat(l("aria:btn:cancel"),'">\n            <input :ref="clear" class="pcr-clear" value="').concat(l("btn:clear"),'" type="button" ').concat(a(e.interaction.clear),' aria-label="').concat(l("aria:btn:clear"),'">\n          </div>\n        </div>\n      </div>\n    ')),u=p.interaction;return u.options.find(t=>!t.hidden&&!t.classList.add("active")),u.type=()=>u.options.find(t=>t.classList.contains("active")),p})(this),t.useAsButton&&(this._root.button=t.el),t.container.appendChild(this._root.root)}_finalBuild(){const t=this.options,e=this._root;if(t.container.removeChild(e.root),t.inline){const o=t.el.parentElement;t.el.nextSibling?o.insertBefore(e.app,t.el.nextSibling):o.appendChild(e.app)}else t.container.appendChild(e.app);t.useAsButton?t.inline&&t.el.remove():t.el.parentNode.replaceChild(e.root,t.el),t.disabled&&this.disable(),t.comparison||(e.button.style.transition="none",t.useAsButton||(e.preview.lastColor.style.transition="none")),this.hide()}_buildComponents(){const t=this,e=this.options.components,o=(t.options.sliders||"v").repeat(2),[n,i]=o.match(/^[vh]+$/g)?o:[],r=()=>this._color||(this._color=this._lastColor.clone()),s={palette:O({element:t._root.palette.picker,wrapper:t._root.palette.palette,onstop:()=>t._emit("changestop",t),onchange(o,n){if(!e.palette)return;const i=r(),{_root:s,options:a}=t,{lastColor:c,currentColor:l}=s.preview;t._recalc&&(i.s=100*o,i.v=100-100*n,i.v<0&&(i.v=0),t._updateOutput());const p=i.toRGBA().toString(0);this.element.style.background=p,this.wrapper.style.background="\n                        linear-gradient(to top, rgba(0, 0, 0, ".concat(i.a,"), transparent),\n                        linear-gradient(to left, hsla(").concat(i.h,", 100%, 50%, ").concat(i.a,"), rgba(255, 255, 255, ").concat(i.a,"))\n                    "),a.comparison?a.useAsButton||t._lastColor||(c.style.color=p):(s.button.style.color=p,s.button.classList.remove("clear"));const u=i.toHEXA().toString();for(const{el:e,color:o}of t._swatchColors)e.classList[u===o.toHEXA().toString()?"add":"remove"]("pcr-active");l.style.color=p}}),hue:O({lock:"v"===i?"h":"v",element:t._root.hue.picker,wrapper:t._root.hue.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.hue||!e.palette)return;const n=r();t._recalc&&(n.h=360*o),this.element.style.backgroundColor="hsl(".concat(n.h,", 100%, 50%)"),s.palette.trigger()}}),opacity:O({lock:"v"===n?"h":"v",element:t._root.opacity.picker,wrapper:t._root.opacity.slider,onstop:()=>t._emit("changestop",t),onchange(o){if(!e.opacity||!e.palette)return;const n=r();t._recalc&&(n.a=Math.round(100*o)/100),this.element.style.background="rgba(0, 0, 0, ".concat(n.a,")"),s.palette.trigger()}}),selectable:E({elements:t._root.interaction.options,className:"active",onchange(e){t._representation=e.target.getAttribute("data-type").toUpperCase(),t._recalc&&t._updateOutput()}})};this._components=s}_bindEvents(){const{_root:t,options:e}=this,o=[r(t.interaction.clear,"click",()=>this._clearColor()),r([t.interaction.cancel,t.preview.lastColor],"click",()=>{this._emit("cancel",this),this.setHSVA(...(this._lastColor||this._color).toHSVA(),!0)}),r(t.interaction.save,"click",()=>{!this.applyColor()&&!e.showAlways&&this.hide()}),r(t.interaction.result,["keyup","input"],t=>{this.setColor(t.target.value,!0)&&!this._initializingActive&&this._emit("change",this._color),t.stopImmediatePropagation()}),r(t.interaction.result,["focus","blur"],t=>{this._recalc="blur"===t.type,this._recalc&&this._updateOutput()}),r([t.palette.palette,t.palette.picker,t.hue.slider,t.hue.picker,t.opacity.slider,t.opacity.picker],["mousedown","touchstart"],()=>this._recalc=!0,{passive:!0})];if(!e.showAlways){const n=e.closeWithKey;o.push(r(t.button,"click",()=>this.isOpen()?this.hide():this.show()),r(document,"keyup",t=>this.isOpen()&&(t.key===n||t.code===n)&&this.hide()),r(document,["touchstart","mousedown"],e=>{this.isOpen()&&!l(e).some(e=>e===t.app||e===t.button)&&this.hide()},{capture:!0}))}if(e.adjustableNumbers){const e={rgba:[255,255,255,1],hsva:[360,100,100,1],hsla:[360,100,100,1],cmyk:[100,100,100,100]};u(t.interaction.result,(t,o,n)=>{const i=e[this.getColorRepresentation().toLowerCase()];if(i){const e=i[n],r=t+(e>=100?1e3*o:o);return r<=0?0:Number((r<e?r:e).toPrecision(3))}return t})}if(e.autoReposition&&!e.inline){let t=null;const n=this;o.push(r(window,["scroll","resize"],()=>{n.isOpen()&&(e.closeOnScroll&&n.hide(),null===t?(t=setTimeout(()=>t=null,100),requestAnimationFrame((function e(){n._rePositioningPicker(),null!==t&&requestAnimationFrame(e)}))):(clearTimeout(t),t=setTimeout(()=>t=null,100)))},{capture:!0}))}this._eventBindings=o}_rePositioningPicker(){const{options:t}=this;if(!t.inline){if(!this._nanopop.update({container:document.body.getBoundingClientRect(),position:t.position,forceApplyOnFailure:!this._recalc})){const t=this._root.app,e=t.getBoundingClientRect();t.style.top="".concat((window.innerHeight-e.height)/2,"px"),t.style.left="".concat((window.innerWidth-e.width)/2,"px")}}}_updateOutput(){const{_root:t,_color:e,options:o}=this;if(t.interaction.type()){const n="to".concat(t.interaction.type().getAttribute("data-type"));t.interaction.result.value="function"==typeof e[n]?e[n]().toString(o.outputPrecision):""}!this._initializingActive&&this._recalc&&this._emit("change",e)}_clearColor(t=!1){const{_root:e,options:o}=this;o.useAsButton||(e.button.style.color="rgba(0, 0, 0, 0.15)"),e.button.classList.add("clear"),o.showAlways||this.hide(),this._lastColor=null,this._initializingActive||t||(this._emit("save",null),this._emit("clear",this))}_parseLocalColor(t){const{values:e,type:o,a:n}=C(t),{lockOpacity:i}=this.options,r=void 0!==n&&1!==n;return e&&3===e.length&&(e[3]=void 0),{values:!e||i&&r?null:e,type:o}}_t(t){return this.options.i18n[t]||B.I18N_DEFAULTS[t]}_emit(t,...e){this._eventListener[t].forEach(t=>t(...e,this))}on(t,e){return this._eventListener[t].push(e),this}off(t,e){const o=this._eventListener[t]||[],n=o.indexOf(e);return~n&&o.splice(n,1),this}addSwatch(t){const{values:e}=this._parseLocalColor(t);if(e){const{_swatchColors:t,_root:o}=this,n=k(...e),i=a('<button type="button" style="color: '.concat(n.toRGBA().toString(0),'" aria-label="').concat(this._t("btn:swatch"),'"/>'));return o.swatches.appendChild(i),t.push({el:i,color:n}),this._eventBindings.push(r(i,"click",()=>{this.setHSVA(...n.toHSVA(),!0),this._emit("swatchselect",n),this._emit("change",n)})),!0}return!1}removeSwatch(t){const e=this._swatchColors[t];if(e){const{el:o}=e;return this._root.swatches.removeChild(o),this._swatchColors.splice(t,1),!0}return!1}applyColor(t=!1){const{preview:e,button:o}=this._root,n=this._color.toRGBA().toString(0);return e.lastColor.style.color=n,this.options.useAsButton||(o.style.color=n),o.classList.remove("clear"),this._lastColor=this._color.clone(),this._initializingActive||t||this._emit("save",this._color),this}destroy(){this._eventBindings.forEach(t=>s(...t)),Object.keys(this._components).forEach(t=>this._components[t].destroy())}destroyAndRemove(){this.destroy();const{root:t,app:e}=this._root;t.parentElement&&t.parentElement.removeChild(t),e.parentElement.removeChild(e),Object.keys(this).forEach(t=>this[t]=null)}hide(){return this._root.app.classList.remove("visible"),this._emit("hide",this),this}show(){return this.options.disabled||(this._root.app.classList.add("visible"),this._rePositioningPicker(),this._emit("show",this)),this}isOpen(){return this._root.app.classList.contains("visible")}setHSVA(t=360,e=0,o=0,n=1,i=!1){const r=this._recalc;if(this._recalc=!1,t<0||t>360||e<0||e>100||o<0||o>100||n<0||n>1)return!1;this._color=k(t,e,o,n);const{hue:s,opacity:a,palette:c}=this._components;return s.update(t/360),a.update(n),c.update(e/100,1-o/100),i||this.applyColor(),r&&this._updateOutput(),this._recalc=r,!0}setColor(t,e=!1){if(null===t)return this._clearColor(e),!0;const{values:o,type:n}=this._parseLocalColor(t);if(o){const t=n.toUpperCase(),{options:i}=this._root.interaction,r=i.find(e=>e.getAttribute("data-type")===t);if(r&&!r.hidden)for(const t of i)t.classList[t===r?"add":"remove"]("active");return!!this.setHSVA(...o,e)&&this.setColorRepresentation(t)}return!1}setColorRepresentation(t){return t=t.toUpperCase(),!!this._root.interaction.options.find(e=>e.getAttribute("data-type").startsWith(t)&&!e.click())}getColorRepresentation(){return this._representation}getColor(){return this._color}getSelectedColor(){return this._lastColor}getRoot(){return this._root}disable(){return this.hide(),this.options.disabled=!0,this._root.button.classList.add("disabled"),this}enable(){return this.options.disabled=!1,this._root.button.classList.remove("disabled"),this}}L(B,"utils",n),L(B,"version",h.a),L(B,"I18N_DEFAULTS",{"ui:dialog":"color picker dialog","btn:toggle":"toggle color picker dialog","btn:swatch":"color swatch","btn:last-color":"use previous color","btn:save":"Save","btn:cancel":"Cancel","btn:clear":"Clear","aria:btn:save":"save and close","aria:btn:cancel":"cancel and close","aria:btn:clear":"clear and close","aria:input":"color input field","aria:palette":"color selection area","aria:hue":"hue selection slider","aria:opacity":"selection slider"}),L(B,"DEFAULT_OPTIONS",{appClass:null,theme:"classic",useAsButton:!1,padding:8,disabled:!1,comparison:!0,closeOnScroll:!1,outputPrecision:0,lockOpacity:!1,autoReposition:!0,container:"body",components:{interaction:{}},i18n:{},swatches:null,inline:!1,sliders:null,default:"#42445a",defaultRepresentation:null,position:"bottom-middle",adjustableNumbers:!0,showAlways:!1,closeWithKey:"Escape"}),L(B,"create",t=>new B(t));e.default=B}]).default}));
//# sourceMappingURL=pickr.min.js.map

/***/ }),

/***/ "./node_modules/@simonwep/pickr/dist/themes/nano.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/@simonwep/pickr/dist/themes/nano.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../css-loader??ref--6-1!../../../../postcss-loader/src??ref--6-2!./nano.min.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@simonwep/pickr/dist/themes/nano.min.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./node_modules/@simonwep/pickr/dist/themes/nano.min.css":
/*!***********************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/postcss-loader/src??ref--6-2!./node_modules/@simonwep/pickr/dist/themes/nano.min.css ***!
  \***********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*! Pickr 1.7.2 MIT | https://github.com/Simonwep/pickr */\n\n.pickr{\n  position:relative;\n  overflow:visible;\n  transform:translateY(0)\n}\n\n.pickr *{\n  box-sizing:border-box;\n  outline:none;\n  border:none;\n  -webkit-appearance:none\n}\n\n.pickr .pcr-button{\n  position:relative;\n  height:2em;\n  width:2em;\n  padding:.5em;\n  cursor:pointer;\n  font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;\n  border-radius:.15em;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 50 50\" stroke=\"%2342445A\" stroke-width=\"5px\" stroke-linecap=\"round\"><path d=\"M45,45L5,5\"></path><path d=\"M45,5L5,45\"></path></svg>') no-repeat 50%;\n  background-size:0;\n  transition:all .3s\n}\n\n.pickr .pcr-button:before{\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:.5em;\n  z-index:-1;\n  z-index:auto\n}\n\n.pickr .pcr-button:after,.pickr .pcr-button:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  border-radius:.15em\n}\n\n.pickr .pcr-button:after{\n  transition:background .3s;\n  background:currentColor\n}\n\n.pickr .pcr-button.clear{\n  background-size:70%\n}\n\n.pickr .pcr-button.clear:before{\n  opacity:0\n}\n\n.pickr .pcr-button.clear:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor\n}\n\n.pickr .pcr-button.disabled{\n  cursor:not-allowed\n}\n\n.pcr-app *,.pickr *{\n  box-sizing:border-box;\n  outline:none;\n  border:none;\n  -webkit-appearance:none\n}\n\n.pcr-app button.pcr-active,.pcr-app button:focus,.pcr-app input.pcr-active,.pcr-app input:focus,.pickr button.pcr-active,.pickr button:focus,.pickr input.pcr-active,.pickr input:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px currentColor\n}\n\n.pcr-app .pcr-palette,.pcr-app .pcr-slider,.pickr .pcr-palette,.pickr .pcr-slider{\n  transition:box-shadow .3s\n}\n\n.pcr-app .pcr-palette:focus,.pcr-app .pcr-slider:focus,.pickr .pcr-palette:focus,.pickr .pcr-slider:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(0,0,0,.25)\n}\n\n.pcr-app{\n  position:fixed;\n  display:flex;\n  flex-direction:column;\n  z-index:10000;\n  border-radius:.1em;\n  background:#fff;\n  opacity:0;\n  visibility:hidden;\n  transition:opacity .3s,visibility 0s .3s;\n  font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;\n  box-shadow:0 .15em 1.5em 0 rgba(0,0,0,.1),0 0 1em 0 rgba(0,0,0,.03);\n  left:0;\n  top:0\n}\n\n.pcr-app.visible{\n  transition:opacity .3s;\n  visibility:visible;\n  opacity:1\n}\n\n.pcr-app .pcr-swatches{\n  display:flex;\n  flex-wrap:wrap;\n  margin-top:.75em\n}\n\n.pcr-app .pcr-swatches.pcr-last{\n  margin:0\n}\n\n@supports (display:grid){\n  .pcr-app .pcr-swatches{\n    display:grid;\n    align-items:center;\n    grid-template-columns:repeat(auto-fit,1.75em)\n  }\n}\n\n.pcr-app .pcr-swatches>button{\n  font-size:1em;\n  position:relative;\n  width:calc(1.75em - 5px);\n  height:calc(1.75em - 5px);\n  border-radius:.15em;\n  cursor:pointer;\n  margin:2.5px;\n  flex-shrink:0;\n  justify-self:center;\n  transition:all .15s;\n  overflow:hidden;\n  background:transparent;\n  z-index:1\n}\n\n.pcr-app .pcr-swatches>button:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:6px;\n  border-radius:.15em;\n  z-index:-1\n}\n\n.pcr-app .pcr-swatches>button:after{\n  content:\"\";\n  position:absolute;\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:currentColor;\n  border:1px solid rgba(0,0,0,.05);\n  border-radius:.15em;\n  box-sizing:border-box\n}\n\n.pcr-app .pcr-swatches>button:hover{\n  -webkit-filter:brightness(1.05);\n  filter:brightness(1.05)\n}\n\n.pcr-app .pcr-swatches>button:not(.pcr-active){\n  box-shadow:none\n}\n\n.pcr-app .pcr-interaction{\n  display:flex;\n  flex-wrap:wrap;\n  align-items:center;\n  margin:0 -.2em\n}\n\n.pcr-app .pcr-interaction>*{\n  margin:0 .2em\n}\n\n.pcr-app .pcr-interaction input{\n  letter-spacing:.07em;\n  font-size:.75em;\n  text-align:center;\n  cursor:pointer;\n  color:#75797e;\n  background:#f1f3f4;\n  border-radius:.15em;\n  transition:all .15s;\n  padding:.45em .5em;\n  margin-top:.75em\n}\n\n.pcr-app .pcr-interaction input:hover{\n  -webkit-filter:brightness(.975);\n  filter:brightness(.975)\n}\n\n.pcr-app .pcr-interaction input:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(66,133,244,.75)\n}\n\n.pcr-app .pcr-interaction .pcr-result{\n  color:#75797e;\n  text-align:left;\n  flex:1 1 8em;\n  min-width:8em;\n  transition:all .2s;\n  border-radius:.15em;\n  background:#f1f3f4;\n  cursor:text\n}\n\n.pcr-app .pcr-interaction .pcr-result::-moz-selection{\n  background:#4285f4;\n  color:#fff\n}\n\n.pcr-app .pcr-interaction .pcr-result::selection{\n  background:#4285f4;\n  color:#fff\n}\n\n.pcr-app .pcr-interaction .pcr-type.active{\n  color:#fff;\n  background:#4285f4\n}\n\n.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear,.pcr-app .pcr-interaction .pcr-save{\n  width:auto;\n  color:#fff\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:hover,.pcr-app .pcr-interaction .pcr-clear:hover,.pcr-app .pcr-interaction .pcr-save:hover{\n  -webkit-filter:brightness(.925);\n  filter:brightness(.925)\n}\n\n.pcr-app .pcr-interaction .pcr-save{\n  background:#4285f4\n}\n\n.pcr-app .pcr-interaction .pcr-cancel,.pcr-app .pcr-interaction .pcr-clear{\n  background:#f44250\n}\n\n.pcr-app .pcr-interaction .pcr-cancel:focus,.pcr-app .pcr-interaction .pcr-clear:focus{\n  box-shadow:0 0 0 1px hsla(0,0%,100%,.85),0 0 0 3px rgba(244,66,80,.75)\n}\n\n.pcr-app .pcr-selection .pcr-picker{\n  position:absolute;\n  height:18px;\n  width:18px;\n  border:2px solid #fff;\n  border-radius:100%;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none\n}\n\n.pcr-app .pcr-selection .pcr-color-chooser,.pcr-app .pcr-selection .pcr-color-opacity,.pcr-app .pcr-selection .pcr-color-palette{\n  position:relative;\n  -webkit-user-select:none;\n  -moz-user-select:none;\n  -ms-user-select:none;\n  user-select:none;\n  display:flex;\n  flex-direction:column;\n  cursor:grab;\n  cursor:-webkit-grab\n}\n\n.pcr-app .pcr-selection .pcr-color-chooser:active,.pcr-app .pcr-selection .pcr-color-opacity:active,.pcr-app .pcr-selection .pcr-color-palette:active{\n  cursor:grabbing;\n  cursor:-webkit-grabbing\n}\n\n.pcr-app[data-theme=nano]{\n  width:14.25em;\n  max-width:95vw\n}\n\n.pcr-app[data-theme=nano] .pcr-swatches{\n  margin-top:.6em;\n  padding:0 .6em\n}\n\n.pcr-app[data-theme=nano] .pcr-interaction{\n  padding:0 .6em .6em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection{\n  display:grid;\n  grid-gap:.6em;\n  grid-template-columns:1fr 4fr;\n  grid-template-rows:5fr auto auto;\n  align-items:center;\n  height:10.5em;\n  width:100%;\n  align-self:flex-start\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview{\n  grid-area:2/1/4/1;\n  height:100%;\n  width:100%;\n  display:flex;\n  flex-direction:row;\n  justify-content:center;\n  margin-left:.6em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-last-color{\n  display:none\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color{\n  position:relative;\n  background:currentColor;\n  width:2em;\n  height:2em;\n  border-radius:50em;\n  overflow:hidden\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-preview .pcr-current-color:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:.5em;\n  border-radius:.15em;\n  z-index:-1\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette{\n  grid-area:1/1/2/3;\n  width:100%;\n  height:100%;\n  z-index:1\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette{\n  border-radius:.15em;\n  width:100%;\n  height:100%\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-palette .pcr-palette:before{\n  position:absolute;\n  content:\"\";\n  top:0;\n  left:0;\n  width:100%;\n  height:100%;\n  background:url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:.5em;\n  border-radius:.15em;\n  z-index:-1\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser{\n  grid-area:2/2/2/2\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{\n  grid-area:3/2/3/2\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity{\n  height:.5em;\n  margin:0 .6em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-picker,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-picker{\n  top:50%;\n  transform:translateY(-50%)\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider,.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{\n  flex-grow:1;\n  border-radius:50em\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-chooser .pcr-slider{\n  background:linear-gradient(90deg,red,#ff0,#0f0,#0ff,#00f,#f0f,red)\n}\n\n.pcr-app[data-theme=nano] .pcr-selection .pcr-color-opacity .pcr-slider{\n  background:linear-gradient(90deg,transparent,#000),url('data:image/svg+xml;utf8, <svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 2 2\"><path fill=\"white\" d=\"M1,0H2V1H1V0ZM0,1H1V2H0V1Z\"/><path fill=\"gray\" d=\"M0,0H1V1H0V0ZM1,1H2V2H1V1Z\"/></svg>');\n  background-size:100%,.25em\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/mustache/mustache.js":
/*!*******************************************!*\
  !*** ./node_modules/mustache/mustache.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// This file has been generated from mustache.mjs
(function (global, factory) {
   true ? module.exports = factory() :
  undefined;
}(this, (function () { 'use strict';

  /*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */

  var objectToString = Object.prototype.toString;
  var isArray = Array.isArray || function isArrayPolyfill (object) {
    return objectToString.call(object) === '[object Array]';
  };

  function isFunction (object) {
    return typeof object === 'function';
  }

  /**
   * More correct typeof string handling array
   * which normally returns typeof 'object'
   */
  function typeStr (obj) {
    return isArray(obj) ? 'array' : typeof obj;
  }

  function escapeRegExp (string) {
    return string.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, '\\$&');
  }

  /**
   * Null safe way of checking whether or not an object,
   * including its prototype, has a given property
   */
  function hasProperty (obj, propName) {
    return obj != null && typeof obj === 'object' && (propName in obj);
  }

  /**
   * Safe way of detecting whether or not the given thing is a primitive and
   * whether it has the given property
   */
  function primitiveHasOwnProperty (primitive, propName) {
    return (
      primitive != null
      && typeof primitive !== 'object'
      && primitive.hasOwnProperty
      && primitive.hasOwnProperty(propName)
    );
  }

  // Workaround for https://issues.apache.org/jira/browse/COUCHDB-577
  // See https://github.com/janl/mustache.js/issues/189
  var regExpTest = RegExp.prototype.test;
  function testRegExp (re, string) {
    return regExpTest.call(re, string);
  }

  var nonSpaceRe = /\S/;
  function isWhitespace (string) {
    return !testRegExp(nonSpaceRe, string);
  }

  var entityMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
    '`': '&#x60;',
    '=': '&#x3D;'
  };

  function escapeHtml (string) {
    return String(string).replace(/[&<>"'`=\/]/g, function fromEntityMap (s) {
      return entityMap[s];
    });
  }

  var whiteRe = /\s*/;
  var spaceRe = /\s+/;
  var equalsRe = /\s*=/;
  var curlyRe = /\s*\}/;
  var tagRe = /#|\^|\/|>|\{|&|=|!/;

  /**
   * Breaks up the given `template` string into a tree of tokens. If the `tags`
   * argument is given here it must be an array with two string values: the
   * opening and closing tags used in the template (e.g. [ "<%", "%>" ]). Of
   * course, the default is to use mustaches (i.e. mustache.tags).
   *
   * A token is an array with at least 4 elements. The first element is the
   * mustache symbol that was used inside the tag, e.g. "#" or "&". If the tag
   * did not contain a symbol (i.e. {{myValue}}) this element is "name". For
   * all text that appears outside a symbol this element is "text".
   *
   * The second element of a token is its "value". For mustache tags this is
   * whatever else was inside the tag besides the opening symbol. For text tokens
   * this is the text itself.
   *
   * The third and fourth elements of the token are the start and end indices,
   * respectively, of the token in the original template.
   *
   * Tokens that are the root node of a subtree contain two more elements: 1) an
   * array of tokens in the subtree and 2) the index in the original template at
   * which the closing tag for that section begins.
   *
   * Tokens for partials also contain two more elements: 1) a string value of
   * indendation prior to that tag and 2) the index of that tag on that line -
   * eg a value of 2 indicates the partial is the third tag on this line.
   */
  function parseTemplate (template, tags) {
    if (!template)
      return [];
    var lineHasNonSpace = false;
    var sections = [];     // Stack to hold section tokens
    var tokens = [];       // Buffer to hold the tokens
    var spaces = [];       // Indices of whitespace tokens on the current line
    var hasTag = false;    // Is there a {{tag}} on the current line?
    var nonSpace = false;  // Is there a non-space char on the current line?
    var indentation = '';  // Tracks indentation for tags that use it
    var tagIndex = 0;      // Stores a count of number of tags encountered on a line

    // Strips all whitespace tokens array for the current line
    // if there was a {{#tag}} on it and otherwise only space.
    function stripSpace () {
      if (hasTag && !nonSpace) {
        while (spaces.length)
          delete tokens[spaces.pop()];
      } else {
        spaces = [];
      }

      hasTag = false;
      nonSpace = false;
    }

    var openingTagRe, closingTagRe, closingCurlyRe;
    function compileTags (tagsToCompile) {
      if (typeof tagsToCompile === 'string')
        tagsToCompile = tagsToCompile.split(spaceRe, 2);

      if (!isArray(tagsToCompile) || tagsToCompile.length !== 2)
        throw new Error('Invalid tags: ' + tagsToCompile);

      openingTagRe = new RegExp(escapeRegExp(tagsToCompile[0]) + '\\s*');
      closingTagRe = new RegExp('\\s*' + escapeRegExp(tagsToCompile[1]));
      closingCurlyRe = new RegExp('\\s*' + escapeRegExp('}' + tagsToCompile[1]));
    }

    compileTags(tags || mustache.tags);

    var scanner = new Scanner(template);

    var start, type, value, chr, token, openSection;
    while (!scanner.eos()) {
      start = scanner.pos;

      // Match any text between tags.
      value = scanner.scanUntil(openingTagRe);

      if (value) {
        for (var i = 0, valueLength = value.length; i < valueLength; ++i) {
          chr = value.charAt(i);

          if (isWhitespace(chr)) {
            spaces.push(tokens.length);
            indentation += chr;
          } else {
            nonSpace = true;
            lineHasNonSpace = true;
            indentation += ' ';
          }

          tokens.push([ 'text', chr, start, start + 1 ]);
          start += 1;

          // Check for whitespace on the current line.
          if (chr === '\n') {
            stripSpace();
            indentation = '';
            tagIndex = 0;
            lineHasNonSpace = false;
          }
        }
      }

      // Match the opening tag.
      if (!scanner.scan(openingTagRe))
        break;

      hasTag = true;

      // Get the tag type.
      type = scanner.scan(tagRe) || 'name';
      scanner.scan(whiteRe);

      // Get the tag value.
      if (type === '=') {
        value = scanner.scanUntil(equalsRe);
        scanner.scan(equalsRe);
        scanner.scanUntil(closingTagRe);
      } else if (type === '{') {
        value = scanner.scanUntil(closingCurlyRe);
        scanner.scan(curlyRe);
        scanner.scanUntil(closingTagRe);
        type = '&';
      } else {
        value = scanner.scanUntil(closingTagRe);
      }

      // Match the closing tag.
      if (!scanner.scan(closingTagRe))
        throw new Error('Unclosed tag at ' + scanner.pos);

      if (type == '>') {
        token = [ type, value, start, scanner.pos, indentation, tagIndex, lineHasNonSpace ];
      } else {
        token = [ type, value, start, scanner.pos ];
      }
      tagIndex++;
      tokens.push(token);

      if (type === '#' || type === '^') {
        sections.push(token);
      } else if (type === '/') {
        // Check section nesting.
        openSection = sections.pop();

        if (!openSection)
          throw new Error('Unopened section "' + value + '" at ' + start);

        if (openSection[1] !== value)
          throw new Error('Unclosed section "' + openSection[1] + '" at ' + start);
      } else if (type === 'name' || type === '{' || type === '&') {
        nonSpace = true;
      } else if (type === '=') {
        // Set the tags for the next time around.
        compileTags(value);
      }
    }

    stripSpace();

    // Make sure there are no open sections when we're done.
    openSection = sections.pop();

    if (openSection)
      throw new Error('Unclosed section "' + openSection[1] + '" at ' + scanner.pos);

    return nestTokens(squashTokens(tokens));
  }

  /**
   * Combines the values of consecutive text tokens in the given `tokens` array
   * to a single token.
   */
  function squashTokens (tokens) {
    var squashedTokens = [];

    var token, lastToken;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      if (token) {
        if (token[0] === 'text' && lastToken && lastToken[0] === 'text') {
          lastToken[1] += token[1];
          lastToken[3] = token[3];
        } else {
          squashedTokens.push(token);
          lastToken = token;
        }
      }
    }

    return squashedTokens;
  }

  /**
   * Forms the given array of `tokens` into a nested tree structure where
   * tokens that represent a section have two additional items: 1) an array of
   * all tokens that appear in that section and 2) the index in the original
   * template that represents the end of that section.
   */
  function nestTokens (tokens) {
    var nestedTokens = [];
    var collector = nestedTokens;
    var sections = [];

    var token, section;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      token = tokens[i];

      switch (token[0]) {
        case '#':
        case '^':
          collector.push(token);
          sections.push(token);
          collector = token[4] = [];
          break;
        case '/':
          section = sections.pop();
          section[5] = token[2];
          collector = sections.length > 0 ? sections[sections.length - 1][4] : nestedTokens;
          break;
        default:
          collector.push(token);
      }
    }

    return nestedTokens;
  }

  /**
   * A simple string scanner that is used by the template parser to find
   * tokens in template strings.
   */
  function Scanner (string) {
    this.string = string;
    this.tail = string;
    this.pos = 0;
  }

  /**
   * Returns `true` if the tail is empty (end of string).
   */
  Scanner.prototype.eos = function eos () {
    return this.tail === '';
  };

  /**
   * Tries to match the given regular expression at the current position.
   * Returns the matched text if it can match, the empty string otherwise.
   */
  Scanner.prototype.scan = function scan (re) {
    var match = this.tail.match(re);

    if (!match || match.index !== 0)
      return '';

    var string = match[0];

    this.tail = this.tail.substring(string.length);
    this.pos += string.length;

    return string;
  };

  /**
   * Skips all text until the given regular expression can be matched. Returns
   * the skipped string, which is the entire tail if no match can be made.
   */
  Scanner.prototype.scanUntil = function scanUntil (re) {
    var index = this.tail.search(re), match;

    switch (index) {
      case -1:
        match = this.tail;
        this.tail = '';
        break;
      case 0:
        match = '';
        break;
      default:
        match = this.tail.substring(0, index);
        this.tail = this.tail.substring(index);
    }

    this.pos += match.length;

    return match;
  };

  /**
   * Represents a rendering context by wrapping a view object and
   * maintaining a reference to the parent context.
   */
  function Context (view, parentContext) {
    this.view = view;
    this.cache = { '.': this.view };
    this.parent = parentContext;
  }

  /**
   * Creates a new context using the given view with this context
   * as the parent.
   */
  Context.prototype.push = function push (view) {
    return new Context(view, this);
  };

  /**
   * Returns the value of the given name in this context, traversing
   * up the context hierarchy if the value is absent in this context's view.
   */
  Context.prototype.lookup = function lookup (name) {
    var cache = this.cache;

    var value;
    if (cache.hasOwnProperty(name)) {
      value = cache[name];
    } else {
      var context = this, intermediateValue, names, index, lookupHit = false;

      while (context) {
        if (name.indexOf('.') > 0) {
          intermediateValue = context.view;
          names = name.split('.');
          index = 0;

          /**
           * Using the dot notion path in `name`, we descend through the
           * nested objects.
           *
           * To be certain that the lookup has been successful, we have to
           * check if the last object in the path actually has the property
           * we are looking for. We store the result in `lookupHit`.
           *
           * This is specially necessary for when the value has been set to
           * `undefined` and we want to avoid looking up parent contexts.
           *
           * In the case where dot notation is used, we consider the lookup
           * to be successful even if the last "object" in the path is
           * not actually an object but a primitive (e.g., a string, or an
           * integer), because it is sometimes useful to access a property
           * of an autoboxed primitive, such as the length of a string.
           **/
          while (intermediateValue != null && index < names.length) {
            if (index === names.length - 1)
              lookupHit = (
                hasProperty(intermediateValue, names[index])
                || primitiveHasOwnProperty(intermediateValue, names[index])
              );

            intermediateValue = intermediateValue[names[index++]];
          }
        } else {
          intermediateValue = context.view[name];

          /**
           * Only checking against `hasProperty`, which always returns `false` if
           * `context.view` is not an object. Deliberately omitting the check
           * against `primitiveHasOwnProperty` if dot notation is not used.
           *
           * Consider this example:
           * ```
           * Mustache.render("The length of a football field is {{#length}}{{length}}{{/length}}.", {length: "100 yards"})
           * ```
           *
           * If we were to check also against `primitiveHasOwnProperty`, as we do
           * in the dot notation case, then render call would return:
           *
           * "The length of a football field is 9."
           *
           * rather than the expected:
           *
           * "The length of a football field is 100 yards."
           **/
          lookupHit = hasProperty(context.view, name);
        }

        if (lookupHit) {
          value = intermediateValue;
          break;
        }

        context = context.parent;
      }

      cache[name] = value;
    }

    if (isFunction(value))
      value = value.call(this.view);

    return value;
  };

  /**
   * A Writer knows how to take a stream of tokens and render them to a
   * string, given a context. It also maintains a cache of templates to
   * avoid the need to parse the same template twice.
   */
  function Writer () {
    this.templateCache = {
      _cache: {},
      set: function set (key, value) {
        this._cache[key] = value;
      },
      get: function get (key) {
        return this._cache[key];
      },
      clear: function clear () {
        this._cache = {};
      }
    };
  }

  /**
   * Clears all cached templates in this writer.
   */
  Writer.prototype.clearCache = function clearCache () {
    if (typeof this.templateCache !== 'undefined') {
      this.templateCache.clear();
    }
  };

  /**
   * Parses and caches the given `template` according to the given `tags` or
   * `mustache.tags` if `tags` is omitted,  and returns the array of tokens
   * that is generated from the parse.
   */
  Writer.prototype.parse = function parse (template, tags) {
    var cache = this.templateCache;
    var cacheKey = template + ':' + (tags || mustache.tags).join(':');
    var isCacheEnabled = typeof cache !== 'undefined';
    var tokens = isCacheEnabled ? cache.get(cacheKey) : undefined;

    if (tokens == undefined) {
      tokens = parseTemplate(template, tags);
      isCacheEnabled && cache.set(cacheKey, tokens);
    }
    return tokens;
  };

  /**
   * High-level method that is used to render the given `template` with
   * the given `view`.
   *
   * The optional `partials` argument may be an object that contains the
   * names and templates of partials that are used in the template. It may
   * also be a function that is used to load partial templates on the fly
   * that takes a single argument: the name of the partial.
   *
   * If the optional `tags` argument is given here it must be an array with two
   * string values: the opening and closing tags used in the template (e.g.
   * [ "<%", "%>" ]). The default is to mustache.tags.
   */
  Writer.prototype.render = function render (template, view, partials, tags) {
    var tokens = this.parse(template, tags);
    var context = (view instanceof Context) ? view : new Context(view, undefined);
    return this.renderTokens(tokens, context, partials, template, tags);
  };

  /**
   * Low-level method that renders the given array of `tokens` using
   * the given `context` and `partials`.
   *
   * Note: The `originalTemplate` is only ever used to extract the portion
   * of the original template that was contained in a higher-order section.
   * If the template doesn't use higher-order sections, this argument may
   * be omitted.
   */
  Writer.prototype.renderTokens = function renderTokens (tokens, context, partials, originalTemplate, tags) {
    var buffer = '';

    var token, symbol, value;
    for (var i = 0, numTokens = tokens.length; i < numTokens; ++i) {
      value = undefined;
      token = tokens[i];
      symbol = token[0];

      if (symbol === '#') value = this.renderSection(token, context, partials, originalTemplate);
      else if (symbol === '^') value = this.renderInverted(token, context, partials, originalTemplate);
      else if (symbol === '>') value = this.renderPartial(token, context, partials, tags);
      else if (symbol === '&') value = this.unescapedValue(token, context);
      else if (symbol === 'name') value = this.escapedValue(token, context);
      else if (symbol === 'text') value = this.rawValue(token);

      if (value !== undefined)
        buffer += value;
    }

    return buffer;
  };

  Writer.prototype.renderSection = function renderSection (token, context, partials, originalTemplate) {
    var self = this;
    var buffer = '';
    var value = context.lookup(token[1]);

    // This function is used to render an arbitrary template
    // in the current context by higher-order sections.
    function subRender (template) {
      return self.render(template, context, partials);
    }

    if (!value) return;

    if (isArray(value)) {
      for (var j = 0, valueLength = value.length; j < valueLength; ++j) {
        buffer += this.renderTokens(token[4], context.push(value[j]), partials, originalTemplate);
      }
    } else if (typeof value === 'object' || typeof value === 'string' || typeof value === 'number') {
      buffer += this.renderTokens(token[4], context.push(value), partials, originalTemplate);
    } else if (isFunction(value)) {
      if (typeof originalTemplate !== 'string')
        throw new Error('Cannot use higher-order sections without the original template');

      // Extract the portion of the original template that the section contains.
      value = value.call(context.view, originalTemplate.slice(token[3], token[5]), subRender);

      if (value != null)
        buffer += value;
    } else {
      buffer += this.renderTokens(token[4], context, partials, originalTemplate);
    }
    return buffer;
  };

  Writer.prototype.renderInverted = function renderInverted (token, context, partials, originalTemplate) {
    var value = context.lookup(token[1]);

    // Use JavaScript's definition of falsy. Include empty arrays.
    // See https://github.com/janl/mustache.js/issues/186
    if (!value || (isArray(value) && value.length === 0))
      return this.renderTokens(token[4], context, partials, originalTemplate);
  };

  Writer.prototype.indentPartial = function indentPartial (partial, indentation, lineHasNonSpace) {
    var filteredIndentation = indentation.replace(/[^ \t]/g, '');
    var partialByNl = partial.split('\n');
    for (var i = 0; i < partialByNl.length; i++) {
      if (partialByNl[i].length && (i > 0 || !lineHasNonSpace)) {
        partialByNl[i] = filteredIndentation + partialByNl[i];
      }
    }
    return partialByNl.join('\n');
  };

  Writer.prototype.renderPartial = function renderPartial (token, context, partials, tags) {
    if (!partials) return;

    var value = isFunction(partials) ? partials(token[1]) : partials[token[1]];
    if (value != null) {
      var lineHasNonSpace = token[6];
      var tagIndex = token[5];
      var indentation = token[4];
      var indentedValue = value;
      if (tagIndex == 0 && indentation) {
        indentedValue = this.indentPartial(value, indentation, lineHasNonSpace);
      }
      return this.renderTokens(this.parse(indentedValue, tags), context, partials, indentedValue, tags);
    }
  };

  Writer.prototype.unescapedValue = function unescapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return value;
  };

  Writer.prototype.escapedValue = function escapedValue (token, context) {
    var value = context.lookup(token[1]);
    if (value != null)
      return mustache.escape(value);
  };

  Writer.prototype.rawValue = function rawValue (token) {
    return token[1];
  };

  var mustache = {
    name: 'mustache.js',
    version: '4.0.1',
    tags: [ '{{', '}}' ],
    clearCache: undefined,
    escape: undefined,
    parse: undefined,
    render: undefined,
    Scanner: undefined,
    Context: undefined,
    Writer: undefined,
    /**
     * Allows a user to override the default caching strategy, by providing an
     * object with set, get and clear methods. This can also be used to disable
     * the cache by setting it to the literal `undefined`.
     */
    set templateCache (cache) {
      defaultWriter.templateCache = cache;
    },
    /**
     * Gets the default or overridden caching object from the default writer.
     */
    get templateCache () {
      return defaultWriter.templateCache;
    }
  };

  // All high-level mustache.* functions use this writer.
  var defaultWriter = new Writer();

  /**
   * Clears all cached templates in the default writer.
   */
  mustache.clearCache = function clearCache () {
    return defaultWriter.clearCache();
  };

  /**
   * Parses and caches the given template in the default writer and returns the
   * array of tokens it contains. Doing this ahead of time avoids the need to
   * parse templates on the fly as they are rendered.
   */
  mustache.parse = function parse (template, tags) {
    return defaultWriter.parse(template, tags);
  };

  /**
   * Renders the `template` with the given `view` and `partials` using the
   * default writer. If the optional `tags` argument is given here it must be an
   * array with two string values: the opening and closing tags used in the
   * template (e.g. [ "<%", "%>" ]). The default is to mustache.tags.
   */
  mustache.render = function render (template, view, partials, tags) {
    if (typeof template !== 'string') {
      throw new TypeError('Invalid template! Template should be a "string" ' +
                          'but "' + typeStr(template) + '" was given as the first ' +
                          'argument for mustache#render(template, view, partials)');
    }

    return defaultWriter.render(template, view, partials, tags);
  };

  // Export the escaping function so that the user may override it.
  // See https://github.com/janl/mustache.js/issues/244
  mustache.escape = escapeHtml;

  // Export these mainly for testing, but also for advanced usage.
  mustache.Scanner = Scanner;
  mustache.Context = Context;
  mustache.Writer = Writer;

  return mustache;

})));


/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/code.stub.html":
/*!****************************!*\
  !*** ./src/code.stub.html ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"text-gray-500\">// tailwind.config.js</span><br>\nmodule.exports = {<br>\n&nbsp;&nbsp;theme: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;extend: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;colors: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{name}}: {<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'50': &nbsp;'{{50}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'100': '{{100}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'200': '{{200}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'300': '{{300}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'400': '{{400}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'500': '{{500}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'600': '{{600}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'700': '{{700}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'800': '{{800}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'900': '{{900}}',<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;&nbsp;&nbsp;}<br>\n&nbsp;&nbsp;}<br>\n}";

/***/ }),

/***/ "./src/main.css":
/*!**********************!*\
  !*** ./src/main.css ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @simonwep/pickr */ "./node_modules/@simonwep/pickr/dist/pickr.min.js");
/* harmony import */ var _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @simonwep/pickr/dist/themes/nano.min.css */ "./node_modules/@simonwep/pickr/dist/themes/nano.min.css");
/* harmony import */ var _simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_simonwep_pickr_dist_themes_nano_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./model */ "./src/model.js");
/* harmony import */ var _model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nameModel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nameModel */ "./src/nameModel.js");
/* harmony import */ var _nameModel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_nameModel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _nextModel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nextModel */ "./src/nextModel.js");
/* harmony import */ var _nextModel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nextModel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mustache */ "./node_modules/mustache/mustache.js");
/* harmony import */ var mustache__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mustache__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _code_stub_html__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./code.stub.html */ "./src/code.stub.html");
/* harmony import */ var _code_stub_html__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_code_stub_html__WEBPACK_IMPORTED_MODULE_6__);








function rgbToHex(r, g, b) {
  r = parseInt(r);
  g = parseInt(g);
  b = parseInt(b);
  return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

var pickrButton = _simonwep_pickr__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  el: '.pickr',
  theme: 'nano',
  // or 'monolith', or 'nano'
  "default": '#1D19A9',
  comparison: false,
  showAlways: true,
  container: '.pickr-ctrl',
  appClass: 'picker',
  useAsButton: true,
  components: {
    // Main components
    preview: true,
    opacity: false,
    hue: true,
    // Input / output Options
    interaction: {
      input: true
    }
  }
});
var output = _model__WEBPACK_IMPORTED_MODULE_2___default()('#1D19A9');
draw(output);
var next = _nextModel__WEBPACK_IMPORTED_MODULE_4___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255));
var output1 = _model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r1 * 255, next.g1 * 255, next.b1 * 255));
var output2 = _model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r2 * 255, next.g2 * 255, next.b2 * 255));
var output3 = _model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r3 * 255, next.g3 * 255, next.b3 * 255));
paint(output1, 1);
paint(output2, 2);
paint(output3, 3);
name(output, '');
name(output1, 1);
name(output2, 2);
name(output3, 3);
pickrButton.on('change', function (instance) {
  output = _model__WEBPACK_IMPORTED_MODULE_2___default()(instance.toHEXA().toString());
  draw(output, document.querySelector('.name').value);
  next = _nextModel__WEBPACK_IMPORTED_MODULE_4___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255));
  output1 = _model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r1 * 255, next.g1 * 255, next.b1 * 255));
  output2 = _model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r2 * 255, next.g2 * 255, next.b2 * 255));
  output3 = _model__WEBPACK_IMPORTED_MODULE_2___default()(rgbToHex(next.r3 * 255, next.g3 * 255, next.b3 * 255));
  paint(output1, 1);
  paint(output2, 2);
  paint(output3, 3);
});
pickrButton.on('changestop', function (instance) {
  name(output, '');
  name(output1, 1);
  name(output2, 2);
  name(output3, 3);
});
document.querySelector('.name').addEventListener('input', function (e) {
  var name = document.querySelector('.name').value;
  if (e.target.value !== '') name = e.target.value;
  draw(output, name);
});

function paint(output) {
  var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  document.getElementById('output' + i + '0.5').style.backgroundColor = 'rgb(' + output['r0.5'] * 255 + ',' + output['g0.5'] * 255 + ',' + output['b0.5'] * 255 + ')';
  document.getElementById('output' + i + '1').style.backgroundColor = 'rgb(' + output.r1 * 255 + ',' + output.g1 * 255 + ',' + output.b1 * 255 + ')';
  document.getElementById('output' + i + '2').style.backgroundColor = 'rgb(' + output.r2 * 255 + ',' + output.g2 * 255 + ',' + output.b2 * 255 + ')';
  document.getElementById('output' + i + '3').style.backgroundColor = 'rgb(' + output.r3 * 255 + ',' + output.g3 * 255 + ',' + output.b3 * 255 + ')';
  document.getElementById('output' + i + '4').style.backgroundColor = 'rgb(' + output.r4 * 255 + ',' + output.g4 * 255 + ',' + output.b4 * 255 + ')';
  document.getElementById('output' + i + '5').style.backgroundColor = 'rgb(' + output.r5 * 255 + ',' + output.g5 * 255 + ',' + output.b5 * 255 + ')';
  document.getElementById('output' + i + '6').style.backgroundColor = 'rgb(' + output.r6 * 255 + ',' + output.g6 * 255 + ',' + output.b6 * 255 + ')';
  document.getElementById('output' + i + '7').style.backgroundColor = 'rgb(' + output.r7 * 255 + ',' + output.g7 * 255 + ',' + output.b7 * 255 + ')';
  document.getElementById('output' + i + '8').style.backgroundColor = 'rgb(' + output.r8 * 255 + ',' + output.g8 * 255 + ',' + output.b8 * 255 + ')';
  document.getElementById('output' + i + '9').style.backgroundColor = 'rgb(' + output.r9 * 255 + ',' + output.g9 * 255 + ',' + output.b9 * 255 + ')';
  document.getElementById('text' + i + '0.5').style.color = 'rgb(' + output['r0.5'] * 255 + ',' + output['g0.5'] * 255 + ',' + output['b0.5'] * 255 + ')';
  document.getElementById('text' + i + '1').style.color = 'rgb(' + output.r1 * 255 + ',' + output.g1 * 255 + ',' + output.b1 * 255 + ')';
  document.getElementById('text' + i + '2').style.color = 'rgb(' + output.r2 * 255 + ',' + output.g2 * 255 + ',' + output.b2 * 255 + ')';
  document.getElementById('text' + i + '3').style.color = 'rgb(' + output.r3 * 255 + ',' + output.g3 * 255 + ',' + output.b3 * 255 + ')';
  document.getElementById('text' + i + '4').style.color = 'rgb(' + output.r4 * 255 + ',' + output.g4 * 255 + ',' + output.b4 * 255 + ')';
  document.getElementById('text' + i + '5').style.color = 'rgb(' + output.r5 * 255 + ',' + output.g5 * 255 + ',' + output.b5 * 255 + ')';
  document.getElementById('text' + i + '6').style.color = 'rgb(' + output.r6 * 255 + ',' + output.g6 * 255 + ',' + output.b6 * 255 + ')';
  document.getElementById('text' + i + '7').style.color = 'rgb(' + output.r7 * 255 + ',' + output.g7 * 255 + ',' + output.b7 * 255 + ')';
  document.getElementById('text' + i + '8').style.color = 'rgb(' + output.r8 * 255 + ',' + output.g8 * 255 + ',' + output.b8 * 255 + ')';
  document.getElementById('text' + i + '9').style.color = 'rgb(' + output.r9 * 255 + ',' + output.g9 * 255 + ',' + output.b9 * 255 + ')';
  document.getElementById('hex' + i + '0.5').innerHTML = rgbToHex(output['r0.5'] * 255, output['g0.5'] * 255, output['b0.5'] * 255);
  document.getElementById('hex' + i + '1').innerHTML = rgbToHex(output.r1 * 255, output.g1 * 255, output.b1 * 255);
  document.getElementById('hex' + i + '2').innerHTML = rgbToHex(output.r2 * 255, output.g2 * 255, output.b2 * 255);
  document.getElementById('hex' + i + '3').innerHTML = rgbToHex(output.r3 * 255, output.g3 * 255, output.b3 * 255);
  document.getElementById('hex' + i + '4').innerHTML = rgbToHex(output.r4 * 255, output.g4 * 255, output.b4 * 255);
  document.getElementById('hex' + i + '5').innerHTML = rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255);
  document.getElementById('hex' + i + '6').innerHTML = rgbToHex(output.r6 * 255, output.g6 * 255, output.b6 * 255);
  document.getElementById('hex' + i + '7').innerHTML = rgbToHex(output.r7 * 255, output.g7 * 255, output.b7 * 255);
  document.getElementById('hex' + i + '8').innerHTML = rgbToHex(output.r8 * 255, output.g8 * 255, output.b8 * 255);
  document.getElementById('hex' + i + '9').innerHTML = rgbToHex(output.r9 * 255, output.g9 * 255, output.b9 * 255);
}

function name(output, i) {
  document.getElementById('name' + i).innerHTML = _nameModel__WEBPACK_IMPORTED_MODULE_3___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255))[0][0];
}

function draw(output) {
  var name = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'valencia';
  paint(output);

  var view = function view(output, name) {
    return {
      'name': name,
      '50': rgbToHex(output['r0.5'] * 255, output['g0.5'] * 255, output['b0.5'] * 255),
      '100': rgbToHex(output.r1 * 255, output.g1 * 255, output.b1 * 255),
      '200': rgbToHex(output.r2 * 255, output.g2 * 255, output.b2 * 255),
      '300': rgbToHex(output.r3 * 255, output.g3 * 255, output.b3 * 255),
      '400': rgbToHex(output.r4 * 255, output.g4 * 255, output.b4 * 255),
      '500': rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255),
      '600': rgbToHex(output.r6 * 255, output.g6 * 255, output.b6 * 255),
      '700': rgbToHex(output.r7 * 255, output.g7 * 255, output.b7 * 255),
      '800': rgbToHex(output.r8 * 255, output.g8 * 255, output.b8 * 255),
      '900': rgbToHex(output.r9 * 255, output.g9 * 255, output.b9 * 255)
    };
  }; // let colors = [];
  // //colors.push(nameModel(rgbToHex(output.r3*255, output.g3*255, output.b3*255))[0])
  // //colors.push(nameModel(rgbToHex(output.r4*255, output.g4*255, output.b4*255))[0])
  // colors.push(nameModel(rgbToHex(output.r5*255, output.g5*255, output.b5*255))[0])
  // //colors.push(nameModel(rgbToHex(output.r6*255, output.g6*255, output.b6*255))[0])
  //
  // let sortable = [];
  // for (let color in colors) {
  //   sortable.push([colors[color]]);
  // }
  //
  // sortable.sort(function(a, b) {
  //   return b[1] - a[1];
  // });


  if (document.querySelector('.name').value === '') name = _nameModel__WEBPACK_IMPORTED_MODULE_3___default()(rgbToHex(output.r5 * 255, output.g5 * 255, output.b5 * 255))[0][0];
  document.querySelector('.code').innerHTML = mustache__WEBPACK_IMPORTED_MODULE_5___default.a.render(_code_stub_html__WEBPACK_IMPORTED_MODULE_6___default.a, view(output, name));
}

/***/ }),

/***/ "./src/model.js":
/*!**********************!*\
  !*** ./src/model.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

function model(input) {
  input = hexToRgb(input);
  return {
    'r0.5': 1 / (1 + 1 / Math.exp(1.1140536069869995 + 0.7449509501457214 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.9815424680709839 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.031132698059082 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.49755042791366577 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.828439474105835 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.3831459581851959 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g0.5': 1 / (1 + 1 / Math.exp(1.183545708656311 + 0.956328809261322 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.7309649586677551 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7622394561767578 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.7794589996337891 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.6631051898002625 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.7126436829566956 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b0.5': 1 / (1 + 1 / Math.exp(1.2447574138641357 + 0.7598280310630798 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.6792125701904297 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7007723450660706 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.9159786701202393 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.4532022774219513 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9985523223876953 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r1': 1 / (1 + 1 / Math.exp(1.089853286743164 + 0.5143858790397644 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.841343879699707 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.0682543516159058 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.41325873136520386 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.0387349128723145 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.12426169961690903 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g1': 1 / (1 + 1 / Math.exp(1.0439181327819824 + 0.7357439994812012 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.8336270451545715 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7926211953163147 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.6183294057846069 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.3501281142234802 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9159969091415405 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b1': 1 / (1 + 1 / Math.exp(1.0688536167144775 + 0.752219021320343 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.396038293838501 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.05139622837305069 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 1.3977594375610352 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.054872382432222366 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9872631430625916 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r2': 1 / (1 + 1 / Math.exp(0.7937076091766357 + 0.29099127650260925 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.0067623853683472 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.9423177242279053 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.06993284821510315 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.544643759727478 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.83702552318573 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g2': 1 / (1 + 1 / Math.exp(1.0970275402069092 + 0.6923697590827942 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.0796828344464302 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.4814494550228119 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.15850374102592468 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.058728110045194626 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.8487239480018616 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b2': 1 / (1 + 1 / Math.exp(0.6564344167709351 + 0.11160755902528763 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.4450506865978241 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.19433872401714325 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 2.112790822982788 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.5147234201431274 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.9723668098449707 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r3': 1 / (1 + 1 / Math.exp(0.32063180208206177 + 0.005433264188468456 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.0324783325195312 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.0878543853759766 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.09277225285768509 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.7785472869873047 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 1.2530149221420288 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g3': 1 / (1 + 1 / Math.exp(0.7538976073265076 + 0.6352337002754211 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.07885561883449554 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.024698415771126747 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.6532332897186279 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.1319802850484848 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 1.1427053213119507 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b3': 1 / (1 + 1 / Math.exp(-0.017636630684137344 - 0.09258569031953812 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.6876927614212036 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.646864116191864 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.0891273021698 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.6090339422225952 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.5678266286849976 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r4': 1 / (1 + 1 / Math.exp(-0.0006336562219075859 - 0.5309959650039673 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.1226203441619873 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.3316447734832764 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.3525812029838562 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.9797881841659546 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.174813985824585 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g4': 1 / (1 + 1 / Math.exp(0.5350996851921082 + 0.4798542857170105 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.09602077305316925 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.052545446902513504 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.9980875253677368 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.23203811049461365 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 1.1104652881622314 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b4': 1 / (1 + 1 / Math.exp(-0.28306764364242554 - 0.4593780040740967 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.48548609018325806 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.8296477198600769 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.490048408508301 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.8638916015625 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.4032459855079651 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r5': 1 / (1 + 1 / Math.exp(-0.47626543045043945 - 0.6956549882888794 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.251510739326477 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.3579331636428833 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.2939260005950928 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 2.281784772872925 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.52661395072937 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g5': 1 / (1 + 1 / Math.exp(0.4980373680591583 + 0.41351598501205444 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.3521035611629486 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.178624227643013 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 1.1563712358474731 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.38387489318847656 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.7415151000022888 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b5': 1 / (1 + 1 / Math.exp(-0.6834791302680969 - 0.5601078271865845 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.3092515170574188 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 1.068272590637207 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.819490432739258 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.889352560043335 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.357143759727478 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r6': 1 / (1 + 1 / Math.exp(-0.36076775193214417 - 1.0048390626907349 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 1.0154188871383667 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 1.0740903615951538 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.22135888040065765 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.7783122062683105 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.395381212234497 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g6': 1 / (1 + 1 / Math.exp(0.08052278310060501 + 0.28902074694633484 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.4757483899593353 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.017364878207445145 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 1.2476580142974854 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.6106814742088318 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.850745677947998 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b6': 1 / (1 + 1 / Math.exp(-0.5722387433052063 - 0.9118046164512634 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.162095308303833 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 1.2545826435089111 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.863856554031372 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 1.3810769319534302 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.228440523147583 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r7': 1 / (1 + 1 / Math.exp(-0.35521697998046875 - 0.9642183184623718 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.5757023692131042 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.7030032873153687 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.3230937123298645 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.4392999410629272 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 2.190124750137329 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g7': 1 / (1 + 1 / Math.exp(-0.038189806044101715 + 0.11425190418958664 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.3569299876689911 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.2939336597919464 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 1.2788423299789429 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.5386338829994202 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.699556827545166 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b7': 1 / (1 + 1 / Math.exp(-0.743007481098175 - 0.8432696461677551 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.12283580005168915 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 1.1242924928665161 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 3.4472105503082275 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 1.2022254467010498 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.05426440387964249 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r8': 1 / (1 + 1 / Math.exp(-0.4452064335346222 - 1.0320993661880493 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.45199719071388245 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.4916563332080841 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 0.3551488220691681 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 1.0244085788726807 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 1.9767245054244995 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g8': 1 / (1 + 1 / Math.exp(-0.2677565813064575 + 0.1859578639268875 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.4758763611316681 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.2537042498588562 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.9567639827728271 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.6467904448509216 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.25439390540122986 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b8': 1 / (1 + 1 / Math.exp(-0.6812801361083984 - 0.8814932703971863 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.01014744397252798 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.8553073406219482 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 2.531280040740967 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.8392447829246521 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.2603747844696045 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'r9': 1 / (1 + 1 / Math.exp(-0.5591014623641968 - 0.8889714479446411 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) + 0.34187203645706177 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) + 0.28075671195983887 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.06667296588420868 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) + 0.7169772386550903 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 1.5406073331832886 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'g9': 1 / (1 + 1 / Math.exp(-0.42714542150497437 - 0.06837131083011627 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.4159296452999115 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.28348061442375183 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) - 0.8182275891304016 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.64617520570755 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) + 0.15667767822742462 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0))))),
    'b9': 1 / (1 + 1 / Math.exp(-0.750186026096344 - 0.7589073181152344 * 1 / (1 + 1 / Math.exp(0.9516556859016418 - 1.1959269046783447 * (input['r'] || 0) + 1.2912551164627075 * (input['g'] || 0) - 1.4462432861328125 * (input['b'] || 0))) - 0.1323225498199463 * 1 / (1 + 1 / Math.exp(0.015736836940050125 + 1.47908353805542 * (input['r'] || 0) - 2.3525967597961426 * (input['g'] || 0) + 0.6409192085266113 * (input['b'] || 0))) - 0.7676293253898621 * 1 / (1 + 1 / Math.exp(0.05819517374038696 + 3.3487489223480225 * (input['r'] || 0) - 1.0732393264770508 * (input['g'] || 0) - 2.4960131645202637 * (input['b'] || 0))) + 1.8757373094558716 * 1 / (1 + 1 / Math.exp(-0.47941961884498596 - 0.09682390838861465 * (input['r'] || 0) - 5.792085647583008 * (input['g'] || 0) + 6.3292131423950195 * (input['b'] || 0))) - 0.7336497902870178 * 1 / (1 + 1 / Math.exp(0.06856338679790497 + 5.11339807510376 * (input['r'] || 0) - 2.5506465435028076 * (input['g'] || 0) - 2.781050205230713 * (input['b'] || 0))) - 0.28146880865097046 * 1 / (1 + 1 / Math.exp(0.26771530508995056 - 5.257917881011963 * (input['r'] || 0) + 3.5945498943328857 * (input['g'] || 0) + 1.2943332195281982 * (input['b'] || 0)))))
  };
}

var hexToRgb = function hexToRgb(hex) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return '#' + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
  var keys = ['r' + id, 'g' + id, 'b' + id];
  var output = {};
  keys.forEach(function (key, num) {
    output[key] = arr[num] / 255;
  });
  return output;
};

module.exports = model;

/***/ }),

/***/ "./src/nameModel.js":
/*!**************************!*\
  !*** ./src/nameModel.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {


/***/ }),

/***/ "./src/nextModel.js":
/*!**************************!*\
  !*** ./src/nextModel.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

function model(input) {
  input = hexToRgb(input);
  return {
    'r1': 1 / (1 + 1 / Math.exp(0.15233664214611053 - 0.1169203445315361 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.4491831958293915 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.17871199548244476 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.5017263889312744 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.3137688934803009 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.22910214960575104 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.45813462138175964 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.0025344176683574915 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.31694892048835754 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.19789576530456543 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.9329801797866821 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.5836333632469177 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) - 0.08370832353830338 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.3336738049983978 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.5847275257110596 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.8810482025146484 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.38177311420440674 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0681829452514648 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.15447074174880981 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.10129092633724213 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.334290087223053 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.5120207667350769 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.6094074249267578 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.2041594386100769 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.9081140160560608 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.15307599306106567 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.1402945518493652 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.11399005353450775 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.8605090975761414 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.45096704363822937 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g1': 1 / (1 + 1 / Math.exp(0.11453516781330109 + 0.7903721332550049 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6043357253074646 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.023053834214806557 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.18781648576259613 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.41664138436317444 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.10526958853006363 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.5089349746704102 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.3372497260570526 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.057680122554302216 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.7627107501029968 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.055534642189741135 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.1793821007013321 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.8132348656654358 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5935928821563721 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.021770941093564034 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.40496569871902466 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5290367007255554 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.6364086270332336 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.425934761762619 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6420176029205322 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.0007359981536865 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.9184040427207947 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.08539523184299469 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.5441260933876038 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.09581747651100159 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.7395710945129395 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.28637948632240295 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.13259267807006836 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.11285978555679321 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.20601758360862732 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b1': 1 / (1 + 1 / Math.exp(0.18872229754924774 + 0.5265727639198303 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 1.0824730396270752 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.20250818133354187 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.5010849237442017 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4922613501548767 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.042416758835315704 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.08665039390325546 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.049030691385269165 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.425604909658432 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.49604466557502747 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.38194140791893005 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.6316872239112854 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6666077971458435 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5665450692176819 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.9686123728752136 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.13053272664546967 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.8740785121917725 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.604282557964325 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.14672361314296722 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.9944897294044495 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.1594172716140747 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 1.01069176197052 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 1.0367640256881714 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.4743850529193878 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.5631533265113831 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.9071052670478821 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.035389333963394165 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.0451110303401947 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.2384028285741806 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.9237000942230225 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r2': 1 / (1 + 1 / Math.exp(0.15060962736606598 - 0.023643774911761284 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.1961997151374817 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.22891618311405182 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.38198122382164 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.25274205207824707 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.023620544001460075 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.2700212001800537 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.36813852190971375 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.3794248402118683 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.39608269929885864 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.9536370635032654 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.34956690669059753 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.1052965298295021 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.08347729593515396 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.2013102024793625 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.6048334240913391 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.42679256200790405 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.2210663557052612 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) + 0.10960868000984192 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.07798691838979721 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.4228358864784241 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7397986054420471 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.31628960371017456 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.0765116885304451 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.496286392211914 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.32087644934654236 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.1400648355484009 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.10336974263191223 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.6917933225631714 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.14194311201572418 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g2': 1 / (1 + 1 / Math.exp(-0.05703232064843178 + 0.46644559502601624 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.3108970820903778 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.0944671779870987 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.38905927538871765 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.7221540808677673 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.19592654705047607 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.46714070439338684 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.3553503155708313 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.17111192643642426 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.57581627368927 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.02792917564511299 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.3854665756225586 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6662809252738953 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.9041680097579956 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.2709085941314697 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.49894142150878906 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.556430459022522 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.8776109218597412 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.37895911931991577 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.4272528290748596 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.8196532130241394 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7326957583427429 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.09028341621160507 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.7431282997131348 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.18032659590244293 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.47942638397216797 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.1187385693192482 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.17351043224334717 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.0024406490847468376 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.09230409562587738 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b2': 1 / (1 + 1 / Math.exp(0.20484665036201477 + 0.7937576770782471 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.9375998973846436 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.2355770617723465 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.4109202027320862 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5782608389854431 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.2998976707458496 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.25491198897361755 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.10514111071825027 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.1590646654367447 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.7091008424758911 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.23151181638240814 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.465590238571167 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.8594288229942322 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.7163259983062744 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.755229651927948 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.19771531224250793 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 1.0719414949417114 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.4785304367542267 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.3704572319984436 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.8829540014266968 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.48997822403907776 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7813007831573486 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 1.0875639915466309 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.10478637367486954 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.2872263491153717 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.2015241384506226 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.28506314754486084 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.010735721327364445 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.670788586139679 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.9018207788467407 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r3': 1 / (1 + 1 / Math.exp(0.19329263269901276 - 0.09480707347393036 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.48430007696151733 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.17500725388526917 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.1702723503112793 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4496638774871826 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.15939630568027496 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.19014288485050201 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.3105659782886505 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.44042912125587463 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3789248466491699 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.8900160193443298 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.07485596835613251 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.39992332458496094 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.11155080795288086 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.82552570104599 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.4267711341381073 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6899314522743225 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.080127477645874 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.18410025537014008 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6783258318901062 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.4928041100502014 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7908933758735657 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.01686561480164528 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.5394076108932495 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.139298439025879 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.008777166716754436 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.6111150979995728 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.08797768503427505 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.27387940883636475 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.3428662419319153 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g3': 1 / (1 + 1 / Math.exp(-0.16063283383846283 + 0.5322238206863403 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.1750292032957077 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.02172885835170746 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.34415197372436523 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5736355185508728 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.009935087524354458 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.4354822337627411 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.038626231253147125 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.1307188868522644 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.47031065821647644 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.282489150762558 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.20085497200489044 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.4527810513973236 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.6533145308494568 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.4771200716495514 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.4666554629802704 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5370686054229736 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.9336608052253723 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.30590105056762695 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.5660461187362671 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.9913381934165955 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.633561372756958 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.23758496344089508 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.6070131659507751 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.4161688983440399 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.598457932472229 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.22903600335121155 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.23204079270362854 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.4745582044124603 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.003897214774042368 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b3': 1 / (1 + 1 / Math.exp(0.01928507350385189 + 1.122692346572876 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.7365698218345642 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.0494970977306366 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.1555495262145996 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.661438524723053 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.001632444909773767 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.7137389183044434 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.4290667176246643 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.012499612756073475 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3653062582015991 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.6131802201271057 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.1023862436413765 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.8503838777542114 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.7923785448074341 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.01159936748445034 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.2371225506067276 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.7415123581886292 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.18953222036361694 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.36129119992256165 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6979826092720032 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.1221593618392944 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7647457718849182 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.543437123298645 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.6722582578659058 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.37952831387519836 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.197525143623352 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.5220025181770325 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.05488765239715576 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.4456583857536316 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.6524990200996399 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r4': 1 / (1 + 1 / Math.exp(0.12720100581645966 + 0.12935835123062134 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.7918020486831665 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.48446136713027954 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.029282717034220695 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.31257688999176025 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.06695467978715897 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.015034318901598454 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.08277234435081482 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.38428860902786255 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.4006001055240631 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.7672223448753357 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.3749905228614807 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6090664863586426 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) + 0.03545508161187172 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.8574482202529907 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.22104839980602264 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.8538182377815247 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0200424194335938 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.24648596346378326 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7869859337806702 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.2641597390174866 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8358282446861267 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.4661124646663666 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.7228312492370605 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.888810396194458 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.30862703919410706 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.5618684887886047 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.10977890342473984 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.14926603436470032 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.6881946325302124 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g4': 1 / (1 + 1 / Math.exp(-0.00528890872374177 + 0.5230435132980347 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.13016316294670105 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.2221681922674179 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.5077834725379944 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4169706702232361 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.019137011840939522 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.3950919210910797 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.03976059332489967 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.2533341348171234 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3901951313018799 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.37679198384284973 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.015298241749405861 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.4366024434566498 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5175963640213013 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.20635175704956055 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5845086574554443 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5196937918663025 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.8668348789215088 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.4617602527141571 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.3429054021835327 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.9248515963554382 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7119202613830566 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.3190305233001709 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.37616097927093506 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.5034502744674683 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.5512700080871582 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.5516822338104248 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.0023715656716376543 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.4461960792541504 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.16668826341629028 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b4': 1 / (1 + 1 / Math.exp(0.06696872413158417 + 0.7902237176895142 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.17919325828552246 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.0779193565249443 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.3728085458278656 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4214114248752594 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.046966392546892166 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.6910547614097595 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.4512921869754791 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.269338458776474 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3865360915660858 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.3640911877155304 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.08126149326562881 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.9097440838813782 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 1.1135039329528809 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.6120198965072632 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.13652187585830688 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6810116171836853 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.3396504819393158 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5548034906387329 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7363677024841309 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.5334645509719849 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.5745432376861572 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.025707433000206947 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.1261006593704224 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.5391490459442139 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.7383402585983276 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.6120001673698425 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.12103799730539322 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.2795040011405945 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.3043309152126312 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r5': 1 / (1 + 1 / Math.exp(0.2773326337337494 + 0.393337219953537 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6837741732597351 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.2601343095302582 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.13613833487033844 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.30748581886291504 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.06810545176267624 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.12095867097377777 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.20669861137866974 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.4843357801437378 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5606082081794739 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.5809441208839417 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.3604958951473236 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.4975733160972595 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.47919902205467224 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.5245380401611328 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5070245265960693 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6803706884384155 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.861768364906311 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.2384301722049713 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.8051836490631104 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.11368952691555023 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8511439561843872 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.7182642221450806 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.5255714654922485 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.9131110906600952 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.5671663880348206 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.5327064990997314 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.050560250878334045 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.04667200148105621 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.40255847573280334 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g5': 1 / (1 + 1 / Math.exp(0.0021127245854586363 + 0.3551577925682068 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.2280210256576538 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.022517221048474312 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.1911928504705429 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5809508562088013 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.002886831760406494 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.15797477960586548 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.2071053683757782 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.43505731225013733 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3271404802799225 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.509705662727356 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.24091914296150208 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5402241945266724 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5159213542938232 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.0240201186388731 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.4966159760951996 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.3880337178707123 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0607621669769287 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.2788654863834381 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.47606196999549866 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.35522642731666565 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7838059663772583 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.47339731454849243 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.34229788184165955 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.6689269542694092 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.3210650384426117 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.6744464635848999 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.2193322330713272 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.45094260573387146 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.08507237583398819 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b5': 1 / (1 + 1 / Math.exp(-0.18675421178340912 + 1.086178183555603 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.23666560649871826 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.4670758843421936 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.7165845632553101 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.4375090003013611 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.1266578882932663 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.8446032404899597 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.48016220331192017 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.20027118921279907 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.4172985553741455 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.46157267689704895 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.29680135846138 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5437321662902832 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 1.130418300628662 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 1.0548102855682373 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.3903662860393524 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.4354507327079773 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.34346485137939453 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.4546108543872833 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.31439581513404846 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.4493772983551025 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.4566980004310608 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.41432440280914307 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.3127808570861816 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.4688068926334381 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.8963919878005981 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.15517939627170563 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.07995801419019699 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.1908034235239029 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.43878304958343506 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r6': 1 / (1 + 1 / Math.exp(0.05809471756219864 + 0.5779777765274048 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.9894905686378479 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.10012704133987427 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.05747558921575546 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.43663138151168823 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.1228916123509407 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.2172090858221054 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.055623702704906464 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.08873080462217331 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.6078234910964966 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.04086236283183098 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.22495348751544952 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.7538767457008362 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.8433060050010681 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.44193869829177856 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.03450746089220047 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.858290433883667 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.5008716583251953 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5664055943489075 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 1.1253905296325684 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.6968110799789429 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8551167845726013 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.855776846408844 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.007322461809962988 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.09159169346094131 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.7844648957252502 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.45866310596466064 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.1700657457113266 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.4222065210342407 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.8697222471237183 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g6': 1 / (1 + 1 / Math.exp(-0.12111221998929977 + 0.2556942105293274 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.14860355854034424 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.13710631430149078 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.34540095925331116 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5550370812416077 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.091536745429039 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.37693747878074646 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.009209554642438889 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.14265024662017822 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5319991707801819 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.8513418436050415 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.33751559257507324 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.2394927442073822 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5729225873947144 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.22570830583572388 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.6950340270996094 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6979580521583557 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.8800270557403564 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.10246521979570389 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.2897655665874481 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.0437118262052536 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7687880992889404 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.2511617839336395 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.003861033357679844 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.9815462827682495 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.3417494297027588 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.7633334994316101 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.001997476676478982 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.5103482007980347 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.11432349681854248 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b6': 1 / (1 + 1 / Math.exp(-0.08130060136318207 + 0.5560657382011414 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.2948014736175537 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.06926881521940231 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.682382345199585 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.6137957572937012 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.06777354329824448 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.683485746383667 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.4037429988384247 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.12883734703063965 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.43140166997909546 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.10002943128347397 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.3714165687561035 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5448644757270813 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.7524182796478271 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.9705033898353577 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5428095459938049 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.23986586928367615 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.6671522259712219 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.2524658739566803 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) - 0.030328594148159027 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.1759357452392578 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.41061931848526 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.6893517971038818 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.0004136562347412 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.22817236185073853 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.3614491820335388 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.24857816100120544 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.11643120646476746 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.5255478620529175 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.5406607985496521 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r7': 1 / (1 + 1 / Math.exp(-0.14749807119369507 + 1.0458879470825195 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6627119779586792 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.11192890256643295 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.07595520466566086 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.37470749020576477 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.279512882232666 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.6615098118782043 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.5952123403549194 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.23096482455730438 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.6174098253250122 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.6586401462554932 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.4835435450077057 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.9950854778289795 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.8019512891769409 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.21334607899188995 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.17252755165100098 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.9072956442832947 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.3384397029876709 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.32992324233055115 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.8432088494300842 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.421821117401123 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.7889195680618286 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.7262765765190125 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.8610286116600037 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.5073229670524597 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.1441843509674072 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.7523661255836487 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.025473209097981453 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.6902778148651123 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.4336242377758026 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g7': 1 / (1 + 1 / Math.exp(0.11322584748268127 + 0.23332388699054718 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.49275559186935425 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.1330404430627823 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.3034173250198364 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.525123655796051 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.08971996605396271 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.1861971765756607 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.04066174104809761 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.41606372594833374 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.7229124307632446 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.63956218957901 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.25126969814300537 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.2676466107368469 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.33976563811302185 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.3500713109970093 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.6662037968635559 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.5556401014328003 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.033082365989685 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.14087234437465668 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.43273094296455383 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.12151526659727097 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.756697416305542 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.004235186614096165 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.1640956848859787 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.0483195781707764 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.17603270709514618 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.7860159277915955 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.026653172448277473 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.2695964276790619 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.2227020412683487 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b7': 1 / (1 + 1 / Math.exp(0.04425306245684624 + 0.21069137752056122 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.43755728006362915 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.10032586753368378 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.5590146780014038 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5760784149169922 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.3145678639411926 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.42551496624946594 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.1480010598897934 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.10118678957223892 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5209401249885559 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.699478030204773 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.6521158814430237 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.2858314514160156 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.4437330365180969 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.563503623008728 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.7008527517318726 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.18460586667060852 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.1496264934539795 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.10188989341259003 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) - 0.19105221331119537 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.398529052734375 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.31444835662841797 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.9215012788772583 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.3816695511341095 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.7185298800468445 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.28550514578819275 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.7087617516517639 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.1672280728816986 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.8277100920677185 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.6296523213386536 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r8': 1 / (1 + 1 / Math.exp(0.032365791499614716 + 1.3279294967651367 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.46507981419563293 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.377311646938324 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.07260952144861221 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.6474697589874268 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.045030731707811356 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.7372051477432251 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.46967482566833496 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.4196130335330963 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.5419908761978149 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.9403382539749146 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.08837993443012238 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 1.0754591226577759 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 1.313456654548645 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.4129495918750763 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.10595759749412537 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.7084724307060242 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.12169092893600464 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5724701881408691 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.6884795427322388 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.8840643167495728 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.3597685992717743 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.15084342658519745 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.2807642221450806 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.8108550906181335 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 1.2239583730697632 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.8566447496414185 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.06086871027946472 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) + 0.6462438702583313 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.3864426910877228 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g8': 1 / (1 + 1 / Math.exp(-0.15331526100635529 + 0.22017315030097961 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.6238275766372681 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.4375566840171814 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) - 0.10964236408472061 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.5830799341201782 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.09508692473173141 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.058934662491083145 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.07024215161800385 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.25205281376838684 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.37385088205337524 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.6668152213096619 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.0956633985042572 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.3418589234352112 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.6447631120681763 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.3071378469467163 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.37913915514945984 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.8644523620605469 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.9406282305717468 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.3501057028770447 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7362423539161682 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.13103918731212616 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.761765718460083 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.3998728096485138 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 0.03315631300210953 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.8950504064559937 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.37541669607162476 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.3540765643119812 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.2565653622150421 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.011917997151613235 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.18135443329811096 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b8': 1 / (1 + 1 / Math.exp(-0.04332856461405754 - 0.15903422236442566 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.23995012044906616 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.34210166335105896 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.3251979649066925 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.532985508441925 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.06848470866680145 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.03684423863887787 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.15467779338359833 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.40747782588005066 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.2348499596118927 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 1.2276197671890259 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.5595690608024597 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.05698493495583534 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.11670094728469849 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 0.25355198979377747 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.8103752136230469 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.22530055046081543 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.2114793062210083 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.23479588329792023 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.10883840918540955 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.40909117460250854 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.4085085690021515 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.4664509892463684 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.14056578278541565 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.5792124271392822 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.30230170488357544 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.0782445669174194 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.10818450152873993 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.8352781534194946 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.37054547667503357 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'r9': 1 / (1 + 1 / Math.exp(-0.26485633850097656 + 0.8163912296295166 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) + 0.3641555607318878 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) + 0.47180724143981934 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.6027824282646179 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.7135986685752869 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.177309051156044 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.9454987049102783 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.21240586042404175 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) + 0.0416766032576561 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.36699074506759644 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) + 0.3046293258666992 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.18928676843643188 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.5449449419975281 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.9728046655654907 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) + 1.0093538761138916 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.5047990679740906 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.2902992069721222 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.43752411007881165 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.44387418031692505 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.2103387862443924 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 1.6484708786010742 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.26836246252059937 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.5249594449996948 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) - 1.3054697513580322 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) - 0.16583481431007385 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.6385573744773865 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) + 0.16437609493732452 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.11097279191017151 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.09150629490613937 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) + 0.41443464159965515 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'g9': 1 / (1 + 1 / Math.exp(-0.2016616314649582 + 0.6648762822151184 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.7406719326972961 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.25139862298965454 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.04982524365186691 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.6405314803123474 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) + 0.13772691786289215 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) + 0.15557196736335754 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) - 0.257893830537796 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.39510175585746765 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.3850240707397461 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 0.22760212421417236 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) - 0.2013881355524063 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.6072750687599182 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) - 0.5916410088539124 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.4982772767543793 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.48151320219039917 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.6266374588012695 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 0.7921183705329895 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) - 0.5303989052772522 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.7600483894348145 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) - 0.5046752095222473 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.8750722408294678 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) + 0.48906993865966797 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.12443544715642929 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 0.510582447052002 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) + 0.6097193956375122 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 0.006947431713342667 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) + 0.012443456798791885 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.016071315854787827 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.36500176787376404 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0))))),
    'b9': 1 / (1 + 1 / Math.exp(0.10151568800210953 - 0.20038314163684845 * 1 / (1 + 1 / Math.exp(-1.1714602708816528 + 0.16481977701187134 * (input['r'] || 0) + 2.548427104949951 * (input['g'] || 0) - 1.1896206140518188 * (input['b'] || 0))) - 0.3049294948577881 * 1 / (1 + 1 / Math.exp(0.7892000079154968 + 1.6192480325698853 * (input['r'] || 0) - 1.6457102298736572 * (input['g'] || 0) - 1.2434521913528442 * (input['b'] || 0))) - 0.35661256313323975 * 1 / (1 + 1 / Math.exp(-0.48663583397865295 + 0.09835810214281082 * (input['r'] || 0) - 0.10390736162662506 * (input['g'] || 0) - 1.3070005178451538 * (input['b'] || 0))) + 0.35554203391075134 * 1 / (1 + 1 / Math.exp(-0.831140398979187 + 1.6635568141937256 * (input['r'] || 0) - 0.020671123638749123 * (input['g'] || 0) - 0.5605458617210388 * (input['b'] || 0))) + 0.46270182728767395 * 1 / (1 + 1 / Math.exp(-1.7073352336883545 + 0.8708054423332214 * (input['r'] || 0) + 1.3537464141845703 * (input['g'] || 0) + 0.08382666856050491 * (input['b'] || 0))) - 0.05508747324347496 * 1 / (1 + 1 / Math.exp(-0.6685526371002197 - 0.48093554377555847 * (input['r'] || 0) - 0.02220255509018898 * (input['g'] || 0) - 0.3757251799106598 * (input['b'] || 0))) - 0.17480649054050446 * 1 / (1 + 1 / Math.exp(-0.9468656778335571 + 1.0548056364059448 * (input['r'] || 0) + 1.3838977813720703 * (input['g'] || 0) - 1.3866052627563477 * (input['b'] || 0))) + 0.22751012444496155 * 1 / (1 + 1 / Math.exp(-0.4147833287715912 - 0.08325596898794174 * (input['r'] || 0) - 1.2387561798095703 * (input['g'] || 0) + 0.6562532186508179 * (input['b'] || 0))) - 0.4112047851085663 * 1 / (1 + 1 / Math.exp(-0.2379560023546219 - 0.1462639421224594 * (input['r'] || 0) - 0.11675770580768585 * (input['g'] || 0) - 1.4417368173599243 * (input['b'] || 0))) - 0.19270849227905273 * 1 / (1 + 1 / Math.exp(0.9850243330001831 - 0.43982917070388794 * (input['r'] || 0) - 1.6079199314117432 * (input['g'] || 0) - 0.5403903722763062 * (input['b'] || 0))) - 1.2176032066345215 * 1 / (1 + 1 / Math.exp(0.8408612012863159 - 1.0237118005752563 * (input['r'] || 0) + 1.2772188186645508 * (input['g'] || 0) - 2.612316370010376 * (input['b'] || 0))) + 0.41951149702072144 * 1 / (1 + 1 / Math.exp(-0.4955044090747833 + 1.5624123811721802 * (input['r'] || 0) - 0.743323564529419 * (input['g'] || 0) - 0.1957237869501114 * (input['b'] || 0))) + 0.055190395563840866 * 1 / (1 + 1 / Math.exp(-1.549385666847229 - 0.09741970896720886 * (input['r'] || 0) + 2.345381021499634 * (input['g'] || 0) - 0.2656731605529785 * (input['b'] || 0))) + 0.023167628794908524 * 1 / (1 + 1 / Math.exp(1.4989889860153198 - 0.8425247669219971 * (input['r'] || 0) - 2.5881664752960205 * (input['g'] || 0) + 0.7082173824310303 * (input['b'] || 0))) - 0.47903409600257874 * 1 / (1 + 1 / Math.exp(-0.08470573276281357 + 2.1497411727905273 * (input['r'] || 0) - 0.057642560452222824 * (input['g'] || 0) - 2.175044536590576 * (input['b'] || 0))) - 0.7139248251914978 * 1 / (1 + 1 / Math.exp(1.124759554862976 - 1.4558802843093872 * (input['r'] || 0) - 0.45489636063575745 * (input['g'] || 0) - 0.6724346280097961 * (input['b'] || 0))) + 0.598707914352417 * 1 / (1 + 1 / Math.exp(-2.158897638320923 - 0.20762379467487335 * (input['r'] || 0) + 2.016800880432129 * (input['g'] || 0) + 0.8816117644309998 * (input['b'] || 0))) + 1.0073984861373901 * 1 / (1 + 1 / Math.exp(-3.1825828552246094 + 1.6704307794570923 * (input['r'] || 0) + 0.8646843433380127 * (input['g'] || 0) + 1.5773216485977173 * (input['b'] || 0))) + 0.05983440950512886 * 1 / (1 + 1 / Math.exp(-0.021724916994571686 - 0.30959293246269226 * (input['r'] || 0) - 1.4926856756210327 * (input['g'] || 0) + 0.022698281332850456 * (input['b'] || 0))) + 0.4355675280094147 * 1 / (1 + 1 / Math.exp(-1.6864166259765625 - 0.8192369937896729 * (input['r'] || 0) + 2.027538776397705 * (input['g'] || 0) + 0.8171215653419495 * (input['b'] || 0))) + 0.4928092658519745 * 1 / (1 + 1 / Math.exp(0.9358410239219666 - 1.2205893993377686 * (input['r'] || 0) - 3.258364200592041 * (input['g'] || 0) + 2.673768997192383 * (input['b'] || 0))) + 0.6116960048675537 * 1 / (1 + 1 / Math.exp(-2.59110164642334 + 0.16089235246181488 * (input['r'] || 0) + 1.8918489217758179 * (input['g'] || 0) + 1.1755812168121338 * (input['b'] || 0))) - 0.1205579861998558 * 1 / (1 + 1 / Math.exp(-0.6677559018135071 - 2.526516914367676 * (input['r'] || 0) + 0.7566452622413635 * (input['g'] || 0) + 1.1556451320648193 * (input['b'] || 0))) + 0.6369423866271973 * 1 / (1 + 1 / Math.exp(0.07270144671201706 - 1.3082261085510254 * (input['r'] || 0) - 1.9764657020568848 * (input['g'] || 0) + 2.4993717670440674 * (input['b'] || 0))) + 1.593873143196106 * 1 / (1 + 1 / Math.exp(-1.7963662147521973 + 1.468438744544983 * (input['r'] || 0) - 1.1814048290252686 * (input['g'] || 0) + 2.656827211380005 * (input['b'] || 0))) - 0.27142980694770813 * 1 / (1 + 1 / Math.exp(-1.1895171403884888 - 0.6929708123207092 * (input['r'] || 0) + 2.8814611434936523 * (input['g'] || 0) - 0.7650258541107178 * (input['b'] || 0))) - 1.0051642656326294 * 1 / (1 + 1 / Math.exp(0.8563500642776489 - 1.612709641456604 * (input['r'] || 0) + 1.4176042079925537 * (input['g'] || 0) - 2.013615846633911 * (input['b'] || 0))) - 0.22518141567707062 * 1 / (1 + 1 / Math.exp(-0.5254379510879517 - 0.46315184235572815 * (input['r'] || 0) - 0.3090965747833252 * (input['g'] || 0) - 0.6119104623794556 * (input['b'] || 0))) - 0.6825007796287537 * 1 / (1 + 1 / Math.exp(0.4004803001880646 - 1.9792532920837402 * (input['r'] || 0) + 1.0641696453094482 * (input['g'] || 0) - 0.7379791140556335 * (input['b'] || 0))) - 0.08360646665096283 * 1 / (1 + 1 / Math.exp(0.14379440248012543 + 1.7527695894241333 * (input['r'] || 0) - 1.396540880203247 * (input['g'] || 0) - 0.7739328742027283 * (input['b'] || 0)))))
  };
}

var hexToRgb = function hexToRgb(hex) {
  var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var arr = hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function (m, r, g, b) {
    return '#' + r + r + g + g + b + b;
  }).substring(1).match(/.{2}/g).map(function (x) {
    return parseInt(x, 16);
  });
  var keys = ['r' + id, 'g' + id, 'b' + id];
  var output = {};
  keys.forEach(function (key, num) {
    output[key] = arr[num] / 255;
  });
  return output;
};

module.exports = model;

/***/ }),

/***/ 0:
/*!******************************************!*\
  !*** multi ./src/main.js ./src/main.css ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/domingomartinmancera/code/dmarman.github.io/src/main.js */"./src/main.js");
module.exports = __webpack_require__(/*! /Users/domingomartinmancera/code/dmarman.github.io/src/main.css */"./src/main.css");


/***/ })

/******/ });