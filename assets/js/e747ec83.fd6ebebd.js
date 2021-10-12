"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[2291],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return u}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),d=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=d(e.components);return r.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=i,m=p["".concat(c,".").concat(u)]||p[u]||h[u]||a;return n?r.createElement(m,o(o({ref:t},l),{},{components:n})):r.createElement(m,o({ref:t},l))}));function u(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9874:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d},default:function(){return h}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],s={id:"glossary",title:"Glossary"},c={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Terminology",source:"@site/docs/glossary.md",sourceDirName:".",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/glossary.md",version:"current",frontMatter:{id:"glossary",title:"Glossary"},sidebar:"docs",previous:{title:"Privacy Policy",permalink:"/docs/privacy-policy"},next:{title:"Further Reading",permalink:"/docs/further-reading"}},d=[{value:"Terminology",id:"terminology",children:[{value:"Verifiable Credentials (&quot;<em>VCs</em>&quot;)",id:"verifiable-credentials-vcs",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Decentralized Identifiers (&quot;<em>DIDs</em>&quot;)",id:"decentralized-identifiers-dids",children:[]},{value:"DID Document",id:"did-document",children:[]},{value:"DID Method",id:"did-method",children:[]},{value:"DID:Key",id:"didkey",children:[]},{value:"JavaScript Object Notation (JSON)",id:"javascript-object-notation-json",children:[]},{value:"JSON-LD",id:"json-ld",children:[]},{value:"JSON Web Key (JWK)",id:"json-web-key-jwk",children:[]}]}],l={toc:d};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("h3",{id:"verifiable-credentials-vcs"},'Verifiable Credentials ("',(0,a.kt)("em",{parentName:"h3"},"VCs"),'")'),(0,a.kt)("p",null,"Verifiable Credentials combine properties and superpowers from many different\nmental models. They are like portable, free-floating data units, which are not\nexactly documents or data points or records. They are signed and thus\ntamper-evident, and thus share much of the verifiability of blockchain data or\nsigned PDFs insofar as the signatures they contain can be properly verified by\nreference to the identities included inside the document. Particularly in the\nform of JSON-LD verifiable credentials, they are highly portable, in that the\nstructure of their data can often be reconstructed years later and completely\nout of their original context. For more on JSON-LD and linked data, see the\nSemantics section of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/didkit/concepts#Semantics"},"DIDKit Core\nConcepts")," entry."),(0,a.kt)("h3",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,'The mental model of a "wallet" for storing directly and manually controlled\ninformation and assets has become increasingly common in recent years thanks to\nthe growing popularity of ledger-based cryptocurrencies, NFTs, and other virtual\nassets controlled by cryptography. Just as wallet software makes cryptographic\nkey management intuitive and human-scaled when handling such\ncryptographically-controlled assets on common ledgers, so too can "wallet"\ninterfaces make cryptographically-controlled documents like Verifiable\nCredentials manageable. '),(0,a.kt)("p",null,'In the verifiable credential space, a "wallet" is traditionally assumed to\nmanage one or more strong cryptographic identifiers, which must be authenticated\nto an issuer to receive identifier-specific or identifier-locked credentials.\nThis is often assumed to be a direct and interactive process, as is the process\nof presenting these strong credentials to verifiers (usually\ndouble-authenticated, to both the verifier and to the credential, with two\nrespective identifiers). Credible Wallet was designed to a secure,\nproduction-grade, yet lightweight and general-purpose wallet for such use cases,\ncompletely free of platform-, vendor-, or blockchain-lock-in and almost free of\nopinions (our preference for open standards is, after all, an opinion).'),(0,a.kt)("p",null,'There are, however, fiduciary, automated, and/or "custodial" wallets (by analogy\nto cryptocurrency). Here, the dividing line between wallets and agents,\nservices, and service providers gets a little blurry; particularly when the\nwallet holder is a legal entity or non-human actor, this is an important wrinkle\non the concept of the "wallet." Here, DIDKit may be combined with enterprise\nidentity and security platforms to provide a less human-scale "wallet" for\nhandling strong credentials about human and non-human actors. '),(0,a.kt)("h3",{id:"decentralized-identifiers-dids"},'Decentralized Identifiers ("',(0,a.kt)("em",{parentName:"h3"},"DIDs"),'")'),(0,a.kt)("p",null,"Decentralized Identifiers are stable identifiers which are bound to a\ncontrolling keypair, which is usually rotatable without changing the identifier.\nThis is achieved by a publication mechanism maintaining information about key\nmaterial in verifiable data stores (usually distributed ledgers) over time. This\ninformation is referred to as a DID Document. The\n",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"specification")," governing these identifiers is\nmaintained by a dedicated W3C ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working group"),",\nof which Spruce is a member. For more information on the W3C, see the ",(0,a.kt)("strong",{parentName:"p"},"Further\nReading")," section."),(0,a.kt)("h3",{id:"did-document"},"DID Document"),(0,a.kt)("p",null,'A record returned by a query for a DID, containing information on how to verify\ninformation linked in some way to that identifier. The name can be misleading,\nsince in many cases this "document" is entirely ephemeral or contextual and not\nintended to be a static file or document stored or cached anywhere.  It is\nsometimes couched in a "Resolution object," which contains metadata about the\nquery and resolution process, although most application developers have no need\nto worry about these DID mechanics. For a The\n',(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-resolution/"},"specification")," governing the\nDID--\x3eDocument resolution process is maintained by a dedicated W3C ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working\ngroup"),", of which Spruce is a member. For more\ninformation on the W3C, see the ",(0,a.kt)("strong",{parentName:"p"},"Further Reading")," section on our ",(0,a.kt)("a",{parentName:"p",href:"https://spruceid.dev/docs/further-reading"},"Developer\nPortal"),"."),(0,a.kt)("h3",{id:"did-method"},"DID Method"),(0,a.kt)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for\nDIDs in a given DID namespace. Most DID methods use blockchains or other\npublically-readable distributed ledgers as data registries, but some, such as\nDID:Web, use other systems of verification, such as secure DNS resolution. All\nmethods are specified by a registered specification. This specification explains\nhow to validate a DID (namespace rules), where to query and what to expect back\nwhen resolving a DID, etc. The\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-spec-registries/#did-methods"},"registry")," of compliant\nspecifications for DID Methods is maintained by a dedicated W3C ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working\ngroup"),", of which Spruce is a member. For more\ninformation on the W3C, see the ",(0,a.kt)("strong",{parentName:"p"},"Further Reading")," section on our ",(0,a.kt)("a",{parentName:"p",href:"https://spruceid.dev/docs/further-reading"},"Developer\nPortal"),"."),(0,a.kt)("h3",{id:"didkey"},"DID:Key"),(0,a.kt)("p",null,"A special DID Method that generates conformant, offchain DID documents for\nlocal, private, and/or ephemeral resolution from a keypair. This can be helpful\nfor integrating conventional PKI or signing infrastructure with DID issuance, or\nto allow caching or local resolution of DID documents where it is undesirable or\nimpossible to resolve remote DIDs. The\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-key/"},"specification")," for this method was\noriginally created in, and maintained in, the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/"},"W3C-Credentials Community\nGroup"),"."),(0,a.kt)("h3",{id:"javascript-object-notation-json"},"JavaScript Object Notation (JSON)"),(0,a.kt)("p",null,"First described in 2006 as Javascript was becoming the most dominant web\ndevelopment language, and already widespread with it was standardized in 2013 by\n",(0,a.kt)("a",{parentName:"p",href:"https://www.ecma-international.org/publications-and-standards/standards/ecma-404/"},"ECMA-404"),',\nthe JSON "blob" or "object" is the most widely-used, language-independent format\nfor data. It is often pronounced "JAson" or "JaySON".'),(0,a.kt)("h3",{id:"json-ld"},"JSON-LD"),(0,a.kt)("p",null,'JSON-LD is a serialization and messaging format building Linked Data\ncapabilities onto data objects expressable as JSON objects. This means it is\nbuilt on (but not 100% within) the JSON format, with slightly different\nproperties, including serialization, ordering, and referencing mechanics.  In\nthe language of its specification\'s abstract, its "syntax is designed to easily\nintegrate into deployed systems that already use JSON, and provides a smooth\nupgrade path from JSON to JSON-LD." The\n',(0,a.kt)("a",{parentName:"p",href:"https://json-ld.org/spec/latest/json-ld/"},"specification")," is maintained and\ngoverned in the W3C."),(0,a.kt)("h3",{id:"json-web-key-jwk"},"JSON Web Key (JWK)"),(0,a.kt)("p",null,'A JSON Web Key, or a "JWK" for short, is a subset of JSON objects specified for\ncontaining cryptographic key or set of keys. They were\n',(0,a.kt)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7517"},"specified")," in 2015 through the IETF."))}h.isMDXComponent=!0}}]);