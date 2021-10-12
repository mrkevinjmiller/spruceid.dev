"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[2226],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),p=i,m=u["".concat(s,".").concat(p)]||u[p]||h[p]||a;return n?r.createElement(m,o(o({ref:t},d),{},{components:n})):r.createElement(m,o({ref:t},d))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9490:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return h}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],c={id:"glossary",title:"Credible Glossary",sidebar_label:"Glossary"},s={unversionedId:"credible/glossary",id:"credible/glossary",isDocsHomePage:!1,title:"Credible Glossary",description:"Terminology",source:"@site/docs/credible/glossary.md",sourceDirName:"credible",slug:"/credible/glossary",permalink:"/docs/credible/glossary",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/credible/glossary.md",version:"current",sidebar_label:"Glossary",frontMatter:{id:"glossary",title:"Credible Glossary",sidebar_label:"Glossary"},sidebar:"docs",previous:{title:"Authenticating to other services",permalink:"/docs/credible/authn"},next:{title:"Overview of Examples",permalink:"/docs/credible-examples/overview"}},l=[{value:"Terminology",id:"terminology",children:[{value:"Verifiable Credentials (&quot;<em>VCs</em>&quot;)",id:"verifiable-credentials-vcs",children:[]},{value:"Wallet",id:"wallet",children:[]},{value:"VC Nomenclature &amp; Life-Cycle",id:"vc-nomenclature--life-cycle",children:[]},{value:"Decentralized Identifiers (&quot;<em>DIDs</em>&quot;)",id:"decentralized-identifiers-dids",children:[]},{value:"DID Document",id:"did-document",children:[]},{value:"DID Taxonomy &amp; Architecture",id:"did-taxonomy--architecture",children:[]},{value:"DID Method",id:"did-method",children:[]},{value:"DID:Key",id:"didkey",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],d={toc:l};function h(e){var t=e.components,c=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,c,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"terminology"},"Terminology"),(0,a.kt)("p",null,"For more detailed explanations and references to core specifications, see the ",(0,a.kt)("a",{parentName:"p",href:"https://spruceid.dev/docs/glossary"},"developer portal glossary"),"."),(0,a.kt)("h3",{id:"verifiable-credentials-vcs"},'Verifiable Credentials ("',(0,a.kt)("em",{parentName:"h3"},"VCs"),'")'),(0,a.kt)("p",null,"Verifiable Credentials combine properties and superpowers from many different\nmental models. They are like portable, free-floating data units, which are not\nexactly documents or data points or records. They are signed and thus\ntamper-evident, and thus share much of the verifiability of blockchain data or\nsigned PDFs insofar as the signatures they contain can be properly verified by\nreference to the identities included inside the document. Particularly in the\nform of JSON-LD verifiable credentials, they are highly portable, in that the\nstructure of their data can often be reconstructed years later and completely\nout of their original context. For more on JSON-LD and linked data, see the\nSemantics section of the ",(0,a.kt)("a",{parentName:"p",href:"/docs/didkit/concepts#Semantics"},"DIDKit Core\nConcepts")," entry."),(0,a.kt)("h3",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,'The mental model of a "wallet" for storing directly and manually controlled\ninformation and assets has become increasingly common in recent years thanks to\nthe growing popularity of ledger-based cryptocurrencies, NFTs, and other virtual\nassets controlled by cryptography. Just as wallet software makes cryptographic\nkey management intuitive and human-scaled when handling such\ncryptographically-controlled assets on common ledgers, so too can "wallet"\ninterfaces make cryptographically-controlled documents like Verifiable\nCredentials manageable. '),(0,a.kt)("p",null,'In the verifiable credential space, a "wallet" is traditionally assumed to\nmanage one or more strong cryptographic identifiers, which must be authenticated\nto an issuer to receive identifier-specific or identifier-locked credentials.\nThis is often assumed to be a direct and interactive process, as is the process\nof presenting these strong credentials to verifiers (usually\ndouble-authenticated, to both the verifier and to the credential, with two\nrespective identifiers). Credible Wallet was designed to a secure,\nproduction-grade, yet lightweight and general-purpose wallet for such use cases,\ncompletely free of platform-, vendor-, or blockchain-lock-in.'),(0,a.kt)("p",null,'There are, however, fiduciary, automated, and/or "custodial" wallets (by analogy\nto cryptocurrency). Here, the dividing line between wallets and agents,\nservices, and service providers gets a little blurry; particularly when the\nwallet holder is a legal entity or non-human actor, this is an important wrinkle\non the concept of the "wallet." Here, DIDKit may be combined with enterprise\nidentity and security platforms to provide a less human-scale "wallet" for\nhandling strong credentials about human and non-human actors. '),(0,a.kt)("h3",{id:"vc-nomenclature--life-cycle"},"VC Nomenclature & Life-Cycle"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Diagram",src:n(6471).Z})),(0,a.kt)("p",null,"Src: ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#lifecycle-details"},"DID specification")),(0,a.kt)("h3",{id:"decentralized-identifiers-dids"},'Decentralized Identifiers ("',(0,a.kt)("em",{parentName:"h3"},"DIDs"),'")'),(0,a.kt)("p",null,"Decentralized Identifiers are stable identifiers which are bound to a\ncontrolling keypair, which is usually rotatable without changing the identifier.\nThis is achieved by a publication mechanism maintaining information about key\nmaterial in verifiable data stores (usually distributed ledgers) over time. This\ninformation is referred to as a DID Document. The\n",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/"},"specification")," governing these identifiers is\nmaintained by a dedicated W3C ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working group"),",\nof which Spruce is a member. For more information on the W3C, see the ",(0,a.kt)("strong",{parentName:"p"},"Further\nReading")," section."),(0,a.kt)("h3",{id:"did-document"},"DID Document"),(0,a.kt)("p",null,'A record returned by a query for a DID, containing information on how to verify\ninformation linked in some way to that identifier. The name can be misleading,\nsince in many cases this "document" is entirely ephemeral or contextual and not\nintended to be a static file or document stored or cached anywhere.  It is\nsometimes couched in a "Resolution object," which contains metadata about the\nquery and resolution process, although most application developers have no need\nto worry about these DID mechanics. For a The\n',(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-resolution/"},"specification")," governing the\nDID--\x3eDocument resolution process is maintained by a dedicated W3C ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working\ngroup"),", of which Spruce is a member. For more\ninformation on the W3C, see the ",(0,a.kt)("strong",{parentName:"p"},"Further Reading")," section."),(0,a.kt)("h3",{id:"did-taxonomy--architecture"},"DID Taxonomy & Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Diagram",src:n(6677).Z})),(0,a.kt)("p",null,"Src: ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#architecture-overview"},"DID specification")),(0,a.kt)("h3",{id:"did-method"},"DID Method"),(0,a.kt)("p",null,"A set of interdependent governance, publication, and discovery mechanisms for\nDIDs in a given DID namespace, specified by a shared specification. This\nspecification explains how to validate a DID (namespace rules), where to query\nand what to expect back when resolving a DID, etc. The\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-spec-registries/#did-methods"},"registry")," of compliant\nspecifications for DID Methods is maintained by a dedicated W3C ",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"working\ngroup"),", of which Spruce is a member. For more\ninformation on the W3C, see the ",(0,a.kt)("strong",{parentName:"p"},"Further Reading")," section."),(0,a.kt)("h3",{id:"didkey"},"DID:Key"),(0,a.kt)("p",null,"A special DID Method that generates conformant, offchain DID documents for\nlocal, private, and/or ephemeral resolution from a keypair. This can be helpful\nfor integrating conventional PKI or signing infrastructure with DID issuance, or\nto allow caching or local resolution of DID documents where it is undesirable or\nimpossible to resolve remote DIDs. The\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-key/"},"specification")," for this method was\noriginally created in, and maintained in, the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/"},"W3C-Credentials Community\nGroup"),"."),(0,a.kt)("h2",{id:"further-reading"},"Further Reading"),(0,a.kt)("p",null,"Further educational/contextual resources on decentralized identity topics can be\nfound on the ",(0,a.kt)("a",{parentName:"p",href:"https://identity.foundation/education/"},"Education page")," of the\nDecentralized Identity Foundation. "),(0,a.kt)("p",null,"For insight into the core specifications authored and maintained by the W3C\nworking group, the best overview is the github repositories section of their\n",(0,a.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"homepage")," on W3.org. The largely overlapping\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/"},"Credentials Community Group"),", with weekly open,\nrecorded, and scribed ",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/meetings/"},"calls")," open to W3C\nnon-members, is also a good venue for getting to know the debates around the\ncore specifications."))}h.isMDXComponent=!0},6677:function(e,t,n){t.Z=n.p+"assets/images/did-core_architecture-8c0f7ea8dea959eff953e1f87a06ab54.png"},6471:function(e,t,n){t.Z=n.p+"assets/images/did-core_vc-lifecycle-6f25b06563e7a70c62afe8d4bc920e6e.png"}}]);