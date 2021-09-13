"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[48],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,m=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},582:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(7462),o=n(3366),i=(n(7294),n(3905)),a=["components"],c={id:"qr-issuance",title:"QR Code Issuance"},s={unversionedId:"credible-examples/qr-issuance",id:"credible-examples/qr-issuance",isDocsHomePage:!1,title:"QR Code Issuance",description:"Introduction",source:"@site/docs/credible-examples/qr-issuance.md",sourceDirName:"credible-examples",slug:"/credible-examples/qr-issuance",permalink:"/docs/credible-examples/qr-issuance",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/credible-examples/qr-issuance.md",version:"current",frontMatter:{id:"qr-issuance",title:"QR Code Issuance"},sidebar:"docs",previous:{title:"Overview of Examples",permalink:"/docs/credible-examples/overview"},next:{title:"VC Display",permalink:"/docs/credible-examples/vc-display"}},l=[{value:"Introduction",id:"introduction",children:[]}],p={toc:l};function u(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"introduction"},"Introduction"),(0,i.kt)("p",null,"This video demonstrates the QR-triggered issuance flow described on the ",(0,i.kt)("a",{parentName:"p",href:"/docs/credible/concepts#offer-flow"},"Core\nConcepts")," page.  Note that:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"java.theosirian.com")," is the test-server generating the QR code issuing\nthe credential. The pop-up, which is enabled by default, serves to prevent\nspoofing or phishing attacks, should the page serving the qR and\nthe contents of the QR be in different domains. The consent pop-up can be\nskipped if the requesting domain matches the domain referenced from a QR\ncode. Further validation can also be added as a failsafe or alternative."),(0,i.kt)("li",{parentName:"ul"},"The credential offered, containing a proof of control of a doximity.com\naccount, is dummy data from a client project. The contents displayed should\nnormally come from a processing of the contents of the actual credential, but\nin this demo, they are mocked up graphically by a few manual overrides in the\nfolder /lib/app/pages/credentials/widget/document/ . For more details, see the ",(0,i.kt)("a",{parentName:"li",href:"/docs/credible-examples/vc-display"},"VC Display example"))),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/95347/113591505-f422ff00-9601-11eb-9e16-4d0c45ab8ef9.gif",alt:"credible-vc-vp-half"})))}u.isMDXComponent=!0}}]);