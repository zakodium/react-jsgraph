(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ 562:
/***/ (function(module) {

module.exports = {"series":[{"type":"line","xAxis":"wavelength","yAxis":"transmission","data":{"x":[1,2,3,4,5],"y":[1,2,3,2,1]}}]};

/***/ }),

/***/ 563:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/classCallCheck.js
var classCallCheck = __webpack_require__(4);
var classCallCheck_default = /*#__PURE__*/__webpack_require__.n(classCallCheck);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/createClass.js
var createClass = __webpack_require__(5);
var createClass_default = /*#__PURE__*/__webpack_require__.n(createClass);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js
var possibleConstructorReturn = __webpack_require__(8);
var possibleConstructorReturn_default = /*#__PURE__*/__webpack_require__.n(possibleConstructorReturn);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/getPrototypeOf.js
var getPrototypeOf = __webpack_require__(9);
var getPrototypeOf_default = /*#__PURE__*/__webpack_require__.n(getPrototypeOf);

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/inherits.js
var inherits = __webpack_require__(10);
var inherits_default = /*#__PURE__*/__webpack_require__.n(inherits);

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(0);
var react_default = /*#__PURE__*/__webpack_require__.n(react);

// EXTERNAL MODULE: ./node_modules/node-jsgraph/dist/jsgraph.js
var jsgraph = __webpack_require__(561);
var jsgraph_default = /*#__PURE__*/__webpack_require__.n(jsgraph);

// CONCATENATED MODULE: ./src/components/Graph.js
// eslint-disable-line no-unused-vars
var Graph_Graph=/*#__PURE__*/function(_Component){function Graph(){return classCallCheck_default()(this,Graph),possibleConstructorReturn_default()(this,getPrototypeOf_default()(Graph).apply(this,arguments))}return inherits_default()(Graph,_Component),createClass_default()(Graph,[{key:"componentDidMount",value:function componentDidMount(){this.updateGraph()}},{key:"componentDidUpdate",value:function componentDidUpdate(){this.updateGraph()}},{key:"updateGraph",value:function updateGraph(){console.log("updating...");var chart=this.props.chart,root=this.el;root.innerHTML="";var graph=jsgraph_default.a.fromJSON(chart,this.el);graph.resize(this.props.width||root.clientWidth,this.props.height||root.clientHeight),graph.draw()}},{key:"render",value:function render(){var _this=this;return react_default.a.createElement("div",{style:this.props.style,ref:function ref(el){_this.el=el}})}}]),Graph}(react["Component"]);Graph_Graph.__docgenInfo={description:"",methods:[{name:"updateGraph",docblock:null,modifiers:[],params:[],returns:null}],displayName:"Graph"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src\\components\\Graph.js"]={name:"Graph",docgenInfo:Graph_Graph.__docgenInfo,path:"src\\components\\Graph.js"});
// CONCATENATED MODULE: ./src/index.js
/* concated harmony reexport Graph */__webpack_require__.d(__webpack_exports__, "a", function() { return Graph_Graph; });


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(219);
__webpack_require__(565);
module.exports = __webpack_require__(566);


/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(138);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(559);
/* harmony import */ var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(560);
/* harmony import */ var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__);
var req=__webpack_require__(613);function loadStories(){req.keys().forEach(function(filename){return req(filename)})}Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(Object(_storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__["withInfo"])({header:!1,inline:!0,source:!0,styles:{infoStory:{border:"1px solid rgb(238, 238, 238)",padding:30,fontFamily:"sans-serif"}}})),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["addDecorator"])(_storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_1__["withKnobs"]),Object(_storybook_react__WEBPACK_IMPORTED_MODULE_0__["configure"])(loadStories,module);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(316)(module)))

/***/ }),

/***/ 585:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./nestedObjectAssign": 495,
	"./nestedObjectAssign.js": 495
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 585;

/***/ }),

/***/ 613:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./index.stories.js": 614
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) { // check for number or string
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return id;
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 613;

/***/ }),

/***/ 614:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(138);
/* harmony import */ var _storybook_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_storybook_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _src__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(563);
/* harmony import */ var _data_graph_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(562);
var _data_graph_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(562, 1);
Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__["storiesOf"])("jsGraph",module).add("test 1",function(){return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_src__WEBPACK_IMPORTED_MODULE_2__[/* Graph */ "a"],{style:{height:500,width:800},chart:_data_graph_json__WEBPACK_IMPORTED_MODULE_3__})});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(316)(module)))

/***/ })

},[[564,2,4]]]);