(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return c}));var a=n(3),r=n(8),l=(n(0),n(113)),o={title:"Project Results"},i={unversionedId:"api/project/project-results",id:"api/project/project-results",isDocsHomePage:!1,title:"Project Results",description:"API Endpoint",source:"@site/docs/api/project/03-project-results.md",sourceDirName:"api/project",slug:"/api/project/project-results",permalink:"/api/project/project-results",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/03-project-results.md",version:"current",lastUpdatedAt:1618860419,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:3,frontMatter:{title:"Project Results"},sidebar:"docs",previous:{title:"Starting Project",permalink:"/api/project/project-start"},next:{title:"Project Simple Status",permalink:"/api/project/project-simple-status"}},b=[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[{value:"Response Parameters",id:"response-parameters",children:[]}]}],p={toc:b};function c(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"api-endpoint"},"API Endpoint"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-text"},"GET /api/project/[id]/job/[jobid]/results?apikey=[key]\n")),Object(l.b)("h2",{id:"request-params"},"Request params"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Description"),Object(l.b)("th",{parentName:"tr",align:null},"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"id")),Object(l.b)("td",{parentName:"tr",align:null},"Your project ID"),Object(l.b)("td",{parentName:"tr",align:null},"required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"jobid")),Object(l.b)("td",{parentName:"tr",align:null},"A unique ID for each project job"),Object(l.b)("td",{parentName:"tr",align:null},"required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"apikey")),Object(l.b)("td",{parentName:"tr",align:null},"An API key unique to each project"),Object(l.b)("td",{parentName:"tr",align:null},"required")))),Object(l.b)("h2",{id:"call-example"},"Call example"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/job/5e996714a39e5a31428b45b7/results?apikey=4PJAOwTK"\n')),Object(l.b)("h2",{id:"response"},"Response"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n    "startedAt": 1587111892,\n    "duration": 0.22143507003784,\n    "mode": 0,\n    "areas": [\n        {\n            "projectId": {\n                "$id": "5e95ddf7a39e5a44428b4581"\n            },\n            "name": "Public",\n            "public": true,\n            "rules": [],\n            "form": {\n                "action": "",\n                "originalAction": "",\n                "relativeAction": "",\n                "checksum": null,\n                "enabled": false,\n                "method": "",\n                "html": "",\n                "baseUrl": null,\n                "identifier": null,\n                "params": null,\n                "_id": {\n                    "$id": "5e9967d4b43021964b8b4598"\n                }\n            },\n            "httpAuth": null,\n            "period": true,\n            "result": null,\n            "options": [],\n            "_id": {\n                "$id": "5e95de00a39e5a44428b4583"\n            }\n        }\n    ],\n    "results": [\n        {\n            "areaId": "5e95de00a39e5a44428b4583",\n            "testId": "5e95de00a39e5a44428b4585",\n            "testName": "Homepage",\n            "status": "ok",\n            "failures": [],\n            "rules": [\n                {\n                    "type": "status",\n                    "op": "eq",\n                    "val": "200"\n                }\n            ]\n        },\n        {\n            "areaId": "5e95de00a39e5a44428b4583",\n            "testId": "5e95de00a39e5a44428b458b",\n            "testName": "Contact",\n            "status": "ok",\n            "failures": [],\n            "rules": [\n                {\n                    "type": "status",\n                    "op": "eq",\n                    "val": "200"\n                }\n            ]\n        },\n        {\n            "areaId": "5e95de00a39e5a44428b4583",\n            "testId": "5e95de00a39e5a44428b4599",\n            "testName": "robots.txt",\n            "status": "ok",\n            "failures": [],\n            "rules": [\n                {\n                    "type": "status",\n                    "op": "eq",\n                    "val": "200"\n                }\n            ]\n        },\n        {\n            "areaId": "5e95de00a39e5a44428b4583",\n            "testId": "5e95de00a39e5a44428b459b",\n            "testName": "404 Not found",\n            "status": "ok",\n            "failures": [],\n            "rules": [\n                {\n                    "type": "status",\n                    "op": "eq",\n                    "val": "404"\n                }\n            ]\n        }\n    ],\n    "persist": true,\n    "processed": true,\n    "jobId": "5e9967d4b43021964b8b4597",\n    "total": 4,\n    "failed": 0\n}\n')),Object(l.b)("h3",{id:"response-parameters"},"Response Parameters"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"Parameter"),Object(l.b)("th",{parentName:"tr",align:null},"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"jobId")),Object(l.b)("td",{parentName:"tr",align:null},"A unique project ID")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"startedAt")),Object(l.b)("td",{parentName:"tr",align:null},"Time when job started (unix timestamp)")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"duration")),Object(l.b)("td",{parentName:"tr",align:null},"Duration of the job")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"total")),Object(l.b)("td",{parentName:"tr",align:null},"The total number of tests performed")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"failed")),Object(l.b)("td",{parentName:"tr",align:null},"The number of failed tests")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"areas")),Object(l.b)("td",{parentName:"tr",align:null},"List of protected areas IDs")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},Object(l.b)("inlineCode",{parentName:"td"},"results")),Object(l.b)("td",{parentName:"tr",align:null},"Array of test results -- each result has a testId, testName etc.")))))}c.isMDXComponent=!0},113:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),c=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=c(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=b(e,["components","mdxType","originalType","parentName"]),s=c(n),u=a,m=s["".concat(o,".").concat(u)]||s[u]||d[u]||l;return n?r.a.createElement(m,i(i({ref:t},p),{},{components:n})):r.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);