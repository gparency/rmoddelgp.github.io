(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[40],{753:function(t,e,a){"use strict";var n=a(9),s=a(8),i=a(12),o=a(11),c=a(0),l=a.n(c),r=a(72),p=a.n(r),d=a(46),m=a.n(d),u=a(73),h=a.n(u),g=a(34),v=a.n(g),b=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var s;return Object(n.a)(this,a),(s=e.call(this,t)).state={rating:s.props.client_rating},s}return Object(s.a)(a,[{key:"onSubmit",value:function(t){t.preventDefault(),this.props.submitRatingModal(this.props.contactId,this.state.rating)}},{key:"onChangeRating",value:function(t){this.setState({rating:t.target.value})}},{key:"render",value:function(){var t=this.props.ratingList.map((function(t){return l.a.createElement(m.a,{key:t.list_type_id,value:t.list_type_id,label:t.value})}));return l.a.createElement(p.a,{className:"rating-modal",isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,style:{content:{margin:"auto"}},ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!0},l.a.createElement("div",{className:"modal-form"},l.a.createElement("p",{className:"add-note-modal"},"Rating"),l.a.createElement(h.a,{defaultValue:this.state.rating,onChange:this.onChangeRating.bind(this),label:"Change Rating"},t),l.a.createElement("div",{className:"add-note-buttons"},l.a.createElement(v.a,{variant:"flat",onClick:this.props.onRequestClose,className:"cancel-btn"},"cancel"),l.a.createElement(v.a,{variant:"flat",onClick:this.onSubmit.bind(this),type:"submit",value:"submit"},"Save"))))}}]),a}(l.a.Component);e.a=b},760:function(t,e,a){"use strict";var n=a(10),s=a.n(n),i=a(19),o=a(9),c=a(8),l=a(17),r=a(12),p=a(11),d=a(26),m=a.n(d),u=a(0),h=a.n(u),g=a(2),v=a(87),b=a.n(v),f=a(256),C=a(753),E=a(65),y=a(39),k=a.n(y),_=a(80),O=function(t){Object(r.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={date:!1,modalIsAddOpen:!1,ratingModalIsOpen:!1,ratingModalClose:!1,showDatePicker:!1},n.onChange=n.onChange.bind(Object(l.a)(n)),n.openAddModal=n.openAddModal.bind(Object(l.a)(n)),n.afterOpenModal=n.afterOpenModal.bind(Object(l.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(l.a)(n)),n.closeAddModal=n.closeAddModal.bind(Object(l.a)(n)),n.onClickHandler=n.onClickHandler.bind(Object(l.a)(n)),n.validateWebsite=n.validateWebsite.bind(Object(l.a)(n)),n.navigateToProperties=n.navigateToProperties.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"UNSAFE_componentWillMount",value:function(){this.setState({ratingModalClose:this.props.updateRatingSuccess})}},{key:"validateWebsite",value:function(t){return t.match(/^[a-zA-Z]+:\/\//)||(t="http://"+t),t}},{key:"onClickHandler",value:function(t){this.props.setPageAndScrollPos(window.scrollY),this.props.searchType?g.f.go("/contacts/details/".concat(t,"/").concat(encodeURIComponent(this.props.page),"?").concat(Object(_.a)({type:this.props.searchType}))):g.f.go("/contacts/details/".concat(t,"/").concat(encodeURIComponent(this.props.page)))}},{key:"afterOpenModal",value:function(){}},{key:"openAddModal",value:function(){this.setState({modalIsAddOpen:!0,note:""})}},{key:"handleSubmit",value:function(t,e){t.preventDefault(),this.setState({modalIsAddOpen:!1});var a=new Date,n={note_date_time:k()(a).format("MM/DD/YYYY h:mm "),user_name:JSON.parse(localStorage.getItem("data")).user_name,activity_note:e};this.props.item.notes.push(n),this.props.updateNote(this.props.item.contact_id,e)}},{key:"closeAddModal",value:function(t){t.preventDefault(),this.setState({modalIsAddOpen:!1})}},{key:"onChange",value:function(t){var e=k()(t).format("YYYY-MM-DD");this.props.changeDate(this.props.item.contact_id,e)}},{key:"navigateToProperties",value:function(){g.f.go("/properties/deals?".concat(Object(_.a)({contact_id:this.props.item.contact_id,previous_page:encodeURIComponent(window.location.pathname)+window.location.search,contact_name:this.props.item.contact_first_name+" "+this.props.item.contact_last_name})))}},{key:"openRatingModal",value:function(){this.setState({ratingModalIsOpen:!0})}},{key:"closeRatingModal",value:function(){this.setState({ratingModalIsOpen:!1})}},{key:"submitRatingModal",value:function(){var t=Object(i.a)(s.a.mark((function t(e,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.changeClientRating(e,a);case 2:this.props.updateRatingSuccess?this.setState({ratingModalIsOpen:!1}):this.setState({ratingModalIsOpen:!0});case 3:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"showDatePicker",value:function(){this.setState({showDatePicker:!0})}},{key:"render",value:function(){var t=this,e=null,a=null;return 1===this.props.item.is_primary_banker&&(e=h.a.createElement("p",{className:"green-label"},"Primary Banker")),null!=this.props.item.active_number&&this.props.item.contact_info.phone&&(a=this.props.item.contact_info.phone.find((function(t){return"1"===t.isPrimary}))),h.a.createElement("div",{className:"contact-container mui--z1"},h.a.createElement("div",null,h.a.createElement(m.a,null,h.a.createElement(C.a,{isOpen:this.state.ratingModalIsOpen,ratingList:this.props.ratingList,contactId:this.props.item.contact_id,submitRatingModal:this.submitRatingModal.bind(this),client_rating:this.props.item.client_rating,onRequestClose:this.closeRatingModal.bind(this)}),h.a.createElement(b.a,{md:"6",sm:"6",xs:"12"},h.a.createElement("div",{className:"flex-center"},h.a.createElement("h4",{onClick:this.onClickHandler.bind(null,this.props.item.contact_id),className:"contacts-name"},this.props.item.contact_first_name?this.props.item.contact_first_name:""," ",this.props.item.contact_last_name?this.props.item.contact_last_name:""),this.props.item.client_rating?h.a.createElement("div",{className:"rating-contacts-properties",onClick:this.openRatingModal.bind(this)},this.props.item.client_rating):"",1===this.props.item.property_count&&1===this.props.item.is_associated?h.a.createElement("div",{className:"rating-contacts-properties",onClick:this.navigateToProperties},this.props.item.property_count,h.a.createElement("span",null,"property")):"",this.props.item.property_count>1&&1===this.props.item.is_associated?h.a.createElement("div",{className:"rating-contacts-properties",onClick:this.navigateToProperties},this.props.item.property_count,h.a.createElement("span",null,"properties")):"",h.a.createElement("div",{className:"main-contacts"},e)),h.a.createElement(f.a,{isOpen:this.state.modalIsAddOpen,onRequestClose:this.closeAddModal,onAfterOpen:this.afterOpenModal,require:!0,text:{title:"Add note",button:"Save"},onSubmit:this.handleSubmit}),h.a.createElement("p",{className:"contacts-company"},this.props.item.company_name?this.props.item.company_name:"Company Name")),h.a.createElement(b.a,{md:"5",sm:"5",className:"text-right contacts-calendar-container"},1===this.props.item.is_associated?h.a.createElement("i",{className:"contacts-giveback material-icons",onClick:this.props.givebackContact.bind(null,this.props.item.contact_id)},"delete"):"",null!=this.props.item.owner_starred?h.a.createElement("div",{onClick:function(){t.props.updateStar(t.props.item.contact_id,t.props.item.owner_starred)},className:"star-wrapper inline-block",style:{height:"24px"}},h.a.createElement("p",null,h.a.createElement("span",{className:"quote-star"},h.a.createElement("i",{className:1===this.props.item.owner_starred?"material-icons star-icon-orange":"material-icons star-icon-gray"},"star")))):"",1===this.props.item.is_associated?this.props.item.activity_next_datetime&&k()(this.props.item.activity_next_datetime).isValid()||this.state.showDatePicker?h.a.createElement(E.a,{allowClear:!1,dateValue:this.props.item.activity_next_datetime,update:this.onChange}):h.a.createElement("div",{className:"inline-block padding-left",style:{display:"inline-flex",alignItems:"center"},onClick:function(){return t.showDatePicker()}},"no call date",h.a.createElement("i",{className:"material-icons xl-text ml-8"},"calendar_today")):""),h.a.createElement(b.a,{md:"1",sm:"1",onClick:this.onClickHandler.bind(null,this.props.item.contact_id)},h.a.createElement("i",{className:"material-icons contacts-toggle-arrow"},"keyboard_arrow_right"))),h.a.createElement(m.a,null,a&&"Mobile"===a.label?h.a.createElement(b.a,{md:"3",className:"contact-detail"},h.a.createElement("div",null,h.a.createElement("img",{src:"/images/icons/cellphone-gray.png",alt:"cellphone-gray"}),h.a.createElement("p",null,h.a.createElement("a",{href:"tel:".concat(a.value)},a.value)))):"",a&&"Home"===a.label?h.a.createElement(b.a,{md:"3",className:"contact-detail"},h.a.createElement("div",null,h.a.createElement("img",{src:"/images/icons/phone-gray.png",alt:"phone-gray"}),h.a.createElement("p",null,h.a.createElement("a",{href:"tel:".concat(a.value)},a.value)))):"",a&&"Office"===a.label?h.a.createElement(b.a,{md:"3",className:"contact-detail"},h.a.createElement("div",null,h.a.createElement("img",{src:"/images/icons/phone-gray.png",alt:"phone-gray"}),h.a.createElement("p",null,h.a.createElement("a",{href:"tel:".concat(a.value)},a.value)))):"",a&&"Company"===a.label?h.a.createElement(b.a,{md:"3",className:"contact-detail"},h.a.createElement("div",null,h.a.createElement("img",{src:"/images/icons/phone-gray.png",alt:"phone-gray"}),h.a.createElement("p",null,h.a.createElement("a",{href:"tel:".concat(a.value)},a.value)))):"",this.props.item.active_email?h.a.createElement(b.a,{md:"3",className:"contact-detail"},h.a.createElement("div",null,h.a.createElement("img",{src:"/images/icons/email-gray.png",alt:"email-gray"}),h.a.createElement("p",null,h.a.createElement("a",{href:"mailto:".concat(this.props.item.active_email)},this.props.item.active_email)))):""),1===this.props.item.is_associated?h.a.createElement(m.a,null,h.a.createElement(b.a,{md:"12",className:"contact-detail"},h.a.createElement("img",{src:"/images/icons/note.png",alt:"note"}),h.a.createElement("span",null,this.props.item.notes[0].note_date_time?h.a.createElement("div",{className:"contacts-add-note-container"},this.props.item.activity_notes.length>170?this.props.item.activity_notes.substring(0,170)+" ...":this.props.item.activity_notes,h.a.createElement("img",{onClick:this.openAddModal,className:"contacts-add-note-icon",alt:"add",src:"/images/icons/add.png"})):"Click the icon to add a note"),this.props.item.notes[0].note_date_time?"":h.a.createElement("div",{className:"contacts-add-note-container",onClick:this.openAddModal},h.a.createElement("img",{className:"contacts-add-note-icon",src:"/images/icons/add.png",alt:"add-note-icon"})))):""))}}]),a}(h.a.Component);e.a=O},761:function(t,e,a){"use strict";var n=a(9),s=a(8),i=a(12),o=a(11),c=a(0),l=a.n(c),r=a(72),p=a.n(r),d=a(38),m=a.n(d),u=a(34),h=a.n(u),g=a(257),v=a.n(g),b=a(73),f=a.n(b),C=a(46),E=a.n(C),y=function(t){Object(i.a)(a,t);var e=Object(o.a)(a);function a(t){var s;return Object(n.a)(this,a),(s=e.call(this,t)).state={reasonCode:0,note:"",errorMessage:""},s}return Object(s.a)(a,[{key:"noteChange",value:function(t){this.setState({note:t.target.value})}},{key:"closeModal",value:function(){this.props.closeModal(),this.setState({note:"",reasonCode:0})}},{key:"updateSelect",value:function(t){this.setState({reasonCode:""===t.target.value?0:t.target.value})}},{key:"valid",value:function(){var t=[];if(0===this.state.reasonCode&&t.push("Reason Code"),"other"!==this.state.reasonCode||this.state.note||t.push("Note"),t.length){var e=t.join(", ").replace(/,(?!.*,)/gim," and");return e+=" is required!",this.setState({errorMessage:e}),!1}return this.setState({errorMessage:""}),!0}},{key:"submit",value:function(t){t.preventDefault(),this.valid()&&(this.setState({note:"",reasonCode:0}),this.setState({note:"",reasonCode:0}),this.valid()&&("other"===this.state.reasonCode?this.props.onSubmit(this.state.note,0):this.props.onSubmit(this.state.note,this.state.reasonCode)))}},{key:"render",value:function(){return l.a.createElement(p.a,{className:"note-modal",isOpen:this.props.isOpen,onRequestClose:this.props.onRequestClose,style:{content:{margin:"auto"}},ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},l.a.createElement(m.a,{className:"modal-form"},l.a.createElement("p",{className:"modal-title"},"Giveback Contact"),l.a.createElement(f.a,{value:this.state.reasonCode,onChange:this.updateSelect.bind(this)},l.a.createElement(E.a,{label:"Please Select...",value:0}),this.props.reasonCodes.map((function(t,e){return l.a.createElement(E.a,{key:e,value:t.id,label:t.reason})})),l.a.createElement(E.a,{value:"other",label:"Other"})),l.a.createElement(v.a,{rows:2,value:this.state.note,placeholder:"Note (Optional)",onChange:this.noteChange.bind(this),floatingLabel:!0}),l.a.createElement("span",{className:"error-block"},this.state.errorMessage),l.a.createElement("div",{className:"add-note-buttons"},l.a.createElement(h.a,{variant:"flat",onClick:this.closeModal.bind(this)},"Cancel"),l.a.createElement(h.a,{variant:"flat",onClick:this.submit.bind(this),type:"submit",value:"submit"},"Giveback"))))}}]),a}(l.a.Component);e.a=y},944:function(t,e,a){"use strict";a.r(e);var n=a(10),s=a.n(n),i=a(19),o=a(9),c=a(8),l=a(17),r=a(12),p=a(11),d=a(0),m=a.n(d),u=a(26),h=a.n(u),g=a(760),v=a(6),b=a(127),f=a(23),C=a(104),E=a(761),y=function(t){Object(r.a)(a,t);var e=Object(p.a)(a);function a(t){var n;return Object(o.a)(this,a),(n=e.call(this,t)).state={loginModalOpen:!1,contact_id:""},n.changeDate=n.changeDate.bind(Object(l.a)(n)),n.updateNote=n.updateNote.bind(Object(l.a)(n)),n.refresh=n.refresh.bind(Object(l.a)(n)),n.updateStar=n.updateStar.bind(Object(l.a)(n)),n.setPageAndScrollPos=n.setPageAndScrollPos.bind(Object(l.a)(n)),n.givebackContact=n.givebackContact.bind(Object(l.a)(n)),n.closeModal=n.closeModal.bind(Object(l.a)(n)),n.handleModalSubmit=n.handleModalSubmit.bind(Object(l.a)(n)),n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,this.props.contacts.previousScrollPos),this.props.contactActions.getContactRatingList(),this.props.contactActions.getGivebackReasonCodes(),this.props.contactActions.closingClientsContactLoad()}},{key:"changeDate",value:function(t,e){this.props.contactActions.updateDate(t,e)}},{key:"updateNote",value:function(t,e){this.props.contactActions.updateClosingClientNote(t,e)}},{key:"refresh",value:function(){this.componentDidMount()}},{key:"updateStar",value:function(t,e){this.props.contactActions.updateStarClosingClient(t,e)}},{key:"givebackContact",value:function(t){this.setState({contact_id:t,loginModalOpen:!0})}},{key:"closeModal",value:function(){this.setState({loginModalOpen:!1})}},{key:"handleModalSubmit",value:function(t,e){this.setState({loginModalOpen:!1}),this.props.contactActions.givebackContact(this.state.contact_id,t,e,"closingClientContacts")}},{key:"setPageAndScrollPos",value:function(t){this.props.contactActions.setPageAndScrollPos(t)}},{key:"changeClientRating",value:function(){var t=Object(i.a)(s.a.mark((function t(e,a){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.props.contactActions.changeClientRating(e,a,"closingClientContacts");case 2:case"end":return t.stop()}}),t,this)})));return function(e,a){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this,e=0,a=null,n=null,s=this.props.contacts.closingClientContacts.contacts&&this.props.contacts.closingClientContacts.contacts.map((function(a){return m.a.createElement(g.a,{key:e++,item:a,setPageAndScrollPos:t.setPageAndScrollPos,page:"closing-clients-contacts",givebackContact:t.givebackContact,changeDate:t.changeDate,updateNote:t.updateNote,updateStar:t.updateStar,ratingList:t.props.contacts.ratingList,changeClientRating:t.changeClientRating.bind(t),updateRatingSuccess:t.props.contacts.updateRatingSuccess})}));return!this.props.contacts.loading&&this.props.contacts.closingClientContacts.today_call_total&&(a=m.a.createElement("p",{className:"quote-section total-contacts"}," ","Total Contacts:"," ",this.props.contacts.closingClientContacts.today_call_total," ")),this.props.contacts.noContacts&&(n=m.a.createElement("div",{className:"calls-today"},m.a.createElement("div",{className:"grey-circle"},m.a.createElement("i",{className:"material-icons"},"phone")),m.a.createElement("h2",{className:"no-results"},"You have no cl contacts"))),m.a.createElement(h.a,null,m.a.createElement(h.a,null,this.props.contacts.loading&&m.a.createElement(C.b,null),m.a.createElement(E.a,{isOpen:this.state.loginModalOpen,closeModal:this.closeModal,onSubmit:this.handleModalSubmit,reasonCodes:this.props.contacts.reasonCodes}),n,a),m.a.createElement(h.a,null,s))}}]),a}(m.a.Component);e.default=Object(v.b)((function(t){return{contacts:t.contacts}}),(function(t){return{contactActions:Object(f.b)(b,t)}}))(y)}}]);
//# sourceMappingURL=40.7c3c9070.chunk.js.map