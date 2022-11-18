/*! For license information please see 407.d2eba59b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[407],{1725:function(r){var e=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(r){if(null===r||void 0===r)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(r)}r.exports=function(){try{if(!Object.assign)return!1;var r=new String("abc");if(r[5]="de","5"===Object.getOwnPropertyNames(r)[0])return!1;for(var e={},t=0;t<10;t++)e["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(r){return e[r]})).join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(r){o[r]=r})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(a){return!1}}()?Object.assign:function(r,i){for(var n,d,p=a(r),s=1;s<arguments.length;s++){for(var l in n=Object(arguments[s]))t.call(n,l)&&(p[l]=n[l]);if(e){d=e(n);for(var c=0;c<d.length;c++)o.call(n,d[c])&&(p[d[c]]=n[d[c]])}}return p}},407:function(r,e,t){t.d(e,{Cg:function(){return x},$_:function(){return y},GQ:function(){return w},eC:function(){return C},bK:function(){return m},AF:function(){return E},Dh:function(){return Y},cp:function(){return R}});var o=t(1725),a=t.n(o),i=function(r,e){var t=a()({},r,e);for(var o in r){var i;r[o]&&"object"===typeof e[o]&&a()(t,((i={})[o]=a()(r[o],e[o]),i))}return t},n={breakpoints:[40,52,64].map((function(r){return r+"em"}))},d=function(r){return"@media screen and (min-width: "+r+")"},p=function(r,e){return s(e,r,r)},s=function(r,e,t,o,a){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:a;return r===a?t:r},l=function r(e){var t={},o=function(r){var o={},p=!1,l=r.theme&&r.theme.disableStyledSystemCache;for(var f in r)if(e[f]){var u=e[f],m=r[f],b=s(r.theme,u.scale,u.defaults);if("object"!==typeof m)a()(o,u(m,b,r));else{if(t.breakpoints=!l&&t.breakpoints||s(r.theme,"breakpoints",n.breakpoints),Array.isArray(m)){t.media=!l&&t.media||[null].concat(t.breakpoints.map(d)),o=i(o,c(t.media,u,b,m,r));continue}null!==m&&(o=i(o,g(t.breakpoints,u,b,m,r)),p=!0)}}return p&&(o=function(r){var e={};return Object.keys(r).sort((function(r,e){return r.localeCompare(e,void 0,{numeric:!0,sensitivity:"base"})})).forEach((function(t){e[t]=r[t]})),e}(o)),o};o.config=e,o.propNames=Object.keys(e),o.cache=t;var p=Object.keys(e).filter((function(r){return"config"!==r}));return p.length>1&&p.forEach((function(t){var a;o[t]=r(((a={})[t]=e[t],a))})),o},c=function(r,e,t,o,i){var n={};return o.slice(0,r.length).forEach((function(o,d){var p,s=r[d],l=e(o,t,i);s?a()(n,((p={})[s]=a()({},n[s],l),p)):a()(n,l)})),n},g=function(r,e,t,o,i){var n={};for(var p in o){var s=r[p],l=e(o[p],t,i);if(s){var c,g=d(s);a()(n,((c={})[g]=a()({},n[g],l),c))}else a()(n,l)}return n},f=function(r){var e=r.properties,t=r.property,o=r.scale,a=r.transform,i=void 0===a?p:a,n=r.defaultScale;e=e||[t];var d=function(r,t,o){var a={},n=i(r,t,o);if(null!==n)return e.forEach((function(r){a[r]=n})),a};return d.scale=o,d.defaults=n,d},u=function(r){void 0===r&&(r={});var e={};return Object.keys(r).forEach((function(t){var o=r[t];e[t]=!0!==o?"function"!==typeof o?f(o):o:f({property:t,scale:t})})),l(e)},m=u({width:{property:"width",scale:"sizes",transform:function(r,e){return s(e,r,!function(r){return"number"===typeof r&&!isNaN(r)}(r)||r>1?r:100*r+"%")}},height:{property:"height",scale:"sizes"},minWidth:{property:"minWidth",scale:"sizes"},minHeight:{property:"minHeight",scale:"sizes"},maxWidth:{property:"maxWidth",scale:"sizes"},maxHeight:{property:"maxHeight",scale:"sizes"},size:{properties:["width","height"],scale:"sizes"},overflow:!0,overflowX:!0,overflowY:!0,display:!0,verticalAlign:!0}),b=m,h={color:{property:"color",scale:"colors"},backgroundColor:{property:"backgroundColor",scale:"colors"},opacity:!0};h.bg=h.backgroundColor;var y=u(h),S=y,R=u({fontFamily:{property:"fontFamily",scale:"fonts"},fontSize:{property:"fontSize",scale:"fontSizes",defaultScale:[12,14,16,20,24,32,48,64,72]},fontWeight:{property:"fontWeight",scale:"fontWeights"},lineHeight:{property:"lineHeight",scale:"lineHeights"},letterSpacing:{property:"letterSpacing",scale:"letterSpacings"},textAlign:!0,fontStyle:!0}),v=R,w=u({alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:!0,flex:!0,flexGrow:!0,flexShrink:!0,flexBasis:!0,justifySelf:!0,alignSelf:!0,order:!0}),k=w,T={space:[0,4,8,16,32,64,128,256,512]},C=u({gridGap:{property:"gridGap",scale:"space",defaultScale:T.space},gridColumnGap:{property:"gridColumnGap",scale:"space",defaultScale:T.space},gridRowGap:{property:"gridRowGap",scale:"space",defaultScale:T.space},gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridAutoRows:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0}),B=C,W={border:{property:"border",scale:"borders"},borderWidth:{property:"borderWidth",scale:"borderWidths"},borderStyle:{property:"borderStyle",scale:"borderStyles"},borderColor:{property:"borderColor",scale:"colors"},borderRadius:{property:"borderRadius",scale:"radii"},borderTop:{property:"borderTop",scale:"borders"},borderTopLeftRadius:{property:"borderTopLeftRadius",scale:"radii"},borderTopRightRadius:{property:"borderTopRightRadius",scale:"radii"},borderRight:{property:"borderRight",scale:"borders"},borderBottom:{property:"borderBottom",scale:"borders"},borderBottomLeftRadius:{property:"borderBottomLeftRadius",scale:"radii"},borderBottomRightRadius:{property:"borderBottomRightRadius",scale:"radii"},borderLeft:{property:"borderLeft",scale:"borders"},borderX:{properties:["borderLeft","borderRight"],scale:"borders"},borderY:{properties:["borderTop","borderBottom"],scale:"borders"},borderTopWidth:{property:"borderTopWidth",scale:"borderWidths"},borderTopColor:{property:"borderTopColor",scale:"colors"},borderTopStyle:{property:"borderTopStyle",scale:"borderStyles"}};W.borderTopLeftRadius={property:"borderTopLeftRadius",scale:"radii"},W.borderTopRightRadius={property:"borderTopRightRadius",scale:"radii"},W.borderBottomWidth={property:"borderBottomWidth",scale:"borderWidths"},W.borderBottomColor={property:"borderBottomColor",scale:"colors"},W.borderBottomStyle={property:"borderBottomStyle",scale:"borderStyles"},W.borderBottomLeftRadius={property:"borderBottomLeftRadius",scale:"radii"},W.borderBottomRightRadius={property:"borderBottomRightRadius",scale:"radii"},W.borderLeftWidth={property:"borderLeftWidth",scale:"borderWidths"},W.borderLeftColor={property:"borderLeftColor",scale:"colors"},W.borderLeftStyle={property:"borderLeftStyle",scale:"borderStyles"},W.borderRightWidth={property:"borderRightWidth",scale:"borderWidths"},W.borderRightColor={property:"borderRightColor",scale:"colors"},W.borderRightStyle={property:"borderRightStyle",scale:"borderStyles"};var x=u(W),L=x,z={background:!0,backgroundImage:!0,backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0};z.bgImage=z.backgroundImage,z.bgSize=z.backgroundSize,z.bgPosition=z.backgroundPosition,z.bgRepeat=z.backgroundRepeat;var j=u(z),O={space:[0,4,8,16,32,64,128,256,512]},A=u({position:!0,zIndex:{property:"zIndex",scale:"zIndices"},top:{property:"top",scale:"space",defaultScale:O.space},right:{property:"right",scale:"space",defaultScale:O.space},bottom:{property:"bottom",scale:"space",defaultScale:O.space},left:{property:"left",scale:"space",defaultScale:O.space}}),G={space:[0,4,8,16,32,64,128,256,512]},I=function(r){return"number"===typeof r&&!isNaN(r)},H=function(r,e){if(!I(r))return s(e,r,r);var t=r<0,o=Math.abs(r),a=s(e,o,o);return I(a)?a*(t?-1:1):t?"-"+a:a},X={};X.margin={margin:{property:"margin",scale:"space",transform:H,defaultScale:G.space},marginTop:{property:"marginTop",scale:"space",transform:H,defaultScale:G.space},marginRight:{property:"marginRight",scale:"space",transform:H,defaultScale:G.space},marginBottom:{property:"marginBottom",scale:"space",transform:H,defaultScale:G.space},marginLeft:{property:"marginLeft",scale:"space",transform:H,defaultScale:G.space},marginX:{properties:["marginLeft","marginRight"],scale:"space",transform:H,defaultScale:G.space},marginY:{properties:["marginTop","marginBottom"],scale:"space",transform:H,defaultScale:G.space}},X.margin.m=X.margin.margin,X.margin.mt=X.margin.marginTop,X.margin.mr=X.margin.marginRight,X.margin.mb=X.margin.marginBottom,X.margin.ml=X.margin.marginLeft,X.margin.mx=X.margin.marginX,X.margin.my=X.margin.marginY,X.padding={padding:{property:"padding",scale:"space",defaultScale:G.space},paddingTop:{property:"paddingTop",scale:"space",defaultScale:G.space},paddingRight:{property:"paddingRight",scale:"space",defaultScale:G.space},paddingBottom:{property:"paddingBottom",scale:"space",defaultScale:G.space},paddingLeft:{property:"paddingLeft",scale:"space",defaultScale:G.space},paddingX:{properties:["paddingLeft","paddingRight"],scale:"space",defaultScale:G.space},paddingY:{properties:["paddingTop","paddingBottom"],scale:"space",defaultScale:G.space}},X.padding.p=X.padding.padding,X.padding.pt=X.padding.paddingTop,X.padding.pr=X.padding.paddingRight,X.padding.pb=X.padding.paddingBottom,X.padding.pl=X.padding.paddingLeft,X.padding.px=X.padding.paddingX,X.padding.py=X.padding.paddingY;var Y=function(){for(var r={},e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];t.forEach((function(e){e&&e.config&&a()(r,e.config)}));var i=l(r);return i}(u(X.margin),u(X.padding)),E=u({boxShadow:{property:"boxShadow",scale:"shadows"},textShadow:{property:"textShadow",scale:"shadows"}});function P(){return P=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])}return r},P.apply(this,arguments)}var F=function(r,e,t,o,a){for(e=e&&e.split?e.split("."):[e],o=0;o<e.length;o++)r=r?r[e[o]]:a;return r===a?t:r},N=[40,52,64].map((function(r){return r+"em"})),_={space:[0,4,8,16,32,64,128,256,512],fontSizes:[12,14,16,20,24,32,48,64,72]},D={bg:"backgroundColor",m:"margin",mt:"marginTop",mr:"marginRight",mb:"marginBottom",ml:"marginLeft",mx:"marginX",my:"marginY",p:"padding",pt:"paddingTop",pr:"paddingRight",pb:"paddingBottom",pl:"paddingLeft",px:"paddingX",py:"paddingY"},q={marginX:["marginLeft","marginRight"],marginY:["marginTop","marginBottom"],paddingX:["paddingLeft","paddingRight"],paddingY:["paddingTop","paddingBottom"],size:["width","height"]},M={color:"colors",backgroundColor:"colors",borderColor:"colors",margin:"space",marginTop:"space",marginRight:"space",marginBottom:"space",marginLeft:"space",marginX:"space",marginY:"space",padding:"space",paddingTop:"space",paddingRight:"space",paddingBottom:"space",paddingLeft:"space",paddingX:"space",paddingY:"space",top:"space",right:"space",bottom:"space",left:"space",gridGap:"space",gridColumnGap:"space",gridRowGap:"space",gap:"space",columnGap:"space",rowGap:"space",fontFamily:"fonts",fontSize:"fontSizes",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",border:"borders",borderTop:"borders",borderRight:"borders",borderBottom:"borders",borderLeft:"borders",borderWidth:"borderWidths",borderStyle:"borderStyles",borderRadius:"radii",borderTopRightRadius:"radii",borderTopLeftRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",borderTopWidth:"borderWidths",borderTopColor:"colors",borderTopStyle:"borderStyles",borderBottomWidth:"borderWidths",borderBottomColor:"colors",borderBottomStyle:"borderStyles",borderLeftWidth:"borderWidths",borderLeftColor:"colors",borderLeftStyle:"borderStyles",borderRightWidth:"borderWidths",borderRightColor:"colors",borderRightStyle:"borderStyles",outlineColor:"colors",boxShadow:"shadows",textShadow:"shadows",zIndex:"zIndices",width:"sizes",minWidth:"sizes",maxWidth:"sizes",height:"sizes",minHeight:"sizes",maxHeight:"sizes",flexBasis:"sizes",size:"sizes",fill:"colors",stroke:"colors"},K=function(r,e){if("number"!==typeof e||e>=0)return F(r,e,e);var t=Math.abs(e),o=F(r,t,t);return"string"===typeof o?"-"+o:-1*o},Q=["margin","marginTop","marginRight","marginBottom","marginLeft","marginX","marginY","top","bottom","left","right"].reduce((function(r,e){var t;return P({},r,((t={})[e]=K,t))}),{}),$=function r(e){return function(t){void 0===t&&(t={});var o=P({},_,{},t.theme||t),a={},i=function(r){return function(e){var t={},o=F(e,"breakpoints",N),a=[null].concat(o.map((function(r){return"@media screen and (min-width: "+r+")"})));for(var i in r){var n="function"===typeof r[i]?r[i](e):r[i];if(null!=n)if(Array.isArray(n))for(var d=0;d<n.slice(0,a.length).length;d++){var p=a[d];p?(t[p]=t[p]||{},null!=n[d]&&(t[p][i]=n[d])):t[i]=n[d]}else t[i]=n}return t}}("function"===typeof e?e(o):e)(o);for(var n in i){var d=i[n],p="function"===typeof d?d(o):d;if("variant"!==n)if(p&&"object"===typeof p)a[n]=r(p)(o);else{var s=F(D,n,n),l=F(M,s),c=F(o,l,F(o,s,{})),g=F(Q,s,F)(c,p,p);if(q[s])for(var f=q[s],u=0;u<f.length;u++)a[f[u]]=g;else a[s]=g}else a=P({},a,{},r(F(o,p))(o))}return a}},J=function(r){var e,t,o=r.scale,a=r.prop,i=void 0===a?"variant":a,n=r.variants,d=void 0===n?{}:n,p=r.key;t=Object.keys(d).length?function(r,e,t){return $(s(e,r,null))(t.theme)}:function(r,e){return s(e,r,null)},t.scale=o||p,t.defaults=d;var c=((e={})[i]=t,e);return l(c)};J({key:"buttons"}),J({key:"textStyles",prop:"textStyle"}),J({key:"colorStyles",prop:"colors"}),b.width,b.height,b.minWidth,b.minHeight,b.maxWidth,b.maxHeight,b.size,b.verticalAlign,b.display,b.overflow,b.overflowX,b.overflowY,S.opacity,v.fontSize,v.fontFamily,v.fontWeight,v.lineHeight,v.textAlign,v.fontStyle,v.letterSpacing,k.alignItems,k.alignContent,k.justifyItems,k.justifyContent,k.flexWrap,k.flexDirection,k.flex,k.flexGrow,k.flexShrink,k.flexBasis,k.justifySelf,k.alignSelf,k.order,B.gridGap,B.gridColumnGap,B.gridRowGap,B.gridColumn,B.gridRow,B.gridAutoFlow,B.gridAutoColumns,B.gridAutoRows,B.gridTemplateColumns,B.gridTemplateRows,B.gridTemplateAreas,B.gridArea,L.borderWidth,L.borderStyle,L.borderColor,L.borderTop,L.borderRight,L.borderBottom,L.borderLeft,L.borderRadius,j.backgroundImage,j.backgroundSize,j.backgroundPosition,j.backgroundRepeat,A.zIndex,A.top,A.right,A.bottom,A.left}}]);
//# sourceMappingURL=407.d2eba59b.chunk.js.map