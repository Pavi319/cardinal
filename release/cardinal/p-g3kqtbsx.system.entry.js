System.register(["./p-64181eed.system.js"],(function(t){"use strict";var e,i;return{setters:[function(t){e=t.r;i=t.h}],execute:function(){var n=t("psk_event_descriptor",function(){function t(t){e(this,t);this.title="";this.decoratorEvents=[]}t.prototype.receivedEventsDescription=function(t){var e=t.detail;t.stopImmediatePropagation();if(e&&e.length>0){this.decoratorEvents=JSON.parse(JSON.stringify(e))}};t.prototype.render=function(){var t=this.decoratorEvents.map((function(t){var e=t.eventName+": CustomEvent";return i("psk-hoc",{title:t.eventName},i("p",{class:"subtitle"},i("i",null,e)),i("p",null,t.description),t.specialNote?i("p",null,i("b",null,"Note: ",t.specialNote)):null)}));return i("psk-chapter",{title:this.title,id:this.title.replace(/( |:|\/|\.)/g,"-").toLowerCase()},t)};return t}())}}}));