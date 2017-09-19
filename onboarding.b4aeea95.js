webpackJsonp([34],{817:function(e,d,t){var a=t(1)(null,t(900),null,null,null);e.exports=a.exports},900:function(e,d){e.exports={render:function(){var e=this,d=e.$createElement,t=e._self._c||d;return t("page-content",{attrs:{"page-title":"Components - Onboarding"}},[t("docs-component",[t("div",{slot:"description"},[t("p",[e._v("The onboarding offers a first and fast look for your page, with custom controls, automatized steps and swipe effects. Can be also used as a custom carousel.")]),e._v(" "),t("p",[e._v("Can be themed used the following:")]),e._v(" "),t("ul",{staticClass:"md-body-4"},[t("li",[t("code",[e._v("md-primary")])]),e._v(" "),t("li",[t("code",[e._v("md-warn")])]),e._v(" "),t("li",[t("code",[e._v("md-accent")])]),e._v(" "),t("li",[t("code",[e._v("md-transparent")])])])]),e._v(" "),t("div",{slot:"api"},[t("api-table",{attrs:{name:"md-onboarding"}},[t("md-table",{slot:"properties"},[t("md-table-header",[t("md-table-row",[t("md-table-head",[e._v("Name")]),e._v(" "),t("md-table-head",[e._v("Type")]),e._v(" "),t("md-table-head",[e._v("Description")])],1)],1),e._v(" "),t("md-table-body",[t("md-table-row",[t("md-table-cell",[e._v("md-auto")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Enable auto-slider. "),t("br"),e._v("Default: "),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-infinite")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Enable infinite loop. "),t("br"),e._v("Default: "),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-duration")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Number")])]),e._v(" "),t("md-table-cell",[e._v("Set duration for "),t("code",[e._v("md-auto")]),e._v(" in milliseconds. "),t("br"),e._v("Default: "),t("code",[e._v("5000")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-controls")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Enable prev/next controls. "),t("br"),e._v("Default: "),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-swipeable")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Boolean")])]),e._v(" "),t("md-table-cell",[e._v("Enable the swipe functionality. "),t("br"),e._v("Default: "),t("code",[e._v("false")])])],1),e._v(" "),t("md-table-row",[t("md-table-cell",[e._v("md-swipe-distance")]),e._v(" "),t("md-table-cell",[t("code",[e._v("Number")])]),e._v(" "),t("md-table-cell",[e._v("Set the swipe distance needed to open/close the sidenav. "),t("br"),e._v("Default: "),t("code",[e._v("100")])])],1)],1)],1)],1)],1),e._v(" "),t("div",{slot:"example"},[t("example-box",{attrs:{"card-title":"Basic, automatic, infinite, uncontrolled, swipeable"}},[t("div",{slot:"demo"},[t("md-boards",{attrs:{"md-auto":!0,"md-infinite":!0,"md-duration":5e3,"md-swipeable":!0}},[t("md-board",{attrs:{id:"slide1"}},[t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.")])]),e._v(" "),t("md-board",{attrs:{id:"slide2"}},[t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.")])]),e._v(" "),t("md-board",{attrs:{id:"slide3"}},[t("p",[e._v("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.")])])],1)],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-boards :md-auto="true" :md-infinite="true" :md-duration="5000" :md-swipeable="true">\n              <md-board id="slide1">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n\n              <md-board id="slide2">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n\n              <md-board id="slide3">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n            </md-boards>\n          ')])],1)]),e._v(" "),t("example-box",{attrs:{"card-title":"Themed, finite, controlled"}},[t("div",{slot:"demo"},[t("md-boards",{staticClass:"md-transparent",staticStyle:{"background-color":"black"},attrs:{"md-controls":!0}},[t("md-board",{staticStyle:{color:"white"},attrs:{id:"slide1"}},[t("p",[e._v("Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.")])]),e._v(" "),t("md-board",{staticStyle:{color:"white"},attrs:{id:"slide2"}},[t("p",[e._v("Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.")])]),e._v(" "),t("md-board",{staticStyle:{color:"white"},attrs:{id:"slide3"}},[t("p",[e._v("Transparent themed, for background-imaged slides. Background color black added for demonstration purposes.")])])],1),e._v(" "),t("md-boards",{staticClass:"md-primary",attrs:{"md-controls":!0}},[t("md-board",{attrs:{id:"slide1"}},[t("p",[e._v("Primary themed")])]),e._v(" "),t("md-board",{attrs:{id:"slide2"}},[t("p",[e._v("Primary themed")])])],1),e._v(" "),t("md-boards",{staticClass:"md-accent",attrs:{"md-controls":!0}},[t("md-board",{attrs:{id:"slide1"}},[t("p",[e._v("Accent themed")])]),e._v(" "),t("md-board",{attrs:{id:"slide2"}},[t("p",[e._v("Accent themed")])]),e._v(" "),t("md-board",{attrs:{id:"slide3"}},[t("p",[e._v("Accent themed")])])],1),e._v(" "),t("md-boards",{staticClass:"md-warn",attrs:{"md-controls":!0}},[t("md-board",{attrs:{id:"slide1"}},[t("p",[e._v("Warn themed")])]),e._v(" "),t("md-board",{attrs:{id:"slide2"}},[t("p",[e._v("Warn themed")])]),e._v(" "),t("md-board",{attrs:{id:"slide3"}},[t("p",[e._v("Warn themed")])]),e._v(" "),t("md-board",{attrs:{id:"slide4"}},[t("p",[e._v("Warn themed")])])],1)],1),e._v(" "),t("div",{slot:"code"},[t("code-block",{attrs:{lang:"xml"}},[e._v('\n            <md-boards class="md-transparent" :md-controls="true">\n              <md-board id="slide1">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n            </md-boards>\n\n            <md-boards class="md-primary" :md-controls="true">\n              <md-board id="slide1">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n            </md-boards>\n\n            <md-boards class="md-accent" :md-controls="true">\n              <md-board id="slide1">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n            </md-boards>\n\n            <md-boards class="md-warn" :md-controls="true">\n              <md-board id="slide1">\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dolorum quas amet cum vitae, omnis! Illum quas voluptatem, expedita iste, dicta ipsum ea veniam dolore in, quod saepe reiciendis nihil.</p>\n              </md-board>\n            </md-boards>\n          ')])],1)])],1)])],1)},staticRenderFns:[]}}});