!function(e){var r={};function n(t){if(r[t])return r[t].exports;var o=r[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=r,n.d=function(e,r,t){n.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:t})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,r){if(1&r&&(e=n(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(n.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)n.d(t,o,function(r){return e[r]}.bind(null,o));return t},n.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(r,"a",r),r},n.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},n.p="",n(n.s=45)}({1:function(e,r){function n(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var o,a=n(document.querySelectorAll(".header"));try{var i=function(){var e,r=o.value,t=r.querySelector(".header__burger"),a=r.querySelector(".header__menuGroup"),i=n(r.querySelectorAll(".header__subMenu"));try{var l=function(){var r=e.value,n=r.querySelector(".header__dropdown"),t=r.querySelector(".header__subMenuIcon");t.addEventListener("click",(function(){n.classList.contains("header__dropdown_expanded")?(n.classList.remove("header__dropdown_expanded"),t.classList.remove("header__subMenuIcon_expanded")):(n.classList.add("header__dropdown_expanded"),t.classList.add("header__subMenuIcon_expanded"))}))};for(i.s();!(e=i.n()).done;)l()}catch(e){i.e(e)}finally{i.f()}t.addEventListener("click",(function(){a.classList.contains("header__menuGroup_expanded")?(a.classList.remove("header__menuGroup_expanded"),t.innerHTML="menu"):(a.classList.add("header__menuGroup_expanded"),t.innerHTML="close")}))};for(a.s();!(o=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}},45:function(e,r,n){"use strict";n.r(r);n(1),n(9)},9:function(e,r){function n(e,r){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return t(e,r)}(e))||r&&e&&"number"==typeof e.length){n&&(e=n);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return l=e.done,e},e:function(e){u=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(u)throw i}}}}function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}var o,a=n(document.querySelectorAll(".imageSlider"));try{var i=function(){var e=o.value,r=e.querySelector(".imageSlider__btn-prev"),t=e.querySelector(".imageSlider__btn-next"),a=e.querySelectorAll(".imageSlider__slide"),i=e.querySelectorAll(".imageSlider__dot"),l=0,u=!0;u&&(a[l].classList.add("imageSlider__slide_active"),i[l].classList.add("imageSlider__dot_active"),u=!1);var c=function(e){!function(e){var r,t=n(a);try{for(t.s();!(r=t.n()).done;){r.value.classList.remove("imageSlider__slide_active")}}catch(e){t.e(e)}finally{t.f()}a[e].classList.add("imageSlider__slide_active")}(e),function(e){var r,t=n(i);try{for(t.s();!(r=t.n()).done;){r.value.classList.remove("imageSlider__dot_active")}}catch(e){t.e(e)}finally{t.f()}i[e].classList.add("imageSlider__dot_active")}(e)},d=function(){l===a.length-1?c(l=0):c(l+=1)};i.forEach((function(e,r){e.addEventListener("click",(function(){c(l=r)}))})),t.addEventListener("click",d),r.addEventListener("click",(function(){0===l?(l=a.length-1,c(l)):c(l-=1)})),e.classList.contains("imageSlider__interval")&&setInterval(d,2500)};for(a.s();!(o=a.n()).done;)i()}catch(e){a.e(e)}finally{a.f()}}});