(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1001:function(t,e,n){"use strict";n(980)},1002:function(t,e,n){var r=n(38)(!1);r.push([t.i,".floating_mint .btn_custom.btn_custom.btn_custom{position:fixed;bottom:0;right:0;width:100%;text-transform:none;font-size:18px;font-weight:400;height:58px;padding:0 64px;border-radius:0;letter-spacing:normal;background:linear-gradient(90deg,#f95b2d 14%,#f8186a 89%)}@media screen and (min-width:750px){.floating_mint .btn_custom.btn_custom.btn_custom{border-radius:8px;box-shadow:0 4px 7px 0 rgba(78,0,255,.23);max-width:280px;bottom:16px;right:16px}}@media screen and (min-width:1024px){.floating_mint .btn_custom.btn_custom.btn_custom{display:none}}",""]),t.exports=r},1009:function(t,e,n){"use strict";n.r(e);n(31),n(23),n(33),n(34),n(27),n(35);var r=n(5),o=n(37),c=n(968),d=n(187);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={computed:f(f({},Object(o.c)("user",["hasAuth"])),Object(o.d)("user",["nftPrice","isLoadingMint"])),methods:f(f({},Object(o.b)("user",["mint"])),{},{calcAmount:d.a}),filters:{formatMoney:c.a}},h=(n(1001),n(42)),O=n(50),v=n.n(O),w=n(952),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.hasAuth,expression:"hasAuth"}],staticClass:"floating_mint"},[n("v-btn",{staticClass:"btn_custom",attrs:{depressed:"",dark:"",loading:t.isLoadingMint},on:{click:t.mint}},[t._v("\n    Mint for\n    "+t._s(t._f("formatMoney")(t.calcAmount(t.nftPrice,{isInverse:!0}),2,".",","))+"\n    ETH\n  ")])],1)}),[],!1,null,"34321718",null);e.default=component.exports;v()(component,{VBtn:w.a})},968:function(t,e,n){"use strict";n(28),n(95),n(515),n(74),n(54),n(82),n(75);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),c=i.length>3?i.length%3:0;return o+(c?i.substr(0,c)+r:"")+i.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?n+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){}}},980:function(t,e,n){var content=n(1002);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("024f6079",content,!0,{sourceMap:!1})}}]);