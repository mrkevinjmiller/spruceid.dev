(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{100:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return h}));var i=t(0),r=t.n(i);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=r.a.createContext({}),l=function(e){var n=r.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=l(e.components);return r.a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},f=r.a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=l(t),f=i,h=p["".concat(o,".").concat(f)]||p[f]||u[f]||a;return t?r.a.createElement(h,s(s({ref:n},c),{},{components:t})):r.a.createElement(h,s({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=f;var s={};for(var d in n)hasOwnProperty.call(n,d)&&(s[d]=n[d]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=t[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}f.displayName="MDXCreateElement"},75:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return d})),t.d(n,"default",(function(){return l}));var i=t(3),r=t(7),a=(t(0),t(100)),o={id:"example--core-functions-in-curl",title:"Bash Script - Core Functions (HTTP)"},s={unversionedId:"didkit/example--core-functions-in-curl",id:"didkit/example--core-functions-in-curl",isDocsHomePage:!1,title:"Bash Script - Core Functions (HTTP)",description:"Introduction",source:"@site/docs/didkit/example--core-functions-in-curl.md",slug:"/didkit/example--core-functions-in-curl",permalink:"/docs/didkit/example--core-functions-in-curl",editUrl:"https://github.com/spruceid/docs/didkit/example--core-functions-in-curl.md",version:"current",sidebar:"docs",previous:{title:"Bash Script - Core Functions (CLI)",permalink:"/docs/didkit/example--core-functions-in-bash"},next:{title:"Bash Script - Batch Generation & Verification",permalink:"/docs/didkit/example--batch-generation"}},d=[{value:"Introduction",id:"introduction",children:[]},{value:"Start with a keypair",id:"start-with-a-keypair",children:[]},{value:"Generate a DID:Key document",id:"generate-a-didkey-document",children:[]},{value:"Define verificationMethod for keypair.",id:"define-verificationmethod-for-keypair",children:[]},{value:"Start HTTP Server",id:"start-http-server",children:[]},{value:"Stop HTTP Server",id:"stop-http-server",children:[]},{value:"Prepare credential for issuing.",id:"prepare-credential-for-issuing",children:[]},{value:"Issue the verifiable credential.",id:"issue-the-verifiable-credential",children:[]},{value:"Verify a verifiable credential.",id:"verify-a-verifiable-credential",children:[]},{value:"Create presentation embedding verifiable credential.",id:"create-presentation-embedding-verifiable-credential",children:[]},{value:"Issue verifiable presentation.",id:"issue-verifiable-presentation",children:[]},{value:"Verify verifiable presentation.",id:"verify-verifiable-presentation",children:[]},{value:"Appendix: whole script without comments",id:"appendix-whole-script-without-comments",children:[]}],c={toc:d};function l(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(i.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"introduction"},"Introduction"),Object(a.b)("p",null,"This is an example shell script using all the core functions of DIDKit-CLI: key generation, credential/presentation issuance and verification."),Object(a.b)("p",null,Object(a.b)("em",{parentName:"p"},"Note: This script is meant to be in a DIDKit-CLI source directory. See the complete script below for setup details.")),Object(a.b)("h3",{id:"start-with-a-keypair"},"Start with a keypair"),Object(a.b)("p",null,"DIDKit can generate a unique ed25119 keypair from entropy. Alternately, you can provide a static key locally."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"if [ -e issuer_key.jwk ]; then\n    echo 'Using existing keypair.'\nelse\n    didkit generate-ed25519-key > issuer_key.jwk\n    echo 'Generated keypair.'\nfi\n\necho\n")),Object(a.b)("h3",{id:"generate-a-didkey-document"},"Generate a DID:Key document"),Object(a.b)("p",null,"This document gets wrapped around the keypair generated (or passed) in the previous step. For more context on the DID:key method, see the ",Object(a.b)("a",{parentName:"p",href:"https://w3c-ccg.github.io/did-method-key/"},"specification"),"."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"did=$(didkit key-to-did-key -k issuer_key.jwk)\nprintf 'DID: %s\\n\\n' \"$did\"\n")),Object(a.b)("h3",{id:"define-verificationmethod-for-keypair"},"Define verificationMethod for keypair."),Object(a.b)("p",null,"This is used to identify the key in linked data proofs. Verifiers of such proofs query a DID found in a credential based on what ","[registered]"," proof type (i.e., what kind of signatures) it needs key material to verify."),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"verification_method=$(didkit key-to-verification-method -k issuer_key.jwk)\nprintf 'verificationMethod: %s\\n\\n' \"$verification_method\"\n")),Object(a.b)("h3",{id:"start-http-server"},"Start HTTP Server"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},"didkit-http -p 9999 -k key.jwk & pid=$!\ndidkit_url=http://localhost:9999\n")),Object(a.b)("h3",{id:"stop-http-server"},"Stop HTTP Server"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'trap "kill $pid" 1 2 15 EXIT\n')),Object(a.b)("h3",{id:"prepare-credential-for-issuing"},"Prepare credential for issuing."),Object(a.b)("p",null,"In this example credential, the issuance date, id, and credential subject id are arbitrary, but in real-world usage these are diverse and critical properties. For more info about what these properties mean, see the Verifiable Credentials Data Model ",Object(a.b)("a",{parentName:"p",href:"https://w3c.github.io/vc-data-model/"},"specification")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cat > credential-unsigned.jsonld <<EOF\n{\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "id": "http://example.org/credentials/3731",\n    "type": ["VerifiableCredential"],\n    "issuer": "$did",\n    "issuanceDate": "2020-08-19T21:41:50Z",\n    "credentialSubject": {\n        "id": "did:example:d23dd687a7dc6787646f2eb98d0"\n    }\n}\nEOF\n')),Object(a.b)("h3",{id:"issue-the-verifiable-credential"},"Issue the verifiable credential."),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"Ask didkit to issue a verifiable credential using the given keypair file, verification method, and proof purpose, passing the unsigned credential on standard input. "),Object(a.b)("li",{parentName:"ol"},"DIDKit creates a linked data proof to add to the credential, and outputs the resulting newly-issued verifiable credential on standard output, which we save to a file.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'if ! curl -fsS $didkit_url/issue/credentials \\\n    -H \'Content-Type: application/json\' \\\n    -o credential-signed.jsonld \\\n    -d @- <<EOF\n{\n  "credential": $(cat credential-unsigned.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "assertionMethod"\n  }\n}\nEOF\nthen\n    echo \'Unable to issue credential.\'\n    exit 1\nfi\n\necho \'Issued verifiable credential:\'\nprint_json credential-signed.jsonld\necho\n')),Object(a.b)("h3",{id:"verify-a-verifiable-credential"},"Verify a verifiable credential."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"We pass the newly-issued verifiable credential back to didkit for verification using the given verification method and proof purpose. "),Object(a.b)("li",{parentName:"ul"},"DIDKit outputs the verification result as JSON. "),Object(a.b)("li",{parentName:"ul"},"If verification is successful, the command completes successfully (returns exit code 0).")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'if ! curl -fsS $didkit_url/verify/credentials \\\n    -H \'Content-Type: application/json\' \\\n    -o credential-verify-result.json \\\n    -d @- <<EOF\n{\n  "verifiableCredential": $(cat credential-signed.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "assertionMethod"\n  }\n}\nEOF\nthen\n    echo \'Unable to verify credential.\'\n    exit 1\nfi\necho \'Verified verifiable credential:\'\nprint_json credential-verify-result.json\necho\n')),Object(a.b)("h3",{id:"create-presentation-embedding-verifiable-credential"},"Create presentation embedding verifiable credential."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Prepare to present the verifiable credential by wrapping it in a Verifiable Presentation. "),Object(a.b)("li",{parentName:"ul"},"The id here is an arbitrary URL for example purposes; VPs are often but not always uniquely identified, whether by identifiers, URLs, or URIs.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'cat > presentation-unsigned.jsonld <<EOF\n{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "id": "http://example.org/presentations/3731",\n    "type": ["VerifiablePresentation"],\n    "holder": "$did",\n    "verifiableCredential": $(cat credential-signed.jsonld)\n}\nEOF\n')),Object(a.b)("h3",{id:"issue-verifiable-presentation"},"Issue verifiable presentation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pass the unsigned verifiable presentation to DIDKit to be issued as a verifiable presentation. * DIDKit signs the presentation with a linked data proof, using the given keypair, verification method and proof type. "),Object(a.b)("li",{parentName:"ul"},"We save the resulting newly created verifiable presentation to a file.")),Object(a.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(a.b)("div",{parentName:"div",className:"admonition-heading"},Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",{parentName:"h5",className:"admonition-icon"},Object(a.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(a.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),Object(a.b)("div",{parentName:"div",className:"admonition-content"},Object(a.b)("p",{parentName:"div"},"In most use-cases, the ",Object(a.b)("inlineCode",{parentName:"p"},"holder")," field contains a DID or other identifier verifiably linked to the key material signing the presentation, which has some relationship to the credential(s) being presented. The classic example is a fresh and interactive proof of being the ","[human]"," subject identified by a credential, but there are many VP use-cases as well.  This may be a manual, consented, unique and interactive identity assurance operation, but it can also be an assurance of the identity of a machine or a legal entity, operated by an API call or an automation carried out by a fiduciary/trusted piece of software, etc."),Object(a.b)("p",{parentName:"div"},"In these examples, the keys representing the two parties are stored in expressive filenames, 'issuer_key' and 'holder_key'. There are, however, no differences between these keys, and the JWK filenames were chosen simply to clarify the example; there are no restrictions on them."))),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'if ! curl -fsS $didkit_url/prove/presentations \\\n    -H \'Content-Type: application/json\' \\\n    -o presentation-signed.jsonld \\\n    -d @- <<EOF\n{\n  "presentation": $(cat presentation-unsigned.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "authentication"\n  }\n}\nEOF\nthen\n    echo \'Unable to issue presentation.\'\n    exit 1\nfi\necho \'Issued verifiable presentation:\'\nprint_json presentation-signed.jsonld\necho\n')),Object(a.b)("h3",{id:"verify-verifiable-presentation"},"Verify verifiable presentation."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Pass the verifiable presentation back to didkit for verification."),Object(a.b)("li",{parentName:"ul"},"Examine the verification result JSON.")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'if ! curl -fsS $didkit_url/verify/credentials \\\n    -H \'Content-Type: application/json\' \\\n    -o credential-verify-result.json \\\n    -d @- <<EOF\n{\n  "verifiableCredential": $(cat credential-signed.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "assertionMethod"\n  }\n}\nEOF\nthen\n    echo \'Unable to verify credential.\'\n    exit 1\nfi\necho \'Verified verifiable credential:\'\nprint_json credential-verify-result.json\necho\n\n')),Object(a.b)("h3",{id:"appendix-whole-script-without-comments"},"Appendix: whole script without comments"),Object(a.b)("p",null,"Also available on Github as\n",Object(a.b)("a",{parentName:"p",href:"https://github.com/spruceid/didkit/blob/main/http/tests/example.sh"},"/cli/tests/example.sh")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\n# This is an example shell script using DIDKit\'s HTTP server for\n# credential/presentation issuance and verification.\n# DIDKit is used for key generation.\n\n# Exit if any command in the script fails.\nset -e\n\n# Pretty-print JSON using jq or json_pp if available.\nprint_json() {\n    file=${1?file}\n    if command -v jq >/dev/null 2>&1; then\n        jq . "$file" || cat "$file"\n    elif command -v json_pp >/dev/null 2>&1; then\n        json_pp < "$file" || cat "$file"\n    else\n        cat "$file"\n    fi\n}\n\n# Run the rest of this script in its source directory.\ncd "$(dirname "$0")"\n\n# Build the didkit CLI program and HTTP server\ncargo build -p didkit-cli -p didkit-http\n\n# Adjust $PATH to include the didkit executable.\nexport PATH=$PWD/../../target/debug:$PATH\n\n# Create a ed25119 keypair if needed.\nif [ -e key.jwk ]; then\n    echo \'Using existing keypair.\'\nelse\n    didkit generate-ed25519-key > key.jwk\n    echo \'Generated keypair.\'\nfi\necho\n\n# Get the keypair\'s did:key DID.\n# More info about did:key: https://w3c-ccg.github.io/did-method-key/\ndid=$(didkit key-to-did-key -k key.jwk)\nprintf \'DID: %s\\n\' "$did"\n\n# Get verificationMethod for keypair.\n# This is used to identify the key in linked data proofs.\nverification_method=$(didkit key-to-verification-method -k key.jwk)\nprintf \'verificationMethod: %s\\n\' "$verification_method"\n\n# Start the HTTP server\ndidkit-http -p 9999 -k key.jwk & pid=$!\ndidkit_url=http://localhost:9999\n\n# Stop the HTTP server when the shell script exits\ntrap "kill $pid" 1 2 15 EXIT\n\n# Prepare credential for issuing.\n# In this example credential, the issuance date, id, and credential subject id\n# are arbitrary. For more info about what these properties mean, see the\n# Verifiable Credentials Data Model: https://w3c.github.io/vc-data-model/\ncat > credential-unsigned.jsonld <<EOF\n{\n    "@context": "https://www.w3.org/2018/credentials/v1",\n    "id": "http://example.org/credentials/3731",\n    "type": ["VerifiableCredential"],\n    "issuer": "$did",\n    "issuanceDate": "2020-08-19T21:41:50Z",\n    "credentialSubject": {\n        "id": "did:example:d23dd687a7dc6787646f2eb98d0"\n    }\n}\nEOF\n\n# Issue the verifiable credential.\n# Ask didkit to issue a verifiable credential using the given keypair file,\n# verification method, and proof purpose, passing the unsigned credential on\n# standard input. DIDKit creates a linked data proof to add to the credential,\n# and outputs the resulting newly-issued verifiable credential on standard\n# output, which we save to a file.\nif ! curl -fsS $didkit_url/issue/credentials \\\n    -H \'Content-Type: application/json\' \\\n    -o credential-signed.jsonld \\\n    -d @- <<EOF\n{\n  "credential": $(cat credential-unsigned.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "assertionMethod"\n  }\n}\nEOF\nthen\n    echo \'Unable to issue credential.\'\n    exit 1\nfi\n\necho \'Issued verifiable credential:\'\nprint_json credential-signed.jsonld\necho\n\n# Verify verifiable credential.\n# We pass the newly-issued verifiable credential back to didkit for\n# verification using the given verification method and proof purpose. DIDKit\n# outputs the verification result as JSON. If verification is successful, the\n# command completes successfully (returns exit code 0).\nif ! curl -fsS $didkit_url/verify/credentials \\\n    -H \'Content-Type: application/json\' \\\n    -o credential-verify-result.json \\\n    -d @- <<EOF\n{\n  "verifiableCredential": $(cat credential-signed.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "assertionMethod"\n  }\n}\nEOF\nthen\n    echo \'Unable to verify credential.\'\n    exit 1\nfi\necho \'Verified verifiable credential:\'\nprint_json credential-verify-result.json\necho\n\n# Create presentation embedding verifiable credential.\n# Prepare to present the verifiable credential by wrapping it in a\n# Verifiable Presentation. The id here is an arbitrary URL for example purposes.\ncat > presentation-unsigned.jsonld <<EOF\n{\n    "@context": ["https://www.w3.org/2018/credentials/v1"],\n    "id": "http://example.org/presentations/3731",\n    "type": ["VerifiablePresentation"],\n    "holder": "$did",\n    "verifiableCredential": $(cat credential-signed.jsonld)\n}\nEOF\n\n# Issue verifiable presentation.\n# Pass the unsigned verifiable presentation to didkit to be issued as a\n# verifiable presentation. DIDKit signs the presentation with a linked data\n# proof, using the given keypair, verification method and proof type. We save\n# the resulting newly created verifiable presentation to a file.\nif ! curl -fsS $didkit_url/prove/presentations \\\n    -H \'Content-Type: application/json\' \\\n    -o presentation-signed.jsonld \\\n    -d @- <<EOF\n{\n  "presentation": $(cat presentation-unsigned.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "authentication"\n  }\n}\nEOF\nthen\n    echo \'Unable to issue presentation.\'\n    exit 1\nfi\necho \'Issued verifiable presentation:\'\nprint_json presentation-signed.jsonld\necho\n\n# Verify verifiable presentation.\n# Pass the verifiable presentation back to didkit for verification.\n# Examine the verification result JSON.\nif ! curl -fsS $didkit_url/verify/presentations \\\n    -H \'Content-Type: application/json\' \\\n    -o presentation-verify-result.json \\\n    -d @- <<EOF\n{\n  "verifiablePresentation": $(cat presentation-signed.jsonld),\n  "options": {\n    "verificationMethod": "$verification_method",\n    "proofPurpose": "authentication"\n  }\n}\nEOF\nthen\n    echo \'Unable to verify presentation.\'\n    exit 1\nfi\necho \'Verified verifiable presentation:\'\nprint_json presentation-verify-result.json\necho\n\necho Done\n')))}l.isMDXComponent=!0}}]);