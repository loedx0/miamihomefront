(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{1e3:function(t,e,n){"use strict";n(987)},1001:function(t,e,n){var r=n(33)(!1);r.push([t.i,".hero__container[data-v-04f4fe9f]{margin-top:48px;margin-bottom:101px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media screen and (min-width:1024px){.hero__container[data-v-04f4fe9f]{margin-top:57px;margin-bottom:57px;text-align:center}}.hero__title[data-v-04f4fe9f]{font-size:46px;line-height:56px;font-weight:400;color:#131436;margin-bottom:19px}@media screen and (min-width:750px){.hero__title[data-v-04f4fe9f]{text-align:center}}@media screen and (min-width:1024px){.hero__title[data-v-04f4fe9f]{margin-bottom:29px;font-size:56px;line-height:67px}}.hero__subtitle[data-v-04f4fe9f]{font-size:21px;font-weight:500;color:#131436;margin-bottom:46px}@media screen and (min-width:1024px){.hero__subtitle[data-v-04f4fe9f]{font-size:24px;margin-bottom:52px;text-align:center}}.hero__image_container[data-v-04f4fe9f]{width:100%;max-width:456px;margin:0 auto 42px}.hero__progress_bar[data-v-04f4fe9f]{margin-bottom:19px}.hero__minted[data-v-04f4fe9f]{font-size:16px;font-weight:500}@media screen and (min-width:1024px){.hero__minted[data-v-04f4fe9f]{margin-bottom:34px}}",""]),t.exports=r},1018:function(t,e,n){"use strict";n.r(e);n(28),n(22),n(32),n(37),n(24),n(38);var r=n(4),o=n(36),c=n(307),f=n(996),d=n(983),l=n(143);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Btn:c.default,ProgressBar:f.default},computed:m(m(m({},Object(o.c)("user",["hasAuth"])),Object(o.d)("user",["minted","maxSupply","nftPrice","isLoadingInfo","isLoadingMint"])),{},{progress:function(){return 100*this.minted/this.maxSupply}}),methods:m(m(m({},Object(o.b)("user",["setDialogMint"])),Object(o.b)("app",["openLoginDialog"])),{},{calcAmount:l.a}),filters:{formatMoney:d.a}},x=(n(998),n(1e3),n(39)),v=n(45),w=n.n(v),y=n(967),O=n(976),j=n(289),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero"},[n("div",{staticClass:"hero__container custom_container custom_container--xl"},[n("h1",{staticClass:"hero__title"},[t._v("We’re airdropping a condo in Miami")]),t._v(" "),n("p",{staticClass:"hero__subtitle"},[t._v("\n      TitleDAO is building NFT titles for property. Help us do it.\n    ")]),t._v(" "),n("div",{staticClass:"hero__image_container"},[n("v-img",{attrs:{src:t.$router.options.base+"images/ticket.webp",contain:""}})],1),t._v(" "),t.isLoadingInfo?n("v-progress-circular",{staticClass:"mb-10",attrs:{indeterminate:"",color:"primary"}}):[n("ProgressBar",{staticClass:"hero__progress_bar",attrs:{color:"linear-gradient(to right, #6236ff, #3b5aff, #0091ff)",progress:t.progress}}),t._v(" "),n("span",{staticClass:"hero__minted"},[t._v("\n        "+t._s(t._f("formatMoney")(t.minted,0,".",","))+" /\n        "+t._s(t._f("formatMoney")(t.maxSupply,0,".",","))+" minted\n      ")]),t._v(" "),t.hasAuth?n("v-btn",{staticClass:"btn_custom_mint",attrs:{depressed:"",dark:""},on:{click:function(e){return t.setDialogMint({isActive:!0,title:"Mint"})}}},[t._v("\n        Mint for\n        "+t._s(t._f("formatMoney")(t.calcAmount(t.nftPrice,{isInverse:!0}),2,".",","))+"\n        ETH\n      ")]):n("v-btn",{staticClass:"btn_custom_connect",attrs:{color:"#EFF2F8",depressed:""},on:{click:t.openLoginDialog}},[t._v("\n        Connect wallet\n      ")])]],2)])}),[],!1,null,"04f4fe9f",null);e.default=component.exports;w()(component,{VBtn:y.a,VImg:O.a,VProgressCircular:j.a})},980:function(t,e,n){var content=n(985);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("25054f64",content,!0,{sourceMap:!1})},983:function(t,e,n){"use strict";n(29),n(95),n(523),n(69),n(54),n(84),n(70);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),c=i.length>3?i.length%3:0;return o+(c?i.substr(0,c)+r:"")+i.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+r)+(e?n+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){}}},984:function(t,e,n){"use strict";n(980)},985:function(t,e,n){var r=n(33)(!1);r.push([t.i,".progress_bar[data-v-1a06fb26]{position:relative;width:410px;height:13px;border-radius:8.5px;overflow:hidden;max-width:410px;width:100%}.progress_bar__progress[data-v-1a06fb26]{position:absolute;left:0;top:0;height:100%;border-radius:8.5px;z-index:1}.progress_bar__background[data-v-1a06fb26]{position:absolute;left:0;top:0;width:100%;height:100%}",""]),t.exports=r},986:function(t,e,n){var content=n(999);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("747bd908",content,!0,{sourceMap:!1})},987:function(t,e,n){var content=n(1001);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(34).default)("503d54c9",content,!0,{sourceMap:!1})},996:function(t,e,n){"use strict";n.r(e);n(69);var r={props:{color:{type:String,default:"red"},progress:{type:Number,default:0},backgroundColor:{type:String,default:"#F7F7F7"}}},o=(n(984),n(39)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"progress_bar"},[n("div",{staticClass:"progress_bar__progress",style:{width:t.progress+"%",background:t.color}}),t._v(" "),n("div",{staticClass:"progress_bar__background",style:{backgroundColor:t.backgroundColor}})])}),[],!1,null,"1a06fb26",null);e.default=component.exports},998:function(t,e,n){"use strict";n(986)},999:function(t,e,n){var r=n(33)(!1);r.push([t.i,".hero .btn_custom_mint.btn_custom_mint.btn_custom_mint[data-v-04f4fe9f]{display:none;text-transform:none;font-size:18px;font-weight:400;height:58px;padding:0 64px;box-shadow:0 4px 7px 0 rgba(78,0,255,.23);border-radius:7px;letter-spacing:normal;background:linear-gradient(90deg,#f95b2d 14%,#f8186a 89%)}@media screen and (min-width:1024px){.hero .btn_custom_mint.btn_custom_mint.btn_custom_mint[data-v-04f4fe9f]{display:inline-flex}}.hero .btn_custom_connect.btn_custom_connect.btn_custom_connect[data-v-04f4fe9f]{text-transform:none;font-size:16px;font-weight:600;height:49px;padding:0 22px;box-shadow:0 4px 7px 0 hsla(0,0%,58.8%,.23);border-radius:7px;letter-spacing:normal;margin-top:34px}@media screen and (min-width:1024px){.hero .btn_custom_connect.btn_custom_connect.btn_custom_connect[data-v-04f4fe9f]{margin-top:0}}",""]),t.exports=r}}]);