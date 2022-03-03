(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[31],{740:function(e,t,a){"use strict";var s=a(9),n=a(8),l=a(12),r=a(11),o=a(254),i=a(2),u=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={formattedValue:""},n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.value?this.formatValue(+parseFloat(this.props.value).toFixed(this.props.decimalPlaces||2)):"";this.setState({formattedValue:e}),this.validate(this.props.value,this.props.minValue,this.props.maxValue,this.props.required)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.value===e.value&&this.props.minValue===e.minValue&&this.props.maxValue===e.maxValue||this.validate(e.value,e.minValue,e.maxValue,e.required)}},{key:"formatValue",value:function(e){e=e.toString();var t=0===this.props.decimalPlaces?new RegExp("^\\d*?$"):new RegExp("^\\d*(\\.\\d{0,"+(this.props.decimalPlaces||2)+"})?$");return e.match(t)||(e=e.slice(0,-1)),e?"$"+Object(i.r)(e):""}},{key:"stripFormat",value:function(e){return e?e.replace(/[^0-9.]/g,""):""}}]),a}(o.a);t.a=u},741:function(e,t,a){"use strict";var s=a(9),n=a(8),l=a(12),r=a(11),o=a(254),i=a(2),u=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={formattedValue:""},n}return Object(n.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this.props.value?this.formatValue(+parseFloat(100*this.props.value).toFixed(this.props.decimalPlaces||2)):"";this.setState({formattedValue:e}),this.validate(this.props.value?100*this.props.value:null,this.props.minValue?100*this.props.minValue:null,this.props.maxValue?100*this.props.maxValue:null,this.props.required)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(this.props.value!==e.value||this.props.minValue!==e.minValue||this.props.maxValue!==e.maxValue){var t=e.value?this.formatValue(+parseFloat(100*e.value).toFixed(e.decimalPlaces||2)):"";this.setState({formattedValue:t}),this.validate(e.value?100*e.value:null,e.minValue?100*e.minValue:null,e.maxValue?100*e.maxValue:null,e.required)}}},{key:"formatValue",value:function(e){e=e.toString();var t=0===this.props.decimalPlaces?new RegExp("^\\d*?$"):new RegExp("^\\d*(\\.\\d{0,"+(this.props.decimalPlaces||2)+"})?$");return e.match(t)||(e=e.slice(0,-1)),e?Object(i.r)(e)+"%":""}},{key:"stripFormat",value:function(e){return e?e.replace(/[^0-9.]/g,""):""}}]),a}(o.a);t.a=u},743:function(e,t,a){"use strict";var s=a(9),n=a(8),l=a(17),r=a(12),o=a(11),i=a(0),u=a.n(i),c=a(39),p=a.n(c),h=a(256),m=function(e){Object(r.a)(a,e);var t=Object(o.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={noteModalOpen:!1,showAllNotes:!1},n.addNoteToLocalArray=n.addNoteToLocalArray.bind(Object(l.a)(n)),n.openNoteModal=n.openNoteModal.bind(Object(l.a)(n)),n.closeNoteModal=n.closeNoteModal.bind(Object(l.a)(n)),n.showAllNotes=n.showAllNotes.bind(Object(l.a)(n)),n}return Object(n.a)(a,[{key:"showAllNotes",value:function(){this.setState({showAllNotes:!this.state.showAllNotes})}},{key:"openNoteModal",value:function(e){e.preventDefault(),this.setState({noteModalOpen:!0})}},{key:"closeNoteModal",value:function(e){e.preventDefault(),this.setState({noteModalOpen:!1})}},{key:"addNoteToLocalArray",value:function(e,t){e.preventDefault();var a=new Date,s={quote_id:parseInt(this.props.quote_id,10),notes:t,created_at:p()(new Date(a)).format("YYYY-MM-DD hh:mm:ss"),note_by:JSON.parse(localStorage.getItem("data")).user_name};this.props.new_quote_notes.unshift(t),this.props.quote_notes.unshift(s),this.setState({noteModalOpen:!1})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"quote-notes-container"},u.a.createElement("p",{className:"quote-notes-header"},"Notes"),this.props.quote_notes&&this.props.quote_notes.length>=1?this.props.quote_notes.map((function(t,a){return u.a.createElement("div",{key:a,className:"note",hidden:!e.state.showAllNotes&&a>=5},u.a.createElement("p",null,t.notes),u.a.createElement("p",{className:"accent-text"},t.note_by,u.a.createElement("i",null," ","at ",p()(t.created_at).format("LT"),","," ",p()(t.created_at).format("L"))))})):"",u.a.createElement("div",{className:"quote-add-note"},u.a.createElement("p",{className:"orange-text",onClick:this.openNoteModal},u.a.createElement("i",{className:"material-icons icon-left"},"add"),"Add Note")),this.props.quote_notes&&this.props.quote_notes.length>5?u.a.createElement("div",{className:"quote-add-note"},u.a.createElement("p",{className:"orange-text",onClick:this.showAllNotes},this.state.showAllNotes?"Hide Additional Notes":"Show More Notes")):"",u.a.createElement(h.a,{isOpen:this.state.noteModalOpen,onRequestClose:this.closeNoteModal,text:{title:"Add Note",button:"Save"},require:!0,onSubmit:this.addNoteToLocalArray}))}}]),a}(u.a.Component);t.a=m},744:function(e,t,a){"use strict";var s=a(27),n=a(9),l=a(8),r=a(17),o=a(12),i=a(11),u=a(0),c=a.n(u),p=a(6),h=a(23),m=a(50),d=a(255),v=a(39),b=a.n(v),y=a(26),g=a.n(y),f=a(87),_=a.n(f),E=a(47),N=a.n(E),S=a(40),k=a.n(S),q=a(73),C=a.n(q),x=a(46),O=a.n(x),j=a(34),F=a.n(j),P=a(38),w=a.n(P),A=a(743),R=a(741),V=a(740),M=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={bank_name:"",counter:0,banker:"",req_datetime:"",deal_name:"",quoted_amount:null,rate_type:"Fixed",spread:null,quote_index:"",index_today_rate:null,rate:null,term:null,amortization:null,ltv:null,prepay_type:"Step Down",recourse:"",number_of_option:0,option:"",bank_fee:null,prepay_yrs:[],quote_notes:[],new_quote_notes:[],index:"PRIME",quote_id:parseInt(s.props.quote_id,10),term_sheet:"Not Selected",email_flag:0,is_new:!0,cancelButtonShowing:!0},s.rateTypeChange=s.rateTypeChange.bind(Object(r.a)(s)),s.quotedAmountChange=s.quotedAmountChange.bind(Object(r.a)(s)),s.prepayYearsChange=s.prepayYearsChange.bind(Object(r.a)(s)),s.spreadChange=s.spreadChange.bind(Object(r.a)(s)),s.changeIndex=s.changeIndex.bind(Object(r.a)(s)),s.rateChange=s.rateChange.bind(Object(r.a)(s)),s.termChange=s.termChange.bind(Object(r.a)(s)),s.termBlur=s.termBlur.bind(Object(r.a)(s)),s.amortizationChange=s.amortizationChange.bind(Object(r.a)(s)),s.ltvChange=s.ltvChange.bind(Object(r.a)(s)),s.prepayChange=s.prepayChange.bind(Object(r.a)(s)),s.recourseChange=s.recourseChange.bind(Object(r.a)(s)),s.bankFeeChange=s.bankFeeChange.bind(Object(r.a)(s)),s.updatePrepaymentPenalty=s.updatePrepaymentPenalty.bind(Object(r.a)(s)),s.termSheetChange=s.termSheetChange.bind(Object(r.a)(s)),s}return Object(l.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.props.missingQuotesActions.getQuoteDetails(this.props.quote_id),this.props.missingQuotesActions.loadRateSpread()}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){if(this.state.bank_name!==e.missingQuotes.editQuoteDetail.bank_name){var t=e.missingQuotes.editQuoteDetail;if(this.setState({bank_name:t.bank_name?t.bank_name:"",banker:t.banker?t.banker:"",req_datetime:t.req_datetime?t.req_datetime:"",deal_name:t.deal_name?t.deal_name:""}),this.state.index&&this.props.missingQuotes&&this.props.missingQuotes.rateSpreadInt){var a=this.props.missingQuotes.rateSpreadInt[this.state.index.toUpperCase()];this.setState({index_today_rate:a?parseFloat(a)/100:null})}}}},{key:"rateTypeChange",value:function(e){this.setState({rate_type:e.target.value}),"Fixed"===e.target.value?this.setState({quote_index:""}):this.state.spread_type||this.setState({spread_type:"fix"})}},{key:"spreadTypeChange",value:function(e){this.setState({spread_type:e.target.value})}},{key:"spreadChange",value:function(e){this.setState({spread:e?parseFloat(e)/100:null})}},{key:"spreadBlur",value:function(e){var t=e?parseFloat(e)/100:null,a=(t||0)+(this.state.manual_index_rate||this.state.index_today_rate);this.setState({rate:a,spread:t})}},{key:"quotedAmountChange",value:function(e){this.setState({quoted_amount:e})}},{key:"prepayYearsChange",value:function(e,t){var a=[].concat(Object(s.a)(this.state.prepay_yrs.slice(0,e)),[t.target.value],Object(s.a)(this.state.prepay_yrs.slice(e+1)));this.setState({prepay_yrs:a})}},{key:"changeIndex",value:function(e){var t=this.props.missingQuotes.rateSpreadInt[e.target.value.toUpperCase()];t=t?parseFloat(t)/100:null,this.setState({quote_index:e.target.value.toUpperCase(),index:e.target.value,index_today_rate:t,manual_index_rate:null});var a=parseFloat(this.state.spread?this.state.spread:0)+t;this.setState({rate:a})}},{key:"indexRateChange",value:function(e){this.setState({manual_index_rate:e?parseFloat(e)/100:null})}},{key:"rateChange",value:function(e){this.setState({rate:e?parseFloat(e)/100:null})}},{key:"rateFloorChange",value:function(e){this.setState({rate_floor:e})}},{key:"termChange",value:function(e){this.setState({term:e.target.value.replace(/\D/g,"")})}},{key:"termBlur",value:function(e){var t=parseInt(e.target.value,10);if(t>15&&(t=15),t<this.state.prepay_yrs.length)this.setState({prepay_yrs:this.state.prepay_yrs.slice(0,parseInt(e.target.value,10))},(function(){this.updatePrepaymentPenalty(),this.setState({prepay_yrs:this.state.prepay_yrs})}));else{for(var a=t-this.state.prepay_yrs.length,s=0;s<a;s++)this.state.prepay_yrs.push(" ");this.updatePrepaymentPenalty(),this.setState({prepay_yrs:this.state.prepay_yrs})}}},{key:"updatePrepaymentPenalty",value:function(){if("Step Down"===this.state.prepay_type)for(var e=0;e<this.state.prepay_yrs.length;e++){var t=this.state.prepay_yrs;t[e]=parseInt(this.state.term,10)-e,this.setState({prepay_yrs:t})}else if("Yield Maintenance"===this.state.prepay_type)for(var a=0;a<this.state.prepay_yrs.length;a++){var s=this.state.prepay_yrs;s[a]="YM",this.setState({prepay_yrs:s})}else if("Defeasance"===this.state.prepay_type)for(var n=0;n<this.state.prepay_yrs.length;n++){var l=this.state.prepay_yrs;l[n]="DF",this.setState({prepay_yrs:l})}else if("Net Loss"===this.state.prepay_type)for(var r=0;r<this.state.prepay_yrs.length;r++){var o=this.state.prepay_yrs;o[r]="NL",this.setState({prepay_yrs:o})}else if("Swab Breakage"===this.state.prepay_type)for(var i=0;i<this.state.prepay_yrs.length;i++){var u=this.state.prepay_yrs;u[i]="SB",this.setState({prepay_yrs:u})}else if("No Prepay Penalty"===this.state.prepay_type)for(var c=0;c<this.state.prepay_yrs.length;c++){var p=this.state.prepay_yrs;p[c]=0,this.setState({prepay_yrs:p})}}},{key:"amortizationChange",value:function(e){this.setState({amortization:e.target.value.replace(/\D/g,"")})}},{key:"ltvChange",value:function(e){this.setState({ltv:e.target.value.replace(/\D/g,"")})}},{key:"prepayChange",value:function(e){this.setState({prepay_type:e.target.value},(function(){this.updatePrepaymentPenalty()}))}},{key:"recourseChange",value:function(e){this.setState({recourse:e.target.value})}},{key:"numberOfOptions",value:function(e){this.setState({number_of_option:e.target.value.replace(/[^0-9]/g,"")})}},{key:"yearsPerOption",value:function(e){this.setState({option:e.target.value})}},{key:"bankFeeChange",value:function(e){this.setState({bank_fee:e.target.value.replace(/[^0-9.]/g,"")})}},{key:"termSheetChange",value:function(e){this.setState({term_sheet:e.target.value})}},{key:"submitForm",value:function(e){e.preventDefault();var t=[],a="";this.state.prepay_yrs&&this.state.prepay_yrs.forEach((function(e,a){var s={};s["prepay_yr_"+parseInt(a+1,10)]=e,t.push(s)})),t&&t.length&&(a=JSON.stringify(t)),this.props.missingQuotesActions.submitForm(this.props.previousPage,this.state.quote_id,this.state.quoted_amount?this.state.quoted_amount.toString().replace(/,/g,""):"",this.state.rate_type,this.state.spread_type,this.state.spread,this.state.manual_index_rate,this.state.lock_rate,this.state.rate_floor,this.state.quote_index,this.state.rate,this.state.term,this.state.amortization,this.state.ltv,this.state.prepay_type,this.state.recourse,this.state.bank_fee?parseInt(this.state.bank_fee,10):"",a,this.state.number_of_option,this.state.option,this.state.new_quote_notes,this.state.index_datetime,this.state.term_sheet,this.state.is_new),this.setState({cancelButtonShowing:!1}),"MQ_BROKER"===this.props.previousPage&&this.props.closeForm()}},{key:"render",value:function(){var e=this;return c.a.createElement(N.a,{className:"quote-panel"},c.a.createElement("div",null,c.a.createElement(g.a,null,c.a.createElement(_.a,{md:"6"},c.a.createElement("p",{className:"quote-bank-name"},this.state.bank_name)),"MQ_BROKER"===this.props.previousPage?c.a.createElement(_.a,{md:"6"},c.a.createElement("i",{className:"material-icons close-quote",onClick:this.props.closeForm},"close")):""),c.a.createElement(w.a,null,c.a.createElement(g.a,null,c.a.createElement(_.a,{md:"5",sm:"6",xs:"8",className:"quote-col-left"},c.a.createElement(k.a,{label:"Banker",floatingLabel:!0,className:"no-border",disabled:!0,value:this.state.banker,onChange:function(){return{}}})),c.a.createElement(_.a,{md:"5",sm:"6",xs:"4",className:"quote-col-right"},c.a.createElement(k.a,{label:"Requested On",floatingLabel:!0,className:"no-border",disabled:!0,value:b()(this.state.req_datetime).isValid()?b()(new Date(this.state.req_datetime)).format("MM.DD.YYYY"):"--",onChange:function(){return{}}}))),c.a.createElement(g.a,null,c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(V.a,{label:"Amount Quoted",value:this.state.quoted_amount,className:"dollar-input",update:this.quotedAmountChange.bind(this),floatingLabel:!0})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(C.a,{value:this.state.rate_type,onChange:this.rateTypeChange,label:"Rate Type"},c.a.createElement(O.a,{value:"Fixed",label:"Fixed"}),c.a.createElement(O.a,{value:"Spread",label:"Spread"}))),"Spread"===this.state.rate_type?c.a.createElement("div",null,c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(C.a,{value:this.state.spread_type,onChange:this.spreadTypeChange.bind(this),label:"Spread Type"},c.a.createElement(O.a,{value:"fix",label:"Fixed Spread"}),c.a.createElement(O.a,{value:"float",label:"Floater Spread"}))),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(R.a,{label:"Spread",value:this.state.spread,floatingLabel:!0,onBlur:this.spreadBlur.bind(this),update:this.spreadChange.bind(this)})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(C.a,{label:"Index",className:"index-select",value:this.state.index,onChange:this.changeIndex},Object.keys(this.props.missingQuotes.rateSpreadInt).map((function(e,t){return c.a.createElement(O.a,{value:e.toLowerCase(),key:t,label:"".concat(e)})})))),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(R.a,{label:"Index Rate",value:this.state.manual_index_rate||this.state.index_today_rate,floatingLabel:!0,decimalPlaces:3,update:this.indexRateChange.bind(this)})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(R.a,{label:"Rate",disabled:!0,value:this.state.rate,floatingLabel:!0,decimalPlaces:3,update:this.rateChange.bind(this)})),"fix"===this.state.spread_type?c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left flex"},c.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple flex-center"},c.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},c.a.createElement("input",{type:"checkbox",id:"checkbox-1",checked:this.state.lock_rate,onChange:function(){return e.setState({lock_rate:!e.state.lock_rate})}}),c.a.createElement("span",{className:"checkbox"}),c.a.createElement("span",{className:"ripple"})),c.a.createElement("p",{htmlFor:"checkbox-1",className:"label"},"Lock Rate"))):c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(R.a,{label:"Rate Floor",value:this.state.rate_floor,floatingLabel:!0,update:this.rateFloorChange.bind(this)}))):c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(R.a,{label:"Rate",value:this.state.rate,decimalPlaces:3,floatingLabel:!0,update:this.rateChange.bind(this)})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(k.a,{label:"Term",floatingLabel:!0,value:this.state.term,onBlur:this.termBlur,onChange:this.termChange})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(k.a,{label:"Amortization",floatingLabel:!0,value:this.state.amortization,onChange:this.amortizationChange})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(k.a,{label:"LTV",floatingLabel:!0,value:this.state.ltv,onChange:this.ltvChange})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(k.a,{label:"Bank Fee (% or $ amount)",floatingLabel:!0,value:this.state.bank_fee,onChange:this.bankFeeChange})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(C.a,{value:this.state.term_sheet,onChange:this.termSheetChange,label:"Term Sheet"},c.a.createElement(O.a,{value:"Not Selected",label:"Not Selected"}),c.a.createElement(O.a,{value:"Awaiting Term Sheet",label:"Awaiting Term Sheet"}),c.a.createElement(O.a,{value:"Got Term Sheet",label:"Got Term Sheet"}))),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(C.a,{value:this.state.prepay_type,onChange:this.prepayChange,label:"Prepay"},c.a.createElement(O.a,{value:"Step Down",label:"Step Down"}),c.a.createElement(O.a,{value:"Yield Maintenance",label:"Yield Maintenance"}),c.a.createElement(O.a,{value:"Defeasance",label:"Defeasance"}),c.a.createElement(O.a,{value:"Net Loss",label:"Net Loss"}),c.a.createElement(O.a,{value:"Swab Breakage",label:"Swab Breakage"}),c.a.createElement(O.a,{value:"No Prepay Penalty",label:"No Prepay Penalty"}))),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(C.a,{value:this.state.recourse,onChange:this.recourseChange,label:"Recourse"},c.a.createElement(O.a,{value:"Not Specified",label:"Not Specified"}),c.a.createElement(O.a,{value:"Non Recourse",label:"Non Recourse"}),c.a.createElement(O.a,{value:"Full Recourse",label:"Full Recourse"}),c.a.createElement(O.a,{value:"Partial Recourse",label:"Partial Recourse"}),c.a.createElement(O.a,{value:"Burn off Recourse",label:"Burn off Recourse"}))),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(k.a,{label:"Number of Options",floatingLabel:!0,value:this.state.number_of_option,onChange:this.numberOfOptions.bind(this)})),c.a.createElement(_.a,{md:"2",sm:"6",className:"quote-col-left"},c.a.createElement(k.a,{label:"Years per Option",floatingLabel:!0,value:this.state.option,onChange:this.yearsPerOption.bind(this)}))),c.a.createElement(g.a,null,this.state.prepay_yrs.length>0&&c.a.createElement("p",{className:"quote-orange-header"},"Prepay Penalties")),c.a.createElement(g.a,null,this.state.prepay_yrs.length>0&&this.state.prepay_yrs.map((function(t,a){var s=a+1;return c.a.createElement(_.a,{md:"1",sm:"3",xs:"6",key:a,className:"quote-col-one"},c.a.createElement(k.a,{floatingLabel:!0,value:t,label:"Year "+s,onChange:e.prepayYearsChange.bind(e,a)}))})))),this.state.cancelButtonShowing?c.a.createElement(F.a,{variant:"flat",className:"save-quote-btn mui--z1",onClick:this.submitForm.bind(this)},"Save Quote"):c.a.createElement(F.a,{variant:"flat",className:"save-quote-btn mui--z1",disabled:!0},"Save Quote"),this.state.cancelButtonShowing?c.a.createElement(F.a,{variant:"flat",className:"add-quote-btn mui--z1",onClick:this.props.closeQuoteForm},"Cancel"):""),c.a.createElement(A.a,{quote_id:this.state.quote_id,quote_notes:this.state.quote_notes,new_quote_notes:this.state.new_quote_notes,submitNoteModal:this.submitNoteModal}))}}]),a}(c.a.Component);t.a=Object(p.b)((function(e){return{title:e.navTitle,missingQuotes:e.missingQuotes,comps:e.comps}}),(function(e){return{navActions:Object(h.b)(m,e),missingQuotesActions:Object(h.b)(d,e)}}))(M)},936:function(e,t,a){"use strict";a.r(t);var s=a(9),n=a(8),l=a(12),r=a(11),o=a(0),i=a.n(o),u=a(744),c=a(2),p=a(6),h=a(23),m=a(255),d=function(e){Object(l.a)(a,e);var t=Object(r.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(n.a)(a,[{key:"closeQuoteForm",value:function(){this.props.missingQuotesActions.removeQuoteFormAmount(),c.f.go("/quote-form/1/".concat(this.props.match.params.quote_id,"/").concat(encodeURIComponent(this.props.match.params.previousPage)))}},{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("div",{className:"quote"},i.a.createElement(u.a,{quote_id:this.props.match.params.quote_id,previousPage:this.props.match.params.previousPage,closeQuoteForm:this.closeQuoteForm.bind(this),authentication:JSON.parse(localStorage.getItem("data"))})))}}]),a}(i.a.Component);t.default=Object(p.b)((function(e){return{missingQuotes:e.missingQuotes}}),(function(e){return{missingQuotesActions:Object(h.b)(m,e)}}))(d)}}]);
//# sourceMappingURL=31.f3dfff0f.chunk.js.map