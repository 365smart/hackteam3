(this.webpackJsonphackteam3=this.webpackJsonphackteam3||[]).push([[0],{31:function(n,e,t){n.exports=t(46)},36:function(n,e,t){},46:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(24),o=t.n(i),c=(t(36),t(1)),l=t(12),u=t(13),s=t(5),p=t(6),m=t(9),d=t(7),h=t(8),f=t(14),b=t(2);function g(){var n=Object(c.a)(["\n  width: 64px;\n  height: 64px;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  position: absolute;\n  bottom: 16px;\n  right: 16px;\n  line-height: 1;\n  font-size: 32px;\n  padding-top: 2px;\n"]);return g=function(){return n},n}function x(){var n=Object(c.a)(["\n  border-radius: 45px;\n  height: 48px;\n  background: #22212D;\n  color: white;\n  font-size: 24px;\n  text-align: center;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  border-radius: 45px;\n  width: 100%;\n  max-width: 420px;\n  margin: 8px 16px;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif!important;\n  text-decoration: none;\n  line-height: 48px;\n"]);return x=function(){return n},n}function w(){var n=Object(c.a)(["\n  background: white;\n  padding: 16px;\n  border-radius: 16px;\n  width: calc(100% - 48px);\n  display: flex;\n  margin: 16px;\n  height: auto;\n  align-items: center;\n  flex-direction: column;\n  max-width: 480px;\n"]);return w=function(){return n},n}function E(){var n=Object(c.a)(["\n  font-size: 80px;\n  font-weight: 700;\n  line-height: 96px;\n"]);return E=function(){return n},n}function v(){var n=Object(c.a)(["\n  border-radius: 45px;\n  height: 48px;\n  background: #22212D;\n  color: white;\n  font-size: 24px;\n  text-align: center;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  border-radius: 45px;\n  width: 100%;\n  max-width: 420px;\n  margin: 8px 16px;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif!important;\n"]);return v=function(){return n},n}function j(){var n=Object(c.a)(["\n  height: 48px;\n  background: white;\n  color: #22212D;\n  font-size: 24px;\n  text-align: center;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  border-radius: 45px;\n  width: 100%;\n  max-width: 420px;\n  margin: 8px 16px;\n  font-weight: 700;\n  font-family: 'Montserrat', sans-serif!important;\n  box-sizing: border-box;\n  text-transform: capitalize;\n"]);return j=function(){return n},n}function O(){var n=Object(c.a)(["\n  line-height: 32px;\n  font-size: 24px;\n  font-weight: 400;\n"]);return O=function(){return n},n}function k(){var n=Object(c.a)(["\n  height: 160px;\n  width: 160px;\n  margin-bottom: 40px;\n  margin-top: 16px;\n"]);return k=function(){return n},n}function y(){var n=Object(c.a)(["\n  width: 100%;\n  font-size: 24px;\n  height: 48px;\n  line-height: 48px;\n  text-align: center;\n"]);return y=function(){return n},n}function C(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  color: white;\n  align-items: center;\n  padding: 8px;\n"]);return C=function(){return n},n}var z=b.a.div(C()),A=b.a.div(y()),D=b.a.img(k()),F=b.a.label(O()),S=b.a.input(j()),N=b.a.button(v()),q=b.a.div(E()),B=b.a.div(w()),M=Object(b.a)(l.b)(x()),W=Object(b.a)(M)(g());function J(){var n=Object(c.a)(["\n  width: calc(100% - 16px);\n  border-radius: 45px;\n  background: ","\n  color: ","\n  opacity: ","\n  height: 48px;\n  line-height: 48px;\n  padding: 0px 16px;\n  margin: 8px;\n  outline: none;\n  border: none;\n  font-size: 18px;\n  text-align: left;\n  &:focus {\n    background: #22212D;\n    color: white;\n  }\n"]);return J=function(){return n},n}function T(){var n=Object(c.a)(["\n  padding: 8px 24px;\n  color: #22212D;\n  font-size: 18px;\n  text-align: center;\n  font-weight: 700;\n  margin-bottom: 24px;\n"]);return T=function(){return n},n}function I(){var n=Object(c.a)(["\n  background: #22212D;\n  height: 64px;\n  width: 64px;\n  color: white;\n  font-size: 24px;\n  border-radius: 45px;\n  text-align: center;\n  line-height: 64px;\n  margin-bottom: 8px;\n"]);return I=function(){return n},n}function L(){var n=Object(c.a)(["\n  height: 32px;\n  line-height: 32px;\n  color: #999;\n  display: flex;\n  justify-content: space-between;\n  width: 100%;\n"]);return L=function(){return n},n}var P=b.a.div(L()),Q=b.a.div(I()),R=b.a.div(T()),V=b.a.button(J(),(function(n){return n.wrong?"#D13F4B":n.right?"#00BF6F":"#EAEAEB"}),(function(n){return n.wrong?"#FFF":n.right?"#FFF":"#22212D"}),(function(n){return n.pick?".5":"1"})),U=function(n){function e(n){var t;return Object(s.a)(this,e),(t=Object(m.a)(this,Object(d.a)(e).call(this,n))).state={timer:5,myAnswer:null},t.handleAnswerClick=t.handleAnswerClick.bind(Object(f.a)(t)),t}return Object(h.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.countdown()}},{key:"countdown",value:function(){var n=this,e=this.state.timer;setTimeout((function(){e-=1,n.setState({timer:e}),e&&n.countdown()}),1e3)}},{key:"handleAnswerClick",value:function(n){console.log("answer ".concat(n," click")),n===this.props.correctAnswer?console.log("correct answer"):console.log("wrong answer"),this.setState({myAnswer:n})}},{key:"render",value:function(){var n=this,e=this.props,t=e.users,a=e.points,i=e.quiz,o=i.answers,c=i.question,l=i.correctAnswer,u=this.state,s=u.timer,p=u.myAnswer;return r.a.createElement(B,null,r.a.createElement(P,null,r.a.createElement("div",null,t," users"),r.a.createElement("div",null,a," points")),0===s&&p===l&&r.a.createElement(Q,null,"right"),0===s&&p!==l&&r.a.createElement(Q,null,"wrong"),s>0&&r.a.createElement(Q,null,s),r.a.createElement(R,null,c),o.map((function(e,t){var a=0===s&&p===t&&p!==l,i=0===s&&t===l,o=0!==s&&t===p;return r.a.createElement(V,{disabled:null!=p,pick:o,wrong:a,right:i,onClick:n.handleAnswerClick.bind(n,t)},e)})))}}]),e}(r.a.Component),Y=function(n){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(A,null,"Question 1"),r.a.createElement(U,{users:4,points:"1,000",quiz:{question:"What former Franciscan mission was laid siege to over 13 day period in 1836?",answers:["A. Chapel De la Sacramente","B. The Alamo","C. The Vera Pierre","D. Ultima Verdardi"],correctAnswer:1}}),r.a.createElement(l.b,{to:"/"},"About"))}}]),e}(r.a.Component);var $=function(n){function e(n){var t;return Object(s.a)(this,e),(t=Object(m.a)(this,Object(d.a)(e).call(this,n))).state={name:"",done:!1,countdownSec:600},t.handleNextClick=t.handleNextClick.bind(Object(f.a)(t)),t.handleNameChange=t.handleNameChange.bind(Object(f.a)(t)),t}return Object(h.a)(e,n),Object(p.a)(e,[{key:"componentDidMount",value:function(){this.countdown()}},{key:"countdown",value:function(){var n=this,e=this.state.countdownSec;setTimeout((function(){e-=1,n.setState({countdownSec:e}),e?n.countdown():console.log("todo: go to quizz page")}),1e3)}},{key:"handleNameChange",value:function(n){this.setState({name:n.target.value})}},{key:"handleNextClick",value:function(){this.state.name&&this.setState({done:!0})}},{key:"render",value:function(){var n=this.state,e=n.name,t=n.done,a=function(n){var e=parseInt(n/60);e<10&&(e="0"+e);var t=n%60;return t<10&&(t="0"+t),"".concat(e,":").concat(t)}(n.countdownSec);return r.a.createElement(z,null,t?r.a.createElement(A,null,"Welcome back, ",e,"! ",r.a.createElement("span",{role:"img","aria-label":"up"},"\ud83d\udc4b")):r.a.createElement(A,null,"Welcome! ",r.a.createElement("span",{role:"img","aria-label":"up"},"\ud83d\udc4b")),r.a.createElement(D,{src:"whitelogo.png"}),t?r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,"Starting in"),r.a.createElement(q,null,a)):r.a.createElement(r.a.Fragment,null,r.a.createElement(F,null,"Enter your name"),r.a.createElement(S,{onChange:this.handleNameChange}),r.a.createElement(N,{onClick:this.handleNextClick},"Next")),r.a.createElement(l.b,{to:"/quiz/1"},"Quiz Page"),r.a.createElement(W,{to:"/leaders"},r.a.createElement("span",{role:"img","aria-label":"trophy"},"\ud83c\udfc6")))}}]),e}(r.a.Component);function G(){var n=Object(c.a)(["\n  text-align: right;\n"]);return G=function(){return n},n}function H(){var n=Object(c.a)(["\n  font-weight: 700;\n  margin-right: 16px;\n"]);return H=function(){return n},n}function K(){var n=Object(c.a)(["\n  color: white;\n  font-size: 18px;\n  text-align: left;\n"]);return K=function(){return n},n}function X(){var n=Object(c.a)(["\n  display: flex;\n  flex-direction: row;\n"]);return X=function(){return n},n}function Z(){var n=Object(c.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  flex-direction: row;\n  max-width: 420px;\n  width: 100%;\n  margin: 0px 8px;\n  height: 32px;\n  border-bottom: 1px solid rgba(0,0,0,0.1);\n  padding-bottom: 8px;\n  padding-top: 8px;\n"]);return Z=function(){return n},n}var _=b.a.div(Z()),nn=b.a.div(X()),en=b.a.div(K()),tn=Object(b.a)(en)(H()),an=Object(b.a)(en)(G()),rn=function(n){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){var n=this.props,e=n.place,t=n.name,a=n.points;return r.a.createElement(_,null,r.a.createElement(nn,null,r.a.createElement(tn,null,e),r.a.createElement(en,null,t)),r.a.createElement(nn,null,r.a.createElement(an,null,a)))}}]),e}(r.a.Component),on=function(n){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(A,null,r.a.createElement("span",{role:"img","aria-label":"up"},"\ud83d\udc4d")," You did it!"),r.a.createElement(q,null,"1st"),r.a.createElement(A,null,"10,000 points"),r.a.createElement(A,null,"Leaderboard"),r.a.createElement(rn,{place:"1st",name:"Aung",points:"10,000"}),r.a.createElement(rn,{place:"2nd",name:"Chris",points:"9,000"}),r.a.createElement(rn,{place:"3rd",name:"EJ",points:"8,000"}),r.a.createElement(rn,{place:"4th",name:"Ron",points:"7,000"}),r.a.createElement("br",null),r.a.createElement(M,{to:"/"},"Done"))}}]),e}(r.a.Component),cn=function(n){function e(){return Object(s.a)(this,e),Object(m.a)(this,Object(d.a)(e).apply(this,arguments))}return Object(h.a)(e,n),Object(p.a)(e,[{key:"render",value:function(){return r.a.createElement(z,null,r.a.createElement(A,null,"Leaderboard ",r.a.createElement("span",{role:"img","aria-label":"trophy"},"\ud83c\udfc6")),r.a.createElement(rn,{place:"1st",name:"Aung",points:"10,000"}),r.a.createElement(rn,{place:"2nd",name:"Chris",points:"9,000"}),r.a.createElement(rn,{place:"3rd",name:"EJ",points:"8,000"}),r.a.createElement(rn,{place:"4th",name:"Ron",points:"7,000"}),r.a.createElement("br",null),r.a.createElement(M,{to:"/"},"Back"))}}]),e}(r.a.Component);function ln(){var n=Object(c.a)(["\n  height: 100vh;\n  width: 100vw;\n  background: -moz-linear-gradient(-45deg, #2555d9 0%, #00bf6f 100%);\n  background: -webkit-linear-gradient(-45deg, #2555d9 0%,#00bf6f 100%);\n  background: linear-gradient(135deg, #2555d9 0%,#00bf6f;\n  display: flex;\n  color: white;\n  * {\n    font-family: 'Montserrat', sans-serif!important;\n    box-sizing: border-box;\n  }\n"]);return ln=function(){return n},n}var un=b.a.div(ln());function sn(){return r.a.createElement($,null)}function pn(){return r.a.createElement(Y,null)}function mn(){return r.a.createElement(on,null)}function dn(){return r.a.createElement(cn,null)}var hn=function(){return r.a.createElement(un,null,r.a.createElement(l.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/"},r.a.createElement(sn,null)),r.a.createElement(u.a,{path:"/quiz/:id",children:r.a.createElement(pn,null)}),r.a.createElement(u.a,{path:"/results"},r.a.createElement(mn,null)),r.a.createElement(u.a,{path:"/leaders"},r.a.createElement(dn,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(hn,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.f989070a.chunk.js.map