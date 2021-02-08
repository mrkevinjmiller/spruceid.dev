(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{100:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return f}));var i=r(0),a=r.n(i);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=a.a.createContext({}),b=function(e){var t=a.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):d(d({},t),e)),r},s=function(e){var t=b(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,i=e.mdxType,n=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=b(r),p=i,f=s["".concat(l,".").concat(p)]||s[p]||u[p]||n;return r?a.a.createElement(f,d(d({ref:t},c),{},{components:r})):a.a.createElement(f,d({ref:t},c))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=r.length,l=new Array(n);l[0]=p;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:i,l[1]=d;for(var c=2;c<n;c++)l[c]=r[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},80:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return d})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return b}));var i=r(3),a=r(7),n=(r(0),r(100)),l={id:"ffis",title:"Foreign Function Interfaces"},d={unversionedId:"didkit/ffis",id:"didkit/ffis",isDocsHomePage:!1,title:"Foreign Function Interfaces",description:"[path-packages]//dart.dev/tools/pub/dependencies#path-packages",source:"@site/docs/didkit/ffis.md",slug:"/didkit/ffis",permalink:"/docs/didkit/ffis",editUrl:"https://github.com/spruceid/docs/didkit/ffis.md",version:"current",sidebar:"docs",previous:{title:"HTTP Syntax",permalink:"/docs/didkit/http_syntax"},next:{title:"Overview of Examples",permalink:"/docs/didkit/examples"}},o=[{value:"C",id:"c",children:[{value:"Build",id:"build",children:[]},{value:"Test",id:"test",children:[]},{value:"+ Android",id:"-android",children:[]}]},{value:"Java",id:"java",children:[{value:"Build",id:"build-1",children:[]},{value:"Test",id:"test-1",children:[]},{value:"+ Android",id:"-android-1",children:[]}]},{value:"Android",id:"android",children:[{value:"Requires",id:"requires",children:[]},{value:"Build",id:"build-2",children:[]}]},{value:"Flutter",id:"flutter",children:[]},{value:"Usage",id:"usage",children:[]}],c={toc:o};function b(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(n.b)("wrapper",Object(i.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"DIDKit has bindings for various languages and environments. Each corresponding directory contains a README with additional info particular to it. The Makefile used to build all the libraries requires ",Object(n.b)("a",{parentName:"p",href:"https://www.gnu.org/software/make/"},"GNU Make"),"."),Object(n.b)("p",null,"Building and testing each library requires tools for the corresponding environment:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"C: C compiler and linker"),Object(n.b)("li",{parentName:"ul"},"Java: JDK and JRE"),Object(n.b)("li",{parentName:"ul"},"Android: ",Object(n.b)("a",{parentName:"li",href:"https://developer.android.com/ndk/"},"Android NDK"),", ",Object(n.b)("a",{parentName:"li",href:"https://developer.android.com/studio/"},"SDK tools"),", and Rust Android targets"),Object(n.b)("li",{parentName:"ul"},"Flutter: ",Object(n.b)("a",{parentName:"li",href:"https://github.com/flutter/flutter"},"Flutter"),"\nBuild")),Object(n.b)("p",null,"To build all the libraries, run ",Object(n.b)("inlineCode",{parentName:"p"},"make")," in the ",Object(n.b)("inlineCode",{parentName:"p"},"/lib/")," directory of the DIDKit repo."),Object(n.b)("p",null,"To build and test a particular library, see the instructions below."),Object(n.b)("h2",{id:"c"},"C"),Object(n.b)("h3",{id:"build"},"Build"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/release/libdidkit.so\n")),Object(n.b)("h3",{id:"test"},"Test"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/test/c.stamp\n")),Object(n.b)("h3",{id:"-android"},"+ Android"),Object(n.b)("p",null,"To build the C shared library for Android targets, build the ",Object(n.b)("a",{parentName:"p",href:"#android"},"DIDKit Android library"),"."),Object(n.b)("h2",{id:"java"},"Java"),Object(n.b)("p",null,"Java bindings for DIDKit, using ",Object(n.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Native_Interface"},"JNI"),". The ",Object(n.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/JAR_(file_format)"},"JAR")," file includes Java class files. To use this in an application, you must also include the shared library (",Object(n.b)("inlineCode",{parentName:"p"},"libdidkit.so"),") in your application in your Java Library Path."),Object(n.b)("h3",{id:"build-1"},"Build"),Object(n.b)("p",null,"Run:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/didkit.jar\n")),Object(n.b)("p",null,"To build the shared library for your current platform/architecture:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/release/libdidkit.so\n")),Object(n.b)("h3",{id:"test-1"},"Test"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\n$ make -C lib ../target/tests/java.stamp\n")),Object(n.b)("h3",{id:"-android-1"},"+ Android"),Object(n.b)("p",null,"For Android, build the separate ",Object(n.b)("a",{parentName:"p",href:"#android"},"Android library (AAR file)")," which includes the Java class files and shared libraries for all Android targets."),Object(n.b)("h2",{id:"android"},"Android"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://developer.android.com/studio/projects/android-library.html#aar-contents"},"Android Library (AAR file)")," for DIDKit. The AAR file includes Java class files using ",Object(n.b)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Java_Native_Interface"},"JNI"),", and binary shared libraries for Android's supported architectures (x86, armeabi-v7a, arm64-v8a, x86","_","64). The AAR can be added to existing Android projects using Android Studio or Gradle."),Object(n.b)("h3",{id:"requires"},"Requires"),Object(n.b)("p",null,"Android SDK and NDK for Linux x86","_","64. The Android SDK is expected to be installed at ",Object(n.b)("inlineCode",{parentName:"p"},"~/Android/Sdk"),". If it is somewhere else instead, you can specify it with a Make variable, e.g. ",Object(n.b)("inlineCode",{parentName:"p"},"make ANDROID_SDK_ROOT=/other/location/android-sdk"),". "),Object(n.b)("p",null,"Rust Android targets are also required. To install those with ",Object(n.b)("inlineCode",{parentName:"p"},"rustup"),", run:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"//from root directory of didkit project\n$ make -C lib install-rustup-android\n")),Object(n.b)("h3",{id:"build-2"},"Build"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"//from root directory of didkit project\n$ make -C lib ../target/test/aar.stamp\n")),Object(n.b)("h4",{id:"make-variables"},"Make variables"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ANDROID_SDK_ROOT")," - path to Android SDK. Default: ",Object(n.b)("inlineCode",{parentName:"li"},"~/Android/Sdk")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ANDROID_TOOLS")," - Android tools directory. Default is to pick one matching ",Object(n.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/build-tools/*"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ANDROID_NDK_HOME")," - Android NDK directory. Default is ",Object(n.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk-bundle)")," if exists, or one matching ",Object(n.b)("inlineCode",{parentName:"li"},"$(ANDROID_SDK_ROOT)/ndk/*"),".")),Object(n.b)("h2",{id:"flutter"},"Flutter"),Object(n.b)("p",null,Object(n.b)("a",{parentName:"p",href:"https://flutter.dev/developing-packages/"},"Flutter plugin")," for the DIDKit library. Includes Dart bindings, and functionality for Android and iOS (WIP)."),Object(n.b)("p",null,"Flutter Doctor and CLI tools are also required."),Object(n.b)("h2",{id:"usage"},"Usage"),Object(n.b)("p",null,"You can depend on this plugin as a ",Object(n.b)("a",{parentName:"p",href:"https://dart.dev/tools/pub/dependencies#path-packages"},"path dependency"),"."),Object(n.b)("p",null,"You will also need to build the DIDKit library for your target platforms.\nTo do that for Android, trigger building the AAR file:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-sh"},"# from DIDKit root directory:\nmake -C lib ../target/didkit.aar\n")))}b.isMDXComponent=!0}}]);