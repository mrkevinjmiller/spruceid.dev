"use strict";(self.webpackChunkdevsite=self.webpackChunkdevsite||[]).push([[720],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6136:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return p}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],c={id:"did-tz-deploy",title:"Deploying a DID:tz to Tezos Mainnet"},s={unversionedId:"credible-examples/did-tz-deploy",id:"credible-examples/did-tz-deploy",isDocsHomePage:!1,title:"Deploying a DID:tz to Tezos Mainnet",description:"Introduction",source:"@site/docs/credible-examples/did-tz-deploy.md",sourceDirName:"credible-examples",slug:"/credible-examples/did-tz-deploy",permalink:"/docs/credible-examples/did-tz-deploy",editUrl:"https://github.com/spruceid/spruceid.dev/edit/main/docs/credible-examples/did-tz-deploy.md",version:"current",frontMatter:{id:"did-tz-deploy",title:"Deploying a DID:tz to Tezos Mainnet"},sidebar:"docs",previous:{title:"VC Display",permalink:"/docs/credible-examples/vc-display"},next:{title:"Contributing",permalink:"/docs/contributing"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Know your smart contract (practice makes perfect)",id:"know-your-smart-contract-practice-makes-perfect",children:[]},{value:"Smart contracts (and externalities) at scale",id:"smart-contracts-and-externalities-at-scale",children:[]}],d={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"introduction"},"Introduction"),(0,a.kt)("p",null,'By default, Credible does not generate "on-chain" DIDs that publish their DID\ndocument to the main-net.  Instead, people who install DIDKit (whether from the\nApp Store or a build generated from our open-source code) will instead be\nprompted to generate an\n',(0,a.kt)("a",{parentName:"p",href:"https://did-tezos.spruceid.com/#implied-did-document"},'"implicit"'),' DID,  which\ncan be used to hold credentials anonymously or to participate in small, local\nnetworks where users register themselves and "discover" one another locally.'),(0,a.kt)("p",null,"Given the intricacies of privacy law and the consequences of putting\npersonally-associated identifiers into immutable, publicly-readable storage, we\ndo not recommend on-chain DIDs for general use, and this is why they are\ndisabled by default in our demonstrator app.  Legal entities that are\nbootstrapping an existing strong public presence on web2 (i.e., companies with\nmajor websites and infrastructure access to them) are encouraged to use\n",(0,a.kt)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-web/"},"did:web"),", which is implemented\nout-of-the-box in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spruceid/ssi/tree/main/did-web"},"DIDKit"),"\nand can be resolved by Credible verification."),(0,a.kt)("p",null,'There are, however, other use-cases. A DID may need to be publicly resolvable,\nand if it\'s not being used in public and correlated, publishing its DID Document\nto a blockchain might be an appropriate way of doing so. An independent artist\nselling NFTs or e-books might want to publish a DID Document and be "resolvable"\nto allow direct communications and to "hang a shingle" for their micro-business,\nas it were. A large enterprise might want to provision its employees with mobile\nphones that handle signatures and authentication functions on a private network,\nor even a "private blockchain".  A Credible wallet can receive and present\ncredentials of which an inanimate object is the subject.  All of these could\nrequire a private key generated on a web-wallet, a phone, or a virtual/emulated\nphone to register its DID Document on a distributed ledger.'),(0,a.kt)("p",null,"For these use-cases, we are including the following step-by-step instructions-- how these fit into a proof-of-concept or production project will, of course, take some further research."),(0,a.kt)("h2",{id:"setup"},"Setup"),(0,a.kt)("p",null,"Before deploying smart contracts ",(0,a.kt)("em",{parentName:"p"},"en masse")," or building smart-contract\ncapability into a custom build of Credible, you should get to know the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito"},"Tezos\nDID Manager"),".\nTo do so, use the node package manager to install the Taquito virtual machine\ninterface from the ",(0,a.kt)("inlineCode",{parentName:"p"},"contract/taquito")," folder of a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito"},"DIDKit\nenvironment"),".\nThis will turn your local sandbox into a Tezos-connected local sandbox."),(0,a.kt)("p",null,"As you can see in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito#usage"},"readme\nfile"),"\nfor the smart contract, the default target for DID Manager smart contracts is\nthe Tezos main-net, but this can be overriden with the -u / --url flag. "),(0,a.kt)("h2",{id:"know-your-smart-contract-practice-makes-perfect"},"Know your smart contract (practice makes perfect)"),(0,a.kt)("p",null,"Florencenet is the best test-net to use, as it runs the current stable code and\nis actively maintained. There are, however, ",(0,a.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/introduction/test_networks.html"},"various\noptions")," which might be\nmore appropriate to your use-case or project."),(0,a.kt)("p",null,"There is also a ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.tzalpha.net/"},"faucet interface")," for manually\ngenerating test-accounts (one at a time) that works on Florencenet or on another\ntestnets. "),(0,a.kt)("p",null,"Download a faucet file to your local /contract/taquito folder and then use it to\ntest the RPC calls and returns outlined in our ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito"},"contracts/taquito folder\nreadme"),"."),(0,a.kt)("p",null,'For example, if you take a JSON file from the faucet and copy it into your\nDIDKit DID manager folder as "faucet.json", you can run this command from the\nsame folder:'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"node did_manager.js originate -u https://api.tez.ie/rpc/florencenet -f faucet.json -e https://example.com\n")),(0,a.kt)("p",null,"And it will create a smart contract on florencenet that resolves to a DID\nDocument with ",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/did-core/#services"},"service block")," that\nlooks like this (except with a valid tz1 address instead of tz1...)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'"service": [{\n   "id": "did:tz:florencenet:tz1...",\n   "type": "TezosDiscoveryService",\n   "serviceEndpoint": "https://example.com"\n}]\n')),(0,a.kt)("p",null,"When you run this command over the RPC interface, it will return the name of the\nsmart contract (",(0,a.kt)("inlineCode",{parentName:"p"},"KT1..."),"), which you can then see querying a florencenet block\nexplorer like ",(0,a.kt)("a",{parentName:"p",href:"https://better-call.dev/"},"better-call.dev"),", and which yields a stable web URL that looks like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"`https://better-call.dev/florencenet/KT1...`\n")),(0,a.kt)("p",null,"Playing around with the options (on a testnet) is a good way to get comfortable with your options-- without paying any transaction fees or worrying about anyone's privacy."),(0,a.kt)("h2",{id:"smart-contracts-and-externalities-at-scale"},"Smart contracts (and externalities) at scale"),(0,a.kt)("p",null,'If you would like to build on-chain registration into a custom build of\nCredible, you will have to build RPC calls into your application based on what\nyou learned experimenting above. Similarly, "off-chain registration" or local\nregistration of keypairs into a more gated or permissions network is also\npossible, but out of scope for the Credible SDK.  '),(0,a.kt)("p",null,'When architecting such a system though, we strongly recommend thinking about the\ncorrelation, privacy, and context-preservating risks involved in publishing\nidentifiers of any kind: what information can be gleaned and correlated to other\ndata by crawlers of various kinds? What deletion or tombstoning options are\navailable for "pruning" or removing those publications from the crawlable public\nrecord? What historical query capabilities are offered by that record system or\nledger, after a takedown/deletion request has been executed?'))}p.isMDXComponent=!0}}]);