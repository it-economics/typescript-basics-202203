"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
var mystring = "some string";
var mynumber = 1234545;
var myboolean = true;
var myArray1 = ["string 01", "string 012"];
var myArray2 = [1, 2];
var myTuple = ["string", 2, "string 2", true];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color["Green"] = "Green";
    Color["Blue"] = "Blue";
})(Color || (Color = {}));
Color.Red;
var myAny = "String";
myAny = 1;
myAny = "string 02";
// myAny = true;
myAny.length;
function add(x, y) {
    return x + y;
}
var myAdd = function (x, y) { return x + y; };
console.log(myAdd(1, 2));
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
        this.age = 5;
    }
    Object.defineProperty(Animal.prototype, "animalAge", {
        get: function () { return this.age; },
        set: function (value) { this.age = value; },
        enumerable: false,
        configurable: true
    });
    Animal.prototype.move = function (distance) {
        // console.log(this.name + " moved " + distance + "m");
        console.log("".concat(this.name, " moved ").concat(distance, "m"));
    };
    return Animal;
}());
var animal = new Animal("Tier");
animal.move(22);
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog(name) {
        return _super.call(this, name) || this;
    }
    Dog.prototype.move = function (distance) {
        console.log("Bark and move");
        _super.prototype.move.call(this, distance);
    };
    return Dog;
}(Animal));
var dog = new Dog("Max");
dog.move(33);
dog.animalAge = 10;
console.log(dog.animalAge);
var obj = {
    label: "some label",
    value: 1
};
// const defaultObj: object = { label: "label" }
var objs = [
    { label: "first" },
    { label: "second", value: 2 },
];
