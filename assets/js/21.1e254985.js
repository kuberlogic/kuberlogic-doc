(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{346:function(t,n,e){"use strict";e.r(n);e(144),e(139),e(20),e(35),e(140);var o=e(0),i={name:"gtranslate-io",render:function(){if("undefined"!=typeof window){var t=this,n=window.location.pathname.split(this.$localePath).join(""),e=this.$site.themeConfig.translationSource,i="".concat("https:","//").concat(this.$lang,".").concat(e,"/").concat(n);fetch(i).then(function(t){return t.ok?t.text():Promise.reject(new Error(t.statusText))}).then(function(n){var e=(new DOMParser).parseFromString(n,"text/html").getElementsByClassName("content")[0],i=o.a.compile("<div>"+e.innerHTML+"</div>");t.$options.render=i.render,t.$options.staticRenderFns=i.staticRenderFns,t.$forceUpdate()}).catch(function(t){console.error(t)})}}},r=e(34),a=Object(r.a)(i,void 0,void 0,!1,null,null,null);n.default=a.exports}}]);