(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{26:function(e,t,n){e.exports=n(42)},34:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(20),i=(n(34),n(35),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,46)).then(function(t){var n=t.getCLS,r=t.getFID,a=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),r(e),a(e),o(e),i(e)})});n(22),n(1);var c=n(5),l=n(6),s=n(4),u=n(3),f=(n(19),n(17)),h=n.n(f);n(41);function m(){m=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r=Object.defineProperty||function(e,t,n){e[t]=n.value},a="function"==typeof Symbol?Symbol:{},o=a.iterator||"@@iterator",i=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function l(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(k){l=function(e,t,n){return e[t]=n}}function s(e,t,n,a){var o=t&&t.prototype instanceof h?t:h,i=Object.create(o.prototype),c=new N(a||[]);return r(i,"_invoke",{value:E(e,n,c)}),i}function u(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(k){return{type:"throw",arg:k}}}e.wrap=s;var f={};function h(){}function p(){}function d(){}var g={};l(g,o,function(){return this});var y=Object.getPrototypeOf,v=y&&y(y(S([])));v&&v!==t&&n.call(v,o)&&(g=v);var b=d.prototype=h.prototype=Object.create(g);function w(e){["next","throw","return"].forEach(function(t){l(e,t,function(e){return this._invoke(t,e)})})}function x(e,t){var a;r(this,"_invoke",{value:function(r,o){function i(){return new t(function(a,i){!function r(a,o,i,c){var l=u(e[a],e,o);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==typeof f&&n.call(f,"__await")?t.resolve(f.__await).then(function(e){r("next",e,i,c)},function(e){r("throw",e,i,c)}):t.resolve(f).then(function(e){s.value=e,i(s)},function(e){return r("throw",e,i,c)})}c(l.arg)}(r,o,a,i)})}return a=a?a.then(i,i):i()}})}function E(e,t,n){var r="suspendedStart";return function(a,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===a)throw o;return _()}for(n.method=a,n.arg=o;;){var i=n.delegate;if(i){var c=j(i,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var l=u(e,t,n);if("normal"===l.type){if(r=n.done?"completed":"suspendedYield",l.arg===f)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r="completed",n.method="throw",n.arg=l.arg)}}}function j(e,t){var n=t.method,r=e.iterator[n];if(void 0===r)return t.delegate=null,"throw"===n&&e.iterator.return&&(t.method="return",t.arg=void 0,j(e,t),"throw"===t.method)||"return"!==n&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var a=u(r,e.iterator,t.arg);if("throw"===a.type)return t.method="throw",t.arg=a.arg,t.delegate=null,f;var o=a.arg;return o?o.done?(t[e.resultName]=o.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):o:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function O(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function L(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function N(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(O,this),this.reset(!0)}function S(e){if(e){var t=e[o];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,a=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return a.next=a}}return{next:_}}function _(){return{value:void 0,done:!0}}return p.prototype=d,r(b,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:p,configurable:!0}),p.displayName=l(d,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,d):(e.__proto__=d,l(e,c,"GeneratorFunction")),e.prototype=Object.create(b),e},e.awrap=function(e){return{__await:e}},w(x.prototype),l(x.prototype,i,function(){return this}),e.AsyncIterator=x,e.async=function(t,n,r,a,o){void 0===o&&(o=Promise);var i=new x(s(t,n,r,a),o);return e.isGeneratorFunction(n)?i:i.next().then(function(e){return e.done?e.value:i.next()})},w(b),l(b,c,"Generator"),l(b,o,function(){return this}),l(b,"toString",function(){return"[object Generator]"}),e.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},e.values=S,N.prototype={constructor:N,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(L),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return i.type="throw",i.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var c=n.call(o,"catchLoc"),l=n.call(o,"finallyLoc");if(c&&l){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var a=this.tryEntries[r];if(a.tryLoc<=this.prev&&n.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),L(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var a=r.arg;L(n)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:S(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function p(){var e=Object(r.useState)(null),t=Object(s.a)(e,2),n=t[0],o=t[1],i=Object(r.useState)(null),f=Object(s.a)(i,2),p=f[0],d=f[1],g=Object(r.useState)(""),y=Object(s.a)(g,2),v=y[0],b=y[1],w=Object(r.useState)([]),x=Object(s.a)(w,2),E=x[0],j=x[1],O=Object(r.useState)([]),L=Object(s.a)(O,2),N=L[0],S=L[1],_=Object(r.useState)(""),k=Object(s.a)(_,2),F=k[0],P=k[1],T=Object(r.useState)(""),C=Object(s.a)(T,2),G=C[0],J=C[1],z=function(e){return new Promise(function(t,n){var r=new FileReader;r.readAsDataURL(e),r.onload=function(){return t(r.result)},r.onerror=function(e){return n(e)}})},I=Object(r.useState)(null),R=Object(s.a)(I,2),D=(R[0],R[1],function(){var e=Object(c.a)(m().mark(function e(){var t,r;return m().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(n){e.next=2;break}return e.abrupt("return");case 2:return d(URL.createObjectURL(n)),e.next=5,z(n);case 5:t=e.sent,r=t.substring(t.indexOf(",")+1),console.log(JSON.stringify({job_requirements:G,resume_info:r})),fetch("http://103.160.76.63:5000/all",{method:"POST",body:JSON.stringify({job_requirements:G,resume_info:r}),headers:{"content-type":n.type,"content-length":"".concat(n.size)}}).then(function(e){return e.json()}).then(function(e){console.log(e.bot_response),P(e.bot_response)}).catch(function(e){return console.error(e)});case 9:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}());return a.a.createElement("div",null,a.a.createElement("div",{style:{fontSize:"50px",marginLeft:"50px",marginTop:"50px"}},"Innovation Geeks - Job Fit"),a.a.createElement(u.h,{fluid:!0,className:"py-5",style:{backgroundColor:"#FFF"}},a.a.createElement(u.r,{className:"d-flex justify-content-right"},a.a.createElement(u.f,{md:"4",lg:"4",xl:"4",className:"mb-4 mb-md-0"},a.a.createElement(u.i,{type:"file",onChange:function(e){e.target.files&&o(e.target.files[0])},size:"lg"}),a.a.createElement("div",{style:{margin:"10px"}},a.a.createElement("p",null,"Job Description")),a.a.createElement(u.s,{style:{width:"350px",height:"450px"},placeholder:"Input JD...",onChange:function(e){J(e.target.value)}}),a.a.createElement("br",null),a.a.createElement("input",{type:"button",value:"Submit",className:"btn btn-success btn-lg",style:{borderRadius:"10px",width:"150px"},onClick:D})),a.a.createElement(u.f,{md:"4",lg:"4",xl:"4",className:"mb-4 mb-md-0 pdf-container"},a.a.createElement("img",{src:p,style:{height:"100%",width:"100%"}})),a.a.createElement(u.f,{md:"8",lg:"6",xl:"4"},a.a.createElement(u.b,{style:{height:"100%"}},a.a.createElement(u.e,{className:"d-flex justify-content-between align-items-center p-3",style:{borderTop:"4px solid #ffa900"}},a.a.createElement("h5",{className:"mb-0"},"Chat messages"),a.a.createElement("div",{className:"d-flex flex-row align-items-center"},a.a.createElement("span",{className:"badge bg-warning me-3"},"20"),a.a.createElement(u.k,{fas:!0,icon:"minus",size:"xs",className:"me-3 text-muted"}),a.a.createElement(u.k,{fas:!0,icon:"comments",size:"xs",className:"me-3 text-muted"}),a.a.createElement(u.k,{fas:!0,icon:"times",size:"xs",className:"me-3 text-muted"}))),a.a.createElement(h.a,{suppressScrollX:!0,style:{position:"relative",height:"400px"},className:"pt-3 pe-3"},a.a.createElement("div",null,console.log(F),""===F?a.a.createElement("div",{style:{textAlign:"center",fontSize:"30px",fontWeight:"bold"}},"Job Fit"):a.a.createElement("div",{className:"d-flex flex-row justify-content-start"},a.a.createElement("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",alt:"avatar 1",style:{width:"45px",height:"100%"}}),a.a.createElement("div",null,a.a.createElement("p",{className:"small p-2 ms-3 mb-1 rounded-3",style:{backgroundColor:"#f5f6f7"}},F)))),E.map(function(e,t){return a.a.createElement("div",null,a.a.createElement("div",{className:"d-flex flex-row justify-content-end"},a.a.createElement("div",null,a.a.createElement("p",{className:"small p-2 me-3 mb-1 text-white rounded-3 bg-primary"},e)),a.a.createElement("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp",alt:"avatar 1",style:{width:"45px",height:"100%"}})),a.a.createElement("div",{className:"d-flex flex-row justify-content-start"},a.a.createElement("img",{src:"https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp",alt:"avatar 1",style:{width:"45px",height:"100%"}}),a.a.createElement("div",null,a.a.createElement("p",{className:"small p-2 ms-3 mb-1 rounded-3",style:{backgroundColor:"#f5f6f7"}},N[t]))))})),a.a.createElement(u.d,{className:"text-muted d-flex justify-content-start align-items-center p-3"},a.a.createElement(u.l,{className:"mb-0"},a.a.createElement("input",{className:"form-control",placeholder:"Type message",type:"text",value:v,onChange:function(e){return b(e.target.value)}}),a.a.createElement(u.a,{color:"warning",style:{paddingTop:".55rem"},onClick:function(e){e.preventDefault(),""!==v&&(j([].concat(Object(l.a)(E),[v])),console.log(v),fetch("http://103.160.76.63:5000/chat",{method:"POST",body:JSON.stringify({data:v}),headers:{"content-type":v.type,"content-length":"".concat(v.length)}}).then(function(e){return e.json()}).then(function(e){console.log(e),S([].concat(Object(l.a)(N),[e.bot_response]))}).catch(function(e){return console.error(e)})),b("")}},"Send"))))))))}var d=document.getElementById("root");Object(o.createRoot)(d).render(a.a.createElement(r.StrictMode,null,a.a.createElement(p,null))),i()}},[[26,1,2]]]);
//# sourceMappingURL=main.9bf4b08b.chunk.js.map