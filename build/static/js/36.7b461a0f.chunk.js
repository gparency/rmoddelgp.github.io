(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[36],{742:function(e,t,a){"use strict";a.r(t),a.d(t,"getLendingTypeList",(function(){return d})),a.d(t,"getPropertyTypes",(function(){return u})),a.d(t,"loadBrokerDeals",(function(){return m})),a.d(t,"getFullContactInfo",(function(){return h})),a.d(t,"loadBankResults",(function(){return y})),a.d(t,"loadQTSRatesResults",(function(){return g})),a.d(t,"loadQuotes",(function(){return b})),a.d(t,"updateErrorToast",(function(){return _})),a.d(t,"closeToast",(function(){return O})),a.d(t,"getParameterListByBank",(function(){return f})),a.d(t,"loadQTSMap",(function(){return E}));var s=a(3),n=a(10),o=a.n(n),r=a(19),c=a(1),i=a(7),l=a(21),p=a(2);function d(){return function(e){Object(p.i)({url:"".concat(i.a.BASE_URL,"lending-types"),success:function(t){switch(t.status){case"200":e({type:c.LOAD_LENDING_TYPES,data:t.data});break;default:e({type:c.LOAD_LENDING_TYPES,data:[]})}}})}}function u(){return function(){var e=Object(r.a)(o.a.mark((function e(t){var a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.t)(p.g.PropertyType);case 2:a=e.sent,t({type:c.LOAD_PROPERTY_TYPE_LIST,data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function m(e,t,a,s,n,o,r){var d={};return d=s&&a?{state:a,city:s,property_types:n,date_range:r}:{latitude:e,longitude:t,state:a,property_types:n,radius:o,date_range:r},function(e){e({type:c.LOADING_DEALS}),Object(p.i)({url:"".concat(i.a.BASE_URL,"qts-broker-deals"),applyAuthHeader:!0,data:d,success:function(t){switch(t.status){case"204":e({type:c.NO_DEAL_DATA});break;case"E107":e(Object(l.tokenExpired)());break;default:e({type:c.LOAD_QTS_BROKER_DEALS,data:t.data})}}})}}function h(e){return function(t){t({type:c.LOADING_FULL_CONTACT}),Object(p.i)({url:"".concat(i.a.BASE_URL,"contact/").concat(e),applyAuthHeader:!0,success:function(e){e.data&&e.data.length>=1?t({type:c.LOAD_FULL_CONTACT,contact:e.data[0].contacts[0]}):t({type:c.NO_FULL_CONTACT})}})}}function y(e){return e.city&&(delete e.latitude,delete e.longitude),function(t){t({type:c.LOADING_QUOTES}),Object(p.i)({url:"".concat(i.a.BASE_URL,"qts-banks"),applyAuthHeader:!0,data:Object(s.a)({},e),success:function(e){e.data&&e.data.banks.length>0?t({type:c.LOAD_QTS_BANK_QUOTES,data:e.data}):t({type:c.NO_QUOTE_DATA})},error:Object(p.v)(t,{default:{type:c.LOAD_QTS_BANK_DEALS_FAILED},404:{type:c.NO_QUOTE_DATA}})})}}function g(e){return function(t){t({type:c.LOADING_QUOTES}),Object(p.i)({url:"".concat(i.a.BASE_URL,"qts-rates"),applyAuthHeader:!0,data:Object(s.a)({},e),success:function(e){console.log("response",e.data),e.data&&e.data.length>0?t({type:c.LOAD_QTS_RATES,data:e.data}):t({type:c.NO_RATE_DATA})},error:Object(p.v)(t,{default:{type:c.LOAD_QTS_RATES_FAILED},404:{type:c.NO_RATE_DATA}})})}}function b(e){return e.city&&(delete e.latitude,delete e.longitude),function(t){t({type:c.LOADING_QUOTES}),Object(p.i)({url:"".concat(i.a.BASE_URL,"qts-banks"),applyAuthHeader:!0,data:Object(s.a)({},e),success:function(e){t({type:c.LOAD_QTS_QUOTES,data:e.data?e.data.banks[0]:{}})},error:Object(p.v)(t,c.LOAD_QTS_QUOTES_FAILED)})}}function _(e){return{type:c.UPDATE_ERROR_TOAST,message:e}}function O(){return{type:c.CLOSE_ASK_QTS_TOAST}}function f(e){return function(t){t({type:c.LOADING_PARAM_LIST}),Object(p.i)({url:"".concat(i.a.BASE_URL,"get-lending"),applyAuthHeader:!0,data:{bank_id:e},success:function(e){switch(e.status){case"E404":t(Object(l.tokenExpired)());break;case"204":t({type:c.LOAD_PARAM_LIST,lendingList:[]});break;case"E413":t({type:c.LOAD_PARAM_LIST_FAILED,message:e.message});break;default:t({type:c.LOAD_PARAM_LIST,lendingList:e.data.lending_programs})}}})}}function E(e,t,a,s,n,o,r,d,u,m,h,y,g,b,_,O,f,E,v){var k={};return k=a&&s?{city:a,state:s,property_types:n,bank_name:E,range_a:d,range_b:u,range_c:m,range_d:h,date_range:r,show_inactive:y,in_nyc:v}:{latitude:e,longitude:t,property_types:n,bank_name:E,range_a:d,range_b:u,range_c:m,range_d:h,date_range:r,radius:o,show_inactive:y,in_nyc:v},Object.keys(k).forEach((function(e){return(null===k[e]||""===k[e])&&delete k[e]})),function(a){a({type:c.LOADING_QTS_MAP}),Object(p.i)({url:"".concat(i.a.BASE_URL,"qts-map"),applyAuthHeader:!0,data:k,success:function(s){switch(s.status){case"E403":case"E404":a(Object(l.tokenExpired)());break;case"204":case"E107":a({type:c.NO_QTS_MAP_DATA,center:{latitude:e,longitude:t},message:s.message});break;default:var n={PW:b?s.data.PW:[],IP:g?s.data.IP:[],Closed:_?s.data.Closed:[],Sales:O?s.data.Sales:[],Finance:f?s.data.Finance:[],Inactive:y?s.data.Inactive:[]};a({type:c.LOAD_QTS_MAP_DATA,data:n,center:{latitude:e,longitude:t}})}}})}}},762:function(e,t,a){"use strict";var s=a(27),n=a(9),o=a(8),r=a(17),c=a(12),i=a(11),l=a(0),p=a.n(l),d=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(){return Object(n.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.props.item;return p.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple"},p.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},p.a.createElement("input",{type:"checkbox",id:this.props.id,checked:this.props.checked||!1,onChange:this.props.onChangeHandler.bind(null,this.props.id,!this.props.checked)}),p.a.createElement("span",{className:"checkbox"}),p.a.createElement("span",{className:"ripple"})),p.a.createElement("p",{htmlFor:this.props.id,className:"label",onClick:this.props.onChangeHandler.bind(null,this.props.id,!this.props.checked)},e.value))}}]),a}(p.a.Component),u=function(e){Object(c.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={localOptionsSelected:[]},s.checkboxChange=s.checkboxChange.bind(Object(r.a)(s)),s.getMultiSelectTextValue=s.getMultiSelectTextValue.bind(Object(r.a)(s)),s}return Object(o.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedOptions&&e.selectedOptions!==this.state.localOptionsSelected&&this.setState({localOptionsSelected:e.selectedOptions})}},{key:"checkboxChange",value:function(e,t){var a=this;0===e&&t?this.setState({localOptionsSelected:this.props.options.slice(1).map((function(e){return e.list_type_id}))},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):0!==e||t?t?this.setState({localOptionsSelected:[].concat(Object(s.a)(this.state.localOptionsSelected),[e])},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):t||this.setState({localOptionsSelected:this.state.localOptionsSelected.filter((function(t){return parseInt(t,10)!==e}))},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):this.setState({localOptionsSelected:[]},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)}))}},{key:"getMultiSelectTextValue",value:function(){var e=this,t="";return this.props.selectedOptions&&this.props.selectedOptions.map((function(a,s){var n=e.props.options.find((function(e){return e.list_type_id===a}));return n&&(s>=1&&(t+=", "),t+=n.value),t})),t.length>0?t:this.props.placeholder}},{key:"render",value:function(){var e=this;return p.a.createElement("div",null,this.props.placeholder?p.a.createElement("p",{className:"qts-multiselect-placeholder"},this.getMultiSelectTextValue()):"",p.a.createElement("div",{className:this.props.showDropdown?"qts-dropdown-box mui--z1":"hidden"},this.props.options&&this.props.options.map((function(t,a){return p.a.createElement(d,{key:a,id:t.list_type_id,item:t,checked:0===t.list_type_id?e.state.localOptionsSelected.length===e.props.options.filter((function(e){return 0!==e.list_type_id})).length:e.state.localOptionsSelected.find((function(e){return parseInt(e,10)===t.list_type_id})),onChangeHandler:e.checkboxChange})}))))}}]),a}(p.a.Component);t.a=u},771:function(e,t,a){"use strict";var s=a(10),n=a.n(s),o=a(19),r=a(9),c=a(8),i=a(17),l=a(12),p=a(11),d=a(0),u=a.n(d),m=a(6),h=a(23),y=a(15),g=a(50),b=a(742),_=a(26),O=a.n(_),f=a(27),E=a(2),v=a(87),k=a.n(v),A=a(73),S=a.n(A),N=a(40),T=a.n(N),C=a(46),j=a.n(C),D=a(34),w=a.n(D),q=a(762),L=a(25),x=a(80),I=window.google,M=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={initialAddress:"",addressChanged:!1,radius:"3",property_types:[],bank:"",bankName:"",localPropertyTypes:[],propertyToggleDropdown:!1,autocompleteAddress:""},s}return Object(c.a)(a,[{key:"componentDidMount",value:function(){this.loadGoogleAutocomplete(),this.setState({localPropertyTypes:[{list_type_id:0,value:"All"}].concat(Object(f.a)(this.props.propertyTypesList)),initialAddress:sessionStorage.getItem("qts_address")?JSON.parse(sessionStorage.getItem("qts_address")).address:Object(L.a)("address")?Object(L.a)("address"):"",addressChanged:!1,radius:sessionStorage.getItem("qts_radius")?sessionStorage.getItem("qts_radius"):Object(L.a)("radius")?Object(L.a)("radius"):"3",property_types:sessionStorage.getItem("qts_propertyTypes")?sessionStorage.getItem("qts_propertyTypes").split(","):Object(L.a)("property_types")?decodeURIComponent(Object(L.a)("property_types")).split(","):[],bank:sessionStorage.getItem("qts_bank")?sessionStorage.getItem("qts_bank"):Object(L.a)("bank")?Object(L.a)("bank"):""})}},{key:"loadGoogleAutocomplete",value:function(){var e=new I.maps.places.Autocomplete(this.refs.autocomplete,{componentRestrictions:{country:"us"}});e.addListener("place_changed",function(){if(this.refs.autocomplete.blur(),this.place=e.getPlace(),this.place.geometry)try{this.setState({autocompleteAddress:this.place,initialAddress:this.place.formatted_address})}catch(t){alert(t)}else alert("there was an error with google autocomplete")}.bind(this))}},{key:"componentDidUpdate",value:function(){this.loadGoogleAutocomplete()}},{key:"propertyToggleDropdown",value:function(){var e=!this.state.propertyToggleDropdown;this.setState({propertyToggleDropdown:e},(function(){e&&this.state.lenderToggleDropdown&&this.setState({lenderToggleDropdown:!1})}))}},{key:"propertyTypeCheckboxChange",value:function(e){this.setState({property_types:e})}},{key:"getMultiSelectTextValue",value:function(){var e=this,t="";return this.state.property_types&&this.state.property_types.map((function(a,s){var n=e.state.localPropertyTypes.find((function(e){return e.list_type_id===a}));return n&&(s>=1&&(t+=", "),t+=n.value),t})),t.length>0?t:"Property Types (optional)"}},{key:"onChangeAddress",value:function(e){13===e.keyCode&&e.preventDefault(),this.setState({addressChanged:!0,initialAddress:e.target.value})}},{key:"onChangeRadius",value:function(e){this.setState({radius:e.target.value},sessionStorage.setItem("qts_radius",this.state.radius))}},{key:"onChangeBankName",value:function(e){this.setState({bankName:e.target.value}),sessionStorage.setItem("qts_bank",this.state.bankName)}},{key:"submitSearch",value:function(e){e.preventDefault(),this.setState({propertyToggleDropdown:!1});var t="";try{t=JSON.parse(sessionStorage.getItem("qts_address"))}catch(u){}var a=this.state.autocompleteAddress.geometry?this.state.autocompleteAddress.geometry.location.lat():t.latitude,s=this.state.autocompleteAddress.geometry?this.state.autocompleteAddress.geometry.location.lng():t.longitude,n=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("administrative_area_level_1")})):t.state,o=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("locality")}))||this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("sublocality")})):t.city,r=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("administrative_area_level_2")})):"";if(n){var c=n.short_name,i=o.long_name,l=r&&r.long_name,p={address:this.state.autocompleteAddress?this.state.autocompleteAddress.formatted_address:this.state.initialAddress,longitude:s,latitude:a,state:n,city:o};sessionStorage.setItem("qts_address",JSON.stringify(p))}else alert("You must search by a precise location");sessionStorage.setItem("qts_radius",this.state.radius),sessionStorage.setItem("qts_propertyTypes",this.state.property_types.length?this.state.property_types.join(","):""),sessionStorage.setItem("qts_bank",this.state.bankName),"New York County"===l||"Bronx County"===l||"Kings County"===l||"Queens County"===l||"Richmond County"===l?sessionStorage.setItem("qts_in_nyc",1):sessionStorage.setItem("qts_in_nyc",0);var d={latitude:a,longitude:s,state:c,city:"city"===this.state.radius?i:"",property_types:this.state.property_types.length?encodeURIComponent(this.state.property_types):"",radius:"city"===this.state.radius?"":this.state.radius,date_range:Object(L.a)("date_range"),min_loan:Object(L.a)("min_loan")?Object(L.a)("min_loan").replace(/\D/g,""):"",max_loan:Object(L.a)("max_loan")?Object(L.a)("max_loan").replace(/\D/g,""):"",bank:this.state.bankName,banker:Object(L.a)("banker"),lender_type:Object(L.a)("lender_type"),note_search:Object(L.a)("note_search"),search_type:Object(L.a)("search_type"),address:this.state.initialAddress,in_nyc:"New York County"===l||"Bronx County"===l||"Kings County"===l||"Queens County"===l||"Richmond County"===l?1:0};Object.keys(d).forEach((function(e){return(null===d[e]||""===d[e])&&delete d[e]})),E.f.go("/qts-map?".concat(Object(x.a)(d)))}},{key:"render",value:function(){return u.a.createElement("div",{className:this.props.dropdownShowing?"qts-search-dropdown-box mui--z1":"hidden-opacity"},u.a.createElement("div",{className:"qts-search-dropdown-box-content"},u.a.createElement("div",{className:"dropdown-box-header"},u.a.createElement("i",{className:"material-icons search"},"search"),u.a.createElement("p",null,"Search"),u.a.createElement("i",{className:"material-icons close",onClick:this.props.toggleDropdown},"close")),u.a.createElement(O.a,null,u.a.createElement(k.a,{md:"12",className:"address-container"},u.a.createElement("input",{className:"input",type:"text",ref:"autocomplete",value:this.state.initialAddress,onChange:this.onChangeAddress.bind(this),placeholder:"Address",style:{color:"#000"}})),u.a.createElement(k.a,{md:"12",className:"property-container",onClick:this.propertyToggleDropdown.bind(this)},u.a.createElement("p",{className:"offset-column property-type-header"},this.getMultiSelectTextValue()),u.a.createElement("i",{className:"material-icons property-arrow"},"arrow_drop_down"),u.a.createElement(q.a,{options:this.state.localPropertyTypes,selectedOptions:this.state.property_types,showDropdown:this.state.propertyToggleDropdown,checkboxChange:this.propertyTypeCheckboxChange.bind(this)})),u.a.createElement(k.a,{md:"12",className:"radius-container"},u.a.createElement(S.a,{value:this.state.radius.toString(),onChange:this.onChangeRadius.bind(this)},u.a.createElement(j.a,{className:"comps-search-disabled",value:"",label:"Radius"}),u.a.createElement(j.a,{value:"0.25",label:"1/4 Mile"}),u.a.createElement(j.a,{value:"0.5",label:"1/2 Mile"}),u.a.createElement(j.a,{value:"1",label:"1 Mile"}),u.a.createElement(j.a,{value:"3",label:"3 Miles"}),u.a.createElement(j.a,{value:"5",label:"5 Miles"}),u.a.createElement(j.a,{value:"city",label:"Entire City"}),u.a.createElement(j.a,{value:"10",label:"10 Miles"}),u.a.createElement(j.a,{value:"25",label:"25 Miles"}),u.a.createElement(j.a,{value:"50",label:"50 Miles"}),u.a.createElement(j.a,{value:"60",label:"60 Miles"}))),u.a.createElement(k.a,{md:"12",className:"bank-container"},u.a.createElement(T.a,{type:"text",onChange:this.onChangeBankName.bind(this),value:this.state.bankName,hint:"Bank Name"}))),u.a.createElement(O.a,{className:"floating-row"},u.a.createElement(k.a,{md:"12",className:"reset-filters-container",onClick:this.props.toggleDropdown},u.a.createElement(w.a,{className:"search-drpdwn-search-btn",onClick:this.submitSearch.bind(this)},"Search")))))}}]),a}(u.a.Component),R=a(72),P=a.n(R),Q=function(e){Object(l.a)(a,e);var t=Object(p.a)(a);function a(e){var s;return Object(r.a)(this,a),(s=t.call(this,e)).state={dropdownShowing:!1},s.toggleDropdown=s.toggleDropdown.bind(Object(i.a)(s)),s}return Object(c.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(o.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.qtsActions.getPropertyTypes();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleDropdown",value:function(){this.setState({dropdownShowing:!this.state.dropdownShowing})}},{key:"render",value:function(){return u.a.createElement("div",{className:"qts-page"},this.props.qts.propertyTypeList.length>0?u.a.createElement("div",null,u.a.createElement(O.a,{className:"sub-header"},u.a.createElement(y.a,{className:"back-arrow",to:"/qts-search"},u.a.createElement("img",{src:"/images/icons/arrow-left.png",alt:"arrow-left"})),u.a.createElement("ul",{className:"qts-nav"},u.a.createElement("li",{className:"qts-nav-list-item list-item2"},u.a.createElement(y.b,{to:{pathname:"/qts-banks",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"POTENTIAL LENDERS")),u.a.createElement("li",{className:"qts-nav-list-item list-item2"},u.a.createElement(y.b,{to:{pathname:"/qts-rates",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Rates")),u.a.createElement("li",{className:"qts-nav-list-item list-item2"},u.a.createElement(y.b,{to:{pathname:"/qts-map",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Map")),u.a.createElement("li",{className:"qts-nav-list-item list-item3"},u.a.createElement(y.b,{to:{pathname:"/qts-brokers",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Active Brokers"))),u.a.createElement("div",{style:{position:"absolute",top:"20px",right:"24px"}},u.a.createElement("i",{className:"material-icons search-icon",onClick:this.toggleDropdown,style:{color:"#fff",cursor:"pointer"}},"search"))),u.a.createElement("div",{className:"qts-container"},this.props.children),u.a.createElement(M,{dropdownShowing:this.state.dropdownShowing,toggleDropdown:this.toggleDropdown,propertyTypesList:this.props.qts.propertyTypeList})):u.a.createElement(P.a,{className:"loading-modal",ariaHideApp:!1,contentLabel:"modal",isOpen:!0,shouldCloseOnOverlayClick:!1},u.a.createElement("div",{className:"centered-spinner"},u.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))))}}]),a}(u.a.Component);t.a=Object(m.b)((function(e){return{title:e.navTitle,qts:e.QTS}}),(function(e){return{navActions:Object(h.b)(g,e),qtsActions:Object(h.b)(b,e)}}))(Q)},986:function(e,t,a){"use strict";a.r(t);var s=a(9),n=a(8),o=a(17),r=a(12),c=a(11),i=a(0),l=a.n(i),p=a(26),d=a.n(p),u=a(6),m=a(742),h=a(23),y=a(87),g=a.n(y),b=a(165),_=a(72),O=a.n(_),f=a(88),E=a(34),v=a.n(E),k=function(e){return l.a.createElement(d.a,{className:"contact"},l.a.createElement(g.a,{xl:"10",md:"9",sm:"9",xs:"8",onClick:e.openContactModal.bind(null,e.item.contact_id,e.item.broker_name)},l.a.createElement("h4",{className:"contact-name"},e.item.broker_name?e.item.broker_name:" ")),l.a.createElement(g.a,{xl:"2",md:"3",sm:"3",xs:"4"},l.a.createElement("div",{className:"contact-listings"},e.item.deal_count?e.item.deal_count:"")))},A=a(25),S=a(771),N=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={isOpened:!1,modalOpen:!1,contact:{},brokerName:"",brokerId:""},n.afterOpenModal=n.afterOpenModal.bind(Object(o.a)(n)),n.closeModal=n.closeModal.bind(Object(o.a)(n)),n.openContactModal=n.openContactModal.bind(Object(o.a)(n)),n}return Object(n.a)(a,[{key:"componentDidMount",value:function(){this.props.qtsActions.loadBrokerDeals(Object(A.a)("latitude"),Object(A.a)("longitude"),Object(A.a)("state"),Object(A.a)("city"),Object(A.a)("property_types")?decodeURIComponent(Object(A.a)("property_types")).split(",").map((function(e){return parseInt(e,10)})):[],Object(A.a)("radius"),Object(A.a)("date_range"))}},{key:"openContactModal",value:function(e,t){this.props.qtsActions.getFullContactInfo(e),this.setState({modalOpen:!0,brokerName:t,brokerId:e})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalOpen:!1,contact:{}})}},{key:"render",value:function(){var e=this,t=0,a=!1,s=null,n=this.props.qts.brokerDeals&&this.props.qts.brokerDeals.map((function(a){return l.a.createElement(k,{key:t++,openContactModal:e.openContactModal,item:a})}));this.props.qts.brokerDeals&&!this.props.qts.loadingDeals&&(a=!0),a&&(s=l.a.createElement("div",{className:"qts-heading"},l.a.createElement(d.a,null,l.a.createElement(g.a,{xl:"10",md:"9",sm:"9",xs:"8"},l.a.createElement("div",{className:"small-title"},"Broker Name")),l.a.createElement(g.a,{xl:"2",md:"3",sm:"3",xs:"4"},l.a.createElement("div",{className:"small-title"},"Number of Deals")))));var o=null;return this.props.qts.toast.show&&(o=l.a.createElement(f.a,{closeToast:this.props.qtsActions.closeToast,delay:6e3},l.a.createElement("div",{className:"success-message"},l.a.createElement("p",null,this.props.qts.toast.message),l.a.createElement(v.a,{variant:"flat",onClick:this.props.qtsActions.closeToast},this.props.qts.toast.success?"Done":"Dismiss")))),l.a.createElement(S.a,null,l.a.createElement(d.a,null,l.a.createElement("div",{className:"qts-results qts-results-panel panel mui--z1"},s,n,o),l.a.createElement(O.a,{className:"loading-modal",isOpen:this.props.qts.loadingDeals&&!this.props.qts.noDeals,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},l.a.createElement("div",{className:this.props.qts.loadingDeals?"centered-spinner":"hidden"},l.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))),l.a.createElement(b.a,{key:this.state.brokerId,isOpen:this.state.modalOpen,onRequestClose:this.closeModal,onAfterOpen:this.afterOpenModal,name:this.state.brokerName,contact:this.props.qts.contact,loading:this.props.qts.loadingContact,noContact:this.props.qts.noContact}),l.a.createElement("div",{className:this.props.qts.noDeals?"":"hidden"},l.a.createElement("div",null,l.a.createElement("div",{className:"grey-circle"},l.a.createElement("i",{className:"material-icons"},"warning")),l.a.createElement("h2",{className:"no-results"},"No Active Brokers Found")))))}}]),a}(l.a.Component);t.default=Object(u.b)((function(e){return{qts:e.QTS}}),(function(e){return{qtsActions:Object(h.b)(m,e)}}))(N)}}]);
//# sourceMappingURL=36.7b461a0f.chunk.js.map