/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatediplom_middle"]("main",{

/***/ "./src/modules/sliderGallery.js":
/*!**************************************!*\
  !*** ./src/modules/sliderGallery.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar sliderGallery = function sliderGallery() {\n  var slider = document.querySelector(\".gallery-slider\"),\n      slide = slider.querySelectorAll(\".slide\"),\n      dots = slider.querySelector(\".slider-dots\");\n  var dot;\n\n  var addDot = function addDot() {\n    for (var i = 1; i <= slide.length; i++) {\n      console.log(\"dots: \", dots);\n      var newDot = document.createElement(\"li.dot\");\n      dots.appendChild(newDot); //console.log(\"newDot: \", newDot);\n\n      newDot.classList.add(\"dot\");\n\n      if (i === 1) {\n        newDot.classList.add(\"dot-active\");\n      }\n\n      dots.append(newDot); //console.log(\"dots: \", dots);\n    }\n\n    dot = slider.querySelectorAll(\".dot\");\n  };\n\n  var currentSlide = 0,\n      interval;\n\n  var prevSlide = function prevSlide(elem, index, strClass) {\n    elem[index].classList.remove(strClass);\n    console.log(\"elem[index]: \", elem[index].classList);\n  };\n\n  var nextSlide = function nextSlide(elem, index, strClass) {\n    elem[index].classList.add(strClass);\n  };\n\n  var autoPlaySlide = function autoPlaySlide() {\n    console.log(\"slide: \", slide); //console.log(\"dot: \", dot);\n    //console.log(\"currentSlide: \", currentSlide);\n\n    prevSlide(slide, currentSlide, \"slide-active\"); //prevSlide(dot, currentSlide, \"dot-active\");\n\n    currentSlide++;\n    currentSlide = currentSlide % slide.length; //console.log(\"currentSlide: \", currentSlide);\n\n    nextSlide(slide, currentSlide, \"slide-active\"); //nextSlide(dot, currentSlide, \"dot-active\");\n  };\n\n  var startSlide = function startSlide() {\n    var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 3000;\n    interval = setInterval(autoPlaySlide, time);\n  };\n\n  var stopSlide = function stopSlide() {\n    clearInterval(interval);\n  };\n\n  addDot();\n  startSlide(1500); //console.log(\"slider starts\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sliderGallery);\n\n//# sourceURL=webpack://diplom_middle/./src/modules/sliderGallery.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("3a169b93d566661653ba")
/******/ })();
/******/ 
/******/ }
);