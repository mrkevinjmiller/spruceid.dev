(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{105:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return s})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return p}));var n=a(3),i=a(7),r=(a(0),a(112)),o=["components"],s={id:"intro",title:"Introducing DIDKit",hide_title:!0,sidebar_label:"Introduction",slug:"/didkit/"},l={unversionedId:"didkit/intro",id:"didkit/intro",isDocsHomePage:!1,title:"Introducing DIDKit",description:"DIDKit header",source:"@site/docs\\didkit\\intro.md",slug:"/didkit/",permalink:"/docs/didkit/",editUrl:"https://github.com/spruceid/docs/didkit/intro.md",version:"current",sidebar_label:"Introduction",sidebar:"docs",previous:{title:"What is Decentralized Identity?",permalink:"/docs/primer"},next:{title:"Installation",permalink:"/docs/didkit/install"}},c=[{value:"What is DIDKit?",id:"what-is-didkit",children:[]},{value:"Key Features",id:"key-features",children:[]},{value:"Quickstart",id:"quickstart",children:[]},{value:"Roadmap",id:"roadmap",children:[]}],d={toc:c};function p(e){var t=e.components,s=Object(i.a)(e,o);return Object(r.b)("wrapper",Object(n.a)({},d,s,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("img",{alt:"DIDKit header",src:a(164).default})),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.docker.com/"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Docker-19.03.x-blue",alt:null}))," ",Object(r.b)("a",{parentName:"p",href:"https://www.rust-lang.org/"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/Rust-v1.51.0-orange",alt:null}))," ",Object(r.b)("a",{parentName:"p",href:"https://www.github.com/spruceid/ssi"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/ssi-v0.1-green",alt:null}))," ",Object(r.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/LICENSE"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/badge/License-Apache--2.0-green",alt:null}))," ",Object(r.b)("a",{parentName:"p",href:"https://twitter.com/sprucesystems"},Object(r.b)("img",{parentName:"a",src:"https://img.shields.io/twitter/follow/sprucesystems?label=Follow&style=social",alt:null}))),Object(r.b)("h2",{id:"what-is-didkit"},"What is DIDKit?"),Object(r.b)("p",null,"DIDKit provides Verifiable Credential and Decentralized Identifier\nfunctionality across different platforms. DIDKit's core libraries are written in Rust due to Rust's expressive type system, memory safety, simple dependency web, and\nsuitability across different platforms including embedded systems, but the comprehensive DIDKit SDK includes many libraries and interfaces for using it almost everywhere."),Object(r.b)("h2",{id:"key-features"},"Key Features"),Object(r.b)("p",null,"DIDKit supports the following key capabilities:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"It can sign and verify ",Object(r.b)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/"},"W3C Verifiable Credentials")," almost anywhere you can install it.",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'Where is anywhere, you ask? See the "DIDKit Interfaces" section to the left for a growing list of language-specific libraries, many available via package manager, and foreign function interfaces.'),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"/docs/didkit/"},"Credible")," is also anywhere-- DIDKit powers our SDK for web-wallets and mobile app development, which spans a whole additional range of anywheres you might need to handle DIDs and VCs."),Object(r.b)("li",{parentName:"ul"},"If you need a server, not a library, DIDKit also powers a dockerized, ready-to-go HTTP/HTTPS server that can be called using the ",Object(r.b)("a",{parentName:"li",href:"https://github.com/w3c-ccg/vc-http-api"},"VC-HTTP-API")," standard or customized to use any other API interface."))),Object(r.b)("li",{parentName:"ul"},"It can juggle and translate between the two major signing systems and proof formats used in Verifiable Credentials today: Linked Data Proofs and the JOSE family of tokens and envelopes, abstracting out all the complexity of both."),Object(r.b)("li",{parentName:"ul"},"It can handle, authenticate, validate, register, and even determininstically generate many kinds of ",Object(r.b)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/"},"W3C Decentralized Identifiers"),', aka the titular "DIDs": full-featured "on-chain" DIDs, implicit or "off-chain" DIDs, disposable, short-lived DIDs, pseudo-DIDs generated by key material borrowed from other systems ',Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},'This includes "GitHub keys", HSM keys, any blockchain addresses representable as CAIP codes... the ',Object(r.b)("a",{parentName:"li",href:"did-methods"},"list")," keeps growing!"))),Object(r.b)("li",{parentName:"ul"},'It can also issue and consume authorization tokens based on the Object Capabilities model, also known as "ZCaps", which drive the security model of our powerful Kepler storage system, as well as many other next-generation resource management systems.')),Object(r.b)("h2",{id:"quickstart"},"Quickstart"),Object(r.b)("p",null,"You can build DIDKit's command-line interface and HTTP server in just a few minutes from your command line."),Object(r.b)("p",null,"Prerequisites:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Any major GNU/Linux distribution, including MacOS or Microsoft's ",Object(r.b)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/install-win10"},"WSL2")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://rust-lang.github.io/rustup/installation/index.html"},"Stable Rust")," ")),Object(r.b)("p",null,"Building ",Object(r.b)("inlineCode",{parentName:"p"},"didkit")," :"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ git clone https://github.com/spruceid/ssi --recurse-submodules\n$ git clone https://github.com/spruceid/didkit\n$ cd didkit/\n$ cargo build\n")),Object(r.b)("p",null,"That's it-- you're not ready to use ",Object(r.b)("inlineCode",{parentName:"p"},"didkit"),"'s CLI. For comprehensive documentation of CLI commands, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/cli"},"Github"),", and for a more skimmable overview, see the ",Object(r.b)("a",{parentName:"p",href:"/docs/didkit/cli_commands"},"CLI page"),") here.  For example, these basic commands should confirm the installation was succesful:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ ./target/debug/didkit -h\n$ ./target/debug/didkit generate-ed25519-key > key.jwk\n")),Object(r.b)("p",null,"You're also ready to spin up a ",Object(r.b)("inlineCode",{parentName:"p"},"didkit"),"-powered HTTP server for internal or external use, depending on your context. For comprehensive documentation of the HTTP commands, see ",Object(r.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/tree/main/http"},"Github "),", and for a more skimmable overview, see the ",Object(r.b)("a",{parentName:"p",href:"/docs/didkit/http_syntax"},"HTTP page")," here. The HTTP server can be spun up with a single command if passed a key and some flags, and will respond with the port on which it will listen for valid calls:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ ./target/debug/didkit-http -k key.jwk\nListening on http://127.0.0.1:51467/\n")),Object(r.b)("p",null,"More detailed installation instructions and variants, including Docker instructions, can be found on our ",Object(r.b)("a",{parentName:"p",href:"/docs/didkit/install"},"installation page"),"."),Object(r.b)("h2",{id:"roadmap"},"Roadmap"),Object(r.b)("p",null,"The following tools and features are high priority for subsequent releases:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Exposing interfaces for JWT-based Verifiable Credential workflows"),Object(r.b)("li",{parentName:"ol"},"JSON-LD context editor and hosting/publication tool"),Object(r.b)("li",{parentName:"ol"},"Registration of several new LD signature suites and support for new\ncryptography"),Object(r.b)("li",{parentName:"ol"},"DIDComm support"),Object(r.b)("li",{parentName:"ol"},"Aries interoperability profile support")))}p.isMDXComponent=!0},112:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var n=a(0),i=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var c=i.a.createContext({}),d=function(e){var t=i.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=d(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(a),u=n,m=p["".concat(o,".").concat(u)]||p[u]||b[u]||r;return a?i.a.createElement(m,s(s({ref:t},c),{},{components:a})):i.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<r;c++)o[c]=a[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},164:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/didkithead-52d41d35622b77d7662965794aa33eff.png"}}]);