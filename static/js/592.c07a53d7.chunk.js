"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[592],{9245:function(n,e,t){t.d(e,{a:function(){return c}});var r,a=t(8402),i=t(168),o=t(6444).ZP.div(r||(r=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n"]))),u=t(184),c=function(){return(0,u.jsx)(o,{children:(0,u.jsx)(a.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#ff4500",barColor:"#ff4500"})})}},9592:function(n,e,t){t.r(e),t.d(e,{default:function(){return G}});var r,a,i,o,u,c,s,p,d,f=t(4778),l=t(9439),h=t(9e3),x=t(168),v=t(6444),m=v.ZP.form(r||(r=(0,x.Z)(["\n  display: flex;\n  align-items: center;\n  width: 100%;\n  max-width: 600px;\n  background-color: #fff;\n  border-radius: 3px;\n  overflow: hidden;\n"]))),b=v.ZP.button(a||(a=(0,x.Z)(["\n  display: inline-block;\n  width: 48px;\n  height: 48px;\n  border: 0;\n  background-size: 40%;\n  background-repeat: no-repeat;\n  background-position: center;\n  opacity: 0.6;\n  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);\n  cursor: pointer;\n  outline: none;\n\n  &:hover {\n    opacity: 1;\n  }\n"]))),Z=v.ZP.input(i||(i=(0,x.Z)(["\n  display: inline-block;\n  width: 100%;\n  font: inherit;\n  font-size: 20px;\n  border: none;\n  outline: none;\n  padding-left: 10px;\n  padding-right: 4px;\n\n  &::placeholder {\n    font: inherit;\n    font-size: 18px;\n  }\n"]))),g=v.ZP.div(o||(o=(0,x.Z)(["\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n"]))),y=t(2791),w=t(184),k=function(n){var e=n.onSubmit,t=(0,y.useState)(""),r=(0,l.Z)(t,2),a=r[0],i=r[1];return(0,w.jsx)(g,{children:(0,w.jsxs)(m,{onSubmit:function(n){n.preventDefault(),e(a),i("")},children:[(0,w.jsx)(Z,{type:"text",name:"search",autoComplete:"off",autoFocus:!0,placeholder:"Search films",value:a,onChange:function(n){var e=n.target.value;i(e)}}),(0,w.jsx)(b,{type:"submit",children:(0,w.jsx)(h.Vph,{style:{width:30,height:30}})})]})})},j=t(7689),S=t(6485),_=t(2790),P=t(1087),C=(0,v.ZP)(P.rU)(u||(u=(0,x.Z)(["\n  text-decoration: none;\n  color: black;\n"]))),F=v.ZP.li(c||(c=(0,x.Z)(["\n  width: 200px;\n  cursor: pointer;\n  border-radius: 5px;\n  background-color: #e0e9e9;\n  overflow: hidden;\n"]))),z=v.ZP.img(s||(s=(0,x.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),T=v.ZP.div(p||(p=(0,x.Z)(["\n  padding: 8px;\n  width: 200px;\n  height: 90px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 8px;\n"]))),M=v.ZP.p(d||(d=(0,x.Z)(["\n  font-size: 18px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  border: 1px solid black;\n  display: inline-block;\n  text-align: center;\n\n  background-color: ",";\n\n  color: ",";\n"])),(function(n){var e=n.rating;return e>7?"#6c3":e>=4&&e<=7?"#fc0":e>0&&e<4?"#f00":"#00f"}),(function(n){var e=n.rating;return e>=4&&e<=7?"black":"white"})),q=function(n){var e=n.movies,t=(0,j.TH)();return(0,w.jsx)(f.x,{as:"ul",display:"flex",flexWrap:"wrap",gridGap:20,justifyContent:"center",children:e.map((function(n){var e=n.id,r=n.title,a=n.poster_path,i=n.vote_average;return(0,w.jsx)(F,{children:(0,w.jsxs)(C,{to:"/movies/".concat(e),state:{from:t},children:[(0,w.jsx)(z,{src:a?S.Mj+a:_.T,alt:r,width:"200px"}),(0,w.jsxs)(T,{children:[(0,w.jsx)("b",{children:r}),i>1?(0,w.jsxs)(M,{rating:i.toFixed(),children:[(10*i).toFixed(2),"%"]}):(0,w.jsx)(M,{rating:i.toFixed(),children:(0,w.jsx)("p",{children:"No rating"})})]})]})},e)}))})},A=t(4165),E=t(5861),V=t(9014),D=t(9245),G=function(){var n=function(){var n,e=(0,y.useState)(""),t=(0,l.Z)(e,2),r=t[0],a=t[1],i=(0,y.useState)([]),o=(0,l.Z)(i,2),u=o[0],c=o[1],s=(0,y.useState)(!1),p=(0,l.Z)(s,2),d=p[0],f=p[1],h=(0,y.useState)(!1),x=(0,l.Z)(h,2),v=x[0],m=x[1],b=(0,P.lr)(),Z=(0,l.Z)(b,2),g=Z[0],w=Z[1],k=(0,y.useState)(!1),j=(0,l.Z)(k,2),_=j[0],C=j[1],F=null!==(n=g.get("query"))&&void 0!==n?n:"";return(0,y.useEffect)((function(){if(F){var n=function(){var n=(0,E.Z)((0,A.Z)().mark((function n(){var e;return(0,A.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return f(!0),n.prev=1,n.next=4,(0,S.V0)(F);case 4:if((e=n.sent).length){n.next=7;break}return n.abrupt("return",C(!0));case 7:c(e),m(!0),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(1),console.log(n.t0);case 14:return n.prev=14,f(!1),n.finish(14);case 17:case"end":return n.stop()}}),n,null,[[1,11,14,17]])})));return function(){return n.apply(this,arguments)}}();n()}}),[F,_]),{handleFormSubmit:function(n){a(n);var e=n.trim();if(""===e)return(0,V.Am)("Type something!",{icon:"\ud83d\ude15"});w({query:e}),C(!1),c([])},isEmpty:_,searchQuery:r,success:v,loading:d,movies:u}}(),e=n.handleFormSubmit,t=n.isEmpty,r=n.success,a=n.loading,i=n.movies;return(0,w.jsxs)(f.x,{p:"20px",m:"0 auto",children:[(0,w.jsx)(k,{onSubmit:e}),a&&(0,w.jsx)(D.a,{}),t&&(0,w.jsx)(f.x,{as:"h3",textAlign:"center",children:"\u274c Movies not found..."}),r&&(0,w.jsx)(q,{movies:i})]})}},4778:function(n,e,t){t.d(e,{x:function(){return i}});var r=t(6444),a=t(407),i=(0,r.ZP)("div")(a.Cg,a.$_,a.GQ,a.AF,a.bK,a.Dh,a.cp,a.eC)},6485:function(n,e,t){t.d(e,{Hg:function(){return u},M1:function(){return s},Mj:function(){return f},TP:function(){return c},V0:function(){return d},tx:function(){return p}});var r=t(4165),a=t(5861),i=t(1243),o="fc60a6bdb24ebf37b614cab96927d720";i.Z.defaults.baseURL="https://api.themoviedb.org/3";var u=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(){var e,t;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/trending/movie/day",{params:{api_key:o}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),c=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e),{params:{api_key:o}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),s=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e,"/credits"),{params:{api_key:o}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/movie/".concat(e,"/reviews"),{params:{api_key:o}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,a.Z)((0,r.Z)().mark((function n(e){var t,a;return(0,r.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,i.Z)("/search/movie",{params:{api_key:o,include_adult:!1,query:e}});case 2:return t=n.sent,a=t.data,n.abrupt("return",a.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f="https://image.tmdb.org/t/p/w500"},2790:function(n,e,t){t.d(e,{T:function(){return r}});var r="https://dummyimage.com/200x300/bab8ba/000&text=No+photo+;("}}]);
//# sourceMappingURL=592.c07a53d7.chunk.js.map