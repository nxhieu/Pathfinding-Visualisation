/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/public/js/main.js","vendor","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/js/components/algorithms/dijkstra.js":
/*!*********************************************************!*\
  !*** ./src/public/js/components/algorithms/dijkstra.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nfunction Dijkstra(grid, start, finish, numberOfNodes) {\n  var GreedyScore_node = [];\n  var Visited_node = {};\n  var prev = {};\n  var conquered = [];\n  conquerNode(grid, GreedyScore_node, Visited_node, start, 1, prev, conquered);\n  var k = 1;\n\n  while (k < numberOfNodes - 1) {\n    var _comparingGreedyScore = comparingGreedyScore(GreedyScore_node, Visited_node, grid),\n        index = _comparingGreedyScore.index,\n        minScore = _comparingGreedyScore.minScore;\n\n    if (index === finish) {\n      // console.log(\"con\", index, \"finish\", finish);\n      // console.log(typeof index);\n      // console.log(Visited_node);\n      var shortestPath = [];\n      findShortestPath(shortestPath, prev, start, finish);\n      return {\n        path: shortestPath,\n        conqueredNode: conquered\n      }; // return Visited_node;\n    }\n\n    if (index) {\n      conquerNode(grid, GreedyScore_node, Visited_node, index, minScore, prev, conquered);\n    } // console.log(index);\n\n\n    k++;\n  }\n\n  return {\n    path: null,\n    conqueredNode: conquered\n  };\n}\n\nfunction conquerNode(grid, GreedyScore_node, Visited_node, index, minScore, prev, conquered) {\n  GreedyScore_node[index] = minScore;\n  Visited_node[index] = true;\n  conquered.push(index); // console.log(index);\n\n  var _iteratorNormalCompletion = true;\n  var _didIteratorError = false;\n  var _iteratorError = undefined;\n\n  try {\n    for (var _iterator = grid[index].adjent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n      var adjentVertex = _step.value;\n\n      if (!GreedyScore_node[adjentVertex] && typeof Visited_node[adjentVertex] === \"undefined\") {\n        prev[adjentVertex] = parseInt(index);\n        GreedyScore_node[adjentVertex] = GreedyScore_node[index] + 1;\n      }\n\n      if (GreedyScore_node[adjentVertex] > GreedyScore_node[index] + 1 && typeof Visited_node[adjentVertex] === \"undefined\") {\n        prev[adjentVertex] = parseInt(index);\n        GreedyScore_node[adjentVertex] = GreedyScore_node[index] + 1;\n      }\n    }\n  } catch (err) {\n    _didIteratorError = true;\n    _iteratorError = err;\n  } finally {\n    try {\n      if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n        _iterator[\"return\"]();\n      }\n    } finally {\n      if (_didIteratorError) {\n        throw _iteratorError;\n      }\n    }\n  }\n}\n\nfunction comparingGreedyScore(GreedyScore_node, Visited_node, grid) {\n  var minScore = Number.MAX_SAFE_INTEGER;\n  var index;\n\n  for (var j in GreedyScore_node) {\n    if (GreedyScore_node[j] && GreedyScore_node[j] < minScore && typeof Visited_node[j] === \"undefined\" && !grid[j].isBlocked) {\n      minScore = GreedyScore_node[j];\n      index = j;\n    }\n  }\n\n  return {\n    index: parseInt(index),\n    minScore: minScore\n  };\n}\n\nfunction findShortestPath(shortestPath, prev, start, finish) {\n  // if (typeof finish === \"undefined\") {\n  //   console.log(shortestPath);\n  //   return shortestPath;\n  // }\n  if (typeof finish !== \"undefined\") {\n    findShortestPath(shortestPath, prev, start, prev[finish]);\n    shortestPath.push(finish); // console.log(shortestPath);\n    // console.log(finish);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dijkstra);\n\n//# sourceURL=webpack:///./src/public/js/components/algorithms/dijkstra.js?");

/***/ }),

/***/ "./src/public/js/components/grid/grid.jsx":
/*!************************************************!*\
  !*** ./src/public/js/components/grid/grid.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return grid; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _navbar_navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.jsx */ \"./src/public/js/components/navbar/navbar.jsx\");\n/* harmony import */ var _node_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.jsx */ \"./src/public/js/components/grid/node.jsx\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ \"./node_modules/immutability-helper/index.js\");\n/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _css_grid_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../css/grid.css */ \"./src/public/css/grid.css\");\n/* harmony import */ var _css_grid_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_grid_css__WEBPACK_IMPORTED_MODULE_4__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\n\nvar rows = 25;\nvar columns = 35;\nvar initialStart = Math.floor(rows * columns / 2 - 10);\nvar initialFinish = Math.floor(initialStart + 20);\n\nvar grid =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(grid, _Component);\n\n  function grid(props) {\n    var _this;\n\n    _classCallCheck(this, grid);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(grid).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMouseDown\", function (index) {\n      console.log(\"?\");\n      console.log(_this.state.start === index);\n\n      if (!_this.state.isMouseOnStart && index === _this.state.start) {\n        _this.setState({\n          isMouseOnStart: true\n        });\n      } else if (!_this.state.isMouseClicked && index !== _this.state.start && index !== _this.state.finish && !_this.state.isMouseOnStart && !_this.state.isMouseOnFinish) {\n        _this.setState({\n          isMouseClicked: true\n        });\n      } else if (!_this.state.isMouseClicked && index === _this.state.finish && !_this.state.isMouseOnFinish && !_this.state.isMouseOnStart) {\n        _this.setState({\n          isMouseOnFinish: true\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMouseUp\", function (index) {\n      if (_this.state.isMouseOnStart) {\n        _this.setState({\n          isMouseOnStart: false\n        });\n\n        _this.setState({\n          grid: changeStartorFinish(_this.state.grid, index, _this.state.start),\n          start: index\n        });\n      } else if (_this.state.isMouseClicked) {\n        _this.setState({\n          isMouseClicked: false\n        });\n\n        _this.setState({\n          grid: immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.grid, _defineProperty({}, index, {\n            isBlocked: {\n              $set: true\n            }\n          }))\n        });\n      } else if (_this.state.isMouseOnFinish) {\n        _this.setState({\n          isMouseOnFinish: false\n        });\n\n        _this.setState({\n          grid: changeFinish(_this.state.grid, index, _this.state.finish),\n          finish: index\n        });\n      }\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"handleMouseEnter\", function (index) {\n      if (_this.state.isMouseOnStart) {\n        _this.setState({\n          grid: changeStartorFinish(_this.state.grid, index, _this.state.start),\n          start: index\n        });\n      } else if (_this.state.isMouseClicked && !_this.state.isMouseOnFinish) {\n        console.log(\"tf\");\n\n        _this.setState({\n          grid: immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.grid, _defineProperty({}, index, {\n            isBlocked: {\n              $set: true\n            }\n          }))\n        });\n      } else if (_this.state.isMouseOnFinish) {\n        _this.setState({\n          isMouseOnFinish: false\n        });\n\n        _this.setState({\n          grid: changeFinish(_this.state.grid, index, _this.state.finish),\n          finish: index\n        });\n      }\n    });\n\n    _this.myRef = [];\n    _this.state = {\n      grid: [],\n      start: null,\n      finish: null,\n      shortestPath: [],\n      conqueredNode: [],\n      isVisualized: false,\n      isMouseOnStart: false,\n      isMouseClicked: false,\n      isMouseOnFinish: false\n    };\n    return _this;\n  }\n\n  _createClass(grid, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var grid = init_Grid(rows, columns, initialStart, initialFinish);\n\n      if (!this.state.start) {\n        console.log(\" not   here\");\n        this.setState({\n          start: initialStart,\n          finish: initialFinish\n        });\n      } else {\n        this.setState({\n          start: this.state.start,\n          finish: this.state.finish\n        });\n      }\n\n      this.setState({\n        grid: grid\n      });\n    }\n  }, {\n    key: \"componentDidUpdate\",\n    value: function componentDidUpdate(prevProps) {\n      if (this.state.isVisualized !== prevProps.isVisualized && this.state.isVisualized === true) {\n        var myRef = this.myRef;\n        var k = 0;\n        var _iteratorNormalCompletion = true;\n        var _didIteratorError = false;\n        var _iteratorError = undefined;\n\n        try {\n          for (var _iterator = this.state.conqueredNode[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {\n            var i = _step.value;\n            k++;\n            setTimeout(function (myRef, i) {\n              myRef[i].classList.replace(\"node-normal\", \"node-conquered\");\n            }, k * 50, myRef, i); // this.myRef[i].classList.add(\"node-path\");\n          }\n        } catch (err) {\n          _didIteratorError = true;\n          _iteratorError = err;\n        } finally {\n          try {\n            if (!_iteratorNormalCompletion && _iterator[\"return\"] != null) {\n              _iterator[\"return\"]();\n            }\n          } finally {\n            if (_didIteratorError) {\n              throw _iteratorError;\n            }\n          }\n        }\n\n        var j = 0;\n        var shortestPath = this.state.shortestPath;\n        var length = this.state.conqueredNode.length;\n        setTimeout(function (shortestPath) {\n          var _iteratorNormalCompletion2 = true;\n          var _didIteratorError2 = false;\n          var _iteratorError2 = undefined;\n\n          try {\n            for (var _iterator2 = shortestPath[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {\n              var i = _step2.value;\n              j++;\n              setTimeout(function (myRef, i) {\n                myRef[i].classList.replace(\"node-conquered\", \"node-path\");\n              }, j * 40, myRef, i);\n            }\n          } catch (err) {\n            _didIteratorError2 = true;\n            _iteratorError2 = err;\n          } finally {\n            try {\n              if (!_iteratorNormalCompletion2 && _iterator2[\"return\"] != null) {\n                _iterator2[\"return\"]();\n              }\n            } finally {\n              if (_didIteratorError2) {\n                throw _iteratorError2;\n              }\n            }\n          }\n        }, length * 50, shortestPath);\n      } else {\n        return false;\n      }\n    }\n  }, {\n    key: \"setStart\",\n    value: function setStart(start) {\n      this.setState({\n        start: start\n      });\n    }\n  }, {\n    key: \"setPath\",\n    value: function setPath(shortestPath, conqueredNode) {\n      this.setState({\n        shortestPath: shortestPath,\n        conqueredNode: conqueredNode\n      });\n    }\n  }, {\n    key: \"setVisualize\",\n    value: function setVisualize(isVisualized) {\n      if (this.state.isVisualized === false) {\n        this.setState({\n          isVisualized: isVisualized\n        });\n      }\n    }\n  }, {\n    key: \"isEqual\",\n    value: function isEqual(state, prevState) {\n      if (state.length !== prevState.length) {\n        return false;\n      } else {\n        return;\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this2 = this;\n\n      var _this$state = this.state,\n          grid = _this$state.grid,\n          shortestPath = _this$state.shortestPath,\n          conqueredNode = _this$state.conqueredNode;\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_navbar_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        state: this.state,\n        setVisualize: this.setVisualize.bind(this),\n        setPath: this.setPath.bind(this)\n      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"grid\"\n      }, this.state.grid.map(function (adjencyVertex, index) {\n        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          key: index,\n          index: index,\n          ref: function ref(_ref) {\n            _this2.myRef[index] = _ref;\n          },\n          node: adjencyVertex,\n          handleMouseDown: _this2.handleMouseDown,\n          handleMouseUp: _this2.handleMouseUp,\n          handleMouseEnter: _this2.handleMouseEnter\n        });\n      })));\n    }\n  }]);\n\n  return grid;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\nfunction init_Grid(rows, columns, initialStart, initialFinish) {\n  var array = [];\n  var maximum = maximumNode(rows, columns);\n  var k = 1;\n\n  for (var i = 1; i <= rows; i++) {\n    for (var j = 1; j <= columns; j++) {\n      var adjencyVertexes = addEdges(k, rows, columns, maximum);\n\n      if (k !== initialStart) {\n        array[k] = {\n          adjent: adjencyVertexes,\n          isBlocked: false\n        };\n      } else {\n        array[k] = {\n          adjent: adjencyVertexes,\n          start: true,\n          isBlocked: false\n        };\n      }\n\n      if (k === initialFinish) {\n        array[k].finish = true;\n      }\n\n      k++;\n    }\n  }\n\n  return array;\n}\n\nfunction addEdges(k, rows, column, maximum) {\n  var adjencyVertex = [];\n\n  if (k + column <= maximum) {\n    adjencyVertex.push(k + column);\n  }\n\n  if (k - column > 0) {\n    adjencyVertex.push(k - column);\n  }\n\n  if (k % column === 0) {\n    adjencyVertex.push(k - 1);\n  } else if (k % column === 1) {\n    adjencyVertex.push(k + 1);\n  } else {\n    adjencyVertex.push(k + 1);\n    adjencyVertex.push(k - 1);\n  }\n\n  return adjencyVertex;\n}\n\nfunction maximumNode(rows, columns) {\n  return rows * columns;\n}\n\nfunction changeStartorFinish(grid, index, oldindex) {\n  console.log(\"change grid\");\n  var newGrid = Object.assign([], grid);\n  newGrid[oldindex].start = false;\n  newGrid[index].start = true;\n  return newGrid;\n}\n\nfunction changeFinish(grid, index, oldindex) {\n  console.log(\"change grid\");\n  var newGrid = Object.assign([], grid);\n  newGrid[oldindex].finish = false;\n  newGrid[index].finish = true;\n  return newGrid;\n}\n\nfunction addBlocktoGrid(grid, index) {\n  console.log(\"add block\"); // let newGrid = Object.assign([], grid);\n\n  var newGrid = immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(grid, _defineProperty({}, index, {\n    isBlocked: {\n      $set: true\n    }\n  })); // if (!newGrid[index].start) {\n  //   newGrid[index].isBlocked = true;\n  // }\n\n  return newGrid;\n}\n\n//# sourceURL=webpack:///./src/public/js/components/grid/grid.jsx?");

/***/ }),

/***/ "./src/public/js/components/grid/node.jsx":
/*!************************************************!*\
  !*** ./src/public/js/components/grid/node.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _css_node_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css/node.css */ \"./src/public/css/node.css\");\n/* harmony import */ var _css_node_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_node_css__WEBPACK_IMPORTED_MODULE_1__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\nvar node = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {\n  var node = _ref.node,\n      handleMouseDown = _ref.handleMouseDown,\n      handleMouseUp = _ref.handleMouseUp,\n      handleMouseEnter = _ref.handleMouseEnter,\n      index = _ref.index;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(node.start),\n      _useState2 = _slicedToArray(_useState, 2),\n      isStart = _useState2[0],\n      setStart = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(node.finish),\n      _useState4 = _slicedToArray(_useState3, 2),\n      isFinish = _useState4[0],\n      setFinish = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(node.isBlocked),\n      _useState6 = _slicedToArray(_useState5, 2),\n      isBlocked = _useState6[0],\n      setBlock = _useState6[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    setStart(node.start);\n    setBlock(node.isBlocked);\n    setFinish(node.finish);\n  }, [node.start, node.finish, node.isBlocked]); //\n  // let state = { isStart: false };\n  // if (node.start) {\n  //   setState(prevState => ({ isStart: true }));\n  // }\n  // isStart ? \"start\" : null\n\n  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    ref: ref,\n    className: \"node-\".concat(startOrFinish(isStart, isFinish, isBlocked)),\n    onMouseDown: function onMouseDown() {\n      console.log(\"here\");\n      handleMouseDown(index);\n    },\n    onMouseUp: function onMouseUp() {\n      handleMouseUp(index);\n    },\n    onMouseEnter: function onMouseEnter() {\n      handleMouseEnter(index);\n    }\n  });\n});\n\nfunction startOrFinish(isStart, isFinish, isBlocked) {\n  if (isStart) {\n    return \"start\";\n  } else if (isFinish) {\n    return \"finish\";\n  } else if (isBlocked) {\n    return \"blocked\";\n  } else {\n    return \"normal\";\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (node);\n\n//# sourceURL=webpack:///./src/public/js/components/grid/node.jsx?");

/***/ }),

/***/ "./src/public/js/components/navbar/navbar.jsx":
/*!****************************************************!*\
  !*** ./src/public/js/components/navbar/navbar.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return navbar; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/dijkstra */ \"./src/public/js/components/algorithms/dijkstra.js\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/navbar.css */ \"./src/public/css/navbar.css\");\n/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_2__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\n\n\nvar navbar =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(navbar, _Component);\n\n  function navbar(props) {\n    var _this;\n\n    _classCallCheck(this, navbar);\n\n    _this = _possibleConstructorReturn(this, _getPrototypeOf(navbar).call(this, props));\n\n    _defineProperty(_assertThisInitialized(_this), \"handleDropdownButton\", function (event) {\n      console.log(event);\n\n      _this.setState({\n        selectValue: event.target.value\n      });\n    });\n\n    _defineProperty(_assertThisInitialized(_this), \"onVisualize\", function () {\n      var _this$props$state = _this.props.state,\n          grid = _this$props$state.grid,\n          start = _this$props$state.start,\n          finish = _this$props$state.finish,\n          shortestPath = _this$props$state.shortestPath;\n\n      if (_this.state.selectValue === \"Dijkstra\") {\n        var _dijkstra = Object(_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(grid, start, finish, 25 * 35),\n            path = _dijkstra.path,\n            conqueredNode = _dijkstra.conqueredNode;\n\n        console.log(conqueredNode);\n\n        _this.props.setPath(path, conqueredNode);\n\n        _this.props.setVisualize(true);\n      } // console.log(visitedNode);\n\n    });\n\n    _this.state = {\n      selectValue: \"Algorithms\"\n    };\n    return _this;\n  }\n\n  _createClass(navbar, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"main-nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"upper-nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \"PathFinder\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"ul\", {\n        className: \"upper-nav-list\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"select\", {\n        value: this.state.selectValue,\n        onChange: this.handleDropdownButton\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        hidden: true,\n        value: \"Algorithms\"\n      }, \"Algorithms\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Dijkstra\"\n      }, \"Dijkstra\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"A*\"\n      }, \"A*\"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"option\", {\n        value: \"Breath-first search\"\n      }, \"Breath-first search\"))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"button\", {\n        onClick: this.onVisualize\n      }, \"Visualize\")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"li\", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n        href: \"#\"\n      }, \"Clear walls\")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"lower-nav\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, \" hellp\")));\n    }\n  }]);\n\n  return navbar;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]);\n\n\n\n//# sourceURL=webpack:///./src/public/js/components/navbar/navbar.jsx?");

/***/ }),

/***/ "./src/public/js/main.js":
/*!*******************************!*\
  !*** ./src/public/js/main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return App; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_grid_grid_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grid/grid.jsx */ \"./src/public/js/components/grid/grid.jsx\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/main.css */ \"./src/public/css/main.css\");\n/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _typeof(obj) { if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }; } return _typeof(obj); }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === \"object\" || typeof call === \"function\")) { return call; } return _assertThisInitialized(self); }\n\nfunction _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return self; }\n\nfunction _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function\"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }\n\nfunction _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }\n\n\n\n\n\n\nvar App =\n/*#__PURE__*/\nfunction (_Component) {\n  _inherits(App, _Component);\n\n  function App() {\n    _classCallCheck(this, App);\n\n    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));\n  }\n\n  _createClass(App, [{\n    key: \"render\",\n    value: function render() {\n      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n        className: \"body\"\n      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_grid_jsx__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null));\n    }\n  }]);\n\n  return App;\n}(react__WEBPACK_IMPORTED_MODULE_0__[\"Component\"]); // state={this.state}\n// handleMouseDown={this.handleMouseDown}\n// handleMouseUp={this.handleMouseUp}\n// handleMouseEnter={this.handleMouseEnter}\n// isVisualized={this.state.isVisualized}\n// path={{ shortestPath, conqueredNode }}\n// adjencyVertexes={grid}\n// onChange={this.setGrid.bind(this)}\n// setStart={this.setStart.bind(this)}\n// setStart_Finish={this.setStart_Finish.bind(this)}\n\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack:///./src/public/js/main.js?");

/***/ })

/******/ });