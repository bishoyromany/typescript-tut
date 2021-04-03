/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./chapters/methods.ts":
/*!*****************************!*\
  !*** ./chapters/methods.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var methods = function () {
    var yearToMonths = function (year, secondYear) {
        return year * 12 * (secondYear ? secondYear : 1);
    };
    var fullName = function (person) {
        return person.firstName + " " + (person.lastName ? person.lastName : '');
    };
    var person = {
        firstName: "Bishoy",
        lastName: "Romany"
    };
    console.log("Methods");
    console.table({
        age: yearToMonths(30, 10),
        fullName: fullName(person)
    });
};
exports.default = methods;


/***/ }),

/***/ "./chapters/types.ts":
/*!***************************!*\
  !*** ./chapters/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
var types = function () {
    /**
     * @string
     * @number
     * @boolean
     * @null
     * @undefined
     */
    var name = "Name";
    var names = ["Name1", "Name2"];
    var age = 10;
    var ages = [1, 2];
    var namesAges = ["Name1", 2];
    var unlimitedNamesAges = ["Name1", 10, 20, "Name2"];
    var isUser = true;
    var verifyDate = null;
    var country = undefined;
    var multipleTypes = "Could Be String Or Number";
    console.warn("Basic Types.");
    console.table({
        name: name, names: names, age: age, ages: ages, namesAges: namesAges, unlimitedNamesAges: unlimitedNamesAges, isUser: isUser, verifyDate: verifyDate, country: country, multipleTypes: multipleTypes
    });
    /**
     * @enum
     * @any
     * @unknown
     */
    var Job;
    (function (Job) {
        Job["Frontend"] = "Frontend Web Developer";
        Job["Backend"] = "Backend Web Developer";
    })(Job || (Job = {}));
    ;
    var frontend = Job.Frontend;
    var randomArray = ["String", 1, true, null, undefined];
    var unknownVar = "String";
    console.warn("More Advanced Types.");
    console.table({ frontend: frontend, randomArray: randomArray, unknownVar: unknownVar });
};
exports.default = types;


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!******************!*\
  !*** ./index.ts ***!
  \******************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
/**
 * Types Parts
 */
var types_1 = __webpack_require__(/*! ./chapters/types */ "./chapters/types.ts");
/**
 * Methods
 */
var methods_1 = __webpack_require__(/*! ./chapters/methods */ "./chapters/methods.ts");
types_1.default();
methods_1.default();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXR1dC8uL2NoYXB0ZXJzL21ldGhvZHMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10dXQvLi9jaGFwdGVycy90eXBlcy50cyIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXR1dC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90eXBlc2NyaXB0LXR1dC8uL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sT0FBTyxHQUFHO0lBQ1osSUFBTSxZQUFZLEdBQUcsVUFBQyxJQUFZLEVBQUUsVUFBa0I7UUFDbEQsT0FBTyxJQUFJLEdBQUcsRUFBRSxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwRCxDQUFDO0lBT0QsSUFBTSxRQUFRLEdBQUcsVUFBQyxNQUFjO1FBQzVCLE9BQVUsTUFBTSxDQUFDLFNBQVMsVUFBSSxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUUsQ0FBQztJQUMzRSxDQUFDO0lBRUQsSUFBSSxNQUFNLEdBQVc7UUFDakIsU0FBUyxFQUFFLFFBQVE7UUFDbkIsUUFBUSxFQUFFLFFBQVE7S0FDckIsQ0FBQztJQUVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDdkIsT0FBTyxDQUFDLEtBQUssQ0FBQztRQUNWLEdBQUcsRUFBRSxZQUFZLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQztRQUN6QixRQUFRLEVBQUUsUUFBUSxDQUFDLE1BQU0sQ0FBQztLQUM3QixDQUFDO0FBQ04sQ0FBQztBQUVELGtCQUFlLE9BQU8sQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFCdkIsSUFBTSxLQUFLLEdBQUc7SUFDVjs7Ozs7O09BTUc7SUFFSCxJQUFJLElBQUksR0FBVyxNQUFNLENBQUM7SUFDMUIsSUFBSSxLQUFLLEdBQWEsQ0FBQyxPQUFPLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDekMsSUFBSSxHQUFHLEdBQVcsRUFBRSxDQUFDO0lBQ3JCLElBQUksSUFBSSxHQUFrQixDQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNoQyxJQUFJLFNBQVMsR0FBcUIsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxrQkFBa0IsR0FBVSxDQUFDLE9BQU8sRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzNELElBQUksTUFBTSxHQUFZLElBQUksQ0FBQztJQUMzQixJQUFJLFVBQVUsR0FBUyxJQUFJLENBQUM7SUFDNUIsSUFBSSxPQUFPLEdBQWMsU0FBUyxDQUFDO0lBQ25DLElBQUksYUFBYSxHQUFvQiwyQkFBMkIsQ0FBQztJQUVqRSxPQUFPLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDVixJQUFJLFFBQUUsS0FBSyxTQUFFLEdBQUcsT0FBRSxJQUFJLFFBQUUsU0FBUyxhQUFFLGtCQUFrQixzQkFBRSxNQUFNLFVBQUUsVUFBVSxjQUFFLE9BQU8sV0FBRSxhQUFhO0tBQ3BHLENBQUMsQ0FBQztJQUVIOzs7O09BSUc7SUFDSCxJQUFLLEdBQTRFO0lBQWpGLFdBQUssR0FBRztRQUFFLDBDQUFtQztRQUFFLHdDQUFpQztJQUFBLENBQUMsRUFBNUUsR0FBRyxLQUFILEdBQUcsUUFBeUU7SUFBQSxDQUFDO0lBRWxGLElBQUksUUFBUSxHQUFRLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDakMsSUFBSSxXQUFXLEdBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7SUFDOUQsSUFBSSxVQUFVLEdBQVksUUFBUSxDQUFDO0lBRW5DLE9BQU8sQ0FBQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNyQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsUUFBUSxZQUFFLFdBQVcsZUFBRSxVQUFVLEVBQUcsVUFBcUIsRUFBQyxDQUFDLENBQUM7QUFDL0UsQ0FBQztBQUVELGtCQUFlLEtBQUssQ0FBQzs7Ozs7OztVQ3hDckI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBOztHQUVHO0FBQ0gsaUZBQXFDO0FBQ3JDOztHQUVHO0FBQ0gsdUZBQXlDO0FBRXpDLGVBQUssRUFBRSxDQUFDO0FBQ1IsaUJBQU8sRUFBRSxDQUFDIiwiZmlsZSI6ImluZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWV0aG9kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHllYXJUb01vbnRocyA9ICh5ZWFyOiBudW1iZXIsIHNlY29uZFllYXI/Om51bWJlcik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHllYXIgKiAxMiAqIChzZWNvbmRZZWFyID8gc2Vjb25kWWVhcjogMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIFBlcnNvbiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgbGFzdE5hbWU/OiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmdWxsTmFtZSA9IChwZXJzb246IFBlcnNvbik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3BlcnNvbi5maXJzdE5hbWV9ICR7cGVyc29uLmxhc3ROYW1lID8gcGVyc29uLmxhc3ROYW1lIDogJyd9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGVyc29uOiBQZXJzb24gPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBcIkJpc2hveVwiLCBcclxuICAgICAgICBsYXN0TmFtZTogXCJSb21hbnlcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1ldGhvZHNcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHtcclxuICAgICAgICBhZ2U6IHllYXJUb01vbnRocygzMCwgMTApLFxyXG4gICAgICAgIGZ1bGxOYW1lOiBmdWxsTmFtZShwZXJzb24pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzOyIsImNvbnN0IHR5cGVzID0gKCkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RyaW5nXHJcbiAgICAgKiBAbnVtYmVyXHJcbiAgICAgKiBAYm9vbGVhblxyXG4gICAgICogQG51bGxcclxuICAgICAqIEB1bmRlZmluZWRcclxuICAgICAqL1xyXG5cclxuICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIk5hbWVcIjtcclxuICAgIGxldCBuYW1lczogc3RyaW5nW10gPSBbXCJOYW1lMVwiLCBcIk5hbWUyXCJdO1xyXG4gICAgbGV0IGFnZTogbnVtYmVyID0gMTA7XHJcbiAgICBsZXQgYWdlczogQXJyYXk8bnVtYmVyPiA9IFsxLDJdO1xyXG4gICAgbGV0IG5hbWVzQWdlczogW3N0cmluZywgbnVtYmVyXSA9IFtcIk5hbWUxXCIsIDJdO1xyXG4gICAgbGV0IHVubGltaXRlZE5hbWVzQWdlczogYW55W10gPSBbXCJOYW1lMVwiLCAxMCwgMjAsIFwiTmFtZTJcIl07XHJcbiAgICBsZXQgaXNVc2VyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGxldCB2ZXJpZnlEYXRlOiBudWxsID0gbnVsbDtcclxuICAgIGxldCBjb3VudHJ5OiB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgbXVsdGlwbGVUeXBlczogc3RyaW5nIHwgbnVtYmVyID0gXCJDb3VsZCBCZSBTdHJpbmcgT3IgTnVtYmVyXCI7XHJcbiAgICBcclxuICAgIGNvbnNvbGUud2FybihcIkJhc2ljIFR5cGVzLlwiKTtcclxuICAgIGNvbnNvbGUudGFibGUoe1xyXG4gICAgICAgIG5hbWUsIG5hbWVzLCBhZ2UsIGFnZXMsIG5hbWVzQWdlcywgdW5saW1pdGVkTmFtZXNBZ2VzLCBpc1VzZXIsIHZlcmlmeURhdGUsIGNvdW50cnksIG11bHRpcGxlVHlwZXNcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGVudW1cclxuICAgICAqIEBhbnlcclxuICAgICAqIEB1bmtub3duXHJcbiAgICAgKi9cclxuICAgIGVudW0gSm9iIHtGcm9udGVuZCA9IFwiRnJvbnRlbmQgV2ViIERldmVsb3BlclwiLCBCYWNrZW5kID0gXCJCYWNrZW5kIFdlYiBEZXZlbG9wZXJcIn07XHJcblxyXG4gICAgbGV0IGZyb250ZW5kOiBKb2IgPSBKb2IuRnJvbnRlbmQ7XHJcbiAgICBsZXQgcmFuZG9tQXJyYXk6IGFueVtdID0gW1wiU3RyaW5nXCIsIDEsIHRydWUsIG51bGwsIHVuZGVmaW5lZF07XHJcbiAgICBsZXQgdW5rbm93blZhcjogdW5rbm93biA9IFwiU3RyaW5nXCI7XHJcblxyXG4gICAgY29uc29sZS53YXJuKFwiTW9yZSBBZHZhbmNlZCBUeXBlcy5cIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHtmcm9udGVuZCwgcmFuZG9tQXJyYXksIHVua25vd25WYXI6ICh1bmtub3duVmFyIGFzIHN0cmluZyl9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHlwZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImV4cG9ydCB7fVxyXG5cclxuLyoqXHJcbiAqIFR5cGVzIFBhcnRzXHJcbiAqL1xyXG5pbXBvcnQgdHlwZXMgZnJvbSBcIi4vY2hhcHRlcnMvdHlwZXNcIjtcclxuLyoqXHJcbiAqIE1ldGhvZHNcclxuICovXHJcbmltcG9ydCBtZXRob2RzIGZyb20gXCIuL2NoYXB0ZXJzL21ldGhvZHNcIjtcclxuXHJcbnR5cGVzKCk7XHJcbm1ldGhvZHMoKTsiXSwic291cmNlUm9vdCI6IiJ9