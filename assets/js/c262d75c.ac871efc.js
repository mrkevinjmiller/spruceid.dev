"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[9090],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return p}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=i.createContext({}),l=function(e){var t=i.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),p=a,f=u["".concat(c,".").concat(p)]||u[p]||h[p]||r;return n?i.createElement(f,o(o({ref:t},d),{},{components:n})):i.createElement(f,o({ref:t},d))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<r;l++)o[l]=n[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},5708:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return h}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"primer",title:"What is Decentralized Identity?"},c={unversionedId:"primer",id:"primer",isDocsHomePage:!1,title:"What is Decentralized Identity?",description:"Today's Centralized Identity Systems",source:"@site/docs/primer.md",sourceDirName:".",slug:"/primer",permalink:"/docs/primer",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/primer.md",version:"current",frontMatter:{id:"primer",title:"What is Decentralized Identity?"},sidebar:"docs",previous:{title:"Welcome to the Spruce ID Developer Portal",permalink:"/docs/"},next:{title:"Introducing DIDKit",permalink:"/docs/didkit/"}},l=[{value:"Today&#39;s Centralized Identity Systems",id:"todays-centralized-identity-systems",children:[]},{value:"How Decentralization Helps",id:"how-decentralization-helps",children:[]},{value:"What Spruce is About",id:"what-spruce-is-about",children:[]},{value:"A Social Theory of Decentralized Identity",id:"a-social-theory-of-decentralized-identity",children:[{value:"The Mechanics of Data Registries",id:"the-mechanics-of-data-registries",children:[]},{value:"The Mechanics of Verifiable Credentials",id:"the-mechanics-of-verifiable-credentials",children:[]},{value:"The Mechanics of Decentralized Identifiers",id:"the-mechanics-of-decentralized-identifiers",children:[]}]},{value:"Further Reading",id:"further-reading",children:[]}],d={toc:l};function h(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"todays-centralized-identity-systems"},"Today's Centralized Identity Systems"),(0,r.kt)("p",null,'Identifying users securely with minimum invasion of privacy or risk of leakage\nis a core problem in essentially all software systems. Since the great boom of\npersonal computing, this has created a whole sub-industry of identity and\naccess-management (IAM) technologies, which overwhelmingly improve the mousetrap\nof mapping users to "accounts".'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Centralized databases concentrate not just informational power, but also risk\nand liability."))),(0,r.kt)("p",null,'As more and more real-world value get digitized over the decades, "identity\ndata" has become a chokepoint for virtually all other digital value systems.\nFurthermore, every central repository of personal information has become a\ntarget of opportunistic business models, many of them illegal and based on\nexfiltration and interception of personal data. The legal spheres of so-called\n"ad-tech" and data brokerages and the illegal spheres of espionage, identity\ntheft, and industrialized computer fraud share many characteristics.'),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Both legal and illegal industries devoted to non-consentual data sharing are\ngrowing every year. Both are largely impervious to regulation, and both are\ndeeply ",(0,r.kt)("strong",{parentName:"p"},"demoralizing and disempowering to the average end-user"),".")),(0,r.kt)("h2",{id:"how-decentralization-helps"},"How Decentralization Helps"),(0,r.kt)("p",null,'In recent years, however, we have seen a wave of identity technologies emerge\nthat strive to re-architect this whole landscape defensively, giving\nfine-grained control over all personal data back to you, the user.\nDecentralization of data systems, in the sense of bottoms-up governance of\ninfrastructure and alternatives to monopolistic platform economics, tends to fit\nhand in glove with decentralized identity technologies. Center stage among this\nweb of human-centric technologies is increasingly given to so-called\n"self-sovereign identity," which apply decentralized identity technologies to\nmanagement of individuals\' personal data.'),(0,r.kt)("h2",{id:"what-spruce-is-about"},"What Spruce is About"),(0,r.kt)("p",null,"Spruce is an open-source, decentralized identity company that works openly to\nadvance these technologies in a sustainable, standards-driven way. We share the\nvalues of the community that has been driving this technology for a decade, and\nwe want to see it succeed in the most organic and decentralized way possible.\nThat means high standards for future-proof engineering, and an open-source\nstrategy that keeps infrastructure and standards governance in the hands of a\ndemocratic commons."),(0,r.kt)("h2",{id:"a-social-theory-of-decentralized-identity"},"A Social Theory of Decentralized Identity"),(0,r.kt)("p",null,'Breaking the momentum of decades of centralized server/client architectures and\n"user accounts" requires a rethinking of the basic assumptions of data\nmanagement, as well as data business. This requires imagining forms of\ninformation that can be self-securing, highly portable, self-verifying, and not\nbound too tightly to their original context and architecture. While this may\nsound like an esoteric problem for computer science, it is also a political,\nlegal, and social question, because it requires reconceiving of the roles and\nrights of all the parties to data exchanges.'),(0,r.kt)("p",null,'Decentralized identity thinking tends to call any valuable information about\nsomeone a "credential" and the person in question a "subject". It names the\nroles thusly:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},'"Issuers", who emit portable credentials about a subject. Ex: A university.'),(0,r.kt)("li",{parentName:"ol"},'"holders" of that information, usually the subjects or trusted agents acting\non their behalf. Ex: Students holding digital diplomas.'),(0,r.kt)("li",{parentName:"ol"},'"verifiers" who might consume or act on that information.')),(0,r.kt)("p",null,'The goals of decentralized identity are often expressed in negatives and\nminimums: the disclosure of the minimum data to each verifier necessary to their\npurpose, the minimum possibility of exfiltration or correlation (colloquially,\n"tracking"), the highest possible barrier to collusion between verifiers, the\ngreatest possible privacy for all parties relative to their peers and\ncounterparties. Even things like checking the revocation status when verifying a\nrevocable credential is thought of defensively-- how to ensure that the issuer\ncan revoke a credential while still ensuring that it receives no information\nabout who verifies it, or how often? This requires sophisticated indirection,\nand new ways of hiding sensitive information in shared, even public data\nregistries.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Social Diagram",src:n(6463).Z})),(0,r.kt)("p",null,"Src: ",(0,r.kt)("a",{parentName:"p",href:"https://w3c.github.io/vc-data-model/#ecosystem-overview"},"DID specification")),(0,r.kt)("h3",{id:"the-mechanics-of-data-registries"},"The Mechanics of Data Registries"),(0,r.kt)("p",null,'From the point of view of politics, this impersonal and democratic archive of\nverifiable "facts" accessed in common by all parties, is the most mysterious and\nenigmatic of the actors. Decentralization makes many such omnipotent but\nimpersonal authorities in the form of ledgers, oracles, "blockchains," and\nmeshes of immutable or content-addressed data, so this concept may be less\nmysterious to those steeped in those technologies. It is a registry in the sense\nthat all data gets puts there (registered) by people and software running on\nbehalf of people and organizations, but it is a decentralized and unconventional\nseries of linked registries.'),(0,r.kt)("h3",{id:"the-mechanics-of-verifiable-credentials"},"The Mechanics of Verifiable Credentials"),(0,r.kt)("p",null,'There is a whole vocabulary used to describe how credentials are handled,\nstored, presented, verified, and revoked. The software that individual actors\nuse to receive, hold, and present them is called a "wallet", and the software\nused to issue, transfer, revoke, and verify them is called an "agent". Both\ninteract with verifiable registries in various ways, must importantly for\nidentifying and verifying each other. Spruce\'s wallet is called Credible, and\nthe engine Spruce uses to create and power agents is called DIDKit. Both are\nintended to work at many scales and in many contexts.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture Diagram",src:n(6471).Z})),(0,r.kt)("p",null,"Src: ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#lifecycle-details"},"DID specification")),(0,r.kt)("h3",{id:"the-mechanics-of-decentralized-identifiers"},"The Mechanics of Decentralized Identifiers"),(0,r.kt)("p",null,"Verifiable Credentials are designed refer to their issuers and subjects\nverifiably. This means that in the ideal case, any reference to an entity should\nbe under that entity's direct and ultimate control, yet still be used to verify\nthe credential's contents and trustworthiness cryptographically. In plain\nlanguage, this means that a verifier would need to be able to get a\ncryptographic public key corresponding to that identifier, which might change or\nbe deactivated over time."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Architecture Diagram",src:n(6677).Z})),(0,r.kt)("p",null,"Src: ",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core/#architecture-overview"},"DID specification")),(0,r.kt)("p",null,'The most "decentralized" of the identifiers that meet these requirements are\nso-called "decentralized identifiers," or DIDs. These are each registered and\nresolved on autonomous namespaces (often closely coupled to specific\npublic-readable DLTs like blockchains), which function as verifiable data\nregistries for their specific kind of identifiers. Each such namespace is\ngoverned by a "DID Method," which is a publically-specified micro-protocol\ncontaining namespace rules, CRUD and resolution mechanics, cryptographic\nsignatures schemes, and blockchain-specific data models and algorithms. Each\n"DID method" has unique characteristics and infrastructures, with particular\nstrengths and weaknesses; even their security guarantees and privacy engineering\nvary widely, so it can be dangerous to assume they are all equal and\ninterchangeable. Each is like a little internet unto itself!'),(0,r.kt)("h2",{id:"further-reading"},"Further Reading"),(0,r.kt)("p",null,"Further educational/contextual resources on decentralized identity topics can be\nfound on the ",(0,r.kt)("a",{parentName:"p",href:"https://identity.foundation/education/"},"Education page")," of the\nDecentralized Identity Foundation."),(0,r.kt)("p",null,"For insight into the core specifications authored and maintained by the W3C\nworking group, the best overview is the github repositories section of their\n",(0,r.kt)("a",{parentName:"p",href:"https://www.w3.org/2019/did-wg/"},"homepage")," on W3.org. The largely overlapping\n",(0,r.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/"},"Credentials Community Group"),", with weekly open,\nrecorded, and scribed ",(0,r.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/meetings/"},"calls")," open to W3C\nnon-members, is also a good venue for getting to know the debates around the\ncore specifications."))}h.isMDXComponent=!0},6677:function(e,t,n){t.Z=n.p+"assets/images/did-core_architecture-8c0f7ea8dea959eff953e1f87a06ab54.png"},6463:function(e,t,n){t.Z=n.p+"assets/images/did-core_social-roles-27d0e305d20afe2287f730bb9ed2c448.png"},6471:function(e,t,n){t.Z=n.p+"assets/images/did-core_vc-lifecycle-6f25b06563e7a70c62afe8d4bc920e6e.png"}}]);