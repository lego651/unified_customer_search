(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(7),c=n.n(r),l=(n(15),n(1)),i=n(2),m=n(4),s=n(3),u=n(5),h=n(8),d=n.n(h),g=(n(16),a.Component,n(17),function(e){function t(){return Object(l.a)(this,t),Object(m.a)(this,Object(s.a)(t).call(this))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.customerInfo;return o.a.createElement("div",{className:"customer-table-row"},o.a.createElement("div",{className:"customer-name"}," ",e.name),o.a.createElement("table",null,o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("th",null,"Customer ID"),o.a.createElement("th",null,"Age"),o.a.createElement("th",null,"Location"),o.a.createElement("th",null,"Gender"),o.a.createElement("th",null,"Income")),o.a.createElement("tr",null,o.a.createElement("td",null,e.id),o.a.createElement("td",null,e.age),o.a.createElement("td",null,e.location),o.a.createElement("td",null,e.gender),o.a.createElement("td",null,e.income)))))}}]),t}(a.Component)),p=(n(18),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(m.a)(this,Object(s.a)(t).call(this))).state={searchContent:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({searchContent:e.target.value})}},{key:"render",value:function(){var e=this,t=this.props.db,n=this.state.searchContent.trim().toLowerCase();return n.length>0&&(t=t.filter(function(e){return e.name.toLowerCase().match(n)||e.id.toLowerCase().match(n)||e.age.toLowerCase().match(n)||e.location.toLowerCase().match(n)||e.gender.toLowerCase().match(n)||e.income.toLowerCase().match(n)})),o.a.createElement("div",{className:"customer-search-wrapper"},o.a.createElement("h1",null," Unified Customer Search "),o.a.createElement("input",{type:"text",value:this.state.searchContent,onChange:function(t){e.handleChange(t)},placeholder:"Search..."}),o.a.createElement("div",{className:"search-result"},t.map(function(e,t){return o.a.createElement(g,{customerInfo:e,key:t})})))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(p,{db:[{name:"Jeremy Clarke",id:"12345",age:"21",location:"San Jose",gender:"Male",income:"$120,000"},{name:"Metty Bing",id:"12225",age:"25",location:"Fremont",gender:"Female",income:"$950,000"},{name:"Tanaya Smith",id:"12455",age:"18",location:"New York City",gender:"Female",income:"$160,000"},{name:"Sparsh Saxena",id:"13345",age:"26",location:"Philadephia",gender:"Male",income:"$200,000"},{name:"Philip Anderson",id:"13385",age:"32",location:"Sunnyvale",gender:"Male",income:"$280,000"}]}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.84acd8a3.chunk.js.map