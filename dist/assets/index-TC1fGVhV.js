(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var zp={exports:{}},Gl={},Bp={exports:{}},Ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ka=Symbol.for("react.element"),jg=Symbol.for("react.portal"),Xg=Symbol.for("react.fragment"),qg=Symbol.for("react.strict_mode"),Yg=Symbol.for("react.profiler"),$g=Symbol.for("react.provider"),Kg=Symbol.for("react.context"),Zg=Symbol.for("react.forward_ref"),Qg=Symbol.for("react.suspense"),Jg=Symbol.for("react.memo"),e2=Symbol.for("react.lazy"),Th=Symbol.iterator;function t2(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var kp={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Vp=Object.assign,Hp={};function zs(t,e,n){this.props=t,this.context=e,this.refs=Hp,this.updater=n||kp}zs.prototype.isReactComponent={};zs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};zs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Gp(){}Gp.prototype=zs.prototype;function nd(t,e,n){this.props=t,this.context=e,this.refs=Hp,this.updater=n||kp}var id=nd.prototype=new Gp;id.constructor=nd;Vp(id,zs.prototype);id.isPureReactComponent=!0;var wh=Array.isArray,Wp=Object.prototype.hasOwnProperty,rd={current:null},jp={key:!0,ref:!0,__self:!0,__source:!0};function Xp(t,e,n){var i,r={},s=null,a=null;if(e!=null)for(i in e.ref!==void 0&&(a=e.ref),e.key!==void 0&&(s=""+e.key),e)Wp.call(e,i)&&!jp.hasOwnProperty(i)&&(r[i]=e[i]);var o=arguments.length-2;if(o===1)r.children=n;else if(1<o){for(var l=Array(o),c=0;c<o;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in o=t.defaultProps,o)r[i]===void 0&&(r[i]=o[i]);return{$$typeof:ka,type:t,key:s,ref:a,props:r,_owner:rd.current}}function n2(t,e){return{$$typeof:ka,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function sd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ka}function i2(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ah=/\/+/g;function fc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?i2(""+t.key):e.toString(36)}function Wo(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var a=!1;if(t===null)a=!0;else switch(s){case"string":case"number":a=!0;break;case"object":switch(t.$$typeof){case ka:case jg:a=!0}}if(a)return a=t,r=r(a),t=i===""?"."+fc(a,0):i,wh(r)?(n="",t!=null&&(n=t.replace(Ah,"$&/")+"/"),Wo(r,e,n,"",function(c){return c})):r!=null&&(sd(r)&&(r=n2(r,n+(!r.key||a&&a.key===r.key?"":(""+r.key).replace(Ah,"$&/")+"/")+t)),e.push(r)),1;if(a=0,i=i===""?".":i+":",wh(t))for(var o=0;o<t.length;o++){s=t[o];var l=i+fc(s,o);a+=Wo(s,e,n,l,r)}else if(l=t2(t),typeof l=="function")for(t=l.call(t),o=0;!(s=t.next()).done;)s=s.value,l=i+fc(s,o++),a+=Wo(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return a}function Za(t,e,n){if(t==null)return t;var i=[],r=0;return Wo(t,i,"","",function(s){return e.call(n,s,r++)}),i}function r2(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var ln={current:null},jo={transition:null},s2={ReactCurrentDispatcher:ln,ReactCurrentBatchConfig:jo,ReactCurrentOwner:rd};function qp(){throw Error("act(...) is not supported in production builds of React.")}Ve.Children={map:Za,forEach:function(t,e,n){Za(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Za(t,function(){e++}),e},toArray:function(t){return Za(t,function(e){return e})||[]},only:function(t){if(!sd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ve.Component=zs;Ve.Fragment=Xg;Ve.Profiler=Yg;Ve.PureComponent=nd;Ve.StrictMode=qg;Ve.Suspense=Qg;Ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=s2;Ve.act=qp;Ve.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Vp({},t.props),r=t.key,s=t.ref,a=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,a=rd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var o=t.type.defaultProps;for(l in e)Wp.call(e,l)&&!jp.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&o!==void 0?o[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){o=Array(l);for(var c=0;c<l;c++)o[c]=arguments[c+2];i.children=o}return{$$typeof:ka,type:t.type,key:r,ref:s,props:i,_owner:a}};Ve.createContext=function(t){return t={$$typeof:Kg,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:$g,_context:t},t.Consumer=t};Ve.createElement=Xp;Ve.createFactory=function(t){var e=Xp.bind(null,t);return e.type=t,e};Ve.createRef=function(){return{current:null}};Ve.forwardRef=function(t){return{$$typeof:Zg,render:t}};Ve.isValidElement=sd;Ve.lazy=function(t){return{$$typeof:e2,_payload:{_status:-1,_result:t},_init:r2}};Ve.memo=function(t,e){return{$$typeof:Jg,type:t,compare:e===void 0?null:e}};Ve.startTransition=function(t){var e=jo.transition;jo.transition={};try{t()}finally{jo.transition=e}};Ve.unstable_act=qp;Ve.useCallback=function(t,e){return ln.current.useCallback(t,e)};Ve.useContext=function(t){return ln.current.useContext(t)};Ve.useDebugValue=function(){};Ve.useDeferredValue=function(t){return ln.current.useDeferredValue(t)};Ve.useEffect=function(t,e){return ln.current.useEffect(t,e)};Ve.useId=function(){return ln.current.useId()};Ve.useImperativeHandle=function(t,e,n){return ln.current.useImperativeHandle(t,e,n)};Ve.useInsertionEffect=function(t,e){return ln.current.useInsertionEffect(t,e)};Ve.useLayoutEffect=function(t,e){return ln.current.useLayoutEffect(t,e)};Ve.useMemo=function(t,e){return ln.current.useMemo(t,e)};Ve.useReducer=function(t,e,n){return ln.current.useReducer(t,e,n)};Ve.useRef=function(t){return ln.current.useRef(t)};Ve.useState=function(t){return ln.current.useState(t)};Ve.useSyncExternalStore=function(t,e,n){return ln.current.useSyncExternalStore(t,e,n)};Ve.useTransition=function(){return ln.current.useTransition()};Ve.version="18.3.1";Bp.exports=Ve;var Vt=Bp.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var a2=Vt,o2=Symbol.for("react.element"),l2=Symbol.for("react.fragment"),c2=Object.prototype.hasOwnProperty,u2=a2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,f2={key:!0,ref:!0,__self:!0,__source:!0};function Yp(t,e,n){var i,r={},s=null,a=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(a=e.ref);for(i in e)c2.call(e,i)&&!f2.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:o2,type:t,key:s,ref:a,props:r,_owner:u2.current}}Gl.Fragment=l2;Gl.jsx=Yp;Gl.jsxs=Yp;zp.exports=Gl;var w=zp.exports,$p={exports:{}},wn={},Kp={exports:{}},Zp={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(B,j){var Q=B.length;B.push(j);e:for(;0<Q;){var ae=Q-1>>>1,de=B[ae];if(0<r(de,j))B[ae]=j,B[Q]=de,Q=ae;else break e}}function n(B){return B.length===0?null:B[0]}function i(B){if(B.length===0)return null;var j=B[0],Q=B.pop();if(Q!==j){B[0]=Q;e:for(var ae=0,de=B.length,Be=de>>>1;ae<Be;){var He=2*(ae+1)-1,Pe=B[He],$=He+1,fe=B[$];if(0>r(Pe,Q))$<de&&0>r(fe,Pe)?(B[ae]=fe,B[$]=Q,ae=$):(B[ae]=Pe,B[He]=Q,ae=He);else if($<de&&0>r(fe,Q))B[ae]=fe,B[$]=Q,ae=$;else break e}}return j}function r(B,j){var Q=B.sortIndex-j.sortIndex;return Q!==0?Q:B.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var a=Date,o=a.now();t.unstable_now=function(){return a.now()-o}}var l=[],c=[],p=1,h=null,f=3,m=!1,_=!1,M=!1,g=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,d=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(B){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=B)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function y(B){if(M=!1,v(B),!_)if(n(l)!==null)_=!0,W(C);else{var j=n(c);j!==null&&k(y,j.startTime-B)}}function C(B,j){_=!1,M&&(M=!1,u(x),x=-1),m=!0;var Q=f;try{for(v(j),h=n(l);h!==null&&(!(h.expirationTime>j)||B&&!P());){var ae=h.callback;if(typeof ae=="function"){h.callback=null,f=h.priorityLevel;var de=ae(h.expirationTime<=j);j=t.unstable_now(),typeof de=="function"?h.callback=de:h===n(l)&&i(l),v(j)}else i(l);h=n(l)}if(h!==null)var Be=!0;else{var He=n(c);He!==null&&k(y,He.startTime-j),Be=!1}return Be}finally{h=null,f=Q,m=!1}}var T=!1,R=null,x=-1,b=5,L=-1;function P(){return!(t.unstable_now()-L<b)}function z(){if(R!==null){var B=t.unstable_now();L=B;var j=!0;try{j=R(!0,B)}finally{j?q():(T=!1,R=null)}}else T=!1}var q;if(typeof d=="function")q=function(){d(z)};else if(typeof MessageChannel<"u"){var J=new MessageChannel,U=J.port2;J.port1.onmessage=z,q=function(){U.postMessage(null)}}else q=function(){g(z,0)};function W(B){R=B,T||(T=!0,q())}function k(B,j){x=g(function(){B(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){_||m||(_=!0,W(C))},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):b=0<B?Math.floor(1e3/B):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(B){switch(f){case 1:case 2:case 3:var j=3;break;default:j=f}var Q=f;f=j;try{return B()}finally{f=Q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(B,j){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var Q=f;f=B;try{return j()}finally{f=Q}},t.unstable_scheduleCallback=function(B,j,Q){var ae=t.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?ae+Q:ae):Q=ae,B){case 1:var de=-1;break;case 2:de=250;break;case 5:de=1073741823;break;case 4:de=1e4;break;default:de=5e3}return de=Q+de,B={id:p++,callback:j,priorityLevel:B,startTime:Q,expirationTime:de,sortIndex:-1},Q>ae?(B.sortIndex=Q,e(c,B),n(l)===null&&B===n(c)&&(M?(u(x),x=-1):M=!0,k(y,Q-ae))):(B.sortIndex=de,e(l,B),_||m||(_=!0,W(C))),B},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(B){var j=f;return function(){var Q=f;f=j;try{return B.apply(this,arguments)}finally{f=Q}}}})(Zp);Kp.exports=Zp;var d2=Kp.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var h2=Vt,Tn=d2;function ne(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Qp=new Set,ya={};function kr(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(ya[t]=e,t=0;t<e.length;t++)Qp.add(e[t])}var bi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),vu=Object.prototype.hasOwnProperty,p2=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},Rh={};function m2(t){return vu.call(Rh,t)?!0:vu.call(Ch,t)?!1:p2.test(t)?Rh[t]=!0:(Ch[t]=!0,!1)}function g2(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function v2(t,e,n,i){if(e===null||typeof e>"u"||g2(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function cn(t,e,n,i,r,s,a){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=a}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new cn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new cn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new cn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new cn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new cn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new cn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new cn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new cn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new cn(t,5,!1,t.toLowerCase(),null,!1,!1)});var ad=/[\-:]([a-z])/g;function od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(ad,od);Xt[e]=new cn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(ad,od);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(ad,od);Xt[e]=new cn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new cn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new cn(t,1,!1,t.toLowerCase(),null,!0,!0)});function ld(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(v2(e,n,r,i)&&(n=null),i||r===null?m2(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ui=h2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Qa=Symbol.for("react.element"),os=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),cd=Symbol.for("react.strict_mode"),_u=Symbol.for("react.profiler"),Jp=Symbol.for("react.provider"),em=Symbol.for("react.context"),ud=Symbol.for("react.forward_ref"),xu=Symbol.for("react.suspense"),Su=Symbol.for("react.suspense_list"),fd=Symbol.for("react.memo"),Xi=Symbol.for("react.lazy"),tm=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var St=Object.assign,dc;function aa(t){if(dc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);dc=e&&e[1]||""}return`
`+dc+t}var hc=!1;function pc(t,e){if(!t||hc)return"";hc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),a=r.length-1,o=s.length-1;1<=a&&0<=o&&r[a]!==s[o];)o--;for(;1<=a&&0<=o;a--,o--)if(r[a]!==s[o]){if(a!==1||o!==1)do if(a--,o--,0>o||r[a]!==s[o]){var l=`
`+r[a].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=a&&0<=o);break}}}finally{hc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?aa(t):""}function _2(t){switch(t.tag){case 5:return aa(t.type);case 16:return aa("Lazy");case 13:return aa("Suspense");case 19:return aa("SuspenseList");case 0:case 2:case 15:return t=pc(t.type,!1),t;case 11:return t=pc(t.type.render,!1),t;case 1:return t=pc(t.type,!0),t;default:return""}}function yu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case os:return"Portal";case _u:return"Profiler";case cd:return"StrictMode";case xu:return"Suspense";case Su:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case em:return(t.displayName||"Context")+".Consumer";case Jp:return(t._context.displayName||"Context")+".Provider";case ud:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case fd:return e=t.displayName||null,e!==null?e:yu(t.type)||"Memo";case Xi:e=t._payload,t=t._init;try{return yu(t(e))}catch{}}return null}function x2(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return yu(e);case 8:return e===cd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function lr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function nm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function S2(t){var e=nm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(a){i=""+a,s.call(this,a)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(a){i=""+a},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=S2(t))}function im(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=nm(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function cl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Mu(t,e){var n=e.checked;return St({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=lr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function rm(t,e){e=e.checked,e!=null&&ld(t,"checked",e,!1)}function Eu(t,e){rm(t,e);var n=lr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Tu(t,e.type,n):e.hasOwnProperty("defaultValue")&&Tu(t,e.type,lr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Tu(t,e,n){(e!=="number"||cl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oa=Array.isArray;function xs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+lr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function wu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return St({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ne(92));if(oa(n)){if(1<n.length)throw Error(ne(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:lr(n)}}function sm(t,e){var n=lr(e.value),i=lr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function am(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Au(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?am(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var eo,om=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(eo=eo||document.createElement("div"),eo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=eo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Ma(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var da={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},y2=["Webkit","ms","Moz","O"];Object.keys(da).forEach(function(t){y2.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),da[e]=da[t]})});function lm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||da.hasOwnProperty(t)&&da[t]?(""+e).trim():e+"px"}function cm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=lm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var M2=St({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Cu(t,e){if(e){if(M2[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Ru(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var bu=null;function dd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Pu=null,Ss=null,ys=null;function Ih(t){if(t=Ga(t)){if(typeof Pu!="function")throw Error(ne(280));var e=t.stateNode;e&&(e=Yl(e),Pu(t.stateNode,t.type,e))}}function um(t){Ss?ys?ys.push(t):ys=[t]:Ss=t}function fm(){if(Ss){var t=Ss,e=ys;if(ys=Ss=null,Ih(t),e)for(t=0;t<e.length;t++)Ih(e[t])}}function dm(t,e){return t(e)}function hm(){}var mc=!1;function pm(t,e,n){if(mc)return t(e,n);mc=!0;try{return dm(t,e,n)}finally{mc=!1,(Ss!==null||ys!==null)&&(hm(),fm())}}function Ea(t,e){var n=t.stateNode;if(n===null)return null;var i=Yl(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ne(231,e,typeof n));return n}var Lu=!1;if(bi)try{var js={};Object.defineProperty(js,"passive",{get:function(){Lu=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{Lu=!1}function E2(t,e,n,i,r,s,a,o,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(p){this.onError(p)}}var ha=!1,ul=null,fl=!1,Du=null,T2={onError:function(t){ha=!0,ul=t}};function w2(t,e,n,i,r,s,a,o,l){ha=!1,ul=null,E2.apply(T2,arguments)}function A2(t,e,n,i,r,s,a,o,l){if(w2.apply(this,arguments),ha){if(ha){var c=ul;ha=!1,ul=null}else throw Error(ne(198));fl||(fl=!0,Du=c)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function mm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uh(t){if(Vr(t)!==t)throw Error(ne(188))}function C2(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(ne(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Uh(r),t;if(s===i)return Uh(r),e;s=s.sibling}throw Error(ne(188))}if(n.return!==i.return)n=r,i=s;else{for(var a=!1,o=r.child;o;){if(o===n){a=!0,n=r,i=s;break}if(o===i){a=!0,i=r,n=s;break}o=o.sibling}if(!a){for(o=s.child;o;){if(o===n){a=!0,n=s,i=r;break}if(o===i){a=!0,i=s,n=r;break}o=o.sibling}if(!a)throw Error(ne(189))}}if(n.alternate!==i)throw Error(ne(190))}if(n.tag!==3)throw Error(ne(188));return n.stateNode.current===n?t:e}function gm(t){return t=C2(t),t!==null?vm(t):null}function vm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=vm(t);if(e!==null)return e;t=t.sibling}return null}var _m=Tn.unstable_scheduleCallback,Fh=Tn.unstable_cancelCallback,R2=Tn.unstable_shouldYield,b2=Tn.unstable_requestPaint,Ct=Tn.unstable_now,P2=Tn.unstable_getCurrentPriorityLevel,hd=Tn.unstable_ImmediatePriority,xm=Tn.unstable_UserBlockingPriority,dl=Tn.unstable_NormalPriority,L2=Tn.unstable_LowPriority,Sm=Tn.unstable_IdlePriority,Wl=null,li=null;function D2(t){if(li&&typeof li.onCommitFiberRoot=="function")try{li.onCommitFiberRoot(Wl,t,void 0,(t.current.flags&128)===128)}catch{}}var qn=Math.clz32?Math.clz32:U2,N2=Math.log,I2=Math.LN2;function U2(t){return t>>>=0,t===0?32:31-(N2(t)/I2|0)|0}var to=64,no=4194304;function la(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function hl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,a=n&268435455;if(a!==0){var o=a&~r;o!==0?i=la(o):(s&=a,s!==0&&(i=la(s)))}else a=n&~r,a!==0?i=la(a):s!==0&&(i=la(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-qn(e),r=1<<n,i|=t[n],e&=~r;return i}function F2(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function O2(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var a=31-qn(s),o=1<<a,l=r[a];l===-1?(!(o&n)||o&i)&&(r[a]=F2(o,e)):l<=e&&(t.expiredLanes|=o),s&=~o}}function Nu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ym(){var t=to;return to<<=1,!(to&4194240)&&(to=64),t}function gc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Va(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-qn(e),t[e]=n}function z2(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function pd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function Mm(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Em,md,Tm,wm,Am,Iu=!1,io=[],er=null,tr=null,nr=null,Ta=new Map,wa=new Map,Yi=[],B2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Oh(t,e){switch(t){case"focusin":case"focusout":er=null;break;case"dragenter":case"dragleave":tr=null;break;case"mouseover":case"mouseout":nr=null;break;case"pointerover":case"pointerout":Ta.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":wa.delete(e.pointerId)}}function Xs(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Ga(e),e!==null&&md(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function k2(t,e,n,i,r){switch(e){case"focusin":return er=Xs(er,t,e,n,i,r),!0;case"dragenter":return tr=Xs(tr,t,e,n,i,r),!0;case"mouseover":return nr=Xs(nr,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ta.set(s,Xs(Ta.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,wa.set(s,Xs(wa.get(s)||null,t,e,n,i,r)),!0}return!1}function Cm(t){var e=Tr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=mm(n),e!==null){t.blockedOn=e,Am(t.priority,function(){Tm(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Xo(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Uu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);bu=i,n.target.dispatchEvent(i),bu=null}else return e=Ga(n),e!==null&&md(e),t.blockedOn=n,!1;e.shift()}return!0}function zh(t,e,n){Xo(t)&&n.delete(e)}function V2(){Iu=!1,er!==null&&Xo(er)&&(er=null),tr!==null&&Xo(tr)&&(tr=null),nr!==null&&Xo(nr)&&(nr=null),Ta.forEach(zh),wa.forEach(zh)}function qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Iu||(Iu=!0,Tn.unstable_scheduleCallback(Tn.unstable_NormalPriority,V2)))}function Aa(t){function e(r){return qs(r,t)}if(0<io.length){qs(io[0],t);for(var n=1;n<io.length;n++){var i=io[n];i.blockedOn===t&&(i.blockedOn=null)}}for(er!==null&&qs(er,t),tr!==null&&qs(tr,t),nr!==null&&qs(nr,t),Ta.forEach(e),wa.forEach(e),n=0;n<Yi.length;n++)i=Yi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Yi.length&&(n=Yi[0],n.blockedOn===null);)Cm(n),n.blockedOn===null&&Yi.shift()}var Ms=Ui.ReactCurrentBatchConfig,pl=!0;function H2(t,e,n,i){var r=et,s=Ms.transition;Ms.transition=null;try{et=1,gd(t,e,n,i)}finally{et=r,Ms.transition=s}}function G2(t,e,n,i){var r=et,s=Ms.transition;Ms.transition=null;try{et=4,gd(t,e,n,i)}finally{et=r,Ms.transition=s}}function gd(t,e,n,i){if(pl){var r=Uu(t,e,n,i);if(r===null)Ac(t,e,i,ml,n),Oh(t,i);else if(k2(r,t,e,n,i))i.stopPropagation();else if(Oh(t,i),e&4&&-1<B2.indexOf(t)){for(;r!==null;){var s=Ga(r);if(s!==null&&Em(s),s=Uu(t,e,n,i),s===null&&Ac(t,e,i,ml,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Ac(t,e,i,null,n)}}var ml=null;function Uu(t,e,n,i){if(ml=null,t=dd(i),t=Tr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=mm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return ml=t,null}function Rm(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(P2()){case hd:return 1;case xm:return 4;case dl:case L2:return 16;case Sm:return 536870912;default:return 16}default:return 16}}var Zi=null,vd=null,qo=null;function bm(){if(qo)return qo;var t,e=vd,n=e.length,i,r="value"in Zi?Zi.value:Zi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var a=n-t;for(i=1;i<=a&&e[n-i]===r[s-i];i++);return qo=r.slice(t,1<i?1-i:void 0)}function Yo(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ro(){return!0}function Bh(){return!1}function An(t){function e(n,i,r,s,a){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=a,this.currentTarget=null;for(var o in t)t.hasOwnProperty(o)&&(n=t[o],this[o]=n?n(s):s[o]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ro:Bh,this.isPropagationStopped=Bh,this}return St(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ro)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ro)},persist:function(){},isPersistent:ro}),e}var Bs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=An(Bs),Ha=St({},Bs,{view:0,detail:0}),W2=An(Ha),vc,_c,Ys,jl=St({},Ha,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ys&&(Ys&&t.type==="mousemove"?(vc=t.screenX-Ys.screenX,_c=t.screenY-Ys.screenY):_c=vc=0,Ys=t),vc)},movementY:function(t){return"movementY"in t?t.movementY:_c}}),kh=An(jl),j2=St({},jl,{dataTransfer:0}),X2=An(j2),q2=St({},Ha,{relatedTarget:0}),xc=An(q2),Y2=St({},Bs,{animationName:0,elapsedTime:0,pseudoElement:0}),$2=An(Y2),K2=St({},Bs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Z2=An(K2),Q2=St({},Bs,{data:0}),Vh=An(Q2),J2={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ev={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},tv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nv(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=tv[t])?!!e[t]:!1}function xd(){return nv}var iv=St({},Ha,{key:function(t){if(t.key){var e=J2[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Yo(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ev[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xd,charCode:function(t){return t.type==="keypress"?Yo(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Yo(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rv=An(iv),sv=St({},jl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Hh=An(sv),av=St({},Ha,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xd}),ov=An(av),lv=St({},Bs,{propertyName:0,elapsedTime:0,pseudoElement:0}),cv=An(lv),uv=St({},jl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),fv=An(uv),dv=[9,13,27,32],Sd=bi&&"CompositionEvent"in window,pa=null;bi&&"documentMode"in document&&(pa=document.documentMode);var hv=bi&&"TextEvent"in window&&!pa,Pm=bi&&(!Sd||pa&&8<pa&&11>=pa),Gh=" ",Wh=!1;function Lm(t,e){switch(t){case"keyup":return dv.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dm(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var cs=!1;function pv(t,e){switch(t){case"compositionend":return Dm(e);case"keypress":return e.which!==32?null:(Wh=!0,Gh);case"textInput":return t=e.data,t===Gh&&Wh?null:t;default:return null}}function mv(t,e){if(cs)return t==="compositionend"||!Sd&&Lm(t,e)?(t=bm(),qo=vd=Zi=null,cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Pm&&e.locale!=="ko"?null:e.data;default:return null}}var gv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function jh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!gv[t.type]:e==="textarea"}function Nm(t,e,n,i){um(i),e=gl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var ma=null,Ca=null;function vv(t){Wm(t,0)}function Xl(t){var e=ds(t);if(im(e))return t}function _v(t,e){if(t==="change")return e}var Im=!1;if(bi){var Sc;if(bi){var yc="oninput"in document;if(!yc){var Xh=document.createElement("div");Xh.setAttribute("oninput","return;"),yc=typeof Xh.oninput=="function"}Sc=yc}else Sc=!1;Im=Sc&&(!document.documentMode||9<document.documentMode)}function qh(){ma&&(ma.detachEvent("onpropertychange",Um),Ca=ma=null)}function Um(t){if(t.propertyName==="value"&&Xl(Ca)){var e=[];Nm(e,Ca,t,dd(t)),pm(vv,e)}}function xv(t,e,n){t==="focusin"?(qh(),ma=e,Ca=n,ma.attachEvent("onpropertychange",Um)):t==="focusout"&&qh()}function Sv(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Xl(Ca)}function yv(t,e){if(t==="click")return Xl(e)}function Mv(t,e){if(t==="input"||t==="change")return Xl(e)}function Ev(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Ev;function Ra(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!vu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Fm(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Fm(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Om(){for(var t=window,e=cl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=cl(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tv(t){var e=Om(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Fm(n.ownerDocument.documentElement,n)){if(i!==null&&yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$h(n,s);var a=$h(n,i);r&&a&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==a.node||t.focusOffset!==a.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(a.node,a.offset)):(e.setEnd(a.node,a.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var wv=bi&&"documentMode"in document&&11>=document.documentMode,us=null,Fu=null,ga=null,Ou=!1;function Kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ou||us==null||us!==cl(i)||(i=us,"selectionStart"in i&&yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ga&&Ra(ga,i)||(ga=i,i=gl(Fu,"onSelect"),0<i.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=us)))}function so(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:so("Animation","AnimationEnd"),animationiteration:so("Animation","AnimationIteration"),animationstart:so("Animation","AnimationStart"),transitionend:so("Transition","TransitionEnd")},Mc={},zm={};bi&&(zm=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function ql(t){if(Mc[t])return Mc[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in zm)return Mc[t]=e[n];return t}var Bm=ql("animationend"),km=ql("animationiteration"),Vm=ql("animationstart"),Hm=ql("transitionend"),Gm=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function fr(t,e){Gm.set(t,e),kr(e,[t])}for(var Ec=0;Ec<Zh.length;Ec++){var Tc=Zh[Ec],Av=Tc.toLowerCase(),Cv=Tc[0].toUpperCase()+Tc.slice(1);fr(Av,"on"+Cv)}fr(Bm,"onAnimationEnd");fr(km,"onAnimationIteration");fr(Vm,"onAnimationStart");fr("dblclick","onDoubleClick");fr("focusin","onFocus");fr("focusout","onBlur");fr(Hm,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ca="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rv=new Set("cancel close invalid load scroll toggle".split(" ").concat(ca));function Qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,A2(i,e,void 0,t),t.currentTarget=null}function Wm(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var a=i.length-1;0<=a;a--){var o=i[a],l=o.instance,c=o.currentTarget;if(o=o.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,o,c),s=l}else for(a=0;a<i.length;a++){if(o=i[a],l=o.instance,c=o.currentTarget,o=o.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,o,c),s=l}}}if(fl)throw t=Du,fl=!1,Du=null,t}function ut(t,e){var n=e[Hu];n===void 0&&(n=e[Hu]=new Set);var i=t+"__bubble";n.has(i)||(jm(e,t,2,!1),n.add(i))}function wc(t,e,n){var i=0;e&&(i|=4),jm(n,t,i,e)}var ao="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[ao]){t[ao]=!0,Qp.forEach(function(n){n!=="selectionchange"&&(Rv.has(n)||wc(n,!1,t),wc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ao]||(e[ao]=!0,wc("selectionchange",!1,e))}}function jm(t,e,n,i){switch(Rm(e)){case 1:var r=H2;break;case 4:r=G2;break;default:r=gd}n=r.bind(null,e,n,t),r=void 0,!Lu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Ac(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var o=i.stateNode.containerInfo;if(o===r||o.nodeType===8&&o.parentNode===r)break;if(a===4)for(a=i.return;a!==null;){var l=a.tag;if((l===3||l===4)&&(l=a.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;a=a.return}for(;o!==null;){if(a=Tr(o),a===null)return;if(l=a.tag,l===5||l===6){i=s=a;continue e}o=o.parentNode}}i=i.return}pm(function(){var c=s,p=dd(n),h=[];e:{var f=Gm.get(t);if(f!==void 0){var m=_d,_=t;switch(t){case"keypress":if(Yo(n)===0)break e;case"keydown":case"keyup":m=rv;break;case"focusin":_="focus",m=xc;break;case"focusout":_="blur",m=xc;break;case"beforeblur":case"afterblur":m=xc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=X2;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=ov;break;case Bm:case km:case Vm:m=$2;break;case Hm:m=cv;break;case"scroll":m=W2;break;case"wheel":m=fv;break;case"copy":case"cut":case"paste":m=Z2;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Hh}var M=(e&4)!==0,g=!M&&t==="scroll",u=M?f!==null?f+"Capture":null:f;M=[];for(var d=c,v;d!==null;){v=d;var y=v.stateNode;if(v.tag===5&&y!==null&&(v=y,u!==null&&(y=Ea(d,u),y!=null&&M.push(Pa(d,y,v)))),g)break;d=d.return}0<M.length&&(f=new m(f,_,null,n,p),h.push({event:f,listeners:M}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",f&&n!==bu&&(_=n.relatedTarget||n.fromElement)&&(Tr(_)||_[Pi]))break e;if((m||f)&&(f=p.window===p?p:(f=p.ownerDocument)?f.defaultView||f.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=c,_=_?Tr(_):null,_!==null&&(g=Vr(_),_!==g||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=c),m!==_)){if(M=kh,y="onMouseLeave",u="onMouseEnter",d="mouse",(t==="pointerout"||t==="pointerover")&&(M=Hh,y="onPointerLeave",u="onPointerEnter",d="pointer"),g=m==null?f:ds(m),v=_==null?f:ds(_),f=new M(y,d+"leave",m,n,p),f.target=g,f.relatedTarget=v,y=null,Tr(p)===c&&(M=new M(u,d+"enter",_,n,p),M.target=v,M.relatedTarget=g,y=M),g=y,m&&_)t:{for(M=m,u=_,d=0,v=M;v;v=jr(v))d++;for(v=0,y=u;y;y=jr(y))v++;for(;0<d-v;)M=jr(M),d--;for(;0<v-d;)u=jr(u),v--;for(;d--;){if(M===u||u!==null&&M===u.alternate)break t;M=jr(M),u=jr(u)}M=null}else M=null;m!==null&&Jh(h,f,m,M,!1),_!==null&&g!==null&&Jh(h,g,_,M,!0)}}e:{if(f=c?ds(c):window,m=f.nodeName&&f.nodeName.toLowerCase(),m==="select"||m==="input"&&f.type==="file")var C=_v;else if(jh(f))if(Im)C=Mv;else{C=Sv;var T=xv}else(m=f.nodeName)&&m.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(C=yv);if(C&&(C=C(t,c))){Nm(h,C,n,p);break e}T&&T(t,f,c),t==="focusout"&&(T=f._wrapperState)&&T.controlled&&f.type==="number"&&Tu(f,"number",f.value)}switch(T=c?ds(c):window,t){case"focusin":(jh(T)||T.contentEditable==="true")&&(us=T,Fu=c,ga=null);break;case"focusout":ga=Fu=us=null;break;case"mousedown":Ou=!0;break;case"contextmenu":case"mouseup":case"dragend":Ou=!1,Kh(h,n,p);break;case"selectionchange":if(wv)break;case"keydown":case"keyup":Kh(h,n,p)}var R;if(Sd)e:{switch(t){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else cs?Lm(t,n)&&(x="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(x="onCompositionStart");x&&(Pm&&n.locale!=="ko"&&(cs||x!=="onCompositionStart"?x==="onCompositionEnd"&&cs&&(R=bm()):(Zi=p,vd="value"in Zi?Zi.value:Zi.textContent,cs=!0)),T=gl(c,x),0<T.length&&(x=new Vh(x,t,null,n,p),h.push({event:x,listeners:T}),R?x.data=R:(R=Dm(n),R!==null&&(x.data=R)))),(R=hv?pv(t,n):mv(t,n))&&(c=gl(c,"onBeforeInput"),0<c.length&&(p=new Vh("onBeforeInput","beforeinput",null,n,p),h.push({event:p,listeners:c}),p.data=R))}Wm(h,e)})}function Pa(t,e,n){return{instance:t,listener:e,currentTarget:n}}function gl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Ea(t,n),s!=null&&i.unshift(Pa(t,s,r)),s=Ea(t,e),s!=null&&i.push(Pa(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var s=e._reactName,a=[];n!==null&&n!==i;){var o=n,l=o.alternate,c=o.stateNode;if(l!==null&&l===i)break;o.tag===5&&c!==null&&(o=c,r?(l=Ea(n,s),l!=null&&a.unshift(Pa(n,l,o))):r||(l=Ea(n,s),l!=null&&a.push(Pa(n,l,o)))),n=n.return}a.length!==0&&t.push({event:e,listeners:a})}var bv=/\r\n?/g,Pv=/\u0000|\uFFFD/g;function e0(t){return(typeof t=="string"?t:""+t).replace(bv,`
`).replace(Pv,"")}function oo(t,e,n){if(e=e0(e),e0(t)!==e&&n)throw Error(ne(425))}function vl(){}var zu=null,Bu=null;function ku(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Vu=typeof setTimeout=="function"?setTimeout:void 0,Lv=typeof clearTimeout=="function"?clearTimeout:void 0,t0=typeof Promise=="function"?Promise:void 0,Dv=typeof queueMicrotask=="function"?queueMicrotask:typeof t0<"u"?function(t){return t0.resolve(null).then(t).catch(Nv)}:Vu;function Nv(t){setTimeout(function(){throw t})}function Cc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Aa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Aa(e)}function ir(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function n0(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var ks=Math.random().toString(36).slice(2),si="__reactFiber$"+ks,La="__reactProps$"+ks,Pi="__reactContainer$"+ks,Hu="__reactEvents$"+ks,Iv="__reactListeners$"+ks,Uv="__reactHandles$"+ks;function Tr(t){var e=t[si];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Pi]||n[si]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=n0(t);t!==null;){if(n=t[si])return n;t=n0(t)}return e}t=n,n=t.parentNode}return null}function Ga(t){return t=t[si]||t[Pi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ne(33))}function Yl(t){return t[La]||null}var Gu=[],hs=-1;function dr(t){return{current:t}}function ft(t){0>hs||(t.current=Gu[hs],Gu[hs]=null,hs--)}function lt(t,e){hs++,Gu[hs]=t.current,t.current=e}var cr={},en=dr(cr),hn=dr(!1),Dr=cr;function Rs(t,e){var n=t.type.contextTypes;if(!n)return cr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function pn(t){return t=t.childContextTypes,t!=null}function _l(){ft(hn),ft(en)}function i0(t,e,n){if(en.current!==cr)throw Error(ne(168));lt(en,e),lt(hn,n)}function Xm(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,x2(t)||"Unknown",r));return St({},n,i)}function xl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||cr,Dr=en.current,lt(en,t),lt(hn,hn.current),!0}function r0(t,e,n){var i=t.stateNode;if(!i)throw Error(ne(169));n?(t=Xm(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,ft(hn),ft(en),lt(en,t)):ft(hn),lt(hn,n)}var yi=null,$l=!1,Rc=!1;function qm(t){yi===null?yi=[t]:yi.push(t)}function Fv(t){$l=!0,qm(t)}function hr(){if(!Rc&&yi!==null){Rc=!0;var t=0,e=et;try{var n=yi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}yi=null,$l=!1}catch(r){throw yi!==null&&(yi=yi.slice(t+1)),_m(hd,hr),r}finally{et=e,Rc=!1}}return null}var ps=[],ms=0,Sl=null,yl=0,Pn=[],Ln=0,Nr=null,Ei=1,Ti="";function xr(t,e){ps[ms++]=yl,ps[ms++]=Sl,Sl=t,yl=e}function Ym(t,e,n){Pn[Ln++]=Ei,Pn[Ln++]=Ti,Pn[Ln++]=Nr,Nr=t;var i=Ei;t=Ti;var r=32-qn(i)-1;i&=~(1<<r),n+=1;var s=32-qn(e)+r;if(30<s){var a=r-r%5;s=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Ei=1<<32-qn(e)+r|n<<r|i,Ti=s+t}else Ei=1<<s|n<<r|i,Ti=t}function Md(t){t.return!==null&&(xr(t,1),Ym(t,1,0))}function Ed(t){for(;t===Sl;)Sl=ps[--ms],ps[ms]=null,yl=ps[--ms],ps[ms]=null;for(;t===Nr;)Nr=Pn[--Ln],Pn[Ln]=null,Ti=Pn[--Ln],Pn[Ln]=null,Ei=Pn[--Ln],Pn[Ln]=null}var En=null,Mn=null,dt=!1,jn=null;function $m(t,e){var n=Un(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function s0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=ir(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:Ei,overflow:Ti}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Un(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Wu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function ju(t){if(dt){var e=Mn;if(e){var n=e;if(!s0(t,e)){if(Wu(t))throw Error(ne(418));e=ir(n.nextSibling);var i=En;e&&s0(t,e)?$m(i,n):(t.flags=t.flags&-4097|2,dt=!1,En=t)}}else{if(Wu(t))throw Error(ne(418));t.flags=t.flags&-4097|2,dt=!1,En=t}}}function a0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function lo(t){if(t!==En)return!1;if(!dt)return a0(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!ku(t.type,t.memoizedProps)),e&&(e=Mn)){if(Wu(t))throw Km(),Error(ne(418));for(;e;)$m(t,e),e=ir(e.nextSibling)}if(a0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ne(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=ir(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?ir(t.stateNode.nextSibling):null;return!0}function Km(){for(var t=Mn;t;)t=ir(t.nextSibling)}function bs(){Mn=En=null,dt=!1}function Td(t){jn===null?jn=[t]:jn.push(t)}var Ov=Ui.ReactCurrentBatchConfig;function $s(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ne(309));var i=n.stateNode}if(!i)throw Error(ne(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(a){var o=r.refs;a===null?delete o[s]:o[s]=a},e._stringRef=s,e)}if(typeof t!="string")throw Error(ne(284));if(!n._owner)throw Error(ne(290,t))}return t}function co(t,e){throw t=Object.prototype.toString.call(e),Error(ne(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function o0(t){var e=t._init;return e(t._payload)}function Zm(t){function e(u,d){if(t){var v=u.deletions;v===null?(u.deletions=[d],u.flags|=16):v.push(d)}}function n(u,d){if(!t)return null;for(;d!==null;)e(u,d),d=d.sibling;return null}function i(u,d){for(u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function r(u,d){return u=or(u,d),u.index=0,u.sibling=null,u}function s(u,d,v){return u.index=v,t?(v=u.alternate,v!==null?(v=v.index,v<d?(u.flags|=2,d):v):(u.flags|=2,d)):(u.flags|=1048576,d)}function a(u){return t&&u.alternate===null&&(u.flags|=2),u}function o(u,d,v,y){return d===null||d.tag!==6?(d=Uc(v,u.mode,y),d.return=u,d):(d=r(d,v),d.return=u,d)}function l(u,d,v,y){var C=v.type;return C===ls?p(u,d,v.props.children,y,v.key):d!==null&&(d.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&o0(C)===d.type)?(y=r(d,v.props),y.ref=$s(u,d,v),y.return=u,y):(y=tl(v.type,v.key,v.props,null,u.mode,y),y.ref=$s(u,d,v),y.return=u,y)}function c(u,d,v,y){return d===null||d.tag!==4||d.stateNode.containerInfo!==v.containerInfo||d.stateNode.implementation!==v.implementation?(d=Fc(v,u.mode,y),d.return=u,d):(d=r(d,v.children||[]),d.return=u,d)}function p(u,d,v,y,C){return d===null||d.tag!==7?(d=Lr(v,u.mode,y,C),d.return=u,d):(d=r(d,v),d.return=u,d)}function h(u,d,v){if(typeof d=="string"&&d!==""||typeof d=="number")return d=Uc(""+d,u.mode,v),d.return=u,d;if(typeof d=="object"&&d!==null){switch(d.$$typeof){case Qa:return v=tl(d.type,d.key,d.props,null,u.mode,v),v.ref=$s(u,null,d),v.return=u,v;case os:return d=Fc(d,u.mode,v),d.return=u,d;case Xi:var y=d._init;return h(u,y(d._payload),v)}if(oa(d)||Ws(d))return d=Lr(d,u.mode,v,null),d.return=u,d;co(u,d)}return null}function f(u,d,v,y){var C=d!==null?d.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return C!==null?null:o(u,d,""+v,y);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:return v.key===C?l(u,d,v,y):null;case os:return v.key===C?c(u,d,v,y):null;case Xi:return C=v._init,f(u,d,C(v._payload),y)}if(oa(v)||Ws(v))return C!==null?null:p(u,d,v,y,null);co(u,v)}return null}function m(u,d,v,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return u=u.get(v)||null,o(d,u,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Qa:return u=u.get(y.key===null?v:y.key)||null,l(d,u,y,C);case os:return u=u.get(y.key===null?v:y.key)||null,c(d,u,y,C);case Xi:var T=y._init;return m(u,d,v,T(y._payload),C)}if(oa(y)||Ws(y))return u=u.get(v)||null,p(d,u,y,C,null);co(d,y)}return null}function _(u,d,v,y){for(var C=null,T=null,R=d,x=d=0,b=null;R!==null&&x<v.length;x++){R.index>x?(b=R,R=null):b=R.sibling;var L=f(u,R,v[x],y);if(L===null){R===null&&(R=b);break}t&&R&&L.alternate===null&&e(u,R),d=s(L,d,x),T===null?C=L:T.sibling=L,T=L,R=b}if(x===v.length)return n(u,R),dt&&xr(u,x),C;if(R===null){for(;x<v.length;x++)R=h(u,v[x],y),R!==null&&(d=s(R,d,x),T===null?C=R:T.sibling=R,T=R);return dt&&xr(u,x),C}for(R=i(u,R);x<v.length;x++)b=m(R,u,x,v[x],y),b!==null&&(t&&b.alternate!==null&&R.delete(b.key===null?x:b.key),d=s(b,d,x),T===null?C=b:T.sibling=b,T=b);return t&&R.forEach(function(P){return e(u,P)}),dt&&xr(u,x),C}function M(u,d,v,y){var C=Ws(v);if(typeof C!="function")throw Error(ne(150));if(v=C.call(v),v==null)throw Error(ne(151));for(var T=C=null,R=d,x=d=0,b=null,L=v.next();R!==null&&!L.done;x++,L=v.next()){R.index>x?(b=R,R=null):b=R.sibling;var P=f(u,R,L.value,y);if(P===null){R===null&&(R=b);break}t&&R&&P.alternate===null&&e(u,R),d=s(P,d,x),T===null?C=P:T.sibling=P,T=P,R=b}if(L.done)return n(u,R),dt&&xr(u,x),C;if(R===null){for(;!L.done;x++,L=v.next())L=h(u,L.value,y),L!==null&&(d=s(L,d,x),T===null?C=L:T.sibling=L,T=L);return dt&&xr(u,x),C}for(R=i(u,R);!L.done;x++,L=v.next())L=m(R,u,x,L.value,y),L!==null&&(t&&L.alternate!==null&&R.delete(L.key===null?x:L.key),d=s(L,d,x),T===null?C=L:T.sibling=L,T=L);return t&&R.forEach(function(z){return e(u,z)}),dt&&xr(u,x),C}function g(u,d,v,y){if(typeof v=="object"&&v!==null&&v.type===ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case Qa:e:{for(var C=v.key,T=d;T!==null;){if(T.key===C){if(C=v.type,C===ls){if(T.tag===7){n(u,T.sibling),d=r(T,v.props.children),d.return=u,u=d;break e}}else if(T.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Xi&&o0(C)===T.type){n(u,T.sibling),d=r(T,v.props),d.ref=$s(u,T,v),d.return=u,u=d;break e}n(u,T);break}else e(u,T);T=T.sibling}v.type===ls?(d=Lr(v.props.children,u.mode,y,v.key),d.return=u,u=d):(y=tl(v.type,v.key,v.props,null,u.mode,y),y.ref=$s(u,d,v),y.return=u,u=y)}return a(u);case os:e:{for(T=v.key;d!==null;){if(d.key===T)if(d.tag===4&&d.stateNode.containerInfo===v.containerInfo&&d.stateNode.implementation===v.implementation){n(u,d.sibling),d=r(d,v.children||[]),d.return=u,u=d;break e}else{n(u,d);break}else e(u,d);d=d.sibling}d=Fc(v,u.mode,y),d.return=u,u=d}return a(u);case Xi:return T=v._init,g(u,d,T(v._payload),y)}if(oa(v))return _(u,d,v,y);if(Ws(v))return M(u,d,v,y);co(u,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,d!==null&&d.tag===6?(n(u,d.sibling),d=r(d,v),d.return=u,u=d):(n(u,d),d=Uc(v,u.mode,y),d.return=u,u=d),a(u)):n(u,d)}return g}var Ps=Zm(!0),Qm=Zm(!1),Ml=dr(null),El=null,gs=null,wd=null;function Ad(){wd=gs=El=null}function Cd(t){var e=Ml.current;ft(Ml),t._currentValue=e}function Xu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Es(t,e){El=t,wd=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(dn=!0),t.firstContext=null)}function On(t){var e=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(El===null)throw Error(ne(308));gs=t,El.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var wr=null;function Rd(t){wr===null?wr=[t]:wr.push(t)}function Jm(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Rd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Li(t,i)}function Li(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var qi=!1;function bd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function e1(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ai(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,$e&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Li(t,n)}return r=i.interleaved,r===null?(e.next=e,Rd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Li(t,n)}function $o(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}function l0(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var a={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=a:s=s.next=a,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Tl(t,e,n,i){var r=t.updateQueue;qi=!1;var s=r.firstBaseUpdate,a=r.lastBaseUpdate,o=r.shared.pending;if(o!==null){r.shared.pending=null;var l=o,c=l.next;l.next=null,a===null?s=c:a.next=c,a=l;var p=t.alternate;p!==null&&(p=p.updateQueue,o=p.lastBaseUpdate,o!==a&&(o===null?p.firstBaseUpdate=c:o.next=c,p.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;a=0,p=c=l=null,o=s;do{var f=o.lane,m=o.eventTime;if((i&f)===f){p!==null&&(p=p.next={eventTime:m,lane:0,tag:o.tag,payload:o.payload,callback:o.callback,next:null});e:{var _=t,M=o;switch(f=e,m=n,M.tag){case 1:if(_=M.payload,typeof _=="function"){h=_.call(m,h,f);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=M.payload,f=typeof _=="function"?_.call(m,h,f):_,f==null)break e;h=St({},h,f);break e;case 2:qi=!0}}o.callback!==null&&o.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[o]:f.push(o))}else m={eventTime:m,lane:f,tag:o.tag,payload:o.payload,callback:o.callback,next:null},p===null?(c=p=m,l=h):p=p.next=m,a|=f;if(o=o.next,o===null){if(o=r.shared.pending,o===null)break;f=o,o=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(p===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=p,e=r.shared.interleaved,e!==null){r=e;do a|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=a,t.lanes=a,t.memoizedState=h}}function c0(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Wa={},ci=dr(Wa),Da=dr(Wa),Na=dr(Wa);function Ar(t){if(t===Wa)throw Error(ne(174));return t}function Pd(t,e){switch(lt(Na,e),lt(Da,t),lt(ci,Wa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Au(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Au(e,t)}ft(ci),lt(ci,e)}function Ls(){ft(ci),ft(Da),ft(Na)}function t1(t){Ar(Na.current);var e=Ar(ci.current),n=Au(e,t.type);e!==n&&(lt(Da,t),lt(ci,n))}function Ld(t){Da.current===t&&(ft(ci),ft(Da))}var _t=dr(0);function wl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var bc=[];function Dd(){for(var t=0;t<bc.length;t++)bc[t]._workInProgressVersionPrimary=null;bc.length=0}var Ko=Ui.ReactCurrentDispatcher,Pc=Ui.ReactCurrentBatchConfig,Ir=0,xt=null,Ut=null,kt=null,Al=!1,va=!1,Ia=0,zv=0;function Yt(){throw Error(ne(321))}function Nd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Id(t,e,n,i,r,s){if(Ir=s,xt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ko.current=t===null||t.memoizedState===null?Hv:Gv,t=n(i,r),va){s=0;do{if(va=!1,Ia=0,25<=s)throw Error(ne(301));s+=1,kt=Ut=null,e.updateQueue=null,Ko.current=Wv,t=n(i,r)}while(va)}if(Ko.current=Cl,e=Ut!==null&&Ut.next!==null,Ir=0,kt=Ut=xt=null,Al=!1,e)throw Error(ne(300));return t}function Ud(){var t=Ia!==0;return Ia=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?xt.memoizedState=kt=t:kt=kt.next=t,kt}function zn(){if(Ut===null){var t=xt.alternate;t=t!==null?t.memoizedState:null}else t=Ut.next;var e=kt===null?xt.memoizedState:kt.next;if(e!==null)kt=e,Ut=t;else{if(t===null)throw Error(ne(310));Ut=t,t={memoizedState:Ut.memoizedState,baseState:Ut.baseState,baseQueue:Ut.baseQueue,queue:Ut.queue,next:null},kt===null?xt.memoizedState=kt=t:kt=kt.next=t}return kt}function Ua(t,e){return typeof e=="function"?e(t):e}function Lc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=Ut,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var a=r.next;r.next=s.next,s.next=a}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var o=a=null,l=null,c=s;do{var p=c.lane;if((Ir&p)===p)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:p,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(o=l=h,a=i):l=l.next=h,xt.lanes|=p,Ur|=p}c=c.next}while(c!==null&&c!==s);l===null?a=i:l.next=o,Kn(i,e.memoizedState)||(dn=!0),e.memoizedState=i,e.baseState=a,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,xt.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Dc(t){var e=zn(),n=e.queue;if(n===null)throw Error(ne(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var a=r=r.next;do s=t(s,a.action),a=a.next;while(a!==r);Kn(s,e.memoizedState)||(dn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function n1(){}function i1(t,e){var n=xt,i=zn(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,dn=!0),i=i.queue,Fd(a1.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||kt!==null&&kt.memoizedState.tag&1){if(n.flags|=2048,Fa(9,s1.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ne(349));Ir&30||r1(n,e,r)}return r}function r1(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function s1(t,e,n,i){e.value=n,e.getSnapshot=i,o1(e)&&l1(t)}function a1(t,e,n){return n(function(){o1(e)&&l1(t)})}function o1(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function l1(t){var e=Li(t,1);e!==null&&Yn(e,t,1,-1)}function u0(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:t},e.queue=t,t=t.dispatch=Vv.bind(null,xt,t),[e.memoizedState,t]}function Fa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=xt.updateQueue,e===null?(e={lastEffect:null,stores:null},xt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function c1(){return zn().memoizedState}function Zo(t,e,n,i){var r=ii();xt.flags|=t,r.memoizedState=Fa(1|e,n,void 0,i===void 0?null:i)}function Kl(t,e,n,i){var r=zn();i=i===void 0?null:i;var s=void 0;if(Ut!==null){var a=Ut.memoizedState;if(s=a.destroy,i!==null&&Nd(i,a.deps)){r.memoizedState=Fa(e,n,s,i);return}}xt.flags|=t,r.memoizedState=Fa(1|e,n,s,i)}function f0(t,e){return Zo(8390656,8,t,e)}function Fd(t,e){return Kl(2048,8,t,e)}function u1(t,e){return Kl(4,2,t,e)}function f1(t,e){return Kl(4,4,t,e)}function d1(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function h1(t,e,n){return n=n!=null?n.concat([t]):null,Kl(4,4,d1.bind(null,e,t),n)}function Od(){}function p1(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function m1(t,e){var n=zn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Nd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function g1(t,e,n){return Ir&21?(Kn(n,e)||(n=ym(),xt.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,dn=!0),t.memoizedState=n)}function Bv(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=Pc.transition;Pc.transition={};try{t(!1),e()}finally{et=n,Pc.transition=i}}function v1(){return zn().memoizedState}function kv(t,e,n){var i=ar(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},_1(t))x1(e,n);else if(n=Jm(t,e,n,i),n!==null){var r=sn();Yn(n,t,i,r),S1(n,e,i)}}function Vv(t,e,n){var i=ar(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(_1(t))x1(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var a=e.lastRenderedState,o=s(a,n);if(r.hasEagerState=!0,r.eagerState=o,Kn(o,a)){var l=e.interleaved;l===null?(r.next=r,Rd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Jm(t,e,r,i),n!==null&&(r=sn(),Yn(n,t,i,r),S1(n,e,i))}}function _1(t){var e=t.alternate;return t===xt||e!==null&&e===xt}function x1(t,e){va=Al=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function S1(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,pd(t,n)}}var Cl={readContext:On,useCallback:Yt,useContext:Yt,useEffect:Yt,useImperativeHandle:Yt,useInsertionEffect:Yt,useLayoutEffect:Yt,useMemo:Yt,useReducer:Yt,useRef:Yt,useState:Yt,useDebugValue:Yt,useDeferredValue:Yt,useTransition:Yt,useMutableSource:Yt,useSyncExternalStore:Yt,useId:Yt,unstable_isNewReconciler:!1},Hv={readContext:On,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:On,useEffect:f0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Zo(4194308,4,d1.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Zo(4194308,4,t,e)},useInsertionEffect:function(t,e){return Zo(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=kv.bind(null,xt,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:u0,useDebugValue:Od,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=u0(!1),e=t[0];return t=Bv.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=xt,r=ii();if(dt){if(n===void 0)throw Error(ne(407));n=n()}else{if(n=e(),Ht===null)throw Error(ne(349));Ir&30||r1(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,f0(a1.bind(null,i,s,t),[t]),i.flags|=2048,Fa(9,s1.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Ht.identifierPrefix;if(dt){var n=Ti,i=Ei;n=(i&~(1<<32-qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=zv++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Gv={readContext:On,useCallback:p1,useContext:On,useEffect:Fd,useImperativeHandle:h1,useInsertionEffect:u1,useLayoutEffect:f1,useMemo:m1,useReducer:Lc,useRef:c1,useState:function(){return Lc(Ua)},useDebugValue:Od,useDeferredValue:function(t){var e=zn();return g1(e,Ut.memoizedState,t)},useTransition:function(){var t=Lc(Ua)[0],e=zn().memoizedState;return[t,e]},useMutableSource:n1,useSyncExternalStore:i1,useId:v1,unstable_isNewReconciler:!1},Wv={readContext:On,useCallback:p1,useContext:On,useEffect:Fd,useImperativeHandle:h1,useInsertionEffect:u1,useLayoutEffect:f1,useMemo:m1,useReducer:Dc,useRef:c1,useState:function(){return Dc(Ua)},useDebugValue:Od,useDeferredValue:function(t){var e=zn();return Ut===null?e.memoizedState=t:g1(e,Ut.memoizedState,t)},useTransition:function(){var t=Dc(Ua)[0],e=zn().memoizedState;return[t,e]},useMutableSource:n1,useSyncExternalStore:i1,useId:v1,unstable_isNewReconciler:!1};function Gn(t,e){if(t&&t.defaultProps){e=St({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function qu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:St({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Zl={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ar(t),s=Ai(i,r);s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Yn(e,t,r,i),$o(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=sn(),r=ar(t),s=Ai(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=rr(t,s,r),e!==null&&(Yn(e,t,r,i),$o(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=sn(),i=ar(t),r=Ai(n,i);r.tag=2,e!=null&&(r.callback=e),e=rr(t,r,i),e!==null&&(Yn(e,t,i,n),$o(e,t,i))}};function d0(t,e,n,i,r,s,a){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,a):e.prototype&&e.prototype.isPureReactComponent?!Ra(n,i)||!Ra(r,s):!0}function y1(t,e,n){var i=!1,r=cr,s=e.contextType;return typeof s=="object"&&s!==null?s=On(s):(r=pn(e)?Dr:en.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):cr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Zl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function h0(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Zl.enqueueReplaceState(e,e.state,null)}function Yu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},bd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=On(s):(s=pn(e)?Dr:en.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(qu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Zl.enqueueReplaceState(r,r.state,null),Tl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=_2(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Nc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function $u(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var jv=typeof WeakMap=="function"?WeakMap:Map;function M1(t,e,n){n=Ai(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){bl||(bl=!0,af=i),$u(t,e)},n}function E1(t,e,n){n=Ai(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){$u(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){$u(t,e),typeof i!="function"&&(sr===null?sr=new Set([this]):sr.add(this));var a=e.stack;this.componentDidCatch(e.value,{componentStack:a!==null?a:""})}),n}function p0(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new jv;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=s_.bind(null,t,e,n),e.then(t,t))}function m0(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function g0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ai(-1,1),e.tag=2,rr(n,e,1))),n.lanes|=1),t)}var Xv=Ui.ReactCurrentOwner,dn=!1;function rn(t,e,n,i){e.child=t===null?Qm(e,null,n,i):Ps(e,t.child,n,i)}function v0(t,e,n,i,r){n=n.render;var s=e.ref;return Es(e,r),i=Id(t,e,n,i,s,r),n=Ud(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(dt&&n&&Md(e),e.flags|=1,rn(t,e,i,r),e.child)}function _0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!jd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,T1(t,e,s,i,r)):(t=tl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var a=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ra,n(a,i)&&t.ref===e.ref)return Di(t,e,r)}return e.flags|=1,t=or(s,i),t.ref=e.ref,t.return=e,e.child=t}function T1(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ra(s,i)&&t.ref===e.ref)if(dn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(dn=!0);else return e.lanes=t.lanes,Di(t,e,r)}return Ku(t,e,n,i,r)}function w1(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},lt(_s,yn),yn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,lt(_s,yn),yn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,lt(_s,yn),yn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,lt(_s,yn),yn|=i;return rn(t,e,r,n),e.child}function A1(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Ku(t,e,n,i,r){var s=pn(n)?Dr:en.current;return s=Rs(e,s),Es(e,r),n=Id(t,e,n,i,s,r),i=Ud(),t!==null&&!dn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Di(t,e,r)):(dt&&i&&Md(e),e.flags|=1,rn(t,e,n,r),e.child)}function x0(t,e,n,i,r){if(pn(n)){var s=!0;xl(e)}else s=!1;if(Es(e,r),e.stateNode===null)Qo(t,e),y1(e,n,i),Yu(e,n,i,r),i=!0;else if(t===null){var a=e.stateNode,o=e.memoizedProps;a.props=o;var l=a.context,c=n.contextType;typeof c=="object"&&c!==null?c=On(c):(c=pn(n)?Dr:en.current,c=Rs(e,c));var p=n.getDerivedStateFromProps,h=typeof p=="function"||typeof a.getSnapshotBeforeUpdate=="function";h||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==i||l!==c)&&h0(e,a,i,c),qi=!1;var f=e.memoizedState;a.state=f,Tl(e,i,a,r),l=e.memoizedState,o!==i||f!==l||hn.current||qi?(typeof p=="function"&&(qu(e,n,p,i),l=e.memoizedState),(o=qi||d0(e,n,o,i,f,l,c))?(h||typeof a.UNSAFE_componentWillMount!="function"&&typeof a.componentWillMount!="function"||(typeof a.componentWillMount=="function"&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount=="function"&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount=="function"&&(e.flags|=4194308)):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),a.props=i,a.state=l,a.context=c,i=o):(typeof a.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{a=e.stateNode,e1(t,e),o=e.memoizedProps,c=e.type===e.elementType?o:Gn(e.type,o),a.props=c,h=e.pendingProps,f=a.context,l=n.contextType,typeof l=="object"&&l!==null?l=On(l):(l=pn(n)?Dr:en.current,l=Rs(e,l));var m=n.getDerivedStateFromProps;(p=typeof m=="function"||typeof a.getSnapshotBeforeUpdate=="function")||typeof a.UNSAFE_componentWillReceiveProps!="function"&&typeof a.componentWillReceiveProps!="function"||(o!==h||f!==l)&&h0(e,a,i,l),qi=!1,f=e.memoizedState,a.state=f,Tl(e,i,a,r);var _=e.memoizedState;o!==h||f!==_||hn.current||qi?(typeof m=="function"&&(qu(e,n,m,i),_=e.memoizedState),(c=qi||d0(e,n,c,i,f,_,l)||!1)?(p||typeof a.UNSAFE_componentWillUpdate!="function"&&typeof a.componentWillUpdate!="function"||(typeof a.componentWillUpdate=="function"&&a.componentWillUpdate(i,_,l),typeof a.UNSAFE_componentWillUpdate=="function"&&a.UNSAFE_componentWillUpdate(i,_,l)),typeof a.componentDidUpdate=="function"&&(e.flags|=4),typeof a.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),a.props=i,a.state=_,a.context=l,i=c):(typeof a.componentDidUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof a.getSnapshotBeforeUpdate!="function"||o===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return Zu(t,e,n,i,s,r)}function Zu(t,e,n,i,r,s){A1(t,e);var a=(e.flags&128)!==0;if(!i&&!a)return r&&r0(e,n,!1),Di(t,e,s);i=e.stateNode,Xv.current=e;var o=a&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&a?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,o,s)):rn(t,e,o,s),e.memoizedState=i.state,r&&r0(e,n,!0),e.child}function C1(t){var e=t.stateNode;e.pendingContext?i0(t,e.pendingContext,e.pendingContext!==e.context):e.context&&i0(t,e.context,!1),Pd(t,e.containerInfo)}function S0(t,e,n,i,r){return bs(),Td(r),e.flags|=256,rn(t,e,n,i),e.child}var Qu={dehydrated:null,treeContext:null,retryLane:0};function Ju(t){return{baseLanes:t,cachePool:null,transitions:null}}function R1(t,e,n){var i=e.pendingProps,r=_t.current,s=!1,a=(e.flags&128)!==0,o;if((o=a)||(o=t!==null&&t.memoizedState===null?!1:(r&2)!==0),o?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),lt(_t,r&1),t===null)return ju(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(a=i.children,t=i.fallback,s?(i=e.mode,s=e.child,a={mode:"hidden",children:a},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=a):s=ec(a,i,0,null),t=Lr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ju(n),e.memoizedState=Qu,t):zd(e,a));if(r=t.memoizedState,r!==null&&(o=r.dehydrated,o!==null))return qv(t,e,a,i,o,r,n);if(s){s=i.fallback,a=e.mode,r=t.child,o=r.sibling;var l={mode:"hidden",children:i.children};return!(a&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=or(r,l),i.subtreeFlags=r.subtreeFlags&14680064),o!==null?s=or(o,s):(s=Lr(s,a,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,a=t.child.memoizedState,a=a===null?Ju(n):{baseLanes:a.baseLanes|n,cachePool:null,transitions:a.transitions},s.memoizedState=a,s.childLanes=t.childLanes&~n,e.memoizedState=Qu,i}return s=t.child,t=s.sibling,i=or(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function zd(t,e){return e=ec({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function uo(t,e,n,i){return i!==null&&Td(i),Ps(e,t.child,null,n),t=zd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qv(t,e,n,i,r,s,a){if(n)return e.flags&256?(e.flags&=-257,i=Nc(Error(ne(422))),uo(t,e,a,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=ec({mode:"visible",children:i.children},r,0,null),s=Lr(s,r,a,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,a),e.child.memoizedState=Ju(a),e.memoizedState=Qu,s);if(!(e.mode&1))return uo(t,e,a,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var o=i.dgst;return i=o,s=Error(ne(419)),i=Nc(s,i,void 0),uo(t,e,a,i)}if(o=(a&t.childLanes)!==0,dn||o){if(i=Ht,i!==null){switch(a&-a){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|a)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Li(t,r),Yn(i,t,r,-1))}return Wd(),i=Nc(Error(ne(421))),uo(t,e,a,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=a_.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=ir(r.nextSibling),En=e,dt=!0,jn=null,t!==null&&(Pn[Ln++]=Ei,Pn[Ln++]=Ti,Pn[Ln++]=Nr,Ei=t.id,Ti=t.overflow,Nr=e),e=zd(e,i.children),e.flags|=4096,e)}function y0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Xu(t.return,e,n)}function Ic(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function b1(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(rn(t,e,i.children,n),i=_t.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&y0(t,n,e);else if(t.tag===19)y0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(lt(_t,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&wl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Ic(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&wl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Ic(e,!0,n,null,s);break;case"together":Ic(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Qo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Di(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ne(153));if(e.child!==null){for(t=e.child,n=or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Yv(t,e,n){switch(e.tag){case 3:C1(e),bs();break;case 5:t1(e);break;case 1:pn(e.type)&&xl(e);break;case 4:Pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;lt(Ml,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(lt(_t,_t.current&1),e.flags|=128,null):n&e.child.childLanes?R1(t,e,n):(lt(_t,_t.current&1),t=Di(t,e,n),t!==null?t.sibling:null);lt(_t,_t.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return b1(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),lt(_t,_t.current),i)break;return null;case 22:case 23:return e.lanes=0,w1(t,e,n)}return Di(t,e,n)}var P1,ef,L1,D1;P1=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};ef=function(){};L1=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(ci.current);var s=null;switch(n){case"input":r=Mu(t,r),i=Mu(t,i),s=[];break;case"select":r=St({},r,{value:void 0}),i=St({},i,{value:void 0}),s=[];break;case"textarea":r=wu(t,r),i=wu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=vl)}Cu(n,i);var a;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var o=r[c];for(a in o)o.hasOwnProperty(a)&&(n||(n={}),n[a]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(ya.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(o=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==o&&(l!=null||o!=null))if(c==="style")if(o){for(a in o)!o.hasOwnProperty(a)||l&&l.hasOwnProperty(a)||(n||(n={}),n[a]="");for(a in l)l.hasOwnProperty(a)&&o[a]!==l[a]&&(n||(n={}),n[a]=l[a])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,o=o?o.__html:void 0,l!=null&&o!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(ya.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||o===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};D1=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function $t(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function $v(t,e,n){var i=e.pendingProps;switch(Ed(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $t(e),null;case 1:return pn(e.type)&&_l(),$t(e),null;case 3:return i=e.stateNode,Ls(),ft(hn),ft(en),Dd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(lo(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,jn!==null&&(cf(jn),jn=null))),ef(t,e),$t(e),null;case 5:Ld(e);var r=Ar(Na.current);if(n=e.type,t!==null&&e.stateNode!=null)L1(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return $t(e),null}if(t=Ar(ci.current),lo(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[si]=e,i[La]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<ca.length;r++)ut(ca[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Ph(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Dh(i,s),ut("invalid",i)}Cu(n,s),r=null;for(var a in s)if(s.hasOwnProperty(a)){var o=s[a];a==="children"?typeof o=="string"?i.textContent!==o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",o]):typeof o=="number"&&i.textContent!==""+o&&(s.suppressHydrationWarning!==!0&&oo(i.textContent,o,t),r=["children",""+o]):ya.hasOwnProperty(a)&&o!=null&&a==="onScroll"&&ut("scroll",i)}switch(n){case"input":Ja(i),Lh(i,s,!0);break;case"textarea":Ja(i),Nh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=vl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{a=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=am(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=a.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=a.createElement(n,{is:i.is}):(t=a.createElement(n),n==="select"&&(a=t,i.multiple?a.multiple=!0:i.size&&(a.size=i.size))):t=a.createElementNS(t,n),t[si]=e,t[La]=i,P1(t,e,!1,!1),e.stateNode=t;e:{switch(a=Ru(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<ca.length;r++)ut(ca[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Ph(t,i),r=Mu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=St({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Dh(t,i),r=wu(t,i),ut("invalid",t);break;default:r=i}Cu(n,r),o=r;for(s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="style"?cm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&om(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ma(t,l):typeof l=="number"&&Ma(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(ya.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&ld(t,s,l,a))}switch(n){case"input":Ja(t),Lh(t,i,!1);break;case"textarea":Ja(t),Nh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+lr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?xs(t,!!i.multiple,s,!1):i.defaultValue!=null&&xs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=vl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return $t(e),null;case 6:if(t&&e.stateNode!=null)D1(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(n=Ar(Na.current),Ar(ci.current),lo(e)){if(i=e.stateNode,n=e.memoizedProps,i[si]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:oo(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&oo(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[si]=e,e.stateNode=i}return $t(e),null;case 13:if(ft(_t),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&Mn!==null&&e.mode&1&&!(e.flags&128))Km(),bs(),e.flags|=98560,s=!1;else if(s=lo(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[si]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;$t(e),s=!1}else jn!==null&&(cf(jn),jn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||_t.current&1?Ft===0&&(Ft=3):Wd())),e.updateQueue!==null&&(e.flags|=4),$t(e),null);case 4:return Ls(),ef(t,e),t===null&&ba(e.stateNode.containerInfo),$t(e),null;case 10:return Cd(e.type._context),$t(e),null;case 17:return pn(e.type)&&_l(),$t(e),null;case 19:if(ft(_t),s=e.memoizedState,s===null)return $t(e),null;if(i=(e.flags&128)!==0,a=s.rendering,a===null)if(i)Ks(s,!1);else{if(Ft!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(a=wl(t),a!==null){for(e.flags|=128,Ks(s,!1),i=a.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,a=s.alternate,a===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=a.childLanes,s.lanes=a.lanes,s.child=a.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=a.memoizedProps,s.memoizedState=a.memoizedState,s.updateQueue=a.updateQueue,s.type=a.type,t=a.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return lt(_t,_t.current&1|2),e.child}t=t.sibling}s.tail!==null&&Ct()>Ns&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=wl(a),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!a.alternate&&!dt)return $t(e),null}else 2*Ct()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(a.sibling=e.child,e.child=a):(n=s.last,n!==null?n.sibling=a:e.child=a,s.last=a)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Ct(),e.sibling=null,n=_t.current,lt(_t,i?n&1|2:n&1),e):($t(e),null);case 22:case 23:return Gd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?yn&1073741824&&($t(e),e.subtreeFlags&6&&(e.flags|=8192)):$t(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function Kv(t,e){switch(Ed(e),e.tag){case 1:return pn(e.type)&&_l(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),ft(hn),ft(en),Dd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Ld(e),null;case 13:if(ft(_t),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(_t),null;case 4:return Ls(),null;case 10:return Cd(e.type._context),null;case 22:case 23:return Gd(),null;case 24:return null;default:return null}}var fo=!1,Qt=!1,Zv=typeof WeakSet=="function"?WeakSet:Set,Me=null;function vs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Et(t,e,i)}else n.current=null}function tf(t,e,n){try{n()}catch(i){Et(t,e,i)}}var M0=!1;function Qv(t,e){if(zu=pl,t=Om(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var a=0,o=-1,l=-1,c=0,p=0,h=t,f=null;t:for(;;){for(var m;h!==n||r!==0&&h.nodeType!==3||(o=a+r),h!==s||i!==0&&h.nodeType!==3||(l=a+i),h.nodeType===3&&(a+=h.nodeValue.length),(m=h.firstChild)!==null;)f=h,h=m;for(;;){if(h===t)break t;if(f===n&&++c===r&&(o=a),f===s&&++p===i&&(l=a),(m=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=m}n=o===-1||l===-1?null:{start:o,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Bu={focusedElem:t,selectionRange:n},pl=!1,Me=e;Me!==null;)if(e=Me,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Me=t;else for(;Me!==null;){e=Me;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var M=_.memoizedProps,g=_.memoizedState,u=e.stateNode,d=u.getSnapshotBeforeUpdate(e.elementType===e.type?M:Gn(e.type,M),g);u.__reactInternalSnapshotBeforeUpdate=d}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){Et(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Me=t;break}Me=e.return}return _=M0,M0=!1,_}function _a(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&tf(e,n,s)}r=r.next}while(r!==i)}}function Ql(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function nf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function N1(t){var e=t.alternate;e!==null&&(t.alternate=null,N1(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[si],delete e[La],delete e[Hu],delete e[Iv],delete e[Uv])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function I1(t){return t.tag===5||t.tag===3||t.tag===4}function E0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||I1(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function rf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=vl));else if(i!==4&&(t=t.child,t!==null))for(rf(t,e,n),t=t.sibling;t!==null;)rf(t,e,n),t=t.sibling}function sf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(sf(t,e,n),t=t.sibling;t!==null;)sf(t,e,n),t=t.sibling}var Gt=null,Wn=!1;function Bi(t,e,n){for(n=n.child;n!==null;)U1(t,e,n),n=n.sibling}function U1(t,e,n){if(li&&typeof li.onCommitFiberUnmount=="function")try{li.onCommitFiberUnmount(Wl,n)}catch{}switch(n.tag){case 5:Qt||vs(n,e);case 6:var i=Gt,r=Wn;Gt=null,Bi(t,e,n),Gt=i,Wn=r,Gt!==null&&(Wn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Wn?(t=Gt,n=n.stateNode,t.nodeType===8?Cc(t.parentNode,n):t.nodeType===1&&Cc(t,n),Aa(t)):Cc(Gt,n.stateNode));break;case 4:i=Gt,r=Wn,Gt=n.stateNode.containerInfo,Wn=!0,Bi(t,e,n),Gt=i,Wn=r;break;case 0:case 11:case 14:case 15:if(!Qt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,a=s.destroy;s=s.tag,a!==void 0&&(s&2||s&4)&&tf(n,e,a),r=r.next}while(r!==i)}Bi(t,e,n);break;case 1:if(!Qt&&(vs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(o){Et(n,e,o)}Bi(t,e,n);break;case 21:Bi(t,e,n);break;case 22:n.mode&1?(Qt=(i=Qt)||n.memoizedState!==null,Bi(t,e,n),Qt=i):Bi(t,e,n);break;default:Bi(t,e,n)}}function T0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Zv),e.forEach(function(i){var r=o_.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Bn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,a=e,o=a;e:for(;o!==null;){switch(o.tag){case 5:Gt=o.stateNode,Wn=!1;break e;case 3:Gt=o.stateNode.containerInfo,Wn=!0;break e;case 4:Gt=o.stateNode.containerInfo,Wn=!0;break e}o=o.return}if(Gt===null)throw Error(ne(160));U1(s,a,r),Gt=null,Wn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Et(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)F1(e,t),e=e.sibling}function F1(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Bn(e,t),ei(t),i&4){try{_a(3,t,t.return),Ql(3,t)}catch(M){Et(t,t.return,M)}try{_a(5,t,t.return)}catch(M){Et(t,t.return,M)}}break;case 1:Bn(e,t),ei(t),i&512&&n!==null&&vs(n,n.return);break;case 5:if(Bn(e,t),ei(t),i&512&&n!==null&&vs(n,n.return),t.flags&32){var r=t.stateNode;try{Ma(r,"")}catch(M){Et(t,t.return,M)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,a=n!==null?n.memoizedProps:s,o=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{o==="input"&&s.type==="radio"&&s.name!=null&&rm(r,s),Ru(o,a);var c=Ru(o,s);for(a=0;a<l.length;a+=2){var p=l[a],h=l[a+1];p==="style"?cm(r,h):p==="dangerouslySetInnerHTML"?om(r,h):p==="children"?Ma(r,h):ld(r,p,h,c)}switch(o){case"input":Eu(r,s);break;case"textarea":sm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?xs(r,!!s.multiple,m,!1):f!==!!s.multiple&&(s.defaultValue!=null?xs(r,!!s.multiple,s.defaultValue,!0):xs(r,!!s.multiple,s.multiple?[]:"",!1))}r[La]=s}catch(M){Et(t,t.return,M)}}break;case 6:if(Bn(e,t),ei(t),i&4){if(t.stateNode===null)throw Error(ne(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(M){Et(t,t.return,M)}}break;case 3:if(Bn(e,t),ei(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Aa(e.containerInfo)}catch(M){Et(t,t.return,M)}break;case 4:Bn(e,t),ei(t);break;case 13:Bn(e,t),ei(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Vd=Ct())),i&4&&T0(t);break;case 22:if(p=n!==null&&n.memoizedState!==null,t.mode&1?(Qt=(c=Qt)||p,Bn(e,t),Qt=c):Bn(e,t),ei(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!p&&t.mode&1)for(Me=t,p=t.child;p!==null;){for(h=Me=p;Me!==null;){switch(f=Me,m=f.child,f.tag){case 0:case 11:case 14:case 15:_a(4,f,f.return);break;case 1:vs(f,f.return);var _=f.stateNode;if(typeof _.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(M){Et(i,n,M)}}break;case 5:vs(f,f.return);break;case 22:if(f.memoizedState!==null){A0(h);continue}}m!==null?(m.return=f,Me=m):A0(h)}p=p.sibling}e:for(p=null,h=t;;){if(h.tag===5){if(p===null){p=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(o=h.stateNode,l=h.memoizedProps.style,a=l!=null&&l.hasOwnProperty("display")?l.display:null,o.style.display=lm("display",a))}catch(M){Et(t,t.return,M)}}}else if(h.tag===6){if(p===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(M){Et(t,t.return,M)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;p===h&&(p=null),h=h.return}p===h&&(p=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Bn(e,t),ei(t),i&4&&T0(t);break;case 21:break;default:Bn(e,t),ei(t)}}function ei(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(I1(n)){var i=n;break e}n=n.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Ma(r,""),i.flags&=-33);var s=E0(t);sf(t,s,r);break;case 3:case 4:var a=i.stateNode.containerInfo,o=E0(t);rf(t,o,a);break;default:throw Error(ne(161))}}catch(l){Et(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jv(t,e,n){Me=t,O1(t)}function O1(t,e,n){for(var i=(t.mode&1)!==0;Me!==null;){var r=Me,s=r.child;if(r.tag===22&&i){var a=r.memoizedState!==null||fo;if(!a){var o=r.alternate,l=o!==null&&o.memoizedState!==null||Qt;o=fo;var c=Qt;if(fo=a,(Qt=l)&&!c)for(Me=r;Me!==null;)a=Me,l=a.child,a.tag===22&&a.memoizedState!==null?C0(r):l!==null?(l.return=a,Me=l):C0(r);for(;s!==null;)Me=s,O1(s),s=s.sibling;Me=r,fo=o,Qt=c}w0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Me=s):w0(t)}}function w0(t){for(;Me!==null;){var e=Me;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Qt||Ql(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Qt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Gn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&c0(e,s,i);break;case 3:var a=e.updateQueue;if(a!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}c0(e,a,n)}break;case 5:var o=e.stateNode;if(n===null&&e.flags&4){n=o;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var p=c.memoizedState;if(p!==null){var h=p.dehydrated;h!==null&&Aa(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Qt||e.flags&512&&nf(e)}catch(f){Et(e,e.return,f)}}if(e===t){Me=null;break}if(n=e.sibling,n!==null){n.return=e.return,Me=n;break}Me=e.return}}function A0(t){for(;Me!==null;){var e=Me;if(e===t){Me=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Me=n;break}Me=e.return}}function C0(t){for(;Me!==null;){var e=Me;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ql(4,e)}catch(l){Et(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Et(e,r,l)}}var s=e.return;try{nf(e)}catch(l){Et(e,s,l)}break;case 5:var a=e.return;try{nf(e)}catch(l){Et(e,a,l)}}}catch(l){Et(e,e.return,l)}if(e===t){Me=null;break}var o=e.sibling;if(o!==null){o.return=e.return,Me=o;break}Me=e.return}}var e_=Math.ceil,Rl=Ui.ReactCurrentDispatcher,Bd=Ui.ReactCurrentOwner,Fn=Ui.ReactCurrentBatchConfig,$e=0,Ht=null,Dt=null,jt=0,yn=0,_s=dr(0),Ft=0,Oa=null,Ur=0,Jl=0,kd=0,xa=null,fn=null,Vd=0,Ns=1/0,Si=null,bl=!1,af=null,sr=null,ho=!1,Qi=null,Pl=0,Sa=0,of=null,Jo=-1,el=0;function sn(){return $e&6?Ct():Jo!==-1?Jo:Jo=Ct()}function ar(t){return t.mode&1?$e&2&&jt!==0?jt&-jt:Ov.transition!==null?(el===0&&(el=ym()),el):(t=et,t!==0||(t=window.event,t=t===void 0?16:Rm(t.type)),t):1}function Yn(t,e,n,i){if(50<Sa)throw Sa=0,of=null,Error(ne(185));Va(t,n,i),(!($e&2)||t!==Ht)&&(t===Ht&&(!($e&2)&&(Jl|=n),Ft===4&&$i(t,jt)),mn(t,i),n===1&&$e===0&&!(e.mode&1)&&(Ns=Ct()+500,$l&&hr()))}function mn(t,e){var n=t.callbackNode;O2(t,e);var i=hl(t,t===Ht?jt:0);if(i===0)n!==null&&Fh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Fh(n),e===1)t.tag===0?Fv(R0.bind(null,t)):qm(R0.bind(null,t)),Dv(function(){!($e&6)&&hr()}),n=null;else{switch(Mm(i)){case 1:n=hd;break;case 4:n=xm;break;case 16:n=dl;break;case 536870912:n=Sm;break;default:n=dl}n=j1(n,z1.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function z1(t,e){if(Jo=-1,el=0,$e&6)throw Error(ne(327));var n=t.callbackNode;if(Ts()&&t.callbackNode!==n)return null;var i=hl(t,t===Ht?jt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ll(t,i);else{e=i;var r=$e;$e|=2;var s=k1();(Ht!==t||jt!==e)&&(Si=null,Ns=Ct()+500,Pr(t,e));do try{i_();break}catch(o){B1(t,o)}while(!0);Ad(),Rl.current=s,$e=r,Dt!==null?e=0:(Ht=null,jt=0,e=Ft)}if(e!==0){if(e===2&&(r=Nu(t),r!==0&&(i=r,e=lf(t,r))),e===1)throw n=Oa,Pr(t,0),$i(t,i),mn(t,Ct()),n;if(e===6)$i(t,i);else{if(r=t.current.alternate,!(i&30)&&!t_(r)&&(e=Ll(t,i),e===2&&(s=Nu(t),s!==0&&(i=s,e=lf(t,s))),e===1))throw n=Oa,Pr(t,0),$i(t,i),mn(t,Ct()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Sr(t,fn,Si);break;case 3:if($i(t,i),(i&130023424)===i&&(e=Vd+500-Ct(),10<e)){if(hl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){sn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Vu(Sr.bind(null,t,fn,Si),e);break}Sr(t,fn,Si);break;case 4:if($i(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var a=31-qn(i);s=1<<a,a=e[a],a>r&&(r=a),i&=~s}if(i=r,i=Ct()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*e_(i/1960))-i,10<i){t.timeoutHandle=Vu(Sr.bind(null,t,fn,Si),i);break}Sr(t,fn,Si);break;case 5:Sr(t,fn,Si);break;default:throw Error(ne(329))}}}return mn(t,Ct()),t.callbackNode===n?z1.bind(null,t):null}function lf(t,e){var n=xa;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Ll(t,e),t!==2&&(e=fn,fn=n,e!==null&&cf(e)),t}function cf(t){fn===null?fn=t:fn.push.apply(fn,t)}function t_(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function $i(t,e){for(e&=~kd,e&=~Jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-qn(e),i=1<<n;t[n]=-1,e&=~i}}function R0(t){if($e&6)throw Error(ne(327));Ts();var e=hl(t,0);if(!(e&1))return mn(t,Ct()),null;var n=Ll(t,e);if(t.tag!==0&&n===2){var i=Nu(t);i!==0&&(e=i,n=lf(t,i))}if(n===1)throw n=Oa,Pr(t,0),$i(t,e),mn(t,Ct()),n;if(n===6)throw Error(ne(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Sr(t,fn,Si),mn(t,Ct()),null}function Hd(t,e){var n=$e;$e|=1;try{return t(e)}finally{$e=n,$e===0&&(Ns=Ct()+500,$l&&hr())}}function Fr(t){Qi!==null&&Qi.tag===0&&!($e&6)&&Ts();var e=$e;$e|=1;var n=Fn.transition,i=et;try{if(Fn.transition=null,et=1,t)return t()}finally{et=i,Fn.transition=n,$e=e,!($e&6)&&hr()}}function Gd(){yn=_s.current,ft(_s)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Lv(n)),Dt!==null)for(n=Dt.return;n!==null;){var i=n;switch(Ed(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&_l();break;case 3:Ls(),ft(hn),ft(en),Dd();break;case 5:Ld(i);break;case 4:Ls();break;case 13:ft(_t);break;case 19:ft(_t);break;case 10:Cd(i.type._context);break;case 22:case 23:Gd()}n=n.return}if(Ht=t,Dt=t=or(t.current,null),jt=yn=e,Ft=0,Oa=null,kd=Jl=Ur=0,fn=xa=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var a=s.next;s.next=r,i.next=a}n.pending=i}wr=null}return t}function B1(t,e){do{var n=Dt;try{if(Ad(),Ko.current=Cl,Al){for(var i=xt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Al=!1}if(Ir=0,kt=Ut=xt=null,va=!1,Ia=0,Bd.current=null,n===null||n.return===null){Ft=1,Oa=e,Dt=null;break}e:{var s=t,a=n.return,o=n,l=e;if(e=jt,o.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,p=o,h=p.tag;if(!(p.mode&1)&&(h===0||h===11||h===15)){var f=p.alternate;f?(p.updateQueue=f.updateQueue,p.memoizedState=f.memoizedState,p.lanes=f.lanes):(p.updateQueue=null,p.memoizedState=null)}var m=m0(a);if(m!==null){m.flags&=-257,g0(m,a,o,s,e),m.mode&1&&p0(s,c,e),e=m,l=c;var _=e.updateQueue;if(_===null){var M=new Set;M.add(l),e.updateQueue=M}else _.add(l);break e}else{if(!(e&1)){p0(s,c,e),Wd();break e}l=Error(ne(426))}}else if(dt&&o.mode&1){var g=m0(a);if(g!==null){!(g.flags&65536)&&(g.flags|=256),g0(g,a,o,s,e),Td(Ds(l,o));break e}}s=l=Ds(l,o),Ft!==4&&(Ft=2),xa===null?xa=[s]:xa.push(s),s=a;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=M1(s,l,e);l0(s,u);break e;case 1:o=l;var d=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof d.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(sr===null||!sr.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=E1(s,o,e);l0(s,y);break e}}s=s.return}while(s!==null)}H1(n)}catch(C){e=C,Dt===n&&n!==null&&(Dt=n=n.return);continue}break}while(!0)}function k1(){var t=Rl.current;return Rl.current=Cl,t===null?Cl:t}function Wd(){(Ft===0||Ft===3||Ft===2)&&(Ft=4),Ht===null||!(Ur&268435455)&&!(Jl&268435455)||$i(Ht,jt)}function Ll(t,e){var n=$e;$e|=2;var i=k1();(Ht!==t||jt!==e)&&(Si=null,Pr(t,e));do try{n_();break}catch(r){B1(t,r)}while(!0);if(Ad(),$e=n,Rl.current=i,Dt!==null)throw Error(ne(261));return Ht=null,jt=0,Ft}function n_(){for(;Dt!==null;)V1(Dt)}function i_(){for(;Dt!==null&&!R2();)V1(Dt)}function V1(t){var e=W1(t.alternate,t,yn);t.memoizedProps=t.pendingProps,e===null?H1(t):Dt=e,Bd.current=null}function H1(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Kv(n,e),n!==null){n.flags&=32767,Dt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ft=6,Dt=null;return}}else if(n=$v(n,e,yn),n!==null){Dt=n;return}if(e=e.sibling,e!==null){Dt=e;return}Dt=e=t}while(e!==null);Ft===0&&(Ft=5)}function Sr(t,e,n){var i=et,r=Fn.transition;try{Fn.transition=null,et=1,r_(t,e,n,i)}finally{Fn.transition=r,et=i}return null}function r_(t,e,n,i){do Ts();while(Qi!==null);if($e&6)throw Error(ne(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ne(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(z2(t,s),t===Ht&&(Dt=Ht=null,jt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ho||(ho=!0,j1(dl,function(){return Ts(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Fn.transition,Fn.transition=null;var a=et;et=1;var o=$e;$e|=4,Bd.current=null,Qv(t,n),F1(n,t),Tv(Bu),pl=!!zu,Bu=zu=null,t.current=n,Jv(n),b2(),$e=o,et=a,Fn.transition=s}else t.current=n;if(ho&&(ho=!1,Qi=t,Pl=r),s=t.pendingLanes,s===0&&(sr=null),D2(n.stateNode),mn(t,Ct()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(bl)throw bl=!1,t=af,af=null,t;return Pl&1&&t.tag!==0&&Ts(),s=t.pendingLanes,s&1?t===of?Sa++:(Sa=0,of=t):Sa=0,hr(),null}function Ts(){if(Qi!==null){var t=Mm(Pl),e=Fn.transition,n=et;try{if(Fn.transition=null,et=16>t?16:t,Qi===null)var i=!1;else{if(t=Qi,Qi=null,Pl=0,$e&6)throw Error(ne(331));var r=$e;for($e|=4,Me=t.current;Me!==null;){var s=Me,a=s.child;if(Me.flags&16){var o=s.deletions;if(o!==null){for(var l=0;l<o.length;l++){var c=o[l];for(Me=c;Me!==null;){var p=Me;switch(p.tag){case 0:case 11:case 15:_a(8,p,s)}var h=p.child;if(h!==null)h.return=p,Me=h;else for(;Me!==null;){p=Me;var f=p.sibling,m=p.return;if(N1(p),p===c){Me=null;break}if(f!==null){f.return=m,Me=f;break}Me=m}}}var _=s.alternate;if(_!==null){var M=_.child;if(M!==null){_.child=null;do{var g=M.sibling;M.sibling=null,M=g}while(M!==null)}}Me=s}}if(s.subtreeFlags&2064&&a!==null)a.return=s,Me=a;else e:for(;Me!==null;){if(s=Me,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Me=u;break e}Me=s.return}}var d=t.current;for(Me=d;Me!==null;){a=Me;var v=a.child;if(a.subtreeFlags&2064&&v!==null)v.return=a,Me=v;else e:for(a=d;Me!==null;){if(o=Me,o.flags&2048)try{switch(o.tag){case 0:case 11:case 15:Ql(9,o)}}catch(C){Et(o,o.return,C)}if(o===a){Me=null;break e}var y=o.sibling;if(y!==null){y.return=o.return,Me=y;break e}Me=o.return}}if($e=r,hr(),li&&typeof li.onPostCommitFiberRoot=="function")try{li.onPostCommitFiberRoot(Wl,t)}catch{}i=!0}return i}finally{et=n,Fn.transition=e}}return!1}function b0(t,e,n){e=Ds(n,e),e=M1(t,e,1),t=rr(t,e,1),e=sn(),t!==null&&(Va(t,1,e),mn(t,e))}function Et(t,e,n){if(t.tag===3)b0(t,t,n);else for(;e!==null;){if(e.tag===3){b0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(sr===null||!sr.has(i))){t=Ds(n,t),t=E1(e,t,1),e=rr(e,t,1),t=sn(),e!==null&&(Va(e,1,t),mn(e,t));break}}e=e.return}}function s_(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=sn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(jt&n)===n&&(Ft===4||Ft===3&&(jt&130023424)===jt&&500>Ct()-Vd?Pr(t,0):kd|=n),mn(t,e)}function G1(t,e){e===0&&(t.mode&1?(e=no,no<<=1,!(no&130023424)&&(no=4194304)):e=1);var n=sn();t=Li(t,e),t!==null&&(Va(t,e,n),mn(t,n))}function a_(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),G1(t,n)}function o_(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),G1(t,n)}var W1;W1=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||hn.current)dn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return dn=!1,Yv(t,e,n);dn=!!(t.flags&131072)}else dn=!1,dt&&e.flags&1048576&&Ym(e,yl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Qo(t,e),t=e.pendingProps;var r=Rs(e,en.current);Es(e,n),r=Id(null,e,i,t,r,n);var s=Ud();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,pn(i)?(s=!0,xl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,bd(e),r.updater=Zl,e.stateNode=r,r._reactInternals=e,Yu(e,i,t,n),e=Zu(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Md(e),rn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Qo(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=c_(i),t=Gn(i,t),r){case 0:e=Ku(null,e,i,t,n);break e;case 1:e=x0(null,e,i,t,n);break e;case 11:e=v0(null,e,i,t,n);break e;case 14:e=_0(null,e,i,Gn(i.type,t),n);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Ku(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),x0(t,e,i,r,n);case 3:e:{if(C1(e),t===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,e1(t,e),Tl(e,i,null,n);var a=e.memoizedState;if(i=a.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:a.cache,pendingSuspenseBoundaries:a.pendingSuspenseBoundaries,transitions:a.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(ne(423)),e),e=S0(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(ne(424)),e),e=S0(t,e,i,n,r);break e}else for(Mn=ir(e.stateNode.containerInfo.firstChild),En=e,dt=!0,jn=null,n=Qm(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Di(t,e,n);break e}rn(t,e,i,n)}e=e.child}return e;case 5:return t1(e),t===null&&ju(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,a=r.children,ku(i,r)?a=null:s!==null&&ku(i,s)&&(e.flags|=32),A1(t,e),rn(t,e,a,n),e.child;case 6:return t===null&&ju(e),null;case 13:return R1(t,e,n);case 4:return Pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):rn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),v0(t,e,i,r,n);case 7:return rn(t,e,e.pendingProps,n),e.child;case 8:return rn(t,e,e.pendingProps.children,n),e.child;case 12:return rn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,a=r.value,lt(Ml,i._currentValue),i._currentValue=a,s!==null)if(Kn(s.value,a)){if(s.children===r.children&&!hn.current){e=Di(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var o=s.dependencies;if(o!==null){a=s.child;for(var l=o.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ai(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var p=c.pending;p===null?l.next=l:(l.next=p.next,p.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Xu(s.return,n,e),o.lanes|=n;break}l=l.next}}else if(s.tag===10)a=s.type===e.type?null:s.child;else if(s.tag===18){if(a=s.return,a===null)throw Error(ne(341));a.lanes|=n,o=a.alternate,o!==null&&(o.lanes|=n),Xu(a,n,e),a=s.sibling}else a=s.child;if(a!==null)a.return=s;else for(a=s;a!==null;){if(a===e){a=null;break}if(s=a.sibling,s!==null){s.return=a.return,a=s;break}a=a.return}s=a}rn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Es(e,n),r=On(r),i=i(r),e.flags|=1,rn(t,e,i,n),e.child;case 14:return i=e.type,r=Gn(i,e.pendingProps),r=Gn(i.type,r),_0(t,e,i,r,n);case 15:return T1(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Gn(i,r),Qo(t,e),e.tag=1,pn(i)?(t=!0,xl(e)):t=!1,Es(e,n),y1(e,i,r),Yu(e,i,r,n),Zu(null,e,i,!0,t,n);case 19:return b1(t,e,n);case 22:return w1(t,e,n)}throw Error(ne(156,e.tag))};function j1(t,e){return _m(t,e)}function l_(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Un(t,e,n,i){return new l_(t,e,n,i)}function jd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function c_(t){if(typeof t=="function")return jd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===ud)return 11;if(t===fd)return 14}return 2}function or(t,e){var n=t.alternate;return n===null?(n=Un(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tl(t,e,n,i,r,s){var a=2;if(i=t,typeof t=="function")jd(t)&&(a=1);else if(typeof t=="string")a=5;else e:switch(t){case ls:return Lr(n.children,r,s,e);case cd:a=8,r|=8;break;case _u:return t=Un(12,n,e,r|2),t.elementType=_u,t.lanes=s,t;case xu:return t=Un(13,n,e,r),t.elementType=xu,t.lanes=s,t;case Su:return t=Un(19,n,e,r),t.elementType=Su,t.lanes=s,t;case tm:return ec(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Jp:a=10;break e;case em:a=9;break e;case ud:a=11;break e;case fd:a=14;break e;case Xi:a=16,i=null;break e}throw Error(ne(130,t==null?t:typeof t,""))}return e=Un(a,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Lr(t,e,n,i){return t=Un(7,t,i,e),t.lanes=n,t}function ec(t,e,n,i){return t=Un(22,t,i,e),t.elementType=tm,t.lanes=n,t.stateNode={isHidden:!1},t}function Uc(t,e,n){return t=Un(6,t,null,e),t.lanes=n,t}function Fc(t,e,n){return e=Un(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function u_(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gc(0),this.expirationTimes=gc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Xd(t,e,n,i,r,s,a,o,l){return t=new u_(t,e,n,o,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Un(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},bd(s),t}function f_(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:os,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function X1(t){if(!t)return cr;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(ne(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(pn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(t.tag===1){var n=t.type;if(pn(n))return Xm(t,n,e)}return e}function q1(t,e,n,i,r,s,a,o,l){return t=Xd(n,i,!0,t,r,s,a,o,l),t.context=X1(null),n=t.current,i=sn(),r=ar(n),s=Ai(i,r),s.callback=e??null,rr(n,s,r),t.current.lanes=r,Va(t,r,i),mn(t,i),t}function tc(t,e,n,i){var r=e.current,s=sn(),a=ar(r);return n=X1(n),e.context===null?e.context=n:e.pendingContext=n,e=Ai(s,a),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=rr(r,e,a),t!==null&&(Yn(t,r,a,s),$o(t,r,a)),a}function Dl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function P0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function qd(t,e){P0(t,e),(t=t.alternate)&&P0(t,e)}function d_(){return null}var Y1=typeof reportError=="function"?reportError:function(t){console.error(t)};function Yd(t){this._internalRoot=t}nc.prototype.render=Yd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ne(409));tc(t,e,null,null)};nc.prototype.unmount=Yd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Fr(function(){tc(null,t,null,null)}),e[Pi]=null}};function nc(t){this._internalRoot=t}nc.prototype.unstable_scheduleHydration=function(t){if(t){var e=wm();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Yi.length&&e!==0&&e<Yi[n].priority;n++);Yi.splice(n,0,t),n===0&&Cm(t)}};function $d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ic(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function L0(){}function h_(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Dl(a);s.call(c)}}var a=q1(e,i,t,0,null,!1,!1,"",L0);return t._reactRootContainer=a,t[Pi]=a.current,ba(t.nodeType===8?t.parentNode:t),Fr(),a}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var o=i;i=function(){var c=Dl(l);o.call(c)}}var l=Xd(t,0,!1,null,null,!1,!1,"",L0);return t._reactRootContainer=l,t[Pi]=l.current,ba(t.nodeType===8?t.parentNode:t),Fr(function(){tc(e,l,n,i)}),l}function rc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var a=s;if(typeof r=="function"){var o=r;r=function(){var l=Dl(a);o.call(l)}}tc(e,a,t,r)}else a=h_(n,e,t,r,i);return Dl(a)}Em=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=la(e.pendingLanes);n!==0&&(pd(e,n|1),mn(e,Ct()),!($e&6)&&(Ns=Ct()+500,hr()))}break;case 13:Fr(function(){var i=Li(t,1);if(i!==null){var r=sn();Yn(i,t,1,r)}}),qd(t,1)}};md=function(t){if(t.tag===13){var e=Li(t,134217728);if(e!==null){var n=sn();Yn(e,t,134217728,n)}qd(t,134217728)}};Tm=function(t){if(t.tag===13){var e=ar(t),n=Li(t,e);if(n!==null){var i=sn();Yn(n,t,e,i)}qd(t,e)}};wm=function(){return et};Am=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};Pu=function(t,e,n){switch(e){case"input":if(Eu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Yl(i);if(!r)throw Error(ne(90));im(i),Eu(i,r)}}}break;case"textarea":sm(t,n);break;case"select":e=n.value,e!=null&&xs(t,!!n.multiple,e,!1)}};dm=Hd;hm=Fr;var p_={usingClientEntryPoint:!1,Events:[Ga,ds,Yl,um,fm,Hd]},Zs={findFiberByHostInstance:Tr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},m_={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ui.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=gm(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||d_,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var po=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!po.isDisabled&&po.supportsFiber)try{Wl=po.inject(m_),li=po}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=p_;wn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!$d(e))throw Error(ne(200));return f_(t,e,null,n)};wn.createRoot=function(t,e){if(!$d(t))throw Error(ne(299));var n=!1,i="",r=Y1;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Xd(t,1,!1,null,null,n,!1,i,r),t[Pi]=e.current,ba(t.nodeType===8?t.parentNode:t),new Yd(e)};wn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ne(188)):(t=Object.keys(t).join(","),Error(ne(268,t)));return t=gm(e),t=t===null?null:t.stateNode,t};wn.flushSync=function(t){return Fr(t)};wn.hydrate=function(t,e,n){if(!ic(e))throw Error(ne(200));return rc(null,t,e,!0,n)};wn.hydrateRoot=function(t,e,n){if(!$d(t))throw Error(ne(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",a=Y1;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(a=n.onRecoverableError)),e=q1(e,null,t,1,n??null,r,!1,s,a),t[Pi]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new nc(e)};wn.render=function(t,e,n){if(!ic(e))throw Error(ne(200));return rc(null,t,e,!1,n)};wn.unmountComponentAtNode=function(t){if(!ic(t))throw Error(ne(40));return t._reactRootContainer?(Fr(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[Pi]=null})}),!0):!1};wn.unstable_batchedUpdates=Hd;wn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!ic(n))throw Error(ne(200));if(t==null||t._reactInternals===void 0)throw Error(ne(38));return rc(t,e,n,!1,i)};wn.version="18.3.1-next-f1338f8080-20240426";function $1(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE($1)}catch(t){console.error(t)}}$1(),$p.exports=wn;var g_=$p.exports,K1,D0=g_;K1=D0.createRoot,D0.hydrateRoot;function v_({onDone:t}){const[e,n]=Vt.useState(!1),[i,r]=Vt.useState(!1),[s,a]=Vt.useState(!1);return Vt.useEffect(()=>{const o=[setTimeout(()=>n(!0),250),setTimeout(()=>r(!0),2100),setTimeout(()=>a(!0),3900),setTimeout(t,4800)];return()=>o.forEach(clearTimeout)},[t]),w.jsxs("div",{className:`intro${s?" intro-leaving":""}`,children:[w.jsx("div",{className:`intro-slide${i?" intro-slide--out":""}`,children:w.jsx("span",{className:`intro-halo${e?" show":""}`,children:"Halo,"})}),w.jsx("div",{className:`intro-slide intro-slide--right${i?" intro-slide--in":""}`,children:w.jsx("span",{className:"intro-portfolio",children:"This is my portfolio"})})]})}function __(){return w.jsx("nav",{children:w.jsxs("div",{className:"nav-inner",children:[w.jsxs("div",{className:"brand",children:["Nita ",w.jsx("em",{children:"Oktaviani"})]}),w.jsxs("div",{className:"nav-links",children:[w.jsx("a",{href:"#about",children:"About"}),w.jsx("a",{href:"#projects",children:"Projects"}),w.jsx("a",{href:"#certs",children:"Certifications"}),w.jsx("a",{href:"#experience",children:"Experience"}),w.jsx("a",{href:"#skills",children:"Skills"}),w.jsx("a",{href:"#contact",children:"Contact"})]})]})})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="184",x_=0,N0=1,S_=2,nl=1,y_=2,ua=3,ur=0,gn=1,Mi=2,Ci=0,ws=1,I0=2,U0=3,F0=4,M_=5,Mr=100,E_=101,T_=102,w_=103,A_=104,C_=200,R_=201,b_=202,P_=203,uf=204,ff=205,L_=206,D_=207,N_=208,I_=209,U_=210,F_=211,O_=212,z_=213,B_=214,df=0,hf=1,pf=2,Is=3,mf=4,gf=5,vf=6,_f=7,Z1=0,k_=1,V_=2,ui=0,Q1=1,J1=2,eg=3,tg=4,ng=5,ig=6,rg=7,sg=300,Or=301,Us=302,Oc=303,zc=304,sc=306,xf=1e3,wi=1001,Sf=1002,Wt=1003,H_=1004,mo=1005,Jt=1006,Bc=1007,Cr=1008,Nn=1009,ag=1010,og=1011,za=1012,Zd=1013,di=1014,ai=1015,Ni=1016,Qd=1017,Jd=1018,Ba=1020,lg=35902,cg=35899,ug=1021,fg=1022,Xn=1023,Ii=1026,Rr=1027,dg=1028,eh=1029,zr=1030,th=1031,nh=1033,il=33776,rl=33777,sl=33778,al=33779,yf=35840,Mf=35841,Ef=35842,Tf=35843,wf=36196,Af=37492,Cf=37496,Rf=37488,bf=37489,Nl=37490,Pf=37491,Lf=37808,Df=37809,Nf=37810,If=37811,Uf=37812,Ff=37813,Of=37814,zf=37815,Bf=37816,kf=37817,Vf=37818,Hf=37819,Gf=37820,Wf=37821,jf=36492,Xf=36494,qf=36495,Yf=36283,$f=36284,Il=36285,Kf=36286,G_=3200,O0=0,W_=1,Ki="",bn="srgb",Ul="srgb-linear",Fl="linear",Je="srgb",Xr=7680,z0=519,j_=512,X_=513,q_=514,ih=515,Y_=516,$_=517,rh=518,K_=519,B0=35044,k0="300 es",oi=2e3,Ol=2001;function Z_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function zl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Q_(){const t=zl("canvas");return t.style.display="block",t}const V0={};function H0(...t){const e="THREE."+t.shift();console.log(e,...t)}function hg(t){const e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){const n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ce(...t){t=hg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ye(...t){t=hg(t);const e="THREE."+t.shift();{const n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Zf(...t){const e=t.join(" ");e in V0||(V0[e]=!0,Ce(...t))}function J_(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}const e3={[df]:hf,[pf]:vf,[mf]:_f,[Is]:gf,[hf]:df,[vf]:pf,[_f]:mf,[gf]:Is};class Hr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Kt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ol=Math.PI/180,Qf=180/Math.PI;function ja(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Kt[t&255]+Kt[t>>8&255]+Kt[t>>16&255]+Kt[t>>24&255]+"-"+Kt[e&255]+Kt[e>>8&255]+"-"+Kt[e>>16&15|64]+Kt[e>>24&255]+"-"+Kt[n&63|128]+Kt[n>>8&255]+"-"+Kt[n>>16&255]+Kt[n>>24&255]+Kt[i&255]+Kt[i>>8&255]+Kt[i>>16&255]+Kt[i>>24&255]).toLowerCase()}function Xe(t,e,n){return Math.max(e,Math.min(n,t))}function t3(t,e){return(t%e+e)%e}function kc(t,e,n){return(1-n)*t+n*e}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function un(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const fh=class fh{constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,a=this.y-e.y;return this.x=s*i-a*r+e.x,this.y=s*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};fh.prototype.isVector2=!0;let Ze=fh;class Vs{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,a,o){let l=i[r+0],c=i[r+1],p=i[r+2],h=i[r+3],f=s[a+0],m=s[a+1],_=s[a+2],M=s[a+3];if(h!==M||l!==f||c!==m||p!==_){let g=l*f+c*m+p*_+h*M;g<0&&(f=-f,m=-m,_=-_,M=-M,g=-g);let u=1-o;if(g<.9995){const d=Math.acos(g),v=Math.sin(d);u=Math.sin(u*d)/v,o=Math.sin(o*d)/v,l=l*u+f*o,c=c*u+m*o,p=p*u+_*o,h=h*u+M*o}else{l=l*u+f*o,c=c*u+m*o,p=p*u+_*o,h=h*u+M*o;const d=1/Math.sqrt(l*l+c*c+p*p+h*h);l*=d,c*=d,p*=d,h*=d}}e[n]=l,e[n+1]=c,e[n+2]=p,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,a){const o=i[r],l=i[r+1],c=i[r+2],p=i[r+3],h=s[a],f=s[a+1],m=s[a+2],_=s[a+3];return e[n]=o*_+p*h+l*m-c*f,e[n+1]=l*_+p*f+c*h-o*m,e[n+2]=c*_+p*m+o*f-l*h,e[n+3]=p*_-o*h-l*f-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(i/2),p=o(r/2),h=o(s/2),f=l(i/2),m=l(r/2),_=l(s/2);switch(a){case"XYZ":this._x=f*p*h+c*m*_,this._y=c*m*h-f*p*_,this._z=c*p*_+f*m*h,this._w=c*p*h-f*m*_;break;case"YXZ":this._x=f*p*h+c*m*_,this._y=c*m*h-f*p*_,this._z=c*p*_-f*m*h,this._w=c*p*h+f*m*_;break;case"ZXY":this._x=f*p*h-c*m*_,this._y=c*m*h+f*p*_,this._z=c*p*_+f*m*h,this._w=c*p*h-f*m*_;break;case"ZYX":this._x=f*p*h-c*m*_,this._y=c*m*h+f*p*_,this._z=c*p*_-f*m*h,this._w=c*p*h+f*m*_;break;case"YZX":this._x=f*p*h+c*m*_,this._y=c*m*h+f*p*_,this._z=c*p*_-f*m*h,this._w=c*p*h-f*m*_;break;case"XZY":this._x=f*p*h-c*m*_,this._y=c*m*h-f*p*_,this._z=c*p*_+f*m*h,this._w=c*p*h+f*m*_;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],a=n[1],o=n[5],l=n[9],c=n[2],p=n[6],h=n[10],f=i+o+h;if(f>0){const m=.5/Math.sqrt(f+1);this._w=.25/m,this._x=(p-l)*m,this._y=(s-c)*m,this._z=(a-r)*m}else if(i>o&&i>h){const m=2*Math.sqrt(1+i-o-h);this._w=(p-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+c)/m}else if(o>h){const m=2*Math.sqrt(1+o-i-h);this._w=(s-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+p)/m}else{const m=2*Math.sqrt(1+h-i-o);this._w=(a-r)/m,this._x=(s+c)/m,this._y=(l+p)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Xe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,a=e._w,o=n._x,l=n._y,c=n._z,p=n._w;return this._x=i*p+a*o+r*c-s*l,this._y=r*p+a*l+s*o-i*c,this._z=s*p+a*c+i*l-r*o,this._w=a*p-i*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){let i=e._x,r=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,r=-r,s=-s,a=-a,o=-o);let l=1-n;if(o<.9995){const c=Math.acos(o),p=Math.sin(c);l=Math.sin(l*c)/p,n=Math.sin(n*c)/p,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const dh=class dh{constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(G0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(G0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,a=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*a,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*a,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*a,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*i),p=2*(o*n-s*r),h=2*(s*i-a*n);return this.x=n+l*c+a*h-o*p,this.y=i+l*p+o*c-s*h,this.z=r+l*h+s*p-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,a=n.x,o=n.y,l=n.z;return this.x=r*l-s*o,this.y=s*a-i*l,this.z=i*o-r*a,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Xe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};dh.prototype.isVector3=!0;let F=dh;const Vc=new F,G0=new Vs,hh=class hh{constructor(e,n,i,r,s,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c)}set(e,n,i,r,s,a,o,l,c){const p=this.elements;return p[0]=e,p[1]=r,p[2]=o,p[3]=n,p[4]=s,p[5]=l,p[6]=i,p[7]=a,p[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],p=i[4],h=i[7],f=i[2],m=i[5],_=i[8],M=r[0],g=r[3],u=r[6],d=r[1],v=r[4],y=r[7],C=r[2],T=r[5],R=r[8];return s[0]=a*M+o*d+l*C,s[3]=a*g+o*v+l*T,s[6]=a*u+o*y+l*R,s[1]=c*M+p*d+h*C,s[4]=c*g+p*v+h*T,s[7]=c*u+p*y+h*R,s[2]=f*M+m*d+_*C,s[5]=f*g+m*v+_*T,s[8]=f*u+m*y+_*R,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8];return n*a*p-n*o*c-i*s*p+i*o*l+r*s*c-r*a*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],h=p*a-o*c,f=o*l-p*s,m=c*s-a*l,_=n*h+i*f+r*m;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const M=1/_;return e[0]=h*M,e[1]=(r*c-p*i)*M,e[2]=(o*i-r*a)*M,e[3]=f*M,e[4]=(p*n-r*l)*M,e[5]=(r*s-o*n)*M,e[6]=m*M,e[7]=(i*l-c*n)*M,e[8]=(a*n-i*s)*M,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+n,0,0,1),this}scale(e,n){return this.premultiply(Hc.makeScale(e,n)),this}rotate(e){return this.premultiply(Hc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Hc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}};hh.prototype.isMatrix3=!0;let Ne=hh;const Hc=new Ne,W0=new Ne().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),j0=new Ne().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function n3(){const t={enabled:!0,workingColorSpace:Ul,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Je&&(r.r=Ri(r.r),r.g=Ri(r.g),r.b=Ri(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Je&&(r.r=As(r.r),r.g=As(r.g),r.b=As(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Ki?Fl:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return Zf("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return Zf("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Ul]:{primaries:e,whitePoint:i,transfer:Fl,toXYZ:W0,fromXYZ:j0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:bn},outputColorSpaceConfig:{drawingBufferColorSpace:bn}},[bn]:{primaries:e,whitePoint:i,transfer:Je,toXYZ:W0,fromXYZ:j0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:bn}}}),t}const je=n3();function Ri(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function As(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let qr;class i3{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{qr===void 0&&(qr=zl("canvas")),qr.width=e.width,qr.height=e.height;const r=qr.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=qr}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=zl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ri(s[a]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ri(n[i]/255)*255):n[i]=Ri(n[i]);return{data:n,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let r3=0;class sh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:r3++}),this.uuid=ja(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Gc(r[a].image)):s.push(Gc(r[a]))}else s=Gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?i3.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}let s3=0;const Wc=new F;class an extends Hr{constructor(e=an.DEFAULT_IMAGE,n=an.DEFAULT_MAPPING,i=wi,r=wi,s=Jt,a=Cr,o=Xn,l=Nn,c=an.DEFAULT_ANISOTROPY,p=Ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s3++}),this.uuid=ja(),this.name="",this.source=new sh(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ze(0,0),this.repeat=new Ze(1,1),this.center=new Ze(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ne,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=p,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Wc).x}get height(){return this.source.getSize(Wc).y}get depth(){return this.source.getSize(Wc).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ce(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==sg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xf:e.x=e.x-Math.floor(e.x);break;case wi:e.x=e.x<0?0:1;break;case Sf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xf:e.y=e.y-Math.floor(e.y);break;case wi:e.y=e.y<0?0:1;break;case Sf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=sg;an.DEFAULT_ANISOTROPY=1;const ph=class ph{constructor(e=0,n=0,i=0,r=1){this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*r+a[12]*s,this.y=a[1]*n+a[5]*i+a[9]*r+a[13]*s,this.z=a[2]*n+a[6]*i+a[10]*r+a[14]*s,this.w=a[3]*n+a[7]*i+a[11]*r+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],p=l[4],h=l[8],f=l[1],m=l[5],_=l[9],M=l[2],g=l[6],u=l[10];if(Math.abs(p-f)<.01&&Math.abs(h-M)<.01&&Math.abs(_-g)<.01){if(Math.abs(p+f)<.1&&Math.abs(h+M)<.1&&Math.abs(_+g)<.1&&Math.abs(c+m+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,y=(m+1)/2,C=(u+1)/2,T=(p+f)/4,R=(h+M)/4,x=(_+g)/4;return v>y&&v>C?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=T/i,s=R/i):y>C?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=T/r,s=x/r):C<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(C),i=R/s,r=x/s),this.set(i,r,s,n),this}let d=Math.sqrt((g-_)*(g-_)+(h-M)*(h-M)+(f-p)*(f-p));return Math.abs(d)<.001&&(d=1),this.x=(g-_)/d,this.y=(h-M)/d,this.z=(f-p)/d,this.w=Math.acos((c+m+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Xe(this.x,e.x,n.x),this.y=Xe(this.y,e.y,n.y),this.z=Xe(this.z,e.z,n.z),this.w=Xe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=Xe(this.x,e,n),this.y=Xe(this.y,e,n),this.z=Xe(this.z,e,n),this.w=Xe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Xe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ph.prototype.isVector4=!0;let Rt=ph;class a3 extends Hr{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Jt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new Rt(0,0,e,n),this.scissorTest=!1,this.viewport=new Rt(0,0,e,n),this.textures=[];const r={width:e,height:n,depth:i.depth},s=new an(r),a=i.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:Jt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new sh(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this}dispose(){this.dispatchEvent({type:"dispose"})}}class fi extends a3{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class pg extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class o3 extends an{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Wt,this.minFilter=Wt,this.wrapR=wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hl=class Hl{constructor(e,n,i,r,s,a,o,l,c,p,h,f,m,_,M,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,a,o,l,c,p,h,f,m,_,M,g)}set(e,n,i,r,s,a,o,l,c,p,h,f,m,_,M,g){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=a,u[9]=o,u[13]=l,u[2]=c,u[6]=p,u[10]=h,u[14]=f,u[3]=m,u[7]=_,u[11]=M,u[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Hl().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),a=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(r),c=Math.sin(r),p=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*p,m=a*h,_=o*p,M=o*h;n[0]=l*p,n[4]=-l*h,n[8]=c,n[1]=m+_*c,n[5]=f-M*c,n[9]=-o*l,n[2]=M-f*c,n[6]=_+m*c,n[10]=a*l}else if(e.order==="YXZ"){const f=l*p,m=l*h,_=c*p,M=c*h;n[0]=f+M*o,n[4]=_*o-m,n[8]=a*c,n[1]=a*h,n[5]=a*p,n[9]=-o,n[2]=m*o-_,n[6]=M+f*o,n[10]=a*l}else if(e.order==="ZXY"){const f=l*p,m=l*h,_=c*p,M=c*h;n[0]=f-M*o,n[4]=-a*h,n[8]=_+m*o,n[1]=m+_*o,n[5]=a*p,n[9]=M-f*o,n[2]=-a*c,n[6]=o,n[10]=a*l}else if(e.order==="ZYX"){const f=a*p,m=a*h,_=o*p,M=o*h;n[0]=l*p,n[4]=_*c-m,n[8]=f*c+M,n[1]=l*h,n[5]=M*c+f,n[9]=m*c-_,n[2]=-c,n[6]=o*l,n[10]=a*l}else if(e.order==="YZX"){const f=a*l,m=a*c,_=o*l,M=o*c;n[0]=l*p,n[4]=M-f*h,n[8]=_*h+m,n[1]=h,n[5]=a*p,n[9]=-o*p,n[2]=-c*p,n[6]=m*h+_,n[10]=f-M*h}else if(e.order==="XZY"){const f=a*l,m=a*c,_=o*l,M=o*c;n[0]=l*p,n[4]=-h,n[8]=c*p,n[1]=f*h+M,n[5]=a*p,n[9]=m*h-_,n[2]=_*h-m,n[6]=o*p,n[10]=M*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(l3,e,c3)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),ki.crossVectors(i,xn),ki.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),ki.crossVectors(i,xn)),ki.normalize(),go.crossVectors(xn,ki),r[0]=ki.x,r[4]=go.x,r[8]=xn.x,r[1]=ki.y,r[5]=go.y,r[9]=xn.y,r[2]=ki.z,r[6]=go.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],p=i[1],h=i[5],f=i[9],m=i[13],_=i[2],M=i[6],g=i[10],u=i[14],d=i[3],v=i[7],y=i[11],C=i[15],T=r[0],R=r[4],x=r[8],b=r[12],L=r[1],P=r[5],z=r[9],q=r[13],J=r[2],U=r[6],W=r[10],k=r[14],B=r[3],j=r[7],Q=r[11],ae=r[15];return s[0]=a*T+o*L+l*J+c*B,s[4]=a*R+o*P+l*U+c*j,s[8]=a*x+o*z+l*W+c*Q,s[12]=a*b+o*q+l*k+c*ae,s[1]=p*T+h*L+f*J+m*B,s[5]=p*R+h*P+f*U+m*j,s[9]=p*x+h*z+f*W+m*Q,s[13]=p*b+h*q+f*k+m*ae,s[2]=_*T+M*L+g*J+u*B,s[6]=_*R+M*P+g*U+u*j,s[10]=_*x+M*z+g*W+u*Q,s[14]=_*b+M*q+g*k+u*ae,s[3]=d*T+v*L+y*J+C*B,s[7]=d*R+v*P+y*U+C*j,s[11]=d*x+v*z+y*W+C*Q,s[15]=d*b+v*q+y*k+C*ae,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],p=e[2],h=e[6],f=e[10],m=e[14],_=e[3],M=e[7],g=e[11],u=e[15],d=l*m-c*f,v=o*m-c*h,y=o*f-l*h,C=a*m-c*p,T=a*f-l*p,R=a*h-o*p;return n*(M*d-g*v+u*y)-i*(_*d-g*C+u*T)+r*(_*v-M*C+u*R)-s*(_*y-M*T+g*R)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],p=e[8],h=e[9],f=e[10],m=e[11],_=e[12],M=e[13],g=e[14],u=e[15],d=n*o-i*a,v=n*l-r*a,y=n*c-s*a,C=i*l-r*o,T=i*c-s*o,R=r*c-s*l,x=p*M-h*_,b=p*g-f*_,L=p*u-m*_,P=h*g-f*M,z=h*u-m*M,q=f*u-m*g,J=d*q-v*z+y*P+C*L-T*b+R*x;if(J===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/J;return e[0]=(o*q-l*z+c*P)*U,e[1]=(r*z-i*q-s*P)*U,e[2]=(M*R-g*T+u*C)*U,e[3]=(f*T-h*R-m*C)*U,e[4]=(l*L-a*q-c*b)*U,e[5]=(n*q-r*L+s*b)*U,e[6]=(g*y-_*R-u*v)*U,e[7]=(p*R-f*y+m*v)*U,e[8]=(a*z-o*L+c*x)*U,e[9]=(i*L-n*z-s*x)*U,e[10]=(_*T-M*y+u*d)*U,e[11]=(h*y-p*T-m*d)*U,e[12]=(o*b-a*P-l*x)*U,e[13]=(n*P-i*b+r*x)*U,e[14]=(M*v-_*C-g*d)*U,e[15]=(p*C-h*v+f*d)*U,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,a=e.x,o=e.y,l=e.z,c=s*a,p=s*o;return this.set(c*a+i,c*o-r*l,c*l+r*o,0,c*o+r*l,p*o+i,p*l-r*a,0,c*l-r*o,p*l+r*a,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,a){return this.set(1,i,s,0,e,1,a,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,a=n._y,o=n._z,l=n._w,c=s+s,p=a+a,h=o+o,f=s*c,m=s*p,_=s*h,M=a*p,g=a*h,u=o*h,d=l*c,v=l*p,y=l*h,C=i.x,T=i.y,R=i.z;return r[0]=(1-(M+u))*C,r[1]=(m+y)*C,r[2]=(_-v)*C,r[3]=0,r[4]=(m-y)*T,r[5]=(1-(f+u))*T,r[6]=(g+d)*T,r[7]=0,r[8]=(_+v)*R,r[9]=(g-d)*R,r[10]=(1-(f+M))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;e.x=r[12],e.y=r[13],e.z=r[14];const s=this.determinant();if(s===0)return i.set(1,1,1),n.identity(),this;let a=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),l=Yr.set(r[8],r[9],r[10]).length();s<0&&(a=-a),kn.copy(this);const c=1/a,p=1/o,h=1/l;return kn.elements[0]*=c,kn.elements[1]*=c,kn.elements[2]*=c,kn.elements[4]*=p,kn.elements[5]*=p,kn.elements[6]*=p,kn.elements[8]*=h,kn.elements[9]*=h,kn.elements[10]*=h,n.setFromRotationMatrix(kn),i.x=a,i.y=o,i.z=l,this}makePerspective(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,p=2*s/(n-e),h=2*s/(i-r),f=(n+e)/(n-e),m=(i+r)/(i-r);let _,M;if(l)_=s/(a-s),M=a*s/(a-s);else if(o===oi)_=-(a+s)/(a-s),M=-2*a*s/(a-s);else if(o===Ol)_=-a/(a-s),M=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=m,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,a,o=oi,l=!1){const c=this.elements,p=2/(n-e),h=2/(i-r),f=-(n+e)/(n-e),m=-(i+r)/(i-r);let _,M;if(l)_=1/(a-s),M=a/(a-s);else if(o===oi)_=-2/(a-s),M=-(a+s)/(a-s);else if(o===Ol)_=-1/(a-s),M=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=p,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=m,c[2]=0,c[6]=0,c[10]=_,c[14]=M,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}};Hl.prototype.isMatrix4=!0;let bt=Hl;const Yr=new F,kn=new bt,l3=new F(0,0,0),c3=new F(1,1,1),ki=new F,go=new F,xn=new F,X0=new bt,q0=new Vs;class Br{constructor(e=0,n=0,i=0,r=Br.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],p=r[9],h=r[2],f=r[6],m=r[10];switch(n){case"XYZ":this._y=Math.asin(Xe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-p,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Xe(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Xe(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Xe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-p,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Xe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-p,m),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return X0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(X0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return q0.setFromEuler(this),this.setFromQuaternion(q0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Br.DEFAULT_ORDER="XYZ";class mg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let u3=0;const Y0=new F,$r=new Vs,mi=new bt,vo=new F,Js=new F,f3=new F,d3=new Vs,$0=new F(1,0,0),K0=new F(0,1,0),Z0=new F(0,0,1),Q0={type:"added"},h3={type:"removed"},Kr={type:"childadded",child:null},jc={type:"childremoved",child:null};class on extends Hr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u3++}),this.uuid=ja(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=on.DEFAULT_UP.clone();const e=new F,n=new Br,i=new Vs,r=new F(1,1,1);function s(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new bt},normalMatrix:{value:new Ne}}),this.matrix=new bt,this.matrixWorld=new bt,this.matrixAutoUpdate=on.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis($0,e)}rotateY(e){return this.rotateOnAxis(K0,e)}rotateZ(e){return this.rotateOnAxis(Z0,e)}translateOnAxis(e,n){return Y0.copy(e).applyQuaternion(this.quaternion),this.position.add(Y0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($0,e)}translateY(e){return this.translateOnAxis(K0,e)}translateZ(e){return this.translateOnAxis(Z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(mi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?vo.copy(e):vo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mi.lookAt(Js,vo,this.up):mi.lookAt(vo,Js,this.up),this.quaternion.setFromRotationMatrix(mi),r&&(mi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(mi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Q0),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(h3),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),mi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),mi.multiply(e.parent.matrixWorld)),e.applyMatrix4(mi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Q0),Kr.child=e,this.dispatchEvent(Kr),Kr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,e,f3),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,d3,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const n=e.x,i=e.y,r=e.z,s=this.matrix.elements;s[12]+=n-s[0]*n-s[4]*i-s[8]*r,s[13]+=i-s[1]*n-s[5]*i-s[9]*r,s[14]+=r-s[2]*n-s[6]*i-s[10]*r}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),this.static!==!1&&(r.static=this.static),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.pivot!==null&&(r.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(r.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(r.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(o=>({...o})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,p=l.length;c<p;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(n){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),p=a(e.images),h=a(e.shapes),f=a(e.skeletons),m=a(e.animations),_=a(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),p.length>0&&(i.images=p),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),m.length>0&&(i.animations=m),_.length>0&&(i.nodes=_)}return i.object=r,i;function a(o){const l=[];for(const c in o){const p=o[c];delete p.metadata,l.push(p)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}on.DEFAULT_UP=new F(0,1,0);on.DEFAULT_MATRIX_AUTO_UPDATE=!0;on.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class br extends on{constructor(){super(),this.isGroup=!0,this.type="Group"}}const p3={type:"move"};class Xc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new br,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new br,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new br,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const M of e.hand.values()){const g=n.getJointPose(M,i),u=this._getHandJoint(c,M);g!==null&&(u.matrix.fromArray(g.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=g.radius),u.visible=g!==null}const p=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=p.position.distanceTo(h.position),m=.02,_=.005;c.inputState.pinching&&f>m+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=m-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(p3)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new br;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const gg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Vi={h:0,s:0,l:0},_o={h:0,s:0,l:0};function qc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=bn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=je.workingColorSpace){return this.r=e,this.g=n,this.b=i,je.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=je.workingColorSpace){if(e=t3(e,1),n=Xe(n,0,1),i=Xe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,a=2*i-s;this.r=qc(a,s,e+1/3),this.g=qc(a,s,e),this.b=qc(a,s,e-1/3)}return je.colorSpaceToWorking(this,r),this}setStyle(e,n=bn){function i(s){s!==void 0&&parseFloat(s)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Ce("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(s,16),n);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=bn){const i=gg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ri(e.r),this.g=Ri(e.g),this.b=Ri(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=bn){return je.workingToColorSpace(Zt.copy(this),e),Math.round(Xe(Zt.r*255,0,255))*65536+Math.round(Xe(Zt.g*255,0,255))*256+Math.round(Xe(Zt.b*255,0,255))}getHexString(e=bn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=je.workingColorSpace){je.workingToColorSpace(Zt.copy(this),n);const i=Zt.r,r=Zt.g,s=Zt.b,a=Math.max(i,r,s),o=Math.min(i,r,s);let l,c;const p=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=p<=.5?h/(a+o):h/(2-a-o),a){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=p,e}getRGB(e,n=je.workingColorSpace){return je.workingToColorSpace(Zt.copy(this),n),e.r=Zt.r,e.g=Zt.g,e.b=Zt.b,e}getStyle(e=bn){je.workingToColorSpace(Zt.copy(this),e);const n=Zt.r,i=Zt.g,r=Zt.b;return e!==bn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Vi),this.setHSL(Vi.h+e,Vi.s+n,Vi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Vi),e.getHSL(_o);const i=kc(Vi.h,_o.h,n),r=kc(Vi.s,_o.s,n),s=kc(Vi.l,_o.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Zt=new Qe;Qe.NAMES=gg;class m3 extends on{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Br,this.environmentIntensity=1,this.environmentRotation=new Br,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}const Vn=new F,gi=new F,Yc=new F,vi=new F,Zr=new F,Qr=new F,J0=new F,$c=new F,Kc=new F,Zc=new F,Qc=new Rt,Jc=new Rt,eu=new Rt;class In{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Vn.subVectors(e,n),r.cross(Vn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Vn.subVectors(r,n),gi.subVectors(i,n),Yc.subVectors(e,n);const a=Vn.dot(Vn),o=Vn.dot(gi),l=Vn.dot(Yc),c=gi.dot(gi),p=gi.dot(Yc),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const f=1/h,m=(c*l-o*p)*f,_=(a*p-o*l)*f;return s.set(1-m-_,_,m)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,vi)===null?!1:vi.x>=0&&vi.y>=0&&vi.x+vi.y<=1}static getInterpolation(e,n,i,r,s,a,o,l){return this.getBarycoord(e,n,i,r,vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,vi.x),l.addScaledVector(a,vi.y),l.addScaledVector(o,vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,a){return Qc.setScalar(0),Jc.setScalar(0),eu.setScalar(0),Qc.fromBufferAttribute(e,n),Jc.fromBufferAttribute(e,i),eu.fromBufferAttribute(e,r),a.setScalar(0),a.addScaledVector(Qc,s.x),a.addScaledVector(Jc,s.y),a.addScaledVector(eu,s.z),a}static isFrontFacing(e,n,i,r){return Vn.subVectors(i,n),gi.subVectors(e,n),Vn.cross(gi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Vn.subVectors(this.c,this.b),gi.subVectors(this.a,this.b),Vn.cross(gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return In.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return In.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return In.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return In.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return In.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let a,o;Zr.subVectors(r,i),Qr.subVectors(s,i),$c.subVectors(e,i);const l=Zr.dot($c),c=Qr.dot($c);if(l<=0&&c<=0)return n.copy(i);Kc.subVectors(e,r);const p=Zr.dot(Kc),h=Qr.dot(Kc);if(p>=0&&h<=p)return n.copy(r);const f=l*h-p*c;if(f<=0&&l>=0&&p<=0)return a=l/(l-p),n.copy(i).addScaledVector(Zr,a);Zc.subVectors(e,s);const m=Zr.dot(Zc),_=Qr.dot(Zc);if(_>=0&&m<=_)return n.copy(s);const M=m*c-l*_;if(M<=0&&c>=0&&_<=0)return o=c/(c-_),n.copy(i).addScaledVector(Qr,o);const g=p*_-m*h;if(g<=0&&h-p>=0&&m-_>=0)return J0.subVectors(s,r),o=(h-p)/(h-p+(m-_)),n.copy(r).addScaledVector(J0,o);const u=1/(g+M+f);return a=M*u,o=f*u,n.copy(i).addScaledVector(Zr,a).addScaledVector(Qr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Xa{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Hn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Hn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Hn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Hn):Hn.fromBufferAttribute(s,a),Hn.applyMatrix4(e.matrixWorld),this.expandByPoint(Hn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xo.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),xo.copy(i.boundingBox)),xo.applyMatrix4(e.matrixWorld),this.union(xo)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Hn),Hn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ea),So.subVectors(this.max,ea),Jr.subVectors(e.a,ea),es.subVectors(e.b,ea),ts.subVectors(e.c,ea),Hi.subVectors(es,Jr),Gi.subVectors(ts,es),mr.subVectors(Jr,ts);let n=[0,-Hi.z,Hi.y,0,-Gi.z,Gi.y,0,-mr.z,mr.y,Hi.z,0,-Hi.x,Gi.z,0,-Gi.x,mr.z,0,-mr.x,-Hi.y,Hi.x,0,-Gi.y,Gi.x,0,-mr.y,mr.x,0];return!tu(n,Jr,es,ts,So)||(n=[1,0,0,0,1,0,0,0,1],!tu(n,Jr,es,ts,So))?!1:(yo.crossVectors(Hi,Gi),n=[yo.x,yo.y,yo.z],tu(n,Jr,es,ts,So))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Hn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Hn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_i[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_i[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_i[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_i[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_i[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_i[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_i[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_i[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_i),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const _i=[new F,new F,new F,new F,new F,new F,new F,new F],Hn=new F,xo=new Xa,Jr=new F,es=new F,ts=new F,Hi=new F,Gi=new F,mr=new F,ea=new F,So=new F,yo=new F,gr=new F;function tu(t,e,n,i,r){for(let s=0,a=t.length-3;s<=a;s+=3){gr.fromArray(t,s);const o=r.x*Math.abs(gr.x)+r.y*Math.abs(gr.y)+r.z*Math.abs(gr.z),l=e.dot(gr),c=n.dot(gr),p=i.dot(gr);if(Math.max(-Math.max(l,c,p),Math.min(l,c,p))>o)return!1}return!0}const Lt=new F,Mo=new Ze;let g3=0;class $n extends Hr{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:g3++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=B0,this.updateRanges=[],this.gpuType=ai,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Mo.fromBufferAttribute(this,n),Mo.applyMatrix3(e),this.setXY(n,Mo.x,Mo.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix3(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyMatrix4(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.applyNormalMatrix(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Lt.fromBufferAttribute(this,n),Lt.transformDirection(e),this.setXYZ(n,Lt.x,Lt.y,Lt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=un(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=un(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=un(n,this.array),i=un(i,this.array),r=un(r,this.array),s=un(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==B0&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class vg extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class _g extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Pt extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}const v3=new Xa,ta=new F,nu=new F;class qa{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):v3.setFromPoints(e).getCenter(i);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ta.subVectors(e,this.center);const n=ta.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ta,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ta.copy(e.center).add(nu)),this.expandByPoint(ta.copy(e.center).sub(nu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let _3=0;const Rn=new bt,iu=new on,ns=new F,Sn=new Xa,na=new Xa,Bt=new F;class tn extends Hr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_3++}),this.uuid=ja(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Z_(e)?_g:vg)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ne().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const a=e[r];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pt(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Xa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Sn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Sn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Sn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Sn.min),this.boundingBox.expandByPoint(Sn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(Sn.setFromBufferAttribute(e),n)for(let s=0,a=n.length;s<a;s++){const o=n[s];na.setFromBufferAttribute(o),this.morphTargetsRelative?(Bt.addVectors(Sn.min,na.min),Sn.expandByPoint(Bt),Bt.addVectors(Sn.max,na.max),Sn.expandByPoint(Bt)):(Sn.expandByPoint(na.min),Sn.expandByPoint(na.max))}Sn.getCenter(i);let r=0;for(let s=0,a=e.count;s<a;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,a=n.length;s<a;s++){const o=n[s],l=this.morphTargetsRelative;for(let c=0,p=o.count;c<p;c++)Bt.fromBufferAttribute(o,c),l&&(ns.fromBufferAttribute(e,c),Bt.add(ns)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new F,l[x]=new F;const c=new F,p=new F,h=new F,f=new Ze,m=new Ze,_=new Ze,M=new F,g=new F;function u(x,b,L){c.fromBufferAttribute(i,x),p.fromBufferAttribute(i,b),h.fromBufferAttribute(i,L),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,b),_.fromBufferAttribute(s,L),p.sub(c),h.sub(c),m.sub(f),_.sub(f);const P=1/(m.x*_.y-_.x*m.y);isFinite(P)&&(M.copy(p).multiplyScalar(_.y).addScaledVector(h,-m.y).multiplyScalar(P),g.copy(h).multiplyScalar(m.x).addScaledVector(p,-_.x).multiplyScalar(P),o[x].add(M),o[b].add(M),o[L].add(M),l[x].add(g),l[b].add(g),l[L].add(g))}let d=this.groups;d.length===0&&(d=[{start:0,count:e.count}]);for(let x=0,b=d.length;x<b;++x){const L=d[x],P=L.start,z=L.count;for(let q=P,J=P+z;q<J;q+=3)u(e.getX(q+0),e.getX(q+1),e.getX(q+2))}const v=new F,y=new F,C=new F,T=new F;function R(x){C.fromBufferAttribute(r,x),T.copy(C);const b=o[x];v.copy(b),v.sub(C.multiplyScalar(C.dot(b))).normalize(),y.crossVectors(T,b);const P=y.dot(l[x])<0?-1:1;a.setXYZW(x,v.x,v.y,v.z,P)}for(let x=0,b=d.length;x<b;++x){const L=d[x],P=L.start,z=L.count;for(let q=P,J=P+z;q<J;q+=3)R(e.getX(q+0)),R(e.getX(q+1)),R(e.getX(q+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,m=i.count;f<m;f++)i.setXYZ(f,0,0,0);const r=new F,s=new F,a=new F,o=new F,l=new F,c=new F,p=new F,h=new F;if(e)for(let f=0,m=e.count;f<m;f+=3){const _=e.getX(f+0),M=e.getX(f+1),g=e.getX(f+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,M),a.fromBufferAttribute(n,g),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),o.fromBufferAttribute(i,_),l.fromBufferAttribute(i,M),c.fromBufferAttribute(i,g),o.add(p),l.add(p),c.add(p),i.setXYZ(_,o.x,o.y,o.z),i.setXYZ(M,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,m=n.count;f<m;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),a.fromBufferAttribute(n,f+2),p.subVectors(a,s),h.subVectors(r,s),p.cross(h),i.setXYZ(f+0,p.x,p.y,p.z),i.setXYZ(f+1,p.x,p.y,p.z),i.setXYZ(f+2,p.x,p.y,p.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(o,l){const c=o.array,p=o.itemSize,h=o.normalized,f=new c.constructor(l.length*p);let m=0,_=0;for(let M=0,g=l.length;M<g;M++){o.isInterleavedBufferAttribute?m=l[M]*o.data.stride+o.offset:m=l[M]*p;for(let u=0;u<p;u++)f[_++]=c[m++]}return new $n(f,p,h)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new tn,i=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,i);n.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let p=0,h=c.length;p<h;p++){const f=c[p],m=e(f,i);l.push(m)}n.morphAttributes[o]=l}n.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],p=[];for(let h=0,f=c.length;h<f;h++){const m=c[h];p.push(m.toJSON(e.data))}p.length>0&&(r[l]=p,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const p=r[c];this.setAttribute(c,p.clone(n))}const s=e.morphAttributes;for(const c in s){const p=[],h=s[c];for(let f=0,m=h.length;f<m;f++)p.push(h[f].clone(n));this.morphAttributes[c]=p}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,p=a.length;c<p;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}let x3=0;class Hs extends Hr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:x3++}),this.uuid=ja(),this.name="",this.type="Material",this.blending=ws,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uf,this.blendDst=ff,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=z0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Ce(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Ce(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==uf&&(i.blendSrc=this.blendSrc),this.blendDst!==ff&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==z0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(n){const s=r(e.textures),a=r(e.images);s.length>0&&(i.textures=s),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const xi=new F,ru=new F,Eo=new F,Wi=new F,su=new F,To=new F,au=new F;class ah{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=xi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(xi.copy(this.origin).addScaledVector(this.direction,n),xi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){ru.copy(e).add(n).multiplyScalar(.5),Eo.copy(n).sub(e).normalize(),Wi.copy(this.origin).sub(ru);const s=e.distanceTo(n)*.5,a=-this.direction.dot(Eo),o=Wi.dot(this.direction),l=-Wi.dot(Eo),c=Wi.lengthSq(),p=Math.abs(1-a*a);let h,f,m,_;if(p>0)if(h=a*l-o,f=a*o-l,_=s*p,h>=0)if(f>=-_)if(f<=_){const M=1/p;h*=M,f*=M,m=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;else f<=-_?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c):f<=_?(h=0,f=Math.min(Math.max(-s,-l),s),m=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),m=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ru).addScaledVector(Eo,f),m}intersectSphere(e,n){xi.subVectors(e.center,this.origin);const i=xi.dot(this.direction),r=xi.dot(xi)-i*i,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,a,o,l;const c=1/this.direction.x,p=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),p>=0?(s=(e.min.y-f.y)*p,a=(e.max.y-f.y)*p):(s=(e.max.y-f.y)*p,a=(e.min.y-f.y)*p),i>a||s>r||((s>i||isNaN(i))&&(i=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||o>r)||((o>i||i!==i)&&(i=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,xi)!==null}intersectTriangle(e,n,i,r,s){su.subVectors(n,e),To.subVectors(i,e),au.crossVectors(su,To);let a=this.direction.dot(au),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wi.subVectors(this.origin,e);const l=o*this.direction.dot(To.crossVectors(Wi,To));if(l<0)return null;const c=o*this.direction.dot(su.cross(Wi));if(c<0||l+c>a)return null;const p=-o*Wi.dot(au);return p<0?null:this.at(p/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Bl extends Hs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Br,this.combine=Z1,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ep=new bt,vr=new ah,wo=new qa,tp=new F,Ao=new F,Co=new F,Ro=new F,ou=new F,bo=new F,np=new F,Po=new F;class Zn extends on{constructor(e=new tn,n=new Bl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const p=o[l],h=s[l];p!==0&&(ou.fromBufferAttribute(h,e),a?bo.addScaledVector(ou,p):bo.addScaledVector(ou.sub(n),p))}n.add(bo)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),wo.copy(i.boundingSphere),wo.applyMatrix4(s),vr.copy(e.ray).recast(e.near),!(wo.containsPoint(vr.origin)===!1&&(vr.intersectSphere(wo,tp)===null||vr.origin.distanceToSquared(tp)>(e.far-e.near)**2))&&(ep.copy(s).invert(),vr.copy(e.ray).applyMatrix4(ep),!(i.boundingBox!==null&&vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,vr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,p=s.attributes.uv1,h=s.attributes.normal,f=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],u=a[g.materialIndex],d=Math.max(g.start,m.start),v=Math.min(o.count,Math.min(g.start+g.count,m.start+m.count));for(let y=d,C=v;y<C;y+=3){const T=o.getX(y),R=o.getX(y+1),x=o.getX(y+2);r=Lo(this,u,e,i,c,p,h,T,R,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(o.count,m.start+m.count);for(let g=_,u=M;g<u;g+=3){const d=o.getX(g),v=o.getX(g+1),y=o.getX(g+2);r=Lo(this,a,e,i,c,p,h,d,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let _=0,M=f.length;_<M;_++){const g=f[_],u=a[g.materialIndex],d=Math.max(g.start,m.start),v=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let y=d,C=v;y<C;y+=3){const T=y,R=y+1,x=y+2;r=Lo(this,u,e,i,c,p,h,T,R,x),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=g.materialIndex,n.push(r))}}else{const _=Math.max(0,m.start),M=Math.min(l.count,m.start+m.count);for(let g=_,u=M;g<u;g+=3){const d=g,v=g+1,y=g+2;r=Lo(this,a,e,i,c,p,h,d,v,y),r&&(r.faceIndex=Math.floor(g/3),n.push(r))}}}}function S3(t,e,n,i,r,s,a,o){let l;if(e.side===gn?l=i.intersectTriangle(a,s,r,!0,o):l=i.intersectTriangle(r,s,a,e.side===ur,o),l===null)return null;Po.copy(o),Po.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Po);return c<n.near||c>n.far?null:{distance:c,point:Po.clone(),object:t}}function Lo(t,e,n,i,r,s,a,o,l,c){t.getVertexPosition(o,Ao),t.getVertexPosition(l,Co),t.getVertexPosition(c,Ro);const p=S3(t,e,n,i,Ao,Co,Ro,np);if(p){const h=new F;In.getBarycoord(np,Ao,Co,Ro,h),r&&(p.uv=In.getInterpolatedAttribute(r,o,l,c,h,new Ze)),s&&(p.uv1=In.getInterpolatedAttribute(s,o,l,c,h,new Ze)),a&&(p.normal=In.getInterpolatedAttribute(a,o,l,c,h,new F),p.normal.dot(i.direction)>0&&p.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};In.getNormal(Ao,Co,Ro,f.normal),p.face=f,p.barycoord=h}return p}class y3 extends an{constructor(e=null,n=1,i=1,r,s,a,o,l,c=Wt,p=Wt,h,f){super(null,a,o,l,c,p,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const lu=new F,M3=new F,E3=new Ne;class yr{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=lu.subVectors(i,n).cross(M3.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){const r=e.delta(lu),s=this.normal.dot(r);if(s===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(r,a)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||E3.getNormalMatrix(e),r=this.coplanarPoint(lu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const _r=new qa,T3=new Ze(.5,.5),Do=new F;class xg{constructor(e=new yr,n=new yr,i=new yr,r=new yr,s=new yr,a=new yr){this.planes=[e,n,i,r,s,a]}set(e,n,i,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=oi,i=!1){const r=this.planes,s=e.elements,a=s[0],o=s[1],l=s[2],c=s[3],p=s[4],h=s[5],f=s[6],m=s[7],_=s[8],M=s[9],g=s[10],u=s[11],d=s[12],v=s[13],y=s[14],C=s[15];if(r[0].setComponents(c-a,m-p,u-_,C-d).normalize(),r[1].setComponents(c+a,m+p,u+_,C+d).normalize(),r[2].setComponents(c+o,m+h,u+M,C+v).normalize(),r[3].setComponents(c-o,m-h,u-M,C-v).normalize(),i)r[4].setComponents(l,f,g,y).normalize(),r[5].setComponents(c-l,m-f,u-g,C-y).normalize();else if(r[4].setComponents(c-l,m-f,u-g,C-y).normalize(),n===oi)r[5].setComponents(c+l,m+f,u+g,C+y).normalize();else if(n===Ol)r[5].setComponents(l,f,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_r.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),_r.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_r)}intersectsSprite(e){_r.center.set(0,0,0);const n=T3.distanceTo(e.center);return _r.radius=.7071067811865476+n,_r.applyMatrix4(e.matrixWorld),this.intersectsSphere(_r)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Do.x=r.normal.x>0?e.max.x:e.min.x,Do.y=r.normal.y>0?e.max.y:e.min.y,Do.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Do)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sg extends Hs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Qe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const kl=new F,Vl=new F,ip=new bt,ia=new ah,No=new qa,cu=new F,rp=new F;class w3 extends on{constructor(e=new tn,n=new Sg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[0];for(let r=1,s=n.count;r<s;r++)kl.fromBufferAttribute(n,r-1),Vl.fromBufferAttribute(n,r),i[r]=i[r-1],i[r]+=kl.distanceTo(Vl);e.setAttribute("lineDistance",new Pt(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(r),No.radius+=s,e.ray.intersectsSphere(No)===!1)return;ip.copy(r).invert(),ia.copy(e.ray).applyMatrix4(ip);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,p=i.index,f=i.attributes.position;if(p!==null){const m=Math.max(0,a.start),_=Math.min(p.count,a.start+a.count);for(let M=m,g=_-1;M<g;M+=c){const u=p.getX(M),d=p.getX(M+1),v=Io(this,e,ia,l,u,d,M);v&&n.push(v)}if(this.isLineLoop){const M=p.getX(_-1),g=p.getX(m),u=Io(this,e,ia,l,M,g,_-1);u&&n.push(u)}}else{const m=Math.max(0,a.start),_=Math.min(f.count,a.start+a.count);for(let M=m,g=_-1;M<g;M+=c){const u=Io(this,e,ia,l,M,M+1,M);u&&n.push(u)}if(this.isLineLoop){const M=Io(this,e,ia,l,_-1,m,_-1);M&&n.push(M)}}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Io(t,e,n,i,r,s,a){const o=t.geometry.attributes.position;if(kl.fromBufferAttribute(o,r),Vl.fromBufferAttribute(o,s),n.distanceSqToSegment(kl,Vl,cu,rp)>i)return;cu.applyMatrix4(t.matrixWorld);const c=e.ray.origin.distanceTo(cu);if(!(c<e.near||c>e.far))return{distance:c,point:rp.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}const sp=new F,ap=new F;class A3 extends w3{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const n=e.attributes.position,i=[];for(let r=0,s=n.count;r<s;r+=2)sp.fromBufferAttribute(n,r),ap.fromBufferAttribute(n,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+sp.distanceTo(ap);e.setAttribute("lineDistance",new Pt(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class yg extends Hs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const op=new bt,Jf=new ah,Uo=new qa,Fo=new F;class C3 extends on{constructor(e=new tn,n=new yg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Uo.copy(i.boundingSphere),Uo.applyMatrix4(r),Uo.radius+=s,e.ray.intersectsSphere(Uo)===!1)return;op.copy(r).invert(),Jf.copy(e.ray).applyMatrix4(op);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,h=i.attributes.position;if(c!==null){const f=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let _=f,M=m;_<M;_++){const g=c.getX(_);Fo.fromBufferAttribute(h,g),lp(Fo,g,l,r,e,n,this)}}else{const f=Math.max(0,a.start),m=Math.min(h.count,a.start+a.count);for(let _=f,M=m;_<M;_++)Fo.fromBufferAttribute(h,_),lp(Fo,_,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function lp(t,e,n,i,r,s,a){const o=Jf.distanceSqToPoint(t);if(o<n){const l=new F;Jf.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Mg extends an{constructor(e=[],n=Or,i,r,s,a,o,l,c,p){super(e,n,i,r,s,a,o,l,c,p),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Fs extends an{constructor(e,n,i=di,r,s,a,o=Wt,l=Wt,c,p=Ii,h=1){if(p!==Ii&&p!==Rr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:n,depth:h};super(f,r,s,a,o,l,p,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new sh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class R3 extends Fs{constructor(e,n=di,i=Or,r,s,a=Wt,o=Wt,l,c=Ii){const p={width:e,height:e,depth:1},h=[p,p,p,p,p,p];super(e,e,n,i,r,s,a,o,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Eg extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ya extends tn{constructor(e=1,n=1,i=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],p=[],h=[];let f=0,m=0;_("z","y","x",-1,-1,i,n,e,a,s,0),_("z","y","x",1,-1,i,n,-e,a,s,1),_("x","z","y",1,1,e,i,n,r,a,2),_("x","z","y",1,-1,e,i,-n,r,a,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(h,2));function _(M,g,u,d,v,y,C,T,R,x,b){const L=y/R,P=C/x,z=y/2,q=C/2,J=T/2,U=R+1,W=x+1;let k=0,B=0;const j=new F;for(let Q=0;Q<W;Q++){const ae=Q*P-q;for(let de=0;de<U;de++){const Be=de*L-z;j[M]=Be*d,j[g]=ae*v,j[u]=J,c.push(j.x,j.y,j.z),j[M]=0,j[g]=0,j[u]=T>0?1:-1,p.push(j.x,j.y,j.z),h.push(de/R),h.push(1-Q/x),k+=1}}for(let Q=0;Q<x;Q++)for(let ae=0;ae<R;ae++){const de=f+ae+U*Q,Be=f+ae+U*(Q+1),He=f+(ae+1)+U*(Q+1),Pe=f+(ae+1)+U*Q;l.push(de,Be,Pe),l.push(Be,He,Pe),B+=6}o.addGroup(m,B,b),m+=B,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ya(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class oh extends tn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],a=[];o(r),c(i),p(),this.setAttribute("position",new Pt(s,3)),this.setAttribute("normal",new Pt(s.slice(),3)),this.setAttribute("uv",new Pt(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(d){const v=new F,y=new F,C=new F;for(let T=0;T<n.length;T+=3)m(n[T+0],v),m(n[T+1],y),m(n[T+2],C),l(v,y,C,d)}function l(d,v,y,C){const T=C+1,R=[];for(let x=0;x<=T;x++){R[x]=[];const b=d.clone().lerp(y,x/T),L=v.clone().lerp(y,x/T),P=T-x;for(let z=0;z<=P;z++)z===0&&x===T?R[x][z]=b:R[x][z]=b.clone().lerp(L,z/P)}for(let x=0;x<T;x++)for(let b=0;b<2*(T-x)-1;b++){const L=Math.floor(b/2);b%2===0?(f(R[x][L+1]),f(R[x+1][L]),f(R[x][L])):(f(R[x][L+1]),f(R[x+1][L+1]),f(R[x+1][L]))}}function c(d){const v=new F;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(d),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function p(){const d=new F;for(let v=0;v<s.length;v+=3){d.x=s[v+0],d.y=s[v+1],d.z=s[v+2];const y=g(d)/2/Math.PI+.5,C=u(d)/Math.PI+.5;a.push(y,1-C)}_(),h()}function h(){for(let d=0;d<a.length;d+=6){const v=a[d+0],y=a[d+2],C=a[d+4],T=Math.max(v,y,C),R=Math.min(v,y,C);T>.9&&R<.1&&(v<.2&&(a[d+0]+=1),y<.2&&(a[d+2]+=1),C<.2&&(a[d+4]+=1))}}function f(d){s.push(d.x,d.y,d.z)}function m(d,v){const y=d*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function _(){const d=new F,v=new F,y=new F,C=new F,T=new Ze,R=new Ze,x=new Ze;for(let b=0,L=0;b<s.length;b+=9,L+=6){d.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),T.set(a[L+0],a[L+1]),R.set(a[L+2],a[L+3]),x.set(a[L+4],a[L+5]),C.copy(d).add(v).add(y).divideScalar(3);const P=g(C);M(T,L+0,d,P),M(R,L+2,v,P),M(x,L+4,y,P)}}function M(d,v,y,C){C<0&&d.x===1&&(a[v]=d.x-1),y.x===0&&y.z===0&&(a[v]=C/2/Math.PI+.5)}function g(d){return Math.atan2(d.z,-d.x)}function u(d){return Math.atan2(-d.y,Math.sqrt(d.x*d.x+d.z*d.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oh(e.vertices,e.indices,e.radius,e.detail)}}const Oo=new F,zo=new F,uu=new F,Bo=new In;class b3 extends tn{constructor(e=null,n=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:n},e!==null){const r=Math.pow(10,4),s=Math.cos(ol*n),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],p=["a","b","c"],h=new Array(3),f={},m=[];for(let _=0;_<l;_+=3){a?(c[0]=a.getX(_),c[1]=a.getX(_+1),c[2]=a.getX(_+2)):(c[0]=_,c[1]=_+1,c[2]=_+2);const{a:M,b:g,c:u}=Bo;if(M.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),u.fromBufferAttribute(o,c[2]),Bo.getNormal(uu),h[0]=`${Math.round(M.x*r)},${Math.round(M.y*r)},${Math.round(M.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(u.x*r)},${Math.round(u.y*r)},${Math.round(u.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let d=0;d<3;d++){const v=(d+1)%3,y=h[d],C=h[v],T=Bo[p[d]],R=Bo[p[v]],x=`${y}_${C}`,b=`${C}_${y}`;b in f&&f[b]?(uu.dot(f[b].normal)<=s&&(m.push(T.x,T.y,T.z),m.push(R.x,R.y,R.z)),f[b]=null):x in f||(f[x]={index0:c[d],index1:c[v],normal:uu.clone()})}}for(const _ in f)if(f[_]){const{index0:M,index1:g}=f[_];Oo.fromBufferAttribute(o,M),zo.fromBufferAttribute(o,g),m.push(Oo.x,Oo.y,Oo.z),m.push(zo.x,zo.y,zo.z)}this.setAttribute("position",new Pt(m,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class lh extends oh{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,n),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new lh(e.radius,e.detail)}}class ac extends tn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,a=n/2,o=Math.floor(i),l=Math.floor(r),c=o+1,p=l+1,h=e/o,f=n/l,m=[],_=[],M=[],g=[];for(let u=0;u<p;u++){const d=u*f-a;for(let v=0;v<c;v++){const y=v*h-s;_.push(y,-d,0),M.push(0,0,1),g.push(v/o),g.push(1-u/l)}}for(let u=0;u<l;u++)for(let d=0;d<o;d++){const v=d+c*u,y=d+c*(u+1),C=d+1+c*(u+1),T=d+1+c*u;m.push(v,y,T),m.push(y,C,T)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ac(e.width,e.height,e.widthSegments,e.heightSegments)}}class ch extends tn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(a+o,Math.PI);let c=0;const p=[],h=new F,f=new F,m=[],_=[],M=[],g=[];for(let u=0;u<=i;u++){const d=[],v=u/i;let y=0;u===0&&a===0?y=.5/n:u===i&&l===Math.PI&&(y=-.5/n);for(let C=0;C<=n;C++){const T=C/n;h.x=-e*Math.cos(r+T*s)*Math.sin(a+v*o),h.y=e*Math.cos(a+v*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+v*o),_.push(h.x,h.y,h.z),f.copy(h).normalize(),M.push(f.x,f.y,f.z),g.push(T+y,1-v),d.push(c++)}p.push(d)}for(let u=0;u<i;u++)for(let d=0;d<n;d++){const v=p[u][d+1],y=p[u][d],C=p[u+1][d],T=p[u+1][d+1];(u!==0||a>0)&&m.push(v,y,T),(u!==i-1||l<Math.PI)&&m.push(y,C,T)}this.setIndex(m),this.setAttribute("position",new Pt(_,3)),this.setAttribute("normal",new Pt(M,3)),this.setAttribute("uv",new Pt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ch(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class uh extends tn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s,thetaStart:a,thetaLength:o},i=Math.floor(i),r=Math.floor(r);const l=[],c=[],p=[],h=[],f=new F,m=new F,_=new F;for(let M=0;M<=i;M++){const g=a+M/i*o;for(let u=0;u<=r;u++){const d=u/r*s;m.x=(e+n*Math.cos(g))*Math.cos(d),m.y=(e+n*Math.cos(g))*Math.sin(d),m.z=n*Math.sin(g),c.push(m.x,m.y,m.z),f.x=e*Math.cos(d),f.y=e*Math.sin(d),_.subVectors(m,f).normalize(),p.push(_.x,_.y,_.z),h.push(u/r),h.push(M/i)}}for(let M=1;M<=i;M++)for(let g=1;g<=r;g++){const u=(r+1)*M+g-1,d=(r+1)*(M-1)+g-1,v=(r+1)*(M-1)+g,y=(r+1)*M+g;l.push(u,d,y),l.push(d,v,y)}this.setIndex(l),this.setAttribute("position",new Pt(c,3)),this.setAttribute("normal",new Pt(p,3)),this.setAttribute("uv",new Pt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}function Os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];if(cp(r))r.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone();else if(Array.isArray(r))if(cp(r[0])){const s=[];for(let a=0,o=r.length;a<o;a++)s[a]=r[a].clone();e[n][i]=s}else e[n][i]=r.slice();else e[n][i]=r}}return e}function nn(t){const e={};for(let n=0;n<t.length;n++){const i=Os(t[n]);for(const r in i)e[r]=i[r]}return e}function cp(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function P3(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Tg(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:je.workingColorSpace}const L3={clone:Os,merge:nn};var D3=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,N3=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class hi extends Hs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=D3,this.fragmentShader=N3,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=P3(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?n.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[r]={type:"m4",value:a.toArray()}:n.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class I3 extends hi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class U3 extends Hs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=G_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class F3 extends Hs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const ko=new F,Vo=new Vs,ti=new F;class wg extends on{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new bt,this.projectionMatrix=new bt,this.projectionMatrixInverse=new bt,this.coordinateSystem=oi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ko,Vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Vo,ti.set(1,1,1)).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorld.decompose(ko,Vo,ti),ti.x===1&&ti.y===1&&ti.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ko,Vo,ti.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ji=new F,up=new Ze,fp=new Ze;class Dn extends wg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ol*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qf*2*Math.atan(Math.tan(ol*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ji.x,ji.y).multiplyScalar(-e/ji.z),ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ji.x,ji.y).multiplyScalar(-e/ji.z)}getViewSize(e,n){return this.getViewBounds(e,up,fp),n.subVectors(fp,up)}setViewOffset(e,n,i,r,s,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ol*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,n-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}class Ag extends wg{constructor(e=-1,n=1,i=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,a=i+e,o=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,p=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=p*this.view.offsetY,l=o-p*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const is=-90,rs=1;class O3 extends on{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Dn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new Dn(is,rs,e,n);s.layers=this.layers,this.add(s);const a=new Dn(is,rs,e,n);a.layers=this.layers,this.add(a);const o=new Dn(is,rs,e,n);o.layers=this.layers,this.add(o);const l=new Dn(is,rs,e,n);l.layers=this.layers,this.add(l);const c=new Dn(is,rs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,a,o,l]=n;for(const c of n)this.remove(c);if(e===oi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,p]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const M=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(i,0,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,s),e.setRenderTarget(i,1,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),e.setRenderTarget(i,4,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),i.texture.generateMipmaps=M,e.setRenderTarget(i,5,r),g&&e.autoClear===!1&&e.clearDepth(),e.render(n,p),e.setRenderTarget(h,f,m),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class z3 extends Dn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class B3{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,Ce("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}const mh=class mh{constructor(e,n,i,r){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,r)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,r){const s=this.elements;return s[0]=e,s[2]=n,s[1]=i,s[3]=r,this}};mh.prototype.isMatrix2=!0;let dp=mh;function hp(t,e,n,i){const r=k3(i);switch(n){case ug:return t*e;case dg:return t*e/r.components*r.byteLength;case eh:return t*e/r.components*r.byteLength;case zr:return t*e*2/r.components*r.byteLength;case th:return t*e*2/r.components*r.byteLength;case fg:return t*e*3/r.components*r.byteLength;case Xn:return t*e*4/r.components*r.byteLength;case nh:return t*e*4/r.components*r.byteLength;case il:case rl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case sl:case al:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:case Tf:return Math.max(t,16)*Math.max(e,8)/4;case yf:case Ef:return Math.max(t,8)*Math.max(e,8)/2;case wf:case Af:case Rf:case bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Cf:case Nl:case Pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Lf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Df:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case If:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Uf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ff:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Of:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Hf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Gf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Wf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jf:case Xf:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Yf:case $f:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Il:case Kf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function k3(t){switch(t){case Nn:case ag:return{byteLength:1,components:1};case za:case og:case Ni:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case di:case Zd:case ai:return{byteLength:4,components:1};case lg:case cg:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Cg(){let t=null,e=!1,n=null,i=null;function r(s,a){n(s,a),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function V3(t){const e=new WeakMap;function n(o,l){const c=o.array,p=o.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,p),o.onUploadCallback();let m;if(c instanceof Float32Array)m=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)m=t.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?m=t.HALF_FLOAT:m=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=t.SHORT;else if(c instanceof Uint32Array)m=t.UNSIGNED_INT;else if(c instanceof Int32Array)m=t.INT;else if(c instanceof Int8Array)m=t.BYTE;else if(c instanceof Uint8Array)m=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function i(o,l,c){const p=l.array,h=l.updateRanges;if(t.bindBuffer(c,o),h.length===0)t.bufferSubData(c,0,p);else{h.sort((m,_)=>m.start-_.start);let f=0;for(let m=1;m<h.length;m++){const _=h[f],M=h[m];M.start<=_.start+_.count+1?_.count=Math.max(_.count,M.start+M.count-_.start):(++f,h[f]=M)}h.length=f+1;for(let m=0,_=h.length;m<_;m++){const M=h[m];t.bufferSubData(c,M.start*p.BYTES_PER_ELEMENT,p,M.start,M.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(t.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const p=e.get(o);(!p||p.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,n(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}var H3=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G3=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,W3=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,j3=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X3=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,q3=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Y3=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,$3=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K3=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Z3=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q3=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J3=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ex=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tx=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nx=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ix=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,rx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ax=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ox=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cx=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,ux=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,fx=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dx=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hx=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,px=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,vx=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,_x="gl_FragColor = linearToOutputTexel( gl_FragColor );",xx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Sx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,yx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Mx=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ex=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tx=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ax=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bx=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Px=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Lx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Dx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,Ix=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ux=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fx=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ox=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,kx=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = inverseTransformDirection( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Hx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Gx=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Wx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,jx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,qx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Kx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,nS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,iS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,sS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,aS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,oS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,lS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,fS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,dS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hS=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,pS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,mS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,gS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,vS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,_S=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,xS=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,SS=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yS=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,MS=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ES=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,TS=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,wS=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,AS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,CS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,RS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,PS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,LS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,DS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,US=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,FS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,zS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,BS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,VS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,GS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,WS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,YS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,$S=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,KS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ZS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,QS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ey=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ty=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ny=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,iy=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ry=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sy=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ay=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oy=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ly=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,cy=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uy=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fy=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dy=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,hy=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,py=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,my=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gy=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,vy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_y=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xy=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Sy=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yy=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Oe={alphahash_fragment:H3,alphahash_pars_fragment:G3,alphamap_fragment:W3,alphamap_pars_fragment:j3,alphatest_fragment:X3,alphatest_pars_fragment:q3,aomap_fragment:Y3,aomap_pars_fragment:$3,batching_pars_vertex:K3,batching_vertex:Z3,begin_vertex:Q3,beginnormal_vertex:J3,bsdfs:ex,iridescence_fragment:tx,bumpmap_pars_fragment:nx,clipping_planes_fragment:ix,clipping_planes_pars_fragment:rx,clipping_planes_pars_vertex:sx,clipping_planes_vertex:ax,color_fragment:ox,color_pars_fragment:lx,color_pars_vertex:cx,color_vertex:ux,common:fx,cube_uv_reflection_fragment:dx,defaultnormal_vertex:hx,displacementmap_pars_vertex:px,displacementmap_vertex:mx,emissivemap_fragment:gx,emissivemap_pars_fragment:vx,colorspace_fragment:_x,colorspace_pars_fragment:xx,envmap_fragment:Sx,envmap_common_pars_fragment:yx,envmap_pars_fragment:Mx,envmap_pars_vertex:Ex,envmap_physical_pars_fragment:Ix,envmap_vertex:Tx,fog_vertex:wx,fog_pars_vertex:Ax,fog_fragment:Cx,fog_pars_fragment:Rx,gradientmap_pars_fragment:bx,lightmap_pars_fragment:Px,lights_lambert_fragment:Lx,lights_lambert_pars_fragment:Dx,lights_pars_begin:Nx,lights_toon_fragment:Ux,lights_toon_pars_fragment:Fx,lights_phong_fragment:Ox,lights_phong_pars_fragment:zx,lights_physical_fragment:Bx,lights_physical_pars_fragment:kx,lights_fragment_begin:Vx,lights_fragment_maps:Hx,lights_fragment_end:Gx,lightprobes_pars_fragment:Wx,logdepthbuf_fragment:jx,logdepthbuf_pars_fragment:Xx,logdepthbuf_pars_vertex:qx,logdepthbuf_vertex:Yx,map_fragment:$x,map_pars_fragment:Kx,map_particle_fragment:Zx,map_particle_pars_fragment:Qx,metalnessmap_fragment:Jx,metalnessmap_pars_fragment:eS,morphinstance_vertex:tS,morphcolor_vertex:nS,morphnormal_vertex:iS,morphtarget_pars_vertex:rS,morphtarget_vertex:sS,normal_fragment_begin:aS,normal_fragment_maps:oS,normal_pars_fragment:lS,normal_pars_vertex:cS,normal_vertex:uS,normalmap_pars_fragment:fS,clearcoat_normal_fragment_begin:dS,clearcoat_normal_fragment_maps:hS,clearcoat_pars_fragment:pS,iridescence_pars_fragment:mS,opaque_fragment:gS,packing:vS,premultiplied_alpha_fragment:_S,project_vertex:xS,dithering_fragment:SS,dithering_pars_fragment:yS,roughnessmap_fragment:MS,roughnessmap_pars_fragment:ES,shadowmap_pars_fragment:TS,shadowmap_pars_vertex:wS,shadowmap_vertex:AS,shadowmask_pars_fragment:CS,skinbase_vertex:RS,skinning_pars_vertex:bS,skinning_vertex:PS,skinnormal_vertex:LS,specularmap_fragment:DS,specularmap_pars_fragment:NS,tonemapping_fragment:IS,tonemapping_pars_fragment:US,transmission_fragment:FS,transmission_pars_fragment:OS,uv_pars_fragment:zS,uv_pars_vertex:BS,uv_vertex:kS,worldpos_vertex:VS,background_vert:HS,background_frag:GS,backgroundCube_vert:WS,backgroundCube_frag:jS,cube_vert:XS,cube_frag:qS,depth_vert:YS,depth_frag:$S,distance_vert:KS,distance_frag:ZS,equirect_vert:QS,equirect_frag:JS,linedashed_vert:ey,linedashed_frag:ty,meshbasic_vert:ny,meshbasic_frag:iy,meshlambert_vert:ry,meshlambert_frag:sy,meshmatcap_vert:ay,meshmatcap_frag:oy,meshnormal_vert:ly,meshnormal_frag:cy,meshphong_vert:uy,meshphong_frag:fy,meshphysical_vert:dy,meshphysical_frag:hy,meshtoon_vert:py,meshtoon_frag:my,points_vert:gy,points_frag:vy,shadow_vert:_y,shadow_frag:xy,sprite_vert:Sy,sprite_frag:yy},pe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ne}},envmap:{envMap:{value:null},envMapRotation:{value:new Ne},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ne}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ne}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ne},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ne},normalScale:{value:new Ze(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ne},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ne}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ne}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ne}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new F},probesMax:{value:new F},probesResolution:{value:new F}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0},uvTransform:{value:new Ne}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ze(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ne},alphaMap:{value:null},alphaMapTransform:{value:new Ne},alphaTest:{value:0}}},ri={basic:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},envMapIntensity:{value:1}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:nn([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:nn([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:nn([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:nn([pe.points,pe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:nn([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:nn([pe.common,pe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:nn([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:nn([pe.sprite,pe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ne},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ne}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distance:{uniforms:nn([pe.common,pe.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distance_vert,fragmentShader:Oe.distance_frag},shadow:{uniforms:nn([pe.lights,pe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};ri.physical={uniforms:nn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ne},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ne},clearcoatNormalScale:{value:new Ze(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ne},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ne},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ne},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ne},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ne},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ne},transmissionSamplerSize:{value:new Ze},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ne},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ne},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ne},anisotropyVector:{value:new Ze},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ne}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};const Ho={r:0,b:0,g:0},My=new bt,Rg=new Ne;Rg.set(-1,0,0,0,1,0,0,0,1);function Ey(t,e,n,i,r,s){const a=new Qe(0);let o=r===!0?0:1,l,c,p=null,h=0,f=null;function m(d){let v=d.isScene===!0?d.background:null;if(v&&v.isTexture){const y=d.backgroundBlurriness>0;v=e.get(v,y)}return v}function _(d){let v=!1;const y=m(d);y===null?g(a,o):y&&y.isColor&&(g(y,1),v=!0);const C=t.xr.getEnvironmentBlendMode();C==="additive"?n.buffers.color.setClear(0,0,0,1,s):C==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,s),(t.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function M(d,v){const y=m(v);y&&(y.isCubeTexture||y.mapping===sc)?(c===void 0&&(c=new Zn(new Ya(1,1,1),new hi({name:"BackgroundCubeMaterial",uniforms:Os(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:gn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(C,T,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(My.makeRotationFromEuler(v.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Rg),c.material.toneMapped=je.getTransfer(y.colorSpace)!==Je,(p!==y||h!==y.version||f!==t.toneMapping)&&(c.material.needsUpdate=!0,p=y,h=y.version,f=t.toneMapping),c.layers.enableAll(),d.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new Zn(new ac(2,2),new hi({name:"BackgroundMaterial",uniforms:Os(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,l.material.toneMapped=je.getTransfer(y.colorSpace)!==Je,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(p!==y||h!==y.version||f!==t.toneMapping)&&(l.material.needsUpdate=!0,p=y,h=y.version,f=t.toneMapping),l.layers.enableAll(),d.unshift(l,l.geometry,l.material,0,0,null))}function g(d,v){d.getRGB(Ho,Tg(t)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,v,s)}function u(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(d,v=1){a.set(d),o=v,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(d){o=d,g(a,o)},render:_,addToRenderList:M,dispose:u}}function Ty(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,a=!1;function o(P,z,q,J,U){let W=!1;const k=h(P,J,q,z);s!==k&&(s=k,c(s.object)),W=m(P,J,q,U),W&&_(P,J,q,U),U!==null&&e.update(U,t.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,y(P,z,q,J),U!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return t.createVertexArray()}function c(P){return t.bindVertexArray(P)}function p(P){return t.deleteVertexArray(P)}function h(P,z,q,J){const U=J.wireframe===!0;let W=i[z.id];W===void 0&&(W={},i[z.id]=W);const k=P.isInstancedMesh===!0?P.id:0;let B=W[k];B===void 0&&(B={},W[k]=B);let j=B[q.id];j===void 0&&(j={},B[q.id]=j);let Q=j[U];return Q===void 0&&(Q=f(l()),j[U]=Q),Q}function f(P){const z=[],q=[],J=[];for(let U=0;U<n;U++)z[U]=0,q[U]=0,J[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:q,attributeDivisors:J,object:P,attributes:{},index:null}}function m(P,z,q,J){const U=s.attributes,W=z.attributes;let k=0;const B=q.getAttributes();for(const j in B)if(B[j].location>=0){const ae=U[j];let de=W[j];if(de===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(de=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(de=P.instanceColor)),ae===void 0||ae.attribute!==de||de&&ae.data!==de.data)return!0;k++}return s.attributesNum!==k||s.index!==J}function _(P,z,q,J){const U={},W=z.attributes;let k=0;const B=q.getAttributes();for(const j in B)if(B[j].location>=0){let ae=W[j];ae===void 0&&(j==="instanceMatrix"&&P.instanceMatrix&&(ae=P.instanceMatrix),j==="instanceColor"&&P.instanceColor&&(ae=P.instanceColor));const de={};de.attribute=ae,ae&&ae.data&&(de.data=ae.data),U[j]=de,k++}s.attributes=U,s.attributesNum=k,s.index=J}function M(){const P=s.newAttributes;for(let z=0,q=P.length;z<q;z++)P[z]=0}function g(P){u(P,0)}function u(P,z){const q=s.newAttributes,J=s.enabledAttributes,U=s.attributeDivisors;q[P]=1,J[P]===0&&(t.enableVertexAttribArray(P),J[P]=1),U[P]!==z&&(t.vertexAttribDivisor(P,z),U[P]=z)}function d(){const P=s.newAttributes,z=s.enabledAttributes;for(let q=0,J=z.length;q<J;q++)z[q]!==P[q]&&(t.disableVertexAttribArray(q),z[q]=0)}function v(P,z,q,J,U,W,k){k===!0?t.vertexAttribIPointer(P,z,q,U,W):t.vertexAttribPointer(P,z,q,J,U,W)}function y(P,z,q,J){M();const U=J.attributes,W=q.getAttributes(),k=z.defaultAttributeValues;for(const B in W){const j=W[B];if(j.location>=0){let Q=U[B];if(Q===void 0&&(B==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),B==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const ae=Q.normalized,de=Q.itemSize,Be=e.get(Q);if(Be===void 0)continue;const He=Be.buffer,Pe=Be.type,$=Be.bytesPerElement,fe=Pe===t.INT||Pe===t.UNSIGNED_INT||Q.gpuType===Zd;if(Q.isInterleavedBufferAttribute){const oe=Q.data,Re=oe.stride,De=Q.offset;if(oe.isInstancedInterleavedBuffer){for(let be=0;be<j.locationSize;be++)u(j.location+be,oe.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let be=0;be<j.locationSize;be++)g(j.location+be);t.bindBuffer(t.ARRAY_BUFFER,He);for(let be=0;be<j.locationSize;be++)v(j.location+be,de/j.locationSize,Pe,ae,Re*$,(De+de/j.locationSize*be)*$,fe)}else{if(Q.isInstancedBufferAttribute){for(let oe=0;oe<j.locationSize;oe++)u(j.location+oe,Q.meshPerAttribute);P.isInstancedMesh!==!0&&J._maxInstanceCount===void 0&&(J._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let oe=0;oe<j.locationSize;oe++)g(j.location+oe);t.bindBuffer(t.ARRAY_BUFFER,He);for(let oe=0;oe<j.locationSize;oe++)v(j.location+oe,de/j.locationSize,Pe,ae,de*$,de/j.locationSize*oe*$,fe)}}else if(k!==void 0){const ae=k[B];if(ae!==void 0)switch(ae.length){case 2:t.vertexAttrib2fv(j.location,ae);break;case 3:t.vertexAttrib3fv(j.location,ae);break;case 4:t.vertexAttrib4fv(j.location,ae);break;default:t.vertexAttrib1fv(j.location,ae)}}}}d()}function C(){b();for(const P in i){const z=i[P];for(const q in z){const J=z[q];for(const U in J){const W=J[U];for(const k in W)p(W[k].object),delete W[k];delete J[U]}}delete i[P]}}function T(P){if(i[P.id]===void 0)return;const z=i[P.id];for(const q in z){const J=z[q];for(const U in J){const W=J[U];for(const k in W)p(W[k].object),delete W[k];delete J[U]}}delete i[P.id]}function R(P){for(const z in i){const q=i[z];for(const J in q){const U=q[J];if(U[P.id]===void 0)continue;const W=U[P.id];for(const k in W)p(W[k].object),delete W[k];delete U[P.id]}}}function x(P){for(const z in i){const q=i[z],J=P.isInstancedMesh===!0?P.id:0,U=q[J];if(U!==void 0){for(const W in U){const k=U[W];for(const B in k)p(k[B].object),delete k[B];delete U[W]}delete q[J],Object.keys(q).length===0&&delete i[z]}}}function b(){L(),a=!0,s!==r&&(s=r,c(s.object))}function L(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:b,resetDefaultState:L,dispose:C,releaseStatesOfGeometry:T,releaseStatesOfObject:x,releaseStatesOfProgram:R,initAttributes:M,enableAttribute:g,disableUnusedAttributes:d}}function wy(t,e,n){let i;function r(l){i=l}function s(l,c){t.drawArrays(i,l,c),n.update(c,i,1)}function a(l,c,p){p!==0&&(t.drawArraysInstanced(i,l,c,p),n.update(c,i,p))}function o(l,c,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,p);let f=0;for(let m=0;m<p;m++)f+=c[m];n.update(f,i,1)}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function Ay(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(R){return!(R!==Xn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(R){const x=R===Ni&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(R!==Nn&&i.convert(R)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&R!==ai&&!x)}function l(R){if(R==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const p=l(c);p!==c&&(Ce("WebGLRenderer:",c,"not supported, using",p,"instead."),c=p);const h=n.logarithmicDepthBuffer===!0,f=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control");n.reversedDepthBuffer===!0&&f===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const m=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),d=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),C=t.getParameter(t.MAX_SAMPLES),T=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:m,maxVertexTextures:_,maxTextureSize:M,maxCubemapSize:g,maxAttributes:u,maxVertexUniforms:d,maxVaryings:v,maxFragmentUniforms:y,maxSamples:C,samples:T}}function Cy(t){const e=this;let n=null,i=0,r=!1,s=!1;const a=new yr,o=new Ne,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const m=h.length!==0||f||i!==0||r;return r=f,i=h.length,m},this.beginShadows=function(){s=!0,p(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=p(h,f,0)},this.setState=function(h,f,m){const _=h.clippingPlanes,M=h.clipIntersection,g=h.clipShadows,u=t.get(h);if(!r||_===null||_.length===0||s&&!g)s?p(null):c();else{const d=s?0:i,v=d*4;let y=u.clippingState||null;l.value=y,y=p(_,f,v,m);for(let C=0;C!==v;++C)y[C]=n[C];u.clippingState=y,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=d}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function p(h,f,m,_){const M=h!==null?h.length:0;let g=null;if(M!==0){if(g=l.value,_!==!0||g===null){const u=m+M*4,d=f.matrixWorldInverse;o.getNormalMatrix(d),(g===null||g.length<u)&&(g=new Float32Array(u));for(let v=0,y=m;v!==M;++v,y+=4)a.copy(h[v]).applyMatrix4(d,o),a.normal.toArray(g,y),g[y+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,g}}const Ji=4,pp=[.125,.215,.35,.446,.526,.582],Er=20,Ry=256,ra=new Ag,mp=new Qe;let fu=null,du=0,hu=0,pu=!1;const by=new F;class gp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:a=256,position:o=by}=s;fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,o),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=_p(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(fu,du,hu),this._renderer.xr.enabled=pu,e.scissorTest=!1,ss(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Or||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),fu=this._renderer.getRenderTarget(),du=this._renderer.getActiveCubeFace(),hu=this._renderer.getActiveMipmapLevel(),pu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Jt,minFilter:Jt,generateMipmaps:!1,type:Ni,format:Xn,colorSpace:Ul,depthBuffer:!1},r=vp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vp(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=Py(s)),this._blurMaterial=Dy(s,e,n),this._ggxMaterial=Ly(s,e,n)}return r}_compileMaterial(e){const n=new Zn(new tn,e);this._renderer.compile(n,ra)}_sceneToCubeUV(e,n,i,r,s){const l=new Dn(90,1,n,i),c=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,m=h.toneMapping;h.getClearColor(mp),h.toneMapping=ui,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(r),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Zn(new Ya,new Bl({name:"PMREM.Background",side:gn,depthWrite:!1,depthTest:!1})));const M=this._backgroundBox,g=M.material;let u=!1;const d=e.background;d?d.isColor&&(g.color.copy(d),e.background=null,u=!0):(g.color.copy(mp),u=!0);for(let v=0;v<6;v++){const y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+p[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+p[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+p[v]));const C=this._cubeSize;ss(r,y*C,v>2?C:0,C,C),h.setRenderTarget(r),u&&h.render(M,l),h.render(e,l)}h.toneMapping=m,h.autoClear=f,e.background=d}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Or||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=xp()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=_p());const s=r?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;ss(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(a,ra)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;const l=a.uniforms,c=i/(this._lodMeshes.length-1),p=n/(this._lodMeshes.length-1),h=Math.sqrt(c*c-p*p),f=0+c*1.25,m=h*f,{_lodMax:_}=this,M=this._sizeLods[i],g=3*M*(i>_-Ji?i-_+Ji:0),u=4*(this._cubeSize-M);l.envMap.value=e.texture,l.roughness.value=m,l.mipInt.value=_-n,ss(s,g,u,3*M,2*M),r.setRenderTarget(s),r.render(o,ra),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-i,ss(e,g,u,3*M,2*M),r.setRenderTarget(e),r.render(o,ra)}_blur(e,n,i,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,n,i,r,"latitudinal",s),this._halfBlur(a,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&Ye("blur direction must be either latitudinal or longitudinal!");const p=3,h=this._lodMeshes[r];h.material=c;const f=c.uniforms,m=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*Er-1),M=s/_,g=isFinite(s)?1+Math.floor(p*M):Er;g>Er&&Ce(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Er}`);const u=[];let d=0;for(let R=0;R<Er;++R){const x=R/M,b=Math.exp(-x*x/2);u.push(b),R===0?d+=b:R<g&&(d+=2*b)}for(let R=0;R<u.length;R++)u[R]=u[R]/d;f.envMap.value=e.texture,f.samples.value=g,f.weights.value=u,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:v}=this;f.dTheta.value=_,f.mipInt.value=v-i;const y=this._sizeLods[r],C=3*y*(r>v-Ji?r-v+Ji:0),T=4*(this._cubeSize-y);ss(n,C,T,3*y,2*y),l.setRenderTarget(n),l.render(h,ra)}}function Py(t){const e=[],n=[],i=[];let r=t;const s=t-Ji+1+pp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>t-Ji?l=pp[a-t+Ji-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),p=-c,h=1+c,f=[p,p,h,p,h,h,p,p,h,h,p,h],m=6,_=6,M=3,g=2,u=1,d=new Float32Array(M*_*m),v=new Float32Array(g*_*m),y=new Float32Array(u*_*m);for(let T=0;T<m;T++){const R=T%3*2/3-1,x=T>2?0:-1,b=[R,x,0,R+2/3,x,0,R+2/3,x+1,0,R,x,0,R+2/3,x+1,0,R,x+1,0];d.set(b,M*_*T),v.set(f,g*_*T);const L=[T,T,T,T,T,T];y.set(L,u*_*T)}const C=new tn;C.setAttribute("position",new $n(d,M)),C.setAttribute("uv",new $n(v,g)),C.setAttribute("faceIndex",new $n(y,u)),i.push(new Zn(C,null)),r>Ji&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function vp(t,e,n){const i=new fi(t,e,n);return i.texture.mapping=sc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ss(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ly(t,e,n){return new hi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Ry,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:oc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Dy(t,e,n){const i=new Float32Array(Er),r=new F(0,1,0);return new hi({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function _p(){return new hi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function xp(){return new hi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:oc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function oc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class bg extends fi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Mg(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Ya(5,5,5),s=new hi({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gn,blending:Ci});s.uniforms.tEquirect.value=n;const a=new Zn(r,s),o=n.minFilter;return n.minFilter===Cr&&(n.minFilter=Jt),new O3(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,r);e.setRenderTarget(s)}}function Ny(t){let e=new WeakMap,n=new WeakMap,i=null;function r(f,m=!1){return f==null?null:m?a(f):s(f)}function s(f){if(f&&f.isTexture){const m=f.mapping;if(m===Oc||m===zc)if(e.has(f)){const _=e.get(f).texture;return o(_,f.mapping)}else{const _=f.image;if(_&&_.height>0){const M=new bg(_.height);return M.fromEquirectangularTexture(t,f),e.set(f,M),f.addEventListener("dispose",c),o(M.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const m=f.mapping,_=m===Oc||m===zc,M=m===Or||m===Us;if(_||M){let g=n.get(f);const u=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==u)return i===null&&(i=new gp(t)),g=_?i.fromEquirectangular(f,g):i.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),g.texture;if(g!==void 0)return g.texture;{const d=f.image;return _&&d&&d.height>0||M&&d&&l(d)?(i===null&&(i=new gp(t)),g=_?i.fromEquirectangular(f):i.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,n.set(f,g),f.addEventListener("dispose",p),g.texture):null}}}return f}function o(f,m){return m===Oc?f.mapping=Or:m===zc&&(f.mapping=Us),f}function l(f){let m=0;const _=6;for(let M=0;M<_;M++)f[M]!==void 0&&m++;return m===_}function c(f){const m=f.target;m.removeEventListener("dispose",c);const _=e.get(m);_!==void 0&&(e.delete(m),_.dispose())}function p(f){const m=f.target;m.removeEventListener("dispose",p);const _=n.get(m);_!==void 0&&(n.delete(m),_.dispose())}function h(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:r,dispose:h}}function Iy(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Zf("WebGLRenderer: "+i+" extension not supported."),r}}}function Uy(t,e,n,i){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const _ in f.attributes)e.remove(f.attributes[_]);f.removeEventListener("dispose",a),delete r[f.id];const m=s.get(f);m&&(e.remove(m),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const m in f)e.update(f[m],t.ARRAY_BUFFER)}function c(h){const f=[],m=h.index,_=h.attributes.position;let M=0;if(_===void 0)return;if(m!==null){const d=m.array;M=m.version;for(let v=0,y=d.length;v<y;v+=3){const C=d[v+0],T=d[v+1],R=d[v+2];f.push(C,T,T,R,R,C)}}else{const d=_.array;M=_.version;for(let v=0,y=d.length/3-1;v<y;v+=3){const C=v+0,T=v+1,R=v+2;f.push(C,T,T,R,R,C)}}const g=new(_.count>=65535?_g:vg)(f,1);g.version=M;const u=s.get(h);u&&e.remove(u),s.set(h,g)}function p(h){const f=s.get(h);if(f){const m=h.index;m!==null&&f.version<m.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:p}}function Fy(t,e,n){let i;function r(h){i=h}let s,a;function o(h){s=h.type,a=h.bytesPerElement}function l(h,f){t.drawElements(i,f,s,h*a),n.update(f,i,1)}function c(h,f,m){m!==0&&(t.drawElementsInstanced(i,f,s,h*a,m),n.update(f,i,m))}function p(h,f,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,f,0,s,h,0,m);let M=0;for(let g=0;g<m;g++)M+=f[g];n.update(M,i,1)}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=p}function Oy(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(s/3);break;case t.LINES:n.lines+=o*(s/2);break;case t.LINE_STRIP:n.lines+=o*(s-1);break;case t.LINE_LOOP:n.lines+=o*s;break;case t.POINTS:n.points+=o*s;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function zy(t,e,n){const i=new WeakMap,r=new Rt;function s(a,o,l){const c=a.morphTargetInfluences,p=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=p!==void 0?p.length:0;let f=i.get(o);if(f===void 0||f.count!==h){let L=function(){x.dispose(),i.delete(o),o.removeEventListener("dispose",L)};var m=L;f!==void 0&&f.texture.dispose();const _=o.morphAttributes.position!==void 0,M=o.morphAttributes.normal!==void 0,g=o.morphAttributes.color!==void 0,u=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],v=o.morphAttributes.color||[];let y=0;_===!0&&(y=1),M===!0&&(y=2),g===!0&&(y=3);let C=o.attributes.position.count*y,T=1;C>e.maxTextureSize&&(T=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const R=new Float32Array(C*T*4*h),x=new pg(R,C,T,h);x.type=ai,x.needsUpdate=!0;const b=y*4;for(let P=0;P<h;P++){const z=u[P],q=d[P],J=v[P],U=C*T*4*P;for(let W=0;W<z.count;W++){const k=W*b;_===!0&&(r.fromBufferAttribute(z,W),R[U+k+0]=r.x,R[U+k+1]=r.y,R[U+k+2]=r.z,R[U+k+3]=0),M===!0&&(r.fromBufferAttribute(q,W),R[U+k+4]=r.x,R[U+k+5]=r.y,R[U+k+6]=r.z,R[U+k+7]=0),g===!0&&(r.fromBufferAttribute(J,W),R[U+k+8]=r.x,R[U+k+9]=r.y,R[U+k+10]=r.z,R[U+k+11]=J.itemSize===4?r.w:1)}}f={count:h,texture:x,size:new Ze(C,T)},i.set(o,f),o.addEventListener("dispose",L)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let _=0;for(let g=0;g<c.length;g++)_+=c[g];const M=o.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",M),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function By(t,e,n,i,r){let s=new WeakMap;function a(c){const p=r.render.frame,h=c.geometry,f=e.get(c,h);if(s.get(f)!==p&&(e.update(f),s.set(f,p)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),s.get(c)!==p&&(n.update(c.instanceMatrix,t.ARRAY_BUFFER),c.instanceColor!==null&&n.update(c.instanceColor,t.ARRAY_BUFFER),s.set(c,p))),c.isSkinnedMesh){const m=c.skeleton;s.get(m)!==p&&(m.update(),s.set(m,p))}return f}function o(){s=new WeakMap}function l(c){const p=c.target;p.removeEventListener("dispose",l),i.releaseStatesOfObject(p),n.remove(p.instanceMatrix),p.instanceColor!==null&&n.remove(p.instanceColor)}return{update:a,dispose:o}}const ky={[Q1]:"LINEAR_TONE_MAPPING",[J1]:"REINHARD_TONE_MAPPING",[eg]:"CINEON_TONE_MAPPING",[tg]:"ACES_FILMIC_TONE_MAPPING",[ig]:"AGX_TONE_MAPPING",[rg]:"NEUTRAL_TONE_MAPPING",[ng]:"CUSTOM_TONE_MAPPING"};function Vy(t,e,n,i,r){const s=new fi(e,n,{type:t,depthBuffer:i,stencilBuffer:r,depthTexture:i?new Fs(e,n):void 0}),a=new fi(e,n,{type:Ni,depthBuffer:!1,stencilBuffer:!1}),o=new tn;o.setAttribute("position",new Pt([-1,3,0,-1,-1,0,3,-1,0],3)),o.setAttribute("uv",new Pt([0,2,0,0,2,0],2));const l=new I3({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Zn(o,l),p=new Ag(-1,1,1,-1,0,1);let h=null,f=null,m=!1,_,M=null,g=[],u=!1;this.setSize=function(d,v){s.setSize(d,v),a.setSize(d,v);for(let y=0;y<g.length;y++){const C=g[y];C.setSize&&C.setSize(d,v)}},this.setEffects=function(d){g=d,u=g.length>0&&g[0].isRenderPass===!0;const v=s.width,y=s.height;for(let C=0;C<g.length;C++){const T=g[C];T.setSize&&T.setSize(v,y)}},this.begin=function(d,v){if(m||d.toneMapping===ui&&g.length===0)return!1;if(M=v,v!==null){const y=v.width,C=v.height;(s.width!==y||s.height!==C)&&this.setSize(y,C)}return u===!1&&d.setRenderTarget(s),_=d.toneMapping,d.toneMapping=ui,!0},this.hasRenderPass=function(){return u},this.end=function(d,v){d.toneMapping=_,m=!0;let y=s,C=a;for(let T=0;T<g.length;T++){const R=g[T];if(R.enabled!==!1&&(R.render(d,C,y,v),R.needsSwap!==!1)){const x=y;y=C,C=x}}if(h!==d.outputColorSpace||f!==d.toneMapping){h=d.outputColorSpace,f=d.toneMapping,l.defines={},je.getTransfer(h)===Je&&(l.defines.SRGB_TRANSFER="");const T=ky[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,d.setRenderTarget(M),d.render(c,p),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){s.depthTexture&&s.depthTexture.dispose(),s.dispose(),a.dispose(),o.dispose(),l.dispose()}}const Pg=new an,ed=new Fs(1,1),Lg=new pg,Dg=new o3,Ng=new Mg,Sp=[],yp=[],Mp=new Float32Array(16),Ep=new Float32Array(9),Tp=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Sp[r];if(s===void 0&&(s=new Float32Array(r),Sp[r]=s),e!==0){i.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(s,o)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function lc(t,e){let n=yp[e];n===void 0&&(n=new Int32Array(e),yp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Hy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Gy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function Wy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function jy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function Xy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Tp.set(i),t.uniformMatrix2fv(this.addr,!1,Tp),zt(n,i)}}function qy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Ep.set(i),t.uniformMatrix3fv(this.addr,!1,Ep),zt(n,i)}}function Yy(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;Mp.set(i),t.uniformMatrix4fv(this.addr,!1,Mp),zt(n,i)}}function $y(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ky(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function Zy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function Qy(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function Jy(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function e4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function t4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function n4(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function i4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(ed.compareFunction=n.isReversedDepthBuffer()?rh:ih,s=ed):s=Pg,n.setTexture2D(e||s,r)}function r4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Dg,r)}function s4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Ng,r)}function a4(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Lg,r)}function o4(t){switch(t){case 5126:return Hy;case 35664:return Gy;case 35665:return Wy;case 35666:return jy;case 35674:return Xy;case 35675:return qy;case 35676:return Yy;case 5124:case 35670:return $y;case 35667:case 35671:return Ky;case 35668:case 35672:return Zy;case 35669:case 35673:return Qy;case 5125:return Jy;case 36294:return e4;case 36295:return t4;case 36296:return n4;case 35678:case 36198:case 36298:case 36306:case 35682:return i4;case 35679:case 36299:case 36307:return r4;case 35680:case 36300:case 36308:case 36293:return s4;case 36289:case 36303:case 36311:case 36292:return a4}}function l4(t,e){t.uniform1fv(this.addr,e)}function c4(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function u4(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function f4(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function d4(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function h4(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function p4(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function m4(t,e){t.uniform1iv(this.addr,e)}function g4(t,e){t.uniform2iv(this.addr,e)}function v4(t,e){t.uniform3iv(this.addr,e)}function _4(t,e){t.uniform4iv(this.addr,e)}function x4(t,e){t.uniform1uiv(this.addr,e)}function S4(t,e){t.uniform2uiv(this.addr,e)}function y4(t,e){t.uniform3uiv(this.addr,e)}function M4(t,e){t.uniform4uiv(this.addr,e)}function E4(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));let a;this.type===t.SAMPLER_2D_SHADOW?a=ed:a=Pg;for(let o=0;o!==r;++o)n.setTexture2D(e[o]||a,s[o])}function T4(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture3D(e[a]||Dg,s[a])}function w4(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTextureCube(e[a]||Ng,s[a])}function A4(t,e,n){const i=this.cache,r=e.length,s=lc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let a=0;a!==r;++a)n.setTexture2DArray(e[a]||Lg,s[a])}function C4(t){switch(t){case 5126:return l4;case 35664:return c4;case 35665:return u4;case 35666:return f4;case 35674:return d4;case 35675:return h4;case 35676:return p4;case 5124:case 35670:return m4;case 35667:case 35671:return g4;case 35668:case 35672:return v4;case 35669:case 35673:return _4;case 5125:return x4;case 36294:return S4;case 36295:return y4;case 36296:return M4;case 35678:case 36198:case 36298:case 36306:case 35682:return E4;case 35679:case 36299:case 36307:return T4;case 35680:case 36300:case 36308:case 36293:return w4;case 36289:case 36303:case 36311:case 36292:return A4}}class R4{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=o4(n.type)}}class b4{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=C4(n.type)}}class P4{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,n[o.id],i)}}}const mu=/(\w+)(\])?(\[|\.)?/g;function wp(t,e){t.seq.push(e),t.map[e.id]=e}function L4(t,e,n){const i=t.name,r=i.length;for(mu.lastIndex=0;;){const s=mu.exec(i),a=mu.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){wp(n,c===void 0?new R4(o,t,e):new b4(o,t,e));break}else{let h=n.map[o];h===void 0&&(h=new P4(o),wp(n,h)),n=h}}}class ll{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){const o=e.getActiveUniform(n,a),l=e.getUniformLocation(n,o.name);L4(o,l,this)}const r=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(a):s.push(a);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,a=n.length;s!==a;++s){const o=n[s],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in n&&i.push(a)}return i}}function Ap(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const D4=37297;let N4=0;function I4(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let a=r;a<s;a++){const o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}const Cp=new Ne;function U4(t){je._getMatrix(Cp,je.workingColorSpace,t);const e=`mat3( ${Cp.elements.map(n=>n.toFixed(4))} )`;switch(je.getTransfer(t)){case Fl:return[e,"LinearTransferOETF"];case Je:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function Rp(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return n.toUpperCase()+`

`+s+`

`+I4(t.getShaderSource(e),o)}else return s}function F4(t,e){const n=U4(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const O4={[Q1]:"Linear",[J1]:"Reinhard",[eg]:"Cineon",[tg]:"ACESFilmic",[ig]:"AgX",[rg]:"Neutral",[ng]:"Custom"};function z4(t,e){const n=O4[e];return n===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Go=new F;function B4(){je.getLuminanceCoefficients(Go);const t=Go.x.toFixed(4),e=Go.y.toFixed(4),n=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function k4(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(fa).join(`
`)}function V4(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function H4(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),a=s.name;let o=1;s.type===t.FLOAT_MAT2&&(o=2),s.type===t.FLOAT_MAT3&&(o=3),s.type===t.FLOAT_MAT4&&(o=4),n[a]={type:s.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function fa(t){return t!==""}function bp(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Pp(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const G4=/^[ \t]*#include +<([\w\d./]+)>/gm;function td(t){return t.replace(G4,j4)}const W4=new Map;function j4(t,e){let n=Oe[e];if(n===void 0){const i=W4.get(e);if(i!==void 0)n=Oe[i],Ce('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return td(n)}const X4=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Lp(t){return t.replace(X4,q4)}function q4(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Dp(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const Y4={[nl]:"SHADOWMAP_TYPE_PCF",[ua]:"SHADOWMAP_TYPE_VSM"};function $4(t){return Y4[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const K4={[Or]:"ENVMAP_TYPE_CUBE",[Us]:"ENVMAP_TYPE_CUBE",[sc]:"ENVMAP_TYPE_CUBE_UV"};function Z4(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":K4[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const Q4={[Us]:"ENVMAP_MODE_REFRACTION"};function J4(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":Q4[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const eM={[Z1]:"ENVMAP_BLENDING_MULTIPLY",[k_]:"ENVMAP_BLENDING_MIX",[V_]:"ENVMAP_BLENDING_ADD"};function tM(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":eM[t.combine]||"ENVMAP_BLENDING_NONE"}function nM(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function iM(t,e,n,i){const r=t.getContext(),s=n.defines;let a=n.vertexShader,o=n.fragmentShader;const l=$4(n),c=Z4(n),p=J4(n),h=tM(n),f=nM(n),m=k4(n),_=V4(s),M=r.createProgram();let g,u,d=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(g=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),g.length>0&&(g+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(fa).join(`
`),u.length>0&&(u+=`
`)):(g=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+p:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(fa).join(`
`),u=[Dp(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+p:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==ui?"#define TONE_MAPPING":"",n.toneMapping!==ui?Oe.tonemapping_pars_fragment:"",n.toneMapping!==ui?z4("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,F4("linearToOutputTexel",n.outputColorSpace),B4(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(fa).join(`
`)),a=td(a),a=bp(a,n),a=Pp(a,n),o=td(o),o=bp(o,n),o=Pp(o,n),a=Lp(a),o=Lp(o),n.isRawShaderMaterial!==!0&&(d=`#version 300 es
`,g=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,u=["#define varying in",n.glslVersion===k0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===k0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const v=d+g+a,y=d+u+o,C=Ap(r,r.VERTEX_SHADER,v),T=Ap(r,r.FRAGMENT_SHADER,y);r.attachShader(M,C),r.attachShader(M,T),n.index0AttributeName!==void 0?r.bindAttribLocation(M,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(M,0,"position"),r.linkProgram(M);function R(P){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(M)||"",q=r.getShaderInfoLog(C)||"",J=r.getShaderInfoLog(T)||"",U=z.trim(),W=q.trim(),k=J.trim();let B=!0,j=!0;if(r.getProgramParameter(M,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,M,C,T);else{const Q=Rp(r,C,"vertex"),ae=Rp(r,T,"fragment");Ye("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(M,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+U+`
`+Q+`
`+ae)}else U!==""?Ce("WebGLProgram: Program Info Log:",U):(W===""||k==="")&&(j=!1);j&&(P.diagnostics={runnable:B,programLog:U,vertexShader:{log:W,prefix:g},fragmentShader:{log:k,prefix:u}})}r.deleteShader(C),r.deleteShader(T),x=new ll(r,M),b=H4(r,M)}let x;this.getUniforms=function(){return x===void 0&&R(this),x};let b;this.getAttributes=function(){return b===void 0&&R(this),b};let L=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(M,D4)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(M),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=N4++,this.cacheKey=e,this.usedTimes=1,this.program=M,this.vertexShader=C,this.fragmentShader=T,this}let rM=0;class sM{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new aM(e),n.set(e,i)),i}}class aM{constructor(e){this.id=rM++,this.code=e,this.usedTimes=0}}function oM(t){return t===zr||t===Nl||t===Il}function lM(t,e,n,i,r,s){const a=new mg,o=new sM,l=new Set,c=[],p=new Map,h=i.logarithmicDepthBuffer;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(x){return l.add(x),x===0?"uv":`uv${x}`}function M(x,b,L,P,z,q){const J=P.fog,U=z.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?P.environment:null,k=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,B=e.get(x.envMap||W,k),j=B&&B.mapping===sc?B.image.height:null,Q=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Ce("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));const ae=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,de=ae!==void 0?ae.length:0;let Be=0;U.morphAttributes.position!==void 0&&(Be=1),U.morphAttributes.normal!==void 0&&(Be=2),U.morphAttributes.color!==void 0&&(Be=3);let He,Pe,$,fe;if(Q){const Ie=ri[Q];He=Ie.vertexShader,Pe=Ie.fragmentShader}else He=x.vertexShader,Pe=x.fragmentShader,o.update(x),$=o.getVertexShaderID(x),fe=o.getFragmentShaderID(x);const oe=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),De=z.isInstancedMesh===!0,be=z.isBatchedMesh===!0,gt=!!x.map,Ge=!!x.matcap,tt=!!B,ct=!!x.aoMap,ke=!!x.lightMap,Nt=!!x.bumpMap,vt=!!x.normalMap,vn=!!x.displacementMap,N=!!x.emissiveMap,It=!!x.metalnessMap,We=!!x.roughnessMap,at=x.anisotropy>0,he=x.clearcoat>0,yt=x.dispersion>0,A=x.iridescence>0,S=x.sheen>0,O=x.transmission>0,K=at&&!!x.anisotropyMap,te=he&&!!x.clearcoatMap,ie=he&&!!x.clearcoatNormalMap,ue=he&&!!x.clearcoatRoughnessMap,X=A&&!!x.iridescenceMap,Z=A&&!!x.iridescenceThicknessMap,ve=S&&!!x.sheenColorMap,Se=S&&!!x.sheenRoughnessMap,le=!!x.specularMap,re=!!x.specularColorMap,Le=!!x.specularIntensityMap,Fe=O&&!!x.transmissionMap,Ke=O&&!!x.thicknessMap,D=!!x.gradientMap,se=!!x.alphaMap,Y=x.alphaTest>0,_e=!!x.alphaHash,ce=!!x.extensions;let ee=ui;x.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ee=t.toneMapping);const Te={shaderID:Q,shaderType:x.type,shaderName:x.name,vertexShader:He,fragmentShader:Pe,defines:x.defines,customVertexShaderID:$,customFragmentShaderID:fe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:be,batchingColor:be&&z._colorsTexture!==null,instancing:De,instancingColor:De&&z.instanceColor!==null,instancingMorph:De&&z.morphTexture!==null,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:je.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:gt,matcap:Ge,envMap:tt,envMapMode:tt&&B.mapping,envMapCubeUVHeight:j,aoMap:ct,lightMap:ke,bumpMap:Nt,normalMap:vt,displacementMap:vn,emissiveMap:N,normalMapObjectSpace:vt&&x.normalMapType===W_,normalMapTangentSpace:vt&&x.normalMapType===O0,packedNormalMap:vt&&x.normalMapType===O0&&oM(x.normalMap.format),metalnessMap:It,roughnessMap:We,anisotropy:at,anisotropyMap:K,clearcoat:he,clearcoatMap:te,clearcoatNormalMap:ie,clearcoatRoughnessMap:ue,dispersion:yt,iridescence:A,iridescenceMap:X,iridescenceThicknessMap:Z,sheen:S,sheenColorMap:ve,sheenRoughnessMap:Se,specularMap:le,specularColorMap:re,specularIntensityMap:Le,transmission:O,transmissionMap:Fe,thicknessMap:Ke,gradientMap:D,opaque:x.transparent===!1&&x.blending===ws&&x.alphaToCoverage===!1,alphaMap:se,alphaTest:Y,alphaHash:_e,combine:x.combine,mapUv:gt&&_(x.map.channel),aoMapUv:ct&&_(x.aoMap.channel),lightMapUv:ke&&_(x.lightMap.channel),bumpMapUv:Nt&&_(x.bumpMap.channel),normalMapUv:vt&&_(x.normalMap.channel),displacementMapUv:vn&&_(x.displacementMap.channel),emissiveMapUv:N&&_(x.emissiveMap.channel),metalnessMapUv:It&&_(x.metalnessMap.channel),roughnessMapUv:We&&_(x.roughnessMap.channel),anisotropyMapUv:K&&_(x.anisotropyMap.channel),clearcoatMapUv:te&&_(x.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&_(x.clearcoatRoughnessMap.channel),iridescenceMapUv:X&&_(x.iridescenceMap.channel),iridescenceThicknessMapUv:Z&&_(x.iridescenceThicknessMap.channel),sheenColorMapUv:ve&&_(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&_(x.sheenRoughnessMap.channel),specularMapUv:le&&_(x.specularMap.channel),specularColorMapUv:re&&_(x.specularColorMap.channel),specularIntensityMapUv:Le&&_(x.specularIntensityMap.channel),transmissionMapUv:Fe&&_(x.transmissionMap.channel),thicknessMapUv:Ke&&_(x.thicknessMap.channel),alphaMapUv:se&&_(x.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(vt||at),vertexNormals:!!U.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!U.attributes.uv&&(gt||se),fog:!!J,useFog:x.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||U.attributes.normal===void 0&&vt===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:Re,skinning:z.isSkinnedMesh===!0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:de,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:q.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:ee,decodeVideoTexture:gt&&x.map.isVideoTexture===!0&&je.getTransfer(x.map.colorSpace)===Je,decodeVideoTextureEmissive:N&&x.emissiveMap.isVideoTexture===!0&&je.getTransfer(x.emissiveMap.colorSpace)===Je,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===gn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||be)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Te.vertexUv1s=l.has(1),Te.vertexUv2s=l.has(2),Te.vertexUv3s=l.has(3),l.clear(),Te}function g(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(u(b,x),d(b,x),b.push(t.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function u(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function d(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),x.push(a.mask)}function v(x){const b=m[x.type];let L;if(b){const P=ri[b];L=L3.clone(P.uniforms)}else L=x.uniforms;return L}function y(x,b){let L=p.get(b);return L!==void 0?++L.usedTimes:(L=new iM(t,b,x,r),c.push(L),p.set(b,L)),L}function C(x){if(--x.usedTimes===0){const b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),p.delete(x.cacheKey),x.destroy()}}function T(x){o.remove(x)}function R(){o.dispose()}return{getParameters:M,getProgramCacheKey:g,getUniforms:v,acquireProgram:y,releaseProgram:C,releaseShaderCache:T,programs:c,dispose:R}}function cM(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function r(a,o,l){t.get(a)[o]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function uM(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function Np(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Ip(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function a(f){let m=0;return f.isInstancedMesh&&(m+=2),f.isSkinnedMesh&&(m+=1),m}function o(f,m,_,M,g,u){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:m,material:_,materialVariant:a(f),groupOrder:M,renderOrder:f.renderOrder,z:g,group:u},t[e]=d):(d.id=f.id,d.object=f,d.geometry=m,d.material=_,d.materialVariant=a(f),d.groupOrder=M,d.renderOrder=f.renderOrder,d.z=g,d.group=u),e++,d}function l(f,m,_,M,g,u){const d=o(f,m,_,M,g,u);_.transmission>0?i.push(d):_.transparent===!0?r.push(d):n.push(d)}function c(f,m,_,M,g,u){const d=o(f,m,_,M,g,u);_.transmission>0?i.unshift(d):_.transparent===!0?r.unshift(d):n.unshift(d)}function p(f,m){n.length>1&&n.sort(f||uM),i.length>1&&i.sort(m||Np),r.length>1&&r.sort(m||Np)}function h(){for(let f=e,m=t.length;f<m;f++){const _=t[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:l,unshift:c,finish:h,sort:p}}function fM(){let t=new WeakMap;function e(i,r){const s=t.get(i);let a;return s===void 0?(a=new Ip,t.set(i,[a])):r>=s.length?(a=new Ip,s.push(a)):a=s[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function dM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new F,color:new Qe};break;case"SpotLight":n={position:new F,direction:new F,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function hM(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ze,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let pM=0;function mM(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function gM(t){const e=new dM,n=hM(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const r=new F,s=new bt,a=new bt;function o(c){let p=0,h=0,f=0;for(let b=0;b<9;b++)i.probe[b].set(0,0,0);let m=0,_=0,M=0,g=0,u=0,d=0,v=0,y=0,C=0,T=0,R=0;c.sort(mM);for(let b=0,L=c.length;b<L;b++){const P=c[b],z=P.color,q=P.intensity,J=P.distance;let U=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===zr?U=P.shadow.map.texture:U=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)p+=z.r*q,h+=z.g*q,f+=z.b*q;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],q);R++}else if(P.isDirectionalLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const k=P.shadow,B=n.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,i.directionalShadow[m]=B,i.directionalShadowMap[m]=U,i.directionalShadowMatrix[m]=P.shadow.matrix,d++}i.directional[m]=W,m++}else if(P.isSpotLight){const W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(z).multiplyScalar(q),W.distance=J,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[M]=W;const k=P.shadow;if(P.map&&(i.spotLightMap[C]=P.map,C++,k.updateMatrices(P),P.castShadow&&T++),i.spotLightMatrix[M]=k.matrix,P.castShadow){const B=n.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,i.spotShadow[M]=B,i.spotShadowMap[M]=U,y++}M++}else if(P.isRectAreaLight){const W=e.get(P);W.color.copy(z).multiplyScalar(q),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[g]=W,g++}else if(P.isPointLight){const W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const k=P.shadow,B=n.get(P);B.shadowIntensity=k.intensity,B.shadowBias=k.bias,B.shadowNormalBias=k.normalBias,B.shadowRadius=k.radius,B.shadowMapSize=k.mapSize,B.shadowCameraNear=k.camera.near,B.shadowCameraFar=k.camera.far,i.pointShadow[_]=B,i.pointShadowMap[_]=U,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=W,_++}else if(P.isHemisphereLight){const W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(q),W.groundColor.copy(P.groundColor).multiplyScalar(q),i.hemi[u]=W,u++}}g>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=pe.LTC_FLOAT_1,i.rectAreaLTC2=pe.LTC_FLOAT_2):(i.rectAreaLTC1=pe.LTC_HALF_1,i.rectAreaLTC2=pe.LTC_HALF_2)),i.ambient[0]=p,i.ambient[1]=h,i.ambient[2]=f;const x=i.hash;(x.directionalLength!==m||x.pointLength!==_||x.spotLength!==M||x.rectAreaLength!==g||x.hemiLength!==u||x.numDirectionalShadows!==d||x.numPointShadows!==v||x.numSpotShadows!==y||x.numSpotMaps!==C||x.numLightProbes!==R)&&(i.directional.length=m,i.spot.length=M,i.rectArea.length=g,i.point.length=_,i.hemi.length=u,i.directionalShadow.length=d,i.directionalShadowMap.length=d,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=d,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=y+C-T,i.spotLightMap.length=C,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=R,x.directionalLength=m,x.pointLength=_,x.spotLength=M,x.rectAreaLength=g,x.hemiLength=u,x.numDirectionalShadows=d,x.numPointShadows=v,x.numSpotShadows=y,x.numSpotMaps=C,x.numLightProbes=R,i.version=pM++)}function l(c,p){let h=0,f=0,m=0,_=0,M=0;const g=p.matrixWorldInverse;for(let u=0,d=c.length;u<d;u++){const v=c[u];if(v.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),h++}else if(v.isSpotLight){const y=i.spot[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(g),m++}else if(v.isRectAreaLight){const y=i.rectArea[_];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),a.identity(),s.copy(v.matrixWorld),s.premultiply(g),a.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(v.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(g),f++}else if(v.isHemisphereLight){const y=i.hemi[M];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(g),M++}}}return{setup:o,setupView:l,state:i}}function Up(t){const e=new gM(t),n=[],i=[],r=[];function s(f){h.camera=f,n.length=0,i.length=0,r.length=0}function a(f){n.push(f)}function o(f){i.push(f)}function l(f){r.push(f)}function c(){e.setup(n)}function p(f){e.setupView(n,f)}const h={lightsArray:n,shadowsArray:i,lightProbeGridArray:r,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:h,setupLights:c,setupLightsView:p,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function vM(t){let e=new WeakMap;function n(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Up(t),e.set(r,[o])):s>=a.length?(o=new Up(t),a.push(o)):o=a[s],o}function i(){e=new WeakMap}return{get:n,dispose:i}}const _M=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xM=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,SM=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],yM=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],Fp=new bt,sa=new F,gu=new F;function MM(t,e,n){let i=new xg;const r=new Ze,s=new Ze,a=new Rt,o=new U3,l=new F3,c={},p=n.maxTextureSize,h={[ur]:gn,[gn]:ur,[Mi]:Mi},f=new hi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ze},radius:{value:4}},vertexShader:_M,fragmentShader:xM}),m=f.clone();m.defines.HORIZONTAL_PASS=1;const _=new tn;_.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const M=new Zn(_,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=nl;let u=this.type;this.render=function(T,R,x){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;this.type===y_&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=nl);const b=t.getRenderTarget(),L=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),z=t.state;z.setBlending(Ci),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const q=u!==this.type;q&&R.traverse(function(J){J.material&&(Array.isArray(J.material)?J.material.forEach(U=>U.needsUpdate=!0):J.material.needsUpdate=!0)});for(let J=0,U=T.length;J<U;J++){const W=T[J],k=W.shadow;if(k===void 0){Ce("WebGLShadowMap:",W,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;r.copy(k.mapSize);const B=k.getFrameExtents();r.multiply(B),s.copy(k.mapSize),(r.x>p||r.y>p)&&(r.x>p&&(s.x=Math.floor(p/B.x),r.x=s.x*B.x,k.mapSize.x=s.x),r.y>p&&(s.y=Math.floor(p/B.y),r.y=s.y*B.y,k.mapSize.y=s.y));const j=t.state.buffers.depth.getReversed();if(k.camera._reversedDepth=j,k.map===null||q===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ua){if(W.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new fi(r.x,r.y,{format:zr,type:Ni,minFilter:Jt,magFilter:Jt,generateMipmaps:!1}),k.map.texture.name=W.name+".shadowMap",k.map.depthTexture=new Fs(r.x,r.y,ai),k.map.depthTexture.name=W.name+".shadowMapDepth",k.map.depthTexture.format=Ii,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Wt,k.map.depthTexture.magFilter=Wt}else W.isPointLight?(k.map=new bg(r.x),k.map.depthTexture=new R3(r.x,di)):(k.map=new fi(r.x,r.y),k.map.depthTexture=new Fs(r.x,r.y,di)),k.map.depthTexture.name=W.name+".shadowMap",k.map.depthTexture.format=Ii,this.type===nl?(k.map.depthTexture.compareFunction=j?rh:ih,k.map.depthTexture.minFilter=Jt,k.map.depthTexture.magFilter=Jt):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=Wt,k.map.depthTexture.magFilter=Wt);k.camera.updateProjectionMatrix()}const Q=k.map.isWebGLCubeRenderTarget?6:1;for(let ae=0;ae<Q;ae++){if(k.map.isWebGLCubeRenderTarget)t.setRenderTarget(k.map,ae),t.clear();else{ae===0&&(t.setRenderTarget(k.map),t.clear());const de=k.getViewport(ae);a.set(s.x*de.x,s.y*de.y,s.x*de.z,s.y*de.w),z.viewport(a)}if(W.isPointLight){const de=k.camera,Be=k.matrix,He=W.distance||de.far;He!==de.far&&(de.far=He,de.updateProjectionMatrix()),sa.setFromMatrixPosition(W.matrixWorld),de.position.copy(sa),gu.copy(de.position),gu.add(SM[ae]),de.up.copy(yM[ae]),de.lookAt(gu),de.updateMatrixWorld(),Be.makeTranslation(-sa.x,-sa.y,-sa.z),Fp.multiplyMatrices(de.projectionMatrix,de.matrixWorldInverse),k._frustum.setFromProjectionMatrix(Fp,de.coordinateSystem,de.reversedDepth)}else k.updateMatrices(W);i=k.getFrustum(),y(R,x,k.camera,W,this.type)}k.isPointLightShadow!==!0&&this.type===ua&&d(k,x),k.needsUpdate=!1}u=this.type,g.needsUpdate=!1,t.setRenderTarget(b,L,P)};function d(T,R){const x=e.update(M);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,m.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,m.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new fi(r.x,r.y,{format:zr,type:Ni})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,t.setRenderTarget(T.mapPass),t.clear(),t.renderBufferDirect(R,null,x,f,M,null),m.uniforms.shadow_pass.value=T.mapPass.texture,m.uniforms.resolution.value=T.mapSize,m.uniforms.radius.value=T.radius,t.setRenderTarget(T.map),t.clear(),t.renderBufferDirect(R,null,x,m,M,null)}function v(T,R,x,b){let L=null;const P=x.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)L=P;else if(L=x.isPointLight===!0?l:o,t.localClippingEnabled&&R.clipShadows===!0&&Array.isArray(R.clippingPlanes)&&R.clippingPlanes.length!==0||R.displacementMap&&R.displacementScale!==0||R.alphaMap&&R.alphaTest>0||R.map&&R.alphaTest>0||R.alphaToCoverage===!0){const z=L.uuid,q=R.uuid;let J=c[z];J===void 0&&(J={},c[z]=J);let U=J[q];U===void 0&&(U=L.clone(),J[q]=U,R.addEventListener("dispose",C)),L=U}if(L.visible=R.visible,L.wireframe=R.wireframe,b===ua?L.side=R.shadowSide!==null?R.shadowSide:R.side:L.side=R.shadowSide!==null?R.shadowSide:h[R.side],L.alphaMap=R.alphaMap,L.alphaTest=R.alphaToCoverage===!0?.5:R.alphaTest,L.map=R.map,L.clipShadows=R.clipShadows,L.clippingPlanes=R.clippingPlanes,L.clipIntersection=R.clipIntersection,L.displacementMap=R.displacementMap,L.displacementScale=R.displacementScale,L.displacementBias=R.displacementBias,L.wireframeLinewidth=R.wireframeLinewidth,L.linewidth=R.linewidth,x.isPointLight===!0&&L.isMeshDistanceMaterial===!0){const z=t.properties.get(L);z.light=x}return L}function y(T,R,x,b,L){if(T.visible===!1)return;if(T.layers.test(R.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&L===ua)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,T.matrixWorld);const q=e.update(T),J=T.material;if(Array.isArray(J)){const U=q.groups;for(let W=0,k=U.length;W<k;W++){const B=U[W],j=J[B.materialIndex];if(j&&j.visible){const Q=v(T,j,b,L);T.onBeforeShadow(t,T,R,x,q,Q,B),t.renderBufferDirect(x,null,q,Q,T,B),T.onAfterShadow(t,T,R,x,q,Q,B)}}}else if(J.visible){const U=v(T,J,b,L);T.onBeforeShadow(t,T,R,x,q,U,null),t.renderBufferDirect(x,null,q,U,T,null),T.onAfterShadow(t,T,R,x,q,U,null)}}const z=T.children;for(let q=0,J=z.length;q<J;q++)y(z[q],R,x,b,L)}function C(T){T.target.removeEventListener("dispose",C);for(const x in c){const b=c[x],L=T.target.uuid;L in b&&(b[L].dispose(),delete b[L])}}}function EM(t,e){function n(){let D=!1;const se=new Rt;let Y=null;const _e=new Rt(0,0,0,0);return{setMask:function(ce){Y!==ce&&!D&&(t.colorMask(ce,ce,ce,ce),Y=ce)},setLocked:function(ce){D=ce},setClear:function(ce,ee,Te,Ie,Tt){Tt===!0&&(ce*=Ie,ee*=Ie,Te*=Ie),se.set(ce,ee,Te,Ie),_e.equals(se)===!1&&(t.clearColor(ce,ee,Te,Ie),_e.copy(se))},reset:function(){D=!1,Y=null,_e.set(-1,0,0,0)}}}function i(){let D=!1,se=!1,Y=null,_e=null,ce=null;return{setReversed:function(ee){if(se!==ee){const Te=e.get("EXT_clip_control");ee?Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.ZERO_TO_ONE_EXT):Te.clipControlEXT(Te.LOWER_LEFT_EXT,Te.NEGATIVE_ONE_TO_ONE_EXT),se=ee;const Ie=ce;ce=null,this.setClear(Ie)}},getReversed:function(){return se},setTest:function(ee){ee?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ee){Y!==ee&&!D&&(t.depthMask(ee),Y=ee)},setFunc:function(ee){if(se&&(ee=e3[ee]),_e!==ee){switch(ee){case df:t.depthFunc(t.NEVER);break;case hf:t.depthFunc(t.ALWAYS);break;case pf:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case mf:t.depthFunc(t.EQUAL);break;case gf:t.depthFunc(t.GEQUAL);break;case vf:t.depthFunc(t.GREATER);break;case _f:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}_e=ee}},setLocked:function(ee){D=ee},setClear:function(ee){ce!==ee&&(ce=ee,se&&(ee=1-ee),t.clearDepth(ee))},reset:function(){D=!1,Y=null,_e=null,ce=null,se=!1}}}function r(){let D=!1,se=null,Y=null,_e=null,ce=null,ee=null,Te=null,Ie=null,Tt=null;return{setTest:function(nt){D||(nt?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(nt){se!==nt&&!D&&(t.stencilMask(nt),se=nt)},setFunc:function(nt,pi,Qn){(Y!==nt||_e!==pi||ce!==Qn)&&(t.stencilFunc(nt,pi,Qn),Y=nt,_e=pi,ce=Qn)},setOp:function(nt,pi,Qn){(ee!==nt||Te!==pi||Ie!==Qn)&&(t.stencilOp(nt,pi,Qn),ee=nt,Te=pi,Ie=Qn)},setLocked:function(nt){D=nt},setClear:function(nt){Tt!==nt&&(t.clearStencil(nt),Tt=nt)},reset:function(){D=!1,se=null,Y=null,_e=null,ce=null,ee=null,Te=null,Ie=null,Tt=null}}}const s=new n,a=new i,o=new r,l=new WeakMap,c=new WeakMap;let p={},h={},f={},m=new WeakMap,_=[],M=null,g=!1,u=null,d=null,v=null,y=null,C=null,T=null,R=null,x=new Qe(0,0,0),b=0,L=!1,P=null,z=null,q=null,J=null,U=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,B=0;const j=t.getParameter(t.VERSION);j.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(j)[1]),k=B>=1):j.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),k=B>=2);let Q=null,ae={};const de=t.getParameter(t.SCISSOR_BOX),Be=t.getParameter(t.VIEWPORT),He=new Rt().fromArray(de),Pe=new Rt().fromArray(Be);function $(D,se,Y,_e){const ce=new Uint8Array(4),ee=t.createTexture();t.bindTexture(D,ee),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Te=0;Te<Y;Te++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(se,0,t.RGBA,1,1,_e,0,t.RGBA,t.UNSIGNED_BYTE,ce):t.texImage2D(se+Te,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ce);return ee}const fe={};fe[t.TEXTURE_2D]=$(t.TEXTURE_2D,t.TEXTURE_2D,1),fe[t.TEXTURE_CUBE_MAP]=$(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),fe[t.TEXTURE_2D_ARRAY]=$(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),fe[t.TEXTURE_3D]=$(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),oe(t.DEPTH_TEST),a.setFunc(Is),Nt(!1),vt(N0),oe(t.CULL_FACE),ct(Ci);function oe(D){p[D]!==!0&&(t.enable(D),p[D]=!0)}function Re(D){p[D]!==!1&&(t.disable(D),p[D]=!1)}function De(D,se){return f[D]!==se?(t.bindFramebuffer(D,se),f[D]=se,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=se),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=se),!0):!1}function be(D,se){let Y=_,_e=!1;if(D){Y=m.get(se),Y===void 0&&(Y=[],m.set(se,Y));const ce=D.textures;if(Y.length!==ce.length||Y[0]!==t.COLOR_ATTACHMENT0){for(let ee=0,Te=ce.length;ee<Te;ee++)Y[ee]=t.COLOR_ATTACHMENT0+ee;Y.length=ce.length,_e=!0}}else Y[0]!==t.BACK&&(Y[0]=t.BACK,_e=!0);_e&&t.drawBuffers(Y)}function gt(D){return M!==D?(t.useProgram(D),M=D,!0):!1}const Ge={[Mr]:t.FUNC_ADD,[E_]:t.FUNC_SUBTRACT,[T_]:t.FUNC_REVERSE_SUBTRACT};Ge[w_]=t.MIN,Ge[A_]=t.MAX;const tt={[C_]:t.ZERO,[R_]:t.ONE,[b_]:t.SRC_COLOR,[uf]:t.SRC_ALPHA,[U_]:t.SRC_ALPHA_SATURATE,[N_]:t.DST_COLOR,[L_]:t.DST_ALPHA,[P_]:t.ONE_MINUS_SRC_COLOR,[ff]:t.ONE_MINUS_SRC_ALPHA,[I_]:t.ONE_MINUS_DST_COLOR,[D_]:t.ONE_MINUS_DST_ALPHA,[F_]:t.CONSTANT_COLOR,[O_]:t.ONE_MINUS_CONSTANT_COLOR,[z_]:t.CONSTANT_ALPHA,[B_]:t.ONE_MINUS_CONSTANT_ALPHA};function ct(D,se,Y,_e,ce,ee,Te,Ie,Tt,nt){if(D===Ci){g===!0&&(Re(t.BLEND),g=!1);return}if(g===!1&&(oe(t.BLEND),g=!0),D!==M_){if(D!==u||nt!==L){if((d!==Mr||C!==Mr)&&(t.blendEquation(t.FUNC_ADD),d=Mr,C=Mr),nt)switch(D){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case I0:t.blendFunc(t.ONE,t.ONE);break;case U0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case F0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ye("WebGLState: Invalid blending: ",D);break}else switch(D){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case I0:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case U0:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case F0:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",D);break}v=null,y=null,T=null,R=null,x.set(0,0,0),b=0,u=D,L=nt}return}ce=ce||se,ee=ee||Y,Te=Te||_e,(se!==d||ce!==C)&&(t.blendEquationSeparate(Ge[se],Ge[ce]),d=se,C=ce),(Y!==v||_e!==y||ee!==T||Te!==R)&&(t.blendFuncSeparate(tt[Y],tt[_e],tt[ee],tt[Te]),v=Y,y=_e,T=ee,R=Te),(Ie.equals(x)===!1||Tt!==b)&&(t.blendColor(Ie.r,Ie.g,Ie.b,Tt),x.copy(Ie),b=Tt),u=D,L=!1}function ke(D,se){D.side===Mi?Re(t.CULL_FACE):oe(t.CULL_FACE);let Y=D.side===gn;se&&(Y=!Y),Nt(Y),D.blending===ws&&D.transparent===!1?ct(Ci):ct(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),a.setFunc(D.depthFunc),a.setTest(D.depthTest),a.setMask(D.depthWrite),s.setMask(D.colorWrite);const _e=D.stencilWrite;o.setTest(_e),_e&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),N(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Nt(D){P!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),P=D)}function vt(D){D!==x_?(oe(t.CULL_FACE),D!==z&&(D===N0?t.cullFace(t.BACK):D===S_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),z=D}function vn(D){D!==q&&(k&&t.lineWidth(D),q=D)}function N(D,se,Y){D?(oe(t.POLYGON_OFFSET_FILL),(J!==se||U!==Y)&&(J=se,U=Y,a.getReversed()&&(se=-se),t.polygonOffset(se,Y))):Re(t.POLYGON_OFFSET_FILL)}function It(D){D?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function We(D){D===void 0&&(D=t.TEXTURE0+W-1),Q!==D&&(t.activeTexture(D),Q=D)}function at(D,se,Y){Y===void 0&&(Q===null?Y=t.TEXTURE0+W-1:Y=Q);let _e=ae[Y];_e===void 0&&(_e={type:void 0,texture:void 0},ae[Y]=_e),(_e.type!==D||_e.texture!==se)&&(Q!==Y&&(t.activeTexture(Y),Q=Y),t.bindTexture(D,se||fe[D]),_e.type=D,_e.texture=se)}function he(){const D=ae[Q];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function yt(){try{t.compressedTexImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function A(){try{t.compressedTexImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function S(){try{t.texSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function O(){try{t.texSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function K(){try{t.compressedTexSubImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function te(){try{t.compressedTexSubImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function ie(){try{t.texStorage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function ue(){try{t.texStorage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function X(){try{t.texImage2D(...arguments)}catch(D){Ye("WebGLState:",D)}}function Z(){try{t.texImage3D(...arguments)}catch(D){Ye("WebGLState:",D)}}function ve(D){return h[D]!==void 0?h[D]:t.getParameter(D)}function Se(D,se){h[D]!==se&&(t.pixelStorei(D,se),h[D]=se)}function le(D){He.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),He.copy(D))}function re(D){Pe.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Pe.copy(D))}function Le(D,se){let Y=c.get(se);Y===void 0&&(Y=new WeakMap,c.set(se,Y));let _e=Y.get(D);_e===void 0&&(_e=t.getUniformBlockIndex(se,D.name),Y.set(D,_e))}function Fe(D,se){const _e=c.get(se).get(D);l.get(se)!==_e&&(t.uniformBlockBinding(se,_e,D.__bindingPointIndex),l.set(se,_e))}function Ke(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),p={},h={},Q=null,ae={},f={},m=new WeakMap,_=[],M=null,g=!1,u=null,d=null,v=null,y=null,C=null,T=null,R=null,x=new Qe(0,0,0),b=0,L=!1,P=null,z=null,q=null,J=null,U=null,He.set(0,0,t.canvas.width,t.canvas.height),Pe.set(0,0,t.canvas.width,t.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:oe,disable:Re,bindFramebuffer:De,drawBuffers:be,useProgram:gt,setBlending:ct,setMaterial:ke,setFlipSided:Nt,setCullFace:vt,setLineWidth:vn,setPolygonOffset:N,setScissorTest:It,activeTexture:We,bindTexture:at,unbindTexture:he,compressedTexImage2D:yt,compressedTexImage3D:A,texImage2D:X,texImage3D:Z,pixelStorei:Se,getParameter:ve,updateUBOMapping:Le,uniformBlockBinding:Fe,texStorage2D:ie,texStorage3D:ue,texSubImage2D:S,texSubImage3D:O,compressedTexSubImage2D:K,compressedTexSubImage3D:te,scissor:le,viewport:re,reset:Ke}}function TM(t,e,n,i,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ze,p=new WeakMap,h=new Set;let f;const m=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(A,S){return _?new OffscreenCanvas(A,S):zl("canvas")}function g(A,S,O){let K=1;const te=yt(A);if((te.width>O||te.height>O)&&(K=O/Math.max(te.width,te.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const ie=Math.floor(K*te.width),ue=Math.floor(K*te.height);f===void 0&&(f=M(ie,ue));const X=S?M(ie,ue):f;return X.width=ie,X.height=ue,X.getContext("2d").drawImage(A,0,0,ie,ue),Ce("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+ie+"x"+ue+")."),X}else return"data"in A&&Ce("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function u(A){return A.generateMipmaps}function d(A){t.generateMipmap(A)}function v(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function y(A,S,O,K,te,ie=!1){if(A!==null){if(t[A]!==void 0)return t[A];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let ue;K&&(ue=e.get("EXT_texture_norm16"),ue||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=S;if(S===t.RED&&(O===t.FLOAT&&(X=t.R32F),O===t.HALF_FLOAT&&(X=t.R16F),O===t.UNSIGNED_BYTE&&(X=t.R8),O===t.UNSIGNED_SHORT&&ue&&(X=ue.R16_EXT),O===t.SHORT&&ue&&(X=ue.R16_SNORM_EXT)),S===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.R8UI),O===t.UNSIGNED_SHORT&&(X=t.R16UI),O===t.UNSIGNED_INT&&(X=t.R32UI),O===t.BYTE&&(X=t.R8I),O===t.SHORT&&(X=t.R16I),O===t.INT&&(X=t.R32I)),S===t.RG&&(O===t.FLOAT&&(X=t.RG32F),O===t.HALF_FLOAT&&(X=t.RG16F),O===t.UNSIGNED_BYTE&&(X=t.RG8),O===t.UNSIGNED_SHORT&&ue&&(X=ue.RG16_EXT),O===t.SHORT&&ue&&(X=ue.RG16_SNORM_EXT)),S===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.RG8UI),O===t.UNSIGNED_SHORT&&(X=t.RG16UI),O===t.UNSIGNED_INT&&(X=t.RG32UI),O===t.BYTE&&(X=t.RG8I),O===t.SHORT&&(X=t.RG16I),O===t.INT&&(X=t.RG32I)),S===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.RGB8UI),O===t.UNSIGNED_SHORT&&(X=t.RGB16UI),O===t.UNSIGNED_INT&&(X=t.RGB32UI),O===t.BYTE&&(X=t.RGB8I),O===t.SHORT&&(X=t.RGB16I),O===t.INT&&(X=t.RGB32I)),S===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&(X=t.RGBA8UI),O===t.UNSIGNED_SHORT&&(X=t.RGBA16UI),O===t.UNSIGNED_INT&&(X=t.RGBA32UI),O===t.BYTE&&(X=t.RGBA8I),O===t.SHORT&&(X=t.RGBA16I),O===t.INT&&(X=t.RGBA32I)),S===t.RGB&&(O===t.UNSIGNED_SHORT&&ue&&(X=ue.RGB16_EXT),O===t.SHORT&&ue&&(X=ue.RGB16_SNORM_EXT),O===t.UNSIGNED_INT_5_9_9_9_REV&&(X=t.RGB9_E5),O===t.UNSIGNED_INT_10F_11F_11F_REV&&(X=t.R11F_G11F_B10F)),S===t.RGBA){const Z=ie?Fl:je.getTransfer(te);O===t.FLOAT&&(X=t.RGBA32F),O===t.HALF_FLOAT&&(X=t.RGBA16F),O===t.UNSIGNED_BYTE&&(X=Z===Je?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT&&ue&&(X=ue.RGBA16_EXT),O===t.SHORT&&ue&&(X=ue.RGBA16_SNORM_EXT),O===t.UNSIGNED_SHORT_4_4_4_4&&(X=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(X=t.RGB5_A1)}return(X===t.R16F||X===t.R32F||X===t.RG16F||X===t.RG32F||X===t.RGBA16F||X===t.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function C(A,S){let O;return A?S===null||S===di||S===Ba?O=t.DEPTH24_STENCIL8:S===ai?O=t.DEPTH32F_STENCIL8:S===za&&(O=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===di||S===Ba?O=t.DEPTH_COMPONENT24:S===ai?O=t.DEPTH_COMPONENT32F:S===za&&(O=t.DEPTH_COMPONENT16),O}function T(A,S){return u(A)===!0||A.isFramebufferTexture&&A.minFilter!==Wt&&A.minFilter!==Jt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function R(A){const S=A.target;S.removeEventListener("dispose",R),b(S),S.isVideoTexture&&p.delete(S),S.isHTMLTexture&&h.delete(S)}function x(A){const S=A.target;S.removeEventListener("dispose",x),P(S)}function b(A){const S=i.get(A);if(S.__webglInit===void 0)return;const O=A.source,K=m.get(O);if(K){const te=K[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(A),Object.keys(K).length===0&&m.delete(O)}i.remove(A)}function L(A){const S=i.get(A);t.deleteTexture(S.__webglTexture);const O=A.source,K=m.get(O);delete K[S.__cacheKey],a.memory.textures--}function P(A){const S=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(S.__webglFramebuffer[K]))for(let te=0;te<S.__webglFramebuffer[K].length;te++)t.deleteFramebuffer(S.__webglFramebuffer[K][te]);else t.deleteFramebuffer(S.__webglFramebuffer[K]);S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer[K])}else{if(Array.isArray(S.__webglFramebuffer))for(let K=0;K<S.__webglFramebuffer.length;K++)t.deleteFramebuffer(S.__webglFramebuffer[K]);else t.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&t.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&t.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let K=0;K<S.__webglColorRenderbuffer.length;K++)S.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(S.__webglColorRenderbuffer[K]);S.__webglDepthRenderbuffer&&t.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const O=A.textures;for(let K=0,te=O.length;K<te;K++){const ie=i.get(O[K]);ie.__webglTexture&&(t.deleteTexture(ie.__webglTexture),a.memory.textures--),i.remove(O[K])}i.remove(A)}let z=0;function q(){z=0}function J(){return z}function U(A){z=A}function W(){const A=z;return A>=r.maxTextures&&Ce("WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),z+=1,A}function k(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function B(A,S){const O=i.get(A);if(A.isVideoTexture&&at(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&O.__version!==A.version){const K=A.image;if(K===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{Re(O,A,S);return}}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+S)}function j(A,S){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Re(O,A,S);return}else A.isExternalTexture&&(O.__webglTexture=A.sourceTexture?A.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+S)}function Q(A,S){const O=i.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){Re(O,A,S);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+S)}function ae(A,S){const O=i.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&O.__version!==A.version){De(O,A,S);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+S)}const de={[xf]:t.REPEAT,[wi]:t.CLAMP_TO_EDGE,[Sf]:t.MIRRORED_REPEAT},Be={[Wt]:t.NEAREST,[H_]:t.NEAREST_MIPMAP_NEAREST,[mo]:t.NEAREST_MIPMAP_LINEAR,[Jt]:t.LINEAR,[Bc]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},He={[j_]:t.NEVER,[K_]:t.ALWAYS,[X_]:t.LESS,[ih]:t.LEQUAL,[q_]:t.EQUAL,[rh]:t.GEQUAL,[Y_]:t.GREATER,[$_]:t.NOTEQUAL};function Pe(A,S){if(S.type===ai&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Jt||S.magFilter===Bc||S.magFilter===mo||S.magFilter===Cr||S.minFilter===Jt||S.minFilter===Bc||S.minFilter===mo||S.minFilter===Cr)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,de[S.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,de[S.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,de[S.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Be[S.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Be[S.minFilter]),S.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,He[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Wt||S.minFilter!==mo&&S.minFilter!==Cr||S.type===ai&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||i.get(S).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),i.get(S).__currentAnisotropy=S.anisotropy}}}function $(A,S){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",R));const K=S.source;let te=m.get(K);te===void 0&&(te={},m.set(K,te));const ie=k(S);if(ie!==A.__cacheKey){te[ie]===void 0&&(te[ie]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,O=!0),te[ie].usedTimes++;const ue=te[A.__cacheKey];ue!==void 0&&(te[A.__cacheKey].usedTimes--,ue.usedTimes===0&&L(S)),A.__cacheKey=ie,A.__webglTexture=te[ie].texture}return O}function fe(A,S,O){return Math.floor(Math.floor(A/O)/S)}function oe(A,S,O,K){const ie=A.updateRanges;if(ie.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,S.width,S.height,O,K,S.data);else{ie.sort((Se,le)=>Se.start-le.start);let ue=0;for(let Se=1;Se<ie.length;Se++){const le=ie[ue],re=ie[Se],Le=le.start+le.count,Fe=fe(re.start,S.width,4),Ke=fe(le.start,S.width,4);re.start<=Le+1&&Fe===Ke&&fe(re.start+re.count-1,S.width,4)===Fe?le.count=Math.max(le.count,re.start+re.count-le.start):(++ue,ie[ue]=re)}ie.length=ue+1;const X=n.getParameter(t.UNPACK_ROW_LENGTH),Z=n.getParameter(t.UNPACK_SKIP_PIXELS),ve=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,S.width);for(let Se=0,le=ie.length;Se<le;Se++){const re=ie[Se],Le=Math.floor(re.start/4),Fe=Math.ceil(re.count/4),Ke=Le%S.width,D=Math.floor(Le/S.width),se=Fe,Y=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,Ke),n.pixelStorei(t.UNPACK_SKIP_ROWS,D),n.texSubImage2D(t.TEXTURE_2D,0,Ke,D,se,Y,O,K,S.data)}A.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,X),n.pixelStorei(t.UNPACK_SKIP_PIXELS,Z),n.pixelStorei(t.UNPACK_SKIP_ROWS,ve)}}function Re(A,S,O){let K=t.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),S.isData3DTexture&&(K=t.TEXTURE_3D);const te=$(A,S),ie=S.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+O);const ue=i.get(ie);if(ie.version!==ue.__version||te===!0){if(n.activeTexture(t.TEXTURE0+O),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const Y=je.getPrimaries(je.workingColorSpace),_e=S.colorSpace===Ki?null:je.getPrimaries(S.colorSpace),ce=S.colorSpace===Ki||Y===_e?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce)}n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment);let Z=g(S.image,!1,r.maxTextureSize);Z=he(S,Z);const ve=s.convert(S.format,S.colorSpace),Se=s.convert(S.type);let le=y(S.internalFormat,ve,Se,S.normalized,S.colorSpace,S.isVideoTexture);Pe(K,S);let re;const Le=S.mipmaps,Fe=S.isVideoTexture!==!0,Ke=ue.__version===void 0||te===!0,D=ie.dataReady,se=T(S,Z);if(S.isDepthTexture)le=C(S.format===Rr,S.type),Ke&&(Fe?n.texStorage2D(t.TEXTURE_2D,1,le,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,le,Z.width,Z.height,0,ve,Se,null));else if(S.isDataTexture)if(Le.length>0){Fe&&Ke&&n.texStorage2D(t.TEXTURE_2D,se,le,Le[0].width,Le[0].height);for(let Y=0,_e=Le.length;Y<_e;Y++)re=Le[Y],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,re.width,re.height,ve,Se,re.data):n.texImage2D(t.TEXTURE_2D,Y,le,re.width,re.height,0,ve,Se,re.data);S.generateMipmaps=!1}else Fe?(Ke&&n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height),D&&oe(S,Z,ve,Se)):n.texImage2D(t.TEXTURE_2D,0,le,Z.width,Z.height,0,ve,Se,Z.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Fe&&Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Le[0].width,Le[0].height,Z.depth);for(let Y=0,_e=Le.length;Y<_e;Y++)if(re=Le[Y],S.format!==Xn)if(ve!==null)if(Fe){if(D)if(S.layerUpdates.size>0){const ce=hp(re.width,re.height,S.format,S.type);for(const ee of S.layerUpdates){const Te=re.data.subarray(ee*ce/re.data.BYTES_PER_ELEMENT,(ee+1)*ce/re.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,ee,re.width,re.height,1,ve,Te)}S.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,Z.depth,ve,re.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Y,le,re.width,re.height,Z.depth,0,re.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,Y,0,0,0,re.width,re.height,Z.depth,ve,Se,re.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Y,le,re.width,re.height,Z.depth,0,ve,Se,re.data)}else{Fe&&Ke&&n.texStorage2D(t.TEXTURE_2D,se,le,Le[0].width,Le[0].height);for(let Y=0,_e=Le.length;Y<_e;Y++)re=Le[Y],S.format!==Xn?ve!==null?Fe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,Y,0,0,re.width,re.height,ve,re.data):n.compressedTexImage2D(t.TEXTURE_2D,Y,le,re.width,re.height,0,re.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,re.width,re.height,ve,Se,re.data):n.texImage2D(t.TEXTURE_2D,Y,le,re.width,re.height,0,ve,Se,re.data)}else if(S.isDataArrayTexture)if(Fe){if(Ke&&n.texStorage3D(t.TEXTURE_2D_ARRAY,se,le,Z.width,Z.height,Z.depth),D)if(S.layerUpdates.size>0){const Y=hp(Z.width,Z.height,S.format,S.type);for(const _e of S.layerUpdates){const ce=Z.data.subarray(_e*Y/Z.data.BYTES_PER_ELEMENT,(_e+1)*Y/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,_e,Z.width,Z.height,1,ve,Se,ce)}S.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ve,Se,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,le,Z.width,Z.height,Z.depth,0,ve,Se,Z.data);else if(S.isData3DTexture)Fe?(Ke&&n.texStorage3D(t.TEXTURE_3D,se,le,Z.width,Z.height,Z.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ve,Se,Z.data)):n.texImage3D(t.TEXTURE_3D,0,le,Z.width,Z.height,Z.depth,0,ve,Se,Z.data);else if(S.isFramebufferTexture){if(Ke)if(Fe)n.texStorage2D(t.TEXTURE_2D,se,le,Z.width,Z.height);else{let Y=Z.width,_e=Z.height;for(let ce=0;ce<se;ce++)n.texImage2D(t.TEXTURE_2D,ce,le,Y,_e,0,ve,Se,null),Y>>=1,_e>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in t){const Y=t.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),Z.parentNode!==Y){Y.appendChild(Z),h.add(S),Y.onpaint=Ie=>{const Tt=Ie.changedElements;for(const nt of h)Tt.includes(nt.image)&&(nt.needsUpdate=!0)},Y.requestPaint();return}const _e=0,ce=t.RGBA,ee=t.RGBA,Te=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,_e,ce,ee,Te,Z),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(Le.length>0){if(Fe&&Ke){const Y=yt(Le[0]);n.texStorage2D(t.TEXTURE_2D,se,le,Y.width,Y.height)}for(let Y=0,_e=Le.length;Y<_e;Y++)re=Le[Y],Fe?D&&n.texSubImage2D(t.TEXTURE_2D,Y,0,0,ve,Se,re):n.texImage2D(t.TEXTURE_2D,Y,le,ve,Se,re);S.generateMipmaps=!1}else if(Fe){if(Ke){const Y=yt(Z);n.texStorage2D(t.TEXTURE_2D,se,le,Y.width,Y.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ve,Se,Z)}else n.texImage2D(t.TEXTURE_2D,0,le,ve,Se,Z);u(S)&&d(K),ue.__version=ie.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function De(A,S,O){if(S.image.length!==6)return;const K=$(A,S),te=S.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const ie=i.get(te);if(te.version!==ie.__version||K===!0){n.activeTexture(t.TEXTURE0+O);const ue=je.getPrimaries(je.workingColorSpace),X=S.colorSpace===Ki?null:je.getPrimaries(S.colorSpace),Z=S.colorSpace===Ki||ue===X?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,S.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,S.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Z);const ve=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,le=[];for(let ee=0;ee<6;ee++)!ve&&!Se?le[ee]=g(S.image[ee],!0,r.maxCubemapSize):le[ee]=Se?S.image[ee].image:S.image[ee],le[ee]=he(S,le[ee]);const re=le[0],Le=s.convert(S.format,S.colorSpace),Fe=s.convert(S.type),Ke=y(S.internalFormat,Le,Fe,S.normalized,S.colorSpace),D=S.isVideoTexture!==!0,se=ie.__version===void 0||K===!0,Y=te.dataReady;let _e=T(S,re);Pe(t.TEXTURE_CUBE_MAP,S);let ce;if(ve){D&&se&&n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ke,re.width,re.height);for(let ee=0;ee<6;ee++){ce=le[ee].mipmaps;for(let Te=0;Te<ce.length;Te++){const Ie=ce[Te];S.format!==Xn?Le!==null?D?Y&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ie.width,Ie.height,Le,Ie.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ke,Ie.width,Ie.height,0,Ie.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,0,0,Ie.width,Ie.height,Le,Fe,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te,Ke,Ie.width,Ie.height,0,Le,Fe,Ie.data)}}}else{if(ce=S.mipmaps,D&&se){ce.length>0&&_e++;const ee=yt(le[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,_e,Ke,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(Se){D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,le[ee].width,le[ee].height,Le,Fe,le[ee].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,le[ee].width,le[ee].height,0,Le,Fe,le[ee].data);for(let Te=0;Te<ce.length;Te++){const Tt=ce[Te].image[ee].image;D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Tt.width,Tt.height,Le,Fe,Tt.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ke,Tt.width,Tt.height,0,Le,Fe,Tt.data)}}else{D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Le,Fe,le[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Ke,Le,Fe,le[ee]);for(let Te=0;Te<ce.length;Te++){const Ie=ce[Te];D?Y&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,0,0,Le,Fe,Ie.image[ee]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+ee,Te+1,Ke,Le,Fe,Ie.image[ee])}}}u(S)&&d(t.TEXTURE_CUBE_MAP),ie.__version=te.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function be(A,S,O,K,te,ie){const ue=s.convert(O.format,O.colorSpace),X=s.convert(O.type),Z=y(O.internalFormat,ue,X,O.normalized,O.colorSpace),ve=i.get(S),Se=i.get(O);if(Se.__renderTarget=S,!ve.__hasExternalTextures){const le=Math.max(1,S.width>>ie),re=Math.max(1,S.height>>ie);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,ie,Z,le,re,S.depth,0,ue,X,null):n.texImage2D(te,ie,Z,le,re,0,ue,X,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),We(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,te,Se.__webglTexture,0,It(S)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,te,Se.__webglTexture,ie),n.bindFramebuffer(t.FRAMEBUFFER,null)}function gt(A,S,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),S.depthBuffer){const K=S.depthTexture,te=K&&K.isDepthTexture?K.type:null,ie=C(S.stencilBuffer,te),ue=S.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;We(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It(S),ie,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,It(S),ie,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,ie,S.width,S.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,A)}else{const K=S.textures;for(let te=0;te<K.length;te++){const ie=K[te],ue=s.convert(ie.format,ie.colorSpace),X=s.convert(ie.type),Z=y(ie.internalFormat,ue,X,ie.normalized,ie.colorSpace);We(S)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,It(S),Z,S.width,S.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,It(S),Z,S.width,S.height):t.renderbufferStorage(t.RENDERBUFFER,Z,S.width,S.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ge(A,S,O){const K=S.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const te=i.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",R)),te.__webglTexture===void 0){te.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,S.depthTexture);const ve=s.convert(S.depthTexture.format),Se=s.convert(S.depthTexture.type);let le;S.depthTexture.format===Ii?le=t.DEPTH_COMPONENT24:S.depthTexture.format===Rr&&(le=t.DEPTH24_STENCIL8);for(let re=0;re<6;re++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,le,S.width,S.height,0,ve,Se,null)}}else B(S.depthTexture,0);const ie=te.__webglTexture,ue=It(S),X=K?t.TEXTURE_CUBE_MAP_POSITIVE_X+O:t.TEXTURE_2D,Z=S.depthTexture.format===Rr?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(S.depthTexture.format===Ii)We(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,X,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Z,X,ie,0);else if(S.depthTexture.format===Rr)We(S)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,X,ie,0,ue):t.framebufferTexture2D(t.FRAMEBUFFER,Z,X,ie,0);else throw new Error("Unknown depthTexture format")}function tt(A){const S=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),K){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,K.removeEventListener("dispose",te)};K.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=K}if(A.depthTexture&&!S.__autoAllocateDepthBuffer)if(O)for(let K=0;K<6;K++)Ge(S.__webglFramebuffer[K],A,K);else{const K=A.texture.mipmaps;K&&K.length>0?Ge(S.__webglFramebuffer[0],A,0):Ge(S.__webglFramebuffer,A,0)}else if(O){S.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[K]),S.__webglDepthbuffer[K]===void 0)S.__webglDepthbuffer[K]=t.createRenderbuffer(),gt(S.__webglDepthbuffer[K],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}else{const K=A.texture.mipmaps;if(K&&K.length>0?n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=t.createRenderbuffer(),gt(S.__webglDepthbuffer,A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ie),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,ie)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ct(A,S,O){const K=i.get(A);S!==void 0&&be(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&tt(A)}function ke(A){const S=A.texture,O=i.get(A),K=i.get(S);A.addEventListener("dispose",x);const te=A.textures,ie=A.isWebGLCubeRenderTarget===!0,ue=te.length>1;if(ue||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=S.version,a.memory.textures++),ie){O.__webglFramebuffer=[];for(let X=0;X<6;X++)if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer[X]=[];for(let Z=0;Z<S.mipmaps.length;Z++)O.__webglFramebuffer[X][Z]=t.createFramebuffer()}else O.__webglFramebuffer[X]=t.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){O.__webglFramebuffer=[];for(let X=0;X<S.mipmaps.length;X++)O.__webglFramebuffer[X]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ue)for(let X=0,Z=te.length;X<Z;X++){const ve=i.get(te[X]);ve.__webglTexture===void 0&&(ve.__webglTexture=t.createTexture(),a.memory.textures++)}if(A.samples>0&&We(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let X=0;X<te.length;X++){const Z=te[X];O.__webglColorRenderbuffer[X]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[X]);const ve=s.convert(Z.format,Z.colorSpace),Se=s.convert(Z.type),le=y(Z.internalFormat,ve,Se,Z.normalized,Z.colorSpace,A.isXRRenderTarget===!0),re=It(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,re,le,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+X,t.RENDERBUFFER,O.__webglColorRenderbuffer[X])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),gt(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ie){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Pe(t.TEXTURE_CUBE_MAP,S);for(let X=0;X<6;X++)if(S.mipmaps&&S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)be(O.__webglFramebuffer[X][Z],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,Z);else be(O.__webglFramebuffer[X],A,S,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);u(S)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ue){for(let X=0,Z=te.length;X<Z;X++){const ve=te[X],Se=i.get(ve);let le=t.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Se.__webglTexture),Pe(le,ve),be(O.__webglFramebuffer,A,ve,t.COLOR_ATTACHMENT0+X,le,0),u(ve)&&d(le)}n.unbindTexture()}else{let X=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(X=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(X,K.__webglTexture),Pe(X,S),S.mipmaps&&S.mipmaps.length>0)for(let Z=0;Z<S.mipmaps.length;Z++)be(O.__webglFramebuffer[Z],A,S,t.COLOR_ATTACHMENT0,X,Z);else be(O.__webglFramebuffer,A,S,t.COLOR_ATTACHMENT0,X,0);u(S)&&d(X),n.unbindTexture()}A.depthBuffer&&tt(A)}function Nt(A){const S=A.textures;for(let O=0,K=S.length;O<K;O++){const te=S[O];if(u(te)){const ie=v(A),ue=i.get(te).__webglTexture;n.bindTexture(ie,ue),d(ie),n.unbindTexture()}}}const vt=[],vn=[];function N(A){if(A.samples>0){if(We(A)===!1){const S=A.textures,O=A.width,K=A.height;let te=t.COLOR_BUFFER_BIT;const ie=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(A),X=S.length>1;if(X)for(let ve=0;ve<S.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer);const Z=A.texture.mipmaps;Z&&Z.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ve=0;ve<S.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),X){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const Se=i.get(S[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Se,0)}t.blitFramebuffer(0,0,O,K,0,0,O,K,te,t.NEAREST),l===!0&&(vt.length=0,vn.length=0,vt.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(vt.push(ie),vn.push(ie),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,vn)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,vt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),X)for(let ve=0;ve<S.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ve]);const Se=i.get(S[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Se,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[S])}}}function It(A){return Math.min(r.maxSamples,A.samples)}function We(A){const S=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function at(A){const S=a.render.frame;p.get(A)!==S&&(p.set(A,S),A.update())}function he(A,S){const O=A.colorSpace,K=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==Ul&&O!==Ki&&(je.getTransfer(O)===Je?(K!==Xn||te!==Nn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",O)),S}function yt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=W,this.resetTextureUnits=q,this.getTextureUnits=J,this.setTextureUnits=U,this.setTexture2D=B,this.setTexture2DArray=j,this.setTexture3D=Q,this.setTextureCube=ae,this.rebindTextures=ct,this.setupRenderTarget=ke,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=N,this.setupDepthRenderbuffer=tt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=We,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function wM(t,e){function n(i,r=Ki){let s;const a=je.getTransfer(r);if(i===Nn)return t.UNSIGNED_BYTE;if(i===Qd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===lg)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===cg)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===ag)return t.BYTE;if(i===og)return t.SHORT;if(i===za)return t.UNSIGNED_SHORT;if(i===Zd)return t.INT;if(i===di)return t.UNSIGNED_INT;if(i===ai)return t.FLOAT;if(i===Ni)return t.HALF_FLOAT;if(i===ug)return t.ALPHA;if(i===fg)return t.RGB;if(i===Xn)return t.RGBA;if(i===Ii)return t.DEPTH_COMPONENT;if(i===Rr)return t.DEPTH_STENCIL;if(i===dg)return t.RED;if(i===eh)return t.RED_INTEGER;if(i===zr)return t.RG;if(i===th)return t.RG_INTEGER;if(i===nh)return t.RGBA_INTEGER;if(i===il||i===rl||i===sl||i===al)if(a===Je)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===rl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===sl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===al)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===yf||i===Mf||i===Ef||i===Tf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===yf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ef)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Tf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===wf||i===Af||i===Cf||i===Rf||i===bf||i===Nl||i===Pf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===wf||i===Af)return a===Je?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Cf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===Rf)return s.COMPRESSED_R11_EAC;if(i===bf)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Nl)return s.COMPRESSED_RG11_EAC;if(i===Pf)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Lf||i===Df||i===Nf||i===If||i===Uf||i===Ff||i===Of||i===zf||i===Bf||i===kf||i===Vf||i===Hf||i===Gf||i===Wf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Lf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Df)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Nf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===If)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Uf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ff)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Of)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===kf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Vf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Hf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Gf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Wf)return a===Je?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jf||i===Xf||i===qf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===jf)return a===Je?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===qf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Yf||i===$f||i===Il||i===Kf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Yf)return s.COMPRESSED_RED_RGTC1_EXT;if(i===$f)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Il)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Kf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ba?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const AM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,CM=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class RM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new Eg(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new hi({vertexShader:AM,fragmentShader:CM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new ac(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bM extends Hr{constructor(e,n){super();const i=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,p=null,h=null,f=null,m=null,_=null;const M=typeof XRWebGLBinding<"u",g=new RM,u={},d=n.getContextAttributes();let v=null,y=null;const C=[],T=[],R=new Ze;let x=null;const b=new Dn;b.viewport=new Rt;const L=new Dn;L.viewport=new Rt;const P=[b,L],z=new z3;let q=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let fe=C[$];return fe===void 0&&(fe=new Xc,C[$]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function($){let fe=C[$];return fe===void 0&&(fe=new Xc,C[$]=fe),fe.getGripSpace()},this.getHand=function($){let fe=C[$];return fe===void 0&&(fe=new Xc,C[$]=fe),fe.getHandSpace()};function U($){const fe=T.indexOf($.inputSource);if(fe===-1)return;const oe=C[fe];oe!==void 0&&(oe.update($.inputSource,$.frame,c||a),oe.dispatchEvent({type:$.type,data:$.inputSource}))}function W(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",k);for(let $=0;$<C.length;$++){const fe=T[$];fe!==null&&(T[$]=null,C[$].disconnect(fe))}q=null,J=null,g.reset();for(const $ in u)delete u[$];e.setRenderTarget(v),m=null,f=null,h=null,r=null,y=null,Pe.stop(),i.isPresenting=!1,e.setPixelRatio(x),e.setSize(R.width,R.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:m},this.getBinding=function(){return h===null&&M&&(h=new XRWebGLBinding(r,n)),h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function($){if(r=$,r!==null){if(v=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",W),r.addEventListener("inputsourceschange",k),d.xrCompatible!==!0&&await n.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(R),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Re=null,De=null;d.depth&&(De=d.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=d.stencil?Rr:Ii,Re=d.stencil?Ba:di);const be={colorFormat:n.RGBA8,depthFormat:De,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(be),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new fi(f.textureWidth,f.textureHeight,{format:Xn,type:Nn,depthTexture:new Fs(f.textureWidth,f.textureHeight,Re,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:d.stencil,colorSpace:e.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const oe={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),y=new fi(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:Nn,colorSpace:e.outputColorSpace,stencilBuffer:d.stencil,resolveDepthBuffer:m.ignoreDepthValues===!1,resolveStencilBuffer:m.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),Pe.setContext(r),Pe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k($){for(let fe=0;fe<$.removed.length;fe++){const oe=$.removed[fe],Re=T.indexOf(oe);Re>=0&&(T[Re]=null,C[Re].disconnect(oe))}for(let fe=0;fe<$.added.length;fe++){const oe=$.added[fe];let Re=T.indexOf(oe);if(Re===-1){for(let be=0;be<C.length;be++)if(be>=T.length){T.push(oe),Re=be;break}else if(T[be]===null){T[be]=oe,Re=be;break}if(Re===-1)break}const De=C[Re];De&&De.connect(oe)}}const B=new F,j=new F;function Q($,fe,oe){B.setFromMatrixPosition(fe.matrixWorld),j.setFromMatrixPosition(oe.matrixWorld);const Re=B.distanceTo(j),De=fe.projectionMatrix.elements,be=oe.projectionMatrix.elements,gt=De[14]/(De[10]-1),Ge=De[14]/(De[10]+1),tt=(De[9]+1)/De[5],ct=(De[9]-1)/De[5],ke=(De[8]-1)/De[0],Nt=(be[8]+1)/be[0],vt=gt*ke,vn=gt*Nt,N=Re/(-ke+Nt),It=N*-ke;if(fe.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(It),$.translateZ(N),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),De[10]===-1)$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const We=gt+N,at=Ge+N,he=vt-It,yt=vn+(Re-It),A=tt*Ge/at*We,S=ct*Ge/at*We;$.projectionMatrix.makePerspective(he,yt,A,S,We,at),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function ae($,fe){fe===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(fe.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(r===null)return;let fe=$.near,oe=$.far;g.texture!==null&&(g.depthNear>0&&(fe=g.depthNear),g.depthFar>0&&(oe=g.depthFar)),z.near=L.near=b.near=fe,z.far=L.far=b.far=oe,(q!==z.near||J!==z.far)&&(r.updateRenderState({depthNear:z.near,depthFar:z.far}),q=z.near,J=z.far),z.layers.mask=$.layers.mask|6,b.layers.mask=z.layers.mask&-5,L.layers.mask=z.layers.mask&-3;const Re=$.parent,De=z.cameras;ae(z,Re);for(let be=0;be<De.length;be++)ae(De[be],Re);De.length===2?Q(z,b,L):z.projectionMatrix.copy(b.projectionMatrix),de($,z,Re)};function de($,fe,oe){oe===null?$.matrix.copy(fe.matrixWorld):($.matrix.copy(oe.matrixWorld),$.matrix.invert(),$.matrix.multiply(fe.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(fe.projectionMatrix),$.projectionMatrixInverse.copy(fe.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Qf*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(f===null&&m===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(z)},this.getCameraTexture=function($){return u[$]};let Be=null;function He($,fe){if(p=fe.getViewerPose(c||a),_=fe,p!==null){const oe=p.views;m!==null&&(e.setRenderTargetFramebuffer(y,m.framebuffer),e.setRenderTarget(y));let Re=!1;oe.length!==z.cameras.length&&(z.cameras.length=0,Re=!0);for(let Ge=0;Ge<oe.length;Ge++){const tt=oe[Ge];let ct=null;if(m!==null)ct=m.getViewport(tt);else{const Nt=h.getViewSubImage(f,tt);ct=Nt.viewport,Ge===0&&(e.setRenderTargetTextures(y,Nt.colorTexture,Nt.depthStencilTexture),e.setRenderTarget(y))}let ke=P[Ge];ke===void 0&&(ke=new Dn,ke.layers.enable(Ge),ke.viewport=new Rt,P[Ge]=ke),ke.matrix.fromArray(tt.transform.matrix),ke.matrix.decompose(ke.position,ke.quaternion,ke.scale),ke.projectionMatrix.fromArray(tt.projectionMatrix),ke.projectionMatrixInverse.copy(ke.projectionMatrix).invert(),ke.viewport.set(ct.x,ct.y,ct.width,ct.height),Ge===0&&(z.matrix.copy(ke.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Re===!0&&z.cameras.push(ke)}const De=r.enabledFeatures;if(De&&De.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&M){h=i.getBinding();const Ge=h.getDepthInformation(oe[0]);Ge&&Ge.isValid&&Ge.texture&&g.init(Ge,r.renderState)}if(De&&De.includes("camera-access")&&M){e.state.unbindTexture(),h=i.getBinding();for(let Ge=0;Ge<oe.length;Ge++){const tt=oe[Ge].camera;if(tt){let ct=u[tt];ct||(ct=new Eg,u[tt]=ct);const ke=h.getCameraImage(tt);ct.sourceTexture=ke}}}}for(let oe=0;oe<C.length;oe++){const Re=T[oe],De=C[oe];Re!==null&&De!==void 0&&De.update(Re,fe,c||a)}Be&&Be($,fe),fe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:fe}),_=null}const Pe=new Cg;Pe.setAnimationLoop(He),this.setAnimationLoop=function($){Be=$},this.dispose=function(){}}}const PM=new bt,Ig=new Ne;Ig.set(-1,0,0,0,1,0,0,0,1);function LM(t,e){function n(g,u){g.matrixAutoUpdate===!0&&g.updateMatrix(),u.value.copy(g.matrix)}function i(g,u){u.color.getRGB(g.fogColor.value,Tg(t)),u.isFog?(g.fogNear.value=u.near,g.fogFar.value=u.far):u.isFogExp2&&(g.fogDensity.value=u.density)}function r(g,u,d,v,y){u.isNodeMaterial?u.uniformsNeedUpdate=!1:u.isMeshBasicMaterial?s(g,u):u.isMeshLambertMaterial?(s(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshToonMaterial?(s(g,u),h(g,u)):u.isMeshPhongMaterial?(s(g,u),p(g,u),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)):u.isMeshStandardMaterial?(s(g,u),f(g,u),u.isMeshPhysicalMaterial&&m(g,u,y)):u.isMeshMatcapMaterial?(s(g,u),_(g,u)):u.isMeshDepthMaterial?s(g,u):u.isMeshDistanceMaterial?(s(g,u),M(g,u)):u.isMeshNormalMaterial?s(g,u):u.isLineBasicMaterial?(a(g,u),u.isLineDashedMaterial&&o(g,u)):u.isPointsMaterial?l(g,u,d,v):u.isSpriteMaterial?c(g,u):u.isShadowMaterial?(g.color.value.copy(u.color),g.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(g,u){g.opacity.value=u.opacity,u.color&&g.diffuse.value.copy(u.color),u.emissive&&g.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.bumpMap&&(g.bumpMap.value=u.bumpMap,n(u.bumpMap,g.bumpMapTransform),g.bumpScale.value=u.bumpScale,u.side===gn&&(g.bumpScale.value*=-1)),u.normalMap&&(g.normalMap.value=u.normalMap,n(u.normalMap,g.normalMapTransform),g.normalScale.value.copy(u.normalScale),u.side===gn&&g.normalScale.value.negate()),u.displacementMap&&(g.displacementMap.value=u.displacementMap,n(u.displacementMap,g.displacementMapTransform),g.displacementScale.value=u.displacementScale,g.displacementBias.value=u.displacementBias),u.emissiveMap&&(g.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,g.emissiveMapTransform)),u.specularMap&&(g.specularMap.value=u.specularMap,n(u.specularMap,g.specularMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest);const d=e.get(u),v=d.envMap,y=d.envMapRotation;v&&(g.envMap.value=v,g.envMapRotation.value.setFromMatrix4(PM.makeRotationFromEuler(y)).transpose(),v.isCubeTexture&&v.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(Ig),g.reflectivity.value=u.reflectivity,g.ior.value=u.ior,g.refractionRatio.value=u.refractionRatio),u.lightMap&&(g.lightMap.value=u.lightMap,g.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,g.lightMapTransform)),u.aoMap&&(g.aoMap.value=u.aoMap,g.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,g.aoMapTransform))}function a(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform))}function o(g,u){g.dashSize.value=u.dashSize,g.totalSize.value=u.dashSize+u.gapSize,g.scale.value=u.scale}function l(g,u,d,v){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.size.value=u.size*d,g.scale.value=v*.5,u.map&&(g.map.value=u.map,n(u.map,g.uvTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function c(g,u){g.diffuse.value.copy(u.color),g.opacity.value=u.opacity,g.rotation.value=u.rotation,u.map&&(g.map.value=u.map,n(u.map,g.mapTransform)),u.alphaMap&&(g.alphaMap.value=u.alphaMap,n(u.alphaMap,g.alphaMapTransform)),u.alphaTest>0&&(g.alphaTest.value=u.alphaTest)}function p(g,u){g.specular.value.copy(u.specular),g.shininess.value=Math.max(u.shininess,1e-4)}function h(g,u){u.gradientMap&&(g.gradientMap.value=u.gradientMap)}function f(g,u){g.metalness.value=u.metalness,u.metalnessMap&&(g.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,g.metalnessMapTransform)),g.roughness.value=u.roughness,u.roughnessMap&&(g.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,g.roughnessMapTransform)),u.envMap&&(g.envMapIntensity.value=u.envMapIntensity)}function m(g,u,d){g.ior.value=u.ior,u.sheen>0&&(g.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),g.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(g.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,g.sheenColorMapTransform)),u.sheenRoughnessMap&&(g.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,g.sheenRoughnessMapTransform))),u.clearcoat>0&&(g.clearcoat.value=u.clearcoat,g.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(g.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,g.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(g.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===gn&&g.clearcoatNormalScale.value.negate())),u.dispersion>0&&(g.dispersion.value=u.dispersion),u.iridescence>0&&(g.iridescence.value=u.iridescence,g.iridescenceIOR.value=u.iridescenceIOR,g.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(g.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,g.iridescenceMapTransform)),u.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),u.transmission>0&&(g.transmission.value=u.transmission,g.transmissionSamplerMap.value=d.texture,g.transmissionSamplerSize.value.set(d.width,d.height),u.transmissionMap&&(g.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,g.transmissionMapTransform)),g.thickness.value=u.thickness,u.thicknessMap&&(g.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=u.attenuationDistance,g.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(g.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(g.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=u.specularIntensity,g.specularColor.value.copy(u.specularColor),u.specularColorMap&&(g.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,g.specularColorMapTransform)),u.specularIntensityMap&&(g.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,u){u.matcap&&(g.matcap.value=u.matcap)}function M(g,u){const d=e.get(u).light;g.referencePosition.value.setFromMatrixPosition(d.matrixWorld),g.nearDistance.value=d.shadow.camera.near,g.farDistance.value=d.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function DM(t,e,n,i){let r={},s={},a=[];const o=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(d,v){const y=v.program;i.uniformBlockBinding(d,y)}function c(d,v){let y=r[d.id];y===void 0&&(_(d),y=p(d),r[d.id]=y,d.addEventListener("dispose",g));const C=v.program;i.updateUBOMapping(d,C);const T=e.render.frame;s[d.id]!==T&&(f(d),s[d.id]=T)}function p(d){const v=h();d.__bindingPointIndex=v;const y=t.createBuffer(),C=d.__size,T=d.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,C,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,y),y}function h(){for(let d=0;d<o;d++)if(a.indexOf(d)===-1)return a.push(d),d;return Ye("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(d){const v=r[d.id],y=d.uniforms,C=d.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let T=0,R=y.length;T<R;T++){const x=Array.isArray(y[T])?y[T]:[y[T]];for(let b=0,L=x.length;b<L;b++){const P=x[b];if(m(P,T,b,C)===!0){const z=P.__offset,q=Array.isArray(P.value)?P.value:[P.value];let J=0;for(let U=0;U<q.length;U++){const W=q[U],k=M(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,t.bufferSubData(t.UNIFORM_BUFFER,z+J,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):ArrayBuffer.isView(W)?P.__data.set(new W.constructor(W.buffer,W.byteOffset,P.__data.length)):(W.toArray(P.__data,J),J+=k.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function m(d,v,y,C){const T=d.value,R=v+"_"+y;if(C[R]===void 0)return typeof T=="number"||typeof T=="boolean"?C[R]=T:ArrayBuffer.isView(T)?C[R]=T.slice():C[R]=T.clone(),!0;{const x=C[R];if(typeof T=="number"||typeof T=="boolean"){if(x!==T)return C[R]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(x.equals(T)===!1)return x.copy(T),!0}}return!1}function _(d){const v=d.uniforms;let y=0;const C=16;for(let R=0,x=v.length;R<x;R++){const b=Array.isArray(v[R])?v[R]:[v[R]];for(let L=0,P=b.length;L<P;L++){const z=b[L],q=Array.isArray(z.value)?z.value:[z.value];for(let J=0,U=q.length;J<U;J++){const W=q[J],k=M(W),B=y%C,j=B%k.boundary,Q=B+j;y+=j,Q!==0&&C-Q<k.storage&&(y+=C-Q),z.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=k.storage}}}const T=y%C;return T>0&&(y+=C-T),d.__size=y,d.__cache={},this}function M(d){const v={boundary:0,storage:0};return typeof d=="number"||typeof d=="boolean"?(v.boundary=4,v.storage=4):d.isVector2?(v.boundary=8,v.storage=8):d.isVector3||d.isColor?(v.boundary=16,v.storage=12):d.isVector4?(v.boundary=16,v.storage=16):d.isMatrix3?(v.boundary=48,v.storage=48):d.isMatrix4?(v.boundary=64,v.storage=64):d.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(d)?(v.boundary=16,v.storage=d.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",d),v}function g(d){const v=d.target;v.removeEventListener("dispose",g);const y=a.indexOf(v.__bindingPointIndex);a.splice(y,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function u(){for(const d in r)t.deleteBuffer(r[d]);a=[],r={},s={}}return{bind:l,update:c,dispose:u}}const NM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ni=null;function IM(){return ni===null&&(ni=new y3(NM,16,16,zr,Ni),ni.name="DFG_LUT",ni.minFilter=Jt,ni.magFilter=Jt,ni.wrapS=wi,ni.wrapT=wi,ni.generateMipmaps=!1,ni.needsUpdate=!0),ni}class UM{constructor(e={}){const{canvas:n=Q_(),context:i=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:p="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:m=Nn}=e;this.isWebGLRenderer=!0;let _;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=i.getContextAttributes().alpha}else _=a;const M=m,g=new Set([nh,th,eh]),u=new Set([Nn,di,za,Ba,Qd,Jd]),d=new Uint32Array(4),v=new Int32Array(4),y=new F;let C=null,T=null;const R=[],x=[];let b=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=ui,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const L=this;let P=!1,z=null;this._outputColorSpace=bn;let q=0,J=0,U=null,W=-1,k=null;const B=new Rt,j=new Rt;let Q=null;const ae=new Qe(0);let de=0,Be=n.width,He=n.height,Pe=1,$=null,fe=null;const oe=new Rt(0,0,Be,He),Re=new Rt(0,0,Be,He);let De=!1;const be=new xg;let gt=!1,Ge=!1;const tt=new bt,ct=new F,ke=new Rt,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let vt=!1;function vn(){return U===null?Pe:1}let N=i;function It(E,I){return n.getContext(E,I)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:p,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Kd}`),n.addEventListener("webglcontextlost",ee,!1),n.addEventListener("webglcontextrestored",Te,!1),n.addEventListener("webglcontextcreationerror",Ie,!1),N===null){const I="webgl2";if(N=It(I,E),N===null)throw It(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw Ye("WebGLRenderer: "+E.message),E}let We,at,he,yt,A,S,O,K,te,ie,ue,X,Z,ve,Se,le,re,Le,Fe,Ke,D,se,Y;function _e(){We=new Iy(N),We.init(),D=new wM(N,We),at=new Ay(N,We,e,D),he=new EM(N,We),at.reversedDepthBuffer&&f&&he.buffers.depth.setReversed(!0),yt=new Oy(N),A=new cM,S=new TM(N,We,he,A,at,D,yt),O=new Ny(L),K=new V3(N),se=new Ty(N,K),te=new Uy(N,K,yt,se),ie=new By(N,te,K,se,yt),Le=new zy(N,at,S),Se=new Cy(A),ue=new lM(L,O,We,at,se,Se),X=new LM(L,A),Z=new fM,ve=new vM(We),re=new Ey(L,O,he,ie,_,l),le=new MM(L,ie,at),Y=new DM(N,yt,at,he),Fe=new wy(N,We,yt),Ke=new Fy(N,We,yt),yt.programs=ue.programs,L.capabilities=at,L.extensions=We,L.properties=A,L.renderLists=Z,L.shadowMap=le,L.state=he,L.info=yt}_e(),M!==Nn&&(b=new Vy(M,n.width,n.height,r,s));const ce=new bM(L,N);this.xr=ce,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=We.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=We.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return Pe},this.setPixelRatio=function(E){E!==void 0&&(Pe=E,this.setSize(Be,He,!1))},this.getSize=function(E){return E.set(Be,He)},this.setSize=function(E,I,G=!0){if(ce.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}Be=E,He=I,n.width=Math.floor(E*Pe),n.height=Math.floor(I*Pe),G===!0&&(n.style.width=E+"px",n.style.height=I+"px"),b!==null&&b.setSize(n.width,n.height),this.setViewport(0,0,E,I)},this.getDrawingBufferSize=function(E){return E.set(Be*Pe,He*Pe).floor()},this.setDrawingBufferSize=function(E,I,G){Be=E,He=I,Pe=G,n.width=Math.floor(E*G),n.height=Math.floor(I*G),this.setViewport(0,0,E,I)},this.setEffects=function(E){if(M===Nn){Ye("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let I=0;I<E.length;I++)if(E[I].isOutputPass===!0){Ce("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(B)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,I,G,V){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,I,G,V),he.viewport(B.copy(oe).multiplyScalar(Pe).round())},this.getScissor=function(E){return E.copy(Re)},this.setScissor=function(E,I,G,V){E.isVector4?Re.set(E.x,E.y,E.z,E.w):Re.set(E,I,G,V),he.scissor(j.copy(Re).multiplyScalar(Pe).round())},this.getScissorTest=function(){return De},this.setScissorTest=function(E){he.setScissorTest(De=E)},this.setOpaqueSort=function(E){$=E},this.setTransparentSort=function(E){fe=E},this.getClearColor=function(E){return E.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(E=!0,I=!0,G=!0){let V=0;if(E){let H=!1;if(U!==null){const ge=U.texture.format;H=g.has(ge)}if(H){const ge=U.texture.type,ye=u.has(ge),me=re.getClearColor(),Ee=re.getClearAlpha(),we=me.r,Ue=me.g,ze=me.b;ye?(d[0]=we,d[1]=Ue,d[2]=ze,d[3]=Ee,N.clearBufferuiv(N.COLOR,0,d)):(v[0]=we,v[1]=Ue,v[2]=ze,v[3]=Ee,N.clearBufferiv(N.COLOR,0,v))}else V|=N.COLOR_BUFFER_BIT}I&&(V|=N.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),G&&(V|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&N.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),z=E},this.dispose=function(){n.removeEventListener("webglcontextlost",ee,!1),n.removeEventListener("webglcontextrestored",Te,!1),n.removeEventListener("webglcontextcreationerror",Ie,!1),re.dispose(),Z.dispose(),ve.dispose(),A.dispose(),O.dispose(),ie.dispose(),se.dispose(),Y.dispose(),ue.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",gh),ce.removeEventListener("sessionend",vh),pr.stop()};function ee(E){E.preventDefault(),H0("WebGLRenderer: Context Lost."),P=!0}function Te(){H0("WebGLRenderer: Context Restored."),P=!1;const E=yt.autoReset,I=le.enabled,G=le.autoUpdate,V=le.needsUpdate,H=le.type;_e(),yt.autoReset=E,le.enabled=I,le.autoUpdate=G,le.needsUpdate=V,le.type=H}function Ie(E){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Tt(E){const I=E.target;I.removeEventListener("dispose",Tt),nt(I)}function nt(E){pi(E),A.remove(E)}function pi(E){const I=A.get(E).programs;I!==void 0&&(I.forEach(function(G){ue.releaseProgram(G)}),E.isShaderMaterial&&ue.releaseShaderCache(E))}this.renderBufferDirect=function(E,I,G,V,H,ge){I===null&&(I=Nt);const ye=H.isMesh&&H.matrixWorld.determinant()<0,me=Bg(E,I,G,V,H);he.setMaterial(V,ye);let Ee=G.index,we=1;if(V.wireframe===!0){if(Ee=te.getWireframeAttribute(G),Ee===void 0)return;we=2}const Ue=G.drawRange,ze=G.attributes.position;let Ae=Ue.start*we,it=(Ue.start+Ue.count)*we;ge!==null&&(Ae=Math.max(Ae,ge.start*we),it=Math.min(it,(ge.start+ge.count)*we)),Ee!==null?(Ae=Math.max(Ae,0),it=Math.min(it,Ee.count)):ze!=null&&(Ae=Math.max(Ae,0),it=Math.min(it,ze.count));const wt=it-Ae;if(wt<0||wt===1/0)return;se.setup(H,V,me,G,Ee);let Mt,rt=Fe;if(Ee!==null&&(Mt=K.get(Ee),rt=Ke,rt.setIndex(Mt)),H.isMesh)V.wireframe===!0?(he.setLineWidth(V.wireframeLinewidth*vn()),rt.setMode(N.LINES)):rt.setMode(N.TRIANGLES);else if(H.isLine){let qt=V.linewidth;qt===void 0&&(qt=1),he.setLineWidth(qt*vn()),H.isLineSegments?rt.setMode(N.LINES):H.isLineLoop?rt.setMode(N.LINE_LOOP):rt.setMode(N.LINE_STRIP)}else H.isPoints?rt.setMode(N.POINTS):H.isSprite&&rt.setMode(N.TRIANGLES);if(H.isBatchedMesh)if(We.get("WEBGL_multi_draw"))rt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const qt=H._multiDrawStarts,xe=H._multiDrawCounts,_n=H._multiDrawCount,qe=Ee?K.get(Ee).bytesPerElement:1,Cn=A.get(V).currentProgram.getUniforms();for(let Jn=0;Jn<_n;Jn++)Cn.setValue(N,"_gl_DrawID",Jn),rt.render(qt[Jn]/qe,xe[Jn])}else if(H.isInstancedMesh)rt.renderInstances(Ae,wt,H.count);else if(G.isInstancedBufferGeometry){const qt=G._maxInstanceCount!==void 0?G._maxInstanceCount:1/0,xe=Math.min(G.instanceCount,qt);rt.renderInstances(Ae,wt,xe)}else rt.render(Ae,wt)};function Qn(E,I,G){E.transparent===!0&&E.side===Mi&&E.forceSinglePass===!1?(E.side=gn,E.needsUpdate=!0,Ka(E,I,G),E.side=ur,E.needsUpdate=!0,Ka(E,I,G),E.side=Mi):Ka(E,I,G)}this.compile=function(E,I,G=null){G===null&&(G=E),T=ve.get(G),T.init(I),x.push(T),G.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),E!==G&&E.traverseVisible(function(H){H.isLight&&H.layers.test(I.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();const V=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const ge=H.material;if(ge)if(Array.isArray(ge))for(let ye=0;ye<ge.length;ye++){const me=ge[ye];Qn(me,G,H),V.add(me)}else Qn(ge,G,H),V.add(ge)}),T=x.pop(),V},this.compileAsync=function(E,I,G=null){const V=this.compile(E,I,G);return new Promise(H=>{function ge(){if(V.forEach(function(ye){A.get(ye).currentProgram.isReady()&&V.delete(ye)}),V.size===0){H(E);return}setTimeout(ge,10)}We.get("KHR_parallel_shader_compile")!==null?ge():setTimeout(ge,10)})};let cc=null;function Og(E){cc&&cc(E)}function gh(){pr.stop()}function vh(){pr.start()}const pr=new Cg;pr.setAnimationLoop(Og),typeof self<"u"&&pr.setContext(self),this.setAnimationLoop=function(E){cc=E,ce.setAnimationLoop(E),E===null?pr.stop():pr.start()},ce.addEventListener("sessionstart",gh),ce.addEventListener("sessionend",vh),this.render=function(E,I){if(I!==void 0&&I.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;z!==null&&z.renderStart(E,I);const G=ce.enabled===!0&&ce.isPresenting===!0,V=b!==null&&(U===null||G)&&b.begin(L,U);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(I),I=ce.getCamera()),E.isScene===!0&&E.onBeforeRender(L,E,I,U),T=ve.get(E,x.length),T.init(I),T.state.textureUnits=S.getTextureUnits(),x.push(T),tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),be.setFromProjectionMatrix(tt,oi,I.reversedDepth),Ge=this.localClippingEnabled,gt=Se.init(this.clippingPlanes,Ge),C=Z.get(E,R.length),C.init(),R.push(C),ce.enabled===!0&&ce.isPresenting===!0){const ye=L.xr.getDepthSensingMesh();ye!==null&&uc(ye,I,-1/0,L.sortObjects)}uc(E,I,0,L.sortObjects),C.finish(),L.sortObjects===!0&&C.sort($,fe),vt=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,vt&&re.addToRenderList(C,E),this.info.render.frame++,gt===!0&&Se.beginShadows();const H=T.state.shadowsArray;if(le.render(H,E,I),gt===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(V&&b.hasRenderPass())===!1){const ye=C.opaque,me=C.transmissive;if(T.setupLights(),I.isArrayCamera){const Ee=I.cameras;if(me.length>0)for(let we=0,Ue=Ee.length;we<Ue;we++){const ze=Ee[we];xh(ye,me,E,ze)}vt&&re.render(E);for(let we=0,Ue=Ee.length;we<Ue;we++){const ze=Ee[we];_h(C,E,ze,ze.viewport)}}else me.length>0&&xh(ye,me,E,I),vt&&re.render(E),_h(C,E,I)}U!==null&&J===0&&(S.updateMultisampleRenderTarget(U),S.updateRenderTargetMipmap(U)),V&&b.end(L),E.isScene===!0&&E.onAfterRender(L,E,I),se.resetDefaultState(),W=-1,k=null,x.pop(),x.length>0?(T=x[x.length-1],S.setTextureUnits(T.state.textureUnits),gt===!0&&Se.setGlobalState(L.clippingPlanes,T.state.camera)):T=null,R.pop(),R.length>0?C=R[R.length-1]:C=null,z!==null&&z.renderEnd()};function uc(E,I,G,V){if(E.visible===!1)return;if(E.layers.test(I.layers)){if(E.isGroup)G=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(I);else if(E.isLightProbeGrid)T.pushLightProbeGrid(E);else if(E.isLight)T.pushLight(E),E.castShadow&&T.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||be.intersectsSprite(E)){V&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(tt);const ye=ie.update(E),me=E.material;me.visible&&C.push(E,ye,me,G,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||be.intersectsObject(E))){const ye=ie.update(E),me=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),ke.copy(ye.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(tt)),Array.isArray(me)){const Ee=ye.groups;for(let we=0,Ue=Ee.length;we<Ue;we++){const ze=Ee[we],Ae=me[ze.materialIndex];Ae&&Ae.visible&&C.push(E,ye,Ae,G,ke.z,ze)}}else me.visible&&C.push(E,ye,me,G,ke.z,null)}}const ge=E.children;for(let ye=0,me=ge.length;ye<me;ye++)uc(ge[ye],I,G,V)}function _h(E,I,G,V){const{opaque:H,transmissive:ge,transparent:ye}=E;T.setupLightsView(G),gt===!0&&Se.setGlobalState(L.clippingPlanes,G),V&&he.viewport(B.copy(V)),H.length>0&&$a(H,I,G),ge.length>0&&$a(ge,I,G),ye.length>0&&$a(ye,I,G),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function xh(E,I,G,V){if((G.isScene===!0?G.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){const Ae=We.has("EXT_color_buffer_half_float")||We.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new fi(1,1,{generateMipmaps:!0,type:Ae?Ni:Nn,minFilter:Cr,samples:Math.max(4,at.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:je.workingColorSpace})}const ge=T.state.transmissionRenderTarget[V.id],ye=V.viewport||B;ge.setSize(ye.z*L.transmissionResolutionScale,ye.w*L.transmissionResolutionScale);const me=L.getRenderTarget(),Ee=L.getActiveCubeFace(),we=L.getActiveMipmapLevel();L.setRenderTarget(ge),L.getClearColor(ae),de=L.getClearAlpha(),de<1&&L.setClearColor(16777215,.5),L.clear(),vt&&re.render(G);const Ue=L.toneMapping;L.toneMapping=ui;const ze=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),gt===!0&&Se.setGlobalState(L.clippingPlanes,V),$a(E,G,V),S.updateMultisampleRenderTarget(ge),S.updateRenderTargetMipmap(ge),We.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let it=0,wt=I.length;it<wt;it++){const Mt=I[it],{object:rt,geometry:qt,material:xe,group:_n}=Mt;if(xe.side===Mi&&rt.layers.test(V.layers)){const qe=xe.side;xe.side=gn,xe.needsUpdate=!0,Sh(rt,G,V,qt,xe,_n),xe.side=qe,xe.needsUpdate=!0,Ae=!0}}Ae===!0&&(S.updateMultisampleRenderTarget(ge),S.updateRenderTargetMipmap(ge))}L.setRenderTarget(me,Ee,we),L.setClearColor(ae,de),ze!==void 0&&(V.viewport=ze),L.toneMapping=Ue}function $a(E,I,G){const V=I.isScene===!0?I.overrideMaterial:null;for(let H=0,ge=E.length;H<ge;H++){const ye=E[H],{object:me,geometry:Ee,group:we}=ye;let Ue=ye.material;Ue.allowOverride===!0&&V!==null&&(Ue=V),me.layers.test(G.layers)&&Sh(me,I,G,Ee,Ue,we)}}function Sh(E,I,G,V,H,ge){E.onBeforeRender(L,I,G,V,H,ge),E.modelViewMatrix.multiplyMatrices(G.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(L,I,G,V,E,ge),H.transparent===!0&&H.side===Mi&&H.forceSinglePass===!1?(H.side=gn,H.needsUpdate=!0,L.renderBufferDirect(G,I,V,H,E,ge),H.side=ur,H.needsUpdate=!0,L.renderBufferDirect(G,I,V,H,E,ge),H.side=Mi):L.renderBufferDirect(G,I,V,H,E,ge),E.onAfterRender(L,I,G,V,H,ge)}function Ka(E,I,G){I.isScene!==!0&&(I=Nt);const V=A.get(E),H=T.state.lights,ge=T.state.shadowsArray,ye=H.state.version,me=ue.getParameters(E,H.state,ge,I,G,T.state.lightProbeGridArray),Ee=ue.getProgramCacheKey(me);let we=V.programs;V.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?I.environment:null,V.fog=I.fog;const Ue=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;V.envMap=O.get(E.envMap||V.environment,Ue),V.envMapRotation=V.environment!==null&&E.envMap===null?I.environmentRotation:E.envMapRotation,we===void 0&&(E.addEventListener("dispose",Tt),we=new Map,V.programs=we);let ze=we.get(Ee);if(ze!==void 0){if(V.currentProgram===ze&&V.lightsStateVersion===ye)return Mh(E,me),ze}else me.uniforms=ue.getUniforms(E),z!==null&&E.isNodeMaterial&&z.build(E,G,me),E.onBeforeCompile(me,L),ze=ue.acquireProgram(me,Ee),we.set(Ee,ze),V.uniforms=me.uniforms;const Ae=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=Se.uniform),Mh(E,me),V.needsLights=Vg(E),V.lightsStateVersion=ye,V.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),V.lightProbeGrid=T.state.lightProbeGridArray.length>0,V.currentProgram=ze,V.uniformsList=null,ze}function yh(E){if(E.uniformsList===null){const I=E.currentProgram.getUniforms();E.uniformsList=ll.seqWithValue(I.seq,E.uniforms)}return E.uniformsList}function Mh(E,I){const G=A.get(E);G.outputColorSpace=I.outputColorSpace,G.batching=I.batching,G.batchingColor=I.batchingColor,G.instancing=I.instancing,G.instancingColor=I.instancingColor,G.instancingMorph=I.instancingMorph,G.skinning=I.skinning,G.morphTargets=I.morphTargets,G.morphNormals=I.morphNormals,G.morphColors=I.morphColors,G.morphTargetsCount=I.morphTargetsCount,G.numClippingPlanes=I.numClippingPlanes,G.numIntersection=I.numClipIntersection,G.vertexAlphas=I.vertexAlphas,G.vertexTangents=I.vertexTangents,G.toneMapping=I.toneMapping}function zg(E,I){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;y.setFromMatrixPosition(I.matrixWorld);for(let G=0,V=E.length;G<V;G++){const H=E[G];if(H.texture!==null&&H.boundingBox.containsPoint(y))return H}return null}function Bg(E,I,G,V,H){I.isScene!==!0&&(I=Nt),S.resetTextureUnits();const ge=I.fog,ye=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?I.environment:null,me=U===null?L.outputColorSpace:U.isXRRenderTarget===!0?U.texture.colorSpace:je.workingColorSpace,Ee=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,we=O.get(V.envMap||ye,Ee),Ue=V.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,ze=!!G.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ae=!!G.morphAttributes.position,it=!!G.morphAttributes.normal,wt=!!G.morphAttributes.color;let Mt=ui;V.toneMapped&&(U===null||U.isXRRenderTarget===!0)&&(Mt=L.toneMapping);const rt=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,qt=rt!==void 0?rt.length:0,xe=A.get(V),_n=T.state.lights;if(gt===!0&&(Ge===!0||E!==k)){const ot=E===k&&V.id===W;Se.setState(V,E,ot)}let qe=!1;V.version===xe.__version?(xe.needsLights&&xe.lightsStateVersion!==_n.state.version||xe.outputColorSpace!==me||H.isBatchedMesh&&xe.batching===!1||!H.isBatchedMesh&&xe.batching===!0||H.isBatchedMesh&&xe.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&xe.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&xe.instancing===!1||!H.isInstancedMesh&&xe.instancing===!0||H.isSkinnedMesh&&xe.skinning===!1||!H.isSkinnedMesh&&xe.skinning===!0||H.isInstancedMesh&&xe.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&xe.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&xe.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&xe.instancingMorph===!1&&H.morphTexture!==null||xe.envMap!==we||V.fog===!0&&xe.fog!==ge||xe.numClippingPlanes!==void 0&&(xe.numClippingPlanes!==Se.numPlanes||xe.numIntersection!==Se.numIntersection)||xe.vertexAlphas!==Ue||xe.vertexTangents!==ze||xe.morphTargets!==Ae||xe.morphNormals!==it||xe.morphColors!==wt||xe.toneMapping!==Mt||xe.morphTargetsCount!==qt||!!xe.lightProbeGrid!=T.state.lightProbeGridArray.length>0)&&(qe=!0):(qe=!0,xe.__version=V.version);let Cn=xe.currentProgram;qe===!0&&(Cn=Ka(V,I,H),z&&V.isNodeMaterial&&z.onUpdateProgram(V,Cn,xe));let Jn=!1,Fi=!1,Gr=!1;const st=Cn.getUniforms(),At=xe.uniforms;if(he.useProgram(Cn.program)&&(Jn=!0,Fi=!0,Gr=!0),V.id!==W&&(W=V.id,Fi=!0),xe.needsLights){const ot=zg(T.state.lightProbeGridArray,H);xe.lightProbeGrid!==ot&&(xe.lightProbeGrid=ot,Fi=!0)}if(Jn||k!==E){he.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),st.setValue(N,"projectionMatrix",E.projectionMatrix),st.setValue(N,"viewMatrix",E.matrixWorldInverse);const zi=st.map.cameraPosition;zi!==void 0&&zi.setValue(N,ct.setFromMatrixPosition(E.matrixWorld)),at.logarithmicDepthBuffer&&st.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&st.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),k!==E&&(k=E,Fi=!0,Gr=!0)}if(xe.needsLights&&(_n.state.directionalShadowMap.length>0&&st.setValue(N,"directionalShadowMap",_n.state.directionalShadowMap,S),_n.state.spotShadowMap.length>0&&st.setValue(N,"spotShadowMap",_n.state.spotShadowMap,S),_n.state.pointShadowMap.length>0&&st.setValue(N,"pointShadowMap",_n.state.pointShadowMap,S)),H.isSkinnedMesh){st.setOptional(N,H,"bindMatrix"),st.setOptional(N,H,"bindMatrixInverse");const ot=H.skeleton;ot&&(ot.boneTexture===null&&ot.computeBoneTexture(),st.setValue(N,"boneTexture",ot.boneTexture,S))}H.isBatchedMesh&&(st.setOptional(N,H,"batchingTexture"),st.setValue(N,"batchingTexture",H._matricesTexture,S),st.setOptional(N,H,"batchingIdTexture"),st.setValue(N,"batchingIdTexture",H._indirectTexture,S),st.setOptional(N,H,"batchingColorTexture"),H._colorsTexture!==null&&st.setValue(N,"batchingColorTexture",H._colorsTexture,S));const Oi=G.morphAttributes;if((Oi.position!==void 0||Oi.normal!==void 0||Oi.color!==void 0)&&Le.update(H,G,Cn),(Fi||xe.receiveShadow!==H.receiveShadow)&&(xe.receiveShadow=H.receiveShadow,st.setValue(N,"receiveShadow",H.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&I.environment!==null&&(At.envMapIntensity.value=I.environmentIntensity),At.dfgLUT!==void 0&&(At.dfgLUT.value=IM()),Fi){if(st.setValue(N,"toneMappingExposure",L.toneMappingExposure),xe.needsLights&&kg(At,Gr),ge&&V.fog===!0&&X.refreshFogUniforms(At,ge),X.refreshMaterialUniforms(At,V,Pe,He,T.state.transmissionRenderTarget[E.id]),xe.needsLights&&xe.lightProbeGrid){const ot=xe.lightProbeGrid;At.probesSH.value=ot.texture,At.probesMin.value.copy(ot.boundingBox.min),At.probesMax.value.copy(ot.boundingBox.max),At.probesResolution.value.copy(ot.resolution)}ll.upload(N,yh(xe),At,S)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ll.upload(N,yh(xe),At,S),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&st.setValue(N,"center",H.center),st.setValue(N,"modelViewMatrix",H.modelViewMatrix),st.setValue(N,"normalMatrix",H.normalMatrix),st.setValue(N,"modelMatrix",H.matrixWorld),V.uniformsGroups!==void 0){const ot=V.uniformsGroups;for(let zi=0,Wr=ot.length;zi<Wr;zi++){const Eh=ot[zi];Y.update(Eh,Cn),Y.bind(Eh,Cn)}}return Cn}function kg(E,I){E.ambientLightColor.needsUpdate=I,E.lightProbe.needsUpdate=I,E.directionalLights.needsUpdate=I,E.directionalLightShadows.needsUpdate=I,E.pointLights.needsUpdate=I,E.pointLightShadows.needsUpdate=I,E.spotLights.needsUpdate=I,E.spotLightShadows.needsUpdate=I,E.rectAreaLights.needsUpdate=I,E.hemisphereLights.needsUpdate=I}function Vg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return q},this.getActiveMipmapLevel=function(){return J},this.getRenderTarget=function(){return U},this.setRenderTargetTextures=function(E,I,G){const V=A.get(E);V.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),A.get(E.texture).__webglTexture=I,A.get(E.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:G,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,I){const G=A.get(E);G.__webglFramebuffer=I,G.__useDefaultFramebuffer=I===void 0};const Hg=N.createFramebuffer();this.setRenderTarget=function(E,I=0,G=0){U=E,q=I,J=G;let V=null,H=!1,ge=!1;if(E){const me=A.get(E);if(me.__useDefaultFramebuffer!==void 0){he.bindFramebuffer(N.FRAMEBUFFER,me.__webglFramebuffer),B.copy(E.viewport),j.copy(E.scissor),Q=E.scissorTest,he.viewport(B),he.scissor(j),he.setScissorTest(Q),W=-1;return}else if(me.__webglFramebuffer===void 0)S.setupRenderTarget(E);else if(me.__hasExternalTextures)S.rebindTextures(E,A.get(E.texture).__webglTexture,A.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Ue=E.depthTexture;if(me.__boundDepthTexture!==Ue){if(Ue!==null&&A.has(Ue)&&(E.width!==Ue.image.width||E.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");S.setupDepthRenderbuffer(E)}}const Ee=E.texture;(Ee.isData3DTexture||Ee.isDataArrayTexture||Ee.isCompressedArrayTexture)&&(ge=!0);const we=A.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[I])?V=we[I][G]:V=we[I],H=!0):E.samples>0&&S.useMultisampledRTT(E)===!1?V=A.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?V=we[G]:V=we,B.copy(E.viewport),j.copy(E.scissor),Q=E.scissorTest}else B.copy(oe).multiplyScalar(Pe).floor(),j.copy(Re).multiplyScalar(Pe).floor(),Q=De;if(G!==0&&(V=Hg),he.bindFramebuffer(N.FRAMEBUFFER,V)&&he.drawBuffers(E,V),he.viewport(B),he.scissor(j),he.setScissorTest(Q),H){const me=A.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+I,me.__webglTexture,G)}else if(ge){const me=I;for(let Ee=0;Ee<E.textures.length;Ee++){const we=A.get(E.textures[Ee]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Ee,we.__webglTexture,G,me)}}else if(E!==null&&G!==0){const me=A.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,me.__webglTexture,G)}W=-1},this.readRenderTargetPixels=function(E,I,G,V,H,ge,ye,me=0){if(!(E&&E.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){he.bindFramebuffer(N.FRAMEBUFFER,Ee);try{const we=E.textures[me],Ue=we.format,ze=we.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!at.textureFormatReadable(Ue)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!at.textureTypeReadable(ze)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=E.width-V&&G>=0&&G<=E.height-H&&N.readPixels(I,G,V,H,D.convert(Ue),D.convert(ze),ge)}finally{const we=U!==null?A.get(U).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(E,I,G,V,H,ge,ye,me=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=A.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee)if(I>=0&&I<=E.width-V&&G>=0&&G<=E.height-H){he.bindFramebuffer(N.FRAMEBUFFER,Ee);const we=E.textures[me],Ue=we.format,ze=we.type;if(E.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+me),!at.textureFormatReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!at.textureTypeReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ae=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.bufferData(N.PIXEL_PACK_BUFFER,ge.byteLength,N.STREAM_READ),N.readPixels(I,G,V,H,D.convert(Ue),D.convert(ze),0);const it=U!==null?A.get(U).__webglFramebuffer:null;he.bindFramebuffer(N.FRAMEBUFFER,it);const wt=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await J_(N,wt,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,Ae),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ge),N.deleteBuffer(Ae),N.deleteSync(wt),ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,I=null,G=0){const V=Math.pow(2,-G),H=Math.floor(E.image.width*V),ge=Math.floor(E.image.height*V),ye=I!==null?I.x:0,me=I!==null?I.y:0;S.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,G,0,0,ye,me,H,ge),he.unbindTexture()};const Gg=N.createFramebuffer(),Wg=N.createFramebuffer();this.copyTextureToTexture=function(E,I,G=null,V=null,H=0,ge=0){let ye,me,Ee,we,Ue,ze,Ae,it,wt;const Mt=E.isCompressedTexture?E.mipmaps[ge]:E.image;if(G!==null)ye=G.max.x-G.min.x,me=G.max.y-G.min.y,Ee=G.isBox3?G.max.z-G.min.z:1,we=G.min.x,Ue=G.min.y,ze=G.isBox3?G.min.z:0;else{const At=Math.pow(2,-H);ye=Math.floor(Mt.width*At),me=Math.floor(Mt.height*At),E.isDataArrayTexture?Ee=Mt.depth:E.isData3DTexture?Ee=Math.floor(Mt.depth*At):Ee=1,we=0,Ue=0,ze=0}V!==null?(Ae=V.x,it=V.y,wt=V.z):(Ae=0,it=0,wt=0);const rt=D.convert(I.format),qt=D.convert(I.type);let xe;I.isData3DTexture?(S.setTexture3D(I,0),xe=N.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(S.setTexture2DArray(I,0),xe=N.TEXTURE_2D_ARRAY):(S.setTexture2D(I,0),xe=N.TEXTURE_2D),he.activeTexture(N.TEXTURE0),he.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,I.flipY),he.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),he.pixelStorei(N.UNPACK_ALIGNMENT,I.unpackAlignment);const _n=he.getParameter(N.UNPACK_ROW_LENGTH),qe=he.getParameter(N.UNPACK_IMAGE_HEIGHT),Cn=he.getParameter(N.UNPACK_SKIP_PIXELS),Jn=he.getParameter(N.UNPACK_SKIP_ROWS),Fi=he.getParameter(N.UNPACK_SKIP_IMAGES);he.pixelStorei(N.UNPACK_ROW_LENGTH,Mt.width),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Mt.height),he.pixelStorei(N.UNPACK_SKIP_PIXELS,we),he.pixelStorei(N.UNPACK_SKIP_ROWS,Ue),he.pixelStorei(N.UNPACK_SKIP_IMAGES,ze);const Gr=E.isDataArrayTexture||E.isData3DTexture,st=I.isDataArrayTexture||I.isData3DTexture;if(E.isDepthTexture){const At=A.get(E),Oi=A.get(I),ot=A.get(At.__renderTarget),zi=A.get(Oi.__renderTarget);he.bindFramebuffer(N.READ_FRAMEBUFFER,ot.__webglFramebuffer),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,zi.__webglFramebuffer);for(let Wr=0;Wr<Ee;Wr++)Gr&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(E).__webglTexture,H,ze+Wr),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,A.get(I).__webglTexture,ge,wt+Wr)),N.blitFramebuffer(we,Ue,ye,me,Ae,it,ye,me,N.DEPTH_BUFFER_BIT,N.NEAREST);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||A.has(E)){const At=A.get(E),Oi=A.get(I);he.bindFramebuffer(N.READ_FRAMEBUFFER,Gg),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,Wg);for(let ot=0;ot<Ee;ot++)Gr?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,At.__webglTexture,H,ze+ot):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,At.__webglTexture,H),st?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Oi.__webglTexture,ge,wt+ot):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Oi.__webglTexture,ge),H!==0?N.blitFramebuffer(we,Ue,ye,me,Ae,it,ye,me,N.COLOR_BUFFER_BIT,N.NEAREST):st?N.copyTexSubImage3D(xe,ge,Ae,it,wt+ot,we,Ue,ye,me):N.copyTexSubImage2D(xe,ge,Ae,it,we,Ue,ye,me);he.bindFramebuffer(N.READ_FRAMEBUFFER,null),he.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else st?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(xe,ge,Ae,it,wt,ye,me,Ee,rt,qt,Mt.data):I.isCompressedArrayTexture?N.compressedTexSubImage3D(xe,ge,Ae,it,wt,ye,me,Ee,rt,Mt.data):N.texSubImage3D(xe,ge,Ae,it,wt,ye,me,Ee,rt,qt,Mt):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ge,Ae,it,ye,me,rt,qt,Mt.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ge,Ae,it,Mt.width,Mt.height,rt,Mt.data):N.texSubImage2D(N.TEXTURE_2D,ge,Ae,it,ye,me,rt,qt,Mt);he.pixelStorei(N.UNPACK_ROW_LENGTH,_n),he.pixelStorei(N.UNPACK_IMAGE_HEIGHT,qe),he.pixelStorei(N.UNPACK_SKIP_PIXELS,Cn),he.pixelStorei(N.UNPACK_SKIP_ROWS,Jn),he.pixelStorei(N.UNPACK_SKIP_IMAGES,Fi),ge===0&&I.generateMipmaps&&N.generateMipmap(xe),he.unbindTexture()},this.initRenderTarget=function(E){A.get(E).__webglFramebuffer===void 0&&S.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?S.setTextureCube(E,0):E.isData3DTexture?S.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?S.setTexture2DArray(E,0):S.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){q=0,J=0,U=null,he.reset(),se.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return oi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=je._getDrawingBufferColorSpace(e),n.unpackColorSpace=je._getUnpackColorSpace()}}function FM(){const t=Vt.useRef();return Vt.useEffect(()=>{const e=t.current;if(!e)return;const n=new m3,i=new Dn(52,e.clientWidth/e.clientHeight,.1,100);i.position.z=7;const r=new UM({alpha:!0,antialias:!0});r.setSize(e.clientWidth,e.clientHeight),r.setPixelRatio(Math.min(window.devicePixelRatio,1.5)),r.setClearColor(0,0),e.appendChild(r.domElement);const s=new lh(.42,0),a=new A3(new b3(s),new Sg({color:16777215,transparent:!0,opacity:.55})),o=new br;o.position.set(2.6,.2,0),o.add(a);function l(d,v,y,C){const T=new br;T.rotation.x=v,T.rotation.z=y,T.add(new Zn(new uh(d,.006,8,90),new Bl({color:10592682,transparent:!0,opacity:C})));const R=new br,x=new Zn(new ch(.055,12,12),new Bl({color:16777215,transparent:!0,opacity:.9}));return x.position.x=d,R.add(x),T.add(R),{group:T,orbiter:R}}const c=[{...l(1.1,0,0,.3),speed:.42},{...l(1.55,Math.PI/3,Math.PI/6,.2),speed:.27},{...l(2,Math.PI/1.8,-Math.PI/7,.14),speed:.16}];c.forEach(d=>o.add(d.group)),n.add(o);const p=320,h=new Float32Array(p*3);for(let d=0;d<p;d++)h[d*3]=(Math.random()-.5)*22,h[d*3+1]=(Math.random()-.5)*14,h[d*3+2]=(Math.random()-.5)*10-2;const f=new tn;f.setAttribute("position",new $n(h,3));const m=new C3(f,new yg({color:7434618,size:.022,transparent:!0,opacity:.55,sizeAttenuation:!0}));n.add(m);let _;const M=new B3;function g(){_=requestAnimationFrame(g);const d=M.getElapsedTime();a.rotation.y=d*.35,a.rotation.x=d*.18,c.forEach(v=>{v.orbiter.rotation.z=d*v.speed}),m.rotation.y=d*.006,r.render(n,i)}g();function u(){e&&(i.aspect=e.clientWidth/e.clientHeight,i.updateProjectionMatrix(),r.setSize(e.clientWidth,e.clientHeight))}return window.addEventListener("resize",u),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",u),e.contains(r.domElement)&&e.removeChild(r.domElement),r.dispose()}},[]),w.jsx("div",{ref:t,style:{position:"absolute",inset:0,pointerEvents:"none"}})}function OM(){return w.jsxs("header",{id:"about",style:{position:"relative",overflow:"hidden"},children:[w.jsx(FM,{}),w.jsxs("div",{className:"wrap",style:{position:"relative",zIndex:1},children:[w.jsxs("div",{className:"hero",children:[w.jsxs("div",{children:[w.jsx("span",{className:"eyebrow rv hero-seq",children:"DevOps & Cloud Engineer"}),w.jsx("h1",{className:"shimmer rv hero-seq",children:"Nita Oktaviani"}),w.jsx("div",{className:"role rv hero-seq",children:"I keep cloud infrastructure reliable, automated, and observable."}),w.jsxs("div",{className:"cbs rv hero-seq",children:[w.jsxs("span",{className:"cb",children:[w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("circle",{cx:"12",cy:"9",r:"6"}),w.jsx("path",{d:"M9 14.5l-2 7 5-3 5 3-2-7"})]}),"AWS Community Builder"]}),w.jsxs("span",{className:"cb",children:[w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("circle",{cx:"9",cy:"8",r:"3"}),w.jsx("path",{d:"M3 20a6 6 0 0 1 12 0"}),w.jsx("path",{d:"M16 6a3 3 0 0 1 0 5.5"}),w.jsx("path",{d:"M19 20a5 5 0 0 0-3.5-4.7"})]}),"Community Lead at CloudKraft"]})]}),w.jsx("p",{className:"bio rv hero-seq",children:"A DevOps & Cloud Engineer who turns manual, fragile operations into automated and dependable systems. My work spans CI/CD pipelines, containerization, cloud infrastructure, and real time monitoring."}),w.jsxs("div",{className:"edu-chip rv hero-seq",children:[w.jsx("div",{className:"ic",children:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("path",{d:"M22 10L12 5 2 10l10 5 10-5z"}),w.jsx("path",{d:"M6 12v5c0 1 2.7 2.5 6 2.5s6-1.5 6-2.5v-5"})]})}),w.jsxs("div",{children:[w.jsx("div",{className:"t",children:"Education"}),w.jsx("div",{className:"v",children:"S1 Computer Science · BINUS University · Expected 2029"})]})]}),w.jsxs("div",{className:"hero-actions rv hero-seq",children:[w.jsx("a",{className:"btn primary",href:"#contact",children:"Get in touch"}),w.jsx("a",{className:"btn ghost",href:"#projects",children:"View my work"})]})]}),w.jsxs("div",{className:"photo-wrap rv hero-seq",children:[w.jsx("div",{className:"photo-line"}),w.jsx("div",{className:"photo",children:w.jsx("img",{src:"/nita.png",alt:"Nita Oktaviani"})})]})]}),w.jsxs("div",{className:"hl rv hero-seq",children:[w.jsxs("div",{children:[w.jsx("div",{className:"n","data-count":"3",children:"3"}),w.jsx("div",{className:"l",children:"Years in Tech"})]}),w.jsxs("div",{children:[w.jsx("div",{className:"n","data-count":"5",children:"5"}),w.jsx("div",{className:"l",children:"Cloud Certifications"})]}),w.jsxs("div",{children:[w.jsx("div",{className:"n","data-count":"4",children:"4"}),w.jsx("div",{className:"l",children:"Cloud Platforms"})]})]})]}),w.jsxs("div",{className:"scroll-hint rv hero-seq",children:[w.jsx("div",{className:"scroll-hint-line"}),w.jsx("span",{children:"scroll"})]})]})}function zM(){return w.jsx("section",{id:"projects",children:w.jsxs("div",{className:"wrap",children:[w.jsxs("div",{className:"sec-head rv",children:[w.jsx("span",{className:"eyebrow",children:"Projects"}),w.jsx("h2",{children:"Things I've built"}),w.jsx("p",{children:"Selected work across deployment, observability, and automation."})]}),w.jsx("div",{className:"divider"}),w.jsxs("div",{className:"proj-grid",children:[w.jsxs("div",{className:"card proj rv",children:[w.jsxs("div",{className:"proj-co",children:[w.jsx("div",{className:"logo",children:"A"}),w.jsxs("div",{children:[w.jsx("div",{className:"co-name",children:"PT Astra Graphia Information Technology"}),w.jsx("div",{className:"co-role",children:"DevOps Engineer"})]})]}),w.jsxs("div",{className:"subproj",children:[w.jsx("h3",{children:"Lexus LCEP"}),w.jsxs("ul",{children:[w.jsxs("li",{children:["Built and managed ",w.jsx("b",{children:"CI/CD deployment"})," using GitLab to development and production environments."]}),w.jsxs("li",{children:["Deployed applications to ",w.jsx("b",{children:"Azure Kubernetes Service (AKS)"}),"."]}),w.jsxs("li",{children:["Set up log monitoring with ",w.jsx("b",{children:"LGTM-FP"})," for real time visibility."]})]})]}),w.jsxs("div",{className:"subproj",children:[w.jsx("h3",{children:"Toyota Astra Motor"}),w.jsxs("ul",{children:[w.jsxs("li",{children:["Automated ",w.jsx("b",{children:"weekly backup and metric collection"})," (database, app service, VM) across Azure, GCP, and Huawei Cloud using custom scripts."]}),w.jsxs("li",{children:["Automated ",w.jsx("b",{children:"monthly FinOps cost reporting"}),"."]}),w.jsxs("li",{children:["Scheduled all automation through ",w.jsx("b",{children:"CI/CD with Azure DevOps"}),"."]}),w.jsxs("li",{children:["Standardized ",w.jsx("b",{children:"policies, alerts, and metrics"})," through scripting."]})]})]}),w.jsxs("div",{className:"research",children:[w.jsx("b",{children:"Research & exploration:"})," LGTM-FP observability stack, GitOps, DevSecOps, and Open Policy Agent (OPA)."]}),w.jsxs("div",{className:"tech",children:[w.jsx("span",{children:"Azure DevOps"}),w.jsx("span",{children:"GitLab CI"}),w.jsx("span",{children:"AKS"}),w.jsx("span",{children:"LGTM-FP"}),w.jsx("span",{children:"Azure"}),w.jsx("span",{children:"GCP"}),w.jsx("span",{children:"Huawei Cloud"})]})]}),w.jsxs("div",{className:"card proj rv d1",children:[w.jsxs("div",{className:"proj-co",children:[w.jsx("div",{className:"logo",children:"O"}),w.jsxs("div",{children:[w.jsx("div",{className:"co-name",children:"Ordent"}),w.jsx("div",{className:"co-role",children:"DevOps Developer"})]})]}),w.jsx("h3",{children:"Qlola Cash Management Platform"}),w.jsxs("div",{className:"proj-client",children:[w.jsx("span",{children:"Client:"})," Bank Rakyat Indonesia (BRI)"]}),w.jsxs("ul",{children:[w.jsxs("li",{children:["Collaborated in the ",w.jsx("b",{children:"100 Day Task Initiative"}),", assisting in migrating Bamboo build plans for microservices and improving CI/CD efficiency across multiple squads."]}),w.jsxs("li",{children:["Designed and implemented ",w.jsx("b",{children:"CI/CD pipelines"})," using Atlassian Bamboo, streamlining build, test, and deployment."]}),w.jsxs("li",{children:["Deployed and managed applications on ",w.jsx("b",{children:"OpenShift"}),", ensuring high availability and scalability of containerized apps."]}),w.jsxs("li",{children:["Supported ",w.jsx("b",{children:"production deployments"}),", preparing and validating deployment packages and environment readiness with the Ops team."]}),w.jsxs("li",{children:["Optimized ",w.jsx("b",{children:"resource allocation"})," (CPU and memory) to improve performance and reduce cost."]}),w.jsxs("li",{children:["Practiced ",w.jsx("b",{children:"Bamboo Specs"})," (pipeline as code), gained hands on experience with ",w.jsx("b",{children:"RabbitMQ"})," and ",w.jsx("b",{children:"Rundeck"}),", and used Bitbucket, Git, and Konga for version control and API gateway."]}),w.jsxs("li",{children:["Presented squad merging and deployment flow improvements to ",w.jsx("b",{children:"management"})," and cross squad teams, supporting smoother Dev, Ops, and QA collaboration."]})]}),w.jsxs("div",{className:"tech",children:[w.jsx("span",{children:"Atlassian Bamboo"}),w.jsx("span",{children:"OpenShift"}),w.jsx("span",{children:"RabbitMQ"}),w.jsx("span",{children:"Rundeck"}),w.jsx("span",{children:"Bitbucket"}),w.jsx("span",{children:"Konga"})]})]})]}),w.jsx("p",{className:"conf-note rv",children:"Some client details are kept high level. Happy to walk through specifics in a conversation."})]})})}const BM=[{img:"/cert-azure.png",alt:"Microsoft Certified Azure Administrator Associate",org:"Microsoft",name:"Azure Administrator Associate"},{img:"/cert-gcp.png",alt:"Google Cloud Professional Cloud DevOps Engineer",org:"Google Cloud",name:"Professional Cloud DevOps Engineer"},{img:"/cert-aws.png",alt:"AWS Certified Cloud Practitioner",org:"Amazon Web Services",name:"AWS Certified Cloud Practitioner"},{img:"/cert-alibaba-ace.png",alt:"Alibaba Cloud Certified Associate Cloud Engineer",org:"Alibaba Cloud",name:"Associate Cloud Engineer (ACA)"},{img:"/cert-alibaba-sysop.png",alt:"Alibaba Cloud Certified Associate System Operator",org:"Alibaba Cloud",name:"Associate System Operator"}],kM=[""," d1"," d2"," d3"," d4"," d5"];function VM(){return w.jsx("section",{id:"certs",children:w.jsxs("div",{className:"wrap",children:[w.jsxs("div",{className:"sec-head rv",children:[w.jsx("span",{className:"eyebrow",children:"Certifications"}),w.jsx("h2",{children:"Cloud credentials"}),w.jsx("p",{children:"Professional certifications across the major cloud providers."})]}),w.jsx("div",{className:"divider"}),w.jsxs("div",{className:"cert-grid",children:[BM.map((t,e)=>w.jsxs("div",{className:`cert rv${kM[e%3]}`,children:[w.jsxs("div",{className:"cert-img",children:[w.jsx("a",{href:t.img,target:"_blank",rel:"noopener noreferrer",children:w.jsx("img",{src:t.img,alt:t.alt})}),w.jsx("span",{className:"cert-view",children:"View"})]}),w.jsxs("div",{className:"cert-body",children:[w.jsx("div",{className:"org",children:t.org}),w.jsx("h3",{children:t.name})]})]},t.img)),w.jsx("div",{className:"cert rv d2",style:{display:"flex",alignItems:"center",justifyContent:"center",borderStyle:"dashed"},children:w.jsxs("div",{className:"cert-body",style:{textAlign:"center"},children:[w.jsx("div",{style:{fontSize:24,color:"var(--faint)",marginBottom:8},children:"+"}),w.jsx("h3",{style:{color:"var(--muted)"},children:"More on the way"})]})})]})]})})}const HM=[{title:"DevOps Engineer",place:"PT Astra Graphia Information Technology (AGIT)",location:"Jakarta",type:"work",when:"Jan 2026 · Present"},{title:"Cloud Computing Bootcamp",place:"Orbit Future Academy",type:"bootcamp",when:"Jul 2025 · Oct 2025"},{title:"Expert Class: GenAI & Machine Learning",place:"SMKDEV Scholarship",type:"bootcamp",when:"Jun 2025 · Sep 2025"},{title:"MLOps & DevOps Engineer Trainee",place:"DevOps Focus Group",type:"bootcamp",when:"Jun 2025 · Aug 2025"},{title:"DevOps Developer",place:"Ordent",sub:"Qlola Cash Management, BRI",type:"work",when:"Jan 2024 · Jan 2026"},{title:"Linux SysAdmin Trainee",place:"ID Networkers (IDN.ID)",type:"bootcamp",when:"Oct 2023 · Nov 2023"},{title:"Cloud & Cybersecurity Trainee",place:"InfraDigital Foundation",type:"bootcamp",when:"Aug 2023 · Oct 2023"},{title:"DevOps & Cloud Engineer Intern",place:"Boer Technology (Btech)",location:"Bogor",type:"intern",when:"Jul 2023 · Dec 2023"},{title:"Cloud Computing Trainee",place:"ID Networkers (IDN.ID)",type:"bootcamp",when:"Sep 2022 · Dec 2022"},{title:"Linux System Administrator",place:"FazTrain I.T Training & Consulting",location:"Palopo",type:"intern",typeLabel:"PKL",when:"Mar 2022 · May 2022"}];function GM(){return w.jsx("section",{id:"experience",children:w.jsxs("div",{className:"wrap",children:[w.jsxs("div",{className:"sec-head rv",children:[w.jsx("span",{className:"eyebrow",children:"Experience"}),w.jsx("h2",{children:"My journey"}),w.jsx("p",{children:"Work, internships, and programs that shaped my career."})]}),w.jsx("div",{className:"divider"}),w.jsx("div",{className:"timeline",children:HM.map((t,e)=>w.jsx("div",{className:`exp rv${e<5?` d${e}`:""}`,children:w.jsxs("div",{className:"exp-card",children:[w.jsxs("div",{className:"exp-info",children:[w.jsx("h3",{children:t.title}),w.jsxs("div",{className:"place",children:[w.jsx("em",{children:t.place}),t.sub&&` · ${t.sub}`,t.location&&` · ${t.location}`]})]}),w.jsxs("div",{className:"exp-right",children:[w.jsx("span",{className:`type-tag ${t.type}`,children:t.typeLabel||t.type}),w.jsx("span",{className:"when",children:t.when})]})]})},e))}),w.jsx("h3",{className:"rv",style:{fontFamily:"var(--display)",fontWeight:300,fontSize:"clamp(24px,3.5vw,32px)",textAlign:"center",marginTop:72,letterSpacing:"-.02em",color:"var(--white)"},children:"Community & Leadership"}),w.jsxs("div",{className:"roles",children:[w.jsxs("div",{className:"role-card rv",children:[w.jsx("div",{className:"ic",children:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("circle",{cx:"12",cy:"12",r:"9"}),w.jsx("path",{d:"M3 12h18"}),w.jsx("path",{d:"M12 3c3 3.5 3 14.5 0 18M12 3c-3 3.5-3 14.5 0 18"})]})}),w.jsx("h4",{children:"Community Lead"}),w.jsx("div",{className:"rc-org",children:"CloudKraft Community"}),w.jsx("p",{children:"Organizing webinars, tech talks, and knowledge sharing on Cloud Computing and DevOps. (Since 2025)"})]}),w.jsxs("div",{className:"role-card rv d1",children:[w.jsx("div",{className:"ic",children:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("rect",{x:"9",y:"3",width:"6",height:"11",rx:"3"}),w.jsx("path",{d:"M5 11a7 7 0 0 0 14 0"}),w.jsx("path",{d:"M12 18v3"})]})}),w.jsx("h4",{children:"Professional Speaker"}),w.jsx("div",{className:"rc-org",children:"PT Evolver Innovation Center"}),w.jsx("p",{children:"Delivered AWS IAM technical sessions and hands on labs for students and professionals. (2025)"})]}),w.jsxs("div",{className:"role-card rv d2",children:[w.jsx("div",{className:"ic",children:w.jsx("svg",{viewBox:"0 0 24 24",children:w.jsx("path",{d:"M12 2l2.6 5.6L20 8.3l-4 4 1 6L12 15.5 7 18.3l1-6-4-4 5.4-.7z"})})}),w.jsx("h4",{children:"AWS Community Builder"}),w.jsx("div",{className:"rc-org",children:"Amazon Web Services"}),w.jsx("p",{children:"Recognized contributor sharing knowledge on AWS and modern cloud practices."})]})]})]})})}const ht='<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>',pt='</title><path d="',mt='"/></svg>',WM={title:"Alibaba Cloud",slug:"alibabacloud",get svg(){return ht+"Alibaba Cloud"+pt+this.path+mt},path:"M3.996 4.517h5.291L8.01 6.324 4.153 7.506a1.668 1.668 0 0 0-1.165 1.601v5.786a1.668 1.668 0 0 0 1.165 1.6l3.857 1.183 1.277 1.807H3.996A3.996 3.996 0 0 1 0 15.487V8.513a3.996 3.996 0 0 1 3.996-3.996m16.008 0h-5.291l1.277 1.807 3.857 1.182c.715.227 1.17.889 1.165 1.601v5.786a1.668 1.668 0 0 1-1.165 1.6l-3.857 1.183-1.277 1.807h5.291A3.996 3.996 0 0 0 24 15.487V8.513a3.996 3.996 0 0 0-3.996-3.996m-4.007 8.345H8.002v-1.804h7.995Z",source:"https://www.alibabagroup.com/en/ir/reports",hex:"FF6A00"},jM={title:"Ansible",slug:"ansible",get svg(){return ht+"Ansible"+pt+this.path+mt},path:"M10.617 11.473l4.686 3.695-3.102-7.662zM12 0C5.371 0 0 5.371 0 12s5.371 12 12 12 12-5.371 12-12S18.629 0 12 0zm5.797 17.305c-.011.471-.403.842-.875.83-.236 0-.416-.09-.664-.293l-6.19-5-2.079 5.203H6.191L11.438 5.44c.124-.314.427-.52.764-.506.326-.014.63.189.742.506l4.774 11.494c.045.111.08.234.08.348-.001.009-.001.009-.001.023z",source:"https://www.ansible.com/logos",hex:"EE0000"},XM={title:"Argo",slug:"argo",get svg(){return ht+"Argo"+pt+this.path+mt},path:"M12.581 0c.436.037.871.1 1.299.186 1.679.383 3.121 1.213 4.382 2.365 1.161 1.06 1.917 2.372 2.335 3.881.089.321.216.56.586.624.205.035.238.245.239.43.003.646.002 1.294.002 1.94l-.002 1.21c-.001.356-.116.479-.466.474-.211-.003-.293.119-.344.291-.146.489-.33.966-.552 1.426-.818 1.682-2.084 2.938-3.688 3.87-.077.045-.155.088-.233.131-.252.137-.258.146-.155.415.114.299.358.529.664.625.269.096.553.134.827.21a.672.672 0 0 1 .236.094c-.066.082-.156.067-.231.082-.36.073-.713.184-1.086.17a1.275 1.275 0 0 1-.438-.064c-.114-.045-.152-.006-.176.109a5.354 5.354 0 0 0-.084.92c-.015.617-.071 1.23-.112 1.844-.042.598-.018.651.558.842.281.094.563.187.842.286.069.024.15.038.192.117-.04.057-.098.035-.146.035-.493.003-.985.005-1.478.001-.524-.005-.806-.282-.845-.803-.055-.762-.12-1.524-.182-2.286a.947.947 0 0 0-.026-.12c-.079.455-.065.879-.084 1.298-.023.528-.008 1.057-.007 1.584 0 .27.086.388.335.483.359.135.711.295 1.114.262.141-.012.276.062.402.129.032.017.073.033.069.073-.004.043-.049.047-.084.045-.657-.019-1.317.065-1.972-.028-.323-.046-.533-.236-.631-.552-.094-.303-.114-.617-.137-.93-.046-.626-.078-1.253-.116-1.88a.222.222 0 0 0-.061-.171.282.282 0 0 0-.031.193c-.002.956-.002 1.911-.001 2.866 0 .388.123.575.494.708.481.172.976.298 1.47.423.11.028.225.047.242.192h-1.852c-.051-.01-.103-.022-.155-.03-.701-.1-1.001-.372-1.143-1.042l-.067-.331-.226-1.103c-.069.12-.118.25-.144.386-.083.399-.151.802-.243 1.2-.113.493-.444.763-.932.857l-.33.063H8.558c.057-.171.216-.185.355-.221.476-.127.96-.223 1.417-.409a.603.603 0 0 0 .397-.521c.058-.435.002-.865-.013-1.296a1.528 1.528 0 0 0-.078-.315.405.405 0 0 0-.071.207c-.026.296-.049.591-.075.886-.038.432-.273.716-.679.81a1.702 1.702 0 0 1-.37.045c-.557.003-1.115-.001-1.673-.005-.048 0-.109.019-.148-.065.178-.103.377-.168.582-.187a5.67 5.67 0 0 0 .939-.193c.42-.114.522-.249.512-.687-.023-.931-.091-1.86-.069-2.791.004-.184.001-.368.001-.551a2.387 2.387 0 0 0-.05.385 40.299 40.299 0 0 1-.186 2.623c-.052.513-.296.748-.804.805-.446.051-.889.002-1.332-.02-.108-.006-.234.012-.339-.064.043-.066.106-.07.16-.087.362-.115.725-.224 1.086-.344.246-.081.35-.235.355-.492a2.241 2.241 0 0 0-.003-.232 45.315 45.315 0 0 1-.105-2.149 5.487 5.487 0 0 0-.035-.478c-.024-.188-.131-.287-.295-.258-.505.092-.99-.006-1.473-.139-.059-.016-.134-.007-.178-.088a.986.986 0 0 1 .285-.09c.255-.052.507-.121.753-.208.312-.112.564-.347.695-.651.089-.203.056-.317-.112-.398-1.418-.683-2.512-1.73-3.391-3.017a8.152 8.152 0 0 1-1.123-2.447c-.067-.246-.156-.3-.383-.26-.306.053-.401.006-.535-.273v-3.49c.144-.303.205-.341.534-.329.235.01.247-.004.309-.242.396-1.508 1.082-2.861 2.171-3.988C6.9 1.42 8.523.631 10.34.203c.456-.108.922-.15 1.387-.203h.854Zm7.974 8.948a7.34 7.34 0 0 0-.048-.938 8.353 8.353 0 0 0-.099-.65c-.598-2.964-2.344-5.02-5.051-6.268-1.553-.715-3.21-.835-4.878-.511-3.248.633-5.396 2.583-6.539 5.652-.436 1.173-.495 2.406-.37 3.65.087.935.339 1.846.745 2.694.585 1.213 1.444 2.207 2.477 3.058.343.286.719.528 1.121.719.235.111.247.105.245-.146.006-.16.003-.32-.009-.48-.125-1.02-.142-2.045-.169-3.069a.392.392 0 0 0-.184-.353c-.385-.268-.713-.592-.921-1.019-.474-.97-.372-2.361.813-3.215.136-.097.217-.19.198-.373a1.724 1.724 0 0 1 .031-.442c.177-1.187.748-2.138 1.722-2.84.68-.492 1.442-.772 2.286-.782.483-.007.953.11 1.414.244 1.609.467 2.846 2.07 2.845 3.697a.64.64 0 0 0 .268.565c.463.371.821.83.943 1.426.22 1.077-.083 1.982-.979 2.634-.266.194-.347.406-.333.698.002.047 0 .095-.002.142l-.062 1.439c-.025.586-.138 1.165-.117 1.754.008.223.006.226.201.128a7.46 7.46 0 0 0 2.393-1.903c1.32-1.577 2.074-3.372 2.059-5.511ZM9.117 12.102c1.489.021 2.443-1.578 1.716-2.879a1.937 1.937 0 0 0-1.699-.991c-1.094-.004-1.954.822-1.958 1.881-.005 1.148.813 1.985 1.941 1.989Zm5.794 0c1.101.002 1.935-.823 1.935-1.917 0-1.091-.846-1.949-1.92-1.947-1.064.003-1.94.866-1.943 1.915-.003 1.105.831 1.948 1.928 1.949Zm-1.472 1.937c-.208.128-.407.277-.63.384-.536.257-1.063.257-1.579-.048-.158-.094-.308-.201-.464-.298-.047-.028-.092-.103-.15-.062-.044.03-.01.1-.001.151.037.179.064.362.082.544.027.565.293.992.742 1.31a.984.984 0 0 0 .791.186c.565-.119 1.025-.614 1.124-1.218.043-.266.005-.544.109-.803a.133.133 0 0 0-.024-.146Zm-8.78-4.92c-.012-1.102.143-2.055.54-2.961.633-1.443 1.642-2.553 2.98-3.374a.378.378 0 0 1 .459.067c.06.06.036.118.01.178a1.09 1.09 0 0 1-.48.51c-1.079.639-1.829 1.571-2.357 2.688a6.325 6.325 0 0 0-.618 2.986c.055 1.309.439 2.516 1.213 3.588.088.104.148.23.173.365.01.08.059.168-.031.228a.312.312 0 0 1-.288.041.502.502 0 0 1-.234-.185c-.72-.979-1.193-2.056-1.331-3.273-.036-.326-.004-.653-.036-.858ZM8.94 2.34a.373.373 0 0 1 .378-.382c.211.001.409.226.416.473.004.138-.309.39-.476.386-.189-.005-.318-.2-.318-.477Zm-.465 7.48a.609.609 0 0 1 .586-.631c.38-.003.671.271.675.633.004.356-.27.622-.639.621-.38-.002-.621-.241-.622-.623Zm6.496.623c-.381-.002-.625-.255-.621-.646a.635.635 0 0 1 .596-.613.656.656 0 0 1 .669.643c.001.354-.275.618-.644.616Z",source:"https://github.com/cncf/artwork/blob/c2e619cdf85e8bac090ceca7c0834c5cfedf9426/projects/argo/icon/black/argo-icon-black.svg",hex:"EF7B4D"},qM={title:"Bamboo",slug:"bamboo",get svg(){return ht+"Bamboo"+pt+this.path+mt},path:"M21.7142 13.6433h-4.9888a.651.651 0 00-.655.555 4.1139 4.1139 0 01-4.0619 3.5299l1.35 6.1728a10.3737 10.3737 0 009.0077-9.5447.651.651 0 00-.652-.713zm-8.6327-.158l7.1998-6.1718a.645.645 0 000-.984L13.0815.1597a.648.648 0 00-1.074.483v12.3426a.651.651 0 001.073.5zm-11.3547 1.505A10.3847 10.3847 0 0012.0115 24v-6.2698a4.0929 4.0929 0 01-4.0999-4.0869zm-.096-1.447v.1h6.2798a4.0929 4.0929 0 014.098-4.0879l-1.348-6.1698a10.3697 10.3697 0 00-9.0298 10.1577",source:"https://www.atlassian.design/guidelines/marketing/resources/logo-files",hex:"0052CC"},Ug={title:"Docker",slug:"docker",get svg(){return ht+"Docker"+pt+this.path+mt},path:"M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.184-.186h-2.12a.186.186 0 00-.186.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288Z",source:"https://www.docker.com/company/newsroom/media-resources",hex:"2496ED"},YM={title:"Dynatrace",slug:"dynatrace",get svg(){return ht+"Dynatrace"+pt+this.path+mt},path:"M9.372 0c-.31.006-.93.09-1.521.654-.872.824-5.225 4.957-6.973 6.617-.79.754-.72 1.595-.72 1.664v.377c.067-.292.187-.5.427-.825.496-.616 1.3-.788 1.627-.822a64.238 64.238 0 01.002 0 64.238 64.238 0 016.528-.55c4.335-.136 7.197.226 7.197.226l6.085-5.794s-3.188-.6-6.82-1.027a93.4 93.4 0 00-5.64-.514c-.02 0-.09-.008-.192-.006zm13.56 2.508l-6.066 5.79s.222 2.881-.137 7.2c-.189 2.45-.584 4.866-.875 6.494-.052.326-.256 1.114-.925 1.594-.29.198-.49.295-.748.363 1.546-.51 1.091-7.047 1.091-7.047-4.335.137-7.214-.223-7.214-.223l-6.085 5.793s3.223.634 6.856 1.045c2.056.24 4.833.429 5.227.463.023 0 .045-.007.068-.012-.013.003-.022.009-.035.012.138 0 .26.015.38.015.084 0 .924.105 1.712-.648 1.748-1.663 6.084-5.81 6.94-6.634.789-.754.72-1.594.72-1.68a81.846 81.846 0 00-.206-5.654 101.75 101.75 0 00-.701-6.872zM3.855 8.306c-1.73.002-3.508.208-3.696 1.021.017 1.216.05 3.137.205 5.28.24 3.65.703 6.887.703 6.887l6.083-5.79c-.017.016-.24-2.88.12-7.2 0 0-1.684-.201-3.416-.2z",source:"https://www.dynatrace.com/company/press-kit/",hex:"1496FF"},$M={title:"Elasticsearch",slug:"elasticsearch",get svg(){return ht+"Elasticsearch"+pt+this.path+mt},path:"M13.394 0C8.683 0 4.609 2.716 2.644 6.667h15.641a4.77 4.77 0 0 0 3.073-1.11c.446-.375.864-.785 1.247-1.243l.001-.002A11.974 11.974 0 0 0 13.394 0zM1.804 8.889a12.009 12.009 0 0 0 0 6.222h14.7a3.111 3.111 0 1 0 0-6.222zm.84 8.444C4.61 21.283 8.684 24 13.395 24c3.701 0 7.011-1.677 9.212-4.312l-.001-.002a9.958 9.958 0 0 0-1.247-1.243 4.77 4.77 0 0 0-3.073-1.11z",source:"https://www.elastic.co/brand",hex:"005571"},KM={title:"GitHub Actions",slug:"githubactions",get svg(){return ht+"GitHub Actions"+pt+this.path+mt},path:"M10.984 13.836a.5.5 0 0 1-.353-.146l-.745-.743a.5.5 0 1 1 .706-.708l.392.391 1.181-1.18a.5.5 0 0 1 .708.707l-1.535 1.533a.504.504 0 0 1-.354.146zm9.353-.147l1.534-1.532a.5.5 0 0 0-.707-.707l-1.181 1.18-.392-.391a.5.5 0 1 0-.706.708l.746.743a.497.497 0 0 0 .706-.001zM4.527 7.452l2.557-1.585A1 1 0 0 0 7.09 4.17L4.533 2.56A1 1 0 0 0 3 3.406v3.196a1.001 1.001 0 0 0 1.527.85zm2.03-2.436L4 6.602V3.406l2.557 1.61zM24 12.5c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3h-2.08a3.503 3.503 0 0 1-3.46 3 3.502 3.502 0 0 1-3.46-3h-.558c-.972 0-1.85-.399-2.482-1.042V17c0 1.654 1.346 3 3 3h.04c.244-1.693 1.7-3 3.46-3 1.93 0 3.5 1.57 3.5 3.5S13.43 24 11.5 24a3.502 3.502 0 0 1-3.46-3H8c-2.206 0-4-1.794-4-4V9.899A5.008 5.008 0 0 1 0 5c0-2.757 2.243-5 5-5s5 2.243 5 5a5.005 5.005 0 0 1-4.952 4.998A2.482 2.482 0 0 0 7.482 12h.558c.244-1.693 1.7-3 3.46-3a3.502 3.502 0 0 1 3.46 3h2.08a3.503 3.503 0 0 1 3.46-3c1.93 0 3.5 1.57 3.5 3.5zm-15 8c0 1.378 1.122 2.5 2.5 2.5s2.5-1.122 2.5-2.5-1.122-2.5-2.5-2.5S9 19.122 9 20.5zM5 9c2.206 0 4-1.794 4-4S7.206 1 5 1 1 2.794 1 5s1.794 4 4 4zm9 3.5c0-1.378-1.122-2.5-2.5-2.5S9 11.122 9 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm9 0c0-1.378-1.122-2.5-2.5-2.5S18 11.122 18 12.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5zm-13 8a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm2 0a.5.5 0 1 0 1 0 .5.5 0 0 0-1 0zm12 0c0 1.93-1.57 3.5-3.5 3.5a3.503 3.503 0 0 1-3.46-3.002c-.007.001-.013.005-.021.005l-.506.017h-.017a.5.5 0 0 1-.016-.999l.506-.017c.018-.002.035.006.052.007A3.503 3.503 0 0 1 20.5 17c1.93 0 3.5 1.57 3.5 3.5zm-1 0c0-1.378-1.122-2.5-2.5-2.5S18 19.122 18 20.5s1.122 2.5 2.5 2.5 2.5-1.122 2.5-2.5z",source:"https://github.com/features/actions",hex:"2088FF"},ZM={title:"GitLab",slug:"gitlab",get svg(){return ht+"GitLab"+pt+this.path+mt},path:"m23.6004 9.5927-.0337-.0862L20.3.9814a.851.851 0 0 0-.3362-.405.8748.8748 0 0 0-.9997.0539.8748.8748 0 0 0-.29.4399l-2.2055 6.748H7.5375l-2.2057-6.748a.8573.8573 0 0 0-.29-.4412.8748.8748 0 0 0-.9997-.0537.8585.8585 0 0 0-.3362.4049L.4332 9.5015l-.0325.0862a6.0657 6.0657 0 0 0 2.0119 7.0105l.0113.0087.03.0213 4.976 3.7264 2.462 1.8633 1.4995 1.1321a1.0085 1.0085 0 0 0 1.2197 0l1.4995-1.1321 2.4619-1.8633 5.006-3.7489.0125-.01a6.0682 6.0682 0 0 0 2.0094-7.003z",source:"https://about.gitlab.com/press/press-kit/",hex:"FC6D26",guidelines:"https://about.gitlab.com/handbook/marketing/corporate-marketing/brand-activation/trademark-guidelines/"},Op={path:"M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z",hex:"EA4335"},QM={title:"GNU Bash",slug:"gnubash",get svg(){return ht+"GNU Bash"+pt+this.path+mt},path:"M21.038,4.9l-7.577-4.498C13.009,0.134,12.505,0,12,0c-0.505,0-1.009,0.134-1.462,0.403L2.961,4.9 C2.057,5.437,1.5,6.429,1.5,7.503v8.995c0,1.073,0.557,2.066,1.462,2.603l7.577,4.497C10.991,23.866,11.495,24,12,24 c0.505,0,1.009-0.134,1.461-0.402l7.577-4.497c0.904-0.537,1.462-1.529,1.462-2.603V7.503C22.5,6.429,21.943,5.437,21.038,4.9z M15.17,18.946l0.013,0.646c0.001,0.078-0.05,0.167-0.111,0.198l-0.383,0.22c-0.061,0.031-0.111-0.007-0.112-0.085L14.57,19.29 c-0.328,0.136-0.66,0.169-0.872,0.084c-0.04-0.016-0.057-0.075-0.041-0.142l0.139-0.584c0.011-0.046,0.036-0.092,0.069-0.121 c0.012-0.011,0.024-0.02,0.036-0.026c0.022-0.011,0.043-0.014,0.062-0.006c0.229,0.077,0.521,0.041,0.802-0.101 c0.357-0.181,0.596-0.545,0.592-0.907c-0.003-0.328-0.181-0.465-0.613-0.468c-0.55,0.001-1.064-0.107-1.072-0.917 c-0.007-0.667,0.34-1.361,0.889-1.8l-0.007-0.652c-0.001-0.08,0.048-0.168,0.111-0.2l0.37-0.236 c0.061-0.031,0.111,0.007,0.112,0.087l0.006,0.653c0.273-0.109,0.511-0.138,0.726-0.088c0.047,0.012,0.067,0.076,0.048,0.151 l-0.144,0.578c-0.011,0.044-0.036,0.088-0.065,0.116c-0.012,0.012-0.025,0.021-0.038,0.028c-0.019,0.01-0.038,0.013-0.057,0.009 c-0.098-0.022-0.332-0.073-0.699,0.113c-0.385,0.195-0.52,0.53-0.517,0.778c0.003,0.297,0.155,0.387,0.681,0.396 c0.7,0.012,1.003,0.318,1.01,1.023C16.105,17.747,15.736,18.491,15.17,18.946z M19.143,17.859c0,0.06-0.008,0.116-0.058,0.145 l-1.916,1.164c-0.05,0.029-0.09,0.004-0.09-0.056v-0.494c0-0.06,0.037-0.093,0.087-0.122l1.887-1.129 c0.05-0.029,0.09-0.004,0.09,0.056V17.859z M20.459,6.797l-7.168,4.427c-0.894,0.523-1.553,1.109-1.553,2.187v8.833 c0,0.645,0.26,1.063,0.66,1.184c-0.131,0.023-0.264,0.039-0.398,0.039c-0.42,0-0.833-0.114-1.197-0.33L3.226,18.64 c-0.741-0.44-1.201-1.261-1.201-2.142V7.503c0-0.881,0.46-1.702,1.201-2.142l7.577-4.498c0.363-0.216,0.777-0.33,1.197-0.33 c0.419,0,0.833,0.114,1.197,0.33l7.577,4.498c0.624,0.371,1.046,1.013,1.164,1.732C21.686,6.557,21.12,6.411,20.459,6.797z",source:"https://github.com/odb/official-bash-logo/tree/61eff022f2dad3c7468f5deb4f06652d15f2c143",hex:"4EAA25",guidelines:"https://github.com/odb/official-bash-logo",license:{type:"MIT",url:"https://spdx.org/licenses/MIT"}},JM={title:"Google Cloud",slug:"googlecloud",get svg(){return ht+"Google Cloud"+pt+this.path+mt},path:"M12.19 2.38a9.344 9.344 0 0 0-9.234 6.893c.053-.02-.055.013 0 0-3.875 2.551-3.922 8.11-.247 10.941l.006-.007-.007.03a6.717 6.717 0 0 0 4.077 1.356h5.173l.03.03h5.192c6.687.053 9.376-8.605 3.835-12.35a9.365 9.365 0 0 0-2.821-4.552l-.043.043.006-.05A9.344 9.344 0 0 0 12.19 2.38zm-.358 4.146c1.244-.04 2.518.368 3.486 1.15a5.186 5.186 0 0 1 1.862 4.078v.518c3.53-.07 3.53 5.262 0 5.193h-5.193l-.008.009v-.04H6.785a2.59 2.59 0 0 1-1.067-.23h.001a2.597 2.597 0 1 1 3.437-3.437l3.013-3.012A6.747 6.747 0 0 0 8.11 8.24c.018-.01.04-.026.054-.023a5.186 5.186 0 0 1 3.67-1.69z",source:"https://cloud.google.com",hex:"4285F4"},Fg={title:"Grafana",slug:"grafana",get svg(){return ht+"Grafana"+pt+this.path+mt},path:"M23.02 10.59a8.578 8.578 0 0 0-.862-3.034 8.911 8.911 0 0 0-1.789-2.445c.337-1.342-.413-2.505-.413-2.505-1.292-.08-2.113.4-2.416.62-.052-.02-.102-.044-.154-.064-.22-.089-.446-.172-.677-.247-.231-.073-.47-.14-.711-.197a9.867 9.867 0 0 0-.875-.161C14.557.753 12.94 0 12.94 0c-1.804 1.145-2.147 2.744-2.147 2.744l-.018.093c-.098.029-.2.057-.298.088-.138.042-.275.094-.413.143-.138.055-.275.107-.41.166a8.869 8.869 0 0 0-1.557.87l-.063-.029c-2.497-.955-4.716.195-4.716.195-.203 2.658.996 4.33 1.235 4.636a11.608 11.608 0 0 0-.607 2.635C1.636 12.677.953 15.014.953 15.014c1.926 2.214 4.171 2.351 4.171 2.351.003-.002.006-.002.006-.005.285.509.615.994.986 1.446.156.19.32.371.488.548-.704 2.009.099 3.68.099 3.68 2.144.08 3.553-.937 3.849-1.173a9.784 9.784 0 0 0 3.164.501h.08l.055-.003.107-.002.103-.005.003.002c1.01 1.44 2.788 1.646 2.788 1.646 1.264-1.332 1.337-2.653 1.337-2.94v-.058c0-.02-.003-.039-.003-.06.265-.187.52-.387.758-.6a7.875 7.875 0 0 0 1.415-1.7c1.43.083 2.437-.885 2.437-.885-.236-1.49-1.085-2.216-1.264-2.354l-.018-.013-.016-.013a.217.217 0 0 1-.031-.02c.008-.092.016-.18.02-.27.011-.162.016-.323.016-.48v-.253l-.005-.098-.008-.135a1.891 1.891 0 0 0-.01-.13c-.003-.042-.008-.083-.013-.125l-.016-.124-.018-.122a6.215 6.215 0 0 0-2.032-3.73 6.015 6.015 0 0 0-3.222-1.46 6.292 6.292 0 0 0-.85-.048l-.107.002h-.063l-.044.003-.104.008a4.777 4.777 0 0 0-3.335 1.695c-.332.4-.592.84-.768 1.297a4.594 4.594 0 0 0-.312 1.817l.003.091c.005.055.007.11.013.164a3.615 3.615 0 0 0 .698 1.82 3.53 3.53 0 0 0 1.827 1.282c.33.098.66.14.971.137.039 0 .078 0 .114-.002l.063-.003c.02 0 .041-.003.062-.003.034-.002.065-.007.099-.01.007 0 .018-.003.028-.003l.031-.005.06-.008a1.18 1.18 0 0 0 .112-.02c.036-.008.072-.013.109-.024a2.634 2.634 0 0 0 .914-.415c.028-.02.056-.041.085-.065a.248.248 0 0 0 .039-.35.244.244 0 0 0-.309-.06l-.078.042c-.09.044-.184.083-.283.116a2.476 2.476 0 0 1-.475.096c-.028.003-.054.006-.083.006l-.083.002c-.026 0-.054 0-.08-.002l-.102-.006h-.012l-.024.006c-.016-.003-.031-.003-.044-.006-.031-.002-.06-.007-.091-.01a2.59 2.59 0 0 1-.724-.213 2.557 2.557 0 0 1-.667-.438 2.52 2.52 0 0 1-.805-1.475 2.306 2.306 0 0 1-.029-.444l.006-.122v-.023l.002-.031c.003-.021.003-.04.005-.06a3.163 3.163 0 0 1 1.352-2.29 3.12 3.12 0 0 1 .937-.43 2.946 2.946 0 0 1 .776-.101h.06l.07.002.045.003h.026l.07.005a4.041 4.041 0 0 1 1.635.49 3.94 3.94 0 0 1 1.602 1.662 3.77 3.77 0 0 1 .397 1.414l.005.076.003.075c.002.026.002.05.002.075 0 .024.003.052 0 .07v.065l-.002.073-.008.174a6.195 6.195 0 0 1-.08.639 5.1 5.1 0 0 1-.267.927 5.31 5.31 0 0 1-.624 1.13 5.052 5.052 0 0 1-3.237 2.014 4.82 4.82 0 0 1-.649.066l-.039.003h-.287a6.607 6.607 0 0 1-1.716-.265 6.776 6.776 0 0 1-3.4-2.274 6.75 6.75 0 0 1-.746-1.15 6.616 6.616 0 0 1-.714-2.596l-.005-.083-.002-.02v-.056l-.003-.073v-.096l-.003-.104v-.07l.003-.163c.008-.22.026-.45.054-.678a8.707 8.707 0 0 1 .28-1.355c.128-.444.286-.872.473-1.277a7.04 7.04 0 0 1 1.456-2.1 5.925 5.925 0 0 1 .953-.763c.169-.111.343-.213.524-.306.089-.05.182-.091.273-.135.047-.02.093-.042.138-.062a7.177 7.177 0 0 1 .714-.267l.145-.045c.049-.015.098-.026.148-.041.098-.029.197-.052.296-.076.049-.013.1-.02.15-.033l.15-.032.151-.028.076-.013.075-.01.153-.024c.057-.01.114-.013.171-.023l.169-.021c.036-.003.073-.008.106-.01l.073-.008.036-.003.042-.002c.057-.003.114-.008.171-.01l.086-.006h.023l.037-.003.145-.007a7.999 7.999 0 0 1 1.708.125 7.917 7.917 0 0 1 2.048.68 8.253 8.253 0 0 1 1.672 1.09l.09.077.089.078c.06.052.114.107.171.159.057.052.112.106.166.16.052.055.107.107.159.164a8.671 8.671 0 0 1 1.41 1.978c.012.026.028.052.04.078l.04.078.075.156c.023.051.05.1.07.153l.065.15a8.848 8.848 0 0 1 .45 1.34.19.19 0 0 0 .201.142.186.186 0 0 0 .172-.184c.01-.246.002-.532-.024-.856z",source:"https://grafana.com",hex:"F46800"},eE={title:"Jenkins",slug:"jenkins",get svg(){return ht+"Jenkins"+pt+this.path+mt},path:"M2.872 24h-.975a3.866 3.866 0 01-.07-.197c-.215-.666-.594-1.49-.692-2.154-.146-.984.78-1.039 1.374-1.465.915-.66 1.635-1.025 2.627-1.62.295-.179 1.182-.624 1.281-.829.201-.408-.345-.982-.49-1.3-.225-.507-.345-.937-.376-1.435-.824-.13-1.455-.627-1.844-1.185-.63-.925-1.066-2.635-.525-3.936.045-.103.254-.305.285-.463.06-.308-.105-.72-.12-1.048-.06-1.692.284-3.15 1.425-3.66.463-1.84 2.113-2.453 3.673-3.367.58-.342 1.224-.562 1.89-.807 2.372-.877 6.027-.712 7.994.783.836.633 2.176 1.97 2.656 2.939 1.262 2.555 1.17 6.825.287 9.934-.12.421-.29 1.032-.533 1.533-.168.35-.689 1.05-.625 1.36.064.314 1.19 1.17 1.432 1.395.434.422 1.26.975 1.324 1.5.07.557-.248 1.336-.41 1.875-.217.721-.436 1.441-.654 2.131H2.87zm11.104-3.54c-.545-.3-1.361-.622-2.065-.757-.87-.164-.78 1.188-.75 1.994.03.643.36 1.316.51 1.744.076.197.09.41.256.449.3.068 1.29-.326 1.575-.479.6-.328 1.064-.844 1.574-1.189.016-.17.016-.34.03-.508a2.648 2.648 0 00-1.095-.277c.314-.15.75-.15 1.035-.332l.016-.193c-.496-.03-.69-.254-1.021-.436zm7.454 2.935a17.78 17.78 0 00.465-1.752c.06-.287.215-.918.178-1.176-.059-.459-.684-.799-1.004-1.086-.584-.525-.95-.975-1.56-1.469-.249.375-.78.615-.983.914 1.447-.689 1.71 2.625 1.141 3.69.09.329.391.45.514.735l-.086.166h1.29c.013 0 .03 0 .044.014zm-6.634-.012c-.05-.074-.1-.135-.15-.209l-.301.195h.45zm2.77 0c.008-.209.018-.404.03-.598-.53.029-.825-.48-1.196-.527-.324-.045-.6.361-1.02.195-.095.105-.183.227-.284.316.154.18.295.375.424.584h.815c.014-.164.135-.285.3-.285.165 0 .284.121.284.27h.66zm2.116 0c-.314-.479-.947-.898-1.68-.555l-.03.541h1.71zm-8.51 0l-.104-.344c-.225-.72-.36-1.26-.405-1.68-.914-.436-1.875-.87-2.654-1.426-.15-.105-1.109-1.35-1.23-1.305-1.739.676-3.359 1.86-4.814 2.984.256.557.48 1.141.69 1.74h8.505zm8.265-2.113c-.029-.512-.164-1.56-.48-1.74-.66-.39-1.846.78-2.34.943.045.15.135.271.15.48.285-.074.645-.029.898.092-.299.03-.629.03-.824.164-.074.195.016.48-.029.764.69.197 1.5.303 2.385.332.164-.227.225-.645.211-1.082zm-4.08-.36c-.044.375.046.51.12.943 1.26.391 1.034-1.74-.135-.959zM8.76 19.5c-.45.457 1.27 1.082 1.814 1.115 0-.29.165-.564.135-.77-.65-.118-1.502-.042-1.945-.347zm5.565.215c0 .043-.061.03-.068.064.58.451 1.014.545 1.802.51.354-.262.67-.563 1.043-.807-.855.074-1.931.607-2.774.23zm3.42-17.726c-1.606-.906-4.35-1.591-6.076-.731-1.38.692-3.27 1.84-3.899 3.292.6 1.402-.166 2.686-.226 4.109-.018.757.36 1.42.391 2.242-.2.338-.825.38-1.26.356-.146-.729-.4-1.549-1.155-1.63-1.064-.116-1.845.764-1.89 1.683-.06 1.08.833 2.864 2.085 2.745.488-.046.608-.54 1.139-.54.285.57-.445.75-.523 1.154-.016.105.06.511.104.705.233.944.744 2.16 1.245 2.88.635.9 1.884 1.051 3.229 1.141.24-.525 1.125-.48 1.706-.346-.691-.27-1.336-.945-1.875-1.529-.615-.676-1.23-1.41-1.261-2.28 1.155 1.604 2.1 3 4.2 3.704 1.59.525 3.45-.254 4.664-1.109.51-.359.811-.93 1.17-1.439 1.35-1.936 1.98-4.71 1.846-7.394-.06-1.111-.06-2.221-.436-2.955-.389-.781-1.695-1.471-2.475-.781-.15-.764.63-1.23 1.545-.96-.66-.854-1.336-1.858-2.266-2.384zM13.58 14.896c.615 1.544 2.724 1.363 4.505 1.323-.084.194-.256.435-.465.515-.57.232-2.145.408-2.937-.012-.506-.27-.824-.873-1.102-1.227-.137-.172-.795-.608-.012-.609zm.164-.87c.893.464 2.52.517 3.731.48.066.267.066.593.068.913-1.55.08-3.386-.304-3.794-1.395h-.005zm6.675-.586c-.473.9-1.145 1.897-2.539 1.928-.023-.284-.045-.735 0-.904 1.064-.103 1.727-.646 2.543-1.017zm-.649-.667c-1.02.66-2.154 1.375-3.824 1.21-.351-.31-.485-1-.14-1.458.181.313.06.885.57.97.944.165 2.038-.579 2.73-.84.42-.713-.046-.976-.42-1.433-.782-.93-1.83-2.1-1.802-3.51.314-.224.346.346.391.45.404.96 1.424 2.175 2.174 3 .18.21.48.39.51.524.092.39-.254.854-.209 1.11zm-13.439-.675c-.314-.184-.393-.99-.768-1.01-.535-.03-.438 1.05-.436 1.68-.37-.33-.435-1.365-.164-1.89-.308-.15-.445.164-.618.284.22-1.59 2.34-.734 1.99.96zM4.713 5.995c-.685.756-.54 2.174-.459 3.188 1.244-.785 2.898.06 2.883 1.394.595-.016.223-.744.115-1.215-.353-1.528.592-3.187.041-4.59-1.064.084-1.939.52-2.578 1.215zm9.12 1.113c.307.562.404 1.148.84 1.57.195.19.574.424.387.95-.045.121-.365.391-.551.45-.674.195-2.254.03-1.721-.81.563.015 1.314.36 1.732-.045-.314-.524-.885-1.53-.674-2.13zm6.198-.013h.068c.33.668.6 1.375 1.004 1.965-.27.628-2.053 1.19-2.023.057.39-.17 1.05-.035 1.395-.25-.193-.556-.48-1.006-.434-1.771zm-6.927-1.617c-1.422-.33-2.131.592-2.56 1.553-.384-.094-.231-.615-.135-.883.255-.701 1.28-1.633 2.119-1.506.359.057.848.386.576.834zM9.642 1.593c-1.56.44-3.56 1.574-4.2 2.974.495-.07.84-.321 1.33-.351.186-.016.428.074.641.015.424-.104.78-1.065 1.102-1.41.31-.345.685-.496.94-.81.167-.09.409-.074.42-.33-.073-.075-.15-.135-.232-.105v.017z",source:"https://get.jenkins.io/art/",hex:"D24939",guidelines:"https://www.jenkins.io/press/",license:{type:"CC-BY-SA-3.0",url:"https://spdx.org/licenses/CC-BY-SA-3.0"}},tE={title:"Kubernetes",slug:"kubernetes",get svg(){return ht+"Kubernetes"+pt+this.path+mt},path:"M10.204 14.35l.007.01-.999 2.413a5.171 5.171 0 0 1-2.075-2.597l2.578-.437.004.005a.44.44 0 0 1 .484.606zm-.833-2.129a.44.44 0 0 0 .173-.756l.002-.011L7.585 9.7a5.143 5.143 0 0 0-.73 3.255l2.514-.725.002-.009zm1.145-1.98a.44.44 0 0 0 .699-.337l.01-.005.15-2.62a5.144 5.144 0 0 0-3.01 1.442l2.147 1.523.004-.002zm.76 2.75l.723.349.722-.347.18-.78-.5-.623h-.804l-.5.623.179.779zm1.5-3.095a.44.44 0 0 0 .7.336l.008.003 2.134-1.513a5.188 5.188 0 0 0-2.992-1.442l.148 2.615.002.001zm10.876 5.97l-5.773 7.181a1.6 1.6 0 0 1-1.248.594l-9.261.003a1.6 1.6 0 0 1-1.247-.596l-5.776-7.18a1.583 1.583 0 0 1-.307-1.34L2.1 5.573c.108-.47.425-.864.863-1.073L11.305.513a1.606 1.606 0 0 1 1.385 0l8.345 3.985c.438.209.755.604.863 1.073l2.062 8.955c.108.47-.005.963-.308 1.34zm-3.289-2.057c-.042-.01-.103-.026-.145-.034-.174-.033-.315-.025-.479-.038-.35-.037-.638-.067-.895-.148-.105-.04-.18-.165-.216-.216l-.201-.059a6.45 6.45 0 0 0-.105-2.332 6.465 6.465 0 0 0-.936-2.163c.052-.047.15-.133.177-.159.008-.09.001-.183.094-.282.197-.185.444-.338.743-.522.142-.084.273-.137.415-.242.032-.024.076-.062.11-.089.24-.191.295-.52.123-.736-.172-.216-.506-.236-.745-.045-.034.027-.08.062-.111.088-.134.116-.217.23-.33.35-.246.25-.45.458-.673.609-.097.056-.239.037-.303.033l-.19.135a6.545 6.545 0 0 0-4.146-2.003l-.012-.223c-.065-.062-.143-.115-.163-.25-.022-.268.015-.557.057-.905.023-.163.061-.298.068-.475.001-.04-.001-.099-.001-.142 0-.306-.224-.555-.5-.555-.275 0-.499.249-.499.555l.001.014c0 .041-.002.092 0 .128.006.177.044.312.067.475.042.348.078.637.056.906a.545.545 0 0 1-.162.258l-.012.211a6.424 6.424 0 0 0-4.166 2.003 8.373 8.373 0 0 1-.18-.128c-.09.012-.18.04-.297-.029-.223-.15-.427-.358-.673-.608-.113-.12-.195-.234-.329-.349-.03-.026-.077-.062-.111-.088a.594.594 0 0 0-.348-.132.481.481 0 0 0-.398.176c-.172.216-.117.546.123.737l.007.005.104.083c.142.105.272.159.414.242.299.185.546.338.743.522.076.082.09.226.1.288l.16.143a6.462 6.462 0 0 0-1.02 4.506l-.208.06c-.055.072-.133.184-.215.217-.257.081-.546.11-.895.147-.164.014-.305.006-.48.039-.037.007-.09.02-.133.03l-.004.002-.007.002c-.295.071-.484.342-.423.608.061.267.349.429.645.365l.007-.001.01-.003.129-.029c.17-.046.294-.113.448-.172.33-.118.604-.217.87-.256.112-.009.23.069.288.101l.217-.037a6.5 6.5 0 0 0 2.88 3.596l-.09.218c.033.084.069.199.044.282-.097.252-.263.517-.452.813-.091.136-.185.242-.268.399-.02.037-.045.095-.064.134-.128.275-.034.591.213.71.248.12.556-.007.69-.282v-.002c.02-.039.046-.09.062-.127.07-.162.094-.301.144-.458.132-.332.205-.68.387-.897.05-.06.13-.082.215-.105l.113-.205a6.453 6.453 0 0 0 4.609.012l.106.192c.086.028.18.042.256.155.136.232.229.507.342.84.05.156.074.295.145.457.016.037.043.09.062.129.133.276.442.402.69.282.247-.118.341-.435.213-.71-.02-.039-.045-.096-.065-.134-.083-.156-.177-.261-.268-.398-.19-.296-.346-.541-.443-.793-.04-.13.007-.21.038-.294-.018-.022-.059-.144-.083-.202a6.499 6.499 0 0 0 2.88-3.622c.064.01.176.03.213.038.075-.05.144-.114.28-.104.266.039.54.138.87.256.154.06.277.128.448.173.036.01.088.019.13.028l.009.003.007.001c.297.064.584-.098.645-.365.06-.266-.128-.537-.423-.608zM16.4 9.701l-1.95 1.746v.005a.44.44 0 0 0 .173.757l.003.01 2.526.728a5.199 5.199 0 0 0-.108-1.674A5.208 5.208 0 0 0 16.4 9.7zm-4.013 5.325a.437.437 0 0 0-.404-.232.44.44 0 0 0-.372.233h-.002l-1.268 2.292a5.164 5.164 0 0 0 3.326.003l-1.27-2.296h-.01zm1.888-1.293a.44.44 0 0 0-.27.036.44.44 0 0 0-.214.572l-.003.004 1.01 2.438a5.15 5.15 0 0 0 2.081-2.615l-2.6-.44-.004.005z",source:"https://github.com/kubernetes/kubernetes/tree/cac53883f4714452f3084a22e4be20d042a9df33/logo",hex:"326CE5"},nE={title:"Linux",slug:"linux",get svg(){return ht+"Linux"+pt+this.path+mt},path:"M12.504 0c-.155 0-.315.008-.48.021-4.226.333-3.105 4.807-3.17 6.298-.076 1.092-.3 1.953-1.05 3.02-.885 1.051-2.127 2.75-2.716 4.521-.278.832-.41 1.684-.287 2.489a.424.424 0 00-.11.135c-.26.268-.45.6-.663.839-.199.199-.485.267-.797.4-.313.136-.658.269-.864.68-.09.189-.136.394-.132.602 0 .199.027.4.055.536.058.399.116.728.04.97-.249.68-.28 1.145-.106 1.484.174.334.535.47.94.601.81.2 1.91.135 2.774.6.926.466 1.866.67 2.616.47.526-.116.97-.464 1.208-.946.587-.003 1.23-.269 2.26-.334.699-.058 1.574.267 2.577.2.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071.771-.06 1.592-.536 2.257-1.306.631-.765 1.683-1.084 2.378-1.503.348-.199.629-.469.649-.853.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.357.357 0 00-.19-.064c.431-1.278.264-2.55-.173-3.694-.533-1.41-1.465-2.638-2.175-3.483-.796-1.005-1.576-1.957-1.56-3.368.026-2.152.236-6.133-3.544-6.139zm.529 3.405h.013c.213 0 .396.062.584.198.19.135.33.332.438.533.105.259.158.459.166.724 0-.02.006-.04.006-.06v.105a.086.086 0 01-.004-.021l-.004-.024a1.807 1.807 0 01-.15.706.953.953 0 01-.213.335.71.71 0 00-.088-.042c-.104-.045-.198-.064-.284-.133a1.312 1.312 0 00-.22-.066c.05-.06.146-.133.183-.198.053-.128.082-.264.088-.402v-.02a1.21 1.21 0 00-.061-.4c-.045-.134-.101-.2-.183-.333-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 00-.205.334 1.18 1.18 0 00-.09.4v.019c.002.089.008.179.02.267-.193-.067-.438-.135-.607-.202a1.635 1.635 0 01-.018-.2v-.02a1.772 1.772 0 01.15-.768c.082-.22.232-.406.43-.533a.985.985 0 01.594-.2zm-2.962.059h.036c.142 0 .27.048.399.135.146.129.264.288.344.465.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024-.152.055-.274.135-.393.2.012-.09.013-.18.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.613.613 0 00-.166-.267.248.248 0 00-.183-.064h-.021c-.071.006-.13.04-.186.132a.552.552 0 00-.12.27.944.944 0 00-.023.33v.015c.012.135.037.2.08.334.046.134.098.2.166.268.01.009.02.018.034.024-.07.057-.117.07-.176.136a.304.304 0 01-.131.068 2.62 2.62 0 01-.275-.402 1.772 1.772 0 01-.155-.667 1.759 1.759 0 01.08-.668 1.43 1.43 0 01.283-.535c.128-.133.26-.2.418-.2zm1.37 1.706c.332 0 .733.065 1.216.399.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.571.571 0 01.016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465-.276.135-.588.292-1.012.267a1.139 1.139 0 01-.448-.067 3.566 3.566 0 01-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71-.07-.268-.005-.47.193-.6.224-.135.38-.271.483-.336.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473.286.534.855 1.659 1.102 3.024.156-.005.33.018.513.064.646-1.671-.546-3.467-1.089-3.966-.22-.2-.232-.335-.123-.335.59.534 1.365 1.572 1.646 2.757.13.535.16 1.104.021 1.67.067.028.135.06.205.067 1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224-.915-.4-1.646-.336-1.77.465-.008.043-.013.066-.018.135-.068.023-.139.053-.209.064-.43.268-.662.669-.793 1.187-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35-1.5 1.072-3.58 1.538-5.348.334a2.645 2.645 0 00-.402-.533 1.45 1.45 0 00-.275-.333c.182 0 .338-.03.465-.067a.615.615 0 00.314-.334c.108-.267 0-.697-.345-1.163-.345-.467-.931-.995-1.788-1.521-.63-.4-.986-.87-1.15-1.396-.165-.534-.143-1.085-.015-1.645.245-1.07.873-2.11 1.274-2.763.107-.065.037.135-.408.974-.396.751-1.14 2.497-.122 3.854a8.123 8.123 0 01.647-2.876c.564-1.278 1.743-3.504 1.836-5.268.048.036.217.135.289.202.218.133.38.333.59.465.21.201.477.335.876.335.039.003.075.006.11.006.412 0 .73-.134.997-.268.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876.085.4.154.78.409 1.066.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595-.63.401-1.746.712-2.457 1.57-.618.737-1.37 1.14-2.036 1.191-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69.176-.668.428-1.344.463-1.897.037-.714.076-1.335.195-1.814.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01c.053 0 .105.005.157.014.376.055.706.333 1.023.752l.91 1.664.003.003c.243.533.754 1.064 1.189 1.637.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294-.645.135-1.52.002-2.395-.464-.968-.536-2.118-.469-2.857-.602-.369-.066-.61-.2-.723-.4-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118-.055-.401-.083-.71.043-.94.16-.334.396-.4.69-.533.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838.19-.201.38-.336.663-.336zm7.159-9.074c-.435.201-.945.535-1.488.535-.542 0-.97-.267-1.28-.466-.154-.134-.28-.268-.373-.335-.164-.134-.144-.333-.074-.333.109.016.129.134.199.2.096.066.215.2.36.333.292.2.68.467 1.167.467.485 0 1.053-.267 1.398-.466.195-.135.445-.334.648-.467.156-.136.149-.267.279-.267.128.016.034.134-.147.332a8.097 8.097 0 01-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05.074-.043.18-.027.26.004.063 0 .16.067.15.135-.006.049-.085.066-.135.066-.055 0-.092-.043-.141-.068-.052-.018-.146-.008-.163-.065zm-.551 0c-.02.058-.113.049-.166.066-.047.025-.086.068-.14.068-.05 0-.13-.02-.136-.068-.01-.066.088-.133.15-.133.08-.031.184-.047.259-.005.019.009.036.03.03.05v.02h.003z",source:"https://www.linuxfoundation.org/the-linux-mark/",hex:"FCC624"},iE={path:"M4.21 0A4.201 4.201 0 0 0 0 4.21v15.58A4.201 4.201 0 0 0 4.21 24h15.58A4.201 4.201 0 0 0 24 19.79v-1.093c-.137.013-.278.02-.422.02-2.577 0-4.027-2.146-4.09-4.832a7.592 7.592 0 0 1 .022-.708c.093-1.186.475-2.241 1.105-3.022a3.885 3.885 0 0 1 1.395-1.1c.468-.237 1.127-.367 1.664-.367h.023c.101 0 .202.004.303.01V4.211A4.201 4.201 0 0 0 19.79 0Zm.198 5.583h4.165l3.588 8.435 3.59-8.435h3.864v.146l-.019.004c-.705.16-1.063.397-1.063 1.254h-.003l.003 10.274c.06.676.424.885 1.063 1.03l.02.004v.145h-4.923v-.145l.019-.005c.639-.144.994-.353 1.054-1.03V7.267l-4.745 11.15h-.261L6.15 7.569v9.445c0 .857.358 1.094 1.063 1.253l.02.004v.147H4.405v-.147l.019-.004c.705-.16 1.065-.397 1.065-1.253V6.987c0-.857-.358-1.094-1.064-1.254l-.018-.004zm19.25 3.668c-1.086.023-1.733 1.323-1.813 3.124H24V9.298a1.378 1.378 0 0 0-.342-.047Zm-1.862 3.632c-.1 1.756.86 3.239 2.204 3.634v-3.634z"},rE={title:"NGINX",slug:"nginx",get svg(){return ht+"NGINX"+pt+this.path+mt},path:"M12 0L1.605 6v12L12 24l10.395-6V6L12 0zm6 16.59c0 .705-.646 1.29-1.529 1.29-.631 0-1.351-.255-1.801-.81l-6-7.141v6.66c0 .721-.57 1.29-1.274 1.29H7.32c-.721 0-1.29-.6-1.29-1.29V7.41c0-.705.63-1.29 1.5-1.29.646 0 1.38.255 1.83.81l5.97 7.141V7.41c0-.721.6-1.29 1.29-1.29h.075c.72 0 1.29.6 1.29 1.29v9.18H18z",source:"https://www.nginx.com/press/",hex:"009639",guidelines:"https://www.nginx.com/press/"},sE={title:"OpenStack",slug:"openstack",get svg(){return ht+"OpenStack"+pt+this.path+mt},path:"M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258Z",source:"https://www.openstack.org/brand/openstack-logo/",hex:"ED1944",guidelines:"https://www.openstack.org/brand/openstack-logo/"},aE={title:"Podman",slug:"podman",get svg(){return ht+"Podman"+pt+this.path+mt},path:"M17.2.275L6.75.308a.259.259 0 0 0-.203.098L.056 8.602a.259.259 0 0 0-.05.219l2.356 10.194a.26.26 0 0 0 .14.174l9.43 4.511a.258.258 0 0 0 .224-.002l9.401-4.566a.259.259 0 0 0 .141-.175L23.993 8.75a.258.258 0 0 0-.051-.22L17.403.374A.259.259 0 0 0 17.2.275zm-.123.517l6.385 7.966-2.242 9.964-9.177 4.457-9.205-4.402L.54 8.827 6.875.824zM11.46 2.857c-.933 0-1.84.1-2.426.332h-.002c-1.554.569-2.725 2.105-3.074 3.952v.004c-.309 1.463-.392 2.703-.556 3.824-.07.481-.159.94-.283 1.387-.628.497-1.079 1.263-1.244 2.138v.004c-.116.547-.181 1.04-.237 1.5h-.644v.518h8.891c-.061.464-.122.996-.181 1.42H7.596v.517h7.939c-.242-.078-.486-.218-.756-.502h-.697l-.85.488-.232-.396.162-.092h-1.069c.113-.776.17-1.601.373-2.564v-.004c.22-1.164.96-2.112 1.895-2.453l.004-.002h.002c.318-.127.928-.205 1.543-.205.613 0 1.244.075 1.622.207.935.341 1.676 1.29 1.895 2.453v.004c.204.963.26 1.788.373 2.564h-.742l.162.092-.233.396-.85-.488h-.75c-.219.25-.474.412-.747.502h4.392v-.518h-.842c-.103-.743-.181-1.67-.382-2.623v-.002a4.14 4.14 0 0 0-.264-.863h1.863v-.517h-2.13a3.488 3.488 0 0 0-.8-.906h1.8v-.518H17.95a8.862 8.862 0 0 1-.193-.775h1.484v-.518h-1.576c-.013-.081-.027-.161-.039-.244-.164-1.12-.246-2.36-.555-3.824v-.004c-.348-1.848-1.52-3.383-3.075-3.952l-.002-.002h-.002c-.65-.227-1.596-.33-2.531-.33zm0 .386c.904 0 1.833.11 2.404.309h.002c1.4.514 2.5 1.934 2.826 3.666v.003c.303 1.436.385 2.66.552 3.805.076.515.173 1.013.315 1.505-.449-.135-1.05-.197-1.648-.197-.12 0-.236.003-.352.008l-1.863-1.865a2.17 2.17 0 0 0 .11-.246l2.13 1.23.13-.224-2.185-1.262c.016-.069.027-.14.036-.21l2.302.616.068-.248-2.354-.63c-.02-1.153-1.008-2.078-2.208-2.078-1.205 0-2.196.931-2.206 2.091l-2.303.617.066.25 2.252-.605c.01.076.024.151.041.224L7.436 11.24l.129.222 2.087-1.207c.034.089.074.176.12.258l-1.266 1.266a6.959 6.959 0 0 0-1.045-.075c-.603 0-1.186.064-1.578.22a2.668 2.668 0 0 0-.285.124c.076-.335.137-.675.187-1.021.168-1.144.248-2.37.551-3.805l.002-.001v-.002c.326-1.733 1.426-3.153 2.828-3.666h.002l.004-.002c.488-.194 1.381-.307 2.287-.307zM8.473 5.194a1.295 1.295 0 0 0-.965.502l-.117.153.306.236.12-.152a.923.923 0 0 1 .673-.352.92.92 0 0 1 .67.262l.139.134.271-.275-.136-.137a1.293 1.293 0 0 0-.961-.37zm6.39 0a1.289 1.289 0 0 0-.96.371l-.138.137.274.275.136-.134a.923.923 0 0 1 .672-.262.923.923 0 0 1 .674.352l.119.152.307-.236-.12-.153c-.23-.3-.587-.486-.964-.502zM8.53 6.708c-.642 0-1.164.538-1.164 1.19 0 .65.522 1.187 1.164 1.187.643 0 1.164-.536 1.164-1.188 0-.651-.521-1.19-1.164-1.19zm6.273 0c-.643 0-1.162.538-1.162 1.19 0 .65.52 1.187 1.162 1.187.643 0 1.164-.536 1.164-1.188 0-.651-.521-1.19-1.164-1.19zm-6.273.387c.428 0 .776.355.776.802 0 .447-.348.8-.776.8a.785.785 0 0 1-.775-.8c0-.035.002-.07.006-.103.07.191.248.318.445.318a.487.487 0 0 0 .477-.496.49.49 0 0 0-.383-.486.759.759 0 0 1 .23-.035zm6.273 0c.428 0 .777.355.777.802 0 .447-.349.8-.777.8a.785.785 0 0 1-.77-.9c.072.19.248.315.444.315a.486.486 0 0 0 .479-.496.491.491 0 0 0-.383-.484.755.755 0 0 1 .23-.037zm-3.08.716c1.012 0 1.819.775 1.819 1.723 0 .947-.807 1.722-1.819 1.722s-1.82-.775-1.82-1.722c0-.948.808-1.723 1.82-1.723zm-.002.528c-.142 0-.258.043-.355.076a.804.804 0 0 1-.232.054c-.107 0-.2.047-.268.127a.568.568 0 0 0-.104.207c-.04.134-.062.268-.08.315a.276.276 0 0 0 .032.25c.033.056.071.1.117.146.09.092.206.183.322.268.12.088.237.166.326.224l-.008.09c-.043.036-.14.102-.324.178a.533.533 0 0 1-.299.025.43.43 0 0 1-.236-.172c.015-.138.044-.293.068-.449l-.376-.095c-.05.238-.067.43-.094.64l.037.059c.143.224.318.344.506.392a.908.908 0 0 0 .52-.033 1.57 1.57 0 0 0 .444-.242c.088.067.244.174.446.242a.908.908 0 0 0 .52.033.868.868 0 0 0 .507-.392l.037-.059a6.292 6.292 0 0 0-.096-.637l-.377.092c.032.148.051.32.07.451a.434.434 0 0 1-.237.17.533.533 0 0 1-.3-.025c-.178-.068-.272-.14-.325-.178l-.006-.084c.09-.058.209-.137.336-.23.115-.085.231-.176.322-.268a.72.72 0 0 0 .117-.146.273.273 0 0 0 .031-.25c-.018-.047-.039-.181-.08-.315a.564.564 0 0 0-.103-.207.343.343 0 0 0-.268-.127.815.815 0 0 1-.234-.054c-.097-.033-.212-.076-.354-.076zm.002.386c.057 0 .134.024.23.057.09.03.208.07.337.076.04.102.06.237.09.338a.361.361 0 0 1-.041.045 2.66 2.66 0 0 1-.276.228c-.165.122-.271.188-.342.233a5.287 5.287 0 0 1-.34-.233 2.557 2.557 0 0 1-.275-.228.34.34 0 0 1-.04-.047c.035-.119.046-.234.089-.34.08.012.246-.042.336-.072a.837.837 0 0 1 .232-.057zm-3.234.61a.635.635 0 0 0-.611.517l1.084-.289a.614.614 0 0 0-.473-.228zm6.336 0a.61.61 0 0 0-.436.187c.352.096.69.184 1.033.275a.632.632 0 0 0-.597-.462zm-.623.607c-.007.035-.002.07-.002.103l.921.532a.648.648 0 0 0 .276-.313l-1.195-.322zm-5.086.05l-1.18.315c.078.15.207.264.362.316l.797-.46c.018-.059.015-.12.021-.17zm4.441.714l1.656 1.658a4.19 4.19 0 0 0-.826.146l-.95-1.647a2.51 2.51 0 0 0 .12-.157zm-3.646.03c.04.055.083.118.129.169l-.658 1.134a2.656 2.656 0 0 0-.276-.119l-.002-.002a3.3 3.3 0 0 0-.292-.082zm3.338.317l.892 1.547c-.623.251-1.149.725-1.523 1.33h-1.652c-.262-.75-.741-1.38-1.358-1.764l.623-1.082c.394.347.919.559 1.492.559a2.25 2.25 0 0 0 1.526-.59zM7.46 12.09c.574 0 1.167.073 1.518.195.867.319 1.555 1.203 1.76 2.285l.001.002v.002c.109.513.173.98.227 1.424H9.86a.386.386 0 0 0-.494 0H9.11a1.351 1.351 0 0 0-.078-.418.799.799 0 0 0 .569.238c.45 0 .814-.375.814-.828a.824.824 0 0 0-.814-.828.822.822 0 0 0-.791 1.016 1.495 1.495 0 0 0-1.18-.559c-.798 0-1.46.611-1.48 1.38h-.342a.386.386 0 0 0-.494 0H4.028c.054-.445.116-.912.224-1.425l.002-.002v-.002c.205-1.084.894-1.97 1.764-2.287h.002l.004-.002c.295-.117.863-.191 1.437-.19zm-1.91 1.105a.898.898 0 0 0-.67.348l-.119.154.307.237.119-.155a.525.525 0 0 1 .379-.197.52.52 0 0 1 .377.147l.138.136.272-.275-.137-.137a.895.895 0 0 0-.666-.258zm4.094 0a.9.9 0 0 0-.668.258l-.137.137.273.275.137-.136a.522.522 0 0 1 .377-.147.525.525 0 0 1 .379.197l.119.155.307-.237-.12-.154a.894.894 0 0 0-.667-.348zm4.222.735a.947.947 0 0 0-.707.365l-.117.154.306.237.12-.155a.568.568 0 0 1 .413-.213.571.571 0 0 1 .414.159l.14.136.27-.275-.138-.137a.942.942 0 0 0-.701-.271zm4.374 0a.942.942 0 0 0-.7.271l-.14.137.272.275.139-.136a.571.571 0 0 1 .414-.159.568.568 0 0 1 .414.213l.119.155.306-.237-.117-.154a.947.947 0 0 0-.707-.365zm-12.65.232a.824.824 0 0 0-.815.828c0 .453.365.828.814.828.45 0 .815-.375.815-.828a.824.824 0 0 0-.815-.828zm5.518.285h1.242a4.137 4.137 0 0 0-.263.864v.002c-.05.237-.092.464-.127.685h-.602a16.77 16.77 0 0 0-.236-1.5l-.002-.002c-.003-.016-.009-.032-.012-.049zm-5.519.102a.43.43 0 0 1 .426.441.43.43 0 0 1-.426.442c-.22 0-.4-.171-.422-.397a.298.298 0 0 0 .215.092.31.31 0 0 0 .305-.316.317.317 0 0 0-.129-.258c.01-.001.02-.004.031-.004zm4.014 0c.235 0 .427.193.427.441a.433.433 0 0 1-.427.442.427.427 0 0 1-.422-.405.3.3 0 0 0 .256.145.31.31 0 0 0 .304-.317.314.314 0 0 0-.207-.298c.023-.004.045-.008.069-.008zm4.304.414a.865.865 0 0 0-.856.87c0 .478.382.874.856.874a.868.868 0 0 0 .857-.873.867.867 0 0 0-.857-.871zm4.292 0a.867.867 0 0 0-.814 1.14 1.597 1.597 0 0 0-1.295-.652c-.846 0-1.546.65-1.568 1.463l-1.525.408.066.248 1.477-.394c.004.028.009.06.015.087l-1.418.817.131.222 1.367-.789c.235.552.801.94 1.455.94.66 0 1.233-.397 1.463-.957l1.398.806.13-.222-1.45-.836c.005-.025.008-.053.012-.078l1.511.404.067-.248-1.563-.418a1.438 1.438 0 0 0-.107-.5c.157.186.39.303.648.303a.867.867 0 0 0 .856-.873.865.865 0 0 0-.856-.871zm-10.567.043c.598 0 1.071.444 1.092.992h-.41c.007-.01.016-.02.023-.033a.24.24 0 0 0 .025-.22c-.005-.016-.021-.102-.05-.196a.416.416 0 0 0-.078-.156.282.282 0 0 0-.225-.108.499.499 0 0 1-.129-.031c-.062-.021-.142-.05-.248-.05-.106 0-.188.029-.25.05a.49.49 0 0 1-.127.031.29.29 0 0 0-.225.108.424.424 0 0 0-.08.156c-.029.094-.043.18-.048.195a.242.242 0 0 0 .023.22c.008.014.017.023.025.034h-.41c.02-.548.494-.992 1.092-.992zm6.275.344c.259 0 .47.211.47.484a.477.477 0 0 1-.47.486.472.472 0 0 1-.467-.453.322.322 0 0 0 .246.115c.18 0 .326-.15.326-.338a.34.34 0 0 0-.156-.289c.017-.002.033-.005.05-.005zm4.292 0c.26 0 .469.211.469.484 0 .272-.21.486-.469.486a.477.477 0 0 1-.47-.486c0-.016.002-.031.004-.047a.33.33 0 0 0 .312.24c.18 0 .326-.15.326-.338a.338.338 0 0 0-.256-.332.475.475 0 0 1 .084-.007zm-10.567.24c.021 0 .063.01.125.031.086.03.117.039.186.049.012.041.022.088.033.129a1.475 1.475 0 0 1-.168.138c-.038.028-.064.045-.088.061h-.176c-.024-.016-.052-.033-.09-.06a1.602 1.602 0 0 1-.168-.14l.034-.128c.107-.014.146-.04.185-.049a.504.504 0 0 1 .127-.031zm8.458.25c.661 0 1.184.502 1.184 1.113 0 .156-.035.304-.096.44l-.002-.024-.022-.156a2.443 2.443 0 0 0-.04-.24l-.377.093.044.274a.24.24 0 0 1-.115.074.299.299 0 0 1-.168-.014c-.087-.03-.132-.063-.18-.094.057-.037.13-.084.198-.134.08-.06.16-.123.226-.19a.542.542 0 0 0 .092-.111.245.245 0 0 0 .026-.225c-.008-.019-.022-.112-.053-.21a.444.444 0 0 0-.084-.163.286.286 0 0 0-.23-.107.566.566 0 0 1-.14-.037c-.065-.022-.152-.055-.263-.055-.11 0-.195.032-.262.055a.575.575 0 0 1-.14.037.294.294 0 0 0-.23.107.436.436 0 0 0-.083.162c-.03.1-.045.192-.052.211a.246.246 0 0 0 .025.225.534.534 0 0 0 .09.111c.066.067.146.13.226.19.068.05.138.095.194.132a.57.57 0 0 1-.18.096.305.305 0 0 1-.17.014.237.237 0 0 1-.111-.076c.008-.09.026-.177.04-.272l-.376-.094c-.032.146-.045.286-.063.409a1.052 1.052 0 0 1-.09-.428c0-.611.521-1.113 1.182-1.113zm0 .623c.026 0 .074.01.14.033.066.025.169.052.206.055l.035.156c-.04.04-.112.1-.184.152-.095.07-.14.095-.197.131-.056-.036-.1-.061-.195-.13a1.236 1.236 0 0 1-.184-.157l.035-.152a1.04 1.04 0 0 0 .206-.055.523.523 0 0 1 .138-.033zm-2.22.353a.43.43 0 0 0-.385.272l.656-.176a.416.416 0 0 0-.271-.096zm4.333 0a.414.414 0 0 0-.22.07l.603.16a.426.426 0 0 0-.383-.23zm-4.054.567l-.607.162a.436.436 0 0 0 .125.113zm3.925.002l.407.234a.443.443 0 0 0 .087-.102zm-1.986.234c.067.047.165.108.285.148a.68.68 0 0 0 .389.024.57.57 0 0 0 .232-.121 1.201 1.201 0 0 1-.904.394c-.356 0-.67-.145-.885-.375a.58.58 0 0 0 .207.102c.144.036.28.014.391-.024.12-.04.218-.1.285-.148zm-9.524 1.61v.517h6.214v-.518zm3.619 1.292v.517H15.3v-.517z",source:"https://podman.io",hex:"892CA0"},oE={title:"Prometheus",slug:"prometheus",get svg(){return ht+"Prometheus"+pt+this.path+mt},path:"M12 0C5.373 0 0 5.372 0 12c0 6.627 5.373 12 12 12s12-5.373 12-12c0-6.628-5.373-12-12-12zm0 22.46c-1.885 0-3.414-1.26-3.414-2.814h6.828c0 1.553-1.528 2.813-3.414 2.813zm5.64-3.745H6.36v-2.046h11.28v2.046zm-.04-3.098H6.391c-.037-.043-.075-.086-.111-.13-1.155-1.401-1.427-2.133-1.69-2.879-.005-.025 1.4.287 2.395.511 0 0 .513.119 1.262.255-.72-.843-1.147-1.915-1.147-3.01 0-2.406 1.845-4.508 1.18-6.207.648.053 1.34 1.367 1.387 3.422.689-.951.977-2.69.977-3.755 0-1.103.727-2.385 1.454-2.429-.648 1.069.168 1.984.894 4.256.272.854.237 2.29.447 3.201.07-1.892.395-4.652 1.595-5.605-.529 1.2.079 2.702.494 3.424.671 1.164 1.078 2.047 1.078 3.716a4.642 4.642 0 01-1.11 2.996c.792-.149 1.34-.283 1.34-.283l2.573-.502s-.374 1.538-1.81 3.019z",source:"https://prometheus.io",hex:"E6522C"},lE={title:"Python",slug:"python",get svg(){return ht+"Python"+pt+this.path+mt},path:"M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z",source:"https://www.python.org/community/logos/",hex:"3776AB",guidelines:"https://www.python.org/community/logos/"},cE={title:"RabbitMQ",slug:"rabbitmq",get svg(){return ht+"RabbitMQ"+pt+this.path+mt},path:"M23.035 9.601h-7.677a.956.956 0 01-.962-.962V.962a.956.956 0 00-.962-.956H10.56a.956.956 0 00-.962.956V8.64a.956.956 0 01-.962.962H5.762a.956.956 0 01-.961-.962V.962A.956.956 0 003.839 0H.959a.956.956 0 00-.956.962v22.076A.956.956 0 00.965 24h22.07a.956.956 0 00.962-.962V10.58a.956.956 0 00-.962-.98zm-3.86 8.152a1.437 1.437 0 01-1.437 1.443h-1.924a1.437 1.437 0 01-1.436-1.443v-1.917a1.437 1.437 0 011.436-1.443h1.924a1.437 1.437 0 011.437 1.443z",source:"https://www.rabbitmq.com",hex:"FF6600",guidelines:"https://www.rabbitmq.com/trademark-guidelines.html"},uE={title:"Red Hat Open Shift",slug:"redhatopenshift",get svg(){return ht+"Red Hat Open Shift"+pt+this.path+mt},path:"M21.665,11.812c-0.11-1.377-0.476-2.724-1.08-3.966L24,6.599c-0.268-0.556-0.585-1.092-0.943-1.595 l-1.601,0.583c-3.534-4.95-10.412-6.098-15.363-2.565c-3.144,2.244-4.883,5.972-4.582,9.823l1.604-0.584 c0.051,0.615,0.153,1.224,0.305,1.822L0,15.335c0.338,1.339,0.922,2.604,1.721,3.731l1.812-0.659 c3.526,4.95,10.398,6.106,15.349,2.58c1.555-1.107,2.796-2.6,3.599-4.332c0.802-1.715,1.144-3.61,0.991-5.497L21.665,11.812z M16.925,9.177c0.687,1.227,0.998,2.629,0.895,4.032l1.809-0.657c-0.063,0.856-0.282,1.694-0.646,2.471 c-1.67,3.584-5.928,5.138-9.514,3.472c-0.782-0.365-1.491-0.87-2.092-1.49l-1.813,0.66c-0.979-1.01-1.64-2.285-1.903-3.667 l3.426-1.242c-0.121-0.624-0.159-1.262-0.111-1.896H6.97l-1.604,0.583c0.294-3.932,3.72-6.881,7.652-6.587 c0.868,0.065,1.716,0.288,2.504,0.658V5.508c0.778,0.364,1.483,0.867,2.082,1.483l1.599-0.582c0.002,0.002,0.004,0.003,0.006,0.005 c0.441,0.454,0.82,0.965,1.128,1.518L16.925,9.177z",source:"https://www.openshift.com",hex:"EE0000"},fE={title:"Rundeck",slug:"rundeck",get svg(){return ht+"Rundeck"+pt+this.path+mt},path:"M19.35 4.8 16.325 0H.115L3.14 4.8h16.21zM.115 24h16.21l3.025-4.8H3.14L.115 24zM6.163 9.6h16.21l1.512 2.4-1.512 2.4H6.163L7.675 12 6.163 9.6z",source:"https://github.com/rundeck/docs/blob/a1c98b682eb6e82b60de0daa876133f390630821/docs/.vuepress/public/images/rundeck-logo.svg",hex:"F73F39"},dE={title:"Terraform",slug:"terraform",get svg(){return ht+"Terraform"+pt+this.path+mt},path:"M1.44 0v7.575l6.561 3.79V3.787zm21.12 4.227l-6.561 3.791v7.574l6.56-3.787zM8.72 4.23v7.575l6.561 3.787V8.018zm0 8.405v7.575L15.28 24v-7.578z",source:"https://www.hashicorp.com/brand",hex:"844FBA",guidelines:"https://www.hashicorp.com/brand"},as={azure:{path:"M12.21 2L3.17 21.35H6.5L8.4 16.5h7.15l1.9 4.85h3.33L12.21 2zm0 6.2 2.8 7h-5.6l2.8-7z",color:"#0078D4",fillRule:"evenodd"},aws:{path:"M6.76 8.9a5.26 5.26 0 0 1 10.48.02 3.5 3.5 0 0 1-.24 6.98H7a3.5 3.5 0 0 1-.24-6.99zM8.5 17.8c1 1 2.5 1.7 3.5 1.7s2.5-.7 3.5-1.7",color:"#FF9900",stroke:!0},dockerswarm:{path:Ug.path,color:"#2496ED"},cloudformation:{path:"M17 18a5 5 0 0 0 .5-9.97A6 6 0 0 0 6.4 9.5 4 4 0 0 0 7 17.5z",color:"#FF9900"},lgtm:{path:Fg.path,color:"#F46800"},network:{path:"M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18",color:"#A1A1AA",stroke:!0}};function hE({si:t,c:e,name:n}){const i=(t==null?void 0:t.path)??(e==null?void 0:e.path),r=t?`#${t.hex}`:e==null?void 0:e.color,s=t||!(e!=null&&e.stroke)?{fill:r}:{stroke:r,fill:"none",strokeWidth:1.5,strokeLinecap:"round",strokeLinejoin:"round"};return w.jsxs("div",{className:"tech-logo",children:[w.jsx("div",{className:"tech-logo-box",children:w.jsx("svg",{viewBox:"0 0 24 24",style:s,fillRule:!t&&(e!=null&&e.fillRule)?e.fillRule:void 0,"aria-label":n,children:w.jsx("path",{d:i})})}),w.jsx("span",{children:n})]})}const pE=[{icon:w.jsx("svg",{viewBox:"0 0 24 24",children:w.jsx("path",{d:"M17.5 19a4.5 4.5 0 0 0 .5-8.97A6 6 0 0 0 6.4 9.5 4 4 0 0 0 7 17.5z"})}),label:"Cloud Platforms",logos:[{name:"Azure",c:as.azure},{name:"AWS",c:as.aws},{name:"Google Cloud",si:JM},{name:"Alibaba Cloud",si:WM},{name:"OpenStack",si:sE}]},{icon:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("path",{d:"M21 8l-9-5-9 5 9 5 9-5z"}),w.jsx("path",{d:"M3 8v8l9 5 9-5V8"}),w.jsx("path",{d:"M12 13v8"})]}),label:"Containers & Orchestration",logos:[{name:"Docker",si:Ug},{name:"Podman",si:aE},{name:"Kubernetes",si:tE},{name:"OpenShift",si:uE},{name:"Docker Swarm",c:as.dockerswarm}]},{icon:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("path",{d:"M3 12a9 9 0 0 1 15-6.7L21 8"}),w.jsx("path",{d:"M21 3v5h-5"}),w.jsx("path",{d:"M21 12a9 9 0 0 1-15 6.7L3 16"}),w.jsx("path",{d:"M3 21v-5h5"})]}),label:"CI/CD & GitOps",logos:[{name:"GitLab CI",si:ZM},{name:"Jenkins",si:eE},{name:"GitHub Actions",si:KM},{name:"Bamboo",si:qM},{name:"ArgoCD",si:XM}]},{icon:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("circle",{cx:"12",cy:"12",r:"3"}),w.jsx("path",{d:"M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-2.7 1.1V21a2 2 0 1 1-4 0v-.1a1.6 1.6 0 0 0-2.7-1.1l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.6 1.6 0 0 0 1.5-1 1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1z"})]}),label:"IaC & Automation",logos:[{name:"Terraform",si:dE},{name:"Ansible",si:jM},{name:"CloudFormation",c:as.cloudformation},{name:"Bash",si:QM},{name:"Python",si:lE}]},{icon:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("path",{d:"M3 3v18h18"}),w.jsx("path",{d:"M7 14l3-3 3 3 4-5"})]}),label:"Monitoring & Observability",logos:[{name:"LGTM-FP",c:as.lgtm},{name:"Prometheus",si:oE},{name:"Grafana",si:Fg},{name:"ELK Stack",si:$M},{name:"Dynatrace",si:YM}]},{icon:w.jsxs("svg",{viewBox:"0 0 24 24",children:[w.jsx("rect",{x:"3",y:"4",width:"18",height:"13",rx:"2"}),w.jsx("path",{d:"M7 9l3 3-3 3"}),w.jsx("path",{d:"M13 15h4"})]}),label:"Systems & Networking",logos:[{name:"Linux",si:nE},{name:"Networking",c:as.network},{name:"Nginx",si:rE},{name:"RabbitMQ",si:cE},{name:"Rundeck",si:fE}]}];function mE(){return w.jsx("section",{id:"skills",children:w.jsxs("div",{className:"wrap",children:[w.jsxs("div",{className:"sec-head rv",children:[w.jsx("span",{className:"eyebrow",children:"Skills"}),w.jsx("h2",{children:"My toolbox"}),w.jsx("p",{children:"The technologies I work with day to day."})]}),w.jsx("div",{className:"divider"}),w.jsx("div",{className:"skills",children:pE.map((t,e)=>w.jsxs("div",{className:`skill-card rv${e%2===1?" d1":""}`,children:[w.jsxs("h3",{children:[w.jsx("span",{className:"ic",children:t.icon}),t.label]}),w.jsx("div",{className:"tech-logos",children:t.logos.map(n=>w.jsx(hE,{si:n.si,c:n.c,name:n.name},n.name))})]},t.label))})]})})}const gE="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z",vE=[{name:"LinkedIn",label:"linkedin.com/in/nita-oktaviani",path:gE,color:"#0A66C2",href:"https://www.linkedin.com/in/nita-oktaviani"},{name:"Gmail",label:"nitaoktaviani2005@gmail.com",path:Op.path,color:`#${Op.hex}`,href:"mailto:nitaoktaviani2005@gmail.com"},{name:"Medium",label:"medium.com/@nitaoktaviani2005",path:iE.path,color:"#F7F7F7",href:"https://medium.com/@nitaoktaviani2005"}];function _E(){const[t,e]=Vt.useState({name:"",company:"",email:"",message:""}),[n,i]=Vt.useState("idle"),r=a=>o=>e(l=>({...l,[a]:o.target.value})),s=async a=>{a.preventDefault(),i("sending");try{(await fetch("https://formspree.io/f/xqeovqze",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify({name:t.name,company:t.company,email:t.email,message:t.message})})).ok?(i("sent"),e({name:"",company:"",email:"",message:""})):i("error")}catch{i("error")}};return w.jsx("section",{id:"contact",children:w.jsxs("div",{className:"wrap",children:[w.jsxs("div",{className:"sec-head rv",children:[w.jsx("span",{className:"eyebrow",children:"Contact"}),w.jsxs("h2",{children:["Let's build something ",w.jsx("em",{children:"reliable"}),"."]}),w.jsx("p",{children:"Open to DevOps & Cloud roles. Based in Bandung and Jakarta, Indonesia."})]}),w.jsx("div",{className:"divider"}),w.jsx("div",{className:"contact-socials rv",children:vE.map(a=>w.jsxs("a",{className:"contact-social",href:a.href,target:"_blank",rel:"noopener noreferrer",children:[w.jsx("div",{className:"contact-social-icon",children:w.jsx("svg",{viewBox:"0 0 24 24",style:{fill:a.color},"aria-hidden":"true",children:w.jsx("path",{d:a.path})})}),w.jsxs("div",{className:"contact-social-text",children:[w.jsx("span",{className:"contact-social-name",children:a.name}),w.jsx("span",{className:"contact-social-label",children:a.label})]})]},a.name))}),w.jsxs("form",{className:"contact-form rv d1",onSubmit:s,children:[w.jsxs("div",{className:"contact-form-head",children:[w.jsx("h3",{children:"Send a Message"}),w.jsx("p",{children:"Fill the form below and hit Send."})]}),w.jsxs("div",{className:"contact-row",children:[w.jsxs("div",{className:"contact-field",children:[w.jsx("label",{htmlFor:"cf-name",children:"Your Name"}),w.jsx("input",{id:"cf-name",type:"text",placeholder:"John Doe",value:t.name,onChange:r("name"),required:!0})]}),w.jsxs("div",{className:"contact-field",children:[w.jsx("label",{htmlFor:"cf-company",children:"Company Name"}),w.jsx("input",{id:"cf-company",type:"text",placeholder:"PT. Example Corp",value:t.company,onChange:r("company"),required:!0})]})]}),w.jsxs("div",{className:"contact-field",children:[w.jsx("label",{htmlFor:"cf-email",children:"Your Email"}),w.jsx("input",{id:"cf-email",type:"email",placeholder:"you@company.com",value:t.email,onChange:r("email"),required:!0})]}),w.jsxs("div",{className:"contact-field",children:[w.jsx("label",{htmlFor:"cf-msg",children:"Message"}),w.jsx("textarea",{id:"cf-msg",rows:5,placeholder:"Tell me about the role or opportunity...",value:t.message,onChange:r("message"),required:!0})]}),n==="sent"?w.jsxs("div",{className:"contact-success",children:[w.jsxs("svg",{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:[w.jsx("circle",{cx:"12",cy:"12",r:"10"}),w.jsx("path",{d:"m9 12 2 2 4-4"})]}),"Message sent! I'll get back to you soon."]}):w.jsx("button",{type:"submit",className:"btn primary",disabled:n==="sending",children:n==="sending"?"Sending…":"Send Message"}),n==="error"&&w.jsx("p",{className:"contact-error",children:"Something went wrong. Please try again."})]})]})})}function xE(){return w.jsx("footer",{children:w.jsx("div",{className:"wrap",children:w.jsx("p",{children:"© 2026 Nita Oktaviani · DevOps & Cloud Engineer"})})})}function SE(){const[t,e]=Vt.useState(!1),n=Vt.useRef({x:-9999,y:-9999}),i=Vt.useRef(null),r=Vt.useRef(null);return Vt.useEffect(()=>{const s=a=>{n.current={x:a.clientX,y:a.clientY},i.current&&(i.current.style.left=a.clientX+"px",i.current.style.top=a.clientY+"px")};return window.addEventListener("mousemove",s,{passive:!0}),()=>window.removeEventListener("mousemove",s)},[]),Vt.useEffect(()=>(document.body.style.overflow=t?"":"hidden",()=>{document.body.style.overflow=""}),[t]),Vt.useEffect(()=>{if(!t)return;const s=[0,420,780,1080,1380,1720,2060,360,2420,2820],a=[];document.querySelectorAll(".hero-seq").forEach((d,v)=>{const y=setTimeout(()=>d.classList.add("in"),s[v]??v*380);a.push(y)});const o=new IntersectionObserver(d=>d.forEach(v=>{v.isIntersecting&&(v.target.classList.add("in"),o.unobserve(v.target))}),{threshold:.08});document.querySelectorAll(".rv:not(.hero-seq)").forEach(d=>o.observe(d));const l=[{id:"projects",ms:5e3},{id:"certs",ms:8e3},{id:"experience",ms:6e3},{id:"skills",ms:7e3},{id:"contact",ms:6e3}];let c=0,p=null,h=!0;const f=()=>{h=!1,clearTimeout(p)},m=()=>{if(!h||c>=l.length)return;const{id:d,ms:v}=l[c];p=setTimeout(()=>{var y;h&&((y=document.getElementById(d))==null||y.scrollIntoView({behavior:"smooth"}),c++,m())},v)};m(),window.addEventListener("wheel",f,{passive:!0,once:!0}),window.addEventListener("touchstart",f,{passive:!0,once:!0}),window.addEventListener("keydown",f,{once:!0});const _=new IntersectionObserver(d=>d.forEach(v=>{if(v.isIntersecting){const y=v.target,C=+y.dataset.count;let T=0;const R=Math.max(1,Math.round(C/50)),x=setInterval(()=>{T+=R,T>=C&&(T=C,clearInterval(x)),y.textContent=T},18);_.unobserve(y)}}),{threshold:.5});document.querySelectorAll("[data-count]").forEach(d=>_.observe(d));const M=document.querySelector(".photo-wrap"),g=document.querySelector(".photo"),u=()=>{const d=window.scrollY,v=document.body.scrollHeight-window.innerHeight;if(r.current&&(r.current.style.width=(v>0?d/v*100:0)+"%"),!M||window.innerWidth<=860)return;const y=M.getBoundingClientRect(),C=(y.top+y.height/2)/window.innerHeight;M.style.transform=`translateY(${(C-.5)*-30}px)`};if(window.addEventListener("scroll",u,{passive:!0}),g){const d=y=>{const C=g.getBoundingClientRect(),T=(y.clientX-C.left)/C.width-.5,R=(y.clientY-C.top)/C.height-.5;g.style.transform=`rotateY(${T*14}deg) rotateX(${-R*14}deg) scale3d(1.03,1.03,1.03)`},v=()=>{g.style.transform=""};g.addEventListener("mousemove",d),g.addEventListener("mouseleave",v)}return document.querySelectorAll(".btn").forEach(d=>{d.addEventListener("mousemove",v=>{const y=d.getBoundingClientRect(),C=v.clientX-y.left-y.width/2,T=v.clientY-y.top-y.height/2;d.style.transform=`translate(${C*.15}px,${T*.15}px)`}),d.addEventListener("mouseleave",()=>{d.style.transform=""})}),()=>{a.forEach(clearTimeout),clearTimeout(p),window.removeEventListener("wheel",f),window.removeEventListener("touchstart",f),window.removeEventListener("keydown",f),o.disconnect(),_.disconnect(),window.removeEventListener("scroll",u)}},[t]),w.jsxs(w.Fragment,{children:[w.jsx("div",{ref:r,className:"scroll-bar",style:{width:"0%"}}),w.jsx("div",{ref:i,className:"cursor-spot"}),w.jsx(v_,{onDone:()=>e(!0)}),w.jsx("div",{className:"glow g1"}),w.jsx("div",{className:"glow g2"}),w.jsx(__,{}),w.jsxs("main",{children:[w.jsx(OM,{}),w.jsx(zM,{}),w.jsx(VM,{}),w.jsx(GM,{}),w.jsx(mE,{}),w.jsx(_E,{})]}),w.jsx(xE,{})]})}K1(document.getElementById("root")).render(w.jsx(Vt.StrictMode,{children:w.jsx(SE,{})}));
