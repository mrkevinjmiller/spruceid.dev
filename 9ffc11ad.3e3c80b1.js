(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=d(n),b=r,h=p["".concat(i,".").concat(b)]||p[b]||u[b]||a;return n?o.a.createElement(h,c(c({ref:t},l),{},{components:n})):o.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),o=n(7),a=(n(0),n(112)),i=["components"],c={id:"did-tz-deploy",title:"Deploying a DID:tz to Tezos Mainnet"},s={unversionedId:"credible-examples/did-tz-deploy",id:"credible-examples/did-tz-deploy",isDocsHomePage:!1,title:"Deploying a DID:tz to Tezos Mainnet",description:"Introduction",source:"@site/docs\\credible-examples\\did-tz-deploy.md",slug:"/credible-examples/did-tz-deploy",permalink:"/docs/credible-examples/did-tz-deploy",editUrl:"https://github.com/spruceid/docs/credible-examples/did-tz-deploy.md",version:"current",sidebar:"docs",previous:{title:"VC Display",permalink:"/docs/credible-examples/vc-display"},next:{title:"Contributing",permalink:"/docs/contributing"}},l=[{value:"Introduction",id:"introduction",children:[]},{value:"Setup",id:"setup",children:[]},{value:"Know your smart contract (practice makes perfect)",id:"know-your-smart-contract-practice-makes-perfect",children:[]},{value:"Smart contracts (and externalities) at scale",id:"smart-contracts-and-externalities-at-scale",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"introduction"},"Introduction"),Object(a.b)("p",null,'By default, Credible does not generate "on-chain" DIDs that publish their DID\ndocument to the main-net.  Instead, people who install DIDKit (whether from the\nApp Store or a build generated from our open-source code) will instead be\nprompted to generate an\n',Object(a.b)("a",{parentName:"p",href:"https://did-tezos.spruceid.com/#implied-did-document"},'"implicit"'),' DID,  which\ncan be used to hold credentials anonymously or to participate in small, local\nnetworks where users register themselves and "discover" one another locally.'),Object(a.b)("p",null,"Given the intricacies of privacy law and the consequences of putting\npersonally-associated identifiers into immutable, publicly-readable storage, we\ndo not recommend on-chain DIDs for general use, and this is why they are\ndisabled by default in our demonstrator app.  Legal entities that are\nbootstrapping an existing strong public presence on web2 (i.e., companies with\nmajor websites and infrastructure access to them) are encouraged to use\n",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-web/"},"did:web"),", which is implemented\nout-of-the-box in ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/ssi/tree/main/did-web"},"DIDKit"),"\nand can be resolved by Credible verification."),Object(a.b)("p",null,'There are, however, other use-cases. A DID may need to be publicly resolvable,\nand if it\'s not being used in public and correlated, publishing its DID Document\nto a blockchain might be an appropriate way of doing so. An independent artist\nselling NFTs or e-books might want to publish a DID Document and be "resolvable"\nto allow direct communications and to "hang a shingle" for their micro-business,\nas it were. A large enterprise might want to provision its employees with mobile\nphones that handle signatures and authentication functions on a private network,\nor even a "private blockchain".  A Credible wallet can receive and present\ncredentials of which an inanimate object is the subject.  All of these could\nrequire a private key generated on a web-wallet, a phone, or a virtual/emulated\nphone to register its DID Document on a distributed ledger.'),Object(a.b)("p",null,"For these use-cases, we are including the following step-by-step instructions-- how these fit into a proof-of-concept or production project will, of course, take some further research."),Object(a.b)("h2",{id:"setup"},"Setup"),Object(a.b)("p",null,"Before deploying smart contracts ",Object(a.b)("em",{parentName:"p"},"en masse")," or building smart-contract\ncapability into a custom build of Credible, you should get to know the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito"},"Tezos\nDID Manager"),".\nTo do so, use the node package manager to install the Taquito virtual machine\ninterface from the ",Object(a.b)("inlineCode",{parentName:"p"},"contract/taquito")," folder of a ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito"},"DIDKit\nenvironment"),".\nThis will turn your local sandbox into a Tezos-connected local sandbox."),Object(a.b)("p",null,"As you can see in the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito#usage"},"readme\nfile"),"\nfor the smart contract, the default target for DID Manager smart contracts is\nthe Tezos main-net, but this can be overriden with the -u / --url flag. "),Object(a.b)("h2",{id:"know-your-smart-contract-practice-makes-perfect"},"Know your smart contract (practice makes perfect)"),Object(a.b)("p",null,"Florencenet is the best test-net to use, as it runs the current stable code and\nis actively maintained. There are, however, ",Object(a.b)("a",{parentName:"p",href:"https://tezos.gitlab.io/introduction/test_networks.html"},"various\noptions")," which might be\nmore appropriate to your use-case or project."),Object(a.b)("p",null,"There is also a ",Object(a.b)("a",{parentName:"p",href:"https://faucet.tzalpha.net/"},"faucet interface")," for manually\ngenerating test-accounts (one at a time) that works on Florencenet or on another\ntestnets. "),Object(a.b)("p",null,"Download a faucet file to your local /contract/taquito folder and then use it to\ntest the RPC calls and returns outlined in our ",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/did-tezos/tree/main/contract/taquito"},"contracts/taquito folder\nreadme"),"."),Object(a.b)("p",null,'For example, if you take a JSON file from the faucet and copy it into your\nDIDKit DID manager folder as "faucet.json", you can run this command from the\nsame folder:'),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"node did_manager.js originate -u https://api.tez.ie/rpc/florencenet -f faucet.json -e https://example.com\n")),Object(a.b)("p",null,"And it will create a smart contract on florencenet that resolves to a DID\nDocument with ",Object(a.b)("a",{parentName:"p",href:"https://w3c.github.io/did-core/#services"},"service block")," that\nlooks like this (except with a valid tz1 address instead of tz1...)"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'"service": [{\n   "id": "did:tz:florencenet:tz1...",\n   "type": "TezosDiscoveryService",\n   "serviceEndpoint": "https://example.com"\n}]\n')),Object(a.b)("p",null,"When you run this command over the RPC interface, it will return the name of the\nsmart contract (",Object(a.b)("inlineCode",{parentName:"p"},"KT1..."),"), which you can then see querying a florencenet block\nexplorer like ",Object(a.b)("a",{parentName:"p",href:"https://better-call.dev/"},"better-call.dev"),", and which yields a stable web URL that looks like this:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"`https://better-call.dev/florencenet/KT1...`\n")),Object(a.b)("p",null,"Playing around with the options (on a testnet) is a good way to get comfortable with your options-- without paying any transaction fees or worrying about anyone's privacy."),Object(a.b)("h2",{id:"smart-contracts-and-externalities-at-scale"},"Smart contracts (and externalities) at scale"),Object(a.b)("p",null,'If you would like to build on-chain registration into a custom build of\nCredible, you will have to build RPC calls into your application based on what\nyou learned experimenting above. Similarly, "off-chain registration" or local\nregistration of keypairs into a more gated or permissions network is also\npossible, but out of scope for the Credible SDK.  '),Object(a.b)("p",null,'When architecting such a system though, we strongly recommend thinking about the\ncorrelation, privacy, and context-preservating risks involved in publishing\nidentifiers of any kind: what information can be gleaned and correlated to other\ndata by crawlers of various kinds? What deletion or tombstoning options are\navailable for "pruning" or removing those publications from the crawlable public\nrecord? What historical query capabilities are offered by that record system or\nledger, after a takedown/deletion request has been executed? '))}p.isMDXComponent=!0}}]);