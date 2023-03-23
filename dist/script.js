/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/libs/core.js":
/*!*****************************!*\
  !*** ./src/js/libs/core.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const $ = function (selector) {
  return new $.prototype.init(selector);
};
$.prototype.init = function (selector) {
  if (!selector) {
    return this; // {} пустий обʼєкт
  }

  if (selector.tagName) {
    this[0] = selector;
    this.length = 1;
    return this;
  }
  Object.assign(this, document.querySelectorAll(selector)); // додаємо в ЦЕЙ обʼєкт вибрані елементи
  this.length = document.querySelectorAll(selector).length; // властивість з кількістю вибраних елементів
  return this;
};
$.prototype.init.prototype = $.prototype; // Записуємо в прототип функціі 30-36, прототип головної функції.  Це дає змогу використувувати на головній вункції $ всі методи функціі 30-36
window.$ = $; // Записуємо функцію в глобальний обʼєкт window
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ($);

/***/ }),

/***/ "./src/js/libs/lib.js":
/*!****************************!*\
  !*** ./src/js/libs/lib.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core */ "./src/js/libs/core.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/js/libs/modules/display.js");
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes */ "./src/js/libs/modules/classes.js");
/* harmony import */ var _modules_handlers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers */ "./src/js/libs/modules/handlers.js");
/* harmony import */ var _modules_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/attributes */ "./src/js/libs/modules/attributes.js");
/* harmony import */ var _modules_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/actions */ "./src/js/libs/modules/actions.js");
/* harmony import */ var _modules_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/effects */ "./src/js/libs/modules/effects.js");
// Додаємо до основної функціі $, інші методи 







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/libs/modules/actions.js":
/*!****************************************!*\
  !*** ./src/js/libs/modules/actions.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/libs/core.js");


// змінює структуру Елементу. Також отримує елемент
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }
  return this;
};

//отримуємо елемент за номером
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.eq = function (i) {
  const swap = this[i];
  const objLength = Object.keys(this).length;
  for (let i = 0; i < objLength; i++) {
    delete this[i];
  }
  this[0] = swap;
  this.length = 1;
  return this;
};

//отримуємо номер елементу (число)
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.index = function () {
  const parent = this[0].parentNode;
  const childs = [...parent.children];
  const findMyIndex = item => {
    return item == this[0];
  };
  return childs.findIndex(findMyIndex);
};

// Шукає усі елементи. формує в масив
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.find = function (selector) {
  let numberOfItems = 0; //  загальна кількість елементів
  let conunter = 0; // кількість записаних елементів

  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].querySelectorAll(selector);
    if (arr.length == 0) {
      continue;
    }
    for (let j = 0; j < arr.length; j++) {
      this[conunter] = arr[j];
      conunter++;
    }
    numberOfItems += arr.length;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

// повертає найбилжчого сусіда 
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.closest = function (selector) {
  let counter = 0;
  for (let i = 0; i < this.length; i++) {
    let length = this.length;
    if (this[i].closest(selector)) {
      this[i] = this[i].closest(selector);
      counter++;
    } else {
      console.log(`This parent Class ${selector} is not found for used child Class`);
      length--;
    }
  }
  this.length = length;
  const objLength = Object.keys(this).length;
  for (; counter < objLength; counter++) {
    delete this[counter];
  }
  return this;
};

// повертає Усіх сосідів, без наявності вказаного елемента.

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.siblings = function () {
  let numberOfItems = 0; //  загальна кількість елементів
  let conunter = 0; // кількість записаних елементів

  const copyObj = Object.assign({}, this);
  for (let i = 0; i < copyObj.length; i++) {
    const arr = copyObj[i].parentNode.children;
    for (let j = 0; j < arr.length; j++) {
      if (copyObj[i] === arr[j]) {
        continue;
      }
      this[conunter] = arr[j];
      conunter++;
    }
    numberOfItems += arr.length - 1;
  }
  this.length = numberOfItems;
  const objLength = Object.keys(this).length;
  for (; numberOfItems < objLength; numberOfItems++) {
    delete this[numberOfItems];
  }
  return this;
};

/***/ }),

/***/ "./src/js/libs/modules/attributes.js":
/*!*******************************************!*\
  !*** ./src/js/libs/modules/attributes.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/libs/core.js");


//  Установка атрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.setAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (!name && !value) {
      return this;
    } else if (name && !value) {
      this[i].setAttribute(name, '');
    } else {
      this[i].setAttribute(name, value);
    }
  }
  return this;
};

//  Удаление атрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeAttribute(name);
  }
  return this;
};

//  Переключение атрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleAttr = function (name, value) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].hasAttribute(name)) {
      this[i].removeAttribute(name);
    } else if (name && !value) {
      this[i].setAttribute(name, '');
    } else {
      this[i].setAttribute(name, value);
    }
  }
  return this;
};

//  Значение атрибута
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.getAttr = function (name) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].getAttribute(name)) {
      continue;
    }
    return this[i].getAttribute(name);
  }
};

/***/ }),

/***/ "./src/js/libs/modules/classes.js":
/*!****************************************!*\
  !*** ./src/js/libs/modules/classes.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/libs/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.addClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.add(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.removeClass = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.remove(...arguments);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].classList) {
      continue;
    }
    this[i].classList.toggle(className);
  }
  return this;
};

/***/ }),

/***/ "./src/js/libs/modules/display.js":
/*!****************************************!*\
  !*** ./src/js/libs/modules/display.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/libs/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.show = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      //перевірка на наявніть властивості Style
      continue;
    }
    this[i].style.display = '';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      //перевірка на наявніть властивості Style
      continue;
    }
    this[i].style.display = 'none';
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.toggle = function () {
  for (let i = 0; i < this.length; i++) {
    if (!this[i].style) {
      //перевірка на наявніть властивості Style
      continue;
    }
    if (this[i].style.display === 'none') {
      this[i].style.display = '';
    } else {
      this[i].style.display === 'none';
    }
  }
  return this;
};

/***/ }),

/***/ "./src/js/libs/modules/effects.js":
/*!****************************************!*\
  !*** ./src/js/libs/modules/effects.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/libs/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.animateOverTime = function (duration, callBack, fin) {
  let timeStart;
  function _animateOverTime(time) {
    if (!timeStart) {
      timeStart = time; // Задаємо час початку
    }

    let timeElapsed = time - timeStart; // Час дії анімації
    let complection = Math.min(timeElapsed / duration, 1); // від  0 до 1

    callBack(complection);
    if (timeElapsed < duration) {
      requestAnimationFrame(_animateOverTime);
    } else {
      if (typeof fin === 'function') {
        fin();
      }
    }
  }
  return _animateOverTime;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeIn = function (duration, display, fin) {
  for (let i = 0; i < this.length; i++) {
    this[i].style.display = display || 'block'; //параметр за умовчанням. Блок якщо не передано дісплей

    const _fadeIn = complection => {
      this[i].style.opacity = complection; // зінює opacity в залежності від виранованого complection
    };

    const ani = this.animateOverTime(duration, _fadeIn, fin);
    requestAnimationFrame(ani);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.fadeOut = function (duration, fin) {
  for (let i = 0; i < this.length; i++) {
    const _fadeOut = complection => {
      this[i].style.opacity = 1 - complection;
      if (complection === 1) {
        this[i].style.display = 'none';
      }
    };
    const ani = this.animateOverTime(duration, _fadeOut, fin);
    requestAnimationFrame(ani);
  }
  return this;
};

/***/ }),

/***/ "./src/js/libs/modules/handlers.js":
/*!*****************************************!*\
  !*** ./src/js/libs/modules/handlers.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core */ "./src/js/libs/core.js");

_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.on = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.off = function (eventName, callback) {
  if (!eventName || !callback) {
    return this;
  }
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }
  return this;
};
_core__WEBPACK_IMPORTED_MODULE_0__["default"].prototype.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('click', handler);
    } else {
      this[i].click();
    }
  }
  return this;
};

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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _libs_lib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./libs/lib */ "./src/js/libs/lib.js");

(0,_libs_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('#first').on('click', () => {
  (0,_libs_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-text="first"]').fadeOut(800);
});
(0,_libs_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="second"]').on('click', () => {
  (0,_libs_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-text="second"]').fadeOut(800);
});
(0,_libs_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-count="all"]').on('click', () => {
  (0,_libs_lib__WEBPACK_IMPORTED_MODULE_0__["default"])('.text').fadeOut(800);
});
})();

/******/ })()
;
//# sourceMappingURL=script.js.map