(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{14:function(e,t,i){},15:function(e,t,i){},17:function(e,t,i){"use strict";i.r(t);var c=i(1),a=i.n(c),s=i(9),n=i.n(s),r=(i(14),i(2)),l=i(3),d=i(5),j=i(4),o=(i.p,i(15),i(0));var b=function(e){return console.log(e),Object(o.jsxs)("div",{className:"indTab",style:e.out.id==e.activetab?{backgroundColor:"cadetblue"}:{backgroundColor:"grey"},onClick:e.ctab.bind(this,e.out.id),children:[" ",e.out.title]})},m=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return this.props.tabs.map((function(t){return Object(o.jsx)(b,{out:t,activetab:e.props.activetab,ctab:e.props.ctab})}))}}]),i}(c.Component);var u=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("body",{className:"textPage",children:[Object(o.jsx)("br",{}),Object(o.jsxs)("form",{className:"myForm",children:[Object(o.jsxs)("label",{children:["First Name:",Object(o.jsx)("input",{type:"text"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{children:["Last Name:",Object(o.jsx)("input",{type:"text"})]}),Object(o.jsx)("p",{children:"Favorite Movie"}),Object(o.jsx)("input",{type:"radio"}),Object(o.jsx)("label",{children:"Avengers"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"radio"}),Object(o.jsx)("label",{children:"Dark Knight"}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"radio"}),Object(o.jsx)("label",{children:"Tenet"}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit",value:"Done"})]})]})})},h=i.p+"static/media/i1.2f935326.png",O=i.p+"static/media/i2.2e5a14f2.JPG",x=i.p+"static/media/i3.9e0e4216.JPG",v=i.p+"static/media/i4.fd4ba0e3.JPG",g=i.p+"static/media/i5.b88df5f0.JPG",p=i.p+"static/media/i6.79bfc4a5.JPG",f=i.p+"static/media/i7.598484dc.JPG",y=i.p+"static/media/i8.c4dca956.JPG",k=i.p+"static/media/i9.13f433d4.JPG",N=(i(8),function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={active:!1,modalImg:"",modalDisplay:"none"},e}return Object(l.a)(i,[{key:"clickImg",value:function(e){this.setState({modalImg:e,modalDisplay:"flex"})}},{key:"closeImg",value:function(){this.setState({modalDisplay:"none"})}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsxs)("body",{children:[Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(h)},src:h})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(O)},src:O})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(x)},src:x})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(v)},src:v})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(g)},src:g})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(p)},src:p})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(f)},src:f})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(y)},src:y})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("img",{className:"grid-image",onClick:function(t){return e.clickImg(k)},src:k})})]}),Object(o.jsx)("div",{className:"modal",id:"myModal",style:{display:this.state.modalDisplay},onClick:function(t){return e.closeImg()},children:Object(o.jsx)("img",{class:"modal-content",id:"currentImg",src:this.state.modalImg})})]})})}}]),i}(c.Component)),I=i.p+"static/media/v1.7eb852e6.mp4",C=i.p+"static/media/v2.a01b8320.mp4",w=i.p+"static/media/v3.a719fba4.mp4",S=i.p+"static/media/v4.b857225d.mp4",D=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={active:!1,modalVid:"",modalDisplay:"none"},e}return Object(l.a)(i,[{key:"clickVid",value:function(e){this.setState({modalVid:e,modalDisplay:"flex",active:!0})}},{key:"closeVid",value:function(){this.setState({modalDisplay:"none"})}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsxs)("body",{children:[Object(o.jsxs)("div",{className:"grid-container",children:[Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("video",{width:"320",onClick:function(t){return e.clickVid(I)},src:I})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("video",{width:"320",onClick:function(t){return e.clickVid(C)},src:C})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("video",{width:"320",onClick:function(t){return e.clickVid(w)},src:w})}),Object(o.jsx)("div",{className:"grid-item",children:Object(o.jsx)("video",{width:"320",onClick:function(t){return e.clickVid(S)},src:S})})]}),Object(o.jsx)("div",{className:"modal",id:"myModal",style:{display:this.state.modalDisplay},onClick:function(t){return e.closeVid()},children:Object(o.jsx)("video",{class:"modal-content-vid",id:"currentImg",src:this.state.modalVid,controls:this.state.active,autoplay:this.state.active,paused:!this.state.active})})]})})}}]),i}(c.Component);var P=function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("body",{className:"textPage",children:[Object(o.jsx)("br",{}),Object(o.jsxs)("table",{children:[Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Name"}),Object(o.jsx)("th",{children:"Details"}),Object(o.jsx)("th",{children:"Year"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"https://docs.google.com/document/d/1L7Lg5AzkKuW7R-pnBVrQ41xFax4HurPE6MVjWUG3OrE/edit?usp=sharing",children:"Genshin Impact Beginner Guide"})}),Object(o.jsx)("td",{children:"I wrote a guide for beginners to the game Genshin Impact. I would like to write a manual not only for people who do not play games to learn this game but also for beginners to familiarize this game faster. I divided it into four parts: Introduction, Settings, Fundamentals, and Advanced Skills."}),Object(o.jsx)("td",{children:"2020"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"https://junyi-du.weebly.com",children:"Self Introduction Website"})}),Object(o.jsx)("td",{children:"I made a webite that introduce myself and daily life with weebly. I separated it into five parts: home page with self introduction, quotes, travel, my cat Shiro, and games."}),Object(o.jsx)("td",{children:"2020"})]}),Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:Object(o.jsx)("a",{href:"https://junyi-du.itch.io/the-destination",children:"Text Adventure Game - The Destination"})}),Object(o.jsx)("td",{children:"I created a game about the topic of war with Ink. I created a story setting after a war. I chose to show the cruelty of war from a man to explore and live in the ruins of a city."}),Object(o.jsx)("td",{children:"2020"})]})]})]})})},G=i(6),V=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={value:""},e.handleChange=e.handleChange.bind(Object(G.a)(e)),e.handleSubmit=e.handleSubmit.bind(Object(G.a)(e)),e}return Object(l.a)(i,[{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this.state.value,i=t.substr(t.length-4,4);!t.includes("@")||".edu"!=i&&".com"!=i?alert("Invalid email"):alert("Email succesfully recorded."),e.preventDefault()}},{key:"render",value:function(){return Object(o.jsx)("div",{children:Object(o.jsxs)("body",{className:"textPage",children:[Object(o.jsx)("br",{}),Object(o.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(o.jsxs)("label",{children:["Email:",Object(o.jsx)("input",{type:"text",value:this.state.value,onChange:this.handleChange})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("input",{type:"submit"})]})]})})}}]),i}(c.Component),J=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){return Object(r.a)(this,i),t.apply(this,arguments)}return Object(l.a)(i,[{key:"render",value:function(){var e=this;return function(){var t=e.props.activetab;return 1===t?Object(o.jsx)(u,{}):2===t?Object(o.jsx)(N,{}):3===t?Object(o.jsx)(D,{}):4===t?Object(o.jsx)(P,{}):5===t?Object(o.jsx)(V,{}):Object(o.jsx)("div",{children:"Welcome"})}()}}]),i}(c.Component),F=function(e){Object(d.a)(i,e);var t=Object(j.a)(i);function i(){var e;return Object(r.a)(this,i),(e=t.call(this)).state={active:1},e.changetab=function(t){e.setState({active:t})},e}return Object(l.a)(i,[{key:"render",value:function(){return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)("div",{className:"nav-bar",children:Object(o.jsx)(m,{className:"tab-list",tabs:[{id:1,title:"Text"},{id:2,title:"Images"},{id:3,title:"Videos"},{id:4,title:"Table"},{id:5,title:"Email"}],activetab:this.state.active,ctab:this.changetab})}),Object(o.jsx)("div",{className:"main-body",children:Object(o.jsx)(J,{activetab:this.state.active})})]})}}]),i}(c.Component),T=function(e){e&&e instanceof Function&&i.e(3).then(i.bind(null,18)).then((function(t){var i=t.getCLS,c=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;i(e),c(e),a(e),s(e),n(e)}))};n.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(F,{})}),document.getElementById("root")),T()},8:function(e,t,i){}},[[17,1,2]]]);
//# sourceMappingURL=main.bf0cd0e8.chunk.js.map