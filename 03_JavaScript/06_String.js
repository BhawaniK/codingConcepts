const name = 'Bhawani_K'
const repocount = 15

console.log(name + " has a repo count of "+ repocount); //! outdated
console.log(`Hello!, my name is ${name} iam having a repoCount of ${repocount}`); //? StringInterpolation, ES_6 Feature

//- Declaration
//? 1. By using "Abc", 'singleQuote', `BackTick`
//? 2. By using constructor or new Keyword

const gameName = new String('Tennis')

//!============================================================
//!============================================================

//- Accessing the String Methods
console.log(gameName[0]);   //? T
console.log(gameName.__proto__);    //? {}, while checking in browser its having lots of properties in it. Here we can access those methods directly.
console.log(gameName.length);
console.log(gameName.toUpperCase); //- gets the reference of the function.
console.log(gameName.toUpperCase());
console.log(gameName.charAt(5)); //* gets the value at given index
console.log(gameName.indexOf('i'));   //* gets the position/index of the given element

const newStr = gameName.substring(0,4) //? doesn't takes the -ve value
console.log(newStr);    //?

const anotherStr = gameName.slice(0,5) //? takes the start and end point, can have -ve value too.
console.log(anotherStr);

const otherStr = gameName.slice(-6,5)   //? it reverses counts and prints the string
console.log(otherStr);

const trimMethod = "       Abc..   "
console.log(trimMethod);
console.log(trimMethod.trim()); //? removes the extra whiteSpaces and the extra newLine "\n"

const url = "https://abc%20xyz"
console.log(url.replace('%20','-'));  //https://abc-xyz   //? replaces %20 with -
console.log(url.includes('abc'));  //true  //? check if it has the ele in the value
console.log(url.includes('#')); //false   //? checks if it has # in the url

const splitStr = 'A-B-C-D'
console.log(splitStr.split('-')); //? splits the string based on '-', and lists all the elements in an Array



