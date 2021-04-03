/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./chapters/classes.ts":
/*!*****************************!*\
  !*** ./chapters/classes.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports) {


var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
var classes = function () {
    var Person = /** @class */ (function () {
        function Person(name) {
            this.fullName = name;
            var names = name.split(" ");
            this.firstName = names[0];
            this.lastName = names.length > 1 ? names[1] : null;
        }
        Person.prototype.greet = function () {
            console.log("Good Morning " + this.firstName);
        };
        return Person;
    }());
    var Employee = /** @class */ (function (_super) {
        __extends(Employee, _super);
        function Employee(name, position) {
            var _this = _super.call(this, name) || this;
            _this.position = position;
            return _this;
        }
        Employee.prototype.positionTasks = function () {
            console.log("Hello " + this.firstName + ", Your Position Is " + this.position + ", So Your Tasks Is Developing Websites.");
        };
        return Employee;
    }(Person));
    var employee1 = new Employee("Bishoy Romany", "Web Developer");
    console.log("Classes");
    console.table({ classData: employee1, fullName: employee1.fullName });
    employee1.greet();
    employee1.positionTasks();
};
exports.default = classes;


/***/ }),

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
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
 * Methods / Interfaces
 */
var methods_1 = __webpack_require__(/*! ./chapters/methods */ "./chapters/methods.ts");
/**
 * Classes
 */
var classes_1 = __webpack_require__(/*! ./chapters/classes */ "./chapters/classes.ts");
types_1.default();
methods_1.default();
classes_1.default();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90eXBlc2NyaXB0LXR1dC8uL2NoYXB0ZXJzL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10dXQvLi9jaGFwdGVycy9tZXRob2RzLnRzIiwid2VicGFjazovL3R5cGVzY3JpcHQtdHV0Ly4vY2hhcHRlcnMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10dXQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHlwZXNjcmlwdC10dXQvLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNLE9BQU8sR0FBRztJQUNaO1FBS0ksZ0JBQVksSUFBWTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3ZELENBQUM7UUFFRCxzQkFBSyxHQUFMO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQkFBZ0IsSUFBSSxDQUFDLFNBQVcsQ0FBQyxDQUFDO1FBQ2xELENBQUM7UUFDTCxhQUFDO0lBQUQsQ0FBQztJQUVEO1FBQXVCLDRCQUFNO1FBRXpCLGtCQUFZLElBQVksRUFBRSxRQUFnQjtZQUExQyxZQUNJLGtCQUFNLElBQUksQ0FBQyxTQUVkO1lBREcsS0FBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7O1FBQzdCLENBQUM7UUFFRCxnQ0FBYSxHQUFiO1lBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFTLElBQUksQ0FBQyxTQUFTLDJC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LEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQztJQUM5RCxJQUFJLFVBQVUsR0FBWSxRQUFRLENBQUM7SUFFbkMsT0FBTyxDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO0lBQ3JDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBQyxRQUFRLFlBQUUsV0FBVyxlQUFFLFVBQVUsRUFBRyxVQUFxQixFQUFDLENBQUMsQ0FBQztBQUMvRSxDQUFDO0FBRUQsa0JBQWUsS0FBSyxDQUFDOzs7Ozs7O1VDeENyQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUNwQkE7O0dBRUc7QUFDSCxpRkFBcUM7QUFDckM7O0dBRUc7QUFDSCx1RkFBeUM7QUFFekM7O0dBRUc7QUFDSCx1RkFBeUM7QUFFekMsZUFBSyxFQUFFLENBQUM7QUFDUixpQkFBTyxFQUFFLENBQUM7QUFDVixpQkFBTyxFQUFFLENBQUMiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjbGFzc2VzID0gKCkgPT4ge1xyXG4gICAgY2xhc3MgUGVyc29ue1xyXG4gICAgICAgIHByb3RlY3RlZCBmaXJzdE5hbWU6IHN0cmluZztcclxuICAgICAgICBwcml2YXRlIGxhc3ROYW1lOiBzdHJpbmc7XHJcbiAgICAgICAgcHVibGljIGZ1bGxOYW1lOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihuYW1lOiBzdHJpbmcpe1xyXG4gICAgICAgICAgICB0aGlzLmZ1bGxOYW1lID0gbmFtZTtcclxuICAgICAgICAgICAgbGV0IG5hbWVzID0gbmFtZS5zcGxpdChcIiBcIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyc3ROYW1lID0gbmFtZXNbMF07XHJcbiAgICAgICAgICAgIHRoaXMubGFzdE5hbWUgPSBuYW1lcy5sZW5ndGggPiAxID8gbmFtZXNbMV0gOiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ3JlZXQoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEdvb2QgTW9ybmluZyAke3RoaXMuZmlyc3ROYW1lfWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjbGFzcyBFbXBsb3llZSBleHRlbmRzIFBlcnNvbntcclxuICAgICAgICBwcml2YXRlIHBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgICAgICAgY29uc3RydWN0b3IobmFtZTogc3RyaW5nLCBwb3NpdGlvbjogc3RyaW5nKXtcclxuICAgICAgICAgICAgc3VwZXIobmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBvc2l0aW9uVGFza3MoKXtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEhlbGxvICR7dGhpcy5maXJzdE5hbWV9LCBZb3VyIFBvc2l0aW9uIElzICR7dGhpcy5wb3NpdGlvbn0sIFNvIFlvdXIgVGFza3MgSXMgRGV2ZWxvcGluZyBXZWJzaXRlcy5gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGVtcGxveWVlMSA9IG5ldyBFbXBsb3llZShcIkJpc2hveSBSb21hbnlcIiwgXCJXZWIgRGV2ZWxvcGVyXCIpO1xyXG4gICAgY29uc29sZS5sb2coXCJDbGFzc2VzXCIpO1xyXG4gICAgY29uc29sZS50YWJsZSh7Y2xhc3NEYXRhOiBlbXBsb3llZTEsIGZ1bGxOYW1lOiBlbXBsb3llZTEuZnVsbE5hbWV9KTtcclxuICAgIGVtcGxveWVlMS5ncmVldCgpO1xyXG4gICAgZW1wbG95ZWUxLnBvc2l0aW9uVGFza3MoKTtcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzZXM7IiwiY29uc3QgbWV0aG9kcyA9ICgpID0+IHtcclxuICAgIGNvbnN0IHllYXJUb01vbnRocyA9ICh5ZWFyOiBudW1iZXIsIHNlY29uZFllYXI/Om51bWJlcik6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHllYXIgKiAxMiAqIChzZWNvbmRZZWFyID8gc2Vjb25kWWVhcjogMSk7XHJcbiAgICB9XHJcblxyXG4gICAgaW50ZXJmYWNlIFBlcnNvbiB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgbGFzdE5hbWU/OiBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBmdWxsTmFtZSA9IChwZXJzb246IFBlcnNvbik6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGAke3BlcnNvbi5maXJzdE5hbWV9ICR7cGVyc29uLmxhc3ROYW1lID8gcGVyc29uLmxhc3ROYW1lIDogJyd9YDtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGVyc29uOiBQZXJzb24gPSB7XHJcbiAgICAgICAgZmlyc3ROYW1lOiBcIkJpc2hveVwiLCBcclxuICAgICAgICBsYXN0TmFtZTogXCJSb21hbnlcIlxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhcIk1ldGhvZHNcIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHtcclxuICAgICAgICBhZ2U6IHllYXJUb01vbnRocygzMCwgMTApLFxyXG4gICAgICAgIGZ1bGxOYW1lOiBmdWxsTmFtZShwZXJzb24pXHJcbiAgICB9KVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtZXRob2RzOyIsImNvbnN0IHR5cGVzID0gKCkgPT4ge1xyXG4gICAgLyoqXHJcbiAgICAgKiBAc3RyaW5nXHJcbiAgICAgKiBAbnVtYmVyXHJcbiAgICAgKiBAYm9vbGVhblxyXG4gICAgICogQG51bGxcclxuICAgICAqIEB1bmRlZmluZWRcclxuICAgICAqL1xyXG5cclxuICAgIGxldCBuYW1lOiBzdHJpbmcgPSBcIk5hbWVcIjtcclxuICAgIGxldCBuYW1lczogc3RyaW5nW10gPSBbXCJOYW1lMVwiLCBcIk5hbWUyXCJdO1xyXG4gICAgbGV0IGFnZTogbnVtYmVyID0gMTA7XHJcbiAgICBsZXQgYWdlczogQXJyYXk8bnVtYmVyPiA9IFsxLDJdO1xyXG4gICAgbGV0IG5hbWVzQWdlczogW3N0cmluZywgbnVtYmVyXSA9IFtcIk5hbWUxXCIsIDJdO1xyXG4gICAgbGV0IHVubGltaXRlZE5hbWVzQWdlczogYW55W10gPSBbXCJOYW1lMVwiLCAxMCwgMjAsIFwiTmFtZTJcIl07XHJcbiAgICBsZXQgaXNVc2VyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGxldCB2ZXJpZnlEYXRlOiBudWxsID0gbnVsbDtcclxuICAgIGxldCBjb3VudHJ5OiB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcbiAgICBsZXQgbXVsdGlwbGVUeXBlczogc3RyaW5nIHwgbnVtYmVyID0gXCJDb3VsZCBCZSBTdHJpbmcgT3IgTnVtYmVyXCI7XHJcbiAgICBcclxuICAgIGNvbnNvbGUud2FybihcIkJhc2ljIFR5cGVzLlwiKTtcclxuICAgIGNvbnNvbGUudGFibGUoe1xyXG4gICAgICAgIG5hbWUsIG5hbWVzLCBhZ2UsIGFnZXMsIG5hbWVzQWdlcywgdW5saW1pdGVkTmFtZXNBZ2VzLCBpc1VzZXIsIHZlcmlmeURhdGUsIGNvdW50cnksIG11bHRpcGxlVHlwZXNcclxuICAgIH0pO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQGVudW1cclxuICAgICAqIEBhbnlcclxuICAgICAqIEB1bmtub3duXHJcbiAgICAgKi9cclxuICAgIGVudW0gSm9iIHtGcm9udGVuZCA9IFwiRnJvbnRlbmQgV2ViIERldmVsb3BlclwiLCBCYWNrZW5kID0gXCJCYWNrZW5kIFdlYiBEZXZlbG9wZXJcIn07XHJcblxyXG4gICAgbGV0IGZyb250ZW5kOiBKb2IgPSBKb2IuRnJvbnRlbmQ7XHJcbiAgICBsZXQgcmFuZG9tQXJyYXk6IGFueVtdID0gW1wiU3RyaW5nXCIsIDEsIHRydWUsIG51bGwsIHVuZGVmaW5lZF07XHJcbiAgICBsZXQgdW5rbm93blZhcjogdW5rbm93biA9IFwiU3RyaW5nXCI7XHJcblxyXG4gICAgY29uc29sZS53YXJuKFwiTW9yZSBBZHZhbmNlZCBUeXBlcy5cIik7XHJcbiAgICBjb25zb2xlLnRhYmxlKHtmcm9udGVuZCwgcmFuZG9tQXJyYXksIHVua25vd25WYXI6ICh1bmtub3duVmFyIGFzIHN0cmluZyl9KTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdHlwZXM7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsImV4cG9ydCB7fVxyXG5cclxuLyoqXHJcbiAqIFR5cGVzIFBhcnRzXHJcbiAqL1xyXG5pbXBvcnQgdHlwZXMgZnJvbSBcIi4vY2hhcHRlcnMvdHlwZXNcIjtcclxuLyoqXHJcbiAqIE1ldGhvZHMgLyBJbnRlcmZhY2VzXHJcbiAqL1xyXG5pbXBvcnQgbWV0aG9kcyBmcm9tIFwiLi9jaGFwdGVycy9tZXRob2RzXCI7XHJcblxyXG4vKipcclxuICogQ2xhc3Nlc1xyXG4gKi9cclxuaW1wb3J0IGNsYXNzZXMgZnJvbSBcIi4vY2hhcHRlcnMvY2xhc3Nlc1wiO1xyXG5cclxudHlwZXMoKTtcclxubWV0aG9kcygpO1xyXG5jbGFzc2VzKCk7Il0sInNvdXJjZVJvb3QiOiIifQ==