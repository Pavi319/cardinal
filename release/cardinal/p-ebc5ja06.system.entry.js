System.register(["./p-64181eed.system.js","./p-8918d7a0.system.js","./p-b61fafe4.system.js","./p-bc92a123.system.js"],(function(e){"use strict";var t,n,r;return{setters:[function(e){t=e.r;n=e.h},function(){},function(){},function(e){r=e.T}],execute:function(){var o=undefined&&undefined.__decorate||function(e,t,n,r){var o=arguments.length,i=o<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,s;if(typeof Reflect==="object"&&typeof Reflect.decorate==="function")i=Reflect.decorate(e,t,n,r);else for(var a=e.length-1;a>=0;a--)if(s=e[a])i=(o<3?s(i):o>3?s(t,n,i):s(t,n))||i;return o>3&&i&&Object.defineProperty(t,n,i),i};var i=e("psk_page_loader",function(){function e(e){t(this,e);this.errorLoadingPage=false}e.prototype.componentWillLoad=function(){var e=this;var t=new XMLHttpRequest;t.open("GET",this.pageUrl);t.onload=function(){if(t.status!=200){e.errorLoadingPage=true}else{e.pageContent=t.responseText}};t.onerror=function(){e.errorLoadingPage=true};t.send()};e.prototype.render=function(){return this.errorLoadingPage?n("h4",null,"Page "+this.pageUrl+" could not be loaded!"):n("div",{class:"page_content",innerHTML:this.pageContent})};return e}());o([r({description:"This property is the url for the page that needs to be loaded",isMandatory:true,propertyType:"string"})],i.prototype,"pageUrl",void 0)}}}));