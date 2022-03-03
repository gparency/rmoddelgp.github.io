(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[56],{958:function(e,a,t){"use strict";t.r(a);var n={};t.r(n),t.d(n,"getAccountingReport",(function(){return g})),t.d(n,"closeToast",(function(){return b}));var l=t(9),s=t(8),i=t(12),r=t(11),c=t(0),m=t.n(c),o=t(6),d=t(10),u=t.n(d),p=t(19),E=t(1),v=t(7),_=t(2),N=t(21);function g(){return function(){var e=Object(p.a)(u.a.mark((function e(a){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a({type:E.LOADING_ACCOUNTING_REPORT}),Object(_.i)({url:"".concat(v.a.BASE_URL,"accounting-report-new"),applyAuthHeader:!0,success:function(e){switch(e.status){case"E403":a(Object(N.tokenExpired)());break;case 200:a({type:E.GET_ACCOUNTING_REPORT_SUCCESS,data:e.data});break;default:a({type:E.GET_ACCOUNTING_REPORT_FAILED,data:{},message:e.message})}}});case 2:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()}function b(){return{type:E.CLOSE_ACCOUNTING_TOAST}}var h=t(50),f=t(23),y=t(72),C=t.n(y),x=t(28),T=t(17),I=t(5),D=t(399),O=t(718),j=t(956),P=t(926),w=t(715),U=t(670),A=t(727),R=t(981),S=t(927),k=t(928),L=t(18),F=t(251),M=Object(F.a)((function(e){return{mobileLayout:{width:"100%"},expansionPanel:{marginBottom:10},expansionPanelDetails:{padding:"8px 8px 8px"},panelExpanded:{borderBottom:"1px solid #D8D8D8",marginBottom:10},root:{width:"100%"},heading:{color:"rgba(0,0,0,0.87)",fontSize:16,fontWeight:500},mobileLayouts:{display:"flex",flexDirection:"column",justifyContent:"space-between"},listItemContainer:{display:"flex",flexDirection:"column",justifyContent:"space-between"},dealName:{color:"rgba(0,0,0,0.87)",fontSize:16,fontWeight:"bold",marginBottom:6},dealId:{color:"#24d7d1",fontSize:12,fontWeight:500},listHeader:{color:"#999999",fontSize:12,fontWeight:500,marginBottom:6},listValue:{color:"rgba(0,0,0,0.87)",fontSize:14},totalsListItem:{justifyContent:"space-between",color:"rgba(0,0,0,0.87)",fontSize:12},divider:{color:"#D8D8D8",margin:"15px 0px"},tipsPaper:{padding:"8px 24px",marginBottom:12},tipsEarnedListItem:{fontWeight:"bold",fontSize:16}}}));function B(e){var a=e.hasCommission,t=e.hasTips,n=e.tabed,l=e.component;return m.a.createElement(D.a,{className:"material-ui-panel earnings-table-container"},m.a.createElement(j.a,{onChange:l.onChange,value:n,classes:{indicator:"earnings-tabs-indicator"}},a&&m.a.createElement(P.a,{value:"paid",className:"earnings-tab",label:"CL PAID & CONFIRMED"}),a&&m.a.createElement(P.a,{value:"unconfirmed",className:"earnings-tab",label:"UNCONFIRMED CL"}),a&&m.a.createElement(P.a,{value:"unpaid",className:"earnings-tab",label:"UNPAID CL"}),a&&m.a.createElement(P.a,{value:"currentIp",className:"earnings-tab",label:"CURRENT IP"}),t&&m.a.createElement(P.a,{value:"tipEarned",className:"earnings-tab",label:"TIPS EARNED"}),t&&m.a.createElement(P.a,{value:"tipUnconfirmed",className:"earnings-tab",label:"TIPS UNCONFIRMED"}),t&&m.a.createElement(P.a,{value:"tipUnpaid",className:"earnings-tab",label:"TIPS UNPAID"})),m.a.createElement(O.a,{style:{margin:0}}),m.a.createElement("table",{className:"summary-table"},m.a.createElement("tbody",null,"tipEarned"===n||"tipUnpaid"===n||"tipUnconfirmed"===n?m.a.createElement("tr",null,m.a.createElement("th",null,"Deal ID"),m.a.createElement("th",null,"Deal Name"),m.a.createElement("th",null,"Client Name"),m.a.createElement("th",null,"Net Fee"),m.a.createElement("th",null,"Total Payments"),m.a.createElement("th",null,"Tip"),"tipUnpaid"===n&&m.a.createElement("th",null,"Unpaid Tip Amount")):m.a.createElement("tr",null,m.a.createElement("th",null,"Deal ID"),m.a.createElement("th",null,"Deal Name"),m.a.createElement("th",null,"currentIp"===n?"Projected Closing Date":"Closing Date"),m.a.createElement("th",null,"Client Name"),m.a.createElement("th",null,"currentIp"===n?"Expected Fee Less Third Party":"Deal Fee Less Third Party"),"currentIp"!==n&&m.a.createElement("th",null,"EU Received So Far"),"currentIp"!==n&&!!l["show".concat(n,"CreditColumn")]&&m.a.createElement("th",null,"Paid Via Credit"),"currentIp"!==n&&m.a.createElement("th",null,"Balance"),m.a.createElement("th",null,"Portion Amount"),"unpaid"===n&&m.a.createElement("th",null,"Unpaid Amount")),"tipEarned"===n||"tipUnpaid"===n||"tipUnconfirmed"===n?l.getDealsArray()[n].map((function(e){var a=e.deal_id,t=e.deal_name,l=e.contact_name,s=e.net_fee,i=e.total_payments,r=e.tip_amount,c=e.tip_percentage,o=e.tip_balance;return m.a.createElement("tr",{key:a},m.a.createElement("td",null,a),m.a.createElement("td",null,t),m.a.createElement("td",null,l),m.a.createElement("td",null,W(s)),"currentIp"!==n&&m.a.createElement("td",null,i?W(i):"-"),m.a.createElement("td",null,"".concat(W(r),"(").concat(c,"%)")),"tipUnpaid"===n&&m.a.createElement("td",null,W(o)))})):l.getDealsArray()[n].map((function(e){var a=e.deal_id,t=e.deal_name,s=e.closing_date,i=e.expected_closing_date,r=e.primary_client_name,c=e.contact_name,o=e.deal_fee_less_third_party_raw,d=e.deal_fee_less_third_party,u=e.qb_payments_raw,p=e.credit_payments_raw,E=e.balance_raw,v=e.portion_amount_raw,_=e.portion_amount_from_net_raw,N=e.portion_amount,g=e.broker_commission,b=e.unpaid_portion_raw,h="paid"===n?v:"unconfirmed"===n||"unpaid"===n?_:N;return m.a.createElement("tr",{key:a},m.a.createElement("td",null,a),m.a.createElement("td",null,t),m.a.createElement("td",null,s||i),m.a.createElement("td",null,r||c),m.a.createElement("td",null,W(o||d)),"currentIp"!==n&&m.a.createElement("td",null,u?W(u):"-"),"currentIp"!==n&&!!l["show".concat(n,"CreditColumn")]&&m.a.createElement("td",null,p?W(p):"-"),"currentIp"!==n&&m.a.createElement("td",null,E?W(E):"-"),m.a.createElement("td",null,"".concat(W(h),"(").concat(g,"%)")),"unpaid"===n&&m.a.createElement("td",null,W(b)))})),"tipEarned"!==n&&"tipUnpaid"!==n&&"tipUnconfirmed"!==n&&m.a.createElement("tr",null,m.a.createElement("th",null,"Total"),m.a.createElement("th",null),m.a.createElement("th",null),m.a.createElement("th",null),l.getDealsTotals()[n].map((function(e,a){var t=e.value;return null===t?null:m.a.createElement("th",{key:a},t)}))))))}function V(e){var a=e.hasCommission,t=e.hasTips,n=e.currentYear,l=e.tips_earned,s=e.tips_unconfirmed,i=e.tips_unpaid,r=e.component,c=M();return m.a.createElement("div",null,a&&m.a.createElement(G,{title:"CL PAID & CONFIRMED"},m.a.createElement(H,{component:r,expandedDeal:"paid"})),a&&m.a.createElement(G,{title:"UNCONFIRMED CL"},m.a.createElement(H,{component:r,expandedDeal:"unconfirmed"})),a&&m.a.createElement(G,{title:"UNPAID CL"},m.a.createElement(H,{component:r,expandedDeal:"unpaid"})),a&&m.a.createElement(G,{title:"CURRENT IP"},m.a.createElement(H,{component:r,expandedDeal:"currentIp"})),t&&m.a.createElement(D.a,{classes:{root:c.tipsPaper}},m.a.createElement(w.a,null,m.a.createElement(U.a,{disableGutters:!0,classes:{root:Object(I.a)(c.totalsListItem,c.tipsEarnedListItem)}},m.a.createElement("span",null,"Tips Earned ".concat(n)),m.a.createElement("span",null,W(l&&l.tips_earned))),m.a.createElement(U.a,{disableGutters:!0,classes:{root:c.totalsListItem}},m.a.createElement("span",null,"My Unconfirmed Tips"),m.a.createElement("span",null,m.a.createElement("strong",null,W(s&&s.tips_earned)))),m.a.createElement(U.a,{disableGutters:!0,classes:{root:c.totalsListItem}},m.a.createElement("span",null,"My Unpaid Tips"),m.a.createElement("span",null,m.a.createElement("strong",null,W(i&&i.tips_unpaid)))))),t&&m.a.createElement(G,{value:"",title:"TIPS EARNED"},m.a.createElement(H,{component:r,expandedDeal:"tipEarned"})),t&&m.a.createElement(G,{title:"TIPS UNCONFIRMED"},m.a.createElement(H,{component:r,expandedDeal:"tipUnconfirmed"})),t&&m.a.createElement(G,{title:"TIPS UNPAID"},m.a.createElement(H,{component:r,expandedDeal:"tipUnpaid"})))}function H(e){var a=e.component,t=e.expandedDeal,n=M();return m.a.createElement("div",{className:n.mobileLayout},"tipEarned"===t||"tipUnpaid"===t||"tipUnconfirmed"===t?a.getDealsArray()[t].map((function(e){var a=e.deal_id,l=e.deal_name,s=e.contact_name,i=e.net_fee,r=e.total_payments,o=e.tip_amount,d=e.tip_percentage,u=e.tip_balance;return m.a.createElement(c.Fragment,{key:a},m.a.createElement(A.a,{container:!0,spacing:2},m.a.createElement(A.a,{item:!0,xs:12},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.dealName},l),m.a.createElement("div",null,"Deal ID:"," ",m.a.createElement("span",{className:n.dealId},a)))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Deal Name"),m.a.createElement("div",{className:n.listValue},l))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Client Name"),m.a.createElement("div",{className:n.listValue},s))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Net Fee"),m.a.createElement("div",{className:n.listValue},W(i)))),"currentIp"!==t&&m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Total Payments"),m.a.createElement("div",{className:n.listValue},r?W(r):"-"))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Tip"),m.a.createElement("div",{className:n.listValue},"".concat(W(o),"(").concat(d,"%)")))),"tipUnpaid"===t&&m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Unpaid Tip Amount"),m.a.createElement("div",{className:n.listValue},W(u))))),m.a.createElement(O.a,{className:n.divider}))})):a.getDealsArray()[t].map((function(e){var l=e.deal_id,s=e.deal_name,i=e.closing_date,r=e.expected_closing_date,o=e.primary_client_name,d=e.contact_name,u=e.deal_fee_less_third_party_raw,p=e.deal_fee_less_third_party,E=e.qb_payments_raw,v=e.credit_payments_raw,_=e.balance_raw,N=e.portion_amount_raw,g=e.portion_amount_from_net_raw,b=e.portion_amount,h=e.broker_commission,f=e.unpaid_portion_raw,y="paid"===t?N:"unconfirmed"===t||"unpaid"===t?g:b;return m.a.createElement(c.Fragment,{key:l},m.a.createElement(A.a,{container:!0,spacing:2},m.a.createElement(A.a,{item:!0,xs:12},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.dealName},s),m.a.createElement("div",null,"Deal ID:"," ",m.a.createElement("span",{className:n.dealId},l)))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"currentIp"===t?"Projected Closing Date":"Closing Date"),m.a.createElement("div",{className:n.listValue},i||r))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Client Name"),m.a.createElement("div",{className:n.listValue},o||d))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"currentIp"===t?"Expected Fee Less Third Party":"Deal Fee Less 3rd Party"),m.a.createElement("div",{className:n.listValue},W(u||p)))),"currentIp"!==t&&m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"EU Received So Far"),m.a.createElement("div",{className:n.listValue},E?W(E):"-"))),"currentIp"!==t&&!!a["show".concat(t,"CreditColumn")]&&!!v&&m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Paid Via Credit"),m.a.createElement("div",{className:n.listValue},W(v)))),"currentIp"!==t&&m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Balance"),m.a.createElement("div",{className:n.listValue},_?W(_):"-"))),m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Portion Amount"),m.a.createElement("div",{className:n.listValue},"".concat(W(y),"(").concat(h,"%)")))),"unpaid"===t&&m.a.createElement(A.a,{item:!0,xs:6},m.a.createElement("div",{className:n.listItemContainer},m.a.createElement("div",{className:n.listHeader},"Unpaid Amount"),m.a.createElement("div",{className:n.listValue},W(f))))),m.a.createElement(O.a,{className:n.divider}))})),"tipEarned"!==t&&"tipUnpaid"!==t&&"tipUnconfirmed"!==t&&m.a.createElement(w.a,null,a.getDealsTotals()[t].map((function(e,a){var t=e.name,l=e.value;return null===l?null:m.a.createElement(U.a,{disableGutters:!0,classes:{root:n.totalsListItem},key:a},m.a.createElement("span",null,t),m.a.createElement("span",null,m.a.createElement("strong",null,l)))}))))}function G(e){var a=e.title,t=e.children,n=Object(c.useState)(!1),l=Object(x.a)(n,2),s=l[0],i=l[1],r=M(),o=Object(c.useCallback)((function(){i((function(e){return!e}))}),[]);return m.a.createElement(R.a,{expanded:s,onChange:o,className:r.expansionPanel},m.a.createElement(S.a,{expandIcon:m.a.createElement(L.A,null),"aria-controls":"panel1a-content",id:"panel1a-header",classes:{root:Object(I.a)({[r.panelExpanded]:s})}},m.a.createElement("div",{className:r.heading},a)),m.a.createElement(k.a,{classes:{root:r.expansionPanelDetails}},t))}function W(e){return Object(_.m)(e,0,void 0,!0)}var z=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={tabed:"paid"},n.onChange=n.onChange.bind(Object(T.a)(n)),n.getDealsArray=n.getDealsArray.bind(Object(T.a)(n)),n.getDealsTotals=n.getDealsTotals.bind(Object(T.a)(n)),n}return Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props.data;this.showpaidCreditColumn=e.commission_details.some((function(e){return!!e.credit_payments_raw})),this.showunconfirmedCreditColumn=e.commission_unconfirmed_details.some((function(e){return!!e.credit_payments_raw})),this.showunpaidCreditColumn=e.commission_unpaid_details.some((function(e){return!!e.credit_payments_raw})),this.forceUpdate()}},{key:"onChange",value:function(e,a,t,n){this.setState({tabed:a})}},{key:"getDealsArray",value:function(){var e=this.props.data,a=(e=void 0===e?{}:e).commission_details,t=void 0===a?[]:a,n=e.commission_unconfirmed_details,l=void 0===n?[]:n,s=e.commission_unpaid_details,i=void 0===s?[]:s,r=e.commission_current_ip,c=void 0===r?[]:r,m=e.tips_earned,o=e.tips_unpaid,d=e.tips_unconfirmed;return{paid:t,unconfirmed:l,unpaid:i,currentIp:c,tipEarned:m?m.tip_details:[],tipUnpaid:o?o.tip_details:[],tipUnconfirmed:d?d.tip_details:[]}}},{key:"getDealsTotals",value:function(){var e=this.props.data,a=(e=void 0===e?{}:e).commission_current_ip_totals,t=(a=void 0===a?{}:a).deal_fee_total,n=a.portion_total,l=e.commission_details_totals,s=(l=void 0===l?{}:l).balance_total,i=l.credit_payments_total,r=l.deal_fee_total,c=l.portion_total,m=l.qb_payments_total,o=e.commission_unconfirmed_details_totals,d=(o=void 0===o?{}:o).balance_total,u=o.credit_payments_total,p=o.deal_fee_total,E=o.expected_portion_amount,v=o.qb_payments_total,_=e.commission_unpaid_details_totals,N=(_=void 0===_?{}:_).balance_total,g=_.credit_payments_total,b=_.deal_fee_total,h=_.expected_portion_amount,f=_.qb_payments_total,y=_.unpaid_portion_total;return{paid:[{name:"Total Deal Fee Less Third Party",value:W(r)},{name:"Total EU Received So Far",value:W(m)},{name:"Total Paid Via Credit",value:this.showpaidCreditColumn?W(i):null},{name:"Total Balance",value:W(s)},{name:"Total Portion Amount",value:W(c)}],unconfirmed:[{name:"Total Deal Fee Less Third Party",value:W(p)},{name:"Total EU Received So Far",value:W(v)},{name:"Total Paid Via Credit",value:this.showunconfirmedCreditColumn?W(u):null},{name:"Total Balance",value:W(d)},{name:"Total Portion Amount",value:W(E)}],unpaid:[{name:"Total Deal Fee Less Third Party",value:W(b)},{name:"Total EU Received So Far",value:W(f)},{name:"Total Paid Via Credit",value:this.showunpaidCreditColumn?W(g):null},{name:"Total Balance",value:W(N)},{name:"Total Portion Amount",value:W(h)},{name:"Total Unpaid Amount",value:W(y)}],currentIp:[{name:"Total Expected Fees Less 3rd Party",value:W(t)},{name:"Total Portion Amount",value:W(n)}]}}},{key:"render",value:function(){var e=this.props,a=e.isMobile,t=e.data,n=(t=void 0===t?{}:t).commission,l=(n=void 0===n?{}:n).total_compensation,s=n.blended,i=n.earned,r=n.entitled_expense_allowance,c=t.commission_current_ip_totals,o=(c=void 0===c?{}:c).portion_total,d=t.commission_details_totals,u=(d=void 0===d?{}:d).portion_total,p=t.commission_unconfirmed_details_totals,E=(p=void 0===p?{}:p).expected_portion_amount,v=t.commission_unpaid_details_totals,_=(v=void 0===v?{}:v).unpaid_portion_total,N=t.tips_earned,g=t.tips_unconfirmed,b=t.tips_unpaid,h=this.state.tabed,f=(new Date).getFullYear(),y=!!N||!!b||!!g,C=!!u||!!E||!!_||!!o;return m.a.createElement("div",{className:"earnings-page-container"},m.a.createElement("div",{className:"earnings-flex"},m.a.createElement("div",{className:"earnings-col earnings-first-col"},C&&m.a.createElement(D.a,{className:"material-ui-panel earnings-panel"},m.a.createElement("div",{className:"flex-space-justify",style:{height:35,lineHeight:1}},m.a.createElement("span",{className:"earnings-detail"},"My Portion Closed ".concat(f," Paid and Confirmed")),m.a.createElement("span",{className:"accounting-card-amount-earnings-detail"},W(u))),m.a.createElement(O.a,{className:"earnings-divider"}),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"My Unconfirmed CL Fees"),m.a.createElement("span",{className:"earnings-detail bold-text"},W(E))),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"My Unpaid CL Fees"),m.a.createElement("span",{className:"earnings-detail bold-text"},W(_))),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"My Current IP Portion"),m.a.createElement("span",{className:"earnings-detail bold-text"},W(o)))),!a&&y&&m.a.createElement(D.a,{className:"material-ui-panel earnings-panel"},m.a.createElement("div",{className:"flex-space-justify",style:{height:25,lineHeight:1}},m.a.createElement("span",{className:"earnings-detail"},"Tips Earned ".concat(f)),m.a.createElement("span",{className:"accounting-card-amount-earnings-detail"},W(N&&N.tips_earned))),m.a.createElement(O.a,{className:"earnings-divider"}),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"My Unconfirmed Tips"),m.a.createElement("span",{className:"earnings-detail bold-text"},W(g&&g.tips_earned))),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"My Unpaid Tips"),m.a.createElement("span",{className:"earnings-detail bold-text"},W(b&&b.tips_unpaid))))),C&&m.a.createElement(D.a,{className:"material-ui-panel earnings-second-col"},m.a.createElement("div",{className:"earnings-col",style:{justifyContent:"space-between",height:"100%"}},m.a.createElement("div",null,m.a.createElement("div",{className:"flex-space-justify",style:{height:35}},m.a.createElement("span",{className:"earnings-detail",style:{alignItems:"center"}},"Total Earned YTD"),m.a.createElement("span",{className:"accounting-card-amount-earnings-detail"},W(l))),m.a.createElement(O.a,{className:"earnings-divider"}),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"Blended Commission Rate"),m.a.createElement("span",{className:"earnings-detail bold-text"},"".concat(s,"%"))),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"My Commission Earned ".concat(f)),m.a.createElement("span",{className:"earnings-detail bold-text"},W(i))),m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"earnings-detail"},"Additional Compensation Earned from EU Expense Package (not included in total earned above)"),m.a.createElement("span",{className:"earnings-detail bold-text"},W(r))))))),a?m.a.createElement(V,{hasCommission:C,hasTips:y,tips_earned:N,tips_unpaid:b,tips_unconfirmed:g,currentYear:f,component:this}):m.a.createElement(B,{hasCommission:C,hasTips:y,tabed:h,component:this}))}}]),t}(c.PureComponent),Y=t(47),q=t.n(Y),J=t(210),K=t.n(J);function Q(e){return Object(_.m)(e,0,void 0,!0)}var X=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(e){var n;return Object(l.a)(this,t),(n=a.call(this,e)).state={showReimbursable:!1,showNonReimbursable:!1},n.toggleSection=n.toggleSection.bind(Object(T.a)(n)),n}return Object(s.a)(t,[{key:"toggleSection",value:function(e){this.setState({[e]:!this.state[e]})}},{key:"render",value:function(){var e=this,a=this.props.data,t=(a=void 0===a?{}:a).non_reimbursable_tips_details,n=void 0===t?[]:t,l=a.non_reimbursable_tips_paid,s=a.paid_support,i=a.paid_support_details,r=void 0===i?[]:i,c=a.reimbursement_compensation,o=a.payment_details,d=void 0===o?[]:o,u=a.payments_my_draw,p=a.reimbursable_tips_details,E=void 0===p?[]:p,v=a.reimbursable_tips_paid,_=a.total_tips_paid,N=a.updated_at,g=this.state,b=g.showNonReimbursable,h=g.showReimbursable;return m.a.createElement("div",{className:"earnings-page-container"},m.a.createElement(q.a,{className:"earnings-panel"},m.a.createElement("div",{className:"flex-space-justify",style:{height:45}},m.a.createElement("span",{className:"payments-title"},"Reimbursable Support Paid",N&&m.a.createElement("span",{className:"payments-updated"},"Last updated ".concat(N))),m.a.createElement("span",{className:"payments-title"},Q(s))),m.a.createElement("table",{className:"summary-table"},m.a.createElement("tbody",null,r.map((function(e,a){var t=e.item,n=e.value;return m.a.createElement("tr",{key:a},m.a.createElement("td",null,t),m.a.createElement("td",{className:"align-right"},Q(n)))})))),!!c&&m.a.createElement("div",{class:"payments-entitled"},"**On January 31 (if employed), you will be credited"," ",Q(c),".")),m.a.createElement(q.a,{className:"earnings-panel"},m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"payments-title"},"Tips paid"),m.a.createElement("span",{className:"payments-title"},Q(_))),m.a.createElement(K.a,{className:"earnings-divider"}),m.a.createElement("table",{className:"tips-paid-table"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{style:{maxWidth:25}},m.a.createElement("span",{className:"payments-icon",onClick:function(){return e.toggleSection("showReimbursable")}},m.a.createElement("img",{alt:"add",src:"/images/icons/".concat(h?"minus.png":"add.png")}))),m.a.createElement("td",{style:{minWidth:210}},m.a.createElement("span",{className:"bold-text"},"Reimbursable Tips Paid")),m.a.createElement("td",null,m.a.createElement("span",{className:"bold-text"},Q(v)))),h&&E.map((function(e,a){var t=e.item,n=e.value;return m.a.createElement("tr",{key:a},m.a.createElement("td",null),m.a.createElement("td",{className:"earnings-detail"},t),m.a.createElement("td",{className:"align-right earnings-detail"},Q(n)))})))),m.a.createElement(K.a,{className:"earnings-divider"}),m.a.createElement("table",{className:"tips-paid-table"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("td",{style:{maxWidth:25}},m.a.createElement("span",{className:"payments-icon",onClick:function(){return e.toggleSection("showNonReimbursable")}},m.a.createElement("img",{alt:"add",src:"/images/icons/".concat(b?"minus.png":"add.png")}))),m.a.createElement("td",null,m.a.createElement("span",{className:"bold-text"},"Non-Reimbursable Tips Paid")),m.a.createElement("td",null,m.a.createElement("span",{className:"bold-text"},Q(l)))),b&&n.map((function(e,a){var t=e.item,n=e.value;return m.a.createElement("tr",{key:a},m.a.createElement("td",null),m.a.createElement("td",{className:"earnings-detail"},t),m.a.createElement("td",{className:"align-right earnings-detail"},Q(n)))})))),m.a.createElement(K.a,{className:"earnings-divider"})),m.a.createElement(q.a,{className:"earnings-panel"},m.a.createElement("div",{className:"flex-space-justify"},m.a.createElement("span",{className:"payments-title"},"Payments (My Draw & Others)"),m.a.createElement("span",{className:"payments-title"},Q(u))),m.a.createElement("table",{className:"summary-table"},m.a.createElement("tbody",null,d.map((function(e){var a=e.item,t=e.value;return m.a.createElement("tr",null,m.a.createElement("td",null,a),m.a.createElement("td",{className:"align-right"},Q(t)))}))))))}}]),t}(c.PureComponent),Z=function(e){var a=e.data,t=(a=void 0===a?{}:a).actual_received,n=a.balance,l=a.loan,s=a.overrides_earned,i=a.starting,r=a.tips,c=a.total_compensation,o=a.total_earn;return m.a.createElement("div",null,m.a.createElement("div",{className:"accounting-card-container"},m.a.createElement(q.a,{className:"accounting-card  accounting-card-hide-mobile"},m.a.createElement("p",{className:"accounting-card-amount"},Object(_.m)(i,0,void 0,!0)),m.a.createElement("p",{className:"accounting-card-amount-details"},"".concat((new Date).getFullYear()," Starting Balance"))),m.a.createElement(q.a,{className:"accounting-card"},m.a.createElement("p",{className:"accounting-card-amount"},Object(_.m)(n,0,void 0,!0)),m.a.createElement("p",{className:"accounting-card-amount-details"},"Total Available Balance")),!!l&&m.a.createElement(q.a,{className:"accounting-card accounting-card-hide-mobile"},m.a.createElement("p",{className:"accounting-card-amount"},Object(_.m)(l,0,void 0,!0)),m.a.createElement("p",{className:"accounting-card-amount-details"},"Loan Balance (Not Included in Total)"))),m.a.createElement("div",{className:"accounting-list accounting-container"},m.a.createElement("div",{className:"summary-title"},"Summary"),m.a.createElement("div",{style:{padding:"0 15px 15px 15px"}},m.a.createElement("table",{className:"summary-table"},m.a.createElement("tbody",null,m.a.createElement("tr",null,m.a.createElement("th",null,"".concat((new Date).getFullYear()," Starting Balance")),m.a.createElement("th",{className:"align-right"},Object(_.m)(i,0,void 0,!0))),m.a.createElement("tr",null,m.a.createElement("td",null,"Total Commissions Earned"),m.a.createElement("td",{className:"align-right"},Object(_.m)(c,0,void 0,!0))),m.a.createElement("tr",null,m.a.createElement("td",null,"Total Tips Earned"),m.a.createElement("td",{className:"align-right"},Object(_.m)(r,0,void 0,!0))),!!s&&m.a.createElement("tr",null,m.a.createElement("td",null,"Overrides Earned"),m.a.createElement("td",{className:"align-right"},Object(_.m)(s,0,void 0,!0))),m.a.createElement("tr",null,m.a.createElement("td",null,"Total Earned YTD"),m.a.createElement("td",{className:"align-right"},Object(_.m)(o,0,void 0,!0))),m.a.createElement("tr",null,m.a.createElement("td",null,"Actual Money Drawn Out to Me or On My Behalf"),m.a.createElement("td",{className:"align-right"},Object(_.m)(t,0,void 0,!0))),m.a.createElement("tr",null,m.a.createElement("th",null,"Total Available Balance"),m.a.createElement("th",{className:"align-right"},Object(_.m)(n,0,void 0,!0))),!!l&&m.a.createElement("tr",null,m.a.createElement("th",null,"Loan Balance (Not Included in Total)"),m.a.createElement("th",{className:"align-right"},Object(_.m)(l,0,void 0,!0))))))))},$=t(88),ee=t(34),ae=t.n(ee);function te(e){var a=Object(L.cb)(),t="";e.toast.show&&(t=m.a.createElement($.a,{closeToast:e.closeToast,delay:6e3},m.a.createElement("div",{className:"success-message"},m.a.createElement("p",null,e.toast.message),m.a.createElement(ae.a,{variant:"flat",onClick:e.closeToast},e.toast.success?"Done":"Dismiss"))));var n=null;if(e.report)switch(e.type){case"earnings":n=m.a.createElement(z,{data:e.report[e.type],isMobile:a});break;case"payments":n=m.a.createElement(X,{data:e.report[e.type],isMobile:a});break;case"summary":n=m.a.createElement(Z,{data:e.report[e.type],isMobile:a})}return m.a.createElement("div",{className:"accounting-outer-container"},t,e.report?m.a.createElement("div",null,n):m.a.createElement("div",null,m.a.createElement("div",{className:"grey-circle"},m.a.createElement("i",{className:"material-icons"},"attach_money")),m.a.createElement("h2",{className:"no-results"},"Data will become available once all quotes are up to date")))}var ne=function(e){Object(i.a)(t,e);var a=Object(r.a)(t);function t(){return Object(l.a)(this,t),a.apply(this,arguments)}return Object(s.a)(t,[{key:"componentDidMount",value:function(){this.props.navActions.updateNavTitle("Accounting"),this.props.actions.getAccountingReport()}},{key:"render",value:function(){return m.a.createElement("div",null,this.props.accounting.loading?m.a.createElement(C.a,{className:"loading-modal",isOpen:!0,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},m.a.createElement("div",{className:"centered-spinner"},m.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))):m.a.createElement(te,{report:this.props.accounting.data,type:this.props.match.params.type,toast:this.props.accounting.toast,closeToast:this.props.actions.closeToast}))}}]),t}(m.a.Component);a.default=Object(o.b)((function(e){return{accounting:e.accounting}}),(function(e){return{actions:Object(f.b)(n,e),navActions:Object(f.b)(h,e)}}))(ne)}}]);
//# sourceMappingURL=56.ed5d57aa.chunk.js.map