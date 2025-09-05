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
// 1-
// Types
var x = 5;
var y = "Omar";
var q = true;
var arr = [1, 2, 3, 4, 5];
var arr2 = ["Omar", "Ali", "Ahmed"];
var arr3 = [1, "Omar", true, 4.5];
console.log(x);
console.log(y);
console.log(q);
console.log(arr);
console.log(arr2);
console.log(arr3);
// Union Types
var z;
z = "Value";
console.log(z);
z = 10;
console.log(z);
// Function with typed arguments and return type
function add(a, b) {
    return a + b;
}
console.log("Sum is: " + add(5, 10));
// Enum
var directions;
(function (directions) {
    directions[directions["Up"] = 0] = "Up";
    directions[directions["Down"] = 1] = "Down";
    directions[directions["Left"] = 2] = "Left";
    directions[directions["Right"] = 3] = "Right";
})(directions || (directions = {}));
console.log("The up direction is: ".concat(directions.Up));
// Generics
function something(argument) {
    return argument;
}
console.log(something("Hello from generics"));
console.log(something(100));
// --- IGNORE --- 
// Modules
// Uncomment these 2-lines to test modules code but now its commented to avoid error because modules somehow is not working.
// import {test} from './index2';
// test(); 
// --- IGNORE ---   
// 2-
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        var _this = this;
        this.calculateLength = function () {
            return Math.sqrt(_this.x * _this.x + _this.y * _this.y);
        };
        this.x = x;
        this.y = y;
    }
    return Point2D;
}());
var point1 = new Point2D(2, 4);
console.log("The length of x,y is ".concat(point1.calculateLength()));
// 3-
var Point3D = /** @class */ (function (_super) {
    __extends(Point3D, _super);
    function Point3D(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.calculateLength = function () {
            return Math.sqrt(_this.x * _this.x + _this.y * _this.y + _this.z * _this.z);
        };
        _this.z = z;
        return _this;
    }
    return Point3D;
}(Point2D));
var point2 = new Point3D(2, 4, 6);
console.log("The length of x,y,z is ".concat(point2.calculateLength()));
