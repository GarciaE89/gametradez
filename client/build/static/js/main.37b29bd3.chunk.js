(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{115:function(e,t,a){},116:function(e,t,a){},129:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(95),c=a.n(r),s=(a(115),a(40)),o=(a(116),a(10)),l=a(26),d=a(27),j=a(84),u=new(function(){function e(){Object(l.a)(this,e)}return Object(d.a)(e,[{key:"getProfile",value:function(){return Object(j.a)(this.getToken())}},{key:"loggedIn",value:function(){var e=this.getToken();return!!e&&!this.isTokenExpired(e)}},{key:"isTokenExpired",value:function(e){try{return Object(j.a)(e).exp<Date.now()/1e3}catch(t){return!1}}},{key:"getToken",value:function(){return localStorage.getItem("id_token")}},{key:"login",value:function(e){localStorage.setItem("id_token",e),window.location.assign("/")}},{key:"logout",value:function(){localStorage.removeItem("id_token"),window.location.assign("/")}}]),e}()),p=a(2);var b,h,m,O,x=function(e){if(u.loggedIn())t=["About","Tradez","Post"];else var t=["About","Tradez","Post","Login","Register"];return Object(p.jsxs)("ul",{className:"flex-row",id:"header",children:[Object(p.jsx)("h2",{children:Object(p.jsx)("a",{id:"pagename","data-testid":"link",href:"/",children:"Gametradez"})}),Object(p.jsxs)("div",{id:"navi",children:[t.map((function(t){return Object(p.jsx)("li",{className:"mx-1",children:Object(p.jsx)("a",{href:"#"+t.toLowerCase(),onClick:function(){return e.handlePageChange(t)},className:e.currentPage===t?"nav-link active":"nav-link",children:t})},t)})),u.loggedIn()?Object(p.jsx)("a",{href:"/",onClick:function(e){e.preventDefault(),u.logout()},id:"logoutlink",children:"Logout"}):Object(p.jsx)("a",{})]})]})},g=function(){return Object(p.jsxs)("div",{class:"jumbotron",children:[Object(p.jsx)("img",{src:a(47).default}),Object(p.jsx)("div",{class:"centered",children:"GameTradez!"})]})},f=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("p",{id:"maintext",children:["Gametradez was built on the idea of providing a safe and secure way to buy and sell anything video game related. ~","\n","Gamerz can create user profiles, purchase and post their merchendise. Once a purchase has been initiated Gametradez will act as a broker, ~","\n","and confirm the buyer is getting what was posted for sale, once authenticated by Gametradez, the funds are released to the seller."]})})},w=a(151),v=a(36),k=a(158),y=Object(k.a)(b||(b=Object(v.a)(["\n  {\n    products {\n      productTitle\n      productDescription\n      price\n      quantity\n    }\n  }\n"]))),N=a(8),_=a(163),S=a(164),T=a(165),F=a(160),$=a(99),D=a.n($),C=function(e){e.products,e.title;var t,a,n,i,r,c,s=[(t={img:"https://upload.wikimedia.org/wikipedia/en/c/c1/Dkc_snes_boxart.jpg",title:"Donkey Kong Country",description:"SNES, USED, With Box",link:"https://en.wikipedia.org/wiki/Donkey_Kong_Country"},Object(N.a)(t,"link","https://en.wikipedia.org/wiki/Donkey_Kong_Country"),Object(N.a)(t,"price",15),Object(N.a)(t,"rows",2),Object(N.a)(t,"cols",2),t),(a={img:"https://upload.wikimedia.org/wikipedia/en/thumb/a/ac/Ffl_boxfront.jpg/220px-Ffl_boxfront.jpg",title:"Final Fantasy Legend",description:"GAMEBOY, NEW, With Box",link:"https://finalfantasy.fandom.com/wiki/The_Final_Fantasy_Legend"},Object(N.a)(a,"link","https://finalfantasy.fandom.com/wiki/The_Final_Fantasy_Legend"),Object(N.a)(a,"price",10),a),(n={img:"https://iheartoldgames.files.wordpress.com/2018/01/half-life.jpg",title:"Half-Life",description:"PC, NEW, With Box and Key",link:"https://half-life.fandom.com/wiki/Half-Life"},Object(N.a)(n,"link","https://half-life.fandom.com/wiki/Half-Life"),Object(N.a)(n,"price",5),n),(i={img:"https://scholarlykitchen.sspnet.org/wp-content/uploads/2021/03/NF-RGB_APNG-Logo-300x300.png",title:"Fortnite Blue Cape NFT",description:"NFT for blue cap, Fortnite",link:"https://en.wikipedia.org/wiki/Bluecoat"},Object(N.a)(i,"link","https://en.wikipedia.org/wiki/Bluecoat"),Object(N.a)(i,"price",999),i),(r={img:"https://upload.wikimedia.org/wikipedia/en/0/03/Super_Mario_Bros._box.png",title:"Super Mario Bros",description:"NES, USED, Without Box",link:"https://en.wikipedia.org/wiki/Super_Mario_Bros."},Object(N.a)(r,"link","https://en.wikipedia.org/wiki/Super_Mario_Bros."),Object(N.a)(r,"price",25),r),(c={img:"https://upload.wikimedia.org/wikipedia/en/4/41/Legend_of_zelda_cover_%28with_cartridge%29_gold.png",title:"The Legend of Zelda",description:"NES, USED, Without Box",link:"https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)"},Object(N.a)(c,"link","https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)"),Object(N.a)(c,"price",12),c)];return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{children:"See whatz for sell here!"}),Object(p.jsx)("div",{className:"flex-row",children:Object(p.jsx)(_.a,{sx:{width:1e3,height:1e3},children:s.map((function(e){return Object(p.jsxs)(S.a,{children:[Object(p.jsx)("a",{href:e.link,target:"_blank",children:Object(p.jsx)("img",{src:"".concat(e.img,"?w=248&fit=crop&auto=format"),srcSet:"".concat(e.img,"?w=248&fit=crop&auto=format&dpr=2 2x"),alt:e.title,loading:"lazy"})}),Object(p.jsx)("a",{href:e.git,children:Object(p.jsx)(T.a,{title:e.title,subtitle:e.description,actionIcon:Object(p.jsxs)(F.a,{sx:{color:"rgba(255, 255, 255, 0.54)"},"aria-label":"info about ".concat(e.title),children:["$",e.price,Object(p.jsx)(D.a,{})]})})})]},e.img)}))})})]})},L=function(){var e=Object(w.a)(y),t=e.loading,a=e.data,n=(null===a||void 0===a?void 0:a.products)||[];return console.log(n),Object(p.jsxs)("div",{children:[Object(p.jsx)("p",{id:"maintext"}),Object(p.jsx)("div",{children:t?Object(p.jsx)("div",{children:"Loading..."}):Object(p.jsx)(C,{})})]})},P=a(53),B=a(18),z=a(42),E=a.n(z),I=a(152),q=Object(k.a)(h||(h=Object(v.a)(["\n  mutation login($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),G=Object(k.a)(m||(m=Object(v.a)(["\n  mutation addUser(\n    $firstName: String!\n    $lastName: String!\n    $email: String!\n    $password: String!\n  ) {\n    addUser(\n      firstName: $firstName\n      lastName: $lastName\n      email: $email\n      password: $password\n    ) {\n      token\n      user {\n        _id\n      }\n    }\n  }\n"]))),W=Object(k.a)(O||(O=Object(v.a)(["\n  mutation addProduct(\n    $productTitle: String!\n    $productDescription: String!\n    $price: Int!\n    $quantity: Int!\n  ) {\n    addProduct(\n      productTitle: $productTitle\n      productDescription: $productDescription\n      price: $price\n      quantity: $quantity\n    )\n  }\n"]))),A=a(47);var M=function(e){var t=Object(n.useState)(""),a=Object(o.a)(t,2),i=a[0],r=a[1],c=Object(I.a)(W,{update:function(e,t){var a=t.data.addProduct;try{var n=e.readQuery({query:y}).products;e.writeQuery({query:y,data:{products:[a].concat(Object(B.a)(n))}})}catch(i){console.error(i)}}}),s=Object(o.a)(c,2),l=s[0],d=(s[1].error,function(e){e.target.value.length<=280&&r(e.target.value)}),j=function(){var e=Object(P.a)(E.a.mark((function e(t){return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,l({variables:{productz:i}});case 4:r(""),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})));return function(t){return e.apply(this,arguments)}}();return Object(p.jsxs)("div",{style:{backgroundImage:"url(".concat(A.default,")")},children:[Object(p.jsx)("p",{id:"maintext",children:"Post You Stuff for Sale Here!"}),Object(p.jsx)("div",{className:"container my-1",children:Object(p.jsxs)("form",{onSubmit:j,className:"register-container",children:[Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"",children:"Title:"}),Object(p.jsx)("input",{placeholder:"Title",name:"productTitle",type:"productTitle",id:"productTitle",onChange:d})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"price",children:"Price:"}),Object(p.jsx)("input",{placeholder:"$1.00",name:"price",type:"price",id:"price"})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"quantity",children:"Quantity:"}),Object(p.jsx)("input",{placeholder:"1",name:"quantity",type:"quantity",id:"quantity",onChange:d})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"productDescription",children:"Description:"}),Object(p.jsx)("textarea",{placeholder:"This is my product description",name:"productDescription",type:"productDescription",id:"productDescription",onChange:d})]}),Object(p.jsx)("div",{className:"flex-row flex-end",children:Object(p.jsx)("button",{type:"submit",children:"Submit"})})]})})]})};var U=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(o.a)(t,2),i=a[0],r=a[1],c=Object(I.a)(q),l=Object(o.a)(c,2),d=l[0],j=l[1].error,b=function(){var e=Object(P.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,d({variables:{email:i.email,password:i.password}});case 4:a=e.sent,n=a.data.login.token,u.login(n),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(e){var t=e.target,a=t.name,n=t.value;r(Object(s.a)(Object(s.a)({},i),{},Object(N.a)({},a,n)))};return Object(p.jsxs)("div",{className:"container my-1 register-login-page",style:{backgroundImage:"url(".concat(A.default,")")},children:[Object(p.jsx)("h2",{children:"Login"}),Object(p.jsxs)("form",{onSubmit:b,className:"login-container",children:[Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email address:"}),Object(p.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:h})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(p.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:h})]}),j?Object(p.jsx)("div",{children:Object(p.jsx)("p",{className:"error-text",children:"The provided credentials are incorrect"})}):null,Object(p.jsx)("div",{className:"flex-row flex-end",children:Object(p.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var H=function(e){var t=Object(n.useState)({email:"",password:""}),a=Object(o.a)(t,2),i=a[0],r=a[1],c=Object(I.a)(G),l=Object(o.a)(c,1)[0],d=function(){var e=Object(P.a)(E.a.mark((function e(t){var a,n;return E.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,l({variables:{email:i.email,password:i.password,firstName:i.firstName,lastName:i.lastName}});case 3:a=e.sent,n=a.data.addUser.token,u.login(n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.target,a=t.name,n=t.value;r(Object(s.a)(Object(s.a)({},i),{},Object(N.a)({},a,n)))};return Object(p.jsxs)("div",{className:"container my-1 register-login-page",style:{backgroundImage:"url(".concat(A.default,")")},children:[Object(p.jsx)("h2",{children:"Register"}),Object(p.jsxs)("form",{onSubmit:d,className:"register-container",children:[Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"firstName",children:"First Name:"}),Object(p.jsx)("input",{placeholder:"First",name:"firstName",type:"firstName",id:"firstName",onChange:j})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"lastName",children:"Last Name:"}),Object(p.jsx)("input",{placeholder:"Last",name:"lastName",type:"lastName",id:"lastName",onChange:j})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"email",children:"Email:"}),Object(p.jsx)("input",{placeholder:"youremail@test.com",name:"email",type:"email",id:"email",onChange:j})]}),Object(p.jsxs)("div",{className:"flex-row space-between my-2",children:[Object(p.jsx)("label",{htmlFor:"pwd",children:"Password:"}),Object(p.jsx)("input",{placeholder:"******",name:"password",type:"password",id:"pwd",onChange:j})]}),Object(p.jsx)("div",{className:"flex-row flex-end",children:Object(p.jsx)("button",{type:"submit",children:"Submit"})})]})]})};var K=function(){var e=Object(n.useState)("Home"),t=Object(o.a)(e,2),a=t[0],i=t[1];return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"hoverWrapper",children:[Object(p.jsxs)("div",{className:"arrow-container",children:[Object(p.jsx)("div",{className:"arrow"}),Object(p.jsx)("div",{className:"arrow"}),Object(p.jsx)("div",{className:"arrow"})]}),Object(p.jsx)("div",{id:"hoverShow1",children:Object(p.jsx)(x,{currentPage:a,handlePageChange:i})})]}),Object(p.jsx)("div",{id:"mainWindow",children:function(){switch(a){case"About":return Object(p.jsx)(f,{});case"Tradez":return Object(p.jsx)(L,{});case"Post":return Object(p.jsx)(M,{});case"Login":return Object(p.jsx)(U,{});case"Register":return Object(p.jsx)(H,{});default:return Object(p.jsx)(g,{})}}()})]})},R=a(67),Q=a(103),Z=a(132),J=a(159),Y=a(157),V=a(101),X=Object(Q.a)({uri:"/graphql"}),ee=Object(V.a)((function(e,t){var a=t.headers,n=localStorage.getItem("id_token");return{headers:Object(s.a)(Object(s.a)({},a),{},{authorization:n?"Bearer ".concat(n):""})}})),te=new Z.a({link:ee.concat(X),cache:new J.a});var ae=function(){return Object(p.jsx)(Y.a,{client:te,children:Object(p.jsx)(R.a,{children:Object(p.jsx)("div",{className:"App",children:Object(p.jsx)(K,{})})})})};c.a.render(Object(p.jsx)(i.a.StrictMode,{children:Object(p.jsx)(ae,{})}),document.getElementById("root"))},47:function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/gametradez.5caf0c24.gif"}},[[129,1,2]]]);
//# sourceMappingURL=main.37b29bd3.chunk.js.map