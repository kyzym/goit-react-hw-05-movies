"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[779],{9779:function(n,e,r){r.r(e),r.d(e,{default:function(){return v}});var t,a,u=r(885),c=r(7689),i=r(2791),s=r(6485),o=r(4778),p=r(168),f=r(6444),d=f.ZP.ul(t||(t=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 24px;\n"]))),l=f.ZP.li(a||(a=(0,p.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 12px;\n  background-color: white;\n  border-radius: 5px;\n  padding: 6px;\n"]))),h=r(184),v=function(){var n=(0,c.UO)().movieId,e=(0,i.useState)(null),r=(0,u.Z)(e,2),t=r[0],a=r[1];return(0,i.useEffect)((function(){(0,s.tx)(n).then(a).catch((function(n){return console.log(n)}))}),[n]),t?(0,h.jsx)(o.x,{as:"div",p:"20px",children:t.length>0?(0,h.jsx)(d,{children:t.map((function(n){var e=n.author,r=n.content,t=n.id,a=n.created_at;return(0,h.jsxs)(l,{children:[(0,h.jsxs)("h3",{children:["Author: ",e]}),(0,h.jsx)("p",{children:(0,h.jsx)("b",{children:"Review:"})}),(0,h.jsx)("p",{children:r||(0,h.jsx)("p",{children:"No review"})}),(0,h.jsxs)("p",{children:[(0,h.jsx)("b",{children:"Date:"})," ",a?new Date(a).toLocaleDateString("en-US"):(0,h.jsx)("p",{children:"No date"})]})]},t)}))}):(0,h.jsx)("p",{children:"We don't have any reviews for this movie, yet."})}):null}},4778:function(n,e,r){r.d(e,{x:function(){return u}});var t=r(6444),a=r(407),u=(0,t.ZP)("div")(a.Cg,a.$_,a.GQ,a.AF,a.bK,a.Dh,a.cp,a.eC)},6485:function(n,e,r){r.d(e,{Hg:function(){return s},M1:function(){return p},Mj:function(){return l},TP:function(){return o},V0:function(){return d},tx:function(){return f}});var t=r(5861),a=r(7757),u=r.n(a),c=r(1044),i="fc60a6bdb24ebf37b614cab96927d720";c.ZP.defaults.baseURL="https://api.themoviedb.org/3";var s=function(){var n=(0,t.Z)(u().mark((function n(){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/trending/movie/day",{params:{api_key:i}});case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/movie/".concat(e),{params:{api_key:i}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/movie/".concat(e,"/credits"),{params:{api_key:i}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.cast);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/movie/".concat(e,"/reviews"),{params:{api_key:i}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,t.Z)(u().mark((function n(e){var r,t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,c.ZP)("/search/movie",{params:{api_key:i,include_adult:!1,query:e}});case 2:return r=n.sent,t=r.data,n.abrupt("return",t.results);case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l="https://image.tmdb.org/t/p/w500"}}]);
//# sourceMappingURL=779.cf4cedcf.chunk.js.map