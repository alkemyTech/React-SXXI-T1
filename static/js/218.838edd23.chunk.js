"use strict";(self.webpackChunkong_client=self.webpackChunkong_client||[]).push([[218],{3245:function(e,r,n){n(2791);r.Z=n.p+"static/media/facebookIcon2.8ed0b41dbf39bd4dd18fee27a8f3fcb8.svg"},5153:function(e,r,n){n(2791);r.Z=n.p+"static/media/linkedin2.0f40d9ce2bc45fc1f63eb2c503ccb80d.svg"},218:function(e,r,n){n.r(r),n.d(r,{default:function(){return P}});var t,a,s,i=n(4165),c=n(5861),o=n(885),l=n(5271),d=n(2791),u=n(2580),f=n(2692),m=n(3312),x=n(822),b=n(168),p=n(6444),g=p.ZP.div(t||(t=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 2rem;\n  margin: 2rem 0;\n"]))),h=p.ZP.div(a||(a=(0,b.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  margin: 0 0 3rem;\n"]))),Z=n(9743),v=n(9140),j=p.ZP.img(s||(s=(0,b.Z)(["\n    height: 30px;\n    width: 30px;\n    margin-right: 30px;\n"]))),k=n(5153),y=n(3245),w=n(8228),N=n(184),C=function(){var e=function(){var e=(0,d.useState)([]),r=(0,o.Z)(e,2),n=r[0],t=r[1],a=(0,d.useState)(!1),s=(0,o.Z)(a,2),x=s[0],b=s[1],p=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var r,n,a;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,f.Z.get(u.S.member);case 4:if(!(r=e.sent)||r.success){e.next=7;break}throw new Error(r.message);case 7:n=r.data,a=n.map((function(e){return{id:e.id,image:e.image,name:e.name,description:e.description,fecabookUrl:e.fecabookUrl,linkedinUrl:e.linkedinUrl}})),t(a),b(!1),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),(0,l.w)("center","error",m.x.problemExistTryLater);case 16:return e.prev=16,b(!1),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[0,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){p()}),[]),{membersData:n,loadingMembers:x,fetchMembers:p}}(),r=e.membersData,n=e.loadingMembers,t=(0,w.q)().textSkeleton;return(0,N.jsx)("div",{className:"container my-5",children:(0,N.jsx)(Z.Z,{xs:1,md:2,lg:3,className:"g-4",children:(0,N.jsx)(N.Fragment,{children:n?(0,N.jsxs)(N.Fragment,{children:[t,t,t,t]}):(0,N.jsx)(N.Fragment,{children:r.map((function(e){return(0,N.jsxs)(v.Z,{children:[(0,N.jsx)(v.Z.Img,{src:e.image,alt:e.name,height:280,className:"card-img-bg "}),(0,N.jsxs)(v.Z.ImgOverlay,{className:"col-8 mx-auto",children:[(0,N.jsx)(v.Z.Title,{className:"text-center fw-bold bg-light bg-opacity-75 py-2 mt-5",children:e.name}),(0,N.jsx)("p",{className:"text-center fw-bold bg-light bg-opacity-75 py-2 mb-3",dangerouslySetInnerHTML:{__html:e.description}}),(0,N.jsxs)(v.Z.Text,{className:"text-center",children:[(0,N.jsx)("a",{href:e.facebookUrl,target:"_blank",rel:"noopener noreferrer",children:(0,N.jsx)(j,{src:y.Z,alt:"icono de Twitter"})}),(0,N.jsx)("a",{href:e.linkedinUrl,target:"_blank",rel:"noopener noreferrer",children:(0,N.jsx)(j,{src:k.Z,alt:"icono de Twitter"})})]})]})]},e.id)}))})})})})},P=function(){var e=function(){var e=(0,d.useState)({longDescription:""}),r=(0,o.Z)(e,2),n=r[0],t=r[1],a=(0,d.useState)(!0),s=(0,o.Z)(a,2),x=s[0],b=s[1],p=function(){var e=(0,c.Z)((0,i.Z)().mark((function e(){var r;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,b(!0),e.next=4,f.Z.get(u.S.organization);case 4:if(!(r=e.sent)||r.success){e.next=7;break}throw new Error(r.message);case 7:t({longDescription:r.data.long_description}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),(0,l.w)("center","error",m.x.problemExistTryLater);case 13:return e.prev=13,b(!1),e.finish(13);case 16:case"end":return e.stop()}}),e,null,[[0,10,13,16]])})));return function(){return e.apply(this,arguments)}}();return(0,d.useEffect)((function(){p()}),[]),{loadingAbout:x,aboutData:n,fetchAbout:p}}(),r=e.loadingAbout,n=e.aboutData,t=(0,w.q)(),a=t.titleSkeleton,s=t.textSkeleton;return(0,N.jsxs)(g,{children:[(0,N.jsx)("div",{children:(0,N.jsx)(x.c,{title:"Nosotros",wrapTitleClass:"d-block h-auto",justify:"center"})}),(0,N.jsx)(h,{className:"mb-5",children:r?(0,N.jsx)(N.Fragment,{children:s}):(0,N.jsx)("p",{children:n.longDescription})}),(0,N.jsx)("div",{children:""!==n.title?(0,N.jsx)(x.c,{title:"Lista de miembros",justify:"center",wrapTextClass:"text-center",wrapTitleClass:"h-auto"}):(0,N.jsx)(N.Fragment,{children:a})}),(0,N.jsx)(C,{})]})}},9140:function(e,r,n){n.d(r,{Z:function(){return E}});var t=n(1413),a=n(5987),s=n(1694),i=n.n(s),c=n(2791),o=n(162),l=n(6543),d=n(3689),u=n(184),f=["bsPrefix","className","variant","as"],m=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,c=e.variant,l=e.as,d=void 0===l?"img":l,m=(0,a.Z)(e,f),x=(0,o.vE)(n,"card-img");return(0,u.jsx)(d,(0,t.Z)({ref:r,className:i()(c?"".concat(x,"-").concat(c):x,s)},m))}));m.displayName="CardImg";var x=m,b=n(6040),p=["bsPrefix","className","as"],g=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,l=e.as,d=void 0===l?"div":l,f=(0,a.Z)(e,p),m=(0,o.vE)(n,"card-header"),x=(0,c.useMemo)((function(){return{cardHeaderBsPrefix:m}}),[m]);return(0,u.jsx)(b.Z.Provider,{value:x,children:(0,u.jsx)(d,(0,t.Z)((0,t.Z)({ref:r},f),{},{className:i()(s,m)}))})}));g.displayName="CardHeader";var h=g,Z=["bsPrefix","className","bg","text","border","body","children","as"],v=(0,d.Z)("h5"),j=(0,d.Z)("h6"),k=(0,l.Z)("card-body"),y=(0,l.Z)("card-title",{Component:v}),w=(0,l.Z)("card-subtitle",{Component:j}),N=(0,l.Z)("card-link",{Component:"a"}),C=(0,l.Z)("card-text",{Component:"p"}),P=(0,l.Z)("card-footer"),T=(0,l.Z)("card-img-overlay"),S=c.forwardRef((function(e,r){var n=e.bsPrefix,s=e.className,c=e.bg,l=e.text,d=e.border,f=e.body,m=e.children,x=e.as,b=void 0===x?"div":x,p=(0,a.Z)(e,Z),g=(0,o.vE)(n,"card");return(0,u.jsx)(b,(0,t.Z)((0,t.Z)({ref:r},p),{},{className:i()(s,g,c&&"bg-".concat(c),l&&"text-".concat(l),d&&"border-".concat(d)),children:f?(0,u.jsx)(k,{children:m}):m}))}));S.displayName="Card",S.defaultProps={body:!1};var E=Object.assign(S,{Img:x,Title:y,Subtitle:w,Body:k,Link:N,Text:C,Header:h,Footer:P,ImgOverlay:T})},6040:function(e,r,n){var t=n(2791).createContext(null);t.displayName="CardHeaderContext",r.Z=t},3689:function(e,r,n){var t=n(1413),a=n(2791),s=n(1694),i=n.n(s),c=n(184);r.Z=function(e){return a.forwardRef((function(r,n){return(0,c.jsx)("div",(0,t.Z)((0,t.Z)({},r),{},{ref:n,className:i()(r.className,e)}))}))}}}]);
//# sourceMappingURL=218.838edd23.chunk.js.map