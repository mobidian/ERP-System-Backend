import{f as B,i as E,h as T,k as G,v as W,w as Y,l as K,r as g,n as Q,F as U,x as S,y as X,j as e,m as t,z as v,B as p,R as Z,p as ee,G as A,C as x,L as a,D as l,E as I,H as D,M,o as R,N as te,O as ie}from"./index-c8bae790.js";import{d as ne,S as ae,L as r,a as n,b as o}from"./ArrowForwardIos-70876827.js";import{d as $}from"./Home-0d758b68.js";import{A as H}from"./Avatar-7fdbe891.js";var P={},se=E;Object.defineProperty(P,"__esModule",{value:!0});var k=P.default=void 0,le=se(B()),re=T,oe=(0,le.default)((0,re.jsx)("path",{d:"m22 3-1.67 1.67L18.67 3 17 4.67 15.33 3l-1.66 1.67L12 3l-1.67 1.67L8.67 3 7 4.67 5.33 3 3.67 4.67 2 3v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V3zM11 19H4v-6h7v6zm9 0h-7v-2h7v2zm0-4h-7v-2h7v2zm0-4H4V8h16v3z"}),"Newspaper");k=P.default=oe;var _={},de=E;Object.defineProperty(_,"__esModule",{value:!0});var C=_.default=void 0,ce=de(B()),he=T,ue=(0,ce.default)((0,he.jsx)("path",{d:"M22 16V4c0-1.1-.9-2-2-2H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2zm-11-4 2.03 2.71L16 11l4 5H8l3-4zM2 6v14c0 1.1.9 2 2 2h14v-2H4V6H2z"}),"Collections");C=_.default=ue;const pe=({avatar:s,name:m})=>{const d=G(i=>i),w=W(),q=Y(),{t:c}=K(),N=()=>{q(te()),w("/login")},[y,j]=g.useState(null),h=!!y,L=i=>{j(i.currentTarget)},u=()=>{j(null)},[z,O]=g.useState({top:!1,left:!1,bottom:!1,right:!1}),f=(i,V)=>b=>{b.type==="keydown"&&(b.key==="Tab"||b.key==="Shift")||O({...z,[i]:V})},F=i=>e(p,{role:"presentation",onKeyDown:f(i,!1),children:t(A,{container:!0,direction:"column",justifyContent:"space-around",alignItems:"flex-start",sx:{width:200,height:"calc(100vh - 60px)",display:{xs:"flex",md:"none"}},children:[t(x,{sx:{width:"100%"},children:[e(a,{to:"uploadPost",className:"link",children:e(r,{disablePadding:!0,children:t(n,{sx:{pr:5},children:[e(l,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(k,{})}),e(o,{primary:"Yangilik Joylash"})]})})}),e(a,{to:"uploadGallery",className:"link",children:e(r,{disablePadding:!0,children:t(n,{sx:{pr:5},children:[e(l,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(C,{})}),e(o,{primary:"Rasim Joylash"})]})})}),e(a,{to:"/news",className:"link",children:e(r,{disablePadding:!0,children:t(n,{children:[e(l,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e($,{})}),e(o,{primary:"Profile"})]})})})]}),e(I,{}),e(x,{sx:{width:"100%"},children:t(p,{sx:{flexGrow:1},children:[e(r,{disablePadding:!0,sx:{display:"block"},children:t(n,{id:"basic-button","aria-controls":h?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":h?"true":void 0,onClick:L,children:[e(l,{children:e(D,{title:"Sozlamalarni oching",children:e(H,{src:s,sx:{width:40,height:40}})})}),e(o,{primary:m})]})}),t(M,{sx:{textAlign:"center"},id:"basic-menu",anchorEl:y,open:h,onClose:u,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(n,{children:e(a,{className:"link",onClick:u,to:"updateProfile",children:c("profile_update")})}),e(n,{children:e(a,{className:"link",onClick:u,to:"updatePassword",children:c("password_update")})}),e(n,{onClick:N,children:e(R,{color:"error",children:c("logout")})})]})]})})]})}),J=Q(U)(({theme:i})=>({color:i.palette.getContrastText(S[500]),backgroundColor:X[700],"&:hover":{backgroundColor:S[900]}}));return g.useEffect(()=>{d.news.isAuthenticated||w("/login")},[d.news.isAuthenticated]),e("div",{children:d.news.isAuthenticated?t(v,{children:[e(p,{sx:{zIndex:"99",height:40,display:{xs:"block",md:"none"},position:"fixed",top:"50%",left:0},children:["left"].map(i=>t(Z.Fragment,{children:[e(ee,{className:"box",onClick:f(i,!0),children:e(J,{size:"small",children:e(ne,{})})}),e(ae,{PaperProps:{className:"shadows"},anchor:i,open:z[i],onClose:f(i,!1),onOpen:f(i,!0),children:d.news.isAuthenticated&&e(v,{children:F("left")})})]},i))}),e(p,{sx:{height:"calc(100vh - 60px)"},children:t(A,{position:"fixed",container:!0,direction:"column",justifyContent:"space-around",alignItems:"flex-start",className:"shadows",sx:{left:0,width:200,height:"calc(100vh - 60px)",display:{xs:"none",md:"flex"}},children:[t(x,{sx:{width:"100%"},children:[e(a,{to:"uploadPost",className:"link",children:e(r,{disablePadding:!0,children:t(n,{sx:{pr:5},children:[e(l,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(k,{})}),e(o,{primary:"Yangilik Joylash"})]})})}),e(a,{to:"uploadGallery",className:"link",children:e(r,{disablePadding:!0,children:t(n,{sx:{pr:5},children:[e(l,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e(C,{})}),e(o,{primary:"Rasim Joylash"})]})})}),e(a,{to:"/news",className:"link",children:e(r,{disablePadding:!0,children:t(n,{children:[e(l,{sx:{minWidth:0,mr:3,justifyContent:"center"},children:e($,{})}),e(o,{primary:"Profile"})]})})})]}),e(I,{}),e(x,{sx:{width:"100%"},children:t(p,{sx:{flexGrow:1},children:[e(r,{disablePadding:!0,sx:{display:"block"},children:t(n,{id:"basic-button","aria-controls":h?"basic-menu":void 0,"aria-haspopup":"true","aria-expanded":h?"true":void 0,onClick:L,children:[e(l,{children:e(D,{title:"Sozlamalarni oching",children:e(H,{src:s,sx:{width:40,height:40}})})}),e(o,{primary:m})]})}),t(M,{sx:{textAlign:"center"},id:"basic-menu",anchorEl:y,open:h,onClose:u,MenuListProps:{"aria-labelledby":"basic-button"},children:[e(n,{children:e(a,{className:"link",onClick:u,to:"updateProfile",children:c("profile_update")})}),e(n,{children:e(a,{className:"link",onClick:u,to:"updatePassword",children:c("password_update")})}),e(n,{onClick:N,children:e(R,{color:"error",children:c("logout")})})]})]})})]})})]}):w("/login")})},ve=()=>{const s=G(d=>d),m=W();return g.useEffect(()=>{s.news.isAuthenticated||m("/login")},[s.news.isAuthenticated]),e(v,{children:s.news.isAuthenticated?t(v,{children:[e(p,{sx:{width:{xs:0,md:270}},children:e(pe,{avatar:s.news.news.news.avatar,name:s.news.news.news.name})}),e(ie,{})]}):m("/login")})};export{ve as default};