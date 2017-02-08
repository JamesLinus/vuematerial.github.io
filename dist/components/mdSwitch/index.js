/*!
* Vue Material v0.7.0
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(d){if(n[d])return n[d].exports;var i=n[d]={i:d,l:!1,exports:{}};return e[d].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,d){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:d})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=423)})({0:function(e,t){e.exports=function(e,t,n,d){var i,s=e=e||{},c=typeof e.default;"object"!==c&&"function"!==c||(i=e,s=e.default);var o="function"==typeof s?s.options:s;if(t&&(o.render=t.render,o.staticRenderFns=t.staticRenderFns),n&&(o._scopeId=n),d){var r=o.computed||(o.computed={});Object.keys(d).forEach((function(e){var t=d[e];r[e]=function(){return t}}))}return{esModule:i,exports:s,options:o}}},1:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=t.default},115:function(e,t,n){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}function i(e){e.component("md-switch",c.default),e.material.styles.push(r.default)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=i;var s=n(313),c=d(s),o=n(255),r=d(o);e.exports=t.default},175:function(e,t,n){"use strict";function d(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),s=d(i),c=75,o="-1px";t.default={props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}},mixins:[s.default],data:function(){return{leftPos:o,checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(e){this.changeState(e)}},methods:{setPosition:function(){this.leftPos=this.checked?c+"%":o},changeState:function(e,t){"undefined"!=typeof t?(this.$emit("change",t),t.defaultPrevented||(this.checked=e),this.$emit("input",this.checked,t)):this.checked=e},toggle:function(e){this.disabled||this.changeState(!this.checked,e)}},mounted:function(){this.$nextTick(this.setPosition)}},e.exports=t.default},224:function(e,t){},255:function(e,t){e.exports=".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},313:function(e,t,n){n(224);var d=n(0)(n(175),n(383),null,null);e.exports=d.exports},383:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.themeClass,e.classes]},[n("div",{staticClass:"md-switch-container",on:{click:function(t){e.toggle(t)}}},[n("div",{staticClass:"md-switch-thumb",style:e.styles},[n("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled},domProps:{value:e.value}}),e._v(" "),n("button",{staticClass:"md-switch-holder",attrs:{type:e.type}}),e._v(" "),n("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1)]),e._v(" "),e.$slots.default?n("label",{staticClass:"md-switch-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},423:function(e,t,n){e.exports=n(115)}})}));