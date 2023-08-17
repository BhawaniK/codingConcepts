const score = 400;
// console.log(score); //? DtaType is number, but loosely Typed

const balance = new Number(100);
// console.log(balance);   //? Explicitly defines the variable is of Number Type.

//!================================================================

// console.log(balance.toString());    //? 100, but changes the dataType to String.
// console.log(typeof balance.toString()); //? string

// console.log(balance.toFixed(2));  //? 100.00, checks after the decimal point

// const otherNum = 789.44
// console.log(otherNum.toPrecision(3));   //? checks for the number of significant digits
// console.log(otherNum.toPrecision(2));   //? Priority is before decimal, rest gives the number in exponential format.

// const hundreds = 1000000
// console.log(hundreds.toLocaleString());
// console.log(hundreds.toLocaleString("en-US"));

//!==================================================================
//!==================================================================

// console.log(Math);  //? Browser shows more of the Properties clearly

// console.log(Math.abs(-4));  //? Returns the absolute value of the number
// console.log(Math.round(4.33));  //? rounds to nearest number
// console.log(Math.ceil(4.2));  //? grabs the nearest greater number
// console.log(Math.floor(4.7));   //? grabs the nearest smaller number

// console.log(Math.sqrt(36)); //? 6. returns the baseValue of a number
// console.log(Math.pow(5,2));   //? 25. takes 2 args, 1st- the number, 2: number of times to be multiplied

// console.log(Math.min(4,5,2,7,6)); //? 2, returns the smaller number from an Array.
// console.log(Math.max(4,5,2,7,6));   //? 7, returns the highest number.

// console.log(Math.random()); //? gets the number b/w 0-1
// //- wrap the Math.random() in (),  to avoid the unnecessary BODMAS calculation or any clash..
// console.log((Math.random() * 10) + 1); //? gets the number b/w 0-1, multiplies by 10 => single digit number. Possiblity of getting a 0, soo add 1 to fetched number.
// console.log(Math.floor(Math.random() * 10) + 1); //? removes the unnecessary decimal numbers, gets the lowest digit

// const min = 10;
// const max = 20;
// console.log(Math.random()*(max-min+1)); //? max-min is to get a range, +1 to avoid getting 0.
// console.log(Math.floor(Math.random()*(max-min+1))+min); //- to remove the unnecessary decimal nums & +min to get the numbers within the range.
