"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[112],{9245:function(n,r,e){e.d(r,{a:function(){return s}});var t,a=e(8402),i=e(168),o=e(6444).ZP.div(t||(t=(0,i.Z)(["\n  display: flex;\n  justify-content: center;\n\n  width: 100%;\n"]))),c=e(184),s=function(){return(0,c.jsx)(o,{children:(0,c.jsx)(a.ko,{height:"80",width:"80",ariaLabel:"progress-bar-loading",wrapperStyle:{},wrapperClass:"progress-bar-wrapper",borderColor:"#ff4500",barColor:"#ff4500"})})}},2112:function(n,r,e){e.r(r),e.d(r,{default:function(){return M}});var t,a,i,o,c,s,u,p,d,l=e(9245),f=e(5861),x=e(885),v=e(7757),h=e.n(v),b=e(7689),m=e(2791),g=e(6485),k=e(4778),Z=e(168),w=e(6444),j=e(6731),y=(0,w.ZP)(j.OL)(t||(t=(0,Z.Z)(["\n  border-radius: 5px;\n  padding: 8px 14px;\n  display: inline-block;\n  text-decoration: none;\n  color: white;\n  background-color: rgba(255, 69, 0, 1);\n  cursor: pointer;\n  margin-bottom: 20px;\n\n  &:hover,\n  :focus {\n    background-color: rgba(255, 69, 0, 0.85);\n  }\n"]))),P=w.ZP.div(a||(a=(0,Z.Z)(["\n  display: flex;\n  gap: 20px;\n  border-bottom: 1px solid black;\n"]))),_=w.ZP.h1(i||(i=(0,Z.Z)(["\n  margin-bottom: 14px;\n"]))),C=w.ZP.h2(o||(o=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 8px;\n"]))),D=w.ZP.p(c||(c=(0,Z.Z)(["\n  margin-bottom: 14px;\n  font-size: 20px;\n"]))),L=w.ZP.p(s||(s=(0,Z.Z)(["\n  font-size: 18px;\n  padding: 4px 8px;\n  border-radius: 5px;\n  border: 1px solid black;\n  display: inline-block;\n\n  background-color: ",";\n\n  color: ",";\n"])),(function(n){var r=n.rating;return r>7?"#6c3":r>=4&&r<=7?"#fc0":"#f00"}),(function(n){var r=n.rating;return r>=4&&r<=7?"black":"white"})),z=e(184),S=function(n){var r=n.movieDetails,e=r.id,t=r.title,a=r.poster_path,i=r.overview,o=r.genres,c=r.vote_average;return(0,z.jsxs)(P,{children:[(0,z.jsx)("img",{src:g.Mj+a,alt:"title",width:"350px"}),(0,z.jsxs)("div",{children:[(0,z.jsx)(_,{children:t}),(0,z.jsx)(C,{children:"Overview:"}),(0,z.jsx)(D,{children:i}),(0,z.jsx)(C,{children:"Genres:"}),(0,z.jsx)(D,{children:o.map((function(n){return n.name})).join(", ")}),(0,z.jsxs)(C,{children:["Users score:",(0,z.jsx)(L,{rating:c.toFixed(),children:(10*c).toFixed(2)}),"%"]})]})]},e)},H=w.ZP.div(u||(u=(0,Z.Z)(["\n  border-bottom: 1px solid black;\n  padding: 20px;\n"]))),O=w.ZP.h2(p||(p=(0,Z.Z)(["\n  font-size: 20px;\n  margin-bottom: 8px;\n"]))),F=(0,w.ZP)(j.OL)(d||(d=(0,Z.Z)(["\n  padding: 2px 6px;\n  width: 200px;\n  border-radius: 5px;\n  text-decoration: none;\n  color: black;\n  font-weight: 500;\n  font-size: 24px;\n  border: 1.5px solid orangered;\n\n  &.active {\n    color: white;\n    background-color: orangered;\n  }\n\n  :hover:not(.active),\n  :focus-visible:not(.active) {\n    color: white;\n    background-color: orangered;\n  }\n"]))),G=function(){return(0,z.jsxs)(H,{children:[(0,z.jsx)(O,{children:"Additional information:"}),(0,z.jsxs)(k.x,{as:"ul",display:"flex",flexDirection:"column",gridGap:20,children:[(0,z.jsx)("li",{children:(0,z.jsx)(F,{to:"cast",children:"Cast"})}),(0,z.jsx)("li",{children:(0,z.jsx)(F,{to:"reviews",children:"Reviews"})})]})]})},M=function(){var n=function(){var n,r,e=(0,m.useState)({}),t=(0,x.Z)(e,2),a=t[0],i=t[1],o=(0,m.useState)(!1),c=(0,x.Z)(o,2),s=c[0],u=c[1],p=(0,m.useState)(!1),d=(0,x.Z)(p,2),l=d[0],v=d[1],k=(0,b.UO)().movieId,Z=null!==(n=null===(r=(0,b.TH)().state)||void 0===r?void 0:r.from)&&void 0!==n?n:"/";return(0,m.useEffect)((function(){var n=function(){var n=(0,f.Z)(h().mark((function n(){var r;return h().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return u(!0),n.prev=1,n.next=4,(0,g.TP)(k);case 4:r=n.sent,i(r),v(!0),n.next=12;break;case 9:n.prev=9,n.t0=n.catch(1),console.log(n.t0);case 12:return n.prev=12,u(!1),n.finish(12);case 15:case"end":return n.stop()}}),n,null,[[1,9,12,15]])})));return function(){return n.apply(this,arguments)}}();n()}),[k,u]),{movieDetails:a,backLinkHref:Z,loading:s,success:l}}(),r=n.movieDetails,e=n.backLinkHref,t=n.loading,a=n.success;return(0,z.jsxs)(k.x,{as:"div",p:"20px",maxWidth:"1200px",m:"0 auto",children:[t&&(0,z.jsx)(l.a,{}),(0,z.jsx)(y,{to:e,children:"Back"}),a&&(0,z.jsx)(S,{movieDetails:r}),(0,z.jsx)(G,{}),(0,z.jsx)(m.Suspense,{fallback:(0,z.jsx)(l.a,{}),children:(0,z.jsx)(b.j3,{})})]})}},4778:function(n,r,e){e.d(r,{x:function(){return i}});var t=e(6444),a=e(407),i=(0,t.ZP)("div")(a.Cg,a.$_,a.GQ,a.AF,a.bK,a.Dh,a.cp,a.eC)},6485:function(n,r,e){e.d(r,{Hg:function(){return s},M1:function(){return p},Mj:function(){return f},TP:function(){return u},V0:function(){return l},tx:function(){return d}});var t=e(5861),a=e(7757),i=e.n(a),o=e(1044),c="fc60a6bdb24ebf37b614cab96927d720";o.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(i().mark((function n(){var r,e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.ZP)("/trending/movie/day",{params:{api_key:c}});case 2:return r=n.sent,e=r.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.ZP)("/movie/".concat(r),{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.ZP)("/movie/".concat(r,"/credits"),{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.ZP)("/movie/".concat(r,"/reviews"),{params:{api_key:c}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),l=function(){var n=(0,t.Z)(i().mark((function n(r){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,o.ZP)("/search/movie",{params:{api_key:c,include_adult:!1,query:r}});case 2:return e=n.sent,t=e.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(r){return n.apply(this,arguments)}}(),f="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=112.c8946be7.chunk.js.map