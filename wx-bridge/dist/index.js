"use strict";var isMP=function(){return!!wx},helpers={promisify:function(n,t){return new Promise(function(e,o){wx[n](Object.assign({},t,{success:e,fail:o}))})},qy:{promisify:function(n,t){return new Promise(function(e,o){wx.qy[n](Object.assign({},t,{success:e,fail:o}))})}}},request=function(e){return helpers.promisify("request",e)},setStorageSync=wx.setStorageSync,getStorageSync=wx.getStorageSync,removeStorageSync=wx.removeStorageSync,getSetting=function(e){return helpers.promisify("getSetting",e)},getUserInfo=function(e){return helpers.promisify("getUserInfo",e)},checkSession=function(e){return helpers.qy.promisify("checkSession",e)},login=function(e){return helpers.promisify("login",e)},navigateTo=function(e){return helpers.promisify("navigateTo",e)},redirectTo=function(e){return helpers.promisify("redirectTo",e)},switchTab=function(e){return helpers.promisify("switchTab",e)},reLaunch=function(e){return helpers.promisify("reLaunch",e)},requestPayment=function(e){return helpers.promisify("requestPayment",e)},showActionSheet=function(e){return helpers.promisify("showActionSheet",e)},showLoading=function(e){return helpers.promisify("showLoading",e)},showModal=function(e){return helpers.promisify("showModal",e)},showToast=function(e){return helpers.promisify("showToast",e)},hideLoading=function(e){return helpers.promisify("hideLoading",e)},hideToast=function(e){return helpers.promisify("hideToast",e)},getImageInfo=function(e){return helpers.promisify("getImageInfo",e)},createCanvasContext=wx.createCanvasContext,setClipboardData=function(e){return helpers.promisify("setClipboardData",e)},makePhoneCall=function(e){return helpers.promisify("makePhoneCall",e)},getLocation=function(e){return helpers.promisify("getLocation",e)},openLocation=function(e){return helpers.promisify("openLocation",e)},scanCode=function(e){return helpers.promisify("scanCode",e)},chooseImage=function(e){return helpers.promisify("chooseImage",e)},chooseVideo=function(e){return helpers.promisify("chooseVideo",e)},uploadFile=function(e){return helpers.promisify("uploadFile",e)},navigateBack=function(e){return helpers.promisify("navigateBack",e)},downloadFile=function(e){return helpers.promisify("downloadFile",e)},saveImageToPhotosAlbum=function(e){return helpers.promisify("saveImageToPhotosAlbum",e)},setNavigationBarTitle=function(e){return helpers.promisify("setNavigationBarTitle",e)},getSystemInfoSync=wx.getSystemInfoSync,previewImage=wx.previewImage,checkSession$1=function(e){return helpers.qy.promisify("checkSession",e)},login$1=function(e){return helpers.qy.promisify("login",e)},getEnterpriseUserInfo=function(e){return helpers.qy.promisify("getEnterpriseUserInfo",e)},getMobile=function(e){return helpers.qy.promisify("getMobile",e)},qy={checkSession:checkSession$1,login:login$1,getEnterpriseUserInfo:getEnterpriseUserInfo,getMobile:getMobile},index={isMP:isMP,request:request,setStorageSync:setStorageSync,getStorageSync:getStorageSync,removeStorageSync:removeStorageSync,getSetting:getSetting,getUserInfo:getUserInfo,checkSession:checkSession,login:login,navigateTo:navigateTo,redirectTo:redirectTo,switchTab:switchTab,reLaunch:reLaunch,requestPayment:requestPayment,showActionSheet:showActionSheet,showLoading:showLoading,showModal:showModal,showToast:showToast,hideLoading:hideLoading,hideToast:hideToast,getImageInfo:getImageInfo,createCanvasContext:createCanvasContext,setClipboardData:setClipboardData,makePhoneCall:makePhoneCall,getLocation:getLocation,openLocation:openLocation,scanCode:scanCode,chooseImage:chooseImage,chooseVideo:chooseVideo,uploadFile:uploadFile,navigateBack:navigateBack,downloadFile:downloadFile,saveImageToPhotosAlbum:saveImageToPhotosAlbum,setNavigationBarTitle:setNavigationBarTitle,getSystemInfoSync:getSystemInfoSync,previewImage:previewImage,qy:qy};module.exports=index;
//# sourceMappingURL=index.js.map
