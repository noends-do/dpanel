(self.webpackChunk=self.webpackChunk||[]).push([[8022],{23430:function(B,O,e){"use strict";e.d(O,{Z:function(){return f}});var C=e(87462),o=e(67294),_={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z"}}]},name:"download",theme:"outlined"},c=_,m=e(84089),j=function(s,r){return o.createElement(m.Z,(0,C.Z)({},s,{ref:r,icon:c}))},x=o.forwardRef(j),f=x},80821:function(B,O,e){"use strict";e.d(O,{Z:function(){return p}});var C=e(5574),o=e.n(C),_=e(24963),c=e(86738),m=e(14726),j=e(83062),x=e(67294),f=e(85893);function p(s){var r=(0,x.useState)(!1),a=o()(r,2),v=a[0],t=a[1],i=(0,x.useContext)(_.Z),R=i.lang,w=i.notice,A=i.message,D=function(){t(!0),s.action().then(function(g){if(t(!1),typeof s.onSuccess=="function"&&s.onSuccess(g),s.messageSuccess){var E="";typeof s.messageSuccess=="function"?E=s.messageSuccess(g):E=s.messageSuccess,E.indexOf(".")>-1&&(E=R(E)),s.asynced?A.info(E):A.success(E)}}).catch(function(g){t(!1),typeof s.onError=="function"&&s.onError(g)})};return s.confirm?(0,f.jsx)(c.Z,{style:{width:500},title:s.confirmTitle?s.confirmTitle:R("notification.title.tip"),description:s.confirm,onConfirm:D,okText:"Yes",cancelText:"No",children:(0,f.jsx)(m.ZP,{disabled:s.disabled,icon:s.icon,loading:v,danger:s.danger,type:s.type,children:s.children})}):(0,f.jsx)(j.Z,{title:s.tips,children:(0,f.jsx)(m.ZP,{disabled:s.disabled,icon:s.icon,loading:v,onClick:D,danger:s.danger,type:s.type,children:s.children})})}},94359:function(B,O,e){"use strict";e.d(O,{Z:function(){return v}});var C=e(67294),o=e(3089),_=e(98165),c=e(18429),m=e(8751),j=e(14313),x=e(30159),f=e(87740),p=e(66309),s=e(83062),r=e(54006),a=e(85893);function v(t){var i=(0,a.jsx)(a.Fragment,{});if(t.status=="0"&&(i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(o.Z,{}),color:"default",children:"waiting"})),t.status=="10"&&(i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(_.Z,{spin:!0}),color:"processing",children:"processing"})),t.status=="20"&&(i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(c.Z,{}),color:"error",children:"error"})),t.status=="30"&&(i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(m.Z,{}),color:"success",children:"success"})),t.status=="running"){var R,w;i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(j.Z,{}),color:"success",children:(R=t.message)!==null&&R!==void 0&&R.showInTag?(w=t.message)===null||w===void 0?void 0:w.content:t.status})}if(t.status=="paused"){var A,D;i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(x.Z,{}),children:(A=t.message)!==null&&A!==void 0&&A.showInTag?(D=t.message)===null||D===void 0?void 0:D.content:t.status})}if(t.status=="waiting"){var Z,g;i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(f.Z,{}),children:(Z=t.message)!==null&&Z!==void 0&&Z.showInTag?(g=t.message)===null||g===void 0?void 0:g.content:t.status})}if(t.status=="exited"||t.status=="dead"||t.status=="removing"||t.status=="restarting"||t.status=="created"){var E,l;i=(0,a.jsx)(p.Z,{icon:(0,a.jsx)(c.Z,{}),color:"warning",children:(E=t.message)!==null&&E!==void 0&&E.showInTag?(l=t.message)===null||l===void 0?void 0:l.content:t.status})}return t.link&&(i=(0,a.jsx)(r.Link,{to:t.link,children:i})),t.message&&(i=(0,a.jsx)(s.Z,{placement:t.message.placement,title:t.message.content,children:i})),(0,a.jsx)(a.Fragment,{children:i})}},24963:function(B,O,e){"use strict";var C=e(67294),o=(0,C.createContext)({});O.Z=o},96781:function(B,O,e){"use strict";var C=e(67294),o=(0,C.createContext)({});O.Z=o},83536:function(B,O,e){"use strict";e.r(O),e.d(O,{default:function(){return b}});var C=e(15009),o=e.n(C),_=e(99289),c=e.n(_),m=e(80821),j=e(90098),x=e(43425),f=e(86548),p=e(23430),s=e(10641),r=e(54006),a=e(42075),v=e(96074),t=e(83062),i=e(60922),R=e(67294),w=e(96781),A=e(94359),D=e(67255),Z=e(93162),g=e(24963),E=e(66309),l=e(85893);function z(L){var W=(0,r.useIntl)(),u=(0,R.useContext)(g.Z),d=u.lang,y;if(!L.type)y=(0,l.jsx)(E.Z,{children:d("compose.default")});else switch(L.type){case"remoteUrl":y=(0,l.jsx)(E.Z,{color:"cyan",children:d("compose.".concat(L.type))});break;case"serverPath":y=(0,l.jsx)(E.Z,{color:"blue",children:d("compose.".concat(L.type))});break;case"storagePath":y=(0,l.jsx)(E.Z,{color:"blue-inverse",children:d("compose.".concat(L.type))});break;case"outPath":y=(0,l.jsx)(E.Z,{color:"yellow",children:d("compose.".concat(L.type))});break;default:y=(0,l.jsx)(E.Z,{children:d("compose.".concat(L.type))})}return(0,l.jsx)(t.Z,{title:L.tootip,children:y})}function b(){var L=(0,R.useContext)(w.Z),W=L.listTableRef,u=(0,R.useContext)(g.Z),d=u.lang,y=u.notice;return(0,l.jsx)(s.Z,{scroll:{x:"max-content"},request:function(){var n=c()(o()().mark(function S(h){var U,P,M;return o()().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return T.next=2,(0,j.pm)({title:h.title,name:h.name,pageSize:(U=h.pageSize)!==null&&U!==void 0?U:10,page:(P=h.current)!==null&&P!==void 0?P:1});case 2:return M=T.sent,T.abrupt("return",{data:M.data.list,success:!0,total:M.data.list.length});case 4:case"end":return T.stop()}},S)}));return function(S){return n.apply(this,arguments)}}(),rowKey:"name",columns:[{title:"\u6807\u8BC6",dataIndex:"name",width:200,render:function(S,h,U,P,M){return(0,l.jsx)(r.Link,{to:"/compose/deploy/"+h.id,children:h.name},U)}},{title:"\u9879\u76EE\u540D\u79F0",dataIndex:"title",width:200},{title:"\u7C7B\u578B",width:150,search:!1,render:function(S,h,U,P,M){var I;return(0,l.jsx)(z,{tootip:(I=h.setting.uri)!==null&&I!==void 0?I:"",type:h.setting&&h.setting.type?h.setting.type:""})}},{title:"\u5BB9\u5668\u72B6\u6001",dataIndex:"status",search:!1,width:300,render:function(S,h,U,P,M){return(0,l.jsx)(a.Z,{children:h.setting.status.split(", ").map(function(I){var T="running",K=I.indexOf("(");return K>-1?T=I.slice(0,K):T=I,(0,l.jsx)(A.Z,{status:T,message:{content:d("compose.".concat(T),{count:I.slice(K+1,I.length-1)}),placement:"top",showInTag:!0}},h.id)})})}},{title:"\u64CD\u4F5C",width:80,valueType:"option",key:"option",render:function(S,h,U,P,M){return(0,l.jsxs)(a.Z,{split:(0,l.jsx)(v.Z,{type:"vertical"}),children:[(0,l.jsx)(r.Link,{to:"/compose/deploy/"+h.id,children:(0,l.jsx)(t.Z,{title:"\u7BA1\u7406",children:(0,l.jsx)(x.Z,{})})},"3"),h.setting.type!="outPath"&&(0,l.jsx)(r.Link,{to:"/compose/create?id="+h.id,children:(0,l.jsx)(t.Z,{title:"\u7F16\u8F91",children:(0,l.jsx)(f.Z,{})})},"4"),(0,l.jsx)(i.Z.Link,{onClick:c()(o()().mark(function I(){var T,K;return o()().wrap(function(F){for(;;)switch(F.prev=F.next){case 0:return F.next=2,(0,j.YZ)({id:h.id});case 2:T=F.sent,T&&T.data&&T.data.detail&&(K=new Blob([T.data.detail.yaml],{type:"text/plain"}),(0,Z.saveAs)(K,h.name+"-compose.yaml"));case 4:case"end":return F.stop()}},I)})),children:(0,l.jsx)(t.Z,{title:"\u4E0B\u8F7D",children:(0,l.jsx)(p.Z,{})})},"2")]})}}],rowSelection:{defaultSelectedRowKeys:[],alwaysShowAlert:!0,getCheckboxProps:function(S){return{disabled:S.setting.type=="storagePath"||S.setting.type=="serverPath"||S.setting.type=="outPath"}}},tableAlertOptionRender:function(S){var h=S.selectedRows;return(0,l.jsx)(a.Z,{size:16,children:(0,l.jsx)(m.Z,{danger:!0,type:"primary",action:function(){return(0,j.ik)({id:h.map(function(P){return P.id})})},onSuccess:function(){var P,M;return!((P=W.current)===null||P===void 0)&&P.reloadAndRest&&((M=W.current)===null||M===void 0||M.reloadAndRest()),!0},onError:function(){var P,M;return!((P=W.current)===null||P===void 0)&&P.reset&&((M=W.current)===null||M===void 0||M.reset()),!0},messageSuccess:"\u5220\u9664\u6210\u529F",confirm:(0,l.jsx)(a.Z,{style:{width:280},direction:"vertical",children:(0,l.jsx)(i.Z.Text,{children:"\u5220\u9664\u524D\u8BF7\u5148\u9500\u6BC1\u76F8\u5173\u5BB9\u5668\uFF0C\u786E\u8BA4\u5417\uFF1F"})}),children:"\u6279\u91CF\u5220\u9664"})})},pagination:(0,D.O)(),search:{collapsed:!1},actionRef:W,columnsState:(0,D.j)("compose-list")})}},90098:function(B,O,e){"use strict";e.d(O,{GG:function(){return A},MG:function(){return z},Oh:function(){return t},U_:function(){return E},VN:function(){return Z},YZ:function(){return s},ik:function(){return a},im:function(){return j},mg:function(){return R},pm:function(){return f},xC:function(){return L}});var C=e(15009),o=e.n(C),_=e(99289),c=e.n(_),m=e(54006);function j(u){return x.apply(this,arguments)}function x(){return x=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/create",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),x.apply(this,arguments)}function f(u){return p.apply(this,arguments)}function p(){return p=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/get-list",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),p.apply(this,arguments)}function s(u){return r.apply(this,arguments)}function r(){return r=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/get-detail",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),r.apply(this,arguments)}function a(u){return v.apply(this,arguments)}function v(){return v=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/delete",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),v.apply(this,arguments)}function t(u){return i.apply(this,arguments)}function i(){return i=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/container-deploy",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),i.apply(this,arguments)}function R(u){return w.apply(this,arguments)}function w(){return w=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/container-destroy",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),w.apply(this,arguments)}function A(u){return D.apply(this,arguments)}function D(){return D=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/container-ctrl",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),D.apply(this,arguments)}function Z(u){return g.apply(this,arguments)}function g(){return g=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/container-log",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),g.apply(this,arguments)}function E(u){return l.apply(this,arguments)}function l(){return l=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/container-process-kill",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),l.apply(this,arguments)}function z(u){return b.apply(this,arguments)}function b(){return b=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/get-from-uri",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),b.apply(this,arguments)}function L(u){return W.apply(this,arguments)}function W(){return W=c()(o()().mark(function u(d){return o()().wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",(0,m.request)("/api/app/compose/parse",{method:"POST",data:d}));case 1:case"end":return n.stop()}},u)})),W.apply(this,arguments)}},67255:function(B,O,e){"use strict";e.d(O,{O:function(){return C},j:function(){return o}});function C(){var _,c=parseInt((_=localStorage.getItem("dpanel-pagesize"))!==null&&_!==void 0?_:"0");return{showSizeChanger:!0,defaultPageSize:c!=null?c:20}}function o(_){var c="dpanel-table-column-".concat(_),m={};if(localStorage.getItem(c)){var j;m=JSON.parse((j=localStorage.getItem(c))!==null&&j!==void 0?j:"{}")}return{defaultValue:m,onChange:function(f){localStorage.setItem("dpanel-table-column-".concat(_),JSON.stringify(f))}}}},93162:function(B,O,e){var C,o,_;(function(c,m){o=[],C=m,_=typeof C=="function"?C.apply(O,o):C,_!==void 0&&(B.exports=_)})(this,function(){"use strict";function c(r,a){return typeof a=="undefined"?a={autoBom:!1}:typeof a!="object"&&(console.warn("Deprecated: Expected third argument to be a object"),a={autoBom:!a}),a.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob(["\uFEFF",r],{type:r.type}):r}function m(r,a,v){var t=new XMLHttpRequest;t.open("GET",r),t.responseType="blob",t.onload=function(){s(t.response,a,v)},t.onerror=function(){console.error("could not download file")},t.send()}function j(r){var a=new XMLHttpRequest;a.open("HEAD",r,!1);try{a.send()}catch(v){}return 200<=a.status&&299>=a.status}function x(r){try{r.dispatchEvent(new MouseEvent("click"))}catch(v){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),r.dispatchEvent(a)}}var f=typeof window=="object"&&window.window===window?window:typeof self=="object"&&self.self===self?self:typeof e.g=="object"&&e.g.global===e.g?e.g:void 0,p=f.navigator&&/Macintosh/.test(navigator.userAgent)&&/AppleWebKit/.test(navigator.userAgent)&&!/Safari/.test(navigator.userAgent),s=f.saveAs||(typeof window!="object"||window!==f?function(){}:"download"in HTMLAnchorElement.prototype&&!p?function(r,a,v){var t=f.URL||f.webkitURL,i=document.createElement("a");a=a||r.name||"download",i.download=a,i.rel="noopener",typeof r=="string"?(i.href=r,i.origin===location.origin?x(i):j(i.href)?m(r,a,v):x(i,i.target="_blank")):(i.href=t.createObjectURL(r),setTimeout(function(){t.revokeObjectURL(i.href)},4e4),setTimeout(function(){x(i)},0))}:"msSaveOrOpenBlob"in navigator?function(r,a,v){if(a=a||r.name||"download",typeof r!="string")navigator.msSaveOrOpenBlob(c(r,v),a);else if(j(r))m(r,a,v);else{var t=document.createElement("a");t.href=r,t.target="_blank",setTimeout(function(){x(t)})}}:function(r,a,v,t){if(t=t||open("","_blank"),t&&(t.document.title=t.document.body.innerText="downloading..."),typeof r=="string")return m(r,a,v);var i=r.type==="application/octet-stream",R=/constructor/i.test(f.HTMLElement)||f.safari,w=/CriOS\/[\d]+/.test(navigator.userAgent);if((w||i&&R||p)&&typeof FileReader!="undefined"){var A=new FileReader;A.onloadend=function(){var g=A.result;g=w?g:g.replace(/^data:[^;]*;/,"data:attachment/file;"),t?t.location.href=g:location=g,t=null},A.readAsDataURL(r)}else{var D=f.URL||f.webkitURL,Z=D.createObjectURL(r);t?t.location=Z:location.href=Z,t=null,setTimeout(function(){D.revokeObjectURL(Z)},4e4)}});f.saveAs=s.saveAs=s,B.exports=s})}}]);
