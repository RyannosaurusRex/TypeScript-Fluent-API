/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var dog_1 = __webpack_require__(1);
	var dog = new dog_1["default"]();
	dog.Bark();


/***/ },
/* 1 */
/***/ function(module, exports) {

	"use strict";
	var Dog = (function () {
	    function Dog() {
	    }
	    Dog.prototype.Bark = function () {
	        console.log("Bark!!");
	        return this;
	    };
	    Dog.prototype.Scratch = function () {
	        return this;
	    };
	    Dog.prototype.Woof = function () {
	        return this;
	    };
	    Dog.prototype.GoOnWalk = function () {
	        return new WalkCommand(this);
	    };
	    Dog.prototype.GoForRun = function () {
	        return new RunCommand(this);
	    };
	    return Dog;
	}());
	exports.__esModule = true;
	exports["default"] = Dog;
	var WalkCommand = (function () {
	    function WalkCommand(dog) {
	        this.dog = dog;
	    }
	    WalkCommand.prototype.GoToPark = function () {
	        return this;
	    };
	    WalkCommand.prototype.GoHome = function () {
	        return this.dog;
	    };
	    return WalkCommand;
	}());
	exports.WalkCommand = WalkCommand;
	var RunCommand = (function () {
	    function RunCommand(dog) {
	        this.dog = dog;
	    }
	    RunCommand.prototype.RunToPark = function () {
	        return this;
	    };
	    RunCommand.prototype.GoHome = function () {
	        return this.dog;
	    };
	    return RunCommand;
	}());
	exports.RunCommand = RunCommand;


/***/ }
/******/ ]);