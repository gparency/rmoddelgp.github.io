(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[67],{980:function(a,e,t){"use strict";t.r(e);var l=t(9),n=t(8),i=t(12),o=t(11),s=t(0),r=t.n(s),c=t(6),m=t(23),p=t(166),d=t(72),v=t.n(d),E=t(26),u=t.n(E),N=t(87),y=t.n(N),h=t(210),C=t.n(h),b=t(47),g=t.n(b),f=function(a){return r.a.createElement("div",{className:"violation"},r.a.createElement(g.a,{className:"panel"},a.propertyName||a.propertyCityState?r.a.createElement(u.a,{className:"panel-heading"},r.a.createElement("div",{className:"violation-property"},a.propertyName?a.propertyName:""),r.a.createElement("div",{className:"violation-city"},a.propertyCityState?a.propertyCityState:"")):"",r.a.createElement(u.a,{className:"violation-circles"},r.a.createElement(y.a,{md:"2"},r.a.createElement("div",{className:"violation-circle"},a.DOBComplaints),r.a.createElement("p",{className:"violation-name"},"DOBComplaints")),r.a.createElement(y.a,{md:"2"},r.a.createElement("div",{className:"violation-circle"},a.HPDComplaints),r.a.createElement("p",{className:"violation-name"},"HPDComplaints")),r.a.createElement(y.a,{md:"2"},r.a.createElement("div",{className:"violation-circle"},a.ECBComplaints),r.a.createElement("p",{className:"violation-name"},"ECBComplaints")),r.a.createElement(y.a,{md:"2"},r.a.createElement("div",{className:"violation-circle orange-background"},a.DOBViolations),r.a.createElement("p",{className:"violation-name"},"DOBViolations")),r.a.createElement(y.a,{md:"2"},r.a.createElement("div",{className:"violation-circle orange-background"},a.HPDViolations),r.a.createElement("p",{className:"violation-name"},"HPDViolations")),r.a.createElement(y.a,{md:"2"},r.a.createElement("div",{className:"violation-circle orange-background"},a.ECBViolations),r.a.createElement("p",{className:"violation-name"},"ECBViolations"))),r.a.createElement(C.a,null),r.a.createElement(u.a,null,r.a.createElement(y.a,{md:"6",className:"complaint-total"},r.a.createElement("p",null,"Total Complaints: ",a.totalComplaints)),r.a.createElement(y.a,{md:"6",className:"violation-total"},r.a.createElement("p",null,"Total Violations: ",a.totalViolations)))))},D=function(a){var e=null,t=a.violations.map((function(a,e){return r.a.createElement(f,{key:e,propertyName:a.property_address?a.property_address:"",propertyCityState:a.city_state?a.city_state:"",DOBComplaints:a.dob_complaints,HPDComplaints:a.hpd_complaints,ECBComplaints:a.ecb_complaints,DOBViolations:a.dob_violations,HPDViolations:a.hpd_violations,ECBViolations:a.ecb_violations,totalComplaints:a.total_complaints,totalViolations:a.total_violations})}));return a.noViolations&&(e=r.a.createElement("div",null,r.a.createElement("div",{className:"grey-circle"},r.a.createElement("i",{className:"material-icons"},"business")),r.a.createElement("h2",{className:"no-results"},"Violation data is currently only available on New York City properties"))),r.a.createElement("div",{className:"violations-page"},r.a.createElement(v.a,{className:"loading-modal",isOpen:a.loading,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},r.a.createElement("div",{className:a.loading?"centered-spinner":"hidden"},r.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))),e,t,r.a.createElement("div",{className:a.violations.length<1?"hidden":""},r.a.createElement("p",{className:"violation-footer"},"For violation removal and remediation call Jack Jaffa and Associates at 718-855-6110 or visit"," ",r.a.createElement("a",{href:"http://www.jackjaffa.com",target:"_blank",rel:"noopener noreferrer"},"jackjaffa.com"))))},O=t(25),V=function(a){Object(i.a)(t,a);var e=Object(o.a)(t);function t(){return Object(l.a)(this,t),e.apply(this,arguments)}return Object(n.a)(t,[{key:"componentDidMount",value:function(){"rp"===this.props.match.params.dealType?this.props.actions.loadRPViolations(Object(O.a)("property_id")):this.props.actions.loadViolations(this.props.match.params.dealId?this.props.match.params.dealId:Object(O.a)("deal_id")?Object(O.a)("deal_id"):"")}},{key:"render",value:function(){return r.a.createElement(D,{violations:this.props.dealDetails.violations,loading:this.props.dealDetails.loading,noViolations:this.props.dealDetails.noViolations})}}]),t}(r.a.Component);e.default=Object(c.b)((function(a){return{dealDetails:a.dealDetails}}),(function(a){return{actions:Object(m.b)(p,a)}}))(V)}}]);
//# sourceMappingURL=67.4ba4b941.chunk.js.map