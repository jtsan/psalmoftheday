parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"lIqf":[function(require,module,exports) {
"use strict";var e=["Out_of_memory",0],r=["Sys_error",-1],o=["Failure",-2],t=["Invalid_argument",-3],_=["End_of_file",-4],s=["Division_by_zero",-5],a=["Not_found",-6],i=["Match_failure",-7],u=["Stack_overflow",-8],f=["Sys_blocked_io",-9],l=["Assert_failure",-10],d=["Undefined_recursive_module",-11];e.tag=248,r.tag=248,o.tag=248,t.tag=248,_.tag=248,s.tag=248,a.tag=248,i.tag=248,u.tag=248,f.tag=248,l.tag=248,d.tag=248,exports.out_of_memory=e,exports.sys_error=r,exports.failure=o,exports.invalid_argument=t,exports.end_of_file=_,exports.division_by_zero=s,exports.not_found=a,exports.match_failure=i,exports.stack_overflow=u,exports.sys_blocked_io=f,exports.assert_failure=l,exports.undefined_recursive_module=d;
},{}],"rBq/":[function(require,module,exports) {
"use strict";var r=require("./caml_builtin_exceptions.js");function n(r,n,t){for(var a=new Array(t),e=0,o=n;e<t;)a[e]=r[o],e=e+1|0,o=o+1|0;return a}function t(r,n){for(;;){var t=n,a=r;if(!t)return a;n=t[1],r=t[0].length+a|0}}function a(r,n,t){for(;;){var a=t,e=n;if(!a)return 0;for(var o=a[0],u=o.length,i=e,c=0;c<u;)r[i]=o[c],i=i+1|0,c=c+1|0;t=a[1],n=i}}function e(r){var n=t(0,r),e=new Array(n);return a(e,0,r),e}function o(n,t,a){if(t<0||t>=n.length)throw[r.invalid_argument,"index out of bounds"];return n[t]=a,0}function u(n,t){if(t<0||t>=n.length)throw[r.invalid_argument,"index out of bounds"];return n[t]}function i(r,n){for(var t=new Array(r),a=0,e=r-1|0;a<=e;++a)t[a]=n;return t}function c(r){for(var n=new Array(r),t=0,a=r-1|0;t<=a;++t)n[t]=0;return n}function f(r,n,t,a,e){if(a<=n){for(var o=0,u=e-1|0;o<=u;++o)t[o+a|0]=r[o+n|0];return 0}for(var i=e-1|0;i>=0;--i)t[i+a|0]=r[i+n|0];return 0}function _(r){return r.slice(0)}exports.caml_array_dup=_,exports.caml_array_sub=n,exports.caml_array_concat=e,exports.caml_make_vect=i,exports.caml_make_float_vect=c,exports.caml_array_blit=f,exports.caml_array_get=u,exports.caml_array_set=o;
},{"./caml_builtin_exceptions.js":"lIqf"}],"Zxig":[function(require,module,exports) {
"use strict";var r=require("./caml_array.js");function n(t,e){for(;;){var u=e,c=t,s=c.length,a=s-u.length|0;if(0===a)return c.apply(null,u);if(!(a<0))return function(r,t){return function(e){return n(r,t.concat([e]))}}(c,u);e=r.caml_array_sub(u,s,0|-a),t=c.apply(null,r.caml_array_sub(u,0,s))}}function t(r,t,e){switch(e){case 1:return r(t);case 2:return function(n){return r(t,n)};case 3:return function(n,e){return r(t,n,e)};case 4:return function(n,e,u){return r(t,n,e,u)};case 5:return function(n,e,u,c){return r(t,n,e,u,c)};case 6:return function(n,e,u,c,s){return r(t,n,e,u,c,s)};case 7:return function(n,e,u,c,s,a){return r(t,n,e,u,c,s,a)};default:return n(r,[t])}}function e(r,n){var e=r.length;return 1===e?r(n):t(r,n,e)}function u(r){return 1===r.length?r:function(n){return e(r,n)}}function c(r,t,e,u){switch(u){case 1:return n(r(t),[e]);case 2:return r(t,e);case 3:return function(n){return r(t,e,n)};case 4:return function(n,u){return r(t,e,n,u)};case 5:return function(n,u,c){return r(t,e,n,u,c)};case 6:return function(n,u,c,s){return r(t,e,n,u,c,s)};case 7:return function(n,u,c,s,a){return r(t,e,n,u,c,s,a)};default:return n(r,[t,e])}}function s(r,n,t){var e=r.length;return 2===e?r(n,t):c(r,n,t,e)}function a(r){return 2===r.length?r:function(n,t){return s(r,n,t)}}function o(r,t,e,u,c){switch(c){case 1:return n(r(t),[e,u]);case 2:return n(r(t,e),[u]);case 3:return r(t,e,u);case 4:return function(n){return r(t,e,u,n)};case 5:return function(n,c){return r(t,e,u,n,c)};case 6:return function(n,c,s){return r(t,e,u,n,c,s)};case 7:return function(n,c,s,a){return r(t,e,u,n,c,s,a)};default:return n(r,[t,e,u])}}function i(r,n,t,e){var u=r.length;return 3===u?r(n,t,e):o(r,n,t,e,u)}function f(r){return 3===r.length?r:function(n,t,e){return i(r,n,t,e)}}function _(r,t,e,u,c,s){switch(s){case 1:return n(r(t),[e,u,c]);case 2:return n(r(t,e),[u,c]);case 3:return n(r(t,e,u),[c]);case 4:return r(t,e,u,c);case 5:return function(n){return r(t,e,u,c,n)};case 6:return function(n,s){return r(t,e,u,c,n,s)};case 7:return function(n,s,a){return r(t,e,u,c,n,s,a)};default:return n(r,[t,e,u,c])}}function l(r,n,t,e,u){var c=r.length;return 4===c?r(n,t,e,u):_(r,n,t,e,u,c)}function p(r){return 4===r.length?r:function(n,t,e,u){return l(r,n,t,e,u)}}function h(r,t,e,u,c,s,a){switch(a){case 1:return n(r(t),[e,u,c,s]);case 2:return n(r(t,e),[u,c,s]);case 3:return n(r(t,e,u),[c,s]);case 4:return n(r(t,e,u,c),[s]);case 5:return r(t,e,u,c,s);case 6:return function(n){return r(t,e,u,c,s,n)};case 7:return function(n,a){return r(t,e,u,c,s,n,a)};default:return n(r,[t,e,u,c,s])}}function x(r,n,t,e,u,c){var s=r.length;return 5===s?r(n,t,e,u,c):h(r,n,t,e,u,c,s)}function g(r){return 5===r.length?r:function(n,t,e,u,c){return x(r,n,t,e,u,c)}}function y(r,t,e,u,c,s,a,o){switch(o){case 1:return n(r(t),[e,u,c,s,a]);case 2:return n(r(t,e),[u,c,s,a]);case 3:return n(r(t,e,u),[c,s,a]);case 4:return n(r(t,e,u,c),[s,a]);case 5:return n(r(t,e,u,c,s),[a]);case 6:return r(t,e,u,c,s,a);case 7:return function(n){return r(t,e,u,c,s,a,n)};default:return n(r,[t,e,u,c,s,a])}}function v(r,n,t,e,u,c,s){var a=r.length;return 6===a?r(n,t,e,u,c,s):y(r,n,t,e,u,c,s,a)}function d(r){return 6===r.length?r:function(n,t,e,u,c,s){return v(r,n,t,e,u,c,s)}}function w(r,t,e,u,c,s,a,o,i){switch(i){case 1:return n(r(t),[e,u,c,s,a,o]);case 2:return n(r(t,e),[u,c,s,a,o]);case 3:return n(r(t,e,u),[c,s,a,o]);case 4:return n(r(t,e,u,c),[s,a,o]);case 5:return n(r(t,e,u,c,s),[a,o]);case 6:return n(r(t,e,u,c,s,a),[o]);case 7:return r(t,e,u,c,s,a,o);default:return n(r,[t,e,u,c,s,a,o])}}function m(r,n,t,e,u,c,s,a){var o=r.length;return 7===o?r(n,t,e,u,c,s,a):w(r,n,t,e,u,c,s,a,o)}function b(r){return 7===r.length?r:function(n,t,e,u,c,s,a){return m(r,n,t,e,u,c,s,a)}}function j(r,t,e,u,c,s,a,o,i,f){switch(f){case 1:return n(r(t),[e,u,c,s,a,o,i]);case 2:return n(r(t,e),[u,c,s,a,o,i]);case 3:return n(r(t,e,u),[c,s,a,o,i]);case 4:return n(r(t,e,u,c),[s,a,o,i]);case 5:return n(r(t,e,u,c,s),[a,o,i]);case 6:return n(r(t,e,u,c,s,a),[o,i]);case 7:return n(r(t,e,u,c,s,a,o),[i]);default:return n(r,[t,e,u,c,s,a,o,i])}}function q(r,n,t,e,u,c,s,a,o){var i=r.length;return 8===i?r(n,t,e,u,c,s,a,o):j(r,n,t,e,u,c,s,a,o,i)}function k(r){return 8===r.length?r:function(n,t,e,u,c,s,a,o){return q(r,n,t,e,u,c,s,a,o)}}exports.app=n,exports.curry_1=t,exports._1=e,exports.__1=u,exports.curry_2=c,exports._2=s,exports.__2=a,exports.curry_3=o,exports._3=i,exports.__3=f,exports.curry_4=_,exports._4=l,exports.__4=p,exports.curry_5=h,exports._5=x,exports.__5=g,exports.curry_6=y,exports._6=v,exports.__6=d,exports.curry_7=w,exports._7=m,exports.__7=b,exports.curry_8=j,exports._8=q,exports.__8=k;
},{"./caml_array.js":"rBq/"}],"oEax":[function(require,module,exports) {
"use strict";var t=[];function o(o){if(void 0===o){var n=[t,0];return n.tag=256,n}if(null!==o&&o[0]===t){var r=o[1]+1|0,u=[t,r];return u.tag=256,u}return o}function n(t){return null==t?void 0:o(t)}function r(t){return void 0===t?void 0:o(t)}function u(t){return null===t?void 0:o(t)}function i(o){if(null!==o&&o[0]===t){var n=o[1];return 0===n?void 0:[t,n-1|0]}return o}function e(t){return void 0===t?void 0:i(t)}function v(t){return void 0===t?void 0:i(t)[1]}exports.nullable_to_opt=n,exports.undefined_to_opt=r,exports.null_to_opt=u,exports.valFromOption=i,exports.some=o,exports.option_get=e,exports.option_get_unwrap=v;
},{}],"cnZ9":[function(require,module,exports) {
"use strict";var t=require("./curry.js"),o=require("./js_primitive.js");function r(t){if(void 0!==t)return o.valFromOption(t);throw new Error("getExn")}function n(t,r,n){return void 0!==t?n(o.valFromOption(t)):r}function i(o,r,i){return n(o,r,t.__1(i))}function e(t,r){if(void 0!==t)return o.some(r(o.valFromOption(t)))}function u(o,r){return e(o,t.__1(r))}function p(t,r){if(void 0!==t)return r(o.valFromOption(t))}function v(o,r){return p(o,t.__1(r))}function f(t,r){return void 0!==t?o.valFromOption(t):r}function s(t){return void 0!==t}function a(t){return void 0===t}function c(t,r,n){return void 0!==t?void 0!==r&&n(o.valFromOption(t),o.valFromOption(r)):void 0===r}function m(o,r,n){return c(o,r,t.__2(n))}function x(t,r,n){return void 0!==t?void 0!==r?n(o.valFromOption(t),o.valFromOption(r)):1:void 0!==r?-1:0}function l(o,r,n){return x(o,r,t.__2(n))}exports.getExn=r,exports.mapWithDefaultU=n,exports.mapWithDefault=i,exports.mapU=e,exports.map=u,exports.flatMapU=p,exports.flatMap=v,exports.getWithDefault=f,exports.isSome=s,exports.isNone=a,exports.eqU=c,exports.eq=m,exports.cmpU=x,exports.cmp=l;
},{"./curry.js":"Zxig","./js_primitive.js":"oEax"}],"kHAo":[function(require,module,exports) {
"use strict";var e=require("bs-platform/lib/js/belt_Option.js"),t=require("bs-platform/lib/js/js_primitive.js"),r=new Date,s=new Date(r.getFullYear(),0),i=r.valueOf()-s.valueOf(),o=1+(i/1e3/60/60/24|0)|0,a=String(o%150),l='<a href="https://www.bible.com/en-GB/bible/59/PSA.'+String(a)+'.ESV">Psalm '+String(a)+"</a>",n=document.getElementById("linkTo");e.map(null==n?void 0:t.some(n),function(e){return e.innerHTML=l,0});var p=0,m=0,f=0;exports.D=p,exports.Doc=m,exports.Elem=f,exports.today=r,exports.firstOfYear=s,exports.dayOfYear=o,exports.psalmOfTheDay=a,exports.linkTo=l;
},{"bs-platform/lib/js/belt_Option.js":"cnZ9","bs-platform/lib/js/js_primitive.js":"oEax"}]},{},["kHAo"], null)
//# sourceMappingURL=Main.bs.d7ff252a.map