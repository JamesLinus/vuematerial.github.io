webpackJsonp([11],{814:function(e,t,l){function a(e){l(889)}var n=l(1)(l(891),l(892),a,"data-v-53f2ef70",null);e.exports=n.exports},889:function(e,t,l){var a=l(890);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals),l(796)("cc1b8ffc",a,!0)},890:function(e,t,l){t=e.exports=l(795)(),t.push([e.i,".color-box[data-v-53f2ef70]{width:200px;height:200px}",""])},891:function(e,t,l){"use strict";var a,n;Object.defineProperty(t,"__esModule",{value:!0}),a=l(52),n=(function(e){return e&&e.__esModule?e:{default:e}})(a),t.default={data:function(){return{autocompleteValue:"",colorValue:"",initialValue:"My initial value",listAutocomplete:[{name:"oi"},{name:"hello"},{name:"salut"}],colorData:[{name:"aqua",color:"#00ffff"},{name:"aquamarine",color:"#7fffd4"},{name:"azure",color:"#f0ffff"},{name:"beige",color:"#f5f5dc"},{name:"black",color:"#000000"},{name:"blue",color:"#0000ff"},{name:"brown",color:"#a52a2a"},{name:"crimson",color:"#dc143c"},{name:"cyan",color:"#00ffff"},{name:"deeppink",color:"#ff1493"},{name:"dimgray",color:"#696969"},{name:"fuchsia",color:"#ff00ff"},{name:"gold",color:"#ffd700"},{name:"gray",color:"#808080"},{name:"green",color:"#008000"},{name:"greenyellow",color:"#adff2f"},{name:"grey",color:"#808080"},{name:"hotpink",color:"#ff69b4"},{name:"indigo",color:"#4b0082"},{name:"ivory",color:"#fffff0"},{name:"khaki",color:"#f0e68c"},{name:"lavender",color:"#e6e6fa"},{name:"lime",color:"#00ff00"},{name:"magenta",color:"#ff00ff"},{name:"maroon",color:"#800000"},{name:"navy",color:"#000080"},{name:"olive",color:"#808000"},{name:"orange",color:"#ffa500"},{name:"orangered",color:"#ff4500"},{name:"palegoldenrod",color:"#eee8aa"},{name:"palegreen",color:"#98fb98"},{name:"pink",color:"#ffc0cb"},{name:"purple",color:"#800080"},{name:"red",color:"#ff0000"},{name:"royalblue",color:"#4169e1"},{name:"seagreen",color:"#2e8b57"},{name:"silver",color:"#c0c0c0"},{name:"skyblue",color:"#87ceeb"},{name:"slateblue",color:"#6a5acd"},{name:"slategrey",color:"#708090"},{name:"teal",color:"#008080"},{name:"turquoise",color:"#40e0d0"},{name:"violet",color:"#ee82ee"},{name:"white",color:"#ffffff"},{name:"yellow",color:"#ffff00"}]}},methods:{colorFilter:function(e,t){var l,a=[];for(l=0;l<e.length&&(-1!==e[l].name.indexOf(t)&&a.push(e[l]),!(a.length>5));l++);return a},colorCallback:function(e){this.selectedColor=e.color},fetchAutocomplete:function(e){var t={method:"GET",headers:new Headers,mode:"cors",cache:"default"},l="https://typeahead-js-twitter-api-proxy.herokuapp.com/demo/search",a=(0,n.default)(e)[0],o=e[a],r=l+"?"+a+"="+o;return window.fetch(r,t).then((function(e){return e.json()}))},filterList:function(e,t){return e.filter((function(e){return-1!==e.name.indexOf(t)}))}}},e.exports=t.default},892:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("page-content",{attrs:{"page-title":"Components - Input"}},[l("docs-component",[l("div",{slot:"description"},[l("p",[e._v("Inputs allow users to input text and usually appear in forms. Users may enter text, numbers, or mixed-format types of input.")])]),e._v(" "),l("div",{slot:"api"},[l("api-table",{attrs:{name:"md-input-container"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-inline")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Create an inline field with a label or placeholder. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-has-password")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Show a button to toggle the password visibility. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("md-clearable")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Show a button to clear the input. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1)],1)],1),e._v(" "),l("md-table",{slot:"classes"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("md-input-invalid")]),e._v(" "),l("md-table-cell",[e._v("Set the error class")])],1)],1)],1)],1),e._v(" "),l("api-table",{attrs:{name:"md-input"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("v-model")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("type")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the type. "),l("br"),e._v("Default: "),l("code",[e._v("text")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("debounce")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Debounce the "),l("code",[e._v("change")]),e._v(" and "),l("code",[e._v("input")]),e._v(" events emission. "),l("br"),e._v("Default: "),l("code",[e._v("300")]),e._v("ms")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("disabled")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Disable the input and prevent its actions. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("required")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v('Apply the required rule to style the label with an "*". '),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("placeholder")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the placeholder.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("maxlength")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the maxlength and enable the text counter.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("readonly")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Set the component to read only mode.")])],1)],1)],1),e._v(" "),l("md-table",{slot:"events"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Value")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("focus")]),e._v(" "),l("md-table-cell",[e._v("Emits the "),l("code",[e._v("Event")]),e._v(" object")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the user focuses the input")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("blur")]),e._v(" "),l("md-table-cell",[e._v("Emits the "),l("code",[e._v("Event")]),e._v(" object")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the user loses focus of the input")])],1)],1)],1)],1),e._v(" "),l("api-table",{attrs:{name:"md-autocomplete"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("v-model")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("debounce")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the debounce time. "),l("br"),e._v("Default: "),l("code",[e._v("1000")]),e._v(" milliseconds")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("fetch")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Function")])]),e._v(" "),l("md-table-cell",[e._v("Set the fetch function mdAutocomplete will call after the debounce is reached. Choosing "),l("code",[e._v("fetch")]),e._v(" prop "),l("strong",[e._v("disables")]),e._v(" the use of either "),l("code",[e._v("list")]),e._v(" and "),l("code",[e._v("filterList")]),e._v(" props.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("list")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Array")])]),e._v(" "),l("md-table-cell",[e._v("Set an array of possible values. "),l("br"),e._v("Default: "),l("code",[e._v("[]")]),e._v(". MdAutocomplete will only search in this list if it's set. Chosing "),l("code",[e._v("list")]),e._v(" prop "),l("strong",[e._v("disables")]),e._v(" the use of "),l("code",[e._v("fetch")]),e._v(" prop.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("filter-list")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Function")])]),e._v(" "),l("md-table-cell",[e._v("Set a filter function which will be used to filter the "),l("code",[e._v("list")]),e._v(" props. Choosing "),l("code",[e._v("filterList")]),e._v(" prop "),l("strong",[e._v("requires")]),e._v(" the use of "),l("code",[e._v("list")]),e._v(" props and "),l("strong",[e._v("disables")]),e._v(" the use of "),l("code",[e._v("fetch")]),e._v(" prop.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("min-chars")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the minimum number of characters before making opening the autocomplete options or making a request. "),l("br"),e._v("Default: "),l("code",[e._v("3")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("prepare-response-data")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Function")])]),e._v(" "),l("md-table-cell",[e._v("This function will be called once the "),l("code",[e._v("fetch")]),e._v(" prop has a response. It can manipulate the data received from the server. The output should always be an "),l("code",[e._v("Array")]),e._v(".")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("print-attribute")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("This prop will be used to print values on the autocomplete list. It shall match an object key expected on the "),l("code",[e._v("fetch")]),e._v(" result list. "),l("br"),e._v("Default: "),l("code",[e._v("name")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("query-param")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the query parameter. Example: http//api.com/"),l("strong",[e._v("q")]),e._v("?=SOMETHING. "),l("br"),e._v("Default: "),l("code",[e._v("q")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("disabled")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Disable the input and prevent his actions. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("required")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v('Apply the required rule to style the label with an "*". '),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("placeholder")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the placeholder.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("maxlength")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the maxlength and enable the text counter.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("max-height")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Sets the maximum height of the selection menu in terms of the number of items which can be displayed at once. If set to "),l("code",[e._v("0")]),e._v(", the maximum height will be dependant on window height. "),l("br"),e._v("Default: "),l("code",[e._v("0")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("max-res")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the maximum number of results to show. If "),l("code",[e._v("0")]),e._v(", results are not limited. "),l("br"),e._v("Default: "),l("code",[e._v("0")])])],1)],1)],1),e._v(" "),l("md-table",{slot:"events"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Value")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("change")]),e._v(" "),l("md-table-cell",[e._v("The "),l("code",[e._v("String")]),e._v(" selected")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the user selects an item from the autocomplete list")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("input")]),e._v(" "),l("md-table-cell",[e._v("The "),l("code",[e._v("String")]),e._v(" selected")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the user selects an item from the autocomplete list")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("selected")]),e._v(" "),l("md-table-cell",[e._v("Emits the "),l("code",[e._v("Object")]),e._v(" as well as the "),l("code",[e._v("String")]),e._v(" selected.")]),e._v(" "),l("md-table-cell",[e._v("Triggered when the user selects an item from the autocomplete list")])],1)],1)],1)],1),e._v(" "),l("api-table",{attrs:{name:"md-textarea"}},[l("md-table",{slot:"properties"},[l("md-table-header",[l("md-table-row",[l("md-table-head",[e._v("Name")]),e._v(" "),l("md-table-head",[e._v("Type")]),e._v(" "),l("md-table-head",[e._v("Description")])],1)],1),e._v(" "),l("md-table-body",[l("md-table-row",[l("md-table-cell",[e._v("v-model")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("A required model object to bind the value.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("debounce")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Debounce the "),l("code",[e._v("change")]),e._v(" and "),l("code",[e._v("input")]),e._v(" events emission. "),l("br"),e._v("Default: "),l("code",[e._v("300")]),e._v("ms")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("disabled")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Disable the textarea and prevent its actions. "),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("required")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v('Apply the required rule to style the label with an "*". '),l("br"),e._v("Default: "),l("code",[e._v("false")])])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("placeholder")]),e._v(" "),l("md-table-cell",[l("code",[e._v("String")])]),e._v(" "),l("md-table-cell",[e._v("Set the placeholder.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("maxlength")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Number")])]),e._v(" "),l("md-table-cell",[e._v("Set the maxlength and enable the text counter.")])],1),e._v(" "),l("md-table-row",[l("md-table-cell",[e._v("readonly")]),e._v(" "),l("md-table-cell",[l("code",[e._v("Boolean")])]),e._v(" "),l("md-table-cell",[e._v("Set the component to read only mode.")])],1)],1)],1)],1)],1),e._v(" "),l("div",{slot:"example"},[l("example-box",{attrs:{"card-title":"Regular fields"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",[l("label",[e._v("Initial value")]),e._v(" "),l("md-input",{model:{value:e.initialValue,callback:function(t){e.initialValue=t},expression:"initialValue"}})],1),e._v(" "),l("md-input-container",[l("label",[e._v("Initial value (read only)")]),e._v(" "),l("md-input",{attrs:{readonly:""},model:{value:e.initialValue,callback:function(t){e.initialValue=t},expression:"initialValue"}})],1),e._v(" "),l("md-input-container",[l("label",[e._v("Autocomplete (with fetch)")]),e._v(" "),l("md-autocomplete",{attrs:{fetch:e.fetchAutocomplete},model:{value:e.autocompleteValue,callback:function(t){e.autocompleteValue=t},expression:"autocompleteValue"}})],1),e._v(" "),l("md-input-container",[l("label",[e._v("With label")]),e._v(" "),l("md-input",{attrs:{placeholder:"My nice placeholder"}})],1),e._v(" "),l("md-input-container",{attrs:{"md-inline":""}},[l("label",[e._v("Inline field")]),e._v(" "),l("md-input")],1),e._v(" "),l("md-input-container",[l("label",[e._v("Number")]),e._v(" "),l("md-input",{attrs:{type:"number"}})],1),e._v(" "),l("md-input-container",[l("label",[e._v("Textarea")]),e._v(" "),l("md-textarea")],1),e._v(" "),l("md-input-container",[l("label",[e._v("Disabled")]),e._v(" "),l("md-input",{attrs:{disabled:""}})],1),e._v(" "),l("md-input-container",{attrs:{"md-clearable":""}},[l("label",[e._v("Clearable")]),e._v(" "),l("md-input",{model:{value:e.initialValue,callback:function(t){e.initialValue=t},expression:"initialValue"}})],1)],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container>\n                <label>Initial value</label>\n                <md-input v-model="initialValue"></md-input>\n              </md-input-container>\n\n              <md-input-container>\n                <label>Autocomplete (with fetch)</label>\n                <md-autocomplete v-model="autocompleteValue" :fetch="fetchFunction"></md-autocomplete>\n              </md-input-container>\n\n              <md-input-container>\n                <label>With label</label>\n                <md-input placeholder="My nice placeholder"></md-input>\n              </md-input-container>\n\n              <md-input-container md-inline>\n                <label>Inline field</label>\n                <md-input></md-input>\n              </md-input-container>\n\n              <md-input-container>\n                <label>Number</label>\n                <md-input type="number"></md-input>\n              </md-input-container>\n\n              <md-input-container>\n                <label>Textarea</label>\n                <md-textarea></md-textarea>\n              </md-input-container>\n\n              <md-input-container>\n                <label>Disabled</label>\n                <md-input disabled></md-input>\n              </md-input-container>\n\n              <md-input-container md-clearable>\n                <label>Clearable</label>\n                <md-input v-model="initialValue"></md-input>\n              </md-input-container>\n            </form>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v("\n            export default {\n              data() {\n                return {\n                  initialValue: 'My initial value'\n                };\n              },\n              methods: {\n                fetchFunction(param) {\n                  // param = { queryParam: query }\n\n                  // 'fetchAutocomplete' should return a Promise.\n\n                  // md-autocomplete will call fetchAutocomplete and pass\n                  // 'param' as an argument.\n                  // the 'param' is composed by a query param and\n                  // a query.\n                },\n              },\n            };\n          ")])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Passwords"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",[l("label",[e._v("Regular Password")]),e._v(" "),l("md-input",{attrs:{type:"password"}})],1),e._v(" "),l("md-input-container",{attrs:{"md-has-password":""}},[l("label",[e._v("Password Reveal")]),e._v(" "),l("md-input",{attrs:{type:"password"}})],1)],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container>\n                <label>Regular Password</label>\n                <md-input type="password"></md-input>\n              </md-input-container>\n\n              <md-input-container md-has-password>\n                <label>Password Reveal</label>\n                <md-input type="password"></md-input>\n              </md-input-container>\n            </form>\n          ')])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Icons"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",[l("md-icon",{staticClass:"md-warn"},[e._v("\n                warning\n                "),l("md-tooltip",[e._v("Be careful. You're almost broken!")])],1),e._v(" "),l("label",[e._v("Money")]),e._v(" "),l("md-input",{attrs:{type:"number"}}),e._v(" "),l("md-icon",[e._v("attach_money")])],1),e._v(" "),l("md-input-container",[l("md-icon",[e._v("phone")]),e._v(" "),l("label",[e._v("Phone")]),e._v(" "),l("md-input",{attrs:{type:"tel"}})],1),e._v(" "),l("md-input-container",[l("md-icon",[e._v("speaker_notes")]),e._v(" "),l("label",[e._v("Notes")]),e._v(" "),l("md-textarea")],1)],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container>\n                <md-icon class="md-warn">\n                  warning\n                  <md-tooltip>Be careful. You\'re almost broken!</md-tooltip>\n                </md-icon>\n                <label>Money</label>\n                <md-input type="number"></md-input>\n                <md-icon>attach_money</md-icon>\n              </md-input-container>\n\n              <md-input-container>\n                <md-icon>phone</md-icon>\n                <label>Phone</label>\n                <md-input type="tel"></md-input>\n              </md-input-container>\n\n              <md-input-container>\n                <md-icon>speaker_notes</md-icon>\n                <label>Notes</label>\n                <md-textarea></md-textarea>\n              </md-input-container>\n            </form>\n          ')])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Required and Errors"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",[l("label",[e._v("Required")]),e._v(" "),l("md-input",{attrs:{required:""}})],1),e._v(" "),l("md-input-container",{staticClass:"md-input-invalid"},[l("label",[e._v("Error")]),e._v(" "),l("md-input",{attrs:{required:""}})],1),e._v(" "),l("md-input-container",{staticClass:"md-input-invalid"},[l("label",[e._v("Error with message")]),e._v(" "),l("md-input",{attrs:{required:""}}),e._v(" "),l("span",{staticClass:"md-error"},[e._v("Validation message")])],1),e._v(" "),l("md-input-container",{staticClass:"md-input-invalid"},[l("label",[e._v("Textarea with error")]),e._v(" "),l("md-textarea"),e._v(" "),l("span",{staticClass:"md-error"},[e._v("Textarea validation message")])],1)],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container>\n                <label>Required</label>\n                <md-input required></md-input>\n              </md-input-container>\n\n              <md-input-container class="md-input-invalid">\n                <label>Error</label>\n                <md-input required></md-input>\n              </md-input-container>\n\n              <md-input-container class="md-input-invalid">\n                <label>Error with message</label>\n                <md-input required></md-input>\n\n                <span class="md-error">Validation message</span>\n              </md-input-container>\n\n              <md-input-container class="md-input-invalid">\n                <label>Textarea with error</label>\n                <md-textarea></md-textarea>\n\n                <span class="md-error">Textarea validation message</span>\n              </md-input-container>\n            </form>\n          ')])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Character counter"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",[l("label",[e._v("Textarea")]),e._v(" "),l("md-textarea",{attrs:{maxlength:"70"}})],1),e._v(" "),l("md-input-container",[l("label",[e._v("Input")]),e._v(" "),l("md-input",{attrs:{maxlength:"20"}})],1)],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container>\n                <label>Textarea</label>\n                <md-textarea maxlength="70"></md-textarea>\n              </md-input-container>\n\n              <md-input-container>\n                <label>Input</label>\n                <md-input maxlength="20"></md-input>\n              </md-input-container>\n            </form>\n          ')])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Themes"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",{attrs:{"md-theme":"green"}},[l("label",[e._v("Green - Input")]),e._v(" "),l("md-input")],1),e._v(" "),l("md-input-container",{attrs:{"md-theme":"red"}},[l("label",[e._v("Red - Textarea")]),e._v(" "),l("md-textarea")],1)],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container md-theme="green">\n                <label>Green - Input</label>\n                <md-input></md-input>\n              </md-input-container>\n\n              <md-input-container md-theme="red">\n                <label>Red - Textarea</label>\n                <md-textarea></md-textarea>\n              </md-input-container>\n            </form>\n          ')])],1)]),e._v(" "),l("example-box",{attrs:{"card-title":"Autocomplete Example"}},[l("div",{slot:"demo"},[l("form",{attrs:{novalidate:""},on:{submit:function(t){t.stopPropagation(),t.preventDefault(),e.submit(t)}}},[l("md-input-container",{attrs:{"md-theme":"green"}},[l("label",[e._v("Choose a Colour")]),e._v(" "),l("md-autocomplete",{attrs:{list:e.colorData,"print-attribute":"name","filter-list":e.colorFilter,"min-chars":0,"max-height":6,debounce:500},on:{selected:e.colorCallback},model:{value:e.colorValue,callback:function(t){e.colorValue=t},expression:"colorValue"}})],1),e._v(" "),l("div",{staticClass:"color-box",style:{backgroundColor:e.selectedColor}})],1)]),e._v(" "),l("div",{slot:"code"},[l("code-block",{attrs:{lang:"xml"}},[e._v('\n            <form novalidate @submit.stop.prevent="submit">\n              <md-input-container md-theme="green">\n                <label>Choose a Colour</label>\n                <md-autocomplete v-model="colorValue" \n                                    :list="colorData"\n                                    print-attribute="name"\n                                    :filter-list="colorFilter"\n                                    :min-chars="0"\n                                    :max-height="6"\n                                    @selected="colorCallback"\n                                    :debounce="500">\n                </md-autocomplete>\n              </md-input-container>\n            \n              <div class="color-box" :style="{ backgroundColor: selectedColor }"></div>\n            </form>\n          ')]),e._v(" "),l("code-block",{attrs:{lang:"javascript"}},[e._v('\n            export default {\n              data() {\n                return {\n                  colorValue: \'\',\n                  colorData: [\n                    {name: "aqua", color: "#00ffff"},\n                    {name: "aquamarine", color: "#7fffd4"},\n                    {name: "azure", color: "#f0ffff"},\n                    {name: "beige", color: "#f5f5dc"},\n                    {name: "black", color: "#000000"},\n                    {name: "blue", color: "#0000ff"},\n                    {name: "brown", color: "#a52a2a"},\n                    {name: "crimson", color: "#dc143c"},\n                    {name: "cyan", color: "#00ffff"},\n                    {name: "deeppink", color: "#ff1493"},\n                    {name: "dimgray", color: "#696969"},\n                    {name: "fuchsia", color: "#ff00ff"},\n                    {name: "gold", color: "#ffd700"},\n                    {name: "gray", color: "#808080"},\n                    {name: "green", color: "#008000"},\n                    {name: "greenyellow", color: "#adff2f"},\n                    {name: "grey", color: "#808080"},\n                    {name: "hotpink", color: "#ff69b4"},\n                    {name: "indigo", color: "#4b0082"},\n                    {name: "ivory", color: "#fffff0"},\n                    {name: "khaki", color: "#f0e68c"},\n                    {name: "lavender", color: "#e6e6fa"},\n                    {name: "lime", color: "#00ff00"},\n                    {name: "magenta", color: "#ff00ff"},\n                    {name: "maroon", color: "#800000"},\n                    {name: "navy", color: "#000080"},\n                    {name: "olive", color: "#808000"},\n                    {name: "orange", color: "#ffa500"},\n                    {name: "orangered", color: "#ff4500"},\n                    {name: "palegoldenrod", color: "#eee8aa"},\n                    {name: "palegreen", color: "#98fb98"},         \n                    {name: "pink", color: "#ffc0cb"},\n                    {name: "purple", color: "#800080"},\n                    {name: "red", color: "#ff0000"},\n                    {name: "royalblue", color: "#4169e1"},\n                    {name: "seagreen", color: "#2e8b57"},\n                    {name: "silver", color: "#c0c0c0"},\n                    {name: "skyblue", color: "#87ceeb"},\n                    {name: "slateblue", color: "#6a5acd"},\n                    {name: "slategrey", color: "#708090"},\n                    {name: "teal", color: "#008080"},\n                    {name: "turquoise", color: "#40e0d0"},\n                    {name: "violet", color: "#ee82ee"},\n                    {name: "white", color: "#ffffff"},         \n                    {name: "yellow", color: "#ffff00"},\n                  ]\n                };\n              },\n              methods: {\n                colorFilter: function(list, query) {\n                  var arr = [];\n          \n                  for(var i = 0; i < list.length; i++) {\n                    if(list[i].name.indexOf(query) !== -1)\n                      arr.push(list[i]);\n          \n                    if(arr.length > 5)\n                      break;\n                  }\n          \n                  return arr;\n                },\n          \n                colorCallback: function(item) {\n                  this.selectedColor = item.color;\n                }\n              }\n            }; \n          ')])],1)])],1)])],1)},staticRenderFns:[]}}});