"use strict";var prefix="mp_client__",consts={prefix:prefix},classCallCheck=function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")},createClass=function(){function o(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(e,r,t){return r&&o(e.prototype,r),t&&o(e,t),e}}(),Storage=function(){function r(e){classCallCheck(this,r),this.key=e}return createClass(r,[{key:"set",value:function(e){wx.setStorageSync(this.key,e)}},{key:"get",value:function(){return wx.getStorageSync(this.key)||""}},{key:"remove",value:function(){wx.removeStorageSync(this.key)}},{key:"clear",value:function(){wx.clearStorageSync()}}]),r}(),has=Object.prototype.hasOwnProperty,hexTable=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),compactQueue=function(e){for(var r;e.length;){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var o=[],n=0;n<r.length;++n)void 0!==r[n]&&o.push(r[n]);t.obj[t.prop]=o}}return r},arrayToObject=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},o=0;o<e.length;++o)void 0!==e[o]&&(t[o]=e[o]);return t},merge=function o(t,n,a){if(!n)return t;if("object"!=typeof n){if(Array.isArray(t))t.push(n);else{if("object"!=typeof t)return[t,n];(a.plainObjects||a.allowPrototypes||!has.call(Object.prototype,n))&&(t[n]=!0)}return t}if("object"!=typeof t)return[t].concat(n);var e=t;return Array.isArray(t)&&!Array.isArray(n)&&(e=arrayToObject(t,a)),Array.isArray(t)&&Array.isArray(n)?(n.forEach(function(e,r){has.call(t,r)?t[r]&&"object"==typeof t[r]?t[r]=o(t[r],e,a):t.push(e):t[r]=e}),t):Object.keys(n).reduce(function(e,r){var t=n[r];return has.call(e,r)?e[r]=o(e[r],t,a):e[r]=t,e},e)},assign=function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},decode=function(r){try{return decodeURIComponent(r.replace(/\+/g," "))}catch(e){return r}},encode=function(e){if(0===e.length)return e;for(var r="string"==typeof e?e:String(e),t="",o=0;o<r.length;++o){var n=r.charCodeAt(o);45===n||46===n||95===n||126===n||48<=n&&n<=57||65<=n&&n<=90||97<=n&&n<=122?t+=r.charAt(o):n<128?t+=hexTable[n]:n<2048?t+=hexTable[192|n>>6]+hexTable[128|63&n]:n<55296||57344<=n?t+=hexTable[224|n>>12]+hexTable[128|n>>6&63]+hexTable[128|63&n]:(o+=1,n=65536+((1023&n)<<10|1023&r.charCodeAt(o)),t+=hexTable[240|n>>18]+hexTable[128|n>>12&63]+hexTable[128|n>>6&63]+hexTable[128|63&n])}return t},compact=function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],o=0;o<r.length;++o)for(var n=r[o],a=n.obj[n.prop],i=Object.keys(a),l=0;l<i.length;++l){var s=i[l],c=a[s];"object"==typeof c&&null!==c&&-1===t.indexOf(c)&&(r.push({obj:a,prop:s}),t.push(c))}return compactQueue(r)},isRegExp=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},isBuffer=function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},utils={arrayToObject:arrayToObject,assign:assign,compact:compact,decode:decode,encode:encode,isBuffer:isBuffer,isRegExp:isRegExp,merge:merge},replace=String.prototype.replace,percentTwenties=/%20/g,formats={default:"RFC3986",formatters:{RFC1738:function(e){return replace.call(e,percentTwenties,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"},arrayPrefixGenerators={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},toISO=Date.prototype.toISOString,defaults$1={delimiter:"&",encode:!0,encoder:utils.encode,encodeValuesOnly:!1,serializeDate:function(e){return toISO.call(e)},skipNulls:!1,strictNullHandling:!1},stringify=function e(r,t,o,n,a,i,l,s,c,u,f,p){var d=r;if("function"==typeof l)d=l(t,d);else if(d instanceof Date)d=u(d);else if(null===d){if(n)return i&&!p?i(t,defaults$1.encoder):t;d=""}if("string"==typeof d||"number"==typeof d||"boolean"==typeof d||utils.isBuffer(d))return i?[f(p?t:i(t,defaults$1.encoder))+"="+f(i(d,defaults$1.encoder))]:[f(t)+"="+f(String(d))];var y,g=[];if(void 0===d)return g;if(Array.isArray(l))y=l;else{var b=Object.keys(d);y=s?b.sort(s):b}for(var h=0;h<y.length;++h){var m=y[h];a&&null===d[m]||(g=Array.isArray(d)?g.concat(e(d[m],o(t,m),o,n,a,i,l,s,c,u,f,p)):g.concat(e(d[m],t+(c?"."+m:"["+m+"]"),o,n,a,i,l,s,c,u,f,p)))}return g},stringify_1=function(e,r){var t=e,o=r?utils.assign({},r):{};if(null!==o.encoder&&void 0!==o.encoder&&"function"!=typeof o.encoder)throw new TypeError("Encoder has to be a function.");var n=void 0===o.delimiter?defaults$1.delimiter:o.delimiter,a="boolean"==typeof o.strictNullHandling?o.strictNullHandling:defaults$1.strictNullHandling,i="boolean"==typeof o.skipNulls?o.skipNulls:defaults$1.skipNulls,l="boolean"==typeof o.encode?o.encode:defaults$1.encode,s="function"==typeof o.encoder?o.encoder:defaults$1.encoder,c="function"==typeof o.sort?o.sort:null,u=void 0!==o.allowDots&&o.allowDots,f="function"==typeof o.serializeDate?o.serializeDate:defaults$1.serializeDate,p="boolean"==typeof o.encodeValuesOnly?o.encodeValuesOnly:defaults$1.encodeValuesOnly;if(void 0===o.format)o.format=formats.default;else if(!Object.prototype.hasOwnProperty.call(formats.formatters,o.format))throw new TypeError("Unknown format option provided.");var d,y,g=formats.formatters[o.format];"function"==typeof o.filter?t=(y=o.filter)("",t):Array.isArray(o.filter)&&(d=y=o.filter);var b,h=[];if("object"!=typeof t||null===t)return"";b=o.arrayFormat in arrayPrefixGenerators?o.arrayFormat:"indices"in o?o.indices?"indices":"repeat":"indices";var m=arrayPrefixGenerators[b];d||(d=Object.keys(t)),c&&d.sort(c);for(var v=0;v<d.length;++v){var j=d[v];i&&null===t[j]||(h=h.concat(stringify(t[j],j,m,a,i,l?s:null,y,c,u,f,g,p)))}var O=h.join(n),x=!0===o.addQueryPrefix?"?":"";return 0<O.length?x+O:""},has$1=Object.prototype.hasOwnProperty,defaults$2={allowDots:!1,allowPrototypes:!1,arrayLimit:20,decoder:utils.decode,delimiter:"&",depth:5,parameterLimit:1e3,plainObjects:!1,strictNullHandling:!1},parseValues=function(e,r){for(var t={},o=r.ignoreQueryPrefix?e.replace(/^\?/,""):e,n=r.parameterLimit===1/0?void 0:r.parameterLimit,a=o.split(r.delimiter,n),i=0;i<a.length;++i){var l,s,c=a[i],u=c.indexOf("]="),f=-1===u?c.indexOf("="):u+1;-1===f?(l=r.decoder(c,defaults$2.decoder),s=r.strictNullHandling?null:""):(l=r.decoder(c.slice(0,f),defaults$2.decoder),s=r.decoder(c.slice(f+1),defaults$2.decoder)),has$1.call(t,l)?t[l]=[].concat(t[l]).concat(s):t[l]=s}return t},parseObject=function(e,r,t){for(var o=r,n=e.length-1;0<=n;--n){var a,i=e[n];if("[]"===i)a=(a=[]).concat(o);else{a=t.plainObjects?Object.create(null):{};var l="["===i.charAt(0)&&"]"===i.charAt(i.length-1)?i.slice(1,-1):i,s=parseInt(l,10);!isNaN(s)&&i!==l&&String(s)===l&&0<=s&&t.parseArrays&&s<=t.arrayLimit?(a=[])[s]=o:a[l]=o}o=a}return o},parseKeys=function(e,r,t){if(e){var o=t.allowDots?e.replace(/\.([^.[]+)/g,"[$1]"):e,n=/(\[[^[\]]*])/g,a=/(\[[^[\]]*])/.exec(o),i=a?o.slice(0,a.index):o,l=[];if(i){if(!t.plainObjects&&has$1.call(Object.prototype,i)&&!t.allowPrototypes)return;l.push(i)}for(var s=0;null!==(a=n.exec(o))&&s<t.depth;){if(s+=1,!t.plainObjects&&has$1.call(Object.prototype,a[1].slice(1,-1))&&!t.allowPrototypes)return;l.push(a[1])}return a&&l.push("["+o.slice(a.index)+"]"),parseObject(l,r,t)}},parse=function(e,r){var t=r?utils.assign({},r):{};if(null!==t.decoder&&void 0!==t.decoder&&"function"!=typeof t.decoder)throw new TypeError("Decoder has to be a function.");if(t.ignoreQueryPrefix=!0===t.ignoreQueryPrefix,t.delimiter="string"==typeof t.delimiter||utils.isRegExp(t.delimiter)?t.delimiter:defaults$2.delimiter,t.depth="number"==typeof t.depth?t.depth:defaults$2.depth,t.arrayLimit="number"==typeof t.arrayLimit?t.arrayLimit:defaults$2.arrayLimit,t.parseArrays=!1!==t.parseArrays,t.decoder="function"==typeof t.decoder?t.decoder:defaults$2.decoder,t.allowDots="boolean"==typeof t.allowDots?t.allowDots:defaults$2.allowDots,t.plainObjects="boolean"==typeof t.plainObjects?t.plainObjects:defaults$2.plainObjects,t.allowPrototypes="boolean"==typeof t.allowPrototypes?t.allowPrototypes:defaults$2.allowPrototypes,t.parameterLimit="number"==typeof t.parameterLimit?t.parameterLimit:defaults$2.parameterLimit,t.strictNullHandling="boolean"==typeof t.strictNullHandling?t.strictNullHandling:defaults$2.strictNullHandling,""===e||null==e)return t.plainObjects?Object.create(null):{};for(var o="string"==typeof e?parseValues(e,t):e,n=t.plainObjects?Object.create(null):{},a=Object.keys(o),i=0;i<a.length;++i){var l=a[i],s=parseKeys(l,o[l],t);n=utils.merge(n,s,t)}return utils.compact(n)},lib={formats:formats,parse:parse,stringify:stringify_1},page={toURL:function(e){var r=e.route,t=e.options,o=void 0===t?{}:t;return"/"+r+(Object.keys(o).length?"?"+lib.stringify(o):"")}},storage=new Storage(consts.prefix+"pages"),MAX_PAGES=5,currentPages={storePages:function(){var e=getCurrentPages(),r=e[e.length-1],t=r.route,o=r.options,n=storage.get()||[];n.length>=MAX_PAGES&&n.shift(),n.push({route:t,options:o,url:page.toURL({route:t,options:o})}),storage.set(n)},getPages:function(){return storage.get()},clearPages:function(){storage.clear()}},url={encode:function(e){return encodeURIComponent(e)},decode:function(e){return decodeURIComponent(e)}},utils$3={consts:consts,Storage:Storage,currentPages:currentPages,url:url,page:page},index={wx:wx,utils:utils$3};module.exports=index;
//# sourceMappingURL=index.js.map