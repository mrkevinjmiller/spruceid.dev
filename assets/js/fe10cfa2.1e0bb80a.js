"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[115],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),f=i,m=u["".concat(l,".").concat(f)]||u[f]||p[f]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8414:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return p}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=["components"],s={id:"glossary",title:"Core DIDKit Glossary",sidebar_label:"Glossary"},l={unversionedId:"didkit/glossary",id:"didkit/glossary",isDocsHomePage:!1,title:"Core DIDKit Glossary",description:"*For more detailed explanations and references to core specifications, see the",source:"@site/docs/didkit/terminology.md",sourceDirName:"didkit",slug:"/didkit/glossary",permalink:"/docs/didkit/glossary",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/didkit/terminology.md",version:"current",sidebar_label:"Glossary",frontMatter:{id:"glossary",title:"Core DIDKit Glossary",sidebar_label:"Glossary"},sidebar:"docs",previous:{title:"Specifications and Dependencies",permalink:"/docs/didkit/specs_and_deps"},next:{title:"Overview of DIDKit Packages",permalink:"/docs/didkit-packages/overview"}},d=[{value:"Verifiable Credentials (&quot;<em>VCs</em>&quot;)",id:"verifiable-credentials-vcs",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Decentralized Identifiers (&quot;<em>DIDs</em>&quot;)",id:"decentralized-identifiers-dids",children:[]},{value:"DID Method",id:"did-method",children:[]},{value:"DID:Key",id:"didkey",children:[]},{value:"JSON Web Key (JWK)",id:"json-web-key-jwk",children:[]}],c={toc:d};function p(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For more detailed explanations and references to core specifications, see the\nmore comprehensive ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary"},"developer portal\nglossary"),".")),(0,a.kt)("h3",{id:"verifiable-credentials-vcs"},'Verifiable Credentials ("',(0,a.kt)("em",{parentName:"h3"},"VCs"),'")'),(0,a.kt)("p",null,"Verifiable Credentials are document structures that consist of a few key\nproperties: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"an ",(0,a.kt)("inlineCode",{parentName:"li"},"id")," (a unique ID, often a UUID with the ",(0,a.kt)("inlineCode",{parentName:"li"},"urn:uuid:")," prefix or a\nresolvable URL containing another unique per-credential identifier)"),(0,a.kt)("li",{parentName:"ul"},"a ",(0,a.kt)("inlineCode",{parentName:"li"},"credentialSubject"),", in the sense of a data subject, usually identified by a DID or other privacy-preserving indirection or pseudonym)"),(0,a.kt)("li",{parentName:"ul"},"one or more ",(0,a.kt)("inlineCode",{parentName:"li"},"proof")," (signature) section, specific to intended verification audience(s)"),(0,a.kt)("li",{parentName:"ul"},"a payload, usually structured. "),(0,a.kt)("li",{parentName:"ul"},"VCs also contain semantic references linked by URI, in an array at the\nbeginning of the object called ",(0,a.kt)("inlineCode",{parentName:"li"},"@context"),". ")),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"For a more introductory explanation and guidance on understanding the\nspecification, see the ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary#verifiable-credentials-vcs"},"glossary\nentry"))),(0,a.kt)("h3",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,'Wallets are specialized pieces of software that store credentials, usually\nsecured access to the cryptographic keys associated with a specific identifiers.\nIt may store other kinds of credentials as well, such as unsigned credentials,\nself-attested/self-issued credentials, or credentials with subjects whose keys\nit does not control, but its primary function is signing to receive and present\nits "own" credentials.  DIDKit is unopinionated and easy to extend, but DIDKit\nis also primary designed to work with Credible, and both are built around\nSpruce\'s core ',(0,a.kt)("inlineCode",{parentName:"p"},"ssi")," library.  ",(0,a.kt)("em",{parentName:"p"},"For a more introductory explanation and\nspecification, see the ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary#wallet"},"glossary\nentry"))),(0,a.kt)("h3",{id:"decentralized-identifiers-dids"},'Decentralized Identifiers ("',(0,a.kt)("em",{parentName:"h3"},"DIDs"),'")'),(0,a.kt)("p",null,'Decentralized Identifiers are stable identifiers which are bound to a\ncontrolling keypair, which is usually rotatable without changing the identifier.\nThese stable identifiers can be used to query a verifiable data registry to get\na "DID Document" containing the current controlling keypair and other\ninformation for verifying information associated with the DID.  ',(0,a.kt)("em",{parentName:"p"},"For a more\nintroductory explanation and specification, see the ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary#decentralized-identifiers-dids"},"DID glossary\nentry")," and\nthe ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary#did-document"},"DID Document glossary\nentry"))),(0,a.kt)("h3",{id:"did-method"},"DID Method"),(0,a.kt)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for\nDIDs in a given DID namespace, specified by a registered specification. Most DID\nmethods use blockchains or other publically-readable distributed ledgers as data\nregistries, but some, such as DID:Web, use other systems of verification, such\nas secure DNS resolution. ",(0,a.kt)("em",{parentName:"p"},"For a more introductory explanation and\nspecification, see the ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary#did-method"},"glossary\nentry"))),(0,a.kt)("h3",{id:"didkey"},"DID:Key"),(0,a.kt)("p",null,"A special DID Method that generates conformant, offchain DID documents for\nlocal, private, and/or ephemeral resolution from a keypair. This can be helpful\nfor integrating conventional PKI or signing infrastructure with DID issuance, or\nto allow caching or local resolution of DID documents where it is undesirable or\nimpossible to resolve remote DIDs. ",(0,a.kt)("em",{parentName:"p"},"For a more introductory explanation and\nspecification, see the ",(0,a.kt)("a",{parentName:"em",href:"https://spruceid.dev/docs/glossary#didkey"},"glossary\nentry"))),(0,a.kt)("h3",{id:"json-web-key-jwk"},"JSON Web Key (JWK)"),(0,a.kt)("p",null,'A JSON Web Key, or a "JWK" for short, is a special class of JSON objects(see\n',(0,a.kt)("a",{parentName:"p",href:"https://spruceid.dev/docs/glossary#json"},"glossary entry")," ) objects specified\nfor containing cryptographic key or set of keys. They were\n",(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7517"},"specified")," in 2015 through the IETF."))}p.isMDXComponent=!0}}]);