(this.webpackJsonpproject=this.webpackJsonpproject||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){},51:function(e,t,c){},54:function(e,t,c){},55:function(e,t,c){},56:function(e,t,c){},62:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var a=c(1),n=c.n(a),r=c(20),s=c.n(r),i=c(6),l=c(2),o=c(5),d=c(19),j=c(7),u="data/switchGenre",b="data/moreMovies",m="data/resetMoviesList",h="data/loadMoviesList",O="data/updateMoviesList",f="data/loadMoviesPromo",x="data/loadSimilarMovies",_="data/loadReviews",v="data/loadFavoriteMovies",g="user/requiredAuthorization",p="user/logout",N="user/avatar",w="history/redirectToRoute",y="history/replaceRoute",k="data/uploadReview",F=Object(j.b)(u,(function(e){return{payload:{genre:e}}})),M=Object(j.b)(b),L=Object(j.b)(m),S=Object(j.b)(h,(function(e){return{payload:e}})),R=Object(j.b)(O,(function(e){return{payload:e}})),C=Object(j.b)(f,(function(e){return{payload:e}})),H=Object(j.b)(x,(function(e){return{payload:e}})),I=Object(j.b)(_,(function(e){return{payload:e}})),P=Object(j.b)(v,(function(e){return{payload:e}})),E=Object(j.b)(g,(function(e){return{payload:e}})),B=Object(j.b)(N,(function(e){return{payload:e}})),A=Object(j.b)(p),T=Object(j.b)(w,(function(e){return{payload:e}})),D=Object(j.b)(y,(function(e){return{payload:e}})),z=Object(j.b)(k,(function(e){return{payload:e}})),V="Bad",W="Normal",G="Good",q="Very good",U="Awesome",Z="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u0434\u0430\u043d\u043d\u044b\u0445 \u043e \u0444\u0438\u043b\u044c\u043c\u0430\u0445, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!",Y="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u0438 \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435",J="\u0421\u0435\u0442\u0435\u0432\u0430\u044f \u043e\u0448\u0438\u0431\u043a\u0438 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438",K="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f",X="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u043e\u0431\u0437\u043e\u0440\u0430 \u0444\u0438\u043b\u044c\u043c\u0430",Q="\u041f\u0430\u0440\u043e\u043b\u044c \u043d\u0435 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u043e\u0434\u043d\u0438\u0445 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432",$="\u041e\u0448\u0438\u0431\u043a\u0430 \u0441\u043e\u0435\u0434\u0438\u043d\u0435\u043d\u0438\u044f \u0441 \u0441\u0435\u0442\u044c\u044e, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!",ee="\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u0437\u0430\u0433\u0440\u0443\u0437\u043a\u0435 \u043f\u0440\u043e\u043c\u043e-\u0444\u0438\u043b\u044c\u043c\u0430, \u043f\u043e\u0436\u0430\u043b\u0443\u0439\u0441\u0442\u0430, \u043e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0443!",te="\u0414\u043b\u044f \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u0444\u0438\u043b\u044c\u043c\u0430 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u043e\u0435 \u043d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u0441\u0430\u0439\u0442\u0435!",ce=1,ae=0,ne="All genres",re="/345491-what-to-watch-7",se="345491-what-to-watch-7/login",ie="345491-what-to-watch-7/mylist",le="345491-what-to-watch-7/films/:id",oe="345491-what-to-watch-7/films/:id/review",de="345491-what-to-watch-7/player/:id",je="AUTH",ue="NO_AUTH",be="UNKNOWN",me="/films",he="/films",Oe="/promo",fe="/favorite",xe="/favorite",_e="/comments",ve="/comments",ge="/login",pe="/login",Ne="/logout",we=c(13),ye=401,ke=function(e){return function(t,c,a){return a.get("".concat(me,"/").concat(e,"/similar")).then((function(e){var c=e.data;return t(H(c))}))}},Fe=function(e){return function(t,c,a){return a.get("".concat(_e,"/").concat(e)).then((function(e){var c=e.data;return t(I(c))}))}},Me=function(){return function(e,t,c){return c.get(fe).then((function(t){var c=t.data;return e(P(c))}))}},Le=function(e,t,c){return function(a,n,r){return r.post("".concat(xe,"/").concat(e,"/").concat(t)).then((function(e){a(c?C(e.data):R(e.data))})).catch((function(e){e.status!==ye?we.b.warn(te):we.b.error(Y)}))}},Se=c(0);var Re=function(e){var t=e.name,c=e.previewImage,a=e.id,n=e.onMouseHover,r=Object(l.c)();return Object(Se.jsxs)("article",{className:"small-film-card catalog__films-card",onMouseOver:function(){return n?n(a):null},onClick:function(){r(ke(a)),function(e){r(Fe(e))}(a)},children:[Object(Se.jsx)(o.a,{to:"/films/".concat(a),children:Object(Se.jsx)("div",{className:"small-film-card__image",children:Object(Se.jsx)("img",{src:c,alt:t,width:"280",height:"175"})})}),Object(Se.jsx)("h3",{className:"small-film-card__title",children:Object(Se.jsx)(o.a,{to:"/films/".concat(a),className:"small-film-card__link",children:t})})]})},Ce=c(15),He=c.n(Ce);He.a.shape({name:He.a.string.isRequired,previewImage:He.a.string.isRequired,id:He.a.number.isRequired}).isRequired;var Ie=function(e){var t,c=e.previewImage,n=e.id,r=e.videoSourse,s=e.onCardHover,i=void 0===s?function(){}:s,l=e.onCardLeave,d=void 0===l?function(){}:l,j=Object(a.useRef)(null),u=function(){clearTimeout(t),d(),j.current.pause()};return Object(Se.jsx)(o.a,{to:"/films/".concat(n),className:"small-film-card catalog__films-card",children:Object(Se.jsx)("video",{ref:j,src:r,poster:c,width:"280",height:"175",onMouseOver:function(){i(n),t=setTimeout((function(){j&&j.current&&j.current.play()}),1e3)},onMouseLeave:u,onClick:u,muted:!0,className:"small-film-card__image"})})};var Pe=Object(l.b)(null,(function(e){return{showSimilarAction:function(t){e(ke(t))},showReviewsAction:function(t){e(Fe(t))}}}))((function(e){var t=e.allFilms,c=Object(a.useState)(0),n=Object(d.a)(c,2),r=n[0],s=n[1],i=Object(a.useCallback)((function(e){s(e)}),[]),l=function(){return s(0)};return Object(Se.jsx)("div",{className:"catalog__films-list",children:t.map((function(e){return function(e,t,c){return e.id!==r?Object(Se.jsx)(Re,{name:e.name,id:e.id,previewImage:e.previewImage,onMouseHover:t},e.id):Object(Se.jsx)(Ie,{name:e.name,id:e.id,previewImage:e.previewImage,videoSourse:e.previewVideoLink,onCardHover:t,onCardLeave:c,handleClick:function(){}},e.id)}(e,i,l)}))})}));function Ee(){return Object(Se.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",children:[Object(Se.jsxs)("symbol",{id:"add",viewBox:"0 0 19 20",children:[Object(Se.jsx)("title",{children:"+"}),Object(Se.jsx)("desc",{children:"Created with Sketch."}),Object(Se.jsx)("g",{id:"Page-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:Object(Se.jsx)("polygon",{id:"+",fill:"#EEE5B5",points:"10.777832 11.2880859 10.777832 19.5527344 8.41650391 19.5527344 8.41650391 11.2880859 0.627929688 11.2880859 0.627929688 8.92675781 8.41650391 8.92675781 8.41650391 0.662109375 10.777832 0.662109375 10.777832 8.92675781 18.5664062 8.92675781 18.5664062 11.2880859"})})]}),Object(Se.jsxs)("symbol",{id:"full-screen",viewBox:"0 0 27 27",children:[Object(Se.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M23.8571 0H16V3.14286H23.8571V11H27V3.14286V0H23.8571Z",fill:"#FFF9D9",fillOpacity:"0.7"}),Object(Se.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M27 23.8571V16H23.8571V23.8571H16V27H23.8571H27L27 23.8571Z",fill:"#FFF9D9",fillOpacity:"0.7"}),Object(Se.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 3.14286L0 11H3.14286L3.14286 3.14286L11 3.14286V0H3.14286H0L0 3.14286Z",fill:"#FFF9D9",fillOpacity:"0.7"}),Object(Se.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.14286 27H11V23.8571H3.14286L3.14286 16H0L0 23.8571V27H3.14286Z",fill:"#FFF9D9",fillOpacity:"0.7"})]}),Object(Se.jsx)("symbol",{id:"in-list",viewBox:"0 0 18 14",children:Object(Se.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M2.40513 5.35353L6.1818 8.90902L15.5807 0L18 2.80485L6.18935 14L0 8.17346L2.40513 5.35353Z",fill:"#EEE5B5"})}),Object(Se.jsxs)("symbol",{id:"pause",viewBox:"0 0 14 21",children:[Object(Se.jsx)("symbol",{id:"play-s",viewBox:"0 0 19 19",children:Object(Se.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M0 0L19 9.5L0 19V0Z",fill:"#EEE5B5"})}),Object(Se.jsx)("title",{children:"Artboard"}),Object(Se.jsx)("desc",{children:"Created with Sketch."}),Object(Se.jsxs)("g",{id:"Artboard",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:[Object(Se.jsx)("polygon",{id:"Line",fill:"#EEE5B5",fillRule:"nonzero",points:"0 -1.11910481e-13 4 -1.11910481e-13 4 21 0 21"}),Object(Se.jsx)("polygon",{id:"Line",fill:"#EEE5B5",fillRule:"nonzero",points:"10 -1.11910481e-13 14 -1.11910481e-13 14 21 10 21"})]})]})]})}var Be=function(){return Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("span",{className:"logo__letter logo__letter--1",children:"W"}),Object(Se.jsx)("span",{className:"logo__letter logo__letter--2",children:"T"}),Object(Se.jsx)("span",{className:"logo__letter logo__letter--3",children:"W"})]})};var Ae=function(){return Object(Se.jsxs)("footer",{className:"page-footer",children:[Object(Se.jsx)("div",{className:"logo",children:Object(Se.jsx)(o.a,{to:"/",className:"logo__link logo__link--light",children:Object(Se.jsx)(Be,{})})}),Object(Se.jsx)("div",{className:"copyright",children:Object(Se.jsx)("p",{children:"\xa9 2021 What to watch Ltd."})})]})},Te=c(22),De=c.n(Te),ze=c(18),Ve=function(e){return e.auth.authorizationStatus},We=function(e){return e.auth.userImage},Ge=function(e){return e.data.promoFilm},qe=function(e){return e.data.similarFilms},Ue=function(e){return e.data.reviews},Ze=function(e){return e.data.favoriteMovies},Ye=function(e){return e.data.reviewUploading},Je=function(e){return e.movie.allFilms},Ke=function(e){return e.movie.isDataLoaded},Xe=function(e){return e.movie.currentGenre},Qe=function(e){return e.movie.moviesOnPage},$e=Object(ze.a)(Je,Xe,(function(e,t){return t===ne?e:e.filter((function(e){return e.genre===t}))})),et=Object(ze.a)(Je,(function(e){return Array.of(ne).concat(e.map((function(e){return e.genre})).filter((function(e,t,c){return c.indexOf(e)===t}))).slice(0,11)})),tt=Object(ze.a)(Je,Xe,Qe,(function(e,t,c){return t===ne?e.slice(0,c):e.filter((function(e){return e.genre===t})).slice(0,c)}));c(48);var ct=Object(l.b)((function(e){return{currentGenreProp:Xe(e),genresProp:et(e)}}),(function(e){return{switchGenreAction:function(t){e(F(t))}}}))((function(e){var t=e.currentGenreProp,c=e.switchGenreAction,a=e.genresProp;return Object(Se.jsx)("ul",{className:"catalog__genres-list",children:a.map((function(e,a){return Object(Se.jsx)("li",{className:De()("catalog__genres-item",{"catalog__genres-item--active":e===t}),id:e,children:Object(Se.jsx)("a",{href:"#".concat(e),className:"catalog__genres-link",onClick:function(){return c(e)},children:e})},e)}))})}));var at=function(e){return Object(Se.jsx)("div",{className:"catalog__more",children:e.children})};var nt=Object(l.b)((function(e){return{authorizationStatusStateProp:Ve(e),userImageStateProp:We(e)}}),(function(e){return{onLogoutAction:function(){e((function(e,t,c){return c.delete(Ne).then((function(){return localStorage.removeItem("token")})).then((function(){return e(A())})).then((function(){return e(D(re))}))}))}}}))((function(e){var t=e.authorizationStatusStateProp,c=e.userImageStateProp,a=void 0===c?"":c,n=e.onLogoutAction;return t===je?Object(Se.jsxs)("ul",{className:"user-block",children:[Object(Se.jsx)("li",{className:"user-block__item",children:Object(Se.jsx)("div",{className:"user-block__avatar",children:Object(Se.jsx)(o.a,{to:ie,children:Object(Se.jsx)("img",{src:a,alt:"User avatar",width:"63",height:"63"})})})}),Object(Se.jsx)("li",{className:"user-block__item",children:Object(Se.jsx)(o.a,{to:re,className:"user-block__link",onClick:function(){n()},children:"Sign Out"})})]}):Object(Se.jsx)("ul",{className:"user-block",children:Object(Se.jsx)("li",{className:"user-block__item",children:Object(Se.jsx)(o.a,{to:se,className:"user-block__link",children:"Sign In"})})})}));c(49),c(50);var rt=function(e){var t=Object(l.c)(),c=Object(l.d)($e),n=Object(l.d)(tt),r=Object(l.d)(Qe),s=Object(l.d)(Ge),i=Object(l.d)(Ve);return Object(a.useEffect)((function(){t(L())}),[]),Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("div",{className:"visually-hidden",children:Object(Se.jsx)(Ee,{})}),Object(Se.jsxs)("section",{className:"film-card",children:[Object(Se.jsx)("div",{className:"film-card__bg",children:Object(Se.jsx)("img",{src:s.backgroundImage,alt:s.name})}),Object(Se.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(Se.jsxs)("header",{className:"page-header film-card__head",children:[Object(Se.jsx)("div",{className:"logo",children:Object(Se.jsx)("a",{href:re,className:"logo__link",children:Object(Se.jsx)(Be,{})})}),Object(Se.jsx)(nt,{})]}),Object(Se.jsx)("div",{className:"film-card__wrap",children:Object(Se.jsxs)("div",{className:"film-card__info",children:[Object(Se.jsx)("div",{className:"film-card__poster",children:Object(Se.jsx)("img",{src:s.posterImage,alt:"".concat(s.name," poster"),width:"218",height:"327"})}),Object(Se.jsxs)("div",{className:"film-card__desc",children:[Object(Se.jsx)("h2",{className:"film-card__title",children:s.name}),Object(Se.jsxs)("p",{className:"film-card__meta",children:[Object(Se.jsx)("span",{className:"film-card__genre",children:s.genre}),Object(Se.jsx)("span",{className:"film-card__year",children:s.released})]}),Object(Se.jsxs)("div",{className:"film-card__buttons",children:[Object(Se.jsx)(o.a,{className:"film-card__button button-caption",to:"/player/".concat(s.id),children:Object(Se.jsxs)("button",{className:"btn btn--play film-card__button",type:"button",children:[Object(Se.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(Se.jsx)("use",{xlinkHref:"#play-s"})}),Object(Se.jsx)("span",{children:"Play"})]})}),Object(Se.jsxs)("button",{className:"btn btn--list film-card__button",type:"button",onClick:function(){var e,c=s.isFavorite?ae:ce;e=s.id,t(Le(e,c,!0))},children:[s.isFavorite&&i===je?Object(Se.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(Se.jsx)("use",{xlinkHref:"#in-list"})}):Object(Se.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(Se.jsx)("use",{xlinkHref:"#add"})}),Object(Se.jsx)("span",{className:"film-card__caption",children:"My list"})]})]})]})]})})]}),Object(Se.jsxs)("div",{className:"page-content",children:[Object(Se.jsxs)("section",{className:"catalog",children:[Object(Se.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),Object(Se.jsx)(ct,{}),Object(Se.jsx)(Pe,{allFilms:n}),Object(Se.jsx)(at,{children:r<c.length?Object(Se.jsx)("button",{className:"catalog__button",type:"button",onClick:function(){t(M())},children:"Show more"}):null})]}),Object(Se.jsx)(Ae,{})]})]})};var st=Object(l.b)((function(e){return{authorizationStatusStateProp:Ve(e)}}),(function(e){return{onSubmitAction:function(t){e(function(e){var t=e.login,c=e.password;return function(e,a,n){return n.post(ge,{email:t,password:c}).then((function(t){var c=t.data;localStorage.setItem("token",c.token),e(B(c.avatar_url))})).then((function(){return e(E(je))})).then((function(){return e(D(re))})).catch((function(e){return we.b.error(K)}))}}(t))}}}))((function(e){var t=e.onSubmitAction,c=e.authorizationStatusStateProp,n=Object(a.useRef)(),r=Object(a.useRef)();return c===je?Object(Se.jsx)(i.a,{to:re}):Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("div",{className:"visually-hidden",children:Object(Se.jsx)(Ee,{})}),Object(Se.jsxs)("div",{className:"user-page",children:[Object(Se.jsxs)("header",{className:"page-header user-page__head",children:[Object(Se.jsx)("div",{className:"logo",children:Object(Se.jsx)(o.a,{to:re,className:"logo__link",children:Object(Se.jsx)(Be,{})})}),Object(Se.jsx)("h1",{className:"page-title user-page__title",children:"Sign in"})]}),Object(Se.jsx)("div",{className:"sign-in user-page__content",children:Object(Se.jsxs)("form",{action:"#",className:"sign-in__form",onSubmit:function(e){e.preventDefault(),/[^\s]/.test(r.current.value)?t({login:n.current.value,password:r.current.value}):we.b.error(Q)},children:[Object(Se.jsxs)("div",{className:"sign-in__fields",children:[Object(Se.jsxs)("div",{className:"sign-in__field",children:[Object(Se.jsx)("input",{className:"sign-in__input",type:"email",placeholder:"Email address",name:"user-email",id:"user-email",ref:n}),Object(Se.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-email",children:"Email address"})]}),Object(Se.jsxs)("div",{className:"sign-in__field",children:[Object(Se.jsx)("input",{className:"sign-in__input",type:"password",placeholder:"Password",name:"user-password",id:"user-password",ref:r}),Object(Se.jsx)("label",{className:"sign-in__label visually-hidden",htmlFor:"user-password",children:"Password"})]})]}),Object(Se.jsx)("div",{className:"sign-in__submit",children:Object(Se.jsx)("button",{className:"sign-in__btn",type:"submit",children:"Sign in"})})]})}),Object(Se.jsx)(Ae,{})]})]})}));var it=function(){var e=Object(l.d)(Ze),t=Object(l.d)(Ve),c=Object(l.c)();return Object(a.useEffect)((function(){t===je&&c(Me())}),[]),Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("div",{className:"visually-hidden",children:Object(Se.jsx)(Ee,{})}),Object(Se.jsxs)("div",{className:"user-page",children:[Object(Se.jsxs)("header",{className:"page-header user-page__head",children:[Object(Se.jsx)("div",{className:"logo",children:Object(Se.jsx)(o.a,{to:"/",className:"logo__link",children:Object(Se.jsx)(Be,{})})}),Object(Se.jsx)("h1",{className:"page-title user-page__title",children:"My list"}),Object(Se.jsx)(nt,{})]}),Object(Se.jsxs)("section",{className:"catalog",children:[Object(Se.jsx)("h2",{className:"catalog__title visually-hidden",children:"Catalog"}),Object(Se.jsx)("div",{className:"catalog__films-list",children:e.map((function(e){return Object(Se.jsx)(Re,{id:e.id,previewImage:e.previewImage,name:e.name},e.id)}))})]}),Object(Se.jsx)(Ae,{})]})]})};c(51);var lt=function(){return Object(Se.jsxs)("section",{className:"not-found__main-overlay",children:[Object(Se.jsx)("h1",{className:"not-found_header",children:"Page not found"}),Object(Se.jsx)("h2",{className:"not-found_header",children:"\u0417\u0430\u043f\u0440\u0430\u0448\u0438\u0432\u0430\u0435\u043c\u0430\u044f \u0432\u0430\u043c\u0438 \u0441\u0442\u0440\u0430\u043d\u0438\u0446\u0430 \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u0430"}),Object(Se.jsx)(o.a,{className:"not-found__link",to:"/",children:"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"})]})};var ot=function(e){var t,c=e.currentMovie;return Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsxs)("div",{className:"film-rating",children:[Object(Se.jsx)("div",{className:"film-rating__score",children:c.rating}),Object(Se.jsxs)("p",{className:"film-rating__meta",children:[Object(Se.jsx)("span",{className:"film-rating__level",children:(t=c.rating,t<3?V:t>=3&&t<5?W:t>=5&&t<8?G:t>=8&&t<10?q:U)}),Object(Se.jsxs)("span",{className:"film-rating__count",children:[c.scoresCount," ratings"]})]})]}),Object(Se.jsxs)("div",{className:"film-card__text",children:[Object(Se.jsx)("p",{children:c.description}),Object(Se.jsx)("p",{className:"film-card__director",children:Object(Se.jsxs)("strong",{children:["Director: ",c.director]})}),Object(Se.jsx)("p",{className:"film-card__starring",children:Object(Se.jsxs)("strong",{children:["Starring: ",c.starring.join(", ")]})})]})]})};var dt=function(e){var t=e.currentMovie;return Object(Se.jsxs)("div",{className:"film-card__text film-card__row",children:[Object(Se.jsxs)("div",{className:"film-card__text-col",children:[Object(Se.jsxs)("p",{className:"film-card__details-item",children:[Object(Se.jsx)("strong",{className:"film-card__details-name",children:"Director"}),Object(Se.jsx)("span",{className:"film-card__details-value",children:t.director})]}),Object(Se.jsxs)("p",{className:"film-card__details-item",children:[Object(Se.jsx)("strong",{className:"film-card__details-name",children:"Starring"}),Object(Se.jsx)("span",{className:"film-card__details-value",children:t.starring.map((function(e){return Object(Se.jsxs)("span",{children:[e,Object(Se.jsx)("br",{})]},e)}))})]})]}),Object(Se.jsxs)("div",{className:"film-card__text-col",children:[Object(Se.jsxs)("p",{className:"film-card__details-item",children:[Object(Se.jsx)("strong",{className:"film-card__details-name",children:"Run Time"}),Object(Se.jsxs)("span",{className:"film-card__details-value",children:[t.runTime,"m"]})]}),Object(Se.jsxs)("p",{className:"film-card__details-item",children:[Object(Se.jsx)("strong",{className:"film-card__details-name",children:"Genre"}),Object(Se.jsx)("span",{className:"film-card__details-value",children:t.genre})]}),Object(Se.jsxs)("p",{className:"film-card__details-item",children:[Object(Se.jsx)("strong",{className:"film-card__details-name",children:"Released"}),Object(Se.jsx)("span",{className:"film-card__details-value",children:t.released})]})]})]})},jt=c(36),ut=c.n(jt);function bt(e){return e.map((function(e){return Object(Se.jsxs)("div",{className:"review",children:[Object(Se.jsxs)("blockquote",{className:"review__quote",children:[Object(Se.jsx)("p",{className:"review__text",children:e.comment}),Object(Se.jsxs)("footer",{className:"review__details",children:[Object(Se.jsx)("cite",{className:"review__author",children:e.user.name}),Object(Se.jsx)("time",{className:"review__date",dateTime:"2016-12-24",children:Object(Se.jsx)(ut.a,{format:"MMMM DD, YYYY",children:e.date})})]})]}),Object(Se.jsx)("div",{className:"review__rating",children:e.rating})]},e.id)}))}var mt=function(e){var t=e.currentMovie,c=Object(l.c)(),n=Object(l.d)(Ue);return Object(a.useEffect)((function(){var e;e=t.id,c(Fe(e))}),[t]),Object(Se.jsx)("div",{className:"film-card__reviews film-card__row",children:Object(Se.jsx)("div",{className:"film-card__reviews-col",children:bt(n)})})},ht=(c(54),["Overview","Details","Reviews"]);var Ot=function(e){var t=e.currentMovie,c=Object(a.useState)(0),n=Object(d.a)(c,2),r=n[0],s=n[1];return Object(Se.jsxs)("div",{className:"film-card__desc",children:[Object(Se.jsx)("nav",{className:"film-nav film-card__nav",children:Object(Se.jsx)("ul",{className:"film-nav__list",children:ht.map((function(e,t){return Object(Se.jsx)("li",{className:De()("film-nav__item",{"film-nav__item--active":t===r}),onClick:function(){return s(t)},id:e,children:Object(Se.jsx)("span",{className:"film-nav__link",children:e})},e)}))})}),function(e){switch(e){case 0:return Object(Se.jsx)(ot,{currentMovie:t});case 1:return Object(Se.jsx)(dt,{currentMovie:t});case 2:return Object(Se.jsx)(mt,{currentMovie:t});default:return"Error occured"}}(r)]})};c(55);var ft=function(e){var t=Object(i.g)(),c=e.allFilms.find((function(e){return Number(e.id)===Number(t.id)})),n=Object(l.d)(qe),r=Object(l.d)(Ve),s=Object(l.c)();return Object(a.useEffect)((function(){var e;e=t.id,s(ke(e)),function(e){s(Fe(e))}(t.id)}),[t.id]),c?Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("div",{className:"visually-hidden",children:Object(Se.jsx)(Ee,{currentMovie:c})}),Object(Se.jsxs)("section",{className:"film-card film-card--full",style:{background:c.backgroundColor},children:[Object(Se.jsxs)("div",{className:"film-card__hero",children:[Object(Se.jsx)("div",{className:"film-card__bg",children:Object(Se.jsx)("img",{src:c.backgroundImage,alt:c.name})}),Object(Se.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(Se.jsxs)("header",{className:"page-header film-card__head",children:[Object(Se.jsx)("div",{className:"logo",children:Object(Se.jsx)(o.a,{to:"/",className:"logo__link",children:Object(Se.jsx)(Be,{})})}),Object(Se.jsx)(nt,{})]}),Object(Se.jsx)("div",{className:"film-card__wrap",children:Object(Se.jsxs)("div",{className:"film-card__desc",children:[Object(Se.jsx)("h2",{className:"film-card__title",children:c.name}),Object(Se.jsxs)("p",{className:"film-card__meta",children:[Object(Se.jsx)("span",{className:"film-card__genre",children:c.genre}),Object(Se.jsx)("span",{className:"film-card__year",children:c.released})]}),Object(Se.jsxs)("div",{className:"film-card__buttons",children:[Object(Se.jsx)(o.a,{className:"film-card__button button-caption",to:"/player/".concat(t.id),children:Object(Se.jsxs)("button",{className:"btn btn--play film-card__button",type:"button",children:[Object(Se.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(Se.jsx)("use",{xlinkHref:"#play-s"})}),Object(Se.jsx)("span",{className:"button-caption",children:"Play"})]})}),Object(Se.jsxs)("button",{className:"btn btn--list film-card__button",type:"button",onClick:function(){var e,t=c.isFavorite?ae:ce;e=c.id,s(Le(e,t,!1)),s(Me())},children:[c.isFavorite&&r===je?Object(Se.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(Se.jsx)("use",{xlinkHref:"#in-list"})}):Object(Se.jsx)("svg",{viewBox:"0 0 19 20",width:"19",height:"20",children:Object(Se.jsx)("use",{xlinkHref:"#add"})}),Object(Se.jsx)("span",{children:"My list"})]}),r===je?Object(Se.jsx)(o.a,{to:"/films/".concat(t.id,"/review"),className:"btn film-card__button",children:"Add review"}):null]})]})})]}),Object(Se.jsx)("div",{className:"film-card__wrap film-card__translate-top",children:Object(Se.jsxs)("div",{className:"film-card__info",children:[Object(Se.jsx)("div",{className:"film-card__poster film-card__poster--big",children:Object(Se.jsx)("img",{src:c.posterImage,alt:c.name,width:"218",height:"327"})}),c?Object(Se.jsx)(Ot,{currentMovie:c}):null]})})]}),Object(Se.jsxs)("div",{className:"page-content",children:[Object(Se.jsxs)("section",{className:"catalog catalog--like-this",children:[Object(Se.jsx)("h2",{className:"catalog__title",children:"More like this"}),Object(Se.jsx)("div",{className:"catalog__films-list",children:Object(Se.jsx)(Pe,{allFilms:n})})]}),Object(Se.jsx)(Ae,{})]})]}):Object(Se.jsx)(lt,{})},xt=c(3),_t=Array.from(Array(10).keys()).reverse();function vt(e){var t=e.id,c=Object(a.useState)({rating:0,comment:""}),r=Object(d.a)(c,2),s=r[0],i=r[1],o=Object(l.c)(),j=function(e){o(function(e){var t=e.filmId,c=e.comment,a=e.rating;return function(e,n,r){return r.post("".concat(ve,"/").concat(t),{comment:c,rating:a}).then((function(){e(T("".concat(he,"/").concat(t))),e(z(!1))})).catch((function(t){we.b.error(X),e(z(!1))}))}}(e))},u=Object(l.d)(Ye),b={filmId:t,comment:s.comment,rating:s.rating},m=function(e){i((function(t){return Object(xt.a)(Object(xt.a)({},t),{},{rating:e.target.value})}))};return Object(Se.jsxs)("form",{action:"#",className:"add-review__form",onSubmit:function(e){e.preventDefault(),j(b),o(z(!0))},children:[Object(Se.jsx)("div",{className:"rating",children:Object(Se.jsx)("div",{className:"rating__stars",children:_t.map((function(e){return function(e){return Object(Se.jsxs)(n.a.Fragment,{children:[Object(Se.jsx)("input",{className:"rating__input",id:"star-".concat(e),type:"radio",name:"rating",value:e,onChange:m,disabled:u}),Object(Se.jsxs)("label",{className:"rating__label",htmlFor:"star-".concat(e),children:["Rating ",e]})]},e)}(e+1)}))})}),Object(Se.jsxs)("div",{className:"add-review__text",children:[Object(Se.jsx)("textarea",{className:"add-review__textarea",name:"review-text",id:"review-text",placeholder:"Review text",value:s.comment,onChange:function(e){i((function(t){return Object(xt.a)(Object(xt.a)({},t),{},{comment:e.target.value})}))},minLength:50,maxLength:400,disabled:u}),Object(Se.jsx)("div",{className:"add-review__submit",children:Object(Se.jsx)("button",{className:"add-review__btn",type:"submit",disabled:!function(){var e=s.comment.length>=50&&s.comment.length<=400,t=s.rating>0&&s.rating<=10;return e&&t&&!u}(),children:"Post"})})]})]})}var gt=function(e){var t=Object(i.g)(),c=e.allFilms.find((function(e){return Number(e.id)===Number(t.id)}));return c?Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)("div",{className:"visually-hidden",children:Object(Se.jsx)(Ee,{})}),Object(Se.jsxs)("section",{className:"film-card film-card--full",children:[Object(Se.jsxs)("div",{className:"film-card__header",children:[Object(Se.jsx)("div",{className:"film-card__bg",children:Object(Se.jsx)("img",{src:c.backgroundImage,alt:c.name})}),Object(Se.jsx)("h1",{className:"visually-hidden",children:"WTW"}),Object(Se.jsxs)("header",{className:"page-header",children:[Object(Se.jsx)("div",{className:"logo",children:Object(Se.jsx)(o.a,{to:"/",className:"logo__link",children:Object(Se.jsx)(Be,{})})}),Object(Se.jsx)("nav",{className:"breadcrumbs",children:Object(Se.jsxs)("ul",{className:"breadcrumbs__list",children:[Object(Se.jsx)("li",{className:"breadcrumbs__item",children:Object(Se.jsx)("a",{href:"/films/".concat(c.id),className:"breadcrumbs__link",children:c.name})}),Object(Se.jsx)("li",{className:"breadcrumbs__item",children:Object(Se.jsx)("span",{className:"breadcrumbs__link",children:"Add review"})})]})}),Object(Se.jsx)(nt,{})]}),Object(Se.jsx)("div",{className:"film-card__poster film-card__poster--small",children:Object(Se.jsx)("img",{src:c.posterImage,alt:"".concat(c.name," poster"),width:"218",height:"327"})})]}),Object(Se.jsx)("div",{className:"add-review",children:Object(Se.jsx)(vt,{id:Number(t.id)})})]})]}):Object(Se.jsx)(lt,{})},pt=c(23),Nt=c.n(pt);c(56);function wt(e){var t=Object(i.g)(),c=e.allFilms.find((function(e){return Number(e.id)===Number(t.id)})),n=Object(a.useRef)(null),r=Object(a.useRef)(null),s=Object(a.useRef)(null),l=3600,j=Object(a.useState)({playing:!1,elapsedTime:0,isLoading:!0}),u=Object(d.a)(j,2),b=u[0],m=u[1];Object(a.useEffect)((function(){n.current.onloadeddata=function(){return m((function(e){return Object(xt.a)(Object(xt.a)({},e),{},{isLoading:!1})}))}}),[n]);return c?Object(Se.jsxs)(Se.Fragment,{children:[Object(Se.jsx)(Nt.a,{loading:b.isLoading,className:"player__loader",size:150,color:"green"}),Object(Se.jsx)("div",{className:"visually-hidden",children:Object(Se.jsx)(Ee,{})}),Object(Se.jsxs)("div",{className:"player",children:[Object(Se.jsx)("video",{ref:n,src:c.videoLink,className:"player__video",poster:c.backgroundImage,onTimeUpdate:function(){r.current.value=n.current?n.current.currentTime/n.current.duration*100:0;var e=Math.floor(n.current.duration-n.current.currentTime),t=n.current.duration>l?"".concat(Math.floor(e/l),":").concat(Math.floor(e%l/60),":").concat(e%216e3):"".concat(Math.floor(e/60),":").concat(e%60);s.current.style.left="".concat(n.current?n.current.currentTime/n.current.duration*100:0,"%"),m((function(e){return Object(xt.a)(Object(xt.a)({},e),{},{elapsedTime:"-".concat(t)})}))}}),Object(Se.jsx)(o.a,{to:"/",children:Object(Se.jsx)("button",{type:"button",className:"player__exit",onClick:function(){return n.current.pause()},children:"Exit"})}),Object(Se.jsxs)("div",{className:"player__controls",children:[Object(Se.jsxs)("div",{className:"player__controls-row",children:[Object(Se.jsxs)("div",{className:"player__time",children:[Object(Se.jsx)("progress",{ref:r,className:"player__progress",max:"100"}),Object(Se.jsx)("div",{ref:s,className:"player__toggler",children:"Toggler"})]}),Object(Se.jsx)("div",{className:"player__time-value",children:n.current?b.elapsedTime:""})]}),Object(Se.jsxs)("div",{className:"player__controls-row",children:[Object(Se.jsxs)("button",{type:"button",className:"player__play",onClick:function(){n.current.paused?(n.current.play(),m((function(e){return Object(xt.a)(Object(xt.a)({},e),{},{playing:!0})}))):(n.current.pause(),m((function(e){return Object(xt.a)(Object(xt.a)({},e),{},{playing:!1})})))},children:[b.playing?Object(Se.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(Se.jsx)("use",{xlinkHref:"#pause"})}):Object(Se.jsx)("svg",{viewBox:"0 0 19 19",width:"19",height:"19",children:Object(Se.jsx)("use",{xlinkHref:"#play-s"})}),Object(Se.jsx)("span",{children:b.playing?"Pause":"Play"})]}),Object(Se.jsx)("div",{className:"player__name",children:c.name}),Object(Se.jsxs)("button",{type:"button",className:"player__full-screen",onClick:function(){n.current&&(n.current.fullscreen?n.current.exitFullscreen():n.current.requestFullscreen())},children:[Object(Se.jsx)("svg",{viewBox:"0 0 27 27",width:"27",height:"27",children:Object(Se.jsx)("use",{xlinkHref:"#full-screen"})}),Object(Se.jsx)("span",{children:"Full screen"})]})]})]})]})]}):Object(Se.jsx)(lt,{})}c(62);var yt=function(){return Object(Se.jsxs)("div",{className:"loading__main-overlay",children:[Object(Se.jsx)("h3",{className:"loading__text",children:"Loading..."}),Object(Se.jsx)(Nt.a,{className:"loading__spinner",loading:!0,size:150,color:"green"})]})};var kt=function(e){var t=e.render,c=e.path,a=e.exact,n=Object(l.d)(Ve);return Object(Se.jsx)(i.b,{path:c,exact:a,render:function(e){return n===je?t(e):Object(Se.jsx)(i.a,{to:se})}})};var Ft=function(){var e=Object(l.d)(Je),t=Object(l.d)(Ke),c=Object(l.d)(Ve);return t&&function(e){return e!==be}(c)?Object(Se.jsxs)(i.d,{children:[Object(Se.jsx)(i.b,{path:re,exact:!0,render:function(){return Object(Se.jsx)(rt,{})}}),Object(Se.jsx)(i.b,{path:se,exact:!0,render:function(){return Object(Se.jsx)(st,{})}}),Object(Se.jsx)(kt,{exact:!0,path:ie,render:function(){return Object(Se.jsx)(it,{})}}),Object(Se.jsx)(i.b,{path:le,exact:!0,children:Object(Se.jsx)(ft,{allFilms:e})}),Object(Se.jsx)(kt,{exact:!0,path:oe,render:function(){return Object(Se.jsx)(gt,{allFilms:e})}}),Object(Se.jsx)(i.b,{path:de,exact:!0,children:Object(Se.jsx)(wt,{allFilms:e})}),Object(Se.jsx)(i.b,{children:Object(Se.jsx)(lt,{})})]}):Object(Se.jsx)(yt,{})},Mt=c(37),Lt=c.n(Mt),St=401,Rt=c(9),Ct=Object(Rt.a)(),Ht=(c(81),c(11)),It={authorizationStatus:be,userImage:""},Pt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:It,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(xt.a)(Object(xt.a)({},e),{},{authorizationStatus:t.payload});case N:return Object(xt.a)(Object(xt.a)({},e),{},{userImage:t.payload});case p:return Object(xt.a)(Object(xt.a)({},e),{},{authorizationStatus:ue,userImage:""});default:return e}},Et=c(16),Bt=c.n(Et),At={currentGenre:ne,moviesOnPage:8,changedMovie:{},allFilms:[],isDataLoaded:!1};function Tt(e,t){var c=e.findIndex((function(e){return e.id===t.id})),a=e.slice();return a.splice(c,1,t),a}var Dt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:At,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case u:return Object(xt.a)(Object(xt.a)({},e),{},{currentGenre:t.payload.genre});case b:return Object(xt.a)(Object(xt.a)({},e),{},{moviesOnPage:e.moviesOnPage+8});case m:return Object(xt.a)(Object(xt.a)({},e),{},{currentGenre:ne,moviesOnPage:8});case h:return Object(xt.a)(Object(xt.a)({},e),{},{allFilms:Bt()(t.payload),isDataLoaded:!0});case O:return Object(xt.a)(Object(xt.a)({},e),{},{changedMovie:Bt()(t.payload),allFilms:Tt(e.allFilms,Bt()(t.payload))});default:return e}},zt=Object(j.c)({promoFilm:{},similarFilms:[],reviews:[],favoriteMovies:[],reviewUploading:!1},(function(e){e.addCase(C,(function(e,t){e.promoFilm=Bt()(t.payload)})).addCase(H,(function(e,t){e.similarFilms=Bt()(t.payload)})).addCase(I,(function(e,t){e.reviews=Bt()(t.payload)})).addCase(P,(function(e,t){e.favoriteMovies=Bt()(t.payload)})).addCase(z,(function(e,t){e.reviewUploading=t.payload}))})),Vt=Object(Ht.c)({auth:Pt,data:zt,movie:Dt}),Wt=function(e){return function(e){return function(t){return t.type===w&&Ct.push(t.payload),e(t)}}},Gt=function(e){return function(e){return function(t){return t.type===y&&Ct.replace(t.payload),e(t)}}},qt=function(e){var t=Lt.a.create({baseURL:"https://7.react.pages.academy/wtw",timeout:5e3});return t.interceptors.response.use((function(e){return e}),(function(t){throw t.response.status===St&&e(),t})),t.interceptors.request.use((function(e){var t,c=null!==(t=localStorage.getItem("token"))&&void 0!==t?t:"";return c&&(e.headers["x-token"]=c),e}),(function(e){return Promise.reject(e)})),t}((function(){return Ut.dispatch(E(ue))})),Ut=Object(j.a)({reducer:Vt,middleware:function(e){return e({thunk:{extraArgument:qt}}).concat(Wt,Gt)}});Ut.dispatch((function(e,t,c){return c.get(pe).then((function(t){var c=t.data;e(E(je)),e(B(c.avatar_url))})).catch((function(e){e.response&&e.response.status!==ye?we.b.error(J):e.response||we.b.error($)}))})),Ut.dispatch((function(e,t,c){return c.get(Oe).then((function(t){var c=t.data;return e(C(c))})).catch((function(e){return we.b.error(ee)}))})),Ut.dispatch((function(e,t,c){return c.get(me).then((function(t){var c=t.data;return e(S(c))})).catch((function(e){return we.b.error(Z)}))})),s.a.render(Object(Se.jsx)(n.a.StrictMode,{children:Object(Se.jsx)(l.a,{store:Ut,children:Object(Se.jsxs)(i.c,{history:Ct,children:[Object(Se.jsx)(Ft,{}),Object(Se.jsx)(we.a,{position:"top-right",hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0})]})})}),document.getElementById("root"))}},[[82,1,2]]]);
//# sourceMappingURL=main.6949850a.chunk.js.map