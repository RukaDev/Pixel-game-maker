"use strict";(self.webpackChunkpixelone=self.webpackChunkpixelone||[]).push([[722],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>y});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(t),m=a,y=d["".concat(s,".").concat(m)]||d[m]||u[m]||o;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4196:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=t(7462),a=(t(7294),t(3905));const o={sidebar_position:2},i="Boundary",l={unversionedId:"Classes/boundary",id:"Classes/boundary",title:"Boundary",description:"Methods",source:"@site/docs-api/Classes/boundary.md",sourceDirName:"Classes",slug:"/Classes/boundary",permalink:"/elixir2d/docs-api/Classes/boundary",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Crystal",permalink:"/elixir2d/docs-api/Classes/crystal"},next:{title:"Enemy",permalink:"/elixir2d/docs-api/Classes/enemy"}},s={},p=[{value:"Methods",id:"methods",level:2},{value:"<code>collision</code>",id:"collision",level:3},{value:"<code>cleanup</code>",id:"cleanup",level:3},{value:"<code>proximity</code>",id:"proximity",level:3},{value:"<code>inside</code>",id:"inside",level:3},{value:"<code>draw</code>",id:"draw",level:3},{value:"Properties",id:"properties",level:2},{value:"<code>zone</code>",id:"zone",level:3},{value:"<code>position</code>",id:"position",level:3}],c={toc:p};function d(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"boundary"},"Boundary"),(0,a.kt)("h2",{id:"methods"},"Methods"),(0,a.kt)("h3",{id:"collision"},(0,a.kt)("inlineCode",{parentName:"h3"},"collision")),(0,a.kt)("p",null,"Returns true if the sprite collides with the boundary instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:collision(sprite: sprite, x: numher, y: number) -> boolean\n")),(0,a.kt)("h3",{id:"cleanup"},(0,a.kt)("inlineCode",{parentName:"h3"},"cleanup")),(0,a.kt)("p",null,"Removes all references of the instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:cleanup() -> none\n")),(0,a.kt)("h3",{id:"proximity"},(0,a.kt)("inlineCode",{parentName:"h3"},"proximity")),(0,a.kt)("p",null,"Returns true if p1 is within amnt of the instance."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:proximity(p1: array, amnt: int) -> boolean\n")),(0,a.kt)("h3",{id:"inside"},(0,a.kt)("inlineCode",{parentName:"h3"},"inside")),(0,a.kt)("p",null,"Returns true if the sprite is completely within the instance"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:inside(sprite: sprite) -> boolean\n")),(0,a.kt)("h3",{id:"draw"},(0,a.kt)("inlineCode",{parentName:"h3"},"draw")),(0,a.kt)("p",null,"Draws the instance on the canvas."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"boundary:draw() -> none\n")),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("h3",{id:"zone"},(0,a.kt)("inlineCode",{parentName:"h3"},"zone")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type: ",(0,a.kt)("inlineCode",{parentName:"li"},"zone instance"))),(0,a.kt)("p",null,"The zone a boundary belongs to."),(0,a.kt)("h3",{id:"position"},(0,a.kt)("inlineCode",{parentName:"h3"},"position")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"array"))),(0,a.kt)("p",null,"Position of the sprite on the canvas"))}d.isMDXComponent=!0}}]);