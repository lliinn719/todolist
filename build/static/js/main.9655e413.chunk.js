(this.webpackJsonptodolist=this.webpackJsonptodolist||[]).push([[0],{25:function(t,e,o){},32:function(t,e,o){"use strict";o.r(e);var n=o(0),a=o(19),c=o.n(a),s=(o(25),function(t){t&&t instanceof Function&&o.e(3).then(o.bind(null,33)).then((function(e){var o=e.getCLS,n=e.getFID,a=e.getFCP,c=e.getLCP,s=e.getTTFB;o(t),n(t),a(t),c(t),s(t)}))}),i=o(9),r=o(2),d=o(7),l=o(8),h=o(11),u=o(10),j=o(1),p=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={checked:!1},t.handleChecked=function(){!0===t.state.checked?t.setState({checked:!1}):t.setState({checked:!0})},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this.props,e=t.id,o=t.todo,n=t.del,a=this.state.checked;return console.log(o),Object(j.jsxs)("li",{id:e,children:[Object(j.jsx)("input",{type:"checkbox",onChange:this.handleChecked}),Object(j.jsx)("span",{style:!0===a?{textDecoration:"line-through"}:{textDecoration:"none"},children:o}),Object(j.jsx)(i.b,{to:"/todo/edit/".concat(e),id:"edit",children:"Edit"}),Object(j.jsx)("button",{id:"del",onClick:function(){n(e)},children:"X"})]})}}]),o}(n.Component),b=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todoList:[]},t.componentDidMount=function(){var e=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[];console.log(e),e.length>0&&t.setState({todoList:e},(function(){console.log(t.state,localStorage)}))},t.handleonDelete=function(e){t.state.todoList;var o=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[];o.splice(e,1),console.log("pp",e,o),localStorage.setItem("todoList",JSON.stringify(o)),t.setState({todoList:o})},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this,e=this.state.todoList;return Object(j.jsxs)("div",{className:"app",children:[Object(j.jsx)("h1",{children:"Todolist"}),Object(j.jsx)("br",{}),Object(j.jsx)(i.b,{to:"/todo/create",className:"button",children:"+"}),Object(j.jsx)("div",{className:"todoList",children:Object(j.jsx)("ul",{children:e.map((function(e,o){return Object(j.jsx)(p,{id:o,todo:e,del:t.handleonDelete},o)}))})})]})}}]),o}(n.Component),g=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todo:""},t.componentDidMount=function(){t.setState({todo:""})},t.handleAddTodo=function(){var e=t.state.todo,o=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[];""===e?alert("\u8acb\u8f38\u5165\u4ee3\u8fa6\u4e8b\u9805"):(o.push(e),localStorage.setItem("todoList",JSON.stringify(o)),t.setState({todo:""}),t.props.history.push("/"))},t.handleKeyDown=function(e){13===e.KeyCode&&t.handleAddTodo()},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this,e=this.state.todo;return Object(j.jsxs)("div",{className:"create",children:[Object(j.jsx)("h1",{children:"Create todo"}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{type:"text",value:e,onChange:function(e){return t.setState({todo:e.target.value})},onKeyDown:function(e){return t.handleKeyDown(e)},autoFocus:!0}),Object(j.jsx)("input",{type:"submit",value:"Add",onClick:this.handleAddTodo})]})}}]),o}(n.Component),O=function(t){Object(h.a)(o,t);var e=Object(u.a)(o);function o(){var t;Object(d.a)(this,o);for(var n=arguments.length,a=new Array(n),c=0;c<n;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={todoList:[]},t.componentDidMount=function(){t.props.match.params.id;var e=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[];console.log("data",e),e.length>0&&t.setState({todoList:e},(function(){console.log(t.state)}))},t.handleEditTodo=function(){var e=localStorage.getItem("todoList")?JSON.parse(localStorage.getItem("todoList")):[],o=t.props.match.params.id,n=t.state.todoList;e[o]=n,localStorage.setItem("todoList",JSON.stringify(e))},t}return Object(l.a)(o,[{key:"render",value:function(){var t=this,e=this.props.match.params.id,o=this.state.todoList;return Object(j.jsxs)("div",{children:[Object(j.jsx)("input",{className:"edit",type:"text",defaultValue:o[e],onChange:function(e){return t.setState({todoList:e.target.value})}}),Object(j.jsx)("button",{onClick:this.handleEditTodo,children:Object(j.jsx)(i.b,{to:"/todo",children:"\u7de8\u8f2f\u5b8c\u6210"})})]})}}]),o}(n.Component);c.a.render(Object(j.jsx)(i.a,{children:Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.a,{exact:!0,path:"/",to:"todo"}),Object(j.jsx)(r.b,{exact:!0,path:"/todo",component:b}),Object(j.jsx)(r.b,{exact:!0,path:"/todo/create",component:g}),Object(j.jsx)(r.b,{exact:!0,path:"/todo/edit/:id",component:O})]})}),document.getElementById("root")),s()}},[[32,1,2]]]);
//# sourceMappingURL=main.9655e413.chunk.js.map