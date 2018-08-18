"use strict";function _interopDefault(e){return e&&"object"==typeof e&&"default"in e?e.default:e}var qs=_interopDefault(require("qs")),dayjs=_interopDefault(require("dayjs")),prefix="mp_client__",consts={prefix:prefix},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(e,t,n){return t&&r(e.prototype,t),n&&r(e,n),e}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return Array.from(e)},Storage=function(){function t(e){classCallCheck(this,t),this.key=e}return createClass(t,[{key:"set",value:function(e){wx.setStorageSync(this.key,e)}},{key:"get",value:function(){return wx.getStorageSync(this.key)||""}},{key:"remove",value:function(){wx.removeStorageSync(this.key)}},{key:"clear",value:function(){wx.clearStorageSync()}}]),t}(),page={toURL:function(e){var t=e.route,n=e.options,r=void 0===n?{}:n;return"/"+t+(Object.keys(r).length?"?"+qs.stringify(r):"")}},storage=new Storage(consts.prefix+"pages"),MAX_PAGES=5,currentPages={whiteList:[],addWhiteList:function(e){this.whiteList=[].concat(toConsumableArray(this.whiteList),toConsumableArray(e))},storePages:function(){var e=this,t=getCurrentPages(),n=t[t.length-1],r=n.route,o=n.options,i=storage.get()||[];e.whiteList.includes(r)||0<i.length&&i[i.length-1].route===r||(i.length>=MAX_PAGES&&i.shift(),i.push({route:r,options:o,url:page.toURL({route:r,options:o})}),storage.set(i))},getPages:function(){return storage.get()},clearPages:function(){storage.remove()}},url={encode:function(e){return encodeURIComponent(e)},decode:function(e){return decodeURIComponent(e)}},DATE_FORMATTER="YYYY-MM-DD",time={getDate:function(e){return dayjs(e).format(DATE_FORMATTER)}},component={getModifiersClass:function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=e.block,n=e.defaultModifier,r=void 0===n?"":n,o=e.modifiers;return o?o.split(",").map(function(e){return t+"--"+e}).join(" "):t+(r?"--"+r:"")}},utils={consts:consts,Storage:Storage,currentPages:currentPages,url:url,page:page,time:time,component:component},helpers={sleep:function(t){return new Promise(function(e){setTimeout(e,t)})}},index={wx:wx,utils:utils,helpers:helpers};module.exports=index;
//# sourceMappingURL=index.js.map
