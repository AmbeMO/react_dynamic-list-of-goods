(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{12:function(t,n,e){},14:function(t,n,e){"use strict";e.r(n);var r=e(5),a=e.n(r),s=e(2),c=e(6),o=e(1),u=e.n(o),i=e(3),l=(e(12),e(0)),p=function(t){var n=t.goods;return Object(l.jsx)("ul",{className:"GoodList",children:n.map((function(t){var n=t.id,e=t.name,r=t.color;return Object(l.jsx)("li",{style:{color:r},children:e},n)}))})},f="https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json";function d(){return b.apply(this,arguments)}function b(){return(b=Object(s.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(f);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(){return j.apply(this,arguments)}function j(){return(j=Object(s.a)(u.a.mark((function t(){var n,e,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(f);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,r=e.slice(0,5),t.abrupt("return",r.sort((function(t,n){return t.name.localeCompare(n.name)})));case 8:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(){return x.apply(this,arguments)}function x(){return(x=Object(s.a)(u.a.mark((function t(){var n,e;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(f);case 2:return n=t.sent,t.next=5,n.json();case 5:return e=t.sent,t.abrupt("return",e.filter((function(t){return"red"===t.color})));case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}var v=function(){var t=Object(i.useState)([]),n=Object(c.a)(t,2),e=n[0],r=n[1],a=function(){var t=Object(s.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,d();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=Object(s.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=Object(s.a)(u.a.mark((function t(){var n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m();case 2:n=t.sent,r(n);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(l.jsxs)("div",{className:"list",children:[Object(l.jsx)("h2",{className:"list__title",children:"Dynamic list of Goods"}),Object(l.jsxs)("div",{className:"list__btn-wrp",children:[Object(l.jsx)("button",{type:"button",onClick:a,className:"list__btn",children:"Load All goods"}),Object(l.jsx)("button",{type:"button",onClick:o,className:"list__btn",children:"Load 5 first goods"}),Object(l.jsx)("button",{type:"button",onClick:f,className:"list__btn",children:"Load red goods"})]}),e.length>0&&Object(l.jsx)(p,{goods:e})]})};a.a.render(Object(l.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e8a9ac28.chunk.js.map