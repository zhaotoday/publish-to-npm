!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.env=e()}(this,function(){"use strict";var e="DEV",n="TEST",i="BETA",o="PROD";return{_get:function(){var t=window.location.hostname;switch(t){case"127.0.0.1":case"localhost":return e;default:return/\.test\.liruan\.cn$/.test(t)?n:/\.beta\.liruan\.cn$/.test(t)?i:(/\.prod\.liruan\.cn$/.test(t),o)}},isDev:function(){return this._get()===e},isTest:function(){return this._get()===n},isBeta:function(){return this._get()===i},isProd:function(){return this._get()===o}}});
//# sourceMappingURL=index.umd.js.map