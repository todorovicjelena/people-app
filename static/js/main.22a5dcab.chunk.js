(window["webpackJsonppeople-app"]=window["webpackJsonppeople-app"]||[]).push([[0],{31:function(e,a,t){e.exports=t(61)},36:function(e,a,t){},60:function(e,a,t){},61:function(e,a,t){"use strict";t.r(a);var n=t(0),s=t.n(n),r=t(28),l=t.n(r),c=t(7),i=(t(36),t(8)),m=t(11),o=t(13),u=t(12),d=t(14),h=t(6),p=function(e){return s.a.createElement("footer",{className:"container-fluid"},s.a.createElement("p",null,"\xa9 ",(new Date).getFullYear()," Copyright Jelena Todorovic"))},f=function(){return s.a.createElement("div",{className:"menu-items"},s.a.createElement("ul",null,s.a.createElement("li",null,s.a.createElement(c.b,{to:"/about"},"About"))))},E=function(e){var a=e.title;return s.a.createElement("header",{className:"container-fluid"},s.a.createElement("div",{className:"container header-inner"},s.a.createElement(c.b,{to:"/"},s.a.createElement("h2",null,a)),s.a.createElement("div",{className:"btn-holders"},s.a.createElement(f,null))))},g=function(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement(E,{title:"People"}),s.a.createElement("div",{className:"container about-holder"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-12"},s.a.createElement("h1",{className:"mt-5 mb-3"}," About"),s.a.createElement("p",null,"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."),s.a.createElement("h3",{className:"mb-3 mt-4"},"What We Do"),s.a.createElement("p",{className:""},"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")))))},v=function(e){return s.a.createElement("div",{className:"loader"},s.a.createElement("div",{className:"sk-cube-grid center-align"},s.a.createElement("div",{className:"sk-cube sk-cube1"}),s.a.createElement("div",{className:"sk-cube sk-cube2"}),s.a.createElement("div",{className:"sk-cube sk-cube3"}),s.a.createElement("div",{className:"sk-cube sk-cube4"}),s.a.createElement("div",{className:"sk-cube sk-cube5"}),s.a.createElement("div",{className:"sk-cube sk-cube6"}),s.a.createElement("div",{className:"sk-cube sk-cube7"}),s.a.createElement("div",{className:"sk-cube sk-cube8"}),s.a.createElement("div",{className:"sk-cube sk-cube9"})))},b=function(e){var a=e.title,t=e.onButtonClick,n=e.isGrid,r=e.onRefreshClick;return s.a.createElement("header",{className:"container-fluid"},s.a.createElement("div",{className:"container header-inner"},s.a.createElement("a",{href:"index.html"},s.a.createElement("h2",null,a)),s.a.createElement("div",{className:"btn-holders"},s.a.createElement(f,null),s.a.createElement("span",{onClick:r},s.a.createElement("i",{className:"fas fa-redo"})),s.a.createElement("span",{onClick:t},s.a.createElement("i",{className:n?"fas fa-th-list":"fas fa-th-large"})))))},N=function(e){var a=e.user,t=a.isFemale()?"is-female":"";return s.a.createElement("div",{className:"one-user ".concat(t," row")},s.a.createElement("div",{className:"user-image-holder col-1"},s.a.createElement("img",{src:a.image,alt:""})),s.a.createElement("div",{className:"user-info-holder col-11"},s.a.createElement("p",{className:"user-name"},a.getFullName()),s.a.createElement("p",{className:"user-email"},s.a.createElement("i",{className:"fas fa-envelope"}),a.hideEmail()),s.a.createElement("p",{className:"user-birthday"},s.a.createElement("i",{className:"fas fa-birthday-cake"}),a.getFormatDate())))},k=function(e){return s.a.createElement("div",{className:"container users-holder"},e.listOfUsers.map((function(e,a){return s.a.createElement(N,{key:a,user:e})})))},y=function(e){var a=e.user,t=a.isFemale()?"is-female":"";return s.a.createElement("div",{className:"one-user-card col s12 m4"},s.a.createElement("div",{className:"card-holder ".concat(t)},s.a.createElement("div",{className:"card-image-holder"},s.a.createElement("img",{src:a.largeImage,alt:""}),s.a.createElement("h4",{className:"user-name"},a.name)),s.a.createElement("div",{className:"card-info-holder"},s.a.createElement("p",{className:"user-email"},a.hideEmail()),s.a.createElement("p",{className:"user-birthday"},s.a.createElement("i",{className:"fas fa-birthday-cake"}),a.getFormatDate()))))},w=function(e){return s.a.createElement("div",{className:"container users-holder-card"},s.a.createElement("div",{className:"row inner-user-holder "},e.listOfUsers.map((function(e,a){return s.a.createElement(y,{key:a,user:e})}))))},C=function(e){var a=e.onInputChange,t=e.inputValue;return s.a.createElement("div",{className:"container main-holder"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"container-fluid search-holder"},s.a.createElement("span",{className:"icon-holder"},s.a.createElement("i",{className:"fas fa-search"})),s.a.createElement("input",{type:"search",value:t,onChange:a,placeholder:"Search User",className:"search-input"}))),e.isGrid?s.a.createElement(w,{listOfUsers:e.users}):s.a.createElement(k,{listOfUsers:e.users}))},I=function e(a){var t=this;Object(i.a)(this,e),this.hideEmail=function(){var e=t.email.slice(-15);return"".concat(t.email.slice(0,3).concat("...")).concat(e)},this.getFormatDate=function(){var e=new Date(t.dob);return"".concat(e.getDate(),"/").concat(e.getMonth()+1,"/").concat(e.getFullYear())},this.getFullName=function(){return"".concat(t.name.charAt(0).toUpperCase()+t.name.slice(1)," ").concat(t.lastName.charAt(0).toUpperCase()+t.lastName.slice(1))},this.isFemale=function(){return"female"===t.gender},this.name=a.name.first,this.lastName=a.name.last,this.email=a.email,this.image=a.picture.thumbnail,this.largeImage=a.picture.large,this.dob=a.dob.date,this.gender=a.gender},O=t(42),L=function(){return O.get("https://randomuser.me/api/?results=50").then((function(e){return e.data})).then((function(e){return e.results.map((function(e){return new I(e)}))}))},F=function(e){function a(e){var t;Object(i.a)(this,a),(t=Object(o.a)(this,Object(u.a)(a).call(this,e))).onLoadUsers=function(){t.setState((function(e){return{loading:!e.loading}}))},t.onButtonClick=function(){t.setState((function(e,a){var t=!e.isGrid;return localStorage.setItem("isGrid",t),{isGrid:t}}))},t.onRefreshClick=function(){t.setState({loading:!0},(function(){L().then((function(e){return t.setState({loading:!1,users:e})}))}))},t.onInputChange=function(e){t.setState({inputValue:e.target.value})};var n=JSON.parse(localStorage.getItem("isGrid"))||!1;return t.state={loading:!0,users:[],inputValue:"",isGrid:n},t}return Object(d.a)(a,e),Object(m.a)(a,[{key:"loadUsers",value:function(){var e=this;L().then((function(a){return e.setState({users:a})}))}},{key:"componentDidMount",value:function(){this.onLoadUsers(),this.loadUsers()}},{key:"render",value:function(){var e=this.state,a=e.inputValue,t=e.loading,n=e.users,r=n.filter((function(e){return-1!==e.getFullName().toLowerCase().indexOf(a.toLowerCase())}));return s.a.createElement(s.a.Fragment,null,s.a.createElement(b,{onButtonClick:this.onButtonClick,onRefreshClick:this.onRefreshClick,isGrid:this.state.isGrid,title:"People"}),0===n.length||t?s.a.createElement(v,null):s.a.createElement(C,{onInputChange:this.onInputChange,inputValue:a,isGrid:this.state.isGrid,users:r}))}}]),a}(s.a.Component),j=(t(60),function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(d.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){return s.a.createElement("div",{className:"App"},s.a.createElement(h.c,null,s.a.createElement(h.a,{exact:!0,path:"/about",component:g}),s.a.createElement(h.a,{path:"/",component:F})),s.a.createElement(p,null))}}]),a}(s.a.Component));l.a.render(s.a.createElement(c.a,null,s.a.createElement(j,null)),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.22a5dcab.chunk.js.map