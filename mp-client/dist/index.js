"use strict";var prefix="mp_client__",consts={prefix:prefix},classCallCheck=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},createClass=function(){function o(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,t,r){return t&&o(e.prototype,t),r&&o(e,r),e}}(),toConsumableArray=function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)},Storage=function(){function t(e){classCallCheck(this,t),this.key=e}return createClass(t,[{key:"set",value:function(e){wx.setStorageSync(this.key,e)}},{key:"get",value:function(){return wx.getStorageSync(this.key)||""}},{key:"remove",value:function(){wx.removeStorageSync(this.key)}},{key:"clear",value:function(){wx.clearStorageSync()}}]),t}(),has=Object.prototype.hasOwnProperty,hexTable=function(){for(var e=[],t=0;t<256;++t)e.push("%"+((t<16?"0":"")+t.toString(16)).toUpperCase());return e}(),compactQueue=function(e){for(var t;e.length;){var r=e.pop();if(t=r.obj[r.prop],Array.isArray(t)){for(var o=[],n=0;n<t.length;++n)void 0!==t[n]&&o.push(t[n]);r.obj[r.prop]=o}}return t},arrayToObject=function(e,t){for(var r=t&&t.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(r[o]=e[o]);return r},merge=function o(r,n,a){if(!n)return r;if("object"!=typeof n){if(Array.isArray(r))r.push(n);else{if("object"!=typeof r)return[r,n];(a.plainObjects||a.allowPrototypes||!has.call(Object.prototype,n))&&(r[n]=!0)}return r}if("object"!=typeof r)return[r].concat(n);var e=r;return Array.isArray(r)&&!Array.isArray(n)&&(e=arrayToObject(r,a)),Array.isArray(r)&&Array.isArray(n)?(n.forEach(function(e,t){has.call(r,t)?r[t]&&"object"==typeof r[t]?r[t]=o(r[t],e,a):r.push(e):r[t]=e}),r):Object.keys(n).reduce(function(e,t){var r=n[t];return has.call(e,t)?e[t]=o(e[t],r,a):e[t]=r,e},e)},assign=function(e,r){return Object.keys(r).reduce(function(e,t){return e[t]=r[t],e},e)},decode=function(t){try{return decodeURIComponent(t.replace(/\+/g," "))}catch(e){return t}},encode=function(e){if(0===e.length)return e;for(var t="string"==typeof e?e:String(e),r="",o=0;o<t.length;++o){var n=t.charCodeAt(o);45===n||46===n||95===n||126===n||48<=n&&n<=57||65<=n&&n<=90||97<=n&&n<=122?r+=t.charAt(o):n<128?r+=hexTable[n]:n<2048?r+=hexTable[192|n>>6]+hexTable[128|63&n]:n<55296||57344<=n?r+=hexTable[224|n>>12]+hexTable[128|n>>6&63]+hexTable[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&t.charCodeAt(o)),r+=hexTable[240|n>>18]+hexTable[128|n>>12&63]+hexTable[128|n>>6&63]+hexTable[128|63&n])}return r},compact=function(e){for(var t=[{obj:{o:e},prop:"o"}],r=[],o=0;o<t.length;++o)for(var n=t[o],a=n.obj[n.prop],i=Object.keys(a),l=0;l<i.length;++l){var s=i[l],c=a[s];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(t.push({obj:a,prop:s}),r.push(c))}return compactQueue(t)},isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},isBuffer=function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},utils={arrayToObject:arrayToObject,assign:assign,compact:compact,decode:decode,encode:encode,isBuffer:isBuffer,isRegExp:isRegExp,merge:merge},replace=String.prototype.replace,percentTwenties=/%20/g,formats={default:"RFC3986",formatters:{RFC1738:function(e){return replace.call(e,percentTwenties,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"},arrayPrefixGenerators={brackets:function(e){return e+"[]"},indices:function(e,t){return e+"["+t+"]"},repeat:function(e){return e}},toISO=Date.prototype.toISOString,defaults$1={delimiter:"&",encode:!0,encoder:utils.encode,encodeValuesOnly:!1,serializeDate:function(e){return toISO.call(e)},skipNulls:!1,strictNullHandling:!1},stringify=function e(t,r,o,n,a,i,l,s,c,u,f,p){var d=t;if("function"==typeof l)d=l(r,d);else if(d instanceof Date)d=u(d);else if(null===d){if(n)return i&&!p?i(r,defaults$1.encoder):r;d=""}if("string"==typeof d||"number"==typeof d||"boolean"==typeof d||utils.isBuffer(d))return i?[f(p?r:i(r,defaults$1.encoder))+"="+f(i(d,defaults$1.encoder))]:[f(r)+"="+f(String(d))];var y,g=[];if(void 0===d)return g;if(Array.isArray(l))y=l;else{var h=Object.keys(d);y=s?h.sort(s):h}for(var b=0;b<y.length;++b){var m=y[b];a&&null===d[m]||(g=Array.isArray(d)?g.concat(e(d[m],o(r,m),o,n,a,i,l,s,c,u,f,p)):g.concat(e(d[m],r+(c?"."+m:"["+m+"]"),o,n,a,i,l,s,c,u,f,p)))}return g},stringify_1=function(e,t){var r=e,o=t?utils.assign({},t):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var n=void 0===o.delimiter?defaults$1.delimiter:o.delimiter,a="boolean"==typeof o.strictNullHandling?o.strictNullHandling:defaults$1.strictNullHandling,i="boolean"==typeof o.skipNulls?o.skipNulls:defaults$1.skipNulls,l="boolean"==typeof o.encode?o.encode:defaults$1.encode,s="function"==typeof o.encoder?o.encoder:defaults$1.encoder,c="function"==typeof o.sort?o.sort:null,u=void 0!==o.allowDots&&o.allowDots,f="function"==typeof o.serializeDate?o.serializeDate:defaults$1.serializeDate,p="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:defaults$1.encodeValuesOnly;if(void 0===o.format)o.format=formats.default;else if(!Object.prototype.hasOwnProperty.call(formats.formatters,o.format))throw new TypeError("Unknown format option provided.");var d,y,g=formats.formatters[o.format];"function"==typeof o.filter?r=(y=o.filter)("",r):Array.isArray(o.filter)&&(d=y=o.filter);var h,b=[];if("object"!=typeof r||null===r)return"";h=o.arrayFormat in arrayPrefixGenerators?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var m=arrayPrefixGenerators[h];d||(d=Object.keys(r)),c&&d.sort(c);for(var v=0;v<d.length;++v){var j=d[v];i&&null===r[j]||(b=b.concat(stringify(r[j],j,m,a,i,l?s:null,y,c,u,f,g,p)))}var O=b.join(n),w=!0===o.addQueryPrefix?"?":"";return 0<O.length?w+O:""},has$1=Object.prototype.hasOwnProperty,defaults$2={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:utils.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},parseValues=function(e,t){for(var r={},o=t.ignoreQueryPrefix?e.replace(/^\?/,""):e,n=t.parameterLimit===1/0?void 0:t.parameterLimit,a=o.split(t.delimiter,n),i=0;i<a.length;++i){var l,s,c=a[i],u=c.indexOf("]="),f=-1===u?c.indexOf("="):u+1;-1===f?(l=t.decoder(c,defaults$2.decoder),s=t.strictNullHandling?null:""):(l=t.decoder(c.slice(0,f),defaults$2.decoder),s=t.decoder(c.slice(f+1),defaults$2.decoder)),has$1.call(r,l)?r[l]=[].concat(r[l]).concat(s):r[l]=s}return r},parseObject=function(e,t,r){for(var o=t,n=e.length-1;0<=n;--n){var a,i=e[n];if("[]"===i)a=(a=[]).concat(o);else{a=r.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&0<=s&&r.parseArrays&&s<=r.arrayLimit?(a=[])[s]=o:a[l]=o}o=a}return o},parseKeys=function(e,t,r){if(e){var o=r.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(o),i=a?o.slice(0,a.index):o,l=[];if(i){if(!r.plainObjects&&has$1.call(Object.prototype,i)&&!r.allowPrototypes)return;l.push(i)}for(var s=0;null!==(a=n.exec(o))&&s<r.depth;){if(s+=1,!r.plainObjects&&has$1.call(Object.prototype,a[1].slice(1,-1))&&!r.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+o.slice(a.index)+"]"),parseObject(l,t,r)}},parse=function(e,t){var r=t?utils.assign({},t):{};if(null!==r.decoder&&void 0!==r.decoder&&"function"!=typeof r.decoder)throw new TypeError("Decoder has to be a function.");if(r.ignoreQueryPrefix=!0===r.ignoreQueryPrefix,r.delimiter="string"==typeof r.delimiter||utils.isRegExp(r.delimiter)?r.delimiter:defaults$2.delimiter,r.depth="number"==typeof r.depth?r.depth:defaults$2.depth,r.arrayLimit="number"==typeof r.arrayLimit?r.arrayLimit:defaults$2.arrayLimit,r.parseArrays=!1!==r.parseArrays,r.decoder="function"==typeof r.decoder?r.decoder:defaults$2.decoder,r.allowDots="boolean"==typeof r.allowDots?r.allowDots:defaults$2.allowDots,r.plainObjects="boolean"==typeof r.plainObjects?r.plainObjects:defaults$2.plainObjects,r.allowPrototypes="boolean"==typeof r.allowPrototypes?r.allowPrototypes:defaults$2.allowPrototypes,r.parameterLimit="number"==typeof r.parameterLimit?r.parameterLimit:defaults$2.parameterLimit,r.strictNullHandling="boolean"==typeof r.strictNullHandling?r.strictNullHandling:defaults$2.strictNullHandling,""===e||null==e)return r.plainObjects?Object.create(null):{};for(var o="string"==typeof e?parseValues(e,r):e,n=r.plainObjects?Object.create(null):{},a=Object.keys(o),i=0;i<a.length;++i){var l=a[i],s=parseKeys(l,o[l],r);n=utils.merge(n,s,r)}return utils.compact(n)},lib={formats:formats,parse:parse,stringify:stringify_1},page={toURL:function(e){var t=e.route,r=e.options,o=void 0===r?{}:r;return"/"+t+(Object.keys(o).length?"?"+lib.stringify(o):"")}},storage=new Storage(consts.prefix+"pages"),MAX_PAGES=5,currentPages={whiteList:[],addWhiteList:function(e){this.whiteList=[].concat(toConsumableArray(this.whiteList),toConsumableArray(e))},storePages:function(){var e=this,t=getCurrentPages(),r=t[t.length-1],o=r.route,n=r.options,a=storage.get()||[];e.whiteList.includes(o)||0<a.length&&a[a.length-1].route===o||(a.length>=MAX_PAGES&&a.shift(),a.push({route:o,options:n,url:page.toURL({route:o,options:n})}),storage.set(a))},getPages:function(){return storage.get()},clearPages:function(){storage.clear()}},url={encode:function(e){return encodeURIComponent(e)},decode:function(e){return decodeURIComponent(e)}},utils$3={consts:consts,Storage:Storage,currentPages:currentPages,url:url,page:page},helpers={sleep:function(t){return new Promise(function(e){setTimeout(e,t)})}},index={wx:wx,utils:utils$3,helpers:helpers};module.exports=index;
//# sourceMappingURL=index.js.map
