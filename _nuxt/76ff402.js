(window.webpackJsonp=window.webpackJsonp||[]).push([[5,11],{1003:function(t,e,r){"use strict";r.r(e);r(31),r(23),r(33),r(34),r(27),r(35);var n=r(5),o=r(37),c=r(302),d=r(981),l=r(968),f=r(187);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={components:{Btn:c.default,ProgressBar:d.default},computed:m(m(m({},Object(o.c)("user",["hasAuth"])),Object(o.d)("user",["minted","maxSupply","nftPrice","isLoadingInfo","isLoadingMint"])),{},{progress:function(){return 100*this.minted/this.maxSupply}}),methods:m(m({},Object(o.b)("user",["mint"])),{},{calcAmount:f.a}),filters:{formatMoney:l.a}},x=(r(983),r(985),r(42)),v=r(50),y=r.n(v),w=r(952),O=r(961),j=r(285),component=Object(x.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"hero"},[r("div",{staticClass:"hero__container custom_container custom_container--xl"},[r("h1",{staticClass:"hero__title"},[t._v("We’re airdropping a condo in Miami")]),t._v(" "),r("p",{staticClass:"hero__subtitle"},[t._v("\n      TitleDAO is building NFT titles for property. Help us do it.\n    ")]),t._v(" "),r("div",{staticClass:"hero__image_container"},[r("v-img",{attrs:{src:t.$router.options.base+"images/ticket.jpg",contain:""}})],1),t._v(" "),t.isLoadingInfo?r("v-progress-circular",{staticClass:"mb-10",attrs:{indeterminate:"",color:"primary"}}):[r("ProgressBar",{staticClass:"hero__progress_bar",attrs:{color:"linear-gradient(to right, #4bd1e2 8%, #3defaa 93%)",progress:t.progress}}),t._v(" "),r("span",{staticClass:"hero__minted"},[t._v("\n        "+t._s(t._f("formatMoney")(t.minted,0,".",","))+" /\n        "+t._s(t._f("formatMoney")(t.maxSupply,0,".",","))+" minted\n      ")]),t._v(" "),t.hasAuth?r("v-btn",{staticClass:"btn_custom",attrs:{depressed:"",dark:"",loading:t.isLoadingMint},on:{click:t.mint}},[t._v("\n        Mint for\n        "+t._s(t._f("formatMoney")(t.calcAmount(t.nftPrice,{isInverse:!0}),2,".",","))+"\n        ETH\n      ")]):t._e()]],2)])}),[],!1,null,"095f5768",null);e.default=component.exports;y()(component,{VBtn:w.a,VImg:O.a,VProgressCircular:j.a})},965:function(t,e,r){var content=r(970);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("25054f64",content,!0,{sourceMap:!1})},968:function(t,e,r){"use strict";r(28),r(95),r(515),r(74),r(54),r(82),r(75);e.a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:",",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:".";try{e=Math.abs(e),e=isNaN(e)?2:e;var o=t<0?"-":"",i=parseInt(t=Math.abs(Number(t)||0).toFixed(e)).toString(),c=i.length>3?i.length%3:0;return o+(c?i.substr(0,c)+n:"")+i.substr(c).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?r+Math.abs(t-i).toFixed(e).slice(2):"")}catch(t){}}},969:function(t,e,r){"use strict";r(965)},970:function(t,e,r){var n=r(38)(!1);n.push([t.i,".progress_bar[data-v-1a06fb26]{position:relative;width:410px;height:13px;border-radius:8.5px;overflow:hidden;max-width:410px;width:100%}.progress_bar__progress[data-v-1a06fb26]{position:absolute;left:0;top:0;height:100%;border-radius:8.5px;z-index:1}.progress_bar__background[data-v-1a06fb26]{position:absolute;left:0;top:0;width:100%;height:100%}",""]),t.exports=n},971:function(t,e,r){var content=r(984);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("0acab6a8",content,!0,{sourceMap:!1})},972:function(t,e,r){var content=r(986);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(39).default)("32e79b2e",content,!0,{sourceMap:!1})},981:function(t,e,r){"use strict";r.r(e);r(74);var n={props:{color:{type:String,default:"red"},progress:{type:Number,default:0},backgroundColor:{type:String,default:"#F7F7F7"}}},o=(r(969),r(42)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"progress_bar"},[r("div",{staticClass:"progress_bar__progress",style:{width:t.progress+"%",background:t.color}}),t._v(" "),r("div",{staticClass:"progress_bar__background",style:{backgroundColor:t.backgroundColor}})])}),[],!1,null,"1a06fb26",null);e.default=component.exports},983:function(t,e,r){"use strict";r(971)},984:function(t,e,r){var n=r(38)(!1);n.push([t.i,".hero .btn_custom.btn_custom.btn_custom[data-v-095f5768]{display:none;text-transform:none;font-size:18px;font-weight:400;height:58px;padding:0 64px;box-shadow:0 4px 7px 0 rgba(78,0,255,.23);border-radius:7px;letter-spacing:normal;background:linear-gradient(90deg,#f95b2d 14%,#f8186a 89%)}@media screen and (min-width:1024px){.hero .btn_custom.btn_custom.btn_custom[data-v-095f5768]{display:inline-flex}}",""]),t.exports=n},985:function(t,e,r){"use strict";r(972)},986:function(t,e,r){var n=r(38)(!1);n.push([t.i,".hero__container[data-v-095f5768]{margin-top:48px;margin-bottom:101px;display:flex;flex-direction:column;justify-content:center;align-items:center}@media screen and (min-width:1024px){.hero__container[data-v-095f5768]{margin-top:97px;margin-bottom:52px;text-align:center}}.hero__title[data-v-095f5768]{font-size:46px;line-height:56px;font-weight:400;color:#131436;margin-bottom:19px}@media screen and (min-width:750px){.hero__title[data-v-095f5768]{text-align:center}}@media screen and (min-width:1024px){.hero__title[data-v-095f5768]{margin-bottom:29px;font-size:56px;line-height:67px}}.hero__subtitle[data-v-095f5768]{font-size:21px;font-weight:500;color:#131436;margin-bottom:46px}@media screen and (min-width:1024px){.hero__subtitle[data-v-095f5768]{font-size:24px;margin-bottom:52px;text-align:center}}.hero__image_container[data-v-095f5768]{width:100%;margin-bottom:42px}@media screen and (min-width:1024px){.hero__image_container[data-v-095f5768]{max-width:456px}}.hero__progress_bar[data-v-095f5768]{margin-bottom:19px}.hero__minted[data-v-095f5768]{font-size:16px;font-weight:500}@media screen and (min-width:1024px){.hero__minted[data-v-095f5768]{margin-bottom:34px}}",""]),t.exports=n}}]);