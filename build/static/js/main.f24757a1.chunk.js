(this["webpackJsonp@web-interviews/timer"]=this["webpackJsonp@web-interviews/timer"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,n){e.exports={header:"header_header__3s5zs"}},function(e,t,n){e.exports={step2:"step2_step2__1yWU3"}},function(e,t,n){e.exports={step2:"step3_step2__2eX4G"}},function(e,t,n){e.exports={step2:"step4_step2__quCaG"}},function(e,t,n){e.exports={step2:"step5_step2__2pHEe"}},function(e,t,n){e.exports={step2:"step6_step2__3a1WF"}},function(e,t,n){e.exports={step2:"step7_step2__2EYz0"}},,,,,,function(e,t,n){},,,,,function(e,t,n){"use strict";n.r(t);var c,r,s=n(1),a=n.n(s),i=n(12),u=n.n(i),l=(n(26),n(7)),j=n(8),b=n(9),o=n(14),d=n.n(o),O=n(2),x=n(0),h=j.a.div(c||(c=Object(l.a)(["\n  width: 220px;\n  margin: 0 auto;\n  text-align: center;\n\n"]))),p=n(15),m=n.n(p),v=n(16),f=n.n(v),N=n(17),g=n.n(N),C=n(18),k=n.n(C),S=n(19),I=n.n(S),y=n(6),w=n(20),_=n.n(w),R=function(e){var t=e.t;return Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:t}),"card"]})},E=[{link:"/",Component:function(){var e=Object(s.useState)(0),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(!0),a=Object(O.a)(r,2),i=a[0],u=a[1];return Object(s.useEffect)((function(){var e=setInterval((function(){i&&c((function(e){return e+1}))}),1e3);return function(){return clearInterval(e)}}),[i]),Object(x.jsx)("section",{children:Object(x.jsxs)(h,{children:[Object(x.jsx)("h2",{children:"Step 1 "}),Object(x.jsx)("div",{className:"timer",children:n}),Object(x.jsx)("button",{className:"button",onClick:function(){return u(!i)},children:i?"Stop":"Start"}),Object(x.jsx)("button",{className:"button",onClick:function(){u(!1),c(0),u(!0)},children:"Reset"})]})})}},{link:"step2",Component:function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(0),a=Object(O.a)(r,2),i=a[0],u=a[1],l=Object(s.useRef)(0);l.current=i;var j=Object(s.useRef)();Object(s.useEffect)((function(){return j.current=setInterval((function(){u(l.current+1)}),1e3),function(){return j.current&&clearInterval(j.current)}}),[]);return Object(x.jsxs)("section",{className:m.a.step2,children:[Object(x.jsx)("h1",{children:" step 2"}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:i}),"card"]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsxs)("button",{onClick:function(){c(!n),!n&&j.current&&clearInterval(j.current),n&&j.current&&(j.current=setInterval((function(){u(l.current+1)}),1e3))},className:"button",children:[" ",n?"start":"stop"," "]}),Object(x.jsx)("button",{onClick:function(){j.current&&(clearInterval(j.current),c(!0),u(0))},className:"button",children:" reset"})]})]})}},{link:"step3",Component:function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)(0),a=Object(O.a)(r,2),i=a[0],u=a[1],l=Object(s.useRef)(0);l.current=i;var j=Object(s.useRef)();Object(s.useEffect)((function(){return j.current=setInterval((function(){u(l.current+1)}),1e3),function(){return j.current&&clearInterval(j.current)}}),[]);return Object(x.jsxs)("section",{className:f.a.step2,children:[Object(x.jsx)("h1",{children:" step 3"}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:i}),"card"]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:i}),"card"]})]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsxs)("button",{onClick:function(){c(!n),!n&&j.current&&clearInterval(j.current),n&&j.current&&(j.current=setInterval((function(){u(l.current+1)}),1e3))},className:"button",children:[" ",n?"start":"stop"," "]}),Object(x.jsx)("button",{onClick:function(){j.current&&(clearInterval(j.current),c(!0),u(0))},className:"button",children:" reset"})]})]})}},{link:"step4",Component:function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)("1"),a=Object(O.a)(r,2),i=a[0],u=a[1],l=Object(s.useState)("1000"),j=Object(O.a)(l,2),b=j[0],o=j[1],d=Object(s.useState)("100"),h=Object(O.a)(d,2),p=h[0],m=h[1],v=Object(s.useRef)(Number(p)),f=Object(s.useState)(Number(p)),N=Object(O.a)(f,2),C=N[0],k=N[1];v.current=C;var S=Object(s.useRef)();Object(s.useEffect)((function(){return S.current=setInterval((function(){k(v.current+Number(i))}),Number(b)),function(){return S.current&&clearInterval(S.current)}}),[]);var I=function(){S.current&&(clearInterval(S.current),c(!0),k(Number(p)))},y=function(e){return function(t){var n=t.target.value;Number(n)>=0&&e(t.target.value)}};return Object(x.jsxs)("section",{className:g.a.step2,children:[Object(x.jsx)("h1",{children:" step 4"}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:C}),"card"]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:C}),"card"]})]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsxs)("button",{onClick:function(){c(!n),!n&&S.current&&clearInterval(S.current),n&&S.current&&(S.current=setInterval((function(){k(v.current+Number(i))}),Number(b)))},className:"button",children:[" ",n?"start":"stop"," "]}),Object(x.jsx)("button",{onClick:I,className:"button",children:" reset"})]}),Object(x.jsxs)("div",{className:"label-box",children:[Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" x increment      "}),Object(x.jsx)("input",{onChange:y(u),value:i,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" y interval (ms)     "}),Object(x.jsx)("input",{onChange:y(o),value:b,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" z start from      "}),Object(x.jsx)("input",{onChange:y(m),value:p,type:"text"})]}),Object(x.jsx)("button",{className:"button",onClick:I,children:" reset to new Z"})]})]})}},{link:"step5",Component:function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)("1"),a=Object(O.a)(r,2),i=a[0],u=a[1],l=Object(s.useState)("1000"),j=Object(O.a)(l,2),b=j[0],o=j[1],d=Object(s.useState)("100"),h=Object(O.a)(d,2),p=h[0],m=h[1],v=Object(s.useRef)(Number(p)),f=Object(s.useState)(Number(p)),N=Object(O.a)(f,2),g=N[0],C=N[1],S=Object(s.useState)(-1),I=Object(O.a)(S,2),y=I[0],w=I[1];v.current=g;var _=Object(s.useRef)();Object(s.useEffect)((function(){return _.current=setInterval((function(){C(v.current+Number(i)*y)}),Number(b)),function(){return _.current&&clearInterval(_.current)}}),[]);var R=function(){_.current&&(clearInterval(_.current),c(!0),C(Number(p)))};g<0&&v.current&&(R(),C(0));var E=function(e){return function(t){var n=t.target.value;Number(n)>=0&&e(t.target.value)}};return Object(x.jsxs)("section",{className:k.a.step2,children:[Object(x.jsx)("h1",{children:" step 5"}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:g}),"card"]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:g}),"card"]})]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsxs)("button",{onClick:function(){c(!n),!n&&_.current&&clearInterval(_.current),n&&_.current&&(!g&&C(Number(p)),_.current=setInterval((function(){C(v.current+Number(i)*y)}),Number(b)))},className:"button",children:[" ",n?"start":"stop"," "]}),Object(x.jsx)("button",{onClick:R,className:"button",children:" reset"})]}),Object(x.jsxs)("div",{className:"switch-box",children:[Object(x.jsx)("span",{className:"text",children:" decrement"}),Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{onChange:function(e){R(),w(e.target.checked?1:-1)},type:"checkbox"}),Object(x.jsx)("span",{className:"slider round",children:"  "})]}),Object(x.jsx)("span",{className:"text",children:" increment"})]}),Object(x.jsxs)("div",{className:"label-box",children:[Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" x step      "}),Object(x.jsx)("input",{onChange:E(u),value:i,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" y interval (ms)     "}),Object(x.jsx)("input",{onChange:E(o),value:b,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" z start from      "}),Object(x.jsx)("input",{onChange:E(m),value:p,type:"text"})]}),Object(x.jsx)("button",{className:"button",onClick:R,children:" reset to new Z"})]})]})}},{link:"step6",Component:function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)("1"),a=Object(O.a)(r,2),i=a[0],u=a[1],l=Object(s.useState)("1000"),j=Object(O.a)(l,2),b=j[0],o=j[1],d=Object(s.useState)(180),h=Object(O.a)(d,2),p=h[0],m=h[1],v=Object(s.useRef)(Number(p)),f=Object(s.useState)(Number(p)),N=Object(O.a)(f,2),g=N[0],C=N[1],k=Object(s.useState)(-1),S=Object(O.a)(k,2),y=S[0],w=S[1],_=Object(s.useState)(!0),R=Object(O.a)(_,2),E=R[0],z=R[1],F=Object(s.useState)(!0),Z=Object(O.a)(F,2),M=Z[0],B=Z[1];v.current=g;var G=Object(s.useRef)();Object(s.useEffect)((function(){return G.current=setInterval((function(){C(v.current+Number(i)*y)}),Number(b)),function(){return G.current&&clearInterval(G.current)}}),[]);var J=function(){G.current&&(clearInterval(G.current),c(!0),C(Number(p)))};g<0&&v.current&&(J(),C(0));var L=function(e){return function(t){var n=t.target.value;Number(n)>=0&&e(t.target.value)}},P=function(e){if(M){var t=e%60,n=Math.floor(e/60);return(n=n<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)}return e};return Object(x.jsxs)("section",{className:I.a.step2,children:[Object(x.jsx)("h1",{children:" step 6"}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:P(g)}),"card"]}),Object(x.jsxs)("div",{className:"card",children:[Object(x.jsx)("div",{className:"timer",children:P(g)}),"card"]})]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsxs)("button",{onClick:function(){c(!n),!n&&G.current&&clearInterval(G.current),n&&G.current&&(!g&&C(Number(p)),G.current=setInterval((function(){C(v.current+Number(i)*y)}),Number(b)))},className:"button",children:[" ",n?"start":"stop"," "]}),Object(x.jsx)("button",{onClick:J,className:"button",children:" reset"})]}),Object(x.jsxs)("div",{className:"switch-box",children:[Object(x.jsx)("span",{className:"text",children:" decrement"}),Object(x.jsxs)("label",{className:"switch",children:[Object(x.jsx)("input",{onChange:function(e){J(),w(e.target.checked?1:-1)},type:"checkbox"}),Object(x.jsx)("span",{className:"slider round",children:"  "})]}),Object(x.jsx)("span",{className:"text",children:" increment"})]}),Object(x.jsxs)("div",{className:"label-box",children:[Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" x step (s)      "}),Object(x.jsx)("input",{onChange:L(u),value:i,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" y interval (ms)     "}),Object(x.jsx)("input",{onChange:L(o),value:b,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" z start   mm:ss     "}),Object(x.jsx)("input",{style:{backgroundColor:E?"":"red"},onChange:function(e){var t=e.target.value.split(":"),n=Number(t[t.length-2])||0,c=Number(t[t.length-1])||0;console.log(n,c),/[^0-9:]/.test(e.target.value)||n>0&&c>60?z(!1):(B(n>0),m(60*n+c),z(!0))},placeholder:"3:00",type:"text"})]}),Object(x.jsx)("span",{children:" you can also type just number without ':' like 123312"}),Object(x.jsx)("button",{className:"button",onClick:J,children:" reset to new Z"})]})]})}},{link:"step7",Component:function(){var e=Object(s.useState)(!1),t=Object(O.a)(e,2),n=t[0],c=t[1],r=Object(s.useState)("1"),a=Object(O.a)(r,2),i=a[0],u=a[1],l=Object(s.useState)("1000"),j=Object(O.a)(l,2),b=j[0],o=j[1],d=Object(s.useState)(180),h=Object(O.a)(d,2),p=h[0],m=h[1],v=Object(s.useRef)({inc:Number(p),dec:Number(p)}),f=Object(s.useState)({inc:Number(p),dec:Number(p)}),N=Object(O.a)(f,2),g=N[0],C=N[1],k=Object(s.useState)(!0),S=Object(O.a)(k,2),I=S[0],w=S[1];v.current=g;var E=Object(s.useRef)();Object(s.useEffect)((function(){return E.current=setInterval((function(){var e={inc:v.current.inc+Number(i),dec:v.current.dec-Number(i)};console.log(g.dec),C(Object(y.a)({},e))}),Number(b)),function(){return E.current&&clearInterval(E.current)}}),[]);var z=function(){E.current&&(clearInterval(E.current),c(!0),C({inc:Number(p),dec:Number(p)}))};g.dec<0&&v.current&&(E.current&&clearInterval(E.current),c(!0),C(Object(y.a)(Object(y.a)({},g),{},{dec:0})));var F=function(e){return function(t){var n=t.target.value;Number(n)>=0&&e(t.target.value)}},Z=function(e){var t=e%60,n=Math.floor(e/60);return(n=n<10?"0"+n:n)+":"+(t=t<10?"0"+t:t)};return Object(x.jsxs)("section",{className:_.a.step2,children:[Object(x.jsx)("h1",{children:" step 7"}),Object(x.jsxs)("div",{className:"card-container",children:[Object(x.jsx)(R,{t:Z(g.dec)}),Object(x.jsx)(R,{t:Z(g.inc)}),Object(x.jsx)(R,{t:g.inc}),Object(x.jsx)(R,{t:g.dec})]}),Object(x.jsxs)("div",{className:"button-container",children:[Object(x.jsxs)("button",{onClick:function(){c(!n),!n&&E.current&&clearInterval(E.current),n&&E.current&&(!g.dec&&C(Object(y.a)(Object(y.a)({},g),{},{dec:Number(p)})),E.current=setInterval((function(){var e={inc:v.current.inc+Number(i),dec:v.current.dec-Number(i)};C(Object(y.a)({},e))}),Number(b)))},className:"button",children:[" ",n?"start":"stop"," "]}),Object(x.jsx)("button",{onClick:z,className:"button",children:" reset"})]}),Object(x.jsxs)("div",{className:"label-box",children:[Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" x step (s)      "}),Object(x.jsx)("input",{onChange:F(u),value:i,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" y interval (ms)     "}),Object(x.jsx)("input",{onChange:F(o),value:b,type:"text"})]}),Object(x.jsxs)("label",{children:[" ",Object(x.jsx)("span",{children:" z start   mm:ss     "}),Object(x.jsx)("input",{style:{backgroundColor:I?"":"red"},onChange:function(e){var t=e.target.value.split(":"),n=Number(t[t.length-2])||0,c=Number(t[t.length-1])||0;console.log(n,c),/[^0-9:]/.test(e.target.value)||n>0&&c>60?w(!1):(m(60*n+c),w(!0))},placeholder:"3:00",type:"text"})]}),Object(x.jsx)("span",{children:" you can also type just number without ':' like 123312"}),Object(x.jsx)("button",{className:"button",onClick:z,children:" reset to new Z"})]})]})}}],z=function(){return Object(x.jsx)("header",{className:d.a.header,children:Object(x.jsx)("nav",{children:Object(x.jsx)("ul",{children:E.map((function(e,t){var n=e.link;return Object(x.jsx)("li",{children:Object(x.jsxs)(b.b,{to:n,children:[n," "]})},t)}))})})})},F=n(3),Z=j.a.div(r||(r=Object(l.a)(["\n  * {\n    box-sizing: border-box;\n  }\n\n  section {\n    height: 100%;\n    overflow: auto;\n    padding: 20px;\n    display: flex;\n    justify-content: center;\n    flex-direction: column;\n    align-items: center;\n  }\n\n  .timer {\n    border-color: #5c5c5c;\n    border-width: 1px;\n    border-style: solid solid dashed;\n    padding: 8px 48px;\n    margin-bottom: 24px;\n    border-radius: 8px;\n  }\n\n  .button {\n    padding: 4px 24px;\n    border-radius: 24px;\n    cursor: pointer;\n    margin: 0 5px;\n  }\n\n  .wrapper {\n\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding-top: 70px;\n    position: absolute;\n    left: 0;\n    right: 0;\n    min-height: 100vh;\n    top: 0;\n    overflow: auto;\n  }\n\n  .card {\n    box-shadow: 0px 3px 3px -2px rgb(0 0 0 / 20%), 0px 3px 4px 0px rgb(0 0 0 / 14%), 0px 1px 8px 0px rgb(0 0 0 / 12%);\n    position: relative;\n    width: 300px;\n    height: 300px;\n    background-color: #fff;\n    color: #424242;\n    padding: 30px;\n    border-radius: 8px;\n    text-align: center;\n    font-size: 0.875rem;\n    font-weight: 700;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-top: 30px;\n  }\n\n"])));var M=function(){return Object(x.jsx)(Z,{children:Object(x.jsxs)(b.a,{children:[Object(x.jsx)(z,{}),Object(x.jsx)("div",{className:"wrapper",children:Object(x.jsx)(F.c,{children:E.map((function(e){var t=e.link,n=e.Component;return Object(x.jsx)(F.a,{path:t,element:Object(x.jsx)(n,{})},t)}))})})]})})},B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};u.a.render(Object(x.jsx)(a.a.StrictMode,{children:Object(x.jsx)(M,{})}),document.getElementById("root")),B()}],[[31,1,2]]]);
//# sourceMappingURL=main.f24757a1.chunk.js.map