(this.webpackJsonpnewsfeed=this.webpackJsonpnewsfeed||[]).push([[0],{10:function(e,t,a){e.exports={FormToChange:"styles_FormToChange__mwwdv",ModalToRead:"styles_ModalToRead__2vOXo",fieldDescrip:"styles_fieldDescrip__H1PYs",imageBlock:"styles_imageBlock__1F7o6",detailsBlock:"styles_detailsBlock__15t5w",layoutBlock:"styles_layoutBlock__gxLdY",input:"styles_input__37rPh",infoInput:"styles_infoInput__idAaw",textarea:"styles_textarea__1_voj",buttonsBlock:"styles_buttonsBlock__1Upzt",closeButton:"styles_closeButton__2wg5T",deleteButton:"styles_deleteButton__1mocE",submitButton:"styles_submitButton__PZZt7",error:"styles_error__3ODhH"}},12:function(e,t,a){e.exports={NewsItem:"styles_NewsItem__3nZeS",mainBlock:"styles_mainBlock__3YUBG",contentWraper:"styles_contentWraper__2ktZs",imageBlock:"styles_imageBlock__1O9dj",image:"styles_image__1JH2q",contentBlock:"styles_contentBlock__1BGPj",details:"styles_details__3CCPe",date:"styles_date__zW41Y",changeButton:"styles_changeButton__svOj1",mobile:"styles_mobile__-Dt9h",prewiev:"styles_prewiev__1ADRl",buttonBlock:"styles_buttonBlock__2ntNI",toReadMoreButton:"styles_toReadMoreButton__1PJAN",dateMobile:"styles_dateMobile__2NNLX"}},127:function(e,t,a){e.exports={Button:"styles_Button__dDkfc"}},13:function(e,t,a){e.exports={ModalToRead:"styles_ModalToRead__1s3YQ",newsName:"styles_newsName__3QGLu",imageBlock:"styles_imageBlock__2rU8G",topDecor:"styles_topDecor__2heTj",bottomDecor:"styles_bottomDecor__11-I5",leftDecor:"styles_leftDecor__1jBwg",rightDecor:"styles_rightDecor__1T67P",centerDecorBox:"styles_centerDecorBox__1no22",image:"styles_image__3Gugi",content:"styles_content__2jApM",buttonsBlock:"styles_buttonsBlock__17nOu",linkToOriginal:"styles_linkToOriginal__3A5kd",closeButton:"styles_closeButton__6YRNv"}},14:function(e,t,a){e.exports={Menu:"styles_Menu__fVso0",openButton:"styles_openButton__iraHp",decorLine:"styles_decorLine__3iGYU",memuBody:"styles_memuBody__FVnlB",open:"styles_open__Wt707",closeButton:"styles_closeButton__3I4Mj",list:"styles_list__27Vo6",item:"styles_item__2tKXe"}},18:function(e,t,a){e.exports={Preloader:"styles_Preloader__2yJ6A",absolute:"styles_absolute__3rZYD",background:"styles_background__3lPR9",container:"styles_container__RhhFG",elem:"styles_elem__OW0Uo",slide:"styles_slide__1mti1","color-change":"styles_color-change__5zDg7","flip-1":"styles_flip-1__1pqAU","squidge-1":"styles_squidge-1__245c1","flip-2":"styles_flip-2__2Zo1I","squidge-2":"styles_squidge-2__1FvWQ","flip-3":"styles_flip-3__nyM4w","squidge-3":"styles_squidge-3___bqR3","flip-4":"styles_flip-4__3iPWR","squidge-4":"styles_squidge-4__1ubjW"}},222:function(e,t,a){},285:function(e,t){},303:function(e,t,a){"use strict";a.r(t);var n=a(0),_=a(1),s=a.n(_),i=a(57),l=a.n(i),o=a(8),c=a(123),r=a(122),u=a(6),m="DATE-UP",d="DATE-DOWN",f={"date up":m,"date down":d},y={mode:0,isLoading:!0,sortVariant:d,isMenuOpen:!1},h="CHANGE-MODE",O="TOGGLE-LOADING",b="SET-SORT",g="SET-MENU-OPEN",p=function(e){return{type:h,mode:e}},j=function(e){return{type:O,value:e}},I=function(e){return{type:b,value:e}},w=function(e){return{type:g,value:e}},v=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case h:return Object(u.a)(Object(u.a)({},e),{},{mode:t.mode});case O:return Object(u.a)(Object(u.a)({},e),{},{isLoading:void 0===t.value?!e.isLoading:t.value});case b:return Object(u.a)(Object(u.a)({},e),{},{sortVariant:t.value});case g:return Object(u.a)(Object(u.a)({},e),{},{isMenuOpen:void 0===t.value?!e.isMenuOpen:t.value});default:return e}},B={articles:[],currentArticle:null,search:null},N="SET-ARTICLES",x="SET-CURRENT-ARTICLE",L="SET-SEARCH-ARTICLES",k=function(e){return{type:N,data:e}},R=function(e){return{type:x,id:e}},D=function(e){return{type:L,data:e}},S=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:B,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(u.a)(Object(u.a)({},e),{},{articles:t.data,search:e.search?e.search.reduce((function(e,a){var n=t.data.filter((function(e){return e.id===a.id}));return n.length&&e.push(n[0]),e}),[]):e.search});case x:return Object(u.a)(Object(u.a)({},e),{},{currentArticle:null===t.id?null:e.articles.filter((function(e){return e.id===t.id}))[0]});case L:return Object(u.a)(Object(u.a)({},e),{},{search:t.data});default:return e}},T=Object(o.c)({articles:S,global:v,form:r.a}),U=Object(o.d)(T,Object(o.a)(c.a)),M=a(23),C=(a(222),a(47)),z=a(81),A=a.n(z),E=a(126),P="NEWSFEED",F="ARTICLES",Y=function(){return JSON.parse(localStorage.getItem(P))},H=function(e){return localStorage.setItem(P,JSON.stringify(e))},X=function(){return!!localStorage.getItem(P)},Q=function(e){return H({articles:e.articles})},q=function(e){var t=Y();switch(e){case F:return t.articles;default:return null}},V=function(e,t){var a=Y();switch(e){case F:a.articles=t;break;default:return null}H(a)},W="/",J="articles",G="setitem",Z="deleteitem",K=function(e,t){var a={ok:!0,body:null};switch(e){case W+J:a.body=q(F);break;case W+G:var n=q(F),_=new $(n,t.body),s="PUT"===t.method?n.map((function(e){return e.id===_.id?_:e})):n.concat(_);a.body=s,V(F,s);break;case W+Z:a.body=q(F).filter((function(e){return e.id!==t.body.id})),V(F,a.body)}return a};function $(e,t){var a,n=!t,_=t&&!t.id,s=!n&&!_;return{id:n||_?function(){if(!e.length)return 0;var t=Object(C.a)(e).sort((function(e,t){return e.id-t.id}));return t[t.length-1].id}()+1:t.id,date:n||_?+new Date:(a=t.id,e.reduce((function(e,t){return e=t.id===a?t.date:e}),null)),original:(s||_)&&t.original||null,name:(s||_)&&t.name||null,preview:(s||_)&&t.preview||null,newsLayout:(s||_)&&t.newsLayout||null,images:{small:(s||_)&&t.images.small||null,large:(s||_)&&t.images.large||null}}}var ee=function(){return X()?new Promise((function(e){e(!0)})):fetch("./source/source.json").then((function(e){return e.json()})).then((function(e){return Q({articles:e}),!0}))},te=function(){return _e(W+J)},ae=function(e){return _e(W+G,{method:e.id?"PUT":"POST",body:e})},ne=function(e){return _e(W+Z,{method:"DELETE",body:{id:e}})};function _e(e,t){return function(e,t,a){return new Promise((function(n){setTimeout((function(){n(K(e,t))}),a)}))}(e,t,2e3).then((function(e){return function(e){return se.apply(this,arguments)}(e)}))}function se(){return(se=Object(E.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",t);case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var ie=a(21),le=a(43),oe=function(e,t){var a=t&&t.size?t.size:null,n="large"===a?e.images.large:e.images.small,_="large"===a?e.images.small:e.images.large;return n||(_||"./img/defaultImage.jpg")},ce=function(e){var t=new Date(+e),a=t.getMonth()+1,n=t.getDate(),_=t.getHours(),s=t.getMinutes(),i={year:"".concat(t.getFullYear()),month:a<10?"0".concat(a):"".concat(a),day:n<10?"0".concat(n):"".concat(n),hours:_<10?"0".concat(_):"".concat(_),minutes:s<10?"0".concat(s):"".concat(s)},l="".concat(i.day,".").concat(i.month,".").concat(i.year),o="".concat(i.hours,":").concat(i.minutes);return"".concat(l,"  ").concat(o)},re={setBaseItems:function(e){return function(t){t(k(e)),t(j(!1))}},activateModal:function(e,t){return function(a){a(R(e)),a(w(!1)),a(p(t))}},deactivateModal:function(){return function(e){e(p(0)),e(R(null))}},initFormToChange:function(e){return function(t){t(Object(ie.a)("FormToChange",e))}},setNewsItem:function(e){return function(t){t(j(!0));var a,n=[];if(e.smallImage&&n.push({key:"smallImage",data:e.smallImage}),e.largeImage&&n.push({key:"largeImage",data:e.largeImage}),e.largeImage&&n.push({key:"original",data:e.original}),n.length)return Promise.all(n.map((function(e){return fetch(e.data,{method:"HEAD",mode:"no-cors",cache:"no-cache",credentials:"same-origin"})}))).then((function(e){var a=!0;if(e.forEach((function(e){e.ok||(a=!1)})),!a){var _={_error:"Data loading error"};throw n.forEach((function(t,a){e[a].ok||(_[t.key]="The resource you specified is not responding!")})),t(j(!1)),new le.a(_)}}));a=function(e){return{id:e.id,original:e.original,name:e.name,preview:e.preview,newsLayout:e.newsLayout,images:{small:e.smallImage,large:e.largeImage}}}(e),ae(a).then((function(a){return ue(a.body,t,!e.id)}))}},deleteNewsItem:function(e){return function(t){t(j(!0)),ne(e).then((function(e){return ue(e.body,t,!0)}))}},setSearch:function(e){var t=e.searchString,a=e.articles;return function(e){e(j());var n=t?a.filter((function(e){return e.name&&-1!==e.name.indexOf(t)||e.preview&&-1!==e.preview.indexOf(t)||e.newsLayout&&-1!==e.newsLayout.indexOf(t)})):null;e(D(n)),e(j())}},clearSearch:function(){return function(e){e(j()),e(Object(ie.a)("Search",{inputField:""})),e(D(null)),e(j())}},setSort:function(e){return function(t){t(I(f[e]))}},setMenu:function(e){return function(t){t(w(e))}}};function ue(e,t,a){t(k(e)),t(p(0)),t(j(!1)),a&&window.scrollTo(0,0)}var me=a(9),de=a.n(me),fe=a(18),ye=a.n(fe);var he=function(e){var t=e.className,a=e.absolute;return Object(n.jsx)("div",{className:"".concat(ye.a.Preloader," ").concat(t," ").concat(a?ye.a.absolute:""),children:Object(n.jsx)("div",{className:ye.a.background,children:Object(n.jsxs)("div",{className:ye.a.container,children:[Object(n.jsx)("div",{className:ye.a.elem}),Object(n.jsx)("div",{className:ye.a.elem}),Object(n.jsx)("div",{className:ye.a.elem}),Object(n.jsx)("div",{className:ye.a.elem}),Object(n.jsx)("div",{className:ye.a.elem})]})})})},Oe=a(120),be=a(121),ge=a(32),pe=a(127),je=a.n(pe),Ie=function(e){var t=e.className,a=e.buttonText,_=e.clickHandler,s=e.isSubmit,i=e.others,l=Object(ge.a)(e,["className","buttonText","clickHandler","isSubmit","others"]),o="".concat(je.a.Button," ").concat(t||""),c=a||l.children;return s?Object(n.jsx)("button",Object(u.a)(Object(u.a)({type:"submit",className:o},i),{},{children:c})):Object(n.jsx)("button",Object(u.a)(Object(u.a)({type:"button",className:o},i),{},{onClick:function(){_()},children:c}))},we=a(61),ve=a.n(we),Be=Object(be.a)({form:"Search"})((function(e){var t=e.className,a=e.handleSubmit,_=e.articles,s=e.setSearch,i=e.clearSearch;return Object(n.jsxs)("form",{className:"".concat(ve.a.Search," ").concat(t),onSubmit:a,children:[Object(n.jsx)("div",{children:Object(n.jsx)(Oe.a,{className:ve.a.input,component:"input",name:"inputField",placeholder:"Search...",onChange:function(e,t){s({searchString:t,articles:_})}})}),Object(n.jsx)("div",{children:Object(n.jsxs)(Ie,{className:ve.a.cleanButton,clickHandler:i,children:[Object(n.jsx)("span",{children:"to clean"}),Object(n.jsx)("span",{children:"x"})]})})]})})),Ne=a(12),xe=a.n(Ne),Le=function(e){var t=e.className,a=e.imagePath,_=e.prewiev,s=e.id,i=e.activateModal,l=e.date;return Object(n.jsxs)("li",{className:"".concat(t," ").concat(xe.a.NewsItem),children:[Object(n.jsx)("div",{className:xe.a.mainBlock,children:Object(n.jsxs)("div",{className:xe.a.contentWraper,children:[Object(n.jsx)("div",{className:xe.a.imageBlock,children:Object(n.jsx)("img",{className:xe.a.image,src:a})}),Object(n.jsxs)("div",{className:xe.a.contentBlock,children:[Object(n.jsxs)("div",{className:xe.a.details,children:[Object(n.jsx)("button",{className:xe.a.changeButton,onClick:function(){return i(s,2)},children:"To edit a news item click here."}),Object(n.jsx)("span",{className:xe.a.date,children:ce(l)})]}),Object(n.jsx)("p",{className:xe.a.prewiev,children:_})]})]})}),Object(n.jsxs)("div",{className:xe.a.buttonBlock,children:[Object(n.jsx)("button",{className:"".concat(xe.a.changeButton," ").concat(xe.a.mobile),onClick:function(){return i(s,2)},children:"Edit"}),Object(n.jsx)("button",{className:xe.a.toReadMoreButton,onClick:function(){return i(s,1)},children:"... Click here to read more"})]}),Object(n.jsx)("span",{className:xe.a.dateMobile,children:ce(l)})]})},ke=a(84),Re=a.n(ke),De=a(13),Se=a.n(De),Te=a(34),Ue=a.n(Te),Me=function(e){var t=e.className,a=e.newsItem,_=e.handlerToClose,s=a.name,i=a.newsLayout,l=a.original,o=[Se.a.ModalToRead,t,Ue.a.animate__animated,Ue.a.animate__zoomIn].join(" ");return Object(n.jsxs)("div",{className:o,children:[Object(n.jsxs)("div",{className:Se.a.buttonsBlock,children:[Object(n.jsx)(Ie,{className:Se.a.closeButton,clickHandler:_,children:"close"}),l?Object(n.jsx)("a",{className:Se.a.linkToOriginal,href:l,target:"_blank",children:"go to original"}):null]}),Object(n.jsx)("h1",{className:Se.a.newsName,children:s}),Object(n.jsxs)("div",{className:Se.a.imageBlock,children:[Object(n.jsx)("div",{className:Se.a.topDecor,children:"horizontal decorative element"}),Object(n.jsxs)("div",{className:Se.a.centerDecorBox,children:[Object(n.jsx)("div",{className:Se.a.leftDecor,children:"vertical decorative element"}),Object(n.jsx)("div",{className:Se.a.imageBox,children:Object(n.jsx)("img",{className:Se.a.image,src:oe(a,{size:"large"})})}),Object(n.jsx)("div",{className:Se.a.rightDecor,children:"vertical decorative element"})]}),Object(n.jsx)("div",{className:Se.a.bottomDecor,children:"horizontal decorative element"})]}),Object(n.jsx)("div",{className:Se.a.content,children:Re()(i,{transform:function(e){if("text"===e.type&&!e.parent)return Re()("<p>".concat(e.data.replace(/\n/g,"<br>"),"</p>"))}})})]})},Ce=a(10),ze=a.n(Ce),Ae=function(e){var t=e.input,a=e.label,_=e.meta,s=e.elem,i=(Object(ge.a)(e,["input","label","meta","elem"]),_.touched),l=_.error,o=s.tagName,c=s.type,r="input"==o&&c?{type:c}:{},m="".concat("textarea"===s.tagName?ze.a.textarea:ze.a.input),d="".concat(i&&l?ze.a.error:"");return Object(n.jsxs)("div",{children:[Object(n.jsxs)("label",{className:ze.a.fieldDescrip,children:[Object(n.jsx)("span",{children:a}),i&&l?Object(n.jsxs)("span",{children:["\u2003\u2003","( error: ".concat(l," )")]}):null]}),Object(n.jsx)(Oe.a,Object(u.a)(Object(u.a)(Object(u.a)({component:o},t),r),{},{className:"".concat(m," ").concat(d)}))]})},Ee=function(e){return e?void 0:"Field is required!"},Pe=function(e){return e?e.trim()?void 0:"The data can't consist only of whitespace characters!":void 0},Fe=function(e){return Object(n.jsxs)("div",{className:ze.a.imageBlock,children:[Object(n.jsx)(Oe.a,{name:"smallImage",component:Ae,label:"Path of small image of News",elem:{tagName:"input"},validate:[Pe]}),Object(n.jsx)(Oe.a,{name:"largeImage",component:Ae,label:"Path of large image of News",elem:{tagName:"input"},validate:[Pe]})]})},Ye=function(e){var t=e.id,a=e.handlerToClose,_=e.handlerToDelete,s=e.others;Object(ge.a)(e,["id","handlerToClose","handlerToDelete","others"]);return Object(n.jsxs)("div",{className:ze.a.buttonsBlock,children:[Object(n.jsxs)(Ie,{className:ze.a.closeButton,clickHandler:a,children:[Object(n.jsx)("span",{children:"Close without saving"}),Object(n.jsx)("span",{children:"Close"})]}),t?Object(n.jsxs)(Ie,{className:ze.a.deleteButton,clickHandler:function(){return _(t)},children:[Object(n.jsx)("span",{children:"Delete this news"}),Object(n.jsx)("span",{children:"Delete"})]}):null,Object(n.jsx)(Ie,{className:ze.a.submitButton,isSubmit:!0,others:s,children:t?"change":"create"})]})},He=Object(be.a)({form:"FormToChange"})((function(e){var t=e.className,a=e.newsItem,s=e.isLoading,i=e.initForm,l=e.handlerToClose,o=e.handlerToDelete,c=e.handleSubmit,r=a||{},u=r.id,m=void 0===u?null:u,d=r.original,f=void 0===d?null:d,y=r.name,h=void 0===y?null:y,O=r.preview,b=void 0===O?null:O,g=r.newsLayout,p={id:m,name:h,preview:b,original:f,newsLayout:void 0===g?null:g,smallImage:a?a.images.small:null,largeImage:a?a.images.large:null},j=[ze.a.FormToChange,t,Ue.a.animate__animated,Ue.a.animate__fadeIn].join(" ");return Object(_.useEffect)((function(){i(p)}),[]),Object(n.jsxs)("form",{className:j,onSubmit:c,children:[s?Object(n.jsx)(he,{absolute:!0}):null,Object(n.jsx)(Oe.a,{className:ze.a.infoInput,component:"input",name:"id",disabled:!0}),Object(n.jsx)(Fe,{}),Object(n.jsxs)("div",{className:ze.a.detailsBlock,children:[Object(n.jsx)(Oe.a,{name:"name",component:Ae,label:"News headline",elem:{tagName:"input"},validate:[Ee,Pe]}),Object(n.jsx)(Oe.a,{name:"preview",component:Ae,label:"News preview",elem:{tagName:"input"},validate:[Ee,Pe]}),Object(n.jsx)(Oe.a,{name:"original",component:Ae,label:"Link to original",elem:{tagName:"input"},validate:[Pe]})]}),Object(n.jsx)("div",{className:ze.a.layoutBlock,children:Object(n.jsx)(Oe.a,{name:"newsLayout",component:Ae,label:"News layout",elem:{tagName:"textarea"},validate:[Ee,Pe]})}),Object(n.jsx)(Ye,{id:m,handlerToClose:l,handlerToDelete:o})]})})),Xe=a(128),Qe=a(35),qe=a.n(Qe);var Ve=function(e){var t=e.className,a=e.descripClassName,s=e.listClassName,i=e.itemClassName,l=e.name,o=e.items,c=e.active,r=e.clickHandler,u=Array.from(new Set(o)),m=c&&u.includes(c)?c:0!==u.length?u[0]:null,d=Object(_.useState)(m),f=Object(Xe.a)(d,2),y=f[0],h=f[1],O=function(e){h(e.target.dataset.value),r(e.target.dataset.value)};return Object(n.jsxs)("div",{className:"".concat(qe.a.Switcher," ").concat(t),children:[Object(n.jsxs)("span",{className:"".concat(qe.a.descrip," ").concat(a),children:[l,"\xa0",":"]}),Object(n.jsx)("ul",{className:"".concat(qe.a.list," ").concat(s),children:u.map((function(e){var t=e===y?qe.a.active:"";return Object(n.jsx)("li",{className:"".concat(qe.a.item," ").concat(i," ").concat(t),children:Object(n.jsx)("button",{"data-value":e,onClick:O,children:e})},e)}))})]})},We=a(14),Je=a.n(We),Ge=function(e){var t=e.className,a=e.bodyClassName,_=e.listClassName,s=e.bgOfCloseButton,i=e.items,l=e.isOpen,o=e.clickHandler,c="".concat(Je.a.Menu," ").concat(t," "),r="".concat(l?Je.a.open:"");return Object(n.jsxs)("div",{className:"".concat(c," ").concat(r),children:[Object(n.jsxs)("button",{className:Je.a.openButton,onClick:function(e){l?e.preventDefault():o(!0)},children:[Object(n.jsx)("div",{className:Je.a.decorLine}),Object(n.jsx)("div",{className:Je.a.decorLine}),Object(n.jsx)("div",{className:Je.a.decorLine})]}),Object(n.jsxs)("div",{className:"".concat(Je.a.memuBody," ").concat(a," "),children:[Object(n.jsx)("button",{className:Je.a.closeButton,onClick:function(){o(!1)},children:Object(n.jsx)("img",{className:Je.a.background,src:s})}),Object(n.jsx)("ul",{className:"".concat(Je.a.list," ").concat(_," "),children:i.map((function(e,t){return Object(n.jsx)("li",{className:Je.a.item,children:e},t)}))})]})]})},Ze=function(e){var t=e.isLoading,a=e.mode,_=e.articles,s=e.currentArticle,i=e.search,l=e.sortArray,o=e.defaultSort,c=e.isMenuOpen,r=e.activateModal,u=e.deactivateModal,m=e.initFormToChange,d=e.setMenu,f=e.setNewsItem,y=e.deleteNewsItem,h=e.setSearch,O=e.clearSearch,b=e.setSort,g=i||_,p=Object(n.jsx)(Ie,{className:de.a.addNewsButton,clickHandler:function(){return r(null,2)},children:"add news"}),j=Object(n.jsx)(Ve,{className:de.a.Switcher,itemClassName:de.a.SwitcherItem,descripClassName:de.a.SwitcherDescrip,name:"Sort",clickHandler:function(e){b(e)},items:l,active:o});return Object(n.jsxs)("div",{className:"".concat(de.a.Newsfeed," ").concat(2===a?de.a.modalMode:""),children:[Object(n.jsxs)("div",{className:de.a.header,children:[Object(n.jsx)("span",{className:de.a.logo,children:"newsfeed"}),Object(n.jsx)(Be,{className:de.a.Search,articles:_,setSearch:h,clearSearch:O}),Object(n.jsx)(Ge,{className:de.a.Menu,bodyClassName:de.a.memuBody,listClassName:de.a.MenuList,bgOfCloseButton:"./img/close.png",isOpen:c,items:[p,j],clickHandler:d})]}),0===a?Object(n.jsx)("ul",{className:de.a.main,children:g.map((function(e){return Object(n.jsx)(Le,{className:de.a.NewsItem,prewiev:e.preview,imagePath:oe(e),id:e.id,date:e.date,activateModal:r},e.id)}))}):null,1===a?Object(n.jsx)(Me,{className:de.a.ModalToRead,newsItem:s,handlerToClose:u}):null,2===a?Object(n.jsx)(He,{newsItem:s,handlerToClose:u,onSubmit:f,initForm:m,className:de.a.FormToChange,isLoading:t,handlerToDelete:y}):null,t&&0===a?Object(n.jsx)(he,{className:de.a.Preloader,absolute:!0}):null]})},Ke=Object(M.b)((function(e){return{isLoading:e.global.isLoading,mode:e.global.mode,articles:e.articles.articles,currentArticle:e.articles.currentArticle,search:e.articles.search,sortVariant:e.global.sortVariant,isMenuOpen:e.global.isMenuOpen}}),Object(u.a)({},re))((function(e){Object(_.useEffect)((function(){te().then((function(t){t.ok&&t.body&&e.setBaseItems(t.body)}))}),[]);var t=Object(u.a)(Object(u.a)({},e),{},{articles:function(e,t){switch(t){case m:return Object(C.a)(e).sort((function(e,t){return e.date-t.date}));case d:return Object(C.a)(e).sort((function(e,t){return t.date-e.date}));default:return[]}}(e.articles,e.sortVariant),sortArray:Object.keys(f),defaultSort:"date down"});return Object(n.jsx)(Ze,Object(u.a)({},t))}));var $e=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(Ke,{})})},et=document.getElementById("root");ee().then((function(){l.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(M.a,{store:U,children:Object(n.jsx)($e,{})})}),et)})),window.getMyState=function(){return U.getState()}},34:function(e,t,a){e.exports={animate__animated:"styles_animate__animated__2QCNx",animate__infinite:"styles_animate__infinite__1ImMR","animate__repeat-1":"styles_animate__repeat-1__1vRyi","animate__repeat-2":"styles_animate__repeat-2__2vLPw","animate__repeat-3":"styles_animate__repeat-3__1ifAr","animate__delay-1s":"styles_animate__delay-1s__XoHn5","animate__delay-2s":"styles_animate__delay-2s__2SRVw","animate__delay-3s":"styles_animate__delay-3s__NgMqk","animate__delay-4s":"styles_animate__delay-4s__1o471","animate__delay-5s":"styles_animate__delay-5s__ufQ7C",animate__faster:"styles_animate__faster__FTIBQ",animate__fast:"styles_animate__fast__2zUjW",animate__slow:"styles_animate__slow__3mpM3",animate__slower:"styles_animate__slower__aSojb",animate__bounce:"styles_animate__bounce__2xxEH",bounce:"styles_bounce__3RxyG",animate__flash:"styles_animate__flash__1ER4q",flash:"styles_flash__2jtVr",animate__pulse:"styles_animate__pulse__2JxCs",pulse:"styles_pulse__TQSnU",animate__rubberBand:"styles_animate__rubberBand__1bDDf",rubberBand:"styles_rubberBand__394j7",animate__shakeX:"styles_animate__shakeX__1iYzr",shakeX:"styles_shakeX__nCAtf",animate__shakeY:"styles_animate__shakeY__2_i9B",shakeY:"styles_shakeY__ZzzWg",animate__headShake:"styles_animate__headShake__KF7XA",headShake:"styles_headShake__2q9tq",animate__swing:"styles_animate__swing__2OoVB",swing:"styles_swing__2bzbL",animate__tada:"styles_animate__tada__amV9H",tada:"styles_tada__j5N1m",animate__wobble:"styles_animate__wobble__3iY0d",wobble:"styles_wobble__1xO3q",animate__jello:"styles_animate__jello__1hYT2",jello:"styles_jello__1MBL_",animate__heartBeat:"styles_animate__heartBeat__21W-J",heartBeat:"styles_heartBeat__2A34m",animate__backInDown:"styles_animate__backInDown__U-6J_",backInDown:"styles_backInDown__32x-M",animate__backInLeft:"styles_animate__backInLeft__2Z8Af",backInLeft:"styles_backInLeft__1ArR2",animate__backInRight:"styles_animate__backInRight__QmlcO",backInRight:"styles_backInRight__2IQVm",animate__backInUp:"styles_animate__backInUp__LPknp",backInUp:"styles_backInUp__1OKSF",animate__backOutDown:"styles_animate__backOutDown__XGki_",backOutDown:"styles_backOutDown__2y17D",animate__backOutLeft:"styles_animate__backOutLeft__Hk4zp",backOutLeft:"styles_backOutLeft__29Ots",animate__backOutRight:"styles_animate__backOutRight__379c_",backOutRight:"styles_backOutRight__hStCo",animate__backOutUp:"styles_animate__backOutUp__2pJI2",backOutUp:"styles_backOutUp__bIv9S",animate__bounceIn:"styles_animate__bounceIn__2soQc",bounceIn:"styles_bounceIn__128OG",animate__bounceInDown:"styles_animate__bounceInDown__2ipl8",bounceInDown:"styles_bounceInDown__yXo2P",animate__bounceInLeft:"styles_animate__bounceInLeft__20n_l",bounceInLeft:"styles_bounceInLeft__1xiPw",animate__bounceInRight:"styles_animate__bounceInRight__1ovut",bounceInRight:"styles_bounceInRight__aewJS",animate__bounceInUp:"styles_animate__bounceInUp__2r1L2",bounceInUp:"styles_bounceInUp__2jli-",animate__bounceOut:"styles_animate__bounceOut__150pG",bounceOut:"styles_bounceOut__18tTW",animate__bounceOutDown:"styles_animate__bounceOutDown__3UVc4",bounceOutDown:"styles_bounceOutDown__Uyl9h",animate__bounceOutLeft:"styles_animate__bounceOutLeft__2K004",bounceOutLeft:"styles_bounceOutLeft__Xm7AI",animate__bounceOutRight:"styles_animate__bounceOutRight__3KhIA",bounceOutRight:"styles_bounceOutRight__2wvLX",animate__bounceOutUp:"styles_animate__bounceOutUp__2MTKP",bounceOutUp:"styles_bounceOutUp__2yVjd",animate__fadeIn:"styles_animate__fadeIn__3-UR6",fadeIn:"styles_fadeIn__2myO-",animate__fadeInDown:"styles_animate__fadeInDown__LhIys",fadeInDown:"styles_fadeInDown__3QE98",animate__fadeInDownBig:"styles_animate__fadeInDownBig__3Awn3",fadeInDownBig:"styles_fadeInDownBig__3aLM0",animate__fadeInLeft:"styles_animate__fadeInLeft__2t0Vl",fadeInLeft:"styles_fadeInLeft__Ds5AA",animate__fadeInLeftBig:"styles_animate__fadeInLeftBig__hxB1K",fadeInLeftBig:"styles_fadeInLeftBig__ZAmf9",animate__fadeInRight:"styles_animate__fadeInRight__1jsvf",fadeInRight:"styles_fadeInRight__3RVg3",animate__fadeInRightBig:"styles_animate__fadeInRightBig__2_jUf",fadeInRightBig:"styles_fadeInRightBig__2FWNc",animate__fadeInUp:"styles_animate__fadeInUp__9K94v",fadeInUp:"styles_fadeInUp__3u2PK",animate__fadeInUpBig:"styles_animate__fadeInUpBig__1Sgog",fadeInUpBig:"styles_fadeInUpBig__uGu5Q",animate__fadeInTopLeft:"styles_animate__fadeInTopLeft__3IbQu",fadeInTopLeft:"styles_fadeInTopLeft__3xNnQ",animate__fadeInTopRight:"styles_animate__fadeInTopRight__3S3WR",fadeInTopRight:"styles_fadeInTopRight__ZR6lb",animate__fadeInBottomLeft:"styles_animate__fadeInBottomLeft__2WVrH",fadeInBottomLeft:"styles_fadeInBottomLeft___ADMm",animate__fadeInBottomRight:"styles_animate__fadeInBottomRight__2Txg2",fadeInBottomRight:"styles_fadeInBottomRight__QZ2na",animate__fadeOut:"styles_animate__fadeOut__2qYhv",fadeOut:"styles_fadeOut__22JdO",animate__fadeOutDown:"styles_animate__fadeOutDown__1fhBh",fadeOutDown:"styles_fadeOutDown__2JGxE",animate__fadeOutDownBig:"styles_animate__fadeOutDownBig__2wjy1",fadeOutDownBig:"styles_fadeOutDownBig__1pJpF",animate__fadeOutLeft:"styles_animate__fadeOutLeft__2kbMg",fadeOutLeft:"styles_fadeOutLeft__wO7Az",animate__fadeOutLeftBig:"styles_animate__fadeOutLeftBig__1Iypy",fadeOutLeftBig:"styles_fadeOutLeftBig__13ulp",animate__fadeOutRight:"styles_animate__fadeOutRight__2-0k5",fadeOutRight:"styles_fadeOutRight__29uID",animate__fadeOutRightBig:"styles_animate__fadeOutRightBig__2nufL",fadeOutRightBig:"styles_fadeOutRightBig__2saUf",animate__fadeOutUp:"styles_animate__fadeOutUp__1v56m",fadeOutUp:"styles_fadeOutUp__1TtgY",animate__fadeOutUpBig:"styles_animate__fadeOutUpBig__1o3Ih",fadeOutUpBig:"styles_fadeOutUpBig__3XH3j",animate__fadeOutTopLeft:"styles_animate__fadeOutTopLeft__2QWaX",fadeOutTopLeft:"styles_fadeOutTopLeft__gQsBu",animate__fadeOutTopRight:"styles_animate__fadeOutTopRight__wY5u0",fadeOutTopRight:"styles_fadeOutTopRight__20crr",animate__fadeOutBottomRight:"styles_animate__fadeOutBottomRight__2V_Wl",fadeOutBottomRight:"styles_fadeOutBottomRight__1xHVm",animate__fadeOutBottomLeft:"styles_animate__fadeOutBottomLeft__3wZEI",fadeOutBottomLeft:"styles_fadeOutBottomLeft__78Syh",animate__flip:"styles_animate__flip__2WiFy",flip:"styles_flip__2UuQ_",animate__flipInX:"styles_animate__flipInX__3yS_E",flipInX:"styles_flipInX__1s7Jv",animate__flipInY:"styles_animate__flipInY__1Lun6",flipInY:"styles_flipInY__hqSqx",animate__flipOutX:"styles_animate__flipOutX__13zZg",flipOutX:"styles_flipOutX__1rd-F",animate__flipOutY:"styles_animate__flipOutY__2i8y7",flipOutY:"styles_flipOutY__1bZmb",animate__lightSpeedInRight:"styles_animate__lightSpeedInRight__GPNnd",lightSpeedInRight:"styles_lightSpeedInRight__2wicF",animate__lightSpeedInLeft:"styles_animate__lightSpeedInLeft__J8CLi",lightSpeedInLeft:"styles_lightSpeedInLeft__2bLQi",animate__lightSpeedOutRight:"styles_animate__lightSpeedOutRight__2ijtI",lightSpeedOutRight:"styles_lightSpeedOutRight__-fADw",animate__lightSpeedOutLeft:"styles_animate__lightSpeedOutLeft__3-RYQ",lightSpeedOutLeft:"styles_lightSpeedOutLeft__1KGCG",animate__rotateIn:"styles_animate__rotateIn__25t0Z",rotateIn:"styles_rotateIn__3g8NR",animate__rotateInDownLeft:"styles_animate__rotateInDownLeft__2ATt_",rotateInDownLeft:"styles_rotateInDownLeft__1Ka3C",animate__rotateInDownRight:"styles_animate__rotateInDownRight__3S_TO",rotateInDownRight:"styles_rotateInDownRight__27cMa",animate__rotateInUpLeft:"styles_animate__rotateInUpLeft__3B1Ni",rotateInUpLeft:"styles_rotateInUpLeft__25J7N",animate__rotateInUpRight:"styles_animate__rotateInUpRight__3ZQz1",rotateInUpRight:"styles_rotateInUpRight__28ele",animate__rotateOut:"styles_animate__rotateOut__28DEu",rotateOut:"styles_rotateOut__UeMw2",animate__rotateOutDownLeft:"styles_animate__rotateOutDownLeft__2ox5N",rotateOutDownLeft:"styles_rotateOutDownLeft__2BQQH",animate__rotateOutDownRight:"styles_animate__rotateOutDownRight__27NP3",rotateOutDownRight:"styles_rotateOutDownRight__1IenC",animate__rotateOutUpLeft:"styles_animate__rotateOutUpLeft__1axYW",rotateOutUpLeft:"styles_rotateOutUpLeft__2XatA",animate__rotateOutUpRight:"styles_animate__rotateOutUpRight___Alw0",rotateOutUpRight:"styles_rotateOutUpRight__1egtq",animate__hinge:"styles_animate__hinge__3iQJK",hinge:"styles_hinge__3XhYV",animate__jackInTheBox:"styles_animate__jackInTheBox__pqKyz",jackInTheBox:"styles_jackInTheBox__1ubRe",animate__rollIn:"styles_animate__rollIn__3n6-R",rollIn:"styles_rollIn__1MWmb",animate__rollOut:"styles_animate__rollOut__1js8M",rollOut:"styles_rollOut__3rHov",animate__zoomIn:"styles_animate__zoomIn__1AifB",zoomIn:"styles_zoomIn__3MjaK",animate__zoomInDown:"styles_animate__zoomInDown__3f57n",zoomInDown:"styles_zoomInDown__2IB9l",animate__zoomInLeft:"styles_animate__zoomInLeft__1aull",zoomInLeft:"styles_zoomInLeft__3VXlr",animate__zoomInRight:"styles_animate__zoomInRight__17ErZ",zoomInRight:"styles_zoomInRight__3yTf4",animate__zoomInUp:"styles_animate__zoomInUp__ouMao",zoomInUp:"styles_zoomInUp__KWL-D",animate__zoomOut:"styles_animate__zoomOut__1cioB",zoomOut:"styles_zoomOut__1iCib",animate__zoomOutDown:"styles_animate__zoomOutDown__16Um_",zoomOutDown:"styles_zoomOutDown__3pVut",animate__zoomOutLeft:"styles_animate__zoomOutLeft__22RSl",zoomOutLeft:"styles_zoomOutLeft__3LTQC",animate__zoomOutRight:"styles_animate__zoomOutRight__3P9Qm",zoomOutRight:"styles_zoomOutRight__3kemy",animate__zoomOutUp:"styles_animate__zoomOutUp__xmSIu",zoomOutUp:"styles_zoomOutUp__2qmj0",animate__slideInDown:"styles_animate__slideInDown__EYd1e",slideInDown:"styles_slideInDown__3hHpq",animate__slideInLeft:"styles_animate__slideInLeft__1gMd1",slideInLeft:"styles_slideInLeft__rdNgx",animate__slideInRight:"styles_animate__slideInRight__3ccu7",slideInRight:"styles_slideInRight__hGSuV",animate__slideInUp:"styles_animate__slideInUp__3x0YZ",slideInUp:"styles_slideInUp__29guc",animate__slideOutDown:"styles_animate__slideOutDown__3FCoj",slideOutDown:"styles_slideOutDown__308vL",animate__slideOutLeft:"styles_animate__slideOutLeft__3g0rn",slideOutLeft:"styles_slideOutLeft__2RHcP",animate__slideOutRight:"styles_animate__slideOutRight__37A9j",slideOutRight:"styles_slideOutRight__Envsi",animate__slideOutUp:"styles_animate__slideOutUp__KJZMo",slideOutUp:"styles_slideOutUp__1SXN6"}},35:function(e,t,a){e.exports={Switcher:"styles_Switcher__147JO",descrip:"styles_descrip__Nehpk",list:"styles_list__22z6t",item:"styles_item__1aZVn",active:"styles_active__1SeNW"}},61:function(e,t,a){e.exports={Search:"styles_Search__113uN",input:"styles_input__3d4X7",cleanButton:"styles_cleanButton__2CIou"}},9:function(e,t,a){e.exports={Newsfeed:"styles_Newsfeed__28RqU",modalMode:"styles_modalMode__h05Ds",header:"styles_header___aHnb",logo:"styles_logo__b3JcB",Menu:"styles_Menu__qgQ8P",MenuList:"styles_MenuList__iF4gt",addNewsButton:"styles_addNewsButton__17IBq",main:"styles_main__3lWFp",NewsItem:"styles_NewsItem__3XhQu",Preloader:"styles_Preloader__eENmb",ModalToRead:"styles_ModalToRead__2V7yB",FormToChange:"styles_FormToChange__23cC4",sortBlock:"styles_sortBlock__3RMfC",Switcher:"styles_Switcher__3-Vs3",SwitcherItem:"styles_SwitcherItem__2gbdF",memuBody:"styles_memuBody__3Ap7m",Search:"styles_Search__D8nYl"}}},[[303,1,2]]]);
//# sourceMappingURL=main.1d1930e4.chunk.js.map