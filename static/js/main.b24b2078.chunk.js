(this.webpackJsonpdhwani=this.webpackJsonpdhwani||[]).push([[0],{19:function(t,e,n){},41:function(t,e,n){},86:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),c=n(33),i=n.n(c),r=(n(41),n(19),n(11)),o=n(12),l=n(16),d=n(15),h=n(10),j=n(13),b=n.n(j),u=n(14),p=n.n(u),m=(n(31),n(1)),O=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleClickArg=function(){a.state.call=0},a.state={data:{},loading:!1,call:1},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({loading:!0}),setTimeout((function(){1===t.state.call&&b.a.get("https://reqres.in/api/users?page=2",{headers:{"app-id":"60c9448aa9b59526b9010cfc"}}).then((function(e){var n=e.data;console.log(n),t.setState({data:n.data,loading:!1})})).catch(console.error)}),2e3)}},{key:"render",value:function(){var t=this;return Object(m.jsx)("div",{className:"main-div",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"prime-btn",children:Object(m.jsx)(h.b,{to:"/piechart",onClick:this.handleClickArg,children:Object(m.jsx)("button",{children:"Go to Page2 \u2192"})})}),this.state.loading?Object(m.jsx)("div",{style:{textAlign:"center",marginTop:100},children:Object(m.jsx)(p.a,{type:"Bars",color:"#12A6FF",height:100,width:100})}):Object(m.jsx)("div",{class:"table-wrap",children:Object(m.jsxs)("table",{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Image"}),Object(m.jsx)("th",{children:"First Name"}),Object(m.jsx)("th",{children:"Last Name"}),Object(m.jsx)("th",{children:"email"})]})}),Object(m.jsx)("tbody",{children:Object.keys(this.state.data).map((function(e){return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{className:"tab-img",children:Object(m.jsx)("img",{src:t.state.data[e].avatar,alt:""})}),Object(m.jsx)("td",{children:t.state.data[e].first_name}),Object(m.jsx)("td",{children:t.state.data[e].first_name}),Object(m.jsx)("td",{children:t.state.data[e].email})]})}))})]})})]})})}}]),n}(a.PureComponent),f=n(22),g=n.n(f),x=n(35),v=n(36),y=n.n(v),k=function(t){return new Intl.NumberFormat("en-IN",{style:"currency",currency:"INR",minimumFractionDigits:0}).format(t)},w=function(t){Object(l.a)(n,t);var e=Object(d.a)(n);function n(t){var a;return Object(r.a)(this,n),(a=e.call(this,t)).handleClickArg=function(){a.state.call=0},a.state={data:{},show:!1,loading:!1,call:1,options:{chart:{type:"donut"},colors:["#148da0","#5bafbd","#a1d1d9","#0e6370"],labels:["employee1","employee2","employee3","employee4"],tooltip:{y:{formatter:function(t){return k(t)}}},plotOptions:{pie:{startAngle:0,endAngle:360,customScale:.7,offsetY:-30,donut:{size:"42%"}}},dataLabels:{enabled:!1},fill:{type:"gradient"},legend:{fontSize:"14px",fontWeight:600,offsetY:50,formatter:function(t,e){return t+" - "+k(e.w.globals.series[e.seriesIndex])}},responsive:[{breakpoint:480,options:{chart:{width:450},plotOptions:{pie:{startAngle:0,endAngle:360,customScale:.9,offsetY:0}},legend:{position:"bottom",offsetY:0,formatter:function(t,e){return t+" - "+k(e.w.globals.series[e.seriesIndex])}}}},{breakpoint:900,options:{chart:{width:500},plotOptions:{pie:{startAngle:0,endAngle:360,customScale:.9,offsetY:0}}}},{breakpoint:1200,options:{chart:{width:600},plotOptions:{pie:{startAngle:0,endAngle:360,customScale:.9,offsetY:0}}}}]}},a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var t=Object(x.a)(g.a.mark((function t(){var e=this;return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:this.setState({loading:!0}),setTimeout((function(){1===e.state.call&&b.a.get("https://mocki.io/v1/9bb4e253-36cc-4d9a-bda4-19bce367bc11").then((function(t){var n=t.data;console.log(n),e.setState({data:n,show:!0,loading:!1})})).catch(console.error)}),2e3);case 2:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=[];return Object.keys(this.state.data).map((function(n){e.push(parseInt(t.state.data[n].salary))})),Object(m.jsx)("div",{className:"main-div",children:Object(m.jsxs)("div",{className:"card",children:[Object(m.jsx)("div",{className:"prime-btn",children:Object(m.jsx)(h.b,{to:"/",onClick:this.handleClickArg,children:Object(m.jsx)("button",{children:"Go to Page1 \u2192"})})}),this.state.loading?Object(m.jsx)("div",{style:{textAlign:"center",marginTop:100},children:Object(m.jsx)(p.a,{type:"Bars",color:"#12A6FF",height:100,width:100})}):Object(m.jsx)("div",{children:this.state.show?Object(m.jsxs)("div",{className:"donut-div",children:[Object(m.jsx)("div",{className:"donut-head",children:"Donut Chart"}),Object(m.jsx)("div",{className:"donut",children:Object(m.jsx)(y.a,{options:this.state.options,series:e,type:"donut",width:"60%"})})]}):Object(m.jsx)("span",{})})]})})}}]),n}(a.Component),A=n(3);var N=function(){return Object(m.jsx)("div",{className:"App",children:Object(m.jsxs)(h.a,{children:[Object(m.jsx)(A.a,{exact:!0,path:"/",component:O}),Object(m.jsx)(A.a,{exact:!0,path:"/piechart",component:w})]})})},C=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,87)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,c=e.getLCP,i=e.getTTFB;n(t),a(t),s(t),c(t),i(t)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(N,{})}),document.getElementById("root")),C()}},[[86,1,2]]]);
//# sourceMappingURL=main.b24b2078.chunk.js.map