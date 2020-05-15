(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{151:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return l})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),c=(r(0),r(173)),o={id:"user-projects",title:"User Projects"},l={id:"api/user-projects",title:"User Projects",description:"## API Endpoint",source:"@site/docs/api/user-projects.md",permalink:"/docs/api/user-projects",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/user-projects.md",lastUpdatedAt:1587468244,sidebar:"docs",previous:{title:"Project Groups",permalink:"/docs/api/project-groups"},next:{title:"Example page",permalink:"/docs/api/example-page"}},p=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}],i={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},i,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"GET  /api/user/[id]/projects?apikey=[key] \n")),Object(c.b)("h2",{id:"request-params"},"Request params"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"id")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"User ID"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"apikey")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An API key unique to each user"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")))),Object(c.b)("h2",{id:"call-example"},"Call example"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),"curl https://www.testomato.com/api/user/7/projects?apikey=Sx9KJOjJ\n")),Object(c.b)("h2",{id:"response"},"Response"),Object(c.b)("p",null,"Array of projects"),Object(c.b)("pre",null,Object(c.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'[\n    {\n        "name": "omdesign.cz/",\n        "url": "http://omdesign.cz/",\n        "title": "My homepage",\n        "created": "2018-08-07T08:24:57+00:00",\n        "status": null,\n        "period": "1 hour",\n        "timeout": 7,\n        "delay": 50,\n        "uptimeEnabled": false,\n        "uptimeUrl": "http://omdesign.cz/",\n        "userAgent": null,\n        "apiKey": "YmZhU4mx",\n        "userIds": [ "7" ],\n        "payerId": "7",\n        "location": "de",\n        "checkDefaultErrors": true,\n        "id": "5b6957598cef2f6b118b47d3"\n    },\n    // ...\n]\n')))}s.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return m}));var n=r(0),a=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l({},t,{},e)),r},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,o=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=n,m=u["".concat(o,".").concat(d)]||u[d]||b[d]||c;return r?a.a.createElement(m,l({ref:t},i,{components:r})):a.a.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,o=new Array(c);o[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var i=2;i<c;i++)o[i]=r[i];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);