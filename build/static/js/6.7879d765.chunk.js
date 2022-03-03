(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[6],{825:function(e,t,a){"use strict";a.r(t),a.d(t,"loadMissingQuotesbyBank",(function(){return r})),a.d(t,"loadMissingQuotesbyBroker",(function(){return l})),a.d(t,"passDeal",(function(){return p})),a.d(t,"snoozeDeal",(function(){return c})),a.d(t,"closeMQDealPassSuccessToast",(function(){return d})),a.d(t,"closeMQSnoozeSuccessToast",(function(){return m})),a.d(t,"closeMQIrrelevantSuccessToast",(function(){return u})),a.d(t,"closeUpdateMQBToast",(function(){return h})),a.d(t,"getAdminViewData",(function(){return _})),a.d(t,"removeAdminViewData",(function(){return b})),a.d(t,"irrelevantDeal",(function(){return E})),a.d(t,"search",(function(){return k})),a.d(t,"getFullContactInfo",(function(){return g})),a.d(t,"updateNote",(function(){return S})),a.d(t,"updateDealNote",(function(){return D})),a.d(t,"closeUpdateNoteMQModalToast",(function(){return N})),a.d(t,"updateBankQTSStar",(function(){return f})),a.d(t,"updateDealQTSStar",(function(){return O})),a.d(t,"closeQTSStarModalToast",(function(){return v}));var s=a(1),n=a(7),o=a(21),i=a(2);function r(e){return function(t){t({type:s.LOADING_BROKER_QUOTES}),Object(i.i)({url:"".concat(n.a.BASE_URL,"broker-missing"),applyAuthHeader:!0,data:{sort_by:e},success:function(e){e.isResponse||t(Object(o.tokenExpired)()),"204"===e.status?t({type:s.NO_BROKER_QUOTES}):t({type:s.LOAD_BROKER_MISSING_QUOTES_SUCCESS,data:e.data})}})}}function l(e,t){return function(a){a({type:s.LOADING_BROKER_QUOTES}),Object(i.i)({url:"".concat(n.a.BASE_URL,"broker-missing"),applyAuthHeader:!0,data:{sort_by:e,broker_id:t},success:function(e){e.isResponse||a(Object(o.tokenExpired)()),"204"===e.status?a({type:s.NO_BROKER_QUOTES}):a({type:s.LOAD_BROKER_MISSING_QUOTES_SUCCESS,data:e.data})}})}}function p(e,t,a){return function(r){Object(i.i)({url:"".concat(n.a.BASE_URL,"missing-quotes/pass-deal"),applyAuthHeader:!0,type:"POST",data:{quote_id:e,note:t},success:function(t){"E408"===t.status&&r({type:s.ERROR_UPDATING_MQ_BROKER,message:t.message}),"E107"===t.status&&r({type:s.ERROR_UPDATING_MQ_BROKER,message:t.message}),"E404"===t.status&&r(Object(o.tokenExpired)()),t.isResponse&&r({type:s.PASS_MQ_BROKER_DEAL_SUCCESS,data:t.message,quote_id:e,index:a})}})}}function c(e,t,a,r){return function(l){Object(i.i)({url:"".concat(n.a.BASE_URL,"snooze-quote"),applyAuthHeader:!0,type:"POST",data:{quote_id:e,snooze_date:t},success:function(n){"E408"===n.status&&l({type:s.ERROR_UPDATING_MQ_BROKER,message:n.message}),"E107"===n.status&&l({type:s.ERROR_UPDATING_MQ_BROKER,message:n.message}),"E404"===n.status&&l(Object(o.tokenExpired)()),n.isResponse&&l({type:s.SNOOZE_MQ_BROKER_DEAL_SUCCESS,message:n.message,quote_id:e,index:a,snooze_date:t,individualIndex:r})}})}}function d(){return{type:s.CLOSE_MQ_PASS_DEAL_SUCCESS}}function m(){return{type:s.CLOSE_MQ_SNOOZE_DEAL_SUCCESS}}function u(){return{type:s.CLOSE_MQ_IRRELEVANT_DEAL_SUCCESS}}function h(){return{type:s.CLOSE_ERROR_UPDATING_MQ_BROKER}}function _(e,t){return function(a){a({type:s.LOADING_ADMIN_VIEW_DATA,bank_id:e}),Object(i.i)({url:"".concat(n.a.BASE_URL,"broker-missing-bank"),applyAuthHeader:!0,data:{bank_id:e,banker_id:t},success:function(n){"204"===n.status&&a({type:s.NO_ADMIN_VIEW_DATA,bank_id:e}),n.isResponse||a(Object(o.tokenExpired)()),n.isResponse&&n.data[0].other_quotes&&(0===n.data[0].other_quotes.length?a({type:s.NO_ADMIN_VIEW_DATA,bank_id:e}):a({type:s.GET_ADMIN_VIEW_DATA,data:n.data[0].other_quotes,bank_id:e,banker_id:t}))}})}}function b(e){return function(t){t({type:s.REMOVE_ADMIN_VIEW_DATA,bank_id:e})}}function E(e,t,a){return function(r){Object(i.i)({url:"".concat(n.a.BASE_URL,"quote-irrelevant"),applyAuthHeader:!0,type:"POST",data:{quote_id:e,note:t},success:function(t){"E408"===t.status&&r({type:s.ERROR_UPDATING_MQ_BROKER,message:t.message}),"E107"===t.status&&r({type:s.ERROR_UPDATING_MQ_BROKER,message:t.message}),"E404"===t.status&&r(Object(o.tokenExpired)()),t.isResponse&&r({type:s.IRRELEVANT_MQ_BROKER_DEAL_SUCCESS,data:t.message,quote_id:e,index:a})}})}}function k(e,t){return function(a){a({type:s.LOADING_SEARCH_BROKER_QUOTES}),Object(i.i)({url:"".concat(n.a.BASE_URL,"broker-missing-search"),applyAuthHeader:!0,data:{search:e,sort_by:t},success:function(e){"204"===e.status&&a({type:s.NO_MQ_BROKER_SEARCH_RESULTS}),"E107"===e.status&&a({type:s.ERROR_UPDATING_MQ_BROKER,message:e.message}),"E404"===e.status&&a(Object(o.tokenExpired)()),e.data&&e.data.length&&a({type:s.LOAD_SEARCH_MQ_BROKER_DATA,data:e.data})}})}}function g(e){return function(t){t({type:s.LOADING_FULL_CONTACT}),Object(i.i)({url:"".concat(n.a.BASE_URL,"contact/").concat(e),applyAuthHeader:!0,success:function(e){e.data&&e.data.length>=1?t({type:s.LOAD_FULL_CONTACT,contact:e.data[0].contacts[0]}):t({type:s.NO_FULL_CONTACT})}})}}function S(e,t,a,o){return function(r){r({type:s.LOADING_FULL_CONTACT}),Object(i.i)({url:"".concat(n.a.BASE_URL,"save-quote"),applyAuthHeader:!0,type:"POST",data:{notes:t,quote_id:e},success:function(e){e.isResponse?r({type:s.UPDATE_MQ_NOTE,message:e.message,index:a,banker_id:o,notes:t}):r({type:s.ERROR_UPDATE_MQ_NOTE,message:e.message})}})}}function D(e,t,a,o){return function(r){r({type:s.LOADING_FULL_CONTACT}),Object(i.i)({url:"".concat(n.a.BASE_URL,"save-quote"),applyAuthHeader:!0,type:"POST",data:{notes:t,quote_id:e},success:function(e){e.isResponse?r({type:s.UPDATE_MQ_DEAL_NOTE,message:e.message,index:a,deal_id:o,notes:t}):r({type:s.ERROR_UPDATE_MQ_NOTE,message:e.message})}})}}function N(){return{type:s.CLOSE_UPDATE_NOTE_SUCCESS_MQ_TOAST}}function f(e,t,a,r){return function(l){l({type:s.LOADING_FULL_CONTACT}),Object(i.i)({url:"".concat(n.a.BASE_URL,"star-qts"),applyAuthHeader:!0,type:"POST",data:{deal_id:e,starred:r},success:function(e){"206"===e.status&&l({type:s.SUCCESS_BANK_UPDATE_MQ_QTS_STAR,message:e.message,banker_id:t,quote_id:a,starred:r}),"E404"===e.status&&l(Object(o.tokenExpired)()),"E107"!==e.status&&"E408"!==e.status||l({type:s.ERROR_UPDATE_MQ_QTS_STAR,message:e.message})}})}}function O(e,t){return function(a){a({type:s.LOADING_FULL_CONTACT}),Object(i.i)({url:"".concat(n.a.BASE_URL,"star-qts"),applyAuthHeader:!0,type:"POST",data:{deal_id:e,starred:t},success:function(n){"206"===n.status&&a({type:s.SUCCESS_DEAL_UPDATE_MQ_QTS_STAR,message:n.message,deal_id:e,starred:t}),"E404"===n.status&&a(Object(o.tokenExpired)()),"E107"!==n.status&&"E408"!==n.status||a({type:s.ERROR_UPDATE_MQ_QTS_STAR,message:n.message})}})}}function v(){return{type:s.CLOSE_UPDATE_MQ_QTS_STAR}}},841:function(e,t,a){"use strict";var s=a(9),n=a(8),o=a(12),i=a(11),r=a(0),l=a.n(r),p=a(17),c=a(26),d=a.n(c),m=a(47),u=a.n(m),h=a(87),_=a.n(h),b=a(39),E=a.n(b),k=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={quoteFormShowing:!1,quote_id:n.props.item.quote_id,isSnoozed:n.props.isSnoozed},n}return Object(n.a)(a,[{key:"closeForm",value:function(){this.setState({quoteFormShowing:!1})}},{key:"render",value:function(){var e=this.props.item.all_notes?this.props.item.all_notes[0]:null;return 7===this.props.item.quote_status?null:l.a.createElement("div",null,l.a.createElement(u.a,{key:this.props.index,className:"panel"},l.a.createElement(d.a,{className:1===this.props.item.non_qts||7===this.props.item.quote_status?"":"hidden"},l.a.createElement("p",{className:1===this.props.item.non_qts?"non-qts":"hidden"},"Non QTS"),l.a.createElement("span",{className:7===this.props.item.quote_status?"deal-tag":"hidden",style:{background:"#F2BC2B"}},"Waiting on EU")),l.a.createElement(d.a,null,l.a.createElement(_.a,{md:"3",sm:"6",xs:"6",className:"mq-broker-deal-col"},l.a.createElement("p",{className:"header-text"},this.props.item.bank_name),l.a.createElement("p",{className:"subtitle-text"},"Bank")),l.a.createElement(_.a,{md:"3",sm:"6",xs:"6",className:"mq-broker-deal-col"},l.a.createElement("p",{className:"header-text orange-hover",onClick:this.props.openContactModal.bind(null,this.props.item.banker_id,this.props.item.banker_name)},this.props.item.banker_name),l.a.createElement("p",{className:"subtitle-text"},"Banker")),l.a.createElement(_.a,{md:"3",sm:"6",xs:"6",className:"mq-broker-deal-col"},l.a.createElement("p",{className:"header-text"},this.props.item.requested_amount),l.a.createElement("p",{className:"subtitle-text"},"Loan Amount")),l.a.createElement(_.a,{md:"3",sm:"6",xs:"6",className:"mq-broker-deal-col"},l.a.createElement("p",{className:"header-text"},this.props.item.days_elapsed),l.a.createElement("p",{className:"subtitle-text"},"Days Elapsed"))),l.a.createElement(d.a,null,l.a.createElement("p",{className:"header-text padding-left inline-block"},e?e.notes:"--"),l.a.createElement("p",{className:"subtitle-text padding-left"},"Last Note"," ",e?l.a.createElement("i",null,"by ",e.note_by," on"," ",E()(e.created_at).format("L LT")):"")),l.a.createElement(d.a,{className:"deal-options"},l.a.createElement("div",{className:1===this.props.isSnoozed?"deal-options-left":"deal-options-left orange-text"},this.props.item.quote,l.a.createElement("p",{onClick:this.props.quoteDeal.bind(null,this.props.item.quote_id,this.props.deal_id)},"Quote"),l.a.createElement("p",{onClick:this.props.passDeal.bind(null,this.props.item.quote_id,this.props.index)},"Pass")),l.a.createElement("div",{className:"deal-options-right"},l.a.createElement("p",{onClick:this.props.snoozeDeal.bind(null,this.props.item.quote_id,this.props.index,this.props.individualIndex),className:(this.props.isSnoozed,"red-text")},l.a.createElement("img",{src:"/images/icons/snooze-icon.png",alt:"snooze-icon",className:1===this.props.isSnoozed?"deal-snooze-icon":"hidden"}),1===this.props.isSnoozed?"Snoozed":"Snooze"),l.a.createElement("p",{onClick:this.props.irrelevantDeal.bind(null,this.props.item.quote_id,this.props.index),className:1===this.props.isSnoozed?"":"red-text"},"Irrelevant")))))}}]),a}(l.a.Component),g=a(165),S=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={cardShowing:!1,modalOpen:!1,contact:{},brokerName:"",brokerId:""},n.openContactModal=n.openContactModal.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){sessionStorage.getItem("mq_broker_active_banker_id")===this.props.deal.deal_id&&this.setState({cardShowing:!0})}},{key:"openChildDeals",value:function(){this.setState({cardShowing:!this.state.cardShowing})}},{key:"openBrokerModal",value:function(e){this.setState({brokerId:e.broker_id},(function(){this.openContactModal(this.state.brokerId,e.broker_name)}))}},{key:"openContactModal",value:function(e,t){this.props.getContactFullInfo(e),this.setState({modalOpen:!0,brokerName:t,brokerId:e})}},{key:"closeModal",value:function(){this.setState({modalOpen:!1})}},{key:"routeToMissingQuotesByBroker",value:function(e){this.props.routeToMissingQuotesByBroker(e.broker_id,e.broker_name)}},{key:"render",value:function(){var e=this,t=this.props.deal.my_quotes.map((function(t,a){return l.a.createElement(k,{key:a,item:t,individualIndex:a,index:e.props.index,deal_id:e.props.deal.deal_id,isSnoozed:t.missing_quotes_snooze,quoteDeal:e.props.quoteDeal,passDeal:e.props.passDeal,snoozeDeal:e.props.snoozeDeal,irrelevantDeal:e.props.irrelevantDeal,openContactModal:e.openContactModal,authentication:e.props.authentication})})),a=this.props.deal.broker_data&&this.props.deal.broker_data.find((function(e){return 1===e.broker_of_record||1===e.is_originator}));return l.a.createElement("div",{className:"mq-broker-page"},l.a.createElement(u.a,{className:"panel border-left-panel"},l.a.createElement(d.a,{className:"mq-broker-deal-row"},l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-deal-col",onClick:this.props.openDealDetails.bind(null,this.props.deal.deal_id,this.props.deal.deal_id)},l.a.createElement("p",{className:"header-text"},this.props.deal.deal_name),l.a.createElement("p",{className:"subtitle-text subtitle-text-dark"},this.props.deal.city_state)),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-deal-col"},l.a.createElement("p",{className:"header-text orange-hover",onClick:function(){return e.openBrokerModal(a)}},a&&a.broker_name),!a||"true"!==this.props.authentication.is_qts&&2!==this.props.authentication.member_role&&3!==this.props.authentication.member_role?"":l.a.createElement("div",{className:"mq-broker-icon-container",onClick:this.routeToMissingQuotesByBroker.bind(this,a)},l.a.createElement("img",{src:"/images/nav-icons/missing-quotes.png",alt:"missing-quotes",className:"mq-broker-icon"}),l.a.createElement("img",{src:"/images/icons/missing-quotes3.png",alt:"missing-quotes",className:"mq-broker-icon-hover"})),l.a.createElement("p",{className:"subtitle-text"},"Broker")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-deal-col",onClick:this.props.openDealDetails.bind(null,this.props.deal.deal_id,this.props.deal.deal_id)},l.a.createElement("p",{className:"header-text"},this.props.deal.property_type),l.a.createElement("p",{className:"subtitle-text"},"Property Type")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-deal-col"},l.a.createElement("p",{className:"header-text orange-hover",onClick:this.openContactModal.bind(null,this.props.deal.contact_id,this.props.deal.deal_contact_name)},this.props.deal.deal_contact_name),l.a.createElement("p",{className:"subtitle-text"},"Client")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-deal-col",onClick:this.props.openDealDetails.bind(null,this.props.deal.deal_id,this.props.deal.deal_id)},l.a.createElement("p",{className:"header-text"},this.props.deal.deal_rating),l.a.createElement("p",{className:"subtitle-text"},"Forecast")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"text-right mq-deal-column-right"},l.a.createElement("div",{className:this.props.authentication.is_qts?"mq-deal-star":"hidden",onClick:function(){e.props.updateQTSStar(e.props.deal.deal_id,e.props.deal.qts_starred)}},l.a.createElement("p",null,1===this.props.deal.qts_starred?l.a.createElement("span",{className:"bank-quote-star"},l.a.createElement("i",{className:"material-icons orange-text"},"star")):l.a.createElement("span",{className:"bank-quote-star"},l.a.createElement("i",{className:"material-icons"},"star")))),l.a.createElement("div",{className:"mq-deal-amount"},this.props.deal.quote_count),l.a.createElement("i",{className:"material-icons arrow-down",onClick:this.openChildDeals.bind(this)},this.state.cardShowing?"keyboard_arrow_up":"keyboard_arrow_down")))),l.a.createElement("div",{className:this.state.cardShowing?"hidden":"after-panel"}),l.a.createElement("div",{className:this.state.cardShowing?"":"hidden"},t),l.a.createElement(g.a,{isOpen:this.state.modalOpen,onRequestClose:this.closeModal.bind(this),onAfterOpen:function(){return{}},name:this.state.brokerName,loading:this.props.loadingContact,contact:this.props.contact,noContact:this.props.noContact}))}}]),a}(l.a.Component),D=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={quoteFormShowing:!1,quote_id:n.props.item.quote_id,modalOpen:!1,contact:{},brokerName:"",brokerId:""},n}return Object(n.a)(a,[{key:"closeForm",value:function(){this.setState({quoteFormShowing:!1})}},{key:"routeToMissingQuotesByBroker",value:function(e,t){this.props.routeToMissingQuotesByBroker(e,t)}},{key:"render",value:function(){var e=this,t=this.props.item.all_notes?this.props.item.all_notes[0]:null;return 7===this.props.item.quote_status?null:l.a.createElement("div",null,l.a.createElement(u.a,{key:this.props.index,className:"panel"},l.a.createElement(d.a,{className:1===this.props.item.non_qts||7===this.props.item.quote_status?"":"hidden"},l.a.createElement("p",{className:1===this.props.item.non_qts?"non-qts":"hidden"},"Non QTS"),l.a.createElement("span",{className:7===this.props.item.quote_status?"deal-tag":"hidden",style:{background:"#F2BC2B"}},"Waiting on EU")),l.a.createElement(d.a,null,l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-bank-col",onClick:this.props.openDealDetails.bind(null,this.props.item.deal_id,this.props.banker_id)},l.a.createElement("p",{className:"header-text"},this.props.item.deal_name),l.a.createElement("p",{className:"subtitle-text subtitle-text-dark"},this.props.item.city_state)),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-bank-col"},l.a.createElement("p",{onClick:this.props.openContactModal.bind(null,this.props.brokerId,this.props.broker),className:"header-text orange-hover"},this.props.broker),!this.props.broker||"true"!==this.props.authentication.is_qts&&2!==this.props.authentication.member_role&&3!==this.props.authentication.member_role?"":l.a.createElement("div",{className:"mq-broker-icon-container",onClick:this.routeToMissingQuotesByBroker.bind(this,this.props.brokerIdForMQ,this.props.broker)},l.a.createElement("img",{src:"/images/nav-icons/missing-quotes.png",alt:"missing-quotes",className:"mq-broker-icon"}),l.a.createElement("img",{src:"/images/icons/missing-quotes3.png",alt:"missing-quotes",className:"mq-broker-icon-hover"}),l.a.createElement("span",{className:"mq-broker-tooltip"},"View All Broker's Quotes")),l.a.createElement("p",{className:"subtitle-text"},"Broker")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-bank-col",onClick:this.props.openDealDetails.bind(null,this.props.item.deal_id,this.props.banker_id)},l.a.createElement("p",{className:"header-text"},this.props.item.requested_amount),l.a.createElement("p",{className:"subtitle-text"},"Loan Amount")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-bank-col",onClick:this.props.openDealDetails.bind(null,this.props.item.deal_id,this.props.banker_id)},l.a.createElement("p",{className:"header-text"},this.props.item.property_type),l.a.createElement("p",{className:"subtitle-text"},"Property Type")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-bank-col",onClick:this.props.openContactModal.bind(null,this.props.item.contact_id,this.props.item.deal_contact_name)},l.a.createElement("p",{className:"header-text orange-hover"},this.props.item.deal_contact_name),l.a.createElement("p",{className:"subtitle-text"},"Client")),l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",className:"mq-broker-bank-col"},l.a.createElement("div",{onClick:this.props.openDealDetails.bind(null,this.props.item.deal_id,this.props.banker_id)},l.a.createElement("p",{className:"header-text"},this.props.item.days_elapsed),l.a.createElement("p",{className:"subtitle-text"},"Days Elapsed")),l.a.createElement("div",{className:this.props.authentication.is_qts?"bank-star":"hidden",onClick:function(){e.props.updateQTSStar(e.props.item.deal_id,e.props.item.banker_id,e.props.item.quote_id,e.props.item.qts_starred)}},l.a.createElement("p",null,1===this.props.item.qts_starred?l.a.createElement("span",{className:"bank-quote-star"},l.a.createElement("i",{className:"material-icons orange-text"},"star")):l.a.createElement("span",{className:"bank-quote-star"},l.a.createElement("i",{className:"material-icons accent-text"},"star")))))),l.a.createElement(d.a,{className:"empty-row"}),l.a.createElement(d.a,null,l.a.createElement(_.a,{md:"2",sm:"4",xs:"4",onClick:this.props.openDealDetails.bind(null,this.props.item.deal_id,this.props.banker_id)},l.a.createElement("p",{className:"header-text"},this.props.item.deal_rating),l.a.createElement("p",{className:"subtitle-text"},"Forecast")),l.a.createElement(_.a,{md:"8",sm:"6",xs:"6"},l.a.createElement("p",{className:"header-text padding-left inline-block"},t?t.notes:"--"),l.a.createElement("p",{className:"subtitle-text padding-left"},"Last Note"," ",t?l.a.createElement("i",null,"by ",t.note_by," on"," ",E()(t.created_at).format("L LT")):""))),l.a.createElement(d.a,{className:"deal-options"},l.a.createElement("div",{className:1===this.props.isSnoozed?"deal-options-left":"deal-options-left orange-text"},l.a.createElement("p",{onClick:this.props.quoteDeal.bind(null,this.props.item.quote_id,this.props.banker_id)},"Quote"),l.a.createElement("p",{onClick:this.props.passDeal.bind(null,this.props.item.quote_id,this.props.index)},"Pass")),l.a.createElement("div",{className:(this.props.isSnoozed,"deal-options-right")},l.a.createElement("p",{onClick:this.props.snoozeDeal.bind(null,this.props.item.quote_id,this.props.index,this.props.individualIndex),className:(this.props.isSnoozed,"red-text")},l.a.createElement("img",{src:"/images/icons/snooze-icon.png",alt:"snooze-icon",className:1===this.props.isSnoozed?"deal-snooze-icon":"hidden"}),1===this.props.isSnoozed?"Snoozed":"Snooze"),l.a.createElement("p",{onClick:this.props.irrelevantDeal.bind(null,this.props.item.quote_id,this.props.index),className:1===this.props.isSnoozed?"":"red-text"},"Irrelevant")))))}}]),a}(l.a.Component),N=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={cardShowing:!1,viewAllChecked:!1,isSearchActive:"",isSearchDeal:!1,modalOpen:!1,contact:{},brokerName:"",brokerId:""},n.openContactModal=n.openContactModal.bind(Object(p.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){sessionStorage.getItem("mq_broker_active_banker_id")===this.props.deal.banker_id&&this.setState({cardShowing:!0})}},{key:"UNSAFE_componentWillMount",value:function(){this.props.isSearchDeal?this.setState({viewAllChecked:!0}):this.setState({viewAllChecked:!1})}},{key:"openChildDeals",value:function(){this.setState({cardShowing:!this.state.cardShowing})}},{key:"viewAllCheckbox",value:function(){this.setState({viewAllChecked:!this.state.viewAllChecked},(function(){this.state.viewAllChecked?this.props.getAdminViewData(this.props.deal.bank_id,this.props.deal.banker_id):this.props.removeAdminViewData(this.props.deal.bank_id)}))}},{key:"getBrokerInfo",value:function(e){for(var t=0;t<e.length;t++)if(1===e[t].broker_of_record||1===e[t].is_originator)return e[t].broker_name}},{key:"getBrokerIdInfo",value:function(e){for(var t=0;t<e.length;t++)if(1===e[t].broker_of_record||1===e[t].is_originator)return e[t].member_contact_id}},{key:"getBrokerIdForMQ",value:function(e){for(var t=0;t<e.length;t++)if(1===e[t].broker_of_record||1===e[t].is_originator)return e[t].broker_id}},{key:"openContactModal",value:function(e,t){this.props.getContactFullInfo(e),this.setState({modalOpen:!0,brokerName:t,brokerId:e})}},{key:"closeModal",value:function(){this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.deal.my_quotes.map((function(t,a){return l.a.createElement(D,{key:a,index:e.props.index,individualIndex:a,item:t,isSnoozed:t.missing_quotes_snooze,banker_id:e.props.deal.banker_id,bank_id:e.props.deal.bank_id,brokerIdForMQ:t.broker_data&&e.getBrokerIdForMQ(t.broker_data),broker:t.broker_data&&e.getBrokerInfo(t.broker_data),brokerId:t.broker_data&&e.getBrokerIdInfo(t.broker_data),quoteDeal:e.props.quoteDeal,passDeal:e.props.passDeal,snoozeDeal:e.props.snoozeDeal,irrelevantDeal:e.props.irrelevantDeal,getContactFullInfo:e.props.getContactFullInfo,openDealDetails:e.props.openDealDetails,openContactModal:e.openContactModal,updateQTSStar:e.props.updateQTSStar,authentication:e.props.authentication,routeToMissingQuotesByBroker:e.props.routeToMissingQuotesByBroker})})),a="";return this.props.deal.other_quotes&&this.props.deal.other_quotes.length&&(a=this.props.deal.other_quotes.map((function(t,a){return l.a.createElement(D,{key:a,item:t,individualIndex:a,isSnoozed:t.missing_quotes_snooze,index:e.props.index,banker_id:e.props.deal.banker_id,bank_id:e.props.deal.bank_id,broker:t.broker_data&&e.getBrokerInfo(t.broker_data),brokerId:t.broker_data&&e.getBrokerIdInfo(t.broker_data),brokerIdForMQ:t.broker_data&&e.getBrokerIdForMQ(t.broker_data),quoteDeal:e.props.quoteDeal,passDeal:e.props.passDeal,snoozeDeal:e.props.snoozeDeal,irrelevantDeal:e.props.irrelevantDeal,getContactFullInfo:e.props.getContactFullInfo,openDealDetails:e.props.openDealDetails,openContactModal:e.openContactModal,updateQTSStar:e.props.updateQTSStar,authentication:e.props.authentication,routeToMissingQuotesByBroker:e.props.routeToMissingQuotesByBroker})}))),l.a.createElement("div",{className:"mq-broker-page"},l.a.createElement(g.a,{isOpen:this.state.modalOpen,onRequestClose:this.closeModal.bind(this),onAfterOpen:function(){return{}},name:this.state.brokerName,loading:this.props.loadingContact,contact:this.props.contact,noContact:this.props.noContact}),l.a.createElement(u.a,{className:"panel border-left-panel"},l.a.createElement(d.a,{className:"mq-broker-bank-row"},l.a.createElement(_.a,{md:"3",sm:"4",xs:"12"},l.a.createElement("p",{className:"header-text"},this.props.deal.bank_name),l.a.createElement("p",{className:"subtitle-text"},"Bank")),l.a.createElement(_.a,{md:"3",sm:"4",xs:"12"},l.a.createElement("p",{className:"header-text orange-hover",onClick:this.openContactModal.bind(null,this.props.deal.banker_id,this.props.deal.banker_name)},this.props.deal.banker_name),l.a.createElement("p",{className:"subtitle-text"},"Banker")),l.a.createElement(_.a,{md:"6",sm:"4",xs:"12"},this.props.deal.bank_notes?l.a.createElement("p",{className:"header-text"},this.props.deal.bank_notes):l.a.createElement("p",{className:"subtitle-text-dark inline-block"},l.a.createElement("i",null,"No recent notes")),l.a.createElement("p",{className:"subtitle-text"},"Most Recent Note"))),l.a.createElement("div",{className:"mq-deal-column-right"},l.a.createElement("div",{className:this.state.cardShowing?"":"hidden"},l.a.createElement("div",{className:this.props.authentication.is_admin||this.props.authentication.is_qts?"mq-deal-column-left":"hidden"},l.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple"},l.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},l.a.createElement("input",{type:"checkbox",id:"view-all",checked:this.state.viewAllChecked,onChange:this.viewAllCheckbox.bind(this)}),l.a.createElement("span",{className:"checkbox"}),l.a.createElement("span",{className:"ripple"})),l.a.createElement("label",{htmlFor:"view-all",className:"label"},"View All")))),l.a.createElement("div",{className:"mq-deal-column-right"},l.a.createElement("div",{className:"mq-deal-amount"},this.props.deal.my_quotes.filter((function(e){return 7!==e.quote_status})).length),l.a.createElement("i",{className:"material-icons arrow-down",onClick:this.openChildDeals.bind(this)},this.state.cardShowing?"keyboard_arrow_up":"keyboard_arrow_down")))),l.a.createElement("div",{className:this.state.cardShowing?"hidden":"after-panel"}),l.a.createElement("div",{className:this.state.cardShowing?"":"hidden"},t,l.a.createElement("div",{className:this.props.loadingAdminData&&this.props.localAdminBankId===this.props.deal.bank_id?"mq-deal-loading orange-text":"hidden"},l.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"})),l.a.createElement("div",{className:this.props.noAdminViewData&&!this.props.loadingAdminData&&this.props.localAdminBankId===this.props.deal.bank_id?"no-mq-deals":"hidden"},"No other deals for this bank"),a))}}]),a}(l.a.Component),f=a(2),O=a(72),v=a.n(O),q=a(38),y=a.n(q),C=a(34),A=a.n(C),x=a(65),R=a(256),T=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={passModalOpen:!1,snoozeModalOpen:!1,irrelevantModalOpen:!1,snoozeDate:E()().format("MM/DD/YYYY"),quote_id:"",index:"",note:"",bank_id:"",deal_id:""},n}return Object(n.a)(a,[{key:"quoteDeal",value:function(e,t){this.props.setPageAndScrollPos(window.location.pathname,window.scrollY);var a=encodeURIComponent(window.location.pathname);sessionStorage.setItem("mq_broker_active_banker_id",t),f.f.go("/quote-form/1/".concat(e,"/").concat(a))}},{key:"passDeal",value:function(e,t){this.setState({passModalOpen:!0,quote_id:e,index:t})}},{key:"snoozeDeal",value:function(e,t,a){this.setState({snoozeModalOpen:!0,quote_id:e,index:t,individualIndex:a})}},{key:"irrelevantDeal",value:function(e,t){this.setState({irrelevantModalOpen:!0,quote_id:e,index:t})}},{key:"submitPassDialog",value:function(e){e.preventDefault(),this.props.passDeal(this.state.quote_id,this.state.note,this.state.index),this.setState({passModalOpen:!1,quote_id:"",note:"",index:""})}},{key:"closeIrrelevantDialog",value:function(e){e.preventDefault(),this.setState({irrelevantModalOpen:!1,quote_id:"",note:"",index:""})}},{key:"submitIrrelevantDialog",value:function(e){e.preventDefault(),this.props.irrelevantDeal(this.state.quote_id,this.state.note,this.state.index),this.setState({irrelevantModalOpen:!1,quote_id:"",note:"",index:""})}},{key:"closePassDialog",value:function(e){e.preventDefault(),this.setState({passModalOpen:!1,quote_id:"",note:"",index:""})}},{key:"closeSnoozeDialog",value:function(e){e.preventDefault(),this.setState({snoozeModalOpen:!1,quote_id:"",snoozeDate:"",index:""})}},{key:"submitSnoozeDialog",value:function(e){e.preventDefault(),this.props.snoozeDeal(this.state.quote_id,this.state.snoozeDate,this.state.index,this.state.individualIndex),this.setState({snoozeModalOpen:!1,quote_id:"",snoozeDate:"",index:"",individualIndex:""})}},{key:"snoozeDateChange",value:function(e){this.setState({snoozeDate:e})}},{key:"render",value:function(){var e=this,t=null;return this.props.noQuotes||(t="true"===this.props.toggle||!0===this.props.toggle?this.props.quotes&&this.props.quotes.map((function(t,a){return l.a.createElement(N,{key:a,index:a,deal:t,quoteDeal:e.quoteDeal.bind(e),passDeal:e.passDeal.bind(e),snoozeDeal:e.snoozeDeal.bind(e),irrelevantDeal:e.irrelevantDeal.bind(e),authentication:e.props.authentication,isSearchActive:e.props.isSearchActive,isSearchDeal:e.props.isSearchDeal,loadingAdminData:e.props.loadingAdminData,noAdminViewData:e.props.noAdminViewData,getAdminViewData:e.props.getAdminViewData,removeAdminViewData:e.props.removeAdminViewData,localAdminBankId:e.props.localAdminBankId,getContactFullInfo:e.props.getContactFullInfo,contact:e.props.contact,loadingContact:e.props.loadingContact,noContact:e.props.noContact,updateQTSStar:e.props.updateBankQTSStar,openDealDetails:e.props.openBankDD,routeToMissingQuotesByBroker:e.props.routeToMissingQuotesByBroker})})):this.props.quotes&&this.props.quotes.map((function(t,a){return l.a.createElement(S,{key:a,index:a,deal:t,quoteDeal:e.quoteDeal.bind(e),passDeal:e.passDeal.bind(e),snoozeDeal:e.snoozeDeal.bind(e),irrelevantDeal:e.irrelevantDeal.bind(e),getContactFullInfo:e.props.getContactFullInfo,contact:e.props.contact,loadingContact:e.props.loadingContact,noContact:e.props.noContact,openDealDetails:e.props.openDealDD,updateQTSStar:e.props.updateDealQTSStar,authentication:e.props.authentication,routeToMissingQuotesByBroker:e.props.routeToMissingQuotesByBroker})}))),l.a.createElement("div",{className:"mq-broker-container"},l.a.createElement(R.a,{isOpen:this.state.passModalOpen,onRequestClose:this.closePassDialog.bind(this),onAfterOpen:function(){},require:!1,text:{title:"Reason for passing (optional)",button:"PASS"},onSubmit:this.submitPassDialog.bind(this)}),l.a.createElement(R.a,{isOpen:this.state.irrelevantModalOpen,onRequestClose:this.closeIrrelevantDialog.bind(this),onAfterOpen:function(){},require:!1,text:{title:"Reason for marking irrelevant (optional)",button:"IRRELEVANT"},onSubmit:this.submitIrrelevantDialog.bind(this)}),l.a.createElement(v.a,{className:"note-modal snooze-modal",isOpen:this.state.snoozeModalOpen,ariaHideApp:!1,contentLabel:"Modal",onAfterOpen:function(){},onRequestClose:this.closeSnoozeDialog.bind(this),shouldCloseOnOverlayClick:!0},l.a.createElement(y.a,{className:"modal-form"},l.a.createElement("p",{className:"add-note-modal"},"Snooze Until"),l.a.createElement(x.a,{allowClear:!1,dateValue:E()().format("YYYY-MM-DD"),update:this.snoozeDateChange.bind(this)}),l.a.createElement("div",{className:"add-note-buttons"},l.a.createElement(A.a,{variant:"flat",onClick:this.closeSnoozeDialog.bind(this)},"CANCEL"),l.a.createElement(A.a,{variant:"flat",onClick:this.submitSnoozeDialog.bind(this),type:"submit",value:"submit"},"OK")))),t,l.a.createElement("div",{className:this.props.noQuotes?"":"hidden"},l.a.createElement("div",null,l.a.createElement("div",{className:"grey-circle"},l.a.createElement("i",{className:"material-icons"},"warning")),l.a.createElement("h2",{className:"no-results"},"No quotes found"))))}}]),a}(l.a.Component);t.a=T}}]);
//# sourceMappingURL=6.7879d765.chunk.js.map