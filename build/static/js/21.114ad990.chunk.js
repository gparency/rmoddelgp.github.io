(this["webpackJsonplt-app"]=this["webpackJsonplt-app"]||[]).push([[21],{754:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.forceCheck=t.lazyload=void 0;var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n(0),i=f(r),o=f(n(32)),l=f(n(13)),s=n(755),c=f(n(756)),u=f(n(757)),d=f(n(758));function f(e){return e&&e.__esModule?e:{default:e}}function p(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}function h(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var v=0,g=0,b=0,y=0,E="data-lazyload-listened",w=[],N=[],O=!1;try{var T=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,T)}catch(L){}var k=!!O&&{capture:!1,passive:!0},C=function(e){var t=o.default.findDOMNode(e);if(t instanceof HTMLElement){var n=(0,c.default)(t);(e.props.overflow&&n!==t.ownerDocument&&n!==document&&n!==document.documentElement?function(e,t){var n=o.default.findDOMNode(e),a=void 0,r=void 0,i=void 0,l=void 0;try{var s=t.getBoundingClientRect();a=s.top,r=s.left,i=s.height,l=s.width}catch(L){a=v,r=g,i=y,l=b}var c=window.innerHeight||document.documentElement.clientHeight,u=window.innerWidth||document.documentElement.clientWidth,d=Math.max(a,0),f=Math.max(r,0),p=Math.min(c,a+i)-d,m=Math.min(u,r+l)-f,h=void 0,E=void 0,w=void 0,N=void 0;try{var O=n.getBoundingClientRect();h=O.top,E=O.left,w=O.height,N=O.width}catch(L){h=v,E=g,w=y,N=b}var T=h-d,k=E-f,C=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return T-C[0]<=p&&T+w+C[1]>=0&&k-C[0]<=m&&k+N+C[1]>=0}(e,n):function(e){var t=o.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var n=void 0,a=void 0;try{var r=t.getBoundingClientRect();n=r.top,a=r.height}catch(L){n=v,a=y}var i=window.innerHeight||document.documentElement.clientHeight,l=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return n-l[0]<=i&&n+a+l[1]>=0}(e))?e.visible||(e.props.once&&N.push(e),e.visible=!0,e.forceUpdate()):e.props.once&&e.visible||(e.visible=!1,e.props.unmountIfInvisible&&e.forceUpdate())}},S=function(){for(var e=0;e<w.length;++e){var t=w[e];C(t)}N.forEach((function(e){var t=w.indexOf(e);-1!==t&&w.splice(t,1)})),N=[]},x=void 0,_=null,j=function(e){function t(e){p(this,t);var n=m(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.visible=!1,n}return h(t,e),a(t,[{key:"componentDidMount",value:function(){var e=window,t=this.props.scrollContainer;t&&"string"===typeof t&&(e=e.document.querySelector(t));var n=void 0!==this.props.debounce&&"throttle"===x||"debounce"===x&&void 0===this.props.debounce;if(n&&((0,s.off)(e,"scroll",_,k),(0,s.off)(window,"resize",_,k),_=null),_||(void 0!==this.props.debounce?(_=(0,u.default)(S,"number"===typeof this.props.debounce?this.props.debounce:300),x="debounce"):void 0!==this.props.throttle?(_=(0,d.default)(S,"number"===typeof this.props.throttle?this.props.throttle:300),x="throttle"):_=S),this.props.overflow){var a=(0,c.default)(o.default.findDOMNode(this));if(a&&"function"===typeof a.getAttribute){var r=+a.getAttribute(E)+1;1===r&&a.addEventListener("scroll",_,k),a.setAttribute(E,r)}}else if(0===w.length||n){var i=this.props,l=i.scroll,f=i.resize;l&&(0,s.on)(e,"scroll",_,k),f&&(0,s.on)(window,"resize",_,k)}w.push(this),C(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.overflow){var e=(0,c.default)(o.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute(E)-1;0===t?(e.removeEventListener("scroll",_,k),e.removeAttribute(E)):e.setAttribute(E,t)}}var n=w.indexOf(this);-1!==n&&w.splice(n,1),0===w.length&&"undefined"!==typeof window&&((0,s.off)(window,"resize",_,k),(0,s.off)(window,"scroll",_,k))}},{key:"render",value:function(){return this.visible?this.props.children:this.props.placeholder?this.props.placeholder:i.default.createElement("div",{style:{height:this.props.height},className:"lazyload-placeholder"})}}]),t}(r.Component);j.propTypes={once:l.default.bool,height:l.default.oneOfType([l.default.number,l.default.string]),offset:l.default.oneOfType([l.default.number,l.default.arrayOf(l.default.number)]),overflow:l.default.bool,resize:l.default.bool,scroll:l.default.bool,children:l.default.node,throttle:l.default.oneOfType([l.default.number,l.default.bool]),debounce:l.default.oneOfType([l.default.number,l.default.bool]),placeholder:l.default.node,scrollContainer:l.default.oneOfType([l.default.string,l.default.object]),unmountIfInvisible:l.default.bool},j.defaultProps={once:!1,offset:0,overflow:!1,resize:!1,scroll:!0,unmountIfInvisible:!1};var F=function(e){return e.displayName||e.name||"Component"};t.lazyload=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return function(t){return function(n){function r(){p(this,r);var e=m(this,(r.__proto__||Object.getPrototypeOf(r)).call(this));return e.displayName="LazyLoad"+F(t),e}return h(r,n),a(r,[{key:"render",value:function(){return i.default.createElement(j,e,i.default.createElement(t,this.props))}}]),r}(r.Component)}},t.default=j,t.forceCheck=S},755:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.on=function(e,t,n,a){a=a||!1,e.addEventListener?e.addEventListener(t,n,a):e.attachEvent&&e.attachEvent("on"+t,(function(t){n.call(e,t||window.event)}))},t.off=function(e,t,n,a){a=a||!1,e.removeEventListener?e.removeEventListener(t,n,a):e.detachEvent&&e.detachEvent("on"+t,n)}},756:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!(e instanceof HTMLElement))return document.documentElement;for(var t="absolute"===e.style.position,n=/(scroll|auto)/,a=e;a;){if(!a.parentNode)return e.ownerDocument||document.documentElement;var r=window.getComputedStyle(a),i=r.position,o=r.overflow,l=r["overflow-x"],s=r["overflow-y"];if("static"===i&&t)a=a.parentNode;else{if(n.test(o)&&n.test(l)&&n.test(s))return a;a=a.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},757:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a=void 0,r=void 0,i=void 0,o=void 0,l=void 0,s=function s(){var c=+new Date-o;c<t&&c>=0?a=setTimeout(s,t-c):(a=null,n||(l=e.apply(i,r),a||(i=null,r=null)))};return function(){i=this,r=arguments,o=+new Date;var c=n&&!a;return a||(a=setTimeout(s,t)),c&&(l=e.apply(i,r),i=null,r=null),l}}},758:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){var a,r;return t||(t=250),function(){var i=n||this,o=+new Date,l=arguments;a&&o<a+t?(clearTimeout(r),r=setTimeout((function(){a=o,e.apply(i,l)}),t)):(a=o,e.apply(i,l))}}},965:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"loadNews",(function(){return y})),n.d(a,"setupInitialFilter",(function(){return E})),n.d(a,"resetFilter",(function(){return w})),n.d(a,"setAllFilterToNone",(function(){return N})),n.d(a,"updateFilter",(function(){return O}));var r=n(9),i=n(8),o=n(17),l=n(12),s=n(11),c=n(0),u=n.n(c),d=n(6),f=n(10),p=n.n(f),m=n(19),h=n(1),v=n(2),g=n(39),b=n.n(g);function y(){return function(e){e({type:h.LOADING_NEWS}),Object(v.i)({url:"https://easternunionblog.com/category/featured1/feed/",crossDomain:!0,parseXML:!0,success:function(){var t=Object(m.a)(p.a.mark((function t(n){var a,r,i,o,l,s,c,u,d,f,m,v,g,y,E,w,N,O,T,k,C,S,x,_,j,F;return p.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(a=[],r=n.getElementsByTagName("item"),i=r.length,o=0,l=0;l<i;l++){s=n.getElementsByTagName("item")[l],c=s.getElementsByTagName("title"),u=c[0].textContent.replace(/&amp;/g,"&").replace(/amp;/g,"&");try{u=decodeURIComponent(u)}catch(p){}for(d=s.getElementsByTagName("link"),f=s.getElementsByTagName("pubDate")[0],m=b()(new Date(f.innerHTML)).format("ddd, MMM Do, YYYY, h:mm A"),v=s.getElementsByTagName("category"),g=[],y=1;y<v.length;y++)E=v[y].textContent,g.push(E);w=s.getElementsByTagName("enclosure"),N="/images/default-thumbnail.jpg",w.length&&(N=w[0].attributes.url.value),O=s.getElementsByTagNameNS("http://purl.org/dc/elements/1.1/","creator")[0],(T=O.textContent).length>18&&(T=T.substring(0,18)+".."),k=s.getElementsByTagName("description")[0],C=k.textContent,(S=document.createElement("div")).innerHTML=C,x=S.getElementsByTagName("div"),_=1===x.length?x[0].innerText:x[1].innerText,document.createElement("div").innerHTML=C,j=_.replace(/&amp;/g,"&"),F={id:o++,title:u.substring(0,90)+"..",link:d[0].innerHTML,date:m,description:j.substring(0,100)+"..",source:T,image:N,category:g},a.push(F)}e({type:h.GET_NEWS,news:a});case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()})}}function E(){return function(e){Object(v.i)({url:"https://easternunionblog.com/category/featured1/feed/",crossDomain:!0,parseXML:!0,success:function(t){for(var n=[],a=t.getElementsByTagName("item").length,r=0;r<a;r++){var i=t.getElementsByTagName("item")[r].getElementsByTagName("category"),o=i[1]&&i[1].textContent?i[1].textContent:"";if(i[2]){var l=i[2].textContent;n.push(l)}if(i[3]){var s=i[3].textContent;n.push(s)}n.push(o)}var c=n.filter((function(e,t,n){return n.indexOf(e)===t})),u=[],d=1;u.push({id:0,category:"ALL",isShowing:!1});for(var f=0;f<c.length;f++)if("NY/NJ"===c[f]||"DC/MD"===c[f]){var p={id:d++,category:c[f],isShowing:!0};u.push(p)}else{var m={id:d++,category:c[f],isShowing:!1};u.push(m)}e({type:h.GET_INITIAL_NEWS_FILTER,filter:u})}})}}function w(){return function(e){Object(v.i)({url:"https://easternunionblog.com/category/featured1/feed/",crossDomain:!0,parseXML:!0,success:function(t){for(var n=[],a=t.getElementsByTagName("item").length,r=0;r<a;r++){var i=t.getElementsByTagName("item")[r].getElementsByTagName("category"),o=i[1].textContent;if(i[2]){var l=i[2].textContent;n.push(l)}if(i[3]){var s=i[3].textContent;n.push(s)}n.push(o)}var c=n.filter((function(e,t,n){return n.indexOf(e)===t})),u=[],d=1;u.push({id:0,category:"ALL",isShowing:!0});for(var f=0;f<c.length;f++){var p={id:d++,category:c[f],isShowing:!0};u.push(p)}e({type:h.RESET_NEWS_FILTER,filter:u})}})}}function N(){return function(e){Object(v.i)({url:"https://easternunionblog.com/category/featured1/feed/",crossDomain:!0,parseXML:!0,success:function(t){for(var n=[],a=t.getElementsByTagName("item").length,r=0;r<a;r++){var i=t.getElementsByTagName("item")[r].getElementsByTagName("category"),o=i[1].textContent;if(i[2]){var l=i[2].textContent;n.push(l)}if(i[3]){var s=i[3].textContent;n.push(s)}n.push(o)}var c=n.filter((function(e,t,n){return n.indexOf(e)===t})),u=[],d=1;u.push({id:0,category:"ALL",isShowing:!1});for(var f=0;f<c.length;f++){var p={id:d++,category:c[f],isShowing:!1};u.push(p)}e({type:h.SET_ALL_NEWS_FILTER_NONE,filter:u})}})}}function O(e,t){return function(n){n({type:h.UPDATE_NEWS_FILTER,id:e,isShowing:t})}}var T=n(23),k=n(26),C=n.n(k),S=n(87),x=n.n(S),_=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,i=new Array(a),o=0;o<a;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).openLink=function(e){window&&window.isNativeApp?window.ReactNativeWebView.postMessage(JSON.stringify({action:"openUrl",data:{url:e}})):window.open(e)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"news-feed"},u.a.createElement(x.a,{xl:"4",lg:"6",md:"6",sm:"6",className:"news-feed-tile"},u.a.createElement("div",{className:"panel mui-panel",onClick:function(){return e.openLink(e.props.value.link)}},u.a.createElement("img",{src:this.props.value.image,ref:"image",alt:"feed",className:"feed-image"}),u.a.createElement("div",{className:"feed-info"},u.a.createElement("p",{className:"panel-info-value title"},this.props.value.title),u.a.createElement("p",{className:"panel-info-value article-content",style:{color:"gray"}},this.props.value.description),u.a.createElement("p",{className:"panel-info-value desc"},u.a.createElement("span",{className:"article-source"},this.props.value.source)," ","|"," ",u.a.createElement("i",null,u.a.createElement("span",{className:"article-date"},this.props.value.date)))))))}}]),n}(u.a.Component),j=n(210),F=n.n(j),L=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return u.a.createElement("div",null,u.a.createElement(x.a,{md:"12"},u.a.createElement("div",{className:"rkmd-checkbox checkbox-ripple"},u.a.createElement("label",{className:"input-checkbox checkbox-lightBlue"},u.a.createElement("input",{type:"checkbox",id:"checkbox-1",checked:this.props.value.isShowing,onChange:function(){e.props.handleCheckBox(e.props.value.id,!e.props.value.isShowing)}}),u.a.createElement("span",{className:"checkbox"}),u.a.createElement("span",{className:"ripple"})),u.a.createElement("label",{htmlFor:"checkbox-1",className:"label"},this.props.value.category))))}}]),n}(u.a.Component),M=n(50),B=n(72),A=n.n(B),D=n(754),I=n.n(D),H=function(e){Object(l.a)(n,e);var t=Object(s.a)(n);function n(e,a){var i;return Object(r.a)(this,n),(i=t.call(this,e,a)).handleCheckBox=i.handleCheckBox.bind(Object(o.a)(i)),i.closeInfoToast=i.closeInfoToast.bind(Object(o.a)(i)),i.closeFilterSidebar=i.closeFilterSidebar.bind(Object(o.a)(i)),i.openFilterSidebar=i.openFilterSidebar.bind(Object(o.a)(i)),i.state={filterSidebar:!1,filterHeader:!1},i}return Object(i.a)(n,[{key:"componentDidMount",value:function(){this.props.navActions.updateNavTitle("News Feed"),this.props.actions.setupInitialFilter(),this.props.actions.loadNews(),localStorage.getItem("infoToast")?this.setState({filterHeader:!1}):this.setState({filterHeader:!0})}},{key:"closeInfoToast",value:function(){localStorage.setItem("infoToast",!1),this.setState({filterHeader:!1})}},{key:"openFilterSidebar",value:function(){this.setState({filterSidebar:!0})}},{key:"closeFilterSidebar",value:function(){this.setState({filterSidebar:!1})}},{key:"handleCheckBox",value:function(e,t){0!==e&&!0===this.props.newsFeed.originalFilter[0].isShowing&&(this.props.actions.updateFilter(0,!1),this.props.actions.updateFilter(e,t)),0===e&&!0===t&&this.props.actions.resetFilter(),0===e&&!1===t?this.props.actions.setAllFilterToNone():this.props.actions.updateFilter(e,t)}},{key:"render",value:function(){var e,t=this,n=0,a=0;return e=this.props.newsFeed.originalFilter&&this.props.newsFeed.originalFilter.map((function(e){return u.a.createElement(L,{key:n++,value:e,handleCheckBox:t.handleCheckBox})})),u.a.createElement("div",{className:"newsFeed"},u.a.createElement(C.a,null,u.a.createElement(A.a,{className:"loading-modal",isOpen:this.props.newsFeed.loadingNews,ariaHideApp:!1,contentLabel:"Modal",shouldCloseOnOverlayClick:!1},u.a.createElement("div",{className:this.props.newsFeed.loadingNews?"centered-spinner":"hidden"},u.a.createElement("img",{src:"/images/icons/spin.svg",className:"loading-spinner",alt:"loading spinner"}))),u.a.createElement(x.a,{lg:"12",md:"12",sm:"12"},u.a.createElement("div",{className:this.state.filterHeader?"filter-info":"hidden"},u.a.createElement("p",null,u.a.createElement("i",{className:"material-icons close-icon",onClick:this.closeInfoToast},"close"),u.a.createElement("i",{className:"material-icons info-icon"},"info"),"Tap the filter menu icon on the upper right to filter the news feed...")),this.props.newsFeed.filteredNews&&this.props.newsFeed.filteredNews.map((function(e){return u.a.createElement(I.a,{height:200,offset:100,once:!0},u.a.createElement(_,{key:a++,id:a,value:e}))})),";"),u.a.createElement("div",{className:"filters-open-container mui--z1",onClick:this.openFilterSidebar},u.a.createElement("i",{className:"material-icons"},"filter_list"),u.a.createElement("p",null,"Filter")),u.a.createElement("div",{className:this.state.filterSidebar?"filters-close-container mui--z1":"hidden",onClick:this.closeFilterSidebar},u.a.createElement("i",{className:"material-icons"},"arrow_forward")),u.a.createElement("div",{className:this.state.filterSidebar?"filter-container mui--z1":"hidden"},u.a.createElement("div",{className:"filters-header"},u.a.createElement("i",{className:"material-icons"},"filter_list"),u.a.createElement("p",null,"Filter")),u.a.createElement(F.a,{className:"filter-divider"}),u.a.createElement("div",{className:"filters"},e))))}}]),n}(u.a.Component);t.default=Object(d.b)((function(e,t){return{newsFeed:e.newsFeed,title:e.navTitle}}),(function(e){return{actions:Object(T.b)(a,e),navActions:Object(T.b)(M,e)}}))(H)}}]);
//# sourceMappingURL=21.114ad990.chunk.js.map