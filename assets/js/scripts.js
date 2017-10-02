"use strict";$(document).ready(function(){$(".embed-responsive").click(function(){$(this).find("#map").addClass("clicked")}).mouseleave(function(){$(this).find("#map").removeClass("clicked")})}),$(function(){var e=$(".navbar-collapse");e.on("click","a:not([data-toggle])",null,function(){e.collapse("hide")})});var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(e,t){"function"==typeof define&&define.amd?define([],function(){return t(e)}):"object"===("undefined"==typeof exports?"undefined":_typeof(exports))?module.exports=t(e):e.SmoothScroll=t(e)}("undefined"!=typeof global?global:"undefined"!=typeof window?window:void 0,function(e){var t="querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype,n={ignore:"[data-scroll-ignore]",header:null,speed:500,offset:0,easing:"easeInOutCubic",customEasing:null,before:function(){},after:function(){}},o=function(){for(var e={},t=0,n=arguments.length,o=function(t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])};t<n;t++){var a=arguments[t];o(a)}return e},a=function(t){return parseInt(e.getComputedStyle(t).height,10)},r=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,n=String(e),o=n.length,a=-1,r="",i=n.charCodeAt(0);++a<o;){if(t=n.charCodeAt(a),0===t)throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=t>=1&&t<=31||127==t||0===a&&t>=48&&t<=57||1===a&&t>=48&&t<=57&&45===i?"\\"+t.toString(16)+" ":t>=128||45===t||95===t||t>=48&&t<=57||t>=65&&t<=90||t>=97&&t<=122?n.charAt(a):"\\"+n.charAt(a)}return"#"+r},i=function(e,t){var n;return"easeInQuad"===e.easing&&(n=t*t),"easeOutQuad"===e.easing&&(n=t*(2-t)),"easeInOutQuad"===e.easing&&(n=t<.5?2*t*t:-1+(4-2*t)*t),"easeInCubic"===e.easing&&(n=t*t*t),"easeOutCubic"===e.easing&&(n=--t*t*t+1),"easeInOutCubic"===e.easing&&(n=t<.5?4*t*t*t:(t-1)*(2*t-2)*(2*t-2)+1),"easeInQuart"===e.easing&&(n=t*t*t*t),"easeOutQuart"===e.easing&&(n=1- --t*t*t*t),"easeInOutQuart"===e.easing&&(n=t<.5?8*t*t*t*t:1-8*--t*t*t*t),"easeInQuint"===e.easing&&(n=t*t*t*t*t),"easeOutQuint"===e.easing&&(n=1+--t*t*t*t*t),"easeInOutQuint"===e.easing&&(n=t<.5?16*t*t*t*t*t:1+16*--t*t*t*t*t),e.customEasing&&(n=e.customEasing(t)),n||t},u=function(){return parseInt(e.getComputedStyle(document.documentElement).height,10)},c=function(e,t,n){var o=0;if(e.offsetParent)do o+=e.offsetTop,e=e.offsetParent;while(e);return o=Math.max(o-t-n,0)},l=function(e){return e?a(e)+e.offsetTop:0},s=function(t,n,o){o||(t.focus(),document.activeElement.id!==t.id&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,n))},f=function(t){return!!("matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches)},d=function(a,d){var m,h,p,g,v,y,b,S={};S.cancelScroll=function(){cancelAnimationFrame(b)},S.animateScroll=function(t,a,r){var f=o(m||n,r||{}),d="[object Number]"===Object.prototype.toString.call(t),h=d||!t.tagName?null:t;if(d||h){var p=e.pageYOffset;f.header&&!g&&(g=document.querySelector(f.header)),v||(v=l(g));var y,b,I,O=d?t:c(h,v,parseInt("function"==typeof f.offset?f.offset():f.offset,10)),A=O-p,C=u(),E=0,w=function(n,o){var r=e.pageYOffset;if(n==o||r==o||(p<o&&e.innerHeight+r)>=C)return S.cancelScroll(),s(t,o,d),f.after(t,a),y=null,!0},Q=function q(t){y||(y=t),E+=t-y,b=E/parseInt(f.speed,10),b=b>1?1:b,I=p+A*i(f,b),e.scrollTo(0,Math.floor(I)),w(I,O)||(e.requestAnimationFrame(q),y=t)};0===e.pageYOffset&&e.scrollTo(0,0),f.before(t,a),S.cancelScroll(),e.requestAnimationFrame(Q)}};var I=function(e){h&&(h.id=h.getAttribute("data-scroll-id"),S.animateScroll(h,p),h=null,p=null)},O=function(t){if(!f(m)&&0===t.button&&!t.metaKey&&!t.ctrlKey&&(p=t.target.closest(a),p&&"a"===p.tagName.toLowerCase()&&!t.target.closest(m.ignore)&&p.hostname===e.location.hostname&&p.pathname===e.location.pathname&&/#/.test(p.href))){var n;try{n=r(decodeURIComponent(p.hash))}catch(o){n=r(p.hash)}if("#"===n){t.preventDefault(),h=document.body;var i=h.id?h.id:"smooth-scroll-top";return h.setAttribute("data-scroll-id",i),h.id="",void(e.location.hash.substring(1)===i?I():e.location.hash=i)}h=document.querySelector(n),h&&(h.setAttribute("data-scroll-id",h.id),h.id="",p.hash===e.location.hash&&(t.preventDefault(),I()))}},A=function(e){y||(y=setTimeout(function(){y=null,v=l(g)},66))};return S.destroy=function(){m&&(document.removeEventListener("click",O,!1),e.removeEventListener("resize",A,!1),S.cancelScroll(),m=null,h=null,p=null,g=null,v=null,y=null,b=null)},S.init=function(a){t&&(S.destroy(),m=o(n,a||{}),g=m.header?document.querySelector(m.header):null,v=l(g),document.addEventListener("click",O,!1),e.addEventListener("hashchange",I,!1),g&&e.addEventListener("resize",A,!1))},S.init(d),S};return d}),window.sr=ScrollReveal(),sr.reveal(".navbar"),sr.reveal(".container"),sr.reveal(".container-fluid"),sr.reveal(".sixth");