(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{112:function(e,t,c){},114:function(e,t,c){},115:function(e,t,c){},116:function(e,t,c){},117:function(e,t,c){},127:function(e,t,c){},128:function(e,t,c){},129:function(e,t,c){},131:function(e,t,c){},132:function(e,t,c){},151:function(e,t,c){"use strict";c.r(t);var a=c(0),n=c.n(a),s=c(10),r=c.n(s),i=(c(112),c(42)),o=c(14),l=c.n(o),j=c(31),d=c(12),u=(c(114),c(19)),h=c(16),b=(c(115),c(116),c(195)),x=(c(117),c(188)),O=c(5),m=c(204),p=c(201),f=c(194),v=c(193),g=c(197),N=c(203),y=c(202),S=c(1),w=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(2)},root:{width:300+2*e.spacing(3)},margin:{height:e.spacing(3)}}}));function k(e){var t=e.children,c=e.open,a=e.value;return Object(S.jsx)(y.a,{open:c,enterTouchDelay:0,placement:"top",title:a,children:t})}var F=Object(O.a)({root:{color:"#3e930a",height:3,width:300,padding:"13px 0"},thumb:{height:27,width:27,backgroundColor:"#fff",border:"1px solid currentColor",marginTop:-12,marginLeft:-13,boxShadow:"#ebebeb 0 2px 2px","&:focus, &:hover, &$active":{boxShadow:"#ccc 0 2px 3px 1px"},"& .bar":{height:9,width:1,backgroundColor:"currentColor",marginLeft:1,marginRight:1}},active:{},valueLabel:{left:"calc(-50% + 12px)",top:-22,"& *":{background:"transparent",color:"#000"}},track:{height:3},rail:{color:"#d8d8d8",opacity:1,height:3}})(N.a);function C(e){return Object(S.jsxs)("span",Object(i.a)(Object(i.a)({},e),{},{children:[Object(S.jsx)("span",{className:"bar"}),Object(S.jsx)("span",{className:"bar"}),Object(S.jsx)("span",{className:"bar"})]}))}var _=function(e){var t=e.filterSearch,c=(e.loading,w()),n=Object(h.f)(),s=Object(a.useState)(1),r=Object(d.a)(s,2),i=r[0],o=r[1],l=Object(a.useState)(1),j=Object(d.a)(l,2),u=j[0],x=j[1],O=Object(a.useState)(1),N=Object(d.a)(O,2),y=N[0],_=N[1],L=Object(a.useState)(1),M=Object(d.a)(L,2),B=M[0],z=M[1],E=Object(a.useState)([100,400]),T=Object(d.a)(E,2),A=T[0],D=T[1],I=function(e){e.preventDefault(),t(i,u,y,B,A),n.push("/search",{from:"Home"})};return Object(S.jsx)("div",{className:"search",children:Object(S.jsxs)("div",{className:"parameters",children:[Object(S.jsx)("div",{className:"form-items",children:Object(S.jsxs)(v.a,{className:c.formControl,onSubmit:I,children:[Object(S.jsx)(m.a,{htmlFor:"min_guests",id:"min-guests",children:"Min. Guests"}),Object(S.jsxs)(g.a,{labelId:"min-guests",id:"min-guests",value:i,onChange:function(e){o(e.target.value)},children:[Object(S.jsx)(p.a,{value:1,children:"One"}),Object(S.jsx)(p.a,{value:2,children:"Two"}),Object(S.jsx)(p.a,{value:3,children:"Three"}),Object(S.jsx)(p.a,{value:4,children:"Four"}),Object(S.jsx)(p.a,{value:5,children:"Five"}),Object(S.jsx)(p.a,{value:6,children:"Six"}),Object(S.jsx)(p.a,{value:7,children:"Seven"}),Object(S.jsx)(p.a,{value:8,children:"Eight"}),Object(S.jsx)(p.a,{value:9,children:"Nine"})]}),Object(S.jsx)(f.a,{children:"Min. # of Guests"})]})}),Object(S.jsx)("div",{className:"form-items",children:Object(S.jsxs)(v.a,{className:c.formControl,onSubmit:I,children:[Object(S.jsx)(m.a,{htmlFor:"min-bathrooms",id:"min-bathrooms",children:"Min. Bathrooms"}),Object(S.jsxs)(g.a,{labelId:"min-bathrooms",id:"min-bathrooms",value:u,onChange:function(e){x(e.target.value)},children:[Object(S.jsx)(p.a,{value:1,children:"One"}),Object(S.jsx)(p.a,{value:2,children:"Two"}),Object(S.jsx)(p.a,{value:3,children:"Three"})]}),Object(S.jsx)(f.a,{children:"Min. # of Bathrooms"})]})}),Object(S.jsx)("div",{className:"form-items",children:Object(S.jsxs)(v.a,{className:c.formControl,onSubmit:I,children:[Object(S.jsx)(m.a,{htmlFor:"min-bedrooms",id:"min-bedrooms",children:"Min. Bedrooms"}),Object(S.jsxs)(g.a,{labelId:"min-bedrooms",id:"min-bedrooms",value:y,onChange:function(e){_(e.target.value)},children:[Object(S.jsx)(p.a,{value:1,children:"One"}),Object(S.jsx)(p.a,{value:2,children:"Two"}),Object(S.jsx)(p.a,{value:3,children:"Three"}),Object(S.jsx)(p.a,{value:4,children:"Four"}),Object(S.jsx)(p.a,{value:5,children:"Five"}),Object(S.jsx)(p.a,{value:6,children:"Six"}),Object(S.jsx)(p.a,{value:7,children:"Seven"}),Object(S.jsx)(p.a,{value:8,children:"Eight"})]}),Object(S.jsx)(f.a,{children:"Min. # of Bedrooms"})]})}),Object(S.jsx)("div",{className:"form-items",children:Object(S.jsxs)(v.a,{className:c.formControl,onSubmit:I,children:[Object(S.jsx)(m.a,{htmlFor:"min-beds",id:"min-beds",children:"Min. Beds"}),Object(S.jsxs)(g.a,{labelId:"min-beds",id:"min-beds",value:B,onChange:function(e){z(e.target.value)},children:[Object(S.jsx)(p.a,{value:1,children:"One"}),Object(S.jsx)(p.a,{value:2,children:"Two"}),Object(S.jsx)(p.a,{value:3,children:"Three"}),Object(S.jsx)(p.a,{value:4,children:"Four"}),Object(S.jsx)(p.a,{value:5,children:"Five"}),Object(S.jsx)(p.a,{value:6,children:"Six"}),Object(S.jsx)(p.a,{value:7,children:"Seven"}),Object(S.jsx)(p.a,{value:8,children:"Eight"})]}),Object(S.jsx)(f.a,{children:"Min. # of Beds"})]})}),Object(S.jsxs)("div",{className:"form-items",children:[Object(S.jsx)("div",{className:"card",style:{width:"100%"},children:Object(S.jsxs)(v.a,{children:[Object(S.jsx)(F,{ValueLabelComponent:k,ThumbComponent:C,max:1e3,valueLabelDisplay:"on",getAriaLabel:function(e){return 0===e?"Minimum price":"Maximum price"},value:A,onChange:function(e,t){D(t)}}),Object(S.jsx)(f.a,{children:"Select desired price range"})]})}),Object(S.jsx)(b.a,{type:"submit",variant:"outlined",onClick:I,children:"Search Locations"})]})]})})},L=function(e){var t=e.searchLocations,c=e.filterSearch,n=e.loading,s=Object(a.useState)(!1),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(S.jsxs)("div",{className:"banner",children:[Object(S.jsxs)("div",{className:"banner-search",children:[i&&Object(S.jsx)(_,{filterSearch:c,loading:n}),Object(S.jsx)(b.a,{onClick:function(){return o(!i)},variant:"outlined",className:"banner-searchButton",children:i?"Hide Search":"Search"})]}),i?"":Object(S.jsxs)("div",{className:"banner-info",children:[Object(S.jsxs)("h1",{children:["Escape ",Object(S.jsx)("span",{id:"green",children:"Reality"})]}),Object(S.jsx)("h5",{children:"Plan a getaway and assume a new identity. Never come back. We won't tell anyone."}),Object(S.jsx)(b.a,{onClick:function(){return t()},component:u.b,to:"/search",variant:"outlined",className:"banner-btn",children:"Explore Seattle"})]})]})},M=(c(127),function(e){var t=e.src,c=e.title,a=e.description,n=e.price;return Object(S.jsxs)("div",{className:"spotlight",children:[Object(S.jsx)("img",{src:t,alt:""}),Object(S.jsxs)("div",{className:"spotlight-info",children:[Object(S.jsx)("h2",{children:c}),Object(S.jsx)("h4",{children:a}),Object(S.jsx)("h3",{children:n})]})]})}),B=function(e){var t=e.searchLocations,c=e.highestRated,a=e.uniqueStays,n=e.entirePlace,s=e.filterSearch,r=e.loading;return Object(S.jsxs)("div",{className:"home",children:[Object(S.jsx)(L,{searchLocations:t,filterSearch:s,loading:r}),Object(S.jsxs)("div",{className:"home-section",children:[Object(S.jsx)(u.b,{onClick:function(){return c()},to:"/search",children:Object(S.jsx)(M,{src:"https://images.unsplash.com/photo-1561753757-d8880c5a3551?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80",title:"Highest Rated",description:"Discover the highest quality locations available."})}),Object(S.jsx)(u.b,{onClick:function(){return a()},to:"/search",children:Object(S.jsx)(M,{src:"https://images.unsplash.com/photo-1537726235470-8504e3beef77?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=720&q=80",title:"Unique stays",description:"Spaces that are more than just a place to sleep."})}),Object(S.jsx)(u.b,{onClick:function(){return n()},to:"/search",children:Object(S.jsx)(M,{src:"https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720",title:"Entire homes",description:"Comfortable private places, with room for friends or family."})})]})]})},z=(c(128),c(205)),E=function(){return Object(S.jsx)("a",{href:"/api/auth/login",children:"Login with Google"})},T=c(96),A=Object(h.g)((function(e){var t=e.currentUser,c=e.logOut,a=Object(h.f)(),s=n.a.useState(null),r=Object(d.a)(s,2),i=r[0],o=r[1];return Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)("a",{href:"/",children:Object(S.jsx)("img",{className:"header-icon",src:"https://i.ibb.co/zX4YzNS/header-logo-txt2.png",alt:""})}),Object(S.jsxs)("div",{className:"header-right",children:[Object(S.jsx)("div",{className:"log",children:!t.picture&&Object(S.jsx)(E,{})}),Object(S.jsx)(b.a,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)},children:Object(S.jsx)(z.a,{src:t.picture,className:"avatar"})}),t.picture&&Object(S.jsxs)(T.a,{id:"simple-menu",anchorEl:i,keepMounted:!0,open:Boolean(i),onClose:function(){o(null)},children:[Object(S.jsx)(p.a,{onClick:function(){o(null),a.push("/profile/".concat(t.email))},children:"Profile"}),Object(S.jsx)(p.a,{onClick:function(){o(null),c()},children:"Logout"})]})]})]})})),D=c(65),I=c.n(D),R=c(64),U=c.n(R),P=c(91),H=c.n(P),q=c(92),G=c.n(q),V=c(88),W=c.n(V),Y=c(93),$=c.n(Y),J=c(90),K=c.n(J),X=c(61),Q=c.n(X),Z=c(89),ee=c.n(Z),te=(c(129),c(66)),ce={height:"100%",width:"100%",overflow:"hidden",position:"relative"},ae=function(e){var t=e.lat,c=e.lng,a={lat:parseFloat(t),lng:parseFloat(c)},n={lat:parseFloat(t),lng:parseFloat(c)},s=Object(te.c)({googleMapsApiKey:"AIzaSyA8SVxbVLuhP4mLHSSfs4DgLcCsydJOwNg"}),r=s.isLoaded;return s.loadError?"Error loading maps":r?Object(S.jsx)("div",{className:"map",children:Object(S.jsx)(te.a,{mapContainerStyle:ce,zoom:14,center:a,children:Object(S.jsx)(te.b,{position:n})})}):"Loading Maps"},ne=n.a.memo(ae),se=function(e){var t=e.location,c=e.match,n=e.getLocation;Object(a.useEffect)((function(){n(c.params.id)}),[]);var s=t.name,r=t.description,i=t.picture_url,o=t.street,l=t.neighbourhood,j=t.room_type,d=t.accommodates,h=t.bathrooms,x=t.bedrooms,O=t.beds,m=t.has_availabilitruey,p=t.review_scores_rating,f=t.hostrue_is_superhostrue,v=t.host_name,g=t.property_type,N=t.instrueantrue_bookable,y=t.notes,w=t.latitude,k=t.longitude,F=t.price,C=t.weekly_price;return Object(S.jsxs)("div",{className:"card",children:[Object(S.jsx)(b.a,{to:"/search",component:u.b,variant:"outlined",className:"more-btn",children:"Back to Search"}),Object(S.jsxs)("div",{className:"card grid-1",children:[Object(S.jsx)("div",{className:"title",children:Object(S.jsx)("h1",{children:s})}),Object(S.jsxs)("div",{className:"flex-container ",children:[Object(S.jsxs)("div",{className:"icon-text",children:["Availability:",m?Object(S.jsx)(U.a,{className:"icon",style:{color:"green",fontSize:"20px"}}):Object(S.jsx)(I.a,{className:"icon",style:{color:"red",fontSize:"20px"}})]}),Object(S.jsxs)("div",{className:"icon-text",children:["Superhost:",f?Object(S.jsx)(U.a,{className:"icon",style:{color:"green",fontSize:"20px"}}):Object(S.jsx)(I.a,{className:"icon",style:{color:"red",fontSize:"20px"}})]}),Object(S.jsxs)("div",{className:"icon-text",children:["Instant Booking:",N?Object(S.jsx)(U.a,{className:"icon",style:{color:"green",fontSize:"20px"}}):Object(S.jsx)(I.a,{className:"icon",style:{color:"red",fontSize:"20px"}})]})]})]}),Object(S.jsxs)("div",{className:"card grid-2",children:[Object(S.jsx)("img",{src:i,alt:""}),Object(S.jsx)(ne,{lat:w,lng:k})]}),Object(S.jsxs)("div",{style:{textAlign:"center"},children:[Object(S.jsxs)("h2",{children:[g," hosted by ",v]}),Object(S.jsxs)("h4",{className:"address",children:["in the ",l," neighborhood"]}),Object(S.jsx)("h4",{className:"address",children:o})]}),Object(S.jsxs)("div",{className:"card grid-2",children:[Object(S.jsx)("div",{className:"top-deets",children:Object(S.jsx)("div",{className:"icon-list",children:Object(S.jsxs)("ul",{children:[Object(S.jsxs)("li",{className:"flex-container",children:[Object(S.jsx)("span",{children:Object(S.jsx)(W.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),j]}),Object(S.jsxs)("p",{className:"note",children:["You'll have the ",j," to yourself"]}),Object(S.jsxs)("li",{className:"flex-container",children:[Object(S.jsx)("span",{children:Object(S.jsx)(ee.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),"Costs $",F," per night"]}),Object(S.jsxs)("p",{className:"note",children:["Or a weekly price of $",C]}),Object(S.jsxs)("li",{className:"flex-container",children:[" ",Object(S.jsx)("span",{children:Object(S.jsx)(K.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),"Accommodates ",d]}),Object(S.jsxs)("p",{className:"note",children:["Enjoy up to ",d-1," guest(s) during your stay"]})]})})}),Object(S.jsx)("div",{className:"mb",children:Object(S.jsx)("div",{className:"top-deets",children:Object(S.jsxs)("ul",{children:[Object(S.jsxs)("li",{className:"flex-container",children:[" ",Object(S.jsx)("span",{children:Object(S.jsx)(H.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),x," Bedroom(s)"]}),Object(S.jsxs)("li",{className:"flex-container",children:[" ",Object(S.jsx)("span",{children:Object(S.jsx)(G.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),O," Bed(s)"]}),Object(S.jsxs)("li",{className:"flex-container",children:[" ",Object(S.jsx)("span",{children:Object(S.jsx)($.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),h," Bathroom(s)"]}),Object(S.jsxs)("li",{className:"flex-container",children:[" ",Object(S.jsx)("span",{children:Object(S.jsx)(Q.a,{style:{marginRight:"15px",fontSize:"30px",color:"#474747"}})}),p," out of 100"]})]})})})]}),Object(S.jsxs)("div",{className:"grid-1 card",children:[Object(S.jsx)("h2",{children:"Detailed Description"}),Object(S.jsx)("p",{children:r})]}),Object(S.jsxs)("div",{className:"grid-1 card",children:[Object(S.jsx)("h2",{children:"Notes"}),Object(S.jsx)("p",{children:y})]})]})},re=(c(74),c(94)),ie=c(95),oe=c.n(ie),le=c(62),je=c.n(le),de=c(196),ue=c(199),he=c(198),be=c(153),xe=(c(131),Object(x.a)((function(e){return{popover:{pointerEvents:"none"},paper:{padding:e.spacing(1)}}}))),Oe=function(e){var t=e.addFav,c=e.deleteFav,n=e.currentUser,s=(e.checked,e.checkFavs,e.location),r=s.id,i=s.name,o=s.summary,l=s.thumbnail_url,j=s.price,h=s.street,x=s.review_scores_rating,O=s.number_of_reviews,m=Object(a.useState)(!1),p=Object(d.a)(m,2),f=p[0],v=p[1],g=Object(a.useState)(O),N=Object(d.a)(g,2),y=N[0],w=N[1],k=xe(),F=Object(a.useState)(null),C=Object(d.a)(F,2),_=C[0],L=C[1],M=n.favorites;Object(a.useEffect)((function(){if(M){var e,t=Object(re.a)(M);try{for(t.s();!(e=t.n()).done;){var c=e.value;c===r?(v(!0),w(y+1)):console.log(c,r,f)}}catch(a){t.e(a)}finally{t.f()}}}),[]);var B=function(){L(null)},z=Boolean(_);return Object(S.jsxs)("div",{className:"search-result card grid-1",children:[l?Object(S.jsx)("img",{src:l,alt:""}):Object(S.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/480px-No_image_available.svg.png",alt:""}),Object(S.jsxs)("div",{className:"info",children:[Object(S.jsxs)("div",{className:"info-top",children:[Object(S.jsx)("p",{children:h}),Object(S.jsx)("h3",{children:i}),Object(S.jsx)("p",{children:"____"}),o?Object(S.jsx)("p",{children:o}):Object(S.jsx)("p",{children:"There is currently no summary on file for this location. We can only assume the host of this location will add a summary soon. Feel free to check this location at a later date for an updated summary."})]}),Object(S.jsxs)("div",{className:"info-bottom",children:[Object(S.jsx)("div",{className:"stars",children:Object(S.jsxs)("h2",{children:[Object(S.jsx)(Q.a,{className:"star"}),x?Object(S.jsx)("strong",{className:"strong",children:x}):Object(S.jsx)("em",{className:"small-em",children:"No Ratings Yet!"})]})}),Object(S.jsx)(b.a,{to:"/location/".concat(r),component:u.b,variant:"outlined",className:"more-btn",children:"More Details"}),n.picture?Object(S.jsx)(de.a,{control:Object(S.jsx)(ue.a,{checked:f,icon:Object(S.jsx)(je.a,{}),checkedIcon:Object(S.jsx)(oe.a,{}),onClick:function(){return function(e){v(!f),0==f?(t(e),console.log("addFav: "+e)):(c(e),console.log("deleteFav: "+e)),w(0==f?O+1:O)}(r)},name:"favorite"}),label:y}):Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(be.a,{"aria-owns":z?"mouse-over-popover":void 0,"aria-haspopup":"true",onMouseEnter:function(e){L(e.currentTarget)},onMouseLeave:B,children:Object(S.jsx)(je.a,{})}),Object(S.jsx)(he.a,{id:"mouse-over-popover",className:k.popover,classes:{paper:k.paper},open:z,anchorEl:_,anchorOrigin:{vertical:"bottom",horizontal:"left"},transformOrigin:{vertical:"top",horizontal:"left"},onClose:B,disableRestoreFocus:!0,children:Object(S.jsx)(be.a,{children:"Log in to favorite locations."})})]}),Object(S.jsxs)("div",{className:"price",children:[Object(S.jsxs)("h2",{children:["$",j]}),Object(S.jsx)("em",{children:"per night"})]})]})]})]})},me=c.p+"static/media/loader.3cd1da8f.gif",pe=function(){return Object(S.jsx)(a.Fragment,{children:Object(S.jsx)("img",{src:me,alt:"Loading...",style:{width:"400px",margin:"auto",display:"block"}})})},fe=function(e){var t=e.locations,c=e.loading,a=e.addFav,n=e.deleteFav,s=e.currentUser,r=e.checked,i=e.checkFavs;return c?Object(S.jsx)(pe,{}):Object(S.jsx)("div",{children:t.map((function(e){return Object(S.jsx)(Oe,{addFav:a,deleteFav:n,location:e,currentUser:s,checked:r,checkFavs:i},e.id)}))})},ve=function(e){for(var t=e.postsPerPage,c=e.totalPosts,a=e.paginate,n=[],s=1;s<=Math.ceil(c/t);s++)n.push(s);return Object(S.jsx)("nav",{children:Object(S.jsx)("ul",{className:"paginate-cont",children:n.map((function(e){return Object(S.jsx)("li",{className:"pag-item",children:Object(S.jsx)("a",{onClick:function(){return a(e)},href:"#",children:e})},e)}))})})},ge=function(e){var t=e.locations,c=e.filterSearch,n=e.loading,s=e.addFav,r=e.deleteFav,i=e.currentUser,o=e.checked,l=e.checkFavs,j=Object(a.useState)(1),u=Object(d.a)(j,2),h=u[0],b=u[1],x=Object(a.useState)(10),O=Object(d.a)(x,1)[0],m=h*O,p=m-O,f=t.slice(p,m);return Object(S.jsxs)("div",{className:"search-page",children:[Object(S.jsx)("div",{className:"card",children:Object(S.jsx)(_,{filterSearch:c})}),Object(S.jsx)(fe,{locations:f,addFav:s,deleteFav:r,loading:n,currentUser:i,checked:o,checkFavs:l}),!n&&Object(S.jsx)(ve,{postsPerPage:O,totalPosts:t.length,paginate:function(e){b(e)}})]})},Ne=(c(132),function(e){var t=e.item,c=e.deleteFav,a=t.data[0],n=a.id,s=a.name,r=a.thumbnail_url;return Object(S.jsx)("div",{className:"card grid-1",children:Object(S.jsxs)("div",{className:"fav-container",children:[Object(S.jsx)("img",{src:r,alt:""}),Object(S.jsx)("h2",{children:s}),Object(S.jsx)(b.a,{onClick:function(){return c(n)},children:"Delete"})]})})}),ye=function(e){var t=e.favorites,c=e.deleteFav,a=e.favIdArr;return Object(S.jsx)("div",{children:Object(S.jsx)("div",{children:t.map((function(e,t){return Object(S.jsx)(Ne,{item:e,deleteFav:c,favIdArr:a},t)}))})})},Se=function(e){var t=e.currentUser,c=e.getUser,n=e.favorites,s=e.deleteFav,r=e.displayFav,i=e.favIdArr,o=t.displayName,l=t.email,j=t.picture;return Object(a.useEffect)((function(){c(),r(i)}),[]),Object(S.jsxs)("div",{children:[Object(S.jsx)("img",{src:j,alt:"",style:{width:"150px"}}),Object(S.jsx)("div",{children:o}),Object(S.jsx)("div",{children:l}),Object(S.jsx)(ye,{favorites:n,deleteFav:s,favIdArr:i})]})},we=c(23),ke=c.n(we);var Fe=function(){var e=Object(a.useState)([]),t=Object(d.a)(e,2),c=t[0],n=t[1],s=Object(a.useState)([]),r=Object(d.a)(s,2),o=r[0],b=r[1],x=Object(a.useState)({}),O=Object(d.a)(x,2),m=O[0],p=O[1],f=Object(a.useState)(!1),v=Object(d.a)(f,2),g=v[0],N=v[1],y=Object(a.useState)([]),w=Object(d.a)(y,2),k=w[0],F=w[1],C=Object(a.useState)([]),_=Object(d.a)(C,2),L=_[0],M=_[1],z=Object(a.useState)(!1),E=Object(d.a)(z,2),T=E[0],D=E[1];Object(a.useEffect)((function(){V()}),[]);var I=function(){var e=Object(j.a)(l.a.mark((function e(t,c,a,s,r,i){var o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,ke.a.get("api/v1/listings?page=3&limit=30&min_guests=".concat(t,"&min_bathrooms=").concat(c,"&min_bedrooms=").concat(a,"&min_beds=").concat(s,"&price[gte]=").concat(r[0],"&price[lte]=").concat(r[1]));case 3:o=e.sent,console.log("api/v1/listings?page=3&limit=30&min_guests=".concat(t,"&min_bathrooms=").concat(c,"&min_bedrooms=").concat(a,"&min_beds=").concat(s,"&'price[gte]'=").concat(r[0],"&'price[lte]'=").concat(r[1])),n(o.data.content),N(!1);case 7:case"end":return e.stop()}}),e)})));return function(t,c,a,n,s,r){return e.apply(this,arguments)}}(),R=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,ke.a.get("api/v1/listings?page=3&limit=30");case 3:t=e.sent,console.log("clicky"),n(t.data.content),N(!1),console.log(c);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),U=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,ke.a.get("/api/v1/listings/toprated?limit=10");case 3:t=e.sent,n(t.data),N(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,ke.a.get("/api/v1/listings/uniquestays?limit=10");case 3:t=e.sent,n(t.data),N(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),H=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,ke.a.get("/api/v1/listings/entireplace?limit=10&accomodates=10");case 3:t=e.sent,n(t.data),N(!1);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),q=function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return N(!0),e.next=3,ke.a.get("/api/v1/listings/listing/".concat(t));case 3:c=e.sent,b(c.data[0]),N(!1);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),G=function(){var e=Object(j.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.a.get("/api/auth/logout");case 2:e.sent,p({}),console.log("Log Out!");case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),V=function(){var e=Object(j.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("getUser call"),e.next=3,ke.a.get("/api/auth/user");case 3:t=e.sent,p(t.data),M(t.data.favorites);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.a.post("api/v1/favorite/".concat(t));case 2:e.sent,console.log("api/v1/favorite/".concat(t));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(j.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.a.delete("/api/v1/favorite/".concat(t)).then((function(e){console.log(e)})).catch((function(e){console.log(e),console.log(e.response)}));case 2:F(k.filter((function(e){return e.data[0].id!==t})));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),$=function(){if(L){var e=L.map((function(e){return ke.a.get("/api/v1/listings/listing/".concat(e))}));ke.a.all(e).then((function(e){F(e)}))}},J=function(){var e=Object(j.a)(l.a.mark((function e(t){var c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ke.a.get("/api/v1/favorite/".concat(t)).catch((function(e){console.log(e),console.log(e.response)}));case 2:c=e.sent,console.log("/api/v1/favorite/".concat(t," returns ").concat(c.data)),D(c.data);case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(S.jsxs)(u.a,{children:[Object(S.jsx)(A,{currentUser:m,logOut:G}),Object(S.jsxs)(h.c,{children:[Object(S.jsx)(h.a,{exact:!0,path:"/",children:Object(S.jsx)(B,{searchLocations:R,filterSearch:I,highestRated:U,uniqueStays:P,entirePlace:H})}),Object(S.jsx)(h.a,{exact:!0,path:"/search",children:Object(S.jsx)(ge,{locations:c,filterSearch:I,loading:g,addFav:W,deleteFav:Y,currentUser:m,checked:J,checkFavs:T})}),Object(S.jsx)(h.a,{exact:!0,path:"/profile/:email",render:function(e){return Object(S.jsx)(Se,Object(i.a)(Object(i.a)({},e),{},{currentUser:m,getUser:V,deleteFav:Y,displayFav:$,favorites:k,favIdArr:L}))}}),Object(S.jsx)(h.a,{exact:!0,path:"/location/:id",render:function(e){return Object(S.jsx)(se,Object(i.a)(Object(i.a)({},e),{},{location:o,getLocation:q}))}})]})]})},Ce=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,206)).then((function(t){var c=t.getCLS,a=t.getFID,n=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),a(e),n(e),s(e),r(e)}))};r.a.render(Object(S.jsx)(Fe,{}),document.getElementById("root")),Ce()},74:function(e,t,c){}},[[151,1,2]]]);
//# sourceMappingURL=main.881c9342.chunk.js.map