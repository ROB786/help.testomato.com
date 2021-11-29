"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[849],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,f=d["".concat(p,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},402:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=["components"],i={id:"user-projects",title:"User Projects"},p=void 0,c={unversionedId:"api/user-projects",id:"api/user-projects",isDocsHomePage:!1,title:"User Projects",description:"API Endpoint",source:"@site/docs/api/07-user-projects.md",sourceDirName:"api",slug:"/api/user-projects",permalink:"/api/user-projects",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/07-user-projects.md",tags:[],version:"current",lastUpdatedAt:1623831937,formattedLastUpdatedAt:"6/16/2021",sidebarPosition:7,frontMatter:{id:"user-projects",title:"User Projects"},sidebar:"docs",previous:{title:"Incident",permalink:"/api/incident"},next:{title:"Contact Support",permalink:"/support"}},s=[{value:"API Endpoint",id:"api-endpoint",children:[],level:2},{value:"Request params",id:"request-params",children:[],level:2},{value:"Call example",id:"call-example",children:[],level:2},{value:"Response",id:"response",children:[],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"api-endpoint"},"API Endpoint"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"GET  /api/user/[id]/projects?apikey=[key] \n")),(0,o.kt)("h2",{id:"request-params"},"Request params"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"),(0,o.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"id")),(0,o.kt)("td",{parentName:"tr",align:null},"User ID"),(0,o.kt)("td",{parentName:"tr",align:null},"required")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"apikey")),(0,o.kt)("td",{parentName:"tr",align:null},"An API key unique to each user"),(0,o.kt)("td",{parentName:"tr",align:null},"required")))),(0,o.kt)("h2",{id:"call-example"},"Call example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},"curl https://www.testomato.com/api/user/7/projects?apikey=Sx9KJOjJ\n")),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("p",null,"Array of projects"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'[\n    {\n        "name": "omdesign.cz/",\n        "url": "http://omdesign.cz/",\n        "title": "My homepage",\n        "created": "2018-08-07T08:24:57+00:00",\n        "status": null,\n        "period": "1 hour",\n        "timeout": 7,\n        "delay": 50,\n        "uptimeEnabled": false,\n        "uptimeUrl": "http://omdesign.cz/",\n        "userAgent": null,\n        "apiKey": "YmZhU4mx",\n        "userIds": [ "7" ],\n        "payerId": "7",\n        "location": "de",\n        "checkDefaultErrors": true,\n        "id": "5b6957598cef2f6b118b47d3"\n    },\n    // ...\n]\n')))}d.isMDXComponent=!0}}]);