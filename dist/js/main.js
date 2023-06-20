/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_timer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/timer */ \"./modules/timer.js\");\n/* harmony import */ var _modules_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/menu */ \"./modules/menu.js\");\n/* harmony import */ var _modules_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/modal */ \"./modules/modal.js\");\n/* harmony import */ var _modules_slider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/slider */ \"./modules/slider.js\");\n/* harmony import */ var _modules_calculator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/calculator */ \"./modules/calculator.js\");\n/* harmony import */ var _modules_sendForm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/sendForm */ \"./modules/sendForm.js\");\n/* harmony import */ var _modules_scrollAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/scrollAnimation */ \"./modules/scrollAnimation.js\");\n/* harmony import */ var _modules_sertificateModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/sertificateModal */ \"./modules/sertificateModal.js\");\n\n\n\n\n\n\n\n\n\n(0,_modules_timer__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('7 July 2023')\n;(0,_modules_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])()\n;(0,_modules_modal__WEBPACK_IMPORTED_MODULE_2__[\"default\"])()\n;(0,_modules_slider__WEBPACK_IMPORTED_MODULE_3__[\"default\"])()\n;(0,_modules_calculator__WEBPACK_IMPORTED_MODULE_4__[\"default\"])()\n;(0,_modules_scrollAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"])()\n;(0,_modules_sertificateModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"])()\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({\n\tformName: 'action-form',\n\tsomeElem: [\n\t\t{\n\t\t\ttype: 'input',\n\t\t\tvalue: 'value',\n\t\t\tid: 'calc-total'\n\t\t}\n\t]\n\t})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({formName: 'action-form2'})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({formName: 'callback-form'})\n;(0,_modules_sendForm__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({formName: 'application-form'})\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/calculator.js":
/*!*******************************!*\
  !*** ./modules/calculator.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst calculator = () => {\n\tconst calcBlock = document.getElementById('calc')\n\tconst calcType = document.getElementById('calc-type')\n\tconst calcTypeMaterial = document.getElementById('calc-type-material')\n\tconst calcSquare = document.getElementById('calc-input')\n\tconst total = document.getElementById('calc-total')\n\n\n\tconst validate = function () {\n\t\tthis.value = this.value.replace(/\\D/g, '')\n\t}\n\n\n\tconst countCalc = () => {\n\t\tlet totalValue = 0\n\t\tconst calcTypeValue = +calcType.options[calcType.selectedIndex].value;\n\t\tlet calcTypeMaterialValue = +calcTypeMaterial.options[calcTypeMaterial.selectedIndex].value\n\t\tconst calcSquareValue = +calcSquare.value\n\n\t\tif(calcTypeMaterial.value == '--'){\n\t\t\tcalcTypeMaterialValue = 1\n\t\t}\n\t\t\n\t\tif(calcType.value != '--' && calcSquare.value) {\n\t\t\ttotalValue = calcSquareValue * calcTypeValue * calcTypeMaterialValue\n\t\t\ttotal.value = totalValue\n\t\t} else {\n\t\t\ttotalValue = ''\n\t\t\ttotal.placeholder = 'Итого'\n\t\t}\n\t}\n\n\tif(calcBlock) {\n\t\tcalcBlock.addEventListener('input', (e) => {\n\t\t\t\tif(\n\t\t\t\t\te.target === calcType ||\n\t\t\t\t\te.target === calcTypeMaterial ||\n\t\t\t\t\te.target === calcSquare) {\n\t\t\t\t\t\tcountCalc()\n\t\t\t\t\t}\n\t\t})\n\t}\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (calculator);\n\n//# sourceURL=webpack:///./modules/calculator.js?");

/***/ }),

/***/ "./modules/menu.js":
/*!*************************!*\
  !*** ./modules/menu.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst menu = () => {\n  const buttonsMenu = document.querySelectorAll('.navbar-toggle')\n  const headerMenu = document.querySelector('.navbar-left')\n\n  console.log()\n\n\n  buttonsMenu.forEach(btn => {\n    btn.addEventListener('click', () => {\n      \n      \n    })\n  })\n\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (menu);\n\n\n//# sourceURL=webpack:///./modules/menu.js?");

/***/ }),

/***/ "./modules/modal.js":
/*!**************************!*\
  !*** ./modules/modal.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst modal = () => {\n\tconst popupBtn = document.querySelector('.button > .fancyboxModal')\n\tconst modal = document.querySelector('.header-modal')\n\tconst overlayModal = document.querySelector('.overlay')\n\tconst popupClose = document.querySelector('.header-modal__close')\n\tconst blockBody = document.querySelector('body')\n\n\tconst btnSevices = document.querySelectorAll('.service-button')\n\tconst modalServices = document.querySelector('.services-modal')\n\n\tconst openModal = (modalElem, overlayElem) => {\n\t\tmodalElem.style.display = 'block'\n\t\toverlayElem.style.display = 'block'\n\t}\n\n\tconst closeModal = (modalElem, overlayElem) => {\n\t\tmodalElem.style.display = 'none'\n\t\toverlayElem.style.display = 'none'\n\t}\n\n\tpopupBtn.addEventListener('click', () => {\n\t\topenModal(modal, overlayModal)\n\t})\n\tbtnSevices.forEach(btn => {\n\t\tbtn.addEventListener('click', () => {\n\t\t\topenModal(modalServices, overlayModal)\n\t\t})\n\t})\n\n\tblockBody.addEventListener('click', (e) => {\n\t\tif(e.target.closest(\".overlay\") || e.target.closest('.header-modal__close')){\n\t\t\tcloseModal(modal, overlayModal)\n\t\t}\n\t\tif(e.target.closest(\".overlay\") || e.target.closest('.services-modal__close')){\n\t\t\tcloseModal(modalServices, overlayModal)\n\t\t}\n\t})\n\n\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modal);\n\n//# sourceURL=webpack:///./modules/modal.js?");

/***/ }),

/***/ "./modules/scrollAnimation.js":
/*!************************************!*\
  !*** ./modules/scrollAnimation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst scrollAnimation = () => {\n\tconst anchor = document.querySelector('.smooth-scroll')\n\tconst header = document.querySelector('#header')\n\tconst nav = document.querySelector('#navigation')\n\tconst offer = document.querySelector('#offer')\n\n\tanchor.style.display = 'none'\n\tconst height = +header.offsetHeight + +nav.offsetHeight + +offer.offsetHeight\n\n\t\n\twindow.addEventListener('scroll', () => {\n\t\tconst scroll = document.documentElement.scrollTop\n\n\t\tif(scroll > height) {\n\t\t\tanchor.style.display = 'block'\n\t\t} else if (scroll < height) {\n\t\t\tanchor.style.display = 'none'\n\t\t}\n\t})\n\t\n\tanchor.addEventListener('click', function(e){\n\t\te.preventDefault()\n\t\theader.scrollIntoView({\n\t\t\tbehavior: 'smooth',\n\t\t\tblock: 'start'\n\t\t})\n\t})\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (scrollAnimation); \n\n//# sourceURL=webpack:///./modules/scrollAnimation.js?");

/***/ }),

/***/ "./modules/sendForm.js":
/*!*****************************!*\
  !*** ./modules/sendForm.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sendForm = ({formName, someElem = [] }) => {\n\tconst forms = document.getElementsByName(formName)\n\tconst body = document.querySelector('body')\n\n\tconst validate = (list) => {\n\t\tlet success = true\n\n\t\tconst namePattern = /[а-яёА-ЯЁa-zA-Z]/i;\n    const phonePattern = /\\+\\d{10,16}/g;\n\n\t\tlist.forEach(input => {\n\t\t\tif(input.name === 'fio'){\n\t\t\t\tif(!namePattern.test(input.value)){\n\t\t\t\t\tsuccess = false\n\t\t\t\t}\n\t\t\t}\n\t\t\tif(input.name === 'phone'){\n\t\t\t\tif(phonePattern.test(input.value) !== true){\n\t\t\t\t\tsuccess = false\n\t\t\t\t}\n\t\t\t}\n\t\t})\n\t\treturn success\n\t}\n\n\tconst sendData = (data) => {\n\t\t\treturn fetch(\"https://jsonplaceholder.typicode.com/posts\", {\n\t\t\t\tmethod: \"POST\",\n\t\t\t\tbody: JSON.stringify(data),\n\t\t\t\theaders: {\n\t\t\t\t\t\"Content-type\": \"application/json\"\n\t\t\t\t},\n\t\t\t}).then(res => res.json)\n\t}\n\n\n\tforms.forEach(form => {\n\t\tform.addEventListener('submit', (e) => {\n\t\t\te.preventDefault()\n\n\t\t\tconst formElements = form.querySelectorAll('input')\n\t\t\tconst formData = new FormData(form)\n\t\t\tconst formBody = {}\n\t\t\tformData.forEach((val, key) => {\n\t\t\t\tformBody[key] = val\n\t\t\t})\n\n\t\t\tif(body.classList.contains(\"balkony\")) {\n\t\t\t\tsomeElem.forEach(elem => {\n\t\t\t\t\tconst element = document.getElementById(elem.id)\n\t\t\t\t\tconsole.log(element)\n\t\t\t\t\tif(elem.type === 'input'){\n\t\t\t\t\t\tformBody[elem.id] = element.value\n\t\t\t\t\t}\n\t\t\t\t})\n\t\t\t}\n\t\n\t\t\t\tif(validate(formElements)) {\n\t\t\t\t\tsendData(formBody)\n\t\t\t\t\t\t.then(data => {\n\t\t\t\t\t\t\tformElements.forEach(input => {\n\t\t\t\t\t\t\t\tinput.value = ''\n\t\t\t\t\t\t\t})\n\t\t\t\t\t\t}).catch(error => console.log(error))\n\t\t\t\t} else {\n\t\t\t\t\talert(`Данные не валидны!\nИмя в формате: Иван или Ivan\nТелефон в формате: +XXXXXXXXXXX`)\n\t\t\t\t}\n\n\n\t\t\n\t\t})\n\t})\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendForm);\n\n//# sourceURL=webpack:///./modules/sendForm.js?");

/***/ }),

/***/ "./modules/sertificateModal.js":
/*!*************************************!*\
  !*** ./modules/sertificateModal.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst sertificateModal = () => {\n\tconst sertificats = document.querySelectorAll('a > .img-responsive')\n\tconst overlaySertificate = document.querySelectorAll('.document-overlay')\n\n\tconst createModal = () => {\n\t\tconst div = document.createElement('div')\n\t\tdiv.id = 'sertificat-modal'\n\t\tdiv.innerHTML = `\n\t\t<img class='sertificat-modal-img'>\n\t\t`\n\t\t\n\t}\n\n\n\n\n\tsertificats.forEach((sertificate) => {\n\t\t// console.log(sertificate)\n\t})\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sertificateModal);\n\n//# sourceURL=webpack:///./modules/sertificateModal.js?");

/***/ }),

/***/ "./modules/slider.js":
/*!***************************!*\
  !*** ./modules/slider.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst slider = () => {\n\n\tconst sliderBlock = document.querySelector('.benefits-wrap')\n\tconst slides = document.querySelectorAll('.benefits__item')\n\tconst buttonLeft = document.querySelector('.benefits__arrow--left')\n\tconst buttonRight = document.querySelector('.benefits__arrow--right')\n\n\tlet current = 0;\n\n\tconst slider = () => {\n\t\tfor(let i = 0; i < slides.length; i++ ){\n\t\t\t\n\t\t}\n\t\tslides[current].style = 'opacity: 0'\n\t}\n\t\n\n\tconst prevSlide = () => {\n\n\t}\n\n\tconst nextSlide = () => {\n\n\t}\n\n\n}\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack:///./modules/slider.js?");

/***/ }),

/***/ "./modules/timer.js":
/*!**************************!*\
  !*** ./modules/timer.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst timer = (deadline) => {\n  const timerDays = document.querySelectorAll('.count_1>span')\n  const timerHours = document.querySelectorAll('.count_2>span')\n  const timerMinutes = document.querySelectorAll('.count_3>span')\n  const timerSecondes = document.querySelectorAll('.count_4>span')\n\n  const divTime = document.querySelectorAll('.countdown-text')\n\n  const getTimeRemaining = () => {\n    let dateStop = new Date(deadline).getTime()\n    let dateNow = new Date().getTime()\n    let timeRemaining = (dateStop - dateNow) / 1000\n    let days = Math.floor(timeRemaining / 60 / 60 / 24)\n    let hours = Math.floor((timeRemaining / 60 / 60) % 24)\n    let minutes = Math.floor((timeRemaining / 60) % 60)\n    let secondes = Math.floor(timeRemaining % 60)\n\n    return {\n      timeRemaining,\n      days,\n      hours,\n      minutes,\n      secondes\n    }\n  }\n\n  const updateClock = () => {\n    let getTime = getTimeRemaining()\n\n    timerDays.forEach(timerDay => timerDay.textContent = getTime.days < 10 ? \"0\" + getTime.days : getTime.days)\n    timerHours.forEach(timerHour => timerHour.textContent = getTime.hours < 10 ? \"0\" + getTime.hours : getTime.hours)\n    timerMinutes.forEach(timerMinute => timerMinute.textContent = getTime.minutes < 10 ? \"0\" + getTime.minutes : getTime.minutes)\n    timerSecondes.forEach(timerSeconde => timerSeconde.textContent = getTime.secondes < 10 ? \"0\" + getTime.secondes : getTime.secondes)\n\n  }\n\n   const timerInterval = () => {\n    let getTime = getTimeRemaining();\n\n    if (getTime.timeRemaining > 0) {\n      setInterval(() => {\n        updateClock();\n      }, 1000);\n    }\n    if (getTime.timeRemaining < 0) {\n      divTime.forEach(div => div.innerHTML = \"Акция закончилась\");\n    }\n  };\n\n  timerInterval()\n\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (timer);\n\n\n//# sourceURL=webpack:///./modules/timer.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;