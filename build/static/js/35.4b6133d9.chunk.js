(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[35],{742:function(e,t,a){"use strict";a.r(t),a.d(t,"getLendingTypeList",(function(){return d})),a.d(t,"getPropertyTypes",(function(){return m})),a.d(t,"loadBrokerDeals",(function(){return u})),a.d(t,"getFullContactInfo",(function(){return h})),a.d(t,"loadBankResults",(function(){return b})),a.d(t,"loadQTSRatesResults",(function(){return g})),a.d(t,"loadQuotes",(function(){return y})),a.d(t,"updateErrorToast",(function(){return _})),a.d(t,"closeToast",(function(){return f})),a.d(t,"getParameterListByBank",(function(){return k})),a.d(t,"loadQTSMap",(function(){return E}));var n=a(3),s=a(10),r=a.n(s),o=a(19),i=a(1),l=a(7),c=a(21),p=a(2);function d(){return function(e){Object(p.i)({url:"".concat(l.a.BASE_URL,"lending-types"),success:function(t){switch(t.status){case"200":e({type:i.LOAD_LENDING_TYPES,data:t.data});break;default:e({type:i.LOAD_LENDING_TYPES,data:[]})}}})}}function m(){return function(){var e=Object(o.a)(r.a.mark((function e(t){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(p.t)(p.g.PropertyType);case 2:a=e.sent,t({type:i.LOAD_PROPERTY_TYPE_LIST,data:a});case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}function u(e,t,a,n,s,r,o){var d={};return d=n&&a?{state:a,city:n,property_types:s,date_range:o}:{latitude:e,longitude:t,state:a,property_types:s,radius:r,date_range:o},function(e){e({type:i.LOADING_DEALS}),Object(p.i)({url:"".concat(l.a.BASE_URL,"qts-broker-deals"),applyAuthHeader:!0,data:d,success:function(t){switch(t.status){case"204":e({type:i.NO_DEAL_DATA});break;case"E107":e(Object(c.tokenExpired)());break;default:e({type:i.LOAD_QTS_BROKER_DEALS,data:t.data})}}})}}function h(e){return function(t){t({type:i.LOADING_FULL_CONTACT}),Object(p.i)({url:"".concat(l.a.BASE_URL,"contact/").concat(e),applyAuthHeader:!0,success:function(e){e.data&&e.data.length>=1?t({type:i.LOAD_FULL_CONTACT,contact:e.data[0].contacts[0]}):t({type:i.NO_FULL_CONTACT})}})}}function b(e){return e.city&&(delete e.latitude,delete e.longitude),function(t){t({type:i.LOADING_QUOTES}),Object(p.i)({url:"".concat(l.a.BASE_URL,"qts-banks"),applyAuthHeader:!0,data:Object(n.a)({},e),success:function(e){e.data&&e.data.banks.length>0?t({type:i.LOAD_QTS_BANK_QUOTES,data:e.data}):t({type:i.NO_QUOTE_DATA})},error:Object(p.v)(t,{default:{type:i.LOAD_QTS_BANK_DEALS_FAILED},404:{type:i.NO_QUOTE_DATA}})})}}function g(e){return function(t){t({type:i.LOADING_QUOTES}),Object(p.i)({url:"".concat(l.a.BASE_URL,"qts-rates"),applyAuthHeader:!0,data:Object(n.a)({},e),success:function(e){console.log("response",e.data),e.data&&e.data.length>0?t({type:i.LOAD_QTS_RATES,data:e.data}):t({type:i.NO_RATE_DATA})},error:Object(p.v)(t,{default:{type:i.LOAD_QTS_RATES_FAILED},404:{type:i.NO_RATE_DATA}})})}}function y(e){return e.city&&(delete e.latitude,delete e.longitude),function(t){t({type:i.LOADING_QUOTES}),Object(p.i)({url:"".concat(l.a.BASE_URL,"qts-banks"),applyAuthHeader:!0,data:Object(n.a)({},e),success:function(e){t({type:i.LOAD_QTS_QUOTES,data:e.data?e.data.banks[0]:{}})},error:Object(p.v)(t,i.LOAD_QTS_QUOTES_FAILED)})}}function _(e){return{type:i.UPDATE_ERROR_TOAST,message:e}}function f(){return{type:i.CLOSE_ASK_QTS_TOAST}}function k(e){return function(t){t({type:i.LOADING_PARAM_LIST}),Object(p.i)({url:"".concat(l.a.BASE_URL,"get-lending"),applyAuthHeader:!0,data:{bank_id:e},success:function(e){switch(e.status){case"E404":t(Object(c.tokenExpired)());break;case"204":t({type:i.LOAD_PARAM_LIST,lendingList:[]});break;case"E413":t({type:i.LOAD_PARAM_LIST_FAILED,message:e.message});break;default:t({type:i.LOAD_PARAM_LIST,lendingList:e.data.lending_programs})}}})}}function E(e,t,a,n,s,r,o,d,m,u,h,b,g,y,_,f,k,E,O){var v={};return v=a&&n?{city:a,state:n,property_types:s,bank_name:E,range_a:d,range_b:m,range_c:u,range_d:h,date_range:o,show_inactive:b,in_nyc:O}:{latitude:e,longitude:t,property_types:s,bank_name:E,range_a:d,range_b:m,range_c:u,range_d:h,date_range:o,radius:r,show_inactive:b,in_nyc:O},Object.keys(v).forEach((function(e){return(null===v[e]||""===v[e])&&delete v[e]})),function(a){a({type:i.LOADING_QTS_MAP}),Object(p.i)({url:"".concat(l.a.BASE_URL,"qts-map"),applyAuthHeader:!0,data:v,success:function(n){switch(n.status){case"E403":case"E404":a(Object(c.tokenExpired)());break;case"204":case"E107":a({type:i.NO_QTS_MAP_DATA,center:{latitude:e,longitude:t},message:n.message});break;default:var s={PW:y?n.data.PW:[],IP:g?n.data.IP:[],Closed:_?n.data.Closed:[],Sales:f?n.data.Sales:[],Finance:k?n.data.Finance:[],Inactive:b?n.data.Inactive:[]};a({type:i.LOAD_QTS_MAP_DATA,data:s,center:{latitude:e,longitude:t}})}}})}}},762:function(e,t,a){"use strict";var n=a(27),s=a(9),r=a(8),o=a(17),i=a(12),l=a(11),c=a(0),p=a.n(c),d=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){var e=this.props.item;return p.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple"},p.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},p.a.createElement("input",{type:"checkbox",id:this.props.id,checked:this.props.checked||!1,onChange:this.props.onChangeHandler.bind(null,this.props.id,!this.props.checked)}),p.a.createElement("span",{className:"checkbox"}),p.a.createElement("span",{className:"ripple"})),p.a.createElement("p",{htmlFor:this.props.id,className:"label",onClick:this.props.onChangeHandler.bind(null,this.props.id,!this.props.checked)},e.value))}}]),a}(p.a.Component),m=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={localOptionsSelected:[]},n.checkboxChange=n.checkboxChange.bind(Object(o.a)(n)),n.getMultiSelectTextValue=n.getMultiSelectTextValue.bind(Object(o.a)(n)),n}return Object(r.a)(a,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){e.selectedOptions&&e.selectedOptions!==this.state.localOptionsSelected&&this.setState({localOptionsSelected:e.selectedOptions})}},{key:"checkboxChange",value:function(e,t){var a=this;0===e&&t?this.setState({localOptionsSelected:this.props.options.slice(1).map((function(e){return e.list_type_id}))},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):0!==e||t?t?this.setState({localOptionsSelected:[].concat(Object(n.a)(this.state.localOptionsSelected),[e])},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):t||this.setState({localOptionsSelected:this.state.localOptionsSelected.filter((function(t){return parseInt(t,10)!==e}))},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)})):this.setState({localOptionsSelected:[]},(function(){return a.props.checkboxChange(a.state.localOptionsSelected)}))}},{key:"getMultiSelectTextValue",value:function(){var e=this,t="";return this.props.selectedOptions&&this.props.selectedOptions.map((function(a,n){var s=e.props.options.find((function(e){return e.list_type_id===a}));return s&&(n>=1&&(t+=", "),t+=s.value),t})),t.length>0?t:this.props.placeholder}},{key:"render",value:function(){var e=this;return p.a.createElement("div",null,this.props.placeholder?p.a.createElement("p",{className:"qts-multiselect-placeholder"},this.getMultiSelectTextValue()):"",p.a.createElement("div",{className:this.props.showDropdown?"qts-dropdown-box mui--z1":"hidden"},this.props.options&&this.props.options.map((function(t,a){return p.a.createElement(d,{key:a,id:t.list_type_id,item:t,checked:0===t.list_type_id?e.state.localOptionsSelected.length===e.props.options.filter((function(e){return 0!==e.list_type_id})).length:e.state.localOptionsSelected.find((function(e){return parseInt(e,10)===t.list_type_id})),onChangeHandler:e.checkboxChange})}))))}}]),a}(p.a.Component);t.a=m},771:function(e,t,a){"use strict";var n=a(10),s=a.n(n),r=a(19),o=a(9),i=a(8),l=a(17),c=a(12),p=a(11),d=a(0),m=a.n(d),u=a(6),h=a(23),b=a(15),g=a(50),y=a(742),_=a(26),f=a.n(_),k=a(27),E=a(2),O=a(87),v=a.n(O),N=a(73),S=a.n(N),A=a(40),j=a.n(A),C=a(46),T=a.n(C),w=a(34),L=a.n(w),q=a(762),D=a(25),x=a(80),I=window.google,B=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={initialAddress:"",addressChanged:!1,radius:"3",property_types:[],bank:"",bankName:"",localPropertyTypes:[],propertyToggleDropdown:!1,autocompleteAddress:""},n}return Object(i.a)(a,[{key:"componentDidMount",value:function(){this.loadGoogleAutocomplete(),this.setState({localPropertyTypes:[{list_type_id:0,value:"All"}].concat(Object(k.a)(this.props.propertyTypesList)),initialAddress:sessionStorage.getItem("qts_address")?JSON.parse(sessionStorage.getItem("qts_address")).address:Object(D.a)("address")?Object(D.a)("address"):"",addressChanged:!1,radius:sessionStorage.getItem("qts_radius")?sessionStorage.getItem("qts_radius"):Object(D.a)("radius")?Object(D.a)("radius"):"3",property_types:sessionStorage.getItem("qts_propertyTypes")?sessionStorage.getItem("qts_propertyTypes").split(","):Object(D.a)("property_types")?decodeURIComponent(Object(D.a)("property_types")).split(","):[],bank:sessionStorage.getItem("qts_bank")?sessionStorage.getItem("qts_bank"):Object(D.a)("bank")?Object(D.a)("bank"):""})}},{key:"loadGoogleAutocomplete",value:function(){var e=new I.maps.places.Autocomplete(this.refs.autocomplete,{componentRestrictions:{country:"us"}});e.addListener("place_changed",function(){if(this.refs.autocomplete.blur(),this.place=e.getPlace(),this.place.geometry)try{this.setState({autocompleteAddress:this.place,initialAddress:this.place.formatted_address})}catch(t){alert(t)}else alert("there was an error with google autocomplete")}.bind(this))}},{key:"componentDidUpdate",value:function(){this.loadGoogleAutocomplete()}},{key:"propertyToggleDropdown",value:function(){var e=!this.state.propertyToggleDropdown;this.setState({propertyToggleDropdown:e},(function(){e&&this.state.lenderToggleDropdown&&this.setState({lenderToggleDropdown:!1})}))}},{key:"propertyTypeCheckboxChange",value:function(e){this.setState({property_types:e})}},{key:"getMultiSelectTextValue",value:function(){var e=this,t="";return this.state.property_types&&this.state.property_types.map((function(a,n){var s=e.state.localPropertyTypes.find((function(e){return e.list_type_id===a}));return s&&(n>=1&&(t+=", "),t+=s.value),t})),t.length>0?t:"Property Types (optional)"}},{key:"onChangeAddress",value:function(e){13===e.keyCode&&e.preventDefault(),this.setState({addressChanged:!0,initialAddress:e.target.value})}},{key:"onChangeRadius",value:function(e){this.setState({radius:e.target.value},sessionStorage.setItem("qts_radius",this.state.radius))}},{key:"onChangeBankName",value:function(e){this.setState({bankName:e.target.value}),sessionStorage.setItem("qts_bank",this.state.bankName)}},{key:"submitSearch",value:function(e){e.preventDefault(),this.setState({propertyToggleDropdown:!1});var t="";try{t=JSON.parse(sessionStorage.getItem("qts_address"))}catch(m){}var a=this.state.autocompleteAddress.geometry?this.state.autocompleteAddress.geometry.location.lat():t.latitude,n=this.state.autocompleteAddress.geometry?this.state.autocompleteAddress.geometry.location.lng():t.longitude,s=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("administrative_area_level_1")})):t.state,r=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("locality")}))||this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("sublocality")})):t.city,o=this.state.autocompleteAddress.address_components?this.state.autocompleteAddress.address_components.find((function(e){return e.types.includes("administrative_area_level_2")})):"";if(s){var i=s.short_name,l=r.long_name,c=o&&o.long_name,p={address:this.state.autocompleteAddress?this.state.autocompleteAddress.formatted_address:this.state.initialAddress,longitude:n,latitude:a,state:s,city:r};sessionStorage.setItem("qts_address",JSON.stringify(p))}else alert("You must search by a precise location");sessionStorage.setItem("qts_radius",this.state.radius),sessionStorage.setItem("qts_propertyTypes",this.state.property_types.length?this.state.property_types.join(","):""),sessionStorage.setItem("qts_bank",this.state.bankName),"New York County"===c||"Bronx County"===c||"Kings County"===c||"Queens County"===c||"Richmond County"===c?sessionStorage.setItem("qts_in_nyc",1):sessionStorage.setItem("qts_in_nyc",0);var d={latitude:a,longitude:n,state:i,city:"city"===this.state.radius?l:"",property_types:this.state.property_types.length?encodeURIComponent(this.state.property_types):"",radius:"city"===this.state.radius?"":this.state.radius,date_range:Object(D.a)("date_range"),min_loan:Object(D.a)("min_loan")?Object(D.a)("min_loan").replace(/\D/g,""):"",max_loan:Object(D.a)("max_loan")?Object(D.a)("max_loan").replace(/\D/g,""):"",bank:this.state.bankName,banker:Object(D.a)("banker"),lender_type:Object(D.a)("lender_type"),note_search:Object(D.a)("note_search"),search_type:Object(D.a)("search_type"),address:this.state.initialAddress,in_nyc:"New York County"===c||"Bronx County"===c||"Kings County"===c||"Queens County"===c||"Richmond County"===c?1:0};Object.keys(d).forEach((function(e){return(null===d[e]||""===d[e])&&delete d[e]})),E.f.go("/qts-map?".concat(Object(x.a)(d)))}},{key:"render",value:function(){return m.a.createElement("div",{className:this.props.dropdownShowing?"qts-search-dropdown-box mui--z1":"hidden-opacity"},m.a.createElement("div",{className:"qts-search-dropdown-box-content"},m.a.createElement("div",{className:"dropdown-box-header"},m.a.createElement("i",{className:"material-icons search"},"search"),m.a.createElement("p",null,"Search"),m.a.createElement("i",{className:"material-icons close",onClick:this.props.toggleDropdown},"close")),m.a.createElement(f.a,null,m.a.createElement(v.a,{md:"12",className:"address-container"},m.a.createElement("input",{className:"input",type:"text",ref:"autocomplete",value:this.state.initialAddress,onChange:this.onChangeAddress.bind(this),placeholder:"Address",style:{color:"#000"}})),m.a.createElement(v.a,{md:"12",className:"property-container",onClick:this.propertyToggleDropdown.bind(this)},m.a.createElement("p",{className:"offset-column property-type-header"},this.getMultiSelectTextValue()),m.a.createElement("i",{className:"material-icons property-arrow"},"arrow_drop_down"),m.a.createElement(q.a,{options:this.state.localPropertyTypes,selectedOptions:this.state.property_types,showDropdown:this.state.propertyToggleDropdown,checkboxChange:this.propertyTypeCheckboxChange.bind(this)})),m.a.createElement(v.a,{md:"12",className:"radius-container"},m.a.createElement(S.a,{value:this.state.radius.toString(),onChange:this.onChangeRadius.bind(this)},m.a.createElement(T.a,{className:"comps-search-disabled",value:"",label:"Radius"}),m.a.createElement(T.a,{value:"0.25",label:"1/4 Mile"}),m.a.createElement(T.a,{value:"0.5",label:"1/2 Mile"}),m.a.createElement(T.a,{value:"1",label:"1 Mile"}),m.a.createElement(T.a,{value:"3",label:"3 Miles"}),m.a.createElement(T.a,{value:"5",label:"5 Miles"}),m.a.createElement(T.a,{value:"city",label:"Entire City"}),m.a.createElement(T.a,{value:"10",label:"10 Miles"}),m.a.createElement(T.a,{value:"25",label:"25 Miles"}),m.a.createElement(T.a,{value:"50",label:"50 Miles"}),m.a.createElement(T.a,{value:"60",label:"60 Miles"}))),m.a.createElement(v.a,{md:"12",className:"bank-container"},m.a.createElement(j.a,{type:"text",onChange:this.onChangeBankName.bind(this),value:this.state.bankName,hint:"Bank Name"}))),m.a.createElement(f.a,{className:"floating-row"},m.a.createElement(v.a,{md:"12",className:"reset-filters-container",onClick:this.props.toggleDropdown},m.a.createElement(L.a,{className:"search-drpdwn-search-btn",onClick:this.submitSearch.bind(this)},"Search")))))}}]),a}(m.a.Component),R=a(72),M=a.n(R),Q=function(e){Object(c.a)(a,e);var t=Object(p.a)(a);function a(e){var n;return Object(o.a)(this,a),(n=t.call(this,e)).state={dropdownShowing:!1},n.toggleDropdown=n.toggleDropdown.bind(Object(l.a)(n)),n}return Object(i.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=Object(r.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.props.qtsActions.getPropertyTypes();case 2:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"toggleDropdown",value:function(){this.setState({dropdownShowing:!this.state.dropdownShowing})}},{key:"render",value:function(){return m.a.createElement("div",{className:"qts-page"},this.props.qts.propertyTypeList.length>0?m.a.createElement("div",null,m.a.createElement(f.a,{className:"sub-header"},m.a.createElement(b.a,{className:"back-arrow",to:"/qts-search"},m.a.createElement("img",{src:"/images/icons/arrow-left.png",alt:"arrow-left"})),m.a.createElement("ul",{className:"qts-nav"},m.a.createElement("li",{className:"qts-nav-list-item list-item2"},m.a.createElement(b.b,{to:{pathname:"/qts-banks",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"POTENTIAL LENDERS")),m.a.createElement("li",{className:"qts-nav-list-item list-item2"},m.a.createElement(b.b,{to:{pathname:"/qts-rates",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Rates")),m.a.createElement("li",{className:"qts-nav-list-item list-item2"},m.a.createElement(b.b,{to:{pathname:"/qts-map",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Map")),m.a.createElement("li",{className:"qts-nav-list-item list-item3"},m.a.createElement(b.b,{to:{pathname:"/qts-brokers",search:window.location.search},className:"qts-nav-item",activeClassName:"header-active-link"},"Active Brokers"))),m.a.createElement("div",{style:{position:"absolute",top:"20px",right:"24px"}},m.a.createElement("i",{className:"material-icons search-icon",onClick:this.toggleDropdown,style:{color:"#fff",cursor:"pointer"}},"search"))),m.a.createElement("div",{className:"qts-container"},this.props.children),m.a.createElement(B,{dropdownShowing:this.state.dropdownShowing,toggleDropdown:this.toggleDropdown,propertyTypesList:this.props.qts.propertyTypeList})):m.a.createElement(M.a,{className:"loading-modal",ariaHideApp:!1,contentLabel:"modal",isOpen:!0,shouldCloseOnOverlayClick:!1},m.a.createElement("div",{className:"centered-spinner"},m.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))))}}]),a}(m.a.Component);t.a=Object(u.b)((function(e){return{title:e.navTitle,qts:e.QTS}}),(function(e){return{navActions:Object(h.b)(g,e),qtsActions:Object(h.b)(y,e)}}))(Q)},988:function(e,t,a){"use strict";a.r(t);var n=a(9),s=a(8),r=a(17),o=a(12),i=a(11),l=a(0),c=a.n(l),p=a(26),d=a.n(p),m=a(6),u=a(742),h=a(23),b=a(87),g=a.n(b),y=a(210),_=a.n(y),f=a(786),k=a.n(f),E=a(2),O=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={bankersShowing:!1},s.myRef=c.a.createRef(),s.toggleBankers=s.toggleBankers.bind(Object(r.a)(s)),s.goToBank=s.goToBank.bind(Object(r.a)(s)),s}return Object(s.a)(a,[{key:"componentDidMount",value:function(){window.location.search.includes("bankId=".concat(this.props.item.bank_id,"&"))&&this.myRef.current.scrollIntoView()}},{key:"toggleBankers",value:function(){this.setState({bankersShowing:!this.state.bankersShowing})}},{key:"goToBank",value:function(e){this.props.recentQuotesByBank(this.props.item.bank_id,e)}},{key:"render",value:function(){var e=this,t=!this.props.item.qts_quotes.length>0&&!this.props.item.national_data_deals.length>0;return c.a.createElement("div",{ref:this.myRef,className:"qts-bankquote panel mui--z1",id:this.props.item.bank_id},c.a.createElement(d.a,{className:"panel-heading",onClick:function(){return e.goToBank(t)}},c.a.createElement(g.a,{md:"12",sm:"12"},c.a.createElement("p",{className:"bank-title"},this.props.item.bank_name?this.props.item.bank_name:" "))),c.a.createElement(d.a,{className:this.props.item.stats?"":"hidden",onClick:function(){return e.goToBank(t)}},c.a.createElement("p",{className:"title bank-state"},"Bank stats showing in your search area: (Radius results may cross state lines)"),c.a.createElement(g.a,{xl:"2",lg:"2",md:"2",sm:"12",className:"details-info flex-column"},c.a.createElement("div",{className:"circle-icon"},c.a.createElement("i",{className:"material-icons"},"description")),c.a.createElement("div",{className:"deal-info"},c.a.createElement("p",{className:"info-title"},this.props.item.count_got_quote>0?this.props.item.count_got_quote:0," ",1===Number(this.props.item.count_got_quote)?"Quote":"Quotes"),c.a.createElement("p",{className:"info-subtitle"},"In past 6 months"))),c.a.createElement(g.a,{xl:"2",lg:"2",md:"2",sm:"12",className:"details-info flex-column"},c.a.createElement("div",{className:"circle-icon"},c.a.createElement("i",{className:"material-icons"},"work")),c.a.createElement("div",{className:"deal-info"},c.a.createElement("p",{className:"info-title"},this.props.item.count_ip>0?this.props.item.count_ip:0," ",1===Number(this.props.item.count_ip)?"Deal":"Deals",","," ",this.props.item.total_ip>0?Object(E.m)(this.props.item.total_ip):"$0.00"),c.a.createElement("p",{className:"info-subtitle"},"Currently IP"))),c.a.createElement(g.a,{xl:"2",lg:"2",md:"2",sm:"12",className:"details-info flex-column"},c.a.createElement("div",{className:"circle-icon tablet-margin-left"},c.a.createElement("i",{className:"material-icons"},"work")),c.a.createElement("div",{className:"deal-info"},c.a.createElement("p",{className:"info-title"},this.props.item.count_closed>0?this.props.item.count_closed:0," ",1===Number(this.props.item.count_closed)?"Deal":"Deals",","," ",this.props.item.total_closed>0?Object(E.m)(this.props.item.total_closed):"$0.00"),c.a.createElement("p",{className:"info-subtitle"},"Closed in the last 12 months"))),c.a.createElement(g.a,{xl:"2",lg:"2",md:"2",sm:"12",className:"details-info flex-column"},c.a.createElement("div",{className:"circle-icon tablet-margin-left"},c.a.createElement("i",{className:"material-icons"},"work")),c.a.createElement("div",{className:"deal-info"},c.a.createElement("p",{className:"info-title"},1===Number(this.props.item.national_data_count)?"1 Loan":"".concat(this.props.item.national_data_count," Loans")),c.a.createElement("p",{className:"info-subtitle"},"Closed from Public data"))),c.a.createElement(g.a,{xl:"2",lg:"2",md:"2",sm:"12",className:"details-info flex-column"},c.a.createElement("div",{className:"circle-icon tablet-margin-left"},c.a.createElement("img",{src:"/images/icons/file-percent.png",alt:"file-percent"})),c.a.createElement("div",{className:"deal-info"},c.a.createElement("p",{className:"info-title"},"Rate Range:",c.a.createElement("br",null),this.props.item.min_rate||this.props.item.max_rate?"".concat(this.props.item.min_rate?+parseFloat(this.props.item.min_rate)+"%":""," - ").concat(this.props.item.max_rate?+parseFloat(this.props.item.max_rate)+"%":""):""),c.a.createElement("p",{className:"info-subtitle"},"From the past 6 months"))),c.a.createElement(g.a,{xl:"2",lg:"2",md:"2",sm:"12",className:"details-info flex-column"},c.a.createElement("div",{className:"circle-icon tablet-margin-left"},c.a.createElement("img",{src:"/images/icons/file-percent.png",alt:"file-percent"})),c.a.createElement("div",{className:"deal-info"},c.a.createElement("p",{className:"info-title"},"Loan Range:",c.a.createElement("br",null),this.props.item.min_loan||this.props.item.max_loan?"".concat(this.props.item.min_loan?Object(E.m)(this.props.item.min_loan):""," - ").concat(this.props.item.max_loan?Object(E.m)(this.props.item.max_loan):""):""),c.a.createElement("p",{className:"info-subtitle"},"From the past 6 months")))),c.a.createElement(_.a,{className:this.props.item.stats?"qts-recommend-divider":"hidden"}),c.a.createElement(d.a,{className:"qts-recommend-footer"},this.props.item.bankers.length&&this.props.item.bankers[0].banker_name?c.a.createElement("p",{className:"banker-name",onClick:function(){return e.props.openContactModal(e.props.item.bankers&&e.props.item.bankers[0].banker_id,e.props.item.bankers&&e.props.item.bankers[0].banker_name)}},c.a.createElement("span",null,"Banker:"),this.props.item.bankers[0].banker_name,c.a.createElement("span",{style:{marginLeft:"8px",fontWeight:"normal",fontSize:"11px",color:"rgba(0,0,0,.87)"}},this.props.item.bankers[0].type.join(", "))):c.a.createElement("p",{className:"banker-name banker-name-empty"},c.a.createElement("span",null,"Banker:"),"Not Available"),c.a.createElement("p",{className:this.props.item.bankers&&this.props.item.bankers.length>1?"more-bankers":"hidden",onClick:this.toggleBankers},"More Bankers",c.a.createElement("i",{className:"material-icons"},this.state.bankersShowing?"keyboard_arrow_up":"keyboard_arrow_down")),c.a.createElement("span",{onClick:this.props.recentLendingCriteriaByBank.bind(null,this.props.item.bank_id,t),className:"lending-criteria"},"Lending Criteria",this.props.item.lending_criteria_last_updated?c.a.createElement("p",{class:"lastUpdated"},c.a.createElement("span",null,"(Last Updated:"," ",new Date(this.props.item.lending_criteria_last_updated).toLocaleDateString(),")")):""),c.a.createElement("span",{onClick:this.props.recentQuotesByBank.bind(null,this.props.item.bank_id,t),className:"more-bankers"},"Quotes Received")),c.a.createElement(k.a,{isOpened:this.state.bankersShowing},c.a.createElement(d.a,{className:"qts-recommend-footer2"},c.a.createElement("p",{className:"other-banker-name"},c.a.createElement("span",null,"Other Bankers:")),c.a.createElement("div",null,this.props.item.bankers&&this.props.item.bankers.slice(1).map((function(t,a){return c.a.createElement("div",{key:a},c.a.createElement("p",{className:"other-banker orange-hover",onClick:function(){return e.props.openContactModal(t.banker_id,t.banker_name)}},t.banker_name),c.a.createElement("span",{className:t.type.length?"small-text":"hidden",style:{marginLeft:"8px",fontSize:"11px",fontWeight:"normal"}},t.type.join(", ")))}))))))}}]),a}(c.a.Component),v=a(165),N=a(72),S=a.n(N),A=a(88),j=a(34),C=a.n(j),T=a(25),w=(a(80),a(258)),L=a(771),q=function(e){Object(o.a)(a,e);var t=Object(i.a)(a);function a(e){var s;return Object(n.a)(this,a),(s=t.call(this,e)).state={isOpened:!1,modalOpen:!1,contact:{},brokerName:"",brokerId:"",searchParams:{latitude:null,longitude:null,state:null,radius:null,property_types:[],min_loan:null,max_loan:null,date_range:null,bank:null,banker:null,lender_types:[],note_search:null,search_type:null,in_nyc:null,page:0}},s.afterOpenModal=s.afterOpenModal.bind(Object(r.a)(s)),s.closeModal=s.closeModal.bind(Object(r.a)(s)),s.recentQuotesByBank=s.recentQuotesByBank.bind(Object(r.a)(s)),s.recentLendingCriteriaByBank=s.recentLendingCriteriaByBank.bind(Object(r.a)(s)),s.getContactFullInfo=s.getContactFullInfo.bind(Object(r.a)(s)),s.openContactModal=s.openContactModal.bind(Object(r.a)(s)),s}return Object(s.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){var e=this;this.setState({searchParams:{latitude:Object(T.a)("latitude"),longitude:Object(T.a)("longitude"),state:Object(T.a)("state"),city:Object(T.a)("city"),radius:Object(T.a)("radius"),property_types:Object(T.a)("property_types")?decodeURIComponent(Object(T.a)("property_types")).split(",").map((function(e){return parseInt(e,10)})):[],min_loan:Object(T.a)("min_loan")?parseInt(Object(T.a)("min_loan").replace(/\D/g,""),10):null,max_loan:Object(T.a)("max_loan")?parseInt(Object(T.a)("max_loan").replace(/\D/g,""),10):null,date_range:Object(T.a)("date_range")?parseInt(Object(T.a)("date_range"),10):null,bank:Object(T.a)("bank"),banker:Object(T.a)("banker"),lender_types:Object(T.a)("lending_types")?decodeURIComponent(Object(T.a)("lending_types")).split(",").map((function(e){return parseInt(e,10)})):[],note_search:Object(T.a)("note_search"),search_type:Object(T.a)("search_type"),in_nyc:Object(T.a)("in_nyc")?parseInt(Object(T.a)("in_nyc"),10):null,page:Object(T.a)("page")||1}},(function(){var t=e.state.searchParams;Object.keys(t).forEach((function(e){return(null===t[e]||""===t[e])&&delete t[e]})),e.props.qtsActions.loadBankResults(t)}))}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.props.location.search!==e.location.search&&this.UNSAFE_componentWillMount()}},{key:"recentQuotesByBank",value:function(e,t){E.f.go("/qts-quotes".concat(this.generateBankQueryString(e)))}},{key:"recentLendingCriteriaByBank",value:function(e,t){E.f.go("/qts-lending-criteria".concat(this.generateBankQueryString(e)))}},{key:"generateBankQueryString",value:function(e){var t=window.location.search||"";return e&&(t.includes("bankId=")||(t+="&bankId=123&"),t=t.replace(/&bankId=[\d]*&/,"&bankId=".concat(e,"&"))),t}},{key:"getContactFullInfo",value:function(e){this.props.qtsActions.getFullContactInfo(e)}},{key:"openContactModal",value:function(e,t){this.getContactFullInfo(e),this.setState({modalOpen:!0,brokerName:t,brokerId:e})}},{key:"afterOpenModal",value:function(){}},{key:"closeModal",value:function(){this.setState({modalOpen:!1})}},{key:"render",value:function(){var e=this,t=this.props.qts.bankQuotes,a=null;return this.props.qts.toast.show&&(a=c.a.createElement(A.a,{closeToast:this.props.qtsActions.closeToast,delay:6e3},c.a.createElement("div",{className:"success-message"},c.a.createElement("p",null,this.props.qts.toast.message),c.a.createElement(C.a,{variant:"flat",onClick:this.props.qtsActions.closeToast},this.props.qts.toast.success?"Done":"Dismiss")))),c.a.createElement("div",null,this.props.qts.loadingQuotes?c.a.createElement(S.a,{className:"loading-modal",isOpen:!0,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},c.a.createElement("div",{className:"centered-spinner"},c.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))):c.a.createElement(L.a,null,c.a.createElement(d.a,null,c.a.createElement("div",{className:"qts-results"},a,t&&t.banks.length?c.a.createElement("div",null,t.banks.map((function(t,a){return c.a.createElement(O,{key:a,openContactModal:e.openContactModal,recentQuotesByBank:e.recentQuotesByBank,recentLendingCriteriaByBank:e.recentLendingCriteriaByBank,item:t})})),c.a.createElement(w.a,{totalPages:t.totalPages,currentPage:this.state.searchParams.page}),c.a.createElement(v.a,{key:this.state.brokerId,isOpen:this.state.modalOpen,onRequestClose:this.closeModal,onAfterOpen:this.afterOpenModal,name:this.state.brokerName,loading:this.props.qts.loadingContact,contact:this.props.qts.contact,noContact:Object(E.w)(this.props.qts.contact)})):c.a.createElement("div",{className:this.props.qts.noQuotes?"":"hidden"},c.a.createElement("div",null,c.a.createElement("div",{className:"grey-circle"},c.a.createElement("i",{className:"material-icons"},"warning")),c.a.createElement("h2",{className:"no-results"},"No Bank Results Found")))))))}}]),a}(c.a.Component);t.default=Object(m.b)((function(e){return{qts:e.QTS}}),(function(e){return{qtsActions:Object(h.b)(u,e)}}))(q)}}]);
//# sourceMappingURL=35.4b6133d9.chunk.js.map