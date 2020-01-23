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
/******/ 	__webpack_require__.p = "./";
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
/******/ 	deferredModules.push(["./src/public/js/main.jsx","vendor","styles"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/public/image/block.png":
/*!************************************!*\
  !*** ./src/public/image/block.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVAAAAEYAQMAAAAwLTybAAAAA1BMVEVLS0spNlEtAAAAIklEQVQYGe3BAQ0AAADCIPunfg43YAAAAAAAAAAAAAAAcCQvCAAB4tmHWwAAAABJRU5ErkJggg==");

/***/ }),

/***/ "./src/public/image/conquered.png":
/*!****************************************!*\
  !*** ./src/public/image/conquered.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AQMAAADxGE3JAAAAA1BMVEWt2OZ2UvuzAAAANUlEQVR42u3BMQEAAADCoPVP7WENoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABufQAAAYMiqM0AAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/public/image/finish.png":
/*!*************************************!*\
  !*** ./src/public/image/finish.png ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f07683461a85fdd1a24de0ced5bd376f.png");

/***/ }),

/***/ "./src/public/image/instruction.gif":
/*!******************************************!*\
  !*** ./src/public/image/instruction.gif ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c7d57f006363d4f67f45ef9f8578309e.gif");

/***/ }),

/***/ "./src/public/image/path.png":
/*!***********************************!*\
  !*** ./src/public/image/path.png ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0AQMAAADxGE3JAAAAA1BMVEX9/WYfpYbEAAAANUlEQVR42u3BMQEAAADCoPVP7WENoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABufQAAAYMiqM0AAAAASUVORK5CYII=");

/***/ }),

/***/ "./src/public/image/start.png":
/*!************************************!*\
  !*** ./src/public/image/start.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,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");

/***/ }),

/***/ "./src/public/js/components/algorithms/Astar.js":
/*!******************************************************!*\
  !*** ./src/public/js/components/algorithms/Astar.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//A* algorithms using Manhattan distance (approximate heuristics)
// source: GeekForGeek. Implementation was in C++
function A_star_pathfinding(grid, start, finish, numberOfNodes, rows, columns) {
  var openList = {}; //unconquered

  var conqueredList = [];
  var cellDetails = Object.assign([], grid);
  var closedList = []; //conquered

  for (var i = 1; i <= numberOfNodes; i++) {
    cellDetails[i].f = Number.MAX_SAFE_INTEGER;
    cellDetails[i].g = Number.MAX_SAFE_INTEGER;
    cellDetails[i].h = Number.MAX_SAFE_INTEGER;
    cellDetails[i].parent = -1;
  } // Initialising the parametter of the starting node


  cellDetails[start].f = 0.0;
  cellDetails[start].g = 0.0;
  cellDetails[start].h = 0.0;
  cellDetails[start].parent = start; // Add starting node with  to the open list

  openList[start] = 0.0;

  while (!isEmpty(openList)) {
    //pop the start node off of the openList
    var beginPointer = parseInt(findMinimum(openList));
    delete openList[beginPointer]; // add this vertex from the closed list

    closedList[beginPointer] = true; // generate all (the successors of the cell)
    // To store the 'g' 'h' and 'f' of the successor

    var gNew = void 0,
        hNew = void 0,
        fNew = void 0; //North

    if (isValid(beginPointer - columns, numberOfNodes)) {
      if (isDestination(beginPointer - columns, finish)) {
        cellDetails[beginPointer - columns].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList); // if the successor is already on the closed list or if it is blocked
      } else if (closedList[beginPointer - columns] !== true && cellDetails[beginPointer - columns].isBlocked === false) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer - columns, finish, rows, columns);
        fNew = gNew + hNew; // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.

        if (cellDetails[beginPointer - columns].f === Number.MAX_SAFE_INTEGER || cellDetails[beginPointer - columns].f > fNew) {
          conqueredList.push(beginPointer - columns);
          openList[beginPointer - columns] = fNew;
          cellDetails[beginPointer - columns].f = fNew;
          cellDetails[beginPointer - columns].g = gNew;
          cellDetails[beginPointer - columns].h = hNew;
          cellDetails[beginPointer - columns].parent = beginPointer;
        }
      }
    } // South


    if (isValid(beginPointer + columns, numberOfNodes)) {
      if (isDestination(beginPointer + columns, finish)) {
        cellDetails[beginPointer + columns].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList); // if the successor is already on the closed list or if it is blocked
      } else if (closedList[beginPointer + columns] !== true && cellDetails[beginPointer + columns].isBlocked === false) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer + columns, finish, rows, columns);
        fNew = gNew + hNew; // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.

        if (cellDetails[beginPointer + columns].f === Number.MAX_SAFE_INTEGER || cellDetails[beginPointer + columns].f > fNew) {
          conqueredList.push(beginPointer + columns);
          openList[beginPointer + columns] = fNew;
          cellDetails[beginPointer + columns].f = fNew;
          cellDetails[beginPointer + columns].g = gNew;
          cellDetails[beginPointer + columns].h = hNew;
          cellDetails[beginPointer + columns].parent = beginPointer;
        }
      }
    } //   East


    if (isValid(beginPointer + 1, numberOfNodes) && beginPointer % columns !== 0) {
      if (isDestination(beginPointer + 1, finish)) {
        cellDetails[beginPointer + 1].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList); // if the successor is already on the closed list or if it is blocked
      } else if (closedList[beginPointer + 1] !== true && cellDetails[beginPointer + 1].isBlocked === false) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer + 1, finish, rows, columns);
        fNew = gNew + hNew; // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.

        if (cellDetails[beginPointer + 1].f === Number.MAX_SAFE_INTEGER || cellDetails[beginPointer + 1].f > fNew) {
          conqueredList.push(beginPointer + 1);
          openList[beginPointer + 1] = fNew;
          cellDetails[beginPointer + 1].f = fNew;
          cellDetails[beginPointer + 1].g = gNew;
          cellDetails[beginPointer + 1].h = hNew;
          cellDetails[beginPointer + 1].parent = beginPointer;
        }
      }
    } // west


    if (isValid(beginPointer - 1, numberOfNodes) && beginPointer % columns !== 1) {
      if (isDestination(beginPointer - 1, finish)) {
        cellDetails[beginPointer - 1].parent = beginPointer;
        return tracePath(cellDetails, finish, conqueredList); // if the successor is already on the closed list or if it is blocked
      } else if (closedList[beginPointer - 1] !== true && cellDetails[beginPointer - 1].isBlocked === false) {
        gNew = cellDetails[beginPointer].g + 1;
        hNew = calculateHValue(beginPointer - 1, finish, rows, columns);
        fNew = gNew + hNew; // If it isn’t on the open list, add it to
        // the open list. Make the current square
        // the parent of this square. Record the
        // f, g, and h costs of the square cell
        //                OR
        // If it is on the open list already, check
        // to see if this path to that square is better,
        // using 'f' cost as the measure.

        if (cellDetails[beginPointer - 1].f === Number.MAX_SAFE_INTEGER || cellDetails[beginPointer - 1].f > fNew) {
          conqueredList.push(beginPointer - 1);
          openList[beginPointer - 1] = fNew;
          cellDetails[beginPointer - 1].f = fNew;
          cellDetails[beginPointer - 1].g = gNew;
          cellDetails[beginPointer - 1].h = hNew;
          cellDetails[beginPointer - 1].parent = beginPointer;
        }
      }
    } // console.log("delete");

  }

  return {
    path: [],
    conqueredNode: conqueredList
  };
} // Calculate function to calculate Manhattan distance


function calculateHValue(node, finish, rows, columns) {
  var rowNumber = Math.ceil(node / columns);
  var finishRowNumber = Math.ceil(finish / columns);
  var columnNumber = node - Math.floor(node / columns) * columns;
  var finishColumnNumber = finish - Math.floor(finish / columns) * columns;
  return Math.abs(rowNumber - finishRowNumber) + Math.abs(columnNumber - finishColumnNumber);
}

function isDestination(node, finish) {
  if (node !== finish) {
    return false;
  } else {
    return true;
  }
}

function isValid(node, numberOfNodes) {
  if (node > 0 && node < numberOfNodes) {
    return true;
  } else {
    return false;
  }
}

function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      return false;
    }
  }

  return true;
}

function findMinimum(openList) {
  var min = Number.MAX_SAFE_INTEGER;
  var index;

  for (var i in openList) {
    if (openList[i] <= min) {
      min = openList[i];
      index = i;
    }
  }

  return index;
}

function tracePath(cellDetails, dest, conqueredList) {
  var pos = dest;
  var Path = [];

  while (!(cellDetails[pos].parent == pos)) {
    Path.push(pos);
    pos = cellDetails[pos].parent;
  }

  var reversedPath = Path.reverse();
  return {
    path: reversedPath,
    conqueredNode: conqueredList
  };
}

/* harmony default export */ __webpack_exports__["default"] = (A_star_pathfinding);

/***/ }),

/***/ "./src/public/js/components/algorithms/Breadth-first-search.js":
/*!*********************************************************************!*\
  !*** ./src/public/js/components/algorithms/Breadth-first-search.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dataStructure_Queue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../dataStructure/Queue */ "./src/public/js/components/dataStructure/Queue.js");
 // Breadth first search

function Breadth_first_search(grid, start, finish, numberOfNodes, rows, columns) {
  var conqueredNode = [];
  var closedList = {};
  var cellDetails = Object.assign([], grid);
  closedList[start] = 0;
  var queue = new _dataStructure_Queue__WEBPACK_IMPORTED_MODULE_0__["default"]();
  queue.enqueue(start);

  while (!queue.isEmpty()) {
    var v = queue.dequeue();
    conqueredNode.push(v);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = cellDetails[v].adjent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        if (cellDetails[i].isBlocked === false) {
          if (!closedList[i]) {
            closedList[i] = v;
            queue.enqueue(i);

            if (i === finish) {
              var path = tracePath(closedList, start, finish);
              return {
                path: path,
                conqueredNode: conqueredNode
              };
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  }

  return {
    path: [],
    conqueredNode: conqueredNode
  };
}

function tracePath(closedList, start, finish) {
  var path = [];
  var i = finish;

  while (i !== start) {
    path.push(closedList[i]);
    i = closedList[i];
  }

  var reversedPath = path.reverse();
  return reversedPath;
}

/* harmony default export */ __webpack_exports__["default"] = (Breadth_first_search);

/***/ }),

/***/ "./src/public/js/components/algorithms/Depth-first-search.js":
/*!*******************************************************************!*\
  !*** ./src/public/js/components/algorithms/Depth-first-search.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* Depth-first search recursion version*/
var foundDestination = false;

function search(grid, start, finish, numberOfNode, rows, columns) {
  var closedList = {};
  var conqueredList = [];
  closedList[start] = 0;
  depth_First_Search(start, grid, start, finish, closedList, conqueredList);

  if (foundDestination === true) {
    var path = tracePath(closedList, start, finish).reverse();
    return {
      path: path,
      conqueredNode: path
    };
  } else {
    return {
      path: [],
      conqueredNode: conqueredList
    };
  }
}

function depth_First_Search(index, grid, start, finish, closedList, conqueredList) {
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = grid[index].adjent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var i = _step.value;

      if (!closedList[i] && grid[i].isBlocked === false) {
        closedList[i] = index;
        conqueredList.push(i);

        if (index === finish) {
          foundDestination = true;
        }

        if (index !== finish) {
          depth_First_Search(i, grid, start, finish, closedList, conqueredList);
        }
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function tracePath(closedList, start, finish) {
  var path = [];
  var i = finish;
  var j = 1;

  while (i !== start && j <= 800) {
    path.push(closedList[i]);
    i = closedList[i];
    j++;
  }

  return path;
}

/* harmony default export */ __webpack_exports__["default"] = (search);

/***/ }),

/***/ "./src/public/js/components/algorithms/dijkstra.js":
/*!*********************************************************!*\
  !*** ./src/public/js/components/algorithms/dijkstra.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function Dijkstra(grid, start, finish, numberOfNodes) {
  var GreedyScore_node = [];
  var Visited_node = {};
  var prev = {};
  var conquered = [];
  conquerNode(grid, GreedyScore_node, Visited_node, start, 1, prev, conquered);
  var k = 1;

  while (k < numberOfNodes - 1) {
    var _comparingGreedyScore = comparingGreedyScore(GreedyScore_node, Visited_node, grid),
        index = _comparingGreedyScore.index,
        minScore = _comparingGreedyScore.minScore;

    if (index === finish) {
      var shortestPath = [];
      findShortestPath(shortestPath, prev, start, finish);
      return {
        path: shortestPath,
        conqueredNode: conquered
      };
    }

    if (index) {
      conquerNode(grid, GreedyScore_node, Visited_node, index, minScore, prev, conquered);
    } // console.log(index);


    k++;
  }

  return {
    path: [],
    conqueredNode: conquered
  };
}

function conquerNode(grid, GreedyScore_node, Visited_node, index, minScore, prev, conquered) {
  GreedyScore_node[index] = minScore;
  Visited_node[index] = true;
  conquered.push(index); // console.log(index);

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = grid[index].adjent[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var adjentVertex = _step.value;

      if (!GreedyScore_node[adjentVertex] && typeof Visited_node[adjentVertex] === "undefined") {
        prev[adjentVertex] = parseInt(index);
        GreedyScore_node[adjentVertex] = GreedyScore_node[index] + 1;
      }

      if (GreedyScore_node[adjentVertex] > GreedyScore_node[index] + 1 && typeof Visited_node[adjentVertex] === "undefined") {
        prev[adjentVertex] = parseInt(index);
        GreedyScore_node[adjentVertex] = GreedyScore_node[index] + 1;
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }
}

function comparingGreedyScore(GreedyScore_node, Visited_node, grid) {
  var minScore = Number.MAX_SAFE_INTEGER;
  var index;

  for (var j in GreedyScore_node) {
    if (GreedyScore_node[j] && GreedyScore_node[j] < minScore && typeof Visited_node[j] === "undefined" && !grid[j].isBlocked) {
      minScore = GreedyScore_node[j];
      index = j;
    }
  }

  return {
    index: parseInt(index),
    minScore: minScore
  };
}

function findShortestPath(shortestPath, prev, start, finish) {
  if (typeof finish !== "undefined") {
    findShortestPath(shortestPath, prev, start, prev[finish]);
    shortestPath.push(finish);
  }
}

/* harmony default export */ __webpack_exports__["default"] = (Dijkstra);

/***/ }),

/***/ "./src/public/js/components/dataStructure/Queue.js":
/*!*********************************************************!*\
  !*** ./src/public/js/components/dataStructure/Queue.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* A queue object */
var Queue =
/*#__PURE__*/
function () {
  function Queue() {
    _classCallCheck(this, Queue);

    this._items = [];
  }

  _createClass(Queue, [{
    key: "enqueue",
    value: function enqueue(obj) {
      // Push items into the queue
      this._items.push(obj);
    }
  }, {
    key: "dequeue",
    value: function dequeue() {
      return this._items.shift();
    }
  }, {
    key: "peek",
    value: function peek() {
      return this._items[0];
    }
  }, {
    key: "isEmpty",
    value: function isEmpty() {
      return this._items.length === 0;
    }
  }]);

  return Queue;
}();

/* harmony default export */ __webpack_exports__["default"] = (Queue);

/***/ }),

/***/ "./src/public/js/components/grid/grid.jsx":
/*!************************************************!*\
  !*** ./src/public/js/components/grid/grid.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return grid; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _navbar_navbar_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../navbar/navbar.jsx */ "./src/public/js/components/navbar/navbar.jsx");
/* harmony import */ var _node_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node.jsx */ "./src/public/js/components/grid/node.jsx");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! immutability-helper */ "./node_modules/immutability-helper/index.js");
/* harmony import */ var immutability_helper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(immutability_helper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_grid_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../css/grid.css */ "./src/public/css/grid.css");
/* harmony import */ var _css_grid_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_grid_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var rows = 20;
var columns = 40;
var initialStart = Math.floor(rows * columns / 2 + 10);
var initialFinish = Math.floor(initialStart + 20);

var grid =
/*#__PURE__*/
function (_Component) {
  _inherits(grid, _Component);

  function grid(props) {
    var _this;

    _classCallCheck(this, grid);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(grid).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "handleMouseDown", function (index) {
      if (!_this.state.isVisualized) {
        if (!_this.state.isMouseOnStart && index === _this.state.start) {
          _this.setState({
            isMouseOnStart: true
          });
        } else if (!_this.state.isMouseClicked && index !== _this.state.start && index !== _this.state.finish && !_this.state.isMouseOnStart && !_this.state.isMouseOnFinish) {
          _this.setState({
            isMouseClicked: true
          });
        } else if (!_this.state.isMouseClicked && index === _this.state.finish && !_this.state.isMouseOnFinish && !_this.state.isMouseOnStart) {
          _this.setState({
            isMouseOnFinish: true
          });

          _this.setState({
            grid: immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.grid, _defineProperty({}, index, {
              isBlocked: {
                $set: true
              }
            }))
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseUp", function (index) {
      if (!_this.state.isVisualized) {
        if (_this.state.isMouseOnStart) {
          _this.setState({
            isMouseOnStart: false
          });

          _this.setState({
            grid: changeStartorFinish(_this.state.grid, index, _this.state.start),
            start: index
          });
        } else if (_this.state.isMouseClicked) {
          _this.setState({
            isMouseClicked: false
          });

          _this.setState({
            grid: immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.grid, _defineProperty({}, index, {
              isBlocked: {
                $set: true
              }
            }))
          });
        } else if (_this.state.isMouseOnFinish) {
          _this.setState({
            isMouseOnFinish: false
          });

          _this.setState({
            grid: changeFinish(_this.state.grid, index, _this.state.finish),
            finish: index
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleMouseEnter", function (index) {
      if (!_this.state.isVisualized) {
        if (_this.state.isMouseOnStart) {
          _this.setState({
            grid: changeStartorFinish(_this.state.grid, index, _this.state.start),
            start: index
          });
        } else if (_this.state.isMouseOnFinish) {
          // this.setState({ isMouseOnFinish: false });
          _this.setState({
            grid: changeFinish(_this.state.grid, index, _this.state.finish),
            finish: index
          });
        } else if (_this.state.isMouseClicked && !_this.state.isMouseOnFinish) {
          _this.setState({
            grid: immutability_helper__WEBPACK_IMPORTED_MODULE_3___default()(_this.state.grid, _defineProperty({}, index, {
              isBlocked: {
                $set: true
              }
            }))
          });
        }
      }
    });

    _this.myRef = [];
    _this.state = {
      rows: null,
      columns: null,
      grid: [],
      start: null,
      finish: null,
      shortestPath: [],
      conqueredNode: [],
      isVisualized: false,
      isMouseOnStart: false,
      isMouseClicked: false,
      isMouseOnFinish: false
    };
    return _this;
  }

  _createClass(grid, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var grid = init_Grid(rows, columns, initialStart, initialFinish);

      if (!this.state.start) {
        this.setState({
          start: initialStart,
          finish: initialFinish
        });
      } else {
        this.setState({
          start: this.state.start,
          finish: this.state.finish
        });
      }

      this.setState({
        rows: 20,
        columns: 40
      });
      this.setState({
        grid: grid
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.state.isVisualized !== prevProps.isVisualized && this.state.isVisualized === true) {
        var self = this;
        var myRef = this.myRef;
        var k = 0;
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.state.conqueredNode[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;
            k++;
            setTimeout(function (myRef, i) {
              myRef[i].classList.replace("node-normal", "node-conquered");
            }, k * 50, myRef, i); // this.myRef[i].classList.add("node-path");
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        var j = 0;
        var shortestPath = this.state.shortestPath;
        var length = this.state.conqueredNode.length;
        setTimeout(function (shortestPath) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = shortestPath[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var i = _step2.value;
              j++;
              setTimeout(function (myRef, i) {
                myRef[i].classList.replace("node-conquered", "node-path");
              }, j * 40, myRef, i);
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          self.setState({
            isVisualized: false
          });
        }, length * 50, shortestPath);
      }
    }
  }, {
    key: "resetVisualize",
    value: function resetVisualize() {
      if (this.state.isVisualized === false) {
        var myRef = this.myRef;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.state.conqueredNode[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var i = _step3.value;
            myRef[i].classList.replace("node-conquered", "node-normal");
            myRef[i].classList.replace("node-path", "node-normal");
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    }
  }, {
    key: "clearWalls",
    value: function clearWalls() {
      if (this.state.isVisualized === false) {
        var myRef = this.myRef;
        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = this.state.conqueredNode[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var _i = _step4.value;

            myRef[_i].classList.replace("node-conquered", "node-normal");

            myRef[_i].classList.replace("node-path", "node-normal");
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
              _iterator4["return"]();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }

        for (var i = 1; i < this.state.grid.length; i++) {
          myRef[i].classList.replace("node-blocked", "node-normal"); // this.setState({
          //   grid: update(this.state.grid, {
          //     [i]: { isBlocked: { $set: false } }
          //   })
          // });

          deleteBlocktoGrid(this.state.grid, i);
        }
      }
    }
  }, {
    key: "setStart",
    value: function setStart(start) {
      this.setState({
        start: start
      });
    }
  }, {
    key: "setPath",
    value: function setPath(shortestPath, conqueredNode) {
      this.setState({
        shortestPath: shortestPath,
        conqueredNode: conqueredNode
      });
    }
  }, {
    key: "setVisualize",
    value: function setVisualize(isVisualized) {
      this.setState({
        isVisualized: isVisualized
      });
    }
  }, {
    key: "isEqual",
    value: function isEqual(state, prevState) {
      if (state.length !== prevState.length) {
        return false;
      } else {
        return;
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          grid = _this$state.grid,
          shortestPath = _this$state.shortestPath,
          conqueredNode = _this$state.conqueredNode;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_navbar_navbar_jsx__WEBPACK_IMPORTED_MODULE_1__["default"], {
        state: this.state,
        setVisualize: this.setVisualize.bind(this),
        setPath: this.setPath.bind(this),
        resetVisualize: this.resetVisualize.bind(this),
        clearWalls: this.clearWalls.bind(this)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "grid"
      }, this.state.grid.map(function (adjencyVertex, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_node_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], {
          key: index,
          index: index,
          ref: function ref(_ref) {
            _this2.myRef[index] = _ref;
          },
          node: adjencyVertex,
          handleMouseDown: _this2.handleMouseDown,
          handleMouseUp: _this2.handleMouseUp,
          handleMouseEnter: _this2.handleMouseEnter
        });
      })));
    }
  }]);

  return grid;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



function init_Grid(rows, columns, initialStart, initialFinish) {
  var array = [];
  var maximum = maximumNode(rows, columns);
  var k = 1;

  for (var i = 1; i <= rows; i++) {
    for (var j = 1; j <= columns; j++) {
      var adjencyVertexes = addEdges(k, rows, columns, maximum);

      if (k !== initialStart) {
        array[k] = {
          adjent: adjencyVertexes,
          isBlocked: false
        };
      } else {
        array[k] = {
          adjent: adjencyVertexes,
          start: true,
          isBlocked: false
        };
      }

      if (k === initialFinish) {
        array[k].finish = true;
      }

      k++;
    }
  }

  return array;
}

function addEdges(k, rows, column, maximum) {
  var adjencyVertex = [];

  if (k + column <= maximum) {
    adjencyVertex.push(k + column);
  }

  if (k - column > 0) {
    adjencyVertex.push(k - column);
  }

  if (k % column === 0) {
    adjencyVertex.push(k - 1);
  } else if (k % column === 1) {
    adjencyVertex.push(k + 1);
  } else {
    adjencyVertex.push(k + 1);
    adjencyVertex.push(k - 1);
  }

  return adjencyVertex;
}

function maximumNode(rows, columns) {
  return rows * columns;
}

function changeStartorFinish(grid, index, oldindex) {
  var newGrid = Object.assign([], grid);
  newGrid[oldindex].start = false;
  newGrid[index].start = true;
  return newGrid;
}

function changeFinish(grid, index, oldindex) {
  var newGrid = Object.assign([], grid);
  newGrid[oldindex].finish = false;
  newGrid[index].finish = true;
  return newGrid;
}

function deleteBlocktoGrid(grid, index) {
  var newGrid = Object.assign([], grid);
  newGrid[index].isBlocked = false;
  return newGrid;
}

/***/ }),

/***/ "./src/public/js/components/grid/node.jsx":
/*!************************************************!*\
  !*** ./src/public/js/components/grid/node.jsx ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_node_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../css/node.css */ "./src/public/css/node.css");
/* harmony import */ var _css_node_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_node_css__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var node = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (_ref, ref) {
  var node = _ref.node,
      handleMouseDown = _ref.handleMouseDown,
      handleMouseUp = _ref.handleMouseUp,
      handleMouseEnter = _ref.handleMouseEnter,
      index = _ref.index;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(node.start),
      _useState2 = _slicedToArray(_useState, 2),
      isStart = _useState2[0],
      setStart = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(node.finish),
      _useState4 = _slicedToArray(_useState3, 2),
      isFinish = _useState4[0],
      setFinish = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(node.isBlocked),
      _useState6 = _slicedToArray(_useState5, 2),
      isBlocked = _useState6[0],
      setBlock = _useState6[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    setStart(node.start);
    setBlock(node.isBlocked);
    setFinish(node.finish);
  }, [node.start, node.finish, node.isBlocked]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    ref: ref,
    className: "node-".concat(startOrFinish(isStart, isFinish, isBlocked)),
    onMouseDown: function onMouseDown() {
      handleMouseDown(index);
    },
    onMouseUp: function onMouseUp() {
      handleMouseUp(index);
    },
    onMouseEnter: function onMouseEnter() {
      handleMouseEnter(index);
    }
  });
});

function startOrFinish(isStart, isFinish, isBlocked) {
  if (isStart) {
    return "start";
  } else if (isFinish) {
    return "finish";
  } else if (isBlocked) {
    return "blocked";
  } else {
    return "normal";
  }
}

/* harmony default export */ __webpack_exports__["default"] = (node);

/***/ }),

/***/ "./src/public/js/components/instructionModal/modal.jsx":
/*!*************************************************************!*\
  !*** ./src/public/js/components/instructionModal/modal.jsx ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modal; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _image_instruction_gif__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../image/instruction.gif */ "./src/public/image/instruction.gif");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../css/modal.css */ "./src/public/css/modal.css");
/* harmony import */ var _css_modal_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_modal_css__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var modal =
/*#__PURE__*/
function (_Component) {
  _inherits(modal, _Component);

  function modal(props) {
    var _this;

    _classCallCheck(this, modal);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(modal).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "openModal", function () {
      _this.setState({
        isOpen: false
      });
    });

    _this.state = {
      isOpen: true
    };
    return _this;
  }

  _createClass(modal, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, this.state.isOpen ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-content"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        onClick: this.openModal,
        className: "close"
      }, "\xD7"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "modal-title"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Welcome to Pathfinder ! "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _image_instruction_gif__WEBPACK_IMPORTED_MODULE_1__["default"],
        width: "100"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To Visualize a pathfinding algorithm: Choose an algorithm -> build walls -> click visualize !", " ")))) : null);
    }
  }]);

  return modal;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/public/js/components/navbar/navbar.jsx":
/*!****************************************************!*\
  !*** ./src/public/js/components/navbar/navbar.jsx ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return navbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../algorithms/dijkstra */ "./src/public/js/components/algorithms/dijkstra.js");
/* harmony import */ var _algorithms_Astar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../algorithms/Astar */ "./src/public/js/components/algorithms/Astar.js");
/* harmony import */ var _algorithms_Breadth_first_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../algorithms/Breadth-first-search */ "./src/public/js/components/algorithms/Breadth-first-search.js");
/* harmony import */ var _algorithms_Depth_first_search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../algorithms/Depth-first-search */ "./src/public/js/components/algorithms/Depth-first-search.js");
/* harmony import */ var _image_start_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../image/start.png */ "./src/public/image/start.png");
/* harmony import */ var _image_finish_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../image/finish.png */ "./src/public/image/finish.png");
/* harmony import */ var _image_block_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../image/block.png */ "./src/public/image/block.png");
/* harmony import */ var _image_conquered_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../image/conquered.png */ "./src/public/image/conquered.png");
/* harmony import */ var _image_path_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../image/path.png */ "./src/public/image/path.png");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../css/navbar.css */ "./src/public/css/navbar.css");
/* harmony import */ var _css_navbar_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_css_navbar_css__WEBPACK_IMPORTED_MODULE_10__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(navbar, _Component);

  function navbar(props) {
    var _this;

    _classCallCheck(this, navbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(navbar).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onDropDown", function () {
      _this.setState({
        isDropDown: !_this.state.isDropDown
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDropdownButton", function (value) {
      _this.setState({
        selectValue: value
      });
    });

    _defineProperty(_assertThisInitialized(_this), "openList", function () {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "option_algorithms"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: function onClick() {
          return _this.handleDropdownButton("Dijkstra");
        }
      }, "Dijkstra"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _this.handleDropdownButton.bind(_assertThisInitialized(_this), "A*")
      }, "A*"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _this.handleDropdownButton.bind(_assertThisInitialized(_this), "Breath-first search")
      }, "Breath-first search"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
        onClick: _this.handleDropdownButton.bind(_assertThisInitialized(_this), "Depth-first search")
      }, "Depth-first search"));
    });

    _defineProperty(_assertThisInitialized(_this), "onVisualize", function () {
      if (!_this.props.state.isVisualized) {
        _this.props.resetVisualize();

        var _this$props$state = _this.props.state,
            grid = _this$props$state.grid,
            _start = _this$props$state.start,
            _finish = _this$props$state.finish,
            rows = _this$props$state.rows,
            columns = _this$props$state.columns,
            shortestPath = _this$props$state.shortestPath;

        if (_this.state.selectValue === "Dijkstra") {
          var _dijkstra = Object(_algorithms_dijkstra__WEBPACK_IMPORTED_MODULE_1__["default"])(grid, _start, _finish, 20 * 40),
              _path = _dijkstra.path,
              conqueredNode = _dijkstra.conqueredNode;

          _this.props.setPath(_path, conqueredNode);

          _this.props.setVisualize(true);
        }

        if (_this.state.selectValue === "A*") {
          var _Astar = Object(_algorithms_Astar__WEBPACK_IMPORTED_MODULE_2__["default"])(grid, _start, _finish, 20 * 40, rows, columns),
              _path2 = _Astar.path,
              _conqueredNode = _Astar.conqueredNode;

          _this.props.setPath(_path2, _conqueredNode);

          _this.props.setVisualize(true);
        }

        if (_this.state.selectValue === "Breath-first search") {
          var _Breadth_first_search = Object(_algorithms_Breadth_first_search__WEBPACK_IMPORTED_MODULE_3__["default"])(grid, _start, _finish, 20 * 40, rows, columns),
              _path3 = _Breadth_first_search.path,
              _conqueredNode2 = _Breadth_first_search.conqueredNode;

          _this.props.setPath(_path3, _conqueredNode2);

          _this.props.setVisualize(true);
        }

        if (_this.state.selectValue === "Depth-first search") {
          var _search = Object(_algorithms_Depth_first_search__WEBPACK_IMPORTED_MODULE_4__["default"])(grid, _start, _finish, 20 * 40, rows, columns),
              _path4 = _search.path,
              _conqueredNode3 = _search.conqueredNode;

          _this.props.setPath(_path4, _conqueredNode3);

          _this.props.setVisualize(true);
        }
      }
    });

    _this.state = {
      selectValue: "Algorithms",
      isDropDown: false
    };
    return _this;
  }

  _createClass(navbar, [{
    key: "render",
    value: function render() {
      var background = this.props.state.isVisualized ? "#fb8c00" : null;
      var background_color = {
        color: background
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "main-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "upper-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "page-title"
      }, "PathFinder"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        className: "upper-nav-list"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        onClick: this.onDropDown,
        className: "dropdown algorithm"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "select"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, this.state.selectValue ? this.state.selectValue : "Algorithms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
        className: "material-icons md-light md-inactive"
      }, " ", "keyboard_arrow_down")), this.state.isDropDown ? this.openList() : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.onVisualize,
        style: background_color
      }, this.props.state.isVisualized ? "Visualizing !" : "Visualize")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        onClick: this.props.clearWalls,
        href: "#"
      }, "Clear walls")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "lower-nav"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _image_start_png__WEBPACK_IMPORTED_MODULE_5__["default"],
        alt: "start"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Start")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _image_finish_png__WEBPACK_IMPORTED_MODULE_6__["default"],
        alt: "finish"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Finish")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _image_path_png__WEBPACK_IMPORTED_MODULE_9__["default"],
        alt: "path"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Path")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _image_block_png__WEBPACK_IMPORTED_MODULE_7__["default"],
        alt: "block"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Block")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: _image_conquered_png__WEBPACK_IMPORTED_MODULE_8__["default"],
        alt: "conquered"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Conquered")))));
    }
  }]);

  return navbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/public/js/main.jsx":
/*!********************************!*\
  !*** ./src/public/js/main.jsx ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_grid_grid_jsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/grid/grid.jsx */ "./src/public/js/components/grid/grid.jsx");
/* harmony import */ var _components_instructionModal_modal_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/instructionModal/modal.jsx */ "./src/public/js/components/instructionModal/modal.jsx");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/main.css */ "./src/public/css/main.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_main_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var App =
/*#__PURE__*/
function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
  }

  _createClass(App, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_grid_grid_jsx__WEBPACK_IMPORTED_MODULE_2__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_instructionModal_modal_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], null));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, null), document.getElementById("root"));

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbWFnZS9ibG9jay5wbmciLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9pbWFnZS9jb25xdWVyZWQucG5nIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvaW1hZ2UvZmluaXNoLnBuZyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2ltYWdlL2luc3RydWN0aW9uLmdpZiIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2ltYWdlL3BhdGgucG5nIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvaW1hZ2Uvc3RhcnQucG5nIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvanMvY29tcG9uZW50cy9hbGdvcml0aG1zL0FzdGFyLmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvanMvY29tcG9uZW50cy9hbGdvcml0aG1zL0JyZWFkdGgtZmlyc3Qtc2VhcmNoLmpzIiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvanMvY29tcG9uZW50cy9hbGdvcml0aG1zL0RlcHRoLWZpcnN0LXNlYXJjaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL2NvbXBvbmVudHMvYWxnb3JpdGhtcy9kaWprc3RyYS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL2NvbXBvbmVudHMvZGF0YVN0cnVjdHVyZS9RdWV1ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL2NvbXBvbmVudHMvZ3JpZC9ncmlkLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL2NvbXBvbmVudHMvZ3JpZC9ub2RlLmpzeCIsIndlYnBhY2s6Ly8vLi9zcmMvcHVibGljL2pzL2NvbXBvbmVudHMvaW5zdHJ1Y3Rpb25Nb2RhbC9tb2RhbC5qc3giLCJ3ZWJwYWNrOi8vLy4vc3JjL3B1YmxpYy9qcy9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuanN4Iiwid2VicGFjazovLy8uL3NyYy9wdWJsaWMvanMvbWFpbi5qc3giXSwibmFtZXMiOlsiQV9zdGFyX3BhdGhmaW5kaW5nIiwiZ3JpZCIsInN0YXJ0IiwiZmluaXNoIiwibnVtYmVyT2ZOb2RlcyIsInJvd3MiLCJjb2x1bW5zIiwib3Blbkxpc3QiLCJjb25xdWVyZWRMaXN0IiwiY2VsbERldGFpbHMiLCJPYmplY3QiLCJhc3NpZ24iLCJjbG9zZWRMaXN0IiwiaSIsImYiLCJOdW1iZXIiLCJNQVhfU0FGRV9JTlRFR0VSIiwiZyIsImgiLCJwYXJlbnQiLCJpc0VtcHR5IiwiYmVnaW5Qb2ludGVyIiwicGFyc2VJbnQiLCJmaW5kTWluaW11bSIsImdOZXciLCJoTmV3IiwiZk5ldyIsImlzVmFsaWQiLCJpc0Rlc3RpbmF0aW9uIiwidHJhY2VQYXRoIiwiaXNCbG9ja2VkIiwiY2FsY3VsYXRlSFZhbHVlIiwicHVzaCIsInBhdGgiLCJjb25xdWVyZWROb2RlIiwibm9kZSIsInJvd051bWJlciIsIk1hdGgiLCJjZWlsIiwiZmluaXNoUm93TnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiZmxvb3IiLCJmaW5pc2hDb2x1bW5OdW1iZXIiLCJhYnMiLCJvYmoiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsIm1pbiIsImluZGV4IiwiZGVzdCIsInBvcyIsIlBhdGgiLCJyZXZlcnNlZFBhdGgiLCJyZXZlcnNlIiwiQnJlYWR0aF9maXJzdF9zZWFyY2giLCJxdWV1ZSIsIlF1ZXVlIiwiZW5xdWV1ZSIsInYiLCJkZXF1ZXVlIiwiYWRqZW50IiwiZm91bmREZXN0aW5hdGlvbiIsInNlYXJjaCIsIm51bWJlck9mTm9kZSIsImRlcHRoX0ZpcnN0X1NlYXJjaCIsImoiLCJEaWprc3RyYSIsIkdyZWVkeVNjb3JlX25vZGUiLCJWaXNpdGVkX25vZGUiLCJwcmV2IiwiY29ucXVlcmVkIiwiY29ucXVlck5vZGUiLCJrIiwiY29tcGFyaW5nR3JlZWR5U2NvcmUiLCJtaW5TY29yZSIsInNob3J0ZXN0UGF0aCIsImZpbmRTaG9ydGVzdFBhdGgiLCJhZGplbnRWZXJ0ZXgiLCJfaXRlbXMiLCJzaGlmdCIsImxlbmd0aCIsImluaXRpYWxTdGFydCIsImluaXRpYWxGaW5pc2giLCJwcm9wcyIsInN0YXRlIiwiaXNWaXN1YWxpemVkIiwiaXNNb3VzZU9uU3RhcnQiLCJzZXRTdGF0ZSIsImlzTW91c2VDbGlja2VkIiwiaXNNb3VzZU9uRmluaXNoIiwidXBkYXRlIiwiJHNldCIsImNoYW5nZVN0YXJ0b3JGaW5pc2giLCJjaGFuZ2VGaW5pc2giLCJteVJlZiIsImluaXRfR3JpZCIsInByZXZQcm9wcyIsInNlbGYiLCJzZXRUaW1lb3V0IiwiY2xhc3NMaXN0IiwicmVwbGFjZSIsImRlbGV0ZUJsb2NrdG9HcmlkIiwicHJldlN0YXRlIiwic2V0VmlzdWFsaXplIiwiYmluZCIsInNldFBhdGgiLCJyZXNldFZpc3VhbGl6ZSIsImNsZWFyV2FsbHMiLCJtYXAiLCJhZGplbmN5VmVydGV4IiwicmVmIiwiaGFuZGxlTW91c2VEb3duIiwiaGFuZGxlTW91c2VVcCIsImhhbmRsZU1vdXNlRW50ZXIiLCJDb21wb25lbnQiLCJhcnJheSIsIm1heGltdW0iLCJtYXhpbXVtTm9kZSIsImFkamVuY3lWZXJ0ZXhlcyIsImFkZEVkZ2VzIiwiY29sdW1uIiwib2xkaW5kZXgiLCJuZXdHcmlkIiwiUmVhY3QiLCJmb3J3YXJkUmVmIiwidXNlU3RhdGUiLCJpc1N0YXJ0Iiwic2V0U3RhcnQiLCJpc0ZpbmlzaCIsInNldEZpbmlzaCIsInNldEJsb2NrIiwidXNlRWZmZWN0Iiwic3RhcnRPckZpbmlzaCIsIm1vZGFsIiwiaXNPcGVuIiwib3Blbk1vZGFsIiwiaW5zdHJ1Y3Rpb24iLCJuYXZiYXIiLCJpc0Ryb3BEb3duIiwidmFsdWUiLCJzZWxlY3RWYWx1ZSIsImhhbmRsZURyb3Bkb3duQnV0dG9uIiwiZGlqa3N0cmEiLCJBc3RhciIsImJhY2tncm91bmQiLCJiYWNrZ3JvdW5kX2NvbG9yIiwiY29sb3IiLCJvbkRyb3BEb3duIiwib25WaXN1YWxpemUiLCJibG9jayIsIkFwcCIsIlJlYWN0RE9NIiwicmVuZGVyIiwi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QUcsRUFBQztBQUF0QixRQURGLEVBRUUsK0VBRkYsQ0FMRixFQVNFLHVFQUNFO0FBQUssV0FBRyxFQUFFOEIsdURBQVY7QUFBZ0IsV0FBRyxFQUFDO0FBQXBCLFFBREYsRUFFRSw2RUFGRixDQVRGLEVBYUUsdUVBQ0U7QUFBSyxXQUFHLEVBQUVvSCx3REFBVjtBQUFpQixXQUFHLEVBQUM7QUFBckIsUUFERixFQUVFLDhFQUZGLENBYkYsRUFpQkUsdUVBQ0U7QUFBSyxXQUFHLEVBQUUvRSw0REFBVjtBQUFxQixXQUFHLEVBQUM7QUFBekIsUUFERixFQUVFLGtGQUZGLENBakJGLENBREYsQ0FqQ0YsQ0FERjtBQTRERDs7OztFQXBLaUM0QywrQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWnBDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRXFCb0MsRzs7Ozs7QUFDbkIsaUJBQWM7QUFBQTs7QUFBQTtBQUViOzs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFLLGlCQUFTLEVBQUM7QUFBZixTQUNFLDJEQUFDLGlFQUFELE9BREYsRUFFRSwyREFBQyw4RUFBRCxPQUZGLENBREY7QUFNRDs7OztFQVo4QnBDLCtDOzs7QUFlakNxQyxnREFBUSxDQUFDQyxNQUFULENBQWdCLDJEQUFDLEdBQUQsT0FBaEIsRUFBeUJDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixNQUF4QixDQUF6QixFIiwiZmlsZSI6ImJ1bmRsZS5iOTlhODg2YTE4ZWYwZDJjNGQzNy5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xuIFx0ZnVuY3Rpb24gd2VicGFja0pzb25wQ2FsbGJhY2soZGF0YSkge1xuIFx0XHR2YXIgY2h1bmtJZHMgPSBkYXRhWzBdO1xuIFx0XHR2YXIgbW9yZU1vZHVsZXMgPSBkYXRhWzFdO1xuIFx0XHR2YXIgZXhlY3V0ZU1vZHVsZXMgPSBkYXRhWzJdO1xuXG4gXHRcdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuIFx0XHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcbiBcdFx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcbiBcdFx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG4gXHRcdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG4gXHRcdFx0fVxuIFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG4gXHRcdH1cbiBcdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG4gXHRcdFx0aWYoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcbiBcdFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRpZihwYXJlbnRKc29ucEZ1bmN0aW9uKSBwYXJlbnRKc29ucEZ1bmN0aW9uKGRhdGEpO1xuXG4gXHRcdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuIFx0XHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcbiBcdFx0fVxuXG4gXHRcdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3RcbiBcdFx0ZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyB8fCBbXSk7XG5cbiBcdFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG4gXHRcdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xuIFx0fTtcbiBcdGZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCkge1xuIFx0XHR2YXIgcmVzdWx0O1xuIFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuIFx0XHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuIFx0XHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuIFx0XHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG4gXHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcbiBcdFx0XHR9XG4gXHRcdFx0aWYoZnVsZmlsbGVkKSB7XG4gXHRcdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG4gXHRcdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcbiBcdFx0XHR9XG4gXHRcdH1cblxuIFx0XHRyZXR1cm4gcmVzdWx0O1xuIFx0fVxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJidW5kbGVcIjogMFxuIFx0fTtcblxuIFx0dmFyIGRlZmVycmVkTW9kdWxlcyA9IFtdO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi4vXCI7XG5cbiBcdHZhciBqc29ucEFycmF5ID0gd2luZG93W1wid2VicGFja0pzb25wXCJdID0gd2luZG93W1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBhZGQgZW50cnkgbW9kdWxlIHRvIGRlZmVycmVkIGxpc3RcbiBcdGRlZmVycmVkTW9kdWxlcy5wdXNoKFtcIi4vc3JjL3B1YmxpYy9qcy9tYWluLmpzeFwiLFwidmVuZG9yXCIsXCJzdHlsZXNcIl0pO1xuIFx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiByZWFkeVxuIFx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG4iLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBVkFBQUFFWUFRTUFBQUF3TFR5YkFBQUFBMUJNVkVWTFMwc3BObEV0QUFBQUlrbEVRVlFZR2UzQkFRMEFBQURDSVB1bmZnNDNZQUFBQUFBQUFBQUFBQUFBY0NRdkNBQUI0dG1IV3dBQUFBQkpSVTVFcmtKZ2dnPT1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFmUUFBQUgwQVFNQUFBRHhHRTNKQUFBQUExQk1WRVd0Mk9aMlV2dXpBQUFBTlVsRVFWUjQydTNCTVFFQUFBRENvUFZQN1dFTm9BQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJ1ZlFBQUFZTWlxTTBBQUFBQVNVVk9SSzVDWUlJPVwiIiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcImYwNzY4MzQ2MWE4NWZkZDFhMjRkZTBjZWQ1YmQzNzZmLnBuZ1wiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJjN2Q1N2YwMDYzNjNkNGY2N2Y0NWVmOWY4NTc4MzA5ZS5naWZcIjsiLCJleHBvcnQgZGVmYXVsdCBcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBZlFBQUFIMEFRTUFBQUR4R0UzSkFBQUFBMUJNVkVYOS9XWWZwWWJFQUFBQU5VbEVRVlI0MnUzQk1RRUFBQURDb1BWUDdXRU5vQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFCdWZRQUFBWU1pcU0wQUFBQUFTVVZPUks1Q1lJST1cIiIsImV4cG9ydCBkZWZhdWx0IFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUJBQUFBQVFBQ0FNQUFBQkl3OXV4QUFBQU0xQk1WRVZIY0V3QkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRRUJBUUVCQVFFQkFRR28weHR3QUFBQUVIUlNUbE1BejkrZnY0QXdFTzlBWUNDUGNLOVF6blhmdHdBQUhPRkpSRUZVR0JudHdRZWlyRGkyUk5FQUpDUmhZLzZqL1dYNmQyZFdQWE5OR2c3c3RRUUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUM4eDl4dXpRSndYbU5yYTg1TCtvTi9ya3NwRFRtdnJZMENFRjFyYTk1UzU2L28wNVp6YXdJUVRadnlscW9mSW0xNWFrVUFqcSt0UzZwK3ZKcVd0UlVCT0taNXoxdnY1K3BUM21jQk9KTFM4bGI5S2pYbHZRakFBY3pUMFBuMSttRWRCZUNOeG5XcmZwKzZyYU1Bdk1FOGJkWHZWN2QxRm9BWEt2dlMremo2WVM4QzhBcnptbnc4YVIwRjRMbkdwZmRSOVVzVGdHZlpoK3BqcThNdUFJKzNEOVVSMUdFWGdFZHFRM1VjZGRnRjRESG1wWGMwZFJrRjRMdksyam1tZnAwRjRCdjJ3WkZ0dXdCOHpaeDdSOWN2c3dCOFd0dDhEdHN1QUo5UjF0N24wZWNpQUI4MEQ5VW5NNHdDOEFGdDh4bWxYUUIrWStwOFZ2MGtBTDh3OVQ2em1vc0EvRkRKMVdkWGN4R0FmeW01K2dwcW5nWGdUc25WbHpITUF2QmZKVmRmU2MxRkFQNVNjdlhWMUZ3RVFKcXFyNmptSXVEcXB0NVgxVThDTHEwbFgxbmZCRnpXdlBucTBpamdra28yN0tFSXVKNnBHbitxV2NERnRNNzRmMzBUY0NGbE1HNXRzNENyV0t0eHIyWUJsekFtNDkrNkp1RDBTalorYkNrQ3pxMzF4cy9VWGNDSmxjWDRsYTBJT0t2V0c3OVdkd0duVkJiajk3WWk0SHhhYjN4RTNRV2NURm1NajlxS2dETVpPK1BqK2liZ1BMTHhPVm5BU1pSa2ZGWTNDemlEdlJxZlZ5Y0I4UzNHMXd4RlFHeHpaM3hWTndxSWJLL0cxOVZKUUZ5TDhUMkRnS0JLTXI2cm13VkVORmJqKzJvVEVNOWtQTVlxSUpyQmVKU2hDSWlrSk9OeHVpSWdqckUzSHFtT0FxSm8xWGlzT2dtSVlUSWVMd3VJWURDZVlSQndlR1V3bnFNckFvNnRkTWF6ZExPQUl4czc0M25xS09DNHhtbzhVeDBGSE5WWWpTZWJCQnpUWkR6ZkpPQ0lKdU1WVmdISE14bXZNUWc0bXRWNGxVSEFzUXpHNnd3Q2ptUXdYbWtRY0J5RDhWcURnS01ZakZjYkJCekRZTHplSU9BSUJ1TWRCZ0h2Tnhqdk1RaDR0Mnk4eXlEZ3ZTYmpmUVlCN3pRWjc3UUllSi9KZUs5SndMczA0OTBtQWU4eFZ1UHRKZ0h2TUZiai9lb280UFZLYnh4QkhRVzhXdW1NWStpTGdCZmJqS1BvaW9DWEdvemoyQVM4MG1vY3lTRGdkU2JqV0NZQnJ6Slc0MkIyQWE5UnFuRTBkUlR3RXAxeFBIMFI4QUtEY1VSSndQT3R4akV0QXA2dEdVYzFDWGl1dVJwSFZVY0JUOVVaeDlVWEFVODBHRWVXQkR6UFpCeGJGdkFzWXpVT3JnbDRqdElaUjFlTGdLY1lqT05MQXA1aE1pTElBaDV2ckVZSVRjRERkVVlNZlJId1lJc1J4U2Jnc1pvUnh5VGdrVW8xNHFpemdBZmFqRWlTZ01mWmpWaXlnRWVacXhITUtPQkJraEZOSitBeFZpT2VMT0FSNW1vRU5BcDRnR1JFMUFuNHZ0MklLUXY0cmxLTm1Pb3M0SnMySTZvazRIdWFFZGNrNER0S2I4UlZpNEJ2eUVaa2c0Q3ZtNDNZbW9BdlMwWnNuWUN2Mm8zb1ZnRmZVM29qdWxvRWZFazI0aHNFZk1Wc25FRVQ4QVdiY1FaSndPYzE0eHdtQVovV0dlZlFDL2lzeVRpTExPQnpTbStjUlMwQ1BpVWI1N0VJK0l4U2pST1pCWHhDTnM1a0VQQnhzM0V1czRBUEc0eHoyUVI4MUd5Y1RSUHdRWU54TmtuQXg4ekcrVFFCSHpJWTU1TUVmTVJzbkZFVDhBR0RjVVpKd08vTnhqazFBYjgxR09jMENQaWQyVGlyV2NCdlpPT3NCZ0cvVnFweFdyT0FYOHJHZVdVQnY5UWI1MVdMZ0YrWWpETmJCZnhDWjV4WkwrRG5tbkZ1azRDZkdveHpTd0orWmpiT2JoVHdFNHR4ZG9PQW42akc2UlVCUHpRWjU3Y0srS0ZrbkY4djRFZG00d3FhZ0I4WWpDc1lCUHhBTlM2aENQaVh5YmlHVmNDL0pPTWFPZ0gvTkJ0WE1RcjRoMnhjeFNMZ0gzcmpLcXFBZTZOeEhidUFPNE54SFp1QU85VzRrQ0xneG01Y3lTVGd4bUJjeVNiZ1JqVXVwUWo0cjkyNGxrbkFmdzNHdFd3Qy9xc2FGMU1FL01kdVhNMGs0RDhHNDJvMkFmOVJqY3NwQXY3U2ZERmQybkxPYS92Ym1uUGVVdWVMMlFYOFpmRlYxSlNuVnZSanBVMDVWVi9GSU9BdnZhOGc1WDNXNzgxN1RyNkNLdUJQczArdlc1bytveTJkVDY4SitNUHFjOXVtV1o4M1Q1dlBiUkh3aDgwbjFrMUZYMVdtemlmV0NmaURUNnRmWm4zUG5IdWYxaXhBdTA4cVRYcUVLZm1rSmdGYWZFckRxRWNaQjUvU0lFQ2RUMmlZOVVqejRCT3FBbWFmenpEcjBlYkI1ek1LbHpmNWJMWlp6ekJ2UHB0VnVMekI1OUkxUFV2cmZDNmJjSG05ejZTdWVxYTEra3lxY0hXenoyUXJlcTZ5K1V4RzRlSW1uMGZkOVh4NzlYbXN3c1VOUG8ydDZCWEs1dFBZaEl2cmZCSjEwcXRNMVNkUmhXc3JQb2x1MU91TW5VOWlGQzV0OXprTVJhOVVCcC9ESkZ4YTlpbXNlclhWcHpBSWw1WjhBclhwOVZyMUNYVENwZmtFK2xIdk1QWStnU0pjMk9qNHVxTDNLSjNqYThLRlRRNnZLM3FYMGptOExGelk0dWk2b3ZjcGc2UGJoQXRMRG03UWV3ME9yaGN1ek1FTmVyZkJ3Ulhoc2tiSDFoVzkzZWJZbW5CWnUwUHJpdDZ2ZEE1dEZTNHJPN0t1NkFoSzU4Z0c0YktTQTZ1empxRlVCNWFFeStvZFZ4MTFGR04xWU1KbE9iQkp4N0U3c0ZtNHFPYTRGaDFKZGx4TnVLakpZU1VkeSthd3NuQlIyVkhWb21NcHZhTWFoSXZhSEZYVDBZeU9LZ2tYMVRtb3JPUEpEcW9LRitXZ09oMVJjbERDTmMwT2F0UVJ6ZFV4TmVHU21tUEtPcWJWTWUzQ0pVME9xZE5SSlllVWhVdktEbW5VVVkwT2FSRXVhWEJFaTQ1cmNVUkp1S1RrZ0dyUmNaWHFnRHJoa25vSHRPcklKa2NrWEpJRDZuVnN2UU1TcnFnNG9Fbkh0anVnSmx4UWN6eTlqaTQ1bmlaY1VITThrNDZ1T1o1VnVLRFY0ZlE2dnVSd3NuQkIyZUZNT3I3SjRXVGhncktqNlJWQjcyaVNjRUhKMGF5S1lISTBTYmlnNUdCcVVRU2xPcGdrWEZCeU1JTmlXQnlOY0VHT1psUU1zNk1STHNqQmRJcWljekRDQlRtWVZWRk1EbVlXTHFjNG1LSW9pb05wd3VVMHg3SXBqczJ4Tk9GeW1tT1pGTWZrV0pwd09jMnhGTVZSSEVzVExxYzVsRTZSYkE0bEM1ZlRITXFxU0ZhSGtvWEx5UTVsVkNTelE4bkM1V1JIVWhWTDcwaXljRG5aa1d5S1pYQWtXYmljN0VoV3hUSTVraXhjVG5Za28yS1pIVWtXTGljN0VrVlRIVWdXTGljN2tLUm9rZ05Kd3VWa0I3SW9tdXhBa25BNTJZRk1pbVozSUVtNG5PeEFtcUlaSFVnU0xpYzdFTVhqUUpKd09kbHg5SXFuZHh4SnVKenNPSkxpU1k0akNaZVRIY2VnZUJiSHNRbVhreDFIVmp6WmNXVGhjckxqeUlwbmRSeFp1SnpzT0pyaWFZNGpDNWVUSFVkVFBNMXhaT0Z5SnNmUkZFOXpIRm00bk9ZNGlnSnlIRm00bk9ZNEZKSGphTUxsTk1laGlCeEhFeTVuZGh5S3lIRTA0WG9jaHlKeUhMTndQWTVERVRrTzRZS3F3MUJFamtPNG9PUXdGSkhENklVTFNnNURFVG1NSkZ6UTRqQm14Vk1jUmhJdUtEdU1wbmlhdzhqQ0JVME9veW1lNWpDeWNFSE5ZVFRGMHh6R0xselE3REN5NGxrZFJoT3V5R0ZreFpNZFJoR3VxSGNVbStJWkhJWndTY2xSSk1XVEhFVVNMbWx4RkZYeDlJNWlFeTRwT3d6RjR6Q3ljRW5OWVRSRjB4ekdKRnpTN0RBbVJUTTVqQ1pjazhOWUZFMTJHTUpGSlVlUkZFMXlGTDF3VVlQRFVEUU9Jd2tYdFRxTVViR01EaU1MRjlVY3hxcFlWb2V4Q3hkVkhNYW1XQWFITVFwWDFUdUtxbGlxd3hBdWEzTVlveUlaSFVZU0xpczdqS3hJVm9leENKZlZIRWFuU0RxSE1RbVhWUnpIckRpSzR4aUY2K29jeHFvNEpvZFJoUXNiSEVhbk9EYUhrWVFMbXh6SHJDaUs0OGpDaFkyT1kxVVVxK05vd3BWVmg5RXJpczV4Rk9IS05zZlJGTVBvT0RyaDBsYkhNU2lHd1hFc3dxV05EcVFvZ2xJZHh5NWNXM1VjV1JGa0IxS0VhOXNjUjFVRXZlUG9oSXRiSGNpazQ1c2N5Q0pjM09oQWVoMWY3MEIyNGVxcUE1bDBkSk1qRVM1dmNDQzlqcTUzSUVtNHZNbVJURHEyeVpHc3d1WE5qcVF2T3JUZWtZd0NPa2VTZFdUWmtmUUN0RGlTT3V1NFNuVWtnd0ExaDdMcHVBYUhzZ3VRcWtOcE9xcm1XSW9BYVhBb3ZZNnFjeWliZ0Q5TWppWHJtTEpqV1FYOG9UaVlVVWMwT3BoWndKODJ4OUlWSFZEbldEb0JmMWtkektMaldSeE1GdkNYMmRIc09wcm1hRVlCZitzY1RKMTFMS1U2bUY3QWY2eU9wdE94ZEk1bUVmQWZzOE1aZENTRHd4a0YvTC9PNFV3Nmpzbmg5QUwrYTNVOFRVY3hPcDVGd0gvTmpxZU9Pb2F4T3A1UndQOTBqcWNXSFVIcEhVOHY0TWJxZ0xxaTl5dWRBMW9FM0pnZFVWZjBicVZ6UktPQVc4a1JkVVh2VlRwSDFBbTRNem1rcnVpZFN1ZVFWZ0YzaW1QcWl0Nm5kSTVwRm5CdmNFeGQwYnVVempFbEFmK3dPNmgrMUh1TW5ZT2FCUHhUZFZCMTFEdU0xVkVWQWYrME9LeEpyemRWUnpVSStKZlJjUzE2dGV5NGRnSC8xam11VlBSS1pYTmN2WUFmV0IxWVArcDF4dDZCTFFKK29EaTByRmZKRG0wVzhDT0RRMHV6WG1GT0RpMEorS0hkc2RWVno3ZFd4ellKK0xIZXdhVlp6elVuQjFjRi9FUjJlTG5vZVVwMmVJdUFuNWdkWDcvcldmYmU4YzBDZm1iekNhU21aMmpKSjVBRS9GVHpLYVJaanpadlBvVkp3TS8xUG9laDZaSEd3ZWRRQmZ6QzZyTklUWS9Ta3M5aUVmQUx4ZWZSVDBYZlY2YmU1ekVMK0pYQkoxS0hVZDh6RHRVbnNnbjRwZEhuMHErenZtcGVlNS9MTHVEWGtzK21XMGQ5M3JoMlBwdGV3RzlNUHFGKzJJcytydXhEN3hOYUJmeE83M1BxaG1uVTc0M1Qwdm1jYWhId085a25sb2JjUnYzWTJQS1FmR0tMZ044cVByK1V0dnludmUzNVQxdEtQcjlad084TnhobHRBajVnTnM2b0NmaUlaSnhQSitCRG1uRStrNENQNlkyejZRVjgwR1NjVFJid1ViMXhMclVJK0toc25Nc2k0TU5LTlU1bEZ2QnhpM0VtZzRCUG1JMHptUVY4eG1DY1J4THdLYk54SGszQTV3ekdXU1FCbjlTTXMyZ0NQaXNaNTlBSitMUm1uTU1rNFBPU2NRYTlnQzlveGhsTUFyNGlHZkgxQXI2a0dmRk5BcjRtR2RIMUFyNm9HZEZOQXI0cUdiSDFBcjZzR2JGTkFyNHVHWkgxQXI2aEdaRk5BcjRqR1hIMUFyNmxHWEZOQXI0bkdWSDFBcjZwR1ZGTkFyNHJHVEYxQXI2dEdURTFBZCszR1JFbEFROHdHeEUxQVk4d0dQRWtBUTh4Ry9FMEFZOHhHTkVNQWg2a1ZDT1lXY0NqWkNPV1FjRERsR3BFVW91QXgxbU5TTEtBUitxTk9Hb1I4RWlURWNjcTRMR1NFVVV2NE1HYUVjVWs0TkUySTRZazRPRm1JNFltNFBFR0k0Sk53Qk9VYWdRd0MzaUdiQnpmSXVBNWV1UG9haEh3SEpOeGRLdUFaMG5Hc2ZVQ25xWVp4OVlFUE05Z0hGa1M4RVJ6TlE1c0Z2Qk0yVGl1UmNCVGxkNDRxbG9FUE5kdUhOVXE0Tm1TY1V5OWdLY2JqV05xQXA1dk1ZNW9FL0FDcFJvSE5BdDRoZFU0bml6Z05UcmphUG9pNERXYWNUUzdnRmNaakdOSkFsNW1yc2FoekFKZUp4dEhrZ1c4VW04Y1IxOEV2Rkl6am1NWDhGcWJjUlJKd0l2TjFUaUlXY0NycmNZeFpBR3YxeGxIMEJjQnI5ZU1JOWdGdk1OZ3ZGOFM4QmFsR3U5V1p3SHZNUm52bGdXOFN6TGVxeGZ3TnFQeFhrM0ErMlRqblFZQmIxUjY0MzFxRWZCT3pYaWZTY0I3YmNhN0pBRnZWcXJ4SnJPQWQxdU45OGdDM2k4Wjc5QUxPSURSZUljbTRBaXk4WHFMZ0dQb2pWZXJSY0F4Tk9QVmRnRkhzUml2dFFrNGpGS05WNnF6Z09QWWpWZGFCUnpKWnJ4T0VuQW9wUm92TXdzNGx0VjRsU3pnYUpMeEdwMkF3NW1yOFJLamdPTlpqVmZJQW80b0djL1hGd0ZITkJyUDF3UWNVemFlYlJGd1ZKM3hYSDBSY0ZTajhWeE53SEZsNDVrV0FVZldHYy9URndGSE5oclAwd1FjV3phZVpSRndkSjN4SEgwUmNIU2o4UnhOd1BGbDR4a1dBUkYweHVQMVJVQUVvL0Y0VFVBTTJYaTBSVUFVbmZGWWZSRVF4V2c4VmhNUVJ6WWVhUkVRU1RJZXB5OENJcG1yOFRCTlFDeXI4U2haUURUSmVJeE9RRGh6TlI1aUZCRFBaRHhDRmhEUlpueGZKeUNrVW8zdnFyT0FtSGJqdTFZQlVTM0c5eVFCWVpYZStJNWFCTVRWak8vWUJVU1dqYS9iQk1UV0dWL1ZGd0d4amNaWE5RSFJyY2JYTEFMaVM4WlhkQUpPWUs3R0Y0d0N6bUEzUG04VmNBNkQ4VmxKd0VtVTN2aWNPZ3M0aTJaOHppN2dQTEx4R1lPQU0rbU1qK3VMZ0RPWnEvRmhvNEJ6bVl5UHlnTE9aak0rcGhOd09xVTNQcUxPQXM2bkdSOHhDVGlqYlB6ZUp1Q2NPdU4zK2lMZ25PWnEvRVlUY0ZhVDhXdFp3SGx0eHE4a0FTZFdldVBuNml6Z3pKcnhjN3VBYzh2R3p3d0N6aTRaUDlZVkFXYzNWK09IUmdIbnR4cy9zZ3E0Z3NYNHQwM0FKWlRPK0tkYUJGekRXSTEvYUFLdVlqWHVaUUhYc1JtM09nRVhVbnJqZitvczRFcEc0MzkyQWRlU2pmKzNDTGlhWlB5dEt3S3VwbFRqVDNVVWNEM04rTk1rNElxeVlROENycWt6K2lMZ211YnF5eHNGWE5YdXExc0ZYTmZpYTlzRVhGbm5LK3VMZ0N1YnF5OXNGSEJ0dTY5ckZYQjFpNjlxRTRETzE5UVhBWmlyTDJrVUFHbjNGYTBDOEtmRjE3TUp3Tjg2WDAxZkJPQnZjL1hGakFMdy8zWmZ5eW9BLzdQNFNqWUJ1Tlg1T3ZvaUFMZm02c3NZQmVEZTdxdFlCZUNmRmwvREpnRC8xdmtLK2lJQS96WlhYOEFvQUQreSsveFdBZml4eFdjM0NNRFBKSjliVndUZ1owcjFtZFZSQUg2dStjd21BZmlWN1BNYUJPRFhrcytxS3dMd2E2WDNPZFZaQUg1bjlEbnRBdkI3cTg5b0VZQ1AySHcrblFCOFNPbDhOclVJd01lTTFTZlRCT0NqSnA5TEZvQ1BHM3dtbXdCOFJ1Zno2SXNBZk1aY2ZScWpBSHpPN3JPWUJPQ3pzczloRUlEUFN6NkRyZ2pBNTVYZThkVlJBTDVpZEh5N0FIek42dWdXQWZpcXdiRWxBZml5MGpteVdnVGc2OGJxd0VZQitJN2RjYTBDOEQyTG85b0U0THVTWStxS0FIeFhxWTZvamdMd2ZhTWptZ1RnRVZiSHN3akFZd3lPSmduQWc1VE9zZFFpQUk4eVZvY3lDc0RqN0k1a0ZZQkhXaHpISUFDUGxSeEZWd1Rnc1VydkdPb29BSTgyT29aZEFCNXZjZ1JaQUo1aDhQRWxBWGlPemtmWEZ3RjRqcm42NEVZQmVKYm1ZNXNFNEhteWoyd1FnR2ZhZkZ5ZEFEeFY2WHhVdFFqQWM0M1ZCOVVFNE5rbUg5TXFBTSszK0lnR0FYaUY1T1BwaWdDOFF1bDlOSFVVZ05jWWZUUzdBTHpLNUdQSkF2QTZnNDhrQ2NBcmRUNk92Z2pBSzVYcW82aWpBTHhXODFGTUF2Qk04NTVUVGJxeitoZ1czUm42bFBkWkFCNWgzbk9xL2t2V25jRkgwT25PNUwvVWxQY2lBTi9RMXEzM2pWMjNTdWYzcTBXM1J0L290N1VKd09lVmZVbitwenJxMWx6OWRxTnVsZXAvU25rdkF2QmhaVjg2LzFCWGRHdjN1MDI2ay94RDNiSVhBZml0c2krZGYyN1RuZXozR25SbjhjOTF5eTRBdnpEbTVOOVlkV2Z6TzNXNk0vazMwam9Ld0ErVWFhaitnS1picGZQNzFGbTN4dXJmcThOVUJPRFd2Q1ovVUoxMWE2eCttNlpicGZjSHBYVVdnTCtOUys5UDZJcHVUWDZYVlhjMmYwSy9qQUl3THIwL2FkQ2R4ZTh4NkU3MkovWExLT0RLeHFYM0YweTZrL3dPWGRHdDNWL1FMNk9BYTVxWDNsODA2bGJwL1hwMTFLMngrbXY2WlJad05XWHQvSFcxNk5aWS9YSzdicFhPWDlldFJjQ0Y3SnUvcDlPZHlhK1dkV2Z3OTJ5N2dHdVljKzl2VzNSbjhHdHR1clA2Mi9vOEN6aTlmZk5EVExyVCtaVzZvbHZORDdIdEFzNnNyTDBmcEk2NlZhcGZwNDY2TlZjL1NMOFdBU2MxTDlXUDB4ZmRHdjA2azI2VnpvOVRoMW5BQ2JYQmo1VjBaL0tyTExveitMR0dKdUJrV3ZMRExib3orRFdTN2t4K3VOUUVuRWhMZm9aZHQwcm5WK2lMYm8xK2h0UUVuRVJMZm80NjZ0WmMvWHgxMUsxUy9SeXBDVGlCbHZ3MFhkR3Q1dWViZEtmejA2UW1JTGc1K1prMjNWbjliSVB1TEg2bU5Bc0lyQXgrc3F3N201K3IwNTNKVHpZVUFWR3QxVSszNjFicC9FeTE2TlpZL1d3MUN3aXA5WDZCT3V2V1dQMUVvMjZWM2kvUU53SGhsTUd2MFJYZDJ2MDhxKzRrdjhaV0JNUXlWYi9Lb0R2Wnp6TG9UdmFyMUVsQUlIUHlDNjI2ay93Y1hkR3QzUytVWmdGUjdOVXYxWFNyOUg2R091dldXUDFLZFJJUVF0bjhZclhvMWxqOUJFMjNTdWNYMjRxQTR4dDd2MXluTzVNZkwrdk80SmZyUndGSHQvb2RCdDFaL0dpYjdxeCtoMVhBb1pYQjd6SHBUdWZINm9wdU5iL0hWZ1FjMTl6NVhVYmRLdFdQVkVmZEt0VnYwczBDam1xc2ZwdSs2TmJvUjlwMXAvUGIxRkhBTVUzVmI1UjBaL1hqTExxeitJM3FKT0NJSnIvWG9qdURIeVhwenVUM21nUWN6K1IzbTNTcmRINk12dWpXV1AxbWs0Q2ptZngyZGRTdHVmb2hSdDBxdmQ5dUVuQXNrdytnSzdxMSt4RW0zZGw4QUpPQUk1bDhDSnZ1WkgvZm9EdlpoekFKT0k3ZEI1RjFaL04zZGJyVGZCQ1RnS01ZcTQraTZWYnAvVDExMXEyNStpRHFLT0FZU3ZWaDFGbTN4dXB2YWJyVCtUQnFFWEFJeVFmU0ZkMmEvQjFaZHdZZlNDZmdDTElQWmRDZHdWKzM2YzdrUTFrRXZGL3p3VXk2MC9tcnVxSmJZL1d4TkFIdlZub2Z6YWhiYy9YWDFGRzNTdStEcVVYQW15MCtuTDdvVnZQWFRMcXorWEFXQWU4MStvQ1M3bVIveGFJNzJRZlVCTHhWOGhFdHVyUDU4enJkYVQ2aVRzQTc3VDZtWGJkSzc4K3FSYmRLOVNGTkF0Nm85ekhWVWJmRzZrOXF1dFA1bUhvQjc3UDdxTHFpVzVNL1o5V2R4VWMxQ1hpYjVNTWFkR2Z3WjJ5Nk0vbXdPZ0h2TXZyQVZ0M3AvSEY5MGEyeCtyaEdBVyt5K01oRzNacXJQNnFPdWxVNkg5Z2c0RTE2SDFrdHVyWDdveWJkR1h4a1ZjQjdqRDYycER2Wkh6UG96dXBqMndXOHhlS0R5N3FUL0JGZDBhM1JCN2NJZUl2T1I3ZnJWcW4rdlRyclZ1bDljSjJBdC9EaDFWbTNtbjl2MTUza3d5c0MzcUQ1K0xxaVc2dC9aOUdkN09OckF0NWdkUUNEN216K3RVNTNkZ2VRQmJ4QmRnU1RicFhldjFLTGJzM1ZBU3dDM21CekJIWFVyZEcvMG5TbmN3Ukp3QnNraDlBVjNWcjljMWwzRm9lUUJMeEJjZ3liN216K21hUTdrMk5JQXQ0Z09ZaFZ0MHJuSDZ0RnQ4YnFHSktBTjBpT1l0U3RzZnFIbW02VnprRWtBVytRSEVWZmRHdnlqMlRkR1J4RkV2QUd5V0VrM1JuOGIwbDNWb2VSQkx6QjVqaXlicFhlLzFTTGJvMk9Jd2w0Zyt4QW1tNk4vcWVtVzZWM0hJdUFOMWdkU0MyNnRmcGUxcDNOZ1dRQmI5QWNTZEtkemJlUzdtUkgwZ1M4ZzBQSnVsVjYvMDh0dXRVY1NoSHdEcDFEYWJvMStuK2FicFhxU0hvQmI3RTRsRnAwYS9YL1czU25jeWlMZ0xjWUhVdlNuZVMvZGJxek9KWmR3SHYwamlYclZrbitVeXE2dFR1V0t1Qk5GZ2ZUZEtjdGFkbDFaNjZPWlJEd0pyT0RxVVcvMFRtWUp1QmRrb05KK3JYQndYUUMzcVk1bXF4Zm1Sek5KT0I5ZWtmVDlITmpkVEM5Z0RkcWpxWVcvVXpwSE0wazRKMlNvK24wTTV1ajZRUzgxZWh3QnYzWTRIQ2FnUGRhSEU0cStyZXlPWnhCd0p1VjN1SDBUZi9VZW9kVGk0QjNhdzVvbTNWckhoeFFFL0IrMlJHbGFkYmY1aWs1b2tYQUVTVEgxS2NoRDZsM1RKMkFReWk5OFdxMUNEaUdzUm92TmdvNGltYTgxaVRnT0NiamxTWUJSeklacnpNSk9KYkplSlZCd05GTXhtdE1BbzVuTWw1aEVuQkVleldlYmhKd1RHTTFucXVPQW82cWRNWXpkYU9BNHlxRDhUeGJFWEJvcS9Fc1djRFJqYjN4RExVSk9MNHlHSSszRlFFaDdOVjRyTG9LaUtKc3hpT2xXVUFnZXpVZXBhNENZaW1EOFJqYkxDQ2MxaG5mMSs4Q1FscXI4VDAxQzRpcUxNWjNETE9Bd09iTitLbzBDZ2l1SmVNclVoTndBaTBabjlWUEFrNmlKZU16K2tuQWliUmtmRlJxQWs1bUhJeVAySnFBRTVxWGF2ekdNQXM0cVRMMXhzLzF1UWc0czdZWlA1WjJBYWMzNTk3NHA3ck1BcTVoSDR4YjJ5N2dRc3JVR1gvcjFsbkExY3hMYi9UTEtPQ2F4cVgzbGRXaENiaXljZWw5VFhYWUJXQmNlbDlOdjR3QzhMZDVUYjZPYmgwRjRGYVpodXJ6cThOVUJPQUh4alg1ekxvOENzQXY3RXZuTStxV3ZRakFiNVY5Nlh3bTNiSVhBZml3MG5MeUdhUmxMd0x3ZWVNNjlJNnIzM0lUZ0c4b0xhZnFhR3JLK3l3QWp6RHZlZXNkUTAxNW53WGdzVXBibCtRalMwTnVSUUNlWm01NVNOVUhrNGJjWmdGNGlkS212Q1cvWDVmeTJvb0F2RjVwVXg1Uzc5ZnIwNUNuTmd2QTI1VzI1N3lsM3MvV3A1VHozbVlCT0tEVzlweVhsRG8vVHBmU2t2UGVtZ0NFTWJiVzhoK0c5Q2QvVlByVGtQL1FXaHNGNER6bTlqT3pBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQTRnUDhEWlFtRmpSbTB5ZGtBQUFBQVNVVk9SSzVDWUlJPVwiIiwiLy9BKiBhbGdvcml0aG1zIHVzaW5nIE1hbmhhdHRhbiBkaXN0YW5jZSAoYXBwcm94aW1hdGUgaGV1cmlzdGljcylcbi8vIHNvdXJjZTogR2Vla0ZvckdlZWsuIEltcGxlbWVudGF0aW9uIHdhcyBpbiBDKytcblxuZnVuY3Rpb24gQV9zdGFyX3BhdGhmaW5kaW5nKGdyaWQsIHN0YXJ0LCBmaW5pc2gsIG51bWJlck9mTm9kZXMsIHJvd3MsIGNvbHVtbnMpIHtcbiAgY29uc3Qgb3Blbkxpc3QgPSB7fTsgLy91bmNvbnF1ZXJlZFxuICBjb25zdCBjb25xdWVyZWRMaXN0ID0gW107XG4gIGNvbnN0IGNlbGxEZXRhaWxzID0gT2JqZWN0LmFzc2lnbihbXSwgZ3JpZCk7XG4gIGNvbnN0IGNsb3NlZExpc3QgPSBbXTsgLy9jb25xdWVyZWRcblxuICBmb3IgKGxldCBpID0gMTsgaSA8PSBudW1iZXJPZk5vZGVzOyBpKyspIHtcbiAgICBjZWxsRGV0YWlsc1tpXS5mID0gTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XG4gICAgY2VsbERldGFpbHNbaV0uZyA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICAgIGNlbGxEZXRhaWxzW2ldLmggPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgICBjZWxsRGV0YWlsc1tpXS5wYXJlbnQgPSAtMTtcbiAgfVxuXG4gIC8vIEluaXRpYWxpc2luZyB0aGUgcGFyYW1ldHRlciBvZiB0aGUgc3RhcnRpbmcgbm9kZVxuICBjZWxsRGV0YWlsc1tzdGFydF0uZiA9IDAuMDtcbiAgY2VsbERldGFpbHNbc3RhcnRdLmcgPSAwLjA7XG4gIGNlbGxEZXRhaWxzW3N0YXJ0XS5oID0gMC4wO1xuICBjZWxsRGV0YWlsc1tzdGFydF0ucGFyZW50ID0gc3RhcnQ7XG4gIC8vIEFkZCBzdGFydGluZyBub2RlIHdpdGggIHRvIHRoZSBvcGVuIGxpc3RcbiAgb3Blbkxpc3Rbc3RhcnRdID0gMC4wO1xuXG4gIHdoaWxlICghaXNFbXB0eShvcGVuTGlzdCkpIHtcbiAgICAvL3BvcCB0aGUgc3RhcnQgbm9kZSBvZmYgb2YgdGhlIG9wZW5MaXN0XG5cbiAgICBsZXQgYmVnaW5Qb2ludGVyID0gcGFyc2VJbnQoZmluZE1pbmltdW0ob3Blbkxpc3QpKTtcbiAgICBkZWxldGUgb3Blbkxpc3RbYmVnaW5Qb2ludGVyXTtcblxuICAgIC8vIGFkZCB0aGlzIHZlcnRleCBmcm9tIHRoZSBjbG9zZWQgbGlzdFxuICAgIGNsb3NlZExpc3RbYmVnaW5Qb2ludGVyXSA9IHRydWU7XG5cbiAgICAvLyBnZW5lcmF0ZSBhbGwgKHRoZSBzdWNjZXNzb3JzIG9mIHRoZSBjZWxsKVxuXG4gICAgLy8gVG8gc3RvcmUgdGhlICdnJyAnaCcgYW5kICdmJyBvZiB0aGUgc3VjY2Vzc29yXG4gICAgbGV0IGdOZXcsIGhOZXcsIGZOZXc7XG4gICAgLy9Ob3J0aFxuICAgIGlmIChpc1ZhbGlkKGJlZ2luUG9pbnRlciAtIGNvbHVtbnMsIG51bWJlck9mTm9kZXMpKSB7XG4gICAgICBpZiAoaXNEZXN0aW5hdGlvbihiZWdpblBvaW50ZXIgLSBjb2x1bW5zLCBmaW5pc2gpKSB7XG4gICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciAtIGNvbHVtbnNdLnBhcmVudCA9IGJlZ2luUG9pbnRlcjtcbiAgICAgICAgcmV0dXJuIHRyYWNlUGF0aChjZWxsRGV0YWlscywgZmluaXNoLCBjb25xdWVyZWRMaXN0KTtcbiAgICAgICAgLy8gaWYgdGhlIHN1Y2Nlc3NvciBpcyBhbHJlYWR5IG9uIHRoZSBjbG9zZWQgbGlzdCBvciBpZiBpdCBpcyBibG9ja2VkXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbG9zZWRMaXN0W2JlZ2luUG9pbnRlciAtIGNvbHVtbnNdICE9PSB0cnVlICYmXG4gICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciAtIGNvbHVtbnNdLmlzQmxvY2tlZCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnTmV3ID0gY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyXS5nICsgMTtcbiAgICAgICAgaE5ldyA9IGNhbGN1bGF0ZUhWYWx1ZShiZWdpblBvaW50ZXIgLSBjb2x1bW5zLCBmaW5pc2gsIHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmTmV3ID0gZ05ldyArIGhOZXc7XG5cbiAgICAgICAgLy8gSWYgaXQgaXNu4oCZdCBvbiB0aGUgb3BlbiBsaXN0LCBhZGQgaXQgdG9cbiAgICAgICAgLy8gdGhlIG9wZW4gbGlzdC4gTWFrZSB0aGUgY3VycmVudCBzcXVhcmVcbiAgICAgICAgLy8gdGhlIHBhcmVudCBvZiB0aGlzIHNxdWFyZS4gUmVjb3JkIHRoZVxuICAgICAgICAvLyBmLCBnLCBhbmQgaCBjb3N0cyBvZiB0aGUgc3F1YXJlIGNlbGxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgT1JcbiAgICAgICAgLy8gSWYgaXQgaXMgb24gdGhlIG9wZW4gbGlzdCBhbHJlYWR5LCBjaGVja1xuICAgICAgICAvLyB0byBzZWUgaWYgdGhpcyBwYXRoIHRvIHRoYXQgc3F1YXJlIGlzIGJldHRlcixcbiAgICAgICAgLy8gdXNpbmcgJ2YnIGNvc3QgYXMgdGhlIG1lYXN1cmUuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgLSBjb2x1bW5zXS5mID09PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuICAgICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciAtIGNvbHVtbnNdLmYgPiBmTmV3XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnF1ZXJlZExpc3QucHVzaChiZWdpblBvaW50ZXIgLSBjb2x1bW5zKTtcbiAgICAgICAgICBvcGVuTGlzdFtiZWdpblBvaW50ZXIgLSBjb2x1bW5zXSA9IGZOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gY29sdW1uc10uZiA9IGZOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gY29sdW1uc10uZyA9IGdOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gY29sdW1uc10uaCA9IGhOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gY29sdW1uc10ucGFyZW50ID0gYmVnaW5Qb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU291dGhcbiAgICBpZiAoaXNWYWxpZChiZWdpblBvaW50ZXIgKyBjb2x1bW5zLCBudW1iZXJPZk5vZGVzKSkge1xuICAgICAgaWYgKGlzRGVzdGluYXRpb24oYmVnaW5Qb2ludGVyICsgY29sdW1ucywgZmluaXNoKSkge1xuICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyBjb2x1bW5zXS5wYXJlbnQgPSBiZWdpblBvaW50ZXI7XG4gICAgICAgIHJldHVybiB0cmFjZVBhdGgoY2VsbERldGFpbHMsIGZpbmlzaCwgY29ucXVlcmVkTGlzdCk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHN1Y2Nlc3NvciBpcyBhbHJlYWR5IG9uIHRoZSBjbG9zZWQgbGlzdCBvciBpZiBpdCBpcyBibG9ja2VkXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbG9zZWRMaXN0W2JlZ2luUG9pbnRlciArIGNvbHVtbnNdICE9PSB0cnVlICYmXG4gICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciArIGNvbHVtbnNdLmlzQmxvY2tlZCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnTmV3ID0gY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyXS5nICsgMTtcbiAgICAgICAgaE5ldyA9IGNhbGN1bGF0ZUhWYWx1ZShiZWdpblBvaW50ZXIgKyBjb2x1bW5zLCBmaW5pc2gsIHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmTmV3ID0gZ05ldyArIGhOZXc7XG5cbiAgICAgICAgLy8gSWYgaXQgaXNu4oCZdCBvbiB0aGUgb3BlbiBsaXN0LCBhZGQgaXQgdG9cbiAgICAgICAgLy8gdGhlIG9wZW4gbGlzdC4gTWFrZSB0aGUgY3VycmVudCBzcXVhcmVcbiAgICAgICAgLy8gdGhlIHBhcmVudCBvZiB0aGlzIHNxdWFyZS4gUmVjb3JkIHRoZVxuICAgICAgICAvLyBmLCBnLCBhbmQgaCBjb3N0cyBvZiB0aGUgc3F1YXJlIGNlbGxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgT1JcbiAgICAgICAgLy8gSWYgaXQgaXMgb24gdGhlIG9wZW4gbGlzdCBhbHJlYWR5LCBjaGVja1xuICAgICAgICAvLyB0byBzZWUgaWYgdGhpcyBwYXRoIHRvIHRoYXQgc3F1YXJlIGlzIGJldHRlcixcbiAgICAgICAgLy8gdXNpbmcgJ2YnIGNvc3QgYXMgdGhlIG1lYXN1cmUuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyBjb2x1bW5zXS5mID09PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuICAgICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciArIGNvbHVtbnNdLmYgPiBmTmV3XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnF1ZXJlZExpc3QucHVzaChiZWdpblBvaW50ZXIgKyBjb2x1bW5zKTtcbiAgICAgICAgICBvcGVuTGlzdFtiZWdpblBvaW50ZXIgKyBjb2x1bW5zXSA9IGZOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyICsgY29sdW1uc10uZiA9IGZOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyICsgY29sdW1uc10uZyA9IGdOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyICsgY29sdW1uc10uaCA9IGhOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyICsgY29sdW1uc10ucGFyZW50ID0gYmVnaW5Qb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gICBFYXN0XG4gICAgaWYgKFxuICAgICAgaXNWYWxpZChiZWdpblBvaW50ZXIgKyAxLCBudW1iZXJPZk5vZGVzKSAmJlxuICAgICAgYmVnaW5Qb2ludGVyICUgY29sdW1ucyAhPT0gMFxuICAgICkge1xuICAgICAgaWYgKGlzRGVzdGluYXRpb24oYmVnaW5Qb2ludGVyICsgMSwgZmluaXNoKSkge1xuICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyAxXS5wYXJlbnQgPSBiZWdpblBvaW50ZXI7XG4gICAgICAgIHJldHVybiB0cmFjZVBhdGgoY2VsbERldGFpbHMsIGZpbmlzaCwgY29ucXVlcmVkTGlzdCk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHN1Y2Nlc3NvciBpcyBhbHJlYWR5IG9uIHRoZSBjbG9zZWQgbGlzdCBvciBpZiBpdCBpcyBibG9ja2VkXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbG9zZWRMaXN0W2JlZ2luUG9pbnRlciArIDFdICE9PSB0cnVlICYmXG4gICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciArIDFdLmlzQmxvY2tlZCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnTmV3ID0gY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyXS5nICsgMTtcbiAgICAgICAgaE5ldyA9IGNhbGN1bGF0ZUhWYWx1ZShiZWdpblBvaW50ZXIgKyAxLCBmaW5pc2gsIHJvd3MsIGNvbHVtbnMpO1xuXG4gICAgICAgIGZOZXcgPSBnTmV3ICsgaE5ldztcblxuICAgICAgICAvLyBJZiBpdCBpc27igJl0IG9uIHRoZSBvcGVuIGxpc3QsIGFkZCBpdCB0b1xuICAgICAgICAvLyB0aGUgb3BlbiBsaXN0LiBNYWtlIHRoZSBjdXJyZW50IHNxdWFyZVxuICAgICAgICAvLyB0aGUgcGFyZW50IG9mIHRoaXMgc3F1YXJlLiBSZWNvcmQgdGhlXG4gICAgICAgIC8vIGYsIGcsIGFuZCBoIGNvc3RzIG9mIHRoZSBzcXVhcmUgY2VsbFxuICAgICAgICAvLyAgICAgICAgICAgICAgICBPUlxuICAgICAgICAvLyBJZiBpdCBpcyBvbiB0aGUgb3BlbiBsaXN0IGFscmVhZHksIGNoZWNrXG4gICAgICAgIC8vIHRvIHNlZSBpZiB0aGlzIHBhdGggdG8gdGhhdCBzcXVhcmUgaXMgYmV0dGVyLFxuICAgICAgICAvLyB1c2luZyAnZicgY29zdCBhcyB0aGUgbWVhc3VyZS5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciArIDFdLmYgPT09IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSIHx8XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyICsgMV0uZiA+IGZOZXdcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29ucXVlcmVkTGlzdC5wdXNoKGJlZ2luUG9pbnRlciArIDEpO1xuICAgICAgICAgIG9wZW5MaXN0W2JlZ2luUG9pbnRlciArIDFdID0gZk5ldztcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyAxXS5mID0gZk5ldztcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyAxXS5nID0gZ05ldztcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyAxXS5oID0gaE5ldztcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgKyAxXS5wYXJlbnQgPSBiZWdpblBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyB3ZXN0XG4gICAgaWYgKFxuICAgICAgaXNWYWxpZChiZWdpblBvaW50ZXIgLSAxLCBudW1iZXJPZk5vZGVzKSAmJlxuICAgICAgYmVnaW5Qb2ludGVyICUgY29sdW1ucyAhPT0gMVxuICAgICkge1xuICAgICAgaWYgKGlzRGVzdGluYXRpb24oYmVnaW5Qb2ludGVyIC0gMSwgZmluaXNoKSkge1xuICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgLSAxXS5wYXJlbnQgPSBiZWdpblBvaW50ZXI7XG4gICAgICAgIHJldHVybiB0cmFjZVBhdGgoY2VsbERldGFpbHMsIGZpbmlzaCwgY29ucXVlcmVkTGlzdCk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHN1Y2Nlc3NvciBpcyBhbHJlYWR5IG9uIHRoZSBjbG9zZWQgbGlzdCBvciBpZiBpdCBpcyBibG9ja2VkXG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBjbG9zZWRMaXN0W2JlZ2luUG9pbnRlciAtIDFdICE9PSB0cnVlICYmXG4gICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciAtIDFdLmlzQmxvY2tlZCA9PT0gZmFsc2VcbiAgICAgICkge1xuICAgICAgICBnTmV3ID0gY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyXS5nICsgMTtcbiAgICAgICAgaE5ldyA9IGNhbGN1bGF0ZUhWYWx1ZShiZWdpblBvaW50ZXIgLSAxLCBmaW5pc2gsIHJvd3MsIGNvbHVtbnMpO1xuICAgICAgICBmTmV3ID0gZ05ldyArIGhOZXc7XG5cbiAgICAgICAgLy8gSWYgaXQgaXNu4oCZdCBvbiB0aGUgb3BlbiBsaXN0LCBhZGQgaXQgdG9cbiAgICAgICAgLy8gdGhlIG9wZW4gbGlzdC4gTWFrZSB0aGUgY3VycmVudCBzcXVhcmVcbiAgICAgICAgLy8gdGhlIHBhcmVudCBvZiB0aGlzIHNxdWFyZS4gUmVjb3JkIHRoZVxuICAgICAgICAvLyBmLCBnLCBhbmQgaCBjb3N0cyBvZiB0aGUgc3F1YXJlIGNlbGxcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgT1JcbiAgICAgICAgLy8gSWYgaXQgaXMgb24gdGhlIG9wZW4gbGlzdCBhbHJlYWR5LCBjaGVja1xuICAgICAgICAvLyB0byBzZWUgaWYgdGhpcyBwYXRoIHRvIHRoYXQgc3F1YXJlIGlzIGJldHRlcixcbiAgICAgICAgLy8gdXNpbmcgJ2YnIGNvc3QgYXMgdGhlIG1lYXN1cmUuXG4gICAgICAgIGlmIChcbiAgICAgICAgICBjZWxsRGV0YWlsc1tiZWdpblBvaW50ZXIgLSAxXS5mID09PSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUiB8fFxuICAgICAgICAgIGNlbGxEZXRhaWxzW2JlZ2luUG9pbnRlciAtIDFdLmYgPiBmTmV3XG4gICAgICAgICkge1xuICAgICAgICAgIGNvbnF1ZXJlZExpc3QucHVzaChiZWdpblBvaW50ZXIgLSAxKTtcbiAgICAgICAgICBvcGVuTGlzdFtiZWdpblBvaW50ZXIgLSAxXSA9IGZOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gMV0uZiA9IGZOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gMV0uZyA9IGdOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gMV0uaCA9IGhOZXc7XG4gICAgICAgICAgY2VsbERldGFpbHNbYmVnaW5Qb2ludGVyIC0gMV0ucGFyZW50ID0gYmVnaW5Qb2ludGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gY29uc29sZS5sb2coXCJkZWxldGVcIik7XG4gIH1cblxuICByZXR1cm4geyBwYXRoOiBbXSwgY29ucXVlcmVkTm9kZTogY29ucXVlcmVkTGlzdCB9O1xufVxuLy8gQ2FsY3VsYXRlIGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSBNYW5oYXR0YW4gZGlzdGFuY2VcbmZ1bmN0aW9uIGNhbGN1bGF0ZUhWYWx1ZShub2RlLCBmaW5pc2gsIHJvd3MsIGNvbHVtbnMpIHtcbiAgbGV0IHJvd051bWJlciA9IE1hdGguY2VpbChub2RlIC8gY29sdW1ucyk7XG4gIGxldCBmaW5pc2hSb3dOdW1iZXIgPSBNYXRoLmNlaWwoZmluaXNoIC8gY29sdW1ucyk7XG4gIGxldCBjb2x1bW5OdW1iZXIgPSBub2RlIC0gTWF0aC5mbG9vcihub2RlIC8gY29sdW1ucykgKiBjb2x1bW5zO1xuXG4gIGxldCBmaW5pc2hDb2x1bW5OdW1iZXIgPSBmaW5pc2ggLSBNYXRoLmZsb29yKGZpbmlzaCAvIGNvbHVtbnMpICogY29sdW1ucztcblxuICByZXR1cm4gKFxuICAgIE1hdGguYWJzKHJvd051bWJlciAtIGZpbmlzaFJvd051bWJlcikgK1xuICAgIE1hdGguYWJzKGNvbHVtbk51bWJlciAtIGZpbmlzaENvbHVtbk51bWJlcilcbiAgKTtcbn1cblxuZnVuY3Rpb24gaXNEZXN0aW5hdGlvbihub2RlLCBmaW5pc2gpIHtcbiAgaWYgKG5vZGUgIT09IGZpbmlzaCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkKG5vZGUsIG51bWJlck9mTm9kZXMpIHtcbiAgaWYgKG5vZGUgPiAwICYmIG5vZGUgPCBudW1iZXJPZk5vZGVzKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkob2JqKSB7XG4gIGZvciAodmFyIGtleSBpbiBvYmopIHtcbiAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIGZpbmRNaW5pbXVtKG9wZW5MaXN0KSB7XG4gIGxldCBtaW4gPSBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjtcbiAgbGV0IGluZGV4O1xuXG4gIGZvciAobGV0IGkgaW4gb3Blbkxpc3QpIHtcbiAgICBpZiAob3Blbkxpc3RbaV0gPD0gbWluKSB7XG4gICAgICBtaW4gPSBvcGVuTGlzdFtpXTtcbiAgICAgIGluZGV4ID0gaTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGluZGV4O1xufVxuXG5mdW5jdGlvbiB0cmFjZVBhdGgoY2VsbERldGFpbHMsIGRlc3QsIGNvbnF1ZXJlZExpc3QpIHtcbiAgbGV0IHBvcyA9IGRlc3Q7XG4gIGNvbnN0IFBhdGggPSBbXTtcbiAgd2hpbGUgKCEoY2VsbERldGFpbHNbcG9zXS5wYXJlbnQgPT0gcG9zKSkge1xuICAgIFBhdGgucHVzaChwb3MpO1xuICAgIHBvcyA9IGNlbGxEZXRhaWxzW3Bvc10ucGFyZW50O1xuICB9XG4gIGxldCByZXZlcnNlZFBhdGggPSBQYXRoLnJldmVyc2UoKTtcbiAgcmV0dXJuIHsgcGF0aDogcmV2ZXJzZWRQYXRoLCBjb25xdWVyZWROb2RlOiBjb25xdWVyZWRMaXN0IH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFfc3Rhcl9wYXRoZmluZGluZztcbiIsImltcG9ydCBRdWV1ZSBmcm9tIFwiLi4vZGF0YVN0cnVjdHVyZS9RdWV1ZVwiO1xuXG4vLyBCcmVhZHRoIGZpcnN0IHNlYXJjaFxuXG5mdW5jdGlvbiBCcmVhZHRoX2ZpcnN0X3NlYXJjaChcbiAgZ3JpZCxcbiAgc3RhcnQsXG4gIGZpbmlzaCxcbiAgbnVtYmVyT2ZOb2RlcyxcbiAgcm93cyxcbiAgY29sdW1uc1xuKSB7XG4gIGxldCBjb25xdWVyZWROb2RlID0gW107XG4gIGxldCBjbG9zZWRMaXN0ID0ge307XG4gIGxldCBjZWxsRGV0YWlscyA9IE9iamVjdC5hc3NpZ24oW10sIGdyaWQpO1xuICBjbG9zZWRMaXN0W3N0YXJ0XSA9IDA7XG4gIGNvbnN0IHF1ZXVlID0gbmV3IFF1ZXVlKCk7XG4gIHF1ZXVlLmVucXVldWUoc3RhcnQpO1xuXG4gIHdoaWxlICghcXVldWUuaXNFbXB0eSgpKSB7XG4gICAgbGV0IHYgPSBxdWV1ZS5kZXF1ZXVlKCk7XG4gICAgY29ucXVlcmVkTm9kZS5wdXNoKHYpO1xuICAgIGZvciAobGV0IGkgb2YgY2VsbERldGFpbHNbdl0uYWRqZW50KSB7XG4gICAgICBpZiAoY2VsbERldGFpbHNbaV0uaXNCbG9ja2VkID09PSBmYWxzZSkge1xuICAgICAgICBpZiAoIWNsb3NlZExpc3RbaV0pIHtcbiAgICAgICAgICBjbG9zZWRMaXN0W2ldID0gdjtcbiAgICAgICAgICBxdWV1ZS5lbnF1ZXVlKGkpO1xuICAgICAgICAgIGlmIChpID09PSBmaW5pc2gpIHtcbiAgICAgICAgICAgIGxldCBwYXRoID0gdHJhY2VQYXRoKGNsb3NlZExpc3QsIHN0YXJ0LCBmaW5pc2gpO1xuXG4gICAgICAgICAgICByZXR1cm4geyBwYXRoOiBwYXRoLCBjb25xdWVyZWROb2RlOiBjb25xdWVyZWROb2RlIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHsgcGF0aDogW10sIGNvbnF1ZXJlZE5vZGU6IGNvbnF1ZXJlZE5vZGUgfTtcbn1cblxuZnVuY3Rpb24gdHJhY2VQYXRoKGNsb3NlZExpc3QsIHN0YXJ0LCBmaW5pc2gpIHtcbiAgbGV0IHBhdGggPSBbXTtcbiAgbGV0IGkgPSBmaW5pc2g7XG4gIHdoaWxlIChpICE9PSBzdGFydCkge1xuICAgIHBhdGgucHVzaChjbG9zZWRMaXN0W2ldKTtcbiAgICBpID0gY2xvc2VkTGlzdFtpXTtcbiAgfVxuICBsZXQgcmV2ZXJzZWRQYXRoID0gcGF0aC5yZXZlcnNlKCk7XG4gIHJldHVybiByZXZlcnNlZFBhdGg7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJyZWFkdGhfZmlyc3Rfc2VhcmNoO1xuIiwiLyogRGVwdGgtZmlyc3Qgc2VhcmNoIHJlY3Vyc2lvbiB2ZXJzaW9uKi9cbmxldCBmb3VuZERlc3RpbmF0aW9uID0gZmFsc2U7XG5cbmZ1bmN0aW9uIHNlYXJjaChncmlkLCBzdGFydCwgZmluaXNoLCBudW1iZXJPZk5vZGUsIHJvd3MsIGNvbHVtbnMpIHtcbiAgbGV0IGNsb3NlZExpc3QgPSB7fTtcbiAgbGV0IGNvbnF1ZXJlZExpc3QgPSBbXTtcblxuICBjbG9zZWRMaXN0W3N0YXJ0XSA9IDA7XG5cbiAgZGVwdGhfRmlyc3RfU2VhcmNoKHN0YXJ0LCBncmlkLCBzdGFydCwgZmluaXNoLCBjbG9zZWRMaXN0LCBjb25xdWVyZWRMaXN0KTtcblxuICBpZiAoZm91bmREZXN0aW5hdGlvbiA9PT0gdHJ1ZSkge1xuICAgIGxldCBwYXRoID0gdHJhY2VQYXRoKGNsb3NlZExpc3QsIHN0YXJ0LCBmaW5pc2gpLnJldmVyc2UoKTtcblxuICAgIHJldHVybiB7IHBhdGg6IHBhdGgsIGNvbnF1ZXJlZE5vZGU6IHBhdGggfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geyBwYXRoOiBbXSwgY29ucXVlcmVkTm9kZTogY29ucXVlcmVkTGlzdCB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGRlcHRoX0ZpcnN0X1NlYXJjaChcbiAgaW5kZXgsXG4gIGdyaWQsXG4gIHN0YXJ0LFxuICBmaW5pc2gsXG4gIGNsb3NlZExpc3QsXG4gIGNvbnF1ZXJlZExpc3Rcbikge1xuICBmb3IgKGxldCBpIG9mIGdyaWRbaW5kZXhdLmFkamVudCkge1xuICAgIGlmICghY2xvc2VkTGlzdFtpXSAmJiBncmlkW2ldLmlzQmxvY2tlZCA9PT0gZmFsc2UpIHtcbiAgICAgIGNsb3NlZExpc3RbaV0gPSBpbmRleDtcbiAgICAgIGNvbnF1ZXJlZExpc3QucHVzaChpKTtcbiAgICAgIGlmIChpbmRleCA9PT0gZmluaXNoKSB7XG4gICAgICAgIGZvdW5kRGVzdGluYXRpb24gPSB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGluZGV4ICE9PSBmaW5pc2gpIHtcbiAgICAgICAgZGVwdGhfRmlyc3RfU2VhcmNoKGksIGdyaWQsIHN0YXJ0LCBmaW5pc2gsIGNsb3NlZExpc3QsIGNvbnF1ZXJlZExpc3QpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiB0cmFjZVBhdGgoY2xvc2VkTGlzdCwgc3RhcnQsIGZpbmlzaCkge1xuICBsZXQgcGF0aCA9IFtdO1xuICBsZXQgaSA9IGZpbmlzaDtcbiAgbGV0IGogPSAxO1xuICB3aGlsZSAoaSAhPT0gc3RhcnQgJiYgaiA8PSA4MDApIHtcbiAgICBwYXRoLnB1c2goY2xvc2VkTGlzdFtpXSk7XG4gICAgaSA9IGNsb3NlZExpc3RbaV07XG4gICAgaisrO1xuICB9XG4gIHJldHVybiBwYXRoO1xufVxuXG5leHBvcnQgZGVmYXVsdCBzZWFyY2g7XG4iLCJmdW5jdGlvbiBEaWprc3RyYShncmlkLCBzdGFydCwgZmluaXNoLCBudW1iZXJPZk5vZGVzKSB7XG4gIGxldCBHcmVlZHlTY29yZV9ub2RlID0gW107XG4gIGxldCBWaXNpdGVkX25vZGUgPSB7fTtcbiAgbGV0IHByZXYgPSB7fTtcbiAgbGV0IGNvbnF1ZXJlZCA9IFtdO1xuICBjb25xdWVyTm9kZShncmlkLCBHcmVlZHlTY29yZV9ub2RlLCBWaXNpdGVkX25vZGUsIHN0YXJ0LCAxLCBwcmV2LCBjb25xdWVyZWQpO1xuICBsZXQgayA9IDE7XG4gIHdoaWxlIChrIDwgbnVtYmVyT2ZOb2RlcyAtIDEpIHtcbiAgICBsZXQgeyBpbmRleCwgbWluU2NvcmUgfSA9IGNvbXBhcmluZ0dyZWVkeVNjb3JlKFxuICAgICAgR3JlZWR5U2NvcmVfbm9kZSxcbiAgICAgIFZpc2l0ZWRfbm9kZSxcbiAgICAgIGdyaWRcbiAgICApO1xuXG4gICAgaWYgKGluZGV4ID09PSBmaW5pc2gpIHtcbiAgICAgIGxldCBzaG9ydGVzdFBhdGggPSBbXTtcblxuICAgICAgZmluZFNob3J0ZXN0UGF0aChzaG9ydGVzdFBhdGgsIHByZXYsIHN0YXJ0LCBmaW5pc2gpO1xuICAgICAgcmV0dXJuIHsgcGF0aDogc2hvcnRlc3RQYXRoLCBjb25xdWVyZWROb2RlOiBjb25xdWVyZWQgfTtcbiAgICB9XG4gICAgaWYgKGluZGV4KSB7XG4gICAgICBjb25xdWVyTm9kZShcbiAgICAgICAgZ3JpZCxcbiAgICAgICAgR3JlZWR5U2NvcmVfbm9kZSxcbiAgICAgICAgVmlzaXRlZF9ub2RlLFxuICAgICAgICBpbmRleCxcbiAgICAgICAgbWluU2NvcmUsXG4gICAgICAgIHByZXYsXG4gICAgICAgIGNvbnF1ZXJlZFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhpbmRleCk7XG5cbiAgICBrKys7XG4gIH1cblxuICByZXR1cm4geyBwYXRoOiBbXSwgY29ucXVlcmVkTm9kZTogY29ucXVlcmVkIH07XG59XG5cbmZ1bmN0aW9uIGNvbnF1ZXJOb2RlKFxuICBncmlkLFxuICBHcmVlZHlTY29yZV9ub2RlLFxuICBWaXNpdGVkX25vZGUsXG4gIGluZGV4LFxuICBtaW5TY29yZSxcbiAgcHJldixcbiAgY29ucXVlcmVkXG4pIHtcbiAgR3JlZWR5U2NvcmVfbm9kZVtpbmRleF0gPSBtaW5TY29yZTtcbiAgVmlzaXRlZF9ub2RlW2luZGV4XSA9IHRydWU7XG4gIGNvbnF1ZXJlZC5wdXNoKGluZGV4KTtcbiAgLy8gY29uc29sZS5sb2coaW5kZXgpO1xuICBmb3IgKGxldCBhZGplbnRWZXJ0ZXggb2YgZ3JpZFtpbmRleF0uYWRqZW50KSB7XG4gICAgaWYgKFxuICAgICAgIUdyZWVkeVNjb3JlX25vZGVbYWRqZW50VmVydGV4XSAmJlxuICAgICAgdHlwZW9mIFZpc2l0ZWRfbm9kZVthZGplbnRWZXJ0ZXhdID09PSBcInVuZGVmaW5lZFwiXG4gICAgKSB7XG4gICAgICBwcmV2W2FkamVudFZlcnRleF0gPSBwYXJzZUludChpbmRleCk7XG4gICAgICBHcmVlZHlTY29yZV9ub2RlW2FkamVudFZlcnRleF0gPSBHcmVlZHlTY29yZV9ub2RlW2luZGV4XSArIDE7XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgR3JlZWR5U2NvcmVfbm9kZVthZGplbnRWZXJ0ZXhdID4gR3JlZWR5U2NvcmVfbm9kZVtpbmRleF0gKyAxICYmXG4gICAgICB0eXBlb2YgVmlzaXRlZF9ub2RlW2FkamVudFZlcnRleF0gPT09IFwidW5kZWZpbmVkXCJcbiAgICApIHtcbiAgICAgIHByZXZbYWRqZW50VmVydGV4XSA9IHBhcnNlSW50KGluZGV4KTtcbiAgICAgIEdyZWVkeVNjb3JlX25vZGVbYWRqZW50VmVydGV4XSA9IEdyZWVkeVNjb3JlX25vZGVbaW5kZXhdICsgMTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyaW5nR3JlZWR5U2NvcmUoR3JlZWR5U2NvcmVfbm9kZSwgVmlzaXRlZF9ub2RlLCBncmlkKSB7XG4gIGxldCBtaW5TY29yZSA9IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSO1xuICBsZXQgaW5kZXg7XG4gIGZvciAobGV0IGogaW4gR3JlZWR5U2NvcmVfbm9kZSkge1xuICAgIGlmIChcbiAgICAgIEdyZWVkeVNjb3JlX25vZGVbal0gJiZcbiAgICAgIEdyZWVkeVNjb3JlX25vZGVbal0gPCBtaW5TY29yZSAmJlxuICAgICAgdHlwZW9mIFZpc2l0ZWRfbm9kZVtqXSA9PT0gXCJ1bmRlZmluZWRcIiAmJlxuICAgICAgIWdyaWRbal0uaXNCbG9ja2VkXG4gICAgKSB7XG4gICAgICBtaW5TY29yZSA9IEdyZWVkeVNjb3JlX25vZGVbal07XG4gICAgICBpbmRleCA9IGo7XG4gICAgfVxuICB9XG4gIHJldHVybiB7IGluZGV4OiBwYXJzZUludChpbmRleCksIG1pblNjb3JlOiBtaW5TY29yZSB9O1xufVxuXG5mdW5jdGlvbiBmaW5kU2hvcnRlc3RQYXRoKHNob3J0ZXN0UGF0aCwgcHJldiwgc3RhcnQsIGZpbmlzaCkge1xuICBpZiAodHlwZW9mIGZpbmlzaCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGZpbmRTaG9ydGVzdFBhdGgoc2hvcnRlc3RQYXRoLCBwcmV2LCBzdGFydCwgcHJldltmaW5pc2hdKTtcbiAgICBzaG9ydGVzdFBhdGgucHVzaChmaW5pc2gpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpamtzdHJhO1xuIiwiLyogQSBxdWV1ZSBvYmplY3QgKi9cblxuY2xhc3MgUXVldWUge1xuICBjb25zdHJ1Y3RvciguLi5pdGVtcykge1xuICAgIHRoaXMuX2l0ZW1zID0gW107XG4gIH1cblxuICBlbnF1ZXVlKG9iaikge1xuICAgIC8vIFB1c2ggaXRlbXMgaW50byB0aGUgcXVldWVcblxuICAgIHRoaXMuX2l0ZW1zLnB1c2gob2JqKTtcbiAgfVxuXG4gIGRlcXVldWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLnNoaWZ0KCk7XG4gIH1cblxuICBwZWVrKCkge1xuICAgIHJldHVybiB0aGlzLl9pdGVtc1swXTtcbiAgfVxuXG4gIGlzRW1wdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1zLmxlbmd0aCA9PT0gMDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBRdWV1ZTtcbiIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4uL25hdmJhci9uYXZiYXIuanN4XCI7XG5pbXBvcnQgTm9kZSBmcm9tIFwiLi9ub2RlLmpzeFwiO1xuaW1wb3J0IHVwZGF0ZSBmcm9tIFwiaW1tdXRhYmlsaXR5LWhlbHBlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY3NzL2dyaWQuY3NzXCI7XG5cbmNvbnN0IHJvd3MgPSAyMDtcbmNvbnN0IGNvbHVtbnMgPSA0MDtcbmNvbnN0IGluaXRpYWxTdGFydCA9IE1hdGguZmxvb3IoKHJvd3MgKiBjb2x1bW5zKSAvIDIgKyAxMCk7XG5jb25zdCBpbml0aWFsRmluaXNoID0gTWF0aC5mbG9vcihpbml0aWFsU3RhcnQgKyAyMCk7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGdyaWQgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLm15UmVmID0gW107XG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHJvd3M6IG51bGwsXG4gICAgICBjb2x1bW5zOiBudWxsLFxuICAgICAgZ3JpZDogW10sXG4gICAgICBzdGFydDogbnVsbCxcbiAgICAgIGZpbmlzaDogbnVsbCxcbiAgICAgIHNob3J0ZXN0UGF0aDogW10sXG4gICAgICBjb25xdWVyZWROb2RlOiBbXSxcbiAgICAgIGlzVmlzdWFsaXplZDogZmFsc2UsXG4gICAgICBpc01vdXNlT25TdGFydDogZmFsc2UsXG4gICAgICBpc01vdXNlQ2xpY2tlZDogZmFsc2UsXG4gICAgICBpc01vdXNlT25GaW5pc2g6IGZhbHNlXG4gICAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIGNvbnN0IGdyaWQgPSBpbml0X0dyaWQocm93cywgY29sdW1ucywgaW5pdGlhbFN0YXJ0LCBpbml0aWFsRmluaXNoKTtcbiAgICBpZiAoIXRoaXMuc3RhdGUuc3RhcnQpIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogaW5pdGlhbFN0YXJ0LCBmaW5pc2g6IGluaXRpYWxGaW5pc2ggfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydDogdGhpcy5zdGF0ZS5zdGFydCwgZmluaXNoOiB0aGlzLnN0YXRlLmZpbmlzaCB9KTtcbiAgICB9XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHJvd3M6IDIwLCBjb2x1bW5zOiA0MCB9KTtcbiAgICB0aGlzLnNldFN0YXRlKHsgZ3JpZCB9KTtcbiAgfVxuXG4gIGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHMpIHtcbiAgICBpZiAoXG4gICAgICB0aGlzLnN0YXRlLmlzVmlzdWFsaXplZCAhPT0gcHJldlByb3BzLmlzVmlzdWFsaXplZCAmJlxuICAgICAgdGhpcy5zdGF0ZS5pc1Zpc3VhbGl6ZWQgPT09IHRydWVcbiAgICApIHtcbiAgICAgIGxldCBzZWxmID0gdGhpcztcbiAgICAgIGxldCBteVJlZiA9IHRoaXMubXlSZWY7XG4gICAgICBsZXQgayA9IDA7XG4gICAgICBmb3IgKGxldCBpIG9mIHRoaXMuc3RhdGUuY29ucXVlcmVkTm9kZSkge1xuICAgICAgICBrKys7XG4gICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgZnVuY3Rpb24obXlSZWYsIGkpIHtcbiAgICAgICAgICAgIG15UmVmW2ldLmNsYXNzTGlzdC5yZXBsYWNlKFwibm9kZS1ub3JtYWxcIiwgXCJub2RlLWNvbnF1ZXJlZFwiKTtcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgayAqIDUwLFxuXG4gICAgICAgICAgbXlSZWYsXG4gICAgICAgICAgaVxuICAgICAgICApO1xuICAgICAgICAvLyB0aGlzLm15UmVmW2ldLmNsYXNzTGlzdC5hZGQoXCJub2RlLXBhdGhcIik7XG4gICAgICB9XG4gICAgICBsZXQgaiA9IDA7XG4gICAgICBsZXQgc2hvcnRlc3RQYXRoID0gdGhpcy5zdGF0ZS5zaG9ydGVzdFBhdGg7XG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5zdGF0ZS5jb25xdWVyZWROb2RlLmxlbmd0aDtcblxuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgZnVuY3Rpb24oc2hvcnRlc3RQYXRoKSB7XG4gICAgICAgICAgZm9yIChsZXQgaSBvZiBzaG9ydGVzdFBhdGgpIHtcbiAgICAgICAgICAgIGorKztcbiAgICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIGZ1bmN0aW9uKG15UmVmLCBpKSB7XG4gICAgICAgICAgICAgICAgbXlSZWZbaV0uY2xhc3NMaXN0LnJlcGxhY2UoXCJub2RlLWNvbnF1ZXJlZFwiLCBcIm5vZGUtcGF0aFwiKTtcbiAgICAgICAgICAgICAgfSxcblxuICAgICAgICAgICAgICBqICogNDAsXG5cbiAgICAgICAgICAgICAgbXlSZWYsXG4gICAgICAgICAgICAgIGlcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYuc2V0U3RhdGUoeyBpc1Zpc3VhbGl6ZWQ6IGZhbHNlIH0pO1xuICAgICAgICB9LFxuICAgICAgICBsZW5ndGggKiA1MCxcbiAgICAgICAgc2hvcnRlc3RQYXRoXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0VmlzdWFsaXplKCkge1xuICAgIGlmICh0aGlzLnN0YXRlLmlzVmlzdWFsaXplZCA9PT0gZmFsc2UpIHtcbiAgICAgIGxldCBteVJlZiA9IHRoaXMubXlSZWY7XG4gICAgICBmb3IgKGxldCBpIG9mIHRoaXMuc3RhdGUuY29ucXVlcmVkTm9kZSkge1xuICAgICAgICBteVJlZltpXS5jbGFzc0xpc3QucmVwbGFjZShcIm5vZGUtY29ucXVlcmVkXCIsIFwibm9kZS1ub3JtYWxcIik7XG4gICAgICAgIG15UmVmW2ldLmNsYXNzTGlzdC5yZXBsYWNlKFwibm9kZS1wYXRoXCIsIFwibm9kZS1ub3JtYWxcIik7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgY2xlYXJXYWxscygpIHtcbiAgICBpZiAodGhpcy5zdGF0ZS5pc1Zpc3VhbGl6ZWQgPT09IGZhbHNlKSB7XG4gICAgICBsZXQgbXlSZWYgPSB0aGlzLm15UmVmO1xuICAgICAgZm9yIChsZXQgaSBvZiB0aGlzLnN0YXRlLmNvbnF1ZXJlZE5vZGUpIHtcbiAgICAgICAgbXlSZWZbaV0uY2xhc3NMaXN0LnJlcGxhY2UoXCJub2RlLWNvbnF1ZXJlZFwiLCBcIm5vZGUtbm9ybWFsXCIpO1xuICAgICAgICBteVJlZltpXS5jbGFzc0xpc3QucmVwbGFjZShcIm5vZGUtcGF0aFwiLCBcIm5vZGUtbm9ybWFsXCIpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLnN0YXRlLmdyaWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbXlSZWZbaV0uY2xhc3NMaXN0LnJlcGxhY2UoXCJub2RlLWJsb2NrZWRcIiwgXCJub2RlLW5vcm1hbFwiKTtcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgIC8vICAgZ3JpZDogdXBkYXRlKHRoaXMuc3RhdGUuZ3JpZCwge1xuICAgICAgICAvLyAgICAgW2ldOiB7IGlzQmxvY2tlZDogeyAkc2V0OiBmYWxzZSB9IH1cbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyB9KTtcbiAgICAgICAgZGVsZXRlQmxvY2t0b0dyaWQodGhpcy5zdGF0ZS5ncmlkLCBpKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBzZXRTdGFydChzdGFydCkge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBzdGFydCB9KTtcbiAgfVxuXG4gIHNldFBhdGgoc2hvcnRlc3RQYXRoLCBjb25xdWVyZWROb2RlKSB7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IHNob3J0ZXN0UGF0aCwgY29ucXVlcmVkTm9kZSB9KTtcbiAgfVxuXG4gIHNldFZpc3VhbGl6ZShpc1Zpc3VhbGl6ZWQpIHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNWaXN1YWxpemVkIH0pO1xuICB9XG4gIGhhbmRsZU1vdXNlRG93biA9IGluZGV4ID0+IHtcbiAgICBpZiAoIXRoaXMuc3RhdGUuaXNWaXN1YWxpemVkKSB7XG4gICAgICBpZiAoIXRoaXMuc3RhdGUuaXNNb3VzZU9uU3RhcnQgJiYgaW5kZXggPT09IHRoaXMuc3RhdGUuc3RhcnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGlzTW91c2VPblN0YXJ0OiB0cnVlIH0pO1xuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAgIXRoaXMuc3RhdGUuaXNNb3VzZUNsaWNrZWQgJiZcbiAgICAgICAgaW5kZXggIT09IHRoaXMuc3RhdGUuc3RhcnQgJiZcbiAgICAgICAgaW5kZXggIT09IHRoaXMuc3RhdGUuZmluaXNoICYmXG4gICAgICAgICF0aGlzLnN0YXRlLmlzTW91c2VPblN0YXJ0ICYmXG4gICAgICAgICF0aGlzLnN0YXRlLmlzTW91c2VPbkZpbmlzaFxuICAgICAgKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vdXNlQ2xpY2tlZDogdHJ1ZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICF0aGlzLnN0YXRlLmlzTW91c2VDbGlja2VkICYmXG4gICAgICAgIGluZGV4ID09PSB0aGlzLnN0YXRlLmZpbmlzaCAmJlxuICAgICAgICAhdGhpcy5zdGF0ZS5pc01vdXNlT25GaW5pc2ggJiZcbiAgICAgICAgIXRoaXMuc3RhdGUuaXNNb3VzZU9uU3RhcnRcbiAgICAgICkge1xuICAgICAgICB0aGlzLnNldFN0YXRlKHsgaXNNb3VzZU9uRmluaXNoOiB0cnVlIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBncmlkOiB1cGRhdGUodGhpcy5zdGF0ZS5ncmlkLCB7XG4gICAgICAgICAgICBbaW5kZXhdOiB7IGlzQmxvY2tlZDogeyAkc2V0OiB0cnVlIH0gfVxuICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBoYW5kbGVNb3VzZVVwID0gaW5kZXggPT4ge1xuICAgIGlmICghdGhpcy5zdGF0ZS5pc1Zpc3VhbGl6ZWQpIHtcbiAgICAgIGlmICh0aGlzLnN0YXRlLmlzTW91c2VPblN0YXJ0KSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vdXNlT25TdGFydDogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGdyaWQ6IGNoYW5nZVN0YXJ0b3JGaW5pc2godGhpcy5zdGF0ZS5ncmlkLCBpbmRleCwgdGhpcy5zdGF0ZS5zdGFydCksXG4gICAgICAgICAgc3RhcnQ6IGluZGV4XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLnN0YXRlLmlzTW91c2VDbGlja2VkKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vdXNlQ2xpY2tlZDogZmFsc2UgfSk7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGdyaWQ6IHVwZGF0ZSh0aGlzLnN0YXRlLmdyaWQsIHtcbiAgICAgICAgICAgIFtpbmRleF06IHsgaXNCbG9ja2VkOiB7ICRzZXQ6IHRydWUgfSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNNb3VzZU9uRmluaXNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoeyBpc01vdXNlT25GaW5pc2g6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBncmlkOiBjaGFuZ2VGaW5pc2godGhpcy5zdGF0ZS5ncmlkLCBpbmRleCwgdGhpcy5zdGF0ZS5maW5pc2gpLFxuICAgICAgICAgIGZpbmlzaDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGhhbmRsZU1vdXNlRW50ZXIgPSBpbmRleCA9PiB7XG4gICAgaWYgKCF0aGlzLnN0YXRlLmlzVmlzdWFsaXplZCkge1xuICAgICAgaWYgKHRoaXMuc3RhdGUuaXNNb3VzZU9uU3RhcnQpIHtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XG4gICAgICAgICAgZ3JpZDogY2hhbmdlU3RhcnRvckZpbmlzaCh0aGlzLnN0YXRlLmdyaWQsIGluZGV4LCB0aGlzLnN0YXRlLnN0YXJ0KSxcbiAgICAgICAgICBzdGFydDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNNb3VzZU9uRmluaXNoKSB7XG4gICAgICAgIC8vIHRoaXMuc2V0U3RhdGUoeyBpc01vdXNlT25GaW5pc2g6IGZhbHNlIH0pO1xuICAgICAgICB0aGlzLnNldFN0YXRlKHtcbiAgICAgICAgICBncmlkOiBjaGFuZ2VGaW5pc2godGhpcy5zdGF0ZS5ncmlkLCBpbmRleCwgdGhpcy5zdGF0ZS5maW5pc2gpLFxuICAgICAgICAgIGZpbmlzaDogaW5kZXhcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuc3RhdGUuaXNNb3VzZUNsaWNrZWQgJiYgIXRoaXMuc3RhdGUuaXNNb3VzZU9uRmluaXNoKSB7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xuICAgICAgICAgIGdyaWQ6IHVwZGF0ZSh0aGlzLnN0YXRlLmdyaWQsIHtcbiAgICAgICAgICAgIFtpbmRleF06IHsgaXNCbG9ja2VkOiB7ICRzZXQ6IHRydWUgfSB9XG4gICAgICAgICAgfSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIGlzRXF1YWwoc3RhdGUsIHByZXZTdGF0ZSkge1xuICAgIGlmIChzdGF0ZS5sZW5ndGggIT09IHByZXZTdGF0ZS5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGdyaWQsIHNob3J0ZXN0UGF0aCwgY29ucXVlcmVkTm9kZSB9ID0gdGhpcy5zdGF0ZTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPE5hdmJhclxuICAgICAgICAgIHN0YXRlPXt0aGlzLnN0YXRlfVxuICAgICAgICAgIHNldFZpc3VhbGl6ZT17dGhpcy5zZXRWaXN1YWxpemUuYmluZCh0aGlzKX1cbiAgICAgICAgICBzZXRQYXRoPXt0aGlzLnNldFBhdGguYmluZCh0aGlzKX1cbiAgICAgICAgICByZXNldFZpc3VhbGl6ZT17dGhpcy5yZXNldFZpc3VhbGl6ZS5iaW5kKHRoaXMpfVxuICAgICAgICAgIGNsZWFyV2FsbHM9e3RoaXMuY2xlYXJXYWxscy5iaW5kKHRoaXMpfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWRcIj5cbiAgICAgICAgICB7dGhpcy5zdGF0ZS5ncmlkLm1hcCgoYWRqZW5jeVZlcnRleCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxOb2RlXG4gICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgIGluZGV4PXtpbmRleH1cbiAgICAgICAgICAgICAgcmVmPXtyZWYgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMubXlSZWZbaW5kZXhdID0gcmVmO1xuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICBub2RlPXthZGplbmN5VmVydGV4fVxuICAgICAgICAgICAgICBoYW5kbGVNb3VzZURvd249e3RoaXMuaGFuZGxlTW91c2VEb3dufVxuICAgICAgICAgICAgICBoYW5kbGVNb3VzZVVwPXt0aGlzLmhhbmRsZU1vdXNlVXB9XG4gICAgICAgICAgICAgIGhhbmRsZU1vdXNlRW50ZXI9e3RoaXMuaGFuZGxlTW91c2VFbnRlcn1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0X0dyaWQocm93cywgY29sdW1ucywgaW5pdGlhbFN0YXJ0LCBpbml0aWFsRmluaXNoKSB7XG4gIGxldCBhcnJheSA9IFtdO1xuICBsZXQgbWF4aW11bSA9IG1heGltdW1Ob2RlKHJvd3MsIGNvbHVtbnMpO1xuXG4gIGxldCBrID0gMTtcbiAgZm9yIChsZXQgaSA9IDE7IGkgPD0gcm93czsgaSsrKSB7XG4gICAgZm9yIChsZXQgaiA9IDE7IGogPD0gY29sdW1uczsgaisrKSB7XG4gICAgICBsZXQgYWRqZW5jeVZlcnRleGVzID0gYWRkRWRnZXMoaywgcm93cywgY29sdW1ucywgbWF4aW11bSk7XG4gICAgICBpZiAoayAhPT0gaW5pdGlhbFN0YXJ0KSB7XG4gICAgICAgIGFycmF5W2tdID0geyBhZGplbnQ6IGFkamVuY3lWZXJ0ZXhlcywgaXNCbG9ja2VkOiBmYWxzZSB9O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgYXJyYXlba10gPSB7IGFkamVudDogYWRqZW5jeVZlcnRleGVzLCBzdGFydDogdHJ1ZSwgaXNCbG9ja2VkOiBmYWxzZSB9O1xuICAgICAgfVxuICAgICAgaWYgKGsgPT09IGluaXRpYWxGaW5pc2gpIHtcbiAgICAgICAgYXJyYXlba10uZmluaXNoID0gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaysrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbmZ1bmN0aW9uIGFkZEVkZ2VzKGssIHJvd3MsIGNvbHVtbiwgbWF4aW11bSkge1xuICBsZXQgYWRqZW5jeVZlcnRleCA9IFtdO1xuICBpZiAoayArIGNvbHVtbiA8PSBtYXhpbXVtKSB7XG4gICAgYWRqZW5jeVZlcnRleC5wdXNoKGsgKyBjb2x1bW4pO1xuICB9XG4gIGlmIChrIC0gY29sdW1uID4gMCkge1xuICAgIGFkamVuY3lWZXJ0ZXgucHVzaChrIC0gY29sdW1uKTtcbiAgfVxuICBpZiAoayAlIGNvbHVtbiA9PT0gMCkge1xuICAgIGFkamVuY3lWZXJ0ZXgucHVzaChrIC0gMSk7XG4gIH0gZWxzZSBpZiAoayAlIGNvbHVtbiA9PT0gMSkge1xuICAgIGFkamVuY3lWZXJ0ZXgucHVzaChrICsgMSk7XG4gIH0gZWxzZSB7XG4gICAgYWRqZW5jeVZlcnRleC5wdXNoKGsgKyAxKTtcbiAgICBhZGplbmN5VmVydGV4LnB1c2goayAtIDEpO1xuICB9XG4gIHJldHVybiBhZGplbmN5VmVydGV4O1xufVxuXG5mdW5jdGlvbiBtYXhpbXVtTm9kZShyb3dzLCBjb2x1bW5zKSB7XG4gIHJldHVybiByb3dzICogY29sdW1ucztcbn1cblxuZnVuY3Rpb24gY2hhbmdlU3RhcnRvckZpbmlzaChncmlkLCBpbmRleCwgb2xkaW5kZXgpIHtcbiAgbGV0IG5ld0dyaWQgPSBPYmplY3QuYXNzaWduKFtdLCBncmlkKTtcbiAgbmV3R3JpZFtvbGRpbmRleF0uc3RhcnQgPSBmYWxzZTtcbiAgbmV3R3JpZFtpbmRleF0uc3RhcnQgPSB0cnVlO1xuICByZXR1cm4gbmV3R3JpZDtcbn1cblxuZnVuY3Rpb24gY2hhbmdlRmluaXNoKGdyaWQsIGluZGV4LCBvbGRpbmRleCkge1xuICBsZXQgbmV3R3JpZCA9IE9iamVjdC5hc3NpZ24oW10sIGdyaWQpO1xuICBuZXdHcmlkW29sZGluZGV4XS5maW5pc2ggPSBmYWxzZTtcbiAgbmV3R3JpZFtpbmRleF0uZmluaXNoID0gdHJ1ZTtcbiAgcmV0dXJuIG5ld0dyaWQ7XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZUJsb2NrdG9HcmlkKGdyaWQsIGluZGV4KSB7XG4gIGxldCBuZXdHcmlkID0gT2JqZWN0LmFzc2lnbihbXSwgZ3JpZCk7XG4gIG5ld0dyaWRbaW5kZXhdLmlzQmxvY2tlZCA9IGZhbHNlO1xuICByZXR1cm4gbmV3R3JpZDtcbn1cbiIsImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2Nzcy9ub2RlLmNzc1wiO1xuXG5jb25zdCBub2RlID0gUmVhY3QuZm9yd2FyZFJlZihcbiAgKHsgbm9kZSwgaGFuZGxlTW91c2VEb3duLCBoYW5kbGVNb3VzZVVwLCBoYW5kbGVNb3VzZUVudGVyLCBpbmRleCB9LCByZWYpID0+IHtcbiAgICBjb25zdCBbaXNTdGFydCwgc2V0U3RhcnRdID0gdXNlU3RhdGUobm9kZS5zdGFydCk7XG4gICAgY29uc3QgW2lzRmluaXNoLCBzZXRGaW5pc2hdID0gdXNlU3RhdGUobm9kZS5maW5pc2gpO1xuICAgIGNvbnN0IFtpc0Jsb2NrZWQsIHNldEJsb2NrXSA9IHVzZVN0YXRlKG5vZGUuaXNCbG9ja2VkKTtcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgc2V0U3RhcnQobm9kZS5zdGFydCk7XG4gICAgICBzZXRCbG9jayhub2RlLmlzQmxvY2tlZCk7XG4gICAgICBzZXRGaW5pc2gobm9kZS5maW5pc2gpO1xuICAgIH0sIFtub2RlLnN0YXJ0LCBub2RlLmZpbmlzaCwgbm9kZS5pc0Jsb2NrZWRdKTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2XG4gICAgICAgIHJlZj17cmVmfVxuICAgICAgICBjbGFzc05hbWU9e2Bub2RlLSR7c3RhcnRPckZpbmlzaChpc1N0YXJ0LCBpc0ZpbmlzaCwgaXNCbG9ja2VkKX1gfVxuICAgICAgICBvbk1vdXNlRG93bj17KCkgPT4ge1xuICAgICAgICAgIGhhbmRsZU1vdXNlRG93bihpbmRleCk7XG4gICAgICAgIH19XG4gICAgICAgIG9uTW91c2VVcD17KCkgPT4ge1xuICAgICAgICAgIGhhbmRsZU1vdXNlVXAoaW5kZXgpO1xuICAgICAgICB9fVxuICAgICAgICBvbk1vdXNlRW50ZXI9eygpID0+IHtcbiAgICAgICAgICBoYW5kbGVNb3VzZUVudGVyKGluZGV4KTtcbiAgICAgICAgfX1cbiAgICAgID48L2Rpdj5cbiAgICApO1xuICB9XG4pO1xuXG5mdW5jdGlvbiBzdGFydE9yRmluaXNoKGlzU3RhcnQsIGlzRmluaXNoLCBpc0Jsb2NrZWQpIHtcbiAgaWYgKGlzU3RhcnQpIHtcbiAgICByZXR1cm4gXCJzdGFydFwiO1xuICB9IGVsc2UgaWYgKGlzRmluaXNoKSB7XG4gICAgcmV0dXJuIFwiZmluaXNoXCI7XG4gIH0gZWxzZSBpZiAoaXNCbG9ja2VkKSB7XG4gICAgcmV0dXJuIFwiYmxvY2tlZFwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIm5vcm1hbFwiO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IG5vZGU7XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50LCBGcmFnbWVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGluc3RydWN0aW9uIGZyb20gXCIuLi8uLi8uLi9pbWFnZS9pbnN0cnVjdGlvbi5naWZcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2Nzcy9tb2RhbC5jc3NcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgbW9kYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICBpc09wZW46IHRydWVcbiAgICB9O1xuICB9XG5cbiAgb3Blbk1vZGFsID0gKCkgPT4ge1xuICAgIHRoaXMuc2V0U3RhdGUoeyBpc09wZW46IGZhbHNlIH0pO1xuICB9O1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPEZyYWdtZW50PlxuICAgICAgICB7dGhpcy5zdGF0ZS5pc09wZW4gPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb2RhbC1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzcGFuIG9uQ2xpY2s9e3RoaXMub3Blbk1vZGFsfSBjbGFzc05hbWU9XCJjbG9zZVwiPlxuICAgICAgICAgICAgICAgICZ0aW1lcztcbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsLXRpdGxlXCI+XG4gICAgICAgICAgICAgICAgPHA+V2VsY29tZSB0byBQYXRoZmluZGVyICEgPC9wPlxuICAgICAgICAgICAgICAgIDxpbWcgc3JjPXtpbnN0cnVjdGlvbn0gd2lkdGg9XCIxMDBcIj48L2ltZz5cbiAgICAgICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgICAgIFRvIFZpc3VhbGl6ZSBhIHBhdGhmaW5kaW5nIGFsZ29yaXRobTogQ2hvb3NlIGFuIGFsZ29yaXRobSAtPlxuICAgICAgICAgICAgICAgICAgYnVpbGQgd2FsbHMgLT4gY2xpY2sgdmlzdWFsaXplICF7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvRnJhZ21lbnQ+XG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRpamtzdHJhIGZyb20gXCIuLi9hbGdvcml0aG1zL2RpamtzdHJhXCI7XG5pbXBvcnQgQXN0YXIgZnJvbSBcIi4uL2FsZ29yaXRobXMvQXN0YXJcIjtcbmltcG9ydCBCcmVhZHRoX2ZpcnN0X3NlYXJjaCBmcm9tIFwiLi4vYWxnb3JpdGhtcy9CcmVhZHRoLWZpcnN0LXNlYXJjaFwiO1xuaW1wb3J0IHNlYXJjaCBmcm9tIFwiLi4vYWxnb3JpdGhtcy9EZXB0aC1maXJzdC1zZWFyY2hcIjtcbmltcG9ydCBzdGFydCBmcm9tIFwiLi4vLi4vLi4vaW1hZ2Uvc3RhcnQucG5nXCI7XG5pbXBvcnQgZmluaXNoIGZyb20gXCIuLi8uLi8uLi9pbWFnZS9maW5pc2gucG5nXCI7XG5pbXBvcnQgYmxvY2sgZnJvbSBcIi4uLy4uLy4uL2ltYWdlL2Jsb2NrLnBuZ1wiO1xuaW1wb3J0IGNvbnF1ZXJlZCBmcm9tIFwiLi4vLi4vLi4vaW1hZ2UvY29ucXVlcmVkLnBuZ1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcIi4uLy4uLy4uL2ltYWdlL3BhdGgucG5nXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jc3MvbmF2YmFyLmNzc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBuYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgc2VsZWN0VmFsdWU6IFwiQWxnb3JpdGhtc1wiLFxuICAgICAgaXNEcm9wRG93bjogZmFsc2VcbiAgICB9O1xuICB9XG5cbiAgb25Ecm9wRG93biA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgaXNEcm9wRG93bjogIXRoaXMuc3RhdGUuaXNEcm9wRG93biB9KTtcbiAgfTtcblxuICBoYW5kbGVEcm9wZG93bkJ1dHRvbiA9IHZhbHVlID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgc2VsZWN0VmFsdWU6IHZhbHVlIH0pO1xuICB9O1xuXG4gIC8vIGRyb3Bkb3duIGxpc3RcblxuICBvcGVuTGlzdCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgPHVsIGNsYXNzTmFtZT1cIm9wdGlvbl9hbGdvcml0aG1zXCI+XG4gICAgICAgIDxsaSBvbkNsaWNrPXsoKSA9PiB0aGlzLmhhbmRsZURyb3Bkb3duQnV0dG9uKFwiRGlqa3N0cmFcIil9PkRpamtzdHJhPC9saT5cbiAgICAgICAgPGxpIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJvcGRvd25CdXR0b24uYmluZCh0aGlzLCBcIkEqXCIpfT5BKjwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJvcGRvd25CdXR0b24uYmluZCh0aGlzLCBcIkJyZWF0aC1maXJzdCBzZWFyY2hcIil9XG4gICAgICAgID5cbiAgICAgICAgICBCcmVhdGgtZmlyc3Qgc2VhcmNoXG4gICAgICAgIDwvbGk+XG4gICAgICAgIDxsaVxuICAgICAgICAgIG9uQ2xpY2s9e3RoaXMuaGFuZGxlRHJvcGRvd25CdXR0b24uYmluZCh0aGlzLCBcIkRlcHRoLWZpcnN0IHNlYXJjaFwiKX1cbiAgICAgICAgPlxuICAgICAgICAgIERlcHRoLWZpcnN0IHNlYXJjaFxuICAgICAgICA8L2xpPlxuICAgICAgPC91bD5cbiAgICApO1xuICB9O1xuXG4gIG9uVmlzdWFsaXplID0gKCkgPT4ge1xuICAgIGlmICghdGhpcy5wcm9wcy5zdGF0ZS5pc1Zpc3VhbGl6ZWQpIHtcbiAgICAgIHRoaXMucHJvcHMucmVzZXRWaXN1YWxpemUoKTtcblxuICAgICAgY29uc3Qge1xuICAgICAgICBncmlkLFxuICAgICAgICBzdGFydCxcbiAgICAgICAgZmluaXNoLFxuICAgICAgICByb3dzLFxuICAgICAgICBjb2x1bW5zLFxuICAgICAgICBzaG9ydGVzdFBhdGhcbiAgICAgIH0gPSB0aGlzLnByb3BzLnN0YXRlO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZSA9PT0gXCJEaWprc3RyYVwiKSB7XG4gICAgICAgIGNvbnN0IHsgcGF0aCwgY29ucXVlcmVkTm9kZSB9ID0gZGlqa3N0cmEoZ3JpZCwgc3RhcnQsIGZpbmlzaCwgMjAgKiA0MCk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXRoKHBhdGgsIGNvbnF1ZXJlZE5vZGUpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0VmlzdWFsaXplKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0VmFsdWUgPT09IFwiQSpcIikge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGNvbnF1ZXJlZE5vZGUgfSA9IEFzdGFyKFxuICAgICAgICAgIGdyaWQsXG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZmluaXNoLFxuICAgICAgICAgIDIwICogNDAsXG4gICAgICAgICAgcm93cyxcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMucHJvcHMuc2V0UGF0aChwYXRoLCBjb25xdWVyZWROb2RlKTtcblxuICAgICAgICB0aGlzLnByb3BzLnNldFZpc3VhbGl6ZSh0cnVlKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnN0YXRlLnNlbGVjdFZhbHVlID09PSBcIkJyZWF0aC1maXJzdCBzZWFyY2hcIikge1xuICAgICAgICBjb25zdCB7IHBhdGgsIGNvbnF1ZXJlZE5vZGUgfSA9IEJyZWFkdGhfZmlyc3Rfc2VhcmNoKFxuICAgICAgICAgIGdyaWQsXG4gICAgICAgICAgc3RhcnQsXG4gICAgICAgICAgZmluaXNoLFxuICAgICAgICAgIDIwICogNDAsXG4gICAgICAgICAgcm93cyxcbiAgICAgICAgICBjb2x1bW5zXG4gICAgICAgICk7XG5cbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXRoKHBhdGgsIGNvbnF1ZXJlZE5vZGUpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0VmlzdWFsaXplKHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuc3RhdGUuc2VsZWN0VmFsdWUgPT09IFwiRGVwdGgtZmlyc3Qgc2VhcmNoXCIpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoLCBjb25xdWVyZWROb2RlIH0gPSBzZWFyY2goXG4gICAgICAgICAgZ3JpZCxcbiAgICAgICAgICBzdGFydCxcbiAgICAgICAgICBmaW5pc2gsXG4gICAgICAgICAgMjAgKiA0MCxcbiAgICAgICAgICByb3dzLFxuICAgICAgICAgIGNvbHVtbnNcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5wcm9wcy5zZXRQYXRoKHBhdGgsIGNvbnF1ZXJlZE5vZGUpO1xuXG4gICAgICAgIHRoaXMucHJvcHMuc2V0VmlzdWFsaXplKHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZW5kZXIoKSB7XG4gICAgbGV0IGJhY2tncm91bmQgPSB0aGlzLnByb3BzLnN0YXRlLmlzVmlzdWFsaXplZCA/IFwiI2ZiOGMwMFwiIDogbnVsbDtcbiAgICBsZXQgYmFja2dyb3VuZF9jb2xvciA9IHsgY29sb3I6IGJhY2tncm91bmQgfTtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtYWluLW5hdlwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVwcGVyLW5hdlwiPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInBhZ2UtdGl0bGVcIj5QYXRoRmluZGVyPC9wPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJ1cHBlci1uYXYtbGlzdFwiPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e3RoaXMub25Ecm9wRG93bn0gY2xhc3NOYW1lPVwiZHJvcGRvd24gYWxnb3JpdGhtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWxlY3RcIj5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5zdGF0ZS5zZWxlY3RWYWx1ZVxuICAgICAgICAgICAgICAgICAgICAgIDogXCJBbGdvcml0aG1zXCJ9XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJtYXRlcmlhbC1pY29ucyBtZC1saWdodCBtZC1pbmFjdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkX2Fycm93X2Rvd25cbiAgICAgICAgICAgICAgICAgIDwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB7dGhpcy5zdGF0ZS5pc0Ryb3BEb3duID8gdGhpcy5vcGVuTGlzdCgpIDogbnVsbH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9e3RoaXMub25WaXN1YWxpemV9IHN0eWxlPXtiYWNrZ3JvdW5kX2NvbG9yfT5cbiAgICAgICAgICAgICAgICB7dGhpcy5wcm9wcy5zdGF0ZS5pc1Zpc3VhbGl6ZWQgPyBcIlZpc3VhbGl6aW5nICFcIiA6IFwiVmlzdWFsaXplXCJ9XG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9saT5cblxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBvbkNsaWNrPXt0aGlzLnByb3BzLmNsZWFyV2FsbHN9IGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgQ2xlYXIgd2FsbHNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb3dlci1uYXZcIj5cbiAgICAgICAgICA8dWw+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtzdGFydH0gYWx0PVwic3RhcnRcIiAvPlxuICAgICAgICAgICAgICA8cD5TdGFydDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtmaW5pc2h9IGFsdD1cImZpbmlzaFwiIC8+XG4gICAgICAgICAgICAgIDxwPkZpbmlzaDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtwYXRofSBhbHQ9XCJwYXRoXCIgLz5cbiAgICAgICAgICAgICAgPHA+UGF0aDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtibG9ja30gYWx0PVwiYmxvY2tcIiAvPlxuICAgICAgICAgICAgICA8cD5CbG9jazwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxpbWcgc3JjPXtjb25xdWVyZWR9IGFsdD1cImNvbnF1ZXJlZFwiIC8+XG4gICAgICAgICAgICAgIDxwPkNvbnF1ZXJlZDwvcD5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgUmVhY3RET00gZnJvbSBcInJlYWN0LWRvbVwiO1xuaW1wb3J0IEdyaWQgZnJvbSBcIi4vY29tcG9uZW50cy9ncmlkL2dyaWQuanN4XCI7XG5pbXBvcnQgTW9kYWwgZnJvbSBcIi4vY29tcG9uZW50cy9pbnN0cnVjdGlvbk1vZGFsL21vZGFsLmpzeFwiO1xuaW1wb3J0IFwiLi4vY3NzL21haW4uY3NzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keVwiPlxuICAgICAgICA8R3JpZCAvPlxuICAgICAgICA8TW9kYWwgLz5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicm9vdFwiKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9