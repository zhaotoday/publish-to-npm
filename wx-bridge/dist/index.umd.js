!function(n,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):n.wxb=e()}(this,function(){"use strict";var e=function(t,o){return new Promise(function(n,e){wx[t](Object.assign({},o,{success:n,fail:e}))})},t={promisify:function(t,o){return new Promise(function(n,e){wx.qy[t](Object.assign({},o,{success:n,fail:e}))})}};return{isMP:function(){return!!wx},request:function(n){return e("request",n)},setStorageSync:wx.setStorageSync,getStorageSync:wx.getStorageSync,removeStorageSync:wx.removeStorageSync,getSetting:function(n){return e("getSetting",n)},getUserInfo:function(n){return e("getUserInfo",n)},checkSession:function(n){return t.promisify("checkSession",n)},login:function(n){return e("login",n)},navigateTo:function(n){return e("navigateTo",n)},redirectTo:function(n){return e("redirectTo",n)},switchTab:function(n){return e("switchTab",n)},reLaunch:function(n){return e("reLaunch",n)},requestPayment:function(n){return e("requestPayment",n)},showActionSheet:function(n){return e("showActionSheet",n)},showLoading:function(n){return e("showLoading",n)},showModal:function(n){return e("showModal",n)},showToast:function(n){return e("showToast",n)},hideLoading:function(n){return e("hideLoading",n)},hideToast:function(n){return e("hideToast",n)},getImageInfo:function(n){return e("getImageInfo",n)},createCanvasContext:wx.createCanvasContext,setClipboardData:function(n){return e("setClipboardData",n)},makePhoneCall:function(n){return e("makePhoneCall",n)},getLocation:function(n){return e("getLocation",n)},openLocation:function(n){return e("openLocation",n)},scanCode:function(n){return e("scanCode",n)},chooseImage:function(n){return e("chooseImage",n)},chooseVideo:function(n){return e("chooseVideo",n)},uploadFile:function(n){return e("uploadFile",n)},navigateBack:function(n){return e("navigateBack",n)},downloadFile:function(n){return e("downloadFile",n)},saveImageToPhotosAlbum:function(n){return e("saveImageToPhotosAlbum",n)},setNavigationBarTitle:function(n){return e("setNavigationBarTitle",n)},getSystemInfoSync:wx.getSystemInfoSync,previewImage:function(n){return e("previewImage",n)},openSetting:function(n){return e("openSetting",n)},chooseLocation:function(n){return e("chooseLocation",n)},chooseMessageFile:function(n){return e("chooseMessageFile",n)},saveFile:function(n){return e("saveFile",n)},qy:{checkSession:function(n){return t.promisify("checkSession",n)},login:function(n){return t.promisify("login",n)},getEnterpriseUserInfo:function(n){return t.promisify("getEnterpriseUserInfo",n)},getMobile:function(n){return t.promisify("getMobile",n)}}}});
//# sourceMappingURL=index.umd.js.map
