/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_utils__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./formulas */ "./src/js/formulas.js");
/* harmony import */ var _formulas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_formulas__WEBPACK_IMPORTED_MODULE_1__);
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


 // import style, {addStyle, style} from './style'
// addStyle();

var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
var HEIGHT = 300;
var WIDTH = innerWidth;
var BINARY = "";
canvas.width = WIDTH;
canvas.height = HEIGHT;
var mouse = {
  x: WIDTH / 2,
  y: HEIGHT / 2
};
var colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66']; // Event Listeners

addEventListener('mousemove', function (event) {
  mouse.x = event.clientX;
  mouse.y = event.clientY;
});
addEventListener('resize', function () {
  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  init();
});

document.getElementById("button").onclick = function () {
  BINARY = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["getInputValue"])();

  if (50 * BINARY.length + 50 > WIDTH) {
    WIDTH = 50 * BINARY.length + 100;
  }

  init();
}; // Objects


var _Object = /*#__PURE__*/function () {
  function Object(x, y, radius, color) {
    _classCallCheck(this, Object);

    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
  }

  _createClass(Object, [{
    key: "draw",
    value: function draw() {
      c.beginPath();
      c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
      c.fillStyle = this.color;
      c.fill();
      c.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
    }
  }]);

  return Object;
}();

function drawBoard() {
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.beginPath();
  c.moveTo(5, 5);
  c.lineTo(WIDTH - 5, 5);
  c.lineTo(WIDTH - 5, HEIGHT - 5);
  c.lineTo(WIDTH - 5, HEIGHT - 5);
  c.lineTo(5, HEIGHT - 5);
  c.lineTo(5, 5);
  c.stroke();
  c.closePath();
  c.beginPath();
  c.moveTo(5, HEIGHT / 2);
  c.lineTo(WIDTH - 5, HEIGHT / 2);
  c.setLineDash([10, 5]);
  c.lineWidth = 2;
  c.stroke();
  c.closePath();

  for (var i = 50, j = 0; i <= 50 * BINARY.length + 50; i += 50, j++) {
    c.beginPath();
    c.lineWidth = .5;
    c.setLineDash([0, 0]);
    c.moveTo(i, 5);
    c.lineTo(i, HEIGHT - 5);
    c.stroke();
    c.closePath();
    drawNumbers(i, j);
  }

  c.beginPath();
  c.moveTo(5, HEIGHT / 2 + 50);
  c.lineTo(WIDTH - 5, HEIGHT / 2 + 50);
  c.setLineDash([10, 5]);
  c.lineWidth = 2;
  c.stroke();
  c.closePath();
  c.beginPath();
  c.moveTo(5, HEIGHT / 2 - 50);
  c.lineTo(WIDTH - 5, HEIGHT / 2 - 50);
  c.setLineDash([10, 5]);
  c.lineWidth = 2;
  c.stroke();
  c.closePath();
}

function drawNumbers(i, j) {
  c.font = 'bold 20px sans-serif';
  if (j < BINARY.length) c.fillText(BINARY.charAt(j) + "", i + 25, 30);
}

function init() {
  canvas.width = WIDTH;
  drawBoard();
  Object(_formulas__WEBPACK_IMPORTED_MODULE_1__["NRZI"])(c, BINARY, HEIGHT, WIDTH);
} // Animation Loop


function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y);
}

init(); // drawBoard()
// animate()

/***/ }),

/***/ "./src/js/formulas.js":
/*!****************************!*\
  !*** ./src/js/formulas.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

function uniPolarNRZ(c, BINARY, HEIGHT, WIDTH) {
  c.beginPath();
  c.lineWidth = 2;
  c.setLineDash([0, 0]);
  c.strokeStyle = 'red';
  c.moveTo(50, HEIGHT / 2);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
    } else {
      c.lineTo(i, HEIGHT / 2);
      c.lineTo(i + 50, HEIGHT / 2);
    }
  }

  c.stroke();
  c.closePath();
}

function NRZI(c, BINARY, HEIGHT, WIDTH) {
  var inverse = true;
  var currentlvl = HEIGHT / 2;
  c.beginPath();
  c.lineWidth = 2;
  c.setLineDash([0, 0]);
  c.strokeStyle = 'red';
  c.moveTo(50, HEIGHT / 2);

  for (var i = 50, j = 0; j < BINARY.length; i += 50, j++) {
    if (BINARY.charAt(j) == 1 && inverse) {
      c.lineTo(i, HEIGHT / 2 - 50);
      c.lineTo(i + 50, HEIGHT / 2 - 50);
      inverse = false;
      currentlvl = HEIGHT / 2 - 50;
    } else if (BINARY.charAt(j) == 1 && !inverse) {
      c.lineTo(i, HEIGHT / 2 + 50);
      c.lineTo(i + 50, HEIGHT / 2 + 50);
      inverse = true;
      currentlvl = HEIGHT / 2 + 50;
    } else {
      c.lineTo(i + 50, currentlvl);
    }
  }

  c.stroke();
  c.closePath();
}

module.exports = {
  uniPolarNRZ: uniPolarNRZ,
  NRZI: NRZI
};

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

function randomIntFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomColor(colors) {
  return colors[Math.floor(Math.random() * colors.length)];
}

function distance(x1, y1, x2, y2) {
  var xDist = x2 - x1;
  var yDist = y2 - y1;
  return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
}

function getInputValue() {
  var binary = document.querySelector("#binary").value;
  console.log(binary);
  return binary;
}

module.exports = {
  randomIntFromRange: randomIntFromRange,
  randomColor: randomColor,
  distance: distance,
  getInputValue: getInputValue
};

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map