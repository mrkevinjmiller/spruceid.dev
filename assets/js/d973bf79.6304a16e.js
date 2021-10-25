"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[5372],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},l=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),l=s(n),f=i,m=l["".concat(c,".").concat(f)]||l[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=l;var u={};for(var c in t)hasOwnProperty.call(t,c)&&(u[c]=t[c]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}l.displayName="MDXCreateElement"},126:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],u={id:"runtime-config",title:"Runtime Configuration"},c={unversionedId:"didkit/runtime-config",id:"didkit/runtime-config",isDocsHomePage:!1,title:"Runtime Configuration",description:"Introduction",source:"@site/docs/didkit/runtime-config.md",sourceDirName:"didkit",slug:"/didkit/runtime-config",permalink:"/docs/didkit/runtime-config",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/didkit/runtime-config.md",version:"current",frontMatter:{id:"runtime-config",title:"Runtime Configuration"},sidebar:"docs",previous:{title:"DID Methods Supported",permalink:"/docs/didkit/did-methods"},next:{title:"Document Loading",permalink:"/docs/didkit/document-loading"}},s=[{value:"Introduction",id:"introduction",children:[]},{value:"Network configuration",id:"network-configuration",children:[]}],p={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"For major re-configurations or variations from the default behavior of DIDKit,\nmodifying the code and compiling your own binaries is required.  For a short but\ngrowing list of minor options, however, run-time configuration of DIDKit\nbehavior and security policies is possible. Feel free to open issues on DIDKit's\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/issues/"},"github repo")," if you are\nexperimenting with DIDKit and have pain-points that would be served by\nadditional runtime configuration options."),(0,o.kt)("h2",{id:"network-configuration"},"Network configuration"),(0,o.kt)("p",null,"For all outbound HTTP requests, DIDKit relies on the upstream\n",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/reqwest/0.11.6/reqwest/"},(0,o.kt)("inlineCode",{parentName:"a"},"reqwest"))," library. ",(0,o.kt)("inlineCode",{parentName:"p"},"reqwest")," checks\nthe environmental variables in DIDKit's environment for the variables\n",(0,o.kt)("inlineCode",{parentName:"p"},"HTTP_PROXY")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"HTTPS_PROXY")," to route http and\nhttps trafffic respectively.  If you have set up such a proxy, including a\nreverse proxy or SOCKS service, you can set the appropriate environmental\nvariable(s) and assume ",(0,o.kt)("inlineCode",{parentName:"p"},"reqwest")," will route appropriately. Note: this proxying\nis unavailable in the npm package ",(0,o.kt)("inlineCode",{parentName:"p"},"didkit-wasm")," to date. "),(0,o.kt)("p",null,"For more information about how ",(0,o.kt)("inlineCode",{parentName:"p"},"reqwest")," handles proxies, see the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rs/reqwest/0.11.6/reqwest/#proxies"},"proxies\nsection")," of the ",(0,o.kt)("inlineCode",{parentName:"p"},"reqwest")," docs\non docs.rs, the Rust ecosystem documentation repository."))}d.isMDXComponent=!0}}]);