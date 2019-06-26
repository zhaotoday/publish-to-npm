!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.mp=e()}(this,function(){"use strict";var t=function(){function n(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}}(),e=function(){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),this.key=t}return t(e,[{key:"set",value:function(t){wx.setStorageSync(this.key,t)}},{key:"get",value:function(){return wx.getStorageSync(this.key)||""}},{key:"remove",value:function(){wx.removeStorageSync(this.key)}},{key:"clear",value:function(){wx.clearStorageSync()}}]),e}(),r={encode:function(t){return encodeURIComponent(t)},decode:function(t){return decodeURIComponent(t)}},a=Object.prototype.hasOwnProperty,o=function(){for(var t=[],e=0;e<256;++e)t.push("%"+((e<16?"0":"")+e.toString(16)).toUpperCase());return t}(),s=function(t,e){for(var r=e&&e.plainObjects?Object.create(null):{},n=0;n<t.length;++n)void 0!==t[n]&&(r[n]=t[n]);return r},D={arrayToObject:s,assign:function(t,r){return Object.keys(r).reduce(function(t,e){return t[e]=r[e],t},t)},compact:function(t){for(var e=[{obj:{o:t},prop:"o"}],r=[],n=0;n<e.length;++n)for(var i=e[n],o=i.obj[i.prop],a=Object.keys(o),s=0;s<a.length;++s){var u=a[s],c=o[u];"object"==typeof c&&null!==c&&-1===r.indexOf(c)&&(e.push({obj:o,prop:u}),r.push(c))}return function(t){for(var e;t.length;){var r=t.pop();if(e=r.obj[r.prop],Array.isArray(e)){for(var n=[],i=0;i<e.length;++i)void 0!==e[i]&&n.push(e[i]);r.obj[r.prop]=n}}return e}(e)},decode:function(e){try{return decodeURIComponent(e.replace(/\+/g," "))}catch(t){return e}},encode:function(t){if(0===t.length)return t;for(var e="string"==typeof t?t:String(t),r="",n=0;n<e.length;++n){var i=e.charCodeAt(n);45===i||46===i||95===i||126===i||48<=i&&i<=57||65<=i&&i<=90||97<=i&&i<=122?r+=e.charAt(n):i<128?r+=o[i]:i<2048?r+=o[192|i>>6]+o[128|63&i]:i<55296||57344<=i?r+=o[224|i>>12]+o[128|i>>6&63]+o[128|63&i]:(n+=1,i=65536+((1023&i)<<10|1023&e.charCodeAt(n)),r+=o[240|i>>18]+o[128|i>>12&63]+o[128|i>>6&63]+o[128|63&i])}return r},isBuffer:function(t){return null!=t&&!!(t.constructor&&t.constructor.isBuffer&&t.constructor.isBuffer(t))},isRegExp:function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},merge:function n(r,i,o){if(!i)return r;if("object"!=typeof i){if(Array.isArray(r))r.push(i);else{if("object"!=typeof r)return[r,i];(o.plainObjects||o.allowPrototypes||!a.call(Object.prototype,i))&&(r[i]=!0)}return r}if("object"!=typeof r)return[r].concat(i);var t=r;return Array.isArray(r)&&!Array.isArray(i)&&(t=s(r,o)),Array.isArray(r)&&Array.isArray(i)?(i.forEach(function(t,e){a.call(r,e)?r[e]&&"object"==typeof r[e]?r[e]=n(r[e],t,o):r.push(t):r[e]=t}),r):Object.keys(i).reduce(function(t,e){var r=i[e];return a.call(t,e)?t[e]=n(t[e],r,o):t[e]=r,t},t)}},n=String.prototype.replace,i=/%20/g,k={default:"RFC3986",formatters:{RFC1738:function(t){return n.call(t,i,"+")},RFC3986:function(t){return t}},RFC1738:"RFC1738",RFC3986:"RFC3986"},w={brackets:function(t){return t+"[]"},indices:function(t,e){return t+"["+e+"]"},repeat:function(t){return t}},u=Date.prototype.toISOString,O={delimiter:"&",encode:!0,encoder:D.encode,encodeValuesOnly:!1,serializeDate:function(t){return u.call(t)},skipNulls:!1,strictNullHandling:!1},j=function t(e,r,n,i,o,a,s,u,c,f,l,d){var h=e;if("function"==typeof s)h=s(r,h);else if(h instanceof Date)h=f(h);else if(null===h){if(i)return a&&!d?a(r,O.encoder):r;h=""}if("string"==typeof h||"number"==typeof h||"boolean"==typeof h||D.isBuffer(h))return a?[l(d?r:a(r,O.encoder))+"="+l(a(h,O.encoder))]:[l(r)+"="+l(String(h))];var p,y=[];if(void 0===h)return y;if(Array.isArray(s))p=s;else{var $=Object.keys(h);p=u?$.sort(u):$}for(var m=0;m<p.length;++m){var g=p[m];o&&null===h[g]||(y=Array.isArray(h)?y.concat(t(h[g],n(r,g),n,i,o,a,s,u,c,f,l,d)):y.concat(t(h[g],r+(c?"."+g:"["+g+"]"),n,i,o,a,s,u,c,f,l,d)))}return y},c=(Object.prototype.hasOwnProperty,function(t,e){var r=t,n=e?D.assign({},e):{};if(null!==n.encoder&&void 0!==n.encoder&&"function"!=typeof n.encoder)throw new TypeError("Encoder has to be a function.");var i=void 0===n.delimiter?O.delimiter:n.delimiter,o="boolean"==typeof n.strictNullHandling?n.strictNullHandling:O.strictNullHandling,a="boolean"==typeof n.skipNulls?n.skipNulls:O.skipNulls,s="boolean"==typeof n.encode?n.encode:O.encode,u="function"==typeof n.encoder?n.encoder:O.encoder,c="function"==typeof n.sort?n.sort:null,f=void 0!==n.allowDots&&n.allowDots,l="function"==typeof n.serializeDate?n.serializeDate:O.serializeDate,d="boolean"==typeof n.encodeValuesOnly?n.encodeValuesOnly:O.encodeValuesOnly;if(void 0===n.format)n.format=k.default;else if(!Object.prototype.hasOwnProperty.call(k.formatters,n.format))throw new TypeError("Unknown format option provided.");var h,p,y=k.formatters[n.format];"function"==typeof n.filter?r=(p=n.filter)("",r):Array.isArray(n.filter)&&(h=p=n.filter);var $,m=[];if("object"!=typeof r||null===r)return"";$=n.arrayFormat in w?n.arrayFormat:"indices"in n?n.indices?"indices":"repeat":"indices";var g=w[$];h||(h=Object.keys(r)),c&&h.sort(c);for(var b=0;b<h.length;++b){var v=h[b];a&&null===r[v]||(m=m.concat(j(r[v],v,g,o,a,s?u:null,p,c,f,l,y,d)))}var S=m.join(i),M=!0===n.addQueryPrefix?"?":"";return 0<S.length?M+S:""}),f={toURL:function(t){var e=t.route,r=t.options,n=void 0===r?{}:r;return"/"+e+(Object.keys(n).length?"?"+c(n):"")}};"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var l,d=(function(t,e){t.exports=function(){var r="millisecond",s="second",u="minute",c="hour",f="day",l="week",d="month",h="year",n=/^(\d{4})-?(\d{1,2})-?(\d{0,2})(.*?(\d{1,2}):(\d{1,2}):(\d{1,2}))?.?(\d{1,3})?$/,p=/\[.*?\]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,t={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_")},i=function(t,e,r){var n=String(t);return!n||n.length>=e?t:""+Array(e+1-n.length).join(r)+t},e={padStart:i,padZoneStr:function(t){var e=Math.abs(t),r=Math.floor(e/60),n=e%60;return(t<=0?"+":"-")+i(r,2,"0")+":"+i(n,2,"0")},monthDiff:function(t,e){var r=12*(e.year()-t.year())+(e.month()-t.month()),n=t.clone().add(r,"months"),i=e-n<0,o=t.clone().add(r+(i?-1:1),"months");return Number(-(r+(e-n)/(i?n-o:o-n)))},absFloor:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},prettyUnit:function(t){return{M:d,y:h,w:l,d:f,h:c,m:u,s:s,ms:r}[t]||String(t||"").toLowerCase().replace(/s$/,"")},isUndefined:function(t){return void 0===t}},o="en",a={};a[o]=t;var y=function(t){return t instanceof v},$=function(t,e,r){var n;if(!t)return null;if("string"==typeof t)a[t]&&(n=t),e&&(a[t]=e,n=t);else{var i=t.name;a[i]=t,n=i}return r||(o=n),n},m=function(t,e){if(y(t))return t.clone();var r=e||{};return r.date=t,new v(r)},g=function(t,e){return m(t,{locale:e.$L})},b=e;b.parseLocale=$,b.isDayjs=y,b.wrapper=g;var v=function(){function t(t){this.parse(t)}var e=t.prototype;return e.parse=function(t){var e,r;this.$d=null===(e=t.date)?new Date(NaN):b.isUndefined(e)?new Date:e instanceof Date?e:"string"==typeof e&&/.*[^Z]$/i.test(e)&&(r=e.match(n))?new Date(r[1],r[2]-1,r[3]||1,r[5]||0,r[6]||0,r[7]||0,r[8]||0):new Date(e),this.init(t)},e.init=function(t){this.$y=this.$d.getFullYear(),this.$M=this.$d.getMonth(),this.$D=this.$d.getDate(),this.$W=this.$d.getDay(),this.$H=this.$d.getHours(),this.$m=this.$d.getMinutes(),this.$s=this.$d.getSeconds(),this.$ms=this.$d.getMilliseconds(),this.$L=this.$L||$(t.locale,null,!0)||o},e.$utils=function(){return b},e.isValid=function(){return!("Invalid Date"===this.$d.toString())},e.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0},e.$compare=function(t){return this.valueOf()-m(t).valueOf()},e.isSame=function(t){return 0===this.$compare(t)},e.isBefore=function(t){return this.$compare(t)<0},e.isAfter=function(t){return 0<this.$compare(t)},e.year=function(){return this.$y},e.month=function(){return this.$M},e.day=function(){return this.$W},e.date=function(){return this.$D},e.hour=function(){return this.$H},e.minute=function(){return this.$m},e.second=function(){return this.$s},e.millisecond=function(){return this.$ms},e.unix=function(){return Math.floor(this.valueOf()/1e3)},e.valueOf=function(){return this.$d.getTime()},e.startOf=function(t,e){var n=this,i=!!b.isUndefined(e)||e,r=function(t,e){var r=g(new Date(n.$y,e,t),n);return i?r:r.endOf(f)},o=function(t,e){return g(n.toDate()[t].apply(n.toDate(),i?[0,0,0,0].slice(e):[23,59,59,999].slice(e)),n)};switch(b.prettyUnit(t)){case h:return i?r(1,0):r(31,11);case d:return i?r(1,this.$M):r(0,this.$M+1);case l:return r(i?this.$D-this.$W:this.$D+(6-this.$W),this.$M);case f:case"date":return o("setHours",0);case c:return o("setMinutes",1);case u:return o("setSeconds",2);case s:return o("setMilliseconds",3);default:return this.clone()}},e.endOf=function(t){return this.startOf(t,!1)},e.$set=function(t,e){switch(b.prettyUnit(t)){case"date":this.$d.setDate(e);break;case d:this.$d.setMonth(e);break;case h:this.$d.setFullYear(e);break;case c:this.$d.setHours(e);break;case u:this.$d.setMinutes(e);break;case s:this.$d.setSeconds(e);break;case r:this.$d.setMilliseconds(e)}return this.init(),this},e.set=function(t,e){return this.clone().$set(t,e)},e.add=function(n,t){var i=this;n=Number(n);var e,r=b.prettyUnit(t),o=function(t,e){var r=i.set("date",1).set(t,e+n);return r.set("date",Math.min(i.$D,r.daysInMonth()))};if(r===d)return o(d,this.$M);if(r===h)return o(h,this.$y);switch(r){case u:e=6e4;break;case c:e=36e5;break;case f:e=864e5;break;case l:e=6048e5;break;case s:e=1e3;break;default:e=1}var a=this.valueOf()+n*e;return g(a,this)},e.subtract=function(t,e){return this.add(-1*t,e)},e.format=function(t){var e=this,r=t||"YYYY-MM-DDTHH:mm:ssZ",n=b.padZoneStr(this.$d.getTimezoneOffset()),i=this.$locale(),o=i.weekdays,a=i.months,s=function(t,e,r,n){return t&&t[e]||r[e].substr(0,n)};return r.replace(p,function(t){if(-1<t.indexOf("["))return t.replace(/\[|\]/g,"");switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return String(e.$y);case"M":return String(e.$M+1);case"MM":return b.padStart(e.$M+1,2,"0");case"MMM":return s(i.monthsShort,e.$M,a,3);case"MMMM":return a[e.$M];case"D":return String(e.$D);case"DD":return b.padStart(e.$D,2,"0");case"d":return String(e.$W);case"dd":return s(i.weekdaysMin,e.$W,o,2);case"ddd":return s(i.weekdaysShort,e.$W,o,3);case"dddd":return o[e.$W];case"H":return String(e.$H);case"HH":return b.padStart(e.$H,2,"0");case"h":case"hh":return 0===e.$H?12:b.padStart(e.$H<13?e.$H:e.$H-12,"hh"===t?2:1,"0");case"a":return e.$H<12?"am":"pm";case"A":return e.$H<12?"AM":"PM";case"m":return String(e.$m);case"mm":return b.padStart(e.$m,2,"0");case"s":return String(e.$s);case"ss":return b.padStart(e.$s,2,"0");case"SSS":return b.padStart(e.$ms,3,"0");case"Z":return n;default:return n.replace(":","")}})},e.diff=function(t,e,r){var n=b.prettyUnit(e),i=m(t),o=this-i,a=b.monthDiff(this,i);switch(n){case h:a/=12;break;case d:break;case"quarter":a/=3;break;case l:a=o/6048e5;break;case f:a=o/864e5;break;case c:a=o/36e5;break;case u:a=o/6e4;break;case s:a=o/1e3;break;default:a=o}return r?a:b.absFloor(a)},e.daysInMonth=function(){return this.endOf(d).$D},e.$locale=function(){return a[this.$L]},e.locale=function(t,e){var r=this.clone();return r.$L=$(t,e,!0),r},e.clone=function(){return g(this.toDate(),this)},e.toDate=function(){return new Date(this.$d)},e.toArray=function(){return[this.$y,this.$M,this.$D,this.$H,this.$m,this.$s,this.$ms]},e.toJSON=function(){return this.toISOString()},e.toISOString=function(){return this.toDate().toISOString()},e.toObject=function(){return{years:this.$y,months:this.$M,date:this.$D,hours:this.$H,minutes:this.$m,seconds:this.$s,milliseconds:this.$ms}},e.toString=function(){return this.$d.toUTCString()},t}();return m.extend=function(t,e){return t(e,v,m),m},m.locale=$,m.isDayjs=y,m.en=a[o],m}()}(l={exports:{}},l.exports),l.exports);return{wx:wx,utils:{Storage:e,url:r,page:f,time:{format:function(t,e){return d(t).format(e)},getDate:function(t){return d(t).format("YYYY-MM-DD")},getTime:function(t){return d(t).format("YYYY-MM-DD hh:mm")}}},helpers:{sleep:function(e){return new Promise(function(t){setTimeout(t,e)})}}}});
//# sourceMappingURL=index.umd.js.map
