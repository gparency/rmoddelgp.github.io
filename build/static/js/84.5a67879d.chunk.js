(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[84],{978:function(e,t,a){"use strict";a.r(t);var s=a(10),r=a.n(s),n=a(19),o=a(9),i=a(8),l=a(12),c=a(11),p=a(0),m=a.n(p),u=a(6),h=a(23),d=a(72),k=a.n(d),g=a(45),b=a.n(g),f=a(26),v=a.n(f),E=a(87),B=a.n(E),O=a(59),w=a(2),N=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return m.a.createElement(v.a,null,m.a.createElement(B.a,{md:"11",sm:"11",xs:"11",onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"custom-report","sr-id":e.props.item.sr_id,"report-name":e.props.item.title})))}},m.a.createElement("img",{src:"/images/icons/reports.png",className:"reports-row-icon",alt:"report"}),this.props.item.title))}}]),a}(m.a.Component),R=a(34),L=a.n(R),C=a(88),y=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(e){var s;return Object(o.a)(this,a),(s=t.call(this,e)).state={brokersList:[],banksList:[],selectedBrokers:[],selectedBank:null,showOtherBrokersOptions:!1,showBankList:!1},s}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this,t=[{value:0,label:"All"}];this.props.membersList.filter((function(t){return t.member_id!==parseInt(e.props.authData.member_id,10)})).map((function(e){return t.push({value:e.member_id,label:e.full_name})}));var a=[];this.props.banksList.map((function(e){return a.push({value:e.bank_id,label:e.bank_name})})),this.setState({brokersList:t,banksList:a})}},{key:"selectBrokersChange",value:function(e){e.filter((function(e){return 0===e.value})).length>0?this.setState({selectedBrokers:this.state.brokersList.slice(1)}):this.setState({selectedBrokers:e})}},{key:"selectBankChange",value:function(e){this.setState({selectedBank:e})}},{key:"clickOtherBrokersReport",value:function(){this.setState({showOtherBrokersOptions:!this.state.showOtherBrokersOptions})}},{key:"render",value:function(){var e=this,t=null;this.props.reports&&(t=this.props.reports.map((function(t,a){return m.a.createElement(N,{key:a,item:t,openReportAsPdf:e.props.getReportPDF})})));var a=null;return this.props.toast.show&&(a=m.a.createElement(C.a,{closeToast:this.props.closeToast,delay:6e3},m.a.createElement("div",{className:"success-message"},m.a.createElement("p",null,this.props.toast.message),m.a.createElement(L.a,{variant:"flat",onClick:this.props.closeToast},this.props.toast.success?"Done":"Dismiss")))),m.a.createElement("div",{className:"report-outer-container"},a,m.a.createElement("div",{className:"reports-list reports-container"},m.a.createElement(v.a,null,m.a.createElement("p",{className:"report-list-title"},"Standard Reports")),m.a.createElement(v.a,null,m.a.createElement(B.a,{md:"11",sm:"11",xs:"11",onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"all-in-one"})))}},m.a.createElement("img",{src:"/images/icons/reports.png",className:"reports-row-icon",alt:"report"}),"All in One Report"))),2!==this.props.authData.company_id&&this.props.authData.is_broker&&m.a.createElement("div",{className:"reports-list reports-container"},m.a.createElement(v.a,null,m.a.createElement("p",{className:"report-list-title"},"MTM Goals Reports")),m.a.createElement(v.a,null,m.a.createElement(B.a,{md:"11",sm:"11",xs:"11",onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"mtm","mtm-data":parseInt(e.props.authData.member_id,10)})))}},m.a.createElement("img",{src:"/images/icons/reports.png",className:"reports-row-icon",alt:"report"}),"Personal MTM Goals Report")),(2===this.props.authData.member_role||3===this.props.authData.member_role||this.props.authData.addons.includes(1)||this.props.authData.addons.includes(32)||this.props.authData.addons.includes(54))&&m.a.createElement(v.a,null,m.a.createElement(B.a,{md:"11",sm:"11",xs:"11",onClick:function(){return e.clickOtherBrokersReport()}},m.a.createElement("img",{src:"/images/icons/reports.png",className:"reports-row-icon",alt:"report"}),"Other Brokers' MTM Goals Report"),m.a.createElement("div",{className:this.state.showOtherBrokersOptions?"select-brokers-container":"hidden"},m.a.createElement(B.a,{md:"11",sm:"11",xs:"11"},m.a.createElement(O.a,{value:this.state.selectedBrokers,onChange:function(t){return e.selectBrokersChange(t)},options:this.state.selectedBrokers.length===this.state.brokersList.length-1?[]:this.state.brokersList,inputValue:this.state.brokersSearchVal,onInputChange:function(t){return e.setState({brokersSearchVal:t})},isMulti:!0,isSearchable:!0,placeholder:"Select Brokers"}),m.a.createElement("div",{className:"add-note-buttons"},m.a.createElement(L.a,{variant:"flat",disabled:0===this.state.selectedBrokers.length,onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"mtm","mtm-data":e.state.selectedBrokers.map((function(e){return parseInt(e.value,10)})),"mtm-combined":0})))}},"View Separate"),m.a.createElement(L.a,{variant:"flat",disabled:0===this.state.selectedBrokers.length,onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"mtm","mtm-data":e.state.selectedBrokers.map((function(e){return parseInt(e.value,10)})),"mtm-combined":1})))}},"View Combined"))))),(2===this.props.authData.member_role||3===this.props.authData.member_role)&&m.a.createElement(v.a,{className:this.state.showOtherBrokersOptions?"other-brokers-opened":""},m.a.createElement(B.a,{md:"11",sm:"11",xs:"11",onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"full-mtm"})))}},m.a.createElement("img",{src:"/images/icons/reports.png",className:"reports-row-icon",alt:"report"}),"Full Blown MTM"))),2!==this.props.authData.company_id&&this.props.authData.is_broker&&(2===this.props.authData.member_role||3===this.props.authData.member_role||this.props.authData.addons.includes(27)||this.props.authData.addons.includes(32))&&this.props.banksList.length>0&&m.a.createElement("div",{className:"reports-list reports-container"},m.a.createElement(v.a,null,m.a.createElement("p",{className:"report-list-title"},"Bank Reports")),m.a.createElement(v.a,null,m.a.createElement(B.a,{md:"11",sm:"11",xs:"11",onClick:function(){return e.setState({showBankList:!e.state.showBankList})}},m.a.createElement("img",{src:"/images/icons/reports.png",className:"reports-row-icon",alt:"report"}),"Bank Pipeline"),m.a.createElement("div",{className:this.state.showBankList?"select-brokers-container":"hidden"},m.a.createElement(B.a,{md:"11",sm:"11",xs:"11"},m.a.createElement(O.a,{value:this.state.selectedBank,onChange:function(t){return e.selectBankChange(t)},options:this.state.banksList,inputValue:this.state.banksSearchVal,onInputChange:function(t){return e.setState({banksSearchVal:t})},isMulti:!1,isSearchable:!0,placeholder:"Select Bank"}),m.a.createElement("div",{className:"add-note-buttons"},m.a.createElement(L.a,{variant:"flat",disabled:!this.state.selectedBank,onClick:function(){return w.f.go("/reports/view-report?".concat(b.a.stringify({report:"bank-pipeline","bank-id":e.state.selectedBank.value})))}},"View Report")))))),m.a.createElement("div",{className:"reports-list reports-container"},m.a.createElement(v.a,null,m.a.createElement("p",{className:"report-list-title"},"Custom Reports")),t),this.props.loadingReport&&m.a.createElement(k.a,{className:"loading-modal",ariaHideApp:!1,contentLabel:"modal",isOpen:!0,shouldCloseOnOverlayClick:!1},m.a.createElement("div",{className:"centered-spinner"},m.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))))}}]),a}(m.a.Component),S=a(263),D=a(50),M=function(e){Object(l.a)(a,e);var t=Object(c.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=Object(n.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.props.navActions.updateNavTitle("Reports"),e.next=3,this.getMembersList();case 3:return e.next=5,this.getBanksList();case 5:return e.next=7,this.props.actions.getReportList();case 7:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"getMembersList",value:function(){var e=JSON.parse(localStorage.getItem("data"));(2===e.member_role||3===e.member_role||e.addons.includes(1)||e.addons.includes(32)||e.addons.includes(54))&&this.props.actions.getMembersList()}},{key:"getBanksList",value:function(){var e=JSON.parse(localStorage.getItem("data"));(2===e.member_role||3===e.member_role||e.addons.includes(27)||e.addons.includes(32))&&this.props.actions.getBanksList()}},{key:"render",value:function(){return m.a.createElement("div",null,this.props.reports.loadingReportsList?m.a.createElement(k.a,{className:"loading-modal",ariaHideApp:!1,contentLabel:"modal",isOpen:this.props.reports.loadingReportsList,shouldCloseOnOverlayClick:!1},m.a.createElement("div",{className:this.props.reports.loadingReportsList?"centered-spinner":"hidden"},m.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))):m.a.createElement(y,{loadingReport:this.props.reports.loadingReport,reports:this.props.reports.listReports,membersList:this.props.reports.members,banksList:this.props.reports.banks,toast:this.props.reports.toast,authData:JSON.parse(localStorage.getItem("data")),getAllInOneReport:this.props.actions.getAllInOneReport,getReportPDF:this.props.actions.getReportPDF,getMTMReport:this.props.actions.getMTMReport,getFullBlownMTMReport:this.props.actions.getFullBlownMTMReport,getBankPipelineReport:this.props.actions.getBankPipelineReport,closeToast:this.props.actions.closeToast}))}}]),a}(m.a.Component);t.default=Object(u.b)((function(e){return{reports:e.reports}}),(function(e){return{actions:Object(h.b)(S,e),navActions:Object(h.b)(D,e)}}))(M)}}]);
//# sourceMappingURL=84.5a67879d.chunk.js.map