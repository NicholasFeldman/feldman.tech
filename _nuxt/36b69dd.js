(window.webpackJsonp=window.webpackJsonp||[]).push([[7,5,6],{349:function(t,e,n){var content=n(350);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(25).default)("6b715e77",content,!0,{sourceMap:!1})},350:function(t,e,n){var r=n(24)(!1);r.push([t.i,'.theme--light.v-icon{color:rgba(0,0,0,.54)}.theme--light.v-icon:focus:after{opacity:.12}.theme--light.v-icon.v-icon.v-icon--disabled{color:rgba(0,0,0,.38)!important}.theme--dark.v-icon{color:#fff}.theme--dark.v-icon:focus:after{opacity:.24}.theme--dark.v-icon.v-icon.v-icon--disabled{color:hsla(0,0%,100%,.5)!important}.v-icon.v-icon{align-items:center;display:inline-flex;font-feature-settings:"liga";font-size:24px;justify-content:center;letter-spacing:normal;line-height:1;position:relative;text-indent:0;transition:.3s cubic-bezier(.25,.8,.5,1),visibility 0s;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-icon.v-icon:after{background-color:currentColor;border-radius:50%;content:"";display:inline-block;height:100%;left:0;opacity:0;pointer-events:none;position:absolute;top:0;transform:scale(1.3);width:100%;transition:opacity .2s cubic-bezier(.4,0,.6,1)}.v-icon.v-icon--dense{font-size:20px}.v-icon--right{margin-left:8px}.v-icon--left{margin-right:8px}.v-icon.v-icon.v-icon--link{cursor:pointer;outline:none}.v-icon--disabled{pointer-events:none}.v-icon--dense__component,.v-icon--dense__svg{height:20px}.v-icon__component,.v-icon__svg{height:24px;width:24px}.v-icon__svg{fill:currentColor}',""]),t.exports=r},366:function(t,e,n){"use strict";n.r(e);var r={name:"Projects",data:function(){return{projects:[{title:"BetterRecords",image:"./images/betterrecords.png",text:"\n           In 2016, I took over maintaining a mod for the popular game Minecraft.\n           I used this as an opportunity to learn Kotlin, and re-wrote the mod\n           multiple times until I was at a level of proficiency in Kotlin I was\n           comfortable with. Today, the mod creeps towards one million downloads,\n           and is currently sitting at a little under 800,000.\n           ",links:[{title:"Github",href:"https://github.com/NicholasFeldman/BetterRecords"}]},{title:"feldman.tech",image:"./images/feldman.png",text:"\n          This is my personal site, that I use to test new frameworks,\n          techniques, etc. As such, it's often re-written.\n          In it's current iteration, it is built with Nuxt.\n          I plan on expanding to include a blog, where I can ramble on and\n          create content to share my learnings and experiences.\n          ",links:[{title:"Github",href:"https://github.com/NicholasFeldman/feldman.tech"}]}]}}},o=n(75),l=n(97),c=n.n(l),h=n(343),d=n(365),v=n(346),f=n(388),m=n(387),_=n(230),x=n(389),w=n(342),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("p",{staticClass:"text-h4"},[t._v("Projects")]),t._v(" "),n("v-row",t._l(t.projects,(function(e){return n("v-col",{key:e.title,attrs:{cols:"6"}},[n("v-card",[n("v-img",{attrs:{src:e.image}}),t._v(" "),n("v-card-text",[t._v(t._s(e.text))]),t._v(" "),e.links?n("v-card-actions",[n("v-spacer"),t._v(" "),t._l(e.links,(function(link){return n("v-btn",{key:link.title,attrs:{text:"",color:"primary",href:link.href,target:"_blank"}},[t._v("\n            "+t._s(link.title)+"\n          ")])}))],2):t._e()],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VCard:d.a,VCardActions:v.a,VCardText:v.b,VCol:f.a,VContainer:m.a,VImg:_.a,VRow:x.a,VSpacer:w.a})},367:function(t,e,n){"use strict";n.r(e);var r,o=n(75),l=n(97),c=n.n(l),h=n(343),d=n(387),v=(n(14),n(8),n(15),n(19),n(11),n(20),n(2)),f=(n(234),n(53),n(67),n(42),n(76),n(126),n(43),n(349),n(161)),m=n(100),_=n(162),x=n(80),w=n(1),y=n(0),C=n(28);function k(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function j(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?k(Object(source),!0).forEach((function(e){Object(v.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):k(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}!function(t){t.xSmall="12px",t.small="16px",t.default="24px",t.medium="28px",t.large="36px",t.xLarge="40px"}(r||(r={}));var O=Object(C.a)(f.a,m.a,_.a,x.a).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium:function(){return!1},hasClickListener:function(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon:function(){var t="";return this.$slots.default&&(t=this.$slots.default[0].text.trim()),Object(w.n)(this,t)},getSize:function(){var t={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},e=Object(w.k)(t).find((function(e){return t[e]}));return e&&r[e]||Object(w.d)(this.size)},getDefaultData:function(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:j({"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0},this.attrs$),on:this.listeners$}},getSvgWrapperData:function(){var t=this.getSize(),e=j(j({},this.getDefaultData()),{},{style:t?{fontSize:t,height:t,width:t}:void 0});return this.applyColors(e),e},applyColors:function(data){data.class=j(j({},data.class),this.themeClasses),this.setTextColor(this.color,data)},renderFontIcon:function(t,e){var n=[],data=this.getDefaultData(),r="material-icons",o=t.indexOf("-"),l=o<=-1;l?n.push(t):function(t){return["fas","far","fal","fab","fad"].some((function(e){return t.includes(e)}))}(r=t.slice(0,o))&&(r=""),data.class[r]=!0,data.class[t]=!l;var c=this.getSize();return c&&(data.style={fontSize:c}),this.applyColors(data),e(this.hasClickListener?"button":this.tag,data,n)},renderSvgIcon:function(t,e){var n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},r=this.getSize();return r&&(n.style={fontSize:r,height:r,width:r}),e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e("svg",n,[e("path",{attrs:{d:t}})])])},renderSvgIconComponent:function(t,e){var data={class:{"v-icon__component":!0}},n=this.getSize();n&&(data.style={fontSize:n,height:n,width:n}),this.applyColors(data);var component=t.component;return data.props=t.props,data.nativeOn=data.on,e(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[e(component,data)])}},render:function(t){var e=this.getIcon();return"string"==typeof e?function(t){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(t)&&/[\dz]$/i.test(t)&&t.length>4}(e)?this.renderSvgIcon(e,t):this.renderFontIcon(e,t):this.renderSvgIconComponent(e,t)}}),S=y.a.extend({name:"v-icon",$_wrapperFor:O,functional:!0,render:function(t,e){var data=e.data,n=e.children,r="";return data.domProps&&(r=data.domProps.textContent||data.domProps.innerHTML||r,delete data.domProps.textContent,delete data.domProps.innerHTML),t(O,data,r?[r]:n)}}),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("p",{staticClass:"text-h4"},[t._v("Contact")]),t._v(" "),n("p",[n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",target:"_blank",href:"mailto:nick@feldman.tech"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-email")]),t._v("nick@feldman.tech")],1)],1),t._v(" "),n("p",[n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",target:"_blank",href:"https://github.com/NicholasFeldman"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-github")]),t._v("Github")],1),t._v(" "),n("v-btn",{staticClass:"mx-2",attrs:{color:"primary",target:"_blank",href:"https://www.linkedin.com/in/nicholas-feldman-228463108"}},[n("v-icon",{attrs:{left:""}},[t._v("mdi-linkedin")]),t._v("Linkedin")],1)],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:h.a,VContainer:d.a,VIcon:S})},368:function(t,e,n){"use strict";n.r(e);var r=n(75),o=n(97),l=n.n(o),c=n(388),h=n(387),d=n(389),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",[n("v-row",[n("v-col",[n("div",{staticClass:"text-center"},[n("p",{staticClass:"text-h1"},[t._v("Nicholas Feldman")]),t._v(" "),n("p",{staticClass:"text-subtitle-1"},[t._v("Web and Mobile Computing Student @ RIT")])])])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VCol:c.a,VContainer:h.a,VRow:d.a})},391:function(t,e,n){"use strict";n.r(e);var r=n(75),o=n(97),l=n.n(o),c=n(388),h=n(387),d=n(389),component=Object(r.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("cover"),t._v(" "),n("v-container",[n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{attrs:{cols:"12",md:"8",sm:"6"}},[n("div",{staticClass:"text-center"},[n("contact"),t._v(" "),n("projects")],1)])],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{Cover:n(368).default,Contact:n(367).default,Projects:n(366).default}),l()(component,{VCol:c.a,VContainer:h.a,VRow:d.a})}}]);