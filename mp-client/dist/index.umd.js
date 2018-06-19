!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):e.mp=r()}(this,function(){"use strict";var e={prefix:"mp_client__"},t=function(){function n(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(e,r,t){return r&&n(e.prototype,r),t&&n(e,t),e}}(),r=function(){function r(e){!function(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}(this,r),this.key=e}return t(r,[{key:"set",value:function(e){wx.setStorageSync(this.key,e)}},{key:"get",value:function(){return wx.getStorageSync(this.key)||""}},{key:"remove",value:function(){wx.removeStorageSync(this.key)}},{key:"clear",value:function(){wx.clearStorageSync()}}]),r}(),a=Object.prototype.hasOwnProperty,i=function(){for(var e=[],r=0;r<256;++r)e.push("%"+((r<16?"0":"")+r.toString(16)).toUpperCase());return e}(),c=function(e,r){for(var t=r&&r.plainObjects?Object.create(null):{},n=0;n<e.length;++n)void 0!==e[n]&&(t[n]=e[n]);return t},w={arrayToObject:c,assign:function(e,t){return Object.keys(t).reduce(function(e,r){return e[r]=t[r],e},e)},compact:function(e){for(var r=[{obj:{o:e},prop:"o"}],t=[],n=0;n<r.length;++n)for(var o=r[n],i=o.obj[o.prop],a=Object.keys(i),c=0;c<a.length;++c){var u=a[c],f=i[u];"object"==typeof f&&null!==f&&-1===t.indexOf(f)&&(r.push({obj:i,prop:u}),t.push(f))}return function(e){for(var r;e.length;){var t=e.pop();if(r=t.obj[t.prop],Array.isArray(r)){for(var n=[],o=0;o<r.length;++o)void 0!==r[o]&&n.push(r[o]);t.obj[t.prop]=n}}return r}(r)},decode:function(r){try{return decodeURIComponent(r.replace(/\+/g," "))}catch(e){return r}},encode:function(e){if(0===e.length)return e;for(var r="string"==typeof e?e:String(e),t="",n=0;n<r.length;++n){var o=r.charCodeAt(n);45===o||46===o||95===o||126===o||48<=o&&o<=57||65<=o&&o<=90||97<=o&&o<=122?t+=r.charAt(n):o<128?t+=i[o]:o<2048?t+=i[192|o>>6]+i[128|63&o]:o<55296||57344<=o?t+=i[224|o>>12]+i[128|o>>6&63]+i[128|63&o]:(n+=1,o=65536+((1023&o)<<10|1023&r.charCodeAt(n)),t+=i[240|o>>18]+i[128|o>>12&63]+i[128|o>>6&63]+i[128|63&o])}return t},isBuffer:function(e){return null!=e&&!!(e.constructor&&e.constructor.isBuffer&&e.constructor.isBuffer(e))},isRegExp:function(e){return"[object RegExp]"===Object.prototype.toString.call(e)},merge:function n(t,o,i){if(!o)return t;if("object"!=typeof o){if(Array.isArray(t))t.push(o);else{if("object"!=typeof t)return[t,o];(i.plainObjects||i.allowPrototypes||!a.call(Object.prototype,o))&&(t[o]=!0)}return t}if("object"!=typeof t)return[t].concat(o);var e=t;return Array.isArray(t)&&!Array.isArray(o)&&(e=c(t,i)),Array.isArray(t)&&Array.isArray(o)?(o.forEach(function(e,r){a.call(t,r)?t[r]&&"object"==typeof t[r]?t[r]=n(t[r],e,i):t.push(e):t[r]=e}),t):Object.keys(o).reduce(function(e,r){var t=o[r];return a.call(e,r)?e[r]=n(e[r],t,i):e[r]=t,e},e)}},n=String.prototype.replace,o=/%20/g,A={default:"RFC3986",formatters:{RFC1738:function(e){return n.call(e,o,"+")},RFC3986:function(e){return e}},RFC1738:"RFC1738",RFC3986:"RFC3986"},S={brackets:function(e){return e+"[]"},indices:function(e,r){return e+"["+r+"]"},repeat:function(e){return e}},u=Date.prototype.toISOString,C={delimiter:"&",encode:!0,encoder:w.encode,encodeValuesOnly:!1,serializeDate:function(e){return u.call(e)},skipNulls:!1,strictNullHandling:!1},x=function e(r,t,n,o,i,a,c,u,f,l,s,p){var y=r;if("function"==typeof c)y=c(t,y);else if(y instanceof Date)y=l(y);else if(null===y){if(o)return a&&!p?a(t,C.encoder):t;y=""}if("string"==typeof y||"number"==typeof y||"boolean"==typeof y||w.isBuffer(y))return a?[s(p?t:a(t,C.encoder))+"="+s(a(y,C.encoder))]:[s(t)+"="+s(String(y))];var d,g=[];if(void 0===y)return g;if(Array.isArray(c))d=c;else{var v=Object.keys(y);d=u?v.sort(u):v}for(var b=0;b<d.length;++b){var h=d[b];i&&null===y[h]||(g=Array.isArray(y)?g.concat(e(y[h],n(t,h),n,o,i,a,c,u,f,l,s,p)):g.concat(e(y[h],t+(f?"."+h:"["+h+"]"),n,o,i,a,c,u,f,l,s,p)))}return g},f=(Object.prototype.hasOwnProperty,function(e,r){var t=e,n=r?w.assign({},r):{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var o=void 0===n.delimiter?C.delimiter:n.delimiter,i="boolean"==typeof n.strictNullHandling?n.strictNullHandling:C.strictNullHandling,a="boolean"==typeof n.skipNulls?n.skipNulls:C.skipNulls,c="boolean"==typeof n.encode?n.encode:C.encode,u="function"==typeof n.encoder?n.encoder:C.encoder,f="function"==typeof n.sort?n.sort:null,l=void 0!==n.allowDots&&n.allowDots,s="function"==typeof n.serializeDate?n.serializeDate:C.serializeDate,p="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:C.encodeValuesOnly;if(void 0===n.format)n.format=A.default;else if(!Object.prototype.hasOwnProperty.call(A.formatters,n.format))throw new TypeError("Unknown format option provided.");var y,d,g=A.formatters[n.format];"function"==typeof n.filter?t=(d=n.filter)("",t):Array.isArray(n.filter)&&(y=d=n.filter);var v,b=[];if("object"!=typeof t||null===t)return"";v=n.arrayFormat in S?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var h=S[v];y||(y=Object.keys(t)),f&&y.sort(f);for(var j=0;j<y.length;++j){var m=y[j];a&&null===t[m]||(b=b.concat(x(t[m],m,h,i,a,c?u:null,d,f,l,s,g,p)))}var O=b.join(o),k=!0===n.addQueryPrefix?"?":"";return 0<O.length?k+O:""}),l={toURL:function(e){var r=e.route,t=e.options,n=void 0===t?{}:t;return"/"+r+(Object.keys(n).length?"?"+f(n):"")}},s=new r(e.prefix+"pages");return{wx:wx,utils:{consts:e,Storage:r,currentPages:{storePages:function(){var e=getCurrentPages(),r=e[e.length-1],t=r.route,n=r.options,o=s.get()||[];5<=o.length&&o.shift(),o.push({route:t,options:n,url:l.toURL({route:t,options:n})}),s.set(o)},getPages:function(){return s.get()},clearPages:function(){s.clear()}},url:{encode:function(e){return encodeURIComponent(e)},decode:function(e){return decodeURIComponent(e)}},page:l}}});
//# sourceMappingURL=index.umd.js.map
