//? Variables are of 3 types:
//?     - var
//?         - Global Scoped
//?     - let
//?         - Functional / Block scoped.
//?         - can be reassigned / redeclared
//?     - const
//?         - Functional / Block scoped.
//?         - cannot be reassigned / redeclared
//?         - need to initialized while declaration

//!==============================================================

"use strict"; //? treat all JS code as newer version

//? Basic DataTypes : Primitive , Non-Primitive
//? Primitive
//* String
let name = "Bhawani_K"

//* Number
let number = 500

//* BigInt
let bigNumber = 26615415151216518484515165151565n

//* Boolean
let truth = false

//* null, special type : empty.. | standaloneValue
let date = null

//* unDefined, variable declared but not defined
let dob;

//* Symbol, to find the uniqueness
let place = Symbol('silk City')

//! ---------------------------------------------

//? Non-Primitive
//* Object
let std = {
    firstName : 'Bhawani_K',
    lastName : 'null',
    domain : 's/w engineer'
}

//* arrays
let gender = ['male', 'female', 'trans', 'Prefer not to say']

//* typeOf
console.log(typeof name); //string
console.log(typeof truth); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // Object