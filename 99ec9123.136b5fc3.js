(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{160:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var r=n(1),a=n(9),o=(n(0),n(173)),c={id:"project-simple-status",title:"Project Simple Status"},l={id:"api/project-simple-status",title:"Project Simple Status",description:"## API Endpoint",source:"@site/docs/api/project-simple-status.md",permalink:"/docs/api/project-simple-status",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project-simple-status.md",lastUpdatedAt:1587468244,sidebar:"docs",previous:{title:"Project Results",permalink:"/docs/api/project-results"},next:{title:"Project Status",permalink:"/docs/api/project-status"}},p=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}],i={rightToc:p};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"GET /api/project/[id]/simple-status?apikey=[key]\n")),Object(o.b)("h2",{id:"request-params"},"Request params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Your project ID"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"apikey")),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(o.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"required")))),Object(o.b)("h2",{id:"call-example"},"Call example"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),"curl https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/simple-status?apikey=4PJAOwTK\n")),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'{\n    "failed": 0,\n    "tests": [\n        {\n            "name": "Homepage",\n            "status": "OK",\n            "url": "https://www.testomato.com/"\n        },\n        {\n            "name": "Blog",\n            "status": "OK",\n            "url": "https://blog.testomato.com/"\n        },\n\n        // ...\n\n        {\n            "name": "robots.txt",\n            "status": "OK",\n            "url": "https://www.testomato.com/robots.txt"\n        },\n        {\n            "name": "404 Not found",\n            "status": "OK",\n            "url": "https://www.testomato.com/thisShouldNotExist"\n        }\n    ],\n    "total": 12\n}\n')))}s.isMDXComponent=!0},173:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),s=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l({},t,{},e)),n},u=function(e){var t=s(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=r,d=u["".concat(c,".").concat(m)]||u[m]||b[m]||o;return n?a.a.createElement(d,l({ref:t},i,{components:n})):a.a.createElement(d,l({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var i=2;i<o;i++)c[i]=n[i];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);