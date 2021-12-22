"use strict";(self.webpackChunkhelp=self.webpackChunkhelp||[]).push([[821],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,c(c({ref:t},p),{},{components:r})):n.createElement(f,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2362:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return p},default:function(){return u}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],i={id:"dashboard",title:"Testomato Dashboard",sidebar_label:"Dashboard"},s=void 0,l={unversionedId:"dashboard",id:"dashboard",title:"Testomato Dashboard",description:"Dashboard is meant to help you get a basic overview of what's",source:"@site/docs/02-dashboard.md",sourceDirName:".",slug:"/dashboard",permalink:"/dashboard",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/02-dashboard.md",tags:[],version:"current",lastUpdatedAt:1618859174,formattedLastUpdatedAt:"4/19/2021",sidebarPosition:2,frontMatter:{id:"dashboard",title:"Testomato Dashboard",sidebar_label:"Dashboard"},sidebar:"docs",previous:{title:"Introduction",permalink:"/introduction"},next:{title:"Account",permalink:"/account"}},p=[{value:"Check colors",id:"check-colors",children:[],level:2},{value:"Compact mode",id:"compact-mode",children:[],level:2},{value:"Open selected Project",id:"open-selected-project",children:[],level:2}],d={toc:p};function u(e){var t=e.components,i=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Dashboard")," is meant to help you get a basic overview of what's\ngoing on in your projects in a quick way."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard",src:r(9842).Z})),(0,a.kt)("p",null,"When you sign in to Testomato, we want you to be able to know if there\nare problems the minute you see your dashboard. That's why boxes will\nchange color according to the status of each check."),(0,a.kt)("h2",{id:"check-colors"},"Check colors"),(0,a.kt)("p",null,"There are only ",(0,a.kt)("strong",{parentName:"p"},"4 possible colors")," for check boxes:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Green"),": This page passed all checks."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Red"),": This page failed some checks."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Orange"),": This page timed out."),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("strong",{parentName:"li"},"Gray"),": This page has not been configured yet, has been ",(0,a.kt)("em",{parentName:"li"},"turned\noff"),", or the results are not available.")),(0,a.kt)("h2",{id:"compact-mode"},"Compact mode"),(0,a.kt)("p",null,"There is another mode called ",(0,a.kt)("em",{parentName:"p"},"compact"),", this mode is useful for long projects."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Dashboard Compact",src:r(1442).Z})),(0,a.kt)("h2",{id:"open-selected-project"},"Open selected Project"),(0,a.kt)("p",null,"By clicking on ",(0,a.kt)("strong",{parentName:"p"},"Project Name")," or ",(0,a.kt)("strong",{parentName:"p"},"Checks")," button."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(2850).Z})))}u.isMDXComponent=!0},1442:function(e,t,r){t.Z=r.p+"assets/images/dashboard-compact-2bf7d5b29b1d1ca920d9c9312b135fe4.png"},9842:function(e,t,r){t.Z=r.p+"assets/images/dashboard-d4c37f831099a8e207164d9aa1ebffae.png"},2850:function(e,t,r){t.Z=r.p+"assets/images/open-project-d9a31fab52bba3c4bfdb5d5d26d3fd24.png"}}]);