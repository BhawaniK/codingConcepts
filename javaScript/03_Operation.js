let value = 3;
let negValue = -value;

console.log(negValue);

console.log(2 + 2); //? Addition
console.log(2 - 2); //? Substraction
console.log(2 * 2); //? Multiplication
console.log(2 ** 2); //? Power
console.log(2 / 2); //? Divide
console.log(2 % 2); //? Remainder

let str1 = "Hello";
let str2 = "_bk";

let str3 = str1 + str2;
console.log(str3); //? Hello_bk

console.log("1" + 2); //? 12
console.log(1 + "2"); //? 12
console.log("1" + "2"); //? 12
console.log("1" + 2 + 2); //? 122 //? Becoz the 1st ele is string
console.log(2 + 2 + "1"); //? 41  //? As the 1st ele is number performs numeric operation first then, adds the string to it.

//- Operations are performed based on the 1st input value

//!==============================================================================
//!==============================================================================

let gameCounter = 100;
console.log(++gameCounter); //? 101, incremented then the value being returned
console.log(gameCounter++); //? 100, returns the value before the initialization of the incremntation.
