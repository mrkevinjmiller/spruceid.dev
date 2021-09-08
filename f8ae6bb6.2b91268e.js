(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{107:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return d}));var i=n(3),r=n(7),a=(n(0),n(112)),o=["components"],s={id:"http",title:"HTTP Server"},c={unversionedId:"didkit-interfaces/http",id:"didkit-interfaces/http",isDocsHomePage:!1,title:"HTTP Server",description:"[Service]//docs.rs/tower-service/0.3.0/tower_service/trait.Service.html",source:"@site/docs\\didkit-interfaces\\http.md",slug:"/didkit-interfaces/http",permalink:"/docs/didkit-interfaces/http",editUrl:"https://github.com/spruceid/docs/didkit-interfaces/http.md",version:"current",sidebar:"docs",previous:{title:"Command Line Interface",permalink:"/docs/didkit-interfaces/cli"},next:{title:"Rust Crate",permalink:"/docs/didkit-interfaces/rust"}},l=[{value:"At a Glance",id:"at-a-glance",children:[]},{value:"Installation",id:"installation",children:[{value:"Docker",id:"docker",children:[]}]},{value:"CLI",id:"cli",children:[{value:"<code>didkit-http</code>",id:"didkit-http",children:[]}]},{value:"Rust library",id:"rust-library",children:[]},{value:"API",id:"api",children:[{value:"POST <code>/issue/credentials</code>",id:"post-issuecredentials",children:[]},{value:"POST <code>/verify/credentials</code>",id:"post-verifycredentials",children:[]},{value:"POST <code>/prove/presentations</code>",id:"post-provepresentations",children:[]},{value:"POST <code>/verify/presentations</code>",id:"post-verifypresentations",children:[]}]},{value:"Examples",id:"examples",children:[]}],p={toc:l};function d(e){var t=e.components,n=Object(r.a)(e,o);return Object(a.b)("wrapper",Object(i.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"at-a-glance"},"At a Glance"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"For setting up an HTTP server, whether for internal use, over the open internet, or both, we recommend using our dockerized HTTP server. Instructions ",Object(a.b)("a",{parentName:"li",href:"#Docker"},"below")),Object(a.b)("li",{parentName:"ul"},"Instructions for building manually can be found on the main ",Object(a.b)("a",{parentName:"li",href:"/docs/didkit/install"},"Installation page")),Object(a.b)("li",{parentName:"ul"},"Rather than design our own API, we have opted to adopt (and contribute to) the W3C Credentials Community Group's neutral, open standard for VC-handling APIs, the ",Object(a.b)("a",{parentName:"li",href:"https://w3c-ccg.github.io/vc-http-api/"},"vc-http-api"),"; we invite you to consider doing the same for your projects, if it is a reasonable fit for your needs.  For details, see that project's documentation and its separate ",Object(a.b)("a",{parentName:"li",href:"https://github.com/w3c-ccg/vc-http-api-use-cases/"},"use cases document"),"."),Object(a.b)("li",{parentName:"ul"},'The server is run as a Rust "Tower" ',Object(a.b)("a",{parentName:"li",href:"https://docs.rs/tower-service/0.3.0/tower_service/trait.Service.html"},"Service"),", which can be spun up with a ",Object(a.b)("a",{parentName:"li",href:"#Options"},"single line")," upon installation.")),Object(a.b)("h2",{id:"installation"},"Installation"),Object(a.b)("h3",{id:"docker"},"Docker"),Object(a.b)("p",null,"The HTTP server is containerised and available under\n",Object(a.b)("inlineCode",{parentName:"p"},"ghcr.io/spruceid/didkit-http"),"."),Object(a.b)("p",null,"You can use the images as a CLI:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"$ docker run --init -p 8080 ghcr.io/spruceid/didkit-http:latest --port 8080\n")),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"Note: You can pass JWKs either by sharing a volume with ",Object(a.b)("inlineCode",{parentName:"p"},"docker run --volume"),", or by passing the JWK directly with ",Object(a.b)("inlineCode",{parentName:"p"},"docker run -e JWK=$MY_JWK")," or ",Object(a.b)("inlineCode",{parentName:"p"},"docker run didkit-http --jwk $MY_JWK"),".")),Object(a.b)("p",null,"See the repo's ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/Dockerfile-http"},"Dockerfile")," for further details."),Object(a.b)("h2",{id:"cli"},"CLI"),Object(a.b)("h3",{id:"didkit-http"},Object(a.b)("inlineCode",{parentName:"h3"},"didkit-http")),Object(a.b)("p",null,"Run a DIDKit HTTP server. The command outputs the URL it is listening on, and runs until interrupted."),Object(a.b)("h4",{id:"options"},"Options"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-s, --host <host>")," - Hostname to listen on. Default is ",Object(a.b)("inlineCode",{parentName:"li"},"127.0.0.1"),"."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-p, --port <port>")," - Port to listen on. Default is a random OS-chosen port."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-k, --key <key>"),"   - Filename of a JWK to use for issuing credentials and\npresentations."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"-j, --jwk <jwk>"),"   - JWK to use for issuing credentials and presentations.")),Object(a.b)("h4",{id:"issuer-keys"},"Issuer keys"),Object(a.b)("p",null,"Provide issuer keys using the ",Object(a.b)("inlineCode",{parentName:"p"},"-k"),"/",Object(a.b)("inlineCode",{parentName:"p"},"--key-path")," or ",Object(a.b)("inlineCode",{parentName:"p"},"-j"),"/",Object(a.b)("inlineCode",{parentName:"p"},"--jwk")," options. If none are provided, issuance functionality will be unavailable. If one is provided, that one will be used to sign all credentials and presentations, regardless of the proof options in the issuance request. If more than one key is provided, the issuance request may identify which key to use for signing by its DID in the ",Object(a.b)("inlineCode",{parentName:"p"},"verificationMethod")," property of the proof options; if none is identified in that property, the first key is used."),Object(a.b)("h2",{id:"rust-library"},"Rust library"),Object(a.b)("p",null,"Rust crate ",Object(a.b)("inlineCode",{parentName:"p"},"didkit-http")," contains DIDKit's HTTP server implementation as a Rust\nlibrary. Struct ",Object(a.b)("inlineCode",{parentName:"p"},"didkit_http::DIDKitHTTPMakeSvc")," implements a Tower\n(",Object(a.b)("a",{parentName:"p",href:"https://hyper.rs/"},"hyper"),")"),Object(a.b)("h2",{id:"api"},"API"),Object(a.b)("p",null,"The following routes implement ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-http-api/"},"W3C CCG's VC HTTP API (vc-http-api)")," ",Object(a.b)("a",{parentName:"p",href:"https://github.com/w3c-ccg/vc-http-api/pull/72"},"v0.0.1"),". POST bodies should be typed as ",Object(a.b)("inlineCode",{parentName:"p"},"application/json"),". Output will be ",Object(a.b)("inlineCode",{parentName:"p"},"application/json")," on success; on error it will be either ",Object(a.b)("inlineCode",{parentName:"p"},"application/json")," or plain text. For more details, see the documentation for the ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/vc-http-api/"},"vc-http-api")," specification."),Object(a.b)("h3",{id:"post-issuecredentials"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/issue/credentials")),Object(a.b)("p",null,"Issue a verifiable credential. The server uses its configured key and the given linked data proof options to generate a proof and append it to the given credential. On success, the resulting verifiable credential is returned, with HTTP status 201."),Object(a.b)("h3",{id:"post-verifycredentials"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/verify/credentials")),Object(a.b)("p",null,"Verify a verifiable credential. The server verifies the given credential with the given linked data proof options. To successfully verify, the credential must contain at least one proof that verifies successfully. Verification results include a list of checks performed, warnings that should be flagged to the user, and errors encountered. On success, the errors list will be empty, and the HTTP status code will be 200."),Object(a.b)("h3",{id:"post-provepresentations"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/prove/presentations")),Object(a.b)("p",null,"Create a verifiable presentation. Given a presentation and linked data proof options, the server uses its key to generate a proof and append it to the presentation. On success, returns the verifiable presentation and HTTP status 201."),Object(a.b)("h3",{id:"post-verifypresentations"},"POST ",Object(a.b)("inlineCode",{parentName:"h3"},"/verify/presentations")),Object(a.b)("p",null,"Verify a verifiable presentation using the given proof options. Returns a verification result. HTTP status 200 indicates successful verification."),Object(a.b)("h2",{id:"examples"},"Examples"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",{parentName:"tr",align:null},"Tool"),Object(a.b)("th",{parentName:"tr",align:null},"Example"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",{parentName:"tr",align:null},"DIF Universal Resolver Driver, Dockerized HTTP server"),Object(a.b)("td",{parentName:"tr",align:null},Object(a.b)("a",{parentName:"td",href:"https://github.com/decentralized-identity/universal-resolver#drivers"},"DIF Universal Resolver repo"))))))}d.isMDXComponent=!0},112:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var i=n(0),r=n.n(i);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=p(n),u=i,h=d["".concat(o,".").concat(u)]||d[u]||b[u]||a;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);