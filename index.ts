import { person } from "./person";

console.log(person)

let message: string = "Hello";

//any qualquer valor
let welcome: any = "welcome";
welcome = 2;
console.log(welcome)

// Listas
const ids: number[]=[1,2,3];
const names:string[]= ['felipe', 'ana', 'josé'];
const booleanos:boolean[]= [true, false, false,true];

//intersection types
const productId: string | number = 'felipe';

//Enums
enum ProductCategory{
    tshirts="Camiseta",
    shoes = "Sapatos",
}

enum Direction{
    up=1,
    down=2,
    left=3,
}

const shoesCategory = ProductCategory.tshirts;
const left = Direction.left;//3
console.log(shoesCategory)