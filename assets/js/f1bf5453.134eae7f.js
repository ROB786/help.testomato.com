(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{108:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(8),a=(n(0),n(112)),i={title:"CSRF protection"},s={unversionedId:"checks/CSRF-protection",id:"checks/CSRF-protection",isDocsHomePage:!1,title:"CSRF protection",description:"Cross-site request forgeries are a",source:"@site/docs/checks/06-CSRF-protection.md",sourceDirName:"checks",slug:"/checks/CSRF-protection",permalink:"/checks/CSRF-protection",editUrl:"https://github.com/testomato/help.testomato.com/edit/master/docs/checks/06-CSRF-protection.md",version:"current",lastUpdatedAt:1619428867,formattedLastUpdatedAt:"4/26/2021",sidebarPosition:6,frontMatter:{title:"CSRF protection"},sidebar:"docs",previous:{title:"Common Server Errors",permalink:"/checks/common-server-errors"},next:{title:"Testomato REST API",permalink:"/api/introduction"}},c=[{value:"Preventing CSRF Requests",id:"preventing-csrf-requests",children:[]},{value:"It&#39;s possible testing that type of forms?",id:"its-possible-testing-that-type-of-forms",children:[]},{value:"Other resources",id:"other-resources",children:[]}],l={toc:c};function p(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,Object(a.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgeries")," are a\ntype of malicious exploit whereby unauthorized commands are performed on behalf of an authenticated user. "),Object(a.b)("p",null,"In case you're not familiar with cross-site request forgeries, let's discuss an example of how this\nvulnerability can be exploited. Imagine your application has a ",Object(a.b)("inlineCode",{parentName:"p"},"/user/email")," route that accepts a\n",Object(a.b)("inlineCode",{parentName:"p"},"POST")," request to change the authenticated user's email address. Most likely, this route expects\nan email input field to contain the email address the user would like to begin using."),Object(a.b)("p",null,"Without CSRF protection, a malicious website could create an HTML form that points to your\napplication's ",Object(a.b)("inlineCode",{parentName:"p"},"/user/email")," route and submits the malicious user's own email address"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-html"},'<form action="https://your-application.com/user/email" method="POST">\n  <input type="email" value="malicious-email@example.com">\n</form>\n\n<script>\n  document.forms[0].submit();\n<\/script>\n')),Object(a.b)("h2",{id:"preventing-csrf-requests"},"Preventing CSRF Requests"),Object(a.b)("p",null,'You can generate CSRF "token" for each active user session managed by the application.\nThis token is used to verify that the authenticated user is the person actually making\nthe requests to the application. Since this token is stored in the user\'s session\nand changes each time the session is regenerated, a malicious application is unable to access it.'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},'session_start();\nif (empty($_SESSION[\'token\'])) {\n    $_SESSION[\'token\'] = bin2hex(random_bytes(32));\n}\n$token = $_SESSION[\'token\'];\n?>\n<form action="https://your-application.com/user/email" method="POST">\n  <input type="email" value="malicious-email@example.com">\n  <input type="hidden" name="token" value="<?php echo $token ?>" />\n</form>\n')),Object(a.b)("p",null,"Anytime you define an HTML form in your application,\nyou should include a hidden CSRF ",Object(a.b)("inlineCode",{parentName:"p"},"_token")," field in the\nform so that the CSRF protection can validate the request."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"if (!empty($_POST['token'])) {\n    if (hash_equals($_SESSION['token'], $_POST['token'])) {\n         // Proceed to process the form data\n    } else {\n         // Log this as a warning and keep an eye on these attempts\n    }\n}\n")),Object(a.b)("p",null,"You can go even further and generate Per-Form Tokens for every single\nform on your application:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$second_token = hash_hmac('sha256', '/my_form.php', $_SESSION['second_token']);\n?>\n<input type=\"hidden\" name=\"token\" value=\"<?php echo $second_token ?>\" />\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-php"},"$calc = hash_hmac('sha256', '/my_form.php', $_SESSION['second_token']);\nif (hash_equals($calc, $_POST['token'])) {\n    // Continue...\n}\n")),Object(a.b)("p",null,"You can also changing name of the token variable or invalidate token\nperiodically in time. If you have a security requirement that each\nCSRF token is allowed to be usable exactly once, the simplest\nstrategy regenerate it after each successful validation.\nHowever, doing so will invalidate every previous token\nwhich doesn't mix well with people who browse multiple tabs at once."),Object(a.b)("h2",{id:"its-possible-testing-that-type-of-forms"},"It's possible testing that type of forms?"),Object(a.b)("p",null,"The simply answer is NO. If is your application protected from cross-site request forgery attacks it's also\npreventing Testomato from sending requests with ",Object(a.b)("a",{parentName:"p",href:"https://github.com/testomato/minicrawler"},"minicralwer"),", but\nwe try bridge simplest type of protection by doubling request."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"The first request")," Testomato ignore HTTP response code - usually it's there some sort of unautorized request response,\nbut we update all hidden form params values and save session."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("strong",{parentName:"li"},"The second request")," is submitted with same session and hope that one of then hidden params was valid CSRF token")),Object(a.b)("h2",{id:"other-resources"},"Other resources"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Cross-site_request_forgery"},"Cross-site request forgeries")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://laravel.com/docs/8.x/csrf#csrf-explanation"},"CSRF Protection with Laravel")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"https://symfony.com/doc/current/security/csrf.html"},"CSRF Protection with Symfony")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"http://expressjs.com/en/resources/middleware/csurf.html"},"CSRF Protection with Express.js"))))}p.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,b=u["".concat(i,".").concat(h)]||u[h]||m[h]||a;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"}}]);