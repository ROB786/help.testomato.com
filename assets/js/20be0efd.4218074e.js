"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[746],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(i,".").concat(m)]||d[m]||u[m]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<l;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7161:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(7462),a=r(3366),l=(r(7294),r(3905)),o=["components"],p={title:"Starting Project"},i=void 0,c={unversionedId:"api/project/project-start",id:"api/project/project-start",title:"Starting Project",description:"API Endpoint",source:"@site/docs/api/project/02-project-start.md",sourceDirName:"api/project",slug:"/api/project/project-start",permalink:"/api/project/project-start",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/project/02-project-start.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:2,frontMatter:{title:"Starting Project"},sidebar:"docs",previous:{title:"Get Project",permalink:"/api/project/get-project"},next:{title:"Project Results",permalink:"/api/project/project-results"}},s=[{value:"API Endpoint",id:"api-endpoint",children:[],level:2},{value:"Request params",id:"request-params",children:[],level:2},{value:"Call example",id:"call-example",children:[],level:2},{value:"Response",id:"response",children:[{value:"Response Parameters",id:"response-parameters",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"api-endpoint"},"API Endpoint"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"GET /api/project/[id]/start?apikey=[key]\n")),(0,l.kt)("h2",{id:"request-params"},"Request params"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Mandatory"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},"Your project ID"),(0,l.kt)("td",{parentName:"tr",align:null},"required")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"apikey")),(0,l.kt)("td",{parentName:"tr",align:null},"An API key unique to each project"),(0,l.kt)("td",{parentName:"tr",align:null},"required")))),(0,l.kt)("h2",{id:"call-example"},"Call example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="Example CURL call"',title:'"Example',CURL:!0,'call"':!0},'curl "https://www.testomato.com/api/project/5e95ddf7a39e5a44428b4581/start?apikey=4PJAOwTK"\n')),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="Example JSON response"',title:'"Example',JSON:!0,'response"':!0},'{\n    "projectId": "5e95ddf7a39e5a44428b4581",\n    "jobId": "5e9602e7a39e5a46428b457f",\n    "start": "ok",\n    "results": "https:\\/\\/www.testomato.com\\/api\\/project\\/5e95ddf7a39e5a44428b4581\\/job\\/5e9602e7a39e5a46428b457f\\/results?apikey=4PJAOwTK"\n}\n')),(0,l.kt)("h3",{id:"response-parameters"},"Response Parameters"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"projectId")),(0,l.kt)("td",{parentName:"tr",align:null},"A unique project ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"jobId")),(0,l.kt)("td",{parentName:"tr",align:null},"A unique ID for each project job")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"start")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ok")," means your tests have successfully started")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"results")),(0,l.kt)("td",{parentName:"tr",align:null},"The URL where you can view your results")))))}d.isMDXComponent=!0}}]);