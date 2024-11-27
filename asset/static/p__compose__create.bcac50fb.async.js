"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1102],{91058:function(ee,x,n){var R=n(5574),l=n.n(R),N=n(89035),h=n(38345),g=n(17186),A=n(24739),D=n(5966),F=n(42075),y=n(14726),K=n(85576),j=n(67294),T=n(95089),w=n(89063),E=n(85893),b="docker-image",$=(0,j.forwardRef)(function(f,Z){var W=(0,j.useState)(b),M=l()(W,2),P=M[0],B=M[1],c=(0,j.useRef)(),S=(0,j.useState)(""),I=l()(S,2),z=I[0],V=I[1],H=function(){P!="code"?B("code"):B(b)};(0,j.useImperativeHandle)(Z,function(){return{addEnvItem:function(t,o){var p,e=(p=c.current)===null||p===void 0?void 0:p.getList(),r=!1;if(e==null||e.map(function(G){if(G.name==t){r=!0;return}}),!r){var Q;(Q=c.current)===null||Q===void 0||Q.add({name:t,value:o})}},clear:function(){var t;(t=c.current)===null||t===void 0||(t=t.getList())===null||t===void 0||t.map(function(o,p){var e;(e=c.current)===null||e===void 0||e.remove(p)})}}});function k(C){try{var t,o;C==""&&(C=J());for(var p=(t=(o=c.current)===null||o===void 0||(o=o.getList())===null||o===void 0?void 0:o.length)!==null&&t!==void 0?t:0,e=p;e>=0;e--){var r;(r=c.current)===null||r===void 0||r.remove(e)}var Q=C.split(`
`),G=0;Q.map(function(Y){var q,X=Y.split("=");X.length<2||((q=c.current)===null||q===void 0||q.add({name:X[0],value:X.slice(1).join("=")},G),G++)})}catch(Y){console.log(Y)}}function J(){if(c&&c.current&&c.current.getList){var C,t=(C=c.current)===null||C===void 0?void 0:C.getList();if(t){var o=[];return t.map(function(p){o.push("".concat(p.name,"=").concat(p.value))}),o.join(`
`)}else return""}else return""}return(0,E.jsxs)(h.Z,{ghost:f.showCardGhost,title:f.label?f.label:null,headerBordered:!0,extra:(f.showCodeMode||f.showImportButton)&&(0,E.jsxs)(F.Z,{children:[f.showImportButton&&(0,E.jsx)("div",{style:{marginBottom:"-25px"},children:(0,E.jsx)(w.Z,{title:"\u5BFC\u5165 env \u6587\u4EF6",onImport:function(t){return k(t),!0},onLoad:function(t){if(t.indexOf("=")<0)throw new Error("\u5BFC\u5165env\u6587\u4EF6\u9519\u8BEF");return!0}})}),f.showCodeMode?(0,E.jsx)(y.ZP,{icon:(0,E.jsx)(N.Z,{}),type:P=="code"?"primary":"default",onClick:H,children:"\u4EE3\u7801\u6A21\u5F0F"},"code"):""]}),children:[(0,E.jsx)(g.u,{name:f.name?f.name:"environment",actionRef:c,creatorButtonProps:f.showAddButton?{creatorButtonText:"\u6DFB\u52A0\u5BB9\u5668\u73AF\u5883\u53D8\u91CF"}:!1,copyIconProps:!1,min:100,children:(0,E.jsxs)(A.UW,{children:[(0,E.jsx)(D.Z,{width:f.showInDrawer?"sm":"md",name:"name",label:"\u53D8\u91CF\u540D",required:!0,rules:[{required:!0}],disabled:f.showDisableName,placeholder:"\u8F93\u5165\u53D8\u91CF\u540D\u79F0"}),(0,E.jsx)(D.Z,{width:f.showInDrawer?"sm":"md",name:"value",label:"\u53D8\u91CF\u503C",rules:[{required:!!f.requireValue}],disabled:f.showDisableValue,placeholder:"\u8F93\u5165\u53D8\u91CF\u503C\uFF0C\u53EF\u4EE5\u4E3A\u7A7A"})]})}),(0,E.jsx)(K.Z,{width:"800px",open:P=="code",onCancel:function(){return B("docker-image")},onOk:function(){k(z),B("docker-image")},children:(0,E.jsx)(T.ZP,{onChange:function(t){return V(t)},value:J(),height:"680px",theme:"light"})})]})});x.Z=$},89063:function(ee,x,n){n.d(x,{Z:function(){return F}});var R=n(24963),l=n(88484),N=n(31418),h=n(72723),g=n(14726),A=n(67294),D=n(85893);function F(y){var K=(0,A.useContext)(R.Z),j=K.message,T=K.notice,w=K.lang,E=(0,A.useRef)(null),b=N.Z.useApp(),$=function(){E.current&&(E.current.click(),E.current.onchange=function(Z){if(!Z||!Z.target)return"";var W=new FileReader;W.onload=function(P){var B,c,S=(B=P.target)===null||B===void 0?void 0:B.result;if(y.onLoad)try{y.onLoad&&y.onLoad(S)}catch(I){T.error(I);return}typeof y.onImport=="function"&&y.onImport(S),(c=E.current)!==null&&c!==void 0&&c.value&&(E.current.value="")};var M=Z.target;if(M.files)try{W.readAsText(M.files[0])}catch(P){T.error("\u5BFC\u5165\u6587\u4EF6\u5FC5\u987B\u662F\u6587\u672C\u7C7B\u578B")}})};return(0,D.jsxs)(D.Fragment,{children:[(0,D.jsx)(h.Z.Item,{name:"importFile",label:y.label,children:(0,D.jsx)(g.ZP,{icon:(0,D.jsx)(l.Z,{}),block:!0,onClick:$,children:y.title})}),(0,D.jsx)("input",{style:{display:"none"},type:"file",ref:E,name:"importFileInput"})]})}},24963:function(ee,x,n){var R=n(67294),l=(0,R.createContext)({});x.Z=l},33208:function(ee,x,n){n.r(x),n.d(x,{default:function(){return Q}});var R=n(64599),l=n.n(R),N=n(15009),h=n.n(N),g=n(99289),A=n.n(g),D=n(5574),F=n.n(D),y=n(91058),K=n(89063),j=n(24963),T=n(90098),w=n(45742),E=n(91806),b=n(27496),$=n(33862),f=n(90078),Z=n(97269),W=n(2236),M=n(38345),P=n(5966),B=n(86615),c=n(97462),S=n(95213),I=n(95089),z=n(54006),V=n(14726),H=n(25409),k=n(63490),J=n(42075),C=n(66309),t=n(38925),o=n(92398),p=n(91845),e=n(67294),r=n(85893);function Q(){var G=(0,e.useContext)(j.Z),Y=G.loading,q=G.notice,X=G.message,_e=(0,z.useNavigate)(),de=(0,e.useState)([]),re=F()(de,2),me=re[0],ce=re[1],te=(0,e.useRef)(),U=(0,e.useRef)(),pe=(0,z.useSearchParams)(),ae=F()(pe,2),he=ae[0],ge=ae[1],ve=(0,e.useState)(),ue=F()(ve,2),v=ue[0],Ee=ue[1],fe=(0,e.useState)(!1),se=F()(fe,2),oe=se[0],le=se[1],ne=function(){var O=A()(h()().mark(function s(a){var _,u;return h()().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:if(a.yaml){i.next=2;break}return i.abrupt("return");case 2:return(_=U.current)===null||_===void 0||_.setFieldValue("yaml",a.yaml),ie(a.yaml),i.next=6,(0,T.xC)({yaml:a.yaml});case 6:if(u=i.sent,!(!u||!u.data||!u.data.project)){i.next=10;break}return q.error(u.data.error),i.abrupt("return");case 10:u.data.project&&ce(Object.keys(u.data.project.services).map(function(m,Ce){var L=u.data.project.services[m];return L.name=m,L}));case 11:case"end":return i.stop()}},s)}));return function(a){return O.apply(this,arguments)}}(),ie=function(s){if(!(!s||s=="")){var a=s.matchAll(/\$\{(\w+)[:-]?(.*)\}/g),_=l()(a),u;try{for(_.s();!(u=_.n()).done;){var d,i=u.value;(d=te.current)===null||d===void 0||d.addEnvItem(i[1],i[2]?i[2].indexOf("-")==0?i[2].substring(1):i[2]:"")}}catch(m){_.e(m)}finally{_.f()}}};return(0,e.useEffect)(function(){var O=he.get("id");O&&(Y.show(),(0,T.CT)({id:parseInt(O)}).then(function(s){var a,_,u;if(Ee(s.data.detail),s.data.detail.setting.type==""&&(s.data.detail.setting.type="text"),(a=U.current)===null||a===void 0||a.setFieldsValue({name:s.data.detail.name,title:s.data.detail.title,type:s.data.detail.setting.type,yaml:(_=s.data.yaml[0])!==null&&_!==void 0?_:"",yamlOverride:(u=s.data.yaml[1])!==null&&u!==void 0?u:"",environment:s.data.detail.setting.environment}),s.data.detail.setting.type=="remoteUrl"){var d;(d=U.current)===null||d===void 0||d.setFieldValue("remoteUrl",s.data.detail.setting.remoteUrl)}else if(s.data.detail.setting.type=="storagePath"){var i;(i=U.current)===null||i===void 0||i.setFieldValue("storagePath","/dpanel/compose/"+s.data.detail.setting.uri[0])}if(s.data.yaml){var m;ne({yaml:(m=s.data.yaml[0])!==null&&m!==void 0?m:""})}}).finally(function(){Y.destroy()}))},[]),(0,r.jsx)(f._z,{header:{extra:[(0,r.jsx)(z.Link,{to:"/compose/create",reloadDocument:location.search.length>0,children:(0,r.jsx)(V.ZP,{type:"primary",children:"\u521B\u5EFA\u4EFB\u52A1"},"createCompose")},"create")]},children:(0,r.jsx)(Z.A,{submitter:{render:function(s,a){return(0,r.jsx)(W.S,{children:a})}},formRef:U,onFinishFailed:function(s){le(!1)},onFinish:function(){var O=A()(h()().mark(function s(a){var _,u,d;return h()().wrap(function(m){for(;;)switch(m.prev=m.next){case 0:return _={type:a.type,name:a.name,title:a.title,environment:a.environment,remoteUrl:a.remoteUrl,yaml:a.yaml,yamlOverride:a.yamlOverride},v!=null&&v.id&&(_.id=v.id),m.next=4,(0,T.im)(_);case 4:if(u=m.sent,!u.data.id){m.next=9;break}return(d=U.current)===null||d===void 0||d.resetFields(),_e("/compose/deploy/"+u.data.id),m.abrupt("return",!0);case 9:return m.abrupt("return",!1);case 10:case"end":return m.stop()}},s)}));return function(s){return O.apply(this,arguments)}}(),children:(0,r.jsx)(M.Z,{split:"vertical",children:(0,r.jsxs)(H.Z,{children:[(0,r.jsx)(H.Z.Panel,{resizable:!1,size:oe?"0%":"45%",children:(0,r.jsxs)(M.Z,{split:"horizontal",children:[(0,r.jsxs)(M.Z,{title:(0,r.jsx)(w.Z,{}),subTitle:"\u57FA\u7840\u4FE1\u606F",children:[(0,r.jsx)(P.Z,{label:"\u7AD9\u70B9\u540D\u79F0",name:"title",fieldProps:{onChange:function(s){var a="";if(s.target.value&&!v){var _,u=(0,p.N9)(s.target.value.trim(),{toneType:"none",type:"array"});a=u.join(""),(_=U.current)===null||_===void 0||_.setFieldValue("name",a)}}}}),(0,r.jsx)(P.Z,{label:"\u7AD9\u70B9\u6807\u8BC6",name:"name",required:!0,rules:[{required:!0}],disabled:!!v,placeholder:"\u6807\u8BC6Compose\u521B\u5EFA\u7684\u5BB9\u5668\u7EC4\uFF0C\u53EA\u5141\u8BB8\u4E3A\u82F1\u6587\u6216\u662F\u6570\u5B57"}),(0,r.jsx)(B.Z.Group,{label:"Yaml \u6765\u6E90",name:"type",initialValue:"text",fieldProps:{defaultValue:"text",onChange:function(){}},options:[{label:"yaml",value:"text",disabled:v&&v.setting.type!="text"},{label:"\u8FDC\u7A0B\u5730\u5740",value:"remoteUrl",disabled:v&&(v==null?void 0:v.setting.type)!="remoteUrl"},{label:"\u81EA\u52A8\u53D1\u73B0",value:"storagePath",disabled:v&&(v==null?void 0:v.setting.type)!="storagePath"},{label:"\u5E94\u7528\u5546\u5E97",value:"store",disabled:v&&(v==null?void 0:v.setting.type)!="store"}]}),(0,r.jsx)(c.Z,{name:["type"],children:function(s){var a=s.type;if(a=="text")return(0,r.jsx)(K.Z,{title:"\u5BFC\u5165\u672C\u5730 compose \u6587\u4EF6",onImport:function(u){return ne({yaml:u}),!0},onLoad:function(u){if(u.indexOf("services:")<0)throw new Error("\u5BFC\u5165\u7684compose\u6587\u4EF6\u9519\u8BEF");return!0}});if(a=="remoteUrl")return(0,r.jsx)(P.Z,{label:"",required:!0,rules:[{required:!0}],name:"remoteUrl",placeholder:"\u8BF7\u8F93\u5165\u8FDC\u7A0B docker-compose.yaml \u94FE\u63A5",fieldProps:{onBlur:function(){var _=A()(h()().mark(function d(i){var m;return h()().wrap(function(L){for(;;)switch(L.prev=L.next){case 0:if(i.target.value){L.next=2;break}return L.abrupt("return");case 2:return Y.show(),L.next=5,(0,T.MG)({uri:i.target.value});case 5:m=L.sent,Y.destroy(),m&&m.data&&m.data.content&&ne({yaml:m.data.content});case 8:case"end":return L.stop()}},d)}));function u(d){return _.apply(this,arguments)}return u}()}});if(a=="storagePath")return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(P.Z,{name:"storagePath",required:!0,readonly:!0,initialValue:v?"".concat(v.setting.uri[0]):"\u6302\u8F7D /dpanel/compose \u76EE\u5F55\u540E\uFF0C\u81EA\u52A8\u53D1\u73B0\u3002",rules:[{required:!0,message:"\u6302\u8F7D /dpanel/compose \u76EE\u5F55\u540E\uFF0C\u81EA\u52A8\u53D1\u73B0\u3002"}]})});if(a=="store")return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(P.Z,{readonly:!0,name:"store",required:!0,initialValue:v?"".concat(v.setting.store):"\u8BF7\u5148\u6DFB\u52A0\u5E94\u7528\u5546\u5E97\u540E\uFF0C\u5728\u5E94\u7528\u5546\u5E97\u91CC\u5B8C\u6210\u5B89\u88C5",rules:[{required:!0,message:"\u8BF7\u5148\u6DFB\u52A0\u5E94\u7528\u5546\u5E97\u540E\uFF0C\u5728\u5E94\u7528\u5546\u5E97\u91CC\u5B8C\u6210\u5B89\u88C5"}]})})}})]}),(0,r.jsx)(M.Z,{title:(0,r.jsx)(E.Z,{}),subTitle:"\u670D\u52A1\u5217\u8868",children:(0,r.jsx)(k.Z,{dataSource:me,rowKey:"name",pagination:!1,columns:[{title:"\u540D\u79F0",dataIndex:"name"},{title:"\u955C\u50CF",dataIndex:"image"},{title:"\u7AEF\u53E3",dataIndex:"ports",render:function(s,a,_){return a.ports&&a.ports.map(function(u,d){return(0,r.jsx)(J.Z,{size:"large",wrap:!0,children:(0,r.jsxs)(C.Z,{color:"#2db7f5",icon:u.published?(0,r.jsx)(b.Z,{}):"",style:{marginBottom:5},children:[u.published," : ",u.target]})},"space".concat(d))})}},{title:"\u4F9D\u8D56",dataIndex:"dependsOn",width:150,render:function(s,a,_){if(a.depends_on)return(0,r.jsx)(J.Z,{wrap:!0,children:Object.keys(a.depends_on).map(function(u){var d=u;return a.external_links&&a.external_links.map(function(i){i.indexOf(":"+u)>-1&&(d=i)}),d})})}}]})}),(0,r.jsxs)(M.Z,{title:(0,r.jsx)($.Z,{}),subTitle:"\u73AF\u5883\u53D8\u91CF",children:[(0,r.jsx)(c.Z,{name:["environment"],children:function(s){var a=s.environment;if(!a||a.length==0)return(0,r.jsx)(t.Z,{message:(0,r.jsxs)(r.Fragment,{children:["\u5728 compose.yaml \u4E2D\u58F0\u660E\u73AF\u5883\u53D8\u91CF\uFF0C\u4F8B\u5982\uFF1A","${DB_NAME}"," ",(0,r.jsx)("br",{}),"\u5728\u90E8\u7F72\u65F6\u53EF\u6839\u636E\u60C5\u51B5\u8FDB\u884C\u91CD\u65B0\u8D4B\u503C\u3002"]})})}}),(0,r.jsx)(y.Z,{name:"environment",showDisableName:!0,requireValue:!0,showInDrawer:!0,showCardGhost:!0,ref:te})]})]})}),(0,r.jsx)(H.Z.Panel,{children:(0,r.jsx)(M.Z,{children:(0,r.jsx)(o.Z,{tabBarExtraContent:(0,r.jsx)(V.ZP,{type:"link",onClick:function(){le(!oe)},children:"\u5168\u5C4F"}),items:[{label:"Yaml \u6587\u4EF6",key:"compose",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(P.Z,{name:"yaml",hidden:!0}),(0,r.jsx)(c.Z,{name:["type","yaml"],children:function(s){var a=s.type,_=s.yaml;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)(I.ZP,{theme:"dark",minHeight:"550px",onFocus:function(){if(a=="remoteUrl"){X.info("\u8FDC\u7A0Byaml\u6587\u4EF6\u65E0\u6CD5\u4FEE\u6539\uFF0C\u8BF7\u901A\u8FC7\u3010\u8986\u76D6 yaml \u6587\u4EF6\u3011\u7684\u65B9\u5F0F\u4FEE\u6539\u5185\u5BB9\u3002");return}if(a=="store"){X.info("\u4E3A\u4E86\u4FDD\u8BC1\u5546\u5E97\u4E2D\u7684 compose.yaml \u6587\u4EF6\u53EF\u4EE5\u968F\u65F6\u66F4\u65B0\uFF0C\u8BF7\u901A\u8FC7\u3010\u8986\u76D6 yaml \u6587\u4EF6\u3011\u7684\u65B9\u5F0F\u4FEE\u6539\u5185\u5BB9\u3002");return}},onChange:function(d,i){var m;(m=U.current)===null||m===void 0||m.setFieldValue("yaml",d)},onBlur:function(){var d;ne({yaml:(d=U.current)===null||d===void 0?void 0:d.getFieldValue("yaml")})},readOnly:a=="remoteUrl"||a=="store",value:_,extensions:[S.RI.yaml()]})})}})]})},{label:"\u8986\u76D6 Yaml \u6587\u4EF6",key:"override",children:(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.Z,{style:{marginBottom:20},message:(0,r.jsxs)(r.Fragment,{children:["\u8986\u76D6\u6587\u4EF6\uFF0C\u5141\u8BB8\u4F60\u5728\u4E0D\u6539\u52A8\u539F\u59CB Yaml \u6587\u4EF6\u7684\u60C5\u51B5\u4E0B\uFF0C\u8986\u76D6\u539F\u59CB\u6587\u4EF6\u4E2D\u7684\u4E00\u4E9B\u53C2\u6570\u914D\u7F6E\u3002",(0,r.jsx)("a",{href:"https://dpanel.cc/#/zh-cn/manual/compose/override",target:"_blank",children:"\u5982\u4F55\u914D\u7F6E\uFF1F"})]})}),(0,r.jsx)(P.Z,{name:"yamlOverride",hidden:!0}),(0,r.jsx)(c.Z,{name:["yamlOverride"],children:function(s){var a=s.yamlOverride;return(0,r.jsx)(I.ZP,{theme:"dark",minHeight:"550px",onChange:function(u,d){var i;(i=U.current)===null||i===void 0||i.setFieldValue("yamlOverride",u)},value:a,onBlur:function(){var u;ie((u=U.current)===null||u===void 0?void 0:u.getFieldValue("yamlOverride"))},extensions:[S.RI.yaml()]})}})]})}]})})})]})})},"create")})}},90098:function(ee,x,n){n.d(x,{CT:function(){return T},GG:function(){return M},MG:function(){return z},Oh:function(){return $},Pn:function(){return K},U_:function(){return S},VN:function(){return B},iE:function(){return J},ik:function(){return E},im:function(){return A},mg:function(){return Z},pm:function(){return F},xC:function(){return H}});var R=n(15009),l=n.n(R),N=n(99289),h=n.n(N),g=n(54006);function A(t){return D.apply(this,arguments)}function D(){return D=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/create",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),D.apply(this,arguments)}function F(t){return y.apply(this,arguments)}function y(){return y=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/get-list",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),y.apply(this,arguments)}function K(t){return j.apply(this,arguments)}function j(){return j=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/get-task",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),j.apply(this,arguments)}function T(t){return w.apply(this,arguments)}function w(){return w=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/get-detail",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),w.apply(this,arguments)}function E(t){return b.apply(this,arguments)}function b(){return b=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/delete",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),b.apply(this,arguments)}function $(t){return f.apply(this,arguments)}function f(){return f=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/container-deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),f.apply(this,arguments)}function Z(t){return W.apply(this,arguments)}function W(){return W=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/container-destroy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),W.apply(this,arguments)}function M(t){return P.apply(this,arguments)}function P(){return P=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/container-ctrl",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),P.apply(this,arguments)}function B(t){return c.apply(this,arguments)}function c(){return c=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/container-log",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),c.apply(this,arguments)}function S(t){return I.apply(this,arguments)}function I(){return I=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/container-process-kill",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),I.apply(this,arguments)}function z(t){return V.apply(this,arguments)}function V(){return V=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/get-from-uri",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),V.apply(this,arguments)}function H(t){return k.apply(this,arguments)}function k(){return k=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/app/compose/parse",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),k.apply(this,arguments)}function J(t){return C.apply(this,arguments)}function C(){return C=h()(l()().mark(function t(o){return l()().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,g.request)("/api/common/store/deploy",{method:"POST",data:o}));case 1:case"end":return e.stop()}},t)})),C.apply(this,arguments)}}}]);
