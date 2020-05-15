(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(1),r=a(9),l=(a(0),a(173)),c={id:"project-users",title:"Project Users"},i={id:"api/project-users",title:"Project Users",description:"## List Project Users ",source:"@site/docs/api/project-users.md",permalink:"/docs/api/project-users",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project-users.md",lastUpdatedAt:1587468244,sidebar:"docs",previous:{title:"Project Response Times",permalink:"/docs/api/project-response-times"},next:{title:"Project Groups",permalink:"/docs/api/project-groups"}},b=[{value:"List Project Users",id:"list-project-users",children:[{value:"API Endpoint",id:"api-endpoint",children:[]},{value:"Request params",id:"request-params",children:[]},{value:"Call example",id:"call-example",children:[]},{value:"Response",id:"response",children:[]}]},{value:"Add User to Project",id:"add-user-to-project",children:[{value:"API Endpoint",id:"api-endpoint-1",children:[]},{value:"Request params",id:"request-params-1",children:[]},{value:"Call example",id:"call-example-1",children:[]}]}],o={rightToc:b};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"list-project-users"},"List Project Users"),Object(l.b)("h3",{id:"api-endpoint"},"API Endpoint"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"GET /api/project/[id]/users?apikey=[key]\n")),Object(l.b)("h3",{id:"request-params"},"Request params"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"id")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Your project ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"apikey")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")))),Object(l.b)("h3",{id:"call-example"},"Call example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/users?apikey=4PJAOwTK"\n')),Object(l.b)("h3",{id:"response"},"Response"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"Array")," of users that have access to selected Project:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0}),'[\n    {\n        "email": "roman@testomato.com",\n        "phone": null,\n        "name": "Roman O\u017eana",\n        "confirmed": true,\n        "timezone": "Europe\\/Prague",\n        "reportPeriod": "day",\n        "notificationEmail": null,\n        "notificationDelay": 1,\n        "apiKey": "123456",\n        "id": "7",\n        "role": {\n            "name": "project admin",\n            "users_id": null,\n            "id": "4",\n            "permissions": [\n                "read",\n                "run",\n                "editTests",\n                "edit",\n                "manageUsers",\n                "apiKey"\n            ],\n            "systemRole": true,\n            "permissionsSwitches": {\n                "read": true,\n                "run": true,\n                "editTests": true,\n                "edit": true,\n                "manageUsers": true,\n                "apiKey": true\n            }\n        },\n        "isPayer": true,\n        "canBeRemoved": false\n    }\n]\n')),Object(l.b)("h2",{id:"add-user-to-project"},"Add User to Project"),Object(l.b)("h3",{id:"api-endpoint-1"},"API Endpoint"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-text"}),"POST /api/project/[id]/users?apikey=[key]\n")),Object(l.b)("h3",{id:"request-params-1"},"Request params"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Mandatory"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"id")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Your project ID"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"apikey")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"An API key unique to each project"),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"required")))),Object(l.b)("p",null,"Payload data:"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"email")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Email of the user that will be added. If he isn't a Testomato user, an invitation email will be sent.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("inlineCode",{parentName:"td"},"role")),Object(l.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"4")," (admin) ",Object(l.b)("br",null)," ",Object(l.b)("strong",{parentName:"td"},"5")," developer ",Object(l.b)("br",null)," ",Object(l.b)("strong",{parentName:"td"},"6")," guest")))),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "email": "user@email.cz",\n  "role":6\n}\n')),Object(l.b)("h3",{id:"call-example-1"},"Call example"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-shell",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0}),'curl -X POST -H \'Content-Type: application/json\' \\\n    -d \'{"email":"user@email.cz", "role":6}\' \\\n    "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/users?apikey=4PJAOwTK"\n')))}p.isMDXComponent=!0},173:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),p=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i({},t,{},e)),a},s=function(e){var t=p(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),s=p(a),u=n,m=s["".concat(c,".").concat(u)]||s[u]||d[u]||l;return a?r.a.createElement(m,i({ref:t},o,{components:a})):r.a.createElement(m,i({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=u;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var o=2;o<l;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);