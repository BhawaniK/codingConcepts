console.log(2 > 1);
console.log(2 >= 1);
console.log(2 < 1);
console.log(2 == 1);
console.log(2 != 1);

//!=====================================================

console.log("2" > 1); //? true, because javascript converts '2' to number automatically
console.log("02" > 1); //? true, same as above..

//!======================================================

console.log(null > 0); //? false
console.log(null == 0); //? false
console.log(null >= 0); //? true, because javascript converts null to number due to which it didnt gives the predictable results

//!======================================================

console.log(undefined > 0); //? false
console.log(undefined < 0); //? false
console.log(undefined == 0); //? false

//!======================================================
//!======================================================

// === //- checks the dateType and the value to be compared
console.log("2" === 2);  //? false
console.log(2 === 2);   //? true