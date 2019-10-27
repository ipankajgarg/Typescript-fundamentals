"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var numbersCollection = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection);
function fun(obj) {
    console.log(obj);
}
var obj = { a: 1, b: 1 };
fun(obj);
