(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),s=a(9),c=a.n(s),r=a(25),i=a(21),A=a(18),l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return{type:p.LOG_IN,payload:{nickname:e,isAuthenticated:t}}},m=function(e){return{type:p.IS_AUTH,payload:e}},u=function(e){return{type:p.IS_ONLINE,payload:e}},E=function(){return{type:p.START_SOCKET}},d=function(e){return{type:p.CLOSE_SOCKET}},p={LOG_IN:"LOG_IN",IS_AUTH:"IS_AUTH",IS_ONLINE:"IS_ONLINE",GET_MESSAGES:"GET_MESSAGES",START_SOCKET:"START_SOCKET",SEND_MESSAGE:"SEND_MESSAGE",NOTIFY:"NOTIFY",CLOSE_SOCKET:"CLOSE_SOCKET",RESET_SOCKET:"RESET_SOCKET"},g={nickname:localStorage.length>1?localStorage.getItem("nickname"):"",isAuth:localStorage.length>1},h=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.LOG_IN:return{nickname:t.payload.nickname,isAuth:t.payload.isAuthenticated};case p.IS_AUTH:return{nickname:e.nickname,isAuth:t.payload};default:return e}},f=a(44),S={isOnline:!0,notify:!1},y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.IS_ONLINE:return Object(f.a)({},e,{isOnline:t.payload});case p.NOTIFY:return Object(f.a)({},e,{notify:t.payload});default:return e}},T=a(43),O={messages:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p.GET_MESSAGES:return{messages:[].concat(Object(T.a)(e.messages),Object(T.a)(t.payload))};case p.START_SOCKET:return{messages:t.payload};case p.RESET_SOCKET:return{messages:[]};default:return e}},v=Object(A.c)({login:h,chat:y,messages:C}),k=a(52),N=null;function w(e){N.send(JSON.stringify(e))}var j=function(e){return function(e){return function(t){switch(t.type){case p.START_SOCKET:!function(e){(N=new k.a("wss://wssproxy.herokuapp.com/",[],{connectionTimeout:1e3})).binaryType="arraybuffer",N.onopen=function(){document.cookie.length>1&&(w({message:document.cookie.replace(/(?:(?:^|.*;\s*)message\s\=\*\s*([^;]*).*$)|^.*$/,"$1"),from:document.cookie.replace(/(?:(?:^|.*;\s*)from\s\=\*\s*([^;]*).*$)|^.*$/,"$1")}),document.cookie="message= ; expires = Thu, 01 Jan 1970 00:00:00 GMT",document.cookie="from= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"),e({type:p.IS_ONLINE,payload:!0})},N.onclose=function(){e({type:p.IS_ONLINE,payload:!1}),N.reconnect()},N.onerror=function(e){console.log(e)},N.onmessage=function(t){e({type:p.GET_MESSAGES,payload:JSON.parse(t.data).reverse()})}}(e);break;case p.SEND_MESSAGE:w(t.payload);break;case p.CLOSE_SOCKET:N.close();break;default:e(t)}}}},b=Object(A.d)(v,Object(A.a)(j)),I=a(28),R=a(29),G=a(31),M=a(30),J=a(32),Q=a(17),L=a(108),B=a(111),U=Object(i.b)(function(e){return{login:e.login}})(function(e){var t=e.login,a=e.dispatch,n="";return localStorage.getItem("nickname")?(a(l(localStorage.getItem("nickname"),!0)),a(E()),o.a.createElement(Q.a,{to:"/TestChat/chat"})):t.isAuth?(a(E()),o.a.createElement(Q.a,{to:"/TestChat/chat"})):o.a.createElement(L.a,{className:"form"},o.a.createElement(L.a.Group,null,o.a.createElement(L.a.Label,null,"Enter your nickname"),o.a.createElement(L.a.Control,{type:"text",placeholder:"Enter nickname",className:"input",onChange:function(e){n=e.target.value}}),o.a.createElement(B.a,{variant:"primary",className:"logButton",onClick:function(){a(l(n)),localStorage.setItem("nickname",n),a(m(!0))}},"Let`s chat")))}),F=(a(74),U),x=a(105),Z=a(106),z=a(54),Y=a(107),D=a(104),K=a(41),V=a(110),H=function(e){var t=e.info,a=function(){var e=new Date(t.time),a=e.getDate();a<10&&(a="0"+a);var n=e.getMonth()+1;n<10&&(n="0"+n);var o=e.getFullYear()%100;o<10&&(o="0"+o);var s=e.getHours()%100;s<10&&(s="0"+s);var c=e.getMinutes()%100;return c<10&&(c="0"+c),a+"."+n+"."+o+" "+s+"."+c};return e.my?o.a.createElement(V.a,{id:"message",className:"my",style:{backgroundColor:"#9999ff"}},o.a.createElement(V.a.Body,null,o.a.createElement("div",{className:"title"},o.a.createElement(V.a.Title,null,t.from),o.a.createElement(V.a.Text,null,a(t.time))),o.a.createElement(V.a.Text,{className:"messageText"},t.message))):o.a.createElement(V.a,{id:"message",style:{backgroundColor:"#f2f2f2"}},o.a.createElement(V.a.Body,null,o.a.createElement("div",{className:"title"},o.a.createElement(V.a.Title,null,t.from),o.a.createElement(V.a.Text,null,a(t.time))),o.a.createElement(V.a.Text,{className:"messageText"},t.message)))},_=(a(76),H),P=a(63),X=a(112),W=a(109),q=a(62),$=a(55),ee=a.n($),te=a(56),ae=a.n(te),ne=function(e){var t=e.dispatch,a=e.login,s=e.isOnline,c=Object(n.useState)(""),r=Object(P.a)(c,2),i=r[0],A=r[1],l=function(){var e;t((e={message:i,from:a.nickname},{type:p.SEND_MESSAGE,payload:{from:e.from,message:e.message}})),s||(document.cookie="message=".concat(i),document.cookie="from=".concat(a.nickname),t(function(e){return{type:p.GET_MESSAGES,payload:e}}([{from:a.nickname,message:i,time:Date.now()}]))),A("")},m=o.a.createElement(X.a,{id:"popover-basic"},o.a.createElement(q.a,{onSelect:function(e){var t=e.native;A(i+t)}}));return o.a.createElement(L.a,{onSubmit:l},o.a.createElement(W.a,{trigger:"click",placement:"top",overlay:m},o.a.createElement(D.a,{src:ee.a,className:"emodji"})),o.a.createElement("textarea",{value:i,className:"textarea",onChange:function(e){A(e.target.value)}}),o.a.createElement(D.a,{src:ae.a,id:"send",type:"submit",onClick:l}))},oe=(a(97),ne),se=a(61),ce=a.n(se),re=function(e){function t(e){var a;return Object(I.a)(this,t),(a=Object(G.a)(this,Object(M.a)(t).call(this,e))).active=!0,a.messagesEnd=null,a.scrollElem=null,a.arrow=null,a.f=!1,a.addEventListeners(),a}return Object(J.a)(t,e),Object(R.a)(t,[{key:"scrollToBottom",value:function(){this.messagesEnd.scrollIntoView()}},{key:"componentDidUpdate",value:function(){this.props.chat.notify&&!this.active&&this.props.messages.messages.length&&function(e){var t=e.message;new Notification(e.from,{body:t})}(this.props.messages.messages[this.props.messages.messages.length-1]),this.f||this.scrollToBottom()}},{key:"addEventListeners",value:function(){var e=this;window.onload=function(){e.props.dispatch(E()),function(){if("Notification"in window)return Notification.requestPermission().then(function(e){return"granted"===e});alert("This browser does not support desktop notification")}().then(function(t){var a;t&&e.props.dispatch((a=!0,{type:p.NOTIFY,payload:a}))}).catch(function(){alert("Error notifications")}),document.addEventListener("visibilitychange",function(){return e.changeActive()},!1),window.addEventListener("online",function(){return e.updateStatus()}),window.addEventListener("offline",function(){return e.updateStatus()})}}},{key:"scrollControl",value:function(){this.arrow.hidden=this.scrollElem.scrollTop>=100*this.scrollElem.clientHeight}},{key:"updateStatus",value:function(){navigator.onLine?this.props.dispatch(u(!0)):(this.props.dispatch(d()),this.props.dispatch(u(!1)))}},{key:"changeActive",value:function(){document.hidden?this.active=!1:this.active=!0}},{key:"close",value:function(){this.props.dispatch(m(!1)),this.props.dispatch(d()),localStorage.clear(),this.f=!0}},{key:"returnMessages",value:function(){var e=this;return o.a.createElement(x.a,{className:"cont"},o.a.createElement(Z.a,{className:"chatContainer",ref:function(t){return e.scrollElem=t},onScroll:function(){return e.scrollControl()}},o.a.createElement(z.a,{className:"pl-0"},o.a.createElement("ul",null,this.props.messages.messages.length>0?this.props.messages.messages.map(function(t){return t.from!==e.props.login.nickname?o.a.createElement("li",{key:t.key||Object(K.uniqueId)()},o.a.createElement(_,{info:t})):o.a.createElement("li",{key:t.key||Object(K.uniqueId)(),className:"myMess"},o.a.createElement(_,{info:t,my:!0}))}):o.a.createElement("li",null,o.a.createElement(Y.a,{animation:"border",variant:"secondary"}))),o.a.createElement("div",{ref:function(t){return e.arrow=t},onClick:function(){return e.scrollToBottom()},className:"arrow"},o.a.createElement(D.a,{src:ce.a})),o.a.createElement("div",{ref:function(t){return e.messagesEnd=t}}))),o.a.createElement(Z.a,{id:"typeMessage"},o.a.createElement(oe,{dispatch:this.props.dispatch,login:this.props.login,isOnline:this.props.chat.isOnline})))}},{key:"render",value:function(){var e=this;return this.props.chat.isOnline?this.props.login.isAuth?o.a.createElement("div",null,o.a.createElement("div",{className:"titleChat"},o.a.createElement(B.a,{onClick:function(){return e.close()},className:"buttonExit",variant:"primary",style:{backgroundColor:"#9999ff"}},"LOG OUT"),o.a.createElement("h5",{className:"hello"},"Hello ",this.props.login.nickname)),this.returnMessages()):o.a.createElement(Q.a,{to:{pathname:"/TestChat/login"}}):o.a.createElement("div",null,o.a.createElement("div",{className:"titleChat"},o.a.createElement(B.a,{onClick:function(){return e.close()},className:"buttonExit",variant:"primary",style:{backgroundColor:"#9999ff"}},"LOG OUT"),o.a.createElement("p",{style:{color:"red"}},"Trying to connect")),this.returnMessages())}}]),t}(o.a.Component),ie=Object(i.b)(function(e){return{login:e.login,chat:e.chat,messages:e.messages}})(re),Ae=(a(98),a(99),ie),le=function(e){function t(e){return Object(I.a)(this,t),Object(G.a)(this,Object(M.a)(t).call(this,e))}return Object(J.a)(t,e),Object(R.a)(t,[{key:"render",value:function(){return o.a.createElement(Q.d,null,o.a.createElement(Q.a,{exact:!0,from:"/TestChat/",to:"/TestChat/login"}),o.a.createElement(Q.b,{path:"/TestChat/login",component:F}),o.a.createElement(Q.b,{path:"/TestChat/chat",component:Ae}))}}]),t}(o.a.Component);a(100),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));console.log(b),c.a.render(o.a.createElement(i.a,{store:b},o.a.createElement(r.a,null,o.a.createElement(le,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},55:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCA0VFTHimNclAAACVUlEQVQ4y42UTUhUYRSGn3Pv1TJCHdFZqKRXkxHsh8jJNsEUpkQtglZZZItqIaQEbaJttGmRQSulwBJKiAJpYxNMBUGoiQpFEs5NEY0RnIEWjTPNPS3mOv72867u4T7v4fCd9/uENVL5tsdtlRAByoBFmSLCUPUn0VVGVj+doHbRjA8TQQBFyRAnzL2a0Q0GNaKXpYsa8te2yP4ixQy9S92NvwBMgIipt6UDm7xNOAgWxTQUlJ2O9CkYAFVXaaMya95SJuW07erwRnKC+pjdf8GzyvBVz9d+NFS0k+p/4mBiyzUVcfZqGL83e4xh8jiA34NiMq5pgl6txGi23FbxebhLDy/F1SucwQfEGaQXg1PcwAAEHy2WhHLjpOV93mhlxmnSY1mDTNjDc2a6WNNs88YKWQRyR2lqU2o6itZTBECR1kfrUtCUaykELMpyBouz1CEcpgSAEk5QDDRi5Qx+iSYo3GJdW0tJGMRQr5gnRnoTlCLG/AqjiwZTXrHMAE9Y2GT4rk8ZYDlrkC+GvCHjuSd5QJj4OjzOa3kok7jetiMGQ8RRoEAuUEo/L3BIApDE4bk+olQvsgNQlgib3YuJ/dRjAdXkM85bWSDJErOMMaDPZCeXOIkAyzJo9wpEG+n3wqe80z5GjB+6HSTpFkqQdo4gXvjO1Y4JQLST61Rko85PJhhhHijnEPso8GIzJ3fs+96Ni5hVt2ij4o+ZzbBAv31T3P+9orP0zNw9mskuO6fpg3TJcUo2PAIJItpd+2GFWtdPxWmghRAB/ECMKSK8sj+vfWZ+A5Cv18NDUkQqAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA4LTEzVDE5OjIxOjQ5KzAyOjAwZTLF+AAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOC0xM1QxOToyMTo0OSswMjowMBRvfUQAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},56:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAQAAADZc7J/AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfjCA4ANgFysF6dAAABmklEQVRIx82VS0sCURiGn+/MOLaIahte0sAwWrTqb/YfWgVFy0ioiJAoSZFMbOyGRURXixJLyTktJswopRkX9Z7FWXzne871ew/8uezZ8kzZ8p8v9j23FHRKUsGruOMHoIEa13KktySlSom6HwBAk2tOyLNJJnnlBwCgqXLMPrt6Z6AUf/MOcFXnnILs6pyRSzz5AQC0uCNPhrza43zC8Q5w1aAoab2tbXVi1ePaO8BVhbRsUOJUPSTe/AAAedYZVsjKmdxO1L8CDrCwCGIRJIDRg9LCZlXWdJFqqzb1MbGUpwk5YQkRJsQoQwQwMTE/evUNc8MmS+zwaNQSLZDOWNYYHFFhHXGiEiFKlAjDKAxUu7njG3KoF9Sic6Ga0mPJFISRwLjEGJOYE5MYEYbaa9I8sqzmFH3JeelzCzT6P0SP15hiFbvzGk2SXh4SFW6Sr50R8xfZFdJsSJen3BvQoMg6WV2WrsXUDdAuZ3JcTvYo558AngzlK6DD0oK/tLRPgE9TdQF92LpJ1f1Y8PmxmMzJPHvJpvfU/6J3wsrdL0YCI74AAAAldEVYdGRhdGU6Y3JlYXRlADIwMTktMDgtMTNUMjI6NTQ6MDErMDI6MDCGLcHaAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE5LTA4LTEzVDIyOjU0OjAxKzAyOjAw93B5ZgAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII="},61:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAQAAABKfvVzAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCA8RICCHGVU2AAAAZklEQVQ4y+3QMRKAIAxE0c1xOCGlofOC4HG0yIghooGeTcXMfw3Amj8qEftEzgSME+KQCBglxCEBJA+fSF6BR+5cgT/y5A34Ijo3oEfa/AUssXl3JZZT7tj8z1ZkOAeAzJkn8jWzC5B+LU7dNIsbAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDE5LTA4LTE1VDE1OjMyOjMyKzAyOjAwjmIsxwAAACV0RVh0ZGF0ZTptb2RpZnkAMjAxOS0wOC0xNVQxNTozMjozMiswMjowMP8/lHsAAAAZdEVYdFNvZnR3YXJlAHd3dy5pbmtzY2FwZS5vcmeb7jwaAAAAAElFTkSuQmCC"},64:function(e,t,a){e.exports=a(101)},74:function(e,t,a){},76:function(e,t,a){},97:function(e,t,a){},98:function(e,t,a){}},[[64,1,2]]]);
//# sourceMappingURL=main.7d2f8357.chunk.js.map