let score = 33
// console.log(typeof score);  //? number
// console.log(typeof (score));    //? number

let convertToNumber = Number(score)
// console.log(typeof convertToNumber);  //? number
// console.log(convertToNumber);   //? 33
//!===================================================
let scoreClass = `33A`;
let convertStringToNumber = Number(scoreClass)

// console.log(typeof scoreClass);     //? string
// console.log(typeof convertStringToNumber);  //? number
// console.log(convertStringToNumber);     //? NaN
//!===================================================
let scoreValue = null
let convertNullToNumber = Number(scoreValue)

// console.log(typeof scoreValue);     //? object
// console.log(typeof convertNullToNumber);   //? number
// console.log(convertNullToNumber);     //? 0
//!===================================================
let booleanScore = true
let convertBooleanToNumber = Number(booleanScore)

// console.log(typeof booleanScore);  //? boolean
// console.log(typeof convertBooleanToNumber);   //? number
// console.log(convertBooleanToNumber);   //? 1.  //if false, value = 0
//!===================================================
let teamName = "Gryffindor"

let valueOfTeamName = Number(teamName)

// console.log(typeof teamName);   //? string
// console.log(typeof valueOfTeamName);  //? number
// console.log(valueOfTeamName);   //? NaN
//!===================================================
//!===================================================

let isLoggedIn = 1;
let convertToBoolean = Boolean(isLoggedIn)

// console.log(typeof isLoggedIn);     //? number
// console.log(typeof convertToBoolean);   //? boolean
// console.log(convertToBoolean);      //? true.
//!===================================================

let empName = "Phoneix"
let convertStringToBoolean = Boolean(empName)

// console.log(typeof empName);    //? string
// console.log(typeof convertStringToBoolean);  //? boolean
// console.log(convertStringToBoolean);    //? true
//!===================================================
let emptyName = ""
let convertEmptyStringToBoolean = Boolean(empName)

console.log(typeof emptyName);    //? string
console.log(typeof convertEmptyStringToBoolean);  //? boolean
console.log(convertEmptyStringToBoolean);    //? true
//!===================================================
//!===================================================

let someNumber = 33
let convertNumberToString = String(someNumber)

// console.log(typeof someNumber);     //? Number
// console.log(typeof convertNumberToString);  //? string
// console.log(convertNumberToString);     //? 33
//!===================================================

