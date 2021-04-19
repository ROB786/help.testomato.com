(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{108:function(e,n,r){"use strict";r.d(n,"a",(function(){return l})),r.d(n,"b",(function(){return f}));var t=r(0),o=r.n(t);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function s(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function c(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?s(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),u=function(e){var n=o.a.useContext(p),r=n;return e&&(r="function"==typeof e?e(n):c(c({},n),e)),r},l=function(e){var n=u(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},m=o.a.forwardRef((function(e,n){var r=e.components,t=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),l=u(r),m=t,f=l["".concat(s,".").concat(m)]||l[m]||d[m]||a;return r?o.a.createElement(f,c(c({ref:n},p),{},{components:r})):o.a.createElement(f,c({ref:n},p))}));function f(e,n){var r=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:t,s[1]=c;for(var p=2;p<a;p++)s[p]=r[p];return o.a.createElement.apply(null,s)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},83:function(e,n,r){"use strict";r.r(n),r.d(n,"frontMatter",(function(){return s})),r.d(n,"metadata",(function(){return c})),r.d(n,"toc",(function(){return i})),r.d(n,"default",(function(){return u}));var t=r(3),o=r(8),a=(r(0),r(108)),s={id:"common-responses",title:"Common responses"},c={unversionedId:"api/common-responses",id:"api/common-responses",isDocsHomePage:!1,title:"Common responses",description:"OK: Success response",source:"@site/docs/api/03-common-responses.md",sourceDirName:"api",slug:"/api/common-responses",permalink:"/api/common-responses",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/03-common-responses.md",version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:3,frontMatter:{id:"common-responses",title:"Common responses"},sidebar:"docs",previous:{title:"How to Get API Key",permalink:"/api/api-key"},next:{title:"Example page",permalink:"/api/example-page"}},i=[{value:"OK: Success response",id:"ok-success-response",children:[]},{value:"ERROR: Missing API endpoint",id:"error-missing-api-endpoint",children:[]},{value:"ERROR: Invalid API key",id:"error-invalid-api-key",children:[]},{value:"ERROR: Project not found",id:"error-project-not-found",children:[]}],p={toc:i};function u(e){var n=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(t.a)({},p,r,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"ok-success-response"},"OK: Success response"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n    "message": "Success message",\n    "code": 200,\n    "ok": true,\n    "error": false\n}\n')),Object(a.b)("h2",{id:"error-missing-api-endpoint"},"ERROR: Missing API endpoint"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "API endpoint not found",\n  "code": 404,\n  "ok": false,\n  "error": true\n}\n')),Object(a.b)("h2",{id:"error-invalid-api-key"},"ERROR: Invalid API key"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n  "message": "You don\'t have required permission to selected project.",\n  "code": 401,\n  "ok": false,\n  "error": true\n}\n')),Object(a.b)("h2",{id:"error-project-not-found"},"ERROR: Project not found"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-json"},'{\n "message": "Project \\"xxxx\\" not found.",\n "code": 404,\n "ok": false,\n "error": true\n}\n')))}u.isMDXComponent=!0}}]);