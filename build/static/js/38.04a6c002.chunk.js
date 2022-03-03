(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[38],{742:function(e,t,a){"use strict";a.r(t),a.d(t,"getLendingTypeList",(function(){return d})),a.d(t,"getPropertyTypes",(function(){return u})),a.d(t,"loadBrokerDeals",(function(){return m})),a.d(t,"getFullContactInfo",(function(){return h})),a.d(t,"loadBankResults",(function(){return g})),a.d(t,"loadQTSRatesResults",(function(){return y})),a.d(t,"loadQuotes",(function(){return _})),a.d(t,"updateErrorToast",(function(){return E})),a.d(t,"closeToast",(function(){return f})),a.d(t,"getParameterListByBank",(function(){return b})),a.d(t,"loadQTSMap",(function(){return A}));var n=a(3),s=a(10),r=a.n(s),l=a(19),o=a(1),c=a(7),i=a(21),p=a(2);function d(){return function(e){Object(p.i)({url:"".concat(c.a.BASE_URL,"lending-types"),success:function(t){switch(t.status){case"200":e({type:o.LOAD_LENDING_TYPES,data:t.data});break;default:e({type:o.LOAD_LENDING_TYPES,data:[]})}}})}}function u(){return function(){var e=Object(l.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.t)(p.g.PropertyType);case 2:a=e.sent,t({type:o.LOAD_PROPERTY_TYPE_LIST,data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function m(e,t,a,n,s,r,l){var d={};return d=n&&a?{state:a,city:n,property_types:s,date_range:l}:{latitude:e,longitude:t,state:a,property_types:s,radius:r,date_range:l},function(e){e({type:o.LOADING_DEALS}),Object(p.i)({url:"".concat(c.a.BASE_URL,"qts-broker-deals"),applyAuthHeader:!0,data:d,success:function(t){switch(t.status){case"204":e({type:o.NO_DEAL_DATA});break;case"E107":e(Object(i.tokenExpired)());break;default:e({type:o.LOAD_QTS_BROKER_DEALS,data:t.data})}}})}}function h(e){return function(t){t({type:o.LOADING_FULL_CONTACT}),Object(p.i)({url:"".concat(c.a.BASE_URL,"contact/").concat(e),applyAuthHeader:!0,success:function(e){e.data&&e.data.length>=1?t({type:o.LOAD_FULL_CONTACT,contact:e.data[0].contacts[0]}):t({type:o.NO_FULL_CONTACT})}})}}function g(e){return e.city&&(delete e.latitude,delete e.longitude),function(t){t({type:o.LOADING_QUOTES}),Object(p.i)({url:"".concat(c.a.BASE_URL,"qts-banks"),applyAuthHeader:!0,data:Object(n.a)({},e),success:function(e){e.data&&e.data.banks.length>0?t({type:o.LOAD_QTS_BANK_QUOTES,data:e.data}):t({type:o.NO_QUOTE_DATA})},error:Object(p.v)(t,{default:{type:o.LOAD_QTS_BANK_DEALS_FAILED},404:{type:o.NO_QUOTE_DATA}})})}}function y(e){return function(t){t({type:o.LOADING_QUOTES}),Object(p.i)({url:"".concat(c.a.BASE_URL,"qts-rates"),applyAuthHeader:!0,data:Object(n.a)({},e),success:function(e){console.log("response",e.data),e.data&&e.data.length>0?t({type:o.LOAD_QTS_RATES,data:e.data}):t({type:o.NO_RATE_DATA})},error:Object(p.v)(t,{default:{type:o.LOAD_QTS_RATES_FAILED},404:{type:o.NO_RATE_DATA}})})}}function _(e){return e.city&&(delete e.latitude,delete e.longitude),function(t){t({type:o.LOADING_QUOTES}),Object(p.i)({url:"".concat(c.a.BASE_URL,"qts-banks"),applyAuthHeader:!0,data:Object(n.a)({},e),success:function(e){t({type:o.LOAD_QTS_QUOTES,data:e.data?e.data.banks[0]:{}})},error:Object(p.v)(t,o.LOAD_QTS_QUOTES_FAILED)})}}function E(e){return{type:o.UPDATE_ERROR_TOAST,message:e}}function f(){return{type:o.CLOSE_ASK_QTS_TOAST}}function b(e){return function(t){t({type:o.LOADING_PARAM_LIST}),Object(p.i)({url:"".concat(c.a.BASE_URL,"get-lending"),applyAuthHeader:!0,data:{bank_id:e},success:function(e){switch(e.status){case"E404":t(Object(i.tokenExpired)());break;case"204":t({type:o.LOAD_PARAM_LIST,lendingList:[]});break;case"E413":t({type:o.LOAD_PARAM_LIST_FAILED,message:e.message});break;default:t({type:o.LOAD_PARAM_LIST,lendingList:e.data.lending_programs})}}})}}function A(e,t,a,n,s,r,l,d,u,m,h,g,y,_,E,f,b,A,O){var N={};return N=a&&n?{city:a,state:n,property_types:s,bank_name:A,range_a:d,range_b:u,range_c:m,range_d:h,date_range:l,show_inactive:g,in_nyc:O}:{latitude:e,longitude:t,property_types:s,bank_name:A,range_a:d,range_b:u,range_c:m,range_d:h,date_range:l,radius:r,show_inactive:g,in_nyc:O},Object.keys(N).forEach((function(e){return(null===N[e]||""===N[e])&&delete N[e]})),function(a){a({type:o.LOADING_QTS_MAP}),Object(p.i)({url:"".concat(c.a.BASE_URL,"qts-map"),applyAuthHeader:!0,data:N,success:function(n){switch(n.status){case"E403":case"E404":a(Object(i.tokenExpired)());break;case"204":case"E107":a({type:o.NO_QTS_MAP_DATA,center:{latitude:e,longitude:t},message:n.message});break;default:var s={PW:_?n.data.PW:[],IP:y?n.data.IP:[],Closed:E?n.data.Closed:[],Sales:f?n.data.Sales:[],Finance:b?n.data.Finance:[],Inactive:g?n.data.Inactive:[]};a({type:o.LOAD_QTS_MAP_DATA,data:s,center:{latitude:e,longitude:t}})}}})}}},762:function(e,t,a){"use strict";var n=a(27),s=a(9),r=a(8),l=a(17),o=a(12),c=a(11),i=a(0),p=a.n(i),d=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.item;return p.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple"},p.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},p.a.createElement("input",{type:"checkbox",id:this.props.id,checked:this.props.checked||!1,onChange:this.props.onChangeHandler.bind(null,this.props.id,!this.props.checked)}),p.a.createElement("span",{className:"checkbox"}),p.a.createElement("span",{className:"ripple"})),p.a.createElement("p",{htmlFor:this.props.id,className:"label",onClick:this.props.onChangeHandler.bind(null,this.props.id,!this.props.checked)},e.value))}}]),a}(p.a.Component),u=function(e){Object(o.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={localOptionsSelected:[]},n.checkboxChange=n.checkboxChange.bind(Object(l.a)(n)),n.getMultiSelectTextValue=n.getMultiSelectTextValue.bind(Object(l.a)(n)),n}return Object(r.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedOptions&&e.selectedOptions!==this.state.localOptionsSelected&&this.setState({localOptionsSelected:e.selectedOptions})}},{key:"checkboxChange",value:function(e,t){var a=this;0===e&&t?this.setState({localOptionsSelected:this.props.options.slice(1).map((function(e){return e.list_type_id}))},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):0!==e||t?t?this.setState({localOptionsSelected:[].concat(Object(n.a)(this.state.localOptionsSelected),[e])},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):t||this.setState({localOptionsSelected:this.state.localOptionsSelected.filter((function(t){return parseInt(t,10)!==e}))},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):this.setState({localOptionsSelected:[]},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)}))}},{key:"getMultiSelectTextValue",value:function(){var e=this,t="";return this.props.selectedOptions&&this.props.selectedOptions.map((function(a,n){var s=e.props.options.find((function(e){return e.list_type_id===a}));return s&&(n>=1&&(t+=", "),t+=s.value),t})),t.length>0?t:this.props.placeholder}},{key:"render",value:function(){var e=this;return p.a.createElement("div",null,this.props.placeholder?p.a.createElement("p",{className:"qts-multiselect-placeholder"},this.getMultiSelectTextValue()):"",p.a.createElement("div",{className:this.props.showDropdown?"qts-dropdown-box mui--z1":"hidden"},this.props.options&&this.props.options.map((function(t,a){return p.a.createElement(d,{key:a,id:t.list_type_id,item:t,checked:0===t.list_type_id?e.state.localOptionsSelected.length===e.props.options.filter((function(e){return 0!==e.list_type_id})).length:e.state.localOptionsSelected.find((function(e){return parseInt(e,10)===t.list_type_id})),onChangeHandler:e.checkboxChange})}))))}}]),a}(p.a.Component);t.a=u},771:function(e,t,a){"use strict";var n=a(10),s=a.n(n),r=a(19),l=a(9),o=a(8),c=a(17),i=a(12),p=a(11),d=a(0),u=a.n(d),m=a(6),h=a(23),g=a(15),y=a(50),_=a(742),E=a(26),f=a.n(E),b=a(27),A=a(2),O=a(87),N=a.n(O),v=a(73),S=a.n(v),T=a(40),k=a.n(T),j=a(46),C=a.n(j),R=a(34),M=a.n(R),I=a(762),w=a(25),D=a(80),L=window.google,q=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={initialAddress:"",addressChanged:!1,radius:"3",property_types:[],bank:"",bankName:"",localPropertyTypes:[],propertyToggleDropdown:!1,autocompleteAddress:""},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.loadGoogleAutocomplete(),this.setState({localPropertyTypes:[{list_type_id:0,value:"All"}].concat(Object(b.a)(this.props.propertyTypesList)),initialAddress:sessionStorage.getItem("qts_address")?JSON.parse(sessionStorage.getItem("qts_address")).address:Object(w.a)("address")?Object(w.a)("address"):"",addressChanged:!1,radius:sessionStorage.getItem("qts_radius")?sessionStorage.getItem("qts_radius"):Object(w.a)("radius")?Object(w.a)("radius"):"3",property_types:sessionStorage.getItem("qts_propertyTypes")?sessionStorage.getItem("qts_propertyTypes").split(","):Object(w.a)("property_types")?decodeURIComponent(Object(w.a)("property_types")).split(","):[],bank:sessionStorage.getItem("qts_bank")?sessionStorage.getItem("qts_bank"):Object(w.a)("bank")?Object(w.a)("bank"):""})}},{key:"loadGoogleAutocomplete",value:function(){var e=new L.maps.places.Autocomplete(this.refs.autocomplete,{componentRestrictions:{country:"us"}});e.addListener("place_changed",function(){if(this.refs.autocomplete.blur(),this.place=e.getPlace(),this.place.geometry)try{this.setState({autocompleteAddress:this.place,initialAddress:this.place.formatted_address})}catch(t){alert(t)}else alert("there was an error with google autocomplete")}.bind(this))}},{key:"componentDidUpdate",value:function(){this.loadGoogleAutocomplete()}},{key:"propertyToggleDropdown",value:function(){var e=!this.state.propertyToggleDropdown;this.setState({propertyToggleDropdown:e},(function(){e&&this.state.lenderToggleDropdown&&this.setState({lenderToggleDropdown:!1})}))}},{key:"propertyTypeCheckboxChange",value:function(e){this.setState({property_types:e})}},{key:"getMultiSelectTextValue",value:function(){var e=this,t="";return this.state.property_types&&this.state.property_types.map((function(a,n){var s=e.state.localPropertyTypes.find((function(e){return e.list_type_id===a}));return s&&(n>=1&&(t+=", "),t+=s.value),t})),t.length>0?t:"Property Types (optional)"}},{key:"onChangeAddress",value:function(e){13===e.keyCode&&e.preventDefault(),this.setState({addressChanged:!0,initialAddress:e.target.value})}},{key:"onChangeRadius",value:function(e){this.setState({radius:e.target.value},sessionStorage.setItem("qts_radius",this.state.radius))}},{key:"onChangeBankName",value:function(e){this.setState({bankName:e.target.value}),sessionStorage.setItem("qts_bank",this.state.bankName)}},{key:"submitSearch",value:function(e){e.preventDefault(),this.setState({propertyToggleDropdown:!1});var t="";try{t=JSON.parse(sessionStorage.getItem("qts_address"))}catch(u){}var a=this.state.autocompleteAddress.geometry?this.state.autocompleteAddress.geometry.location.lat():t.latitude,n=this.state.autocompleteAddress.geometry?this.state.autocompleteAddress.geometry.location.lng():t.longitude,s=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("administrative_area_level_1")})):t.state,r=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("locality")}))||this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("sublocality")})):t.city,l=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("administrative_area_level_2")})):"";if(s){var o=s.short_name,c=r.long_name,i=l&&l.long_name,p={address:this.state.autocompleteAddress?this.state.autocompleteAddress.formatted_address:this.state.initialAddress,longitude:n,latitude:a,state:s,city:r};sessionStorage.setItem("qts_address",JSON.stringify(p))}else alert("You must search by a precise location");sessionStorage.setItem("qts_radius",this.state.radius),sessionStorage.setItem("qts_propertyTypes",this.state.property_types.length?this.state.property_types.join(","):""),sessionStorage.setItem("qts_bank",this.state.bankName),"New York County"===i||"Bronx County"===i||"Kings County"===i||"Queens County"===i||"Richmond County"===i?sessionStorage.setItem("qts_in_nyc",1):sessionStorage.setItem("qts_in_nyc",0);var d={latitude:a,longitude:n,state:o,city:"city"===this.state.radius?c:"",property_types:this.state.property_types.length?encodeURIComponent(this.state.property_types):"",radius:"city"===this.state.radius?"":this.state.radius,date_range:Object(w.a)("date_range"),min_loan:Object(w.a)("min_loan")?Object(w.a)("min_loan").replace(/\D/g,""):"",max_loan:Object(w.a)("max_loan")?Object(w.a)("max_loan").replace(/\D/g,""):"",bank:this.state.bankName,banker:Object(w.a)("banker"),lender_type:Object(w.a)("lender_type"),note_search:Object(w.a)("note_search"),search_type:Object(w.a)("search_type"),address:this.state.initialAddress,in_nyc:"New York County"===i||"Bronx County"===i||"Kings County"===i||"Queens County"===i||"Richmond County"===i?1:0};Object.keys(d).forEach((function(e){return(null===d[e]||""===d[e])&&delete d[e]})),A.f.go("/qts-map?".concat(Object(D.a)(d)))}},{key:"render",value:function(){return u.a.createElement("div",{className:this.props.dropdownShowing?"qts-search-dropdown-box mui--z1":"hidden-opacity"},u.a.createElement("div",{className:"qts-search-dropdown-box-content"},u.a.createElement("div",{className:"dropdown-box-header"},u.a.createElement("i",{className:"material-icons search"},"search"),u.a.createElement("p",null,"Search"),u.a.createElement("i",{className:"material-icons close",onClick:this.props.toggleDropdown},"close")),u.a.createElement(f.a,null,u.a.createElement(N.a,{md:"12",className:"address-container"},u.a.createElement("input",{className:"input",type:"text",ref:"autocomplete",value:this.state.initialAddress,onChange:this.onChangeAddress.bind(this),placeholder:"Address",style:{color:"#000"}})),u.a.createElement(N.a,{md:"12",className:"property-container",onClick:this.propertyToggleDropdown.bind(this)},u.a.createElement("p",{className:"offset-column property-type-header"},this.getMultiSelectTextValue()),u.a.createElement("i",{className:"material-icons property-arrow"},"arrow_drop_down"),u.a.createElement(I.a,{options:this.state.localPropertyTypes,selectedOptions:this.state.property_types,showDropdown:this.state.propertyToggleDropdown,checkboxChange:this.propertyTypeCheckboxChange.bind(this)})),u.a.createElement(N.a,{md:"12",className:"radius-container"},u.a.createElement(S.a,{value:this.state.radius.toString(),onChange:this.onChangeRadius.bind(this)},u.a.createElement(C.a,{className:"comps-search-disabled",value:"",label:"Radius"}),u.a.createElement(C.a,{value:"0.25",label:"1/4 Mile"}),u.a.createElement(C.a,{value:"0.5",label:"1/2 Mile"}),u.a.createElement(C.a,{value:"1",label:"1 Mile"}),u.a.createElement(C.a,{value:"3",label:"3 Miles"}),u.a.createElement(C.a,{value:"5",label:"5 Miles"}),u.a.createElement(C.a,{value:"city",label:"Entire City"}),u.a.createElement(C.a,{value:"10",label:"10 Miles"}),u.a.createElement(C.a,{value:"25",label:"25 Miles"}),u.a.createElement(C.a,{value:"50",label:"50 Miles"}),u.a.createElement(C.a,{value:"60",label:"60 Miles"}))),u.a.createElement(N.a,{md:"12",className:"bank-container"},u.a.createElement(k.a,{type:"text",onChange:this.onChangeBankName.bind(this),value:this.state.bankName,hint:"Bank Name"}))),u.a.createElement(f.a,{className:"floating-row"},u.a.createElement(N.a,{md:"12",className:"reset-filters-container",onClick:this.props.toggleDropdown},u.a.createElement(M.a,{className:"search-drpdwn-search-btn",onClick:this.submitSearch.bind(this)},"Search")))))}}]),a}(u.a.Component),x=a(72),P=a.n(x),B=function(e){Object(i.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={dropdownShowing:!1},n.toggleDropdown=n.toggleDropdown.bind(Object(c.a)(n)),n}return Object(o.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.qtsActions.getPropertyTypes();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleDropdown",value:function(){this.setState({dropdownShowing:!this.state.dropdownShowing})}},{key:"render",value:function(){return u.a.createElement("div",{className:"qts-page"},this.props.qts.propertyTypeList.length>0?u.a.createElement("div",null,u.a.createElement(f.a,{className:"sub-header"},u.a.createElement(g.a,{className:"back-arrow",to:"/qts-search"},u.a.createElement("img",{src:"/images/icons/arrow-left.png",alt:"arrow-left"})),u.a.createElement("ul",{className:"qts-nav"},u.a.createElement("li",{className:"qts-nav-list-item list-item2"},u.a.createElement(g.b,{to:{pathname:"/qts-banks",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"POTENTIAL LENDERS")),u.a.createElement("li",{className:"qts-nav-list-item list-item2"},u.a.createElement(g.b,{to:{pathname:"/qts-rates",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Rates")),u.a.createElement("li",{className:"qts-nav-list-item list-item2"},u.a.createElement(g.b,{to:{pathname:"/qts-map",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Map")),u.a.createElement("li",{className:"qts-nav-list-item list-item3"},u.a.createElement(g.b,{to:{pathname:"/qts-brokers",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Active Brokers"))),u.a.createElement("div",{style:{position:"absolute",top:"20px",right:"24px"}},u.a.createElement("i",{className:"material-icons search-icon",onClick:this.toggleDropdown,style:{color:"#fff",cursor:"pointer"}},"search"))),u.a.createElement("div",{className:"qts-container"},this.props.children),u.a.createElement(q,{dropdownShowing:this.state.dropdownShowing,toggleDropdown:this.toggleDropdown,propertyTypesList:this.props.qts.propertyTypeList})):u.a.createElement(P.a,{className:"loading-modal",ariaHideApp:!1,contentLabel:"modal",isOpen:!0,shouldCloseOnOverlayClick:!1},u.a.createElement("div",{className:"centered-spinner"},u.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))))}}]),a}(u.a.Component);t.a=Object(m.b)((function(e){return{title:e.navTitle,qts:e.QTS}}),(function(e){return{navActions:Object(h.b)(y,e),qtsActions:Object(h.b)(_,e)}}))(B)},993:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(8),r=a(17),l=a(12),o=a(11),c=a(0),i=a.n(c),p=a(26),d=a.n(p),u=a(6),m=a(742),h=a(23),g=a(27),y=a(87),_=a.n(y),E=a(25),f=function(e){var t=e.rates,a=t.filter((function(e){return"Agency"===e.LENDING_PROGRAM&&5===e.TERM})).map((function(e){return{MIN_RATE:e.MIN_RATE,MAX_RATE:e.MAX_RATE}}))[0],n=t.filter((function(e){return"Agency"===e.LENDING_PROGRAM&&10===e.TERM})).map((function(e){return{MIN_RATE:e.MIN_RATE,MAX_RATE:e.MAX_RATE}}))[0],s=t.filter((function(e){return"CMBS"===e.LENDING_PROGRAM&&5===e.TERM})).map((function(e){return{MIN_RATE:e.MIN_RATE,MAX_RATE:e.MAX_RATE}}))[0],r=t.filter((function(e){return"CMBS"===e.LENDING_PROGRAM&&10===e.TERM})).map((function(e){return{MIN_RATE:e.MIN_RATE,MAX_RATE:e.MAX_RATE}}))[0],l=t.filter((function(e){return"Agency"!==e.LENDING_PROGRAM&&"CMBS"!==e.LENDING_PROGRAM})),o=l.reduce((function(e,t){return e+t.TOTAL_QUOTES}),0),c=l.map((function(e){return e.LENDERS.split(",")})),p=[].concat.apply([],c),u=Object(g.a)(new Set(p)).length,m=[{section:"Multi-Family",data:l.filter((function(e){return"Multi-Family"===e.ASSET_TYPE}))},{section:"Mixed-use",data:l.filter((function(e){return"Mixed-use"===e.ASSET_TYPE}))},{section:"Retail / Shopping",data:l.filter((function(e){return"Retail / Shopping"===e.ASSET_TYPE}))},{section:"Office",data:l.filter((function(e){return"Office Building"===e.ASSET_TYPE}))},{section:"Industrial",data:l.filter((function(e){return"Industrial"===e.ASSET_TYPE}))}];return console.log("AGENCY5",a),console.log("AGENCY10",n),console.log("CMBS5",s),console.log("CMBS10",r),console.log("nonAgencyTotalQuotes",o),console.log("nonAgencyTotalLenders",u),console.log("nonAgencySections",m),i.a.createElement("div",null,i.a.createElement("div",{className:"qts-rates panel mui--z1"},i.a.createElement(d.a,{className:"panel-heading"},i.a.createElement(_.a,{md:"12",sm:"12"},i.a.createElement("div",{className:"title"},"Based on quotes brokers at "," got in general for multi family is:"))),a&&i.a.createElement(d.a,null,i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",{className:"header"},"(Nationwide Agency quotes) Agency 5 year range:")),i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",null,a.MIN_RATE,"% -",a.MAX_RATE,"%"))),n&&i.a.createElement(d.a,null,i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",{className:"header"},"(Nationwide Agency quotes) Agency 10 year range:")),i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",null,n.MIN_RATE,"% -",n.MAX_RATE,"%"))),s&&i.a.createElement(d.a,null,i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",{className:"header"},"(Nationwide CMBS quotes) CMBS 5 year spread range:")),i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",null,s.MIN_RATE,"% -",s.MAX_RATE,"%"))),r&&i.a.createElement(d.a,null,i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",{className:"header"},"(Nationwide CMBS quotes) CMBS 5 year spread range:")),i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",null,r.MIN_RATE,"% -",r.MAX_RATE,"%")))),i.a.createElement("div",{className:"qts-rates panel mui--z1"},i.a.createElement(d.a,{className:"panel-heading"},i.a.createElement(_.a,{md:"12",sm:"12"},i.a.createElement("div",{className:"title"},"In the ".concat(Object(E.a)("state")," market for multi family we recently got\n              ").concat(o," quotes from ").concat(u," different lenders:")))),m.map((function(e,t){var a=["Multi-Family","Retail / Shopping","Mixed-use"].includes(e.section)?"Conventional":"";return e.data&&i.a.createElement("div",{key:t,className:"qts-rates panel mui--z1"},e.data.map((function(t,n){return i.a.createElement(d.a,{className:"nonAgency",key:n},i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",{className:"header"},e.section," ",a," ",t.TERM," Year Range:")),i.a.createElement(_.a,{xl:"6",lg:"6",md:"6",sm:"12",className:"details-info flex-column"},i.a.createElement("p",null," ",t.MIN_RATE,"% - ",t.MAX_RATE,"% ")))})))}))))},b=a(72),A=a.n(b),O=a(88),N=a(34),v=a.n(N),S=a(771),T=function(e){Object(l.a)(a,e);var t=Object(o.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={isOpened:!1,modalOpen:!1,contact:{},brokerName:"",brokerId:"",searchParams:{latitude:null,longitude:null,state:null,radius:null,property_types:[],min_loan:null,max_loan:null,date_range:null,bank:null,banker:null,lender_types:[],note_search:null,search_type:null,in_nyc:null,page:0}},s.afterOpenModal=s.afterOpenModal.bind(Object(r.a)(s)),s.closeModal=s.closeModal.bind(Object(r.a)(s)),s.getContactFullInfo=s.getContactFullInfo.bind(Object(r.a)(s)),s.openContactModal=s.openContactModal.bind(Object(r.a)(s)),s}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.setState({searchParams:{latitude:Object(E.a)("latitude"),longitude:Object(E.a)("longitude"),state:Object(E.a)("state"),city:Object(E.a)("city"),radius:Object(E.a)("radius"),property_types:Object(E.a)("property_types")?decodeURIComponent(Object(E.a)("property_types")).split(",").map((function(e){return parseInt(e,10)})):[],min_loan:Object(E.a)("min_loan")?parseInt(Object(E.a)("min_loan").replace(/\D/g,""),10):null,max_loan:Object(E.a)("max_loan")?parseInt(Object(E.a)("max_loan").replace(/\D/g,""),10):null,date_range:Object(E.a)("date_range")?parseInt(Object(E.a)("date_range"),10):null,bank:Object(E.a)("bank"),banker:Object(E.a)("banker"),lender_types:Object(E.a)("lending_types")?decodeURIComponent(Object(E.a)("lending_types")).split(",").map((function(e){return parseInt(e,10)})):[],note_search:Object(E.a)("note_search"),search_type:Object(E.a)("search_type"),in_nyc:Object(E.a)("in_nyc")?parseInt(Object(E.a)("in_nyc"),10):null,page:Object(E.a)("page")||1}},(function(){var t=e.state.searchParams;Object.keys(t).forEach((function(e){return(null===t[e]||""===t[e])&&delete t[e]})),e.props.qtsActions.loadQTSRatesResults(t)}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.location.search!==e.location.search&&this.UNSAFE_componentWillMount()}},{key:"getContactFullInfo",value:function(e){this.props.qtsActions.getFullContactInfo(e)}},{key:"openContactModal",value:function(e,t){this.getContactFullInfo(e),this.setState({modalOpen:!0,brokerName:t,brokerId:e})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=this.props.qts.qtsRates,t=null;return this.props.qts.toast.show&&(t=i.a.createElement(O.a,{closeToast:this.props.qtsActions.closeToast,delay:6e3},i.a.createElement("div",{className:"success-message"},i.a.createElement("p",null,this.props.qts.toast.message),i.a.createElement(v.a,{variant:"flat",onClick:this.props.qtsActions.closeToast},this.props.qts.toast.success?"Done":"Dismiss")))),i.a.createElement("div",null,this.props.qts.loadingRates?i.a.createElement(A.a,{className:"loading-modal",isOpen:!0,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},i.a.createElement("div",{className:"centered-spinner"},i.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))):i.a.createElement(S.a,null,i.a.createElement(d.a,null,i.a.createElement("div",{className:"qts-results"},t,e&&e.length?i.a.createElement(f,{rates:e}):i.a.createElement("div",{className:this.props.qts.noRates?"":"hidden"},i.a.createElement("div",null,i.a.createElement("div",{className:"grey-circle"},i.a.createElement("i",{className:"material-icons"},"warning")),i.a.createElement("h2",{className:"no-results"},"No Rates Results Found")))))))}}]),a}(i.a.Component);t.default=Object(u.b)((function(e){return{qts:e.QTS}}),(function(e){return{qtsActions:Object(h.b)(m,e)}}))(T)}}]);
//# sourceMappingURL=38.04a6c002.chunk.js.map