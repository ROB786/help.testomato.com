(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{168:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var n=r(1),a=r(9),o=(r(0),r(173)),c={id:"api-key",title:"How to Get API Key"},i={id:"api/api-key",title:"How to Get API Key",description:"All API endpoints require authentication via an **API key**. Each",source:"@site/docs/api/api-key.md",permalink:"/docs/api/api-key",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/api/api-key.md",lastUpdatedAt:1587038649,sidebar:"docs",previous:{title:"Testomato REST API",permalink:"/docs/api/introduction"},next:{title:"Common responses",permalink:"/docs/api/common-responses"}},p=[],u={rightToc:p};function s(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"All API endpoints require authentication via an ",Object(o.b)("strong",{parentName:"p"},"API key"),". Each\nproject has its own unique API key that protects your data against\nunwanted access. An API key parameter is ",Object(o.b)("strong",{parentName:"p"},"mandatory")," for all requests."),Object(o.b)("p",null,"You can find your API Key at the bottom of ",Object(o.b)("strong",{parentName:"p"},"Project Settings")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/api/api-key-project.png",alt:"API key"}))),Object(o.b)("p",null,"You can also use user key from your ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.testomato.com/user/profile"}),"User Profile"),": "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/api/api-key-user.png",alt:"API key"}))))}s.isMDXComponent=!0},173:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return f}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},l=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),l=s(r),b=n,f=l["".concat(c,".").concat(b)]||l[b]||m[b]||o;return r?a.a.createElement(f,i({ref:t},u,{components:r})):a.a.createElement(f,i({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=b;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<o;u++)c[u]=r[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);