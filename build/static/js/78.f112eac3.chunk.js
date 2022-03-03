(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[78],{984:function(e,a,t){"use strict";t.r(a);var s=t(9),o=t(8),n=t(12),i=t(11),l=t(0),r=t.n(l),p=t(6),c=t(23),m=t(269),h=t(164),d=t(2),u=t(26),v=t.n(u),E=t(72),k=t.n(E),b=t(87),f=t.n(b),_=t(210),g=t.n(_),N=t(34),y=t.n(N),w=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={bankerConfirmToast:!1},o}return Object(o.a)(t,[{key:"showAddBankerConfirmation",value:function(){this.setState({bankerConfirmToast:!0})}},{key:"addBankerAdd",value:function(e){e.stopPropagation(),this.setState({bankerConfirmToast:!1,show_add_button:!1},(function(){this.props.addBankerToLoan(this.props.item.raw_closing_date,this.props.item.claim_id,this.props.item.in_nyc?1:0)}))}},{key:"addBankerCancel",value:function(){this.setState({bankerConfirmToast:!1})}},{key:"render",value:function(){var e=this,a=null;return this.state.bankerConfirmToast&&(a=r.a.createElement("div",null,r.a.createElement("div",{className:"success-message"},r.a.createElement("p",null,"Adding yourself as a banker on this property indicates that you have financed the loan."),r.a.createElement(y.a,{variant:"flat",onClick:function(a){return e.addBankerAdd(a)}},"Add"),r.a.createElement(y.a,{variant:"flat",onClick:this.addBankerCancel.bind(this)},"Cancel")))),r.a.createElement("div",{className:"loan"},a,r.a.createElement("div",{className:"panel mui-panel",key:this.props.item.property_id,onClick:this.props.navToDealDetails.bind(this,this.props.item.deal_id,this.props.item.in_nyc,this.props.item.total_violations,this.props.item.additional_properties,null)},r.a.createElement(v.a,{className:"panel-heading"},r.a.createElement(f.a,{md:"10",sm:"10",xs:"10"},r.a.createElement("p",{className:"panel-info-value property-title"},this.props.item.property_address)),r.a.createElement(f.a,{md:"2",sm:"2",xs:"2"},r.a.createElement("img",{src:"/images/icons/street-view-square.png",className:"street-view-square-loans",alt:"sv-square",onClick:function(){e.props.openStreetView(e.props.item.latitude,e.props.item.longitude,e.props.item.property_address,e.props.item.city_state_zip)}}))),r.a.createElement(v.a,null,r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Address"),r.a.createElement("p",{className:"panel-info-value"},this.props.item.city_state_zip),r.a.createElement("p",{className:"panel-info-value"},"lt"===this.props.item.source?r.a.createElement("i",{className:"orange-text orange-text-hover pointer",onClick:this.props.navToDealDetails.bind(this,this.props.item.deal_id,this.props.item.in_nyc,this.props.item.total_violations,this.props.item.additional_properties,"property-details")},0===this.props.item.additional_properties?"":1===this.props.item.additional_properties?"1 other property":this.props.item.additional_properties+" other properties"):"")),r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Property Type"),r.a.createElement("p",{className:"panel-info-value"},this.props.item.property_type?this.props.item.property_type:"--")),r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Deal Status"),r.a.createElement("p",{className:"panel-info-value"},this.props.item.status?this.props.item.status:"--")),r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Closed Date"),r.a.createElement("p",{className:"panel-info-value"},this.props.item.closing_date?this.props.item.closing_date:"--"))),r.a.createElement(v.a,null,r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Loan Amount"),r.a.createElement("p",{className:"panel-info-value"},this.props.item.loan_amount?this.props.item.loan_amount:"--")),r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Units / Square Feet"),r.a.createElement("p",{className:"panel-info-value"},this.props.item.total_units||"-"," /"," ",this.props.item.total_area||"-")),r.a.createElement(f.a,{md:"3"},r.a.createElement("p",{className:"small-title deal-info-title"},"Banker Name"),this.props.item.bankers?r.a.createElement("p",{className:"panel-info-value"},this.props.item.bankers.map((function(a,t){return r.a.createElement("span",{key:t},t>=1?r.a.createElement("span",null," \u2022 "):"",r.a.createElement("span",{className:"banker-name"},a.banker_name," ",a.rb_id?r.a.createElement("i",{className:"material-icons add-banker-circle-remove",onClick:function(){e.props.removeBanker(a.rb_id,e.props.item.claim_id)}},"clear"):""))}))):"",this.props.item.show_add_button?r.a.createElement("div",{className:"add-banker-section",onClick:this.showAddBankerConfirmation.bind(this)},r.a.createElement("p",{className:"panel-info-value"},"Add me as a Banker"),r.a.createElement("i",{className:"material-icons add-banker-circle"},"add_circle")):"")),r.a.createElement(v.a,{style:{marginBottom:"10px"}}),"lt"===this.props.item.source?r.a.createElement(v.a,null,r.a.createElement(g.a,{style:{marginTop:"20px"}}),r.a.createElement(v.a,null,r.a.createElement(f.a,{md:"12"},r.a.createElement("div",{className:"comps-row"},r.a.createElement("div",{onClick:this.props.navToComps.bind(this,this.props.item.in_nyc,this.props.item.property_address,this.props.item.city_state_zip,this.props.item.property_type_id)},r.a.createElement("div",null,r.a.createElement("div",{className:this.props.item.in_nyc&&null!==this.props.item.total_violations?"border-right":""},r.a.createElement("p",{className:"violation-value comps"},this.props.item.total_comps?Object(d.q)(this.props.item.total_comps):"0",r.a.createElement("span",null,"Comps"))))),r.a.createElement("div",{className:this.props.item.in_nyc&&null!==this.props.item.total_violations?"comps-row-violations":"hidden",onClick:this.props.navToDealDetails.bind(this,this.props.item.deal_id,this.props.item.in_nyc,this.props.item.total_violations,this.props.item.additional_properties,"violations")},r.a.createElement("div",null,r.a.createElement("p",{className:"violation-value"},this.props.item.total_violations,r.a.createElement("span",null,"Violations"))),r.a.createElement("div",null,r.a.createElement("p",{className:"violation-value"},this.props.item.total_complaints,r.a.createElement("span",null,"Complaints")))))))):""))}}]),t}(r.a.Component),C=t(80),O=t(258),T=window.google,S=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={},o}return Object(o.a)(t,[{key:"navToComps",value:function(e,a,t,s,o){o.stopPropagation(),sessionStorage.setItem("comps_inNYC",e),this.props.setPageAndScrollPos("/loans/all-loans",window.scrollY),this.props.submitCompsSearch("".concat(a," ").concat(t),s)}},{key:"navToDealDetails",value:function(e,a,t,s,o,n){if(n.stopPropagation(),e>0||t>=0||s>0){o||(o=s>0?"property-details":"violations"),this.props.setPageAndScrollPos("/loans/all-loans",window.scrollY);var i={deal_id:e,in_nyc:a,violations:t,additional_properties:s};window.location.search&&(i.previous_page=window.location.pathname+window.location.search),d.f.go("/all-loans-dd/".concat(o,"?").concat(Object(C.a)(i)))}else this.props.showNoDataToast("There is no violations or deal details on this loan.")}},{key:"openStreetView",value:function(e,a,t,s){var o=this;(new T.maps.StreetViewService).getPanorama({location:{lat:parseFloat(e),lng:parseFloat(a)},radius:50},(function(n,i){"OK"===i?(o.props.setPageAndScrollPos("/loans/all-loans",window.scrollY),d.f.go("/comp-sv?".concat(Object(C.a)({latitude:e,longitude:a,address:t+" "+s})))):o.props.showNoDataToast("No street view available for this property.")}))}},{key:"render",value:function(){var e=this,a=this.props.loans.map((function(a,t){return r.a.createElement(w,{key:t,item:a,navToDealDetails:e.navToDealDetails.bind(e),openStreetView:e.openStreetView.bind(e),addBankerToLoan:e.props.addBankerToLoan,removeBanker:e.props.removeBanker,navToComps:e.navToComps.bind(e)})}));return r.a.createElement("div",null,this.props.loading?r.a.createElement(k.a,{className:"loading-modal",isOpen:this.props.loading,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},r.a.createElement("div",{className:this.props.loading?"centered-spinner":"hidden"},r.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))):r.a.createElement(v.a,null,r.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple other-loans-check"},r.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},r.a.createElement("input",{type:"checkbox",id:"others",checked:this.props.showOthersLoans,onChange:this.props.updateShowOthersLoans.bind(null,!this.props.showOthersLoans)}),r.a.createElement("span",{className:"checkbox"}),r.a.createElement("span",{className:"ripple"})),r.a.createElement("p",{htmlFor:"others",className:"label"},"Only show other banker's loans")),a.length?r.a.createElement("div",null,a,r.a.createElement(O.a,{currentPage:this.props.currentPage,totalPages:this.props.pages})):r.a.createElement("div",{className:this.props.noLoans?"":"hidden"},r.a.createElement("div",null,r.a.createElement("div",{className:"grey-circle"},r.a.createElement("i",{className:"material-icons"},"warning")),r.a.createElement("h2",{className:"no-results"},this.props.message)))))}}]),t}(r.a.Component),L=t(88),A=t(25),P=function(e){Object(n.a)(t,e);var a=Object(i.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=a.call(this,e)).state={scrolled:!1,showOthersLoans:1},o}return Object(o.a)(t,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.props.comps.previousScrollPos[0]?(setTimeout((function(){window.scrollTo(0,e.props.comps.previousScrollPos[e.props.comps.previousScrollPos.length-1])}),100),setTimeout((function(){e.props.compsActions.resetScrollPosition()}),1e3),this.setState({scrolled:!0})):this.loadAllLoans(this.props.loans.search)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.location.search===e.location.search&&this.props.loans.search===e.loans.search||this.loadAllLoans(e.loans.search)}},{key:"loadAllLoans",value:function(e){this.props.actions.loadAllLoans(e,this.state.showOthersLoans,Object(A.a)("page")||1)}},{key:"updateShowOthersLoans",value:function(e){this.setState({showOthersLoans:e?1:0},(function(){this.props.actions.loadAllLoans(this.props.loans.search,this.state.showOthersLoans)}))}},{key:"render",value:function(){var e="";return this.props.loans.noDataToast&&(e=r.a.createElement(L.a,{closeToast:this.props.actions.closeNoDataToast,delay:6e3},r.a.createElement("div",{className:"success-message"},r.a.createElement("p",null,this.props.loans.message),r.a.createElement(y.a,{variant:"flat",onClick:this.props.actions.closeNoDataToast},"Done")))),r.a.createElement("div",null,e,r.a.createElement(S,{pages:this.props.loans.pages,loans:this.props.loans.allLoans,noLoans:this.props.loans.noLoans,message:this.props.loans.message,loading:this.props.loans.loading,currentPage:this.state.page||1,submitCompsSearch:this.props.compsActions.submitCompsSearch,setPageAndScrollPos:this.props.compsActions.setPageAndScrollPos,showNoDataToast:this.props.actions.showNoDataToast,addBankerToLoan:this.props.actions.addBankerToAllLoan,removeBanker:this.props.actions.removeBankerFromAllLoan,showOthersLoans:this.state.showOthersLoans,updateShowOthersLoans:this.updateShowOthersLoans.bind(this)}))}}]),t}(r.a.Component);a.default=Object(p.b)((function(e){return{loans:e.loans,comps:e.comps}}),(function(e){return{actions:Object(c.b)(m,e),compsActions:Object(c.b)(h,e)}}))(P)}}]);
//# sourceMappingURL=78.f112eac3.chunk.js.map