"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7499],{80821:function(k,D,n){n.d(D,{Z:function(){return P}});var L=n(5574),r=n.n(L),K=n(24963),d=n(86738),m=n(14726),F=n(83062),S=n(67294),A=n(85893);function P(u){var T=(0,S.useState)(!1),B=r()(T,2),x=B[0],Z=B[1],y=(0,S.useContext)(K.Z),v=y.lang,b=y.notice,l=y.message,p=function(){Z(!0),u.action().then(function(a){if(Z(!1),typeof u.onSuccess=="function"&&u.onSuccess(a),u.messageSuccess){var E="";typeof u.messageSuccess=="function"?E=u.messageSuccess(a):E=u.messageSuccess,E.indexOf(".")>-1&&(E=v(E)),u.asynced?l.info(E):l.success(E)}}).catch(function(a){Z(!1),typeof u.onError=="function"&&u.onError(a)})};return u.confirm?(0,A.jsx)(d.Z,{style:{width:500},title:u.confirmTitle?u.confirmTitle:v("notification.title.tip"),description:u.confirm,onConfirm:p,okText:"Yes",cancelText:"No",children:(0,A.jsx)(m.ZP,{disabled:u.disabled,icon:u.icon,loading:x,danger:u.danger,type:u.type,children:u.children})}):(0,A.jsx)(F.Z,{title:u.tips,children:(0,A.jsx)(m.ZP,{disabled:u.disabled,icon:u.icon,loading:x,onClick:p,danger:u.danger,type:u.type,children:u.children})})}},24963:function(k,D,n){var L=n(67294),r=(0,L.createContext)({});D.Z=r},43774:function(k,D,n){n.r(D),n.d(D,{default:function(){return ie}});var L=n(5574),r=n.n(L),K=n(24963),d=n(15078),m=n(90078),F=n(97269),S=n(62370),A=n(97462),P=n(38345),u=n(42075),T=n(65233),B=n(14726),x=n(92398),Z=n(2487),y=n(4393),v=n(67294),b=n(15009),l=n.n(b),p=n(99289),w=n.n(p),a=n(184),E=n(51652),I=n(71230),M=n(15746),H=n(34041),te=n(29158),V=n(74842),q=n(25593),Y=n(83062),re=n(66309),t=n(85893);function s(i){var $=(0,v.useState)(),U=r()($,2),g=U[0],R=U[1];return(0,v.useEffect)(function(){var z=i.url.substring(0,i.url.indexOf("://"));switch(z){case"image":R((0,t.jsx)("img",{width:i.imageSize?i.imageSize.width:"auto",height:i.imageSize?i.imageSize.height:"auto",src:i.url.replace("image://","/dpanel/static/store/file/")}));break;case"http":case"https":R((0,t.jsx)("img",{width:i.imageSize?i.imageSize.width:"auto",height:i.imageSize?i.imageSize.height:"auto",src:i.url}));break;case"markdown-file":(0,d.yL)({path:i.url.replace("markdown-file://","/dpanel/static/store/file/")}).then(function(G){R((0,t.jsx)(E.Z,{source:G,style:{padding:5}},"content"))});break;case"markdown":R((0,t.jsx)(E.Z,{source:i.url.replace("markdown://",""),style:{padding:5}},"content"));break}},[i.url]),(0,t.jsx)(t.Fragment,{children:g})}function o(i){return(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(I.Z,{gutter:[10,10],children:[(0,t.jsx)(M.Z,{span:6,children:(0,t.jsx)(s,{url:i.app.logo,imageSize:i.logoSize})}),(0,t.jsxs)(M.Z,{span:i.extra?12:18,children:[(0,t.jsx)(I.Z,{children:(0,t.jsx)(M.Z,{span:24,children:(0,t.jsx)(u.Z,{direction:"horizontal",children:(0,t.jsx)(q.Z.Title,{level:5,children:i.app.name})})})}),(0,t.jsx)(I.Z,{style:{height:"60px"},children:(0,t.jsx)(M.Z,{children:(0,t.jsx)(Y.Z,{title:i.app.description,children:(0,t.jsx)(q.Z.Paragraph,{ellipsis:{rows:2},children:i.app.description})})})}),(0,t.jsx)(I.Z,{style:{height:"30px"},children:(0,t.jsx)(M.Z,{children:i.app.tag&&i.app.tag.map(function($,U){return(0,t.jsx)(re.Z,{children:$},U)})})})]}),(0,t.jsx)(M.Z,{span:i.extra?6:0,children:i.extra})]})})}var j=n(80821),e=n(90098),ae=n(54006),se=(0,v.forwardRef)(function(i,$){var U=(0,v.useState)(!1),g=r()(U,2),R=g[0],z=g[1],G=(0,v.useState)(),ee=r()(G,2),h=ee[0],Q=ee[1],N=(0,v.useState)(""),J=r()(N,2),C=J[0],f=J[1],W=(0,ae.useNavigate)();return(0,v.useImperativeHandle)($,function(){return{show:function(c,O){c.storeId=O,z(!0),Q(c),f(Object.keys(c.version)[0])}}}),(0,t.jsx)(a.a,{submitter:!1,open:R,onOpenChange:function(c){z(c)},title:"".concat(h==null?void 0:h.name," \u8BE6\u60C5\u4ECB\u7ECD"),children:h&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(P.Z,{ghost:!0,style:{marginBottom:"20px",paddingBottom:"20px",borderBottom:"#eeeeee solid 1px"},children:(0,t.jsx)(o,{app:h,logoSize:{width:"130",height:"130"},extra:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)(I.Z,{gutter:[10,10],children:[(0,t.jsx)(M.Z,{children:(0,t.jsxs)(u.Z,{wrap:!0,children:[(0,t.jsx)(B.ZP,{href:h.website,target:"_blank",icon:(0,t.jsx)(te.Z,{}),children:"\u5B98\u7F51"},"website"),(0,t.jsx)(j.Z,{action:w()(l()().mark(function _(){var c,O;return l()().wrap(function(X){for(;;)switch(X.prev=X.next){case 0:return console.log(h),console.log(C),X.next=4,(0,e.iE)({storeId:(c=h.storeId)!==null&&c!==void 0?c:0,name:h.name,composeFile:h.version[C].composeFile});case 4:O=X.sent,O&&O.data.id&&W("/compose/create?id="+O.data.id);case 6:case"end":return X.stop()}},_)})),type:"primary",icon:(0,t.jsx)(V.Z,{}),children:"\u5B89\u88C5"},"install")]})}),(0,t.jsx)(M.Z,{span:24,children:h.version&&(0,t.jsx)(H.Z,{style:{width:"100%"},value:C,onChange:function(c){f(c)},options:Object.keys(h.version).map(function(_){return{value:_,label:_}})})})]})})})}),Object.keys(h.version).map(function(_){if(!(C!=_||!h.version[_].environment||h.version[_].environment.length==0)){var c="## \u7248\u672C\u4FE1\u606F <sup>".concat(_,`</sup> 
 |\u53D8\u91CF\u540D|\u9ED8\u8BA4\u503C|\u8BF4\u660E| 
 |---|---|---|
`);return h.version[_].environment.map(function(O){c+="|".concat(O.name,"|").concat(O.value,"|").concat(O.label,`| 
`)}),c+="<br />",(0,t.jsx)(E.Z,{source:c,style:{padding:5}},_)}}),(0,t.jsx)(s,{url:h==null?void 0:h.content})]})})}),ue=se;function ie(){var i=(0,v.useRef)(),$=(0,v.useState)(),U=r()($,2),g=U[0],R=U[1],z=(0,v.useContext)(K.Z),G=z.loading,ee=(0,v.useState)(""),h=r()(ee,2),Q=h[0],N=h[1];(0,v.useEffect)(function(){G.show(),(0,d.eO)().then(function(C){R(Object.fromEntries(C.data.list.map(function(f){return[f.name,f]}))),C.data.list.length>0&&N(C.data.list[0].name)}).finally(function(){G.destroy()})},[]);var J=function(f){var W=[];if(g){if(g["search"+f])return;var _={};Object.keys(g).map(function(c){g[c].id!=-1&&(_[c]=g[c]),g[c].setting.apps.map(function(O){if(f&&O.name.toLowerCase().indexOf(f)!==-1){var ne=JSON.parse(JSON.stringify(O));ne.name="".concat(ne.name," - \u3010").concat(g[c].title,"\u3011"),W.push(ne)}})}),W.length>0?(_["search"+f]={id:-1,name:"search"+f,title:"\u641C\u7D22\u7ED3\u679C",setting:{apps:W}},N("search"+f)):N(Object.keys(g)[0]),R(_)}};return(0,t.jsxs)(m._z,{extra:[(0,t.jsx)(F.A,{isKeyPressSubmit:!0,submitter:!1,onFinish:function(f){J(f.search)},children:(0,t.jsxs)(u.Z.Compact,{children:[(0,t.jsx)(S.Z,{style:{margin:0},name:"search",children:(0,t.jsx)(T.Z,{allowClear:!0,addonBefore:"\u5168\u5546\u5E97\u67E5\u8BE2",placeholder:"\u6309\u56DE\u8F66\u67E5\u8BE2\u5E94\u7528",onClear:function(){J("")}})}),(0,t.jsx)(A.Z,{name:["search"],children:function(f){var W=f.search;return(0,t.jsx)(B.ZP,{onClick:function(){J(W)},children:"\u641C\u7D22"})}})]})},"form")],children:[(0,t.jsx)(ue,{ref:i}),(0,t.jsxs)(P.Z,{children:[g&&(0,t.jsx)(x.Z,{activeKey:Q,onChange:function(f){N(f)},items:Object.keys(g).map(function(C){return{label:g[C].title,key:C}})}),(0,t.jsx)(Z.Z,{pagination:{pageSize:36},rowKey:"name",grid:{gutter:10,xs:1,sm:2,md:2,lg:2,xl:2,xxl:3},dataSource:g&&g[Q].setting.apps,renderItem:function(f,W){return(0,t.jsx)(Z.Z.Item,{children:(0,t.jsx)(y.Z,{onClick:function(){if(g){var c;(c=i.current)===null||c===void 0||c.show(f,g[Q].id)}},hoverable:!0,children:(0,t.jsx)(o,{app:f,logoSize:{width:"50",height:"50"}})})})}})]})]})}},15078:function(k,D,n){n.d(D,{$c:function(){return F},Me:function(){return Z},eO:function(){return B},ks:function(){return A},yL:function(){return v}});var L=n(15009),r=n.n(L),K=n(99289),d=n.n(K),m=n(54006);function F(l){return S.apply(this,arguments)}function S(){return S=d()(r()().mark(function l(p){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/common/store/create",{method:"POST",data:p}));case 1:case"end":return a.stop()}},l)})),S.apply(this,arguments)}function A(l){return P.apply(this,arguments)}function P(){return P=d()(r()().mark(function l(p){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/common/store/sync",{method:"POST",data:p}));case 1:case"end":return a.stop()}},l)})),P.apply(this,arguments)}function u(l){return T.apply(this,arguments)}function T(){return T=_asyncToGenerator(_regeneratorRuntime().mark(function l(p){return _regeneratorRuntime().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",request("/api/common/store/get-detail",{method:"POST",data:p}));case 1:case"end":return a.stop()}},l)})),T.apply(this,arguments)}function B(l){return x.apply(this,arguments)}function x(){return x=d()(r()().mark(function l(p){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)("/api/common/store/get-list",{method:"POST",data:p}));case 1:case"end":return a.stop()}},l)})),x.apply(this,arguments)}function Z(l){return y.apply(this,arguments)}function y(){return y=d()(r()().mark(function l(p){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,(0,m.request)("/api/common/store/delete",{method:"POST",data:p});case 2:return a.abrupt("return",a.sent);case 3:case"end":return a.stop()}},l)})),y.apply(this,arguments)}function v(l){return b.apply(this,arguments)}function b(){return b=d()(r()().mark(function l(p){return r()().wrap(function(a){for(;;)switch(a.prev=a.next){case 0:return a.abrupt("return",(0,m.request)(p==null?void 0:p.path,{method:"GET"}));case 1:case"end":return a.stop()}},l)})),b.apply(this,arguments)}},90098:function(k,D,n){n.d(D,{CT:function(){return B},GG:function(){return w},MG:function(){return te},Oh:function(){return v},Pn:function(){return u},U_:function(){return M},VN:function(){return E},iE:function(){return re},ik:function(){return Z},im:function(){return F},mg:function(){return l},pm:function(){return A},xC:function(){return q}});var L=n(15009),r=n.n(L),K=n(99289),d=n.n(K),m=n(54006);function F(s){return S.apply(this,arguments)}function S(){return S=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/create",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),S.apply(this,arguments)}function A(s){return P.apply(this,arguments)}function P(){return P=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-list",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),P.apply(this,arguments)}function u(s){return T.apply(this,arguments)}function T(){return T=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-task",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),T.apply(this,arguments)}function B(s){return x.apply(this,arguments)}function x(){return x=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-detail",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),x.apply(this,arguments)}function Z(s){return y.apply(this,arguments)}function y(){return y=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/delete",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),y.apply(this,arguments)}function v(s){return b.apply(this,arguments)}function b(){return b=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),b.apply(this,arguments)}function l(s){return p.apply(this,arguments)}function p(){return p=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-destroy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),p.apply(this,arguments)}function w(s){return a.apply(this,arguments)}function a(){return a=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-ctrl",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),a.apply(this,arguments)}function E(s){return I.apply(this,arguments)}function I(){return I=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-log",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),I.apply(this,arguments)}function M(s){return H.apply(this,arguments)}function H(){return H=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/container-process-kill",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),H.apply(this,arguments)}function te(s){return V.apply(this,arguments)}function V(){return V=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/get-from-uri",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),V.apply(this,arguments)}function q(s){return Y.apply(this,arguments)}function Y(){return Y=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/app/compose/parse",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),Y.apply(this,arguments)}function re(s){return t.apply(this,arguments)}function t(){return t=d()(r()().mark(function s(o){return r()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,m.request)("/api/common/store/deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},s)})),t.apply(this,arguments)}}}]);
