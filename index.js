"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const person_1 = require("./person");
console.log(person_1.person);
let message = "Hello";
//any qualquer valor
let welcome = "welcome";
welcome = 2;
console.log(welcome);
// Listas
const ids = [1, 2, 3];
const names = ['felipe', 'ana', 'josé'];
const booleanos = [true, false, false, true];
//intersection types
const productId = 'felipe';
//Enums
var ProductCategory;
(function (ProductCategory) {
    ProductCategory["tshirts"] = "Camiseta";
    ProductCategory["shoes"] = "Sapatos";
})(ProductCategory || (ProductCategory = {}));
var Direction;
(function (Direction) {
    Direction[Direction["up"] = 1] = "up";
    Direction[Direction["down"] = 2] = "down";
    Direction[Direction["left"] = 3] = "left";
})(Direction || (Direction = {}));
const shoesCategory = ProductCategory.tshirts;
const left = Direction.left; //3
console.log(shoesCategory);
