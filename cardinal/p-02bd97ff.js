import{g as e}from"./p-a1b3783e.js";function o(){return o=>{const{componentWillLoad:t}=o;o.getInnerContent=function(o){const t=e(this);if(t[o]){let e=t.querySelector("link");if(e){let n=t[o].replace(e.outerHTML,"");return t[o]=e.outerHTML,n}return t[o]}console.error(`${o} is not a property`)},o.componentWillLoad=function(){const o=e(this);if(!o)return t&&t.call(this);if("undefined"!=typeof globalConfig&&"string"==typeof globalConfig.theme){let e=o.tagName.toLowerCase();return new Promise(n=>{let i="/themes/"+globalConfig.theme+"/components/"+e+"/"+e+".css";var s=document.createElement("link");s.setAttribute("rel","stylesheet"),s.setAttribute("href",i),(o.shadowRoot?o.shadowRoot:o).prepend(s);let l=!1,r=()=>{l||(l=!0,n(t&&t.call(this)))};s.onload=r,s.onerror=()=>{console.log(`File ${i} was not found`),r()},setTimeout(()=>{!1===l&&(l=!0,n(t&&t.call(this)))},100)})}console.error("Theme or globalConfig is not defined!")}}}export{o as C};