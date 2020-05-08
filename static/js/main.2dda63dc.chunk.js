(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(7),c=a.n(l),s=(a(13),a(5)),r=a(1),o=a(2),m=a(4),d=a(3),u=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.item,a=e.handleChange,n=e.handleSubmit,l=e.editItem,c=e.invalidInput;return i.a.createElement("div",{className:"card card-body my-3"},i.a.createElement("div",{className:c?"text-capitalize":"d-none",style:{color:"red"}},"please the Todo List Input can't be empty"),i.a.createElement("form",{onSubmit:n},i.a.createElement("div",{className:"input-group"},i.a.createElement("div",{className:"input-group-prepend"},i.a.createElement("div",{className:"input-group-text bg-primary text-white"},i.a.createElement("i",{className:"fas fa-book"}))),i.a.createElement("input",{type:"text",className:"form-control text-capitalize",placeholder:"add a todo item",value:t,onChange:a})),i.a.createElement("div",{className:"input-group-text bg-success"},i.a.createElement("span",{className:"mx-2"},i.a.createElement("i",{className:"fas fa-list-ul"})),i.a.createElement("span",{className:"mx-2"},i.a.createElement("i",{className:"far fa-calendar-check"}))),i.a.createElement("button",{type:"submit",className:l?"btn btn-block btn-success mt-3":"btn btn-block btn-primary mt-3"},l?"edit item":"add item")))}}]),a}(n.Component),p=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.title,a=e.time,n=e.date,l=e.handleDelete,c=e.handleEdit,s=e.taskCompleted;return i.a.createElement("li",{className:"list-group-item text-capitalize d-flex justify-content-between my-2"},i.a.createElement("input",{type:"checkbox",onClick:s}),i.a.createElement("h6",null,t),i.a.createElement("div",{className:"todo-icon"},a+" "+n,i.a.createElement("span",{className:"mx-2 text-success",onClick:c,style:{cursor:"pointer"}},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{className:"mx-2 text-danger",onClick:l,style:{cursor:"pointer"}},i.a.createElement("i",{className:"fas fa-trash"}))))}}]),a}(n.Component),h=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.clearList,n=e.handleDelete,l=e.handleEdit,c=e.taskCompleted;return i.a.createElement("ul",{className:"list-group my-5"},i.a.createElement("h3",{className:"text-capitalize text-center"},"todo list"),t.map((function(e){return i.a.createElement(p,{key:e.id,title:e.title,time:e.time,date:e.date,handleDelete:function(){return n(e.id)},handleEdit:function(){return l(e.id)},taskCompleted:function(){return c(e)}})})),i.a.createElement("button",{type:"button",className:"btn btn-danger btn-block text-capitalize mt-5",onClick:a},"clear list"))}}]),a}(n.Component),f=(a(14),a(17)),b=function(e){var t=e.title,a=e.taskUncompleted,n=e.deleteCompletedTask;return i.a.createElement("li",{className:"list-group-item d-flex justify-content-between my-2"},i.a.createElement("input",{type:"checkbox",onChange:a,checked:!0}),i.a.createElement("h6",{style:{textDecoration:"line-through",color:"#ababab"}},t),i.a.createElement("div",{className:"todo-icon"},i.a.createElement("span",{className:"mx-2 text-danger",onClick:n,style:{cursor:"pointer"}},i.a.createElement("i",{className:"fa fa-trash"}))))},k=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){return Object(r.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props,t=e.items,a=e.taskUncompleted,n=e.clearCompletedTask,l=e.deleteCompletedTask;return i.a.createElement("ul",{className:"list-group my-5"},i.a.createElement("h3",{className:"text-capitalize text-center"},"Completed Task"),t.map((function(e){return i.a.createElement(b,{key:e.id,title:e.title,taskUncompleted:function(){return a(e)},clearCompletedTask:n,deleteCompletedTask:function(){return l(e.id)}})})),i.a.createElement("button",{type:"button",className:"btn btn-danger text-capitalize mt-5",onClick:n},"Clear Completed Task"))}}]),a}(i.a.Component),E=function(e){Object(m.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={items:[],id:Object(f.a)(),item:"",completedTask:[],time:0,date:0,editItem:!1,invalidInput:!1},e.handleChange=function(t){e.setState({item:t.target.value,time:(new Date).toLocaleTimeString(),date:(new Date).toLocaleDateString()})},e.handleSubmit=function(t){if(t.preventDefault(),""===e.state.item)return e.setState({invalidInput:!0}),!1;var a={id:e.state.id,title:e.state.item,time:e.state.time,date:e.state.date},n=[].concat(Object(s.a)(e.state.items),[a]);e.setState({items:n,item:"",id:Object(f.a)(),editItem:!1,invalidInput:!1})},e.clearList=function(){e.setState({items:[]})},e.handleDelete=function(t){var a=e.state.items.filter((function(e){return e.id!==t}));e.setState({items:a})},e.handleEdit=function(t){var a=e.state.items.filter((function(e){return e.id!==t})),n=e.state.items.find((function(e){return e.id===t}));e.setState({items:a,item:n.title,editItem:!0,id:t})},e.taskCompleted=function(t){var a=e.state.items.filter((function(e){return e.id!==t.id})),n=e.state.items.find((function(e){return e.id===t.id})),i=[].concat(Object(s.a)(e.state.completedTask),[n]);e.setState({items:a,completedTask:i})},e.taskUncompleted=function(t){var a=e.state.completedTask.filter((function(e){return e.id!==t.id})),n=e.state.completedTask.find((function(e){return e.id===t.id})),i=[].concat(Object(s.a)(e.state.items),[n]);e.setState({items:i,completedTask:a})},e.clearCompletedTask=function(){e.setState({completedTask:[]})},e.deleteCompletedTask=function(t){var a=e.state.completedTask.filter((function(e){return e.id!==t}));e.setState({completedTask:a})},e}return Object(o.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"col-10 mx-auto col-md-8 mt-4"},i.a.createElement("h3",{className:"text-capitalize text-center"},"Todo Input"),i.a.createElement(u,{item:this.state.item,handleChange:this.handleChange,handleSubmit:this.handleSubmit,editItem:this.state.editItem,invalidInput:this.state.invalidInput}),i.a.createElement(h,{items:this.state.items,clearList:this.clearList,handleDelete:this.handleDelete,handleEdit:this.handleEdit,taskCompleted:this.taskCompleted}),i.a.createElement(k,{items:this.state.completedTask,taskUncompleted:this.taskUncompleted,clearCompletedTask:this.clearCompletedTask,deleteCompletedTask:this.deleteCompletedTask}))))}}]),a}(i.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.2dda63dc.chunk.js.map