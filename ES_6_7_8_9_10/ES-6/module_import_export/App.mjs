import addition, { sub, f1 } from "./Math.mjs";

let addResult = addition(2, 3);
console.log(`Addition is ${addResult}`);

let subResult = sub(5, 3);
console.log(`Subtraction is ${subResult}`);

f1();

// ES- module system
// if it is default, the name can be different