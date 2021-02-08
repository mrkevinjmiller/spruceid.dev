(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{100:function(e,t,n){"use strict";n.d(t,"a",(function(){return h})),n.d(t,"b",(function(){return b}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=i.a.createContext({}),l=function(e){var t=i.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},h=function(e){var t=l(e.components);return i.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},u=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),h=l(n),u=r,b=h["".concat(o,".").concat(u)]||h[u]||p[u]||a;return n?i.a.createElement(b,s(s({ref:t},d),{},{components:n})):i.a.createElement(b,s({ref:t},d))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var d=2;d<a;d++)o[d]=n[d];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return l}));var r=n(3),i=n(7),a=(n(0),n(100)),o={id:"glossary",title:"Glossary"},s={unversionedId:"glossary",id:"glossary",isDocsHomePage:!1,title:"Glossary",description:"Terminology",source:"@site/docs/glossary.md",slug:"/glossary",permalink:"/docs/glossary",editUrl:"https://github.com/spruceid/docs/glossary.md",version:"current",sidebar:"docs",previous:{title:"Overview of Examples",permalink:"/docs/credible/examples"},next:{title:"Further Reading",permalink:"/docs/further-reading"}},c=[{value:"Terminology",id:"terminology",children:[{value:"Verifiable Credentials (&quot;<em>VCs</em>&quot;)",id:"verifiable-credentials-vcs",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"Decentralized Identifiers (&quot;<em>DIDs</em>&quot;)",id:"decentralized-identifiers-dids",children:[]},{value:"DID Document",id:"did-document",children:[]},{value:"DID Method",id:"did-method",children:[]},{value:"DID:Key",id:"didkey",children:[]},{value:"JavaScript Object Notation (JSON)",id:"javascript-object-notation-json",children:[]},{value:"JSON-LD",id:"json-ld",children:[]},{value:"JSON Web Key (JWK)",id:"json-web-key-jwk",children:[]}]}],d={toc:c};function l(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"terminology"},"Terminology"),Object(a.b)("h3",{id:"verifiable-credentials-vcs"},'Verifiable Credentials ("',Object(a.b)("em",{parentName:"h3"},"VCs"),'")'),Object(a.b)("p",null,"Verifiable Credentials combine properties and superpowers from many different\nmental models. They are like portable, free-floating data units, which are not\nexactly documents or data points or records. They are signed and thus\ntamper-evident, and thus share much of the verifiability of blockchain data or\nsigned PDFs insofar as the signatures they contain can be properly verified by\nreference to the identities included inside the document. Particularly in the\nform of JSON-LD verifiable credentials, they are highly portable, in that the\nstructure of their data can often be reconstructed years later and completely\nout of their original context. For more on JSON-LD and linked data, see the\nSemantics section of the ",Object(a.b)("a",{parentName:"p",href:"/docs/didkit/concepts.md#Semantics"},"DIDKit Core\nConcepts")," entry."),Object(a.b)("h3",{id:"wallet"},"Wallet"),Object(a.b)("p",null,'The mental model of a "wallet" for storing directly and manually controlled\ninformation and assets has become increasingly common in recent years thanks to\nthe growing popularity of ledger-based cryptocurrencies, NFTs, and other virtual\nassets controlled by cryptography. Just as wallet software makes cryptographic\nkey management intuitive and human-scaled when handling such\ncryptographically-controlled assets on common ledgers, so too can "wallet"\ninterfaces make cryptographically-controlled documents like Verifiable\nCredentials manageable. '),Object(a.b)("p",null,'In the verifiable credential space, a "wallet" is traditionally assumed to\nmanage one or more strong cryptographic identifiers, which must be authenticated\nto an issuer to receive identifier-specific or identifier-locked credentials.\nThis is often assumed to be a direct and interactive process, as is the process\nof presenting these strong credentials to verifiers (usually\ndouble-authenticated, to both the verifier and to the credential, with two\nrespective identifiers). Credible Wallet was designed to a secure,\nproduction-grade, yet lightweight and general-purpose wallet for such use cases,\ncompletely free of platform-, vendor-, or blockchain-lock-in and almost free of\nopinions (our preference for open standards is, after all, an opinion).'),Object(a.b)("p",null,'There are, however, fiduciary, automated, and/or "custodial" wallets (by analogy\nto cryptocurrency). Here, the dividing line between wallets and agents,\nservices, and service providers gets a little blurry; particularly when the\nwallet holder is a legal entity or non-human actor, this is an important wrinkle\non the concept of the "wallet." Here, DIDKit may be combined with enterprise\nidentity and security platforms to provide a less human-scale "wallet" for\nhandling strong credentials about human and non-human actors. '),Object(a.b)("h3",{id:"decentralized-identifiers-dids"},'Decentralized Identifiers ("',Object(a.b)("em",{parentName:"h3"},"DIDs"),'")'),Object(a.b)("p",null,"Decentralized Identifiers are stable identifiers which are bound to a\ncontrolling keypair, which is usually rotatable without changing the identifier.\nThis is achieved by a publication mechanism maintaining information about key\nmaterial in verifiable data stores (usually distributed ledgers) over time. This\ninformation is referred to as a DID Document. The\n",Object(a.b)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"specification")," governing these identifiers is\nmaintained by a dedicated W3C ",Object(a.b)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working group"),",\nof which Spruce is a member. For more information on the W3C, see the ",Object(a.b)("strong",{parentName:"p"},"Further\nReading")," section."),Object(a.b)("h3",{id:"did-document"},"DID Document"),Object(a.b)("p",null,'A record returned by a query for a DID, containing information on how to verify\ninformation linked in some way to that identifier. The name can be misleading,\nsince in many cases this "document" is entirely ephemeral or contextual and not\nintended to be a static file or document stored or cached anywhere.  It is\nsometimes couched in a "Resolution object," which contains metadata about the\nquery and resolution process, although most application developers have no need\nto worry about these DID mechanics. For a The\n',Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-resolution/"},"specification")," governing the\nDID--\x3eDocument resolution process is maintained by a dedicated W3C ",Object(a.b)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working\ngroup"),", of which Spruce is a member. For more\ninformation on the W3C, see the ",Object(a.b)("strong",{parentName:"p"},"Further Reading")," section on our ",Object(a.b)("a",{parentName:"p",href:"https://spruceid.dev/docs/further-reading"},"Developer\nPortal"),"."),Object(a.b)("h3",{id:"did-method"},"DID Method"),Object(a.b)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for\nDIDs in a given DID namespace. Most DID methods use blockchains or other\npublically-readable distributed ledgers as data registries, but some, such as\nDID:Web, use other systems of verification, such as secure DNS resolution. All\nmethods are specified by a registered specification. This specification explains\nhow to validate a DID (namespace rules), where to query and what to expect back\nwhen resolving a DID, etc. The\n",Object(a.b)("a",{parentName:"p",href:"https://w3c.github.io/did-spec-registries/#did-methods"},"registry")," of compliant\nspecifications for DID Methods is maintained by a dedicated W3C ",Object(a.b)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working\ngroup"),", of which Spruce is a member. For more\ninformation on the W3C, see the ",Object(a.b)("strong",{parentName:"p"},"Further Reading")," section on our ",Object(a.b)("a",{parentName:"p",href:"https://spruceid.dev/docs/further-reading"},"Developer\nPortal"),"."),Object(a.b)("h3",{id:"didkey"},"DID:Key"),Object(a.b)("p",null,"A special DID Method that generates conformant, offchain DID documents for\nlocal, private, and/or ephemeral resolution from a keypair. This can be helpful\nfor integrating conventional PKI or signing infrastructure with DID issuance, or\nto allow caching or local resolution of DID documents where it is undesirable or\nimpossible to resolve remote DIDs. The\n",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-key/"},"specification")," for this method was\noriginally created in, and maintained in, the ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/"},"W3C-Credentials Community\nGroup"),"."),Object(a.b)("h3",{id:"javascript-object-notation-json"},"JavaScript Object Notation (JSON)"),Object(a.b)("p",null,"First described in 2006 as Javascript was becoming the most dominant web\ndevelopment language, and already widespread with it was standardized in 2013 by\n",Object(a.b)("a",{parentName:"p",href:"https://www.ecma-international.org/publications-and-standards/standards/ecma-404/"},"ECMA-404"),',\nthe JSON "blob" or "object" is the most widely-used, language-independent format\nfor data. It is often pronounced "JAson" or "JaySON".'),Object(a.b)("h3",{id:"json-ld"},"JSON-LD"),Object(a.b)("p",null,'JSON-LD is a serialization and messaging format building Linked Data\ncapabilities onto data objects expressable as JSON objects. This means it is\nbuilt on (but not 100% within) the JSON format, with slightly different\nproperties, including serialization, ordering, and referencing mechanics.  In\nthe language of its specification\'s abstract, its "syntax is designed to easily\nintegrate into deployed systems that already use JSON, and provides a smooth\nupgrade path from JSON to JSON-LD." The\n',Object(a.b)("a",{parentName:"p",href:"https://json-ld.org/spec/latest/json-ld/"},"specification")," is maintained and\ngoverned in the W3C."),Object(a.b)("h3",{id:"json-web-key-jwk"},"JSON Web Key (JWK)"),Object(a.b)("p",null,'A JSON Web Key, or a "JWK" for short, is a subset of JSON objects specified for\ncontaining cryptographic key or set of keys. They were\n',Object(a.b)("a",{parentName:"p",href:"https://tools.ietf.org/html/rfc7517"},"specified")," in 2015 through the IETF."))}l.isMDXComponent=!0}}]);