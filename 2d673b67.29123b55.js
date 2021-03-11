(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),s=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=s(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(l,".").concat(m)]||u[m]||b[m]||o;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},71:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return s}));var a=n(3),r=n(7),o=(n(0),n(104)),l={id:"project-status",title:"Project Status"},c={unversionedId:"api/project-status",id:"api/project-status",isDocsHomePage:!1,title:"Project Status",description:"API Endpoint",source:"@site/docs/api/project-status.md",slug:"/api/project-status",permalink:"/api/project-status",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project-status.md",version:"current",lastUpdatedAt:1587468244,sidebar:"docs",previous:{title:"Project Simple Status",permalink:"/api/project-simple-status"},next:{title:"Project Response Times",permalink:"/api/project-response-times"}},p=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}],i={rightToc:p};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-text"}),"GET /api/project/[id]/status?apikey=[key]\n")),Object(o.b)("h2",{id:"request-params"},"Request params"),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(o.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"id")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Your project ID"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required")),Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(o.b)("inlineCode",{parentName:"td"},"apikey")),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(o.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"required")))),Object(o.b)("h2",{id:"call-example"},"Call example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/status?apikey=4PJAOwTK"\n')),Object(o.b)("h2",{id:"response"},"Response"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'{\n    "project": {\n        "lastChange": 1586880000,\n        "status": "ok",\n        "msg": "Server returned HTTP status 200",\n        "reported": "ok",\n        "lastRun": 1586885018,\n        "shortMsg": 200,\n        "id": "5e95de005d41f488408b4567"\n    },\n    "total": 12,\n    "failed": 0,\n    "now": 1586885028,\n    "tests": [\n        {\n            "id": "5e95de00a39e5a44428b4585",\n            "enabled": true,\n            "areaId": "5e95de00a39e5a44428b4583",\n            "name": "Homepage",\n            "url": "https:\\/\\/www.testomato.com\\/",\n            "notice": null,\n            "type": "homepage",\n            "run": "completed",\n            "flags": [],\n            "status": {\n                "status": "ok",\n                "failures": [],\n                "rules": [\n                    {\n                        "type": "status",\n                        "op": "eq",\n                        "val": "200"\n                    }\n                ],\n                "response": {\n                    "status": 200,\n                    "httpStatus": 200,\n                    "baseUrl": "https:\\/\\/www.testomato.com\\/",\n                    "contentType": "text\\/html",\n                    "httpHeader": ":status: 200\\r\\nserver: nginx\\r\\n...",\n                    "processTime": 0.043,\n                    "size": false,\n                    "timing": [\n                        { "metric": "DNS Lookup", "value": 6 },\n                        { "metric": "Initial connection", "value": 63 },\n                        { "metric": "SSL", "value": 8 },\n                        { "metric": "Waiting", "value": 29 },\n                        { "metric": "Content download", "value": 4 },\n                        { "metric": "Total", "value": 43 }\n                    ],\n                    "redirects": []\n                },\n                "request": {\n                    "url": "https:\\/\\/www.testomato.com\\/",\n                    "method": "GET"\n                },\n                "lastChange": 1586880004,\n                "lastRun": 1586884833\n            },\n            "templateId": false,\n            "templateVars": null,\n            "rules": [\n                { "type": "status", "op": "eq", "val": "200" }\n            ],\n            "options": {\n                "g": false,\n                "l": false,\n                "w": null,\n                "6": false,\n                "2": false\n            }\n        },\n        // ...     \n    ]\n   "total": 12\n}\n')))}s.isMDXComponent=!0}}]);