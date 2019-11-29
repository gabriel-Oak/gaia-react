(this["webpackJsonpgaia-react"]=this["webpackJsonpgaia-react"]||[]).push([[0],{157:function(e,t,a){e.exports=a(285)},162:function(e,t,a){},184:function(e,t,a){},284:function(e,t,a){},285:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(10),o=a.n(c),i=(a(162),a(34)),s=a(35),u=a(39),l=a(36),p=a(40),m=a(77),b=a(42),f=a(28),d="AUTHENTICATED",O="SETTITLE",h="FIRE_SNACK",g="CLOSE_SNACK",v=a(97),E=a.n(v),j=a(138),y=a(139),k=a.n(y),S="SENDED",w="ENDED",P="SUCCESS",C="FIRE_SNACK",N="CLOSE_SNACK",x="http://gaia-smn.herokuapp.com",D={user:"".concat(x,"/usuario"),cardapio:"".concat(x,"/cardapio"),troca:"".concat(x,"/troca")},T=function(e){var t=e.response;return t&&500===t.status?e.message="Tivemos algum problema interno, tente de novo mais tarde":t&&503===t.status?e.message="Estamos fora do ar, tente de novo mais tarde":t&&(e.message=t.data.message),e},I=a(317),A=a(318),_=a(323),R=a(322),L=function(e){return e||"number"===typeof e?void 0:"Esse campo \xe9 obrigatorio"},F=a(149),K=a(320),z=function(e){var t=e.input,a=e.meta,n=a.touched,c=a.error,o=Object(F.a)(e,["input","meta"]);return r.a.createElement(K.a,Object.assign({},t,o,{error:n&&!!c,helperText:n&&c,className:"Field"}))},H=a(314),J=a(315),U=a(324),B=a(316),G=(a(184),Object(R.a)({form:"auth"})(function(e){var t=e.handleSubmit,a=e.onSubmit,n=e.loading;return r.a.createElement("form",{onSubmit:t(a)},r.a.createElement(H.a,{className:"field_wrapper"},r.a.createElement(_.a,{name:"user",label:"Usu\xe1rio",variant:"outlined",disabled:n,component:z,validate:[L]}),r.a.createElement(_.a,{name:"senha",label:"Senha",variant:"outlined",disabled:n,component:z,validate:[L]})),r.a.createElement(J.a,{className:"button-container"},r.a.createElement(U.a,{color:"primary",variant:"contained",type:"submit",disabled:n},n?r.a.createElement(B.a,{size:24}):"Entrar")))})),W=a(326),M=a(145),$=a.n(M),q=a(144),Q=a.n(q),V=a(143),X=a.n(V),Y=a(142),Z=a.n(Y),ee=function(e){var t=e.open,a=e.type,n=e.message,c=e.duration,o=e.closeSnack,i={success:r.a.createElement(Z.a,null),error:r.a.createElement(X.a,null),warning:r.a.createElement(Q.a,null),info:r.a.createElement($.a,null)};return r.a.createElement(W.a,{className:"snack snack_"+a,anchorOrigin:{vertical:"bottom",horizontal:"left"},open:t,autoHideDuration:c,ContentProps:{"aria-describedby":"message-id"},message:r.a.createElement("span",{id:"message-id"},i[a||"info"],r.a.createElement("span",{className:"message_text"}," ",n," ")),action:[r.a.createElement(U.a,{key:"undo",color:"secondary",size:"small",onClick:o},"Fechar")]})},te=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).props.setTitle("Login"),a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.snackbar,a=e.closeSnack;return r.a.createElement("main",{className:"Auth"},r.a.createElement("article",{className:"Center-container s600"},r.a.createElement(I.a,null,r.a.createElement(A.a,{title:"Login"}),r.a.createElement(G,Object.assign({onSubmit:this.props.logIn},this.props)))),r.a.createElement(ee,Object.assign({closeSnack:a},t)))}}]),t}(n.PureComponent),ae={setTitle:function(e){return function(t){document.title="Gaia | ".concat(e),t({type:O,value:e})}},closeSnack:function(){return{type:N}},logIn:function(e){return function(){var t=Object(j.a)(E.a.mark(function t(a){var n,r;return E.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,a({type:S}),t.next=4,k.a.post("".concat(D.user,"/").concat(e.user),e);case 4:n=t.sent,r=n.data,console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),a({type:C,value:{open:!0,type:"error",message:T(t.t0).message,duration:6e3}});case 12:return t.prev=12,a({type:w}),t.finish(12);case 15:case"end":return t.stop()}},t,null,[[0,9,12,15]])}));return function(e){return t.apply(this,arguments)}}()}},ne=Object(f.b)(function(e){return e.authReducer},ae)(te),re=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Home Page")}}]),t}(n.PureComponent),ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.snackbar,a=e.closeSnack,n=function(){if(localStorage.gaiaSession){var e=JSON.parse(localStorage.gaiaSession);return e.expired=(new Date).getTime()<(e.expiresIn||0),e}return{token:null,expiresIn:null,expired:!0}}();return!n.token||n.expired?r.a.createElement(b.a,{to:"login"}):r.a.createElement("div",{className:"Main"},r.a.createElement(m.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/",exact:!0,component:re}))),r.a.createElement(ee,Object.assign({closeSnack:a},t)))}}]),t}(n.PureComponent),oe={authenticate:function(e){return{type:d,value:e}},closeSnack:function(){return{type:g}}},ie=Object(f.b)(function(e){return e.mainReducer},oe)(ce),se=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(u.a)(this,Object(l.a)(t).call(this,e))).state={},a}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,null,r.a.createElement(b.d,null,r.a.createElement(b.b,{path:"/login",exact:!0,component:ne}),r.a.createElement(b.b,{path:"**",component:ie})))}}]),t}(n.PureComponent),ue=a(14),le=a(147),pe=a(327),me=a(78);function be(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function fe(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?be(Object(a),!0).forEach(function(t){Object(me.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):be(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var de={loading:!1,auth:!1,snackbar:{open:!1}},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return fe({},e,{loading:!0});case w:return fe({},e,{loading:!1});case P:return fe({},e,{auth:!0});case C:return fe({},e,{snackbar:t.value});case N:return fe({},e,{snackbar:{open:!1}});default:return e}};function he(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function ge(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?he(Object(a),!0).forEach(function(t){Object(me.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):he(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var ve={title:"Gaia",snackbar:{open:!1}},Ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case d:return ge({},e,{auth:!0,token:t.value});case O:return ge({},e,{title:t.value});case h:return ge({},e,{snackbar:t.value});case g:return ge({},e,{snackbar:{open:!1}});default:return e}},je=Object(ue.c)({form:pe.a,authReducer:Oe,mainReducer:Ee}),ye=a(319),ke=a(148),Se=Object(ke.a)({palette:{primary:{light:"#008c3a",main:"#00c853",dark:"#33d375",contrastText:"#000"},secondary:{light:"#33a361",main:"#008c3a",dark:"#006228",contrastText:"#fff"},type:"dark"}}),we=(a(284),a(328)),Pe=function(){var e=Object(ue.d)(je,Object(ue.a)(le.a));return r.a.createElement(f.a,{store:e},r.a.createElement(ye.a,{theme:Se},r.a.createElement(we.a,null,r.a.createElement(se,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(Pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[157,1,2]]]);
//# sourceMappingURL=main.feee23ac.chunk.js.map